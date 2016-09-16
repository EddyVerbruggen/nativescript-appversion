# NativeScript AppVersion

> Requires NativeScript 2.3.0 (because of iOS 10 compatibility), so upgrade if you're rocking a lower spec: `npm install -g nativescript`.

Read the version of your NativeScript app.

For iOS we read it from `*.plist`'s `CFBundleShortVersionString`.

For Android we read the `versionName` from `AndroidManifest.xml`.

## Installation
Run the following command from the root of your project:

```
tns plugin add nativescript-appversion
```

## Usage

To use this plugin you must first require() it:

```js
var appversion = require("nativescript-appversion");
```

### getVersionName

```js
  appversion.getVersionName().then(function(v) {
      console.log("Your app's version is: " + v);
  });
```

### getVersionCode

```js
  appversion.getVersionCode().then(function(v) {
      console.log("Your app's version code is: " + v);
  });
```

### getAppId

```js
  appversion.getAppId().then(function(id) {
      console.log("Your app's id is: " + id);
  });
```