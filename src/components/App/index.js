import React, { Component } from 'react';
import ccxt from 'ccxt';
import Chart from "frappe-charts/dist/frappe-charts.min.esm";
// import LineChart from './charts/LineChart';

import './index.css';
import { Button, Table } from 'react-bootstrap';
import { btcAction } from "../../store/actions/index";
import { btcReducer } from "../../store";
import { connect } from 'react-redux';

class App extends Component {
  btcDtaBinanceArr = [];
  btcDtaBittrexArr = [];
  btcDtaKrakenArr = [];
  constructor(props) {
    super(props);
    this.state = {
      exchangeName: "",
      BTCLastPriceBinance: "",
      BTCLastPriceBittrex: "",
      BTCLastPriceCryptoPia: "",
      BTCLastPriceGDax: "",
      BTCLastPriceBitfinex: "",
      BTCLastPriceKraken: "",
      BTCLastPricePoloniex: "",
      BTCLastBidBinance: "",
      BTCLastBidBittrex: "",
      BTCLastBidCryptoPia: "",
      BTCLastBidGDax: "",
      BTCLastBidBitfinex: "",
      BTCLastBidKraken: "",
      BTCLastBidPoloniex: "",
    };
  }


  componentDidMount() {


    // super(props);
    const exchangeBinance = new ccxt.binance();
    const symbolBinance = 'BTC/USDT'
    console.log(exchangeBinance)
    exchangeBinance.apiKey = '123';
    exchangeBinance.secret = '123';
    this.setState({ exchangeName: "Binance" });
    exchangeBinance.fetchTicker(symbolBinance).then(ticker => {
      console.log(ticker);
      const text = [
        exchangeBinance.id,
        symbolBinance,
        JSON.stringify(ticker, undefined, '\n\t')
      ]
      let data = JSON.parse(text[2]);
      data['info']['lastPrice']
      this.setState({ BTCLastPriceBinance: data['info']['lastPrice'], BTCLastBidBinance: data['info']['bidPrice'] });
      // document.getElementById('content').innerHTML = text.join(' ')
    })

    const exchangeBittrex = new ccxt.bittrex();
    const symbolBittrex = 'BTC/USDT'
    exchangeBittrex.apiKey = '123';
    exchangeBittrex.secret = '123';
    this.setState({ exchangeName: "Binance" });
    exchangeBittrex.fetchTicker(symbolBittrex).then(ticker => {
      const text = [
        exchangeBittrex.id,
        symbolBittrex,
        JSON.stringify(ticker, undefined, '\n\t')
      ]
      let data = JSON.parse(text[2]);
      this.setState({ BTCLastPriceBittrex: data['last'], BTCLastBidBittrex: data['bid'] });
      // document.getElementById('content').innerHTML = text.join(' ')
    })


    const exchangeCryptopia = new ccxt.cryptopia();
    const symbolcryptopia = 'BTC/USDT';
    exchangeCryptopia.apiKey = '123';
    exchangeCryptopia.secret = '123';
    this.setState({ exchangeName: "Binance" });
    exchangeCryptopia.fetchTicker(symbolcryptopia).then(ticker => {
      const text = [
        exchangeCryptopia.id,
        symbolcryptopia,
        JSON.stringify(ticker, undefined, '\n\t')
      ]
      let data = JSON.parse(text[2]);
      data['info']['lastPrice']
      this.setState({ BTCLastPriceCryptoPia: data['last'], BTCLastBidCryptoPia: data['bid'] });
      // document.getElementById('content').innerHTML = text.join(' ')
    })


    const exchangDax = new ccxt.gdax();
    const symbolgDax = 'BTC/USD'
    exchangDax.apiKey = '123';
    exchangDax.secret = '123';
    this.setState({ exchangeName: "Binance" });
    exchangDax.fetchTicker(symbolgDax).then(ticker => {
      const text = [
        exchangDax.id,
        symbolgDax,
        JSON.stringify(ticker, undefined, '\n\t')
      ]

      this.setState({ BTCLastPriceGDax: ticker['last'], BTCLastBidGDax: ticker['bid'] });
    })

    const exchangBitfinex = new ccxt.bitfinex();
    const symbolBitfinex = 'BTC/USD'
    exchangBitfinex.apiKey = '123';
    exchangBitfinex.secret = '123';
    this.setState({ exchangeName: "Binance" });
    exchangBitfinex.fetchTicker(symbolBitfinex).then(ticker => {
      const text = [
        exchangBitfinex.id,
        symbolBitfinex,
        JSON.stringify(ticker, undefined, '\n\t')
      ]
      this.setState({ BTCLastPriceBitfinex: ticker['last'], BTCLastBidBitfinex: ticker['bid'] });
    })

    const exchangKaraken = new ccxt.kraken();
    const symbolKaraken = 'BTC/USD'
    exchangKaraken.apiKey = '123';
    exchangKaraken.secret = '123';
    this.setState({ exchangeName: "Binance" });
    exchangKaraken.fetchTicker(symbolKaraken).then(ticker => {
      const text = [
        exchangKaraken.id,
        symbolKaraken,
        JSON.stringify(ticker, undefined, '\n\t')
      ]
      this.setState({ BTCLastPriceKraken: ticker['last'], BTCLastBidKraken: ticker['bid'] });
    })

    const exchangPoloniex = new ccxt.poloniex();
    const symbolPoloniex = 'BTC/USD'
    exchangPoloniex.apiKey = '123';
    exchangPoloniex.secret = '123';
    this.setState({ exchangeName: "Binance" });
    exchangPoloniex.fetchTicker(symbolPoloniex).then(ticker => {
      const text = [
        exchangPoloniex.id,
        symbolPoloniex,
        JSON.stringify(ticker, undefined, '\n\t')
      ]
      this.setState({ BTCLastPricePoloniex: ticker['last'], BTCLastBidPoloniex: ticker['bid'] });
    })
    // setInterval(() => {
    //   this.props.btcData({ title: 'daniyal', isDone: false });
    // }, 10000);
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
      this.setState({ BTCLastPriceBinance: data['info']['lastPrice'], BTCLastBidBinance: data['info']['bidPrice'] });
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
      this.setState({ BTCLastPriceBittrex: ticker['last'], BTCLastBidBittrex: ticker['bid'] });
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
      this.setState({ BTCLastPriceCryptoPia: ticker['last'], BTCLastBidCryptoPia: ticker['bid'] });
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

  gdax = () => {
    const exchange = new ccxt.gdax();
    const symbol = 'BTC/USD'
    exchange.apiKey = '';
    exchange.secret = '';
    console.log(exchange)
    this.setState({ exchangeName: "Gdax" });
    exchange.fetchTicker(symbol).then(ticker => {
      this.setState({ BTCLastPriceGDax: ticker.last, BTCLastBidGDax: ticker['bid'] });
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

  bitfinex = () => {
    const exchange = new ccxt.bitfinex();
    const symbol = 'BTC/USD'
    exchange.apiKey = '';
    exchange.secret = '';
    this.setState({ exchangeName: "Gdax" });
    exchange.fetchTicker(symbol).then(ticker => {
      this.setState({ BTCLastPriceBitfinex: ticker['last'], BTCLastBidBitfinex: ticker['bid'] });
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

  kraken = () => {
    const exchange = new ccxt.kraken();
    const symbol = 'BTC/USD'
    exchange.apiKey = '';
    exchange.secret = '';
    this.setState({ exchangeName: "Gdax" });
    exchange.fetchTicker(symbol).then(ticker => {
      this.setState({ BTCLastPriceKraken: ticker['last'], BTCLastBidKraken: ticker['bid'] });
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

  poloniex = () => {
    const exchange = new ccxt.poloniex();
    const symbol = 'BTC/USD'
    exchange.apiKey = '';
    exchange.secret = '';
    this.setState({ exchangeName: "Gdax" });
    exchange.fetchTicker(symbol).then(ticker => {
      this.setState({ BTCLastPricePoloniex: ticker['last'], BTCLastBidPoloniex: ticker['bid'] });
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
    // setTimeout(() => {
    if (this.props.btcReducer.authUser.length) {
      this.props.btcReducer.authUser
        .map((data) => {
          
          this.btcDtaBinanceArr.push(data['BTCLastPriceBinance']);
          this.btcDtaBittrexArr.push(data['BTCLastPriceBittrex']);
          this.btcDtaKrakenArr.push(data['BTCLastPriceKraken']);
          if (this.props.btcReducer.authUser.length) {
            let dataBinance = this.btcDtaBinanceArr.slice(52,70);
            let dataBittrex = this.btcDtaBittrexArr.slice(52,70);
            let dataKraken = this.btcDtaKrakenArr.slice(52,70)
            let data = {
              labels: ["12am-3am", "3am-6am", "6am-9am", "9am-12pm",
                "12pm-3pm", "3pm-6pm", "6pm-9pm", "9pm-12am", "9pm-12am", "9pm-12am", "9pm-12am","12am-3am", "3am-6am", "6am-9am", "9am-12pm",
                "12pm-3pm", "3pm-6pm", "6pm-9pm", "9pm-12am", "9pm-12am", "9pm-12am", "9pm-12am"],
      
              datasets: [
                {
                  title: "Binance Bitcoin",
                  values: dataBinance,
                  color: 'red',
                },
                {
                  title: "Bittrex Bitcoin",
                  values: dataBittrex
                },
                {
                  title: "Kraken Bitcoin",
                  values: dataKraken
                }
              ]
            };
            console.log('0-0-0-0')
            let chart = new Chart({
              parent: "#chart", // or a DOM element
              title: "My Awesome Chart",
              data: data,
              type: 'line', // or 'line', 'scatter', 'pie', 'percentage'
              height: 250,
      
              colors: ['#7cd6fd', 'violet', 'red'],
              // hex-codes or these preset colors;
              // defaults (in order):
              // ['light-blue', 'blue', 'violet', 'red',
              // 'orange', 'yellow', 'green', 'light-green',
              // 'purple', 'magenta', 'grey', 'dark-grey']
      
              format_tooltip_x: d => (d + '').toUpperCase(),
              format_tooltip_y: d => d + ' pts'
            });
          }
        })
    }
    // }, 10000);
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
              <th>Bid</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Binance</td>
              <td>{this.state.BTCLastPriceBinance}</td>
              <td>{this.state.BTCLastBidBinance}</td>
              <td><Button bsStyle="primary" onClick={() => this.binance()}>Bitcoin Binance</Button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Bittrex</td>
              <td>{this.state.BTCLastPriceBittrex}</td>
              <td>{this.state.BTCLastBidBittrex}</td>
              <td><Button bsStyle="primary" onClick={() => this.bittrex()}>Bitcoin Bittrex</Button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>CryptoPia</td>
              <td>{this.state.BTCLastPriceCryptoPia}</td>
              <td>{this.state.BTCLastBidCryptoPia}</td>
              <td><Button bsStyle="primary" onClick={() => this.cryptopia()}>Bitcoin CryptoPia</Button></td>
            </tr>
            <tr>
              <td>4</td>
              <td>GDax</td>
              <td>{this.state.BTCLastPriceGDax}</td>
              <td>{this.state.BTCLastBidGDax}</td>
              <td><Button bsStyle="primary" onClick={() => this.gdax()}>Bitcoin GDax</Button></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Bitfinex</td>
              <td>{this.state.BTCLastPriceBitfinex}</td>
              <td>{this.state.BTCLastBidBitfinex}</td>
              <td><Button bsStyle="primary" onClick={() => this.bitfinex()}>Bitcoin Bitfinex</Button></td>
            </tr>
            <tr>
              <td>6</td>
              <td>Karaken</td>
              <td>{this.state.BTCLastPriceKraken}</td>
              <td>{this.state.BTCLastBidKraken}</td>
              <td><Button bsStyle="primary" onClick={() => this.kraken()}>Bitcoin Kraken</Button></td>
            </tr>
            <tr>
              <td>7</td>
              <td>Poloniex</td>
              <td>{this.state.BTCLastPricePoloniex}</td>
              <td>{this.state.BTCLastBidPoloniex}</td>
              <td><Button bsStyle="primary" onClick={() => this.poloniex()}>Bitcoin Poloniex</Button></td>
            </tr>
          </tbody>
        </Table>;


        {/* <div className="btcDataPeriod">
          <Button bsStyle="success" >1 Day</Button>
          <Button bsStyle="success" >1 Week</Button>
          <Button bsStyle="success" >1 Month</Button>
        </div> */}

        <div id="chart"></div>

        <button type="button" onClick={this.props.btcData.bind(this, { title: 'daniyal', isDone: false })}>Click me</button>

        <button type="button" onClick={this.props.btcGet.bind(this)}>Click messss</button>
      </div>);
  }

}

const mapStateToProps = (state) => {
  return { userAuth: state.AuthReducer, btcReducer: state.btcReducer };
};
const mapDispatchToProps = (dispatch) => {
  return {
    btcData: (userObj) => dispatch(btcAction.btcData(userObj)),
    btcGet: () => dispatch(btcAction.btcGet())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);