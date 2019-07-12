const obj = {
  func0: function() {
    console.log('this is func0');
    return this;
  },
  funcA: function() {
    console.log('this is funcA');
    return this;
  },
  funcB: function() {
    console.log('this is funcB');
    return this;
  }
};

let chain = () => obj.func0();

chain()
  .funcA()
  .funcB();
