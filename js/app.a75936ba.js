(function (t) {
  function e(e) {
    for (
      var r, n, i = e[0], c = e[1], l = e[2], d = 0, u = [];
      d < i.length;
      d++
    )
      (n = i[d]),
        Object.prototype.hasOwnProperty.call(o, n) && o[n] && u.push(o[n][0]),
        (o[n] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (t[r] = c[r]);
    p && p(e);
    while (u.length) u.shift()();
    return s.push.apply(s, l || []), a();
  }

  function a() {
    for (var t, e = 0; e < s.length; e++) {
      for (var a = s[e], r = !0, n = 1; n < a.length; n++) {
        var i = a[n];
        0 !== o[i] && (r = !1);
      }
      r && (s.splice(e--, 1), (t = c((c.s = a[0]))));
    }
    return t;
  }
  var r = {},
    n = {
      app: 0,
    },
    o = {
      app: 0,
    },
    s = [];

  function i(t) {
    return (
      c.p +
      "js/" +
      ({}[t] || t) +
      "." +
      {
        "chunk-bb48d0a6": "7113c4b6",
        "chunk-41b6f4ed": "d0b701b9",
        "chunk-ab17ae0c": "a1fa9e68",
      }[t] +
      ".js"
    );
  }

  function c(e) {
    if (r[e]) return r[e].exports;
    var a = (r[e] = {
      i: e,
      l: !1,
      exports: {},
    });
    return t[e].call(a.exports, a, a.exports, c), (a.l = !0), a.exports;
  }
  (c.e = function (t) {
    var e = [],
      a = {
        "chunk-bb48d0a6": 1,
        "chunk-ab17ae0c": 1,
      };
    n[t]
      ? e.push(n[t])
      : 0 !== n[t] &&
        a[t] &&
        e.push(
          (n[t] = new Promise(function (e, a) {
            for (
              var r =
                  "css/" +
                  ({}[t] || t) +
                  "." +
                  {
                    "chunk-bb48d0a6": "74c7372f",
                    "chunk-41b6f4ed": "31d6cfe0",
                    "chunk-ab17ae0c": "8b184269",
                  }[t] +
                  ".css",
                o = c.p + r,
                s = document.getElementsByTagName("link"),
                i = 0;
              i < s.length;
              i++
            ) {
              var l = s[i],
                d = l.getAttribute("data-href") || l.getAttribute("href");
              if ("stylesheet" === l.rel && (d === r || d === o)) return e();
            }
            var u = document.getElementsByTagName("style");
            for (i = 0; i < u.length; i++) {
              (l = u[i]), (d = l.getAttribute("data-href"));
              if (d === r || d === o) return e();
            }
            var p = document.createElement("link");
            (p.rel = "stylesheet"),
              (p.type = "text/css"),
              (p.onload = e),
              (p.onerror = function (e) {
                var r = (e && e.target && e.target.src) || o,
                  s = new Error(
                    "Loading CSS chunk " + t + " failed.\n(" + r + ")"
                  );
                (s.code = "CSS_CHUNK_LOAD_FAILED"),
                  (s.request = r),
                  delete n[t],
                  p.parentNode.removeChild(p),
                  a(s);
              }),
              (p.href = o);
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(p);
          }).then(function () {
            n[t] = 0;
          }))
        );
    var r = o[t];
    if (0 !== r)
      if (r) e.push(r[2]);
      else {
        var s = new Promise(function (e, a) {
          r = o[t] = [e, a];
        });
        e.push((r[2] = s));
        var l,
          d = document.createElement("script");
        (d.charset = "utf-8"),
          (d.timeout = 120),
          c.nc && d.setAttribute("nonce", c.nc),
          (d.src = i(t));
        var u = new Error();
        l = function (e) {
          (d.onerror = d.onload = null), clearTimeout(p);
          var a = o[t];
          if (0 !== a) {
            if (a) {
              var r = e && ("load" === e.type ? "missing" : e.type),
                n = e && e.target && e.target.src;
              (u.message =
                "Loading chunk " + t + " failed.\n(" + r + ": " + n + ")"),
                (u.name = "ChunkLoadError"),
                (u.type = r),
                (u.request = n),
                a[1](u);
            }
            o[t] = void 0;
          }
        };
        var p = setTimeout(function () {
          l({
            type: "timeout",
            target: d,
          });
        }, 12e4);
        (d.onerror = d.onload = l), document.head.appendChild(d);
      }
    return Promise.all(e);
  }),
    (c.m = t),
    (c.c = r),
    (c.d = function (t, e, a) {
      c.o(t, e) ||
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: a,
        });
    }),
    (c.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(t, "__esModule", {
          value: !0,
        });
    }),
    (c.t = function (t, e) {
      if ((1 & e && (t = c(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (c.r(a),
        Object.defineProperty(a, "default", {
          enumerable: !0,
          value: t,
        }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          c.d(
            a,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return a;
    }),
    (c.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return c.d(e, "a", e), e;
    }),
    (c.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (c.p = "/"),
    (c.oe = function (t) {
      throw (console.error(t), t);
    });
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    d = l.push.bind(l);
  (l.push = e), (l = l.slice());
  for (var u = 0; u < l.length; u++) e(l[u]);
  var p = d;
  s.push([0, "chunk-vendors"]), a();
})({
  0: function (t, e, a) {
    t.exports = a("56d7");
  },
  "032f": function (t, e, a) {},
  1: function (t, e) {},
  "115e": function (t, e, a) {},
  2224: function (t, e, a) {
    t.exports = a.p + "img/logo-dark.7e8ed6b5.png";
  },
  "3a89": function (t, e, a) {
    t.exports = a.p + "img/twitter-logo.bcabff39.svg";
  },
  4766: function (t, e, a) {
    t.exports = a.p + "img/github-logo.059b309b.svg";
  },
  "4f2e": function (t, e, a) {
    t.exports = a.p + "img/certik-logo.4e77de97.svg";
  },
  "56d7": function (t, e, a) {
    "use strict";
    a.r(e);
    a("e260"), a("e6cf"), a("cca6"), a("a79d");
    var r = a("2b0e"),
      n = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "v-container",
          [a("Header"), a("router-view"), a("Footer")],
          1
        );
      },
      o = [],
      s = function () {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r(
          "v-container",
          {
            staticClass: "dark",
          },
          [
            r(
              "div",
              {
                staticClass: "header-div",
                staticStyle: {
                  "background-color": "#D9D8DD !important",
                },
              },
              [
                r(
                  "div",
                  {
                    staticClass: "header2-col-left",
                  },
                  [
                    r(
                      "a",
                      {
                        attrs: {
                          href: "/",
                        },
                      },
                      [
                        r(
                          "p",
                          {
                            staticClass: "header2-txt",
                          },
                          [t._v("OFFICIAL WEBSITE OF TOYGERSWAP")]
                        ),
                      ]
                    ),
                  ]
                ),
                r(
                  "div",
                  {
                    staticClass: "header2-col-right",
                  },
                  [
                    r(
                      "a",
                      {
                        attrs: {
                          href: "https://www.coingecko.com",
                          target: "_blank",
                        },
                      },
                      [
                        r("v-lazy-image", {
                          staticClass: "header2-logo",
                          attrs: {
                            src: a("d632"),
                          },
                        }),
                      ],
                      1
                    ),
                    r(
                      "a",
                      {
                        attrs: {
                          href: "#",
                          target: "_blank",
                        },
                      },
                      [
                        r("v-lazy-image", {
                          staticClass: "header2-logo",
                          attrs: {
                            src: a("9c6a"),
                          },
                        }),
                      ],
                      1
                    ),
                    r(
                      "a",
                      {
                        attrs: {
                          href: "https://coinmarketcap.com/",
                          target: "_blank",
                        },
                      },
                      [
                        r("v-lazy-image", {
                          staticClass: "header2-logo",
                          attrs: {
                            src: a("cb5b"),
                          },
                        }),
                      ],
                      1
                    ),
                    r(
                      "a",
                      {
                        attrs: {
                          href: "#",
                          target: "_blank",
                        },
                      },
                      [
                        r("v-lazy-image", {
                          staticClass: "header2-logo",
                          attrs: {
                            src: a("4f2e"),
                          },
                        }),
                      ],
                      1
                    ),
                    r(
                      "a",
                      {
                        attrs: {
                          href: "https://twitter.com/",
                          target: "_blank",
                        },
                      },
                      [
                        r("v-lazy-image", {
                          staticClass: "header2-logo",
                          attrs: {
                            src: a("3a89"),
                          },
                        }),
                      ],
                      1
                    ),
                    r(
                      "a",
                      {
                        attrs: {
                          href: "https://medium.com/",
                          target: "_blank",
                        },
                      },
                      [
                        r("v-lazy-image", {
                          staticClass: "header2-logo",
                          attrs: {
                            src: a("5e08"),
                          },
                        }),
                      ],
                      1
                    ),
                    r(
                      "a",
                      {
                        attrs: {
                          href: "https://t.me/",
                          target: "_blank",
                        },
                      },
                      [
                        r("v-lazy-image", {
                          staticClass: "header2-logo",
                          attrs: {
                            src: a("e932"),
                          },
                        }),
                      ],
                      1
                    ),
                    r(
                      "a",
                      {
                        attrs: {
                          href: "https://github.com/",
                          target: "_blank",
                        },
                      },
                      [
                        r("v-lazy-image", {
                          staticClass: "header2-logo",
                          attrs: {
                            src: a("4766"),
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                ),
              ]
            ),
            r(
              "div",
              {
                staticClass: "isDesktop",
              },
              [
                r(
                  "div",
                  {
                    staticClass: "header-3",
                  },
                  [
                    r(
                      "div",
                      {
                        staticClass: "warden-logo-wrap",
                      },
                      [
                        r(
                          "a",
                          {
                            attrs: {
                              href: "/",
                            },
                          },
                          [
                            r("img", {
                              attrs: {
                                src: a("2224"),
                              },
                            }),
                          ]
                        ),
                      ]
                    ),
                    r(
                      "div",
                      {
                        staticClass: "warden-price-wrap",
                      },
                      [
                        r("img", {
                          attrs: {
                            src: a("ffff"), //price logo
                          },
                        }),
                        r("p", [t._v("$ " + t._s(t.price))]),
                      ]
                    ),
                    r(
                      "button",
                      {
                        staticClass: "buy-warden-btn",
                        on: {
                          click: function (e) {
                            return t.handleBuyWardenBtn();
                          },
                        },
                      },
                      [t._v(" Buy TOY ")]
                    ),
                  ]
                ),
              ]
            ),
            r(
              "div",
              {
                staticClass: "isMobile",
              },
              [
                r(
                  "v-row",
                  {
                    staticStyle: {
                      "padding-top": "10px",
                    },
                  },
                  [
                    r(
                      "v-col",
                      {
                        attrs: {
                          cols: "12",
                        },
                      },
                      [
                        r(
                          "v-app-bar",
                          {
                            attrs: {
                              color: "#4401CA",
                              dark: "",
                            },
                          },
                          [
                            r(
                              "a",
                              {
                                attrs: {
                                  href: "/",
                                },
                              },
                              [
                                r("v-lazy-image", {
                                  staticClass: "header-logo",
                                  attrs: {
                                    src: a("2224"),
                                  },
                                }),
                              ],
                              1
                            ),
                            r(
                              "div",
                              {
                                staticStyle: {
                                  position: "absolute",
                                  display: "flex",
                                  "margin-top": "-10px",
                                  right: "18%",
                                  "text-align": "center",
                                  float: "right",
                                },
                              },
                              [
                                r("v-lazy-image", {
                                  staticStyle: {
                                    display: "inline",
                                    "margin-top": "10px",
                                  },
                                  attrs: {
                                    src: a("eb41"),
                                  },
                                }),
                                r(
                                  "p",
                                  {
                                    staticStyle: {
                                      display: "inline",
                                      "font-size": "14px",
                                      "margin-left": "10px",
                                      "margin-top": "15px",
                                    },
                                  },
                                  [t._v(" $ " + t._s(t.price) + " ")]
                                ),
                              ],
                              1
                            ),
                            r("v-spacer"),
                            r("v-app-bar-nav-icon", {
                              on: {
                                click: function (e) {
                                  e.stopPropagation(), (t.drawer = !t.drawer);
                                },
                              },
                            }),
                          ],
                          1
                        ),
                        r(
                          "v-navigation-drawer",
                          {
                            attrs: {
                              absolute: "",
                              bottom: "",
                              temporary: "",
                            },
                            model: {
                              value: t.drawer,
                              callback: function (e) {
                                t.drawer = e;
                              },
                              expression: "drawer",
                            },
                          },
                          [
                            r(
                              "v-list",
                              {
                                staticStyle: {
                                  padding: "20px",
                                },
                                attrs: {
                                  nav: "",
                                },
                              },
                              [
                                r(
                                  "v-list-item-group",
                                  {
                                    attrs: {
                                      "active-class":
                                        "deep-purple--text text--accent-4",
                                    },
                                    model: {
                                      value: t.group,
                                      callback: function (e) {
                                        t.group = e;
                                      },
                                      expression: "group",
                                    },
                                  },
                                  [
                                    r(
                                      "v-list-item",
                                      [
                                        r("v-list-item-title", [
                                          r(
                                            "a",
                                            {
                                              staticStyle: {
                                                color: "#4401CA",
                                              },
                                              attrs: {
                                                href: "/",
                                              },
                                            },
                                            [r("h1", [t._v("Home")])]
                                          ),
                                        ]),
                                      ],
                                      1
                                    ),
                                    r(
                                      "v-list-item",
                                      [
                                        r("v-list-item-title", [
                                          r(
                                            "a",
                                            {
                                              staticStyle: {
                                                color: "#4401CA",
                                              },
                                              attrs: {
                                                href: "/branding",
                                              },
                                            },
                                            [r("h1", [t._v("Branding")])]
                                          ),
                                        ]),
                                      ],
                                      1
                                    ),
                                    r("br"),
                                    r("hr"),
                                    r("br"),
                                    r(
                                      "v-list-item",
                                      [
                                        r(
                                          "v-list-item-title",
                                          [
                                            r("center", [
                                              r(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn margin-auto",
                                                  staticStyle: {
                                                    margin: "10px 40px",
                                                    "text-align": "center",
                                                  },
                                                  on: {
                                                    click: function (e) {
                                                      return t.gotoSwap();
                                                    },
                                                  },
                                                },
                                                [t._v(" Launch App ")]
                                              ),
                                            ]),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ]
        );
      },
      i = [],
      c = a("1da1"),
      l = (a("d3b7"), a("25f0"), a("b680"), a("96cf"), a("901e")),
      d = a.n(l),
      u = a("c030"),
      p = u.ethers,
      f = (function () {
        var t = Object(c["a"])(
          regeneratorRuntime.mark(function t() {
            var e, a;
            return regeneratorRuntime.wrap(function (t) {
              while (1)
                switch ((t.prev = t.next)) {
                  case 0:
                    if ("undefined" === typeof window.web3) {
                      t.next = 7;
                      break;
                    }
                    return (
                      (e = new p.providers.Web3Provider(
                        window.web3.currentProvider
                      )),
                      (t.next = 4),
                      e.getNetwork()
                    );
                  case 4:
                    if (((a = t.sent.chainId), 56 !== a)) {
                      t.next = 7;
                      break;
                    }
                    return t.abrupt("return", e);
                  case 7:
                    return t.abrupt(
                      "return",
                      new p.providers.JsonRpcProvider(
                        "https://bsc-dataseed.binance.org/"
                      )
                    );
                  case 8:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
        return function () {
          return t.apply(this, arguments);
        };
      })(),
      g = a("c030"),
      h = g.ethers,
      b = a("f951"),
      m = b.WardenBestRate,
      v = {
        name: "BUSD Token",
        symbol: "BUSD",
        address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
        decimals: 18,
        chainId: 56,
      },
      w = {
        name: "Warden Token",
        symbol: "WARDEN",
        address: "0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc",
        chainId: 56,
        decimals: 18,
      },
      y = {
        name: "Header",
        data: function () {
          return {
            darkTheme: !1,
            drawer: !1,
            group: null,
            price: 0,
          };
        },
        watch: {
          group: function () {
            this.drawer = !1;
          },
        },
        created: function () {
          var t = this;
          return Object(c["a"])(
            regeneratorRuntime.mark(function e() {
              var a;
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), f();
                    case 2:
                      return (a = e.sent), (e.next = 5), t.manageWardenPrice(a);
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )();
        },
        methods: {
          gotoSwap: function () {
            window.open("https://www.wardenswap.finance/", "_self");
          },
          handleBuyWardenBtn: function () {
            var t = "network=bsc&to=0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc";
            window.open("https://www.superdev.info/swap?".concat(t), "_self");
          },
          manageWardenPrice: function (t) {
            var e = this;
            return Object(c["a"])(
              regeneratorRuntime.mark(function a() {
                var r, n, o, s, i;
                return regeneratorRuntime.wrap(
                  function (a) {
                    while (1)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            (r = new m(t, "bsc")),
                            (n = h.utils
                              .parseUnits("100", v.decimals)
                              .toString()),
                            (a.next = 5),
                            r.getQuote(v.address, w.address, n, !1)
                          );
                        case 5:
                          (o = a.sent),
                            (s = h.utils
                              .formatUnits(o.amountOut.toString(), w.decimals)
                              .toString()),
                            (i = new d.a(100).div(s).toFixed(3)),
                            (e.price = i),
                            (a.next = 14);
                          break;
                        case 11:
                          (a.prev = 11),
                            (a.t0 = a["catch"](0)),
                            console.error("error:==>", a.t0);
                        case 14:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 11]]
                );
              })
            )();
          },
        },
      },
      k = y,
      x = (a("f646"), a("2877")),
      _ = a("6544"),
      C = a.n(_),
      S = a("40dc"),
      E = a("5bc1"),
      O = a("62ad"),
      j = a("a523"),
      A = a("8860"),
      B = a("da13"),
      P = a("1baa"),
      W = a("5d23"),
      T = a("f774"),
      V = a("0fd9"),
      z = a("2fa4"),
      D = Object(x["a"])(k, s, i, !1, null, "e1d89e88", null),
      I = D.exports;
    C()(D, {
      VAppBar: S["a"],
      VAppBarNavIcon: E["a"],
      VCol: O["a"],
      VContainer: j["a"],
      VList: A["a"],
      VListItem: B["a"],
      VListItemGroup: P["a"],
      VListItemTitle: W["a"],
      VNavigationDrawer: T["a"],
      VRow: V["a"],
      VSpacer: z["a"],
    });
    var L = function () {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r(
          "v-container",
          {
            staticClass: "",
          },
          [
            r(
              "v-row",
              {
                staticClass: "footer-div",
              },
              [
                r(
                  "v-col",
                  {
                    staticClass: "footer-div-left",
                    attrs: {
                      xs: "12",
                      sm: "6",
                      md: "6",
                      lg: "7",
                      xl: "7",
                    },
                  },
                  [
                    r("br"),
                    r("br"),
                    r("span", [
                      r(
                        "a",
                        {
                          attrs: {
                            href: "#",
                            target: "_blank",
                          },
                        },
                        [t._v("About")]
                      ),
                    ]),
                    r("br"),
                    r("br"),
                    r("span", [
                      r(
                        "a",
                        {
                          attrs: {
                            href: "#",
                            target: "_blank",
                          },
                        },
                        [t._v("Blog")]
                      ),
                    ]),
                    r("br"),
                    r("br"),
                    r("span", [
                      r(
                        "a",
                        {
                          attrs: {
                            href: "#",
                            target: "_blank",
                          },
                        },
                        [t._v("Community")]
                      ),
                    ]),
                    r("br"),
                    r("br"),
                    r("span", [
                      r(
                        "a",
                        {
                          attrs: {
                            href: "#",
                            target: "_blank",
                          },
                        },
                        [t._v("TOYGER token")]
                      ),
                    ]),
                    r("br"),
                    r("br"),
                    r(
                      "div",
                      {
                        staticClass: "chain-support-icons-footer",
                      },
                      [
                        //footers icons
                        r("img", {
                          //twitter
                          attrs: {
                            src: a("fff0"),
                            alt: "icon",
                          },
                        }),
                        r("img", {
                          //telegram
                          attrs: {
                            src: a("fff1"),
                            alt: "icon",
                          },
                        }),
                        r("img", {
                          //reddit
                          attrs: {
                            src: a("fff2"),
                            alt: "icon",
                          },
                        }),
                        r("img", {
                          //instagram
                          attrs: {
                            src: a("fff3"),
                            alt: "icon",
                          },
                        }),
                        r("img", {
                          //github
                          attrs: {
                            src: a("fff4"),
                            alt: "icon",
                          },
                        }),
                      ]
                    ),
                  ],
                  1
                ),
                r(
                  "v-col",
                  {
                    staticClass: "footer-div-right",
                    staticStyle: {
                      "text-align": "right",
                      margin: "auto",
                    },
                    attrs: {
                      xs: "12",
                      sm: "6",
                      md: "6",
                      lg: "5",
                      xl: "5",
                    },
                  },
                  [
                    r(
                      "v-container",
                      [
                        r(
                          "button",
                          {
                            staticClass: "light-btn",
                            on: {
                              click: function (e) {},
                            },
                          },
                          [t._v(" Buy TOY ")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      R = [],
      F = {
        name: "Footer",
        data: function () {
          return {
            darkTheme: !1,
          };
        },
        methods: {
          gotoSwap: function () {
            window.open("https://www.wardenswap.finance/", "_self");
          },
          gotoDoc: function () {
            window.open("http://docs.wardenswap.com/");
          },
        },
      },
      N = F,
      U = (a("f926"), Object(x["a"])(N, L, R, !1, null, "210ba94c", null)),
      H = U.exports;
    C()(U, {
      VCol: O["a"],
      VContainer: j["a"],
      VRow: V["a"],
    });
    var M = {
        name: "Home",
        components: {
          Header: I,
          Footer: H,
        },
        data: function () {
          return {
            darkTheme: !1,
          };
        },
        methods: {},
      },
      $ = M,
      G = (a("5c0b"), Object(x["a"])($, n, o, !1, null, null, null)),
      J = G.exports;
    C()(G, {
      VContainer: j["a"],
    });
    var Q = a("f309");
    r["a"].use(Q["a"]);
    var q = new Q["a"]({}),
      K = (a("3ca3"), a("ddb0"), a("8c4f"));
    r["a"].use(K["a"]);
    var X = [
        {
          path: "/",
          name: "Home",
          component: function () {
            return Promise.all([
              a.e("chunk-bb48d0a6"),
              a.e("chunk-ab17ae0c"),
            ]).then(a.bind(null, "bb51"));
          },
        },
        {
          path: "/branding",
          name: "Branding",
          component: function () {
            return Promise.all([
              a.e("chunk-bb48d0a6"),
              a.e("chunk-41b6f4ed"),
            ]).then(a.bind(null, "affa"));
          },
        },
      ],
      Y = new K["a"]({
        mode: "history",
        base: "/",
        routes: X,
      }),
      Z = Y,
      tt = a("51ae");
    a("a7a3");
    (r["a"].config.productionTip = !1),
      r["a"].component("VLazyImage", tt["a"]),
      new r["a"]({
        vuetify: q,
        router: Z,
        render: function (t) {
          return t(J);
        },
      }).$mount("#app");
  },
  "5c0b": function (t, e, a) {
    "use strict";
    a("9c0c");
  },
  "5e08": function (t, e, a) {
    t.exports = a.p + "img/medium-logo.7dd602b6.svg";
  },
  "685d": function (t, e, a) {
    t.exports = a.p + "img/branding_logo.png";
  },
  "9c0c": function (t, e, a) {},
  "9c6a": function (t, e, a) {
    t.exports = a.p + "img/icon-discord-space.b75e5188.svg";
  },
  cb5b: function (t, e, a) {
    t.exports = a.p + "img/cmc-logo.32e81963.svg";
  },
  d632: function (t, e, a) {
    t.exports = a.p + "img/cgk-logo.43dfbff8.svg";
  },
  e932: function (t, e, a) {
    t.exports = a.p + "img/telegram-logo.ca27035a.svg";
  },
  eb41: function (t, e, a) {
    t.exports = a.p + "img/icon-warden.d5776bf1.png";
  },
  f646: function (t, e, a) {
    "use strict";
    a("032f");
  },
  f926: function (t, e, a) {
    "use strict";
    a("115e");
  },
  ffff: function (t, e, a) {
    t.exports = a.p + "new-images/TOYGER_LANDING_CIRCULAR LOGO.png";
  },
  "83ae": function (t, e, a) {
    t.exports = a.p + "new-images/TOYGER_LANDING_CIRCULAR LOGO.png";
  },
  fff1: function (t, e, a) {
    t.exports = a.p + "new-images/icons8-telegram-app-50.png";
  },

  fff2: function (t, e, a) {
    t.exports = a.p + "new-images/icons8-discord-50.png";
  },
  fff3: function (t, e, a) {
    t.exports = a.p + "new-images/icons8-instagram-50.png";
  },
  fff4: function (t, e, a) {
    t.exports = a.p + "new-images/icons8-github-50.png";
  },
  fff0: function (t, e, a) {
    t.exports = a.p + "new-images/icons8-twitter-50.png";
  },
});
