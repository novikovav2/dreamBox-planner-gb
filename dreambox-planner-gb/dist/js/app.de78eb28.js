(function(e){function t(t){for(var c,r,o=t[0],i=t[1],l=t[2],u=0,b=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&b.push(a[r][0]),a[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);d&&d(t);while(b.length)b.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],c=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(c=!1)}c&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var c={},a={app:0},s=[];function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=c,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"06c2":function(e,t,n){},"09e8":function(e,t,n){"use strict";n("06c2")},1782:function(e,t,n){},"25cb":function(e,t,n){},2995:function(e,t,n){},"2de7":function(e,t,n){},4225:function(e,t,n){"use strict";n("7dd8")},"431d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),a={class:"container"},s={class:"main"};function r(e,t,n,r,o,i){var l=Object(c["z"])("Header"),d=Object(c["z"])("Nav"),u=Object(c["z"])("router-view"),b=Object(c["z"])("Footer");return Object(c["s"])(),Object(c["f"])(c["a"],null,[Object(c["i"])(l),Object(c["g"])("div",a,[Object(c["i"])(d),Object(c["g"])("main",s,[Object(c["i"])(u)]),Object(c["i"])(b)])],64)}var o=n("5530"),i=n("5502"),l=n("9b19"),d=n.n(l),u=function(e){return Object(c["v"])("data-v-b4e7cba4"),e=e(),Object(c["t"])(),e},b={class:"header"},f=u((function(){return Object(c["g"])("img",{src:d.a,alt:"logo"},null,-1)})),j=u((function(){return Object(c["g"])("div",{class:"search-form"},[Object(c["g"])("form",null,[Object(c["g"])("input",{class:"search-input"})])],-1)})),O=[f,j];function p(e,t,n,a,s,r){return Object(c["s"])(),Object(c["f"])("header",b,O)}var h={},m=(n("8822"),n("6b0d")),k=n.n(m);const v=k()(h,[["render",p],["__scopeId","data-v-b4e7cba4"]]);var g=v,T=function(e){return Object(c["v"])("data-v-4e2672c1"),e=e(),Object(c["t"])(),e},C={class:"footerContainer"},w=T((function(){return Object(c["g"])("h4",{class:"footerHeading"},"Make you code come true!",-1)})),y=T((function(){return Object(c["g"])("div",{class:"footerVersion"},"v.1.0.0",-1)})),x=[w,y];function D(e,t,n,a,s,r){return Object(c["s"])(),Object(c["f"])("footer",C,x)}var V={};n("a4c1");const _=k()(V,[["render",D],["__scopeId","data-v-4e2672c1"]]);var I=_,H={class:"nav"},S=Object(c["h"])("Tasks"),R=Object(c["h"])("Vision"),F=Object(c["h"])("Dashboard"),z=Object(c["h"])("Test");function U(e,t,n,a,s,r){var o=Object(c["z"])("router-link");return Object(c["s"])(),Object(c["f"])("nav",H,[Object(c["i"])(o,{to:"/",class:Object(c["o"])(["nav-link",{active:"Home"===r.currentRouteName}])},{default:Object(c["F"])((function(){return[S]})),_:1},8,["class"]),Object(c["i"])(o,{to:"/about",class:Object(c["o"])(["nav-link",{active:"About"===r.currentRouteName}])},{default:Object(c["F"])((function(){return[R]})),_:1},8,["class"]),Object(c["i"])(o,{to:"/dashboard",class:Object(c["o"])(["nav-link",{active:"Dashboard"===r.currentRouteName}])},{default:Object(c["F"])((function(){return[F]})),_:1},8,["class"]),Object(c["i"])(o,{to:"/test",class:Object(c["o"])(["nav-link",{active:"Test"===r.currentRouteName}])},{default:Object(c["F"])((function(){return[z]})),_:1},8,["class"])])}n("b0c0");var N={name:"Nav",computed:{currentRouteName:function(){return this.$route.name}}};n("f3f8");const L=k()(N,[["render",U],["__scopeId","data-v-3c8f7ec1"]]);var B=L,E={name:"App",components:{Nav:B,Header:g,Footer:I},data:function(){return{}},methods:Object(o["a"])({},Object(i["b"])(["fetchData"])),mounted:function(){this.fetchData()}};n("a7a5");const A=k()(E,[["render",r]]);var P=A,M=n("6c02");function G(e,t,n,a,s,r){var o=Object(c["z"])("CardList");return Object(c["s"])(),Object(c["d"])(o)}var J=function(e){return Object(c["v"])("data-v-5a8d85db"),e=e(),Object(c["t"])(),e},Z={class:"dashboard-container"},K={class:"dashboard"},W={class:"section"},$={class:"section-header"},X=J((function(){return Object(c["g"])("p",{class:"section-title"},"Daily Plan",-1)})),Y={class:"section-body"},Q={key:0,class:"greetings"},q={key:1};function ee(e,t,n,a,s,r){var o=Object(c["z"])("CardForList"),i=Object(c["z"])("UdemiCourses"),l=Object(c["z"])("TaskDetails");return Object(c["s"])(),Object(c["f"])("div",Z,[Object(c["g"])("div",K,[Object(c["g"])("div",W,[Object(c["g"])("div",$,[X,Object(c["g"])("button",{class:"section-title",onClick:t[0]||(t[0]=function(){return r.createTask&&r.createTask.apply(r,arguments)})},"New Task")]),Object(c["g"])("div",Y,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(e.getTasks,(function(e){return Object(c["s"])(),Object(c["d"])(o,{key:e,task:e,onClick:function(t){return r.showCard(e.id)}},null,8,["task","onClick"])})),128))])])]),s.cardIsShown?Object(c["e"])("",!0):(Object(c["s"])(),Object(c["f"])("div",Q,[Object(c["i"])(i,{onAddUdemiTask:r.createUdemiTask},null,8,["onAddUdemiTask"])])),s.cardIsShown?(Object(c["s"])(),Object(c["f"])("div",q,[Object(c["i"])(l,{onCloseCard:r.closeCard,onCreateTask:r.createTask,id:s.currentTask.id,task:s.currentTask},null,8,["onCloseCard","onCreateTask","id","task"])])):Object(c["e"])("",!0)])}n("7db0"),n("d3b7");var te=function(e){return Object(c["v"])("data-v-2c549145"),e=e(),Object(c["t"])(),e},ne={class:"card",id:"card"},ce={class:"card-header"},ae={class:"debug"},se={class:"card-button"},re=Object(c["h"])(" Mark as done "),oe=Object(c["h"])(" Cancel task "),ie=Object(c["h"])(" Delete "),le={class:"card-body"},de={ref:"taskForm"},ue={class:"form-div"},be={class:"form-div"},fe=te((function(){return Object(c["g"])("label",{class:"form-label col-sm-2",for:"date"}," Due on: ",-1)})),je=te((function(){return Object(c["g"])("div",{class:"form-div"},[Object(c["g"])("label",{class:"form-label col-sm-2"}," Category: "),Object(c["g"])("select",{class:"form-input col-sm-4",name:"category"},[Object(c["g"])("option"),Object(c["g"])("option",null,"Career"),Object(c["g"])("option",null,"Health"),Object(c["g"])("option",null,"Sports")])],-1)})),Oe={class:"form-div"},pe=te((function(){return Object(c["g"])("label",{class:"form-label"}," Description: ",-1)})),he=Object(c["h"])(),me=te((function(){return Object(c["g"])("br",null,null,-1)})),ke={class:"card-bottom_buttons"},ve=Object(c["h"])(" Submit ");function ge(e,t,n,a,s,r){var o=Object(c["z"])("font-awesome-icon");return Object(c["s"])(),Object(c["f"])("div",ne,[Object(c["g"])("div",ce,[Object(c["g"])("div",ae,[Object(c["g"])("div",null,"ID: "+Object(c["B"])(s.localTask.id),1),Object(c["g"])("div",se,"Status: "+Object(c["B"])(s.localTask.status),1)]),Object(c["g"])("button",{class:"card-button",onClick:t[0]||(t[0]=function(e){return r.setStatus("done")})},[Object(c["i"])(o,{icon:["far","check-circle"]}),re]),Object(c["g"])("button",{class:"card-button",onClick:t[1]||(t[1]=function(e){return r.setStatus("canceled")})},[Object(c["i"])(o,{icon:["far","times-circle"]}),oe]),Object(c["g"])("div",null,[Object(c["g"])("button",{class:"card-button",onClick:t[2]||(t[2]=function(e){return r.deleteHandler(s.localTask.id)})},[Object(c["i"])(o,{icon:["far","trash-alt"],class:"icon-delete"}),ie]),Object(c["g"])("a",null,[Object(c["i"])(o,{icon:["fas","share"],class:"icon-close"})])])]),Object(c["g"])("div",le,[Object(c["g"])("form",de,[Object(c["g"])("div",ue,[Object(c["G"])(Object(c["g"])("input",{class:"form-input full-width form-control",name:"title","onUpdate:modelValue":t[3]||(t[3]=function(e){return s.localTask.title=e})},null,512),[[c["D"],s.localTask.title]])]),Object(c["g"])("div",be,[fe,Object(c["G"])(Object(c["g"])("input",{class:"form-input col-sm-4",id:"date",type:"date",name:"deadline","onUpdate:modelValue":t[4]||(t[4]=function(e){return s.localTask.deadline=e})},null,512),[[c["D"],s.localTask.deadline]])]),je,Object(c["g"])("div",Oe,[pe,he,me,Object(c["G"])(Object(c["g"])("textarea",{class:"form-input",id:"taskBase",cols:"60",rows:"5",name:"text","onUpdate:modelValue":t[5]||(t[5]=function(e){return s.localTask.text=e})},"\n          ",512),[[c["D"],s.localTask.text]])]),Object(c["g"])("div",ke,[Object(c["g"])("div",{onClick:t[6]||(t[6]=function(){return r.submitHandler&&r.submitHandler.apply(r,arguments)}),class:"card-button"},[Object(c["i"])(o,{icon:["far","arrow-alt-circle-down"]}),ve]),Object(c["g"])("div",{onClick:t[7]||(t[7]=function(){return r.closeCard&&r.closeCard.apply(r,arguments)}),class:"card-button"},"Close")])],512)])])}var Te={props:{task:Object,id:String},data:function(){return{localTask:{id:null,title:null,text:"",deadline:null,status:""}}},methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["deleteData","updateData","addData"])),{},{closeCard:function(){this.$emit("closeCard")},updateTask:function(){console.log(this.$refs.taskForm),this.updateData(this.localTask)},submitHandler:function(){console.log("localtask",this.localTask),this.localTask.id?this.updateTask():this.addData(this.localTask),this.closeCard()},setStatus:function(e){this.localTask.status=e},deleteHandler:function(e){console.log(e),this.deleteData(e),this.closeCard()}}),computed:{},mounted:function(){this.localTask=this.task},updated:function(){this.localTask=this.task}};n("09e8");const Ce=k()(Te,[["render",ge],["__scopeId","data-v-2c549145"]]);var we=Ce,ye={class:"task"},xe={class:"task-header"},De={class:"task-check"},Ve={class:"task-title"},_e={class:"task-date"};function Ie(e,t,n,a,s,r){var o=Object(c["z"])("font-awesome-icon");return Object(c["s"])(),Object(c["f"])("div",ye,[Object(c["g"])("div",xe,[Object(c["g"])("div",De,[Object(c["i"])(o,{icon:["far","check-circle"]})]),Object(c["g"])("div",Ve,Object(c["B"])(n.task.title),1)]),Object(c["g"])("p",_e,Object(c["B"])(n.task.deadline?n.task.deadline:""),1)])}var He={props:{task:{type:Object}},name:"CardForList",components:{},data:function(){return{}}};n("4225");const Se=k()(He,[["render",Ie],["__scopeId","data-v-0b63d23d"]]);var Re=Se,Fe=function(e){return Object(c["v"])("data-v-af2c0de6"),e=e(),Object(c["t"])(),e},ze=Fe((function(){return Object(c["g"])("div",{class:"coursesList-heading"},[Object(c["g"])("h2",null,"Want to learn something new?"),Object(c["g"])("h3",null,"Choose from these trending courses")],-1)})),Ue={class:"coursesList"},Ne={class:"cardWrapper"},Le=["src"],Be={class:"udemiTitle"},Ee=["href"],Ae={class:"udemiHeadline"},Pe=["onClick"];function Me(e,t,n,a,s,r){return Object(c["s"])(),Object(c["f"])(c["a"],null,[ze,Object(c["g"])("div",Ue,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(s.udemiCourses,(function(e){return Object(c["s"])(),Object(c["f"])("div",{class:"courseCard",key:e},[Object(c["g"])("div",Ne,[Object(c["g"])("img",{class:"udemiImg",src:e.image_240x135,alt:"img"},null,8,Le),Object(c["g"])("div",Be,[Object(c["g"])("a",{href:e.url},Object(c["B"])(e.title),9,Ee)]),Object(c["g"])("div",Ae,Object(c["B"])(e.headline),1),Object(c["g"])("div",{class:"udemiAddTask",onClick:function(t){return r.udemiAddHandler(e)}}," Add this as Task ",8,Pe)])])})),128))])],64)}var Ge=n("1da1"),Je=(n("96cf"),"http://dreambox.1gb.ru/api/addtask.php"),Ze="http://dreambox.1gb.ru/api/tasks.php",Ke="http://dreambox.1gb.ru/api/deletetask.php",We="http://dreambox.1gb.ru/api/updatetask.php",$e="https://www.udemy.com//api-2.0/courses/?page=1&page_size=4&price=price-free&ordering=highest-rated",Xe={data:function(){return{udemiCourses:null}},methods:{setCourses:function(e){this.udemiCourses=e},fetchUdemi:function(){var e=this;return Object(Ge["a"])(regeneratorRuntime.mark((function t(){var n,c,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={},c={method:"GET",headers:{Accept:"application/json, text/plain, */*",Authorization:"Basic NkRTQnczOXJ0SUFISHpqNXRXRVdDcDZTeDZDaHZIZHJzc0pCUXhpUzpFRjV5dHY5ZUM4NVlVd1NjdTNieUI3S2RIeGd5ZVZCQkRKUU9NeERWeWtVc21iaEI3Y2pmNGV4bHVhelFwd1F2VWRPclc3WWF1a0hHc2x1eEV3cTFKeVhvV0o5Y0h6NmVzbUFKeldXbVlGVFJNMlhicTVBZE5mV0J4VldxTkRtbg==","Content-Type":"application/json;charset=utf-8"}},t.next=4,fetch($e,c).then((function(e){return e.json()}));case 4:for(s in n=t.sent,a=[],n)a.push(n[s]);console.log(a),e.udemiCourses=a[3];case 9:case"end":return t.stop()}}),t)})))()},udemiAddHandler:function(e){var t={id:null,title:"Check the "+e.title+" course on Udemi",text:"Course headline is "+e.headline+". URL: "+e.url,deadline:null,status:"active"};console.log(t),this.$emit("addUdemiTask",t)}},mounted:function(){this.fetchUdemi()}};n("a54f");const Ye=k()(Xe,[["render",Me],["__scopeId","data-v-af2c0de6"]]);var Qe=Ye,qe={name:"CardList",components:{CardForList:Re,TaskDetails:we,UdemiCourses:Qe},data:function(){return{newTask:{id:null,title:null,text:"",deadline:null,status:"active"},cardIsShown:!1,currentTask:null}},computed:Object(o["a"])({},Object(i["c"])(["getTasks"])),methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["addData"])),{},{showCard:function(e){this.currentTask=this.getTasks.find((function(t){return t.id==e})),this.cardIsShown=!0},closeCard:function(){this.cardIsShown=!1},createTask:function(){this.currentTask=this.newTask,this.cardIsShown=!0},createUdemiTask:function(e){this.currentTask=e,console.log(this.currentTask),this.cardIsShown=!0}})};n("86ec");const et=k()(qe,[["render",ee],["__scopeId","data-v-5a8d85db"]]);var tt=et,nt={name:"Home",components:{CardList:tt},data:function(){return{}},methods:{}};n("b72b");const ct=k()(nt,[["render",G]]);var at=ct,st=Object(c["g"])("h1",null,"My Goals",-1),rt=Object(c["g"])("h3",null," In 1 year I would like to be a middle front-end developer working in Google on the most interesting projects ",-1),ot=Object(c["g"])("h3",null," In 5 years I would like to be a senior front-end developer working in my own start-up on the most crazy projects ",-1);function it(e,t,n,a,s,r){return Object(c["s"])(),Object(c["f"])(c["a"],null,[st,rt,ot],64)}var lt={name:"About",components:{}};const dt=k()(lt,[["render",it]]);var ut=dt,bt=function(e){return Object(c["v"])("data-v-765c36f2"),e=e(),Object(c["t"])(),e},ft={class:"dashboard-container"},jt={class:"dashboard"},Ot={class:"section"},pt=bt((function(){return Object(c["g"])("div",{class:"section-header"},[Object(c["g"])("p",{class:"section-title"},"Daily Plan"),Object(c["g"])("a",{class:"section-plus"},"+")],-1)})),ht={class:"section-body"};function mt(e,t,n,a,s,r){var o=Object(c["z"])("DashboardCard"),i=Object(c["z"])("CardView");return Object(c["s"])(),Object(c["f"])("div",ft,[Object(c["g"])("div",jt,[Object(c["g"])("div",Ot,[pt,Object(c["g"])("div",ht,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(e.getTasks,(function(e){return Object(c["s"])(),Object(c["d"])(o,{key:e.id,task:e,onTaskChosen:function(t){return r.openCard(e.id)}},null,8,["task","onTaskChosen"])})),128))])])]),Object(c["i"])(i,{task:s.taskForView,id:"cardView",onTaskDeleted:r.deleteHandler},null,8,["task","onTaskDeleted"])])}var kt={class:"task-header"},vt={class:"task-date"};function gt(e,t,n,a,s,r){var o=Object(c["z"])("font-awesome-icon");return Object(c["s"])(),Object(c["f"])("div",{class:Object(c["o"])(["task",{active:s.isChecked}])},[Object(c["g"])("div",kt,[Object(c["g"])("div",{class:Object(c["o"])(["task-check",{active:s.isChecked}]),onClick:t[0]||(t[0]=function(){return r.clickHandler&&r.clickHandler.apply(r,arguments)})},[Object(c["i"])(o,{icon:["far","check-circle"]})],2),Object(c["g"])("a",{class:"task-title",onClick:t[1]||(t[1]=function(e){return r.titleClicked(n.task.id)})},Object(c["B"])(n.task.title),1)]),Object(c["g"])("p",vt,Object(c["B"])(n.task.deadline?n.task.deadline:""),1)],2)}var Tt={props:{task:{type:Object}},name:"DashboardCard",components:{},data:function(){return{isChecked:!1,taskForView:{}}},computed:Object(o["a"])({},Object(i["c"])(["getTasks"])),methods:{clickHandler:function(){console.log(this.isChecked),this.isChecked=!this.isChecked},titleClicked:function(){this.$emit("taskChosen")}}};n("8bbd");const Ct=k()(Tt,[["render",gt],["__scopeId","data-v-52d9b58e"]]);var wt=Ct,yt=function(e){return Object(c["v"])("data-v-91c5bc94"),e=e(),Object(c["t"])(),e},xt={class:"card",id:"card"},Dt={class:"card-header"},Vt={class:"card-button"},_t=Object(c["h"])(" Done "),It=Object(c["h"])(" Delete "),Ht={class:"card-body"},St={class:"form-control"},Rt=["value"],Ft={class:"form-control"},zt=yt((function(){return Object(c["g"])("label",{class:"form-label",for:"date"}," Due on: ",-1)})),Ut=["value"],Nt=yt((function(){return Object(c["g"])("div",{class:"form-control"},[Object(c["g"])("label",{class:"form-label"}," Раздел: "),Object(c["g"])("select",{class:"form-input"},[Object(c["g"])("option"),Object(c["g"])("option",null,"Спринт 1"),Object(c["g"])("option",null,"Спринт 2"),Object(c["g"])("option",null,"Спринт 3")])],-1)})),Lt={class:""},Bt=yt((function(){return Object(c["g"])("label",{class:"form-label"}," Описание: ",-1)})),Et=Object(c["h"])(),At=yt((function(){return Object(c["g"])("br",null,null,-1)})),Pt=["value"];function Mt(e,t,n,a,s,r){var o=Object(c["z"])("font-awesome-icon");return Object(c["s"])(),Object(c["f"])("div",xt,[Object(c["g"])("div",Dt,[Object(c["g"])("button",Vt,[Object(c["i"])(o,{icon:["far","check-circle"]}),_t]),Object(c["g"])("div",null,[Object(c["g"])("button",{class:"card-button",onClick:t[0]||(t[0]=function(e){return r.deleteHandler(n.task.id)})},[Object(c["i"])(o,{icon:["far","trash-alt"],class:"icon-delete"}),It]),Object(c["g"])("a",{onClick:t[1]||(t[1]=function(){return r.closeCard&&r.closeCard.apply(r,arguments)})},[Object(c["i"])(o,{icon:["fas","share"],class:"icon-close"})])])]),Object(c["g"])("div",Ht,[Object(c["g"])("form",null,[Object(c["g"])("div",St,[Object(c["g"])("input",{class:"form-input full-width",value:n.task.title},null,8,Rt)]),Object(c["g"])("div",Ft,[zt,Object(c["g"])("input",{class:"form-input",id:"date",type:"date",value:r.parseDate(n.task.deadline)},null,8,Ut)]),Nt,Object(c["g"])("div",Lt,[Bt,Et,At,Object(c["g"])("textarea",{class:"form-input",cols:"60",rows:"5",value:n.task.text},"\n          ",8,Pt)])])])])}n("99af");var Gt={props:{task:Object},methods:Object(o["a"])(Object(o["a"])({},Object(i["d"])(["deleteTask"])),{},{closeCard:function(){var e=document.getElementsByClassName("card")[0];e.style.display="none"},parseDate:function(e){var t=new Date(e);return"".concat(t.getFullYear(),"-").concat(t.getMonth(),"-").concat(t.getDate())},deleteHandler:function(e){console.log(e),this.deleteTask(e),this.$emit("taskDeleted")}})};n("8d10");const Jt=k()(Gt,[["render",Mt],["__scopeId","data-v-91c5bc94"]]);var Zt=Jt,Kt={name:"Dashboard",components:{CardView:Zt,DashboardCard:wt},data:function(){return{taskForView:{}}},computed:Object(o["a"])({},Object(i["c"])(["getTasks"])),methods:{openCard:function(e){this.taskForView=this.getTasks.find((function(t){return t.id===e}));var t=document.getElementById("cardView");t.style.display="block"},deleteHandler:function(){var e=document.getElementById("cardView");e.style.display="none"}}};n("e995");const Wt=k()(Kt,[["render",mt],["__scopeId","data-v-765c36f2"]]);var $t=Wt,Xt=Object(c["g"])("h1",null,"Test your ideas here!",-1),Yt=Object(c["g"])("h3",null," add your components below in the Test Component in View folder. Don't forget to add them to components object below. ",-1);function Qt(e,t,n,a,s,r){var o=Object(c["z"])("Kate");return Object(c["s"])(),Object(c["f"])(c["a"],null,[Xt,Yt,Object(c["i"])(o)],64)}function qt(e,t,n,a,s,r){return Object(c["s"])(),Object(c["f"])("h1",null,"Kate")}var en={name:"Kate"};const tn=k()(en,[["render",qt]]);var nn=tn,cn={name:"Test",components:{Kate:nn}};const an=k()(cn,[["render",Qt]]);var sn=an,rn=[{path:"/",name:"Home",component:at},{path:"/about",name:"About",component:ut},{path:"/dashboard",name:"Dashboard",component:$t},{path:"/test",name:"Test",component:sn}],on=Object(M["a"])({history:Object(M["b"])(),routes:rn}),ln=on,dn=(n("c740"),n("a434"),n("a15b"),n("fb6a"),n("ac1f"),n("1276"),n("e9c4"),Object(i["a"])({state:{taskList:[]},mutations:{setTasks:function(e,t){e.taskList=t},addTask:function(e,t){var n=t.title,c=t.text,a=t.deadline,s=t.status;c&&e.taskList.push({title:n,text:c,deadline:a,status:s})},deleteTask:function(e,t){var n=e.taskList.findIndex((function(e){return e.id===t})),c=e.taskList.splice(n,1);console.log("item deleted: ",c)},updateTask:function(e,t){var n=e.taskList.findIndex((function(e){return e.id===t.id}));e.taskList[n]=t,console.log("item updated: ",t)}},getters:{getTasks:function(e){return e.taskList}},actions:{fetchData:function(e){return Object(Ge["a"])(regeneratorRuntime.mark((function t(){var n,c,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,fetch(Ze).then((function(e){return e.json()}));case 3:for(s in c=t.sent,a=[],c)a.push(c[s]);console.log(a),n("setTasks",a);case 8:case"end":return t.stop()}}),t)})))()},addData:function(e,t){return Object(Ge["a"])(regeneratorRuntime.mark((function n(){var c,a,s,r,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return c=e.commit,n.prev=1,console.log(t),t.title||(t.title=t.text.split(" ").slice(0,3).join(" ")),a=JSON.stringify(t),s={credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:"json="+a},n.next=8,fetch(Je,s);case 8:return r=n.sent,n.next=11,r.json();case 11:if(o=n.sent,i=o.errors,!i){n.next=15;break}throw new Error(i);case 15:c("addTask",t),n.next=21;break;case 18:n.prev=18,n.t0=n["catch"](1),console.error(n.t0.message);case 21:case"end":return n.stop()}}),n,null,[[1,18]])})))()},deleteData:function(e,t){return Object(Ge["a"])(regeneratorRuntime.mark((function n(){var c,a,s,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return c=e.commit,a={credentials:"include",method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t})},n.prev=2,n.next=5,fetch(Ke,a);case 5:return s=n.sent,n.next=8,s.json();case 8:if(r=n.sent,o=r.errors,!o){n.next=12;break}throw new Error(o);case 12:c("deleteTask",t),n.next=18;break;case 15:n.prev=15,n.t0=n["catch"](2),console.error(n.t0);case 18:case"end":return n.stop()}}),n,null,[[2,15]])})))()},updateData:function(e,t){return Object(Ge["a"])(regeneratorRuntime.mark((function n(){var c,a,s,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return c=e.commit,n.prev=1,a={credentials:"include",method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},n.next=5,fetch(We,a);case 5:return s=n.sent,n.next=8,s.json();case 8:if(r=n.sent,o=r.errors,!o){n.next=12;break}throw new Error(o);case 12:c("updateTask",t),n.next=18;break;case 15:n.prev=15,n.t0=n["catch"](1),console.error(n.t0);case 18:case"end":return n.stop()}}),n,null,[[1,15]])})))()}},modules:{}})),un=n("ecee"),bn=n("ad3d"),fn=n("b702"),jn=n("c074");un["c"].add(fn["a"]),un["c"].add(fn["b"]),un["c"].add(jn["a"]),Object(c["c"])(P).component("font-awesome-icon",bn["a"]).use(dn).use(ln).mount("#app")},"7dd8":function(e,t,n){},"86ec":function(e,t,n){"use strict";n("2995")},8822:function(e,t,n){"use strict";n("b76b")},"8bbd":function(e,t,n){"use strict";n("2de7")},"8d10":function(e,t,n){"use strict";n("431d")},"9b19":function(e,t,n){e.exports=n.p+"img/logo.387a6cf3.svg"},a4c1:function(e,t,n){"use strict";n("25cb")},a54f:function(e,t,n){"use strict";n("1782")},a7a5:function(e,t,n){"use strict";n("da9a")},a95b:function(e,t,n){},b72b:function(e,t,n){"use strict";n("dabc")},b76b:function(e,t,n){},da9a:function(e,t,n){},dabc:function(e,t,n){},e995:function(e,t,n){"use strict";n("eae4")},eae4:function(e,t,n){},f3f8:function(e,t,n){"use strict";n("a95b")}});
//# sourceMappingURL=app.de78eb28.js.map