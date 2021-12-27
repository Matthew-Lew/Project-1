public class apexController {

    @AuraEnabled
    public static List<User> getUser(){
            return [SELECT email, Id, Username FROM User WHERE Id = :UserInfo.getUserId() LIMIT 1];
    }

    @AuraEnabled(cacheable=true)
    public static List<Purchase__c> getCurrentUsersPurchases(){
        Contact currentUser = [SELECT id, name FROM Contact WHERE Email = :UserInfo.getUserEmail() LIMIT 1];
        return [SELECT Product__r.name, Contact__c, Total_Cost__c, Date_of_Purchase__c FROM Purchase__c WHERE Contact__c = :currentUser.Id];
    }

    @AuraEnabled(cacheable=true)
    public static Id getContactId(){
        Contact c = [SELECT id FROM Contact WHERE Email = :UserInfo.getUserEmail() LIMIT 1];
        return c.Id;
    }
}