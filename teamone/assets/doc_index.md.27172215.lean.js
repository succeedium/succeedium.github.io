import{_ as n,c as o,o as a,a as e,b as t}from"./app.27293715.js";import{_ as s}from"./teamone_menu.8ed278cd.js";import{_ as r}from"./teamone_users_securitySheet.09491c90.js";import{_ as i}from"./teamone_task_dynamic_value.436cad50.js";var l="/teamone/img/teamone_sidebar.png",c="/teamone/img/teamone_new_configuration.png",u="/teamone/img/teamone_securitySheetName.png",d="/teamone/img/teamone_config_refresh.png";const K='{"title":"Getting started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Get TeamOne","slug":"get-teamone"},{"level":2,"title":"TeamOne sidebar","slug":"teamone-sidebar"},{"level":2,"title":"SSL certificate","slug":"ssl-certificate"},{"level":2,"title":"TEAMONE config sheet","slug":"teamone-config-sheet"},{"level":2,"title":"Adding TM1 connections","slug":"adding-tm1-connections"},{"level":2,"title":"Adding TM1 tasks","slug":"adding-tm1-tasks"},{"level":2,"title":"Refreshing config","slug":"refreshing-config"}],"relativePath":"doc/index.md","lastUpdated":1636919275417}',m={},h=e("h1",{id:"getting-started",tabindex:"-1"},[t("Getting started "),e("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#")],-1),g=e("p",null,[t("Check out our "),e("a",{href:"https://www.youtube.com/watch?v=5HXyx17YTqM&list=PLfwxGidIwctfm7NmXiMKOVa1LmFlJ_zH6",target:"_blank",rel:"noopener noreferrer"},"YouTube playlist"),t(" for TeamOne demos and tutorials.")],-1),f=e("h2",{id:"get-teamone",tabindex:"-1"},[t("Get TeamOne "),e("a",{class:"header-anchor",href:"#get-teamone","aria-hidden":"true"},"#")],-1),p=e("p",null,[t("TeamOne can be added to Google Sheets\u2122 from Google Workspace Marketplace\u2122 (registered trademark owned by "),e("a",{href:"https://en.wikipedia.org/wiki/Google",target:"_blank",rel:"noopener noreferrer"},"Google LLC"),t(" ) by following this "),e("a",{href:"https://workspace.google.com/marketplace/app/teamone/112725458607",target:"_blank",rel:"noopener noreferrer"},"link"),t(". Our clients do not have to buy a Google Workspace\u2122 subscription. It can work even with a free account. Though if you have a paid plan, you will be able to install TeamOne for all your users.")],-1),_=e("h2",{id:"teamone-sidebar",tabindex:"-1"},[t("TeamOne sidebar "),e("a",{class:"header-anchor",href:"#teamone-sidebar","aria-hidden":"true"},"#")],-1),y=e("p",null,[t("You can access "),e("strong",null,"TeamOne sidebar"),t(" from the "),e("em",null,[e("strong",null,"Extensions")]),t(" menu: "),e("img",{src:s,alt:"img"})],-1),T=e("p",null,"The sidebar toolbar allows you to select the current environment, refresh the config from TEAMONE sheet (if you made any changes) and do several quick actions from the main menu:",-1),b=e("ul",null,[e("li",null,"Search TM1 model"),e("li",null,"Check server connection"),e("li",null,[t("Update security, if you defined a server "),e("a",{href:"./users.html#security-sheet"},"secruity sheet")]),e("li",null,"Save data on TM1 server"),e("li",null,[t("Open TI console "),e("img",{src:l,alt:"img"})])],-1),k=e("h2",{id:"ssl-certificate",tabindex:"-1"},[t("SSL certificate "),e("a",{class:"header-anchor",href:"#ssl-certificate","aria-hidden":"true"},"#")],-1),w=e("p",null,[t("To prevent SSL warnings in your browser we recommend configuring a custom SSL certificate (signed by a trusted certificate authority) for your TM1 server. Here are the IBM instructions for "),e("a",{href:"https://www.ibm.com/support/pages/how-configure-ssl-planning-analytics-data-tier-using-gskit-new-certificate-signing-request",target:"_blank",rel:"noopener noreferrer"},"How to Configure SSL on IBM Planning Analytics")],-1),v=e("h2",{id:"teamone-config-sheet",tabindex:"-1"},[t("TEAMONE config sheet "),e("a",{class:"header-anchor",href:"#teamone-config-sheet","aria-hidden":"true"},"#")],-1),O=e("p",null,[t("TeamOne add-on stores all the settings on a sheet called TEAMONE. You can add your TM1 connections and tasks as static values or using Sheets formulas. The parameters are entered in column A and the values are in column B. You can also use # for comments or to just to skip some lines. Configuration menu allows to quickly add new TM1 connections and tasks "),e("img",{src:c,alt:"img"})],-1),M=e("h2",{id:"adding-tm1-connections",tabindex:"-1"},[t("Adding TM1 connections "),e("a",{class:"header-anchor",href:"#adding-tm1-connections","aria-hidden":"true"},"#")],-1),S=e("p",null,[t("To connecte to TM1 you need to add a new "),e("strong",null,"tm1env"),t(" definition. You can do it manually or by using "),e("em",null,"TeamOne > Configuration > Add new TM1 connection"),t(" menu. Then edit the default parameters:")],-1),x=e("ul",null,[e("li",null,[t("change TeamOneTest to the desired connection "),e("strong",null,"name")]),e("li",null,[e("strong",null,"protocol"),t(" use "),e("em",null,"https"),t(" if useSSL=T in tm1s.cfg file, otherwise use "),e("em",null,"http")]),e("li",null,[e("strong",null,"host"),t(" specify your TM1 server host FQDN")]),e("li",null,[e("strong",null,"port"),t(" should be equal to HTTPPortNumber in tm1s.cfg file")]),e("li",null,[t("if using IntegratedSecurityMode 4 or 5 specify "),e("strong",null,"namespace"),t(' configured in Cognos Analytics (usually "LDAP")')]),e("li",null,[e("strong",null,"secret"),t(" is a base64 encoded username and password, the default one is for admin user")])],-1),A=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,[e("strong",null,"TeamOne"),t(" requires you to connect with an "),e("strong",null,"ADMIN"),t(" user")])],-1),N=e("p",null,[t("TeamOne allows you to synchronize users and their security groups from a sheet by specifying "),e("strong",null,"securitySheetName"),t(" parameter and creating a "),e("a",{href:"./users.html#security-sheet"},[e("strong",null,"securitySheet")]),t(": "),e("img",{src:u,alt:"img"})],-1),E=e("p",null,[t("By default TeamOne will look for users IDs in column 1 and will skip 1 header row. This can be customized by specifying the "),e("strong",null,"startRow"),t(" and "),e("strong",null,"startColumn"),t(" parameters. For instance: "),e("img",{src:r,alt:"img"})],-1),G=e("p",null,"New users and groups will be created if they do not exist.",-1),L=e("h2",{id:"adding-tm1-tasks",tabindex:"-1"},[t("Adding TM1 tasks "),e("a",{class:"header-anchor",href:"#adding-tm1-tasks","aria-hidden":"true"},"#")],-1),I=e("p",null,[t("Tasks are one-click automations that can be executed from TeamOne sidebar. They include: "),e("a",{href:"./tasks.html#tm1-process"},"tm1process"),t(", "),e("a",{href:"./tasks.html#tm1-view"},"tm1view"),t(", "),e("a",{href:"./tasks.html#tm1-import"},"tm1import"),t(" and "),e("a",{href:"./tasks.html#tm1-file-output"},"tm1fileoutput"),t(" (more automations are coming in the future). When defining task definitions on TEAMONE configuration sheet, you can make them dynamic using Google Sheets\u2122 formulas, for instance you can calculate a TI process parameter value based on the current year: "),e("img",{src:i,alt:"img"})],-1),C=e("h2",{id:"refreshing-config",tabindex:"-1"},[t("Refreshing config "),e("a",{class:"header-anchor",href:"#refreshing-config","aria-hidden":"true"},"#")],-1),P=e("p",null,[t("Configuration is automatically reloaded when you open TeamOne sidebar or TeamOne code. After you make any changes on TEAMONE sheet, you can refresh the config by clicking the "),e("strong",null,"Refresh config"),t(" button:")],-1),B=e("p",null,[e("img",{src:d,alt:"img"})],-1),q=e("hr",null,null,-1),Y=e("p",null,[t("Succeedium\xAE TeamOne 2021 | "),e("a",{href:"https://succeedium.com/teamone/privacy",target:"_blank",rel:"noopener noreferrer"},"Privacy Policy"),t(" | "),e("a",{href:"https://succeedium.com/teamone/terms",target:"_blank",rel:"noopener noreferrer"},"Terms Of Service")],-1),$=[h,g,f,p,_,y,T,b,k,w,v,O,M,S,x,A,N,E,G,L,I,C,P,B,q,Y];function j(D,H,R,z,F,V){return a(),o("div",null,$)}var Q=n(m,[["render",j]]);export{K as __pageData,Q as default};
