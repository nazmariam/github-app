(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(7),o=a.n(i),l=a(1),s=a(2),c=a(4),u=a(3),h=a(5),f={COLOR:{null:"#bbdb93",mixed:"#bbdb93",HTML:"#4e6779",JavaScript:"#39675a",Java:"#b4c3a8",Python:"#4f3717",CSS:"#84a580",PHP:"#b4c2a5",Ruby:"#1e3c49","C++":"#392810","C#":"#1e3c49",Shell:"#4e84e6",C:"#6b8ea3","Objective - C":"#5b565b",R:"#5cb8b4",VimL:"#fff",Go:"#264b3e",Perl:"#64a896",CoffeeScript:"#2f5f75",TeX:"#2a5466",Swift:"#744c25",Scala:"#1f170b",Emacs:"#4e6779",Lisp:"#1a342b",Haskell:"#061412",Lua:"#376957",Clojure:"#2d2d2d",Matlab:"#666666",Arduino:"#39675a",Groovy:"#b4c3a8",Puppet:"#4f3717",Rust:"#84a580",PowerShell:"#1e3c49",Erlang:"#4f3717","Visual Basic":"#39675a",Processing:"#1e3c49",Assembly:"#b4c3a8",TypeScript:"#4e84e6",XSLT:"#84a580",ActionScript:"#1e3c49",ASP:"#b4c3a8",OCaml:"#4e84e6",D:"#4f3717",Scheme:"#4e84e6",Dart:"#1e3c49",Julia:"#4e84e6",F:"#84a580",Elixir:"#1e3c49",FORTRAN:"#b4c3a8",Haxe:"#4f3717",Racket:"#39675a",Logos:"#84a580"}},p=new Image;function v(e,t,a,r){var n=t.width,i=t.height,o=t.repos,l=t.repoName;if(requestAnimationFrame(function(){return v(e,{width:n,height:i,repos:o,repoName:l},a,r)}),p.src="static/media/space2.fa3e3e78.jpg",e.fillStyle=e.createPattern(p,"repeat"),e.fill(),e.fillRect(0,0,n,i),0===Object.keys(o).length){e.save(),e.font="32px Montserrat",e.fillStyle="white";var s="Let's check your GitHub repo!",c=e.measureText(s).width;e.fillText(s,n/2-c/2,i/2-16),e.restore()}else{e.save(),e.font="24px Montserrat",e.fillStyle="white";var u=[];a.forEach(function(e){u.push(Object.entries(e))}),u.forEach(function(t,a){var r=t[0][0],n=t[0][1];e.strokeStyle="white",e.beginPath(),e.save(),e.fillStyle=f.COLOR[r],e.arc(100,60*a+70,2*n,0,2*Math.PI),e.stroke(),e.fill(),e.restore(),e.closePath(),"null"!==r?e.fillText(r+" ["+n+"]",100,60*a+70):e.fillText("Mixed ["+n+"]",100,60*a+70)}),e.restore(),r.forEach(function(e,t){var a=t>10?t/10:t+1;e.x+=e.vx*a/20,e.y+=e.vy*a/15,(e.y+e.vy>i-e.radius||e.y+e.vy<e.radius)&&(e.vy=-e.vy),(e.x+e.vx>n-e.radius||e.x+e.vx<e.radius)&&(e.vx=-e.vx),e.draw()})}if("Not Found"===o.message){e.save(),e.font="24px Montserrat",e.fillStyle="white";var h="There is no such galaxy in GitHub Universe",m=e.measureText(h).width;e.fillText(h,n/2-m/2,i/2+12),e.restore()}}var m=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.ctx=this.canvas.getContext("2d"),v(this.ctx,this.props)}},{key:"componentDidUpdate",value:function(){for(var e=this.props.repos,t=[],a=e.map(function(e){return e.language}),r=a.filter(function(e,t,a){return a.indexOf(e)===t}),n=0;n<r.length;n++){var i={},o=r[n];i[o]=0;for(var l=0;l<e.length;l++)e[l].language===r[n]&&i[o]++;t.push(i)}v(this.ctx,this.props,t,this.drawBall())}},{key:"drawBall",value:function(){for(var e=this.props,t=e.repos,a=e.width,r=e.height,n=t.length,i=this.ctx,o=[],l=function(e){var n=t[e].size,l=t[e].language,s=t[e].name,c={x:Math.random()*(a-2*n/1e3)+n/1e3,y:Math.random()*(r-2*n/1e3)+n/1e3,vx:4,vy:3,radius:n/1e3,color:f.COLOR[l],draw:function(){i.save(),i.beginPath(),i.arc(this.x,this.y,this.radius,0,2*Math.PI,!0),i.closePath(),i.fillStyle=this.color,i.fill(),i.strokeStyle="white",i.stroke(),i.save(),i.font="14px Montserrat",i.fillStyle="#fff";var e=i.measureText(s).width;i.fillText(s,this.x-e/2,this.y+7),i.restore(),i.restore()}};o.push(c)},s=0;s<n;s++)l(s);return o}},{key:"render",value:function(){var e=this,t=this.props,a=t.width,r=t.height;return n.a.createElement("canvas",{ref:function(t){e.canvas=t},width:a,height:r})}}]),t}(n.a.PureComponent),d=(a(14),window.innerWidth),b=window.innerHeight;function y(e){var t="https://api.github.com/users/".concat(e);return fetch(t).then(function(e){return e.json()})}function g(e){var t="https://api.github.com/users/".concat(e,"/repos?sort=updated&direction=desc");return fetch(t).then(function(e){return e.json()})}var x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={repoName:"",repos:[],error:null,info:[]},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"renderList",value:function(e){return n.a.createElement("ul",null,e.map(function(e){return n.a.createElement("li",{key:e.id},e.name," ",n.a.createElement("strong",null,"(",e.language||"mixed",")")," ",e.size," KB")}))}},{key:"getAllInfo",value:function(e){var t=this;return Promise.all([g(e),y(e)]).then(function(e){t.setState({repos:e[0],info:e[1]})}).catch(function(e){return t.setState({error:e})})}},{key:"showInfo",value:function(){var e=this.state.info;return n.a.createElement("div",null,e.name?n.a.createElement("img",{src:e.avatar_url,alt:e.login}):"",n.a.createElement("span",null,e.name))}},{key:"render",value:function(){var e=this,t=this.state,a=t.repoName,r=t.repos,i=t.error;return n.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},n.a.createElement(m,{repos:r,width:d,height:b,repoName:a}),n.a.createElement("div",{className:"info",style:{position:"absolute"}},n.a.createElement("form",{style:{padding:"16px 40px"},onSubmit:function(t){t.preventDefault(),e.getAllInfo(a)}},n.a.createElement("input",{value:a,placeholder:"Enter github name",onChange:function(t){return e.setState({repoName:t.target.value})}}),n.a.createElement("button",null,"Submit")),i&&n.a.createElement("pre",{style:{color:"red"}},i.message),this.renderList(r)),n.a.createElement("div",{className:"infoAcc"},this.showInfo()))}}]),t}(n.a.Component),w=document.getElementById("root");o.a.render(n.a.createElement(x,null),w)},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.d881f48a.chunk.js.map