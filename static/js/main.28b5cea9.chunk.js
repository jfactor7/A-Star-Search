(this["webpackJsonpa-star-search"]=this["webpackJsonpa-star-search"]||[]).push([[0],{18:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);n(13);var s=n(3),i=n.n(s),a=n(10),o=n.n(a),r=(n(18),n(1)),c=n(7),h=n(4),u=n(5),l=n(2),d=n(12),b=n(11),v=function(){function t(e){Object(h.a)(this,t),this.pos=e||[0,0]}return Object(u.a)(t,[{key:"setCurrentPosition",value:function(t,e){this.pos=[t,e]}},{key:"equal",value:function(t){return this.pos[0]===t.position[0]&&this.pos[1]===t.position[1]}},{key:"position",get:function(){return this.pos}},{key:"manhattanDistanceTo",value:function(t){var e=Object(r.a)(this.position,2),n=e[0],s=e[1],i=Object(r.a)(t.position,2),a=i[0],o=i[1];return Math.abs(n-a)+Math.abs(s-o)}},{key:"euclideanDistanceTo",value:function(t){var e=Object(r.a)(this.position,2),n=e[0],s=e[1],i=Object(r.a)(t.position,2),a=i[0],o=i[1];return Math.sqrt((n-a)*(n-a)+(s-o)*(s-o))}}]),t}(),f=null,j=0,k=1,O=3,p=4,y=5,g=function(){function t(e){Object(h.a)(this,t),e?(this.board=e,this.len=Math.sqrt(e.length)):(this.len=4,this.board=new Array(this.len*this.len).fill(j)),this.start=new v([1,1]),this.end=new v([this.len-2,this.len-2]),this.setStart(this.start),this.setEnd(this.end)}return Object(u.a)(t,[{key:"getChildren",value:function(t){for(var e,n=this.getPaths(t),s=[],i=0;i<n.length;i++)e=n[i],this.checkPathAvailable(e)&&s.push(new v(e));return s}},{key:"getPaths",value:function(t){var e=Object(r.a)(t.position,2),n=e[0],s=e[1],i=[];return n>=1&&i.push([n-1,s]),n<this.len-1&&i.push([n+1,s]),s>=1&&i.push([n,s-1]),s<this.len-1&&i.push([n,s+1]),i}},{key:"setEnd",value:function(t){var e=Object(r.a)(this.end.position,2),n=e[0],s=e[1];this.board[n*this.len+s]=j,this.end=t;var i=Object(r.a)(t.position,2),a=i[0],o=i[1];this.board[a*this.len+o]=O}},{key:"setStart",value:function(t){var e=Object(r.a)(this.start.position,2),n=e[0],s=e[1];this.board[n*this.len+s]=j,this.start=t;var i=Object(r.a)(t.position,2),a=i[0],o=i[1];this.board[a*this.len+o]=p}},{key:"setVisit",value:function(t){var e=Object(r.a)(t.position,2),n=e[0],s=e[1];this.board[n*this.len+s]===j&&(this.board[n*this.len+s]=k)}},{key:"positionFromRowCol",value:function(t){var e=Object(r.a)(t,2),n=e[0],s=e[1];return n*this.len+s}},{key:"checkPathAvailable",value:function(t){var e=this.positionFromRowCol(t);return this.board[e]!==f}},{key:"setPath",value:function(t){for(var e=0;e<t.length;e++){var n=t[e];if(!n.equal(this.start)){var s=Object(r.a)(n.position,2),i=s[0],a=s[1],o=i*this.len+a;this.board[o]=y}}}},{key:"setWall",value:function(t){var e=Object(r.a)(t.position,2),n=e[0],s=e[1],i=n*this.len+s;this.board[i]!==f&&(this.board[i]=f)}},{key:"setUnvisited",value:function(t){var e=Object(r.a)(t.position,2),n=e[0],s=e[1],i=n*this.len+s;this.board[i]=j}},{key:"reset",value:function(){for(var t=new Array(this.len*this.len).fill(j),e=0;e<this.board.length;e++)this.board[e]===f&&(t[e]=this.board[e]);this.board=t,this.setStart(this.start),this.setEnd(this.end)}}]),t}(),w=function t(e,n){Object(h.a)(this,t),this.priority=e,this.item=n},S=function(){function t(){Object(h.a)(this,t),this.items=[]}return Object(u.a)(t,[{key:"enqueue",value:function(t,e){for(var n=new w(t,e),s=!1,i=0;i<this.items.length;i++)if(this.items[i].priority>n.priority){this.items.splice(i,0,n),s=!0;break}s||this.items.push(n)}},{key:"dequeue",value:function(){return this.isEmpty?null:this.items.shift()}},{key:"isEmpty",get:function(){return 0===this.items.length}},{key:"front",get:function(){return this.isEmpty?null:this.items[0]}},{key:"print",get:function(){console.log(this.items)}}]),t}(),x=n(0),m=function(t){return Object(c.a)(Array(t).keys())},M=30,C={blackBox:{width:M,height:M,backgroundColor:"black",border:"1px solid black"},greyBox:{width:M,height:M,backgroundColor:"lightgray",border:"1px solid black"},darkcyanBox:{width:M,height:M,backgroundColor:"darkcyan",border:"1px solid black"},whiteBox:{width:M,height:M,backgroundColor:"white",border:"1px solid black"},greenBox:{width:M,height:M,backgroundColor:"green",border:"1px solid black"},blueBox:{width:M,height:M,backgroundColor:"blue",border:"1px solid black"}},D=function(t){var e=t.status,n=t.onMouseDown,s=t.onMouseUp,i=t.onMouseOver,a=t.onClick;return e===j?Object(x.jsx)("div",{style:C.whiteBox,onMouseDown:n,onMouseUp:s,onMouseOver:i,onClick:a}):e===k?Object(x.jsx)("div",{style:C.greyBox,onMouseDown:n,onMouseUp:s,onMouseOver:i,onClick:a}):e===p?Object(x.jsx)("div",{style:C.greenBox}):e===f?Object(x.jsx)("div",{style:C.blackBox,onMouseDown:n,onMouseUp:s,onMouseOver:i,onClick:a}):e===O?Object(x.jsx)("div",{style:C.blueBox}):e===y?Object(x.jsx)("div",{style:C.darkcyanBox,onMouseDown:n,onMouseUp:s,onMouseOver:i,onClick:a}):void 0},B=function(t){var e=t.board,n=t.onMouseDown,s=t.onMouseUp,i=t.onMouseOver,a=t.onClick,o=Math.sqrt(e.length);return Object(x.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},onMouseUp:s,onMouseDown:n,onMouseLeave:s,children:Object(x.jsx)("div",{children:m(o).map((function(t){return Object(x.jsx)("div",{style:{display:"flex"},children:m(o).map((function(n){return Object(x.jsx)(D,{status:e[t*o+n],onMouseOver:function(){return i([t,n])},onMouseDown:function(){return a([t,n])}})}))})}))})})},E={padding:5,margin:5};function q(t){var e=t.buttons,n=Object(s.useState)("Draw Wall"),i=Object(r.a)(n,2),a=i[0],o=i[1],c=Object(s.useState)([]),h=Object(r.a)(c,2),u=h[0],l=h[1];return Object(s.useEffect)((function(){var t=[];for(var n in e){var s=n===a;t.push([n,e[n],s])}l(t)}),[a]),Object(x.jsx)("div",{style:E,children:u.map((function(t){var e=Object(r.a)(t,3),n=e[0],s=e[1],i=e[2];return Object(x.jsx)("button",{style:E,className:"btn btn-secondary",onClick:function(){o(n),s()},disabled:i,children:n})}))})}var F=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(t){var s;return Object(h.a)(this,n),(s=e.call(this,t)).state={board:new g(new Array(100).fill(j)),block:"wall",drawStatus:!1},s.visitedStates=[],s.priorityQ=new S,s.message="Hello World",s.search=s.search.bind(Object(l.a)(s)),s.handleSearch=s.handleSearch.bind(Object(l.a)(s)),s.changeStart=s.changeStart.bind(Object(l.a)(s)),s.changeEnd=s.changeEnd.bind(Object(l.a)(s)),s.changeBlock=s.changeBlock.bind(Object(l.a)(s)),s.erase=s.erase.bind(Object(l.a)(s)),s.addWall=s.addWall.bind(Object(l.a)(s)),s.setDrawStatusFalse=s.setDrawStatusFalse.bind(Object(l.a)(s)),s.setDrawStatusTrue=s.setDrawStatusTrue.bind(Object(l.a)(s)),s.draw=s.draw.bind(Object(l.a)(s)),s.functions={wall:s.addWall,start:s.changeStart,end:s.changeEnd,erase:s.erase},s}return Object(u.a)(n,[{key:"setDrawStatusTrue",value:function(){this.setState({drawStatus:!0})}},{key:"setDrawStatusFalse",value:function(){this.setState({drawStatus:!1})}},{key:"draw",value:function(t){var e=this.functions[this.state.block];this.state.drawStatus&&e(t)}},{key:"distance",value:function(t){return t.euclideanDistanceTo(this.state.board.end)}},{key:"search",value:function(){var t={state:this.state.board.start,path:[],cost:0};for(this.priorityQ.enqueue(0,t);!this.priorityQ.isEmpty;){var e=this.priorityQ.dequeue().item,n=e.state,s=e.path;if(this.visited(n)||this.visitedStates.push(n),n.equal(this.state.board.end))return Object(c.a)(s);for(var i=[].concat(Object(c.a)(s),[n]),a=this.state.board.getChildren(n),o=0;o<a.length;o++){var r=a[o];if(!this.visited(r)){var h={state:r,path:i,cost:e.cost+1},u=this.distance(r);u+=e.cost,this.priorityQ.enqueue(u,h)}}}return null}},{key:"show",value:function(){for(var t=this,e=this.state.board.board,n=function(n){var s=t.visitedStates[n],i=Object(r.a)(s.position,2),a=i[0],o=i[1],c=a*t.state.board.len+o;setTimeout((function(){e[c]===j&&(e[c]=k),t.setState({})}),100*n)},s=0;s<this.visitedStates.length;s++)n(s)}},{key:"visited",value:function(t){for(var e=0;e<this.visitedStates.length;e++)if(this.visitedStates[e].equal(t))return!0;return!1}},{key:"inFringe",value:function(t){for(var e=0;e<this.priorityQ.items.length;e++){if(this.priorityQ.items[e].item.state.equal(t))return!0}return!1}},{key:"handleSearch",value:function(){var t=this;this.state.board.reset(),this.visitedStates=[],this.priorityQ=new S;var e=this.search();this.show(),setTimeout((function(){e&&(t.state.board.setPath(e),t.setState({}))}),100*this.visitedStates.length)}},{key:"changeStart",value:function(t){var e=Object(r.a)(t,2),n=e[0],s=e[1];this.state.board.setStart(new v([n,s])),this.setState({})}},{key:"changeEnd",value:function(t){var e=Object(r.a)(t,2),n=e[0],s=e[1];this.state.board.setEnd(new v([n,s])),this.setState({})}},{key:"addWall",value:function(t){var e=Object(r.a)(t,2),n=e[0],s=e[1];this.state.board.setWall(new v([n,s])),this.setState({})}},{key:"erase",value:function(t){var e=Object(r.a)(t,2),n=e[0],s=e[1];this.state.board.setUnvisited(new v([n,s])),this.setState({})}},{key:"changeBlock",value:function(t){this.setState({block:t})}},{key:"render",value:function(){var t=this,e={"Move Start":function(){return t.changeBlock("start")},"Move Goal":function(){return t.changeBlock("end")},"Draw Wall":function(){return t.changeBlock("wall")},Erase:function(){return t.changeBlock("erase")}};return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"A-star"}),Object(x.jsx)(B,{board:this.state.board.board,onMouseDown:this.setDrawStatusTrue,onMouseUp:this.setDrawStatusFalse,onMouseOver:this.draw,onClick:this.functions[this.state.block]}),Object(x.jsx)(q,{buttons:e}),Object(x.jsx)("div",{className:"row",children:Object(x.jsx)("button",{className:"col-lg-12 btn btn-success",onClick:this.handleSearch,children:"Search!"})})]})}}]),n}(i.a.Component);var T=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(F,{})})},U=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,s=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),s(t),i(t),a(t),o(t)}))};o.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(T,{})}),document.getElementById("root")),U()}},[[20,1,2]]]);
//# sourceMappingURL=main.28b5cea9.chunk.js.map