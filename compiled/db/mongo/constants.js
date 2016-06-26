'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var db = exports.db = process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://yoorcityadmin:Star2016@ds013584.mlab.com:13584/yoorcity_mvp';

exports.default = {
  db: db
};