declare module "nativescript-app-version" {
    /**
     * Returns the version of your app.
     * - For iOS we read it from *.plist's CFBundleShortVersionString.
     * - For Android we read the versionName from AndroidManifest.xml.
     */
    export function getVersionName(): Promise<string>;

    /**
     * Returns the app's ID.
     * - For iOS we read it from *.plist's bundle identifier.
     * - For Android we read the package name.
     */
    export function getAppId(): Promise<string>;

    /**
     * Returns the version code (build number) of your app.
     * - For iOS we read it from *.plist's CFBundleVersion.
     * - For Android we read the versionCode from AndroidManifest.xml.
     */
    export function getVersionCode(): Promise<string>;
}