"use strict";(self.webpackChunkkmm_icerock_dev=self.webpackChunkkmm_icerock_dev||[]).push([[4634],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=s(n),m=o,d=k["".concat(p,".").concat(m)]||k[m]||u[m]||i;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8795:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a={},l="ktor-client",p={unversionedId:"libraries/ktor/ktor-client",id:"libraries/ktor/ktor-client",isDocsHomePage:!1,title:"ktor-client",description:"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0441\u0435\u0442\u044c\u044e. \u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",source:"@site/learning/libraries/ktor/ktor-client.md",sourceDirName:"libraries/ktor",slug:"/libraries/ktor/ktor-client",permalink:"/learning/libraries/ktor/ktor-client",editUrl:"https://github.com/icerockdev/kmm.icerock.dev/tree/docusaurus/learning/libraries/ktor/ktor-client.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"serialization",permalink:"/learning/libraries/kotlinx/serialization"},next:{title:"moko-units",permalink:"/learning/libraries/moko/moko-units"}},s=[{value:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438",id:"\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438-\u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438",children:[]},{value:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 HttpResponse",id:"\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435-httpresponse",children:[]},{value:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043b\u043e\u0433\u0438\u043a\u0438 \u0432 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430/\u043e\u0442\u0432\u0435\u0442\u0430",id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u043b\u043e\u0433\u0438\u043a\u0438-\u0432-\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443-\u043a\u0430\u0436\u0434\u043e\u0433\u043e-\u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043e\u0442\u0432\u0435\u0442\u0430",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ktor-client"},"ktor-client"),(0,i.kt)("p",null,"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0441\u0435\u0442\u044c\u044e. \u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f\n\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 ",(0,i.kt)("a",{parentName:"p",href:"https://ktor.io/docs/getting-started-ktor-client.html"},"\u043d\u0430 \u0441\u0430\u0439\u0442\u0435"),".",(0,i.kt)("br",{parentName:"p"}),"\n","\u0412 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445 IceRock \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 \u043f\u0430\u0440\u0435\n\u0441 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/icerockdev/moko-network"},"moko-network"),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0438\u0437 OpenAPI\n\u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0432\u0435\u0441\u044c \u0441\u0435\u0442\u0435\u0432\u043e\u0439 \u043a\u043e\u0434 \u0438 \u0441\u0435\u0442\u0435\u0432\u044b\u0435 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438 (\u0441 \u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0435\u0439\n\u0447\u0435\u0440\u0435\u0437 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Kotlin/kotlinx.serialization"},"kotlinx.serialization"),")."),(0,i.kt)("p",null,"\u041d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 ktor 1.4.0 \u043d\u0430 iOS \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f native-mt \u0432\u0435\u0440\u0441\u0438\u0438 \u043a\u043e\u0440\u0443\u0442\u0438\u043d (\u0432\u043d\u0443\u0442\u0440\u0438 ktor\n\u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u0430 \u043f\u043e\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u0430\u044f \u043c\u043d\u043e\u0433\u043e\u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u0441 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u043e\u0439 \u0432\u0441\u0435\u0433\u043e pipeline \u043d\u0430 \u0444\u043e\u043d\u043e\u0432\u043e\u043c \u043f\u043e\u0442\u043e\u043a\u0435)."),(0,i.kt)("h2",{id:"\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438-\u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"},"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"),(0,i.kt)("p",null,"\u041d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 ktor 1.4.1 \u0432\u0441\u0435 \u0431\u043b\u043e\u043a\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a features \u0437\u0430\u043c\u043e\u0440\u0430\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043d\u0430 iOS. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442\u044c\n\u043a \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 HttpClient'\u0430 \u0430\u043a\u043a\u0443\u0440\u0430\u0442\u043d\u043e."),(0,i.kt)("p",null,"\u0412\u0430\u0436\u043d\u043e \u043d\u0435 \u043f\u043e\u0434\u0430\u0432\u0430\u0442\u044c \u0432 \u043b\u044f\u043c\u0431\u0434\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u043d\u0438\u0447\u0435\u0433\u043e, \u0447\u0442\u043e \u043d\u0435\u043b\u044c\u0437\u044f \u0437\u0430\u043c\u043e\u0440\u043e\u0437\u0438\u0442\u044c. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"this"),"\n\u043e\u0431\u044a\u0435\u043a\u0442\u0430 (\u0442\u043e \u0435\u0441\u0442\u044c \u043d\u0435\u043b\u044c\u0437\u044f \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 \u043f\u043e\u043b\u044f\u043c\u0438 \u043a\u043b\u0430\u0441\u0441\u0430, \u043d\u0430\u0434\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0445 \u0432 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0432 \u0441\u0442\u0435\u043a\u0435,\n\u0430 \u043f\u043e\u0442\u043e\u043c \u0443\u0436\u0435 \u044d\u0442\u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043b\u044f\u043c\u0431\u0434\u0435)."),(0,i.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"// \u043e\u0431\u0435\u0440\u0442\u043a\u0430 \u043d\u0430\u0434 https://github.com/russhwolf/multiplatform-settings \u0441 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438 \u0434\u043b\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443\nprivate val keyValueStorage: KeyValueStorage by lazy {\n    KeyValueStorage(settings)\n}\n\n// \u043f\u0430\u0440\u0441\u0435\u0440 json \u043e\u0442 https://github.com/Kotlin/kotlinx.serialization\nprivate val json: Json by lazy {\n    Json {\n        // \u0447\u0442\u043e\u0431\u044b \u0435\u0441\u043b\u0438 \u0432 api \u043f\u043e\u044f\u0432\u044f\u0442\u0441\u044f \u043d\u043e\u0432\u044b\u0435 \u043a\u043b\u044e\u0447\u0438 \u0442\u043e \u0443 \u043d\u0430\u0441 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u0438\u043d\u0435 \u0438\u0445 \u0431\u0443\u0434\u0435\u0442 \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u0430 \u043d\u0435 \u043a\u0440\u0435\u0448\u0438\u0442\u044c\u0441\u044f\n        ignoreUnknownKeys = true\n    }\n}\n\nprivate val httpClient: HttpClient by lazy {\n    // \u0421\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u0438\u043d\u0441\u0442\u0430\u043d\u0441\u044b \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0434\u043b\u044f \u0444\u0438\u0447\u0435\u0439 \u043a\u043b\u0438\u0435\u043d\u0442\u0430, \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u0437\u0430\u043c\u043e\u0440\u0430\u0436\u0438\u0432\u0430\u0442\u044c \u0434\u043b\u044f KN \u043e\u0431\u044a\u0435\u043a\u0442\n    // SharedFactory \u0447\u0435\u0440\u0435\u0437 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 this (httpClient \u0432 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u043c\u043e\u0440\u043e\u0437\u0438\u0442\u044c\u0441\u044f -\n    // \u0447\u0442\u043e \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043a \u0437\u0430\u043c\u043e\u0440\u043e\u0437\u043a\u0435 \u0444\u0438\u0447\u0435\u0439 \u0438 \u0432\u0441\u0435\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0444\u0438\u0447\u0435\u0439).\n    // https://kotlinlang.org/docs/native-immutability.html\n    // https://kotlinlang.org/docs/native-concurrency.html\n    val json = this.json\n    val keyValueStorage = this.keyValueStorage\n\n    HttpClient {\n        // \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u043c ExceptionFeature \u0438\u0437 moko-network \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043e\u0448\u0438\u0431\u043e\u043a\n        install(ExceptionFeature) {\n            exceptionFactory = HttpExceptionFactory(\n                defaultParser = ErrorExceptionParser(json),\n                customParsers = mapOf(\n                    HttpStatusCode.UnprocessableEntity.value to ValidationExceptionParser(json)\n                )\n            )\n        }\n        // \u0432\u044b\u043a\u043b\u044e\u0447\u0430\u0435\u043c \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 BadResponseStatus \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u043b\u0430 ExceptionFeature\n        expectSuccess = false\n\n        // \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u043c \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432\n        install(Logging) {\n            logger = Logger.DEFAULT // TODO \u0441\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430 Napier \u0441 \u0448\u0430\u0440\u0438\u043d\u0433\u043e\u043c \u043c\u0435\u0436\u0434\u0443 \u043f\u043e\u0442\u043e\u043a\u0430\u043c\u0438\n            level = LogLevel.INFO\n        }\n    }\n}\n")),(0,i.kt)("h2",{id:"\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435-httpresponse"},"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 HttpResponse"),(0,i.kt)("p",null,"\u041f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0442\u0438\u043f \u043e\u0442\u0432\u0435\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u044b \u0445\u043e\u0442\u0438\u043c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c. \u0418 ktor-client\n\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\n\u043f\u043e\u0441\u0442\u0430\u0440\u0430\u0435\u0442\u0441\u044f ",(0,i.kt)("a",{parentName:"p",href:"https://ktor.io/docs/response.html"},"\u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043e\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043e\u0442\u0432\u0435\u0442 \u0432 \u043d\u0443\u0436\u043d\u044b\u0439 \u043d\u0430\u043c \u0442\u0438\u043f"),"\n. \u0417\u0430 \u044d\u0442\u043e \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"responsePipeline"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"receive")," \u0443\n\u043a\u043b\u0430\u0441\u0441\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpResponse"),". \u041d\u0430 \u0434\u0430\u043d\u043d\u043e\u043c \u043f\u0430\u0439\u043f\u043b\u0430\u0439\u043d\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0438 \u043b\u043e\u0433\u0438\u043a\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"ExceptionFeature")," \u0438\n\u043b\u043e\u0433\u0438\u043a\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonFeature")," \u0438 \u043c\u043d\u043e\u0433\u0438\u0435 \u0434\u0440\u0443\u0433\u0438\u0435."),(0,i.kt)("p",null,"\u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u0435\u0441\u043b\u0438 \u0445\u043e\u0447\u0435\u0442\u0441\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 \u0441 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0439 \u043b\u043e\u0433\u0438\u043a\u043e\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043e\u0442\u0432\u0435\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043d\u0435\n\u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 ",(0,i.kt)("inlineCode",{parentName:"p"},"responsePipeline"),", \u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0442\u0430\u043a:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val response = httpClient.get<HttpResponse>(requestUrl)\n\nif (response.status.isSuccess()) {\n    // success handle\n} else {\n    val statusCode: HttpStatusCode = response.status\n    // read text without call responsePipeline in ktor\n    val body: String = String(response.content.toByteArray())\n}\n")),(0,i.kt)("p",null,"\u0412 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043c\u044b \u043d\u0435 \u043e\u0431\u0440\u0430\u0449\u0430\u0435\u043c\u0441\u044f \u043a ",(0,i.kt)("inlineCode",{parentName:"p"},"response.receive")," \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u043b\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"responsePipeline"),".\n\u0412\u043c\u0435\u0441\u0442\u043e \u044d\u0442\u043e\u0433\u043e \u043c\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"response.content"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0447\u0438\u0441\u0442\u044b\u043c \u0432\u0438\u0434\u043e\u043c \u043f\u0440\u0438\u0448\u0435\u0434\u0448\u0438\u0445 \u043e\u0442\n\u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,i.kt)("h2",{id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u043b\u043e\u0433\u0438\u043a\u0438-\u0432-\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443-\u043a\u0430\u0436\u0434\u043e\u0433\u043e-\u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043e\u0442\u0432\u0435\u0442\u0430"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043b\u043e\u0433\u0438\u043a\u0438 \u0432 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430/\u043e\u0442\u0432\u0435\u0442\u0430"),(0,i.kt)("p",null,"\u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f Ktor Features, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0431\u043b\u043e\u043a\u0438 \u043d\u0430 pipeline.\n\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0445 \u0444\u0438\u0447 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\n\u0441\u0442\u0430\u0442\u044c\u0435 ",(0,i.kt)("a",{parentName:"p",href:"https://yusufabd.medium.com/kotlin-multiplatform-mobile-intercepting-network-request-and-response-6805a79b4699"},"Kotlin Multiplatform Mobile: Intercepting Network Request and Response")))}u.isMDXComponent=!0}}]);