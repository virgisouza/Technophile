var Watch = require('../lib/Watch');
var Tablet = require('../lib/Tablet');
var extend = require('../lib/extend');



function SmartWatch (bodyPart) {
  this.bodyPart = bodyPart;
  new Watch();
};

SmartWatch.prototype = Object.create(Watch.prototype);

extend(Watch.prototype, Tablet.prototype)

module.exports = SmartWatch;






