import { LightningElement, track } from "lwc";

export default class SortingBar extends LightningElement {

  value = '';

connectedCallback() {
  
}


  get options() {
      return [
          { label: 'Video Games', value: 'videogame' },
          { label: 'Movies', value: 'movie' },
          { label: 'TV Shows', value: 'shows' },
          { label: 'Clear', value: 'clear' },
      ];
  }

  handleChange(event) {
    let data = event.detail.value;

    const newEvent = new CustomEvent("radiobuttonchange", {
      detail: data
    })

    console.log(data);

    this.dispatchEvent(newEvent);
  }
}
