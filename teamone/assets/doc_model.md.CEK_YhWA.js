import{_ as t,c as i,o,ag as n}from"./chunks/framework.BG_SpCm2.js";const a="/teamone/img/model/model.png",s="/teamone/img/model/cubes.png",l="/teamone/img/model/cube_dialog.png",r="/teamone/img/model/dimensions.png",m="/teamone/img/model/dimension_dialog.png",w=JSON.parse('{"title":"TeamOne","titleTemplate":"Model tab","description":"","frontmatter":{"title":"TeamOne","titleTemplate":"Model tab"},"headers":[],"relativePath":"doc/model.md","filePath":"doc/model.md"}'),d={name:"doc/model.md"};function c(h,e,u,p,b,g){return o(),i("div",null,e[0]||(e[0]=[n('<h1 id="model" tabindex="-1">Model <a class="header-anchor" href="#model" aria-label="Permalink to &quot;Model&quot;">​</a></h1><p>On the <em>Model</em> tab you can explore TM1 cubes, views, dimensions, including hierarchies, subsets, elements and attributes. Using the context menu you can easily generate <a href="./tasks.html">tasks</a> and <a href="./functions.html#add-code">code blocks</a> to import/export TM1 data, manage TM1 model objects and security.</p><p>By default all the control cubes and dimensions are hidden, but you can include them using the top right menu button</p><p><img src="'+a+'" alt="img" data-zoomable=""></p><h2 id="cubes" tabindex="-1">Cubes <a class="header-anchor" href="#cubes" aria-label="Permalink to &quot;Cubes&quot;">​</a></h2><p>Cubes node contains TM1 cubes and views. There are several functions available though the context menu</p><p><img src="'+s+'" alt="img" data-zoomable=""></p><h3 id="cubes-node" tabindex="-1">Cubes node <a class="header-anchor" href="#cubes-node" aria-label="Permalink to &quot;Cubes node&quot;">​</a></h3><ul><li><em><strong>Export cubes (names)</strong></em> - will export the cube name list on a new sheet</li><li><em><strong>Cube security definition</strong></em> - will add a sample <a href="./functions.html#cube-security">::cube.security</a> code block to the current sheet. This menu option is available to TM1 admin users only</li></ul><h3 id="cube-node" tabindex="-1">Cube node <a class="header-anchor" href="#cube-node" aria-label="Permalink to &quot;Cube node&quot;">​</a></h3><ul><li><em><strong>Open cube</strong></em> - will open a cube dialog where you can see the cube dimensions</li><li><em><strong>TEAMONE formula</strong></em> - will add a sample <a href="./functions.html#recalculate">TEAMONE formula</a> to the active cell. Then you can easily tailor it to your needs</li></ul><p>The next 3 options are available to TM1 admin users only:</p><ul><li><em><strong>Export data</strong></em> - will add a sample <a href="./tasks.html#tm1data">::tm1data</a> task for the selected cube to <em>TEAMONE</em> sheet</li><li><em><strong>Cube definition</strong></em> - will add a sample <a href="./functions.html#cube">::cube</a> code block to the current sheet</li><li><em><strong>View definition</strong></em> - will add a sample <a href="./functions.html#view">::view</a> code block to the current sheet</li></ul><h3 id="view-node" tabindex="-1">View node <a class="header-anchor" href="#view-node" aria-label="Permalink to &quot;View node&quot;">​</a></h3><ul><li><em><strong>Open view</strong></em> - will open the selected view in cube dialog where you can see the view dimensions</li><li><em><strong>TEAMONE formula</strong></em> - will add a sample <a href="./functions.html#recalculate">TEAMONE formula</a> to the active cell. Then you can easily tailor it to your needs</li></ul><p>The next 2 options are available to TM1 admin users only:</p><ul><li><em><strong>Export data</strong></em> - will add a sample <a href="./tasks.html#tm1data">::tm1data</a> task for the selected cube view to <em>TEAMONE</em> sheet</li><li><em><strong>View definition</strong></em> - will add a sample <a href="./functions.html#view">::view</a> code block to the current sheet</li></ul><h3 id="cube-dialog" tabindex="-1">Cube dialog <a class="header-anchor" href="#cube-dialog" aria-label="Permalink to &quot;Cube dialog&quot;">​</a></h3><p><em><strong>Open cube</strong></em> or <em><strong>Open view</strong></em> will display a cube dialog, which will either show the cube dimensions or the view dimension structure. You can also open go to each dimension by clicking the icon on the right</p><p><img src="'+l+'" alt="img" data-zoomable=""></p><div class="tip custom-block"><p class="custom-block-title">Copy to clipboard</p><p>You can quickly copy to clipboard the cube or dimension name by clicking it</p></div><h2 id="dimensions" tabindex="-1">Dimensions <a class="header-anchor" href="#dimensions" aria-label="Permalink to &quot;Dimensions&quot;">​</a></h2><p>Dimensions node contains TM1 dimensions, hierarchies and subsets. There are several functions available though the context menu</p><p><img src="'+r+'" alt="img" data-zoomable=""></p><h3 id="dimensions-node" tabindex="-1">Dimensions node <a class="header-anchor" href="#dimensions-node" aria-label="Permalink to &quot;Dimensions node&quot;">​</a></h3><ul><li><em><strong>Export dimensions (names)</strong></em> - will export the dimension name list on a new sheet</li><li><em><strong>Dimensions security definition</strong></em> - will add a sample <a href="./functions.html#cube-security">::dimension.security</a> code block to the current sheet. This menu option is available to TM1 admin users only</li></ul><h3 id="dimension-node" tabindex="-1">Dimension node <a class="header-anchor" href="#dimension-node" aria-label="Permalink to &quot;Dimension node&quot;">​</a></h3><ul><li><p><em><strong>Open dimension</strong></em> - will open the dimension dialog where you can see the dimension hierarchies, subsets, attributes and elements</p></li><li><p><em><strong>Export dimension</strong></em> - will export dimension elements to a new sheet</p></li><li><p><em><strong>Export dimension + attributes</strong></em> - will export dimension elements and attributes to a new sheet</p></li></ul><p>The next 2 options are available to TM1 admin users only:</p><ul><li><em><strong>Dimension definition</strong></em> - will add a sample <a href="./functions.html#cube">::dimension</a> code block to the current sheet</li><li><em><strong>Element security definition</strong></em> - will add a sample <a href="./functions.html#cube-security">::element.security</a> code block to the current sheet</li></ul><h3 id="hierarchy-node" tabindex="-1">Hierarchy node <a class="header-anchor" href="#hierarchy-node" aria-label="Permalink to &quot;Hierarchy node&quot;">​</a></h3><ul><li><p><em><strong>Open hierarchy</strong></em> - will open the dimension dialog where you can see the current dimension hierarchy, subsets, attributes and elements</p></li><li><p><em><strong>Export hierarchy</strong></em> - will export the dimension hierarchy elements to a new sheet</p></li><li><p><em><strong>Export hierarchy + attributes</strong></em> - will export the dimension hierarchy elements and attributes to a new sheet</p></li><li><p><em><strong>Hierarchy definition</strong></em> - will add a sample <a href="./functions.html#cube">::dimension</a> code block to the current sheet. This menu option is available to TM1 admin users only</p></li><li><p><em><strong>Element security definition</strong></em> - will add a sample <a href="./functions.html#cube-security">::element.security</a> code block to the current sheet</p></li></ul><h3 id="subset-node" tabindex="-1">Subset node <a class="header-anchor" href="#subset-node" aria-label="Permalink to &quot;Subset node&quot;">​</a></h3><ul><li><p><em><strong>Open subset</strong></em> - will open the dimension dialog where you can see the current hierarchy subset, attributes and elements</p></li><li><p><em><strong>Export subset</strong></em> - will export the subset elements to a new sheet</p></li><li><p><em><strong>Export subset + attributes</strong></em> - will export the subset elements and attributes to a new sheet</p></li></ul><h3 id="dimension-dialog" tabindex="-1">Dimension dialog <a class="header-anchor" href="#dimension-dialog" aria-label="Permalink to &quot;Dimension dialog&quot;">​</a></h3><p><em><strong>Open dimension</strong></em>, <em><strong>Open hierarchy</strong></em> and <em><strong>Open subset</strong></em> will display a dimension dialog, which will show the dimension/hierarchy/subset elements. You can also see the elements attributes.</p><p><img src="'+m+'" alt="img" data-zoomable=""></p><div class="tip custom-block"><p class="custom-block-title">Copy to clipboard</p><p>You can quickly copy to clipboard the dimension or element name or attribute value by clicking it</p></div>',38)]))}const y=t(d,[["render",c]]);export{w as __pageData,y as default};
