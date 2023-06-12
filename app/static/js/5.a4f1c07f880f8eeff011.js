webpackJsonp([5],{"k/Ca":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("mtWM"),o={data:function(){return{hosts:[],selectedHost:null}},methods:{getHosts:function(){var t=this;a.a.get("http://localhost:5000/api/hosts").then(function(s){t.hosts=s.data}).catch(function(t){console.log(t)})},showHostDetails:function(t){this.selectedHost=t}},computed:{totalHostCount:function(){return this.hosts.length},reachableHostsCount:function(){return this.hosts.filter(function(t){return"SUCCESS"===t.pingStatus}).length},reachableHostsPercentage:function(){return Math.round(this.reachableHostsCount/this.hosts.length*100)}},created:function(){this.getHosts()}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("h2",{staticClass:"title"},[t._v("Hosts")]),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar bg-success",style:"width: "+t.reachableHostsPercentage+"%;",attrs:{role:"progressbar","aria-valuenow":t.reachableHostsPercentage,"aria-valuemin":"0","aria-valuemax":"100"}},[t._v(t._s(t.reachableHostsPercentage)+"%")])]),t._v(" "),e("p",[t._v("Anzahl Hosts: "+t._s(t.totalHostCount))]),t._v(" "),e("p",[t._v("Erreichbare Hosts: "+t._s(t.reachableHostsCount))]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"collapse",attrs:{id:"hostsList"}},[e("div",{staticClass:"card1 card-body"},[e("table",{staticClass:"table"},[t._m(1),t._v(" "),e("tbody",t._l(t.hosts,function(s){return e("tr",{key:s},[e("td",{staticClass:"text-start"},[t._v(t._s(s.hostName))]),t._v(" "),e("td",{staticClass:"text-start"},[t._v(t._s(s.hostIp))]),t._v(" "),e("td",{staticClass:"text-start"},[t._v(t._s(s.id))]),t._v(" "),e("td",[e("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(e){return t.showHostDetails(s)}}},[t._v("Details")])])])}),0)])])])])]),t._v(" "),t.selectedHost?e("div",{staticClass:"overlay"}):t._e(),t._v(" "),t.selectedHost?e("div",{staticClass:"card card-body"},[e("h3",[t._v(" "+t._s(t.selectedHost.hostName))]),t._v(" "),e("table",{staticClass:"table"},[e("tboy",[e("tr",[e("th",{staticClass:"text-left",attrs:{scope:"row"}},[t._v("connectedInterfaceName")]),t._v(" "),e("td",[t._v(" "+t._s(t.selectedHost.connectedInterfaceName))])]),t._v(" "),e("tr",[e("th",{staticClass:"text-left",attrs:{scope:"row"}},[t._v("connectedNetworkDeviceIpAddress")]),t._v(" "),e("td",[t._v(" "+t._s(t.selectedHost.connectedNetworkDeviceIpAddress))])]),t._v(" "),e("tr",[e("th",{staticClass:"text-left",attrs:{scope:"row"}},[t._v("connectedNetworkDeviceName")]),t._v(" "),e("td",[t._v(" "+t._s(t.selectedHost.connectedNetworkDeviceName))])]),t._v(" "),e("tr",[e("th",{staticClass:"text-left",attrs:{scope:"row"}},[t._v("hostMac")]),t._v(" "),e("td",[t._v(" "+t._s(t.selectedHost.hostMac))])]),t._v(" "),e("tr",[e("th",{staticClass:"text-left",attrs:{scope:"row"}},[t._v("hostType")]),t._v(" "),e("td",[t._v(" "+t._s(t.selectedHost.hostType))])]),t._v(" "),e("tr",[e("th",{staticClass:"text-left",attrs:{scope:"row"}},[t._v("ID")]),t._v(" "),e("td",[t._v(" "+t._s(t.selectedHost.id)+" ")])]),t._v(" "),e("tr",[e("th",{staticClass:"text-left",attrs:{scope:"row"}},[t._v("lastUpdated")]),t._v(" "),e("td",[t._v(" "+t._s(t.selectedHost.lastUpdated)+" ")])]),t._v(" "),e("tr",[e("th",{staticClass:"text-left",attrs:{scope:"row"}},[t._v("pingStatus")]),t._v(" "),e("td",{class:{"text-success":"SUCCESS"===t.selectedHost.pingStatus,"text-danger":"SUCCESS"!==t.selectedHost.pingStatus}},[t._v("\n              "+t._s(t.selectedHost.pingStatus)+" ")])])])],1),t._v(" "),e("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(s){t.selectedHost=null}}},[t._v("Schließen")])]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"collapse","data-target":"#hostsList","aria-expanded":"false","aria-controls":"hostsList"}},[this._v("\n            Show Hosts\n          ")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("th",{staticClass:"text-center",attrs:{scope:"col"}},[this._v("Name")]),this._v(" "),s("th",{staticClass:"text-center",attrs:{scope:"col"}},[this._v("IP")]),this._v(" "),s("th",{staticClass:"text-center",attrs:{scope:"col"}},[this._v("ID")])])}]};var r=e("VU/8")(o,c,!1,function(t){e("q8ey")},null,null);s.default=r.exports},q8ey:function(t,s){}});
//# sourceMappingURL=5.a4f1c07f880f8eeff011.js.map