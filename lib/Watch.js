
function Watch (bodyPart) {
  this.bodyPart = bodyPart;
};

Watch.prototype.wear = function (bodyPart) {
  Watch.call(this, bodyPart);
  bodyPart = this.bodyPart;
};

module.exports = Watch;