(this["webpackJsonplinked-in-clone"]=this["webpackJsonplinked-in-clone"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},103:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(14),i=a.n(c),r=(a(95),a(24)),o=(a(99),a(55)),l=Object(o.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),d=l.actions,j=d.login,u=d.logout,b=function(e){return e.user.user},h=l.reducer,O=a(31),p=(a(100),a(101),a(4));var m=function(e){var t=e.Icon,a=e.title,s=e.color;return Object(p.jsxs)("div",{class:"inputOption",children:[Object(p.jsx)(t,{style:{color:s}}),Object(p.jsx)("h4",{children:a})]})},x=a(73),v=a.n(x),f=a(74),g=a.n(f),N=a(75),y=a.n(N),w=a(76),_=a.n(w),I=a(77),k=a.n(I),C=a(149),L=(a(103),a(68)),S=a.n(L),U=a(69),R=a.n(U),B=a(71),E=a.n(B),A=a(70),W=a.n(A);var D=function(e){var t=e.name,a=e.description,s=e.message,n=e.photoURL;return Object(p.jsxs)("div",{className:"post",children:[Object(p.jsxs)("div",{className:"post_header",children:[Object(p.jsx)(C.a,{src:n,children:t[0].toUpperCase()}),Object(p.jsxs)("div",{className:"post_info",children:[Object(p.jsx)("h2",{children:t}),Object(p.jsx)("p",{children:a})]})]}),Object(p.jsx)("div",{className:"post_body",children:Object(p.jsxs)("p",{children:[s," "]})}),Object(p.jsxs)("div",{className:"post_button",children:[Object(p.jsx)(m,{Icon:S.a,title:"Like",color:"grey"}),Object(p.jsx)(m,{Icon:R.a,title:"Comment",color:"grey"}),Object(p.jsx)(m,{Icon:W.a,title:"Share",color:"grey"}),Object(p.jsx)(m,{Icon:E.a,title:"Send",color:"grey"})]})]})},P=a(48),J=P.a.initializeApp({apiKey:"AIzaSyAB7kHk-5hkTkoizdCu6TtJcmVDwdwrgqE",authDomain:"llinked-in-clone.firebaseapp.com",projectId:"llinked-in-clone",storageBucket:"llinked-in-clone.appspot.com",messagingSenderId:"479018598776",appId:"1:479018598776:web:8fd5a6616524e38946088d"}).firestore(),M=P.a.auth();var V=function(){var e=Object(r.c)(b),t=Object(s.useState)(),a=Object(O.a)(t,2),n=a[0],c=a[1],i=Object(s.useState)([]),o=Object(O.a)(i,2),l=o[0],d=o[1];return Object(s.useEffect)((function(){J.collection("post").orderBy("timestamp","desc").onSnapshot((function(e){return d(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(p.jsxs)("div",{className:"feed",children:[Object(p.jsxs)("div",{className:"feed_inputContainer",children:[Object(p.jsxs)("div",{className:"feed_input",children:[Object(p.jsx)(v.a,{}),Object(p.jsxs)("form",{action:"",children:[Object(p.jsx)("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},name:"",id:"",placeholder:"Start a post"}),Object(p.jsx)("button",{onClick:function(t){t.preventDefault(),J.collection("post").add({name:e.displayName,description:e.email,message:n,photoURL:e.photoURL,timestamp:P.a.firestore.FieldValue.serverTimestamp()}),c("")},type:"submit",children:"send"})]})]}),Object(p.jsxs)("div",{className:"feed_inputOptions",children:[Object(p.jsx)(m,{Icon:g.a,title:"photo",color:"#70B5F9"}),Object(p.jsx)(m,{Icon:y.a,title:"video",color:"#E7A33E"}),Object(p.jsx)(m,{Icon:_.a,title:"Event",color:"#C0CBCD"}),Object(p.jsx)(m,{Icon:k.a,title:"write article",color:"#7fc15e"})]})]}),l.map((function(e){var t=e.id,a=e.data,s=a.name,n=a.description,c=a.message,i=a.photoURL;return Object(p.jsx)(D,{name:s,description:n,message:c,photoURL:i},t)}))]})},z=(a(107),a(78)),H=a.n(z);a(108);var T=function(e){var t=e.avatar,a=e.Icon,s=e.title,n=e.onClick,c=Object(r.c)(b);return Object(p.jsxs)("div",{className:"headerOption",onClick:n,children:[a&&Object(p.jsx)(a,{className:"headerOption_icon"}),t&&Object(p.jsx)(C.a,{className:"headerOption_icon",src:null===c||void 0===c?void 0:c.photoURL,children:null===c||void 0===c?void 0:c.email[0].toUpperCase()}),Object(p.jsx)("h3",{className:"headerOption__title",children:s})]})},q=a(79),F=a.n(q),G=a(80),K=a.n(G),$=a(81),Q=a.n($),X=a(82),Y=a.n(X),Z=a(83),ee=a.n(Z);var te=function(){var e=Object(r.b)();return Object(p.jsxs)("div",{className:"header",children:[Object(p.jsxs)("div",{className:"header-left",children:[Object(p.jsx)("img",{src:"https://www.flaticon.com/svg/static/icons/svg/174/174857.svg",alt:""}),Object(p.jsxs)("div",{className:"header-search",children:[Object(p.jsx)(H.a,{}),Object(p.jsx)("input",{type:"text",placeholder:"Search"})]})]}),Object(p.jsxs)("div",{className:"header-right",children:[Object(p.jsx)(T,{Icon:F.a,title:"Home"}),Object(p.jsx)(T,{Icon:K.a,title:"My Network"}),Object(p.jsx)(T,{Icon:Q.a,title:"Jobs"}),Object(p.jsx)(T,{Icon:Y.a,title:"Messaging"}),Object(p.jsx)(T,{Icon:ee.a,title:"Notifications"}),Object(p.jsx)(T,{avatar:!0,title:"Me",onClick:function(){e(u()),M.signOut()}})]})]})},ae=a(146),se=a(147),ne=a(145),ce=(a(109),Object(ne.a)((function(e){return{root:{"& > *":{marginBottom:e.spacing(2)}}}})));var ie=function(){var e=ce(),t=Object(s.useState)(""),a=Object(O.a)(t,2),n=a[0],c=a[1],i=Object(s.useState)(""),o=Object(O.a)(i,2),l=o[0],d=o[1],u=Object(s.useState)(""),b=Object(O.a)(u,2),h=b[0],m=b[1],x=Object(s.useState)(""),v=Object(O.a)(x,2),f=v[0],g=v[1],N=Object(r.b)();return Object(p.jsxs)("div",{className:"login",children:[Object(p.jsxs)("form",{noValidate:!0,autoComplete:"off",className:e.root,children:[Object(p.jsx)(ae.a,{type:"text",id:"outlined-basic",label:"Name",fullWidth:!0,placeholder:"Name is required for registration",variant:"outlined",value:n,onChange:function(e){return c(e.target.value)}}),Object(p.jsx)(ae.a,{id:"outlined-basic",label:"Photo url",fullWidth:!0,placeholder:"It is optional",variant:"outlined",value:f,onChange:function(e){return g(e.target.value)}}),Object(p.jsx)(ae.a,{type:"email",id:"outlined-basic",label:"Email",fullWidth:!0,variant:"outlined",value:l,onChange:function(e){return d(e.target.value)}}),Object(p.jsx)(ae.a,{type:"password",id:"outlined-basic",label:"password",fullWidth:!0,variant:"outlined",value:h,onChange:function(e){return m(e.target.value)}}),Object(p.jsx)(se.a,{onClick:function(e){e.preventDefault(),M.signInWithEmailAndPassword(l,h).then(j((function(e){return{email:e.user.email,uid:e.user.uid,displayName:e.user.displayName,photoURL:e.user.photoURL}})))},fullWidth:!0,variant:"contained",color:"primary",children:"Log-in"})]}),Object(p.jsxs)("p",{children:["Not a member?"," ",Object(p.jsxs)("span",{className:"register",onClick:function(){n||alert("need to fill your name"),M.createUserWithEmailAndPassword(l,h).then((function(e){e.user.updateProfile({displayName:n,photoURL:f}).then((function(){N(j({email:e.user.email,uid:e.user.uid,displayName:n,photoURL:f}))}))})).catch((function(e){return alert(e)}))},children:[" ","Register"]})]})]})};a(110);var re=function(){var e=function(e){return Object(p.jsxs)("div",{className:"sidebar_recentitem",children:[Object(p.jsx)("span",{className:"hash_tag",children:"#"}),Object(p.jsx)("p",{children:e})]})},t=Object(r.c)(b);return Object(p.jsxs)("div",{className:"sidebar",children:[Object(p.jsxs)("div",{className:"sidebar_top",children:[Object(p.jsx)("img",{src:"https://source.unsplash.com/random",alt:""}),Object(p.jsx)(C.a,{className:"sidebar_avatar",src:t.photoURL,children:t.email[0].toUpperCase()}),Object(p.jsx)("h2",{children:t.displayName}),Object(p.jsxs)("h4",{children:[" ",t.email," "]})]}),Object(p.jsxs)("div",{className:"sidebar_stats",children:[Object(p.jsxs)("div",{className:"sidebar_stat",children:[Object(p.jsx)("p",{children:"who viewed you"}),Object(p.jsx)("p",{className:"sidebar_statNumber",children:"2,567"})]}),Object(p.jsxs)("div",{className:"sidebar_stat",children:[Object(p.jsx)("p",{children:" viewes on post"}),Object(p.jsx)("p",{className:"sidebar_statNumber",children:"4,567"})]})]}),Object(p.jsxs)("div",{className:"sidebar_bottom",children:[Object(p.jsx)("p",{children:"recent"}),e("reactjs"),e("programming"),e("software engineering"),e("web developer")]})]})},oe=(a(111),a(85)),le=a.n(oe),de=a(84),je=a.n(de);var ue=function(){var e=function(e,t){return Object(p.jsxs)("div",{className:"widgets_article",children:[Object(p.jsx)("div",{className:"widgets_articleLeft",children:Object(p.jsx)(je.a,{})}),Object(p.jsxs)("div",{className:"widgets_articleRight",children:[Object(p.jsx)("h2",{children:e}),Object(p.jsxs)("p",{children:[" ",t," "]})]})]})};return Object(p.jsxs)("div",{className:"widgets",children:[Object(p.jsxs)("div",{className:"widgets_header",children:[Object(p.jsx)("h2",{children:"LinkedIn News"}),Object(p.jsx)(le.a,{})]}),e("Bangladesh is Great","Bangladesh, to the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many waterways."),e("Life Is Beautiful","Hope is a good thing may be the best of things. And hope never Dies"),e("Positive Vibes","Don't be afraid to give up the good to go for the better.")]})};var be=function(){var e=Object(r.c)(b),t=Object(r.b)();return Object(s.useEffect)((function(){M.onAuthStateChanged((function(e){t(e?j({email:e.email,uid:e.uid,displayName:e.displayName,photoURL:e.photoURL}):u())}))}),[]),Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)(te,{}),e?Object(p.jsxs)("div",{className:"app_body",children:[Object(p.jsx)(re,{}),Object(p.jsx)(V,{}),Object(p.jsx)(ue,{})]}):Object(p.jsx)(ie,{})]})},he=Object(o.a)({reducer:{user:h}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(r.a,{store:he,children:Object(p.jsx)(be,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},95:function(e,t,a){},99:function(e,t,a){}},[[112,1,2]]]);
//# sourceMappingURL=main.0c4b5ff5.chunk.js.map