const log4js = require('log4js');

const logger = log4js.getLogger();

//logger.level = 'debug';
//logger.level = 'error';
logger.level = 'all';

let x = 4;

logger.debug(`El valor de la variable x es ${x}`);
logger.error(`El valor de la variable x es ${x}`);
logger.info(`El valor de la variable x es ${logger.isTraceEnabled()}`);
logger.warn(`El valor de la variable x es ${x}`);
logger.fatal(`El valor de la variable x es ${x}`);
logger.trace(`El valor de la variable x es ${x}`);

function sumar(a, b){
    return a + b;
}

module.exports = sumar;