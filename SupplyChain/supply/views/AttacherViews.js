import React from 'react';
import PlayerViews from './PlayerViews';

const exports = {...PlayerViews};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Attacher">
        <h2>Attacher (Bob) (Buyer)</h2>
        {content}
      </div>
    );
  }
}

exports.AttachProduct = class extends React.Component {
  render() {
    const {parent} = this.props;
    const {ctcInfoStr} = this.state || {};
    return (
      <div>
        Please paste the contract info to attach to:
        <br />
        <textarea spellCheck="false"
          className='ContractInfo'
          onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}
          placeholder='{}'
        />
        <br />
        <button
          disabled={!ctcInfoStr}
          onClick={() => parent.attach(ctcInfoStr)}
        >Attach</button>
      </div>
    );
  }
}

exports.Attaching = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
        Attaching, please wait...
      </div>
    );
  }
}

exports.ShowProductDetails = class extends React.Component {
  render() {
    const {productId, productName, productPrice, standardUnit, parent} = this.props;
    const {disabled} = this.state || {};
    return (
      <div>
        <h3 class='Caution'>Please Check Product Details Before You Signature The Contact</h3>
        The product details are:
        <br /> Product ID: {productId}
        <br /> Product Name: {productName}
        <br /> Product Price: {productPrice} {standardUnit}
        <br />
        <h5 class='Caution'>Caution: After the Signature may have to wait for a few seconds. Please Be Patient.</h5>
      </div>
    );
  }
}

exports.ConfirmProduct = class extends React.Component {
  render() {
    const {productPrice, standardUnit, parent} = this.props;
    const {disabled} = this.state || {};
    return (
      <div>
        Product Price: {productPrice} {standardUnit}
        <br/> 
        <button 
          disabled={disabled}
          onClick={() => {
            this.setState({disabled: true});
            parent.productBought();
          }}
        >Do Payment</button>
      </div>
    );
  }
}

exports.ProductBought = class extends React.Component {
  render() {
    return (
      <div>
        <h3>Processing Your Payment</h3>
        Please Be Patient...
        <br/>
      </div>
    );
  }
}

export default exports;