import{_ as n,c as s,o as a,a as e,b as t}from"./app.71f8378b.js";import{_ as o}from"./teamone_new_tm1_task.79d79df5.js";var i="/teamone/img/teamone_new_tm1_connection.png",r="/teamone/img/teamone_new_tm1_view.png",d="/teamone/img/teamone_new_tm1_view_data.png";const U='{"title":"Getting started","description":"","frontmatter":{},"headers":[{"level":2,"title":"SSL configuration for your TM1 server","slug":"ssl-configuration-for-your-tm1-server"},{"level":2,"title":"TEAMONE configuration sheet","slug":"teamone-configuration-sheet"},{"level":2,"title":"Adding TM1 connections","slug":"adding-tm1-connections"},{"level":2,"title":"Adding TM1 tasks","slug":"adding-tm1-tasks"},{"level":2,"title":"Adding TM1 views","slug":"adding-tm1-views"}],"relativePath":"doc/configuration.md","lastUpdated":1633992680387}',l={},c=e("h1",{id:"getting-started",tabindex:"-1"},[t("Getting started "),e("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#")],-1),u=e("h2",{id:"ssl-configuration-for-your-tm1-server",tabindex:"-1"},[t("SSL configuration for your TM1 server "),e("a",{class:"header-anchor",href:"#ssl-configuration-for-your-tm1-server","aria-hidden":"true"},"#")],-1),m=e("p",null,"To prevent SSL warnings in your browser we recommend configuring custom SSL certificate for your TM1 server",-1),h=e("h2",{id:"teamone-configuration-sheet",tabindex:"-1"},[t("TEAMONE configuration sheet "),e("a",{class:"header-anchor",href:"#teamone-configuration-sheet","aria-hidden":"true"},"#")],-1),g=e("p",null,"TeamOne add-on stores all the settings on a sheet called TEAMONE. You can add your TM1 connections, tasks and views as static values or using Sheets formulas. The parameters are entered in column A and the values are in column B. You can also use # for comments.",-1),_=e("h2",{id:"adding-tm1-connections",tabindex:"-1"},[t("Adding TM1 connections "),e("a",{class:"header-anchor",href:"#adding-tm1-connections","aria-hidden":"true"},"#")],-1),f=e("p",null,[t("Add your first TM1 connection by using "),e("em",null,"TeamOne > Configuration > Add new TM1 connection"),t(" menu: "),e("img",{src:i,alt:"img"})],-1),p=e("p",null,"Then edit the default connection parameters:",-1),T=e("ul",null,[e("li",null,[t("change TeamOneTest to the desired connection "),e("strong",null,"name")]),e("li",null,[e("strong",null,"protocol"),t(" use "),e("em",null,"https"),t(" if useSSL=T in tm1s.cfg file, otherwise use "),e("em",null,"http")]),e("li",null,[e("strong",null,"host"),t(" specify your TM1 server host FQDN")]),e("li",null,[e("strong",null,"port"),t(" should be equal to HTTPPortNumber in tm1s.cfg file")]),e("li",null,[t("if using IntegratedSecurityMode 4 or 5 specify "),e("strong",null,"namespace"),t(' configured in Cognos Analytics (usually "LDAP")')]),e("li",null,[e("strong",null,"secret"),t(" is a base64 encoded username and password, the default one is for admin user")])],-1),v=e("h2",{id:"adding-tm1-tasks",tabindex:"-1"},[t("Adding TM1 tasks "),e("a",{class:"header-anchor",href:"#adding-tm1-tasks","aria-hidden":"true"},"#")],-1),w=e("p",null,"Tasks are shortcuts for TM1 TI procecesses with set parameters values. For instance, you can create a task to call your data load process and get a dynamic value for a period parameter calculated using Google Sheets\u2122 formulas.",-1),y=e("p",null,[t("Use "),e("em",null,"TeamOne > Configuration > Add new TM1 task"),t(" menu to add a sample task, then modify as needed: "),e("img",{src:o,alt:"img"})],-1),M=e("h2",{id:"adding-tm1-views",tabindex:"-1"},[t("Adding TM1 views "),e("a",{class:"header-anchor",href:"#adding-tm1-views","aria-hidden":"true"},"#")],-1),b=e("p",null,"TM1 views are MDX expressions used to query TM1 data. The data is loaded to the sheet specified in the settings.",-1),A=e("p",null,[t("Use "),e("em",null,"TeamOne > Configuration > Add new TM1 view"),t(" menu to add a sample view, then modify as needed: "),e("img",{src:r,alt:"img"})],-1),k=e("p",null,[t("Once you refresh the config, the new view will appear on the views tab and you will be able to execute it. TeamOne will fetch the data and print it on the specificed sheet name: "),e("img",{src:d,alt:"img"})],-1),S=e("hr",null,null,-1),x=e("p",null,[t("Succeedium\xAE TeamOne 2021 | "),e("a",{href:"https://succeedium.com/teamone/privacy",target:"_blank",rel:"noopener noreferrer"},"Privacy Policy"),t(" | "),e("a",{href:"https://succeedium.com/teamone/terms",target:"_blank",rel:"noopener noreferrer"},"Terms Of Service")],-1),O=[c,u,m,h,g,_,f,p,T,v,w,y,M,b,A,k,S,x];function E(N,L,P,$,B,C){return a(),s("div",null,O)}var j=n(l,[["render",E]]);export{U as __pageData,j as default};
