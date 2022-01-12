import { LightningElement, wire, track } from 'lwc';
import getContactId from '@salesforce/apex/apexController.getContactId';
import FIRST_NAME from '@salesforce/schema/Contact.FirstName'
import LAST_NAME from '@salesforce/schema/Contact.LastName'
import EMAIL from '@salesforce/schema/Contact.Email'
import PHONE from '@salesforce/schema/Contact.MobilePhone'
import MAILING_STREET from '@salesforce/schema/Contact.MailingStreet'
import MAILING_CITY from '@salesforce/schema/Contact.MailingCity'
import MAILING_STATE from '@salesforce/schema/Contact.MailingState'
import MAILING_ZIP from '@salesforce/schema/Contact.MailingPostalCode'
import MAILING_COUNTRY from '@salesforce/schema/Contact.MailingCountry'
import CREDIT_CARD_NuMBER from '@salesforce/schema/Contact.Credit_Card_Number__c'
import DATE_OF_EXPIRATION from '@salesforce/schema/Contact.Date_of_Expiration__c'
import CVC from '@salesforce/schema/Contact.CVC__c'

export default class UserInfo extends LightningElement {

    @wire(getContactId)
    contactId;

    personalFields = [
        FIRST_NAME,
        LAST_NAME,
        EMAIL,
        PHONE,
        MAILING_STREET,
        MAILING_CITY,
        MAILING_STATE,
        MAILING_ZIP,
        MAILING_COUNTRY
    ];
    billingFields = [
        CREDIT_CARD_NuMBER,
        DATE_OF_EXPIRATION,
        CVC
    ];
}