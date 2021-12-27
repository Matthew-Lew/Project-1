import { LightningElement, track, wire, api } from 'lwc';
import getUser from '@salesforce/apex/apexController.getUser';
import getCurrentUsersPurchases from '@salesforce/apex/apexController.getCurrentUsersPurchases';


export default class Test extends LightningElement {

    @track currentUser = [];
    @track currentUserPurchases = [];

    connectedCallback() {
        let currentUserPromise = getUser();
        currentUserPromise.then(res => this.currentUser = res)

        let userPurchases = getCurrentUsersPurchases()
        userPurchases.then(res => this.currentUserPurchases = res)
        
    }

    handleButton() {
    }
}