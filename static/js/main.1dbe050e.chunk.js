(this["webpackJsonpreact-dso"]=this["webpackJsonpreact-dso"]||[]).push([[0],{20:function(e,a,t){},26:function(e,a,t){e.exports=t(37)},31:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(23),s=t.n(c),r=t(4);t(31);var i=function(){return l.a.createElement("div",{className:"jumbotron jumbotron-fluid header"},l.a.createElement("div",{class:"top-container"},l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"col-md-auto flex justify-content-center"},l.a.createElement("h1",{className:"title"},"The ",l.a.createElement("span",null,"DSO")," App"),l.a.createElement("h2",{className:"sub-title"},"A simple app built with React to calculate DSO")))))};var m=function(){return l.a.createElement("div",{className:"footer-padding"},l.a.createElement("div",{className:"footer"},l.a.createElement("p",null,"Made by Paul August. \xa9 ",(new Date).getFullYear()," ")))};t(20),t(21);var o=function(){return l.a.createElement("div",{className:"DSOApp"},l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"column"},l.a.createElement("div",{class:"col-sm-auto"},l.a.createElement("div",{className:"col-md-auto flex justify-content-center"},l.a.createElement("h1",null,"Days Sales Outstanding"),l.a.createElement("p",null,"Calculate your days sales outstanding"),l.a.createElement(r.c,{to:"//paulie-a.github.io/react-dso-app/dso"},l.a.createElement("button",{className:"btn btn-primary",type:"button"},"Calculate DSO")),l.a.createElement("hr",null),l.a.createElement("h1",null,"Collection Effectiveness Index"),l.a.createElement("p",null,"Calculate the effectiveness of your collections team"),l.a.createElement(r.c,{to:"//paulie-a.github.io/react-dso-app/cei"},l.a.createElement("button",{className:"btn btn-primary",type:"button"},"Calculate CEI")),l.a.createElement("hr",null))))))},u=t(10),d=t(11),h=t(12),b=t(14),E=t(13),p=t(5),v=t(15),C=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(b.a)(this,Object(E.a)(a).call(this,e))).state={ArBal:"",CrSales:"",days:"31",dso:""},t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(t)),t.calcDso=t.calcDso.bind(Object(p.a)(t)),t}return Object(v.a)(a,e),Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(u.a)({},e.target.name,e.target.value))}},{key:"calcDso",value:function(){var e=Math.round(this.state.ArBal/this.state.CrSales*this.state.days);this.setState({dso:e})}},{key:"handleSubmit",value:function(e){this.calcDso(),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"col-sm-auto"},l.a.createElement("div",{className:"col-md-auto flex justify-content-center"},l.a.createElement("h1",null,"Days Sales Outstanding"),l.a.createElement("div",{className:"variable-input"},l.a.createElement("p",{class:"description-text"},"Enter your total receivables balance"),l.a.createElement("label",null,l.a.createElement("input",{type:"number",name:"ArBal",value:this.state.ArBal,onChange:this.handleChange,placeholder:"AR Balance"}))),l.a.createElement("div",{className:"variable-input"},l.a.createElement("p",{className:"description-text"},"Enter your current credit sales"),l.a.createElement("label",null,l.a.createElement("input",{type:"number",name:"CrSales",value:this.state.CrSales,onChange:this.handleChange,placeholder:"Credit Sales"}))),l.a.createElement("div",{className:"variable-select"},l.a.createElement("p",{className:"description-text"},"Select the number of days in current month"),l.a.createElement("select",{type:"number",name:"days",value:this.state.days,onChange:this.handleChange},l.a.createElement("option",{value:"31"},"31"),l.a.createElement("option",{value:"30"},"30"),l.a.createElement("option",{value:"29"},"29"),l.a.createElement("option",{value:"28"},"28"))),l.a.createElement("div",{className:"button"},l.a.createElement("button",{className:"btn btn-success btn-sm",type:"submit",name:"submit",onClick:this.calcDso},"Calculate DSO ")),l.a.createElement("div",{className:"button"},l.a.createElement(r.c,{to:"//paulie-a.github.io/react-dso-app/"},l.a.createElement("button",{className:"btn btn-warning",type:"button"},"Home"))),l.a.createElement("div",{className:"result"},l.a.createElement("p",{name:"dso"},"Your DSO result is: ",this.state.dso)))))))}}]),a}(n.Component),g=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(b.a)(this,Object(E.a)(a).call(this,e))).state={BegArBal:"",CurCrSales:"",EndTotBal:"",EndCurBal:"",cei:""},t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(t)),t.calcCei=t.calcCei.bind(Object(p.a)(t)),t}return Object(v.a)(a,e),Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(u.a)({},e.target.name,e.target.value))}},{key:"calcCei",value:function(){var e=Math.ceil((this.state.BegArBal+this.state.CurCrSales-this.state.EndTotBal)/(this.state.BegArBal+this.state.CurCrSales-this.state.EndCurBal)*100);this.setState({cei:e})}},{key:"handleSubmit",value:function(e){this.calcCei(),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"col-sm-auto"},l.a.createElement("div",{className:"col-md-auto flex justify-content-center"},l.a.createElement("h1",null,"Collection Effectiveness Index"),l.a.createElement("div",{className:"variable-input"},l.a.createElement("p",{className:"description-text"},"Enter your beginning receivables balance"),l.a.createElement("input",{type:"number",name:"BegArBal",value:this.state.BegArBal,onChange:this.handleChange,placeholder:"Beginning AR balance"})),l.a.createElement("div",{className:"variable-input"},l.a.createElement("p",{classNAme:"description-text"},"Enter your current credit month sales"),l.a.createElement("input",{type:"number",name:"CurCrSales",value:this.state.CurCrSales,onChange:this.handleChange,placeholder:"Total curr month sales"})),l.a.createElement("div",{className:"variable-input"},l.a.createElement("p",{className:"description-text"},"Enter your total ending receivables balance"),l.a.createElement("input",{type:"number",name:"EndTotBal",value:this.state.EndTotBal,onChange:this.handleChange,placeholder:"End total receivables"})),l.a.createElement("div",{className:"variable-input"},l.a.createElement("p",{className:"description-text"},"Enter your total current month receivables balance"),l.a.createElement("input",{type:"number",name:"EndCurBal",value:this.state.EndCurBal,onChange:this.handleChange,placeholder:"End curr receivables"})),l.a.createElement("div",{className:"button"},l.a.createElement("button",{className:"btn btn-success btn-sm",type:"submit",name:"submit"},"Calculate CEI")),l.a.createElement("div",{className:"button"},l.a.createElement(r.c,{to:"//paulie-a.github.io/react-dso-app/"},l.a.createElement("button",{className:"btn btn-warning",type:"button"},"Home"))),l.a.createElement("div",{className:"result"},l.a.createElement("p",{name:"cei"},"Your CEI result is: ",this.state.cei)))))))}}]),a}(n.Component),y=t(7);var N=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(r.b,{basename:"/"},l.a.createElement(i,null),l.a.createElement(y.c,null,l.a.createElement(y.a,{exact:!0,path:"/",component:o}),l.a.createElement(y.a,{exact:!0,path:"/dso",component:C}),l.a.createElement(y.a,{exact:!0,path:"/cei",component:g})),l.a.createElement(m,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(r.a,{basename:"//paulie-a.github.io/react-dso-app"},l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.1dbe050e.chunk.js.map