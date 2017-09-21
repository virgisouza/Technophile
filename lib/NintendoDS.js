
function NintendoDS () {

};

NintendoDS.prototype = Object.create(GameConsole.prototype);

function extend (NintendoDS, GameConsole) {
  NintendoDS.prototype = new GameConsole('Nintendo DS');
  NintendoDS.prototype.constructor = NintendoDS;
};


module.exports = NintendoDS;

// function extend(ChildClass, ParentClass) {
//   ChildClass.prototype = new ParentClass();
//   ChildClass.prototype.constructor = ChildClass;
// }


// function extend(destination, source) {
//   for (var k in source) {
//     if (source.hasOwnProperty(k)) {
//       destination[k] = source[k];
//     }
//   }
//   return destination;
// }

