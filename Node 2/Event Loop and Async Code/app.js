const homePage = require('./pages/home')
const calculatorPage = require('./pages/calculator')
const calculateResultPage = require('./pages/calculate-result')

const requestServer = (req,res) => {
  
  if(req.url === '/'){
    homePage(req,res)
  } else if(req.url.toLowerCase() === '/calculator'){
    calculatorPage(req,res)
  } else if(req.url.toLowerCase() === '/calculate-result' && req.method === 'POST'){
    calculateResultPage(req,res)
  }
}

module.exports = requestServer;