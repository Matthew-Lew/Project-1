import { LightningElement, track, api } from "lwc";

export default class Block extends LightningElement {

@track test = true;
@api gamerList = [];
@api title;

connectedCallback() {
}

  handleClick() {
  const contentClick = new CustomEvent("contentclick", {
    detail: true
  })

  this.dispatchEvent(contentClick);
}
}
