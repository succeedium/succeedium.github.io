import{_ as o,c as l,o as s,b as e,d as t}from"./app.cf8bd30a.js";import{_ as i}from"./exploration.dbb4f7ec.js";var a="/teamone/img/explorer/exploration_create.png",r="/teamone/img/explorer/exploration_menu.png",n="/teamone/img/explorer/group_rows.png",c="/teamone/img/explorer/hierarchy_level_indentation.png",u="/teamone/img/explorer/autofit_columns.png",d="/teamone/img/explorer/dimension_menu.png",h="/teamone/img/explorer/filter_dimension.png",m="/teamone/img/explorer/mdx.png",p="/teamone/img/explorer/mdx_element_list.png",_="/teamone/img/explorer/select_elements.png",g="/teamone/img/explorer/save_refresh.png";const Se='{"title":"TeamOne Explorer","description":"","frontmatter":{},"headers":[{"level":2,"title":"Create exploration","slug":"create-exploration"},{"level":2,"title":"Open exploration","slug":"open-exploration"},{"level":2,"title":"Exploration cube","slug":"exploration-cube"},{"level":2,"title":"Include empty rows","slug":"include-empty-rows"},{"level":2,"title":"Include empty columns","slug":"include-empty-columns"},{"level":2,"title":"Groups rows","slug":"groups-rows"},{"level":2,"title":"Hierarchy indentation","slug":"hierarchy-indentation"},{"level":2,"title":"Autofit columns","slug":"autofit-columns"},{"level":2,"title":"Start row and column","slug":"start-row-and-column"},{"level":2,"title":"Rows, columns and filters","slug":"rows-columns-and-filters"},{"level":2,"title":"Rearrange dimensions","slug":"rearrange-dimensions"},{"level":2,"title":"Filter elements","slug":"filter-elements"},{"level":2,"title":"Default elements","slug":"default-elements"},{"level":2,"title":"Row and column elements","slug":"row-and-column-elements"},{"level":3,"title":"Subset","slug":"subset"},{"level":3,"title":"MDX","slug":"mdx"},{"level":3,"title":"Select elements","slug":"select-elements"},{"level":2,"title":"Refresh exploration","slug":"refresh-exploration"}],"relativePath":"doc/explorer.md","lastUpdated":1666841908606}',f={},x=e("h1",{id:"teamone-explorer",tabindex:"-1"},[t("TeamOne Explorer "),e("a",{class:"header-anchor",href:"#teamone-explorer","aria-hidden":"true"},"#")],-1),b=e("p",null,[e("strong",null,"TeamOne Explorer"),t(" is your "),e("em",null,[e("strong",null,"Planning Analytics for Google Sheets")]),t(". You can easily create "),e("em",null,"explorations"),t(" (cube views) by selecting dimensions and elements in the sidebar and the data will be refreshed directly in the Google Sheets grid. "),e("img",{src:i,alt:"img"})],-1),y=e("h2",{id:"create-exploration",tabindex:"-1"},[t("Create exploration "),e("a",{class:"header-anchor",href:"#create-exploration","aria-hidden":"true"},"#")],-1),w=e("p",null,[t("You can open "),e("strong",null,"TeamOne Explorer"),t(" from the sidebar using the "),e("em",null,[e("strong",null,"Explorer")]),t(" button on first tab. When you create a new exploration it becomes linked to the current open sheet and gets the same name as the sheet. When you open the "),e("em",null,[e("strong",null,"Explorer")]),t(" screen, it will load the current sheet exploration if it exists, otherwise you will be able to create a new exploration or select an existing one to open. "),e("img",{src:a,alt:"img"})],-1),v=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"System cubes"),e("p",null,[t("You can select system cubes by selecting "),e("em",null,"Show system objects"),t(" from the menu")])],-1),k=e("h2",{id:"open-exploration",tabindex:"-1"},[t("Open exploration "),e("a",{class:"header-anchor",href:"#open-exploration","aria-hidden":"true"},"#")],-1),T=e("p",null,[t("When you click the "),e("em",null,[e("strong",null,"Explorer")]),t(" button, it will load the current sheet exploration if it exists, otherwise you will be able to create a new exploration for the current sheet. To open a different exploration, you can either switch to the sheet you want to open the exploration for and click the "),e("em",null,[e("strong",null,"Explorer")]),t(" button or you can do it using the "),e("em",null,"Other explorations"),t(" menu option. TeamOne will automatically switch to the corresponding sheet for you. "),e("img",{src:r,alt:"img"})],-1),D=e("h2",{id:"exploration-cube",tabindex:"-1"},[t("Exploration cube "),e("a",{class:"header-anchor",href:"#exploration-cube","aria-hidden":"true"},"#")],-1),O=e("p",null,"You select the cube name when creating a new exploration or you can change the existing exploration cube in the exploration settings, which you can open from the exploration menu or simply by clicking the cube name.",-1),S=e("p",null,[t("In both cases TeamOne will build a sample exploration for you by selecting the last 2 dimensions for your rows and columns and using "),e("a",{href:"./functions.html#mdx-mods"},"$ALL"),t(" MDX mod to dynamically select all elements for each dimension.")],-1),I=e("h2",{id:"include-empty-rows",tabindex:"-1"},[t("Include empty rows "),e("a",{class:"header-anchor",href:"#include-empty-rows","aria-hidden":"true"},"#")],-1),M=e("p",null,[t("By default TeamOne will suppress empty rows. Select "),e("em",null,"Include empty rows"),t(" to include elements with no amounts or text data.")],-1),E=e("h2",{id:"include-empty-columns",tabindex:"-1"},[t("Include empty columns "),e("a",{class:"header-anchor",href:"#include-empty-columns","aria-hidden":"true"},"#")],-1),X=e("p",null,[t("By default TeamOne will suppress empty columns. Select "),e("em",null,"Include empty columns"),t(" to include elements with no amounts or text data.")],-1),Y=e("h2",{id:"groups-rows",tabindex:"-1"},[t("Groups rows "),e("a",{class:"header-anchor",href:"#groups-rows","aria-hidden":"true"},"#")],-1),R=e("p",null,[t("By default TeamOne will group rows elements (print distinct row element names). Uncheck the "),e("em",null,"Group rows"),t(" option if you prefer to repeat all the row elements. "),e("img",{src:n,alt:"img"})],-1),B=e("h2",{id:"hierarchy-indentation",tabindex:"-1"},[t("Hierarchy indentation "),e("a",{class:"header-anchor",href:"#hierarchy-indentation","aria-hidden":"true"},"#")],-1),P=e("p",null,[t("By default TeamOne will indent rows elements by the hiearchy level. Uncheck the "),e("em",null,"Hierarchy indentation"),t(" option if you prefer to print the rows elements without indentation. "),e("img",{src:c,alt:"img"})],-1),A=e("h2",{id:"autofit-columns",tabindex:"-1"},[t("Autofit columns "),e("a",{class:"header-anchor",href:"#autofit-columns","aria-hidden":"true"},"#")],-1),C=e("p",null,[t("By default TeamOne will autoresize columns to fit the content. Uncheck the "),e("em",null,"Autofit columns"),t(" option if you prefer to keep the current columns width. "),e("img",{src:u,alt:"img"})],-1),F=e("h2",{id:"start-row-and-column",tabindex:"-1"},[t("Start row and column "),e("a",{class:"header-anchor",href:"#start-row-and-column","aria-hidden":"true"},"#")],-1),G=e("p",null,[t("By default TeamOne will print the exploration starting from the first (A1) cell. Use "),e("em",null,"Start row"),t(" and "),e("em",null,"Start column"),t(" to control the beginning of the exploration output. "),e("img",{src:n,alt:"img"})],-1),U=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,[t("You can add your custom content such as a title or other calculations before the "),e("em",null,"Start row"),t(" or even after the exploration last row")])],-1),$=e("h2",{id:"rows-columns-and-filters",tabindex:"-1"},[t("Rows, columns and filters "),e("a",{class:"header-anchor",href:"#rows-columns-and-filters","aria-hidden":"true"},"#")],-1),H=e("p",null,[t("Each exploration has 3 dimension areas: rows, columns and filters. You can manually select elements or use and existing subset or use a subset expression for row and column dimensions. You can select a single element for each "),e("em",null,"filter"),t(" dimension")],-1),N=e("h2",{id:"rearrange-dimensions",tabindex:"-1"},[t("Rearrange dimensions "),e("a",{class:"header-anchor",href:"#rearrange-dimensions","aria-hidden":"true"},"#")],-1),W=e("p",null,[t("You can move dimensions between areas (rows, columns and titles) or up and down within an area (to change the order of nesting) using the dimension context menu: "),e("img",{src:d,alt:"img"})],-1),j=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"Row and column dimensions"),e("p",null,"You should have at least 1 row and 1 column dimension.")],-1),q=e("h2",{id:"filter-elements",tabindex:"-1"},[t("Filter elements "),e("a",{class:"header-anchor",href:"#filter-elements","aria-hidden":"true"},"#")],-1),z=e("p",null,"Click a filter dimension to select an element. The subset screen will open and the element dropdown field will be activated automatically and you can start typing the element name or simply select it from the list. You can also select a different hierarchy, an existing subset and attribute or use an MDX to control the element list.",-1),L=e("p",null,[e("img",{src:h,alt:"img"})],-1),V=e("p",null,"You can unselect the element by clicking the clear icon on the right",-1),K=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,[t("While typing the element name, hit "),e("em",null,"ENTER"),t(" to select the first highlighted element and close the subset screen.")])],-1),J=e("h2",{id:"default-elements",tabindex:"-1"},[t("Default elements "),e("a",{class:"header-anchor",href:"#default-elements","aria-hidden":"true"},"#")],-1),Q=e("p",null,[t("If you do not select a filter element, TeamOne will use a "),e("em",null,"default element"),t(" for that dimension, which is usually the first top level consolidated element user has access to. "),e("em",null,"Default element"),t(" can also be set by TM1 administrator in "),e("em",null,"}HierarchyProperties"),t(" control cube. Keep in mind, if there is element security defined for a given dimension, users may see a different default element depending on their permissions.")],-1),Z=e("h2",{id:"row-and-column-elements",tabindex:"-1"},[t("Row and column elements "),e("a",{class:"header-anchor",href:"#row-and-column-elements","aria-hidden":"true"},"#")],-1),ee=e("p",null,"For row and column dimensions you can choose to display elements from an existing subset, use an MDX expression or pick the elements manually",-1),te=e("h3",{id:"subset",tabindex:"-1"},[t("Subset "),e("a",{class:"header-anchor",href:"#subset","aria-hidden":"true"},"#")],-1),ne=e("p",null,"Simply select a subset from the Subset list and TeamOne will fetch the elements automatically.",-1),oe=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,"If subset has an alias, it will be selected automatically as well")],-1),le=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,'If subset is dynamic, the MDX button color will change to "indigo" and you will be able to see the expression by hovering the mouse of the MDX button')],-1),se=e("h3",{id:"mdx",tabindex:"-1"},[t("MDX "),e("a",{class:"header-anchor",href:"#mdx","aria-hidden":"true"},"#")],-1),ie=e("p",null,[t("Use the MDX button to edit the existing MDX expression or create a new one. In the MDX editor you type the expression manually or use the "),e("a",{href:"./functions.html#mdx-mods"},"MDX mods"),t(" buttons at the top to build an expression with no code.")],-1),ae=e("p",null,[t("For instance, the next expression will filter all the leaf level "),e("em",null,[e("strong",null,"Organization")]),t(" dimension elements by the "),e("em",null,[e("strong",null,"currency")]),t(" attribute value equal to "),e("em",null,[e("strong",null,"CDN")]),t(" and will select the first 2 elements. You can also use the "),e("em",null,"Convert MDX"),t(" button to get the real MDX:")],-1),re=e("p",null,[e("img",{src:m,alt:"img"})],-1),ce=e("p",null,[t("More over you can simply type or copy-paste the elements. Or even use wildcard patterns: "),e("img",{src:p,alt:"img"})],-1),ue=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,"MDX expressions are dynamic, meaning the element list will be evaluated upon refreshing exploration data")],-1),de=e("h3",{id:"select-elements",tabindex:"-1"},[t("Select elements "),e("a",{class:"header-anchor",href:"#select-elements","aria-hidden":"true"},"#")],-1),he=e("p",null,"Finally you can select elements manually:",-1),me=e("p",null,[e("img",{src:_,alt:"img"})],-1),pe=e("h2",{id:"refresh-exploration",tabindex:"-1"},[t("Refresh exploration "),e("a",{class:"header-anchor",href:"#refresh-exploration","aria-hidden":"true"},"#")],-1),_e=e("p",null,[t("Click the "),e("em",null,[e("strong",null,"Refresh data")]),t(" button to refresh the exploration data on its sheet. This will also save all your exploration changes. Depending on the exploration data volume it may take time to fetch and print all the data. For large explorations TeamOne will split data requests into multiple packages, up to 10000 cells each. Each result will be printed on the sheet as soon as it is received. Also keep in mind Google Sheets limit of 10 million cells per document.")],-1),ge=e("p",null,[e("img",{src:g,alt:"img"})],-1),fe=[x,b,y,w,v,k,T,D,O,S,I,M,E,X,Y,R,B,P,A,C,F,G,U,$,H,N,W,j,q,z,L,V,K,J,Q,Z,ee,te,ne,oe,le,se,ie,ae,re,ce,ue,de,he,me,pe,_e,ge];function xe(be,ye,we,ve,ke,Te){return s(),l("div",null,fe)}var Ie=o(f,[["render",xe]]);export{Se as __pageData,Ie as default};
