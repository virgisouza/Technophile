var Phone = require('../lib/Phone');
var Tablet = require('../lib/Tablet');
var GameConsole = require('../lib/GameConsole');
var WebBrowser = require('../lib/WebBrowser');
var extend = require('../lib/extend');


function SmartPhone (phoneNumber) {
  this.phoneNumber = phoneNumber;
  this.systemName = 'Smart Phone';

};

SmartPhone.prototype = Object.create(Phone.prototype);

extend(SmartPhone.prototype, Tablet.prototype);
extend(SmartPhone.prototype, WebBrowser.prototype);
extend(SmartPhone.prototype, GameConsole.prototype);

module.exports = SmartPhone;