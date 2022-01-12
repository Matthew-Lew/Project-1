import { LightningElement, track, api } from "lwc";

export default class Main extends LightningElement {

    @track displayProfilePage = false;
    @track displayHomePage = false;

    connectedCallback() {
        this.displayHomePage = true;
    }

    handleNavBar(event) {
        this.displayProfilePage = event.detail.profile;
        this.displayHomePage = event.detail.home;
    }

}