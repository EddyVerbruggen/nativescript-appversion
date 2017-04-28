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

exports.getAppIdSync = function() {
  return utils.ios.getter(NSBundle, NSBundle.mainBundle).bundleIdentifier;
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

exports.getVersionNameSync = function() {
  return utils.ios.getter(NSBundle, NSBundle.mainBundle).infoDictionary.objectForKey("CFBundleShortVersionString");
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

exports.getVersionCodeSync = function() {
  return utils.ios.getter(NSBundle, NSBundle.mainBundle).infoDictionary.objectForKey("CFBundleVersion");
};