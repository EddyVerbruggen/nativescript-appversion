# NativeScript AppVersion

Read the version of your NativeScript app. For iOS we read it from *.plist's CFBundleShortVersionString. For Android we read he 'versionName' from AndroidManifest.xml.

## Installation
From the command prompt go to your app's `app` folder and execute:

```
npm install nativescript-appversion
```

## Usage

### getVersionName

```js
  var appversion = require("./node_modules/nativescript-appversion/appversion");

  appversion.getVersionName().then(function(v) {
      alert("Version: " + v);
  })
```