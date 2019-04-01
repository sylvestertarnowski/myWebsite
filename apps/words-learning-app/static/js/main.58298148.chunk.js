(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(t,e,a){t.exports=a(21)},20:function(t,e,a){},21:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(11),i=a.n(o),l=a(8),c=a.n(l),s=a(9),u=a(2),d=a(3),h=a(5),m=a(4),p=a(6),b=a(7),f=a(1);var v=function(t){return r.a.createElement("li",null,t.data.word)},j=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(h.a)(this,Object(m.a)(e).call(this,t))).state={correct:null,randomWord:{},prevWord:{word:"",translation:""},tempWord:"",list:t.data},a.handleSubmit=a.handleSubmit.bind(Object(f.a)(Object(f.a)(a))),a.handleChange=a.handleChange.bind(Object(f.a)(Object(f.a)(a))),a.pickRandomIndex=a.pickRandomIndex.bind(Object(f.a)(Object(f.a)(a))),a.pickWord=a.pickWord.bind(Object(f.a)(Object(f.a)(a))),a.removeWord=a.removeWord.bind(Object(f.a)(Object(f.a)(a))),a.clearTempWord=a.clearTempWord.bind(Object(f.a)(Object(f.a)(a))),a}return Object(p.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){this.pickWord()}},{key:"componentWillReceiveProps",value:function(t){this.setState({list:t.data})}},{key:"handleSubmit",value:function(t){this.state.tempWord===this.state.randomWord.translation?(this.setState({correct:!0}),this.removeWord(),this.clearTempWord()):(this.setState({correct:!1}),this.pickWord(),this.clearTempWord()),t.preventDefault()}},{key:"handleChange",value:function(t){var e=t.target,a=e.name,n=e.value;this.setState(Object(b.a)({},a,n))}},{key:"clearTempWord",value:function(){this.setState({tempWord:""})}},{key:"pickRandomIndex",value:function(){return Math.floor(Math.random()*this.state.list.length)}},{key:"pickWord",value:function(){var t=this,e=this.pickRandomIndex();this.setState(function(a){return{randomWord:t.state.list[e],prevWord:a.randomWord}})}},{key:"removeWord",value:function(){var t=this;this.setState(function(t){var e=t.randomWord;return{list:t.list.filter(function(t){return t.word!==e.word})}},function(){return t.pickWord()})}},{key:"render",value:function(){var t=this.state.list;return r.a.createElement("div",null,r.a.createElement("ul",null,t.map(function(t){return r.a.createElement(v,{key:t.word,data:t})})),r.a.createElement("br",null),void 0!==this.state.randomWord?r.a.createElement("h1",null,"Guess this word: ",this.state.randomWord.word):r.a.createElement("h1",null,"Play again?"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"tempWord",placeholder:"guess",value:this.state.tempWord,onChange:this.handleChange}),r.a.createElement("button",null,"Guess")),r.a.createElement("h1",null,this.state.correct?r.a.createElement("span",null,"Correct!"):r.a.createElement("span",null,"Wrong! ",this.state.prevWord.word," - ",this.state.prevWord.translation)))}}]),e}(n.Component),k=[{_id:"1",word:"marchewka",translation:"carrot"},{word:"kubek",translation:"cup"},{word:"kawa",translation:"coffee"},{word:"ciasto",translation:"cake"},{word:"talerz",translation:"plate"},{word:"pomara\u0144cza",translation:"orange"},{word:"smartfon",translation:"smartphone"},{word:"woda",translation:"water"},{word:"\u015bciana",translation:"wall"},{word:"sk\xf3ra",translation:"skin"},{word:"ciastko",translation:"biscuit"}],w=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(h.a)(this,Object(m.a)(e).call(this,t))).state={name:"",language:"",list:t.data},a.handleSave=a.handleSave.bind(Object(f.a)(Object(f.a)(a))),a.handleChange=a.handleChange.bind(Object(f.a)(Object(f.a)(a))),a}return Object(p.a)(e,t),Object(d.a)(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({list:t.data})}},{key:"handleSave",value:function(t){t.preventDefault(),fetch("/words/add",{method:"POST",body:JSON.stringify(this.state)}).then(function(t){return t.json()}).then(function(t){return console.log(t)}).catch(function(t){return console.error(t)})}},{key:"handleChange",value:function(t){var e=t.target,a=e.name,n=e.value;this.setState(Object(b.a)({},a,n))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:this.state.name,name:"name",onChange:this.handleChange,placeholder:"Unique List Name"}),r.a.createElement("input",{type:"text",value:this.state.language,name:"language",onChange:this.handleChange,placeholder:"Language"}),r.a.createElement("button",{type:"submit",onClick:this.handleSave},"Save Words"))}}]),e}(n.Component),O=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(h.a)(this,Object(m.a)(e).call(this,t))).updateStateWithData=function(){a.callWordsDownload().then(function(t){return a.setState(function(e){return{word:"",translation:"",list:t.list.concat(e.list)}},function(){return console.log(a.state.list)})}).catch(function(t){return console.log(t)})},a.callWordsDownload=Object(s.a)(c.a.mark(function t(){var e,a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/words/default",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 2:return e=t.sent,t.next=5,e.json();case 5:if(a=t.sent,200===e.status){t.next=8;break}throw Error(a.message);case 8:return t.abrupt("return",a);case 9:case"end":return t.stop()}},t)})),a.state={word:"",translation:"",list:k},a.handleSubmit=a.handleSubmit.bind(Object(f.a)(Object(f.a)(a))),a.handleChange=a.handleChange.bind(Object(f.a)(Object(f.a)(a))),a}return Object(p.a)(e,t),Object(d.a)(e,[{key:"handleSubmit",value:function(t){this.setState(function(t){var e={word:t.word,translation:t.translation},a=t.list;return a.unshift(e),{word:"",translation:"",list:a}}),console.log(this.state.list),t.preventDefault()}},{key:"handleChange",value:function(t){var e=t.target,a=e.name,n=e.value;this.setState(Object(b.a)({},a,n))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{autoFocus:!0,type:"text",name:"word",value:this.state.word,placeholder:"Word",onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"translation",value:this.state.translation,placeholder:"translation",onChange:this.handleChange}),r.a.createElement("button",null,"Add")),r.a.createElement("button",{onClick:this.updateStateWithData},"Download List from Server"),r.a.createElement(w,{data:this.state.list}),r.a.createElement(j,{data:this.state.list}))}}]),e}(n.Component),g=(a(20),function(t){function e(){var t;return Object(u.a)(this,e),(t=Object(h.a)(this,Object(m.a)(e).call(this))).callBackendAPI=Object(s.a)(c.a.mark(function t(){var e,a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/express_backend");case 2:return e=t.sent,t.next=5,e.json();case 5:if(a=t.sent,200===e.status){t.next=8;break}throw Error(a.message);case 8:return t.abrupt("return",a);case 9:case"end":return t.stop()}},t)})),t.state={data:null},t}return Object(p.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.callBackendAPI().then(function(e){return t.setState({data:e.express})}).catch(function(t){return console.log(t)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement("p",null,this.state.data))}}]),e}(n.Component));i.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.58298148.chunk.js.map