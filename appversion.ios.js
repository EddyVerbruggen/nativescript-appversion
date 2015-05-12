exports.getVersionName = function () {
  return new Promise(function (resolve, reject) {
    try {
      var key = "CFBundleShortVersionString";
      resolve(NSBundle.mainBundle().infoDictionary.objectForKey(key));
    } catch (ex) {
      console.log("Error in appversion.getVersionName: " + ex);
      reject(ex);
    }
  });
};