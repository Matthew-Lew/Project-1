import { LightningElement, wire, api } from 'lwc';
import { publish, MessageContext, createMessageContext } from 'lightning/messageService';
import FILTER from '@salesforce/messageChannel/Filter__c';
import getSearchResults from '@salesforce/apex/searchResultsPageController.getSearchResults';

export default class FilterBar extends LightningElement {
    
    @api searchResults = [];
    context = createMessageContext();

    get options() {
        return [
            { label: 'Sales', value: 'option1' },
            { label: 'Force', value: 'option2' },
        ];
    }

    handleFilter(event) {
        let data = event.detail.value;
        const message = { filterData: data };
        publish(this.context, FILTER, message);
    }
}