import{_ as o,c as t,o as i,a as e,b as n}from"./app.4ca8b8e5.js";var r="/teamone/img/issues/connection_error.png",l="/teamone/img/issues/ssl_error.png";const Y='{"title":"TM1 connection issue","description":"","frontmatter":{},"headers":[{"level":2,"title":"TM1 connection issue","slug":"tm1-connection-issue"},{"level":2,"title":"TeamOne add-on not working when signed in with multiple accounts","slug":"teamone-add-on-not-working-when-signed-in-with-multiple-accounts"},{"level":2,"title":"TeamOne add-on not working. PERMISSION_DENIED","slug":"teamone-add-on-not-working-permission-denied"},{"level":2,"title":"TeamOne add-on not working in incognito window","slug":"teamone-add-on-not-working-in-incognito-window"},{"level":2,"title":"=TEAMONE() formula returns \\"unknown function\\" error","slug":"teamone-formula-returns-unknown-function-error"},{"level":2,"title":"ResultSetOutOfMemory: AuditLogMaxQueryMemory too small","slug":"resultsetoutofmemory-auditlogmaxquerymemory-too-small"}],"relativePath":"doc/issues.md","lastUpdated":1690236967886}',s={},a=e("h2",{id:"tm1-connection-issue",tabindex:"-1"},[n("TM1 connection issue "),e("a",{class:"header-anchor",href:"#tm1-connection-issue","aria-hidden":"true"},"#")],-1),u=e("p",null,[n("If you get "),e("em",null,"TeamOne is having issues connecting to TM1"),n(", try the following steps:")],-1),c=e("ul",null,[e("li",null,"check your VPN connection (if you are using one)"),e("li",null,[n("check your TM1 SSL connection (by clicking the connection link link in the Check connection dialog) your VPN connection (if you are using one). If there is a connection issue, you will see a grey box with a sad faced emoji. If connection is fine, you will see the api version numbers. See "),e("a",{href:"./index.html#ssl-certificate"},"SSL certificate"),e("img",{src:r,alt:"img"})]),e("li",null,[n('If you see a browser SSL warning (i.e. "Your connection is not private", "Your connection is not secure", etc.), you can accept it by clicking the '),e("strong",null,"Advanced"),n(" button below and then "),e("strong",null,"Proceed"),n(" to. After that you can go back to TeamOne, close the error dialog and click the refresh tab button. "),e("img",{src:l,alt:"img"})]),e("li",null,"Check your TM1 is up"),e("li",null,[n("Is your TM1 server hosted on AWS or elsewhere? Check the firewall rules and make sure the "),e("strong",null,"HTTPPortNumber"),n(" port is open")]),e("li",null,[e("a",{href:"https://succeedium.com/teamone/contact",target:"_blank",rel:"noopener noreferrer"},"Contact us")])],-1),d=e("h2",{id:"teamone-add-on-not-working-when-signed-in-with-multiple-accounts",tabindex:"-1"},[n("TeamOne add-on not working when signed in with multiple accounts "),e("a",{class:"header-anchor",href:"#teamone-add-on-not-working-when-signed-in-with-multiple-accounts","aria-hidden":"true"},"#")],-1),m=e("p",null,"Additionally you may see the following messages in Dev console:",-1),h=e("ul",null,[e("li",null,"Exception: You do not have permission to access the requested document."),e("li",null,[n("ERROR: Authorization is required to perform that action. (the error message can be different in different languagues) There is a limitation of add-ons when using multiple accounts. It is documented here: "),e("a",{href:"https://developers.google.com/apps-script/guides/projects#fix_issues_with_multiple_google_accounts",target:"_blank",rel:"noopener noreferrer"},"https://developers.google.com")])],-1),g=e("p",null,"You can use one of the next workarounds:",-1),p=e("ul",null,[e("li",null,"sing out from all accounts and sing it back first with the account you intend to use TeamOne add-on with"),e("li",null,[n("for Google Chrome, use a separate "),e("a",{href:"https://support.google.com/chrome/answer/2364824",target:"_blank",rel:"noopener noreferrer"},"account profile")]),e("li",null,[n("for Firefox, use a separate "),e("a",{href:"https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/",target:"_blank",rel:"noopener noreferrer"},"account containers")]),e("li",null,"use a different browser for TeamOne add-on"),e("li",null,"use a new incognito window")],-1),f=e("h2",{id:"teamone-add-on-not-working-permission-denied",tabindex:"-1"},[n("TeamOne add-on not working. PERMISSION_DENIED "),e("a",{class:"header-anchor",href:"#teamone-add-on-not-working-permission-denied","aria-hidden":"true"},"#")],-1),_=e("p",null,[n("You may also see the next error in Dev console: "),e("em",null,"We're sorry, a server error occurred while reading from storage. Error code PERMISSION_DENIED.?"),n(" This is a random error when trying to access Google script functions. Try the following to resolve it:")],-1),y=e("ul",null,[e("li",null,"re-open TeamOne Sidebar"),e("li",null,"re-fresh page and try opening TeamOne Sidebar"),e("li",null,"re-login to your Google account, re-open your Google sheet and try opening TeamOne Sidebar")],-1),w=e("h2",{id:"teamone-add-on-not-working-in-incognito-window",tabindex:"-1"},[n("TeamOne add-on not working in incognito window "),e("a",{class:"header-anchor",href:"#teamone-add-on-not-working-in-incognito-window","aria-hidden":"true"},"#")],-1),k=e("p",null,[n("You may also see the next error in Dev console: "),e("em",null,`Error in v-on handler: "SecurityError: Failed to read the 'localStorage' property from 'Window': Access is denied for this document."`),n(` TeamOne add-on is using cookies and it may be blocked by your browser, for instance under Chrome's Settings > Privacy > Content settings, you have the cookie setting set to "Block sites from setting any data". Enable cookies and try again.`)],-1),b=e("h2",{id:"teamone-formula-returns-unknown-function-error",tabindex:"-1"},[n('=TEAMONE() formula returns "unknown function" error '),e("a",{class:"header-anchor",href:"#teamone-formula-returns-unknown-function-error","aria-hidden":"true"},"#")],-1),T=e("p",null,[n("Make sure you opened the TeamOne sidebar, it will load all the add-on scripts including the "),e("em",null,[e("strong",null,"TEAMONE()")]),n(" function.")],-1),O=e("p",null,"In some cases (like when you copy an existing sheet document), add-ons may require you to re-acivate them. Try the next steps:",-1),v=e("ol",null,[e("li",null,[n("Go to "),e("em",null,"Extensions > TeamOne > Help"),n(" menu")]),e("li",null,[n("Click "),e("em",null,"View in store")]),e("li",null,[n("Click the "),e("em",null,"Settings"),n(" icon at the top right and select "),e("em",null,"Manage Apps")]),e("li",null,[n("Click the "),e("em",null,"Options"),n(" icon (3 vertical dots) on the TeamOne add-on card")]),e("li",null,[n("Uncheck "),e("em",null,"Use in this document")]),e("li",null,[n("Click the "),e("em",null,"Options"),n(" icon icon again and select "),e("em",null,"Use in this document")]),e("li",null,"Close the marketplace screen"),e("li",null,[n("Refresh the page and try "),e("em",null,"TEAMONE recalculate"),n(" on the sidebar functions tab")])],-1),x=e("h2",{id:"resultsetoutofmemory-auditlogmaxquerymemory-too-small",tabindex:"-1"},[n("ResultSetOutOfMemory: AuditLogMaxQueryMemory too small "),e("a",{class:"header-anchor",href:"#resultsetoutofmemory-auditlogmaxquerymemory-too-small","aria-hidden":"true"},"#")],-1),S=e("p",null,[n("If you are getting "),e("em",null,[e("strong",null,"ResultSetOutOfMemory: AuditLogMaxQueryMemory too small")]),n(" please make sure you have PA 2.0.9.17 or later")],-1),E=e("hr",null,null,-1),M=e("p",null,[n("Succeedium\xAE TeamOne 2023 | "),e("a",{href:"https://succeedium.com/teamone/privacy",target:"_blank",rel:"noopener noreferrer"},"Privacy Policy"),n(" | "),e("a",{href:"https://succeedium.com/teamone/terms",target:"_blank",rel:"noopener noreferrer"},"Terms Of Service")],-1),I=[a,u,c,d,m,h,g,p,f,_,y,w,k,b,T,O,v,x,S,E,M];function A(N,P,C,D,R,q){return i(),t("div",null,I)}var G=o(s,[["render",A]]);export{Y as __pageData,G as default};