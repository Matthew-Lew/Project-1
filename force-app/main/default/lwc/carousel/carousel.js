import { LightningElement, track } from "lwc";
import DEMON_SLAYER from '@salesforce/resourceUrl/demonSlayer';
import PUBG from '@salesforce/resourceUrl/pubg';
import RICK_AND_MORTY from '@salesforce/resourceUrl/rick_and_morty';

let slidePointer = 1;

export default class Carousel extends LightningElement {

    enableAutoScroll = true;
    @track
    slides = [
        {
            image: DEMON_SLAYER,
            id: 1,
            display: true,
            caption: 'Check out new episodes of Demon Slayer!'
        },
        {
            image: PUBG,
            id: 2,
            display: false,
            caption: '...Or the new games that have come out this month!'
        },
        {
            image: RICK_AND_MORTY,
            id: 3,
            display: false,
            caption: '...Or maybe the new seasons of your favorite shows!'
        }
    ]

    scrollLeft() {
        slidePointer--;
        this.handleScroll();
    }

    scrollRight() {
        slidePointer++;
        this.handleScroll();
    }

    handleScroll() {
        if(slidePointer < 1) {
            slidePointer = this.slides.length;
        } else if(slidePointer > this.slides.length) {
            slidePointer = 1;
        }

        for(let slide of this.slides) {
            if(slide.id == slidePointer) {
                slide.display = true;
            } else {    
                slide.display = false;
            }
        }
    }
 
    connectedCallback() {
        
    }
}