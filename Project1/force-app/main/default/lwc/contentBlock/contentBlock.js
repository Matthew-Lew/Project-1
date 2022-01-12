import { LightningElement, api } from "lwc";

export default class ContentBlock extends LightningElement {

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

handleLeftClick() {
  const card = this.template.querySelector(".slds-card");
  const contentContainer = this.template.querySelector(".container");
  let scrollDistance = card.clientWidth * 4.68;
  contentContainer.scrollLeft += scrollDistance;
}

handleRightClick() {
  const card = this.template.querySelector(".slds-card");
  const contentContainer = this.template.querySelector(".container");
  let scrollDistance = card.clientWidth * 4.68;
  contentContainer.scrollLeft -= scrollDistance;
}
}