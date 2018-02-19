import React, { Component } from 'react';
import ccxt from 'ccxt';
import Chart from "frappe-charts/dist/frappe-charts.min.esm";
import './index.css';
import { Button, Table } from 'react-bootstrap';
class App extends Component {



  constructor(props) {
    super(props);
    this.state = { exchangeName: "", BTCLastPriceBinance: "", BTCLastPriceBittrex: "", BTCLastPriceCryptoPia: "" };

  }

  componentDidMount() {
    let data = {
      labels: ["12am-3am", "3am-6am", "6am-9am", "9am-12pm",
        "12pm-3pm", "3pm-6pm", "6pm-9pm", "9pm-12am"],
  
      datasets: [
        {
          title: "Some Data",
          values: [25, 40, 30, 35, 8, 52, 17, -4]
        },
        {
          title: "Another Set",
          values: [25, 50, -10, 15, 18, 32, 27, 14]
        },
        {
          title: "Yet Another",
          values: [15, 20, -3, -15, 58, 12, -17, 37]
        }
      ]
    };
  
    let chart = new Chart({
      parent: "#chart", // or a DOM element
      title: "My Awesome Chart",
      data: data,
      type: 'bar', // or 'line', 'scatter', 'pie', 'percentage'
      height: 250,
  
      colors: ['#7cd6fd', 'violet', 'blue'],
      // hex-codes or these preset colors;
      // defaults (in order):
      // ['light-blue', 'blue', 'violet', 'red',
      // 'orange', 'yellow', 'green', 'light-green',
      // 'purple', 'magenta', 'grey', 'dark-grey']
  
      format_tooltip_x: d => (d + '').toUpperCase(),
      format_tooltip_y: d => d + ' pts'
    });
    // super(props);
    const exchangeBinance = new ccxt.binance();
    const symbolBinance = 'BTC/USDT'
    exchangeBinance.apiKey = '123';
    exchangeBinance.secret = '123';
    console.log(exchangeBinance);
    this.setState({ exchangeName: "Binance" });
    exchangeBinance.fetchTicker(symbolBinance).then(ticker => {
      const text = [
        exchangeBinance.id,
        symbolBinance,
        JSON.stringify(ticker, undefined, '\n\t')
      ]
      console.log(ticker)
      let data = JSON.parse(text[2]);
      data['info']['lastPrice']
      console.log(data['info']['lastPrice']);
      this.setState({ BTCLastPriceBinance: data['info']['lastPrice'] });
      // document.getElementById('content').innerHTML = text.join(' ')
    })

    const exchangeBittrex = new ccxt.bittrex();
    const symbolBittrex = 'BTC/USDT'
    exchangeBittrex.apiKey = '123';
    exchangeBittrex.secret = '123';
    console.log(exchangeBittrex);
    this.setState({ exchangeName: "Binance" });
    exchangeBittrex.fetchTicker(symbolBittrex).then(ticker => {
      const text = [
        exchangeBittrex.id,
        symbolBittrex,
        JSON.stringify(ticker, undefined, '\n\t')
      ]
      console.log(ticker)
      let data = JSON.parse(text[2]);
      data['info']['lastPrice']
      console.log(data['info']['lastPrice']);
      this.setState({ BTCLastPriceBittrex: data['last'] });
      // document.getElementById('content').innerHTML = text.join(' ')
    })


    const exchangeCryptopia = new ccxt.cryptopia();
    const symbolcryptopia = 'BTC/USDT'
    exchangeCryptopia.apiKey = '123';
    exchangeCryptopia.secret = '123';
    console.log(exchangeCryptopia);
    this.setState({ exchangeName: "Binance" });
    exchangeCryptopia.fetchTicker(symbolcryptopia).then(ticker => {
      const text = [
        exchangeCryptopia.id,
        symbolcryptopia,
        JSON.stringify(ticker, undefined, '\n\t')
      ]
      console.log(ticker)
      let data = JSON.parse(text[2]);
      data['info']['lastPrice']
      console.log(data['info']['lastPrice']);
      this.setState({ BTCLastPriceCryptoPia: data['last'] });
      // document.getElementById('content').innerHTML = text.join(' ')
    })
  }

  binance = () => {
    const exchange = new ccxt.binance();
    const symbol = 'BTC/USDT'
    exchange.apiKey = '123';
    exchange.secret = '123';
    console.log(exchange);
    this.setState({ exchangeName: "Binance" });
    exchange.fetchTicker(symbol).then(ticker => {
      const text = [
        exchange.id,
        symbol,
        JSON.stringify(ticker, undefined, '\n\t')
      ]
      console.log(ticker)
      let data = JSON.parse(text[2]);
      data['info']['lastPrice']
      console.log(data['info']['lastPrice']);
      this.setState({ BTCLastPriceBinance: data['info']['lastPrice'] });
      // document.getElementById('content').innerHTML = text.join(' ')

      let dataa = {
        labels: ["BitCoin"],

        datasets: [
          {
            title: "Some Data", color: "light-blue",
            values: [data['info']['lastPrice']]
          }
        ]
      };

      new Chart({
        parent: "#chart", // or a DOM element
        title: "My Awesome Chart",
        data: dataa,
        type: 'bar', // or 'line', 'scatter', 'pie', 'percentage'
        height: 250,

        colors: ['#7cd6fd', 'violet', 'blue'],
        // hex-codes or these preset colors;
        // defaults (in order):
        // ['light-blue', 'blue', 'violet', 'red',
        // 'orange', 'yellow', 'green', 'light-green',
        // 'purple', 'magenta', 'grey', 'dark-grey']

        format_tooltip_x: d => (d + '').toUpperCase(),
        format_tooltip_y: d => d + ' pts'
      });

    })
  }

