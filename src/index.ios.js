export const getAppId = function() {
  return new Promise(function(resolve, reject) {
    try {
      resolve(NSBundle.mainBundle.bundleIdentifier);
    } catch (ex) {
      console.log("Error in appversion.getAppId: " + ex);
      reject(ex);
    }
  });
};

export const getAppIdSync = function() {
  return NSBundle.mainBundle.bundleIdentifier;
};

export const getVersionName = function() {
  return new Promise(function(resolve, reject) {
    try {
      resolve(NSBundle.mainBundle.infoDictionary.objectForKey("CFBundleShortVersionString"));
    } catch (ex) {
      console.log("Error in appversion.getVersionName: " + ex);
      reject(ex);
    }
  });
};

export const getVersionNameSync = function() {
  return NSBundle.mainBundle.infoDictionary.objectForKey("CFBundleShortVersionString");
};

export const getVersionCode = function() {
  return new Promise(function(resolve, reject) {
    try {
      resolve(NSBundle.mainBundle.infoDictionary.objectForKey("CFBundleVersion"));
    } catch (ex) {
      console.log("Error in appversion.getVersionCode: " + ex);
      reject(ex);
    }
  });
};

export const getVersionCodeSync = function() {
  return NSBundle.mainBundle.infoDictionary.objectForKey("CFBundleVersion");
};