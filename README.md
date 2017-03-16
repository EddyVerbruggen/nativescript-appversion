# NativeScript AppVersion

> Read the version and package ID of your NativeScript app.

* For iOS we read it from `*.plist`'s `CFBundleShortVersionString`.
* For Android we read the `versionName` from `AndroidManifest.xml`.

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

#### JavaScript
```js
  appversion.getVersionName().then(function(v) {
      console.log("Your app's version is: " + v);
  });
```

#### TypeScript
```js
  appversion.getVersionName().then((v: string) {
      console.log("Your app's version is: " + v);
  });
```

### getVersionCode

#### JavaScript
```js
  appversion.getVersionCode().then(function(v) {
      console.log("Your app's version code is: " + v);
  });
```

#### TypeScript
```js
  appversion.getVersionCode().then((v: string) {
      console.log("Your app's version code is: " + v);
  });
```

### getAppId

#### JavaScript
```js
  appversion.getAppId().then(function(id) {
      console.log("Your app's id is: " + id);
  });
```

#### TypeScript
```js
  appversion.getAppId().then((id: string) {
      console.log("Your app's id is: " + id);
  });
```
