import winston from 'winston';

const disableLog = process.env.NODE_ENV === 'test' && !process.env.LIFE_LOGLEVEL;
const logLevel = process.env.LIFE_LOGLEVEL || 'info';
const prettyLog = !process.env.LIFE_LOG_SIMPLE;

const logParams = {
  console: {
    level: logLevel,
    colorize: prettyLog,
    timestamp: true,
    prettyPrint: prettyLog,
    humanReadableUnhandledException: true
  }
};

const log = winston.loggers.add('life', logParams);

if (disableLog) {
  winston.loggers.get('life').remove(winston.transports.Console);
}

export default log;
