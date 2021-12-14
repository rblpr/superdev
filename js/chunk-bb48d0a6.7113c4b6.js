(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-bb48d0a6"], {
        "03df": function(t, i, e) {
            t.exports = e.p + "img/panther-logo-mobile.5a32ce22.svg"
        },
        "07899": function(t, i, e) {
            t.exports = e.p + "img/polygon-logo.0414ffd2.svg"
        },
        "08ea": function(t, i, e) {
            t.exports = e.p + "img/balancer-logo.048d68f0.svg"
        },
        "0d85": function(t, i, e) {
            t.exports = e.p + "img/mdex-logo-mobile.e5840c3c.svg"
        },
        "13b3": function(t, i, e) {},
        "1f88": function(t, i, e) {
            t.exports = e.p + "img/definix-logo-mobile.e34a043e.svg"
        },
        "2aa9": function(t, i, e) {
            t.exports = e.p + "img/bakery-logo-mobile.0bdb85da.svg"
        },
        "2b42": function(t, i, e) {
            t.exports = e.p + "img/fat-logo-mobile.e7fae356.svg"
        },
        "36ff": function(t, i, e) {
            t.exports = e.p + "img/panther-logo.d10e4411.svg"
        },
        "3a8e": function(t, i, e) {
            t.exports = e.p + "img/twindex-logo-mobile.8d9216a2.svg"
        },
        "3e35": function(t, i, e) {
            "use strict";
            var s = e("5530"),
                n = e("9d65"),
                r = e("4e82"),
                o = e("c3f0"),
                a = e("80d2"),
                l = e("58df"),
                c = Object(l["a"])(n["a"], Object(r["a"])("windowGroup", "v-window-item", "v-window")),
                g = c.extend().extend().extend({
                    name: "v-window-item",
                    directives: {
                        Touch: o["a"]
                    },
                    props: {
                        disabled: Boolean,
                        reverseTransition: {
                            type: [Boolean, String],
                            default: void 0
                        },
                        transition: {
                            type: [Boolean, String],
                            default: void 0
                        },
                        value: {
                            required: !1
                        }
                    },
                    data: function() {
                        return {
                            isActive: !1,
                            inTransition: !1
                        }
                    },
                    computed: {
                        classes: function() {
                            return this.groupClasses
                        },
                        computedTransition: function() {
                            return this.windowGroup.internalReverse ? "undefined" !== typeof this.reverseTransition ? this.reverseTransition || "" : this.windowGroup.computedTransition : "undefined" !== typeof this.transition ? this.transition || "" : this.windowGroup.computedTransition
                        }
                    },
                    methods: {
                        genDefaultSlot: function() {
                            return this.$slots.default
                        },
                        genWindowItem: function() {
                            return this.$createElement("div", {
                                staticClass: "v-window-item",
                                class: this.classes,
                                directives: [{
                                    name: "show",
                                    value: this.isActive
                                }],
                                on: this.$listeners
                            }, this.genDefaultSlot())
                        },
                        onAfterTransition: function() {
                            this.inTransition && (this.inTransition = !1, this.windowGroup.transitionCount > 0 && (this.windowGroup.transitionCount--, 0 === this.windowGroup.transitionCount && (this.windowGroup.transitionHeight = void 0)))
                        },
                        onBeforeTransition: function() {
                            this.inTransition || (this.inTransition = !0, 0 === this.windowGroup.transitionCount && (this.windowGroup.transitionHeight = Object(a["f"])(this.windowGroup.$el.clientHeight)), this.windowGroup.transitionCount++)
                        },
                        onTransitionCancelled: function() {
                            this.onAfterTransition()
                        },
                        onEnter: function(t) {
                            var i = this;
                            this.inTransition && this.$nextTick((function() {
                                i.computedTransition && i.inTransition && (i.windowGroup.transitionHeight = Object(a["f"])(t.clientHeight))
                            }))
                        }
                    },
                    render: function(t) {
                        var i = this;
                        return t("transition", {
                            props: {
                                name: this.computedTransition
                            },
                            on: {
                                beforeEnter: this.onBeforeTransition,
                                afterEnter: this.onAfterTransition,
                                enterCancelled: this.onTransitionCancelled,
                                beforeLeave: this.onBeforeTransition,
                                afterLeave: this.onAfterTransition,
                                leaveCancelled: this.onTransitionCancelled,
                                enter: this.onEnter
                            }
                        }, this.showLazyContent((function() {
                            return [i.genWindowItem()]
                        })))
                    }
                }),
                m = e("adda"),
                u = e("1c87"),
                d = Object(l["a"])(g, u["a"]);
            i["a"] = d.extend({
                name: "v-carousel-item",
                inheritAttrs: !1,
                methods: {
                    genDefaultSlot: function() {
                        return [this.$createElement(m["a"], {
                            staticClass: "v-carousel__item",
                            props: Object(s["a"])(Object(s["a"])({}, this.$attrs), {}, {
                                height: this.windowGroup.internalHeight
                            }),
                            on: this.$listeners,
                            scopedSlots: {
                                placeholder: this.$scopedSlots.placeholder
                            }
                        }, Object(a["k"])(this))]
                    },
                    genWindowItem: function() {
                        var t = this.generateRouteLink(),
                            i = t.tag,
                            e = t.data;
                        return e.staticClass = "v-window-item", e.directives.push({
                            name: "show",
                            value: this.isActive
                        }), this.$createElement(i, e, this.genDefaultSlot())
                    }
                }
            })
        },
        "40ee": function(t, i, e) {
            t.exports = e.p + "img/iron-logo-mobile.d126d9c0.svg"
        },
        "411f": function(t, i, e) {
            t.exports = e.p + "img/dfyn-logo-mobile.955a0cfb.svg"
        },
        4189: function(t, i, e) {
            t.exports = e.p + "img/iron-logo.cddc090b.svg"
        },
        "444b": function(t, i, e) {
            t.exports = e.p + "img/sushi-logo.affe7dc3.svg"
        },
        "467e": function(t, i, e) {
            t.exports = e.p + "img/biswap-logo-mobile.eee402a8.svg"
        },
        "47b0": function(t, i, e) {
            t.exports = e.p + "img/elipsis-logo-mobile.a8565f3d.svg"
        },
        "47bc": function(t, i, e) {
            t.exports = e.p + "img/dodo-logo-mobile.33a1cf63.svg"
        },
        "48cb": function(t, i, e) {
            t.exports = e.p + "img/jet-swap-logo-mobile.39ba14d5.svg"
        },
        "490e": function(t, i, e) {
            t.exports = e.p + "img/baby-logo.a1d855e0.svg"
        },
        "4d57": function(t, i, e) {
            t.exports = e.p + "img/bsc-logo.b3156a23.svg"
        },
        5675: function(t, i, e) {
            t.exports = e.p + "img/dfyn-logo.2978098f.svg"
        },
        "5a9e": function(t, i, e) {
            t.exports = e.p + "img/firebird-logo.5fc1b9bf.svg"
        },
        "5ad1": function(t, i, e) {
            t.exports = e.p + "img/quick-swap-logo-mobile.ef2320cf.svg"
        },
        "5d9f": function(t, i, e) {
            t.exports = e.p + "img/ape-logo-mobile.d92b7738.svg"
        },
        "5e66": function(t, i, e) {
            "use strict";
            var s = e("5530"),
                n = (e("a9e3"), e("63b7"), e("99af"), e("7db0"), e("c740"), e("13b3"), e("c3f0")),
                r = e("afdd"),
                o = e("9d26"),
                a = e("604c"),
                l = a["a"].extend({
                    name: "v-window",
                    directives: {
                        Touch: n["a"]
                    },
                    provide: function() {
                        return {
                            windowGroup: this
                        }
                    },
                    props: {
                        activeClass: {
                            type: String,
                            default: "v-window-item--active"
                        },
                        continuous: Boolean,
                        mandatory: {
                            type: Boolean,
                            default: !0
                        },
                        nextIcon: {
                            type: [Boolean, String],
                            default: "$next"
                        },
                        prevIcon: {
                            type: [Boolean, String],
                            default: "$prev"
                        },
                        reverse: Boolean,
                        showArrows: Boolean,
                        showArrowsOnHover: Boolean,
                        touch: Object,
                        touchless: Boolean,
                        value: {
                            required: !1
                        },
                        vertical: Boolean
                    },
                    data: function() {
                        return {
                            changedByDelimiters: !1,
                            internalHeight: void 0,
                            transitionHeight: void 0,
                            transitionCount: 0,
                            isBooted: !1,
                            isReverse: !1
                        }
                    },
                    computed: {
                        isActive: function() {
                            return this.transitionCount > 0
                        },
                        classes: function() {
                            return Object(s["a"])(Object(s["a"])({}, a["a"].options.computed.classes.call(this)), {}, {
                                "v-window--show-arrows-on-hover": this.showArrowsOnHover
                            })
                        },
                        computedTransition: function() {
                            if (!this.isBooted) return "";
                            var t = this.vertical ? "y" : "x",
                                i = this.internalReverse ? !this.isReverse : this.isReverse,
                                e = i ? "-reverse" : "";
                            return "v-window-".concat(t).concat(e, "-transition")
                        },
                        hasActiveItems: function() {
                            return Boolean(this.items.find((function(t) {
                                return !t.disabled
                            })))
                        },
                        hasNext: function() {
                            return this.continuous || this.internalIndex < this.items.length - 1
                        },
                        hasPrev: function() {
                            return this.continuous || this.internalIndex > 0
                        },
                        internalIndex: function() {
                            var t = this;
                            return this.items.findIndex((function(i, e) {
                                return t.internalValue === t.getValue(i, e)
                            }))
                        },
                        internalReverse: function() {
                            return this.$vuetify.rtl ? !this.reverse : this.reverse
                        }
                    },
                    watch: {
                        internalIndex: function(t, i) {
                            this.isReverse = this.updateReverse(t, i)
                        }
                    },
                    mounted: function() {
                        var t = this;
                        window.requestAnimationFrame((function() {
                            return t.isBooted = !0
                        }))
                    },
                    methods: {
                        genContainer: function() {
                            var t = [this.$slots.default];
                            return this.showArrows && t.push(this.genControlIcons()), this.$createElement("div", {
                                staticClass: "v-window__container",
                                class: {
                                    "v-window__container--is-active": this.isActive
                                },
                                style: {
                                    height: this.internalHeight || this.transitionHeight
                                }
                            }, t)
                        },
                        genIcon: function(t, i, e) {
                            var s, n = this,
                                a = {
                                    click: function(t) {
                                        t.stopPropagation(), n.changedByDelimiters = !0, e()
                                    }
                                },
                                l = {
                                    "aria-label": this.$vuetify.lang.t("$vuetify.carousel.".concat(t))
                                },
                                c = null != (s = null == this.$scopedSlots[t] ? void 0 : this.$scopedSlots[t]({
                                    on: a,
                                    attrs: l
                                })) ? s : [this.$createElement(r["a"], {
                                    props: {
                                        icon: !0
                                    },
                                    attrs: l,
                                    on: a
                                }, [this.$createElement(o["a"], {
                                    props: {
                                        large: !0
                                    }
                                }, i)])];
                            return this.$createElement("div", {
                                staticClass: "v-window__".concat(t)
                            }, c)
                        },
                        genControlIcons: function() {
                            var t = [],
                                i = this.$vuetify.rtl ? this.nextIcon : this.prevIcon;
                            if (this.hasPrev && i && "string" === typeof i) {
                                var e = this.genIcon("prev", i, this.prev);
                                e && t.push(e)
                            }
                            var s = this.$vuetify.rtl ? this.prevIcon : this.nextIcon;
                            if (this.hasNext && s && "string" === typeof s) {
                                var n = this.genIcon("next", s, this.next);
                                n && t.push(n)
                            }
                            return t
                        },
                        getNextIndex: function(t) {
                            var i = (t + 1) % this.items.length,
                                e = this.items[i];
                            return e.disabled ? this.getNextIndex(i) : i
                        },
                        getPrevIndex: function(t) {
                            var i = (t + this.items.length - 1) % this.items.length,
                                e = this.items[i];
                            return e.disabled ? this.getPrevIndex(i) : i
                        },
                        next: function() {
                            if (this.hasActiveItems && this.hasNext) {
                                var t = this.getNextIndex(this.internalIndex),
                                    i = this.items[t];
                                this.internalValue = this.getValue(i, t)
                            }
                        },
                        prev: function() {
                            if (this.hasActiveItems && this.hasPrev) {
                                var t = this.getPrevIndex(this.internalIndex),
                                    i = this.items[t];
                                this.internalValue = this.getValue(i, t)
                            }
                        },
                        updateReverse: function(t, i) {
                            var e = this.items.length,
                                s = e - 1;
                            return e <= 2 ? t < i : t === s && 0 === i || (0 !== t || i !== s) && t < i
                        }
                    },
                    render: function(t) {
                        var i = this,
                            e = {
                                staticClass: "v-window",
                                class: this.classes,
                                directives: []
                            };
                        if (!this.touchless) {
                            var s = this.touch || {
                                left: function() {
                                    i.$vuetify.rtl ? i.prev() : i.next()
                                },
                                right: function() {
                                    i.$vuetify.rtl ? i.next() : i.prev()
                                },
                                end: function(t) {
                                    t.stopPropagation()
                                },
                                start: function(t) {
                                    t.stopPropagation()
                                }
                            };
                            e.directives.push({
                                name: "touch",
                                value: s
                            })
                        }
                        return t("div", e, [this.genContainer()])
                    }
                }),
                c = e("ade3"),
                g = (e("c7cd"), e("6ece"), e("0789")),
                m = e("a9ad"),
                u = e("fe6c"),
                d = e("a452"),
                h = e("7560"),
                p = e("80d2"),
                f = e("58df"),
                v = Object(f["a"])(m["a"], Object(u["b"])(["absolute", "fixed", "top", "bottom"]), d["a"], h["a"]),
                x = v.extend({
                    name: "v-progress-linear",
                    props: {
                        active: {
                            type: Boolean,
                            default: !0
                        },
                        backgroundColor: {
                            type: String,
                            default: null
                        },
                        backgroundOpacity: {
                            type: [Number, String],
                            default: null
                        },
                        bufferValue: {
                            type: [Number, String],
                            default: 100
                        },
                        color: {
                            type: String,
                            default: "primary"
                        },
                        height: {
                            type: [Number, String],
                            default: 4
                        },
                        indeterminate: Boolean,
                        query: Boolean,
                        reverse: Boolean,
                        rounded: Boolean,
                        stream: Boolean,
                        striped: Boolean,
                        value: {
                            type: [Number, String],
                            default: 0
                        }
                    },
                    data: function() {
                        return {
                            internalLazyValue: this.value || 0
                        }
                    },
                    computed: {
                        __cachedBackground: function() {
                            return this.$createElement("div", this.setBackgroundColor(this.backgroundColor || this.color, {
                                staticClass: "v-progress-linear__background",
                                style: this.backgroundStyle
                            }))
                        },
                        __cachedBar: function() {
                            return this.$createElement(this.computedTransition, [this.__cachedBarType])
                        },
                        __cachedBarType: function() {
                            return this.indeterminate ? this.__cachedIndeterminate : this.__cachedDeterminate
                        },
                        __cachedBuffer: function() {
                            return this.$createElement("div", {
                                staticClass: "v-progress-linear__buffer",
                                style: this.styles
                            })
                        },
                        __cachedDeterminate: function() {
                            return this.$createElement("div", this.setBackgroundColor(this.color, {
                                staticClass: "v-progress-linear__determinate",
                                style: {
                                    width: Object(p["f"])(this.normalizedValue, "%")
                                }
                            }))
                        },
                        __cachedIndeterminate: function() {
                            return this.$createElement("div", {
                                staticClass: "v-progress-linear__indeterminate",
                                class: {
                                    "v-progress-linear__indeterminate--active": this.active
                                }
                            }, [this.genProgressBar("long"), this.genProgressBar("short")])
                        },
                        __cachedStream: function() {
                            return this.stream ? this.$createElement("div", this.setTextColor(this.color, {
                                staticClass: "v-progress-linear__stream",
                                style: {
                                    width: Object(p["f"])(100 - this.normalizedBuffer, "%")
                                }
                            })) : null
                        },
                        backgroundStyle: function() {
                            var t, i = null == this.backgroundOpacity ? this.backgroundColor ? 1 : .3 : parseFloat(this.backgroundOpacity);
                            return t = {
                                opacity: i
                            }, Object(c["a"])(t, this.isReversed ? "right" : "left", Object(p["f"])(this.normalizedValue, "%")), Object(c["a"])(t, "width", Object(p["f"])(this.normalizedBuffer - this.normalizedValue, "%")), t
                        },
                        classes: function() {
                            return Object(s["a"])({
                                "v-progress-linear--absolute": this.absolute,
                                "v-progress-linear--fixed": this.fixed,
                                "v-progress-linear--query": this.query,
                                "v-progress-linear--reactive": this.reactive,
                                "v-progress-linear--reverse": this.isReversed,
                                "v-progress-linear--rounded": this.rounded,
                                "v-progress-linear--striped": this.striped
                            }, this.themeClasses)
                        },
                        computedTransition: function() {
                            return this.indeterminate ? g["b"] : g["c"]
                        },
                        isReversed: function() {
                            return this.$vuetify.rtl !== this.reverse
                        },
                        normalizedBuffer: function() {
                            return this.normalize(this.bufferValue)
                        },
                        normalizedValue: function() {
                            return this.normalize(this.internalLazyValue)
                        },
                        reactive: function() {
                            return Boolean(this.$listeners.change)
                        },
                        styles: function() {
                            var t = {};
                            return this.active || (t.height = 0), this.indeterminate || 100 === parseFloat(this.normalizedBuffer) || (t.width = Object(p["f"])(this.normalizedBuffer, "%")), t
                        }
                    },
                    methods: {
                        genContent: function() {
                            var t = Object(p["k"])(this, "default", {
                                value: this.internalLazyValue
                            });
                            return t ? this.$createElement("div", {
                                staticClass: "v-progress-linear__content"
                            }, t) : null
                        },
                        genListeners: function() {
                            var t = this.$listeners;
                            return this.reactive && (t.click = this.onClick), t
                        },
                        genProgressBar: function(t) {
                            return this.$createElement("div", this.setBackgroundColor(this.color, {
                                staticClass: "v-progress-linear__indeterminate",
                                class: Object(c["a"])({}, t, !0)
                            }))
                        },
                        onClick: function(t) {
                            if (this.reactive) {
                                var i = this.$el.getBoundingClientRect(),
                                    e = i.width;
                                this.internalValue = t.offsetX / e * 100
                            }
                        },
                        normalize: function(t) {
                            return t < 0 ? 0 : t > 100 ? 100 : parseFloat(t)
                        }
                    },
                    render: function(t) {
                        var i = {
                            staticClass: "v-progress-linear",
                            attrs: {
                                role: "progressbar",
                                "aria-valuemin": 0,
                                "aria-valuemax": this.normalizedBuffer,
                                "aria-valuenow": this.indeterminate ? void 0 : this.normalizedValue
                            },
                            class: this.classes,
                            style: {
                                bottom: this.bottom ? 0 : void 0,
                                height: this.active ? Object(p["f"])(this.height) : 0,
                                top: this.top ? 0 : void 0
                            },
                            on: this.genListeners()
                        };
                        return t("div", i, [this.__cachedStream, this.__cachedBackground, this.__cachedBuffer, this.__cachedBar, this.genContent()])
                    }
                }),
                b = x,
                C = a["a"].extend({
                    name: "button-group",
                    provide: function() {
                        return {
                            btnToggle: this
                        }
                    },
                    computed: {
                        classes: function() {
                            return a["a"].options.computed.classes.call(this)
                        }
                    },
                    methods: {
                        genData: a["a"].options.methods.genData
                    }
                }),
                w = e("d9bd");
            i["a"] = l.extend({
                name: "v-carousel",
                props: {
                    continuous: {
                        type: Boolean,
                        default: !0
                    },
                    cycle: Boolean,
                    delimiterIcon: {
                        type: String,
                        default: "$delimiter"
                    },
                    height: {
                        type: [Number, String],
                        default: 500
                    },
                    hideDelimiters: Boolean,
                    hideDelimiterBackground: Boolean,
                    interval: {
                        type: [Number, String],
                        default: 6e3,
                        validator: function(t) {
                            return t > 0
                        }
                    },
                    mandatory: {
                        type: Boolean,
                        default: !0
                    },
                    progress: Boolean,
                    progressColor: String,
                    showArrows: {
                        type: Boolean,
                        default: !0
                    },
                    verticalDelimiters: {
                        type: String,
                        default: void 0
                    }
                },
                data: function() {
                    return {
                        internalHeight: this.height,
                        slideTimeout: void 0
                    }
                },
                computed: {
                    classes: function() {
                        return Object(s["a"])(Object(s["a"])({}, l.options.computed.classes.call(this)), {}, {
                            "v-carousel": !0,
                            "v-carousel--hide-delimiter-background": this.hideDelimiterBackground,
                            "v-carousel--vertical-delimiters": this.isVertical
                        })
                    },
                    isDark: function() {
                        return this.dark || !this.light
                    },
                    isVertical: function() {
                        return null != this.verticalDelimiters
                    }
                },
                watch: {
                    internalValue: "restartTimeout",
                    interval: "restartTimeout",
                    height: function(t, i) {
                        t !== i && t && (this.internalHeight = t)
                    },
                    cycle: function(t) {
                        t ? this.restartTimeout() : (clearTimeout(this.slideTimeout), this.slideTimeout = void 0)
                    }
                },
                created: function() {
                    this.$attrs.hasOwnProperty("hide-controls") && Object(w["a"])("hide-controls", ':show-arrows="false"', this)
                },
                mounted: function() {
                    this.startTimeout()
                },
                methods: {
                    genControlIcons: function() {
                        return this.isVertical ? null : l.options.methods.genControlIcons.call(this)
                    },
                    genDelimiters: function() {
                        return this.$createElement("div", {
                            staticClass: "v-carousel__controls",
                            style: {
                                left: "left" === this.verticalDelimiters && this.isVertical ? 0 : "auto",
                                right: "right" === this.verticalDelimiters ? 0 : "auto"
                            }
                        }, [this.genItems()])
                    },
                    genItems: function() {
                        for (var t = this, i = this.items.length, e = [], s = 0; s < i; s++) {
                            var n = this.$createElement(r["a"], {
                                staticClass: "v-carousel__controls__item",
                                attrs: {
                                    "aria-label": this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter", s + 1, i)
                                },
                                props: {
                                    icon: !0,
                                    small: !0,
                                    value: this.getValue(this.items[s], s)
                                }
                            }, [this.$createElement(o["a"], {
                                props: {
                                    size: 18
                                }
                            }, this.delimiterIcon)]);
                            e.push(n)
                        }
                        return this.$createElement(C, {
                            props: {
                                value: this.internalValue,
                                mandatory: this.mandatory
                            },
                            on: {
                                change: function(i) {
                                    t.internalValue = i
                                }
                            }
                        }, e)
                    },
                    genProgress: function() {
                        return this.$createElement(b, {
                            staticClass: "v-carousel__progress",
                            props: {
                                color: this.progressColor,
                                value: (this.internalIndex + 1) / this.items.length * 100
                            }
                        })
                    },
                    restartTimeout: function() {
                        this.slideTimeout && clearTimeout(this.slideTimeout), this.slideTimeout = void 0, window.requestAnimationFrame(this.startTimeout)
                    },
                    startTimeout: function() {
                        this.cycle && (this.slideTimeout = window.setTimeout(this.next, +this.interval > 0 ? +this.interval : 6e3))
                    }
                },
                render: function(t) {
                    var i = l.options.render.call(this, t);
                    return i.data.style = "height: ".concat(Object(p["f"])(this.height), ";"), this.hideDelimiters || i.children.push(this.genDelimiters()), (this.progress || this.progressColor) && i.children.push(this.genProgress()), i
                }
            })
        },
        "606f": function(t, i, e) {
            t.exports = e.p + "img/nerve-logo.2f67fa5d.svg"
        },
        6202: function(t, i, e) {
            t.exports = e.p + "img/biswap-logo.ddda159b.svg"
        },
        6245: function(t, i, e) {
            t.exports = e.p + "img/nerve-logo-mobile.aac4b345.svg"
        },
        "629d": function(t, i, e) {
            t.exports = e.p + "img/bakery-logo.c8cbbea7.svg"
        },
        "63b7": function(t, i, e) {},
        "65e9": function(t, i, e) {
            t.exports = e.p + "img/pancake-logo.f5180fde.svg"
        },
        6683: function(t, i, e) {
            t.exports = e.p + "img/curve-logo.3c89c0ba.svg"
        },
        "6c4a": function(t, i, e) {
            t.exports = e.p + "img/arbitrum-logo.a336340b.svg"
        },
        "6eb5": function(t, i, e) {
            t.exports = e.p + "img/julswap-logo-mobile.1e18baba.svg"
        },
        "6ec0": function(t, i, e) {
            t.exports = e.p + "img/firebird-logo-mobile.ee6a1863.svg"
        },
        "6ece": function(t, i, e) {},
        "6f94": function(t, i, e) {
            t.exports = e.p + "img/elipsis-logo.618cca7a.svg"
        },
        "70e0": function(t, i, e) {
            t.exports = e.p + "img/kyber-logo-mobile.1d5c8f19.svg"
        },
        7338: function(t, i, e) {
            t.exports = e.p + "img/baby-swap-logo-mobile.340b4cb3.svg"
        },
        "7b8b": function(t, i, e) {
            t.exports = e.p + "img/acryptos-logo-mobile.56a23bbe.svg"
        },
        "7c69": function(t, i, e) {
            t.exports = e.p + "img/acryptos-logo.33f24e8e.svg"
        },
        "7ea2": function(t, i, e) {
            t.exports = e.p + "img/ape-logo.3b8035dd.svg"
        },
        8172: function(t, i, e) {
            t.exports = e.p + "img/dodo-logo.aae02464.svg"
        },
        "84c5": function(t, i, e) {
            t.exports = e.p + "img/polydex-logo.3d416247.svg"
        },
        "8dd7": function(t, i, e) {
            t.exports = e.p + "img/dopple-logo.440e2b34.svg"
        },
        "963a": function(t, i, e) {
            t.exports = e.p + "img/wault-logo-mobile.60eca506.svg"
        },
        "9c63": function(t, i, e) {
            t.exports = e.p + "img/latte-swap-logo-mobile.b81568d6.svg"
        },
        "9c86": function(t, i, e) {
            t.exports = e.p + "img/partners-icon.1fa3ba77.svg"
        },
        "9d53": function(t, i, e) {
            t.exports = e.p + "img/julswap-logo.483558c8.svg"
        },
        a31d: function(t, i, e) {
            t.exports = e.p + "img/pancake-logo-mobile.e27ed7ee.svg"
        },
        afdd: function(t, i, e) {
            "use strict";
            var s = e("8336");
            i["a"] = s["a"]
        },
        b3f5: function(t, i, e) {
            t.exports = e.p + "img/uniswap-logo-mobile.9c41fedb.svg"
        },
        b45f: function(t, i, e) {
            t.exports = e.p + "img/jetswap-logo.e5aebf2f.svg"
        },
        b64f: function(t, i, e) {
            t.exports = e.p + "img/polydex-logo-mobile.d853ec64.svg"
        },
        c0fe: function(t, i, e) {
            t.exports = e.p + "img/definix-logo.ddda3e75.svg"
        },
        d041: function(t, i, e) {
            t.exports = e.p + "img/smoothy-logo.7d5dba5e.svg"
        },
        d88a: function(t, i, e) {
            t.exports = e.p + "img/latte-logo.803d2f33.svg"
        },
        dce4: function(t, i, e) {
            t.exports = e.p + "img/smoothy-logo-mobile.b01a6c90.svg"
        },
        e0e1: function(t, i, e) {
            t.exports = e.p + "img/twindex-logo.e1931a59.svg"
        },
        e6df: function(t, i, e) {
            t.exports = e.p + "img/wault-logo.b1965077.svg"
        },
        e81e: function(t, i, e) {
            t.exports = e.p + "img/balancer-logo-mobile.17d47d1e.svg"
        },
        e97d: function(t, i, e) {
            t.exports = e.p + "img/fat-logo.0ed0dd82.svg"
        },
        f5e5: function(t, i, e) {
            "use strict";
            var s = function() {
                    var t = this,
                        i = t.$createElement,
                        s = t._self._c || i;
                    return s("div", [s("v-row", {
                        staticClass: "pt-100",
                        attrs: {
                            align: "right",
                            justify: "right"
                        }
                    }, [s("div", {
                        staticStyle: {
                            margin: "0 auto"
                        }
                    }, [s("right", [s("img", {
                        staticClass: "img inline-img",
                        staticStyle: {
                            padding: "0 20px"
                        },
                        attrs: {
                            src: e("9c86")
                        }
                    }), s("h1", {
                        staticStyle: {
                            display: "inline"
                        }
                    }, [t._v("Connected DEX")])])], 1)]), s("div", {
                        staticClass: "isDesktop"
                    }, [s("v-row", {
                        staticStyle: {
                            padding: "50px 15%",
                            "margin-top": "50px"
                        },
                        attrs: {
                            align: "center",
                            justify: "center"
                        }
                    }, [s("v-col", {
                        attrs: {
                            cols: "12"
                        }
                    }, [s("center", [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("4d57")
                        }
                    })])], 1), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("65e9")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("e0e1")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("606f")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("6f94")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("7c69")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("36ff")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("e6df")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("9d53")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("629d")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("c0fe")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("f6bf")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("7ea2")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("8dd7")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("e97d")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("8172")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("6202")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("b45f")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("d041")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("d88a")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("490e")
                        }
                    })])], 1), s("v-row", {
                        staticStyle: {
                            padding: "50px 15%"
                        },
                        attrs: {
                            align: "center",
                            justify: "center"
                        }
                    }, [s("v-col", {
                        attrs: {
                            cols: "12"
                        }
                    }, [s("center", [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("07899")
                        }
                    })])], 1), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("b45f")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("f819")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("444b")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("6683")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("e6df")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("5675")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("7ea2")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("fe5a")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("08ea")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("4189")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("84c5")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("5a9e")
                        }
                    })])], 1), s("v-row", {
                        staticStyle: {
                            padding: "50px 15%"
                        },
                        attrs: {
                            align: "center",
                            justify: "center"
                        }
                    }, [s("v-col", {
                        attrs: {
                            cols: "12"
                        }
                    }, [s("center", [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("6c4a")
                        }
                    })])], 1), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("f682")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("08ea")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("444b")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("6683")
                        }
                    })]), s("v-col", {
                        attrs: {
                            xs: "4",
                            sm: "4",
                            md: "3",
                            lg: "3",
                            xl: "2"
                        }
                    }, [s("img", {
                        staticClass: "img inline-img",
                        attrs: {
                            src: e("8172")
                        }
                    })])], 1)], 1), s("div", {
                        staticClass: "isMobile",
                        staticStyle: {
                            "margin-top": "50px"
                        }
                    }, [s("v-carousel", {
                        attrs: {
                            interval: "5000",
                            height: "150",
                            cycle: "",
                            "hide-delimiters": !0,
                            touchless: !0,
                            "show-arrows": !1
                        }
                    }, [s("v-carousel-item", [s("center", [s("img", {
                        staticClass: "img inline-img partner-logo",
                        attrs: {
                            src: e("a31d")
                        }
                    }), s("img", {
                        staticClass: "img inline-img partner-logo",
                        attrs: {
                            src: e("3a8e")
                        }
                    }), s("img", {
                        staticClass: "img inline-img partner-logo",
                        attrs: {
                            src: e("6245")
                        }
                    }), s("img", {
                        staticClass: "img inline-img partner-logo",
                        attrs: {
                            src: e("47b0")
                        }
                    })])], 1), s("v-carousel-item", [s("center", [s("img", {
                        staticClass: "img inline-img partner-logo",
                        attrs: {
                            src: e("7b8b")
                        }
                    }), s("img", {
                        staticClass: "img inline-img partner-logo",
                        attrs: {
                            src: e("03df")
                        }
                    }), s("img", {
                        staticClass: "img inline-img partner-logo",
                        attrs: {
                            src: e("963a")
                        }
                    }), s("img", {
                        staticClass: "img inline-img partner-logo",
                        attrs: {
                            src: e("6eb5")
                        }
                    })])], 1), s("v-carousel-item", [s("center", [s("img", {
                        staticClass: "img inline-img partner-logo",
                        attrs: {
                            src: e("2aa9")
                        }
                    }), s("img", {
                        staticClass: "img inline-img partner-logo",
                        attrs: {
                            src: e("1f88")
                        }
                    }), s("img", {
                        staticClass: "img inline-img partner-logo",
                        attrs: {
                            src: e("0d85")
                        }
                    }), s("img", {
                        staticClass: "img inline-img partner-logo",
                        attrs: {
                            src: e("5d9f")
                        }
                    })])], 1), s("v-carousel-item", [s("center", [s("img", {
                        staticClass: "img inline-img partner-logo",
                        attrs: {
                            src: e("48cb")
                        }
                    }), s("img", {
                        staticClass: "img inline-img partner-logo",
                        attrs: {
                            src: e("dce4")
                        }
                    }), s("img", {
                        staticClass: "img inline-img partner-logo",
                        attrs: {
                            src: e("9c63")
                        }
                    }), s("img", {
                        staticClass: "img inline-img partner-logo",
                        attrs: {
                            src: e("7338")
                        }
                    })])], 1), s("v-carousel-item", [s("center", [s("img", {
                        staticClass: "img inline-img partner-logo",
                        attrs: {
                            src: e("ff30")
                        }
                    }), s("img", {
                        staticClass: "img inline-img partner-logo",
                        attrs: {
                            src: e("2b42")
                        }
                    }), s("img", {
                        staticClass: "img inline-img partner-logo",
                        attrs: {
                            src: e("467e")
                        }
                    }), s("img", {
                        staticClass: "img inline-img partner-logo",
                        attrs: {
                            src: e("47bc")
                        }
                    })])], 1), s("v-carousel-item", [s("center", [s("img", {
                        staticClass: "img inline-img partner-logo",
                        attrs: {
                            src: e("5ad1")
                        }
                    }), s("img", {
                        staticClass: "img inline-img partner-logo",
                        attrs: {
                            src: e("411f")
                        }
                    }), s("img", {
                        staticClass: "img inline-img partner-logo",
                        attrs: {
                            src: e("70e0")
                        }
                    }), s("img", {
                        staticClass: "img inline-img partner-logo",
                        attrs: {
                            src: e("e81e")
                        }
                    })])], 1), s("v-carousel-item", [s("center", [s("img", {
                        staticClass: "",
                        attrs: {
                            src: e("")
                        }
                    }), s("", {
                        staticClass: "",
                        attrs: {
                            src: e("")
                        }
                    }), s("", {
                        staticClass: "",
                        attrs: {
                            src: e("")
                        }
                    }), s("", {
                        staticClass: "",
                        attrs: {
                            src: e("")
                        }
                    })])], 1)], 1)], 1)], 1)
                },
                n = [],
                r = {
                    name: "Partners"
                },
                o = r,
                a = e("2877"),
                l = e("6544"),
                c = e.n(l),
                g = e("5e66"),
                m = e("3e35"),
                u = e("62ad"),
                d = e("0fd9"),
                h = Object(a["a"])(o, s, n, !1, null, null, null);
            i["a"] = h.exports;
            c()(h, {
                VCarousel: g["a"],
                VCarouselItem: m["a"],
                VCol: u["a"],
                VRow: d["a"]
            })
        },
        f682: function(t, i, e) {
            t.exports = e.p + "img/uniswap-logo.08e72e8a.svg"
        },
        f6bf: function(t, i, e) {
            t.exports = e.p + "img/mdex-logo.ec2609b6.svg"
        },
        f819: function(t, i, e) {
            t.exports = e.p + "img/quick-logo.2cf6b591.svg"
        },
        fe5a: function(t, i, e) {
            t.exports = e.p + "img/kyber-logo.10a09c94.svg"
        },
        ff30: function(t, i, e) {
            t.exports = e.p + "img/dopple-logo-mobile.6a5ffed5.svg"
        }
    }
]);