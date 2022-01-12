import { LightningElement, track } from "lwc";
import id from "@salesforce/user/Id";

export default class Navbar extends LightningElement {
  @track loggedIn = false;

  renderedCallback() {
    if (id == null) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  }

  handleNavbarClick(event) {
    if (event.target.title == "Home") {
      const navBarChange = new CustomEvent("navbarchange", {
        detail: {
          home: true,
          profile: false
        }
      });
      this.dispatchEvent(navBarChange);
    } else if (event.target.title == "Profile") {
      const navBarChange = new CustomEvent("navbarchange", {
        detail: {
          home: false,
          profile: true
        }
      });
      this.dispatchEvent(navBarChange);
    } else {
      return;
    }
  }

  connectedCallback() {}
}
