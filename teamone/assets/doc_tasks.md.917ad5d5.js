import{_ as e}from"./chunks/teamone_sheet.23b211e8.js";import{_ as t,a,b as o,c as s,d as i}from"./chunks/tm1datacompare_result.8d91f788.js";import{_ as n,o as r,c as l,Q as m}from"./chunks/framework.6e0d310a.js";const d="/teamone/img/tasks/configuration_task.png",c="/teamone/img/tasks/tm1env_configuration.png",u="/teamone/img/tasks/tm1env.png",p="/teamone/img/tasks/tm1data_result.png",h="/teamone/img/tasks/tm1import_option1.png",g="/teamone/img/tasks/tm1import_option2.png",f="/teamone/img/tasks/tm1fileoutput.png",P=JSON.parse('{"title":"Tasks","description":"","frontmatter":{},"headers":[],"relativePath":"doc/tasks.md","filePath":"doc/tasks.md"}'),b={name:"doc/tasks.md"},y=m('<h1 id="tasks" tabindex="-1">Tasks <a class="header-anchor" href="#tasks" aria-label="Permalink to &quot;Tasks&quot;">​</a></h1><p>Tasks allow you to create one-click automations for different TM1 routines: running TI processes, import TM1, export TM1 data, etc. (more automations are coming in the future). You can create tasks using <a href="./#teamone-configuration">configuration</a> menu or <a href="./#teamone-sheet">TEAMONE sheet</a></p><p><img src="'+d+'" alt="img" data-zoomable=""></p><p>For each task you define a <em><strong>::tasktype</strong></em> in column A and <em><strong>task name</strong></em> in column B.</p><p><img src="'+e+'" alt="img" data-zoomable=""></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Start creating tasks using the <a href="./#teamone-configuration">configuration</a> menu, then click the <em>MOVE TO TEAMONE SHEET</em> button and finish customizing the task on <em><strong>TEAMONE</strong></em> sheet</p><p>You can use Sheets formulas to make tasks dynamic. A common example would be to use <em>=YEAR(TODAY())</em> formula to get the current calendar year and use it as a parameter for TM1 process task. Or you can simply reference other cells to build dynamic strings</p></div><p>To execute a task you simply click it in <em><strong>TeamOne</strong></em> sidebar: <img src="'+t+'" alt="img" data-zoomable=""></p><h2 id="tm1env" tabindex="-1">::tm1env <a class="header-anchor" href="#tm1env" aria-label="Permalink to &quot;::tm1env&quot;">​</a></h2><p>You will need to configure at least one <strong>::tm1env</strong> (IBM PA environment connection) to connect to your TM1 server. Depending on who should be able to use the connection you can save it in:</p><ul><li><em>Configuration &gt; My Settings</em> if you want to make the connection private to you and shared across all Soogle Sheets documents where you use <em><strong>TeamOne</strong></em> add-on</li><li><em>Configuration &gt; Document Settings</em> if you want to make the connection shared with all the users of a given Google Sheets document. You can also use <a href="./#security">TeamOne security</a> to specify who can use the connection (without being able to see the connection details) or who should have admin rights to manage the connections</li><li><em>Configuration &gt; Domain Settings</em> if you want to make the connection available for all corporate users across all Google Sheets documents. You must be a <em>TeamOne Domain Administrator</em> in order to see and manage the <em>Domain settings</em>.</li><li>You can leverage <a href="./#merged-settings">Merged Settings</a> to keep your credentials private and make other connection details visible to other users.</li></ul><table><thead><tr><th style="text-align:left;">Option / parameter</th><th>Description</th></tr></thead><tbody><tr><td style="text-align:left;">-protocol</td><td>You can omit it if you have useSSL=T in tm1s.cfg file, otherwise specify <em>http</em></td></tr><tr><td style="text-align:left;">-host</td><td>Specify your TM1 server host FQDN. This parameter is mandatory</td></tr><tr><td style="text-align:left;">-port</td><td>Should be equal to HTTPPortNumber in tm1s.cfg file. This parameter is mandatory</td></tr><tr><td style="text-align:left;">-namespace</td><td>If using IntegratedSecurityMode 4 or 5 specify <strong>namespace</strong> configured in Cognos Analytics (usually &quot;LDAP&quot;)</td></tr><tr><td style="text-align:left;">-secret</td><td>This is a base64 encoded username and password. Use <em>Extensions &gt; TeamOne &gt; Tools &gt; Secret maker</em> menu to create your own one. This parameter is mandatory</td></tr><tr><td style="text-align:left;">-securitySheet</td><td>Specify a sheet name where you want to manage your users and their security groups. If presented, <em>Sync security from sheet</em> option will become available in <em>TeamOne Sidebar menu</em>. See more info on <a href="./users.html#security-sheet">security sheet</a></td></tr><tr><td style="text-align:left;">-startRow</td><td>Indicates the first data row in securitySheet. If omitted the default value 1 will be used</td></tr><tr><td style="text-align:left;">-startColumn</td><td>Indicates the first data column in securitySheet. If omitted the default value 1 will be used</td></tr><tr><td style="text-align:left;">-securityRecreate</td><td>Indicates to delete all non-admin users before synchronizing the users and groups from Google Sheets. The default value is <em>False</em></td></tr><tr><td style="text-align:left;">-createGroups</td><td>If TRUE, TeamOne will create new security groups if they do not exist</td></tr></tbody></table><p>Adding <em>::tm1env</em> in <em>TeamOne Configuration</em>:</p><p><img src="'+c+'" alt="img" data-zoomable=""></p><p>The same <em>::tm1env</em> definition on <em>TEAMONE</em> sheet:</p><p><img src="'+u+'" alt="img" data-zoomable=""></p><h2 id="tm1process" tabindex="-1">::tm1process <a class="header-anchor" href="#tm1process" aria-label="Permalink to &quot;::tm1process&quot;">​</a></h2><p><strong>::tm1process</strong> task is used to run TI processes. See the table below how to specify the process name and parameters:</p><table><thead><tr><th style="text-align:left;">Option / parameter</th><th>Description</th></tr></thead><tbody><tr><td style="text-align:left;">-name</td><td>Used to provide a TI process name. If omitted the task name will be used</td></tr><tr><td style="text-align:left;">-tm1env</td><td>Indicates to run the process always in the specified environment, should match one of the defined <em>::tm1env</em>. If omitted the process will run in the selected environment in <em>TeamOne sidebar</em></td></tr><tr><td style="text-align:left;">-info</td><td>A task hint, will be displayed when hovering a mouse cursor over info icon next to the task name</td></tr><tr><td style="text-align:left;">parameter 1-N</td><td>On each line enter a parameter name in <em>column A</em> and a parameter value in <em>column B</em>. For any omitted parameter its default process value will be used</td></tr></tbody></table><p>To execute a task you simply click it in <em>TeamOne sidebar</em>. When the process is completed you will see a message in the sidebar log panel confirming the execution status.</p><p><img src="'+t+'" alt="img" data-zoomable=""></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can generate <em>::tm1process</em> task from the <a href="./processes.html#process-task">sidebar process menu</a>, which will add the process name and all the parameters automatically</p></div><p>See <a href="https://docs.google.com/spreadsheets/d/1wOI8onSk2GoOoVzSDh_EPbZj5pN5iQPPK62cDV3sr7k/edit#gid=858904422" target="_blank" rel="noreferrer">::tm1process example</a></p><h2 id="tm1data" tabindex="-1">::tm1data <a class="header-anchor" href="#tm1data" aria-label="Permalink to &quot;::tm1data&quot;">​</a></h2><p><strong>::tm1data</strong> task allows to query TM1 data using an existing view, MDX or specified dimension elements\\subset. The query result will be printed on the specified sheet.</p><table><thead><tr><th style="text-align:left;">Option / parameter</th><th>Description</th></tr></thead><tbody><tr><td style="text-align:left;">-tm1env</td><td>Indicates to extract data in the specified environment. If omitted the currently selected environment will be used</td></tr><tr><td style="text-align:left;">-info</td><td>A task hint, will be displayed when hovering a mouse cursor over info icon next to the task name</td></tr><tr><td style="text-align:left;">-sheet</td><td>Sheet name to output the data to</td></tr><tr><td style="text-align:left;">-activate</td><td>If provided, it will switch to the specified sheet automatically once the data is printed</td></tr><tr><td style="text-align:left;">-cube</td><td>Cube name, should be used with <em>-view</em> or <em>dimension definitions</em> (see below)</td></tr><tr><td style="text-align:left;">-view</td><td>An existing cube view to fetch the data from. <em>-cube</em> option must be also provided</td></tr><tr><td style="text-align:left;">-mdx</td><td>MDX expression to query TM1 data. MDX will be used only if <em>-view</em> option is not provided</td></tr><tr><td style="text-align:left;">Dimension 1-N</td><td>Enter a dimension name in <em>column A</em>, elements\\subset\\mdx in <em>column B</em> (see below for syntax). <em>-cube</em> option must be also provided. Dimensions/elements will be used only if <em>-view</em> and <em>-mdx</em> options are not provided</td></tr></tbody></table><p>In <em>column B</em> for each dimension (entered in <em>Column A</em>) you can define a subset or MDX expressions as:</p><ul><li>a comma delimited element list, i.e.: <em>Actual,Budget, Forecast</em></li><li>an existing subset name in a format <strong>$SubsetName</strong></li><li><em>$ALL, $LEAVES and $ROOTS</em> system subsets. TeamOne will create a system subset if it does not exist using the next MDX expressions: <ul><li><strong>ALL</strong>: {HIERARCHIZE({[dimensionName].members})}</li><li><strong>LEAVES</strong>: {TM1FILTERBYLEVEL( {[dimensionName].members}, 0)}</li><li><strong>ROOTS</strong>: {FILTER( {[dimensionName].members}, [dimensionName].CurrentMember.Parent.Name = &quot;&quot;)}</li></ul></li><li>a valid MDX expression, i.e.: <em>{[Calendar]}.[2022].Children}</em></li><li>a pattern using &quot;*&quot; for any characters and &quot;?&quot; for any one character, i.e.: <em>/*substring*/</em> or <em>/2022 Q?/</em> You can also combine elements, patterns and MDX expressions into a comma delimited list, i.e.: <em>Current period,Previous period,{[Calendar]}.[2022].Children,/2022 Q?/</em> If you leave Column B value empty, the default dimension member will be used</li></ul><p><img src="'+a+'" alt="img" data-zoomable=""></p><p>The data is printed on the specified <em>-sheet</em>: <img src="'+p+'" alt="img" data-zoomable=""></p><p>See <a href="https://docs.google.com/spreadsheets/d/1wOI8onSk2GoOoVzSDh_EPbZj5pN5iQPPK62cDV3sr7k/edit#gid=858904422" target="_blank" rel="noreferrer">::tm1data example</a></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can generate <em>::tm1data</em> task from the model tab <a href="./model.html#cube-node">cube</a> or <a href="./model.html#view-node">view</a> menu</p></div><h2 id="tm1import" tabindex="-1">::tm1import <a class="header-anchor" href="#tm1import" aria-label="Permalink to &quot;::tm1import&quot;">​</a></h2><p><strong>::tm1import</strong> task is used to import data from a sheet into a TM1 cube.</p><table><thead><tr><th style="text-align:left;">Option / parameter</th><th>Description</th></tr></thead><tbody><tr><td style="text-align:left;">-tm1env</td><td>Indicates the environment to use. If omitted the currently selected environment will be used</td></tr><tr><td style="text-align:left;">-info</td><td>A task hint, will be displayed when hovering a mouse cursor over info icon next to the task name</td></tr><tr><td style="text-align:left;">-cube</td><td>TM1 cube name to import the data into</td></tr><tr><td style="text-align:left;">-sheet</td><td>Sheet name containing the data</td></tr><tr><td style="text-align:left;">-startRow</td><td>Indicates the first data row. If omitted the default value 1 will be used</td></tr><tr><td style="text-align:left;">-startColumn</td><td>Indicates the first data column. If omitted the default value 1 will be used</td></tr><tr><td style="text-align:left;">-skipBlank</td><td>Indicates to skip empty cells</td></tr><tr><td style="text-align:left;">-checkIfUpdatable</td><td>Indicates to skip rule calculated cells</td></tr></tbody></table><p><img src="'+o+'" alt="img" data-zoomable=""></p><p><strong>There are several data requirements, depending on how your data is structured:</strong></p><p><em><strong>Option 1: each column represents a cube dimension, the last column contains values</strong></em></p><ol><li>The column order should match the cube dimensions: <em>Column 1 = Dimension 1, Column 2 = Dimension 2, ... Column N = Measure dimension, Column N+1 = Value</em></li><li>The last column header is <em><strong>Value</strong></em></li></ol><p><img src="'+h+'" alt="img" data-zoomable=""></p><p><em><strong>Option 2: a separate column is used for each measure dimension element</strong></em></p><ol><li>The column order should match the cube dimensions: <em>Column 1 = Dimension 1, Column 2 = Dimension 2, ... Column N = Measure dimension</em></li><li>A separate column should be used for each measure dimension element</li></ol><p><img src="'+g+'" alt="img" data-zoomable=""></p><p>For both options you can use both principal element names and aliases and the entered data should match the data types of the measure dimension elements TeamOne will automatically detect which option to use, based on the cube dimension count and the &quot;Value&quot; column header</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><em><strong>Option 1</strong></em> can be used directly with the data fetched by a <em>::tm1data</em> task, meaning you can have a 2 way data transfer using <em>::tm1data</em> and <em>::tm1import</em> tasks.</p></div><p>See <a href="https://docs.google.com/spreadsheets/d/1wOI8onSk2GoOoVzSDh_EPbZj5pN5iQPPK62cDV3sr7k/edit#gid=858904422" target="_blank" rel="noreferrer">::tm1import example</a></p><h2 id="tm1fileoutput" tabindex="-1">::tm1fileoutput <a class="header-anchor" href="#tm1fileoutput" aria-label="Permalink to &quot;::tm1fileoutput&quot;">​</a></h2><p><strong>::tm1fileoutput</strong> task allows to export sheet data into a field delimited file on TM1 server. It is very handy, when you have a TI process with a complex validation or transformation logics and you just want to use the sheets data export as the TI process data source.</p><table><thead><tr><th style="text-align:left;">Option / parameter</th><th>Description</th></tr></thead><tbody><tr><td style="text-align:left;">-tm1env</td><td>Indicates the environment to use. If omitted the currently selected environment will be used</td></tr><tr><td style="text-align:left;">-info</td><td>A task hint, will be displayed when hovering a mouse cursor over info icon next to the task name</td></tr><tr><td style="text-align:left;">-sheet</td><td>Sheet name containing the data</td></tr><tr><td style="text-align:left;">-startRow</td><td>Indicates the first data row. If omitted the default value 1 will be used</td></tr><tr><td style="text-align:left;">-startColumn</td><td>Indicates the first data column. If omitted the default value 1 will be used</td></tr><tr><td style="text-align:left;">-rows</td><td>Number of rows to export. If ommited or 0, all data rows will be used</td></tr><tr><td style="text-align:left;">-columns</td><td>Number of columns to export. If ommited or 0, all data columns will be used</td></tr><tr><td style="text-align:left;">-file</td><td>File path on TM1 server. You can specify a relative path to the TM1 data directory, for instance <em><strong>..\\FileName.txt</strong></em> will save <em>FileName.txt</em> one level folder up</td></tr><tr><td style="text-align:left;">-delimiter</td><td>file field delimiter, if omitted a tab character will be used</td></tr></tbody></table><p><img src="'+f+'" alt="img" data-zoomable=""></p><p>See <a href="https://docs.google.com/spreadsheets/d/1wOI8onSk2GoOoVzSDh_EPbZj5pN5iQPPK62cDV3sr7k/edit#gid=858904422" target="_blank" rel="noreferrer">::tm1fileoutput example</a></p><h2 id="tm1datacompare" tabindex="-1">::tm1datacompare <a class="header-anchor" href="#tm1datacompare" aria-label="Permalink to &quot;::tm1datacompare&quot;">​</a></h2><p><strong>::tm1datacompare</strong> task allows comparing of an existing <a href="./#tm1data">tm1data</a> task query results (a TM1 view, MDX or specified dimension elements\\subset) in the same or different tm1 environment.</p><table><thead><tr><th style="text-align:left;">Option / parameter</th><th>Description</th></tr></thead><tbody><tr><td style="text-align:left;">-tm1env</td><td>Indicates the environment to extract data from. If omitted the currently selected environment will be used</td></tr><tr><td style="text-align:left;">-tm1data</td><td><a href="./#tm1data">tm1data</a> task name (should be defined separately). You should run that task to get the initial data extract</td></tr><tr><td style="text-align:left;">-activate</td><td>If provided, it will automatically switch to the sheet specified in the <em><strong>tm1data</strong></em> task once the comparison is completed</td></tr></tbody></table><p><img src="'+s+'" alt="img" data-zoomable=""></p><p>First you should run the corresponding <em>::tm1data</em> task to get the initial data results. <strong>::tm1datacompare</strong> task will execute <em>::tm1data</em> task again but this time it will compare the current and previous results and will show the difference in the last column:</p><p><img src="'+i+'" alt="img" data-zoomable=""></p><div class="tip custom-block"><p class="custom-block-title">Compare TM1 data before and after deployments</p><p>Run a <em>::tm1data</em> task before you start deploying any changes. Run <em>::tm1datacompare</em> task after the deployment is completed. Compare the difference on the sheet specified in <em>-sheet</em> option of the <em>::tm1data</em> task.</p></div><div class="tip custom-block"><p class="custom-block-title">Compare TM1 data between different TM1 models</p><p>Use <em>-tm1env</em> task option to specify your target environment.</p></div><p>See <a href="https://docs.google.com/spreadsheets/d/1wOI8onSk2GoOoVzSDh_EPbZj5pN5iQPPK62cDV3sr7k/edit#gid=951520795" target="_blank" rel="noreferrer">::tm1datacompare example</a></p>',59),k=[y];function v(w,x,T,_,I,S){return r(),l("div",null,k)}const E=n(b,[["render",v]]);export{P as __pageData,E as default};
