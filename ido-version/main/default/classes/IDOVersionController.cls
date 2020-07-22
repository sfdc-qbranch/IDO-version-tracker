public with sharing class IDOVersionController {

    private static final String DEFAULT_RECORD_NAME = 'ReleaseInfo';

    @AuraEnabled (cacheable=true)
    public static Q_Industries_Version_Info__mdt getVersionInfo() {
        Q_Industries_Version_Info__mdt metaData;
        metaData = [SELECT ID, MasterLabel, DeveloperName, Language, Core_Release_Name__c, Core_Release_Number__c, IDO_Release_Name__c, SDO_Trialforce_Template_ID__c FROM Q_Industries_Version_Info__mdt WHERE DeveloperName = :DEFAULT_RECORD_NAME];
        return metaData;
    }
}
