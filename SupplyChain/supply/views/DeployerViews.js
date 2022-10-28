import React from 'react';
import PlayerViews from './PlayerViews';

const exports = {...PlayerViews};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Deployer">
        <h2>Product Deployer (Alice) (Seller)</h2>
        {content}
      </div>
    );
  }
} 

exports.DeployProduct = class extends React.Component {
  render() {
    const {parent, standardUnit} = this.props;
    const productId = (this.state || {}).productId || '';
    const productName = (this.state || {}).productName || '';
    const productPrice = (this.state || {}).productPrice || '';
    return (
      <div>
        <h3>Deploy Product</h3>
        <br />
        <label for='PID'>Product ID(Max ID: 10):</label>
        <input
          className='PID'
          id= 'PID'
          type='number'
          placeholder='0'
          min='0'
          max='10'
          required
          onChange={(e) => this.setState({productId: e.currentTarget.value})}
        />
        <label for='PNAME'>Product Name(Max Length: 20):</label>
        <input
          className='PNAME'
          id='PNAME'
          type='text'
          placeholder='Apple'
          minlength='1'
          maxlength='20'
          required
          onChange={(e) => this.setState({productName: e.currentTarget.value})}
        />
        <label for='PPRICE'>Product Price:</label>
        <input
         className='PPRICE'
          id='PPRICE'
          type='number'
          placeholder='2'
          required
          onChange={(e) => this.setState({productPrice: e.currentTarget.value})} 
        /> <h3 class="Unit"/>{standardUnit}
        <button className="DeployButton" onClick={() => parent.deployProduct(productId, productName, productPrice)}>Deploy Product</button>
      </div>
    );
  }
}
exports.Deploy = class extends React.Component {
  render() {
    const {parent, standardUnit} = this.props;
    const {productId, productName, productPrice} = this.props;
    return (
      <div>
        Product ID: <strong>{productId}</strong>
        <br/>
        Product Name: <strong>{productName}</strong>
        <br/>
        Product Price: <strong>{productPrice} {standardUnit}</strong>
        <br/>
        <button 
          onClick={() => parent.deploy()}
        >Deploy</button>
      </div>
    );
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div>Deploying... please wait.</div>
    );
  }
}

exports.WaitingForAttacher = class extends React.Component {
  async copyToClipboard(button) {
    const {ctcInfoStr} = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = 'Copied!';
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }

  render() {
    const {ctcInfoStr} = this.props;
    return (
      <div>
        Waiting for Attacher to join...
        <br /> Please give them this contract info:
        <pre className='ContractInfo'>
          {ctcInfoStr}
        </pre>
        <button
          onClick={(e) => this.copyToClipboard(e.currentTarget)}
        >Copy to clipboard</button>
      </div>
    )
  }
}

export default exports;