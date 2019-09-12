(window.webpackJsonpnewdec=window.webpackJsonpnewdec||[]).push([[0],{63:function(e,a,t){},78:function(e,a,t){e.exports=t(89)},83:function(e,a,t){},84:function(e,a,t){},89:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(9),o=t.n(r),c=(t(83),t(22)),i=t(23),m=t(26),s=t(24),u=t(27),p=(t(84),t(29)),d=t(126),E=t(127),g=t(129),h=t(133),v=t(134),f=t(137),b=t(65),_=t(4),N=t(91),y=Object(_.a)(function(e){return{root:{"label + &":{marginTop:e.spacing(3)}},input:{borderRadius:4,minWidth:"183px",position:"relative",backgroundColor:e.palette.background.paper,border:"1px solid #ced4da",fontSize:16,padding:"10px 26px 10px 12px",transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["Roboto",'"Helvetica Neue"',"Arial","sans-serif"].join(","),"&:hover":{borderRadius:4,borderColor:"#212121"},"&:focus":{borderRadius:4,borderColor:"#2f9aef",boxShadow:"0 0 0 0.5px #2f9aef"}}}})(N.a),D=t(139),k=t(128);t(63);function C(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,l)}return t}var w=function(e){function a(){var e,t;Object(c.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(n)))).state={nameEN:"",nameDE:"",nameRU:"",nameFR:""},t.onInputChange=function(e){return function(a){t.setState(Object(p.a)({},e,a.target.value))}},t.onClose=function(){var e=t.props,a=e.currentGroup,l=e.hideDialog;t.setState(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?C(t,!0).forEach(function(a){Object(p.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}({},a)),l()},t.onSave=function(){var e=t.props,a=e.onSave,l=e.changeGroupSelect,n=e.hideDialog;t.state.nameEN.trim().length&&(a({nameEN:t.state.nameEN.trim(),nameDE:t.state.nameDE.trim(),nameRU:t.state.nameRU.trim(),nameFR:t.state.nameFR.trim()}),l(t.state.nameEN.trim()),n())},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.isOpen,t=e.isEditMode,l=this.onInputChange,r=this.onSave,o=this.onClose,c="".concat(t?"Edit":"Create"," new group"),i=t?"Save":"Create";return n.a.createElement(D.a,{className:"paragraphDecorators-dialog",open:a,onClose:o,fullWidth:!0,maxWidth:"md"},n.a.createElement(d.a,null,c),n.a.createElement(E.a,null,n.a.createElement("div",{className:"dialogGrid dialogGrid_2cols"},n.a.createElement("span",null,"Name EN"),n.a.createElement(v.a,{variant:"outlined",margin:"dense",onChange:l("nameEN"),value:this.state.nameEN}),n.a.createElement("span",null,"Name DE"),n.a.createElement(v.a,{variant:"outlined",margin:"dense",onChange:l("nameDE"),value:this.state.nameDE}),n.a.createElement("span",null,"Name RU"),n.a.createElement(v.a,{variant:"outlined",margin:"dense",onChange:l("nameRU"),value:this.state.nameRU}),n.a.createElement("span",null,"Name FR"),n.a.createElement(v.a,{variant:"outlined",margin:"dense",onChange:l("nameFR"),value:this.state.nameFR}))),n.a.createElement(k.a,null,n.a.createElement(g.a,{onClick:o,color:"default"},"Cancel"),n.a.createElement(g.a,{onClick:r,color:"primary"},i)))}}]),a}(n.a.Component),S=function(e){function a(){var e,t;Object(c.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(n)))).state={isOpen:!1,groupSelect:"",newGroup:{}},t.handleClick=function(){t.setState(function(e){return{isOpen:!e.isOpen}})},t.onSave=function(e){t.setState({newGroup:e})},t.changeGroupSelect=function(e){t.setState({groupSelect:e})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=this.state.newGroup.nameEN,t=!!a,l=this.state.groupSelect;return n.a.createElement("div",{className:"dialogGrid dialogGrid_2cols dialogGrid_rightAlignedLabels"},n.a.createElement("span",null,"Key"),n.a.createElement(v.a,{variant:"outlined",margin:"dense"}),n.a.createElement("span",null,"Group"),n.a.createElement("div",null,n.a.createElement(b.a,{input:n.a.createElement(y,null),value:l,onChange:function(a){e.changeGroupSelect(a.target.value)}},n.a.createElement("option",{value:""},"..."),t&&n.a.createElement("option",{className:"newGroupOption",value:a},a),n.a.createElement("option",{value:"0"},"Text"),n.a.createElement("option",{value:"1"},"Heading"),n.a.createElement("option",{value:"2"},"Heading Heading Heading Heading")),!(t&&l!==a)&&n.a.createElement(g.a,{color:"primary",className:"textButton",onClick:this.handleClick},t?"Edit new group":"+New")),n.a.createElement("span",null,"Active"),n.a.createElement("div",null,n.a.createElement(f.a,{color:"primary"})),n.a.createElement("span",null,"Style name (English)"),n.a.createElement(v.a,{variant:"outlined",margin:"dense"}),n.a.createElement("span",null,"Style name (German)"),n.a.createElement(v.a,{variant:"outlined",margin:"dense"}),n.a.createElement("span",null,"Style name (Russian)"),n.a.createElement(v.a,{variant:"outlined",margin:"dense"}),n.a.createElement("span",null,"Style name (French)"),n.a.createElement(v.a,{variant:"outlined",margin:"dense"}),n.a.createElement(w,{isOpen:this.state.isOpen,hideDialog:function(){e.setState({isOpen:!1})},onSave:this.onSave,isEditMode:t,currentGroup:this.state.newGroup,changeGroupSelect:this.changeGroupSelect}))}}]),a}(n.a.Component),x=function(e){return n.a.createElement("div",{className:"dialogGrid dialogGrid_2cols"},n.a.createElement("span",null,"Style name in WORD"),n.a.createElement(v.a,{variant:"outlined",margin:"dense"}),n.a.createElement("span",null,"Soft return"),n.a.createElement("div",null,n.a.createElement(f.a,{color:"primary"})))},T=Object(_.a)(function(e){return{root:{"label + &":{marginTop:e.spacing(3)}},input:{borderRadius:4,position:"relative",backgroundColor:e.palette.background.paper,border:"1px solid #ced4da",fontSize:16,padding:"10px 26px 10px 12px",transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["Roboto",'"Helvetica Neue"',"Arial","sans-serif"].join(","),"&:hover":{borderRadius:4,borderColor:"#212121"},"&:focus":{borderRadius:4,borderColor:"#2f9aef",boxShadow:"0 0 0 0.5px #2f9aef"}}}})(N.a),O=[{name:"Decimal",value:"decimal"},{name:"Decimal leading zero",value:"decimal-leading-zero"},{name:"Lower alpha",value:"lower-alpha"},{name:"Lower greek",value:"lower-greek"},{name:"Lower latin",value:"lower-latin"},{name:"Lower roman",value:"lower-roman"},{name:"Upper alpha",value:"upper-alpha"},{name:"Upper greek",value:"upper-greek"},{name:"Upper latin",value:"upper-latin"},{name:"Upper roman",value:"upper-roman"}],B=[{key:"merge",value:"Merge"},{key:"apply_other_pd",value:"Apply other PD"},{key:"remove_pd",value:"Remove PD"},{key:"nothing",value:"Nothing"}],R=[{key:"apply_other_pd",value:"Apply other PD"},{key:"create_new_section",value:"Create new section"},{key:"apply_default_pd",value:"Apply default PD"},{key:"nothing",value:"Nothing"}],F=[{name:"...",value:null},{name:"Text 0",value:"quick_text_0"},{name:"Text 1",value:"quick_text_1"},{name:"Text 2",value:"quick_text_2"},{name:"Text 3",value:"quick_text_3"},{name:"Text 4",value:"quick_text_4"},{name:"Text 5",value:"quick_text_5"}],j=function(e){return n.a.createElement("form",{className:"paragraphDecorators-dialog__form"},n.a.createElement("ul",{className:"paragraphDecorators-dialog__field-list"},n.a.createElement("div",{className:"paragraphDecorators-dialog__col"},n.a.createElement("li",null,n.a.createElement("span",null,"Identational level")),n.a.createElement("li",{className:"paragraphDecorators-dialog__fraction-title"},n.a.createElement("h4",null,"BACKSPACE")),n.a.createElement("li",null,n.a.createElement("span",null,"At the beginning of a section with content")),n.a.createElement("li",null,n.a.createElement("span",null,"At the beginning of a section WITHOUT content")),n.a.createElement("li",{className:"paragraphDecorators-dialog__fraction-title"},n.a.createElement("h4",null,"RETURN")),n.a.createElement("li",null,n.a.createElement("span",null,"Create new section below")),n.a.createElement("li",null,n.a.createElement("span",null,"Style of next section")),n.a.createElement("li",null,n.a.createElement("span",null,"In empty section change current style to")),n.a.createElement("li",{className:"paragraphDecorators-dialog__fraction-title"},n.a.createElement("h4",null,"TAB / SHIFT+TAB")),n.a.createElement("li",null,n.a.createElement("span",null,"TAB \u2013 change current style to")),n.a.createElement("li",null,n.a.createElement("span",null,"SHIFT+TAB \u2013 change current style to"))),n.a.createElement("div",{className:"paragraphDecorators-dialog__col"},n.a.createElement("li",null,n.a.createElement(b.a,{input:n.a.createElement(T,null)},n.a.createElement("option",{value:null},"..."),n.a.createElement("option",{value:"0"},"0"),n.a.createElement("option",{value:"1"},"1"),n.a.createElement("option",{value:"2"},"2"),n.a.createElement("option",{value:"3"},"3"),n.a.createElement("option",{value:"4"},"4"),n.a.createElement("option",{value:"5"},"5"))),n.a.createElement("li",{className:"paragraphDecorators-dialog__fraction-title"}),n.a.createElement("li",null,n.a.createElement(b.a,{input:n.a.createElement(y,null)},B.map(function(e){return n.a.createElement("option",{value:e.key,key:"backSpace ".concat(e.key)},e.value)}))),n.a.createElement("li",null,n.a.createElement(b.a,{input:n.a.createElement(y,null)},R.map(function(e){return n.a.createElement("option",{value:e.key,key:"backSpace ".concat(e.key)},e.value)}))),n.a.createElement("li",{className:"paragraphDecorators-dialog__fraction-title"}),n.a.createElement("li",null,n.a.createElement(f.a,{color:"primary"})),n.a.createElement("li",null,n.a.createElement(b.a,{input:n.a.createElement(y,null)},F.map(function(e){return n.a.createElement("option",{value:e.value,key:e.value},e.name)}))),n.a.createElement("li",null,n.a.createElement(b.a,{input:n.a.createElement(y,null)},F.map(function(e){return n.a.createElement("option",{value:e.value,key:e.value},e.name)}))),n.a.createElement("li",{className:"paragraphDecorators-dialog__fraction-title"}),n.a.createElement("li",null,n.a.createElement(b.a,{input:n.a.createElement(y,null)},F.map(function(e){return n.a.createElement("option",{value:e.value,key:e.value},e.name)}))),n.a.createElement("li",null,n.a.createElement(b.a,{input:n.a.createElement(y,null)},F.map(function(e){return n.a.createElement("option",{value:e.value,key:e.value},e.name)}))))))},P=t(130),A=function(e){var a=e.isList,t=e.listType,l=e.changeIsList,r=e.changeListType,o=e.bulletField,c=e.setBulletField;return n.a.createElement("form",{className:"paragraphDecorators-dialog__form"},n.a.createElement("ul",{className:"paragraphDecorators-dialog__field-list"},n.a.createElement("div",{className:"paragraphDecorators-dialog__col"},n.a.createElement("li",null,n.a.createElement("span",null,"Is it a list?")),a&&n.a.createElement(n.a.Fragment,null,n.a.createElement("li",null,n.a.createElement("span",null,"List name")),n.a.createElement("li",null,n.a.createElement("span",null,"Order level")),n.a.createElement("li",null,n.a.createElement("span",null,"Prefix")),n.a.createElement("li",null,n.a.createElement("span",null,"Suffix")),n.a.createElement("li",null,n.a.createElement("span",null,"Suffix distance")),n.a.createElement("li",null,n.a.createElement("span",null,"Magic Tabs")),n.a.createElement("li",null,n.a.createElement("span",null,"Type of list")))),n.a.createElement("div",{className:"paragraphDecorators-dialog__col"},n.a.createElement("li",null,n.a.createElement(f.a,{color:"primary",checked:a,onChange:l})),a&&n.a.createElement(n.a.Fragment,null,n.a.createElement("li",null,n.a.createElement(v.a,{variant:"outlined",margin:"dense"})),n.a.createElement("li",null,n.a.createElement(b.a,{input:n.a.createElement(T,null)},n.a.createElement("option",{value:null},"..."),n.a.createElement("option",{value:"0"},"0"),n.a.createElement("option",{value:"1"},"1"),n.a.createElement("option",{value:"2"},"2"),n.a.createElement("option",{value:"3"},"3"),n.a.createElement("option",{value:"4"},"4"),n.a.createElement("option",{value:"5"},"5"))),n.a.createElement("li",null,n.a.createElement(v.a,{variant:"outlined",margin:"dense"})),n.a.createElement("li",null,n.a.createElement(v.a,{variant:"outlined",margin:"dense"})),n.a.createElement("li",null,n.a.createElement(b.a,{input:n.a.createElement(T,null)},n.a.createElement("option",{value:"0.5"},"0.25"),n.a.createElement("option",{value:"0.5"},"0.5"),n.a.createElement("option",{value:"0.75"},"0.75"),n.a.createElement("option",{value:"1"},"1"),n.a.createElement("option",{value:"1.25"},"1.25"),n.a.createElement("option",{value:"1.5"},"1.5"),n.a.createElement("option",{value:"1.75"},"1.75"),n.a.createElement("option",{value:"2"},"2")),n.a.createElement(P.a,{variant:"filled",position:"end"},"cm")),n.a.createElement("li",null,n.a.createElement(f.a,{color:"primary"})),n.a.createElement("li",null,n.a.createElement(b.a,{value:t,onChange:r,input:n.a.createElement(y,null)},n.a.createElement("option",{value:"unordered"},"Unordered"),n.a.createElement("option",{value:"ordered"},"Ordered"))),"unordered"===t?n.a.createElement(n.a.Fragment,null,n.a.createElement("li",{className:"paragraphDecorators-dialog__fraction-title"},n.a.createElement("span",null,"Bullet character"))):n.a.createElement(n.a.Fragment,null,n.a.createElement("li",{className:"paragraphDecorators-dialog__fraction-title"},n.a.createElement("span",null,"Numbering style")),n.a.createElement("li",null,n.a.createElement("span",null,"Continue numbering after interruption")),n.a.createElement("li",null,n.a.createElement("span",null,"Allow restart numbering")),n.a.createElement("li",null,n.a.createElement("span",null,"Include previous levels from"))))),n.a.createElement("div",{className:"paragraphDecorators-dialog__col "},n.a.createElement("li",null),a&&n.a.createElement(n.a.Fragment,null,n.a.createElement("li",null),n.a.createElement("li",null),n.a.createElement("li",null),n.a.createElement("li",null),n.a.createElement("li",null),n.a.createElement("li",null),n.a.createElement("li",null),"unordered"===t?n.a.createElement(n.a.Fragment,null,n.a.createElement("li",{className:"paragraphDecorators-dialog__fraction-title"},n.a.createElement(v.a,{variant:"outlined",margin:"dense",className:"paragraphDecorators-dialog__bullet-input",onChange:c,value:o}),n.a.createElement("span",{className:"paragraphDecorators-dialog__grey-text"},o?"Unicode: ".concat(o.charCodeAt(0).toString(16)):""))):n.a.createElement(n.a.Fragment,null,n.a.createElement("li",{className:"paragraphDecorators-dialog__fraction-title"},n.a.createElement(b.a,{input:n.a.createElement(T,null)},O.map(function(e){return n.a.createElement("option",{value:e.value,key:e.value},e.name)}))),n.a.createElement("li",null,n.a.createElement(f.a,{color:"primary"})),n.a.createElement("li",null,n.a.createElement(f.a,{color:"primary",checked:!0})),n.a.createElement("li",null,n.a.createElement(b.a,{input:n.a.createElement(T,null)},n.a.createElement("option",{value:null},"..."),n.a.createElement("option",{value:"0"},"0"),n.a.createElement("option",{value:"1"},"1"),n.a.createElement("option",{value:"2"},"2"),n.a.createElement("option",{value:"3"},"3"),n.a.createElement("option",{value:"4"},"4"),n.a.createElement("option",{value:"5"},"5")),n.a.createElement("span",{className:"paragraphDecorators-dialog__grey-text"},"Preview: \u0410.1.1")))))))},I=function(e){return n.a.createElement("form",{className:"paragraphDecorators-dialog__form"},n.a.createElement("ul",{className:"paragraphDecorators-dialog__field-list"},n.a.createElement("div",{className:"paragraphDecorators-dialog__col"},n.a.createElement("li",null,n.a.createElement("span",null,"Reference group"))),n.a.createElement("div",{className:"paragraphDecorators-dialog__col"},n.a.createElement("li",null,n.a.createElement(b.a,{input:n.a.createElement(y,null)},n.a.createElement("option",{value:null},"none"),n.a.createElement("option",{value:"0"},"Reference group 1"),n.a.createElement("option",{value:"1"},"Reference group 2")),n.a.createElement(g.a,{color:"primary",className:"paragraphDecorators-dialog__text-button"},"+New")),n.a.createElement("li",null)),n.a.createElement("div",{className:"paragraphDecorators-dialog__col "})))},G=t(131),L=t(138),H=t(140),U=function(e){return"string"!==typeof e||6!==e.length&&3!==e.length?"FFF":e},W=function(e){var a=e.verticalAlign,t=e.textTransform,l=e.changeVerticalAlign,r=e.changeTextTransform,o=e.fontColor,c=e.changeFontColor,i=U(o),m={backgroundColor:"#".concat(i)};return n.a.createElement("form",{className:"paragraphDecorators-dialog__form"},n.a.createElement("ul",{className:"paragraphDecorators-dialog__field-list"},n.a.createElement("div",{className:"paragraphDecorators-dialog__col"},n.a.createElement("li",null,n.a.createElement("span",null,"Font")),n.a.createElement("li",null,n.a.createElement("span",null,"Alignment")),n.a.createElement("li",null,n.a.createElement("span",null,"Font size")),n.a.createElement("li",null,n.a.createElement("span",null,"Font color name")),n.a.createElement("li",null,n.a.createElement("span",null,"Font color HEX")),n.a.createElement("li",{className:"paragraphDecorators-dialog__fraction-title"},n.a.createElement("span",null,"Stylings")),n.a.createElement("li",null,n.a.createElement("span",null,"Sub/Superscript")),n.a.createElement("li",null,n.a.createElement("span",null,"Text transform"))),n.a.createElement("div",{className:"paragraphDecorators-dialog__col"},n.a.createElement("li",null,n.a.createElement(b.a,{input:n.a.createElement(y,null)},n.a.createElement("option",{value:"Helvetica New"},"Helvetica New"),n.a.createElement("option",{value:"Georgia"},"Georgia"),n.a.createElement("option",{value:"Roboto"},"Roboto"),n.a.createElement("option",{value:"Open Sans"},"Open Sans"))),n.a.createElement("li",null,n.a.createElement(b.a,{input:n.a.createElement(y,null)},n.a.createElement("option",{value:"left"},"Left"),n.a.createElement("option",{value:"center"},"Center"),n.a.createElement("option",{value:"right"},"Right"))),n.a.createElement("li",null,n.a.createElement(b.a,{input:n.a.createElement(T,null)},n.a.createElement("option",{value:"12"},"12"),n.a.createElement("option",{value:"14"},"14"),n.a.createElement("option",{value:"16"},"16")),n.a.createElement(P.a,{variant:"filled",position:"end"},"pt")),n.a.createElement("li",null,n.a.createElement(v.a,{variant:"outlined",margin:"dense"})),n.a.createElement("li",null,n.a.createElement(v.a,{variant:"outlined",margin:"dense",className:"paragraphDecorators-dialog__number-input",InputProps:{startAdornment:n.a.createElement(P.a,{position:"start"},"#")},value:o,onChange:c}),n.a.createElement("div",{className:"paragraphDecorators-dialog__color-sample",style:m})),n.a.createElement("li",{className:"paragraphDecorators-dialog__fraction-title"},n.a.createElement("div",{className:"paragraphDecorators-dialog__labeled-checkbox"},n.a.createElement(G.a,{control:n.a.createElement(f.a,{color:"primary"}),label:"Bold",labelPlacement:"end"})),n.a.createElement("div",{className:"paragraphDecorators-dialog__labeled-checkbox"},n.a.createElement(G.a,{control:n.a.createElement(f.a,{color:"primary"}),label:"Italic",labelPlacement:"end"})),n.a.createElement("div",{className:"paragraphDecorators-dialog__labeled-checkbox"},n.a.createElement(G.a,{control:n.a.createElement(f.a,{color:"primary"}),label:"Underlined",labelPlacement:"end"})),n.a.createElement("div",{className:"paragraphDecorators-dialog__labeled-checkbox"},n.a.createElement(G.a,{control:n.a.createElement(f.a,{color:"primary"}),label:"Stroke",labelPlacement:"end"}))),n.a.createElement("li",null,n.a.createElement(H.a,{"aria-label":"verticalAlign",name:"verticalAlign",value:a,onChange:l,row:!0},n.a.createElement("div",{className:"paragraphDecorators-dialog__labeled-checkbox"},n.a.createElement(G.a,{value:"",control:n.a.createElement(L.a,{color:"primary"}),label:"No",labelPlacement:"end"})),n.a.createElement("div",{className:"paragraphDecorators-dialog__labeled-checkbox"},n.a.createElement(G.a,{value:"subscript",control:n.a.createElement(L.a,{color:"primary"}),label:"Subscript",labelPlacement:"end"})),n.a.createElement("div",{className:"paragraphDecorators-dialog__labeled-checkbox"},n.a.createElement(G.a,{value:"superscript",control:n.a.createElement(L.a,{color:"primary"}),label:"Superscript",labelPlacement:"end"})))),n.a.createElement("li",null,n.a.createElement(H.a,{"aria-label":"textTransform",name:"textTransform",value:t,onChange:r,row:!0},n.a.createElement("div",{className:"paragraphDecorators-dialog__labeled-checkbox"},n.a.createElement(G.a,{value:"",control:n.a.createElement(L.a,{color:"primary"}),label:"No",labelPlacement:"end"})),n.a.createElement("div",{className:"paragraphDecorators-dialog__labeled-checkbox"},n.a.createElement(G.a,{value:"lowercase",control:n.a.createElement(L.a,{color:"primary"}),label:"Lowercase",labelPlacement:"end"})),n.a.createElement("div",{className:"paragraphDecorators-dialog__labeled-checkbox"},n.a.createElement(G.a,{value:"uppercase",control:n.a.createElement(L.a,{color:"primary"}),label:"Uppercase",labelPlacement:"end"}))))),n.a.createElement("div",{className:"paragraphDecorators-dialog__col "})))},q=function(e){var a=e.firstRowIndent,t=e.otherRowsIndent,l=e.lineSpacing,r=e.changeFirstRowIndent,o=e.changeOtherRowsIndent,c=e.changeLineSpacing;return n.a.createElement("form",{className:"paragraphDecorators-dialog__form"},n.a.createElement("ul",{className:"paragraphDecorators-dialog__field-list"},n.a.createElement("div",{className:"paragraphDecorators-dialog__col"},n.a.createElement("li",null,n.a.createElement("span",null,"Margin top")),n.a.createElement("li",null,n.a.createElement("span",null,"Margin bottom")),n.a.createElement("li",null,n.a.createElement("span",null,"1st row indent")),n.a.createElement("li",null,n.a.createElement("span",null,"Other rows indent")),n.a.createElement("li",null,n.a.createElement("span",null,"Line spacing"))),n.a.createElement("div",{className:"paragraphDecorators-dialog__col"},n.a.createElement("li",null,n.a.createElement(b.a,{input:n.a.createElement(T,null)},n.a.createElement("option",{value:"6"},"6"),n.a.createElement("option",{value:"8"},"8"),n.a.createElement("option",{value:"10"},"10")),n.a.createElement(P.a,{variant:"filled",position:"end"},"pt")),n.a.createElement("li",null,n.a.createElement(b.a,{input:n.a.createElement(T,null)},n.a.createElement("option",{value:"6"},"6"),n.a.createElement("option",{value:"8"},"8"),n.a.createElement("option",{value:"10"},"10")),n.a.createElement(P.a,{variant:"filled",position:"end"},"pt")),n.a.createElement("li",null,n.a.createElement(v.a,{variant:"outlined",margin:"dense",className:"paragraphDecorators-dialog__number-input",value:a,onChange:r}),n.a.createElement(P.a,{variant:"filled",position:"end"},"cm")),n.a.createElement("li",null,n.a.createElement(v.a,{variant:"outlined",margin:"dense",className:"paragraphDecorators-dialog__number-input",value:t,onChange:o}),n.a.createElement(P.a,{variant:"filled",position:"end"},"cm")),n.a.createElement("li",null,n.a.createElement(v.a,{variant:"outlined",margin:"dense",className:"paragraphDecorators-dialog__number-input",value:l,onChange:c}),n.a.createElement(P.a,{variant:"filled",position:"end"},"pt"))),n.a.createElement("div",{className:"paragraphDecorators-dialog__col "})))},M=function(e){var a=e.leftBorder,t=e.rightBorder,l=e.topBorder,r=e.bottomBorder,o=e.changeLeftBorder,c=e.changeRightBorder,i=e.changeTopBorder,m=e.changeBottomBorder,s=e.borderColor,u=e.changeBorderColor,p=e.borderThickness,d=e.changeBorderThickness,E=U(s),g={backgroundColor:"#".concat(E)},h="FFF"!==E?"#".concat(E):"#dc004e",b=p&&!isNaN(parseFloat(p))&&parseFloat(p)<=15?"".concat(p,"pt"):"1.3px",_={borderLeft:"".concat(b," solid ").concat(a?h:"white"),borderRight:"".concat(b," solid ").concat(t?h:"white"),borderTop:"".concat(b," solid ").concat(l?h:"white"),borderBottom:"".concat(b," solid ").concat(r?h:"white")};return n.a.createElement("form",{className:"paragraphDecorators-dialog__form"},n.a.createElement("ul",{className:"paragraphDecorators-dialog__field-list"},n.a.createElement("div",{className:"paragraphDecorators-dialog__col"},n.a.createElement("div",{className:"paragraphDecorators-dialog__border-directions"},n.a.createElement("div",{className:"top-row"},n.a.createElement("span",{className:"paragraphDecorators-dialog__direction-span paragraphDecorators-dialog__top-direction-span"},"Top")),n.a.createElement("div",{className:"center-row"},n.a.createElement("span",{className:"paragraphDecorators-dialog__direction-span paragraphDecorators-dialog__left-direction-span"},"Left"),n.a.createElement("div",{className:"center-square"},n.a.createElement("div",{className:"center-cell"}),n.a.createElement("div",{className:"center-cell center-cell-top"},n.a.createElement("li",null,n.a.createElement(f.a,{className:"checkbox-top",checked:l,onChange:i,color:"primary"}))),n.a.createElement("div",{className:"center-cell"}),n.a.createElement("div",{className:"center-cell center-cell-left"},n.a.createElement("li",null,n.a.createElement(f.a,{className:"checkbox-left",checked:a,onChange:o,color:"primary"}))),n.a.createElement("div",{className:"center-cell"},n.a.createElement("div",{className:"preview",style:_},n.a.createElement("span",null,"Text"))),n.a.createElement("div",{className:"center-cell center-cell-right"},n.a.createElement("li",null,n.a.createElement(f.a,{className:"checkbox-right",checked:t,onChange:c,color:"primary"}))),n.a.createElement("div",{className:"center-cell"}),n.a.createElement("div",{className:"center-cell center-cell-bottom"},n.a.createElement("li",null,n.a.createElement(f.a,{className:"checkbox-bottom",checked:r,onChange:m,color:"primary"}))),n.a.createElement("div",{className:"center-cell"})),n.a.createElement("span",{className:"paragraphDecorators-dialog__direction-span paragraphDecorators-dialog__right-direction-span"},"Right")),n.a.createElement("div",{className:"bottom-row"},n.a.createElement("span",{className:"paragraphDecorators-dialog__direction-span paragraphDecorators-dialog__bottom-direction-span"},"Bottom")))),n.a.createElement("div",{className:"paragraphDecorators-dialog__col"},n.a.createElement("li",null,n.a.createElement("span",null,"Frame color name")),n.a.createElement("li",null,n.a.createElement("span",null,"Frame color HEX")),n.a.createElement("li",null,n.a.createElement("span",null,"Frame thickness")),n.a.createElement("li",null,n.a.createElement("span",null,"Connect to previous"))),n.a.createElement("div",{className:"paragraphDecorators-dialog__col"},n.a.createElement("li",null,n.a.createElement(v.a,{variant:"outlined",margin:"dense"})),n.a.createElement("li",null,n.a.createElement(v.a,{variant:"outlined",margin:"dense",className:"paragraphDecorators-dialog__number-input",InputProps:{startAdornment:n.a.createElement(P.a,{position:"start"},"#")},value:s,onChange:u}),n.a.createElement("div",{className:"paragraphDecorators-dialog__color-sample",style:g})),n.a.createElement("li",null,n.a.createElement(v.a,{variant:"outlined",margin:"dense",className:"paragraphDecorators-dialog__number-input",value:p,onChange:d}),n.a.createElement(P.a,{variant:"filled",position:"end"},"pt")),n.a.createElement("li",null,n.a.createElement(f.a,{color:"primary"})))))},z=function(e){var a=e.fillingColor,t=e.changeFillingColor,l=U(a),r={backgroundColor:"#".concat(l)};return n.a.createElement("form",{className:"paragraphDecorators-dialog__form"},n.a.createElement("ul",{className:"paragraphDecorators-dialog__field-list"},n.a.createElement("div",{className:"paragraphDecorators-dialog__col"},n.a.createElement("li",null,n.a.createElement("span",null,"Background color name")),n.a.createElement("li",null,n.a.createElement("span",null,"Background color HEX"))),n.a.createElement("div",{className:"paragraphDecorators-dialog__col"},n.a.createElement("li",null,n.a.createElement(v.a,{variant:"outlined",margin:"dense"})),n.a.createElement("li",null,n.a.createElement(v.a,{variant:"outlined",margin:"dense",className:"paragraphDecorators-dialog__number-input",InputProps:{startAdornment:n.a.createElement(P.a,{position:"start"},"#")},value:a,onChange:t}),n.a.createElement("div",{className:"paragraphDecorators-dialog__color-sample",style:r}))),n.a.createElement("div",{className:"paragraphDecorators-dialog__col "})))},K=function(e){return n.a.createElement("form",{className:"paragraphDecorators-dialog__form"},n.a.createElement("ul",{className:"paragraphDecorators-dialog__field-list"},n.a.createElement("div",{className:"paragraphDecorators-dialog__col"},n.a.createElement("li",null,n.a.createElement("span",null,"ToC indentation"))),n.a.createElement("div",{className:"paragraphDecorators-dialog__col"},n.a.createElement("li",null,n.a.createElement(b.a,{input:n.a.createElement(T,null)},n.a.createElement("option",{value:null},"..."),n.a.createElement("option",{value:"0"},"0"),n.a.createElement("option",{value:"1"},"1"),n.a.createElement("option",{value:"2"},"2"),n.a.createElement("option",{value:"3"},"3"),n.a.createElement("option",{value:"4"},"4"),n.a.createElement("option",{value:"5"},"5")))),n.a.createElement("div",{className:"paragraphDecorators-dialog__col "})))},X=function(e){return n.a.createElement("form",{className:"paragraphDecorators-dialog__form"},n.a.createElement("ul",{className:"paragraphDecorators-dialog__field-list"},n.a.createElement("div",{className:"paragraphDecorators-dialog__col"},n.a.createElement("li",null,n.a.createElement("span",null,"Windows")),n.a.createElement("li",null,n.a.createElement("span",null,"Mac"))),n.a.createElement("div",{className:"paragraphDecorators-dialog__col"},n.a.createElement("li",null,n.a.createElement(v.a,{variant:"outlined",margin:"dense"})),n.a.createElement("li",null,n.a.createElement(v.a,{variant:"outlined",margin:"dense"}))),n.a.createElement("div",{className:"paragraphDecorators-dialog__col "})))},$=function(e){return n.a.createElement("div",{className:"dialogGrid dialogGrid_positioning"},n.a.createElement("span",{id:"r1c1"},"Identational level"),n.a.createElement(b.a,{id:"r1c2",input:n.a.createElement(T,null)},n.a.createElement("option",{value:null},"..."),n.a.createElement("option",{value:"0"},"0"),n.a.createElement("option",{value:"1"},"1"),n.a.createElement("option",{value:"2"},"2"),n.a.createElement("option",{value:"3"},"3"),n.a.createElement("option",{value:"4"},"4"),n.a.createElement("option",{value:"5"},"5")),n.a.createElement("div",{id:"r2",className:"sectionTitle"},n.a.createElement("span",null,"BACKSPACE")),n.a.createElement("span",{id:"r3c1"},"At the beginning of a section with content"),n.a.createElement(b.a,{id:"r3c2",input:n.a.createElement(y,null)},B.map(function(e){return n.a.createElement("option",{value:e.key,key:"backSpace ".concat(e.key)},e.value)})),n.a.createElement("span",{id:"r4c1"},"At the beginning of a section WITHOUT content"),n.a.createElement(b.a,{id:"r4c2",input:n.a.createElement(y,null)},R.map(function(e){return n.a.createElement("option",{value:e.key,key:"backSpace ".concat(e.key)},e.value)})),n.a.createElement("div",{id:"r5",className:"sectionTitle"},n.a.createElement("span",null,"RETURN")),n.a.createElement("span",{id:"r6c1"},"Style of next section"),n.a.createElement(b.a,{id:"r6c2",input:n.a.createElement(y,null)},F.map(function(e){return n.a.createElement("option",{value:e.value,key:e.value},e.name)})),n.a.createElement("span",{id:"r7c1"},"In empty section change current style to"),n.a.createElement(b.a,{id:"r7c2",input:n.a.createElement(y,null)},F.map(function(e){return n.a.createElement("option",{value:e.value,key:e.value},e.name)})))},J=t(68),V=t(66),Q=t.n(V),Y=t(67),Z=t.n(Y),ee=Object(J.a)({palette:{primary:Q.a,secondary:Z.a}}),ae=t(132),te=Object(_.a)(function(e){return{root:{overflow:"initial",backgroundColor:"white",transition:"0.2s","&:before":{transition:"0.2s"},"&:hover":{color:"#000"},"&$selected":{backgroundColor:"#2196f3",color:"white",opacity:1},"&:hover:active":{backgroundColor:"white",transition:"0.2s"},"&$selected:hover:active":{backgroundColor:"#2ca4ff"}},selected:{}}})(function(e){return n.a.createElement(ae.a,e)}),le=t(135),ne=Object(_.a)(function(e){return{indicator:{backgroundColor:"#1890ff",opacity:.5,width:"190px",zIndex:5,display:"none"}}})(le.a),re=Object(_.a)(function(e){return{root:{minWidth:"1150px",minHeight:"1100px !important",height:"100%"},container:{height:"100vh",display:"block"},scrollBody:{"&:after":{height:"100%"}},paperFullWidth:{maxWidth:"1280px",maxHeight:"850px",minHeight:"550px",width:"calc(100% - 96px)",height:"calc(100% - 96px)",display:"inline-flex",flexDirection:"column",border:"none"},paperScrollBody:{verticalAlign:"middle"}}})(D.a),oe=function(e){function a(){var e,t;Object(c.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(n)))).state={openedTab:0,isList:!0,listType:"unordered",bulletField:"",verticalAlign:"",textTransform:"",leftBorder:!0,rightBorder:!0,topBorder:!0,bottomBorder:!0,borderColor:"",fontColor:"",fillingColor:"",borderThickness:"",firstRowIndent:"",otherRowsIndent:"",lineSpacing:""},t.toggleStateProperty=function(e){return function(a){t.setState(Object(p.a)({},e,a.target.checked))}},t.setStateProperty=function(e){return function(a,l){t.setState(Object(p.a)({},e,void 0===l?a.target.value:l))}},t.setBulletField=function(e){t.setState({bulletField:e.target.value.length>1?e.target.value[e.target.value.length-1]:e.target.value})},t.setColor=function(e){return function(a){var l=a.target.value||"",n=l.replace("#","").trim().match(/[0-9a-f]+/i)?l.replace("#","").trim().match(/[0-9a-f]+/i)[0].slice(0,6):"";n!==t.state[e]&&t.setState(Object(p.a)({},e,n))}},t.setNumber=function(e){return function(a){var l=a.target.value||"",n=l.replace(",",".").trim().match(/[0-9a-f]+/i)?l.replace(",",".").trim().match(/\d+[.,]?\d*/)[0]:"";n!==t.state[e]&&t.setState(Object(p.a)({},e,n))}},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.isOpen,t=e.onClose,l=this.state,r=l.openedTab,o=l.isList,c=l.listType,i=l.bulletField,m=l.verticalAlign,s=l.textTransform,u=l.leftBorder,p=l.rightBorder,v=l.topBorder,f=l.bottomBorder,b=l.borderColor,_=l.fontColor,N=l.fillingColor,y=l.borderThickness,D=l.firstRowIndent,k=l.otherRowsIndent,C=l.lineSpacing,w=this.setBulletField,T=this.setStateProperty("openedTab"),O=this.toggleStateProperty("isList"),B=this.setStateProperty("listType"),R=this.setStateProperty("verticalAlign"),F=this.setStateProperty("textTransform"),P=this.toggleStateProperty("leftBorder"),G=this.toggleStateProperty("rightBorder"),L=this.toggleStateProperty("topBorder"),H=this.toggleStateProperty("bottomBorder"),U=this.setColor("borderColor"),J=this.setColor("fontColor"),V=this.setColor("fillingColor"),Q=this.setNumber("borderThickness"),Y={isList:o,listType:c,changeIsList:O,changeListType:B,bulletField:i,setBulletField:w},Z={verticalAlign:m,textTransform:s,changeVerticalAlign:R,changeTextTransform:F,fontColor:_,changeFontColor:J},ae={firstRowIndent:D,otherRowsIndent:k,lineSpacing:C,changeFirstRowIndent:this.setNumber("firstRowIndent"),changeOtherRowsIndent:this.setNumber("otherRowsIndent"),changeLineSpacing:this.setNumber("lineSpacing")},le={leftBorder:u,rightBorder:p,topBorder:v,bottomBorder:f,changeLeftBorder:P,changeRightBorder:G,changeTopBorder:L,changeBottomBorder:H,borderColor:b,changeBorderColor:U,borderThickness:y,changeBorderThickness:Q},oe={fillingColor:N,changeFillingColor:V};return n.a.createElement(h.a,{theme:ee},n.a.createElement(re,{open:a,onClose:t,"aria-labelledby":"form-dialog-title",scroll:"body",className:"paragraphDecorators-dialog",fullWidth:!0,maxWidth:!1},n.a.createElement("div",{className:"header"},n.a.createElement(d.a,{className:"header-title"},n.a.createElement("p",null,"Create new paragraph decorator")),n.a.createElement("div",{className:"header-buttons"},n.a.createElement(g.a,{variant:"contained",color:"default",onClick:t,className:"topNavButton"},"Cancel"),n.a.createElement(g.a,{variant:"contained",color:"primary",onClick:function(){},className:"topNavButton"},"Create"))),n.a.createElement(E.a,{className:"content"},n.a.createElement("div",{className:"content-leftSide"},n.a.createElement(ne,{className:"dialogTabs",value:r,onChange:T,orientation:"vertical",color:"primary",indicatorColor:"primary"},n.a.createElement(te,{className:"dialogTab",label:"Names"}),n.a.createElement(te,{className:"dialogTab",label:"WORD export"}),n.a.createElement(te,{className:"dialogTab",label:"Positioning"}),n.a.createElement(te,{className:"dialogTab",label:"List"}),n.a.createElement(te,{className:"dialogTab",label:"Referencing"}),n.a.createElement(te,{className:"dialogTab",label:"Typography"}),n.a.createElement(te,{className:"dialogTab",label:"Distances"}),n.a.createElement(te,{className:"dialogTab",label:"Frames"}),n.a.createElement(te,{className:"dialogTab",label:"Filling"}),n.a.createElement(te,{className:"dialogTab",label:"ToC"}),n.a.createElement(te,{className:"dialogTab",label:"Short cuts"}),n.a.createElement(te,{className:"dialogTab",label:"Test"}))),n.a.createElement("div",{className:"content-rightSide"},0===r&&n.a.createElement(S,null),1===r&&n.a.createElement(x,null),2===r&&n.a.createElement(j,null),3===r&&n.a.createElement(A,Y),4===r&&n.a.createElement(I,null),5===r&&n.a.createElement(W,Z),6===r&&n.a.createElement(q,ae),7===r&&n.a.createElement(M,le),8===r&&n.a.createElement(z,oe),9===r&&n.a.createElement(K,null),10===r&&n.a.createElement(X,null),11===r&&n.a.createElement($,null)))))}}]),a}(n.a.Component),ce=function(e){function a(){var e,t;Object(c.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(n)))).state={isOpen:!0},t.handleClick=function(){t.setState(function(e){return{isOpen:!e.isOpen}})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement("button",{onClick:this.handleClick},"Open"),n.a.createElement(oe,{isOpen:this.state.isOpen,onClose:function(){e.setState({isOpen:!1})}}))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[78,1,2]]]);
//# sourceMappingURL=main.292a04ce.chunk.js.map