import{_ as a}from"./chunks/teamone_formula.bbed24ce.js";import{a as s,b as o,c as t,d as n,_ as r}from"./chunks/tm1datacompare_result.8d91f788.js";import{_ as l}from"./chunks/exploration.bd9cc679.js";import{_ as i,a as c}from"./chunks/process_screen.28006be8.js";import{_ as p,a as m}from"./chunks/code_prolog.229087f6.js";import{c as d,a as u,_ as g,b as h,d as y,e as b}from"./chunks/security_tracer.2f577f98.js";import{_ as f}from"./chunks/processes.726cc6a0.js";import{_ as E,a as _,b as F}from"./chunks/audit_log.77952132.js";import{_ as e,a as A}from"./chunks/processes.5e5d77dc.js";import{_ as P,o as v,c as k,Q as B}from"./chunks/framework.6e0d310a.js";const M="/teamone/img/tm1/TI_console.png",q="/teamone/img/functions/code_element_security_expressions.png",$=JSON.parse('{"title":"TeamOne feature list","description":"","frontmatter":{},"headers":[],"relativePath":"features.md","filePath":"features.md"}'),x={name:"features.md"},I=B('<h1 id="teamone-feature-list" tabindex="-1">TeamOne feature list <a class="header-anchor" href="#teamone-feature-list" aria-label="Permalink to &quot;TeamOne feature list&quot;">​</a></h1><p>On this page we tried to list the main TeamOne features and explain them briefly. Please refer to TeamOne <a href="./doc/">documentation</a> where you can find more information including live examples.</p><h2 id="querying-ibm-pa-data" tabindex="-1">Querying IBM PA data <a class="header-anchor" href="#querying-ibm-pa-data" aria-label="Permalink to &quot;Querying IBM PA data&quot;">​</a></h2><p>There are several ways how you can bring IBM PA data directly to Google Sheets:</p><ul><li><p><a href="./doc/functions.html#recalculate"><em><strong>=TEAMONE()</strong></em></a> formula - the easiest and fastest way to query IBM PA data with no technical skills, for instance you don&#39;t need to specify IBM PA dimension or hierarchy names, you don&#39;t have to specify even all the dimensions, one formula can be used to bring a whole slice of data: <img src="'+a+'" alt="img" data-zoomable=""></p></li><li><p><a href="./doc/tasks.html#tm1data"><em><strong>tm1data</strong></em></a> task. Use an existing cube view, custom MDX or specify directly dimensions/elements to export IBM PA data in one click: <img src="'+s+'" alt="img" data-zoomable=""></p></li><li><p><a href="./doc/explorer.html"><em><strong>TeamOne Explorer</strong></em></a>. Similarly to a cube viewer in IBM Planning Analytics Workspace, you can use the TeamOne sidebar UI to build IBM PA explorations and see the data directly in the sheets grid: <img src="'+l+'" alt="img"></p></li></ul><h2 id="writing-data-back-into-ibm-pa" tabindex="-1">Writing data back into IBM PA <a class="header-anchor" href="#writing-data-back-into-ibm-pa" aria-label="Permalink to &quot;Writing data back into IBM PA&quot;">​</a></h2><ul><li><a href="./doc/tasks.html#tm1import"><em><strong>tm1import</strong></em></a> task can be used to import Google Sheets data back into IBM PA: <img src="'+o+'" alt="img" data-zoomable=""></li></ul><h2 id="comparing-data" tabindex="-1">Comparing data <a class="header-anchor" href="#comparing-data" aria-label="Permalink to &quot;Comparing data&quot;">​</a></h2><ul><li><a href="./doc/tasks.html#tm1datacompare"><em><strong>tm1datacompare</strong></em></a> task allows comparing of an existing <a href="./doc/tasks.html#tm1data">tm1data</a> task query results (a cube view, MDX or specified dimension elements\\subset) in the same or different IBM Planning Analytics environment. <img src="'+t+'" alt="img" data-zoomable=""></li></ul><p>A good use case would be to see if there is any data discrepancy &quot;Before vs After&quot; a release deployment or to compare data between 2 cubes from the same or different environments: <img src="'+n+'" alt="img" data-zoomable=""></p><h2 id="ibm-pa-processes" tabindex="-1">IBM PA processes <a class="header-anchor" href="#ibm-pa-processes" aria-label="Permalink to &quot;IBM PA processes&quot;">​</a></h2><p>On the <em><strong>Processes</strong></em> tab of TeamOne sidebar you see IBM Planning Analytics processes in the selected IBM PA server: <img src="'+i+'" alt="img" data-zoomable=""></p><p>You can also:</p><ul><li>execute processes</li><li>rename or delete processes</li><li>compare code between 2 environments</li><li>deploy processes</li></ul><p>Use the <em>Target environment</em> dropdown to select the second environment. <img src="'+c+'" alt="img" data-zoomable=""></p><p>The processes can also be easily added as <a href="./doc/tasks.html#tm1process"><em><strong>tm1process</strong></em></a> tasks</p><h2 id="tm1process-task" tabindex="-1">tm1process task <a class="header-anchor" href="#tm1process-task" aria-label="Permalink to &quot;tm1process task&quot;">​</a></h2><p><a href="./doc/tasks.html#tm1process"><em><strong>tm1process</strong></em></a> task is used to run TI processes by specifying the process name, parameters and values directly in Google Sheets. By adding multiple tasks you to create one-click automations for different IBM Planning Analytics routines: <img src="'+r+'" alt="img" data-zoomable=""></p><h1 id="ibm-pa-no-code-development" tabindex="-1">IBM PA no code development <a class="header-anchor" href="#ibm-pa-no-code-development" aria-label="Permalink to &quot;IBM PA no code development&quot;">​</a></h1><p>You can create, update and localize IBM Planning Analytics <a href="./doc/functions.html#cube"><em><strong>cubes</strong></em></a>, <a href="./doc/functions.html#view"><em><strong>views</strong></em></a>, <a href="./doc/functions.html#dimension"><em><strong>dimensions, hierarchies, elements, attributes</strong></em></a> and <a href="./doc/functions.html#subset"><em><strong>subsets</strong></em></a> without single line of code. <img src="'+p+'" alt="img"></p><p>You can manipulate with subsets expressions using <a href="./doc/functions.html#mdx-mods"><em><strong>MDX mods</strong></em></a> instead of the actual MDX. For instance, compare this MDX expression:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span><span style="color:#B392F0;">FILTER</span><span style="color:#E1E4E8;">( {</span><span style="color:#B392F0;">TM1FILTERBYLEVEL</span><span style="color:#E1E4E8;">( {</span><span style="color:#FFAB70;">TM1DRILLDOWNMEMBER</span><span style="color:#E1E4E8;">( {[</span><span style="color:#FFAB70;">Period</span><span style="color:#E1E4E8;">].[</span><span style="color:#FFAB70;">Period</span><span style="color:#E1E4E8;">].[</span><span style="color:#FFAB70;">FY2022</span><span style="color:#E1E4E8;">],[</span><span style="color:#FFAB70;">Period</span><span style="color:#E1E4E8;">].[</span><span style="color:#FFAB70;">Period</span><span style="color:#E1E4E8;">].[</span><span style="color:#FFAB70;">FY2023</span><span style="color:#E1E4E8;">]}, </span><span style="color:#FFAB70;">ALL</span><span style="color:#E1E4E8;"> )}, 0 )}, [Period].[Period].[quarter] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Q3&quot;</span><span style="color:#E1E4E8;"> )}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span><span style="color:#6F42C1;">FILTER</span><span style="color:#24292E;">( {</span><span style="color:#6F42C1;">TM1FILTERBYLEVEL</span><span style="color:#24292E;">( {</span><span style="color:#E36209;">TM1DRILLDOWNMEMBER</span><span style="color:#24292E;">( {[</span><span style="color:#E36209;">Period</span><span style="color:#24292E;">].[</span><span style="color:#E36209;">Period</span><span style="color:#24292E;">].[</span><span style="color:#E36209;">FY2022</span><span style="color:#24292E;">],[</span><span style="color:#E36209;">Period</span><span style="color:#24292E;">].[</span><span style="color:#E36209;">Period</span><span style="color:#24292E;">].[</span><span style="color:#E36209;">FY2023</span><span style="color:#24292E;">]}, </span><span style="color:#E36209;">ALL</span><span style="color:#24292E;"> )}, 0 )}, [Period].[Period].[quarter] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Q3&quot;</span><span style="color:#24292E;"> )}</span></span></code></pre></div><p>to the equivalent expression using MDX mods:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">FY2022</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">FY2023</span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;">expand</span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;">level</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;">quarter</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">Q3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">FY2022</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">FY2023</span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;">expand</span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;">level</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;">quarter</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">Q3</span></span></code></pre></div><p>wildcard expressions are supported as well:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">FY20</span><span style="color:#F97583;">*&gt;&gt;</span><span style="color:#E1E4E8;">descendants</span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;">level</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;">status</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">OP</span><span style="color:#F97583;">?</span><span style="color:#79B8FF;">N</span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;">first</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">5</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">FY20</span><span style="color:#D73A49;">*&gt;&gt;</span><span style="color:#24292E;">descendants</span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;">level</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;">status</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">OP</span><span style="color:#D73A49;">?</span><span style="color:#005CC5;">N</span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;">first</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">5</span></span></code></pre></div><h2 id="ibm-planning-analytics-code" tabindex="-1">IBM Planning Analytics code <a class="header-anchor" href="#ibm-planning-analytics-code" aria-label="Permalink to &quot;IBM Planning Analytics code&quot;">​</a></h2><p>And you can even write and execute TI code directly in Google Sheets. You can use multiple <a href="./doc/functions.html#code-prolog"><em><strong>prolog</strong></em></a>, <a href="./doc/functions.html#code-epilog"><em><strong>epilog</strong></em></a> and <a href="./doc/functions.html#comments"><em><strong>comment</strong></em></a> blocks <img src="'+m+'" alt="img" data-zoomable=""></p><p>Or you can use the built-in TM1 console: <img src="'+M+'" alt="img" data-zoomable=""></p><h2 id="user-and-group-management" tabindex="-1">User and group management <a class="header-anchor" href="#user-and-group-management" aria-label="Permalink to &quot;User and group management&quot;">​</a></h2><p>You can manage all your users and groups on a single sheet and TeamOne can sync it automatically with IBM PA server: <img src="'+d+'" alt="img" data-zoomable=""></p><p>For existing models TeamOne can genegate such <a href="./doc/users.html#security-sheet"><em><strong>security sheet</strong></em></a> for you and populate it with the existing users and groups.</p><p>Or you can edit users manually: <img src="'+u+'" alt="img" data-zoomable=""></p><p>You can see who is online, disable, enable, log off and delete users: <img src="'+g+'" alt="img" data-zoomable=""></p><p>You can even copy security groups between users: <img src="'+h+'" alt="img" data-zoomable=""></p><p>Use integrated <a href="./doc/users.html#tm1-top"><em><strong>TM1 top</strong></em></a> console to see what exactly is happening and cancel user session threads: <img src="'+y+'" alt="img" data-zoomable=""></p><h2 id="object-security" tabindex="-1">Object security <a class="header-anchor" href="#object-security" aria-label="Permalink to &quot;Object security&quot;">​</a></h2><p>You can define/document object security directly in Sheets, including <a href="./doc/functions.html#cube-security"><em><strong>cube security</strong></em></a>, <a href="./doc/functions.html#dimension-security"><em><strong>dimension security</strong></em></a>, <a href="./doc/functions.html#element-security"><em><strong>element security</strong></em></a>, <a href="./doc/functions.html#application-security"><em><strong>application security</strong></em></a>, <a href="./doc/functions.html#process-security"><em><strong>process security</strong></em></a>.</p><p>You can define IBM Planning Analytics objects on the rows and security groups on the columns. You can use one object per row or comma delimited list, or wildcard expression or MDX mods or real MDX or even mix all together: <img src="'+q+'" alt="img" data-zoomable=""></p><h2 id="search-ibm-pa-model" tabindex="-1">Search IBM PA model <a class="header-anchor" href="#search-ibm-pa-model" aria-label="Permalink to &quot;Search IBM PA model&quot;">​</a></h2><p>You can open <a href="./doc/search.html#searching"><em><strong>Model search</strong></em></a> screen from the main menu to search across cubes, processes and chores:</p><p><img src="'+f+'" alt="img" data-zoomable=""></p><h2 id="message-log" tabindex="-1">Message log <a class="header-anchor" href="#message-log" aria-label="Permalink to &quot;Message log&quot;">​</a></h2><p>On the <em><strong>Logs</strong></em> tab you can see and search IBM PA server message log. Use the filter button to filter the records by date or containing some keywords:</p><p><img src="'+E+'" alt="img" data-zoomable=""></p><h2 id="transaction-log" tabindex="-1">Transaction log <a class="header-anchor" href="#transaction-log" aria-label="Permalink to &quot;Transaction log&quot;">​</a></h2><p>Available to ADMIN users from the sidebar menu, using the <em><strong>Transaction Log</strong></em> viewer you can see and search IBM PA server transaction records. Use the query button to filter the records by cube, user, elements and time period:</p><p><img src="'+_+'" alt="img" data-zoomable=""></p><h2 id="audit-log" tabindex="-1">Audit log <a class="header-anchor" href="#audit-log" aria-label="Permalink to &quot;Audit log&quot;">​</a></h2><p>Available to ADMIN users from the sidebar menu, using the <em><strong>Audit Log</strong></em> viewer you can see and search IBM PA server audit records. Use the query button to filter the records by user, object type, description and time period:</p><p><img src="'+F+'" alt="img" data-zoomable=""></p><h2 id="security-tracer" tabindex="-1">Security tracer <a class="header-anchor" href="#security-tracer" aria-label="Permalink to &quot;Security tracer&quot;">​</a></h2><p>Using TeamOne <strong>Security tracer</strong> you can quickly and easily troubleshoot users access and instantly get the full picture of the selected cube, dimension, hierarchy, element and data security. Simply select a user and a cube cell and TeamOne will show and explain the user&#39;s security level.</p><p><img src="'+b+'" alt="img"></p><h2 id="compare-models" tabindex="-1">Compare models <a class="header-anchor" href="#compare-models" aria-label="Permalink to &quot;Compare models&quot;">​</a></h2><p>Using <a href="./doc/compare.html"><em><strong>Model compare</strong></em></a> screen can compare 2 IBM PA servers sides by side: <img src="'+e+'" alt="img" data-zoomable=""></p><p>and see the exact difference for model for processes, chores, rules and views:</p><p><img src="'+A+'" alt="img" data-zoomable=""></p><h2 id="deployments" tabindex="-1">Deployments <a class="header-anchor" href="#deployments" aria-label="Permalink to &quot;Deployments&quot;">​</a></h2><p>You can select and promote multiple objects between the environments in both directions:</p><p><img src="'+e+'" alt="img" data-zoomable=""></p>',61),w=[I];function T(C,D,O,z,Y,L){return v(),k("div",null,w)}const J=P(x,[["render",T]]);export{$ as __pageData,J as default};
