const MyHelper = {
  install(Vue) {
    Vue.prototype.$log = function(data) {
      console.log(data);
    };
  }
};

export default MyHelper;
