import{_ as o,c as n,o as r,a as e,b as s}from"./app.d5195c53.js";var t="/teamone/img/users/users.png",i="/teamone/img/users/user_groups.png",l="/teamone/img/users/copy_user_groups.png",a="/teamone/img/users/tm1env_securitysheet.png",u="/teamone/img/users/groups_sheet.png",c="/teamone/img/users/groups_dropdown.png",d="/teamone/img/users/securitysheet.png",h="/teamone/img/users/securitysheet_cognos.png",g="/teamone/img/users/tm1top.png";const we='{"title":"Users","description":"","frontmatter":{},"headers":[{"level":2,"title":"Managing users and groups","slug":"managing-users-and-groups"},{"level":3,"title":"Adding users","slug":"adding-users"},{"level":3,"title":"Modifying user groups","slug":"modifying-user-groups"},{"level":3,"title":"Disabling users","slug":"disabling-users"},{"level":3,"title":"Enabling users","slug":"enabling-users"},{"level":3,"title":"Copying user groups","slug":"copying-user-groups"},{"level":3,"title":"Deleting users","slug":"deleting-users"},{"level":3,"title":"Logging out users","slug":"logging-out-users"},{"level":2,"title":"Security sheet","slug":"security-sheet"},{"level":2,"title":"TM1 Top","slug":"tm1-top"},{"level":3,"title":"Users threads","slug":"users-threads"},{"level":3,"title":"Killing threads","slug":"killing-threads"}],"relativePath":"doc/users.md","lastUpdated":1645208352663}',p={},m=e("h1",{id:"users",tabindex:"-1"},[s("Users "),e("a",{class:"header-anchor",href:"#users","aria-hidden":"true"},"#")],-1),_=e("p",null,[s("On the "),e("strong",null,"users"),s(" tab you can:")],-1),y=e("ul",null,[e("li",null,"see all users"),e("li",null,"create new users"),e("li",null,"enable/disable users"),e("li",null,"see who is active"),e("li",null,"logout users"),e("li",null,"delete users"),e("li",null,"manage security groups")],-1),b=e("h2",{id:"managing-users-and-groups",tabindex:"-1"},[s("Managing users and groups "),e("a",{class:"header-anchor",href:"#managing-users-and-groups","aria-hidden":"true"},"#")],-1),f=e("h3",{id:"adding-users",tabindex:"-1"},[s("Adding users "),e("a",{class:"header-anchor",href:"#adding-users","aria-hidden":"true"},"#")],-1),v=e("p",null,[s("You can add individual user accounts using the "),e("em",null,"Add new user"),s(" menu option. We recommend using "),e("a",{href:"#security-sheet"},"securitySheet"),s(" for managing all users and groups and automatic syncrhonization into TM1.")],-1),w=e("p",null,[e("img",{src:t,alt:"img"})],-1),k=e("h3",{id:"modifying-user-groups",tabindex:"-1"},[s("Modifying user groups "),e("a",{class:"header-anchor",href:"#modifying-user-groups","aria-hidden":"true"},"#")],-1),T=e("p",null,[s("Click any user to modify their security groups and perform user actions. Use checkboxes to specify user's groups. By default the selected groups are displayed first, so if you select a new group it will move to the top. To change this behaviour click the "),e("em",null,"Group"),s(" header to order groups by name:")],-1),D=e("p",null,[e("img",{src:i,alt:"img"})],-1),x=e("p",null,"You can access user action menu by clicking the three dots button at the top right corner. Depending on the user current status, the menu will contain the following options:",-1),S=e("ul",null,[e("li",null,"Delete user"),e("li",null,[s("Logout user "),e("em",null,"(available for active users only)")]),e("li",null,[s("Disable user "),e("em",null,"(available for enabled users only)")]),e("li",null,[s("Enable user ("),e("em",null,"available for disabled users only)")])],-1),I=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"Copy to clipboard"),e("p",null,"Click the user name to copy it to clipboard")],-1),M=e("h3",{id:"disabling-users",tabindex:"-1"},[s("Disabling users "),e("a",{class:"header-anchor",href:"#disabling-users","aria-hidden":"true"},"#")],-1),P=e("p",null,[s("You can disable all non-admin users from the users menu or you can disable individual users by clicking the "),e("em",null,"Disable user"),s(" menu option on the user screen. This option does not show up if a user is disabled. The option is greyed out if the selected user belongs to ADMIN security group.")],-1),O=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,[s("The "),e("em",null,[e("strong",null,"Disable non-admin users")]),s(" feature is handy when you want to deploy a release, reload some big dimensions or do any other tasks and you would like to prevent object locking by possible users interactions.")])],-1),U=e("h3",{id:"enabling-users",tabindex:"-1"},[s("Enabling users "),e("a",{class:"header-anchor",href:"#enabling-users","aria-hidden":"true"},"#")],-1),C=e("p",null,[s("You can enable all disabled users from the users menu or you can enable individual users by clicking the "),e("em",null,"Enable user"),s(" menu option on the user screen. The option does not show up if the selected user is enabled.")],-1),N=e("h3",{id:"copying-user-groups",tabindex:"-1"},[s("Copying user groups "),e("a",{class:"header-anchor",href:"#copying-user-groups","aria-hidden":"true"},"#")],-1),Y=e("p",null,"You can copy/paste groups from one user to another one, which will replace all the tager user groups.",-1),A=e("p",null,[e("img",{src:l,alt:"img"})],-1),E=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,[s("When you click "),e("em",null,[e("strong",null,"Copy user groups")]),s(", the group list is also copied to your clipboard so you can paste it in a sheet or as a text anywhere.")])],-1),V=e("h3",{id:"deleting-users",tabindex:"-1"},[s("Deleting users "),e("a",{class:"header-anchor",href:"#deleting-users","aria-hidden":"true"},"#")],-1),j=e("p",null,[s("Use the "),e("em",null,"Delete"),s(" menu to delete the user")],-1),z=e("h3",{id:"logging-out-users",tabindex:"-1"},[s("Logging out users "),e("a",{class:"header-anchor",href:"#logging-out-users","aria-hidden":"true"},"#")],-1),B=e("p",null,[s("Use the "),e("em",null,"Logout"),s(" menu option on the user screen to logout the selected user. The option is displayed for active users only.")],-1),G=e("h2",{id:"security-sheet",tabindex:"-1"},[s("Security sheet "),e("a",{class:"header-anchor",href:"#security-sheet","aria-hidden":"true"},"#")],-1),K=e("p",null,[s("When defining a "),e("a",{href:"./tasks.html#tm1env"},"::tm1env"),s(" you can specify "),e("strong",null,"securitySheet"),s(" parameter and indicate the sheet which you want to synchronize users, groups and assignments from. By default TeamOne will look for user IDs in column 1 (groups shoud follow after the user ID column) and will skip 1 header row. This can be customized by specifying the "),e("strong",null,"startRow"),s(" and "),e("strong",null,"startColumn"),s(" parameters. Once you configure "),e("strong",null,"securitySheet"),s(", the "),e("em",null,"sync security"),s(" option will become available in the sidebar menu:")],-1),L=e("p",null,[e("img",{src:a,alt:"img"})],-1),W=e("p",null,[s("The easiest way to make a users sheet is to use the "),e("em",null,"Create security sheet"),s(" option, which will insert a new sheet and add all users & groups there. You will just need to set the sheet name as the "),e("em",null,"securitySheet"),s(" option value.")],-1),$=e("p",null,[e("img",{src:t,alt:"img"})],-1),Q=e("p",null,[s("Using Google Sheets "),e("em",null,"Data > Data validation"),s(" feature it is possible to create a group dropdown by selecting your group list range:")],-1),R=e("p",null,[e("img",{src:u,alt:"img"})],-1),Z=e("p",null,[e("img",{src:c,alt:"img"})],-1),F=e("p",null,"Now you can search and assign groups from a dropdown:",-1),H=e("p",null,[e("img",{src:d,alt:"img"})],-1),q=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},'"Hierarchy-like" group dropdowns'),e("p",null,"You can prepend spaces to your group names so they appear like a hierarchy in dropdowns. TeamOne will automatically trim all spaces when updating the security in TM1.")],-1),J=e("p",null,[s("If using "),e("em",null,"namespace"),s(" in "),e("em",null,"::tm1env"),s(" definition, you can prepend the user IDs with "),e("em",null,"namespace/"),s(" and add semicolons at the end ("),e("em",null,[e("strong",null,"TeamOne")]),s(" will strip it when creating/updating users in TM1). This will allow you to add all users to a Cognos group in one shot using the "),e("a",{href:"https://www.ibm.com/docs/en/cognos-analytics/11.0.0?topic=roles-adding-removing-members-cognos-group-role",target:"_blank",rel:"noopener noreferrer"},[e("em",null,[e("strong",null,"type")]),s(" method")]),s(". Do not use CAMIDs in user ID column.")],-1),X=e("p",null,[e("img",{src:h,alt:"img"})],-1),ee=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"New users and groups"),e("p",null,"New users and groups will be created if they do not exist.")],-1),se=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"Access"),e("p",null,[s("Use "),e("em",null,"Data > Protected sheets and ranges"),s(" to give certain users (usually some managers) access to update users and groups.")])],-1),te=e("p",null,[s("See "),e("a",{href:"https://docs.google.com/spreadsheets/d/1wOI8onSk2GoOoVzSDh_EPbZj5pN5iQPPK62cDV3sr7k/edit#gid=858904422",target:"_blank",rel:"noopener noreferrer"},"sheetName parameter example")],-1),oe=e("p",null,[s("See "),e("a",{href:"https://docs.google.com/spreadsheets/d/1wOI8onSk2GoOoVzSDh_EPbZj5pN5iQPPK62cDV3sr7k/edit#gid=1504658042",target:"_blank",rel:"noopener noreferrer"},"Users and groups sheet example")],-1),ne=e("h2",{id:"tm1-top",tabindex:"-1"},[s("TM1 Top "),e("a",{class:"header-anchor",href:"#tm1-top","aria-hidden":"true"},"#")],-1),re=e("h3",{id:"users-threads",tabindex:"-1"},[s("Users threads "),e("a",{class:"header-anchor",href:"#users-threads","aria-hidden":"true"},"#")],-1),ie=e("p",null,[s("You can open "),e("em",null,"TM1 top"),s(" from the sidebar menu. It displays all users sessions, including info about the used interface (Architect, TM1Web or REST API) and what they are doing at the moment. For instance, if someone is executing a process, you will be able to see the process name and the execution time.")],-1),le=e("p",null,[e("img",{src:g,alt:"img"})],-1),ae=e("h3",{id:"killing-threads",tabindex:"-1"},[s("Killing threads "),e("a",{class:"header-anchor",href:"#killing-threads","aria-hidden":"true"},"#")],-1),ue=e("p",null,"You can click a user thread to cancel it.",-1),ce=e("hr",null,null,-1),de=e("p",null,[s("Succeedium\xAE TeamOne 2022 | "),e("a",{href:"https://succeedium.com/teamone/privacy",target:"_blank",rel:"noopener noreferrer"},"Privacy Policy"),s(" | "),e("a",{href:"https://succeedium.com/teamone/terms",target:"_blank",rel:"noopener noreferrer"},"Terms Of Service")],-1),he=[m,_,y,b,f,v,w,k,T,D,x,S,I,M,P,O,U,C,N,Y,A,E,V,j,z,B,G,K,L,W,$,Q,R,Z,F,H,q,J,X,ee,se,te,oe,ne,re,ie,le,ae,ue,ce,de];function ge(pe,me,_e,ye,be,fe){return r(),n("div",null,he)}var ke=o(p,[["render",ge]]);export{we as __pageData,ke as default};