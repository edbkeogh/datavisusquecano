// Version 2.8.1 timelines-chart - https://github.com/vasturiano/timelines-chart
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).TimelinesChart = t()
}(this, function() {
    "use strict";

    function e(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }! function(e, t) {
        void 0 === t && (t = {});
        var n = t.insertAt;
        if (e && "undefined" != typeof document) {
            var a = document.head || document.getElementsByTagName("head")[0],
                r = document.createElement("style");
            r.type = "text/css", "top" === n && a.firstChild ? a.insertBefore(r, a.firstChild) : a.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
        }
    }(//TODO formatting fix here too
      '.timelines-chart {\n\n  text-align: center;\n\n  /* Cancel selection interaction */\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n  .timelines-chart .axises line, .timelines-chart .axises path {\n      stroke: #808080;\n    }\n\n  .timelines-chart .axises .x-axis {\n      font: 12px sans-serif;\n    }\n\n  .timelines-chart .axises .x-grid line {\n      stroke: #D3D3D3;\n    }\n\n  .timelines-chart .axises .y-axis line, .timelines-chart .axises .y-axis path, .timelines-chart .axises .grp-axis line, .timelines-chart .axises .grp-axis path {\n        stroke: none;\n      }\n\n  .timelines-chart .axises .y-axis text, .timelines-chart .axises .grp-axis text {\n        fill: #2F4F4F;\n      }\n\n  .timelines-chart line.x-axis-date-marker {\n    stroke-width: 1;\n    stroke: #293cb7;\n    fill: "none";\n  }\n\n  .timelines-chart .series-group {\n    fill-opacity: 0.6;\n    stroke: #808080;\n    stroke-opacity: 0.2;\n  }\n\n  .timelines-chart .series-segment {\n    stroke: none;\n  }\n\n  .timelines-chart .series-group, .timelines-chart .series-segment {\n    cursor: crosshair;\n  }\n\n  .timelines-chart .legend {\n    font-family: Sans-Serif;\n  }\n\n  .timelines-chart .legend .legendText {\n      fill: #666;\n    }\n\n  .timelines-chart .reset-zoom-btn {\n    font-family: sans-serif;\n    fill: blue;\n    opacity: .6;\n    cursor: pointer;\n  }\n\n.brusher .grid-background {\n    fill: lightgrey;\n  }\n\n.brusher .axis path {\n    display: none;\n  }\n\n.brusher .tick text {\n    text-anchor: middle;\n  }\n\n.brusher .grid line, .brusher .grid path {\n      stroke: #fff;\n    }\n\n.chart-zoom-selection, .brusher .brush .selection {\n  stroke: blue;\n  stroke-opacity: 0.6;\n  fill: blue;\n  fill-opacity: 0.3;\n  shape-rendering: crispEdges;\n}\n\n.chart-tooltip {\n  color: #eee;\n  background: rgba(0,0,140,0.85);\n  padding: 5px;\n  border-radius: 3px;\n  font: 11px sans-serif;\n  z-index: 4000;\n}\n\n.chart-tooltip.group-tooltip {\n    font-size: 14px;\n  }\n\n.chart-tooltip.line-tooltip {\n    font-size: 13px;\n  }\n\n.chart-tooltip.group-tooltip, .chart-tooltip.line-tooltip {\n    font-weight: bold;\n  }\n\n.chart-tooltip.segment-tooltip {\n     text-align: center;\n  }');
    "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;

    function t(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }
    var n, a = t(function(e, t) {
            "undefined" != typeof self && self, e.exports = function(e) {
                var t = {};

                function n(a) {
                    if (t[a]) return t[a].exports;
                    var r = t[a] = {
                        i: a,
                        l: !1,
                        exports: {}
                    };
                    return e[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports
                }
                return n.m = e, n.c = t, n.d = function(e, t, a) {
                    n.o(e, t) || Object.defineProperty(e, t, {
                        configurable: !1,
                        enumerable: !0,
                        get: a
                    })
                }, n.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return n.d(t, "a", t), t
                }, n.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, n.p = "", n(n.s = 0)
            }([function(e, t, n) {
                var a, r, i, f;
                f = function(e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = function(e) {
                        var t = e.stateInit,
                            n = void 0 === t ? function() {
                                return {}
                            } : t,
                            a = e.props,
                            c = void 0 === a ? {} : a,
                            o = e.methods,
                            u = void 0 === o ? {} : o,
                            l = e.aliases,
                            s = void 0 === l ? {} : l,
                            d = e.init,
                            h = void 0 === d ? function() {} : d,
                            b = e.update,
                            g = void 0 === b ? function() {} : b,
                            p = Object.keys(c).map(function(e) {
                                return new f(e, c[e])
                            });
                        return function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = Object.assign({}, n instanceof Function ? n(e) : n, {
                                    initialised: !1
                                });

                            function a(t) {
                                return f(t, e), c(), a
                            }
                            var f = function(e, n) {
                                    h.call(a, e, t, n), t.initialised = !0
                                },
                                c = (0, r.default)(function() {
                                    t.initialised && g.call(a, t)
                                }, 1);
                            return p.forEach(function(e) {
                                a[e.name] = function(e) {
                                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function(e, t) {};
                                    return function(i) {
                                        return arguments.length ? (t[e] = i, r.call(a, i, t), n && c(), a) : t[e]
                                    }
                                }(e.name, e.triggerUpdate, e.onChange)
                            }), Object.keys(u).forEach(function(e) {
                                a[e] = function() {
                                    for (var n, r = arguments.length, i = Array(r), f = 0; f < r; f++) i[f] = arguments[f];
                                    return (n = u[e]).call.apply(n, [a, t].concat(i))
                                }
                            }), Object.entries(s).forEach(function(e) {
                                var t = i(e, 2),
                                    n = t[0],
                                    r = t[1];
                                return a[n] = a[r]
                            }), a.resetProps = function() {
                                return p.forEach(function(e) {
                                    a[e.name](e.defaultVal)
                                }), a
                            }, a.resetProps(), t._rerender = c, a
                        }
                    };
                    var a, r = (a = n) && a.__esModule ? a : {
                            default: a
                        },
                        i = function(e, t) {
                            if (Array.isArray(e)) return e;
                            if (Symbol.iterator in Object(e)) return function(e, t) {
                                var n = [],
                                    a = !0,
                                    r = !1,
                                    i = void 0;
                                try {
                                    for (var f, c = e[Symbol.iterator](); !(a = (f = c.next()).done) && (n.push(f.value), !t || n.length !== t); a = !0);
                                } catch (e) {
                                    r = !0, i = e
                                } finally {
                                    try {
                                        !a && c.return && c.return()
                                    } finally {
                                        if (r) throw i
                                    }
                                }
                                return n
                            }(e, t);
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        },
                        f = function e(t, n) {
                            var a = n.default,
                                r = void 0 === a ? null : a,
                                i = n.triggerUpdate,
                                f = void 0 === i || i,
                                c = n.onChange,
                                o = void 0 === c ? function(e, t) {} : c;
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, e), this.name = t, this.defaultVal = r, this.triggerUpdate = f, this.onChange = o
                        };
                    e.exports = t.default
                }, r = [e, t, n(1)], void 0 === (i = "function" == typeof(a = f) ? a.apply(t, r) : a) || (e.exports = i)
            }, function(e, t) {
                e.exports = function(e, t, n) {
                    var a, r, i, f, c;

                    function o() {
                        var u = Date.now() - f;
                        u < t && u >= 0 ? a = setTimeout(o, t - u) : (a = null, n || (c = e.apply(i, r), i = r = null))
                    }
                    null == t && (t = 100);
                    var u = function() {
                        i = this, r = arguments, f = Date.now();
                        var u = n && !a;
                        return a || (a = setTimeout(o, t)), u && (c = e.apply(i, r), i = r = null), c
                    };
                    return u.clear = function() {
                        a && (clearTimeout(a), a = null)
                    }, u.flush = function() {
                        a && (c = e.apply(i, r), i = r = null, clearTimeout(a), a = null)
                    }, u
                }
            }])
        }),
        r = (n = a) && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
    a.Kapsule;

    function i(e, t) {
        return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
    }
    var f, c;
    1 === (f = i).length && (c = f, f = function(e, t) {
        return i(c(e), t)
    });

    function o(e, t) {
        let n;
        if (void 0 === t)
            for (let t of e) null != t && t >= t && (void 0 === n || n < t) && (n = t);
        else {
            let a = -1;
            for (let r of e) null != (r = t(r, ++a, e)) && r >= r && (void 0 === n || n < r) && (n = r)
        }
        return n
    }

    function u(e, t) {
        let n;
        if (void 0 === t)
            for (let t of e) null != t && t >= t && (void 0 === n || n > t) && (n = t);
        else {
            let a = -1;
            for (let r of e) null != (r = t(r, ++a, e)) && r >= r && (void 0 === n || n > r) && (n = r)
        }
        return n
    }
    var l = Array.prototype.slice;

    function s(e) {
        return e
    }
    var d = 1,
        h = 2,
        b = 3,
        g = 4,
        p = 1e-6;

    function m(e) {
        return "translate(" + (e + .5) + ",0)"
    }

    function v(e) {
        return "translate(0," + (e + .5) + ")"
    }

    function y() {
        return !this.__axis
    }

    function w(e, t) {
        var n = [],
            a = null,
            r = null,
            i = 6,
            f = 6,
            c = 3,
            o = e === d || e === g ? -1 : 1,
            u = e === g || e === h ? "x" : "y",
            w = e === d || e === b ? m : v;

        function x(l) {
            var m = null == a ? t.ticks ? t.ticks.apply(t, n) : t.domain() : a,
                v = null == r ? t.tickFormat ? t.tickFormat.apply(t, n) : s : r,
                x = Math.max(i, 0) + c,
                _ = t.range(),
                M = +_[0] + .5,
                A = +_[_.length - 1] + .5,
                S = (t.bandwidth ? function(e) {
                    var t = Math.max(0, e.bandwidth() - 1) / 2;
                    return e.round() && (t = Math.round(t)),
                        function(n) {
                            return +e(n) + t
                        }
                } : function(e) {
                    return function(t) {
                        return +e(t)
                    }
                })(t.copy()),
                k = l.selection ? l.selection() : l,
                T = k.selectAll(".domain").data([null]),
                D = k.selectAll(".tick").data(m, t).order(),
                C = D.exit(),
                z = D.enter().append("g").attr("class", "tick"),
                N = D.select("line"),
                F = D.select("text");
            T = T.merge(T.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), D = D.merge(z), N = N.merge(z.append("line").attr("stroke", "currentColor").attr(u + "2", o * i)), F = F.merge(z.append("text").attr("fill", "currentColor").attr(u, o * x).attr("dy", e === d ? "0em" : e === b ? "0.71em" : "0.32em")), l !== k && (T = T.transition(l), D = D.transition(l), N = N.transition(l), F = F.transition(l), C = C.transition(l).attr("opacity", p).attr("transform", function(e) {
                return isFinite(e = S(e)) ? w(e) : this.getAttribute("transform")
            }), z.attr("opacity", p).attr("transform", function(e) {
                var t = this.parentNode.__axis;
                return w(t && isFinite(t = t(e)) ? t : S(e))
            })), C.remove(), T.attr("d", e === g || e == h ? f ? "M" + o * f + "," + M + "H0.5V" + A + "H" + o * f : "M0.5," + M + "V" + A : f ? "M" + M + "," + o * f + "V0.5H" + A + "V" + o * f : "M" + M + ",0.5H" + A), D.attr("opacity", 1).attr("transform", function(e) {
                return w(S(e))
            }), N.attr(u + "2", o * i), F.attr(u, o * x).text(v), k.filter(y).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === h ? "start" : e === g ? "end" : "middle"), k.each(function() {
                this.__axis = S
            })
        }
        return x.scale = function(e) {
            return arguments.length ? (t = e, x) : t
        }, x.ticks = function() {
            return n = l.call(arguments), x
        }, x.tickArguments = function(e) {
            return arguments.length ? (n = null == e ? [] : l.call(e), x) : n.slice()
        }, x.tickValues = function(e) {
            return arguments.length ? (a = null == e ? null : l.call(e), x) : a && a.slice()
        }, x.tickFormat = function(e) {
            return arguments.length ? (r = e, x) : r
        }, x.tickSize = function(e) {
            return arguments.length ? (i = f = +e, x) : i
        }, x.tickSizeInner = function(e) {
            return arguments.length ? (i = +e, x) : i
        }, x.tickSizeOuter = function(e) {
            return arguments.length ? (f = +e, x) : f
        }, x.tickPadding = function(e) {
            return arguments.length ? (c = +e, x) : c
        }, x
    }

    function x(e) {
        return w(b, e)
    }

    function _(e, t) {
        return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
    }

    function M(e) {
        var t;
        return 1 === e.length && (t = e, e = function(e, n) {
            return _(t(e), n)
        }), {
            left: function(t, n, a, r) {
                for (null == a && (a = 0), null == r && (r = t.length); a < r;) {
                    var i = a + r >>> 1;
                    e(t[i], n) < 0 ? a = i + 1 : r = i
                }
                return a
            },
            right: function(t, n, a, r) {
                for (null == a && (a = 0), null == r && (r = t.length); a < r;) {
                    var i = a + r >>> 1;
                    e(t[i], n) > 0 ? r = i : a = i + 1
                }
                return a
            }
        }
    }
    var A = M(_).right;
    var S = Math.sqrt(50),
        k = Math.sqrt(10),
        T = Math.sqrt(2);

    function D(e, t, n) {
        var a = (t - e) / Math.max(0, n),
            r = Math.floor(Math.log(a) / Math.LN10),
            i = a / Math.pow(10, r);
        return r >= 0 ? (i >= S ? 10 : i >= k ? 5 : i >= T ? 2 : 1) * Math.pow(10, r) : -Math.pow(10, -r) / (i >= S ? 10 : i >= k ? 5 : i >= T ? 2 : 1)
    }

    function C(e, t, n) {
        var a = Math.abs(t - e) / Math.max(0, n),
            r = Math.pow(10, Math.floor(Math.log(a) / Math.LN10)),
            i = a / r;
        return i >= S ? r *= 10 : i >= k ? r *= 5 : i >= T && (r *= 2), t < e ? -r : r
    }

    function z(e, t) {
        switch (arguments.length) {
            case 0:
                break;
            case 1:
                this.range(e);
                break;
            default:
                this.range(t).domain(e)
        }
        return this
    }

    function N() {}

    function F(e, t) {
        var n = new N;
        if (e instanceof N) e.each(function(e, t) {
            n.set(t, e)
        });
        else if (Array.isArray(e)) {
            var a, r = -1,
                i = e.length;
            if (null == t)
                for (; ++r < i;) n.set(r, e[r]);
            else
                for (; ++r < i;) n.set(t(a = e[r], r, e), a)
        } else if (e)
            for (var f in e) n.set(f, e[f]);
        return n
    }

    function H() {}
    N.prototype = F.prototype = {
        constructor: N,
        has: function(e) {
            return "$" + e in this
        },
        get: function(e) {
            return this["$" + e]
        },
        set: function(e, t) {
            return this["$" + e] = t, this
        },
        remove: function(e) {
            var t = "$" + e;
            return t in this && delete this[t]
        },
        clear: function() {
            for (var e in this) "$" === e[0] && delete this[e]
        },
        keys: function() {
            var e = [];
            for (var t in this) "$" === t[0] && e.push(t.slice(1));
            return e
        },
        values: function() {
            var e = [];
            for (var t in this) "$" === t[0] && e.push(this[t]);
            return e
        },
        entries: function() {
            var e = [];
            for (var t in this) "$" === t[0] && e.push({
                key: t.slice(1),
                value: this[t]
            });
            return e
        },
        size: function() {
            var e = 0;
            for (var t in this) "$" === t[0] && ++e;
            return e
        },
        empty: function() {
            for (var e in this)
                if ("$" === e[0]) return !1;
            return !0
        },
        each: function(e) {
            for (var t in this) "$" === t[0] && e(this[t], t.slice(1), this)
        }
    };
    var L = F.prototype;
    H.prototype = function(e, t) {
        var n = new H;
        if (e instanceof H) e.each(function(e) {
            n.add(e)
        });
        else if (e) {
            var a = -1,
                r = e.length;
            if (null == t)
                for (; ++a < r;) n.add(e[a]);
            else
                for (; ++a < r;) n.add(t(e[a], a, e))
        }
        return n
    }.prototype = {
        constructor: H,
        has: L.has,
        add: function(e) {
            return this["$" + (e += "")] = e, this
        },
        remove: L.remove,
        clear: L.clear,
        values: L.keys,
        size: L.size,
        empty: L.empty,
        each: L.each
    };
    var R = Array.prototype,
        U = R.map,
        E = R.slice,
        Y = {
            name: "implicit"
        };

    function P() {
        var e = F(),
            t = [],
            n = [],
            a = Y;

        function r(r) {
            var i = r + "",
                f = e.get(i);
            if (!f) {
                if (a !== Y) return a;
                e.set(i, f = t.push(r))
            }
            return n[(f - 1) % n.length]
        }
        return r.domain = function(n) {
            if (!arguments.length) return t.slice();
            t = [], e = F();
            for (var a, i, f = -1, c = n.length; ++f < c;) e.has(i = (a = n[f]) + "") || e.set(i, t.push(a));
            return r
        }, r.range = function(e) {
            return arguments.length ? (n = E.call(e), r) : n.slice()
        }, r.unknown = function(e) {
            return arguments.length ? (a = e, r) : a
        }, r.copy = function() {
            return P(t, n).unknown(a)
        }, z.apply(r, arguments), r
    }

    function O() {
        var e, t, n = P().unknown(void 0),
            a = n.domain,
            r = n.range,
            i = [0, 1],
            f = !1,
            c = 0,
            o = 0,
            u = .5;

        function l() {
            var n = a().length,
                l = i[1] < i[0],
                s = i[l - 0],
                d = i[1 - l];
            e = (d - s) / Math.max(1, n - c + 2 * o), f && (e = Math.floor(e)), s += (d - s - e * (n - c)) * u, t = e * (1 - c), f && (s = Math.round(s), t = Math.round(t));
            var h = function(e, t, n) {
                e = +e, t = +t, n = (r = arguments.length) < 2 ? (t = e, e = 0, 1) : r < 3 ? 1 : +n;
                for (var a = -1, r = 0 | Math.max(0, Math.ceil((t - e) / n)), i = new Array(r); ++a < r;) i[a] = e + a * n;
                return i
            }(n).map(function(t) {
                return s + e * t
            });
            return r(l ? h.reverse() : h)
        }
        return delete n.unknown, n.domain = function(e) {
            return arguments.length ? (a(e), l()) : a()
        }, n.range = function(e) {
            return arguments.length ? (i = [+e[0], +e[1]], l()) : i.slice()
        }, n.rangeRound = function(e) {
            return i = [+e[0], +e[1]], f = !0, l()
        }, n.bandwidth = function() {
            return t
        }, n.step = function() {
            return e
        }, n.round = function(e) {
            return arguments.length ? (f = !!e, l()) : f
        }, n.padding = function(e) {
            return arguments.length ? (c = Math.min(1, o = +e), l()) : c
        }, n.paddingInner = function(e) {
            return arguments.length ? (c = Math.min(1, e), l()) : c
        }, n.paddingOuter = function(e) {
            return arguments.length ? (o = +e, l()) : o
        }, n.align = function(e) {
            return arguments.length ? (u = Math.max(0, Math.min(1, e)), l()) : u
        }, n.copy = function() {
            return O(a(), i).round(f).paddingInner(c).paddingOuter(o).align(u)
        }, z.apply(l(), arguments)
    }

    function I() {
        return function e(t) {
            var n = t.copy;
            return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function() {
                return e(n())
            }, t
        }(O.apply(null, arguments).paddingInner(1))
    }

    function X(e, t, n) {
        e.prototype = t.prototype = n, n.constructor = e
    }

    function j(e, t) {
        var n = Object.create(e.prototype);
        for (var a in t) n[a] = t[a];
        return n
    }

    function q() {}
    var V = "\\s*([+-]?\\d+)\\s*",
        W = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        B = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        $ = /^#([0-9a-f]{3})$/,
        G = /^#([0-9a-f]{6})$/,
        Z = new RegExp("^rgb\\(" + [V, V, V] + "\\)$"),
        Q = new RegExp("^rgb\\(" + [B, B, B] + "\\)$"),
        J = new RegExp("^rgba\\(" + [V, V, V, W] + "\\)$"),
        K = new RegExp("^rgba\\(" + [B, B, B, W] + "\\)$"),
        ee = new RegExp("^hsl\\(" + [W, B, B] + "\\)$"),
        te = new RegExp("^hsla\\(" + [W, B, B, W] + "\\)$"),
        ne = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        };

    function ae(e) {
        var t;
        return e = (e + "").trim().toLowerCase(), (t = $.exec(e)) ? new oe((t = parseInt(t[1], 16)) >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | 240 & t, (15 & t) << 4 | 15 & t, 1) : (t = G.exec(e)) ? re(parseInt(t[1], 16)) : (t = Z.exec(e)) ? new oe(t[1], t[2], t[3], 1) : (t = Q.exec(e)) ? new oe(255 * t[1] / 100, 255 * t[2] / 100, 255 * t[3] / 100, 1) : (t = J.exec(e)) ? ie(t[1], t[2], t[3], t[4]) : (t = K.exec(e)) ? ie(255 * t[1] / 100, 255 * t[2] / 100, 255 * t[3] / 100, t[4]) : (t = ee.exec(e)) ? le(t[1], t[2] / 100, t[3] / 100, 1) : (t = te.exec(e)) ? le(t[1], t[2] / 100, t[3] / 100, t[4]) : ne.hasOwnProperty(e) ? re(ne[e]) : "transparent" === e ? new oe(NaN, NaN, NaN, 0) : null
    }

    function re(e) {
        return new oe(e >> 16 & 255, e >> 8 & 255, 255 & e, 1)
    }

    function ie(e, t, n, a) {
        return a <= 0 && (e = t = n = NaN), new oe(e, t, n, a)
    }

    function fe(e) {
        return e instanceof q || (e = ae(e)), e ? new oe((e = e.rgb()).r, e.g, e.b, e.opacity) : new oe
    }

    function ce(e, t, n, a) {
        return 1 === arguments.length ? fe(e) : new oe(e, t, n, null == a ? 1 : a)
    }

    function oe(e, t, n, a) {
        this.r = +e, this.g = +t, this.b = +n, this.opacity = +a
    }

    function ue(e) {
        return ((e = Math.max(0, Math.min(255, Math.round(e) || 0))) < 16 ? "0" : "") + e.toString(16)
    }

    function le(e, t, n, a) {
        return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new se(e, t, n, a)
    }

    function se(e, t, n, a) {
        this.h = +e, this.s = +t, this.l = +n, this.opacity = +a
    }

    function de(e, t, n) {
        return 255 * (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t)
    }
    X(q, ae, {
        displayable: function() {
            return this.rgb().displayable()
        },
        hex: function() {
            return this.rgb().hex()
        },
        toString: function() {
            return this.rgb() + ""
        }
    }), X(oe, ce, j(q, {
        brighter: function(e) {
            return e = null == e ? 1 / .7 : Math.pow(1 / .7, e), new oe(this.r * e, this.g * e, this.b * e, this.opacity)
        },
        darker: function(e) {
            return e = null == e ? .7 : Math.pow(.7, e), new oe(this.r * e, this.g * e, this.b * e, this.opacity)
        },
        rgb: function() {
            return this
        },
        displayable: function() {
            return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
        },
        hex: function() {
            return "#" + ue(this.r) + ue(this.g) + ue(this.b)
        },
        toString: function() {
            var e = this.opacity;
            return (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === e ? ")" : ", " + e + ")")
        }
    })), X(se, function(e, t, n, a) {
        return 1 === arguments.length ? function(e) {
            if (e instanceof se) return new se(e.h, e.s, e.l, e.opacity);
            if (e instanceof q || (e = ae(e)), !e) return new se;
            if (e instanceof se) return e;
            var t = (e = e.rgb()).r / 255,
                n = e.g / 255,
                a = e.b / 255,
                r = Math.min(t, n, a),
                i = Math.max(t, n, a),
                f = NaN,
                c = i - r,
                o = (i + r) / 2;
            return c ? (f = t === i ? (n - a) / c + 6 * (n < a) : n === i ? (a - t) / c + 2 : (t - n) / c + 4, c /= o < .5 ? i + r : 2 - i - r, f *= 60) : c = o > 0 && o < 1 ? 0 : f, new se(f, c, o, e.opacity)
        }(e) : new se(e, t, n, null == a ? 1 : a)
    }, j(q, {
        brighter: function(e) {
            return e = null == e ? 1 / .7 : Math.pow(1 / .7, e), new se(this.h, this.s, this.l * e, this.opacity)
        },
        darker: function(e) {
            return e = null == e ? .7 : Math.pow(.7, e), new se(this.h, this.s, this.l * e, this.opacity)
        },
        rgb: function() {
            var e = this.h % 360 + 360 * (this.h < 0),
                t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
                n = this.l,
                a = n + (n < .5 ? n : 1 - n) * t,
                r = 2 * n - a;
            return new oe(de(e >= 240 ? e - 240 : e + 120, r, a), de(e, r, a), de(e < 120 ? e + 240 : e - 120, r, a), this.opacity)
        },
        displayable: function() {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
        }
    }));
    var he = Math.PI / 180,
        be = 180 / Math.PI,
        ge = .96422,
        pe = 1,
        me = .82521,
        ve = 4 / 29,
        ye = 6 / 29,
        we = 3 * ye * ye,
        xe = ye * ye * ye;

    function _e(e) {
        if (e instanceof Me) return new Me(e.l, e.a, e.b, e.opacity);
        if (e instanceof De) {
            if (isNaN(e.h)) return new Me(e.l, 0, 0, e.opacity);
            var t = e.h * he;
            return new Me(e.l, Math.cos(t) * e.c, Math.sin(t) * e.c, e.opacity)
        }
        e instanceof oe || (e = fe(e));
        var n, a, r = Te(e.r),
            i = Te(e.g),
            f = Te(e.b),
            c = Ae((.2225045 * r + .7168786 * i + .0606169 * f) / pe);
        return r === i && i === f ? n = a = c : (n = Ae((.4360747 * r + .3850649 * i + .1430804 * f) / ge), a = Ae((.0139322 * r + .0971045 * i + .7141733 * f) / me)), new Me(116 * c - 16, 500 * (n - c), 200 * (c - a), e.opacity)
    }

    function Me(e, t, n, a) {
        this.l = +e, this.a = +t, this.b = +n, this.opacity = +a
    }

    function Ae(e) {
        return e > xe ? Math.pow(e, 1 / 3) : e / we + ve
    }

    function Se(e) {
        return e > ye ? e * e * e : we * (e - ve)
    }

    function ke(e) {
        return 255 * (e <= .0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055)
    }

    function Te(e) {
        return (e /= 255) <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
    }

    function De(e, t, n, a) {
        this.h = +e, this.c = +t, this.l = +n, this.opacity = +a
    }
    X(Me, function(e, t, n, a) {
        return 1 === arguments.length ? _e(e) : new Me(e, t, n, null == a ? 1 : a)
    }, j(q, {
        brighter: function(e) {
            return new Me(this.l + 18 * (null == e ? 1 : e), this.a, this.b, this.opacity)
        },
        darker: function(e) {
            return new Me(this.l - 18 * (null == e ? 1 : e), this.a, this.b, this.opacity)
        },
        rgb: function() {
            var e = (this.l + 16) / 116,
                t = isNaN(this.a) ? e : e + this.a / 500,
                n = isNaN(this.b) ? e : e - this.b / 200;
            return new oe(ke(3.1338561 * (t = ge * Se(t)) - 1.6168667 * (e = pe * Se(e)) - .4906146 * (n = me * Se(n))), ke(-.9787684 * t + 1.9161415 * e + .033454 * n), ke(.0719453 * t - .2289914 * e + 1.4052427 * n), this.opacity)
        }
    })), X(De, function(e, t, n, a) {
        return 1 === arguments.length ? function(e) {
            if (e instanceof De) return new De(e.h, e.c, e.l, e.opacity);
            if (e instanceof Me || (e = _e(e)), 0 === e.a && 0 === e.b) return new De(NaN, 0, e.l, e.opacity);
            var t = Math.atan2(e.b, e.a) * be;
            return new De(t < 0 ? t + 360 : t, Math.sqrt(e.a * e.a + e.b * e.b), e.l, e.opacity)
        }(e) : new De(e, t, n, null == a ? 1 : a)
    }, j(q, {
        brighter: function(e) {
            return new De(this.h, this.c, this.l + 18 * (null == e ? 1 : e), this.opacity)
        },
        darker: function(e) {
            return new De(this.h, this.c, this.l - 18 * (null == e ? 1 : e), this.opacity)
        },
        rgb: function() {
            return _e(this).rgb()
        }
    }));
    var Ce = -.14861,
        ze = 1.78277,
        Ne = -.29227,
        Fe = -.90649,
        He = 1.97294,
        Le = He * Fe,
        Re = He * ze,
        Ue = ze * Ne - Fe * Ce;

    function Ee(e, t, n, a) {
        return 1 === arguments.length ? function(e) {
            if (e instanceof Ye) return new Ye(e.h, e.s, e.l, e.opacity);
            e instanceof oe || (e = fe(e));
            var t = e.r / 255,
                n = e.g / 255,
                a = e.b / 255,
                r = (Ue * a + Le * t - Re * n) / (Ue + Le - Re),
                i = a - r,
                f = (He * (n - r) - Ne * i) / Fe,
                c = Math.sqrt(f * f + i * i) / (He * r * (1 - r)),
                o = c ? Math.atan2(f, i) * be - 120 : NaN;
            return new Ye(o < 0 ? o + 360 : o, c, r, e.opacity)
        }(e) : new Ye(e, t, n, null == a ? 1 : a)
    }

    function Ye(e, t, n, a) {
        this.h = +e, this.s = +t, this.l = +n, this.opacity = +a
    }

    function Pe(e) {
        return function() {
            return e
        }
    }

    function Oe(e, t) {
        return function(n) {
            return e + n * t
        }
    }

    function Ie(e) {
        return 1 == (e = +e) ? Xe : function(t, n) {
            return n - t ? function(e, t, n) {
                return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n,
                    function(a) {
                        return Math.pow(e + a * t, n)
                    }
            }(t, n, e) : Pe(isNaN(t) ? n : t)
        }
    }

    function Xe(e, t) {
        var n = t - e;
        return n ? Oe(e, n) : Pe(isNaN(e) ? t : e)
    }
    X(Ye, Ee, j(q, {
        brighter: function(e) {
            return e = null == e ? 1 / .7 : Math.pow(1 / .7, e), new Ye(this.h, this.s, this.l * e, this.opacity)
        },
        darker: function(e) {
            return e = null == e ? .7 : Math.pow(.7, e), new Ye(this.h, this.s, this.l * e, this.opacity)
        },
        rgb: function() {
            var e = isNaN(this.h) ? 0 : (this.h + 120) * he,
                t = +this.l,
                n = isNaN(this.s) ? 0 : this.s * t * (1 - t),
                a = Math.cos(e),
                r = Math.sin(e);
            return new oe(255 * (t + n * (Ce * a + ze * r)), 255 * (t + n * (Ne * a + Fe * r)), 255 * (t + n * (He * a)), this.opacity)
        }
    }));
    var je = function e(t) {
        var n = Ie(t);

        function a(e, t) {
            var a = n((e = ce(e)).r, (t = ce(t)).r),
                r = n(e.g, t.g),
                i = n(e.b, t.b),
                f = Xe(e.opacity, t.opacity);
            return function(t) {
                return e.r = a(t), e.g = r(t), e.b = i(t), e.opacity = f(t), e + ""
            }
        }
        return a.gamma = e, a
    }(1);
    var qe, Ve = (qe = function(e) {
        var t = e.length - 1;
        return function(n) {
            var a = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t),
                r = e[a],
                i = e[a + 1],
                f = a > 0 ? e[a - 1] : 2 * r - i,
                c = a < t - 1 ? e[a + 2] : 2 * i - r;
            return function(e, t, n, a, r) {
                var i = e * e,
                    f = i * e;
                return ((1 - 3 * e + 3 * i - f) * t + (4 - 6 * i + 3 * f) * n + (1 + 3 * e + 3 * i - 3 * f) * a + f * r) / 6
            }((n - a / t) * t, f, r, i, c)
        }
    }, function(e) {
        var t, n, a = e.length,
            r = new Array(a),
            i = new Array(a),
            f = new Array(a);
        for (t = 0; t < a; ++t) n = ce(e[t]), r[t] = n.r || 0, i[t] = n.g || 0, f[t] = n.b || 0;
        return r = qe(r), i = qe(i), f = qe(f), n.opacity = 1,
            function(e) {
                return n.r = r(e), n.g = i(e), n.b = f(e), n + ""
            }
    });

    function We(e, t) {
        return t -= e = +e,
            function(n) {
                return e + t * n
            }
    }
    var Be = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        $e = new RegExp(Be.source, "g");

    function Ge(e, t) {
        var n, a, r, i = Be.lastIndex = $e.lastIndex = 0,
            f = -1,
            c = [],
            o = [];
        for (e += "", t += "";
            (n = Be.exec(e)) && (a = $e.exec(t));)(r = a.index) > i && (r = t.slice(i, r), c[f] ? c[f] += r : c[++f] = r), (n = n[0]) === (a = a[0]) ? c[f] ? c[f] += a : c[++f] = a : (c[++f] = null, o.push({
            i: f,
            x: We(n, a)
        })), i = $e.lastIndex;
        return i < t.length && (r = t.slice(i), c[f] ? c[f] += r : c[++f] = r), c.length < 2 ? o[0] ? function(e) {
            return function(t) {
                return e(t) + ""
            }
        }(o[0].x) : function(e) {
            return function() {
                return e
            }
        }(t) : (t = o.length, function(e) {
            for (var n, a = 0; a < t; ++a) c[(n = o[a]).i] = n.x(e);
            return c.join("")
        })
    }

    function Ze(e, t) {
        var n, a = typeof t;
        return null == t || "boolean" === a ? Pe(t) : ("number" === a ? We : "string" === a ? (n = ae(t)) ? (t = n, je) : Ge : t instanceof ae ? je : t instanceof Date ? function(e, t) {
            var n = new Date;
            return t -= e = +e,
                function(a) {
                    return n.setTime(e + t * a), n
                }
        } : Array.isArray(t) ? function(e, t) {
            var n, a = t ? t.length : 0,
                r = e ? Math.min(a, e.length) : 0,
                i = new Array(r),
                f = new Array(a);
            for (n = 0; n < r; ++n) i[n] = Ze(e[n], t[n]);
            for (; n < a; ++n) f[n] = t[n];
            return function(e) {
                for (n = 0; n < r; ++n) f[n] = i[n](e);
                return f
            }
        } : "function" != typeof t.valueOf && "function" != typeof t.toString || isNaN(t) ? function(e, t) {
            var n, a = {},
                r = {};
            for (n in null !== e && "object" == typeof e || (e = {}), null !== t && "object" == typeof t || (t = {}), t) n in e ? a[n] = Ze(e[n], t[n]) : r[n] = t[n];
            return function(e) {
                for (n in a) r[n] = a[n](e);
                return r
            }
        } : We)(e, t)
    }

    function Qe(e, t) {
        return t -= e = +e,
            function(n) {
                return Math.round(e + t * n)
            }
    }
    var Je, Ke, et, tt, nt = 180 / Math.PI,
        at = {
            translateX: 0,
            translateY: 0,
            rotate: 0,
            skewX: 0,
            scaleX: 1,
            scaleY: 1
        };

    function rt(e, t, n, a, r, i) {
        var f, c, o;
        return (f = Math.sqrt(e * e + t * t)) && (e /= f, t /= f), (o = e * n + t * a) && (n -= e * o, a -= t * o), (c = Math.sqrt(n * n + a * a)) && (n /= c, a /= c, o /= c), e * a < t * n && (e = -e, t = -t, o = -o, f = -f), {
            translateX: r,
            translateY: i,
            rotate: Math.atan2(t, e) * nt,
            skewX: Math.atan(o) * nt,
            scaleX: f,
            scaleY: c
        }
    }

    function it(e, t, n, a) {
        function r(e) {
            return e.length ? e.pop() + " " : ""
        }
        return function(i, f) {
            var c = [],
                o = [];
            return i = e(i), f = e(f),
                function(e, a, r, i, f, c) {
                    if (e !== r || a !== i) {
                        var o = f.push("translate(", null, t, null, n);
                        c.push({
                            i: o - 4,
                            x: We(e, r)
                        }, {
                            i: o - 2,
                            x: We(a, i)
                        })
                    } else(r || i) && f.push("translate(" + r + t + i + n)
                }(i.translateX, i.translateY, f.translateX, f.translateY, c, o),
                function(e, t, n, i) {
                    e !== t ? (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), i.push({
                        i: n.push(r(n) + "rotate(", null, a) - 2,
                        x: We(e, t)
                    })) : t && n.push(r(n) + "rotate(" + t + a)
                }(i.rotate, f.rotate, c, o),
                function(e, t, n, i) {
                    e !== t ? i.push({
                        i: n.push(r(n) + "skewX(", null, a) - 2,
                        x: We(e, t)
                    }) : t && n.push(r(n) + "skewX(" + t + a)
                }(i.skewX, f.skewX, c, o),
                function(e, t, n, a, i, f) {
                    if (e !== n || t !== a) {
                        var c = i.push(r(i) + "scale(", null, ",", null, ")");
                        f.push({
                            i: c - 4,
                            x: We(e, n)
                        }, {
                            i: c - 2,
                            x: We(t, a)
                        })
                    } else 1 === n && 1 === a || i.push(r(i) + "scale(" + n + "," + a + ")")
                }(i.scaleX, i.scaleY, f.scaleX, f.scaleY, c, o), i = f = null,
                function(e) {
                    for (var t, n = -1, a = o.length; ++n < a;) c[(t = o[n]).i] = t.x(e);
                    return c.join("")
                }
        }
    }
    var ft = it(function(e) {
            return "none" === e ? at : (Je || (Je = document.createElement("DIV"), Ke = document.documentElement, et = document.defaultView), Je.style.transform = e, e = et.getComputedStyle(Ke.appendChild(Je), null).getPropertyValue("transform"), Ke.removeChild(Je), rt(+(e = e.slice(7, -1).split(","))[0], +e[1], +e[2], +e[3], +e[4], +e[5]))
        }, "px, ", "px)", "deg)"),
        ct = it(function(e) {
            return null == e ? at : (tt || (tt = document.createElementNS("http://www.w3.org/2000/svg", "g")), tt.setAttribute("transform", e), (e = tt.transform.baseVal.consolidate()) ? rt((e = e.matrix).a, e.b, e.c, e.d, e.e, e.f) : at)
        }, ", ", ")", ")");
    Math.SQRT2;

    function ot(e) {
        return function t(n) {
            function a(t, a) {
                var r = e((t = Ee(t)).h, (a = Ee(a)).h),
                    i = Xe(t.s, a.s),
                    f = Xe(t.l, a.l),
                    c = Xe(t.opacity, a.opacity);
                return function(e) {
                    return t.h = r(e), t.s = i(e), t.l = f(Math.pow(e, n)), t.opacity = c(e), t + ""
                }
            }
            return n = +n, a.gamma = t, a
        }(1)
    }
    ot(function(e, t) {
        var n = t - e;
        return n ? Oe(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : Pe(isNaN(e) ? t : e)
    });
    var ut = ot(Xe);

    function lt(e) {
        return +e
    }
    var st = [0, 1];

    function dt(e) {
        return e
    }

    function ht(e, t) {
        return (t -= e = +e) ? function(n) {
            return (n - e) / t
        } : (n = isNaN(t) ? NaN : .5, function() {
            return n
        });
        var n
    }

    function bt(e) {
        var t, n = e[0],
            a = e[e.length - 1];
        return n > a && (t = n, n = a, a = t),
            function(e) {
                return Math.max(n, Math.min(a, e))
            }
    }

    function gt(e, t, n) {
        var a = e[0],
            r = e[1],
            i = t[0],
            f = t[1];
        return r < a ? (a = ht(r, a), i = n(f, i)) : (a = ht(a, r), i = n(i, f)),
            function(e) {
                return i(a(e))
            }
    }

    function pt(e, t, n) {
        var a = Math.min(e.length, t.length) - 1,
            r = new Array(a),
            i = new Array(a),
            f = -1;
        for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++f < a;) r[f] = ht(e[f], e[f + 1]), i[f] = n(t[f], t[f + 1]);
        return function(t) {
            var n = A(e, t, 1, a) - 1;
            return i[n](r[n](t))
        }
    }

    function mt(e, t) {
        return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())
    }

    function vt(e, t) {
        return function() {
            var e, t, n, a, r, i, f = st,
                c = st,
                o = Ze,
                u = dt;

            function l() {
                return a = Math.min(f.length, c.length) > 2 ? pt : gt, r = i = null, s
            }

            function s(t) {
                return isNaN(t = +t) ? n : (r || (r = a(f.map(e), c, o)))(e(u(t)))
            }
            return s.invert = function(n) {
                    return u(t((i || (i = a(c, f.map(e), We)))(n)))
                }, s.domain = function(e) {
                    return arguments.length ? (f = U.call(e, lt), u === dt || (u = bt(f)), l()) : f.slice()
                }, s.range = function(e) {
                    return arguments.length ? (c = E.call(e), l()) : c.slice()
                }, s.rangeRound = function(e) {
                    return c = E.call(e), o = Qe, l()
                }, s.clamp = function(e) {
                    return arguments.length ? (u = e ? bt(f) : dt, s) : u !== dt
                }, s.interpolate = function(e) {
                    return arguments.length ? (o = e, l()) : o
                }, s.unknown = function(e) {
                    return arguments.length ? (n = e, s) : n
                },
                function(n, a) {
                    return e = n, t = a, l()
                }
        }()(e, t)
    }

    function yt(e, t) {
        if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
        var n, a = e.slice(0, n);
        return [a.length > 1 ? a[0] + a.slice(2) : a, +e.slice(n + 1)]
    }

    function wt(e) {
        return (e = yt(Math.abs(e))) ? e[1] : NaN
    }
    var xt, _t = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function Mt(e) {
        return new At(e)
    }

    function At(e) {
        if (!(t = _t.exec(e))) throw new Error("invalid format: " + e);
        var t;
        this.fill = t[1] || " ", this.align = t[2] || ">", this.sign = t[3] || "-", this.symbol = t[4] || "", this.zero = !!t[5], this.width = t[6] && +t[6], this.comma = !!t[7], this.precision = t[8] && +t[8].slice(1), this.trim = !!t[9], this.type = t[10] || ""
    }

    function St(e, t) {
        var n = yt(e, t);
        if (!n) return e + "";
        var a = n[0],
            r = n[1];
        return r < 0 ? "0." + new Array(-r).join("0") + a : a.length > r + 1 ? a.slice(0, r + 1) + "." + a.slice(r + 1) : a + new Array(r - a.length + 2).join("0")
    }
    Mt.prototype = At.prototype, At.prototype.toString = function() {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    var kt = {
        "%": function(e, t) {
            return (100 * e).toFixed(t)
        },
        b: function(e) {
            return Math.round(e).toString(2)
        },
        c: function(e) {
            return e + ""
        },
        d: function(e) {
            return Math.round(e).toString(10)
        },
        e: function(e, t) {
            return e.toExponential(t)
        },
        f: function(e, t) {
            return e.toFixed(t)
        },
        g: function(e, t) {
            return e.toPrecision(t)
        },
        o: function(e) {
            return Math.round(e).toString(8)
        },
        p: function(e, t) {
            return St(100 * e, t)
        },
        r: St,
        s: function(e, t) {
            var n = yt(e, t);
            if (!n) return e + "";
            var a = n[0],
                r = n[1],
                i = r - (xt = 3 * Math.max(-8, Math.min(8, Math.floor(r / 3)))) + 1,
                f = a.length;
            return i === f ? a : i > f ? a + new Array(i - f + 1).join("0") : i > 0 ? a.slice(0, i) + "." + a.slice(i) : "0." + new Array(1 - i).join("0") + yt(e, Math.max(0, t + i - 1))[0]
        },
        X: function(e) {
            return Math.round(e).toString(16).toUpperCase()
        },
        x: function(e) {
            return Math.round(e).toString(16)
        }
    };

    function Tt(e) {
        return e
    }
    var Dt, Ct, zt, Nt = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function Ft(e) {
        var t, n, a = e.grouping && e.thousands ? (t = e.grouping, n = e.thousands, function(e, a) {
                for (var r = e.length, i = [], f = 0, c = t[0], o = 0; r > 0 && c > 0 && (o + c + 1 > a && (c = Math.max(1, a - o)), i.push(e.substring(r -= c, r + c)), !((o += c + 1) > a));) c = t[f = (f + 1) % t.length];
                return i.reverse().join(n)
            }) : Tt,
            r = e.currency,
            i = e.decimal,
            f = e.numerals ? function(e) {
                return function(t) {
                    return t.replace(/[0-9]/g, function(t) {
                        return e[+t]
                    })
                }
            }(e.numerals) : Tt,
            c = e.percent || "%";

        function o(e) {
            var t = (e = Mt(e)).fill,
                n = e.align,
                o = e.sign,
                u = e.symbol,
                l = e.zero,
                s = e.width,
                d = e.comma,
                h = e.precision,
                b = e.trim,
                g = e.type;
            "n" === g ? (d = !0, g = "g") : kt[g] || (null == h && (h = 12), b = !0, g = "g"), (l || "0" === t && "=" === n) && (l = !0, t = "0", n = "=");
            var p = "$" === u ? r[0] : "#" === u && /[boxX]/.test(g) ? "0" + g.toLowerCase() : "",
                m = "$" === u ? r[1] : /[%p]/.test(g) ? c : "",
                v = kt[g],
                y = /[defgprs%]/.test(g);

            function w(e) {
                var r, c, u, w = p,
                    x = m;
                if ("c" === g) x = v(e) + x, e = "";
                else {
                    var _ = (e = +e) < 0;
                    if (e = v(Math.abs(e), h), b && (e = function(e) {
                            e: for (var t, n = e.length, a = 1, r = -1; a < n; ++a) switch (e[a]) {
                                case ".":
                                    r = t = a;
                                    break;
                                case "0":
                                    0 === r && (r = a), t = a;
                                    break;
                                default:
                                    if (r > 0) {
                                        if (!+e[a]) break e;
                                        r = 0
                                    }
                            }
                            return r > 0 ? e.slice(0, r) + e.slice(t + 1) : e
                        }(e)), _ && 0 == +e && (_ = !1), w = (_ ? "(" === o ? o : "-" : "-" === o || "(" === o ? "" : o) + w, x = ("s" === g ? Nt[8 + xt / 3] : "") + x + (_ && "(" === o ? ")" : ""), y)
                        for (r = -1, c = e.length; ++r < c;)
                            if (48 > (u = e.charCodeAt(r)) || u > 57) {
                                x = (46 === u ? i + e.slice(r + 1) : e.slice(r)) + x, e = e.slice(0, r);
                                break
                            }
                }
                d && !l && (e = a(e, 1 / 0));
                var M = w.length + e.length + x.length,
                    A = M < s ? new Array(s - M + 1).join(t) : "";
                switch (d && l && (e = a(A + e, A.length ? s - x.length : 1 / 0), A = ""), n) {
                    case "<":
                        e = w + e + x + A;
                        break;
                    case "=":
                        e = w + A + e + x;
                        break;
                    case "^":
                        e = A.slice(0, M = A.length >> 1) + w + e + x + A.slice(M);
                        break;
                    default:
                        e = A + w + e + x
                }
                return f(e)
            }
            return h = null == h ? 6 : /[gprs]/.test(g) ? Math.max(1, Math.min(21, h)) : Math.max(0, Math.min(20, h)), w.toString = function() {
                return e + ""
            }, w
        }
        return {
            format: o,
            formatPrefix: function(e, t) {
                var n = o(((e = Mt(e)).type = "f", e)),
                    a = 3 * Math.max(-8, Math.min(8, Math.floor(wt(t) / 3))),
                    r = Math.pow(10, -a),
                    i = Nt[8 + a / 3];
                return function(e) {
                    return n(r * e) + i
                }
            }
        }
    }

    function Ht(e) {
        return Math.max(0, -wt(Math.abs(e)))
    }

    function Lt(e, t) {
        return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(wt(t) / 3))) - wt(Math.abs(e)))
    }

    function Rt(e, t) {
        return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, wt(t) - wt(e)) + 1
    }

    function Ut(e) {
        var t = e.domain;
        return e.ticks = function(e) {
            var n = t();
            return function(e, t, n) {
                var a, r, i, f, c = -1;
                if (n = +n, (e = +e) == (t = +t) && n > 0) return [e];
                if ((a = t < e) && (r = e, e = t, t = r), 0 === (f = D(e, t, n)) || !isFinite(f)) return [];
                if (f > 0)
                    for (e = Math.ceil(e / f), t = Math.floor(t / f), i = new Array(r = Math.ceil(t - e + 1)); ++c < r;) i[c] = (e + c) * f;
                else
                    for (e = Math.floor(e * f), t = Math.ceil(t * f), i = new Array(r = Math.ceil(e - t + 1)); ++c < r;) i[c] = (e - c) / f;
                return a && i.reverse(), i
            }(n[0], n[n.length - 1], null == e ? 10 : e)
        }, e.tickFormat = function(e, n) {
            var a = t();
            return function(e, t, n, a) {
                var r, i = C(e, t, n);
                switch ((a = Mt(null == a ? ",f" : a)).type) {
                    case "s":
                        var f = Math.max(Math.abs(e), Math.abs(t));
                        return null != a.precision || isNaN(r = Lt(i, f)) || (a.precision = r), zt(a, f);
                    case "":
                    case "e":
                    case "g":
                    case "p":
                    case "r":
                        null != a.precision || isNaN(r = Rt(i, Math.max(Math.abs(e), Math.abs(t)))) || (a.precision = r - ("e" === a.type));
                        break;
                    case "f":
                    case "%":
                        null != a.precision || isNaN(r = Ht(i)) || (a.precision = r - 2 * ("%" === a.type))
                }
                return Ct(a)
            }(a[0], a[a.length - 1], null == e ? 10 : e, n)
        }, e.nice = function(n) {
            null == n && (n = 10);
            var a, r = t(),
                i = 0,
                f = r.length - 1,
                c = r[i],
                o = r[f];
            return o < c && (a = c, c = o, o = a, a = i, i = f, f = a), (a = D(c, o, n)) > 0 ? a = D(c = Math.floor(c / a) * a, o = Math.ceil(o / a) * a, n) : a < 0 && (a = D(c = Math.ceil(c * a) / a, o = Math.floor(o * a) / a, n)), a > 0 ? (r[i] = Math.floor(c / a) * a, r[f] = Math.ceil(o / a) * a, t(r)) : a < 0 && (r[i] = Math.ceil(c * a) / a, r[f] = Math.floor(o * a) / a, t(r)), e
        }, e
    }
    Dt = Ft({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""]
    }), Ct = Dt.format, zt = Dt.formatPrefix;
    var Et = new Date,
        Yt = new Date;

    function Pt(e, t, n, a) {
        function r(t) {
            return e(t = new Date(+t)), t
        }
        return r.floor = r, r.ceil = function(n) {
            return e(n = new Date(n - 1)), t(n, 1), e(n), n
        }, r.round = function(e) {
            var t = r(e),
                n = r.ceil(e);
            return e - t < n - e ? t : n
        }, r.offset = function(e, n) {
            return t(e = new Date(+e), null == n ? 1 : Math.floor(n)), e
        }, r.range = function(n, a, i) {
            var f, c = [];
            if (n = r.ceil(n), i = null == i ? 1 : Math.floor(i), !(n < a && i > 0)) return c;
            do {
                c.push(f = new Date(+n)), t(n, i), e(n)
            } while (f < n && n < a);
            return c
        }, r.filter = function(n) {
            return Pt(function(t) {
                if (t >= t)
                    for (; e(t), !n(t);) t.setTime(t - 1)
            }, function(e, a) {
                if (e >= e)
                    if (a < 0)
                        for (; ++a <= 0;)
                            for (; t(e, -1), !n(e););
                    else
                        for (; --a >= 0;)
                            for (; t(e, 1), !n(e););
            })
        }, n && (r.count = function(t, a) {
            return Et.setTime(+t), Yt.setTime(+a), e(Et), e(Yt), Math.floor(n(Et, Yt))
        }, r.every = function(e) {
            return e = Math.floor(e), isFinite(e) && e > 0 ? e > 1 ? r.filter(a ? function(t) {
                return a(t) % e == 0
            } : function(t) {
                return r.count(0, t) % e == 0
            }) : r : null
        }), r
    }
    var Ot = Pt(function() {}, function(e, t) {
        e.setTime(+e + t)
    }, function(e, t) {
        return t - e
    });
    Ot.every = function(e) {
        return e = Math.floor(e), isFinite(e) && e > 0 ? e > 1 ? Pt(function(t) {
            t.setTime(Math.floor(t / e) * e)
        }, function(t, n) {
            t.setTime(+t + n * e)
        }, function(t, n) {
            return (n - t) / e
        }) : Ot : null
    };
    Ot.range;
    var It = 6e4,
        Xt = 6048e5,
        jt = Pt(function(e) {
            e.setTime(1e3 * Math.floor(e / 1e3))
        }, function(e, t) {
            e.setTime(+e + 1e3 * t)
        }, function(e, t) {
            return (t - e) / 1e3
        }, function(e) {
            return e.getUTCSeconds()
        }),
        qt = (jt.range, Pt(function(e) {
            e.setTime(Math.floor(e / It) * It)
        }, function(e, t) {
            e.setTime(+e + t * It)
        }, function(e, t) {
            return (t - e) / It
        }, function(e) {
            return e.getMinutes()
        })),
        Vt = (qt.range, Pt(function(e) {
            var t = e.getTimezoneOffset() * It % 36e5;
            t < 0 && (t += 36e5), e.setTime(36e5 * Math.floor((+e - t) / 36e5) + t)
        }, function(e, t) {
            e.setTime(+e + 36e5 * t)
        }, function(e, t) {
            return (t - e) / 36e5
        }, function(e) {
            return e.getHours()
        })),
        Wt = (Vt.range, Pt(function(e) {
            e.setHours(0, 0, 0, 0)
        }, function(e, t) {
            e.setDate(e.getDate() + t)
        }, function(e, t) {
            return (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * It) / 864e5
        }, function(e) {
            return e.getDate() - 1
        }));
    Wt.range;

    function Bt(e) {
        return Pt(function(t) {
            t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0)
        }, function(e, t) {
            e.setDate(e.getDate() + 7 * t)
        }, function(e, t) {
            return (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * It) / Xt
        })
    }
    var $t = Bt(0),
        Gt = Bt(1),
        Zt = (Bt(2), Bt(3), Bt(4)),
        Qt = (Bt(5), Bt(6), $t.range, Gt.range, Zt.range, Pt(function(e) {
            e.setDate(1), e.setHours(0, 0, 0, 0)
        }, function(e, t) {
            e.setMonth(e.getMonth() + t)
        }, function(e, t) {
            return t.getMonth() - e.getMonth() + 12 * (t.getFullYear() - e.getFullYear())
        }, function(e) {
            return e.getMonth()
        })),
        Jt = (Qt.range, Pt(function(e) {
            e.setMonth(0, 1), e.setHours(0, 0, 0, 0)
        }, function(e, t) {
            e.setFullYear(e.getFullYear() + t)
        }, function(e, t) {
            return t.getFullYear() - e.getFullYear()
        }, function(e) {
            return e.getFullYear()
        }));
    Jt.every = function(e) {
        return isFinite(e = Math.floor(e)) && e > 0 ? Pt(function(t) {
            t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
        }, function(t, n) {
            t.setFullYear(t.getFullYear() + n * e)
        }) : null
    };
    Jt.range;
    var Kt = Pt(function(e) {
            e.setUTCSeconds(0, 0)
        }, function(e, t) {
            e.setTime(+e + t * It)
        }, function(e, t) {
            return (t - e) / It
        }, function(e) {
            return e.getUTCMinutes()
        }),
        en = (Kt.range, Pt(function(e) {
            e.setUTCMinutes(0, 0, 0)
        }, function(e, t) {
            e.setTime(+e + 36e5 * t)
        }, function(e, t) {
            return (t - e) / 36e5
        }, function(e) {
            return e.getUTCHours()
        })),
        tn = (en.range, Pt(function(e) {
            e.setUTCHours(0, 0, 0, 0)
        }, function(e, t) {
            e.setUTCDate(e.getUTCDate() + t)
        }, function(e, t) {
            return (t - e) / 864e5
        }, function(e) {
            return e.getUTCDate() - 1
        }));
    tn.range;

    function nn(e) {
        return Pt(function(t) {
            t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0)
        }, function(e, t) {
            e.setUTCDate(e.getUTCDate() + 7 * t)
        }, function(e, t) {
            return (t - e) / Xt
        })
    }
    var an = nn(0),
        rn = nn(1),
        fn = (nn(2), nn(3), nn(4)),
        cn = (nn(5), nn(6), an.range, rn.range, fn.range, Pt(function(e) {
            e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0)
        }, function(e, t) {
            e.setUTCMonth(e.getUTCMonth() + t)
        }, function(e, t) {
            return t.getUTCMonth() - e.getUTCMonth() + 12 * (t.getUTCFullYear() - e.getUTCFullYear())
        }, function(e) {
            return e.getUTCMonth()
        })),
        on = (cn.range, Pt(function(e) {
            e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
        }, function(e, t) {
            e.setUTCFullYear(e.getUTCFullYear() + t)
        }, function(e, t) {
            return t.getUTCFullYear() - e.getUTCFullYear()
        }, function(e) {
            return e.getUTCFullYear()
        }));
    on.every = function(e) {
        return isFinite(e = Math.floor(e)) && e > 0 ? Pt(function(t) {
            t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
        }, function(t, n) {
            t.setUTCFullYear(t.getUTCFullYear() + n * e)
        }) : null
    };
    on.range;

    function un(e) {
        if (0 <= e.y && e.y < 100) {
            var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
            return t.setFullYear(e.y), t
        }
        return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L)
    }

    function ln(e) {
        if (0 <= e.y && e.y < 100) {
            var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
            return t.setUTCFullYear(e.y), t
        }
        return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L))
    }

    function sn(e) {
        return {
            y: e,
            m: 0,
            d: 1,
            H: 0,
            M: 0,
            S: 0,
            L: 0
        }
    }
    var dn, hn, bn, gn, pn = {
            "-": "",
            _: " ",
            0: "0"
        },
        mn = /^\s*\d+/,
        vn = /^%/,
        yn = /[\\^$*+?|[\]().{}]/g;

    function wn(e, t, n) {
        var a = e < 0 ? "-" : "",
            r = (a ? -e : e) + "",
            i = r.length;
        return a + (i < n ? new Array(n - i + 1).join(t) + r : r)
    }

    function xn(e) {
        return e.replace(yn, "\\$&")
    }

    function _n(e) {
        return new RegExp("^(?:" + e.map(xn).join("|") + ")", "i")
    }

    function Mn(e) {
        for (var t = {}, n = -1, a = e.length; ++n < a;) t[e[n].toLowerCase()] = n;
        return t
    }

    function An(e, t, n) {
        var a = mn.exec(t.slice(n, n + 1));
        return a ? (e.w = +a[0], n + a[0].length) : -1
    }

    function Sn(e, t, n) {
        var a = mn.exec(t.slice(n, n + 1));
        return a ? (e.u = +a[0], n + a[0].length) : -1
    }

    function kn(e, t, n) {
        var a = mn.exec(t.slice(n, n + 2));
        return a ? (e.U = +a[0], n + a[0].length) : -1
    }

    function Tn(e, t, n) {
        var a = mn.exec(t.slice(n, n + 2));
        return a ? (e.V = +a[0], n + a[0].length) : -1
    }

    function Dn(e, t, n) {
        var a = mn.exec(t.slice(n, n + 2));
        return a ? (e.W = +a[0], n + a[0].length) : -1
    }

    function Cn(e, t, n) {
        var a = mn.exec(t.slice(n, n + 4));
        return a ? (e.y = +a[0], n + a[0].length) : -1
    }

    function zn(e, t, n) {
        var a = mn.exec(t.slice(n, n + 2));
        return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1
    }

    function Nn(e, t, n) {
        var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
        return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1
    }

    function Fn(e, t, n) {
        var a = mn.exec(t.slice(n, n + 2));
        return a ? (e.m = a[0] - 1, n + a[0].length) : -1
    }

    function Hn(e, t, n) {
        var a = mn.exec(t.slice(n, n + 2));
        return a ? (e.d = +a[0], n + a[0].length) : -1
    }

    function Ln(e, t, n) {
        var a = mn.exec(t.slice(n, n + 3));
        return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1
    }

    function Rn(e, t, n) {
        var a = mn.exec(t.slice(n, n + 2));
        return a ? (e.H = +a[0], n + a[0].length) : -1
    }

    function Un(e, t, n) {
        var a = mn.exec(t.slice(n, n + 2));
        return a ? (e.M = +a[0], n + a[0].length) : -1
    }

    function En(e, t, n) {
        var a = mn.exec(t.slice(n, n + 2));
        return a ? (e.S = +a[0], n + a[0].length) : -1
    }

    function Yn(e, t, n) {
        var a = mn.exec(t.slice(n, n + 3));
        return a ? (e.L = +a[0], n + a[0].length) : -1
    }

    function Pn(e, t, n) {
        var a = mn.exec(t.slice(n, n + 6));
        return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1
    }

    function On(e, t, n) {
        var a = vn.exec(t.slice(n, n + 1));
        return a ? n + a[0].length : -1
    }

    function In(e, t, n) {
        var a = mn.exec(t.slice(n));
        return a ? (e.Q = +a[0], n + a[0].length) : -1
    }

    function Xn(e, t, n) {
        var a = mn.exec(t.slice(n));
        return a ? (e.Q = 1e3 * +a[0], n + a[0].length) : -1
    }

    function jn(e, t) {
        return wn(e.getDate(), t, 2)
    }

    function qn(e, t) {
        return wn(e.getHours(), t, 2)
    }

    function Vn(e, t) {
        return wn(e.getHours() % 12 || 12, t, 2)
    }

    function Wn(e, t) {
        return wn(1 + Wt.count(Jt(e), e), t, 3)
    }

    function Bn(e, t) {
        return wn(e.getMilliseconds(), t, 3)
    }

    function $n(e, t) {
        return Bn(e, t) + "000"
    }

    function Gn(e, t) {
        return wn(e.getMonth() + 1, t, 2)
    }

    function Zn(e, t) {
        return wn(e.getMinutes(), t, 2)
    }

    function Qn(e, t) {
        return wn(e.getSeconds(), t, 2)
    }

    function Jn(e) {
        var t = e.getDay();
        return 0 === t ? 7 : t
    }

    function Kn(e, t) {
        return wn($t.count(Jt(e), e), t, 2)
    }

    function ea(e, t) {
        var n = e.getDay();
        return e = n >= 4 || 0 === n ? Zt(e) : Zt.ceil(e), wn(Zt.count(Jt(e), e) + (4 === Jt(e).getDay()), t, 2)
    }

    function ta(e) {
        return e.getDay()
    }

    function na(e, t) {
        return wn(Gt.count(Jt(e), e), t, 2)
    }

    function aa(e, t) {
        return wn(e.getFullYear() % 100, t, 2)
    }

    function ra(e, t) {
        return wn(e.getFullYear() % 1e4, t, 4)
    }

    function ia(e) {
        var t = e.getTimezoneOffset();
        return (t > 0 ? "-" : (t *= -1, "+")) + wn(t / 60 | 0, "0", 2) + wn(t % 60, "0", 2)
    }

    function fa(e, t) {
        return wn(e.getUTCDate(), t, 2)
    }

    function ca(e, t) {
        return wn(e.getUTCHours(), t, 2)
    }

    function oa(e, t) {
        return wn(e.getUTCHours() % 12 || 12, t, 2)
    }

    function ua(e, t) {
        return wn(1 + tn.count(on(e), e), t, 3)
    }

    function la(e, t) {
        return wn(e.getUTCMilliseconds(), t, 3)
    }

    function sa(e, t) {
        return la(e, t) + "000"
    }

    function da(e, t) {
        return wn(e.getUTCMonth() + 1, t, 2)
    }

    function ha(e, t) {
        return wn(e.getUTCMinutes(), t, 2)
    }

    function ba(e, t) {
        return wn(e.getUTCSeconds(), t, 2)
    }

    function ga(e) {
        var t = e.getUTCDay();
        return 0 === t ? 7 : t
    }

    function pa(e, t) {
        return wn(an.count(on(e), e), t, 2)
    }

    function ma(e, t) {
        var n = e.getUTCDay();
        return e = n >= 4 || 0 === n ? fn(e) : fn.ceil(e), wn(fn.count(on(e), e) + (4 === on(e).getUTCDay()), t, 2)
    }

    function va(e) {
        return e.getUTCDay()
    }

    function ya(e, t) {
        return wn(rn.count(on(e), e), t, 2)
    }

    function wa(e, t) {
        return wn(e.getUTCFullYear() % 100, t, 2)
    }

    function xa(e, t) {
        return wn(e.getUTCFullYear() % 1e4, t, 4)
    }

    function _a() {
        return "+0000"
    }

    function Ma() {
        return "%"
    }

    function Aa(e) {
        return +e
    }

    function Sa(e) {
        return Math.floor(+e / 1e3)
    }! function(e) {
        dn = function(e) {
            var t = e.dateTime,
                n = e.date,
                a = e.time,
                r = e.periods,
                i = e.days,
                f = e.shortDays,
                c = e.months,
                o = e.shortMonths,
                u = _n(r),
                l = Mn(r),
                s = _n(i),
                d = Mn(i),
                h = _n(f),
                b = Mn(f),
                g = _n(c),
                p = Mn(c),
                m = _n(o),
                v = Mn(o),
                y = {
                    a: function(e) {
                        return f[e.getDay()]
                    },
                    A: function(e) {
                        return i[e.getDay()]
                    },
                    b: function(e) {
                        return o[e.getMonth()]
                    },
                    B: function(e) {
                        return c[e.getMonth()]
                    },
                    c: null,
                    d: jn,
                    e: jn,
                    f: $n,
                    H: qn,
                    I: Vn,
                    j: Wn,
                    L: Bn,
                    m: Gn,
                    M: Zn,
                    p: function(e) {
                        return r[+(e.getHours() >= 12)]
                    },
                    Q: Aa,
                    s: Sa,
                    S: Qn,
                    u: Jn,
                    U: Kn,
                    V: ea,
                    w: ta,
                    W: na,
                    x: null,
                    X: null,
                    y: aa,
                    Y: ra,
                    Z: ia,
                    "%": Ma
                },
                w = {
                    a: function(e) {
                        return f[e.getUTCDay()]
                    },
                    A: function(e) {
                        return i[e.getUTCDay()]
                    },
                    b: function(e) {
                        return o[e.getUTCMonth()]
                    },
                    B: function(e) {
                        return c[e.getUTCMonth()]
                    },
                    c: null,
                    d: fa,
                    e: fa,
                    f: sa,
                    H: ca,
                    I: oa,
                    j: ua,
                    L: la,
                    m: da,
                    M: ha,
                    p: function(e) {
                        return r[+(e.getUTCHours() >= 12)]
                    },
                    Q: Aa,
                    s: Sa,
                    S: ba,
                    u: ga,
                    U: pa,
                    V: ma,
                    w: va,
                    W: ya,
                    x: null,
                    X: null,
                    y: wa,
                    Y: xa,
                    Z: _a,
                    "%": Ma
                },
                x = {
                    a: function(e, t, n) {
                        var a = h.exec(t.slice(n));
                        return a ? (e.w = b[a[0].toLowerCase()], n + a[0].length) : -1
                    },
                    A: function(e, t, n) {
                        var a = s.exec(t.slice(n));
                        return a ? (e.w = d[a[0].toLowerCase()], n + a[0].length) : -1
                    },
                    b: function(e, t, n) {
                        var a = m.exec(t.slice(n));
                        return a ? (e.m = v[a[0].toLowerCase()], n + a[0].length) : -1
                    },
                    B: function(e, t, n) {
                        var a = g.exec(t.slice(n));
                        return a ? (e.m = p[a[0].toLowerCase()], n + a[0].length) : -1
                    },
                    c: function(e, n, a) {
                        return A(e, t, n, a)
                    },
                    d: Hn,
                    e: Hn,
                    f: Pn,
                    H: Rn,
                    I: Rn,
                    j: Ln,
                    L: Yn,
                    m: Fn,
                    M: Un,
                    p: function(e, t, n) {
                        var a = u.exec(t.slice(n));
                        return a ? (e.p = l[a[0].toLowerCase()], n + a[0].length) : -1
                    },
                    Q: In,
                    s: Xn,
                    S: En,
                    u: Sn,
                    U: kn,
                    V: Tn,
                    w: An,
                    W: Dn,
                    x: function(e, t, a) {
                        return A(e, n, t, a)
                    },
                    X: function(e, t, n) {
                        return A(e, a, t, n)
                    },
                    y: zn,
                    Y: Cn,
                    Z: Nn,
                    "%": On
                };

            function _(e, t) {
                return function(n) {
                    var a, r, i, f = [],
                        c = -1,
                        o = 0,
                        u = e.length;
                    for (n instanceof Date || (n = new Date(+n)); ++c < u;) 37 === e.charCodeAt(c) && (f.push(e.slice(o, c)), null != (r = pn[a = e.charAt(++c)]) ? a = e.charAt(++c) : r = "e" === a ? " " : "0", (i = t[a]) && (a = i(n, r)), f.push(a), o = c + 1);
                    return f.push(e.slice(o, c)), f.join("")
                }
            }

            function M(e, t) {
                return function(n) {
                    var a, r, i = sn(1900);
                    if (A(i, e, n += "", 0) != n.length) return null;
                    if ("Q" in i) return new Date(i.Q);
                    if ("p" in i && (i.H = i.H % 12 + 12 * i.p), "V" in i) {
                        if (i.V < 1 || i.V > 53) return null;
                        "w" in i || (i.w = 1), "Z" in i ? (r = (a = ln(sn(i.y))).getUTCDay(), a = r > 4 || 0 === r ? rn.ceil(a) : rn(a), a = tn.offset(a, 7 * (i.V - 1)), i.y = a.getUTCFullYear(), i.m = a.getUTCMonth(), i.d = a.getUTCDate() + (i.w + 6) % 7) : (r = (a = t(sn(i.y))).getDay(), a = r > 4 || 0 === r ? Gt.ceil(a) : Gt(a), a = Wt.offset(a, 7 * (i.V - 1)), i.y = a.getFullYear(), i.m = a.getMonth(), i.d = a.getDate() + (i.w + 6) % 7)
                    } else("W" in i || "U" in i) && ("w" in i || (i.w = "u" in i ? i.u % 7 : "W" in i ? 1 : 0), r = "Z" in i ? ln(sn(i.y)).getUTCDay() : t(sn(i.y)).getDay(), i.m = 0, i.d = "W" in i ? (i.w + 6) % 7 + 7 * i.W - (r + 5) % 7 : i.w + 7 * i.U - (r + 6) % 7);
                    return "Z" in i ? (i.H += i.Z / 100 | 0, i.M += i.Z % 100, ln(i)) : t(i)
                }
            }

            function A(e, t, n, a) {
                for (var r, i, f = 0, c = t.length, o = n.length; f < c;) {
                    if (a >= o) return -1;
                    if (37 === (r = t.charCodeAt(f++))) {
                        if (r = t.charAt(f++), !(i = x[r in pn ? t.charAt(f++) : r]) || (a = i(e, n, a)) < 0) return -1
                    } else if (r != n.charCodeAt(a++)) return -1
                }
                return a
            }
            return y.x = _(n, y), y.X = _(a, y), y.c = _(t, y), w.x = _(n, w), w.X = _(a, w), w.c = _(t, w), {
                format: function(e) {
                    var t = _(e += "", y);
                    return t.toString = function() {
                        return e
                    }, t
                },
                parse: function(e) {
                    var t = M(e += "", un);
                    return t.toString = function() {
                        return e
                    }, t
                },
                utcFormat: function(e) {
                    var t = _(e += "", w);
                    return t.toString = function() {
                        return e
                    }, t
                },
                utcParse: function(e) {
                    var t = M(e, ln);
                    return t.toString = function() {
                        return e
                    }, t
                }
            }
        }(e), hn = dn.format, dn.parse, bn = dn.utcFormat, gn = dn.utcParse
    }({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    Date.prototype.toISOString || bn("%Y-%m-%dT%H:%M:%S.%LZ"); + new Date("2000-01-01T00:00:00.000Z") || gn("%Y-%m-%dT%H:%M:%S.%LZ");
    var ka = 1e3,
        Ta = 60 * ka,
        Da = 60 * Ta,
        Ca = 24 * Da,
        za = 7 * Ca,
        Na = 30 * Ca,
        Fa = 365 * Ca;

    function Ha(e) {
        return new Date(e)
    }

    function La(e) {
        return e instanceof Date ? +e : +new Date(+e)
    }

    function Ra(e, t, n, a, r, i, f, c, o) {
        var u = vt(dt, dt),
            l = u.invert,
            s = u.domain,
            d = o(".%L"),
            h = o(":%S"),
            b = o("%I:%M"),
            g = o("%I %p"),
            p = o("%a %d"),
            m = o("%b %d"),
            v = o("%B"),
            y = o("%Y"),
            w = [
                [f, 1, ka],
                [f, 5, 5 * ka],
                [f, 15, 15 * ka],
                [f, 30, 30 * ka],
                [i, 1, Ta],
                [i, 5, 5 * Ta],
                [i, 15, 15 * Ta],
                [i, 30, 30 * Ta],
                [r, 1, Da],
                [r, 3, 3 * Da],
                [r, 6, 6 * Da],
                [r, 12, 12 * Da],
                [a, 1, Ca],
                [a, 2, 2 * Ca],
                [n, 1, za],
                [t, 1, Na],
                [t, 3, 3 * Na],
                [e, 1, Fa]
            ];

        function x(c) {
            return (f(c) < c ? d : i(c) < c ? h : r(c) < c ? b : a(c) < c ? g : t(c) < c ? n(c) < c ? p : m : e(c) < c ? v : y)(c)
        }

        function _(t, n, a, r) {
            if (null == t && (t = 10), "number" == typeof t) {
                var i = Math.abs(a - n) / t,
                    f = M(function(e) {
                        return e[2]
                    }).right(w, i);
                f === w.length ? (r = C(n / Fa, a / Fa, t), t = e) : f ? (r = (f = w[i / w[f - 1][2] < w[f][2] / i ? f - 1 : f])[1], t = f[0]) : (r = Math.max(C(n, a, t), 1), t = c)
            }
            return null == r ? t : t.every(r)
        }
        return u.invert = function(e) {
            return new Date(l(e))
        }, u.domain = function(e) {
            return arguments.length ? s(U.call(e, La)) : s().map(Ha)
        }, u.ticks = function(e, t) {
            var n, a = s(),
                r = a[0],
                i = a[a.length - 1],
                f = i < r;
            return f && (n = r, r = i, i = n), n = (n = _(e, r, i, t)) ? n.range(r, i + 1) : [], f ? n.reverse() : n
        }, u.tickFormat = function(e, t) {
            return null == t ? x : o(t)
        }, u.nice = function(e, t) {
            var n = s();
            return (e = _(e, n[0], n[n.length - 1], t)) ? s(function(e, t) {
                var n, a = 0,
                    r = (e = e.slice()).length - 1,
                    i = e[a],
                    f = e[r];
                return f < i && (n = a, a = r, r = n, n = i, i = f, f = n), e[a] = t.floor(i), e[r] = t.ceil(f), e
            }(n, e)) : u
        }, u.copy = function() {
            return mt(u, Ra(e, t, n, a, r, i, f, c, o))
        }, u
    }

    function Ua() {
        var e = Ut(function() {
            var e, t, n, a, r, i = 0,
                f = 1,
                c = dt,
                o = !1;

            function u(t) {
                return isNaN(t = +t) ? r : c(0 === n ? .5 : (t = (a(t) - e) * n, o ? Math.max(0, Math.min(1, t)) : t))
            }
            return u.domain = function(r) {
                    return arguments.length ? (e = a(i = +r[0]), t = a(f = +r[1]), n = e === t ? 0 : 1 / (t - e), u) : [i, f]
                }, u.clamp = function(e) {
                    return arguments.length ? (o = !!e, u) : o
                }, u.interpolator = function(e) {
                    return arguments.length ? (c = e, u) : c
                }, u.unknown = function(e) {
                    return arguments.length ? (r = e, u) : r
                },
                function(r) {
                    return a = r, e = r(i), t = r(f), n = e === t ? 0 : 1 / (t - e), u
                }
        }()(dt));
        return e.copy = function() {
                return t = e, Ua().domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown());
                var t
            },
            function(e, t) {
                switch (arguments.length) {
                    case 0:
                        break;
                    case 1:
                        this.interpolator(e);
                        break;
                    default:
                        this.interpolator(t).domain(e)
                }
                return this
            }.apply(e, arguments)
    }
    var Ea = "http://www.w3.org/1999/xhtml",
        Ya = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: Ea,
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        };

    function Pa(e) {
        var t = e += "",
            n = t.indexOf(":");
        return n >= 0 && "xmlns" !== (t = e.slice(0, n)) && (e = e.slice(n + 1)), Ya.hasOwnProperty(t) ? {
            space: Ya[t],
            local: e
        } : e
    }

    function Oa(e) {
        var t = Pa(e);
        return (t.local ? function(e) {
            return function() {
                return this.ownerDocument.createElementNS(e.space, e.local)
            }
        } : function(e) {
            return function() {
                var t = this.ownerDocument,
                    n = this.namespaceURI;
                return n === Ea && t.documentElement.namespaceURI === Ea ? t.createElement(e) : t.createElementNS(n, e)
            }
        })(t)
    }

    function Ia() {}

    function Xa(e) {
        return null == e ? Ia : function() {
            return this.querySelector(e)
        }
    }

    function ja() {
        return []
    }

    function qa(e) {
        return null == e ? ja : function() {
            return this.querySelectorAll(e)
        }
    }

    function Va(e) {
        return function() {
            return this.matches(e)
        }
    }

    function Wa(e) {
        return new Array(e.length)
    }

    function Ba(e, t) {
        this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t
    }
    Ba.prototype = {
        constructor: Ba,
        appendChild: function(e) {
            return this._parent.insertBefore(e, this._next)
        },
        insertBefore: function(e, t) {
            return this._parent.insertBefore(e, t)
        },
        querySelector: function(e) {
            return this._parent.querySelector(e)
        },
        querySelectorAll: function(e) {
            return this._parent.querySelectorAll(e)
        }
    };
    var $a = "$";

    function Ga(e, t, n, a, r, i) {
        for (var f, c = 0, o = t.length, u = i.length; c < u; ++c)(f = t[c]) ? (f.__data__ = i[c], a[c] = f) : n[c] = new Ba(e, i[c]);
        for (; c < o; ++c)(f = t[c]) && (r[c] = f)
    }

    function Za(e, t, n, a, r, i, f) {
        var c, o, u, l = {},
            s = t.length,
            d = i.length,
            h = new Array(s);
        for (c = 0; c < s; ++c)(o = t[c]) && (h[c] = u = $a + f.call(o, o.__data__, c, t), u in l ? r[c] = o : l[u] = o);
        for (c = 0; c < d; ++c)(o = l[u = $a + f.call(e, i[c], c, i)]) ? (a[c] = o, o.__data__ = i[c], l[u] = null) : n[c] = new Ba(e, i[c]);
        for (c = 0; c < s; ++c)(o = t[c]) && l[h[c]] === o && (r[c] = o)
    }

    function Qa(e, t) {
        return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
    }

    function Ja(e) {
        return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView
    }

    function Ka(e, t) {
        return e.style.getPropertyValue(t) || Ja(e).getComputedStyle(e, null).getPropertyValue(t)
    }

    function er(e) {
        return e.trim().split(/^|\s+/)
    }

    function tr(e) {
        return e.classList || new nr(e)
    }

    function nr(e) {
        this._node = e, this._names = er(e.getAttribute("class") || "")
    }

    function ar(e, t) {
        for (var n = tr(e), a = -1, r = t.length; ++a < r;) n.add(t[a])
    }

    function rr(e, t) {
        for (var n = tr(e), a = -1, r = t.length; ++a < r;) n.remove(t[a])
    }

    function ir() {
        this.textContent = ""
    }

    function fr() {
        this.innerHTML = ""
    }

    function cr() {
        this.nextSibling && this.parentNode.appendChild(this)
    }

    function or() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }

    function ur() {
        return null
    }

    function lr() {
        var e = this.parentNode;
        e && e.removeChild(this)
    }

    function sr() {
        return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling)
    }

    function dr() {
        return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling)
    }
    nr.prototype = {
        add: function(e) {
            this._names.indexOf(e) < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")))
        },
        remove: function(e) {
            var t = this._names.indexOf(e);
            t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")))
        },
        contains: function(e) {
            return this._names.indexOf(e) >= 0
        }
    };
    var hr = {},
        br = null;
    "undefined" != typeof document && ("onmouseenter" in document.documentElement || (hr = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }));

    function gr(e, t, n) {
        return e = pr(e, t, n),
            function(t) {
                var n = t.relatedTarget;
                n && (n === this || 8 & n.compareDocumentPosition(this)) || e.call(this, t)
            }
    }

    function pr(e, t, n) {
        return function(a) {
            var r = br;
            br = a;
            try {
                e.call(this, this.__data__, t, n)
            } finally {
                br = r
            }
        }
    }

    function mr(e) {
        return function() {
            var t = this.__on;
            if (t) {
                for (var n, a = 0, r = -1, i = t.length; a < i; ++a) n = t[a], e.type && n.type !== e.type || n.name !== e.name ? t[++r] = n : this.removeEventListener(n.type, n.listener, n.capture);
                ++r ? t.length = r : delete this.__on
            }
        }
    }

    function vr(e, t, n) {
        var a = hr.hasOwnProperty(e.type) ? gr : pr;
        return function(r, i, f) {
            var c, o = this.__on,
                u = a(t, i, f);
            if (o)
                for (var l = 0, s = o.length; l < s; ++l)
                    if ((c = o[l]).type === e.type && c.name === e.name) return this.removeEventListener(c.type, c.listener, c.capture), this.addEventListener(c.type, c.listener = u, c.capture = n), void(c.value = t);
            this.addEventListener(e.type, u, n), c = {
                type: e.type,
                name: e.name,
                value: t,
                listener: u,
                capture: n
            }, o ? o.push(c) : this.__on = [c]
        }
    }

    function yr(e, t, n) {
        var a = Ja(e),
            r = a.CustomEvent;
        "function" == typeof r ? r = new r(t, n) : (r = a.document.createEvent("Event"), n ? (r.initEvent(t, n.bubbles, n.cancelable), r.detail = n.detail) : r.initEvent(t, !1, !1)), e.dispatchEvent(r)
    }
    var wr = [null];

    function xr(e, t) {
        this._groups = e, this._parents = t
    }

    function _r() {
        return new xr([
            [document.documentElement]
        ], wr)
    }

    function Mr(e) {
        return "string" == typeof e ? new xr([
            [document.querySelector(e)]
        ], [document.documentElement]) : new xr([
            [e]
        ], wr)
    }

    function Ar() {
        for (var e, t = br; e = t.sourceEvent;) t = e;
        return t
    }

    function Sr(e) {
        var t = Ar();
        return t.changedTouches && (t = t.changedTouches[0]),
            function(e, t) {
                var n = e.ownerSVGElement || e;
                if (n.createSVGPoint) {
                    var a = n.createSVGPoint();
                    return a.x = t.clientX, a.y = t.clientY, [(a = a.matrixTransform(e.getScreenCTM().inverse())).x, a.y]
                }
                var r = e.getBoundingClientRect();
                return [t.clientX - r.left - e.clientLeft, t.clientY - r.top - e.clientTop]
            }(e, t)
    }

    function kr() {
        var e = function() {
                return "n"
            },
            t = function() {
                return [0, 0]
            },
            n = function() {
                return " "
            },
            a = document.body,
            r = s(),
            i = null,
            f = null,
            c = null;

        function o(e) {
            var t;
            t = e.node(), (i = t ? "svg" === t.tagName.toLowerCase() ? t : t.ownerSVGElement : null) && (f = i.createSVGPoint(), a.appendChild(r))
        }
        o.show = function() {
            var r = Array.prototype.slice.call(arguments);
            r[r.length - 1] instanceof SVGElement && (c = r.pop());
            var i, f = n.apply(this, r),
                s = t.apply(this, r),
                h = e.apply(this, r),
                b = d(),
                g = l.length,
                p = document.documentElement.scrollTop || a.scrollTop,
                m = document.documentElement.scrollLeft || a.scrollLeft;
            for (b.html(f).style("opacity", 1).style("pointer-events", "all"); g--;) b.classed(l[g], !1);
            return i = u.get(h).apply(this), b.classed(h, !0).style("top", i.top + s[0] + p + "px").style("left", i.left + s[1] + m + "px"), o
        }, o.hide = function() {
            return d().style("opacity", 0).style("pointer-events", "none"), o
        }, o.attr = function(e, t) {
            if (arguments.length < 2 && "string" == typeof e) return d().attr(e);
            var n = Array.prototype.slice.call(arguments);
            return _r.prototype.attr.apply(d(), n), o
        }, o.style = function(e, t) {
            if (arguments.length < 2 && "string" == typeof e) return d().style(e);
            var n = Array.prototype.slice.call(arguments);
            return _r.prototype.style.apply(d(), n), o
        }, o.direction = function(t) {
            return arguments.length ? (e = null == t ? t : b(t), o) : e
        }, o.offset = function(e) {
            return arguments.length ? (t = null == e ? e : b(e), o) : t
        }, o.html = function(e) {
            return arguments.length ? (n = null == e ? e : b(e), o) : n
        }, o.rootElement = function(e) {
            return arguments.length ? (a = null == e ? e : b(e), o) : a
        }, o.destroy = function() {
            return r && (d().remove(), r = null), o
        };
        var u = F({
                n: function() {
                    var e = h(this);
                    return {
                        top: e.n.y - r.offsetHeight,
                        left: e.n.x - r.offsetWidth / 2
                    }
                },
                s: function() {
                    var e = h(this);
                    return {
                        top: e.s.y,
                        left: e.s.x - r.offsetWidth / 2
                    }
                },
                e: function() {
                    var e = h(this);
                    return {
                        top: e.e.y - r.offsetHeight / 2,
                        left: e.e.x
                    }
                },
                w: function() {
                    var e = h(this);
                    return {
                        top: e.w.y - r.offsetHeight / 2,
                        left: e.w.x - r.offsetWidth
                    }
                },
                nw: function() {
                    var e = h(this);
                    return {
                        top: e.nw.y - r.offsetHeight,
                        left: e.nw.x - r.offsetWidth
                    }
                },
                ne: function() {
                    var e = h(this);
                    return {
                        top: e.ne.y - r.offsetHeight,
                        left: e.ne.x
                    }
                },
                sw: function() {
                    var e = h(this);
                    return {
                        top: e.sw.y,
                        left: e.sw.x - r.offsetWidth
                    }
                },
                se: function() {
                    var e = h(this);
                    return {
                        top: e.se.y,
                        left: e.se.x
                    }
                }
            }),
            l = u.keys();

        function s() {
            var e = Mr(document.createElement("div"));
            return e.style("position", "absolute").style("top", 0).style("opacity", 0).style("pointer-events", "none").style("box-sizing", "border-box"), e.node()
        }

        function d() {
            return null == r && (r = s(), a.appendChild(r)), Mr(r)
        }

        function h(e) {
            for (var t = c || e; null == t.getScreenCTM && null != t.parentNode;) t = t.parentNode;
            var n = {},
                a = t.getScreenCTM(),
                r = t.getBBox(),
                i = r.width,
                o = r.height,
                u = r.x,
                l = r.y;
            return f.x = u, f.y = l, n.nw = f.matrixTransform(a), f.x += i, n.ne = f.matrixTransform(a), f.y += o, n.se = f.matrixTransform(a), f.x -= i, n.sw = f.matrixTransform(a), f.y -= o / 2, n.w = f.matrixTransform(a), f.x += i, n.e = f.matrixTransform(a), f.x -= i / 2, f.y -= o / 2, n.n = f.matrixTransform(a), f.y += o, n.s = f.matrixTransform(a), n
        }

        function b(e) {
            return "function" == typeof e ? e : function() {
                return e
            }
        }
        return o
    }

    function Tr(e) {
        for (var t = e.length / 6 | 0, n = new Array(t), a = 0; a < t;) n[a] = "#" + e.slice(6 * a, 6 * ++a);
        return n
    }
    xr.prototype = _r.prototype = {
        constructor: xr,
        select: function(e) {
            "function" != typeof e && (e = Xa(e));
            for (var t = this._groups, n = t.length, a = new Array(n), r = 0; r < n; ++r)
                for (var i, f, c = t[r], o = c.length, u = a[r] = new Array(o), l = 0; l < o; ++l)(i = c[l]) && (f = e.call(i, i.__data__, l, c)) && ("__data__" in i && (f.__data__ = i.__data__), u[l] = f);
            return new xr(a, this._parents)
        },
        selectAll: function(e) {
            "function" != typeof e && (e = qa(e));
            for (var t = this._groups, n = t.length, a = [], r = [], i = 0; i < n; ++i)
                for (var f, c = t[i], o = c.length, u = 0; u < o; ++u)(f = c[u]) && (a.push(e.call(f, f.__data__, u, c)), r.push(f));
            return new xr(a, r)
        },
        filter: function(e) {
            "function" != typeof e && (e = Va(e));
            for (var t = this._groups, n = t.length, a = new Array(n), r = 0; r < n; ++r)
                for (var i, f = t[r], c = f.length, o = a[r] = [], u = 0; u < c; ++u)(i = f[u]) && e.call(i, i.__data__, u, f) && o.push(i);
            return new xr(a, this._parents)
        },
        data: function(e, t) {
            if (!e) return b = new Array(this.size()), l = -1, this.each(function(e) {
                b[++l] = e
            }), b;
            var n, a = t ? Za : Ga,
                r = this._parents,
                i = this._groups;
            "function" != typeof e && (n = e, e = function() {
                return n
            });
            for (var f = i.length, c = new Array(f), o = new Array(f), u = new Array(f), l = 0; l < f; ++l) {
                var s = r[l],
                    d = i[l],
                    h = d.length,
                    b = e.call(s, s && s.__data__, l, r),
                    g = b.length,
                    p = o[l] = new Array(g),
                    m = c[l] = new Array(g);
                a(s, d, p, m, u[l] = new Array(h), b, t);
                for (var v, y, w = 0, x = 0; w < g; ++w)
                    if (v = p[w]) {
                        for (w >= x && (x = w + 1); !(y = m[x]) && ++x < g;);
                        v._next = y || null
                    }
            }
            return (c = new xr(c, r))._enter = o, c._exit = u, c
        },
        enter: function() {
            return new xr(this._enter || this._groups.map(Wa), this._parents)
        },
        exit: function() {
            return new xr(this._exit || this._groups.map(Wa), this._parents)
        },
        join: function(e, t, n) {
            var a = this.enter(),
                r = this,
                i = this.exit();
            return a = "function" == typeof e ? e(a) : a.append(e + ""), null != t && (r = t(r)), null == n ? i.remove() : n(i), a && r ? a.merge(r).order() : r
        },
        merge: function(e) {
            for (var t = this._groups, n = e._groups, a = t.length, r = n.length, i = Math.min(a, r), f = new Array(a), c = 0; c < i; ++c)
                for (var o, u = t[c], l = n[c], s = u.length, d = f[c] = new Array(s), h = 0; h < s; ++h)(o = u[h] || l[h]) && (d[h] = o);
            for (; c < a; ++c) f[c] = t[c];
            return new xr(f, this._parents)
        },
        order: function() {
            for (var e = this._groups, t = -1, n = e.length; ++t < n;)
                for (var a, r = e[t], i = r.length - 1, f = r[i]; --i >= 0;)(a = r[i]) && (f && 4 ^ a.compareDocumentPosition(f) && f.parentNode.insertBefore(a, f), f = a);
            return this
        },
        sort: function(e) {
            function t(t, n) {
                return t && n ? e(t.__data__, n.__data__) : !t - !n
            }
            e || (e = Qa);
            for (var n = this._groups, a = n.length, r = new Array(a), i = 0; i < a; ++i) {
                for (var f, c = n[i], o = c.length, u = r[i] = new Array(o), l = 0; l < o; ++l)(f = c[l]) && (u[l] = f);
                u.sort(t)
            }
            return new xr(r, this._parents).order()
        },
        call: function() {
            var e = arguments[0];
            return arguments[0] = this, e.apply(null, arguments), this
        },
        nodes: function() {
            var e = new Array(this.size()),
                t = -1;
            return this.each(function() {
                e[++t] = this
            }), e
        },
        node: function() {
            for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
                for (var a = e[t], r = 0, i = a.length; r < i; ++r) {
                    var f = a[r];
                    if (f) return f
                }
            return null
        },
        size: function() {
            var e = 0;
            return this.each(function() {
                ++e
            }), e
        },
        empty: function() {
            return !this.node()
        },
        each: function(e) {
            for (var t = this._groups, n = 0, a = t.length; n < a; ++n)
                for (var r, i = t[n], f = 0, c = i.length; f < c; ++f)(r = i[f]) && e.call(r, r.__data__, f, i);
            return this
        },
        attr: function(e, t) {
            var n = Pa(e);
            if (arguments.length < 2) {
                var a = this.node();
                return n.local ? a.getAttributeNS(n.space, n.local) : a.getAttribute(n)
            }
            return this.each((null == t ? n.local ? function(e) {
                return function() {
                    this.removeAttributeNS(e.space, e.local)
                }
            } : function(e) {
                return function() {
                    this.removeAttribute(e)
                }
            } : "function" == typeof t ? n.local ? function(e, t) {
                return function() {
                    var n = t.apply(this, arguments);
                    null == n ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n)
                }
            } : function(e, t) {
                return function() {
                    var n = t.apply(this, arguments);
                    null == n ? this.removeAttribute(e) : this.setAttribute(e, n)
                }
            } : n.local ? function(e, t) {
                return function() {
                    this.setAttributeNS(e.space, e.local, t)
                }
            } : function(e, t) {
                return function() {
                    this.setAttribute(e, t)
                }
            })(n, t))
        },
        style: function(e, t, n) {
            return arguments.length > 1 ? this.each((null == t ? function(e) {
                return function() {
                    this.style.removeProperty(e)
                }
            } : "function" == typeof t ? function(e, t, n) {
                return function() {
                    var a = t.apply(this, arguments);
                    null == a ? this.style.removeProperty(e) : this.style.setProperty(e, a, n)
                }
            } : function(e, t, n) {
                return function() {
                    this.style.setProperty(e, t, n)
                }
            })(e, t, null == n ? "" : n)) : Ka(this.node(), e)
        },
        property: function(e, t) {
            return arguments.length > 1 ? this.each((null == t ? function(e) {
                return function() {
                    delete this[e]
                }
            } : "function" == typeof t ? function(e, t) {
                return function() {
                    var n = t.apply(this, arguments);
                    null == n ? delete this[e] : this[e] = n
                }
            } : function(e, t) {
                return function() {
                    this[e] = t
                }
            })(e, t)) : this.node()[e]
        },
        classed: function(e, t) {
            var n = er(e + "");
            if (arguments.length < 2) {
                for (var a = tr(this.node()), r = -1, i = n.length; ++r < i;)
                    if (!a.contains(n[r])) return !1;
                return !0
            }
            return this.each(("function" == typeof t ? function(e, t) {
                return function() {
                    (t.apply(this, arguments) ? ar : rr)(this, e)
                }
            } : t ? function(e) {
                return function() {
                    ar(this, e)
                }
            } : function(e) {
                return function() {
                    rr(this, e)
                }
            })(n, t))
        },
        text: function(e) {
            return arguments.length ? this.each(null == e ? ir : ("function" == typeof e ? function(e) {
                return function() {
                    var t = e.apply(this, arguments);
                    this.textContent = null == t ? "" : t
                }
            } : function(e) {
                return function() {
                    this.textContent = e
                }
            })(e)) : this.node().textContent
        },
        html: function(e) {
            return arguments.length ? this.each(null == e ? fr : ("function" == typeof e ? function(e) {
                return function() {
                    var t = e.apply(this, arguments);
                    this.innerHTML = null == t ? "" : t
                }
            } : function(e) {
                return function() {
                    this.innerHTML = e
                }
            })(e)) : this.node().innerHTML
        },
        raise: function() {
            return this.each(cr)
        },
        lower: function() {
            return this.each(or)
        },
        append: function(e) {
            var t = "function" == typeof e ? e : Oa(e);
            return this.select(function() {
                return this.appendChild(t.apply(this, arguments))
            })
        },
        insert: function(e, t) {
            var n = "function" == typeof e ? e : Oa(e),
                a = null == t ? ur : "function" == typeof t ? t : Xa(t);
            return this.select(function() {
                return this.insertBefore(n.apply(this, arguments), a.apply(this, arguments) || null)
            })
        },
        remove: function() {
            return this.each(lr)
        },
        clone: function(e) {
            return this.select(e ? dr : sr)
        },
        datum: function(e) {
            return arguments.length ? this.property("__data__", e) : this.node().__data__
        },
        on: function(e, t, n) {
            var a, r, i = function(e) {
                    return e.trim().split(/^|\s+/).map(function(e) {
                        var t = "",
                            n = e.indexOf(".");
                        return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), {
                            type: e,
                            name: t
                        }
                    })
                }(e + ""),
                f = i.length;
            if (!(arguments.length < 2)) {
                for (c = t ? vr : mr, null == n && (n = !1), a = 0; a < f; ++a) this.each(c(i[a], t, n));
                return this
            }
            var c = this.node().__on;
            if (c)
                for (var o, u = 0, l = c.length; u < l; ++u)
                    for (a = 0, o = c[u]; a < f; ++a)
                        if ((r = i[a]).type === o.type && r.name === o.name) return o.value
        },
        dispatch: function(e, t) {
            return this.each(("function" == typeof t ? function(e, t) {
                return function() {
                    return yr(this, e, t.apply(this, arguments))
                }
            } : function(e, t) {
                return function() {
                    return yr(this, e, t)
                }
            })(e, t))
        }
    };
    var Dr = Tr("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
    Tr("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), Tr("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), Tr("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), Tr("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), Tr("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), Tr("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), Tr("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");
    var Cr = Tr("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");

    function zr(e) {
        return Ve(e[e.length - 1])
    }
    zr(new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(Tr)), zr(new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(Tr)), zr(new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(Tr)), zr(new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(Tr)), zr(new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(Tr)), zr(new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(Tr));
    var Nr = zr(new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(Tr));
    zr(new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(Tr)), zr(new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(Tr)), zr(new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(Tr)), zr(new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(Tr)), zr(new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(Tr)), zr(new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(Tr)), zr(new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(Tr)), zr(new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(Tr)), zr(new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(Tr)), zr(new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(Tr)), zr(new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(Tr)), zr(new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(Tr)), zr(new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(Tr)), zr(new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(Tr)), zr(new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(Tr)), zr(new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(Tr)), zr(new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(Tr)), zr(new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(Tr)), zr(new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(Tr)), zr(new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(Tr)), ut(Ee(300, .5, 0), Ee(-240, .5, 1));
    ut(Ee(-100, .75, .35), Ee(80, 1.5, .8)), ut(Ee(260, .75, .35), Ee(80, 1.5, .8)), Ee(), ce(), Math.PI, Math.PI;

    function Fr(e) {
        var t = e.length;
        return function(n) {
            return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))]
        }
    }
    Fr(Tr("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
    Fr(Tr("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), Fr(Tr("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), Fr(Tr("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

    function Hr(e, t) {
        return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
    }
    var Lr = function(e) {
        var t;
        return 1 === e.length && (t = e, e = function(e, n) {
            return Hr(t(e), n)
        }), {
            left: function(t, n, a, r) {
                for (null == a && (a = 0), null == r && (r = t.length); a < r;) {
                    var i = a + r >>> 1;
                    e(t[i], n) < 0 ? a = i + 1 : r = i
                }
                return a
            },
            right: function(t, n, a, r) {
                for (null == a && (a = 0), null == r && (r = t.length); a < r;) {
                    var i = a + r >>> 1;
                    e(t[i], n) > 0 ? r = i : a = i + 1
                }
                return a
            }
        }
    }(Hr).right;
    var Rr = Math.sqrt(50),
        Ur = Math.sqrt(10),
        Er = Math.sqrt(2);

    function Yr(e, t, n) {
        var a = (t - e) / Math.max(0, n),
            r = Math.floor(Math.log(a) / Math.LN10),
            i = a / Math.pow(10, r);
        return r >= 0 ? (i >= Rr ? 10 : i >= Ur ? 5 : i >= Er ? 2 : 1) * Math.pow(10, r) : -Math.pow(10, -r) / (i >= Rr ? 10 : i >= Ur ? 5 : i >= Er ? 2 : 1)
    }
    var Pr = Array.prototype,
        Or = Pr.map,
        Ir = Pr.slice;

    function Xr(e) {
        return +e
    }
    var jr = [0, 1];

    function qr(e, t) {
        return (t -= e = +e) ? function(n) {
            return (n - e) / t
        } : (n = t, function() {
            return n
        });
        var n
    }

    function Vr(e, t, n, a) {
        var r = e[0],
            i = e[1],
            f = t[0],
            c = t[1];
        return i < r ? (r = n(i, r), f = a(c, f)) : (r = n(r, i), f = a(f, c)),
            function(e) {
                return f(r(e))
            }
    }

    function Wr(e, t, n, a) {
        var r = Math.min(e.length, t.length) - 1,
            i = new Array(r),
            f = new Array(r),
            c = -1;
        for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++c < r;) i[c] = n(e[c], e[c + 1]), f[c] = a(t[c], t[c + 1]);
        return function(t) {
            var n = Lr(e, t, 1, r) - 1;
            return f[n](i[n](t))
        }
    }

    function Br(e, t, n) {
        var a, r = e[0],
            i = e[e.length - 1],
            f = function(e, t, n) {
                var a = Math.abs(t - e) / Math.max(0, n),
                    r = Math.pow(10, Math.floor(Math.log(a) / Math.LN10)),
                    i = a / r;
                return i >= Rr ? r *= 10 : i >= Ur ? r *= 5 : i >= Er && (r *= 2), t < e ? -r : r
            }(r, i, null == t ? 10 : t);
        switch ((n = Mt(null == n ? ",f" : n)).type) {
            case "s":
                var c = Math.max(Math.abs(r), Math.abs(i));
                return null != n.precision || isNaN(a = Lt(f, c)) || (n.precision = a), zt(n, c);
            case "":
            case "e":
            case "g":
            case "p":
            case "r":
                null != n.precision || isNaN(a = Rt(f, Math.max(Math.abs(r), Math.abs(i)))) || (n.precision = a - ("e" === n.type));
                break;
            case "f":
            case "%":
                null != n.precision || isNaN(a = Ht(f)) || (n.precision = a - 2 * ("%" === n.type))
        }
        return Ct(n)
    }

    function $r(e) {
        var t = e.domain;
        return e.ticks = function(e) {
            var n = t();
            return function(e, t, n) {
                var a, r, i, f, c = -1;
                if (n = +n, (e = +e) == (t = +t) && n > 0) return [e];
                if ((a = t < e) && (r = e, e = t, t = r), 0 === (f = Yr(e, t, n)) || !isFinite(f)) return [];
                if (f > 0)
                    for (e = Math.ceil(e / f), t = Math.floor(t / f), i = new Array(r = Math.ceil(t - e + 1)); ++c < r;) i[c] = (e + c) * f;
                else
                    for (e = Math.floor(e * f), t = Math.ceil(t * f), i = new Array(r = Math.ceil(e - t + 1)); ++c < r;) i[c] = (e - c) / f;
                return a && i.reverse(), i
            }(n[0], n[n.length - 1], null == e ? 10 : e)
        }, e.tickFormat = function(e, n) {
            return Br(t(), e, n)
        }, e.nice = function(n) {
            null == n && (n = 10);
            var a, r = t(),
                i = 0,
                f = r.length - 1,
                c = r[i],
                o = r[f];
            return o < c && (a = c, c = o, o = a, a = i, i = f, f = a), (a = Yr(c, o, n)) > 0 ? a = Yr(c = Math.floor(c / a) * a, o = Math.ceil(o / a) * a, n) : a < 0 && (a = Yr(c = Math.ceil(c * a) / a, o = Math.floor(o * a) / a, n)), a > 0 ? (r[i] = Math.floor(c / a) * a, r[f] = Math.ceil(o / a) * a, t(r)) : a < 0 && (r[i] = Math.ceil(c * a) / a, r[f] = Math.floor(o * a) / a, t(r)), e
        }, e
    }

    function Gr() {
        var e = function(e, t) {
            var n, a, r, i = jr,
                f = jr,
                c = Ze,
                o = !1;

            function u() {
                return n = Math.min(i.length, f.length) > 2 ? Wr : Vr, a = r = null, l
            }

            function l(t) {
                return (a || (a = n(i, f, o ? function(e) {
                    return function(t, n) {
                        var a = e(t = +t, n = +n);
                        return function(e) {
                            return e <= t ? 0 : e >= n ? 1 : a(e)
                        }
                    }
                }(e) : e, c)))(+t)
            }
            return l.invert = function(e) {
                return (r || (r = n(f, i, qr, o ? function(e) {
                    return function(t, n) {
                        var a = e(t = +t, n = +n);
                        return function(e) {
                            return e <= 0 ? t : e >= 1 ? n : a(e)
                        }
                    }
                }(t) : t)))(+e)
            }, l.domain = function(e) {
                return arguments.length ? (i = Or.call(e, Xr), u()) : i.slice()
            }, l.range = function(e) {
                return arguments.length ? (f = Ir.call(e), u()) : f.slice()
            }, l.rangeRound = function(e) {
                return f = Ir.call(e), c = Qe, u()
            }, l.clamp = function(e) {
                return arguments.length ? (o = !!e, u()) : o
            }, l.interpolate = function(e) {
                return arguments.length ? (c = e, u()) : c
            }, u()
        }(qr, We);
        return e.copy = function() {
            return t = e, Gr().domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp());
            var t
        }, $r(e)
    }

    function Zr(e) {
        return e.match(/.{6}/g).map(function(e) {
            return "#" + e
        })
    }
    Zr("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), Zr("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"), Zr("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"), Zr("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"), ut(Ee(300, .5, 0), Ee(-240, .5, 1));
    ut(Ee(-100, .75, .35), Ee(80, 1.5, .8)), ut(Ee(260, .75, .35), Ee(80, 1.5, .8)), Ee();

    function Qr(e) {
        var t = e.length;
        return function(n) {
            return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))]
        }
    }
    Qr(Zr("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
    Qr(Zr("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), Qr(Zr("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), Qr(Zr("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
    var Jr = r({
            init: function(e) {
                e.parentNode.appendChild(e)
            }
        }),
        Kr = r({
            props: {
                id: {},
                colorScale: {
                    default: Gr().range(["black", "white"])
                },
                angle: {
                    default: 0
                }
            },
            init: function(e, t) {
                t.id = "areaGradient" + Math.round(1e4 * Math.random()), t.gradient = Mr(e).append("linearGradient")
            },
            update: function(e) {
                var t = Math.PI * e.angle / 180;
                e.gradient.attr("y1", Math.round(100 * Math.max(0, Math.sin(t))) + "%").attr("y2", Math.round(100 * Math.max(0, -Math.sin(t))) + "%").attr("x1", Math.round(100 * Math.max(0, -Math.cos(t))) + "%").attr("x2", Math.round(100 * Math.max(0, Math.cos(t))) + "%").attr("id", e.id);
                var n = Gr().domain([0, 100]).range(e.colorScale.domain()),
                    a = e.gradient.selectAll("stop").data(function(e, t, n) {
                        e = +e, t = +t, n = (r = arguments.length) < 2 ? (t = e, e = 0, 1) : r < 3 ? 1 : +n;
                        for (var a = -1, r = 0 | Math.max(0, Math.ceil((t - e) / n)), i = new Array(r); ++a < r;) i[a] = e + a * n;
                        return i
                    }(0, 100.01, 20));
                a.exit().remove(), a.merge(a.enter().append("stop")).attr("offset", function(e) {
                    return e + "%"
                }).attr("stop-color", function(t) {
                    return e.colorScale(n(t))
                })
            }
        }),
        ei = (r({
            props: {
                id: {
                    default: "areaGradient" + Math.round(1e4 * Math.random())
                }
            },
            init: function(e, t) {
                t.filter = Mr(e).append("defs").append("filter").attr("height", "130%"), t.filter.append("feGaussianBlur").attr("in", "SourceAlpha").attr("stdDeviation", 3), t.filter.append("feOffset").attr("dx", 2).attr("dy", 2).attr("result", "offsetblur");
                var n = t.filter.append("feMerge");
                n.append("feMergeNode"), n.append("feMergeNode").attr("in", "SourceGraphic")
            },
            update: function(e) {
                e.filter.attr("id", e.id)
            }
        }), r({
            props: {
                x: {
                    default: 0
                },
                y: {
                    default: 0
                },
                r: {
                    default: 8
                },
                color: {
                    default: "darkblue"
                },
                duration: {
                    default: .7
                },
                angleFull: {
                    default: 120
                }
            },
            init: function(e, t) {
                e = Mr(e), t.path = e.append("path"), t.transform = t.path.append("animateTransform").attr("attributeName", "transform").attr("attributeType", "XML").attr("type", "rotate").attr("begin", "0s").attr("fill", "freeze").attr("repeatCount", "indefinite")
            },
            update: function(e) {
                e.path.attr("d", function(e, t, n, a, r, i) {
                    r = r / 180 * Math.PI, i = i / 180 * Math.PI;
                    var f = n,
                        c = n - a,
                        o = [
                            [e + f * Math.cos(r), t + f * Math.sin(r)],
                            [e + f * Math.cos(i), t + f * Math.sin(i)],
                            [e + c * Math.cos(i), t + c * Math.sin(i)],
                            [e + c * Math.cos(r), t + c * Math.sin(r)]
                        ],
                        u = (i - r) % (2 * Math.PI) > Math.PI ? 1 : 0,
                        l = [];
                    return l.push("M" + o[0].join()), l.push("A" + [f, f, 0, u, 1, o[1]].join()), l.push("L" + o[2].join()), l.push("A" + [c, c, 0, u, 0, o[3]].join()), l.push("z"), l.join(" ")
                }(e.x, e.y, e.r, e.r / 3, 0, e.angleFull)).attr("fill", e.color), e.transform.attr("from", "0 " + e.x + " " + e.y).attr("to", "360 " + e.x + " " + e.y).attr("dur", e.duration + "s")
            }
        }), r({
            props: {
                imgUrl: {},
                x: {
                    default: 0
                },
                y: {
                    default: 0
                },
                maxWidth: {
                    default: 20
                },
                maxHeight: {
                    default: 20
                },
                svgAlign: {
                    default: "xMidYMid"
                }
            },
            methods: {
                show: function(e) {
                    return e.img.attr("width", e.maxWidth).attr("height", e.maxHeight), this
                },
                hide: function(e) {
                    return e.img.attr("width", 0).attr("height", 0), this
                }
            },
            init: function(e, t) {
                t.img = Mr(e).append("image")
            },
            update: function(e) {
                e.img.attr("xlink:href", e.imgUrl).attr("x", e.x).attr("y", e.y).attr("width", e.maxW).attr("height", e.maxH).attr("preserveAspectRatio", e.svgAlign + " meet")
            }
        }), r({
            props: {
                selection: {
                    default: {
                        x: [null, null],
                        y: [null, null]
                    }
                },
                xDomain: {
                    onChange: function(e, t) {
                        t.xScale.domain(e)
                    }
                },
                yDomain: {
                    onChange: function(e, t) {
                        t.yScale.domain(e)
                    }
                },
                transitionDuration: 700
            },
            stateInit: {
                xScale: Gr(),
                yScale: Gr()
            },
            init: function(e, t, n) {
                var a = n.width,
                    r = n.height,
                    i = n.margin,
                    f = void 0 === i ? {
                        top: 2,
                        right: 2,
                        bottom: 2,
                        left: 2
                    } : i;
                t.xScale.range([f.left, a - t.margin.right]), t.yScale.range([f.top, r - t.margin.bottom]), t.svg = Mr(e).append("svg").attr("width", a).attr("height", r), t.outerBox = t.svg.append("rect").attr("x", t.xScale.range()[0]).attr("y", t.yScale.range()[0]).attr("rx", 2).attr("ry", 2).attr("width", t.xScale.range()[1]).attr("height", t.yScale.range()[1]).style("fill", "#EEE").style("stroke", "grey"), t.selectionBox = t.svg.append("rect").attr("rx", 1).attr("ry", 1).attr("width", 0).attr("height", 0).style("stroke", "blue").style("stroke-opacity", .6).style("fill", "blue").style("fill-opacity", .3)
            },
            update: function(e) {
                e.outerBox.attr("x", e.xScale.range()[0]).attr("y", e.yScale.range()[0]).attr("width", e.xScale.range()[1]).attr("height", e.yScale.range()[1]), e.selectionBox.attr("x", e.xScale(e.selection.x[0])).attr("y", e.yScale(e.selection.y[0])).attr("width", e.xScale(e.selection.x[1] - e.selection.x[0])).attr("height", e.yScale(e.selection.y[1] - e.selection.y[0]))
            }
        }), r({
            props: {
                bbox: {
                    default: {
                        width: null,
                        height: null
                    }
                },
                passes: {
                    default: 3
                }
            },
            init: function(e, t) {
                t.el = e
            },
            update: function(e) {
                [].concat(function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                    return Array.from(e)
                }(Array(e.passes).keys())).some(function() {
                    var t = parseInt(e.el.style["font-size"].split("px")[0]) || 20,
                        n = e.el.getBBox(),
                        a = Math.floor(t * Math.min(e.bbox.width / n.width, e.bbox.height / n.height));
                    if (a === t) return !0;
                    e.el.style["font-size"] = a + "px"
                })
            }
        })),
        ti = (r({
            props: {
                maxWidth: {
                    default: 1 / 0
                }
            },
            init: function(e, t) {
                t.el = e
            },
            update: function(e) {
                for (var t, n, a = e.el.textContent, r = Math.round(a.length * e.maxWidth / e.el.getBBox().width * 1.2); --r && e.maxWidth / e.el.getBBox().width < 1;) e.el.textContent = (n = r, (t = a).length <= n ? t : t.substring(0, 2 * n / 3) + "..." + t.substring(t.length - n / 3, t.length))
            }
        }), t(function(e) {
            ! function(t) {
                var n = /^\s+/,
                    a = /\s+$/,
                    r = 0,
                    i = t.round,
                    f = t.min,
                    c = t.max,
                    o = t.random;

                function u(e, o) {
                    if (o = o || {}, (e = e || "") instanceof u) return e;
                    if (!(this instanceof u)) return new u(e, o);
                    var l = function(e) {
                        var r = {
                                r: 0,
                                g: 0,
                                b: 0
                            },
                            i = 1,
                            o = null,
                            u = null,
                            l = null,
                            s = !1,
                            d = !1;
                        "string" == typeof e && (e = function(e) {
                            e = e.replace(n, "").replace(a, "").toLowerCase();
                            var t, r = !1;
                            if (T[e]) e = T[e], r = !0;
                            else if ("transparent" == e) return {
                                r: 0,
                                g: 0,
                                b: 0,
                                a: 0,
                                format: "name"
                            };
                            if (t = O.rgb.exec(e)) return {
                                r: t[1],
                                g: t[2],
                                b: t[3]
                            };
                            if (t = O.rgba.exec(e)) return {
                                r: t[1],
                                g: t[2],
                                b: t[3],
                                a: t[4]
                            };
                            if (t = O.hsl.exec(e)) return {
                                h: t[1],
                                s: t[2],
                                l: t[3]
                            };
                            if (t = O.hsla.exec(e)) return {
                                h: t[1],
                                s: t[2],
                                l: t[3],
                                a: t[4]
                            };
                            if (t = O.hsv.exec(e)) return {
                                h: t[1],
                                s: t[2],
                                v: t[3]
                            };
                            if (t = O.hsva.exec(e)) return {
                                h: t[1],
                                s: t[2],
                                v: t[3],
                                a: t[4]
                            };
                            if (t = O.hex8.exec(e)) return {
                                r: F(t[1]),
                                g: F(t[2]),
                                b: F(t[3]),
                                a: U(t[4]),
                                format: r ? "name" : "hex8"
                            };
                            if (t = O.hex6.exec(e)) return {
                                r: F(t[1]),
                                g: F(t[2]),
                                b: F(t[3]),
                                format: r ? "name" : "hex"
                            };
                            if (t = O.hex4.exec(e)) return {
                                r: F(t[1] + "" + t[1]),
                                g: F(t[2] + "" + t[2]),
                                b: F(t[3] + "" + t[3]),
                                a: U(t[4] + "" + t[4]),
                                format: r ? "name" : "hex8"
                            };
                            if (t = O.hex3.exec(e)) return {
                                r: F(t[1] + "" + t[1]),
                                g: F(t[2] + "" + t[2]),
                                b: F(t[3] + "" + t[3]),
                                format: r ? "name" : "hex"
                            };
                            return !1
                        }(e));
                        "object" == typeof e && (I(e.r) && I(e.g) && I(e.b) ? (h = e.r, b = e.g, g = e.b, r = {
                            r: 255 * z(h, 255),
                            g: 255 * z(b, 255),
                            b: 255 * z(g, 255)
                        }, s = !0, d = "%" === String(e.r).substr(-1) ? "prgb" : "rgb") : I(e.h) && I(e.s) && I(e.v) ? (o = L(e.s), u = L(e.v), r = function(e, n, a) {
                            e = 6 * z(e, 360), n = z(n, 100), a = z(a, 100);
                            var r = t.floor(e),
                                i = e - r,
                                f = a * (1 - n),
                                c = a * (1 - i * n),
                                o = a * (1 - (1 - i) * n),
                                u = r % 6;
                            return {
                                r: 255 * [a, c, f, f, o, a][u],
                                g: 255 * [o, a, a, c, f, f][u],
                                b: 255 * [f, f, o, a, a, c][u]
                            }
                        }(e.h, o, u), s = !0, d = "hsv") : I(e.h) && I(e.s) && I(e.l) && (o = L(e.s), l = L(e.l), r = function(e, t, n) {
                            var a, r, i;

                            function f(e, t, n) {
                                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
                            }
                            if (e = z(e, 360), t = z(t, 100), n = z(n, 100), 0 === t) a = r = i = n;
                            else {
                                var c = n < .5 ? n * (1 + t) : n + t - n * t,
                                    o = 2 * n - c;
                                a = f(o, c, e + 1 / 3), r = f(o, c, e), i = f(o, c, e - 1 / 3)
                            }
                            return {
                                r: 255 * a,
                                g: 255 * r,
                                b: 255 * i
                            }
                        }(e.h, o, l), s = !0, d = "hsl"), e.hasOwnProperty("a") && (i = e.a));
                        var h, b, g;
                        return i = C(i), {
                            ok: s,
                            format: e.format || d,
                            r: f(255, c(r.r, 0)),
                            g: f(255, c(r.g, 0)),
                            b: f(255, c(r.b, 0)),
                            a: i
                        }
                    }(e);
                    this._originalInput = e, this._r = l.r, this._g = l.g, this._b = l.b, this._a = l.a, this._roundA = i(100 * this._a) / 100, this._format = o.format || l.format, this._gradientType = o.gradientType, this._r < 1 && (this._r = i(this._r)), this._g < 1 && (this._g = i(this._g)), this._b < 1 && (this._b = i(this._b)), this._ok = l.ok, this._tc_id = r++
                }

                function l(e, t, n) {
                    e = z(e, 255), t = z(t, 255), n = z(n, 255);
                    var a, r, i = c(e, t, n),
                        o = f(e, t, n),
                        u = (i + o) / 2;
                    if (i == o) a = r = 0;
                    else {
                        var l = i - o;
                        switch (r = u > .5 ? l / (2 - i - o) : l / (i + o), i) {
                            case e:
                                a = (t - n) / l + (t < n ? 6 : 0);
                                break;
                            case t:
                                a = (n - e) / l + 2;
                                break;
                            case n:
                                a = (e - t) / l + 4
                        }
                        a /= 6
                    }
                    return {
                        h: a,
                        s: r,
                        l: u
                    }
                }

                function s(e, t, n) {
                    e = z(e, 255), t = z(t, 255), n = z(n, 255);
                    var a, r, i = c(e, t, n),
                        o = f(e, t, n),
                        u = i,
                        l = i - o;
                    if (r = 0 === i ? 0 : l / i, i == o) a = 0;
                    else {
                        switch (i) {
                            case e:
                                a = (t - n) / l + (t < n ? 6 : 0);
                                break;
                            case t:
                                a = (n - e) / l + 2;
                                break;
                            case n:
                                a = (e - t) / l + 4
                        }
                        a /= 6
                    }
                    return {
                        h: a,
                        s: r,
                        v: u
                    }
                }

                function d(e, t, n, a) {
                    var r = [H(i(e).toString(16)), H(i(t).toString(16)), H(i(n).toString(16))];
                    return a && r[0].charAt(0) == r[0].charAt(1) && r[1].charAt(0) == r[1].charAt(1) && r[2].charAt(0) == r[2].charAt(1) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("")
                }

                function h(e, t, n, a) {
                    return [H(R(a)), H(i(e).toString(16)), H(i(t).toString(16)), H(i(n).toString(16))].join("")
                }

                function b(e, t) {
                    t = 0 === t ? 0 : t || 10;
                    var n = u(e).toHsl();
                    return n.s -= t / 100, n.s = N(n.s), u(n)
                }

                function g(e, t) {
                    t = 0 === t ? 0 : t || 10;
                    var n = u(e).toHsl();
                    return n.s += t / 100, n.s = N(n.s), u(n)
                }

                function p(e) {
                    return u(e).desaturate(100)
                }

                function m(e, t) {
                    t = 0 === t ? 0 : t || 10;
                    var n = u(e).toHsl();
                    return n.l += t / 100, n.l = N(n.l), u(n)
                }

                function v(e, t) {
                    t = 0 === t ? 0 : t || 10;
                    var n = u(e).toRgb();
                    return n.r = c(0, f(255, n.r - i(-t / 100 * 255))), n.g = c(0, f(255, n.g - i(-t / 100 * 255))), n.b = c(0, f(255, n.b - i(-t / 100 * 255))), u(n)
                }

                function y(e, t) {
                    t = 0 === t ? 0 : t || 10;
                    var n = u(e).toHsl();
                    return n.l -= t / 100, n.l = N(n.l), u(n)
                }

                function w(e, t) {
                    var n = u(e).toHsl(),
                        a = (n.h + t) % 360;
                    return n.h = a < 0 ? 360 + a : a, u(n)
                }

                function x(e) {
                    var t = u(e).toHsl();
                    return t.h = (t.h + 180) % 360, u(t)
                }

                function _(e) {
                    var t = u(e).toHsl(),
                        n = t.h;
                    return [u(e), u({
                        h: (n + 120) % 360,
                        s: t.s,
                        l: t.l
                    }), u({
                        h: (n + 240) % 360,
                        s: t.s,
                        l: t.l
                    })]
                }

                function M(e) {
                    var t = u(e).toHsl(),
                        n = t.h;
                    return [u(e), u({
                        h: (n + 90) % 360,
                        s: t.s,
                        l: t.l
                    }), u({
                        h: (n + 180) % 360,
                        s: t.s,
                        l: t.l
                    }), u({
                        h: (n + 270) % 360,
                        s: t.s,
                        l: t.l
                    })]
                }

                function A(e) {
                    var t = u(e).toHsl(),
                        n = t.h;
                    return [u(e), u({
                        h: (n + 72) % 360,
                        s: t.s,
                        l: t.l
                    }), u({
                        h: (n + 216) % 360,
                        s: t.s,
                        l: t.l
                    })]
                }

                function S(e, t, n) {
                    t = t || 6, n = n || 30;
                    var a = u(e).toHsl(),
                        r = 360 / n,
                        i = [u(e)];
                    for (a.h = (a.h - (r * t >> 1) + 720) % 360; --t;) a.h = (a.h + r) % 360, i.push(u(a));
                    return i
                }

                function k(e, t) {
                    t = t || 6;
                    for (var n = u(e).toHsv(), a = n.h, r = n.s, i = n.v, f = [], c = 1 / t; t--;) f.push(u({
                        h: a,
                        s: r,
                        v: i
                    })), i = (i + c) % 1;
                    return f
                }
                u.prototype = {
                        isDark: function() {
                            return this.getBrightness() < 128
                        },
                        isLight: function() {
                            return !this.isDark()
                        },
                        isValid: function() {
                            return this._ok
                        },
                        getOriginalInput: function() {
                            return this._originalInput
                        },
                        getFormat: function() {
                            return this._format
                        },
                        getAlpha: function() {
                            return this._a
                        },
                        getBrightness: function() {
                            var e = this.toRgb();
                            return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3
                        },
                        getLuminance: function() {
                            var e, n, a, r = this.toRgb();
                            return e = r.r / 255, n = r.g / 255, a = r.b / 255, .2126 * (e <= .03928 ? e / 12.92 : t.pow((e + .055) / 1.055, 2.4)) + .7152 * (n <= .03928 ? n / 12.92 : t.pow((n + .055) / 1.055, 2.4)) + .0722 * (a <= .03928 ? a / 12.92 : t.pow((a + .055) / 1.055, 2.4))
                        },
                        setAlpha: function(e) {
                            return this._a = C(e), this._roundA = i(100 * this._a) / 100, this
                        },
                        toHsv: function() {
                            var e = s(this._r, this._g, this._b);
                            return {
                                h: 360 * e.h,
                                s: e.s,
                                v: e.v,
                                a: this._a
                            }
                        },
                        toHsvString: function() {
                            var e = s(this._r, this._g, this._b),
                                t = i(360 * e.h),
                                n = i(100 * e.s),
                                a = i(100 * e.v);
                            return 1 == this._a ? "hsv(" + t + ", " + n + "%, " + a + "%)" : "hsva(" + t + ", " + n + "%, " + a + "%, " + this._roundA + ")"
                        },
                        toHsl: function() {
                            var e = l(this._r, this._g, this._b);
                            return {
                                h: 360 * e.h,
                                s: e.s,
                                l: e.l,
                                a: this._a
                            }
                        },
                        toHslString: function() {
                            var e = l(this._r, this._g, this._b),
                                t = i(360 * e.h),
                                n = i(100 * e.s),
                                a = i(100 * e.l);
                            return 1 == this._a ? "hsl(" + t + ", " + n + "%, " + a + "%)" : "hsla(" + t + ", " + n + "%, " + a + "%, " + this._roundA + ")"
                        },
                        toHex: function(e) {
                            return d(this._r, this._g, this._b, e)
                        },
                        toHexString: function(e) {
                            return "#" + this.toHex(e)
                        },
                        toHex8: function(e) {
                            return function(e, t, n, a, r) {
                                var f = [H(i(e).toString(16)), H(i(t).toString(16)), H(i(n).toString(16)), H(R(a))];
                                if (r && f[0].charAt(0) == f[0].charAt(1) && f[1].charAt(0) == f[1].charAt(1) && f[2].charAt(0) == f[2].charAt(1) && f[3].charAt(0) == f[3].charAt(1)) return f[0].charAt(0) + f[1].charAt(0) + f[2].charAt(0) + f[3].charAt(0);
                                return f.join("")
                            }(this._r, this._g, this._b, this._a, e)
                        },
                        toHex8String: function(e) {
                            return "#" + this.toHex8(e)
                        },
                        toRgb: function() {
                            return {
                                r: i(this._r),
                                g: i(this._g),
                                b: i(this._b),
                                a: this._a
                            }
                        },
                        toRgbString: function() {
                            return 1 == this._a ? "rgb(" + i(this._r) + ", " + i(this._g) + ", " + i(this._b) + ")" : "rgba(" + i(this._r) + ", " + i(this._g) + ", " + i(this._b) + ", " + this._roundA + ")"
                        },
                        toPercentageRgb: function() {
                            return {
                                r: i(100 * z(this._r, 255)) + "%",
                                g: i(100 * z(this._g, 255)) + "%",
                                b: i(100 * z(this._b, 255)) + "%",
                                a: this._a
                            }
                        },
                        toPercentageRgbString: function() {
                            return 1 == this._a ? "rgb(" + i(100 * z(this._r, 255)) + "%, " + i(100 * z(this._g, 255)) + "%, " + i(100 * z(this._b, 255)) + "%)" : "rgba(" + i(100 * z(this._r, 255)) + "%, " + i(100 * z(this._g, 255)) + "%, " + i(100 * z(this._b, 255)) + "%, " + this._roundA + ")"
                        },
                        toName: function() {
                            return 0 === this._a ? "transparent" : !(this._a < 1) && (D[d(this._r, this._g, this._b, !0)] || !1)
                        },
                        toFilter: function(e) {
                            var t = "#" + h(this._r, this._g, this._b, this._a),
                                n = t,
                                a = this._gradientType ? "GradientType = 1, " : "";
                            if (e) {
                                var r = u(e);
                                n = "#" + h(r._r, r._g, r._b, r._a)
                            }
                            return "progid:DXImageTransform.Microsoft.gradient(" + a + "startColorstr=" + t + ",endColorstr=" + n + ")"
                        },
                        toString: function(e) {
                            var t = !!e;
                            e = e || this._format;
                            var n = !1,
                                a = this._a < 1 && this._a >= 0;
                            return t || !a || "hex" !== e && "hex6" !== e && "hex3" !== e && "hex4" !== e && "hex8" !== e && "name" !== e ? ("rgb" === e && (n = this.toRgbString()), "prgb" === e && (n = this.toPercentageRgbString()), "hex" !== e && "hex6" !== e || (n = this.toHexString()), "hex3" === e && (n = this.toHexString(!0)), "hex4" === e && (n = this.toHex8String(!0)), "hex8" === e && (n = this.toHex8String()), "name" === e && (n = this.toName()), "hsl" === e && (n = this.toHslString()), "hsv" === e && (n = this.toHsvString()), n || this.toHexString()) : "name" === e && 0 === this._a ? this.toName() : this.toRgbString()
                        },
                        clone: function() {
                            return u(this.toString())
                        },
                        _applyModification: function(e, t) {
                            var n = e.apply(null, [this].concat([].slice.call(t)));
                            return this._r = n._r, this._g = n._g, this._b = n._b, this.setAlpha(n._a), this
                        },
                        lighten: function() {
                            return this._applyModification(m, arguments)
                        },
                        brighten: function() {
                            return this._applyModification(v, arguments)
                        },
                        darken: function() {
                            return this._applyModification(y, arguments)
                        },
                        desaturate: function() {
                            return this._applyModification(b, arguments)
                        },
                        saturate: function() {
                            return this._applyModification(g, arguments)
                        },
                        greyscale: function() {
                            return this._applyModification(p, arguments)
                        },
                        spin: function() {
                            return this._applyModification(w, arguments)
                        },
                        _applyCombination: function(e, t) {
                            return e.apply(null, [this].concat([].slice.call(t)))
                        },
                        analogous: function() {
                            return this._applyCombination(S, arguments)
                        },
                        complement: function() {
                            return this._applyCombination(x, arguments)
                        },
                        monochromatic: function() {
                            return this._applyCombination(k, arguments)
                        },
                        splitcomplement: function() {
                            return this._applyCombination(A, arguments)
                        },
                        triad: function() {
                            return this._applyCombination(_, arguments)
                        },
                        tetrad: function() {
                            return this._applyCombination(M, arguments)
                        }
                    }, u.fromRatio = function(e, t) {
                        if ("object" == typeof e) {
                            var n = {};
                            for (var a in e) e.hasOwnProperty(a) && (n[a] = "a" === a ? e[a] : L(e[a]));
                            e = n
                        }
                        return u(e, t)
                    }, u.equals = function(e, t) {
                        return !(!e || !t) && u(e).toRgbString() == u(t).toRgbString()
                    }, u.random = function() {
                        return u.fromRatio({
                            r: o(),
                            g: o(),
                            b: o()
                        })
                    }, u.mix = function(e, t, n) {
                        n = 0 === n ? 0 : n || 50;
                        var a = u(e).toRgb(),
                            r = u(t).toRgb(),
                            i = n / 100;
                        return u({
                            r: (r.r - a.r) * i + a.r,
                            g: (r.g - a.g) * i + a.g,
                            b: (r.b - a.b) * i + a.b,
                            a: (r.a - a.a) * i + a.a
                        })
                    },
                    // <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)
                    // Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
                    u.readability = function(e, n) {
                        var a = u(e),
                            r = u(n);
                        return (t.max(a.getLuminance(), r.getLuminance()) + .05) / (t.min(a.getLuminance(), r.getLuminance()) + .05)
                    }, u.isReadable = function(e, t, n) {
                        var a, r, i = u.readability(e, t);
                        switch (r = !1, (a = function(e) {
                            var t, n;
                            t = ((e = e || {
                                level: "AA",
                                size: "small"
                            }).level || "AA").toUpperCase(), n = (e.size || "small").toLowerCase(), "AA" !== t && "AAA" !== t && (t = "AA");
                            "small" !== n && "large" !== n && (n = "small");
                            return {
                                level: t,
                                size: n
                            }
                        }(n)).level + a.size) {
                            case "AAsmall":
                            case "AAAlarge":
                                r = i >= 4.5;
                                break;
                            case "AAlarge":
                                r = i >= 3;
                                break;
                            case "AAAsmall":
                                r = i >= 7
                        }
                        return r
                    }, u.mostReadable = function(e, t, n) {
                        var a, r, i, f, c = null,
                            o = 0;
                        r = (n = n || {}).includeFallbackColors, i = n.level, f = n.size;
                        for (var l = 0; l < t.length; l++)(a = u.readability(e, t[l])) > o && (o = a, c = u(t[l]));
                        return u.isReadable(e, c, {
                            level: i,
                            size: f
                        }) || !r ? c : (n.includeFallbackColors = !1, u.mostReadable(e, ["#fff", "#000"], n))
                    };
                var T = u.names = {
                        aliceblue: "f0f8ff",
                        antiquewhite: "faebd7",
                        aqua: "0ff",
                        aquamarine: "7fffd4",
                        azure: "f0ffff",
                        beige: "f5f5dc",
                        bisque: "ffe4c4",
                        black: "000",
                        blanchedalmond: "ffebcd",
                        blue: "00f",
                        blueviolet: "8a2be2",
                        brown: "a52a2a",
                        burlywood: "deb887",
                        burntsienna: "ea7e5d",
                        cadetblue: "5f9ea0",
                        chartreuse: "7fff00",
                        chocolate: "d2691e",
                        coral: "ff7f50",
                        cornflowerblue: "6495ed",
                        cornsilk: "fff8dc",
                        crimson: "dc143c",
                        cyan: "0ff",
                        darkblue: "00008b",
                        darkcyan: "008b8b",
                        darkgoldenrod: "b8860b",
                        darkgray: "a9a9a9",
                        darkgreen: "006400",
                        darkgrey: "a9a9a9",
                        darkkhaki: "bdb76b",
                        darkmagenta: "8b008b",
                        darkolivegreen: "556b2f",
                        darkorange: "ff8c00",
                        darkorchid: "9932cc",
                        darkred: "8b0000",
                        darksalmon: "e9967a",
                        darkseagreen: "8fbc8f",
                        darkslateblue: "483d8b",
                        darkslategray: "2f4f4f",
                        darkslategrey: "2f4f4f",
                        darkturquoise: "00ced1",
                        darkviolet: "9400d3",
                        deeppink: "ff1493",
                        deepskyblue: "00bfff",
                        dimgray: "696969",
                        dimgrey: "696969",
                        dodgerblue: "1e90ff",
                        firebrick: "b22222",
                        floralwhite: "fffaf0",
                        forestgreen: "228b22",
                        fuchsia: "f0f",
                        gainsboro: "dcdcdc",
                        ghostwhite: "f8f8ff",
                        gold: "ffd700",
                        goldenrod: "daa520",
                        gray: "808080",
                        green: "008000",
                        greenyellow: "adff2f",
                        grey: "808080",
                        honeydew: "f0fff0",
                        hotpink: "ff69b4",
                        indianred: "cd5c5c",
                        indigo: "4b0082",
                        ivory: "fffff0",
                        khaki: "f0e68c",
                        lavender: "e6e6fa",
                        lavenderblush: "fff0f5",
                        lawngreen: "7cfc00",
                        lemonchiffon: "fffacd",
                        lightblue: "add8e6",
                        lightcoral: "f08080",
                        lightcyan: "e0ffff",
                        lightgoldenrodyellow: "fafad2",
                        lightgray: "d3d3d3",
                        lightgreen: "90ee90",
                        lightgrey: "d3d3d3",
                        lightpink: "ffb6c1",
                        lightsalmon: "ffa07a",
                        lightseagreen: "20b2aa",
                        lightskyblue: "87cefa",
                        lightslategray: "789",
                        lightslategrey: "789",
                        lightsteelblue: "b0c4de",
                        lightyellow: "ffffe0",
                        lime: "0f0",
                        limegreen: "32cd32",
                        linen: "faf0e6",
                        magenta: "f0f",
                        maroon: "800000",
                        mediumaquamarine: "66cdaa",
                        mediumblue: "0000cd",
                        mediumorchid: "ba55d3",
                        mediumpurple: "9370db",
                        mediumseagreen: "3cb371",
                        mediumslateblue: "7b68ee",
                        mediumspringgreen: "00fa9a",
                        mediumturquoise: "48d1cc",
                        mediumvioletred: "c71585",
                        midnightblue: "191970",
                        mintcream: "f5fffa",
                        mistyrose: "ffe4e1",
                        moccasin: "ffe4b5",
                        navajowhite: "ffdead",
                        navy: "000080",
                        oldlace: "fdf5e6",
                        olive: "808000",
                        olivedrab: "6b8e23",
                        orange: "ffa500",
                        orangered: "ff4500",
                        orchid: "da70d6",
                        palegoldenrod: "eee8aa",
                        palegreen: "98fb98",
                        paleturquoise: "afeeee",
                        palevioletred: "db7093",
                        papayawhip: "ffefd5",
                        peachpuff: "ffdab9",
                        peru: "cd853f",
                        pink: "ffc0cb",
                        plum: "dda0dd",
                        powderblue: "b0e0e6",
                        purple: "800080",
                        rebeccapurple: "663399",
                        red: "f00",
                        rosybrown: "bc8f8f",
                        royalblue: "4169e1",
                        saddlebrown: "8b4513",
                        salmon: "fa8072",
                        sandybrown: "f4a460",
                        seagreen: "2e8b57",
                        seashell: "fff5ee",
                        sienna: "a0522d",
                        silver: "c0c0c0",
                        skyblue: "87ceeb",
                        slateblue: "6a5acd",
                        slategray: "708090",
                        slategrey: "708090",
                        snow: "fffafa",
                        springgreen: "00ff7f",
                        steelblue: "4682b4",
                        tan: "d2b48c",
                        teal: "008080",
                        thistle: "d8bfd8",
                        tomato: "ff6347",
                        turquoise: "40e0d0",
                        violet: "ee82ee",
                        wheat: "f5deb3",
                        white: "fff",
                        whitesmoke: "f5f5f5",
                        yellow: "ff0",
                        yellowgreen: "9acd32"
                    },
                    D = u.hexNames = function(e) {
                        var t = {};
                        for (var n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
                        return t
                    }(T);

                function C(e) {
                    return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
                }

                function z(e, n) {
                    (function(e) {
                        return "string" == typeof e && -1 != e.indexOf(".") && 1 === parseFloat(e)
                    })(e) && (e = "100%");
                    var a = function(e) {
                        return "string" == typeof e && -1 != e.indexOf("%")
                    }(e);
                    return e = f(n, c(0, parseFloat(e))), a && (e = parseInt(e * n, 10) / 100), t.abs(e - n) < 1e-6 ? 1 : e % n / parseFloat(n)
                }

                function N(e) {
                    return f(1, c(0, e))
                }

                function F(e) {
                    return parseInt(e, 16)
                }

                function H(e) {
                    return 1 == e.length ? "0" + e : "" + e
                }

                function L(e) {
                    return e <= 1 && (e = 100 * e + "%"), e
                }

                function R(e) {
                    return t.round(255 * parseFloat(e)).toString(16)
                }

                function U(e) {
                    return F(e) / 255
                }
                var E, Y, P, O = (Y = "[\\s|\\(]+(" + (E = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + E + ")[,|\\s]+(" + E + ")\\s*\\)?", P = "[\\s|\\(]+(" + E + ")[,|\\s]+(" + E + ")[,|\\s]+(" + E + ")[,|\\s]+(" + E + ")\\s*\\)?", {
                    CSS_UNIT: new RegExp(E),
                    rgb: new RegExp("rgb" + Y),
                    rgba: new RegExp("rgba" + P),
                    hsl: new RegExp("hsl" + Y),
                    hsla: new RegExp("hsla" + P),
                    hsv: new RegExp("hsv" + Y),
                    hsva: new RegExp("hsva" + P),
                    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
                });

                function I(e) {
                    return !!O.CSS_UNIT.exec(e)
                }
                e.exports ? e.exports = u : window.tinycolor = u
            }(Math)
        })),
        ni = r({
            props: {
                width: {},
                height: {},
                scale: {},
                label: {}
            },
            init: function(e, t) {
                t.gradient = Kr()(e), t.el = Mr(e), t.box = t.el.append("rect").attr("x", 0).attr("y", 0).attr("rx", 3).attr("ry", 3).attr("stroke", "black").attr("stroke-width", .5), t.unitLabel = t.el.append("text").attr("class", "legendText").style("text-anchor", "middle").style("dominant-baseline", "central"), t.labelFitText = ei()(t.unitLabel.node()), t.startLabel = t.el.append("text").style("text-anchor", "start").style("dominant-baseline", "central"), t.startLabelFitText = ei()(t.startLabel.node()), t.endLabel = t.el.append("text").style("text-anchor", "end").style("dominant-baseline", "central"), t.endLabelFitText = ei()(t.endLabel.node())
            },
            update: function(e) {
                e.gradient.colorScale(e.scale), e.box.attr("width", e.width).attr("height", e.height).style("fill", "url(#" + e.gradient.id() + ")"), e.unitLabel.text(e.label).attr("x", .5 * e.width).attr("y", .5 * e.height).style("text-anchor", "middle").style("dominant-baseline", "central").style("fill", ti(e.scale((e.scale.domain()[e.scale.domain().length - 1] - e.scale.domain()[0]) / 2)).isLight() ? "#444" : "#CCC"), e.labelFitText.bbox({
                    width: .8 * e.width,
                    height: .9 * e.height
                }), e.startLabel.text(e.scale.domain()[0]).attr("x", .02 * e.width).attr("y", .5 * e.height).style("fill", ti(e.scale(e.scale.domain()[0])).isLight() ? "#444" : "#CCC"), e.startLabelFitText.bbox({
                    width: .3 * e.width,
                    height: .7 * e.height
                }), e.endLabel.text(e.scale.domain()[e.scale.domain().length - 1]).attr("x", .98 * e.width).attr("y", .5 * e.height).style("fill", ti(e.scale(e.scale.domain()[e.scale.domain().length - 1])).isLight() ? "#444" : "#CCC"), e.endLabelFitText.bbox({
                    width: .3 * e.width,
                    height: .7 * e.height
                })
            }
        }),
        ai = r({
            props: {
                width: {},
                height: {},
                scale: {},
                label: {}
            },
            init: function(e, t) {
                t.el = Mr(e)
            },
            update: function(e) {
                var t = e.width / e.scale.domain().length,
                    n = e.el.selectAll(".color-slot").data(e.scale.domain());
                n.exit().remove();
                var a = n.enter().append("g").attr("class", "color-slot");
                a.append("rect").attr("y", 0).attr("rx", 0).attr("ry", 0).attr("stroke-width", 0), a.append("text").style("text-anchor", "middle").style("dominant-baseline", "central"), a.append("title"), (n = n.merge(a)).select("rect").attr("width", t).attr("height", e.height).attr("x", function(e, n) {
                    return t * n
                }).attr("fill", function(t) {
                    return e.scale(t)
                }), n.select("text").text(function(e) {
                    return e
                }).attr("x", function(e, n) {
                    return t * (n + .5)
                }).attr("y", .5 * e.height).style("fill", function(t) {
                    return ti(e.scale(t)).isLight() ? "#333" : "#DDD"
                }).each(function(n) {
                    ei().bbox({
                        width: .9 * t,
                        height: .8 * e.height
                    })(this)
                }), n.select("title").text(function(t) {
                    return t + " " + e.label
                })
            }
        }),
        ri = r({
            props: {
                width: {},
                height: {},
                scale: {},
                label: {}
            },
            init: function(e, t) {
                t.legend = Mr(e).append("g").attr("class", "legend")
            },
            update: function(e) {
                if (e.scale) {
                    var t = e.scale.hasOwnProperty("unknown");
                    e.legend.html(""), (t ? ai : ni)().width(e.width).height(e.height).scale(e.scale).label(e.label)(e.legend.node())
                }
            }
        }),
        ii = {
            value: function() {}
        };

    function fi() {
        for (var e, t = 0, n = arguments.length, a = {}; t < n; ++t) {
            if (!(e = arguments[t] + "") || e in a) throw new Error("illegal type: " + e);
            a[e] = []
        }
        return new ci(a)
    }

    function ci(e) {
        this._ = e
    }

    function oi(e, t) {
        for (var n, a = 0, r = e.length; a < r; ++a)
            if ((n = e[a]).name === t) return n.value
    }

    function ui(e, t, n) {
        for (var a = 0, r = e.length; a < r; ++a)
            if (e[a].name === t) {
                e[a] = ii, e = e.slice(0, a).concat(e.slice(a + 1));
                break
            }
        return null != n && e.push({
            name: t,
            value: n
        }), e
    }

    function li() {
        br.preventDefault(), br.stopImmediatePropagation()
    }
    ci.prototype = fi.prototype = {
        constructor: ci,
        on: function(e, t) {
            var n, a, r = this._,
                i = (a = r, (e + "").trim().split(/^|\s+/).map(function(e) {
                    var t = "",
                        n = e.indexOf(".");
                    if (n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), e && !a.hasOwnProperty(e)) throw new Error("unknown type: " + e);
                    return {
                        type: e,
                        name: t
                    }
                })),
                f = -1,
                c = i.length;
            if (!(arguments.length < 2)) {
                if (null != t && "function" != typeof t) throw new Error("invalid callback: " + t);
                for (; ++f < c;)
                    if (n = (e = i[f]).type) r[n] = ui(r[n], e.name, t);
                    else if (null == t)
                    for (n in r) r[n] = ui(r[n], e.name, null);
                return this
            }
            for (; ++f < c;)
                if ((n = (e = i[f]).type) && (n = oi(r[n], e.name))) return n
        },
        copy: function() {
            var e = {},
                t = this._;
            for (var n in t) e[n] = t[n].slice();
            return new ci(e)
        },
        call: function(e, t) {
            if ((n = arguments.length - 2) > 0)
                for (var n, a, r = new Array(n), i = 0; i < n; ++i) r[i] = arguments[i + 2];
            if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
            for (i = 0, n = (a = this._[e]).length; i < n; ++i) a[i].value.apply(t, r)
        },
        apply: function(e, t, n) {
            if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
            for (var a = this._[e], r = 0, i = a.length; r < i; ++r) a[r].value.apply(t, n)
        }
    };
    var si, di, hi = 0,
        bi = 0,
        gi = 0,
        pi = 1e3,
        mi = 0,
        vi = 0,
        yi = 0,
        wi = "object" == typeof performance && performance.now ? performance : Date,
        xi = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
            setTimeout(e, 17)
        };

    function _i() {
        return vi || (xi(Mi), vi = wi.now() + yi)
    }

    function Mi() {
        vi = 0
    }

    function Ai() {
        this._call = this._time = this._next = null
    }

    function Si(e, t, n) {
        var a = new Ai;
        return a.restart(e, t, n), a
    }

    function ki() {
        vi = (mi = wi.now()) + yi, hi = bi = 0;
        try {
            ! function() {
                _i(), ++hi;
                for (var e, t = si; t;)(e = vi - t._time) >= 0 && t._call.call(null, e), t = t._next;
                --hi
            }()
        } finally {
            hi = 0,
                function() {
                    var e, t, n = si,
                        a = 1 / 0;
                    for (; n;) n._call ? (a > n._time && (a = n._time), e = n, n = n._next) : (t = n._next, n._next = null, n = e ? e._next = t : si = t);
                    di = e, Di(a)
                }(), vi = 0
        }
    }

    function Ti() {
        var e = wi.now(),
            t = e - mi;
        t > pi && (yi -= t, mi = e)
    }

    function Di(e) {
        hi || (bi && (bi = clearTimeout(bi)), e - vi > 24 ? (e < 1 / 0 && (bi = setTimeout(ki, e - wi.now() - yi)), gi && (gi = clearInterval(gi))) : (gi || (mi = wi.now(), gi = setInterval(Ti, pi)), hi = 1, xi(ki)))
    }

    function Ci(e, t, n) {
        var a = new Ai;
        return t = null == t ? 0 : +t, a.restart(function(n) {
            a.stop(), e(n + t)
        }, t, n), a
    }
    Ai.prototype = Si.prototype = {
        constructor: Ai,
        restart: function(e, t, n) {
            if ("function" != typeof e) throw new TypeError("callback is not a function");
            n = (null == n ? _i() : +n) + (null == t ? 0 : +t), this._next || di === this || (di ? di._next = this : si = this, di = this), this._call = e, this._time = n, Di()
        },
        stop: function() {
            this._call && (this._call = null, this._time = 1 / 0, Di())
        }
    };
    var zi = fi("start", "end", "cancel", "interrupt"),
        Ni = [],
        Fi = 0,
        Hi = 1,
        Li = 2,
        Ri = 3,
        Ui = 4,
        Ei = 5,
        Yi = 6;

    function Pi(e, t, n, a, r, i) {
        var f = e.__transition;
        if (f) {
            if (n in f) return
        } else e.__transition = {};
        ! function(e, t, n) {
            var a, r = e.__transition;

            function i(o) {
                var u, l, s, d;
                if (n.state !== Hi) return c();
                for (u in r)
                    if ((d = r[u]).name === n.name) {
                        if (d.state === Ri) return Ci(i);
                        d.state === Ui ? (d.state = Yi, d.timer.stop(), d.on.call("interrupt", e, e.__data__, d.index, d.group), delete r[u]) : +u < t && (d.state = Yi, d.timer.stop(), d.on.call("cancel", e, e.__data__, d.index, d.group), delete r[u])
                    }
                if (Ci(function() {
                        n.state === Ri && (n.state = Ui, n.timer.restart(f, n.delay, n.time), f(o))
                    }), n.state = Li, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Li) {
                    for (n.state = Ri, a = new Array(s = n.tween.length), u = 0, l = -1; u < s; ++u)(d = n.tween[u].value.call(e, e.__data__, n.index, n.group)) && (a[++l] = d);
                    a.length = l + 1
                }
            }

            function f(t) {
                for (var r = t < n.duration ? n.ease.call(null, t / n.duration) : (n.timer.restart(c), n.state = Ei, 1), i = -1, f = a.length; ++i < f;) a[i].call(e, r);
                n.state === Ei && (n.on.call("end", e, e.__data__, n.index, n.group), c())
            }

            function c() {
                for (var a in n.state = Yi, n.timer.stop(), delete r[t], r) return;
                delete e.__transition
            }
            r[t] = n, n.timer = Si(function(e) {
                n.state = Hi, n.timer.restart(i, n.delay, n.time), n.delay <= e && i(e - n.delay)
            }, 0, n.time)
        }(e, n, {
            name: t,
            index: a,
            group: r,
            on: zi,
            tween: Ni,
            time: i.time,
            delay: i.delay,
            duration: i.duration,
            ease: i.ease,
            timer: null,
            state: Fi
        })
    }

    function Oi(e, t) {
        var n = Xi(e, t);
        if (n.state > Fi) throw new Error("too late; already scheduled");
        return n
    }

    function Ii(e, t) {
        var n = Xi(e, t);
        if (n.state > Ri) throw new Error("too late; already running");
        return n
    }

    function Xi(e, t) {
        var n = e.__transition;
        if (!n || !(n = n[t])) throw new Error("transition not found");
        return n
    }

    function ji(e, t) {
        var n, a, r, i = e.__transition,
            f = !0;
        if (i) {
            for (r in t = null == t ? null : t + "", i)(n = i[r]).name === t ? (a = n.state > Li && n.state < Ei, n.state = Yi, n.timer.stop(), n.on.call(a ? "interrupt" : "cancel", e, e.__data__, n.index, n.group), delete i[r]) : f = !1;
            f && delete e.__transition
        }
    }

    function qi(e, t, n) {
        var a = e._id;
        return e.each(function() {
                var e = Ii(this, a);
                (e.value || (e.value = {}))[t] = n.apply(this, arguments)
            }),
            function(e) {
                return Xi(e, a).value[t]
            }
    }

    function Vi(e, t) {
        var n;
        return ("number" == typeof t ? We : t instanceof ae ? je : (n = ae(t)) ? (t = n, je) : Ge)(e, t)
    }
    var Wi = _r.prototype.constructor;

    function Bi(e) {
        return function() {
            this.style.removeProperty(e)
        }
    }
    var $i = 0;

    function Gi(e, t, n, a) {
        this._groups = e, this._parents = t, this._name = n, this._id = a
    }

    function Zi() {
        return ++$i
    }
    var Qi = _r.prototype;
    Gi.prototype = function(e) {
        return _r().transition(e)
    }.prototype = {
        constructor: Gi,
        select: function(e) {
            var t = this._name,
                n = this._id;
            "function" != typeof e && (e = Xa(e));
            for (var a = this._groups, r = a.length, i = new Array(r), f = 0; f < r; ++f)
                for (var c, o, u = a[f], l = u.length, s = i[f] = new Array(l), d = 0; d < l; ++d)(c = u[d]) && (o = e.call(c, c.__data__, d, u)) && ("__data__" in c && (o.__data__ = c.__data__), s[d] = o, Pi(s[d], t, n, d, s, Xi(c, n)));
            return new Gi(i, this._parents, t, n)
        },
        selectAll: function(e) {
            var t = this._name,
                n = this._id;
            "function" != typeof e && (e = qa(e));
            for (var a = this._groups, r = a.length, i = [], f = [], c = 0; c < r; ++c)
                for (var o, u = a[c], l = u.length, s = 0; s < l; ++s)
                    if (o = u[s]) {
                        for (var d, h = e.call(o, o.__data__, s, u), b = Xi(o, n), g = 0, p = h.length; g < p; ++g)(d = h[g]) && Pi(d, t, n, g, h, b);
                        i.push(h), f.push(o)
                    }
            return new Gi(i, f, t, n)
        },
        filter: function(e) {
            "function" != typeof e && (e = Va(e));
            for (var t = this._groups, n = t.length, a = new Array(n), r = 0; r < n; ++r)
                for (var i, f = t[r], c = f.length, o = a[r] = [], u = 0; u < c; ++u)(i = f[u]) && e.call(i, i.__data__, u, f) && o.push(i);
            return new Gi(a, this._parents, this._name, this._id)
        },
        merge: function(e) {
            if (e._id !== this._id) throw new Error;
            for (var t = this._groups, n = e._groups, a = t.length, r = n.length, i = Math.min(a, r), f = new Array(a), c = 0; c < i; ++c)
                for (var o, u = t[c], l = n[c], s = u.length, d = f[c] = new Array(s), h = 0; h < s; ++h)(o = u[h] || l[h]) && (d[h] = o);
            for (; c < a; ++c) f[c] = t[c];
            return new Gi(f, this._parents, this._name, this._id)
        },
        selection: function() {
            return new Wi(this._groups, this._parents)
        },
        transition: function() {
            for (var e = this._name, t = this._id, n = Zi(), a = this._groups, r = a.length, i = 0; i < r; ++i)
                for (var f, c = a[i], o = c.length, u = 0; u < o; ++u)
                    if (f = c[u]) {
                        var l = Xi(f, t);
                        Pi(f, e, n, u, c, {
                            time: l.time + l.delay + l.duration,
                            delay: 0,
                            duration: l.duration,
                            ease: l.ease
                        })
                    }
            return new Gi(a, this._parents, e, n)
        },
        call: Qi.call,
        nodes: Qi.nodes,
        node: Qi.node,
        size: Qi.size,
        empty: Qi.empty,
        each: Qi.each,
        on: function(e, t) {
            var n = this._id;
            return arguments.length < 2 ? Xi(this.node(), n).on.on(e) : this.each(function(e, t, n) {
                var a, r, i = function(e) {
                    return (e + "").trim().split(/^|\s+/).every(function(e) {
                        var t = e.indexOf(".");
                        return t >= 0 && (e = e.slice(0, t)), !e || "start" === e
                    })
                }(t) ? Oi : Ii;
                return function() {
                    var f = i(this, e),
                        c = f.on;
                    c !== a && (r = (a = c).copy()).on(t, n), f.on = r
                }
            }(n, e, t))
        },
        attr: function(e, t) {
            var n = Pa(e),
                a = "transform" === n ? ct : Vi;
            return this.attrTween(e, "function" == typeof t ? (n.local ? function(e, t, n) {
                var a, r, i;
                return function() {
                    var f, c, o = n(this);
                    if (null != o) return (f = this.getAttributeNS(e.space, e.local)) === (c = o + "") ? null : f === a && c === r ? i : (r = c, i = t(a = f, o));
                    this.removeAttributeNS(e.space, e.local)
                }
            } : function(e, t, n) {
                var a, r, i;
                return function() {
                    var f, c, o = n(this);
                    if (null != o) return (f = this.getAttribute(e)) === (c = o + "") ? null : f === a && c === r ? i : (r = c, i = t(a = f, o));
                    this.removeAttribute(e)
                }
            })(n, a, qi(this, "attr." + e, t)) : null == t ? (n.local ? function(e) {
                return function() {
                    this.removeAttributeNS(e.space, e.local)
                }
            } : function(e) {
                return function() {
                    this.removeAttribute(e)
                }
            })(n) : (n.local ? function(e, t, n) {
                var a, r, i = n + "";
                return function() {
                    var f = this.getAttributeNS(e.space, e.local);
                    return f === i ? null : f === a ? r : r = t(a = f, n)
                }
            } : function(e, t, n) {
                var a, r, i = n + "";
                return function() {
                    var f = this.getAttribute(e);
                    return f === i ? null : f === a ? r : r = t(a = f, n)
                }
            })(n, a, t))
        },
        attrTween: function(e, t) {
            var n = "attr." + e;
            if (arguments.length < 2) return (n = this.tween(n)) && n._value;
            if (null == t) return this.tween(n, null);
            if ("function" != typeof t) throw new Error;
            var a = Pa(e);
            return this.tween(n, (a.local ? function(e, t) {
                var n, a;

                function r() {
                    var r = t.apply(this, arguments);
                    return r !== a && (n = (a = r) && function(e, t) {
                        return function(n) {
                            this.setAttributeNS(e.space, e.local, t(n))
                        }
                    }(e, r)), n
                }
                return r._value = t, r
            } : function(e, t) {
                var n, a;

                function r() {
                    var r = t.apply(this, arguments);
                    return r !== a && (n = (a = r) && function(e, t) {
                        return function(n) {
                            this.setAttribute(e, t(n))
                        }
                    }(e, r)), n
                }
                return r._value = t, r
            })(a, t))
        },
        style: function(e, t, n) {
            var a = "transform" == (e += "") ? ft : Vi;
            return null == t ? this.styleTween(e, function(e, t) {
                var n, a, r;
                return function() {
                    var i = Ka(this, e),
                        f = (this.style.removeProperty(e), Ka(this, e));
                    return i === f ? null : i === n && f === a ? r : r = t(n = i, a = f)
                }
            }(e, a)).on("end.style." + e, Bi(e)) : "function" == typeof t ? this.styleTween(e, function(e, t, n) {
                var a, r, i;
                return function() {
                    var f = Ka(this, e),
                        c = n(this),
                        o = c + "";
                    return null == c && (this.style.removeProperty(e), o = c = Ka(this, e)), f === o ? null : f === a && o === r ? i : (r = o, i = t(a = f, c))
                }
            }(e, a, qi(this, "style." + e, t))).each(function(e, t) {
                var n, a, r, i, f = "style." + t,
                    c = "end." + f;
                return function() {
                    var o = Ii(this, e),
                        u = o.on,
                        l = null == o.value[f] ? i || (i = Bi(t)) : void 0;
                    u === n && r === l || (a = (n = u).copy()).on(c, r = l), o.on = a
                }
            }(this._id, e)) : this.styleTween(e, function(e, t, n) {
                var a, r, i = n + "";
                return function() {
                    var f = Ka(this, e);
                    return f === i ? null : f === a ? r : r = t(a = f, n)
                }
            }(e, a, t), n).on("end.style." + e, null)
        },
        styleTween: function(e, t, n) {
            var a = "style." + (e += "");
            if (arguments.length < 2) return (a = this.tween(a)) && a._value;
            if (null == t) return this.tween(a, null);
            if ("function" != typeof t) throw new Error;
            return this.tween(a, function(e, t, n) {
                var a, r;

                function i() {
                    var i = t.apply(this, arguments);
                    return i !== r && (a = (r = i) && function(e, t, n) {
                        return function(a) {
                            this.style.setProperty(e, t(a), n)
                        }
                    }(e, i, n)), a
                }
                return i._value = t, i
            }(e, t, null == n ? "" : n))
        },
        text: function(e) {
            return this.tween("text", "function" == typeof e ? function(e) {
                return function() {
                    var t = e(this);
                    this.textContent = null == t ? "" : t
                }
            }(qi(this, "text", e)) : function(e) {
                return function() {
                    this.textContent = e
                }
            }(null == e ? "" : e + ""))
        },
        remove: function() {
            return this.on("end.remove", (e = this._id, function() {
                var t = this.parentNode;
                for (var n in this.__transition)
                    if (+n !== e) return;
                t && t.removeChild(this)
            }));
            var e
        },
        tween: function(e, t) {
            var n = this._id;
            if (e += "", arguments.length < 2) {
                for (var a, r = Xi(this.node(), n).tween, i = 0, f = r.length; i < f; ++i)
                    if ((a = r[i]).name === e) return a.value;
                return null
            }
            return this.each((null == t ? function(e, t) {
                var n, a;
                return function() {
                    var r = Ii(this, e),
                        i = r.tween;
                    if (i !== n)
                        for (var f = 0, c = (a = n = i).length; f < c; ++f)
                            if (a[f].name === t) {
                                (a = a.slice()).splice(f, 1);
                                break
                            }
                    r.tween = a
                }
            } : function(e, t, n) {
                var a, r;
                if ("function" != typeof n) throw new Error;
                return function() {
                    var i = Ii(this, e),
                        f = i.tween;
                    if (f !== a) {
                        r = (a = f).slice();
                        for (var c = {
                                name: t,
                                value: n
                            }, o = 0, u = r.length; o < u; ++o)
                            if (r[o].name === t) {
                                r[o] = c;
                                break
                            }
                        o === u && r.push(c)
                    }
                    i.tween = r
                }
            })(n, e, t))
        },
        delay: function(e) {
            var t = this._id;
            return arguments.length ? this.each(("function" == typeof e ? function(e, t) {
                return function() {
                    Oi(this, e).delay = +t.apply(this, arguments)
                }
            } : function(e, t) {
                return t = +t,
                    function() {
                        Oi(this, e).delay = t
                    }
            })(t, e)) : Xi(this.node(), t).delay
        },
        duration: function(e) {
            var t = this._id;
            return arguments.length ? this.each(("function" == typeof e ? function(e, t) {
                return function() {
                    Ii(this, e).duration = +t.apply(this, arguments)
                }
            } : function(e, t) {
                return t = +t,
                    function() {
                        Ii(this, e).duration = t
                    }
            })(t, e)) : Xi(this.node(), t).duration
        },
        ease: function(e) {
            var t = this._id;
            return arguments.length ? this.each(function(e, t) {
                if ("function" != typeof t) throw new Error;
                return function() {
                    Ii(this, e).ease = t
                }
            }(t, e)) : Xi(this.node(), t).ease
        },
        end: function() {
            var e, t, n = this,
                a = n._id,
                r = n.size();
            return new Promise(function(i, f) {
                var c = {
                        value: f
                    },
                    o = {
                        value: function() {
                            0 == --r && i()
                        }
                    };
                n.each(function() {
                    var n = Ii(this, a),
                        r = n.on;
                    r !== e && ((t = (e = r).copy())._.cancel.push(c), t._.interrupt.push(c), t._.end.push(o)), n.on = t
                })
            })
        }
    };
    Math.PI, Math.PI;
    var Ji = {
        time: null,
        delay: 0,
        duration: 250,
        ease: function(e) {
            return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2
        }
    };

    function Ki(e, t) {
        for (var n; !(n = e.__transition) || !(n = n[t]);)
            if (!(e = e.parentNode)) return Ji.time = _i(), Ji;
        return n
    }

    function ef(e) {
        return function() {
            return e
        }
    }

    function tf(e, t, n) {
        this.target = e, this.type = t, this.selection = n
    }

    function nf() {
        br.stopImmediatePropagation()
    }

    function af() {
        br.preventDefault(), br.stopImmediatePropagation()
    }
    _r.prototype.interrupt = function(e) {
        return this.each(function() {
            ji(this, e)
        })
    }, _r.prototype.transition = function(e) {
        var t, n;
        e instanceof Gi ? (t = e._id, e = e._name) : (t = Zi(), (n = Ji).time = _i(), e = null == e ? null : e + "");
        for (var a = this._groups, r = a.length, i = 0; i < r; ++i)
            for (var f, c = a[i], o = c.length, u = 0; u < o; ++u)(f = c[u]) && Pi(f, e, t, u, c, n || Ki(f, t));
        return new Gi(a, this._parents, e, t)
    };
    var rf = {
            name: "drag"
        },
        ff = {
            name: "space"
        },
        cf = {
            name: "handle"
        },
        of = {
            name: "center"
        },
        uf = {
            name: "x",
            handles: ["e", "w"].map(pf),
            input: function(e, t) {
                return e && [
                    [e[0], t[0][1]],
                    [e[1], t[1][1]]
                ]
            },
            output: function(e) {
                return e && [e[0][0], e[1][0]]
            }
        },
        lf = {
            name: "y",
            handles: ["n", "s"].map(pf),
            input: function(e, t) {
                return e && [
                    [t[0][0], e[0]],
                    [t[1][0], e[1]]
                ]
            },
            output: function(e) {
                return e && [e[0][1], e[1][1]]
            }
        },
        sf = {
            overlay: "crosshair",
            selection: "move",
            n: "ns-resize",
            e: "ew-resize",
            s: "ns-resize",
            w: "ew-resize",
            nw: "nwse-resize",
            ne: "nesw-resize",
            se: "nwse-resize",
            sw: "nesw-resize"
        },
        df = {
            e: "w",
            w: "e",
            nw: "ne",
            ne: "nw",
            se: "sw",
            sw: "se"
        },
        hf = {
            n: "s",
            s: "n",
            nw: "sw",
            ne: "se",
            se: "ne",
            sw: "nw"
        },
        bf = {
            overlay: 1,
            selection: 1,
            n: null,
            e: 1,
            s: null,
            w: -1,
            nw: -1,
            ne: 1,
            se: 1,
            sw: -1
        },
        gf = {
            overlay: 1,
            selection: 1,
            n: -1,
            e: null,
            s: 1,
            w: null,
            nw: -1,
            ne: -1,
            se: 1,
            sw: 1
        };

    function pf(e) {
        return {
            type: e
        }
    }

    function mf() {
        return !br.button
    }

    function vf() {
        var e = this.ownerSVGElement || this;
        return [
            [0, 0],
            [e.width.baseVal.value, e.height.baseVal.value]
        ]
    }

    function yf(e) {
        for (; !e.__brush;)
            if (!(e = e.parentNode)) return;
        return e.__brush
    }

    function wf(e) {
        return e[0][0] === e[1][0] || e[0][1] === e[1][1]
    }

    function xf() {
        return function(e) {
            var t, n = vf,
                a = mf,
                r = fi(f, "start", "brush", "end"),
                i = 6;

            function f(t) {
                var n = t.property("__brush", s).selectAll(".overlay").data([pf("overlay")]);
                n.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", sf.overlay).merge(n).each(function() {
                    var e = yf(this).extent;
                    Mr(this).attr("x", e[0][0]).attr("y", e[0][1]).attr("width", e[1][0] - e[0][0]).attr("height", e[1][1] - e[0][1])
                }), //TODO fixes formatting
                t.selectAll(".selection").data([pf("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", sf.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");

                var a = t.selectAll(".handle").data(e.handles, function(e) {
                    return e.type
                });
                a.exit().remove(), a.enter().append("rect").attr("class", function(e) {
                    return "handle handle--" + e.type
                }).attr("cursor", function(e) {
                    return sf[e.type]
                }), t.each(c).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", l)
            }

            function c() {
                var e = Mr(this),
                    t = yf(this).selection;
                t ? (e.selectAll(".selection").style("display", null).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1]), e.selectAll(".handle").style("display", null).attr("x", function(e) {
                    return "e" === e.type[e.type.length - 1] ? t[1][0] - i / 2 : t[0][0] - i / 2
                }).attr("y", function(e) {
                    return "s" === e.type[0] ? t[1][1] - i / 2 : t[0][1] - i / 2
                }).attr("width", function(e) {
                    return "n" === e.type || "s" === e.type ? t[1][0] - t[0][0] + i : i
                }).attr("height", function(e) {
                    return "e" === e.type || "w" === e.type ? t[1][1] - t[0][1] + i : i
                })) : e.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null)
            }

            function o(e, t) {
                return e.__brush.emitter || new u(e, t)
            }

            function u(e, t) {
                this.that = e, this.args = t, this.state = e.__brush, this.active = 0
            }

            function l() {
                if (br.touches) {
                    if (br.changedTouches.length < br.touches.length) return af()
                } else if (t) return;
                if (a.apply(this, arguments)) {
                    var n, r, i, f, u, l, s, d, h, b, g, p, m, v = this,
                        y = br.target.__data__.type,
                        w = "selection" === (br.metaKey ? y = "overlay" : y) ? rf : br.altKey ? of : cf,
                        x = e === lf ? null : bf[y],
                        _ = e === uf ? null : gf[y],
                        M = yf(v),
                        A = M.extent,
                        S = M.selection,
                        k = A[0][0],
                        T = A[0][1],
                        D = A[1][0],
                        C = A[1][1],
                        z = x && _ && br.shiftKey,
                        N = Sr(v),
                        F = N,
                        H = o(v, arguments).beforestart();
                    "overlay" === y ? M.selection = S = [
                        [n = e === lf ? k : N[0], i = e === uf ? T : N[1]],
                        [u = e === lf ? D : n, s = e === uf ? C : i]
                    ] : (n = S[0][0], i = S[0][1], u = S[1][0], s = S[1][1]), r = n, f = i, l = u, d = s;
                    var L = Mr(v).attr("pointer-events", "none"),
                        R = L.selectAll(".overlay").attr("cursor", sf[y]);
                    if (br.touches) L.on("touchmove.brush", E, !0).on("touchend.brush touchcancel.brush", P, !0);
                    else {
                        var U = Mr(br.view).on("keydown.brush", function() {
                            switch (br.keyCode) {
                                case 16:
                                    z = x && _;
                                    break;
                                case 18:
                                    w === cf && (x && (u = l - h * x, n = r + h * x), _ && (s = d - b * _, i = f + b * _), w = of, Y());
                                    break;
                                case 32:
                                    w !== cf && w !== of || (x < 0 ? u = l - h : x > 0 && (n = r - h), _ < 0 ? s = d - b : _ > 0 && (i = f - b), w = ff, R.attr("cursor", sf.selection), Y());
                                    break;
                                default:
                                    return
                            }
                            af()
                        }, !0).on("keyup.brush", function() {
                            switch (br.keyCode) {
                                case 16:
                                    z && (p = m = z = !1, Y());
                                    break;
                                case 18:
                                    w === of && (x < 0 ? u = l : x > 0 && (n = r), _ < 0 ? s = d : _ > 0 && (i = f), w = cf, Y());
                                    break;
                                case 32:
                                    w === ff && (br.altKey ? (x && (u = l - h * x, n = r + h * x), _ && (s = d - b * _, i = f + b * _), w = of) : (x < 0 ? u = l : x > 0 && (n = r), _ < 0 ? s = d : _ > 0 && (i = f), w = cf), R.attr("cursor", sf[y]), Y());
                                    break;
                                default:
                                    return
                            }
                            af()
                        }, !0).on("mousemove.brush", E, !0).on("mouseup.brush", P, !0);
                        ! function(e) {
                            var t = e.document.documentElement,
                                n = Mr(e).on("dragstart.drag", li, !0);
                            "onselectstart" in t ? n.on("selectstart.drag", li, !0) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none")
                        }(br.view)
                    }
                    nf(), ji(v), c.call(v), H.start()
                }

                function E() {
                    var e = Sr(v);
                    !z || p || m || (Math.abs(e[0] - F[0]) > Math.abs(e[1] - F[1]) ? m = !0 : p = !0), F = e, g = !0, af(), Y()
                }

                function Y() {
                    var e;
                    switch (h = F[0] - N[0], b = F[1] - N[1], w) {
                        case ff:
                        case rf:
                            x && (h = Math.max(k - n, Math.min(D - u, h)), r = n + h, l = u + h), _ && (b = Math.max(T - i, Math.min(C - s, b)), f = i + b, d = s + b);
                            break;
                        case cf:
                            x < 0 ? (h = Math.max(k - n, Math.min(D - n, h)), r = n + h, l = u) : x > 0 && (h = Math.max(k - u, Math.min(D - u, h)), r = n, l = u + h), _ < 0 ? (b = Math.max(T - i, Math.min(C - i, b)), f = i + b, d = s) : _ > 0 && (b = Math.max(T - s, Math.min(C - s, b)), f = i, d = s + b);
                            break;
                        case of:
                            x && (r = Math.max(k, Math.min(D, n - h * x)), l = Math.max(k, Math.min(D, u + h * x))), _ && (f = Math.max(T, Math.min(C, i - b * _)), d = Math.max(T, Math.min(C, s + b * _)))
                    }
                    l < r && (x *= -1, e = n, n = u, u = e, e = r, r = l, l = e, y in df && R.attr("cursor", sf[y = df[y]])), d < f && (_ *= -1, e = i, i = s, s = e, e = f, f = d, d = e, y in hf && R.attr("cursor", sf[y = hf[y]])), M.selection && (S = M.selection), p && (r = S[0][0], l = S[1][0]), m && (f = S[0][1], d = S[1][1]), S[0][0] === r && S[0][1] === f && S[1][0] === l && S[1][1] === d || (M.selection = [
                        [r, f],
                        [l, d]
                    ], c.call(v), H.brush())
                }

                function P() {
                    if (nf(), br.touches) {
                        if (br.touches.length) return;
                        t && clearTimeout(t), t = setTimeout(function() {
                            t = null
                        }, 500), L.on("touchmove.brush touchend.brush touchcancel.brush", null)
                    } else ! function(e, t) {
                        var n = e.document.documentElement,
                            a = Mr(e).on("dragstart.drag", null);
                        t && (a.on("click.drag", li, !0), setTimeout(function() {
                            a.on("click.drag", null)
                        }, 0)), "onselectstart" in n ? a.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect)
                    }(br.view, g), U.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
                    L.attr("pointer-events", "all"), R.attr("cursor", sf.overlay), M.selection && (S = M.selection), wf(S) && (M.selection = null, c.call(v)), H.end()
                }
            }

            function s() {
                var t = this.__brush || {
                    selection: null
                };
                return t.extent = n.apply(this, arguments), t.dim = e, t
            }
            return f.move = function(t, n) {
                t.selection ? t.on("start.brush", function() {
                    o(this, arguments).beforestart().start()
                }).on("interrupt.brush end.brush", function() {
                    o(this, arguments).end()
                }).tween("brush", function() {
                    var t = this,
                        a = t.__brush,
                        r = o(t, arguments),
                        i = a.selection,
                        f = e.input("function" == typeof n ? n.apply(this, arguments) : n, a.extent),
                        u = Ze(i, f);

                    function l(e) {
                        a.selection = 1 === e && wf(f) ? null : u(e), c.call(t), r.brush()
                    }
                    return i && f ? l : l(1)
                }) : t.each(function() {
                    var t = arguments,
                        a = this.__brush,
                        r = e.input("function" == typeof n ? n.apply(this, t) : n, a.extent),
                        i = o(this, t).beforestart();
                    ji(this), a.selection = null == r || wf(r) ? null : r, c.call(this), i.start().brush().end()
                })
            }, u.prototype = {
                beforestart: function() {
                    return 1 == ++this.active && (this.state.emitter = this, this.starting = !0), this
                },
                start: function() {
                    return this.starting && (this.starting = !1, this.emit("start")), this
                },
                brush: function() {
                    return this.emit("brush"), this
                },
                end: function() {
                    return 0 == --this.active && (delete this.state.emitter, this.emit("end")), this
                },
                emit: function(t) {
                    ! function(e, t, n, a) {
                        var r = br;
                        e.sourceEvent = br, br = e;
                        try {
                            t.apply(n, a)
                        } finally {
                            br = r
                        }
                    }(new tf(f, t, e.output(this.state.selection)), r.apply, r, [t, this.that, this.args])
                }
            }, f.extent = function(e) {
                return arguments.length ? (n = "function" == typeof e ? e : ef([
                    [+e[0][0], +e[0][1]],
                    [+e[1][0], +e[1][1]]
                ]), f) : n
            }, f.filter = function(e) {
                return arguments.length ? (a = "function" == typeof e ? e : ef(!!e), f) : a
            }, f.handleSize = function(e) {
                return arguments.length ? (i = +e, f) : i
            }, f.on = function() {
                var e = r.on.apply(r, arguments);
                return e === r ? f : e
            }, f
        }(uf)
    }
    var _f = r({
        props: {
            width: {
                default: 300
            },
            height: {
                default: 20
            },
            margins: {
                default: {
                    top: 0,
                    right: 0,
                    bottom: 20,
                    left: 0
                }
            },
            scale: {},
            domainRange: {},
            currentSelection: {},
            tickFormat: {},
            onChange: {
                default: function(e, t) {}
            }
        },
        init: function(t, n) {
            n.xGrid = x().tickFormat(""), n.xAxis = x().tickPadding(0), n.brush = xf().on("end", function() {
                if (br.sourceEvent) {
                    var t = br.selection ? br.selection.map(n.scale.invert) : n.scale.domain();
                    n.onChange.apply(n, e(t))
                }
            }), n.svg = Mr(t).append("svg").attr("class", "brusher");
            var a = n.svg.append("g").attr("class", "brusher-margins");
            a.append("rect").attr("class", "grid-background"), a.append("g").attr("class", "x grid"), a.append("g").attr("class", "x axis"), a.append("g").attr("class", "brush")
        },
        update: function(e) {
            if (!(e.domainRange[1] <= e.domainRange[0])) {
                var t = e.width - e.margins.left - e.margins.right,
                    n = e.height - e.margins.top - e.margins.bottom;
                e.scale.domain(e.domainRange).range([0, t]), e.xAxis.scale(e.scale).tickFormat(e.tickFormat), e.xGrid.scale(e.scale).tickSize(-n), e.svg.attr("width", e.width).attr("height", e.height), e.svg.select(".brusher-margins").attr("transform", "translate(".concat(e.margins.left, ",").concat(e.margins.top, ")")), e.svg.select(".grid-background").attr("width", t).attr("height", n), e.svg.select(".x.grid").attr("transform", "translate(0," + n + ")").call(e.xGrid), e.svg.select(".x.axis").attr("transform", "translate(0," + n + ")").call(e.xAxis).selectAll("text").attr("y", 8), e.svg.select(".brush").call(e.brush.extent([
                    [0, 0],
                    [t, n]
                ])).call(e.brush.move, e.currentSelection.map(e.scale)).selectAll("rect").attr("height", n)
            }
        }
    });

    function Mf(e, t) {
        var n = e.split(/(\d+)/),
            a = t.split(/(\d+)/);
        n.length && "" == n[n.length - 1] && n.pop(), a.length && "" == a[a.length - 1] && a.pop();
        for (var r = 0, i = Math.max(n.length, a.length); r < i; r++) {
            if (n.length == r || a.length == r) return n.length - a.length;
            if (n[r] != a[r]) return n[r].match(/\d/) ? +n[r] - +a[r] : n[r].toLowerCase() > a[r].toLowerCase() ? 1 : -1
        }
        return 0
    }
    return r({
        props: {
            data: {
                default: [],
                onChange: function(e, t) {
                    ! function(e) {
                        t.completeStructData = [], t.completeFlatData = [], t.totalNLines = 0;
                        for (var n = !!e.length && e[0].data[0].data[0].timeRange[0] instanceof Date, a = 0, r = e.length; a < r; a++) {
                            var i = e[a].group;
                            t.completeStructData.push({
                                group: i,
                                lines: e[a].data.map(function(e) {
                                    return e.label
                                })
                            });
                            for (var f = 0, c = e[a].data.length; f < c; f++) {
                                for (var o = 0, u = e[a].data[f].data.length; o < u; o++) t.completeFlatData.push({
                                    group: i,
                                    label: e[a].data[f].label,
                                    timeRange: n ? e[a].data[f].data[o].timeRange : [new Date(e[a].data[f].data[o].timeRange[0]), new Date(e[a].data[f].data[o].timeRange[1])],
                                    val: e[a].data[f].data[o].val,
                                    labelVal: e[a].data[f].data[o][e[a].data[f].data[o].hasOwnProperty("labelVal") ? "labelVal" : "val"]
                                });
                                t.totalNLines++
                            }
                        }
                    }(e), t.zoomX = [u(t.completeFlatData, function(e) {
                        return e.timeRange[0] - 100
                    }), o(t.completeFlatData, function(e) {
                        return e.timeRange[1]
                    })], t.zoomY = [null, null], t.overviewArea && t.overviewArea.domainRange(t.zoomX).currentSelection(t.zoomX)
                }
            },
            width: {
                default: window.innerWidth
            },
            maxHeight: {
                default: 640
            },
            maxLineHeight: {
                default: 12
            },
            leftMargin: {
                default: 110
            },
            rightMargin: {
                default: 200
            },
            topMargin: {
                default: 26
            },
            bottomMargin: {
                default: 30
            },
            useUtc: {
                default: !1
            },
            xTickFormat: {},
            dateMarker: {},
            timeFormat: {
                default: "%Y-%m-%d %-I:%M:%S %p",
                triggerUpdate: !1
            },
            zoomX: {
                default: [null, null],
                onChange: function(e, t) {
                    t.svg && t.svg.dispatch("zoom", {
                        detail: {
                            zoomX: e,
                            zoomY: null,
                            redraw: !1
                        }
                    })
                }
            },
            zoomY: {
                default: [null, null],
                onChange: function(e, t) {
                    t.svg && t.svg.dispatch("zoom", {
                        detail: {
                            zoomX: null,
                            zoomY: e,
                            redraw: !1
                        }
                    })
                }
            },
            minSegmentDuration: {},
            zColorScale: {
                default: Ua(Nr)
            },
            zQualitative: {
                default: !1,
                onChange: function(t, n) {
                    n.zColorScale = t ? P([].concat(e(Dr), e(Cr))) : Ua(Nr)
                }
            },
            zDataLabel: {
                default: "",
                triggerUpdate: !1
            },
            zScaleLabel: {
                default: "",
                triggerUpdate: !1
            },
            enableOverview: {
                default: !0
            },
            enableAnimations: {
                default: !0,
                onChange: function(e, t) {
                    t.transDuration = e ? 700 : 0
                }
            },
            onZoom: {},
            onLabelClick: {},
            onSegmentClick: {}
        },
        methods: {
            getNLines: function(e) {
                return e.nLines
            },
            getTotalNLines: function(e) {
                return e.totalNLines
            },
            getVisibleStructure: function(e) {
                return e.structData
            },
            getSvg: function(e) {
                return Mr(e.svg.node().parentNode).html()
            },
            zoomYLabels: function(e, t) {
                return t ? this.zoomY([a(t[0], !0), a(t[1], !1)]) : [n(e.zoomY[0]), n(e.zoomY[1])];

                function n(t) {
                    if (null == t) return t;
                    for (var n = t, a = 0, r = e.completeStructData.length; a < r; a++) {
                        if (e.completeStructData[a].lines.length > n) return i(e.completeStructData[a], n);
                        n -= e.completeStructData[a].lines.length
                    }
                    return i(e.completeStructData[e.completeStructData.length - 1], e.completeStructData[e.completeStructData.length - 1].lines.length - 1);

                    function i(e, t) {
                        return {
                            group: e.group,
                            label: e.lines[t]
                        }
                    }
                }

                function a(t, n) {
                    var a = (n = n || !1) ? 0 : 1;
                    if (null == t) return t;
                    for (var r = 0, i = 0, f = e.completeStructData.length; i < f; i++) {
                        var c = e.grpCmpFunction(t.group, e.completeStructData[i].group);
                        if (c < 0) break;
                        if (0 == c && t.group == e.completeStructData[i].group) {
                            for (var o = 0, u = e.completeStructData[i].lines.length; o < u; o++) {
                                var l = e.labelCmpFunction(t.label, e.completeStructData[i].lines[o]);
                                if (l < 0) return r + o - a;
                                if (0 == l && t.label == e.completeStructData[i].lines[o]) return r + o
                            }
                            return r + e.completeStructData[i].lines.length - a
                        }
                        r += e.completeStructData[i].lines.length
                    }
                    return r - a
                }
            },
            sort: function(e, t, n) {
                null == t && (t = e.labelCmpFunction), null == n && (n = e.grpCmpFunction), e.labelCmpFunction = t, e.grpCmpFunction = n, e.completeStructData.sort(function(e, t) {
                    return n(e.group, t.group)
                });
                for (var a = 0, r = e.completeStructData.length; a < r; a++) e.completeStructData[a].lines.sort(t);
                return e._rerender(), this
            },
            sortAlpha: function(e, t) {
                null == t && (t = !0);
                var n = function(e, n) {
                    return Mf(t ? e : n, t ? n : e)
                };
                return this.sort(n, n)
            },
            sortChrono: function(e, t) {
                function n(t) {
                    for (var n = {}, a = function(a, r) {
                            var i = t(e.completeFlatData[a]);
                            if (n.hasOwnProperty(i)) return "continue";
                            var f = e.completeFlatData.filter(function(e) {
                                return i == t(e)
                            });
                            n[i] = [u(f, function(e) {
                                return e.timeRange[0]
                            }), o(f, function(e) {
                                return e.timeRange[1]
                            })]
                        }, r = 0, i = e.completeFlatData.length; r < i; r++) a(r);
                    return n
                }
                null == t && (t = !0);
                var a = function(e, t) {
                    var n = e[1],
                        a = t[1];
                    return n && a ? n[1].getTime() == a[1].getTime() ? n[0].getTime() == a[0].getTime() ? Mf(e[0], t[0]) : n[0] - a[0] : a[1] - n[1] : null
                };

                function r(e, t) {
                    return function(n, r) {
                        return a(e(t ? n : r), e(t ? r : n))
                    }
                }
                var i = n(function(e) {
                        return e.group
                    }),
                    f = n(function(e) {
                        return e.label
                    }),
                    c = r(function(e) {
                        return [e, i[e] || null]
                    }, t),
                    l = r(function(e) {
                        return [e, f[e] || null]
                    }, t);
                return this.sort(l, c)
            },
            overviewDomain: function(e, t) {
                return e.enableOverview ? t ? (e.overviewArea.domainRange(t), this) : e.overviewArea.domainRange() : null
            },
            refresh: function(e) {
                return e._rerender(), this
            }
        },
        stateInit: {
            height: null,
            overviewHeight: 20,
            minLabelFont: 2,
            groupBkgGradient: ["#FAFAFA", "#E0E0E0"],
            yScale: null,
            grpScale: null,
            xAxis: null,
            xGrid: null,
            yAxis: null,
            grpAxis: null,
            dateMarkerLine: null,
            svg: null,
            graph: null,
            overviewAreaElem: null,
            overviewArea: null,
            graphW: null,
            graphH: null,
            completeStructData: null,
            structData: null,
            completeFlatData: null,
            flatData: null,
            totalNLines: null,
            nLines: null,
            minSegmentDuration: 0,
            transDuration: 700,
            labelCmpFunction: Mf,
            grpCmpFunction: Mf
        },
        init: function(e, t) {
            var n, a = Mr(e).attr("class", "timelines-chart");
            t.svg = a.append("svg"), t.overviewAreaElem = a.append("div"), t.yScale = I(), t.grpScale = P(), t.xAxis = x(), t.xGrid = w(d, n), t.yAxis = function(e) {
                    return w(h, e)
                }(), t.grpAxis = function(e) {
                    return w(g, e)
                }(),
                function() {
                    t.yScale.invert = n, t.grpScale.invert = n, t.groupGradId = Kr().colorScale(function e() {
                        var t = vt(dt, dt);
                        return t.copy = function() {
                            return mt(t, e())
                        }, z.apply(t, arguments), Ut(t)
                    }().domain([0, 1]).range(t.groupBkgGradient)).angle(-90)(t.svg.node()).id();
                    var e = t.svg.append("g").attr("class", "axises");
                    e.append("g").attr("class", "x-axis"), e.append("g").attr("class", "x-grid"), e.append("g").attr("class", "y-axis"), e.append("g").attr("class", "grp-axis"), t.yAxis.scale(t.yScale).tickSize(0), t.grpAxis.scale(t.grpScale).tickSize(0), t.colorLegend = ri()(t.svg.append("g").attr("class", "legendG").node()), t.graph = t.svg.append("g"), t.dateMarkerLine = t.svg.append("line").attr("class", "x-axis-date-marker"), t.enableOverview && (t.overviewArea = _f().margins({
                        top: 1,
                        right: 20,
                        bottom: 20,
                        left: 20
                    }).onChange(function(e, n) {
                        t.svg.dispatch("zoom", {
                            detail: {
                                zoomX: [e, n],
                                zoomY: null
                            }
                        })
                    }).domainRange(t.zoomX).currentSelection(t.zoomX)(t.overviewAreaElem.node()), t.svg.on("zoomScent", function() {
                        var e = br.detail.zoomX;
                        t.overviewArea && e && ((e[0] < t.overviewArea.domainRange()[0] || e[1] > t.overviewArea.domainRange()[1]) && t.overviewArea.domainRange([new Date(Math.min(e[0], t.overviewArea.domainRange()[0])), new Date(Math.max(e[1], t.overviewArea.domainRange()[1]))]), t.overviewArea.currentSelection(e))
                    }));

                    function n(e, t) {
                        t = t || function(e, t) {
                            return e >= t
                        };
                        var n = this.domain(),
                            a = this.range();
                        2 === a.length && 2 !== n.length && (a = function(e, t, n) {
                            e = +e, t = +t, n = (r = arguments.length) < 2 ? (t = e, e = 0, 1) : r < 3 ? 1 : +n;
                            for (var a = -1, r = 0 | Math.max(0, Math.ceil((t - e) / n)), i = new Array(r); ++a < r;) i[a] = e + a * n;
                            return i
                        }(a[0], a[1], (a[1] - a[0]) / n.length));
                        for (var r = a[0], i = 0, f = a.length; i < f; i++)
                            if (t(a[i] + r, e)) return n[Math.round(i * n.length / a.length)];
                        return this.domain()[this.domain().length - 1]
                    }
                }(), t.groupTooltip = kr().attr("class", "chart-tooltip group-tooltip").direction("w").offset([0, 0]).html(function(e) {
                    var n = e.hasOwnProperty("timeRange") ? t.xScale(e.timeRange[0]) : 0,
                        a = e.hasOwnProperty("label") ? t.grpScale(e.group) - t.yScale(e.group + "+&+" + e.label) : 0;
                    return t.groupTooltip.offset([a, -n]), e.group
                }), t.svg.call(t.groupTooltip), t.lineTooltip = kr().attr("class", "chart-tooltip line-tooltip").direction("e").offset([0, 0]).html(function(e) {
                    var n = e.hasOwnProperty("timeRange") ? t.xScale.range()[1] - t.xScale(e.timeRange[1]) : 0;
                    return t.lineTooltip.offset([0, n]), e.label
                }), t.svg.call(t.lineTooltip), t.segmentTooltip = kr().attr("class", "chart-tooltip segment-tooltip").direction("s").offset([5, 0]).html(function(e) {
                    var n = t.zColorScale.domain()[t.zColorScale.domain().length - 1] - t.zColorScale.domain()[0],
                        a = (t.useUtc ? bn : hn)("".concat(t.timeFormat).concat(t.useUtc ? " (UTC)" : ""));
                    return "<strong>" + e.labelVal + " </strong>" + t.zDataLabel + (n ? " (<strong>" + Math.round((e.val - t.zColorScale.domain()[0]) / n * 100 * 100) / 100 + "%</strong>)" : "") + "<br><strong>From: </strong>" + a(e.timeRange[0]) + "<br><strong>To: </strong>" + a(e.timeRange[1])
                }), t.svg.call(t.segmentTooltip), t.graph.on("mousedown", function() {
                    if (null == Mr(window).on("mousemove.zoomRect")) {
                        var e = this;
                        if (!(Sr(e)[0] < 0 || Sr(e)[0] > t.graphW || Sr(e)[1] < 0 || Sr(e)[1] > t.graphH)) {
                            t.disableHover = !0;
                            var n = t.graph.append("rect").attr("class", "chart-zoom-selection"),
                                a = Sr(e);
                            Mr(window).on("mousemove.zoomRect", function() {
                                br.stopPropagation();
                                var r = [Math.max(0, Math.min(t.graphW, Sr(e)[0])), Math.max(0, Math.min(t.graphH, Sr(e)[1]))];
                                n.attr("x", Math.min(a[0], r[0])).attr("y", Math.min(a[1], r[1])).attr("width", Math.abs(r[0] - a[0])).attr("height", Math.abs(r[1] - a[1])), t.svg.dispatch("zoomScent", {
                                    detail: {
                                        zoomX: [a[0], r[0]].sort(i).map(t.xScale.invert),
                                        zoomY: [a[1], r[1]].sort(i).map(function(e) {
                                            return t.yScale.domain().indexOf(t.yScale.invert(e)) + (t.zoomY && t.zoomY[0] ? t.zoomY[0] : 0)
                                        })
                                    }
                                })
                            }).on("mouseup.zoomRect", function() {
                                Mr(window).on("mousemove.zoomRect", null).on("mouseup.zoomRect", null), Mr("body").classed("stat-noselect", !1), n.remove(), t.disableHover = !1;
                                var r = [Math.max(0, Math.min(t.graphW, Sr(e)[0])), Math.max(0, Math.min(t.graphH, Sr(e)[1]))];
                                if (a[0] != r[0] || a[1] != r[1]) {
                                    var f = [a[0], r[0]].sort(i).map(t.xScale.invert),
                                        c = [a[1], r[1]].sort(i).map(function(e) {
                                            return t.yScale.domain().indexOf(t.yScale.invert(e)) + (t.zoomY && t.zoomY[0] ? t.zoomY[0] : 0)
                                        }),
                                        o = f[1] - f[0] > 6e4,
                                        u = c[0] != t.zoomY[0] || c[1] != t.zoomY[1];
                                    (o || u) && t.svg.dispatch("zoom", {
                                        detail: {
                                            zoomX: o ? f : null,
                                            zoomY: u ? c : null
                                        }
                                    })
                                }
                            }, !0), br.stopPropagation()
                        }
                    }
                }), t.resetBtn = t.svg.append("text").attr("class", "reset-zoom-btn").text("Reset Zoom").style("text-anchor", "end").on("mouseup", function() {
                    t.svg.dispatch("resetZoom")
                }).on("mouseover", function() {
                    Mr(this).style("opacity", 1)
                }).on("mouseout", function() {
                    Mr(this).style("opacity", .6)
                }), t.svg.on("zoom", function() {
                    var e = br.detail,
                        n = e.zoomX,
                        a = e.zoomY,
                        r = null == e.redraw || e.redraw;
                    (n || a) && (n && (t.zoomX = n), a && (t.zoomY = a), t.svg.dispatch("zoomScent", {
                        detail: {
                            zoomX: n,
                            zoomY: a
                        }
                    }), r && (t._rerender(), t.onZoom && t.onZoom(t.zoomX, t.zoomY)))
                }), t.svg.on("resetZoom", function() {
                    var e = t.zoomX,
                        n = t.zoomY || [null, null],
                        a = t.enableOverview ? t.overviewArea.domainRange() : [u(t.flatData, function(e) {
                            return e.timeRange[0]
                        }), o(t.flatData, function(e) {
                            return e.timeRange[1]
                        })],
                        r = [null, null];
                    (e[0] < a[0] || e[1] > a[1] || n[0] != r[0] || n[1] != a[1]) && (t.zoomX = [new Date(Math.min(e[0], a[0])), new Date(Math.max(e[1], a[1]))], t.zoomY = r, t.svg.dispatch("zoomScent", {
                        detail: {
                            zoomX: t.zoomX,
                            zoomY: t.zoomY
                        }
                    }), t._rerender()), t.onZoom && t.onZoom(null, null)
                })
        },
        update: function(t) {
            ! function() {
                if (t.flatData = t.minSegmentDuration > 0 ? t.completeFlatData.filter(function(e) {
                        return e.timeRange[1] - e.timeRange[0] >= t.minSegmentDuration
                    }) : t.completeFlatData, null == t.zoomY || t.zoomY == [null, null]) {
                    t.structData = t.completeStructData, t.nLines = 0;
                    for (var e = 0, n = t.structData.length; e < n; e++) t.nLines += t.structData[e].lines.length;
                    return
                }
                t.structData = [];
                var a = [null == t.zoomY[0] ? 0 : t.zoomY[0]];
                a.push(Math.max(0, (null == t.zoomY[1] ? t.totalNLines : t.zoomY[1] + 1) - a[0])), t.nLines = a[1];
                var r = function(e, n) {
                    var r = t.completeStructData[e].lines;
                    if (t.minSegmentDuration > 0) {
                        if (!t.flatData.some(function(n) {
                                return n.group == t.completeStructData[e].group
                            })) return "continue";
                        r = t.completeStructData[e].lines.filter(function(n) {
                            return t.flatData.some(function(a) {
                                return a.group == t.completeStructData[e].group && a.label == n
                            })
                        })
                    }
                    if (a[0] >= r.length) return a[0] -= r.length, "continue";
                    var i = {
                        group: t.completeStructData[e].group,
                        lines: null
                    };
                    if (r.length - a[0] >= a[1]) return i.lines = r.slice(a[0], a[1] + a[0]), t.structData.push(i), a[1] = 0, "break";
                    a[0] > 0 ? (i.lines = r.slice(a[0]), a[0] = 0) : i.lines = r, t.structData.push(i), a[1] -= i.lines.length
                };
                e: for (var i = 0, f = t.completeStructData.length; i < f; i++) {
                    var c = r(i, f);
                    switch (c) {
                        case "continue":
                            continue;
                        case "break":
                            break e
                    }
                }
                t.nLines -= a[1]
            }(), t.graphW = t.width - t.leftMargin - t.rightMargin, t.graphH = u([t.nLines * t.maxLineHeight, t.maxHeight - t.topMargin - t.bottomMargin]), t.height = t.graphH + t.topMargin + t.bottomMargin, t.svg.transition().duration(t.transDuration).attr("width", t.width).attr("height", t.height), t.graph.attr("transform", "translate(" + t.leftMargin + "," + t.topMargin + ")"), t.overviewArea && t.overviewArea.width(.8 * t.width).height(t.overviewHeight + t.overviewArea.margins().top + t.overviewArea.margins().bottom), t.zoomX[0] = t.zoomX[0] || u(t.flatData, function(e) {
                    return e.timeRange[0]
                }), t.zoomX[1] = t.zoomX[1] || o(t.flatData, function(e) {
                    return e.timeRange[1]
                }), t.xScale = (t.useUtc ? function() {
                    return z.apply(Ra(on, cn, an, tn, en, Kt, jt, Ot, bn).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
                } : function() {
                    return z.apply(Ra(Jt, Qt, $t, Wt, Vt, qt, jt, Ot, hn).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
                })().domain(t.zoomX).range([0, t.graphW]).clamp(!0), t.overviewArea && t.overviewArea.scale(t.xScale.copy()).tickFormat(t.xTickFormat),
                function() {
                    for (var e = [], n = function(n, a) {
                            e = e.concat(t.structData[n].lines.map(function(e) {
                                return t.structData[n].group + "+&+" + e
                            }))
                        }, a = 0, r = t.structData.length; a < r; a++) n(a, r);
                    t.yScale.domain(e), t.yScale.range([t.graphH / e.length * .5, t.graphH * (1 - .5 / e.length)])
                }(),
                function() {
                    t.grpScale.domain(t.structData.map(function(e) {
                        return e.group
                    }));
                    var e = 0;
                    t.grpScale.range(t.structData.map(function(n) {
                        var a = (e + n.lines.length / 2) / t.nLines * t.graphH;
                        return e += n.lines.length, a
                    }))
                }(),
                function() {
                    t.svg.select(".axises").attr("transform", "translate(" + t.leftMargin + "," + t.topMargin + ")"), t.xAxis.scale(t.xScale).ticks(Math.round(.0011 * t.graphW)).tickFormat(t.xTickFormat), t.xGrid.scale(t.xScale).ticks(t.xAxis.ticks()[0]).tickFormat(""), t.svg.select("g.x-axis").style("stroke-opacity", 0).style("fill-opacity", 0).attr("transform", "translate(0," + t.graphH + ")").transition().duration(t.transDuration).call(t.xAxis).style("stroke-opacity", 1).style("fill-opacity", 1), t.xGrid.tickSize(t.graphH), t.svg.select("g.x-grid").attr("transform", "translate(0," + t.graphH + ")").transition().duration(t.transDuration).call(t.xGrid), t.dateMarker && t.dateMarker >= t.xScale.domain()[0] && t.dateMarker <= t.xScale.domain()[1] ? t.dateMarkerLine.style("display", "block").transition().duration(t.transDuration).attr("x1", t.xScale(t.dateMarker) + t.leftMargin).attr("x2", t.xScale(t.dateMarker) + t.leftMargin).attr("y1", t.topMargin + 1).attr("y2", t.graphH + t.topMargin) : t.dateMarkerLine.style("display", "none");
                    var n = Math.ceil(t.nLines * t.minLabelFont / Math.sqrt(2) / t.graphH / .6),
                        a = t.yScale.domain().filter(function(e, t) {
                            return !(t % n)
                        }),
                        r = Math.min(12, t.graphH / a.length * .6 * Math.sqrt(2)),
                        i = Math.ceil(t.rightMargin / (r / Math.sqrt(2)));
                    t.yAxis.tickValues(a), t.yAxis.tickFormat(function(e) {
                        return c(e.split("+&+")[1], i)
                    }), t.svg.select("g.y-axis").transition().duration(t.transDuration).attr("transform", "translate(" + t.graphW + ", 0)").style("font-size", r + "px").call(t.yAxis);
                    var f = u(t.grpScale.range(), function(e, n) {
                        return n > 0 ? e - t.grpScale.range()[n - 1] : 2 * e
                    });
                    r = Math.min(14, .6 * f * Math.sqrt(2)), i = Math.floor(t.leftMargin / (r / Math.sqrt(2))), t.grpAxis.tickFormat(function(e) {
                        return c(e, i)
                    }), t.svg.select("g.grp-axis").transition().duration(t.transDuration).style("font-size", r + "px").call(t.grpAxis), t.onLabelClick && t.svg.selectAll("g.y-axis,g.grp-axis").selectAll("text").style("cursor", "pointer").on("click", function(n) {
                        var a = n.split("+&+");
                        t.onLabelClick.apply(t, e(a.reverse()))
                    });

                    function c(e, t) {
                        return e.length <= t ? e : e.substring(0, 2 * t / 3) + "..." + e.substring(e.length - t / 3, e.length)
                    }
                }(),
                function() {
                    var e = t.graph.selectAll("rect.series-group").data(t.structData, function(e) {
                        return e.group
                    });
                    e.exit().transition().duration(t.transDuration).style("stroke-opacity", 0).style("fill-opacity", 0).remove();
                    var n = e.enter().append("rect").attr("class", "series-group").attr("x", 0).attr("y", 0).attr("height", 0).style("fill", "url(#" + t.groupGradId + ")").on("mouseover", t.groupTooltip.show).on("mouseout", t.groupTooltip.hide);
                    n.append("title").text("click-drag to zoom in"), (e = e.merge(n)).transition().duration(t.transDuration).attr("width", t.graphW).attr("height", function(e) {
                        return t.graphH * e.lines.length / t.nLines
                    }).attr("y", function(e) {
                        return t.grpScale(e.group) - t.graphH * e.lines.length / t.nLines / 2
                    })
                }(),
                function(e) {
                    e < 0 && (e = null);
                    t.lineHeight = t.graphH / t.nLines * .8;
                    var n = t.graph.selectAll("rect.series-segment").data(t.flatData.filter(function(n, a) {
                        return (null == e || a < e) && t.grpScale.domain().indexOf(n.group) + 1 && n.timeRange[1] >= t.xScale.domain()[0] && n.timeRange[0] <= t.xScale.domain()[1] && t.yScale.domain().indexOf(n.group + "+&+" + n.label) + 1
                    }), function(e) {
                        return e.group + e.label + e.timeRange[0]
                    });
                    n.exit().transition().duration(t.transDuration).style("fill-opacity", 0).remove();
                    var a = n.enter().append("rect").attr("class", "series-segment").attr("rx", 1).attr("ry", 1).attr("x", t.graphW / 2).attr("y", t.graphH / 2).attr("width", 0).attr("height", 0).style("fill", function(e) {
                        return t.zColorScale(e.val)
                        console.log(t.zColorScale(e.val))
                    }).style("fill-opacity", 0).on("mouseover.groupTooltip", t.groupTooltip.show).on("mouseout.groupTooltip", t.groupTooltip.hide).on("mouseover.lineTooltip", t.lineTooltip.show).on("mouseout.lineTooltip", t.lineTooltip.hide).on("mouseover.segmentTooltip", t.segmentTooltip.show).on("mouseout.segmentTooltip", t.segmentTooltip.hide);
                    a.on("mouseover", function() {
                        if (!("disableHover" in t && t.disableHover)) {
                            Jr()(this);
                            var e = .4 * t.lineHeight;
                            Mr(this).transition().duration(70).attr("x", function(n) {
                                return t.xScale(n.timeRange[0]) - e / 2
                            }).attr("width", function(n) {
                                return o([1, t.xScale(n.timeRange[1]) - t.xScale(n.timeRange[0])]) + e
                            }).attr("y", function(n) {
                                return t.yScale(n.group + "+&+" + n.label) - (t.lineHeight + e) / 2
                            }).attr("height", t.lineHeight + e).style("fill-opacity", 1)
                        }
                    }).on("mouseout", function() {
                        Mr(this).transition().duration(250).attr("x", function(e) {
                            return t.xScale(e.timeRange[0])
                        }).attr("width", function(e) {
                            return o([1, t.xScale(e.timeRange[1]) - t.xScale(e.timeRange[0])])
                        }).attr("y", function(e) {
                            return t.yScale(e.group + "+&+" + e.label) - t.lineHeight / 2
                        }).attr("height", t.lineHeight).style("fill-opacity", .6)
                    }).on("click", function(e) {
                        t.onSegmentClick && t.onSegmentClick(e)
                    }), (n = n.merge(a)).transition().duration(t.transDuration).attr("x", function(e) {
                        return t.xScale(e.timeRange[0])
                    }).attr("width", function(e) {
                        return o([1, t.xScale(e.timeRange[1]) - t.xScale(e.timeRange[0])])
                    }).attr("y", function(e) {
                        return t.yScale(e.group + "+&+" + e.label) - t.lineHeight / 2
                    }).attr("height", t.lineHeight).style("fill-opacity", .6)
                }(),

                //t.svg.select(".legendG").transition().duration(t.transDuration)
                //.attr("transform","translate(".concat(t.leftMargin+.05*t.graphW,",2)")),
                //t.colorLegend.width(Math.max(120,t.graphW/3*(t.zQualitative?2:1))).height(.6*t.topMargin).scale(t.zColorScale).label(t.zScaleLabel),
                t.resetBtn.transition().duration(t.transDuration).attr("x", t.leftMargin + .99 * t.graphW).attr("y", .8 * t.topMargin),
                ei().bbox({
                    width: .4 * t.graphW,
                    height: Math.min(13, .8 * t.topMargin)
                })(t.resetBtn.node())
        }
    })
});
