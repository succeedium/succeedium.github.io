import{o as e,c as n,a as t,b as a}from"./app.d980ed31.js";import{_ as s}from"./teamone_new_tm1_task.79d79df5.js";const i='{"title":"Getting started","description":"","frontmatter":{},"headers":[{"level":2,"title":"TEAMONE configuration sheet","slug":"teamone-configuration-sheet"},{"level":2,"title":"Adding TM1 connections","slug":"adding-tm1-connections"},{"level":2,"title":"Adding TM1 tasks","slug":"adding-tm1-tasks"},{"level":2,"title":"Adding TM1 views","slug":"adding-tm1-views"}],"relativePath":"doc/configuration.md","lastUpdated":1626992511366}',o={},l=t("h1",{id:"getting-started"},[t("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#"),a(" Getting started")],-1),r=t("h2",{id:"teamone-configuration-sheet"},[t("a",{class:"header-anchor",href:"#teamone-configuration-sheet","aria-hidden":"true"},"#"),a(" TEAMONE configuration sheet")],-1),d=t("p",null,"TeamOne add-on stores all the settings on a sheet called TEAMONE. You can add your TM1 connections, tasks and views as static values or using Sheets formulas. The parameters are entered in column A and the values are in column B. You can also use # for comments.",-1),u=t("h2",{id:"adding-tm1-connections"},[t("a",{class:"header-anchor",href:"#adding-tm1-connections","aria-hidden":"true"},"#"),a(" Adding TM1 connections")],-1),c=t("p",null,[a("Add your first TM1 connection by using "),t("em",null,"TeamOne > Configuration > Add new TM1 connection"),a(" menu: "),t("img",{src:"/teamone/img/teamone_new_tm1_connection.png",alt:"img"})],-1),m=t("p",null,"Then edit the default connection parameters:",-1),g=t("ul",null,[t("li",null,[a("change TeamOneTest to the desired connection "),t("strong",null,"name")]),t("li",null,[t("strong",null,"protocol"),a(" use "),t("em",null,"https"),a(" if useSSL=T in tm1s.cfg file, otherwise use "),t("em",null,"http")]),t("li",null,[t("strong",null,"host"),a(" specify your TM1 server host FQDN")]),t("li",null,[t("strong",null,"port"),a(" should be equal to HTTPPortNumber in tm1s.cfg file")]),t("li",null,[a("if using IntegratedSecurityMode 4 or 5 specify "),t("strong",null,"namespace"),a(' configured in Cognos Analytics (usually "LDAP")')]),t("li",null,[t("strong",null,"secret"),a(" is a base64 encoded username and password, the default one is for admin user")])],-1),h=t("h2",{id:"adding-tm1-tasks"},[t("a",{class:"header-anchor",href:"#adding-tm1-tasks","aria-hidden":"true"},"#"),a(" Adding TM1 tasks")],-1),f=t("p",null,"Tasks are shortcuts for TM1 TI procecesses with set parameters values. For instance, you can create a task to call your data load process and get a dynamic value for a period parameter calculated using Google Sheets™ formulas.",-1),p=t("p",null,[a("Use "),t("em",null,"TeamOne > Configuration > Add new TM1 task"),a(" menu to add a sample task, then modify as needed: "),t("img",{src:s,alt:"img"})],-1),T=t("h2",{id:"adding-tm1-views"},[t("a",{class:"header-anchor",href:"#adding-tm1-views","aria-hidden":"true"},"#"),a(" Adding TM1 views")],-1),v=t("p",null,"TM1 views are MDX expressions used to query TM1 data. The data is loaded to the sheet specified in the settings.",-1),w=t("p",null,[a("Use "),t("em",null,"TeamOne > Configuration > Add new TM1 view"),a(" menu to add a sample view, then modify as needed: "),t("img",{src:"/teamone/img/teamone_new_tm1_view.png",alt:"img"})],-1),y=t("p",null,[a("Once you refresh the config, the new view will appear on the views tab and you will be able to execute it. TeamOne will fetch the data and print it on the specificed sheet name: "),t("img",{src:"/teamone/img/teamone_new_tm1_view_data.png",alt:"img"})],-1),M=t("hr",null,null,-1),A=t("p",null,[a("Succeedium® TeamOne 2021 | "),t("a",{href:"https://succeedium.com/teamone/privacy",target:"_blank",rel:"noopener noreferrer"},"Privacy Policy"),a(" | "),t("a",{href:"https://succeedium.com/teamone/terms",target:"_blank",rel:"noopener noreferrer"},"Terms Of Service")],-1);o.render=function(t,a,s,i,o,_){return e(),n("div",null,[l,r,d,u,c,m,g,h,f,p,T,v,w,y,M,A])};export default o;export{i as __pageData};