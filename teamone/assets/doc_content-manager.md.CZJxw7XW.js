import{_ as t,c as a,o,ag as n}from"./chunks/framework.BG_SpCm2.js";const s="/teamone/img/tools/content_manager_menu.png",r="/teamone/img/tools/content_manager_copy_explorations.png",l="/teamone/img/tools/content_manager_paste_explorations.png",i="/teamone/img/tools/memory_usage.png",b=JSON.parse('{"title":"TeamOne","titleTemplate":"Content manager","description":"","frontmatter":{"title":"TeamOne","titleTemplate":"Content manager"},"headers":[],"relativePath":"doc/content-manager.md","filePath":"doc/content-manager.md"}'),m={name:"doc/content-manager.md"};function c(p,e,d,u,g,h){return o(),a("div",null,e[0]||(e[0]=[n('<h2 id="content-manager" tabindex="-1">Content manager <a class="header-anchor" href="#content-manager" aria-label="Permalink to &quot;Content manager&quot;">​</a></h2><p>Content manager is used to copy TeamOne explorations between different Google Sheets documents and see the <a href="#memory-usage">memory</a> used by TeamOne content. You can find it in the <em><strong>Extension &gt; TeamOne</strong></em> menu.</p><p><img src="'+s+'" alt="img" data-zoomable=""></p><h2 id="copy-explorations" tabindex="-1">Copy explorations <a class="header-anchor" href="#copy-explorations" aria-label="Permalink to &quot;Copy explorations&quot;">​</a></h2><p>You can select and copy multiple explorations:</p><p><img src="'+r+'" alt="img" data-zoomable=""></p><h2 id="paste-explorations" tabindex="-1">Paste explorations <a class="header-anchor" href="#paste-explorations" aria-label="Permalink to &quot;Paste explorations&quot;">​</a></h2><p>To import (paste) the copied explorations, open the <em><strong>Content manager</strong></em> in a different Google Sheets document and click the paste button.</p><p><img src="'+l+'" alt="img" data-zoomable=""></p><div class="tip custom-block"><p class="custom-block-title">Recalculate the copied explorations</p><p>Use <a href="./functions.html#recalculate-all">Recalculate all</a> to recalculate all copied explorations in the new document.</p></div><h2 id="clear-clipboard" tabindex="-1">Clear clipboard <a class="header-anchor" href="#clear-clipboard" aria-label="Permalink to &quot;Clear clipboard&quot;">​</a></h2><p>Use the <em><strong>Clear</strong></em> button to empty the clipboard.</p><h2 id="memory-usage" tabindex="-1">Memory usage <a class="header-anchor" href="#memory-usage" aria-label="Permalink to &quot;Memory usage&quot;">​</a></h2><p>TeamOne utilizes the <a href="https://developers.google.com/apps-script/guides/properties" target="_blank" rel="noreferrer">Google Properties Service</a>. This service has specific <a href="https://developers.google.com/apps-script/guides/services/quotas#current_limitations" target="_blank" rel="noreferrer">quotas</a>, with a storage limit of 500 KB per document. You will receive the <a href="./issues.html#property-storage-quota">Property storage quota error</a> if exceeding this limit. The next table contains common reasons and possible solutions for reaching this limit:</p><table tabindex="0"><thead><tr><th style="text-align:left;">Possible reason</th><th>Possible solution</th></tr></thead><tbody><tr><td style="text-align:left;">TeamOne formulas with too many rows or columns, retrieving thousands of values</td><td>Use the &quot;S&quot; flag to retrieve <a href="./formulas.html#static-values">static values</a> in TeamOne formulas</td></tr><tr><td style="text-align:left;">Too many TeamOne formulas and explorations</td><td>Try moving some formulas or explorations to a different document</td></tr><tr><td style="text-align:left;">TeamOne explorations with static subsets containing thousands of elements</td><td>Use the existing dimension subsets or MDX expressions instead of manually selecting elements</td></tr></tbody></table><p><img src="'+i+'" alt="img" data-zoomable=""></p><div class="tip custom-block"><p class="custom-block-title">CLEAR CACHE button</p><p>Use the &quot;Clear Cache&quot; button to release the memory used for storing formula values. This will require recalculating all formulas.</p></div><div class="tip custom-block"><p class="custom-block-title">Go to cell</p><p>By clicking on any row in the memory usage table, you can instantly navigate to the corresponding sheet and cell.</p></div>',18)]))}const _=t(m,[["render",c]]);export{b as __pageData,_ as default};
