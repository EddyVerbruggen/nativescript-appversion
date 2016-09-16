var utils = require("utils/utils");

exports.getAppId = function() {
  return new Promise(function(resolve, reject) {
    try {
      var mainBundle = utils.ios.getter(NSBundle, NSBundle.mainBundle);
      resolve(mainBundle.bundleIdentifier);
    } catch (ex) {
      console.log("Error in appversion.getAppId: " + ex);
      reject(ex);
    }
  });
};

exports.getVersionName = function() {
  return new Promise(function(resolve, reject) {
    try {
      var mainBundle = utils.ios.getter(NSBundle, NSBundle.mainBundle);
      resolve(mainBundle.infoDictionary.objectForKey("CFBundleShortVersionString"));
    } catch (ex) {
      console.log("Error in appversion.getVersionName: " + ex);
      reject(ex);
    }
  });
};

exports.getVersionCode = function() {
  return new Promise(function(resolve, reject) {
    try {
      var mainBundle = utils.ios.getter(NSBundle, NSBundle.mainBundle);
      resolve(mainBundle.infoDictionary.objectForKey("CFBundleVersion"));
    } catch (ex) {
      console.log("Error in appversion.getVersionCode: " + ex);
      reject(ex);
    }
  });
};