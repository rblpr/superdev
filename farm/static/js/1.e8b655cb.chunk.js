(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [1], {
        857: function(e, t, c) {
            "use strict";
            c.d(t, "a", (function() {
                return a
            })), c.d(t, "b", (function() {
                return i
            }));
            var n = c(14),
                s = c.n(n),
                a = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18,
                        c = new s.a(e).dividedBy(new s.a(10).pow(t));
                    return c.toNumber()
                },
                i = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
                    return e.dividedBy(new s.a(10).pow(t)).toFixed()
                }
        },
        879: function(e, t, c) {
            "use strict";
            var n = c(35),
                s = c(0),
                a = c(223),
                i = c.n(a),
                r = c(58),
                o = c(76);
            t.a = function() {
                var e = Object(r.c)().library,
                    t = Object(s.useRef)(e),
                    c = Object(s.useState)(e ? new i.a(e) : Object(o.b)()),
                    a = Object(n.a)(c, 2),
                    l = a[0],
                    d = a[1];
                return Object(s.useEffect)((function() {
                    e !== t.current && (d(e ? new i.a(e) : Object(o.b)()), t.current = e)
                }), [e]), l
            }
        },
        880: function(e, t, c) {
            "use strict";
            c.d(t, "c", (function() {
                return s
            })), c.d(t, "b", (function() {
                return a
            })), c.d(t, "d", (function() {
                return i
            })), c.d(t, "a", (function() {
                return r
            }));
            var n = c(964);
            n.a.config({
                EXPONENTIAL_AT: 1e3,
                DECIMAL_PLACES: 80
            });
            var s = new n.a(0),
                a = new n.a(10512e3),
                i = 1,
                r = "https://liquidity.wardenswap.finance"
        },
        881: function(e, t, c) {
            "use strict";
            c(0);
            var n = c(53),
                s = c(15);
            t.a = function(e) {
                var t = e.styleOption,
                    c = Object(n.j)().spaceMode;
                return Object(s.jsxs)("div", {
                    className: "flex ".concat(t),
                    children: [Object(s.jsx)("a", {
                        href: "https://bit.ly/39dTjER",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "m-2",
                        children: Object(s.jsx)("img", {
                            alt: "icon",
                            className: "cursor-pointer",
                            src: "/images/icon-gitbook".concat(c ? "-space" : "", ".svg")
                        })
                    }), Object(s.jsx)("a", {
                        href: "https://bit.ly/3urUUjQ",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "m-2",
                        children: Object(s.jsx)("img", {
                            alt: "icon",
                            className: "cursor-pointer",
                            src: "/images/icon-discord".concat(c ? "-space" : "", ".svg")
                        })
                    }), Object(s.jsx)("a", {
                        href: "https://bit.ly/3hUkHLM",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "m-2",
                        children: Object(s.jsx)("img", {
                            alt: "icon",
                            className: "cursor-pointer",
                            src: "/images/icon-coinmarketcap".concat(c ? "-space" : "", ".svg")
                        })
                    }), Object(s.jsx)("a", {
                        href: "https://bit.ly/2Vz7xfJ",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "m-2",
                        children: Object(s.jsx)("img", {
                            alt: "icon",
                            className: "cursor-pointer",
                            src: "/images/icon-coingecko".concat(c ? "-space" : "", ".svg")
                        })
                    }), Object(s.jsx)("a", {
                        href: "https://bit.ly/39cZaun",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "m-2",
                        children: Object(s.jsx)("img", {
                            alt: "icon",
                            className: "cursor-pointer",
                            src: "/images/icon-twitter".concat(c ? "-space" : "", ".svg")
                        })
                    }), Object(s.jsx)("a", {
                        href: "https://bit.ly/3d06D0Q",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "m-2",
                        children: Object(s.jsx)("img", {
                            alt: "icon",
                            className: "cursor-pointer",
                            src: "/images/icon-medium".concat(c ? "-space" : "", ".svg")
                        })
                    }), Object(s.jsx)("a", {
                        href: "https://bit.ly/3wkmJeK",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "m-2",
                        children: Object(s.jsx)("img", {
                            alt: "icon",
                            className: "cursor-pointer",
                            src: "/images/icon-telegram".concat(c ? "-space" : "", ".svg")
                        })
                    }), Object(s.jsx)("a", {
                        href: "https://bit.ly/39fgD59",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "m-2",
                        children: Object(s.jsx)("img", {
                            alt: "icon",
                            className: "cursor-pointer",
                            src: "/images/icon-github".concat(c ? "-space" : "", ".svg")
                        })
                    })]
                })
            }
        },
        883: function(e, t, c) {},
        904: function(e, t, c) {
            "use strict";
            c.d(t, "b", (function() {
                return u
            })), c.d(t, "c", (function() {
                return p
            })), c.d(t, "a", (function() {
                return x
            }));
            var n = c(4),
                s = c.n(n),
                a = c(12),
                i = c(35),
                r = c(0),
                o = c(14),
                l = c.n(o),
                d = c(58),
                j = c(82),
                b = c(879),
                m = c(165),
                u = function(e) {
                    var t = Object(r.useState)(new l.a(0)),
                        c = Object(i.a)(t, 2),
                        n = c[0],
                        o = c[1],
                        u = Object(d.c)().account,
                        p = Object(b.a)(),
                        x = Object(m.a)().fastRefresh;
                    return Object(r.useEffect)((function() {
                        u && function() {
                            var t = Object(a.a)(s.a.mark((function t() {
                                var c, n;
                                return s.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return c = Object(j.a)(e, p), t.next = 3, c.methods.balanceOf(u).call();
                                        case 3:
                                            n = t.sent, o(new l.a(n));
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }()()
                    }), [u, e, p, x]), n
                },
                p = function() {
                    var e = Object(m.a)().slowRefresh,
                        t = Object(r.useState)(),
                        c = Object(i.a)(t, 2),
                        n = c[0],
                        o = c[1];
                    return Object(r.useEffect)((function() {
                        function e() {
                            return (e = Object(a.a)(s.a.mark((function e() {
                                var t, c;
                                return s.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = Object(j.d)(), e.next = 3, t.methods.totalSupply().call();
                                        case 3:
                                            c = e.sent, o(new l.a(c));
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).apply(this, arguments)
                        }! function() {
                            e.apply(this, arguments)
                        }()
                    }), [e]), n
                },
                x = function(e) {
                    var t = Object(r.useState)(new l.a(0)),
                        c = Object(i.a)(t, 2),
                        n = c[0],
                        o = c[1],
                        d = Object(m.a)().slowRefresh,
                        u = Object(b.a)();
                    return Object(r.useEffect)((function() {
                        (function() {
                            var t = Object(a.a)(s.a.mark((function t() {
                                var c, n;
                                return s.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return c = Object(j.a)(e, u), t.next = 3, c.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();
                                        case 3:
                                            n = t.sent, o(new l.a(n));
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        })()()
                    }), [u, e, d]), n
                }
        },
        908: function(e, t, c) {
            "use strict";
            c.d(t, "a", (function() {
                return i
            }));
            var n = c(4),
                s = c.n(n),
                a = c(12),
                i = (c(166), function() {
                    var e = Object(a.a)(s.a.mark((function e(t, c, n, a) {
                        var i;
                        return s.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, window.ethereum.request({
                                        method: "wallet_watchAsset",
                                        params: {
                                            type: "ERC20",
                                            options: {
                                                address: t,
                                                symbol: c,
                                                decimals: n,
                                                image: a
                                            }
                                        }
                                    });
                                case 2:
                                    return i = e.sent, e.abrupt("return", i);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, c, n, s) {
                        return e.apply(this, arguments)
                    }
                }())
        },
        909: function(e, t, c) {
            "use strict";
            c(0);
            var n = c(53),
                s = (c(883), c(15));
            t.a = function(e) {
                var t = e.padding,
                    c = void 0 === t ? "8px 25px" : t,
                    a = Object(n.j)(),
                    i = a.spaceMode,
                    r = a.muteMode,
                    o = "&t=".concat(i ? "1" : "0", "&s=").concat(r ? "1" : "0"),
                    l = "alpha" === Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0,
                        FAST_REFRESH: !0,
                        REACT_APP_CHAIN_ID: "56",
                        REACT_APP_GTAG: "GTM-TLF66T4",
                        REACT_APP_NODE_1: "https://bsc-dataseed1.ninicoin.io",
                        REACT_APP_NODE_2: "https://bsc-dataseed1.defibit.io",
                        REACT_APP_NODE_3: "https://bsc-dataseed.binance.org",
                        REACT_APP_SUBGRAPH_PROFILE: "https://api.thegraph.com/subgraphs/name/pancakeswap/profile",
                        REACT_APP_ROLLBAR_POST_CLIENT_ITEM_TOKEN: "eeb81c2085af4257892e8a6b0b6726e6",
                        REACT_APP_ROLLBAR_ENV: "production"
                    }).REACT_APP_ENV;
                return Object(s.jsxs)("div", {
                    children: [Object(s.jsx)("div", {
                        className: "flex flex-col network-btn-wrap2",
                        style: {
                            padding: c
                        },
                        children: Object(s.jsxs)("div", {
                            className: "flex items-center",
                            children: [Object(s.jsxs)("div", {
                                className: "relative mr-5",
                                children: [Object(s.jsx)("img", {
                                    src: "/images/icon-bsc-round.svg",
                                    alt: "icon-network",
                                    width: "25"
                                }), Object(s.jsx)("img", {
                                    src: "/images/icon-check.svg",
                                    alt: "icon-check",
                                    className: "w-15px absolute icon-check-position"
                                })]
                            }), Object(s.jsx)("span", {
                                className: "network-active",
                                children: "Binance Smart Chain"
                            })]
                        })
                    }), Object(s.jsx)("a", {
                        className: "flex flex-col network-btn-wrap2",
                        style: {
                            padding: c
                        },
                        href: "https://".concat(l ? "alpha" : "www", ".wardenswap.finance/#/best-rate-swap?network=polygon").concat(o),
                        children: Object(s.jsxs)("div", {
                            className: "flex items-center",
                            children: [Object(s.jsx)("div", {
                                className: "relative mr-5",
                                children: Object(s.jsx)("img", {
                                    src: "/images/icon-polygon-round.svg",
                                    alt: "icon-network",
                                    width: "25"
                                })
                            }), Object(s.jsx)("span", {
                                children: "Polygon"
                            })]
                        })
                    }), Object(s.jsx)("a", {
                        className: "flex flex-col network-btn-wrap2",
                        style: {
                            padding: c
                        },
                        href: "https://".concat(l ? "alpha" : "www", ".wardenswap.finance/#/best-rate-swap?network=arbitrum").concat(o),
                        children: Object(s.jsxs)("div", {
                            className: "flex items-center",
                            children: [Object(s.jsx)("div", {
                                className: "relative mr-5",
                                children: Object(s.jsx)("img", {
                                    src: "/images/icon-arbitrum-round.svg",
                                    alt: "icon-network",
                                    width: "25"
                                })
                            }), Object(s.jsx)("span", {
                                children: "Arbitrum"
                            })]
                        })
                    })]
                })
            }
        },
        910: function(e, t, c) {},
        958: function(e, t, c) {
            "use strict";
            c.d(t, "a", (function() {
                return F
            }));
            var n, s, a, i, r, o = c(35),
                l = c(70),
                d = c(0),
                j = c(6),
                b = c(965),
                m = c(53),
                u = c(20),
                p = c(882),
                x = c.n(p),
                h = c(58),
                O = c(979),
                f = c(960),
                g = c(961),
                v = c(30),
                w = c(865),
                N = (c(990), c(141)),
                k = c(104),
                y = c(84),
                _ = (c(991), c(15)),
                C = function(e) {
                    var t = e.name,
                        c = e.checked,
                        n = e.onToggle;
                    return Object(_.jsxs)("div", {
                        className: "onoffswitch",
                        children: [Object(_.jsx)("input", {
                            type: "checkbox",
                            name: "onoffswitch",
                            className: "onoffswitch-checkbox",
                            id: t,
                            checked: c,
                            onChange: n
                        }), Object(_.jsx)(_.Fragment, {}), Object(_.jsxs)("label", {
                            className: "onoffswitch-label",
                            htmlFor: t,
                            children: [Object(_.jsx)("span", {
                                className: "onoffswitch-inner"
                            }), Object(_.jsx)("span", {
                                className: "onoffswitch-switch"
                            })]
                        })]
                    })
                },
                A = j.d.div(n || (n = Object(l.a)(["\n\theight: 1px;\n\twidth: 100%;\n\tbackground-color: var(--color-border-2);\n"]))),
                P = function(e) {
                    var t = e.visible,
                        c = e.onHide,
                        n = Object(v.b)(),
                        s = Object(v.c)((function(e) {
                            return e.setting
                        })),
                        a = s.spaceMode,
                        i = s.muteMode,
                        r = !Object(u.p)().isXl;
                    return Object(_.jsxs)(w.Dialog, {
                        header: "Settings",
                        visible: t,
                        className: "settings-modal-desktop ".concat(r ? "settings-modal-mobile" : ""),
                        position: r ? "bottom" : "center",
                        dismissableMask: !0,
                        rtl: !0,
                        onHide: c,
                        children: [Object(_.jsxs)("div", {
                            className: "setting-item",
                            children: [Object(_.jsx)("div", {
                                className: "setting-item-img",
                                children: Object(_.jsx)("img", {
                                    src: a ? "/images/space_mode-space.svg" : "/images/space_mode.svg",
                                    alt: "space"
                                })
                            }), Object(_.jsxs)("div", {
                                className: "setting-item-text",
                                children: [Object(_.jsx)("h4", {
                                    children: "Space Mode"
                                }), Object(_.jsxs)("p", {
                                    children: ["When your eyes are burning, we would like to invite you to join us on a space trip.", Object(_.jsx)("img", {
                                        className: "inline",
                                        src: "/images/icon-smile.svg",
                                        alt: "smile"
                                    })]
                                })]
                            }), Object(_.jsx)("div", {
                                children: Object(_.jsx)(C, {
                                    name: "theme",
                                    checked: a,
                                    onToggle: function() {
                                        Object(k.d)();
                                        var e = Object(k.b)(),
                                            t = e === y.a.SPACE_MODE;
                                        n(Object(N.c)(t)), document.body.setAttribute("data-theme", e);
                                        var c = -1 !== window.location.href.indexOf("farm") ? "/#/farm" : "/";
                                        window.history.pushState("", "", c)
                                    }
                                })
                            })]
                        }), Object(_.jsx)(A, {}), Object(_.jsxs)("div", {
                            className: "setting-item",
                            children: [Object(_.jsx)("div", {
                                className: "setting-item-img",
                                children: Object(_.jsx)("img", {
                                    src: a ? "/images/sound_mode-space.svg" : "/images/sound_mode.svg",
                                    alt: "sound"
                                })
                            }), Object(_.jsxs)("div", {
                                className: "setting-item-text",
                                children: [Object(_.jsx)("h4", {
                                    children: "Silent Mode"
                                }), Object(_.jsxs)("p", {
                                    children: ["If you are annoyed by the \u201cpew pew\u201d noise during token exchange. You can turn off the sound", Object(_.jsx)("img", {
                                        className: "inline",
                                        src: "/images/icon-mute.svg",
                                        alt: "mute"
                                    })]
                                })]
                            }), Object(_.jsx)("div", {
                                children: Object(_.jsx)(C, {
                                    name: "sound",
                                    checked: i,
                                    onToggle: function() {
                                        Object(k.c)();
                                        var e = Object(k.a)();
                                        if (n(Object(N.b)(e)), !e) {
                                            var t = document.getElementById("bgMusic");
                                            t && t.play()
                                        }
                                    }
                                })
                            })]
                        })]
                    })
                },
                S = c(909),
                T = (c(883), function() {
                    return Object(_.jsx)("div", {
                        className: "dropdown-container",
                        children: Object(_.jsx)(S.a, {})
                    })
                }),
                E = (c(910), j.d.div(s || (s = Object(l.a)(["\n\tdisplay: flex;\n"])))),
                M = j.d.img(a || (a = Object(l.a)(["\n\tmargin-left: 8px;\n\tcursor: pointer;\n"]))),
                R = function(e, t) {
                    if (e.length <= t) return e;
                    var c = t - "...".length,
                        n = Math.ceil(c / 2),
                        s = Math.floor(c / 2);
                    return e.substr(0, n) + "..." + e.substr(e.length - s)
                },
                D = function(e) {
                    var t = e.isCorrectNetwork,
                        c = e.sum,
                        n = e.balance,
                        s = Object(d.useState)(!1),
                        a = Object(o.a)(s, 2),
                        i = a[0],
                        r = a[1],
                        l = Object(m.j)().spaceMode,
                        j = Object(d.useState)(!1),
                        b = Object(o.a)(j, 2),
                        v = b[0],
                        w = b[1],
                        N = Object(d.useState)(!1),
                        k = Object(o.a)(N, 2),
                        y = k[0],
                        C = k[1],
                        A = Object(h.c)().account,
                        S = Object(d.useState)(!1),
                        D = Object(o.a)(S, 2),
                        W = D[0],
                        I = D[1],
                        H = Object(O.useDetectClickOutside)({
                            onTriggered: function() {
                                I(!1)
                            }
                        });
                    return Object(_.jsxs)(E, {
                        className: "space-x-2",
                        children: [Object(_.jsx)(f.a, {
                            visible: i,
                            isMobile: !1,
                            modalPosition: "center",
                            onHide: function() {
                                return r(!1)
                            }
                        }), Object(_.jsx)(P, {
                            visible: y,
                            isMobile: !1,
                            modalPosition: "center",
                            onHide: function() {
                                return C(!1)
                            }
                        }), A && Object(_.jsx)(g.a, {
                            visible: v,
                            isMobile: !1,
                            modalPosition: "center",
                            onHide: function() {
                                return w(!1)
                            },
                            sum: c,
                            balance: n
                        }), A ? Object(_.jsxs)("button", {
                            type: "button",
                            className: "btn-container wallet-account",
                            onClick: function() {
                                w(!0)
                            },
                            children: [Object(_.jsx)(u.e, {
                                style: {
                                    flex: "1 0 auto"
                                },
                                children: Object(_.jsx)(x.a, {
                                    diameter: 25,
                                    seed: Object(p.jsNumberForAddress)(A)
                                })
                            }), Object(_.jsx)("span", {
                                className: "ml-1",
                                children: R(A, 13)
                            }), Object(_.jsx)("img", {
                                src: "/images/icon-shape".concat(l ? "-space" : "", ".svg"),
                                className: "shape",
                                alt: "icon"
                            })]
                        }) : Object(_.jsx)("button", {
                            type: "button",
                            className: "btn-container connct-wallet",
                            onClick: function() {
                                r(!0)
                            },
                            children: "Connect wallet"
                        }), !t && Object(_.jsxs)("button", {
                            type: "button",
                            className: "btn-container wrong-network",
                            children: [Object(_.jsx)("img", {
                                src: "/images/icon-wrong-network.svg",
                                alt: "wrong-network"
                            }), Object(_.jsx)("span", {
                                children: "Wrong Network"
                            })]
                        }), Object(_.jsx)(M, {
                            className: "inline",
                            src: "/images/icon-selected-bsc.svg",
                            alt: "selected-chain",
                            onClick: function(e) {
                                e.preventDefault(), I((function(e) {
                                    return !e
                                }))
                            },
                            ref: H
                        }), Object(_.jsx)(M, {
                            src: "/images/icon-setting".concat(l ? "-space" : "", ".svg"),
                            alt: "setting",
                            onClick: function() {
                                C(!0)
                            }
                        }), Object(_.jsx)("div", {
                            className: "switch-network-position",
                            children: W && Object(_.jsx)(T, {})
                        })]
                    })
                },
                W = c(881),
                I = c(962),
                H = j.d.div(i || (i = Object(l.a)(["\n\tdisplay: flex;\n\tposition: relative;\n"]))),
                L = j.d.img(r || (r = Object(l.a)(["\n\twidth: 30px;\n\tcursor: pointer;\n\tmargin-right: 16px;\n"]))),
                F = function(e) {
                    var t = e.sum,
                        c = e.balance,
                        n = e.menu,
                        s = Object(d.useState)(!1),
                        a = Object(o.a)(s, 2),
                        i = a[0],
                        r = a[1],
                        l = Object(d.useState)(!1),
                        j = Object(o.a)(l, 2),
                        u = j[0],
                        p = j[1],
                        x = Object(d.useState)(!1),
                        h = Object(o.a)(x, 2),
                        O = h[0],
                        f = h[1],
                        g = Object(m.j)(),
                        v = g.spaceMode,
                        w = g.muteMode,
                        N = "?t=".concat(v ? "1" : "0", "&s=").concat(w ? "1" : "0");
                    return Object(_.jsxs)(_.Fragment, {
                        children: [Object(_.jsxs)("div", {
                            children: [Object(_.jsxs)("div", {
                                className: "header-container is-desktop",
                                children: [Object(_.jsx)("a", {
                                    href: "https://".concat("www", ".wardenswap.finance/#/best-rate-swap").concat(N),
                                    className: "router-link-active",
                                    children: Object(_.jsx)("img", {
                                        className: "logo",
                                        src: "/images/farms/warden-logo-1-5-aegis".concat(v ? "-space" : "", ".svg"),
                                        alt: "logo"
                                    })
                                }), Object(_.jsxs)("div", {
                                    className: "navbar-manu",
                                    children: [Object(_.jsx)("a", {
                                        href: "https://".concat("www", ".wardenswap.finance/#/best-rate-swap").concat(N),
                                        className: "navbar-item",
                                        children: Object(_.jsx)("span", {
                                            className: "navbar-text",
                                            children: "Best Rate Swap"
                                        })
                                    }), Object(_.jsx)("a", {
                                        href: "https://".concat("", "liquidity.wardenswap.finance").concat(N),
                                        className: "navbar-item",
                                        children: Object(_.jsx)("span", {
                                            className: "navbar-text",
                                            children: "Liquidity"
                                        })
                                    }), Object(_.jsx)("a", {
                                        href: "/#farm",
                                        className: "navbar-item",
                                        children: Object(_.jsx)("span", {
                                            className: "navbar-text ".concat("farm" === n ? "active" : ""),
                                            children: "Farms"
                                        })
                                    }), Object(_.jsx)("a", {
                                        href: "/",
                                        className: "navbar-item",
                                        children: Object(_.jsx)("span", {
                                            className: "navbar-text ".concat("info" === n ? "active" : ""),
                                            children: "Info"
                                        })
                                    }), Object(_.jsx)("a", {
                                        href: "https://".concat("www", ".wardenswap.finance/nft"),
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "navbar-item",
                                        children: Object(_.jsx)("span", {
                                            className: "navbar-text ".concat("NFT" === n ? "active" : ""),
                                            children: "NFT"
                                        })
                                    })]
                                }), Object(_.jsx)(D, {
                                    isCorrectNetwork: !0,
                                    sum: t,
                                    balance: c
                                })]
                            }), Object(_.jsxs)("div", {
                                className: "header-container is-mobile",
                                children: [Object(_.jsx)("a", {
                                    href: "https://".concat("www", ".wardenswap.finance/#/best-rate-swap").concat(N),
                                    children: Object(_.jsx)("img", {
                                        className: "logo",
                                        src: "/images/farms/warden-logo-1-5-aegis".concat(v ? "-space" : "", ".svg"),
                                        alt: "logo"
                                    })
                                }), Object(_.jsxs)(H, {
                                    children: [Object(_.jsx)(L, {
                                        className: "inline",
                                        src: "/images/icon-selected-bsc.svg",
                                        alt: "selected-chain",
                                        onClick: function() {
                                            f(!0)
                                        }
                                    }), Object(_.jsx)(L, {
                                        src: "/images/icon-setting".concat(v ? "-space" : "", ".svg"),
                                        alt: "setting",
                                        onClick: function() {
                                            p(!0)
                                        }
                                    }), Object(_.jsx)("button", {
                                        style: {
                                            border: 0,
                                            background: "transparent"
                                        },
                                        type: "button",
                                        onClick: function() {
                                            return r(!0)
                                        },
                                        children: Object(_.jsx)("img", {
                                            src: "/images/icon-hamberger-menu".concat(v ? "-space" : "", ".svg"),
                                            alt: "menu",
                                            style: {
                                                width: "30px"
                                            }
                                        })
                                    })]
                                }), Object(_.jsxs)(b.Sidebar, {
                                    visible: i,
                                    baseZIndex: 1e3,
                                    position: "right",
                                    onHide: function() {
                                        return r(!1)
                                    },
                                    children: [Object(_.jsx)("a", {
                                        href: "/",
                                        onClick: function() {
                                            return !1
                                        },
                                        className: "router-link-active",
                                        children: Object(_.jsx)("img", {
                                            className: "logo",
                                            style: {
                                                height: "63px"
                                            },
                                            src: "/images/farms/warden-logo-1-5-aegis".concat(v ? "-space" : "", ".svg"),
                                            alt: "logo"
                                        })
                                    }), Object(_.jsx)("a", {
                                        href: "https://".concat("www", ".wardenswap.finance/#/best-rate-swap").concat(N),
                                        children: Object(_.jsxs)("span", {
                                            className: "flex items-center p-4 hover:bg-indigo-500 hover:text-white text-primary",
                                            style: {
                                                paddingTop: "50px"
                                            },
                                            children: [Object(_.jsx)("span", {
                                                className: "mr-2",
                                                children: " "
                                            }), Object(_.jsx)("span", {
                                                children: "Best Rate Swap"
                                            })]
                                        })
                                    }), Object(_.jsx)("a", {
                                        href: "https://".concat("", "liquidity.wardenswap.finance").concat(N),
                                        children: Object(_.jsxs)("span", {
                                            className: "flex items-center p-4 hover:bg-indigo-500 hover:text-white text-primary",
                                            children: [Object(_.jsx)("span", {
                                                className: "mr-2",
                                                children: " "
                                            }), Object(_.jsx)("span", {
                                                children: "Liquidity"
                                            })]
                                        })
                                    }), Object(_.jsx)("a", {
                                        href: "/#farm",
                                        children: Object(_.jsxs)("span", {
                                            className: "flex items-center p-4 hover:bg-indigo-500 hover:text-white text-primary",
                                            children: [Object(_.jsx)("span", {
                                                className: "mr-2",
                                                children: " "
                                            }), Object(_.jsx)("span", {
                                                children: "Farms"
                                            })]
                                        })
                                    }), Object(_.jsx)("a", {
                                        href: "/",
                                        children: Object(_.jsxs)("span", {
                                            className: "flex items-center p-4 hover:bg-indigo-500 hover:text-white text-primary",
                                            children: [Object(_.jsx)("span", {
                                                className: "mr-2",
                                                children: " "
                                            }), Object(_.jsx)("span", {
                                                children: "Info"
                                            })]
                                        })
                                    }), Object(_.jsx)("a", {
                                        href: "https://".concat("www", ".wardenswap.finance/nft"),
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: Object(_.jsxs)("span", {
                                            className: "flex items-center p-4 hover:bg-indigo-500 hover:text-white text-primary",
                                            children: [Object(_.jsx)("span", {
                                                className: "mr-2",
                                                children: " "
                                            }), Object(_.jsx)("span", {
                                                children: "NFT"
                                            })]
                                        })
                                    }), Object(_.jsx)(W.a, {
                                        styleOption: "flex-wrap mt-3 w-200px"
                                    })]
                                })]
                            })]
                        }), Object(_.jsx)(P, {
                            visible: u,
                            isMobile: !1,
                            modalPosition: "center",
                            onHide: function() {
                                return p(!1)
                            }
                        }), Object(_.jsx)(I.a, {
                            visible: O,
                            onHide: function() {
                                return f(!1)
                            }
                        })]
                    })
                }
        },
        959: function(e, t, c) {
            "use strict";
            c.d(t, "a", (function() {
                return u
            }));
            var n = c(35),
                s = c(0),
                a = c(882),
                i = c.n(a),
                r = c(58),
                o = c(53),
                l = c(960),
                d = c(962),
                j = c(961),
                b = (c(993), c(15)),
                m = function(e, t) {
                    if (e.length <= t) return e;
                    var c = t - "...".length,
                        n = Math.ceil(c / 2),
                        s = Math.floor(c / 2);
                    return e.substr(0, n) + "..." + e.substr(e.length - s)
                },
                u = function(e) {
                    var t = e.isCorrectNetwork,
                        c = e.sum,
                        u = e.balance,
                        p = Object(s.useState)(!1),
                        x = Object(n.a)(p, 2),
                        h = x[0],
                        O = x[1],
                        f = Object(s.useState)(!1),
                        g = Object(n.a)(f, 2),
                        v = g[0],
                        w = g[1],
                        N = Object(r.c)().account,
                        k = Object(o.j)().spaceMode;
                    return Object(b.jsxs)("div", {
                        className: "hidden md-max:block",
                        children: [Object(b.jsx)(l.a, {
                            visible: h,
                            isMobile: !0,
                            modalPosition: "bottom",
                            onHide: function() {
                                return O(!1)
                            }
                        }), Object(b.jsx)(d.a, {
                            visible: h,
                            onHide: function() {
                                return O(!1)
                            }
                        }), N && Object(b.jsx)(j.a, {
                            visible: v,
                            isMobile: !0,
                            modalPosition: "bottom",
                            onHide: function() {
                                return w(!1)
                            },
                            sum: c,
                            balance: u
                        }), N ? Object(b.jsxs)("button", {
                            type: "button",
                            className: "btn-container-mobile wallet-account display-only-mobile",
                            onClick: function() {
                                return w(!0)
                            },
                            children: [Object(b.jsxs)("div", {
                                className: "flex items-center",
                                children: [Object(b.jsx)(i.a, {
                                    diameter: 40,
                                    seed: Object(a.jsNumberForAddress)(N)
                                }), Object(b.jsx)("span", {
                                    className: "ml-3",
                                    style: {
                                        color: "var(--color-text-6)"
                                    },
                                    children: m(N, 13)
                                })]
                            }), Object(b.jsx)("img", {
                                src: "/images/icon-shape".concat(k ? "-space" : "", ".svg"),
                                className: "transform rotate-180",
                                alt: "icon"
                            })]
                        }) : Object(b.jsx)("button", {
                            type: "button",
                            className: "display-only-mobile btn-container-mobile connect-wallet",
                            onClick: function() {
                                return O(!0)
                            },
                            children: "Connect Wallet"
                        }), !t && Object(b.jsxs)("button", {
                            type: "button",
                            className: "display-only-mobile btn-container-mobile wrong-network",
                            children: [Object(b.jsx)("img", {
                                src: "/images/icon-wrong-network.svg",
                                alt: "wrong-network"
                            }), Object(b.jsx)("span", {
                                children: "Wrong Network"
                            })]
                        })]
                    })
                }
        },
        960: function(e, t, c) {
            "use strict";
            c.d(t, "a", (function() {
                return r
            }));
            c(0);
            var n, s = c(865),
                a = c(232),
                i = (c(982), c(15));
            ! function(e) {
                e.Injected = "injected", e.WalletConnect = "walletconnect", e.BSC = "bsc"
            }(n || (n = {}));
            var r = function(e) {
                var t = e.visible,
                    c = e.modalPosition,
                    r = e.isMobile,
                    o = e.onHide,
                    l = Object(a.a)().login,
                    d = function(e) {
                        l(e), window.localStorage.setItem("connectorId", e), o()
                    };
                return Object(i.jsx)("div", {
                    id: "connection-wallet-modal",
                    children: Object(i.jsx)(s.Dialog, {
                        header: "Connect Wallet",
                        visible: t,
                        className: "wallet-modal-desktop ".concat(r ? "wallet-modal-mobile" : ""),
                        position: c,
                        dismissableMask: !0,
                        onHide: o,
                        children: Object(i.jsxs)("div", {
                            className: "grid grid-flow-row auto-rows-max gap-4",
                            children: [!r && Object(i.jsxs)("div", {
                                role: "presentation",
                                onClick: function() {
                                    return d(n.BSC)
                                },
                                className: "border-2 rounded-lg text-left p-3 w-full grid grid-cols-6 cursor-pointer wallet-btn",
                                style: {
                                    border: "2px solid"
                                },
                                children: [Object(i.jsx)("div", {
                                    className: "col-start-1 ...",
                                    children: Object(i.jsx)("img", {
                                        src: "/images/icon-bsc.svg",
                                        style: {
                                            width: "30px"
                                        },
                                        alt: "icon"
                                    })
                                }), Object(i.jsx)("div", {
                                    className: "col-span-4 ... font-medium",
                                    children: "Binance Chain Wallet"
                                })]
                            }), r ? Object(i.jsxs)("div", {
                                role: "presentation",
                                onClick: function() {
                                    return d(n.WalletConnect)
                                },
                                className: "border-2 rounded-lg text-left p-3 w-full grid grid-cols-6 cursor-pointer wallet-btn",
                                style: {
                                    border: "2px solid"
                                },
                                children: [Object(i.jsx)("div", {
                                    className: "col-start-1 ...",
                                    children: Object(i.jsx)("img", {
                                        src: "/images/icon-metamask.svg",
                                        style: {
                                            width: "30px"
                                        },
                                        alt: "icon"
                                    })
                                }), Object(i.jsx)("div", {
                                    className: "col-span-4 ... font-medium",
                                    children: "MetaMask"
                                })]
                            }) : Object(i.jsxs)("div", {
                                role: "presentation",
                                onClick: function() {
                                    return d(n.Injected)
                                },
                                className: "border-2 rounded-lg text-left p-3 w-full grid grid-cols-6 cursor-pointer wallet-btn",
                                style: {
                                    border: "2px solid"
                                },
                                children: [Object(i.jsx)("div", {
                                    className: "col-start-1 ...",
                                    children: Object(i.jsx)("img", {
                                        src: "/images/icon-metamask.svg",
                                        style: {
                                            width: "30px"
                                        },
                                        alt: "icon"
                                    })
                                }), Object(i.jsx)("div", {
                                    className: "col-span-4 ... font-medium",
                                    children: "MetaMask"
                                })]
                            }), Object(i.jsxs)("div", {
                                role: "presentation",
                                onClick: function() {
                                    return d(n.WalletConnect)
                                },
                                className: "border-2 rounded-lg text-left p-3 w-full grid grid-cols-6 cursor-pointer wallet-btn",
                                style: {
                                    border: "2px solid"
                                },
                                children: [Object(i.jsx)("div", {
                                    className: "col-start-1 ...",
                                    children: Object(i.jsx)("img", {
                                        src: "/images/icon-walletconnect.svg",
                                        style: {
                                            width: "30px"
                                        },
                                        alt: "icon"
                                    })
                                }), Object(i.jsx)("div", {
                                    className: "col-span-4 ... font-medium",
                                    children: "WalletConnect"
                                })]
                            }), Object(i.jsxs)("div", {
                                role: "presentation",
                                onClick: function() {
                                    return d(n.WalletConnect)
                                },
                                className: "border-2 rounded-lg text-left p-3 w-full grid grid-cols-6 cursor-pointer wallet-btn",
                                style: {
                                    border: "2px solid"
                                },
                                children: [Object(i.jsx)("div", {
                                    className: "col-start-1 ...",
                                    children: Object(i.jsx)("img", {
                                        src: "/images/icon-trust-wallet.svg",
                                        style: {
                                            width: "30px"
                                        },
                                        alt: "icon"
                                    })
                                }), Object(i.jsx)("div", {
                                    className: "col-span-4 ... font-medium",
                                    children: "Trust Wallet"
                                })]
                            })]
                        })
                    })
                })
            }
        },
        961: function(e, t, c) {
            "use strict";
            c.d(t, "a", (function() {
                return p
            }));
            c(0);
            var n, s = c(865),
                a = c(983),
                i = c(987),
                r = c(908),
                o = c(53),
                l = c(882),
                d = c.n(l),
                j = c(58),
                b = c(232),
                m = (c(989), c(15));
            ! function(e) {
                e.injected = "MetaMask", e.walletconnect = "Wallet Connect", e.bsc = "Binance Chain Wallet"
            }(n || (n = {}));
            var u = function(e, t) {
                    if (e.length <= t) return e;
                    var c = t - "...".length,
                        n = Math.ceil(c / 2),
                        s = Math.floor(c / 2);
                    return e.substr(0, n) + "..." + e.substr(e.length - s)
                },
                p = function(e) {
                    var t = e.visible,
                        c = e.modalPosition,
                        p = e.isMobile,
                        x = e.onHide,
                        h = e.sum,
                        O = e.balance,
                        f = Object(b.a)().logout,
                        g = Object(j.c)().account,
                        v = window.localStorage.getItem("connectorId"),
                        w = Object(o.g)(),
                        N = Object(o.j)().spaceMode;
                    return Object(m.jsxs)(s.Dialog, {
                        header: "Your Account",
                        visible: t,
                        className: "user-wallet-modal-desktop ".concat(p ? "user-wallet-modal-mobile" : ""),
                        position: c,
                        dismissableMask: !0,
                        rtl: !0,
                        onHide: x,
                        children: [Object(m.jsx)("p", {
                            className: "mt-1"
                        }), Object(m.jsxs)("div", {
                            className: "flex flex-col items-center space-y-8 md-max:space-y-2 h-full",
                            children: [Object(m.jsx)("div", {
                                className: "wallet-box",
                                children: Object(m.jsxs)("div", {
                                    className: "flex flex-col items-center space-y-1",
                                    children: [Object(m.jsxs)("div", {
                                        className: "flex flex-row md-max:flex-col items-center",
                                        children: [Object(m.jsx)(d.a, {
                                            diameter: 40,
                                            seed: Object(l.jsNumberForAddress)(g)
                                        }), Object(m.jsxs)("div", {
                                            className: "ml-3 md-max:ml-0 flex flex-col wallet-detail",
                                            children: [Object(m.jsxs)("span", {
                                                className: "wallet-detail--connected",
                                                children: [n[v], " Connected"]
                                            }), Object(m.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [Object(m.jsx)("span", {
                                                    className: "pr-0.5 wallet-detail--address",
                                                    children: u(g, 13)
                                                }), Object(m.jsx)(a.Button, {
                                                    className: "p-button p-component p-button-icon-only p-button-rounded p-button-text p-button-plain",
                                                    onClick: function() {
                                                        navigator.clipboard && navigator.clipboard.writeText(g)
                                                    },
                                                    children: Object(m.jsx)("img", {
                                                        src: "/images/icon-copy".concat(N ? "-space" : "", ".svg"),
                                                        alt: "copy"
                                                    })
                                                })]
                                            })]
                                        })]
                                    }), Object(m.jsxs)("div", {
                                        className: "flex space-x-2 items-center",
                                        children: [Object(m.jsxs)("button", {
                                            type: "button",
                                            className: "p-button p-component p-button-rounded p-button-text p-button-plain",
                                            onClick: function() {
                                                return window.open("https://bscscan.com/address/".concat(g), "_blank")
                                            },
                                            children: [Object(m.jsx)("img", {
                                                src: "images/icon-bsc-link".concat(N ? "-space" : "", ".svg"),
                                                alt: "icon"
                                            }), Object(m.jsx)("span", {
                                                className: "btn-text",
                                                children: "BSC Scan"
                                            })]
                                        }), Object(m.jsxs)("button", {
                                            type: "button",
                                            className: "p-button p-component p-button-rounded p-button-text p-button-plain",
                                            onClick: function() {
                                                f(), window.localStorage.removeItem("connectorId"), x()
                                            },
                                            children: [Object(m.jsx)("img", {
                                                src: "images/icon-disconnect".concat(N ? "-space" : "", ".svg"),
                                                alt: "icon"
                                            }), Object(m.jsx)("span", {
                                                className: "btn-text",
                                                children: "Disconnect"
                                            })]
                                        })]
                                    })]
                                })
                            }), Object(m.jsxs)("div", {
                                className: "wad-balance-wrap",
                                children: [Object(m.jsx)("img", {
                                    alt: "coin",
                                    src: "/images/icon-warden.svg",
                                    className: "w-50px"
                                }), h && O ? Object(m.jsxs)("span", {
                                    className: "text-primary font-bold text-30 md-max:text-23 pt-2 pb-4",
                                    children: [(h + O).toLocaleString(), " WAD"]
                                }) : 0 === h ? Object(m.jsxs)("span", {
                                    className: "text-primary font-bold text-30 md-max:text-23 pt-2 pb-4",
                                    children: [O.toLocaleString(), " WAD"]
                                }) : Object(m.jsx)(i.Skeleton, {
                                    width: "30%",
                                    height: "2rem",
                                    style: {
                                        margin: "20px"
                                    }
                                }), Object(m.jsxs)("div", {
                                    className: "flex justify-between text-15 font-medium text-primary mb-1 w-full",
                                    children: [Object(m.jsx)("div", {
                                        children: "Balance"
                                    }), O ? Object(m.jsxs)("div", {
                                        children: [O.toLocaleString(), " WAD"]
                                    }) : 0 === O ? Object(m.jsx)("div", {
                                        children: "0 WAD"
                                    }) : Object(m.jsx)(i.Skeleton, {
                                        "v-else": !0,
                                        width: "25%"
                                    })]
                                }), Object(m.jsxs)("div", {
                                    className: "flex justify-between text-15 font-medium text-primary mb-1 w-full",
                                    children: [Object(m.jsx)("span", {
                                        children: "Unclaimed"
                                    }), h ? Object(m.jsxs)("span", {
                                        children: [h.toLocaleString(), " WAD"]
                                    }) : 0 === h ? Object(m.jsx)("span", {
                                        children: "0 WAD"
                                    }) : Object(m.jsx)(i.Skeleton, {
                                        "v-else": !0,
                                        width: "18%"
                                    })]
                                }), Object(m.jsx)("div", {
                                    className: "divider"
                                }), Object(m.jsxs)("div", {
                                    className: "flex justify-between text-15 font-medium text-primary mb-1 w-full",
                                    children: [Object(m.jsx)("div", {
                                        children: "WAD Price"
                                    }), w ? Object(m.jsxs)("div", {
                                        children: ["$ ", w.toFixed(3)]
                                    }) : Object(m.jsx)(i.Skeleton, {
                                        "v-else": !0,
                                        width: "18%"
                                    })]
                                }), Object(m.jsxs)("div", {
                                    role: "presentation",
                                    className: "flex text-15 font-medium text-primary mb-1 w-full",
                                    onClick: function() {
                                        return Object(r.a)("0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc", "WAD", 18, "https://image.wardenswap.finance/WAD-Token.png")
                                    },
                                    children: [Object(m.jsx)("span", {
                                        children: "Add WAD Token"
                                    }), Object(m.jsx)("img", {
                                        src: "/images/icon-add-wad-token.svg",
                                        className: "ml-2 mouse-pointer",
                                        alt: "wad token"
                                    })]
                                })]
                            })]
                        })]
                    })
                }
        },
        962: function(e, t, c) {
            "use strict";
            var n = c(4),
                s = c.n(n),
                a = c(12),
                i = c(35),
                r = c(0),
                o = c(20),
                l = c(992),
                d = c(865),
                j = c(53),
                b = c(909),
                m = c(58),
                u = function() {
                    return Object(m.c)()
                },
                p = c(232),
                x = (c(883), c(15));
            t.a = function(e) {
                var t = e.visible,
                    c = e.onHide,
                    n = Object(r.useState)(""),
                    m = Object(i.a)(n, 2),
                    h = m[0],
                    O = m[1],
                    f = u(),
                    g = !Object(o.p)().isXl,
                    v = window.localStorage.getItem("connectorId"),
                    w = Object(j.j)(),
                    N = w.spaceMode,
                    k = w.muteMode,
                    y = ("&t=".concat(N ? "1" : "0", "&s=").concat(k ? "1" : "0"), Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0,
                        FAST_REFRESH: !0,
                        REACT_APP_CHAIN_ID: "56",
                        REACT_APP_GTAG: "GTM-TLF66T4",
                        REACT_APP_NODE_1: "https://bsc-dataseed1.ninicoin.io",
                        REACT_APP_NODE_2: "https://bsc-dataseed1.defibit.io",
                        REACT_APP_NODE_3: "https://bsc-dataseed.binance.org",
                        REACT_APP_SUBGRAPH_PROFILE: "https://api.thegraph.com/subgraphs/name/pancakeswap/profile",
                        REACT_APP_ROLLBAR_POST_CLIENT_ITEM_TOKEN: "eeb81c2085af4257892e8a6b0b6726e6",
                        REACT_APP_ROLLBAR_ENV: "production"
                    }).REACT_APP_ENV, function() {
                        var e = Object(a.a)(s.a.mark((function e() {
                            var t, c, n, a;
                            return s.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, null === f || void 0 === f || null === (t = f.connector) || void 0 === t ? void 0 : t.getProvider();
                                    case 2:
                                        c = e.sent, n = Object(l.getProviderInfo)(c), a = n.name, O(a);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()),
                    _ = Object(p.a)().login;
                y();
                var C = [{
                    iconPath: "/images/icon-metamask.svg",
                    displayText: "MetaMask",
                    walletNameSupport: "MetaMask",
                    walletProvider: o.c.Injected
                }, {
                    iconPath: "/images/icon-walletconnect.svg",
                    displayText: "WalletConnect",
                    walletProvider: o.c.WalletConnect
                }, {
                    iconPath: "/images/icon-safepal.svg",
                    displayText: "SafePal",
                    walletNameSupport: "Web3",
                    walletProvider: o.c.Injected
                }, {
                    iconPath: "/images/icon-trust-wallet.svg",
                    displayText: "Trust Wallet",
                    walletNameSupport: "Trust",
                    walletProvider: o.c.Injected
                }];
                return Object(x.jsxs)(d.Dialog, {
                    header: "Select Network",
                    visible: t,
                    className: "select-network-modal-mobile",
                    position: g ? "bottom" : "center",
                    dismissableMask: !0,
                    onHide: c,
                    children: [Object(x.jsx)(b.a, {}), Object(x.jsx)("div", {
                        className: "divider mt-4"
                    }), Object(x.jsxs)("div", {
                        children: [Object(x.jsx)("p", {
                            className: "text-center text-15 font-medium my-4",
                            children: "Select Wallet"
                        }), Object(x.jsx)("div", {
                            className: "flex justify-evenly space-x-2",
                            children: C.map((function(e) {
                                return Object(x.jsxs)("div", {
                                    role: "presentation",
                                    onClick: function() {
                                        return t = e.walletProvider, _(t), void c();
                                        var t
                                    },
                                    className: "flex flex-col justify-center items-center space-y-2",
                                    children: [Object(x.jsxs)("div", {
                                        className: "icon-wallet-wrapper",
                                        children: [Object(x.jsx)("img", {
                                            src: e.iconPath,
                                            alt: "icon-wallet"
                                        }), Object(x.jsx)("img", {
                                            src: "/images/icon-check.svg",
                                            alt: "icon-check",
                                            className: "w-20px absolute icon-check-walet-position icon-check-display\n                        ".concat(v !== e.walletProvider || e.walletNameSupport && e.walletNameSupport !== h ? "" : "visible", "\n                      ")
                                        })]
                                    }), Object(x.jsx)("div", {
                                        className: "text-11 font-medium",
                                        children: e.displayText
                                    })]
                                })
                            }))
                        })]
                    })]
                })
            }
        },
        982: function(e, t, c) {},
        989: function(e, t, c) {},
        990: function(e, t, c) {},
        991: function(e, t, c) {},
        993: function(e, t, c) {}
    }
]);
//# sourceMappingURL=1.e8b655cb.chunk.js.map