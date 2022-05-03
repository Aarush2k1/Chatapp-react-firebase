(this.webpackJsonpchatapp_react=this.webpackJsonpchatapp_react||[]).push([[0],{122:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(17),s=n.n(i),o=n(16),r=(n(122),n(21)),l=n(206),d=n(201),j=Object(d.a)((function(e){return{icon:{marginRight:e.spacing(2)},navColor:{backgroundColor:"#128C7E"},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},a:{textDecoration:null},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}})),u=n(204),h=n(210),b=n(207),m=n(149),O=n(209),p=n(211),x=n(208),f=n(91),g=n.n(f),v=n(34),y=v.a.initializeApp({apiKey:"AIzaSyC0_k9_SKEYPwBnc6HOxyOhHJOB-0BggHg",authDomain:"chatapp-7b26c.firebaseapp.com",projectId:"chatapp-7b26c",storageBucket:"chatapp-7b26c.appspot.com",messagingSenderId:"578435569576",appId:"1:578435569576:web:917c5038b307df95412f9d"}).firestore(),C=v.a.auth(),S=(new v.a.auth.GoogleAuthProvider,y),_=n(89),N=n(4);function k(){var e={signInFlow:"popup",signInOptions:[v.a.auth.GoogleAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return!1}}},t=j();return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(a.a.Fragment,{children:[Object(N.jsx)(u.a,{}),Object(N.jsx)(l.a,{position:"relative",className:t.navColor,children:Object(N.jsxs)(b.a,{children:[Object(N.jsx)(x.a,{className:t.icon}),Object(N.jsx)(m.a,{variant:"h6",color:"inherit",noWrap:!0,children:"Chat Application"})]})}),Object(N.jsx)("main",{children:Object(N.jsx)("div",{className:t.heroContent,children:Object(N.jsxs)(O.a,{maxWidth:"sm",children:[Object(N.jsx)(m.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"Chat Application"}),Object(N.jsx)(m.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}),Object(N.jsxs)("div",{className:t.heroButtons,children:[Object(N.jsxs)(h.a,{container:!0,spacing:2,justify:"center",children:[Object(N.jsx)(h.a,{item:!0,children:Object(N.jsx)(p.a,{variant:"contained",color:"primary",href:"/signup",children:"Signup"})}),Object(N.jsx)(h.a,{item:!0,children:Object(N.jsx)(p.a,{variant:"outlined",color:"secondary",href:"/login",children:"Login"})})]}),Object(N.jsx)(h.a,{item:!0,children:Object(N.jsx)(_.FirebaseAuth,{uiConfig:e,firebaseAuth:C})}),Object(N.jsx)(h.a,{item:!0,children:Object(N.jsxs)(p.a,{variant:"outlined",onClick:function(){C.signInAnonymously().catch((function(e){return alert("".concat(e))}))},children:[Object(N.jsx)(g.a,{}),"Continue Anonymously"]})})]})]})})}),Object(N.jsxs)("footer",{className:t.footer,children:[Object(N.jsx)(m.a,{variant:"h6",align:"center",gutterBottom:!0,children:"Footer"}),Object(N.jsx)(m.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"Something here to give the footer a purpose!"})]})]})})}n(140);var R=n(96),A=n.n(R),I=n(224),E=n(214),M=n(69),L=n.n(M),w=(n(141),n(92)),F=n.n(w),T=n(54);var B=function(e){var t,n,a=e.id,i=e.name,s=Object(c.useState)([]),r=Object(o.a)(s,2),l=r[0],d=r[1];return Object(c.useEffect)((function(){a&&S.collection("chats").doc(a).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return d(e.docs.map((function(e){return e.data()})))}))}),[a]),Object(N.jsx)(T.b,{to:"/chats/".concat(a),children:Object(N.jsxs)("div",{className:"sidebarChat",children:[Object(N.jsx)(I.a,{src:"https://avatars.dicebear.com/api/avataaars/".concat(a,".svg")}),Object(N.jsxs)("div",{className:"sidebarChat_info",children:[Object(N.jsx)("h2",{children:i}),(null===(t=l[0])||void 0===t?void 0:t.photo)?Object(N.jsx)("div",{children:Object(N.jsx)(F.a,{})}):null,Object(N.jsx)("p",{children:null===(n=l[0])||void 0===n?void 0:n.message})]})]})})},D=n(44),U=n(225);var P=function(e){var t=e.name,n=e.icon,c=e.onClick;return Object(N.jsx)("div",{children:Object(N.jsx)(U.a,{title:Object(N.jsx)("span",{style:{fontSize:"14px",padding:"8px 5px 8px 5px"},children:t}),placement:"bottom-end",children:Object(N.jsx)(E.a,{onClick:c,children:n})})})},W=n(104),V=n(226);var z=function(e){var t=e.menuLists,n=e.menu,c=e.handleMenuClose;return Object(N.jsx)("div",{children:Object(N.jsx)(W.a,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},getContentAnchorEl:null,children:t.map((function(e){return Object(N.jsx)(V.a,{onClick:e.onClick,children:e.title},e.id)}))})})},H=n(68),J=n.n(H),K=n(94),G=n.n(K);n(143);var X=function(e){var t=e.placeholder,n=e.setSearch,a=e.search,i=Object(c.useState)(!1),s=Object(o.a)(i,2),r=s[0],l=s[1];return Object(N.jsx)("div",{className:"search ".concat(!0===r&&"search__bgColorChange"),children:Object(N.jsxs)("div",{className:"search__container",children:[Object(N.jsx)("span",{className:"".concat(!0===r?"arroww":""),children:r?Object(N.jsx)(G.a,{}):Object(N.jsx)(J.a,{})}),Object(N.jsx)("input",{value:a,onChange:function(e){return n(e.target.value)},type:"text",placeholder:t,required:!0,onFocus:function(){l(!0)},onBlur:function(){l(!1)}})]})})},Y=n(219),q=n(222),Q=n(215),Z=n(218),$=n(217),ee=n(216),te=n(95),ne=n.n(te);var ce=function(e){var t=e.user,n=e.db,a=e.firebase,i=Object(c.useState)(""),s=Object(o.a)(i,2),r=s[0],l=s[1],d=Object(c.useState)(!1),j=Object(o.a)(d,2),u=j[0],h=j[1],b=function(){h(!1),l("")};return Object(N.jsxs)("div",{children:[Object(N.jsx)(P,{name:"New Chat",onClick:function(){h(!0)},icon:Object(N.jsx)(ne.a,{})}),Object(N.jsxs)(Q.a,{open:u,onClose:b,"aria-labelledby":"form-dialog-title",children:[Object(N.jsx)(ee.a,{id:"form-dialog-title",children:"Create Chat Room"}),Object(N.jsx)($.a,{children:Object(N.jsx)(q.a,{autoFocus:!0,margin:"dense",id:"name",label:"Room Name",type:"text",fullWidth:!0,value:r,onChange:function(e){return l(e.target.value)}})}),Object(N.jsxs)(Z.a,{children:[Object(N.jsx)(p.a,{onClick:b,color:"primary",children:"Cancel"}),Object(N.jsx)(p.a,{onClick:function(e){e.preventDefault(),r&&n.collection("chats").add({roomOwner:t.uid,createdBy:t.displayName,name:r,timestamp:a.firestore.FieldValue.serverTimestamp()}).then((function(e){n.collection("chats").doc(e.id).set({id:e.id},{merge:!0})})).catch((function(e){console.error("Error adding document: ",e)})),h(!1),l("")},color:"primary",disabled:!r,children:"Create"})]})]})]})};var ae=function(e){var t=e.rooms,n=e.setIsRoomExist,a=e.isRoomExist,i=Object(r.f)(),s=Object(D.a)(C),l=Object(o.a)(s,1)[0],d=Object(r.g)().roomId,j=Object(c.useState)(null),u=Object(o.a)(j,2),h=u[0],b=u[1],m=Object(c.useState)(""),O=Object(o.a)(m,2),p=O[0],x=O[1],f=Object(c.useState)(!1),g=Object(o.a)(f,2),y=g[0],_=g[1],k=Object(c.useState)(!1),R=Object(o.a)(k,2),M=R[0],w=R[1],F=Object(c.useState)(!1),T=Object(o.a)(F,2),U=T[0],W=T[1],V=function(e){return function(t){return(t.data.name+"").toLowerCase().includes(e.toLowerCase())||!e}};Object(c.useEffect)((function(){if(p){var e=Object(N.jsx)(N.Fragment,{children:t.filter(V(p)).map((function(e){return Object(N.jsx)("p",{children:e.name},e.id)}))});console.log("result",e),e.props.children.length>0?W(!0):W(!1)}if(t){var c=t.findIndex((function(e,t){return e.id===d}));c>=0?n(c):-1===c&&(n(c),i.push("/"))}}),[p,t,d,i,n]),Object(c.useEffect)((function(){t&&(t.length>0?(w(!1),_(!0)):0===t.length&&-1===a&&(w(!0),_(!0)))}),[t]);var H=function(e){b(e.currentTarget)},J=[{title:"Profile",onClick:function(){b(null)},id:1e5*Math.random()},{title:"Archived",onClick:function(){alert("Archive is not yet available!")},id:1e5*Math.random()},{title:"Starred",onClick:function(){alert("Starred is not yet available!")},id:1e5*Math.random()},{title:"Settings",onClick:function(){alert("Settings is not yet available!")},id:1e5*Math.random()},{title:"Logout",onClick:function(){return C.signOut(),void i.push("/")},id:1e5*Math.random()}];return Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"sidebar",children:[Object(N.jsxs)("div",{className:"sidebar_header",children:[Object(N.jsx)(I.a,{src:null===l||void 0===l?void 0:l.photoURL}),Object(N.jsxs)("div",{className:"sidebar_headerRight",children:[Object(N.jsx)(E.a,{children:Object(N.jsx)(A.a,{})}),Object(N.jsx)(ce,{db:S,user:l,firebase:v.a}),Object(N.jsx)(P,{name:"Menu",icon:Object(N.jsx)(L.a,{}),onClick:H}),Object(N.jsx)(z,{menuLists:J,menu:h,handleMenuOpen:H,handleMenuClose:function(){b(null)}})]})]}),Object(N.jsx)(X,{search:p,setSearch:x,placeholder:"Search or start new chat"}),Object(N.jsxs)("div",{className:"sidebar_chats",children:[y?Object(N.jsx)(N.Fragment,{children:p?Object(N.jsx)(N.Fragment,{children:U?Object(N.jsx)("div",{children:t.filter(V(p)).map((function(e){return Object(N.jsx)(B,{id:e.id,name:e.data.name},e.id)}))}):Object(N.jsx)("div",{className:"sidebar_chatsContainer_empty",children:Object(N.jsx)("span",{children:"No chat room found"})})}):Object(N.jsx)(N.Fragment,{children:t.map((function(e){return Object(N.jsx)(B,{id:e.id,name:e.data.name},e.id)}))})}):Object(N.jsx)("div",{className:"sidebar_chatsContainer_loading",children:Object(N.jsx)("div",{children:Object(N.jsx)(Y.a,{})})}),M&&y?Object(N.jsx)("div",{className:"sidebar_chatsContainer_empty",children:Object(N.jsx)("span",{children:"No rooms"})}):null]})]})})},ie=(n(144),n(101)),se=n.n(ie),oe=n(103),re=n.n(oe),le=n(98),de=n.n(le),je=n(99),ue=n.n(je),he=n(97),be=n.n(he),me=n(221),Oe=n.p+"static/media/whatsapp-connect.cc17ccc4.jpg",pe=(n(145),n(220));var xe=function(e){var t=e.showLandingScreenPhoto;return Object(N.jsxs)("div",{className:"chat-landing-screen",children:[Object(N.jsx)("div",{children:Object(N.jsx)(pe.a,{in:t,style:{transitionDelay:t?"300ms":"0ms"},children:Object(N.jsx)("img",{className:"chat-landing-screen__photo",src:Oe,alt:"whatsAppConnected"})})}),Object(N.jsx)("div",{className:"chat-landing-screen__title",children:Object(N.jsx)("p",{children:"Keep your phone connected"})}),Object(N.jsx)("div",{children:Object(N.jsx)("p",{children:"WhatsApp connects to your phone to sync messages. To reduce data usage, connect to yor phone to Wi-Fi."})}),Object(N.jsx)(me.a,{}),Object(N.jsxs)("div",{className:"chat-landing-screen__footer",children:[Object(N.jsx)(be.a,{}),Object(N.jsx)("p",{children:"WhatsApp is available for Windows."})]})]})},fe=(n(146),n(223));var ge=function(e){var t=e.chatName,n=e.chatsId,a=(e._chatId,e.msgs),i=e.db,s=(e.isRoomExist,Object(D.a)(C)),r=(Object(o.a)(s,1)[0],Object(c.useState)(null)),l=Object(o.a)(r,2),d=l[0],j=l[1],u=Object(c.useState)(!1),h=Object(o.a)(u,2),b=h[0],m=h[1],O=Object(c.useState)(!1),p=Object(o.a)(O,2),x=p[0],f=p[1];Object(c.useEffect)((function(){var e;(null===(e=a[a.length-1])||void 0===e?void 0:e.timestamp)?m(!0):m(!1),a[a.length-1]?f(!0):f(!1)}),[a,n]);var g=function(e){j(e.currentTarget)},v=[{title:"Contact info",onClick:function(){j(null)},id:1e5*Math.random()},{title:"Select messages",onClick:function(){alert("Select Messages is not yet  available!")},id:1e5*Math.random()},{title:"Mute notifications",onClick:function(){alert("Mute Notifications is not yet available!")},id:1e5*Math.random()},{title:"Clear messages",onClick:function(){alert("Clear Messages is not yet available!")},id:1e5*Math.random()},{title:"Delete Room",onClick:function(){i.collection("chats").doc(n).delete().then((function(){alert("Room successfully deleted!")})).catch((function(e){alert("Error removing room! ".concat(e))}))},id:1e5*Math.random()}];return Object(N.jsxs)("div",{className:"chat_header",children:[Object(N.jsx)(I.a,{src:"https://avatars.dicebear.com/api/avataaars/".concat(n,".svg")}),Object(N.jsxs)("div",{className:"chat_headerInfo",children:[Object(N.jsx)("h3",{children:t}),Object(N.jsx)(fe.a,{only:["xs"],children:x?Object(N.jsx)(N.Fragment,{children:b?Object(N.jsxs)("p",{children:["Last seen ",function(){var e,t;return new Date(null===(e=a[a.length-1])||void 0===e||null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toLocaleTimeString([],{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",hour12:!0,minute:"numeric"})}()]}):Object(N.jsxs)("p",{children:["Last seen ",(new Date).toLocaleTimeString([],{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",hour12:!0,minute:"numeric"})]})}):null})]}),Object(N.jsxs)("div",{className:"chat_headerRight",children:[Object(N.jsx)(P,{name:"Search",icon:Object(N.jsx)(J.a,{}),onClick:function(){alert("search")}}),Object(N.jsx)(P,{name:"Menu",icon:Object(N.jsx)(L.a,{}),onClick:g}),Object(N.jsx)(z,{menuLists:v,menu:d,handleMenuOpen:g,handleMenuClose:function(){j(null)}})]})]})},ve=n(227),ye=n(102),Ce=n.n(ye),Se=n(100),_e=n.n(Se);var Ne=function(e){var t=e.isRoomExist,n=Object(c.useRef)(null),a=Object(c.useState)(""),i=Object(o.a)(a,2),s=i[0],l=i[1],d=Object(r.g)().chatsId,j=Object(D.a)(C),u=Object(o.a)(j,1)[0],h=Object(c.useState)(!1),b=Object(o.a)(h,2),m=b[0],O=b[1],p=Object(c.useState)(""),x=Object(o.a)(p,2),f=x[0],g=x[1],y=Object(c.useState)(""),_=Object(o.a)(y,2),k=_[0],R=_[1],A=Object(c.useState)([]),I=Object(o.a)(A,2),E=I[0],M=I[1],L=Object(c.useState)(!1),w=Object(o.a)(L,2),F=w[0],T=w[1];return Object(c.useEffect)((function(){null!=d?(S.collection("chats").doc(d).onSnapshot((function(e){var t,n;g(null===(t=e.data())||void 0===t?void 0:t.name),R(null===(n=e.data())||void 0===n?void 0:n.id)})),S.collection("chats").doc(d).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return M(e.docs.map((function(e){return e.data()})))})),T(!1)):T(!0)}),[d]),Object(N.jsx)("div",{className:"chat",children:d?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(ge,{chatName:f,chatsId:d,_chatId:k,msgs:E,db:S,isRoomExist:t}),Object(N.jsxs)("div",{className:"chat_body",children:[E.map((function(e){return Object(N.jsxs)("div",{className:"chat_message ".concat(e.name===u.displayName&&"chat_reciever"),children:[Object(N.jsx)("span",{className:"chat_name ".concat(e.uid===u.uid&&"chat_name_sender"),children:e.name}),Object(N.jsx)("div",{className:"chat_message_box",children:Object(N.jsxs)("div",{className:"chat_msg_box_text ".concat(e.uid===u.uid&&"chat__message_box_text_sender"),children:[e.message?e.message:null,Object(N.jsx)("div",{className:"chat_timestamp_container ".concat(e.uid===u.uid&&"chat_timestamp_container_sender"),children:e.timestamp?Object(N.jsx)("div",{className:"chat_timestamp ",children:Object(N.jsxs)("span",{children:[new Date(e.timestamp.toDate()).toLocaleTimeString("en-US",{hour:"numeric",hour12:!0,minute:"numeric"}),e.uid===u.uid?Object(N.jsx)(de.a,{fontSize:"small"}):null]})}):Object(N.jsx)("div",{className:"chat_timestamp",children:Object(N.jsxs)("span",{children:[(new Date).toLocaleTimeString("en-US",{hour:"numeric",hour12:!0,minute:"numeric"}),e.uid===u.uid?Object(N.jsx)(ue.a,{fontSize:"small"}):null]})})})]})})]},e.id)})),Object(N.jsx)("div",{ref:n})]}),Object(N.jsxs)("div",{className:"chat_footer",children:[Object(N.jsx)(ve.a,{}),m?Object(N.jsx)(fe.a,{only:["xs"],children:Object(N.jsx)(P,{name:"Close",icon:Object(N.jsx)(_e.a,{}),onClick:function(){O(!1)}})}):null,Object(N.jsx)(P,{name:"Emoticons",icon:Object(N.jsx)(se.a,{}),onClick:function(){O(!0)}}),Object(N.jsx)(P,{name:"Attach",icon:Object(N.jsx)(Ce.a,{}),onClick:function(){alert("All icons have the same functions, you can only upload images, gifs and videos!")}}),Object(N.jsxs)("form",{children:[Object(N.jsx)("input",{value:s,onChange:function(e){return l(e.target.value)},placeholder:"Type a message",type:"text"}),Object(N.jsx)("button",{onClick:function(e){e.preventDefault(),console.log("You typed>>>>",s),S.collection("chats").doc(d).collection("messages").add({message:s,name:u.displayName,uid:u.uid,timestamp:v.a.firestore.FieldValue.serverTimestamp()}).then((function(e){S.collection("chats").doc(d).collection("messages").doc(e.id).set({id:e.id},{merge:!0})})).catch((function(e){console.error("Error adding document: ",e)})),l("")},type:"submit",children:"Send a message"})]}),Object(N.jsx)(P,{name:"Voice Message",icon:Object(N.jsx)(re.a,{}),onClick:function(){alert("Voice Message is not yet available!","voiceMessage","top-center")}})]})]}):Object(N.jsx)(xe,{showLandingScreenPhoto:F})})};var ke=function(){var e=Object(D.a)(C),t=Object(o.a)(e,1)[0],n=Object(c.useState)([]),a=Object(o.a)(n,2),i=a[0],s=a[1],l=Object(c.useState)(""),d=Object(o.a)(l,2),j=d[0],u=d[1],h=Object(c.useState)(!1),b=Object(o.a)(h,2),m=(b[0],b[1]);return Object(c.useEffect)((function(){var e=C.onAuthStateChanged((function(e){if(e){if(m(!0),S.collection("chats").orderBy("timestamp","desc").onSnapshot((function(e){return s(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})),!0===e.isAnonymous&&null===e.displayName){var n="Anonymous "+Math.floor(1e6*Math.random());C.currentUser.updateProfile({displayName:n,photoURL:""}),S.collection("users").doc(e.uid).set({name:n,about:"Hey there! I am using WhatsApp.",photoURL:"",role:"anonymous",dateJoined:v.a.firestore.FieldValue.serverTimestamp()}).then((function(){console.log("Document successfully updated!")})).catch((function(e){console.error("Error updating document: ",e)}))}if(e.uid&&!1===e.isAnonymous&&null!==e.photoURL){S.collection("users").doc(e.uid).get().then((function(n){n.exists?console.log("USER EXIST"):S.collection("users").doc(e.uid).set({name:e.displayName,about:"Hey there! I am using WhatsApp.",photoURL:t.photoURL,role:"regular",dateJoined:v.a.firestore.FieldValue.serverTimestamp()})})).catch((function(e){alert("".concat(e),"errorAbout","top-center")}))}else if(e.uid&&!1===e.isAnonymous&&null===e.photoURL){S.collection("users").doc(e.uid).get().then((function(t){t.exists?console.log("USER EXIST"):S.collection("users").doc(e.uid).set({name:e.displayName,about:"Hey there! I am using WhatsApp.",photoURL:"",role:"regular",dateJoined:v.a.firestore.FieldValue.serverTimestamp()})})).catch((function(e){alert("".concat(e),"errorAbout","top-center")}))}}else m(!0)}));return function(){e()}}),[t]),Object(N.jsx)(N.Fragment,{children:t?Object(N.jsx)("div",{className:"app",children:Object(N.jsxs)("div",{className:"app_body",children:[Object(N.jsx)(ae,{rooms:i,setIsRoomExist:u,isRoomExist:j}),Object(N.jsxs)(r.c,{children:[Object(N.jsx)(r.a,{exact:!0,path:"/chats/:chatsId",children:Object(N.jsx)(Ne,{isRoomexist:j})}),Object(N.jsx)(r.a,{exact:!0,path:"/",children:Object(N.jsx)(Ne,{isRoomexist:j})})]})]})}):Object(N.jsx)(k,{})})},Re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,228)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(N.jsxs)(T.a,{children:[Object(N.jsx)(ke,{}),","]}),document.getElementById("root")),Re()}},[[147,1,2]]]);
//# sourceMappingURL=main.cc6681a0.chunk.js.map