(function(e){function t(t){for(var r,l,i=t[0],s=t[1],c=t[2],d=0,p=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/form-builder-vue2/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{title:"Form Builder"}}),e._m(0),n("h3",{staticClass:"menutitle"},[e._v("Form Components")]),n("div",{staticClass:"box"},[n("draggable",{staticClass:"list-group menu",attrs:{list:e.arrMenu,options:e.menuOptions,clone:e.handleClone},on:{end:e.modalAppear}},e._l(e.arrMenu,(function(t){return n("div",{key:e.uuid(t),staticClass:"list-group-item card"},[e._v(" "+e._s(t.name)+" ")])})),0),n("draggable",{staticClass:"list-group board",attrs:{list:e.arrBoard,group:"cards"}},e._l(e.arrBoard,(function(t){return n("div",{key:e.uuid(t),staticClass:"list-group-item card",attrs:{label:e.returnLabel(t)},on:{dblclick:function(t){e.showModal=!0}}},[e._v(" "+e._s(t.name)+" - Label: "+e._s(t.label)+" - Placeholder: "+e._s(t.placeholder)+" ")])})),0)],1),n("transition",{attrs:{name:"fade",appear:""}},[e.showModal?n("div",{staticClass:"modal-overlay",on:{click:function(t){e.showModal=!1}}}):e._e()]),n("transition",{attrs:{name:"fade",appear:""}},[e.showModal?n("div",{staticClass:"modal-box"},[n("h3",[e._v(" Edit the Component ")]),n("br"),n("p",{staticClass:"modal-text"},[e._v("Create a label for this form component (e.g. First Name)")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newLabel,expression:"newLabel"}],attrs:{placeholder:"Your label here"},domProps:{value:e.newLabel},on:{input:function(t){t.target.composing||(e.newLabel=t.target.value)}}}),n("p",{staticClass:"modal-text"},[e._v("Specify directions on how this form component should be filled out.")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newDirections,expression:"newDirections"}],attrs:{placeholder:"Your directions here"},domProps:{value:e.newDirections},on:{input:function(t){t.target.composing||(e.newDirections=t.target.value)}}}),n("p",{staticClass:"modal-text"},[e._v("Specify a hint for how the form component should be filled out. (e.g. John)")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newPlaceholder,expression:"newPlaceholder"}],attrs:{placeholder:"Your placeholder here"},domProps:{value:e.newPlaceholder},on:{input:function(t){t.target.composing||(e.newPlaceholder=t.target.value)}}}),n("Button",{attrs:{text:"Close",color:"#B81C1C"},on:{"btn-click":function(t){e.showModal=!1}}})],1):e._e()]),n("div",{staticClass:"centeralign"},[n("Button",{attrs:{text:"Submit",color:"steelblue"}}),n("Button",{attrs:{text:"Clear",color:"#B81C1C"},on:{"btn-click":function(t){return e.clearAll()}}})],1)],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"centeralign"},[n("p",[e._v(" Drag and drop the "),n("b",[e._v("form components")]),e._v(" into the field below to build your custom form. Double-click an "),n("b",[e._v("already-added component")]),e._v(" to "),n("b",[e._v("edit")]),e._v(" it.")])])}],l=(n("fb6a"),n("d3b7"),n("25f0"),n("a434"),n("b76a")),i=n.n(l),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h2",[e._v(e._s(e.title))])])},c=[],u={name:"Header",props:{title:String}},d=u,p=(n("8baf"),n("2877")),f=Object(p["a"])(d,s,c,!1,null,null,null),h=f.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"btn",style:{background:e.color},on:{click:function(t){return e.onClick()}}},[e._v(e._s(e.text))])},b=[],v={name:"Button",props:{text:String,color:String},methods:{onClick:function(){this.$emit("btn-click")}}},g=v,w=Object(p["a"])(g,m,b,!1,null,null,null),_=w.exports,y={name:"App",components:{draggable:i.a,Header:h,Button:_},data:function(){return{showModal:!1,newLabel:"",newDirections:"",newPlaceholder:"",arrMenu:[{name:"Form Title",label:"",directions:"",placeholder:""},{name:"Input Text Field",label:"",directions:"",placeholder:""},{name:"Textarea",label:"",directions:"",placeholder:""},{name:"Number",label:"",directions:"",placeholder:""},{name:"Checkbox",label:"",directions:"",placeholder:""},{name:"Dropdown",label:"",directions:"",placeholder:""},{name:"Select Boxes",label:"",directions:"",placeholder:""},{name:"Radio",label:"",directions:"",placeholder:""},{name:"Email",label:"",directions:"",placeholder:""},{name:"Button",label:"",directions:"",placeholder:""}],arrBoard:[],menuOptions:{group:{name:"cards",pull:"clone",put:!1},sort:!1}}},methods:{handleClone:function(e){var t=JSON.parse(JSON.stringify(e));return this.$delete(t,"id"),t},uuid:function(e){if(e.id)return e.id;var t=Math.random().toString(16).slice(2);return this.$set(e,"id",t),e.id},modalAppear:function(){this.showModal=!0},closeModal:function(){this.showModal=!1,this.newLabel=""},returnLabel:function(e){var t=JSON.parse(JSON.stringify(this.newLabel));return this.$set(e,"label",t),e.label},returnDirections:function(e){var t=JSON.parse(JSON.stringify(this.newDirections));return this.$set(e,"directions",t),e.directions},returnPlaceholder:function(e){var t=JSON.parse(JSON.stringify(this.newPlaceholder));return this.$set(e,"directions",t),e.placeholder},clearAll:function(){this.arrBoard.splice(0,this.arrBoard.length)},deleteCard:function(e){this.arrBoard.splice(e,1)}}},C=y,x=(n("034f"),Object(p["a"])(C,o,a,!1,null,null,null)),O=x.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(O)}}).$mount("#app")},6860:function(e,t,n){},"85ec":function(e,t,n){},"8baf":function(e,t,n){"use strict";n("6860")}});
//# sourceMappingURL=app.e32e6d5f.js.map