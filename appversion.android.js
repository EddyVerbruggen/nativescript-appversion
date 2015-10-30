var application = require("application");

exports.getVersionName = function () {
  return new Promise(function (resolve, reject) {
    try {
      var context = application.android.context;
      var packageManager = context.getPackageManager();
      resolve(packageManager.getPackageInfo(context.getPackageName(), 0).versionName);
    } catch (ex) {
      console.log("Error in appversion.getVersionName: " + ex);
      reject(ex);
    }
  });
};