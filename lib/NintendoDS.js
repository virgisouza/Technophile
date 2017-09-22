var GameConsole = require('../lib/GameConsole');
var WebBrowser = require('../lib/WebBrowser');
var extend = require('../lib/extend');

function NintendoDS(systemName){
  this.systemName = "Nintendo DS";
}
NintendoDS.prototype = Object.create(GameConsole.prototype);

 extend(NintendoDS.prototype, WebBrowser.prototype);

module.exports = NintendoDS;


// function NintendoDS () {
//   GameConsole.call(this, systemName );
//   NintendoDS.prototype = Object.create(GameConsole.prototype);
//   WebBrowser.call(this);
//   NintendoDS.prototype = Object.create(WebBrowser.prototype);
// };

// // var extend = function() {
// //   var extended = {};
// //   for(key in arguments) {
// //     var argument = arguments[key];
// //     for (prop in argument) {
// //       if (Object.prototype.hasOwnProperty.call(argument, prop)) {
// //         extended[prop] = argument[prop];
// //       }
// //     }
// //   }

// //   return extended;
// // };


// // function extend(destination, source) {
// //   for (var systemName in GameConsole) {
// //     if (GameConsole.hasOwnProperty(systemName)) {
// //       NintendoDS['Nintendo DS'] = GameConsole['Nintendo DS'];
// //     }
// //   }
// //   return NintendoDS;
// // }





// // function extend (NintendoDS, GameConsole) {
// //   NintendoDS.prototype = new GameConsole('Nintendo DS');
// //   NintendoDS.prototype.constructor = NintendoDS;
// // };


// module.exports = NintendoDS;

// function extend(ChildClass, ParentClass) {
//   ChildClass.prototype = new ParentClass();
//   ChildClass.prototype.constructor = ChildClass;
// }



