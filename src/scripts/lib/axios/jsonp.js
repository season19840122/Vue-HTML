import ajsonp from 'jsonp';

function jsonp(options){
  ajsonp(options.url, {name: options.jsonpName}, options.callback)
};

export default jsonp;