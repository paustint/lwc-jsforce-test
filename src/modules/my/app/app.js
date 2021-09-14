import { LightningElement } from 'lwc';
import jsforce from 'jsforce';

export default class App extends LightningElement {
    jsforceError;
    userInfo;

    async initJsforce() {
        console.log('LOGGING IN');
        try {
            var conn = new jsforce.Connection({
                // you can change loginUrl to connect to sandbox or prerelease env.
                // loginUrl : 'https://test.salesforce.com'
            });

            this.userInfo = await conn.login(
                'austin.turner@lightning-clarity.com',
                '^t3S8&nzyz4zpEctMeVN'
            );
            console.log('LOGGED IN', userInfo);
        } catch (ex) {
            this.jsforceError = ex.message;
            console.error('ERROR', ex);
        }
    }
}
