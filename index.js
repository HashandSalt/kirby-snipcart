(function() {
  "use strict";
  const _sfc_main$9 = {
    props: {
      initialTab: String,
      tabs: Array
    },
    data() {
      return {
        activeTab: this.initialTab
      };
    },
    computed: {
      tabPanelSlotName() {
        return `tab-panel-${this.activeTab}`;
      }
    },
    methods: {
      tabHeadSlotName(tabName) {
        return `tab-head-${tabName}`;
      },
      switchTab(tabName) {
        this.activeTab = tabName;
      }
    }
  };
  function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
    var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
    if (render) {
      options.render = render;
      options.staticRenderFns = staticRenderFns;
      options._compiled = true;
    }
    return {
      exports: scriptExports,
      options
    };
  }
  var _sfc_render$9 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "card" }, [_c("header", { staticClass: "card-header" }, [_c("ul", { staticClass: "tab-heads" }, _vm._l(_vm.tabs, function(tab) {
      return _c("li", { key: tab, staticClass: "tab-head", class: {
        "tab-head--active": _vm.activeTab === tab
      }, on: { "click": function($event) {
        return _vm.switchTab(tab);
      } } }, [_vm._t(_vm.tabHeadSlotName(tab), function() {
        return [_vm._v(_vm._s(tab) + " ")];
      })], 2);
    }), 0)]), _c("main", { staticClass: "card-body" }, [_c("div", { staticClass: "tab-panel" }, [_vm._t(_vm.tabPanelSlotName)], 2)])]);
  };
  var _sfc_staticRenderFns$9 = [];
  _sfc_render$9._withStripped = true;
  var __component__$9 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$9,
    _sfc_render$9,
    _sfc_staticRenderFns$9
  );
  __component__$9.options.__file = "/Volumes/Server/Clients/HashandSalt/hashandsaltKirby5/public/site/plugins/kirby-snipcart/src/components/tools/tabs.vue";
  const TabCard = __component__$9.exports;
  const _sfc_main$8 = {
    data() {
      return {
        abandoned: null
      };
    },
    computed: {
      abandonedCount() {
        return this.abandoned ? this.abandoned.length : "Loading...";
      }
    },
    // Abandoned Carts
    async created() {
      let response = await this.$api.get("snipcart/carts/abandoned");
      this.abandoned = response.items;
    }
  };
  var _sfc_render$8 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "k-snipcart-vital" }, [_c("h3", [_vm._v("Abandonded Carts")]), _c("span", [_vm._v(_vm._s(_vm.abandonedCount))])]);
  };
  var _sfc_staticRenderFns$8 = [];
  _sfc_render$8._withStripped = true;
  var __component__$8 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$8,
    _sfc_render$8,
    _sfc_staticRenderFns$8
  );
  __component__$8.options.__file = "/Volumes/Server/Clients/HashandSalt/hashandsaltKirby5/public/site/plugins/kirby-snipcart/src/components/dashboard/abandoned.vue";
  const Abandoned = __component__$8.exports;
  const _sfc_main$7 = {
    data() {
      return {
        totalSales: null
      };
    },
    computed: {
      salesCount() {
        return this.totalSales ? this.totalSales : "Loading...";
      }
    },
    // Sales totals
    async created() {
      let response = await this.$api.get("snipcart/orders");
      let salesTotal = response.items.reduce((acc, item) => acc + item.finalGrandTotal, 0).toFixed(2);
      this.totalSales = salesTotal;
    }
  };
  var _sfc_render$7 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "k-snipcart-vital" }, [_c("h3", [_vm._v("Total Sales")]), _c("span", [_vm._v(_vm._s(_vm.salesCount))])]);
  };
  var _sfc_staticRenderFns$7 = [];
  _sfc_render$7._withStripped = true;
  var __component__$7 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$7,
    _sfc_render$7,
    _sfc_staticRenderFns$7
  );
  __component__$7.options.__file = "/Volumes/Server/Clients/HashandSalt/hashandsaltKirby5/public/site/plugins/kirby-snipcart/src/components/dashboard/sales.vue";
  const SalesTotal = __component__$7.exports;
  const _sfc_main$6 = {
    name: "popularItem",
    data() {
      return {
        popularItem: void 0,
        errors: []
      };
    },
    computed: {
      popularCount() {
        return this.popularItem ? this.popularItem : "Loading...";
      }
    },
    // Abandoned Carts
    async created() {
      try {
        let response = await this.$api.get("snipcart/orders", { pretty: true });
        let flattened = response.items.reduce((a, b) => a.concat(b.items), []);
        let flattenedIDs = flattened.map(({ name }) => name).reduce((names, name) => {
          const count = names[name] || 0;
          names[name] = count + 1;
          return names;
        }, {});
        let popularID = Object.keys(flattenedIDs).reduce((a, b) => flattenedIDs[a] > flattenedIDs[b] ? a : b);
        this.popularItem = popularID;
      } catch (e) {
        this.errors.push(e);
      }
    }
  };
  var _sfc_render$6 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "k-snipcart-vital" }, [_c("h3", [_vm._v("Most Popular")]), _c("span", [_vm._v(_vm._s(_vm.popularCount))])]);
  };
  var _sfc_staticRenderFns$6 = [];
  _sfc_render$6._withStripped = true;
  var __component__$6 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$6,
    _sfc_render$6,
    _sfc_staticRenderFns$6
  );
  __component__$6.options.__file = "/Volumes/Server/Clients/HashandSalt/hashandsaltKirby5/public/site/plugins/kirby-snipcart/src/components/dashboard/popular.vue";
  const Popular = __component__$6.exports;
  const _sfc_main$5 = {
    props: {
      name: String,
      columns: Object,
      options: Array,
      rows: {
        type: Array,
        default() {
          return [];
        }
      },
      empty: String
    },
    data() {
      return {
        tablecolumns: { invoiceNumber: { label: "Code", type: "text" }, date: { label: "Date", type: "text" }, status: { label: "Status", type: "text" }, total: { label: "Total", type: "text" }, shippingAddressCountry: { label: "Ship to", type: "text" } },
        orders: []
      };
    },
    async created() {
      let response = await this.$api.get("snipcart/orders?limit=500");
      let data = response.items.map(function(element) {
        let date = new Date(Date.parse(element.completionDate));
        let datestring = ("0" + date.getDate()).slice(-2) + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear();
        return { invoiceNumber: element.invoiceNumber, date: datestring, status: element.status, total: element.finalGrandTotal, shippingAddressCountry: element.shippingAddressCountry };
      });
      this.orders = data;
    }
  };
  var _sfc_render$5 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", [_vm.orders.length ? _c("k-table", { attrs: { "columns": _vm.tablecolumns, "rows": _vm.orders } }) : _vm._e()], 1);
  };
  var _sfc_staticRenderFns$5 = [];
  _sfc_render$5._withStripped = true;
  var __component__$5 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$5,
    _sfc_render$5,
    _sfc_staticRenderFns$5
  );
  __component__$5.options.__file = "/Volumes/Server/Clients/HashandSalt/hashandsaltKirby5/public/site/plugins/kirby-snipcart/src/components/dashboard/orders.vue";
  const Orders = __component__$5.exports;
  const _sfc_main$4 = {
    name: "Vitals",
    components: {
      abandoned: Abandoned,
      salestotal: SalesTotal,
      popular: Popular,
      "orders": Orders
    }
  };
  var _sfc_render$4 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("k-grid", { staticClass: "k-snipcart-vitals", attrs: { "gutter": "medium", "variant": "columns" } }, [_c("k-column", { attrs: { "width": "1/3" } }, [_c("salestotal")], 1), _c("k-column", { attrs: { "width": "1/3" } }, [_c("popular")], 1), _c("k-column", { attrs: { "width": "1/3" } }, [_c("abandoned")], 1), _c("k-column", { attrs: { "width": "1/1" } }, [_c("orders")], 1)], 1);
  };
  var _sfc_staticRenderFns$4 = [];
  _sfc_render$4._withStripped = true;
  var __component__$4 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$4,
    _sfc_render$4,
    _sfc_staticRenderFns$4
  );
  __component__$4.options.__file = "/Volumes/Server/Clients/HashandSalt/hashandsaltKirby5/public/site/plugins/kirby-snipcart/src/components/dashboard/Vitals.vue";
  const Vitals = __component__$4.exports;
  const _sfc_main$3 = {
    props: {
      name: String,
      columns: Object,
      options: Array,
      rows: {
        type: Array,
        default() {
          return [];
        }
      },
      empty: String
    },
    data() {
      return {
        tablecolumns: { discname: { label: "Name", type: "text" }, code: { label: "Code", type: "text" }, expires: { label: "Expires", type: "text" }, uses: { label: "Uses", type: "text" } },
        discounts: []
      };
    },
    async created() {
      let response = await this.$api.get("snipcart/discounts");
      let data = response.map(function(element) {
        let date = new Date(Date.parse(element.expires));
        let datestring = ("0" + date.getDate()).slice(-2) + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear();
        return { discname: element.discname, code: element.code, uses: element.numberOfUsages, expires: datestring };
      });
      this.discounts = data;
    }
  };
  var _sfc_render$3 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", [_vm.discounts.length ? _c("k-table", { attrs: { "columns": _vm.tablecolumns, "rows": _vm.discounts } }) : _vm._e()], 1);
  };
  var _sfc_staticRenderFns$3 = [];
  _sfc_render$3._withStripped = true;
  var __component__$3 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$3,
    _sfc_render$3,
    _sfc_staticRenderFns$3
  );
  __component__$3.options.__file = "/Volumes/Server/Clients/HashandSalt/hashandsaltKirby5/public/site/plugins/kirby-snipcart/src/components/discounts/components/discountlist.vue";
  const Discounts$1 = __component__$3.exports;
  const _sfc_main$2 = {
    name: "Discounts",
    components: {
      "discounts": Discounts$1
    }
  };
  var _sfc_render$2 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", [_c("k-grid", { staticClass: "k-snipcart-vitals", attrs: { "gutter": "medium" } }, [_c("k-column", { attrs: { "width": "1/1" } }, [_c("discounts")], 1)], 1)], 1);
  };
  var _sfc_staticRenderFns$2 = [];
  _sfc_render$2._withStripped = true;
  var __component__$2 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$2,
    _sfc_render$2,
    _sfc_staticRenderFns$2
  );
  __component__$2.options.__file = "/Volumes/Server/Clients/HashandSalt/hashandsaltKirby5/public/site/plugins/kirby-snipcart/src/components/discounts/discounts.vue";
  const Discounts = __component__$2.exports;
  const _sfc_main$1 = {
    name: "Dashboard",
    components: {
      "vitals": Vitals,
      "discounts": Discounts,
      "TabCard": TabCard
    },
    data() {
      return {
        initialTab: "dashboard",
        tabs: ["dashboard", "discounts"]
      };
    }
  };
  var _sfc_render$1 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("k-panel-inside", [_c("TabCard", { attrs: { "tabs": _vm.tabs, "initialTab": _vm.initialTab } }, [_c("template", { slot: "tab-head-dashboard" }, [_vm._v(" Dashboard ")]), _c("template", { slot: "tab-panel-dashboard" }, [_c("vitals")], 1), _c("template", { slot: "tab-head-discounts" }, [_vm._v(" Discounts ")]), _c("template", { slot: "tab-panel-discounts" }, [_c("discounts")], 1)], 2)], 1);
  };
  var _sfc_staticRenderFns$1 = [];
  _sfc_render$1._withStripped = true;
  var __component__$1 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$1,
    _sfc_render$1,
    _sfc_staticRenderFns$1
  );
  __component__$1.options.__file = "/Volumes/Server/Clients/HashandSalt/hashandsaltKirby5/public/site/plugins/kirby-snipcart/src/components/panel/Dashboard.vue";
  const Dash = __component__$1.exports;
  const _sfc_main = {
    props: {
      label: String,
      value: String,
      disabled: Boolean,
      required: Boolean,
      value: String
    },
    data() {
      return {
        totalSales: null,
        productID: this.$store.getters["content/values"]()["productid"]
      };
    },
    computed: {
      salesCount() {
        return this.totalSales ? this.totalSales : "Loading...";
      }
    },
    async created() {
      let response = await this.$api.get("snipcart/products/" + this.productID);
      if (response === void 0 || response.length == 0) {
        this.totalSales = 0;
      } else {
        this.totalSales = response["statistics"]["totalSales"].toFixed(2);
      }
    }
  };
  var _sfc_render = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "k-snipcart-product-total" }, [_c("div", { staticClass: "k-snipcart-vital" }, [_c("h3", [_vm._v("Total Sales")]), _c("span", [_vm._v(_vm._s(_vm.salesCount))])])]);
  };
  var _sfc_staticRenderFns = [];
  _sfc_render._withStripped = true;
  var __component__ = /* @__PURE__ */ normalizeComponent(
    _sfc_main,
    _sfc_render,
    _sfc_staticRenderFns
  );
  __component__.options.__file = "/Volumes/Server/Clients/HashandSalt/hashandsaltKirby5/public/site/plugins/kirby-snipcart/src/components/products/ProductTotal.vue";
  const ProductTotal = __component__.exports;
  panel.plugin("hashandsalt/snipcart", {
    components: {
      dash: Dash
    },
    fields: {
      productTotal: ProductTotal
    }
  });
})();
