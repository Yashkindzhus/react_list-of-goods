(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var r=n(3),s=n.n(r),o=n(6),c=n(4),a=n(5),i=n(8),l=n(7),u=n(1),b=n.n(u),d=(n(13),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={goods:h,isStarted:!1,isReversed:!1,sortBy:"standart"},t.sortAlphabetically=function(t){return t.sort((function(t,e){return t.localeCompare(e)}))},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.goods,r=e.isStarted,s=e.isReversed,c=e.sortBy,a=Object(o.a)(n);switch(c){case"alphabet":a.sort((function(t,e){return t.localeCompare(e)}));break;case"length":a.sort((function(t,e){return t.length-e.length}))}return s&&a.reverse(),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Goods"}),!r&&Object(d.jsx)("button",{type:"button",onClick:function(){t.setState({isStarted:!0})},children:"Start"}),r&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{type:"button",onClick:function(){return t.setState({isReversed:!s})},children:"Reverse"}),Object(d.jsx)("button",{type:"button",onClick:function(){return t.setState({sortBy:"alphabet"})},children:"Sort alphabetically"}),Object(d.jsx)("button",{type:"button",onClick:function(){return t.setState({sortBy:"length"})},children:"Sort by length"}),Object(d.jsx)("button",{type:"button",onClick:function(){t.setState({sortBy:"standart",isReversed:!1})},children:"Reset"}),Object(d.jsx)("ul",{children:a.map((function(t){return Object(d.jsx)("li",{children:t},t)}))})]})]})}}]),n}(b.a.PureComponent),p=j;s.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.eaa90834.chunk.js.map