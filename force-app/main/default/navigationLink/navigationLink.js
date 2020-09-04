/**
 * @description       : Javascript component for the navigation link LWC
 * @author            : Glenn Deschuymer
 * @group             : LWC Utilities
 * @last modified on  : 03-09-2020
 * @last modified by  : Glenn Deschuymer
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   28-08-2020   Glenn Deschuymer   Initial Version
**/
import { LightningElement, api, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationLink extends NavigationMixin(LightningElement){
    @api title;                 // Text displayed when hovering over the link
    @api label;                 // Label displayed to the user as the link

    @api type;                  // Page reference type
    @api objectname;            // API Name of the SObject
    @api recordid;              // 18 character record Id
    @api actionname;            // Action name to invoke (view, edit, clone)
    @api apiname;               // Unique name of the custom tab
    @api pagename;              // Page Name for redirection
    @api componentname;         // Developer Name of the Lightning Web Component    
    @api relationshipname;      // API Name of the relationship
    @api url;                   // Web page for redirection

    @track navigationUrl;       // URL for the link

    // Generate the URL
    connectedCallback(){
        this[NavigationMixin.GenerateUrl]({
            type: this.type,
            attributes: {                
                objectApiName: this.objectname,
                recordId: this.recordid,                
                actionName: this.actionname,
                apiName: this.apiname,
                pageName: this.pagename,
                componentName: this.componentname,                
                relationshipApiName: this.relationshipname,
                url: this.url
            }
        }).then(url => {
            this.navigationUrl = url;
        });
    }
}