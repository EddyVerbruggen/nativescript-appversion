import { Observable } from '@nativescript/core'
import * as appversion from "@nativescript/appversion";

export class HelloWorldModel extends Observable {
  private _counter: number
  private _message: string

  constructor() {
    super()
    this.set("version_name_sync", appversion.getVersionNameSync())
    appversion.getVersionName().then(v => {
        this.set("version_name", v)
    })
    this.set("app_id_sync", appversion.getAppIdSync())
    appversion.getAppId().then(v => {
        this.set("app_id", v)
    })
  }
}
