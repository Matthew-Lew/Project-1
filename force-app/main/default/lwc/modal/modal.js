import { LightningElement, track } from "lwc";

export default class Modal extends LightningElement {

connectedCallback() {
}

handleCancelButton() {
  const contentClick = new CustomEvent("cancelclick", {
    detail: false
  })

  this.dispatchEvent(contentClick);
}
}