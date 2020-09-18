/**
 * @description       : Javascript file for the navigation button component
 * @author            : Glenn Deschuymer
 * @group             : LWC
 * @last modified on  : 15-09-2020
 * @last modified by  : Glenn Deschuymer
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   07-09-2020   Glenn Deschuymer   Initial Version
**/
import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationButton extends NavigationMixin(LightningElement) {    
    @api variant;                   // Styling applied to the button
    @api title;                     // Text displayed in the button
    @api label;                     // Text displayed when hovering over the button
    
    @api type;                      // Page reference type
    @api objectname;                // API Name of the SObject
    @api recordid;                  // 18 character record Id
    @api actionname;                // Action name to invoke (view, edit, clone)
    @api apiname;                   // Unique name of the custom tab
    @api pagename;                  // Page Name for redirection
    @api componentname;             // Developer Name of the Lightning Web Component    
    @api relationshipname;          // API Name of the relationship
    @api url;                       // Web page for redirection

    @api classic;                   // Visualforce or Lightning context
    @api selectedtab;               // Selected tab for redirection
    @api redirect;                  // Redirection URL in Salesforce Classic

    // Navigate to the URL
    navigateToUrl(){
                       
        if(!this.classic){
            // Lightning context             
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
                },
                state: {
                    "c__selectedTab": this.selectedtab
                }
            }).then(url => {
                window.location.replace(url, "_self");
            });
        } else {
            // Visualforce context
            var redirectionURL = this.redirect;            
            //window.open(redirectionURL);
            window.location.href = redirectionURL;
        }
    }
}