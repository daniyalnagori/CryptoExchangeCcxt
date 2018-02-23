var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
// import ccxt from 'ccxt';
var ccxt = require('ccxt');
var db = mongojs('mongodb://daniyalnagori:dani123@ds143738.mlab.com:43738/cryptodata', ['tasks'])

router.get('/tasks', function (req, res, send) {
    db.tasks.find(function (err, tasks) {
        if (err) {
            res.send(err);
        }
        console.log('00000000000-------========000');                       
        
        res.json(tasks);
    })
})

router.get('/task/:id', function (req, res, next) {
    db.tasks.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, task) {
        if (err) {
            console.log('00000000000-------========000')
            res.send(err);
        }
        res.json(task);
    })
})

router.post('/task', function (req, res, next) {
    const exchangeBinance = new ccxt.binance();
    const symbolBinance = 'BTC/USDT';
    exchangeBinance.apiKey = '123';
    exchangeBinance.secret = '123';
    exchangeBinance.fetchTicker(symbolBinance).then(ticker => {

        
        // console.log(ticker['info']['lastPrice'])
        var task = req.body;

        const exchangeBittrex = new ccxt.bittrex();
        const symbolBittrex = 'ETH/USDT'
        exchangeBittrex.apiKey = '123';
        exchangeBittrex.secret = '123';
        exchangeBittrex.fetchTicker(symbolBittrex).then(ticker => {
            task['BTCLastPriceBittrex'] = ticker['last'];
        })


        const exchangeKraken = new ccxt.kraken();
        const symbolKraken = 'BTC/USD'
        exchangeKraken.apiKey = '123';
        exchangeKraken.secret = '123';
        exchangeKraken.fetchTicker(symbolKraken).then(ticker => {
            console.log('ticker---',ticker)
            task['BTCLastPriceKraken'] = ticker['last'];
        }).catch((err) => {
            console.log(err)
        })



        task['BTCLastPriceBinance'] = ticker['info']['lastPrice']
        // console.log(task);
        if (!task.title || !(task.isDone + '')) {
            res.status(400);
            res.json({
                "error": "Bad Data"
            })
        }
        else {
            setTimeout(() => {

                db.tasks.save(task, function (err, task) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(task);
                });
            }, 5000);
        }
    })
})


module.exports = router;