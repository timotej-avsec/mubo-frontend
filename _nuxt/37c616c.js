(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{300:function(e,t,r){var content=r(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(99).default)("5f074411",content,!0,{sourceMap:!1})},303:function(e,t,r){"use strict";r(300)},304:function(e,t,r){var n=r(98)(!1);n.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Roboto);"]),n.push([e.i,'*{margin:0;padding:0;font-family:"Roboto",sans-serif}.wrapper{width:100%;height:100vh;background-size:cover;display:flex;justify-content:center;align-items:center}.search_box{width:50%;position:relative}.new-url{width:50%}.search_box input[type=text]{width:100%;padding:20px 60px 20px 20px;box-sizing:border-box;background:rgba(0,0,0,.3);border:2px solid #fff;border-radius:10px;font-size:18px;color:#fff;outline:none}.fa-link{position:absolute;top:50%;transform:translateY(-50%);right:25px;color:#fff;font-size:25px;cursor:pointer}::-webkit-input-placeholder{color:#fff}::-moz-placeholder{color:#fff}:-ms-input-placeholder{color:#fff}@media screen and (max-width:425px){.new-url,.search_box{width:95%}}.new-url{color:#fff;background-color:rgba(0,0,0,.6);border-radius:10px}',""]),e.exports=n},306:function(e,t,r){"use strict";r.r(t);var n=r(27),o=(r(67),{data:function(){return{url:"",shortenedUrl:"",isLoading:!1}},methods:{shortenUrl:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,t.next=4,e.$axios.post("https://mubo.one/create-url",{url:e.url});case 4:r=t.sent,e.shortenedUrl="https://mubo.one/"+r.data.code;case 6:return t.prev=6,e.isLoading=!1,t.finish(6);case 9:case"end":return t.stop()}}),t,null,[[1,,6,9]])})))()}}}),l=(r(303),r(68)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"w-100 mb-5"},[r("form",{staticClass:"\n      search-form\n      d-flex\n      justify-content-center\n      align-items-center\n      flex-column\n    ",on:{submit:function(t){return t.preventDefault(),e.shortenUrl.apply(null,arguments)}}},[r("div",{staticClass:"search_box"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],attrs:{type:"text",placeholder:"Which URL would you like to shorten?"},domProps:{value:e.url},on:{input:function(t){t.target.composing||(e.url=t.target.value)}}}),e._v(" "),r("i",{staticClass:"fas fa-link",on:{click:e.shortenUrl}})]),e._v(" "),r("div",{staticClass:"new-url mt-3 p-2"},[e.isLoading?r("div",{staticClass:"w-100 d-flex justify-content-center"},[r("b-spinner",{attrs:{label:"Loading"}})],1):r("span",[e._v("\n        Shortened link:\n        "),r("bold",[r("a",{attrs:{href:e.shortenedUrl}},[e._v(e._s(e.shortenedUrl))])])],1)])])])}),[],!1,null,null,null);t.default=component.exports}}]);