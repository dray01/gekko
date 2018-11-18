const randomExt = require('random-ext');

const config = {
  stratName: 'n8_v2_BB_RSI_SL',
  gekkoConfig: {
    watch: {
      exchange: 'binance',
      currency: 'BTC',
      asset: 'ADA'
    },

    daterange: 'scan',


//    daterange: {
//      from: '2018-10-01 00:00',
//      to: '2018-11-15 00:00'
//    },

    simulationBalance: {
      'asset': 1,
      'currency': 1
    },

    slippage: 0.09,
    feeTaker: 0.25,
    feeMaker: 0.15,
    feeUsing: 'taker', // maker || taker

  },
  apiUrl: 'http://localhost:3001',

  // Population size, better reduce this for larger data
  populationAmt: 20,

  // How many completely new units will be added to the population (populationAmt * variation must be a whole number!!)
  variation: 0.5,

  // How many components maximum to mutate at once
  mutateElements: 7,

  // How many parallel queries to run at once
  parallelqueries: 5,

  // Min sharpe to consider in the profitForMinSharpe main objective
  minSharpe: 0.5,

  // profit || score || profitForMinSharpe
  // score = ideas? feedback?
  // profit = recommended!
  // profitForMinSharpe = same as profit but sharpe will never be lower than minSharpe
  mainObjective: 'profitForMinSharpe',

  // optionally recieve and archive new all time high every new all time high
  notifications: {
    email: {
      enabled: false,
      receiver: 'destination@some.com',
      senderservice: 'gmail',
      sender: 'origin@gmail.com',
      senderpass: 'password',
    },
  },

  candleValues: [5,10,15,30,60,120,240],
  getProperties: () => ({

    historySize: randomExt.integer(100, 20),
// lets see how this goes
// eg randomExt.integer(400, 30)/100, will give 1 to 0.5 in 0.01

    interval: randomExt.integer(24, 2) * 1,
    SL: randomExt.integer(24, 1) * 1,
    BULL_RSI: randomExt.integer(24, 1) * 1,
    BULL_RSI_high: randomExt.integer(180, 60) *1,
    BULL_RSI_low: randomExt.integer(100, 10) *1,
    BEAR_RSI: randomExt.integer(30, 10) *1,
    BEAR_RSI_high: randomExt.integer(60, 20) *1,
    BEAR_RSI_low: randomExt.integer(30, 10) *1,
    ADX: randomExt.integer(24, 1) * 1,
    ADX_high: randomExt.integer(100, 5) *1,
    ADX_low: randomExt.integer(100, 10) *1,

    thresholds: {
      low: randomExt.integer(40, 10) *1,
      high: randomExt.integer(200, 40) *1,
      down: randomExt.integer(20, 1)/10,
      persistence: randomExt.integer(5, 1) * 1,
    },

    candleSize: randomExt.pick(config.candleValues)
  })
};

module.exports = config;
