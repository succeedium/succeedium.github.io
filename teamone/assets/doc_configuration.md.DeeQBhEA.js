import{_ as t}from"./chunks/teamone_sheet.Dfw_Bqk0.js";import{_ as n,c as a,o,ag as s}from"./chunks/framework.BG_SpCm2.js";const i="/teamone/img/configuration/teamone_configuration.png",r="/teamone/img/configuration/domain_settings.png",m="/teamone/img/configuration/domain_settings_permissions.png",l="/teamone/img/configuration/teamone_security.png",d="/teamone/img/configuration/refresh.png",T=JSON.parse('{"title":"TeamOne","titleTemplate":"Configuration","description":"","frontmatter":{"title":"TeamOne","titleTemplate":"Configuration"},"headers":[],"relativePath":"doc/configuration.md","filePath":"doc/configuration.md"}'),c={name:"doc/configuration.md"};function g(h,e,u,p,f,y){return o(),a("div",null,e[0]||(e[0]=[s('<h1 id="teamone-configuration" tabindex="-1">TeamOne configuration <a class="header-anchor" href="#teamone-configuration" aria-label="Permalink to &quot;TeamOne configuration&quot;">​</a></h1><p>You can manage the TeamOne add-on settings either through the <em><strong>TeamOne Configuration</strong></em> (where you can define personal, document and domain level connections and tasks) or directly in a sheet named <em><strong>TEAMONE</strong></em>:</p><table tabindex="0"><thead><tr><th style="text-align:left;">Settings</th><th>Description</th></tr></thead><tbody><tr><td style="text-align:left;">Domain Settings</td><td>available to all corporate users across all Google Sheets documents</td></tr><tr><td style="text-align:left;">Document Settings</td><td>available to all corporate users in a given Google Sheets document</td></tr><tr><td style="text-align:left;">Personal Settings</td><td>available to a given user in all Google Sheets documents</td></tr><tr><td style="text-align:left;">TEAMONE sheet</td><td>defined in a specific Google Sheets document on a sheet (tab) named <em>TEAMONE</em></td></tr></tbody></table><p><img src="'+i+'" alt="img" data-zoomable=""></p><h2 id="personal-settings" tabindex="-1">Personal settings <a class="header-anchor" href="#personal-settings" aria-label="Permalink to &quot;Personal settings&quot;">​</a></h2><p>In <em>My Settings</em>, you can define private IBM PA connections and private tasks. These personal settings are stored in your Google account and shared across all your Google Sheets documents where you use the TeamOne add-on. It is important to note that no other users can access or view these settings.</p><h2 id="document-settings" tabindex="-1">Document settings <a class="header-anchor" href="#document-settings" aria-label="Permalink to &quot;Document settings&quot;">​</a></h2><p><em>Document Settings</em> are saved in the current Google Sheets document properties and are accessible to all users of a given document. However, only <em><strong>Admin</strong></em> users can view and modify these settings.</p><h2 id="domain-settings" tabindex="-1">Domain settings <a class="header-anchor" href="#domain-settings" aria-label="Permalink to &quot;Domain settings&quot;">​</a></h2><p><em>Domain Settings</em> are available to all corporate accounts. However, only designated domain administrators can view and modify these settings.</p><p><img src="'+r+'" alt="img" data-zoomable=""></p><p>Additionally, you can specify the permissions and list the users who can use each IBM PA connection.</p><p><img src="'+m+'" alt="img" data-zoomable=""></p><h2 id="teamone-sheet" tabindex="-1">TEAMONE sheet <a class="header-anchor" href="#teamone-sheet" aria-label="Permalink to &quot;TEAMONE sheet&quot;">​</a></h2><p>You can define IBM Planning Analytics connections and tasks directly on a sheet named <em><strong>TEAMONE</strong></em>. You can use <em>Sheets</em> formulas, copy-paste settings, or <a href="./functions.html#comments">comment out</a> individual settings or entire settings blocks.</p><p><img src="'+t+'" alt="img" data-zoomable=""></p><h2 id="merging-settings" tabindex="-1">Merging settings <a class="header-anchor" href="#merging-settings" aria-label="Permalink to &quot;Merging settings&quot;">​</a></h2><p>If you have the same named <em>Personal</em>, <em>Document</em>, <em>Domain</em> and <em>TEAMONE sheet</em> settings, they will be merged in the next order:</p><ol><li>Domain Settings</li><li>Document Settings</li><li>Personal Settings</li><li>TEAMONE sheet</li></ol><p>For instance, as an admin user, I would like to define a new IBM PA connection named <em>IBM Cloud PROD</em> in the <em>Domain</em> or <em>Document Settings</em>, this is where I would define the server host, port and namespace (in case of CAM authentication). Then other users can also define <em>IBM Cloud PROD</em> connection in their <em>Personal Settings</em>, but populate the <strong>username/password</strong> fields only. Finally on TEAMONE sheet we can aslo define <em>IBM Cloud PROD</em> connection and specify a value for the <em>securitySheet</em>. When opening <strong>TeamOne Sidebar</strong>, all the settings will be merged, so <em>IBM Cloud PROD</em> connection will get the host, port and namespace from the <em>Domain</em> or <em>Document Settings</em>, the secret from the <em>Private Settings</em>, and finally the <em>securitySheet</em> value defined on the TEAMONE sheet.</p><h2 id="document-security" tabindex="-1">Document Security <a class="header-anchor" href="#document-security" aria-label="Permalink to &quot;Document Security&quot;">​</a></h2><p>When you start using the TeamOne add-on in a new Google Sheets document, no security is defined by default. This means that all users can access the <em><strong>Document Settings</strong></em> and modify the <em><strong>Security</strong></em>. To set up security, go to the <em><strong>Security</strong></em> tab and add the email addresses of users who should be able to use TeamOne in a given document. Once you add your first account, other users will not be able to edit the <em><strong>Document Settings</strong></em> and <em><strong>Security</strong></em> tabs, unless they are added on the <em><strong>Security</strong></em> tab with <em><strong>admin</strong></em> permissions.</p><p><img src="'+l+'" alt="img" data-zoomable=""></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Use Google Sheets sharing options to specify who can access your document and who can edit it. You can also use <a href="https://support.google.com/docs/answer/1218656" target="_blank" rel="noreferrer">Protected sheets and ranges</a> to control who can modify the TEAMONE config sheet.</p></div><h2 id="connections-and-tasks" tabindex="-1">Connections and tasks <a class="header-anchor" href="#connections-and-tasks" aria-label="Permalink to &quot;Connections and tasks&quot;">​</a></h2><p>You can add and configure multiple <a href="./index.html#ibm-pa-cloud-connection">IBM Planning Analytics Cloud</a> or <a href="./index.html#ibm-pa-local-connection">IBM Planning Analytics Local</a> connections and TeamOne automation tasks:</p><table tabindex="0"><thead><tr><th style="text-align:left;">Task</th><th>Description</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./tasks.html#tm1process">tm1process</a></td><td>run TI processes with the specified parameters</td></tr><tr><td style="text-align:left;"><a href="./tasks.html#tm1data">tm1data</a></td><td>query IBM PA cube data using an existing view, MDX or specified elements\\subsets</td></tr><tr><td style="text-align:left;"><a href="./tasks.html#tm1import">tm1import</a></td><td>import data from Google Sheets into a TM1 cube</td></tr><tr><td style="text-align:left;"><a href="./tasks.html#tm1fileoutput">tm1fileoutput</a></td><td>export data from Google Sheets into a field delimited file on IBM PA server</td></tr><tr><td style="text-align:left;"><a href="./tasks.html#tm1datacompare">tm1datacompare</a></td><td>compare IBM PA cube data and show the difference</td></tr></tbody></table><h2 id="refreshing-configuration" tabindex="-1">Refreshing configuration <a class="header-anchor" href="#refreshing-configuration" aria-label="Permalink to &quot;Refreshing configuration&quot;">​</a></h2><p>When you open the <em><strong>TeamOne sidebar</strong></em>, the configuration is automatically reloaded. Use the <em><strong>Refresh configuration</strong></em> button after making any changes to the <em><strong>TEAMONE</strong></em> sheet or through <em><strong>TeamOne Configuration</strong></em>.</p><p><img src="'+d+'" alt="img" data-zoomable=""></p>',30)]))}const _=n(c,[["render",g]]);export{T as __pageData,_ as default};
