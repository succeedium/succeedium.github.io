import{_ as t,c as o,o as a,a as e,b as n}from"./app.16ddff48.js";var s="/teamone/img/configuration/teamone_menu.png",i="/teamone/img/configuration/teamone_configuration.png",r="/teamone/img/configuration/move_to_sheet.png",l="/teamone/img/configuration/teamone_sidebar.png",c="/teamone/img/configuration/refresh.png";const se='{"title":"Getting started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Get TeamOne","slug":"get-teamone"},{"level":2,"title":"SSL certificate","slug":"ssl-certificate"},{"level":2,"title":"TeamOne menu","slug":"teamone-menu"},{"level":2,"title":"TeamOne Configuration","slug":"teamone-configuration"},{"level":3,"title":"Personal Settings","slug":"personal-settings"},{"level":3,"title":"Global Settings","slug":"global-settings"},{"level":3,"title":"TEAMONE sheet","slug":"teamone-sheet"},{"level":3,"title":"Merged Settings","slug":"merged-settings"},{"level":3,"title":"Security","slug":"security"},{"level":2,"title":"TM1 connection","slug":"tm1-connection"},{"level":2,"title":"TeamOne Sidebar","slug":"teamone-sidebar"},{"level":2,"title":"Refreshing configuration","slug":"refreshing-configuration"}],"relativePath":"doc/index.md","lastUpdated":1642106223361}',u={},h=e("h1",{id:"getting-started",tabindex:"-1"},[n("Getting started "),e("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#")],-1),d=e("p",null,[n("Check out our "),e("a",{href:"https://www.youtube.com/watch?v=IjkzTAxUcwE&list=PLfwxGidIwctfm7NmXiMKOVa1LmFlJ_zH6",target:"_blank",rel:"noopener noreferrer"},"YouTube playlist"),n(" for TeamOne demos and tutorials.")],-1),m=e("h2",{id:"get-teamone",tabindex:"-1"},[n("Get TeamOne "),e("a",{class:"header-anchor",href:"#get-teamone","aria-hidden":"true"},"#")],-1),g=e("p",null,[n("TeamOne can be added to Google Sheets\u2122 from Google Workspace Marketplace\u2122 (registered trademark owned by "),e("a",{href:"https://en.wikipedia.org/wiki/Google",target:"_blank",rel:"noopener noreferrer"},"Google LLC"),n(" ) by following this "),e("a",{href:"https://workspace.google.com/marketplace/app/teamone/112725458607",target:"_blank",rel:"noopener noreferrer"},"link"),n(". Our clients do not have to buy a Google Workspace\u2122 subscription. It can work even with a free account. Though if you have a paid plan, you will be able to install TeamOne for all your users.")],-1),f=e("h2",{id:"ssl-certificate",tabindex:"-1"},[n("SSL certificate "),e("a",{class:"header-anchor",href:"#ssl-certificate","aria-hidden":"true"},"#")],-1),p=e("p",null,[n("To prevent SSL warnings in your browser we recommend configuring a custom SSL certificate (signed by a trusted certificate authority) for your TM1 server. Here are the IBM instructions for "),e("a",{href:"https://www.ibm.com/support/pages/how-configure-ssl-planning-analytics-data-tier-using-gskit-new-certificate-signing-request",target:"_blank",rel:"noopener noreferrer"},"How to Configure SSL on IBM Planning Analytics")],-1),_=e("h2",{id:"teamone-menu",tabindex:"-1"},[n("TeamOne menu "),e("a",{class:"header-anchor",href:"#teamone-menu","aria-hidden":"true"},"#")],-1),y=e("p",null,[n("You can find "),e("strong",null,"TeamOne"),n(" under the "),e("em",null,"Extensions"),n(" menu. It contains options to open the "),e("strong",null,"TeamOne Sidebar"),n(", "),e("strong",null,"TeamOne Configuration"),n(", access additional tools and see the "),e("strong",null,"About"),n(" page which displays the current add-on version and your license information. "),e("img",{src:s,alt:"img"})],-1),b=e("h2",{id:"teamone-configuration",tabindex:"-1"},[n("TeamOne Configuration "),e("a",{class:"header-anchor",href:"#teamone-configuration","aria-hidden":"true"},"#")],-1),T=e("p",null,[n("You can manage TeamOne add-on settings either in "),e("strong",null,"TeamOne Configuration"),n(" or on a "),e("em",null,"sheet"),n(" named "),e("strong",null,"TEAMONE"),n(". Using TeamOne Configuration you can define personal and global TM1 connections and tasks. And using the TEAMONE sheet you can make the settings dynamic, for instance you can add a tm1 process task and calculate the process parameter values with sheets formulas.")],-1),w=e("p",null,[n("If you have "),e("strong",null,"Admin"),n(" permissions or if you have no security defined, you will see 3 tabs: Personal Settings, Global Settings, Security. Otherwise only the Personal Settings will be available. "),e("img",{src:i,alt:"img"})],-1),v=e("h3",{id:"personal-settings",tabindex:"-1"},[n("Personal Settings "),e("a",{class:"header-anchor",href:"#personal-settings","aria-hidden":"true"},"#")],-1),O=e("p",null,[n("You can define private TM1 connections and private tasks in "),e("em",null,"Personal Settings"),n(". Personal Settings are stored in your Google account and they are shared for all your sheets where you use TeamOne add-on. No other users can see it. The interface also allows to move any setting to "),e("em",null,"TEAMONE"),n(" sheet "),e("img",{src:r,alt:"img"})],-1),S=e("h3",{id:"global-settings",tabindex:"-1"},[n("Global Settings "),e("a",{class:"header-anchor",href:"#global-settings","aria-hidden":"true"},"#")],-1),M=e("p",null,[e("em",null,"Global Settings"),n(" are stored in your the current sheet properties and available to all users, but only "),e("strong",null,"Admin"),n(" users can see this tab, hence can edit it. The interface also allows to move any setting to "),e("em",null,"TEAMONE"),n(" sheet")],-1),k=e("h3",{id:"teamone-sheet",tabindex:"-1"},[n("TEAMONE sheet "),e("a",{class:"header-anchor",href:"#teamone-sheet","aria-hidden":"true"},"#")],-1),E=e("p",null,[n("You can define TM1 connections and tasks directly on "),e("em",null,"TEAMONE"),n(" sheet. You can use Sheets formulas, copy\\paste settings, "),e("a",{href:"./functions.html#comments"},"comment"),n(" individual settings or entire settings blocks.")],-1),A=e("h3",{id:"merged-settings",tabindex:"-1"},[n("Merged Settings "),e("a",{class:"header-anchor",href:"#merged-settings","aria-hidden":"true"},"#")],-1),x=e("p",null,"If you have the same named peronsal, global and TEAMONE sheet settings, they will be merged in the next order:",-1),P=e("ol",null,[e("li",null,"Global Settings"),e("li",null,"Personal Settings"),e("li",null,"TEAMONE sheet")],-1),N=e("p",null,[n("For instance, as an admin user, I would like to define a new TM1 connection named "),e("em",null,"TM1PROD"),n(" in the global settings, this is where I would define the TM1 host, port, namespace (in case of CAM authentication) and securitySheet. Then other users can also create "),e("em",null,"TM1PROD"),n(" connection but popoulate the "),e("strong",null,"secret"),n(" field only. Finally on TEAMONE sheet we can aslo define "),e("em",null,"TM1PROD"),n(" connection and specify a different value for the "),e("em",null,"securitySheet"),n(". When opening "),e("strong",null,"TeamOne Sidebar"),n(", all the settings will be merged, so "),e("em",null,"TM1PROD"),n(" connection will get the host, port and namespace from the "),e("em",null,"Global Settings"),n(", the secret from the "),e("em",null,"Private Settings"),n(", finally the "),e("em",null,"securitySheet"),n(" value defined on the TEAMONE sheet.")],-1),G=e("h3",{id:"security",tabindex:"-1"},[n("Security "),e("a",{class:"header-anchor",href:"#security","aria-hidden":"true"},"#")],-1),C=e("p",null,[n("By default you have no security defined when you start using TeamOne add-on in a new sheet document. That means all users can see the "),e("em",null,"Global Settings"),n(" and change the "),e("em",null,"Security"),n(". On the "),e("em",null,"Security"),n(" tab you add user emails and specify who should have "),e("strong",null,"Admin"),n(" permissions. Once you added your first account, other users will not be able to access the "),e("em",null,"Global Settings"),n(" and "),e("em",null,"Security"),n(" tabs.")],-1),I=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,[n("Use can and you should use Google Sheets sharing options to specify who can see your document and who can edit it. You can also use "),e("a",{href:"https://support.google.com/docs/answer/1218656",target:"_blank",rel:"noopener noreferrer"},"Protected sheets and ranges"),n(" to control who can modify the TEAMONE config sheet.")])],-1),L=e("h2",{id:"tm1-connection",tabindex:"-1"},[n("TM1 connection "),e("a",{class:"header-anchor",href:"#tm1-connection","aria-hidden":"true"},"#")],-1),Y=e("p",null,[n("You will need at least one TM1 connection. As mentioned above, you can define it in "),e("a",{href:"#teamone-configuration"},"TeamOne Configuration"),n(" or on "),e("a",{href:"#teamone-sheet"},"TEAMONE sheet"),n(". The connection consists if the next parameters:")],-1),D=e("ul",null,[e("li",null,[e("strong",null,"name"),n(" (how it will appear in the sidebar, it can be different from the actual TM1 server name)")]),e("li",null,[e("strong",null,"protocol"),n(" (you can omit it if you have useSSL=T in tm1s.cfg file, otherwise specify "),e("em",null,"http"),n("),")]),e("li",null,[e("strong",null,"host"),n(" specify your TM1 server host FQDN")]),e("li",null,[e("strong",null,"port"),n(" should be equal to HTTPPortNumber in tm1s.cfg file")]),e("li",null,[n("if using IntegratedSecurityMode 4 or 5 specify "),e("strong",null,"namespace"),n(' configured in Cognos Analytics (usually "LDAP")')]),e("li",null,[e("strong",null,"secret"),n(" is a base64 encoded username and password, the default one is for admin/apple. Use "),e("em",null,"TeamOne > Tools > Secret maker"),n(" menu to create your own one.")])],-1),U=e("p",null,[n("You can also use "),e("strong",null,"securitySheetName"),n(" parameter, which will enable users, groups and permissions synchronization from the specified sheet. You can read more about this feature on "),e("a",{href:"./users.html#security-sheet"},"Users"),n(" page.")],-1),R=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,[n("When connecting to TM1 server, "),e("strong",null,"TeamOne"),n(" will check if a user account has "),e("strong",null,"ADMIN"),n(" security group and if yes, you will enable additional functionality in the sidebar, like Users, Logs and Processes tabs.")])],-1),B=e("h2",{id:"teamone-sidebar",tabindex:"-1"},[n("TeamOne Sidebar "),e("a",{class:"header-anchor",href:"#teamone-sidebar","aria-hidden":"true"},"#")],-1),F=e("p",null,[n("You can access "),e("strong",null,"TeamOne Sidebar"),n(" from "),e("a",{href:"#teamone-menu"},"Extensions menu"),n(". If you have no "),e("a",{href:"#tm1-connection"},"TM1 connection"),n(" defined, "),e("a",{href:"#teamone-configuration"},"TeamOne Configuration"),n(" screen will pop up automatically where you can add one.")],-1),H=e("p",null,"The sidebar toolbar allows you to select the current environment, refresh the config (if you made any changes on TEAMONE sheet or in Configuration menu) and do several quick actions from the main menu:",-1),W=e("ul",null,[e("li",null,"Search TM1 model"),e("li",null,[n("Update security, if you defined a server "),e("a",{href:"./users.html#security-sheet"},"secruity sheet")]),e("li",null,"Save data on TM1 server"),e("li",null,"Open TI console"),e("li",null,"Open TM1 Top"),e("li",null,"Open TeamOne Configuration")],-1),$=e("p",null,[e("img",{src:l,alt:"img"})],-1),q=e("h2",{id:"refreshing-configuration",tabindex:"-1"},[n("Refreshing configuration "),e("a",{class:"header-anchor",href:"#refreshing-configuration","aria-hidden":"true"},"#")],-1),z=e("p",null,[n("Configuration is automatically reloaded when you open "),e("strong",null,"TeamOne sidebar"),n(". After you make any changes on TEAMONE sheet or through TeamOne Configuration interface, you should use the "),e("strong",null,"Refresh config"),n(" button:")],-1),V=e("p",null,[e("img",{src:c,alt:"img"})],-1),j=e("hr",null,null,-1),J=e("p",null,[n("Succeedium\xAE TeamOne 2022 | "),e("a",{href:"https://succeedium.com/teamone/privacy",target:"_blank",rel:"noopener noreferrer"},"Privacy Policy"),n(" | "),e("a",{href:"https://succeedium.com/teamone/terms",target:"_blank",rel:"noopener noreferrer"},"Terms Of Service")],-1),K=[h,d,m,g,f,p,_,y,b,T,w,v,O,S,M,k,E,A,x,P,N,G,C,I,L,Y,D,U,R,B,F,H,W,$,q,z,V,j,J];function Q(X,Z,ee,ne,te,oe){return a(),o("div",null,K)}var ie=t(u,[["render",Q]]);export{se as __pageData,ie as default};
