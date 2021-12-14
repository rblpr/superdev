(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-ab17ae0c"],
  {
    "0959": function (t, e, r) {
      t.exports = r.p + "img/icon-optimism-retectangle.8bbf5601.svg";
    },
    "0a06": function (t, e, r) {
      "use strict";
      var n = r("c532"),
        s = r("30b5"),
        a = r("f6b4"),
        o = r("5270"),
        i = r("4a7b");

      function c(t) {
        (this.defaults = t),
          (this.interceptors = {
            request: new a(),
            response: new a(),
          });
      }
      (c.prototype.request = function (t) {
        "string" === typeof t
          ? ((t = arguments[1] || {}), (t.url = arguments[0]))
          : (t = t || {}),
          (t = i(this.defaults, t)),
          t.method
            ? (t.method = t.method.toLowerCase())
            : this.defaults.method
            ? (t.method = this.defaults.method.toLowerCase())
            : (t.method = "get");
        var e = [o, void 0],
          r = Promise.resolve(t);
        this.interceptors.request.forEach(function (t) {
          e.unshift(t.fulfilled, t.rejected);
        }),
          this.interceptors.response.forEach(function (t) {
            e.push(t.fulfilled, t.rejected);
          });
        while (e.length) r = r.then(e.shift(), e.shift());
        return r;
      }),
        (c.prototype.getUri = function (t) {
          return (
            (t = i(this.defaults, t)),
            s(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
          );
        }),
        n.forEach(["delete", "get", "head", "options"], function (t) {
          c.prototype[t] = function (e, r) {
            return this.request(
              i(r || {}, {
                method: t,
                url: e,
                data: (r || {}).data,
              })
            );
          };
        }),
        n.forEach(["post", "put", "patch"], function (t) {
          c.prototype[t] = function (e, r, n) {
            return this.request(
              i(n || {}, {
                method: t,
                url: e,
                data: r,
              })
            );
          };
        }),
        (t.exports = c);
    },
    "0df6": function (t, e, r) {
      "use strict";
      t.exports = function (t) {
        return function (e) {
          return t.apply(null, e);
        };
      };
    },
    "17d0": function (t, e, r) {
      t.exports = r.p + "img/Q1-icon.4d121e6e.svg";
    },
    "1d2b": function (t, e, r) {
      "use strict";
      t.exports = function (t, e) {
        return function () {
          for (var r = new Array(arguments.length), n = 0; n < r.length; n++)
            r[n] = arguments[n];
          return t.apply(e, r);
        };
      };
    },
    2444: function (t, e, r) {
      "use strict";
      (function (e) {
        var n = r("c532"),
          s = r("c8af"),
          a = {
            "Content-Type": "application/x-www-form-urlencoded",
          };

        function o(t, e) {
          !n.isUndefined(t) &&
            n.isUndefined(t["Content-Type"]) &&
            (t["Content-Type"] = e);
        }

        function i() {
          var t;
          return (
            ("undefined" !== typeof XMLHttpRequest ||
              ("undefined" !== typeof e &&
                "[object process]" === Object.prototype.toString.call(e))) &&
              (t = r("b50d")),
            t
          );
        }
        var c = {
          adapter: i(),
          transformRequest: [
            function (t, e) {
              return (
                s(e, "Accept"),
                s(e, "Content-Type"),
                n.isFormData(t) ||
                n.isArrayBuffer(t) ||
                n.isBuffer(t) ||
                n.isStream(t) ||
                n.isFile(t) ||
                n.isBlob(t)
                  ? t
                  : n.isArrayBufferView(t)
                  ? t.buffer
                  : n.isURLSearchParams(t)
                  ? (o(e, "application/x-www-form-urlencoded;charset=utf-8"),
                    t.toString())
                  : n.isObject(t)
                  ? (o(e, "application/json;charset=utf-8"), JSON.stringify(t))
                  : t
              );
            },
          ],
          transformResponse: [
            function (t) {
              if ("string" === typeof t)
                try {
                  t = JSON.parse(t);
                } catch (e) {}
              return t;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          validateStatus: function (t) {
            return t >= 200 && t < 300;
          },
          headers: {
            common: {
              Accept: "application/json, text/plain, */*",
            },
          },
        };
        n.forEach(["delete", "get", "head"], function (t) {
          c.headers[t] = {};
        }),
          n.forEach(["post", "put", "patch"], function (t) {
            c.headers[t] = n.merge(a);
          }),
          (t.exports = c);
      }.call(this, r("4362")));
    },
    "25d2": function (t) {
      t.exports = JSON.parse("{}");
    },
    "2d83": function (t, e, r) {
      "use strict";
      var n = r("387f");
      t.exports = function (t, e, r, s, a) {
        var o = new Error(t);
        return n(o, e, r, s, a);
      };
    },
    "2e67": function (t, e, r) {
      "use strict";
      t.exports = function (t) {
        return !(!t || !t.__CANCEL__);
      };
    },
    "30b5": function (t, e, r) {
      "use strict";
      var n = r("c532");

      function s(t) {
        return encodeURIComponent(t)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      t.exports = function (t, e, r) {
        if (!e) return t;
        var a;
        if (r) a = r(e);
        else if (n.isURLSearchParams(e)) a = e.toString();
        else {
          var o = [];
          n.forEach(e, function (t, e) {
            null !== t &&
              "undefined" !== typeof t &&
              (n.isArray(t) ? (e += "[]") : (t = [t]),
              n.forEach(t, function (t) {
                n.isDate(t)
                  ? (t = t.toISOString())
                  : n.isObject(t) && (t = JSON.stringify(t)),
                  o.push(s(e) + "=" + s(t));
              }));
          }),
            (a = o.join("&"));
        }
        if (a) {
          var i = t.indexOf("#");
          -1 !== i && (t = t.slice(0, i)),
            (t += (-1 === t.indexOf("?") ? "?" : "&") + a);
        }
        return t;
      };
    },
    "35e8": function (t, e, r) {
      t.exports = r.p + "img/icon-polygon-retectangle.2f78a8ce.svg";
    },
    "387f": function (t, e, r) {
      "use strict";
      t.exports = function (t, e, r, n, s) {
        return (
          (t.config = e),
          r && (t.code = r),
          (t.request = n),
          (t.response = s),
          (t.isAxiosError = !0),
          (t.toJSON = function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: this.config,
              code: this.code,
            };
          }),
          t
        );
      };
    },
    3934: function (t, e, r) {
      "use strict";
      var n = r("c532");
      t.exports = n.isStandardBrowserEnv()
        ? (function () {
            var t,
              e = /(msie|trident)/i.test(navigator.userAgent),
              r = document.createElement("a");

            function s(t) {
              var n = t;
              return (
                e && (r.setAttribute("href", n), (n = r.href)),
                r.setAttribute("href", n),
                {
                  href: r.href,
                  protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                  host: r.host,
                  search: r.search ? r.search.replace(/^\?/, "") : "",
                  hash: r.hash ? r.hash.replace(/^#/, "") : "",
                  hostname: r.hostname,
                  port: r.port,
                  pathname:
                    "/" === r.pathname.charAt(0)
                      ? r.pathname
                      : "/" + r.pathname,
                }
              );
            }
            return (
              (t = s(window.location.href)),
              function (e) {
                var r = n.isString(e) ? s(e) : e;
                return r.protocol === t.protocol && r.host === t.host;
              }
            );
          })()
        : (function () {
            return function () {
              return !0;
            };
          })();
    },
    4149: function (t, e, r) {
      t.exports = r.p + "img/carousel-banner.d66498f6.png";
    },
    "467f": function (t, e, r) {
      "use strict";
      var n = r("2d83");
      t.exports = function (t, e, r) {
        var s = r.config.validateStatus;
        r.status && s && !s(r.status)
          ? e(
              n(
                "Request failed with status code " + r.status,
                r.config,
                null,
                r.request,
                r
              )
            )
          : t(r);
      };
    },
    "4a7b": function (t, e, r) {
      "use strict";
      var n = r("c532");
      t.exports = function (t, e) {
        e = e || {};
        var r = {},
          s = ["url", "method", "data"],
          a = ["headers", "auth", "proxy", "params"],
          o = [
            "baseURL",
            "transformRequest",
            "transformResponse",
            "paramsSerializer",
            "timeout",
            "timeoutMessage",
            "withCredentials",
            "adapter",
            "responseType",
            "xsrfCookieName",
            "xsrfHeaderName",
            "onUploadProgress",
            "onDownloadProgress",
            "decompress",
            "maxContentLength",
            "maxBodyLength",
            "maxRedirects",
            "transport",
            "httpAgent",
            "httpsAgent",
            "cancelToken",
            "socketPath",
            "responseEncoding",
          ],
          i = ["validateStatus"];

        function c(t, e) {
          return n.isPlainObject(t) && n.isPlainObject(e)
            ? n.merge(t, e)
            : n.isPlainObject(e)
            ? n.merge({}, e)
            : n.isArray(e)
            ? e.slice()
            : e;
        }

        function u(s) {
          n.isUndefined(e[s])
            ? n.isUndefined(t[s]) || (r[s] = c(void 0, t[s]))
            : (r[s] = c(t[s], e[s]));
        }
        n.forEach(s, function (t) {
          n.isUndefined(e[t]) || (r[t] = c(void 0, e[t]));
        }),
          n.forEach(a, u),
          n.forEach(o, function (s) {
            n.isUndefined(e[s])
              ? n.isUndefined(t[s]) || (r[s] = c(void 0, t[s]))
              : (r[s] = c(void 0, e[s]));
          }),
          n.forEach(i, function (n) {
            n in e
              ? (r[n] = c(t[n], e[n]))
              : n in t && (r[n] = c(void 0, t[n]));
          });
        var l = s.concat(a).concat(o).concat(i),
          f = Object.keys(t)
            .concat(Object.keys(e))
            .filter(function (t) {
              return -1 === l.indexOf(t);
            });
        return n.forEach(f, u), r;
      };
    },
    5066: function (t, e, r) {
      t.exports = r.p + "img/Q4-icon.ebbc041d.svg";
    },
    5270: function (t, e, r) {
      "use strict";
      var n = r("c532"),
        s = r("c401"),
        a = r("2e67"),
        o = r("2444");

      function i(t) {
        t.cancelToken && t.cancelToken.throwIfRequested();
      }
      t.exports = function (t) {
        i(t),
          (t.headers = t.headers || {}),
          (t.data = s(t.data, t.headers, t.transformRequest)),
          (t.headers = n.merge(
            t.headers.common || {},
            t.headers[t.method] || {},
            t.headers
          )),
          n.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            function (e) {
              delete t.headers[e];
            }
          );
        var e = t.adapter || o.adapter;
        return e(t).then(
          function (e) {
            return (
              i(t), (e.data = s(e.data, e.headers, t.transformResponse)), e
            );
          },
          function (e) {
            return (
              a(e) ||
                (i(t),
                e &&
                  e.response &&
                  (e.response.data = s(
                    e.response.data,
                    e.response.headers,
                    t.transformResponse
                  ))),
              Promise.reject(e)
            );
          }
        );
      };
    },
    "5f02": function (t, e, r) {
      "use strict";
      t.exports = function (t) {
        return "object" === typeof t && !0 === t.isAxiosError;
      };
    },
    "7a77": function (t, e, r) {
      "use strict";

      function n(t) {
        this.message = t;
      }
      (n.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "");
      }),
        (n.prototype.__CANCEL__ = !0),
        (t.exports = n);
    },
    "7aac": function (t, e, r) {
      "use strict";
      var n = r("c532");
      t.exports = n.isStandardBrowserEnv()
        ? (function () {
            return {
              write: function (t, e, r, s, a, o) {
                var i = [];
                i.push(t + "=" + encodeURIComponent(e)),
                  n.isNumber(r) &&
                    i.push("expires=" + new Date(r).toGMTString()),
                  n.isString(s) && i.push("path=" + s),
                  n.isString(a) && i.push("domain=" + a),
                  !0 === o && i.push("secure"),
                  (document.cookie = i.join("; "));
              },
              read: function (t) {
                var e = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
                );
                return e ? decodeURIComponent(e[3]) : null;
              },
              remove: function (t) {
                this.write(t, "", Date.now() - 864e5);
              },
            };
          })()
        : (function () {
            return {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
          })();
    },
    "83ae": function (t, e, r) {
      t.exports = r.p + "img/icon-eth-retectangle.eae31897.svg";
    },
    "83b9": function (t, e, r) {
      "use strict";
      var n = r("d925"),
        s = r("e683");
      t.exports = function (t, e) {
        return t && !n(e) ? s(t, e) : e;
      };
    },
    8529: function (t) {
      t.exports = JSON.parse("{}");
    },
    "8df4": function (t, e, r) {
      "use strict";
      var n = r("7a77");

      function s(t) {
        if ("function" !== typeof t)
          throw new TypeError("executor must be a function.");
        var e;
        this.promise = new Promise(function (t) {
          e = t;
        });
        var r = this;
        t(function (t) {
          r.reason || ((r.reason = new n(t)), e(r.reason));
        });
      }
      (s.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
      }),
        (s.source = function () {
          var t,
            e = new s(function (e) {
              t = e;
            });
          return {
            token: e,
            cancel: t,
          };
        }),
        (t.exports = s);
    },
    9215: function (t, e, r) {
      t.exports = r.p + "img/Q2-icon.0a6a9ae5.svg";
    },
    "99b9": function (t, e, r) {
      t.exports = r.p + "img/stats-icon.f4b19b07.png";
    },
    b50d: function (t, e, r) {
      "use strict";
      var n = r("c532"),
        s = r("467f"),
        a = r("7aac"),
        o = r("30b5"),
        i = r("83b9"),
        c = r("c345"),
        u = r("3934"),
        l = r("2d83");
      t.exports = function (t) {
        return new Promise(function (e, r) {
          var f = t.data,
            d = t.headers;
          n.isFormData(f) && delete d["Content-Type"];
          var p = new XMLHttpRequest();
          if (t.auth) {
            var h = t.auth.username || "",
              m = t.auth.password
                ? unescape(encodeURIComponent(t.auth.password))
                : "";
            d.Authorization = "Basic " + btoa(h + ":" + m);
          }
          var g = i(t.baseURL, t.url);
          if (
            (p.open(
              t.method.toUpperCase(),
              o(g, t.params, t.paramsSerializer),
              !0
            ),
            (p.timeout = t.timeout),
            (p.onreadystatechange = function () {
              if (
                p &&
                4 === p.readyState &&
                (0 !== p.status ||
                  (p.responseURL && 0 === p.responseURL.indexOf("file:")))
              ) {
                var n =
                    "getAllResponseHeaders" in p
                      ? c(p.getAllResponseHeaders())
                      : null,
                  a =
                    t.responseType && "text" !== t.responseType
                      ? p.response
                      : p.responseText,
                  o = {
                    data: a,
                    status: p.status,
                    statusText: p.statusText,
                    headers: n,
                    config: t,
                    request: p,
                  };
                s(e, r, o), (p = null);
              }
            }),
            (p.onabort = function () {
              p && (r(l("Request aborted", t, "ECONNABORTED", p)), (p = null));
            }),
            (p.onerror = function () {
              r(l("Network Error", t, null, p)), (p = null);
            }),
            (p.ontimeout = function () {
              var e = "timeout of " + t.timeout + "ms exceeded";
              t.timeoutErrorMessage && (e = t.timeoutErrorMessage),
                r(l(e, t, "ECONNABORTED", p)),
                (p = null);
            }),
            n.isStandardBrowserEnv())
          ) {
            var v =
              (t.withCredentials || u(g)) && t.xsrfCookieName
                ? a.read(t.xsrfCookieName)
                : void 0;
            v && (d[t.xsrfHeaderName] = v);
          }
          if (
            ("setRequestHeader" in p &&
              n.forEach(d, function (t, e) {
                "undefined" === typeof f && "content-type" === e.toLowerCase()
                  ? delete d[e]
                  : p.setRequestHeader(e, t);
              }),
            n.isUndefined(t.withCredentials) ||
              (p.withCredentials = !!t.withCredentials),
            t.responseType)
          )
            try {
              p.responseType = t.responseType;
            } catch (b) {
              if ("json" !== t.responseType) throw b;
            }
          "function" === typeof t.onDownloadProgress &&
            p.addEventListener("progress", t.onDownloadProgress),
            "function" === typeof t.onUploadProgress &&
              p.upload &&
              p.upload.addEventListener("progress", t.onUploadProgress),
            t.cancelToken &&
              t.cancelToken.promise.then(function (t) {
                p && (p.abort(), r(t), (p = null));
              }),
            f || (f = null),
            p.send(f);
        });
      };
    },
    bb51: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "v-container",
            {
              staticClass: "dark design",
            },
            [
              n(
                "div",
                {
                  staticClass: "branding-herobanner",
                },
                [
                  n(
                    "div",
                    {
                      staticClass: "herobanner-left",
                    },
                    [
                      n(
                        "div",
                        {
                          staticClass: "hero-text",
                        },
                        [
                          n(
                            "span",
                            {
                              staticClass: "title",
                            },
                            [t._v("NOT YOUR")]
                          ),
                          n(
                            "p",
                            {
                              staticClass: "title yellow",
                            },
                            [t._v(" ORDINARY MEME COIN")]
                          ),
                          n(
                            "p",
                            {
                              staticClass: "subtitle",
                            },
                            [
                              t._v(
                                " The only Swap that gives you BUSD rewards "
                              ),
                            ]
                          ),
                        ]
                      ),
                      n(
                        "div",
                        {
                          staticClass: "chain-support-icons",
                        },
                        [
                          n("img", {
                            attrs: {
                              src: r("83ae"),
                              alt: "eth-retectangle",
                            },
                          }),
                          n("img", {
                            attrs: {
                              src: r("c47d"),
                              alt: "eth-retectangle",
                            },
                          }),
                          n("img", {
                            attrs: {
                              src: r("35e8"),
                              alt: "eth-retectangle",
                            },
                          }),
                          n("img", {
                            attrs: {
                              src: r("f700"),
                              alt: "eth-retectangle",
                            },
                          }),
                          n("img", {
                            attrs: {
                              src: r("0959"),
                              alt: "eth-retectangle",
                            },
                          }),
                        ]
                      ),
                      n(
                        "button",
                        {
                          staticClass: "launch-app-btn",
                          on: {
                            click: function (e) {
                              return t.gotoSwap();
                            },
                          },
                        },
                        [t._v(" Buy $TOY ")]
                      ),
                    ]
                  ),
                  n("div", [
                    n("img", {
                      staticClass: "branding-hero2",
                      attrs: {
                        src: r("fc86"),
                      },
                    }),
                  ]),
                ]
              ),
              n(
                "v-row",
                {
                  staticStyle: {
                    background: "#4401CA",
                    padding: "25px 0",
                  },
                  attrs: {
                    align: "center",
                    justify: "center",
                  },
                },
                [
                  n(
                    "v-col",
                    {
                      attrs: {
                        xs: "12",
                        sm: "12",
                        md: "3",
                        lg: "3",
                        xl: "3",
                      },
                    },
                    [
                      n("center", [
                        n("img", {
                          attrs: {
                            src: r("99b9"),
                            width: "75",
                            height: "120",
                          },
                        }),
                      ]),
                    ],
                    1
                  ),
                  n(
                    "v-col",
                    {
                      attrs: {
                        xs: "12",
                        sm: "12",
                        md: "3",
                        lg: "4",
                        xl: "3",
                      },
                    },
                    [
                      n(
                        "center",
                        {
                          staticStyle: {
                            "margin-top": "20px",
                          },
                        },
                        [
                          n(
                            "h2",
                            {
                              staticClass: "stat-number",
                            },
                            [
                              t._v(
                                "$ " +
                                  t._s(
                                    t._f("numberWithCommas")(
                                      this.totalSwapVolume
                                    )
                                  )
                              ),
                            ]
                          ),
                          n(
                            "h4",
                            {
                              staticClass: "carousel-txt",
                            },
                            [t._v("Total Trade Volume")]
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                  n(
                    "v-col",
                    {
                      attrs: {
                        xs: "12",
                        sm: "12",
                        md: "3",
                        lg: "4",
                        xl: "3",
                      },
                    },
                    [
                      n(
                        "center",
                        {
                          staticStyle: {
                            "margin-top": "20px",
                          },
                        },
                        [
                          n(
                            "h2",
                            {
                              staticClass: "stat-number",
                            },
                            [t._v(t._s(t._f("numberWithCommas")(t.accounts)))]
                          ),
                          n(
                            "h4",
                            {
                              staticClass: "carousel-txt",
                            },
                            [t._v("Holders")]
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              n(
                "v-row",
                {
                  staticClass: "branding-herobanner2",
                  staticStyle: {
                    "padding-bottom": "80px",
                  },
                  attrs: {
                    align: "center",
                    justify: "center",
                  },
                },
                [
                  n(
                    "v-col",
                    {
                      attrs: {
                        xs: "8",
                        sm: "6",
                        md: "6",
                        lg: "6",
                        xl: "6",
                      },
                    },
                    [
                      n(
                        "v-container",
                        {
                          staticClass: "branding-saerch",
                          staticStyle: {
                            "margin-left": "-4rem",
                          },
                        },
                        [
                          n("center", [
                            n("img", {
                              staticClass: "branding-hero",
                              attrs: {
                                src: r("de69"),
                              },
                            }),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  n(
                    "v-col",
                    {
                      attrs: {
                        xs: "4",
                        sm: "6",
                        md: "6",
                        lg: "6",
                        xl: "6",
                        align: "center",
                        justify: "center",
                      },
                    },
                    [
                      n(
                        "v-container",
                        {
                          staticClass: "middle",
                        },
                        [
                          n("h1", { staticClass: "title" }, [t._v("CHOOSE")]),
                          n("p"),
                          n(
                            "h1",
                            {
                              staticClass: "title yellow",
                              staticStyle: {
                                padding: "0 20px !important",
                              },
                            },
                            [t._v("THE WAY EARN")]
                          ),
                          n(
                            "h1",
                            {
                              staticClass: "subtitle",
                              staticStyle: {
                                padding: "0 20px !important",
                              },
                            },
                            [
                              t._v(
                                "Toyger gives you freedom to choose. By holding TOY and get BUSD Rewards or Stake to get another Coins."
                              ),
                            ]
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              /* Bannerbetween second and third */
              n(
                "v-row",
                {
                  staticStyle: {
                    "padding-top": "0",
                  },
                  attrs: {
                    align: "center",
                    justify: "center",
                  },
                },
                [
                  n(
                    "v-carousel",

                    {
                      staticStyle: {
                        height: "100vh",
                      },
                      attrs: {
                        interval: "5000",
                        cycle: "",
                        "hide-delimiters": !0,
                        touchless: !0,
                        "show-arrows": !1,
                      },
                    },
                    [
                      n(
                        "v-carousel-item", //class: v-responsive__content: banner and third hero
                        [
                          n(
                            "v-sheet",
                            {
                              attrs: {
                                color: "#4401CA",
                                tile: "",
                              },
                            },
                            [
                              n(
                                "v-row",
                                {
                                  staticClass: "fill-height",
                                  attrs: {
                                    align: "center",
                                    justify: "center",
                                  },
                                },
                                [
                                  n(
                                    "div",
                                    {
                                      staticStyle: {
                                        width: "100%",
                                        "margin-top": "1px",
                                      },
                                    },
                                    [
                                      n("center", [
                                        n(
                                          "",
                                          {
                                            staticClass: "",
                                          },
                                          [t._v("")]
                                        ),
                                        n(
                                          "h3",
                                          {
                                            staticClass: "",
                                          },
                                          [t._v(" ")]
                                        ),
                                        n("br"),
                                        n("img", {
                                          staticStyle: {
                                            height: "",
                                          },

                                          attrs: {
                                            src: r("4149"),
                                          },
                                        }),
                                      ]),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          // third hero

                          n(
                            "v-container",
                            {
                              staticStyle: {
                                height: "100%",
                                // background: "black",
                              },
                            },
                            [
                              n(
                                "v-row",
                                {
                                  staticClass: "last-div",
                                },
                                [
                                  n(
                                    "v-col",
                                    {
                                      staticClass: "last-div-left",

                                      attrs: {
                                        xs: "4",
                                        sm: "6",
                                        md: "6",
                                        lg: "6",
                                        xl: "6",
                                        align: "left",
                                        justify: "center",
                                      },
                                    },
                                    [
                                      n(
                                        "v-container",
                                        { staticClass: "last-div-text" },
                                        [
                                          n(
                                            "div",
                                            {
                                              staticStyle: {
                                                display: "flex",
                                              },
                                            },
                                            [
                                              n(
                                                "h1",
                                                { staticClass: "title yellow" },
                                                [t._v("TOYGER")]
                                              ),

                                              n(
                                                "h1",
                                                {
                                                  staticClass: "title",
                                                  staticStyle: {
                                                    "padding-left": "0.7rem",
                                                  },
                                                },
                                                [t._v("will makes")]
                                              ),
                                            ],
                                            1
                                          ),

                                          n(
                                            "h1",
                                            {
                                              staticClass: "title",
                                            },
                                            [t._v("fall in love in ")]
                                          ),
                                          n(
                                            "h1",
                                            {
                                              staticClass: "title",
                                            },
                                            [t._v("meme token")]
                                          ),
                                          n(
                                            "h1",
                                            {
                                              staticClass: "subtitle",
                                              staticStyle: {
                                                // padding: "0 20px !important",
                                              },
                                            },
                                            [
                                              t._v(
                                                "Toyger token is the HEART BEAT of the toygerSwap you can Buy it and Swap it"
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                      n(
                                        "button",
                                        {
                                          staticClass: "launch-app-btn",
                                          staticStyle: {
                                            "margin-left": "0",
                                            "border-radius": "34px",
                                            width: "200px",
                                          },
                                          on: {
                                            click: function (e) {
                                              return t.gotoSwap();
                                            },
                                          },
                                        },
                                        [t._v(" Buy TOY ")]
                                      ),
                                    ],
                                    1
                                  ),
                                  n(
                                    "v-col",
                                    {
                                      staticClass: "last-div-right",
                                      attrs: {
                                        xs: "4",
                                        sm: "6",
                                        md: "6",
                                        lg: "6",
                                        xl: "6",
                                        align: "center",
                                        justify: "center",
                                      },
                                    },
                                    [
                                      n(
                                        "v-container",
                                        [
                                          n("center", [
                                            n("img", {
                                              staticStyle: {
                                                width: "auto",
                                                height: "430px",
                                              },
                                              attrs: {
                                                src: r("fffe"),
                                                width: "466",
                                                height: "511",
                                              },
                                            }),
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
                      //   n(
                      //     "",
                      //     [
                      //       n(
                      //         "v-sheet",
                      //         {
                      //           staticStyle: {
                      //             "background-color": "black",
                      //           },
                      //           attrs: {
                      //             color: "#4401CA",
                      //             height: "100%",
                      //             tile: "",
                      //           },
                      //         },
                      //         [
                      //           n(
                      //             "v-row",
                      //             {
                      //               staticClass: "",
                      //               attrs: {
                      //                 align: "center",
                      //                 justify: "center",
                      //               },
                      //             },
                      //             [
                      //               n(
                      //                 "div",
                      //                 {
                      //                   staticStyle: {
                      //                     width: "100%",
                      //                     "margin-top": "1px",
                      //                   },
                      //                 },
                      //                 [
                      //                   n("center", [
                      //                     n(
                      //                       "h1",
                      //                       {
                      //                         staticClass: "",
                      //                       },
                      //                       [t._v("")]
                      //                     ),
                      //                     n("br"),
                      //                     n("br"),
                      //                     n(
                      //                       "h3",
                      //                       {
                      //                         staticClass: "",
                      //                       },
                      //                       [t._v(" ")]
                      //                     ),
                      //                     n("br"),
                      //                     n("", {
                      //                       staticClass: "",
                      //                       attrs: {
                      //                         src: n("f098"),
                      //                       },
                      //                     }),
                      //                   ]),
                      //                 ],
                      //                 1
                      //               ),
                      //             ]
                      //           ),
                      //         ],
                      //         1
                      //       ),
                      //     ],
                      //     1
                      //   ),
                    ],
                    1
                  ),
                ],
                1
              ),

              n("Partners"),
              n(
                "v-row",
                {
                  staticStyle: {
                    "margin-top": "2rem",
                  },
                },
                [n("br"), n("br")]
              ),
            ],
            1
          );
        },
        s = [],
        a = r("1da1"),
        o =
          (r("96cf"),
          r("1276"),
          r("ac1f"),
          r("d3b7"),
          r("25f0"),
          r("5319"),
          r("a15b"),
          r("f5e5")),
        i = r("901e"),
        c = r.n(i),
        u = (r("8529"), r("25d2"), r("bc3a")),
        l = r.n(u);
      var f = 13497,
        d = {
          name: "Home",
          data: function () {
            return {
              darkTheme: !1,
              lp: [],
              tvl: 6852944759.503,
              accounts: f,
              totalSwapVolume: 0,
            };
          },
          components: {
            Partners: o["a"],
          },
          filters: {
            numberWithCommas: function (t) {
              if (void 0 !== t && null !== t) {
                var e = t.toString().split(".");
                return (
                  (e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")),
                  e.join(".")
                );
              }
            },
          },
          created: function () {
            var t = this;
            return Object(a["a"])(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        t.getTotalVolumeAllChain(), t.getHolderAmount();
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          methods: {
            scrollLeft: function () {
              document.getElementById("swiper").scrollLeft -= 200;
            },
            scrollRight: function () {
              document.getElementById("swiper").scrollLeft += 200;
            },
            gotoSwap: function () {
              window.open("https://www.wardenswap.finance/", "_self");
            },
            gotoFullDoc: function () {
              window.open(
                "https://medium.com/wardenofficial/warden-the-master-plan-2021-roadmap-b04897f31867"
              );
            },
            getTotalVolumeAllChain: function () {
              var t = this;
              return Object(a["a"])(
                regeneratorRuntime.mark(function e() {
                  var r, n, s, a;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              l.a.get(
                                "https://w-exchange-stat.s3-ap-southeast-1.amazonaws.com/data.json"
                              )
                            );
                          case 3:
                            return (
                              (r = e.sent),
                              (e.next = 6),
                              l.a.get(
                                "https://w-exchange-stat-polygon.s3.ap-southeast-1.amazonaws.com/data.json"
                              )
                            );
                          case 6:
                            return (
                              (n = e.sent),
                              (e.next = 9),
                              l.a.get(
                                "https://w-exchange-stat-arbitrum.s3.ap-southeast-1.amazonaws.com/data.json"
                              )
                            );
                          case 9:
                            (s = e.sent),
                              (a = c()(r.data.totalVolumeAllTime)
                                .plus(n.data.totalVolumeAllTime)
                                .plus(s.data.totalVolumeAllTime)
                                .toString(10)),
                              (t.totalSwapVolume = a),
                              (e.next = 17);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e["catch"](0)),
                              console.error(e.t0);
                          case 17:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 14]]
                  );
                })
              )();
            },
            getHolderAmount: function () {
              var t = this;
              try {
                l.a
                  .get(
                    "https://storage.googleapis.com/warden-holders/count.json"
                  )
                  .then(function (e) {
                    var r,
                      n,
                      s =
                        null !==
                          (r =
                            null === e ||
                            void 0 === e ||
                            null === (n = e.data) ||
                            void 0 === n
                              ? void 0
                              : n.holders) && void 0 !== r
                          ? r
                          : f;
                    t.accounts = s;
                  });
              } catch (e) {}
            },
          },
        },
        p = d,
        h = (r("c25c"), r("2877")),
        m = r("6544"),
        g = r.n(m),
        v = r("5e66"),
        b = r("3e35"),
        y = r("62ad"),
        w = r("a523"),
        x = r("0fd9"),
        C = r("8dd9"),
        S = Object(h["a"])(p, n, s, !1, null, "5a991ccf", null);
      e["default"] = S.exports;
      g()(S, {
        VCarousel: v["a"],
        VCarouselItem: b["a"],
        VCol: y["a"],
        VContainer: w["a"],
        VRow: x["a"],
        VSheet: C["a"],
      });
    },
    bc3a: function (t, e, r) {
      t.exports = r("cee4");
    },
    c25c: function (t, e, r) {
      "use strict";
      r("da59");
    },
    c345: function (t, e, r) {
      "use strict";
      var n = r("c532"),
        s = [
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ];
      t.exports = function (t) {
        var e,
          r,
          a,
          o = {};
        return t
          ? (n.forEach(t.split("\n"), function (t) {
              if (
                ((a = t.indexOf(":")),
                (e = n.trim(t.substr(0, a)).toLowerCase()),
                (r = n.trim(t.substr(a + 1))),
                e)
              ) {
                if (o[e] && s.indexOf(e) >= 0) return;
                o[e] =
                  "set-cookie" === e
                    ? (o[e] ? o[e] : []).concat([r])
                    : o[e]
                    ? o[e] + ", " + r
                    : r;
              }
            }),
            o)
          : o;
      };
    },
    c401: function (t, e, r) {
      "use strict";
      var n = r("c532");
      t.exports = function (t, e, r) {
        return (
          n.forEach(r, function (r) {
            t = r(t, e);
          }),
          t
        );
      };
    },
    c47d: function (t, e, r) {
      t.exports = r.p + "img/icon-bsc-retectangle.c759aa7e.svg";
    },
    c532: function (t, e, r) {
      "use strict";
      var n = r("1d2b"),
        s = Object.prototype.toString;

      function a(t) {
        return "[object Array]" === s.call(t);
      }

      function o(t) {
        return "undefined" === typeof t;
      }

      function i(t) {
        return (
          null !== t &&
          !o(t) &&
          null !== t.constructor &&
          !o(t.constructor) &&
          "function" === typeof t.constructor.isBuffer &&
          t.constructor.isBuffer(t)
        );
      }

      function c(t) {
        return "[object ArrayBuffer]" === s.call(t);
      }

      function u(t) {
        return "undefined" !== typeof FormData && t instanceof FormData;
      }

      function l(t) {
        var e;
        return (
          (e =
            "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(t)
              : t && t.buffer && t.buffer instanceof ArrayBuffer),
          e
        );
      }

      function f(t) {
        return "string" === typeof t;
      }

      function d(t) {
        return "number" === typeof t;
      }

      function p(t) {
        return null !== t && "object" === typeof t;
      }

      function h(t) {
        if ("[object Object]" !== s.call(t)) return !1;
        var e = Object.getPrototypeOf(t);
        return null === e || e === Object.prototype;
      }

      function m(t) {
        return "[object Date]" === s.call(t);
      }

      function g(t) {
        return "[object File]" === s.call(t);
      }

      function v(t) {
        return "[object Blob]" === s.call(t);
      }

      function b(t) {
        return "[object Function]" === s.call(t);
      }

      function y(t) {
        return p(t) && b(t.pipe);
      }

      function w(t) {
        return (
          "undefined" !== typeof URLSearchParams && t instanceof URLSearchParams
        );
      }

      function x(t) {
        return t.replace(/^\s*/, "").replace(/\s*$/, "");
      }

      function C() {
        return (
          ("undefined" === typeof navigator ||
            ("ReactNative" !== navigator.product &&
              "NativeScript" !== navigator.product &&
              "NS" !== navigator.product)) &&
          "undefined" !== typeof window &&
          "undefined" !== typeof document
        );
      }

      function S(t, e) {
        if (null !== t && "undefined" !== typeof t)
          if (("object" !== typeof t && (t = [t]), a(t)))
            for (var r = 0, n = t.length; r < n; r++) e.call(null, t[r], r, t);
          else
            for (var s in t)
              Object.prototype.hasOwnProperty.call(t, s) &&
                e.call(null, t[s], s, t);
      }

      function E() {
        var t = {};

        function e(e, r) {
          h(t[r]) && h(e)
            ? (t[r] = E(t[r], e))
            : h(e)
            ? (t[r] = E({}, e))
            : a(e)
            ? (t[r] = e.slice())
            : (t[r] = e);
        }
        for (var r = 0, n = arguments.length; r < n; r++) S(arguments[r], e);
        return t;
      }

      function _(t, e, r) {
        return (
          S(e, function (e, s) {
            t[s] = r && "function" === typeof e ? n(e, r) : e;
          }),
          t
        );
      }

      function A(t) {
        return 65279 === t.charCodeAt(0) && (t = t.slice(1)), t;
      }
      t.exports = {
        isArray: a,
        isArrayBuffer: c,
        isBuffer: i,
        isFormData: u,
        isArrayBufferView: l,
        isString: f,
        isNumber: d,
        isObject: p,
        isPlainObject: h,
        isUndefined: o,
        isDate: m,
        isFile: g,
        isBlob: v,
        isFunction: b,
        isStream: y,
        isURLSearchParams: w,
        isStandardBrowserEnv: C,
        forEach: S,
        merge: E,
        extend: _,
        trim: x,
        stripBOM: A,
      };
    },
    c8af: function (t, e, r) {
      "use strict";
      var n = r("c532");
      t.exports = function (t, e) {
        n.forEach(t, function (r, n) {
          n !== e &&
            n.toUpperCase() === e.toUpperCase() &&
            ((t[e] = r), delete t[n]);
        });
      };
    },
    cee4: function (t, e, r) {
      "use strict";
      var n = r("c532"),
        s = r("1d2b"),
        a = r("0a06"),
        o = r("4a7b"),
        i = r("2444");

      function c(t) {
        var e = new a(t),
          r = s(a.prototype.request, e);
        return n.extend(r, a.prototype, e), n.extend(r, e), r;
      }
      var u = c(i);
      (u.Axios = a),
        (u.create = function (t) {
          return c(o(u.defaults, t));
        }),
        (u.Cancel = r("7a77")),
        (u.CancelToken = r("8df4")),
        (u.isCancel = r("2e67")),
        (u.all = function (t) {
          return Promise.all(t);
        }),
        (u.spread = r("0df6")),
        (u.isAxiosError = r("5f02")),
        (t.exports = u),
        (t.exports.default = u);
    },
    d925: function (t, e, r) {
      "use strict";
      t.exports = function (t) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t);
      };
    },
    da59: function (t, e, r) {},
    de69: function (t, e, r) {
      t.exports = r.p + "img/Toyger-Farm.png";
    },
    e683: function (t, e, r) {
      "use strict";
      t.exports = function (t, e) {
        return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
      };
    },
    f098: function (t, e, r) {
      t.exports = r.p + "img/carousel-banner2.aabfc75e.svg";
    },
    f6b4: function (t, e, r) {
      "use strict";
      var n = r("c532");

      function s() {
        this.handlers = [];
      }
      (s.prototype.use = function (t, e) {
        return (
          this.handlers.push({
            fulfilled: t,
            rejected: e,
          }),
          this.handlers.length - 1
        );
      }),
        (s.prototype.eject = function (t) {
          this.handlers[t] && (this.handlers[t] = null);
        }),
        (s.prototype.forEach = function (t) {
          n.forEach(this.handlers, function (e) {
            null !== e && t(e);
          });
        }),
        (t.exports = s);
    },
    f700: function (t, e, r) {
      t.exports = r.p + "img/icon-arbitrum-retectangle.4c39efb6.svg";
    },
    f8d5: function (t, e, r) {
      t.exports = r.p + "img/Q3-icon.dd57c739.svg";
    },
    fc86: function (t, e, r) {
      t.exports = r.p + "img/LANDING PAGE_COINS.png";
    },
    fffe: function (t, e, r) {
      t.exports = r.p + "new-images/TOYGER_FOOTER_CATPOSE.png";
    },
  },
]);
