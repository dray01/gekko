const randomExt = require('random-ext');

const config = {
  stratName: 'n8v2',
  gekkoConfig: {
    watch: {
      exchange: 'binance',
      currency: 'USDT',
      asset: 'BTC'
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
      enabled: fasle,
      receiver: 'brett.drayton@gmail.com',
      senderservice: 'gmail',
      sender: '@gmail.com',
      senderpass: 'password',
    },
  },

  candleValues: [5,10,15,30,60,120,240],

  getProperties: () => ({

    historySize: randomExt.integer(100, 20),
// lets see how this goes
// eg randomExt.integer(400, 30)/100, will give 1 to 0.5 in 0.01

    candleSize: randomExt.pick(config.candleValues)
  })
};

module.exports = config;
