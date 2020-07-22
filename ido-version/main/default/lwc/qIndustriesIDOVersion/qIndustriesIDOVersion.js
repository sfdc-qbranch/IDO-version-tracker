import { LightningElement, wire } from 'lwc';
import getIDOVersionData from '@salesforce/apex/IDOVersionController.getVersionInfo';
import { getRecord } from 'lightning/uiRecordApi';
const FIELDS = [
    'Q_Industries_Version_Info__mdt.MasterLabel',
    'Q_Industries_Version_Info__mdt.DeveloperName',
    'Q_Industries_Version_Info__mdt.Language',
    'Q_Industries_Version_Info__mdt.Core_Release_Name__c',
    'Q_Industries_Version_Info__mdt.Core_Release_Number__c',
    'Q_Industries_Version_Info__mdt.IDO_Release_Name__c',
    'Q_Industries_Version_Info__mdt.SDO_Trialforce_Template_ID__c'
];

export default class LifeCycle extends LightningElement {

    //Id is hardcoded for demo purpose. You can pass a dynamic id here
    recordName='ReleaseInfo';

    @wire(getIDOVersionData)
    metadatarecord;
}
