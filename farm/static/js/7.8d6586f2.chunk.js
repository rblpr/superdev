(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [7], {
        1010: function(t, e, n) {},
        1126: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", (function() {
                return Vr
            }));
            var r, i = n(50),
                a = n(13),
                c = n(35),
                o = n(0),
                s = n.n(o),
                l = n(165),
                d = n(14),
                u = n.n(d),
                b = n(880),
                p = n(22),
                x = n(36),
                j = n(30),
                f = n(53),
                m = n(58),
                h = n(74),
                g = n(997),
                O = (n(68), n(904)),
                v = n(4),
                w = n.n(v),
                y = n(12),
                k = n(857),
                C = n(18),
                S = [{
                    id: 1,
                    name: "farm",
                    translationId: 999,
                    sortable: !0,
                    label: ""
                }, {
                    id: 2,
                    name: "platform",
                    translationId: 999,
                    sortable: !0,
                    label: "Fees earned (yr.)"
                }, {
                    id: 3,
                    name: "earned",
                    translationId: 1072,
                    sortable: !0,
                    label: "Earned"
                }, {
                    id: 4,
                    name: "dayTradeVolume",
                    translationId: 999,
                    sortable: !0,
                    label: "Volume 24H"
                }, {
                    id: 5,
                    name: "liquidity",
                    translationId: 999,
                    sortable: !0,
                    label: "TVL"
                }, {
                    id: 6,
                    name: "details",
                    translationId: 999,
                    sortable: !0,
                    label: ""
                }],
                T = [{
                    id: 1,
                    name: "farm",
                    translationId: 999,
                    sortable: !0,
                    label: "LP Tokens Name"
                }, {
                    id: 2,
                    name: "earned",
                    translationId: 1072,
                    sortable: !0,
                    label: "Earned"
                }, {
                    id: 3,
                    name: "platform",
                    translationId: 999,
                    sortable: !0,
                    label: "Fees earned (yr.)"
                }, {
                    id: 5,
                    name: "dayTradeVolume",
                    translationId: 999,
                    sortable: !0,
                    label: "Volume 24H"
                }, {
                    id: 6,
                    name: "liquidity",
                    translationId: 999,
                    sortable: !0,
                    label: "TVL"
                }, {
                    id: 6,
                    name: "details",
                    translationId: 999,
                    sortable: !1,
                    label: "Detail"
                }];
            ! function(t) {
                t.TABLE = "TABLE", t.CARD = "CARD"
            }(r || (r = {}));
            var A, Q, z, N, L, F, H, q, V, E, P, I, D, B, M, W, _, U, K, R, Z, X, J, $, G, Y, tt, et, nt = n(70),
                rt = n(6),
                it = n(20),
                at = n(15),
                ct = rt.d.div(A || (A = Object(nt.a)(["\n\tbackground: var(--color-background-tooltip);\n\tpadding: 16px;\n\tborder-radius: 16px;\n\tcolor: #ffffff;\n\twidth: max-content;\n\tdisplay: none;\n\tpadding: 16px;\n\tmax-height: 500px;\n\tz-index: ", ";\n\tposition: absolute;\n\tbottom: calc(100% + 16px);\n\ttransform: translate(34px, 0);\n\tright: 0;\n\tmax-width: 246px;\n\n\t&:after {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\twidth: 0;\n\t\theight: 0;\n\t\tborder-left: 10px solid transparent;\n\t\tborder-right: 10px solid transparent;\n\t\tborder-top: 10px solid ", ";\n\t\tbottom: 0;\n\t\tposition: absolute;\n\t\ttransform: translate(-34px, 9px);\n\t\tright: 0;\n\t}\n"])), (function(t) {
                    return t.theme.zIndices.modal
                }), (function(t) {
                    return t.theme.tooltip.background
                })),
                ot = rt.d.div(Q || (Q = Object(nt.a)(["\n\tposition: relative;\n\tdisplay: inline-block;\n\t&:hover ", ", &:focus-within ", " {\n\t\tdisplay: block;\n\t}\n"])), ct, ct),
                st = function(t) {
                    var e = t.content,
                        n = t.children;
                    return Object(at.jsxs)(ot, {
                        children: [n, Object(at.jsx)(ct, {
                            children: e
                        })]
                    })
                },
                lt = n(230),
                dt = rt.d.img(z || (z = Object(nt.a)(["\n\twidth: 15px;\n\theight: 15px;\n\n\t", " {\n\t\twidth: 33px;\n\t\theight: 33px;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.lg
                })),
                ut = rt.d.img(N || (N = Object(nt.a)(["\n\twidth: 15px;\n\theight: 15px;\n\tleft: 4px;\n\tposition: absolute;\n\ttop: 15;\n\tz-index: 10;\n\n\t", " {\n\t\twidth: 33px;\n\t\theight: 33px;\n\t\tleft: 6px;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.lg
                })),
                bt = rt.d.div(L || (L = Object(nt.a)(["\n\tposition: relative;\n\tdisplay: inline-flex;\n\tflex-direction: column;\n\talign-items: center;\n\tvertical-align: middle;\n\t@media (max-width: 575px) {\n\t\tflex-direction: row;\n\t}\n"]))),
                pt = rt.d.div(F || (F = Object(nt.a)(["\n\tposition: relative;\n\tpadding-left: 16px;\n\tdisplay: flex;\n\talign-items: center;\n\tvertical-align: middle;\n\n\t", " {\n\t\tpadding-left: 32px;\n\t}\n\n\t@media (max-width: 768px) {\n\t\talign-items: left;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.lg
                })),
                xt = rt.d.p(H || (H = Object(nt.a)(["\n\tcolor: var(--color-text-2);\n\tfont-size: 12px;\n\tfont-weight: 500;\n\n\t", " {\n\t\tfont-size: 14px;\n\t\tfont-weight: 700;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.lg
                })),
                jt = rt.d.div(q || (q = Object(nt.a)(["\n\twidth: 70px;\n\theight: 30px;\n\tbackground: #838386;\n\tpadding-left: 7px;\n\tpadding-right: 7px;\n\tborder-radius: 11px;\n\tcolor: #fff;\n\tfont-weight: bold;\n\tfont-size: 13px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin-left: 52px;\n\n\t@media (max-width: 768px) {\n\t\tfont-size: 12px;\n\t\twidth: 65px;\n\t\theight: 25px;\n\t\tmargin-left: 12px;\n\t}\n\n\t@media (max-width: 575px) {\n\t\tmargin-left: 28px;\n\t}\n"]))),
                ft = (rt.d.div(V || (V = Object(nt.a)(["\n\twidth: 40px;\n\theight: 30px;\n\tcolor: #fff;\n\tfont-weight: bold;\n\tfont-size: 13px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin-left: 15px;\n"]))), rt.d.div(E || (E = Object(nt.a)(["\n\tposition: relative;\n\ttext-align: center;\n\tmargin-left: 6px;\n"]))), rt.d.div(P || (P = Object(nt.a)(["\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tfont-size: 13px;\n\tfont-weight: bold;\n\tcolor: #ffff\n"]))), function(t) {
                    var e = t.label,
                        n = t.pid,
                        r = (t.multiplier, Object(f.a)(n).stakedBalance),
                        i = (Object(lt.a)(), Object(k.a)(r), e.split("-")),
                        a = !e.includes("-"),
                        c = a ? "".concat(e) : "".concat(e, " LP");
                    return Object(at.jsxs)(bt, {
                        children: [Object(at.jsxs)(pt, {
                            children: [i.map((function(t, e) {
                                return 0 === e ? Object(at.jsx)(ut, {
                                    src: "/images/farms/".concat(t, ".png"),
                                    alt: "icon",
                                    width: 33,
                                    height: 33
                                }) : Object(at.jsx)(dt, {
                                    src: "/images/farms/".concat(t, ".png"),
                                    alt: "icon",
                                    width: 33,
                                    height: 33
                                })
                            })), Object(at.jsx)("div", {
                                style: {
                                    marginLeft: a ? "18px" : "8px"
                                },
                                children: Object(at.jsx)(xt, {
                                    children: c
                                })
                            })]
                        }), "BNB-BIDR" === e ? Object(at.jsx)(jt, {
                            children: "Inactive"
                        }) : null]
                    })
                }),
                mt = rt.d.div(I || (I = Object(nt.a)(["\n\tdisplay: block;\n\tfont-weight: 500;\n\tfont-size: 10px;\n\tline-height: 11px;\n\tcolor: var(--color-text-5);\n\tmargin-bottom: 5px;\n\ttext-align: center;\n\n\t", " {\n\t\tdisplay: none;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.sm
                })),
                ht = rt.d.div(D || (D = Object(nt.a)(["\n\tcolor: ", ";\n\tfont-size: 14px;\n\tdisplay: block;\n\talign-items: center;\n\ttext-align: center;\n\n\t", " {\n\t\tcolor: ", ";\n\t}\n"])), (function(t) {
                    return t.earned ? "var(--color-text-2)" : "var(--color-text-3)"
                }), (function(t) {
                    return t.theme.mediaQueries.lg
                }), (function(t) {
                    return t.earned ? "var(--color-text-2)" : "var(--color-text-3)"
                })),
                gt = function(t) {
                    var e = t.earnings,
                        n = null !== e ? e.toLocaleString() : "0";
                    return Object(at.jsxs)(at.Fragment, {
                        children: [Object(at.jsx)(mt, {
                            children: "Earn"
                        }), Object(at.jsx)(ht, {
                            earned: e,
                            children: n
                        })]
                    })
                },
                Ot = rt.d.div(B || (B = Object(nt.a)(["\n\tdisplay: flex;\n\twidth: 100%;\n\tjustify-content: flex-end;\n\tpadding-right: 8px;\n\tcolor: var(--color-text);\n\tfont-size: 14px;\n\n\t", " {\n\t\tpadding-right: 0px;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.sm
                })),
                vt = Object(rt.d)(it.b)(M || (M = Object(nt.a)(["\n\ttransform: ", ";\n\theight: 16px;\n\n\t", " {\n\t\theight: 25px;\n\t\twidth: 30px;\n\t}\n\n\t", " {\n\t\theight: 25px;\n\t\twidth: 30px;\n\t}\n\n\t", " {\n\t\theight: 16px;\n\t}\n"])), (function(t) {
                    return t.toggled ? "rotate(180deg)" : "rotate(0)"
                }), (function(t) {
                    return t.theme.mediaQueries.xs
                }), (function(t) {
                    return t.theme.mediaQueries.sm
                }), (function(t) {
                    return t.theme.mediaQueries.lg
                })),
                wt = function(t) {
                    var e = t.actionPanelToggled,
                        n = !Object(it.p)().isXl;
                    return Object(at.jsxs)(Ot, {
                        children: [!n && "Info", Object(at.jsx)(vt, {
                            color: "var(--color-text)",
                            toggled: e
                        })]
                    })
                },
                yt = rt.d.div(W || (W = Object(nt.a)(["\n\tcolor: ", ";\n\twidth: 36px;\n\ttext-align: right;\n\n\t", " {\n\t\ttext-align: left;\n\t}\n"])), (function(t) {
                    return t.theme.colors.text
                }), (function(t) {
                    return t.theme.mediaQueries.sm
                })),
                kt = rt.d.div(_ || (_ = Object(nt.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\n\tsvg {\n\t\tmargin-left: 14px;\n\t}\n\n\t", " {\n\t\tsvg {\n\t\t\tmargin-left: 0;\n\t\t}\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.sm
                })),
                Ct = function(t) {
                    var e = t.multiplier,
                        n = e ? e.toLowerCase() : "-",
                        r = Object(lt.a)();
                    return Object(at.jsxs)(kt, {
                        children: [Object(at.jsx)(yt, {
                            children: n
                        }), Object(at.jsx)(st, {
                            content: Object(at.jsxs)("div", {
                                children: [r(999, "The multiplier represents the amount of CAKE rewards each farm gets."), Object(at.jsx)("br", {}), Object(at.jsx)("br", {}), r(999, "For example, if a 1x farm was getting 1 CAKE per block, a 40x farm would be getting 40 CAKE per block.")]
                            }),
                            children: Object(at.jsx)(it.f, {
                                color: "textSubtle"
                            })
                        })]
                    })
                },
                St = rt.d.p(U || (U = Object(nt.a)(["\n\tfont-weight: 500;\n\tfont-size: 10px;\n\tcolor: var(--color-text-2);\n\tmargin-right: 5px;\n\ttext-align: center;\n\n\t", " {\n\t\tfont-size: 10px;\n\t}\n\n\t", " {\n\t\tfont-size: 10px;\n\t}\n\n\t", " {\n\t\tfont-size: 14px;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.xs
                }), (function(t) {
                    return t.theme.mediaQueries.sm
                }), (function(t) {
                    return t.theme.mediaQueries.lg
                })),
                Tt = rt.d.div(K || (K = Object(nt.a)(["\n\tmin-width: 110px;\n\tfont-weight: 600;\n\ttext-align: center;\n\n\t", " {\n\t\ttext-align: center;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.sm
                })),
                At = rt.d.div(R || (R = Object(nt.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\ttext-align: center;\n\n\tsvg {\n\t\tmargin-left: 14px;\n\t}\n\n\t", " {\n\t\tsvg {\n\t\t\tmargin-left: 0;\n\t\t}\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.sm
                })),
                Qt = function(t) {
                    var e = t.liquidity,
                        n = e ? "$".concat(Number(e).toLocaleString(void 0, {
                            maximumFractionDigits: 0
                        })) : "-";
                    return Object(at.jsx)(At, {
                        children: Object(at.jsx)(Tt, {
                            children: Object(at.jsx)(St, {
                                children: n
                            })
                        })
                    })
                },
                zt = rt.d.div(Z || (Z = Object(nt.a)(["\n\tposition: relative;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tvertical-align: middle;\n\n"]))),
                Nt = rt.d.p(X || (X = Object(nt.a)(["\n\tdisplay: block;\n\ttext-align: center;\n\tfont-weight: 500;\n\tfont-size: 10px;\n\tcolor: var(--color-text-5);\n\tmargin-right: 5px;\n\n\t", " {\n\t\tdisplay: none;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.sm
                })),
                Lt = rt.d.div(J || (J = Object(nt.a)(["\n\tdisplay: inline-block;\n\tposition: relative;\n\tmargin-left: 8px;\n\twidth: 16px;\n\theight: auto;\n\ttop: 3px;\n\n\t", " {\n\t\tdisplay: none;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.sm
                })),
                Ft = rt.d.div($ || ($ = Object(nt.a)(["\n\tfont-size: 20px;\n\tfont-weight: bold;\n\tcolor: var(--color-text-8);\n\n\t", " {\n\t\tfont-size: 12px;\n\t}\n\n\t", " {\n\t\tfont-size: 15px;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.xs
                }), (function(t) {
                    return t.theme.mediaQueries.md
                })),
                Ht = function(t) {
                    var e = t.percentageFee;
                    return Object(at.jsx)(zt, {
                        children: void 0 !== e ? Object(at.jsxs)(zt, {
                            children: [Object(at.jsx)(Nt, {
                                children: "Fees earned (yr.)"
                            }), Object(at.jsxs)(Ft, {
                                children: [e, "%"]
                            }), Object(at.jsx)(Lt, {
                                children: Object(at.jsx)(st, {
                                    content: Object(at.jsx)("div", {
                                        children: "Annualized earning base on 24hr trading volume"
                                    }),
                                    children: Object(at.jsx)("img", {
                                        src: "/images/icon-info.svg",
                                        alt: "icon-info"
                                    })
                                })
                            })]
                        }) : null
                    })
                },
                qt = rt.d.span(G || (G = Object(nt.a)(["\n\tfont-weight: 500;\n\tfont-size: 10px;\n\tcolor: var(--color-text-2);\n\tmargin-right: 5px;\n\ttext-align: center;\n\n\t", " {\n\t\tfont-size: 10px;\n\t}\n\n\t", " {\n\t\tfont-size: 10px;\n\t}\n\n\t", " {\n\t\tfont-size: 14px;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.xs
                }), (function(t) {
                    return t.theme.mediaQueries.sm
                }), (function(t) {
                    return t.theme.mediaQueries.lg
                })),
                Vt = rt.d.span(Y || (Y = Object(nt.a)(["\n\tdisplay: block;\n\ttext-align: center;\n\tfont-weight: 500;\n\tfont-size: 10px;\n\tcolor: var(--color-text-5);\n\tmargin-right: 5px;\n\n\t", " {\n\t\tdisplay: none;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.sm
                })),
                Et = (rt.d.div(tt || (tt = Object(nt.a)(["\n\tdisplay: inline-block;\n\tmin-width: 110px;\n\tfont-weight: 600;\n\ttext-align: center;\n\n\t", " {\n\t\ttext-align: center;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.sm
                })), rt.d.div(et || (et = Object(nt.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\ttext-align: center;\n\n\tsvg {\n\t\tmargin-left: 14px;\n\t}\n\n\t", " {\n\t\tsvg {\n\t\t\tmargin-left: 0;\n\t\t}\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.sm
                }))),
                Pt = function(t) {
                    var e = t.dayTradeVolume,
                        n = e ? "$".concat(new u.a(e).toFormat(2)) : "";
                    return Object(at.jsx)("div", {
                        children: void 0 !== e ? Object(at.jsxs)(Et, {
                            children: [Object(at.jsx)(Vt, {
                                children: "Volume 24H"
                            }), Object(at.jsx)(qt, {
                                children: n
                            })]
                        }) : null
                    })
                },
                It = function(t) {
                    var e, n = t.quoteTokenAdresses,
                        r = t.tokenAddresses;
                    e = n[56] === Object(C.m)() ? "ETH" : n[56];
                    var i = r[56];
                    return "".concat(e, "/").concat(i)
                },
                Dt = function(t) {
                    var e, n = t.quoteTokenAdresses,
                        r = t.tokenAddresses;
                    e = n[56] === Object(C.m)() ? "BNB" : n[56];
                    var i = r[56];
                    return "".concat(e, "/").concat(i)
                },
                Bt = n(341),
                Mt = n(957),
                Wt = function() {
                    var t = Object(y.a)(w.a.mark((function t(e, n, r) {
                        return w.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", e.methods.approve(n.options.address, Mt.a.constants.MaxUint256).send({
                                        from: r
                                    }));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e, n, r) {
                        return t.apply(this, arguments)
                    }
                }(),
                _t = function() {
                    var t = Object(y.a)(w.a.mark((function t(e, n, r, i) {
                        return w.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (0 !== n) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return", e.methods.enterStaking(new u.a(r).times(new u.a(10).pow(18)).toString()).send({
                                        from: i,
                                        gas: 2e5
                                    }).on("transactionHash", (function(t) {
                                        return t.transactionHash
                                    })));
                                case 2:
                                    return t.abrupt("return", e.methods.deposit(n, new u.a(r).times(new u.a(10).pow(18)).toString()).send({
                                        from: i,
                                        gas: 2e5
                                    }).on("transactionHash", (function(t) {
                                        return t.transactionHash
                                    })));
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e, n, r, i) {
                        return t.apply(this, arguments)
                    }
                }(),
                Ut = function() {
                    var t = Object(y.a)(w.a.mark((function t(e, n, r, i) {
                        return w.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (0 !== n) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return", e.methods.leaveStaking(new u.a(r).times(new u.a(10).pow(18)).toString()).send({
                                        from: i,
                                        gas: 2e5
                                    }).on("transactionHash", (function(t) {
                                        return t.transactionHash
                                    })));
                                case 2:
                                    return t.abrupt("return", e.methods.withdraw(n, new u.a(r).times(new u.a(10).pow(18)).toString()).send({
                                        from: i,
                                        gas: 2e5
                                    }).on("transactionHash", (function(t) {
                                        return t.transactionHash
                                    })));
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e, n, r, i) {
                        return t.apply(this, arguments)
                    }
                }(),
                Kt = function() {
                    var t = Object(y.a)(w.a.mark((function t(e, n, r) {
                        return w.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (0 !== n) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return", e.methods.leaveStaking("0").send({
                                        from: r,
                                        gas: 2e5
                                    }).on("transactionHash", (function(t) {
                                        return t.transactionHash
                                    })));
                                case 2:
                                    return t.abrupt("return", e.methods.deposit(n, "0").send({
                                        from: r,
                                        gas: 2e5
                                    }).on("transactionHash", (function(t) {
                                        return t.transactionHash
                                    })));
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e, n, r) {
                        return t.apply(this, arguments)
                    }
                }(),
                Rt = n(879),
                Zt = n(82),
                Xt = function() {
                    var t = Object(Rt.a)();
                    return Object(o.useMemo)((function() {
                        return Object(Zt.h)(t)
                    }), [t])
                },
                Jt = n(1009),
                $t = new(n.n(Jt).a)({
                    accessToken: "eeb81c2085af4257892e8a6b0b6726e6",
                    environment: "production"
                });

            function Gt(t, e, n) {
                try {
                    var r = [];
                    e && r.push(e), n && r.push(n), $t[t].apply($t, r)
                } catch (i) {
                    console.log("rollbar error")
                }
            }
            var Yt, te, ee, ne, re, ie, ae, ce, oe, se, le, de, ue, be, pe, xe, je, fe, me = n(62),
                he = n(911),
                ge = rt.d.div(Yt || (Yt = Object(nt.a)(["\n\twidth: 180px;\n\theight: 45px;\n\tbackground: var(--color-background-4);\n\tborder-radius: 15px;\n\tcolor: #bdbdbd;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin: 15px auto;\n\tcursor: pointer;\n"]))),
                Oe = rt.d.div(te || (te = Object(nt.a)(["\n\twidth: 180px;\n\theight: 45px;\n\tbackground: #82affb;\n\tborder-radius: 15px;\n\tcolor: #fff;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin: 15px auto;\n\tcursor: pointer;\n"]))),
                ve = rt.d.div(ee || (ee = Object(nt.a)(["\n\t", " {\n\t\tborder: 1px solid var(--color-border-2);\n\t\tborder-radius: 30px;\n\t\tmargin: 30px;\n\t}\n\n\t", " {\n\t\tborder: 1px solid var(--color-border-2);\n\t\tborder-radius: 30px;\n\t\tmargin: 30px;\n\t}\n\n\t", " {\n\t\tborder: 0;\n\t\tborder-radius: 0;\n\t\tmargin: 0;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.xs
                }), (function(t) {
                    return t.theme.mediaQueries.sm
                }), (function(t) {
                    return t.theme.mediaQueries.lg
                })),
                we = rt.d.div(ne || (ne = Object(nt.a)(["\n\tfont-size: 13px;\n\tbackground: transparent;\n\twidth: 100%;\n\tpadding: 10px 0;\n\ttext-align: center;\n\tborder-right: 0;\n\tcolor: var(--color-text);\n\n\t", " {\n\t\tbackground: var(--color-background-8);\n\t\tborder-right: 1px solid var(--color-border-5);\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.lg
                })),
                ye = rt.d.div(re || (re = Object(nt.a)(["\n\tmin-height: auto;\n\twidth: 100%;\n\tpadding: 30px 25px;\n\tborder-right: 0;\n\ttext-align: center;\n\n\t", " {\n\t\tborder-right: 1px solid var(--color-border-5);\n\t\tmin-height: 200px;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.lg
                })),
                ke = function(t) {
                    var e = t.pid,
                        n = t.userData,
                        r = n ? new u.a(n.earnings) : null,
                        i = Object(f.g)(),
                        s = null,
                        l = 0,
                        d = "0";
                    r && (s = Object(k.a)(r), l = new u.a(s).multipliedBy(i).toNumber(), d = s.toLocaleString());
                    var b = Object(o.useState)(!1),
                        p = Object(c.a)(b, 2),
                        x = p[0],
                        g = p[1],
                        O = Object(m.c)().account,
                        v = function(t) {
                            var e = Object(j.b)(),
                                n = Object(m.c)().account,
                                r = Xt();
                            return {
                                onReward: Object(o.useCallback)(Object(y.a)(w.a.mark((function i() {
                                    var c, o, s;
                                    return w.a.wrap((function(i) {
                                        for (;;) switch (i.prev = i.next) {
                                            case 0:
                                                return c = me.a.find((function(e) {
                                                    return e.pid === t
                                                })), o = Object.assign({}, {
                                                    senderAddress: n
                                                }, c ? {
                                                    lpSymbol: c.lpSymbol,
                                                    lpAddress: c.lpAddresses[56]
                                                } : null), i.prev = 2, i.next = 5, Kt(r, t, n);
                                            case 5:
                                                return s = i.sent, e(Object(h.b)(n)), Gt("info", "Harvest success", o), i.abrupt("return", s);
                                            case 11:
                                                return i.prev = 11, i.t0 = i.catch(2), 4001 !== (null === i.t0 || void 0 === i.t0 ? void 0 : i.t0.code) && Gt("error", "Harvest failed", Object(a.a)(Object(a.a)(Object(a.a)({}, i.t0), o), {}, {
                                                    functionName: "useHarvest"
                                                })), i.abrupt("return", i.t0);
                                            case 15:
                                            case "end":
                                                return i.stop()
                                        }
                                    }), i, null, [
                                        [2, 11]
                                    ])
                                }))), [n, e, t, r])
                            }
                        }(e).onReward,
                        C = (Object(lt.a)(), Object(he.useCountUp)({
                            start: 0,
                            end: l,
                            duration: 1,
                            separator: ",",
                            decimals: 3
                        })),
                        S = C.countUp,
                        T = C.update,
                        A = Object(o.useRef)(T);
                    return Object(o.useEffect)((function() {
                        A.current(l)
                    }), [l, A]), Object(at.jsxs)(ve, {
                        children: [Object(at.jsx)(we, {
                            children: "WAD Earned"
                        }), Object(at.jsxs)(ye, {
                            children: [Object(at.jsx)("p", {
                                style: {
                                    color: "var(--color-text-2)",
                                    fontSize: "25px"
                                },
                                children: d
                            }), Object(at.jsxs)("p", {
                                style: {
                                    color: "var(--color-text-4)",
                                    fontSize: "12px",
                                    fontWeight: 400,
                                    marginTop: "5px"
                                },
                                children: ["(~ $", S, ")"]
                            }), s && !x && O ? Object(at.jsx)(Oe, {
                                onClick: Object(y.a)(w.a.mark((function t() {
                                    return w.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return g(!0), t.next = 3, v();
                                            case 3:
                                                g(!1);
                                            case 4:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                }))),
                                children: "Harvest"
                            }) : Object(at.jsx)(ge, {
                                children: "Harvest"
                            })]
                        })]
                    })
                },
                Ce = n(232),
                Se = rt.d.div(ie || (ie = Object(nt.a)(["\n\twidth: 80%;\n\theight: 45px;\n\tbackground: #82affb;\n\tborder-radius: 15px;\n\tcolor: #fff;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmargin-top: 32px;\n\tcursor: pointer;\n\n\t", " {\n\t\twidth: 180px;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.lg
                })),
                Te = function(t) {
                    var e = Object(lt.a)(),
                        n = Object(Ce.a)(),
                        r = n.login,
                        i = n.logout,
                        c = Object(it.s)(r, i).onPresentConnectModal;
                    return Object(at.jsx)(Se, Object(a.a)(Object(a.a)({
                        onClick: c
                    }, t), {}, {
                        children: e(292, "Unlock Wallet")
                    }))
                },
                Ae = function(t) {
                    var e = Object(j.b)(),
                        n = Object(m.c)().account,
                        r = Xt();
                    return {
                        onStake: Object(o.useCallback)(function() {
                            var i = Object(y.a)(w.a.mark((function i(c) {
                                var o, s, l;
                                return w.a.wrap((function(i) {
                                    for (;;) switch (i.prev = i.next) {
                                        case 0:
                                            return o = me.a.find((function(e) {
                                                return e.pid === t
                                            })), s = Object.assign({}, {
                                                senderAddress: n,
                                                stakesAmount: c
                                            }, o ? {
                                                lpSymbol: o.lpSymbol,
                                                lpAddress: o.lpAddresses[56]
                                            } : null), i.prev = 2, i.next = 5, _t(r, t, c, n);
                                        case 5:
                                            return l = i.sent, e(Object(h.b)(n)), Gt("info", "Stake LP token success", s), console.info(l), i.abrupt("return", l);
                                        case 12:
                                            throw i.prev = 12, i.t0 = i.catch(2), 4001 !== (null === i.t0 || void 0 === i.t0 ? void 0 : i.t0.code) && Gt("error", "Stake LP token failed", Object(a.a)(Object(a.a)(Object(a.a)({}, i.t0), s), {}, {
                                                functionName: "useStake"
                                            })), i.t0;
                                        case 16:
                                        case "end":
                                            return i.stop()
                                    }
                                }), i, null, [
                                    [2, 12]
                                ])
                            })));
                            return function(t) {
                                return i.apply(this, arguments)
                            }
                        }(), [n, e, r, t])
                    }
                },
                Qe = function(t) {
                    var e = Object(j.b)(),
                        n = Object(m.c)().account,
                        r = Xt();
                    return {
                        onUnstake: Object(o.useCallback)(function() {
                            var i = Object(y.a)(w.a.mark((function i(c) {
                                var o, s, l;
                                return w.a.wrap((function(i) {
                                    for (;;) switch (i.prev = i.next) {
                                        case 0:
                                            return o = me.a.find((function(e) {
                                                return e.pid === t
                                            })), s = Object.assign({}, {
                                                senderAddress: n,
                                                unstakeAmount: c
                                            }, o ? {
                                                lpSymbol: o.lpSymbol,
                                                lpAddress: o.lpAddresses[56]
                                            } : null), i.prev = 2, i.next = 5, Ut(r, t, c, n);
                                        case 5:
                                            return l = i.sent, e(Object(h.b)(n)), Gt("info", "Unstake LP token success", s), console.info(l), i.abrupt("return", l);
                                        case 12:
                                            throw i.prev = 12, i.t0 = i.catch(2), 4001 !== (null === i.t0 || void 0 === i.t0 ? void 0 : i.t0.code) && Gt("error", "Unstake LP token failed", Object(a.a)(Object(a.a)(Object(a.a)({}, i.t0), s), {}, {
                                                functionName: "useUnstake"
                                            })), i.t0;
                                        case 16:
                                        case "end":
                                            return i.stop()
                                    }
                                }), i, null, [
                                    [2, 12]
                                ])
                            })));
                            return function(t) {
                                return i.apply(this, arguments)
                            }
                        }(), [n, e, r, t])
                    }
                },
                ze = n(865),
                Ne = rt.d.div(ae || (ae = Object(nt.a)(["\n\talign-items: center;\n\tbackground-color: ", "00;\n\tdisplay: flex;\n\tmargin: 0;\n\tpadding: ", "px 0;\n\t", " {\n\t\tdisplay: block;\n\t\tpadding: 0;\n\t\tpadding-top: 56px;\n\t}\n\n\t", " {\n\t\tdisplay: block;\n\t\tpadding: 0;\n\t\tpadding-top: 56px;\n\t}\n\n\t", " {\n\t\tdisplay: flex;\n\t\tpadding: ", "px 0;\n\t}\n"])), (function(t) {
                    return t.theme.colors.primaryDark
                }), (function(t) {
                    return t.theme.spacing[4]
                }), (function(t) {
                    return t.theme.mediaQueries.xs
                }), (function(t) {
                    return t.theme.mediaQueries.sm
                }), (function(t) {
                    return t.theme.mediaQueries.lg
                }), (function(t) {
                    return t.theme.spacing[4]
                })),
                Le = rt.d.div(ce || (ce = Object(nt.a)(["\n\tflex: 1;\n"]))),
                Fe = function(t) {
                    var e = t.children;
                    return Object(at.jsx)(Ne, {
                        children: s.a.Children.map(e, (function(t) {
                            return Object(at.jsx)(at.Fragment, {
                                children: Object(at.jsx)(Le, {
                                    children: t
                                })
                            })
                        }))
                    })
                },
                He = (rt.d.div(oe || (oe = Object(nt.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: ", ";\n\tborder-radius: 16px;\n\tbox-shadow: ", ";\n\tcolor: ", ";\n\tpadding: 8px 16px 8px 0;\n\twidth: 100%;\n"])), (function(t) {
                    return t.theme.colors.input
                }), (function(t) {
                    var e = t.isWarning,
                        n = void 0 !== e && e,
                        r = t.theme;
                    return n ? r.shadows.warning : r.shadows.inset
                }), (function(t) {
                    return t.theme.colors.text
                })), rt.d.input(se || (se = Object(nt.a)(["\n\tfont-size: 25px;\n\tfont-weight: 500;\n\tcolor: var(--color-text-2);\n\tmargin-left: 15px;\n\tborder: none;\n\twidth: 35%;\n\t", " {\n\t\twidth: 70%;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.lg
                }))),
                qe = (Object(rt.d)(it.i)(le || (le = Object(nt.a)(["\n\tposition: absolute;\n\tbottom: -22px;\n\ta {\n\t\tdisplay: inline;\n\t}\n"]))), rt.d.img(de || (de = Object(nt.a)(["\n\twidth: 33px;\n\theight: 33px;\n\tposition: absolute;\n\tleft: 25px;\n"])))),
                Ve = rt.d.img(ue || (ue = Object(nt.a)(["\n\twidth: 33px;\n\theight: 33px;\n\tz-index: 10;\n"]))),
                Ee = rt.d.div(be || (be = Object(nt.a)(["\n\tcursor: pointer;\n\tmargin: 0 5px;\n\tborder: 1px solid var(--color-border-2);\n\tborder-radius: 10px;\n\tpadding: 8px;\n\twidth: 55px;\n\ttext-align: center;\n\tfont-weight: 500;\n\tfont-size: 12px;\n\tcolor: var(--color-text-btn);\n\tbackground: var(--color-background-3);\n"]))),
                Pe = rt.d.div(pe || (pe = Object(nt.a)(["\n\tcursor: pointer;\n\tmargin: 0 5px;\n\tbackground: var(--color-background-9);\n\tborder-radius: 10px;\n\tpadding: 8px;\n\twidth: 55px;\n\ttext-align: center;\n\tfont-weight: 500;\n\tfont-size: 12px;\n\tcolor: var(--color-text-btn-hover);\n"]))),
                Ie = rt.d.div(xe || (xe = Object(nt.a)(["\n\tcursor: not-allowed;\n\tmargin: 0 5px;\n\tbackground: #eaeaea;\n\tborder-radius: 10px;\n\tpadding: 8px;\n\twidth: 55px;\n\ttext-align: center;\n\tfont-weight: 500;\n\tfont-size: 12px;\n\tcolor: #9e9e9e;\n"]))),
                De = function(t) {
                    var e = t.max,
                        n = t.symbol,
                        r = t.onChange,
                        i = (t.onSelectMax, t.value),
                        a = (t.addLiquidityUrl, t.inputTitle),
                        c = Object(lt.a)(),
                        o = "0" === e || !e ? "0" : parseFloat(e).toFixed(4),
                        s = (i && null !== i && "" !== i ? parseFloat(i).toFixed(4) : parseFloat(e).toFixed(4), []),
                        l = n.split(" ");
                    console.log("parts", l), 2 === l.length ? s = l[0].split("-") : 1 === l.length && (s = [l[0]]);
                    var d = [{
                        label: "25%",
                        value: new u.a(.25 * parseFloat(e))
                    }, {
                        label: "50%",
                        value: new u.a(.5 * parseFloat(e))
                    }, {
                        label: "75%",
                        value: new u.a(.75 * parseFloat(e))
                    }, {
                        label: "100%",
                        value: new u.a(e)
                    }];
                    return Object(at.jsxs)("div", {
                        style: {
                            position: "relative"
                        },
                        children: [Object(at.jsxs)("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between"
                            },
                            children: [Object(at.jsx)("p", {
                                style: {
                                    fontWeight: 700,
                                    fontSize: "15px"
                                },
                                children: a
                            }), Object(at.jsxs)("p", {
                                style: {
                                    fontSize: "13px",
                                    fontWeight: 400
                                },
                                children: [c(1120, "Balance"), ": ", o.toLocaleString()]
                            })]
                        }), Object(at.jsxs)("div", {
                            style: {
                                display: "inline-flex",
                                alignItems: "center",
                                padding: "19px 17px",
                                border: "1px solid var(--color-border)",
                                borderRadius: "15px",
                                backgroundColor: "var(--color-background-2)",
                                width: "100%",
                                marginTop: "6px"
                            },
                            children: [Object(at.jsxs)("div", {
                                style: {
                                    position: "relative",
                                    display: "flex",
                                    width: "70px"
                                },
                                children: [Object(at.jsx)(Ve, {
                                    src: "/images/farms/".concat(s[0], ".png"),
                                    alt: "icon",
                                    width: 33,
                                    height: 33
                                }), s[1] ? Object(at.jsx)(qe, {
                                    src: "/images/farms/".concat(s[1], ".png"),
                                    alt: "icon",
                                    width: 33,
                                    height: 33
                                }) : null]
                            }), Object(at.jsx)("p", {
                                style: {
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    color: "var(--color-text-2)"
                                },
                                children: n
                            }), Object(at.jsx)(He, {
                                onChange: function(t) {
                                    return r(t.target.value)
                                },
                                placeholder: "0",
                                value: i
                            })]
                        }), Object(at.jsx)("div", {
                            style: {
                                display: "inline-flex",
                                marginTop: "20px",
                                justifyContent: "center",
                                width: "100%"
                            },
                            children: d.map((function(t) {
                                return 0 === parseFloat(e) ? Object(at.jsx)(Ie, {
                                    onClick: function() {
                                        return null
                                    },
                                    children: t.label
                                }) : t.value.toString() === i ? Object(at.jsx)(Pe, {
                                    onClick: function() {
                                        return null
                                    },
                                    children: t.label
                                }) : Object(at.jsx)(Ee, {
                                    onClick: function() {
                                        return r(t.value.toString())
                                    },
                                    children: t.label
                                })
                            }))
                        })]
                    })
                };

            function Be(t, e) {
                var n = "https://bscscan.com";
                switch (e) {
                    case "transaction":
                        return "".concat(n, "/tx/").concat(t);
                    case "token":
                        return "".concat(n, "/token/").concat(t);
                    case "address":
                    default:
                        return "".concat(n, "/address/").concat(t)
                }
            }
            var Me, We, _e, Ue, Ke, Re, Ze, Xe, Je, $e, Ge, Ye, tn, en, nn, rn, an, cn, on, sn, ln, dn, un, bn, pn, xn, jn, fn, mn, hn, gn, On, vn, wn, yn, kn, Cn, Sn, Tn, An, Qn, zn = rt.d.div(je || (je = Object(nt.a)(["\n\twidth: 100%;\n\theight: 55px;\n\tbackground: #18b2a1;\n\tborder-radius: 15px;\n\tcolor: #fff;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin: 15px auto;\n\tcursor: pointer;\n\tfont-weight: bold;\n\tfont-size: 18px;\n\n\t", " {\n\t\twidth: 90%;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.lg
                })),
                Nn = rt.d.div(fe || (fe = Object(nt.a)(["\n\twidth: 100%;\n\theight: 55px;\n\tbackground: var(--color-background-4);\n\tborder-radius: 15px;\n\tcolor: #bdbdbd;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin: 15px auto;\n\tcursor: pointer;\n\tfont-weight: bold;\n\tfont-size: 18px;\n\n\t", " {\n\t\twidth: 90%;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.lg
                })),
                Ln = function(t) {
                    var e = t.visible,
                        n = t.onHide,
                        r = t.max,
                        i = t.onConfirm,
                        a = (t.onDismiss, t.tokenName),
                        s = void 0 === a ? "" : a,
                        l = t.addLiquidityUrl,
                        d = Object(o.useMemo)((function() {
                            return Object(k.b)(r)
                        }), [r]),
                        u = Object(o.useState)(d),
                        b = Object(c.a)(u, 2),
                        p = b[0],
                        x = b[1],
                        j = Object(o.useState)(!1),
                        m = Object(c.a)(j, 2),
                        h = m[0],
                        g = m[1],
                        O = Object(o.useState)(!1),
                        v = Object(c.a)(O, 2),
                        C = v[0],
                        S = v[1],
                        T = Object(o.useState)(""),
                        A = Object(c.a)(T, 2),
                        Q = A[0],
                        z = A[1],
                        N = Object(lt.a)(),
                        L = Object(o.useCallback)((function() {
                            x(d)
                        }), [d, x]),
                        F = Object(o.useCallback)((function(t) {
                            x(t)
                        }), [x]),
                        H = Object(f.j)().spaceMode,
                        q = !Object(it.p)().isXl;
                    return Object(at.jsx)("div", {
                        id: h ? "pendingModal" : "transferModal",
                        children: Object(at.jsx)(ze.Dialog, {
                            visible: e,
                            className: "transfer-modal-desktop ".concat(q ? "transfer-modal-mobile" : ""),
                            position: q ? "bottom" : "center",
                            header: h ? "" : N(1068, "Stake LP tokens"),
                            onHide: function(t) {
                                function e() {
                                    return t.apply(this, arguments)
                                }
                                return e.toString = function() {
                                    return t.toString()
                                }, e
                            }((function() {
                                S(!1), n()
                            })),
                            children: h ? Object(at.jsxs)("div", {
                                className: "flex flex-col items-center h-full",
                                children: [Object(at.jsx)("p", {
                                    style: {
                                        fontSize: "15px",
                                        color: "var(--color-text-2)"
                                    },
                                    children: "Waiting for confirmation from your wallet"
                                }), Object(at.jsx)("img", {
                                    src: "/images/farms/loading".concat(H ? "-space" : "", ".svg"),
                                    alt: "loading"
                                }), Object(at.jsxs)("p", {
                                    style: {
                                        fontWeight: 500,
                                        fontSize: "16px",
                                        textAlign: "center",
                                        color: "var(--color-text-2)"
                                    },
                                    children: ["Deposit ", p, " ", s]
                                }), Object(at.jsx)("p", {
                                    style: {
                                        fontSize: "13px",
                                        color: "var(--color-text-2)",
                                        textAlign: "center",
                                        marginTop: "5px"
                                    },
                                    children: "Waiting for confirmation from your wallet"
                                })]
                            }) : C ? Object(at.jsxs)("div", {
                                className: "flex flex-col items-center h-full",
                                children: [Object(at.jsx)("img", {
                                    src: "/images/swap-status-success.svg",
                                    alt: "loading",
                                    className: "w-260px"
                                }), Object(at.jsx)("div", {
                                    className: "flex mouser-over",
                                    children: Object(at.jsxs)("a", {
                                        className: "flex mr-3",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        href: Be(Q, "transaction"),
                                        children: [Object(at.jsx)("span", {
                                            className: "text-18 text-primary mr-1",
                                            children: "View on BSC Scan"
                                        }), Object(at.jsx)("img", {
                                            src: "/images/icon-bsc-link-on-modal.svg",
                                            className: "w-24px",
                                            alt: "icon"
                                        })]
                                    })
                                })]
                            }) : Object(at.jsxs)("div", {
                                children: [Object(at.jsx)(De, {
                                    value: p,
                                    onSelectMax: L,
                                    onChange: F,
                                    max: d,
                                    symbol: s,
                                    addLiquidityUrl: l,
                                    inputTitle: N(1070, "Stake")
                                }), Object(at.jsxs)(Fe, {
                                    children: [h || "0" === d || "0" === p ? Object(at.jsx)(Nn, {
                                        onClick: Object(y.a)(w.a.mark((function t() {
                                            return w.a.wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return g(!0), t.next = 3, i(p);
                                                    case 3:
                                                        g(!1), S(!0);
                                                    case 5:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        }))),
                                        children: h ? N(488, "Pending Confirmation") : N(464, "Deposit")
                                    }) : Object(at.jsx)(zn, {
                                        onClick: Object(y.a)(w.a.mark((function t() {
                                            var e;
                                            return w.a.wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return g(!0), t.next = 3, i(p);
                                                    case 3:
                                                        e = t.sent, z(e.transactionHash), g(!1), S(!0);
                                                    case 7:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        }))),
                                        children: h ? N(488, "Pending Confirmation") : N(464, "Deposit")
                                    }), Object(at.jsx)(Nn, {
                                        onClick: n,
                                        children: N(462, "Cancel")
                                    })]
                                })]
                            })
                        })
                    })
                },
                Fn = rt.d.div(Me || (Me = Object(nt.a)(["\n\twidth: 90%;\n\theight: 55px;\n\tbackground: #fb7979;\n\tborder-radius: 15px;\n\tcolor: #fff;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin: 15px auto;\n\tcursor: pointer;\n\tfont-weight: bold;\n\tfont-size: 18px;\n\t", " {\n\t\twidth: 100%;\n\t}\n\n\t", " {\n\t\twidth: 100%;\n\t}\n\n\t", " {\n\t\twidth: 90%;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.xs
                }), (function(t) {
                    return t.theme.mediaQueries.sm
                }), (function(t) {
                    return t.theme.mediaQueries.lg
                })),
                Hn = rt.d.div(We || (We = Object(nt.a)(["\n\twidth: 90%;\n\theight: 55px;\n\tbackground: #e9e9e9;\n\tborder-radius: 15px;\n\tcolor: #bdbdbd;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin: 15px auto;\n\tcursor: pointer;\n\tfont-weight: bold;\n\tfont-size: 18px;\n\t", " {\n\t\twidth: 100%;\n\t}\n\n\t", " {\n\t\twidth: 100%;\n\t}\n\n\t", " {\n\t\twidth: 90%;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.xs
                }), (function(t) {
                    return t.theme.mediaQueries.sm
                }), (function(t) {
                    return t.theme.mediaQueries.lg
                })),
                qn = function(t) {
                    var e = t.visible,
                        n = t.onHide,
                        r = t.onConfirm,
                        i = (t.onDismiss, t.max),
                        a = t.tokenName,
                        s = void 0 === a ? "" : a,
                        l = Object(o.useMemo)((function() {
                            return Object(k.b)(i)
                        }), [i]),
                        d = Object(o.useState)(l),
                        u = Object(c.a)(d, 2),
                        b = u[0],
                        p = u[1],
                        x = Object(o.useState)(!1),
                        j = Object(c.a)(x, 2),
                        m = j[0],
                        h = j[1],
                        g = Object(o.useState)(!1),
                        O = Object(c.a)(g, 2),
                        v = O[0],
                        C = O[1],
                        S = Object(o.useState)(""),
                        T = Object(c.a)(S, 2),
                        A = T[0],
                        Q = T[1],
                        z = Object(lt.a)(),
                        N = Object(f.j)().spaceMode,
                        L = Object(o.useCallback)((function() {
                            p(l)
                        }), [l, p]),
                        F = Object(o.useCallback)((function(t) {
                            p(t)
                        }), [p]),
                        H = !Object(it.p)().isXl;
                    return Object(at.jsx)("div", {
                        id: m ? "pendingModal" : "transferModal",
                        children: Object(at.jsx)(ze.Dialog, {
                            visible: e,
                            className: "transfer-modal-desktop ".concat(H ? "transfer-modal-mobile" : ""),
                            position: H ? "bottom" : "center",
                            header: v ? "Confirm Transaction" : z(1126, "Unstake LP tokens"),
                            onHide: function(t) {
                                function e() {
                                    return t.apply(this, arguments)
                                }
                                return e.toString = function() {
                                    return t.toString()
                                }, e
                            }((function() {
                                C(!1), n()
                            })),
                            children: m ? Object(at.jsxs)("div", {
                                className: "flex flex-col items-center h-full",
                                children: [Object(at.jsx)("p", {
                                    style: {
                                        fontSize: "15px",
                                        color: "var(--color-text-2)"
                                    },
                                    children: "Waiting for confirmation from your wallet"
                                }), Object(at.jsx)("img", {
                                    src: "/images/farms/loading".concat(N ? "-space" : "", ".svg"),
                                    alt: "loading"
                                }), Object(at.jsxs)("p", {
                                    style: {
                                        fontWeight: 500,
                                        fontSize: "16px",
                                        textAlign: "center",
                                        color: "var(--color-text-2)"
                                    },
                                    children: ["Withdraw ", b, " ", s]
                                }), Object(at.jsx)("p", {
                                    style: {
                                        fontSize: "13px",
                                        color: "var(--color-text-2)",
                                        textAlign: "center",
                                        marginTop: "5px"
                                    },
                                    children: "Waiting for confirmation from your wallet"
                                })]
                            }) : v ? Object(at.jsxs)("div", {
                                className: "flex flex-col items-center h-full",
                                children: [Object(at.jsx)("img", {
                                    src: "/images/swap-status-success.svg",
                                    alt: "loading",
                                    className: "w-260px"
                                }), Object(at.jsx)("div", {
                                    className: "flex mouser-over",
                                    children: Object(at.jsxs)("a", {
                                        className: "flex mr-3",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        href: Be(A, "transaction"),
                                        children: [Object(at.jsx)("span", {
                                            className: "text-18 text-primary mr-1",
                                            children: "View on BSC Scan"
                                        }), Object(at.jsx)("img", {
                                            src: "/images/icon-bsc-link-on-modal.svg",
                                            className: "w-24px",
                                            alt: "icon"
                                        })]
                                    })
                                })]
                            }) : Object(at.jsxs)("div", {
                                children: [Object(at.jsx)(De, {
                                    onSelectMax: L,
                                    onChange: F,
                                    value: b,
                                    max: l,
                                    symbol: s,
                                    inputTitle: z(588, "Unstake")
                                }), Object(at.jsxs)(Fe, {
                                    children: [m ? Object(at.jsx)(Hn, {
                                        onClick: Object(y.a)(w.a.mark((function t() {
                                            return w.a.wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return h(!0), t.next = 3, r(b);
                                                    case 3:
                                                        h(!1), C(!0);
                                                    case 5:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        }))),
                                        children: m ? z(488, "Pending Confirmation") : z(464, "Withdraw")
                                    }) : Object(at.jsx)(Fn, {
                                        onClick: Object(y.a)(w.a.mark((function t() {
                                            var e;
                                            return w.a.wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return h(!0), t.next = 3, r(b);
                                                    case 3:
                                                        e = t.sent, Q(e.transactionHash), h(!1), C(!0);
                                                    case 7:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        }))),
                                        children: m ? z(488, "Pending Confirmation") : z(464, "Withdraw")
                                    }), Object(at.jsx)(Hn, {
                                        onClick: n,
                                        children: z(462, "Cancel")
                                    })]
                                })]
                            })
                        })
                    })
                },
                Vn = rt.d.div(_e || (_e = Object(nt.a)(["\n\twidth: 180px;\n\theight: 45px;\n\tbackground: #82affb;\n\tborder-radius: 15px;\n\tcolor: #fff;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin: 15px auto;\n\tcursor: pointer;\n\t", " {\n\t\twidth: 80%;\n\t}\n\n\t", " {\n\t\twidth: 80%;\n\t}\n\n\t", " {\n\t\twidth: 180px;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.xs
                }), (function(t) {
                    return t.theme.mediaQueries.sm
                }), (function(t) {
                    return t.theme.mediaQueries.lg
                })),
                En = rt.d.div(Ue || (Ue = Object(nt.a)(["\n\twidth: 180px;\n\theight: 45px;\n\tbackground: var(--color-background-4);\n\tborder-radius: 15px;\n\tcolor: #fff;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin: 15px auto;\n\tcursor: not-allowed;\n\t", " {\n\t\twidth: 80%;\n\t}\n\n\t", " {\n\t\twidth: 80%;\n\t}\n\n\t", " {\n\t\twidth: 180px;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.xs
                }), (function(t) {
                    return t.theme.mediaQueries.sm
                }), (function(t) {
                    return t.theme.mediaQueries.lg
                })),
                Pn = rt.d.div(Ke || (Ke = Object(nt.a)(["\n\tdisplay: block;\n\twidth: 100%;\n\tmargin: 16px auto;\n\t", " {\n\t\tdisplay: inline-flex;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.lg
                })),
                In = rt.d.div(Re || (Re = Object(nt.a)(["\n\twidth: 180px;\n\theight: 45px;\n\tbackground: var(--color-background-4);\n\tborder-radius: 15px;\n\tcolor: #fff;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin: 15px auto;\n\tcursor: not-allowed;\n\n\t", " {\n\t\tdisplay: inline-flex;\n\t\twidth: 130px;\n\t\tmargin: 15px 10px;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.lg
                })),
                Dn = rt.d.div(Ze || (Ze = Object(nt.a)(["\n\twidth: 180px;\n\theight: 45px;\n\tbackground: #fb7979;\n\tborder-radius: 15px;\n\tcolor: #fff;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin: 15px auto;\n\tcursor: pointer;\n\n\t", " {\n\t\tdisplay: inline-flex;\n\t\tmargin: 15px 10px;\n\t\twidth: 130px;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.lg
                })),
                Bn = rt.d.div(Xe || (Xe = Object(nt.a)(["\n\t", " {\n\t\tborder: 1px solid var(--color-border-2);\n\t\tborder-radius: 30px;\n\t\tmargin: 30px;\n\t}\n\n\t", " {\n\t\tborder: 1px solid var(--color-border-2);\n\t\tborder-radius: 30px;\n\t\tmargin: 30px;\n\t}\n\n\t", " {\n\t\tborder: 0;\n\t\tborder-radius: 0;\n\t\tmargin: 0;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.xs
                }), (function(t) {
                    return t.theme.mediaQueries.sm
                }), (function(t) {
                    return t.theme.mediaQueries.lg
                })),
                Mn = rt.d.div(Je || (Je = Object(nt.a)(["\n\tfont-size: 13px;\n\tbackground: var(--color-background-8);\n\twidth: 100%;\n\tpadding: 10px 0;\n\ttext-align: center;\n\tborder-right: 1px solid var(--color-border-5);\n\tcolor: var(--color-text);\n\n\t", " {\n\t\tbackground: transparent;\n\t\tborder-right: 0;\n\t}\n\n\t", " {\n\t\tbackground: transparent;\n\t\tborder-right: 0;\n\t}\n\n\t", " {\n\t\tbackground: var(--color-background-8);\n\t\tborder-right: 1px solid var(--color-border-5);\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.xs
                }), (function(t) {
                    return t.theme.mediaQueries.sm
                }), (function(t) {
                    return t.theme.mediaQueries.lg
                })),
                Wn = rt.d.div($e || ($e = Object(nt.a)(["\n\tborder-right: 0;\n\tmin-height: auto;\n\twidth: 100%;\n\tpadding: 30px 25px;\n\ttext-align: center;\n\n\t", " {\n\t\tborder-right: 1px solid var(--color-border-5);\n\t\tmin-height: 200px;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.lg
                })),
                _n = function(t) {
                    var e = t.pid,
                        n = t.lpSymbol,
                        r = t.lpAddresses,
                        i = t.quoteTokenAdresses,
                        s = t.tokenAddresses,
                        l = (Object(lt.a)(), Object(m.c)().account),
                        d = Object(o.useState)(!1),
                        u = Object(c.a)(d, 2),
                        p = (u[0], u[1]),
                        x = Object(f.a)(e),
                        g = x.allowance,
                        O = x.tokenBalance,
                        v = x.stakedBalance,
                        C = Ae(e).onStake,
                        S = Qe(e).onUnstake,
                        T = Object(o.useState)(!1),
                        A = Object(c.a)(T, 2),
                        Q = A[0],
                        z = A[1],
                        N = Object(o.useState)(!1),
                        L = Object(c.a)(N, 2),
                        F = L[0],
                        H = L[1],
                        q = Object(Rt.a)(),
                        V = l && g && g.isGreaterThan(0),
                        E = r[56],
                        P = "0xf70a40749006c7952186666c92f32b8f5c2129f9" === E,
                        I = It({
                            quoteTokenAdresses: i,
                            tokenAddresses: s
                        }),
                        D = "".concat(b.a, "/").concat(I),
                        B = Object(k.a)(v),
                        M = B.toLocaleString(),
                        W = function(t, e) {
                            var n = Object(j.b)(),
                                r = Object(m.c)().account,
                                i = Xt();
                            return {
                                onApprove: Object(o.useCallback)(Object(y.a)(w.a.mark((function c() {
                                    var o, s, l;
                                    return w.a.wrap((function(c) {
                                        for (;;) switch (c.prev = c.next) {
                                            case 0:
                                                return o = me.a.find((function(t) {
                                                    return t.lpAddresses[56] === e
                                                })), s = Object.assign({}, {
                                                    lpAddress: e,
                                                    senderAddress: r
                                                }, o ? {
                                                    lpSymbol: o.lpSymbol
                                                } : null), c.prev = 2, c.next = 5, Wt(t, i, r);
                                            case 5:
                                                return l = c.sent, n(Object(h.b)(r)), Gt("info", "Approved farm success", s), c.abrupt("return", l);
                                            case 11:
                                                return c.prev = 11, c.t0 = c.catch(2), 4001 !== (null === c.t0 || void 0 === c.t0 ? void 0 : c.t0.code) && Gt("error", "Error: Function useApprove", Object(a.a)(Object(a.a)({}, c.t0), s)), c.abrupt("return", !1);
                                            case 15:
                                            case "end":
                                                return c.stop()
                                        }
                                    }), c, null, [
                                        [2, 11]
                                    ])
                                }))), [r, n, t, e, i])
                            }
                        }(Object(Zt.a)(E, q), E).onApprove,
                        _ = Object(o.useCallback)(Object(y.a)(w.a.mark((function t() {
                            return w.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, p(!0), t.next = 4, W();
                                    case 4:
                                        p(!1), t.next = 10;
                                        break;
                                    case 7:
                                        t.prev = 7, t.t0 = t.catch(0), console.error(t.t0);
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 7]
                            ])
                        }))), [W]);
                    return l ? V ? B ? Object(at.jsxs)(at.Fragment, {
                        children: [Object(at.jsx)(Ln, {
                            visible: Q,
                            max: O,
                            onConfirm: C,
                            tokenName: n,
                            addLiquidityUrl: D,
                            onHide: function() {
                                return z(!1)
                            }
                        }), Object(at.jsx)(qn, {
                            visible: F,
                            onHide: function() {
                                return H(!1)
                            },
                            max: v,
                            onConfirm: S,
                            tokenName: n
                        }), Object(at.jsxs)(Bn, {
                            children: [Object(at.jsx)(Mn, {
                                children: "Farming"
                            }), Object(at.jsxs)(Wn, {
                                children: [Object(at.jsx)("p", {
                                    style: {
                                        color: "var(--color-text-2)",
                                        fontSize: "25px"
                                    },
                                    children: M
                                }), Object(at.jsxs)(Pn, {
                                    children: [Object(at.jsx)(In, {
                                        onClick: function() {
                                            return z(!1)
                                        },
                                        children: "Deposit"
                                    }), Object(at.jsx)(Dn, {
                                        onClick: function() {
                                            return H(!0)
                                        },
                                        children: "Withdraw"
                                    })]
                                })]
                            })]
                        })]
                    }) : Object(at.jsxs)(at.Fragment, {
                        children: [Object(at.jsx)(Ln, {
                            visible: Q,
                            max: O,
                            onConfirm: C,
                            tokenName: n,
                            addLiquidityUrl: D,
                            onHide: function() {
                                return z(!1)
                            }
                        }), Object(at.jsxs)(Bn, {
                            children: [Object(at.jsx)(Mn, {
                                children: "Farming"
                            }), Object(at.jsxs)(Wn, {
                                children: [Object(at.jsx)("p", {
                                    style: {
                                        color: "var(--color-text-2)",
                                        fontSize: "25px"
                                    },
                                    children: n
                                }), Object(at.jsx)("div", {
                                    style: {
                                        width: "100%",
                                        margin: "12px auto"
                                    },
                                    children: Object(at.jsx)(In, {
                                        onClick: function() {
                                            return z(!1)
                                        },
                                        children: "Deposit"
                                    })
                                })]
                            })]
                        })]
                    }) : P ? Object(at.jsxs)(Bn, {
                        children: [Object(at.jsx)(Mn, {
                            children: "Farming"
                        }), Object(at.jsxs)(Wn, {
                            children: [Object(at.jsx)("p", {
                                style: {
                                    color: "var(--color-text-2)",
                                    fontSize: "25px"
                                },
                                children: M
                            }), Object(at.jsx)("div", {
                                style: {
                                    width: "100%",
                                    margin: "32px auto"
                                },
                                children: Object(at.jsx)(En, {
                                    children: "Enable"
                                })
                            })]
                        })]
                    }) : Object(at.jsxs)(Bn, {
                        children: [Object(at.jsx)(Mn, {
                            children: "Farming"
                        }), Object(at.jsxs)(Wn, {
                            children: [Object(at.jsx)("p", {
                                style: {
                                    color: "var(--color-text-2)",
                                    fontSize: "25px"
                                },
                                children: M
                            }), Object(at.jsx)("div", {
                                style: {
                                    width: "100%",
                                    margin: "32px auto"
                                },
                                children: Object(at.jsx)(Vn, {
                                    onClick: _,
                                    children: "Enable"
                                })
                            })]
                        })]
                    }) : Object(at.jsxs)(Bn, {
                        children: [Object(at.jsx)(Mn, {
                            children: "Farming"
                        }), Object(at.jsxs)(Wn, {
                            children: [Object(at.jsx)("p", {
                                style: {
                                    color: "var(--color-text-2)",
                                    fontSize: "25px"
                                },
                                children: M
                            }), Object(at.jsx)("div", {
                                style: {
                                    width: "100%",
                                    margin: "0 auto"
                                },
                                children: Object(at.jsx)(Te, {
                                    width: "100%"
                                })
                            })]
                        })]
                    })
                },
                Un = function(t) {
                    var e = t.details,
                        n = (t.multiplier, t.liquidity, e),
                        r = null === n || void 0 === n ? void 0 : n.poolType,
                        i = Object(f.j)().spaceMode,
                        c = (Object(lt.a)(), n.quoteTokenAdresses),
                        o = n.tokenAddresses,
                        s = n.tokenSymbol,
                        l = (n.dual, n.pid),
                        d = n.lpSymbol && n.lpSymbol.toUpperCase().replace("PANCAKE", ""),
                        u = "";
                    u = r === p.b.LP_PANCAKE && 999 === l ? Dt({
                        quoteTokenAdresses: c,
                        tokenAddresses: o
                    }) : It({
                        quoteTokenAdresses: c,
                        tokenAddresses: o
                    });
                    var b = n.lpAddresses[56],
                        x = "https://bscscan.com/address/".concat(b),
                        j = ("https://pancakeswap.info/pair/".concat(b), Bt.a.includes(s), !Object(it.p)().isXl),
                        m = "";
                    switch (r) {
                        case p.b.STAKE:
                            m = "htps://wtww.wardenswap.finance/#/best-rate-swap?from=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee&to=0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc";
                            break;
                        case p.b.LP:
                            m = "https://liquidity.wardenswap.finance/#/".concat(u);
                            break;
                        case p.b.LP_PANCAKE:
                            m = "https://pancakeswap.finance/add/".concat(u);
                            break;
                        default:
                            m = "htps://wtww.wardenswap.finance/#/best-rate-swap?from=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee&to=0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc"
                    }
                    var h = 0 === e.pid ? "Buy WAD" : "Add ".concat(d);
                    return j ? Object(at.jsxs)("div", {
                        style: {
                            padding: "0",
                            borderBottom: "1px solid var(--color-border-2)",
                            backgroundColor: "var(--color-background-2)"
                        },
                        children: [Object(at.jsx)("div", {
                            children: Object(at.jsx)(ke, Object(a.a)({}, n))
                        }), Object(at.jsx)("div", {
                            children: Object(at.jsx)(_n, Object(a.a)({}, n))
                        }), Object(at.jsxs)("div", {
                            style: {
                                display: "block",
                                textAlign: "center",
                                paddingBottom: "25px"
                            },
                            children: [Object(at.jsx)("p", {
                                style: {
                                    color: "var(--color-text-2)",
                                    fontSize: "13px"
                                },
                                children: Object(at.jsxs)("a", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "center"
                                    },
                                    rel: "noreferrer",
                                    target: "_blank",
                                    href: m,
                                    children: ["Add ", d, Object(at.jsx)("img", {
                                        src: "/images/farms/external-link".concat(i ? "-space" : "", ".svg"),
                                        alt: "link",
                                        style: {
                                            width: "18px",
                                            height: "18px",
                                            marginLeft: "5px",
                                            verticalAlign: "middle"
                                        }
                                    })]
                                })
                            }), Object(at.jsx)("p", {
                                style: {
                                    color: "var(--color-text-2)",
                                    fontSize: "13px",
                                    marginTop: "20px"
                                },
                                children: Object(at.jsxs)("a", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "center"
                                    },
                                    rel: "noreferrer",
                                    target: "_blank",
                                    href: x,
                                    children: ["Farm Contract", Object(at.jsx)("img", {
                                        src: "/images/farms/external-link".concat(i ? "-space" : "", ".svg"),
                                        alt: "link",
                                        style: {
                                            width: "18px",
                                            height: "18px",
                                            marginLeft: "5px",
                                            verticalAlign: "middle"
                                        }
                                    })]
                                })
                            })]
                        })]
                    }) : Object(at.jsx)("div", {
                        style: {
                            padding: "0",
                            borderBottom: "1px solid var(--color-border-2)",
                            backgroundColor: "var(--color-background-2)"
                        },
                        children: Object(at.jsxs)("div", {
                            style: {
                                width: "100%",
                                display: "flex"
                            },
                            children: [Object(at.jsxs)("div", {
                                style: {
                                    width: "33.33%",
                                    display: "inline-block"
                                },
                                children: [Object(at.jsx)("div", {
                                    style: {
                                        fontSize: "13px",
                                        background: "var(--color-background-8)",
                                        width: "100%",
                                        padding: "10px 0",
                                        textAlign: "center",
                                        borderRight: "1px solid var(--color-border-5)",
                                        color: "var(--color-text)"
                                    },
                                    children: "Information"
                                }), Object(at.jsxs)("div", {
                                    style: {
                                        minHeight: "200px",
                                        width: "100%",
                                        padding: "30px 25px",
                                        borderLeft: "1px solid var(--color-border-5)",
                                        borderRight: "1px solid var(--color-border-5)"
                                    },
                                    children: [Object(at.jsx)("a", {
                                        rel: "noreferrer",
                                        target: "_blank",
                                        href: m,
                                        children: Object(at.jsxs)("p", {
                                            style: {
                                                color: "var(--color-text-2)",
                                                fontSize: "13px",
                                                display: "flex",
                                                justifyContent: "left"
                                            },
                                            children: [h, Object(at.jsx)("img", {
                                                src: "/images/farms/external-link".concat(i ? "-space" : "", ".svg"),
                                                alt: "link",
                                                style: {
                                                    width: "18px",
                                                    height: "18px",
                                                    marginLeft: "5px",
                                                    verticalAlign: "middle"
                                                }
                                            })]
                                        })
                                    }), Object(at.jsx)("p", {
                                        style: {
                                            color: "var(--color-text-2)",
                                            fontSize: "13px",
                                            marginTop: "20px"
                                        },
                                        children: Object(at.jsxs)("a", {
                                            rel: "noreferrer",
                                            target: "_blank",
                                            href: x,
                                            style: {
                                                display: "flex",
                                                justifyContent: "left"
                                            },
                                            children: [0 === e.pid ? "Token Contract" : "Farm Contract", Object(at.jsx)("img", {
                                                src: "/images/farms/external-link".concat(i ? "-space" : "", ".svg"),
                                                alt: "link",
                                                style: {
                                                    width: "18px",
                                                    height: "18px",
                                                    marginLeft: "5px",
                                                    verticalAlign: "middle"
                                                }
                                            })]
                                        })
                                    })]
                                })]
                            }), Object(at.jsx)("div", {
                                style: {
                                    width: "33.33%",
                                    display: "inline-block"
                                },
                                children: Object(at.jsx)(ke, Object(a.a)({}, n))
                            }), Object(at.jsx)("div", {
                                style: {
                                    width: "33.33%",
                                    display: "inline-block"
                                },
                                children: Object(at.jsx)(_n, Object(a.a)({}, n))
                            })]
                        })
                    })
                },
                Kn = (rt.d.div(Ge || (Ge = Object(nt.a)(["\n\tfont-size: 12px;\n\tcolor: ", ";\n\ttext-align: left;\n"])), (function(t) {
                    return t.theme.colors.textSubtle
                })), rt.d.div(Ye || (Ye = Object(nt.a)(["\n\tmin-height: 24px;\n\tdisplay: block;\n\talign-items: center;\n\n\t", " {\n\t\tdisplay: inline-flex;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.lg
                }))),
                Rn = function(t) {
                    t.label;
                    var e = t.children;
                    return Object(at.jsx)("div", {
                        children: Object(at.jsx)(Kn, {
                            children: e
                        })
                    })
                },
                Zn = {
                    farm: ft,
                    earned: gt,
                    details: wt,
                    multiplier: Ct,
                    liquidity: Qt,
                    platform: Ht
                },
                Xn = rt.d.div(tn || (tn = Object(nt.a)(["\n\tbackground: var(--color-background);\n\tpadding: 24px 0px;\n\tdisplay: block;\n\twidth: 100%;\n\talign-items: center;\n\ttext-align: center;\n"]))),
                Jn = rt.d.tr(en || (en = Object(nt.a)(["\n\tbackground: var(--color-background);\n\tpadding: 0;\n\tcursor: pointer;\n\tborder-bottom: 1px solid var(--color-border-2);\n\n\t:last-of-type {\n\t\tborder-bottom: none;\n\t}\n"]))),
                $n = rt.d.tr(nn || (nn = Object(nt.a)(["\n\tpadding: 0;\n\tcursor: pointer;\n\tborder-bottom: 1px solid var(--color-border-2);\n\n\t:last-of-type {\n\t\tborder-bottom: none;\n\t}\n"]))),
                Gn = rt.d.td(rn || (rn = Object(nt.a)(["\n\tbackground: var(--color-background);\n\tpadding: 16px 16px 24px 0;\n"]))),
                Yn = rt.d.div(an || (an = Object(nt.a)(["\n\tpadding-left: 40px;\n"]))),
                tr = rt.d.td(cn || (cn = Object(nt.a)(["\n\tbackground: var(--color-background);\n\tpadding: 16px 0 16px 20px !important;\n\n\t", " {\n\t\tpadding: 0;\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.lg
                })),
                er = function(t) {
                    var e = t.details,
                        n = t.farm,
                        r = Object(o.useState)(!1),
                        i = Object(c.a)(r, 2),
                        l = i[0],
                        d = i[1],
                        u = Object(lt.a)(),
                        b = function() {
                            d(!l)
                        },
                        p = Jn;
                    "0X" === n.multiplier && (p = $n);
                    var x = Object(it.p)(),
                        j = x.isXl,
                        f = x.isXs,
                        m = x.isSm,
                        h = !j ? S : T,
                        g = h.map((function(t) {
                            return t.name
                        }));
                    return Object(at.jsxs)(at.Fragment, {
                        children: [f || m ? Object(at.jsxs)(p, {
                            onClick: b,
                            children: [Object(at.jsxs)(tr, {
                                children: [Object(at.jsx)(Rn, {
                                    children: Object(at.jsx)(ft, Object(a.a)({}, t.farm))
                                }), void 0 !== t.dayTradeVolume && void 0 !== t.platform.percentageFee ? Object(at.jsxs)(Yn, {
                                    children: [Object(at.jsx)("div", {
                                        children: Object(at.jsx)(Pt, {
                                            dayTradeVolume: t.dayTradeVolume
                                        })
                                    }), Object(at.jsx)("div", {
                                        children: Object(at.jsx)(Ht, Object(a.a)({}, t.platform))
                                    })]
                                }) : null]
                            }), Object(at.jsx)(Gn, {
                                children: Object(at.jsx)(Rn, {
                                    label: u(1072, "Earned"),
                                    children: Object(at.jsx)(gt, Object(a.a)({}, t.earned))
                                })
                            }), Object(at.jsx)("td", {
                                children: Object(at.jsx)(Xn, {
                                    children: Object(at.jsx)(Rn, {
                                        children: Object(at.jsx)(wt, {
                                            actionPanelToggled: l
                                        })
                                    })
                                })
                            })]
                        }) : Object(at.jsx)(p, {
                            onClick: b,
                            children: Object.keys(t).map((function(e) {
                                var n = g.indexOf(e);
                                if (-1 === n) return null;
                                switch (e) {
                                    case "details":
                                        return Object(at.jsx)("td", {
                                            style: {
                                                background: "var(--color-background)",
                                                padding: 0,
                                                width: "20%"
                                            },
                                            children: Object(at.jsx)(Xn, {
                                                children: Object(at.jsx)(Rn, {
                                                    children: Object(at.jsx)(wt, {
                                                        actionPanelToggled: l
                                                    })
                                                })
                                            })
                                        }, e);
                                    case "liquidity":
                                        return Object(at.jsx)("td", {
                                            style: {
                                                background: "var(--color-background)",
                                                padding: 0,
                                                width: "10%"
                                            },
                                            children: Object(at.jsx)(Xn, {
                                                children: Object(at.jsx)(Rn, {
                                                    label: u(736, "TVL"),
                                                    children: Object(at.jsx)(Qt, Object(a.a)({}, t.liquidity))
                                                })
                                            })
                                        }, e);
                                    case "platform":
                                        return Object(at.jsx)("td", {
                                            style: {
                                                background: "var(--color-background)",
                                                padding: 0,
                                                width: "15%"
                                            },
                                            children: Object(at.jsx)(Xn, {
                                                children: Object(at.jsx)(Rn, {
                                                    children: Object(at.jsx)(Ht, Object(a.a)({}, t.platform))
                                                })
                                            })
                                        }, e);
                                    case "dayTradeVolume":
                                        return Object(at.jsx)("td", {
                                            style: {
                                                background: "var(--color-background)",
                                                padding: 0,
                                                width: "15%"
                                            },
                                            children: Object(at.jsx)(Xn, {
                                                children: Object(at.jsx)(Rn, {
                                                    children: Object(at.jsx)(Pt, {
                                                        dayTradeVolume: t.dayTradeVolume
                                                    })
                                                })
                                            })
                                        }, e);
                                    default:
                                        return Object(at.jsx)("td", {
                                            style: {
                                                background: "var(--color-background)",
                                                padding: 0,
                                                width: "earn" === e ? "20%" : "30%"
                                            },
                                            children: Object(at.jsx)(Xn, {
                                                children: Object(at.jsx)(Rn, {
                                                    label: u(h[n].translationId, h[n].label),
                                                    children: s.a.createElement(Zn[e], t[e])
                                                })
                                            })
                                        }, e)
                                }
                            }))
                        }), l && e && Object(at.jsx)("tr", {
                            children: Object(at.jsx)("td", {
                                colSpan: 6,
                                style: {
                                    backgroundColor: "var(--color-background-8)"
                                },
                                children: Object(at.jsx)(Un, Object(a.a)({}, t))
                            })
                        })]
                    })
                },
                nr = rt.d.div(on || (on = Object(nt.a)(["\n\n\twidth: 100%;\n"]))),
                rr = rt.d.div(sn || (sn = Object(nt.a)(["\n\toverflow: visible;\n\n\t&::-webkit-scrollbar {\n\t\tdisplay: none;\n\t}\n"]))),
                ir = rt.d.table(ln || (ln = Object(nt.a)(["\n\t", " {\n\t\ttable-layout:fixed;\n\t}\n\tborder-collapse: collapse;\n\tfont-size: 14px;\n\tborder-radius: 4px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\twidth: 100%;\n\tfilter: ", ";\n"])), (function(t) {
                    return t.theme.mediaQueries.md
                }), (function(t) {
                    return t.theme.card.dropShadow
                })),
                ar = rt.d.tbody(dn || (dn = Object(nt.a)(["\n\t& tr {\n\t\ttd {\n\t\t\tfont-size: 16px;\n\t\t\tvertical-align: middle;\n\t\t\tpadding: 0px;\n\t\t}\n\t}\n\ttr:last-of-type td:first-of-type {\n\t\t", " {\n\t\t\tpadding: unset;\n\t\t}\n\t\tborder-bottom-left-radius: 30px;\n\t\toverflow: hidden;\n\t}\n\ttr:last-of-type td:last-of-type {\n\t\t", " {\n\t\t\tpadding: unset;\n\t\t}\n\t\tborder-bottom-right-radius: 30px;\n\t\toverflow: hidden;\n\t}\n\n\t@media screen and (max-width: 768px) {\n\t\ttr:first-of-type td:first-of-type {\n\t\t\tborder-top-left-radius: 30px;\n\t\t}\n\n\t\ttr:first-of-type td:last-of-type {\n\t\t\tborder-top-right-radius: 30px;\n\n\t\t\tdiv {\n\t\t\t\tborder-top-right-radius: 30px;\n\t\t\t}\n\t\t}\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.md
                }), (function(t) {
                    return t.theme.mediaQueries.md
                })),
                cr = rt.d.thead(un || (un = Object(nt.a)(["\n\t& tr {\n\t\tdisplay: none;\n\t\tbackground: var(--color-background);\n\t\tpadding: 36px 64px;\n\t\theight: 73px;\n\t\tborder-bottom: 1px solid var(--color-border-2);\n\n\t\tth:first-of-type {\n      border-top-left-radius: 30px;\n    }\n    th:last-of-type {\n      border-top-right-radius: 30px;\n    }\n\n\t\tth {\n\t\t\tbackground: var(--color-background);\n\t\t\tfont-size: 13px;\n\t\t\tfont-weight: 400;\n\t\t\tvertical-align: middle;\n\t\t\tcolor: var(--color-text-2);\n\n\t\t\t&:nth-child(1) {\n\t\t\t\twidth: 25%\n\t\t\t}\n\n\t\t\t&:nth-child(3) {\n\t\t\t\twidth: 15%\n\t\t\t}\n\t\t}\n\t}\n\n\t", " {\n\t\t& tr {\n\t\t\tdisplay: table-row;\n\t\t}\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.sm
                })),
                or = rt.d.div(bn || (bn = Object(nt.a)(["\n\tposition: relative;\n\tbackground: var(--color-background-2);\n\tborder-radius: 30px;\n"]))),
                sr = rt.d.div(pn || (pn = Object(nt.a)(["\n\tdisplay: inline-block;\n\tposition: relative;\n\theight: 15px;\n\twidth: 15px;\n\tcursor: pointer;\n"]))),
                lr = rt.d.div(xn || (xn = Object(nt.a)(["\n\tdisplay: inline-block;\n\tposition: relative;\n\tmargin-left: 10px;\n\theight: auto;\n\ttop: 6px;\n"]))),
                dr = rt.d.img(jn || (jn = Object(nt.a)(["\n\twidth: 8px;\n\theight: 6px;\n\tposition: absolute;\n\ttop: 4px;\n\tleft: 10px;\n"]))),
                ur = rt.d.img(fn || (fn = Object(nt.a)(["\n\twidth: 8px;\n\theight: 6px;\n\tposition: absolute;\n\tbottom: -4px;\n\tleft: 10px;\n"]))),
                br = function(t) {
                    var e = Object(o.useState)(""),
                        n = Object(c.a)(e, 2),
                        r = n[0],
                        i = n[1],
                        s = Object(o.useState)("desc"),
                        l = Object(c.a)(s, 2),
                        d = l[0],
                        u = l[1],
                        b = Object(o.useCallback)((function(t) {
                            return i(t)
                        }), [i]),
                        x = Object(o.useCallback)((function(t) {
                            return u(t)
                        }), [u]),
                        j = Object(o.useRef)(null),
                        m = t.data,
                        h = t.columns,
                        g = Object(it.r)(h, m, {
                            sortable: !0,
                            sortColumn: r
                        }).rows,
                        O = Object(f.j)().spaceMode,
                        v = h.find((function(t) {
                            return t.name === r
                        })),
                        w = function(t, e) {
                            return O ? "up" === e ? "/images/sort_up-space.svg" : "/images/sort_down-space.svg" : r === t && "desc" === d ? "up" === e ? "/images/sort_up_selected.svg" : "/images/sort_down_selected.svg" : "up" === e ? "/images/sort_up.svg" : "/images/sort_down.svg"
                        };
                    return v && (g.sort((function(t, e) {
                        return t.original.farm.label < e.original.farm.label ? -1 : 1
                    })), g.sort((function(t, e) {
                        return "asc" === d ? v.sort(t, e) : v.sort(e, t)
                    }))), Object(at.jsx)(nr, {
                        children: Object(at.jsx)(or, {
                            children: Object(at.jsx)(rr, {
                                ref: j,
                                children: Object(at.jsxs)(ir, {
                                    children: [Object(at.jsx)(cr, {
                                        children: Object(at.jsx)("tr", {
                                            children: h.map((function(t) {
                                                return m[0].platform.type === p.b.STAKE && ["Fees earned (yr.)", "Volume 24H"].includes(t.label) ? Object(at.jsx)("th", {
                                                    children: " "
                                                }, "".concat(t.label, "-").concat(t.name)) : Object(at.jsxs)("th", {
                                                    children: [t.label, "details" !== t.name && Object(at.jsxs)(sr, {
                                                        children: [Object(at.jsx)(dr, {
                                                            onClick: function() {
                                                                b(t.name), x("desc")
                                                            },
                                                            src: w(t.name, "up")
                                                        }), Object(at.jsx)(ur, {
                                                            onClick: function() {
                                                                b(t.name), x("asc")
                                                            },
                                                            src: w(t.name, "down")
                                                        })]
                                                    }), "platform" === t.name && Object(at.jsx)(lr, {
                                                        children: Object(at.jsx)(st, {
                                                            content: Object(at.jsx)("div", {
                                                                children: "Annualized earning base on 24hr trading volume"
                                                            }),
                                                            children: Object(at.jsx)("img", {
                                                                src: "/images/icon-info.svg",
                                                                alt: "icon-info"
                                                            })
                                                        })
                                                    })]
                                                }, "".concat(t.label, "-").concat(t.name))
                                            }))
                                        })
                                    }), Object(at.jsx)(ar, {
                                        children: g.map((function(t) {
                                            return Object(o.createElement)(er, Object(a.a)(Object(a.a)({}, t.original), {}, {
                                                key: "table-row-".concat(t.id)
                                            }))
                                        }))
                                    })]
                                })
                            })
                        })
                    })
                },
                pr = n(908),
                xr = rt.d.svg(mn || (mn = Object(nt.a)([""]))),
                jr = function() {
                    return Object(at.jsxs)(xr, {
                        width: "60",
                        height: "60",
                        viewBox: "0 0 60 60",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [Object(at.jsx)("rect", {
                            width: "60",
                            height: "60",
                            rx: "10",
                            fill: "#202251"
                        }), Object(at.jsx)("path", {
                            d: "M37.0295 22.7917L30.5213 25.6806C30.2482 25.8397 29.9069 25.8397 29.5428 25.6806L23.171 22.7917C20.9636 22.9507 19.166 25.2036 19.166 27.7745C19.166 30.4249 20.9637 32.6778 23.2393 32.7573C23.5807 32.7573 23.9221 32.9959 24.1496 33.2344C24.3544 33.5524 24.4909 33.95 24.4909 34.3741V34.7716C24.4909 38.4027 26.9713 41.2917 30.0889 41.2917C33.2065 41.2917 35.6869 38.4027 35.6869 34.7716V34.2945C35.6186 33.4994 36.1648 32.7573 36.8702 32.6778C39.0776 32.4392 40.7388 30.2659 40.7388 27.695C40.8981 25.2831 39.2369 23.1097 37.0295 22.7917ZM25.0598 31.8297C24.2406 31.8297 23.6034 31.1141 23.6034 30.1334C23.6034 29.1792 24.2178 28.4371 25.0598 28.4371C25.879 28.4371 26.5162 29.1527 26.5162 30.1334C26.4934 31.0875 25.879 31.8297 25.0598 31.8297ZM32.6604 34.321L30.726 35.5403V36.7595C30.726 37.157 30.453 37.5546 30.0434 37.5546C29.702 37.5546 29.3607 37.2365 29.3607 36.7595V35.5403L27.4265 34.321C27.0852 34.0825 27.0168 33.685 27.1533 33.2609C27.3581 32.8633 27.6995 32.7838 28.0636 32.9428L29.9978 34.162L32.0004 32.9428C32.3417 32.7043 32.7514 32.8633 32.9107 33.2609C33.07 33.6054 32.9335 34.0825 32.6604 34.321ZM35.0042 31.8297C34.185 31.8297 33.5479 31.1141 33.5479 30.1334C33.5479 29.1792 34.1622 28.4371 35.0042 28.4371C35.8234 28.4371 36.4606 29.1527 36.4606 30.1334C36.4606 31.0875 35.8462 31.8297 35.0042 31.8297Z",
                            fill: "white"
                        }), Object(at.jsx)("path", {
                            d: "M43.5039 18.6977L33.336 12.907C31.2089 11.6977 28.6376 11.6977 26.5807 12.907L16.4128 18.7674C14.2857 19.9768 13 22.2326 13 24.6279V36.3721C13 38.7674 14.2857 41.0465 16.4128 42.2326L26.5807 48.093C28.7078 49.3023 31.279 49.3023 33.336 48.093L43.5039 42.2326C45.631 41.0233 46.9167 38.7674 46.9167 36.3721V24.6279C46.9167 22.1628 45.631 19.907 43.5039 18.6977ZM38.5251 35.3256C38.1745 39.6977 34.5514 43.1628 30.0635 43.1628C25.5755 43.1628 21.9525 39.7674 21.6019 35.3953C18.3995 34.6977 16.0621 31.7907 16.0621 28.4651C16.0621 24.6512 19.1944 21.4651 23.0278 21.3256C23.2382 21.3256 23.5187 21.3256 23.729 21.4651L29.8998 23.8605L36.4449 21.3954C36.5851 21.3256 36.7253 21.3256 36.8656 21.3256H37.2863C40.9094 21.6744 43.7611 24.7209 43.7611 28.3954C43.7845 31.7209 41.6573 34.4651 38.5251 35.3256Z",
                            fill: "white"
                        })]
                    })
                },
                fr = rt.d.svg(hn || (hn = Object(nt.a)([""]))),
                mr = function() {
                    return Object(at.jsxs)(fr, {
                        width: "60",
                        height: "60",
                        viewBox: "0 0 60 60",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [Object(at.jsx)("rect", {
                            width: "60",
                            height: "60",
                            rx: "10",
                            fill: "#202251"
                        }), Object(at.jsx)("path", {
                            opacity: "0.8",
                            d: "M42.4048 36.3495C42.4048 41.2346 38.3853 45.1947 33.4269 45.1947H16.4688V39.2979H33.4269C35.0797 39.2979 36.4195 37.9779 36.4195 36.3495C36.4195 34.7212 35.0797 33.4011 33.4269 33.4011H27.4417V27.5043H33.4269C35.0797 27.5043 36.4195 26.1843 36.4195 24.5559C36.4195 22.9276 35.0797 21.6075 33.4269 21.6075H16.4688V15.7108H33.4269C38.3853 15.7108 42.4048 19.6709 42.4048 24.5559C42.4048 26.8213 41.5404 28.8878 40.1187 30.4527C41.5404 32.0176 42.4048 34.0841 42.4048 36.3495Z",
                            fill: "white"
                        }), Object(at.jsx)("path", {
                            opacity: "0.12",
                            d: "M16.4688 39.2979H31.0341C27.9402 42.8786 23.0144 45.1947 17.4663 45.1947C17.1314 45.1947 16.7988 45.1863 16.4688 45.1696V39.2979ZM34.0852 33.4011H28.4392V27.5043H34.0852C34.3077 28.457 34.4245 29.443 34.4245 30.4527C34.4245 31.4624 34.3077 32.4485 34.0852 33.4011ZM31.0341 21.6075H16.4688V15.7358C16.7988 15.7192 17.1314 15.7108 17.4663 15.7108C23.0144 15.7108 27.9402 18.0269 31.0341 21.6075Z",
                            fill: "black"
                        }), Object(at.jsx)("path", {
                            d: "M16.4688 15.7108C24.7326 15.7108 31.4318 22.311 31.4318 30.4527C31.4318 38.5945 24.7326 45.1947 16.4688 45.1947V39.2979C21.4271 39.2979 25.4466 35.3378 25.4466 30.4527C25.4466 25.5677 21.4271 21.6075 16.4688 21.6075V15.7108Z",
                            fill: "white"
                        })]
                    })
                },
                hr = rt.d.a(gn || (gn = Object(nt.a)(["\n\theight: 60px;\n\twidth: 60px;\n\n\tbackground-color: #202251;\n\tborder-radius: 10px;\n"]))),
                gr = function(t) {
                    var e = t.to,
                        n = t.className,
                        r = t.children;
                    return Object(at.jsx)(hr, {
                        href: e,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        className: n,
                        children: r
                    })
                },
                Or = rt.d.div(On || (On = Object(nt.a)(["\n\twidth: 100%;\n\tmargin: 60px auto auto;\n\n\t@media (min-width: 768px) {\n\t\twidth: 180px;\n\t\tmargin: auto;\n\t}\n"]))),
                vr = rt.d.h4(vn || (vn = Object(nt.a)(["\n\tfont-size: 15px;\n\tfont-weight: 500;\n\tcolor: var(--color-text-2);\n\ttext-align: center;\n\tmargin-bottom: 18px;\n\n\t@media (min-width: 768px) {\n\t\tfont-size: 18px;\n\t\ttext-align: left;\n\n\t\tmargin-bottom: 15px;\n\t}\n"]))),
                wr = rt.d.div(wn || (wn = Object(nt.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\n\t.portfolio-item {\n\t\tmargin-right: 30px;\n\n\t\t&:last-child {\n\t\t\tmargin-right: 0;\n\t\t}\n\t}\n\n\t@media (min-width: 768px) {\n\t\tjustify-content: flex-start;\n\t}\n"]))),
                yr = function() {
                    var t = Object(m.c)().account,
                        e = t ? "https://apeboard.finance/dashboard/".concat(t, "?chain=BSC") : "https://apeboard.finance/",
                        n = t ? "https://debank.com/profile/".concat(t, "?chain=bsc") : "https://debank.com/";
                    return Object(at.jsxs)(Or, {
                        children: [Object(at.jsx)(vr, {
                            children: "View your portfolio"
                        }), Object(at.jsxs)(wr, {
                            children: [Object(at.jsx)(gr, {
                                to: e,
                                className: "portfolio-item",
                                children: Object(at.jsx)(jr, {})
                            }), Object(at.jsx)(gr, {
                                to: n,
                                className: "portfolio-item",
                                children: Object(at.jsx)(mr, {})
                            })]
                        })]
                    })
                },
                kr = rt.d.div(yn || (yn = Object(nt.a)(["\n\tfilter: ", ";\n\twidth: 100%;\n\tmargin: 0px 0px 42px;\n\tpadding: 0;\n\n\t", " {\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t}\n"])), (function(t) {
                    return t.theme.card.dropShadow
                }), (function(t) {
                    return t.theme.mediaQueries.lg
                })),
                Cr = rt.d.p(kn || (kn = Object(nt.a)(["\n\tfont-size: 15px;\n\tfont-weight: 700;\n\tcolor: var(--color-text);\n\tmargin-bottom: 10px;\n"]))),
                Sr = rt.d.a(Cn || (Cn = Object(nt.a)(["\n\tfont-size: 14px;\n\ttext-decoration: none;\n\tcolor: ", ";\n\tcursor: pointer;\n"])), (function(t) {
                    return t.theme.colors.primary
                })),
                Tr = rt.d.div(Sn || (Sn = Object(nt.a)(["\n\tdisplay: block;\n\tmargin-top: 30px;\n\tposition: relative;\n\n\t& > div:first-child {\n\t\twidth: 100%;\n\t\tposition: relative;\n\t\tbox-shadow: 0px 0px 25px 2px rgba(0, 0, 0, 0.05);\n\t}\n\n\t& > div:last-child {\n\t\twidth: 100%;\n\t\theight: auto;\n\t\tmargin-top: 15px;\n\t}\n\n\t", " {\n\t\tdisplay: flex;\n\t\t& > div:first-child {\n\t\t\twidth: 50%;\n\t\t}\n\t\t& > div:last-child {\n\t\t\twidth: 50%;\n\t\t\theight: 300px;\n\t\t\tmargin-top: 0;\n\t\t}\n\t}\n"])), (function(t) {
                    return t.theme.mediaQueries.lg
                })),
                Ar = function(t) {
                    var e = t.sum,
                        n = t.balance,
                        r = !Object(it.p)().isXl;
                    return Object(at.jsxs)(kr, {
                        children: [Object(at.jsx)(Cr, {
                            children: "Your Reward Summary"
                        }), " ", Object(at.jsxs)(Tr, {
                            children: [" ", Object(at.jsxs)("div", {
                                style: {
                                    boxShadow: "unset"
                                },
                                children: [" ", r ? Object(at.jsx)("img", {
                                    src: "/images/card_earned_super_warden_mobile.svg",
                                    width: "100%",
                                    height: "200px",
                                    alt: "reward"
                                }) : Object(at.jsx)("img", {
                                    src: "/images/card_earned_super_warden.svg",
                                    width: "100%",
                                    height: "auto",
                                    alt: "reward"
                                }), Object(at.jsxs)("div", {
                                    style: {
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: r ? "50%" : "70%",
                                        height: "100%",
                                        display: "grid",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    },
                                    children: [Object(at.jsx)("p", {
                                        style: {
                                            color: "#fff",
                                            fontSize: r ? "14px" : "18px",
                                            alignSelf: "flex-end",
                                            textAlign: "center"
                                        },
                                        children: "WAD earned :"
                                    }), Object(at.jsx)("p", {
                                        style: {
                                            color: "#fff",
                                            fontSize: r ? "24px" : "48px",
                                            fontWeight: "bold",
                                            alignSelf: "flex-start",
                                            marginTop: r ? "15px" : "25px",
                                            textAlign: "center"
                                        },
                                        children: e
                                    })]
                                })]
                            }), Object(at.jsxs)("div", {
                                style: r ? {} : {
                                    alignSelf: "center",
                                    fontSize: "18px",
                                    color: "rgb(32, 34, 81)",
                                    textAlign: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center"
                                },
                                children: [Object(at.jsx)("p", {
                                    style: {
                                        alignSelf: "center",
                                        fontSize: r ? "14px" : "18px",
                                        color: "var(--color-text-2)",
                                        textAlign: "center"
                                    },
                                    children: "Your WAD wallet balance :"
                                }), Object(at.jsxs)("div", {
                                    style: {
                                        margin: r ? "20px 0" : "10px 0",
                                        alignSelf: "center",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "var(--color-text)",
                                        display: "flex",
                                        fontSize: r ? "24px" : "48px",
                                        fontWeight: "bold"
                                    },
                                    children: [n, Object(at.jsx)("div", {
                                        style: {
                                            width: "25px",
                                            height: "25px",
                                            borderRadius: "25px",
                                            marginLeft: "17px",
                                            background: "#FFB703",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        },
                                        children: Object(at.jsx)(Sr, {
                                            onClick: function() {
                                                return Object(pr.a)("0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc", "WAD", 18, "https://image.wardenswap.finance/WAD-Token.png")
                                            },
                                            children: Object(at.jsx)("img", {
                                                src: "/images/plus.png",
                                                width: "11px",
                                                height: "11px",
                                                alt: "plus"
                                            })
                                        })
                                    })]
                                }), Object(at.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        alignSelf: "center",
                                        justifyContent: "center"
                                    },
                                    children: [Object(at.jsx)("p", {
                                        style: {
                                            alignSelf: "flex-end",
                                            fontSize: r ? "12px" : "14px",
                                            color: "var(--color-text-navbar-disabled)"
                                        },
                                        children: "Warden Tokens"
                                    }), Object(at.jsx)("a", {
                                        href: "https://medium.com/wardenofficial/warden-tokens-wad-7e5216ba15c6",
                                        children: Object(at.jsx)("p", {
                                            style: {
                                                alignSelf: "flex-end",
                                                fontSize: r ? "12px" : "14px",
                                                color: "#23B0FF",
                                                marginLeft: "7px"
                                            },
                                            children: "Detail here"
                                        })
                                    })]
                                }), Object(at.jsx)(yr, {})]
                            })]
                        })]
                    })
                },
                Qr = n(881),
                zr = n(958),
                Nr = n(959),
                Lr = rt.d.div(Tn || (Tn = Object(nt.a)(["\n\tmax-width: 960px;\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\n\tmargin: 40px 0 24px;\n\n\t@media only screen and (max-width: 768px) {\n\t\tjustify-content: center;\n\t}\n"]))),
                Fr = rt.d.div(An || (An = Object(nt.a)([""]))),
                Hr = rt.d.div(Qn || (Qn = Object(nt.a)(["\n\tfont-size: 20px;\n\tfont-weight: bold;\n\tcolor: var(--color-text);\n\n\tmargin-left: 12px;\n\n\t@media only screen and (max-width: 768px) {\n\t\tfont-size: 17px;\n\t}\n"]))),
                qr = function(t) {
                    var e = t.children,
                        n = t.name;
                    return Object(at.jsxs)(Lr, {
                        children: [Object(at.jsx)(Fr, {
                            children: e
                        }), Object(at.jsx)(Hr, {
                            children: n
                        })]
                    })
                },
                Vr = (n(1010), function() {
                    Object(x.f)().pathname;
                    var t = Object(f.b)(),
                        e = Object(f.g)(),
                        n = Object(f.f)(),
                        r = Object(f.j)().spaceMode,
                        s = Object(f.h)(),
                        d = Object(m.c)().account,
                        v = function() {
                            var t = Object(o.useState)(null),
                                e = Object(c.a)(t, 2),
                                n = e[0],
                                r = e[1];
                            return Object(o.useEffect)((function() {
                                ! function() {
                                    var t = Object(y.a)(w.a.mark((function t() {
                                        var e, n;
                                        return w.a.wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.prev = 0, t.next = 3, fetch("".concat("https://storage.googleapis.com/warden-pools-statistics", "/fees.json"));
                                                case 3:
                                                    return e = t.sent, t.next = 6, e.json();
                                                case 6:
                                                    n = t.sent, r(n), t.next = 13;
                                                    break;
                                                case 10:
                                                    t.prev = 10, t.t0 = t.catch(0), console.error("Unable to fetch data:", t.t0);
                                                case 13:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t, null, [
                                            [0, 10]
                                        ])
                                    })));
                                    return function() {
                                        return t.apply(this, arguments)
                                    }
                                }()()
                            }), [r]), n
                        }(),
                        S = function() {
                            var t = Object(o.useState)(null),
                                e = Object(c.a)(t, 2),
                                n = e[0],
                                r = e[1];
                            return Object(o.useEffect)((function() {
                                ! function() {
                                    var t = Object(y.a)(w.a.mark((function t() {
                                        var e, n;
                                        return w.a.wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.prev = 0, t.next = 3, fetch("".concat("https://storage.googleapis.com/warden-pools-statistics", "/day-volume.json"));
                                                case 3:
                                                    return e = t.sent, t.next = 6, e.json();
                                                case 6:
                                                    n = t.sent, r(n), t.next = 13;
                                                    break;
                                                case 10:
                                                    t.prev = 10, t.t0 = t.catch(0), console.error("Unable to fetch data:", t.t0);
                                                case 13:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t, null, [
                                            [0, 10]
                                        ])
                                    })));
                                    return function() {
                                        return t.apply(this, arguments)
                                    }
                                }()()
                            }), [r]), n
                        }(),
                        A = Object(o.useState)(""),
                        Q = Object(c.a)(A, 2),
                        z = (Q[0], Q[1], Object(o.useState)("")),
                        N = Object(c.a)(z, 2),
                        L = N[0],
                        F = (N[1], Object(o.useState)(!1)),
                        H = Object(c.a)(F, 2),
                        q = H[0],
                        V = (H[1], Object(j.b)()),
                        E = Object(l.a)().fastRefresh;
                    Object(o.useEffect)((function() {
                        d && V(Object(h.b)(d))
                    }), [d, V, E]);
                    var P = t.filter((function(t) {
                            return t.poolType === p.b.LP
                        })),
                        I = (t.filter((function(t) {
                            return t.poolType === p.b.LP && "0X" === t.multiplier
                        })), t.filter((function(t) {
                            return t.poolType === p.b.LP_PANCAKE
                        }))),
                        D = t.filter((function(t) {
                            return t.poolType === p.b.STAKE
                        })),
                        B = P.filter((function(t) {
                            return t.userData && new u.a(t.userData.stakedBalance).isGreaterThan(0)
                        })),
                        M = Object(o.useCallback)((function(r, i, c) {
                            var o, l = new u.a((null === (o = t.find((function(t) {
                                    return t.pid === b.d
                                }))) || void 0 === o ? void 0 : o.tokenPriceVsQuote) || 0),
                                d = r.map((function(t) {
                                    if (!t.tokenAmount || !t.lpTotalInQuoteToken) return t;
                                    var r = b.c.times(t.poolWeight),
                                        o = r.times(b.b),
                                        d = l.times(o).div(t.lpTotalInQuoteToken);
                                    if (t.quoteTokenSymbol === p.c.BUSD || t.quoteTokenSymbol === p.c.UST || t.quoteTokenSymbol === p.c.USDT) d = l.times(o).div(t.lpTotalInQuoteToken).times(n);
                                    else if (t.quoteTokenSymbol === p.c.ETH) d = e.div(s).times(o).div(t.lpTotalInQuoteToken);
                                    else if (t.quoteTokenSymbol === p.c.CAKE) d = o.div(t.lpTotalInQuoteToken);
                                    else if (t.dual) {
                                        var x = t && l.times(r).times(b.b).div(t.lpTotalInQuoteToken),
                                            j = t.tokenPriceVsQuote && new u.a(t.tokenPriceVsQuote).times(t.dual.rewardPerBlock).times(b.b).div(t.lpTotalInQuoteToken);
                                        d = x && j && x.plus(j)
                                    }
                                    var f, m, h = t.lpTotalInQuoteToken;
                                    if (t.lpTotalInQuoteToken || (h = null), t.quoteTokenSymbol === p.c.BNB && (h = n.times(t.lpTotalInQuoteToken)), t.quoteTokenSymbol === p.c.CAKE && (h = e.times(t.lpTotalInQuoteToken)), t.quoteTokenSymbol === p.c.ETH && (h = s.times(t.lpTotalInQuoteToken)), i && Reflect.ownKeys(i).length) {
                                        var g, O = null !== (g = i[t.lpAddresses[56]]) && void 0 !== g ? g : void 0;
                                        O && (f = new u.a(null === O || void 0 === O ? void 0 : O.yearly).div(100).toFixed(2))
                                    }
                                    if (c && Reflect.ownKeys(c).length) {
                                        var v, w = null !== (v = c[t.lpAddresses[56]]) && void 0 !== v ? v : void 0;
                                        w && (m = new u.a(null === w || void 0 === w ? void 0 : w.day).toFixed(2))
                                    }
                                    return Object(a.a)(Object(a.a)({}, t), {}, {
                                        apy: d,
                                        liquidity: h,
                                        percentageFee: f,
                                        dayTradeVolume: m
                                    })
                                }));
                            if (L) {
                                var x = L.toLowerCase();
                                d = d.filter((function(t) {
                                    return !!t.lpSymbol.toLowerCase().includes(x)
                                }))
                            }
                            return d
                        }), [n, t, L, e, s]),
                        W = [],
                        _ = [];
                    W = M(q ? B : P, v, S), _ = M(I, v, S);
                    var U = M(D, v, S).map((function(t) {
                            t.quoteTokenAdresses, t.quoteTokenSymbol, t.tokenAddresses;
                            var e = t.poolType,
                                n = t.dayTradeVolume;
                            return {
                                farm: {
                                    label: t.lpSymbol && t.lpSymbol.split(" ")[0].toUpperCase().replace("PANCAKE", ""),
                                    pid: t.pid,
                                    multiplier: t.multiplier
                                },
                                earned: {
                                    earnings: t.userData ? Object(k.a)(new u.a(t.userData.earnings)) : null,
                                    pid: t.pid
                                },
                                liquidity: {
                                    liquidity: t.liquidity
                                },
                                multiplier: {
                                    multiplier: t.multiplier
                                },
                                details: Object(a.a)(Object(a.a)({}, t), {}, {
                                    poolType: e
                                }),
                                platform: {
                                    type: e
                                },
                                dayTradeVolume: n
                            }
                        })),
                        K = function(t) {
                            t.quoteTokenAdresses, t.quoteTokenSymbol, t.tokenAddresses;
                            var e = t.dayTradeVolume;
                            return {
                                farm: {
                                    label: t.lpSymbol && t.lpSymbol.split(" ")[0].toUpperCase().replace("PANCAKE", ""),
                                    pid: t.pid,
                                    multiplier: t.multiplier
                                },
                                earned: {
                                    earnings: t.userData ? Object(k.a)(new u.a(t.userData.earnings)) : null,
                                    pid: t.pid
                                },
                                liquidity: {
                                    liquidity: t.liquidity
                                },
                                multiplier: {
                                    multiplier: t.multiplier
                                },
                                details: Object(a.a)(Object(a.a)({}, t), {}, {
                                    poolType: t.poolType
                                }),
                                platform: Object.assign({
                                    type: t.poolType
                                }, (null === t || void 0 === t ? void 0 : t.percentageFee) && void 0 !== (null === t || void 0 === t ? void 0 : t.percentageFee) ? {
                                    percentageFee: t.percentageFee
                                } : null),
                                dayTradeVolume: e
                            }
                        },
                        R = W.map(K),
                        Z = _.map(K),
                        X = T.map((function(t) {
                            return {
                                id: t.id,
                                name: t.name,
                                label: t.label,
                                sort: function(e, n) {
                                    var r, i, a = e.original.farm.multiplier ? e.original.farm.multiplier : "",
                                        c = n.original.farm.multiplier ? n.original.farm.multiplier : "";
                                    switch (t.name) {
                                        case "farm":
                                            return Number(a.substring(0, a.length - 1)) - Number(c.substring(0, c.length - 1));
                                        case "earned":
                                            return e.original.earned.earnings - n.original.earned.earnings;
                                        case "liquidity":
                                            return Number(e.original.liquidity.liquidity) - Number(n.original.liquidity.liquidity);
                                        case "platform":
                                            return Number(null === (r = e.original.platform) || void 0 === r ? void 0 : r.percentageFee) - Number(null === (i = n.original.platform) || void 0 === i ? void 0 : i.percentageFee);
                                        case "dayTradeVolume":
                                            return Number(e.original.dayTradeVolume) - Number(n.original.dayTradeVolume);
                                        default:
                                            return 1
                                    }
                                },
                                sortable: t.sortable
                            }
                        })),
                        J = 0;
                    [].concat(Object(i.a)(R), Object(i.a)(Z)).map((function(t) {
                        return J += t.earned && t.earned.earnings ? t.earned.earnings : 0, !0
                    })), U.map((function(t) {
                        return J += t.earned && t.earned.earnings ? t.earned.earnings : 0, !0
                    }));
                    var $ = Object(k.a)(Object(O.b)(Object(C.l)()));
                    return Object(at.jsxs)("div", {
                        id: "app",
                        className: "main-app",
                        children: [Object(at.jsx)(g.Toast, {
                            position: "top-right"
                        }), Object(at.jsx)(zr.a, {
                            menu: "farm",
                            sum: J,
                            balance: $
                        }), Object(at.jsx)(Nr.a, {
                            sum: J,
                            balance: $,
                            isCorrectNetwork: !0
                        }), Object(at.jsx)("div", {
                            className: "main-container",
                            children: Object(at.jsxs)("div", {
                                className: "best-rate-swap-container",
                                children: [Object(at.jsx)("div", {
                                    className: "best-rate-swap-box mb-6",
                                    children: Object(at.jsx)(Ar, {
                                        sum: J.toLocaleString(),
                                        balance: $.toLocaleString()
                                    })
                                }), Object(at.jsx)(qr, {
                                    name: "Warden Stake LPs",
                                    children: Object(at.jsx)("img", {
                                        src: r ? "/images/warden/warden-pool-space.svg" : "/images/warden/warden-pool.svg",
                                        alt: "warden-stake"
                                    })
                                }), Object(at.jsx)("div", {
                                    className: "table-box mb-6",
                                    children: function() {
                                        var t = [];
                                        return X.forEach((function(e) {
                                            return t.push(JSON.parse(JSON.stringify(e)))
                                        })), t[0].label = "Tokens Names", Object(at.jsx)(br, {
                                            data: U,
                                            columns: t
                                        })
                                    }()
                                }), Object(at.jsx)("div", {
                                    className: "table-box mb-6",
                                    children: Object(at.jsx)(br, {
                                        data: R,
                                        columns: X
                                    })
                                }), Object(at.jsx)(qr, {
                                    name: "Pancake Stake LP",
                                    children: Object(at.jsx)("img", {
                                        src: "/images/warden/pancake-pool.svg",
                                        alt: "pancake-stake"
                                    })
                                }), Object(at.jsx)("div", {
                                    className: "table-box mb-6",
                                    children: Object(at.jsx)(br, {
                                        data: Z,
                                        columns: X
                                    })
                                }), Object(at.jsx)("div", {
                                    className: "bottom-animation",
                                    children: Object(at.jsx)("img", {
                                        src: "/images/partner_link_animate.svg",
                                        style: {
                                            height: "auto",
                                            width: "100%"
                                        },
                                        alt: "animate"
                                    })
                                })]
                            })
                        }), Object(at.jsxs)("div", {
                            className: "footer-container",
                            children: [Object(at.jsx)("div", {
                                className: "md-max:hidden",
                                children: Object(at.jsx)(Qr.a, {})
                            }), Object(at.jsx)("div", {
                                className: "flex space-x-3 md-max:flex-col md-max:items-center md-max:space-x-0 md-max:space-y-4",
                                children: Object(at.jsxs)("div", {
                                    className: "flex",
                                    children: [Object(at.jsxs)("div", {
                                        className: "flex items-center flex-none mr-3",
                                        children: [Object(at.jsx)("img", {
                                            className: "float-left",
                                            src: "/images/icon-pass-audit.svg",
                                            alt: "icon"
                                        }), Object(at.jsx)("span", {
                                            className: "whitespace-no-wrap",
                                            children: "Audited by"
                                        })]
                                    }), Object(at.jsx)("img", {
                                        className: "float-left",
                                        src: "/images/icon-certik".concat(r ? "-space" : "", ".svg"),
                                        alt: "icon"
                                    })]
                                })
                            })]
                        })]
                    })
                })
        }
    }
]);
//# sourceMappingURL=7.8d6586f2.chunk.js.map