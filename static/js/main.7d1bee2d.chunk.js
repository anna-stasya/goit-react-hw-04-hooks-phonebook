(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{2:function(t,e,a){t.exports={form:"ContactForm_form__3I6wV",label:"ContactForm_label__beQo_",input:"ContactForm_input__USnoi",btnAdd:"ContactForm_btnAdd__3UHzY"}},20:function(t,e,a){},32:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),r=a(12),s=a.n(r),o=(a(20),a(14)),l=a(15),i=a(3),u=a(13),b=a.n(u),m=a(4),d=a.n(m),j=a(0),_=function(t){var e=t.contacts,a=t.onDeleteContacts;return Object(j.jsx)("ul",{className:d.a.contacts,children:e.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(j.jsxs)("li",{className:d.a.item,children:[Object(j.jsx)("p",{className:d.a.name,children:n}),Object(j.jsx)("p",{className:d.a.tel,children:c}),Object(j.jsx)("button",{className:d.a.btnDel,onClick:function(){return a(e)},children:"Delete"})]},e)}))})},p=a(6),f=a.n(p),h=function(t){var e=t.value,a=t.onChange;return Object(j.jsx)("div",{className:f.a.filter,children:Object(j.jsxs)("label",{className:f.a.label,children:[Object(j.jsx)("p",{className:f.a.text,children:"Find contacts by name"}),Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:a,className:f.a.input})]})})},O=a(2),x=a.n(O);function C(t){var e=t.onSubmit,a=Object(n.useState)(""),c=Object(i.a)(a,2),r=c[0],s=c[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),u=l[0],b=l[1],m=function(t){var e=t.currentTarget,a=e.name,n=e.value;switch(a){case"name":s(n);break;case"number":b(n);break;default:return}};return Object(j.jsxs)("form",{className:x.a.form,onSubmit:function(t){t.preventDefault(),e({name:r,number:u}),s(""),b("")},children:[Object(j.jsxs)("label",{className:x.a.label,children:["Name",Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:m,className:x.a.input})]}),Object(j.jsxs)("label",{className:x.a.label,children:["Number",Object(j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:u,onChange:m,className:x.a.input})]}),Object(j.jsx)("button",{type:"sabmit",className:x.a.btnAdd,children:"Add contact"})]})}a(11),a(30),a(31);var N=a(9),v=a.n(N);var A=function(){var t=Object(n.useState)([]),e=Object(i.a)(t,2),a=e[0],c=e[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),u=s[0],m=s[1];Object(n.useEffect)((function(){var t=JSON.parse(localStorage.getItem("contacts"));console.log(t),t&&c(t)}),[]),Object(n.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(a))}),[a]);var d=function(){var t=u.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(t)}))}();return Object(j.jsxs)("div",{className:v.a.app,children:[Object(j.jsx)("h1",{className:v.a.title,children:"Phonebook"}),Object(j.jsx)(C,{onSubmit:function(t){var e=Object(l.a)({id:b.a.generate()},t);a.some((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(t.name," is already in contacts")):c((function(t){return[e].concat(Object(o.a)(t))}))}}),Object(j.jsx)("h2",{className:v.a.titleContacts,children:"Contacts"}),Object(j.jsx)(h,{value:u,onChange:function(t){return m(t.currentTarget.value)}}),Object(j.jsx)(_,{contacts:d,onDeleteContacts:function(t){c((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root"))},4:function(t,e,a){t.exports={contacts:"ContactList_contacts__XZCSM",item:"ContactList_item__3pDm1",name:"ContactList_name__3ywAZ",tel:"ContactList_tel__I92RI",btnDel:"ContactList_btnDel__1NN6T"}},6:function(t,e,a){t.exports={filter:"Filter_filter__1KM3M",label:"Filter_label__3YTA2",text:"Filter_text__2i3hl",input:"Filter_input__3QwUZ"}},9:function(t,e,a){t.exports={app:"App_app__2r-_D",title:"App_title__31t7S",titleContacts:"App_titleContacts__3tN1H"}}},[[32,1,2]]]);
//# sourceMappingURL=main.7d1bee2d.chunk.js.map