import{_ as n,c as s,o,a as e,b as t}from"./app.d5195c53.js";import{_ as a}from"./teamone_sheet.a9f2d700.js";var i="/teamone/img/tasks/configuration_task.png",l="/teamone/img/tasks/tm1process.png",r="/teamone/img/tasks/tm1env_configuration.png",u="/teamone/img/tasks/tm1env.png",d="/teamone/img/tasks/tm1data.png",m="/teamone/img/tasks/tm1data_result.png",c="/teamone/img/tasks/tm1import.png",h="/teamone/img/tasks/tm1import_option1.png",p="/teamone/img/tasks/tm1import_option2.png",f="/teamone/img/tasks/tm1fileoutput.png",g="/teamone/img/tasks/tm1datacompare.png",_="/teamone/img/tasks/tm1datacompare_result.png";const Ye='{"title":"Tasks","description":"","frontmatter":{},"headers":[{"level":2,"title":"::tm1env","slug":"tm1env"},{"level":2,"title":"::tm1process","slug":"tm1process"},{"level":2,"title":"::tm1data","slug":"tm1data"},{"level":2,"title":"::tm1import","slug":"tm1import"},{"level":2,"title":"::tm1fileoutput","slug":"tm1fileoutput"},{"level":2,"title":"::tm1datacompare","slug":"tm1datacompare"}],"relativePath":"doc/tasks.md","lastUpdated":1647736108064}',y={},b=e("h1",{id:"tasks",tabindex:"-1"},[t("Tasks "),e("a",{class:"header-anchor",href:"#tasks","aria-hidden":"true"},"#")],-1),v=e("p",null,[t("Tasks allow you to create one-click automations for different TM1 routines: running TI processes, import TM1, export TM1 data, etc. (more automations are coming in the future). You can create tasks using "),e("a",{href:"./#teamone-configuration"},"configuration"),t(" menu or "),e("a",{href:"./#teamone-sheet"},"TEAMONE sheet")],-1),k=e("p",null,[e("img",{src:i,alt:"img"})],-1),w=e("p",null,[t("For each task you define a "),e("em",null,[e("strong",null,"::tasktype")]),t(" in column A and "),e("em",null,[e("strong",null,"task name")]),t(" in column B.")],-1),x=e("p",null,[e("img",{src:a,alt:"img"})],-1),T=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,[t("Start creating tasks using the "),e("a",{href:"./#teamone-configuration"},"configuration"),t(" menu, then click the "),e("em",null,"MOVE TO TEAMONE SHEET"),t(" button and finish customizing the task on "),e("em",null,[e("strong",null,"TEAMONE")]),t(" sheet")]),e("p",null,[t("You can use Sheets formulas to make tasks dynamic. A common example would be to use "),e("em",null,"=YEAR(TODAY())"),t(" formula to get the current calendar year and use it as a parameter for TM1 process task. Or you can simply reference other cells to build dynamic strings")])],-1),I=e("p",null,[t("To execute a task you simply click it in "),e("em",null,[e("strong",null,"TeamOne")]),t(" sidebar: "),e("img",{src:l,alt:"img"})],-1),O=e("h2",{id:"tm1env",tabindex:"-1"},[t("::tm1env "),e("a",{class:"header-anchor",href:"#tm1env","aria-hidden":"true"},"#")],-1),S=e("p",null,[t("You will need to configure at least one "),e("strong",null,"::tm1env"),t(" (TM1 environment connection) to connect to your TM1 server. Since you will need to enter your TM1 credentials, there are a few things to consider:")],-1),M=e("ul",null,[e("li",null,[t("Use "),e("em",null,"Configuration > My Settings"),t(" if you want to make the connection private and/or shared for multiple sheets documents where you use the "),e("em",null,[e("strong",null,"TeamOne")]),t(" add-on in")]),e("li",null,[t("Use "),e("em",null,"Configuration > Global Settings"),t(" if you want to make the connection hidden from non-admin TeamOne users (see "),e("a",{href:"./#security"},"TeamOne security"),t(" for more info). This way the users will see the configured TM1 connection, but will not be able to see the connection details")]),e("li",null,[t("Add "),e("strong",null,"::tm1env"),t(" definition to "),e("em",null,[e("strong",null,"TEAMONE")]),t(" sheet if you already secured access to the document and you don't mind other users to see your connection details")]),e("li",null,[t("You can leverage "),e("a",{href:"./#merged-settings"},"Merged Settings"),t(" to keep your credentials private and make other connection details visible to other users.")])],-1),D=e("table",null,[e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Option / parameter"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",{style:{"text-align":"left"}},"-protocol"),e("td",null,[t("You can omit it if you have useSSL=T in tm1s.cfg file, otherwise specify "),e("em",null,"http")])]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-host"),e("td",null,"Specify your TM1 server host FQDN. This parameter is mandatory")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-port"),e("td",null,"Should be equal to HTTPPortNumber in tm1s.cfg file. This parameter is mandatory")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-namespace"),e("td",null,[t("If using IntegratedSecurityMode 4 or 5 specify "),e("strong",null,"namespace"),t(' configured in Cognos Analytics (usually "LDAP")')])]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-secret"),e("td",null,[t("This is a base64 encoded username and password. Use "),e("em",null,"Extensions > TeamOne > Tools > Secret maker"),t(" menu to create your own one. This parameter is mandatory")])]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-securitySheet"),e("td",null,[t("Specify a sheet name where you want to manage your users and their security groups. If presented, "),e("em",null,"Sync security from sheet"),t(" option will become available in "),e("em",null,"TeamOne Sidebar menu"),t(". See more info on "),e("a",{href:"./users.html#security-sheet"},"security sheet")])]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-startRow"),e("td",null,"Indicates the first data row in securitySheet. If omitted the default value 1 will be used")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-startColumn"),e("td",null,"Indicates the first data column in securitySheet. If omitted the default value 1 will be used")])])],-1),E=e("p",null,[t("Adding "),e("em",null,"::tm1env"),t(" in "),e("em",null,"TeamOne Configuration"),t(":")],-1),N=e("p",null,[e("img",{src:r,alt:"img"})],-1),A=e("p",null,[t("The same "),e("em",null,"::tm1env"),t(" definition on "),e("em",null,"TEAMONE"),t(" sheet:")],-1),C=e("p",null,[e("img",{src:u,alt:"img"})],-1),P=e("h2",{id:"tm1process",tabindex:"-1"},[t("::tm1process "),e("a",{class:"header-anchor",href:"#tm1process","aria-hidden":"true"},"#")],-1),V=e("p",null,[e("strong",null,"::tm1process"),t(" task is used to run TI processes. See the table below how to specify the process name and parameters:")],-1),Y=e("table",null,[e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Option / parameter"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",{style:{"text-align":"left"}},"-name"),e("td",null,"Used to provide a TI process name. If omitted the task name will be used")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-tm1env"),e("td",null,[t("Indicates to run the process always in the specified environment, should match one of the defined "),e("em",null,"::tm1env"),t(". If omitted the process will run in the selected environment in "),e("em",null,"TeamOne sidebar")])]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-info"),e("td",null,"A task hint, will be displayed when hovering a mouse cursor over info icon next to the task name")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"parameter 1-N"),e("td",null,[t("On each line enter a parameter name in "),e("em",null,"column A"),t(" and a parameter value in "),e("em",null,"column B"),t(". For any omitted parameter its default process value will be used")])])])],-1),L=e("p",null,[t("To execute a task you simply click it in "),e("em",null,"TeamOne sidebar"),t(". When the process is completed you will see a message in the sidebar log panel confirming the execution status.")],-1),R=e("p",null,[e("img",{src:l,alt:"img"})],-1),B=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,[t("You can generate "),e("em",null,"::tm1process"),t(" task from the "),e("a",{href:"./processes.html#process-task"},"sidebar process menu"),t(", which will add the process name and all the parameters automatically")])],-1),F=e("p",null,[t("See "),e("a",{href:"https://docs.google.com/spreadsheets/d/1wOI8onSk2GoOoVzSDh_EPbZj5pN5iQPPK62cDV3sr7k/edit#gid=858904422",target:"_blank",rel:"noopener noreferrer"},"::tm1process example")],-1),j=e("h2",{id:"tm1data",tabindex:"-1"},[t("::tm1data "),e("a",{class:"header-anchor",href:"#tm1data","aria-hidden":"true"},"#")],-1),Q=e("p",null,[e("strong",null,"::tm1data"),t(" task allows to query TM1 data using an existing view, MDX or specified dimension elements\\subset. The query result will be printed on the specified sheet.")],-1),X=e("table",null,[e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Option / parameter"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",{style:{"text-align":"left"}},"-tm1env"),e("td",null,"Indicates to extract data in the specified environment. If omitted the currently selected environment will be used")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-info"),e("td",null,"A task hint, will be displayed when hovering a mouse cursor over info icon next to the task name")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-sheet"),e("td",null,"Sheet name to output the data to")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-activate"),e("td",null,"If provided, it will switch to the specified sheet automatically once the data is printed")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-cube"),e("td",null,[t("Cube name, should be used with "),e("em",null,"-view"),t(" or "),e("em",null,"dimension definitions"),t(" (see below)")])]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-view"),e("td",null,[t("An existing cube view to fetch the data from. "),e("em",null,"-cube"),t(" option must be also provided")])]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-mdx"),e("td",null,[t("MDX expression to query TM1 data. MDX will be used only if "),e("em",null,"-view"),t(" option is not provided")])]),e("tr",null,[e("td",{style:{"text-align":"left"}},"Dimension 1-N"),e("td",null,[t("Enter a dimension name in "),e("em",null,"column A"),t(", elements\\subset\\mdx in "),e("em",null,"column B"),t(" (see below for syntax). "),e("em",null,"-cube"),t(" option must be also provided. Dimensions/elements will be used only if "),e("em",null,"-view"),t(" and "),e("em",null,"-mdx"),t(" options are not provided")])])])],-1),U=e("p",null,[t("In "),e("em",null,"column B"),t(" for each dimension (entered in "),e("em",null,"Column A"),t(") you can define a subset or MDX expressions as:")],-1),q=e("ul",null,[e("li",null,[t("a comma delimited element list, i.e.: "),e("em",null,"Actual,Budget, Forecast")]),e("li",null,[t("an existing subset name in a format "),e("strong",null,"@SubsetName")]),e("li",null,[e("em",null,"@ALL, @LEAVES and @ROOTS"),t(" system subsets. TeamOne will create a system subset if it does not exist using the next MDX expressions: "),e("ul",null,[e("li",null,[e("strong",null,"ALL"),t(": {HIERARCHIZE({[dimensionName].members})}")]),e("li",null,[e("strong",null,"LEAVES"),t(": {TM1FILTERBYLEVEL( {[dimensionName].members}, 0)}")]),e("li",null,[e("strong",null,"ROOTS"),t(': {FILTER( {[dimensionName].members}, [dimensionName].CurrentMember.Parent.Name = "")}')])])]),e("li",null,[t("a valid MDX expression, i.e.: "),e("em",null,"{[Calendar]}.[2022].Children}")]),e("li",null,[t('a pattern using "*" for any characters and "?" for any one character, i.e.: '),e("em",null,"/*substring*/"),t(" or "),e("em",null,"/2022 Q?/"),t(" You can also combine elements, patterns and MDX expressions into a comma delimited list, i.e.: "),e("em",null,"Current period,Previous period,{[Calendar]}.[2022].Children,/2022 Q?/"),t(" If you leave Column B value empty, the default dimension member will be used")])],-1),z=e("p",null,[e("img",{src:d,alt:"img"})],-1),G=e("p",null,[t("The data is printed on the specified "),e("em",null,"-sheet"),t(": "),e("img",{src:m,alt:"img"})],-1),Z=e("p",null,[t("See "),e("a",{href:"https://docs.google.com/spreadsheets/d/1wOI8onSk2GoOoVzSDh_EPbZj5pN5iQPPK62cDV3sr7k/edit#gid=858904422",target:"_blank",rel:"noopener noreferrer"},"::tm1data example")],-1),K=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,[t("You can generate "),e("em",null,"::tm1data"),t(" task from the model tab "),e("a",{href:"./model.html#cube-node"},"cube"),t(" or "),e("a",{href:"./model.html#view-node"},"view"),t(" menu")])],-1),H=e("h2",{id:"tm1import",tabindex:"-1"},[t("::tm1import "),e("a",{class:"header-anchor",href:"#tm1import","aria-hidden":"true"},"#")],-1),$=e("p",null,[e("strong",null,"::tm1import"),t(" task is used to import data from a sheet into a TM1 cube.")],-1),W=e("table",null,[e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Option / parameter"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",{style:{"text-align":"left"}},"-tm1env"),e("td",null,"Indicates the environment to use. If omitted the currently selected environment will be used")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-info"),e("td",null,"A task hint, will be displayed when hovering a mouse cursor over info icon next to the task name")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-cube"),e("td",null,"TM1 cube name to import the data into")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-sheet"),e("td",null,"Sheet name containing the data")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-startRow"),e("td",null,"Indicates the first data row. If omitted the default value 1 will be used")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-startColumn"),e("td",null,"Indicates the first data column. If omitted the default value 1 will be used")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-skipBlank"),e("td",null,"Indicates to skip empty cells")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-checkIfUpdatable"),e("td",null,"Indicates to skip rule calculated cells")])])],-1),J=e("p",null,[e("img",{src:c,alt:"img"})],-1),ee=e("p",null,[e("strong",null,"There are several data requirements, depending on how your data is structured:")],-1),te=e("p",null,[e("em",null,[e("strong",null,"Option 1: each column represents a cube dimension, the last column contains values")])],-1),le=e("ol",null,[e("li",null,[t("The column order should match the cube dimensions: "),e("em",null,"Column 1 = Dimension 1, Column 2 = Dimension 2, ... Column N = Measure dimension, Column N+1 = Value")]),e("li",null,[t("The last column header is "),e("em",null,[e("strong",null,"Value")])])],-1),ne=e("p",null,[e("img",{src:h,alt:"img"})],-1),se=e("p",null,[e("em",null,[e("strong",null,"Option 2: a separate column is used for each measure dimension element")])],-1),oe=e("ol",null,[e("li",null,[t("The column order should match the cube dimensions: "),e("em",null,"Column 1 = Dimension 1, Column 2 = Dimension 2, ... Column N = Measure dimension")]),e("li",null,"A separate column should be used for each measure dimension element")],-1),ae=e("p",null,[e("img",{src:p,alt:"img"})],-1),ie=e("p",null,'For both options you can use both principal element names and aliases and the entered data should match the data types of the measure dimension elements TeamOne will automatically detect which option to use, based on the cube dimension count and the "Value" column header',-1),re=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,[e("em",null,[e("strong",null,"Option 1")]),t(" can be used directly with the data fetched by a "),e("em",null,"::tm1data"),t(" task, meaning you can have a 2 way data transfer using "),e("em",null,"::tm1data"),t(" and "),e("em",null,"::tm1import"),t(" tasks.")])],-1),ue=e("p",null,[t("See "),e("a",{href:"https://docs.google.com/spreadsheets/d/1wOI8onSk2GoOoVzSDh_EPbZj5pN5iQPPK62cDV3sr7k/edit#gid=858904422",target:"_blank",rel:"noopener noreferrer"},"::tm1import example")],-1),de=e("h2",{id:"tm1fileoutput",tabindex:"-1"},[t("::tm1fileoutput "),e("a",{class:"header-anchor",href:"#tm1fileoutput","aria-hidden":"true"},"#")],-1),me=e("p",null,[e("strong",null,"::tm1fileoutput"),t(" task allows to export sheet data into a field delimited file on TM1 server. It is very handy, when you have a TI process with a complex validation or transformation logics and you just want to use the sheets data export as the TI process data source.")],-1),ce=e("table",null,[e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Option / parameter"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",{style:{"text-align":"left"}},"-tm1env"),e("td",null,"Indicates the environment to use. If omitted the currently selected environment will be used")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-info"),e("td",null,"A task hint, will be displayed when hovering a mouse cursor over info icon next to the task name")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-sheet"),e("td",null,"Sheet name containing the data")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-startRow"),e("td",null,"Indicates the first data row. If omitted the default value 1 will be used")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-startColumn"),e("td",null,"Indicates the first data column. If omitted the default value 1 will be used")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-rows"),e("td",null,"Number of rows to export. If ommited or 0, all data rows will be used")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-columns"),e("td",null,"Number of columns to export. If ommited or 0, all data columns will be used")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-file"),e("td",null,[t("File path on TM1 server. You can specify a relative path to the TM1 data directory, for instance "),e("em",null,[e("strong",null,"..\\FileName.txt")]),t(" will save "),e("em",null,"FileName.txt"),t(" one level folder up")])]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-delimiter"),e("td",null,"file field delimiter, if omitted a tab character will be used")])])],-1),he=e("p",null,[e("img",{src:f,alt:"img"})],-1),pe=e("p",null,[t("See "),e("a",{href:"https://docs.google.com/spreadsheets/d/1wOI8onSk2GoOoVzSDh_EPbZj5pN5iQPPK62cDV3sr7k/edit#gid=858904422",target:"_blank",rel:"noopener noreferrer"},"::tm1fileoutput example")],-1),fe=e("h2",{id:"tm1datacompare",tabindex:"-1"},[t("::tm1datacompare "),e("a",{class:"header-anchor",href:"#tm1datacompare","aria-hidden":"true"},"#")],-1),ge=e("p",null,[e("strong",null,"::tm1datacompare"),t(" task allows comparing of an existing "),e("a",{href:"./#tm1data"},"tm1data"),t(" task query results (a TM1 view, MDX or specified dimension elements\\subset) in the same or different tm1 environment.")],-1),_e=e("table",null,[e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Option / parameter"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",{style:{"text-align":"left"}},"-tm1env"),e("td",null,"Indicates the environment to extract data from. If omitted the currently selected environment will be used")]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-tm1data"),e("td",null,[e("a",{href:"./#tm1data"},"tm1data"),t(" task name (should be defined separately). You should run that task to get the initial data extract")])]),e("tr",null,[e("td",{style:{"text-align":"left"}},"-activate"),e("td",null,[t("If provided, it will automatically switch to the sheet specified in the "),e("em",null,[e("strong",null,"tm1data")]),t(" task once the comparison is completed")])])])],-1),ye=e("p",null,[e("img",{src:g,alt:"img"})],-1),be=e("p",null,[t("First you should run the corresponding "),e("em",null,"::tm1data"),t(" task to get the initial data results. "),e("strong",null,"::tm1datacompare"),t(" task will execute "),e("em",null,"::tm1data"),t(" task again but this time it will compare the current and previous results and will show the difference in the last column:")],-1),ve=e("p",null,[e("img",{src:_,alt:"img"})],-1),ke=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"Compare TM1 data before and after deployments"),e("p",null,[t("Run a "),e("em",null,"::tm1data"),t(" task before you start deploying any changes. Run "),e("em",null,"::tm1datacompare"),t(" task after the deployment is completed. Compare the difference on the sheet specified in "),e("em",null,"-sheet"),t(" option of the "),e("em",null,"::tm1data"),t(" task.")])],-1),we=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"Compare TM1 data between different TM1 models"),e("p",null,[t("Use "),e("em",null,"-tm1env"),t(" task option to specify your target environment.")])],-1),xe=e("p",null,[t("See "),e("a",{href:"https://docs.google.com/spreadsheets/d/1wOI8onSk2GoOoVzSDh_EPbZj5pN5iQPPK62cDV3sr7k/edit#gid=951520795",target:"_blank",rel:"noopener noreferrer"},"::tm1datacompare example")],-1),Te=e("hr",null,null,-1),Ie=e("p",null,[t("Succeedium\xAE TeamOne 2022 | "),e("a",{href:"https://succeedium.com/teamone/privacy",target:"_blank",rel:"noopener noreferrer"},"Privacy Policy"),t(" | "),e("a",{href:"https://succeedium.com/teamone/terms",target:"_blank",rel:"noopener noreferrer"},"Terms Of Service")],-1),Oe=[b,v,k,w,x,T,I,O,S,M,D,E,N,A,C,P,V,Y,L,R,B,F,j,Q,X,U,q,z,G,Z,K,H,$,W,J,ee,te,le,ne,se,oe,ae,ie,re,ue,de,me,ce,he,pe,fe,ge,_e,ye,be,ve,ke,we,xe,Te,Ie];function Se(Me,De,Ee,Ne,Ae,Ce){return o(),s("div",null,Oe)}var Le=n(y,[["render",Se]]);export{Ye as __pageData,Le as default};
