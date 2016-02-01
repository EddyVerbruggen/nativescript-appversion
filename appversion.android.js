var application = require("application");

exports.getAppId = function() {
  return new Promise(function(resolve, reject) {
    function _resolve(context) {
      resolve(context.getPackageName());
    }
    try {
      var context = application.android.context;
      if (context) {
        _resolve(context);
      } else {
        application.on(application.launchEvent, _resolve);
      }
    } catch (ex) {
      console.log("Error in appversion.getAppId: " + ex);
      reject(ex);
    }
  });
};

exports.getVersionName = function() {
  return new Promise(function(resolve, reject) {
    function _resolve(context) {
      var packageManager = context.getPackageManager();
      resolve(packageManager.getPackageInfo(context.getPackageName(), 0).versionName);
    }
    try {
      var context = application.android.context;
      if (context) {
        _resolve(context);
      } else {
        application.on(application.launchEvent, _resolve);
      }
    } catch (ex) {
      console.log("Error in appversion.getVersionName: " + ex);
      reject(ex);
    }
  });
};