import{_ as t,c as n,o as i,a as e,b as s}from"./app.7bb46320.js";var l="/teamone/img/users/users.png",o="/teamone/img/users/user_dialog.png",r="/teamone/img/_OLD/teamone_users_securitySheet.png";const Z='{"title":"Users","description":"","frontmatter":{},"headers":[{"level":2,"title":"Managing users and groups","slug":"managing-users-and-groups"},{"level":3,"title":"Modifying user permissions","slug":"modifying-user-permissions"},{"level":3,"title":"Deleting users","slug":"deleting-users"},{"level":3,"title":"Disabling users","slug":"disabling-users"},{"level":3,"title":"Enabling users","slug":"enabling-users"},{"level":3,"title":"Logging out users","slug":"logging-out-users"},{"level":2,"title":"Security sheet","slug":"security-sheet"},{"level":2,"title":"TM1 Top","slug":"tm1-top"},{"level":3,"title":"Users threads","slug":"users-threads"},{"level":3,"title":"Killing threads","slug":"killing-threads"}],"relativePath":"doc/users.md","lastUpdated":1643439451610}',a={},u=e("h1",{id:"users",tabindex:"-1"},[s("Users "),e("a",{class:"header-anchor",href:"#users","aria-hidden":"true"},"#")],-1),d=e("p",null,[s("On the "),e("strong",null,"users"),s(" tab you can:")],-1),c=e("ul",null,[e("li",null,"see all users"),e("li",null,"create new users"),e("li",null,"enable/disable users"),e("li",null,"see who is active"),e("li",null,"logout users"),e("li",null,"delete users"),e("li",null,"manage security groups")],-1),h=e("p",null,[e("img",{src:l,alt:"img"})],-1),g=e("h2",{id:"managing-users-and-groups",tabindex:"-1"},[s("Managing users and groups "),e("a",{class:"header-anchor",href:"#managing-users-and-groups","aria-hidden":"true"},"#")],-1),m=e("h3",{id:"modifying-user-permissions",tabindex:"-1"},[s("Modifying user permissions "),e("a",{class:"header-anchor",href:"#modifying-user-permissions","aria-hidden":"true"},"#")],-1),p=e("p",null,[s("Click any user to modify their security groups and perform user actions. Use checkboxes to specify user's groups. By default the selected groups are displayed first, so if you select a new group it will move to the top. To change this behaviour click the "),e("em",null,"Group"),s(" header to order groups by name:")],-1),_=e("p",null,[e("img",{src:o,alt:"img"})],-1),b=e("p",null,"You can access user action menu by clicking the three dots button at the top right corner. Depending on the user current status, the menu will contain the following options:",-1),y=e("ul",null,[e("li",null,"Delete user"),e("li",null,[s("Logout user "),e("em",null,"(available for active users only)")]),e("li",null,[s("Disable user "),e("em",null,"(available for enabled users only)")]),e("li",null,[s("Enable user ("),e("em",null,"available for disabled users only)")])],-1),f=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"Copy to clipboard"),e("p",null,"Click the user name to copy it to clipboard")],-1),v=e("h3",{id:"deleting-users",tabindex:"-1"},[s("Deleting users "),e("a",{class:"header-anchor",href:"#deleting-users","aria-hidden":"true"},"#")],-1),k=e("p",null,[s("Use the "),e("em",null,"Delete"),s(" menu to delete the user")],-1),w=e("h3",{id:"disabling-users",tabindex:"-1"},[s("Disabling users "),e("a",{class:"header-anchor",href:"#disabling-users","aria-hidden":"true"},"#")],-1),D=e("p",null,[s("You can disable all non-admin users from the users menu or you can disable individual users by clicking the "),e("em",null,"Disable user"),s(" menu option on the user screen. This option does not show up if a user is disabled. The option is greyed out if the selected user belongs to ADMIN security group.")],-1),T=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,[s("The "),e("em",null,[e("strong",null,"Disable non-admin users")]),s(" feature is handy when you want to deploy a release, reload some big dimensions or do any other tasks and you would like to prevent object locking by possible users interactions.")])],-1),x=e("h3",{id:"enabling-users",tabindex:"-1"},[s("Enabling users "),e("a",{class:"header-anchor",href:"#enabling-users","aria-hidden":"true"},"#")],-1),O=e("p",null,[s("You can enable all disabled users from the users menu or you can enable individual users by clicking the "),e("em",null,"Enable user"),s(" menu option on the user screen. The option does not show up if the selected user is enabled.")],-1),M=e("h3",{id:"logging-out-users",tabindex:"-1"},[s("Logging out users "),e("a",{class:"header-anchor",href:"#logging-out-users","aria-hidden":"true"},"#")],-1),S=e("p",null,[s("Use the "),e("em",null,"Logout"),s(" menu option on the user screen to logout the selected user. The option is displayed for active users only.")],-1),I=e("h2",{id:"security-sheet",tabindex:"-1"},[s("Security sheet "),e("a",{class:"header-anchor",href:"#security-sheet","aria-hidden":"true"},"#")],-1),L=e("p",null,[s("In "),e("a",{href:"./index.html#adding-tm1-connections"},[e("em",null,[e("strong",null,"tm1env")])]),s(" you can specify "),e("strong",null,"securitySheet"),s(" parameter and indicate the sheet which you want to synchronize the users and permissions from. By default TeamOne will look for users IDs in column 1 and will skip 1 header row. This can be customized by specifying the "),e("strong",null,"startRow"),s(" and "),e("strong",null,"startColumn"),s(" parameters. For instance: "),e("img",{src:r,alt:"img"})],-1),U=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,"New users and groups will be created if they do not exist.")],-1),C=e("div",{class:"danger custom-block"},[e("p",{class:"custom-block-title"},"CAMIDs"),e("p",null,"Don't use CAMID in userID column as TeamOne may produce unexpected results.")],-1),N=e("p",null,[s("TeamOne allows you to synchronize users and their security groups from a sheet by specifying "),e("strong",null,"securitySheetName"),s(" parameter and creating a "),e("a",{href:"./users.html#security-sheet"},[e("strong",null,"securitySheet")]),s(": /img/_OLD/securitySheetName.png")],-1),B=e("p",null,[s("By default TeamOne will look for users IDs in column 1 and will skip 1 header row. This can be customized by specifying the "),e("strong",null,"startRow"),s(" and "),e("strong",null,"startColumn"),s(" parameters. For instance: /img/_OLD/securitySheet.png")],-1),E=e("p",null,"New users and groups will be created if they do not exist.",-1),P=e("h2",{id:"tm1-top",tabindex:"-1"},[s("TM1 Top "),e("a",{class:"header-anchor",href:"#tm1-top","aria-hidden":"true"},"#")],-1),z=e("p",null,"On the system tab you can see and kill active user theads in TM1 similarly to tm1top.",-1),Y=e("h3",{id:"users-threads",tabindex:"-1"},[s("Users threads "),e("a",{class:"header-anchor",href:"#users-threads","aria-hidden":"true"},"#")],-1),$=e("p",null,"/img/_OLD/teamone_system.png",-1),A=e("h3",{id:"killing-threads",tabindex:"-1"},[s("Killing threads "),e("a",{class:"header-anchor",href:"#killing-threads","aria-hidden":"true"},"#")],-1),j=e("p",null,"You can click a thread to cancel it. /img/_OLD/teamone_system_thread.png",-1),F=e("hr",null,null,-1),K=e("p",null,[s("Succeedium\xAE TeamOne 2022 | "),e("a",{href:"https://succeedium.com/teamone/privacy",target:"_blank",rel:"noopener noreferrer"},"Privacy Policy"),s(" | "),e("a",{href:"https://succeedium.com/teamone/terms",target:"_blank",rel:"noopener noreferrer"},"Terms Of Service")],-1),R=[u,d,c,h,g,m,p,_,b,y,f,v,k,w,D,T,x,O,M,S,I,L,U,C,N,B,E,P,z,Y,$,A,j,F,K];function V(G,q,H,J,Q,W){return i(),n("div",null,R)}var ee=t(a,[["render",V]]);export{Z as __pageData,ee as default};
