(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [2], {
        104: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            })), n.d(t, "c", (function() {
                return r
            })), n.d(t, "b", (function() {
                return p
            })), n.d(t, "d", (function() {
                return o
            }));
            var a = "mute",
                i = "theme",
                u = n(84);

            function s() {
                var e = localStorage.getItem(a);
                return (e = JSON.parse(e)) || !1
            }

            function r() {
                var e = !s();
                localStorage.setItem(a, JSON.stringify(e))
            }

            function p() {
                var e = localStorage.getItem(i);
                return (e = JSON.parse(e)) || u.a.LIGHT_MODE
            }

            function o() {
                var e = p();
                e = e === u.a.LIGHT_MODE ? u.a.SPACE_MODE : u.a.LIGHT_MODE, localStorage.setItem(i, JSON.stringify(e))
            }
        },
        141: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return s
            })), n.d(t, "b", (function() {
                return r
            }));
            var a = n(38),
                i = Object(a.c)({
                    name: "Setting",
                    initialState: {
                        spaceMode: !1,
                        muteMode: !1
                    },
                    reducers: {
                        setSpaceMode: function(e, t) {
                            var n = t.payload;
                            e.spaceMode = n
                        },
                        setMuteMode: function(e, t) {
                            var n = t.payload;
                            e.muteMode = n
                        }
                    }
                }),
                u = i.actions,
                s = u.setSpaceMode,
                r = u.setMuteMode;
            t.a = i.reducer
        },
        142: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return I
            })), n.d(t, "b", (function() {
                return E
            }));
            var a = n(4),
                i = n.n(a),
                u = n(12),
                s = n(13),
                r = n(50),
                p = n(38),
                o = n(62),
                d = n(22),
                y = n(35),
                c = n(14),
                l = n.n(c),
                m = n(63),
                f = n(83),
                b = n(41),
                T = n(18),
                v = function() {
                    var e = Object(u.a)(i.a.mark((function e() {
                        var t;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Promise.all(o.a.map(function() {
                                        var e = Object(u.a)(i.a.mark((function e(t) {
                                            var n, a, u, r, p, o, d, c, v, w, g, O, h, x, j, k, A, M, _, I;
                                            return i.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return n = Object(T.a)(t.lpAddresses), a = [{
                                                            address: Object(T.a)(t.tokenAddresses),
                                                            name: "balanceOf",
                                                            params: [n]
                                                        }, {
                                                            address: Object(T.a)(t.quoteTokenAdresses),
                                                            name: "balanceOf",
                                                            params: [n]
                                                        }, {
                                                            address: n,
                                                            name: "balanceOf",
                                                            params: [Object(T.g)()]
                                                        }, {
                                                            address: n,
                                                            name: "totalSupply"
                                                        }, {
                                                            address: Object(T.a)(t.tokenAddresses),
                                                            name: "decimals"
                                                        }, {
                                                            address: Object(T.a)(t.quoteTokenAdresses),
                                                            name: "decimals"
                                                        }], e.next = 4, Object(b.a)(m, a);
                                                    case 4:
                                                        return u = e.sent, r = Object(y.a)(u, 6), p = r[0], o = r[1], d = r[2], c = r[3], v = r[4], w = r[5], g = new l.a(d).div(new l.a(c)), O = n === Object(T.l)() ? new l.a(d).div(new l.a(10).pow(18)) : new l.a(o).div(new l.a(10).pow(18)).times(new l.a(2)).times(g), h = new l.a(p).div(new l.a(10).pow(v)).times(g), x = new l.a(o).div(new l.a(10).pow(w)).times(g), e.next = 18, Object(b.a)(f, [{
                                                            address: Object(T.g)(),
                                                            name: "poolInfo",
                                                            params: [t.pid]
                                                        }, {
                                                            address: Object(T.g)(),
                                                            name: "totalAllocPoint"
                                                        }]);
                                                    case 18:
                                                        return j = e.sent, k = Object(y.a)(j, 2), A = k[0], M = k[1], _ = new l.a(A.allocPoint._hex), I = _.div(new l.a(M)), e.abrupt("return", Object(s.a)(Object(s.a)({}, t), {}, {
                                                            tokenAmount: h.toJSON(),
                                                            quoteTokenAmount: x.toJSON(),
                                                            lpTotalInQuoteToken: O.toJSON(),
                                                            tokenPriceVsQuote: x.div(h).toJSON(),
                                                            poolWeight: I.toJSON(),
                                                            multiplier: "".concat(_.div(100).toString(), "X")
                                                        }));
                                                    case 25:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                w = function() {
                    var e = Object(u.a)(i.a.mark((function e() {
                        var t, n;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = [{
                                        pid: 999,
                                        lpSymbol: "WAD-BNB LP",
                                        lpAddresses: {
                                            97: "",
                                            56: "0xf70a40749006c7952186666c92f32b8f5c2129f9"
                                        },
                                        tokenSymbol: "WAD",
                                        tokenAddresses: {
                                            97: "",
                                            56: "0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc"
                                        },
                                        quoteTokenSymbol: d.c.BNB,
                                        quoteTokenAdresses: {
                                            56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
                                        },
                                        poolType: "LP_PANCAKE"
                                    }], e.next = 3, Promise.all(t.map(function() {
                                        var e = Object(u.a)(i.a.mark((function e(t) {
                                            var n, a, u, r, p, o, d, c, f, v, w;
                                            return i.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return n = Object(T.a)(t.lpAddresses), a = [{
                                                            address: Object(T.a)(t.tokenAddresses),
                                                            name: "balanceOf",
                                                            params: [n]
                                                        }, {
                                                            address: Object(T.a)(t.quoteTokenAdresses),
                                                            name: "balanceOf",
                                                            params: [n]
                                                        }, {
                                                            address: n,
                                                            name: "totalSupply"
                                                        }, {
                                                            address: Object(T.a)(t.tokenAddresses),
                                                            name: "decimals"
                                                        }, {
                                                            address: Object(T.a)(t.quoteTokenAdresses),
                                                            name: "decimals"
                                                        }], e.next = 4, Object(b.a)(m, a);
                                                    case 4:
                                                        return u = e.sent, r = Object(y.a)(u, 5), p = r[0], o = r[1], r[2], d = r[3], c = r[4], f = new l.a(p).div(new l.a(10).pow(d)), v = new l.a(o).div(new l.a(10).pow(c)), w = new l.a(o).div(new l.a(10).pow(18)).times(new l.a(2)), e.abrupt("return", Object(s.a)(Object(s.a)({}, t), {}, {
                                                            tokenAmount: f.toJSON(),
                                                            quoteTokenAmount: v.toJSON(),
                                                            lpTotalInQuoteToken: w.toJSON(),
                                                            tokenPriceVsQuote: v.div(f).toJSON(),
                                                            poolWeight: "0",
                                                            multiplier: "0X"
                                                        }));
                                                    case 15:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 3:
                                    return n = e.sent, e.abrupt("return", n);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                g = function() {
                    var e = Object(u.a)(i.a.mark((function e(t) {
                        var n, a, u, s;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Object(T.g)(), a = o.a.map((function(e) {
                                        return {
                                            address: Object(T.a)(e.lpAddresses),
                                            name: "allowance",
                                            params: [t, n]
                                        }
                                    })), e.next = 4, Object(b.a)(m, a);
                                case 4:
                                    return u = e.sent, s = u.map((function(e) {
                                        return new l.a(e).toJSON()
                                    })), e.abrupt("return", s);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                O = function() {
                    var e = Object(u.a)(i.a.mark((function e(t) {
                        var n, a, u;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = o.a.map((function(e) {
                                        return {
                                            address: Object(T.a)(e.lpAddresses),
                                            name: "balanceOf",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(b.a)(m, n);
                                case 3:
                                    return a = e.sent, u = a.map((function(e) {
                                        return new l.a(e).toJSON()
                                    })), e.abrupt("return", u);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                h = function() {
                    var e = Object(u.a)(i.a.mark((function e(t) {
                        var n, a, u, s;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Object(T.g)(), a = o.a.map((function(e) {
                                        return {
                                            address: n,
                                            name: "userInfo",
                                            params: [e.pid, t]
                                        }
                                    })), e.next = 4, Object(b.a)(f, a);
                                case 4:
                                    return u = e.sent, s = u.map((function(e) {
                                        return new l.a(e[0]._hex).toJSON()
                                    })), e.abrupt("return", s);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                x = function() {
                    var e = Object(u.a)(i.a.mark((function e(t) {
                        var n, a, u, s;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Object(T.g)(), a = o.a.map((function(e) {
                                        return {
                                            address: n,
                                            name: "pendingWarden",
                                            params: [e.pid, t]
                                        }
                                    })), e.next = 4, Object(b.a)(f, a);
                                case 4:
                                    return u = e.sent, s = u.map((function(e) {
                                        return new l.a(e).toJSON()
                                    })), e.abrupt("return", s);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                j = {
                    data: [].concat(Object(r.a)(o.a), [{
                        pid: 999,
                        lpSymbol: "WAD-BNB LP",
                        lpAddresses: {
                            97: "",
                            56: "0xf70a40749006c7952186666c92f32b8f5c2129f9"
                        },
                        tokenSymbol: "WAD",
                        tokenAddresses: {
                            97: "",
                            56: "0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc"
                        },
                        quoteTokenSymbol: d.c.BNB,
                        quoteTokenAdresses: {
                            56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
                        },
                        poolType: d.b.LP_PANCAKE
                    }])
                },
                k = Object(p.c)({
                    name: "Farms",
                    initialState: j,
                    reducers: {
                        setFarmsPublicData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) {
                                var t = n.find((function(t) {
                                    return t.pid === e.pid
                                }));
                                return Object(s.a)(Object(s.a)({}, e), t)
                            }))
                        },
                        setFarmUserData: function(e, t) {
                            t.payload.arrayOfUserDataObjects.forEach((function(t) {
                                var n = t.index;
                                e.data[n] = Object(s.a)(Object(s.a)({}, e.data[n]), {}, {
                                    userData: t
                                })
                            }))
                        }
                    }
                }),
                A = k.actions,
                M = A.setFarmsPublicData,
                _ = A.setFarmUserData,
                I = function() {
                    return function() {
                        var e = Object(u.a)(i.a.mark((function e(t) {
                            var n, a, u;
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, v();
                                    case 2:
                                        return n = e.sent, e.next = 5, w();
                                    case 5:
                                        a = e.sent, u = [].concat(Object(r.a)(n), Object(r.a)(a)), t(M(u));
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                E = function(e) {
                    return function() {
                        var t = Object(u.a)(i.a.mark((function t(n) {
                            var a, u, s, r, p;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, g(e);
                                    case 2:
                                        return a = t.sent, t.next = 5, O(e);
                                    case 5:
                                        return u = t.sent, t.next = 8, h(e);
                                    case 8:
                                        return s = t.sent, t.next = 11, x(e);
                                    case 11:
                                        r = t.sent, p = a.map((function(e, t) {
                                            return {
                                                index: t,
                                                allowance: a[t],
                                                tokenBalance: u[t],
                                                stakedBalance: s[t],
                                                earnings: r[t]
                                            }
                                        })), n(_({
                                            arrayOfUserDataObjects: p
                                        }));
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                };
            t.a = k.reducer
        },
        145: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return m
            })), n.d(t, "b", (function() {
                return f
            }));
            var a = n(29),
                i = n(13),
                u = n(4),
                s = n.n(u),
                r = n(12),
                p = n(226),
                o = n.n(p),
                d = n(146),
                y = n(82),
                c = n(173),
                l = Object(y.k)(),
                m = function() {
                    var e = Object(r.a)(s.a.mark((function e(t) {
                        var n, a, i, u, r, p;
                        return s.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, l.methods.getTeamProfile(t).call();
                                case 3:
                                    return n = e.sent, a = n[0], i = n[2], u = n[3], r = n[4], p = d.a.find((function(e) {
                                        return e.id === t
                                    })), e.abrupt("return", o()({}, p, {
                                        isJoinable: r,
                                        name: a,
                                        users: i,
                                        points: u
                                    }));
                                case 12:
                                    return e.prev = 12, e.t0 = e.catch(0), e.abrupt("return", null);
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 12]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                f = function() {
                    var e = Object(r.a)(s.a.mark((function e() {
                        var t, n, u, r, p, y;
                        return s.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, t = d.a.reduce((function(e, t) {
                                        return Object(i.a)(Object(i.a)({}, e), {}, Object(a.a)({}, t.id, t))
                                    }), {}), e.next = 4, l.methods.numberTeams().call();
                                case 4:
                                    for (n = e.sent, u = [], r = 1; r <= n; r++) u.push(l.methods.getTeamProfile(r).call);
                                    return e.next = 9, Object(c.a)(u);
                                case 9:
                                    return p = e.sent, y = p.reduce((function(e, t, n) {
                                        var u = t[0],
                                            s = t[2],
                                            r = t[3],
                                            p = t[4];
                                        return Object(i.a)(Object(i.a)({}, e), {}, Object(a.a)({}, n + 1, {
                                            name: u,
                                            users: Number(s),
                                            points: Number(r),
                                            isJoinable: p
                                        }))
                                    }), {}), e.abrupt("return", o()({}, t, y));
                                case 14:
                                    return e.prev = 14, e.t0 = e.catch(0), e.abrupt("return", null);
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 14]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
        },
        146: function(e, t, n) {
            "use strict";
            t.a = [{
                id: 1,
                name: "Syrup Storm",
                description: "The storm's a-comin! Watch out! These bulls are stampeding in a syrupy surge!",
                images: {
                    lg: "syrup-storm-lg.png",
                    md: "syrup-storm-md.png",
                    sm: "syrup-storm-sm.png",
                    alt: "syrup-storm-alt.png",
                    ipfs: "https://gateway.pinata.cloud/ipfs/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/syrup-storm.png"
                },
                background: "syrup-storm-bg.svg",
                textColor: "#191326",
                users: 0,
                points: 0
            }, {
                id: 2,
                name: "Fearsome Flippers",
                description: "The flippening is coming. Don't get in these bunnies' way, or you'll get flipped too!",
                images: {
                    lg: "fearsome-flippers-lg.png",
                    md: "fearsome-flippers-md.png",
                    sm: "fearsome-flippers-sm.png",
                    alt: "fearsome-flippers-alt.png",
                    ipfs: "https://gateway.pinata.cloud/ipfs/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/fearsome-flippers.png"
                },
                background: "fearsome-flippers-bg.svg",
                textColor: "#FFFFFF",
                users: 0,
                points: 0
            }, {
                id: 3,
                name: "Chaotic Cakers",
                description: "Can you stand the heat? Stay out of the kitchen or you might get burned to a crisp!",
                images: {
                    lg: "chaotic-cakers-lg.png",
                    md: "chaotic-cakers-md.png",
                    sm: "chaotic-cakers-sm.png",
                    alt: "chaotic-cakers-alt.png",
                    ipfs: "https://gateway.pinata.cloud/ipfs/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/chaotic-cakers.png"
                },
                background: "chaotic-cakers-bg.svg",
                textColor: "#191326",
                users: 0,
                points: 0
            }]
        },
        147: function(e, t, n) {
            "use strict";
            t.a = [{
                name: "Bullish",
                description: "Happy Niu Year! This bunny\u2019s excited for the year of the bull (market!)",
                images: {
                    lg: "bullish-lg.png",
                    md: "bullish-md.png",
                    sm: "bullish-sm.png",
                    ipfs: "https://gateway.pinata.cloud/ipfs/QmNS1A5HsRW1JvFWtGkm4o9TgZVe2P7kA8TB4yxvS6A7ms/bullish.png"
                },
                video: {
                    webm: "https://gateway.pinata.cloud/ipfs/QmNS1A5HsRW1JvFWtGkm4o9TgZVe2P7kA8TB4yxvS6A7ms/bullish.webm",
                    mp4: "https://gateway.pinata.cloud/ipfs/QmNS1A5HsRW1JvFWtGkm4o9TgZVe2P7kA8TB4yxvS6A7ms/bullish.mp4"
                },
                sortOrder: 999,
                bunnyId: 11
            }, {
                name: "Hiccup",
                description: "Oopsie daisy! Hiccup's had a bit of an accident. Poor little fella.",
                images: {
                    lg: "hiccup-lg.png",
                    md: "hiccup-md.png",
                    sm: "hiccup-sm.png",
                    ipfs: "https://gateway.pinata.cloud/ipfs/QmQ6EE6gkVzAQUdQLLM7CyrnME6LZHCoy92ZERW8HXmyjw/hiccup.png"
                },
                sortOrder: 999,
                bunnyId: 10
            }, {
                name: "Sleepy",
                description: "Aww, looks like eating pancakes all day is tough work. Sweet dreams!",
                images: {
                    lg: "sleepy-lg.png",
                    md: "sleepy-md.png",
                    sm: "sleepy-sm.png",
                    ipfs: "https://gateway.pinata.cloud/ipfs/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/sleepy.png",
                    blur: "sleepy-blur.png"
                },
                sortOrder: 999,
                bunnyId: 5
            }, {
                name: "Sunny",
                description: "Sunny is always cheerful when there are pancakes around. Smile!",
                images: {
                    lg: "sunny-lg.png",
                    md: "sunny-md.png",
                    sm: "sunny-sm.png",
                    ipfs: "https://gateway.pinata.cloud/ipfs/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/sunny.png",
                    blur: "sunny-blur.png"
                },
                sortOrder: 999,
                bunnyId: 9
            }, {
                name: "Churro",
                description: "Don't let that dopey smile deceive you... Churro's a master CAKE chef!",
                images: {
                    lg: "churro-lg.png",
                    md: "churro-md.png",
                    sm: "churro-sm.png",
                    ipfs: "https://gateway.pinata.cloud/ipfs/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/churro.png",
                    blur: "churro-blur.png"
                },
                sortOrder: 999,
                bunnyId: 8
            }, {
                name: "Dollop",
                description: "Nommm... Oh hi, I'm just meditating on the meaning of CAKE.",
                images: {
                    lg: "dollop-lg.png",
                    md: "dollop-md.png",
                    sm: "dollop-sm.png",
                    ipfs: "https://gateway.pinata.cloud/ipfs/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/dollop.png",
                    blur: "dollop-blur.png"
                },
                sortOrder: 999,
                bunnyId: 6
            }, {
                name: "Twinkle",
                description: "Three guesses what's put that twinkle in those eyes! (Hint: it's CAKE)",
                images: {
                    lg: "twinkle-lg.png",
                    md: "twinkle-md.png",
                    sm: "twinkle-sm.png",
                    ipfs: "https://gateway.pinata.cloud/ipfs/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/twinkle.png",
                    blur: "twinkle-blur.png"
                },
                sortOrder: 999,
                bunnyId: 7
            }, {
                name: "Swapsies",
                description: "These bunnies love nothing more than swapping pancakes. Especially on BSC.",
                images: {
                    lg: "swapsies-lg.png",
                    md: "swapsies-md.png",
                    sm: "swapsies-sm.png",
                    ipfs: "https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/swapsies.png",
                    blur: "swapsies-blur.png"
                },
                sortOrder: 999,
                bunnyId: 0
            }, {
                name: "Drizzle",
                description: "It's raining syrup on this bunny, but he doesn't seem to mind. Can you blame him?",
                images: {
                    lg: "drizzle-lg.png",
                    md: "drizzle-md.png",
                    sm: "drizzle-sm.png",
                    ipfs: "https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/drizzle.png",
                    blur: "drizzle-blur.png"
                },
                sortOrder: 999,
                bunnyId: 1
            }, {
                name: "Blueberries",
                description: "These bunnies like their pancakes with blueberries. What's your favorite topping?",
                images: {
                    lg: "blueberries-lg.png",
                    md: "blueberries-md.png",
                    sm: "blueberries-sm.png",
                    ipfs: "https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/blueberries.png",
                    blur: "blueberries-blur.png"
                },
                sortOrder: 999,
                bunnyId: 2
            }, {
                name: "Circular",
                description: "Love makes the world go 'round... but so do pancakes. And these bunnies know it.",
                images: {
                    lg: "circular-lg.png",
                    md: "circular-md.png",
                    sm: "circular-sm.png",
                    ipfs: "https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/circular.png",
                    blur: "circular-blur.png"
                },
                sortOrder: 999,
                bunnyId: 3
            }, {
                name: "Sparkle",
                description: "It\u2019s sparkling syrup, pancakes, and even lottery tickets! This bunny really loves it.",
                images: {
                    lg: "sparkle-lg.png",
                    md: "sparkle-md.png",
                    sm: "sparkle-sm.png",
                    ipfs: "https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/sparkle.png",
                    blur: "sparkle-blur.png"
                },
                sortOrder: 999,
                bunnyId: 4
            }]
        },
        165: function(e, t, n) {
            "use strict";
            var a = n(0),
                i = n(170);
            t.a = function() {
                var e = Object(a.useContext)(i.a);
                return {
                    fastRefresh: e.fast,
                    slowRefresh: e.slow
                }
            }
        },
        166: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return u
            }));
            var a = n(395),
                i = n.n(a),
                u = ["https://bsc-dataseed1.ninicoin.io", "https://bsc-dataseed1.defibit.io", "https://bsc-dataseed.binance.org"];
            t.a = function() {
                var e = i()(0, u.length - 1);
                return u[e]
            }
        },
        167: function(e, t, n) {
            "use strict";
            t.a = []
        },
        168: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return u
            }));
            var a = n(38),
                i = Object(a.c)({
                    name: "Block",
                    initialState: {
                        blockNumber: 0
                    },
                    reducers: {
                        setBlock: function(e, t) {
                            return {
                                blockNumber: t.payload
                            }
                        }
                    }
                }),
                u = i.actions.setBlock;
            t.a = i.reducer
        },
        170: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return d
            })), n.d(t, "b", (function() {
                return y
            }));
            var a = n(4),
                i = n.n(a),
                u = n(12),
                s = n(35),
                r = n(0),
                p = n.n(r),
                o = n(15),
                d = p.a.createContext({
                    slow: 0,
                    fast: 0
                }),
                y = function(e) {
                    var t = e.children,
                        n = Object(r.useState)(0),
                        a = Object(s.a)(n, 2),
                        p = a[0],
                        y = a[1],
                        c = Object(r.useState)(0),
                        l = Object(s.a)(c, 2),
                        m = l[0],
                        f = l[1];
                    return Object(r.useEffect)((function() {
                        var e = setInterval(Object(u.a)(i.a.mark((function e() {
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        f((function(e) {
                                            return e + 1
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), 1e4);
                        return function() {
                            return clearInterval(e)
                        }
                    }), []), Object(r.useEffect)((function() {
                        var e = setInterval(Object(u.a)(i.a.mark((function e() {
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        y((function(e) {
                                            return e + 1
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), 6e4);
                        return function() {
                            return clearInterval(e)
                        }
                    }), []), Object(o.jsx)(d.Provider, {
                        value: {
                            slow: p,
                            fast: m
                        },
                        children: t
                    })
                }
        },
        172: function(e) {
            e.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        173: function(e, t, n) {
            "use strict";
            var a = n(76);
            t.a = function(e) {
                try {
                    var t = new(Object(a.b)().BatchRequest),
                        n = e.map((function(e) {
                            return new Promise((function(n, a) {
                                t.add(e.request({}, (function(e, t) {
                                    e ? a(e) : n(t)
                                })))
                            }))
                        }));
                    return t.execute(), Promise.all(n)
                } catch (i) {
                    return null
                }
            }
        },
        174: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return o
            }));
            var a = n(4),
                i = n.n(a),
                u = n(29),
                s = n(13),
                r = n(12),
                p = n(38),
                o = Object(p.b)("prices/fetch", Object(r.a)(i.a.mark((function e() {
                    var t, n;
                    return i.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, fetch("https://api.pancakeswap.com/api/v1/price");
                            case 2:
                                return t = e.sent, e.next = 5, t.json();
                            case 5:
                                return n = e.sent, e.abrupt("return", {
                                    update_at: n.update_at,
                                    prices: Object.keys(n.prices).reduce((function(e, t) {
                                        return Object(s.a)(Object(s.a)({}, e), {}, Object(u.a)({}, t.toLowerCase(), n.prices[t]))
                                    }), {})
                                });
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))),
                d = Object(p.c)({
                    name: "prices",
                    initialState: {
                        isLoading: !1,
                        lastUpdated: null,
                        data: null
                    },
                    reducers: {},
                    extraReducers: function(e) {
                        e.addCase(o.pending, (function(e) {
                            e.isLoading = !0
                        })), e.addCase(o.fulfilled, (function(e, t) {
                            e.isLoading = !1, e.lastUpdated = t.payload.update_at, e.data = t.payload.prices
                        }))
                    }
                });
            t.a = d.reducer
        },
        175: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return f
            })), n.d(t, "b", (function() {
                return b
            }));
            var a, i = n(29),
                u = n(148),
                s = n(149),
                r = n(169),
                p = n(20),
                o = n(166),
                d = Object(o.a)(),
                y = parseInt("56", 10),
                c = new u.a({
                    supportedChainIds: [y]
                }),
                l = new s.b({
                    rpc: Object(i.a)({}, y, d),
                    bridge: "https://bridge.walletconnect.org",
                    qrcode: !0,
                    pollingInterval: 12e3
                }),
                m = new r.BscConnector({
                    supportedChainIds: [y]
                }),
                f = (a = {}, Object(i.a)(a, p.c.Injected, c), Object(i.a)(a, p.c.WalletConnect, l), Object(i.a)(a, p.c.BSC, m), a),
                b = function(e) {
                    return e
                }
        },
        176: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            }));
            var a = n(0),
                i = {
                    translations: [],
                    setTranslations: function() {}
                },
                u = Object(a.createContext)(i)
        },
        177: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return x
            }));
            var a = n(4),
                i = n.n(a),
                u = n(12),
                s = n(20),
                r = n(38),
                p = n(68),
                o = n(88),
                d = n(50),
                y = n(70),
                c = n(227),
                l = [{
                    id: "511080000",
                    type: "ifo",
                    title: "Belt",
                    badge: "ifo-belt.svg"
                }, {
                    id: "511070000",
                    type: "ifo",
                    title: "Yieldwatch",
                    badge: "ifo-watch.svg"
                }, {
                    id: "511060000",
                    type: "ifo",
                    title: "Berry",
                    badge: "ifo-bry.svg"
                }, {
                    id: "511050000",
                    type: "ifo",
                    title: "Soteria",
                    badge: "ifo-wsote.svg"
                }, {
                    id: "511040000",
                    type: "ifo",
                    title: "Helmet",
                    badge: "ifo-helmet.svg"
                }, {
                    id: "511030000",
                    type: "ifo",
                    title: "Tenet",
                    badge: "ifo-ten.svg"
                }, {
                    id: "511020000",
                    type: "ifo",
                    title: "Ditto",
                    badge: "ifo-ditto.svg"
                }, {
                    id: "511010000",
                    type: "ifo",
                    title: "Blink",
                    badge: "ifo-blk.svg"
                }],
                m = new Map;
            l.forEach((function(e) {
                m.set(e.id, e)
            }));
            n(82), n(167), n(173);
            var f, b = function(e) {
                    switch (e.type) {
                        case "ifo":
                            return {
                                id: 999,
                                fallback: "IFO Shopper: ".concat(e.title),
                                data: {
                                    name: e.title
                                }
                            };
                        default:
                            return e.title
                    }
                },
                T = function(e) {
                    switch (e.type) {
                        case "ifo":
                            return {
                                id: 999,
                                fallback: "Committed more than $5 worth of LP in the ".concat(e.title, " IFO"),
                                data: {
                                    name: e.title
                                }
                            };
                        default:
                            return e.description
                    }
                },
                v = function() {
                    var e = Object(u.a)(i.a.mark((function e(t) {
                        var n;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, Object(c.request)("https://api.thegraph.com/subgraphs/name/pancakeswap/profile", Object(c.gql)(f || (f = Object(y.a)(['\n        {\n          user(id: "', '") {\n            points {\n              id\n              campaignId\n              points\n            }\n          }\n        }\n      '])), t.toLowerCase()));
                                case 3:
                                    return n = e.sent, e.abrupt("return", n.user.points);
                                case 7:
                                    return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", null);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                w = function() {
                    var e = Object(u.a)(i.a.mark((function e(t) {
                        var n;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, v(t);
                                case 2:
                                    if (n = e.sent) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", []);
                                case 5:
                                    return e.abrupt("return", n.reduce((function(e, t) {
                                        var n = m.get(t.campaignId);
                                        return [].concat(Object(d.a)(e), [{
                                            id: t.campaignId,
                                            type: n.type,
                                            address: t.id,
                                            title: b(n),
                                            description: T(n),
                                            badge: n.badge,
                                            points: Number(t.points)
                                        }])
                                    }), []));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                g = Object(r.c)({
                    name: "achievements",
                    initialState: {
                        data: []
                    },
                    reducers: {
                        addAchievement: function(e, t) {
                            e.data.push(t.payload)
                        },
                        addAchievements: function(e, t) {
                            e.data.concat(t.payload)
                        },
                        setAchievements: function(e, t) {
                            e.data = t.payload
                        },
                        clearAchievements: function(e) {
                            e.data = []
                        }
                    }
                }),
                O = g.actions,
                h = (O.addAchievement, O.addAchievements, O.setAchievements),
                x = (O.clearAchievements, function(e) {
                    return function() {
                        var t = Object(u.a)(i.a.mark((function t(n) {
                            var a, u;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, w(e);
                                    case 3:
                                        a = t.sent, n(h(a)), t.next = 12;
                                        break;
                                    case 7:
                                        t.prev = 7, t.t0 = t.catch(0), console.error(t.t0), u = "Error fetching achievements", n(Object(o.c)({
                                            id: Object(p.kebabCase)(u),
                                            type: s.n.DANGER,
                                            title: u
                                        }));
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 7]
                            ])
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                });
            t.a = g.reducer
        },
        18: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            })), n.d(t, "l", (function() {
                return u
            })), n.d(t, "d", (function() {
                return s
            })), n.d(t, "g", (function() {
                return r
            })), n.d(t, "h", (function() {
                return p
            })), n.d(t, "m", (function() {
                return o
            })), n.d(t, "e", (function() {
                return d
            })), n.d(t, "f", (function() {
                return y
            })), n.d(t, "i", (function() {
                return c
            })), n.d(t, "j", (function() {
                return l
            })), n.d(t, "b", (function() {
                return m
            })), n.d(t, "k", (function() {
                return f
            })), n.d(t, "c", (function() {
                return b
            }));
            var a = n(33),
                i = function(e) {
                    return e[56], e[56]
                },
                u = function() {
                    return i(a.a.wad)
                },
                s = function() {
                    return i(a.a.wad)
                },
                r = function() {
                    return i(a.a.masterChef)
                },
                p = function() {
                    return i(a.a.mulltiCall)
                },
                o = function() {
                    return i(a.a.wbnb)
                },
                d = function() {
                    return i(a.a.lottery)
                },
                y = function() {
                    return i(a.a.lotteryNFT)
                },
                c = function() {
                    return i(a.a.pancakeProfile)
                },
                l = function() {
                    return i(a.a.pancakeRabbits)
                },
                m = function() {
                    return i(a.a.bunnyFactory)
                },
                f = function() {
                    return i(a.a.pointCenterIfo)
                },
                b = function() {
                    return i(a.a.bunnySpecial)
                }
        },
        22: function(e, t, n) {
            "use strict";
            var a, i, u;
            n.d(t, "c", (function() {
                    return a
                })), n.d(t, "a", (function() {
                    return i
                })), n.d(t, "b", (function() {
                    return u
                })),
                function(e) {
                    e.BNB = "BNB", e.CAKE = "CAKE", e.SYRUP = "SYRUP", e.BUSD = "BUSD", e.TWT = "TWT", e.UST = "UST", e.ETH = "ETH", e.COMP = "COMP", e.SUSHI = "SUSHI", e.TPT = "TPT", e.USDT = "USDT"
                }(a || (a = {})),
                function(e) {
                    e.COMMUNITY = "Community", e.CORE = "Core", e.BINANCE = "Binance"
                }(i || (i = {})),
                function(e) {
                    e.STAKE = "STAKE", e.LP = "LP", e.LP_PANCAKE = "LP_PANCAKE"
                }(u || (u = {}))
        },
        230: function(e, t, n) {
            "use strict";
            var a = n(0),
                i = n(68),
                u = n(176);
            t.a = function() {
                var e = Object(a.useContext)(u.a).translations;
                return function(t, n) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (0 === e.length) return n;
                    var u = e.find((function(e) {
                        return e.data.stringId === t
                    }));
                    if (u) {
                        var s = u.data.text,
                            r = s.includes("%");
                        if (r) {
                            var p = s;
                            return Object(i.isEmpty)(a) ? n : (Object.keys(a).forEach((function(e) {
                                var t = new RegExp("%".concat(e, "%"), "g");
                                p = p.replace(t, a[e])
                            })), p)
                        }
                        return s
                    }
                    return n
                }
            }
        },
        232: function(e, t, n) {
            "use strict";
            var a = n(4),
                i = n.n(a),
                u = n(12),
                s = n(0),
                r = n(58),
                p = n(169),
                o = n(20),
                d = n(53),
                y = n(175),
                c = n(148),
                l = n(149);
            t.a = function() {
                var e = Object(r.c)(),
                    t = e.activate,
                    n = e.deactivate,
                    a = Object(d.k)().toastError;
                return {
                    login: Object(s.useCallback)((function(e) {
                        var n = y.a[e];
                        n ? t(n, function() {
                            var t = Object(u.a)(i.a.mark((function t(u) {
                                return i.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            u instanceof r.a ? (a("Unsupported Chain Id", "Unsupported Chain Id Error. Check your chain Id."), window.localStorage.setItem(o.k, e)) : u instanceof c.b || u instanceof p.NoBscProviderError ? (a("Provider Error", "No provider was found"), window.localStorage.setItem(o.k, e)) : u instanceof c.c || u instanceof l.a ? (n instanceof l.b && (n.walletConnectProvider = null), a("Authorization Error", "Please authorize to access your account")) : (a(u.name, u.message), window.localStorage.setItem(o.k, e));
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()) : a("Can't find connector", "The connector config is wrong")
                    }), []),
                    logout: Object(s.useCallback)((function() {
                        n(), window.localStorage.removeItem("walletconnect")
                    }), [n])
                }
            }
        },
        33: function(e, t, n) {
            "use strict";
            t.a = {
                wad: {
                    97: "0x29f9E7f1ACE4E3496c0c46b3191E800a7A77964E",
                    56: "0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc"
                },
                syrup: {
                    97: "0x3E11A30d9D5892030B0Ed20A3AD9CEF0e9a4d559",
                    56: "0x372Aed0528EA4BC95E1101B2882Cb15FcA4b226E"
                },
                masterChef: {
                    97: "0x66E083a3d0E361152142B1887b99c57FA60Afb96",
                    56: "0xde866dD77b6DF6772e320dC92BFF0eDDC626C674"
                },
                sousChef: {
                    97: "0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a",
                    56: "0x6ab8463a4185b80905e05a9ff80a2d6b714b9e95"
                },
                wbnb: {
                    97: "0xae13d989dac2f0debff460ac112a837c89baa7cd",
                    56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
                },
                lottery: {
                    97: "0x99c2EcD51d52c036B00130d882Bc65f20Fdecf9f",
                    56: "0x3C3f2049cc17C136a604bE23cF7E42745edf3b91"
                },
                lotteryNFT: {
                    97: "0x8175c10383511b3a1C68f9dB222dc14A19CC950e",
                    56: "0x5e74094Cd416f55179DBd0E45b1a8ED030e396A1"
                },
                mulltiCall: {
                    56: "0x1ee38d535d541c55c9dae27b12edf090c608e6fb",
                    97: "0x67ADCB4dF3931b0C5Da724058ADC2174a9844412"
                },
                busd: {
                    56: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
                    97: "0x2DbC5dFCe92737D8c333296F9F29a166a1aED742"
                },
                pancakeProfile: {
                    56: "0xDf4dBf6536201370F95e06A0F8a7a70fE40E388a",
                    97: "0x4B683C7E13B6d5D7fd1FeA9530F451954c1A7c8A"
                },
                pancakeRabbits: {
                    56: "0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07",
                    97: "0x60935F36e4631F73f0f407e68642144e07aC7f5E"
                },
                bunnyFactory: {
                    56: "0xfa249Caa1D16f75fa159F7DFBAc0cC5EaB48CeFf",
                    97: "0x707CBF373175fdB601D34eeBF2Cf665d08f01148"
                },
                pointCenterIfo: {
                    56: "0x3C6919b132462C1FEc572c6300E83191f4F0012a",
                    97: "0xd2Ac1B1728Bb1C11ae02AB6e75B76Ae41A2997e3"
                },
                bunnySpecial: {
                    56: "0xFee8A195570a18461146F401d6033f5ab3380849",
                    97: "0x7b7b1583De1DeB32Ce6605F6deEbF24A0671c17C"
                },
                usdt: {
                    56: "0x55d398326f99059fF775485246999027B3197955",
                    97: ""
                }
            }
        },
        341: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            }));
            var a = n(62),
                i = n(51);
            n.d(t, "b", (function() {
                return i.a
            }));
            n(167);
            var u = a.a.filter((function(e) {
                return e.isCommunity
            })).map((function(e) {
                return e.tokenSymbol
            }))
        },
        396: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        397: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]')
        },
        399: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_cakeToken","type":"address"},{"internalType":"uint256","name":"_numberCakeToReactivate","type":"uint256"},{"internalType":"uint256","name":"_numberCakeToRegister","type":"uint256"},{"internalType":"uint256","name":"_numberCakeToUpdate","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"teamId","type":"uint256"},{"indexed":false,"internalType":"string","name":"teamName","type":"string"}],"name":"TeamAdd","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"teamId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"numberPoints","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"campaignId","type":"uint256"}],"name":"TeamPointIncrease","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"oldTeamId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTeamId","type":"uint256"}],"name":"UserChangeTeam","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"teamId","type":"uint256"},{"indexed":false,"internalType":"address","name":"nftAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"UserNew","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"teamId","type":"uint256"}],"name":"UserPause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"numberPoints","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"campaignId","type":"uint256"}],"name":"UserPointIncrease","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"userAddresses","type":"address[]"},{"indexed":false,"internalType":"uint256","name":"numberPoints","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"campaignId","type":"uint256"}],"name":"UserPointIncreaseMultiple","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"teamId","type":"uint256"},{"indexed":false,"internalType":"address","name":"nftAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"UserReactivate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"address","name":"nftAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"UserUpdate","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NFT_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"POINT_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SPECIAL_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_nftAddress","type":"address"}],"name":"addNftAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_teamName","type":"string"},{"internalType":"string","name":"_teamDescription","type":"string"}],"name":"addTeam","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cakeToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint256","name":"_newTeamId","type":"uint256"}],"name":"changeTeam","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"claimFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"},{"internalType":"address","name":"_nftAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"createProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"}],"name":"getTeamProfile","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"getUserProfile","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasRegistered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"},{"internalType":"uint256","name":"_campaignId","type":"uint256"}],"name":"increaseTeamPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"},{"internalType":"uint256","name":"_campaignId","type":"uint256"}],"name":"increaseUserPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_userAddresses","type":"address[]"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"},{"internalType":"uint256","name":"_campaignId","type":"uint256"}],"name":"increaseUserPointsMultiple","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"}],"name":"makeTeamJoinable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"}],"name":"makeTeamNotJoinable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"numberActiveProfiles","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberCakeToReactivate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberCakeToRegister","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberCakeToUpdate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberTeams","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pauseProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"reactivateProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"}],"name":"removeTeamPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"}],"name":"removeUserPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_userAddresses","type":"address[]"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"}],"name":"removeUserPointsMultiple","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"},{"internalType":"string","name":"_teamName","type":"string"},{"internalType":"string","name":"_teamDescription","type":"string"}],"name":"renameTeam","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newNumberCakeToReactivate","type":"uint256"},{"internalType":"uint256","name":"_newNumberCakeToRegister","type":"uint256"},{"internalType":"uint256","name":"_newNumberCakeToUpdate","type":"uint256"}],"name":"updateNumberCake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"updateProfile","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        400: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"string","name":"_baseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"bunnyBurnCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"bunnyCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getBunnyId","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"getBunnyName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getBunnyNameOfTokenId","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"string","name":"_tokenURI","type":"string"},{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"},{"internalType":"string","name":"_name","type":"string"}],"name":"setBunnyName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        401: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract BunnyFactoryV2","name":"_bunnyFactoryV2","type":"address"},{"internalType":"contract BunnyMintingStation","name":"_bunnyMintingStation","type":"address"},{"internalType":"contract IBEP20","name":"_cakeToken","type":"address"},{"internalType":"uint256","name":"_tokenPrice","type":"uint256"},{"internalType":"string","name":"_ipfsHash","type":"string"},{"internalType":"uint256","name":"_startBlockNumber","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"bunnyId","type":"uint8"}],"name":"BunnyMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"bunnyFactoryV2","outputs":[{"internalType":"contract BunnyFactoryV2","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bunnyMintingStation","outputs":[{"internalType":"contract BunnyMintingStation","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cakeToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"canMint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"claimFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"mintNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_bunnyId5Json","type":"string"},{"internalType":"string","name":"_bunnyId6Json","type":"string"},{"internalType":"string","name":"_bunnyId7Json","type":"string"},{"internalType":"string","name":"_bunnyId8Json","type":"string"},{"internalType":"string","name":"_bunnyId9Json","type":"string"}],"name":"setBunnyJson","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newStartBlockNumber","type":"uint256"}],"name":"setStartBlockNumber","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newTokenPrice","type":"uint256"}],"name":"updateTokenPrice","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        402: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract BunnyMintingStation","name":"_bunnyMintingStation","type":"address"},{"internalType":"contract IBEP20","name":"_cakeToken","type":"address"},{"internalType":"contract IPancakeProfile","name":"_pancakeProfile","type":"address"},{"internalType":"uint256","name":"_maxViewLength","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint8","name":"bunnyId","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"thresholdUser","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"costCake","type":"uint256"}],"name":"BunnyAdd","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint8","name":"bunnyId","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"thresholdUser","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"costCake","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isActive","type":"bool"}],"name":"BunnyChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"bunnyId","type":"uint8"}],"name":"BunnyMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"},{"internalType":"string","name":"_tokenURI","type":"string"},{"internalType":"uint256","name":"_thresholdUser","type":"uint256"},{"internalType":"uint256","name":"_cakeCost","type":"uint256"}],"name":"addBunny","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"bunnyCharacteristics","outputs":[{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"uint256","name":"thresholdUser","type":"uint256"},{"internalType":"uint256","name":"cakeCost","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"bool","name":"isCreated","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bunnyMintingStation","outputs":[{"internalType":"contract BunnyMintingStation","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"c__0xf318aee2","type":"bytes32"}],"name":"c_0xf318aee2","outputs":[],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"cakeToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint8[]","name":"_bunnyIds","type":"uint8[]"}],"name":"canClaimMultiple","outputs":[{"internalType":"bool[]","name":"","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"canClaimSingle","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"claimFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint8","name":"","type":"uint8"}],"name":"hasClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxViewLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"mintNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"numberDifferentBunnies","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakeProfile","outputs":[{"internalType":"contract IPancakeProfile","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"},{"internalType":"uint256","name":"_thresholdUser","type":"uint256"},{"internalType":"uint256","name":"_cakeCost","type":"uint256"},{"internalType":"bool","name":"_isActive","type":"bool"}],"name":"updateBunny","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newMaxViewLength","type":"uint256"}],"name":"updateMaxViewLength","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        403: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"contract IBEP20","name":"_offeringToken","type":"address"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"},{"internalType":"uint256","name":"_offeringAmount","type":"uint256"},{"internalType":"uint256","name":"_raisingAmount","type":"uint256"},{"internalType":"address","name":"_adminAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"offeringAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"excessAmount","type":"uint256"}],"name":"Harvest","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"addressList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lpAmount","type":"uint256"},{"internalType":"uint256","name":"_offerAmount","type":"uint256"}],"name":"finalWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getOfferingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getRefundingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"hasHarvest","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offeringAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offeringToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raisingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"}]')
        },
        404: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_pancakeProfileAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"_contractAddress","type":"address"},{"internalType":"uint256","name":"_campaignId","type":"uint256"},{"internalType":"uint256","name":"_thresholdToClaim","type":"uint256"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"}],"name":"addIFOAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"address","name":"_contractAddress","type":"address"}],"name":"checkClaimStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"address[]","name":"_contractAddresses","type":"address[]"}],"name":"checkClaimStatuses","outputs":[{"internalType":"bool[]","name":"","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_contractAddress","type":"address"}],"name":"getPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"ifos","outputs":[{"internalType":"uint256","name":"thresholdToClaim","type":"uint256"},{"internalType":"uint256","name":"campaignId","type":"uint256"},{"internalType":"uint256","name":"numberPoints","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        405: function(e) {
            e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Buy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DevWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"issueIndex","type":"uint256"},{"indexed":false,"internalType":"uint8[4]","name":"winningNumbers","type":"uint8[4]"}],"name":"Drawing","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"MultiBuy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"MultiClaim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"issueIndex","type":"uint256"}],"name":"Reset","type":"event"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"adminWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allocation","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint8[4]","name":"_numbers","type":"uint8[4]"}],"name":"buy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cake","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"drawed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_externalRandomNumber","type":"uint256"}],"name":"drawing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"drawingPhase","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"enterDrawingPhase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8[4]","name":"number","type":"uint8[4]"}],"name":"generateNumberIndexKey","outputs":[{"internalType":"uint64[11]","name":"","type":"uint64[11]"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"_issueIndex","type":"uint256"},{"internalType":"uint256","name":"_matchingNumber","type":"uint256"}],"name":"getMatchingRewardAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getRewardView","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_issueIndex","type":"uint256"}],"name":"getTotalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"historyAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"historyNumbers","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_cake","type":"address"},{"internalType":"contract LotteryNFT","name":"_lottery","type":"address"},{"internalType":"uint256","name":"_minPrice","type":"uint256"},{"internalType":"uint8","name":"_maxNumber","type":"uint8"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_adminAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"issueIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"lotteryInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lotteryNFT","outputs":[{"internalType":"contract LotteryNFT","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxNumber","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint8[4][]","name":"_numbers","type":"uint8[4][]"}],"name":"multiBuy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tickets","type":"uint256[]"}],"name":"multiClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reset","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_adminAddress","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_allcation1","type":"uint8"},{"internalType":"uint8","name":"_allcation2","type":"uint8"},{"internalType":"uint8","name":"_allcation3","type":"uint8"},{"internalType":"uint8","name":"_allcation4","type":"uint8"}],"name":"setAllocation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_maxNumber","type":"uint8"}],"name":"setMaxNumber","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setMinPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAddresses","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint64","name":"","type":"uint64"}],"name":"userBuyAmountSum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"winningNumbers","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"}]')
        },
        406: function(e) {
            e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"claimInfo","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"issueIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lotteryAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"lotteryInfo","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"player","type":"address"},{"internalType":"uint8[4]","name":"_lotteryNumbers","type":"uint8[4]"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_issueIndex","type":"uint256"}],"name":"newLotteryItem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getLotteryNumbers","outputs":[{"internalType":"uint8[4]","name":"","type":"uint8[4]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getLotteryAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getLotteryIssueIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"}],"name":"multiClaimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getClaimStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true}]')
        },
        407: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_lp","type":"address"},{"internalType":"contract IBEP20","name":"_rewardToken","type":"address"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"},{"internalType":"address","name":"_adminAddress","type":"address"},{"internalType":"address","name":"_wbnb","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"WBNB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"emergencyRewardWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"limitAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accWardenPerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_blacklistAddress","type":"address"}],"name":"removeBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_adminAddress","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_blacklistAddress","type":"address"}],"name":"setBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setLimitAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"bool","name":"inBlackList","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')
        },
        41: function(e, t, n) {
            "use strict";
            var a = n(4),
                i = n.n(a),
                u = n(12),
                s = n(849),
                r = n(76),
                p = n(396),
                o = n(18),
                d = function() {
                    var e = Object(u.a)(i.a.mark((function e(t, n) {
                        var a, d, y, c, l, m, f;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = Object(r.b)(), d = new a.eth.Contract(p, Object(o.h)()), y = new s.b(t), e.next = 5, a.eth.getBlockNumber();
                                case 5:
                                    return e.sent, e.next = 8, d.methods.getEthBalance("0x69F6829B0A62C34a844E9a0a123DD4b1822a7Bc5").call();
                                case 8:
                                    return e.sent, n.forEach(function() {
                                        var e = Object(u.a)(i.a.mark((function e(t) {
                                            var a, u, s;
                                            return i.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return a = [t].map((function(e) {
                                                            return [e.address.toLowerCase(), y.encodeFunctionData(e.name, e.params)]
                                                        })), e.next = 3, d.methods.aggregate(a).call();
                                                    case 3:
                                                        u = e.sent, s = u.returnData;
                                                        try {
                                                            s.map((function(e, t) {
                                                                return y.decodeFunctionResult(n[t].name, e)
                                                            }))
                                                        } catch (i) {
                                                            console.log(i)
                                                        }
                                                    case 6:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()), c = n.map((function(e) {
                                        return [e.address.toLowerCase(), y.encodeFunctionData(e.name, e.params)]
                                    })), e.next = 13, d.methods.aggregate(c).call();
                                case 13:
                                    return l = e.sent, m = l.returnData, f = m.map((function(e, t) {
                                        return y.decodeFunctionResult(n[t].name, e)
                                    })), e.abrupt("return", f);
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }();
            t.a = d
        },
        482: function(e, t) {},
        502: function(e, t) {},
        504: function(e, t) {},
        51: function(e, t, n) {
            "use strict";
            t.a = []
        },
        53: function(e, t, n) {
            "use strict";
            n.d(t, "e", (function() {
                return O
            })), n.d(t, "b", (function() {
                return h
            })), n.d(t, "a", (function() {
                return j
            })), n.d(t, "f", (function() {
                return k
            })), n.d(t, "g", (function() {
                return A
            })), n.d(t, "h", (function() {
                return M
            })), n.d(t, "k", (function() {
                return _
            })), n.d(t, "d", (function() {
                return I
            })), n.d(t, "c", (function() {
                return E
            })), n.d(t, "i", (function() {
                return S
            })), n.d(t, "j", (function() {
                return C
            }));
            var a = n(4),
                i = n.n(a),
                u = n(12),
                s = n(0),
                r = n(14),
                p = n.n(r),
                o = n(68),
                d = n(58),
                y = n(20),
                c = n(30),
                l = n(76),
                m = n(104),
                f = n(84),
                b = n(165),
                T = n(74),
                v = n(89),
                w = (n(75), n(177), n(174)),
                g = new p.a(0),
                O = function() {
                    var e = Object(c.b)(),
                        t = Object(b.a)().slowRefresh;
                    Object(s.useEffect)((function() {
                        e(Object(T.c)()), e(Object(T.d)())
                    }), [e, t]), Object(s.useEffect)((function() {
                        var t = Object(l.b)(),
                            n = setInterval(Object(u.a)(i.a.mark((function n() {
                                var a;
                                return i.a.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, t.eth.getBlockNumber();
                                        case 2:
                                            a = n.sent, e(Object(T.h)(a));
                                        case 4:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            }))), 6e3);
                        return function() {
                            return clearInterval(n)
                        }
                    }), [e])
                },
                h = function() {
                    return Object(c.c)((function(e) {
                        return e.farms.data
                    }))
                },
                x = function(e) {
                    return Object(c.c)((function(t) {
                        return t.farms.data.find((function(t) {
                            return t.pid === e
                        }))
                    }))
                },
                j = function(e) {
                    var t = x(e);
                    return {
                        allowance: (null === t || void 0 === t ? void 0 : t.userData) ? new p.a(t.userData.allowance) : new p.a(0),
                        tokenBalance: (null === t || void 0 === t ? void 0 : t.userData) ? new p.a(t.userData.tokenBalance) : new p.a(0),
                        stakedBalance: (null === t || void 0 === t ? void 0 : t.userData) ? new p.a(t.userData.stakedBalance) : new p.a(0),
                        earnings: (null === t || void 0 === t ? void 0 : t.userData) ? new p.a(t.userData.earnings) : new p.a(0)
                    }
                },
                k = function() {
                    var e = x(2);
                    return e.tokenPriceVsQuote ? new p.a(1).div(e.tokenPriceVsQuote) : g
                },
                A = function() {
                    var e = k(),
                        t = x(1);
                    return t.tokenPriceVsQuote ? e.times(t.tokenPriceVsQuote) : g
                },
                M = function() {
                    return new p.a("1")
                },
                _ = function() {
                    var e = Object(c.b)();
                    return Object(s.useMemo)((function() {
                        var t = function(t) {
                            return e(Object(T.f)(t))
                        };
                        return {
                            toastError: function(e, n) {
                                return t({
                                    id: Object(o.kebabCase)(e),
                                    type: y.n.DANGER,
                                    title: e,
                                    description: n
                                })
                            },
                            toastInfo: function(e, n) {
                                return t({
                                    id: Object(o.kebabCase)(e),
                                    type: y.n.INFO,
                                    title: e,
                                    description: n
                                })
                            },
                            toastSuccess: function(e, n) {
                                return t({
                                    id: Object(o.kebabCase)(e),
                                    type: y.n.SUCCESS,
                                    title: e,
                                    description: n
                                })
                            },
                            toastWarning: function(e, n) {
                                return t({
                                    id: Object(o.kebabCase)(e),
                                    type: y.n.WARNING,
                                    title: e,
                                    description: n
                                })
                            },
                            push: t,
                            remove: function(t) {
                                return e(Object(T.g)(t))
                            },
                            clear: function() {
                                return e(Object(T.a)())
                            }
                        }
                    }), [e])
                },
                I = function() {
                    var e = Object(d.c)().account,
                        t = Object(c.b)();
                    Object(s.useEffect)((function() {
                        t(Object(v.b)(e))
                    }), [e, t])
                },
                E = function() {
                    var e = Object(b.a)().slowRefresh,
                        t = Object(c.b)();
                    Object(s.useEffect)((function() {
                        t(Object(w.b)())
                    }), [t, e])
                },
                S = function() {
                    var e = Object(c.b)(),
                        t = Object(m.b)(),
                        n = window.location.search.split("t=")[1];
                    n && (n = n.slice(0, 1)), n ? ("1" === n ? f.a.SPACE_MODE : f.a.LIGHT_MODE) !== t && Object(m.d)() : Object(m.b)();
                    var a = Object(m.a)(),
                        i = window.location.search.split("s=")[1];
                    i && (i = i.slice(0, 1)), i ? "1" === i !== a && Object(m.c)() : Object(m.a)();
                    var u = t === f.a.SPACE_MODE;
                    e(Object(T.i)(!!a)), e(Object(T.j)(u)), document.body.setAttribute("data-theme", t)
                },
                C = function() {
                    return Object(c.c)((function(e) {
                        return e.setting
                    }))
                }
        },
        62: function(e, t, n) {
            "use strict";
            var a = n(33),
                i = n(22),
                u = [{
                    pid: 0,
                    lpSymbol: "WAD",
                    lpAddresses: {
                        97: "0x29f9e7f1ace4e3496c0c46b3191e800a7a77964e",
                        56: "0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc"
                    },
                    tokenSymbol: "WAD",
                    tokenAddresses: {
                        97: "0x29f9e7f1ace4e3496c0c46b3191e800a7a77964e",
                        56: "0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc"
                    },
                    quoteTokenSymbol: i.c.CAKE,
                    quoteTokenAdresses: a.a.wad,
                    poolType: i.b.STAKE
                }, {
                    pid: 1,
                    lpSymbol: "WAD-BNB LP",
                    lpAddresses: {
                        97: "0xAc16B9d54d73879ca9Db8daa56D68E2624f931F6",
                        56: "0xDc683Adb914EdF91df4A36c33EE4f59ca41bC263"
                    },
                    tokenSymbol: "WAD",
                    tokenAddresses: {
                        97: "0x29f9E7f1ACE4E3496c0c46b3191E800a7A77964E",
                        56: "0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc"
                    },
                    quoteTokenSymbol: i.c.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    poolType: i.b.LP
                }, {
                    pid: 7,
                    lpSymbol: "WAD-BUSD LP",
                    lpAddresses: {
                        97: "0x515dbF03c828e50145e3822A3427A6068Da3F7F6",
                        56: "0xc95B1750043FCE5dfCc8539835Ea3830Ec002A89"
                    },
                    tokenSymbol: "WAD",
                    tokenAddresses: {
                        97: "0x29f9E7f1ACE4E3496c0c46b3191E800a7A77964E",
                        56: "0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc"
                    },
                    quoteTokenSymbol: i.c.BUSD,
                    quoteTokenAdresses: a.a.busd,
                    poolType: i.b.LP
                }, {
                    pid: 2,
                    lpSymbol: "BUSD-BNB LP",
                    lpAddresses: {
                        97: "0xA3Cd6D24B491D3a1DBE337074d6E910F9AdB40d1",
                        56: "0xCf643C4B9DBf42239aa00e23A0570c90d517E6dC"
                    },
                    tokenSymbol: "BUSD",
                    tokenAddresses: {
                        97: "0x2DbC5dFCe92737D8c333296F9F29a166a1aED742",
                        56: "0xe9e7cea3dedca5984780bafc599bd69add087d56"
                    },
                    quoteTokenSymbol: i.c.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    poolType: i.b.LP
                }, {
                    pid: 11,
                    lpSymbol: "USDT-BNB LP",
                    lpAddresses: {
                        97: "",
                        56: "0xfD468f81f4a6D859a0eB3667c65F7BEA9Dc69028"
                    },
                    tokenSymbol: "USDT",
                    tokenAddresses: {
                        97: "",
                        56: "0x55d398326f99059fF775485246999027B3197955"
                    },
                    quoteTokenSymbol: i.c.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    poolType: i.b.LP
                }, {
                    pid: 3,
                    lpSymbol: "BTCB-BNB LP",
                    lpAddresses: {
                        97: "0x2BB6B868285Fc124e950860300Ab8a826eF1c3B2",
                        56: "0x1b1675A97b2f62B568569ebD349E88A04DdE8586"
                    },
                    tokenSymbol: "BTCB",
                    tokenAddresses: {
                        97: "0x212A31781E574C5d7C0Fce551AddAD67cb4b4F5C",
                        56: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c"
                    },
                    quoteTokenSymbol: i.c.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    poolType: i.b.LP
                }, {
                    pid: 4,
                    lpSymbol: "ETH-BNB LP",
                    lpAddresses: {
                        97: "0xd4616b4768D282D458eECFEB8cb0492f821c9233",
                        56: "0x8485c5f255FF30AafaB0030329e508BD8dDE11c5"
                    },
                    tokenSymbol: "ETH",
                    tokenAddresses: {
                        97: "0x829C8c2128eD993fAC05a7BcFcD4ee9941A2898C",
                        56: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"
                    },
                    quoteTokenSymbol: i.c.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    poolType: i.b.LP
                }, {
                    pid: 5,
                    lpSymbol: "USDT-BUSD LP",
                    lpAddresses: {
                        97: "0x93e6d9bF02367a231b4643D45b1Df949C13eB12C",
                        56: "0x087d69B97a6dF4FB37E4E93A31752008223A6C19"
                    },
                    tokenSymbol: "USDT",
                    tokenAddresses: {
                        97: "0xf19802DE4a3B7bF2f9910661f21389825D159abc",
                        56: "0x55d398326f99059fF775485246999027B3197955"
                    },
                    quoteTokenSymbol: i.c.BUSD,
                    quoteTokenAdresses: a.a.busd,
                    poolType: i.b.LP
                }, {
                    pid: 9,
                    lpSymbol: "BNB-BIDR LP",
                    lpAddresses: {
                        97: "",
                        56: "0x7942d74438D0D58e0E2946b525699767a871fddf"
                    },
                    tokenSymbol: "BIDR",
                    tokenAddresses: {
                        97: "",
                        56: "0x9a2f5556e9a637e8fbce886d8e3cf8b316a1d8a2"
                    },
                    quoteTokenSymbol: i.c.BNB,
                    quoteTokenAdresses: a.a.wbnb,
                    poolType: i.b.LP
                }, {
                    pid: 10,
                    lpSymbol: "WAD-USDT LP",
                    lpAddresses: {
                        97: "",
                        56: "0x7D6195b212deE1BA7DE8404cfd319446cf17D71B"
                    },
                    tokenSymbol: "WAD",
                    tokenAddresses: {
                        97: "",
                        56: "0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc"
                    },
                    quoteTokenSymbol: i.c.USDT,
                    quoteTokenAdresses: a.a.usdt,
                    poolType: i.b.LP_PANCAKE
                }];
            t.a = u
        },
        624: function(e, t) {},
        626: function(e, t) {},
        63: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')
        },
        658: function(e, t) {},
        663: function(e, t) {},
        665: function(e, t) {},
        672: function(e, t) {},
        685: function(e, t) {},
        74: function(e, t, n) {
            "use strict";
            var a = n(142);
            n.d(t, "c", (function() {
                return a.c
            })), n.d(t, "b", (function() {
                return a.b
            }));
            var i = n(88);
            n.d(t, "a", (function() {
                return i.a
            })), n.d(t, "g", (function() {
                return i.d
            })), n.d(t, "f", (function() {
                return i.c
            }));
            var u = n(81);
            n.d(t, "d", (function() {
                return u.b
            })), n.d(t, "e", (function() {
                return u.c
            })), n.d(t, "k", (function() {
                return u.d
            })), n.d(t, "l", (function() {
                return u.e
            })), n.d(t, "m", (function() {
                return u.f
            })), n.d(t, "n", (function() {
                return u.g
            }));
            n(89), n(75);
            var s = n(168);
            n.d(t, "h", (function() {
                return s.b
            }));
            var r = n(141);
            n.d(t, "j", (function() {
                return r.c
            })), n.d(t, "i", (function() {
                return r.b
            }))
        },
        75: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return v
            })), n.d(t, "c", (function() {
                return w
            }));
            var a = n(4),
                i = n.n(a),
                u = n(12),
                s = n(29),
                r = n(13),
                p = n(38),
                o = n(146),
                d = n(145),
                y = {
                    isInitialized: !1,
                    isLoading: !0,
                    data: o.a.reduce((function(e, t) {
                        return Object(r.a)(Object(r.a)({}, e), {}, Object(s.a)({}, t.id, t))
                    }), {})
                },
                c = Object(p.c)({
                    name: "teams",
                    initialState: y,
                    reducers: {
                        fetchStart: function(e) {
                            e.isLoading = !0
                        },
                        fetchFailed: function(e) {
                            e.isLoading = !1, e.isInitialized = !0
                        },
                        teamFetchSucceeded: function(e, t) {
                            e.isInitialized = !0, e.isLoading = !1, e.data[t.payload.id] = t.payload
                        },
                        teamsFetchSucceeded: function(e, t) {
                            e.isInitialized = !0, e.isLoading = !1, e.data = t.payload
                        }
                    }
                }),
                l = c.actions,
                m = l.fetchStart,
                f = l.teamFetchSucceeded,
                b = l.fetchFailed,
                T = l.teamsFetchSucceeded,
                v = function(e) {
                    return function() {
                        var t = Object(u.a)(i.a.mark((function t(n) {
                            var a;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, n(m()), t.next = 4, Object(d.a)(e);
                                    case 4:
                                        a = t.sent, n(f(a)), t.next = 11;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t.catch(0), n(b());
                                    case 11:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 8]
                            ])
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                w = function() {
                    return function() {
                        var e = Object(u.a)(i.a.mark((function e(t) {
                            var n;
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, t(m()), e.next = 4, Object(d.b)();
                                    case 4:
                                        n = e.sent, t(T(n)), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), t(b());
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 8]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                };
            t.a = c.reducer
        },
        76: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return o
            }));
            var a = n(223),
                i = n.n(a),
                u = n(166),
                s = Object(u.a)(),
                r = new i.a.providers.HttpProvider(s, {
                    timeout: 1e4
                }),
                p = new i.a(r),
                o = function() {
                    return p
                };
            t.a = p
        },
        81: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return L
            })), n.d(t, "c", (function() {
                return U
            })), n.d(t, "d", (function() {
                return W
            })), n.d(t, "e", (function() {
                return J
            })), n.d(t, "g", (function() {
                return H
            })), n.d(t, "f", (function() {
                return Q
            }));
            var a = n(4),
                i = n.n(a),
                u = n(12),
                s = n(29),
                r = n(13),
                p = n(50),
                o = n(38),
                d = n(51),
                y = n(92),
                c = n(172),
                l = n(397),
                m = n(22),
                f = n(41),
                b = n(18),
                T = n(14),
                v = n.n(T),
                w = function() {
                    var e = Object(u.a)(i.a.mark((function e() {
                        var t, n, a, u, s;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = d.a.filter((function(e) {
                                        return 0 !== e.sousId
                                    })), n = t.map((function(e) {
                                        return {
                                            address: Object(b.a)(e.contractAddress),
                                            name: "startBlock"
                                        }
                                    })), a = t.map((function(e) {
                                        return {
                                            address: Object(b.a)(e.contractAddress),
                                            name: "bonusEndBlock"
                                        }
                                    })), e.next = 5, Object(f.a)(y, n);
                                case 5:
                                    return u = e.sent, e.next = 8, Object(f.a)(y, a);
                                case 8:
                                    return s = e.sent, e.abrupt("return", t.map((function(e, t) {
                                        var n = u[t],
                                            a = s[t];
                                        return {
                                            sousId: e.sousId,
                                            startBlock: new v.a(n).toJSON(),
                                            endBlock: new v.a(a).toJSON()
                                        }
                                    })));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                g = function() {
                    var e = Object(u.a)(i.a.mark((function e() {
                        var t, n, a, u, s, r;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = d.a.filter((function(e) {
                                        return e.stakingTokenName !== m.c.BNB
                                    })), n = d.a.filter((function(e) {
                                        return e.stakingTokenName === m.c.BNB
                                    })), a = t.map((function(e) {
                                        return {
                                            address: e.stakingTokenAddress,
                                            name: "balanceOf",
                                            params: [Object(b.a)(e.contractAddress)]
                                        }
                                    })), u = n.map((function(e) {
                                        return {
                                            address: Object(b.m)(),
                                            name: "balanceOf",
                                            params: [Object(b.a)(e.contractAddress)]
                                        }
                                    })), e.next = 6, Object(f.a)(c, a);
                                case 6:
                                    return s = e.sent, e.next = 9, Object(f.a)(l, u);
                                case 9:
                                    return r = e.sent, e.abrupt("return", [].concat(Object(p.a)(t.map((function(e, t) {
                                        return {
                                            sousId: e.sousId,
                                            totalStaked: new v.a(s[t]).toJSON()
                                        }
                                    }))), Object(p.a)(n.map((function(e, t) {
                                        return {
                                            sousId: e.sousId,
                                            totalStaked: new v.a(r[t]).toJSON()
                                        }
                                    })))));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                O = n(83),
                h = n(63),
                x = n(76),
                j = d.a.filter((function(e) {
                    return e.stakingTokenName !== m.c.BNB
                })),
                k = d.a.filter((function(e) {
                    return e.stakingTokenName === m.c.BNB
                })),
                A = d.a.filter((function(e) {
                    return 0 !== e.sousId
                })),
                M = Object(x.b)(),
                _ = new M.eth.Contract(O, Object(b.g)()),
                I = function() {
                    var e = Object(u.a)(i.a.mark((function e(t) {
                        var n, a;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = j.map((function(e) {
                                        return {
                                            address: e.stakingTokenAddress,
                                            name: "allowance",
                                            params: [t, Object(b.a)(e.contractAddress)]
                                        }
                                    })), e.next = 3, Object(f.a)(h, n);
                                case 3:
                                    return a = e.sent, e.abrupt("return", j.reduce((function(e, t, n) {
                                        return Object(r.a)(Object(r.a)({}, e), {}, Object(s.a)({}, t.sousId, new v.a(a[n]).toJSON()))
                                    }), {}));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                E = function() {
                    var e = Object(u.a)(i.a.mark((function e(t) {
                        var n, a, u, p, o;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = j.map((function(e) {
                                        return {
                                            address: e.stakingTokenAddress,
                                            name: "balanceOf",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(f.a)(h, n);
                                case 3:
                                    return a = e.sent, u = j.reduce((function(e, t, n) {
                                        return Object(r.a)(Object(r.a)({}, e), {}, Object(s.a)({}, t.sousId, new v.a(a[n]).toJSON()))
                                    }), {}), e.next = 7, M.eth.getBalance(t);
                                case 7:
                                    return p = e.sent, o = k.reduce((function(e, t) {
                                        return Object(r.a)(Object(r.a)({}, e), {}, Object(s.a)({}, t.sousId, new v.a(p).toJSON()))
                                    }), {}), e.abrupt("return", Object(r.a)(Object(r.a)({}, u), o));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                S = function() {
                    var e = Object(u.a)(i.a.mark((function e(t) {
                        var n, a, u, p, o;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = A.map((function(e) {
                                        return {
                                            address: Object(b.a)(e.contractAddress),
                                            name: "userInfo",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(f.a)(y, n);
                                case 3:
                                    return a = e.sent, u = A.reduce((function(e, t, n) {
                                        return Object(r.a)(Object(r.a)({}, e), {}, Object(s.a)({}, t.sousId, new v.a(a[n].amount._hex).toJSON()))
                                    }), {}), e.next = 7, _.methods.userInfo("0", t).call();
                                case 7:
                                    return p = e.sent, o = p.amount, e.abrupt("return", Object(r.a)(Object(r.a)({}, u), {}, {
                                        0: new v.a(o).toJSON()
                                    }));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                C = function() {
                    var e = Object(u.a)(i.a.mark((function e(t) {
                        var n, a, u, p;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = A.map((function(e) {
                                        return {
                                            address: Object(b.a)(e.contractAddress),
                                            name: "pendingReward",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(f.a)(y, n);
                                case 3:
                                    return a = e.sent, u = A.reduce((function(e, t, n) {
                                        return Object(r.a)(Object(r.a)({}, e), {}, Object(s.a)({}, t.sousId, new v.a(a[n]).toJSON()))
                                    }), {}), e.next = 7, _.methods.pendingWarden("0", t).call();
                                case 7:
                                    return p = e.sent, e.abrupt("return", Object(r.a)(Object(r.a)({}, u), {}, {
                                        0: new v.a(p).toJSON()
                                    }));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                B = {
                    data: Object(p.a)(d.a)
                },
                P = Object(o.c)({
                    name: "Pools",
                    initialState: B,
                    reducers: {
                        setPoolsPublicData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) {
                                var t = n.find((function(t) {
                                    return t.sousId === e.sousId
                                }));
                                return Object(r.a)(Object(r.a)({}, e), t)
                            }))
                        },
                        setPoolsUserData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) {
                                var t = n.find((function(t) {
                                    return t.sousId === e.sousId
                                }));
                                return Object(r.a)(Object(r.a)({}, e), {}, {
                                    userData: t
                                })
                            }))
                        },
                        updatePoolsUserData: function(e, t) {
                            var n = t.payload,
                                a = n.field,
                                i = n.value,
                                u = n.sousId,
                                p = e.data.findIndex((function(e) {
                                    return e.sousId === u
                                }));
                            e.data[p] = Object(r.a)(Object(r.a)({}, e.data[p]), {}, {
                                userData: Object(r.a)(Object(r.a)({}, e.data[p].userData), {}, Object(s.a)({}, a, i))
                            })
                        }
                    }
                }),
                D = P.actions,
                N = D.setPoolsPublicData,
                F = D.setPoolsUserData,
                R = D.updatePoolsUserData,
                L = function() {
                    return function() {
                        var e = Object(u.a)(i.a.mark((function e(t) {
                            var n, a, u;
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, w();
                                    case 2:
                                        return n = e.sent, e.next = 5, g();
                                    case 5:
                                        a = e.sent, u = d.a.map((function(e) {
                                            var t = n.find((function(t) {
                                                    return t.sousId === e.sousId
                                                })),
                                                i = a.find((function(t) {
                                                    return t.sousId === e.sousId
                                                }));
                                            return Object(r.a)(Object(r.a)({}, t), i)
                                        })), t(N(u));
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                U = function(e) {
                    return function() {
                        var t = Object(u.a)(i.a.mark((function t(n) {
                            var a, u, s, r, p;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, I(e);
                                    case 2:
                                        return a = t.sent, t.next = 5, E(e);
                                    case 5:
                                        return u = t.sent, t.next = 8, S(e);
                                    case 8:
                                        return s = t.sent, t.next = 11, C(e);
                                    case 11:
                                        r = t.sent, p = d.a.map((function(e) {
                                            return {
                                                sousId: e.sousId,
                                                allowance: a[e.sousId],
                                                stakingTokenBalance: u[e.sousId],
                                                stakedBalance: s[e.sousId],
                                                pendingReward: r[e.sousId]
                                            }
                                        })), n(F(p));
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                W = function(e, t) {
                    return function() {
                        var n = Object(u.a)(i.a.mark((function n(a) {
                            var u;
                            return i.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, I(t);
                                    case 2:
                                        u = n.sent, a(R({
                                            sousId: e,
                                            field: "allowance",
                                            value: u[e]
                                        }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                J = function(e, t) {
                    return function() {
                        var n = Object(u.a)(i.a.mark((function n(a) {
                            var u;
                            return i.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, E(t);
                                    case 2:
                                        u = n.sent, a(R({
                                            sousId: e,
                                            field: "stakingTokenBalance",
                                            value: u[e]
                                        }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                H = function(e, t) {
                    return function() {
                        var n = Object(u.a)(i.a.mark((function n(a) {
                            var u;
                            return i.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, S(t);
                                    case 2:
                                        u = n.sent, a(R({
                                            sousId: e,
                                            field: "stakedBalance",
                                            value: u[e]
                                        }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                Q = function(e, t) {
                    return function() {
                        var n = Object(u.a)(i.a.mark((function n(a) {
                            var u;
                            return i.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, C(t);
                                    case 2:
                                        u = n.sent, a(R({
                                            sousId: e,
                                            field: "pendingReward",
                                            value: u[e]
                                        }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                };
            t.a = P.reducer
        },
        82: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return O
            })), n.d(t, "e", (function() {
                return h
            })), n.d(t, "l", (function() {
                return x
            })), n.d(t, "j", (function() {
                return j
            })), n.d(t, "d", (function() {
                return k
            })), n.d(t, "k", (function() {
                return A
            })), n.d(t, "i", (function() {
                return M
            })), n.d(t, "b", (function() {
                return _
            })), n.d(t, "c", (function() {
                return I
            })), n.d(t, "f", (function() {
                return E
            })), n.d(t, "g", (function() {
                return S
            })), n.d(t, "h", (function() {
                return C
            }));
            var a = n(76),
                i = n(341),
                u = n(22),
                s = n(18),
                r = n(399),
                p = n(400),
                o = n(401),
                d = n(402),
                y = n(63),
                c = n(172),
                l = n(403),
                m = n(404),
                f = n(405),
                b = n(406),
                T = n(83),
                v = n(92),
                w = n(407),
                g = function(e, t, n) {
                    return new(null !== n && void 0 !== n ? n : a.a).eth.Contract(e, t)
                },
                O = function(e, t) {
                    return g(y, e, t)
                },
                h = function(e, t) {
                    return g(l, e, t)
                },
                x = function(e, t) {
                    var n = i.b.find((function(t) {
                            return t.sousId === e
                        })),
                        a = n.poolCategory === u.a.BINANCE ? w : v;
                    return g(a, Object(s.a)(n.contractAddress), t)
                },
                j = function(e) {
                    return g(m, Object(s.k)(), e)
                },
                k = function(e) {
                    return g(c, Object(s.d)(), e)
                },
                A = function(e) {
                    return g(r, Object(s.i)(), e)
                },
                M = function(e) {
                    return g(p, Object(s.j)(), e)
                },
                _ = function(e) {
                    return g(o, Object(s.b)(), e)
                },
                I = function(e) {
                    return g(d, Object(s.c)(), e)
                },
                E = function(e) {
                    return g(f, Object(s.e)(), e)
                },
                S = function(e) {
                    return g(b, Object(s.f)(), e)
                },
                C = function(e) {
                    return g(T, Object(s.g)(), e)
                }
        },
        821: function(e, t, n) {},
        822: function(e, t, n) {},
        83: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract WardenToken","name":"_warden","type":"address"},{"internalType":"contract Tempest","name":"_tst","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"uint256","name":"_wardenPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"dev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"enterStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"leaveStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrator","outputs":[{"internalType":"contract IMigratorChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingWarden","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accWardenPerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IMigratorChef","name":"_migrator","type":"address"}],"name":"setMigrator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tst","outputs":[{"internalType":"contract Tempest","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"multiplierNumber","type":"uint256"}],"name":"updateMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"warden","outputs":[{"internalType":"contract WardenToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wardenPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        84: function(e, t, n) {
            "use strict";
            t.a = {
                LIGHT_MODE: "light",
                SPACE_MODE: "space"
            }
        },
        847: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, i, u, s, r = n(0),
                p = n.n(r),
                o = n(87),
                d = n.n(o),
                y = n(90),
                c = n(36),
                l = n(14),
                m = n.n(l),
                f = n(20),
                b = n(232),
                T = function() {
                    var e = Object(b.a)().login;
                    Object(r.useEffect)((function() {
                        var t = window.localStorage.getItem(f.k);
                        t && t !== f.c.BSC ? e(t) : "undefined" !== typeof window.ethereum && window.innerWidth <= 768 && (e(f.c.Injected), window.localStorage.setItem("connectorId", f.c.Injected))
                    }), [e])
                },
                v = n(53),
                w = function() {
                    var e = Object(v.g)();
                    Object(r.useEffect)((function() {
                        document.title = "WARDEN SWAP Best Price Swap on Binance Smart Chain - $".concat(Number(e).toLocaleString(void 0, {
                            minimumFractionDigits: 3,
                            maximumFractionDigits: 3
                        }))
                    }))
                },
                g = n(13),
                O = n(2),
                h = n(3),
                x = n(9),
                j = n(8),
                k = n(15),
                A = function(e) {
                    Object(x.a)(n, e);
                    var t = Object(j.a)(n);

                    function n(e) {
                        var a;
                        return Object(O.a)(this, n), (a = t.call(this, e)).state = {
                            hasError: !1
                        }, a
                    }
                    return Object(h.a)(n, [{
                        key: "componentDidCatch",
                        value: function(e) {
                            var t, n = "ChunkLoadError" === e.name,
                                a = "CSS_CHUNK_LOAD_FAILED" === e.code,
                                i = n || a,
                                u = !!(null === (t = window.history.state) || void 0 === t ? void 0 : t.isRecoveringFromChunkError);
                            if (i && !u) {
                                var s = Object(g.a)(Object(g.a)({}, window.history.state), {}, {
                                    isRecoveringFromChunkError: !0
                                });
                                return window.history.replaceState(s, ""), void window.location.reload()
                            }
                            throw e
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state.hasError,
                                t = this.props.fallback;
                            return e ? t : Object(k.jsx)(r.Suspense, Object(g.a)({}, this.props))
                        }
                    }], [{
                        key: "getDerivedStateFromError",
                        value: function() {
                            return {
                                hasError: !0
                            }
                        }
                    }]), n
                }(p.a.Component),
                M = n(30),
                _ = function() {
                    var e = Object(M.c)((function(e) {
                            return e.toasts.data
                        })),
                        t = Object(v.k)().remove;
                    return Object(k.jsx)(f.j, {
                        toasts: e,
                        onRemove: function(e) {
                            return t(e)
                        }
                    })
                },
                I = n(70),
                E = n(6),
                S = E.d.div(a || (a = Object(I.a)(["\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmax-width: 1200px;\n\tpadding-left: 16px;\n\tpadding-right: 16px;\n\n\t", " {\n\t\tpadding-left: 24px;\n\t\tpadding-right: 24px;\n\t}\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                C = Object(E.d)(S)(i || (i = Object(I.a)(["\n\tpadding-top: 16px;\n\n\t", " {\n\t\tpadding-top: 37px;\n\t}\n\n\t", " {\n\t\tpadding-top: 100px;\n\t}\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                }), (function(e) {
                    return e.theme.mediaQueries.lg
                })),
                B = Object(E.d)(C)(u || (u = Object(I.a)(["\n\tdisplay: flex;\n\tflex: 1;\n\theight: calc(100vh);\n\tjustify-content: center;\n\talign-items: center;\n"]))),
                P = function() {
                    var e = Object(v.j)().spaceMode;
                    return Object(k.jsx)(B, {
                        children: Object(k.jsx)("img", {
                            src: "/images/farms/loading".concat(e ? "-space" : "", ".svg"),
                            alt: "loading",
                            width: "50%",
                            height: "50%"
                        })
                    })
                },
                D = n(35),
                N = function(e) {
                    var t = Object(r.useState)(!1),
                        n = Object(D.a)(t, 2),
                        a = n[0],
                        i = n[1],
                        u = Object(r.useCallback)((function() {
                            return i(!0)
                        }), [i]);
                    return Object(f.o)(u), a ? Object(k.jsx)("div", {
                        onAnimationEnd: function() {
                            return i(!1)
                        },
                        children: Object(k.jsx)(f.d, Object(g.a)({}, e))
                    }) : null
                },
                F = n(58),
                R = n(4),
                L = n.n(R),
                U = n(12),
                W = n(29),
                J = n(82),
                H = Object(J.c)(),
                Q = function() {
                    var e, t = Object(r.useState)(!1),
                        n = Object(D.a)(t, 2),
                        a = n[0],
                        i = n[1],
                        u = Object(r.useState)((e = {}, Object(W.a)(e, 11, !1), Object(W.a)(e, 10, !1), e)),
                        s = Object(D.a)(u, 2),
                        p = s[0],
                        o = s[1],
                        d = Object(F.c)().account;
                    return Object(r.useEffect)((function() {
                        d && function() {
                            var e = Object(U.a)(L.a.mark((function e() {
                                var t, n, a, u, s;
                                return L.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, H.methods.canClaimMultiple(d, [11, 10]).call();
                                        case 2:
                                            n = e.sent, a = Object(D.a)(n, 2), u = a[0], s = a[1], o((t = {}, Object(W.a)(t, 11, u), Object(W.a)(t, 10, s), t)), i(!0);
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()()
                    }), [d, o, i]), {
                        isSomeClaimable: Object.values(p).some((function(e) {
                            return !0 === e
                        })),
                        isBullClaimable: p[11],
                        isHiccupClaimable: p[10],
                        hasChecked: a
                    }
                },
                z = n(52),
                q = Object(z.a)(),
                G = n(68),
                K = n(230),
                V = n(408),
                Y = n(147),
                Z = Y.a.find((function(e) {
                    return 11 === e.bunnyId
                })),
                X = Y.a.find((function(e) {
                    return 10 === e.bunnyId
                })),
                $ = E.d.img(s || (s = Object(I.a)(["\n\tborder-radius: 50%;\n\tmargin-bottom: 24px;\n"]))),
                ee = function() {
                    Object(V.a)({
                        resize: !0,
                        particleCount: 200,
                        startVelocity: 30,
                        gravity: .5,
                        spread: 350,
                        origin: {
                            x: .5,
                            y: .3
                        }
                    })
                },
                te = function(e, t) {
                    return e && t ? Object(k.jsx)("img", {
                        src: "/images/bull-hiccup.png",
                        height: "128px",
                        width: "128px",
                        alt: "nft",
                        style: {
                            marginBottom: "24px"
                        }
                    }) : e ? Object(k.jsx)($, {
                        src: "/images/nfts/".concat(Z.images.md),
                        height: "128px",
                        width: "128px",
                        alt: "nft"
                    }) : Object(k.jsx)($, {
                        src: "/images/nfts/".concat(X.images.md),
                        height: "128px",
                        width: "128px",
                        alt: "nft"
                    })
                },
                ne = function(e) {
                    var t = e.isBullClaimable,
                        n = e.isHiccupClaimable,
                        a = e.onDismiss,
                        i = Object(K.a)(),
                        u = i(999, t && n ? "You won two Collectibles!" : "You won a collectible!");
                    return Object(r.useEffect)((function() {
                        Object(G.delay)(ee, 100)
                    }), []), Object(k.jsx)(f.g, {
                        title: i(999, "Congratulations!"),
                        onDismiss: a,
                        children: Object(k.jsxs)(f.e, {
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            children: [te(t, n), Object(k.jsx)(f.i, {
                                bold: !0,
                                color: "secondary",
                                fontSize: "24px",
                                mb: "24px",
                                children: u
                            }), Object(k.jsx)(f.a, {
                                onClick: function() {
                                    a(), q.push("/collectibles")
                                },
                                children: i(999, "Claim now")
                            })]
                        })
                    })
                },
                ae = function() {
                    var e = Object(r.useRef)(!1),
                        t = Q(),
                        n = t.isSomeClaimable,
                        a = t.isBullClaimable,
                        i = t.isHiccupClaimable,
                        u = Object(f.q)(Object(k.jsx)(ne, {
                            isBullClaimable: a,
                            isHiccupClaimable: i
                        })),
                        s = Object(D.a)(u, 1)[0],
                        p = Object(F.c)().account,
                        o = Object(c.f)().pathname;
                    return Object(r.useEffect)((function() {
                        o.includes("/collectibles") || !n || e.current || (s(), e.current = !0)
                    }), [o, n, e, s]), Object(r.useEffect)((function() {
                        e.current = !1
                    }), [p, e]), null
                },
                ie = (n(821), n(822), n(823), n(824), n(825), Object(r.lazy)((function() {
                    return Promise.all([n.e(0), n.e(1), n.e(8)]).then(n.bind(null, 1127))
                }))),
                ue = Object(r.lazy)((function() {
                    return Promise.all([n.e(0), n.e(6), n.e(1), n.e(7)]).then(n.bind(null, 1126))
                }));
            m.a.config({
                EXPONENTIAL_AT: 1e3,
                DECIMAL_PLACES: 80
            });
            var se = function() {
                    return Object(r.useEffect)((function() {
                        console.warn = function() {
                            return null
                        }
                    }), []), T(), Object(v.e)(), Object(v.d)(), Object(v.c)(), w(), Object(v.i)(), Object(k.jsxs)(y.a, {
                        children: [Object(k.jsx)(A, {
                            fallback: Object(k.jsx)(P, {}),
                            children: Object(k.jsxs)(c.c, {
                                children: [Object(k.jsx)(c.a, {
                                    exact: !0,
                                    path: "/",
                                    component: ie
                                }), Object(k.jsx)(c.a, {
                                    exact: !0,
                                    strict: !0,
                                    path: "/farm",
                                    component: ue
                                })]
                            })
                        }), Object(k.jsx)(N, {
                            iterations: 2
                        }), Object(k.jsx)(_, {}), Object(k.jsx)(ae, {})]
                    })
                },
                re = p.a.memo(se),
                pe = n(175),
                oe = n(409),
                de = n(176),
                ye = {
                    code: "en",
                    language: "English"
                },
                ce = [ye, {
                    code: "ar",
                    language: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629"
                }, {
                    code: "ca",
                    language: "Catal\xe0"
                }, {
                    code: "zh-CN",
                    language: "\u7b80\u4f53\u4e2d\u6587"
                }, {
                    code: "zh-TW",
                    language: "\u7e41\u9ad4\u4e2d\u6587"
                }, {
                    code: "cs",
                    language: "\u010ce\u0161tina"
                }, {
                    code: "da",
                    language: "Dansk"
                }, {
                    code: "de",
                    language: "Deutsch"
                }, {
                    code: "nl",
                    language: "Nederlands"
                }, {
                    code: "fil",
                    language: "Filipino"
                }, {
                    code: "fi",
                    language: "Suomalainen"
                }, {
                    code: "fr",
                    language: "Fran\xe7ais"
                }, {
                    code: "el",
                    language: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"
                }, {
                    code: "hi",
                    language: "\u0939\u093f\u0902\u0926\u0940"
                }, {
                    code: "hu",
                    language: "Magyar"
                }, {
                    code: "id",
                    language: "Bahasa Indonesia"
                }, {
                    code: "it",
                    language: "Italiano"
                }, {
                    code: "ja",
                    language: "\u65e5\u672c\u8a9e"
                }, {
                    code: "ko",
                    language: "\ud55c\uad6d\uc5b4"
                }, {
                    code: "pt-BR",
                    language: "Portugu\xeas"
                }, {
                    code: "ro",
                    language: "Rom\xe2n\u0103"
                }, {
                    code: "ru",
                    language: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439"
                }, {
                    code: "sr",
                    language: "\u0421\u0440\u043f\u0441\u043a\u0438"
                }, {
                    code: "es-ES",
                    language: "Espa\xf1ol"
                }, {
                    code: "sv-SE",
                    language: "Svenska"
                }, {
                    code: "ta",
                    language: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"
                }, {
                    code: "tr",
                    language: "T\xfcrk\xe7e"
                }, {
                    code: "uk",
                    language: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"
                }, {
                    code: "vi",
                    language: "Ti\u1ebfng Vi\u1ec7t"
                }],
                le = "pancakeSwapLanguage",
                me = p.a.createContext({
                    selectedLanguage: ye,
                    setSelectedLanguage: function() {},
                    translatedLanguage: ye,
                    setTranslatedLanguage: function() {}
                }),
                fe = parseInt(Object({
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
                }).REACT_APP_CROWDIN_PROJECTID),
                be = new oe.StringTranslations({
                    token: Object({
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
                    }).REACT_APP_CROWDIN_APIKEY
                }),
                Te = function(e) {
                    var t = e.children,
                        n = Object(r.useState)(ye),
                        a = Object(D.a)(n, 2),
                        i = a[0],
                        u = a[1],
                        s = Object(r.useState)(ye),
                        p = Object(D.a)(s, 2),
                        o = p[0],
                        d = p[1],
                        y = Object(r.useState)([]),
                        c = Object(D.a)(y, 2),
                        l = c[0],
                        m = c[1];
                    Object(r.useEffect)((function() {
                        var e = localStorage.getItem(le);
                        if (e) {
                            var t = function(e) {
                                return ce.filter((function(t) {
                                    return t.code === e
                                }))[0]
                            }(e);
                            u(t)
                        } else u(ye)
                    }), []), Object(r.useEffect)((function() {
                        i && function(e) {
                            return be.listLanguageTranslations(fe, e.code, void 0, 8, 200)
                        }(i).then((function(e) {
                            e.data.length < 1 ? m([]) : m(e.data)
                        })).then((function() {
                            return d(i)
                        })).catch((function(e) {
                            m([]), console.error("Error while loading translations", e)
                        }))
                    }), [i, m]);
                    return Object(k.jsx)(me.Provider, {
                        value: {
                            selectedLanguage: i,
                            setSelectedLanguage: function(e) {
                                u(e), localStorage.setItem(le, e.code)
                            },
                            translatedLanguage: o,
                            setTranslatedLanguage: d
                        },
                        children: Object(k.jsx)(de.a.Provider, {
                            value: {
                                translations: l,
                                setTranslations: m
                            },
                            children: t
                        })
                    })
                },
                ve = "IS_DARK",
                we = p.a.createContext({
                    isDark: null,
                    toggleTheme: function() {
                        return null
                    }
                }),
                ge = function(e) {
                    var t = e.children,
                        n = Object(r.useState)((function() {
                            var e = localStorage.getItem(ve);
                            return !!e && JSON.parse(e)
                        })),
                        a = Object(D.a)(n, 2),
                        i = a[0],
                        u = a[1];
                    return Object(k.jsx)(we.Provider, {
                        value: {
                            isDark: i,
                            toggleTheme: function() {
                                u((function(e) {
                                    return localStorage.setItem(ve, JSON.stringify(!e)), !e
                                }))
                            }
                        },
                        children: Object(k.jsx)(E.a, {
                            theme: i ? f.l : f.m,
                            children: t
                        })
                    })
                },
                Oe = n(170),
                he = n(38),
                xe = n(142),
                je = n(88),
                ke = n(81),
                Ae = n(174),
                Me = n(89),
                _e = n(75),
                Ie = n(177),
                Ee = n(168),
                Se = n(141),
                Ce = Object(he.a)({
                    devTools: !1,
                    reducer: {
                        farms: xe.a,
                        toasts: je.b,
                        pools: ke.a,
                        prices: Ae.a,
                        profile: Me.a,
                        teams: _e.a,
                        achievements: Ie.a,
                        block: Ee.a,
                        setting: Se.a
                    }
                }),
                Be = function(e) {
                    var t = e.children;
                    return Object(k.jsx)(F.b, {
                        getLibrary: pe.b,
                        children: Object(k.jsx)(M.a, {
                            store: Ce,
                            children: Object(k.jsx)(ge, {
                                children: Object(k.jsx)(Te, {
                                    children: Object(k.jsx)(Oe.b, {
                                        children: Object(k.jsx)(f.h, {
                                            children: t
                                        })
                                    })
                                })
                            })
                        })
                    })
                };
            d.a.render(Object(k.jsx)(p.a.StrictMode, {
                children: Object(k.jsx)(Be, {
                    children: Object(k.jsx)(re, {})
                })
            }), document.getElementById("root"))
        },
        88: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            })), n.d(t, "d", (function() {
                return r
            })), n.d(t, "c", (function() {
                return p
            }));
            var a = n(38),
                i = Object(a.c)({
                    name: "toasts",
                    initialState: {
                        data: []
                    },
                    reducers: {
                        push: function(e, t) {
                            var n = t.payload,
                                a = e.data.findIndex((function(e) {
                                    return e.id === t.payload.id
                                }));
                            a >= 0 && e.data.splice(a, 1), e.data.unshift(n)
                        },
                        remove: function(e, t) {
                            var n = e.data.findIndex((function(e) {
                                return e.id === t.payload
                            }));
                            n >= 0 && e.data.splice(n, 1)
                        },
                        clear: function(e) {
                            e.data = []
                        }
                    }
                }),
                u = i.actions,
                s = u.clear,
                r = u.remove,
                p = u.push;
            t.b = i.reducer
        },
        89: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return x
            }));
            var a = n(4),
                i = n.n(a),
                u = n(12),
                s = n(38),
                r = n(398),
                p = n.n(r),
                o = n(82),
                d = n(145),
                y = n(147),
                c = function(e) {
                    var t = e[0],
                        n = e[1],
                        a = e[2],
                        i = e[3],
                        u = e[4],
                        s = e[5];
                    return {
                        userId: Number(t),
                        points: Number(n),
                        teamId: Number(a),
                        tokenId: Number(u),
                        nftAddress: i,
                        isActive: s
                    }
                },
                l = Object(o.k)(),
                m = Object(o.i)(),
                f = Object({
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
                }).REACT_APP_API_PROFILE,
                b = function() {
                    var e = Object(u.a)(i.a.mark((function e(t) {
                        var n, a, u, s;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, fetch("".concat(f, "/api/users/").concat(t));
                                case 3:
                                    if ((n = e.sent).ok) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return", "");
                                case 6:
                                    return e.next = 8, n.json();
                                case 8:
                                    return a = e.sent, u = a.username, s = void 0 === u ? "" : u, e.abrupt("return", s);
                                case 14:
                                    return e.prev = 14, e.t0 = e.catch(0), e.abrupt("return", "");
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 14]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                T = function() {
                    var e = Object(u.a)(i.a.mark((function e(t) {
                        var n, a, u, s, r, o, f, T, v, w, g, O, h, x;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, l.methods.hasRegistered(t).call();
                                case 3:
                                    if (n = e.sent) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return", {
                                        hasRegistered: n,
                                        profile: null
                                    });
                                case 6:
                                    return e.next = 8, l.methods.getUserProfile(t).call();
                                case 8:
                                    return a = e.sent, u = c(a), s = u.userId, r = u.points, o = u.teamId, f = u.tokenId, T = u.nftAddress, v = u.isActive, e.next = 12, Object(d.a)(o);
                                case 12:
                                    return w = e.sent, e.next = 15, b(t);
                                case 15:
                                    if (g = e.sent, !v) {
                                        e.next = 22;
                                        break
                                    }
                                    return e.next = 19, m.methods.getBunnyId(f).call();
                                case 19:
                                    h = e.sent, O = y.a.find((function(e) {
                                        return e.bunnyId === Number(h)
                                    })), p.a.set("profile_".concat(t), {
                                        username: g,
                                        avatar: "https://pancakeswap.finance/images/nfts/".concat(O.images.sm)
                                    }, {
                                        domain: "pancakeswap.finance",
                                        secure: !0,
                                        expires: 30
                                    });
                                case 22:
                                    return x = {
                                        userId: s,
                                        points: r,
                                        teamId: o,
                                        tokenId: f,
                                        username: g,
                                        nftAddress: T,
                                        isActive: v,
                                        nft: O,
                                        team: w
                                    }, e.abrupt("return", {
                                        hasRegistered: n,
                                        profile: x
                                    });
                                case 26:
                                    return e.prev = 26, e.t0 = e.catch(0), e.abrupt("return", null);
                                case 29:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 26]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                v = Object(s.c)({
                    name: "profile",
                    initialState: {
                        isInitialized: !1,
                        isLoading: !0,
                        hasRegistered: !1,
                        data: null
                    },
                    reducers: {
                        profileFetchStart: function(e) {
                            e.isLoading = !0
                        },
                        profileFetchSucceeded: function(e, t) {
                            var n = t.payload,
                                a = n.profile;
                            return {
                                isInitialized: !0,
                                isLoading: !1,
                                hasRegistered: n.hasRegistered,
                                data: a
                            }
                        },
                        profileFetchFailed: function(e) {
                            e.isLoading = !1, e.isInitialized = !0
                        },
                        addPoints: function(e, t) {
                            e.data.points += t.payload
                        }
                    }
                }),
                w = v.actions,
                g = w.profileFetchStart,
                O = w.profileFetchSucceeded,
                h = w.profileFetchFailed,
                x = (w.addPoints, function(e) {
                    return function() {
                        var t = Object(u.a)(i.a.mark((function t(n) {
                            var a;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, n(g()), t.next = 4, T(e);
                                    case 4:
                                        a = t.sent, n(O(a)), t.next = 11;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t.catch(0), n(h());
                                    case 11:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 8]
                            ])
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                });
            t.a = v.reducer
        },
        92: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_syrup","type":"address"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"poolInfo","outputs":[{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accRewardPerShare","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"syrup","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        }
    },
    [
        [847, 3, 4]
    ]
]);
//# sourceMappingURL=main.1f32e253.chunk.js.map