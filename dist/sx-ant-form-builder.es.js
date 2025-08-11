import { inject as Ge, ref as S, h as oe, getCurrentInstance as Ye, nextTick as Qe, reactive as Xe, defineComponent as E, createVNode as c, createElementBlock as C, openBlock as x, unref as s, Fragment as ie, createElementVNode as p, createCommentVNode as Ze, withModifiers as Je, withCtx as h, renderList as Ke, createTextVNode as le, toDisplayString as et } from "vue";
import { FormItem as k, Input as B, Select as H, Button as tt, Modal as rt } from "ant-design-vue";
function g(e, r) {
  nt(e) && (e = "100%");
  var t = at(e);
  return e = r === 360 ? e : Math.min(r, Math.max(0, parseFloat(e))), t && (e = parseInt(String(e * r), 10) / 100), Math.abs(e - r) < 1e-6 ? 1 : (r === 360 ? e = (e < 0 ? e % r + r : e % r) / parseFloat(String(r)) : e = e % r / parseFloat(String(r)), e);
}
function nt(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function at(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function ot(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function P(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function L(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function it(e, r, t) {
  return {
    r: g(e, 255) * 255,
    g: g(r, 255) * 255,
    b: g(t, 255) * 255
  };
}
function D(e, r, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? e + (r - e) * (6 * t) : t < 1 / 2 ? r : t < 2 / 3 ? e + (r - e) * (2 / 3 - t) * 6 : e;
}
function lt(e, r, t) {
  var n, a, o;
  if (e = g(e, 360), r = g(r, 100), t = g(t, 100), r === 0)
    a = t, o = t, n = t;
  else {
    var l = t < 0.5 ? t * (1 + r) : t + r - t * r, i = 2 * t - l;
    n = D(i, l, e + 1 / 3), a = D(i, l, e), o = D(i, l, e - 1 / 3);
  }
  return { r: n * 255, g: a * 255, b: o * 255 };
}
function ut(e, r, t) {
  e = g(e, 255), r = g(r, 255), t = g(t, 255);
  var n = Math.max(e, r, t), a = Math.min(e, r, t), o = 0, l = n, i = n - a, u = n === 0 ? 0 : i / n;
  if (n === a)
    o = 0;
  else {
    switch (n) {
      case e:
        o = (r - t) / i + (r < t ? 6 : 0);
        break;
      case r:
        o = (t - e) / i + 2;
        break;
      case t:
        o = (e - r) / i + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: u, v: l };
}
function ct(e, r, t) {
  e = g(e, 360) * 6, r = g(r, 100), t = g(t, 100);
  var n = Math.floor(e), a = e - n, o = t * (1 - r), l = t * (1 - a * r), i = t * (1 - (1 - a) * r), u = n % 6, f = [t, l, o, o, i, t][u], d = [i, t, t, l, o, o][u], _ = [o, o, i, t, t, l][u];
  return { r: f * 255, g: d * 255, b: _ * 255 };
}
function st(e, r, t, n) {
  var a = [
    L(Math.round(e).toString(16)),
    L(Math.round(r).toString(16)),
    L(Math.round(t).toString(16))
  ];
  return a.join("");
}
function ue(e) {
  return m(e) / 255;
}
function m(e) {
  return parseInt(e, 16);
}
var ce = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function T(e) {
  var r = { r: 0, g: 0, b: 0 }, t = 1, n = null, a = null, o = null, l = !1, i = !1;
  return typeof e == "string" && (e = pt(e)), typeof e == "object" && (v(e.r) && v(e.g) && v(e.b) ? (r = it(e.r, e.g, e.b), l = !0, i = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : v(e.h) && v(e.s) && v(e.v) ? (n = P(e.s), a = P(e.v), r = ct(e.h, n, a), l = !0, i = "hsv") : v(e.h) && v(e.s) && v(e.l) && (n = P(e.s), o = P(e.l), r = lt(e.h, n, o), l = !0, i = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (t = e.a)), t = ot(t), {
    ok: l,
    format: e.format || i,
    r: Math.min(255, Math.max(r.r, 0)),
    g: Math.min(255, Math.max(r.g, 0)),
    b: Math.min(255, Math.max(r.b, 0)),
    a: t
  };
}
var ft = "[-\\+]?\\d+%?", dt = "[-\\+]?\\d*\\.\\d+%?", O = "(?:".concat(dt, ")|(?:").concat(ft, ")"), U = "[\\s|\\(]+(".concat(O, ")[,|\\s]+(").concat(O, ")[,|\\s]+(").concat(O, ")\\s*\\)?"), V = "[\\s|\\(]+(".concat(O, ")[,|\\s]+(").concat(O, ")[,|\\s]+(").concat(O, ")[,|\\s]+(").concat(O, ")\\s*\\)?"), b = {
  CSS_UNIT: new RegExp(O),
  rgb: new RegExp("rgb" + U),
  rgba: new RegExp("rgba" + V),
  hsl: new RegExp("hsl" + U),
  hsla: new RegExp("hsla" + V),
  hsv: new RegExp("hsv" + U),
  hsva: new RegExp("hsva" + V),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function pt(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var r = !1;
  if (ce[e])
    e = ce[e], r = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var t = b.rgb.exec(e);
  return t ? { r: t[1], g: t[2], b: t[3] } : (t = b.rgba.exec(e), t ? { r: t[1], g: t[2], b: t[3], a: t[4] } : (t = b.hsl.exec(e), t ? { h: t[1], s: t[2], l: t[3] } : (t = b.hsla.exec(e), t ? { h: t[1], s: t[2], l: t[3], a: t[4] } : (t = b.hsv.exec(e), t ? { h: t[1], s: t[2], v: t[3] } : (t = b.hsva.exec(e), t ? { h: t[1], s: t[2], v: t[3], a: t[4] } : (t = b.hex8.exec(e), t ? {
    r: m(t[1]),
    g: m(t[2]),
    b: m(t[3]),
    a: ue(t[4]),
    format: r ? "name" : "hex8"
  } : (t = b.hex6.exec(e), t ? {
    r: m(t[1]),
    g: m(t[2]),
    b: m(t[3]),
    format: r ? "name" : "hex"
  } : (t = b.hex4.exec(e), t ? {
    r: m(t[1] + t[1]),
    g: m(t[2] + t[2]),
    b: m(t[3] + t[3]),
    a: ue(t[4] + t[4]),
    format: r ? "name" : "hex8"
  } : (t = b.hex3.exec(e), t ? {
    r: m(t[1] + t[1]),
    g: m(t[2] + t[2]),
    b: m(t[3] + t[3]),
    format: r ? "name" : "hex"
  } : !1)))))))));
}
function v(e) {
  return !!b.CSS_UNIT.exec(String(e));
}
var I = 2, se = 0.16, mt = 0.05, gt = 0.05, bt = 0.15, Pe = 5, Ie = 4, vt = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function fe(e) {
  var r = e.r, t = e.g, n = e.b, a = ut(r, t, n);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function $(e) {
  var r = e.r, t = e.g, n = e.b;
  return "#".concat(st(r, t, n));
}
function yt(e, r, t) {
  var n = t / 100, a = {
    r: (r.r - e.r) * n + e.r,
    g: (r.g - e.g) * n + e.g,
    b: (r.b - e.b) * n + e.b
  };
  return a;
}
function de(e, r, t) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = t ? Math.round(e.h) - I * r : Math.round(e.h) + I * r : n = t ? Math.round(e.h) + I * r : Math.round(e.h) - I * r, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function pe(e, r, t) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return t ? n = e.s - se * r : r === Ie ? n = e.s + se : n = e.s + mt * r, n > 1 && (n = 1), t && r === Pe && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function me(e, r, t) {
  var n;
  return t ? n = e.v + gt * r : n = e.v - bt * r, n > 1 && (n = 1), Number(n.toFixed(2));
}
function Y(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [], n = T(e), a = Pe; a > 0; a -= 1) {
    var o = fe(n), l = $(T({
      h: de(o, a, !0),
      s: pe(o, a, !0),
      v: me(o, a, !0)
    }));
    t.push(l);
  }
  t.push($(n));
  for (var i = 1; i <= Ie; i += 1) {
    var u = fe(n), f = $(T({
      h: de(u, i),
      s: pe(u, i),
      v: me(u, i)
    }));
    t.push(f);
  }
  return r.theme === "dark" ? vt.map(function(d) {
    var _ = d.index, N = d.opacity, F = $(yt(T(r.backgroundColor || "#141414"), T(t[_]), N * 100));
    return F;
  }) : t;
}
var W = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, R = {}, G = {};
Object.keys(W).forEach(function(e) {
  R[e] = Y(W[e]), R[e].primary = R[e][5], G[e] = Y(W[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), G[e].primary = G[e][5];
});
var ht = R.blue, Ct = Symbol("iconContext"), $e = function() {
  return Ge(Ct, {
    prefixCls: S("anticon"),
    rootClassName: S(""),
    csp: S()
  });
};
function Z() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function xt(e, r) {
  return e && e.contains ? e.contains(r) : !1;
}
var ge = "data-vc-order", Ot = "vc-icon-key", Q = /* @__PURE__ */ new Map();
function Re() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.mark;
  return r ? r.startsWith("data-") ? r : "data-".concat(r) : Ot;
}
function J(e) {
  if (e.attachTo)
    return e.attachTo;
  var r = document.querySelector("head");
  return r || document.body;
}
function wt(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Me(e) {
  return Array.from((Q.get(e) || e).children).filter(function(r) {
    return r.tagName === "STYLE";
  });
}
function Ee(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Z())
    return null;
  var t = r.csp, n = r.prepend, a = document.createElement("style");
  a.setAttribute(ge, wt(n)), t && t.nonce && (a.nonce = t.nonce), a.innerHTML = e;
  var o = J(r), l = o.firstChild;
  if (n) {
    if (n === "queue") {
      var i = Me(o).filter(function(u) {
        return ["prepend", "prependQueue"].includes(u.getAttribute(ge));
      });
      if (i.length)
        return o.insertBefore(a, i[i.length - 1].nextSibling), a;
    }
    o.insertBefore(a, l);
  } else
    o.appendChild(a);
  return a;
}
function St(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = J(r);
  return Me(t).find(function(n) {
    return n.getAttribute(Re(r)) === e;
  });
}
function _t(e, r) {
  var t = Q.get(e);
  if (!t || !xt(document, t)) {
    var n = Ee("", r), a = n.parentNode;
    Q.set(e, a), e.removeChild(n);
  }
}
function kt(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = J(t);
  _t(n, t);
  var a = St(r, t);
  if (a)
    return t.csp && t.csp.nonce && a.nonce !== t.csp.nonce && (a.nonce = t.csp.nonce), a.innerHTML !== e && (a.innerHTML = e), a;
  var o = Ee(e, t);
  return o.setAttribute(Re(t), r), o;
}
function be(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? Object(arguments[r]) : {}, n = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    }))), n.forEach(function(a) {
      Tt(e, a, t[a]);
    });
  }
  return e;
}
function Tt(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function jt(e, r) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(r));
}
function At(e, r) {
  jt(e, "[@ant-design/icons-vue] ".concat(r));
}
function ve(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function X(e, r, t) {
  return t ? oe(e.tag, be({
    key: r
  }, t, e.attrs), (e.children || []).map(function(n, a) {
    return X(n, "".concat(r, "-").concat(e.tag, "-").concat(a));
  })) : oe(e.tag, be({
    key: r
  }, e.attrs), (e.children || []).map(function(n, a) {
    return X(n, "".concat(r, "-").concat(e.tag, "-").concat(a));
  }));
}
function Ne(e) {
  return Y(e)[0];
}
function qe(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Ft = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;
function ze(e) {
  return e && e.getRootNode && e.getRootNode();
}
function Pt(e) {
  return Z() ? ze(e) instanceof ShadowRoot : !1;
}
function It(e) {
  return Pt(e) ? ze(e) : null;
}
var $t = function() {
  var r = $e(), t = r.prefixCls, n = r.csp, a = Ye(), o = Ft;
  t && (o = o.replace(/anticon/g, t.value)), Qe(function() {
    if (Z()) {
      var l = a.vnode.el, i = It(l);
      kt(o, "@ant-design-vue-icons", {
        prepend: !0,
        csp: n.value,
        attachTo: i
      });
    }
  });
}, Rt = ["icon", "primaryColor", "secondaryColor"];
function Mt(e, r) {
  if (e == null) return {};
  var t = Et(e, r), n, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      n = o[a], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]);
  }
  return t;
}
function Et(e, r) {
  if (e == null) return {};
  var t = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(r.indexOf(a) >= 0) && (t[a] = e[a]);
  return t;
}
function M(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? Object(arguments[r]) : {}, n = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    }))), n.forEach(function(a) {
      Nt(e, a, t[a]);
    });
  }
  return e;
}
function Nt(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var A = Xe({
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
});
function qt(e) {
  var r = e.primaryColor, t = e.secondaryColor;
  A.primaryColor = r, A.secondaryColor = t || Ne(r), A.calculated = !!t;
}
function zt() {
  return M({}, A);
}
var w = function(r, t) {
  var n = M({}, r, t.attrs), a = n.icon, o = n.primaryColor, l = n.secondaryColor, i = Mt(n, Rt), u = A;
  if (o && (u = {
    primaryColor: o,
    secondaryColor: l || Ne(o)
  }), At(ve(a), "icon should be icon definiton, but got ".concat(a)), !ve(a))
    return null;
  var f = a;
  return f && typeof f.icon == "function" && (f = M({}, f, {
    icon: f.icon(u.primaryColor, u.secondaryColor)
  })), X(f.icon, "svg-".concat(f.name), M({}, i, {
    "data-icon": f.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
w.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
w.inheritAttrs = !1;
w.displayName = "IconBase";
w.getTwoToneColors = zt;
w.setTwoToneColors = qt;
function Bt(e, r) {
  return Ut(e) || Dt(e, r) || Lt(e, r) || Ht();
}
function Ht() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Lt(e, r) {
  if (e) {
    if (typeof e == "string") return ye(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ye(e, r);
  }
}
function ye(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function Dt(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n = [], a = !0, o = !1, l, i;
    try {
      for (t = t.call(e); !(a = (l = t.next()).done) && (n.push(l.value), !(r && n.length === r)); a = !0)
        ;
    } catch (u) {
      o = !0, i = u;
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (o) throw i;
      }
    }
    return n;
  }
}
function Ut(e) {
  if (Array.isArray(e)) return e;
}
function Be(e) {
  var r = qe(e), t = Bt(r, 2), n = t[0], a = t[1];
  return w.setTwoToneColors({
    primaryColor: n,
    secondaryColor: a
  });
}
function Vt() {
  var e = w.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Wt = E({
  name: "InsertStyles",
  setup: function() {
    return $t(), function() {
      return null;
    };
  }
}), Gt = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function Yt(e, r) {
  return Jt(e) || Zt(e, r) || Xt(e, r) || Qt();
}
function Qt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xt(e, r) {
  if (e) {
    if (typeof e == "string") return he(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return he(e, r);
  }
}
function he(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function Zt(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n = [], a = !0, o = !1, l, i;
    try {
      for (t = t.call(e); !(a = (l = t.next()).done) && (n.push(l.value), !(r && n.length === r)); a = !0)
        ;
    } catch (u) {
      o = !0, i = u;
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (o) throw i;
      }
    }
    return n;
  }
}
function Jt(e) {
  if (Array.isArray(e)) return e;
}
function Ce(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? Object(arguments[r]) : {}, n = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    }))), n.forEach(function(a) {
      j(e, a, t[a]);
    });
  }
  return e;
}
function j(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function Kt(e, r) {
  if (e == null) return {};
  var t = er(e, r), n, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      n = o[a], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]);
  }
  return t;
}
function er(e, r) {
  if (e == null) return {};
  var t = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(r.indexOf(a) >= 0) && (t[a] = e[a]);
  return t;
}
Be(ht.primary);
var y = function(r, t) {
  var n, a = Ce({}, r, t.attrs), o = a.class, l = a.icon, i = a.spin, u = a.rotate, f = a.tabindex, d = a.twoToneColor, _ = a.onClick, N = Kt(a, Gt), F = $e(), q = F.prefixCls, ne = F.rootClassName, Le = (n = {}, j(n, ne.value, !!ne.value), j(n, q.value, !0), j(n, "".concat(q.value, "-").concat(l.name), !!l.name), j(n, "".concat(q.value, "-spin"), !!i || l.name === "loading"), n), z = f;
  z === void 0 && _ && (z = -1);
  var De = u ? {
    msTransform: "rotate(".concat(u, "deg)"),
    transform: "rotate(".concat(u, "deg)")
  } : void 0, Ue = qe(d), ae = Yt(Ue, 2), Ve = ae[0], We = ae[1];
  return c("span", Ce({
    role: "img",
    "aria-label": l.name
  }, N, {
    onClick: _,
    class: [Le, o],
    tabindex: z
  }), [c(w, {
    icon: l,
    primaryColor: Ve,
    secondaryColor: We,
    style: De
  }, null), c(Wt, null, null)]);
};
y.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: [String, Array]
};
y.displayName = "AntdIcon";
y.inheritAttrs = !1;
y.getTwoToneColor = Vt;
y.setTwoToneColor = Be;
var tr = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" };
function xe(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? Object(arguments[r]) : {}, n = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    }))), n.forEach(function(a) {
      rr(e, a, t[a]);
    });
  }
  return e;
}
function rr(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var K = function(r, t) {
  var n = xe({}, r, t.attrs);
  return c(y, xe({}, n, {
    icon: tr
  }), null);
};
K.displayName = "CloseOutlined";
K.inheritAttrs = !1;
var nr = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z" } }, { tag: "path", attrs: { d: "M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z" } }] }, name: "form", theme: "outlined" };
function Oe(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? Object(arguments[r]) : {}, n = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    }))), n.forEach(function(a) {
      ar(e, a, t[a]);
    });
  }
  return e;
}
function ar(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var ee = function(r, t) {
  var n = Oe({}, r, t.attrs);
  return c(y, Oe({}, n, {
    icon: nr
  }), null);
};
ee.displayName = "FormOutlined";
ee.inheritAttrs = !1;
var or = { icon: function(r, t) {
  return { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M384 185h456v136H384zm-200 0h136v656H184zm696-73H144c-17.7 0-32 14.3-32 32v1c0-17.7 14.3-32 32-32h736c17.7 0 32 14.3 32 32v-1c0-17.7-14.3-32-32-32zM384 385h456v456H384z", fill: t } }, { tag: "path", attrs: { d: "M880 113H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V145c0-17.7-14.3-32-32-32zM320 841H184V185h136v656zm520 0H384V385h456v456zm0-520H384V185h456v136z", fill: r } }] };
}, name: "layout", theme: "twotone" };
function we(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? Object(arguments[r]) : {}, n = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    }))), n.forEach(function(a) {
      ir(e, a, t[a]);
    });
  }
  return e;
}
function ir(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var te = function(r, t) {
  var n = we({}, r, t.attrs);
  return c(y, we({}, n, {
    icon: or
  }), null);
};
te.displayName = "LayoutTwoTone";
te.inheritAttrs = !1;
var lr = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { tag: "path", attrs: { d: "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z" } }] }, name: "plus", theme: "outlined" };
function Se(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? Object(arguments[r]) : {}, n = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    }))), n.forEach(function(a) {
      ur(e, a, t[a]);
    });
  }
  return e;
}
function ur(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var re = function(r, t) {
  var n = Se({}, r, t.attrs);
  return c(y, Se({}, n, {
    icon: lr
  }), null);
};
re.displayName = "PlusOutlined";
re.inheritAttrs = !1;
const cr = { class: "fixed-button" }, sr = /* @__PURE__ */ E({
  __name: "FixedButton",
  setup(e) {
    return (r, t) => (x(), C("div", cr, [
      c(s(te))
    ]));
  }
}), He = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, a] of r)
    t[n] = a;
  return t;
}, fr = /* @__PURE__ */ He(sr, [["__scopeId", "data-v-995c63e9"]]), dr = [
  { label: "Input", value: "input" },
  { label: "Select", value: "select" },
  { label: "Checkbox", value: "checkbox" },
  { label: "Radio", value: "radio" },
  { label: "Date", value: "date" },
  { label: "File", value: "file" }
], pr = [
  { label: "Yes", value: 1 },
  { label: "No", value: 0 }
], mr = [
  {
    label: "1",
    value: "lg:col-span-1 col-span-12"
  },
  {
    label: "2",
    value: "lg:col-span-2 col-span-12"
  },
  {
    label: "3",
    value: "lg:col-span-3 col-span-6"
  },
  {
    label: "4",
    value: "lg:col-span-4 col-span-6"
  },
  {
    label: "5",
    value: "lg:col-span-5 col-span-12"
  },
  {
    label: "6",
    value: "lg:col-span-6 col-span-12"
  },
  {
    label: "7",
    value: "lg:col-span-7 col-span-12"
  },
  {
    label: "8",
    value: "lg:col-span-8 col-span-12"
  },
  {
    label: "9",
    value: "lg:col-span-9 col-span-12"
  },
  {
    label: "10",
    value: "lg:col-span-10 col-span-12"
  },
  {
    label: "11",
    value: "lg:col-span-11 col-span-12"
  },
  {
    label: "12",
    value: "lg:col-span-12 col-span-12"
  }
];
function _e() {
  return `import { Input } from 'ant-design-vue';
 `;
}
function ke() {
  return `import { Select } from 'ant-design-vue';
 `;
}
function Te() {
  return `import { DatePicker } from 'ant-design-vue';
 `;
}
function je() {
  return `import { Radio } from 'ant-design-vue';
 `;
}
function Ae() {
  return `import { Checkbox } from 'ant-design-vue';
 `;
}
function Fe() {
  return `import { Upload } from 'ant-design-vue';
 `;
}
function gr(e) {
  return e[0].api ? `
  const formRef = ref(null)
  const formState = reactive({
   ${e.map((r) => `${r.api}: '',`).join(`
`)} 

  })
  ` : "";
}
function br(e) {
  return ` 
 import type { Rule } from 'ant-design-vue/es/form' 

  const rules:Record<string, Rule[]> = {
    ${e.filter((r) => r.isRequired).map(
    (r) => `${r.api}: [{ required: true, message: 'Please input ${r.label}', trigger: 'change' }],`
  ).join(`
`)}
  }
  `;
}
function vr() {
  return `
    async function handleSubmit() {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    formRef.value.validate()
  } catch (e) {
    console.error('Form submission failed:', e)
  }
}

const handleReset = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  formRef.value.resetFields()
}

    `;
}
function yr(e, r) {
  return `
  <h1 class="text-[#181818] font-medium text-2xl leading-[130%] my-6">${r}</h1>
    <Form
      @submit="handleSubmit"
      ref="formRef"
      :model="formState"
      :rules
      class="flex flex-col gap-6"
    >
      <div class="grid grid-cols-12 gap-6">
        ${e.map(
    (t) => `
 <!-- ${t.api} --> 

        <div class="${t.gridCol}">
          <FormItem name="${t.api}">
            <label class="text-sm font-medium text-[#181818] mb-2 inline-block">${t.label}
              ${t.isRequired ? "<BaseRequiredLabel></BaseRequiredLabel>" : ""}
            </label>
            <Input v-model.number="formState.${t.api}"></Input>
          </FormItem>
        </div>
        `
  ).join(`
`)}
</div>
</Form>
  `;
}
function hr(e, r) {
  return `
    <script setup lang="ts">
    ${e} 

    <\/script> 

    
    <template>
    ${r}
    </template>
    `;
}
const Cr = { class: "grid grid-cols-12 2xl:gap-6 gap-4" }, xr = { class: "lg:col-span-6 col-span-12" }, Or = { class: "col-span-11 grid grid-cols-12 gap-4" }, wr = { class: "col-span-1 flex items-center justify-center" }, Sr = ["onClick"], _r = { class: "flex items-center justify-end" }, kr = {
  key: 0,
  class: "mt-4 bg-gray-100 p-4 rounded text-sm font-mono relative"
}, Tr = { id: "formCode" }, jr = /* @__PURE__ */ E({
  __name: "FormBuilder",
  setup(e) {
    const r = S(!1), t = S(""), n = S([
      {
        type: "input",
        label: "",
        isRequired: 0,
        gridCol: "lg:col-span-12 col-span-12",
        api: ""
      }
    ]);
    function a() {
      let l = `
 import {Form, FormItem} from 'ant-design-vue';
  import { reactive, ref } from 'vue' 

 `, i = "";
      for (const u of n.value)
        switch (u.type) {
          case "input":
            l.includes(_e()) || (l += _e());
            break;
          case "select":
            l.includes(ke()) || (l += ke());
            break;
          case "checkbox":
            l.includes(Ae()) || (l += Ae());
            break;
          case "radio":
            l.includes(je()) || (l += je());
            break;
          case "date":
            l.includes(Te()) || (l += Te());
            break;
          case "file":
            l.includes(Fe()) || (l += Fe());
            break;
        }
      return l += gr(n.value), l += br(n.value), l += vr(), i += yr(n.value, t.value), r.value = !0, hr(l, i);
    }
    function o() {
      const l = document.createElement("textarea");
      l.value = a(), document.body.appendChild(l), l.select(), document.execCommand("copy"), document.body.removeChild(l);
    }
    return (l, i) => (x(), C(ie, null, [
      p("form", {
        onSubmit: Je(a, ["prevent"])
      }, [
        p("div", Cr, [
          p("div", xr, [
            c(s(k), null, {
              default: h(() => [
                i[2] || (i[2] = p("label", { for: "formtitle" }, "Form title", -1)),
                c(s(B), {
                  value: t.value,
                  "onUpdate:value": i[0] || (i[0] = (u) => t.value = u),
                  size: "large",
                  id: "formtitle",
                  class: "mt-2",
                  placeholder: "Form title"
                }, null, 8, ["value"])
              ]),
              _: 1,
              __: [2]
            })
          ]),
          (x(!0), C(ie, null, Ke(n.value, (u, f) => (x(), C("div", {
            class: "grid grid-cols-12 items-center gap-4 col-span-12",
            key: f
          }, [
            p("div", Or, [
              c(s(k), { class: "col-span-3" }, {
                default: h(() => [
                  i[3] || (i[3] = p("label", { for: "api" }, "Field api", -1)),
                  c(s(B), {
                    size: "large",
                    value: u.api,
                    "onUpdate:value": (d) => u.api = d,
                    id: "api",
                    class: "mt-2",
                    placeholder: "Field  api"
                  }, null, 8, ["value", "onUpdate:value"])
                ]),
                _: 2,
                __: [3]
              }, 1024),
              c(s(k), { class: "col-span-2" }, {
                default: h(() => [
                  i[4] || (i[4] = p("label", { for: "fieldtype" }, "Field type", -1)),
                  c(s(H), {
                    size: "large",
                    options: s(dr),
                    value: u.type,
                    "onUpdate:value": (d) => u.type = d,
                    id: "fieldtype",
                    class: "mt-2",
                    placeholder: "Field type"
                  }, null, 8, ["options", "value", "onUpdate:value"])
                ]),
                _: 2,
                __: [4]
              }, 1024),
              c(s(k), { class: "col-span-3" }, {
                default: h(() => [
                  i[5] || (i[5] = p("label", { for: "fieldtitle" }, "Field label", -1)),
                  c(s(B), {
                    size: "large",
                    value: u.label,
                    "onUpdate:value": (d) => u.label = d,
                    id: "fieldtitle",
                    class: "mt-2",
                    placeholder: "Field title"
                  }, null, 8, ["value", "onUpdate:value"])
                ]),
                _: 2,
                __: [5]
              }, 1024),
              c(s(k), { class: "col-span-2" }, {
                default: h(() => [
                  i[6] || (i[6] = p("label", { for: "required" }, "Required", -1)),
                  c(s(H), {
                    size: "large",
                    options: s(pr),
                    value: u.isRequired,
                    "onUpdate:value": (d) => u.isRequired = d,
                    id: "required",
                    class: "mt-2",
                    placeholder: "Required"
                  }, null, 8, ["options", "value", "onUpdate:value"])
                ]),
                _: 2,
                __: [6]
              }, 1024),
              c(s(k), { class: "col-span-2" }, {
                default: h(() => [
                  i[7] || (i[7] = p("label", { for: "gridcol" }, "Grid column", -1)),
                  c(s(H), {
                    size: "large",
                    options: s(mr),
                    value: u.gridCol,
                    "onUpdate:value": (d) => u.gridCol = d,
                    id: "gridcol",
                    class: "mt-2",
                    placeholder: "Grid column"
                  }, null, 8, ["options", "value", "onUpdate:value"])
                ]),
                _: 2,
                __: [7]
              }, 1024)
            ]),
            p("div", wr, [
              f === n.value.length - 1 ? (x(), C("button", {
                key: 0,
                type: "button",
                class: "cursor-pointer",
                onClick: i[1] || (i[1] = (d) => n.value.push({
                  type: "input",
                  label: "",
                  isRequired: 0,
                  gridCol: "lg:col-span-12 col-span-12",
                  api: ""
                }))
              }, [
                c(s(re))
              ])) : (x(), C("button", {
                key: 1,
                type: "button",
                class: "cursor-pointer",
                onClick: (d) => n.value.splice(f, 1)
              }, [
                c(s(K))
              ], 8, Sr))
            ])
          ]))), 128))
        ]),
        p("div", _r, [
          c(s(tt), {
            class: "submit-btn",
            "html-type": "submit",
            size: "large",
            type: "primary",
            onClick: a
          }, {
            default: h(() => [
              c(s(ee), { class: "self-center" }),
              i[8] || (i[8] = p("span", { class: "" }, " Generate form ", -1))
            ]),
            _: 1,
            __: [8]
          })
        ])
      ], 32),
      r.value ? (x(), C("div", kr, [
        p("div", { class: "absolute top-2 right-2 text-xs text-gray-500" }, [
          p("span", {
            class: "cursor-pointer",
            onClick: o
          }, "Copy")
        ]),
        p("pre", Tr, [
          i[9] || (i[9] = le("        ", -1)),
          p("code", null, `
          ` + et(a()) + `
        `, 1),
          i[10] || (i[10] = le(`
      `, -1))
        ])
      ])) : Ze("", !0)
    ], 64));
  }
}), Ar = /* @__PURE__ */ He(jr, [["__scopeId", "data-v-1abaf39d"]]), Fr = /* @__PURE__ */ E({
  __name: "App",
  setup(e) {
    const r = S(!1);
    return (t, n) => (x(), C("div", null, [
      c(fr, {
        onClick: n[0] || (n[0] = (a) => r.value = !0)
      }),
      c(s(rt), {
        footer: "",
        title: "Form Builder",
        width: "90%",
        open: r.value,
        "onUpdate:open": n[1] || (n[1] = (a) => r.value = a)
      }, {
        default: h(() => [
          c(Ar)
        ]),
        _: 1
      }, 8, ["open"])
    ]));
  }
}), $r = {
  install(e) {
    e.component("SXAntFormBuilder", Fr);
  }
};
export {
  $r as default
};
