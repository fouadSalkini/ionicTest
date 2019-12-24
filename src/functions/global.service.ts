import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

@Injectable()
export class GlobalFunctions {
    isApp: any;
    apiURL: any;

    constructor(public platform: Platform) {
    }

    checkPlatform() {

        if (this.platform.is('core') || this.platform.is('mobileweb')) {
            this.isApp = false;
        } else {

            if (this.platform.versions().android) {
                this.isApp = "android";
            } else {
                this.isApp = "ios";
            }

        }

        console.log(this.isApp);
        //return "android";
        return this.isApp;
    }

    public getApiKey() {
        //return "123";
         return localStorage.getItem("apiKey");
    }

    public setApiKey(apiKey: any) {
        localStorage.setItem("apiKey", apiKey);
    }

    public getDeviceUUID() {
        return localStorage.getItem("uuid");
    }

    public setDeviceUUID(uuid: any) {
        localStorage.setItem("uuid", uuid);
    }

    

    

    


    public getAPIUrl() {

        
        //this.apiURL = "http://192.168.0.15:8000/api/";
        this.apiURL = "https://fouadsalkini.com/ionic/testApp/api/";
        return this.apiURL;
    }





    presentLoading(loadingCtrl: any, duration: number) {

        let loader = loadingCtrl.create({
            content: "Please wait...",
            enableBackdropDismiss: true,
            // duration: duration
        });
        return loader;
    }



    handleError(error: Response | any, body_error: any, body: any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body_error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return errMsg;
    }
}