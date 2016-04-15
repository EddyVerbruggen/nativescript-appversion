# NativeScript AppVersion

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

### getAppId

```js
  appversion.getAppId().then(function(id) {
      console.log("Your app's id is: " + id);
  });
```