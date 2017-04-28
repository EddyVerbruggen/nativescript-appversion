# NativeScript AppVersion

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![Twitter Follow][twitter-image]][twitter-url]

[npm-image]:http://img.shields.io/npm/v/nativescript-appversion.svg
[npm-url]:https://npmjs.org/package/nativescript-appversion
[downloads-image]:http://img.shields.io/npm/dm/nativescript-appversion.svg
[twitter-image]:https://img.shields.io/twitter/follow/eddyverbruggen.svg?style=social&label=Follow%20me
[twitter-url]:https://twitter.com/eddyverbruggen

Read the current Package ID and Version (name and code) of your NativeScript app.

## Installation
Run the following command from the root of your project:

```
tns plugin add nativescript-appversion
```

## Usage

To use this plugin you must first require / import it:

#### JavaScript
```js
var appversion = require("nativescript-appversion");
```

#### TypeScript
```js
import * as AppVersion from "nativescript-appversion";
```

### getVersionName(Sync)
`getVersionNameSync` is the same as `getVersionName`, except it doesn't return a Promise.

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

### getVersionCode(Sync)

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

### getAppId(Sync)

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
