//Polyfill for IE8

if (!Object.create) {
  Object.create = function(proto) {
    function F() {}
    F.prototype = proto;
    return new F();
  };
}
