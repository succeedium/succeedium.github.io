import{_ as e}from"./chunks/exploration.bd9cc679.js";import{_ as t,o,c as a,Q as n}from"./chunks/framework.6e0d310a.js";const s="/teamone/img/explorer/exploration_create.png",l="/teamone/img/explorer/exploration_menu.png",i="/teamone/img/explorer/exploration_reload.png",r="/teamone/img/explorer/group_rows.png",m="/teamone/img/explorer/hierarchy_level_indentation.png",c="/teamone/img/explorer/autofit_columns.png",p="/teamone/img/explorer/dimension_menu.png",u="/teamone/img/explorer/filter_dimension.png",h="/teamone/img/explorer/mdx.png",d="/teamone/img/explorer/mdx_element_list.png",g="/teamone/img/explorer/select_elements.png",b="/teamone/img/explorer/selected_elements_save_as_subset.png",f="/teamone/img/explorer/save_refresh.png",x="/teamone/img/explorer/exploration_save_as_cube_view.png",y="/teamone/img/explorer/calculated_column_arrayformula.png",I=JSON.parse('{"title":"TeamOne","titleTemplate":"Exploration","description":"","frontmatter":{"title":"TeamOne","titleTemplate":"Exploration"},"headers":[],"relativePath":"doc/explorer.md","filePath":"doc/explorer.md"}'),w={name:"doc/explorer.md"},_=n('<h1 id="teamone-explorer" tabindex="-1">TeamOne Explorer <a class="header-anchor" href="#teamone-explorer" aria-label="Permalink to &quot;TeamOne Explorer&quot;">​</a></h1><p><strong>TeamOne Explorer</strong> is your <em><strong>Planning Analytics for Google Sheets</strong></em>. You can easily create <em>explorations</em> (cube views) by selecting dimensions and elements in the sidebar and the data will be refreshed directly in the Google Sheets grid.</p><p><img src="'+e+'" alt="img"></p><div class="tip custom-block"><p class="custom-block-title">Custom content</p><p>When recalculating a new <em>Exploration</em> for the first time, it will print the data starting from the cell A1. Custom content can be added above or below exploration rows or columns.</p></div><h2 id="create-exploration" tabindex="-1">Create exploration <a class="header-anchor" href="#create-exploration" aria-label="Permalink to &quot;Create exploration&quot;">​</a></h2><p>You can create a new exploration from scratch by clicking the <em><strong>Explorer</strong></em> button on the first (Content) tab. A new exploration is linked to the current (active) sheet and gets the same name as the sheet. You can have only one exploration per sheet, but you can add multiple <em><strong>=TEAMONE()</strong></em> formulas.</p><p><img src="'+s+'" alt="img" data-zoomable=""></p><div class="tip custom-block"><p class="custom-block-title">System cubes</p><p>You can see system cubes by selecting <em>Show system objects</em> from the menu</p></div><p>Alternatively, you can build a new exploration by opening any cube or cube view from the <a href="./model.html">Model</a> tab.</p><h2 id="open-exploration" tabindex="-1">Open exploration <a class="header-anchor" href="#open-exploration" aria-label="Permalink to &quot;Open exploration&quot;">​</a></h2><p>When you click the <em><strong>Explorer</strong></em> button, it will load the current sheet exploration if it exists, otherwise you will be able to create a new exploration. To access a different exploration, you can either click the <em><strong>Explorer</strong></em> button after switching to the sheet you want to open the exploration for or use the <em><strong>Other explorations</strong></em> menu option. TeamOne will take you to the corresponding sheet automatically.</p><p><img src="'+l+'" alt="img" data-zoomable=""></p><div class="tip custom-block"><p class="custom-block-title">Reload active sheet exploration</p><p>If you navigate to a different sheet, simply click the exploration icon to reload the exploration from that sheet.</p></div><p><img src="'+i+'" alt="img" data-zoomable=""></p><h2 id="exploration-cube" tabindex="-1">Exploration cube <a class="header-anchor" href="#exploration-cube" aria-label="Permalink to &quot;Exploration cube&quot;">​</a></h2><p>When creating a new exploration, you can choose the cube name or modify the existing exploration cube via the exploration settings. You can access the exploration settings either from the exploration menu or by clicking the cube name.</p><p>In either case, TeamOne will generate a sample exploration for you. It does so by selecting the last two dimensions for your rows and columns, and using <a href="./functions.html#mdx-mods">$ALL</a> MDX mod to dynamically select all elements for each dimension.</p><h2 id="include-empty-rows" tabindex="-1">Include empty rows <a class="header-anchor" href="#include-empty-rows" aria-label="Permalink to &quot;Include empty rows&quot;">​</a></h2><p>By default TeamOne will suppress empty rows (exlcude it from the results). Select <em>Include empty rows</em> to include rows with no amounts or text.</p><h2 id="include-empty-columns" tabindex="-1">Include empty columns <a class="header-anchor" href="#include-empty-columns" aria-label="Permalink to &quot;Include empty columns&quot;">​</a></h2><p>By default TeamOne will suppress empty columns (exlcude it from the results). Select <em>Include empty columns</em> to include rows with no amounts or text.</p><h2 id="formatted-values" tabindex="-1">Formatted values <a class="header-anchor" href="#formatted-values" aria-label="Permalink to &quot;Formatted values&quot;">​</a></h2><p>TeamOne can retrieve data either with IBM PA-defined formatting or as unformatted values (recommended for updating and saving back to IBM PA).</p><h2 id="groups-rows" tabindex="-1">Groups rows <a class="header-anchor" href="#groups-rows" aria-label="Permalink to &quot;Groups rows&quot;">​</a></h2><p>By default, TeamOne will group rows by displaying distinct row element names and using empty cells for the repeated elements. To display all row elements, uncheck the &quot;Group rows&quot; option.</p><p><img src="'+r+'" alt="img" data-zoomable=""></p><h2 id="hierarchy-indentation" tabindex="-1">Hierarchy indentation <a class="header-anchor" href="#hierarchy-indentation" aria-label="Permalink to &quot;Hierarchy indentation&quot;">​</a></h2><p>By default, TeamOne indents row elements based on hierarchy level. Uncheck <em>Hierarchy indentation</em> to print rows without indentation.</p><p><img src="'+m+'" alt="img" data-zoomable=""></p><h2 id="autofit-columns" tabindex="-1">Autofit columns <a class="header-anchor" href="#autofit-columns" aria-label="Permalink to &quot;Autofit columns&quot;">​</a></h2><p>TeamOne will automatically resize columns to fit content. Uncheck <em>Autofit columns</em> to maintain current column width.</p><p><img src="'+c+'" alt="img" data-zoomable=""></p><h2 id="rows-columns-and-filters" tabindex="-1">Rows, columns and filters <a class="header-anchor" href="#rows-columns-and-filters" aria-label="Permalink to &quot;Rows, columns and filters&quot;">​</a></h2><p>An exploration consists of three areas: rows, columns, and filters. For row and column dimensions, you can manually select elements, use a subset, or use a dynamic expression (MDX). For filter dimensions, you can only select a single element.</p><h2 id="rearrange-dimensions" tabindex="-1">Rearrange dimensions <a class="header-anchor" href="#rearrange-dimensions" aria-label="Permalink to &quot;Rearrange dimensions&quot;">​</a></h2><p>You can easily move dimensions within or between areas using drag-and-drop or the dimension context menu. The context menu includes options to select ALL, ROOTS, or LEAVES subsets.</p><p><img src="'+p+'" alt="img" data-zoomable=""></p><div class="tip custom-block"><p class="custom-block-title">Row and column dimensions</p><p>You should have at least 1 row and 1 column dimensions.</p></div><h2 id="filter-elements" tabindex="-1">Filter elements <a class="header-anchor" href="#filter-elements" aria-label="Permalink to &quot;Filter elements&quot;">​</a></h2><p>Click on a filter dimension to select an element. It will open the subset screen and activate the element dropdown. You can then start typing the element name or select it from the list. You can also choose a different hierarchy, an existing subset and attribute, or use an MDX to control the element list.</p><p><img src="'+u+'" alt="img" data-zoomable=""></p><p>You can unselect the element by clicking the clear icon on the right</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>While typing the element name, hit <em><strong>ENTER</strong></em> to select the first highlighted element and close the subset screen automatically.</p></div><h2 id="default-elements" tabindex="-1">Default elements <a class="header-anchor" href="#default-elements" aria-label="Permalink to &quot;Default elements&quot;">​</a></h2><p>If you don&#39;t choose a filter element, TeamOne will automatically use a <em><strong>default element</strong></em> for that particular dimension. This <em><strong>default element</strong></em> is typically the first top-level consolidated element that the user has access to. However, the TM1 administrator can also set the <em><strong>default element</strong></em> in the <em><strong>}HierarchyProperties</strong></em> control cube. Please note that if element security is defined for a dimension, users may see different default elements depending on their permissions.</p><h2 id="row-and-column-elements" tabindex="-1">Row and column elements <a class="header-anchor" href="#row-and-column-elements" aria-label="Permalink to &quot;Row and column elements&quot;">​</a></h2><p>For row and column dimensions you can choose to display elements from an existing subset, use an MDX expression or pick the elements manually.</p><h3 id="subset" tabindex="-1">Subset <a class="header-anchor" href="#subset" aria-label="Permalink to &quot;Subset&quot;">​</a></h3><p>Simply select a subset from the Subset list and TeamOne will retrieve the elements automatically.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If a subset has an alias, it will be selected automatically when you choose it from the list.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If the subset is dynamic, the MDX button color will change to &quot;indigo&quot;. You can view the expression by hovering your mouse over the MDX button</p></div><h3 id="mdx" tabindex="-1">MDX <a class="header-anchor" href="#mdx" aria-label="Permalink to &quot;MDX&quot;">​</a></h3><p>Use the MDX button to edit the existing MDX expression or create a new one. In the MDX editor you type the expression manually or use the <a href="./functions.html#mdx-mods">MDX mods</a> buttons at the top to build an expression with no code.</p><p>For instance, the next expression will filter all the leaf level <em><strong>Organization</strong></em> dimension elements by the <em><strong>currency</strong></em> attribute value equal to <em><strong>CDN</strong></em> and will select the first 2 elements. You can also use the <em><strong>Convert MDX</strong></em> button to see the real MDX:</p><p><img src="'+h+'" alt="img" data-zoomable=""></p><p>More over you can simply type or copy-paste the elements. Or even use wildcard patterns:</p><p><img src="'+d+'" alt="img" data-zoomable=""></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>MDX expressions are dynamic, meaning the element list will be evaluated upon refreshing exploration data</p></div><h3 id="select-elements" tabindex="-1">Select elements <a class="header-anchor" href="#select-elements" aria-label="Permalink to &quot;Select elements&quot;">​</a></h3><p>Finally you can select elements manually:</p><p><img src="'+g+'" alt="img" data-zoomable=""></p><h2 id="save-selected-elements-as-subset" tabindex="-1">Save selected elements as subset <a class="header-anchor" href="#save-selected-elements-as-subset" aria-label="Permalink to &quot;Save selected elements as subset&quot;">​</a></h2><p>Use <em><strong>Save as subset</strong></em> menu option to save subsets back to IBM Planning Analytics, so they can be available in Planning Analytics Workspace, Planning Analytics for Excel, TM1Web, TM1 Architect, etc.</p><p><img src="'+b+'" alt="img" data-zoomable=""></p><h2 id="refresh-exploration" tabindex="-1">Refresh exploration <a class="header-anchor" href="#refresh-exploration" aria-label="Permalink to &quot;Refresh exploration&quot;">​</a></h2><p>Click the <em><strong>Refresh data</strong></em> button to refresh the exploration. This will also save all any changes you made to the exploration. Keep in mind that depending on the volume of data, it may take some time to fetch and print all the values. For large explorations TeamOne will split data requests into multiple packages, up to 16,384 cells each. As each package is received, the data will be printed onto the sheet.</p><p><img src="'+f+'" alt="img" data-zoomable=""></p><h2 id="save-exploration-as-cube-view" tabindex="-1">Save exploration as cube view <a class="header-anchor" href="#save-exploration-as-cube-view" aria-label="Permalink to &quot;Save exploration as cube view&quot;">​</a></h2><p>Use the <em><strong>Save as cube view</strong></em> option in the Exploration menu to save it as a cube view in IBM Planning Analytics, so it will be available in Planning Analytics Workspace, Planning Analytics for Excel, TM1Web, TM1 Architect, etc.</p><p><img src="'+x+'" alt="img" data-zoomable=""></p><h2 id="calculated-columns" tabindex="-1">Calculated columns <a class="header-anchor" href="#calculated-columns" aria-label="Permalink to &quot;Calculated columns&quot;">​</a></h2><p>You can add custom calculated columns after the last exploration column by using <em><strong>TEAMONE()</strong></em> or <em><strong>ARRAYFORMULA()</strong></em>. These functions enable you to calculate multiple values based on the selected range of cells. More complex formulas can also be constructed depending on your specific requirements. It&#39;s important to keep those formulas in the first row of your exploration data (the row immediately below the frozen headers), as this will prevent it from being wiped out when the exploration is recalculated.</p><p><img src="'+y+'" alt="img" data-zoomable=""></p><h2 id="copy-between-google-sheets" tabindex="-1">Copy between Google Sheets <a class="header-anchor" href="#copy-between-google-sheets" aria-label="Permalink to &quot;Copy between Google Sheets&quot;">​</a></h2><p>Unlike formulas, explorations are not copied when you make a copy of a Google Sheets document. To copy exporations to a different Google Sheets document, please use the <a href="./content-manager.html">Content manager</a> available from the <em><strong>Extension &gt; TeamOne</strong></em> menu.</p>',75),v=[_];function k(q,T,P,A,M,S){return o(),a("div",null,v)}const D=t(w,[["render",k]]);export{I as __pageData,D as default};
