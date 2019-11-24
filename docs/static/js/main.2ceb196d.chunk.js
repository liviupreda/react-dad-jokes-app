(this["webpackJsonpdad-jokes"]=this["webpackJsonpdad-jokes"]||[]).push([[0],{23:function(e,t,a){e.exports=a(50)},28:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),s=a(18),r=a.n(s),i=(a(28),a(19)),c=a(8),l=a.n(c),u=a(22),p=a(20),m=a(2),h=a(3),d=a(6),k=a(5),f=a(4),v=a(7),j=a(21),g=a.n(j),b=(a(47),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"getColor",value:function(){return this.props.votes>=15?"#4CAF50":this.props.votes>=12?"#8BC34A":this.props.votes>=9?"#CDDC39":this.props.votes>=6?"#FFEB3B":this.props.votes>=3?"#FFC107":this.props.votes>=0?"#FF9800":"#f44336"}},{key:"getEmoji",value:function(){return this.props.votes>=15?"em em-rolling_on_the_floor_laughing":this.props.votes>=12?"em em-laughing":this.props.votes>=9?"em em-smiley":this.props.votes>=6?"em em-slightly_smiling_face":this.props.votes>=3?"em em-neutral_face":this.props.votes>=0?"em em-confused":"em em-angry"}},{key:"render",value:function(){return n.a.createElement("div",{className:"Joke"},n.a.createElement("div",{className:"Joke-buttons"},n.a.createElement("i",{className:"fa fa-arrow-up",onClick:this.props.upvote}),n.a.createElement("span",{className:"Joke-votes",style:{borderColor:this.getColor()}},this.props.votes),n.a.createElement("i",{className:"fa fa-arrow-down",onClick:this.props.downvote})),n.a.createElement("div",{className:"Joke-text"},this.props.text),n.a.createElement("div",{className:"Joke-emoji"},n.a.createElement("i",{className:this.getEmoji()})))}}]),t}(o.Component));a(48);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}var y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(k.a)(t).call(this,e))).state={jokes:JSON.parse(window.localStorage.getItem("jokes")||"[]"),loading:!1},a.seenJokes=new Set(a.state.jokes.map((function(e){return e.text}))),a.handleClick=a.handleClick.bind(Object(f.a)(a)),a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){0===this.state.jokes.length&&this.loadJokes()}},{key:"handleClick",value:function(){this.setState({loading:!0},this.loadJokes)}},{key:"loadJokes",value:function(){var e=Object(p.a)(l.a.mark((function e(){var t,a,o=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t=[];case 2:if(!(t.length<this.props.numJokes)){e.next=9;break}return e.next=5,g.a.get("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}});case 5:a=e.sent,this.seenJokes.has(a.data.joke)?(console.log("Found a duplicate"),console.log(a.data.joke)):t.push({id:a.data.id,text:a.data.joke,votes:0}),e.next=2;break;case 9:this.setState((function(e){return{jokes:[].concat(Object(u.a)(e.jokes),t),loading:!1}}),(function(){return window.localStorage.setItem("jokes",JSON.stringify(o.state.jokes))})),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),alert(e.t0),this.setState({loading:!1});case 16:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleVote",value:function(e,t){var a=this;this.setState((function(a){return{jokes:a.jokes.map((function(a){return a.id===e?function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a,{votes:a.votes+t}):a}))}}),(function(){return window.localStorage.setItem("jokes",JSON.stringify(a.state.jokes))}))}},{key:"render",value:function(){var e=this;return this.state.loading?n.a.createElement("div",{className:"JokeList-spinner"},n.a.createElement("i",{className:"fas fa-8x fa-laugh fa-spin"}),n.a.createElement("h1",{className:"JokeList-title"},"Loading Jokes...")):n.a.createElement("div",{className:"JokeList"},n.a.createElement("div",{className:"JokeList-sidebar"},n.a.createElement("h1",{className:"JokeList-title"},n.a.createElement("span",null,"Dad "),"Jokes"),n.a.createElement("img",{src:"https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg",alt:"Laughing Emoji"}),n.a.createElement("button",{className:"JokeList-getmore",onClick:this.handleClick},"Get More Jokes")),n.a.createElement("div",{className:"JokeList-jokes"},this.state.jokes.map((function(t){return n.a.createElement(b,{key:t.id,votes:t.votes,text:t.text,upvote:function(){return e.handleVote(t.id,1)},downvote:function(){return e.handleVote(t.id,-1)}})}))))}}]),t}(o.Component);y.defaultProps={numJokes:10};var E=y;a(49);var w=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.2ceb196d.chunk.js.map