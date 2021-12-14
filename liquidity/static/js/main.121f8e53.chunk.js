(this["webpackJsonp@wardenswap/interface"] =
  this["webpackJsonp@wardenswap/interface"] || []).push([
  [0],
  {
    1002: function (e, t) {},
    1041: function (e, t) {},
    1054: function (e, t) {},
    1085: function (e, t, n) {},
    1086: function (e, t, n) {},
    1087: function (e, t, n) {},
    1088: function (e, t, n) {},
    1089: function (e, t, n) {},
    1090: function (e, t, n) {},
    1091: function (e, t, n) {},
    1113: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        i = n.n(a),
        r = n(77),
        s = n.n(r),
        o = n(3),
        c = n.n(o),
        u = n(30),
        l = n(13),
        d = n(63),
        p = n(59),
        y = n(482),
        b = n(19),
        m = n(201),
        f = n(46),
        j = n.n(f),
        v = n(16),
        h = "mute",
        x = "theme",
        O = "light",
        g = "space";

      function T() {
        var e = localStorage.getItem(h);
        return !!e && JSON.parse(e);
      }

      function w() {
        var e = !T();
        localStorage.setItem(h, JSON.stringify(e));
      }

      function k() {
        var e = localStorage.getItem(x);
        return e ? JSON.parse(e) : O;
      }

      function C() {
        var e = k();
        (e = e === O ? g : O), localStorage.setItem(x, JSON.stringify(e));
      }
      var I,
        N = n(21),
        E = Object(N.d)({
          name: "toasts",
          initialState: {
            data: [],
          },
          reducers: {
            push: function (e, t) {
              var n = t.payload,
                a = e.data.findIndex(function (e) {
                  return e.id === t.payload.id;
                });
              a >= 0 && e.data.splice(a, 1), e.data.unshift(n);
            },
            remove: function (e, t) {
              var n = e.data.findIndex(function (e) {
                return e.id === t.payload;
              });
              n >= 0 && e.data.splice(n, 1);
            },
            clear: function (e) {
              e.data = [];
            },
          },
        }),
        M = E.actions,
        A = M.clear,
        S = M.remove,
        R = M.push,
        B = E.reducer,
        _ = Object(N.d)({
          name: "Setting",
          initialState: {
            spaceMode: !1,
            muteMode: !1,
          },
          reducers: {
            setSpaceMode: function (e, t) {
              var n = t.payload;
              e.spaceMode = n;
            },
            setMuteMode: function (e, t) {
              var n = t.payload;
              e.muteMode = n;
            },
          },
        }),
        U = _.actions,
        D = U.setSpaceMode,
        P = U.setMuteMode,
        F = _.reducer,
        L =
          (new j.a(0),
          function () {
            var e = Object(b.c)();
            return Object(a.useMemo)(
              function () {
                var t = function (t) {
                  return e(R(t));
                };
                return {
                  toastError: function (e, n) {
                    return t({
                      id: Object(m.kebabCase)(e),
                      type: v.n.DANGER,
                      title: e,
                      description: n,
                    });
                  },
                  toastInfo: function (e, n) {
                    return t({
                      id: Object(m.kebabCase)(e),
                      type: v.n.INFO,
                      title: e,
                      description: n,
                    });
                  },
                  toastSuccess: function (e, n) {
                    return t({
                      id: Object(m.kebabCase)(e),
                      type: v.n.SUCCESS,
                      title: e,
                      description: n,
                    });
                  },
                  toastWarning: function (e, n) {
                    return t({
                      id: Object(m.kebabCase)(e),
                      type: v.n.WARNING,
                      title: e,
                      description: n,
                    });
                  },
                  push: t,
                  remove: function (t) {
                    return e(S(t));
                  },
                  clear: function () {
                    return e(A());
                  },
                };
              },
              [e]
            );
          }),
        Y = function () {
          return Object(b.d)(function (e) {
            return e.setting;
          });
        },
        W = n(10),
        z = n(56),
        q = n(5),
        V = n(162),
        H = n(18),
        Q = n(293),
        J = n(195),
        G = n(196),
        K = n(491),
        X = n(223),
        Z = n(9),
        $ = n(197),
        ee = n(6),
        te = n(11),
        ne = n(12),
        ae = n(199),
        ie = n(110),
        re = n(20),
        se = (function (e) {
          Object(te.a)(n, e);
          var t = Object(ne.a)(n);

          function n(e, a, i) {
            var r;
            return (
              Object(ee.a)(this, n),
              ((r = t.call(this, e)).code = a),
              (r.data = i),
              r
            );
          }
          return n;
        })(Object(ae.a)(Error)),
        oe = function e(t, n, a) {
          var i = this;
          Object(ee.a)(this, e),
            (this.isMetaMask = !1),
            (this.chainId = void 0),
            (this.url = void 0),
            (this.host = void 0),
            (this.path = void 0),
            (this.batchWaitTimeMs = void 0),
            (this.nextId = 1),
            (this.batchTimeoutId = null),
            (this.batch = []),
            (this.clearBatch = Object(u.a)(
              c.a.mark(function e() {
                var t, n, a, r, s, o, u, l, d, p, y, b, m, f;
                return c.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            console.info("Clearing batch", i.batch),
                            (t = i.batch),
                            (i.batch = []),
                            (i.batchTimeoutId = null),
                            (e.prev = 4),
                            (e.next = 7),
                            fetch(i.url, {
                              method: "POST",
                              headers: {
                                "content-type": "application/json",
                                accept: "application/json",
                              },
                              body: JSON.stringify(
                                t.map(function (e) {
                                  return e.request;
                                })
                              ),
                            })
                          );
                        case 7:
                          (n = e.sent), (e.next = 14);
                          break;
                        case 10:
                          return (
                            (e.prev = 10),
                            (e.t0 = e.catch(4)),
                            t.forEach(function (e) {
                              return (0,
                              e.reject)(new Error("Failed to send batch call"));
                            }),
                            e.abrupt("return")
                          );
                        case 14:
                          if (n.ok) {
                            e.next = 17;
                            break;
                          }
                          return (
                            t.forEach(function (e) {
                              return (0,
                              e.reject)(new se("".concat(n.status, ": ").concat(n.statusText), -32e3));
                            }),
                            e.abrupt("return")
                          );
                        case 17:
                          return (e.prev = 17), (e.next = 20), n.json();
                        case 20:
                          (a = e.sent), (e.next = 27);
                          break;
                        case 23:
                          return (
                            (e.prev = 23),
                            (e.t1 = e.catch(17)),
                            t.forEach(function (e) {
                              return (0,
                              e.reject)(new Error("Failed to parse JSON response"));
                            }),
                            e.abrupt("return")
                          );
                        case 27:
                          (r = t.reduce(function (e, t) {
                            return (e[t.request.id] = t), e;
                          }, {})),
                            (s = Object($.a)(a));
                          try {
                            for (s.s(); !(o = s.n()).done; )
                              (u = o.value),
                                (l = r[u.id]),
                                (d = l.resolve),
                                (p = l.reject),
                                (y = l.request.method),
                                d &&
                                  p &&
                                  ("error" in u
                                    ? p(
                                        new se(
                                          null === u ||
                                          void 0 === u ||
                                          null === (b = u.error) ||
                                          void 0 === b
                                            ? void 0
                                            : b.message,
                                          null === u ||
                                          void 0 === u ||
                                          null === (m = u.error) ||
                                          void 0 === m
                                            ? void 0
                                            : m.code,
                                          null === u ||
                                          void 0 === u ||
                                          null === (f = u.error) ||
                                          void 0 === f
                                            ? void 0
                                            : f.data
                                        )
                                      )
                                    : "result" in u
                                    ? d(u.result)
                                    : p(
                                        new se(
                                          "Received unexpected JSON-RPC response to ".concat(
                                            y,
                                            " request."
                                          ),
                                          -32e3,
                                          u
                                        )
                                      ));
                          } catch (c) {
                            s.e(c);
                          } finally {
                            s.f();
                          }
                        case 30:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [
                    [4, 10],
                    [17, 23],
                  ]
                );
              })
            )),
            (this.sendAsync = function (e, t) {
              i.request(e.method, e.params)
                .then(function (n) {
                  return t(null, {
                    jsonrpc: "2.0",
                    id: e.id,
                    result: n,
                  });
                })
                .catch(function (e) {
                  return t(e, null);
                });
            }),
            (this.request = (function () {
              var e = Object(u.a)(
                c.a.mark(function e(t, n) {
                  var a, r;
                  return c.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ("string" === typeof t) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            i.request(t.method, t.params)
                          );
                        case 2:
                          if ("eth_chainId" !== t) {
                            e.next = 4;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            "0x".concat(i.chainId.toString(16))
                          );
                        case 4:
                          return (
                            (r = new Promise(function (e, a) {
                              i.batch.push({
                                request: {
                                  jsonrpc: "2.0",
                                  id: i.nextId++,
                                  method: t,
                                  params: n,
                                },
                                resolve: e,
                                reject: a,
                              });
                            })),
                            (i.batchTimeoutId =
                              null !== (a = i.batchTimeoutId) && void 0 !== a
                                ? a
                                : setTimeout(i.clearBatch, i.batchWaitTimeMs)),
                            e.abrupt("return", r)
                          );
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })()),
            (this.chainId = t),
            (this.url = n);
          var r = new URL(n);
          (this.host = r.host),
            (this.path = r.pathname),
            (this.batchWaitTimeMs = null !== a && void 0 !== a ? a : 50);
        },
        ce = (function (e) {
          Object(te.a)(n, e);
          var t = Object(ne.a)(n);

          function n(e) {
            var a,
              i = e.urls,
              r = e.defaultChainId;
            return (
              Object(ee.a)(this, n),
              Object(re.a)(
                r || 1 === Object.keys(i).length,
                "defaultChainId is a required argument with >1 url"
              ),
              ((a = t.call(this, {
                supportedChainIds: Object.keys(i).map(function (e) {
                  return Number(e);
                }),
              })).providers = void 0),
              (a.currentChainId = void 0),
              (a.currentChainId = r || Number(Object.keys(i)[0])),
              (a.providers = Object.keys(i).reduce(function (e, t) {
                return (e[Number(t)] = new oe(Number(t), i[Number(t)])), e;
              }, {})),
              a
            );
          }
          return (
            Object(Z.a)(n, [
              {
                key: "provider",
                get: function () {
                  return this.providers[this.currentChainId];
                },
              },
              {
                key: "activate",
                value: (function () {
                  var e = Object(u.a)(
                    c.a.mark(function e() {
                      return c.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt("return", {
                                  provider: this.providers[this.currentChainId],
                                  chainId: this.currentChainId,
                                  account: null,
                                });
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getProvider",
                value: (function () {
                  var e = Object(u.a)(
                    c.a.mark(function e() {
                      return c.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt(
                                  "return",
                                  this.providers[this.currentChainId]
                                );
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getChainId",
                value: (function () {
                  var e = Object(u.a)(
                    c.a.mark(function e() {
                      return c.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt("return", this.currentChainId);
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getAccount",
                value: (function () {
                  var e = Object(u.a)(
                    c.a.mark(function e() {
                      return c.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt("return", null);
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "deactivate",
                value: function () {
                  return null;
                },
              },
            ]),
            n
          );
        })(ie.AbstractConnector),
        ue = "https://bsc-dataseed1.defibit.io",
        le = parseInt(("56", "56"));
      var de,
        pe = new ce({
          urls: Object(H.a)({}, le, ue),
        });
      var ye,
        be,
        me = new J.a({
          supportedChainIds: [56, 97],
        }),
        fe = new X.BscConnector({
          supportedChainIds: [56],
        }),
        je = new G.b({
          rpc: Object(H.a)({}, le, ue),
          bridge: "https://bridge.walletconnect.org",
          qrcode: !0,
          pollingInterval: 15e3,
        }),
        ve =
          (new K.a({
            url: ue,
            appName: "Uniswap",
            appLogoUrl:
              "https://mpng.pngfly.com/20181202/bex/kisspng-emoji-domain-unicorn-pin-badges-sticker-unicorn-tumblr-emoji-unicorn-iphoneemoji-5c046729264a77.5671679315437924251569.jpg",
          }),
          (I = {}),
          Object(H.a)(I, v.d.Injected, me),
          Object(H.a)(I, v.d.WalletConnect, je),
          Object(H.a)(I, v.d.BSC, fe),
          I),
        he = function () {
          var e = Object(z.d)(),
            t = e.activate,
            n = e.deactivate,
            i = L().toastError;
          return {
            login: Object(a.useCallback)(function (e) {
              var n = ve[e];
              n
                ? t(
                    n,
                    (function () {
                      var e = Object(u.a)(
                        c.a.mark(function e(t) {
                          return c.a.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  window.localStorage.removeItem(
                                    "walletconnect"
                                  ),
                                    t instanceof z.a
                                      ? (i(
                                          "Unsupported Chain Id",
                                          "Unsupported Chain Id Error. Check your chain Id."
                                        ),
                                        window.localStorage.removeItem(v.k))
                                      : t instanceof J.b ||
                                        t instanceof X.NoBscProviderError
                                      ? (i(
                                          "Provider Error",
                                          "No provider was found"
                                        ),
                                        window.localStorage.removeItem(v.k))
                                      : t instanceof J.c || t instanceof G.a
                                      ? (n instanceof G.b &&
                                          (n.walletConnectProvider = null),
                                        i(
                                          "Authorization Error",
                                          "Please authorize to access your account"
                                        ))
                                      : (i(t.name, t.message),
                                        window.localStorage.removeItem(v.k));
                                case 2:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()
                  )
                : i("Can't find connector", "The connector config is wrong");
            }, []),
            logout: Object(a.useCallback)(
              function () {
                n(), window.localStorage.removeItem("walletconnect");
              },
              [n]
            ),
          };
        },
        xe = n(39),
        Oe = n(15),
        ge = n(7),
        Te = "0x71ac17934b60A4610dc58b715B61e45DCBdE4054",
        we = new ge.i(
          ge.a.MAINNET,
          "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
          18,
          "DAI",
          "Dai Stablecoin"
        ),
        ke = new ge.i(
          ge.a.MAINNET,
          "0xe9e7cea3dedca5984780bafc599bd69add087d56",
          18,
          "BUSD",
          "Binance USD"
        ),
        Ce = new ge.i(
          ge.a.MAINNET,
          "0x55d398326f99059ff775485246999027b3197955",
          18,
          "USDT",
          "Tether USD"
        ),
        Ie = new ge.i(
          ge.a.MAINNET,
          "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
          18,
          "BTCB",
          "Binance-Peg BTCB Token"
        ),
        Ne = new ge.i(
          ge.a.MAINNET,
          "0x23396cf899ca06c4472205fc903bdb4de249d6fc",
          18,
          "UST",
          "Wrapped UST Token"
        ),
        Ee = new ge.i(
          ge.a.MAINNET,
          "0x0feadcc3824e7f3c12f40e324a60c23ca51627fc",
          18,
          "WARDEN",
          "WardenSwap Token"
        ),
        Me = new ge.i(
          ge.a.MAINNET,
          "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
          18,
          "ETH",
          "Binance-Peg Ethereum Token"
        ),
        Ae = new ge.i(
          ge.a.MAINNET,
          "0xa1faa113cbe53436df28ff0aee54275c13b40975",
          18,
          "ALPHA",
          "AlphaToken"
        ),
        Se = new ge.i(
          ge.a.MAINNET,
          "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
          18,
          "WBNB",
          "Wrapped BNB"
        ),
        Re = new ge.i(
          ge.a.MAINNET,
          "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd",
          18,
          "LINK",
          "Chainlink Token"
        ),
        Be =
          ((ye = {}),
          Object(H.a)(ye, ge.a.MAINNET, [ge.l[ge.a.MAINNET]]),
          Object(H.a)(ye, ge.a.BSCTESTNET, [ge.l[ge.a.BSCTESTNET]]),
          ye),
        _e =
          (Object(Oe.a)(
            Object(Oe.a)({}, Be),
            {},
            Object(H.a)(
              {},
              ge.a.MAINNET,
              [].concat(Object(xe.a)(Be[ge.a.MAINNET]), [we, ke, Ce, Ne, Me])
            )
          ),
          Object(H.a)({}, ge.a.MAINNET, {}),
          Object(Oe.a)(
            Object(Oe.a)({}, Be),
            {},
            Object(H.a)(
              {},
              ge.a.MAINNET,
              [].concat(Object(xe.a)(Be[ge.a.MAINNET]), [we, ke, Ce])
            )
          )),
        Ue = Object(Oe.a)(
          Object(Oe.a)({}, Be),
          {},
          Object(H.a)(
            {},
            ge.a.MAINNET,
            [].concat(Object(xe.a)(Be[ge.a.MAINNET]), [
              we,
              ke,
              Ce,
              Ee,
              Ie,
              Me,
              Se,
              Ae,
              Re,
            ])
          )
        ),
        De =
          ((be = {}),
          Object(H.a)(be, ge.a.MAINNET, [
            [Ee, Se],
            [ke, Ce],
            [we, Ce],
            [Me, Ie],
          ]),
          Object(H.a)(be, ge.a.BSCTESTNET, [
            [
              new ge.i(
                ge.a.BSCTESTNET,
                "0x2DbC5dFCe92737D8c333296F9F29a166a1aED742",
                18,
                "BUSD",
                "BUSD Token"
              ),
              new ge.i(
                ge.a.BSCTESTNET,
                "0xf19802DE4a3B7bF2f9910661f21389825D159abc",
                18,
                "USDT",
                "USDT Token"
              ),
            ],
          ]),
          be),
        Pe = "NETWORK",
        Fe = (new ge.g(ge.e.BigInt(1), ge.e.BigInt(1e4)), ge.e.BigInt(1e4)),
        Le =
          (new ge.g(ge.e.BigInt(100), Fe),
          new ge.g(ge.e.BigInt(300), Fe),
          new ge.g(ge.e.BigInt(500), Fe),
          new ge.g(ge.e.BigInt(1e3), Fe),
          new ge.g(ge.e.BigInt(1500), Fe),
          ge.e.exponentiate(ge.e.BigInt(10), ge.e.BigInt(16)));

      function Ye() {
        var e = Object(z.d)(),
          t = Object(z.d)(Pe);
        return e.active ? e : t;
      }
      var We,
        ze,
        qe,
        Ve,
        He = n(85),
        Qe = n(1),
        Je = Object(q.keyframes)(
          We ||
            (We = Object(W.a)([
              "\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n",
            ]))
        ),
        Ge = q.default.svg(
          ze ||
            (ze = Object(W.a)([
              "\n\tanimation: 2s ",
              " linear infinite;\n\theight: ",
              ";\n\twidth: ",
              ";\n\tpath {\n\t\tstroke: ",
              ";\n\t}\n",
            ])),
          Je,
          function (e) {
            return e.size;
          },
          function (e) {
            return e.size;
          },
          function (e) {
            var t = e.stroke;
            e.theme;
            return null !== t && void 0 !== t ? t : "var(--color-primary)";
          }
        );

      function Ke(e) {
        var t = e.size,
          n = void 0 === t ? "16px" : t,
          a = e.stroke,
          i = Object(He.a)(e, ["size", "stroke"]);
        return Object(Qe.jsx)(
          Ge,
          Object(Oe.a)(
            Object(Oe.a)(
              {
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                size: n,
                stroke: a,
              },
              i
            ),
            {},
            {
              children: Object(Qe.jsx)("path", {
                d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",
                strokeWidth: "2.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            }
          )
        );
      }
      var Xe = q.default.div(
          qe ||
            (qe = Object(W.a)([
              "\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\theight: 20rem;\n",
            ]))
        ),
        Ze = q.default.h2(
          Ve || (Ve = Object(W.a)(["\n\tcolor: ", ";\n"])),
          function (e) {
            return e.theme.colors.primaryDark;
          }
        );

      function $e(e) {
        var t = e.children,
          n = Object(V.b)().t,
          i = Object(z.d)().active,
          r = Object(z.d)(Pe),
          s = r.active,
          o = r.error,
          c = r.activate,
          u = (function () {
            var e = he().login,
              t = Object(z.d)(),
              n = (t.activate, t.active),
              i = Object(a.useState)(!1),
              r = Object(l.a)(i, 2),
              s = r[0],
              o = r[1];
            return (
              Object(a.useEffect)(
                function () {
                  me.isAuthorized().then(function (t) {
                    var n = window.localStorage.getItem(v.k);
                    n && n !== v.d.BSC
                      ? e(n)
                      : "undefined" !== typeof window.ethereum &&
                        window.innerWidth <= 768 &&
                        (e(v.d.Injected),
                        window.localStorage.setItem(
                          "connectorId",
                          v.d.Injected
                        )),
                      o(!0);
                  });
                },
                [e]
              ),
              Object(a.useEffect)(
                function () {
                  n && o(!0);
                },
                [n]
              ),
              s
            );
          })();
        Object(a.useEffect)(
          function () {
            !u || s || o || i || c(pe);
          },
          [u, s, o, c, i]
        ),
          (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = Object(z.d)(),
              n = t.active,
              i = t.error,
              r = t.activate;
            Object(a.useEffect)(
              function () {
                var t = window.ethereum;
                if (t && t.on && !n && !i && !e) {
                  var a = function () {
                      r(me, void 0, !0).catch(function (e) {
                        console.error(
                          "Failed to activate after chain changed",
                          e
                        );
                      });
                    },
                    s = function (e) {
                      e.length > 0 &&
                        r(me, void 0, !0).catch(function (e) {
                          console.error(
                            "Failed to activate after accounts changed",
                            e
                          );
                        });
                    };
                  return (
                    t.on("chainChanged", a),
                    t.on("accountsChanged", s),
                    function () {
                      t.removeListener &&
                        (t.removeListener("chainChanged", a),
                        t.removeListener("accountsChanged", s));
                    }
                  );
                }
              },
              [n, i, e, r]
            );
          })(!u);
        var d = Object(a.useState)(!1),
          p = Object(l.a)(d, 2),
          y = p[0],
          b = p[1];
        return (
          Object(a.useEffect)(function () {
            var e = setTimeout(function () {
              b(!0);
            }, 600);
            return function () {
              clearTimeout(e);
            };
          }, []),
          u
            ? !i && o
              ? Object(Qe.jsx)(Xe, {
                  children: Object(Qe.jsx)(Ze, {
                    children: n("unknownError"),
                  }),
                })
              : i || s
              ? t
              : y
              ? Object(Qe.jsx)(Xe, {
                  children: Object(Qe.jsx)(Ke, {}),
                })
              : null
            : null
        );
      }
      var et,
        tt,
        nt,
        at,
        it,
        rt,
        st,
        ot,
        ct,
        ut,
        lt,
        dt = function () {
          var e = Object(b.d)(function (e) {
              return e.toasts.data;
            }),
            t = L().remove;
          return Object(Qe.jsx)(v.j, {
            toasts: e,
            onRemove: function (e) {
              return t(e);
            },
          });
        },
        pt = n(29),
        yt = q.default.div(
          et ||
            (et = Object(W.a)([
              "\n\twidth: 100%;\n\tpadding: 1.25rem;\n\tpadding: ",
              ";\n\tborder: ",
              ";\n",
            ])),
          function (e) {
            return e.padding;
          },
          function (e) {
            return e.border;
          }
        ),
        bt = yt,
        mt = Object(q.default)(yt)(
          tt ||
            (tt = Object(W.a)([
              "\n\tborder: 1px solid var(--color-background);\n\tbackground-color: var(--color-background);\n\ttext-align: center;\n",
            ]))
        ),
        ft =
          (Object(q.default)(yt)(
            nt || (nt = Object(W.a)(["\n\tbackground-color: ", ";\n"])),
            function (e) {
              return e.theme.colors.tertiary;
            }
          ),
          q.default.div(
            at ||
              (at = Object(W.a)([
                "\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n",
              ]))
          )),
        jt = Object(q.default)(ft)(
          it ||
            (it = Object(W.a)(["\n\twidth: 100%;\n\talign-items: center;\n"]))
        ),
        vt = q.default.div(
          rt ||
            (rt = Object(W.a)([
              "\n\tdisplay: grid;\n\tgrid-auto-rows: auto;\n\tgrid-row-gap: ",
              ";\n\tjustify-items: ",
              ";\n",
            ])),
          function (e) {
            var t = e.gap;
            return (
              ("sm" === t ? "8px" : "md" === t && "12px") ||
              ("lg" === t && "24px") ||
              t
            );
          },
          function (e) {
            var t = e.justify;
            return t && t;
          }
        ),
        ht = ft,
        xt = n(102),
        Ot = q.default.button(
          st ||
            (st = Object(W.a)([
              "\n\tborder: none;\n\ttext-decoration: none;\n\tbackground: none;\n\n\tcursor: ",
              ";\n\tcolor: ",
              ";\n\tfont-weight: 500;\n\n\t:hover {\n\t\ttext-decoration: ",
              ";\n\t}\n\n\t:focus {\n\t\toutline: none;\n\t\ttext-decoration: ",
              ";\n\t}\n\n\t:active {\n\t\ttext-decoration: none;\n\t}\n",
            ])),
          function (e) {
            return e.disabled ? "default" : "pointer";
          },
          function (e) {
            var t = e.theme;
            return e.disabled ? t.colors.textSubtle : t.colors.primary;
          },
          function (e) {
            return e.disabled ? null : "underline";
          },
          function (e) {
            return e.disabled ? null : "underline";
          }
        ),
        gt =
          (Object(q.default)(d.b)(
            ot ||
              (ot = Object(W.a)([
                "\n\ttext-decoration: none;\n\tcursor: pointer;\n\tcolor: ",
                ";\n\tfont-weight: 500;\n\n\t:hover {\n\t\ttext-decoration: underline;\n\t}\n\n\t:focus {\n\t\toutline: none;\n\t\ttext-decoration: underline;\n\t}\n\n\t:active {\n\t\ttext-decoration: none;\n\t}\n",
              ])),
            function (e) {
              return e.theme.colors.primary;
            }
          ),
          q.default.a(
            ct ||
              (ct = Object(W.a)([
                "\n\ttext-decoration: none;\n\tcursor: pointer;\n\tcolor: ",
                ";\n\tfont-weight: 500;\n\n\t:hover {\n\t\ttext-decoration: underline;\n\t}\n\n\t:focus {\n\t\toutline: none;\n\t\ttext-decoration: underline;\n\t}\n\n\t:active {\n\t\ttext-decoration: none;\n\t}\n",
              ])),
            function (e) {
              return e.theme.colors.primary;
            }
          ));

      function Tt(e) {
        var t = e.target,
          n = void 0 === t ? "_blank" : t,
          i = e.href,
          r = e.rel,
          s = void 0 === r ? "noopener noreferrer" : r,
          o = Object(He.a)(e, ["target", "href", "rel"]),
          c = Object(a.useCallback)(
            function (e) {
              "_blank" === n || e.ctrlKey || e.metaKey || e.preventDefault();
            },
            [n]
          );
        return Object(Qe.jsx)(
          gt,
          Object(Oe.a)(
            {
              target: n,
              rel: s,
              href: i,
              onClick: c,
            },
            o
          )
        );
      }
      var wt,
        kt,
        Ct,
        It,
        Nt,
        Et,
        Mt = Object(q.keyframes)(
          ut ||
            (ut = Object(W.a)([
              "\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n",
            ]))
        ),
        At = q.default.img(
          lt ||
            (lt = Object(W.a)([
              "\n\tanimation: 2s ",
              " linear infinite;\n\twidth: 16px;\n\theight: 16px;\n",
            ])),
          Mt
        ),
        St = q.default.div(
          wt || (wt = Object(W.a)(["\n\twidth: 100%;\n\toverflow-y: auto;\n"]))
        ),
        Rt = Object(q.default)(vt)(
          kt || (kt = Object(W.a)(["\n\tpadding: 10px 0;\n"]))
        ),
        Bt = Object(q.default)(jt)(
          Ct || (Ct = Object(W.a)(["\n\tpadding: 0;\n"]))
        ),
        _t = Object(q.default)(Rt)(
          It ||
            (It = Object(W.a)([
              "\n\tbackground-color: var(--color-background);\n\tborder-bottom-left-radius: 20px;\n\tborder-bottom-right-radius: 20px;\n",
            ]))
        ),
        Ut =
          (q.default.div(
            Nt ||
              (Nt = Object(W.a)([
                "\n\talign-items: center;\n\tdisplay: flex;\n\n\t& > ",
                " {\n\t\tflex: 1;\n\t\tcolor: #202251;\n\t}\n",
              ])),
            v.f
          ),
          Object(q.default)(At)(
            Et || (Et = Object(W.a)(["\n\theight: ", ";\n\twidth: ", ";\n"])),
            function (e) {
              return e.size;
            },
            function (e) {
              return e.size;
            }
          ),
          function (e) {
            e.onDismiss;
            var t = e.pendingText,
              n = Y().spaceMode;
            return Object(Qe.jsx)(St, {
              children: Object(Qe.jsxs)(Rt, {
                children: [
                  Object(Qe.jsx)(Bt, {
                    children: Object(Qe.jsx)("img", {
                      src: "/images/farms/loading".concat(
                        n ? "-space" : "",
                        ".svg"
                      ),
                      alt: "loader",
                    }),
                  }),
                  Object(Qe.jsxs)(vt, {
                    gap: "12px",
                    justify: "center",
                    children: [
                      Object(Qe.jsx)(vt, {
                        justify: "center",
                        children: Object(Qe.jsx)("p", {
                          style: {
                            fontSize: "20px",
                            fontWeight: "bold",
                            color: "var(--color-text-2)",
                            textAlign: "center",
                          },
                          children: t,
                        }),
                      }),
                      Object(Qe.jsx)("p", {
                        style: {
                          fontSize: "18px",
                          fontWeight: "bold",
                          color: "var(--color-text-2)",
                          textAlign: "center",
                        },
                        children: "Confirm this transaction in your wallet",
                      }),
                    ],
                  }),
                ],
              }),
            });
          }),
        Dt = n(126),
        Pt = n(37),
        Ft = n(1121),
        Lt = n(495);

      function Yt(e) {
        try {
          return Object(Pt.getAddress)(e);
        } catch (t) {
          return !1;
        }
      }
      var Wt,
        zt = {
          56: "",
          97: "testnet.",
        };

      function qt(e, t, n) {
        var a = "https://".concat(zt[e] || zt[ge.a.MAINNET], "bscscan.com");
        switch (n) {
          case "transaction":
            return "".concat(a, "/tx/").concat(t);
          case "token":
            return "".concat(a, "/token/").concat(t);
          case "address":
          default:
            return "".concat(a, "/address/").concat(t);
        }
      }

      function Vt(e) {
        return e.mul(pt.a.from(1e4).add(pt.a.from(1e3))).div(pt.a.from(1e4));
      }

      function Ht(e, t) {
        if (t < 0 || t > 1e4)
          throw Error("Unexpected slippage value: ".concat(t));
        return [
          ge.e.divide(
            ge.e.multiply(e.raw, ge.e.BigInt(1e4 - t)),
            ge.e.BigInt(1e4)
          ),
          ge.e.divide(
            ge.e.multiply(e.raw, ge.e.BigInt(1e4 + t)),
            ge.e.BigInt(1e4)
          ),
        ];
      }

      function Qt(e, t, n, a) {
        if (!Yt(e) || e === Ft.a)
          throw Error("Invalid 'address' parameter '".concat(e, "'."));
        return new Dt.a(
          e,
          t,
          (function (e, t) {
            return t
              ? (function (e, t) {
                  return e.getSigner(t).connectUnchecked();
                })(e, t)
              : e;
          })(n, a)
        );
      }

      function Jt(e, t, n) {
        return Qt(Te, Lt.a, t, n);
      }
      var Gt,
        Kt = q.default.div(
          Wt ||
            (Wt = Object(W.a)([
              "\n\tcolor: #202251;\n\tfont-size: 18px;\n\tfont-weight: 500;\n\tdisplay: flex;\n\talign-items: center;\n",
            ]))
        ),
        Xt = function (e) {
          e.onDismiss;
          var t = e.chainId,
            n = e.hash,
            i = (Object(a.useContext)(q.ThemeContext), Y().spaceMode);
          return Object(Qe.jsx)(St, {
            children: Object(Qe.jsxs)(Rt, {
              children: [
                Object(Qe.jsx)(Bt, {
                  children: Object(Qe.jsx)("img", {
                    src: "/images/swap-status-success.svg",
                    width: "400px",
                    height: "auto",
                    alt: "link",
                    style: {
                      margin: "20px 0",
                    },
                  }),
                }),
                Object(Qe.jsx)(vt, {
                  gap: "8px",
                  justify: "center",
                  children:
                    t &&
                    n &&
                    Object(Qe.jsx)(Kt, {
                      children: Object(Qe.jsxs)("a", {
                        target: "_blank",
                        rel: "noreferrer",
                        href: qt(t, n, "transaction"),
                        style: {
                          color: "var(--color-text-2)",
                          display: "flex",
                        },
                        children: [
                          "View on BscScan",
                          Object(Qe.jsx)("img", {
                            src: "/images/farms/external-link".concat(
                              i ? "-space" : "",
                              ".svg"
                            ),
                            width: "23px",
                            height: "23px",
                            alt: "link",
                            style: {
                              marginLeft: "5px",
                            },
                          }),
                        ],
                      }),
                    }),
                }),
              ],
            }),
          });
        },
        Zt = function (e) {
          var t = e.isOpen,
            n = e.onDismiss,
            a = e.attemptingTxn,
            i = e.hash,
            r = e.pendingText,
            s = e.content,
            o = e.title,
            c = !Object(v.o)().isXl,
            u = Ye().chainId;
          return u
            ? Object(Qe.jsx)(xt.Dialog, {
                visible: t,
                onHide: n,
                header: a
                  ? "Waiting for confirm in your wallet"
                  : i
                  ? "Transaction submitted"
                  : o,
                className: "transfer-modal-desktop ".concat(
                  c ? "transfer-modal-mobile" : ""
                ),
                position: c ? "bottom" : "center",
                children: a
                  ? Object(Qe.jsx)(Ut, {
                      onDismiss: n,
                      pendingText: r,
                    })
                  : i
                  ? Object(Qe.jsx)(Xt, {
                      chainId: u,
                      hash: i,
                      onDismiss: n,
                    })
                  : s(),
              })
            : null;
        },
        $t = function (e) {
          e.title;
          var t = e.bottomContent,
            n = (e.onDismiss, e.topContent);
          return Object(Qe.jsxs)(St, {
            children: [
              Object(Qe.jsx)(Rt, {
                children: n(),
              }),
              Object(Qe.jsx)(_t, {
                gap: "12px",
                children: t(),
              }),
            ],
          });
        },
        en = (n(1138), Zt),
        tn = n(104),
        nn = {
          translations: [],
          setTranslations: function () {},
        },
        an = Object(a.createContext)(nn),
        rn = /%(.*?)%/,
        sn = function (e, t, n) {
          var a = e.find(function (e) {
            return e.data.stringId === t;
          });
          if (a) {
            var i = a.data.text;
            return i.includes("%")
              ? (function (e, t) {
                  var n = rn.exec(e)[0],
                    a = e.split(" ").indexOf(n),
                    i = t.split(" ")[a];
                  return e.replace(n, i);
                })(i, n)
              : i;
          }
          return n;
        },
        on = function (e, t) {
          var n = Object(a.useContext)(an).translations;
          return "error" === n[0] ? t : n.length > 0 ? sn(n, e, t) : null;
        },
        cn = function () {
          var e = Object(a.useContext)(an).translations;
          return Object(a.useCallback)(
            function (t, n) {
              return "error" === e[0] ? n : e.length > 0 ? sn(e, t, n) : n;
            },
            [e]
          );
        },
        un = n(173),
        ln = n(191),
        dn = n(370),
        pn = new un.b(ln),
        yn = n(249),
        bn = (function (e) {
          Object(te.a)(n, e);
          var t = Object(ne.a)(n);

          function n(e, a) {
            var i;
            return (
              Object(ee.a)(this, n),
              ((i = t.call(
                this,
                e.chainId,
                e.address,
                e.decimals,
                e.symbol,
                e.name
              )).tokenInfo = void 0),
              (i.tags = void 0),
              (i.tokenInfo = e),
              (i.tags = a),
              i
            );
          }
          return (
            Object(Z.a)(n, [
              {
                key: "logoURI",
                get: function () {
                  return this.tokenInfo.logoURI;
                },
              },
            ]),
            n
          );
        })(ge.i),
        mn =
          ((Gt = {}),
          Object(H.a)(Gt, ge.a.MAINNET, {}),
          Object(H.a)(Gt, ge.a.BSCTESTNET, {}),
          Gt),
        fn = "undefined" !== typeof WeakMap ? new WeakMap() : null;

      function jn(e) {
        var t = Object(b.d)(function (e) {
          return e.lists.byUrl;
        });
        return Object(a.useMemo)(
          function () {
            var n;
            if (!e) return mn;
            var a = null === (n = t[e]) || void 0 === n ? void 0 : n.current;
            if (!a) return mn;
            try {
              return (function (e) {
                var t = null === fn || void 0 === fn ? void 0 : fn.get(e);
                if (t) return t;
                var n = e.tokens.reduce(function (t, n) {
                  var a,
                    i,
                    r,
                    s =
                      null !==
                        (a =
                          null === (i = n.tags) ||
                          void 0 === i ||
                          null ===
                            (r = i.map(function (t) {
                              var n;
                              if (
                                null === (n = e.tags) || void 0 === n
                                  ? void 0
                                  : n[t]
                              )
                                return Object(Oe.a)(
                                  Object(Oe.a)({}, e.tags[t]),
                                  {},
                                  {
                                    id: t,
                                  }
                                );
                            })) ||
                          void 0 === r
                            ? void 0
                            : r.filter(function (e) {
                                return Boolean(e);
                              })) && void 0 !== a
                        ? a
                        : [],
                    o = new bn(n, s);
                  if (void 0 !== t[o.chainId][o.address])
                    throw Error("Duplicate tokens.");
                  return Object(Oe.a)(
                    Object(Oe.a)({}, t),
                    {},
                    Object(H.a)(
                      {},
                      o.chainId,
                      Object(Oe.a)(
                        Object(Oe.a)({}, t[o.chainId]),
                        {},
                        Object(H.a)({}, o.address, o)
                      )
                    )
                  );
                }, Object(Oe.a)({}, mn));
                return null === fn || void 0 === fn || fn.set(e, n), n;
              })(a);
            } catch (i) {
              return (
                console.error("Could not show token list due to error", i), mn
              );
            }
          },
          [t, e]
        );
      }

      function vn() {
        return Object(b.d)(function (e) {
          return e.lists.selectedListUrl;
        });
      }

      function hn() {
        return jn(vn());
      }
      var xn = Object(N.b)("app/updateBlockNumber"),
        On = Object(N.b)("app/toggleWalletModal"),
        gn = Object(N.b)("app/toggleSettingsMenu"),
        Tn = Object(N.b)("app/addPopup"),
        wn = Object(N.b)("app/removePopup");

      function kn() {
        var e = Ye().chainId;
        return Object(b.d)(function (t) {
          return t.application.blockNumber[null !== e && void 0 !== e ? e : -1];
        });
      }
      var Cn = /^0x[a-fA-F0-9]{40}$/,
        In = /^0x[a-f0-9]*$/;

      function Nn(e) {
        if (!Cn.test(e.address))
          throw new Error("Invalid address: ".concat(e.address));
        if (!In.test(e.callData))
          throw new Error("Invalid hex: ".concat(e.callData));
        return "".concat(e.address, "-").concat(e.callData);
      }

      function En(e) {
        var t = e.split("-");
        if (2 !== t.length) throw new Error("Invalid call key: ".concat(e));
        return {
          address: t[0],
          callData: t[1],
        };
      }
      var Mn = Object(N.b)("multicall/addMulticallListeners"),
        An = Object(N.b)("multicall/removeMulticallListeners"),
        Sn = Object(N.b)("multicall/fetchingMulticallResults"),
        Rn = Object(N.b)("multicall/errorFetchingMulticallResults"),
        Bn = Object(N.b)("multicall/updateMulticallResults");

      function _n(e) {
        return -1 !== ["string", "number"].indexOf(typeof e);
      }

      function Un(e) {
        return (
          void 0 === e ||
          (Array.isArray(e) &&
            e.every(function (e) {
              return _n(e) || (Array.isArray(e) && e.every(_n));
            }))
        );
      }
      var Dn = {
          valid: !1,
          blockNumber: void 0,
          data: void 0,
        },
        Pn = {
          blocksPerFetch: 1 / 0,
        };

      function Fn(e, t) {
        var n = Ye().chainId,
          i = Object(b.d)(function (e) {
            return e.multicall.callResults;
          }),
          r = Object(b.c)(),
          s = Object(a.useMemo)(
            function () {
              var t, n, a;
              return JSON.stringify(
                null !==
                  (t =
                    null === e ||
                    void 0 === e ||
                    null ===
                      (n = e.filter(function (e) {
                        return Boolean(e);
                      })) ||
                    void 0 === n ||
                    null === (a = n.map(Nn)) ||
                    void 0 === a
                      ? void 0
                      : a.sort()) && void 0 !== t
                  ? t
                  : []
              );
            },
            [e]
          );
        return (
          Object(a.useEffect)(
            function () {
              var e = JSON.parse(s);
              if (n && 0 !== e.length) {
                var a = e.map(function (e) {
                  return En(e);
                });
                return (
                  r(
                    Mn({
                      chainId: n,
                      calls: a,
                      options: t,
                    })
                  ),
                  function () {
                    r(
                      An({
                        chainId: n,
                        calls: a,
                        options: t,
                      })
                    );
                  }
                );
              }
            },
            [n, r, t, s]
          ),
          Object(a.useMemo)(
            function () {
              return e.map(function (e) {
                var t;
                if (!n || !e) return Dn;
                var a = null === (t = i[n]) || void 0 === t ? void 0 : t[Nn(e)];
                return {
                  valid: !0,
                  data:
                    (null === a || void 0 === a ? void 0 : a.data) &&
                    "0x" !== (null === a || void 0 === a ? void 0 : a.data)
                      ? a.data
                      : null,
                  blockNumber:
                    null === a || void 0 === a ? void 0 : a.blockNumber,
                };
              });
            },
            [i, e, n]
          )
        );
      }
      var Ln = {
          valid: !1,
          result: void 0,
          loading: !1,
          syncing: !1,
          error: !1,
        },
        Yn = {
          valid: !0,
          result: void 0,
          loading: !0,
          syncing: !0,
          error: !1,
        };

      function Wn(e, t, n, a) {
        if (!e) return Ln;
        var i = e.valid,
          r = e.data,
          s = e.blockNumber;
        if (!i) return Ln;
        if (i && !s) return Yn;
        if (!t || !n || !a) return Yn;
        var o,
          c = r && r.length > 2,
          u = (null !== s && void 0 !== s ? s : 0) < a;
        if (c && r)
          try {
            o = t.decodeFunctionResult(n, r);
          } catch (l) {
            return (
              console.error("Result data parsing failed", n, r),
              {
                valid: !0,
                loading: !1,
                error: !0,
                syncing: u,
                result: o,
              }
            );
          }
        return {
          valid: !0,
          loading: !1,
          syncing: u,
          result: o,
          error: !c,
        };
      }

      function zn(e, t, n, i, r) {
        var s = Object(a.useMemo)(
            function () {
              return t.getFunction(n);
            },
            [t, n]
          ),
          o = Object(a.useMemo)(
            function () {
              return s && Un(i) ? t.encodeFunctionData(s, i) : void 0;
            },
            [i, t, s]
          ),
          c = Fn(
            Object(a.useMemo)(
              function () {
                return s && e && e.length > 0 && o
                  ? e.map(function (e) {
                      return e && o
                        ? {
                            address: e,
                            callData: o,
                          }
                        : void 0;
                    })
                  : [];
              },
              [e, o, s]
            ),
            r
          ),
          u = kn();
        return Object(a.useMemo)(
          function () {
            return c.map(function (e) {
              return Wn(e, t, s, u);
            });
          },
          [s, c, t, u]
        );
      }

      function qn(e, t, n, i) {
        var r = Object(a.useMemo)(
            function () {
              var n;
              return null === e ||
                void 0 === e ||
                null === (n = e.interface) ||
                void 0 === n
                ? void 0
                : n.getFunction(t);
            },
            [e, t]
          ),
          s = Fn(
            Object(a.useMemo)(
              function () {
                return e && r && Un(n)
                  ? [
                      {
                        address: e.address,
                        callData: e.interface.encodeFunctionData(r, n),
                      },
                    ]
                  : [];
              },
              [e, r, n]
            ),
            i
          )[0],
          o = kn();
        return Object(a.useMemo)(
          function () {
            return Wn(
              s,
              null === e || void 0 === e ? void 0 : e.interface,
              r,
              o
            );
          },
          [s, e, r, o]
        );
      }
      var Vn = n(230),
        Hn = n.n(Vn),
        Qn = Object(N.b)("user/updateMatchesDarkMode"),
        Jn = Object(N.b)("user/updateUserDarkMode"),
        Gn = Object(N.b)("user/updateUserExpertMode"),
        Kn = Object(N.b)("user/updateUserSlippageTolerance"),
        Xn = Object(N.b)("user/updateUserDeadline"),
        Zn = Object(N.b)("user/addSerializedToken"),
        $n = Object(N.b)("user/removeSerializedToken"),
        ea = Object(N.b)("user/addSerializedPair"),
        ta = Object(N.b)("user/removeSerializedPair"),
        na = Object(N.b)("user/muteAudio"),
        aa = Object(N.b)("user/unmuteAudio"),
        ia = "IS_DARK";

      function ra(e) {
        return {
          chainId: e.chainId,
          address: e.address,
          decimals: e.decimals,
          symbol: e.symbol,
          name: e.name,
        };
      }

      function sa(e) {
        return new ge.i(e.chainId, e.address, e.decimals, e.symbol, e.name);
      }

      function oa() {
        return Object(b.d)(function (e) {
          return e.user.userExpertMode;
        });
      }

      function ca() {
        var e = Object(b.c)();
        return [
          Object(b.d)(function (e) {
            return e.user.userSlippageTolerance;
          }),
          Object(a.useCallback)(
            function (t) {
              e(
                Kn({
                  userSlippageTolerance: t,
                })
              );
            },
            [e]
          ),
        ];
      }

      function ua() {
        var e = Object(b.c)();
        return [
          Object(b.d)(function (e) {
            return e.user.userDeadline;
          }),
          Object(a.useCallback)(
            function (t) {
              e(
                Xn({
                  userDeadline: t,
                })
              );
            },
            [e]
          ),
        ];
      }

      function la() {
        var e = Ye().chainId,
          t = Object(b.d)(function (e) {
            return e.user.tokens;
          });
        return Object(a.useMemo)(
          function () {
            var n;
            return e
              ? Object.values(null !== (n = t[e]) && void 0 !== n ? n : {}).map(
                  sa
                )
              : [];
          },
          [t, e]
        );
      }

      function da(e) {
        var t = Object(l.a)(e, 2),
          n = t[0],
          a = t[1];
        return new ge.i(
          n.chainId,
          ge.f.getAddress(n, a),
          18,
          "Cake-LP",
          "Pancake LPs"
        );
      }
      var pa,
        ya = n(231),
        ba = n(496),
        ma = n(497),
        fa = (n(498), n(371)),
        ja =
          ((pa = {}),
          Object(H.a)(
            pa,
            ge.a.MAINNET,
            "0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb"
          ),
          Object(H.a)(
            pa,
            ge.a.BSCTESTNET,
            "0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A"
          ),
          pa);

      function va(e, t) {
        var n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          i = Ye(),
          r = i.library,
          s = i.account;
        return Object(a.useMemo)(
          function () {
            if (!e || !t || !r) return null;
            try {
              return Qt(e, t, r, n && s ? s : void 0);
            } catch (a) {
              return console.error("Failed to get contract", a), null;
            }
          },
          [e, t, r, n, s]
        );
      }

      function ha(e, t) {
        return va(e, ln, t);
      }

      function xa(e) {
        var t = Ye().chainId;
        if (t)
          switch (t) {
            case ge.a.MAINNET:
            case ge.a.BSCTESTNET:
          }
        return va(undefined, ba, e);
      }

      function Oa(e, t) {
        return va(e, ma, t);
      }

      function ga() {
        var e = Ye().chainId;
        return va(e && ja[e], fa, !1);
      }

      function Ta() {
        var e = Ye().chainId,
          t = la(),
          n = hn();
        return Object(a.useMemo)(
          function () {
            return e
              ? t.reduce(function (e, t) {
                  return (e[t.address] = t), e;
                }, Object(Oe.a)({}, n[e]))
              : {};
          },
          [e, t, n]
        );
      }
      var wa = /^0x[a-fA-F0-9]{64}$/;

      function ka(e, t, n) {
        return e && e.length > 0 ? e : t && wa.test(t) ? Object(yn.b)(t) : n;
      }

      function Ca(e) {
        var t = Ye().chainId,
          n = Ta(),
          i = Yt(e),
          r = ha(i || void 0, !1),
          s = (function (e, t) {
            return va(e, dn, t);
          })(i || void 0, !1),
          o = i ? n[i] : void 0,
          c = qn(o ? void 0 : r, "name", void 0, Pn),
          u = qn(o ? void 0 : s, "name", void 0, Pn),
          l = qn(o ? void 0 : r, "symbol", void 0, Pn),
          d = qn(o ? void 0 : s, "symbol", void 0, Pn),
          p = qn(o ? void 0 : r, "decimals", void 0, Pn);
        return Object(a.useMemo)(
          function () {
            if (o) return o;
            if (t && i) {
              if (p.loading || l.loading || c.loading) return null;
              var e, n, a, r;
              if (p.result)
                return new ge.i(
                  t,
                  i,
                  p.result[0],
                  ka(
                    null === (e = l.result) || void 0 === e ? void 0 : e[0],
                    null === (n = d.result) || void 0 === n ? void 0 : n[0],
                    "UNKNOWN"
                  ),
                  ka(
                    null === (a = c.result) || void 0 === a ? void 0 : a[0],
                    null === (r = u.result) || void 0 === r ? void 0 : r[0],
                    "Unknown Token"
                  )
                );
            }
          },
          [
            i,
            t,
            p.loading,
            p.result,
            l.loading,
            l.result,
            d.result,
            o,
            c.loading,
            c.result,
            u.result,
          ]
        );
      }

      function Ia(e) {
        var t =
            "ETH" === (null === e || void 0 === e ? void 0 : e.toUpperCase()),
          n = Ca(t ? void 0 : e);
        return t ? ge.d : n;
      }

      function Na(e) {
        var t = ga(),
          n = Object(a.useMemo)(
            function () {
              return e
                ? e
                    .map(Yt)
                    .filter(function (e) {
                      return !1 !== e;
                    })
                    .sort()
                : [];
            },
            [e]
          ),
          i = (function (e, t, n, i) {
            var r = Object(a.useMemo)(
                function () {
                  var n;
                  return null === e ||
                    void 0 === e ||
                    null === (n = e.interface) ||
                    void 0 === n
                    ? void 0
                    : n.getFunction(t);
                },
                [e, t]
              ),
              s = Fn(
                Object(a.useMemo)(
                  function () {
                    return e && r && n && n.length > 0
                      ? n.map(function (t) {
                          return {
                            address: e.address,
                            callData: e.interface.encodeFunctionData(r, t),
                          };
                        })
                      : [];
                  },
                  [n, e, r]
                ),
                i
              ),
              o = kn();
            return Object(a.useMemo)(
              function () {
                return s.map(function (t) {
                  return Wn(
                    t,
                    null === e || void 0 === e ? void 0 : e.interface,
                    r,
                    o
                  );
                });
              },
              [r, e, s, o]
            );
          })(
            t,
            "getEthBalance",
            n.map(function (e) {
              return [e];
            })
          );
        return Object(a.useMemo)(
          function () {
            return n.reduce(function (e, t, n) {
              var a,
                r,
                s =
                  null === i ||
                  void 0 === i ||
                  null === (a = i[n]) ||
                  void 0 === a ||
                  null === (r = a.result) ||
                  void 0 === r
                    ? void 0
                    : r[0];
              return s && (e[t] = ge.c.ether(ge.e.BigInt(s.toString()))), e;
            }, {});
          },
          [n, i]
        );
      }

      function Ea(e, t) {
        var n = Object(a.useMemo)(
            function () {
              var e;
              return null !==
                (e =
                  null === t || void 0 === t
                    ? void 0
                    : t.filter(function (e) {
                        return (
                          !1 !==
                          Yt(null === e || void 0 === e ? void 0 : e.address)
                        );
                      })) && void 0 !== e
                ? e
                : [];
            },
            [t]
          ),
          i = zn(
            Object(a.useMemo)(
              function () {
                return n.map(function (e) {
                  return e.address;
                });
              },
              [n]
            ),
            pn,
            "balanceOf",
            [e]
          ),
          r = Object(a.useMemo)(
            function () {
              return i.some(function (e) {
                return e.loading;
              });
            },
            [i]
          );
        return [
          Object(a.useMemo)(
            function () {
              return e && n.length > 0
                ? n.reduce(function (e, t, n) {
                    var a,
                      r,
                      s =
                        null === i ||
                        void 0 === i ||
                        null === (a = i[n]) ||
                        void 0 === a ||
                        null === (r = a.result) ||
                        void 0 === r
                          ? void 0
                          : r[0],
                      o = s ? ge.e.BigInt(s.toString()) : void 0;
                    return o && (e[t.address] = new ge.j(t, o)), e;
                  }, {})
                : {};
            },
            [e, n, i]
          ),
          r,
        ];
      }

      function Ma(e, t) {
        return Ea(e, t)[0];
      }

      function Aa(e, t) {
        var n = Ma(e, [t]);
        if (t) return n[t.address];
      }

      function Sa(e, t) {
        var n = Object(a.useMemo)(
            function () {
              var e;
              return null !==
                (e =
                  null === t || void 0 === t
                    ? void 0
                    : t.filter(function (e) {
                        return e instanceof ge.i;
                      })) && void 0 !== e
                ? e
                : [];
            },
            [t]
          ),
          i = Ma(e, n),
          r = Na(
            Object(a.useMemo)(
              function () {
                var e;
                return (
                  null !==
                    (e =
                      null === t || void 0 === t
                        ? void 0
                        : t.some(function (e) {
                            return e === ge.d;
                          })) &&
                  void 0 !== e &&
                  e
                );
              },
              [t]
            )
              ? [e]
              : []
          );
        return Object(a.useMemo)(
          function () {
            var n;
            return null !==
              (n =
                null === t || void 0 === t
                  ? void 0
                  : t.map(function (t) {
                      if (e && t)
                        return t instanceof ge.i
                          ? i[t.address]
                          : t === ge.d
                          ? r[e]
                          : void 0;
                    })) && void 0 !== n
              ? n
              : [];
          },
          [e, t, r, i]
        );
      }

      function Ra(e, t) {
        return Sa(e, [t])[0];
      }

      function Ba(e, t) {
        var n = Object(a.useState)(t && t(e) ? e : void 0),
          i = Object(l.a)(n, 2),
          r = i[0],
          s = i[1];
        return (
          Object(a.useEffect)(
            function () {
              s(function (n) {
                return !t || t(e) ? e : n;
              });
            },
            [t, e]
          ),
          r
        );
      }
      var _a,
        Ua,
        Da,
        Pa,
        Fa = n(237),
        La = n(305),
        Ya = n(302),
        Wa = (n(668), Object(Fa.a)(La.b)),
        za = Object(q.default)(Wa)(
          _a ||
            (_a = Object(W.a)([
              "\n\t&[data-reach-dialog-overlay] {\n\t\tz-index: 2;\n\t\tbackground-color: transparent;\n\t\toverflow: hidden;\n\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\n\t\tbackground-color: rgba(0, 0, 0, 0.3);\n\t}\n",
            ]))
        ),
        qa = Object(Fa.a)(La.a),
        Va = Object(q.default)(function (e) {
          e.minHeight, e.maxHeight, e.mobile, e.isOpen;
          var t = Object(He.a)(e, [
            "minHeight",
            "maxHeight",
            "mobile",
            "isOpen",
          ]);
          return Object(Qe.jsx)(qa, Object(Oe.a)({}, t));
        }).attrs({
          "aria-label": "dialog",
        })(
          Ua ||
            (Ua = Object(W.a)([
              "\n\t&[data-reach-dialog-content] {\n\t\tmargin: 0 0 2rem 0;\n\t\tborder: 1px solid var(--color-background-2);\n\t\tbackground-color: var(--color-background-2);\n\t\tbox-shadow: 0 4px 8px 0 ",
              ";\n\t\tpadding: 0px;\n\t\twidth: 80%;\n\t\toverflow: hidden;\n\n\t\talign-self: ",
              ";\n\n\t\tmax-width: 420px;\n\t\t",
              "\n\t\t",
              "\n    display: flex;\n\t\tborder-radius: 20px;\n\n\t\t",
              " {\n\t\t\twidth: 65vw;\n\t\t}\n\t\t",
              " {\n\t\t\twidth: 85vw;\n\t\t}\n\t}\n",
            ])),
          Object(tn.b)(0.95, "#191326"),
          function (e) {
            return e.mobile ? "flex-end" : "center";
          },
          function (e) {
            var t = e.maxHeight;
            return (
              t &&
              Object(q.css)(
                Da ||
                  (Da = Object(W.a)(["\n\t\t\t\tmax-height: ", "vh;\n\t\t\t"])),
                t
              )
            );
          },
          function (e) {
            var t = e.minHeight;
            return (
              t &&
              Object(q.css)(
                Pa ||
                  (Pa = Object(W.a)(["\n\t\t\t\tmin-height: ", "vh;\n\t\t\t"])),
                t
              )
            );
          },
          function (e) {
            return e.theme.mediaQueries.lg;
          },
          function (e) {
            return e.theme.mediaQueries.sm;
          }
        );

      function Ha(e) {
        var t = e.isOpen,
          n = e.onDismiss,
          a = e.minHeight,
          i = void 0 !== a && a,
          r = e.maxHeight,
          s = void 0 === r ? 50 : r,
          o = e.initialFocusRef,
          c = e.children,
          u = Object(Fa.b)(t, null, {
            config: {
              duration: 200,
            },
            from: {
              opacity: 0,
            },
            enter: {
              opacity: 1,
            },
            leave: {
              opacity: 0,
            },
          });
        return Object(Qe.jsx)(Qe.Fragment, {
          children: u.map(function (e) {
            var t = e.item,
              a = e.key,
              r = e.props;
            return (
              t &&
              Object(Qe.jsx)(
                za,
                {
                  style: r,
                  onDismiss: n,
                  initialFocusRef: o,
                  children: Object(Qe.jsxs)(Va, {
                    "aria-label": "dialog content",
                    minHeight: i,
                    maxHeight: s,
                    mobile: Ya.isMobile,
                    children: [
                      !o && Ya.isMobile
                        ? Object(Qe.jsx)("div", {
                            tabIndex: 1,
                          })
                        : null,
                      c,
                    ],
                  }),
                },
                a
              )
            );
          }),
        });
      }
      var Qa = n(499),
        Ja = n(303),
        Ga = n.n(Ja),
        Ka = n(238),
        Xa = n(239);

      function Za(e) {
        var t = new TextDecoder(),
          n = (function (e) {
            if ((e = e.startsWith("0x") ? e.substr(2) : e).length % 2 !== 0)
              throw new Error("hex must have length that is multiple of 2");
            for (var t = new Uint8Array(e.length / 2), n = 0; n < t.length; n++)
              t[n] = parseInt(e.substr(2 * n, 2), 16);
            return t;
          })(e),
          a = Object(Ka.getCodec)(n);
        switch (a) {
          case "ipfs-ns":
            var i = Object(Ka.rmPrefix)(n),
              r = new Ga.a(i);
            return "ipfs://".concat(Object(Xa.toB58String)(r.multihash));
          case "ipns-ns":
            var s = Object(Ka.rmPrefix)(n),
              o = new Ga.a(s),
              c = Object(Xa.decode)(o.multihash);
            return "identity" === c.name
              ? "ipns://".concat(t.decode(c.digest).trim())
              : "ipns://".concat(Object(Xa.toB58String)(o.multihash));
          default:
            throw new Error("Unrecognized codec: ".concat(a));
        }
      }
      var $a = /^(([a-zA-Z0-9]+\.)+)eth(\/.*)?$/;

      function ei(e) {
        var t = e.match($a);
        if (t)
          return {
            ensName: "".concat(t[1].toLowerCase(), "eth"),
            ensPath: t[3],
          };
      }

      function ti(e) {
        var t, n;
        switch (e.split(":")[0].toLowerCase()) {
          case "https":
            return [e];
          case "http":
            return ["https".concat(e.substr(4)), e];
          case "ipfs":
            var a =
              null === (t = e.match(/^ipfs:(\/\/)?(.*)$/i)) || void 0 === t
                ? void 0
                : t[2];
            return [
              "https://cloudflare-ipfs.com/ipfs/".concat(a, "/"),
              "https://ipfs.io/ipfs/".concat(a, "/"),
            ];
          case "ipns":
            var i =
              null === (n = e.match(/^ipns:(\/\/)?(.*)$/i)) || void 0 === n
                ? void 0
                : n[2];
            return [
              "https://cloudflare-ipfs.com/ipns/".concat(i, "/"),
              "https://ipfs.io/ipns/".concat(i, "/"),
            ];
          default:
            return [];
        }
      }
      var ni = n(120);

      function ai(e) {
        return /^0x0*$/.test(e);
      }

      function ii(e) {
        var t = Object(a.useMemo)(
            function () {
              return e ? ei(e) : void 0;
            },
            [e]
          ),
          n = (function (e) {
            var t,
              n,
              i,
              r = Object(a.useMemo)(
                function () {
                  if (!e) return [void 0];
                  try {
                    return e ? [Object(ni.namehash)(e)] : [void 0];
                  } catch (t) {
                    return [void 0];
                  }
                },
                [e]
              ),
              s = qn(xa(!1), "resolver", r),
              o = null === (t = s.result) || void 0 === t ? void 0 : t[0],
              c = qn(Oa(o && ai(o) ? void 0 : o, !1), "contenthash", r);
            return {
              contenthash:
                null !==
                  (n =
                    null === (i = c.result) || void 0 === i ? void 0 : i[0]) &&
                void 0 !== n
                  ? n
                  : null,
              loading: s.loading || c.loading,
            };
          })(null === t || void 0 === t ? void 0 : t.ensName);
        return Object(a.useMemo)(
          function () {
            return t
              ? n.contenthash
                ? ti(Za(n.contenthash))
                : []
              : e
              ? ti(e)
              : [];
          },
          [t, n.contenthash, e]
        );
      }
      var ri,
        si = n(1139),
        oi = {};

      function ci(e) {
        var t = e.srcs,
          n = e.alt,
          i = Object(He.a)(e, ["srcs", "alt"]),
          r = Object(a.useState)(0),
          s = Object(l.a)(r, 2)[1],
          o = t.find(function (e) {
            return !oi[e];
          });
        return o
          ? Object(Qe.jsx)(
              "img",
              Object(Oe.a)(
                Object(Oe.a)({}, i),
                {},
                {
                  alt: n,
                  src: o,
                  onError: function () {
                    o && (oi[o] = !0),
                      s(function (e) {
                        return e + 1;
                      });
                  },
                }
              )
            )
          : Object(Qe.jsx)(si.a, Object(Oe.a)({}, i));
      }
      var ui = Object(q.default)(ci)(
        ri || (ri = Object(W.a)(["\n\twidth: ", ";\n\theight: ", ";\n"])),
        function (e) {
          return e.size;
        },
        function (e) {
          return e.size;
        }
      );

      function li(e) {
        var t = e.logoURI,
          n = e.style,
          a = e.size,
          i = void 0 === a ? "24px" : a,
          r = e.alt,
          s = ii(t);
        return Object(Qe.jsx)(ui, {
          alt: r,
          size: i,
          srcs: s,
          style: n,
        });
      }
      var di,
        pi,
        yi,
        bi,
        mi,
        fi,
        ji,
        vi,
        hi,
        xi = n(501),
        Oi = Object(q.default)(xi.Box)(
          di ||
            (di = Object(W.a)([
              "\n\twidth: 100%;\n\tdisplay: flex;\n\tpadding: 0;\n\talign-items: ",
              ";\n\tpadding: ",
              ";\n\tborder: ",
              ";\n\tborder-radius: ",
              ";\n",
            ])),
          function (e) {
            return e.align || "center";
          },
          function (e) {
            return e.padding;
          },
          function (e) {
            return e.border;
          },
          function (e) {
            return e.borderRadius;
          }
        ),
        gi = Object(q.default)(Oi)(
          pi || (pi = Object(W.a)(["\n\tjustify-content: space-between;\n"]))
        ),
        Ti = q.default.div(
          yi ||
            (yi = Object(W.a)([
              "\n\twidth: ",
              ";\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: ",
              ";\n\tmargin-bottom: ",
              ";\n\tmargin-top: ",
              ";\n",
            ])),
          function (e) {
            var t = e.width;
            return t ? "".concat(t) : "100%";
          },
          function (e) {
            var t = e.justify;
            return t ? "".concat(t) : "center";
          },
          function (e) {
            var t = e.mb;
            return t ? "".concat(t) : 0;
          },
          function (e) {
            var t = e.mt;
            return t ? "".concat(t) : 0;
          }
        ),
        wi = Object(q.default)(Oi)(
          bi ||
            (bi = Object(W.a)([
              "\n\tflex-wrap: wrap;\n\tmargin: ",
              ";\n\tjustify-content: ",
              ";\n\n\t& > * {\n\t\tmargin: ",
              " !important;\n\t}\n",
            ])),
          function (e) {
            var t = e.gap;
            return t && "-".concat(t);
          },
          function (e) {
            var t = e.justify;
            return t && t;
          },
          function (e) {
            return e.gap;
          }
        ),
        ki = Object(q.default)(Oi)(
          mi ||
            (mi = Object(W.a)([
              "\n\twidth: ",
              ";\n\tdisplay: inline-flex;\n\tjustify-content: space-between;\n",
            ])),
          function (e) {
            var t = e.width;
            return t ? "".concat(t) : "35%";
          }
        ),
        Ci = Object(q.default)(Oi)(
          fi ||
            (fi = Object(W.a)([
              "\n\twidth: 100%;\n\tdisplay: inline-flex;\n\tjustify-content: space-between;\n\tmargin-bottom: ",
              ";\n",
            ])),
          function (e) {
            var t = e.mb;
            return t ? "".concat(t) : 0;
          }
        ),
        Ii = Oi,
        Ni = n(1143),
        Ei = n(232);

      function Mi(e, t) {
        var n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          i = Object(a.useRef)();
        Object(a.useEffect)(
          function () {
            i.current = e;
          },
          [e]
        ),
          Object(a.useEffect)(
            function () {
              function e() {
                var e = i.current;
                e && e();
              }
              if (null !== t) {
                n && e();
                var a = setInterval(e, t);
                return function () {
                  return clearInterval(a);
                };
              }
            },
            [t, n]
          );
      }
      var Ai,
        Si = q.default.div(
          ji ||
            (ji = Object(W.a)([
              "\n\tz-index: 9999;\n\n\tvisibility: ",
              ";\n\topacity: ",
              ";\n\ttransition: visibility 150ms linear, opacity 150ms linear;\n\n\tbackground: ",
              ";\n\tborder: 1px solid ",
              ";\n\tbox-shadow: 0 4px 8px 0 ",
              ";\n\tcolor: ",
              ";\n\tborder-radius: 8px;\n",
            ])),
          function (e) {
            return e.show ? "visible" : "hidden";
          },
          function (e) {
            return e.show ? 1 : 0;
          },
          function (e) {
            return e.theme.colors.invertedContrast;
          },
          function (e) {
            return e.theme.colors.tertiary;
          },
          Object(tn.b)(0.9, "#2F80ED"),
          function (e) {
            return e.theme.colors.textSubtle;
          }
        ),
        Ri = q.default.div(
          vi || (vi = Object(W.a)(["\n\tdisplay: inline-block;\n"]))
        ),
        Bi = q.default.div(
          hi ||
            (hi = Object(W.a)([
              "\n\twidth: 8px;\n\theight: 8px;\n\tz-index: 9998;\n\n\t::before {\n\t\tposition: absolute;\n\t\twidth: 8px;\n\t\theight: 8px;\n\t\tz-index: 9998;\n\n\t\tcontent: '';\n\t\tborder: 1px solid ",
              ";\n\t\ttransform: rotate(45deg);\n\t\tbackground: ",
              ";\n\t}\n\n\t&.arrow-top {\n\t\tbottom: -5px;\n\t\t::before {\n\t\t\tborder-top: none;\n\t\t\tborder-left: none;\n\t\t}\n\t}\n\n\t&.arrow-bottom {\n\t\ttop: -5px;\n\t\t::before {\n\t\t\tborder-bottom: none;\n\t\t\tborder-right: none;\n\t\t}\n\t}\n\n\t&.arrow-left {\n\t\tright: -5px;\n\n\t\t::before {\n\t\t\tborder-bottom: none;\n\t\t\tborder-left: none;\n\t\t}\n\t}\n\n\t&.arrow-right {\n\t\tleft: -5px;\n\t\t::before {\n\t\t\tborder-right: none;\n\t\t\tborder-top: none;\n\t\t}\n\t}\n",
            ])),
          function (e) {
            return e.theme.colors.tertiary;
          },
          function (e) {
            return e.theme.colors.invertedContrast;
          }
        );

      function _i(e) {
        var t,
          n,
          i = e.content,
          r = e.show,
          s = e.children,
          o = e.placement,
          c = void 0 === o ? "auto" : o,
          u = Object(a.useState)(null),
          d = Object(l.a)(u, 2),
          p = d[0],
          y = d[1],
          b = Object(a.useState)(null),
          m = Object(l.a)(b, 2),
          f = m[0],
          j = m[1],
          v = Object(a.useState)(null),
          h = Object(l.a)(v, 2),
          x = h[0],
          O = h[1],
          g = Object(Ni.a)(p, f, {
            placement: c,
            strategy: "fixed",
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [8, 8],
                },
              },
              {
                name: "arrow",
                options: {
                  element: x,
                },
              },
            ],
          }),
          T = g.styles,
          w = g.update,
          k = g.attributes;
        return (
          Mi(
            Object(a.useCallback)(
              function () {
                w && w();
              },
              [w]
            ),
            r ? 100 : null
          ),
          Object(Qe.jsxs)(Qe.Fragment, {
            children: [
              Object(Qe.jsx)(Ri, {
                ref: y,
                children: s,
              }),
              Object(Qe.jsx)(Ei.a, {
                children: Object(Qe.jsxs)(
                  Si,
                  Object(Oe.a)(
                    Object(Oe.a)(
                      {
                        show: r,
                        ref: j,
                        style: T.popper,
                      },
                      k.popper
                    ),
                    {},
                    {
                      children: [
                        i,
                        Object(Qe.jsx)(
                          Bi,
                          Object(Oe.a)(
                            {
                              className: "arrow-".concat(
                                null !==
                                  (t =
                                    null === (n = k.popper) || void 0 === n
                                      ? void 0
                                      : n["data-popper-placement"]) &&
                                  void 0 !== t
                                  ? t
                                  : ""
                              ),
                              ref: O,
                              style: T.arrow,
                            },
                            k.arrow
                          )
                        ),
                      ],
                    }
                  )
                ),
              }),
            ],
          })
        );
      }
      var Ui,
        Di = q.default.div(
          Ai ||
            (Ai = Object(W.a)([
              "\n\twidth: 228px;\n\tpadding: 0.6rem 1rem;\n\tline-height: 150%;\n\tfont-weight: 400;\n",
            ]))
        );

      function Pi(e) {
        var t = e.text,
          n = Object(He.a)(e, ["text"]);
        return Object(Qe.jsx)(
          _i,
          Object(Oe.a)(
            {
              content: Object(Qe.jsx)(Di, {
                children: t,
              }),
            },
            n
          )
        );
      }

      function Fi(e) {
        var t = e.children,
          n = Object(He.a)(e, ["children"]),
          i = Object(a.useState)(!1),
          r = Object(l.a)(i, 2),
          s = r[0],
          o = r[1],
          c = Object(a.useCallback)(
            function () {
              return o(!0);
            },
            [o]
          ),
          u = Object(a.useCallback)(
            function () {
              return o(!1);
            },
            [o]
          );
        return Object(Qe.jsx)(
          Pi,
          Object(Oe.a)(
            Object(Oe.a)({}, n),
            {},
            {
              show: s,
              children: Object(Qe.jsx)("div", {
                onMouseEnter: c,
                onMouseLeave: u,
                children: t,
              }),
            }
          )
        );
      }
      var Li,
        Yi = q.default.div(
          Ui ||
            (Ui = Object(W.a)([
              "\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 0.2rem;\n\tborder: none;\n\tbackground: none;\n\toutline: none;\n\tcursor: default;\n\tborder-radius: 36px;\n\tbackground-color: ",
              ";\n\tcolor: ",
              ";\n\n\t:hover,\n\t:focus {\n\t\topacity: 0.7;\n\t}\n",
            ])),
          function (e) {
            return e.theme.colors.invertedContrast;
          },
          function (e) {
            return e.theme.colors.textSubtle;
          }
        );

      function Wi(e) {
        var t = e.text,
          n = Object(a.useState)(!1),
          i = Object(l.a)(n, 2),
          r = i[0],
          s = i[1],
          o = Object(a.useCallback)(
            function () {
              return s(!0);
            },
            [s]
          ),
          c = Object(a.useCallback)(
            function () {
              return s(!1);
            },
            [s]
          );
        return Object(Qe.jsx)("span", {
          style: {
            marginLeft: 4,
          },
          children: Object(Qe.jsx)(Pi, {
            text: t,
            show: r,
            children: Object(Qe.jsx)(Yi, {
              onClick: o,
              onMouseEnter: o,
              onMouseLeave: c,
              children: Object(Qe.jsx)(si.a, {
                size: 16,
              }),
            }),
          }),
        });
      }
      var zi,
        qi,
        Vi,
        Hi = Object(q.default)(ci)(
          Li || (Li = Object(W.a)(["\n\twidth: ", ";\n\theight: ", ";\n"])),
          function (e) {
            return e.size;
          },
          function (e) {
            return e.size;
          }
        ),
        Qi = function (e) {
          return "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/".concat(
            e,
            "/logo.png"
          );
        },
        Ji = q.default.img(
          zi ||
            (zi = Object(W.a)([
              "\n\twidth: ",
              ";\n\theight: ",
              ";\n\tbox-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);\n\tborder-radius: 24px;\n",
            ])),
          function (e) {
            return e.size;
          },
          function (e) {
            return e.size;
          }
        ),
        Gi = Object(q.default)(ci)(
          qi || (qi = Object(W.a)(["\n\twidth: ", ";\n\theight: ", ";\n"])),
          function (e) {
            return e.size;
          },
          function (e) {
            return e.size;
          }
        );

      function Ki(e) {
        var t,
          n,
          i = e.currency,
          r = e.size,
          s = void 0 === r ? "24px" : r,
          o = e.style,
          c = ii(i instanceof bn ? i.logoURI : void 0),
          u = Object(a.useMemo)(
            function () {
              return i === ge.d
                ? []
                : i instanceof ge.i
                ? i instanceof bn
                  ? [].concat(Object(xe.a)(c), [
                      "/images/coins/".concat(
                        null !==
                          (t =
                            null === i || void 0 === i ? void 0 : i.symbol) &&
                          void 0 !== t
                          ? t
                          : "token",
                        ".png"
                      ),
                      Qi(i.address),
                    ])
                  : [
                      "/images/coins/".concat(
                        null !==
                          (e =
                            null === i || void 0 === i ? void 0 : i.symbol) &&
                          void 0 !== e
                          ? e
                          : "token",
                        ".png"
                      ),
                      Qi(i.address),
                    ]
                : [];
              var e, t;
            },
            [i, c]
          );
        return i === ge.d
          ? Object(Qe.jsx)(Ji, {
              src: "/images/coins/bnb.png",
              size: s,
              style: o,
            })
          : (null === i || void 0 === i ? void 0 : i.symbol)
          ? Object(Qe.jsx)(Hi, {
              size: s,
              srcs: u,
              alt: "".concat(
                null !== (t = null === i || void 0 === i ? void 0 : i.symbol) &&
                  void 0 !== t
                  ? t
                  : "token",
                " logo"
              ),
              style: o,
            })
          : Object(Qe.jsx)(Gi, {
              size: s,
              srcs: u,
              alt: "".concat(
                null !== (n = null === i || void 0 === i ? void 0 : i.symbol) &&
                  void 0 !== n
                  ? n
                  : "token",
                " logo"
              ),
              style: o,
            });
      }
      var Xi = q.default.div(
        Vi ||
          (Vi = Object(W.a)([
            "\n\tborder: 1px solid ",
            ";\n\tborder-radius: 10px;\n\tdisplay: flex;\n\tpadding: 6px;\n\n\talign-items: center;\n\t:hover {\n\t\tcursor: ",
            ";\n\t\tbackground-color: ",
            ";\n\t}\n\n\tbackground-color: ",
            ";\n\topacity: ",
            ";\n",
          ])),
        function (e) {
          var t = e.theme;
          return e.disable ? "transparent" : t.colors.tertiary;
        },
        function (e) {
          return !e.disable && "pointer";
        },
        function (e) {
          var t = e.theme;
          return !e.disable && t.colors.invertedContrast;
        },
        function (e) {
          var t = e.theme;
          return e.disable && t.colors.tertiary;
        },
        function (e) {
          return e.disable && "0.4";
        }
      );

      function Zi(e) {
        var t = e.chainId,
          n = e.onSelect,
          a = e.selectedCurrency,
          i = cn();
        return Object(Qe.jsxs)(vt, {
          gap: "md",
          children: [
            Object(Qe.jsxs)(wi, {
              children: [
                Object(Qe.jsx)(v.i, {
                  fontSize: "14px",
                  children: "Common bases",
                }),
                Object(Qe.jsx)(Wi, {
                  text: i(
                    1204,
                    "These tokens are commonly paired with other tokens."
                  ),
                }),
              ],
            }),
            Object(Qe.jsxs)(wi, {
              gap: "4px",
              children: [
                Object(Qe.jsxs)(Xi, {
                  onClick: function () {
                    (a && Object(ge.m)(a, ge.d)) || n(ge.d);
                  },
                  disable: a === ge.d,
                  children: [
                    Object(Qe.jsx)(Ki, {
                      currency: ge.d,
                      style: {
                        marginRight: 8,
                      },
                    }),
                    Object(Qe.jsx)(v.i, {
                      children: "BNB",
                    }),
                  ],
                }),
                (t ? _e[t] : []).map(function (e) {
                  var t = a instanceof ge.i && a.address === e.address;
                  return Object(Qe.jsxs)(
                    Xi,
                    {
                      onClick: function () {
                        return !t && n(e);
                      },
                      disable: t,
                      children: [
                        Object(Qe.jsx)(Ki, {
                          currency: e,
                          style: {
                            marginRight: 8,
                          },
                        }),
                        Object(Qe.jsx)(v.i, {
                          children: e.symbol,
                        }),
                      ],
                    },
                    e.address
                  );
                }),
              ],
            }),
          ],
        });
      }
      var $i,
        er,
        tr,
        nr,
        ar,
        ir,
        rr,
        sr,
        or,
        cr = n(537),
        ur = Object(q.default)(ki)(
          $i || ($i = Object(W.a)(["\n\tcolor: ", ";\n\tfont-size: 14px;\n"])),
          function (e) {
            return e.theme.colors.primary;
          }
        ),
        lr = Object(q.default)(vt)(
          er ||
            (er = Object(W.a)([
              "\n\tpadding: 20px;\n\tpadding-bottom: 12px;\n",
            ]))
        ),
        dr = Object(q.default)(gi)(
          tr ||
            (tr = Object(W.a)([
              "\n\tpadding: 4px 20px;\n\theight: 56px;\n\tdisplay: grid;\n\tgrid-template-columns: auto minmax(auto, 1fr) auto minmax(0, 72px);\n\tgrid-gap: 16px;\n\tcursor: ",
              ";\n\tpointer-events: ",
              ";\n\topacity: ",
              ";\n",
            ])),
          function (e) {
            return !e.disabled && "pointer";
          },
          function (e) {
            return e.disabled && "none";
          },
          function (e) {
            var t = e.disabled,
              n = e.selected;
            return t || n ? 0.5 : 1;
          }
        ),
        pr = q.default.input(
          nr ||
            (nr = Object(W.a)([
              "\n\tposition: relative;\n\tdisplay: flex;\n\tpadding: 16px;\n\talign-items: center;\n\twidth: 100%;\n\twhite-space: nowrap;\n\tbackground: none;\n\tborder: none;\n\toutline: none;\n\tborder-radius: 20px;\n\tcolor: var(--color-text-2);\n\tborder-style: solid;\n\tborder: 1px solid var(--color-border-6);\n\t-webkit-appearance: none;\n\n\tfont-size: 15px;\n\n\t::placeholder {\n\t\tcolor: ",
              ";\n\t}\n\ttransition: border 100ms;\n\t:focus {\n\t\tborder: 1px solid #000;\n\t\toutline: none;\n\t}\n",
            ])),
          function (e) {
            return e.theme.colors.textDisabled;
          }
        ),
        yr = q.default.div(
          ar ||
            (ar = Object(W.a)([
              "\n\twidth: 100%;\n\theight: 1px;\n\tbackground-color: ",
              ";\n",
            ])),
          function (e) {
            return e.theme.colors.invertedContrast;
          }
        ),
        br = q.default.div(
          ir ||
            (ir = Object(W.a)([
              "\n\twidth: 100%;\n\theight: 1px;\n\tbackground-color: ",
              ";\n",
            ])),
          function (e) {
            return e.theme.colors.tertiary;
          }
        );

      function mr(e) {
        return e instanceof ge.i ? e.address : e === ge.d ? "ETHER" : "";
      }
      var fr = Object(q.default)(v.i)(
          rr ||
            (rr = Object(W.a)([
              "\n\twhite-space: nowrap;\n\toverflow: hidden;\n\tmax-width: 5rem;\n\ttext-overflow: ellipsis;\n",
            ]))
        ),
        jr = q.default.div(
          sr ||
            (sr = Object(W.a)([
              "\n\tbackground-color: ",
              ";\n\tcolor: ",
              ";\n\tfont-size: 14px;\n\tborder-radius: 4px;\n\tpadding: 0.25rem 0.3rem 0.25rem 0.3rem;\n\tmax-width: 6rem;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n\tjustify-self: flex-end;\n\tmargin-right: 4px;\n",
            ])),
          function (e) {
            return e.theme.colors.tertiary;
          },
          function (e) {
            return e.theme.colors.textSubtle;
          }
        );

      function vr(e) {
        var t = e.balance;
        return Object(Qe.jsx)(fr, {
          title: t.toExact(),
          children: t.toSignificant(4),
        });
      }
      var hr = q.default.div(
        or ||
          (or = Object(W.a)([
            "\n\tdisplay: flex;\n\tjustify-content: flex-end;\n",
          ]))
      );

      function xr(e) {
        var t = e.currency;
        if (!(t instanceof bn)) return Object(Qe.jsx)("span", {});
        var n = t.tags;
        if (!n || 0 === n.length) return Object(Qe.jsx)("span", {});
        var a = n[0];
        return Object(Qe.jsxs)(hr, {
          children: [
            Object(Qe.jsx)(Fi, {
              text: a.description,
              children: Object(Qe.jsx)(
                jr,
                {
                  children: a.name,
                },
                a.id
              ),
            }),
            n.length > 1
              ? Object(Qe.jsx)(Fi, {
                  text: n
                    .slice(1)
                    .map(function (e) {
                      var t = e.name,
                        n = e.description;
                      return "".concat(t, ": ").concat(n);
                    })
                    .join("; \n"),
                  children: Object(Qe.jsx)(jr, {
                    children: "...",
                  }),
                })
              : null,
          ],
        });
      }

      function Or(e) {
        var t = e.currency,
          n = e.onSelect,
          i = e.isSelected,
          r = e.otherSelected,
          s = e.style,
          o = Ye(),
          c = o.account,
          u = o.chainId,
          l = mr(t),
          d = (function (e, t) {
            var n;
            return (
              t === ge.d ||
              Boolean(
                t instanceof ge.i &&
                  (null === (n = e[t.chainId]) || void 0 === n
                    ? void 0
                    : n[t.address])
              )
            );
          })(hn(), t),
          p = (function (e) {
            return !!la().find(function (t) {
              return Object(ge.m)(e, t);
            });
          })(t),
          y = Ra(null !== c && void 0 !== c ? c : void 0, t),
          m = (function () {
            var e = Object(b.c)();
            return Object(a.useCallback)(
              function (t, n) {
                e(
                  $n({
                    chainId: t,
                    address: n,
                  })
                );
              },
              [e]
            );
          })(),
          f = (function () {
            var e = Object(b.c)();
            return Object(a.useCallback)(
              function (t) {
                e(
                  Zn({
                    serializedToken: ra(t),
                  })
                );
              },
              [e]
            );
          })();
        return Object(Qe.jsxs)(dr, {
          style: s,
          className: "token-item-".concat(l),
          onClick: function () {
            return i ? null : n();
          },
          disabled: i,
          selected: r,
          children: [
            Object(Qe.jsx)(Ki, {
              currency: t,
              size: "33px",
              style: {
                zIndex: 10,
              },
            }),
            Object(Qe.jsxs)(ht, {
              children: [
                Object(Qe.jsx)(v.i, {
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "var(--color-text)",
                  title: t.name,
                  children: t.symbol,
                }),
                Object(Qe.jsx)(v.i, {
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "rgb(122, 122, 122)",
                  title: t.name,
                  children: t.name,
                }),
                Object(Qe.jsxs)(ur, {
                  children: [
                    d || !p || t instanceof bn
                      ? null
                      : Object(Qe.jsxs)(v.i, {
                          children: [
                            "Added by user",
                            Object(Qe.jsx)(Ot, {
                              onClick: function (e) {
                                e.stopPropagation(),
                                  u && t instanceof ge.i && m(u, t.address);
                              },
                              children: "(Remove)",
                            }),
                          ],
                        }),
                    d || p || t instanceof bn
                      ? null
                      : Object(Qe.jsxs)(v.i, {
                          children: [
                            "Found by address",
                            Object(Qe.jsx)(Ot, {
                              onClick: function (e) {
                                e.stopPropagation(), t instanceof ge.i && f(t);
                              },
                              children: "(Add)",
                            }),
                          ],
                        }),
                  ],
                }),
              ],
            }),
            Object(Qe.jsx)(xr, {
              currency: t,
            }),
            Object(Qe.jsx)(ki, {
              width: "100%",
              style: {
                justifyContent: "flex-end",
              },
              children: y
                ? Object(Qe.jsx)(vr, {
                    balance: y,
                  })
                : c
                ? Object(Qe.jsx)(Ke, {})
                : null,
            }),
          ],
        });
      }

      function gr(e) {
        var t = e.height,
          n = e.currencies,
          i = e.selectedCurrency,
          r = e.onCurrencySelect,
          s = e.otherCurrency,
          o = e.fixedListRef,
          c = e.showETH,
          u = Object(a.useMemo)(
            function () {
              return c ? [ge.b.ETHER].concat(Object(xe.a)(n)) : Object(xe.a)(n);
            },
            [n, c]
          ),
          l = Object(a.useCallback)(
            function (e) {
              var t = e.data,
                n = e.index,
                a = e.style,
                o = t[n],
                c = Boolean(i && Object(ge.m)(i, o)),
                u = Boolean(s && Object(ge.m)(s, o));
              return Object(Qe.jsx)(Or, {
                style: a,
                currency: o,
                isSelected: c,
                onSelect: function () {
                  return r(o);
                },
                otherSelected: u,
              });
            },
            [r, s, i]
          ),
          d = Object(a.useCallback)(function (e, t) {
            return mr(t[e]);
          }, []);
        return Object(Qe.jsx)(cr.a, {
          height: t,
          ref: o,
          width: "100%",
          itemData: u,
          itemCount: u.length,
          itemSize: 56,
          itemKey: d,
          children: l,
        });
      }

      function Tr(e, t) {
        if (0 === t.length) return e;
        var n = Yt(t);
        if (n)
          return e.filter(function (e) {
            return e.address === n;
          });
        var a = t
          .toLowerCase()
          .split(/\s+/)
          .filter(function (e) {
            return e.length > 0;
          });
        if (0 === a.length) return e;
        var i = function (e) {
          var t = e
            .toLowerCase()
            .split(/\s+/)
            .filter(function (e) {
              return e.length > 0;
            });
          return a.every(function (e) {
            return (
              0 === e.length ||
              t.some(function (t) {
                return t.startsWith(e) || t.endsWith(e);
              })
            );
          });
        };
        return e.filter(function (e) {
          var t = e.symbol,
            n = e.name;
          return (t && i(t)) || (n && i(n));
        });
      }

      function wr(e) {
        var t = (function () {
            var e = Ye().account,
              t = Ta(),
              n = Ma(
                null !== e && void 0 !== e ? e : void 0,
                Object(a.useMemo)(
                  function () {
                    return Object.values(null !== t && void 0 !== t ? t : {});
                  },
                  [t]
                )
              );
            return null !== n && void 0 !== n ? n : {};
          })(),
          n = Object(a.useMemo)(
            function () {
              return (function (e) {
                return function (t, n) {
                  var a,
                    i,
                    r =
                      ((a = e[t.address]),
                      (i = e[n.address]),
                      a && i
                        ? a.greaterThan(i)
                          ? -1
                          : a.equalTo(i)
                          ? 0
                          : 1
                        : a && a.greaterThan("0")
                        ? -1
                        : i && i.greaterThan("0")
                        ? 1
                        : 0);
                  return 0 !== r
                    ? r
                    : t.symbol && n.symbol
                    ? t.symbol.toLowerCase() < n.symbol.toLowerCase()
                      ? -1
                      : 1
                    : t.symbol || n.symbol
                    ? -1
                    : 0;
                };
              })(null !== t && void 0 !== t ? t : {});
            },
            [t]
          );
        return Object(a.useMemo)(
          function () {
            return e
              ? function (e, t) {
                  return -1 * n(e, t);
                }
              : n;
          },
          [e, n]
        );
      }

      function kr(e) {
        var t = e.selectedCurrency,
          n = e.onCurrencySelect,
          i = e.otherSelectedCurrency,
          r = e.showCommonBases,
          s = e.onDismiss,
          o = e.isOpen,
          c = (e.onChangeList, Object(V.b)().t),
          u = Ye().chainId,
          d = (Object(a.useContext)(q.ThemeContext), Object(a.useRef)()),
          p = Object(a.useState)(""),
          y = Object(l.a)(p, 2),
          m = y[0],
          f = y[1],
          j = Object(a.useState)(!1),
          h = Object(l.a)(j, 2),
          x = h[0],
          O = (h[1], Ta()),
          g = Y().muteMode,
          T = Yt(m),
          w = Ca(m),
          k = Object(a.useMemo)(
            function () {
              var e = m.toLowerCase().trim();
              return "" === e || "e" === e || "et" === e || "eth" === e;
            },
            [m]
          ),
          C = wr(x),
          I = Object(b.d)(function (e) {
            return e.user.audioPlay;
          }),
          N = Object(a.useMemo)(
            function () {
              return T ? (w ? [w] : []) : Tr(Object.values(O), m);
            },
            [T, w, O, m]
          ),
          E = Object(a.useMemo)(
            function () {
              if (w) return [w];
              var e = N.sort(C),
                t = m
                  .toLowerCase()
                  .split(/\s+/)
                  .filter(function (e) {
                    return e.length > 0;
                  });
              return t.length > 1
                ? e
                : [].concat(
                    Object(xe.a)(w ? [w] : []),
                    Object(xe.a)(
                      e.filter(function (e) {
                        var n;
                        return (
                          (null === (n = e.symbol) || void 0 === n
                            ? void 0
                            : n.toLowerCase()) === t[0]
                        );
                      })
                    ),
                    Object(xe.a)(
                      e.filter(function (e) {
                        var n;
                        return (
                          (null === (n = e.symbol) || void 0 === n
                            ? void 0
                            : n.toLowerCase()) !== t[0]
                        );
                      })
                    )
                  );
            },
            [N, m, w, C]
          ),
          M = Object(a.useCallback)(
            function (e) {
              if ((n(e), s(), I && !g)) {
                var t = document.getElementById("bgMusic");
                t && t.play();
              }
            },
            [s, n, I, g]
          );
        Object(a.useEffect)(
          function () {
            o && f("");
          },
          [o]
        );
        var A = Object(a.useRef)(),
          S = Object(a.useCallback)(function (e) {
            var t,
              n = e.target.value,
              a = Yt(n);
            f(a || n),
              null === (t = d.current) || void 0 === t || t.scrollTo(0);
          }, []),
          R = Object(a.useCallback)(
            function (e) {
              if ("Enter" === e.key)
                if ("eth" === m.toLowerCase().trim()) M(ge.d);
                else if (E.length > 0) {
                  var t;
                  ((null === (t = E[0].symbol) || void 0 === t
                    ? void 0
                    : t.toLowerCase()) !== m.trim().toLowerCase() &&
                    1 !== E.length) ||
                    M(E[0]);
                }
            },
            [E, M, m]
          ),
          B = !Object(v.o)().isXl,
          _ =
            ((function () {
              var e,
                t,
                n = vn(),
                a = Object(b.d)(function (e) {
                  return e.lists.byUrl;
                }),
                i = n ? a[n] : void 0;
              (e = null === i || void 0 === i ? void 0 : i.current),
                (t = null === i || void 0 === i ? void 0 : i.pendingUpdate),
                null === i || void 0 === i || i.loadingRequestId;
            })(),
            cn());
        return Object(Qe.jsxs)(ht, {
          style: {
            width: "100%",
            flex: "1 1",
          },
          children: [
            Object(Qe.jsxs)(lr, {
              gap: "14px",
              children: [
                Object(Qe.jsxs)(gi, {
                  children: [
                    Object(Qe.jsx)(v.i, {
                      color: "var(--color-text-2)",
                      fontWeight: "600",
                      fontSize: "20px",
                      children: _(82, "Select Tokens"),
                    }),
                    Object(Qe.jsx)(v.c, {
                      onClick: s,
                    }),
                  ],
                }),
                Object(Qe.jsx)(pr, {
                  type: "text",
                  id: "token-search-input",
                  placeholder: c("tokenSearchPlaceholder"),
                  value: m,
                  ref: A,
                  onChange: S,
                  onKeyDown: R,
                }),
                r &&
                  Object(Qe.jsx)(Zi, {
                    chainId: u,
                    onSelect: M,
                    selectedCurrency: t,
                  }),
              ],
            }),
            B
              ? Object(Qe.jsx)(gr, {
                  height: 400,
                  showETH: k,
                  currencies: E,
                  onCurrencySelect: M,
                  otherCurrency: i,
                  selectedCurrency: t,
                  fixedListRef: d,
                })
              : Object(Qe.jsx)("div", {
                  style: {
                    flex: "1",
                  },
                  children: Object(Qe.jsx)(Qa.a, {
                    disableWidth: !0,
                    children: function (e) {
                      var n = e.height;
                      return Object(Qe.jsx)(gr, {
                        height: n,
                        showETH: k,
                        currencies: E,
                        onCurrencySelect: M,
                        otherCurrency: i,
                        selectedCurrency: t,
                        fixedListRef: d,
                      });
                    },
                  }),
                }),
            null,
          ],
        });
      }
      var Cr = n(1140),
        Ir = {
          pending: Object(N.b)("lists/fetchTokenList/pending"),
          fulfilled: Object(N.b)("lists/fetchTokenList/fulfilled"),
          rejected: Object(N.b)("lists/fetchTokenList/rejected"),
        },
        Nr = Object(N.b)("lists/acceptListUpdate"),
        Er = Object(N.b)("lists/addList"),
        Mr = Object(N.b)("lists/removeList"),
        Ar = Object(N.b)("lists/selectList"),
        Sr = (Object(N.b)("lists/rejectVersionUpdate"), n(503)),
        Rr = n(504),
        Br = n.n(Rr),
        _r = "pancakeswap",
        Ur = [_r],
        Dr = n(234),
        Pr = new Br.a({
          allErrors: !0,
        }).compile(Sr);

      function Fr(e, t) {
        return Lr.apply(this, arguments);
      }

      function Lr() {
        return (Lr = Object(u.a)(
          c.a.mark(function e(t, n) {
            var a, i, r, s, o, u, l, d, p, y, b, m, f;
            return c.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t !== _r) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", Dr);
                    case 2:
                      if (!(a = ei(t))) {
                        e.next = 25;
                        break;
                      }
                      return (e.prev = 4), (e.next = 7), n(a.ensName);
                    case 7:
                      (s = e.sent), (e.next = 14);
                      break;
                    case 10:
                      throw (
                        ((e.prev = 10),
                        (e.t0 = e.catch(4)),
                        console.error(
                          "Failed to resolve ENS name: ".concat(a.ensName),
                          e.t0
                        ),
                        new Error(
                          "Failed to resolve ENS name: ".concat(a.ensName)
                        ))
                      );
                    case 14:
                      (e.prev = 14), (o = Za(s)), (e.next = 22);
                      break;
                    case 18:
                      throw (
                        ((e.prev = 18),
                        (e.t1 = e.catch(14)),
                        console.error(
                          "Failed to translate contenthash to URI",
                          s
                        ),
                        new Error(
                          "Failed to translate contenthash to URI: ".concat(s)
                        ))
                      );
                    case 22:
                      (i = ti(
                        ""
                          .concat(o)
                          .concat(
                            null !== (r = a.ensPath) && void 0 !== r ? r : ""
                          )
                      )),
                        (e.next = 26);
                      break;
                    case 25:
                      i = ti(t);
                    case 26:
                      u = 0;
                    case 27:
                      if (!(u < i.length)) {
                        e.next = 57;
                        break;
                      }
                      return (
                        (l = i[u]),
                        (d = u === i.length - 1),
                        (p = void 0),
                        (e.prev = 31),
                        (e.next = 34),
                        fetch(l)
                      );
                    case 34:
                      (p = e.sent), (e.next = 43);
                      break;
                    case 37:
                      if (
                        ((e.prev = 37),
                        (e.t2 = e.catch(31)),
                        console.error("Failed to fetch list", t, e.t2),
                        !d)
                      ) {
                        e.next = 42;
                        break;
                      }
                      throw new Error("Failed to download list ".concat(t));
                    case 42:
                      return e.abrupt("continue", 54);
                    case 43:
                      if (p.ok) {
                        e.next = 47;
                        break;
                      }
                      if (!d) {
                        e.next = 46;
                        break;
                      }
                      throw new Error("Failed to download list ".concat(t));
                    case 46:
                      return e.abrupt("continue", 54);
                    case 47:
                      return (e.next = 49), p.json();
                    case 49:
                      if (((y = e.sent), Pr(y))) {
                        e.next = 53;
                        break;
                      }
                      throw (
                        ((f =
                          null !==
                            (b =
                              null === (m = Pr.errors) || void 0 === m
                                ? void 0
                                : m.reduce(function (e, t) {
                                    var n,
                                      a = ""
                                        .concat(t.dataPath, " ")
                                        .concat(
                                          null !== (n = t.message) &&
                                            void 0 !== n
                                            ? n
                                            : ""
                                        );
                                    return e.length > 0
                                      ? "".concat(e, "; ").concat(a)
                                      : "".concat(a);
                                  }, "")) && void 0 !== b
                            ? b
                            : "unknown error"),
                        new Error("Token list failed validation: ".concat(f)))
                      );
                    case 53:
                      return e.abrupt("return", y);
                    case 54:
                      u++, (e.next = 27);
                      break;
                    case 57:
                      throw new Error("Unrecognized list URL protocol.");
                    case 58:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [4, 10],
                [14, 18],
                [31, 37],
              ]
            );
          })
        )).apply(this, arguments);
      }
      var Yr = [
          {
            constant: !0,
            inputs: [
              {
                name: "node",
                type: "bytes32",
              },
            ],
            name: "resolver",
            outputs: [
              {
                name: "resolverAddress",
                type: "address",
              },
            ],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
        ],
        Wr = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
        zr = [
          {
            constant: !0,
            inputs: [
              {
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
              },
            ],
            name: "contenthash",
            outputs: [
              {
                internalType: "bytes",
                name: "",
                type: "bytes",
              },
            ],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
        ];

      function qr(e, t) {
        return new Dt.a(e, zr, t);
      }

      function Vr(e, t) {
        return Hr.apply(this, arguments);
      }

      function Hr() {
        return (Hr = Object(u.a)(
          c.a.mark(function e(t, n) {
            var a, i, r;
            return c.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = new Dt.a(Wr, Yr, n)),
                      (i = Object(ni.namehash)(t)),
                      (e.next = 4),
                      a.resolver(i)
                    );
                  case 4:
                    return (
                      (r = e.sent), e.abrupt("return", qr(r, n).contenthash(i))
                    );
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }

      function Qr() {
        var e = Ye(),
          t = e.chainId,
          n = e.library,
          i = Object(b.c)(),
          r = Object(a.useCallback)(
            function (e) {
              if (!n || t !== ge.a.MAINNET) {
                if (le === ge.a.MAINNET) {
                  var a = (function () {
                    var e;
                    return (de =
                      null !== (e = de) && void 0 !== e
                        ? e
                        : new Q.a(pe.provider));
                  })();
                  if (a) return Vr(e, a);
                }
                throw new Error("Could not construct mainnet ENS resolver");
              }
              return Vr(e, n);
            },
            [t, n]
          );
        return Object(a.useCallback)(
          (function () {
            var e = Object(u.a)(
              c.a.mark(function e(t) {
                var n;
                return c.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = Object(N.f)()),
                          i(
                            Ir.pending({
                              requestId: n,
                              url: t,
                            })
                          ),
                          e.abrupt(
                            "return",
                            Fr(t, r)
                              .then(function (e) {
                                return (
                                  i(
                                    Ir.fulfilled({
                                      url: t,
                                      tokenList: e,
                                      requestId: n,
                                    })
                                  ),
                                  e
                                );
                              })
                              .catch(function (e) {
                                throw (
                                  (console.error(
                                    "Failed to get list at url ".concat(t),
                                    e
                                  ),
                                  i(
                                    Ir.rejected({
                                      url: t,
                                      requestId: n,
                                      errorMessage: e.message,
                                    })
                                  ),
                                  e)
                                );
                              })
                          )
                        );
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          [i, r]
        );
      }

      function Jr(e, t) {
        var n = Object(a.useRef)(t);
        Object(a.useEffect)(
          function () {
            n.current = t;
          },
          [t]
        ),
          Object(a.useEffect)(
            function () {
              var t = function (t) {
                var a, i;
                (null !==
                  (a =
                    null === (i = e.current) || void 0 === i
                      ? void 0
                      : i.contains(t.target)) &&
                  void 0 !== a &&
                  a) ||
                  (n.current && n.current());
              };
              return (
                document.addEventListener("mousedown", t),
                function () {
                  document.removeEventListener("mousedown", t);
                }
              );
            },
            [e]
          );
      }
      var Gr, Kr, Xr, Zr, $r;
      var es = Object(q.default)(Ot)(
          Gr ||
            (Gr = Object(W.a)([
              "\n\tpadding: 0;\n\tfont-size: 1rem;\n\topacity: ",
              ";\n",
            ])),
          function (e) {
            return e.disabled ? "0.4" : "1";
          }
        ),
        ts = q.default.div(
          Kr ||
            (Kr = Object(W.a)([
              "\n\tz-index: 100;\n\tvisibility: ",
              ";\n\topacity: ",
              ";\n\ttransition: visibility 150ms linear, opacity 150ms linear;\n\tbackground: ",
              ";\n\tborder: 1px solid ",
              ";\n\tbox-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n\t\t0px 24px 32px rgba(0, 0, 0, 0.01);\n\tcolor: ",
              ";\n\tborder-radius: 0.5rem;\n\tpadding: 1rem;\n\tdisplay: grid;\n\tgrid-template-rows: 1fr;\n\tgrid-gap: 8px;\n\tfont-size: 1rem;\n\ttext-align: left;\n",
            ])),
          function (e) {
            return e.show ? "visible" : "hidden";
          },
          function (e) {
            return e.show ? 1 : 0;
          },
          function (e) {
            return e.theme.colors.invertedContrast;
          },
          function (e) {
            return e.theme.colors.tertiary;
          },
          function (e) {
            return e.theme.colors.textSubtle;
          }
        ),
        ns = q.default.div(
          Xr ||
            (Xr = Object(W.a)([
              "\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: relative;\n\tborder: none;\n",
            ]))
        ),
        as = q.default.div(
          Zr ||
            (Zr = Object(W.a)([
              "\n\tmax-width: 160px;\n\topacity: 0.6;\n\tmargin-right: 0.5rem;\n\tfont-size: 14px;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n",
            ]))
        );

      function is(e) {
        var t = e.listUrl,
          n = Object(a.useMemo)(
            function () {
              var e;
              return null === (e = ei(t)) || void 0 === e ? void 0 : e.ensName;
            },
            [t]
          ),
          i = Object(a.useMemo)(
            function () {
              if (!n) {
                var e = t.toLowerCase();
                if (e.startsWith("ipfs://") || e.startsWith("ipns://"))
                  return t;
                try {
                  return new URL(t).host;
                } catch (a) {
                  return;
                }
              }
            },
            [t, n]
          );
        return Object(Qe.jsx)(Qe.Fragment, {
          children: null !== n && void 0 !== n ? n : i,
        });
      }

      function rs(e) {
        return "list-row-".concat(e.replace(/\./g, "-"));
      }
      var ss = Object(a.memo)(function (e) {
          var t = e.listUrl,
            n = e.onBack,
            i = Object(b.d)(function (e) {
              return e.lists.byUrl;
            }),
            r = vn(),
            s = Object(b.c)(),
            o = i[t],
            c = o.current,
            u = o.pendingUpdate,
            d = t === r,
            p = (function () {
              var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t = Object(a.useState)(e),
                n = Object(l.a)(t, 2),
                i = n[0],
                r = n[1],
                s = Object(a.useCallback)(function () {
                  return r(function (e) {
                    return !e;
                  });
                }, []);
              return [i, s];
            })(!1),
            y = Object(l.a)(p, 2),
            m = y[0],
            f = y[1],
            j = Object(a.useRef)(),
            h = Object(a.useState)(),
            x = Object(l.a)(h, 2),
            O = x[0],
            g = x[1],
            T = Object(a.useState)(),
            w = Object(l.a)(T, 2),
            k = w[0],
            C = w[1],
            I = Object(Ni.a)(O, k, {
              placement: "auto",
              strategy: "fixed",
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [8, 8],
                  },
                },
              ],
            }),
            N = I.styles,
            E = I.attributes;
          Jr(j, m ? f : void 0);
          var M,
            A = Object(a.useCallback)(
              function () {
                d || (s(Ar(t)), n());
              },
              [s, d, t, n]
            ),
            S = Object(a.useCallback)(
              function () {
                u && s(Nr(t));
              },
              [s, t, u]
            ),
            R = Object(a.useCallback)(
              function () {
                "REMOVE" ===
                  window.prompt(
                    "Please confirm you would like to remove this list by typing REMOVE"
                  ) && s(Mr(t));
              },
              [s, t]
            ),
            B = cn();
          return c
            ? Object(Qe.jsxs)(
                Ii,
                {
                  align: "center",
                  padding: "16px",
                  id: rs(t),
                  children: [
                    c.logoURI
                      ? Object(Qe.jsx)(li, {
                          style: {
                            marginRight: "1rem",
                          },
                          logoURI: c.logoURI,
                          alt: "".concat(c.name, " list logo"),
                        })
                      : Object(Qe.jsx)("div", {
                          style: {
                            width: "24px",
                            height: "24px",
                            marginRight: "1rem",
                          },
                        }),
                    Object(Qe.jsxs)(ht, {
                      style: {
                        flex: "1",
                      },
                      children: [
                        Object(Qe.jsx)(Ii, {
                          children: Object(Qe.jsx)(v.i, {
                            bold: d,
                            fontSize: "16px",
                            style: {
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            },
                            children: c.name,
                          }),
                        }),
                        Object(Qe.jsx)(Ii, {
                          style: {
                            marginTop: "4px",
                          },
                          children: Object(Qe.jsx)(as, {
                            title: t,
                            children: Object(Qe.jsx)(is, {
                              listUrl: t,
                            }),
                          }),
                        }),
                      ],
                    }),
                    Object(Qe.jsxs)(ns, {
                      ref: j,
                      children: [
                        Object(Qe.jsx)("div", {
                          style: {
                            display: "inline-block",
                          },
                          ref: g,
                          children: Object(Qe.jsx)(v.a, {
                            style: {
                              width: "32px",
                              marginRight: "8px",
                            },
                            onClick: f,
                            variant: "secondary",
                            children: Object(Qe.jsx)(v.b, {}),
                          }),
                        }),
                        m &&
                          Object(Qe.jsxs)(
                            ts,
                            Object(Oe.a)(
                              Object(Oe.a)(
                                {
                                  show: !0,
                                  ref: C,
                                  style: N.popper,
                                },
                                E.popper
                              ),
                              {},
                              {
                                children: [
                                  Object(Qe.jsx)("div", {
                                    children:
                                      c &&
                                      ((M = c.version),
                                      "v"
                                        .concat(M.major, ".")
                                        .concat(M.minor, ".")
                                        .concat(M.patch)),
                                  }),
                                  Object(Qe.jsx)(br, {}),
                                  Object(Qe.jsx)(Tt, {
                                    href: "https://tokenlists.org/token-list?url=".concat(
                                      t
                                    ),
                                    children: B(1206, "View list"),
                                  }),
                                  Object(Qe.jsx)(es, {
                                    onClick: R,
                                    disabled: 1 === Object.keys(i).length,
                                    children: "Remove list",
                                  }),
                                  u &&
                                    Object(Qe.jsx)(es, {
                                      onClick: S,
                                      children: "Update list",
                                    }),
                                ],
                              }
                            )
                          ),
                      ],
                    }),
                    d
                      ? Object(Qe.jsx)(v.a, {
                          disabled: !0,
                          style: {
                            width: "5rem",
                            minWidth: "5rem",
                          },
                          children: "Selected",
                        })
                      : Object(Qe.jsx)(Qe.Fragment, {
                          children: Object(Qe.jsx)(v.a, {
                            className: "select-button",
                            style: {
                              width: "5rem",
                              minWidth: "4.5rem",
                            },
                            onClick: A,
                            children: "Select",
                          }),
                        }),
                  ],
                },
                t
              )
            : null;
        }),
        os = q.default.div(
          $r || ($r = Object(W.a)(["\n\tflex: 1;\n\toverflow: auto;\n"]))
        );

      function cs(e) {
        var t,
          n = e.onDismiss,
          i = e.onBack,
          r = Object(a.useState)(""),
          s = Object(l.a)(r, 2),
          o = s[0],
          c = s[1],
          u = Object(b.c)(),
          d = Object(b.d)(function (e) {
            return e.lists.byUrl;
          }),
          p = Boolean(
            null === (t = d[o]) || void 0 === t ? void 0 : t.loadingRequestId
          ),
          y = Object(a.useState)(null),
          m = Object(l.a)(y, 2),
          f = m[0],
          j = m[1],
          h = Object(a.useCallback)(function (e) {
            c(e.target.value), j(null);
          }, []),
          x = Qr(),
          O = Object(a.useCallback)(
            function () {
              p ||
                (j(null),
                x(o)
                  .then(function () {
                    c("");
                  })
                  .catch(function (e) {
                    j(e.message), u(Mr(o));
                  }));
            },
            [p, u, x, o]
          ),
          g = Object(a.useMemo)(
            function () {
              return ti(o).length > 0 || Boolean(ei(o));
            },
            [o]
          ),
          T = Object(a.useCallback)(
            function (e) {
              g && "Enter" === e.key && O();
            },
            [O, g]
          ),
          w = Object(a.useMemo)(
            function () {
              return Object.keys(d)
                .filter(function (e) {
                  return Boolean(d[e].current);
                })
                .sort(function (e, t) {
                  var n = d[e].current,
                    a = d[t].current;
                  return n && a
                    ? n.name.toLowerCase() < a.name.toLowerCase()
                      ? -1
                      : n.name.toLowerCase() === a.name.toLowerCase()
                      ? 0
                      : 1
                    : n
                    ? -1
                    : a
                    ? 1
                    : 0;
                });
            },
            [d]
          ),
          k = cn();
        return Object(Qe.jsxs)(ht, {
          style: {
            width: "100%",
            flex: "1 1",
          },
          children: [
            Object(Qe.jsx)(lr, {
              children: Object(Qe.jsxs)(gi, {
                children: [
                  Object(Qe.jsx)("div", {
                    children: Object(Qe.jsx)(Cr.a, {
                      style: {
                        cursor: "pointer",
                      },
                      onClick: i,
                    }),
                  }),
                  Object(Qe.jsx)(v.i, {
                    fontSize: "20px",
                    children: k(1208, "Manage Lists"),
                  }),
                  Object(Qe.jsx)(v.c, {
                    onClick: n,
                  }),
                ],
              }),
            }),
            Object(Qe.jsx)(yr, {}),
            Object(Qe.jsxs)(lr, {
              gap: "14px",
              children: [
                Object(Qe.jsxs)(v.i, {
                  bold: !0,
                  children: [
                    "Add a list",
                    " ",
                    Object(Qe.jsx)(Wi, {
                      text: k(
                        999,
                        "Token lists are an open specification for lists of BEP20 tokens. You can use any token list by entering its URL below. Beware that third party token lists can contain fake or malicious BEP20 tokens."
                      ),
                    }),
                  ],
                }),
                Object(Qe.jsxs)(Ii, {
                  children: [
                    Object(Qe.jsx)(pr, {
                      type: "text",
                      id: "list-add-input",
                      placeholder: "https:// or ipfs:// or ENS name",
                      value: o,
                      onChange: h,
                      onKeyDown: T,
                      style: {
                        height: "2.75rem",
                        borderRadius: 12,
                        padding: "12px",
                      },
                    }),
                    Object(Qe.jsx)(v.a, {
                      onClick: O,
                      style: {
                        maxWidth: "4em",
                        marginLeft: "1em",
                      },
                      disabled: !g,
                      children: "Add",
                    }),
                  ],
                }),
                f
                  ? Object(Qe.jsx)(v.i, {
                      color: "failure",
                      title: f,
                      style: {
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                      },
                      children: f,
                    })
                  : null,
              ],
            }),
            Object(Qe.jsx)(yr, {}),
            Object(Qe.jsx)(os, {
              children: w.map(function (e) {
                return Object(Qe.jsx)(
                  ss,
                  {
                    listUrl: e,
                    onBack: i,
                  },
                  e
                );
              }),
            }),
            Object(Qe.jsx)(yr, {}),
            Object(Qe.jsx)("div", {
              style: {
                padding: "16px",
                textAlign: "center",
              },
              children: Object(Qe.jsx)(Tt, {
                href: "https://tokenlists.org",
                children: "Browse lists",
              }),
            }),
          ],
        });
      }
      var us, ls, ds;

      function ps(e) {
        var t = e.isOpen,
          n = e.onDismiss,
          i = e.onCurrencySelect,
          r = e.selectedCurrency,
          s = e.otherSelectedCurrency,
          o = Object(a.useState)(!1),
          c = Object(l.a)(o, 2),
          u = c[0],
          d = c[1],
          p = Ba(t);
        Object(a.useEffect)(
          function () {
            t && !p && d(!1);
          },
          [t, p]
        );
        var y = Object(a.useCallback)(
            function (e) {
              i(e), n();
            },
            [n, i]
          ),
          b = Object(a.useCallback)(function () {
            d(!0);
          }, []),
          m = Object(a.useCallback)(function () {
            d(!1);
          }, []),
          f = !vn();
        return Object(Qe.jsx)(Ha, {
          isOpen: t,
          onDismiss: n,
          maxHeight: 90,
          minHeight: u ? 40 : f ? 0 : 80,
          children: u
            ? Object(Qe.jsx)(cs, {
                onDismiss: n,
                onBack: m,
              })
            : Object(Qe.jsx)(kr, {
                isOpen: t,
                onDismiss: n,
                onCurrencySelect: y,
                onChangeList: b,
                selectedCurrency: r,
                otherSelectedCurrency: s,
                showCommonBases: !1,
              }),
        });
      }
      var ys,
        bs = q.default.div(
          us ||
            (us = Object(W.a)([
              "\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: row;\n\tmargin-right: ",
              ";\n",
            ])),
          function (e) {
            var t = e.sizeraw;
            return e.margin && "".concat((t / 2.5 + 8).toString(), "px");
          }
        ),
        ms = Object(q.default)(Ki)(
          ls || (ls = Object(W.a)(["\n\tz-index: 10;\n"]))
        ),
        fs = Object(q.default)(Ki)(
          ds ||
            (ds = Object(W.a)(["\n\tposition: absolute;\n\tleft: ", ";\n"])),
          function (e) {
            var t = e.sizeraw;
            return "".concat((t / 2).toString(), "px");
          }
        );

      function js(e) {
        var t = e.currency0,
          n = e.currency1,
          a = e.size,
          i = void 0 === a ? 16 : a,
          r = e.margin,
          s = void 0 !== r && r;
        return Object(Qe.jsxs)(bs, {
          sizeraw: i,
          margin: s,
          children: [
            t &&
              Object(Qe.jsx)(ms, {
                currency: t,
                size: "".concat(i.toString(), "px"),
                style: {
                  zIndex: 1,
                },
              }),
            n &&
              Object(Qe.jsx)(fs, {
                currency: n,
                size: "".concat(i.toString(), "px"),
                style: {
                  position: "absolute",
                  left: "".concat((i / 1.5).toString(), "px"),
                },
                sizeraw: i,
              }),
          ],
        });
      }
      var vs,
        hs,
        xs,
        Os,
        gs,
        Ts,
        ws = q.default.input(
          ys ||
            (ys = Object(W.a)([
              "\n\tcolor: ",
              ";\n\twidth: 0;\n\tposition: relative;\n\tfont-weight: 500;\n\toutline: none;\n\tborder: none;\n\tflex: 1 1 auto;\n\tbackground-color: transparent;\n\tfont-size: 16px;\n\ttext-align: ",
              ";\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tpadding: 0px;\n\t-webkit-appearance: textfield;\n\n\t::-webkit-search-decoration {\n\t\t-webkit-appearance: none;\n\t}\n\n\t[type='number'] {\n\t\t-moz-appearance: textfield;\n\t}\n\n\t::-webkit-outer-spin-button,\n\t::-webkit-inner-spin-button {\n\t\t-webkit-appearance: none;\n\t}\n\t:focus,\n\t:hover {\n\t\tborder: 0;\n\t}\n\t::placeholder {\n\t\tcolor: #b3b3b3;\n\t}\n",
            ])),
          function (e) {
            var t = e.error,
              n = e.theme;
            return t ? n.colors.failure : n.colors.text;
          },
          function (e) {
            var t = e.align;
            return t && t;
          }
        ),
        ks = RegExp("^\\d*(?:\\\\[.])?\\d*$"),
        Cs = i.a.memo(function (e) {
          var t = e.value,
            n = e.onUserInput,
            a = e.placeholder,
            i = Object(He.a)(e, ["value", "onUserInput", "placeholder"]);
          return Object(Qe.jsx)(
            ws,
            Object(Oe.a)(
              Object(Oe.a)({}, i),
              {},
              {
                value: t,
                onChange: function (e) {
                  var t;
                  ("" === (t = e.target.value.replace(/,/g, ".")) ||
                    ks.test(t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))) &&
                    n(t);
                },
                inputMode: "decimal",
                title: "Token Amount",
                autoComplete: "off",
                autoCorrect: "off",
                type: "text",
                pattern: "^[0-9]*[.,]?[0-9]*$",
                placeholder: a || "0.0",
                minLength: 1,
                maxLength: 79,
                spellCheck: "false",
              }
            )
          );
        }),
        Is = q.default.div(
          vs ||
            (vs = Object(W.a)([
              "\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: center;\n\tcolor: #b3b3b3;\n\twidth: ",
              ";\n\tpadding: ",
              ";\n\n\t",
              " {\n\t\twidth: ",
              ";\n\t}\n",
            ])),
          function (e) {
            return e.isPair ? "40%" : "100%";
          },
          function (e) {
            return e.selected
              ? "0.75rem 0.5rem 0.75rem 1rem"
              : "0.75rem 0.75rem 0.75rem 1rem";
          },
          function (e) {
            return e.theme.mediaQueries.lg;
          },
          function (e) {
            return e.isPair ? "35%" : "100%";
          }
        ),
        Ns = q.default.button(
          hs ||
            (hs = Object(W.a)([
              "\n\talign-items: center;\n\theight: 34px;\n\twidth: 60%;\n\tfont-size: 16px;\n\tfont-weight: 500;\n\tbackground-color: transparent;\n\tcolor: ",
              ";\n\tborder-radius: 12px;\n\toutline: none;\n\tcursor: pointer;\n\tuser-select: none;\n\tborder: none;\n\tborder-radius: 7px;\n\tpadding: 0 0.5rem;\n\n\t:hover {\n\t\tbackground-color: var(--color-background-10);\n\t}\n\n\t",
              " {\n\t\twidth: 180px;\n\t}\n",
            ])),
          function (e) {
            var t = e.selected,
              n = e.theme;
            return t ? n.colors.text : "#FFFFFF";
          },
          function (e) {
            return e.theme.mediaQueries.lg;
          }
        ),
        Es =
          (q.default.div(
            xs ||
              (xs = Object(W.a)([
                "\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: center;\n\tcolor: ",
                ";\n\tfont-size: 0.75rem;\n\tline-height: 1rem;\n\tpadding: 0.75rem 1rem 0 1rem;\n\tspan:hover {\n\t\tcursor: pointer;\n\t\tcolor: ",
                ";\n\t}\n",
              ])),
            function (e) {
              return e.theme.colors.text;
            },
            function (e) {
              var t = e.theme;
              return Object(tn.a)(0.2, t.colors.textSubtle);
            }
          ),
          q.default.span(
            Os ||
              (Os = Object(W.a)([
                "\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n",
              ]))
          )),
        Ms = q.default.div(
          gs ||
            (gs = Object(W.a)([
              "\n\tdisplay: flex;\n\tflex-flow: column nowrap;\n\tposition: relative;\n\tz-index: 1;\n",
            ]))
        ),
        As = q.default.div(
          Ts ||
            (Ts = Object(W.a)([
              "\n\tborder: 1px solid var(--color-border);\n\tborder-radius: 15px;\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 10px;\n\tbackground: var(--color-background-2);\n",
            ]))
        );

      function Ss(e) {
        var t = e.value,
          n = e.onUserInput,
          i = e.onMax,
          r = (e.showMaxButton, e.label),
          s = e.onCurrencySelect,
          o = e.currency,
          c = e.disableCurrencySelect,
          u = void 0 !== c && c,
          d = e.hideBalance,
          p = void 0 !== d && d,
          y = e.pair,
          b = void 0 === y ? null : y,
          m = e.hideInput,
          f = void 0 !== m && m,
          j = e.otherCurrency,
          h = e.id,
          x = e.showCommonBases,
          O = Object(a.useState)(!1),
          g = Object(l.a)(O, 2),
          T = g[0],
          w = g[1],
          k = Ye().account,
          C = Ra(
            null !== k && void 0 !== k ? k : void 0,
            null !== o && void 0 !== o ? o : void 0
          ),
          I = cn(),
          N =
            (r || I(132, "Input"),
            Object(a.useCallback)(
              function () {
                w(!1);
              },
              [w]
            )),
          E = !Object(v.o)().isXl;
        return Object(Qe.jsxs)(Ms, {
          id: h,
          children: [
            Object(Qe.jsxs)("div", {
              style: {
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "6px",
                color: "var(--color-text-2)",
              },
              children: [
                Object(Qe.jsxs)("p", {
                  style: {
                    fontWeight: 700,
                    fontSize: E ? "15px" : "18px",
                    color: "var(--color-text-2)",
                  },
                  children: [
                    "You ",
                    "liquidity-remove" === h ? "Remove" : "Add",
                  ],
                }),
                Object(Qe.jsx)(v.i, {
                  onClick: i,
                  fontSize: "13px",
                  style: {
                    display: "inline",
                    cursor: "pointer",
                    color: !p && o && C ? "var(--color-text-2)" : "#969696",
                  },
                  children:
                    !p && o && C
                      ? "Balance: ".concat(
                          null === C || void 0 === C
                            ? void 0
                            : C.toSignificant(6)
                        )
                      : "Balance: 0.00  ($0.00)",
                }),
              ],
            }),
            Object(Qe.jsxs)(As, {
              hideInput: f,
              children: [
                Object(Qe.jsx)(Ns, {
                  selected: !!o,
                  className: "open-currency-select-button",
                  onClick: function () {
                    u || w(!0);
                  },
                  children: Object(Qe.jsxs)(Es, {
                    children: [
                      b
                        ? Object(Qe.jsx)(js, {
                            currency0: b.token0,
                            currency1: b.token1,
                            size: 33,
                            margin: !0,
                          })
                        : o
                        ? Object(Qe.jsx)(Ki, {
                            currency: o,
                            size: "24px",
                            style: {
                              marginRight: "8px",
                            },
                          })
                        : null,
                      b
                        ? Object(Qe.jsxs)(v.i, {
                            color: "var(--color-text-2)",
                            fontSize: E ? "13px" : "15px",
                            fontWeight: "bold",
                            children: [
                              null === b || void 0 === b
                                ? void 0
                                : b.token0.symbol,
                              " - ",
                              null === b || void 0 === b
                                ? void 0
                                : b.token1.symbol,
                            ],
                          })
                        : Object(Qe.jsx)(v.i, {
                            color: "var(--color-text-2)",
                            fontSize: E ? "13px" : "15px",
                            fontWeight: "bold",
                            children:
                              (o && o.symbol && o.symbol.length > 20
                                ? ""
                                    .concat(o.symbol.slice(0, 4), "...")
                                    .concat(
                                      o.symbol.slice(
                                        o.symbol.length - 5,
                                        o.symbol.length
                                      )
                                    )
                                : null === o || void 0 === o
                                ? void 0
                                : o.symbol) || I(1196, "Select"),
                          }),
                      !u &&
                        Object(Qe.jsx)(v.b, {
                          color: "var(--color-text-2)",
                        }),
                    ],
                  }),
                }),
                Object(Qe.jsx)(Is, {
                  style: f
                    ? {
                        padding: "0",
                        borderRadius: "8px",
                      }
                    : {},
                  isPair: null !== b,
                  selected: u,
                  children:
                    !f &&
                    Object(Qe.jsx)(Qe.Fragment, {
                      children: Object(Qe.jsx)(Cs, {
                        className: "token-amount-input",
                        style: {
                          color: "var(--color-text-2)",
                          fontSize: "22px",
                          fontWeight: "normal",
                          border: 0,
                        },
                        value: t,
                        onUserInput: function (e) {
                          n(e);
                        },
                      }),
                    }),
                }),
              ],
            }),
            !u &&
              s &&
              Object(Qe.jsx)(ps, {
                isOpen: T,
                onDismiss: N,
                onCurrencySelect: s,
                selectedCurrency: o,
                otherSelectedCurrency: j,
                showCommonBases: x,
              }),
          ],
        });
      }
      var Rs = n(1141),
        Bs = n(1142);

      function _s(e) {
        var t,
          n,
          a =
            null ===
              (t = qn(
                ha(null === e || void 0 === e ? void 0 : e.address, !1),
                "totalSupply"
              )) ||
            void 0 === t ||
            null === (n = t.result) ||
            void 0 === n
              ? void 0
              : n[0];
        return e && a ? new ge.j(e, a.toString()) : void 0;
      }

      function Us(e) {
        if (e === ge.d) return "ETH";
        if (e instanceof ge.i) return e.address;
        throw new Error("invalid currency");
      }
      var Ds, Ps, Fs, Ls, Ys, Ws, zs, qs, Vs, Hs, Qs;

      function Js(e, t) {
        return t && e === ge.d ? ge.l[t] : e instanceof ge.i ? e : void 0;
      }

      function Gs(e, t) {
        var n = e && t ? Js(e.currency, t) : void 0;
        return n && e ? new ge.j(n, e.raw) : void 0;
      }

      function Ks(e) {
        return e.equals(ge.l[e.chainId]) ? ge.d : e;
      }
      q.default.div(Ds || (Ds = Object(W.a)(["\n\tposition: relative;\n"]))),
        q.default.div(
          Ps || (Ps = Object(W.a)(["\n\tpadding: 2px;\n\n\t", "\n"])),
          function (e) {
            return e.clickable
              ? Object(q.css)(
                  Fs ||
                    (Fs = Object(W.a)([
                      "\n\t\t\t\t\t:hover {\n\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t\topacity: 0.8;\n\t\t\t\t\t}\n\t\t\t  ",
                    ]))
                )
              : null;
          }
        ),
        q.default.div(
          Ls ||
            (Ls = Object(W.a)([
              "\n\theight: 1px;\n\twidth: 100%;\n\tbackground-color: ",
              ";\n",
            ])),
          function (e) {
            return e.theme.colors.tertiary;
          }
        ),
        q.default.div(Ys || (Ys = Object(W.a)(["\n\tmargin-top: 1rem;\n"]))),
        Object(q.default)(v.i)(
          Ws || (Ws = Object(W.a)(["\n\tcolor: ", ";\n"])),
          function (e) {
            var t = e.theme,
              n = e.severity;
            return 3 === n || 4 === n
              ? t.colors.failure
              : 2 === n
              ? t.colors.binance
              : 1 === n
              ? t.colors.text
              : t.colors.success;
          }
        ),
        q.default.button(
          zs ||
            (zs = Object(W.a)([
              "\n\theight: 22px;\n\twidth: 22px;\n\tbackground-color: ",
              ";\n\tborder: none;\n\tborder-radius: 50%;\n\tpadding: 0.2rem;\n\tfont-size: 0.875rem;\n\tfont-weight: 400;\n\tmargin-left: 0.4rem;\n\tcursor: pointer;\n\tcolor: ",
              ";\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfloat: right;\n\n\t:hover {\n\t\tbackground-color: ",
              ";\n\t}\n\t:focus {\n\t\tbackground-color: ",
              ";\n\t\toutline: none;\n\t}\n",
            ])),
          function (e) {
            return e.theme.colors.invertedContrast;
          },
          function (e) {
            return e.theme.colors.textSubtle;
          },
          function (e) {
            return e.theme.colors.tertiary;
          },
          function (e) {
            return e.theme.colors.tertiary;
          }
        );
      var Xs = q.default.span(
        qs ||
          (qs = Object(W.a)([
            "\n\t&::after {\n\t\tdisplay: inline-block;\n\t\tanimation: ellipsis 1.25s infinite;\n\t\tcontent: '.';\n\t\twidth: 1em;\n\t\ttext-align: left;\n\t}\n\t@keyframes ellipsis {\n\t\t0% {\n\t\t\tcontent: '.';\n\t\t}\n\t\t33% {\n\t\t\tcontent: '..';\n\t\t}\n\t\t66% {\n\t\t\tcontent: '...';\n\t\t}\n\t}\n",
          ]))
      );
      q.default.div(
        Vs ||
          (Vs = Object(W.a)([
            "\n\tbackground-color: ",
            ";\n\tborder-radius: 1rem;\n\tdisplay: flex;\n\talign-items: center;\n\tfont-size: 0.825rem;\n\twidth: 100%;\n\tpadding: 3rem 1.25rem 1rem 1rem;\n\tmargin-top: -2rem;\n\tcolor: ",
            ";\n\tz-index: -1;\n\tp {\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t\tfont-weight: 500;\n\t}\n",
          ])),
        function (e) {
          var t = e.theme;
          return Object(tn.b)(0.9, t.colors.failure);
        },
        function (e) {
          return e.theme.colors.failure;
        }
      ),
        q.default.div(
          Hs ||
            (Hs = Object(W.a)([
              "\n\tbackground-color: ",
              ";\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin-right: 12px;\n\tborder-radius: 12px;\n\tmin-width: 48px;\n\theight: 48px;\n",
            ])),
          function (e) {
            var t = e.theme;
            return Object(tn.b)(0.9, t.colors.failure);
          }
        );
      Object(q.default)(vt)(
        Qs ||
          (Qs = Object(W.a)([
            "\n\tbackground-color: ",
            ";\n\tcolor: ",
            ";\n\tpadding: 0.5rem;\n\tborder-radius: 12px;\n\tmargin-top: 8px;\n",
          ])),
        function (e) {
          var t = e.theme;
          return Object(tn.b)(0.9, t.colors.primary);
        },
        function (e) {
          return e.theme.colors.primary;
        }
      );
      var Zs,
        $s,
        eo,
        to,
        no = Object(q.default)(gi)(
          Zs || (Zs = Object(W.a)(["\n\theight: 24px;\n"]))
        ),
        ao = Object(q.default)(bt)(
          $s ||
            ($s = Object(W.a)([
              "\n\tborder-bottom: 1px solid var(--color-border-2);\n",
            ]))
        ),
        io = Object(q.default)(v.a)(
          eo ||
            (eo = Object(W.a)([
              "\n\tbackground: #18b2a1;\n\theight: 55px;\n\tborder-radius: 15px;\n\tpadding: 20px;\n\ttext-align: center;\n\tcolor: #fff;\n\tfont-weight: bold;\n\tfont-size: 14px;\n",
            ]))
        ),
        ro = Object(q.default)(v.a)(
          to ||
            (to = Object(W.a)([
              "\n\tbackground: #fb7979;\n\theight: 55px;\n\tborder-radius: 15px;\n\tpadding: 20px;\n\ttext-align: center;\n\tcolor: #fff;\n\tfont-weight: bold;\n\tfont-size: 14px;\n",
            ]))
        );

      function so(e) {
        var t = e.pair,
          n = e.showUnwrapped,
          i = void 0 !== n && n,
          r = Ye().account,
          s = i ? t.token0 : Ks(t.token0),
          o = i ? t.token1 : Ks(t.token1),
          c = Object(a.useState)(!1),
          u = Object(l.a)(c, 2),
          d =
            (u[0],
            u[1],
            Aa(null !== r && void 0 !== r ? r : void 0, t.liquidityToken)),
          p = _s(t.liquidityToken),
          y =
            t && p && d && ge.e.greaterThanOrEqual(p.raw, d.raw)
              ? [
                  t.getLiquidityValue(t.token0, p, d, !1),
                  t.getLiquidityValue(t.token1, p, d, !1),
                ]
              : [void 0, void 0],
          b = Object(l.a)(y, 2),
          m = b[0],
          f = b[1];
        return Object(Qe.jsx)(Qe.Fragment, {
          children:
            d &&
            Object(Qe.jsxs)("div", {
              children: [
                Object(Qe.jsx)("div", {
                  style: {
                    display: "inline-flex",
                    justifyContent: "space-between",
                    width: "100%",
                    marginBottom: "37px",
                  },
                  children: Object(Qe.jsx)("p", {
                    style: {
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "var(--color-text)",
                    },
                    children: "LP Tokens in your Wallet",
                  }),
                }),
                Object(Qe.jsx)("div", {
                  style: {
                    padding: "10px 0 15px 0",
                    borderBottom: "1px solid var(--color-border-4)",
                  },
                  children: Object(Qe.jsxs)(Ci, {
                    children: [
                      Object(Qe.jsxs)(Ti, {
                        justify: "flex-start",
                        children: [
                          Object(Qe.jsx)(js, {
                            currency0: s,
                            currency1: o,
                            size: 33,
                            margin: !0,
                          }),
                          Object(Qe.jsxs)("p", {
                            style: {
                              color: "var(--color-text-2)",
                              fontWeight: 500,
                              fontSize: "15px",
                              marginLeft: "8px",
                            },
                            children: [s.symbol, "/", o.symbol],
                          }),
                        ],
                      }),
                      Object(Qe.jsx)("p", {
                        style: {
                          color: "var(--color-text-2)",
                          fontWeight: "bold",
                          fontSize: "15px",
                        },
                        children: d ? d.toSignificant(4) : "-",
                      }),
                    ],
                  }),
                }),
                Object(Qe.jsx)("div", {
                  style: {
                    padding: "10px 0 15px 0",
                    borderBottom: "1px solid var(--color-border-4)",
                  },
                  children: Object(Qe.jsxs)(Ci, {
                    children: [
                      Object(Qe.jsxs)(Ti, {
                        justify: "flex-start",
                        children: [
                          Object(Qe.jsx)(Ki, {
                            currency: s,
                            size: "33px",
                            style: {
                              marginRight: 8,
                            },
                          }),
                          Object(Qe.jsx)("p", {
                            style: {
                              color: "var(--color-text-2)",
                              fontWeight: 500,
                              fontSize: "15px",
                            },
                            children: s.symbol,
                          }),
                        ],
                      }),
                      m &&
                        Object(Qe.jsx)("p", {
                          style: {
                            color: "var(--color-text-2)",
                            fontWeight: "bold",
                            fontSize: "15px",
                          },
                          children:
                            null === m || void 0 === m
                              ? void 0
                              : m.toSignificant(6),
                        }),
                    ],
                  }),
                }),
                Object(Qe.jsx)("div", {
                  style: {
                    padding: "10px 0 15px 0",
                    borderBottom: "1px solid var(--color-border-4)",
                  },
                  children: Object(Qe.jsxs)(Ci, {
                    children: [
                      Object(Qe.jsxs)(Ti, {
                        justify: "flex-start",
                        children: [
                          Object(Qe.jsx)(Ki, {
                            currency: o,
                            size: "33px",
                            style: {
                              marginRight: 8,
                            },
                          }),
                          Object(Qe.jsx)("p", {
                            style: {
                              color: "var(--color-text-2)",
                              fontWeight: 500,
                              fontSize: "15px",
                            },
                            children: o.symbol,
                          }),
                        ],
                      }),
                      f &&
                        Object(Qe.jsx)("p", {
                          style: {
                            color: "var(--color-text-2)",
                            fontWeight: "bold",
                            fontSize: "15px",
                          },
                          children:
                            null === f || void 0 === f
                              ? void 0
                              : f.toSignificant(6),
                        }),
                    ],
                  }),
                }),
              ],
            }),
        });
      }

      function oo(e) {
        var t = e.pair,
          n = Ye().account,
          i = Y().spaceMode,
          r = Ks(t.token0),
          s = Ks(t.token1),
          o = Object(a.useState)(!1),
          c = Object(l.a)(o, 2),
          u = c[0],
          p = c[1],
          y = Aa(null !== n && void 0 !== n ? n : void 0, t.liquidityToken),
          b = _s(t.liquidityToken),
          m =
            y && b && ge.e.greaterThanOrEqual(b.raw, y.raw)
              ? new ge.g(y.raw, b.raw)
              : void 0,
          f =
            t && b && y && ge.e.greaterThanOrEqual(b.raw, y.raw)
              ? [
                  t.getLiquidityValue(t.token0, b, y, !1),
                  t.getLiquidityValue(t.token1, b, y, !1),
                ]
              : [void 0, void 0],
          j = Object(l.a)(f, 2),
          h = j[0],
          x = j[1],
          O = function (e, t) {
            if (e.length <= t) return e;
            var n = t - "...".length,
              a = Math.ceil(n / 2),
              i = Math.floor(n / 2);
            return e.substr(0, a) + "..." + e.substr(e.length - i);
          },
          g = !Object(v.o)().isXl;
        return Object(Qe.jsxs)(ao, {
          children: [
            Object(Qe.jsx)(no, {
              onClick: function () {
                return p(!u);
              },
              style: {
                cursor: "pointer",
              },
              children: Object(Qe.jsxs)(Ci, {
                children: [
                  Object(Qe.jsx)(ki, {
                    width: g ? "67%" : "100%",
                    children: Object(Qe.jsxs)(Ti, {
                      justify: "flex-start",
                      children: [
                        Object(Qe.jsx)(js, {
                          currency0: r,
                          currency1: s,
                          margin: !0,
                          size: 20,
                        }),
                        Object(Qe.jsx)("p", {
                          style: {
                            color: "var(--color-text-2)",
                            fontSize: "15px",
                            fontWeight: "bold",
                          },
                          children:
                            r && s
                              ? "".concat(r.symbol, " - ").concat(s.symbol)
                              : Object(Qe.jsx)(Xs, {
                                  children: "Loading",
                                }),
                        }),
                        Object(Qe.jsx)("div", {
                          style: {
                            color: "white",
                            background: "#FFB703",
                            marginLeft: "10px",
                            width: "25px",
                            height: "25px",
                            borderRadius: "25px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          },
                          children: "+",
                        }),
                      ],
                    }),
                  }),
                  !g &&
                    Object(Qe.jsxs)(Ti, {
                      width: "80%",
                      children: [
                        Object(Qe.jsx)("p", {
                          style: {
                            color: "var(--color-text-2)",
                            fontSize: "15px",
                            fontWeight: 500,
                          },
                          children: O(t.liquidityToken.address, 13),
                        }),
                        Object(Qe.jsx)("img", {
                          src: "/images/farms/external-link".concat(
                            i ? "-space" : "",
                            ".svg"
                          ),
                          width: "23px",
                          height: "23px",
                          alt: "link",
                          style: {
                            marginLeft: "5px",
                          },
                        }),
                      ],
                    }),
                  u
                    ? Object(Qe.jsx)(Rs.a, {
                        size: g ? "24" : "36",
                        style: {
                          marginLeft: "10px",
                        },
                        color: "var(--color-primary)",
                      })
                    : Object(Qe.jsx)(Bs.a, {
                        size: g ? "24" : "36",
                        style: {
                          marginLeft: "10px",
                        },
                        color: "var(--color-primary)",
                      }),
                ],
              }),
            }),
            u &&
              Object(Qe.jsxs)(vt, {
                gap: "8px",
                children: [
                  g &&
                    Object(Qe.jsxs)(Ti, {
                      justify: "flex-start",
                      mt: "15px",
                      children: [
                        Object(Qe.jsx)("p", {
                          style: {
                            color: "var(--color-text-2)",
                            fontSize: "15px",
                            fontWeight: 500,
                          },
                          children: O(t.liquidityToken.address, 13),
                        }),
                        Object(Qe.jsx)("img", {
                          src: "/images/farms/external-link.png",
                          width: "23px",
                          height: "23px",
                          alt: "link",
                          style: {
                            marginLeft: "5px",
                          },
                        }),
                      ],
                    }),
                  Object(Qe.jsxs)(no, {
                    children: [
                      Object(Qe.jsx)("p", {
                        style: {
                          color: "var(--color-text-2)",
                          fontSize: "15px",
                          fontWeight: 500,
                        },
                        children: "LP Tokens",
                      }),
                      Object(Qe.jsx)("p", {
                        style: {
                          color: "var(--color-text-2)",
                          fontSize: "15px",
                          fontWeight: "bold",
                        },
                        children: y ? y.toSignificant(4) : "-",
                      }),
                    ],
                  }),
                  Object(Qe.jsxs)(no, {
                    children: [
                      Object(Qe.jsx)("p", {
                        style: {
                          color: "var(--color-text-2)",
                          fontSize: "15px",
                          fontWeight: 500,
                        },
                        children: "Share of Pool",
                      }),
                      Object(Qe.jsx)("p", {
                        style: {
                          color: "#18B2A1",
                          fontSize: "15px",
                          fontWeight: "bold",
                        },
                        children: m ? "".concat(m.toFixed(2), "%") : "-",
                      }),
                    ],
                  }),
                  Object(Qe.jsxs)(no, {
                    children: [
                      Object(Qe.jsxs)("p", {
                        style: {
                          color: "var(--color-text-2)",
                          fontSize: "15px",
                          fontWeight: 500,
                        },
                        children: [r.symbol, " Deposited"],
                      }),
                      h
                        ? Object(Qe.jsx)("p", {
                            style: {
                              color: "var(--color-text-2)",
                              fontSize: "15px",
                              fontWeight: "bold",
                            },
                            children:
                              null === h || void 0 === h
                                ? void 0
                                : h.toSignificant(6),
                          })
                        : "-",
                    ],
                  }),
                  Object(Qe.jsxs)(no, {
                    children: [
                      Object(Qe.jsxs)("p", {
                        style: {
                          color: "var(--color-text-2)",
                          fontSize: "15px",
                          fontWeight: 500,
                        },
                        children: [s.symbol, " Deposited"],
                      }),
                      x
                        ? Object(Qe.jsx)("p", {
                            style: {
                              color: "var(--color-text-2)",
                              fontSize: "15px",
                              fontWeight: "bold",
                            },
                            children:
                              null === x || void 0 === x
                                ? void 0
                                : x.toSignificant(6),
                          })
                        : "-",
                    ],
                  }),
                  g
                    ? Object(Qe.jsxs)("div", {
                        style: {
                          display: "grid",
                          width: "100%",
                        },
                        children: [
                          Object(Qe.jsx)(io, {
                            as: d.b,
                            to: "/add/".concat(Us(r), "/").concat(Us(s)),
                            style: {
                              width: "100%",
                              margin: "20px 0",
                            },
                            children: "Add LP Tokens",
                          }),
                          Object(Qe.jsx)(ro, {
                            as: d.b,
                            style: {
                              width: "100%",
                            },
                            to: "/remove/".concat(Us(r), "/").concat(Us(s)),
                            children: "Remove LP Tokens",
                          }),
                        ],
                      })
                    : Object(Qe.jsxs)(gi, {
                        marginTop: "10px",
                        children: [
                          Object(Qe.jsx)(io, {
                            as: d.b,
                            to: "/add/".concat(Us(r), "/").concat(Us(s)),
                            style: {
                              width: "48%",
                            },
                            children: "Add LP Tokens",
                          }),
                          Object(Qe.jsx)(ro, {
                            as: d.b,
                            style: {
                              width: "48%",
                            },
                            to: "/remove/".concat(Us(r), "/").concat(Us(s)),
                            children: "Remove LP Tokens",
                          }),
                        ],
                      }),
                ],
              }),
          ],
        });
      }
      var co,
        uo = new un.b(ya.a);

      function lo(e) {
        var t = Ye().chainId,
          n = Object(a.useMemo)(
            function () {
              return e.map(function (e) {
                var n = Object(l.a)(e, 2),
                  a = n[0],
                  i = n[1];
                return [Js(a, t), Js(i, t)];
              });
            },
            [t, e]
          ),
          i = zn(
            Object(a.useMemo)(
              function () {
                return n.map(function (e) {
                  var t = Object(l.a)(e, 2),
                    n = t[0],
                    a = t[1];
                  return n && a && !n.equals(a)
                    ? ge.f.getAddress(n, a)
                    : void 0;
                });
              },
              [n]
            ),
            uo,
            "getReserves"
          );
        return Object(a.useMemo)(
          function () {
            return i.map(function (e, t) {
              var a = e.result,
                i = e.loading,
                r = n[t][0],
                s = n[t][1];
              if (i) return [co.LOADING, null];
              if (!r || !s || r.equals(s)) return [co.INVALID, null];
              if (!a) return [co.NOT_EXISTS, null];
              var o = a.reserve0,
                c = a.reserve1,
                u = r.sortsBefore(s) ? [r, s] : [s, r],
                d = Object(l.a)(u, 2),
                p = d[0],
                y = d[1];
              return [
                co.EXISTS,
                new ge.f(new ge.j(p, o.toString()), new ge.j(y, c.toString())),
              ];
            });
          },
          [i, n]
        );
      }

      function po(e, t) {
        return lo([[e, t]])[0];
      }
      !(function (e) {
        (e[(e.LOADING = 0)] = "LOADING"),
          (e[(e.NOT_EXISTS = 1)] = "NOT_EXISTS"),
          (e[(e.EXISTS = 2)] = "EXISTS"),
          (e[(e.INVALID = 3)] = "INVALID");
      })(co || (co = {}));
      var yo = n(1137);

      function bo(e, t, n) {
        var i = qn(
          ha(null === e || void 0 === e ? void 0 : e.address, !1),
          "allowance",
          Object(a.useMemo)(
            function () {
              return [t, n];
            },
            [t, n]
          )
        ).result;
        return Object(a.useMemo)(
          function () {
            return e && i ? new ge.j(e, i.toString()) : void 0;
          },
          [e, i]
        );
      }
      var mo;
      !(function (e) {
        (e.INPUT = "INPUT"), (e.OUTPUT = "OUTPUT");
      })(mo || (mo = {}));
      var fo = Object(N.b)("swap/selectCurrency"),
        jo = Object(N.b)("swap/switchCurrencies"),
        vo = Object(N.b)("swap/typeInput"),
        ho = Object(N.b)("swap/replaceSwapState"),
        xo = Object(N.b)("swap/setRecipient"),
        Oo = Object(N.b)("transactions/addTransaction"),
        go = Object(N.b)("transactions/clearAllTransactions"),
        To = Object(N.b)("transactions/finalizeTransaction"),
        wo = Object(N.b)("transactions/checkedTransaction");

      function ko() {
        var e = Ye(),
          t = e.chainId,
          n = e.account,
          i = Object(b.c)();
        return Object(a.useCallback)(
          function (e) {
            var a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = a.summary,
              s = a.approval;
            if (n && t) {
              var o = e.hash;
              if (!o) throw Error("No transaction hash found.");
              i(
                Oo({
                  hash: o,
                  from: n,
                  chainId: t,
                  approval: s,
                  summary: r,
                })
              );
            }
          },
          [i, t, n]
        );
      }

      function Co() {
        var e,
          t = Ye().chainId,
          n = Object(b.d)(function (e) {
            return e.transactions;
          });
        return t && null !== (e = n[t]) && void 0 !== e ? e : {};
      }

      function Io(e, t) {
        var n = Co();
        return Object(a.useMemo)(
          function () {
            return (
              "string" === typeof e &&
              "string" === typeof t &&
              Object.keys(n).some(function (a) {
                var i = n[a];
                if (!i) return !1;
                if (i.receipt) return !1;
                var r = i.approval;
                return (
                  !!r &&
                  r.spender === t &&
                  r.tokenAddress === e &&
                  (function (e) {
                    return new Date().getTime() - e.addedTime < 864e5;
                  })(i)
                );
              })
            );
          },
          [n, t, e]
        );
      }
      var No,
        Eo,
        Mo = new ge.g(ge.e.BigInt(20), ge.e.BigInt(1e4)),
        Ao = new ge.g(ge.e.BigInt(1e4), ge.e.BigInt(1e4));
      Ao.subtract(Mo);

      function So(e, t) {
        var n = Ye().account,
          i = e instanceof ge.j ? e.token : void 0,
          r = bo(i, null !== n && void 0 !== n ? n : void 0, t),
          s = Io(null === i || void 0 === i ? void 0 : i.address, t),
          o = Object(a.useMemo)(
            function () {
              return e && t
                ? e.currency === ge.d
                  ? No.APPROVED
                  : r
                  ? r.lessThan(e)
                    ? s
                      ? No.PENDING
                      : No.NOT_APPROVED
                    : No.APPROVED
                  : No.UNKNOWN
                : No.UNKNOWN;
            },
            [e, r, s, t]
          ),
          l = ha(null === i || void 0 === i ? void 0 : i.address),
          d = ko(),
          p = Object(a.useCallback)(
            Object(u.a)(
              c.a.mark(function n() {
                var a, r;
                return c.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (o === No.NOT_APPROVED) {
                          n.next = 3;
                          break;
                        }
                        return (
                          console.error("approve was called unnecessarily"),
                          n.abrupt("return")
                        );
                      case 3:
                        if (i) {
                          n.next = 6;
                          break;
                        }
                        return console.error("no token"), n.abrupt("return");
                      case 6:
                        if (l) {
                          n.next = 9;
                          break;
                        }
                        return (
                          console.error("tokenContract is null"),
                          n.abrupt("return")
                        );
                      case 9:
                        if (e) {
                          n.next = 12;
                          break;
                        }
                        return (
                          console.error("missing amount to approve"),
                          n.abrupt("return")
                        );
                      case 12:
                        if (t) {
                          n.next = 15;
                          break;
                        }
                        return console.error("no spender"), n.abrupt("return");
                      case 15:
                        return (
                          (a = !1),
                          (n.next = 18),
                          l.estimateGas.approve(t, yo.a).catch(function () {
                            return (
                              (a = !0),
                              l.estimateGas.approve(t, e.raw.toString())
                            );
                          })
                        );
                      case 18:
                        return (
                          (r = n.sent),
                          n.abrupt(
                            "return",
                            l
                              .approve(t, a ? e.raw.toString() : yo.a, {
                                gasLimit: Vt(r),
                              })
                              .then(function (n) {
                                d(n, {
                                  summary: "Approve ".concat(e.currency.symbol),
                                  approval: {
                                    tokenAddress: i.address,
                                    spender: t,
                                  },
                                });
                              })
                              .catch(function (e) {
                                throw (
                                  (console.error("Failed to approve token", e),
                                  e)
                                );
                              })
                          )
                        );
                      case 20:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            ),
            [o, i, l, e, t, d]
          );
        return [o, p];
      }
      !(function (e) {
        (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
          (e[(e.NOT_APPROVED = 1)] = "NOT_APPROVED"),
          (e[(e.PENDING = 2)] = "PENDING"),
          (e[(e.APPROVED = 3)] = "APPROVED");
      })(No || (No = {})),
        (function (e) {
          (e.CURRENCY_A = "CURRENCY_A"), (e.CURRENCY_B = "CURRENCY_B");
        })(Eo || (Eo = {}));
      var Ro = Object(N.b)("mint/typeInputMint"),
        Bo = Object(N.b)("mint/resetMintState"),
        _o = n(295);

      function Uo(e, t) {
        var n = Object(a.useState)(e),
          i = Object(l.a)(n, 2),
          r = i[0],
          s = i[1];
        return (
          Object(a.useEffect)(
            function () {
              var n = setTimeout(function () {
                s(e);
              }, t);
              return function () {
                clearTimeout(n);
              };
            },
            [e, t]
          ),
          r
        );
      }
      n(505);

      function Do(e, t) {
        if (e && t)
          try {
            var n = Object(_o.parseUnits)(e, t.decimals).toString();
            if ("0" !== n)
              return t instanceof ge.i
                ? new ge.j(t, ge.e.BigInt(n))
                : ge.c.ether(ge.e.BigInt(n));
          } catch (a) {
            console.info('Failed to parse input amount: "'.concat(e, '"'), a);
          }
      }
      var Po = ge.e.BigInt(0);

      function Fo() {
        return Object(b.d)(function (e) {
          return e.mint;
        });
      }

      function Lo(e) {
        if (e)
          return e.currency === ge.d
            ? ge.e.greaterThan(e.raw, Le)
              ? ge.c.ether(ge.e.subtract(e.raw, Le))
              : ge.c.ether(ge.e.BigInt(0))
            : e;
      }
      var Yo,
        Wo,
        zo,
        qo,
        Vo,
        Ho = q.default.div(
          Yo ||
            (Yo = Object(W.a)([
              "\n\twidth: 100%;\n\theight: 55px;\n\tbackground: #e9e9e9;\n\tborder-radius: 15px;\n\tcolor: #bdbdbd;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin: 15px auto;\n\tcursor: pointer;\n\tfont-weight: bold;\n\tfont-size: 18px;\n",
            ]))
        ),
        Qo = function (e) {
          var t = cn(),
            n = Object(z.d)(),
            a = n.account,
            i = n.deactivate,
            r = he().login,
            s = Object(v.p)(
              function (e) {
                r(e);
              },
              i,
              a
            ).onPresentConnectModal;
          return Object(Qe.jsx)(Ho, {
            onClick: s,
            children: t(292, "Connect Wallet"),
          });
        },
        Jo = q.default.div(
          Wo ||
            (Wo = Object(W.a)([
              "\n\tposition: relative;\n\tpadding-bottom: 20px;\n",
            ]))
        ),
        Go =
          (Object(q.default)(v.i)(
            zo ||
              (zo = Object(W.a)([
                "\n\t:hover {\n\t\tcursor: pointer;\n\t}\n\tcolor: ",
                ";\n",
              ])),
            function (e) {
              return e.theme.colors.primary;
            }
          ),
          q.default.span(
            qo ||
              (qo = Object(W.a)([
                "\n\tcolor: var(--color-text);\n\n\t&::after {\n\t\tdisplay: inline-block;\n\t\tanimation: ellipsis 1.25s infinite;\n\t\tcontent: '.';\n\t\twidth: 1em;\n\t\ttext-align: left;\n\t}\n\n\t@keyframes ellipsis {\n\t\t0% {\n\t\t\tcontent: '.';\n\t\t}\n\t\t33% {\n\t\t\tcontent: '..';\n\t\t}\n\t\t66% {\n\t\t\tcontent: '...';\n\t\t}\n\t}\n",
              ]))
          )),
        Ko = q.default.div(
          Vo ||
            (Vo = Object(W.a)([
              "\n\tcursor: pointer;\n\twidth: 100%;\n\theight: 55px;\n\tbackground: #82affb;\n\tborder-radius: 15px;\n\tcolor: #fff;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin: 15px auto 0;\n\tfont-weight: bold;\n\tfont-size: 18px;\n",
            ]))
        );

      function Xo(e) {
        var t,
          n,
          a,
          i,
          r,
          s,
          o,
          c,
          u = e.noLiquidity,
          l = e.price,
          d = e.currencies,
          p = e.parsedAmounts,
          y = e.poolTokenPercentage,
          b = e.onAdd,
          m = !Object(v.o)().isXl,
          f = Y().spaceMode;
        return Object(Qe.jsxs)(Qe.Fragment, {
          children: [
            Object(Qe.jsxs)("div", {
              style: {
                borderBottom: "1px solid var(--color-border-7)",
                padding: "20px 0",
              },
              children: [
                Object(Qe.jsxs)(gi, {
                  children: [
                    Object(Qe.jsx)(ki, {
                      width: m ? "50%" : "35%",
                      children: Object(Qe.jsxs)(gi, {
                        children: [
                          Object(Qe.jsx)(Ki, {
                            size: "25px",
                            currency: d[Eo.CURRENCY_A],
                            style: {
                              marginRight: "8px",
                            },
                          }),
                          Object(Qe.jsxs)("p", {
                            style: {
                              fontSize: m ? "13px" : "15px",
                              fontWeight: "bold",
                              color: "var(--color-text-2)",
                            },
                            children: [
                              null === (t = d[Eo.CURRENCY_A]) || void 0 === t
                                ? void 0
                                : t.symbol,
                              " Deposited",
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(Qe.jsx)("p", {
                      style: {
                        fontSize: m ? "13px" : "15px",
                        fontWeight: "bold",
                        color: "var(--color-text-2)",
                      },
                      children:
                        null === (n = p[Eo.CURRENCY_A]) || void 0 === n
                          ? void 0
                          : n.toSignificant(6),
                    }),
                  ],
                }),
                Object(Qe.jsxs)(gi, {
                  children: [
                    Object(Qe.jsx)("div", {
                      style: {
                        display: "inline-block",
                        textAlign: "right",
                        width: m ? "50%" : "35%",
                      },
                      children: Object(Qe.jsx)("p", {
                        style: {
                          fontSize: "13px",
                          color: "var(--color-text-4)",
                          fontWeight: "bold",
                        },
                        children: "1 ".concat(
                          null === (a = d[Eo.CURRENCY_A]) || void 0 === a
                            ? void 0
                            : a.symbol
                        ),
                      }),
                    }),
                    Object(Qe.jsx)("p", {
                      style: {
                        fontSize: "13px",
                        color: "var(--color-text-4)",
                        fontWeight: "bold",
                      },
                      children: ""
                        .concat(
                          null === l || void 0 === l
                            ? void 0
                            : l.invert().toSignificant(4),
                          " "
                        )
                        .concat(
                          null === (i = d[Eo.CURRENCY_A]) || void 0 === i
                            ? void 0
                            : i.symbol
                        ),
                    }),
                  ],
                }),
              ],
            }),
            Object(Qe.jsxs)("div", {
              style: {
                borderBottom: "1px solid var(--color-border-7)",
                paddingBottom: "20px",
              },
              children: [
                Object(Qe.jsxs)(gi, {
                  children: [
                    Object(Qe.jsx)(ki, {
                      width: m ? "50%" : "35%",
                      children: Object(Qe.jsxs)(gi, {
                        children: [
                          Object(Qe.jsx)(Ki, {
                            size: "25px",
                            currency: d[Eo.CURRENCY_B],
                            style: {
                              marginRight: "8px",
                            },
                          }),
                          Object(Qe.jsxs)("p", {
                            style: {
                              fontSize: m ? "13px" : "15px",
                              fontWeight: "bold",
                              color: "var(--color-text-2)",
                            },
                            children: [
                              null === (r = d[Eo.CURRENCY_B]) || void 0 === r
                                ? void 0
                                : r.symbol,
                              " Deposited",
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(Qe.jsx)("p", {
                      style: {
                        fontSize: m ? "13px" : "15px",
                        fontWeight: "bold",
                        color: "var(--color-text-2)",
                      },
                      children:
                        null === (s = p[Eo.CURRENCY_B]) || void 0 === s
                          ? void 0
                          : s.toSignificant(6),
                    }),
                  ],
                }),
                Object(Qe.jsxs)(gi, {
                  children: [
                    Object(Qe.jsx)("div", {
                      style: {
                        display: "inline-block",
                        textAlign: "right",
                        width: m ? "50%" : "35%",
                      },
                      children: Object(Qe.jsx)("p", {
                        style: {
                          fontSize: "13px",
                          color: "var(--color-text-4)",
                          fontWeight: "bold",
                        },
                        children: "1 ".concat(
                          null === (o = d[Eo.CURRENCY_B]) || void 0 === o
                            ? void 0
                            : o.symbol
                        ),
                      }),
                    }),
                    Object(Qe.jsx)("p", {
                      style: {
                        fontSize: "13px",
                        color: "var(--color-text-4)",
                        fontWeight: "bold",
                      },
                      children: ""
                        .concat(
                          null === l || void 0 === l
                            ? void 0
                            : l.invert().toSignificant(4),
                          " "
                        )
                        .concat(
                          null === (c = d[Eo.CURRENCY_B]) || void 0 === c
                            ? void 0
                            : c.symbol
                        ),
                    }),
                  ],
                }),
              ],
            }),
            Object(Qe.jsxs)(gi, {
              children: [
                Object(Qe.jsx)(ki, {
                  width: m ? "50%" : "35%",
                  children: Object(Qe.jsxs)(gi, {
                    children: [
                      Object(Qe.jsx)("img", {
                        src: "/images/org".concat(f ? "-space" : "", ".svg"),
                        alt: "org",
                        width: "24px",
                        height: "24px",
                      }),
                      Object(Qe.jsx)("p", {
                        style: {
                          fontSize: m ? "13px" : "15px",
                          fontWeight: "bold",
                          color: "var(--color-text-2)",
                        },
                        children: "Share of Pool",
                      }),
                    ],
                  }),
                }),
                Object(Qe.jsxs)("p", {
                  style: {
                    fontSize: m ? "13px" : "15px",
                    fontWeight: "bold",
                    color: "#18B2A1",
                  },
                  children: [
                    u
                      ? "100"
                      : null === y || void 0 === y
                      ? void 0
                      : y.toSignificant(4),
                    "%",
                  ],
                }),
              ],
            }),
            Object(Qe.jsx)(Ko, {
              onClick: b,
              children: u ? "Create Pool & Supply" : "Confirm Supply",
            }),
          ],
        });
      }
      var Zo,
        $o = n(506),
        ec = n(507),
        tc = n(114),
        nc = n.n(tc);
      n(764);
      !(function (e) {
        (e.Injected = "injected"),
          (e.WalletConnect = "walletconnect"),
          (e.BSC = "bsc");
      })(Zo || (Zo = {}));
      var ac,
        ic,
        rc = function (e) {
          var t = e.visible,
            n = e.modalPosition,
            a = e.isMobile,
            i = e.onHide,
            r = he().login,
            s = function (e) {
              r(e), window.localStorage.setItem("connectorId", e), i();
            };
          return Object(Qe.jsx)("div", {
            id: "connection-wallet-modal",
            children: Object(Qe.jsx)(xt.Dialog, {
              header: "Connect Wallet",
              visible: t,
              className: "wallet-modal-desktop ".concat(
                a ? "wallet-modal-mobile" : ""
              ),
              position: n,
              dismissableMask: !0,
              onHide: i,
              children: Object(Qe.jsxs)("div", {
                className: "grid grid-flow-row auto-rows-max gap-4",
                children: [
                  !a &&
                    Object(Qe.jsxs)("div", {
                      role: "presentation",
                      onClick: function () {
                        return s(Zo.BSC);
                      },
                      className:
                        "border-2 rounded-lg text-left p-3 w-full grid grid-cols-6 cursor-pointer wallet-btn",
                      style: {
                        border: "2px solid",
                      },
                      children: [
                        Object(Qe.jsx)("div", {
                          className: "col-start-1 ...",
                          children: Object(Qe.jsx)("img", {
                            src: "/images/icon-bsc.svg",
                            style: {
                              width: "30px",
                            },
                            alt: "icon",
                          }),
                        }),
                        Object(Qe.jsx)("div", {
                          className: "col-span-4 ... font-medium",
                          children: "Binance Chain Wallet",
                        }),
                      ],
                    }),
                  a
                    ? Object(Qe.jsxs)("div", {
                        role: "presentation",
                        onClick: function () {
                          return s(Zo.WalletConnect);
                        },
                        className:
                          "border-2 rounded-lg text-left p-3 w-full grid grid-cols-6 cursor-pointer wallet-btn",
                        style: {
                          border: "2px solid",
                        },
                        children: [
                          Object(Qe.jsx)("div", {
                            className: "col-start-1 ...",
                            children: Object(Qe.jsx)("img", {
                              src: "/images/icon-metamask.svg",
                              style: {
                                width: "30px",
                              },
                              alt: "icon",
                            }),
                          }),
                          Object(Qe.jsx)("div", {
                            className: "col-span-4 ... font-medium",
                            children: "MetaMask",
                          }),
                        ],
                      })
                    : Object(Qe.jsxs)("div", {
                        role: "presentation",
                        onClick: function () {
                          return s(Zo.Injected);
                        },
                        className:
                          "border-2 rounded-lg text-left p-3 w-full grid grid-cols-6 cursor-pointer wallet-btn",
                        style: {
                          border: "2px solid",
                        },
                        children: [
                          Object(Qe.jsx)("div", {
                            className: "col-start-1 ...",
                            children: Object(Qe.jsx)("img", {
                              src: "/images/icon-metamask.svg",
                              style: {
                                width: "30px",
                              },
                              alt: "icon",
                            }),
                          }),
                          Object(Qe.jsx)("div", {
                            className: "col-span-4 ... font-medium",
                            children: "MetaMask",
                          }),
                        ],
                      }),
                  Object(Qe.jsxs)("div", {
                    role: "presentation",
                    onClick: function () {
                      return s(Zo.WalletConnect);
                    },
                    className:
                      "border-2 rounded-lg text-left p-3 w-full grid grid-cols-6 cursor-pointer wallet-btn",
                    style: {
                      border: "2px solid",
                    },
                    children: [
                      Object(Qe.jsx)("div", {
                        className: "col-start-1 ...",
                        children: Object(Qe.jsx)("img", {
                          src: "/images/icon-walletconnect.svg",
                          style: {
                            width: "30px",
                          },
                          alt: "icon",
                        }),
                      }),
                      Object(Qe.jsx)("div", {
                        className: "col-span-4 ... font-medium",
                        children: "WalletConnect",
                      }),
                    ],
                  }),
                  Object(Qe.jsxs)("div", {
                    role: "presentation",
                    onClick: function () {
                      return s(Zo.WalletConnect);
                    },
                    className:
                      "border-2 rounded-lg text-left p-3 w-full grid grid-cols-6 cursor-pointer wallet-btn",
                    style: {
                      border: "2px solid",
                    },
                    children: [
                      Object(Qe.jsx)("div", {
                        className: "col-start-1 ...",
                        children: Object(Qe.jsx)("img", {
                          src: "/images/icon-trust-wallet.svg",
                          style: {
                            width: "30px",
                          },
                          alt: "icon",
                        }),
                      }),
                      Object(Qe.jsx)("div", {
                        className: "col-span-4 ... font-medium",
                        children: "Trust Wallet",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        sc = n(508),
        oc = n(202),
        cc = {
          wad: {
            97: "0x29f9E7f1ACE4E3496c0c46b3191E800a7A77964E",
            56: "0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc",
          },
          syrup: {
            97: "0x3E11A30d9D5892030B0Ed20A3AD9CEF0e9a4d559",
            56: "0x372Aed0528EA4BC95E1101B2882Cb15FcA4b226E",
          },
          masterChef: {
            97: "0x66E083a3d0E361152142B1887b99c57FA60Afb96",
            56: "0xde866dD77b6DF6772e320dC92BFF0eDDC626C674",
          },
          sousChef: {
            97: "0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a",
            56: "0x6ab8463a4185b80905e05a9ff80a2d6b714b9e95",
          },
          wbnb: {
            97: "0xae13d989dac2f0debff460ac112a837c89baa7cd",
            56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
          },
          lottery: {
            97: "0x99c2EcD51d52c036B00130d882Bc65f20Fdecf9f",
            56: "0x3C3f2049cc17C136a604bE23cF7E42745edf3b91",
          },
          lotteryNFT: {
            97: "0x8175c10383511b3a1C68f9dB222dc14A19CC950e",
            56: "0x5e74094Cd416f55179DBd0E45b1a8ED030e396A1",
          },
          mulltiCall: {
            56: "0x1ee38d535d541c55c9dae27b12edf090c608e6fb",
            97: "0x67ADCB4dF3931b0C5Da724058ADC2174a9844412",
          },
          busd: {
            56: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
            97: "0x2DbC5dFCe92737D8c333296F9F29a166a1aED742",
          },
          pancakeProfile: {
            56: "0xDf4dBf6536201370F95e06A0F8a7a70fE40E388a",
            97: "0x4B683C7E13B6d5D7fd1FeA9530F451954c1A7c8A",
          },
          pancakeRabbits: {
            56: "0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07",
            97: "0x60935F36e4631F73f0f407e68642144e07aC7f5E",
          },
          bunnyFactory: {
            56: "0xfa249Caa1D16f75fa159F7DFBAc0cC5EaB48CeFf",
            97: "0x707CBF373175fdB601D34eeBF2Cf665d08f01148",
          },
          pointCenterIfo: {
            56: "0x3C6919b132462C1FEc572c6300E83191f4F0012a",
            97: "0xd2Ac1B1728Bb1C11ae02AB6e75B76Ae41A2997e3",
          },
          bunnySpecial: {
            56: "0xFee8A195570a18461146F401d6033f5ab3380849",
            97: "0x7b7b1583De1DeB32Ce6605F6deEbF24A0671c17C",
          },
          usdt: {
            56: "0x55d398326f99059fF775485246999027B3197955",
            97: "",
          },
        };
      !(function (e) {
        (e.BNB = "BNB"),
          (e.CAKE = "CAKE"),
          (e.SYRUP = "SYRUP"),
          (e.BUSD = "BUSD"),
          (e.TWT = "TWT"),
          (e.UST = "UST"),
          (e.ETH = "ETH"),
          (e.COMP = "COMP"),
          (e.SUSHI = "SUSHI"),
          (e.TPT = "TPT"),
          (e.USDT = "USDT");
      })(ac || (ac = {})),
        (function (e) {
          (e.COMMUNITY = "Community"),
            (e.CORE = "Core"),
            (e.BINANCE = "Binance");
        })(ic || (ic = {}));
      var uc = [
          {
            pid: 0,
            lpSymbol: "WAD",
            lpAddresses: {
              97: "0x29f9e7f1ace4e3496c0c46b3191e800a7a77964e",
              56: "0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc",
            },
            tokenSymbol: "WAD",
            tokenAddresses: {
              97: "0x29f9e7f1ace4e3496c0c46b3191e800a7a77964e",
              56: "0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc",
            },
            quoteTokenSymbol: ac.CAKE,
            quoteTokenAdresses: cc.wad,
          },
          {
            pid: 1,
            lpSymbol: "WAD-BNB LP",
            lpAddresses: {
              97: "0xAc16B9d54d73879ca9Db8daa56D68E2624f931F6",
              56: "0xDc683Adb914EdF91df4A36c33EE4f59ca41bC263",
            },
            tokenSymbol: "WAD",
            tokenAddresses: {
              97: "0x29f9E7f1ACE4E3496c0c46b3191E800a7A77964E",
              56: "0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc",
            },
            quoteTokenSymbol: ac.BNB,
            quoteTokenAdresses: cc.wbnb,
          },
          {
            pid: 3,
            lpSymbol: "BTCB-BNB LP",
            lpAddresses: {
              97: "0x2BB6B868285Fc124e950860300Ab8a826eF1c3B2",
              56: "0x1b1675A97b2f62B568569ebD349E88A04DdE8586",
            },
            tokenSymbol: "BTCB",
            tokenAddresses: {
              97: "0x212A31781E574C5d7C0Fce551AddAD67cb4b4F5C",
              56: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
            },
            quoteTokenSymbol: ac.BNB,
            quoteTokenAdresses: cc.wbnb,
          },
          {
            pid: 2,
            lpSymbol: "BUSD-BNB LP",
            lpAddresses: {
              97: "0xA3Cd6D24B491D3a1DBE337074d6E910F9AdB40d1",
              56: "0xCf643C4B9DBf42239aa00e23A0570c90d517E6dC",
            },
            tokenSymbol: "BUSD",
            tokenAddresses: {
              97: "0x2DbC5dFCe92737D8c333296F9F29a166a1aED742",
              56: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
            },
            quoteTokenSymbol: ac.BNB,
            quoteTokenAdresses: cc.wbnb,
          },
          {
            pid: 5,
            lpSymbol: "USDT-BUSD LP",
            lpAddresses: {
              97: "0x93e6d9bF02367a231b4643D45b1Df949C13eB12C",
              56: "0x087d69B97a6dF4FB37E4E93A31752008223A6C19",
            },
            tokenSymbol: "USDT",
            tokenAddresses: {
              97: "0xf19802DE4a3B7bF2f9910661f21389825D159abc",
              56: "0x55d398326f99059fF775485246999027B3197955",
            },
            quoteTokenSymbol: ac.BUSD,
            quoteTokenAdresses: cc.busd,
          },
          {
            pid: 4,
            lpSymbol: "ETH-BNB LP",
            lpAddresses: {
              97: "0xd4616b4768D282D458eECFEB8cb0492f821c9233",
              56: "0x8485c5f255FF30AafaB0030329e508BD8dDE11c5",
            },
            tokenSymbol: "ETH",
            tokenAddresses: {
              97: "0x829C8c2128eD993fAC05a7BcFcD4ee9941A2898C",
              56: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
            },
            quoteTokenSymbol: ac.BNB,
            quoteTokenAdresses: cc.wbnb,
          },
          {
            pid: 6,
            lpSymbol: "CAKE-BNB LP",
            lpAddresses: {
              97: "0x2daA88Ef71d9120526f9f641554a336f9a6485f9",
              56: "0xF06ebE478d73c8c935e72C43e8F71C592d6E600f",
            },
            tokenSymbol: "CAKE",
            tokenAddresses: {
              97: "0x455E20015fb7C5e8a24A2b0B39e6259a3f7C43de",
              56: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
            },
            quoteTokenSymbol: ac.BNB,
            quoteTokenAdresses: cc.wbnb,
          },
          {
            pid: 7,
            lpSymbol: "WAD-BUSD LP",
            lpAddresses: {
              97: "0x515dbF03c828e50145e3822A3427A6068Da3F7F6",
              56: "0xc95b1750043fce5dfcc8539835ea3830ec002a89",
            },
            tokenSymbol: "WAD",
            tokenAddresses: {
              97: "0x29f9E7f1ACE4E3496c0c46b3191E800a7A77964E",
              56: "0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc",
            },
            quoteTokenSymbol: ac.BUSD,
            quoteTokenAdresses: cc.busd,
          },
          {
            pid: 10,
            lpSymbol: "WAD-USDT LP",
            lpAddresses: {
              97: "",
              56: "0x7d6195b212dee1ba7de8404cfd319446cf17d71b",
            },
            tokenSymbol: "WAD",
            tokenAddresses: {
              97: "",
              56: "0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc",
            },
            quoteTokenSymbol: ac.USDT,
            quoteTokenAdresses: cc.usdt,
          },
          {
            pid: 11,
            lpSymbol: "USDT-BNB LP",
            lpAddresses: {
              97: "",
              56: "0xfD468f81f4a6D859a0eB3667c65F7BEA9Dc69028",
            },
            tokenSymbol: "USDT",
            tokenAddresses: {
              97: "",
              56: "0x55d398326f99059fF775485246999027B3197955",
            },
            quoteTokenSymbol: ac.BNB,
            quoteTokenAdresses: cc.wbnb,
          },
        ],
        lc = n(164),
        dc = n.n(lc),
        pc = n(240);
      pc.a.config({
        EXPONENTIAL_AT: 1e3,
        DECIMAL_PLACES: 80,
      });
      var yc,
        bc = new pc.a(10),
        mc = new pc.a(10512e3),
        fc = function (e) {
          return e[56], e[56];
        },
        jc = function () {
          return fc(cc.wad);
        },
        vc = function () {
          return fc(cc.masterChef);
        },
        hc = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
          if (!e) return 0;
          var n = new j.a(e).dividedBy(new j.a(10).pow(t));
          return n.toNumber();
        },
        xc = n(520),
        Oc = n.n(xc),
        gc = [
          "https://bsc-dataseed1.ninicoin.io",
          "https://bsc-dataseed1.defibit.io",
          "https://bsc-dataseed.binance.org",
        ],
        Tc = (function () {
          var e = Oc()(0, gc.length - 1);
          return gc[e];
        })(),
        wc = new dc.a.providers.HttpProvider(Tc, {
          timeout: 1e4,
        }),
        kc = new dc.a(wc),
        Cc = function () {
          return kc;
        },
        Ic = kc,
        Nc =
          (uc
            .filter(function (e) {
              return e.isCommunity;
            })
            .map(function (e) {
              return e.tokenSymbol;
            }),
          n(521),
          n(522),
          n(523),
          n(524),
          n(140)),
        Ec = (n(525), n(526), n(527), n(528), n(529), n(141)),
        Mc =
          (n(530),
          n(531),
          function (e, t, n) {
            return new (null !== n && void 0 !== n ? n : Ic).eth.Contract(e, t);
          }),
        Ac = function (e, t) {
          return Mc(Nc, e, t);
        },
        Sc = n(532),
        Rc = (function () {
          var e = Object(u.a)(
            c.a.mark(function e(t, n) {
              var a, i, r, s, o, l, d;
              return c.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = Cc()),
                        (i = new a.eth.Contract(Sc, fc(cc.mulltiCall))),
                        (r = new un.b(t)),
                        (e.next = 5),
                        a.eth.getBlockNumber()
                      );
                    case 5:
                      return (
                        e.sent,
                        (e.next = 8),
                        i.methods
                          .getEthBalance(
                            "0x69F6829B0A62C34a844E9a0a123DD4b1822a7Bc5"
                          )
                          .call()
                      );
                    case 8:
                      return (
                        e.sent,
                        n.forEach(
                          (function () {
                            var e = Object(u.a)(
                              c.a.mark(function e(t) {
                                var a, s, o;
                                return c.a.wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (a = [t].map(function (e) {
                                            return [
                                              e.address.toLowerCase(),
                                              r.encodeFunctionData(
                                                e.name,
                                                e.params
                                              ),
                                            ];
                                          })),
                                          (e.next = 3),
                                          i.methods.aggregate(a).call()
                                        );
                                      case 3:
                                        (s = e.sent), (o = s.returnData);
                                        try {
                                          o.map(function (e, t) {
                                            return r.decodeFunctionResult(
                                              n[t].name,
                                              e
                                            );
                                          });
                                        } catch (c) {
                                          console.log(c);
                                        }
                                      case 6:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            );
                            return function (t) {
                              return e.apply(this, arguments);
                            };
                          })()
                        ),
                        (s = n.map(function (e) {
                          return [
                            e.address.toLowerCase(),
                            r.encodeFunctionData(e.name, e.params),
                          ];
                        })),
                        (e.next = 13),
                        i.methods.aggregate(s).call()
                      );
                    case 13:
                      return (
                        (o = e.sent),
                        (l = o.returnData),
                        (d = l.map(function (e, t) {
                          return r.decodeFunctionResult(n[t].name, e);
                        })),
                        e.abrupt("return", d)
                      );
                    case 17:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        Bc = (function () {
          var e = Object(u.a)(
            c.a.mark(function e(t) {
              var n, a, i, r;
              return c.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = vc()),
                        (a = uc.map(function (e) {
                          return {
                            address: fc(e.lpAddresses),
                            name: "allowance",
                            params: [t, n],
                          };
                        })),
                        (e.next = 4),
                        Rc(Nc, a)
                      );
                    case 4:
                      return (
                        (i = e.sent),
                        (r = i.map(function (e) {
                          return new j.a(e).toJSON();
                        })),
                        e.abrupt("return", r)
                      );
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        _c = (function () {
          var e = Object(u.a)(
            c.a.mark(function e(t) {
              var n, a, i;
              return c.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = uc.map(function (e) {
                          return {
                            address: fc(e.lpAddresses),
                            name: "balanceOf",
                            params: [t],
                          };
                        })),
                        (e.next = 3),
                        Rc(Nc, n)
                      );
                    case 3:
                      return (
                        (a = e.sent),
                        (i = a.map(function (e) {
                          return new j.a(e).toJSON();
                        })),
                        e.abrupt("return", i)
                      );
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Uc = (function () {
          var e = Object(u.a)(
            c.a.mark(function e(t) {
              var n, a, i, r;
              return c.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = vc()),
                        (a = uc.map(function (e) {
                          return {
                            address: n,
                            name: "userInfo",
                            params: [e.pid, t],
                          };
                        })),
                        (e.next = 4),
                        Rc(Ec, a)
                      );
                    case 4:
                      return (
                        (i = e.sent),
                        (r = i.map(function (e) {
                          return new j.a(e[0]._hex).toJSON();
                        })),
                        e.abrupt("return", r)
                      );
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Dc = (function () {
          var e = Object(u.a)(
            c.a.mark(function e(t) {
              var n, a, i, r;
              return c.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = vc()),
                        (a = uc.map(function (e) {
                          return {
                            address: n,
                            name: "pendingWarden",
                            params: [e.pid, t],
                          };
                        })),
                        (e.next = 4),
                        Rc(Ec, a)
                      );
                    case 4:
                      return (
                        (i = e.sent),
                        (r = i.map(function (e) {
                          return new j.a(e).toJSON();
                        })),
                        e.abrupt("return", r)
                      );
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Pc = (function () {
          var e = Object(u.a)(
            c.a.mark(function e() {
              var t;
              return c.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Promise.all(
                          uc.map(
                            (function () {
                              var e = Object(u.a)(
                                c.a.mark(function e(t) {
                                  var n,
                                    a,
                                    i,
                                    r,
                                    s,
                                    o,
                                    u,
                                    d,
                                    p,
                                    y,
                                    b,
                                    m,
                                    f,
                                    v,
                                    h,
                                    x,
                                    O,
                                    g,
                                    T,
                                    w;
                                  return c.a.wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (n = fc(t.lpAddresses)),
                                            (a = [
                                              {
                                                address: fc(t.tokenAddresses),
                                                name: "balanceOf",
                                                params: [n],
                                              },
                                              {
                                                address: fc(
                                                  t.quoteTokenAdresses
                                                ),
                                                name: "balanceOf",
                                                params: [n],
                                              },
                                              {
                                                address: n,
                                                name: "balanceOf",
                                                params: [vc()],
                                              },
                                              {
                                                address: n,
                                                name: "totalSupply",
                                              },
                                              {
                                                address: fc(t.tokenAddresses),
                                                name: "decimals",
                                              },
                                              {
                                                address: fc(
                                                  t.quoteTokenAdresses
                                                ),
                                                name: "decimals",
                                              },
                                            ]),
                                            (e.next = 4),
                                            Rc(Nc, a)
                                          );
                                        case 4:
                                          return (
                                            (i = e.sent),
                                            (r = Object(l.a)(i, 6)),
                                            (s = r[0]),
                                            (o = r[1]),
                                            (u = r[2]),
                                            (d = r[3]),
                                            (p = r[4]),
                                            (y = r[5]),
                                            (b = new j.a(u).div(new j.a(d))),
                                            (m =
                                              n === jc()
                                                ? new j.a(u).div(
                                                    new j.a(10).pow(18)
                                                  )
                                                : new j.a(o)
                                                    .div(new j.a(10).pow(18))
                                                    .times(new j.a(2))
                                                    .times(b)),
                                            (f = new j.a(s)
                                              .div(new j.a(10).pow(p))
                                              .times(b)),
                                            (v = new j.a(o)
                                              .div(new j.a(10).pow(y))
                                              .times(b)),
                                            (e.next = 18),
                                            Rc(Ec, [
                                              {
                                                address: vc(),
                                                name: "poolInfo",
                                                params: [t.pid],
                                              },
                                              {
                                                address: vc(),
                                                name: "totalAllocPoint",
                                              },
                                            ])
                                          );
                                        case 18:
                                          return (
                                            (h = e.sent),
                                            (x = Object(l.a)(h, 2)),
                                            (O = x[0]),
                                            (g = x[1]),
                                            (T = new j.a(O.allocPoint._hex)),
                                            (w = T.div(new j.a(g))),
                                            e.abrupt(
                                              "return",
                                              Object(Oe.a)(
                                                Object(Oe.a)({}, t),
                                                {},
                                                {
                                                  tokenAmount: f,
                                                  quoteTokenAmount: v,
                                                  lpTotalInQuoteToken: m,
                                                  tokenPriceVsQuote: v.div(f),
                                                  poolWeight: w,
                                                  multiplier: "".concat(
                                                    T.div(100).toString(),
                                                    "X"
                                                  ),
                                                }
                                              )
                                            )
                                          );
                                        case 25:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              );
                              return function (t) {
                                return e.apply(this, arguments);
                              };
                            })()
                          )
                        )
                      );
                    case 2:
                      return (t = e.sent), e.abrupt("return", t);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        Fc = new j.a(0),
        Lc = {
          data: Object(xe.a)(uc),
        },
        Yc = function (e) {
          var t = Object(a.useState)(new j.a(0)),
            n = Object(l.a)(t, 2),
            i = n[0],
            r = n[1],
            s = Object(z.d)().account,
            o = (function () {
              var e = Object(z.d)().library,
                t = Object(a.useRef)(e),
                n = Object(a.useState)(e ? new dc.a(e) : Cc()),
                i = Object(l.a)(n, 2),
                r = i[0],
                s = i[1];
              return (
                Object(a.useEffect)(
                  function () {
                    e !== t.current &&
                      (s(e ? new dc.a(e) : Cc()), (t.current = e));
                  },
                  [e]
                ),
                r
              );
            })();
          return (
            Object(a.useEffect)(
              function () {
                s &&
                  (function () {
                    var t = Object(u.a)(
                      c.a.mark(function t() {
                        var n, a;
                        return c.a.wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (n = Ac(e)),
                                  (t.next = 3),
                                  n.methods.balanceOf(s).call()
                                );
                              case 3:
                                (a = t.sent), r(new j.a(a));
                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    );
                    return function () {
                      return t.apply(this, arguments);
                    };
                  })()();
              },
              [s, e, o]
            ),
            i
          );
        },
        Wc = function () {
          var e = Ye().account,
            t = (function () {
              var e = Object(a.useReducer)(function (e, t) {
                  return (
                    "publicData" === t.type
                      ? (e.data = e.data.map(function (e) {
                          var n = t.publicFarms.find(function (t) {
                            return t.pid === e.pid;
                          });
                          return Object(Oe.a)(Object(Oe.a)({}, e), n);
                        }))
                      : "userData" === t.type &&
                        t.arrayOfUserDataObjects.forEach(function (t) {
                          var n = t.index;
                          e.data[n] = Object(Oe.a)(
                            Object(Oe.a)({}, e.data[n]),
                            {},
                            {
                              userData: t,
                            }
                          );
                        }),
                    e
                  );
                }, Lc),
                t = Object(l.a)(e, 2),
                n = t[0],
                i = t[1];
              Object(a.useEffect)(function () {
                Pc().then(function (e) {
                  i({
                    type: "publicData",
                    publicFarms: e,
                  });
                });
              }, []);
              var r = Object(a.useCallback)(
                  (function () {
                    var e = Object(u.a)(
                      c.a.mark(function e(t) {
                        var n, a, r, s, o, u, d;
                        return c.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  Promise.all([Bc(t), _c(t), Uc(t), Dc(t)])
                                );
                              case 2:
                                (n = e.sent),
                                  (a = Object(l.a)(n, 4)),
                                  (r = a[0]),
                                  (s = a[1]),
                                  (o = a[2]),
                                  (u = a[3]),
                                  (d = r.map(function (e, t) {
                                    return {
                                      index: t,
                                      allowance: r[t],
                                      tokenBalance: s[t],
                                      stakedBalance: o[t],
                                      earnings: u[t],
                                    };
                                  })),
                                  i({
                                    arrayOfUserDataObjects: d,
                                    type: "userData",
                                  });
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  []
                ),
                s = n.data.find(function (e) {
                  return 2 === e.pid;
                }),
                o = (null === s || void 0 === s ? void 0 : s.tokenPriceVsQuote)
                  ? new j.a(1).div(s.tokenPriceVsQuote)
                  : Fc,
                d = n.data.find(function (e) {
                  return 1 === e.pid;
                }),
                p = new j.a(
                  (null === d || void 0 === d ? void 0 : d.tokenPriceVsQuote) ||
                    0
                ),
                y =
                  d && d.tokenPriceVsQuote ? o.times(d.tokenPriceVsQuote) : Fc;
              return {
                fetchUserDataInFarms: r,
                farmData: n.data,
                bnbPriceUSD: o,
                wadPriceUSD: y,
                wadPriceBNB: p,
              };
            })(),
            n = t.farmData,
            i = t.fetchUserDataInFarms,
            r = t.bnbPriceUSD,
            s = t.wadPriceUSD,
            o = t.wadPriceBNB;
          Object(a.useEffect)(
            function () {
              e && i(e);
            },
            [e, i]
          );
          var d = n.filter(function (e) {
              return 0 !== e.pid;
            }),
            p = n.filter(function (e) {
              return 0 === e.pid;
            }),
            y = d.filter(function (e) {
              return (
                e.userData && new j.a(e.userData.stakedBalance).isGreaterThan(0)
              );
            }),
            b = function (e) {
              return e.map(function (e) {
                if (!e.tokenAmount || !e.lpTotalInQuoteToken) return e;
                var t = bc.times(e.poolWeight),
                  n = t.times(mc),
                  a = o.times(n).div(e.lpTotalInQuoteToken);
                if (
                  e.quoteTokenSymbol === ac.BUSD ||
                  e.quoteTokenSymbol === ac.UST
                )
                  a = o.times(n).div(e.lpTotalInQuoteToken).times(r);
                else if (e.quoteTokenSymbol === ac.CAKE)
                  a = n.div(e.lpTotalInQuoteToken);
                else if (e.dual) {
                  var i = e && o.times(t).times(mc).div(e.lpTotalInQuoteToken),
                    c =
                      e.tokenPriceVsQuote &&
                      new j.a(e.tokenPriceVsQuote)
                        .times(e.dual.rewardPerBlock)
                        .times(mc)
                        .div(e.lpTotalInQuoteToken);
                  a = i && c && i.plus(c);
                }
                var u = e.lpTotalInQuoteToken;
                return (
                  e.lpTotalInQuoteToken || (u = null),
                  e.quoteTokenSymbol === ac.BNB &&
                    (u = r.times(e.lpTotalInQuoteToken)),
                  e.quoteTokenSymbol === ac.CAKE &&
                    (u = s.times(e.lpTotalInQuoteToken)),
                  Object(Oe.a)(
                    Object(Oe.a)({}, e),
                    {},
                    {
                      apy: a,
                      liquidity: u,
                    }
                  )
                );
              });
            },
            m = b(p),
            f = function (e) {
              var t,
                n = e.quoteTokenAdresses,
                a = e.quoteTokenSymbol,
                i = e.tokenAddresses,
                r =
                  e.lpSymbol &&
                  e.lpSymbol.split(" ")[0].toUpperCase().replace("PANCAKE", "");
              return {
                apr: {
                  value:
                    e.apy &&
                    e.apy
                      .times(new j.a(100))
                      .toNumber()
                      .toLocaleString("en-US", {
                        maximumFractionDigits: 2,
                      }),
                  multiplier: e.multiplier,
                  lpLabel: r,
                  quoteTokenAdresses: n,
                  quoteTokenSymbol: a,
                  tokenAddresses: i,
                  cakePrice: s,
                  originalValue: e.apy,
                },
                farm: {
                  label: r,
                  pid: e.pid,
                  multiplier: e.multiplier,
                },
                earned: {
                  earnings: (
                    null === e ||
                    void 0 === e ||
                    null === (t = e.userData) ||
                    void 0 === t
                      ? void 0
                      : t.earnings
                  )
                    ? hc(new j.a(e.userData.earnings))
                    : 0,
                  pid: e.pid,
                },
                liquidity: {
                  liquidity: e.liquidity,
                },
                multiplier: {
                  multiplier: e.multiplier,
                },
                details: e,
              };
            },
            v = b(y).map(f),
            h = m.map(f),
            x = []
              .concat(Object(xe.a)(v), Object(xe.a)(h))
              .reduce(function (e, t) {
                return (
                  e + (t.earned && t.earned.earnings ? t.earned.earnings : 0)
                );
              }, 0),
            O = hc(Yc(jc()));
          return {
            account: e,
            balance: O,
            sumEarning: x,
            calculatedStakedData: v,
            calculatedTokenData: h,
            bnbPriceUSD: r,
            wadPriceUSD: s,
            wadPriceBNB: o,
          };
        };
      n(1085);
      !(function (e) {
        (e.injected = "MetaMask"),
          (e.walletconnect = "Wallet Connect"),
          (e.bsc = "Binance Chain Wallet");
      })(yc || (yc = {}));
      var zc,
        qc,
        Vc,
        Hc,
        Qc,
        Jc,
        Gc,
        Kc,
        Xc,
        Zc,
        $c,
        eu,
        tu,
        nu = function (e, t) {
          if (e.length <= t) return e;
          var n = t - "...".length,
            a = Math.ceil(n / 2),
            i = Math.floor(n / 2);
          return e.substr(0, a) + "..." + e.substr(e.length - i);
        },
        au = function (e) {
          var t = e.visible,
            n = e.modalPosition,
            a = e.isMobile,
            i = e.onHide,
            r = he().logout,
            s = Wc(),
            o = s.account,
            l = s.balance,
            d = s.sumEarning,
            p = s.wadPriceUSD,
            y = Y().spaceMode,
            b = window.localStorage.getItem("connectorId"),
            m = (function () {
              var e = Object(u.a)(
                c.a.mark(function e() {
                  var t;
                  return c.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!("ethereum" in window)) {
                            e.next = 5;
                            break;
                          }
                          return (
                            (e.next = 3),
                            window.ethereum.request({
                              method: "wallet_watchAsset",
                              params: {
                                type: "ERC20",
                                options: {
                                  address:
                                    "0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc",
                                  symbol: "WAD",
                                  decimals: 18,
                                  image:
                                    "https://image.wardenswap.finance/WAD-Token.png",
                                },
                              },
                            })
                          );
                        case 3:
                          return (t = e.sent), e.abrupt("return", t);
                        case 5:
                          return e.abrupt("return", !1);
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return Object(Qe.jsxs)(xt.Dialog, {
            header: "Your Account",
            visible: t,
            className: "user-wallet-modal-desktop ".concat(
              a ? "user-wallet-modal-mobile" : ""
            ),
            position: n,
            dismissableMask: !0,
            rtl: !0,
            onHide: i,
            children: [
              Object(Qe.jsx)("p", {
                className: "mt-1",
              }),
              Object(Qe.jsxs)("div", {
                className:
                  "flex flex-col items-center h-full space-y-8 md-max:space-y-2",
                children: [
                  Object(Qe.jsx)("div", {
                    className: "wallet-box",
                    children: Object(Qe.jsxs)("div", {
                      className: "flex flex-col items-center space-y-1",
                      children: [
                        Object(Qe.jsxs)("div", {
                          className:
                            "flex flex-row items-center md-max:flex-col",
                          children: [
                            Object(Qe.jsx)(nc.a, {
                              diameter: 40,
                              seed: Object(tc.jsNumberForAddress)(o),
                            }),
                            Object(Qe.jsxs)("div", {
                              className:
                                "flex flex-col ml-3 md-max:ml-0 wallet-detail",
                              children: [
                                Object(Qe.jsxs)("span", {
                                  className: "wallet-detail--connected",
                                  children: [b && yc[b], " Connected"],
                                }),
                                Object(Qe.jsxs)("div", {
                                  className: "flex items-center",
                                  children: [
                                    Object(Qe.jsx)("span", {
                                      className:
                                        "pr-0.5 wallet-detail--address",
                                      children: nu(o, 13),
                                    }),
                                    Object(Qe.jsx)(sc.Button, {
                                      className:
                                        "p-button p-component p-button-icon-only p-button-rounded p-button-text p-button-plain",
                                      onClick: function () {
                                        o &&
                                          navigator.clipboard &&
                                          navigator.clipboard.writeText(o);
                                      },
                                      children: Object(Qe.jsx)("img", {
                                        src: "/images/icon-copy".concat(
                                          y ? "-space" : "",
                                          ".svg"
                                        ),
                                        alt: "copy",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(Qe.jsxs)("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            Object(Qe.jsxs)("button", {
                              type: "button",
                              className:
                                "p-button p-component p-button-rounded p-button-text p-button-plain",
                              onClick: function () {
                                return window.open(
                                  "https://bscscan.com/address/".concat(o),
                                  "_blank"
                                );
                              },
                              children: [
                                Object(Qe.jsx)("img", {
                                  src: "images/icon-bsc-link".concat(
                                    y ? "-space" : "",
                                    ".svg"
                                  ),
                                  alt: "icon",
                                }),
                                Object(Qe.jsx)("span", {
                                  className: "btn-text",
                                  children: "BSC Scan",
                                }),
                              ],
                            }),
                            Object(Qe.jsxs)("button", {
                              type: "button",
                              className:
                                "p-button p-component p-button-rounded p-button-text p-button-plain",
                              onClick: function () {
                                r(),
                                  window.localStorage.removeItem("connectorId"),
                                  i();
                              },
                              children: [
                                Object(Qe.jsx)("img", {
                                  src: "images/icon-disconnect".concat(
                                    y ? "-space" : "",
                                    ".svg"
                                  ),
                                  alt: "icon",
                                }),
                                Object(Qe.jsx)("span", {
                                  className: "btn-text",
                                  children: "Disconnect",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  Object(Qe.jsxs)("div", {
                    className: "wad-balance-wrap",
                    children: [
                      Object(Qe.jsx)("img", {
                        alt: "coin",
                        src: "/images/icon-warden.svg",
                        className: "w-50px",
                      }),
                      d && l
                        ? Object(Qe.jsxs)("span", {
                            className:
                              "pt-2 pb-4 font-bold text-primary text-30 md-max:text-23",
                            children: [(d + l).toLocaleString(), " WAD"],
                          })
                        : 0 === d
                        ? Object(Qe.jsxs)("span", {
                            className:
                              "pt-2 pb-4 font-bold text-primary text-30 md-max:text-23",
                            children: [l.toLocaleString(), " WAD"],
                          })
                        : Object(Qe.jsx)(oc.Skeleton, {
                            width: "30%",
                            height: "2rem",
                            style: {
                              margin: "20px",
                            },
                          }),
                      Object(Qe.jsxs)("div", {
                        className:
                          "flex justify-between w-full mb-1 font-medium text-15 text-primary",
                        children: [
                          Object(Qe.jsx)("div", {
                            children: "Balance",
                          }),
                          l
                            ? Object(Qe.jsxs)("div", {
                                children: [l.toLocaleString(), " WAD"],
                              })
                            : 0 === l
                            ? Object(Qe.jsx)("div", {
                                children: "0 WAD",
                              })
                            : Object(Qe.jsx)(oc.Skeleton, {
                                "v-else": !0,
                                width: "25%",
                              }),
                        ],
                      }),
                      Object(Qe.jsxs)("div", {
                        className:
                          "flex justify-between w-full mb-1 font-medium text-15 text-primary",
                        children: [
                          Object(Qe.jsx)("span", {
                            children: "Unclaimed",
                          }),
                          d
                            ? Object(Qe.jsxs)("span", {
                                children: [d.toLocaleString(), " WAD"],
                              })
                            : 0 === d
                            ? Object(Qe.jsx)("span", {
                                children: "0 WAD",
                              })
                            : Object(Qe.jsx)(oc.Skeleton, {
                                "v-else": !0,
                                width: "18%",
                              }),
                        ],
                      }),
                      Object(Qe.jsx)("div", {
                        className: "divider",
                      }),
                      Object(Qe.jsxs)("div", {
                        className:
                          "flex justify-between w-full mb-1 font-medium text-15 text-primary",
                        children: [
                          Object(Qe.jsx)("div", {
                            children: "WAD Price",
                          }),
                          p
                            ? Object(Qe.jsxs)("div", {
                                children: [p.toFixed(3), " WAD"],
                              })
                            : Object(Qe.jsx)(oc.Skeleton, {
                                "v-else": !0,
                                width: "18%",
                              }),
                        ],
                      }),
                      Object(Qe.jsxs)("div", {
                        role: "presentation",
                        className:
                          "flex w-full mb-1 font-medium text-15 text-primary",
                        onClick: m,
                        children: [
                          Object(Qe.jsx)("span", {
                            children: "Add WAD Token",
                          }),
                          Object(Qe.jsx)("img", {
                            src: "/images/icon-add-wad-token.svg",
                            className: "ml-2 mouse-pointer",
                            alt: "wad token",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        iu =
          (n(1086),
          n(1087),
          function (e) {
            var t = e.name,
              n = e.checked,
              a = e.onToggle;
            return Object(Qe.jsxs)("div", {
              className: "onoffswitch",
              children: [
                Object(Qe.jsx)("input", {
                  type: "checkbox",
                  name: "onoffswitch",
                  className: "onoffswitch-checkbox",
                  id: t,
                  checked: n,
                  onChange: a,
                }),
                Object(Qe.jsx)(Qe.Fragment, {}),
                Object(Qe.jsxs)("label", {
                  className: "onoffswitch-label",
                  htmlFor: t,
                  children: [
                    Object(Qe.jsx)("span", {
                      className: "onoffswitch-inner",
                    }),
                    Object(Qe.jsx)("span", {
                      className: "onoffswitch-switch",
                    }),
                  ],
                }),
              ],
            });
          }),
        ru = q.default.div(
          zc ||
            (zc = Object(W.a)([
              "\n\theight: 1px;\n\twidth: 100%;\n\tbackground-color: var(--color-border-2);\n",
            ]))
        ),
        su = function (e) {
          var t = e.visible,
            n = e.onHide,
            a = Object(b.c)(),
            i = Object(b.d)(function (e) {
              return e.setting;
            }),
            r = i.spaceMode,
            s = i.muteMode,
            o = !Object(v.o)().isXl;
          return Object(Qe.jsxs)(xt.Dialog, {
            header: "Settings",
            visible: t,
            className: "settings-modal-desktop ".concat(
              o ? "settings-modal-mobile" : ""
            ),
            position: o ? "bottom" : "center",
            dismissableMask: !0,
            onHide: n,
            children: [
              Object(Qe.jsxs)("div", {
                className: "setting-item",
                children: [
                  Object(Qe.jsx)("div", {
                    className: "setting-item-img",
                    children: Object(Qe.jsx)("img", {
                      src: r
                        ? "/images/space_mode-space.svg"
                        : "/images/space_mode.svg",
                      alt: "space",
                    }),
                  }),
                  Object(Qe.jsxs)("div", {
                    className: "setting-item-text",
                    children: [
                      Object(Qe.jsx)("h4", {
                        children: "Space Mode",
                      }),
                      Object(Qe.jsxs)("p", {
                        children: [
                          "When your eyes are burning, we would like to invite you to join us on a space trip.",
                          Object(Qe.jsx)("img", {
                            className: "inline",
                            src: "/images/icon-smile.svg",
                            alt: "smile",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(Qe.jsx)("div", {
                    children: Object(Qe.jsx)(iu, {
                      name: "theme",
                      checked: r,
                      onToggle: function () {
                        C();
                        var e = k();
                        a(D(e === g)),
                          document.body.setAttribute("data-theme", e),
                          window.history.pushState("", "", "/");
                      },
                    }),
                  }),
                ],
              }),
              Object(Qe.jsx)(ru, {}),
              Object(Qe.jsxs)("div", {
                className: "setting-item",
                children: [
                  Object(Qe.jsx)("div", {
                    className: "setting-item-img",
                    children: Object(Qe.jsx)("img", {
                      src: r
                        ? "/images/sound_mode-space.svg"
                        : "/images/sound_mode.svg",
                      alt: "sound",
                    }),
                  }),
                  Object(Qe.jsxs)("div", {
                    className: "setting-item-text",
                    children: [
                      Object(Qe.jsx)("h4", {
                        children: "Silent Mode",
                      }),
                      Object(Qe.jsxs)("p", {
                        children: [
                          "If you are annoyed by the \u201cpew pew\u201d noise during token exchange. You can turn off the sound",
                          Object(Qe.jsx)("img", {
                            className: "inline",
                            src: "/images/icon-mute.svg",
                            alt: "mute",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(Qe.jsx)("div", {
                    children: Object(Qe.jsx)(iu, {
                      name: "sound",
                      checked: s,
                      onToggle: function () {
                        w();
                        var e = T();
                        if ((a(P(e)), !e)) {
                          var t = document.getElementById("bgMusic");
                          t && t.play();
                        }
                      },
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        ou =
          (n(289),
          function (e) {
            var t = e.padding,
              n = void 0 === t ? "8px 25px" : t,
              a = Y(),
              i = a.spaceMode,
              r = a.muteMode,
              s = "&t=".concat(i ? "1" : "0", "&s=").concat(r ? "1" : "0");
            return Object(Qe.jsxs)("div", {
              children: [
                Object(Qe.jsx)("div", {
                  className: "flex flex-col network-btn-wrap2",
                  style: {
                    padding: n,
                  },
                  children: Object(Qe.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                      Object(Qe.jsxs)("div", {
                        className: "relative mr-5",
                        children: [
                          Object(Qe.jsx)("img", {
                            src: "/images/icon-bsc-round.svg",
                            alt: "icon-network",
                            width: "25",
                          }),
                          Object(Qe.jsx)("img", {
                            src: "/images/icon-check.svg",
                            alt: "icon-check",
                            className: "w-15px absolute icon-check-position",
                          }),
                        ],
                      }),
                      Object(Qe.jsx)("span", {
                        className: "network-active",
                        children: "Binance Smart Chain",
                      }),
                    ],
                  }),
                }),
                Object(Qe.jsx)("a", {
                  className: "flex flex-col network-btn-wrap2",
                  style: {
                    padding: n,
                  },
                  href: "https://"
                    .concat(
                      "www",
                      ".wardenswap.finance/#/best-rate-swap?network=polygon"
                    )
                    .concat(s),
                  children: Object(Qe.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                      Object(Qe.jsx)("div", {
                        className: "relative mr-5",
                        children: Object(Qe.jsx)("img", {
                          src: "/images/icon-polygon-round.svg",
                          alt: "icon-network",
                          width: "25",
                        }),
                      }),
                      Object(Qe.jsx)("span", {
                        children: "Polygon",
                      }),
                    ],
                  }),
                }),
                Object(Qe.jsx)("a", {
                  className: "flex flex-col network-btn-wrap2",
                  style: {
                    padding: n,
                  },
                  href: "https://"
                    .concat(
                      "www",
                      ".wardenswap.finance/#/best-rate-swap?network=arbitrum"
                    )
                    .concat(s),
                  children: Object(Qe.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                      Object(Qe.jsx)("div", {
                        className: "relative mr-5",
                        children: Object(Qe.jsx)("img", {
                          src: "/images/icon-arbitrum-round.svg",
                          alt: "icon-network",
                          width: "25",
                        }),
                      }),
                      Object(Qe.jsx)("span", {
                        children: "Arbitrum",
                      }),
                    ],
                  }),
                }),
              ],
            });
          }),
        cu = function () {
          return Object(Qe.jsx)("div", {
            className: "dropdown-container",
            children: Object(Qe.jsx)(ou, {}),
          });
        },
        uu =
          (n(480),
          q.default.div(qc || (qc = Object(W.a)(["\n\tdisplay: flex;\n"])))),
        lu = q.default.img(
          Vc ||
            (Vc = Object(W.a)(["\n\tmargin-left: 8px;\n\tcursor: pointer;\n"]))
        ),
        du = function (e, t) {
          if (e.length <= t) return e;
          var n = t - "...".length,
            a = Math.ceil(n / 2),
            i = Math.floor(n / 2);
          return e.substr(0, a) + "..." + e.substr(e.length - i);
        },
        pu = function (e) {
          var t = e.isCorrectNetwork,
            n = e.sum,
            i = e.balance,
            r = Object(a.useState)(!1),
            s = Object(l.a)(r, 2),
            o = s[0],
            c = s[1],
            u = Object(a.useState)(!1),
            d = Object(l.a)(u, 2),
            p = d[0],
            y = d[1],
            b = Object(a.useState)(!1),
            m = Object(l.a)(b, 2),
            f = m[0],
            j = m[1],
            h = Object(z.d)().account,
            x = Y().spaceMode,
            O = Object(a.useState)(!1),
            g = Object(l.a)(O, 2),
            T = g[0],
            w = g[1],
            k = Object(ec.useDetectClickOutside)({
              onTriggered: function () {
                w(!1);
              },
            });
          return Object(Qe.jsxs)(uu, {
            className: "space-x-2",
            children: [
              Object(Qe.jsx)(rc, {
                visible: o,
                isMobile: !1,
                modalPosition: "center",
                onHide: function () {
                  return c(!1);
                },
              }),
              Object(Qe.jsx)(su, {
                visible: f,
                isMobile: !1,
                modalPosition: "center",
                onHide: function () {
                  return j(!1);
                },
              }),
              h &&
                Object(Qe.jsx)(au, {
                  visible: p,
                  isMobile: !1,
                  modalPosition: "center",
                  onHide: function () {
                    return y(!1);
                  },
                  sum: n,
                  balance: i,
                }),
              h
                ? Object(Qe.jsxs)("button", {
                    type: "button",
                    className: "btn-container wallet-account",
                    onClick: function () {
                      y(!0);
                    },
                    children: [
                      Object(Qe.jsx)(v.e, {
                        style: {
                          flex: "1 0 auto",
                        },
                        children: Object(Qe.jsx)(nc.a, {
                          diameter: 25,
                          seed: Object(tc.jsNumberForAddress)(h),
                        }),
                      }),
                      Object(Qe.jsx)("span", {
                        className: "ml-1",
                        children: du(h, 13),
                      }),
                      Object(Qe.jsx)("img", {
                        src: "/images/icon-shape".concat(
                          x ? "-space" : "",
                          ".svg"
                        ),
                        className: "shape",
                        alt: "icon",
                      }),
                    ],
                  })
                : Object(Qe.jsx)("button", {
                    type: "button",
                    className: "btn-container connct-wallet",
                    onClick: function () {
                      c(!0);
                    },
                    children: "Connect wallet",
                  }),
              !t &&
                Object(Qe.jsxs)("button", {
                  type: "button",
                  className: "btn-container wrong-network",
                  children: [
                    Object(Qe.jsx)("img", {
                      src: "/images/icon-wrong-network.svg",
                      alt: "wrong-network",
                    }),
                    Object(Qe.jsx)("span", {
                      children: "Wrong Network",
                    }),
                  ],
                }),
              Object(Qe.jsx)(lu, {
                className: "inline",
                src: "/images/icon-selected-bsc.svg",
                alt: "selected-chain",
                onClick: function (e) {
                  e.preventDefault(),
                    w(function (e) {
                      return !e;
                    });
                },
                ref: k,
              }),
              Object(Qe.jsx)(lu, {
                src: "/images/icon-setting".concat(x ? "-space" : "", ".svg"),
                alt: "setting",
                onClick: function () {
                  j(!0);
                },
              }),
              Object(Qe.jsx)("div", {
                className: "switch-network-position",
                children: T && Object(Qe.jsx)(cu, {}),
              }),
            ],
          });
        },
        yu = function (e) {
          var t = e.styleOption,
            n = Y().spaceMode;
          return Object(Qe.jsxs)("div", {
            className: "flex ".concat(t),
            children: [
              Object(Qe.jsx)("a", {
                href: "https://bit.ly/39dTjER",
                target: "_blank",
                rel: "noreferrer",
                className: "m-2",
                children: Object(Qe.jsx)("img", {
                  alt: "icon",
                  className: "cursor-pointer",
                  src: "/images/icon-gitbook".concat(n ? "-space" : "", ".svg"),
                }),
              }),
              Object(Qe.jsx)("a", {
                href: "https://bit.ly/3urUUjQ",
                target: "_blank",
                rel: "noreferrer",
                className: "m-2",
                children: Object(Qe.jsx)("img", {
                  alt: "icon",
                  className: "cursor-pointer",
                  src: "/images/icon-discord".concat(n ? "-space" : "", ".svg"),
                }),
              }),
              Object(Qe.jsx)("a", {
                href: "https://bit.ly/3hUkHLM",
                target: "_blank",
                rel: "noreferrer",
                className: "m-2",
                children: Object(Qe.jsx)("img", {
                  alt: "icon",
                  className: "cursor-pointer",
                  src: "/images/icon-coinmarketcap".concat(
                    n ? "-space" : "",
                    ".svg"
                  ),
                }),
              }),
              Object(Qe.jsx)("a", {
                href: "https://bit.ly/2Vz7xfJ",
                target: "_blank",
                rel: "noreferrer",
                className: "m-2",
                children: Object(Qe.jsx)("img", {
                  alt: "icon",
                  className: "cursor-pointer",
                  src: "/images/icon-coingecko".concat(
                    n ? "-space" : "",
                    ".svg"
                  ),
                }),
              }),
              Object(Qe.jsx)("a", {
                href: "https://bit.ly/39cZaun",
                target: "_blank",
                rel: "noreferrer",
                className: "m-2",
                children: Object(Qe.jsx)("img", {
                  alt: "icon",
                  className: "cursor-pointer",
                  src: "/images/icon-twitter".concat(n ? "-space" : "", ".svg"),
                }),
              }),
              Object(Qe.jsx)("a", {
                href: "https://bit.ly/3d06D0Q",
                target: "_blank",
                rel: "noreferrer",
                className: "m-2",
                children: Object(Qe.jsx)("img", {
                  alt: "icon",
                  className: "cursor-pointer",
                  src: "/images/icon-medium".concat(n ? "-space" : "", ".svg"),
                }),
              }),
              Object(Qe.jsx)("a", {
                href: "https://bit.ly/3wkmJeK",
                target: "_blank",
                rel: "noreferrer",
                className: "m-2",
                children: Object(Qe.jsx)("img", {
                  alt: "icon",
                  className: "cursor-pointer",
                  src: "/images/icon-telegram".concat(
                    n ? "-space" : "",
                    ".svg"
                  ),
                }),
              }),
              Object(Qe.jsx)("a", {
                href: "https://bit.ly/39fgD59",
                target: "_blank",
                rel: "noreferrer",
                className: "m-2",
                children: Object(Qe.jsx)("img", {
                  alt: "icon",
                  className: "cursor-pointer",
                  src: "/images/icon-github".concat(n ? "-space" : "", ".svg"),
                }),
              }),
            ],
          });
        },
        bu = n(533),
        mu = function (e) {
          var t = e.visible,
            n = e.onHide,
            i = Object(a.useState)(""),
            r = Object(l.a)(i, 2),
            s = r[0],
            o = r[1],
            d = Ye(),
            p = !Object(v.o)().isXl,
            y = window.localStorage.getItem("connectorId"),
            b = Y(),
            m = b.spaceMode,
            f = b.muteMode,
            j =
              ("&t=".concat(m ? "1" : "0", "&s=").concat(f ? "1" : "0"),
              (function () {
                var e = Object(u.a)(
                  c.a.mark(function e() {
                    var t, n, a, i;
                    return c.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              null === d ||
                              void 0 === d ||
                              null === (t = d.connector) ||
                              void 0 === t
                                ? void 0
                                : t.getProvider()
                            );
                          case 2:
                            (n = e.sent),
                              (a = Object(bu.getProviderInfo)(n)),
                              (i = a.name),
                              o(i);
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
            h = he().login;
          j();
          var x = [
            {
              iconPath: "/images/icon-metamask.svg",
              displayText: "MetaMask",
              walletNameSupport: "MetaMask",
              walletProvider: v.d.Injected,
            },
            {
              iconPath: "/images/icon-walletconnect.svg",
              displayText: "WalletConnect",
              walletProvider: v.d.WalletConnect,
            },
            {
              iconPath: "/images/icon-safepal.svg",
              displayText: "SafePal",
              walletNameSupport: "Web3",
              walletProvider: v.d.Injected,
            },
            {
              iconPath: "/images/icon-trust-wallet.svg",
              displayText: "Trust Wallet",
              walletNameSupport: "Trust",
              walletProvider: v.d.Injected,
            },
          ];
          return Object(Qe.jsxs)(xt.Dialog, {
            header: "Select Network",
            visible: t,
            className: "select-network-modal-mobile",
            position: p ? "bottom" : "center",
            dismissableMask: !0,
            onHide: n,
            children: [
              Object(Qe.jsx)(ou, {}),
              Object(Qe.jsx)("div", {
                className: "divider mt-4",
              }),
              Object(Qe.jsxs)("div", {
                children: [
                  Object(Qe.jsx)("p", {
                    className: "text-center text-15 font-medium my-4",
                    children: "Select Wallet",
                  }),
                  Object(Qe.jsx)("div", {
                    className: "flex justify-evenly space-x-2",
                    children: x.map(function (e) {
                      return Object(Qe.jsxs)("div", {
                        role: "presentation",
                        onClick: function () {
                          return (t = e.walletProvider), h(t), void n();
                          var t;
                        },
                        className:
                          "flex flex-col justify-center items-center space-y-2",
                        children: [
                          Object(Qe.jsxs)("div", {
                            className: "icon-wallet-wrapper",
                            children: [
                              Object(Qe.jsx)("img", {
                                src: e.iconPath,
                                alt: "icon-wallet",
                              }),
                              Object(Qe.jsx)("img", {
                                src: "/images/icon-check.svg",
                                alt: "icon-check",
                                className:
                                  "w-20px absolute icon-check-walet-position icon-check-display\n                        ".concat(
                                    y !== e.walletProvider ||
                                      (e.walletNameSupport &&
                                        e.walletNameSupport !== s)
                                      ? ""
                                      : "visible",
                                    "\n                      "
                                  ),
                              }),
                            ],
                          }),
                          Object(Qe.jsx)("div", {
                            className: "text-11 font-medium",
                            children: e.displayText,
                          }),
                        ],
                      });
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        fu = q.default.div(
          Hc ||
            (Hc = Object(W.a)(["\n\tdisplay: flex;\n\tposition: relative;\n"]))
        ),
        ju = q.default.img(
          Qc ||
            (Qc = Object(W.a)([
              "\n\twidth: 30px;\n\tcursor: pointer;\n\tmargin-right: 16px;\n",
            ]))
        ),
        vu = function (e) {
          var t = e.sum,
            n = e.balance,
            i = Object(a.useState)(!1),
            r = Object(l.a)(i, 2),
            s = r[0],
            o = r[1],
            c = Object(a.useState)(!1),
            u = Object(l.a)(c, 2),
            d = u[0],
            p = u[1],
            y = Object(a.useState)(!1),
            b = Object(l.a)(y, 2),
            m = b[0],
            f = b[1],
            j = Y(),
            v = j.spaceMode,
            h = j.muteMode,
            x = "?t=".concat(v ? "1" : "0", "&s=").concat(h ? "1" : "0");
          return Object(Qe.jsxs)(Qe.Fragment, {
            children: [
              Object(Qe.jsxs)("div", {
                children: [
                  Object(Qe.jsxs)("div", {
                    className: "header-container is-desktop",
                    children: [
                      Object(Qe.jsx)("a", {
                        href: "https://"
                          .concat("www", ".wardenswap.finance/#/best-rate-swap")
                          .concat(x),
                        className: "router-link-active",
                        children: Object(Qe.jsx)("img", {
                          className: "logo",
                          src: "/images/farms/warden-logo-1-5-aegis".concat(
                            v ? "-space" : "",
                            ".svg"
                          ),
                          alt: "logo",
                        }),
                      }),
                      Object(Qe.jsxs)("div", {
                        className: "navbar-manu",
                        children: [
                          Object(Qe.jsx)("a", {
                            href: "https://"
                              .concat(
                                "www",
                                ".wardenswap.finance/#/best-rate-swap"
                              )
                              .concat(x),
                            className: "navbar-item",
                            children: Object(Qe.jsx)("span", {
                              className: "navbar-text",
                              children: "Best Rate Swap",
                            }),
                          }),
                          Object(Qe.jsx)("a", {
                            href: "https://"
                              .concat("", "liquidity.wardenswap.finance")
                              .concat(x),
                            className: "navbar-item",
                            children: Object(Qe.jsx)("span", {
                              className: "navbar-text active",
                              children: "Liquidity",
                            }),
                          }),
                          Object(Qe.jsx)("a", {
                            href: "https://"
                              .concat("", "farm.wardenswap.finance")
                              .concat(x, "/#/farm"),
                            className: "navbar-item",
                            children: Object(Qe.jsx)("span", {
                              className: "navbar-text",
                              children: "Farms",
                            }),
                          }),
                          Object(Qe.jsx)("a", {
                            href: "https://"
                              .concat("", "farm.wardenswap.finance")
                              .concat(x),
                            className: "navbar-item",
                            children: Object(Qe.jsx)("span", {
                              className: "navbar-text",
                              children: "Info",
                            }),
                          }),
                          Object(Qe.jsx)("a", {
                            href: "https://".concat(
                              "www",
                              ".wardenswap.finance/nft"
                            ),
                            target: "_blank",
                            rel: "noreferrer",
                            className: "navbar-item",
                            children: Object(Qe.jsx)("span", {
                              className: "navbar-text",
                              children: "NFT",
                            }),
                          }),
                        ],
                      }),
                      Object(Qe.jsx)(pu, {
                        isCorrectNetwork: !0,
                        sum: t,
                        balance: n,
                      }),
                    ],
                  }),
                  Object(Qe.jsxs)("div", {
                    className: "header-container is-mobile",
                    children: [
                      Object(Qe.jsx)("a", {
                        href: "https://"
                          .concat("www", ".wardenswap.finance/#/best-rate-swap")
                          .concat(x),
                        children: Object(Qe.jsx)("img", {
                          className: "logo",
                          src: "/images/farms/warden-logo-1-5-aegis".concat(
                            v ? "-space" : "",
                            ".svg"
                          ),
                          alt: "logo",
                        }),
                      }),
                      Object(Qe.jsxs)(fu, {
                        children: [
                          Object(Qe.jsx)(ju, {
                            className: "inline",
                            src: "/images/icon-selected-bsc.svg",
                            alt: "selected-chain",
                            onClick: function () {
                              f(!0);
                            },
                          }),
                          Object(Qe.jsx)(ju, {
                            src: "/images/icon-setting".concat(
                              v ? "-space" : "",
                              ".svg"
                            ),
                            alt: "setting",
                            onClick: function () {
                              p(!0);
                            },
                          }),
                          Object(Qe.jsx)("button", {
                            style: {
                              border: 0,
                              background: "transparent",
                            },
                            type: "button",
                            onClick: function () {
                              return o(!0);
                            },
                            children: Object(Qe.jsx)("img", {
                              src: "/images/icon-hamberger-menu".concat(
                                v ? "-space" : "",
                                ".svg"
                              ),
                              alt: "menu",
                              style: {
                                width: "30px",
                              },
                            }),
                          }),
                        ],
                      }),
                      Object(Qe.jsxs)($o.Sidebar, {
                        visible: s,
                        baseZIndex: 1e3,
                        position: "right",
                        onHide: function () {
                          return o(!1);
                        },
                        children: [
                          Object(Qe.jsx)("a", {
                            href: "/",
                            onClick: function () {
                              return !1;
                            },
                            className: "router-link-active",
                            children: Object(Qe.jsx)("img", {
                              className: "logo",
                              style: {
                                height: "63px",
                              },
                              src: "/images/farms/warden-logo-1-5-aegis".concat(
                                v ? "-space" : "",
                                ".svg"
                              ),
                              alt: "logo",
                            }),
                          }),
                          Object(Qe.jsx)("a", {
                            href: "https://"
                              .concat(
                                "www",
                                ".wardenswap.finance/#/best-rate-swap"
                              )
                              .concat(x),
                            children: Object(Qe.jsxs)("span", {
                              className:
                                "flex items-center p-4 hover:bg-indigo-500 hover:text-white text-primary",
                              style: {
                                paddingTop: "50px",
                              },
                              children: [
                                Object(Qe.jsx)("span", {
                                  className: "mr-2",
                                  children: " ",
                                }),
                                Object(Qe.jsx)("span", {
                                  children: "Best Rate Swap",
                                }),
                              ],
                            }),
                          }),
                          Object(Qe.jsx)("a", {
                            href: "https://"
                              .concat("", "liquidity.wardenswap.finance")
                              .concat(x),
                            children: Object(Qe.jsxs)("span", {
                              className:
                                "flex items-center p-4 hover:bg-indigo-500 hover:text-white text-primary",
                              children: [
                                Object(Qe.jsx)("span", {
                                  className: "mr-2",
                                  children: " ",
                                }),
                                Object(Qe.jsx)("span", {
                                  children: "Liquidity",
                                }),
                              ],
                            }),
                          }),
                          Object(Qe.jsx)("a", {
                            href: "https://"
                              .concat("", "farm.wardenswap.finance/#/farm")
                              .concat(x),
                            children: Object(Qe.jsxs)("span", {
                              className:
                                "flex items-center p-4 hover:bg-indigo-500 hover:text-white text-primary",
                              children: [
                                Object(Qe.jsx)("span", {
                                  className: "mr-2",
                                  children: " ",
                                }),
                                Object(Qe.jsx)("span", {
                                  children: "Farms",
                                }),
                              ],
                            }),
                          }),
                          Object(Qe.jsx)("a", {
                            href: "https://"
                              .concat("", "farm.wardenswap.finance")
                              .concat(x),
                            children: Object(Qe.jsxs)("span", {
                              className:
                                "flex items-center p-4 hover:bg-indigo-500 hover:text-white text-primary",
                              children: [
                                Object(Qe.jsx)("span", {
                                  className: "mr-2",
                                  children: " ",
                                }),
                                Object(Qe.jsx)("span", {
                                  children: "Info",
                                }),
                              ],
                            }),
                          }),
                          Object(Qe.jsx)("a", {
                            href: "https://".concat(
                              "www",
                              ".wardenswap.finance/nft"
                            ),
                            target: "_blank",
                            rel: "noreferrer",
                            children: Object(Qe.jsxs)("span", {
                              className:
                                "flex items-center p-4 hover:bg-indigo-500 hover:text-white text-primary opacity-75 cursor-not-allowed",
                              children: [
                                Object(Qe.jsx)("span", {
                                  className: "mr-2",
                                  children: " ",
                                }),
                                Object(Qe.jsx)("span", {
                                  children: "NFT",
                                }),
                              ],
                            }),
                          }),
                          Object(Qe.jsx)(yu, {
                            styleOption: "flex-wrap mt-3 w-200px",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(Qe.jsx)(su, {
                visible: d,
                isMobile: !1,
                modalPosition: "center",
                onHide: function () {
                  return p(!1);
                },
              }),
              Object(Qe.jsx)(mu, {
                visible: m,
                onHide: function () {
                  return f(!1);
                },
              }),
            ],
          });
        },
        hu =
          (n(1088),
          function (e, t) {
            if (e.length <= t) return e;
            var n = t - "...".length,
              a = Math.ceil(n / 2),
              i = Math.floor(n / 2);
            return e.substr(0, a) + "..." + e.substr(e.length - i);
          }),
        xu = function (e) {
          var t = e.isCorrectNetwork,
            n = e.sum,
            i = e.balance,
            r = Object(a.useState)(!1),
            s = Object(l.a)(r, 2),
            o = s[0],
            c = s[1],
            u = Object(a.useState)(!1),
            d = Object(l.a)(u, 2),
            p = d[0],
            y = d[1],
            b = Object(z.d)().account,
            m = Y().spaceMode;
          return Object(Qe.jsxs)("div", {
            className: "hidden md-max:block",
            children: [
              Object(Qe.jsx)(rc, {
                visible: o,
                isMobile: !0,
                modalPosition: "bottom",
                onHide: function () {
                  return c(!1);
                },
              }),
              Object(Qe.jsx)(mu, {
                visible: o,
                onHide: function () {
                  return c(!1);
                },
              }),
              b &&
                Object(Qe.jsx)(au, {
                  visible: p,
                  isMobile: !0,
                  modalPosition: "bottom",
                  onHide: function () {
                    return y(!1);
                  },
                  sum: n,
                  balance: i,
                }),
              b
                ? Object(Qe.jsxs)("button", {
                    type: "button",
                    className:
                      "btn-container-mobile wallet-account display-only-mobile",
                    onClick: function () {
                      return y(!0);
                    },
                    children: [
                      Object(Qe.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          Object(Qe.jsx)(nc.a, {
                            diameter: 40,
                            seed: Object(tc.jsNumberForAddress)(b),
                          }),
                          Object(Qe.jsx)("span", {
                            className: "ml-3",
                            style: {
                              color: "var(--color-text-6)",
                            },
                            children: hu(b, 13),
                          }),
                        ],
                      }),
                      Object(Qe.jsx)("img", {
                        src: "/images/icon-shape".concat(
                          m ? "-space" : "",
                          ".svg"
                        ),
                        className: "transform rotate-180",
                        alt: "icon",
                      }),
                    ],
                  })
                : Object(Qe.jsx)("button", {
                    type: "button",
                    className:
                      "display-only-mobile btn-container-mobile connect-wallet",
                    onClick: function () {
                      return c(!0);
                    },
                    children: "Connect Wallet",
                  }),
              !t &&
                Object(Qe.jsxs)("button", {
                  type: "button",
                  className:
                    "display-only-mobile btn-container-mobile wrong-network",
                  children: [
                    Object(Qe.jsx)("img", {
                      src: "/images/icon-wrong-network.svg",
                      alt: "wrong-network",
                    }),
                    Object(Qe.jsx)("span", {
                      children: "Wrong Network",
                    }),
                  ],
                }),
            ],
          });
        },
        Ou =
          (n(1089),
          q.default.img(
            Jc ||
              (Jc = Object(W.a)([
                "\n\twidth: 130px;\n\tmargin-top: 5px;\n\tmargin-left: 5px;\n\t",
                " {\n\t\twidth: 200px;\n\t\tmargin-top: 0;\n\t\tmargin-left: 0;\n\t}\n",
              ])),
            function (e) {
              return e.theme.mediaQueries.lg;
            }
          ),
          Object(q.default)(v.b)(
            Gc ||
              (Gc = Object(W.a)([
                "\n\theight: 25px;\n\twidth: 30px;\n\ttransform: rotate(180deg);\n\t",
                " {\n\t\theight: 16px;\n\t\ttransform: rotate(0deg);\n\t}\n",
              ])),
            function (e) {
              return e.theme.mediaQueries.lg;
            }
          ),
          q.default.div(
            Kc ||
              (Kc = Object(W.a)([
                "\n\tcursor: pointer;\n\tmargin: 0 5px;\n\tborder: 1px solid var(--color-border-2);\n\tborder-radius: 10px;\n\tpadding: 8px;\n\twidth: 55px;\n\ttext-align: center;\n\tfont-weight: 500;\n\tfont-size: 12px;\n\tcolor: var(--color-text-btn);\n\tbackground-color: var(--color-background-3);\n",
              ]))
          )),
        gu = q.default.div(
          Xc ||
            (Xc = Object(W.a)([
              "\n\tcursor: pointer;\n\tmargin: 0 5px;\n\tbackground: var(--color-background-9);\n\tborder-radius: 10px;\n\tpadding: 8px;\n\twidth: 55px;\n\ttext-align: center;\n\tfont-weight: 500;\n\tfont-size: 12px;\n\tcolor: var(--color-text-invert);\n",
            ]))
        ),
        Tu = q.default.div(
          Zc ||
            (Zc = Object(W.a)([
              "\n\tcursor: not-allowed;\n\tmargin: 0 5px;\n\tbackground: #eaeaea;\n\tborder-radius: 10px;\n\tpadding: 8px;\n\twidth: 55px;\n\ttext-align: center;\n\tfont-weight: 500;\n\tfont-size: 12px;\n\tcolor: #9e9e9e;\n",
            ]))
        ),
        wu = q.default.div(
          $c ||
            ($c = Object(W.a)([
              "\n\twidth: 100%;\n\theight: 55px;\n\tbackground: #82affb;\n\tborder-radius: 15px;\n\tcursor: pointer;\n\tcolor: #fff;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin: 15px auto;\n\tfont-weight: bold;\n\tfont-size: 18px;\n\tcursor: pointer;\n",
            ]))
        ),
        ku = q.default.div(
          eu ||
            (eu = Object(W.a)([
              "\n\twidth: 100%;\n\theight: 55px;\n\tbackground: #e9e9e9;\n\tborder-radius: 15px;\n\tcolor: #bdbdbd;\n\tcursor: pointer;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin: 15px auto;\n\tfont-weight: bold;\n\tfont-size: 18px;\n\tcursor: not-allowed;\n",
            ]))
        );
      q.default.div(
        tu ||
          (tu = Object(W.a)([
            "\n\tposition: absolute;\n\tbottom: -23px;\n\twidth: calc(100vw - 100px);\n\tdisplay: flex;\n\tjustify-content: center;\n\t& > div {\n\t\twidth: 45px;\n\t\theight: 45px;\n\t\tborder-radius: 30px;\n\t\tbackground: #202251;\n\t\tdisplay: inline-flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t}\n\n\t",
            " {\n\t\twidth: 445px;\n\t}\n",
          ])),
        function (e) {
          return e.theme.mediaQueries.sm;
        }
      );

      function Cu(e) {
        var t,
          n,
          i,
          r,
          s,
          o,
          d,
          p,
          y,
          m,
          f,
          j,
          h,
          x,
          O,
          g,
          T,
          w,
          k,
          C,
          I,
          N,
          E,
          M,
          A,
          S,
          R,
          B = e.match.params,
          _ = B.currencyIdA,
          U = B.currencyIdB,
          D = e.history,
          P = Ye(),
          F = P.account,
          L = P.chainId,
          W = P.library,
          z = Ia(_),
          q = Ia(U),
          V = cn(),
          Q = Y().spaceMode,
          J = Boolean(
            L &&
              ((z && Object(ge.m)(z, ge.l[L])) ||
                (q && Object(ge.m)(q, ge.l[L])))
          ),
          G = oa(),
          K = Fo(),
          X = K.independentField,
          Z = K.typedValue,
          $ = K.otherTypedValue,
          ee = (function (e, t) {
            var n,
              i,
              r,
              s,
              o,
              c,
              u,
              d = Ye(),
              p = d.account,
              y = d.chainId,
              b = Fo(),
              m = b.independentField,
              f = b.typedValue,
              j = b.otherTypedValue,
              v = m === Eo.CURRENCY_A ? Eo.CURRENCY_B : Eo.CURRENCY_A,
              h = Object(a.useMemo)(
                function () {
                  var n;
                  return (
                    (n = {}),
                    Object(H.a)(
                      n,
                      Eo.CURRENCY_A,
                      null !== e && void 0 !== e ? e : void 0
                    ),
                    Object(H.a)(
                      n,
                      Eo.CURRENCY_B,
                      null !== t && void 0 !== t ? t : void 0
                    ),
                    n
                  );
                },
                [e, t]
              ),
              x = po(h[Eo.CURRENCY_A], h[Eo.CURRENCY_B]),
              O = Object(l.a)(x, 2),
              g = O[0],
              T = O[1],
              w = _s(null === T || void 0 === T ? void 0 : T.liquidityToken),
              k = g === co.NOT_EXISTS || Boolean(w && ge.e.equal(w.raw, Po)),
              C = Sa(null !== p && void 0 !== p ? p : void 0, [
                h[Eo.CURRENCY_A],
                h[Eo.CURRENCY_B],
              ]),
              I =
                ((n = {}),
                Object(H.a)(n, Eo.CURRENCY_A, C[0]),
                Object(H.a)(n, Eo.CURRENCY_B, C[1]),
                n),
              N = Do(f, h[m]),
              E = Object(a.useMemo)(
                function () {
                  if (k) return j && h[v] ? Do(j, h[v]) : void 0;
                  if (N) {
                    var n = Gs(N, y),
                      a = [Js(e, y), Js(t, y)],
                      i = a[0],
                      r = a[1];
                    if (i && r && n && T) {
                      var s = v === Eo.CURRENCY_B ? t : e,
                        o =
                          v === Eo.CURRENCY_B
                            ? T.priceOf(i).quote(n)
                            : T.priceOf(r).quote(n);
                      return s === ge.d ? ge.c.ether(o.raw) : o;
                    }
                  }
                },
                [k, j, h, v, N, e, y, t, T]
              ),
              M =
                ((i = {}),
                Object(H.a)(i, Eo.CURRENCY_A, m === Eo.CURRENCY_A ? N : E),
                Object(H.a)(i, Eo.CURRENCY_B, m === Eo.CURRENCY_A ? E : N),
                i),
              A = Object(a.useMemo)(
                function () {
                  if (k) {
                    var t = M[Eo.CURRENCY_A],
                      n = M[Eo.CURRENCY_B];
                    return t && n
                      ? new ge.h(t.currency, n.currency, t.raw, n.raw)
                      : void 0;
                  }
                  var a = Js(e, y);
                  return T && a ? T.priceOf(a) : void 0;
                },
                [y, e, k, T, M]
              ),
              S = Object(a.useMemo)(
                function () {
                  var e = M[Eo.CURRENCY_A],
                    t = M[Eo.CURRENCY_B],
                    n = [Gs(e, y), Gs(t, y)],
                    a = n[0],
                    i = n[1];
                  if (T && w && a && i) return T.getLiquidityMinted(w, a, i);
                },
                [M, y, T, w]
              ),
              R = Object(a.useMemo)(
                function () {
                  if (S && w) return new ge.g(S.raw, w.add(S).raw);
                },
                [S, w]
              );
            p || (o = "Connect Wallet"),
              g === co.INVALID &&
                (o =
                  null !== (c = o) && void 0 !== c
                    ? c
                    : on(136, "Invalid pair")),
              (M[Eo.CURRENCY_A] && M[Eo.CURRENCY_B]) ||
                (o =
                  null !== (u = o) && void 0 !== u
                    ? u
                    : on(84, "Enter an amount"));
            var B,
              _,
              U = M[Eo.CURRENCY_A],
              D = M[Eo.CURRENCY_B];
            return (
              U &&
                (null === I ||
                void 0 === I ||
                null === (r = I[Eo.CURRENCY_A]) ||
                void 0 === r
                  ? void 0
                  : r.lessThan(U)) &&
                (o = "Insufficient ".concat(
                  null === (B = h[Eo.CURRENCY_A]) || void 0 === B
                    ? void 0
                    : B.symbol,
                  " balance"
                )),
              D &&
                (null === I ||
                void 0 === I ||
                null === (s = I[Eo.CURRENCY_B]) ||
                void 0 === s
                  ? void 0
                  : s.lessThan(D)) &&
                (o = "Insufficient ".concat(
                  null === (_ = h[Eo.CURRENCY_B]) || void 0 === _
                    ? void 0
                    : _.symbol,
                  " balance"
                )),
              {
                dependentField: v,
                currencies: h,
                pair: T,
                pairState: g,
                currencyBalances: I,
                parsedAmounts: M,
                price: A,
                noLiquidity: k,
                liquidityMinted: S,
                poolTokenPercentage: R,
                error: o,
              }
            );
          })(
            null !== z && void 0 !== z ? z : void 0,
            null !== q && void 0 !== q ? q : void 0
          ),
          te = ee.dependentField,
          ne = ee.currencies,
          ae = ee.pair,
          ie = ee.pairState,
          re = ee.currencyBalances,
          se = ee.parsedAmounts,
          oe = ee.price,
          ce = ee.noLiquidity,
          ue = ee.liquidityMinted,
          le = ee.poolTokenPercentage,
          de = ee.error,
          pe = (function (e) {
            var t = Object(b.c)();
            return {
              onFieldAInput: Object(a.useCallback)(
                function (n) {
                  t(
                    Ro({
                      field: Eo.CURRENCY_A,
                      typedValue: n,
                      noLiquidity: !0 === e,
                    })
                  );
                },
                [t, e]
              ),
              onFieldBInput: Object(a.useCallback)(
                function (n) {
                  t(
                    Ro({
                      field: Eo.CURRENCY_B,
                      typedValue: n,
                      noLiquidity: !0 === e,
                    })
                  );
                },
                [t, e]
              ),
            };
          })(ce),
          ye = pe.onFieldAInput,
          be = pe.onFieldBInput,
          me = !de,
          fe = Object(a.useState)(!1),
          je = Object(l.a)(fe, 2),
          ve = je[0],
          he = je[1],
          we = Object(a.useState)(!1),
          ke = Object(l.a)(we, 2),
          Ce = ke[0],
          Ie = ke[1],
          Ne = ua(),
          Ee = Object(l.a)(Ne, 1)[0],
          Me = ca(),
          Ae = Object(l.a)(Me, 1)[0],
          Se = Object(a.useState)(""),
          Re = Object(l.a)(Se, 2),
          Be = Re[0],
          _e = Re[1],
          Pe =
            ((i = {}),
            Object(H.a)(i, X, Z),
            Object(H.a)(
              i,
              te,
              ce
                ? $
                : null !==
                    (t =
                      null === (n = se[te]) || void 0 === n
                        ? void 0
                        : n.toSignificant(6)) && void 0 !== t
                ? t
                : ""
            ),
            i),
          Fe = [Eo.CURRENCY_A, Eo.CURRENCY_B].reduce(function (e, t) {
            return Object(Oe.a)(
              Object(Oe.a)({}, e),
              {},
              Object(H.a)({}, t, Lo(re[t]))
            );
          }, {}),
          Le = [Eo.CURRENCY_A, Eo.CURRENCY_B].reduce(function (e, t) {
            var n, a;
            return Object(Oe.a)(
              Object(Oe.a)({}, e),
              {},
              Object(H.a)(
                {},
                t,
                null === (n = Fe[t]) || void 0 === n
                  ? void 0
                  : n.equalTo(null !== (a = se[t]) && void 0 !== a ? a : "0")
              )
            );
          }, {}),
          We = (function () {
            var e = Ye().chainId,
              t = Ta(),
              n = Object(a.useMemo)(
                function () {
                  var t;
                  return e && null !== (t = De[e]) && void 0 !== t ? t : [];
                },
                [e]
              ),
              i = Object(a.useMemo)(
                function () {
                  return e
                    ? Hn()(Object.keys(t), function (n) {
                        var a,
                          i = t[n];
                        return (null !== (a = Ue[e]) && void 0 !== a ? a : [])
                          .map(function (e) {
                            return e.address === i.address ? null : [e, i];
                          })
                          .filter(function (e) {
                            return null !== e;
                          });
                      })
                    : [];
                },
                [t, e]
              ),
              r = Object(b.d)(function (e) {
                return e.user.pairs;
              }),
              s = Object(a.useMemo)(
                function () {
                  if (!e || !r) return [];
                  var t = r[e];
                  return t
                    ? Object.keys(t).map(function (e) {
                        return [sa(t[e].token0), sa(t[e].token1)];
                      })
                    : [];
                },
                [r, e]
              ),
              o = Object(a.useMemo)(
                function () {
                  return s.concat(i).concat(n);
                },
                [i, n, s]
              );
            return Object(a.useMemo)(
              function () {
                var e = o.reduce(function (e, t) {
                  var n = Object(l.a)(t, 2),
                    a = n[0],
                    i = n[1],
                    r = a.sortsBefore(i),
                    s = r
                      ? "".concat(a.address, ":").concat(i.address)
                      : "".concat(i.address, ":").concat(a.address);
                  return e[s] || (e[s] = r ? [a, i] : [i, a]), e;
                }, {});
                return Object.keys(e).map(function (t) {
                  return e[t];
                });
              },
              [o]
            );
          })(),
          ze = Object(a.useMemo)(
            function () {
              return We.map(function (e) {
                return {
                  liquidityToken: da(e),
                  tokens: e,
                };
              });
            },
            [We]
          ),
          qe = Object(a.useMemo)(
            function () {
              return ze.map(function (e) {
                return e.liquidityToken;
              });
            },
            [ze]
          ),
          Ve = Ea(null !== F && void 0 !== F ? F : void 0, qe),
          He = Object(l.a)(Ve, 2),
          Je = He[0],
          Ge = He[1],
          Ke = Object(a.useMemo)(
            function () {
              return ze.filter(function (e) {
                var t,
                  n = e.liquidityToken;
                return null === (t = Je[n.address]) || void 0 === t
                  ? void 0
                  : t.greaterThan("0");
              });
            },
            [ze, Je]
          ),
          Xe = lo(
            Ke.map(function (e) {
              return e.tokens;
            })
          ),
          Ze =
            Ge ||
            (null === Xe || void 0 === Xe ? void 0 : Xe.length) < Ke.length ||
            (null === Xe || void 0 === Xe
              ? void 0
              : Xe.some(function (e) {
                  return !e;
                })),
          $e = Xe.map(function (e) {
            return Object(l.a)(e, 2)[1];
          }).filter(function (e) {
            return Boolean(e);
          }),
          et = So(se[Eo.CURRENCY_A], Te),
          tt = Object(l.a)(et, 2),
          nt = tt[0],
          at = tt[1],
          it = So(se[Eo.CURRENCY_B], Te),
          rt = Object(l.a)(it, 2),
          st = rt[0],
          ot = rt[1],
          ct = ko();

        function ut() {
          return lt.apply(this, arguments);
        }

        function lt() {
          return (lt = Object(u.a)(
            c.a.mark(function e() {
              var t, n, a, i, r, s, o, u, l, d, p, y, b, m, f, j, v;
              return c.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (L && W && F) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      if (
                        ((n = Jt(0, W, F)),
                        (a = se[Eo.CURRENCY_A]),
                        (i = se[Eo.CURRENCY_B]),
                        a && i && z && q)
                      ) {
                        e.next = 6;
                        break;
                      }
                      return e.abrupt("return");
                    case 6:
                      return (
                        (t = {}),
                        Object(H.a)(t, Eo.CURRENCY_A, Ht(a, ce ? 0 : Ae)[0]),
                        Object(H.a)(t, Eo.CURRENCY_B, Ht(i, ce ? 0 : Ae)[0]),
                        (r = t),
                        (s = Math.ceil(Date.now() / 1e3) + Ee),
                        z === ge.d || q === ge.d
                          ? ((b = q === ge.d),
                            (o = n.estimateGas.addLiquidityETH),
                            (u = n.addLiquidityETH),
                            (l = [
                              null !==
                                (p =
                                  null === (y = Js(b ? z : q, L)) ||
                                  void 0 === y
                                    ? void 0
                                    : y.address) && void 0 !== p
                                ? p
                                : "",
                              (b ? a : i).raw.toString(),
                              r[b ? Eo.CURRENCY_A : Eo.CURRENCY_B].toString(),
                              r[b ? Eo.CURRENCY_B : Eo.CURRENCY_A].toString(),
                              F,
                              s,
                            ]),
                            (d = pt.a.from((b ? i : a).raw.toString())))
                          : ((o = n.estimateGas.addLiquidity),
                            (u = n.addLiquidity),
                            (l = [
                              null !==
                                (m =
                                  null === (f = Js(z, L)) || void 0 === f
                                    ? void 0
                                    : f.address) && void 0 !== m
                                ? m
                                : "",
                              null !==
                                (j =
                                  null === (v = Js(q, L)) || void 0 === v
                                    ? void 0
                                    : v.address) && void 0 !== j
                                ? j
                                : "",
                              a.raw.toString(),
                              i.raw.toString(),
                              r[Eo.CURRENCY_A].toString(),
                              r[Eo.CURRENCY_B].toString(),
                              F,
                              s,
                            ]),
                            (d = null)),
                        Ie(!0),
                        (e.next = 12),
                        o
                          .apply(
                            void 0,
                            Object(xe.a)(l).concat([
                              d
                                ? {
                                    value: d,
                                  }
                                : {},
                            ])
                          )
                          .then(function (e) {
                            return u
                              .apply(
                                void 0,
                                Object(xe.a)(l).concat([
                                  Object(Oe.a)(
                                    Object(Oe.a)(
                                      {},
                                      d
                                        ? {
                                            value: d,
                                          }
                                        : {}
                                    ),
                                    {},
                                    {
                                      gasLimit: Vt(e),
                                    }
                                  ),
                                ])
                              )
                              .then(function (e) {
                                var t, n, a, i;
                                Ie(!1),
                                  ct(e, {
                                    summary: "Add "
                                      .concat(
                                        null === (t = se[Eo.CURRENCY_A]) ||
                                          void 0 === t
                                          ? void 0
                                          : t.toSignificant(3),
                                        " "
                                      )
                                      .concat(
                                        null === (n = ne[Eo.CURRENCY_A]) ||
                                          void 0 === n
                                          ? void 0
                                          : n.symbol,
                                        " and "
                                      )
                                      .concat(
                                        null === (a = se[Eo.CURRENCY_B]) ||
                                          void 0 === a
                                          ? void 0
                                          : a.toSignificant(3),
                                        " "
                                      )
                                      .concat(
                                        null === (i = ne[Eo.CURRENCY_B]) ||
                                          void 0 === i
                                          ? void 0
                                          : i.symbol
                                      ),
                                  }),
                                  _e(e.hash);
                              });
                          })
                          .catch(function (e) {
                            Ie(!1),
                              4001 !==
                                (null === e || void 0 === e
                                  ? void 0
                                  : e.code) && console.error(e);
                          })
                      );
                    case 12:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        var dt = function () {
            var e, t, n, a;
            return ce
              ? Object(Qe.jsx)(vt, {
                  gap: "20px",
                  children: Object(Qe.jsx)(mt, {
                    mt: "20px",
                    borderRadius: "20px",
                    children: Object(Qe.jsxs)(Ti, {
                      children: [
                        Object(Qe.jsx)(js, {
                          currency0: ne[Eo.CURRENCY_A],
                          currency1: ne[Eo.CURRENCY_B],
                          size: gt ? 25 : 33,
                          margin: !0,
                        }),
                        Object(Qe.jsx)("div", {
                          style: {
                            fontSize: "18px",
                            fontWeight: "bold",
                            marginLeft: "17px",
                          },
                          children: ""
                            .concat(
                              null === (e = ne[Eo.CURRENCY_A]) || void 0 === e
                                ? void 0
                                : e.symbol,
                              " - "
                            )
                            .concat(
                              null === (t = ne[Eo.CURRENCY_B]) || void 0 === t
                                ? void 0
                                : t.symbol
                            ),
                        }),
                      ],
                    }),
                  }),
                })
              : Object(Qe.jsxs)(vt, {
                  gap: "20px",
                  children: [
                    Object(Qe.jsx)("p", {
                      style: {
                        fontSize: gt ? "35px" : "48px",
                        color: "var(--color-text-2)",
                        fontWeight: "bold",
                        textAlign: "center",
                        marginTop: gt ? "10px" : "30px",
                      },
                      children:
                        null === ue || void 0 === ue
                          ? void 0
                          : ue.toSignificant(6),
                    }),
                    Object(Qe.jsxs)(Ti, {
                      children: [
                        Object(Qe.jsx)(js, {
                          currency0: ne[Eo.CURRENCY_A],
                          currency1: ne[Eo.CURRENCY_B],
                          size: gt ? 25 : 33,
                          margin: !0,
                        }),
                        Object(Qe.jsx)("div", {
                          style: {
                            fontSize: gt ? "13px" : "18px",
                            fontWeight: "bold",
                            marginLeft: "17px",
                          },
                          children: ""
                            .concat(
                              null === (n = ne[Eo.CURRENCY_A]) || void 0 === n
                                ? void 0
                                : n.symbol,
                              "/"
                            )
                            .concat(
                              null === (a = ne[Eo.CURRENCY_B]) || void 0 === a
                                ? void 0
                                : a.symbol
                            ),
                        }),
                      ],
                    }),
                  ],
                });
          },
          yt = function () {
            return Object(Qe.jsx)(Xo, {
              price: oe,
              currencies: ne,
              parsedAmounts: se,
              noLiquidity: ce,
              onAdd: ut,
              poolTokenPercentage: le,
            });
          },
          bt = "Supplying "
            .concat(
              null === (r = se[Eo.CURRENCY_A]) || void 0 === r
                ? void 0
                : r.toSignificant(6),
              " "
            )
            .concat(
              null === (s = ne[Eo.CURRENCY_A]) || void 0 === s
                ? void 0
                : s.symbol,
              " and "
            )
            .concat(
              null === (o = se[Eo.CURRENCY_B]) || void 0 === o
                ? void 0
                : o.toSignificant(6),
              " "
            )
            .concat(
              null === (d = ne[Eo.CURRENCY_B]) || void 0 === d
                ? void 0
                : d.symbol
            ),
          ft = Object(a.useCallback)(
            function (e) {
              var t = Us(e);
              t === U
                ? D.push("/".concat(U, "/").concat(_))
                : D.push("/".concat(t, "/").concat(U));
            },
            [U, D, _]
          ),
          jt = Object(a.useCallback)(
            function (e) {
              var t = Us(e);
              _ === t
                ? U
                  ? D.push("/".concat(U, "/").concat(t))
                  : D.push("/".concat(t))
                : D.push("/".concat(_ || "ETH", "/").concat(t));
            },
            [_, D, U]
          ),
          ht = Object(a.useCallback)(
            function () {
              he(!1), Be && ye(""), _e("");
            },
            [ye, Be]
          ),
          xt = [
            {
              label: "25%",
              value:
                null !==
                  (p =
                    0.25 *
                    Number(
                      null === (y = Fe[Eo.CURRENCY_A]) || void 0 === y
                        ? void 0
                        : y.toExact()
                    )) && void 0 !== p
                  ? p
                  : 0,
            },
            {
              label: "50%",
              value:
                null !==
                  (m =
                    0.5 *
                    Number(
                      null === (f = Fe[Eo.CURRENCY_A]) || void 0 === f
                        ? void 0
                        : f.toExact()
                    )) && void 0 !== m
                  ? m
                  : 0,
            },
            {
              label: "75%",
              value:
                null !==
                  (j =
                    0.75 *
                    Number(
                      null === (h = Fe[Eo.CURRENCY_A]) || void 0 === h
                        ? void 0
                        : h.toExact()
                    )) && void 0 !== j
                  ? j
                  : 0,
            },
            {
              label: "100%",
              value:
                null !==
                  (x =
                    null === (O = Fe[Eo.CURRENCY_A]) || void 0 === O
                      ? void 0
                      : O.toExact()) && void 0 !== x
                  ? x
                  : 0,
            },
          ],
          Ot = [
            {
              label: "25%",
              value:
                null !==
                  (g =
                    0.25 *
                    Number(
                      null === (T = Fe[Eo.CURRENCY_B]) || void 0 === T
                        ? void 0
                        : T.toExact()
                    )) && void 0 !== g
                  ? g
                  : 0,
            },
            {
              label: "50%",
              value:
                null !==
                  (w =
                    0.5 *
                    Number(
                      null === (k = Fe[Eo.CURRENCY_B]) || void 0 === k
                        ? void 0
                        : k.toExact()
                    )) && void 0 !== w
                  ? w
                  : 0,
            },
            {
              label: "75%",
              value:
                null !==
                  (C =
                    0.75 *
                    Number(
                      null === (I = Fe[Eo.CURRENCY_B]) || void 0 === I
                        ? void 0
                        : I.toExact()
                    )) && void 0 !== C
                  ? C
                  : 0,
            },
            {
              label: "100%",
              value:
                null !==
                  (N =
                    null === (E = Fe[Eo.CURRENCY_B]) || void 0 === E
                      ? void 0
                      : E.toExact()) && void 0 !== N
                  ? N
                  : 0,
            },
          ],
          gt = !Object(v.o)().isXl;
        return Object(Qe.jsx)(Qe.Fragment, {
          children: Object(Qe.jsxs)("div", {
            id: "app",
            className: "main-app",
            children: [
              Object(Qe.jsx)(vu, {}),
              Object(Qe.jsx)(xu, {
                isCorrectNetwork: !0,
              }),
              Object(Qe.jsx)("div", {
                className: "main-container",
                children: Object(Qe.jsxs)("div", {
                  className: "best-rate-swap-container",
                  children: [
                    Object(Qe.jsxs)("div", {
                      className: "mb-6 best-rate-swap-box",
                      children: [
                        Object(Qe.jsx)("div", {
                          style: {
                            marginBottom: "37px",
                          },
                          children: Object(Qe.jsx)("p", {
                            style: {
                              fontSize: "18px",
                              fontWeight: "bold",
                              color: "var(--color-text)",
                            },
                            children: "Add Liquidity",
                          }),
                        }),
                        Object(Qe.jsxs)(Jo, {
                          children: [
                            Object(Qe.jsx)(en, {
                              isOpen: ve,
                              onDismiss: ht,
                              attemptingTxn: Ce,
                              hash: Be,
                              title: ce
                                ? V(1154, "Confirm Supply")
                                : V(1156, "You will receive"),
                              content: function () {
                                return Object(Qe.jsx)($t, {
                                  title: ce
                                    ? V(1154, "Confirm Supply")
                                    : V(1156, "You will receive"),
                                  onDismiss: ht,
                                  topContent: dt,
                                  bottomContent: yt,
                                });
                              },
                              pendingText: bt,
                            }),
                            Object(Qe.jsxs)("div", {
                              children: [
                                Object(Qe.jsxs)("div", {
                                  children: [
                                    Object(Qe.jsx)(Ss, {
                                      value: Pe[Eo.CURRENCY_A],
                                      onUserInput: ye,
                                      onMax: function () {
                                        var e, t;
                                        ye(
                                          null !==
                                            (e =
                                              null ===
                                                (t = Fe[Eo.CURRENCY_A]) ||
                                              void 0 === t
                                                ? void 0
                                                : t.toExact()) && void 0 !== e
                                            ? e
                                            : ""
                                        );
                                      },
                                      onCurrencySelect: function (e) {
                                        ft(e), ye("");
                                      },
                                      showMaxButton: !Le[Eo.CURRENCY_A],
                                      currency: ne[Eo.CURRENCY_A],
                                      id: "add-liquidity-input-tokena",
                                      showCommonBases: !1,
                                    }),
                                    Object(Qe.jsx)("div", {
                                      style: {
                                        display: "inline-flex",
                                        marginTop: "20px",
                                        justifyContent: "center",
                                        width: "100%",
                                        color: "var(--color-text)",
                                      },
                                      children: xt.map(function (e) {
                                        var t, n;
                                        return "0" !==
                                          (null === (t = Fe[Eo.CURRENCY_A]) ||
                                          void 0 === t
                                            ? void 0
                                            : t.toExact()) &&
                                          (null === (n = Fe[Eo.CURRENCY_A]) ||
                                          void 0 === n
                                            ? void 0
                                            : n.toExact())
                                          ? Number(e.value) ===
                                            Number(Pe[Eo.CURRENCY_A])
                                            ? Object(Qe.jsx)(gu, {
                                                onClick: function () {
                                                  return null;
                                                },
                                                children: e.label,
                                              })
                                            : Object(Qe.jsx)(Ou, {
                                                onClick: function () {
                                                  ye(e.value.toString());
                                                },
                                                children: e.label,
                                              })
                                          : Object(Qe.jsx)(Tu, {
                                              onClick: function () {
                                                return null;
                                              },
                                              children: e.label,
                                            });
                                      }),
                                    }),
                                  ],
                                }),
                                Object(Qe.jsx)("div", {
                                  className: "divider",
                                  style: {
                                    background: "var(--color-border-2)",
                                  },
                                  children: Object(Qe.jsx)("img", {
                                    src: "/images/plus.png",
                                    className: "circle-swap",
                                    alt: "icon",
                                  }),
                                }),
                                Object(Qe.jsxs)("div", {
                                  children: [
                                    Object(Qe.jsx)(Ss, {
                                      value: Pe[Eo.CURRENCY_B],
                                      onUserInput: be,
                                      onCurrencySelect: function (e) {
                                        jt(e), be("");
                                      },
                                      onMax: function () {
                                        var e, t;
                                        be(
                                          null !==
                                            (e =
                                              null ===
                                                (t = Fe[Eo.CURRENCY_B]) ||
                                              void 0 === t
                                                ? void 0
                                                : t.toExact()) && void 0 !== e
                                            ? e
                                            : ""
                                        );
                                      },
                                      showMaxButton: !Le[Eo.CURRENCY_B],
                                      currency: ne[Eo.CURRENCY_B],
                                      id: "add-liquidity-input-tokenb",
                                      showCommonBases: !1,
                                    }),
                                    Object(Qe.jsx)("div", {
                                      style: {
                                        display: "inline-flex",
                                        marginTop: "20px",
                                        justifyContent: "center",
                                        width: "100%",
                                      },
                                      children: Ot.map(function (e) {
                                        var t, n;
                                        return "0" !==
                                          (null === (t = Fe[Eo.CURRENCY_B]) ||
                                          void 0 === t
                                            ? void 0
                                            : t.toExact()) &&
                                          (null === (n = Fe[Eo.CURRENCY_B]) ||
                                          void 0 === n
                                            ? void 0
                                            : n.toExact())
                                          ? Number(e.value) ===
                                            Number(Pe[Eo.CURRENCY_B])
                                            ? Object(Qe.jsx)(gu, {
                                                onClick: function () {
                                                  return null;
                                                },
                                                children: e.label,
                                              })
                                            : Object(Qe.jsx)(Ou, {
                                                onClick: function () {
                                                  be(e.value.toString());
                                                },
                                                children: e.label,
                                              })
                                          : Object(Qe.jsx)(Tu, {
                                              onClick: function () {
                                                return null;
                                              },
                                              children: e.label,
                                            });
                                      }),
                                    }),
                                  ],
                                }),
                                Object(Qe.jsx)("div", {
                                  style: {
                                    marginTop: "34px",
                                  },
                                  children: F
                                    ? Object(Qe.jsxs)(vt, {
                                        gap: "md",
                                        children: [
                                          (nt === No.NOT_APPROVED ||
                                            nt === No.PENDING ||
                                            st === No.NOT_APPROVED ||
                                            st === No.PENDING) &&
                                            me &&
                                            Object(Qe.jsxs)(gi, {
                                              children: [
                                                nt !== No.APPROVED &&
                                                  Object(Qe.jsx)(v.a, {
                                                    onClick: at,
                                                    disabled: nt === No.PENDING,
                                                    style: {
                                                      width:
                                                        st !== No.APPROVED
                                                          ? "48%"
                                                          : "100%",
                                                    },
                                                    children:
                                                      nt === No.PENDING
                                                        ? Object(Qe.jsxs)(Go, {
                                                            children: [
                                                              "Approving",
                                                              " ",
                                                              null ===
                                                                (M =
                                                                  ne[
                                                                    Eo
                                                                      .CURRENCY_A
                                                                  ]) ||
                                                              void 0 === M
                                                                ? void 0
                                                                : M.symbol,
                                                            ],
                                                          })
                                                        : "Approve ".concat(
                                                            null ===
                                                              (A =
                                                                ne[
                                                                  Eo.CURRENCY_A
                                                                ]) ||
                                                              void 0 === A
                                                              ? void 0
                                                              : A.symbol
                                                          ),
                                                  }),
                                                st !== No.APPROVED &&
                                                  Object(Qe.jsx)(v.a, {
                                                    onClick: ot,
                                                    disabled: st === No.PENDING,
                                                    style: {
                                                      width:
                                                        nt !== No.APPROVED
                                                          ? "48%"
                                                          : "100%",
                                                      height: "55px",
                                                    },
                                                    children:
                                                      st === No.PENDING
                                                        ? Object(Qe.jsxs)(Go, {
                                                            children: [
                                                              "Approving",
                                                              " ",
                                                              null ===
                                                                (S =
                                                                  ne[
                                                                    Eo
                                                                      .CURRENCY_B
                                                                  ]) ||
                                                              void 0 === S
                                                                ? void 0
                                                                : S.symbol,
                                                            ],
                                                          })
                                                        : "Approve ".concat(
                                                            null ===
                                                              (R =
                                                                ne[
                                                                  Eo.CURRENCY_B
                                                                ]) ||
                                                              void 0 === R
                                                              ? void 0
                                                              : R.symbol
                                                          ),
                                                  }),
                                              ],
                                            }),
                                          ne[Eo.CURRENCY_A] &&
                                          ne[Eo.CURRENCY_B] &&
                                          !de
                                            ? Object(Qe.jsx)(wu, {
                                                onClick: function () {
                                                  G ? ut() : he(!0);
                                                },
                                                children:
                                                  null !== de && void 0 !== de
                                                    ? de
                                                    : "Supply",
                                              })
                                            : Object(Qe.jsx)(ku, {
                                                children:
                                                  null !== de && void 0 !== de
                                                    ? de
                                                    : "Supply",
                                              }),
                                        ],
                                      })
                                    : Object(Qe.jsx)(Qo, {
                                        width: "100%",
                                      }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    ae && !ce && ie !== co.INVALID
                      ? Object(Qe.jsx)("div", {
                          className: "mb-6 best-rate-swap-box",
                          children: Object(Qe.jsx)(so, {
                            showUnwrapped: J,
                            pair: ae,
                          }),
                        })
                      : null,
                    Object(Qe.jsxs)("div", {
                      className: "best-rate-swap-box",
                      children: [
                        Object(Qe.jsx)("div", {
                          style: {
                            marginBottom: "37px",
                          },
                          children: Object(Qe.jsx)("p", {
                            style: {
                              fontSize: "18px",
                              fontWeight: "bold",
                              color: "var(--color-text)",
                            },
                            children: "Your Liquidity",
                          }),
                        }),
                        Object(Qe.jsx)(Jo, {
                          children: F
                            ? Ze
                              ? Object(Qe.jsx)(mt, {
                                  padding: "40px",
                                  children: Object(Qe.jsx)("p", {
                                    children: Object(Qe.jsx)(Go, {
                                      children: "Loading",
                                    }),
                                  }),
                                })
                              : (null === $e || void 0 === $e
                                  ? void 0
                                  : $e.length) > 0
                              ? Object(Qe.jsx)(Qe.Fragment, {
                                  children: $e.map(function (e) {
                                    return Object(Qe.jsx)(
                                      oo,
                                      {
                                        pair: e,
                                      },
                                      e.liquidityToken.address
                                    );
                                  }),
                                })
                              : Object(Qe.jsxs)(mt, {
                                  padding: "40px",
                                  children: [
                                    Object(Qe.jsx)("img", {
                                      src: "/images/empty_lp.png",
                                      style: {
                                        width: "100px",
                                        height: "100px",
                                        margin: "0 auto",
                                      },
                                      alt: "empty",
                                    }),
                                    Object(Qe.jsx)("p", {
                                      style: {
                                        textAlign: "center",
                                        color: "#E0E0E0",
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                        marginTop: "6px",
                                      },
                                      children: V(104, "Empty Liquidity"),
                                    }),
                                  ],
                                })
                            : Object(Qe.jsxs)(mt, {
                                padding: "40px",
                                children: [
                                  Object(Qe.jsx)("img", {
                                    src: "/images/empty_lp.png",
                                    style: {
                                      width: "100px",
                                      height: "100px",
                                      margin: "0 auto",
                                    },
                                    alt: "empty",
                                  }),
                                  Object(Qe.jsx)("p", {
                                    style: {
                                      textAlign: "center",
                                      color: "var(--color-background-11)",
                                      fontSize: "18px",
                                      fontWeight: "bold",
                                      marginTop: "6px",
                                    },
                                    children: V(
                                      156,
                                      "Connect to a wallet to view your liquidity."
                                    ),
                                  }),
                                ],
                              }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              //footer
              Object(Qe.jsxs)("div", {
                className: "container-footer footer-font",
                style: {
                  maxWidth: "100%",
                },
                children: [
                  Object(Qe.jsx)("div", {
                    className: "footer-div-row",
                    children: [
                      Object(Qe.jsx)("div", {
                        className:
                          "footer-div-left col-sm-6 col-md-6 col-lg-7 col-xl-7 col", //left col
                        style: {
                          paddingTop: "1rem !important",
                          paddingBottom: "1rem !important",
                        },
                        children: [],
                      }),
                      Object(Qe.jsx)("div", {
                        className:
                          "footer-div-right col-sm-6 col-md-6 col-lg-5 col-xl-5 col", //right col
                        style: {
                          textAlign: "right",
                          margin: "auto",
                        },
                        children: [
                          Object(Qe.jsx)("div", {
                            className: "container",
                            style: {
                              fontSize: "small",
                            },
                            children: [
                              Object(Qe.jsx)("button", {
                                className: "light-btn",
                                children: "Buy TOY",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var Iu = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;

      function Nu(e) {
        var t = e.match.params.currencyIdA.match(Iu);
        return (null === t || void 0 === t ? void 0 : t.length)
          ? Object(Qe.jsx)(p.a, {
              to: "/add/".concat(t[1], "/").concat(t[2]),
            })
          : Object(Qe.jsx)(Cu, Object(Oe.a)({}, e));
      }

      function Eu(e) {
        var t = e.match.params,
          n = t.currencyIdA,
          a = t.currencyIdB;
        return n.toLowerCase() === a.toLowerCase()
          ? Object(Qe.jsx)(p.a, {
              to: "/add/".concat(n),
            })
          : Object(Qe.jsx)(Cu, Object(Oe.a)({}, e));
      }
      var Mu = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;

      function Au(e) {
        var t = e.match.params.tokens;
        if (!Mu.test(t))
          return Object(Qe.jsx)(p.a, {
            to: "/pool",
          });
        var n = t.split("-"),
          a = Object(l.a)(n, 2),
          i = a[0],
          r = a[1];
        return Object(Qe.jsx)(p.a, {
          to: "/remove/".concat(i, "/").concat(r),
        });
      }
      var Su,
        Ru = n(2);
      !(function (e) {
        (e.LIQUIDITY_PERCENT = "LIQUIDITY_PERCENT"),
          (e.LIQUIDITY = "LIQUIDITY"),
          (e.CURRENCY_A = "CURRENCY_A"),
          (e.CURRENCY_B = "CURRENCY_B");
      })(Su || (Su = {}));
      var Bu,
        _u,
        Uu,
        Du,
        Pu,
        Fu,
        Lu,
        Yu,
        Wu = Object(N.b)("burn/typeInputBurn");

      function zu() {
        return Object(b.d)(function (e) {
          return e.burn;
        });
      }
      q.default.img(
        Bu ||
          (Bu = Object(W.a)([
            "\n\twidth: 130px;\n\tmargin-top: 5px;\n\tmargin-left: 5px;\n\t",
            " {\n\t\twidth: 200px;\n\t\tmargin-top: 0;\n\t\tmargin-left: 0;\n\t}\n",
          ])),
        function (e) {
          return e.theme.mediaQueries.lg;
        }
      ),
        Object(q.default)(v.b)(
          _u ||
            (_u = Object(W.a)([
              "\n\theight: 25px;\n\twidth: 30px;\n\ttransform: rotate(180deg);\n\t",
              " {\n\t\theight: 16px;\n\t\ttransform: rotate(0deg);\n\t}\n",
            ])),
          function (e) {
            return e.theme.mediaQueries.lg;
          }
        );
      var qu = q.default.div(
          Uu ||
            (Uu = Object(W.a)([
              "\n\tcursor: pointer;\n\tmargin: 0 5px;\n\tborder: 1px solid var(--color-border-2);\n\tborder-radius: 10px;\n\tpadding: 8px;\n\twidth: 55px;\n\ttext-align: center;\n\tfont-weight: 500;\n\tfont-size: 12px;\n\tcolor: var(--color-text-btn);\n\tbackground: var(--color-background-3);\n",
            ]))
        ),
        Vu = q.default.div(
          Du ||
            (Du = Object(W.a)([
              "\n\tcursor: pointer;\n\tmargin: 0 5px;\n\tbackground: var(--color-background-9);\n\tborder-radius: 10px;\n\tpadding: 8px;\n\twidth: 55px;\n\ttext-align: center;\n\tfont-weight: 500;\n\tfont-size: 12px;\n\tcolor: var(--color-text-invert);\n",
            ]))
        ),
        Hu = q.default.div(
          Pu ||
            (Pu = Object(W.a)([
              "\n\twidth: 100%;\n\theight: 55px;\n\tbackground: #82affb;\n\tborder-radius: 15px;\n\tcursor: pointer;\n\tcolor: #fff;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin: 15px auto 0;\n\tfont-weight: bold;\n\tfont-size: 18px;\n\tcursor: pointer;\n",
            ]))
        ),
        Qu = q.default.div(
          Fu ||
            (Fu = Object(W.a)([
              "\n\twidth: 100%;\n\theight: 55px;\n\tbackground: var(--color-text-btn-hover-2);\n\tborder-radius: 15px;\n\tcursor: pointer;\n\tcolor: var(--color-text-btn-2);\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin: 15px auto 0;\n\tfont-weight: bold;\n\tfont-size: 18px;\n\tcursor: not-allowed;\n",
            ]))
        ),
        Ju =
          (q.default.div(
            Lu ||
              (Lu = Object(W.a)([
                "\n\tposition: absolute;\n\tbottom: -23px;\n\twidth: calc(100vw - 100px);\n\tdisplay: flex;\n\tjustify-content: center;\n\t& > div {\n\t\twidth: 45px;\n\t\theight: 45px;\n\t\tborder-radius: 30px;\n\t\tbackground: var(--color-text-2);\n\t\tdisplay: inline-flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t}\n\n\t",
                " {\n\t\twidth: 445px;\n\t}\n",
              ])),
            function (e) {
              return e.theme.mediaQueries.sm;
            }
          ),
          q.default.div(
            Yu ||
              (Yu = Object(W.a)([
                "\n\tpadding-left: 24px;\n\tpadding-right: 24px;\n",
              ]))
          ));

      function Gu(e) {
        var t,
          n,
          i,
          r,
          s,
          o,
          p,
          y,
          m,
          f,
          j,
          h,
          x,
          O,
          g = e.history,
          T = e.match.params,
          w = T.currencyIdA,
          k = T.currencyIdB,
          C = null !== (t = Ia(w)) && void 0 !== t ? t : void 0,
          I = null !== (n = Ia(k)) && void 0 !== n ? n : void 0,
          N = Ye(),
          E = N.account,
          M = N.chainId,
          A = N.library,
          S = Object(z.d)(),
          R = (S.activate, S.deactivate, cn()),
          B = Object(a.useMemo)(
            function () {
              return [Js(C, M), Js(I, M)];
            },
            [C, I, M]
          ),
          _ = Object(l.a)(B, 2),
          U = _[0],
          D = _[1],
          P = (Object(a.useContext)(q.ThemeContext), Y().spaceMode),
          F = zu(),
          L = F.independentField,
          W = F.typedValue,
          V = (function (e, t) {
            var n,
              a,
              i,
              r,
              s,
              o = Ye(),
              c = o.account,
              u = o.chainId,
              d = zu(),
              p = d.independentField,
              y = d.typedValue,
              b = po(e, t),
              m = Object(l.a)(b, 2)[1],
              f = Ma(null !== c && void 0 !== c ? c : void 0, [
                null === m || void 0 === m ? void 0 : m.liquidityToken,
              ]),
              j =
                null === f || void 0 === f
                  ? void 0
                  : f[
                      null !==
                        (n =
                          null === m ||
                          void 0 === m ||
                          null === (a = m.liquidityToken) ||
                          void 0 === a
                            ? void 0
                            : a.address) && void 0 !== n
                        ? n
                        : ""
                    ],
              v = [Js(e, u), Js(t, u)],
              h = v[0],
              x = v[1],
              O =
                ((i = {}),
                Object(H.a)(i, Su.CURRENCY_A, h),
                Object(H.a)(i, Su.CURRENCY_B, x),
                Object(H.a)(
                  i,
                  Su.LIQUIDITY,
                  null === m || void 0 === m ? void 0 : m.liquidityToken
                ),
                i),
              g = _s(null === m || void 0 === m ? void 0 : m.liquidityToken),
              T =
                m && g && j && h && ge.e.greaterThanOrEqual(g.raw, j.raw)
                  ? new ge.j(h, m.getLiquidityValue(h, g, j, !1).raw)
                  : void 0,
              w =
                m && g && j && x && ge.e.greaterThanOrEqual(g.raw, j.raw)
                  ? new ge.j(x, m.getLiquidityValue(x, g, j, !1).raw)
                  : void 0,
              k =
                ((r = {}),
                Object(H.a)(r, Su.CURRENCY_A, T),
                Object(H.a)(r, Su.CURRENCY_B, w),
                r),
              C = new ge.g("0", "100");
            if (p === Su.LIQUIDITY_PERCENT) C = new ge.g(y, "100");
            else if (p === Su.LIQUIDITY) {
              if (null === m || void 0 === m ? void 0 : m.liquidityToken) {
                var I = Do(y, m.liquidityToken);
                I && j && !I.greaterThan(j) && (C = new ge.g(I.raw, j.raw));
              }
            } else if (O[p]) {
              var N = Do(y, O[p]),
                E = k[p];
              N && E && !N.greaterThan(E) && (C = new ge.g(N.raw, E.raw));
            }
            var M,
              A,
              S =
                ((s = {}),
                Object(H.a)(s, Su.LIQUIDITY_PERCENT, C),
                Object(H.a)(
                  s,
                  Su.LIQUIDITY,
                  j && C && C.greaterThan("0")
                    ? new ge.j(j.token, C.multiply(j.raw).quotient)
                    : void 0
                ),
                Object(H.a)(
                  s,
                  Su.CURRENCY_A,
                  h && C && C.greaterThan("0") && T
                    ? new ge.j(h, C.multiply(T.raw).quotient)
                    : void 0
                ),
                Object(H.a)(
                  s,
                  Su.CURRENCY_B,
                  x && C && C.greaterThan("0") && w
                    ? new ge.j(x, C.multiply(w.raw).quotient)
                    : void 0
                ),
                s);
            return (
              c || (M = "Connect Wallet"),
              (S[Su.LIQUIDITY] && S[Su.CURRENCY_A] && S[Su.CURRENCY_B]) ||
                (M = null !== (A = M) && void 0 !== A ? A : "Enter an amount"),
              {
                pair: m,
                parsedAmounts: S,
                error: M,
              }
            );
          })(
            null !== C && void 0 !== C ? C : void 0,
            null !== I && void 0 !== I ? I : void 0
          ),
          Q = V.pair,
          J = V.parsedAmounts,
          G = V.error,
          K = (function () {
            var e = Object(b.c)();
            return {
              onUserInput: Object(a.useCallback)(
                function (t, n) {
                  e(
                    Wu({
                      field: t,
                      typedValue: n,
                    })
                  );
                },
                [e]
              ),
            };
          })().onUserInput,
          X = !G,
          Z = Object(a.useState)(!1),
          $ = Object(l.a)(Z, 2),
          ee = $[0],
          te = $[1],
          ne = Object(a.useState)(!1),
          ae = Object(l.a)(ne, 2),
          ie = (ae[0], ae[1], Object(a.useState)(!1)),
          re = Object(l.a)(ie, 2),
          se = re[0],
          oe = re[1],
          ce = Object(a.useState)(""),
          ue = Object(l.a)(ce, 2),
          le = ue[0],
          de = ue[1],
          pe = ua(),
          ye = Object(l.a)(pe, 1)[0],
          be = ca(),
          me = Object(l.a)(be, 1)[0],
          fe =
            ((m = {}),
            Object(H.a)(
              m,
              Su.LIQUIDITY_PERCENT,
              J[Su.LIQUIDITY_PERCENT].equalTo("0")
                ? "0"
                : J[Su.LIQUIDITY_PERCENT].lessThan(new ge.g("1", "100"))
                ? "<1"
                : J[Su.LIQUIDITY_PERCENT].toFixed(0)
            ),
            Object(H.a)(
              m,
              Su.LIQUIDITY,
              L === Su.LIQUIDITY
                ? W
                : null !==
                    (i =
                      null === (r = J[Su.LIQUIDITY]) || void 0 === r
                        ? void 0
                        : r.toSignificant(6)) && void 0 !== i
                ? i
                : ""
            ),
            Object(H.a)(
              m,
              Su.CURRENCY_A,
              L === Su.CURRENCY_A
                ? W
                : null !==
                    (s =
                      null === (o = J[Su.CURRENCY_A]) || void 0 === o
                        ? void 0
                        : o.toSignificant(6)) && void 0 !== s
                ? s
                : ""
            ),
            Object(H.a)(
              m,
              Su.CURRENCY_B,
              L === Su.CURRENCY_B
                ? W
                : null !==
                    (p =
                      null === (y = J[Su.CURRENCY_B]) || void 0 === y
                        ? void 0
                        : y.toSignificant(6)) && void 0 !== p
                ? p
                : ""
            ),
            m),
          je =
            null === (f = J[Su.LIQUIDITY_PERCENT]) || void 0 === f
              ? void 0
              : f.equalTo(new ge.g("1")),
          ve = va(
            null === Q ||
              void 0 === Q ||
              null === (j = Q.liquidityToken) ||
              void 0 === j
              ? void 0
              : j.address,
            ya.a,
            O
          ),
          he = Object(a.useState)(null),
          Oe = Object(l.a)(he, 2),
          we = Oe[0],
          ke = Oe[1],
          Ce = So(J[Su.LIQUIDITY], Te),
          Ie = Object(l.a)(Ce, 2),
          Ne = Ie[0],
          Ee = Ie[1];

        function Me() {
          return (Me = Object(u.a)(
            c.a.mark(function e() {
              var t, n, a, i, r, s, o, u;
              return c.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (ve && Q && A) {
                        e.next = 2;
                        break;
                      }
                      throw new Error("missing dependencies");
                    case 2:
                      if ((t = J[Su.LIQUIDITY])) {
                        e.next = 5;
                        break;
                      }
                      throw new Error("missing liquidity amount");
                    case 5:
                      return (e.next = 7), ve.nonces(E);
                    case 7:
                      (n = e.sent),
                        (a = Math.ceil(Date.now() / 1e3) + ye),
                        (i = [
                          {
                            name: "name",
                            type: "string",
                          },
                          {
                            name: "version",
                            type: "string",
                          },
                          {
                            name: "chainId",
                            type: "uint256",
                          },
                          {
                            name: "verifyingContract",
                            type: "address",
                          },
                        ]),
                        (r = {
                          name: "Warden LPs",
                          version: "1",
                          chainId: M,
                          verifyingContract: Q.liquidityToken.address,
                        }),
                        (s = [
                          {
                            name: "owner",
                            type: "address",
                          },
                          {
                            name: "spender",
                            type: "address",
                          },
                          {
                            name: "value",
                            type: "uint256",
                          },
                          {
                            name: "nonce",
                            type: "uint256",
                          },
                          {
                            name: "deadline",
                            type: "uint256",
                          },
                        ]),
                        (o = {
                          owner: E,
                          spender: Te,
                          value: t.raw.toString(),
                          nonce: n.toHexString(),
                          deadline: a,
                        }),
                        (u = JSON.stringify({
                          types: {
                            EIP712Domain: i,
                            Permit: s,
                          },
                          domain: r,
                          primaryType: "Permit",
                          message: o,
                        })),
                        A.send("eth_signTypedData_v4", [E, u])
                          .then(Ru.splitSignature)
                          .then(function (e) {
                            ke({
                              v: e.v,
                              r: e.r,
                              s: e.s,
                              deadline: a,
                            });
                          })
                          .catch(function (e) {
                            4001 !==
                              (null === e || void 0 === e ? void 0 : e.code) &&
                              Ee();
                          });
                    case 15:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        var Ae = Object(a.useCallback)(
            function (e, t) {
              return ke(null), K(e, t);
            },
            [K]
          ),
          Se = Object(a.useCallback)(
            function (e) {
              return Ae(Su.LIQUIDITY, e);
            },
            [Ae]
          ),
          Re =
            (Object(a.useCallback)(
              function (e) {
                return Ae(Su.CURRENCY_A, e);
              },
              [Ae]
            ),
            Object(a.useCallback)(
              function (e) {
                return Ae(Su.CURRENCY_B, e);
              },
              [Ae]
            ),
            ko());

        function Be() {
          return _e.apply(this, arguments);
        }

        function _e() {
          return (_e = Object(u.a)(
            c.a.mark(function e() {
              var t, n, a, i, r, s, o, u, l, d, p, y, b, m, f;
              return c.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (M && A && E) {
                        e.next = 2;
                        break;
                      }
                      throw new Error("missing dependencies");
                    case 2:
                      if (
                        ((n = J[Su.CURRENCY_A]), (a = J[Su.CURRENCY_B]), n && a)
                      ) {
                        e.next = 5;
                        break;
                      }
                      throw new Error("missing currency amounts");
                    case 5:
                      if (
                        ((i = Jt(0, A, E)),
                        (t = {}),
                        Object(H.a)(t, Su.CURRENCY_A, Ht(n, me)[0]),
                        Object(H.a)(t, Su.CURRENCY_B, Ht(a, me)[0]),
                        (r = t),
                        C && I)
                      ) {
                        e.next = 9;
                        break;
                      }
                      throw new Error("missing tokens");
                    case 9:
                      if ((s = J[Su.LIQUIDITY])) {
                        e.next = 12;
                        break;
                      }
                      throw new Error("missing liquidity amount");
                    case 12:
                      if (
                        ((o = I === ge.d),
                        (u = C === ge.d || o),
                        (l = Math.ceil(Date.now() / 1e3) + ye),
                        U && D)
                      ) {
                        e.next = 17;
                        break;
                      }
                      throw new Error("could not wrap");
                    case 17:
                      if (Ne !== No.APPROVED) {
                        e.next = 21;
                        break;
                      }
                      u
                        ? ((d = [
                            "removeLiquidityETH",
                            "removeLiquidityETHSupportingFeeOnTransferTokens",
                          ]),
                          (p = [
                            o ? U.address : D.address,
                            s.raw.toString(),
                            r[o ? Su.CURRENCY_A : Su.CURRENCY_B].toString(),
                            r[o ? Su.CURRENCY_B : Su.CURRENCY_A].toString(),
                            E,
                            l,
                          ]))
                        : ((d = ["removeLiquidity"]),
                          (p = [
                            U.address,
                            D.address,
                            s.raw.toString(),
                            r[Su.CURRENCY_A].toString(),
                            r[Su.CURRENCY_B].toString(),
                            E,
                            l,
                          ])),
                        (e.next = 26);
                      break;
                    case 21:
                      if (null === we) {
                        e.next = 25;
                        break;
                      }
                      u
                        ? ((d = [
                            "removeLiquidityETHWithPermit",
                            "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
                          ]),
                          (p = [
                            o ? U.address : D.address,
                            s.raw.toString(),
                            r[o ? Su.CURRENCY_A : Su.CURRENCY_B].toString(),
                            r[o ? Su.CURRENCY_B : Su.CURRENCY_A].toString(),
                            E,
                            we.deadline,
                            !1,
                            we.v,
                            we.r,
                            we.s,
                          ]))
                        : ((d = ["removeLiquidityWithPermit"]),
                          (p = [
                            U.address,
                            D.address,
                            s.raw.toString(),
                            r[Su.CURRENCY_A].toString(),
                            r[Su.CURRENCY_B].toString(),
                            E,
                            we.deadline,
                            !1,
                            we.v,
                            we.r,
                            we.s,
                          ])),
                        (e.next = 26);
                      break;
                    case 25:
                      throw new Error(
                        "Attempting to confirm without approval or a signature. Please contact support."
                      );
                    case 26:
                      return (
                        (e.next = 28),
                        Promise.all(
                          d.map(function (e, t) {
                            var n;
                            return (n = i.estimateGas)[e]
                              .apply(n, Object(xe.a)(p))
                              .then(Vt)
                              .catch(function (n) {
                                console.error("estimateGas failed", t, e, p, n);
                              });
                          })
                        )
                      );
                    case 28:
                      if (
                        ((y = e.sent),
                        -1 !==
                          (b = y.findIndex(function (e) {
                            return pt.a.isBigNumber(e);
                          })))
                      ) {
                        e.next = 34;
                        break;
                      }
                      console.error(
                        "This transaction would fail. Please contact support."
                      ),
                        (e.next = 39);
                      break;
                    case 34:
                      return (
                        (m = d[b]),
                        (f = y[b]),
                        oe(!0),
                        (e.next = 39),
                        i[m]
                          .apply(
                            i,
                            Object(xe.a)(p).concat([
                              {
                                gasLimit: f,
                              },
                            ])
                          )
                          .then(function (e) {
                            var t, n;
                            oe(!1),
                              Re(e, {
                                summary: "Remove "
                                  .concat(
                                    null === (t = J[Su.CURRENCY_A]) ||
                                      void 0 === t
                                      ? void 0
                                      : t.toSignificant(3),
                                    " "
                                  )
                                  .concat(
                                    null === C || void 0 === C
                                      ? void 0
                                      : C.symbol,
                                    " and "
                                  )
                                  .concat(
                                    null === (n = J[Su.CURRENCY_B]) ||
                                      void 0 === n
                                      ? void 0
                                      : n.toSignificant(3),
                                    " "
                                  )
                                  .concat(
                                    null === I || void 0 === I
                                      ? void 0
                                      : I.symbol
                                  ),
                              }),
                              de(e.hash);
                          })
                          .catch(function (e) {
                            oe(!1), console.error(e);
                          })
                      );
                    case 39:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        var Ue = !Object(v.o)().isXl;

        function De() {
          var e;
          return Object(Qe.jsxs)(vt, {
            gap: "15px",
            children: [
              Object(Qe.jsx)("p", {
                style: {
                  fontSize: "48px",
                  color: "var(--color-text-2)",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: "30px",
                },
                children:
                  null === (e = J[Su.LIQUIDITY]) || void 0 === e
                    ? void 0
                    : e.toSignificant(6),
              }),
              Object(Qe.jsxs)(Ti, {
                children: [
                  Object(Qe.jsx)(js, {
                    currency0: C,
                    currency1: I,
                    size: Ue ? 25 : 33,
                    margin: !0,
                  }),
                  Object(Qe.jsx)("div", {
                    style: {
                      fontSize: Ue ? "12px" : "18px",
                      fontWeight: "bold",
                      marginLeft: "17px",
                    },
                    children: ""
                      .concat(
                        null === C || void 0 === C ? void 0 : C.symbol,
                        " - "
                      )
                      .concat(null === I || void 0 === I ? void 0 : I.symbol),
                  }),
                ],
              }),
            ],
          });
        }

        function Pe() {
          var e, t;
          return Object(Qe.jsxs)(Qe.Fragment, {
            children: [
              Object(Qe.jsxs)("div", {
                style: {
                  borderBottom: "1px solid var(--color-border-7)",
                  padding: "0 0 20px 0",
                },
                children: [
                  Object(Qe.jsxs)(gi, {
                    children: [
                      Object(Qe.jsx)(ki, {
                        children: Object(Qe.jsxs)(gi, {
                          children: [
                            Object(Qe.jsx)(Ki, {
                              currency: C,
                              style: {
                                marginRight: "8px",
                              },
                            }),
                            Object(Qe.jsxs)("p", {
                              style: {
                                fontSize: Ue ? "13px" : "15px",
                                fontWeight: "bold",
                                color: "var(--color-text-2)",
                              },
                              children: [
                                null === C || void 0 === C ? void 0 : C.symbol,
                                " Withdraw",
                              ],
                            }),
                          ],
                        }),
                      }),
                      Object(Qe.jsx)("p", {
                        style: {
                          fontSize: Ue ? "13px" : "15px",
                          fontWeight: "bold",
                          color: "var(--color-text-2)",
                        },
                        children:
                          null === (e = J[Su.CURRENCY_A]) || void 0 === e
                            ? void 0
                            : e.toSignificant(6),
                      }),
                    ],
                  }),
                  Object(Qe.jsxs)(gi, {
                    children: [
                      Object(Qe.jsx)("div", {
                        style: {
                          display: "inline-block",
                          textAlign: "right",
                          width: "35%",
                        },
                        children: Object(Qe.jsx)("p", {
                          style: {
                            fontSize: "13px",
                            color: "#767676",
                            fontWeight: "bold",
                          },
                          children: "1 ".concat(
                            null === C || void 0 === C ? void 0 : C.symbol
                          ),
                        }),
                      }),
                      Q &&
                        Object(Qe.jsx)("p", {
                          style: {
                            fontSize: "13px",
                            color: "#767676",
                            fontWeight: "bold",
                          },
                          children: ""
                            .concat(
                              U ? Q.priceOf(U).toSignificant(6) : "-",
                              " "
                            )
                            .concat(
                              null === C || void 0 === C ? void 0 : C.symbol
                            ),
                        }),
                    ],
                  }),
                ],
              }),
              Object(Qe.jsxs)("div", {
                style: {
                  borderBottom: "1px solid var(--color-border-7)",
                  paddingBottom: "20px",
                },
                children: [
                  Object(Qe.jsxs)(gi, {
                    children: [
                      Object(Qe.jsx)(ki, {
                        children: Object(Qe.jsxs)(gi, {
                          children: [
                            Object(Qe.jsx)(Ki, {
                              currency: I,
                              style: {
                                marginRight: "8px",
                              },
                            }),
                            Object(Qe.jsxs)("p", {
                              style: {
                                fontSize: Ue ? "13px" : "15px",
                                fontWeight: "bold",
                                color: "var(--color-text-2)",
                              },
                              children: [
                                null === I || void 0 === I ? void 0 : I.symbol,
                                " Withdraw",
                              ],
                            }),
                          ],
                        }),
                      }),
                      Object(Qe.jsx)("p", {
                        style: {
                          fontSize: Ue ? "13px" : "15px",
                          fontWeight: "bold",
                          color: "var(--color-text-2)",
                        },
                        children:
                          null === (t = J[Su.CURRENCY_B]) || void 0 === t
                            ? void 0
                            : t.toSignificant(6),
                      }),
                    ],
                  }),
                  Object(Qe.jsxs)(gi, {
                    children: [
                      Object(Qe.jsx)("div", {
                        style: {
                          display: "inline-block",
                          textAlign: "right",
                          width: "35%",
                        },
                        children: Object(Qe.jsx)("p", {
                          style: {
                            fontSize: "13px",
                            color: "#767676",
                            fontWeight: "bold",
                          },
                          children: "1 ".concat(
                            null === I || void 0 === I ? void 0 : I.symbol
                          ),
                        }),
                      }),
                      Q &&
                        Object(Qe.jsx)("p", {
                          style: {
                            fontSize: "13px",
                            color: "#767676",
                            fontWeight: "bold",
                          },
                          children: ""
                            .concat(
                              D ? Q.priceOf(D).toSignificant(6) : "-",
                              " "
                            )
                            .concat(
                              null === I || void 0 === I ? void 0 : I.symbol
                            ),
                        }),
                    ],
                  }),
                ],
              }),
              Ne !== No.APPROVED && null === we
                ? Object(Qe.jsx)(Qu, {
                    children: R(1136, "Confirm"),
                  })
                : Object(Qe.jsx)(Hu, {
                    onClick: Be,
                    children: R(1136, "Confirm"),
                  }),
            ],
          });
        }
        var Fe = "Removing "
            .concat(
              null === (h = J[Su.CURRENCY_A]) || void 0 === h
                ? void 0
                : h.toSignificant(6),
              " "
            )
            .concat(null === C || void 0 === C ? void 0 : C.symbol, " and ")
            .concat(
              null === (x = J[Su.CURRENCY_B]) || void 0 === x
                ? void 0
                : x.toSignificant(6),
              " "
            )
            .concat(null === I || void 0 === I ? void 0 : I.symbol),
          Le = Object(a.useCallback)(
            function (e) {
              Ae(Su.LIQUIDITY_PERCENT, e.toString());
            },
            [Ae]
          ),
          We =
            (C === ge.d || ge.d,
            Boolean(
              M &&
                ((C && Object(ge.m)(ge.l[M], C)) ||
                  (I && Object(ge.m)(ge.l[M], I)))
            )),
          ze =
            (Object(a.useCallback)(
              function (e) {
                k && Us(e) === k
                  ? g.push("/remove/".concat(Us(e), "/").concat(w))
                  : g.push("/remove/".concat(Us(e), "/").concat(k));
              },
              [w, k, g]
            ),
            Object(a.useCallback)(
              function (e) {
                w && Us(e) === w
                  ? g.push("/remove/".concat(k, "/").concat(Us(e)))
                  : g.push("/remove/".concat(w, "/").concat(Us(e)));
              },
              [w, k, g]
            ),
            Object(a.useCallback)(
              function () {
                te(!1), ke(null), le && Ae(Su.LIQUIDITY_PERCENT, "0"), de("");
              },
              [Ae, le]
            )),
          qe = (function (e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 100,
              i = Object(a.useState)(function () {
                return e;
              }),
              r = Object(l.a)(i, 2),
              s = r[0],
              o = r[1],
              c = Object(a.useRef)(),
              u = Object(a.useCallback)(
                function (e) {
                  o(e),
                    c.current && clearTimeout(c.current),
                    (c.current = setTimeout(function () {
                      t(e), (c.current = void 0);
                    }, n));
                },
                [n, t]
              );
            return (
              Object(a.useEffect)(
                function () {
                  c.current && (clearTimeout(c.current), (c.current = void 0)),
                    o(e);
                },
                [e]
              ),
              [s, u]
            );
          })(Number.parseInt(J[Su.LIQUIDITY_PERCENT].toFixed(0)), Le),
          Ve = Object(l.a)(qe, 2);
        Ve[0], Ve[1];
        return Object(Qe.jsx)(Qe.Fragment, {
          children: Object(Qe.jsxs)("div", {
            id: "app",
            className: "main-app",
            children: [
              Object(Qe.jsx)(vu, {}),
              Object(Qe.jsx)(xu, {
                isCorrectNetwork: !0,
              }),
              Object(Qe.jsx)("div", {
                className: "main-container",
                children: Object(Qe.jsxs)("div", {
                  className: "best-rate-swap-container",
                  children: [
                    Object(Qe.jsxs)("div", {
                      className: "mb-6 best-rate-swap-box",
                      children: [
                        Object(Qe.jsxs)("div", {
                          style: {
                            marginBottom: "37px",
                            display: "flex",
                            justifyContent: "space-between",
                          },
                          children: [
                            Object(Qe.jsx)("p", {
                              style: {
                                fontSize: "18px",
                                fontWeight: "bold",
                                color: "var(--color-text)",
                              },
                              children: "Remove LP Tokens",
                            }),
                            Object(Qe.jsx)(d.b, {
                              to: "/",
                              children: Object(Qe.jsx)("img", {
                                src: "/images/icon-close".concat(
                                  P ? "-space" : "",
                                  ".svg"
                                ),
                                alt: "close",
                              }),
                            }),
                          ],
                        }),
                        Object(Qe.jsxs)(Jo, {
                          children: [
                            Object(Qe.jsx)(en, {
                              isOpen: ee,
                              onDismiss: ze,
                              attemptingTxn: se,
                              hash: le || "",
                              title: R(1156, "Confirm Remove"),
                              content: function () {
                                return Object(Qe.jsx)($t, {
                                  title: R(1156, "Confirm Remove"),
                                  onDismiss: ze,
                                  topContent: De,
                                  bottomContent: Pe,
                                });
                              },
                              pendingText: Fe,
                            }),
                            Object(Qe.jsxs)("div", {
                              children: [
                                Object(Qe.jsx)(Ss, {
                                  value: fe[Su.LIQUIDITY],
                                  onUserInput: Se,
                                  onMax: function () {
                                    Ae(Su.LIQUIDITY_PERCENT, "100");
                                  },
                                  showMaxButton: !je,
                                  disableCurrencySelect: !0,
                                  currency:
                                    null === Q || void 0 === Q
                                      ? void 0
                                      : Q.liquidityToken,
                                  pair: Q,
                                  id: "liquidity-remove",
                                }),
                                Object(Qe.jsxs)("div", {
                                  style: {
                                    display: "inline-flex",
                                    marginTop: "20px",
                                    justifyContent: "center",
                                    width: "100%",
                                  },
                                  children: [
                                    "25" === fe[Su.LIQUIDITY_PERCENT]
                                      ? Object(Qe.jsx)(Vu, {
                                          children: "25%",
                                        })
                                      : Object(Qe.jsx)(qu, {
                                          onClick: function () {
                                            return Ae(
                                              Su.LIQUIDITY_PERCENT,
                                              "25"
                                            );
                                          },
                                          children: "25%",
                                        }),
                                    "50" === fe[Su.LIQUIDITY_PERCENT]
                                      ? Object(Qe.jsx)(Vu, {
                                          children: "50%",
                                        })
                                      : Object(Qe.jsx)(qu, {
                                          onClick: function () {
                                            return Ae(
                                              Su.LIQUIDITY_PERCENT,
                                              "50"
                                            );
                                          },
                                          children: "50%",
                                        }),
                                    "75" === fe[Su.LIQUIDITY_PERCENT]
                                      ? Object(Qe.jsx)(Vu, {
                                          children: "75%",
                                        })
                                      : Object(Qe.jsx)(qu, {
                                          onClick: function () {
                                            return Ae(
                                              Su.LIQUIDITY_PERCENT,
                                              "75"
                                            );
                                          },
                                          children: "75%",
                                        }),
                                    "100" === fe[Su.LIQUIDITY_PERCENT]
                                      ? Object(Qe.jsx)(Vu, {
                                          children: "100%",
                                        })
                                      : Object(Qe.jsx)(qu, {
                                          onClick: function () {
                                            return Ae(
                                              Su.LIQUIDITY_PERCENT,
                                              "100"
                                            );
                                          },
                                          children: "100%",
                                        }),
                                  ],
                                }),
                              ],
                            }),
                            Object(Qe.jsx)("div", {
                              className: "divider",
                              children: Object(Qe.jsx)("img", {
                                src: "/images/minus.png",
                                className: "circle-swap",
                                alt: "icon",
                              }),
                            }),
                            Object(Qe.jsxs)("div", {
                              children: [
                                Object(Qe.jsx)("div", {
                                  style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginBottom: "32px",
                                  },
                                  children: Object(Qe.jsx)("p", {
                                    style: {
                                      color: "var(--color-text-2)",
                                      fontWeight: "bold",
                                      fontSize: "18px",
                                    },
                                    children: "You Receive",
                                  }),
                                }),
                                Object(Qe.jsxs)(vt, {
                                  gap: "10px",
                                  children: [
                                    Object(Qe.jsxs)(Ti, {
                                      justify: "flex-start",
                                      mb: "15px",
                                      children: [
                                        Object(Qe.jsxs)(Ti, {
                                          justify: "flex-start",
                                          width: "35%",
                                          children: [
                                            Object(Qe.jsx)(Ki, {
                                              size: "33px",
                                              currency: C,
                                              style: {
                                                marginRight: "8px",
                                              },
                                            }),
                                            Object(Qe.jsx)("p", {
                                              style: {
                                                fontSize: "16px",
                                                fontWeight: "bold",
                                                color: "var(--color-text-2)",
                                                marginRight: "26px",
                                              },
                                              children:
                                                null === C || void 0 === C
                                                  ? void 0
                                                  : C.symbol,
                                            }),
                                          ],
                                        }),
                                        Object(Qe.jsx)("p", {
                                          style: {
                                            fontSize: "25px",
                                            fontWeight: "bold",
                                            color: "var(--color-text-2)",
                                          },
                                          children: fe[Su.CURRENCY_A] || "-",
                                        }),
                                      ],
                                    }),
                                    Object(Qe.jsxs)(Ti, {
                                      justify: "flex-start",
                                      children: [
                                        Object(Qe.jsxs)(Ti, {
                                          justify: "flex-start",
                                          width: "35%",
                                          children: [
                                            Object(Qe.jsx)(Ki, {
                                              size: "33px",
                                              currency: I,
                                              style: {
                                                marginRight: "8px",
                                              },
                                            }),
                                            Object(Qe.jsx)("p", {
                                              style: {
                                                fontSize: "16px",
                                                fontWeight: "bold",
                                                color: "var(--color-text-2)",
                                                marginRight: "26px",
                                              },
                                              children:
                                                null === I || void 0 === I
                                                  ? void 0
                                                  : I.symbol,
                                            }),
                                          ],
                                        }),
                                        Object(Qe.jsx)("p", {
                                          style: {
                                            fontSize: "25px",
                                            fontWeight: "bold",
                                            color: "var(--color-text-2)",
                                          },
                                          children: fe[Su.CURRENCY_B] || "-",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Q &&
                              Object(Qe.jsxs)("div", {
                                children: [
                                  Object(Qe.jsx)("div", {
                                    style: {
                                      padding: "30px 30px",
                                      borderBottom: "1px solid #EAEAEA",
                                    },
                                    children: Object(Qe.jsxs)(Ci, {
                                      children: [
                                        Object(Qe.jsxs)("p", {
                                          style: {
                                            fontSize: "15px",
                                            fontWeight: 500,
                                            color: "var(--color-text-2)",
                                            marginRight: "26px",
                                          },
                                          children: [
                                            null === C || void 0 === C
                                              ? void 0
                                              : C.symbol,
                                            " per ",
                                            null === I || void 0 === I
                                              ? void 0
                                              : I.symbol,
                                          ],
                                        }),
                                        Object(Qe.jsxs)("p", {
                                          style: {
                                            fontSize: "15px",
                                            fontWeight: "bold",
                                            color: "var(--color-text-2)",
                                            marginRight: "26px",
                                          },
                                          children: [
                                            U && Q
                                              ? Q.priceOf(U).toSignificant(6)
                                              : "-",
                                            " ",
                                            null === I || void 0 === I
                                              ? void 0
                                              : I.symbol,
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(Qe.jsx)("div", {
                                    style: {
                                      padding: "30px 30px",
                                      borderBottom: "1px solid #EAEAEA",
                                    },
                                    children: Object(Qe.jsxs)(Ci, {
                                      children: [
                                        Object(Qe.jsxs)("p", {
                                          style: {
                                            fontSize: "15px",
                                            fontWeight: 500,
                                            color: "var(--color-text-2)",
                                            marginRight: "26px",
                                          },
                                          children: [
                                            null === I || void 0 === I
                                              ? void 0
                                              : I.symbol,
                                            " per ",
                                            null === C || void 0 === C
                                              ? void 0
                                              : C.symbol,
                                          ],
                                        }),
                                        Object(Qe.jsxs)("p", {
                                          style: {
                                            fontSize: "15px",
                                            fontWeight: "bold",
                                            color: "var(--color-text-2)",
                                            marginRight: "26px",
                                          },
                                          children: [
                                            D && Q
                                              ? Q.priceOf(D).toSignificant(6)
                                              : "-",
                                            " ",
                                            null === C || void 0 === C
                                              ? void 0
                                              : C.symbol,
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            Object(Qe.jsx)(Ju, {
                              style: {
                                marginTop: "34px",
                              },
                              children: Object(Qe.jsx)("div", {
                                style: {
                                  position: "relative",
                                },
                                children: E
                                  ? Object(Qe.jsxs)("div", {
                                      children: [
                                        Ne !== No.NOT_APPROVED || null !== we
                                          ? Object(Qe.jsx)(Qu, {
                                              children:
                                                Ne === No.PENDING
                                                  ? Object(Qe.jsx)(Xs, {
                                                      children: "Approving",
                                                    })
                                                  : Ne === No.APPROVED ||
                                                    null !== we
                                                  ? "Approved"
                                                  : "Approve",
                                            })
                                          : Object(Qe.jsx)(Hu, {
                                              onClick: function () {
                                                return Me.apply(
                                                  this,
                                                  arguments
                                                );
                                              },
                                              children: "Approve",
                                            }),
                                        !X ||
                                        (null === we && Ne !== No.APPROVED)
                                          ? Object(Qe.jsx)(Qu, {
                                              children: G || "Remove LP Token",
                                            })
                                          : Object(Qe.jsx)(Hu, {
                                              onClick: function () {
                                                return (
                                                  !(
                                                    !X ||
                                                    (null === we &&
                                                      Ne !== No.APPROVED)
                                                  ) && (te(!0), !0)
                                                );
                                              },
                                              children: G || "Remove LP Token",
                                            }),
                                      ],
                                    })
                                  : Object(Qe.jsx)(Qo, {
                                      width: "100%",
                                    }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    Q
                      ? Object(Qe.jsx)("div", {
                          className: "best-rate-swap-box",
                          children: Object(Qe.jsx)(so, {
                            showUnwrapped: We,
                            pair: Q,
                          }),
                        })
                      : null,
                  ],
                }),
              }),
              Object(Qe.jsxs)("div", {
                className: "footer-container",
                children: [
                  Object(Qe.jsx)("div", {
                    className: "md-max:hidden",
                    children: Object(Qe.jsx)(yu, {}),
                  }),
                  Object(Qe.jsx)("div", {
                    className:
                      "flex space-x-3 md-max:flex-col md-max:items-center md-max:space-x-0 md-max:space-y-4",
                    children: Object(Qe.jsxs)("div", {
                      className: "flex",
                      children: [
                        Object(Qe.jsxs)("div", {
                          className: "flex items-center flex-none mr-3",
                          children: [
                            Object(Qe.jsx)("img", {
                              className: "float-left",
                              src: "/images/icon-pass-audit.svg",
                              alt: "icon",
                            }),
                            Object(Qe.jsx)("span", {
                              className: "whitespace-no-wrap",
                              children: "Audited by",
                            }),
                          ],
                        }),
                        Object(Qe.jsx)("img", {
                          className: "float-left",
                          src: "/images/icon-certik".concat(
                            P ? "-space" : "",
                            ".svg"
                          ),
                          alt: "icon",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }

      function Ku(e) {
        var t = e.location;
        return Object(Qe.jsx)(p.a, {
          to: Object(Oe.a)(
            Object(Oe.a)({}, t),
            {},
            {
              pathname: "/swap",
            }
          ),
        });
      }
      var Xu = {
          code: "en",
          language: "English",
        },
        Zu = [
          Xu,
          {
            code: "ar",
            language: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
          },
          {
            code: "bn",
            language: "\u09ac\u09be\u0982\u09b2\u09be",
          },
          {
            code: "zh-CN",
            language: "\u7b80\u4f53\u4e2d\u6587",
          },
          {
            code: "zh-TW",
            language: "\u7e41\u9ad4\u4e2d\u6587",
          },
          {
            code: "nl",
            language: "Nederlands",
          },
          {
            code: "fil",
            language: "Filipino",
          },
          {
            code: "fi",
            language: "Suomalainen",
          },
          {
            code: "fr",
            language: "Fran\xe7ais",
          },
          {
            code: "de",
            language: "Deutsch",
          },
          {
            code: "el",
            language: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
          },
          {
            code: "hi",
            language: "\u0939\u093f\u0902\u0926\u0940",
          },
          {
            code: "hu",
            language: "Magyar",
          },
          {
            code: "id",
            language: "Bahasa Indonesia",
          },
          {
            code: "it",
            language: "Italiano",
          },
          {
            code: "ja",
            language: "\u65e5\u672c\u8a9e",
          },
          {
            code: "ko",
            language: "\ud55c\uad6d\uc5b4",
          },
          {
            code: "pl",
            language: "Polski",
          },
          {
            code: "pt-PT",
            language: "Portugu\xeas (Portugal)",
          },
          {
            code: "pt-BR",
            language: "Portugu\xeas (Brasil)",
          },
          {
            code: "ro",
            language: "Rom\xe2n\u0103",
          },
          {
            code: "ru",
            language: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
          },
          {
            code: "es-ES",
            language: "Espa\xf1ol",
          },
          {
            code: "sv-SE",
            language: "Svenska",
          },
          {
            code: "ta",
            language: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd",
          },
          {
            code: "tr",
            language: "T\xfcrk\xe7e",
          },
          {
            code: "uk",
            language:
              "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
          },
          {
            code: "vi",
            language: "Ti\u1ebfng Vi\u1ec7t",
          },
        ],
        $u = {
          selectedLanguage: {
            code: "",
            language: "",
          },
          setSelectedLanguage: function () {},
          translatedLanguage: {
            code: "",
            language: "",
          },
          setTranslatedLanguage: function () {},
        },
        el = Object(a.createContext)($u);
      n(1090), n(1091), n(1092), n(1093), n(1094);

      function tl() {
        var e = Object(a.useState)(void 0),
          t = Object(l.a)(e, 2),
          n = t[0],
          i = t[1],
          r = Object(a.useState)(void 0),
          s = Object(l.a)(r, 2),
          o = s[0],
          m = s[1],
          f = Object(a.useState)([]),
          j = Object(l.a)(f, 2),
          v = (j[0], j[1]),
          h = "".concat(
            Object({
              NODE_ENV: "production",
              PUBLIC_URL: ".",
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
              REACT_APP_NETWORK_URL: "https://bsc-dataseed1.defibit.io",
              REACT_APP_CHAIN_ID: "56",
              REACT_APP_GTAG: "GTM-TLF66T4",
              REACT_APP_NODE_1: "https://bsc-dataseed1.ninicoin.io",
              REACT_APP_NODE_2: "https://bsc-dataseed1.defibit.io",
              REACT_APP_NODE_3: "https://bsc-dataseed.binance.org",
              REACT_APP_SUBGRAPH_PROFILE:
                "https://api.thegraph.com/subgraphs/name/pancakeswap/profile",
              REACT_APP_ENV: "production",
            }).REACT_APP_CROWDIN_APIKEY
          ),
          x = parseInt(
            "".concat(
              Object({
                NODE_ENV: "production",
                PUBLIC_URL: ".",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
                REACT_APP_NETWORK_URL: "https://bsc-dataseed1.defibit.io",
                REACT_APP_CHAIN_ID: "56",
                REACT_APP_GTAG: "GTM-TLF66T4",
                REACT_APP_NODE_1: "https://bsc-dataseed1.ninicoin.io",
                REACT_APP_NODE_2: "https://bsc-dataseed1.defibit.io",
                REACT_APP_NODE_3: "https://bsc-dataseed.binance.org",
                REACT_APP_SUBGRAPH_PROFILE:
                  "https://api.thegraph.com/subgraphs/name/pancakeswap/profile",
                REACT_APP_ENV: "production",
              }).REACT_APP_CROWDIN_PROJECTID
            )
          );
        !(function () {
          var e = Object(b.c)(),
            t = k(),
            n = window.location.search.split("t=")[1];
          n && (n = n.slice(0, 1)), n ? ("1" === n ? g : O) !== t && C() : k();
          var a = T(),
            i = window.location.search.split("s=")[1];
          i && (i = i.slice(0, 1)), i ? ("1" === i) !== a && w() : T();
          var r = t === g;
          e(P(!!a)), e(D(r)), document.body.setAttribute("data-theme", t);
        })();
        var I = {
            token: h,
          },
          N = new y.StringTranslations(I);
        Object(a.useEffect)(function () {
          var e = localStorage.getItem("pancakeSwapLanguage");
          if (e) {
            var t = (function (e) {
              return Zu.filter(function (t) {
                return t.code === e;
              })[0];
            })(e);
            i(t);
          } else i(Xu);
        }, []);
        var E = (function () {
          var e = Object(u.a)(
            c.a.mark(function e() {
              return c.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      N.listLanguageTranslations(x, n.code, void 0, 6, 200)
                        .then(function (e) {
                          e.data.length < 1 ? v(["error"]) : v(e.data);
                        })
                        .then(function () {
                          return m(n);
                        })
                        .catch(function (e) {
                          v(["error"]), console.error(e);
                        });
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
        return (
          Object(a.useEffect)(
            function () {
              n && E();
            },
            [n]
          ),
          Object(Qe.jsx)(a.Suspense, {
            fallback: null,
            children: Object(Qe.jsxs)(d.a, {
              children: [
                Object(Qe.jsx)(el.Provider, {
                  value: {
                    selectedLanguage: n,
                    setSelectedLanguage: i,
                    translatedLanguage: o,
                    setTranslatedLanguage: m,
                  },
                  children: Object(Qe.jsx)($e, {
                    children: Object(Qe.jsxs)(p.d, {
                      children: [
                        Object(Qe.jsx)(p.b, {
                          exact: !0,
                          path: "/",
                          component: Cu,
                        }),
                        Object(Qe.jsx)(p.b, {
                          exact: !0,
                          strict: !0,
                          path: "/remove/:currencyIdA/:currencyIdB",
                          component: Gu,
                        }),
                        Object(Qe.jsx)(p.b, {
                          exact: !0,
                          path: "/:currencyIdA",
                          component: Nu,
                        }),
                        Object(Qe.jsx)(p.b, {
                          exact: !0,
                          path: "/:currencyIdA/:currencyIdB",
                          component: Eu,
                        }),
                        Object(Qe.jsx)(p.b, {
                          exact: !0,
                          strict: !0,
                          path: "/remove/:tokens",
                          component: Au,
                        }),
                        Object(Qe.jsx)(p.b, {
                          component: Ku,
                        }),
                      ],
                    }),
                  }),
                }),
                Object(Qe.jsx)(dt, {}),
              ],
            }),
          })
        );
      }
      var nl = "visibilityState" in document;

      function al() {
        return !nl || "hidden" !== document.visibilityState;
      }

      function il() {
        var e = Object(a.useState)(al()),
          t = Object(l.a)(e, 2),
          n = t[0],
          i = t[1],
          r = Object(a.useCallback)(
            function () {
              i(al());
            },
            [i]
          );
        return (
          Object(a.useEffect)(
            function () {
              if (nl)
                return (
                  document.addEventListener("visibilitychange", r),
                  function () {
                    document.removeEventListener("visibilitychange", r);
                  }
                );
            },
            [r]
          ),
          n
        );
      }

      function rl() {
        var e = Ye(),
          t = e.library,
          n = e.chainId,
          i = Object(b.c)(),
          r = il(),
          s = Object(a.useState)({
            chainId: n,
            blockNumber: null,
          }),
          o = Object(l.a)(s, 2),
          c = o[0],
          u = o[1],
          d = Object(a.useCallback)(
            function (e) {
              u(function (t) {
                return n === t.chainId
                  ? "number" !== typeof t.blockNumber
                    ? {
                        chainId: n,
                        blockNumber: e,
                      }
                    : {
                        chainId: n,
                        blockNumber: Math.max(e, t.blockNumber),
                      }
                  : t;
              });
            },
            [n, u]
          );
        Object(a.useEffect)(
          function () {
            if (t && n && r)
              return (
                u({
                  chainId: n,
                  blockNumber: null,
                }),
                t
                  .getBlockNumber()
                  .then(d)
                  .catch(function (e) {
                    return console.error(
                      "Failed to get block number for chainId: ".concat(n),
                      e
                    );
                  }),
                t.on("block", d),
                function () {
                  t.removeListener("block", d);
                }
              );
          },
          [i, n, t, d, r]
        );
        var p = Uo(c, 100);
        return (
          Object(a.useEffect)(
            function () {
              p.chainId &&
                p.blockNumber &&
                r &&
                i(
                  xn({
                    chainId: p.chainId,
                    blockNumber: p.blockNumber,
                  })
                );
            },
            [r, i, p.blockNumber, p.chainId]
          ),
          null
        );
      }
      var sl = n(106);

      function ol() {
        var e = Ye().library,
          t = Object(b.c)(),
          n = Object(b.d)(function (e) {
            return e.lists.byUrl;
          }),
          i = il(),
          r = Qr();
        return (
          Mi(
            Object(a.useCallback)(
              function () {
                i &&
                  Object.keys(n).forEach(function (e) {
                    return r(e).catch(function (e) {
                      return console.error("interval list fetching error", e);
                    });
                  });
              },
              [r, i, n]
            ),
            e ? 6e5 : null
          ),
          Object(a.useEffect)(
            function () {
              Object.keys(n).forEach(function (e) {
                var t = n[e];
                t.current ||
                  t.loadingRequestId ||
                  t.error ||
                  r(e).catch(function (e) {
                    return console.error("list added fetching error", e);
                  });
              });
            },
            [t, r, e, n]
          ),
          Object(a.useEffect)(
            function () {
              Object.keys(n).forEach(function (e) {
                var a = n[e];
                if (a.current && a.pendingUpdate) {
                  var i = Object(sl.b)(
                    a.current.version,
                    a.pendingUpdate.version
                  );
                  switch (i) {
                    case sl.a.NONE:
                      throw new Error("unexpected no version bump");
                    case sl.a.PATCH:
                    case sl.a.MINOR:
                      i >=
                      Object(sl.c)(a.current.tokens, a.pendingUpdate.tokens)
                        ? (t(Nr(e)),
                          t(
                            Tn({
                              key: e,
                              content: {
                                listUpdate: {
                                  listUrl: e,
                                  oldList: a.current,
                                  newList: a.pendingUpdate,
                                  auto: !0,
                                },
                              },
                            })
                          ))
                        : console.error(
                            "List at url ".concat(
                              e,
                              " could not automatically update because the version bump was only PATCH/MINOR while the update had breaking changes and should have been MAJOR"
                            )
                          );
                      break;
                    case sl.a.MAJOR:
                      t(
                        Tn({
                          key: e,
                          content: {
                            listUpdate: {
                              listUrl: e,
                              auto: !1,
                              oldList: a.current,
                              newList: a.pendingUpdate,
                            },
                          },
                          removeAfterMs: null,
                        })
                      );
                  }
                }
              });
            },
            [t, n]
          ),
          null
        );
      }

      function cl(e, t) {
        return (
          (n = e + Math.round(Math.random() * Math.max(0, t - e))),
          new Promise(function (e) {
            return setTimeout(e, n);
          })
        );
        var n;
      }
      var ul = (function (e) {
          Object(te.a)(n, e);
          var t = Object(ne.a)(n);

          function n() {
            return Object(ee.a)(this, n), t.call(this, "Cancelled");
          }
          return n;
        })(Object(ae.a)(Error)),
        ll = (function (e) {
          Object(te.a)(n, e);
          var t = Object(ne.a)(n);

          function n() {
            return Object(ee.a)(this, n), t.apply(this, arguments);
          }
          return n;
        })(Object(ae.a)(Error));

      function dl() {
        return (dl = Object(u.a)(
          c.a.mark(function e(t, n, a) {
            var i, r, s, o;
            return c.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        t.aggregate(
                          n.map(function (e) {
                            return [e.address, e.callData];
                          })
                        )
                      );
                    case 3:
                      (s = e.sent),
                        (o = Object(l.a)(s, 2)),
                        (i = o[0]),
                        (r = o[1]),
                        (e.next = 13);
                      break;
                    case 9:
                      throw (
                        ((e.prev = 9),
                        (e.t0 = e.catch(0)),
                        console.info(
                          "Failed to fetch chunk inside retry",
                          e.t0
                        ),
                        e.t0)
                      );
                    case 13:
                      if (!(i.toNumber() < a)) {
                        e.next = 15;
                        break;
                      }
                      throw new ll("Fetched for old block number");
                    case 15:
                      return e.abrupt("return", {
                        results: r,
                        blockNumber: i.toNumber(),
                      });
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 9]]
            );
          })
        )).apply(this, arguments);
      }

      function pl() {
        var e = Object(b.c)(),
          t = Object(b.d)(function (e) {
            return e.multicall;
          }),
          n = Uo(t.callListeners, 100),
          i = kn(),
          r = Ye().chainId,
          s = ga(),
          o = Object(a.useRef)(),
          l = Object(a.useMemo)(
            function () {
              return (function (e, t) {
                if (!e || !t) return {};
                var n = e[t];
                return n
                  ? Object.keys(n).reduce(function (e, t) {
                      var a = n[t];
                      return (
                        (e[t] = Object.keys(a)
                          .filter(function (e) {
                            var t = parseInt(e);
                            return !(t <= 0) && a[t] > 0;
                          })
                          .reduce(function (e, t) {
                            return Math.min(e, parseInt(t));
                          }, 1 / 0)),
                        e
                      );
                    }, {})
                  : {};
              })(n, r);
            },
            [n, r]
          ),
          d = Object(a.useMemo)(
            function () {
              return (function (e, t, n, a) {
                return n && a
                  ? e[n]
                    ? Object.keys(t).filter(function (i) {
                        var r = t[i],
                          s = e[n][i];
                        if (!s) return !0;
                        var o = a - (r - 1);
                        return (
                          !(
                            s.fetchingBlockNumber && s.fetchingBlockNumber >= o
                          ) &&
                          (!s.blockNumber || s.blockNumber < o)
                        );
                      })
                    : Object.keys(t)
                  : [];
              })(t.callResults, l, r, i);
            },
            [r, t.callResults, l, i]
          ),
          p = Object(a.useMemo)(
            function () {
              return JSON.stringify(d.sort());
            },
            [d]
          );
        return (
          Object(a.useEffect)(
            function () {
              var t;
              if (i && r && s) {
                var n = JSON.parse(p);
                if (0 !== n.length) {
                  var a,
                    l,
                    d = n.map(function (e) {
                      return En(e);
                    }),
                    y = (function (e, t) {
                      if (t < 1) throw new Error("maxChunkSize must be gte 1");
                      if (e.length <= t) return [e];
                      var n = Math.ceil(e.length / t),
                        a = Math.ceil(e.length / n);
                      return Object(xe.a)(Array(n).keys()).map(function (t) {
                        return e.slice(t * a, t * a + a);
                      });
                    })(d, 500);
                  if (
                    (null === (t = o.current) || void 0 === t
                      ? void 0
                      : t.blockNumber) !== i
                  )
                    null === (a = o.current) ||
                      void 0 === a ||
                      null === (l = a.cancellations) ||
                      void 0 === l ||
                      l.forEach(function (e) {
                        return e();
                      });
                  e(
                    Sn({
                      calls: d,
                      chainId: r,
                      fetchingBlockNumber: i,
                    })
                  ),
                    (o.current = {
                      blockNumber: i,
                      cancellations: y.map(function (t, a) {
                        var l = (function (e, t) {
                            var n,
                              a = t.n,
                              i = t.minWait,
                              r = t.maxWait,
                              s = !1;
                            return {
                              promise: new Promise(
                                (function () {
                                  var t = Object(u.a)(
                                    c.a.mark(function t(o, u) {
                                      var l;
                                      return c.a.wrap(
                                        function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                n = u;
                                              case 1:
                                                return (
                                                  (l = void 0),
                                                  (t.prev = 3),
                                                  (t.next = 6),
                                                  e()
                                                );
                                              case 6:
                                                return (
                                                  (l = t.sent),
                                                  s || (o(l), (s = !0)),
                                                  t.abrupt("break", 24)
                                                );
                                              case 11:
                                                if (
                                                  ((t.prev = 11),
                                                  (t.t0 = t.catch(3)),
                                                  !s)
                                                ) {
                                                  t.next = 15;
                                                  break;
                                                }
                                                return t.abrupt("break", 24);
                                              case 15:
                                                if (
                                                  !(a <= 0) &&
                                                  t.t0 instanceof ll
                                                ) {
                                                  t.next = 19;
                                                  break;
                                                }
                                                return (
                                                  u(t.t0),
                                                  (s = !0),
                                                  t.abrupt("break", 24)
                                                );
                                              case 19:
                                                a--;
                                              case 20:
                                                return (t.next = 22), cl(i, r);
                                              case 22:
                                                t.next = 1;
                                                break;
                                              case 24:
                                              case "end":
                                                return t.stop();
                                            }
                                        },
                                        t,
                                        null,
                                        [[3, 11]]
                                      );
                                    })
                                  );
                                  return function (e, n) {
                                    return t.apply(this, arguments);
                                  };
                                })()
                              ),
                              cancel: function () {
                                s || ((s = !0), n(new ul()));
                              },
                            };
                          })(
                            function () {
                              return (function (e, t, n) {
                                return dl.apply(this, arguments);
                              })(s, t, i);
                            },
                            {
                              n: 1 / 0,
                              minWait: 2500,
                              maxWait: 3500,
                            }
                          ),
                          d = l.cancel;
                        return (
                          l.promise
                            .then(function (t) {
                              var s = t.results,
                                c = t.blockNumber;
                              o.current = {
                                cancellations: [],
                                blockNumber: i,
                              };
                              var u = y.slice(0, a).reduce(function (e, t) {
                                  return e + t.length;
                                }, 0),
                                l = u + s.length;
                              e(
                                Bn({
                                  chainId: r,
                                  results: n
                                    .slice(u, l)
                                    .reduce(function (e, t, n) {
                                      var a;
                                      return (
                                        (e[t] =
                                          null !== (a = s[n]) && void 0 !== a
                                            ? a
                                            : null),
                                        e
                                      );
                                    }, {}),
                                  blockNumber: c,
                                })
                              );
                            })
                            .catch(function (n) {
                              n instanceof ul
                                ? console.error(
                                    "Cancelled fetch for blockNumber",
                                    i
                                  )
                                : (console.error(
                                    "Failed to fetch multicall chunk",
                                    t,
                                    r,
                                    n
                                  ),
                                  e(
                                    Rn({
                                      calls: t,
                                      chainId: r,
                                      fetchingBlockNumber: i,
                                    })
                                  ));
                            }),
                          d
                        );
                      }),
                    });
                }
              }
            },
            [r, s, e, p, i]
          ),
          null
        );
      }

      function yl() {
        var e,
          t = Ye(),
          n = t.chainId,
          i = t.library,
          r = kn(),
          s = Object(b.c)(),
          o = Object(b.d)(function (e) {
            return e.transactions;
          }),
          c = n && null !== (e = o[n]) && void 0 !== e ? e : {},
          u = (function () {
            var e = Object(b.c)();
            return Object(a.useCallback)(
              function (t, n) {
                e(
                  Tn({
                    content: t,
                    key: n,
                  })
                );
              },
              [e]
            );
          })();
        return (
          Object(a.useEffect)(
            function () {
              n &&
                i &&
                r &&
                Object.keys(c)
                  .filter(function (e) {
                    return (function (e, t) {
                      if (t.receipt) return !1;
                      if (!t.lastCheckedBlockNumber) return !0;
                      var n = e - t.lastCheckedBlockNumber;
                      if (n < 1) return !1;
                      var a = (new Date().getTime() - t.addedTime) / 1e3 / 60;
                      return a > 60 ? n > 9 : !(a > 5) || n > 2;
                    })(r, c[e]);
                  })
                  .forEach(function (e) {
                    i.getTransactionReceipt(e)
                      .then(function (t) {
                        var a;
                        t
                          ? (s(
                              To({
                                chainId: n,
                                hash: e,
                                receipt: {
                                  blockHash: t.blockHash,
                                  blockNumber: t.blockNumber,
                                  contractAddress: t.contractAddress,
                                  from: t.from,
                                  status: t.status,
                                  to: t.to,
                                  transactionHash: t.transactionHash,
                                  transactionIndex: t.transactionIndex,
                                },
                              })
                            ),
                            u(
                              {
                                txn: {
                                  hash: e,
                                  success: 1 === t.status,
                                  summary:
                                    null === (a = c[e]) || void 0 === a
                                      ? void 0
                                      : a.summary,
                                },
                              },
                              e
                            ))
                          : s(
                              wo({
                                chainId: n,
                                hash: e,
                                blockNumber: r,
                              })
                            );
                      })
                      .catch(function (t) {
                        console.error(
                          "failed to check transaction hash: ".concat(e),
                          t
                        );
                      });
                  });
            },
            [n, i, c, r, s, u]
          ),
          null
        );
      }
      var bl = n(304),
        ml = Object(N.c)(
          {
            blockNumber: {},
            popupList: [],
            walletModalOpen: !1,
            settingsMenuOpen: !1,
          },
          function (e) {
            return e
              .addCase(xn, function (e, t) {
                var n = t.payload,
                  a = n.chainId,
                  i = n.blockNumber;
                "number" !== typeof e.blockNumber[a]
                  ? (e.blockNumber[a] = i)
                  : (e.blockNumber[a] = Math.max(i, e.blockNumber[a]));
              })
              .addCase(On, function (e) {
                e.walletModalOpen = !e.walletModalOpen;
              })
              .addCase(gn, function (e) {
                e.settingsMenuOpen = !e.settingsMenuOpen;
              })
              .addCase(Tn, function (e, t) {
                var n = t.payload,
                  a = n.content,
                  i = n.key,
                  r = n.removeAfterMs,
                  s = void 0 === r ? 15e3 : r;
                e.popupList = (
                  i
                    ? e.popupList.filter(function (e) {
                        return e.key !== i;
                      })
                    : e.popupList
                ).concat([
                  {
                    key: i || Object(N.f)(),
                    show: !0,
                    content: a,
                    removeAfterMs: s,
                  },
                ]);
              })
              .addCase(wn, function (e, t) {
                var n = t.payload.key;
                e.popupList.forEach(function (e) {
                  e.key === n && (e.show = !1);
                });
              });
          }
        ),
        fl = Object(N.b)("global/updateVersion"),
        jl =
          (N.b,
          function () {
            return new Date().getTime();
          });

      function vl(e, t) {
        return "".concat(e, ";").concat(t);
      }
      var hl,
        xl = {
          userDarkMode: null,
          matchesDarkMode: !1,
          userExpertMode: !1,
          userSlippageTolerance: 80,
          userDeadline: 1200,
          tokens: {},
          pairs: {},
          timestamp: jl(),
          audioPlay: !0,
        },
        Ol = Object(N.c)(xl, function (e) {
          return e
            .addCase(fl, function (e) {
              "number" !== typeof e.userSlippageTolerance &&
                (e.userSlippageTolerance = 80),
                "number" !== typeof e.userDeadline && (e.userDeadline = 1200),
                (e.lastUpdateVersionTimestamp = jl());
            })
            .addCase(Jn, function (e, t) {
              (e.userDarkMode = t.payload.userDarkMode), (e.timestamp = jl());
            })
            .addCase(Qn, function (e, t) {
              (e.matchesDarkMode = t.payload.matchesDarkMode),
                (e.timestamp = jl());
            })
            .addCase(Gn, function (e, t) {
              (e.userExpertMode = t.payload.userExpertMode),
                (e.timestamp = jl());
            })
            .addCase(Kn, function (e, t) {
              (e.userSlippageTolerance = t.payload.userSlippageTolerance),
                (e.timestamp = jl());
            })
            .addCase(Xn, function (e, t) {
              (e.userDeadline = t.payload.userDeadline), (e.timestamp = jl());
            })
            .addCase(Zn, function (e, t) {
              var n = t.payload.serializedToken;
              (e.tokens[n.chainId] = e.tokens[n.chainId] || {}),
                (e.tokens[n.chainId][n.address] = n),
                (e.timestamp = jl());
            })
            .addCase($n, function (e, t) {
              var n = t.payload,
                a = n.address,
                i = n.chainId;
              (e.tokens[i] = e.tokens[i] || {}),
                delete e.tokens[i][a],
                (e.timestamp = jl());
            })
            .addCase(ea, function (e, t) {
              var n = t.payload.serializedPair;
              if (
                n.token0.chainId === n.token1.chainId &&
                n.token0.address !== n.token1.address
              ) {
                var a = n.token0.chainId;
                (e.pairs[a] = e.pairs[a] || {}),
                  (e.pairs[a][vl(n.token0.address, n.token1.address)] = n);
              }
              e.timestamp = jl();
            })
            .addCase(ta, function (e, t) {
              var n = t.payload,
                a = n.chainId,
                i = n.tokenAAddress,
                r = n.tokenBAddress;
              e.pairs[a] &&
                (delete e.pairs[a][vl(i, r)], delete e.pairs[a][vl(r, i)]),
                (e.timestamp = jl());
            })
            .addCase(na, function (e) {
              e.audioPlay = !1;
            })
            .addCase(aa, function (e) {
              e.audioPlay = !0;
            });
        }),
        gl = function () {
          return new Date().getTime();
        },
        Tl = Object(N.c)({}, function (e) {
          return e
            .addCase(Oo, function (e, t) {
              var n,
                a,
                i = t.payload,
                r = i.chainId,
                s = i.from,
                o = i.hash,
                c = i.approval,
                u = i.summary;
              if (null === (n = e[r]) || void 0 === n ? void 0 : n[o])
                throw Error("Attempted to add existing transaction.");
              var l = null !== (a = e[r]) && void 0 !== a ? a : {};
              (l[o] = {
                hash: o,
                approval: c,
                summary: u,
                from: s,
                addedTime: gl(),
              }),
                (e[r] = l);
            })
            .addCase(go, function (e, t) {
              var n = t.payload.chainId;
              e[n] && (e[n] = {});
            })
            .addCase(wo, function (e, t) {
              var n,
                a = t.payload,
                i = a.chainId,
                r = a.hash,
                s = a.blockNumber,
                o = null === (n = e[i]) || void 0 === n ? void 0 : n[r];
              o &&
                (o.lastCheckedBlockNumber
                  ? (o.lastCheckedBlockNumber = Math.max(
                      s,
                      o.lastCheckedBlockNumber
                    ))
                  : (o.lastCheckedBlockNumber = s));
            })
            .addCase(To, function (e, t) {
              var n,
                a = t.payload,
                i = a.hash,
                r = a.chainId,
                s = a.receipt,
                o = null === (n = e[r]) || void 0 === n ? void 0 : n[i];
              o && ((o.receipt = s), (o.confirmedTime = gl()));
            });
        }),
        wl =
          ((hl = {
            independentField: mo.INPUT,
            typedValue: "",
          }),
          Object(H.a)(hl, mo.INPUT, {
            currencyId: "",
          }),
          Object(H.a)(hl, mo.OUTPUT, {
            currencyId: "",
          }),
          Object(H.a)(hl, "recipient", null),
          hl),
        kl = Object(N.c)(wl, function (e) {
          return e
            .addCase(ho, function (e, t) {
              var n,
                a = t.payload,
                i = a.typedValue,
                r = a.recipient,
                s = a.field,
                o = a.inputCurrencyId,
                c = a.outputCurrencyId;
              return (
                (n = {}),
                Object(H.a)(n, mo.INPUT, {
                  currencyId: o,
                }),
                Object(H.a)(n, mo.OUTPUT, {
                  currencyId: c,
                }),
                Object(H.a)(n, "independentField", s),
                Object(H.a)(n, "typedValue", i),
                Object(H.a)(n, "recipient", r),
                n
              );
            })
            .addCase(fo, function (e, t) {
              var n,
                a = t.payload,
                i = a.currencyId,
                r = a.field,
                s = r === mo.INPUT ? mo.OUTPUT : mo.INPUT;
              return i === e[s].currencyId
                ? Object(Oe.a)(
                    Object(Oe.a)({}, e),
                    {},
                    ((n = {
                      independentField:
                        e.independentField === mo.INPUT ? mo.OUTPUT : mo.INPUT,
                    }),
                    Object(H.a)(n, r, {
                      currencyId: i,
                    }),
                    Object(H.a)(n, s, {
                      currencyId: e[r].currencyId,
                    }),
                    n)
                  )
                : Object(Oe.a)(
                    Object(Oe.a)({}, e),
                    {},
                    Object(H.a)({}, r, {
                      currencyId: i,
                    })
                  );
            })
            .addCase(jo, function (e) {
              var t;
              return Object(Oe.a)(
                Object(Oe.a)({}, e),
                {},
                ((t = {
                  independentField:
                    e.independentField === mo.INPUT ? mo.OUTPUT : mo.INPUT,
                }),
                Object(H.a)(t, mo.INPUT, {
                  currencyId: e[mo.OUTPUT].currencyId,
                }),
                Object(H.a)(t, mo.OUTPUT, {
                  currencyId: e[mo.INPUT].currencyId,
                }),
                t)
              );
            })
            .addCase(vo, function (e, t) {
              var n = t.payload,
                a = n.field,
                i = n.typedValue;
              return Object(Oe.a)(
                Object(Oe.a)({}, e),
                {},
                {
                  independentField: a,
                  typedValue: i,
                }
              );
            })
            .addCase(xo, function (e, t) {
              var n = t.payload.recipient;
              e.recipient = n;
            });
        }),
        Cl = {
          independentField: Eo.CURRENCY_A,
          typedValue: "",
          otherTypedValue: "",
        },
        Il = Object(N.c)(Cl, function (e) {
          return e
            .addCase(Bo, function () {
              return Cl;
            })
            .addCase(Ro, function (e, t) {
              var n = t.payload,
                a = n.field,
                i = n.typedValue;
              return n.noLiquidity
                ? a === e.independentField
                  ? Object(Oe.a)(
                      Object(Oe.a)({}, e),
                      {},
                      {
                        independentField: a,
                        typedValue: i,
                      }
                    )
                  : Object(Oe.a)(
                      Object(Oe.a)({}, e),
                      {},
                      {
                        independentField: a,
                        typedValue: i,
                        otherTypedValue: e.typedValue,
                      }
                    )
                : Object(Oe.a)(
                    Object(Oe.a)({}, e),
                    {},
                    {
                      independentField: a,
                      typedValue: i,
                      otherTypedValue: "",
                    }
                  );
            });
        }),
        Nl = {
          error: null,
          current: null,
          loadingRequestId: null,
          pendingUpdate: null,
        },
        El = {
          lastInitializedDefaultListOfLists: Ur,
          byUrl: Object(Oe.a)(
            Object(Oe.a)(
              {},
              Ur.reduce(function (e, t) {
                return (e[t] = Nl), e;
              }, {})
            ),
            {},
            Object(H.a)({}, _r, {
              error: null,
              current: Dr,
              loadingRequestId: null,
              pendingUpdate: null,
            })
          ),
          selectedListUrl: _r,
        },
        Ml = Object(N.c)(El, function (e) {
          return e
            .addCase(Ir.pending, function (e, t) {
              var n = t.payload,
                a = n.requestId,
                i = n.url;
              e.byUrl[i] = Object(Oe.a)(
                Object(Oe.a)(
                  {
                    current: null,
                    pendingUpdate: null,
                  },
                  e.byUrl[i]
                ),
                {},
                {
                  loadingRequestId: a,
                  error: null,
                }
              );
            })
            .addCase(Ir.fulfilled, function (e, t) {
              var n,
                a,
                i = t.payload,
                r = i.requestId,
                s = i.tokenList,
                o = i.url,
                c =
                  null === (n = e.byUrl[o]) || void 0 === n
                    ? void 0
                    : n.current,
                u =
                  null === (a = e.byUrl[o]) || void 0 === a
                    ? void 0
                    : a.loadingRequestId;
              if (c) {
                if (Object(sl.b)(c.version, s.version) === sl.a.NONE) return;
                (null !== u && u !== r) ||
                  (e.byUrl[o] = Object(Oe.a)(
                    Object(Oe.a)({}, e.byUrl[o]),
                    {},
                    {
                      loadingRequestId: null,
                      error: null,
                      current: c,
                      pendingUpdate: s,
                    }
                  ));
              } else
                e.byUrl[o] = Object(Oe.a)(
                  Object(Oe.a)({}, e.byUrl[o]),
                  {},
                  {
                    loadingRequestId: null,
                    error: null,
                    current: s,
                    pendingUpdate: null,
                  }
                );
            })
            .addCase(Ir.rejected, function (e, t) {
              var n,
                a = t.payload,
                i = a.url,
                r = a.requestId,
                s = a.errorMessage;
              (null === (n = e.byUrl[i]) || void 0 === n
                ? void 0
                : n.loadingRequestId) === r &&
                (e.byUrl[i] = Object(Oe.a)(
                  Object(Oe.a)({}, e.byUrl[i]),
                  {},
                  {
                    loadingRequestId: null,
                    error: s,
                    current: null,
                    pendingUpdate: null,
                  }
                ));
            })
            .addCase(Ar, function (e, t) {
              var n = t.payload;
              (e.selectedListUrl = n), e.byUrl[n] || (e.byUrl[n] = Nl);
            })
            .addCase(Er, function (e, t) {
              var n = t.payload;
              e.byUrl[n] || (e.byUrl[n] = Nl);
            })
            .addCase(Mr, function (e, t) {
              var n = t.payload;
              e.byUrl[n] && delete e.byUrl[n],
                e.selectedListUrl === n &&
                  (e.selectedListUrl = Object.keys(e.byUrl)[0]);
            })
            .addCase(Nr, function (e, t) {
              var n,
                a = t.payload;
              if (
                !(null === (n = e.byUrl[a]) || void 0 === n
                  ? void 0
                  : n.pendingUpdate)
              )
                throw new Error(
                  "accept list update called without pending update"
                );
              e.byUrl[a] = Object(Oe.a)(
                Object(Oe.a)({}, e.byUrl[a]),
                {},
                {
                  pendingUpdate: null,
                  current: e.byUrl[a].pendingUpdate,
                }
              );
            })
            .addCase(fl, function (e) {
              if (e.lastInitializedDefaultListOfLists) {
                if (e.lastInitializedDefaultListOfLists) {
                  var t = e.lastInitializedDefaultListOfLists.reduce(function (
                      e,
                      t
                    ) {
                      return e.add(t);
                    },
                    new Set()),
                    n = Ur.reduce(function (e, t) {
                      return e.add(t);
                    }, new Set());
                  Ur.forEach(function (n) {
                    t.has(n) || (e.byUrl[n] = Nl);
                  }),
                    e.lastInitializedDefaultListOfLists.forEach(function (t) {
                      n.has(t) || delete e.byUrl[t];
                    });
                }
              } else (e.byUrl = El.byUrl), (e.selectedListUrl = void 0);
              e.lastInitializedDefaultListOfLists = Ur;
            });
        }),
        Al = {
          independentField: Su.LIQUIDITY_PERCENT,
          typedValue: "0",
        },
        Sl = Object(N.c)(Al, function (e) {
          return e.addCase(Wu, function (e, t) {
            var n = t.payload,
              a = n.field,
              i = n.typedValue;
            return Object(Oe.a)(
              Object(Oe.a)({}, e),
              {},
              {
                independentField: a,
                typedValue: i,
              }
            );
          });
        }),
        Rl = Object(N.c)(
          {
            callResults: {},
          },
          function (e) {
            return e
              .addCase(Mn, function (e, t) {
                var n,
                  a = t.payload,
                  i = a.calls,
                  r = a.chainId,
                  s = a.options,
                  o = (s = void 0 === s ? {} : s).blocksPerFetch,
                  c = void 0 === o ? 1 : o,
                  u = e.callListeners
                    ? e.callListeners
                    : (e.callListeners = {});
                (u[r] = null !== (n = u[r]) && void 0 !== n ? n : {}),
                  i.forEach(function (e) {
                    var t,
                      n,
                      a = Nn(e);
                    (u[r][a] = null !== (t = u[r][a]) && void 0 !== t ? t : {}),
                      (u[r][a][c] =
                        (null !== (n = u[r][a][c]) && void 0 !== n ? n : 0) +
                        1);
                  });
              })
              .addCase(An, function (e, t) {
                var n = t.payload,
                  a = n.chainId,
                  i = n.calls,
                  r = n.options,
                  s = (r = void 0 === r ? {} : r).blocksPerFetch,
                  o = void 0 === s ? 1 : s,
                  c = e.callListeners
                    ? e.callListeners
                    : (e.callListeners = {});
                c[a] &&
                  i.forEach(function (e) {
                    var t = Nn(e);
                    c[a][t] &&
                      c[a][t][o] &&
                      (1 === c[a][t][o] ? delete c[a][t][o] : c[a][t][o]--);
                  });
              })
              .addCase(Sn, function (e, t) {
                var n,
                  a = t.payload,
                  i = a.chainId,
                  r = a.fetchingBlockNumber,
                  s = a.calls;
                (e.callResults[i] =
                  null !== (n = e.callResults[i]) && void 0 !== n ? n : {}),
                  s.forEach(function (t) {
                    var n = Nn(t),
                      a = e.callResults[i][n];
                    if (a) {
                      var s;
                      if (
                        (null !== (s = a.fetchingBlockNumber) && void 0 !== s
                          ? s
                          : 0) >= r
                      )
                        return;
                      e.callResults[i][n].fetchingBlockNumber = r;
                    } else
                      e.callResults[i][n] = {
                        fetchingBlockNumber: r,
                      };
                  });
              })
              .addCase(Rn, function (e, t) {
                var n,
                  a = t.payload,
                  i = a.fetchingBlockNumber,
                  r = a.chainId,
                  s = a.calls;
                (e.callResults[r] =
                  null !== (n = e.callResults[r]) && void 0 !== n ? n : {}),
                  s.forEach(function (t) {
                    var n = Nn(t),
                      a = e.callResults[r][n];
                    a &&
                      a.fetchingBlockNumber === i &&
                      (delete a.fetchingBlockNumber,
                      (a.data = null),
                      (a.blockNumber = i));
                  });
              })
              .addCase(Bn, function (e, t) {
                var n,
                  a = t.payload,
                  i = a.chainId,
                  r = a.results,
                  s = a.blockNumber;
                (e.callResults[i] =
                  null !== (n = e.callResults[i]) && void 0 !== n ? n : {}),
                  Object.keys(r).forEach(function (t) {
                    var n,
                      a = e.callResults[i][t];
                    (null !==
                      (n =
                        null === a || void 0 === a ? void 0 : a.blockNumber) &&
                    void 0 !== n
                      ? n
                      : 0) > s ||
                      (e.callResults[i][t] = {
                        data: r[t],
                        blockNumber: s,
                      });
                  });
              });
          }
        ),
        Bl = ["user", "transactions"],
        _l = Object(bl.load)({
          states: Bl,
        });
      _l.user &&
        (_l.user.userDarkMode = (function () {
          var e = null;
          try {
            var t = localStorage.getItem(ia);
            t && (e = JSON.parse(t));
          } catch (n) {
            console.error(n);
          }
          return e;
        })());
      var Ul = Object(N.a)({
        reducer: {
          application: ml,
          user: Ol,
          transactions: Tl,
          swap: kl,
          mint: Il,
          burn: Sl,
          multicall: Rl,
          lists: Ml,
          toasts: B,
          setting: F,
        },
        middleware: [].concat(
          Object(xe.a)(
            Object(N.e)({
              thunk: !1,
            })
          ),
          [
            Object(bl.save)({
              states: Bl,
            }),
          ]
        ),
        preloadedState: _l,
      });
      Ul.dispatch(fl());
      var Dl = Ul;

      function Pl(e) {
        var t = new Q.a(e);
        return (t.pollingInterval = 15e3), t;
      }
      var Fl = "IS_DARK",
        Ll = i.a.createContext({
          isDark: !1,
          toggleTheme: function () {
            return null;
          },
        }),
        Yl = function (e) {
          var t = e.children,
            n = Object(a.useState)(function () {
              var e = localStorage.getItem(Fl);
              return !!e && JSON.parse(e);
            }),
            i = Object(l.a)(n, 2),
            r = i[0],
            s = i[1];
          return Object(Qe.jsx)(Ll.Provider, {
            value: {
              isDark: r,
              toggleTheme: function () {
                s(function (e) {
                  return localStorage.setItem(Fl, JSON.stringify(!e)), !e;
                });
              },
            },
            children: Object(Qe.jsx)(q.ThemeProvider, {
              theme: r ? v.l : v.m,
              children: t,
            }),
          });
        },
        Wl = Object(z.c)(Pe),
        zl = function (e) {
          var t = e.children;
          return Object(Qe.jsx)(z.b, {
            getLibrary: Pl,
            children: Object(Qe.jsx)(Wl, {
              getLibrary: Pl,
              children: Object(Qe.jsx)(b.a, {
                store: Dl,
                children: Object(Qe.jsx)(Yl, {
                  children: Object(Qe.jsx)(v.h, {
                    children: t,
                  }),
                }),
              }),
            }),
          });
        },
        ql = (n(1096), n(306)),
        Vl = n(535),
        Hl = n.n(Vl),
        Ql = n(536),
        Jl = n.n(Ql);
      ql.a
        .use(Hl.a)
        .use(Jl.a)
        .use(V.a)
        .init({
          backend: {
            loadPath: "./locales/{{lng}}.json",
          },
          react: {
            useSuspense: !0,
          },
          fallbackLng: "en",
          preload: ["en"],
          keySeparator: !1,
          interpolation: {
            escapeValue: !1,
          },
        });
      ql.a;
      "ethereum" in window && (window.ethereum.autoRefreshOnNetworkChange = !1),
        window.addEventListener("error", function () {
          var e;
          null === (e = localStorage) ||
            void 0 === e ||
            e.removeItem("redux_localstorage_simple_lists");
        }),
        s.a.render(
          Object(Qe.jsx)(a.StrictMode, {
            children: Object(Qe.jsxs)(zl, {
              children: [
                Object(Qe.jsxs)(Qe.Fragment, {
                  children: [
                    Object(Qe.jsx)(ol, {}),
                    Object(Qe.jsx)(rl, {}),
                    Object(Qe.jsx)(yl, {}),
                    Object(Qe.jsx)(pl, {}),
                  ],
                }),
                Object(Qe.jsx)(tl, {}),
              ],
            }),
          }),
          document.getElementById("root")
        );
    },
    140: function (e) {
      e.exports = JSON.parse(
        '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]'
      );
    },
    141: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"contract WardenToken","name":"_warden","type":"address"},{"internalType":"contract Tempest","name":"_tst","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"uint256","name":"_wardenPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"dev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"enterStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"leaveStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrator","outputs":[{"internalType":"contract IMigratorChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingWarden","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accWardenPerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IMigratorChef","name":"_migrator","type":"address"}],"name":"setMigrator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tst","outputs":[{"internalType":"contract Tempest","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"multiplierNumber","type":"uint256"}],"name":"updateMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"warden","outputs":[{"internalType":"contract WardenToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wardenPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    191: function (e) {
      e.exports = JSON.parse(
        '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]'
      );
    },
    234: function (e) {
      e.exports = JSON.parse(
        '{"name":"pancakeswap","timestamp":"2020-08-25T15:41:29.665Z","version":{"major":1,"minor":3,"patch":1},"tags":{},"logoURI":"/images/coins/wbnb.png","keywords":["pancake","default"],"tokens":[{"name":"WBNB Token","symbol":"WBNB","address":"0xae13d989dac2f0debff460ac112a837c89baa7cd","chainId":97,"decimals":18,"logoURI":"/images/coins/BUSD.png"},{"name":"WBNB Token","symbol":"WBNB","address":"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c","chainId":56,"decimals":18},{"name":"Warden Token","symbol":"WAD","address":"0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc","chainId":56,"decimals":18,"logoURI":"/images/coins/WAD.png"},{"name":"Warden Token","symbol":"WAD","address":"0x29f9E7f1ACE4E3496c0c46b3191E800a7A77964E","chainId":97,"decimals":18,"logoURI":"/images/coins/WAD.png"},{"name":"BUSD Token","symbol":"BUSD","address":"0x2DbC5dFCe92737D8c333296F9F29a166a1aED742","chainId":97,"decimals":18,"logoURI":"/images/coins/BUSD.png"},{"name":"BTCB Token","symbol":"BTCB","address":"0x212A31781E574C5d7C0Fce551AddAD67cb4b4F5C","chainId":97,"decimals":18,"logoURI":"/images/coins/BTC-icon.png"},{"name":"CAKE Token","symbol":"CAKE","address":"0x829C8c2128eD993fAC05a7BcFcD4ee9941A2898C","chainId":97,"decimals":18,"logoURI":"/images/coins/cake.png"},{"name":"USDT Token","symbol":"USDT","address":"0xf19802DE4a3B7bF2f9910661f21389825D159abc","chainId":97,"decimals":18,"logoURI":"/images/coins/USDT.png"},{"name":"BAKE Token","symbol":"BAKE","address":"0x455E20015fb7C5e8a24A2b0B39e6259a3f7C43de","chainId":97,"decimals":18,"logoURI":"/images/coins/bake.png"},{"name":"Bakery Token","symbol":"BAKE","address":"0xe02df9e3e622debdd69fb838bb799e3f168902c5","chainId":56,"decimals":18,"logoURI":"/images/coins/bake.png"},{"name":"BUSD Token","symbol":"BUSD","address":"0xe9e7cea3dedca5984780bafc599bd69add087d56","chainId":56,"decimals":18,"logoURI":"/images/coins/BUSD.png"},{"name":"Ethereum Token","symbol":"ETH","address":"0x2170ed0880ac9a755fd29b2688956bd959f933f8","chainId":56,"decimals":18,"logoURI":"/images/coins/ETH.png"},{"name":"BTCB Token","symbol":"BTCB","address":"0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c","chainId":56,"decimals":18,"logoURI":"/images/coins/BTC-icon.png"},{"name":"BAND Protocol Token","symbol":"BAND","address":"0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18","chainId":56,"decimals":18,"logoURI":"/images/coins/band.png"},{"name":"EOS Token","symbol":"EOS","address":"0x56b6fb708fc5732dec1afc8d8556423a2edccbd6","chainId":56,"decimals":18,"logoURI":"/images/coins/eos.png"},{"name":"Tether USD","symbol":"USDT","address":"0x55d398326f99059ff775485246999027b3197955","chainId":56,"decimals":18,"logoURI":"/images/coins/USDT-icon.png"},{"name":"XRP Token","symbol":"XRP","address":"0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe","chainId":56,"decimals":18,"logoURI":"/images/coins/XRP-icon.png"},{"name":"Bitcoin Cash Token","symbol":"BCH","address":"0x8ff795a6f4d97e7887c79bea79aba5cc76444adf","chainId":56,"decimals":18,"logoURI":"/images/coins/BCH-icon.png"},{"name":"Litecoin Token","symbol":"LTC","address":"0x4338665cbb7b2485a8855a139b75d5e34ab0db94","chainId":56,"decimals":18,"logoURI":"/images/coins/LTC-icon.png"},{"name":"Cardano Token","symbol":"ADA","address":"0x3ee2200efb3400fabb9aacf31297cbdd1d435d47","chainId":56,"decimals":18},{"name":"Cosmos Token","symbol":"ATOM","address":"0x0eb3a705fc54725037cc9e008bdede697f62f335","chainId":56,"decimals":18},{"name":"Tezos Token","symbol":"XTZ","address":"0x16939ef78684453bfdfb47825f8a5f714f12623a","chainId":56,"decimals":18},{"name":"Ontology Token","symbol":"ONT","address":"0xfd7b3a77848f1c2d67e05e54d78d174a0c850335","chainId":56,"decimals":18},{"name":"Zcash Token","symbol":"ZEC","address":"0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb","chainId":56,"decimals":18},{"name":"Dai Token","symbol":"DAI","address":"0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3","chainId":56,"decimals":18,"logoURI":"/images/coins/DAI-icon.png"},{"name":"YFII.finance Token","symbol":"YFII","address":"0x7f70642d88cf1c4a3a7abb072b53b929b653eda5","chainId":56,"decimals":18},{"name":"Cream","symbol":"CREAM","address":"0xd4cb328a82bdf5f03eb737f37fa6b370aef3e888","chainId":56,"decimals":18},{"name":"Prometeus","symbol":"PROM","address":"0xaf53d56ff99f1322515e54fdde93ff8b3b7dafd5","chainId":56,"decimals":18},{"name":"CanYaCoin","symbol":"CAN","address":"0x007ea5c0ea75a8df45d288a4debdd5bb633f9e56","chainId":56,"decimals":18},{"name":"Polkadot Token","symbol":"DOT","address":"0x7083609fce4d1d8dc0c979aab8c869ea2c873402","chainId":56,"decimals":18},{"name":"PancakeSwap Token","symbol":"CAKE","address":"0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82","chainId":56,"decimals":18},{"name":"Streamity","symbol":"STM","address":"0x90df11a8cce420675e73922419e3f4f3fe13cccb","chainId":56,"decimals":18},{"name":"Ankr","symbol":"ANKR","address":"0xf307910a4c7bbc79691fd374889b36d8531b08e3","chainId":56,"decimals":18},{"name":"ChainLink Token","symbol":"LINK","address":"0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd","chainId":56,"decimals":18},{"name":"Burger Swap","symbol":"BURGER","address":"0xae9269f27437f0fcbc232d39ec814844a51d6b8f","chainId":56,"decimals":18},{"name":"Dice.finance Token","symbol":"DICE","address":"0x748ad98b14c814b28812eb42ad219c8672909879","chainId":56,"decimals":18},{"name":"JNTR/b","symbol":"JNTR/b","address":"0x3c037c4c2296f280bb318d725d0b454b76c199b9","chainId":56,"decimals":18},{"name":"SPARTAN PROTOCOL TOKEN","symbol":"SPART","address":"0xe4ae305ebe1abe663f261bc00534067c80ad677c","chainId":56,"decimals":18},{"name":"Trust Wallet","symbol":"TWT","address":"0x4b0f1812e5df2a09796481ff14017e6005508003","chainId":56,"decimals":18},{"name":"Venus","symbol":"XVS","address":"0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63","chainId":56,"decimals":18},{"name":"Beer Garden","symbol":"Beer","address":"0xbb8db5e17bbe9c90da8e3445e335b82d7cc53575","chainId":56,"decimals":18},{"name":"AlphaToken","symbol":"ALPHA","address":"0xa1faa113cbe53436df28ff0aee54275c13b40975","chainId":56,"decimals":18},{"name":"Beefy.finance","symbol":"BIFI","address":"0xCa3F508B8e4Dd382eE878A314789373D80A5190A","chainId":56,"decimals":18},{"name":"yearn.finance","symbol":"YFI","address":"0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e","chainId":56,"decimals":18},{"name":"Uniswap","symbol":"UNI","address":"0xbf5140a22578168fd562dccf235e5d43a02ce9b1","chainId":56,"decimals":18},{"name":"fry.world","symbol":"FRIES","address":"0x393B312C01048b3ed2720bF1B090084C09e408A1","chainId":56,"decimals":18},{"name":"StableXSwap","symbol":"STAX","address":"0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4","chainId":56,"decimals":18,"logoURI":"/images/coins/STAX.png"},{"name":"Filecoin","symbol":"FIL","address":"0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153","chainId":56,"decimals":18},{"name":"KAVA","symbol":"KAVA","address":"0x5F88AB06e8dfe89DF127B2430Bba4Af600866035","chainId":56,"decimals":6},{"name":"USDX","symbol":"USDX","address":"0x1203355742e76875154c0d13eb81dcd7711dc7d9","chainId":56,"decimals":6},{"name":"Injective Protocol","symbol":"INJ","address":"0xa2B726B1145A4773F68593CF171187d8EBe4d495","chainId":56,"decimals":18},{"name":"Swipe","symbol":"SXP","address":"0x47bead2563dcbf3bf2c9407fea4dc236faba485a","chainId":56,"decimals":18},{"name":"Binance-Peg USD Coin","symbol":"USDC","address":"0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d","chainId":56,"decimals":18},{"name":"CertiK Token","symbol":"CTK","address":"0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929","chainId":56,"decimals":6},{"name":"NAR Token","symbol":"NAR","address":"0xa1303e6199b319a891b79685f0537d289af1fc83","chainId":56,"decimals":18},{"name":"Nyanswop Token","symbol":"NYA","address":"0xbfa0841f7a90c4ce6643f651756ee340991f99d5","chainId":56,"decimals":18},{"name":"DANGO","symbol":"DANGO","address":"0x0957c57c9eb7744850dcc95db5a06ed4a246236e","chainId":56,"decimals":6},{"name":"HARD","symbol":"HARD","address":"0xf79037f6f6be66832de4e7516be52826bc3cbcc4","chainId":56,"decimals":6},{"name":"ROOBEE","symbol":"bROOBEE","address":"0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe","chainId":56,"decimals":18},{"name":"Unifi Token","symbol":"UNFI","address":"0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B","chainId":56,"decimals":18},{"name":"BLINk","symbol":"BLK","address":"0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F","chainId":56,"decimals":6},{"name":"QUSD Stablecoin","symbol":"QUSD","address":"0xb8C540d00dd0Bf76ea12E4B4B95eFC90804f924E","chainId":56,"decimals":18},{"name":"Qian Governance Token","symbol":"KUN","address":"0x1A2fb0Af670D0234c2857FaD35b789F8Cb725584","chainId":56,"decimals":18},{"name":"VAI Stablecoin","symbol":"VAI","address":"0x4bd17003473389a42daf6a0a729f6fdb328bbbd7","chainId":56,"decimals":18},{"name":"Juventus","symbol":"JUV","address":"0xc40c9a843e1c6d01b7578284a9028854f6683b1b","chainId":56,"decimals":2},{"name":"Paris Saint-Germain","symbol":"PSG","address":"0xbc5609612b7c44bef426de600b5fd1379db2ecf1","chainId":56,"decimals":2},{"name":"Ditto","symbol":"DITTO","address":"0x233d91A0713155003fc4DcE0AFa871b508B3B715","chainId":56,"decimals":9},{"name":"Math","symbol":"MATH","address":"0xf218184af829cf2b0019f8e6f0b2423498a36983","chainId":56,"decimals":18},{"name":"Fuel","symbol":"FUEL","address":"0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A","chainId":56,"decimals":18},{"name":"Nuls","symbol":"NULS","address":"0x8cd6e29d3686d24d3c2018cee54621ea0f89313b","chainId":56,"decimals":8},{"name":"NerveNetwork","symbol":"NVT","address":"0xf0e406c49c63abf358030a299c0e00118c4c6ba5","chainId":56,"decimals":8},{"name":"Reef","symbol":"REEF","address":"0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e","chainId":56,"decimals":18},{"name":"OG","symbol":"OG","address":"0xf05e45ad22150677a017fbd94b84fbb63dc9b44c","chainId":56,"decimals":2},{"name":"Atletico de Madrid","symbol":"ATM","address":"0x25e9d05365c867e59c1904e7463af9f312296f9e","chainId":56,"decimals":2},{"name":"AS Roma","symbol":"ASR","address":"0x80d5f92c2c8c682070c95495313ddb680b267320","chainId":56,"decimals":2},{"name":"AllianceBlock","symbol":"bALBT","address":"0x72faa679e1008ad8382959ff48e392042a8b06f7","chainId":56,"decimals":18},{"name":"Tenet","symbol":"TEN","address":"0xdff8cb622790b7f92686c722b02cab55592f152c","chainId":56,"decimals":18},{"name":"Helmet.insure","symbol":"Helmet","address":"0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8","chainId":56,"decimals":18},{"name":"BSCEX","symbol":"BSCX","address":"0x5ac52ee5b2a633895292ff6d8a89bb9190451587","chainId":56,"decimals":18},{"name":"Standard BTC Hashrate Token","symbol":"BTCST","address":"0x78650b139471520656b9e7aa7a5e9276814a38e9","chainId":56,"decimals":18},{"name":"Frontier Token","symbol":"FRONT","address":"0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b","chainId":56,"decimals":18},{"name":"Soteria","symbol":"wSOTE","address":"0x541e619858737031a1244a5d0cd47e5ef480342c","chainId":56,"decimals":18},{"name":"Mirror TSLA Token","symbol":"mTSLA","address":"0xF215A127A196e3988C09d052e16BcFD365Cd7AA3","chainId":56,"decimals":18},{"name":"Mirror AMZN Token","symbol":"mAMZN","address":"0x3947B992DC0147D2D89dF0392213781b04B25075","chainId":56,"decimals":18},{"name":"Mirror NFLX Token","symbol":"mNFLX","address":"0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc","chainId":56,"decimals":18},{"name":"Mirror GOOGL Token","symbol":"mGOOGL","address":"0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f","chainId":56,"decimals":18},{"name":"UST Token","symbol":"UST","address":"0x23396cF899Ca06c4472205fC903bDB4de249D6fC","chainId":56,"decimals":18},{"name":"b.earnfi","symbol":"BFI","address":"0x81859801b01764D4f0Fa5E64729f5a6C3b91435b","chainId":56,"decimals":18,"logoURI":"/images/coins/bearn.png"},{"name":"bDollar","symbol":"BDO","address":"0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454","chainId":56,"decimals":18},{"name":"bDollar Share","symbol":"sBDO","address":"0x0d9319565be7f53CeFE84Ad201Be3f40feAE2740","chainId":56,"decimals":18},{"name":"Elrond","symbol":"EGLD","address":"0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe","chainId":56,"decimals":18},{"name":"AUTOv2","symbol":"AUTO","address":"0xa184088a740c695e156f91f5cc086a06bb78b827","chainId":56,"decimals":18},{"name":"Hedget","symbol":"HGET","address":"0xC7d8D35EBA58a0935ff2D5a33Df105DD9f071731","chainId":56,"decimals":6},{"name":"Litentry","symbol":"LIT","address":"0xb59490ab09a0f526cc7305822ac65f2ab12f9723","chainId":56,"decimals":18},{"name":"Linear Finance","symbol":"LINA","address":"0x762539b45a1dcce3d36d080f74d1aed37844b878","chainId":56,"decimals":18},{"name":"Beacon ETH","symbol":"BETH","address":"0x250632378e573c6be1ac2f97fcdf00515d0aa91b","chainId":56,"decimals":18},{"name":"lUSD","symbol":"lUSD","address":"0x23e8a70534308a4AAF76fb8C32ec13d17a3BD89e","chainId":56,"decimals":18},{"name":"SafePal Token","symbol":"SFP","address":"0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb","chainId":56,"decimals":18},{"name":"Compound Finance","symbol":"COMP","address":"0x52ce071bd9b1c4b00a0b92d298c512478cad67e8","chainId":56,"decimals":18},{"name":"Swirge Pay","symbol":"SWGb","address":"0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb","chainId":56,"decimals":18},{"name":"renBTC","symbol":"renBTC","address":"0xfCe146bF3146100cfe5dB4129cf6C82b0eF4Ad8c","chainId":56,"decimals":8},{"name":"renDOGE","symbol":"renDOGE","address":"0xc3fed6eb39178a541d274e6fc748d48f0ca01cc3","chainId":56,"decimals":8},{"name":"anyMTLX","symbol":"anyMTLX","address":"0x5921dee8556c4593eefcfad3ca5e2f618606483b","chainId":56,"decimals":18},{"name":"ZeroSwapToken","symbol":"ZEE","address":"0x44754455564474a89358b2c2265883df993b12f0","chainId":56,"decimals":18},{"name":"Berry","symbol":"BRY","address":"0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830","chainId":56,"decimals":18},{"name":"Swingby","symbol":"SWINGBY","address":"0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739","chainId":56,"decimals":18},{"name":"Dodo","symbol":"DODO","address":"0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2","chainId":56,"decimals":18},{"name":"Sushi","symbol":"SUSHI","address":"0x947950bcc74888a40ffa2593c5798f11fc9124c4","chainId":56,"decimals":18},{"name":"OPEN Governance Token","symbol":"bOPEN","address":"0xF35262a9d427F96d2437379eF090db986eaE5d42","chainId":56,"decimals":18},{"name":"BoringDAO","symbol":"BOR","address":"0x92d7756c60dcfd4c689290e8a9f4d263b3b32241","chainId":56,"decimals":18},{"name":"renZEC","symbol":"renZEC","address":"0x695FD30aF473F2960e81Dc9bA7cB67679d35EDb7","chainId":56,"decimals":8},{"name":"Multiplier","symbol":"bMXX","address":"0x4131b87f74415190425ccd873048c708f8005823","chainId":56,"decimals":18},{"name":"IoTeX","symbol":"IOTX","address":"0x9678e42cebeb63f23197d726b29b1cb20d0064e5","chainId":56,"decimals":18},{"name":"xMARK","symbol":"xMARK","address":"0x26a5dfab467d4f58fb266648cae769503cec9580","chainId":56,"decimals":9},{"name":"TokenPocket","symbol":"TPT","address":"0xeca41281c24451168a37211f0bc2b8645af45092","chainId":56,"decimals":4},{"name":"Yieldwatch","symbol":"WATCH","address":"0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0","chainId":56,"decimals":18},{"name":"Bella Protocol","symbol":"BEL","address":"0x8443f091997f06a61670b735ed92734f5628692f","chainId":56,"decimals":18},{"name":"DeXe","symbol":"DEXE","address":"0x039cb485212f996a9dbb85a9a75d898f94d38da6","chainId":56,"decimals":18},{"name":"Ramp DEFI","symbol":"RAMP","address":"0x8519ea49c997f50ceffa444d240fb655e89248aa","chainId":56,"decimals":18},{"name":"Belt","symbol":"BELT","address":"0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f","chainId":56,"decimals":18},{"name":"Basic Attention Token","symbol":"BAT","address":"0x101d82428437127bf1608f699cd651e6abf9766e","chainId":56,"decimals":18},{"name":"BUX","symbol":"BUX","address":"0x211ffbe424b90e25a15531ca322adf1559779e45","chainId":56,"decimals":18},{"name":"BIDR Token","symbol":"BIDR","address":"0x9a2f5556e9a637e8fbce886d8e3cf8b316a1d8a2","chainId":56,"decimals":18}]}'
      );
    },
    289: function (e, t, n) {},
    370: function (e) {
      e.exports = JSON.parse(
        '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]'
      );
    },
    371: function (e) {
      e.exports = JSON.parse(
        '[{"constant":true,"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLastBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"name":"difficulty","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"name":"gaslimit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"name":"coinbase","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]'
      );
    },
    480: function (e, t, n) {},
    496: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"contract ENS","name":"_old","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"label","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"resolver","type":"address"}],"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"NewTTL","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"old","outputs":[{"internalType":"contract ENS","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"recordExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"resolver","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"resolver","type":"address"}],"name":"setResolver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setSubnodeOwner","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setSubnodeRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setTTL","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"ttl","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"}]'
      );
    },
    497: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"contract ENS","name":"_ens","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"contentType","type":"uint256"}],"name":"ABIChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"a","type":"address"}],"name":"AddrChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"coinType","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"newAddress","type":"bytes"}],"name":"AddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"target","type":"address"},{"indexed":false,"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"AuthorisationChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"hash","type":"bytes"}],"name":"ContenthashChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"record","type":"bytes"}],"name":"DNSRecordChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"}],"name":"DNSRecordDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"DNSZoneCleared","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"indexed":false,"internalType":"address","name":"implementer","type":"address"}],"name":"InterfaceChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"NameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"x","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"PubkeyChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"string","name":"indexedKey","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"}],"name":"TextChanged","type":"event"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentTypes","type":"uint256"}],"name":"ABI","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"addr","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"authorisations","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"clearDNSZone","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"contenthash","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"uint16","name":"resource","type":"uint16"}],"name":"dnsRecord","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"}],"name":"hasDNSRecords","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"interfaceImplementer","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"pubkey","outputs":[{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentType","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setABI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"coinType","type":"uint256"},{"internalType":"bytes","name":"a","type":"bytes"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"a","type":"address"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"target","type":"address"},{"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"setAuthorisation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"hash","type":"bytes"}],"name":"setContenthash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setDNSRecords","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"internalType":"address","name":"implementer","type":"address"}],"name":"setInterface","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"setPubkey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"setText","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"}],"name":"text","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]'
      );
    },
    498: function (e) {
      e.exports = JSON.parse(
        '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]'
      );
    },
    521: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"contract IBEP20","name":"_cakeToken","type":"address"},{"internalType":"uint256","name":"_numberCakeToReactivate","type":"uint256"},{"internalType":"uint256","name":"_numberCakeToRegister","type":"uint256"},{"internalType":"uint256","name":"_numberCakeToUpdate","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"teamId","type":"uint256"},{"indexed":false,"internalType":"string","name":"teamName","type":"string"}],"name":"TeamAdd","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"teamId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"numberPoints","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"campaignId","type":"uint256"}],"name":"TeamPointIncrease","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"oldTeamId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTeamId","type":"uint256"}],"name":"UserChangeTeam","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"teamId","type":"uint256"},{"indexed":false,"internalType":"address","name":"nftAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"UserNew","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"teamId","type":"uint256"}],"name":"UserPause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"numberPoints","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"campaignId","type":"uint256"}],"name":"UserPointIncrease","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"userAddresses","type":"address[]"},{"indexed":false,"internalType":"uint256","name":"numberPoints","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"campaignId","type":"uint256"}],"name":"UserPointIncreaseMultiple","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"teamId","type":"uint256"},{"indexed":false,"internalType":"address","name":"nftAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"UserReactivate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"address","name":"nftAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"UserUpdate","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NFT_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"POINT_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SPECIAL_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_nftAddress","type":"address"}],"name":"addNftAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_teamName","type":"string"},{"internalType":"string","name":"_teamDescription","type":"string"}],"name":"addTeam","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cakeToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint256","name":"_newTeamId","type":"uint256"}],"name":"changeTeam","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"claimFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"},{"internalType":"address","name":"_nftAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"createProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"}],"name":"getTeamProfile","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"getUserProfile","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasRegistered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"},{"internalType":"uint256","name":"_campaignId","type":"uint256"}],"name":"increaseTeamPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"},{"internalType":"uint256","name":"_campaignId","type":"uint256"}],"name":"increaseUserPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_userAddresses","type":"address[]"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"},{"internalType":"uint256","name":"_campaignId","type":"uint256"}],"name":"increaseUserPointsMultiple","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"}],"name":"makeTeamJoinable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"}],"name":"makeTeamNotJoinable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"numberActiveProfiles","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberCakeToReactivate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberCakeToRegister","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberCakeToUpdate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberTeams","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pauseProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"reactivateProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"}],"name":"removeTeamPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"}],"name":"removeUserPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_userAddresses","type":"address[]"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"}],"name":"removeUserPointsMultiple","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"},{"internalType":"string","name":"_teamName","type":"string"},{"internalType":"string","name":"_teamDescription","type":"string"}],"name":"renameTeam","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newNumberCakeToReactivate","type":"uint256"},{"internalType":"uint256","name":"_newNumberCakeToRegister","type":"uint256"},{"internalType":"uint256","name":"_newNumberCakeToUpdate","type":"uint256"}],"name":"updateNumberCake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"updateProfile","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    522: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"string","name":"_baseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"bunnyBurnCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"bunnyCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getBunnyId","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"getBunnyName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getBunnyNameOfTokenId","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"string","name":"_tokenURI","type":"string"},{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"},{"internalType":"string","name":"_name","type":"string"}],"name":"setBunnyName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    523: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"contract BunnyFactoryV2","name":"_bunnyFactoryV2","type":"address"},{"internalType":"contract BunnyMintingStation","name":"_bunnyMintingStation","type":"address"},{"internalType":"contract IBEP20","name":"_cakeToken","type":"address"},{"internalType":"uint256","name":"_tokenPrice","type":"uint256"},{"internalType":"string","name":"_ipfsHash","type":"string"},{"internalType":"uint256","name":"_startBlockNumber","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"bunnyId","type":"uint8"}],"name":"BunnyMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"bunnyFactoryV2","outputs":[{"internalType":"contract BunnyFactoryV2","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bunnyMintingStation","outputs":[{"internalType":"contract BunnyMintingStation","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cakeToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"canMint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"claimFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"mintNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_bunnyId5Json","type":"string"},{"internalType":"string","name":"_bunnyId6Json","type":"string"},{"internalType":"string","name":"_bunnyId7Json","type":"string"},{"internalType":"string","name":"_bunnyId8Json","type":"string"},{"internalType":"string","name":"_bunnyId9Json","type":"string"}],"name":"setBunnyJson","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newStartBlockNumber","type":"uint256"}],"name":"setStartBlockNumber","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newTokenPrice","type":"uint256"}],"name":"updateTokenPrice","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    524: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"contract BunnyMintingStation","name":"_bunnyMintingStation","type":"address"},{"internalType":"contract IBEP20","name":"_cakeToken","type":"address"},{"internalType":"contract IPancakeProfile","name":"_pancakeProfile","type":"address"},{"internalType":"uint256","name":"_maxViewLength","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint8","name":"bunnyId","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"thresholdUser","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"costCake","type":"uint256"}],"name":"BunnyAdd","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint8","name":"bunnyId","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"thresholdUser","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"costCake","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isActive","type":"bool"}],"name":"BunnyChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"bunnyId","type":"uint8"}],"name":"BunnyMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"},{"internalType":"string","name":"_tokenURI","type":"string"},{"internalType":"uint256","name":"_thresholdUser","type":"uint256"},{"internalType":"uint256","name":"_cakeCost","type":"uint256"}],"name":"addBunny","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"bunnyCharacteristics","outputs":[{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"uint256","name":"thresholdUser","type":"uint256"},{"internalType":"uint256","name":"cakeCost","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"bool","name":"isCreated","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bunnyMintingStation","outputs":[{"internalType":"contract BunnyMintingStation","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"c__0xf318aee2","type":"bytes32"}],"name":"c_0xf318aee2","outputs":[],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"cakeToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint8[]","name":"_bunnyIds","type":"uint8[]"}],"name":"canClaimMultiple","outputs":[{"internalType":"bool[]","name":"","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"canClaimSingle","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"claimFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint8","name":"","type":"uint8"}],"name":"hasClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxViewLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"mintNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"numberDifferentBunnies","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakeProfile","outputs":[{"internalType":"contract IPancakeProfile","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"},{"internalType":"uint256","name":"_thresholdUser","type":"uint256"},{"internalType":"uint256","name":"_cakeCost","type":"uint256"},{"internalType":"bool","name":"_isActive","type":"bool"}],"name":"updateBunny","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newMaxViewLength","type":"uint256"}],"name":"updateMaxViewLength","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    525: function (e) {
      e.exports = JSON.parse(
        '[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    526: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"contract IBEP20","name":"_offeringToken","type":"address"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"},{"internalType":"uint256","name":"_offeringAmount","type":"uint256"},{"internalType":"uint256","name":"_raisingAmount","type":"uint256"},{"internalType":"address","name":"_adminAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"offeringAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"excessAmount","type":"uint256"}],"name":"Harvest","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"addressList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lpAmount","type":"uint256"},{"internalType":"uint256","name":"_offerAmount","type":"uint256"}],"name":"finalWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getOfferingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getRefundingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"hasHarvest","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offeringAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offeringToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raisingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"}]'
      );
    },
    527: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"address","name":"_pancakeProfileAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"_contractAddress","type":"address"},{"internalType":"uint256","name":"_campaignId","type":"uint256"},{"internalType":"uint256","name":"_thresholdToClaim","type":"uint256"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"}],"name":"addIFOAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"address","name":"_contractAddress","type":"address"}],"name":"checkClaimStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"address[]","name":"_contractAddresses","type":"address[]"}],"name":"checkClaimStatuses","outputs":[{"internalType":"bool[]","name":"","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_contractAddress","type":"address"}],"name":"getPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"ifos","outputs":[{"internalType":"uint256","name":"thresholdToClaim","type":"uint256"},{"internalType":"uint256","name":"campaignId","type":"uint256"},{"internalType":"uint256","name":"numberPoints","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    528: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Buy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DevWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"issueIndex","type":"uint256"},{"indexed":false,"internalType":"uint8[4]","name":"winningNumbers","type":"uint8[4]"}],"name":"Drawing","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"MultiBuy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"MultiClaim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"issueIndex","type":"uint256"}],"name":"Reset","type":"event"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"adminWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allocation","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint8[4]","name":"_numbers","type":"uint8[4]"}],"name":"buy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cake","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"drawed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_externalRandomNumber","type":"uint256"}],"name":"drawing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"drawingPhase","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"enterDrawingPhase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8[4]","name":"number","type":"uint8[4]"}],"name":"generateNumberIndexKey","outputs":[{"internalType":"uint64[11]","name":"","type":"uint64[11]"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"_issueIndex","type":"uint256"},{"internalType":"uint256","name":"_matchingNumber","type":"uint256"}],"name":"getMatchingRewardAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getRewardView","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_issueIndex","type":"uint256"}],"name":"getTotalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"historyAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"historyNumbers","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_cake","type":"address"},{"internalType":"contract LotteryNFT","name":"_lottery","type":"address"},{"internalType":"uint256","name":"_minPrice","type":"uint256"},{"internalType":"uint8","name":"_maxNumber","type":"uint8"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_adminAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"issueIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"lotteryInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lotteryNFT","outputs":[{"internalType":"contract LotteryNFT","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxNumber","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint8[4][]","name":"_numbers","type":"uint8[4][]"}],"name":"multiBuy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tickets","type":"uint256[]"}],"name":"multiClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reset","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_adminAddress","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_allcation1","type":"uint8"},{"internalType":"uint8","name":"_allcation2","type":"uint8"},{"internalType":"uint8","name":"_allcation3","type":"uint8"},{"internalType":"uint8","name":"_allcation4","type":"uint8"}],"name":"setAllocation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_maxNumber","type":"uint8"}],"name":"setMaxNumber","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setMinPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAddresses","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint64","name":"","type":"uint64"}],"name":"userBuyAmountSum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"winningNumbers","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"}]'
      );
    },
    529: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"claimInfo","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"issueIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lotteryAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"lotteryInfo","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"player","type":"address"},{"internalType":"uint8[4]","name":"_lotteryNumbers","type":"uint8[4]"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_issueIndex","type":"uint256"}],"name":"newLotteryItem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getLotteryNumbers","outputs":[{"internalType":"uint8[4]","name":"","type":"uint8[4]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getLotteryAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getLotteryIssueIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"}],"name":"multiClaimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getClaimStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true}]'
      );
    },
    530: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"contract IBEP20","name":"_syrup","type":"address"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"poolInfo","outputs":[{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accRewardPerShare","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"syrup","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    531: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"contract IBEP20","name":"_lp","type":"address"},{"internalType":"contract IBEP20","name":"_rewardToken","type":"address"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"},{"internalType":"address","name":"_adminAddress","type":"address"},{"internalType":"address","name":"_wbnb","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"WBNB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"emergencyRewardWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"limitAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accWardenPerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_blacklistAddress","type":"address"}],"name":"removeBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_adminAddress","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_blacklistAddress","type":"address"}],"name":"setBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setLimitAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"bool","name":"inBlackList","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'
      );
    },
    532: function (e) {
      e.exports = JSON.parse(
        '[{"constant":true,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]'
      );
    },
    651: function (e, t) {},
    749: function (e, t) {},
    764: function (e, t, n) {},
    775: function (e, t) {},
    796: function (e, t) {},
    798: function (e, t) {},
    812: function (e, t) {},
    817: function (e, t) {},
    828: function (e, t) {},
    833: function (e, t) {},
    849: function (e, t) {},
    851: function (e, t) {},
    853: function (e, t) {},
    895: function (e, t) {},
    910: function (e, t) {},
    914: function (e, t) {},
    916: function (e, t) {},
    948: function (e, t) {},
    953: function (e, t) {},
    955: function (e, t) {},
    962: function (e, t) {},
    975: function (e, t) {},
    993: function (e, t) {},
  },
  [[1113, 1, 2]],
]);
//# sourceMappingURL=main.121f8e53.chunk.js.map
