(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/web_bt/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"23a1":function(e,t,n){"use strict";var r=n("2e90"),a=n.n(r);a.a},"2e90":function(e,t,n){},"479d":function(e,t,n){},5310:function(e,t,n){"use strict";var r=n("df2a"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("4de4"),n("a15b"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"dynamic-component-demo"}},[e._l(e.tabs,(function(t){return n("button",{key:t,class:["tab-button",{active:e.currentTab===t}],on:{click:function(n){e.currentTab=t}}},[e._v(" "+e._s(t)+" ")])})),n("keep-alive",[n(e.currentTabComponent,{tag:"component",staticClass:"tab"})],1)],2)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tracking-tab"},[e.connected?n("device-info",{attrs:{device:e.controller,connected:e.connected}}):e._e(),e.connected?n("div",{staticClass:"control"},[n("a",{staticClass:"round-button",attrs:{href:"#"},on:{click:e.onRecordingButton}},[n("font-awesome-layers",{staticStyle:{"font-size":"2em"}},[n("font-awesome-icon",{attrs:{icon:["far","circle"]}}),n("font-awesome-icon",{style:{color:e.recordingColor},attrs:{icon:e.recordingIcon,transform:"shrink-8"}})],1)],1),n("p",{class:{recording:e.recording}},[e._v(e._s(e.recordingText))]),e.recording?n("div",{staticClass:"checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.near,expression:"near"}],attrs:{type:"checkbox",id:"near"},domProps:{checked:Array.isArray(e.near)?e._i(e.near,null)>-1:e.near},on:{change:function(t){var n=e.near,r=t.target,a=!!r.checked;if(Array.isArray(n)){var o=null,c=e._i(n,o);r.checked?c<0&&(e.near=n.concat([o])):c>-1&&(e.near=n.slice(0,c).concat(n.slice(c+1)))}else e.near=a}}}),n("label",{attrs:{for:"near"}},[e._v("Near Someone")])]):e._e()]):n("button",{attrs:{id:"connect"},on:{click:e.onConnect}},[e._v("Connect")])],1)},i=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"device-info"},[n("dl",{staticClass:"status"},[n("dt",[e._v("Connected:")]),n("dd",[n("input",{attrs:{readonly:"true"},domProps:{value:e.deviceName}}),n("a",{staticClass:"round-button disconnect",attrs:{href:"#"},on:{click:e.onDisconnect}},[n("font-awesome-layers",{staticStyle:{"font-size":"1.5em"}},[n("font-awesome-icon",{attrs:{icon:["fas","ban"]}}),n("font-awesome-icon",{attrs:{icon:["fab","bluetooth-b"],transform:"shrink-6"}})],1)],1)]),n("dt",[n("font-awesome-icon",{attrs:{icon:e.batteryIcon,size:"lg"}}),e._v(":")],1),n("dd",[e._v(e._s(e.batteryLevel)+"%")]),n("dt",[e._v("Mem:")]),n("dd",[e._v(e._s(e.memoryPercent)+"%")])]),n("div",{staticClass:"time"},[n("font-awesome-layers",{staticStyle:{"font-size":"4em"}},[n("font-awesome-icon",{attrs:{icon:["far","square"]}}),n("font-awesome-icon",{attrs:{icon:["far","clock"],transform:"shrink-6"}})],1),n("dl",[n("dt",[e._v("Uptime:")]),n("dd",[e._v(e._s(e._f("formatUptime")(e.upTime)))]),n("dt",[e._v("Local:")]),n("dd",[e._v(e._s(e._f("formatMoment")(e.localTime)))])]),e.allowSynch?n("button",{staticClass:"synch",on:{click:e.onSynch}},[e._v("Synch Clock")]):e._e()],1)])},s=[],f=n("5a0c"),l=n.n(f),d={props:{allowSynch:{type:Boolean,default:!1},device:{type:Object},connected:{type:Boolean}},data:function(){return{batteryLevel:void 0,memoryUsed:void 0,localTime:l()(),upTime:void 0}},created:function(){var e=this;this.device&&this.device.getMemoryUsage().then((function(t){return e.memoryUsed=t})).then((function(){return e.device.getUptime()})).then((function(t){return e.upTime=t[0]})).then((function(){return e.device.getBatteryLevel()})).then((function(t){return e.batteryLevel=t}))},methods:{onDisconnect:function(){this.device&&this.device.disconnect()},onSynch:function(){console.log("synch"),this.device.synchClock().then((function(){return console.log("finished synch")}))}},computed:{batteryIcon:function(){return void 0==this.batteryLevel?["fas","ban"]:this.batteryLevel>87.5?["fas","battery-full"]:this.batteryLevel>62.5?["fas","battery-three-quarters"]:this.batteryLevel>37.5?["fas","battery-half"]:this.batteryLevel>15?["fas","battery-quarter"]:["fas","battery-empty"]},memoryPercent:function(){if(void 0!==this.memoryUsed)return this.memoryUsed/32768*100},deviceName:function(){return this.connected&&this.device?this.device.getDeviceName():"N/A"}}},h=d,v=(n("23a1"),n("2877")),m=Object(v["a"])(h,u,s,!1,null,"59bd6d6a",null),p=m.exports,y=(n("c19f"),n("b0c0"),n("dca8"),n("d3b7"),n("25f0"),n("5cc6"),n("84c3"),n("fb2c"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ec97"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("96cf"),n("1da1")),b=n("d4ec"),g=n("262e"),w=n("2caf"),_=n("9072"),C="7b183224-9168-443e-a927-7aeea07e8105",k=Object.freeze({count:"292bd3d2-14ff-45ed-9343-55d125edb721",rw:"56cd7757-5f47-4dcd-a787-07d648956068",data:"fec26ec4-6d71-4442-9f81-55bc21d658d6",data_req:"398d2a6c-b541-4160-b4b0-c59b4e27a1bb"}),x=Object.freeze({isWritingToFlash:{value:"I",notify:!0,returnType:Uint8Array},getUptime:{value:"A",notify:!0,returnType:Uint32Array},startWritingToFlash:{value:"w",returnType:Uint8Array},stopWritingToFlash:{value:"s",returnType:Uint8Array},setName:{value:"N",returnType:Uint8Array},recordPrimaryEncounterEvent:{value:"M",returnType:Uint8Array},recordSecondaryEncounterEvent:{value:"U",returnType:Uint8Array},startDataDownload:{value:"f",returnType:Uint8Array},stopDataDownload:{value:"F",returnType:Uint8Array},eraseFlash:{value:"C",returnType:Uint8Array},getMode:{value:"C",notify:!0,returnType:Uint8Array},setScanParameters:{value:"B",returnType:Uint8Array},setSynchTime:{value:"O",returnType:Uint8Array}}),A=n("d9a5"),O=n.n(A),T=n("faa1"),U=n.n(T),S=function(){};function j(e){if("number"===typeof e){var t=new ArrayBuffer(4),n=new DataView(t);return n.setUint32(0,e,!0),new Uint8Array(t)}if("string"===typeof e)return Uint8Array.of(e.charCodeAt(0));throw new Error("Cannot encode value for bluetooth write")}function D(e){for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),r=0,a=e.length;r<a;r++)n[r]=e.charCodeAt(r);return t}var P=function(e){Object(g["a"])(n,e);var t=Object(w["a"])(n);function n(){return Object(b["a"])(this,n),t.call(this,"Received block out of order")}return n}(Object(_["a"])(Error)),E=function(e){Object(g["a"])(n,e);var t=Object(w["a"])(n);function n(){return Object(b["a"])(this,n),t.call(this,"Interrupted")}return n}(Object(_["a"])(Error)),N=Object.freeze({fromValue:function(e){switch(e){case 0:return this.CALIBRATION;case 1:return this.ENCOUNTER;default:return this.UNKNOWN}},CALIBRATION:{text:"Calibration",command:"R",value:0},ENCOUNTER:{text:"Encounter",command:"E",value:1},UNKNOWN:{text:"??",command:void 0,value:void 0}});Object.freeze({BASELINE:{value:0},a:{value:1},b:{value:3},c:{value:3},d:{value:3},e:{value:3},f:{value:3},g:{value:3}});function R(){var e=void 0,t=void 0,n=new U.a;function r(){if(!t)throw new Error("No connection established")}function a(){return o.apply(this,arguments)}function o(){return o=Object(y["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(void 0!=e){r.next=2;break}return r.abrupt("return",Promise.reject(new Error("bluetooth not available")));case 2:return r.next=4,c();case 4:return n.emit("status","Requesting any Bluetooth Device..."),a={filters:[{namePrefix:"NIST",services:[C]}]},r.next=8,e.requestDevice(a).then((function(e){t=e,t.addEventListener("gattserverdisconnected",(function(){n.emit("disconnected")}))})).then((function(){return t.gatt.connect()})).catch((function(e){throw e}));case 8:n.emit("connected",t);case 9:case"end":return r.stop()}}),r)}))),o.apply(this,arguments)}function c(){return i.apply(this,arguments)}function i(){return i=Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.gatt.disconnect();case 4:t=void 0;case 5:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}function u(){return r(),t.gatt.getPrimaryService(C).then((function(e){return e.getCharacteristic(k.count)})).then((function(e){return e.readValue()})).then((function(e){return e.getUint32(0,!0)}))}function s(){return r(),t.gatt.getPrimaryService(C).then((function(e){return e.getCharacteristic("battery_level")})).then((function(e){return e.readValue()})).then((function(e){return e.getUint8(0)}))}function f(e){return t.gatt.getPrimaryService(C).then((function(e){return e.getCharacteristic(k.data)})).then((function(t){return t.writeValue(e)}))}function l(e){return t.gatt.getPrimaryService(C).then((function(e){return e.getCharacteristic(k.data)})).then((function(e){return e.startNotifications()})).then((function(t){return t.addEventListener("characteristicvaluechanged",e)}))}function d(e){return t.gatt.getPrimaryService(C).then((function(e){return e.getCharacteristic(k.data)})).then((function(e){return e.stopNotifications()})).then((function(t){return t.removeEventListener("characteristicvaluechanged",e)}))}function h(e,t){return v.apply(this,arguments)}function v(){return v=Object(y["a"])(regeneratorRuntime.mark((function e(t,n){var a,o,c,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=function(e){a(e)},r(),c=new Promise((function(e,t){function r(r){n(r.target.value,e,t)}a=r})),e.next=5,l(o);case 5:return e.prev=5,e.next=8,m(t.value);case 8:return e.next=10,c;case 10:return i=e.sent,e.abrupt("return",i);case 12:return e.prev=12,e.next=15,d(o);case 15:return e.finish(12);case 16:case"end":return e.stop()}}),e,null,[[5,,12,16]])}))),v.apply(this,arguments)}function m(e){return t.gatt.getPrimaryService(C).then((function(e){return e.getCharacteristic(k.rw)})).then((function(t){return t.writeValue(j(e))}))}function p(e){return b.apply(this,arguments)}function b(){return b=Object(y["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.length>8)){e.next=2;break}throw new Error("Name must be less than 8 characters");case 2:return r(),e.next=5,f(D(t)).then((function(){return m(x.setName.value)}));case 5:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function g(e,t){var n=new ArrayBuffer(4),r=new DataView(n);return r.setUint16(0,e,!0),r.setUint16(2,t,!0),f(n).then((function(){return m(x.setScanParameters.value)}))}function w(e,t){var n=new ArrayBuffer(4),r=new Uint16Array(n);return r[0]=100*e,r[1]=t.value,f(n)}function _(){var e=0,t=[0,0],n=(new Date).getTime(),r=0;return h(x.getUptime,(function(n,a){var o=n.buffer,c=new Uint32Array(o);t[e]=c[0],e+=c.length,2==e&&(r=(new Date).getTime(),a(t))})).then((function(){var e=parseInt((n+r)/2),a=e%1e3;e=parseInt(e/1e3);var o=new ArrayBuffer(12),c=new Uint32Array(o);return c[0]=e,c[1]=t[0]-a,c[2]=t[1],f(o)})).then((function(){return m(x.setSynchTime.value)}))}function A(){return T.apply(this,arguments)}function T(){return T=Object(y["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=0,n=[0,0],e.next=4,h(x.getUptime,(function(e,r){var a=e.buffer,o=new Uint32Array(a);n[t]=o[0],t+=o.length,2==t&&r(n)}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)}))),T.apply(this,arguments)}function R(){return L.apply(this,arguments)}function L(){return L=Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h(x.getMode,(function(e,t){t(N.fromValue(e.getUint8()))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),L.apply(this,arguments)}function M(e){return B.apply(this,arguments)}function B(){return B=Object(y["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.command){e.next=3;break}return e.next=3,m(t.command);case 3:case"end":return e.stop()}}),e)}))),B.apply(this,arguments)}function I(){return V.apply(this,arguments)}function V(){return V=Object(y["a"])(regeneratorRuntime.mark((function e(){var n,a,o,c,i,s,f,h,v,p,y,b,g,w=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return g=function(){return new Promise((function(e,r){var a=setInterval((function(){n.interrupt&&(clearInterval(a),f=S,r(new E))}),1e3);f=function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(t){var n=t.target.value,a=n.getUint32(0,!0),o=new Uint8Array(n.buffer,4);return 0===o.byteLength?(y++,e(!1)):a!==y?r(new P):(s.set(o,b),f=S,b+=o.byteLength,y++,void e(!0))})),p.setUint32(0,y,!0),t.gatt.getPrimaryService(C).then((function(e){return e.getCharacteristic(k.data)})).then((function(e){return e.writeValue(p)})).catch((function(e){return r(e)}))}))},h=function(e){f(e),f=S},n=w.length>0&&void 0!==w[0]?w[0]:{interrupt:!1,onProgress:void 0},e.next=5,u();case 5:return a=e.sent,o=32,c=a*o,i=new ArrayBuffer(c),s=new Uint8Array(i),f=S,r(),v=new ArrayBuffer(4),p=new DataView(v),y=0,b=0,e.next=18,l(h);case 18:return e.prev=18,e.next=21,m(x.startDataDownload.value);case 21:if(!(b<c)){e.next=29;break}if(!n.interrupt){e.next=24;break}throw new E;case 24:return e.next=26,g();case 26:n.onProgress&&n.onProgress(b,c),e.next=21;break;case 29:return e.prev=29,e.prev=30,e.next=33,d(h);case 33:return e.prev=33,e.next=36,m(x.stopDataDownload.value);case 36:return e.finish(33);case 37:return e.finish(29);case 38:return e.abrupt("return",s);case 39:case"end":return e.stop()}}),e,null,[[18,,29,38],[30,,33,37]])}))),V.apply(this,arguments)}return/Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent)||(e=navigator.bluetooth),{connect:a,disconnect:c,getMemoryUsage:u,setName:p,fetchData:I,eraseData:function(){return m(x.eraseFlash.value)},getUptime:A,synchClock:_,getMode:R,setMode:M,getBatteryLevel:s,startRecording:function(){return m(x.startWritingToFlash.value)},stopRecording:function(){return m(x.stopWritingToFlash.value)},setMark:function(){return m(x.recordPrimaryEncounterEvent.value)},setUnmark:function(){return m(x.recordSecondaryEncounterEvent.value)},writeCalibrationData:w,setScanParameters:g,getDeviceName:function(){return O()(t.name)},isConnected:function(){return!!t},on:n.on.bind(n),off:n.off.bind(n),once:n.once.bind(n)}}var L={components:{DeviceInfo:p},data:function(){return{controller:R(),recording:!1,near:!1,connected:!1}},created:function(){var e=this;this.controller.on("connected",(function(){e.connected=!0})),this.controller.on("disconnected",(function(){e.connected=!1}))},beforeDestroy:function(){this.controller.off("disconnected"),this.controller.off("connected")},methods:{onRecordingButton:function(){var e=this;this.recording?this.controller.stopRecording().then((function(){e.recording=!1})):this.controller.setScanParameters(3840,230).then((function(){return e.controller.startRecording()})).then((function(){e.recording=!0,e.near=!1}))},onConnect:function(){this.controller.connect()}},computed:{recordingText:function(){return this.recording?"Recording Active":"Not Recording"},recordingIcon:function(){return this.recording?["fas","square"]:["fas","circle"]},recordingColor:function(){return this.recording?"black":"red"}},watch:{near:function(e){!0===e?this.controller.setMark():!1===e&&this.controller.setUnmark()}}},M=L,B=(n("84fd"),Object(v["a"])(M,c,i,!1,null,"58fe9f62",null)),I=B.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"management-tab"},[n("button",[e._v("Device...")]),n("button",[e._v("Choose File(s)...")]),n("div",{staticClass:"dropZone",on:{drop:function(t){return t.preventDefault(),e.dropFile(t)},dragover:function(e){e.preventDefault()}}},[n("p",[e._v("Drop File(s)...")])])])},F=[],z={components:{},data:function(){return{}},methods:{dropFile:function(e){var t,n,r;if(e)if(e.dataTransfer.items)for(t=0;t<e.dataTransfer.items.length;t++)n=e.dataTransfer.items[t],"file"===n.kind&&(r=n.getAsFile(),console.log("... file["+t+"].name = "+r.name));else for(t=0;t<e.dataTransfer.files.lenth;t++)r=e.dataTransfer.files[t],console.log("... file["+t+"].name = "+r.name)}},computed:{},watch:{}},K=z,q=(n("5310"),Object(v["a"])(K,V,F,!1,null,"87c55aae",null)),W=q.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"management-tab"},[e.connected?n("device-info",{attrs:{device:e.controller,connected:e.connected,allowSynch:""}}):e._e(),e.connected?n("simple-grid",{attrs:{data:e.gridData,columns:e.gridColumns}}):e._e(),e.connected?n("div",{staticClass:"memory"},[n("h3",[e._v("Memory:")]),n("a",{attrs:{href:"#"},on:{click:e.onLoad}},[e._v("Load")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.memory,expression:"memory"}],attrs:{rows:"10",cols:"60",readonly:"1",wrap:"1"},domProps:{value:e.memory},on:{input:function(t){t.target.composing||(e.memory=t.target.value)}}}),n("button",{attrs:{id:"erase"},on:{click:e.onErase}},[e._v("Erase")])]):n("button",{attrs:{id:"connect"},on:{click:e.onConnect}},[e._v("Connect")])],1)},H=[],Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",e._l(e.columns,(function(t,r){return n("th",{key:r,class:{active:e.sortKey==t},on:{click:function(n){return e.sortBy(t)}}},[e._v(" "+e._s(e._f("capitalize")(t))+" "),n("span",{staticClass:"arrow",class:e.sortOrders[t]>0?"asc":"dsc"})])})),0)]),n("tbody",e._l(e.filteredData,(function(t,r){return n("tr",{key:r},e._l(e.columns,(function(r,a){return n("td",{key:a},[e._v(e._s(t[r]))])})),0)})),0)])},J=[],Y=(n("4160"),n("c975"),n("fb6a"),n("45fc"),n("b64b"),n("159b"),{data:function(){var e={};return this.columns.forEach((function(t){e[t]=1})),{sortKey:"",sortOrders:e}},props:{columns:Array,data:Array,filterKey:String},computed:{filteredData:function(){var e=this.sortKey,t=this.filterKey&&this.filterKey.toLowerCase(),n=this.sortOrders[e]||1,r=this.data;return t&&(r=r.filter((function(e){return Object.keys(e).some((function(n){return String(e[n]).toLowerCase().indexOf(t)>-1}))}))),e&&(r=r.slice().sort((function(t,r){return t=t[e],r=r[e],(t===r?0:t>r?1:-1)*n}))),r}},filters:{capitalize:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},methods:{sortBy:function(e){this.sortKey=e,this.sortOrders[e]=-1*this.sortOrders[e]}}}),G=Y,Q=(n("dda7"),Object(v["a"])(G,Z,J,!1,null,"096ef224",null)),X=Q.exports;function ee(e){for(var t=2*e.length,n=new Uint8Array(t+Math.ceil(t/4)),r="a".charCodeAt(0)-10,a="0".charCodeAt(0),o=" ".charCodeAt(0),c=0,i=0;i<e.length;i++){var u=e[i]>>>4;n[c++]=u>9?u+r:u+a,u=15&e[i],n[c++]=u>9?u+r:u+a,i%2&&(n[c++]=o)}return String.fromCharCode.apply(null,n)}var te={components:{DeviceInfo:p,SimpleGrid:X},data:function(){return{controller:R(),connected:!1,gridColumns:["name","value"],gridData:[{name:"attribute1",value:"Value1"},{name:"attribute2",value:"Value2"},{name:"attribute3",value:"Value3"},{name:"attribute4",value:"Value4"}],memory:""}},created:function(){var e=this;this.controller.on("connected",(function(){e.connected=!0})),this.controller.on("disconnected",(function(){e.connected=!1}))},beforeDestroy:function(){this.controller.off("disconnected"),this.controller.off("connected")},methods:{onLoad:function(){var e=this;this.controller.fetchData().then((function(t){e.memory=ee(t)}))},onErase:function(){var e=this;this.controller.erase().then((function(){return e.memory=""}))},onConnect:function(){this.controller.connect()}},computed:{},watch:{}},ne=te,re=(n("64e0"),Object(v["a"])(ne,$,H,!1,null,"45f3ee84",null)),ae=re.exports,oe={name:"NISTET",components:{tabTracking:I,tabProcessing:W,tabManagement:ae},data:function(){return{currentTab:"Tracking",tabs:["Tracking","Processing","Management"]}},computed:{currentTabComponent:function(){return"tab-"+this.currentTab.toLowerCase()}},created:function(){}},ce=oe,ie=(n("034f"),Object(v["a"])(ce,a,o,!1,null,null,null)),ue=ie.exports,se=n("ecee"),fe=n("b702"),le=n("c074"),de=n("f2d1"),he=n("ad3d");se["c"].add(le["b"],le["e"],le["d"],le["f"],le["c"],fe["b"],fe["c"],fe["a"],le["g"],le["h"],le["a"],de["a"]),r["a"].component("font-awesome-icon",he["a"]),r["a"].component("font-awesome-layers",he["b"]),r["a"].filter("formatMoment",(function(e){return e?e.format("MM/DD/YY HH:mm ZZ"):"N/A"})),r["a"].filter("formatUptime",(function(e){if(e){var t=function(e,t){var n=[0,0];return n[1]=e%t,n[0]=(e-n[1])/t,n},n=t(e,864e5),r=t(n[1],36e5),a=t(r[1],6e4),o=t(a[1],1e3),c=function(e){return e<10?"0"+e:e};return[c(n[0]),c(r[0]),c(a[0]),c(o[0])].join(":")+" (D:H:M:S)"}return"N/A"})),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(ue)}}).$mount("#app")},"64e0":function(e,t,n){"use strict";var r=n("fc5e"),a=n.n(r);a.a},"84fd":function(e,t,n){"use strict";var r=n("c307"),a=n.n(r);a.a},"85ec":function(e,t,n){},c307:function(e,t,n){},dda7:function(e,t,n){"use strict";var r=n("479d"),a=n.n(r);a.a},df2a:function(e,t,n){},fc5e:function(e,t,n){}});
//# sourceMappingURL=app.e89ecab2.js.map