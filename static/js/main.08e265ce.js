/*! For license information please see main.08e265ce.js.LICENSE.txt */
(() => {
    var e = {
        144: (e, t, n) => {
            "use strict";
            var r = n(60), a = n(724);

            function l(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }

            var o = new Set, i = {};

            function s(e, t) {
                u(e, t), u(e + "Capture", t)
            }

            function u(e, t) {
                for (i[e] = t, e = 0; e < t.length; e++) o.add(t[e])
            }

            var c = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                d = Object.prototype.hasOwnProperty,
                f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                p = {}, h = {};

            function m(e, t, n, r, a, l, o) {
                this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = o
            }

            var v = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) {
                v[e] = new m(e, 0, !1, e, null, !1, !1)
            })), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function (e) {
                var t = e[0];
                v[t] = new m(t, 1, !1, e[1], null, !1, !1)
            })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) {
                v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1)
            })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) {
                v[e] = new m(e, 2, !1, e, null, !1, !1)
            })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) {
                v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1)
            })), ["checked", "multiple", "muted", "selected"].forEach((function (e) {
                v[e] = new m(e, 3, !0, e, null, !1, !1)
            })), ["capture", "download"].forEach((function (e) {
                v[e] = new m(e, 4, !1, e, null, !1, !1)
            })), ["cols", "rows", "size", "span"].forEach((function (e) {
                v[e] = new m(e, 6, !1, e, null, !1, !1)
            })), ["rowSpan", "start"].forEach((function (e) {
                v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1)
            }));
            var g = /[\-:]([a-z])/g;

            function y(e) {
                return e[1].toUpperCase()
            }

            function b(e, t, n, r) {
                var a = v.hasOwnProperty(t) ? v[t] : null;
                (null !== a ? 0 !== a.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function (e, t, n, r) {
                    if (null === t || "undefined" === typeof t || function (e, t, n, r) {
                        if (null !== n && 0 === n.type) return !1;
                        switch (typeof t) {
                            case"function":
                            case"symbol":
                                return !0;
                            case"boolean":
                                return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                            default:
                                return !1
                        }
                    }(e, t, n, r)) return !0;
                    if (r) return !1;
                    if (null !== n) switch (n.type) {
                        case 3:
                            return !t;
                        case 4:
                            return !1 === t;
                        case 5:
                            return isNaN(t);
                        case 6:
                            return isNaN(t) || 1 > t
                    }
                    return !1
                }(t, n, a, r) && (n = null), r || null === a ? function (e) {
                    return !!d.call(h, e) || !d.call(p, e) && (f.test(e) ? h[e] = !0 : (p[e] = !0, !1))
                }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName, r = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
            }

            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) {
                var t = e.replace(g, y);
                v[t] = new m(t, 1, !1, e, null, !1, !1)
            })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) {
                var t = e.replace(g, y);
                v[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
            })), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) {
                var t = e.replace(g, y);
                v[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
            })), ["tabIndex", "crossOrigin"].forEach((function (e) {
                v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1)
            })), v.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function (e) {
                v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0)
            }));
            var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, x = Symbol.for("react.element"),
                k = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"),
                j = Symbol.for("react.profiler"), N = Symbol.for("react.provider"), E = Symbol.for("react.context"),
                C = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"),
                T = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), O = Symbol.for("react.lazy");
            Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
            var D = Symbol.for("react.offscreen");
            Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
            var R = Symbol.iterator;

            function z(e) {
                return null === e || "object" !== typeof e ? null : "function" === typeof (e = R && e[R] || e["@@iterator"]) ? e : null
            }

            var A, M = Object.assign;

            function F(e) {
                if (void 0 === A) try {
                    throw Error()
                } catch (n) {
                    var t = n.stack.trim().match(/\n( *(at )?)/);
                    A = t && t[1] || ""
                }
                return "\n" + A + e
            }

            var I = !1;

            function U(e, t) {
                if (!e || I) return "";
                I = !0;
                var n = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (t) if (t = function () {
                        throw Error()
                    }, Object.defineProperty(t.prototype, "props", {
                        set: function () {
                            throw Error()
                        }
                    }), "object" === typeof Reflect && Reflect.construct) {
                        try {
                            Reflect.construct(t, [])
                        } catch (u) {
                            var r = u
                        }
                        Reflect.construct(e, [], t)
                    } else {
                        try {
                            t.call()
                        } catch (u) {
                            r = u
                        }
                        e.call(t.prototype)
                    } else {
                        try {
                            throw Error()
                        } catch (u) {
                            r = u
                        }
                        e()
                    }
                } catch (u) {
                    if (u && r && "string" === typeof u.stack) {
                        for (var a = u.stack.split("\n"), l = r.stack.split("\n"), o = a.length - 1, i = l.length - 1; 1 <= o && 0 <= i && a[o] !== l[i];) i--;
                        for (; 1 <= o && 0 <= i; o--, i--) if (a[o] !== l[i]) {
                            if (1 !== o || 1 !== i) do {
                                if (o--, 0 > --i || a[o] !== l[i]) {
                                    var s = "\n" + a[o].replace(" at new ", " at ");
                                    return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s
                                }
                            } while (1 <= o && 0 <= i);
                            break
                        }
                    }
                } finally {
                    I = !1, Error.prepareStackTrace = n
                }
                return (e = e ? e.displayName || e.name : "") ? F(e) : ""
            }

            function W(e) {
                switch (e.tag) {
                    case 5:
                        return F(e.type);
                    case 16:
                        return F("Lazy");
                    case 13:
                        return F("Suspense");
                    case 19:
                        return F("SuspenseList");
                    case 0:
                    case 2:
                    case 15:
                        return e = U(e.type, !1);
                    case 11:
                        return e = U(e.type.render, !1);
                    case 1:
                        return e = U(e.type, !0);
                    default:
                        return ""
                }
            }

            function B(e) {
                if (null == e) return null;
                if ("function" === typeof e) return e.displayName || e.name || null;
                if ("string" === typeof e) return e;
                switch (e) {
                    case _:
                        return "Fragment";
                    case k:
                        return "Portal";
                    case j:
                        return "Profiler";
                    case S:
                        return "StrictMode";
                    case P:
                        return "Suspense";
                    case T:
                        return "SuspenseList"
                }
                if ("object" === typeof e) switch (e.$$typeof) {
                    case E:
                        return (e.displayName || "Context") + ".Consumer";
                    case N:
                        return (e._context.displayName || "Context") + ".Provider";
                    case C:
                        var t = e.render;
                        return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                    case L:
                        return null !== (t = e.displayName || null) ? t : B(e.type) || "Memo";
                    case O:
                        t = e._payload, e = e._init;
                        try {
                            return B(e(t))
                        } catch (n) {
                        }
                }
                return null
            }

            function H(e) {
                var t = e.type;
                switch (e.tag) {
                    case 24:
                        return "Cache";
                    case 9:
                        return (t.displayName || "Context") + ".Consumer";
                    case 10:
                        return (t._context.displayName || "Context") + ".Provider";
                    case 18:
                        return "DehydratedFragment";
                    case 11:
                        return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                    case 7:
                        return "Fragment";
                    case 5:
                        return t;
                    case 4:
                        return "Portal";
                    case 3:
                        return "Root";
                    case 6:
                        return "Text";
                    case 16:
                        return B(t);
                    case 8:
                        return t === S ? "StrictMode" : "Mode";
                    case 22:
                        return "Offscreen";
                    case 12:
                        return "Profiler";
                    case 21:
                        return "Scope";
                    case 13:
                        return "Suspense";
                    case 19:
                        return "SuspenseList";
                    case 25:
                        return "TracingMarker";
                    case 1:
                    case 0:
                    case 17:
                    case 2:
                    case 14:
                    case 15:
                        if ("function" === typeof t) return t.displayName || t.name || null;
                        if ("string" === typeof t) return t
                }
                return null
            }

            function q(e) {
                switch (typeof e) {
                    case"boolean":
                    case"number":
                    case"string":
                    case"undefined":
                    case"object":
                        return e;
                    default:
                        return ""
                }
            }

            function V(e) {
                var t = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
            }

            function Q(e) {
                e._valueTracker || (e._valueTracker = function (e) {
                    var t = V(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                        r = "" + e[t];
                    if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                        var a = n.get, l = n.set;
                        return Object.defineProperty(e, t, {
                            configurable: !0, get: function () {
                                return a.call(this)
                            }, set: function (e) {
                                r = "" + e, l.call(this, e)
                            }
                        }), Object.defineProperty(e, t, {enumerable: n.enumerable}), {
                            getValue: function () {
                                return r
                            }, setValue: function (e) {
                                r = "" + e
                            }, stopTracking: function () {
                                e._valueTracker = null, delete e[t]
                            }
                        }
                    }
                }(e))
            }

            function K(e) {
                if (!e) return !1;
                var t = e._valueTracker;
                if (!t) return !0;
                var n = t.getValue(), r = "";
                return e && (r = V(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
            }

            function X(e) {
                if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                try {
                    return e.activeElement || e.body
                } catch (t) {
                    return e.body
                }
            }

            function Y(e, t) {
                var n = t.checked;
                return M({}, t, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != n ? n : e._wrapperState.initialChecked
                })
            }

            function G(e, t) {
                var n = null == t.defaultValue ? "" : t.defaultValue,
                    r = null != t.checked ? t.checked : t.defaultChecked;
                n = q(null != t.value ? t.value : n), e._wrapperState = {
                    initialChecked: r,
                    initialValue: n,
                    controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                }
            }

            function J(e, t) {
                null != (t = t.checked) && b(e, "checked", t, !1)
            }

            function Z(e, t) {
                J(e, t);
                var n = q(t.value), r = t.type;
                if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n); else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, q(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
            }

            function $(e, t, n) {
                if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                    var r = t.type;
                    if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                }
                "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
            }

            function ee(e, t, n) {
                "number" === t && X(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
            }

            var te = Array.isArray;

            function ne(e, t, n, r) {
                if (e = e.options, t) {
                    t = {};
                    for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
                    for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0)
                } else {
                    for (n = "" + q(n), t = null, a = 0; a < e.length; a++) {
                        if (e[a].value === n) return e[a].selected = !0, void (r && (e[a].defaultSelected = !0));
                        null !== t || e[a].disabled || (t = e[a])
                    }
                    null !== t && (t.selected = !0)
                }
            }

            function re(e, t) {
                if (null != t.dangerouslySetInnerHTML) throw Error(l(91));
                return M({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue})
            }

            function ae(e, t) {
                var n = t.value;
                if (null == n) {
                    if (n = t.children, t = t.defaultValue, null != n) {
                        if (null != t) throw Error(l(92));
                        if (te(n)) {
                            if (1 < n.length) throw Error(l(93));
                            n = n[0]
                        }
                        t = n
                    }
                    null == t && (t = ""), n = t
                }
                e._wrapperState = {initialValue: q(n)}
            }

            function le(e, t) {
                var n = q(t.value), r = q(t.defaultValue);
                null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
            }

            function oe(e) {
                var t = e.textContent;
                t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
            }

            function ie(e) {
                switch (e) {
                    case"svg":
                        return "http://www.w3.org/2000/svg";
                    case"math":
                        return "http://www.w3.org/1998/Math/MathML";
                    default:
                        return "http://www.w3.org/1999/xhtml"
                }
            }

            function se(e, t) {
                return null == e || "http://www.w3.org/1999/xhtml" === e ? ie(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
            }

            var ue, ce, de = (ce = function (e, t) {
                if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t; else {
                    for ((ue = ue || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ue.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                    for (; t.firstChild;) e.appendChild(t.firstChild)
                }
            }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (e, t, n, r) {
                MSApp.execUnsafeLocalFunction((function () {
                    return ce(e, t)
                }))
            } : ce);

            function fe(e, t) {
                if (t) {
                    var n = e.firstChild;
                    if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t)
                }
                e.textContent = t
            }

            var pe = {
                animationIterationCount: !0,
                aspectRatio: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            }, he = ["Webkit", "ms", "Moz", "O"];

            function me(e, t, n) {
                return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px"
            }

            function ve(e, t) {
                for (var n in e = e.style, t) if (t.hasOwnProperty(n)) {
                    var r = 0 === n.indexOf("--"), a = me(n, t[n], r);
                    "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a
                }
            }

            Object.keys(pe).forEach((function (e) {
                he.forEach((function (t) {
                    t = t + e.charAt(0).toUpperCase() + e.substring(1), pe[t] = pe[e]
                }))
            }));
            var ge = M({menuitem: !0}, {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            });

            function ye(e, t) {
                if (t) {
                    if (ge[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(l(137, e));
                    if (null != t.dangerouslySetInnerHTML) {
                        if (null != t.children) throw Error(l(60));
                        if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(l(61))
                    }
                    if (null != t.style && "object" !== typeof t.style) throw Error(l(62))
                }
            }

            function be(e, t) {
                if (-1 === e.indexOf("-")) return "string" === typeof t.is;
                switch (e) {
                    case"annotation-xml":
                    case"color-profile":
                    case"font-face":
                    case"font-face-src":
                    case"font-face-uri":
                    case"font-face-format":
                    case"font-face-name":
                    case"missing-glyph":
                        return !1;
                    default:
                        return !0
                }
            }

            var we = null;

            function xe(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
            }

            var ke = null, _e = null, Se = null;

            function je(e) {
                if (e = ba(e)) {
                    if ("function" !== typeof ke) throw Error(l(280));
                    var t = e.stateNode;
                    t && (t = xa(t), ke(e.stateNode, e.type, t))
                }
            }

            function Ne(e) {
                _e ? Se ? Se.push(e) : Se = [e] : _e = e
            }

            function Ee() {
                if (_e) {
                    var e = _e, t = Se;
                    if (Se = _e = null, je(e), t) for (e = 0; e < t.length; e++) je(t[e])
                }
            }

            function Ce(e, t) {
                return e(t)
            }

            function Pe() {
            }

            var Te = !1;

            function Le(e, t, n) {
                if (Te) return e(t, n);
                Te = !0;
                try {
                    return Ce(e, t, n)
                } finally {
                    Te = !1, (null !== _e || null !== Se) && (Pe(), Ee())
                }
            }

            function Oe(e, t) {
                var n = e.stateNode;
                if (null === n) return null;
                var r = xa(n);
                if (null === r) return null;
                n = r[t];
                e:switch (t) {
                    case"onClick":
                    case"onClickCapture":
                    case"onDoubleClick":
                    case"onDoubleClickCapture":
                    case"onMouseDown":
                    case"onMouseDownCapture":
                    case"onMouseMove":
                    case"onMouseMoveCapture":
                    case"onMouseUp":
                    case"onMouseUpCapture":
                    case"onMouseEnter":
                        (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                        break e;
                    default:
                        e = !1
                }
                if (e) return null;
                if (n && "function" !== typeof n) throw Error(l(231, t, typeof n));
                return n
            }

            var De = !1;
            if (c) try {
                var Re = {};
                Object.defineProperty(Re, "passive", {
                    get: function () {
                        De = !0
                    }
                }), window.addEventListener("test", Re, Re), window.removeEventListener("test", Re, Re)
            } catch (ce) {
                De = !1
            }

            function ze(e, t, n, r, a, l, o, i, s) {
                var u = Array.prototype.slice.call(arguments, 3);
                try {
                    t.apply(n, u)
                } catch (c) {
                    this.onError(c)
                }
            }

            var Ae = !1, Me = null, Fe = !1, Ie = null, Ue = {
                onError: function (e) {
                    Ae = !0, Me = e
                }
            };

            function We(e, t, n, r, a, l, o, i, s) {
                Ae = !1, Me = null, ze.apply(Ue, arguments)
            }

            function Be(e) {
                var t = e, n = e;
                if (e.alternate) for (; t.return;) t = t.return; else {
                    e = t;
                    do {
                        0 !== (4098 & (t = e).flags) && (n = t.return), e = t.return
                    } while (e)
                }
                return 3 === t.tag ? n : null
            }

            function He(e) {
                if (13 === e.tag) {
                    var t = e.memoizedState;
                    if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                }
                return null
            }

            function qe(e) {
                if (Be(e) !== e) throw Error(l(188))
            }

            function Ve(e) {
                return null !== (e = function (e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = Be(e))) throw Error(l(188));
                        return t !== e ? null : e
                    }
                    for (var n = e, r = t; ;) {
                        var a = n.return;
                        if (null === a) break;
                        var o = a.alternate;
                        if (null === o) {
                            if (null !== (r = a.return)) {
                                n = r;
                                continue
                            }
                            break
                        }
                        if (a.child === o.child) {
                            for (o = a.child; o;) {
                                if (o === n) return qe(a), e;
                                if (o === r) return qe(a), t;
                                o = o.sibling
                            }
                            throw Error(l(188))
                        }
                        if (n.return !== r.return) n = a, r = o; else {
                            for (var i = !1, s = a.child; s;) {
                                if (s === n) {
                                    i = !0, n = a, r = o;
                                    break
                                }
                                if (s === r) {
                                    i = !0, r = a, n = o;
                                    break
                                }
                                s = s.sibling
                            }
                            if (!i) {
                                for (s = o.child; s;) {
                                    if (s === n) {
                                        i = !0, n = o, r = a;
                                        break
                                    }
                                    if (s === r) {
                                        i = !0, r = o, n = a;
                                        break
                                    }
                                    s = s.sibling
                                }
                                if (!i) throw Error(l(189))
                            }
                        }
                        if (n.alternate !== r) throw Error(l(190))
                    }
                    if (3 !== n.tag) throw Error(l(188));
                    return n.stateNode.current === n ? e : t
                }(e)) ? Qe(e) : null
            }

            function Qe(e) {
                if (5 === e.tag || 6 === e.tag) return e;
                for (e = e.child; null !== e;) {
                    var t = Qe(e);
                    if (null !== t) return t;
                    e = e.sibling
                }
                return null
            }

            var Ke = a.unstable_scheduleCallback, Xe = a.unstable_cancelCallback, Ye = a.unstable_shouldYield,
                Ge = a.unstable_requestPaint, Je = a.unstable_now, Ze = a.unstable_getCurrentPriorityLevel,
                $e = a.unstable_ImmediatePriority, et = a.unstable_UserBlockingPriority, tt = a.unstable_NormalPriority,
                nt = a.unstable_LowPriority, rt = a.unstable_IdlePriority, at = null, lt = null;
            var ot = Math.clz32 ? Math.clz32 : function (e) {
                return e >>>= 0, 0 === e ? 32 : 31 - (it(e) / st | 0) | 0
            }, it = Math.log, st = Math.LN2;
            var ut = 64, ct = 4194304;

            function dt(e) {
                switch (e & -e) {
                    case 1:
                        return 1;
                    case 2:
                        return 2;
                    case 4:
                        return 4;
                    case 8:
                        return 8;
                    case 16:
                        return 16;
                    case 32:
                        return 32;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                        return 4194240 & e;
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        return 130023424 & e;
                    case 134217728:
                        return 134217728;
                    case 268435456:
                        return 268435456;
                    case 536870912:
                        return 536870912;
                    case 1073741824:
                        return 1073741824;
                    default:
                        return e
                }
            }

            function ft(e, t) {
                var n = e.pendingLanes;
                if (0 === n) return 0;
                var r = 0, a = e.suspendedLanes, l = e.pingedLanes, o = 268435455 & n;
                if (0 !== o) {
                    var i = o & ~a;
                    0 !== i ? r = dt(i) : 0 !== (l &= o) && (r = dt(l))
                } else 0 !== (o = n & ~a) ? r = dt(o) : 0 !== l && (r = dt(l));
                if (0 === r) return 0;
                if (0 !== t && t !== r && 0 === (t & a) && ((a = r & -r) >= (l = t & -t) || 16 === a && 0 !== (4194240 & l))) return t;
                if (0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)) for (e = e.entanglements, t &= r; 0 < t;) a = 1 << (n = 31 - ot(t)), r |= e[n], t &= ~a;
                return r
            }

            function pt(e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 4:
                        return t + 250;
                    case 8:
                    case 16:
                    case 32:
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                        return t + 5e3;
                    default:
                        return -1
                }
            }

            function ht(e) {
                return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
            }

            function mt() {
                var e = ut;
                return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e
            }

            function vt(e) {
                for (var t = [], n = 0; 31 > n; n++) t.push(e);
                return t
            }

            function gt(e, t, n) {
                e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - ot(t)] = n
            }

            function yt(e, t) {
                var n = e.entangledLanes |= t;
                for (e = e.entanglements; n;) {
                    var r = 31 - ot(n), a = 1 << r;
                    a & t | e[r] & t && (e[r] |= t), n &= ~a
                }
            }

            var bt = 0;

            function wt(e) {
                return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1
            }

            var xt, kt, _t, St, jt, Nt = !1, Et = [], Ct = null, Pt = null, Tt = null, Lt = new Map, Ot = new Map,
                Dt = [],
                Rt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

            function zt(e, t) {
                switch (e) {
                    case"focusin":
                    case"focusout":
                        Ct = null;
                        break;
                    case"dragenter":
                    case"dragleave":
                        Pt = null;
                        break;
                    case"mouseover":
                    case"mouseout":
                        Tt = null;
                        break;
                    case"pointerover":
                    case"pointerout":
                        Lt.delete(t.pointerId);
                        break;
                    case"gotpointercapture":
                    case"lostpointercapture":
                        Ot.delete(t.pointerId)
                }
            }

            function At(e, t, n, r, a, l) {
                return null === e || e.nativeEvent !== l ? (e = {
                    blockedOn: t,
                    domEventName: n,
                    eventSystemFlags: r,
                    nativeEvent: l,
                    targetContainers: [a]
                }, null !== t && (null !== (t = ba(t)) && kt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e)
            }

            function Mt(e) {
                var t = ya(e.target);
                if (null !== t) {
                    var n = Be(t);
                    if (null !== n) if (13 === (t = n.tag)) {
                        if (null !== (t = He(n))) return e.blockedOn = t, void jt(e.priority, (function () {
                            _t(n)
                        }))
                    } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                }
                e.blockedOn = null
            }

            function Ft(e) {
                if (null !== e.blockedOn) return !1;
                for (var t = e.targetContainers; 0 < t.length;) {
                    var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                    if (null !== n) return null !== (t = ba(n)) && kt(t), e.blockedOn = n, !1;
                    var r = new (n = e.nativeEvent).constructor(n.type, n);
                    we = r, n.target.dispatchEvent(r), we = null, t.shift()
                }
                return !0
            }

            function It(e, t, n) {
                Ft(e) && n.delete(t)
            }

            function Ut() {
                Nt = !1, null !== Ct && Ft(Ct) && (Ct = null), null !== Pt && Ft(Pt) && (Pt = null), null !== Tt && Ft(Tt) && (Tt = null), Lt.forEach(It), Ot.forEach(It)
            }

            function Wt(e, t) {
                e.blockedOn === t && (e.blockedOn = null, Nt || (Nt = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Ut)))
            }

            function Bt(e) {
                function t(t) {
                    return Wt(t, e)
                }

                if (0 < Et.length) {
                    Wt(Et[0], e);
                    for (var n = 1; n < Et.length; n++) {
                        var r = Et[n];
                        r.blockedOn === e && (r.blockedOn = null)
                    }
                }
                for (null !== Ct && Wt(Ct, e), null !== Pt && Wt(Pt, e), null !== Tt && Wt(Tt, e), Lt.forEach(t), Ot.forEach(t), n = 0; n < Dt.length; n++) (r = Dt[n]).blockedOn === e && (r.blockedOn = null);
                for (; 0 < Dt.length && null === (n = Dt[0]).blockedOn;) Mt(n), null === n.blockedOn && Dt.shift()
            }

            var Ht = w.ReactCurrentBatchConfig, qt = !0;

            function Vt(e, t, n, r) {
                var a = bt, l = Ht.transition;
                Ht.transition = null;
                try {
                    bt = 1, Kt(e, t, n, r)
                } finally {
                    bt = a, Ht.transition = l
                }
            }

            function Qt(e, t, n, r) {
                var a = bt, l = Ht.transition;
                Ht.transition = null;
                try {
                    bt = 4, Kt(e, t, n, r)
                } finally {
                    bt = a, Ht.transition = l
                }
            }

            function Kt(e, t, n, r) {
                if (qt) {
                    var a = Yt(e, t, n, r);
                    if (null === a) qr(e, t, r, Xt, n), zt(e, r); else if (function (e, t, n, r, a) {
                        switch (t) {
                            case"focusin":
                                return Ct = At(Ct, e, t, n, r, a), !0;
                            case"dragenter":
                                return Pt = At(Pt, e, t, n, r, a), !0;
                            case"mouseover":
                                return Tt = At(Tt, e, t, n, r, a), !0;
                            case"pointerover":
                                var l = a.pointerId;
                                return Lt.set(l, At(Lt.get(l) || null, e, t, n, r, a)), !0;
                            case"gotpointercapture":
                                return l = a.pointerId, Ot.set(l, At(Ot.get(l) || null, e, t, n, r, a)), !0
                        }
                        return !1
                    }(a, e, t, n, r)) r.stopPropagation(); else if (zt(e, r), 4 & t && -1 < Rt.indexOf(e)) {
                        for (; null !== a;) {
                            var l = ba(a);
                            if (null !== l && xt(l), null === (l = Yt(e, t, n, r)) && qr(e, t, r, Xt, n), l === a) break;
                            a = l
                        }
                        null !== a && r.stopPropagation()
                    } else qr(e, t, r, null, n)
                }
            }

            var Xt = null;

            function Yt(e, t, n, r) {
                if (Xt = null, null !== (e = ya(e = xe(r)))) if (null === (t = Be(e))) e = null; else if (13 === (n = t.tag)) {
                    if (null !== (e = He(t))) return e;
                    e = null
                } else if (3 === n) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                    e = null
                } else t !== e && (e = null);
                return Xt = e, null
            }

            function Gt(e) {
                switch (e) {
                    case"cancel":
                    case"click":
                    case"close":
                    case"contextmenu":
                    case"copy":
                    case"cut":
                    case"auxclick":
                    case"dblclick":
                    case"dragend":
                    case"dragstart":
                    case"drop":
                    case"focusin":
                    case"focusout":
                    case"input":
                    case"invalid":
                    case"keydown":
                    case"keypress":
                    case"keyup":
                    case"mousedown":
                    case"mouseup":
                    case"paste":
                    case"pause":
                    case"play":
                    case"pointercancel":
                    case"pointerdown":
                    case"pointerup":
                    case"ratechange":
                    case"reset":
                    case"resize":
                    case"seeked":
                    case"submit":
                    case"touchcancel":
                    case"touchend":
                    case"touchstart":
                    case"volumechange":
                    case"change":
                    case"selectionchange":
                    case"textInput":
                    case"compositionstart":
                    case"compositionend":
                    case"compositionupdate":
                    case"beforeblur":
                    case"afterblur":
                    case"beforeinput":
                    case"blur":
                    case"fullscreenchange":
                    case"focus":
                    case"hashchange":
                    case"popstate":
                    case"select":
                    case"selectstart":
                        return 1;
                    case"drag":
                    case"dragenter":
                    case"dragexit":
                    case"dragleave":
                    case"dragover":
                    case"mousemove":
                    case"mouseout":
                    case"mouseover":
                    case"pointermove":
                    case"pointerout":
                    case"pointerover":
                    case"scroll":
                    case"toggle":
                    case"touchmove":
                    case"wheel":
                    case"mouseenter":
                    case"mouseleave":
                    case"pointerenter":
                    case"pointerleave":
                        return 4;
                    case"message":
                        switch (Ze()) {
                            case $e:
                                return 1;
                            case et:
                                return 4;
                            case tt:
                            case nt:
                                return 16;
                            case rt:
                                return 536870912;
                            default:
                                return 16
                        }
                    default:
                        return 16
                }
            }

            var Jt = null, Zt = null, $t = null;

            function en() {
                if ($t) return $t;
                var e, t, n = Zt, r = n.length, a = "value" in Jt ? Jt.value : Jt.textContent, l = a.length;
                for (e = 0; e < r && n[e] === a[e]; e++) ;
                var o = r - e;
                for (t = 1; t <= o && n[r - t] === a[l - t]; t++) ;
                return $t = a.slice(e, 1 < t ? 1 - t : void 0)
            }

            function tn(e) {
                var t = e.keyCode;
                return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
            }

            function nn() {
                return !0
            }

            function rn() {
                return !1
            }

            function an(e) {
                function t(t, n, r, a, l) {
                    for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = l, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(a) : a[o]);
                    return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? nn : rn, this.isPropagationStopped = rn, this
                }

                return M(t.prototype, {
                    preventDefault: function () {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn)
                    }, stopPropagation: function () {
                        var e = this.nativeEvent;
                        e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn)
                    }, persist: function () {
                    }, isPersistent: nn
                }), t
            }

            var ln, on, sn, un = {
                    eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) {
                        return e.timeStamp || Date.now()
                    }, defaultPrevented: 0, isTrusted: 0
                }, cn = an(un), dn = M({}, un, {view: 0, detail: 0}), fn = an(dn), pn = M({}, dn, {
                    screenX: 0,
                    screenY: 0,
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    altKey: 0,
                    metaKey: 0,
                    getModifierState: jn,
                    button: 0,
                    buttons: 0,
                    relatedTarget: function (e) {
                        return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                    },
                    movementX: function (e) {
                        return "movementX" in e ? e.movementX : (e !== sn && (sn && "mousemove" === e.type ? (ln = e.screenX - sn.screenX, on = e.screenY - sn.screenY) : on = ln = 0, sn = e), ln)
                    },
                    movementY: function (e) {
                        return "movementY" in e ? e.movementY : on
                    }
                }), hn = an(pn), mn = an(M({}, pn, {dataTransfer: 0})), vn = an(M({}, dn, {relatedTarget: 0})),
                gn = an(M({}, un, {animationName: 0, elapsedTime: 0, pseudoElement: 0})), yn = M({}, un, {
                    clipboardData: function (e) {
                        return "clipboardData" in e ? e.clipboardData : window.clipboardData
                    }
                }), bn = an(yn), wn = an(M({}, un, {data: 0})), xn = {
                    Esc: "Escape",
                    Spacebar: " ",
                    Left: "ArrowLeft",
                    Up: "ArrowUp",
                    Right: "ArrowRight",
                    Down: "ArrowDown",
                    Del: "Delete",
                    Win: "OS",
                    Menu: "ContextMenu",
                    Apps: "ContextMenu",
                    Scroll: "ScrollLock",
                    MozPrintableKey: "Unidentified"
                }, kn = {
                    8: "Backspace",
                    9: "Tab",
                    12: "Clear",
                    13: "Enter",
                    16: "Shift",
                    17: "Control",
                    18: "Alt",
                    19: "Pause",
                    20: "CapsLock",
                    27: "Escape",
                    32: " ",
                    33: "PageUp",
                    34: "PageDown",
                    35: "End",
                    36: "Home",
                    37: "ArrowLeft",
                    38: "ArrowUp",
                    39: "ArrowRight",
                    40: "ArrowDown",
                    45: "Insert",
                    46: "Delete",
                    112: "F1",
                    113: "F2",
                    114: "F3",
                    115: "F4",
                    116: "F5",
                    117: "F6",
                    118: "F7",
                    119: "F8",
                    120: "F9",
                    121: "F10",
                    122: "F11",
                    123: "F12",
                    144: "NumLock",
                    145: "ScrollLock",
                    224: "Meta"
                }, _n = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

            function Sn(e) {
                var t = this.nativeEvent;
                return t.getModifierState ? t.getModifierState(e) : !!(e = _n[e]) && !!t[e]
            }

            function jn() {
                return Sn
            }

            var Nn = M({}, dn, {
                key: function (e) {
                    if (e.key) {
                        var t = xn[e.key] || e.key;
                        if ("Unidentified" !== t) return t
                    }
                    return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? kn[e.keyCode] || "Unidentified" : ""
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: jn,
                charCode: function (e) {
                    return "keypress" === e.type ? tn(e) : 0
                },
                keyCode: function (e) {
                    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                },
                which: function (e) {
                    return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                }
            }), En = an(Nn), Cn = an(M({}, pn, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0
            })), Pn = an(M({}, dn, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: jn
            })), Tn = an(M({}, un, {propertyName: 0, elapsedTime: 0, pseudoElement: 0})), Ln = M({}, pn, {
                deltaX: function (e) {
                    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                }, deltaY: function (e) {
                    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                }, deltaZ: 0, deltaMode: 0
            }), On = an(Ln), Dn = [9, 13, 27, 32], Rn = c && "CompositionEvent" in window, zn = null;
            c && "documentMode" in document && (zn = document.documentMode);
            var An = c && "TextEvent" in window && !zn, Mn = c && (!Rn || zn && 8 < zn && 11 >= zn),
                Fn = String.fromCharCode(32), In = !1;

            function Un(e, t) {
                switch (e) {
                    case"keyup":
                        return -1 !== Dn.indexOf(t.keyCode);
                    case"keydown":
                        return 229 !== t.keyCode;
                    case"keypress":
                    case"mousedown":
                    case"focusout":
                        return !0;
                    default:
                        return !1
                }
            }

            function Wn(e) {
                return "object" === typeof (e = e.detail) && "data" in e ? e.data : null
            }

            var Bn = !1;
            var Hn = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };

            function qn(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === t ? !!Hn[e.type] : "textarea" === t
            }

            function Vn(e, t, n, r) {
                Ne(r), 0 < (t = Qr(t, "onChange")).length && (n = new cn("onChange", "change", null, n, r), e.push({
                    event: n,
                    listeners: t
                }))
            }

            var Qn = null, Kn = null;

            function Xn(e) {
                Fr(e, 0)
            }

            function Yn(e) {
                if (K(wa(e))) return e
            }

            function Gn(e, t) {
                if ("change" === e) return t
            }

            var Jn = !1;
            if (c) {
                var Zn;
                if (c) {
                    var $n = "oninput" in document;
                    if (!$n) {
                        var er = document.createElement("div");
                        er.setAttribute("oninput", "return;"), $n = "function" === typeof er.oninput
                    }
                    Zn = $n
                } else Zn = !1;
                Jn = Zn && (!document.documentMode || 9 < document.documentMode)
            }

            function tr() {
                Qn && (Qn.detachEvent("onpropertychange", nr), Kn = Qn = null)
            }

            function nr(e) {
                if ("value" === e.propertyName && Yn(Kn)) {
                    var t = [];
                    Vn(t, Kn, e, xe(e)), Le(Xn, t)
                }
            }

            function rr(e, t, n) {
                "focusin" === e ? (tr(), Kn = n, (Qn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
            }

            function ar(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Yn(Kn)
            }

            function lr(e, t) {
                if ("click" === e) return Yn(t)
            }

            function or(e, t) {
                if ("input" === e || "change" === e) return Yn(t)
            }

            var ir = "function" === typeof Object.is ? Object.is : function (e, t) {
                return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
            };

            function sr(e, t) {
                if (ir(e, t)) return !0;
                if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                var n = Object.keys(e), r = Object.keys(t);
                if (n.length !== r.length) return !1;
                for (r = 0; r < n.length; r++) {
                    var a = n[r];
                    if (!d.call(t, a) || !ir(e[a], t[a])) return !1
                }
                return !0
            }

            function ur(e) {
                for (; e && e.firstChild;) e = e.firstChild;
                return e
            }

            function cr(e, t) {
                var n, r = ur(e);
                for (e = 0; r;) {
                    if (3 === r.nodeType) {
                        if (n = e + r.textContent.length, e <= t && n >= t) return {node: r, offset: t - e};
                        e = n
                    }
                    e:{
                        for (; r;) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break e
                            }
                            r = r.parentNode
                        }
                        r = void 0
                    }
                    r = ur(r)
                }
            }

            function dr(e, t) {
                return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? dr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
            }

            function fr() {
                for (var e = window, t = X(); t instanceof e.HTMLIFrameElement;) {
                    try {
                        var n = "string" === typeof t.contentWindow.location.href
                    } catch (r) {
                        n = !1
                    }
                    if (!n) break;
                    t = X((e = t.contentWindow).document)
                }
                return t
            }

            function pr(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
            }

            function hr(e) {
                var t = fr(), n = e.focusedElem, r = e.selectionRange;
                if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
                    if (null !== r && pr(n)) if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length); else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                        e = e.getSelection();
                        var a = n.textContent.length, l = Math.min(r.start, a);
                        r = void 0 === r.end ? l : Math.min(r.end, a), !e.extend && l > r && (a = r, r = l, l = a), a = cr(n, l);
                        var o = cr(n, r);
                        a && o && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && ((t = t.createRange()).setStart(a.node, a.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
                    }
                    for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
                        element: e,
                        left: e.scrollLeft,
                        top: e.scrollTop
                    });
                    for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++) (e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
                }
            }

            var mr = c && "documentMode" in document && 11 >= document.documentMode, vr = null, gr = null, yr = null,
                br = !1;

            function wr(e, t, n) {
                var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                br || null == vr || vr !== X(r) || ("selectionStart" in (r = vr) && pr(r) ? r = {
                    start: r.selectionStart,
                    end: r.selectionEnd
                } : r = {
                    anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset
                }, yr && sr(yr, r) || (yr = r, 0 < (r = Qr(gr, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({
                    event: t,
                    listeners: r
                }), t.target = vr)))
            }

            function xr(e, t) {
                var n = {};
                return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
            }

            var kr = {
                animationend: xr("Animation", "AnimationEnd"),
                animationiteration: xr("Animation", "AnimationIteration"),
                animationstart: xr("Animation", "AnimationStart"),
                transitionend: xr("Transition", "TransitionEnd")
            }, _r = {}, Sr = {};

            function jr(e) {
                if (_r[e]) return _r[e];
                if (!kr[e]) return e;
                var t, n = kr[e];
                for (t in n) if (n.hasOwnProperty(t) && t in Sr) return _r[e] = n[t];
                return e
            }

            c && (Sr = document.createElement("div").style, "AnimationEvent" in window || (delete kr.animationend.animation, delete kr.animationiteration.animation, delete kr.animationstart.animation), "TransitionEvent" in window || delete kr.transitionend.transition);
            var Nr = jr("animationend"), Er = jr("animationiteration"), Cr = jr("animationstart"),
                Pr = jr("transitionend"), Tr = new Map,
                Lr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

            function Or(e, t) {
                Tr.set(e, t), s(t, [e])
            }

            for (var Dr = 0; Dr < Lr.length; Dr++) {
                var Rr = Lr[Dr];
                Or(Rr.toLowerCase(), "on" + (Rr[0].toUpperCase() + Rr.slice(1)))
            }
            Or(Nr, "onAnimationEnd"), Or(Er, "onAnimationIteration"), Or(Cr, "onAnimationStart"), Or("dblclick", "onDoubleClick"), Or("focusin", "onFocus"), Or("focusout", "onBlur"), Or(Pr, "onTransitionEnd"), u("onMouseEnter", ["mouseout", "mouseover"]), u("onMouseLeave", ["mouseout", "mouseover"]), u("onPointerEnter", ["pointerout", "pointerover"]), u("onPointerLeave", ["pointerout", "pointerover"]), s("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), s("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), s("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), s("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), s("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), s("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var zr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                Ar = new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));

            function Mr(e, t, n) {
                var r = e.type || "unknown-event";
                e.currentTarget = n, function (e, t, n, r, a, o, i, s, u) {
                    if (We.apply(this, arguments), Ae) {
                        if (!Ae) throw Error(l(198));
                        var c = Me;
                        Ae = !1, Me = null, Fe || (Fe = !0, Ie = c)
                    }
                }(r, t, void 0, e), e.currentTarget = null
            }

            function Fr(e, t) {
                t = 0 !== (4 & t);
                for (var n = 0; n < e.length; n++) {
                    var r = e[n], a = r.event;
                    r = r.listeners;
                    e:{
                        var l = void 0;
                        if (t) for (var o = r.length - 1; 0 <= o; o--) {
                            var i = r[o], s = i.instance, u = i.currentTarget;
                            if (i = i.listener, s !== l && a.isPropagationStopped()) break e;
                            Mr(a, i, u), l = s
                        } else for (o = 0; o < r.length; o++) {
                            if (s = (i = r[o]).instance, u = i.currentTarget, i = i.listener, s !== l && a.isPropagationStopped()) break e;
                            Mr(a, i, u), l = s
                        }
                    }
                }
                if (Fe) throw e = Ie, Fe = !1, Ie = null, e
            }

            function Ir(e, t) {
                var n = t[ma];
                void 0 === n && (n = t[ma] = new Set);
                var r = e + "__bubble";
                n.has(r) || (Hr(t, e, 2, !1), n.add(r))
            }

            function Ur(e, t, n) {
                var r = 0;
                t && (r |= 4), Hr(n, e, r, t)
            }

            var Wr = "_reactListening" + Math.random().toString(36).slice(2);

            function Br(e) {
                if (!e[Wr]) {
                    e[Wr] = !0, o.forEach((function (t) {
                        "selectionchange" !== t && (Ar.has(t) || Ur(t, !1, e), Ur(t, !0, e))
                    }));
                    var t = 9 === e.nodeType ? e : e.ownerDocument;
                    null === t || t[Wr] || (t[Wr] = !0, Ur("selectionchange", !1, t))
                }
            }

            function Hr(e, t, n, r) {
                switch (Gt(t)) {
                    case 1:
                        var a = Vt;
                        break;
                    case 4:
                        a = Qt;
                        break;
                    default:
                        a = Kt
                }
                n = a.bind(null, t, n, e), a = void 0, !De || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, {
                    capture: !0,
                    passive: a
                }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {passive: a}) : e.addEventListener(t, n, !1)
            }

            function qr(e, t, n, r, a) {
                var l = r;
                if (0 === (1 & t) && 0 === (2 & t) && null !== r) e:for (; ;) {
                    if (null === r) return;
                    var o = r.tag;
                    if (3 === o || 4 === o) {
                        var i = r.stateNode.containerInfo;
                        if (i === a || 8 === i.nodeType && i.parentNode === a) break;
                        if (4 === o) for (o = r.return; null !== o;) {
                            var s = o.tag;
                            if ((3 === s || 4 === s) && ((s = o.stateNode.containerInfo) === a || 8 === s.nodeType && s.parentNode === a)) return;
                            o = o.return
                        }
                        for (; null !== i;) {
                            if (null === (o = ya(i))) return;
                            if (5 === (s = o.tag) || 6 === s) {
                                r = l = o;
                                continue e
                            }
                            i = i.parentNode
                        }
                    }
                    r = r.return
                }
                Le((function () {
                    var r = l, a = xe(n), o = [];
                    e:{
                        var i = Tr.get(e);
                        if (void 0 !== i) {
                            var s = cn, u = e;
                            switch (e) {
                                case"keypress":
                                    if (0 === tn(n)) break e;
                                case"keydown":
                                case"keyup":
                                    s = En;
                                    break;
                                case"focusin":
                                    u = "focus", s = vn;
                                    break;
                                case"focusout":
                                    u = "blur", s = vn;
                                    break;
                                case"beforeblur":
                                case"afterblur":
                                    s = vn;
                                    break;
                                case"click":
                                    if (2 === n.button) break e;
                                case"auxclick":
                                case"dblclick":
                                case"mousedown":
                                case"mousemove":
                                case"mouseup":
                                case"mouseout":
                                case"mouseover":
                                case"contextmenu":
                                    s = hn;
                                    break;
                                case"drag":
                                case"dragend":
                                case"dragenter":
                                case"dragexit":
                                case"dragleave":
                                case"dragover":
                                case"dragstart":
                                case"drop":
                                    s = mn;
                                    break;
                                case"touchcancel":
                                case"touchend":
                                case"touchmove":
                                case"touchstart":
                                    s = Pn;
                                    break;
                                case Nr:
                                case Er:
                                case Cr:
                                    s = gn;
                                    break;
                                case Pr:
                                    s = Tn;
                                    break;
                                case"scroll":
                                    s = fn;
                                    break;
                                case"wheel":
                                    s = On;
                                    break;
                                case"copy":
                                case"cut":
                                case"paste":
                                    s = bn;
                                    break;
                                case"gotpointercapture":
                                case"lostpointercapture":
                                case"pointercancel":
                                case"pointerdown":
                                case"pointermove":
                                case"pointerout":
                                case"pointerover":
                                case"pointerup":
                                    s = Cn
                            }
                            var c = 0 !== (4 & t), d = !c && "scroll" === e,
                                f = c ? null !== i ? i + "Capture" : null : i;
                            c = [];
                            for (var p, h = r; null !== h;) {
                                var m = (p = h).stateNode;
                                if (5 === p.tag && null !== m && (p = m, null !== f && (null != (m = Oe(h, f)) && c.push(Vr(h, m, p)))), d) break;
                                h = h.return
                            }
                            0 < c.length && (i = new s(i, u, null, n, a), o.push({event: i, listeners: c}))
                        }
                    }
                    if (0 === (7 & t)) {
                        if (s = "mouseout" === e || "pointerout" === e, (!(i = "mouseover" === e || "pointerover" === e) || n === we || !(u = n.relatedTarget || n.fromElement) || !ya(u) && !u[ha]) && (s || i) && (i = a.window === a ? a : (i = a.ownerDocument) ? i.defaultView || i.parentWindow : window, s ? (s = r, null !== (u = (u = n.relatedTarget || n.toElement) ? ya(u) : null) && (u !== (d = Be(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (s = null, u = r), s !== u)) {
                            if (c = hn, m = "onMouseLeave", f = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (c = Cn, m = "onPointerLeave", f = "onPointerEnter", h = "pointer"), d = null == s ? i : wa(s), p = null == u ? i : wa(u), (i = new c(m, h + "leave", s, n, a)).target = d, i.relatedTarget = p, m = null, ya(a) === r && ((c = new c(f, h + "enter", u, n, a)).target = p, c.relatedTarget = d, m = c), d = m, s && u) e:{
                                for (f = u, h = 0, p = c = s; p; p = Kr(p)) h++;
                                for (p = 0, m = f; m; m = Kr(m)) p++;
                                for (; 0 < h - p;) c = Kr(c), h--;
                                for (; 0 < p - h;) f = Kr(f), p--;
                                for (; h--;) {
                                    if (c === f || null !== f && c === f.alternate) break e;
                                    c = Kr(c), f = Kr(f)
                                }
                                c = null
                            } else c = null;
                            null !== s && Xr(o, i, s, c, !1), null !== u && null !== d && Xr(o, d, u, c, !0)
                        }
                        if ("select" === (s = (i = r ? wa(r) : window).nodeName && i.nodeName.toLowerCase()) || "input" === s && "file" === i.type) var v = Gn; else if (qn(i)) if (Jn) v = or; else {
                            v = ar;
                            var g = rr
                        } else (s = i.nodeName) && "input" === s.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (v = lr);
                        switch (v && (v = v(e, r)) ? Vn(o, v, n, a) : (g && g(e, i, r), "focusout" === e && (g = i._wrapperState) && g.controlled && "number" === i.type && ee(i, "number", i.value)), g = r ? wa(r) : window, e) {
                            case"focusin":
                                (qn(g) || "true" === g.contentEditable) && (vr = g, gr = r, yr = null);
                                break;
                            case"focusout":
                                yr = gr = vr = null;
                                break;
                            case"mousedown":
                                br = !0;
                                break;
                            case"contextmenu":
                            case"mouseup":
                            case"dragend":
                                br = !1, wr(o, n, a);
                                break;
                            case"selectionchange":
                                if (mr) break;
                            case"keydown":
                            case"keyup":
                                wr(o, n, a)
                        }
                        var y;
                        if (Rn) e:{
                            switch (e) {
                                case"compositionstart":
                                    var b = "onCompositionStart";
                                    break e;
                                case"compositionend":
                                    b = "onCompositionEnd";
                                    break e;
                                case"compositionupdate":
                                    b = "onCompositionUpdate";
                                    break e
                            }
                            b = void 0
                        } else Bn ? Un(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
                        b && (Mn && "ko" !== n.locale && (Bn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Bn && (y = en()) : (Zt = "value" in (Jt = a) ? Jt.value : Jt.textContent, Bn = !0)), 0 < (g = Qr(r, b)).length && (b = new wn(b, e, null, n, a), o.push({
                            event: b,
                            listeners: g
                        }), y ? b.data = y : null !== (y = Wn(n)) && (b.data = y))), (y = An ? function (e, t) {
                            switch (e) {
                                case"compositionend":
                                    return Wn(t);
                                case"keypress":
                                    return 32 !== t.which ? null : (In = !0, Fn);
                                case"textInput":
                                    return (e = t.data) === Fn && In ? null : e;
                                default:
                                    return null
                            }
                        }(e, n) : function (e, t) {
                            if (Bn) return "compositionend" === e || !Rn && Un(e, t) ? (e = en(), $t = Zt = Jt = null, Bn = !1, e) : null;
                            switch (e) {
                                case"paste":
                                default:
                                    return null;
                                case"keypress":
                                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                        if (t.char && 1 < t.char.length) return t.char;
                                        if (t.which) return String.fromCharCode(t.which)
                                    }
                                    return null;
                                case"compositionend":
                                    return Mn && "ko" !== t.locale ? null : t.data
                            }
                        }(e, n)) && (0 < (r = Qr(r, "onBeforeInput")).length && (a = new wn("onBeforeInput", "beforeinput", null, n, a), o.push({
                            event: a,
                            listeners: r
                        }), a.data = y))
                    }
                    Fr(o, t)
                }))
            }

            function Vr(e, t, n) {
                return {instance: e, listener: t, currentTarget: n}
            }

            function Qr(e, t) {
                for (var n = t + "Capture", r = []; null !== e;) {
                    var a = e, l = a.stateNode;
                    5 === a.tag && null !== l && (a = l, null != (l = Oe(e, n)) && r.unshift(Vr(e, l, a)), null != (l = Oe(e, t)) && r.push(Vr(e, l, a))), e = e.return
                }
                return r
            }

            function Kr(e) {
                if (null === e) return null;
                do {
                    e = e.return
                } while (e && 5 !== e.tag);
                return e || null
            }

            function Xr(e, t, n, r, a) {
                for (var l = t._reactName, o = []; null !== n && n !== r;) {
                    var i = n, s = i.alternate, u = i.stateNode;
                    if (null !== s && s === r) break;
                    5 === i.tag && null !== u && (i = u, a ? null != (s = Oe(n, l)) && o.unshift(Vr(n, s, i)) : a || null != (s = Oe(n, l)) && o.push(Vr(n, s, i))), n = n.return
                }
                0 !== o.length && e.push({event: t, listeners: o})
            }

            var Yr = /\r\n?/g, Gr = /\u0000|\uFFFD/g;

            function Jr(e) {
                return ("string" === typeof e ? e : "" + e).replace(Yr, "\n").replace(Gr, "")
            }

            function Zr(e, t, n) {
                if (t = Jr(t), Jr(e) !== t && n) throw Error(l(425))
            }

            function $r() {
            }

            var ea = null, ta = null;

            function na(e, t) {
                return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
            }

            var ra = "function" === typeof setTimeout ? setTimeout : void 0,
                aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
                la = "function" === typeof Promise ? Promise : void 0,
                oa = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof la ? function (e) {
                    return la.resolve(null).then(e).catch(ia)
                } : ra;

            function ia(e) {
                setTimeout((function () {
                    throw e
                }))
            }

            function sa(e, t) {
                var n = t, r = 0;
                do {
                    var a = n.nextSibling;
                    if (e.removeChild(n), a && 8 === a.nodeType) if ("/$" === (n = a.data)) {
                        if (0 === r) return e.removeChild(a), void Bt(t);
                        r--
                    } else "$" !== n && "$?" !== n && "$!" !== n || r++;
                    n = a
                } while (n);
                Bt(t)
            }

            function ua(e) {
                for (; null != e; e = e.nextSibling) {
                    var t = e.nodeType;
                    if (1 === t || 3 === t) break;
                    if (8 === t) {
                        if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
                        if ("/$" === t) return null
                    }
                }
                return e
            }

            function ca(e) {
                e = e.previousSibling;
                for (var t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("$" === n || "$!" === n || "$?" === n) {
                            if (0 === t) return e;
                            t--
                        } else "/$" === n && t++
                    }
                    e = e.previousSibling
                }
                return null
            }

            var da = Math.random().toString(36).slice(2), fa = "__reactFiber$" + da, pa = "__reactProps$" + da,
                ha = "__reactContainer$" + da, ma = "__reactEvents$" + da, va = "__reactListeners$" + da,
                ga = "__reactHandles$" + da;

            function ya(e) {
                var t = e[fa];
                if (t) return t;
                for (var n = e.parentNode; n;) {
                    if (t = n[ha] || n[fa]) {
                        if (n = t.alternate, null !== t.child || null !== n && null !== n.child) for (e = ca(e); null !== e;) {
                            if (n = e[fa]) return n;
                            e = ca(e)
                        }
                        return t
                    }
                    n = (e = n).parentNode
                }
                return null
            }

            function ba(e) {
                return !(e = e[fa] || e[ha]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
            }

            function wa(e) {
                if (5 === e.tag || 6 === e.tag) return e.stateNode;
                throw Error(l(33))
            }

            function xa(e) {
                return e[pa] || null
            }

            var ka = [], _a = -1;

            function Sa(e) {
                return {current: e}
            }

            function ja(e) {
                0 > _a || (e.current = ka[_a], ka[_a] = null, _a--)
            }

            function Na(e, t) {
                _a++, ka[_a] = e.current, e.current = t
            }

            var Ea = {}, Ca = Sa(Ea), Pa = Sa(!1), Ta = Ea;

            function La(e, t) {
                var n = e.type.contextTypes;
                if (!n) return Ea;
                var r = e.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                var a, l = {};
                for (a in n) l[a] = t[a];
                return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
            }

            function Oa(e) {
                return null !== (e = e.childContextTypes) && void 0 !== e
            }

            function Da() {
                ja(Pa), ja(Ca)
            }

            function Ra(e, t, n) {
                if (Ca.current !== Ea) throw Error(l(168));
                Na(Ca, t), Na(Pa, n)
            }

            function za(e, t, n) {
                var r = e.stateNode;
                if (t = t.childContextTypes, "function" !== typeof r.getChildContext) return n;
                for (var a in r = r.getChildContext()) if (!(a in t)) throw Error(l(108, H(e) || "Unknown", a));
                return M({}, n, r)
            }

            function Aa(e) {
                return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ea, Ta = Ca.current, Na(Ca, e), Na(Pa, Pa.current), !0
            }

            function Ma(e, t, n) {
                var r = e.stateNode;
                if (!r) throw Error(l(169));
                n ? (e = za(e, t, Ta), r.__reactInternalMemoizedMergedChildContext = e, ja(Pa), ja(Ca), Na(Ca, e)) : ja(Pa), Na(Pa, n)
            }

            var Fa = null, Ia = !1, Ua = !1;

            function Wa(e) {
                null === Fa ? Fa = [e] : Fa.push(e)
            }

            function Ba() {
                if (!Ua && null !== Fa) {
                    Ua = !0;
                    var e = 0, t = bt;
                    try {
                        var n = Fa;
                        for (bt = 1; e < n.length; e++) {
                            var r = n[e];
                            do {
                                r = r(!0)
                            } while (null !== r)
                        }
                        Fa = null, Ia = !1
                    } catch (a) {
                        throw null !== Fa && (Fa = Fa.slice(e + 1)), Ke($e, Ba), a
                    } finally {
                        bt = t, Ua = !1
                    }
                }
                return null
            }

            var Ha = [], qa = 0, Va = null, Qa = 0, Ka = [], Xa = 0, Ya = null, Ga = 1, Ja = "";

            function Za(e, t) {
                Ha[qa++] = Qa, Ha[qa++] = Va, Va = e, Qa = t
            }

            function $a(e, t, n) {
                Ka[Xa++] = Ga, Ka[Xa++] = Ja, Ka[Xa++] = Ya, Ya = e;
                var r = Ga;
                e = Ja;
                var a = 32 - ot(r) - 1;
                r &= ~(1 << a), n += 1;
                var l = 32 - ot(t) + a;
                if (30 < l) {
                    var o = a - a % 5;
                    l = (r & (1 << o) - 1).toString(32), r >>= o, a -= o, Ga = 1 << 32 - ot(t) + a | n << a | r, Ja = l + e
                } else Ga = 1 << l | n << a | r, Ja = e
            }

            function el(e) {
                null !== e.return && (Za(e, 1), $a(e, 1, 0))
            }

            function tl(e) {
                for (; e === Va;) Va = Ha[--qa], Ha[qa] = null, Qa = Ha[--qa], Ha[qa] = null;
                for (; e === Ya;) Ya = Ka[--Xa], Ka[Xa] = null, Ja = Ka[--Xa], Ka[Xa] = null, Ga = Ka[--Xa], Ka[Xa] = null
            }

            var nl = null, rl = null, al = !1, ll = null;

            function ol(e, t) {
                var n = Ou(5, null, null, 0);
                n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
            }

            function il(e, t) {
                switch (e.tag) {
                    case 5:
                        var n = e.type;
                        return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, nl = e, rl = ua(t.firstChild), !0);
                    case 6:
                        return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, nl = e, rl = null, !0);
                    case 13:
                        return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Ya ? {
                            id: Ga,
                            overflow: Ja
                        } : null, e.memoizedState = {
                            dehydrated: t,
                            treeContext: n,
                            retryLane: 1073741824
                        }, (n = Ou(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, nl = e, rl = null, !0);
                    default:
                        return !1
                }
            }

            function sl(e) {
                return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
            }

            function ul(e) {
                if (al) {
                    var t = rl;
                    if (t) {
                        var n = t;
                        if (!il(e, t)) {
                            if (sl(e)) throw Error(l(418));
                            t = ua(n.nextSibling);
                            var r = nl;
                            t && il(e, t) ? ol(r, n) : (e.flags = -4097 & e.flags | 2, al = !1, nl = e)
                        }
                    } else {
                        if (sl(e)) throw Error(l(418));
                        e.flags = -4097 & e.flags | 2, al = !1, nl = e
                    }
                }
            }

            function cl(e) {
                for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                nl = e
            }

            function dl(e) {
                if (e !== nl) return !1;
                if (!al) return cl(e), al = !0, !1;
                var t;
                if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !na(e.type, e.memoizedProps)), t && (t = rl)) {
                    if (sl(e)) throw fl(), Error(l(418));
                    for (; t;) ol(e, t), t = ua(t.nextSibling)
                }
                if (cl(e), 13 === e.tag) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(l(317));
                    e:{
                        for (e = e.nextSibling, t = 0; e;) {
                            if (8 === e.nodeType) {
                                var n = e.data;
                                if ("/$" === n) {
                                    if (0 === t) {
                                        rl = ua(e.nextSibling);
                                        break e
                                    }
                                    t--
                                } else "$" !== n && "$!" !== n && "$?" !== n || t++
                            }
                            e = e.nextSibling
                        }
                        rl = null
                    }
                } else rl = nl ? ua(e.stateNode.nextSibling) : null;
                return !0
            }

            function fl() {
                for (var e = rl; e;) e = ua(e.nextSibling)
            }

            function pl() {
                rl = nl = null, al = !1
            }

            function hl(e) {
                null === ll ? ll = [e] : ll.push(e)
            }

            var ml = w.ReactCurrentBatchConfig;

            function vl(e, t) {
                if (e && e.defaultProps) {
                    for (var n in t = M({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                    return t
                }
                return t
            }

            var gl = Sa(null), yl = null, bl = null, wl = null;

            function xl() {
                wl = bl = yl = null
            }

            function kl(e) {
                var t = gl.current;
                ja(gl), e._currentValue = t
            }

            function _l(e, t, n) {
                for (; null !== e;) {
                    var r = e.alternate;
                    if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                    e = e.return
                }
            }

            function Sl(e, t) {
                yl = e, wl = bl = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (wi = !0), e.firstContext = null)
            }

            function jl(e) {
                var t = e._currentValue;
                if (wl !== e) if (e = {context: e, memoizedValue: t, next: null}, null === bl) {
                    if (null === yl) throw Error(l(308));
                    bl = e, yl.dependencies = {lanes: 0, firstContext: e}
                } else bl = bl.next = e;
                return t
            }

            var Nl = null;

            function El(e) {
                null === Nl ? Nl = [e] : Nl.push(e)
            }

            function Cl(e, t, n, r) {
                var a = t.interleaved;
                return null === a ? (n.next = n, El(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Pl(e, r)
            }

            function Pl(e, t) {
                e.lanes |= t;
                var n = e.alternate;
                for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                return 3 === n.tag ? n.stateNode : null
            }

            var Tl = !1;

            function Ll(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {pending: null, interleaved: null, lanes: 0},
                    effects: null
                }
            }

            function Ol(e, t) {
                e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects
                })
            }

            function Dl(e, t) {
                return {eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null}
            }

            function Rl(e, t, n) {
                var r = e.updateQueue;
                if (null === r) return null;
                if (r = r.shared, 0 !== (2 & Ps)) {
                    var a = r.pending;
                    return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Pl(e, n)
                }
                return null === (a = r.interleaved) ? (t.next = t, El(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Pl(e, n)
            }

            function zl(e, t, n) {
                if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194240 & n))) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
                }
            }

            function Al(e, t) {
                var n = e.updateQueue, r = e.alternate;
                if (null !== r && n === (r = r.updateQueue)) {
                    var a = null, l = null;
                    if (null !== (n = n.firstBaseUpdate)) {
                        do {
                            var o = {
                                eventTime: n.eventTime,
                                lane: n.lane,
                                tag: n.tag,
                                payload: n.payload,
                                callback: n.callback,
                                next: null
                            };
                            null === l ? a = l = o : l = l.next = o, n = n.next
                        } while (null !== n);
                        null === l ? a = l = t : l = l.next = t
                    } else a = l = t;
                    return n = {
                        baseState: r.baseState,
                        firstBaseUpdate: a,
                        lastBaseUpdate: l,
                        shared: r.shared,
                        effects: r.effects
                    }, void (e.updateQueue = n)
                }
                null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
            }

            function Ml(e, t, n, r) {
                var a = e.updateQueue;
                Tl = !1;
                var l = a.firstBaseUpdate, o = a.lastBaseUpdate, i = a.shared.pending;
                if (null !== i) {
                    a.shared.pending = null;
                    var s = i, u = s.next;
                    s.next = null, null === o ? l = u : o.next = u, o = s;
                    var c = e.alternate;
                    null !== c && ((i = (c = c.updateQueue).lastBaseUpdate) !== o && (null === i ? c.firstBaseUpdate = u : i.next = u, c.lastBaseUpdate = s))
                }
                if (null !== l) {
                    var d = a.baseState;
                    for (o = 0, c = u = s = null, i = l; ;) {
                        var f = i.lane, p = i.eventTime;
                        if ((r & f) === f) {
                            null !== c && (c = c.next = {
                                eventTime: p,
                                lane: 0,
                                tag: i.tag,
                                payload: i.payload,
                                callback: i.callback,
                                next: null
                            });
                            e:{
                                var h = e, m = i;
                                switch (f = t, p = n, m.tag) {
                                    case 1:
                                        if ("function" === typeof (h = m.payload)) {
                                            d = h.call(p, d, f);
                                            break e
                                        }
                                        d = h;
                                        break e;
                                    case 3:
                                        h.flags = -65537 & h.flags | 128;
                                    case 0:
                                        if (null === (f = "function" === typeof (h = m.payload) ? h.call(p, d, f) : h) || void 0 === f) break e;
                                        d = M({}, d, f);
                                        break e;
                                    case 2:
                                        Tl = !0
                                }
                            }
                            null !== i.callback && 0 !== i.lane && (e.flags |= 64, null === (f = a.effects) ? a.effects = [i] : f.push(i))
                        } else p = {
                            eventTime: p,
                            lane: f,
                            tag: i.tag,
                            payload: i.payload,
                            callback: i.callback,
                            next: null
                        }, null === c ? (u = c = p, s = d) : c = c.next = p, o |= f;
                        if (null === (i = i.next)) {
                            if (null === (i = a.shared.pending)) break;
                            i = (f = i).next, f.next = null, a.lastBaseUpdate = f, a.shared.pending = null
                        }
                    }
                    if (null === c && (s = d), a.baseState = s, a.firstBaseUpdate = u, a.lastBaseUpdate = c, null !== (t = a.shared.interleaved)) {
                        a = t;
                        do {
                            o |= a.lane, a = a.next
                        } while (a !== t)
                    } else null === l && (a.shared.lanes = 0);
                    Ms |= o, e.lanes = o, e.memoizedState = d
                }
            }

            function Fl(e, t, n) {
                if (e = t.effects, t.effects = null, null !== e) for (t = 0; t < e.length; t++) {
                    var r = e[t], a = r.callback;
                    if (null !== a) {
                        if (r.callback = null, r = n, "function" !== typeof a) throw Error(l(191, a));
                        a.call(r)
                    }
                }
            }

            var Il = (new r.Component).refs;

            function Ul(e, t, n, r) {
                n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : M({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
            }

            var Wl = {
                isMounted: function (e) {
                    return !!(e = e._reactInternals) && Be(e) === e
                }, enqueueSetState: function (e, t, n) {
                    e = e._reactInternals;
                    var r = tu(), a = nu(e), l = Dl(r, a);
                    l.payload = t, void 0 !== n && null !== n && (l.callback = n), null !== (t = Rl(e, l, a)) && (ru(t, e, a, r), zl(t, e, a))
                }, enqueueReplaceState: function (e, t, n) {
                    e = e._reactInternals;
                    var r = tu(), a = nu(e), l = Dl(r, a);
                    l.tag = 1, l.payload = t, void 0 !== n && null !== n && (l.callback = n), null !== (t = Rl(e, l, a)) && (ru(t, e, a, r), zl(t, e, a))
                }, enqueueForceUpdate: function (e, t) {
                    e = e._reactInternals;
                    var n = tu(), r = nu(e), a = Dl(n, r);
                    a.tag = 2, void 0 !== t && null !== t && (a.callback = t), null !== (t = Rl(e, a, r)) && (ru(t, e, r, n), zl(t, e, r))
                }
            };

            function Bl(e, t, n, r, a, l, o) {
                return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, l, o) : !t.prototype || !t.prototype.isPureReactComponent || (!sr(n, r) || !sr(a, l))
            }

            function Hl(e, t, n) {
                var r = !1, a = Ea, l = t.contextType;
                return "object" === typeof l && null !== l ? l = jl(l) : (a = Oa(t) ? Ta : Ca.current, l = (r = null !== (r = t.contextTypes) && void 0 !== r) ? La(e, a) : Ea), t = new t(n, l), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Wl, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = l), t
            }

            function ql(e, t, n, r) {
                e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Wl.enqueueReplaceState(t, t.state, null)
            }

            function Vl(e, t, n, r) {
                var a = e.stateNode;
                a.props = n, a.state = e.memoizedState, a.refs = Il, Ll(e);
                var l = t.contextType;
                "object" === typeof l && null !== l ? a.context = jl(l) : (l = Oa(t) ? Ta : Ca.current, a.context = La(e, l)), a.state = e.memoizedState, "function" === typeof (l = t.getDerivedStateFromProps) && (Ul(e, t, l, n), a.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof a.getSnapshotBeforeUpdate || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || (t = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && Wl.enqueueReplaceState(a, a.state, null), Ml(e, n, a, r), a.state = e.memoizedState), "function" === typeof a.componentDidMount && (e.flags |= 4194308)
            }

            function Ql(e, t, n) {
                if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
                    if (n._owner) {
                        if (n = n._owner) {
                            if (1 !== n.tag) throw Error(l(309));
                            var r = n.stateNode
                        }
                        if (!r) throw Error(l(147, e));
                        var a = r, o = "" + e;
                        return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === o ? t.ref : (t = function (e) {
                            var t = a.refs;
                            t === Il && (t = a.refs = {}), null === e ? delete t[o] : t[o] = e
                        }, t._stringRef = o, t)
                    }
                    if ("string" !== typeof e) throw Error(l(284));
                    if (!n._owner) throw Error(l(290, e))
                }
                return e
            }

            function Kl(e, t) {
                throw e = Object.prototype.toString.call(t), Error(l(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
            }

            function Xl(e) {
                return (0, e._init)(e._payload)
            }

            function Yl(e) {
                function t(t, n) {
                    if (e) {
                        var r = t.deletions;
                        null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                    }
                }

                function n(n, r) {
                    if (!e) return null;
                    for (; null !== r;) t(n, r), r = r.sibling;
                    return null
                }

                function r(e, t) {
                    for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                    return e
                }

                function a(e, t) {
                    return (e = Ru(e, t)).index = 0, e.sibling = null, e
                }

                function o(t, n, r) {
                    return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
                }

                function i(t) {
                    return e && null === t.alternate && (t.flags |= 2), t
                }

                function s(e, t, n, r) {
                    return null === t || 6 !== t.tag ? ((t = Fu(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t)
                }

                function u(e, t, n, r) {
                    var l = n.type;
                    return l === _ ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === l || "object" === typeof l && null !== l && l.$$typeof === O && Xl(l) === t.type) ? ((r = a(t, n.props)).ref = Ql(e, t, n), r.return = e, r) : ((r = zu(n.type, n.key, n.props, null, e.mode, r)).ref = Ql(e, t, n), r.return = e, r)
                }

                function c(e, t, n, r) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Iu(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t)
                }

                function d(e, t, n, r, l) {
                    return null === t || 7 !== t.tag ? ((t = Au(n, e.mode, r, l)).return = e, t) : ((t = a(t, n)).return = e, t)
                }

                function f(e, t, n) {
                    if ("string" === typeof t && "" !== t || "number" === typeof t) return (t = Fu("" + t, e.mode, n)).return = e, t;
                    if ("object" === typeof t && null !== t) {
                        switch (t.$$typeof) {
                            case x:
                                return (n = zu(t.type, t.key, t.props, null, e.mode, n)).ref = Ql(e, null, t), n.return = e, n;
                            case k:
                                return (t = Iu(t, e.mode, n)).return = e, t;
                            case O:
                                return f(e, (0, t._init)(t._payload), n)
                        }
                        if (te(t) || z(t)) return (t = Au(t, e.mode, n, null)).return = e, t;
                        Kl(e, t)
                    }
                    return null
                }

                function p(e, t, n, r) {
                    var a = null !== t ? t.key : null;
                    if ("string" === typeof n && "" !== n || "number" === typeof n) return null !== a ? null : s(e, t, "" + n, r);
                    if ("object" === typeof n && null !== n) {
                        switch (n.$$typeof) {
                            case x:
                                return n.key === a ? u(e, t, n, r) : null;
                            case k:
                                return n.key === a ? c(e, t, n, r) : null;
                            case O:
                                return p(e, t, (a = n._init)(n._payload), r)
                        }
                        if (te(n) || z(n)) return null !== a ? null : d(e, t, n, r, null);
                        Kl(e, n)
                    }
                    return null
                }

                function h(e, t, n, r, a) {
                    if ("string" === typeof r && "" !== r || "number" === typeof r) return s(t, e = e.get(n) || null, "" + r, a);
                    if ("object" === typeof r && null !== r) {
                        switch (r.$$typeof) {
                            case x:
                                return u(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                            case k:
                                return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                            case O:
                                return h(e, t, n, (0, r._init)(r._payload), a)
                        }
                        if (te(r) || z(r)) return d(t, e = e.get(n) || null, r, a, null);
                        Kl(t, r)
                    }
                    return null
                }

                function m(a, l, i, s) {
                    for (var u = null, c = null, d = l, m = l = 0, v = null; null !== d && m < i.length; m++) {
                        d.index > m ? (v = d, d = null) : v = d.sibling;
                        var g = p(a, d, i[m], s);
                        if (null === g) {
                            null === d && (d = v);
                            break
                        }
                        e && d && null === g.alternate && t(a, d), l = o(g, l, m), null === c ? u = g : c.sibling = g, c = g, d = v
                    }
                    if (m === i.length) return n(a, d), al && Za(a, m), u;
                    if (null === d) {
                        for (; m < i.length; m++) null !== (d = f(a, i[m], s)) && (l = o(d, l, m), null === c ? u = d : c.sibling = d, c = d);
                        return al && Za(a, m), u
                    }
                    for (d = r(a, d); m < i.length; m++) null !== (v = h(d, a, m, i[m], s)) && (e && null !== v.alternate && d.delete(null === v.key ? m : v.key), l = o(v, l, m), null === c ? u = v : c.sibling = v, c = v);
                    return e && d.forEach((function (e) {
                        return t(a, e)
                    })), al && Za(a, m), u
                }

                function v(a, i, s, u) {
                    var c = z(s);
                    if ("function" !== typeof c) throw Error(l(150));
                    if (null == (s = c.call(s))) throw Error(l(151));
                    for (var d = c = null, m = i, v = i = 0, g = null, y = s.next(); null !== m && !y.done; v++, y = s.next()) {
                        m.index > v ? (g = m, m = null) : g = m.sibling;
                        var b = p(a, m, y.value, u);
                        if (null === b) {
                            null === m && (m = g);
                            break
                        }
                        e && m && null === b.alternate && t(a, m), i = o(b, i, v), null === d ? c = b : d.sibling = b, d = b, m = g
                    }
                    if (y.done) return n(a, m), al && Za(a, v), c;
                    if (null === m) {
                        for (; !y.done; v++, y = s.next()) null !== (y = f(a, y.value, u)) && (i = o(y, i, v), null === d ? c = y : d.sibling = y, d = y);
                        return al && Za(a, v), c
                    }
                    for (m = r(a, m); !y.done; v++, y = s.next()) null !== (y = h(m, a, v, y.value, u)) && (e && null !== y.alternate && m.delete(null === y.key ? v : y.key), i = o(y, i, v), null === d ? c = y : d.sibling = y, d = y);
                    return e && m.forEach((function (e) {
                        return t(a, e)
                    })), al && Za(a, v), c
                }

                return function e(r, l, o, s) {
                    if ("object" === typeof o && null !== o && o.type === _ && null === o.key && (o = o.props.children), "object" === typeof o && null !== o) {
                        switch (o.$$typeof) {
                            case x:
                                e:{
                                    for (var u = o.key, c = l; null !== c;) {
                                        if (c.key === u) {
                                            if ((u = o.type) === _) {
                                                if (7 === c.tag) {
                                                    n(r, c.sibling), (l = a(c, o.props.children)).return = r, r = l;
                                                    break e
                                                }
                                            } else if (c.elementType === u || "object" === typeof u && null !== u && u.$$typeof === O && Xl(u) === c.type) {
                                                n(r, c.sibling), (l = a(c, o.props)).ref = Ql(r, c, o), l.return = r, r = l;
                                                break e
                                            }
                                            n(r, c);
                                            break
                                        }
                                        t(r, c), c = c.sibling
                                    }
                                    o.type === _ ? ((l = Au(o.props.children, r.mode, s, o.key)).return = r, r = l) : ((s = zu(o.type, o.key, o.props, null, r.mode, s)).ref = Ql(r, l, o), s.return = r, r = s)
                                }
                                return i(r);
                            case k:
                                e:{
                                    for (c = o.key; null !== l;) {
                                        if (l.key === c) {
                                            if (4 === l.tag && l.stateNode.containerInfo === o.containerInfo && l.stateNode.implementation === o.implementation) {
                                                n(r, l.sibling), (l = a(l, o.children || [])).return = r, r = l;
                                                break e
                                            }
                                            n(r, l);
                                            break
                                        }
                                        t(r, l), l = l.sibling
                                    }
                                    (l = Iu(o, r.mode, s)).return = r, r = l
                                }
                                return i(r);
                            case O:
                                return e(r, l, (c = o._init)(o._payload), s)
                        }
                        if (te(o)) return m(r, l, o, s);
                        if (z(o)) return v(r, l, o, s);
                        Kl(r, o)
                    }
                    return "string" === typeof o && "" !== o || "number" === typeof o ? (o = "" + o, null !== l && 6 === l.tag ? (n(r, l.sibling), (l = a(l, o)).return = r, r = l) : (n(r, l), (l = Fu(o, r.mode, s)).return = r, r = l), i(r)) : n(r, l)
                }
            }

            var Gl = Yl(!0), Jl = Yl(!1), Zl = {}, $l = Sa(Zl), eo = Sa(Zl), to = Sa(Zl);

            function no(e) {
                if (e === Zl) throw Error(l(174));
                return e
            }

            function ro(e, t) {
                switch (Na(to, t), Na(eo, e), Na($l, Zl), e = t.nodeType) {
                    case 9:
                    case 11:
                        t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
                        break;
                    default:
                        t = se(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                }
                ja($l), Na($l, t)
            }

            function ao() {
                ja($l), ja(eo), ja(to)
            }

            function lo(e) {
                no(to.current);
                var t = no($l.current), n = se(t, e.type);
                t !== n && (Na(eo, e), Na($l, n))
            }

            function oo(e) {
                eo.current === e && (ja($l), ja(eo))
            }

            var io = Sa(0);

            function so(e) {
                for (var t = e; null !== t;) {
                    if (13 === t.tag) {
                        var n = t.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if (0 !== (128 & t.flags)) return t
                    } else if (null !== t.child) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === e) break;
                    for (; null === t.sibling;) {
                        if (null === t.return || t.return === e) return null;
                        t = t.return
                    }
                    t.sibling.return = t.return, t = t.sibling
                }
                return null
            }

            var uo = [];

            function co() {
                for (var e = 0; e < uo.length; e++) uo[e]._workInProgressVersionPrimary = null;
                uo.length = 0
            }

            var fo = w.ReactCurrentDispatcher, po = w.ReactCurrentBatchConfig, ho = 0, mo = null, vo = null, go = null,
                yo = !1, bo = !1, wo = 0, xo = 0;

            function ko() {
                throw Error(l(321))
            }

            function _o(e, t) {
                if (null === t) return !1;
                for (var n = 0; n < t.length && n < e.length; n++) if (!ir(e[n], t[n])) return !1;
                return !0
            }

            function So(e, t, n, r, a, o) {
                if (ho = o, mo = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, fo.current = null === e || null === e.memoizedState ? ii : si, e = n(r, a), bo) {
                    o = 0;
                    do {
                        if (bo = !1, wo = 0, 25 <= o) throw Error(l(301));
                        o += 1, go = vo = null, t.updateQueue = null, fo.current = ui, e = n(r, a)
                    } while (bo)
                }
                if (fo.current = oi, t = null !== vo && null !== vo.next, ho = 0, go = vo = mo = null, yo = !1, t) throw Error(l(300));
                return e
            }

            function jo() {
                var e = 0 !== wo;
                return wo = 0, e
            }

            function No() {
                var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
                return null === go ? mo.memoizedState = go = e : go = go.next = e, go
            }

            function Eo() {
                if (null === vo) {
                    var e = mo.alternate;
                    e = null !== e ? e.memoizedState : null
                } else e = vo.next;
                var t = null === go ? mo.memoizedState : go.next;
                if (null !== t) go = t, vo = e; else {
                    if (null === e) throw Error(l(310));
                    e = {
                        memoizedState: (vo = e).memoizedState,
                        baseState: vo.baseState,
                        baseQueue: vo.baseQueue,
                        queue: vo.queue,
                        next: null
                    }, null === go ? mo.memoizedState = go = e : go = go.next = e
                }
                return go
            }

            function Co(e, t) {
                return "function" === typeof t ? t(e) : t
            }

            function Po(e) {
                var t = Eo(), n = t.queue;
                if (null === n) throw Error(l(311));
                n.lastRenderedReducer = e;
                var r = vo, a = r.baseQueue, o = n.pending;
                if (null !== o) {
                    if (null !== a) {
                        var i = a.next;
                        a.next = o.next, o.next = i
                    }
                    r.baseQueue = a = o, n.pending = null
                }
                if (null !== a) {
                    o = a.next, r = r.baseState;
                    var s = i = null, u = null, c = o;
                    do {
                        var d = c.lane;
                        if ((ho & d) === d) null !== u && (u = u.next = {
                            lane: 0,
                            action: c.action,
                            hasEagerState: c.hasEagerState,
                            eagerState: c.eagerState,
                            next: null
                        }), r = c.hasEagerState ? c.eagerState : e(r, c.action); else {
                            var f = {
                                lane: d,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            };
                            null === u ? (s = u = f, i = r) : u = u.next = f, mo.lanes |= d, Ms |= d
                        }
                        c = c.next
                    } while (null !== c && c !== o);
                    null === u ? i = r : u.next = s, ir(r, t.memoizedState) || (wi = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r
                }
                if (null !== (e = n.interleaved)) {
                    a = e;
                    do {
                        o = a.lane, mo.lanes |= o, Ms |= o, a = a.next
                    } while (a !== e)
                } else null === a && (n.lanes = 0);
                return [t.memoizedState, n.dispatch]
            }

            function To(e) {
                var t = Eo(), n = t.queue;
                if (null === n) throw Error(l(311));
                n.lastRenderedReducer = e;
                var r = n.dispatch, a = n.pending, o = t.memoizedState;
                if (null !== a) {
                    n.pending = null;
                    var i = a = a.next;
                    do {
                        o = e(o, i.action), i = i.next
                    } while (i !== a);
                    ir(o, t.memoizedState) || (wi = !0), t.memoizedState = o, null === t.baseQueue && (t.baseState = o), n.lastRenderedState = o
                }
                return [o, r]
            }

            function Lo() {
            }

            function Oo(e, t) {
                var n = mo, r = Eo(), a = t(), o = !ir(r.memoizedState, a);
                if (o && (r.memoizedState = a, wi = !0), r = r.queue, qo(zo.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || null !== go && 1 & go.memoizedState.tag) {
                    if (n.flags |= 2048, Io(9, Ro.bind(null, n, r, a, t), void 0, null), null === Ts) throw Error(l(349));
                    0 !== (30 & ho) || Do(n, t, a)
                }
                return a
            }

            function Do(e, t, n) {
                e.flags |= 16384, e = {
                    getSnapshot: t,
                    value: n
                }, null === (t = mo.updateQueue) ? (t = {
                    lastEffect: null,
                    stores: null
                }, mo.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
            }

            function Ro(e, t, n, r) {
                t.value = n, t.getSnapshot = r, Ao(t) && Mo(e)
            }

            function zo(e, t, n) {
                return n((function () {
                    Ao(t) && Mo(e)
                }))
            }

            function Ao(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !ir(e, n)
                } catch (r) {
                    return !0
                }
            }

            function Mo(e) {
                var t = Pl(e, 1);
                null !== t && ru(t, e, 1, -1)
            }

            function Fo(e) {
                var t = No();
                return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Co,
                    lastRenderedState: e
                }, t.queue = e, e = e.dispatch = ni.bind(null, mo, e), [t.memoizedState, e]
            }

            function Io(e, t, n, r) {
                return e = {
                    tag: e,
                    create: t,
                    destroy: n,
                    deps: r,
                    next: null
                }, null === (t = mo.updateQueue) ? (t = {
                    lastEffect: null,
                    stores: null
                }, mo.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
            }

            function Uo() {
                return Eo().memoizedState
            }

            function Wo(e, t, n, r) {
                var a = No();
                mo.flags |= e, a.memoizedState = Io(1 | t, n, void 0, void 0 === r ? null : r)
            }

            function Bo(e, t, n, r) {
                var a = Eo();
                r = void 0 === r ? null : r;
                var l = void 0;
                if (null !== vo) {
                    var o = vo.memoizedState;
                    if (l = o.destroy, null !== r && _o(r, o.deps)) return void (a.memoizedState = Io(t, n, l, r))
                }
                mo.flags |= e, a.memoizedState = Io(1 | t, n, l, r)
            }

            function Ho(e, t) {
                return Wo(8390656, 8, e, t)
            }

            function qo(e, t) {
                return Bo(2048, 8, e, t)
            }

            function Vo(e, t) {
                return Bo(4, 2, e, t)
            }

            function Qo(e, t) {
                return Bo(4, 4, e, t)
            }

            function Ko(e, t) {
                return "function" === typeof t ? (e = e(), t(e), function () {
                    t(null)
                }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function () {
                    t.current = null
                }) : void 0
            }

            function Xo(e, t, n) {
                return n = null !== n && void 0 !== n ? n.concat([e]) : null, Bo(4, 4, Ko.bind(null, t, e), n)
            }

            function Yo() {
            }

            function Go(e, t) {
                var n = Eo();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && _o(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
            }

            function Jo(e, t) {
                var n = Eo();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && _o(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
            }

            function Zo(e, t, n) {
                return 0 === (21 & ho) ? (e.baseState && (e.baseState = !1, wi = !0), e.memoizedState = n) : (ir(n, t) || (n = mt(), mo.lanes |= n, Ms |= n, e.baseState = !0), t)
            }

            function $o(e, t) {
                var n = bt;
                bt = 0 !== n && 4 > n ? n : 4, e(!0);
                var r = po.transition;
                po.transition = {};
                try {
                    e(!1), t()
                } finally {
                    bt = n, po.transition = r
                }
            }

            function ei() {
                return Eo().memoizedState
            }

            function ti(e, t, n) {
                var r = nu(e);
                if (n = {
                    lane: r,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                }, ri(e)) ai(t, n); else if (null !== (n = Cl(e, t, n, r))) {
                    ru(n, e, r, tu()), li(n, t, r)
                }
            }

            function ni(e, t, n) {
                var r = nu(e), a = {lane: r, action: n, hasEagerState: !1, eagerState: null, next: null};
                if (ri(e)) ai(t, a); else {
                    var l = e.alternate;
                    if (0 === e.lanes && (null === l || 0 === l.lanes) && null !== (l = t.lastRenderedReducer)) try {
                        var o = t.lastRenderedState, i = l(o, n);
                        if (a.hasEagerState = !0, a.eagerState = i, ir(i, o)) {
                            var s = t.interleaved;
                            return null === s ? (a.next = a, El(t)) : (a.next = s.next, s.next = a), void (t.interleaved = a)
                        }
                    } catch (u) {
                    }
                    null !== (n = Cl(e, t, a, r)) && (ru(n, e, r, a = tu()), li(n, t, r))
                }
            }

            function ri(e) {
                var t = e.alternate;
                return e === mo || null !== t && t === mo
            }

            function ai(e, t) {
                bo = yo = !0;
                var n = e.pending;
                null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
            }

            function li(e, t, n) {
                if (0 !== (4194240 & n)) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
                }
            }

            var oi = {
                readContext: jl,
                useCallback: ko,
                useContext: ko,
                useEffect: ko,
                useImperativeHandle: ko,
                useInsertionEffect: ko,
                useLayoutEffect: ko,
                useMemo: ko,
                useReducer: ko,
                useRef: ko,
                useState: ko,
                useDebugValue: ko,
                useDeferredValue: ko,
                useTransition: ko,
                useMutableSource: ko,
                useSyncExternalStore: ko,
                useId: ko,
                unstable_isNewReconciler: !1
            }, ii = {
                readContext: jl, useCallback: function (e, t) {
                    return No().memoizedState = [e, void 0 === t ? null : t], e
                }, useContext: jl, useEffect: Ho, useImperativeHandle: function (e, t, n) {
                    return n = null !== n && void 0 !== n ? n.concat([e]) : null, Wo(4194308, 4, Ko.bind(null, t, e), n)
                }, useLayoutEffect: function (e, t) {
                    return Wo(4194308, 4, e, t)
                }, useInsertionEffect: function (e, t) {
                    return Wo(4, 2, e, t)
                }, useMemo: function (e, t) {
                    var n = No();
                    return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                }, useReducer: function (e, t, n) {
                    var r = No();
                    return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t
                    }, r.queue = e, e = e.dispatch = ti.bind(null, mo, e), [r.memoizedState, e]
                }, useRef: function (e) {
                    return e = {current: e}, No().memoizedState = e
                }, useState: Fo, useDebugValue: Yo, useDeferredValue: function (e) {
                    return No().memoizedState = e
                }, useTransition: function () {
                    var e = Fo(!1), t = e[0];
                    return e = $o.bind(null, e[1]), No().memoizedState = e, [t, e]
                }, useMutableSource: function () {
                }, useSyncExternalStore: function (e, t, n) {
                    var r = mo, a = No();
                    if (al) {
                        if (void 0 === n) throw Error(l(407));
                        n = n()
                    } else {
                        if (n = t(), null === Ts) throw Error(l(349));
                        0 !== (30 & ho) || Do(r, t, n)
                    }
                    a.memoizedState = n;
                    var o = {value: n, getSnapshot: t};
                    return a.queue = o, Ho(zo.bind(null, r, o, e), [e]), r.flags |= 2048, Io(9, Ro.bind(null, r, o, n, t), void 0, null), n
                }, useId: function () {
                    var e = No(), t = Ts.identifierPrefix;
                    if (al) {
                        var n = Ja;
                        t = ":" + t + "R" + (n = (Ga & ~(1 << 32 - ot(Ga) - 1)).toString(32) + n), 0 < (n = wo++) && (t += "H" + n.toString(32)), t += ":"
                    } else t = ":" + t + "r" + (n = xo++).toString(32) + ":";
                    return e.memoizedState = t
                }, unstable_isNewReconciler: !1
            }, si = {
                readContext: jl,
                useCallback: Go,
                useContext: jl,
                useEffect: qo,
                useImperativeHandle: Xo,
                useInsertionEffect: Vo,
                useLayoutEffect: Qo,
                useMemo: Jo,
                useReducer: Po,
                useRef: Uo,
                useState: function () {
                    return Po(Co)
                },
                useDebugValue: Yo,
                useDeferredValue: function (e) {
                    return Zo(Eo(), vo.memoizedState, e)
                },
                useTransition: function () {
                    return [Po(Co)[0], Eo().memoizedState]
                },
                useMutableSource: Lo,
                useSyncExternalStore: Oo,
                useId: ei,
                unstable_isNewReconciler: !1
            }, ui = {
                readContext: jl,
                useCallback: Go,
                useContext: jl,
                useEffect: qo,
                useImperativeHandle: Xo,
                useInsertionEffect: Vo,
                useLayoutEffect: Qo,
                useMemo: Jo,
                useReducer: To,
                useRef: Uo,
                useState: function () {
                    return To(Co)
                },
                useDebugValue: Yo,
                useDeferredValue: function (e) {
                    var t = Eo();
                    return null === vo ? t.memoizedState = e : Zo(t, vo.memoizedState, e)
                },
                useTransition: function () {
                    return [To(Co)[0], Eo().memoizedState]
                },
                useMutableSource: Lo,
                useSyncExternalStore: Oo,
                useId: ei,
                unstable_isNewReconciler: !1
            };

            function ci(e, t) {
                try {
                    var n = "", r = t;
                    do {
                        n += W(r), r = r.return
                    } while (r);
                    var a = n
                } catch (l) {
                    a = "\nError generating stack: " + l.message + "\n" + l.stack
                }
                return {value: e, source: t, stack: a, digest: null}
            }

            function di(e, t, n) {
                return {value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null}
            }

            function fi(e, t) {
                try {
                    console.error(t.value)
                } catch (n) {
                    setTimeout((function () {
                        throw n
                    }))
                }
            }

            var pi = "function" === typeof WeakMap ? WeakMap : Map;

            function hi(e, t, n) {
                (n = Dl(-1, n)).tag = 3, n.payload = {element: null};
                var r = t.value;
                return n.callback = function () {
                    Vs || (Vs = !0, Qs = r), fi(0, t)
                }, n
            }

            function mi(e, t, n) {
                (n = Dl(-1, n)).tag = 3;
                var r = e.type.getDerivedStateFromError;
                if ("function" === typeof r) {
                    var a = t.value;
                    n.payload = function () {
                        return r(a)
                    }, n.callback = function () {
                        fi(0, t)
                    }
                }
                var l = e.stateNode;
                return null !== l && "function" === typeof l.componentDidCatch && (n.callback = function () {
                    fi(0, t), "function" !== typeof r && (null === Ks ? Ks = new Set([this]) : Ks.add(this));
                    var e = t.stack;
                    this.componentDidCatch(t.value, {componentStack: null !== e ? e : ""})
                }), n
            }

            function vi(e, t, n) {
                var r = e.pingCache;
                if (null === r) {
                    r = e.pingCache = new pi;
                    var a = new Set;
                    r.set(t, a)
                } else void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a));
                a.has(n) || (a.add(n), e = Nu.bind(null, e, t, n), t.then(e, e))
            }

            function gi(e) {
                do {
                    var t;
                    if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
                    e = e.return
                } while (null !== e);
                return null
            }

            function yi(e, t, n, r, a) {
                return 0 === (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Dl(-1, 1)).tag = 2, Rl(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e)
            }

            var bi = w.ReactCurrentOwner, wi = !1;

            function xi(e, t, n, r) {
                t.child = null === e ? Jl(t, null, n, r) : Gl(t, e.child, n, r)
            }

            function ki(e, t, n, r, a) {
                n = n.render;
                var l = t.ref;
                return Sl(t, a), r = So(e, t, n, r, l, a), n = jo(), null === e || wi ? (al && n && el(t), t.flags |= 1, xi(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Vi(e, t, a))
            }

            function _i(e, t, n, r, a) {
                if (null === e) {
                    var l = n.type;
                    return "function" !== typeof l || Du(l) || void 0 !== l.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = zu(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = l, Si(e, t, l, r, a))
                }
                if (l = e.child, 0 === (e.lanes & a)) {
                    var o = l.memoizedProps;
                    if ((n = null !== (n = n.compare) ? n : sr)(o, r) && e.ref === t.ref) return Vi(e, t, a)
                }
                return t.flags |= 1, (e = Ru(l, r)).ref = t.ref, e.return = t, t.child = e
            }

            function Si(e, t, n, r, a) {
                if (null !== e) {
                    var l = e.memoizedProps;
                    if (sr(l, r) && e.ref === t.ref) {
                        if (wi = !1, t.pendingProps = r = l, 0 === (e.lanes & a)) return t.lanes = e.lanes, Vi(e, t, a);
                        0 !== (131072 & e.flags) && (wi = !0)
                    }
                }
                return Ei(e, t, n, r, a)
            }

            function ji(e, t, n) {
                var r = t.pendingProps, a = r.children, l = null !== e ? e.memoizedState : null;
                if ("hidden" === r.mode) if (0 === (1 & t.mode)) t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, Na(Rs, Ds), Ds |= n; else {
                    if (0 === (1073741824 & n)) return e = null !== l ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    }, t.updateQueue = null, Na(Rs, Ds), Ds |= e, null;
                    t.memoizedState = {
                        baseLanes: 0,
                        cachePool: null,
                        transitions: null
                    }, r = null !== l ? l.baseLanes : n, Na(Rs, Ds), Ds |= r
                } else null !== l ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, Na(Rs, Ds), Ds |= r;
                return xi(e, t, a, n), t.child
            }

            function Ni(e, t) {
                var n = t.ref;
                (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
            }

            function Ei(e, t, n, r, a) {
                var l = Oa(n) ? Ta : Ca.current;
                return l = La(t, l), Sl(t, a), n = So(e, t, n, r, l, a), r = jo(), null === e || wi ? (al && r && el(t), t.flags |= 1, xi(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Vi(e, t, a))
            }

            function Ci(e, t, n, r, a) {
                if (Oa(n)) {
                    var l = !0;
                    Aa(t)
                } else l = !1;
                if (Sl(t, a), null === t.stateNode) qi(e, t), Hl(t, n, r), Vl(t, n, r, a), r = !0; else if (null === e) {
                    var o = t.stateNode, i = t.memoizedProps;
                    o.props = i;
                    var s = o.context, u = n.contextType;
                    "object" === typeof u && null !== u ? u = jl(u) : u = La(t, u = Oa(n) ? Ta : Ca.current);
                    var c = n.getDerivedStateFromProps,
                        d = "function" === typeof c || "function" === typeof o.getSnapshotBeforeUpdate;
                    d || "function" !== typeof o.UNSAFE_componentWillReceiveProps && "function" !== typeof o.componentWillReceiveProps || (i !== r || s !== u) && ql(t, o, r, u), Tl = !1;
                    var f = t.memoizedState;
                    o.state = f, Ml(t, r, o, a), s = t.memoizedState, i !== r || f !== s || Pa.current || Tl ? ("function" === typeof c && (Ul(t, n, c, r), s = t.memoizedState), (i = Tl || Bl(t, n, i, r, f, s, u)) ? (d || "function" !== typeof o.UNSAFE_componentWillMount && "function" !== typeof o.componentWillMount || ("function" === typeof o.componentWillMount && o.componentWillMount(), "function" === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()), "function" === typeof o.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof o.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = u, r = i) : ("function" === typeof o.componentDidMount && (t.flags |= 4194308), r = !1)
                } else {
                    o = t.stateNode, Ol(e, t), i = t.memoizedProps, u = t.type === t.elementType ? i : vl(t.type, i), o.props = u, d = t.pendingProps, f = o.context, "object" === typeof (s = n.contextType) && null !== s ? s = jl(s) : s = La(t, s = Oa(n) ? Ta : Ca.current);
                    var p = n.getDerivedStateFromProps;
                    (c = "function" === typeof p || "function" === typeof o.getSnapshotBeforeUpdate) || "function" !== typeof o.UNSAFE_componentWillReceiveProps && "function" !== typeof o.componentWillReceiveProps || (i !== d || f !== s) && ql(t, o, r, s), Tl = !1, f = t.memoizedState, o.state = f, Ml(t, r, o, a);
                    var h = t.memoizedState;
                    i !== d || f !== h || Pa.current || Tl ? ("function" === typeof p && (Ul(t, n, p, r), h = t.memoizedState), (u = Tl || Bl(t, n, u, r, f, h, s) || !1) ? (c || "function" !== typeof o.UNSAFE_componentWillUpdate && "function" !== typeof o.componentWillUpdate || ("function" === typeof o.componentWillUpdate && o.componentWillUpdate(r, h, s), "function" === typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, h, s)), "function" === typeof o.componentDidUpdate && (t.flags |= 4), "function" === typeof o.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof o.componentDidUpdate || i === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof o.getSnapshotBeforeUpdate || i === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), o.props = r, o.state = h, o.context = s, r = u) : ("function" !== typeof o.componentDidUpdate || i === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof o.getSnapshotBeforeUpdate || i === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
                }
                return Pi(e, t, n, r, l, a)
            }

            function Pi(e, t, n, r, a, l) {
                Ni(e, t);
                var o = 0 !== (128 & t.flags);
                if (!r && !o) return a && Ma(t, n, !1), Vi(e, t, l);
                r = t.stateNode, bi.current = t;
                var i = o && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
                return t.flags |= 1, null !== e && o ? (t.child = Gl(t, e.child, null, l), t.child = Gl(t, null, i, l)) : xi(e, t, i, l), t.memoizedState = r.state, a && Ma(t, n, !0), t.child
            }

            function Ti(e) {
                var t = e.stateNode;
                t.pendingContext ? Ra(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Ra(0, t.context, !1), ro(e, t.containerInfo)
            }

            function Li(e, t, n, r, a) {
                return pl(), hl(a), t.flags |= 256, xi(e, t, n, r), t.child
            }

            var Oi, Di, Ri, zi, Ai = {dehydrated: null, treeContext: null, retryLane: 0};

            function Mi(e) {
                return {baseLanes: e, cachePool: null, transitions: null}
            }

            function Fi(e, t, n) {
                var r, a = t.pendingProps, o = io.current, i = !1, s = 0 !== (128 & t.flags);
                if ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)), r ? (i = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (o |= 1), Na(io, 1 & o), null === e) return ul(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (s = a.children, e = a.fallback, i ? (a = t.mode, i = t.child, s = {
                    mode: "hidden",
                    children: s
                }, 0 === (1 & a) && null !== i ? (i.childLanes = 0, i.pendingProps = s) : i = Mu(s, a, 0, null), e = Au(e, a, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Mi(n), t.memoizedState = Ai, e) : Ii(t, s));
                if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated)) return function (e, t, n, r, a, o, i) {
                    if (n) return 256 & t.flags ? (t.flags &= -257, Ui(e, t, i, r = di(Error(l(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = Mu({
                        mode: "visible",
                        children: r.children
                    }, a, 0, null), (o = Au(o, a, i, null)).flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, 0 !== (1 & t.mode) && Gl(t, e.child, null, i), t.child.memoizedState = Mi(i), t.memoizedState = Ai, o);
                    if (0 === (1 & t.mode)) return Ui(e, t, i, null);
                    if ("$!" === a.data) {
                        if (r = a.nextSibling && a.nextSibling.dataset) var s = r.dgst;
                        return r = s, Ui(e, t, i, r = di(o = Error(l(419)), r, void 0))
                    }
                    if (s = 0 !== (i & e.childLanes), wi || s) {
                        if (null !== (r = Ts)) {
                            switch (i & -i) {
                                case 4:
                                    a = 2;
                                    break;
                                case 16:
                                    a = 8;
                                    break;
                                case 64:
                                case 128:
                                case 256:
                                case 512:
                                case 1024:
                                case 2048:
                                case 4096:
                                case 8192:
                                case 16384:
                                case 32768:
                                case 65536:
                                case 131072:
                                case 262144:
                                case 524288:
                                case 1048576:
                                case 2097152:
                                case 4194304:
                                case 8388608:
                                case 16777216:
                                case 33554432:
                                case 67108864:
                                    a = 32;
                                    break;
                                case 536870912:
                                    a = 268435456;
                                    break;
                                default:
                                    a = 0
                            }
                            0 !== (a = 0 !== (a & (r.suspendedLanes | i)) ? 0 : a) && a !== o.retryLane && (o.retryLane = a, Pl(e, a), ru(r, e, a, -1))
                        }
                        return vu(), Ui(e, t, i, r = di(Error(l(421))))
                    }
                    return "$?" === a.data ? (t.flags |= 128, t.child = e.child, t = Cu.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, rl = ua(a.nextSibling), nl = t, al = !0, ll = null, null !== e && (Ka[Xa++] = Ga, Ka[Xa++] = Ja, Ka[Xa++] = Ya, Ga = e.id, Ja = e.overflow, Ya = t), t = Ii(t, r.children), t.flags |= 4096, t)
                }(e, t, s, a, r, o, n);
                if (i) {
                    i = a.fallback, s = t.mode, r = (o = e.child).sibling;
                    var u = {mode: "hidden", children: a.children};
                    return 0 === (1 & s) && t.child !== o ? ((a = t.child).childLanes = 0, a.pendingProps = u, t.deletions = null) : (a = Ru(o, u)).subtreeFlags = 14680064 & o.subtreeFlags, null !== r ? i = Ru(r, i) : (i = Au(i, s, n, null)).flags |= 2, i.return = t, a.return = t, a.sibling = i, t.child = a, a = i, i = t.child, s = null === (s = e.child.memoizedState) ? Mi(n) : {
                        baseLanes: s.baseLanes | n,
                        cachePool: null,
                        transitions: s.transitions
                    }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Ai, a
                }
                return e = (i = e.child).sibling, a = Ru(i, {
                    mode: "visible",
                    children: a.children
                }), 0 === (1 & t.mode) && (a.lanes = n), a.return = t, a.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = a, t.memoizedState = null, a
            }

            function Ii(e, t) {
                return (t = Mu({mode: "visible", children: t}, e.mode, 0, null)).return = e, e.child = t
            }

            function Ui(e, t, n, r) {
                return null !== r && hl(r), Gl(t, e.child, null, n), (e = Ii(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
            }

            function Wi(e, t, n) {
                e.lanes |= t;
                var r = e.alternate;
                null !== r && (r.lanes |= t), _l(e.return, t, n)
            }

            function Bi(e, t, n, r, a) {
                var l = e.memoizedState;
                null === l ? e.memoizedState = {
                    isBackwards: t,
                    rendering: null,
                    renderingStartTime: 0,
                    last: r,
                    tail: n,
                    tailMode: a
                } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = a)
            }

            function Hi(e, t, n) {
                var r = t.pendingProps, a = r.revealOrder, l = r.tail;
                if (xi(e, t, r.children, n), 0 !== (2 & (r = io.current))) r = 1 & r | 2, t.flags |= 128; else {
                    if (null !== e && 0 !== (128 & e.flags)) e:for (e = t.child; null !== e;) {
                        if (13 === e.tag) null !== e.memoizedState && Wi(e, n, t); else if (19 === e.tag) Wi(e, n, t); else if (null !== e.child) {
                            e.child.return = e, e = e.child;
                            continue
                        }
                        if (e === t) break e;
                        for (; null === e.sibling;) {
                            if (null === e.return || e.return === t) break e;
                            e = e.return
                        }
                        e.sibling.return = e.return, e = e.sibling
                    }
                    r &= 1
                }
                if (Na(io, r), 0 === (1 & t.mode)) t.memoizedState = null; else switch (a) {
                    case"forwards":
                        for (n = t.child, a = null; null !== n;) null !== (e = n.alternate) && null === so(e) && (a = n), n = n.sibling;
                        null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Bi(t, !1, a, n, l);
                        break;
                    case"backwards":
                        for (n = null, a = t.child, t.child = null; null !== a;) {
                            if (null !== (e = a.alternate) && null === so(e)) {
                                t.child = a;
                                break
                            }
                            e = a.sibling, a.sibling = n, n = a, a = e
                        }
                        Bi(t, !0, n, null, l);
                        break;
                    case"together":
                        Bi(t, !1, null, null, void 0);
                        break;
                    default:
                        t.memoizedState = null
                }
                return t.child
            }

            function qi(e, t) {
                0 === (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
            }

            function Vi(e, t, n) {
                if (null !== e && (t.dependencies = e.dependencies), Ms |= t.lanes, 0 === (n & t.childLanes)) return null;
                if (null !== e && t.child !== e.child) throw Error(l(153));
                if (null !== t.child) {
                    for (n = Ru(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Ru(e, e.pendingProps)).return = t;
                    n.sibling = null
                }
                return t.child
            }

            function Qi(e, t) {
                if (!al) switch (e.tailMode) {
                    case"hidden":
                        t = e.tail;
                        for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                        null === n ? e.tail = null : n.sibling = null;
                        break;
                    case"collapsed":
                        n = e.tail;
                        for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                        null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                }
            }

            function Ki(e) {
                var t = null !== e.alternate && e.alternate.child === e.child, n = 0, r = 0;
                if (t) for (var a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= 14680064 & a.subtreeFlags, r |= 14680064 & a.flags, a.return = e, a = a.sibling; else for (a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
                return e.subtreeFlags |= r, e.childLanes = n, t
            }

            function Xi(e, t, n) {
                var r = t.pendingProps;
                switch (tl(t), t.tag) {
                    case 2:
                    case 16:
                    case 15:
                    case 0:
                    case 11:
                    case 7:
                    case 8:
                    case 12:
                    case 9:
                    case 14:
                        return Ki(t), null;
                    case 1:
                    case 17:
                        return Oa(t.type) && Da(), Ki(t), null;
                    case 3:
                        return r = t.stateNode, ao(), ja(Pa), ja(Ca), co(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (dl(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, null !== ll && (iu(ll), ll = null))), Di(e, t), Ki(t), null;
                    case 5:
                        oo(t);
                        var a = no(to.current);
                        if (n = t.type, null !== e && null != t.stateNode) Ri(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152); else {
                            if (!r) {
                                if (null === t.stateNode) throw Error(l(166));
                                return Ki(t), null
                            }
                            if (e = no($l.current), dl(t)) {
                                r = t.stateNode, n = t.type;
                                var o = t.memoizedProps;
                                switch (r[fa] = t, r[pa] = o, e = 0 !== (1 & t.mode), n) {
                                    case"dialog":
                                        Ir("cancel", r), Ir("close", r);
                                        break;
                                    case"iframe":
                                    case"object":
                                    case"embed":
                                        Ir("load", r);
                                        break;
                                    case"video":
                                    case"audio":
                                        for (a = 0; a < zr.length; a++) Ir(zr[a], r);
                                        break;
                                    case"source":
                                        Ir("error", r);
                                        break;
                                    case"img":
                                    case"image":
                                    case"link":
                                        Ir("error", r), Ir("load", r);
                                        break;
                                    case"details":
                                        Ir("toggle", r);
                                        break;
                                    case"input":
                                        G(r, o), Ir("invalid", r);
                                        break;
                                    case"select":
                                        r._wrapperState = {wasMultiple: !!o.multiple}, Ir("invalid", r);
                                        break;
                                    case"textarea":
                                        ae(r, o), Ir("invalid", r)
                                }
                                for (var s in ye(n, o), a = null, o) if (o.hasOwnProperty(s)) {
                                    var u = o[s];
                                    "children" === s ? "string" === typeof u ? r.textContent !== u && (!0 !== o.suppressHydrationWarning && Zr(r.textContent, u, e), a = ["children", u]) : "number" === typeof u && r.textContent !== "" + u && (!0 !== o.suppressHydrationWarning && Zr(r.textContent, u, e), a = ["children", "" + u]) : i.hasOwnProperty(s) && null != u && "onScroll" === s && Ir("scroll", r)
                                }
                                switch (n) {
                                    case"input":
                                        Q(r), $(r, o, !0);
                                        break;
                                    case"textarea":
                                        Q(r), oe(r);
                                        break;
                                    case"select":
                                    case"option":
                                        break;
                                    default:
                                        "function" === typeof o.onClick && (r.onclick = $r)
                                }
                                r = a, t.updateQueue = r, null !== r && (t.flags |= 4)
                            } else {
                                s = 9 === a.nodeType ? a : a.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = ie(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = s.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = s.createElement(n, {is: r.is}) : (e = s.createElement(n), "select" === n && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[fa] = t, e[pa] = r, Oi(e, t, !1, !1), t.stateNode = e;
                                e:{
                                    switch (s = be(n, r), n) {
                                        case"dialog":
                                            Ir("cancel", e), Ir("close", e), a = r;
                                            break;
                                        case"iframe":
                                        case"object":
                                        case"embed":
                                            Ir("load", e), a = r;
                                            break;
                                        case"video":
                                        case"audio":
                                            for (a = 0; a < zr.length; a++) Ir(zr[a], e);
                                            a = r;
                                            break;
                                        case"source":
                                            Ir("error", e), a = r;
                                            break;
                                        case"img":
                                        case"image":
                                        case"link":
                                            Ir("error", e), Ir("load", e), a = r;
                                            break;
                                        case"details":
                                            Ir("toggle", e), a = r;
                                            break;
                                        case"input":
                                            G(e, r), a = Y(e, r), Ir("invalid", e);
                                            break;
                                        case"option":
                                        default:
                                            a = r;
                                            break;
                                        case"select":
                                            e._wrapperState = {wasMultiple: !!r.multiple}, a = M({}, r, {value: void 0}), Ir("invalid", e);
                                            break;
                                        case"textarea":
                                            ae(e, r), a = re(e, r), Ir("invalid", e)
                                    }
                                    for (o in ye(n, a), u = a) if (u.hasOwnProperty(o)) {
                                        var c = u[o];
                                        "style" === o ? ve(e, c) : "dangerouslySetInnerHTML" === o ? null != (c = c ? c.__html : void 0) && de(e, c) : "children" === o ? "string" === typeof c ? ("textarea" !== n || "" !== c) && fe(e, c) : "number" === typeof c && fe(e, "" + c) : "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && "autoFocus" !== o && (i.hasOwnProperty(o) ? null != c && "onScroll" === o && Ir("scroll", e) : null != c && b(e, o, c, s))
                                    }
                                    switch (n) {
                                        case"input":
                                            Q(e), $(e, r, !1);
                                            break;
                                        case"textarea":
                                            Q(e), oe(e);
                                            break;
                                        case"option":
                                            null != r.value && e.setAttribute("value", "" + q(r.value));
                                            break;
                                        case"select":
                                            e.multiple = !!r.multiple, null != (o = r.value) ? ne(e, !!r.multiple, o, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                            break;
                                        default:
                                            "function" === typeof a.onClick && (e.onclick = $r)
                                    }
                                    switch (n) {
                                        case"button":
                                        case"input":
                                        case"select":
                                        case"textarea":
                                            r = !!r.autoFocus;
                                            break e;
                                        case"img":
                                            r = !0;
                                            break e;
                                        default:
                                            r = !1
                                    }
                                }
                                r && (t.flags |= 4)
                            }
                            null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
                        }
                        return Ki(t), null;
                    case 6:
                        if (e && null != t.stateNode) zi(e, t, e.memoizedProps, r); else {
                            if ("string" !== typeof r && null === t.stateNode) throw Error(l(166));
                            if (n = no(to.current), no($l.current), dl(t)) {
                                if (r = t.stateNode, n = t.memoizedProps, r[fa] = t, (o = r.nodeValue !== n) && null !== (e = nl)) switch (e.tag) {
                                    case 3:
                                        Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                                        break;
                                    case 5:
                                        !0 !== e.memoizedProps.suppressHydrationWarning && Zr(r.nodeValue, n, 0 !== (1 & e.mode))
                                }
                                o && (t.flags |= 4)
                            } else (r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[fa] = t, t.stateNode = r
                        }
                        return Ki(t), null;
                    case 13:
                        if (ja(io), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                            if (al && null !== rl && 0 !== (1 & t.mode) && 0 === (128 & t.flags)) fl(), pl(), t.flags |= 98560, o = !1; else if (o = dl(t), null !== r && null !== r.dehydrated) {
                                if (null === e) {
                                    if (!o) throw Error(l(318));
                                    if (!(o = null !== (o = t.memoizedState) ? o.dehydrated : null)) throw Error(l(317));
                                    o[fa] = t
                                } else pl(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                Ki(t), o = !1
                            } else null !== ll && (iu(ll), ll = null), o = !0;
                            if (!o) return 65536 & t.flags ? t : null
                        }
                        return 0 !== (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 !== (1 & t.mode) && (null === e || 0 !== (1 & io.current) ? 0 === zs && (zs = 3) : vu())), null !== t.updateQueue && (t.flags |= 4), Ki(t), null);
                    case 4:
                        return ao(), Di(e, t), null === e && Br(t.stateNode.containerInfo), Ki(t), null;
                    case 10:
                        return kl(t.type._context), Ki(t), null;
                    case 19:
                        if (ja(io), null === (o = t.memoizedState)) return Ki(t), null;
                        if (r = 0 !== (128 & t.flags), null === (s = o.rendering)) if (r) Qi(o, !1); else {
                            if (0 !== zs || null !== e && 0 !== (128 & e.flags)) for (e = t.child; null !== e;) {
                                if (null !== (s = so(e))) {
                                    for (t.flags |= 128, Qi(o, !1), null !== (r = s.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (o = n).flags &= 14680066, null === (s = o.alternate) ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = null === e ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }), n = n.sibling;
                                    return Na(io, 1 & io.current | 2), t.child
                                }
                                e = e.sibling
                            }
                            null !== o.tail && Je() > Hs && (t.flags |= 128, r = !0, Qi(o, !1), t.lanes = 4194304)
                        } else {
                            if (!r) if (null !== (e = so(s))) {
                                if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Qi(o, !0), null === o.tail && "hidden" === o.tailMode && !s.alternate && !al) return Ki(t), null
                            } else 2 * Je() - o.renderingStartTime > Hs && 1073741824 !== n && (t.flags |= 128, r = !0, Qi(o, !1), t.lanes = 4194304);
                            o.isBackwards ? (s.sibling = t.child, t.child = s) : (null !== (n = o.last) ? n.sibling = s : t.child = s, o.last = s)
                        }
                        return null !== o.tail ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Je(), t.sibling = null, n = io.current, Na(io, r ? 1 & n | 2 : 1 & n), t) : (Ki(t), null);
                    case 22:
                    case 23:
                        return fu(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 !== (1 & t.mode) ? 0 !== (1073741824 & Ds) && (Ki(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Ki(t), null;
                    case 24:
                    case 25:
                        return null
                }
                throw Error(l(156, t.tag))
            }

            function Yi(e, t) {
                switch (tl(t), t.tag) {
                    case 1:
                        return Oa(t.type) && Da(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                    case 3:
                        return ao(), ja(Pa), ja(Ca), co(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                    case 5:
                        return oo(t), null;
                    case 13:
                        if (ja(io), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                            if (null === t.alternate) throw Error(l(340));
                            pl()
                        }
                        return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                    case 19:
                        return ja(io), null;
                    case 4:
                        return ao(), null;
                    case 10:
                        return kl(t.type._context), null;
                    case 22:
                    case 23:
                        return fu(), null;
                    default:
                        return null
                }
            }

            Oi = function (e, t) {
                for (var n = t.child; null !== n;) {
                    if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode); else if (4 !== n.tag && null !== n.child) {
                        n.child.return = n, n = n.child;
                        continue
                    }
                    if (n === t) break;
                    for (; null === n.sibling;) {
                        if (null === n.return || n.return === t) return;
                        n = n.return
                    }
                    n.sibling.return = n.return, n = n.sibling
                }
            }, Di = function () {
            }, Ri = function (e, t, n, r) {
                var a = e.memoizedProps;
                if (a !== r) {
                    e = t.stateNode, no($l.current);
                    var l, o = null;
                    switch (n) {
                        case"input":
                            a = Y(e, a), r = Y(e, r), o = [];
                            break;
                        case"select":
                            a = M({}, a, {value: void 0}), r = M({}, r, {value: void 0}), o = [];
                            break;
                        case"textarea":
                            a = re(e, a), r = re(e, r), o = [];
                            break;
                        default:
                            "function" !== typeof a.onClick && "function" === typeof r.onClick && (e.onclick = $r)
                    }
                    for (c in ye(n, r), n = null, a) if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c]) if ("style" === c) {
                        var s = a[c];
                        for (l in s) s.hasOwnProperty(l) && (n || (n = {}), n[l] = "")
                    } else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (i.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
                    for (c in r) {
                        var u = r[c];
                        if (s = null != a ? a[c] : void 0, r.hasOwnProperty(c) && u !== s && (null != u || null != s)) if ("style" === c) if (s) {
                            for (l in s) !s.hasOwnProperty(l) || u && u.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
                            for (l in u) u.hasOwnProperty(l) && s[l] !== u[l] && (n || (n = {}), n[l] = u[l])
                        } else n || (o || (o = []), o.push(c, n)), n = u; else "dangerouslySetInnerHTML" === c ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, null != u && s !== u && (o = o || []).push(c, u)) : "children" === c ? "string" !== typeof u && "number" !== typeof u || (o = o || []).push(c, "" + u) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (i.hasOwnProperty(c) ? (null != u && "onScroll" === c && Ir("scroll", e), o || s === u || (o = [])) : (o = o || []).push(c, u))
                    }
                    n && (o = o || []).push("style", n);
                    var c = o;
                    (t.updateQueue = c) && (t.flags |= 4)
                }
            }, zi = function (e, t, n, r) {
                n !== r && (t.flags |= 4)
            };
            var Gi = !1, Ji = !1, Zi = "function" === typeof WeakSet ? WeakSet : Set, $i = null;

            function es(e, t) {
                var n = e.ref;
                if (null !== n) if ("function" === typeof n) try {
                    n(null)
                } catch (r) {
                    ju(e, t, r)
                } else n.current = null
            }

            function ts(e, t, n) {
                try {
                    n()
                } catch (r) {
                    ju(e, t, r)
                }
            }

            var ns = !1;

            function rs(e, t, n) {
                var r = t.updateQueue;
                if (null !== (r = null !== r ? r.lastEffect : null)) {
                    var a = r = r.next;
                    do {
                        if ((a.tag & e) === e) {
                            var l = a.destroy;
                            a.destroy = void 0, void 0 !== l && ts(t, n, l)
                        }
                        a = a.next
                    } while (a !== r)
                }
            }

            function as(e, t) {
                if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                    var n = t = t.next;
                    do {
                        if ((n.tag & e) === e) {
                            var r = n.create;
                            n.destroy = r()
                        }
                        n = n.next
                    } while (n !== t)
                }
            }

            function ls(e) {
                var t = e.ref;
                if (null !== t) {
                    var n = e.stateNode;
                    e.tag, e = n, "function" === typeof t ? t(e) : t.current = e
                }
            }

            function os(e) {
                var t = e.alternate;
                null !== t && (e.alternate = null, os(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[fa], delete t[pa], delete t[ma], delete t[va], delete t[ga])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
            }

            function is(e) {
                return 5 === e.tag || 3 === e.tag || 4 === e.tag
            }

            function ss(e) {
                e:for (; ;) {
                    for (; null === e.sibling;) {
                        if (null === e.return || is(e.return)) return null;
                        e = e.return
                    }
                    for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                        if (2 & e.flags) continue e;
                        if (null === e.child || 4 === e.tag) continue e;
                        e.child.return = e, e = e.child
                    }
                    if (!(2 & e.flags)) return e.stateNode
                }
            }

            function us(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = $r)); else if (4 !== r && null !== (e = e.child)) for (us(e, t, n), e = e.sibling; null !== e;) us(e, t, n), e = e.sibling
            }

            function cs(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e); else if (4 !== r && null !== (e = e.child)) for (cs(e, t, n), e = e.sibling; null !== e;) cs(e, t, n), e = e.sibling
            }

            var ds = null, fs = !1;

            function ps(e, t, n) {
                for (n = n.child; null !== n;) hs(e, t, n), n = n.sibling
            }

            function hs(e, t, n) {
                if (lt && "function" === typeof lt.onCommitFiberUnmount) try {
                    lt.onCommitFiberUnmount(at, n)
                } catch (i) {
                }
                switch (n.tag) {
                    case 5:
                        Ji || es(n, t);
                    case 6:
                        var r = ds, a = fs;
                        ds = null, ps(e, t, n), fs = a, null !== (ds = r) && (fs ? (e = ds, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : ds.removeChild(n.stateNode));
                        break;
                    case 18:
                        null !== ds && (fs ? (e = ds, n = n.stateNode, 8 === e.nodeType ? sa(e.parentNode, n) : 1 === e.nodeType && sa(e, n), Bt(e)) : sa(ds, n.stateNode));
                        break;
                    case 4:
                        r = ds, a = fs, ds = n.stateNode.containerInfo, fs = !0, ps(e, t, n), ds = r, fs = a;
                        break;
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        if (!Ji && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
                            a = r = r.next;
                            do {
                                var l = a, o = l.destroy;
                                l = l.tag, void 0 !== o && (0 !== (2 & l) || 0 !== (4 & l)) && ts(n, t, o), a = a.next
                            } while (a !== r)
                        }
                        ps(e, t, n);
                        break;
                    case 1:
                        if (!Ji && (es(n, t), "function" === typeof (r = n.stateNode).componentWillUnmount)) try {
                            r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                        } catch (i) {
                            ju(n, t, i)
                        }
                        ps(e, t, n);
                        break;
                    case 21:
                        ps(e, t, n);
                        break;
                    case 22:
                        1 & n.mode ? (Ji = (r = Ji) || null !== n.memoizedState, ps(e, t, n), Ji = r) : ps(e, t, n);
                        break;
                    default:
                        ps(e, t, n)
                }
            }

            function ms(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    e.updateQueue = null;
                    var n = e.stateNode;
                    null === n && (n = e.stateNode = new Zi), t.forEach((function (t) {
                        var r = Pu.bind(null, e, t);
                        n.has(t) || (n.add(t), t.then(r, r))
                    }))
                }
            }

            function vs(e, t) {
                var n = t.deletions;
                if (null !== n) for (var r = 0; r < n.length; r++) {
                    var a = n[r];
                    try {
                        var o = e, i = t, s = i;
                        e:for (; null !== s;) {
                            switch (s.tag) {
                                case 5:
                                    ds = s.stateNode, fs = !1;
                                    break e;
                                case 3:
                                case 4:
                                    ds = s.stateNode.containerInfo, fs = !0;
                                    break e
                            }
                            s = s.return
                        }
                        if (null === ds) throw Error(l(160));
                        hs(o, i, a), ds = null, fs = !1;
                        var u = a.alternate;
                        null !== u && (u.return = null), a.return = null
                    } catch (c) {
                        ju(a, t, c)
                    }
                }
                if (12854 & t.subtreeFlags) for (t = t.child; null !== t;) gs(t, e), t = t.sibling
            }

            function gs(e, t) {
                var n = e.alternate, r = e.flags;
                switch (e.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        if (vs(t, e), ys(e), 4 & r) {
                            try {
                                rs(3, e, e.return), as(3, e)
                            } catch (v) {
                                ju(e, e.return, v)
                            }
                            try {
                                rs(5, e, e.return)
                            } catch (v) {
                                ju(e, e.return, v)
                            }
                        }
                        break;
                    case 1:
                        vs(t, e), ys(e), 512 & r && null !== n && es(n, n.return);
                        break;
                    case 5:
                        if (vs(t, e), ys(e), 512 & r && null !== n && es(n, n.return), 32 & e.flags) {
                            var a = e.stateNode;
                            try {
                                fe(a, "")
                            } catch (v) {
                                ju(e, e.return, v)
                            }
                        }
                        if (4 & r && null != (a = e.stateNode)) {
                            var o = e.memoizedProps, i = null !== n ? n.memoizedProps : o, s = e.type,
                                u = e.updateQueue;
                            if (e.updateQueue = null, null !== u) try {
                                "input" === s && "radio" === o.type && null != o.name && J(a, o), be(s, i);
                                var c = be(s, o);
                                for (i = 0; i < u.length; i += 2) {
                                    var d = u[i], f = u[i + 1];
                                    "style" === d ? ve(a, f) : "dangerouslySetInnerHTML" === d ? de(a, f) : "children" === d ? fe(a, f) : b(a, d, f, c)
                                }
                                switch (s) {
                                    case"input":
                                        Z(a, o);
                                        break;
                                    case"textarea":
                                        le(a, o);
                                        break;
                                    case"select":
                                        var p = a._wrapperState.wasMultiple;
                                        a._wrapperState.wasMultiple = !!o.multiple;
                                        var h = o.value;
                                        null != h ? ne(a, !!o.multiple, h, !1) : p !== !!o.multiple && (null != o.defaultValue ? ne(a, !!o.multiple, o.defaultValue, !0) : ne(a, !!o.multiple, o.multiple ? [] : "", !1))
                                }
                                a[pa] = o
                            } catch (v) {
                                ju(e, e.return, v)
                            }
                        }
                        break;
                    case 6:
                        if (vs(t, e), ys(e), 4 & r) {
                            if (null === e.stateNode) throw Error(l(162));
                            a = e.stateNode, o = e.memoizedProps;
                            try {
                                a.nodeValue = o
                            } catch (v) {
                                ju(e, e.return, v)
                            }
                        }
                        break;
                    case 3:
                        if (vs(t, e), ys(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                            Bt(t.containerInfo)
                        } catch (v) {
                            ju(e, e.return, v)
                        }
                        break;
                    case 4:
                    default:
                        vs(t, e), ys(e);
                        break;
                    case 13:
                        vs(t, e), ys(e), 8192 & (a = e.child).flags && (o = null !== a.memoizedState, a.stateNode.isHidden = o, !o || null !== a.alternate && null !== a.alternate.memoizedState || (Bs = Je())), 4 & r && ms(e);
                        break;
                    case 22:
                        if (d = null !== n && null !== n.memoizedState, 1 & e.mode ? (Ji = (c = Ji) || d, vs(t, e), Ji = c) : vs(t, e), ys(e), 8192 & r) {
                            if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode)) for ($i = e, d = e.child; null !== d;) {
                                for (f = $i = d; null !== $i;) {
                                    switch (h = (p = $i).child, p.tag) {
                                        case 0:
                                        case 11:
                                        case 14:
                                        case 15:
                                            rs(4, p, p.return);
                                            break;
                                        case 1:
                                            es(p, p.return);
                                            var m = p.stateNode;
                                            if ("function" === typeof m.componentWillUnmount) {
                                                r = p, n = p.return;
                                                try {
                                                    t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount()
                                                } catch (v) {
                                                    ju(r, n, v)
                                                }
                                            }
                                            break;
                                        case 5:
                                            es(p, p.return);
                                            break;
                                        case 22:
                                            if (null !== p.memoizedState) {
                                                ks(f);
                                                continue
                                            }
                                    }
                                    null !== h ? (h.return = p, $i = h) : ks(f)
                                }
                                d = d.sibling
                            }
                            e:for (d = null, f = e; ;) {
                                if (5 === f.tag) {
                                    if (null === d) {
                                        d = f;
                                        try {
                                            a = f.stateNode, c ? "function" === typeof (o = a.style).setProperty ? o.setProperty("display", "none", "important") : o.display = "none" : (s = f.stateNode, i = void 0 !== (u = f.memoizedProps.style) && null !== u && u.hasOwnProperty("display") ? u.display : null, s.style.display = me("display", i))
                                        } catch (v) {
                                            ju(e, e.return, v)
                                        }
                                    }
                                } else if (6 === f.tag) {
                                    if (null === d) try {
                                        f.stateNode.nodeValue = c ? "" : f.memoizedProps
                                    } catch (v) {
                                        ju(e, e.return, v)
                                    }
                                } else if ((22 !== f.tag && 23 !== f.tag || null === f.memoizedState || f === e) && null !== f.child) {
                                    f.child.return = f, f = f.child;
                                    continue
                                }
                                if (f === e) break e;
                                for (; null === f.sibling;) {
                                    if (null === f.return || f.return === e) break e;
                                    d === f && (d = null), f = f.return
                                }
                                d === f && (d = null), f.sibling.return = f.return, f = f.sibling
                            }
                        }
                        break;
                    case 19:
                        vs(t, e), ys(e), 4 & r && ms(e);
                    case 21:
                }
            }

            function ys(e) {
                var t = e.flags;
                if (2 & t) {
                    try {
                        e:{
                            for (var n = e.return; null !== n;) {
                                if (is(n)) {
                                    var r = n;
                                    break e
                                }
                                n = n.return
                            }
                            throw Error(l(160))
                        }
                        switch (r.tag) {
                            case 5:
                                var a = r.stateNode;
                                32 & r.flags && (fe(a, ""), r.flags &= -33), cs(e, ss(e), a);
                                break;
                            case 3:
                            case 4:
                                var o = r.stateNode.containerInfo;
                                us(e, ss(e), o);
                                break;
                            default:
                                throw Error(l(161))
                        }
                    } catch (i) {
                        ju(e, e.return, i)
                    }
                    e.flags &= -3
                }
                4096 & t && (e.flags &= -4097)
            }

            function bs(e, t, n) {
                $i = e, ws(e, t, n)
            }

            function ws(e, t, n) {
                for (var r = 0 !== (1 & e.mode); null !== $i;) {
                    var a = $i, l = a.child;
                    if (22 === a.tag && r) {
                        var o = null !== a.memoizedState || Gi;
                        if (!o) {
                            var i = a.alternate, s = null !== i && null !== i.memoizedState || Ji;
                            i = Gi;
                            var u = Ji;
                            if (Gi = o, (Ji = s) && !u) for ($i = a; null !== $i;) s = (o = $i).child, 22 === o.tag && null !== o.memoizedState ? _s(a) : null !== s ? (s.return = o, $i = s) : _s(a);
                            for (; null !== l;) $i = l, ws(l, t, n), l = l.sibling;
                            $i = a, Gi = i, Ji = u
                        }
                        xs(e)
                    } else 0 !== (8772 & a.subtreeFlags) && null !== l ? (l.return = a, $i = l) : xs(e)
                }
            }

            function xs(e) {
                for (; null !== $i;) {
                    var t = $i;
                    if (0 !== (8772 & t.flags)) {
                        var n = t.alternate;
                        try {
                            if (0 !== (8772 & t.flags)) switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ji || as(5, t);
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if (4 & t.flags && !Ji) if (null === n) r.componentDidMount(); else {
                                        var a = t.elementType === t.type ? n.memoizedProps : vl(t.type, n.memoizedProps);
                                        r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                    }
                                    var o = t.updateQueue;
                                    null !== o && Fl(t, o, r);
                                    break;
                                case 3:
                                    var i = t.updateQueue;
                                    if (null !== i) {
                                        if (n = null, null !== t.child) switch (t.child.tag) {
                                            case 5:
                                            case 1:
                                                n = t.child.stateNode
                                        }
                                        Fl(t, i, n)
                                    }
                                    break;
                                case 5:
                                    var s = t.stateNode;
                                    if (null === n && 4 & t.flags) {
                                        n = s;
                                        var u = t.memoizedProps;
                                        switch (t.type) {
                                            case"button":
                                            case"input":
                                            case"select":
                                            case"textarea":
                                                u.autoFocus && n.focus();
                                                break;
                                            case"img":
                                                u.src && (n.src = u.src)
                                        }
                                    }
                                    break;
                                case 6:
                                case 4:
                                case 12:
                                case 19:
                                case 17:
                                case 21:
                                case 22:
                                case 23:
                                case 25:
                                    break;
                                case 13:
                                    if (null === t.memoizedState) {
                                        var c = t.alternate;
                                        if (null !== c) {
                                            var d = c.memoizedState;
                                            if (null !== d) {
                                                var f = d.dehydrated;
                                                null !== f && Bt(f)
                                            }
                                        }
                                    }
                                    break;
                                default:
                                    throw Error(l(163))
                            }
                            Ji || 512 & t.flags && ls(t)
                        } catch (p) {
                            ju(t, t.return, p)
                        }
                    }
                    if (t === e) {
                        $i = null;
                        break
                    }
                    if (null !== (n = t.sibling)) {
                        n.return = t.return, $i = n;
                        break
                    }
                    $i = t.return
                }
            }

            function ks(e) {
                for (; null !== $i;) {
                    var t = $i;
                    if (t === e) {
                        $i = null;
                        break
                    }
                    var n = t.sibling;
                    if (null !== n) {
                        n.return = t.return, $i = n;
                        break
                    }
                    $i = t.return
                }
            }

            function _s(e) {
                for (; null !== $i;) {
                    var t = $i;
                    try {
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                var n = t.return;
                                try {
                                    as(4, t)
                                } catch (s) {
                                    ju(t, n, s)
                                }
                                break;
                            case 1:
                                var r = t.stateNode;
                                if ("function" === typeof r.componentDidMount) {
                                    var a = t.return;
                                    try {
                                        r.componentDidMount()
                                    } catch (s) {
                                        ju(t, a, s)
                                    }
                                }
                                var l = t.return;
                                try {
                                    ls(t)
                                } catch (s) {
                                    ju(t, l, s)
                                }
                                break;
                            case 5:
                                var o = t.return;
                                try {
                                    ls(t)
                                } catch (s) {
                                    ju(t, o, s)
                                }
                        }
                    } catch (s) {
                        ju(t, t.return, s)
                    }
                    if (t === e) {
                        $i = null;
                        break
                    }
                    var i = t.sibling;
                    if (null !== i) {
                        i.return = t.return, $i = i;
                        break
                    }
                    $i = t.return
                }
            }

            var Ss, js = Math.ceil, Ns = w.ReactCurrentDispatcher, Es = w.ReactCurrentOwner,
                Cs = w.ReactCurrentBatchConfig, Ps = 0, Ts = null, Ls = null, Os = 0, Ds = 0, Rs = Sa(0), zs = 0,
                As = null, Ms = 0, Fs = 0, Is = 0, Us = null, Ws = null, Bs = 0, Hs = 1 / 0, qs = null, Vs = !1,
                Qs = null, Ks = null, Xs = !1, Ys = null, Gs = 0, Js = 0, Zs = null, $s = -1, eu = 0;

            function tu() {
                return 0 !== (6 & Ps) ? Je() : -1 !== $s ? $s : $s = Je()
            }

            function nu(e) {
                return 0 === (1 & e.mode) ? 1 : 0 !== (2 & Ps) && 0 !== Os ? Os & -Os : null !== ml.transition ? (0 === eu && (eu = mt()), eu) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Gt(e.type)
            }

            function ru(e, t, n, r) {
                if (50 < Js) throw Js = 0, Zs = null, Error(l(185));
                gt(e, n, r), 0 !== (2 & Ps) && e === Ts || (e === Ts && (0 === (2 & Ps) && (Fs |= n), 4 === zs && su(e, Os)), au(e, r), 1 === n && 0 === Ps && 0 === (1 & t.mode) && (Hs = Je() + 500, Ia && Ba()))
            }

            function au(e, t) {
                var n = e.callbackNode;
                !function (e, t) {
                    for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, l = e.pendingLanes; 0 < l;) {
                        var o = 31 - ot(l), i = 1 << o, s = a[o];
                        -1 === s ? 0 !== (i & n) && 0 === (i & r) || (a[o] = pt(i, t)) : s <= t && (e.expiredLanes |= i), l &= ~i
                    }
                }(e, t);
                var r = ft(e, e === Ts ? Os : 0);
                if (0 === r) null !== n && Xe(n), e.callbackNode = null, e.callbackPriority = 0; else if (t = r & -r, e.callbackPriority !== t) {
                    if (null != n && Xe(n), 1 === t) 0 === e.tag ? function (e) {
                        Ia = !0, Wa(e)
                    }(uu.bind(null, e)) : Wa(uu.bind(null, e)), oa((function () {
                        0 === (6 & Ps) && Ba()
                    })), n = null; else {
                        switch (wt(r)) {
                            case 1:
                                n = $e;
                                break;
                            case 4:
                                n = et;
                                break;
                            case 16:
                            default:
                                n = tt;
                                break;
                            case 536870912:
                                n = rt
                        }
                        n = Tu(n, lu.bind(null, e))
                    }
                    e.callbackPriority = t, e.callbackNode = n
                }
            }

            function lu(e, t) {
                if ($s = -1, eu = 0, 0 !== (6 & Ps)) throw Error(l(327));
                var n = e.callbackNode;
                if (_u() && e.callbackNode !== n) return null;
                var r = ft(e, e === Ts ? Os : 0);
                if (0 === r) return null;
                if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gu(e, r); else {
                    t = r;
                    var a = Ps;
                    Ps |= 2;
                    var o = mu();
                    for (Ts === e && Os === t || (qs = null, Hs = Je() + 500, pu(e, t)); ;) try {
                        bu();
                        break
                    } catch (s) {
                        hu(e, s)
                    }
                    xl(), Ns.current = o, Ps = a, null !== Ls ? t = 0 : (Ts = null, Os = 0, t = zs)
                }
                if (0 !== t) {
                    if (2 === t && (0 !== (a = ht(e)) && (r = a, t = ou(e, a))), 1 === t) throw n = As, pu(e, 0), su(e, r), au(e, Je()), n;
                    if (6 === t) su(e, r); else {
                        if (a = e.current.alternate, 0 === (30 & r) && !function (e) {
                            for (var t = e; ;) {
                                if (16384 & t.flags) {
                                    var n = t.updateQueue;
                                    if (null !== n && null !== (n = n.stores)) for (var r = 0; r < n.length; r++) {
                                        var a = n[r], l = a.getSnapshot;
                                        a = a.value;
                                        try {
                                            if (!ir(l(), a)) return !1
                                        } catch (i) {
                                            return !1
                                        }
                                    }
                                }
                                if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n; else {
                                    if (t === e) break;
                                    for (; null === t.sibling;) {
                                        if (null === t.return || t.return === e) return !0;
                                        t = t.return
                                    }
                                    t.sibling.return = t.return, t = t.sibling
                                }
                            }
                            return !0
                        }(a) && (2 === (t = gu(e, r)) && (0 !== (o = ht(e)) && (r = o, t = ou(e, o))), 1 === t)) throw n = As, pu(e, 0), su(e, r), au(e, Je()), n;
                        switch (e.finishedWork = a, e.finishedLanes = r, t) {
                            case 0:
                            case 1:
                                throw Error(l(345));
                            case 2:
                            case 5:
                                ku(e, Ws, qs);
                                break;
                            case 3:
                                if (su(e, r), (130023424 & r) === r && 10 < (t = Bs + 500 - Je())) {
                                    if (0 !== ft(e, 0)) break;
                                    if (((a = e.suspendedLanes) & r) !== r) {
                                        tu(), e.pingedLanes |= e.suspendedLanes & a;
                                        break
                                    }
                                    e.timeoutHandle = ra(ku.bind(null, e, Ws, qs), t);
                                    break
                                }
                                ku(e, Ws, qs);
                                break;
                            case 4:
                                if (su(e, r), (4194240 & r) === r) break;
                                for (t = e.eventTimes, a = -1; 0 < r;) {
                                    var i = 31 - ot(r);
                                    o = 1 << i, (i = t[i]) > a && (a = i), r &= ~o
                                }
                                if (r = a, 10 < (r = (120 > (r = Je() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * js(r / 1960)) - r)) {
                                    e.timeoutHandle = ra(ku.bind(null, e, Ws, qs), r);
                                    break
                                }
                                ku(e, Ws, qs);
                                break;
                            default:
                                throw Error(l(329))
                        }
                    }
                }
                return au(e, Je()), e.callbackNode === n ? lu.bind(null, e) : null
            }

            function ou(e, t) {
                var n = Us;
                return e.current.memoizedState.isDehydrated && (pu(e, t).flags |= 256), 2 !== (e = gu(e, t)) && (t = Ws, Ws = n, null !== t && iu(t)), e
            }

            function iu(e) {
                null === Ws ? Ws = e : Ws.push.apply(Ws, e)
            }

            function su(e, t) {
                for (t &= ~Is, t &= ~Fs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                    var n = 31 - ot(t), r = 1 << n;
                    e[n] = -1, t &= ~r
                }
            }

            function uu(e) {
                if (0 !== (6 & Ps)) throw Error(l(327));
                _u();
                var t = ft(e, 0);
                if (0 === (1 & t)) return au(e, Je()), null;
                var n = gu(e, t);
                if (0 !== e.tag && 2 === n) {
                    var r = ht(e);
                    0 !== r && (t = r, n = ou(e, r))
                }
                if (1 === n) throw n = As, pu(e, 0), su(e, t), au(e, Je()), n;
                if (6 === n) throw Error(l(345));
                return e.finishedWork = e.current.alternate, e.finishedLanes = t, ku(e, Ws, qs), au(e, Je()), null
            }

            function cu(e, t) {
                var n = Ps;
                Ps |= 1;
                try {
                    return e(t)
                } finally {
                    0 === (Ps = n) && (Hs = Je() + 500, Ia && Ba())
                }
            }

            function du(e) {
                null !== Ys && 0 === Ys.tag && 0 === (6 & Ps) && _u();
                var t = Ps;
                Ps |= 1;
                var n = Cs.transition, r = bt;
                try {
                    if (Cs.transition = null, bt = 1, e) return e()
                } finally {
                    bt = r, Cs.transition = n, 0 === (6 & (Ps = t)) && Ba()
                }
            }

            function fu() {
                Ds = Rs.current, ja(Rs)
            }

            function pu(e, t) {
                e.finishedWork = null, e.finishedLanes = 0;
                var n = e.timeoutHandle;
                if (-1 !== n && (e.timeoutHandle = -1, aa(n)), null !== Ls) for (n = Ls.return; null !== n;) {
                    var r = n;
                    switch (tl(r), r.tag) {
                        case 1:
                            null !== (r = r.type.childContextTypes) && void 0 !== r && Da();
                            break;
                        case 3:
                            ao(), ja(Pa), ja(Ca), co();
                            break;
                        case 5:
                            oo(r);
                            break;
                        case 4:
                            ao();
                            break;
                        case 13:
                        case 19:
                            ja(io);
                            break;
                        case 10:
                            kl(r.type._context);
                            break;
                        case 22:
                        case 23:
                            fu()
                    }
                    n = n.return
                }
                if (Ts = e, Ls = e = Ru(e.current, null), Os = Ds = t, zs = 0, As = null, Is = Fs = Ms = 0, Ws = Us = null, null !== Nl) {
                    for (t = 0; t < Nl.length; t++) if (null !== (r = (n = Nl[t]).interleaved)) {
                        n.interleaved = null;
                        var a = r.next, l = n.pending;
                        if (null !== l) {
                            var o = l.next;
                            l.next = a, r.next = o
                        }
                        n.pending = r
                    }
                    Nl = null
                }
                return e
            }

            function hu(e, t) {
                for (; ;) {
                    var n = Ls;
                    try {
                        if (xl(), fo.current = oi, yo) {
                            for (var r = mo.memoizedState; null !== r;) {
                                var a = r.queue;
                                null !== a && (a.pending = null), r = r.next
                            }
                            yo = !1
                        }
                        if (ho = 0, go = vo = mo = null, bo = !1, wo = 0, Es.current = null, null === n || null === n.return) {
                            zs = 1, As = t, Ls = null;
                            break
                        }
                        e:{
                            var o = e, i = n.return, s = n, u = t;
                            if (t = Os, s.flags |= 32768, null !== u && "object" === typeof u && "function" === typeof u.then) {
                                var c = u, d = s, f = d.tag;
                                if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                                    var p = d.alternate;
                                    p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null)
                                }
                                var h = gi(i);
                                if (null !== h) {
                                    h.flags &= -257, yi(h, i, s, 0, t), 1 & h.mode && vi(o, c, t), u = c;
                                    var m = (t = h).updateQueue;
                                    if (null === m) {
                                        var v = new Set;
                                        v.add(u), t.updateQueue = v
                                    } else m.add(u);
                                    break e
                                }
                                if (0 === (1 & t)) {
                                    vi(o, c, t), vu();
                                    break e
                                }
                                u = Error(l(426))
                            } else if (al && 1 & s.mode) {
                                var g = gi(i);
                                if (null !== g) {
                                    0 === (65536 & g.flags) && (g.flags |= 256), yi(g, i, s, 0, t), hl(ci(u, s));
                                    break e
                                }
                            }
                            o = u = ci(u, s), 4 !== zs && (zs = 2), null === Us ? Us = [o] : Us.push(o), o = i;
                            do {
                                switch (o.tag) {
                                    case 3:
                                        o.flags |= 65536, t &= -t, o.lanes |= t, Al(o, hi(0, u, t));
                                        break e;
                                    case 1:
                                        s = u;
                                        var y = o.type, b = o.stateNode;
                                        if (0 === (128 & o.flags) && ("function" === typeof y.getDerivedStateFromError || null !== b && "function" === typeof b.componentDidCatch && (null === Ks || !Ks.has(b)))) {
                                            o.flags |= 65536, t &= -t, o.lanes |= t, Al(o, mi(o, s, t));
                                            break e
                                        }
                                }
                                o = o.return
                            } while (null !== o)
                        }
                        xu(n)
                    } catch (w) {
                        t = w, Ls === n && null !== n && (Ls = n = n.return);
                        continue
                    }
                    break
                }
            }

            function mu() {
                var e = Ns.current;
                return Ns.current = oi, null === e ? oi : e
            }

            function vu() {
                0 !== zs && 3 !== zs && 2 !== zs || (zs = 4), null === Ts || 0 === (268435455 & Ms) && 0 === (268435455 & Fs) || su(Ts, Os)
            }

            function gu(e, t) {
                var n = Ps;
                Ps |= 2;
                var r = mu();
                for (Ts === e && Os === t || (qs = null, pu(e, t)); ;) try {
                    yu();
                    break
                } catch (a) {
                    hu(e, a)
                }
                if (xl(), Ps = n, Ns.current = r, null !== Ls) throw Error(l(261));
                return Ts = null, Os = 0, zs
            }

            function yu() {
                for (; null !== Ls;) wu(Ls)
            }

            function bu() {
                for (; null !== Ls && !Ye();) wu(Ls)
            }

            function wu(e) {
                var t = Ss(e.alternate, e, Ds);
                e.memoizedProps = e.pendingProps, null === t ? xu(e) : Ls = t, Es.current = null
            }

            function xu(e) {
                var t = e;
                do {
                    var n = t.alternate;
                    if (e = t.return, 0 === (32768 & t.flags)) {
                        if (null !== (n = Xi(n, t, Ds))) return void (Ls = n)
                    } else {
                        if (null !== (n = Yi(n, t))) return n.flags &= 32767, void (Ls = n);
                        if (null === e) return zs = 6, void (Ls = null);
                        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
                    }
                    if (null !== (t = t.sibling)) return void (Ls = t);
                    Ls = t = e
                } while (null !== t);
                0 === zs && (zs = 5)
            }

            function ku(e, t, n) {
                var r = bt, a = Cs.transition;
                try {
                    Cs.transition = null, bt = 1, function (e, t, n, r) {
                        do {
                            _u()
                        } while (null !== Ys);
                        if (0 !== (6 & Ps)) throw Error(l(327));
                        n = e.finishedWork;
                        var a = e.finishedLanes;
                        if (null === n) return null;
                        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(l(177));
                        e.callbackNode = null, e.callbackPriority = 0;
                        var o = n.lanes | n.childLanes;
                        if (function (e, t) {
                            var n = e.pendingLanes & ~t;
                            e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                            var r = e.eventTimes;
                            for (e = e.expirationTimes; 0 < n;) {
                                var a = 31 - ot(n), l = 1 << a;
                                t[a] = 0, r[a] = -1, e[a] = -1, n &= ~l
                            }
                        }(e, o), e === Ts && (Ls = Ts = null, Os = 0), 0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) || Xs || (Xs = !0, Tu(tt, (function () {
                            return _u(), null
                        }))), o = 0 !== (15990 & n.flags), 0 !== (15990 & n.subtreeFlags) || o) {
                            o = Cs.transition, Cs.transition = null;
                            var i = bt;
                            bt = 1;
                            var s = Ps;
                            Ps |= 4, Es.current = null, function (e, t) {
                                if (ea = qt, pr(e = fr())) {
                                    if ("selectionStart" in e) var n = {
                                        start: e.selectionStart,
                                        end: e.selectionEnd
                                    }; else e:{
                                        var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                        if (r && 0 !== r.rangeCount) {
                                            n = r.anchorNode;
                                            var a = r.anchorOffset, o = r.focusNode;
                                            r = r.focusOffset;
                                            try {
                                                n.nodeType, o.nodeType
                                            } catch (x) {
                                                n = null;
                                                break e
                                            }
                                            var i = 0, s = -1, u = -1, c = 0, d = 0, f = e, p = null;
                                            t:for (; ;) {
                                                for (var h; f !== n || 0 !== a && 3 !== f.nodeType || (s = i + a), f !== o || 0 !== r && 3 !== f.nodeType || (u = i + r), 3 === f.nodeType && (i += f.nodeValue.length), null !== (h = f.firstChild);) p = f, f = h;
                                                for (; ;) {
                                                    if (f === e) break t;
                                                    if (p === n && ++c === a && (s = i), p === o && ++d === r && (u = i), null !== (h = f.nextSibling)) break;
                                                    p = (f = p).parentNode
                                                }
                                                f = h
                                            }
                                            n = -1 === s || -1 === u ? null : {start: s, end: u}
                                        } else n = null
                                    }
                                    n = n || {start: 0, end: 0}
                                } else n = null;
                                for (ta = {
                                    focusedElem: e,
                                    selectionRange: n
                                }, qt = !1, $i = t; null !== $i;) if (e = (t = $i).child, 0 !== (1028 & t.subtreeFlags) && null !== e) e.return = t, $i = e; else for (; null !== $i;) {
                                    t = $i;
                                    try {
                                        var m = t.alternate;
                                        if (0 !== (1024 & t.flags)) switch (t.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                            case 5:
                                            case 6:
                                            case 4:
                                            case 17:
                                                break;
                                            case 1:
                                                if (null !== m) {
                                                    var v = m.memoizedProps, g = m.memoizedState, y = t.stateNode,
                                                        b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? v : vl(t.type, v), g);
                                                    y.__reactInternalSnapshotBeforeUpdate = b
                                                }
                                                break;
                                            case 3:
                                                var w = t.stateNode.containerInfo;
                                                1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
                                                break;
                                            default:
                                                throw Error(l(163))
                                        }
                                    } catch (x) {
                                        ju(t, t.return, x)
                                    }
                                    if (null !== (e = t.sibling)) {
                                        e.return = t.return, $i = e;
                                        break
                                    }
                                    $i = t.return
                                }
                                m = ns, ns = !1
                            }(e, n), gs(n, e), hr(ta), qt = !!ea, ta = ea = null, e.current = n, bs(n, e, a), Ge(), Ps = s, bt = i, Cs.transition = o
                        } else e.current = n;
                        if (Xs && (Xs = !1, Ys = e, Gs = a), o = e.pendingLanes, 0 === o && (Ks = null), function (e) {
                            if (lt && "function" === typeof lt.onCommitFiberRoot) try {
                                lt.onCommitFiberRoot(at, e, void 0, 128 === (128 & e.current.flags))
                            } catch (t) {
                            }
                        }(n.stateNode), au(e, Je()), null !== t) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, {
                            componentStack: a.stack,
                            digest: a.digest
                        });
                        if (Vs) throw Vs = !1, e = Qs, Qs = null, e;
                        0 !== (1 & Gs) && 0 !== e.tag && _u(), o = e.pendingLanes, 0 !== (1 & o) ? e === Zs ? Js++ : (Js = 0, Zs = e) : Js = 0, Ba()
                    }(e, t, n, r)
                } finally {
                    Cs.transition = a, bt = r
                }
                return null
            }

            function _u() {
                if (null !== Ys) {
                    var e = wt(Gs), t = Cs.transition, n = bt;
                    try {
                        if (Cs.transition = null, bt = 16 > e ? 16 : e, null === Ys) var r = !1; else {
                            if (e = Ys, Ys = null, Gs = 0, 0 !== (6 & Ps)) throw Error(l(331));
                            var a = Ps;
                            for (Ps |= 4, $i = e.current; null !== $i;) {
                                var o = $i, i = o.child;
                                if (0 !== (16 & $i.flags)) {
                                    var s = o.deletions;
                                    if (null !== s) {
                                        for (var u = 0; u < s.length; u++) {
                                            var c = s[u];
                                            for ($i = c; null !== $i;) {
                                                var d = $i;
                                                switch (d.tag) {
                                                    case 0:
                                                    case 11:
                                                    case 15:
                                                        rs(8, d, o)
                                                }
                                                var f = d.child;
                                                if (null !== f) f.return = d, $i = f; else for (; null !== $i;) {
                                                    var p = (d = $i).sibling, h = d.return;
                                                    if (os(d), d === c) {
                                                        $i = null;
                                                        break
                                                    }
                                                    if (null !== p) {
                                                        p.return = h, $i = p;
                                                        break
                                                    }
                                                    $i = h
                                                }
                                            }
                                        }
                                        var m = o.alternate;
                                        if (null !== m) {
                                            var v = m.child;
                                            if (null !== v) {
                                                m.child = null;
                                                do {
                                                    var g = v.sibling;
                                                    v.sibling = null, v = g
                                                } while (null !== v)
                                            }
                                        }
                                        $i = o
                                    }
                                }
                                if (0 !== (2064 & o.subtreeFlags) && null !== i) i.return = o, $i = i; else e:for (; null !== $i;) {
                                    if (0 !== (2048 & (o = $i).flags)) switch (o.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            rs(9, o, o.return)
                                    }
                                    var y = o.sibling;
                                    if (null !== y) {
                                        y.return = o.return, $i = y;
                                        break e
                                    }
                                    $i = o.return
                                }
                            }
                            var b = e.current;
                            for ($i = b; null !== $i;) {
                                var w = (i = $i).child;
                                if (0 !== (2064 & i.subtreeFlags) && null !== w) w.return = i, $i = w; else e:for (i = b; null !== $i;) {
                                    if (0 !== (2048 & (s = $i).flags)) try {
                                        switch (s.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                as(9, s)
                                        }
                                    } catch (k) {
                                        ju(s, s.return, k)
                                    }
                                    if (s === i) {
                                        $i = null;
                                        break e
                                    }
                                    var x = s.sibling;
                                    if (null !== x) {
                                        x.return = s.return, $i = x;
                                        break e
                                    }
                                    $i = s.return
                                }
                            }
                            if (Ps = a, Ba(), lt && "function" === typeof lt.onPostCommitFiberRoot) try {
                                lt.onPostCommitFiberRoot(at, e)
                            } catch (k) {
                            }
                            r = !0
                        }
                        return r
                    } finally {
                        bt = n, Cs.transition = t
                    }
                }
                return !1
            }

            function Su(e, t, n) {
                e = Rl(e, t = hi(0, t = ci(n, t), 1), 1), t = tu(), null !== e && (gt(e, 1, t), au(e, t))
            }

            function ju(e, t, n) {
                if (3 === e.tag) Su(e, e, n); else for (; null !== t;) {
                    if (3 === t.tag) {
                        Su(t, e, n);
                        break
                    }
                    if (1 === t.tag) {
                        var r = t.stateNode;
                        if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Ks || !Ks.has(r))) {
                            t = Rl(t, e = mi(t, e = ci(n, e), 1), 1), e = tu(), null !== t && (gt(t, 1, e), au(t, e));
                            break
                        }
                    }
                    t = t.return
                }
            }

            function Nu(e, t, n) {
                var r = e.pingCache;
                null !== r && r.delete(t), t = tu(), e.pingedLanes |= e.suspendedLanes & n, Ts === e && (Os & n) === n && (4 === zs || 3 === zs && (130023424 & Os) === Os && 500 > Je() - Bs ? pu(e, 0) : Is |= n), au(e, t)
            }

            function Eu(e, t) {
                0 === t && (0 === (1 & e.mode) ? t = 1 : (t = ct, 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
                var n = tu();
                null !== (e = Pl(e, t)) && (gt(e, t, n), au(e, n))
            }

            function Cu(e) {
                var t = e.memoizedState, n = 0;
                null !== t && (n = t.retryLane), Eu(e, n)
            }

            function Pu(e, t) {
                var n = 0;
                switch (e.tag) {
                    case 13:
                        var r = e.stateNode, a = e.memoizedState;
                        null !== a && (n = a.retryLane);
                        break;
                    case 19:
                        r = e.stateNode;
                        break;
                    default:
                        throw Error(l(314))
                }
                null !== r && r.delete(t), Eu(e, n)
            }

            function Tu(e, t) {
                return Ke(e, t)
            }

            function Lu(e, t, n, r) {
                this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
            }

            function Ou(e, t, n, r) {
                return new Lu(e, t, n, r)
            }

            function Du(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }

            function Ru(e, t) {
                var n = e.alternate;
                return null === n ? ((n = Ou(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
            }

            function zu(e, t, n, r, a, o) {
                var i = 2;
                if (r = e, "function" === typeof e) Du(e) && (i = 1); else if ("string" === typeof e) i = 5; else e:switch (e) {
                    case _:
                        return Au(n.children, a, o, t);
                    case S:
                        i = 8, a |= 8;
                        break;
                    case j:
                        return (e = Ou(12, n, t, 2 | a)).elementType = j, e.lanes = o, e;
                    case P:
                        return (e = Ou(13, n, t, a)).elementType = P, e.lanes = o, e;
                    case T:
                        return (e = Ou(19, n, t, a)).elementType = T, e.lanes = o, e;
                    case D:
                        return Mu(n, a, o, t);
                    default:
                        if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                            case N:
                                i = 10;
                                break e;
                            case E:
                                i = 9;
                                break e;
                            case C:
                                i = 11;
                                break e;
                            case L:
                                i = 14;
                                break e;
                            case O:
                                i = 16, r = null;
                                break e
                        }
                        throw Error(l(130, null == e ? e : typeof e, ""))
                }
                return (t = Ou(i, n, t, a)).elementType = e, t.type = r, t.lanes = o, t
            }

            function Au(e, t, n, r) {
                return (e = Ou(7, e, r, t)).lanes = n, e
            }

            function Mu(e, t, n, r) {
                return (e = Ou(22, e, r, t)).elementType = D, e.lanes = n, e.stateNode = {isHidden: !1}, e
            }

            function Fu(e, t, n) {
                return (e = Ou(6, e, null, t)).lanes = n, e
            }

            function Iu(e, t, n) {
                return (t = Ou(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                }, t
            }

            function Uu(e, t, n, r, a) {
                this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vt(0), this.expirationTimes = vt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vt(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null
            }

            function Wu(e, t, n, r, a, l, o, i, s) {
                return e = new Uu(e, t, n, i, s), 1 === t ? (t = 1, !0 === l && (t |= 8)) : t = 0, l = Ou(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
                    element: r,
                    isDehydrated: n,
                    cache: null,
                    transitions: null,
                    pendingSuspenseBoundaries: null
                }, Ll(l), e
            }

            function Bu(e) {
                if (!e) return Ea;
                e:{
                    if (Be(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(l(170));
                    var t = e;
                    do {
                        switch (t.tag) {
                            case 3:
                                t = t.stateNode.context;
                                break e;
                            case 1:
                                if (Oa(t.type)) {
                                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                    break e
                                }
                        }
                        t = t.return
                    } while (null !== t);
                    throw Error(l(171))
                }
                if (1 === e.tag) {
                    var n = e.type;
                    if (Oa(n)) return za(e, n, t)
                }
                return t
            }

            function Hu(e, t, n, r, a, l, o, i, s) {
                return (e = Wu(n, r, !0, e, 0, l, 0, i, s)).context = Bu(null), n = e.current, (l = Dl(r = tu(), a = nu(n))).callback = void 0 !== t && null !== t ? t : null, Rl(n, l, a), e.current.lanes = a, gt(e, a, r), au(e, r), e
            }

            function qu(e, t, n, r) {
                var a = t.current, l = tu(), o = nu(a);
                return n = Bu(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Dl(l, o)).payload = {element: e}, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Rl(a, t, o)) && (ru(e, a, o, l), zl(e, a, o)), o
            }

            function Vu(e) {
                return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
            }

            function Qu(e, t) {
                if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                    var n = e.retryLane;
                    e.retryLane = 0 !== n && n < t ? n : t
                }
            }

            function Ku(e, t) {
                Qu(e, t), (e = e.alternate) && Qu(e, t)
            }

            Ss = function (e, t, n) {
                if (null !== e) if (e.memoizedProps !== t.pendingProps || Pa.current) wi = !0; else {
                    if (0 === (e.lanes & n) && 0 === (128 & t.flags)) return wi = !1, function (e, t, n) {
                        switch (t.tag) {
                            case 3:
                                Ti(t), pl();
                                break;
                            case 5:
                                lo(t);
                                break;
                            case 1:
                                Oa(t.type) && Aa(t);
                                break;
                            case 4:
                                ro(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                var r = t.type._context, a = t.memoizedProps.value;
                                Na(gl, r._currentValue), r._currentValue = a;
                                break;
                            case 13:
                                if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (Na(io, 1 & io.current), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? Fi(e, t, n) : (Na(io, 1 & io.current), null !== (e = Vi(e, t, n)) ? e.sibling : null);
                                Na(io, 1 & io.current);
                                break;
                            case 19:
                                if (r = 0 !== (n & t.childLanes), 0 !== (128 & e.flags)) {
                                    if (r) return Hi(e, t, n);
                                    t.flags |= 128
                                }
                                if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), Na(io, io.current), r) break;
                                return null;
                            case 22:
                            case 23:
                                return t.lanes = 0, ji(e, t, n)
                        }
                        return Vi(e, t, n)
                    }(e, t, n);
                    wi = 0 !== (131072 & e.flags)
                } else wi = !1, al && 0 !== (1048576 & t.flags) && $a(t, Qa, t.index);
                switch (t.lanes = 0, t.tag) {
                    case 2:
                        var r = t.type;
                        qi(e, t), e = t.pendingProps;
                        var a = La(t, Ca.current);
                        Sl(t, n), a = So(null, t, r, e, a, n);
                        var o = jo();
                        return t.flags |= 1, "object" === typeof a && null !== a && "function" === typeof a.render && void 0 === a.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Oa(r) ? (o = !0, Aa(t)) : o = !1, t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, Ll(t), a.updater = Wl, t.stateNode = a, a._reactInternals = t, Vl(t, r, e, n), t = Pi(null, t, r, !0, o, n)) : (t.tag = 0, al && o && el(t), xi(null, t, a, n), t = t.child), t;
                    case 16:
                        r = t.elementType;
                        e:{
                            switch (qi(e, t), e = t.pendingProps, r = (a = r._init)(r._payload), t.type = r, a = t.tag = function (e) {
                                if ("function" === typeof e) return Du(e) ? 1 : 0;
                                if (void 0 !== e && null !== e) {
                                    if ((e = e.$$typeof) === C) return 11;
                                    if (e === L) return 14
                                }
                                return 2
                            }(r), e = vl(r, e), a) {
                                case 0:
                                    t = Ei(null, t, r, e, n);
                                    break e;
                                case 1:
                                    t = Ci(null, t, r, e, n);
                                    break e;
                                case 11:
                                    t = ki(null, t, r, e, n);
                                    break e;
                                case 14:
                                    t = _i(null, t, r, vl(r.type, e), n);
                                    break e
                            }
                            throw Error(l(306, r, ""))
                        }
                        return t;
                    case 0:
                        return r = t.type, a = t.pendingProps, Ei(e, t, r, a = t.elementType === r ? a : vl(r, a), n);
                    case 1:
                        return r = t.type, a = t.pendingProps, Ci(e, t, r, a = t.elementType === r ? a : vl(r, a), n);
                    case 3:
                        e:{
                            if (Ti(t), null === e) throw Error(l(387));
                            r = t.pendingProps, a = (o = t.memoizedState).element, Ol(e, t), Ml(t, r, null, n);
                            var i = t.memoizedState;
                            if (r = i.element, o.isDehydrated) {
                                if (o = {
                                    element: r,
                                    isDehydrated: !1,
                                    cache: i.cache,
                                    pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                                    transitions: i.transitions
                                }, t.updateQueue.baseState = o, t.memoizedState = o, 256 & t.flags) {
                                    t = Li(e, t, r, n, a = ci(Error(l(423)), t));
                                    break e
                                }
                                if (r !== a) {
                                    t = Li(e, t, r, n, a = ci(Error(l(424)), t));
                                    break e
                                }
                                for (rl = ua(t.stateNode.containerInfo.firstChild), nl = t, al = !0, ll = null, n = Jl(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                            } else {
                                if (pl(), r === a) {
                                    t = Vi(e, t, n);
                                    break e
                                }
                                xi(e, t, r, n)
                            }
                            t = t.child
                        }
                        return t;
                    case 5:
                        return lo(t), null === e && ul(t), r = t.type, a = t.pendingProps, o = null !== e ? e.memoizedProps : null, i = a.children, na(r, a) ? i = null : null !== o && na(r, o) && (t.flags |= 32), Ni(e, t), xi(e, t, i, n), t.child;
                    case 6:
                        return null === e && ul(t), null;
                    case 13:
                        return Fi(e, t, n);
                    case 4:
                        return ro(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Gl(t, null, r, n) : xi(e, t, r, n), t.child;
                    case 11:
                        return r = t.type, a = t.pendingProps, ki(e, t, r, a = t.elementType === r ? a : vl(r, a), n);
                    case 7:
                        return xi(e, t, t.pendingProps, n), t.child;
                    case 8:
                    case 12:
                        return xi(e, t, t.pendingProps.children, n), t.child;
                    case 10:
                        e:{
                            if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, i = a.value, Na(gl, r._currentValue), r._currentValue = i, null !== o) if (ir(o.value, i)) {
                                if (o.children === a.children && !Pa.current) {
                                    t = Vi(e, t, n);
                                    break e
                                }
                            } else for (null !== (o = t.child) && (o.return = t); null !== o;) {
                                var s = o.dependencies;
                                if (null !== s) {
                                    i = o.child;
                                    for (var u = s.firstContext; null !== u;) {
                                        if (u.context === r) {
                                            if (1 === o.tag) {
                                                (u = Dl(-1, n & -n)).tag = 2;
                                                var c = o.updateQueue;
                                                if (null !== c) {
                                                    var d = (c = c.shared).pending;
                                                    null === d ? u.next = u : (u.next = d.next, d.next = u), c.pending = u
                                                }
                                            }
                                            o.lanes |= n, null !== (u = o.alternate) && (u.lanes |= n), _l(o.return, n, t), s.lanes |= n;
                                            break
                                        }
                                        u = u.next
                                    }
                                } else if (10 === o.tag) i = o.type === t.type ? null : o.child; else if (18 === o.tag) {
                                    if (null === (i = o.return)) throw Error(l(341));
                                    i.lanes |= n, null !== (s = i.alternate) && (s.lanes |= n), _l(i, n, t), i = o.sibling
                                } else i = o.child;
                                if (null !== i) i.return = o; else for (i = o; null !== i;) {
                                    if (i === t) {
                                        i = null;
                                        break
                                    }
                                    if (null !== (o = i.sibling)) {
                                        o.return = i.return, i = o;
                                        break
                                    }
                                    i = i.return
                                }
                                o = i
                            }
                            xi(e, t, a.children, n), t = t.child
                        }
                        return t;
                    case 9:
                        return a = t.type, r = t.pendingProps.children, Sl(t, n), r = r(a = jl(a)), t.flags |= 1, xi(e, t, r, n), t.child;
                    case 14:
                        return a = vl(r = t.type, t.pendingProps), _i(e, t, r, a = vl(r.type, a), n);
                    case 15:
                        return Si(e, t, t.type, t.pendingProps, n);
                    case 17:
                        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : vl(r, a), qi(e, t), t.tag = 1, Oa(r) ? (e = !0, Aa(t)) : e = !1, Sl(t, n), Hl(t, r, a), Vl(t, r, a, n), Pi(null, t, r, !0, e, n);
                    case 19:
                        return Hi(e, t, n);
                    case 22:
                        return ji(e, t, n)
                }
                throw Error(l(156, t.tag))
            };
            var Xu = "function" === typeof reportError ? reportError : function (e) {
                console.error(e)
            };

            function Yu(e) {
                this._internalRoot = e
            }

            function Gu(e) {
                this._internalRoot = e
            }

            function Ju(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
            }

            function Zu(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
            }

            function $u() {
            }

            function ec(e, t, n, r, a) {
                var l = n._reactRootContainer;
                if (l) {
                    var o = l;
                    if ("function" === typeof a) {
                        var i = a;
                        a = function () {
                            var e = Vu(o);
                            i.call(e)
                        }
                    }
                    qu(t, o, e, a)
                } else o = function (e, t, n, r, a) {
                    if (a) {
                        if ("function" === typeof r) {
                            var l = r;
                            r = function () {
                                var e = Vu(o);
                                l.call(e)
                            }
                        }
                        var o = Hu(t, r, e, 0, null, !1, 0, "", $u);
                        return e._reactRootContainer = o, e[ha] = o.current, Br(8 === e.nodeType ? e.parentNode : e), du(), o
                    }
                    for (; a = e.lastChild;) e.removeChild(a);
                    if ("function" === typeof r) {
                        var i = r;
                        r = function () {
                            var e = Vu(s);
                            i.call(e)
                        }
                    }
                    var s = Wu(e, 0, !1, null, 0, !1, 0, "", $u);
                    return e._reactRootContainer = s, e[ha] = s.current, Br(8 === e.nodeType ? e.parentNode : e), du((function () {
                        qu(t, s, n, r)
                    })), s
                }(n, t, e, a, r);
                return Vu(o)
            }

            Gu.prototype.render = Yu.prototype.render = function (e) {
                var t = this._internalRoot;
                if (null === t) throw Error(l(409));
                qu(e, t, null, null)
            }, Gu.prototype.unmount = Yu.prototype.unmount = function () {
                var e = this._internalRoot;
                if (null !== e) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    du((function () {
                        qu(null, e, null, null)
                    })), t[ha] = null
                }
            }, Gu.prototype.unstable_scheduleHydration = function (e) {
                if (e) {
                    var t = St();
                    e = {blockedOn: null, target: e, priority: t};
                    for (var n = 0; n < Dt.length && 0 !== t && t < Dt[n].priority; n++) ;
                    Dt.splice(n, 0, e), 0 === n && Mt(e)
                }
            }, xt = function (e) {
                switch (e.tag) {
                    case 3:
                        var t = e.stateNode;
                        if (t.current.memoizedState.isDehydrated) {
                            var n = dt(t.pendingLanes);
                            0 !== n && (yt(t, 1 | n), au(t, Je()), 0 === (6 & Ps) && (Hs = Je() + 500, Ba()))
                        }
                        break;
                    case 13:
                        du((function () {
                            var t = Pl(e, 1);
                            if (null !== t) {
                                var n = tu();
                                ru(t, e, 1, n)
                            }
                        })), Ku(e, 1)
                }
            }, kt = function (e) {
                if (13 === e.tag) {
                    var t = Pl(e, 134217728);
                    if (null !== t) ru(t, e, 134217728, tu());
                    Ku(e, 134217728)
                }
            }, _t = function (e) {
                if (13 === e.tag) {
                    var t = nu(e), n = Pl(e, t);
                    if (null !== n) ru(n, e, t, tu());
                    Ku(e, t)
                }
            }, St = function () {
                return bt
            }, jt = function (e, t) {
                var n = bt;
                try {
                    return bt = e, t()
                } finally {
                    bt = n
                }
            }, ke = function (e, t, n) {
                switch (t) {
                    case"input":
                        if (Z(e, n), t = n.name, "radio" === n.type && null != t) {
                            for (n = e; n.parentNode;) n = n.parentNode;
                            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                var r = n[t];
                                if (r !== e && r.form === e.form) {
                                    var a = xa(r);
                                    if (!a) throw Error(l(90));
                                    K(r), Z(r, a)
                                }
                            }
                        }
                        break;
                    case"textarea":
                        le(e, n);
                        break;
                    case"select":
                        null != (t = n.value) && ne(e, !!n.multiple, t, !1)
                }
            }, Ce = cu, Pe = du;
            var tc = {usingClientEntryPoint: !1, Events: [ba, wa, xa, Ne, Ee, cu]},
                nc = {findFiberByHostInstance: ya, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom"},
                rc = {
                    bundleType: nc.bundleType,
                    version: nc.version,
                    rendererPackageName: nc.rendererPackageName,
                    rendererConfig: nc.rendererConfig,
                    overrideHookState: null,
                    overrideHookStateDeletePath: null,
                    overrideHookStateRenamePath: null,
                    overrideProps: null,
                    overridePropsDeletePath: null,
                    overridePropsRenamePath: null,
                    setErrorHandler: null,
                    setSuspenseHandler: null,
                    scheduleUpdate: null,
                    currentDispatcherRef: w.ReactCurrentDispatcher,
                    findHostInstanceByFiber: function (e) {
                        return null === (e = Ve(e)) ? null : e.stateNode
                    },
                    findFiberByHostInstance: nc.findFiberByHostInstance || function () {
                        return null
                    },
                    findHostInstancesForRefresh: null,
                    scheduleRefresh: null,
                    scheduleRoot: null,
                    setRefreshHandler: null,
                    getCurrentFiber: null,
                    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
                };
            if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!ac.isDisabled && ac.supportsFiber) try {
                    at = ac.inject(rc), lt = ac
                } catch (ce) {
                }
            }
            t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc, t.createPortal = function (e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!Ju(t)) throw Error(l(200));
                return function (e, t, n) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: k,
                        key: null == r ? null : "" + r,
                        children: e,
                        containerInfo: t,
                        implementation: n
                    }
                }(e, t, null, n)
            }, t.createRoot = function (e, t) {
                if (!Ju(e)) throw Error(l(299));
                var n = !1, r = "", a = Xu;
                return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (a = t.onRecoverableError)), t = Wu(e, 1, !1, null, 0, n, 0, r, a), e[ha] = t.current, Br(8 === e.nodeType ? e.parentNode : e), new Yu(t)
            }, t.findDOMNode = function (e) {
                if (null == e) return null;
                if (1 === e.nodeType) return e;
                var t = e._reactInternals;
                if (void 0 === t) {
                    if ("function" === typeof e.render) throw Error(l(188));
                    throw e = Object.keys(e).join(","), Error(l(268, e))
                }
                return e = null === (e = Ve(t)) ? null : e.stateNode
            }, t.flushSync = function (e) {
                return du(e)
            }, t.hydrate = function (e, t, n) {
                if (!Zu(t)) throw Error(l(200));
                return ec(null, e, t, !0, n)
            }, t.hydrateRoot = function (e, t, n) {
                if (!Ju(e)) throw Error(l(405));
                var r = null != n && n.hydratedSources || null, a = !1, o = "", i = Xu;
                if (null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (a = !0), void 0 !== n.identifierPrefix && (o = n.identifierPrefix), void 0 !== n.onRecoverableError && (i = n.onRecoverableError)), t = Hu(t, null, e, 1, null != n ? n : null, a, 0, o, i), e[ha] = t.current, Br(e), r) for (e = 0; e < r.length; e++) a = (a = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
                return new Gu(t)
            }, t.render = function (e, t, n) {
                if (!Zu(t)) throw Error(l(200));
                return ec(null, e, t, !1, n)
            }, t.unmountComponentAtNode = function (e) {
                if (!Zu(e)) throw Error(l(40));
                return !!e._reactRootContainer && (du((function () {
                    ec(null, null, e, !1, (function () {
                        e._reactRootContainer = null, e[ha] = null
                    }))
                })), !0)
            }, t.unstable_batchedUpdates = cu, t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
                if (!Zu(n)) throw Error(l(200));
                if (null == e || void 0 === e._reactInternals) throw Error(l(38));
                return ec(e, t, n, !1, r)
            }, t.version = "18.2.0-next-9e3b772b8-20220608"
        }, 180: (e, t, n) => {
            "use strict";
            var r = n(292);
            t.createRoot = r.createRoot, t.hydrateRoot = r.hydrateRoot
        }, 292: (e, t, n) => {
            "use strict";
            !function e() {
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                } catch (t) {
                    console.error(t)
                }
            }(), e.exports = n(144)
        }, 36: (e, t, n) => {
            "use strict";
            var r = n(60), a = Symbol.for("react.element"), l = Symbol.for("react.fragment"),
                o = Object.prototype.hasOwnProperty,
                i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                s = {key: !0, ref: !0, __self: !0, __source: !0};

            function u(e, t, n) {
                var r, l = {}, u = null, c = null;
                for (r in void 0 !== n && (u = "" + n), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (c = t.ref), t) o.call(t, r) && !s.hasOwnProperty(r) && (l[r] = t[r]);
                if (e && e.defaultProps) for (r in t = e.defaultProps) void 0 === l[r] && (l[r] = t[r]);
                return {$$typeof: a, type: e, key: u, ref: c, props: l, _owner: i.current}
            }

            t.Fragment = l, t.jsx = u, t.jsxs = u
        }, 564: (e, t) => {
            "use strict";
            var n = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"),
                l = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"),
                s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"),
                d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.iterator;
            var h = {
                isMounted: function () {
                    return !1
                }, enqueueForceUpdate: function () {
                }, enqueueReplaceState: function () {
                }, enqueueSetState: function () {
                }
            }, m = Object.assign, v = {};

            function g(e, t, n) {
                this.props = e, this.context = t, this.refs = v, this.updater = n || h
            }

            function y() {
            }

            function b(e, t, n) {
                this.props = e, this.context = t, this.refs = v, this.updater = n || h
            }

            g.prototype.isReactComponent = {}, g.prototype.setState = function (e, t) {
                if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
            }, g.prototype.forceUpdate = function (e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }, y.prototype = g.prototype;
            var w = b.prototype = new y;
            w.constructor = b, m(w, g.prototype), w.isPureReactComponent = !0;
            var x = Array.isArray, k = Object.prototype.hasOwnProperty, _ = {current: null},
                S = {key: !0, ref: !0, __self: !0, __source: !0};

            function j(e, t, r) {
                var a, l = {}, o = null, i = null;
                if (null != t) for (a in void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (o = "" + t.key), t) k.call(t, a) && !S.hasOwnProperty(a) && (l[a] = t[a]);
                var s = arguments.length - 2;
                if (1 === s) l.children = r; else if (1 < s) {
                    for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
                    l.children = u
                }
                if (e && e.defaultProps) for (a in s = e.defaultProps) void 0 === l[a] && (l[a] = s[a]);
                return {$$typeof: n, type: e, key: o, ref: i, props: l, _owner: _.current}
            }

            function N(e) {
                return "object" === typeof e && null !== e && e.$$typeof === n
            }

            var E = /\/+/g;

            function C(e, t) {
                return "object" === typeof e && null !== e && null != e.key ? function (e) {
                    var t = {"=": "=0", ":": "=2"};
                    return "$" + e.replace(/[=:]/g, (function (e) {
                        return t[e]
                    }))
                }("" + e.key) : t.toString(36)
            }

            function P(e, t, a, l, o) {
                var i = typeof e;
                "undefined" !== i && "boolean" !== i || (e = null);
                var s = !1;
                if (null === e) s = !0; else switch (i) {
                    case"string":
                    case"number":
                        s = !0;
                        break;
                    case"object":
                        switch (e.$$typeof) {
                            case n:
                            case r:
                                s = !0
                        }
                }
                if (s) return o = o(s = e), e = "" === l ? "." + C(s, 0) : l, x(o) ? (a = "", null != e && (a = e.replace(E, "$&/") + "/"), P(o, t, a, "", (function (e) {
                    return e
                }))) : null != o && (N(o) && (o = function (e, t) {
                    return {$$typeof: n, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner}
                }(o, a + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(E, "$&/") + "/") + e)), t.push(o)), 1;
                if (s = 0, l = "" === l ? "." : l + ":", x(e)) for (var u = 0; u < e.length; u++) {
                    var c = l + C(i = e[u], u);
                    s += P(i, t, a, c, o)
                } else if (c = function (e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof (e = p && e[p] || e["@@iterator"]) ? e : null
                }(e), "function" === typeof c) for (e = c.call(e), u = 0; !(i = e.next()).done;) s += P(i = i.value, t, a, c = l + C(i, u++), o); else if ("object" === i) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                return s
            }

            function T(e, t, n) {
                if (null == e) return e;
                var r = [], a = 0;
                return P(e, r, "", "", (function (e) {
                    return t.call(n, e, a++)
                })), r
            }

            function L(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    (t = t()).then((function (t) {
                        0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                    }), (function (t) {
                        0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                    })), -1 === e._status && (e._status = 0, e._result = t)
                }
                if (1 === e._status) return e._result.default;
                throw e._result
            }

            var O = {current: null}, D = {transition: null},
                R = {ReactCurrentDispatcher: O, ReactCurrentBatchConfig: D, ReactCurrentOwner: _};
            t.Children = {
                map: T, forEach: function (e, t, n) {
                    T(e, (function () {
                        t.apply(this, arguments)
                    }), n)
                }, count: function (e) {
                    var t = 0;
                    return T(e, (function () {
                        t++
                    })), t
                }, toArray: function (e) {
                    return T(e, (function (e) {
                        return e
                    })) || []
                }, only: function (e) {
                    if (!N(e)) throw Error("React.Children.only expected to receive a single React element child.");
                    return e
                }
            }, t.Component = g, t.Fragment = a, t.Profiler = o, t.PureComponent = b, t.StrictMode = l, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R, t.cloneElement = function (e, t, r) {
                if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                var a = m({}, e.props), l = e.key, o = e.ref, i = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (o = t.ref, i = _.current), void 0 !== t.key && (l = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
                    for (u in t) k.call(t, u) && !S.hasOwnProperty(u) && (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u])
                }
                var u = arguments.length - 2;
                if (1 === u) a.children = r; else if (1 < u) {
                    s = Array(u);
                    for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
                    a.children = s
                }
                return {$$typeof: n, type: e.type, key: l, ref: o, props: a, _owner: i}
            }, t.createContext = function (e) {
                return (e = {
                    $$typeof: s,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null
                }).Provider = {$$typeof: i, _context: e}, e.Consumer = e
            }, t.createElement = j, t.createFactory = function (e) {
                var t = j.bind(null, e);
                return t.type = e, t
            }, t.createRef = function () {
                return {current: null}
            }, t.forwardRef = function (e) {
                return {$$typeof: u, render: e}
            }, t.isValidElement = N, t.lazy = function (e) {
                return {$$typeof: f, _payload: {_status: -1, _result: e}, _init: L}
            }, t.memo = function (e, t) {
                return {$$typeof: d, type: e, compare: void 0 === t ? null : t}
            }, t.startTransition = function (e) {
                var t = D.transition;
                D.transition = {};
                try {
                    e()
                } finally {
                    D.transition = t
                }
            }, t.unstable_act = function () {
                throw Error("act(...) is not supported in production builds of React.")
            }, t.useCallback = function (e, t) {
                return O.current.useCallback(e, t)
            }, t.useContext = function (e) {
                return O.current.useContext(e)
            }, t.useDebugValue = function () {
            }, t.useDeferredValue = function (e) {
                return O.current.useDeferredValue(e)
            }, t.useEffect = function (e, t) {
                return O.current.useEffect(e, t)
            }, t.useId = function () {
                return O.current.useId()
            }, t.useImperativeHandle = function (e, t, n) {
                return O.current.useImperativeHandle(e, t, n)
            }, t.useInsertionEffect = function (e, t) {
                return O.current.useInsertionEffect(e, t)
            }, t.useLayoutEffect = function (e, t) {
                return O.current.useLayoutEffect(e, t)
            }, t.useMemo = function (e, t) {
                return O.current.useMemo(e, t)
            }, t.useReducer = function (e, t, n) {
                return O.current.useReducer(e, t, n)
            }, t.useRef = function (e) {
                return O.current.useRef(e)
            }, t.useState = function (e) {
                return O.current.useState(e)
            }, t.useSyncExternalStore = function (e, t, n) {
                return O.current.useSyncExternalStore(e, t, n)
            }, t.useTransition = function () {
                return O.current.useTransition()
            }, t.version = "18.2.0"
        }, 60: (e, t, n) => {
            "use strict";
            e.exports = n(564)
        }, 496: (e, t, n) => {
            "use strict";
            e.exports = n(36)
        }, 692: (e, t) => {
            "use strict";

            function n(e, t) {
                var n = e.length;
                e.push(t);
                e:for (; 0 < n;) {
                    var r = n - 1 >>> 1, a = e[r];
                    if (!(0 < l(a, t))) break e;
                    e[r] = t, e[n] = a, n = r
                }
            }

            function r(e) {
                return 0 === e.length ? null : e[0]
            }

            function a(e) {
                if (0 === e.length) return null;
                var t = e[0], n = e.pop();
                if (n !== t) {
                    e[0] = n;
                    e:for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
                        var i = 2 * (r + 1) - 1, s = e[i], u = i + 1, c = e[u];
                        if (0 > l(s, n)) u < a && 0 > l(c, s) ? (e[r] = c, e[u] = n, r = u) : (e[r] = s, e[i] = n, r = i); else {
                            if (!(u < a && 0 > l(c, n))) break e;
                            e[r] = c, e[u] = n, r = u
                        }
                    }
                }
                return t
            }

            function l(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }

            if ("object" === typeof performance && "function" === typeof performance.now) {
                var o = performance;
                t.unstable_now = function () {
                    return o.now()
                }
            } else {
                var i = Date, s = i.now();
                t.unstable_now = function () {
                    return i.now() - s
                }
            }
            var u = [], c = [], d = 1, f = null, p = 3, h = !1, m = !1, v = !1,
                g = "function" === typeof setTimeout ? setTimeout : null,
                y = "function" === typeof clearTimeout ? clearTimeout : null,
                b = "undefined" !== typeof setImmediate ? setImmediate : null;

            function w(e) {
                for (var t = r(c); null !== t;) {
                    if (null === t.callback) a(c); else {
                        if (!(t.startTime <= e)) break;
                        a(c), t.sortIndex = t.expirationTime, n(u, t)
                    }
                    t = r(c)
                }
            }

            function x(e) {
                if (v = !1, w(e), !m) if (null !== r(u)) m = !0, D(k); else {
                    var t = r(c);
                    null !== t && R(x, t.startTime - e)
                }
            }

            function k(e, n) {
                m = !1, v && (v = !1, y(N), N = -1), h = !0;
                var l = p;
                try {
                    for (w(n), f = r(u); null !== f && (!(f.expirationTime > n) || e && !P());) {
                        var o = f.callback;
                        if ("function" === typeof o) {
                            f.callback = null, p = f.priorityLevel;
                            var i = o(f.expirationTime <= n);
                            n = t.unstable_now(), "function" === typeof i ? f.callback = i : f === r(u) && a(u), w(n)
                        } else a(u);
                        f = r(u)
                    }
                    if (null !== f) var s = !0; else {
                        var d = r(c);
                        null !== d && R(x, d.startTime - n), s = !1
                    }
                    return s
                } finally {
                    f = null, p = l, h = !1
                }
            }

            "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            var _, S = !1, j = null, N = -1, E = 5, C = -1;

            function P() {
                return !(t.unstable_now() - C < E)
            }

            function T() {
                if (null !== j) {
                    var e = t.unstable_now();
                    C = e;
                    var n = !0;
                    try {
                        n = j(!0, e)
                    } finally {
                        n ? _() : (S = !1, j = null)
                    }
                } else S = !1
            }

            if ("function" === typeof b) _ = function () {
                b(T)
            }; else if ("undefined" !== typeof MessageChannel) {
                var L = new MessageChannel, O = L.port2;
                L.port1.onmessage = T, _ = function () {
                    O.postMessage(null)
                }
            } else _ = function () {
                g(T, 0)
            };

            function D(e) {
                j = e, S || (S = !0, _())
            }

            function R(e, n) {
                N = g((function () {
                    e(t.unstable_now())
                }), n)
            }

            t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) {
                e.callback = null
            }, t.unstable_continueExecution = function () {
                m || h || (m = !0, D(k))
            }, t.unstable_forceFrameRate = function (e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : E = 0 < e ? Math.floor(1e3 / e) : 5
            }, t.unstable_getCurrentPriorityLevel = function () {
                return p
            }, t.unstable_getFirstCallbackNode = function () {
                return r(u)
            }, t.unstable_next = function (e) {
                switch (p) {
                    case 1:
                    case 2:
                    case 3:
                        var t = 3;
                        break;
                    default:
                        t = p
                }
                var n = p;
                p = t;
                try {
                    return e()
                } finally {
                    p = n
                }
            }, t.unstable_pauseExecution = function () {
            }, t.unstable_requestPaint = function () {
            }, t.unstable_runWithPriority = function (e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        e = 3
                }
                var n = p;
                p = e;
                try {
                    return t()
                } finally {
                    p = n
                }
            }, t.unstable_scheduleCallback = function (e, a, l) {
                var o = t.unstable_now();
                switch ("object" === typeof l && null !== l ? l = "number" === typeof (l = l.delay) && 0 < l ? o + l : o : l = o, e) {
                    case 1:
                        var i = -1;
                        break;
                    case 2:
                        i = 250;
                        break;
                    case 5:
                        i = 1073741823;
                        break;
                    case 4:
                        i = 1e4;
                        break;
                    default:
                        i = 5e3
                }
                return e = {
                    id: d++,
                    callback: a,
                    priorityLevel: e,
                    startTime: l,
                    expirationTime: i = l + i,
                    sortIndex: -1
                }, l > o ? (e.sortIndex = l, n(c, e), null === r(u) && e === r(c) && (v ? (y(N), N = -1) : v = !0, R(x, l - o))) : (e.sortIndex = i, n(u, e), m || h || (m = !0, D(k))), e
            }, t.unstable_shouldYield = P, t.unstable_wrapCallback = function (e) {
                var t = p;
                return function () {
                    var n = p;
                    p = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        p = n
                    }
                }
            }
        }, 724: (e, t, n) => {
            "use strict";
            e.exports = n(692)
        }, 372: (e, t, n) => {
            var r = {
                "./Document.png": 152,
                "./Excel.png": 360,
                "./Formats-transparent-p-1600.png": 16,
                "./Github.png": 252,
                "./HTML.png": 960,
                "./Harpo logo.png": 864,
                "./Hero graphics-p-1600.png": 4,
                "./Lightning.svg": 912,
                "./Mail.png": 44,
                "./Mockup 1.png": 771,
                "./Mockup CLI.png": 760,
                "./OCR.png": 136,
                "./PWC logo.png": 708,
                "./Tausight.png": 272,
                "./Wings.png": 48,
                "./facebook.svg": 20,
                "./github.svg": 440,
                "./linkedin.svg": 905,
                "./logoDocWire.JPG": 228,
                "./slanted-mail-p-800.png": 772
            };

            function a(e) {
                var t = l(e);
                return n(t)
            }

            function l(e) {
                if (!n.o(r, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return r[e]
            }

            a.keys = function () {
                return Object.keys(r)
            }, a.resolve = l, e.exports = a, a.id = 372
        }, 912: (e, t, n) => {
            "use strict";
            e.exports = n.p + "static/media/Lightning.408599474eb00c16136b.svg"
        }, 20: (e, t, n) => {
            "use strict";
            e.exports = n.p + "static/media/facebook.501cb74b0e528cb60b53.svg"
        }, 440: (e, t, n) => {
            "use strict";
            e.exports = n.p + "static/media/github.0a4a67452b88afe49abb.svg"
        }, 905: (e, t, n) => {
            "use strict";
            e.exports = n.p + "static/media/linkedin.f9a76fc4304efe6111b9.svg"
        }, 228: (e, t, n) => {
            "use strict";
            e.exports = n.p + "static/media/logoDocWire.1b7fc94e1a27836aa427.JPG"
        }, 152: (e, t, n) => {
            "use strict";
            e.exports = n.p + "static/media/Document.2452c17051b90a5ad3ab.png"
        }, 360: (e, t, n) => {
            "use strict";
            e.exports = n.p + "static/media/Excel.05b42e24ed21fa197704.png"
        }, 16: (e, t, n) => {
            "use strict";
            e.exports = n.p + "static/media/Formats-transparent-p-1600.6bced0464ffbb13a0415.png"
        }, 252: (e, t, n) => {
            "use strict";
            e.exports = n.p + "static/media/Github.f968c33ddc634c5ec49e.png"
        }, 960: (e, t, n) => {
            "use strict";
            e.exports = n.p + "static/media/HTML.6a6cf6ff8efd10fb5520.png"
        }, 864: e => {
            "use strict";
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAAAgCAYAAAB5JtSmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAeLSURBVHgB7VlraFzVFl57n5M0ya3X3EtvbW6m947eK1K40sstF0FRp/6qKDSKRiZJmylUxR/aFkVBkSQiilBoiw98oEnavGh81GcFX1NEFLU2Iiii1mnzKlp1qrSxyZy9XOvMPid7zpwzmaD+ceYjO/uxvrNmzrf3WXudPQBV/O4QiyHH9l5bL+aWXqIkLgcppED8CR01Xf/dtx99ecv+01BFKBYUOd6banTqnFsRxDqinw+AS0JoJwHhfXI2gPbM8ETr6AxU4aOkyM1DG7YKIe6l5p+gfJdTCvHKqbbdh6AKFzJ0FNEVXwgco6oOFgEU2Fhrz0xDFT6KRG4a7GhfOZJ6hNsTyYE0rfU0LAIih9szraPHALtkbHjD/qZnN6yCCkeByM1Dmy6zpBxAxBuahpLLeIwW9Q4oH9/lrLlebvxj75ErSPJ11mnxZnw4FYcKhi/yChJCCjXkdgSP25u5OZnsf5nixlGPh4A5AXi/cORNCLDHdEb9l44lRzLcVuhc47nOgRpp7G1phAqFL7ItnB0k4Fle3xJwtdcWAp7w2wrWjyf33Dne0ffoZHL3RorbOz2bAvkk12teuKGBgnOH8TkXLK1r3AoVClfk2N7UOhKlpdAk1vxtb2oFt+w5212xFEa+mWjf80oBy7EfpMoh4+HpZN/bPDb986mLoCjeO7efOdj2F6hA2PxPKLwRi22yTuHlVPd+3fHkkdhI5ycUJpqgq0tCT4/ySZY4QyFIykde98cc6zo3eBRA1J8ham4+AXBP2BehCfwvVVt0t4dSx0yEbRvZshG2LNm2Bfzy4llvDPG1GSrPBz6jm6p/BnicXR0weZobpypFZTUVLwzuC/r0YC8f2nwW4mwLhICU/D9VvdrzsyRUV2zVV8kJgEGPk1O5TRTDKaJYw94YTcZqDHMosQ0iRNZfNqXbfZAXIszWDXkBPGwxbCwA32jasK827QZ2Epcns1v3L6WSCOFliXeV55PaKap2wLy4HvjarZo7ZhpkrZz9H0RAKOWnX1LAh/m7kAPNwxtHYkMbbo8Nb3yHFHVX0c9Hvz+Yt4Ogv9WhDhHOa36mPQa/LRK69m7s0ggeT0yKCu8NGT3WpZ8EE+kAj8V0F5pewb16LKN5CSqbdJ/tbxGvYAKkVHA5RIBCwDlrHltTkyfKD0mkU9ymN5XraO0+QM0LNfPw8Tte+IlbsdGNf6d+TZRPmRMXw28EupkE5G+MBfTCRNQGy6Gkn8ouaq81xoMLImPwevRYnD6LQ0mXwVureRxO+iAvNIMF3mI6lEqIcyECAsWy4w2r3Hw509p3jGLCkQiqH4/FHP4HSgAdayUsDL4pv0Dxo+mhU9ccD3kls9iNWvxSMP1loXx4q35fMPbqcJIJ8FzYgKqOI2ooBDQ49Wqp30fYTmne+UEabXyv+hQpY8WbnulS/RkWRh+UB28v4Zvm2JnWY7zRpQNcFp9XohnfedU+H8JLQP4J6TJ4R4zQkoFwjOnrCkUWQs5iCVHUrO2LPN62+ylYAHT+uVRFu+NPcmBhZAL9RgisZp01eGMHdM2C8XhKb2rZgI9uo5+G+UfcRAvMT56HbYH+YlY/2BR3vy2hMYtWC4sAKmHz1hdpB/gBFkaKY51/TX5lvRXgdBrtQ8QxbSwor6a0McbC7IS8gGzLhqVbMJ+6eaneLoPHdVyXMDQaPB+UJ+MHVLdDGWgeaI8pWVMUc2dOw3vZTX352ZVY6sGgSZAfwK+E3r3N1RYPofHmkzb6LGoPp3jU5mPYFmrzUe7OwHUcesJWOMMLB3xtMF/n8YTB8yEtsN6GElA1YtZrC9tqsYTaHyz1tfgv/wIUJX4hwZNTtafeg18PU2BelXGjeKIlgqkUQ+ew3brbpcUpF7t07aZ1XozWT9pzITwXctmJmk+IFX3+O6NO+V+QXqLDKBLm/HEF6keIRhpaR8uJyQvBCxVjJNrHvCl5hcb6tY2FWB9xPYuQASMHLgc6g+jWXZ5oDlP83HIo8za77mAYkgdvfHxOSPlwhN+TQsnjXgcdtMJp82GbwvHRCF90vSp1bOrFwMwCNj7/iOv2viBRr9S0tifC/OrH3H+BIJ06DU7JTY1Djr42bXCzup/Q9gK4ZxfWEvFwbkbdRh4Cjxd+M3n4HH+jokSvNizcSpzzXz5Qqa+EVTwXNN/vTnYMvgHRX57FObtM29lQAsRfGxjaFcJJB/z0Q5nQLx995fLdk7LMVbRpId5dZEUxbh4G0YtLfZgTErbBa5/b/O9jNBG5AGXWUs5mqFD4x5ET7QMPkdCjhWYcLyALbAhzomzbf8FIr+1hgScK7KDuOtox+ClUKArOfGvt+utJaD8/pcfic9NOBz9nhjqRsuAtjl4gP5u/Bu+dSg5shwpGgciHWx8/4UCOfzZyf4ZyFLxbwBa4PMwJhYfCV2WU7yO42+59k8k9d0OFww4OTLcNczbRvnK481DTeUsOTJlGhL+GORHO/M9WLk3N7kNhHZxq2/0iVFEssofxZP/28eLhcJEFrDD7k+1DnA2MQRUu7LKZ9LMTqq+fJkGzLCqlHPWU0tHbIH6Rs/A1qKKKKv7g+AXth+z2QpJpHAAAAABJRU5ErkJggg=="
        }, 4: (e, t, n) => {
            "use strict";
            e.exports = n.p + "static/media/Hero graphics-p-1600.96c4561d4dd1c79877a7.png"
        }, 44: (e, t, n) => {
            "use strict";
            e.exports = n.p + "static/media/Mail.df18f0a17f3edcc1f860.png"
        }, 771: (e, t, n) => {
            "use strict";
            e.exports = n.p + "static/media/Mockup 1.deb06212d2c880d0d96e.png"
        }, 760: (e, t, n) => {
            "use strict";
            e.exports = n.p + "static/media/Mockup CLI.2c355d8a51e7f73edbfc.png"
        }, 136: (e, t, n) => {
            "use strict";
            e.exports = n.p + "static/media/OCR.302a81e8ffd43ab0ec32.png"
        }, 708: e => {
            "use strict";
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAAB9CAYAAADDRqOYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAtuSURBVHgB7Z17sFVVHcd/555777mXd4BCgEojieajkmbUilLKbHqYDdY0yhgCFqPBdIMYR8ck7SmR+UeFOdDDZrSasrKoSKDJIXK8TWmipqSoJQjI+z68cM/y+3NtxsO+57H22fts1r73+5n5ci777LX2Pmt/93rttdbOCfEaYyS3d/U7evBnQVIGx1497prOBZIyTUKIZ9CUxDtoSuIdNCXxjmYhfrNccsWJ/ZLL5SR18oWRXetunhTePKxlTHfuoo590iBoSs/5x/YZ+QmHdh6XEq1w0umzi01tl4W3Hyz2/A4fs6VB0JQZAF0zkhMjaWNMLo+PfHh7zm5vGKxTEu+gKYl30JTEO2hK4h00JfEOmpJ4B01JvOM4PCYgUeicIS2jTm/rQi9li6RM4cTh0j5t3IDtzcPlQOEU81+pAx2K1yrNcwqznthSaR92nmeA4uEjcjwo9vWI6d0zYLtpbRllzMi3S530m97h1b5n8U28g6Yk3kFTEu+gKYl30JTEO2hK4h00JfEOmpJ4B01JvIOmJN5BUxLvoCmJd9CUxDs4SigDdPcaMUVJhGHtOcl5PmCRpswAB7skMQqtuOieX3UW38Q7aEriHTQl8Q6akngHTUm8g6YcamRg/iqn2HrOnTOkZdLBpsSm2I5ty0necSG/wogWaR838KUU+fZmKYxvl3pp7p+7uUmm76/4vRDv6evGPwktT9l3BBfdMSvKHTaSPzKw1z7fWpRcV73TfhHn+NYLTKHyD2LxTbyDpiTeQVMS76ApiXfQlMQ7aEriHTQl8Q6akngHTUm8g6Yk3kFTEu+gKYl30JTEOzhKyAF9ieyvJudnGzEnSMo07ZQmU5Qfm6SGGRr3AUdGD1lu55yxr9at+xT0nbyV5wxzPKUDSP6m+ybn18OUF0r6mJZiccSl26Vbhggsvol30JTEO2hK4h00JfEOmpJ4B01JvIP9lA6g36x4f67/M4f7ZLwcB3p3yitCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgipH2NMTiUNIoh/0M4acEo4JIC+WOg90Meh86Gjrwf6di6Xu7vM/hrvadD7oXOgE8VOvdgFPQzdh3A7JSGC442QY6d3vIJj9EaIIx/EUYlDiK9fqsdxNj6+BL0XGgnthTZBNyDs0xIRxKczA2ZCs8Sm+1RoLNQm9rfqy2wOQDugx6C10O9xrEMyGEGCjIQuh34O7THl6QiFaYc+DT1iqnMYWg+dJXWgNwl0LrQYuh/aDhVDx7gtYpwrqpxvP3RxlbBN0I3BfuU4BF0ujmDfs6E10F4Tnf3QaugUGQzgh0yEroU2QD0OCdARhNOLcgW0zUSjG/qKqVHU4fvR0CXQ16HNQcLXwtmU2PcsY2+UStQy5Sjo5Rrn0wW9rcZ5nAT9zFQ2dxQ0jRaYLBbzOOl3QTdBj9aRGF+ALoQ6TTzuhoaXObdV0NNQn4mOkymxXwHaWCOuJEyp/NSUuQGxrc3YXL/buKHH0ozjL6b2eX/D2GpAdjDxeMYMLDbr5btlzq2e4usorqac7xBXUqbUasYJobBaTVpl3NDcT409zdjGjsu5H4GukAwRN2t/kyS3cttCJN4lkiI43gR8fE3SQxs/rSXHHxYc/7MOYZ+DrkQjZg60FXJdi08bcLfiWOMkI2i2/p8y27Xl7Gq2Hkhfk3soCKMJP1aizynXG2QlEu+BklburdCp0IQgTk3Y0dDJEvNmMLYY/bzYnoG02Af1lhz/c4FqsRuaj3RZL/WhmcdboAclCxjbSAnrOePGXca2FEcH4fJ6R0IzoS+byq32asyvcq5aZA2DHnKI57Yav1vP+4hxI6ni+w8mqFPi83zjXof/YoXjuhTfR5knGaEJd18xrAjhH8f+/4b2B2H7oZehB6Gb8f1HoEclGosqfREUWX1i++fqBhdI36B+l7ze35oGeu6r9TcYW2yvEbfqk/ZBrpL4JPIS+zRoaHcBLsDf8HEltDVCsLfior1ZGssnofMkXfTmXBv8/QHoDMdwauSDEg+9IZ6RjNDwPiwkqD5pWCnuS20rF0uDgOEn4uMOSZcuaBnSojsovm+MEPY3Ep/noX9KRkirY3W12MdgrsySBhAYQuuaoyU99GZcAUOuC/4/DZrhGFarKluqfN8jtW92bYDeguPvloyQiimRIIfx8VCEIHU9fnTgArHViVIavaJZJ/QdOfYcXHsOtmnuWuX7e6EPQRtkYD1b2wbboGsQxxrJEGn29D8ALXDcd4rmahH64mpiXu8TLL0RNX4typdJY3gJuk4bgiXb3i3uPF/ty6BR+kf8tj+J7TrTerJ2l6mR/wV1Yp8uyRhpmvKJCPtq61g7mZPMxa4VO9KpFM1htM4W15Q6kmdUaJsWrR0wxcOh7VPFnf0uOwU371aJ1qD0ljQf1u+NsK8Wb4l11xg7YqZDji02NTdZDPVLDIK4tcum9AZXk+iwvnvKBHmDuBPr3LJKmqaMkutpsZTIBTF2lMxXoUmhr26HaR6XGBg7BlN7FqaEvvoFdEuZ/fWmaBd3RsgQJE1TRsn5tNjqk2TQ5+nhsYzboG9KfDT3/Vho2yNii+0B5x8Us1FutskyBEnTlCMj7PtUEo0c5Eza9bMCKpRs1lx4YdwOacR9KT6ul2OLbX2ufTXifrFKUKd6YsB0HKdVhhhpmjLKIvabJRnmQGeGtv0WWicxgFG0uP6W2AEipWhLu1Yn9Q5xR6c9nCZDjDRNGSVx/yzx0fkyN4W2aS61KE4uHNRRvweFH4VqY+eHDlFskWh8SoYYaZryIsf9tC7WKfHRyVsTQtvugCH/J/G4AfpgaJtODrve0exRc+mrcSO0yRAiFVMiUbUPz/XR4U9wcXdJfMKtXG2ArJQY4HdoP6fWI0tH3OyBPhHqIK+G9lv+X9zRXoPrZAiRVk6pLVSXluTRJyxJoy3eJTDOAakfHWSsRXTpXCJtNM1FvNsd49AWuD4OdCnmS1mCG8J1VNEAjB3vOVOyjHEf5NvhENd46AXH+L7vEF8ztMlE415TYfIUtp/nEF7nIZVLk+VSB8YOio46/+hJ6NSIxxkLLYN2QL+WLGMSMiW+HwOtdYxLj1lzaoKJbkq9IaZUic/FlOX4pbHP0+sCYRea6OyE5hrbaV8pXh1F/E5jJ6PtKwmbGVM27Nk3EmG62NHdLsWGPvKbm+SqGSXcnkDjJsxT0NIaI3hq8QOxI/M/HCGMzoTUET9LApPpoAvtYtI6rt54OrpKBxDr/PKGLRvTaBI1pbHTDHSkymXQVeL2nFcv7FW4wBslef4u9sZIEp38NQ/n+6zEQEf4IL20u0fP8cwoQcWar1HD+447cU2pq2l8NIhHDThVoj2vfUFsDrlBkkdH6SxPYCpBKdpI0UeImyQBdM0fpJ92lWl8jZ4Ckm2Me52yXnQWn06qjzzgwLjXKX/kGF+UOqWu0ZN4sWjsci0bTWPQ5Wh0FuW5kmVM40ypy6/oWjnnSJ0YN1M+C73RMT5XUz4GRXl+H/V36dIti4xdDCsJdDUOnUcfqcXuLcbdlJrjVVu2RedV69Iu90DzoLESE1PblHo+iyPE52LK3SZGP2EUcJxJ0NIg3aKiPQ2am88ydvnGTFK2KMIP0iVCTpbaLIXuFPv05Kg0MbTupcPwd6Pe1CMJYmzxqSs+VOqO0bnnzqPcja1CTK2x2y7E+ZKkSPA7dQDxGYG0dT1G7Ih87bTXdNVGl9bLn4S2ROnEzxwmwc5zQqIyaJcoJtmFpiTeQVMS76ApiXfQlMQ7aEriHTQl8Y4BpjR26oIruoh8tt48QLxHB4TqUxh9QvI+seP7dCyeTod1yUV1kpeOVdQV1XTo2V/FrhTW6JXMyGAGplxu3Nf+rsVr720RQmKguaGuHpHUYlIa35Bc/4YkBxs6xDteBU2z2VhG0xZ5AAAAAElFTkSuQmCC"
        }, 272: e => {
            "use strict";
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAAaCAYAAABl/7RgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAyBSURBVHgB7VsLcFTVGf7PvQuYKJAgIghoQlLkYadF8dGqGBxbdUBBSAK2KthRq522ikJtp7YMCqJ92EE7085YFBW0EkSkUMFqxQdSiyhqjSAhIVEeCkk2mxDy2L2n38c5N1yWzWYTicDI53ze7D2Pe+45//lf56IkBVQXZH3bUe5s/HkhmKGUNIuWSk9kkU6Pzc5csC0sx/GVQ2vdA5c+4AAQyyHrlFLN0olQbVWoLcgdFnP0QqV1hvJkccyLva2Ue6py1XViBGhxXX39jf1X7KyX40gKLPB4XMaBK8HnsLhaOgj0dREuC8Ce4Akg5z8PfX4snYikArP76jO7d+kWXemIVx1r1lMylx3QJDovL1Tbu/x27agHoW2e/VRKbzyrSJqkA7AT+S3pGOZjkj6Toxx4R2qBMjAEloKjMe4K6SDQXxouZ4EF4AwwbPvcKJ2IULLCLmlNVyhPdY0XFkKtWRPVBcMeCeuGoY7IlNNV9t8xH/+QjuEa8AYxE1pu70XBXDDL/l4NdguM+wJ75f2jXmDEmAyaC465UoxG6DAgGPtwWQ/B6S9fAmifjsuPwG3oc0VcGRXK2eAIMeuxwUnaW0zOi2k9I15YWgZdVNwUctw/YvR1ot1xOgUT1wr62us0DHq05ffwe1mgzq2Bsovx+5/2fpocA8CYd+ByLXgPeBt+75GjA2eAd4ETE5TRPxooRsg5z+ckFRjI187MJWVvJqtz0pAtm1FxJepeUj/5zH7SMaTb6/upN5Gt9tpTjhFASF4A54Ab5OjBEDFCkwh0qqnxqdm7kklNkhLnNaiMpI6ZmiVeTaEHJ05Nboo1UiJ3SPtBDVMHtsemf5roJtQoN8Fp4OliJoKqmyZrk6ImPFCPjuJgMcKaCW5BeUmgvJftg+UZ7APlHyR43sm4ZIsxnexzG7iL74L6TbZOVzsmPudUsAZl61oZPzfAN21/XB9q900gx9ZdTKAxFFyOPja30seJtg5NOk1JsX1/L64eBeEHYizDCfidFShusPN2NfhfMRomufnTMyW5ybKonZRzVk1hTjhckJ0v7QQnE6wA30xQ9id9AFlxZRPARvCmQD+F4KtgJegF2rLeGrBvoP15YC3YbOv8Nq7/aeA+MGrLH08w7jvAEnAn+C74P9umBvxboC7HFQYbbF8vJ3jXdPvMLeDn4FvgWjvGCLja9u+P5xLbbrz9XQ5eCN4HfhaoR9SDvwbdwPOus2P363Hc1QE+Yut1AUeBF3GTJdcw0B66QNyI5GRr8UBJgyh2dZVTGdXRbRnDystZJ6pidY52axxvv2S3F9w13D1vSPtAk7RezA4kfgreK2Z3r7LlMTAPHAVygmfhpW+14SyjiQngEjGqN97/ehSkRpkvcSpbG2fwenAO+BZ4O7gddO3zisCcQBP2QwGaLGaXunIobgPvt+NiysIPjxkJPQd+X4z2WihG62+Pa9/bjpla5Ck7N9SQd4rxQ34F0qn1zT61BwKV/RqGGrLEzoWPj/g/m9d53b/ZqsCEJw4c6bhdb4qIyjcz5LyMC3IwalPUi2n01LO6eNBwXVBabFfMc7XTbkcO/TFiuFTaCbTji18UuPW0mAmlqo76NzFmLioXa4qYxaSftYPmAmUfiolWeiTovw7l9DWq5VAbTyG/RYy5Woi6xYHnrRFjQoJ98fd0bczX1PhnaRNyPyBGaP+M+m8Hiqlp5uI6T8x6zQ6azgBYtgB8GOUNgb652DR/3MznixUY1KHG/Q/+PEeMwLyDe7OkDRwkMPqWc7pUV1Vd4DrO3ZBhqDdZpbzmqyuc8neS5VjCk2KuqJDX5MW2yxECXpaaZWmC+1FrAigwp4jZiR3xs4Kgqfbnbiz6XxQQUu6fcdJGyiIOo239vWKEPh6+b0eTyndIJDAU/JeCwhJoy7xPMuc2ZbS8lL6lX3ptOPzDkHKotj9X2r2+x5ItK1LpREmXXrSTUUd/vr+vggJXFRXF5AiD9leMsxaxt7iDU/LL2gAd6U/E5CiYQ3oMz6I5LLWOZYl0DBxfeoL7/jrxPdo7rxRkX4i+9Lu3dBCuSr8ThnGep/SLTY1dRlFYkJjrmkonmKLh4Ie9l5Zzl0tN/ds9qgtyrqmempUhXyGwaA6dY/BG8BncoiNNszJfDiMgFI24/EGMnac/Qn+GPsMLeG4+eJK0DzRBXFgK9wXWRwriYnv9yPKIYb/AhCflTHYcuQeO7XLdVHXXKcs319ryrpGJWUOSdaBnznTg0IyG1Lzoh+A90ysiuNng7A1N2z62X7p8BdAmnKbz+Qr4VzEhM+03D03nyeHHu+DNYhKIDNe5OcaCjKYWYDwpH3VAAKmtOGYKyo9BRjBngP1AJtSmitFqc1F3rxxBOBQIbMuHsNJrY1F3euaycCCrG4lp5VyaLLyuK140RGnvRK9Zt0Q5qkhiPZZsXSU6ltk9PW0OIy3pRFjT8yD4ezELx2OG8zG5M8AnxGiawwpGWjaXQiGhM/k7Mb4RtQsX+Qltcjmp4hdioiTmaZ4UEy1Rm3D8r4qJ8lbJEYYjIfcqT1SmF/MeP3lpyUFnMqros31adFNk86ArW+sAfstIcdXKjGXbyg9qS22jZCEEccoeb+AI6VwwYcjwkILJSV0WjJSSgP6A78x3yHxawWGUxLCVpsM/zqCGuSr1noTC9R1wkZjo7ydijhIYxVyLZ6z/MqfbhwuO9qQQ6qM000lbnKiCp6gv1HXhCacPii+rHp+V4UJtVnilixJlhHtI2kYet3dzQoXSuaCGOc3+XWF9jFTAHEOV/btvim2o0fpqkyCc7t+jswsyGqFJ8aOaLEkdTEAyi7sE/awFnwFXM5trDxqPCjhwr4bjxTfyIDFRhV5FpTXwbR5ToS5FOyZkt4RlNFNuCGqyft/81kJu9ul5egdUzdBUHegOgtrkC/v3GG3S62acEGhJkPuwoD/g51CYyRwYaMc0P8PjQQnasSwPvAb14sNnbcdDYdwqqeM8Mec1l6HP/mAmmBHH9oTqqcLf6IO0+WRi/6cTYO9ElUNKdIMyE9AqekrZvyM6d8WJIec5aJrCjKUVpVI8oFuD2vtKnxW761odSV7WCRGlMjCCxm2761MK6WwSiw4rbXluoGgiU9liEmlMMgU/D6CwPCsm28vM6POoS41JU8Xsqm9qOeGMokqYmGMWE38zu0mfg89djN9+LucKMcLCLC1NxACU5ckBf4gTzbB6Du4zCovY/m+37V4DX7bvlIXL8MD7cAxjcC3GGMrsPUZKNP0/EyPgO+XgTyAohJv4LCbdbL/s80JbzjXkZmmwiUKW8/156u8v/tm4dzmua+25WrOdT4KfizyNcvqwZ9j2lx/yBV+kMOf5cGFOWWRS9mBJAmqI6oLs2ZGCnA+q83NuKJualVTIiJpJg89F/5XhwkH3S4rQ5vyorA3mJ2jXm1ldcKs9O+H5y0Zwsg21P9HmjOdTbc+fbDvuJp7hbLLl9baPuczM2rJKy/cCu/1mcLk2Zz/btTn/IT/W5jwnqOWmt/IecwN1RoI7wN32+cF6PCfiWQ/RaPtjCuHRBH3O1+aw0z8vSvTcywLPHQ2+r835Udi+D/vgWdshm1xF8r8x1nM87Eb9eHND5JenLN9T29piflEw7KRubuPdOK24GVppneepvzQ3uesCYXgL6ifkDoi6+ilPyQgvKmN6Ld26VlITGPoSbQnjnuDJc6AtX5Cagv4Mk1VMpFFw6ONwQ/B0ljtqu3+SHGjXz7aj5tjlf8WnTU6FGoMJOR4pVAXaUaNwvHRYebxQZ/veHTcu7vBEuZkw6nKR2P4lMSfM1AD0gYKL5Y//PjEfM3Eux9n78XNV539ro803v4kitV1xxwenxr37LmkFCko2VNNn0Cwlajp+lcIJftgNRV9XUaeyAeeMrtfYx405e7svKyuBkHiLESJf5mZ/19XqAXSPcNKpQLvXEEK/5zlOZL9582SUIwq2WPjfjC1lGc+M3LChUz9OPpaBBXsIl2ng8+DE1qIh1GMkRm3NBR2RbGE7CyFYw6ieWfqb2o9z1nue3OE46l4vRo2mwyEV+zDkOku1s2+1MjtMCosYipa9UXll7pWh7t4Y8WJTxFHjEdFOdbyWF6vXSr+ltJ5XodJeOi4sbeJce61pI3T2nV460zVyLKO+YHD/qvzsi/lPUnQK/s1xHAA22L+sf8JvatJaqTMULNXm+53r5Ti+vtDmIyg62zFwJchoJ9c663RK51mndBf4c9+pPY6vMag1wI9spOZ/BcfrXm0iuycZucgRxv8BsXNjPYLaZiYAAAAASUVORK5CYII="
        }, 48: (e, t, n) => {
            "use strict";
            e.exports = n.p + "static/media/Wings.aca91789c1f0c97c8a1c.png"
        }, 772: (e, t, n) => {
            "use strict";
            e.exports = n.p + "static/media/slanted-mail-p-800.a27915f7bb633a09d4a5.png"
        }
    }, t = {};

    function n(r) {
        var a = t[r];
        if (void 0 !== a) return a.exports;
        var l = t[r] = {exports: {}};
        return e[r](l, l.exports, n), l.exports
    }

    (() => {
        var e, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
        n.t = function (r, a) {
            if (1 & a && (r = this(r)), 8 & a) return r;
            if ("object" === typeof r && r) {
                if (4 & a && r.__esModule) return r;
                if (16 & a && "function" === typeof r.then) return r
            }
            var l = Object.create(null);
            n.r(l);
            var o = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var i = 2 & a && r; "object" == typeof i && !~e.indexOf(i); i = t(i)) Object.getOwnPropertyNames(i).forEach((e => o[e] = () => r[e]));
            return o.default = () => r, n.d(l, o), l
        }
    })(), n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {enumerable: !0, get: t[r]})
    }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.p = "/docwire/", (() => {
        "use strict";
        var e, t = n(60), r = n.t(t, 2), a = n(180), l = n(292), o = n.t(l, 2);

        function i() {
            return i = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, i.apply(this, arguments)
        }

        !function (e) {
            e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
        }(e || (e = {}));
        const s = "popstate";

        function u(e, t) {
            if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t)
        }

        function c(e, t) {
            if (!e) {
                "undefined" !== typeof console && console.warn(t);
                try {
                    throw new Error(t)
                } catch (n) {
                }
            }
        }

        function d(e, t) {
            return {usr: e.state, key: e.key, idx: t}
        }

        function f(e, t, n, r) {
            return void 0 === n && (n = null), i({
                pathname: "string" === typeof e ? e : e.pathname,
                search: "",
                hash: ""
            }, "string" === typeof t ? h(t) : t, {
                state: n,
                key: t && t.key || r || Math.random().toString(36).substr(2, 8)
            })
        }

        function p(e) {
            let {pathname: t = "/", search: n = "", hash: r = ""} = e;
            return n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r), t
        }

        function h(e) {
            let t = {};
            if (e) {
                let n = e.indexOf("#");
                n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
                let r = e.indexOf("?");
                r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
            }
            return t
        }

        function m(t, n, r, a) {
            void 0 === a && (a = {});
            let {window: l = document.defaultView, v5Compat: o = !1} = a, c = l.history, h = e.Pop, m = null, v = g();

            function g() {
                return (c.state || {idx: null}).idx
            }

            function y() {
                h = e.Pop;
                let t = g(), n = null == t ? null : t - v;
                v = t, m && m({action: h, location: w.location, delta: n})
            }

            function b(e) {
                let t = "null" !== l.location.origin ? l.location.origin : l.location.href,
                    n = "string" === typeof e ? e : p(e);
                return u(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t)
            }

            null == v && (v = 0, c.replaceState(i({}, c.state, {idx: v}), ""));
            let w = {
                get action() {
                    return h
                }, get location() {
                    return t(l, c)
                }, listen(e) {
                    if (m) throw new Error("A history only accepts one active listener");
                    return l.addEventListener(s, y), m = e, () => {
                        l.removeEventListener(s, y), m = null
                    }
                }, createHref: e => n(l, e), createURL: b, encodeLocation(e) {
                    let t = b(e);
                    return {pathname: t.pathname, search: t.search, hash: t.hash}
                }, push: function (t, n) {
                    h = e.Push;
                    let a = f(w.location, t, n);
                    r && r(a, t), v = g() + 1;
                    let i = d(a, v), s = w.createHref(a);
                    try {
                        c.pushState(i, "", s)
                    } catch (u) {
                        if (u instanceof DOMException && "DataCloneError" === u.name) throw u;
                        l.location.assign(s)
                    }
                    o && m && m({action: h, location: w.location, delta: 1})
                }, replace: function (t, n) {
                    h = e.Replace;
                    let a = f(w.location, t, n);
                    r && r(a, t), v = g();
                    let l = d(a, v), i = w.createHref(a);
                    c.replaceState(l, "", i), o && m && m({action: h, location: w.location, delta: 0})
                }, go: e => c.go(e)
            };
            return w
        }

        var v;
        !function (e) {
            e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
        }(v || (v = {}));
        new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

        function g(e, t, n) {
            void 0 === n && (n = "/");
            let r = L(("string" === typeof t ? h(t) : t).pathname || "/", n);
            if (null == r) return null;
            let a = y(e);
            !function (e) {
                e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function (e, t) {
                    let n = e.length === t.length && e.slice(0, -1).every(((e, n) => e === t[n]));
                    return n ? e[e.length - 1] - t[t.length - 1] : 0
                }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
            }(a);
            let l = null;
            for (let o = 0; null == l && o < a.length; ++o) l = C(a[o], T(r));
            return l
        }

        function y(e, t, n, r) {
            void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = "");
            let a = (e, a, l) => {
                let o = {
                    relativePath: void 0 === l ? e.path || "" : l,
                    caseSensitive: !0 === e.caseSensitive,
                    childrenIndex: a,
                    route: e
                };
                o.relativePath.startsWith("/") && (u(o.relativePath.startsWith(r), 'Absolute route path "' + o.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), o.relativePath = o.relativePath.slice(r.length));
                let i = A([r, o.relativePath]), s = n.concat(o);
                e.children && e.children.length > 0 && (u(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + i + '".'), y(e.children, t, s, i)), (null != e.path || e.index) && t.push({
                    path: i,
                    score: E(i, e.index),
                    routesMeta: s
                })
            };
            return e.forEach(((e, t) => {
                var n;
                if ("" !== e.path && null != (n = e.path) && n.includes("?")) for (let r of b(e.path)) a(e, t, r); else a(e, t)
            })), t
        }

        function b(e) {
            let t = e.split("/");
            if (0 === t.length) return [];
            let [n, ...r] = t, a = n.endsWith("?"), l = n.replace(/\?$/, "");
            if (0 === r.length) return a ? [l, ""] : [l];
            let o = b(r.join("/")), i = [];
            return i.push(...o.map((e => "" === e ? l : [l, e].join("/")))), a && i.push(...o), i.map((t => e.startsWith("/") && "" === t ? "/" : t))
        }

        const w = /^:[\w-]+$/, x = 3, k = 2, _ = 1, S = 10, j = -2, N = e => "*" === e;

        function E(e, t) {
            let n = e.split("/"), r = n.length;
            return n.some(N) && (r += j), t && (r += k), n.filter((e => !N(e))).reduce(((e, t) => e + (w.test(t) ? x : "" === t ? _ : S)), r)
        }

        function C(e, t) {
            let {routesMeta: n} = e, r = {}, a = "/", l = [];
            for (let o = 0; o < n.length; ++o) {
                let e = n[o], i = o === n.length - 1, s = "/" === a ? t : t.slice(a.length) || "/",
                    u = P({path: e.relativePath, caseSensitive: e.caseSensitive, end: i}, s);
                if (!u) return null;
                Object.assign(r, u.params);
                let c = e.route;
                l.push({
                    params: r,
                    pathname: A([a, u.pathname]),
                    pathnameBase: M(A([a, u.pathnameBase])),
                    route: c
                }), "/" !== u.pathnameBase && (a = A([a, u.pathnameBase]))
            }
            return l
        }

        function P(e, t) {
            "string" === typeof e && (e = {path: e, caseSensitive: !1, end: !0});
            let [n, r] = function (e, t, n) {
                void 0 === t && (t = !1);
                void 0 === n && (n = !0);
                c("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
                let r = [],
                    a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, ((e, t, n) => (r.push({
                        paramName: t,
                        isOptional: null != n
                    }), n ? "/?([^\\/]+)?" : "/([^\\/]+)")));
                e.endsWith("*") ? (r.push({paramName: "*"}), a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
                let l = new RegExp(a, t ? void 0 : "i");
                return [l, r]
            }(e.path, e.caseSensitive, e.end), a = t.match(n);
            if (!a) return null;
            let l = a[0], o = l.replace(/(.)\/+$/, "$1"), i = a.slice(1);
            return {
                params: r.reduce(((e, t, n) => {
                    let {paramName: r, isOptional: a} = t;
                    if ("*" === r) {
                        let e = i[n] || "";
                        o = l.slice(0, l.length - e.length).replace(/(.)\/+$/, "$1")
                    }
                    const s = i[n];
                    return e[r] = a && !s ? void 0 : function (e, t) {
                        try {
                            return decodeURIComponent(e)
                        } catch (n) {
                            return c(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + n + ")."), e
                        }
                    }(s || "", r), e
                }), {}), pathname: l, pathnameBase: o, pattern: e
            }
        }

        function T(e) {
            try {
                return decodeURI(e)
            } catch (t) {
                return c(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
            }
        }

        function L(e, t) {
            if ("/" === t) return e;
            if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
            let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
            return r && "/" !== r ? null : e.slice(n) || "/"
        }

        function O(e, t, n, r) {
            return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the `to." + n + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        }

        function D(e) {
            return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
        }

        function R(e, t) {
            let n = D(e);
            return t ? n.map(((t, n) => n === e.length - 1 ? t.pathname : t.pathnameBase)) : n.map((e => e.pathnameBase))
        }

        function z(e, t, n, r) {
            let a;
            void 0 === r && (r = !1), "string" === typeof e ? a = h(e) : (a = i({}, e), u(!a.pathname || !a.pathname.includes("?"), O("?", "pathname", "search", a)), u(!a.pathname || !a.pathname.includes("#"), O("#", "pathname", "hash", a)), u(!a.search || !a.search.includes("#"), O("#", "search", "hash", a)));
            let l, o = "" === e || "" === a.pathname, s = o ? "/" : a.pathname;
            if (null == s) l = n; else {
                let e = t.length - 1;
                if (!r && s.startsWith("..")) {
                    let t = s.split("/");
                    for (; ".." === t[0];) t.shift(), e -= 1;
                    a.pathname = t.join("/")
                }
                l = e >= 0 ? t[e] : "/"
            }
            let c = function (e, t) {
                void 0 === t && (t = "/");
                let {pathname: n, search: r = "", hash: a = ""} = "string" === typeof e ? h(e) : e,
                    l = n ? n.startsWith("/") ? n : function (e, t) {
                        let n = t.replace(/\/+$/, "").split("/");
                        return e.split("/").forEach((e => {
                            ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e)
                        })), n.length > 1 ? n.join("/") : "/"
                    }(n, t) : t;
                return {pathname: l, search: F(r), hash: I(a)}
            }(a, l), d = s && "/" !== s && s.endsWith("/"), f = (o || "." === s) && n.endsWith("/");
            return c.pathname.endsWith("/") || !d && !f || (c.pathname += "/"), c
        }

        const A = e => e.join("/").replace(/\/\/+/g, "/"), M = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
            F = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
            I = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "";
        Error;

        function U(e) {
            return null != e && "number" === typeof e.status && "string" === typeof e.statusText && "boolean" === typeof e.internal && "data" in e
        }

        const W = ["post", "put", "patch", "delete"], B = (new Set(W), ["get", ...W]);
        new Set(B), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
        Symbol("deferred");

        function H() {
            return H = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, H.apply(this, arguments)
        }

        const q = t.createContext(null);
        const V = t.createContext(null);
        const Q = t.createContext(null);
        const K = t.createContext(null);
        const X = t.createContext({outlet: null, matches: [], isDataRoute: !1});
        const Y = t.createContext(null);

        function G() {
            return null != t.useContext(K)
        }

        function J() {
            return G() || u(!1), t.useContext(K).location
        }

        function Z(e) {
            t.useContext(Q).static || t.useLayoutEffect(e)
        }

        function $() {
            let {isDataRoute: e} = t.useContext(X);
            return e ? function () {
                let {router: e} = ue(ie.UseNavigateStable), n = de(se.UseNavigateStable), r = t.useRef(!1);
                return Z((() => {
                    r.current = !0
                })), t.useCallback((function (t, a) {
                    void 0 === a && (a = {}), r.current && ("number" === typeof t ? e.navigate(t) : e.navigate(t, H({fromRouteId: n}, a)))
                }), [e, n])
            }() : function () {
                G() || u(!1);
                let e = t.useContext(q), {
                        basename: n,
                        future: r,
                        navigator: a
                    } = t.useContext(Q), {matches: l} = t.useContext(X), {pathname: o} = J(),
                    i = JSON.stringify(R(l, r.v7_relativeSplatPath)), s = t.useRef(!1);
                return Z((() => {
                    s.current = !0
                })), t.useCallback((function (t, r) {
                    if (void 0 === r && (r = {}), !s.current) return;
                    if ("number" === typeof t) return void a.go(t);
                    let l = z(t, JSON.parse(i), o, "path" === r.relative);
                    null == e && "/" !== n && (l.pathname = "/" === l.pathname ? n : A([n, l.pathname])), (r.replace ? a.replace : a.push)(l, r.state, r)
                }), [n, a, i, o, e])
            }()
        }

        function ee(e, n) {
            let {relative: r} = void 0 === n ? {} : n, {future: a} = t.useContext(Q), {matches: l} = t.useContext(X), {pathname: o} = J(),
                i = JSON.stringify(R(l, a.v7_relativeSplatPath));
            return t.useMemo((() => z(e, JSON.parse(i), o, "path" === r)), [e, i, o, r])
        }

        function te(n, r, a, l) {
            G() || u(!1);
            let {navigator: o} = t.useContext(Q), {matches: i} = t.useContext(X), s = i[i.length - 1],
                c = s ? s.params : {}, d = (s && s.pathname, s ? s.pathnameBase : "/");
            s && s.route;
            let f, p = J();
            if (r) {
                var m;
                let e = "string" === typeof r ? h(r) : r;
                "/" === d || (null == (m = e.pathname) ? void 0 : m.startsWith(d)) || u(!1), f = e
            } else f = p;
            let v = f.pathname || "/", y = g(n, {pathname: "/" === d ? v : v.slice(d.length) || "/"});
            let b = oe(y && y.map((e => Object.assign({}, e, {
                params: Object.assign({}, c, e.params),
                pathname: A([d, o.encodeLocation ? o.encodeLocation(e.pathname).pathname : e.pathname]),
                pathnameBase: "/" === e.pathnameBase ? d : A([d, o.encodeLocation ? o.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
            }))), i, a, l);
            return r && b ? t.createElement(K.Provider, {
                value: {
                    location: H({
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default"
                    }, f), navigationType: e.Pop
                }
            }, b) : b
        }

        function ne() {
            let e = function () {
                    var e;
                    let n = t.useContext(Y), r = ce(se.UseRouteError), a = de(se.UseRouteError);
                    if (void 0 !== n) return n;
                    return null == (e = r.errors) ? void 0 : e[a]
                }(), n = U(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
                r = e instanceof Error ? e.stack : null, a = "rgba(200,200,200, 0.5)",
                l = {padding: "0.5rem", backgroundColor: a};
            return t.createElement(t.Fragment, null, t.createElement("h2", null, "Unexpected Application Error!"), t.createElement("h3", {style: {fontStyle: "italic"}}, n), r ? t.createElement("pre", {style: l}, r) : null, null)
        }

        const re = t.createElement(ne, null);

        class ae extends t.Component {
            constructor(e) {
                super(e), this.state = {location: e.location, revalidation: e.revalidation, error: e.error}
            }

            static getDerivedStateFromError(e) {
                return {error: e}
            }

            static getDerivedStateFromProps(e, t) {
                return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? {
                    error: e.error,
                    location: e.location,
                    revalidation: e.revalidation
                } : {
                    error: void 0 !== e.error ? e.error : t.error,
                    location: t.location,
                    revalidation: e.revalidation || t.revalidation
                }
            }

            componentDidCatch(e, t) {
                console.error("React Router caught the following error during render", e, t)
            }

            render() {
                return void 0 !== this.state.error ? t.createElement(X.Provider, {value: this.props.routeContext}, t.createElement(Y.Provider, {
                    value: this.state.error,
                    children: this.props.component
                })) : this.props.children
            }
        }

        function le(e) {
            let {routeContext: n, match: r, children: a} = e, l = t.useContext(q);
            return l && l.static && l.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = r.route.id), t.createElement(X.Provider, {value: n}, a)
        }

        function oe(e, n, r, a) {
            var l;
            if (void 0 === n && (n = []), void 0 === r && (r = null), void 0 === a && (a = null), null == e) {
                var o;
                if (null == (o = r) || !o.errors) return null;
                e = r.matches
            }
            let i = e, s = null == (l = r) ? void 0 : l.errors;
            if (null != s) {
                let e = i.findIndex((e => e.route.id && (null == s ? void 0 : s[e.route.id])));
                e >= 0 || u(!1), i = i.slice(0, Math.min(i.length, e + 1))
            }
            let c = !1, d = -1;
            if (r && a && a.v7_partialHydration) for (let t = 0; t < i.length; t++) {
                let e = i[t];
                if ((e.route.HydrateFallback || e.route.hydrateFallbackElement) && (d = t), e.route.id) {
                    let {loaderData: t, errors: n} = r,
                        a = e.route.loader && void 0 === t[e.route.id] && (!n || void 0 === n[e.route.id]);
                    if (e.route.lazy || a) {
                        c = !0, i = d >= 0 ? i.slice(0, d + 1) : [i[0]];
                        break
                    }
                }
            }
            return i.reduceRight(((e, a, l) => {
                let o, u = !1, f = null, p = null;
                var h;
                r && (o = s && a.route.id ? s[a.route.id] : void 0, f = a.route.errorElement || re, c && (d < 0 && 0 === l ? (h = "route-fallback", !1 || fe[h] || (fe[h] = !0), u = !0, p = null) : d === l && (u = !0, p = a.route.hydrateFallbackElement || null)));
                let m = n.concat(i.slice(0, l + 1)), v = () => {
                    let n;
                    return n = o ? f : u ? p : a.route.Component ? t.createElement(a.route.Component, null) : a.route.element ? a.route.element : e, t.createElement(le, {
                        match: a,
                        routeContext: {outlet: e, matches: m, isDataRoute: null != r},
                        children: n
                    })
                };
                return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === l) ? t.createElement(ae, {
                    location: r.location,
                    revalidation: r.revalidation,
                    component: f,
                    error: o,
                    children: v(),
                    routeContext: {outlet: null, matches: m, isDataRoute: !0}
                }) : v()
            }), null)
        }

        var ie = function (e) {
            return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
        }(ie || {}), se = function (e) {
            return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
        }(se || {});

        function ue(e) {
            let n = t.useContext(q);
            return n || u(!1), n
        }

        function ce(e) {
            let n = t.useContext(V);
            return n || u(!1), n
        }

        function de(e) {
            let n = function (e) {
                let n = t.useContext(X);
                return n || u(!1), n
            }(), r = n.matches[n.matches.length - 1];
            return r.route.id || u(!1), r.route.id
        }

        const fe = {};
        r.startTransition;

        function pe(e) {
            u(!1)
        }

        function he(n) {
            let {
                basename: r = "/",
                children: a = null,
                location: l,
                navigationType: o = e.Pop,
                navigator: i,
                static: s = !1,
                future: c
            } = n;
            G() && u(!1);
            let d = r.replace(/^\/*/, "/"), f = t.useMemo((() => ({
                basename: d,
                navigator: i,
                static: s,
                future: H({v7_relativeSplatPath: !1}, c)
            })), [d, c, i, s]);
            "string" === typeof l && (l = h(l));
            let {pathname: p = "/", search: m = "", hash: v = "", state: g = null, key: y = "default"} = l,
                b = t.useMemo((() => {
                    let e = L(p, d);
                    return null == e ? null : {
                        location: {pathname: e, search: m, hash: v, state: g, key: y},
                        navigationType: o
                    }
                }), [d, p, m, v, g, y, o]);
            return null == b ? null : t.createElement(Q.Provider, {value: f}, t.createElement(K.Provider, {
                children: a,
                value: b
            }))
        }

        function me(e) {
            let {children: t, location: n} = e;
            return te(ve(t), n)
        }

        new Promise((() => {
        }));
        t.Component;

        function ve(e, n) {
            void 0 === n && (n = []);
            let r = [];
            return t.Children.forEach(e, ((e, a) => {
                if (!t.isValidElement(e)) return;
                let l = [...n, a];
                if (e.type === t.Fragment) return void r.push.apply(r, ve(e.props.children, l));
                e.type !== pe && u(!1), e.props.index && e.props.children && u(!1);
                let o = {
                    id: e.props.id || l.join("-"),
                    caseSensitive: e.props.caseSensitive,
                    element: e.props.element,
                    Component: e.props.Component,
                    index: e.props.index,
                    path: e.props.path,
                    loader: e.props.loader,
                    action: e.props.action,
                    errorElement: e.props.errorElement,
                    ErrorBoundary: e.props.ErrorBoundary,
                    hasErrorBoundary: null != e.props.ErrorBoundary || null != e.props.errorElement,
                    shouldRevalidate: e.props.shouldRevalidate,
                    handle: e.props.handle,
                    lazy: e.props.lazy
                };
                e.props.children && (o.children = ve(e.props.children, l)), r.push(o)
            })), r
        }

        function ge() {
            return ge = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, ge.apply(this, arguments)
        }

        function ye(e, t) {
            if (null == e) return {};
            var n, r, a = {}, l = Object.keys(e);
            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a
        }

        new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
        const be = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"];
        try {
            window.__reactRouterVersion = "6"
        } catch (Lt) {
        }
        new Map;
        const we = r.startTransition;
        o.flushSync, r.useId;

        function xe(e) {
            let {basename: n, children: r, future: a, window: l} = e, o = t.useRef();
            var i;
            null == o.current && (o.current = (void 0 === (i = {
                window: l,
                v5Compat: !0
            }) && (i = {}), m((function (e, t) {
                let {pathname: n, search: r, hash: a} = e.location;
                return f("", {
                    pathname: n,
                    search: r,
                    hash: a
                }, t.state && t.state.usr || null, t.state && t.state.key || "default")
            }), (function (e, t) {
                return "string" === typeof t ? t : p(t)
            }), null, i)));
            let s = o.current, [u, c] = t.useState({
                action: s.action,
                location: s.location
            }), {v7_startTransition: d} = a || {}, h = t.useCallback((e => {
                d && we ? we((() => c(e))) : c(e)
            }), [c, d]);
            return t.useLayoutEffect((() => s.listen(h)), [s, h]), t.createElement(he, {
                basename: n,
                children: r,
                location: u.location,
                navigationType: u.action,
                navigator: s,
                future: a
            })
        }

        const ke = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement,
            _e = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Se = t.forwardRef((function (e, n) {
                let r, {
                    onClick: a,
                    relative: l,
                    reloadDocument: o,
                    replace: i,
                    state: s,
                    target: c,
                    to: d,
                    preventScrollReset: f,
                    unstable_viewTransition: h
                } = e, m = ye(e, be), {basename: v} = t.useContext(Q), g = !1;
                if ("string" === typeof d && _e.test(d) && (r = d, ke)) try {
                    let e = new URL(window.location.href), t = d.startsWith("//") ? new URL(e.protocol + d) : new URL(d),
                        n = L(t.pathname, v);
                    t.origin === e.origin && null != n ? d = n + t.search + t.hash : g = !0
                } catch (Lt) {
                }
                let y = function (e, n) {
                    let {relative: r} = void 0 === n ? {} : n;
                    G() || u(!1);
                    let {basename: a, navigator: l} = t.useContext(Q), {
                        hash: o,
                        pathname: i,
                        search: s
                    } = ee(e, {relative: r}), c = i;
                    return "/" !== a && (c = "/" === i ? a : A([a, i])), l.createHref({pathname: c, search: s, hash: o})
                }(d, {relative: l}), b = function (e, n) {
                    let {
                        target: r,
                        replace: a,
                        state: l,
                        preventScrollReset: o,
                        relative: i,
                        unstable_viewTransition: s
                    } = void 0 === n ? {} : n, u = $(), c = J(), d = ee(e, {relative: i});
                    return t.useCallback((t => {
                        if (function (e, t) {
                            return 0 === e.button && (!t || "_self" === t) && !function (e) {
                                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                            }(e)
                        }(t, r)) {
                            t.preventDefault();
                            let n = void 0 !== a ? a : p(c) === p(d);
                            u(e, {replace: n, state: l, preventScrollReset: o, relative: i, unstable_viewTransition: s})
                        }
                    }), [c, u, d, a, l, r, e, o, i, s])
                }(d, {replace: i, state: s, target: c, preventScrollReset: f, relative: l, unstable_viewTransition: h});
                return t.createElement("a", ge({}, m, {
                    href: r || y, onClick: g || o ? a : function (e) {
                        a && a(e), e.defaultPrevented || b(e)
                    }, ref: n, target: c
                }))
            }));
        var je, Ne;
        (function (e) {
            e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
        })(je || (je = {})), function (e) {
            e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
        }(Ne || (Ne = {}));
        var Ee = {color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0},
            Ce = t.createContext && t.createContext(Ee), Pe = ["attr", "size", "title"];

        function Te(e, t) {
            if (null == e) return {};
            var n, r, a = function (e, t) {
                if (null == e) return {};
                var n, r, a = {}, l = Object.keys(e);
                for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }

        function Le() {
            return Le = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, Le.apply(this, arguments)
        }

        function Oe(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function De(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Oe(Object(n), !0).forEach((function (t) {
                    Re(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Oe(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Re(e, t, n) {
            return (t = function (e) {
                var t = function (e, t) {
                    if ("object" !== typeof e || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === typeof t ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function ze(e) {
            return e && e.map(((e, n) => t.createElement(e.tag, De({key: n}, e.attr), ze(e.child))))
        }

        function Ae(e) {
            return n => t.createElement(Me, Le({attr: De({}, e.attr)}, n), ze(e.child))
        }

        function Me(e) {
            var n = n => {
                var r, {attr: a, size: l, title: o} = e, i = Te(e, Pe), s = l || n.size || "1em";
                return n.className && (r = n.className), e.className && (r = (r ? r + " " : "") + e.className), t.createElement("svg", Le({
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "0"
                }, n.attr, a, i, {
                    className: r,
                    style: De(De({color: e.color || n.color}, n.style), e.style),
                    height: s,
                    width: s,
                    xmlns: "http://www.w3.org/2000/svg"
                }), o && t.createElement("title", null, o), e.children)
            };
            return void 0 !== Ce ? t.createElement(Ce.Consumer, null, (e => n(e))) : n(Ee)
        }

        function Fe(e) {
            return Ae({
                tag: "svg",
                attr: {viewBox: "0 0 24 24"},
                child: [{
                    tag: "path",
                    attr: {d: "M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"},
                    child: []
                }]
            })(e)
        }

        function Ie(e) {
            return Ae({
                tag: "svg",
                attr: {viewBox: "0 0 24 24"},
                child: [{tag: "path", attr: {d: "M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"}, child: []}]
            })(e)
        }

        var Ue = n(228), We = n(496);
        const Be = function () {
            const [e, n] = (0, t.useState)(!1);
            return (0, We.jsxs)("div", {
                className: "docwire__navbar",
                children: [(0, We.jsx)("div", {
                    className: "docwire__navbar-links_logo",
                    children: (0, We.jsx)(Se, {to: "/", children: (0, We.jsx)("img", {src: Ue, alt: "DocWire logo"})})
                }), (0, We.jsxs)("div", {
                    className: "docwire__navbar-links_container",
                    children: [(0, We.jsx)("p", {
                        children: (0, We.jsx)(Se, {
                            to: "/about-us",
                            children: "About Us"
                        })
                    }), (0, We.jsx)("p", {
                        children: (0, We.jsx)(Se, {
                            to: "/blog",
                            children: "Blog"
                        })
                    }), (0, We.jsx)("p", {
                        children: (0, We.jsx)(Se, {
                            to: "/showcases",
                            children: "Showcases"
                        })
                    }), (0, We.jsx)("p", {
                        children: (0, We.jsx)(Se, {
                            to: "https://docwire.readthedocs.io/en/latest/",
                            children: "Documentation"
                        })
                    }), (0, We.jsx)("p", {
                        children: (0, We.jsx)(Se, {
                            to: "https://github.com/docwire/docwire/releases",
                            children: "Binaries"
                        })
                    })]
                }), (0, We.jsx)("div", {
                    className: "docwire__navbar-getintouch",
                    children: (0, We.jsx)("button", {
                        children: (0, We.jsx)(Se, {
                            to: "/contact-us",
                            children: "Contact Us"
                        })
                    })
                }), (0, We.jsxs)("div", {
                    className: "docwire__navbar-menu",
                    children: [e ? (0, We.jsx)(Fe, {
                        color: "white",
                        size: 27,
                        onClick: () => n(!1)
                    }) : (0, We.jsx)(Ie, {
                        color: "white",
                        size: 27,
                        onClick: () => n(!0)
                    }), e && (0, We.jsxs)("div", {
                        className: "docwire__navbar-menu_container scale-up-center",
                        children: [(0, We.jsxs)("div", {
                            className: "docwire__navbar-menu_container-links",
                            children: [(0, We.jsx)("p", {
                                children: (0, We.jsx)(Se, {
                                    to: "/about-us",
                                    children: "About Us"
                                })
                            }), (0, We.jsx)("p", {
                                children: (0, We.jsx)(Se, {
                                    to: "/blog",
                                    children: "Blog"
                                })
                            }), (0, We.jsx)("p", {
                                children: (0, We.jsx)(Se, {
                                    to: "/showcases",
                                    children: "Showcases"
                                })
                            }), (0, We.jsx)("p", {
                                children: (0, We.jsx)(Se, {
                                    to: "https://docwire.readthedocs.io/en/latest/",
                                    children: "Documentation"
                                })
                            }), (0, We.jsx)("p", {
                                children: (0, We.jsx)(Se, {
                                    to: "https://github.com/docwire/docwire/releases",
                                    children: "Binaries"
                                })
                            })]
                        }), (0, We.jsx)("div", {
                            className: "docwire__navbar-menu_container-links-getintouch",
                            children: (0, We.jsx)("button", {
                                children: (0, We.jsx)(Se, {
                                    to: "/contact-us",
                                    children: "Contact Us"
                                })
                            })
                        })]
                    })]
                })]
            })
        };
        var He = n(772);
        const qe = function () {
            return (0, We.jsx)("div", {
                className: "docwire__header",
                children: (0, We.jsxs)("div", {
                    className: "docwire__header-software",
                    children: [(0, We.jsxs)("div", {
                        className: "docwire__header-software-content",
                        children: [(0, We.jsx)("div", {
                            className: "docwire__header-software-content_header",
                            children: "DocWire SDK: Award-winning modern data processing in C++20"
                        }), (0, We.jsx)("div", {
                            className: "docwire__header-software-content_text",
                            children: (0, We.jsx)("p", {children: "DocWire is a powerful data extraction tool that converts text from nearly all known file formats into searchable and editable data. Powered by Tesseract OCR engine, DocWire is a solution for digitizing text from many image types, MS Office files, e-mails or e-mail attachments. DocWire outputs data to plain text that may be transmitted for further processing."})
                        })]
                    }), (0, We.jsx)("div", {
                        className: "docwire__header-software-content",
                        children: (0, We.jsx)("img", {src: He, alt: "Slanted mail"})
                    })]
                })
            })
        };
        const Ve = function () {
            return (0, We.jsx)("div", {
                className: "docwire__slider", children: (0, We.jsxs)("div", {
                    className: "docwire__slider-marquee", children: [(0, We.jsxs)("div", {
                        className: "docwire__slider-marquee_content",
                        children: [(0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "HMTL"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "EML"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "PDF"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "ODFXML"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "iWork"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "OOXML"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "ODT"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "ODF"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "PRF"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "PPT"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "XLSB"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "DOC"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "XLS"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "PAGES"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "KEYNOTE"})
                        })]
                    }), (0, We.jsxs)("div", {
                        className: "docwire__slider-marquee_content",
                        children: [(0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "HMTL"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "EML"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "PDF"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "ODFXML"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "iWork"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "OOXML"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "ODT"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "ODF"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "PRF"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "PPT"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "XLSB"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "DOC"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "XLS"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "PAGES"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "KEYNOTE"})
                        })]
                    }), (0, We.jsxs)("div", {
                        className: "docwire__slider-marquee_content",
                        children: [(0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "HMTL"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "EML"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "PDF"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "ODFXML"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "iWork"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "OOXML"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "ODT"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "ODF"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "PRF"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "PPT"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "XLSB"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "DOC"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "XLS"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "PAGES"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "KEYNOTE"})
                        })]
                    }), (0, We.jsxs)("div", {
                        className: "docwire__slider-marquee_content",
                        children: [(0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "HMTL"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "EML"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "PDF"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "ODFXML"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "iWork"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "OOXML"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "ODT"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "ODF"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "PRF"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "PPT"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "XLSB"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "DOC"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "XLS"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "PAGES"})
                        }), (0, We.jsx)("div", {
                            className: "docwire__slider-marquee_content_text",
                            children: (0, We.jsx)("h4", {children: "KEYNOTE"})
                        })]
                    })]
                })
            })
        };
        var Qe = n(4);
        const Ke = function () {
            return (0, We.jsx)("div", {
                className: "docwire__haveyouever", children: (0, We.jsxs)("div", {
                    className: "docwire__haveyouever-section padding",
                    children: [(0, We.jsx)("h1", {
                        className: "docwire__haveyouever-h1",
                        children: "Have you ever wanted to:"
                    }), (0, We.jsxs)("ul", {
                        role: "list",
                        className: "list",
                        children: [(0, We.jsx)("li", {
                            className: "list-item",
                            children: "Extract text data from images and scanned documents without the need for manual input?"
                        }), (0, We.jsx)("li", {
                            className: "list-item",
                            children: "Automatically parse through and extract important data from incoming emails, such as customer information or order details?"
                        }), (0, We.jsx)("li", {
                            className: "list-item",
                            children: "Parse through a large amount of documents and extract specific data points, such as dates, names, or product numbers, with ease?"
                        }), (0, We.jsx)("li", {
                            className: "list-item",
                            children: "Utilize the OCR technology to recognize and extract text from various sources, including images, PDFs, and scanned documents?"
                        }), (0, We.jsx)("li", {
                            className: "list-item",
                            children: "Integrate a data extraction SDK into your workflow to streamline data extraction processes and increase efficiency for your team?"
                        })]
                    }), (0, We.jsx)("h2", {
                        className: "docwire__haveyouever-h2",
                        children: "Our cutting-edge data extraction SDK offers advanced capabilities for extracting text and data from a wide range of sources, including images, PDFs, emails, and iWork files. With powerful OCR technology and advanced document parsing features, our software is optimized for fast and accurate data extraction and document parsing. Whether you need to extract data from invoices, forms, or any other document, our data extraction SDK will revolutionize the way you extract and manage data. Say goodbye to manual input and hello to increased productivity and efficiency for your team with our data extraction solution."
                    }), (0, We.jsx)("img", {src: Qe, alt: "Text extraction platforms"})]
                })
            })
        };
        const Xe = function () {
            return (0, We.jsx)("div", {
                className: "docwire__cta",
                children: (0, We.jsxs)("div", {
                    className: "docwire__cta-background",
                    children: [(0, We.jsx)("div", {
                        className: "docwire__cta-background_banner",
                        children: (0, We.jsxs)("div", {
                            className: "docwire__cta-content",
                            children: [(0, We.jsx)("h3", {children: "Public Binaries"}), (0, We.jsx)("p", {children: "Have a go and experiment with our non-commerical license, without trial periods or gated functions!"})]
                        })
                    }), (0, We.jsx)("div", {
                        className: "docwire__cta-button",
                        children: (0, We.jsx)("a", {
                            href: "https://github.com/docwire/docwire/releases",
                            children: "Download Binaries"
                        })
                    })]
                })
            })
        };
        const Ye = function () {
            return (0, We.jsx)("div", {
                className: "docwire__cta",
                children: (0, We.jsxs)("div", {
                    className: "docwire__cta-background",
                    children: [(0, We.jsx)("div", {
                        className: "docwire__cta-background_banner",
                        children: (0, We.jsxs)("div", {
                            className: "docwire__cta-content",
                            children: [(0, We.jsx)("h3", {children: "Give our demo a try"}), (0, We.jsx)("p", {children: "Have a go and experiment with our non-commerical license, without trial periods or gated functions!"})]
                        })
                    }), (0, We.jsx)("div", {
                        className: "docwire__cta-button",
                        children: (0, We.jsx)(Se, {to: "/contact-us", children: "Get licence"})
                    })]
                })
            })
        }, Ge = [{
            id: 0,
            linkName: "/showcases/harpo",
            image: "Harpo logo.png",
            companyName: "Harpo",
            showcasesShortInfo: "How Harpo & Docwire software helps visually impaired people to read",
            subtitle: "We help the world see",
            website: "https://int.harpo.com.pl/",
            whoWeAre: "Harpo is all about help for disabled people. Our products give access to knowledge, workplace and entertainment.",
            whatIs: "Harpo specializes in VisualAid, providing state-of-the-art tools to vision impaired individuals and organizations on a global scale. They work tirelessly to find new solutions for people to experience the world, work which demands continuous research and a drive for excellence.",
            WhyWereDocwireApproached: "We as humans use more than one sense to experience the world. With today's tech, an inability to read no longer equals an inability to enjoy the written word - which is why Harpo reached out. They needed a smart text extraction solution that could work in symbiosis with their synthesizers, a tool that could extract and feed text into their ecosystem in a logically structured and reliable manner.",
            WhatDidWeDo: "The Docwire SDK comes with a whole heap of solutions ready to be implemented, among which is text extraction support for all popular file formats. By providing the SDK to the team at Harpo, they were able to build the core functionality necessary to extract data from digital documents and feed into their synthesizer.",
            WhatWereTheResults: "Harpo has now executed on that vision, providing a tool which not only reads standard text out loud, but also tables and other sources using structured formats."
        }, {
            id: 1,
            linkName: "/showcases/tausight",
            image: "Tausight.png",
            companyName: "Tausight",
            showcasesShortInfo: "How proper text extraction helps Tausight alert and prevent leakage of medical information",
            subtitle: "The First Situational ePHI Awareness Platform for Healthcare",
            website: "https://www.tausight.com/",
            whoWeAre: "Existing cybersecurity tools and methods are generic and not specific to the challenges faced in healthcare. Tausight is purpose-built to solve the distinct problems in healthcare.",
            whatIs: "Tausight is what\u2019s called a ePHI awareness platform, utilizing bleeding-edge systems including machine learning and neural networks to better the security of sensitive information within healthcare.",
            WhyWereDocwireApproached: "With security as the top priority, Tausight approached us with a unique challenge - Provide a bespoke text mining addon to include in their security monitoring operations with the ability to extract text quickly and securely whilst keeping resource consumption low.",
            WhatDidWeDo: "So that\u2019s exactly what we provided! The tool was: Quick, extracting and feeding live data into their systems. Lightweight, utilizing C++ binary code to save on resources no matter the machine. Secure, the solution can operate locally on any workstation without any external connections to third-party solutions.",
            WhatWereTheResults: "Docwire and Tausight worked hand in hand to develop a module that, combined with their platform, continuously scans, extracts and flags potential security threats and leaks."
        }, {
            id: 2,
            linkName: "/showcases/pwc-singapore",
            image: "PWC logo.png",
            companyName: "PwC Singapore",
            showcasesShortInfo: "How PwC Singapore utilizes text extraction to embolden their audit & report system",
            subtitle: "Building trust in society and solving important problems",
            website: "https://www.pwc.com/",
            whoWeAre: '"As Singapore continues its digital transformation journey towards becoming a Smart Nation, there is a growing need for society and businesses alike to embrace technology"',
            whatIs: "PwC is a financial giant, providing services and creating value for companies around the world. Boasting over 300,000 employees and $50 billion in revenue in their last fiscal year.",
            WhyWereDocwireApproached: "Docwire were approached by project managers dealing with external auditing, looking to implement a tool that could reliably extract text from unstructured text and data sources. The goal was to implement an automated solution that were compliant with their current data management system, a complimentary module to the reporting structure.",
            WhatDidWeDo: "The team at Docwire has over the years developed a vast library of functions, able to extract text from all popular file formats. It so happens that the Docwire SDK included the parts necessary to expand the data extraction functionality of their operations.",
            WhatWereTheResults: "Now, the Docwire SDK and it's abilities plays an integral role in PwC's auditing solution. Providing a tool which scans, extracts and structures data from unstructured data sources."
        }];
        const Je = function () {
            return (0, We.jsx)("div", {
                className: "docwire__usecases",
                children: (0, We.jsxs)("div", {
                    className: "docwire__usecases-hero",
                    children: [(0, We.jsxs)("div", {
                        className: "docwire__usecases-hero_top",
                        children: [(0, We.jsxs)("h1", {children: ["Explore how the ", (0, We.jsx)("span", {children: "Docwire SDK"}), " is applied in the world"]}), (0, We.jsx)("p", {children: "The Docwire SDK provides the core functionality of services delivered to hundreds of thousands of users. These cases cover how the text extractor has been operationally implemented for our clients."})]
                    }), (0, We.jsx)("div", {
                        className: "docwire__usecases-hero_bottom",
                        children: Ge.map((e => (0, We.jsxs)("div", {
                            className: "docwire__usecases-single",
                            children: [(0, We.jsxs)(Se, {
                                to: e.linkName,
                                children: [(0, We.jsx)("div", {
                                    className: "docwire__usecases-single_wrapper",
                                    children: (0, We.jsx)("div", {
                                        className: "docwire__usecases-single_wrapper_img",
                                        children: (0, We.jsx)("img", {
                                            src: n(372)("./".concat(e.image)),
                                            alt: e.companyName
                                        })
                                    })
                                }), (0, We.jsx)("h2", {children: e.companyName})]
                            }), (0, We.jsx)("p", {children: e.showcasesShortInfo})]
                        })))
                    })]
                })
            })
        };
        const Ze = function () {
            return (0, We.jsx)("div", {
                className: "docwire__footer",
                children: (0, We.jsxs)("div", {
                    className: "docwire__footer-content",
                    children: [(0, We.jsxs)("div", {
                        className: "docwire__footer-content-links",
                        children: [(0, We.jsx)(Se, {
                            className: "docwire__footer-content-links_link",
                            to: "/privacy",
                            children: "Privacy policy"
                        }), (0, We.jsx)(Se, {
                            className: "docwire__footer-content-links_link",
                            to: "/terms-of-service",
                            children: "Term of use"
                        })]
                    }), (0, We.jsxs)("h6", {
                        className: "docwire__footer-content-copyright",
                        children: ["\xa9 DocWire SDK", (0, We.jsx)("br", {}), "\xa9 SILVERCODERS Ltd."]
                    })]
                })
            })
        };

        function $e(e) {
            return Ae({
                tag: "svg",
                attr: {fill: "currentColor", viewBox: "0 0 16 16"},
                child: [{
                    tag: "path",
                    attr: {d: "M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z"},
                    child: []
                }]
            })(e)
        }

        const et = function () {
            return (0, We.jsx)("div", {
                className: "docwire__unlockthepower", children: (0, We.jsxs)("div", {
                    className: "docwire__unlockthepower-content",
                    children: [(0, We.jsx)("div", {
                        className: "docwire__unlockthepower-content_subheader",
                        children: "Bespoke Software"
                    }), (0, We.jsx)("div", {
                        className: "docwire__unlockthepower-content_header",
                        children: "Unlock the Power of Docwire SDK"
                    }), (0, We.jsx)("div", {
                        className: "docwire__unlockthepower-content_section",
                        children: "Dealing with unstructured data can be a real hassle, but with Docwire SDK software, you can easily extract text from a variety of file formats. Our powerful C++ library enables lightning-fast text extraction from docx files, PDFs, and even pst/ost files. Our software is not only easy to use but also quick to deploy, saving you time and hassle. Whether you're dealing with legal documents, financial statements, or any other type of unstructured data, Docwire SDK has got you covered. Try it today and experience the power of efficient and accurate text extraction."
                    }), (0, We.jsxs)("div", {
                        className: "docwire__unlockthepower-content_infocard_section",
                        children: [(0, We.jsx)("div", {
                            className: "docwire__unlockthepower-content_infocard_single",
                            children: (0, We.jsxs)("div", {
                                className: "docwire__unlockthepower-content_infocard_content",
                                children: [(0, We.jsx)($e, {
                                    className: "lightning",
                                    size: "2rem",
                                    color: "orange"
                                }), (0, We.jsx)("h3", {
                                    className: "infocard_header",
                                    children: "Speedy onboarding"
                                }), (0, We.jsx)("p", {
                                    className: "infocard_paragraph",
                                    children: "Dodge the learning curve and test your idea as soon as possible."
                                })]
                            })
                        }), (0, We.jsx)("div", {
                            className: "docwire__unlockthepower-content_infocard_single",
                            children: (0, We.jsxs)("div", {
                                className: "docwire__unlockthepower-content_infocard_content",
                                children: [(0, We.jsx)($e, {
                                    className: "lightning",
                                    size: "2rem",
                                    color: "orange"
                                }), (0, We.jsx)("h3", {
                                    className: "infocard_header",
                                    children: "Frictionless project management"
                                }), (0, We.jsx)("p", {
                                    className: "infocard_paragraph",
                                    children: "20+ years of project management helps you swerve every pitfall in the book."
                                })]
                            })
                        }), (0, We.jsx)("div", {
                            className: "docwire__unlockthepower-content_infocard_single",
                            children: (0, We.jsxs)("div", {
                                className: "docwire__unlockthepower-content_infocard_content",
                                children: [(0, We.jsx)($e, {
                                    className: "lightning",
                                    size: "2rem",
                                    color: "orange"
                                }), (0, We.jsx)("h3", {
                                    className: "infocard_header",
                                    children: "Tech support"
                                }), (0, We.jsx)("p", {
                                    className: "infocard_paragraph",
                                    children: "You didn\u2019t think we\u2019d leave you hanging, did you? We\u2019re here when you need us."
                                })]
                            })
                        })]
                    })]
                })
            })
        };
        var tt = n(48);
        const nt = function () {
            return (0, We.jsx)("div", {
                className: "docwire__wingssection",
                children: (0, We.jsxs)("div", {
                    className: "docwire__wingssection-container",
                    children: [(0, We.jsxs)("div", {
                        className: "docwire__wingssection-container_text",
                        children: [(0, We.jsx)("h3", {children: "Docwire SDK is a light-weight, secure C++ text miner optimized for any tech stack"}), (0, We.jsx)("p", {children: "Docwire SDK is a light-weight, secure C++ text miner that is optimized for any tech stack. With our powerful libraries, you can implement lightning-fast text extraction that seamlessly blends with your current build, saving both time and money. Our C++ libraries are designed to handle any file format, including docx, PDF, and pst/ost files, making it easy to extract text from even the most complex documents. Try Docwire SDK today and experience the power of efficient and accurate text extraction with our optimized C++ libraries."})]
                    }), (0, We.jsx)("div", {
                        className: "docwire__wingssection-container_wings",
                        children: (0, We.jsx)("img", {src: tt, alt: "Floating Wings"})
                    })]
                })
            })
        }, rt = {_origin: "https://api.emailjs.com"}, at = (e, t, n) => {
            if (!e) throw "The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";
            if (!t) throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
            if (!n) throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
            return !0
        };

        class lt {
            constructor(e) {
                this.status = e.status, this.text = e.responseText
            }
        }

        const ot = function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return new Promise(((r, a) => {
                const l = new XMLHttpRequest;
                l.addEventListener("load", (e => {
                    let {target: t} = e;
                    const n = new lt(t);
                    200 === n.status || "OK" === n.text ? r(n) : a(n)
                })), l.addEventListener("error", (e => {
                    let {target: t} = e;
                    a(new lt(t))
                })), l.open("POST", rt._origin + e, !0), Object.keys(n).forEach((e => {
                    l.setRequestHeader(e, n[e])
                })), l.send(t)
            }))
        }, it = (e, t, n, r) => {
            const a = r || rt._userID, l = (e => {
                let t;
                if (t = "string" === typeof e ? document.querySelector(e) : e, !t || "FORM" !== t.nodeName) throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
                return t
            })(n);
            at(a, e, t);
            const o = new FormData(l);
            return o.append("lib_version", "3.2.0"), o.append("service_id", e), o.append("template_id", t), o.append("user_id", a), ot("/api/v1.0/email/send-form", o)
        };
        const st = function () {
            const [e, n] = (0, t.useState)({
                reason: "",
                name: "",
                email: "",
                message: ""
            }), [r, a] = (0, t.useState)(!0), [l, o] = (0, t.useState)(""), i = t => {
                const {name: r, value: a} = t.target;
                n({...e, [r]: a})
            };
            return (0, We.jsx)(We.Fragment, {
                children: r ? (0, We.jsxs)("form", {
                    id: "email-form",
                    name: "email-form",
                    method: "POST",
                    action: "",
                    onSubmit: function (e) {
                        e.preventDefault(), a(!1), it("service_kae7du7", "template_c6xey6a", e.target, "3KoDxLxb5ljsWpftC").then((e => {
                            console.log(e), o("success")
                        })).catch((e => {
                            o("fail"), console.log(e)
                        }))
                    },
                    children: [(0, We.jsx)("h2", {children: "I want to ask about..."}), (0, We.jsxs)("select", {
                        id: "Reason",
                        name: "Reason",
                        className: "select",
                        value: e.reason,
                        onChange: t => n({...e, reason: t.target.value}),
                        children: [(0, We.jsx)("option", {
                            value: "",
                            disabled: !!e.reason,
                            children: "Select one..."
                        }), (0, We.jsx)("option", {
                            value: "Demo",
                            children: "Demo"
                        }), (0, We.jsx)("option", {
                            value: "License",
                            children: "License"
                        }), (0, We.jsx)("option", {
                            value: "Pricing",
                            children: "Pricing"
                        }), (0, We.jsx)("option", {
                            value: "SDK Questions",
                            children: "SDK Questions"
                        }), (0, We.jsx)("option", {
                            value: "Support",
                            children: "Support"
                        }), (0, We.jsx)("option", {value: "Other", children: "Other"})]
                    }), (0, We.jsx)("input", {
                        type: "text",
                        id: "name",
                        name: "name",
                        className: "input",
                        maxLength: "256",
                        placeholder: "Name",
                        onChange: i,
                        required: !0
                    }), (0, We.jsx)("input", {
                        type: "email",
                        id: "email",
                        name: "email",
                        className: "input",
                        maxLength: "256",
                        placeholder: "Email",
                        onChange: i,
                        required: !0
                    }), (0, We.jsx)("textarea", {
                        id: "message",
                        name: "message",
                        className: "textarea",
                        placeholder: "Your message ...",
                        onChange: i,
                        required: !0
                    }), (0, We.jsx)("input", {
                        type: "submit",
                        value: "Send request",
                        className: "submitButton",
                        disabled: "loading" === l
                    })]
                }) : (0, We.jsx)("div", {
                    className: "FormAccepted",
                    children: (0, We.jsx)("p", {
                        className: "AcceptedParagraph",
                        children: "success" === l ? "Message has been sent :)" : "Sending..."
                    })
                })
            })
        };
        const ut = function () {
            return (0, We.jsx)("div", {
                className: "docwire__contact",
                children: (0, We.jsxs)("div", {
                    className: "docwire__contact-bg",
                    children: [(0, We.jsxs)("div", {
                        className: "docwire__contact-text",
                        children: [(0, We.jsx)("div", {
                            className: "docwire__contact-text_h1",
                            children: "How Can We Help You?"
                        }), (0, We.jsx)("div", {
                            className: "docwire__contact-text_section",
                            children: "Want access to our non-commercial demo license, ask questions about our functions or simply inquire about pricing? Fill in the form and we will get back to you!"
                        })]
                    }), (0, We.jsx)("div", {
                        className: "docwire__contact-form",
                        children: (0, We.jsx)("div", {
                            className: "docwire__contact-form_form",
                            children: (0, We.jsx)(st, {})
                        })
                    })]
                })
            })
        };
        const ct = function () {
            return (0, We.jsx)("div", {
                className: "docwire__aboutus", children: (0, We.jsxs)("div", {
                    className: "docwire__aboutus-content",
                    children: [(0, We.jsx)("h1", {
                        className: "about",
                        children: "About Us"
                    }), (0, We.jsx)("p", {
                        className: "history",
                        children: (0, We.jsx)("strong", {children: "Our history of working with industry leaders in every field, combined with 10+ years of development, has made Docwire the longest standing, most dynamic text extraction SDK on the market."})
                    }), (0, We.jsx)("h1", {className: "who", children: "Who Are We"}), (0, We.jsx)("p", {
                        className: "paragraph", children: (0, We.jsxs)("strong", {
                            children: ["What began as your run of the mill garage band of Commodore 64 tinkerers, has now expanded to a rag-tag team of developers and marketers with a bleeding passion for cutting edge tech. We feel immense pride in every step we take, which is something we believe shows in the quality of what we produce.", (0, We.jsx)("br", {}), (0, We.jsx)("br", {}), 'Our ear-to-the-ground approach not only ensures that we supply a product that is sought after on the market, but is one of, if not the most influential motivator for our actions. Solving self-identified issues is one thing, but helping a client solve their own puzzle is what ultimately scratches that problem-solving itch. We very much operate on a "problem first" basis, prioritizing utility and faster sprints through the disposal of myopic features.', (0, We.jsx)("br", {}), (0, We.jsx)("br", {}), "As we've continued to tinker with the SDK (as well as various consoles) we've set our eyes on a new goal - Becoming the time saving backbone of digital document processing.", (0, We.jsx)("br", {}), (0, We.jsx)("br", {}), "This vision has been the guiding hand for all of our actions, leading Docwire to secure industry-leading clients such as PwC Singapore and Tausight who both dominate the finance and healthcare cyber security sectors respectively.", (0, We.jsx)("br", {}), (0, We.jsx)("br", {}), "We are now eagerly preparing for the next step in our journey. Might that be a partnership with you?"]
                        })
                    })]
                })
            })
        };
        const dt = function () {
            return (0, We.jsx)("div", {
                className: "docwire__nopage",
                children: (0, We.jsxs)("div", {
                    className: "docwire__nopage-content",
                    children: [(0, We.jsxs)("div", {
                        className: "docwire__nopage-content404",
                        children: [(0, We.jsx)("h1", {children: "404"}), (0, We.jsx)("h2", {children: "Page not found"})]
                    }), (0, We.jsx)("button", {children: (0, We.jsx)(Se, {to: "/", children: "Homepage"})})]
                })
            })
        };
        const ft = function () {
            return (0, We.jsx)("div", {
                className: "docwire__aboutus", children: (0, We.jsxs)("div", {
                    className: "docwire__aboutus-content",
                    children: [(0, We.jsx)("h1", {
                        className: "about",
                        children: "Terms of Use"
                    }), (0, We.jsx)("p", {
                        className: "history",
                        children: (0, We.jsx)("strong", {children: 'Welcome to DocWire. By using this Website, you agree to be bound by these terms of use (the "Terms"). If you do not agree to the Terms, please do not use the Website.'})
                    }), (0, We.jsx)("h1", {
                        className: "who",
                        children: "Use of Website"
                    }), (0, We.jsx)("p", {
                        className: "paragraph",
                        children: (0, We.jsx)("strong", {children: "You may use the Website for lawful purposes only. You may not use the Website for any illegal or unauthorized purpose. You may not use the Website to engage in any harmful or disruptive activity."})
                    }), (0, We.jsx)("h1", {
                        className: "who",
                        children: "Content Ownership"
                    }), (0, We.jsx)("p", {
                        className: "paragraph",
                        children: (0, We.jsx)("strong", {children: 'The Website and all of its content, including but not limited to text, images, videos, and software (the "Content"), is owned by DocWire and is protected by copyright and other intellectual property laws. You may not use the Content for any commercial purpose without the express written consent of DocWire.'})
                    }), (0, We.jsx)("h1", {
                        className: "who",
                        children: "Links to Other Websites"
                    }), (0, We.jsx)("p", {
                        className: "paragraph",
                        children: (0, We.jsx)("strong", {children: "The Website may contain links to other websites. We are not responsible for the content or privacy practices of those websites."})
                    }), (0, We.jsx)("h1", {
                        className: "who",
                        children: "Modification of Terms"
                    }), (0, We.jsx)("p", {
                        className: "paragraph",
                        children: (0, We.jsx)("strong", {children: "We reserve the right to modify these Terms at any time. If we make changes to the Terms, we will post the new version on the Website. Your continued use of the Website following the posting of any changes constitutes acceptance of those changes."})
                    }), (0, We.jsx)("h1", {
                        className: "who",
                        children: "Contact Us"
                    }), (0, We.jsx)("p", {
                        className: "paragraph",
                        children: (0, We.jsx)("strong", {children: "If you have any questions or concerns about these Terms, please contact us at info@docwire.io."})
                    })]
                })
            })
        };
        const pt = function () {
            return (0, We.jsx)("div", {
                className: "docwire__aboutus", children: (0, We.jsxs)("div", {
                    className: "docwire__aboutus-content",
                    children: [(0, We.jsx)("h1", {
                        className: "about",
                        children: "Privacy Policy"
                    }), (0, We.jsx)("p", {
                        className: "history",
                        children: (0, We.jsx)("strong", {children: "At DocWire, we take the privacy of our customers and website visitors very seriously. We understand that the information you provide to us is sensitive, and we want to assure you that we will handle it with the utmost care. This privacy policy explains how we collect, use, and protect your personal information."})
                    }), (0, We.jsx)("h1", {
                        className: "who",
                        children: "Information Collection"
                    }), (0, We.jsx)("p", {
                        className: "paragraph",
                        children: (0, We.jsx)("strong", {children: "We collect information from you when you use our website, request a quote or a service, or sign up for our newsletter. The types of information we collect may include your name, email address, phone number, and the specific details of the data extraction services you are requesting."})
                    }), (0, We.jsx)("h1", {
                        className: "who",
                        children: "Use of Information"
                    }), (0, We.jsx)("p", {
                        className: "paragraph",
                        children: (0, We.jsx)("strong", {children: "We use the information we collect from you to provide you with the services you request, to communicate with you about your order or account, and to send you occasional marketing emails. We may also use your information to improve our website, products, and services."})
                    }), (0, We.jsx)("h1", {
                        className: "who",
                        children: "Sharing of Information"
                    }), (0, We.jsx)("p", {
                        className: "paragraph",
                        children: (0, We.jsx)("strong", {children: "We do not share your personal information with any third parties, except as necessary to provide you with the services you request. This may include sharing your information with our partners or sub-contractors who assist us in providing our services. We will never share your information with third parties for their own marketing purposes."})
                    }), (0, We.jsx)("h1", {
                        className: "who",
                        children: "Security"
                    }), (0, We.jsx)("p", {
                        className: "paragraph",
                        children: (0, We.jsx)("strong", {children: "We take the security of your personal information very seriously. We use a variety of security measures to protect your information, including encryption and secure servers. We also require our partners and sub-contractors to adhere to strict security standards when handling your information."})
                    }), (0, We.jsx)("h1", {
                        className: "who",
                        children: "Changes to This Policy"
                    }), (0, We.jsx)("p", {
                        className: "paragraph",
                        children: (0, We.jsx)("strong", {children: "We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on our website."})
                    }), (0, We.jsx)("h1", {
                        className: "who",
                        children: "Contact us"
                    }), (0, We.jsx)("p", {
                        className: "paragraph",
                        children: (0, We.jsx)("strong", {children: "If you have any questions or concerns about our privacy policy, please contact us at info@docwire.io. At our DocWire, we understand the importance of managing the personal information we collect from you. As per the laws of your country, you may have the right to access, update, or delete the data we have collected from you. To exercise these rights, please reach out to us at info@docwire.io. Our team will respond to your request within 30 days."})
                    })]
                })
            })
        };
        var ht = n(16);
        const mt = function () {
            return (0, We.jsxs)("div", {
                className: "docwire__info",
                children: [(0, We.jsxs)("div", {
                    className: "docwire__info-intro_section1",
                    children: [(0, We.jsx)("h1", {children: "So, what can it do?"}), (0, We.jsx)("h2", {children: "Well let us show you"})]
                }), (0, We.jsxs)("div", {
                    className: "docwire__info-intro_section2",
                    children: [(0, We.jsxs)("div", {
                        className: "docwire__info-intro_section2-text",
                        children: [(0, We.jsxs)("div", {
                            className: "docwire__info-top",
                            children: [(0, We.jsx)("h3", {children: "Process data from all popular formats"}), (0, We.jsx)("p", {children: "No matter if it\u2019s scanned reports or structured excel sheets, the Docwire SDK helps you identify and extract the data you need."})]
                        }), (0, We.jsxs)("div", {
                            className: "docwire__info-bottom",
                            children: [(0, We.jsx)("h4", {children: "Supported formats"}), (0, We.jsx)("p", {children: "docx, xlsx, pptx, doc, xls, xlsb, ppt, odt, ods, odp, pdf, html, htm, css, rtf, eml, ms outlook pst, ost, jpg, jpeg, jfif, bmp, pnm, png, tiff, webp, pages, numbers, keynote, odfxml (fodp, fods, fodt), zip, tar, rar, gz, bz2, xz, asm, asp, aspx, bas, bat, c, cc, cmake, cs, cpp, cxx, d, f, fpp, fs, go, h, hpp, hxx, java, js, jsp, lua, pas, php, pl, perl, py, r, sh, tcl, vb, vbs, ws, xml, xsd, xsl, csv, json, yml, yaml, rss, conf, md, log, dcm and more!"})]
                        })]
                    }), (0, We.jsx)("div", {
                        className: "docwire__info-intro_section2-gradient",
                        children: (0, We.jsx)("img", {src: ht, alt: "Floating Wings"})
                    })]
                })]
            })
        };

        function vt(e) {
            return Ae({
                tag: "svg",
                attr: {viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true"},
                child: [{
                    tag: "path",
                    attr: {
                        fillRule: "evenodd",
                        d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
                        clipRule: "evenodd"
                    },
                    child: []
                }]
            })(e)
        }

        function gt(e) {
            return Ae({
                tag: "svg",
                attr: {viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true"},
                child: [{
                    tag: "path",
                    attr: {d: "M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"},
                    child: []
                }, {
                    tag: "path",
                    attr: {d: "M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"},
                    child: []
                }]
            })(e)
        }

        const yt = function (e) {
            return e = e.props, (0, We.jsxs)(We.Fragment, {
                children: [(0, We.jsx)(Be, {}), (0, We.jsxs)("div", {
                    className: "docwire__showcase-template",
                    children: [(0, We.jsxs)("div", {
                        className: "docwire__showcase-template_header",
                        children: [(0, We.jsx)("h1", {children: e.companyName}), (0, We.jsx)("h2", {children: e.subtitle}), (0, We.jsxs)("div", {
                            className: "docwire__showcase-template_header-buttons",
                            children: [(0, We.jsxs)(Se, {
                                to: e.website,
                                className: "link",
                                children: [(0, We.jsx)("div", {children: "Website"}), (0, We.jsx)(gt, {className: "icon"})]
                            }), (0, We.jsx)(Se, {to: "/contact-us", className: "cta", children: "Get licence"})]
                        })]
                    }), (0, We.jsxs)("div", {
                        className: "docwire__showcase-template_content",
                        children: [(0, We.jsxs)("div", {
                            className: "docwire__showcase-template_content-left",
                            children: [(0, We.jsxs)("div", {
                                className: "top_left",
                                children: [(0, We.jsx)("img", {
                                    src: n(372)("./".concat(e.image)),
                                    alt: e.companyName
                                }), (0, We.jsx)("p", {children: e.whoWeAre})]
                            }), (0, We.jsxs)(Se, {
                                to: "/showcases",
                                children: [(0, We.jsx)("div", {
                                    className: "text",
                                    children: "Other showcases"
                                }), (0, We.jsx)("div", {className: "arrow", children: (0, We.jsx)(vt, {})})]
                            })]
                        }), (0, We.jsxs)("div", {
                            className: "docwire__showcase-template_content-right",
                            children: [(0, We.jsx)("div", {
                                className: "question",
                                children: (0, We.jsxs)("h4", {children: ["What is ", e.companyName]})
                            }), (0, We.jsx)("div", {
                                className: "answer",
                                children: (0, We.jsx)("p", {children: e.whatIs})
                            }), (0, We.jsx)("div", {
                                className: "question",
                                children: (0, We.jsx)("h4", {children: "Why were Docwire approached?"})
                            }), (0, We.jsx)("div", {
                                className: "answer",
                                children: (0, We.jsx)("p", {children: e.WhyWereDocwireApproached})
                            }), (0, We.jsx)("div", {
                                className: "question",
                                children: (0, We.jsx)("h4", {children: "What did we do?"})
                            }), (0, We.jsx)("div", {
                                className: "answer",
                                children: (0, We.jsx)("p", {children: e.WhatDidWeDo})
                            }), (0, We.jsx)("div", {
                                className: "question",
                                children: (0, We.jsx)("h4", {children: "What were the results?"})
                            }), (0, We.jsx)("div", {
                                className: "answer",
                                children: (0, We.jsx)("p", {children: e.WhatWereTheResults})
                            })]
                        })]
                    })]
                }), (0, We.jsx)(Ye, {}), (0, We.jsx)(Ze, {})]
            })
        };
        const bt = function () {
            return (0, We.jsxs)("div", {
                className: "App",
                children: [(0, We.jsx)(Be, {}), (0, We.jsx)(qe, {}), (0, We.jsx)(Ve, {}), (0, We.jsx)(Ke, {}), (0, We.jsx)(et, {}), (0, We.jsx)(nt, {}), (0, We.jsx)(Xe, {}), (0, We.jsx)(mt, {}), (0, We.jsx)(Je, {}), (0, We.jsx)(Ze, {})]
            })
        };
        const wt = function () {
            return (0, We.jsxs)("div", {children: [(0, We.jsx)(Be, {}), (0, We.jsx)(ut, {}), (0, We.jsx)(Ze, {})]})
        };
        const xt = function () {
            return (0, We.jsxs)("div", {children: [(0, We.jsx)(Be, {}), (0, We.jsx)(Je, {}), (0, We.jsx)(Ze, {})]})
        };
        const kt = function () {
            return (0, We.jsxs)("div", {children: [(0, We.jsx)(Be, {}), (0, We.jsx)(ct, {}), (0, We.jsx)(Ze, {})]})
        };
        const _t = function () {
            return (0, We.jsxs)("div", {children: [(0, We.jsx)(Be, {}), (0, We.jsx)("h1", {children: "Blog"}), (0, We.jsx)(Ze, {})]})
        };
        const St = function () {
            return (0, We.jsx)("div", {children: (0, We.jsx)(dt, {})})
        };
        const jt = function () {
            return (0, We.jsxs)("div", {children: [(0, We.jsx)(Be, {}), (0, We.jsx)(ft, {}), (0, We.jsx)(Ze, {})]})
        };
        const Nt = function () {
            return (0, We.jsxs)("div", {children: [(0, We.jsx)(Be, {}), (0, We.jsx)(pt, {}), (0, We.jsx)(Ze, {})]})
        };
        const Et = function () {
            return (0, We.jsx)(yt, {props: Ge[0]})
        };
        const Ct = function () {
            return (0, We.jsx)(yt, {props: Ge[1]})
        };
        const Pt = function () {
            return (0, We.jsx)(yt, {props: Ge[2]})
        };
        const Tt = function () {
            return (0, We.jsx)("div", {
                children: (0, We.jsx)(xe, {
                    children: (0, We.jsxs)(me, {
                        children: [(0, We.jsx)(pe, {
                            index: !0,
                            element: (0, We.jsx)(bt, {})
                        }), (0, We.jsx)(pe, {path: "/", element: (0, We.jsx)(bt, {})}), (0, We.jsx)(pe, {
                            path: "/home",
                            element: (0, We.jsx)(bt, {})
                        }), (0, We.jsx)(pe, {
                            path: "/docwire",
                            element: (0, We.jsx)(bt, {})
                        }), (0, We.jsx)(pe, {
                            path: "/about-us",
                            element: (0, We.jsx)(kt, {})
                        }), (0, We.jsx)(pe, {
                            path: "/contact-us",
                            element: (0, We.jsx)(wt, {})
                        }), (0, We.jsx)(pe, {
                            path: "/docwire/contact-us",
                            element: (0, We.jsx)(wt, {})
                        }), (0, We.jsx)(pe, {
                            path: "/blog",
                            element: (0, We.jsx)(_t, {})
                        }), (0, We.jsx)(pe, {
                            path: "/showcases",
                            element: (0, We.jsx)(xt, {})
                        }), (0, We.jsx)(pe, {
                            path: "/showcases/harpo",
                            element: (0, We.jsx)(Et, {})
                        }), (0, We.jsx)(pe, {
                            path: "/showcases/tausight",
                            element: (0, We.jsx)(Ct, {})
                        }), (0, We.jsx)(pe, {
                            path: "/showcases/pwc-singapore",
                            element: (0, We.jsx)(Pt, {})
                        }), (0, We.jsx)(pe, {
                            path: "/terms-of-service",
                            element: (0, We.jsx)(jt, {})
                        }), (0, We.jsx)(pe, {
                            path: "/privacy",
                            element: (0, We.jsx)(Nt, {})
                        }), (0, We.jsx)(pe, {path: "*", element: (0, We.jsx)(St, {})})]
                    })
                })
            })
        };
        a.createRoot(document.getElementById("root")).render((0, We.jsx)(t.StrictMode, {children: (0, We.jsx)(Tt, {})}))
    })()
})();
//# sourceMappingURL=main.08e265ce.js.map