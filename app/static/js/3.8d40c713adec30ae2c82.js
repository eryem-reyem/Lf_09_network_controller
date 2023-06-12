webpackJsonp([3],{"3Sht":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c=s("mtWM"),a={data:function(){return{network_devices:[],selectedDevice:null}},methods:{getNetworkDevices:function(){var t=this;c.a.get("http://localhost:5000/api/network-devices").then(function(e){t.network_devices=e.data}).catch(function(t){console.log(t)})},showDeviceDetails:function(t){this.selectedDevice=t}},computed:{totalDeviceCount:function(){return this.network_devices.length},reachableDevicesCount:function(){return this.network_devices.filter(function(t){return"Reachable"===t.reachabilityStatus}).length},reachableDevicesPercentage:function(){return Math.round(this.reachableDevicesCount/this.network_devices.length*100)}},created:function(){this.getNetworkDevices()}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("h2",{staticClass:"title"},[t._v("Network Devices")]),t._v(" "),s("div",{staticClass:"progress"},[s("div",{staticClass:"progress-bar bg-success",style:"width: "+t.reachableDevicesPercentage+"%;",attrs:{role:"progressbar","aria-valuenow":t.reachableDevicesPercentage,"aria-valuemin":"0","aria-valuemax":"100"}},[t._v(t._s(t.reachableDevicesPercentage)+"%")])]),t._v(" "),s("p",[t._v("Anzahl Deivces: "+t._s(t.totalDeviceCount))]),t._v(" "),s("p",[t._v("Erreichbare Devices: "+t._s(t.reachableDevicesCount))]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"collapse",attrs:{id:"networkList"}},[s("div",{staticClass:"card1 card-body"},[s("table",{staticClass:"table"},[t._m(1),t._v(" "),s("tbody",t._l(t.network_devices,function(e){return s("tr",{key:e},[s("td",{staticClass:"text-center"},[t._v(t._s(e.hostname))]),t._v(" "),s("td",{staticClass:"text-center"},[t._v(t._s(e.type))]),t._v(" "),s("td",{staticClass:"text-center"},[t._v(t._s(e.id))]),t._v(" "),s("td",[s("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(s){return t.showDeviceDetails(e)}}},[t._v("Details")])])])}),0)])])])])])]),t._v(" "),t.selectedDevice?s("div",{staticClass:"overlay"}):t._e(),t._v(" "),t.selectedDevice?s("div",{staticClass:"card card-body"},[s("h3",[t._v(" "+t._s(t.selectedDevice.hostname))]),t._v(" "),s("table",{staticClass:"table"},[s("tboy",[s("tr",[s("th",{staticClass:"text-center",attrs:{scope:"row"}},[t._v("collectionStatus")]),t._v(" "),s("td",[t._v(" "+t._s(t.selectedDevice.collectionStatus))])]),t._v(" "),s("tr",[s("th",{staticClass:"text-center",attrs:{scope:"row"}},[t._v("connectedInterfaceName")]),t._v(" "),s("td",[t._v(" "+t._s(t.selectedDevice.connectedInterfaceName))])]),t._v(" "),s("tr",[s("th",{staticClass:"text-center",attrs:{scope:"row"}},[t._v("connectedNetworkDeviceIpAddress")]),t._v(" "),s("td",[t._v(" "+t._s(t.selectedDevice.connectedNetworkDeviceIpAddress))])]),t._v(" "),s("tr",[s("th",{staticClass:"text-center",attrs:{scope:"row"}},[t._v("connectedNetworkDeviceName")]),t._v(" "),s("td",[t._v(" "+t._s(t.selectedDevice.connectedNetworkDeviceName))])]),t._v(" "),s("tr",[s("th",{staticClass:"text-center",attrs:{scope:"row"}},[t._v("errorDescription")]),t._v(" "),s("td",[t._v(" "+t._s(t.selectedDevice.errorDescription))])]),t._v(" "),s("tr",[s("th",{staticClass:"text-center",attrs:{scope:"row"}},[t._v("id")]),t._v(" "),s("td",[t._v(" "+t._s(t.selectedDevice.id)+" ")])]),t._v(" "),s("tr",[s("th",{staticClass:"text-center",attrs:{scope:"row"}},[t._v("interfaceCount")]),t._v(" "),s("td",[t._v(" "+t._s(t.selectedDevice.interfaceCount)+" ")])]),t._v(" "),s("tr",[s("th",{staticClass:"text-center",attrs:{scope:"row"}},[t._v("inventoryStatusDetail")]),t._v(" "),s("td",[t._v(" "+t._s(t.selectedDevice.inventoryStatusDetail)+" ")])]),t._v(" "),s("tr",[s("th",{staticClass:"text-center",attrs:{scope:"row"}},[t._v("lastUpdateTime")]),t._v(" "),s("td",[t._v(" "+t._s(t.selectedDevice.lastUpdateTime)+" ")])]),t._v(" "),s("tr",[s("th",{staticClass:"text-center",attrs:{scope:"row"}},[t._v("macAddress")]),t._v(" "),s("td",[t._v(" "+t._s(t.selectedDevice.macAddress)+" ")])]),t._v(" "),s("tr",[s("th",{staticClass:"text-center",attrs:{scope:"row"}},[t._v("managementIpAddress")]),t._v(" "),s("td",[t._v(" "+t._s(t.selectedDevice.managementIpAddress)+" ")])]),t._v(" "),s("tr",[s("th",{staticClass:"text-center",attrs:{scope:"row"}},[t._v("reachabilityStatus")]),t._v(" "),s("td",{class:{"text-success":"Reachable"===t.selectedDevice.reachabilityStatus,"text-danger":"Reachable"!==t.selectedDevice.reachabilityStatus}},[t._v("\n              "+t._s(t.selectedDevice.reachabilityStatus)+" ")])]),t._v(" "),s("tr",[s("th",{staticClass:"text-center",attrs:{scope:"row"}},[t._v("type")]),t._v(" "),s("td",[t._v(" "+t._s(t.selectedDevice.type)+" ")])]),t._v(" "),s("tr",[s("th",{staticClass:"text-center",attrs:{scope:"row"}},[t._v("upTime")]),t._v(" "),s("td",[t._v(" "+t._s(t.selectedDevice.upTime)+" ")])])])],1),t._v(" "),s("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(e){t.selectedDevice=null}}},[t._v("Schließen")])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"collapse","data-target":"#networkList","aria-expanded":"false","aria-controls":"networkList"}},[this._v("\n              Show Network Devices\n            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("th",{staticClass:"text-center",attrs:{scope:"col"}},[this._v("Name")]),this._v(" "),e("th",{staticClass:"text-center",attrs:{scope:"col"}},[this._v("Type")]),this._v(" "),e("th",{staticClass:"text-center",attrs:{scope:"col"}},[this._v("ID")])])}]};var i=s("VU/8")(a,r,!1,function(t){s("TSvn")},null,null);e.default=i.exports},TSvn:function(t,e){}});
//# sourceMappingURL=3.8d40c713adec30ae2c82.js.map