  bittrex = () => {
    const exchange = new ccxt.bittrex();
    const symbol = 'BTC/USDT'
    exchange.apiKey = '';
    exchange.secret = '';
    console.log(exchange)
    this.setState({ exchangeName: "Bittrex" });
    exchange.fetchTicker(symbol).then(ticker => {
      // const text = [
      //   exchange.id,
      //   symbol,
      //   JSON.stringify(ticker, undefined, '\n\t')
      // ]
      this.setState({ BTCLastPriceBittrex: ticker.last });
      console.log(ticker)
      // console.log(JSON.parse(text))
      // let data = JSON.parse(text[2]);
      // data['info']['lastPrice']
      // console.log(data['info']['lastPrice']);
      // document.getElementById('content').innerHTML = text.join(' ')

      let dataa = {
        labels: ["BitCoin"],

        datasets: [
          {
            title: "Some Data", color: "light-blue",
            values: [ticker.last]
          }
        ]
      };

      new Chart({
        parent: "#chart", // or a DOM element
        title: "My Awesome Chart",
        data: dataa,
        type: 'bar', // or 'line', 'scatter', 'pie', 'percentage'
        height: 250,

        colors: ['#7cd6fd', 'violet', 'blue'],
        // hex-codes or these preset colors;
        // defaults (in order):
        // ['light-blue', 'blue', 'violet', 'red',
        // 'orange', 'yellow', 'green', 'light-green',
        // 'purple', 'magenta', 'grey', 'dark-grey']

        format_tooltip_x: d => (d + '').toUpperCase(),
        format_tooltip_y: d => d + ' pts'
      });

    })
  }

  cryptopia = () => {
    const exchange = new ccxt.cryptopia();
    const symbol = 'BTC/USDT'
    exchange.apiKey = '';
    exchange.secret = '';
    console.log(exchange)
    this.setState({ exchangeName: "CryptoPia" });
    exchange.fetchTicker(symbol).then(ticker => {
      this.setState({ BTCLastPriceCryptoPia: ticker.last });
      let dataa = {
        labels: ["BitCoin"],
        datasets: [
          {
            title: "Some Data", color: "light-blue",
            values: [ticker.last]
          }
        ]
      };
      new Chart({
        parent: "#chart", // or a DOM element
        title: "My Awesome Chart",
        data: dataa,
        type: 'bar', // or 'line', 'scatter', 'pie', 'percentage'
        height: 250,

        colors: ['#7cd6fd', 'violet', 'blue'],
        // hex-codes or these preset colors;
        // defaults (in order):
        // ['light-blue', 'blue', 'violet', 'red',
        // 'orange', 'yellow', 'green', 'light-green',
        // 'purple', 'magenta', 'grey', 'dark-grey']

        format_tooltip_x: d => (d + '').toUpperCase(),
        format_tooltip_y: d => d + ' pts'
      });

    })
  }

  render() {
    return (
      <div>
        <h1 className="mainHead">Arbitrage Trading System</h1>
        {/* <div className="exchangeBtnP">
          <Button bsStyle="primary" onClick={() => this.binance()}>Bitcoin Binance</Button>
          <Button bsStyle="primary" onClick={() => this.bittrex()}>Bitcoin Bittrex</Button>
          <Button bsStyle="primary" onClick={() => this.cryptopia()}>Bitcoin CryptoPia</Button>
        </div> */}
        {/* <div id="content"></div>
        <h2 className="exchangeName">{this.state.exchangeName}</h2>
        <h3>BTC Binance: {this.state.BTCLastPriceBinance} </h3>
        <h3>BTC Bittrex: {this.state.BTCLastPriceBittrex} </h3>
        <h3>BTC CryptoPia: {this.state.BTCLastPriceCryptoPia} </h3> */}
        <h3 className="subHead">BitCoin Exchanges Prices</h3>
        <Table striped bordered condensed hover className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Exchanges</th>
              <th>Price</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Binance</td>
              <td>{this.state.BTCLastPriceBinance}</td>
              <td>          <Button bsStyle="primary" onClick={() => this.binance()}>Bitcoin Binance</Button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Bittrex</td>
              <td>{this.state.BTCLastPriceBittrex}</td>
              <td><Button bsStyle="primary" onClick={() => this.bittrex()}>Bitcoin Bittrex</Button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>CryptoPia</td>
              <td>{this.state.BTCLastPriceCryptoPia}</td>
              <td><Button bsStyle="primary" onClick={() => this.cryptopia()}>Bitcoin CryptoPia</Button></td>
            </tr>
          </tbody>
        </Table>;


        {/* <div className="btcDataPeriod">
          <Button bsStyle="success" >1 Day</Button>
          <Button bsStyle="success" >1 Week</Button>
          <Button bsStyle="success" >1 Month</Button>
        </div> */}
      
        <div id="chart"></div>
      </div>);
  }

}

export default App;