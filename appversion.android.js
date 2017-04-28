var application = require("application");

exports.getAppId = function() {
  return new Promise(function(resolve, reject) {
    function _resolve() {
      var context = application.android.context;
      resolve(context.getPackageName());
    }
    try {
      if (application.android.context) {
        _resolve();
      } else {
        // if this is called before application.start() wait for the event to fire
        application.on(application.launchEvent, _resolve);
      }
    } catch (ex) {
      console.log("Error in appversion.getAppId: " + ex);
      reject(ex);
    }
  });
};

exports.getAppIdSync = function() {
  return application.android.context.getPackageName();
};

exports.getVersionName = function() {
  return new Promise(function(resolve, reject) {
    function _resolve() {
      var packageManager = application.android.context.getPackageManager();
      resolve(packageManager.getPackageInfo(application.android.context.getPackageName(), 0).versionName);
    }
    try {
      if (application.android.context) {
        _resolve();
      } else {
        // if this is called before application.start() wait for the event to fire
        application.on(application.launchEvent, _resolve);
      }
    } catch (ex) {
      console.log("Error in appversion.getVersionName: " + ex);
      reject(ex);
    }
  });
};

exports.getVersionNameSync = function() {
  var packageManager = application.android.context.getPackageManager();
  return packageManager.getPackageInfo(application.android.context.getPackageName(), 0).versionName;
};

exports.getVersionCode = function() {
  return new Promise(function(resolve, reject) {
    try {
      var packageManager = application.android.context.getPackageManager();
      resolve(packageManager.getPackageInfo(application.android.context.getPackageName(), 0).versionCode);
    } catch (ex) {
      console.log("Error in appversion.getVersionCode: " + ex);
      reject(ex);
    }
  });
};

exports.getVersionCodeSync = function() {
  var packageManager = application.android.context.getPackageManager();
  return packageManager.getPackageInfo(application.android.context.getPackageName(), 0).versionCode;
};