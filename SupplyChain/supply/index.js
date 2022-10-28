import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import AttacherViews from './views/AttacherViews';
import {renderDOM, renderView} from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
//This was set to ALGO since for some reason process.env was not working for me. 
const reach = loadStdlib('ALGO');//process.env);

import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
reach.setWalletFallback(reach.walletFallback({
 providerEnv: 'TestNet', MyAlgoConnect }));

const PRODUCTID = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const {standardUnit} = reach;
const defaults = {defaultFundAmt: '100', defaultPrice: '10', standardUnit};

class App extends React.Component {
    constructor(props) {
        super(props);   
        this.state = {view: 'ConnectAccount',...defaults,};
    }
    async componentDidMount() {
        const acc = await reach.getDefaultAccount();
        const balAtomic = await reach.balanceOf(acc);
        const bal = reach.formatCurrency(balAtomic, 4);
        this.setState({acc, bal});
        if(await reach.canFundFromFaucet()) {
            this.setState({view: 'FundAccount'});
        } else {
            this.setState({view: 'DeployerOrAttacher'});
        }
    }
    async fundAccount(fundAmount) {
        await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
        this.setState({view: 'DeployerOrAttacher'});
    }
    async skipFundAccount() { this.setState({view: 'DeployerOrAttacher'}); }
    selectAttacher() { this.setState({view: 'Wrapper', ContentView: Attacher}); }
    selectDeployer() { this.setState({view: 'Wrapper', ContentView: Deployer}); }
    render() { return renderView(this, AppViews); }
}

class Visitor extends React.Component {
    random() { return reach.hasRandom.random(); }
    seeResult(PriceNo, IdNo, NameNo) { 
        const productPrice = reach.formatCurrency(PriceNo, 4);
        this.setState({view: 'Done', productPrice, productId: PRODUCTID[IdNo], productName: NameNo});
    }
    informTimeout() { this.setState({view: 'Timeout'}); }
}

class Deployer extends Visitor {
    constructor(props) {
        super(props);
        this.state = {view: 'DeployProduct'};
    }

    deployProduct(productId, productName, productPrice) { this.setState({view: 'Deploy', productId, productName, productPrice}); }
    
    async deploy() {
        
        const ctc = this.props.acc.contract(backend);
        this.setState({view: 'Deploying', ctc});
        this.productId = this.state.productId;
        this.productName = this.state.productName;
        this.productPrice = reach.parseCurrency(this.state.productPrice);
        this.deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector];
        backend.Alice(ctc, this);
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        this.setState({view: 'WaitingForAttacher', ctcInfoStr});
    }
    render() { return renderView(this, DeployerViews); }
}

class Attacher extends Visitor {
    constructor(props) {
        super(props);
        this.state = {view: 'AttachProduct'};
    }

    attach(ctcInfoStr) {
        const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
        this.setState({view: 'Attaching'});
        backend.Bob(ctc, this); 
    }

    receiveTheProduct(IdNo, NameNo, PriceNo) {
        const productPrice = reach.formatCurrency(PriceNo, 4);
        this.setState({view: 'ShowProductDetails', productPrice, productId: PRODUCTID[IdNo], productName: NameNo});
    }

    async DoPayment(PaymentAtomic) {
        const productPrice = reach.formatCurrency(PaymentAtomic, 4);
        return await new Promise(resolveConfirmedP => {
            this.setState({view: 'ConfirmProduct',productPrice, resolveConfirmedP});
        });
    }

    productBought() {
        this.state.resolveConfirmedP();
        this.setState({view: 'ProductBought'}); 
    }
    render() { return renderView(this, AttacherViews); }
}

renderDOM(<App />);