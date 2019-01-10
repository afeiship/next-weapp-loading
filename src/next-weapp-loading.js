(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var nxWxPromisify = nx.wxPromisify || require('next-wx-promisify');
  var DEFAULT_OPTIONS = { title: '加载中' };

  var NxWeappLoading = nx.declare('nx.WeappLoading', {
    statics: {
      present: function(inOptions) {
        return new Promise(function(resolve, reject) {
          var options = nx.mix(nxWxPromisify(resolve, reject), DEFAULT_OPTIONS, inOptions);
          wx.showLoading(options);
        });
      },
      dismiss: function(inOptions) {
        return new Promise(function(resolve, reject) {
          var options = nx.mix(nxWxPromisify(resolve, reject), inOptions);
          wx.hideLoading(options);
        });
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWeappLoading;
  }
})();
