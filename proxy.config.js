const proxy = [
    {
      context: '/api',
      target: 'http://challenge-front-end.us-east-2.elasticbeanstalk.com/retrieve-product',
      pathRewrite: {'^/api' : ''}
    }
  ];
module.exports = proxy;