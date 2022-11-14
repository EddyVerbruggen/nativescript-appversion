import { Application, Utils } from "@nativescript/core";

export const getAppId = function() {
  return new Promise(function(resolve, reject) {
    function _resolve() {
      var context = Utils.android.getApplicationContext();
      resolve(context.getPackageName());
    }
    try {
      if (Utils.android.getApplicationContext()) {
        _resolve();
      } else {
        // if this is called before Application.start() wait for the event to fire
        Application.on(Application.launchEvent, _resolve);
      }
    } catch (ex) {
      console.log("Error in appversion.getAppId: " + ex);
      reject(ex);
    }
  });
};

export const getAppIdSync = function() {
  return Utils.android.getApplicationContext().getPackageName();
};

export const getVersionName = function() {
  return new Promise(function(resolve, reject) {
    function _resolve() {
      var packageManager = Utils.android.getApplicationContext().getPackageManager();
      resolve(packageManager.getPackageInfo(Utils.android.getApplicationContext().getPackageName(), 0).versionName);
    }
    try {
      if (Utils.android.getApplicationContext()) {
        _resolve();
      } else {
        // if this is called before Application.start() wait for the event to fire
        Application.on(Application.launchEvent, _resolve);
      }
    } catch (ex) {
      console.log("Error in appversion.getVersionName: " + ex);
      reject(ex);
    }
  });
};

export const getVersionNameSync = function() {
  var packageManager = Utils.android.getApplicationContext().getPackageManager();
  return packageManager.getPackageInfo(Utils.android.getApplicationContext().getPackageName(), 0).versionName;
};

export const getVersionCode = function() {
  return new Promise(function(resolve, reject) {
    try {
      var packageManager = Utils.android.getApplicationContext().getPackageManager();
      resolve("" + packageManager.getPackageInfo(Utils.android.getApplicationContext().getPackageName(), 0).versionCode);
    } catch (ex) {
      console.log("Error in appversion.getVersionCode: " + ex);
      reject(ex);
    }
  });
};

export const getVersionCodeSync = function() {
  var packageManager = Utils.android.getApplicationContext().getPackageManager();
  return "" + packageManager.getPackageInfo(Utils.android.getApplicationContext().getPackageName(), 0).versionCode;
};
