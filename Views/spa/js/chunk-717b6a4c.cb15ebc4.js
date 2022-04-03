(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-717b6a4c"],{"0e6b":function(e,t,i){"use strict";i("6c9d")},"429a":function(e,t,i){"use strict";i("ef2f")},4673:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"mb-5 grey--text"},[i("h3",{staticClass:"text-capitalize headline font-weight-bold"},[e._v("Loading "+e._s(e.title)+" Data...")]),i("span",{staticClass:"subtitle-1 font-weight-medium"},[e._v("Time may vary depend on internet connection.")])])},a=[],o={props:["title"]},r=o,s=(i("0e6b"),i("2877")),l=Object(s["a"])(r,n,a,!1,null,null,null);t["a"]=l.exports},"53be":function(e,t,i){"use strict";i("b01f")},"6c9d":function(e,t,i){},7335:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"ma-4",attrs:{id:"invoice"}},[e.invoiceLoaded?i("v-container",{staticClass:"container"},[i("ContentHeader",{attrs:{name:e.name,totalAmount:e.invoiceData.length,mountedAct:e.handleClick}}),i("div",e._l(e.invoiceData,(function(e,t){return i("Invoice",{key:t,attrs:{data:e}})})),1)],1):i("Skeleton",{attrs:{name:e.name}}),i("Dialog")],1)},a=[],o=i("5530"),r=i("2f62"),s=i("ee90"),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("router-link",{staticClass:"flex",attrs:{to:{name:"InvoiceView",params:{invoiceId:e.invoice.invoiceId}}}},[i("v-card",{staticClass:"mb-3 invoice",class:{paid:e.invoice.invoicePaid,draft:e.invoice.invoiceDraft,pending:e.invoice.invoicePending}},[i("v-card-text",[i("v-layout",{staticClass:"pa-3",attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",md3:""}},[i("p",{staticClass:"headline mt-3"},[e._v("#"+e._s(e.invoice.invoiceId))])]),i("v-flex",{attrs:{xs4:"",md3:""}},[i("span",{staticClass:"caption grey--text"},[e._v("Due Date:")]),i("p",{staticClass:"subheader"},[e._v(e._s(e.outputDueDate))])]),i("v-flex",{attrs:{xs4:"",md3:""}},[i("span",{staticClass:"caption grey--text"},[e._v("Client:")]),i("p",{staticClass:"subheader"},[e._v(e._s(e.invoice.clientName))])]),i("v-flex",{attrs:{xs4:"",md1:""}},[i("span",{staticClass:"caption grey--text"},[e._v("Total:")]),i("p",{staticClass:"subheader"},[e._v("$"+e._s(e.invoice.invoiceTotal))])]),i("v-flex",{attrs:{xs12:"",md2:""}},[i("div",{staticClass:"invoice-chip"},[i("v-chip",{staticClass:"mt-3",class:{paid:e.invoice.invoicePaid,draft:e.invoice.invoiceDraft,pending:e.invoice.invoicePending},attrs:{label:""}},[i("v-icon",{attrs:{left:""}},[e._v("mdi-circle-medium")]),e.invoice.invoicePaid?i("span",[e._v("Paid")]):e._e(),e.invoice.invoiceDraft?i("span",[e._v("Draft")]):e._e(),e.invoice.invoicePending?i("span",[e._v("Pending")]):e._e()],1),i("v-spacer"),i("v-icon",{staticClass:"ml-0",attrs:{right:""}},[e._v("mdi-chevron-right")])],1)])],1)],1)],1)],1)},c=[],d={name:"invoice",props:["data"],data:function(){return{invoice:this.data,outputDueDate:null}},created:function(){if(this.invoice){var e=this.invoice.paymentDueDate;e=e.toDate(),e=e.toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric"}),this.outputDueDate=e}}},u=d,v=(i("e31e"),i("2877")),m=i("6544"),p=i.n(m),f=i("b0af"),h=i("99d9"),b=i("cc20"),y=i("0e8f"),C=i("132d"),D=i("a722"),x=i("2fa4"),I=Object(v["a"])(u,l,c,!1,null,null,null),_=I.exports;p()(I,{VCard:f["a"],VCardText:h["c"],VChip:b["a"],VFlex:y["a"],VIcon:C["a"],VLayout:D["a"],VSpacer:x["a"]});var g=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",[i("Header",{attrs:{title:e.name}}),e._l(5,(function(e){return i("v-card",{key:e,staticClass:"mb-4"},[i("v-card-text",[i("v-row",[i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-skeleton-loader",{staticClass:"mSkeleton",attrs:{type:"card-heading"}})],1),i("v-col",{attrs:{cols:"4",md:"2"}},[i("v-skeleton-loader",{staticClass:"mSkeleton",attrs:{type:"heading, sentences"}})],1),i("v-col",{attrs:{cols:"4",md:"2"}},[i("v-skeleton-loader",{staticClass:"mSkeleton",attrs:{type:"heading, sentences"}})],1),i("v-col",{attrs:{cols:"4",md:"2"}},[i("v-skeleton-loader",{staticClass:"mSkeleton",attrs:{type:"heading, sentences"}})],1),i("v-col",{attrs:{cols:"12",md:"2"}},[i("v-skeleton-loader",{staticClass:"mSkeleton",attrs:{type:"chip"}})],1)],1)],1)],1)}))],2)},k=[],S=i("4673"),T={inject:{},props:["name"],components:{Header:S["a"]},data:function(){return{attrs:{boilerplate:!0,elevation:0}}}},V=T,w=i("62ad"),P=i("a523"),A=i("0fd9"),O=i("3129"),E=Object(v["a"])(V,g,k,!1,null,null,null),L=E.exports;p()(E,{VCard:f["a"],VCardText:h["c"],VCol:w["a"],VContainer:P["a"],VRow:A["a"],VSkeletonLoader:O["a"]});var q=i("88df"),N={components:{ContentHeader:s["a"],Invoice:_,Skeleton:L,Dialog:q["a"]},data:function(){return{name:"invoices"}},created:function(){this.GET_INVOICES()},computed:Object(o["a"])({},Object(r["d"])({invoiceLoaded:function(e){return e.invoices.invoiceLoaded},invoiceData:function(e){return e.invoices.invoiceData},dialog:function(e){return e.invoices.dialog}})),methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(r["c"])(["UPDATE_DIALOG"])),Object(r["b"])(["GET_INVOICES"])),{},{handleClick:function(){this.UPDATE_DIALOG()}})},j=N,U=Object(v["a"])(j,n,a,!1,null,null,null);t["default"]=U.exports;p()(U,{VContainer:P["a"]})},"88df":function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-dialog",{attrs:{value:e.dialog,persistent:"","max-width":"600px"}},[i("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.submitForm;return[i("v-card",[i("v-toolbar",{attrs:{dark:"",color:"indigo"}},[e.editInvoice?i("v-toolbar-title",[e._v("Invoice #"+e._s(e.invoiceId))]):i("v-toolbar-title",[e._v("Create New Invoice.")]),i("v-spacer"),i("v-btn",{attrs:{icon:"",dark:""},on:{click:e.closeInvoiceDialog}},[i("v-icon",[e._v("mdi-close")])],1)],1),i("v-card-text",[i("v-container",[i("form",{staticClass:"invoice-content",on:{submit:function(t){return t.preventDefault(),n(e.onSubmit)}}},[i("v-card-title",{staticClass:"pb-0"},[e._v("Bill From:")]),i("v-card-text",[i("ValidationProvider",{attrs:{name:"Biller's Street Address",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[i("v-text-field",{attrs:{label:"Street Address","error-messages":n,required:""},model:{value:e.billerStreetAddress,callback:function(t){e.billerStreetAddress=t},expression:"billerStreetAddress"}})]}}],null,!0)}),i("v-row",[i("v-col",{attrs:{md:"4",sm:"4"}},[i("ValidationProvider",{attrs:{name:"Biller's City",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[i("v-select",{attrs:{items:e.selectedStateList,label:"City","error-messages":n,required:""},model:{value:e.billerCity,callback:function(t){e.billerCity=t},expression:"billerCity"}})]}}],null,!0)})],1),i("v-col",{attrs:{md:"4",sm:"4"}},[i("ValidationProvider",{attrs:{name:"Biller's Postcode",rules:"required|min:4|max:4"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[i("v-text-field",{attrs:{label:"Post Code","error-messages":n,required:""},model:{value:e.billerZipCode,callback:function(t){e.billerZipCode=t},expression:"billerZipCode"}})]}}],null,!0)})],1),i("v-col",{attrs:{md:"4",sm:"4"}},[i("ValidationProvider",{attrs:{name:"Biller's Country",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[i("v-select",{attrs:{items:e.selectedCountryList,label:"Country","error-messages":n,required:""},model:{value:e.billerCountry,callback:function(t){e.billerCountry=t},expression:"billerCountry"}})]}}],null,!0)})],1)],1)],1),i("v-spacer"),i("v-card-title",{staticClass:"pb-0"},[e._v("Bill To:")]),i("v-card-text",[i("ValidationProvider",{attrs:{name:"Client's Name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[i("v-text-field",{attrs:{label:"Client's Name","error-messages":n,required:""},model:{value:e.clientName,callback:function(t){e.clientName=t},expression:"clientName"}})]}}],null,!0)}),i("ValidationProvider",{attrs:{name:"Client's Email",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[i("v-text-field",{attrs:{label:"Client's Email","error-messages":n,required:""},model:{value:e.clientEmail,callback:function(t){e.clientEmail=t},expression:"clientEmail"}})]}}],null,!0)}),i("ValidationProvider",{attrs:{name:"Client's Street Address",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[i("v-text-field",{attrs:{label:"Street Address","error-messages":n,required:""},model:{value:e.clientStreetAddress,callback:function(t){e.clientStreetAddress=t},expression:"clientStreetAddress"}})]}}],null,!0)}),i("v-row",[i("v-col",{attrs:{md:"4",sm:"4"}},[i("ValidationProvider",{attrs:{name:"Client's City",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[i("v-text-field",{attrs:{label:"City","error-messages":n,required:""},model:{value:e.clientCity,callback:function(t){e.clientCity=t},expression:"clientCity"}})]}}],null,!0)})],1),i("v-col",{attrs:{md:"4",sm:"4"}},[i("ValidationProvider",{attrs:{name:"Client's Postcode",rules:"required|min:4|max:4"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[i("v-text-field",{attrs:{label:"Post Code","error-messages":n,required:""},model:{value:e.clientZipCode,callback:function(t){e.clientZipCode=t},expression:"clientZipCode"}})]}}],null,!0)})],1),i("v-col",{attrs:{md:"4",sm:"4"}},[i("ValidationProvider",{attrs:{name:"Client's Country",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[i("v-select",{attrs:{items:e.selectedCountryList,label:"Country","error-messages":n,required:""},model:{value:e.clientCountry,callback:function(t){e.clientCountry=t},expression:"clientCountry"}})]}}],null,!0)})],1)],1)],1),i("v-card-text",[i("v-row",[i("v-col",{attrs:{md:"5",sm:"6"}},[i("v-text-field",{attrs:{label:"Invoice Date",disabled:""},model:{value:e.invoiceDate,callback:function(t){e.invoiceDate=t},expression:"invoiceDate"}})],1),i("v-col",{attrs:{md:"5","offset-md":"2",sm:"6"}},[i("v-text-field",{attrs:{label:"Payment Date",disabled:""},model:{value:e.paymentDueDate,callback:function(t){e.paymentDueDate=t},expression:"paymentDueDate"}})],1)],1),i("ValidationProvider",{attrs:{name:"Payment Terms",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[i("v-select",{attrs:{items:e.listTerms,label:"Payment Terms","error-messages":n},model:{value:e.paymentTerms,callback:function(t){e.paymentTerms=t},expression:"paymentTerms"}})]}}],null,!0)}),i("v-text-field",{attrs:{label:"Product's Description"},model:{value:e.productDescription,callback:function(t){e.productDescription=t},expression:"productDescription"}})],1),i("v-card-title",[e._v("Item List")]),i("v-card-text",[i("v-simple-table",{attrs:{dense:""},scopedSlots:e._u([{key:"default",fn:function(){return[i("thead",[i("tr",e._l(e.tableHead,(function(t,n){return i("th",{key:n},[e._v(" "+e._s(t.text)+" ")])})),0)]),i("tbody",e._l(e.invoiceItemList,(function(t,n){return i("tr",{key:n},[i("td",[i("v-text-field",{model:{value:t.name,callback:function(i){e.$set(t,"name",i)},expression:"item.name"}})],1),i("td",[i("v-text-field",{attrs:{type:"number"},on:{change:e.updateTotal},model:{value:t.qty,callback:function(i){e.$set(t,"qty",i)},expression:"item.qty"}})],1),i("td",[i("v-text-field",{attrs:{"prepend-icon":"mdi-currency-usd",readonly:""},model:{value:t.price,callback:function(i){e.$set(t,"price",i)},expression:"item.price"}})],1),i("td",[i("v-text-field",{attrs:{value:(t.total=t.qty*t.price).toFixed(2),readonly:""},scopedSlots:e._u([{key:"prepend",fn:function(){return[i("v-icon",[e._v("mdi-currency-usd")])]},proxy:!0},{key:"append-outer",fn:function(){return[i("v-icon",{attrs:{color:"red lighten-2"},on:{click:function(i){return e.deleteInvoiceItem(t.id)}}},[e._v("mdi-delete-forever")])]},proxy:!0}],null,!0)})],1)])})),0)]},proxy:!0}],null,!0)}),i("div",{staticClass:"py-1 text-center text-uppercase text--secondary text-button",attrs:{id:"addNewItem"},on:{click:e.addNewInvoiceItem}},[i("v-icon",{attrs:{color:"light-blue lighten-3"}},[e._v("mdi-plus")]),e._v(" Add New Item ")],1)],1),i("v-card-actions",{staticClass:"mt-5"},[i("v-btn",{staticClass:"ma-2",attrs:{color:"error",outlined:""},on:{click:e.closeInvoice}},[e._v("Discard")]),i("v-spacer"),e.editInvoice?e._e():i("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"grey"},on:{click:e.saveDraft}},[e._v("Save Draft")]),e.editInvoice?e._e():i("v-btn",{staticClass:"ma-2",attrs:{color:"primary",type:"submit",dark:""},on:{click:e.uploadInvoice}},[e._v("Create Invoice")]),e.editInvoice?i("v-btn",{staticClass:"ma-2",attrs:{color:"primary",type:"submit",dark:""},on:{click:e.uploadInvoice}},[e._v("Update Invoice")]):e._e()],1)],1)])],1)],1)]}}])})],1)},o=[],r=i("1da1"),s=i("5530"),l=(i("96cf"),i("d3b7"),i("159b"),i("b0c0"),i("e9c4"),i("4de4"),256),c=[],d=256;while(l--)c[l]=(l+256).toString(16).substring(1);function u(e){var t=0,i=e||11;if(!n||l+i>2*d)for(n="",l=0;t<d;t++)n+=c[256*Math.random()|0];return n.substring(l,l+++i)}var v=i("2f62"),m=i("09d6"),p={name:"invoiceDialog",data:function(){return{billerStreetAddress:null,billerCity:null,billerZipCode:null,billerCountry:null,clientName:null,clientEmail:null,clientStreetAddress:null,clientCity:null,clientZipCode:null,clientCountry:null,invoiceDateUnix:null,invoiceDate:null,paymentTerms:null,paymentDueDateUnix:null,paymentDueDate:null,productDescription:null,invoicePending:null,invoiceDraft:null,invoiceTotal:0,invoiceItemList:[{name:"abdc",qty:12,price:5.9,total:12}],selectedStateList:[],selectedCountryList:[],dateOptions:{year:"numeric",month:"short",day:"numeric"},listTerms:[{text:"Next 30 days",value:"30"},{text:"Next 45 days",value:"45"},{text:"Next 60 days",value:"60"},{text:"Next 75 days",value:"75"},{text:"Next 90 days",value:"90"}],tableHead:[{text:"Item Name",width:"60%"},{text:"Qty",width:"70px"},{text:"Price",width:"50px"},{text:"Total",width:"20%"}]}},created:function(){this.editInvoice&&(this.invoiceDateUnix=Date.now(),this.invoiceDate=new Date(this.invoiceDateUnix).toLocaleDateString("en-us",this.dateOptions)),this.editInvoice||(this.invoiceId=this.loadedInvoice.invoiceId,this.billerStreetAddress=this.loadedInvoice.billerStreetAddress,this.billerCity=this.loadedInvoice.billerCity,this.billerZipCode=this.loadedInvoice.billerZipCode,this.billerCountry=this.loadedInvoice.billerCountry,this.clientName=this.loadedInvoice.clientName,this.clientEmail=this.loadedInvoice.clientEmail,this.clientStreetAddress=this.loadedInvoice.clientStreetAddress,this.clientCity=this.loadedInvoice.clientCity,this.clientZipCode=this.loadedInvoice.clientZipCode,this.clientCountry=this.loadedInvoice.clientCountry,this.invoiceDateUnix=this.loadedInvoice.invoiceDateUnix,this.invoiceDate=this.loadedInvoice.invoiceDate,this.paymentTerms=this.loadedInvoice.paymentTerms,this.paymentDueDateUnix=this.loadedInvoice.paymentDueDateUnix,this.paymentDueDate=this.loadedInvoice.paymentDueDate,this.productDescription=this.loadedInvoice.productDescription,this.invoiceItemList=this.loadedInvoice.invoiceItemList,this.invoiceTotal=this.loadedInvoice.invoiceTotal,this.invoicePending=this.loadedInvoice.invoicePending,this.invoiceDraft=this.loadedInvoice.invoiceDraft,this.invoicePaid=this.loadedInvoice.invoicePaid)},mounted:function(){var e=this;fetch("https://restcountries.com/v2/all?fields=name").then((function(e){return e.json()})).then((function(t){return t.forEach((function(t){return e.selectedCountryList.push(t.name)}))})).catch((function(e){return console.log(e.message)})),fetch("https://countriesnow.space/api/v0.1/countries/cities",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({country:"Australia"})}).then((function(e){return e.json()})).then((function(t){t.data.forEach((function(t){return e.selectedStateList.push(t)}))})).catch((function(e){return console.log(e.message)}))},methods:Object(s["a"])(Object(s["a"])({},Object(v["c"])(["UPDATE_DIALOG","SET_LOADED_INVOICE","TOGGLE_EDIT_INVOICE"])),{},{closeInvoiceDialog:function(){this.UPDATE_DIALOG(),this.editInvoice&&this.TOGGLE_EDIT_INVOICE()},deleteInvoiceItem:function(e){this.invoiceItemList=this.invoiceItemList.filter((function(t){return t.id!==e}))},addNewInvoiceItem:function(){this.invoiceItemList.push({id:u(),name:"",qty:0,price:0,total:0})},updateTotal:function(e){this.item.qty=e.target.value,this.item.total=this.item.qty*this.item.price},calculateInvoiceTotal:function(){var e=this;this.invoiceTotal=0,this.invoiceItemList.forEach((function(t){e.invoiceTotal+=t.total}))},closeInvoice:function(){this.$router.push("/invoice")},saveDraft:function(){this.invoiceDraft=!0},uploadInvoice:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.invoiceItemList.length<=0)){t.next=3;break}return alert("Please ensure you filled out work items !"),t.abrupt("return");case 3:return e.loading=!0,e.calculateInvoiceTotal(),i=m["a"].collection("invoices").doc(),t.next=8,i.set({invoiceId:u(6),billerStreetAddress:e.billerStreetAddress,billerCity:e.billerCity,billerZipCode:e.billerZipCode,billerCountry:e.billerCountry,clientName:e.clientName,clientEmail:e.clientEmail,clientStreetAddress:e.clientStreetAddress,clientCity:e.clientCity,clientZipCode:e.clientZipCode,clientCountry:e.clientCountry,invoiceDateUnix:e.invoiceDateUnix,invoiceDate:e.invoiceDate,paymentTerms:e.paymentTerms,paymentDueDateUnix:e.paymentDueDateUnix,paymentDueDate:e.paymentDueDate,productDescription:e.productDescription,invoiceItemList:e.invoiceItemList,invoiceTotal:e.invoiceTotal,invoicePending:e.invoicePending,invoiceDraft:e.invoiceDraft,invoicePaid:null});case 8:case"end":return t.stop()}}),t)})))()},submitForm:function(){console.log("Form is submitted.")}}),computed:Object(s["a"])({},Object(v["d"])({dialog:function(e){return e.invoices.dialog},loadedInvoice:function(e){return e.invoices.loadedInvoice},editInvoice:function(e){return e.invoices.editInvoice}})),watch:{paymentTerms:function(){var e=new Date;this.paymentDueDateUnix=e.setDate(e.getDate()+parseInt(this.paymentTerms)),this.paymentDueDate=new Date(this.paymentDueDateUnix).toLocaleDateString("en-us",this.dateOptions)}}},f=p,h=(i("429a"),i("2877")),b=i("6544"),y=i.n(b),C=i("8336"),D=i("b0af"),x=i("99d9"),I=i("62ad"),_=i("a523"),g=i("169a"),k=i("132d"),S=i("0fd9"),T=i("b974"),V=i("1f4f"),w=i("2fa4"),P=i("8654"),A=i("71d9"),O=i("2a7f"),E=Object(h["a"])(f,a,o,!1,null,null,null);t["a"]=E.exports;y()(E,{VBtn:C["a"],VCard:D["a"],VCardActions:x["a"],VCardText:x["c"],VCardTitle:x["d"],VCol:I["a"],VContainer:_["a"],VDialog:g["a"],VIcon:k["a"],VRow:S["a"],VSelect:T["a"],VSimpleTable:V["a"],VSpacer:w["a"],VTextField:P["a"],VToolbar:A["a"],VToolbarTitle:O["a"]})},a924:function(e,t,i){},b01f:function(e,t,i){},e31e:function(e,t,i){"use strict";i("a924")},ee90:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-layout",{staticClass:"mt-2 mb-3"},[i("div",{staticClass:"grey--text text--darken-2"},[i("h1",{staticClass:"text-capitalize display-1 font-weight-bold"},[e._v(e._s(e.name))]),e.totalAmount?i("span",{staticClass:"subtitle-1 font-weight-medium"},[e._v("There are "),i("i",[i("b",[e._v(e._s(e.totalAmount))])]),e._v(" total "+e._s(e.name))]):e._e()]),i("v-spacer"),i("v-btn",{staticClass:"ma-2 white--text lighten-2",attrs:{color:"indigo"},on:{click:e.mountedAct}},[i("v-icon",{staticClass:"mr-3",attrs:{dark:""}},[e._v("mdi-plus")]),e._v(" New "+e._s(e.name)+" ")],1)],1)},a=[],o={props:["name","mountedAct","totalAmount"]},r=o,s=(i("53be"),i("2877")),l=i("6544"),c=i.n(l),d=i("8336"),u=i("132d"),v=i("a722"),m=i("2fa4"),p=Object(s["a"])(r,n,a,!1,null,null,null);t["a"]=p.exports;c()(p,{VBtn:d["a"],VIcon:u["a"],VLayout:v["a"],VSpacer:m["a"]})},ef2f:function(e,t,i){}}]);
//# sourceMappingURL=chunk-717b6a4c.cb15ebc4.js.map