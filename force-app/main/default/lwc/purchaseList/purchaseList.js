import { LightningElement, track, wire, api } from 'lwc';
import getUser from '@salesforce/apex/apexController.getUser';
import getCurrentUsersPurchases from '@salesforce/apex/apexController.getCurrentUsersPurchases';


export default class PurchaseList extends LightningElement {

    @track currentUserPurchases = [];

    connectedCallback() {

        let userPurchases = getCurrentUsersPurchases()
        userPurchases.then(res => this.currentUserPurchases = res)        
    }

}