import{_ as n,c as o,o as l,b as e,d as t}from"./app.cf8bd30a.js";var s="/teamone/img/explorer/exploration.gif",a="/teamone/img/explorer/exploration_create.png",i="/teamone/img/explorer/dimension_menu.png",r="/teamone/img/explorer/filter_dimension.png",c="/teamone/img/explorer/mdx.png",d="/teamone/img/explorer/mdx_element_list.png",h="/teamone/img/explorer/select_elements.png",u="/teamone/img/explorer/save_refresh.png";const ce='{"title":"TeamOne Explorer","description":"","frontmatter":{},"headers":[{"level":2,"title":"Create exploration","slug":"create-exploration"},{"level":2,"title":"Open exploration","slug":"open-exploration"},{"level":2,"title":"Exploration cube","slug":"exploration-cube"},{"level":2,"title":"Rows, columns and filters","slug":"rows-columns-and-filters"},{"level":2,"title":"Rearrange dimensions","slug":"rearrange-dimensions"},{"level":2,"title":"Filter elements","slug":"filter-elements"},{"level":2,"title":"Default elements","slug":"default-elements"},{"level":2,"title":"Row and column elements","slug":"row-and-column-elements"},{"level":3,"title":"Subset","slug":"subset"},{"level":3,"title":"MDX","slug":"mdx"},{"level":3,"title":"Select elements","slug":"select-elements"},{"level":2,"title":"Save exploration","slug":"save-exploration"},{"level":2,"title":"Refresh exploration","slug":"refresh-exploration"}],"relativePath":"doc/explorer.md","lastUpdated":1658962023794}',m={},p=e("h1",{id:"teamone-explorer",tabindex:"-1"},[t("TeamOne Explorer "),e("a",{class:"header-anchor",href:"#teamone-explorer","aria-hidden":"true"},"#")],-1),_=e("p",null,[e("strong",null,"TeamOne Explorer"),t(" is your "),e("em",null,[e("strong",null,"Planning Analytics for Google Sheets")]),t(". You can easily create "),e("em",null,"explorations"),t(" (cube views) by selecting dimensions and elements in the sidebar and the data will be refreshed directly in the Google Sheets grid. "),e("img",{src:s,alt:"img"})],-1),x=e("h2",{id:"create-exploration",tabindex:"-1"},[t("Create exploration "),e("a",{class:"header-anchor",href:"#create-exploration","aria-hidden":"true"},"#")],-1),g=e("p",null,[t("You can open "),e("strong",null,"TeamOne Explorer"),t(" from the sidebar using the "),e("em",null,[e("strong",null,"Explorer")]),t(" button on first tab. When you create a new exploration it becomes linked to the current open sheet and gets the same name as the sheet. When you open the "),e("em",null,[e("strong",null,"Explorer")]),t(" screen, it will load the current sheet exploration if it exists, otherwise you will be able to create a new exploration. "),e("img",{src:a,alt:"img"})],-1),f=e("h2",{id:"open-exploration",tabindex:"-1"},[t("Open exploration "),e("a",{class:"header-anchor",href:"#open-exploration","aria-hidden":"true"},"#")],-1),b=e("p",null,[t("When you click the "),e("em",null,[e("strong",null,"Explorer")]),t(" button, it will load the current sheet exploration if it exists, otherwise you will be able to create a new exploration for the current sheet. To open a different exploration, you can either switch to the sheet you want to open the exploration for and click the "),e("em",null,[e("strong",null,"Explorer")]),t(" button or you can click the cube name button (to edit the exploration) and on that screen you will be able to click the exploration to open from the list at the bottom. TeamOne will automatically switch to the corresponding sheet for you.")],-1),y=e("h2",{id:"exploration-cube",tabindex:"-1"},[t("Exploration cube "),e("a",{class:"header-anchor",href:"#exploration-cube","aria-hidden":"true"},"#")],-1),w=e("p",null,[t("You can select the cube name when creating a new exploration or you can change the cube when editing an existing exploration by clicking the cube name In both cases TeamOne will build a sample exploration for you by selecting the last 2 dimensions for your rows and columns and using "),e("a",{href:"./functions.html#mdx-mods"},"$ALL"),t(" MDX mod to dynamically select all elements for each dimension.")],-1),v=e("h2",{id:"rows-columns-and-filters",tabindex:"-1"},[t("Rows, columns and filters "),e("a",{class:"header-anchor",href:"#rows-columns-and-filters","aria-hidden":"true"},"#")],-1),k=e("p",null,[t("Each exploration has 3 dimension areas: rows, columns and filters. You can manually select elements or use and existing subset or use a subset expression for row and column dimensions. You can select a single element for each "),e("em",null,"filter"),t(" dimension")],-1),D=e("h2",{id:"rearrange-dimensions",tabindex:"-1"},[t("Rearrange dimensions "),e("a",{class:"header-anchor",href:"#rearrange-dimensions","aria-hidden":"true"},"#")],-1),T=e("p",null,[t("You can move dimensions between areas (rows, columns and titles) or up and down within an area (to change the order of nesting) using the dimension context menu: "),e("img",{src:i,alt:"img"})],-1),E=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"Row and column dimensions"),e("p",null,"You should have at least 1 row and 1 column dimension.")],-1),M=e("h2",{id:"filter-elements",tabindex:"-1"},[t("Filter elements "),e("a",{class:"header-anchor",href:"#filter-elements","aria-hidden":"true"},"#")],-1),X=e("p",null,"Click a filter dimension to select an element. The subset screen will open and the element dropdown field will be activated automatically and you can start typing the element name or simply select it from the list. You can also select a different hierarchy, an existing subset and attribute or use an MDX to control the element list.",-1),O=e("p",null,[e("img",{src:r,alt:"img"})],-1),S=e("p",null,"You can unselect the element by clicking the clear icon on the right",-1),R=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,[t("While typing the element name, hit "),e("em",null,"ENTER"),t(" to select the first highlighted element and close the subset screen.")])],-1),Y=e("h2",{id:"default-elements",tabindex:"-1"},[t("Default elements "),e("a",{class:"header-anchor",href:"#default-elements","aria-hidden":"true"},"#")],-1),I=e("p",null,[t("If you do not select a filter element, TeamOne will use a "),e("em",null,"default element"),t(" for that dimension, which is usually the first top level consolidated element user has access to. "),e("em",null,"Default element"),t(" can also be set by TM1 administrator in "),e("em",null,"}HierarchyProperties"),t(" control cube. Keep in mind, if there is element security defined for a given dimension, users may see a different default element depending on their permissions.")],-1),C=e("h2",{id:"row-and-column-elements",tabindex:"-1"},[t("Row and column elements "),e("a",{class:"header-anchor",href:"#row-and-column-elements","aria-hidden":"true"},"#")],-1),P=e("p",null,"For row and column dimensions you can choose to display elements from an existing subset, use an MDX expression or pick the elements manually",-1),F=e("h3",{id:"subset",tabindex:"-1"},[t("Subset "),e("a",{class:"header-anchor",href:"#subset","aria-hidden":"true"},"#")],-1),$=e("p",null,"Simply select a subset from the Subset list and TeamOne will fetch the elements automatically.",-1),N=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,"If subset has an alias, it will be selected automatically as well")],-1),W=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,'If subset is dynamic, the MDX button color will change to "indigo" and you will be able to see the expression by hovering the mouse of the MDX button')],-1),B=e("h3",{id:"mdx",tabindex:"-1"},[t("MDX "),e("a",{class:"header-anchor",href:"#mdx","aria-hidden":"true"},"#")],-1),G=e("p",null,[t("Use the MDX button to edit the existing MDX expression or create a new one. In the MDX editor you type the expression manually or use the "),e("a",{href:"./functions.html#mdx-mods"},"MDX mods"),t(" buttons at the top to build an expression with no code.")],-1),A=e("p",null,[t("For instance, the next expression will filter all the leaf level "),e("em",null,[e("strong",null,"Organization")]),t(" dimension elements by the "),e("em",null,[e("strong",null,"currency")]),t(" attribute value equal to "),e("em",null,[e("strong",null,"CDN")]),t(" and will select the first 2 elements. You can also use the "),e("em",null,"Convert MDX"),t(" button to get the real MDX:")],-1),L=e("p",null,[e("img",{src:c,alt:"img"})],-1),U=e("p",null,[t("More over you can simply type or copy-paste the elements. Or even use wildcard patterns: "),e("img",{src:d,alt:"img"})],-1),V=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,"MDX expressions are dynamic, meaning the element list will be evaluated upon refreshing exploration data")],-1),j=e("h3",{id:"select-elements",tabindex:"-1"},[t("Select elements "),e("a",{class:"header-anchor",href:"#select-elements","aria-hidden":"true"},"#")],-1),q=e("p",null,"Finally you can select elements manually:",-1),z=e("p",null,[e("img",{src:h,alt:"img"})],-1),H=e("h2",{id:"save-exploration",tabindex:"-1"},[t("Save exploration "),e("a",{class:"header-anchor",href:"#save-exploration","aria-hidden":"true"},"#")],-1),K=e("p",null,[t("Click the "),e("em",null,[e("strong",null,"Save exploration")]),t(" button to save the exploration. Explorations are saved in the current Google Sheets document. Each exploration is linked to the sheet that was active when you created the exploration.")],-1),J=e("h2",{id:"refresh-exploration",tabindex:"-1"},[t("Refresh exploration "),e("a",{class:"header-anchor",href:"#refresh-exploration","aria-hidden":"true"},"#")],-1),Q=e("p",null,[t("Click the "),e("em",null,[e("strong",null,"Refresh data")]),t(" button to run refresh the exploration data on its sheet.")],-1),Z=e("p",null,[e("img",{src:u,alt:"img"})],-1),ee=[p,_,x,g,f,b,y,w,v,k,D,T,E,M,X,O,S,R,Y,I,C,P,F,$,N,W,B,G,A,L,U,V,j,q,z,H,K,J,Q,Z];function te(ne,oe,le,se,ae,ie){return l(),o("div",null,ee)}var de=n(m,[["render",te]]);export{ce as __pageData,de as default};
