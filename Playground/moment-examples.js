var moment = require('moment');

console.log(moment().format());

var now = moment();
console.log('current timestamp ', now.unix());

var timestamp = 1459111648;
var currentMoment = moment.unix(timestamp);
console.log('currentMoment', currentMoment.format('MMM D, YY @ h:mm a'));
