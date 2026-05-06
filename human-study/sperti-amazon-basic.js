/* --- inline script #1 --- */
var aPageStart = new Date().getTime();

/* --- inline script #2 --- */
var ue_t0 = ue_t0 || +new Date();

/* --- inline script #3 --- */
window.ue_ihb = (window.ue_ihb || window.ueinit || 0) + 1;
      if (window.ue_ihb === 1) {
        var ue_csm = window,
          ue_hob = +new Date();
        (function (d) {
          var e = (d.ue = d.ue || {}),
            f =
              Date.now ||
              function () {
                return +new Date();
              };
          e.d = function (b) {
            return f() - (b ? 0 : d.ue_t0);
          };
          e.stub = function (b, a) {
            if (!b[a]) {
              var c = [];
              b[a] = function () {
                c.push([c.slice.call(arguments), e.d(), d.ue_id]);
              };
              b[a].replay = function (b) {
                for (var a; (a = c.shift()); ) b(a[0], a[1], a[2]);
              };
              b[a].isStub = 1;
            }
          };
          e.exec = function (b, a) {
            return function () {
              try {
                return b.apply(this, arguments);
              } catch (c) {
                ueLogError(c, { attribution: a || "undefined", logLevel: "WARN" });
              }
            };
          };
        })(ue_csm);

        var ue_err_chan = "jserr-rw";
        (function (d, e) {
          function h(f, b) {
            if (!(a.ec > a.mxe) && f) {
              a.ter.push(f);
              b = b || {};
              var c = f.logLevel || b.logLevel;
              (c && c !== k && c !== m && c !== n && c !== p) || a.ec++;
              (c && c != k) || a.ecf++;
              b.pageURL = "" + (e.location ? e.location.href : "");
              b.logLevel = c;
              b.attribution = f.attribution || b.attribution;
              a.erl.push({ ex: f, info: b });
            }
          }
          function l(a, b, c, e, g) {
            d.ueLogError(
              { m: a, f: b, l: c, c: "" + e, err: g, fromOnError: 1, args: arguments },
              g ? { attribution: g.attribution, logLevel: g.logLevel } : void 0,
            );
            return !1;
          }
          var k = "FATAL",
            m = "ERROR",
            n = "WARN",
            p = "DOWNGRADED",
            a = {
              ec: 0,
              ecf: 0,
              pec: 0,
              ts: 0,
              erl: [],
              ter: [],
              buffer: [],
              mxe: 50,
              startTimer: function () {
                a.ts++;
                setInterval(function () {
                  d.ue && a.pec < a.ec && d.uex("at");
                  a.pec = a.ec;
                }, 1e4);
              },
            };
          l.skipTrace = 1;
          h.skipTrace = 1;
          h.isStub = 1;
          d.ueLogError = h;
          d.ue_err = a;
          e.onerror = l;
        })(ue_csm, window);

        var ue_id = "XFYA4Y2AJY08MAT6G7D8",
          ue_url = "/rd/uedata",
          ue_drfp = true,
          ue_navtiming = 1,
          ue_mid = "ATVPDKIKX0DER",
          ue_sid = "132-4911001-2878963",
          ue_sn = "www.amazon.com",
          ue_furl = "fls-na.amazon.com",
          ue_surl = "https://unagi.amazon.com/1/events/com.amazon.csm.nexusclient.prod",
          ue_int = 0,
          ue_fcsn = 1,
          ue_urt = 3,
          ue_rpl_ns = "cel-rpl",
          ue_ddq = 1,
          ue_fpf = "//fls-na.amazon.com/1/batch/1/OP/ATVPDKIKX0DER:132-4911001-2878963:XFYA4Y2AJY08MAT6G7D8$uedata=s:",
          ue_sbuimp = 1,
          ue_ibft = 0,
          ue_lpsi = 6000,
          ue_lob = "1",
          ue_act = "-1",
          ue_dsbl_cel = 1,
          add_uedata_url = 1,
          ue_swi = 1;
        var ue_viz = function () {
          (function (b, f, d) {
            function g() {
              return (!(p in d) || 0 < d[p]) && (!(q in d) || 0 < d[q]);
            }
            function h(c) {
              if (b.ue.viz.length < w && !r) {
                var a = c.type;
                c = c.originalEvent;
                (/^focus./.test(a) && c && (c.toElement || c.fromElement || c.relatedTarget)) ||
                  ((a = g() ? f[s] || ("blur" == a || "focusout" == a ? t : u) : t),
                  b.ue.viz.push(a + ":" + (+new Date() - b.ue.t0)),
                  a == u && (b.ue.isl && x("at"), (r = 1)));
              }
            }
            for (
              var r = 0,
                x = b.uex,
                a,
                k,
                l,
                s,
                v = ["", "webkit", "o", "ms", "moz"],
                e = 0,
                m = 1,
                u = "visible",
                t = "hidden",
                p = "innerWidth",
                q = "innerHeight",
                w = 20,
                n = 0;
              n < v.length && !e;
              n++
            )
              if (((a = v[n]), (k = (a ? a + "H" : "h") + "idden"), (e = "boolean" == typeof f[k])))
                ((l = a + "visibilitychange"), (s = (a ? a + "V" : "v") + "isibilityState"));
            h({});
            e && f.addEventListener(l, h, 0);
            m = g() ? 1 : 0;
            d.addEventListener(
              "resize",
              function () {
                var a = g() ? 1 : 0;
                m !== a && ((m = a), h({}));
              },
              { passive: !0 },
            );
            b.ue && e && (b.ue.pageViz = { event: l, propHid: k });
          })(ue_csm, ue_csm.document, ue_csm.window);
        };
        window.ue_viz = ue_viz;

        (function (d, h, P) {
          function G(a) {
            return a && a.replace && a.replace(/^\s+|\s+$/g, "");
          }
          function v(a) {
            return "undefined" === typeof a;
          }
          function K(a) {
            return "function" === typeof a;
          }
          function E(a, b) {
            for (var c in b) b[w](c) && (a[c] = b[c]);
          }
          function L(a) {
            try {
              var b = P.cookie.match(RegExp("(^| )" + a + "=([^;]+)"));
              if (b) return b[2].trim();
            } catch (c) {}
          }
          function Q(l, b, c) {
            var t = (B || {}).type;
            if ("device" !== c || (2 !== t && 1 !== t)) {
              if (l) {
                d.ue_id = a.id = a.rid = l;
                if ("device" === c || "pre-fetch" === c) a.oid = G(l);
                p &&
                  (p = p.replace(/((.*?:){2})(\w+)/, function (a, b) {
                    return b + l;
                  }));
                H && (e("id", H, l), (H = 0));
              }
              b &&
                (p &&
                  (p = p.replace(/(.*?:)(\w|-)+/, function (a, c) {
                    return c + b;
                  })),
                (d.ue_sid = b));
              c && a.tag("page-source:" + c);
              d.ue_fpf = p;
            }
          }
          function R() {
            var a = {};
            return function (b) {
              b && (a[b] = 1);
              b = [];
              for (var c in a) a[w](c) && b.push(c);
              return b;
            };
          }
          function D(d, b, c, t) {
            t = t || +new I();
            var f, h;
            if (b || v(c)) {
              if (d) for (h in ((f = b ? e("t", b) || e("t", b, {}) : a.t), (f[d] = t), c)) c[w](h) && e(h, b, c[h]);
              return t;
            }
          }
          function e(d, b, c) {
            var e = b && b != a.id ? a.sc[b] : a;
            e || (e = a.sc[b] = {});
            "id" === d && c && (S = 1);
            return (e[d] = c || e[d]);
          }
          function T(d, b, c, e, f) {
            c = "on" + c;
            var h = b[c];
            K(h) ? d && (a.h[d] = h) : (h = function () {});
            b[c] = function (a) {
              f ? (e(a), h(a)) : (h(a), e(a));
            };
            b[c] && (b[c].isUeh = 1);
          }
          function U(l, b, c, t) {
            function r(b, c) {
              var d = [b],
                g = 0,
                f = {},
                t,
                k;
              u.latency = {};
              c ? (d.push("m=1"), (f[c] = 1)) : (f = a.sc);
              for (k in f)
                if (f[w](k)) {
                  var m = e("wb", k),
                    r = e("t", k) || {},
                    C = e("t0", k) || a.t0,
                    q,
                    n;
                  if (c || 2 == m) {
                    q = m ? g++ : "";
                    d.push("sc" + q + "=" + k);
                    var s = z,
                      p = z;
                    2 == m && h.csa
                      ? (p = (s = h.csa("Content", { element: { type: "scope", slotId: k } })) && K(s)) &&
                        +C &&
                        s("mark", "t0", +C)
                      : (s = p = z);
                    for (n in r)
                      v(r[n]) || null === r[n] || (d.push(n + q + "=" + (r[n] - C)), p && s("mark", V[n] || n, +r[n]));
                    d.push("t" + q + "=" + r[l]);
                    u.latency["t" + q] = r[l];
                    if (e("ctb", k) || e("wb", k)) t = 1;
                  }
                }
              !A && t && d.push("ctb=1");
              return d.join("&");
            }
            function C(b, c, g, e, l) {
              if (b) {
                var f = d.ue_err;
                d.ue_url &&
                  !d.ue_drfp &&
                  !e &&
                  !l &&
                  b &&
                  0 < b.length &&
                  ((e = new Image()), a.iel.push(e), (e.src = b), a.count && a.count("postbackImageSize", b.length));
                p
                  ? (l = h.encodeURIComponent) &&
                    b &&
                    ((e = new Image()),
                    (b = "" + d.ue_fpf + l(b) + ":" + (+new I() - d.ue_t0)),
                    a.iel.push(e),
                    (e.src = b))
                  : a.log && (a.log(b, "uedata", { n: 1 }), a.ielf.push(b));
                f && !f.ts && f.startTimer();
                a.b && ((f = a.b), (a.b = ""), C(f, c, g, 1));
              }
            }
            function q(b) {
              var c = B ? B.type : z,
                d = 2 == c || a.isBFonMshop,
                c = c && !d,
                e = a.bfini;
              if (!S || a.isBFCache)
                (e && 1 < e && ((b += "&bfform=1"), c || (a.isBFT = e - 1)),
                  d && ((b += "&bfnt=1"), (a.isBFT = a.isBFT || 1)),
                  a.ssw &&
                    a.isBFT &&
                    (a.isBFonMshop && (a.isNRBF = 0),
                    v(a.isNRBF) && ((d = a.ssw(a.oid)), d.e || v(d.val) || (a.isNRBF = 1 < d.val ? 0 : 1)),
                    v(a.isNRBF) || (b += "&nrbf=" + a.isNRBF)),
                  a.isBFT && !a.isNRBF && (b += "&bft=" + a.isBFT));
              return b;
            }
            if (!a.paused && (b || v(c))) {
              for (var m in c) c[w](m) && e(m, b, c[m]);
              a.isBFonMshop || D("pc", b, c);
              m = "ld" === l && b && e("wb", b);
              var n = e("id", b) || a.id;
              m ||
                n === a.oid ||
                ((H = b), ea(n, (e("t", b) || {}).tc || +e("t0", b), +e("t0", b), e("pty", b), e("spty", b)));
              var n = e("id", b) || a.id,
                s = e("id2", b) || d.ue_id2,
                g = a.url + "?" + l + "&v=" + a.v + "&id=" + n,
                A = e("ctb", b) || e("wb", b),
                u = {
                  eventName: l,
                  version: a.v,
                  id: n,
                  sessionId: d.ue_sid || "",
                  obfuscatedMarketplaceId: d.ue_mid || "",
                },
                x;
              A && (g += "&ctb=" + A);
              s && (g += "&id2=" + s);
              1 < d.ueinit && (g += "&ic=" + d.ueinit);
              if (!(("ld" != l && "ul" != l) || (b && b != n))) {
                if ("ld" == l) {
                  try {
                    h[M] && h[M].isUeh && (h[M] = null);
                  } catch (L) {}
                  if (h.chrome) for (s = 0; s < N.length; s++) W(J, N[s]);
                  (s = P.ue_backdetect) && s.ue_back && s.ue_back.value++;
                  d._uess && (x = d._uess());
                  a.isl = 1;
                }
                a._bf && (g += "&bf=" + a._bf());
                d.ue_navtiming && f && (e("ctb", n, "1"), a.isBFonMshop || D("tc", z, z, O));
                !F ||
                  a.isBFonMshop ||
                  X ||
                  (f &&
                    E(a.t, {
                      na_: f.navigationStart,
                      ul_: f.unloadEventStart,
                      _ul: f.unloadEventEnd,
                      rd_: f.redirectStart,
                      _rd: f.redirectEnd,
                      fe_: f.fetchStart,
                      lk_: f.domainLookupStart,
                      _lk: f.domainLookupEnd,
                      co_: f.connectStart,
                      _co: f.connectEnd,
                      sc_: f.secureConnectionStart,
                      rq_: f.requestStart,
                      rs_: f.responseStart,
                      _rs: f.responseEnd,
                      dl_: f.domLoading,
                      di_: f.domInteractive,
                      de_: f.domContentLoadedEventStart,
                      _de: f.domContentLoadedEventEnd,
                      _dc: f.domComplete,
                      ld_: f.loadEventStart,
                      _ld: f.loadEventEnd,
                      ntd: (K(F.now) && !v(O) ? new I(O + F.now()) - new I() : 0) + a.t0,
                    }),
                  B && E(a.t, { ty: B.type + a.t0, rc: B.redirectCount + a.t0 }),
                  (X = 1));
                a.isBFonMshop || E(a.t, { hob: d.ue_hob, hoe: d.ue_hoe });
                a.ifr && ((g += "&ifr=1"), (u.ifr = !0));
              }
              D(l, b, c, t);
              var y, k;
              m || (b && b !== n) || fa(b);
              (c = d.ue_mbl) && c.cnt && !m && (g += c.cnt());
              m ? e("wb", b, 2) : "ld" == l && (a.lid = G(n));
              for (y in a.sc) if (1 == e("wb", y)) break;
              if (m) {
                if (a.s) return;
                g = r(g, null);
              } else ((c = r(g, null)), c != g && ((c = q(c)), (a.b = c)), x && (g += x), (g = r(g, b || a.id)));
              g = q(g);
              if (a.b || m) for (y in a.sc) 2 == e("wb", y) && delete a.sc[y];
              y = 0;
              a._rt && (g += "&rt=" + a._rt());
              x = h.csa;
              if (!m && x)
                for (k in ((c = e("t", b) || {}), (t = x("PageTiming")), c)) c[w](k) && t("mark", V[k] || k, c[k]);
              m ||
                ((a.s = 0),
                (k = d.ue_err) && 0 < k.ec && k.pec < k.ec && ((k.pec = k.ec), (g += "&ec=" + k.ec + "&ecf=" + k.ecf)),
                (y = e("ctb", b)),
                "ld" !== l || b || a.markers
                  ? a.markers && a.isl && !m && b && E(a.markers, e("t", b))
                  : ((a.markers = {}), E(a.markers, e("t", b))),
                e("t", b, {}));
              a.tag && a.tag().length && ((g += "&csmtags=" + a.tag().join("|")), (u.csmtags = a.tag()), (a.tag = R()));
              k = a.viz || [];
              if ((c = k.length)) ((k = k.splice(0, c)), (g += "&viz=" + k.join("|")), (u.viz = k));
              v(d.ue_pty) ||
                ((g += "&pty=" + d.ue_pty + "&spty=" + d.ue_spty + "&pti=" + d.ue_pti),
                (u.pty = d.ue_pty),
                (u.spty = d.ue_spty),
                (u.pti = d.ue_pti));
              a.tabid && (g += "&tid=" + a.tabid);
              a.aftb && (g += "&aftb=1");
              !a._ui || (b && b != n) || (g += a._ui());
              g += "&lob=" + (d.ue_lob || "0");
              a.a = g;
              C(g, l, y, m, b && "string" === typeof b && -1 !== b.indexOf("csa:"));
              m ||
                ((u.lob = d.ue_lob || "0"),
                d.add_uedata_url && ((u.browserData = g), 2 === d.add_uedata_url && a.isBFT && (u.isBFT = !0)),
                (b = x && x("UEData")) && b("log", u));
            }
          }
          function fa(a) {
            var b = h.ue_csm_markers || {},
              c;
            for (c in b) b[w](c) && D(c, a, z, b[c]);
          }
          function A(a, b, c) {
            c = c || h;
            if (c[Y]) c[Y](a, b, !1);
            else if (c[Z]) c[Z]("on" + a, b);
          }
          function W(a, b, c) {
            c = c || h;
            if (c[$]) c[$](a, b, !1);
            else if (c[aa]) c[aa]("on" + a, b);
          }
          function ba() {
            function a() {
              d.onUl();
            }
            function b(a) {
              return function () {
                c[a] || ((c[a] = 1), U(a));
              };
            }
            var c = {},
              e,
              f;
            d.onLd = b("ld");
            d.onLdEnd = b("ld");
            d.onUl = b("ul");
            e = { stop: b("os") };
            h.chrome ? (A(J, a), N.push(a)) : (e[J] = d.onUl);
            for (f in e) e[w](f) && T(0, h, f, e[f]);
            d.ue_viz && ue_viz();
            A("load", d.onLd);
            D("ue");
          }
          function ea(e, b, c, f, r) {
            var p = d.ue_mbl,
              q = h.csa,
              m = q && q("SPA"),
              q = q && q("PageTiming");
            p && p.ajax && p.ajax(b, c);
            m &&
              q &&
              ((e = { requestId: e, transitionType: "soft" }),
              "string" === typeof f && ((e.pageType = f), (d.ue_pty = f)),
              "string" === typeof r && ((e.subPageType = r), (d.ue_spty = r)),
              m("newPage", e),
              q("mark", "transitionStart", b));
            a.tag("ajax-transition");
          }
          d.ueinit = (d.ueinit || 0) + 1;
          var a = (d.ue = d.ue || {});
          a.t0 = h.aPageStart || d.ue_t0;
          a.id = d.ue_id;
          a.url = d.ue_url;
          a.rid = d.ue_id;
          a.a = "";
          a.b = "";
          a.h = {};
          a.s = 1;
          a.t = {};
          a.sc = {};
          a.iel = [];
          a.ielf = [];
          a.viz = [];
          a.v = "0.345117.0";
          a.paused = !1;
          var w = "hasOwnProperty",
            J = "beforeunload",
            M = "on" + J,
            Y = "addEventListener",
            $ = "removeEventListener",
            Z = "attachEvent",
            aa = "detachEvent",
            V = {
              cf: "criticalFeature",
              af: "aboveTheFold",
              fn: "functional",
              fp: "firstPaint",
              fcp: "firstContentfulPaint",
              bb: "bodyBegin",
              be: "bodyEnd",
              ld: "loaded",
            },
            I = h.Date,
            F = h.performance || h.webkitPerformance,
            f = (F || {}).timing,
            B = (F || {}).navigation,
            O = (f || {}).navigationStart,
            p = d.ue_fpf,
            S = 0,
            X = 0,
            N = [],
            H = 0,
            z;
          a.oid = G(a.id);
          a.lid = G(a.id);
          a._t0 = a.t0;
          a.tag = R();
          a.ifr = h.top !== h.self || h.frameElement ? 1 : 0;
          a.markers = null;
          a.attach = A;
          a.detach = W;
          if ("000-0000000-8675309" === d.ue_sid) {
            var ca = L("cdn-rid"),
              da = L("session-id");
            ca && da && Q(ca, da, "cdn");
          }
          d.uei = ba;
          d.ueh = T;
          d.ues = e;
          d.uet = D;
          d.uex = U;
          a.reset = Q;
          a.pause = function (d) {
            a.paused = d;
          };
          ba();
        })(ue_csm, ue_csm.window, ue_csm.document);

        ue.stub(ue, "event");
        ue.stub(ue, "onSushiUnload");
        ue.stub(ue, "onSushiFlush");

        ue.stub(ue, "log");
        ue.stub(ue, "onunload");
        ue.stub(ue, "onflush");
        (function (b) {
          var a = b.ue;
          a.cv = {};
          a.cv.scopes = {};
          a.cv.buffer = [];
          a.count = function (b, d, c) {
            var e = a.cv;
            a.d();
            c && c.scope && (e = a.cv.scopes[c.scope] = a.cv.scopes[c.scope] || {});
            if (void 0 === d) return e[b];
            e[b] = d;
            a.cv.buffer.push({ c: b, v: d });
          };
          a.count("baselineCounter2", 1);
          a &&
            a.event &&
            (a.event(
              { requestId: b.ue_id || "rid", server: b.ue_sn || "sn", obfuscatedMarketplaceId: b.ue_mid || "mid" },
              "csm",
              "csm.CSMBaselineEvent.4",
            ),
            a.count("nexusBaselineCounter", 1, { bf: 1 }));
        })(ue_csm);

        var ue_hoe = +new Date();
      }
      window.ueinit = window.ue_ihb;

/* --- inline script #4 --- */
window.ue && ue.count && ue.count("CSMLibrarySize", 10611);

/* --- inline script #5 --- */
(function (b, a, c, d) {
        if ((b = b.AmazonUIPageJS || b.P) && b.when && b.register) {
          c = [];
          for (a = a.currentScript; a; a = a.parentElement) a.id && c.push(a.id);
          return b.log("A copy of P has already been loaded on this page.", "FATAL", c.join(" "));
        }
      })(window, document, Date);
      (function (a, b, c, d) {
        "use strict";
        a._pSetI = function () {
          return null;
        };
      })(window, document, Date);
      (function (c, e, I, B) {
        "use strict";
        c._pd = (function () {
          var a, u;
          return function (C, f, h, k, b, D, v, E, F) {
            function w(d) {
              try {
                return d();
              } catch (J) {
                return !1;
              }
            }
            function l() {
              if (m) {
                var d = { w: c.innerWidth || b.clientWidth, h: c.innerHeight || b.clientHeight };
                5 < Math.abs(d.w - q.w) || 50 < d.h - q.h
                  ? ((q = d),
                    (n = 4),
                    (d = a.mobile || a.tablet ? 450 < d.w && d.w > d.h : 1250 <= d.w)
                      ? k(b, "a-ws")
                      : (b.className = v(b, "a-ws")))
                  : 0 < n && (n--, (x = setTimeout(l, 16)));
              }
            }
            function G(d) {
              (m = d === B ? !m : !!d) && l();
            }
            function H() {
              return m;
            }
            if (!u) {
              u = !0;
              var r = (function () {
                  var d = ["O", "ms", "Moz", "Webkit"],
                    c = e.createElement("div");
                  return {
                    testGradients: function () {
                      return !0;
                    },
                    test: function (a) {
                      var b = a.charAt(0).toUpperCase() + a.substr(1);
                      a = (d.join(b + " ") + b + " " + a).split(" ");
                      for (b = a.length; b--; ) if ("" === c.style[a[b]]) return !0;
                      return !1;
                    },
                    testTransform3d: function () {
                      return !0;
                    },
                  };
                })(),
                y = b.className,
                z = /(^| )a-mobile( |$)/.test(y),
                A = /(^| )a-tablet( |$)/.test(y);
              a = {
                audio: function () {
                  return !!e.createElement("audio").canPlayType;
                },
                video: function () {
                  return !!e.createElement("video").canPlayType;
                },
                canvas: function () {
                  return !!e.createElement("canvas").getContext;
                },
                svg: function () {
                  return !!e.createElementNS && !!e.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
                },
                offline: function () {
                  return navigator.hasOwnProperty && navigator.hasOwnProperty("onLine") && navigator.onLine;
                },
                dragDrop: function () {
                  return "draggable" in e.createElement("span");
                },
                geolocation: function () {
                  return !!navigator.geolocation;
                },
                history: function () {
                  return !(!c.history || !c.history.pushState);
                },
                webworker: function () {
                  return !!c.Worker;
                },
                autofocus: function () {
                  return "autofocus" in e.createElement("input");
                },
                inputPlaceholder: function () {
                  return "placeholder" in e.createElement("input");
                },
                textareaPlaceholder: function () {
                  return "placeholder" in e.createElement("textarea");
                },
                localStorage: function () {
                  return "localStorage" in c && null !== c.localStorage;
                },
                orientation: function () {
                  return "orientation" in c;
                },
                touch: function () {
                  return "ontouchend" in e;
                },
                gradients: function () {
                  return r.testGradients();
                },
                hires: function () {
                  var a =
                    (c.devicePixelRatio && 1.5 <= c.devicePixelRatio) ||
                    (c.matchMedia && c.matchMedia("(min-resolution:144dpi)").matches);
                  E("hiRes" + (z ? "Mobile" : A ? "Tablet" : "Desktop"), a ? 1 : 0);
                  return a;
                },
                transform3d: function () {
                  return r.testTransform3d();
                },
                touchScrolling: function () {
                  return f(
                    /Windowshop|android|OS ([5-9]|[1-9][0-9]+)(_[0-9]{1,2})+ like Mac OS X|SOFTWARE=([5-9]|[1-9][0-9]+)(.[0-9]{1,2})+.*DEVICE=iPhone|Chrome|Silk|Firefox|Trident.+?; Touch/i,
                  );
                },
                ios: function () {
                  return f(/OS [1-9][0-9]*(_[0-9]*)+ like Mac OS X/i) && !f(/trident|Edge/i);
                },
                android: function () {
                  return f(/android.([1-9]|[L-Z])/i) && !f(/trident|Edge/i);
                },
                mobile: function () {
                  return z;
                },
                tablet: function () {
                  return A;
                },
                rtl: function () {
                  return "rtl" === b.dir;
                },
              };
              for (var g in a) a.hasOwnProperty(g) && (a[g] = w(a[g]));
              for (
                var t = "textShadow textStroke boxShadow borderRadius borderImage opacity transform transition".split(
                    " ",
                  ),
                  p = 0;
                p < t.length;
                p++
              )
                a[t[p]] = w(function () {
                  return r.test(t[p]);
                });
              var m = !0,
                x = 0,
                q = { w: 0, h: 0 },
                n = 4;
              l();
              h(c, "resize", function () {
                clearTimeout(x);
                n = 4;
                l();
              });
              b.className = v(b, "a-no-js");
              k(b, "a-js");
              !f(/OS [1-8](_[0-9]*)+ like Mac OS X/i) || c.navigator.standalone || f(/safari/i) || k(b, "a-ember");
              h = [];
              for (g in a)
                a.hasOwnProperty(g) &&
                  a[g] &&
                  h.push(
                    "a-" +
                      g.replace(/([A-Z])/g, function (a) {
                        return "-" + a.toLowerCase();
                      }),
                  );
              k(b, h.join(" "));
              b.setAttribute("data-aui-build-date", F);
              C.register("p-detect", function () {
                return {
                  capabilities: a,
                  localStorage: a.localStorage && D,
                  toggleResponsiveGrid: G,
                  responsiveGridEnabled: H,
                };
              });
              return a || {};
            }
          };
        })();
      })(window, document, Date);
      (function (a, p, q, k) {
        function m(e, b, c, g) {
          a.P.when.apply(a.P, b).register("flow:" + e, function () {
            var a = g.apply(this, arguments);
            return c || a;
          });
        }
        function l(e) {
          a.P.log(e, "FATAL", "AmazonUIPageJS@AUIDefineJS");
        }
        function f(a, b, c) {
          Object.defineProperty(a, b, { value: c, writable: !1 });
        }
        function n(e, b, c) {
          "string" !== typeof e && a.P.error("Anonymous modules are not supported.");
          var g = c !== k ? c : "function" === typeof b ? b : k;
          g || a.P.error("A callback must be provided");
          var f,
            h = [];
          if (
            c &&
            Array.isArray(b) &&
            ((h = b.reduce(function (b, d) {
              if ("module" === d || "require" === d) a.P.error('"module" or "require" injection is not supported.');
              else if ("exports" === d) {
                d = f = {};
                var c = "flow:" + e + "-exports";
                a.P.declare(c, d);
                b.push(c);
              } else
                0 !== d.lastIndexOf("@amzn/", 0)
                  ? l("Dependency " + d + " does not begin with '@amzn/'")
                  : b.push("flow:" + d);
              return b;
            }, [])),
            b.length !== h.length)
          )
            return;
          m(e, h, f, g);
        }
        ("use strict");
        Object.prototype.hasOwnProperty.call(a, "aui")
          ? l("AUIDefineJS is already present globally")
          : (f(a, "aui", {}), f(a.aui, "amd_define", n));
      })(window, document, Date);
      (function (g, h, E, F) {
        function N(a) {
          l && l.tag && l.tag(p(":", "aui", a));
        }
        function q(a, b) {
          l && l.count && l.count("aui:" + a, 0 === b ? 0 : b || (l.count("aui:" + a) || 0) + 1);
        }
        function O(a) {
          try {
            return a.test(navigator.userAgent);
          } catch (b) {
            return !1;
          }
        }
        function x(a, b, d) {
          a.addEventListener ? a.addEventListener(b, d, !1) : a.attachEvent && a.attachEvent("on" + b, d);
        }
        function p(a, b, d, e) {
          b = b && d ? b + a + d : b || d;
          return e ? p(a, b, e) : b;
        }
        function y(a, b, d) {
          try {
            Object.defineProperty(a, b, { value: d, writable: !1 });
          } catch (e) {
            a[b] = d;
          }
          return d;
        }
        function P(a, b) {
          a.className = Q(a, b) + " " + b;
        }
        function Q(a, b) {
          return (" " + a.className + " ")
            .split(" " + b + " ")
            .join(" ")
            .replace(/^ | $/g, "");
        }
        function G(a) {
          (a || []).forEach(function (a) {
            a in z || ((z[a] = 1), G(R[a]));
          });
        }
        function ea(a, b, d) {
          var e = a.length,
            f = e,
            c = function () {
              f-- || ((d && z.hasOwnProperty(d) ? A : H).push(b), I || (m ? m.set(B) : setTimeout(B, 0), (I = !0)));
            };
          for (c(); e--; ) S[a[e]] ? c() : (u[a[e]] = u[a[e]] || []).push(c);
        }
        function fa(a, b, d, e, f) {
          var c = h.createElement(a ? "script" : "link");
          x(c, "error", e);
          f && x(c, "load", f);
          a
            ? ((c.type = "text/javascript"),
              (c.async = !0),
              d && /AUIClients|images[/]I/.test(b) && c.setAttribute("crossorigin", "anonymous"),
              (c.src = b))
            : ((c.rel = "stylesheet"), (c.href = b));
          h.getElementsByTagName("head")[0].appendChild(c);
        }
        function T(a, b) {
          return function (d, e) {
            function f() {
              fa(
                b,
                d,
                c,
                function (b) {
                  J
                    ? q("resource_unload")
                    : c
                      ? ((c = !1), q("resource_retry"), f())
                      : (q("resource_error"), a.log("Asset failed to load: " + d));
                  b && b.stopPropagation ? b.stopPropagation() : g.event && (g.event.cancelBubble = !0);
                },
                e,
              );
            }
            if (U[d]) return !1;
            U[d] = !0;
            q("resource_count");
            var c = !0;
            return !f();
          };
        }
        function ha(a, b, d) {
          for (
            var e = {
                name: a,
                guard: function (c) {
                  return b.guardFatal(a, c);
                },
                guardTime: function (a) {
                  return b.guardTime(a);
                },
                logError: function (c, d, e) {
                  b.logError(c, d, e, a);
                },
              },
              f = [],
              c = 0;
            c < d.length;
            c++
          )
            C.hasOwnProperty(d[c]) && (f[c] = K.hasOwnProperty(d[c]) ? K[d[c]](C[d[c]], e) : C[d[c]]);
          return f;
        }
        function v(a, b, d, e, f) {
          return function (c, k) {
            function n() {
              var a = null;
              e ? (a = k) : "function" === typeof k && ((q.start = r()), (a = k.apply(g, ha(c, h, l))), (q.end = r()));
              if (b) {
                C[c] = a;
                a = c;
                for (S[a] = !0; (u[a] || []).length; ) u[a].shift()();
                delete u[a];
              }
              q.done = !0;
            }
            var h = f || this;
            "function" === typeof c && ((k = c), (c = F));
            b &&
              ((c = c ? c.replace(V, "") : "__NONAME__"),
              L.hasOwnProperty(c) &&
                h.error(p(", reregistered by ", p(" by ", c + " already registered", L[c]), h.attribution), c),
              (L[c] = h.attribution));
            for (var l = (R[c] = []), m = 0; m < a.length; m++) l[m] = a[m].replace(V, "");
            var q = (w[c || "anon" + ++ia] = { depend: l, registered: r(), namespace: h.namespace });
            c && z.hasOwnProperty(c) && G(l);
            d ? n() : ea(l, h.guardFatal(c, n), c);
            return {
              decorate: function (a) {
                K[c] = h.guardFatal(c, a);
              },
            };
          };
        }
        function W(a) {
          return function () {
            var b = Array.prototype.slice.call(arguments);
            return { execute: v(b, !1, a, !1, this), register: v(b, !0, a, !1, this) };
          };
        }
        function M(a, b) {
          return function (d, e) {
            e || ((e = d), (d = F));
            var f = this.attribution;
            return function () {
              n.push(b || { attribution: f, name: d, logLevel: a });
              var c = e.apply(this, arguments);
              n.pop();
              return c;
            };
          };
        }
        function D(a, b) {
          this.load = { js: T(this, !0), css: T(this) };
          y(this, "namespace", b);
          y(this, "attribution", a);
        }
        function X() {
          h.body ? k.trigger("a-bodyBegin") : setTimeout(X, 20);
        }
        ("use strict");
        var t = (E.now =
            E.now ||
            function () {
              return +new E();
            }),
          r = (function (a) {
            return a && a.now ? a.now.bind(a) : t;
          })(g.performance),
          ja = r(),
          z = {},
          R = {},
          l = g.ue;
        N();
        N("aui_build_date:3.26.4-2026-04-29");
        var Y = {
            getItem: function (a) {
              try {
                return g.localStorage.getItem(a);
              } catch (b) {}
            },
            setItem: function (a, b) {
              try {
                return g.localStorage.setItem(a, b);
              } catch (d) {}
            },
          },
          m = g._pSetI(),
          H = [],
          A = [],
          I = !1,
          ka = navigator.scheduling && "function" === typeof navigator.scheduling.isInputPending;
        var B = function () {
          for (var a = m ? m.set(B) : setTimeout(B, 0), b = t(); A.length || H.length; )
            if (((A.length ? A : H).shift()(), m && ka)) {
              if (
                (150 < t() - b && !navigator.scheduling.isInputPending()) ||
                (50 < t() - b && navigator.scheduling.isInputPending())
              )
                return;
            } else if (50 < t() - b) return;
          m ? m.clear(a) : clearTimeout(a);
          I = !1;
        };
        var S = {},
          u = {},
          U = {},
          J = !1;
        x(g, "beforeunload", function () {
          J = !0;
          setTimeout(function () {
            J = !1;
          }, 1e4);
        });
        var V = /^prv:/,
          L = {},
          C = {},
          K = {},
          w = {},
          ia = 0,
          la = String.fromCharCode(92),
          n = [],
          Z = !0,
          aa = g.onerror;
        g.onerror = function (a, b, d, e, f) {
          (f && "object" === typeof f) ||
            ((f = Error(a, b, d)),
            (f.columnNumber = e),
            (f.stack = b || d || e ? p(la, f.message, "at " + p(":", b, d, e)) : F));
          var c = n.pop() || {};
          f.attribution = p(":", f.attribution || c.attribution, c.name);
          f.logLevel = c.logLevel;
          f.attribution &&
            console &&
            console.log &&
            console.log([f.logLevel || "ERROR", a, "thrown by", f.attribution].join(" "));
          n = [];
          aa && ((c = [].slice.call(arguments)), (c[4] = f), aa.apply(g, c));
        };
        D.prototype = {
          logError: function (a, b, d, e) {
            b = { message: b, logLevel: d || "ERROR", attribution: p(":", this.attribution, e) };
            if (g.ueLogError) return (g.ueLogError(a || b, a ? b : null), !0);
            console && console.error && (console.log(b), console.error(a));
            return !1;
          },
          error: function (a, b, d, e) {
            a = Error(p(":", e, a, d));
            a.attribution = p(":", this.attribution, b);
            throw a;
          },
          guardError: M(),
          guardFatal: M("FATAL"),
          guardCurrent: function (a) {
            var b = n[n.length - 1];
            return b ? M(b.logLevel, b).call(this, a) : a;
          },
          guardTime: function (a) {
            var b = n[n.length - 1],
              d = b && b.name;
            return d && d in w
              ? function () {
                  var b = r(),
                    f = a.apply(this, arguments);
                  w[d].async = (w[d].async || 0) + r() - b;
                  return f;
                }
              : a;
          },
          log: function (a, b, d) {
            return this.logError(null, a, b, d);
          },
          declare: v([], !0, !0, !0),
          register: v([], !0),
          execute: v([]),
          AUI_BUILD_DATE: "3.26.4-2026-04-29",
          when: W(),
          now: W(!0),
          trigger: function (a, b, d) {
            var e = t();
            this.declare(a, { data: b, pageElapsedTime: e - (g.aPageStart || NaN), triggerTime: e });
            d &&
              d.instrument &&
              ba.when("prv:a-logTrigger").execute(function (b) {
                b(a);
              });
          },
          handleTriggers: function () {
            this.log("handleTriggers deprecated");
          },
          attributeErrors: function (a) {
            return new D(a);
          },
          _namespace: function (a, b) {
            return new D(a, b);
          },
          setPriority: function (a) {
            Z ? ((Z = !1), G(a)) : this.log("setPriority only accept the first call.");
          },
        };
        var k = y(g, "AmazonUIPageJS", new D());
        var ba = k._namespace("PageJS", "AmazonUI");
        ba.declare("prv:p-debug", w);
        k.declare("p-recorder-events", []);
        k.declare("p-recorder-stop", function () {});
        y(g, "P", k);
        X();
        if (h.addEventListener) {
          var ca;
          h.addEventListener(
            "DOMContentLoaded",
            (ca = function () {
              k.trigger("a-domready");
              h.removeEventListener("DOMContentLoaded", ca, !1);
            }),
            !1,
          );
        }
        var da = h.documentElement,
          ma = g._pd(k, O, x, P, da, Y, Q, q, "3.26.4-2026-04-29");
        O(/UCBrowser/i) || (ma.localStorage && P(da, Y.getItem("a-font-class")));
        k.declare("a-event-revised-handling", !1);
        k.declare("a-fix-event-off", !1);
        q("pagejs:pkgExecTime", r() - ja);
      })(window, document, Date);
      (function (d, E, G, H) {
        function r(f) {
          h && h.tag && h.tag(g(":", "aui", f));
        }
        function e(f, d) {
          h && h.count && h.count("aui:" + f, 0 === d ? 0 : d || (h.count("aui:" + f) || 0) + 1);
        }
        function t(d) {
          try {
            return d.test(navigator.userAgent);
          } catch (y) {
            return !1;
          }
        }
        function k(d) {
          return "function" === typeof d;
        }
        function w(d, g, e) {
          d.addEventListener ? d.addEventListener(g, e, !1) : d.attachEvent && d.attachEvent("on" + g, e);
        }
        function g(d, e, k, h) {
          e = e && k ? e + d + k : e || k;
          return h ? g(d, e, h) : e;
        }
        ("use strict");
        var h = d.ue,
          A = String.fromCharCode(92);
        P.execute("RetailPageServiceWorker", function () {
          function f(a, b) {
            l.controller && a
              ? ((a = { feature: "retail_service_worker_messaging", command: a }),
                b && (a.data = b),
                l.controller.postMessage(a))
              : a && e("sw:sw_message_no_ctrl", 1);
          }
          function y(a) {
            var b = a.data;
            if (b && "retail_service_worker_messaging" === b.feature && b.command && b.data) {
              var c = b.data;
              a = d.ue;
              var m = d.ueLogError;
              switch (b.command) {
                case "log_counter":
                  a && k(a.count) && c.name && a.count(c.name, 0 === c.value ? 0 : c.value || 1);
                  break;
                case "log_tag":
                  a && k(a.tag) && c.tag && (a.tag(c.tag), (b = d.uex), a.isl && k(b) && b("at"));
                  break;
                case "log_error":
                  m &&
                    k(m) &&
                    c.message &&
                    m({
                      message: c.message,
                      logLevel: c.level || "ERROR",
                      attribution: c.attribution || "RetailServiceWorker",
                    });
                  break;
                case "log_weblab_trigger":
                  if (!c.weblab || !c.treatment) break;
                  a && k(a.trigger)
                    ? a.trigger(c.weblab, c.treatment)
                    : (e("sw:wt:miss"), e("sw:wt:miss:" + c.weblab + ":" + c.treatment));
                  break;
                default:
                  e("sw:unsupported_message_command", 1);
              }
            }
          }
          function v(a, b) {
            return "sw:" + (b || "") + ":" + a + ":";
          }
          function z(a, b) {
            l.register("/service-worker.js")
              .then(function () {
                e(a + "success");
              })
              .catch(function (c) {
                P.logError(c, "[AUI SW] Failed to " + b + " service worker: ", "ERROR", "RetailPageServiceWorker");
                e(a + "failure");
              });
          }
          function B() {
            n.forEach(function (a) {
              r(a);
            });
          }
          function q(a) {
            return a.capabilities.isAmazonApp && a.capabilities.android;
          }
          function C(a, b, c) {
            if (b)
              if (b.mshop && q(a)) ((a = v(c, "mshop_and")), (b = b.mshop.action), n.push(a + "supported"), b(a, c));
              else if (b.browser) {
                a =
                  t(/Chrome/i) &&
                  !t(/Edge/i) &&
                  !t(/OPR/i) &&
                  !a.capabilities.isAmazonApp &&
                  !t(new RegExp(A + "bwv" + A + "b"));
                var d = b.browser;
                b = v(c, "browser");
                a ? ((a = d.action), n.push(b + "supported"), a(b, c)) : n.push(b + "unsupported");
              }
          }
          function D(a, b, c) {
            a && n.push(v("register", c) + "unsupported");
            b && n.push(v("unregister", c) + "unsupported");
            B();
          }
          try {
            var l = navigator.serviceWorker;
          } catch (a) {
            r("sw:nav_err");
          }
          (function () {
            if (l) {
              var a = function () {
                f("page_loaded", {
                  rid: d.ue_id,
                  mid: d.ue_mid,
                  pty: d.ue_pty,
                  sid: d.ue_sid,
                  spty: d.ue_spty,
                  furl: d.ue_furl,
                });
              };
              w(l, "message", y);
              f("client_messaging_ready");
              P.when("load").execute(a);
              w(l, "controllerchange", function () {
                f("client_messaging_ready");
                "complete" === E.readyState && a();
              });
            }
          })();
          var n = [],
            p = function (a, b) {
              var c = d.uex,
                m = d.uet;
              a = g(":", "aui", "sw", a);
              "ld" === b && k(c) ? c("ld", a, { wb: 1 }) : k(m) && m(b, a, { wb: 1 });
            },
            F = function (a, b, c) {
              function m(a) {
                b && k(b.failure) && b.failure(a);
              }
              function h() {
                n = setTimeout(function () {
                  r(g(":", "sw:" + f, u.TIMED_OUT));
                  m({ ok: !1, statusCode: u.TIMED_OUT, done: !1 });
                  p(f, "ld");
                }, c || 4e3);
              }
              var u = {
                  NO_CONTROLLER: "no_ctrl",
                  TIMED_OUT: "timed_out",
                  UNSUPPORTED_BROWSER: "unsupported_browser",
                  UNEXPECTED_RESPONSE: "unexpected_response",
                },
                f = g(":", a.feature, a.command),
                n,
                q = !0;
              if ("MessageChannel" in d && l && "controller" in l)
                if (l.controller) {
                  var t = new MessageChannel();
                  t.port1.onmessage = function (c) {
                    (c = c.data) && c.feature === a.feature && c.command === a.command
                      ? (q && (p(f, "cf"), (q = !1)),
                        p(f, "af"),
                        clearTimeout(n),
                        c.done || h(),
                        c.ok ? b && k(b.success) && b.success(c) : m(c),
                        c.done && p(f, "ld"))
                      : e(g(":", "sw:" + f, u.UNEXPECTED_RESPONSE), 1);
                  };
                  h();
                  p(f, "bb");
                  l.controller.postMessage(a, [t.port2]);
                } else
                  (r(g(":", "sw:" + a.feature, u.NO_CONTROLLER)), m({ ok: !1, statusCode: u.NO_CONTROLLER, done: !0 }));
              else
                (r(g(":", "sw:" + a.feature, u.UNSUPPORTED_BROWSER)),
                  m({ ok: !1, statusCode: u.UNSUPPORTED_BROWSER, done: !0 }));
            };
          (function () {
            l
              ? (p("ctrl_changed", "bb"),
                l.addEventListener("controllerchange", function () {
                  r("sw:ctrl_changed");
                  p("ctrl_changed", "ld");
                }))
              : e(g(":", "sw:ctrl_changed", "sw_unsupp"), 1);
          })();
          (function () {
            var a = function () {
              p(b, "ld");
              var a = d.uex;
              F(
                { feature: "page_proxy", command: "request_feature_tags" },
                {
                  success: function (b) {
                    b = b.data;
                    Array.isArray(b) &&
                      b.forEach(function (a) {
                        "string" === typeof a ? r(g(":", "sw:ppft", a)) : e(g(":", "sw:ppft", "invalid_tag"), 1);
                      });
                    e(g(":", "sw:ppft", "success"), 1);
                    h && h.isl && k(a) && a("at");
                  },
                  failure: function (a) {
                    e(g(":", "sw:ppft", "error:" + (a.statusCode || "ppft_error")), 1);
                  },
                },
              );
            };
            if ("requestIdleCallback" in d) {
              var b = g(":", "ppft", "callback_ricb");
              d.requestIdleCallback(a, { timeout: 1e3 });
            } else ((b = g(":", "ppft", "callback_timeout")), setTimeout(a, 0));
            p(b, "bb");
          })();
          var x = { reg: {}, unreg: {} };
          x.reg.mshop = { action: z };
          x.reg.browser = { action: z };
          (function (a) {
            var b = a.reg,
              c = a.unreg;
            l && l.getRegistrations
              ? (P.when("A").execute(function (b) {
                  if ((a.reg.mshop || a.unreg.mshop) && "function" === typeof q && q(b)) {
                    var g = a.reg.mshop ? "T1" : "C",
                      f = d.ue;
                    f && f.trigger ? f.trigger("MSHOP_SW_CLIENT_446196", g) : e("sw:mshop:wt:failed");
                  }
                  C(b, c, "unregister");
                }),
                w(d, "load", function () {
                  P.when("A").execute(function (a) {
                    C(a, b, "register");
                    B();
                  });
                }))
              : (D(b && b.browser, c && c.browser, "browser"),
                P.when("A").execute(function (a) {
                  "function" === typeof q && q(a) && D(b && b.mshop, c && c.mshop, "mshop_and");
                }));
          })(x);
        });
      })(window, document, Date);
      ("use strict");
      (function (b) {
        function t(a, e, d) {
          function h(a, b, c) {
            var f = Array(e.length);
            ~m && (f[m] = {});
            ~n && (f[n] = c);
            for (c = 0; c < q.length; c++) {
              var h = q[c],
                g = a[c];
              f[h] = g;
            }
            for (c = 0; c < p.length; c++) ((h = p[c]), (g = b[c]), (f[h] = g));
            a = d.apply(null, f);
            return ~m ? f[m] : a;
          }
          "string" !== typeof a && b.P.error("C001");
          var c = -1 < a.indexOf("/") && (-1 < a.indexOf("es3") || -1 < a.indexOf("evergreen")),
            r = c && -1 < a.indexOf("@");
          c && !r && (a = a.substring(0, a.lastIndexOf("/")));
          if (!w[a]) {
            w[a] = !0;
            d || ((d = e), (e = []));
            a = a.split(":", 2);
            c = a[1] ? a[0] : void 0;
            var g = (a[1] || a[0]).replace(/@capability\//, "@c/"),
              x = -1 < g.indexOf("/") ? g.split("/")[0] : g,
              l = c ? b.P._namespace(c) : b.P;
            a = !g.lastIndexOf("@c/", 0);
            c = !g.lastIndexOf("@m/", 0);
            for (var q = [], u = [], p = [], v = [], n = -1, m = -1, k = 0; k < e.length; k++) {
              var f = e[k];
              "module" === f && l.error("C002");
              "exports" === f
                ? (m = k)
                : "require" === f
                  ? (n = k)
                  : f.lastIndexOf("@p/", 0)
                    ? f.lastIndexOf("@c/", 0) && f.lastIndexOf("@m/", 0)
                      ? f.lastIndexOf("./", 0)
                        ? (q.push(k), u.push("mix:" + f))
                        : ((f = x + "/" + f.substr(2)), p.push(k), v.push(f))
                      : (p.push(k), v.push(f))
                    : (q.push(k), u.push(f.substr(3)));
            }
            var y = a || c || r || ~n || p.length;
            l.when.apply(l, u).register("mix:" + g, function () {
              var a = [].slice.call(arguments);
              return y
                ? {
                    capabilities: v,
                    cardModuleFactory: function (b, c) {
                      b = h(a, b, c);
                      b.P = l;
                      return b;
                    },
                    require: ~n ? t : void 0,
                  }
                : h(a, [], function () {});
            });
            y &&
              l.when("mix:@amzn/mix.client-runtime", "mix:" + g).execute(function (a, b) {
                a.registerCapabilityModule(g, b);
              });
            l.when("mix:" + g).register("xcp:" + g, function (a) {
              return a;
            });
            var t = function (a, b, c) {
              try {
                var e = a[0],
                  d = e.lastIndexOf("./", 0) ? e : x + "/" + e.substr(2),
                  f = d.lastIndexOf("@p/", 0) ? "mix:" + d : d.substr(3);
                l.when(f).execute(function (a) {
                  try {
                    b(a);
                  } catch (A) {
                    c(A);
                  }
                });
              } catch (z) {
                c(z);
              }
            };
          }
        }
        ("use strict");
        var w = {};
        b.mix_d ||
          ((b.Promise ? P : P.when("3p-promise")).register("@p/promise-is-ready", function (a) {
            b.Promise = b.Promise || a;
          }),
          (Array.prototype.includes ? P : P.when("a-polyfill")).register("@p/polyfill-is-ready", function () {}),
          (b.mix_d = function (a, b, d) {
            P.when("@p/promise-is-ready", "@p/polyfill-is-ready").execute("@p/mix-d-deps", function () {
              t(a, b, d);
            });
          }),
          (b.xcp_d = b.mix_d),
          P.when("mix:@amzn/mix.client-runtime").execute(function (a) {
            P.declare("xcp:@xcp/runtime", a);
          }));
        b.mixTimeout ||
          (b.mixTimeout = function (a, e, d) {
            b.mixCardInitTimeouts || (b.mixCardInitTimeouts = {});
            b.mixCardInitTimeouts[e] && clearTimeout(b.mixCardInitTimeouts[e]);
            b.mixCardInitTimeouts[e] = setTimeout(function () {
              P.log("Client-side initialization timeout", "WARN", a);
            }, d);
          });
        b.mix_csa_map = b.mix_csa_map || {};
        b.mix_csa_internal =
          b.mix_csa_internal ||
          function (a, e, d) {
            return (b.mix_csa_map[e] = b.mix_csa_map[e] || b.csa(a, d));
          };
        b.mix_csa_internal_key =
          b.mix_csa_internal_key ||
          function (a, b) {
            for (var d = "", e = 0; e < b.length; e++) {
              var c = b[e];
              void 0 !== a[c] && "object" !== typeof a[c] && (d += c + ":" + a[c] + ",");
            }
            if (!d) throw Error("bad mix-csa key gen.");
            return d;
          };
        b.mix_csa_event =
          b.mix_csa_event ||
          function (a) {
            try {
              var e = b.mix_csa_internal_key(a, ["producerId"]);
            } catch (d) {
              return (P.logError(d, "MIX C005", "WARN", void 0), function () {});
            }
            try {
              return b.mix_csa_internal("Events", e, a);
            } catch (d) {
              return (P.logError(d, "MIX C004", "WARN", e), function () {});
            }
          };
        b.mix_csa =
          b.mix_csa ||
          function (a, e) {
            try {
              e = e || "";
              var d = document.querySelectorAll(a);
              if (1 < d.length)
                for (var h = 0; h < d.length; h++) {
                  if (d[h].querySelector(e)) {
                    var c = d[h];
                    break;
                  }
                }
              else 1 === d.length && (c = d[0]);
              if (!c) throw Error(" ");
              return b.mix_csa_internal("Content", a, { element: c });
            } catch (r) {
              return (P.logError(r, "MIX C004", "WARN", a), function () {});
            }
          };
      })(window);
      (window.AmazonUIPageJS ? AmazonUIPageJS : P).when("sp.load.js").execute(function () {
        (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
          "https://m.media-amazon.com/images/I/61xJcNKKLXL.js?AUIClients/AmazonUIjQuery",
        );
        (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
          "https://m.media-amazon.com/images/I/11I0WXrZVoL._RC|11Y+5x+kkTL.js,51vYHGMfzIL.js,115zbyk371L.js,11GgN1+C7hL.js,01+z+uIeJ-L.js,01VRMV3FBdL.js,21NadQlXUWL.js,01vRf9id2EL.js,31on-La90vL.js,11a7qqY8xXL.js,11PZSUl3FLL.js,51C4kaFbiAL.js,11FhdH2HZwL.js,11wb9K3sw0L.js,11BrgrMAHUL.js,11GPhx42StL.js,210X-JWUe-L.js,01Svfxfy8OL.js,61Pm+d9+c9L.js,01ikBbTAneL.js,31xywoXPfpL.js,01qXJuwGmxL.js,01WlsjNmqIL.js,11F929pmpYL.js,31Zn4S+IOkL.js,01rpauTep4L.js,31rqCOnXDNL.js,011FfPwYqHL.js,21P5VvHf-XL.js,01-E15R8CKL.js,21kN0q4IA-L.js,01VvIkYCafL.js,11vb6P5C5AL.js,016H7SZZQjL.js_.js?AUIClients/AmazonUI",
        );
        (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
          "https://m.media-amazon.com/images/I/51k9fvr+tML.js?AUIClients/CardJsRuntimeBuzzCopyBuild",
        );
      });

/* --- inline script #6 --- */
{
        "@context": "https://agent.schema.org",
        "@type": "AgentInterfaceMap",
        "pageType": "product-listing",
        "primaryActions": [
          {
            "id": "search_agent",
            "action": "search",
            "selector": "#nav-search-submit-button-agent",
            "description": "AI-optimized search submission",
            "inputSelector": "#twotabsearchtextbox",
            "priority": "primary",
            "recommended": true,
            "visibility": "visually-hidden"
          }
        ],
        "suggestions": {
          "preferredSearchMode": "agent",
          "agentButton": "#nav-search-submit-button-agent"
        }
      }

/* --- inline script #7 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("dpJsAssetsLoadMarker").execute(function () {
        (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
          "https://m.media-amazon.com/images/I/01dnie4ix4L.js?AUIClients/",
        );
      });

/* --- inline script #8 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("dpJsAssetsLoadMarker").execute(function () {
        (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
          "https://m.media-amazon.com/images/I/11DbyV7EqEL._RC|314hImVpNnL.js,41W8tmo9k4L.js,21cjS8PvBhL.js,31zDXuckuOL.js,311zP7kfZ8L.js,81XgxIQsbBL.js,41XCRinqcFL.js,41ILavf8FhL.js,316nVZ1c+gL.js,01Jkr5-mpfL.js,014nJHn53jL.js,318rs4piGPL.js,01jEqq6I0UL.js,01xGyUiM+9L.js,4182NoP2GXL.js,11LSI8IU0NL.js,31ou0T-+79L.js,31QmRDAhJvL.js,516fC6v1PHL.js,01TQyo0bnIL.js,217bRGC52mL.js,41jQNqeKMzL.js,31vQoLM9twL.js,11Xu-Rpqu6L.js,41eALJGVVqL.js,519HLAfeeDL.js,61sM0h9jL2L.js,51+ZfXB9EfL.js,11p0nLfNCcL.js,01s9HEfbt3L.js,11CGomdzAuL.js,111zW1Nhl9L.js,216SNRfjloL.js,0120VCfYOtL.js,31r35NJ3TfL.js,51SSMvLbyWL.js,41haTccCCvL.js,510KnYI9QWL.js,31vI2qZfDdL.js,31mAYKjJfpL.js,11K5qCK19CL.js,21RsH9fH8-L.js,11KyJ7tKkeL.js,21N8a3dNihL.js,11RA63NYs0L.js,017PpEJgdTL.js_.js?AUIClients/",
        );
      });

/* --- inline script #9 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("sp.load.js").execute(function () {
        (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
          "https://m.media-amazon.com/images/I/11AS2i18olL._RC|616+KWIMF6L.js,51y-J75sbdL.js,21dNlAXVatL.js,21ygm1fcsNL.js,51dG7wZ-ajL.js,11CCUfyBpEL.js,214rbdoM-8L.js_.js?AUIClients/",
        );
      });

/* --- inline script #10 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("dpJsAssetsLoadMarker").execute(function () {
        (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
          "https://m.media-amazon.com/images/I/31wdyiGPg0L._RC|21B7H8Vv2fL.js,01+oIQ0jY7L.js,11a+lhxkUrL.js,41eJU+ExW5L.js,4123BTTtUrL.js,4165qVxoLeL.js,015TRQC5i+L.js,2199qqVI6XL.js,21XCf-r9HCL.js,01C73JIi4vL.js,61yN1XgywoL.js,01g2etah0NL.js,21v7Os12mhL.js,11PUEGgF9FL.js,11jErpSlSXL.js,613YJBF8TLL.js,013eoEBTVUL.js,614jbz7zLsL.js,71lVB54cHsL.js,51jXkknVXIL.js,51LTpZWWtjL.js,01pEpg0ouXL.js,21boI4UW9cL.js,31DwCDV0WwL.js,415Zq6WywbL.js,01mjV3L7d0L.js,01AyV5VYHYL.js,01yUtrqTbwL.js,018Z4BaAhLL.js,21aV7NRVBKL.js,01gp3oqpb5L.js,31tA6tcUUNL.js,21-71xWjt2L.js,01zM73lDxwL.js,014kCoIHgIL.js,21FgNJ8uEUL.js,01b64aH9GxL.js,01iwqfGHKVL.js,21AQWuhV2uL.js,41to9M0wM7L.js,11uacn9D5ZL.js,41X45rnq3LL.js,013V0KET27L.js,31dgNyIS0IL.js,31mQ-0AV8xL.js,41bkBPpetXL.js,41JyW7KwHML.js,41Cex44Q-HL.js,01f06kQbg-L.js,41c01AilBTL.js,21ETe06wE4L.js,21IQl4blS4L.js,31jdfgcsPAL.js,31ls-t2akxL.js,019MkidFEWL.js,117urfG1uWL.js,11sjHLvE-aL.js,01ah1ihI+QL.js,01kzQa6T73L.js,01lU0ll4W4L.js,010zNUlpT9L.js,01AqOsu8lML.js,01Cy5vuVgxL.js,01lqsia4Y-L.js,31nwSE3a4sL.js,01rDxMCTSAL.js,01y1E-PQcXL.js,01mPzDojIbL.js,0148gbUSGxL.js,011UcK3Cd7L.js,21JAaRmnu+L.js,01+-CQ6hJtL.js,71exZTZHqqL.js,21yTK3DPJYL.js,01G08EcoiNL.js,51+4JkWOPNL.js_.js?AUIClients/",
        );
      });

/* --- inline script #11 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("aodIngressClick").execute(function () {
        (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
          "https://m.media-amazon.com/images/I/61RcCAsSo5L.js?AUIClients/",
        );
      });

/* --- inline script #12 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("gestaltCustomizableProductDetailPage").execute(function () {
        (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
          "https://m.media-amazon.com/images/I/515lnu3NknL.js?AUIClients/",
        );
      });

/* --- inline script #13 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("dpJsAssetsLoadMarker").execute(function () {
        (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
          "https://m.media-amazon.com/images/I/01YgpCubxaL.js?AUIClients/",
        );
      });

/* --- inline script #14 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("useDesktopTwisterMetaAsset").execute(function () {
        (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
          "https://m.media-amazon.com/images/I/61llZQ7N+nL._RC|41yU+dUIllL.js,31rXMHBPdML.js,71ltaCN10cL.js,31jz6atYFmL.js_.js?AUIClients/",
        );
      });

/* --- inline script #15 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("dpJsAssetsLoadMarker").execute(function () {
        (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
          "https://m.media-amazon.com/images/I/418oywSAVHL.js?AUIClients/",
        );
      });

/* --- inline script #16 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("dpJsAssetsLoadMarker").execute(function () {
        (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
          "https://m.media-amazon.com/images/I/010oMamdcmL.js?AUIClients/",
        );
      });

/* --- inline script #17 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("dpJsAssetsLoadMarker").execute(function () {
        (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
          "https://m.media-amazon.com/images/I/313sHJh1gZL.js?AUIClients/",
        );
      });

/* --- inline script #18 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("dpJsAssetsLoadMarker").execute(function () {
        (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
          "https://m.media-amazon.com/images/I/51C5M4gT7LL._RC|01zCndFsf4L.js,019K6hE9zSL.js,21tmeEKbyaL.js_.js?AUIClients/",
        );
      });

/* --- inline script #19 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("useBuyingRulesDpAssets").execute(function () {
        (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
          "https://m.media-amazon.com/images/I/617wb09azWL._RC|81QLA7p3V0L.js,31jsB13JlVL.js_.js?AUIClients/",
        );
      });

/* --- inline script #20 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("dpJsAssetsLoadMarker").execute(function () {
        (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
          "https://m.media-amazon.com/images/I/1183nplgDKL.js?AUIClients/",
        );
      });

/* --- inline script #21 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("dpJsAssetsLoadMarker").execute(function () {
        (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
          "https://m.media-amazon.com/images/I/01I3s4SlPiL._RC|21cBKqvYSdL.js,216Y5JcOfSL.js,11-asXJWfkL.js,01s80TZosWL.js,015gdESSAtL.js,01GJONmvbXL.js,01eHFGShgcL.js,014HqCTNeLL.js,010iqJFkSaL.js,01KcCdM358L.js,01rQQwj4cgL.js,01WKMGaQtaL.js,01Gujc1zuyL.js,81TdOW4NRLL.js_.js?AUIClients/",
        );
      });

/* --- inline script #22 --- */
(function (e) {
        var a = window.AmazonUIPageJS || window.P,
          c = a._namespace || a.attributeErrors,
          b = c
            ? c("DetailPageLatencyClientSideLibraries@timeToInteractive", "DetailPageLatencyClientSideLibraries")
            : a;
        b.guardFatal
          ? b.guardFatal(e)(b, window)
          : b.execute(function () {
              e(b, window);
            });
      })(function (e, a, c) {
        e.now().execute("dp-create-feature-interactive-api", function () {
          function b(d, b, a) {
            d = { name: d, options: b, type: a, timestamp: +new Date() };
            f ? f.updateFeatures([d]) : c.push(d);
          }
          "function" === typeof uet && uet("bb", "clickToCI", { wb: 1 });
          var c = [],
            f;
          a.markFeatureRender = function (d, a) {
            b(d, a, "render");
          };
          a.markFeatureInteractive = function (a, c) {
            b(a, c, "interactive");
          };
          e.when("dp-time-to-interactive").execute("dp-update-interactive-feature-list", function (a) {
            f = a;
            c.length && f.updateFeatures(c);
          });
        });
      });

/* --- inline script #23 --- */
(function (b) {
        var c = window.AmazonUIPageJS || window.P,
          d = c._namespace || c.attributeErrors,
          a = d
            ? d("DetailPageLatencyClientSideLibraries@dpJsAssetsLoadMarker", "DetailPageLatencyClientSideLibraries")
            : c;
        a.guardFatal
          ? a.guardFatal(b)(a, window)
          : a.execute(function () {
              b(a, window);
            });
      })(function (b, c, d) {
        b.when("atf").execute(function () {
          b.now("dpJsAssetsLoadMarker").execute(function (a) {
            a ||
              (b.declare("dpJsAssetsLoadMarker", {}), c.ue && ue.count && ue.count("DPJsLoadedAfterATFMarkedCount", 1));
          });
        });
      });

/* --- inline script #24 --- */
(function (b) {
        var c = window.AmazonUIPageJS || window.P,
          d = c._namespace || c.attributeErrors,
          a = d
            ? d("DetailPageLatencyClientSideLibraries@emitSpLoadJsScript", "DetailPageLatencyClientSideLibraries")
            : c;
        a.guardFatal
          ? a.guardFatal(b)(a, window)
          : a.execute(function () {
              b(a, window);
            });
      })(function (b, c, d) {
        b.now("sp.load.critical.js").execute(function (a) {
          a || b.declare("sp.load.critical.js", {});
        });
        b.now("sp.load.js").execute(function (a) {
          a || b.declare("sp.load.js", {});
        });
      });

/* --- inline script #25 --- */
(function (a) {
        var b = window.AmazonUIPageJS || window.P,
          d = b._namespace || b.attributeErrors,
          c = d
            ? d("DetailPageLatencyClientSideLibraries@modulePrioritization", "DetailPageLatencyClientSideLibraries")
            : b;
        c.guardFatal
          ? c.guardFatal(a)(c, window)
          : c.execute(function () {
              a(c, window);
            });
      })(function (a, b, d) {
        b.CSMReqs = { af: { c: 2, p: "atf" }, cf: { c: 2, p: "cf" }, x1: { c: 1, p: "x1" }, x2: { c: 1, p: "x2" } };
        var c = !0;
        b.setCSMReq = function (e) {
          e = e.toLowerCase();
          var b = CSMReqs[e];
          if (b && 0 == --b.c) {
            "function" == typeof uet && (uet(e), "af" == e && "function" === typeof replaceImg && replaceImg());
            if ("af" == e && c) {
              var f = document.getElementsByClassName("dp-cif");
              if (f.length) {
                for (var d = ["A", "jQuery"], h = { A: 1, jQuery: 1 }, g = 0; g < f.length; g++)
                  if (f[g].dataset && f[g].dataset.dpCriticalJsModules) {
                    var k = JSON.parse(f[g].dataset.dpCriticalJsModules);
                    k &&
                      k.forEach(function (a, b) {
                        h[a] || ((h[a] = 1), d.push(a));
                      });
                  } else
                    "undefined" === typeof f[g].dataset &&
                      (k = JSON.parse(f[g].getAttribute("data-dp-critical-js-modules"))) &&
                      k.forEach(function (a, b) {
                        h[a] || ((h[a] = 1), d.push(a));
                      });
                a && a.setPriority && "function" === typeof a.setPriority && ((c = !1), a.setPriority(d));
              }
            }
            "undefined" != typeof a &&
              (a.register(b.p), "af" == e && "function" === typeof uet && uet("bb", "TwisterAUIWait", { wb: 1 }));
          }
        };
        "undefined" != typeof a &&
          a.when("A").execute(function (a) {
            "function" === typeof uet && uet("af", "TwisterAUIWait", { wb: 1 });
          });
      });

/* --- inline script #26 --- */
(function (b) {
        var c = window.AmazonUIPageJS || window.P,
          d = c._namespace || c.attributeErrors,
          a = d
            ? d("DetailPageLatencyClientSideLibraries@addLongPoleTagMarker", "DetailPageLatencyClientSideLibraries")
            : c;
        a.guardFatal
          ? a.guardFatal(b)(a, window)
          : a.execute(function () {
              b(a, window);
            });
      })(function (b, c, d) {
        b.now("addlongpolemarker").execute(function (a) {
          c.addlongPoleTag = function (a, b) {
            a = a.toLowerCase();
            0 == CSMReqs[a].c && c.ue && ue.tag && ue.tag(b);
          };
        });
      });

/* --- inline script #27 --- */
(function (c) {
        var b = window.AmazonUIPageJS || window.P,
          d = b._namespace || b.attributeErrors,
          a = d ? d("DetailPageLatencyClientSideLibraries@setDpTimeStamp", "DetailPageLatencyClientSideLibraries") : b;
        a.guardFatal
          ? a.guardFatal(c)(a, window)
          : a.execute(function () {
              c(a, window);
            });
      })(function (c, b, d) {});

/* --- inline script #28 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("injectCalendarOnDetailPage").execute(function () {
        (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
          "https://m.media-amazon.com/images/I/31lqqqMDjxL.js?AUIClients/",
        );
      });

/* --- inline script #29 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("dpJsAssetsLoadMarker").execute(function () {
        (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
          "https://m.media-amazon.com/images/I/01pBto8GwVL._RC|61OLS343zdL.js,01L9nn2zMmL.js_.js?AUIClients/",
        );
      });

/* --- inline script #30 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("useOffersDebugAssets").execute(function () {
        (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
          "https://m.media-amazon.com/images/I/31xJau8gMoL.js?AUIClients/",
        );
      });

/* --- inline script #31 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("gestaltAssetsMarker").execute(function () {
        (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
          "https://m.media-amazon.com/images/I/11RbkwaUgLL.js?AUIClients/",
        );
      });

/* --- inline script #32 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("dpJsAssetsLoadMarker").execute(function () {
        (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
          "https://m.media-amazon.com/images/I/31eXxjgc6PL.js?AUIClients/",
        );
      });

/* --- inline script #33 --- */
window.ue_ihe = (window.ue_ihe || 0) + 1;
      if (window.ue_ihe === 1) {
        (function (k, l, g) {
          function m(a) {
            c ||
              ((c = b[a.type].id),
              "undefined" === typeof a.clientX ? ((e = a.pageX), (f = a.pageY)) : ((e = a.clientX), (f = a.clientY)),
              2 != c || (h && (h != e || n != f))
                ? (r(),
                  d.isl &&
                    l.setTimeout(function () {
                      p("at", d.id);
                    }, 0))
                : ((h = e), (n = f), (c = 0)));
          }
          function r() {
            for (var a in b) b.hasOwnProperty(a) && d.detach(a, m, b[a].parent);
          }
          function s() {
            for (var a in b) b.hasOwnProperty(a) && d.attach(a, m, b[a].parent);
          }
          function t() {
            var a = "";
            !q && c && ((q = 1), (a += "&ui=" + c));
            return a;
          }
          var d = k.ue,
            p = k.uex,
            q = 0,
            c = 0,
            h,
            n,
            e,
            f,
            b = {
              click: { id: 1, parent: g },
              mousemove: { id: 2, parent: g },
              scroll: { id: 3, parent: l },
              keydown: { id: 4, parent: g },
            };
          d && p && (s(), (d._ui = t));
        })(ue_csm, window, document);

        (function (s, l) {
          function m(b, e, c) {
            c = c || new Date(+new Date() + t);
            c = "expires=" + c.toUTCString();
            n.cookie = b + "=" + e + ";" + c + ";path=/";
          }
          function p(b) {
            b += "=";
            for (var e = n.cookie.split(";"), c = 0; c < e.length; c++) {
              for (var a = e[c]; " " == a.charAt(0); ) a = a.substring(1);
              if (0 === a.indexOf(b)) return decodeURIComponent(a.substring(b.length, a.length));
            }
            return "";
          }
          function q(b, e, c) {
            if (!e) return b;
            -1 < b.indexOf("{") && (b = "");
            for (var a = b.split("&"), f, d = !1, h = !1, g = 0; g < a.length; g++)
              ((f = a[g].split(":")),
                f[0] == e
                  ? (!c || d ? a.splice(g, 1) : ((f[1] = c), (a[g] = f.join(":"))), (h = d = !0))
                  : 2 > f.length && (a.splice(g, 1), (h = !0)));
            h && (b = a.join("&"));
            !d && c && (0 < b.length && (b += "&"), (b += e + ":" + c));
            return b;
          }
          var k = s.ue || {},
            t = 3024e7,
            n = ue_csm.document || l.document,
            r = null,
            d;
          a: {
            try {
              d = l.localStorage;
              break a;
            } catch (u) {}
            d = void 0;
          }
          k.count && k.count("csm.cookieSize", document.cookie.length);
          k.cookie = {
            get: p,
            set: m,
            updateCsmHit: function (b, e, c) {
              try {
                var a;
                if (!(a = r)) {
                  var f;
                  a: {
                    try {
                      if (d && d.getItem) {
                        f = d.getItem("csm-hit");
                        break a;
                      }
                    } catch (k) {}
                    f = void 0;
                  }
                  a = f || p("csm-hit") || "{}";
                }
                a = q(a, b, e);
                r = a = q(a, "t", +new Date());
                try {
                  d && d.setItem && d.setItem("csm-hit", a);
                } catch (h) {}
                m("csm-hit", a, c);
              } catch (g) {
                "function" == typeof l.ueLogError &&
                  ueLogError(Error("Cookie manager: " + g.message), { logLevel: "WARN" });
              }
            },
          };
        })(ue_csm, window);

        (function (l, e) {
          function c(b) {
            b = "";
            var c = a.isBFT ? "b" : "s",
              d = "" + a.oid,
              g = "" + a.lid,
              h = d;
            d != g && 20 == g.length && ((c += "a"), (h += "-" + g));
            a.tabid && (b = a.tabid + "+");
            b += c + "-" + h;
            b != f &&
              100 > b.length &&
              ((f = b),
              a.cookie
                ? a.cookie.updateCsmHit(m, b + ("|" + +new Date()))
                : (e.cookie = "csm-hit=" + b + ("|" + +new Date()) + n + "; path=/"));
          }
          function p() {
            f = 0;
          }
          function d(b) {
            !0 === e[a.pageViz.propHid] ? (f = 0) : !1 === e[a.pageViz.propHid] && c({ type: "visible" });
          }
          var n = "; expires=" + new Date(+new Date() + 6048e5).toGMTString(),
            m = "tb",
            f,
            a = l.ue || {},
            k = a.pageViz && a.pageViz.event && a.pageViz.propHid;
          a.attach &&
            (a.attach("click", c),
            a.attach("keyup", c),
            k || (a.attach("focus", c), a.attach("blur", p)),
            k && (a.attach(a.pageViz.event, d, e), d({})));
          a.aftb = 1;
        })(ue_csm, ue_csm.document);

        ue_csm.ue.stub(ue, "impression");

        ue.stub(ue, "trigger");

        if (window.ue && uet) {
          uet("bb");
        }
      }

/* --- inline script #34 --- */
window.ue && ue.count && ue.count("CSMLibrarySize", 2728);

/* --- inline script #35 --- */
window.P && P.register("bb");
      if (typeof ues === "function") {
        ues("t0", "portal-bb", new Date());
        ues("ctb", "portal-bb", 1);
      }

/* --- inline script #36 --- */
(function () {
        // Block all <a> link navigation
        document.addEventListener(
          "click",
          function (e) {
            var a = e.target.closest("a");
            if (a) {
              e.preventDefault();
              e.stopImmediatePropagation();
              return false;
            }
          },
          true,
        );
        // Block form submissions
        document.addEventListener(
          "submit",
          function (e) {
            e.preventDefault();
            e.stopImmediatePropagation();
          },
          true,
        );
        // Block window.open
        window.open = function () {
          return null;
        };
      })();

      // Lightbox for "Click to see full view"
      function hsShowLightbox() {
        var imgEl = document.getElementById("landingImage") || document.querySelector("#main-image-container img");
        if (!imgEl) return;
        var overlay = document.createElement("div");
        overlay.style.cssText =
          "position:fixed;top:0;left:0;width:100%;height:100%;" +
          "background:rgba(0,0,0,0.88);z-index:99999;display:flex;align-items:center;justify-content:center;cursor:zoom-out;";
        var big = document.createElement("img");
        big.src = imgEl.src;
        big.style.cssText = "max-width:90%;max-height:90vh;object-fit:contain;box-shadow:0 4px 40px rgba(0,0,0,0.6);";
        var close = document.createElement("div");
        close.innerHTML = "&#x2715;";
        close.style.cssText =
          "position:absolute;top:20px;right:30px;color:#fff;font-size:36px;cursor:pointer;line-height:1;";
        close.onclick = function (e) {
          e.stopPropagation();
          overlay.remove();
        };
        overlay.appendChild(big);
        overlay.appendChild(close);
        overlay.addEventListener("click", function (e) {
          if (e.target === overlay) overlay.remove();
        });
        document.body.appendChild(overlay);
      }

/* --- inline script #37 --- */
{"AUI_72554":"C","AUI_TEMPLATE_WEBLAB_CACHE_333406":"C"}

/* --- inline script #38 --- */
typeof uex === "function" && uex("ld", "portal-bb", { wb: 1 });

/* --- inline script #39 --- */
!(function () {
          function n(n, t) {
            var r = i(n);
            return (t && (r = r("instance", t)), r);
          }
          var r = [],
            c = 0,
            i = function (t) {
              return function () {
                var n = c++;
                return (r.push([t, [].slice.call(arguments, 0), n, { time: Date.now() }]), i(n));
              };
            };
          ((n._s = r), (this.csa = n));
        })();
        csa("Config", {});
        if (window.csa) {
          csa("Config", {
            Application: "Retail:Prod:www.amazon.com",
            "Events.Namespace": "csa",
            ObfuscatedMarketplaceId: "ATVPDKIKX0DER",
            "Events.SushiEndpoint": "https://unagi.amazon.com/1/events/com.amazon.csm.csa.prod",
            "Events.SushiCsaVIP": "unagi.amazon.com",
            "Events.SushiCsaSourceGroup": "com.amazon.csm.csa.prod",
            "Events.SushiCsaCustomSourceGroup": "com.amazon.csm.customsg.prod",
            "Events.SushiEndpointPattern": "https://%s/1/events/%s",
            "CacheDetection.RequestID": "XFYA4Y2AJY08MAT6G7D8",
            "CacheDetection.Callback": window.ue && ue.reset,
            "Transport.nonBatchSchema": "csa.UEData.4",
            "LCP.elementDedup": 1,
            lob: "1",
          });

          csa("Events")("setEntity", {
            page: { requestId: "XFYA4Y2AJY08MAT6G7D8", meaningful: "interactive" },
            session: { id: "132-4911001-2878963" },
          });
        }
        !(function (e) {
          var i,
            r,
            o = "splice",
            u = e.csa,
            f = {},
            c = {},
            a = e.csa._s,
            l = 0,
            s = 0,
            g = -1,
            h = {},
            d = {},
            p = {},
            n = Object.keys,
            v = function () {};
          function t(n, t) {
            return u(n, t);
          }
          function w(n, t) {
            var e = c[n] || {};
            (k(e, t), (c[n] = e), s++, D(I, 0));
          }
          function b(n, t, e) {
            var r = !0;
            return (
              (t = U(t)),
              e &&
                e.buffered &&
                (r = (p[n] || []).every(function (n) {
                  return !1 !== t(n);
                })),
              r
                ? (h[n] || (h[n] = []),
                  h[n].push(t),
                  function () {
                    !(function (n, t) {
                      var e = h[n];
                      e && e[o](e.indexOf(t), 1);
                    })(n, t);
                  })
                : v
            );
          }
          function m(n, t) {
            if (((t = U(t)), n in d)) return (t(d[n]), v);
            return b(n, function (n) {
              return (t(n), !1);
            });
          }
          function y(n, t) {
            if ((u("Errors")("logError", n), f.DEBUG)) throw t || n;
          }
          function E() {
            return [S(), S(), S(), S()].join("-");
          }
          function S() {
            return Math.abs((4294967295 * Math.random()) | 0).toString(36);
          }
          function U(n, t) {
            return function () {
              try {
                return n.apply(this, arguments);
              } catch (n) {
                y(n.message || n, n);
              }
            };
          }
          function D(n, t) {
            return e.setTimeout(U(n), t);
          }
          function I() {
            for (var n = 0; n < a.length; ) {
              var t = a[n],
                e = t[0] in c;
              if (!e && !r) return void (l = a.length);
              e ? (a[o]((l = n), 1), O(t)) : n++;
            }
            g = s;
          }
          function O(n) {
            var t = c[n[0]],
              e = n[1],
              r = e[0];
            if (!t || !t[r]) return y("Undefined function: " + t + "/" + r);
            ((i = n[3]), (c[n[2]] = t[r].apply(t, e.slice(1)) || {}), (i = 0));
          }
          function C() {
            ((r = 1), I());
          }
          function k(t, e) {
            n(e).forEach(function (n) {
              t[n] = e[n];
            });
          }
          (m("$beforeunload", C),
            w("Config", {
              instance: function (n) {
                k(f, n);
              },
            }),
            (u.plugin = U(function (n) {
              n(t);
            })),
            (t.config = f),
            (t.register = w),
            (t.on = b),
            (t.once = m),
            (t.blank = v),
            (t.emit = function (n, t, e) {
              for (var r = h[n] || [], i = 0; i < r.length; ) !1 === r[i](t) ? r[o](i, 1) : i++;
              ((d[n] = t || {}),
                e && e.buffered && (p[n] || (p[n] = []), 100 <= p[n].length && p[n].shift(), p[n].push(t || {})));
            }),
            (t.UUID = E),
            (t.generateNewRequestId = function () {
              return E().toUpperCase().replace(/-/g, "").slice(0, 20);
            }),
            (t.time = function (n) {
              var t = i ? new Date(i.time) : new Date();
              return "ISO" === n ? t.toISOString() : t.getTime();
            }),
            (t.error = y),
            (t.warn = function (n, t) {
              if ((u("Errors")("logWarn", n), f.DEBUG)) throw t || n;
            }),
            (t.exec = U),
            (t.timeout = D),
            (t.interval = function (n, t) {
              return e.setInterval(U(n), t);
            }),
            ((t.global = e).csa._s.push = function (n) {
              n[0] in c && (!a.length || r) ? (O(n), a.length && g !== s && I()) : a[o](l++, 0, n);
            }),
            I(),
            f["StubCalls.Cleanup.Onload"] && m("$load", C),
            D(function () {
              D(C, f.SkipMissingPluginsTimeout || 5e3);
            }, 1));
        })("undefined" != typeof window ? window : global);
        csa.plugin(function (o) {
          var f = "addEventListener",
            e = "requestAnimationFrame",
            t = o.exec,
            r = o.global,
            u = o.on;
          ((o.raf = function (n) {
            if (r[e]) return r[e](t(n));
          }),
            (o.on = function (n, e, t, r) {
              if (n && "function" == typeof n[f]) {
                var i = o.exec(t);
                return (
                  n[f](e, i, r),
                  function () {
                    n.removeEventListener(e, i, r);
                  }
                );
              }
              return "string" == typeof n ? u(n, e, t, r) : o.blank;
            }));
        });
        csa.plugin(function (o) {
          var t,
            n,
            r = {},
            e = "localStorage",
            c = "sessionStorage",
            a = "local",
            i = "session",
            u = o.exec;
          function s(e, t) {
            var n;
            try {
              ((r[t] = !!(n = o.global[e])), (n = n || {}));
            } catch (e) {
              r[t] = !(n = {});
            }
            return n;
          }
          function f() {
            ((t = t || s(e, a)), (n = n || s(c, i)));
          }
          function l(e) {
            return e && e[i] ? n : t;
          }
          ((o.store = u(function (e, t, n) {
            f();
            var o = l(n);
            return e ? (t ? void (o[e] = t) : o[e]) : Object.keys(o);
          })),
            (o.storageSupport = u(function () {
              return (f(), r);
            })),
            (o.deleteStored = u(function (e, t) {
              f();
              var n = l(t);
              if ("function" == typeof e) for (var o in n) n.hasOwnProperty(o) && e(o, n[o]) && delete n[o];
              else delete n[e];
            })));
        });
        csa.plugin(function (n) {
          n.types = {
            ovl: function (n) {
              var r = [];
              if (n) for (var i in n) n.hasOwnProperty(i) && r.push(n[i]);
              return r;
            },
          };
        });
        csa.plugin(function (a) {
          var e = a.config,
            t = a.global,
            r = t.location || {},
            n = r.host,
            o = t.document || {},
            l = e.Application || "Other" + (n ? ":" + n : ""),
            s = "UEData",
            i = e["KillSwitch." + s],
            c = e["Transport.AnonymizeRequests"] || !1,
            f = e["UEData.clientRequestIdOnlyOnBF"] || !1,
            p = e.RedactPath || !1,
            u = "csa.UEData.4",
            g = "csa",
            d = a("Transport");
          i ||
            a.register(s, {
              log: function (e) {
                if (
                  (function (e) {
                    return !e || ("object" == typeof e && 0 === Object.keys(e).length);
                  })(e)
                )
                  a.warn("Received empty or null uedata input");
                else {
                  var t = (function (t) {
                    var n = {
                      schemaId: u,
                      timestamp: a.time("ISO"),
                      producerId: g,
                      messageId: a.UUID(),
                      application: l,
                      url: p ? r.protocol + "//" + r.hostname : c ? r.href.split("?")[0] : r.href,
                      referrer: p ? "" : c ? o.referrer.split("?")[0] : o.referrer,
                    };
                    if (
                      ([
                        "eventName",
                        "lob",
                        "ifr",
                        "id",
                        "csmtags",
                        "viz",
                        "sessionId",
                        "obfuscatedMarketplaceId",
                      ].forEach(function (e) {
                        null != t[e] && (n[e] = t[e]);
                      }),
                      ["pty", "spty", "pti"].forEach(function (e) {
                        null != t[e] && ((n.pageInfo = n.pageInfo || {}), (n.pageInfo[e] = t[e]));
                      }),
                      t.latency && t.latency.t && (n.t = t.latency.t + ""),
                      null != t.browserData)
                    ) {
                      var e = t.browserData.indexOf("?");
                      -1 != e && (n.browserData = t.browserData.substring(1 + e));
                    }
                    return ((f && !0 !== t.isBFT) || (n.clientRequestId = a.generateNewRequestId()), n);
                  })(e);
                  !(function (e) {
                    return (
                      e.pageInfo &&
                      null != e.pageInfo.pty &&
                      null != e.pageInfo.spty &&
                      null != e.pageInfo.pti &&
                      ((e.viz && 0 < e.viz.length) || (e.csmtags && 0 < e.csmtags.length))
                    );
                  })(t)
                    ? d("log", t)
                    : d("log", t, { forceSend: !0 });
                }
              },
            });
        });
        csa.plugin(function (a) {
          var e = a.config,
            n = "Errors",
            c = "fcsmln",
            s = e["KillSwitch." + n];
          function r(n) {
            return function (e) {
              a("Metrics", { producerId: "csa", dimensions: { message: e } })("recordMetric", n, 1);
            };
          }
          function t(r) {
            var t,
              o,
              l = a("Events", { producerId: r.producerId, lob: e.lob || "0" }),
              i = ["name", "type", "csm", "adb"],
              u = { url: "pageURL", file: "f", line: "l", column: "c" };
            this.log = function (e) {
              if (
                !s &&
                !(function (e) {
                  if (!e) return !0;
                  for (var n in e) return !1;
                  return !0;
                })(e)
              ) {
                var n = r.logOptions || { ent: { page: ["pageType", "subPageType", "requestId"] } };
                l(
                  "log",
                  (function (n) {
                    return (
                      (t = a.UUID()),
                      (o = {
                        messageId: t,
                        schemaId: r.schemaId || "<ns>.Error.6",
                        errorMessage: n.m || null,
                        attribution: n.attribution || null,
                        logLevel: "FATAL",
                        url: null,
                        file: null,
                        line: null,
                        column: null,
                        stack: n.s || [],
                        context: n.cinfo || {},
                        metadata: {},
                      }),
                      n.logLevel && (o.logLevel = "" + n.logLevel),
                      i.forEach(function (e) {
                        n[e] && (o.metadata[e] = n[e]);
                      }),
                      c in n && (o.metadata[c] = n[c] + ""),
                      "INFO" === n.logLevel ||
                        Object.keys(u).forEach(function (e) {
                          ("number" != typeof n[u[e]] && "string" != typeof n[u[e]]) || (o[e] = "" + n[u[e]]);
                        }),
                      o
                    );
                  })(e),
                  n,
                );
              }
            };
          }
          a.register(n, {
            instance: function (e) {
              return new t(e || {});
            },
            logError: r("jsError"),
            logWarn: r("jsWarn"),
          });
        });
        csa.plugin(function (o) {
          var r,
            e,
            n,
            t,
            a,
            i = "function",
            u = "willDisappear",
            c = "$app.",
            f = "$document.",
            p = "focus",
            s = "blur",
            d = "active",
            l = "resign",
            $ = o.global,
            m = o.exec,
            b = o.config,
            h = b["Transport.AnonymizeRequests"] || !1,
            g = b.RedactPath || !1,
            v = o("Events"),
            y = $.location,
            P = $.document || {},
            w = $.P || {},
            k = (($.performance || {}).navigation || {}).type,
            E = o.on,
            T = o.emit,
            I = P.hidden,
            A = {};
          y &&
            P &&
            (E($, "beforeunload", S),
            E($, "pagehide", S),
            E(
              P,
              "visibilitychange",
              j(f, function () {
                return P.visibilityState || "unknown";
              }),
            ),
            E(P, p, j(f + p)),
            E(P, s, j(f + s)),
            w.when &&
              w.when("mash").execute(function (e) {
                e &&
                  (E(e, "appPause", j(c + "pause")),
                  E(e, "appResume", j(c + "resume")),
                  j(c + "deviceready")(),
                  $.cordova && $.cordova.platformId && j(c + cordova.platformId)(),
                  E(P, d, j(c + d)),
                  E(P, l, j(c + l)));
              }),
            (e = $.app || {}),
            (n = m(function () {
              (T(c + "willDisappear"), S());
            })),
            (a = typeof (t = e[u]) == i),
            (e[u] = m(function () {
              (n(), a && t());
            })),
            $.app || ($.app = e),
            "complete" === P.readyState ? R() : E($, "load", R),
            I ? x() : U(),
            o.on("$app.blur", x),
            o.on("$app.focus", U),
            o.on("$document.blur", x),
            o.on("$document.focus", U),
            o.on("$document.hidden", x),
            o.on("$document.visible", U),
            o.register("SPA", { newPage: D }),
            D({ transitionType: { 0: "hard", 1: "refresh", 2: "back-button" }[k] || "unknown" }));
          function D(n, e) {
            var t = !!r,
              a = (e = e || {}).keepPageAttributes;
            (t && (T("$beforePageTransition"), T("$pageTransition")),
              t && !a && v("removeEntity", "page"),
              (r = o.UUID()),
              a
                ? (A.id = r)
                : (A = {
                    schemaId: "<ns>.PageEntity.2",
                    id: r,
                    url: g ? y.protocol + "//" + y.hostname : h ? y.href.split("?")[0] : y.href,
                    server: y.hostname,
                    path: g ? "" : y.pathname,
                    referrer: g ? "" : h ? P.referrer.split("?")[0] : P.referrer,
                    title: P.title,
                  }),
              Object.keys(n || {}).forEach(function (e) {
                A[e] = n[e];
              }),
              v("setEntity", { page: A }),
              T("$pageChange", A, { buffered: 1 }),
              t && T("$afterPageTransition"));
          }
          function R() {
            (T("$load"), T("$ready"), T("$afterload"));
          }
          function S() {
            (T("$ready"), T("$beforeunload"), T("$unload"), T("$afterunload"));
          }
          function x() {
            I || (T("$visible", !1, { buffered: 1 }), (I = !0));
          }
          function U() {
            I && (T("$visible", !0, { buffered: 1 }), (I = !1));
          }
          function j(n, t) {
            return m(function () {
              var e = typeof t == i ? n + t() : n;
              T(e);
            });
          }
        });
        csa.plugin(function (f) {
          var e = "Events",
            n = "UNKNOWN",
            s = "id",
            o = "all",
            l = "sushiSourceGroup",
            i = "copyBaseMetadata",
            r = "copyEntities",
            c = "messageId",
            u = "timestamp",
            d = "producerId",
            a = "application",
            p = "obfuscatedMarketplaceId",
            g = "entities",
            h = "page",
            v = "requestId",
            y = "pageType",
            b = "subPageType",
            O = "schemaId",
            m = "version",
            I = "attributes",
            k = "<ns>",
            E = "lob",
            S = f.config["Events.SushiCsaSourceGroup"],
            A = "session",
            T = f.config,
            t = f.global,
            U = t.Object.keys,
            j = (t.location || {}).host,
            N = T[e + ".Namespace"] || "csa_other",
            q = N + ".",
            w = T.Application || "Other" + (j ? ":" + j : ""),
            x = T["Transport.AnonymizeRequests"] || !1,
            D = f("Transport"),
            M = {},
            _ = function (e, t) {
              Object.keys(e).forEach(t);
            };
          function G(n, i, r) {
            _(i, function (e) {
              var t = r === o || (r || {})[e];
              (e in n || (n[e] = { version: 1, id: i[e][s] || f.UUID() }), K(n[e], i[e], t));
            });
          }
          function K(t, n, i) {
            _(n, function (e) {
              !(function (e, t, n) {
                return "string" != typeof t && e !== m
                  ? f.error("Attribute is not of type string: " + e)
                  : !0 === n || 1 === n || e === s || !!~(n || []).indexOf(e);
              })(e, n[e], i) || (t[e] = n[e]);
            });
          }
          function z(r, e, o) {
            _(e, function (t) {
              var e = r[t];
              if (e[O]) {
                var n = {},
                  i = {};
                ((n[s] = e[s]),
                  (n[d] = e[d] || o[d]),
                  (n[O] = e[O]),
                  (n[m] = e[m]++),
                  (n[I] = i),
                  B(n, o),
                  K(i, e, 1),
                  C(i),
                  t === h &&
                    (n.__backfill = function (e) {
                      !(function (e, t, n, i) {
                        if (e && e[O] && e[O] !== n && !e[O].indexOf(q)) {
                          var r = e[g];
                          if (r && r[i] && r[i][s] === t[s]) {
                            var o = r[i],
                              c = U(o);
                            (c.push(v), c.push(y), c.push(b), K(o, t, c));
                          }
                        }
                      })(e, i, n[O], t);
                    }),
                  D("log", n));
              }
            });
          }
          function B(e, t) {
            ((e[u] = (function (e) {
              return ("number" == typeof e && (e = new Date(e).toISOString()), e || f.time("ISO"));
            })(e[u])),
              (e[c] = e[c] || f.UUID()),
              (e[a] = w),
              (e[p] = T.ObfuscatedMarketplaceId || n),
              O in e && (e[O] = e[O].replace(k, N)),
              t && t[E] && (e[E] = t[E]));
          }
          function C(e) {
            (delete e[m], delete e[O], delete e[d]);
          }
          function P(t) {
            var c = {},
              s = !!t[l] && t[l] !== S,
              u = !!t[i],
              a = !!t[r];
            ((this.log = function (i, e) {
              var n = {},
                r = (e || {}).ent;
              if (!i) return f.error("The event cannot be undefined");
              var o = i[g];
              if (s) (u && B(i, t), a && (G(n, M, r), G(n, c, r)));
              else {
                if ("string" != typeof i[O]) return f.error("A valid schema id is required for the event");
                (B(i, t), G(n, M, r), G(n, c, r));
              }
              ((i[d] = t[d]),
                s
                  ? (o || (a && 0 < Object.keys(n).length)) &&
                    ((i[g] = {}),
                    o &&
                      _(o, function (t) {
                        var n = r && r[t];
                        ((i[g][t] = {}),
                          _(o[t], function (e) {
                            (!n || !0 === n || (Array.isArray(n) && ~n.indexOf(e))) && (i[g][t][e] = o[t][e]);
                          }));
                      }),
                    a &&
                      0 < Object.keys(n).length &&
                      _(n, function (t) {
                        (i[g][t] || (i[g][t] = {}),
                          _(n[t], function (e) {
                            e in i[g][t] || (i[g][t][e] = n[t][e]);
                          }),
                          C(i[g][t]));
                      }))
                  : s ||
                    (G(n, o || {}, r),
                    _(n, function (e) {
                      C(n[e]);
                    }),
                    (i[g] = n)),
                e && e[E] && (i[E] = e[E]),
                (e = e || {})[l] || (e[l] = t[l] || S),
                D("log", i, e));
            }),
              (this.setEntity = function (e) {
                (x && delete e[A], G(c, e, o), z(c, e, t));
              }));
          }
          !T["KillSwitch." + e] &&
            U &&
            f.register(e, {
              setEntity: function (e) {
                (x && delete e[A],
                  f.emit("$entities.set", e, { buffered: 1 }),
                  G(M, e, o),
                  z(M, e, { producerId: "csa", lob: T[E] || "0" }));
              },
              removeEntity: function (e) {
                delete M[e];
              },
              instance: function (e) {
                return new P(e);
              },
            });
        });
        csa.plugin(function (p) {
          var a,
            h = "Transport",
            l = "post",
            f = "preflight",
            c = "csa.cajun.",
            i = "store",
            u = "deleteStored",
            s = "sendBeacon",
            n = "__merge",
            t = "__backfill",
            e = ".FlushInterval",
            g = "sushiSourceGroup",
            v = p.config["Events.SushiCsaSourceGroup"],
            y = "function",
            d = 0,
            m = p.config[h + ".BufferSize"] || 2e3,
            E = p.config[h + ".RetryDelay"] || 1500,
            S = p.config[h + ".AnonymizeRequests"] || !1,
            b = p.config[h + ".nonBatchSchema"] || "",
            k = {},
            G = 0,
            I = [],
            R = p.global,
            o = R.document,
            w = p.timeout,
            A = p.emit,
            B = R.Object.keys,
            r = p.config[h + e] || 5e3,
            O = r,
            j = p.config[h + e + ".BackoffFactor"] || 1,
            D = p.config[h + e + ".BackoffLimit"] || 3e4,
            T = 0,
            U = 0,
            $ = 0;
          function _(o, r) {
            if (864e5 < p.time() - +new Date(o.timestamp)) return p.warn("Event is too old: " + o);
            if ((r = r || {}).forceSend && b && b === o.schemaId)
              I.forEach(function (e) {
                if (e.accepts(o, r)) {
                  var n = e.post ? e : null;
                  n && C(n, [o], r[g] || v);
                }
              });
            else if (G < m) {
              typeof o[t] == y &&
                (U ||
                  $ ||
                  B(k).forEach(function (e) {
                    o[t](k[e].event);
                  }),
                delete o[t]);
              var e = o.messageId || p.UUID();
              (e in k || ((k[e] = { event: o, options: r }), G++),
                typeof o[n] == y && (r[g] || v) === (((k[e] || {}).options || {})[g] || v) && o[n](k[e].event),
                !T &&
                  d &&
                  (T = w(
                    q,
                    (function () {
                      var e = O;
                      return ((O = Math.min(e * j, D)), e);
                    })(),
                  )));
            }
          }
          function q() {
            var r = {};
            (B(k).forEach(function (e) {
              var n = k[e],
                o = (n.options && n.options[g]) || v;
              (r[o] || (r[o] = []), r[o].push(n.event));
            }),
              B(r).forEach(function (e) {
                !(function (o, r) {
                  I.forEach(function (n) {
                    var e = r.filter(function (e) {
                      return n.accepts(e, { sushiSourceGroup: o });
                    });
                    0 < e.length &&
                      (n.chunks ? n.chunks(e, o) : [e]).forEach(function (e) {
                        n[l] && C(n, e, o);
                      });
                  });
                })(e, r[e]);
              }),
              (k = {}),
              (T = 0),
              (U += 1),
              A("$transport.flushed"));
          }
          function C(n, o, r) {
            function t() {
              p[u](c + e);
            }
            var e = p.UUID();
            (p[i](c + e, JSON.stringify({ events: o, sourceGroup: r })),
              [
                function (e, n, o, r) {
                  var t = R.navigator || {},
                    c = R.cordova || {};
                  if (S) return 0;
                  if (!t[s] || !e[l]) return 0;
                  e[f] && c && "ios" === c.platformId && !a && ((new Image().src = e[f]().url), (a = 1));
                  var i = e[l](n, o);
                  if (!i.type && t[s](i.url, i.body)) return (r(), 1);
                },
                function (e, n, o, r) {
                  var t = e[l](n, o),
                    c = t.url,
                    i = t.body,
                    a = t.type,
                    f = new XMLHttpRequest(),
                    u = 0;
                  function s(e, n, o) {
                    (f.open("POST", e),
                      (f.withCredentials = !S),
                      o && f.setRequestHeader("Content-Type", o),
                      f.send(n));
                  }
                  return (
                    (f.onload = function () {
                      f.status < 299
                        ? r()
                        : p.config[h + ".XHRRetries"] &&
                          u < 3 &&
                          w(function () {
                            s(c, i, a);
                          }, ++u * E);
                    }),
                    s(c, i, a),
                    1
                  );
                },
              ].some(function (e) {
                try {
                  return e(n, o, r, t);
                } catch (e) {}
              }));
          }
          B &&
            (p.once("$afterload", function () {
              (($ = d = 1),
                (function (t) {
                  (p[i]() || []).forEach(function (e) {
                    if (!e.indexOf(c))
                      try {
                        var n = p[i](e);
                        p[u](e);
                        var o = JSON.parse(n);
                        if (o && "object" == typeof o && !Array.isArray(o))
                          try {
                            if (o.events && o.sourceGroup) {
                              var r = o.sourceGroup;
                              o.events.forEach(function (e) {
                                t(e, { sushiSourceGroup: r });
                              });
                            }
                          } catch (e) {
                            p.error("Error processing backup object format: " + e.message);
                          }
                        else if (Array.isArray(o))
                          try {
                            o.forEach(t);
                          } catch (e) {
                            p.error("Error processing array format backup: " + e.message);
                          }
                      } catch (e) {
                        p.error(e);
                      }
                  });
                })(_),
                p.on(o, "visibilitychange", q, !1),
                q());
            }),
            p.once("$afterunload", function () {
              ((d = 1), q());
            }),
            p.on("$afterPageTransition", function () {
              ((G = 0), (O = r));
            }),
            p.register(h, {
              log: _,
              register: function (e) {
                I.push(e);
              },
            }));
        });
        csa.plugin(function (n) {
          var u = n.config["Events.SushiEndpoint"],
            t = n.config["Events.SushiCsaSourceGroup"];
          n("Transport")("register", {
            accepts: function (n, r) {
              return !(!n || !r) && n.schemaId && (!r.sushiSourceGroup || r.sushiSourceGroup === t);
            },
            post: function (n) {
              var r = n.map(function (n) {
                return { data: n };
              });
              return { url: u, body: JSON.stringify({ events: r }) };
            },
            preflight: function () {
              var n,
                r = /\/\/(.*?)\//.exec(u);
              return (r && r[1] && (n = "https://" + r[1] + "/ping"), { url: n });
            },
            chunks: function (n) {
              for (var r = []; 500 < n.length; ) r.push(n.splice(0, 500));
              return (r.push(n), r);
            },
          });
        });
        csa.plugin(function (u) {
          var e = u.config["Events.SushiEndpoint"],
            t = u.config["Events.SushiCsaSourceGroup"],
            s = u.config["Events.SushiCsaVIP"],
            i = u.config["Events.SushiEndpointPattern"];
          u("Transport")("register", {
            accepts: function (n, r) {
              return !(!n || !r) && !!r.sushiSourceGroup && r.sushiSourceGroup !== t;
            },
            post: function (n, r) {
              var t = n.map(function (n) {
                return { data: n };
              });
              return {
                url: (function (n) {
                  var r = e;
                  n &&
                    (r = (function (n) {
                      var r = Array.prototype.slice.call(arguments, 1),
                        t = (n.match(/%s/g) || []).length;
                      r.length < t &&
                        u.warn("Warning: More placeholders (" + t + ") than arguments (" + r.length + ")");
                      var e = 0;
                      return n.replace(/%s/g, function () {
                        return e < r.length ? r[e++] : "";
                      });
                    })(i, s, n));
                  return r;
                })(r),
                body: JSON.stringify({ events: t }),
              };
            },
            preflight: function () {
              var n,
                r = /\/\/(.*?)\//.exec(e);
              return (r && r[1] && (n = "https://" + r[1] + "/ping"), { url: n });
            },
            chunks: function (n) {
              for (var r = []; 500 < n.length; ) r.push(n.splice(0, 500));
              return (r.push(n), r);
            },
          });
        });
        csa.plugin(function (n) {
          var t,
            a,
            o,
            r,
            e = n.config,
            i = "PageViews",
            d = e[i + ".ImpressionMinimumTime"] || 1e3,
            s = "hidden",
            c = "innerHeight",
            l = "innerWidth",
            g = "renderedTo",
            f = g + "Viewed",
            m = g + "Meaningful",
            u = g + "Impressed",
            p = 1,
            h = 2,
            v = 3,
            w = 4,
            P = 5,
            y = "loaded",
            I = 7,
            b = 8,
            T = n.global,
            S = n.on,
            E = n("Events", { producerId: "csa", lob: e.lob || "0" }),
            K = T.document,
            V = {},
            $ = {},
            M = P,
            R = e["KillSwitch." + i],
            H = e["KillSwitch.PageRender"],
            W = e["KillSwitch.PageImpressed"];
          function j(e) {
            if (!V[I]) {
              if (((V[e] = n.time()), (e !== v && e !== y) || (t = t || V[e]), t && M === w)) {
                if (((a = a || V[e]), !R)) (((i = {})[m] = t - o), (i[f] = a - o), k("PageView.5", i));
                r = r || n.timeout(x, d);
              }
              var i;
              if (
                ((e !== P && e !== p && e !== h) || (clearTimeout(r), (r = 0)),
                (e !== p && e !== h) || H || k("PageRender.4", { transitionType: e === p ? "hard" : "soft" }),
                e === I && !W)
              )
                (((i = {})[m] = t - o), (i[f] = a - o), (i[u] = V[e] - o), k("PageImpressed.3", i));
            }
          }
          function k(e, i) {
            $[e] || ((i.schemaId = "<ns>." + e), E("log", i, { ent: "all" }), ($[e] = 1));
          }
          function q() {
            (0 === T[c] && 0 === T[l]
              ? ((M = b), n("Events")("setEntity", { page: { viewport: "hidden-iframe" } }))
              : (M = K[s] ? P : w),
              j(M));
          }
          function x() {
            (j(I), (r = 0));
          }
          function z() {
            var e = o ? h : p;
            ((V = {}), ($ = {}), (a = t = 0), (o = n.time()), j(e), q());
          }
          function A() {
            var e = K.readyState;
            ("interactive" === e && j(v), "complete" === e && j(y));
          }
          K && void 0 !== K[s]
            ? (z(),
              S(K, "visibilitychange", q, !1),
              S(K, "readystatechange", A, !1),
              S("$afterPageTransition", z),
              S("$timing:loaded", A),
              n.once("$load", A))
            : n.warn("Page visibility not supported");
        });
        csa.plugin(function (c) {
          var s = c.config["Interactions.ParentChainLength"] || 35,
            e = "click",
            r = "touches",
            f = "timeStamp",
            o = "length",
            u = "pageX",
            g = "pageY",
            p = "pageXOffset",
            h = "pageYOffset",
            m = 250,
            v = 5,
            d = 200,
            l = 0.5,
            t = { capture: !0, passive: !0 },
            X = c.global,
            Y = c.emit,
            n = c.on,
            x = X.Math.abs,
            a = (X.document || {}).documentElement || {},
            y = { x: 0, y: 0, t: 0, sX: 0, sY: 0 },
            N = { x: 0, y: 0, t: 0, sX: 0, sY: 0 };
          function b(t) {
            if (t.id) return "//*[@id='" + t.id + "']";
            var e = (function (t) {
                var e,
                  n = 1;
                for (e = t.previousSibling; e; e = e.previousSibling) e.nodeName === t.nodeName && (n += 1);
                return n;
              })(t),
              n = t.nodeName;
            return (1 !== e && (n += "[" + e + "]"), t.parentNode && (n = b(t.parentNode) + "/" + n), n);
          }
          function I(t, e, n) {
            var a = c("Content", { target: n }),
              i = { schemaId: "<ns>.ContentInteraction.2", interaction: t, interactionData: e, messageId: c.UUID() };
            if (n) {
              var r = b(n);
              r && (i.attribution = r);
              var o = (function (t) {
                for (var e = t, n = e.tagName, a = !1, i = t ? t.href : null, r = 0; r < s; r++) {
                  if (!e || !e.parentElement) {
                    a = !0;
                    break;
                  }
                  ((n = (e = e.parentElement).tagName + "/" + n), (i = i || e.href));
                }
                return (a || (n = ".../" + n), { pc: n, hr: i });
              })(n);
              (o.pc && (i.interactionData.parentChain = o.pc), o.hr && (i.interactionData.href = o.hr));
            }
            (a("log", i), Y("$content.interaction", { e: i, w: a }));
          }
          function i(t) {
            I(e, { interactionX: "" + t.pageX, interactionY: "" + t.pageY }, t.target);
          }
          function C(t) {
            if (t && t[r] && 1 === t[r][o]) {
              var e = t[r][0];
              N = y = { e: t.target, x: e[u], y: e[g], t: t[f], sX: X[p], sY: X[h] };
            }
          }
          function D(t) {
            if (t && t[r] && 1 === t[r][o] && y && N) {
              var e = t[r][0],
                n = t[f],
                a = n - N.t,
                i = { e: t.target, x: e[u], y: e[g], t: n, sX: X[p], sY: X[h] };
              ((N = i), d <= a && (y = i));
            }
          }
          function E(t) {
            if (t) {
              var e = x(y.x - N.x),
                n = x(y.y - N.y),
                a = x(y.sX - N.sX),
                i = x(y.sY - N.sY),
                r = t[f] - y.t;
              if ((m < (1e3 * e) / r && v < e) || (m < (1e3 * n) / r && v < n)) {
                var o = n < e;
                (o && a && e * l <= a) ||
                  (!o && i && n * l <= i) ||
                  I(
                    (o ? "horizontal" : "vertical") + "-swipe",
                    { interactionX: "" + y.x, interactionY: "" + y.y, endX: "" + N.x, endY: "" + N.y },
                    y.e,
                  );
              }
            }
          }
          (n(a, e, i, t), n(a, "touchstart", C, t), n(a, "touchmove", D, t), n(a, "touchend", E, t));
        });
        csa.plugin(function (a) {
          var c,
            l,
            s,
            e,
            t = "MutationObserver",
            f = "observe",
            n = "disconnect",
            m = "_csa_flt",
            d = "_csa_llt",
            v = "_csa_mr",
            h = "_csa_mi",
            p = "lastChild",
            _ = "lastElementChild",
            b = "length",
            g = { childList: !0, subtree: !0 },
            I = 10,
            L = 25,
            i = 1e3,
            y = 10,
            C = 4,
            E = { "#text": 1, "#comment": 1, SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, LINK: 1, META: 1 },
            r = a.global,
            u = r.document,
            S = u.body || u.documentElement,
            T = Date.now,
            o = [],
            x = [],
            M = 0,
            N = 1,
            k = [],
            w = [],
            B = 0;
          T &&
            r[t] &&
            ((M = 0),
            (l = new r[t](O)),
            a.once("$ready", A),
            N && (R(), (e = a.interval(P, i))),
            a.register("SpeedIndexBuffers", {
              getBuffers: D,
              registerListener: function (e) {
                c = e;
              },
              replayModuleIsLive: function (e) {
                (a.timeout(A, 0), e && e(D));
              },
            }));
          function O(e) {
            (o.push({ t: T(), m: e }), c && c());
          }
          function P() {
            var e = T();
            (!s || i < e - s) && R();
          }
          function R() {
            for (var e = S, t = T(), n = [], i = [], r = 0, u = 0, o = 0; e && r < y; )
              (e[m] ? ++u : ((e[m] = t), n.push(e), (o = 1)),
                i[b] < C && i.push(e),
                (e[h] = B),
                (e[d] = t),
                (e = e[_] || e[p]),
                (r += 1));
            (o &&
              (u < w[b] &&
                (function (e) {
                  for (var t = e, n = w[b]; t < n; t++) {
                    var i = w[t];
                    if (i) {
                      if (i[v]) break;
                      if (i[h] < B) {
                        if (((i[v] = 1), !E[i.nodeName || ""])) {
                          var r = i,
                            u = l;
                          a.raf(function () {
                            (u && r && u[f](r, g), (u = r = null));
                          });
                        }
                        break;
                      }
                    }
                  }
                })(u),
              (w = i),
              k.push({ t: t, m: n }),
              ++B,
              c && c()),
              N && a.timeout(R, o ? I : L),
              (s = t));
          }
          function A() {
            N && ((N = 0), e && r.clearInterval(e), (e = null), R(), l[f](S, g));
          }
          function D(e) {
            e && (A(), x[b] || x.push({ t: T(), x: 0, y: 0 }), e(M, k, o, x), l && l[n]());
          }
        });
        csa.plugin(function (b) {
          var a = b.global,
            c = a.uet,
            e = a.uex,
            f = a.ue,
            a = a.Object,
            g = 0,
            h = {
              largestContentfulPaint: "lcp",
              visuallyLoaded50: "vl50",
              visuallyLoaded90: "vl90",
              visuallyLoaded100: "vl100",
            };
          b &&
            c &&
            e &&
            a.keys &&
            f &&
            (b.once("$ditched.beforemitigation", function () {
              g = 1;
            }),
            a.keys(h).forEach(function (a) {
              b.on("$timing:" + a, function (b) {
                var d = h[a];
                if (f.isl || g) {
                  var k = "csa:" + d;
                  c(d, k, void 0, b);
                  e("at", k);
                } else c(d, void 0, void 0, b);
              });
            }));
        });

        window.rx = { rid: "XFYA4Y2AJY08MAT6G7D8", sid: "132-4911001-2878963", c: { rxp: "/rd/uedata", ml_dl: false } };

/* --- inline script #40 --- */
window.ue && ue.count && ue.count("CSMLibrarySize", 20516);

/* --- inline script #41 --- */
!(function (n) {
          function e(n, e) {
            return {
              m: n,
              a: (function (n) {
                return [].slice.call(n);
              })(e),
            };
          }
          document.createElement("header");
          var r = function (n) {
            function u(n, r, u) {
              n[u] = function () {
                a._replay.push(r.concat(e(u, arguments)));
              };
            }
            var a = {};
            return (
              (a._sourceName = n),
              (a._replay = []),
              (a.getNow = function (n, e) {
                return e;
              }),
              (a.when = function () {
                var n = [e("when", arguments)],
                  r = {};
                return (
                  u(r, n, "run"),
                  u(r, n, "declare"),
                  u(r, n, "publish"),
                  u(r, n, "build"),
                  (r.depends = n),
                  (r.iff = function () {
                    var r = n.concat([e("iff", arguments)]),
                      a = {};
                    return (u(a, r, "run"), u(a, r, "declare"), u(a, r, "publish"), u(a, r, "build"), a);
                  }),
                  r
                );
              }),
              u(a, [], "declare"),
              u(a, [], "build"),
              u(a, [], "publish"),
              u(a, [], "importEvent"),
              r._shims.push(a),
              a
            );
          };
          ((r._shims = []), n.$Nav || (n.$Nav = r("rcx-nav")), n.$Nav.make || (n.$Nav.make = r));
        })(window);

/* --- inline script #42 --- */
$Nav.importEvent("navbarJS-beaconbelt");
        $Nav.declare("img.sprite", {
          png32:
            "https://m.media-amazon.com/images/G/01/gno/sprites/nav-sprite-global-1x-reorg-privacy._CB779528203_.png",
          "png32-2x":
            "https://m.media-amazon.com/images/G/01/gno/sprites/nav-sprite-global-2x-reorg-privacy._CB779528203_.png",
        });
        $Nav.declare("img.timeline", {
          "timeline-icon-2x": "https://m.media-amazon.com/images/G/01/gno/sprites/timeline_sprite_2x._CB443581191_.png",
        });
        window._navbarSpriteUrl =
          "https://m.media-amazon.com/images/G/01/gno/sprites/nav-sprite-global-1x-reorg-privacy._CB779528203_.png";
        $Nav.declare(
          "img.pixel",
          "https://m.media-amazon.com/images/G/01/x-locale/common/transparent-pixel._CB485935036_.gif",
        );

/* --- inline script #43 --- */
var nav_t_after_preload_sprite = +new Date();

/* --- inline script #44 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("navCF").execute(function () {
          (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
            "https://m.media-amazon.com/images/I/51X1q3MbmUL._RC|71ETp2zKjHL.js,416IQz5llzL.js,01QvReFeJyL.js,01kC46b9vjL.js,81OY9+eFlpL.js,01m0EuyLqIL.js,41jBieyCvYL.js,01wXnKULArL.js,01+pnQJuQ0L.js,21gBwAAfnjL.js,51D+BomCJLL.js,41GvVRH6GqL.js,31yCF4ftzxL.js,11lw6J7z8iL.js,31xP+jauM-L.js,01VYGE8lGhL.js_.js?AUIClients/NavDesktopUberAsset#desktop.language-en.us.803398-T1.1200978-T1.1354727-T1.1354728-T1.1381529-T1.1354730-T1.1354729-T1.948355-T2.310484-T1.1253326-T1.1351084-T1.1346270-T1",
          );
        });

/* --- inline script #45 --- */
if (window.navmet === undefined) {
          window.navmet = [];
          if (window.performance && window.performance.timing && window.ue_t0) {
            var t = window.performance.timing;
            var now = +new Date();
            window.navmet.basic = {
              networkLatency: t.responseStart - t.fetchStart,
              navFirstPaint: now - t.responseStart,
              NavStart: now - window.ue_t0,
            };
            window.navmet.push({ key: "NavFirstPaintStart", end: +new Date(), begin: window.ue_t0 });
          }
        }
        if (window.ue_t0) {
          window.navmet.push({ key: "NavMainStart", end: +new Date(), begin: window.ue_t0 });
        }

/* --- inline script #46 --- */
window.navmet.tmp = +new Date();

/* --- inline script #47 --- */
// Nav start should be logged at this place only if request is NOT progressively loaded.
        // For progressive loading case this metric is logged as part of skeleton.
        // Presence of skeleton signals that request is progressively loaded.
        if (!document.getElementById("navbar-skeleton")) {
          window.uet && uet("ns");
        }
        window._navbar = (function (o) {
          o.componentLoaded = o.loading = function () {};
          o.browsepromos = {};
          o.issPromos = [];
          return o;
        })(window._navbar || {});
        window._navbar.declareOnLoad = function () {
          window.$Nav && $Nav.declare("page.load");
        };
        if (window.addEventListener) {
          window.addEventListener("load", window._navbar.declareOnLoad, false);
        } else if (window.attachEvent) {
          window.attachEvent("onload", window._navbar.declareOnLoad);
        } else if (window.$Nav) {
          $Nav.when("page.domReady").run("OnloadFallbackSetup", function () {
            window._navbar.declareOnLoad();
          });
        }
        window.$Nav && $Nav.declare("config.lightningDeals", {});

/* --- inline script #48 --- */
try {
          if (window.navmet === undefined) window.navmet = [];
          if (window.$Nav) {
            $Nav
              .when("$", "config", "flyout.accountList", "SignInRedirect", "dataPanel")
              .run("accountListRedirectFix", function ($, config, flyout, SignInRedirect, dataPanel) {
                if (!config.accountList) {
                  return;
                }
                flyout.getPanel().onData(function (data) {
                  if (SignInRedirect) {
                    var $anchors = $("[data-nav-role=signin]", flyout.elem());
                    $.each($anchors, function (i, anchorEl) {
                      SignInRedirect.setRedirectUrl($(anchorEl), null, null);
                    });
                  }
                });
              });
            $Nav.when("$").run("defineIsArray", function (jQuery) {
              if (jQuery.isArray === undefined) {
                jQuery.isArray = function (param) {
                  if (param.length === undefined) {
                    return false;
                  }
                  return true;
                };
              }
            });
            $Nav.declare("config.cartFlyoutDisabled", "true");
            $Nav
              .when(
                "$",
                "$F",
                "config",
                "logEvent",
                "panels",
                "phoneHome",
                "dataPanel",
                "flyouts.renderPromo",
                "flyouts.sloppyTrigger",
                "flyouts.accessibility",
                "util.mouseOut",
                "util.onKey",
                "debug.param",
              )
              .build(
                "flyouts.buildSubPanels",
                function (
                  $,
                  $F,
                  config,
                  logEvent,
                  panels,
                  phoneHome,
                  dataPanel,
                  renderPromo,
                  createSloppyTrigger,
                  a11yHandler,
                  mouseOutUtility,
                  onKey,
                  debugParam,
                ) {
                  var flyoutDebug = debugParam("navFlyoutClick");
                  return function (flyout, event) {
                    var linkKeys = [];
                    $(".nav-item", flyout.elem()).each(function () {
                      var $item = $(this);
                      linkKeys.push({ link: $item, panelKey: $item.attr("data-nav-panelkey") });
                    });
                    if (linkKeys.length === 0) {
                      return;
                    }
                    var visible = false;
                    var $parent = $("<div class='nav-subcats'></div>").appendTo(flyout.elem());
                    var panelGroup = flyout.getName() + "SubCats";
                    var hideTimeout = null;
                    var sloppyTrigger = createSloppyTrigger($parent);
                    var showParent = function () {
                      if (hideTimeout) {
                        clearTimeout(hideTimeout);
                        hideTimeout = null;
                      }
                      if (visible) {
                        return;
                      }
                      var height = $("#nav-flyout-shopAll").height();
                      $parent.css({ height: height });
                      $parent.animate(
                        { width: "show" },
                        {
                          duration: 200,
                          complete: function () {
                            $parent.css({ overflow: "visible" });
                          },
                        },
                      );
                      visible = true;
                    };
                    var hideParentNow = function () {
                      $parent.stop().css({ overflow: "hidden", display: "none", width: "auto", height: "auto" });
                      panels.hideAll({ group: panelGroup });
                      visible = false;
                      if (hideTimeout) {
                        clearTimeout(hideTimeout);
                        hideTimeout = null;
                      }
                    };
                    var hideParent = function () {
                      if (!visible) {
                        return;
                      }
                      if (hideTimeout) {
                        clearTimeout(hideTimeout);
                        hideTimeout = null;
                      }
                      hideTimeout = setTimeout(hideParentNow, 10);
                    };
                    flyout.onHide(function () {
                      sloppyTrigger.disable();
                      hideParentNow();
                      this.elem().hide();
                    });
                    var addPanel = function ($link, panelKey) {
                      var panel = dataPanel({
                        className: "nav-subcat",
                        dataKey: panelKey,
                        groups: [panelGroup],
                        spinner: false,
                        visible: false,
                      });
                      if (!flyoutDebug) {
                        var mouseout = mouseOutUtility();
                        mouseout.add(flyout.elem());
                        mouseout.action(function () {
                          panel.hide();
                        });
                        mouseout.enable();
                      }
                      var a11y = a11yHandler({
                        link: $link,
                        onEscape: function () {
                          panel.hide();
                          $link.focus();
                        },
                      });
                      var logPanelInteraction = function (promoID, wlTriggers) {
                        var logNow = $F.once().on(function () {
                          var panelEvent = $.extend({}, event, { id: promoID });
                          if (config.browsePromos && !!config.browsePromos[promoID]) {
                            panelEvent.bp = 1;
                          }
                          logEvent(panelEvent);
                          phoneHome.trigger(wlTriggers);
                        });
                        if (panel.isVisible() && panel.hasInteracted()) {
                          logNow();
                        } else {
                          panel.onInteract(logNow);
                        }
                      };
                      panel.onData(function (data) {
                        renderPromo(data.promoID, panel.elem());
                        logPanelInteraction(data.promoID, data.wlTriggers);
                      });
                      panel.onShow(function () {
                        var columnCount = $(".nav-column", panel.elem()).length;
                        panel.elem().addClass("nav-colcount-" + columnCount);
                        showParent();
                        var $subCatLinks = $(".nav-subcat-links > a", panel.elem());
                        var length = $subCatLinks.length;
                        if (length > 0) {
                          var firstElementLeftPos = $subCatLinks.eq(0).offset().left;
                          for (var i = 1; i < length; i++) {
                            if (firstElementLeftPos === $subCatLinks.eq(i).offset().left) {
                              $subCatLinks.eq(i).addClass("nav_linestart");
                            }
                          }
                          if ($("span.nav-title.nav-item", panel.elem()).length === 0) {
                            var catTitle = $.trim($link.html());
                            catTitle = catTitle.replace(/ref=sa_menu_top/g, "ref=sa_menu");
                            var $subPanelTitle = $("<span class='nav-title nav-item'>" + catTitle + "</span>");
                            panel.elem().prepend($subPanelTitle);
                          }
                        }
                        $link.addClass("nav-active");
                      });
                      panel.onHide(function () {
                        $link.removeClass("nav-active");
                        hideParent();
                        a11y.disable();
                        sloppyTrigger.disable();
                      });
                      panel.onShow(function () {
                        a11y.elems($("a, area", panel.elem()));
                      });
                      sloppyTrigger.register($link, panel);
                      if (flyoutDebug) {
                        $link.click(function () {
                          if (panel.isVisible()) {
                            panel.hide();
                          } else {
                            panel.show();
                          }
                        });
                      }
                      var panelKeyHandler = onKey(
                        $link,
                        function () {
                          if (this.isEnter() || this.isSpace()) {
                            panel.show();
                          }
                        },
                        "keydown",
                        false,
                      );
                      $link
                        .focus(function () {
                          panelKeyHandler.bind();
                        })
                        .blur(function () {
                          panelKeyHandler.unbind();
                        });
                      panel.elem().appendTo($parent);
                    };
                    var hideParentAndResetTrigger = function () {
                      hideParent();
                      sloppyTrigger.disable();
                    };
                    for (var i = 0; i < linkKeys.length; i++) {
                      var item = linkKeys[i];
                      if (item.panelKey) {
                        addPanel(item.link, item.panelKey);
                      } else {
                        item.link.mouseover(hideParentAndResetTrigger);
                      }
                    }
                  };
                },
              );
          }
        } catch (err) {
          if (window.$Nav) {
            window.$Nav.when("metrics", "logUeError").run(function (metrics, log) {
              metrics.increment("NavJS:AboveNavInjection:error");
              log(err.toString(), {
                attribution: "rcx-nav",
                logLevel: "FATAL",
              });
            });
          }
        }

/* --- inline script #49 --- */
window.navmet.push({ key: "PreNav", end: +new Date(), begin: window.navmet.tmp });

/* --- inline script #50 --- */
window.navmet.main = +new Date();

/* --- inline script #51 --- */
window.navmet.tmp = +new Date();

/* --- inline script #52 --- */
window.navmet.push({ key: "Logo", end: +new Date(), begin: window.navmet.tmp });

/* --- inline script #53 --- */
P.when("glow-toaster-strings").execute(function (S) {
                    S.load({
                      "glow-toaster-address-change-error":
                        "An error has occurred and the address has not been updated. Please try again.",
                      "glow-toaster-unknown-error": "An error has occurred. Please try again.",
                    });
                  });

/* --- inline script #54 --- */
P.when("glow-toaster-manager").execute(function (M) {
                    M.create({
                      storeName: "home-garden",
                      pageType: "Detail",
                      aisTransitionState: null,
                      rancorLocationSource: "IP_GEOLOCATION",
                      isB2B: false,
                    });
                  });

/* --- inline script #55 --- */
window.navmet.tmp = +new Date();

/* --- inline script #56 --- */
window.navmet.push({ key: "Search", end: +new Date(), begin: window.navmet.tmp });

/* --- inline script #57 --- */
window.navmet.tmp = +new Date();

/* --- inline script #58 --- */
window.navmet.push({ key: "Tools", end: +new Date(), begin: window.navmet.tmp });

/* --- inline script #59 --- */
window.navmet.tmp = +new Date();

/* --- inline script #60 --- */
var hmenu = document.getElementById("nav-hamburger-menu");
                hmenu.setAttribute("href", "javascript: void(0)");
                window.navHamburgerMetricLogger = function () {
                  if (window.ue && window.ue.count) {
                    var metricName = "Nav:Hmenu:IconClickActionPending";
                    window.ue.count(metricName, (ue.count(metricName) || 0) + 1);
                  }
                  window.$Nav && $Nav.declare("navHMenuIconClicked", !0);
                  window.$Nav && $Nav.declare("navHMenuIconClickedNotReadyTimeStamp", Date.now());
                };
                hmenu.addEventListener("click", window.navHamburgerMetricLogger);
                window.$Nav && $Nav.declare("hamburgerMenuIconAvailableOnLoad", false);

/* --- inline script #61 --- */
window.navmet.push({ key: "HamburgerMenuIcon", end: +new Date(), begin: window.navmet.tmp });

/* --- inline script #62 --- */
window.navmet.tmp = +new Date();

/* --- inline script #63 --- */
window.navmet.push({ key: "CrossShop", end: +new Date(), begin: window.navmet.tmp });

/* --- inline script #64 --- */
window.navmet.tmp = +new Date();

/* --- inline script #65 --- */
window.navmet.push({ key: "SWM", end: +new Date(), begin: window.navmet.tmp });

/* --- inline script #66 --- */
window.navmet.tmp = +new Date();

/* --- inline script #67 --- */
window.navmet.push({ key: "Subnav", end: +new Date(), begin: window.navmet.tmp });

/* --- inline script #68 --- */
(function () {
              var viewportWidth = function () {
                return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
              };

              if (typeof uet === "function") {
                uet("x1", "ewc", { wb: 1 });
              }

              window.$Nav &&
                $Nav.declare(
                  "config.ewc",
                  (function () {
                    var config = {
                      enablePersistent: true,
                      viewportWidthForPersistent: 1400,
                      EWCWideViewWidth: 130,
                      EWCCompactViewWidth: 100,
                      rufusDockedPanelWidth: 320,
                      rufusDockedPanelBrowserMargin: 12,
                      isEWCLogging: 1,
                      isEWCStateExpanded: true,
                      EWCStateReason: "fixed",
                      isSmallScreenEnabled: true,
                      isFreshCustomer: false,
                      errorContent: {
                        html: "<div class='nav-ewc-error'><span class='nav-title'>Oops!</span><p class='nav-paragraph'>There's a problem loading your cart right now.</p><a href='#' class='nav-action-button'><span class='nav-action-inner'>Your Cart</span></a></div>",
                      },
                      url: "/cart/ewc/compact?hostPageType=Detail&hostSubPageType=Glance&hostPageRID=XFYA4Y2AJY08MAT6G7D8&prerender=0&storeName=home-garden",
                      cartCount: 0,
                      freshCartCount: 0,
                      almCartCount: 0,
                      primeWardrobeCartCount: 0,
                      isCompactViewEnabled: true,
                      isCompactEWCRendered: true,
                      isWiderCompactEWCRendered: true,
                      EWCBrowserCacheKey: "EWC_Cache_132-4911001-2878963__USD_en_US",
                      isContentRepainted: false,
                      clearCache: false,
                      loadFromCacheWithDelay: 0,
                      delayRenderingTillATF: false,
                      EarlyLoadEWCContentTreatment: "T3",
                    };
                    var hasAui = window.P && window.P.AUI_BUILD_DATE;
                    var isRTLEnabled = document.dir === "rtl";
                    config.pinnable = config.pinnable && hasAui;
                    config.isMigrationTreatment = true;

                    config.flyout = (function () {
                      var navbelt = document.getElementById("nav-belt");
                      var navCart = document.getElementById("nav-cart");
                      var ewcFlyout = document.getElementById("nav-flyout-ewc");
                      var persistentClassOnBody = "nav-ewc-persistent-hover nav-ewc-full-height-persistent-hover";
                      var flyout = {};

                      var getDocumentScrollTop = function () {
                        return (
                          (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
                        );
                      };

                      var isWindow = function (obj) {
                        return obj != null && obj === obj.window;
                      };

                      var getWindow = function (elem) {
                        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
                      };

                      var getOffset = function (elem) {
                        if (elem.getClientRects && !elem.getClientRects().length) {
                          return { top: 0 };
                        }

                        var rect = elem.getBoundingClientRect ? elem.getBoundingClientRect() : { top: 0 };

                        if (rect.width || rect.height) {
                          var doc = elem.ownerDocument;
                          var win = getWindow(doc);
                          return {
                            top: rect.top + win.pageYOffset - doc.documentElement.clientTop,
                          };
                        }
                        return rect;
                      };

                      flyout.align = function () {
                        var newTop = getOffset(navbelt).top - getDocumentScrollTop();
                        ewcFlyout.style.top = newTop > 0 ? newTop + "px" : 0;
                      };

                      flyout.hide = function () {
                        isRTLEnabled ? (ewcFlyout.style.left = "") : (ewcFlyout.style.right = "");
                      };

                      if (typeof config.isCompactEWCRendered === "undefined") {
                        if (
                          (config.isSmallScreenEnabled && viewportWidth() < 1400) ||
                          (config.isCompactViewEnabled && viewportWidth() >= 1400)
                        ) {
                          config.isCompactEWCRendered = true;
                          config.isEWCStateExpanded = true;
                          config.url = config.url.replace("/gp/navcart/sidebar", "/cart/ewc/compact");
                        } else {
                          config.isCompactEWCRendered = false;
                        }
                      }

                      var viewportQualifyForPersistent = function () {
                        return config.isCompactEWCRendered ? true : viewportWidth() >= 1400;
                      };

                      flyout.hasQualifiedViewportForPersistent = viewportQualifyForPersistent;

                      var rufusPanelState;
                      try {
                        rufusPanelState = sessionStorage.getItem("rufus:panel:dockedState");
                      } catch (e) {
                        rufusPanelState = null;
                      }

                      var rufusPanelIsDocked = function (rufusPanelViewState) {
                        return rufusPanelViewState === "docked-right" || rufusPanelViewState === "docked-left";
                      };

                      var getEWCRightOffset = function () {
                        if (rufusPanelIsDocked(rufusPanelState)) {
                          return 0 - config.EWCWideViewWidth;
                        }

                        if (!config.isCompactEWCRendered) {
                          return 0;
                        }

                        var $navbelt = document.getElementById("nav-belt");
                        if ($navbelt === undefined || $navbelt === null) {
                          return 0;
                        }

                        var EWCCompactViewWidth =
                          config.isWiderCompactEWCRendered && viewportWidth() >= 1280 ? 130 : 100;
                        var scrollLeft =
                          window.pageXOffset !== undefined
                            ? window.pageXOffset
                            : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
                        var scrollXAxis = Math.abs(scrollLeft);
                        var windowWidth = document.documentElement.clientWidth;
                        var navbeltWidth = $navbelt.offsetWidth;
                        var isPartOfNavbarNotVisible = navbeltWidth + EWCCompactViewWidth > windowWidth;

                        if (isPartOfNavbarNotVisible) {
                          return 0 - (navbeltWidth - scrollXAxis - windowWidth + EWCCompactViewWidth);
                        } else {
                          return 0;
                        }
                      };

                      flyout.getEWCRightOffsetCssProperty = function () {
                        return getEWCRightOffset() + "px";
                      };

                      if (config.isCompactEWCRendered) {
                        persistentClassOnBody = "nav-ewc-persistent-hover nav-ewc-compact-view";
                        if (config.isWiderCompactEWCRendered) {
                          persistentClassOnBody += " nav-ewc-wider-compact-view";
                        }
                      }

                      flyout.show = function () {
                        isRTLEnabled
                          ? (ewcFlyout.style.left = flyout.getEWCRightOffsetCssProperty())
                          : (ewcFlyout.style.right = flyout.getEWCRightOffsetCssProperty());
                      };

                      var isIOSDevice = function () {
                        return (
                          (/iPad|iPhone|iPod/.test(navigator.platform) ||
                            (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) &&
                          !window.MSStream
                        );
                      };

                      var checkForPersistent = function () {
                        if (!hasAui) {
                          return { result: false, reason: "noAui" };
                        }
                        if (!config.enablePersistent) {
                          return { result: false, reason: "config" };
                        }
                        if (!viewportQualifyForPersistent()) {
                          return { result: false, reason: "viewport" };
                        }
                        if (isIOSDevice()) {
                          return { result: false, reason: "iOS" };
                        }
                        if (!config.cartCount > 0) {
                          return { result: false, reason: "emptycart" };
                        }
                        return { result: true };
                      };

                      flyout.ableToPersist = function () {
                        return checkForPersistent().result;
                      };
                      var persistentClassRegExp = "(?:^|\\s)" + persistentClassOnBody + "(?!\\S)";
                      flyout.applyPageLayoutForPersistent = function () {
                        if (!document.documentElement.className.match(new RegExp(persistentClassRegExp))) {
                          document.documentElement.className += " " + persistentClassOnBody;
                        }
                      };

                      if (rufusPanelIsDocked(rufusPanelState) && flyout.ableToPersist()) {
                        document.body.style.transition = "none";
                        if (rufusPanelState === "docked-left") {
                          document.body.style.paddingRight =
                            config.EWCCompactViewWidth + config.rufusDockedPanelBrowserMargin + "px";
                        } else if (rufusPanelState === "docked-right") {
                          document.body.style.paddingRight =
                            config.EWCCompactViewWidth + config.rufusDockedPanelWidth + "px";
                        }
                      }

                      P.when("A").execute("RufusPanelListener", function (A) {
                        A.on("rufus-panel-state-change", function (currentPanelState, newPanelState) {
                          rufusPanelState = newPanelState;
                          if (rufusPanelIsDocked(currentPanelState) || rufusPanelIsDocked(newPanelState)) {
                            if (flyout.ableToPersist()) {
                              ewcFlyout.style.right = flyout.getEWCRightOffsetCssProperty();
                            }
                          }
                        });
                      });

                      flyout.unapplyPageLayoutForPersistent = function () {
                        document.documentElement.className = document.documentElement.className.replace(
                          new RegExp(persistentClassRegExp, "g"),
                          "",
                        );
                      };

                      flyout.persist = function () {
                        flyout.applyPageLayoutForPersistent();
                        flyout.show();
                        if (config.isCompactEWCRendered) {
                          flyout.align();
                        }
                      };

                      flyout.unpersist = function () {
                        flyout.unapplyPageLayoutForPersistent();
                        flyout.hide();
                      };

                      var persistentCheck = checkForPersistent();

                      var resizeCallback = function (e) {
                        if (e && e.detail && e.detail.rufusAction) {
                          return;
                        }

                        if (flyout.ableToPersist()) {
                          flyout.persist();
                        } else {
                          flyout.unpersist();
                        }
                      };

                      flyout.bindEvents = function () {
                        if (window.addEventListener) {
                          window.addEventListener("resize", resizeCallback, false);

                          if (config.isCompactEWCRendered) {
                            window.addEventListener("scroll", flyout.align, false);
                          }
                        }
                      };

                      flyout.unbindEvents = function () {
                        if (window.removeEventListener) {
                          window.removeEventListener("resize", resizeCallback, false);

                          if (config.isCompactEWCRendered) {
                            window.removeEventListener("scroll", flyout.align, false);
                          }
                        }
                      };

                      var ewcDefaultPersistence = function () {
                        if (persistentCheck.result) {
                          flyout.persist();
                          if (window.ue && ue.tag) {
                            ue.tag("ewc:persist");
                          }
                        } else {
                          if (window.ue && ue.tag) {
                            ue.tag("ewc:unpersist");
                            if (persistentCheck.reason === "noAui") {
                              ue.tag("ewc:unpersist:noAui");
                            }
                            if (persistentCheck.reason === "viewport") {
                              ue.tag("ewc:unpersist:viewport");
                            }
                            if (persistentCheck.reason === "emptycart") {
                              ue.tag("ewc:unpersist:emptycart");
                            }
                            if (persistentCheck.reason === "iOS") {
                              ue.tag("ewc:unpersist:iOS");
                            }
                          }
                        }
                      };

                      ewcDefaultPersistence();

                      if (window.ue && ue.tag) {
                        if (flyout.hasQualifiedViewportForPersistent()) {
                          ue.tag("ewc:bview");
                        } else {
                          ue.tag("ewc:sview");
                        }
                      }
                      flyout.bindEvents();
                      flyout.cache = function () {
                        const cache = window.sessionStorage;
                        const CACHE_KEY = "EWCBrowserCacheKey";
                        const CACHE_EXPIRY = "EWCBrowserCacheExpiry";
                        const CACHE_VALUE = "EWCBrowserCacheValue";
                        const isSessionStorageValid = function () {
                          return window && cache && cache instanceof Storage;
                        };
                        const isCachePresent = function (key) {
                          return cache.length > 0 && cache.getItem(key);
                        };
                        const isValidType = function (value) {
                          // Prevents accessing empty key-value and internal methods(prototypes) of storage
                          // TODO: Log metrics for invalid access;
                          return value && value.constructor == String;
                        };
                        return {
                          getCache: function (key) {
                            const value = isCachePresent(key);
                            return isValidType(value) ? value : null;
                          },
                          setCache: function (key, value) {
                            const oldValue = isCachePresent(key);
                            const cacheExpiryTime = isCachePresent(CACHE_EXPIRY);
                            // Set the expiry when there's no existing cache - to prevent resetting expiry on page navigation
                            if (!cacheExpiryTime) {
                              var currentTime = new Date();
                              cache.setItem(CACHE_EXPIRY, new Date(currentTime.getTime() + 5 * 60000));
                            }
                            // TODO: Log length of old and new cache values when logMetrics is true
                            cache.setItem(key, value);
                          },
                          updateCacheAndEwcContainer: function (cacheKey, newEwcContent) {
                            const $ = $Nav.getNow("$");
                            const $currentEwc = $("#ewc-content");
                            if (!$currentEwc.length) {
                              var $content = $("#nav-flyout-ewc .nav-ewc-content");
                              $content.html(newEwcContent);
                              this.setCache(CACHE_KEY, cacheKey);
                              if (window.ue && window.ue.count) {
                                var current = window.ue.count("ewc-init-cache") || 0;
                                window.ue.count("ewc-init-cache", current + 1);
                              }
                            } else {
                              var $newEwcContent = $("<div />");
                              var EWC_CONTENT_BODY_SCROLL_SELECTOR = ".ewc-scroller--selected";
                              if (newEwcContent) {
                                // 1. Updates EWC container with new HTML
                                var domParser = new DOMParser();
                                var sandboxedEwcContent = domParser.parseFromString(newEwcContent, "text/html");
                                var newEwcHtmlNoScript = sandboxedEwcContent.getElementById("ewc-content");
                                const $newEwcHtml = $newEwcContent.html(newEwcHtmlNoScript);

                                const offSet =
                                  $currentEwc.find(EWC_CONTENT_BODY_SCROLL_SELECTOR).position().top -
                                  $currentEwc.find(".ewc-active-cart--selected").position().top;
                                $currentEwc.html($newEwcHtml.html());
                                $currentEwc.find(EWC_CONTENT_BODY_SCROLL_SELECTOR).scrollTop(offSet);
                                if (typeof window.uex === "function") {
                                  window.uex("ld", "ewc-reflect-new-state", { wb: 1 });
                                }
                              } else {
                                // 2. Fetches cached response and updates it's html with new state on EWC Update
                                const cachedEwc = this.getCache(CACHE_VALUE);
                                $newEwcContent = $newEwcContent[0];
                                $(cachedEwc).map(function (elementIndex, element) {
                                  $newEwcContent.appendChild(
                                    element.id === "ewc-content" ? $currentEwc.clone()[0] : element,
                                  );
                                });
                                newEwcContent = $newEwcContent.innerHTML;
                                if (window.ue && window.ue.count) {
                                  var current = window.ue.count("ewc-update-cache") || 0;
                                  window.ue.count("ewc-update-cache", current + 1);
                                }
                              }
                              $newEwcContent.remove();
                            }
                            this.setCache(CACHE_VALUE, newEwcContent);
                          },
                          removeCache: function (key) {
                            return cache.removeItem(key);
                          },
                        };
                      };
                      return flyout;
                    })();

                    $Nav.when("config").run("ewc.pageload-content-load-wrapper", function (config) {
                      P.register("ewc.pageload-content-loader", function () {
                        var isEwcLoadedOnLanding = false;
                        if (config.ewc.EarlyLoadEWCContentTreatment) {
                          return {
                            loadContent: function (isFallback) {
                              if (!isEwcLoadedOnLanding) {
                                if (config.ewc.flyout.ableToPersist()) {
                                  setTimeout(function () {
                                    config.ewc.flyout.loadEwcContent();
                                    $Nav.declare("ewc.loadContent", function () {});
                                  }, 1000);
                                } else {
                                  $Nav.declare("ewc.loadContent", config.ewc.flyout.loadEwcContent);
                                }
                                if (isFallback) {
                                  if (window.ue && window.ue.count) {
                                    var current = window.ue.count("ewc-load-content-fallback") || 0;
                                    window.ue.count("ewc-load-content-fallback", current + 1);
                                  }
                                }
                              }
                              isEwcLoadedOnLanding = true;
                            },
                          };
                        } else {
                          return {};
                        }
                      });
                    });

                    $Nav.when("config").run("ewc.inline.ajax", function (config) {
                      P.when("A").execute(function (A) {
                        var $ = A.$;
                        var $content = $("#nav-flyout-ewc .nav-ewc-content");

                        var displayErrorContent = function () {
                          $content.html(config.ewc.errorContent.html).addClass("nav-tpl-flyoutError");
                        };

                        var getUrlParams = function (isReloaded) {
                          var urlParams = {};
                          if (isReloaded) {
                            urlParams["isReloaded"] = true;
                          } else {
                            if (config.ewc.freshCartCount !== undefined) {
                              urlParams["freshCartCount"] = config.ewc.freshCartCount;
                            }
                            if (config.ewc.almCartCount !== undefined) {
                              urlParams["almCartCount"] = config.ewc.almCartCount;
                            }
                            if (config.ewc.primeWardrobeCartCount !== undefined) {
                              urlParams["primeWardrobeCartCount"] = config.ewc.primeWardrobeCartCount;
                            }
                            if (config.ewc.bazaarCartCount !== undefined) {
                              urlParams["bazaarCartCount"] = config.ewc.bazaarCartCount;
                            }
                          }
                          urlParams.widerCompactView = window.innerWidth > 1280;
                          return urlParams;
                        };

                        config.ewc.flyout.loadEwcContent = function _loadEwcContent(isReloaded) {
                          $.ajax({
                            url: config.ewc.url,
                            data: getUrlParams(isReloaded),
                            type: "GET",
                            dataType: config.ewc.isCompactEWCRendered ? "html" : "json",
                            cache: false,
                            timeout: config.ewc.timeout || 30000,
                            beforeSend: function () {
                              if (!config.ewc.isCompactEWCRendered) {
                                $content.addClass("nav-spinner");
                                if (typeof window.uet === "function") {
                                  window.uet("af", "ewc", { wb: 1 });
                                }
                              } else {
                                if (typeof window.uet === "function") {
                                  window.uet("af", "ewc2-compact", { wb: 1 });
                                }
                              }
                            },
                            error: displayErrorContent,
                            success: function (result) {
                              if (typeof window.uet === "function") {
                                window.uet("bb", "ewc", { wb: 1 });
                              }
                              if (config.ewc.isCompactEWCRendered) {
                                if (!isReloaded) {
                                  P.register("EWC", function () {
                                    if (window.EwcP === undefined) {
                                      window.EwcP = window.AmazonUIPageJS || P;
                                    }
                                    return {
                                      refresh: function () {
                                        if (window.ue && window.ue.count) {
                                          window.ue.count("ewc2-refresh", 1);
                                        }
                                        config.ewc.flyout.loadEwcContent(true);
                                        P.when("EWCRefreshCallback").execute(function (callback) {
                                          callback.update();
                                        });
                                      },
                                    };
                                  });
                                } else {
                                  var cartQuantity = $(result).find("#ewc-total-quantity").val();
                                  if (window.$Nav && cartQuantity) {
                                    window.$Nav.when("api.setCartCount").run(function (setCartCount) {
                                      setCartCount(parseInt(cartQuantity), true);
                                    });
                                  }
                                }

                                var cache = config.ewc.flyout.cache();
                                cache.updateCacheAndEwcContainer("EWC_Cache_132-4911001-2878963__USD_en_US", result);
                              }
                              if (typeof window.uet === "function") {
                                window.uet("be", "ewc", { wb: 1 });
                              }
                            },
                            complete: function () {
                              if (!config.ewc.isCompactEWCRendered) {
                                $content.removeClass("nav-spinner");
                              }
                              if (typeof window.uet === "function") {
                                window.uet("cf", "ewc", { wb: 1 });
                              }
                              if (typeof window.uex === "function") {
                                window.uex("ld", "ewc", { wb: 1 });
                              }
                            },
                          });
                        };
                      });
                      window.P &&
                        window.P.AUI_BUILD_DATE &&
                        (window.AmazonUIPageJS ? AmazonUIPageJS : P)
                          .when("ewc.pageload-content-loader", "atf")
                          .execute("ewcPageLoadContentLoader", function (ewcPageLoadContentLoader, atf) {
                            if (window.ue && window.ue.count) {
                              var current = window.ue.count("ewc-load-content") || 0;
                              window.ue.count("ewc-load-content", current + 1);
                            }
                            ewcPageLoadContentLoader.loadContent(false);
                          });
                    });

                    const CACHE_KEY = "EWCBrowserCacheKey";
                    const CACHE_VALUE = "EWCBrowserCacheValue";
                    const CACHE_EXPIRY = "EWCBrowserCacheExpiry";
                    var cache = config.flyout.cache();

                    const isCacheValid = function () {
                      // Check for page types and tenure of the cache
                      const clearCache = config.clearCache;
                      const cacheExpiryTime = cache.getCache(CACHE_EXPIRY);
                      const isCacheExpired = new Date() > new Date(cacheExpiryTime);
                      const cacheKey = config.EWCBrowserCacheKey;
                      const oldCacheKey = cache.getCache(CACHE_KEY);
                      const isCacheValid = !clearCache && !isCacheExpired && cacheKey == oldCacheKey;
                      if (!isCacheValid && window.ue && window.ue.count) {
                        var current = window.ue.count("ewc-cache-invalidated") || 0;
                        window.ue.count("ewc-cache-invalidated", current + 1);
                      }
                      return isCacheValid;
                    };
                    function loadFromCache() {
                      if (window.uet && typeof window.uet === "function") {
                        window.uet("bb", "ewc-loaded-from-cache", { wb: 1 });
                      }
                      if (cache) {
                        if (isCacheValid()) {
                          var content = cache.getCache(CACHE_VALUE);
                          if (content) {
                            var $ewcContainer = document
                              .getElementById("nav-flyout-ewc")
                              .getElementsByClassName("nav-ewc-content")[0];
                            var $ewcContent = document.getElementById("ewc-content");
                            if ($ewcContainer && !$ewcContent) {
                              $ewcContainer.innerHTML = content;
                              // Execute scripts from cache
                              const ewcJavascript = document
                                .getElementById("ewc-content")
                                .parentNode.querySelectorAll(":scope > script");
                              ewcJavascript.forEach(function (script) {
                                var scriptTag = document.createElement("script");
                                scriptTag.innerHTML = script.innerHTML;
                                document.body.appendChild(scriptTag);
                              });
                              if (typeof window.uex === "function") {
                                window.uex("ld", "ewc-loaded-from-cache", { wb: 1 });
                              }
                            } else if (window.ue && window.ue.count && typeof window.ue.count === "function") {
                              var currentFailure = window.ue.count("ewc-slow-cache") || 0;
                              window.ue.count("ewc-slow-cache", currentFailure + 1);
                            }
                          }
                        } else {
                          cache.removeCache(CACHE_VALUE);
                          cache.removeCache(CACHE_KEY);
                          cache.removeCache(CACHE_EXPIRY);
                        }
                      }
                    }
                    function delayBy(delayTime) {
                      if (delayTime) {
                        window.setTimeout(function () {
                          loadFromCache();
                        }, delayTime);
                      } else {
                        loadFromCache();
                      }
                    }
                    if (config.delayRenderingTillATF) {
                      (window.AmazonUIPageJS ? AmazonUIPageJS : P)
                        .when("atf")
                        .execute("EverywhereCartLoadFromCacheOnAtf", function () {
                          delayBy(config.loadFromCacheWithDelay);
                        });
                    } else {
                      delayBy(config.loadFromCacheWithDelay);
                    }

                    return config;
                  })(),
                );

              if (typeof uet === "function") {
                uet("x2", "ewc", { wb: 1 });
              }

              if (window.ue && ue.tag) {
                ue.tag("ewc");
                ue.tag("ewc:unrec");
                ue.tag("ewc:cartsize:0");

                if (window.P && window.P.AUI_BUILD_DATE) {
                  ue.tag("ewc:aui");
                } else {
                  ue.tag("ewc:noAui");
                }
              }
            })();

/* --- inline script #69 --- */
window.navmet.push({ key: "NavBar", end: +new Date(), begin: window.navmet.main });

/* --- inline script #70 --- */
if (window.ue_t0) {
          window.navmet.push({ key: "NavMainPaintEnd", end: +new Date(), begin: window.ue_t0 });
          window.navmet.push({ key: "NavFirstPaintEnd", end: +new Date(), begin: window.ue_t0 });
        }

/* --- inline script #71 --- */
window.navmet.MainEnd = new Date();

/* --- inline script #72 --- */
if (window.ue_t0) {
          window.navmet.push({ key: "NavMainEnd", end: +new Date(), begin: window.ue_t0 });
        }

/* --- inline script #73 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("load").execute(function () {
          (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
            "https://m.media-amazon.com/images/I/61UByvQwErL._RC|71SgNDCHMyL.js,01vHH50q3hL.js,216tCaaiamL.js,01fhd9jDTiL.js,01c3R5cAW+L.js_.js?AUIClients/SiteWideActionExecutorAssets#us.1245996-T1.1340248-T1.1293805-T1.1221147-T1.1339675-T1.1166904-T1",
          );
        });

/* --- inline script #74 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("load").execute(function () {
          (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
            "https://m.media-amazon.com/images/I/01+j5KphOOL._RC|618J1zyHq8L.js,01NHtfVSo2L.js,115xozIYkWL.js,41Zr2gcUUDL.js_.js?AUIClients/PortableOffersDisplayAssets#language-en.us.1221147-T1",
          );
        });

/* --- inline script #75 --- */
{"deviceType":"web"}

/* --- inline script #76 --- */
{"marketplaceId":"ATVPDKIKX0DER","endpoint":"data.amazon.com","csrfToken":"1@gwouWezNBxqam/+4ZoS8I5/EtZtYLMmuiTOtkph+UqprAAAAAQAAAABp+k4NcmF3AAAAABVX8CwXqz42z+J7i/ABqA==@NLD_E0LHGO","requestId":"XFYA4Y2AJY08MAT6G7D8","language":"en-US"}

/* --- inline script #77 --- */
window.renderingWeblabs = window.renderingWeblabs ? window.renderingWeblabs : {};
                  window.renderingWeblabs = Object.assign(
                    window.renderingWeblabs,
                    JSON.parse(
                      '{"ADPT_SF_HIGH_RATE_METRIC_LOGGING_1256364":"C","APM_STORES_JPS_JRS_SAFEFRAME_BG_COLOR_TOGGLE_1329269":"T1","APM_STORES_JPS_JRS_SAFEFRAME_RESPONSIVE_SIZING_1314203":"T1","APM_STORES_JPS_JRS_SAFEFRAME_NEW_JRS_ADDETAILS_1335584":"T1","APM_STORES_JPS_JRS_SAFEFRAME_SHOWADFEEDBACK_FALSE_SLOTS_1380760":"T1","APM_STORES_JPS_JRS_SAFEFRAME_SL_ON_DOSSIER_1362947":"T1","ADPT_SF_HOMEPAGE_ART_THEMING_1298909":"C","APM_STORES_JPS_JRS_SAFEFRAME_DISABLE_LAUNCH_INTENT_1331357":"T1","ADPT_SF_GWATF_ROUNDED_CORNERS_1036948":"T1","APM_STORES_JPS_JRS_SAFEFRAME_IFRAME_READY_RETRY_1374491":"T1","APM_STORES_JPS_JRS_SAFEFRAME_LIGHT_AD_CREATIVE_SIZE_STYLE_1311018":"T1"}',
                    ),
                  );

/* --- inline script #78 --- */
(function () {
                    var e,
                      t = class {};
                    ((e = t),
                      (e.startSafeFrameCSM = new Map()),
                      (e.startSafeFrameCSA = new Map()),
                      (e.startSafeFrameCSMMetrics = (t) => {
                        e.startSafeFrameCSM.set(t, new Date());
                      }),
                      (e.startSafeFrameCSAMetrics = (t) => {
                        e.startSafeFrameCSA.set(t, new Date());
                      }));
                    var n = `perf:sf:grandprix`,
                      r = (e, t, n) => `${e}${n ? `:${n.placementName}` : ``} - ${t}`,
                      i = (e, t, n) => {
                        var i, a;
                        let o = r(e, t, n);
                        return ((i = performance) == null || (a = i.mark) == null || a.call(i, o), o);
                      };
                    Array.from({ length: 100 }, (e, t) => (t + 1) / 100);
                    var a = `data-val`,
                      o = (e) => {
                        var t, n;
                        if (e === ``) return ``;
                        let r = `ape_${e}_placement_ClickTracking`,
                          i = document.getElementById(r);
                        return (t = i == null || (n = i.getAttribute) == null ? void 0 : n.call(i, a)) == null ? `` : t;
                      },
                      s = (e, t, { placementName: n }) => {
                        let r = o(n),
                          i = { command: `percolateClickTracking`, data: r };
                        (t.postMessage(i), e.setAttribute(`data-sent-percolate-click-tracking-params`, r));
                      },
                      c = (e, t) => {
                        let r = document.getElementById(t);
                        return r
                          ? (i(n, `${t} exists`), Promise.resolve(r))
                          : new Promise((r) => {
                              new MutationObserver((e, a) => {
                                let o = document.getElementById(t);
                                o && (i(n, `${t} found during mutation`), a.disconnect(), r(o));
                              }).observe(e, { subtree: !0, childList: !0 });
                            });
                      },
                      l = (e, t = 10, r = 2e4) =>
                        new Promise((a, o) => {
                          let s = Date.now(),
                            c = setInterval(() => {
                              window.APE_SF
                                ? (i(n, `Host found inside waitForWindowHostVariable`, e), clearInterval(c), a())
                                : Date.now() - s >= r &&
                                  (clearInterval(c),
                                  i(n, `Timed out waiting for sf host in waitForWindowHostVariable`, e),
                                  o());
                            }, t);
                        }),
                      u = class {
                        static listenForSFIFrameLoad(e, t) {
                          var r = this;
                          window.addEventListener(`message`, async (a) => {
                            var o, l, u;
                            if (a.data !== `sf iframe ready`) return;
                            let d = document.getElementById(t);
                            if (d === null) return;
                            let f = await c(d, e);
                            if (a.source !== f.contentWindow) return;
                            let p = JSON.parse(f.getAttribute(`name`));
                            (f.setAttribute(`data-iframe-ready`, `true`), i(n, `data-iframe-ready`, p));
                            let m = (o = a.ports[0]) == null ? ((l = a.data) == null ? void 0 : l.messagePort) : o;
                            (((u = window.renderingWeblabs) == null ||
                            (u = u.APM_STORES_JPS_JRS_SAFEFRAME_CLICK_TRACKING_PAINTER_TEST_1259727) == null
                              ? void 0
                              : u.toUpperCase()) !== `T1` && s(f, m, p),
                              r.fastSafeFrameLoad(p, `sf-host-load_${t}`, m));
                          });
                        }
                        static async fastSafeFrameLoad(e, r, a) {
                          try {
                            (i(n, `fastSafeFrameLoad start`, e),
                              window.APE_SF || (i(n, `waitUntilElementExists`, e), await l(e)),
                              window.APE_SF
                                ? (i(n, `host exists`, e),
                                  window.APE_SF.setupMessageChannel(a, e, t.startSafeFrameCSM.get(e.adUnitPlacementId)))
                                : (i(n, `host doesn't exists`, e),
                                  document.getElementById(r).addEventListener(`load`, (r) => {
                                    (i(n, `SF host loaded`, e),
                                      window.APE_SF.setupMessageChannel(
                                        a,
                                        e,
                                        t.startSafeFrameCSM.get(e.adUnitPlacementId),
                                      ));
                                  })));
                          } catch (e) {
                            var o, s;
                            (console.error(e),
                              (o = (s = window).ueLogError) == null ||
                                o.call(s, e, { logLevel: `ERROR`, attribution: `APE-safeframe`, message: `` }));
                          }
                        }
                      };
                    window.grandprix || (window.grandprix = { metrics: t, wrappers: u });
                  })();
                  //# sourceMappingURL=grandprix-modern.js.map

/* --- inline script #79 --- */
if (window.ue && typeof window.ue.count === "function") {
                    window.ue.count("adplacements:adload:htmlreached", 1);
                  }
                  if (window.csa) {
                    try {
                      window.csa("Events", { producerId: "adplacements" })(
                        "log",
                        { schemaId: "ApeSafeframe.csaEvent.1", metricName: "adload:htmlreached", metricValue: 1 },
                        { ent: "all" },
                      );
                    } catch (ex) {}
                  }

/* --- inline script #80 --- */
if (window.ue && typeof window.ue.count === "function") {
                    window.ue.count("adplacements:adload:htmlreached:Detail_desktop-detail-ilm_desktop", 1);
                  }
                  if (window.csa) {
                    try {
                      window.csa("Events", { producerId: "adplacements" })(
                        "log",
                        {
                          schemaId: "ApeSafeframe.csaEvent.1",
                          metricName:
                            "adload:htmlreached:Detail_desktop-detail-ilm_desktop:cf81795d-ef39-406a-ad7e-6538fcad65f8",
                          metricValue: 1,
                        },
                        { ent: "all" },
                      );
                    } catch (ex) {}
                  }

/* --- inline script #81 --- */
window.grandprix.metrics.startSafeFrameCSMMetrics("ape_Detail_desktop-detail-ilm_desktop_placement");
                  window.grandprix.metrics.startSafeFrameCSAMetrics("ape_Detail_desktop-detail-ilm_desktop_placement");

/* --- inline script #82 --- */
window.grandprix.wrappers.listenForSFIFrameLoad(
                      "ape_Detail_desktop-detail-ilm_desktop_iframe",
                      "ape_Detail_desktop-detail-ilm_desktop_placement",
                    );

/* --- inline script #83 --- */
(function () {
                        const script = document.createElement("script");
                        script.src = "https://m.media-amazon.com/images/I/11m16uzbS8L.js";
                        script.defer = true;
                        script.fetchPriority = "low";
                        script.onload = () => {
                          adFeedback.initializeSponsoredLabel("desktop-detail-ilm", "", false, "", "", "");
                        };
                        document
                          .getElementById("ape_Detail_desktop-detail-ilm_desktop_placement_Feedback")
                          .appendChild(script);
                      })();

/* --- inline script #84 --- */
if (window.ue && typeof window.ue.count === "function") {
                      window.ue.count("adplacements:adfeedback:sponsoredlabelrendered", 1);
                    }
                    if (window.csa) {
                      try {
                        window.csa("Events", { producerId: "adplacements" })(
                          "log",
                          {
                            schemaId: "ApeSafeframe.csaEvent.1",
                            metricName: "adfeedback:sponsoredlabelrendered",
                            metricValue: 1,
                          },
                          { ent: "all" },
                        );
                      } catch (ex) {}
                    }

/* --- inline script #85 --- */
if (window.ue && typeof window.ue.count === "function") {
                      window.ue.count(
                        "adplacements:adfeedback:sponsoredlabelrendered:host:Detail_desktop-detail-ilm_desktop",
                        1,
                      );
                    }
                    if (window.csa) {
                      try {
                        window.csa("Events", { producerId: "adplacements" })(
                          "log",
                          {
                            schemaId: "ApeSafeframe.csaEvent.1",
                            metricName:
                              "adfeedback:sponsoredlabelrendered:host:Detail_desktop-detail-ilm_desktop:cf81795d-ef39-406a-ad7e-6538fcad65f8",
                            metricValue: 1,
                          },
                          { ent: "all" },
                        );
                      } catch (ex) {}
                    }

/* --- inline script #86 --- */
if (window.mix_csa) {
                    window.mix_csa(
                      '[cel_widget_id="cerberus-shared_DetailPage_0"]',
                      "#CardInstanceuuhHTO-owaFEUfY_zIJMKg",
                    )("mark", "bb");
                  }

/* --- inline script #87 --- */
if (window.uet) {
                    window.uet("bb", "cerberus-shared_DetailPage_0", { wb: 1 });
                  }

/* --- inline script #88 --- */
if (window.mix_csa) {
                    window.mix_csa(
                      '[cel_widget_id="cerberus-shared_DetailPage_0"]',
                      "#CardInstanceuuhHTO-owaFEUfY_zIJMKg",
                    )("mark", "be");
                  }

/* --- inline script #89 --- */
if (window.uet) {
                    window.uet("be", "cerberus-shared_DetailPage_0", { wb: 1 });
                  }

/* --- inline script #90 --- */
if (window.mixTimeout) {
                    window.mixTimeout("cerberus-shared", "CardInstanceuuhHTO-owaFEUfY_zIJMKg", 90000);
                  }
                  P.when("mix:@amzn/mix.client-runtime", "mix:cerberus-shared__h-4XATF2").execute(
                    function (runtime, cardModule) {
                      runtime.registerCardFactory("CardInstanceuuhHTO-owaFEUfY_zIJMKg", cardModule).then(function () {
                        if (window.mix_csa) {
                          window.mix_csa(
                            '[cel_widget_id="cerberus-shared_DetailPage_0"]',
                            "#CardInstanceuuhHTO-owaFEUfY_zIJMKg",
                          )("mark", "functional");
                        }
                        if (window.uex) {
                          window.uex("ld", "cerberus-shared_DetailPage_0", { wb: 1 });
                        }
                      });
                    },
                  );

/* --- inline script #91 --- */
P.load.js("https://m.media-amazon.com/images/I/41yxa7+dySL.js?xcp");

/* --- inline script #92 --- */
P.load.js("https://m.media-amazon.com/images/I/31XrfZHfFiL._RC|31uRpDqQpaL.js_.js?xcp");

/* --- inline script #93 --- */
ue && typeof ue.count === "function" && ue.count("OIG.csm.common.rendered", 1);

/* --- inline script #94 --- */
P.when("A", "a-popover").execute("a-popover-count", function (A) {
                    A.on("a:popover:afterShow:fod-cx-learnMore-popover-fodApi", function () {
                      ue.count("fodcxLearnmore.popover.fodApi", 1);
                    });

                    var isPriceInsightsDesktopEnabled = false;

                    if (isPriceInsightsDesktopEnabled) {
                      A.declarative("show-rufus-price-ingress", "click", function (event) {
                        event.$event.preventDefault();
                        if (window.ue && window.ue.count) {
                          window.ue.count("priceInsightsFODCX:desktop:click", 1);
                        }

                        if (uet) {
                          uet("bb", "priceInsightsFODCX:desktop:clickAction:latency", { wb: 1 });
                        }

                        let fodCxElement = document.getElementById("fod-cx-box");
                        let ingressQueryText =
                          (fodCxElement && fodCxElement.getAttribute("data-query-text")) ||
                          "Why does this say 'High Price'?";
                        let csaElement =
                          window.csa && fodCxElement ? window.csa("Content", { element: fodCxElement }) : undefined;

                        if (csaElement) {
                          csaElement("mark", "render-start", performance.now());
                        }

                        window.P.when("rufus-handle-stream").execute(function (stream) {
                          if (stream) {
                            ue && ue.count && ue.count("RUFUS_DPX_ATF_PRICE_HISTORY_SENT_TO_RUFUS_DESKTOP_FODCX", 1);
                            stream({
                              qis: "NileDPApexPriceHistory",
                              query: ingressQueryText,
                              metricName: "DesktopPriceHistoryDPXIngress",
                            });
                          }
                        });

                        if (uex) {
                          uex("ld", "priceInsightsFODCX:desktop:clickAction:latency", { wb: 1 });
                        }

                        if (csaElement) {
                          csaElement("mark", "render-end", performance.now());
                        }
                      });
                    }
                  });

/* --- inline script #95 --- */
(function (f) {
                      var _np = window.P._namespace("DetailPageBuyBoxTemplate");
                      if (_np.guardFatal) {
                        _np.guardFatal(f)(_np);
                      } else {
                        f(_np);
                      }
                    })(function (P) {
                      P.now().execute("dp-mark-od", function () {
                        if (typeof window.markFeatureRender === "function") {
                          window.markFeatureRender("od", { isInteractive: false });
                        }
                      });
                    });

/* --- inline script #96 --- */
P.when("A", "load").execute("aod-assets-loaded", function (A) {
                    function logAssetsNotLoaded() {
                      if (window.ueLogError) {
                        var customError = {
                          message: "Failed to load AOD assets for WDG: home_display_on_website, Device: web",
                        };
                        var additionalInfo = {
                          logLevel: "ERROR",
                          attribution: "aod_assets_not_loaded",
                        };
                        ueLogError(customError, additionalInfo);
                      }
                      if (window.ue && window.ue.count) {
                        window.ue.count("aod-assets-not-loaded", 1);
                      }
                    }

                    function verifyAssetsLoaded() {
                      var assetsLoadedPageState = A.state("aod:assetsLoaded");
                      var logAssetsNotLoadedState = A.state("aod:logAssetsNotLoaded");

                      if (
                        (assetsLoadedPageState == null || !assetsLoadedPageState.isAodAssetsLoaded) &&
                        (logAssetsNotLoadedState == null || !logAssetsNotLoadedState.isAodAssetsNotLoadedLogged)
                      ) {
                        A.state("aod:logAssetsNotLoaded", { isAodAssetsNotLoadedLogged: true });
                        logAssetsNotLoaded();
                      }
                    }

                    setTimeout(verifyAssetsLoaded, 50000);
                  });

/* --- inline script #97 --- */
(function (f) {
                      var _np = window.P._namespace("DetailPageTellAFriendTemplates");
                      if (_np.guardFatal) {
                        _np.guardFatal(f)(_np);
                      } else {
                        f(_np);
                      }
                    })(function (P) {
                      P.when("jQuery", "SocialShareWidgetAUI").execute(
                        "tellAFriendBox",
                        function ($, SocialShareWidget) {
                          var OLD_WIDGET = $("[id$='mageBlock_feature_div']").find("[data-action='ssf-share-icon']");

                          if (OLD_WIDGET.length) {
                            OLD_WIDGET.remove();
                          }

                          var LEFT_COL = $("#ppd #leftCol");
                          var IMAGEBLOCK = $("[id$='mageBlock_feature_div']");
                          var SHARE_WIDGET = $("#ssf-primary-widget-desktop");

                          if (LEFT_COL.css("position") !== "sticky") {
                            IMAGEBLOCK.css("position", "relative");
                          }

                          // Attach the share widget to audible title if AUDIBLE_TITLE exists
                          function attachShareWidgetToAudibleTitle() {
                            var AUDIBLE_TITLE = $("#audibleproducttitle_feature_div");
                            if (AUDIBLE_TITLE.length) {
                              AUDIBLE_TITLE.prepend(SHARE_WIDGET);

                              SocialShareWidget.init();
                              SHARE_WIDGET.find(".ssf-background").toggleClass("ssf-background ssf-background-float");
                              SHARE_WIDGET.find(".ssf-share-btn").toggleClass("ssf-share-btn ssf-share-btn-float");
                              return true; // successfully attached
                            }

                            return false; // not found yet
                          }

                          // If AUDIBLE_TITLE doesn't exist add into image block
                          if (!attachShareWidgetToAudibleTitle()) {
                            IMAGEBLOCK.prepend(SHARE_WIDGET);
                          }

                          // Set a 1 second timeout to stop waiting for audible div element
                          var timeoutId = setTimeout(function () {
                            if (observer && observer.disconnect) {
                              observer.disconnect();
                            }
                            if (interval) clearInterval(interval);
                          }, 1000);

                          // Use MutationObserver for modern browsers to try attaching for audible
                          var observer;
                          if (window.MutationObserver) {
                            observer = new MutationObserver(function () {
                              if (attachShareWidgetToAudibleTitle()) {
                                observer.disconnect();
                                clearTimeout(timeoutId);
                              }
                            });

                            observer.observe(document.body, {
                              childList: true,
                              subtree: true,
                            });
                          }

                          // Polling fallback for older browsers to try attaching for audible
                          var interval;
                          if (!window.MutationObserver) {
                            interval = setInterval(function () {
                              if (attachShareWidgetToAudibleTitle()) {
                                clearInterval(interval);
                                clearTimeout(timeoutId);
                              }
                            }, 100);
                          }
                        },
                      );
                    });

/* --- inline script #98 --- */
if (window.mix_csa) {
                      window.mix_csa(
                        '[cel_widget_id="cross-border-widget_DetailPage_1"]',
                        "#CardInstancePLpHBJ5RUof8TmEMEFOyug",
                      )("mark", "bb");
                    }

/* --- inline script #99 --- */
if (window.uet) {
                      window.uet("bb", "cross-border-widget_DetailPage_1", { wb: 1 });
                    }

/* --- inline script #100 --- */
if (window.mix_csa) {
                      window.mix_csa(
                        '[cel_widget_id="cross-border-widget_DetailPage_1"]',
                        "#CardInstancePLpHBJ5RUof8TmEMEFOyug",
                      )("mark", "be");
                    }

/* --- inline script #101 --- */
if (window.uet) {
                      window.uet("be", "cross-border-widget_DetailPage_1", { wb: 1 });
                    }

/* --- inline script #102 --- */
if (window.mixTimeout) {
                      window.mixTimeout("cross-border-widget", "CardInstancePLpHBJ5RUof8TmEMEFOyug", 90000);
                    }
                    P.when("mix:@amzn/mix.client-runtime", "mix:cross-border-widget__jQoC5G4e").execute(
                      function (runtime, cardModule) {
                        runtime.registerCardFactory("CardInstancePLpHBJ5RUof8TmEMEFOyug", cardModule).then(function () {
                          if (window.mix_csa) {
                            window.mix_csa(
                              '[cel_widget_id="cross-border-widget_DetailPage_1"]',
                              "#CardInstancePLpHBJ5RUof8TmEMEFOyug",
                            )("mark", "functional");
                          }
                          if (window.uex) {
                            window.uex("ld", "cross-border-widget_DetailPage_1", { wb: 1 });
                          }
                        });
                      },
                    );

/* --- inline script #103 --- */
P.when("ready").execute(function () {
                      P.load.js("https://m.media-amazon.com/images/I/11Z1+fCwE4L.js?xcp");
                    });

/* --- inline script #104 --- */
window.renderingWeblabs = window.renderingWeblabs ? window.renderingWeblabs : {};
                    window.renderingWeblabs = Object.assign(
                      window.renderingWeblabs,
                      JSON.parse(
                        '{"ADPT_SF_HIGH_RATE_METRIC_LOGGING_1256364":"C","APM_STORES_JPS_JRS_SAFEFRAME_BG_COLOR_TOGGLE_1329269":"T1","APM_STORES_JPS_JRS_SAFEFRAME_RESPONSIVE_SIZING_1314203":"T1","APM_STORES_JPS_JRS_SAFEFRAME_NEW_JRS_ADDETAILS_1335584":"T1","APM_STORES_JPS_JRS_SAFEFRAME_SHOWADFEEDBACK_FALSE_SLOTS_1380760":"T1","APM_STORES_JPS_JRS_SAFEFRAME_SL_ON_DOSSIER_1362947":"T1","ADPT_SF_HOMEPAGE_ART_THEMING_1298909":"C","APM_STORES_JPS_JRS_SAFEFRAME_DISABLE_LAUNCH_INTENT_1331357":"T1","ADPT_SF_GWATF_ROUNDED_CORNERS_1036948":"T1","APM_STORES_JPS_JRS_SAFEFRAME_IFRAME_READY_RETRY_1374491":"T1","APM_STORES_JPS_JRS_SAFEFRAME_LIGHT_AD_CREATIVE_SIZE_STYLE_1311018":"T1"}',
                      ),
                    );

/* --- inline script #105 --- */
(function () {
                      var e,
                        t = class {};
                      ((e = t),
                        (e.startSafeFrameCSM = new Map()),
                        (e.startSafeFrameCSA = new Map()),
                        (e.startSafeFrameCSMMetrics = (t) => {
                          e.startSafeFrameCSM.set(t, new Date());
                        }),
                        (e.startSafeFrameCSAMetrics = (t) => {
                          e.startSafeFrameCSA.set(t, new Date());
                        }));
                      var n = `perf:sf:grandprix`,
                        r = (e, t, n) => `${e}${n ? `:${n.placementName}` : ``} - ${t}`,
                        i = (e, t, n) => {
                          var i, a;
                          let o = r(e, t, n);
                          return ((i = performance) == null || (a = i.mark) == null || a.call(i, o), o);
                        };
                      Array.from({ length: 100 }, (e, t) => (t + 1) / 100);
                      var a = `data-val`,
                        o = (e) => {
                          var t, n;
                          if (e === ``) return ``;
                          let r = `ape_${e}_placement_ClickTracking`,
                            i = document.getElementById(r);
                          return (t = i == null || (n = i.getAttribute) == null ? void 0 : n.call(i, a)) == null
                            ? ``
                            : t;
                        },
                        s = (e, t, { placementName: n }) => {
                          let r = o(n),
                            i = { command: `percolateClickTracking`, data: r };
                          (t.postMessage(i), e.setAttribute(`data-sent-percolate-click-tracking-params`, r));
                        },
                        c = (e, t) => {
                          let r = document.getElementById(t);
                          return r
                            ? (i(n, `${t} exists`), Promise.resolve(r))
                            : new Promise((r) => {
                                new MutationObserver((e, a) => {
                                  let o = document.getElementById(t);
                                  o && (i(n, `${t} found during mutation`), a.disconnect(), r(o));
                                }).observe(e, { subtree: !0, childList: !0 });
                              });
                        },
                        l = (e, t = 10, r = 2e4) =>
                          new Promise((a, o) => {
                            let s = Date.now(),
                              c = setInterval(() => {
                                window.APE_SF
                                  ? (i(n, `Host found inside waitForWindowHostVariable`, e), clearInterval(c), a())
                                  : Date.now() - s >= r &&
                                    (clearInterval(c),
                                    i(n, `Timed out waiting for sf host in waitForWindowHostVariable`, e),
                                    o());
                              }, t);
                          }),
                        u = class {
                          static listenForSFIFrameLoad(e, t) {
                            var r = this;
                            window.addEventListener(`message`, async (a) => {
                              var o, l, u;
                              if (a.data !== `sf iframe ready`) return;
                              let d = document.getElementById(t);
                              if (d === null) return;
                              let f = await c(d, e);
                              if (a.source !== f.contentWindow) return;
                              let p = JSON.parse(f.getAttribute(`name`));
                              (f.setAttribute(`data-iframe-ready`, `true`), i(n, `data-iframe-ready`, p));
                              let m = (o = a.ports[0]) == null ? ((l = a.data) == null ? void 0 : l.messagePort) : o;
                              (((u = window.renderingWeblabs) == null ||
                              (u = u.APM_STORES_JPS_JRS_SAFEFRAME_CLICK_TRACKING_PAINTER_TEST_1259727) == null
                                ? void 0
                                : u.toUpperCase()) !== `T1` && s(f, m, p),
                                r.fastSafeFrameLoad(p, `sf-host-load_${t}`, m));
                            });
                          }
                          static async fastSafeFrameLoad(e, r, a) {
                            try {
                              (i(n, `fastSafeFrameLoad start`, e),
                                window.APE_SF || (i(n, `waitUntilElementExists`, e), await l(e)),
                                window.APE_SF
                                  ? (i(n, `host exists`, e),
                                    window.APE_SF.setupMessageChannel(
                                      a,
                                      e,
                                      t.startSafeFrameCSM.get(e.adUnitPlacementId),
                                    ))
                                  : (i(n, `host doesn't exists`, e),
                                    document.getElementById(r).addEventListener(`load`, (r) => {
                                      (i(n, `SF host loaded`, e),
                                        window.APE_SF.setupMessageChannel(
                                          a,
                                          e,
                                          t.startSafeFrameCSM.get(e.adUnitPlacementId),
                                        ));
                                    })));
                            } catch (e) {
                              var o, s;
                              (console.error(e),
                                (o = (s = window).ueLogError) == null ||
                                  o.call(s, e, { logLevel: `ERROR`, attribution: `APE-safeframe`, message: `` }));
                            }
                          }
                        };
                      window.grandprix || (window.grandprix = { metrics: t, wrappers: u });
                    })();
                    //# sourceMappingURL=grandprix-modern.js.map

/* --- inline script #106 --- */
if (window.ue && typeof window.ue.count === "function") {
                      window.ue.count("adplacements:adload:htmlreached", 1);
                    }
                    if (window.csa) {
                      try {
                        window.csa("Events", { producerId: "adplacements" })(
                          "log",
                          { schemaId: "ApeSafeframe.csaEvent.1", metricName: "adload:htmlreached", metricValue: 1 },
                          { ent: "all" },
                        );
                      } catch (ex) {}
                    }

/* --- inline script #107 --- */
if (window.ue && typeof window.ue.count === "function") {
                      window.ue.count("adplacements:adload:htmlreached:Detail_ams-detail-right-v2_desktop", 1);
                    }
                    if (window.csa) {
                      try {
                        window.csa("Events", { producerId: "adplacements" })(
                          "log",
                          {
                            schemaId: "ApeSafeframe.csaEvent.1",
                            metricName:
                              "adload:htmlreached:Detail_ams-detail-right-v2_desktop:6f9d2c58-5baa-4a99-99fc-663245286f7f",
                            metricValue: 1,
                          },
                          { ent: "all" },
                        );
                      } catch (ex) {}
                    }

/* --- inline script #108 --- */
window.grandprix.metrics.startSafeFrameCSMMetrics(
                      "ape_Detail_ams-detail-right-v2_desktop_placement",
                    );
                    window.grandprix.metrics.startSafeFrameCSAMetrics(
                      "ape_Detail_ams-detail-right-v2_desktop_placement",
                    );

/* --- inline script #109 --- */
window.grandprix.wrappers.listenForSFIFrameLoad(
                        "ape_Detail_ams-detail-right-v2_desktop_iframe",
                        "ape_Detail_ams-detail-right-v2_desktop_placement",
                      );

/* --- inline script #110 --- */
(function () {
                          const script = document.createElement("script");
                          script.src = "https://m.media-amazon.com/images/I/11m16uzbS8L.js";
                          script.defer = true;
                          script.fetchPriority = "low";
                          script.onload = () => {
                            adFeedback.initializeSponsoredLabel("ams-detail-right-v2", "", false, "", "", "");
                          };
                          document
                            .getElementById("ape_Detail_ams-detail-right-v2_desktop_placement_Feedback")
                            .appendChild(script);
                        })();

/* --- inline script #111 --- */
if (window.ue && typeof window.ue.count === "function") {
                        window.ue.count("adplacements:adfeedback:sponsoredlabelrendered", 1);
                      }
                      if (window.csa) {
                        try {
                          window.csa("Events", { producerId: "adplacements" })(
                            "log",
                            {
                              schemaId: "ApeSafeframe.csaEvent.1",
                              metricName: "adfeedback:sponsoredlabelrendered",
                              metricValue: 1,
                            },
                            { ent: "all" },
                          );
                        } catch (ex) {}
                      }

/* --- inline script #112 --- */
if (window.ue && typeof window.ue.count === "function") {
                        window.ue.count(
                          "adplacements:adfeedback:sponsoredlabelrendered:host:Detail_ams-detail-right-v2_desktop",
                          1,
                        );
                      }
                      if (window.csa) {
                        try {
                          window.csa("Events", { producerId: "adplacements" })(
                            "log",
                            {
                              schemaId: "ApeSafeframe.csaEvent.1",
                              metricName:
                                "adfeedback:sponsoredlabelrendered:host:Detail_ams-detail-right-v2_desktop:6f9d2c58-5baa-4a99-99fc-663245286f7f",
                              metricValue: 1,
                            },
                            { ent: "all" },
                          );
                        } catch (ex) {}
                      }

/* --- inline script #113 --- */
{"isElongatedImageView":false,"mainImageRemoveGreyOverlayEnabled":false,"shouldRemoveCaption":false}

/* --- inline script #114 --- */
var markFeatureRenderExecuted = false;
                                function markFeatureRenderForImageBlock() {
                                  if (!markFeatureRenderExecuted) {
                                    markFeatureRenderExecuted = true;
                                    P.now().execute("dp-mark-imageblock", function () {
                                      var options = {
                                        hasComponents: true,
                                        components: [
                                          {
                                            name: "mainimage",
                                          },
                                        ],
                                      };
                                      if (typeof window.markFeatureRender === "function") {
                                        window.markFeatureRender("imageblock", options);
                                      }
                                    });
                                  }
                                }

/* --- inline script #115 --- */
P.now("A").execute("MediaBlockSlotResponsiveness", function (A) {
                                  var contentLoadedMarkerPerIndex = {};
                                  var slotLoadedMarkerPerIndex = {};
                                  var mediaBlockPrimaryView = document.getElementById("imageBlock");
                                  var primaryViewSlotSelectorPrefix = ".desktop-media-mainView .item.itemNo";

                                  function isContentLoadedMarkedForIndex(slotIndex) {
                                    let isSlotIndexMarked = true;
                                    if (!contentLoadedMarkerPerIndex[slotIndex]) {
                                      isSlotIndexMarked = false;
                                      contentLoadedMarkerPerIndex[slotIndex] = true;
                                    }
                                    return isSlotIndexMarked;
                                  }

                                  function isSlotLoadedMarkedForIndex(slotIndex) {
                                    let isSlotIndexMarked = true;
                                    if (!slotLoadedMarkerPerIndex[slotIndex]) {
                                      isSlotIndexMarked = false;
                                      slotLoadedMarkerPerIndex[slotIndex] = true;
                                    }
                                    return isSlotIndexMarked;
                                  }

                                  function getSlotElementOfIndex(slotIndex) {
                                    return mediaBlockPrimaryView.querySelector(
                                      primaryViewSlotSelectorPrefix + slotIndex,
                                    );
                                  }

                                  function isSlotIndexValid(slotIndex) {
                                    return (
                                      typeof slotIndex === "number" && Number.isInteger(slotIndex) && slotIndex >= 0
                                    );
                                  }

                                  window.logContentLoadedMarker = function (slotIndex) {
                                    if (!isSlotIndexValid(slotIndex)) return;

                                    // Return if slotIndex is already marked
                                    if (isContentLoadedMarkedForIndex(slotIndex)) return;

                                    // Get the slot element of the primaryView using slotIndex
                                    let slotElement = getSlotElementOfIndex(slotIndex);

                                    // Log the contentLoaded marker
                                    if (window.csa) {
                                      let csaElement = window.csa("Content", {
                                        element: slotElement,
                                      });
                                      csaElement("mark", "contentLoaded");
                                    }
                                  };

                                  window.logSlotLoadedMarker = function (slotIndex) {
                                    if (!isSlotIndexValid(slotIndex)) return;

                                    // Return if slotIndex is already marked
                                    if (isSlotLoadedMarkedForIndex(slotIndex)) return;

                                    //Get the slot element of the primaryView using slotIndex
                                    let slotElement = getSlotElementOfIndex(slotIndex);

                                    // Log the slotLoaded marker
                                    if (window.csa) {
                                      let csaElement = window.csa("Content", {
                                        element: slotElement,
                                      });
                                      csaElement("mark", "slotLoaded");
                                    }
                                  };
                                });

/* --- inline script #116 --- */
var mainImgContainer = document.getElementById("main-image-container");
                                var landingImage = document.getElementById("landingImage");
                                var imgWrapperDiv = document.getElementById("imgTagWrapperId");

                                var containerWidth = mainImgContainer.offsetWidth;
                                var holderRatio = 1.3;
                                var containerHeight = containerWidth / holderRatio;
                                containerHeight = Math.min(containerHeight, 700);

                                var dynamicImageMaxHeight = 679;
                                var dynamicImageMaxWidth = 679;

                                if (landingImage) {
                                  dynamicImageMaxHeight = landingImage.naturalHeight;
                                  dynamicImageMaxWidth = landingImage.naturalWidth;
                                }

                                var aspectRatio = dynamicImageMaxWidth / dynamicImageMaxHeight;

                                var imageMaxHeight = containerHeight;
                                var imageMaxWidth = containerWidth;

                                if (!true) {
                                  imageMaxHeight = Math.min(imageMaxHeight, dynamicImageMaxHeight);
                                  imageMaxWidth = Math.min(imageMaxWidth, dynamicImageMaxWidth);
                                }

                                var useImageBlockLeftColCentering = false;
                                var rightMargin = 0;

                                if (
                                  typeof useImageBlockLeftColCentering !== "undefined" &&
                                  useImageBlockLeftColCentering
                                ) {
                                  mainImgContainer.style.marginRight = rightMargin + "px";
                                }
                                mainImgContainer.style.height = containerHeight + "px";

                                var imageMaxWidthBasedOnHeight = imageMaxHeight * aspectRatio;
                                var imageMaxHeightBasedOnWidth = imageMaxWidth / aspectRatio;
                                imageMaxHeight = Math.min(imageMaxHeight, imageMaxHeightBasedOnWidth);
                                imageMaxWidth = Math.min(imageMaxWidth, imageMaxWidthBasedOnHeight);

                                if (imgWrapperDiv) {
                                  imgWrapperDiv.style.height = containerHeight + "px";
                                }

                                if (landingImage) {
                                  landingImage.style.maxHeight = imageMaxHeight + "px";
                                  landingImage.style.maxWidth = imageMaxWidth + "px";
                                }

                                // log first slot render marker
                                if (window.logSlotLoadedMarker) {
                                  logSlotLoadedMarker(0);
                                }

/* --- inline script #117 --- */
P.now("media-block-initialised").execute(function (isMediaBlockInitialised) {
                      if (!isMediaBlockInitialised) {
                        P.declare("media-block-initialised", true);
                        P.when("A").register("ImageBlockATF", function (A) {
                          var data = {
                            isMediaBlock: true,
                            asin: "B01LBI1BIO",
                            enableS2WithoutS1: false,
                            colorImages: {
                              initial: [
                                {
                                  hiRes: "https://m.media-amazon.com/images/I/81b7FH9FNdL._AC_SL1500_.jpg",
                                  thumb: "https://m.media-amazon.com/images/I/418Ioil3QDL._AC_US100_.jpg",
                                  large: "https://m.media-amazon.com/images/I/418Ioil3QDL._AC_.jpg",
                                  main: {
                                    "https://m.media-amazon.com/images/I/81b7FH9FNdL._AC_SY355_.jpg": [355, 355],
                                    "https://m.media-amazon.com/images/I/81b7FH9FNdL._AC_SY450_.jpg": [450, 450],
                                    "https://m.media-amazon.com/images/I/81b7FH9FNdL._AC_SX425_.jpg": [425, 425],
                                    "https://m.media-amazon.com/images/I/81b7FH9FNdL._AC_SX466_.jpg": [466, 466],
                                    "https://m.media-amazon.com/images/I/81b7FH9FNdL._AC_SX522_.jpg": [522, 522],
                                    "https://m.media-amazon.com/images/I/81b7FH9FNdL._AC_SX569_.jpg": [569, 569],
                                    "https://m.media-amazon.com/images/I/81b7FH9FNdL._AC_SX679_.jpg": [679, 679],
                                  },
                                  variant: "MAIN",
                                  lowRes: null,
                                  shoppableScene: null,
                                  feedbackMetadata: null,
                                  physicalIdForMedia: "81b7FH9FNdL",
                                  productImageBackgroundData: null,
                                },
                                {
                                  hiRes: "https://m.media-amazon.com/images/I/813YlPzsv4L._AC_SL1500_.jpg",
                                  thumb: "https://m.media-amazon.com/images/I/412FL7u-t2L._AC_US100_.jpg",
                                  large: "https://m.media-amazon.com/images/I/412FL7u-t2L._AC_.jpg",
                                  main: {
                                    "https://m.media-amazon.com/images/I/813YlPzsv4L._AC_SX355_.jpg": [266, 355],
                                    "https://m.media-amazon.com/images/I/813YlPzsv4L._AC_SX450_.jpg": [338, 450],
                                    "https://m.media-amazon.com/images/I/813YlPzsv4L._AC_SX425_.jpg": [319, 425],
                                    "https://m.media-amazon.com/images/I/813YlPzsv4L._AC_SX466_.jpg": [350, 466],
                                    "https://m.media-amazon.com/images/I/813YlPzsv4L._AC_SX522_.jpg": [392, 522],
                                    "https://m.media-amazon.com/images/I/813YlPzsv4L._AC_SX569_.jpg": [427, 569],
                                    "https://m.media-amazon.com/images/I/813YlPzsv4L._AC_SX679_.jpg": [509, 679],
                                  },
                                  variant: "FRNT",
                                  lowRes: null,
                                  shoppableScene: null,
                                  feedbackMetadata: null,
                                  physicalIdForMedia: "813YlPzsv4L",
                                  productImageBackgroundData: null,
                                },
                                {
                                  hiRes: "https://m.media-amazon.com/images/I/71-ogGmdaaL._AC_SL1500_.jpg",
                                  thumb: "https://m.media-amazon.com/images/I/41yJc1iSSiL._AC_US100_.jpg",
                                  large: "https://m.media-amazon.com/images/I/41yJc1iSSiL._AC_.jpg",
                                  main: {
                                    "https://m.media-amazon.com/images/I/71-ogGmdaaL._AC_SY355_.jpg": [355, 266],
                                    "https://m.media-amazon.com/images/I/71-ogGmdaaL._AC_SY450_.jpg": [450, 338],
                                    "https://m.media-amazon.com/images/I/71-ogGmdaaL._AC_SY550_.jpg": [550, 412],
                                    "https://m.media-amazon.com/images/I/71-ogGmdaaL._AC_SY606_.jpg": [606, 455],
                                    "https://m.media-amazon.com/images/I/71-ogGmdaaL._AC_SY679_.jpg": [679, 509],
                                    "https://m.media-amazon.com/images/I/71-ogGmdaaL._AC_SY741_.jpg": [741, 556],
                                    "https://m.media-amazon.com/images/I/71-ogGmdaaL._AC_SY879_.jpg": [879, 659],
                                  },
                                  variant: "SIDE",
                                  lowRes: null,
                                  shoppableScene: null,
                                  feedbackMetadata: null,
                                  physicalIdForMedia: "71-ogGmdaaL",
                                  productImageBackgroundData: null,
                                },
                                {
                                  hiRes: "https://m.media-amazon.com/images/I/716fhL1X6DL._AC_SL1500_.jpg",
                                  thumb: "https://m.media-amazon.com/images/I/31djCNPER7L._AC_US100_.jpg",
                                  large: "https://m.media-amazon.com/images/I/31djCNPER7L._AC_.jpg",
                                  main: {
                                    "https://m.media-amazon.com/images/I/716fhL1X6DL._AC_SY355_.jpg": [355, 266],
                                    "https://m.media-amazon.com/images/I/716fhL1X6DL._AC_SY450_.jpg": [450, 338],
                                    "https://m.media-amazon.com/images/I/716fhL1X6DL._AC_SY550_.jpg": [550, 412],
                                    "https://m.media-amazon.com/images/I/716fhL1X6DL._AC_SY606_.jpg": [606, 455],
                                    "https://m.media-amazon.com/images/I/716fhL1X6DL._AC_SY679_.jpg": [679, 509],
                                    "https://m.media-amazon.com/images/I/716fhL1X6DL._AC_SY741_.jpg": [741, 556],
                                    "https://m.media-amazon.com/images/I/716fhL1X6DL._AC_SY879_.jpg": [879, 659],
                                  },
                                  variant: "BACK",
                                  lowRes: null,
                                  shoppableScene: null,
                                  feedbackMetadata: null,
                                  physicalIdForMedia: "716fhL1X6DL",
                                  productImageBackgroundData: null,
                                },
                                {
                                  hiRes: "https://m.media-amazon.com/images/I/81o35u7NfaL._AC_SL1500_.jpg",
                                  thumb: "https://m.media-amazon.com/images/I/41+afUfoRqL._AC_US100_.jpg",
                                  large: "https://m.media-amazon.com/images/I/41+afUfoRqL._AC_.jpg",
                                  main: {
                                    "https://m.media-amazon.com/images/I/81o35u7NfaL._AC_SY355_.jpg": [355, 355],
                                    "https://m.media-amazon.com/images/I/81o35u7NfaL._AC_SY450_.jpg": [450, 450],
                                    "https://m.media-amazon.com/images/I/81o35u7NfaL._AC_SX425_.jpg": [425, 425],
                                    "https://m.media-amazon.com/images/I/81o35u7NfaL._AC_SX466_.jpg": [466, 466],
                                    "https://m.media-amazon.com/images/I/81o35u7NfaL._AC_SX522_.jpg": [522, 522],
                                    "https://m.media-amazon.com/images/I/81o35u7NfaL._AC_SX569_.jpg": [569, 569],
                                    "https://m.media-amazon.com/images/I/81o35u7NfaL._AC_SX679_.jpg": [679, 679],
                                  },
                                  variant: "PT02",
                                  lowRes: null,
                                  shoppableScene: null,
                                  feedbackMetadata: null,
                                  physicalIdForMedia: "81o35u7NfaL",
                                  productImageBackgroundData: null,
                                },
                                {
                                  hiRes: "https://m.media-amazon.com/images/I/815RhCKuERL._AC_SL1500_.jpg",
                                  thumb: "https://m.media-amazon.com/images/I/41WzQO7e1OL._AC_US100_.jpg",
                                  large: "https://m.media-amazon.com/images/I/41WzQO7e1OL._AC_.jpg",
                                  main: {
                                    "https://m.media-amazon.com/images/I/815RhCKuERL._AC_SY355_.jpg": [355, 355],
                                    "https://m.media-amazon.com/images/I/815RhCKuERL._AC_SY450_.jpg": [450, 450],
                                    "https://m.media-amazon.com/images/I/815RhCKuERL._AC_SX425_.jpg": [425, 425],
                                    "https://m.media-amazon.com/images/I/815RhCKuERL._AC_SX466_.jpg": [466, 466],
                                    "https://m.media-amazon.com/images/I/815RhCKuERL._AC_SX522_.jpg": [522, 522],
                                    "https://m.media-amazon.com/images/I/815RhCKuERL._AC_SX569_.jpg": [569, 569],
                                    "https://m.media-amazon.com/images/I/815RhCKuERL._AC_SX679_.jpg": [679, 679],
                                  },
                                  variant: "PT03",
                                  lowRes: null,
                                  shoppableScene: null,
                                  feedbackMetadata: null,
                                  physicalIdForMedia: "815RhCKuERL",
                                  productImageBackgroundData: null,
                                },
                                {
                                  hiRes: "https://m.media-amazon.com/images/I/71CJ5gF0bXL._AC_SL1500_.jpg",
                                  thumb: "https://m.media-amazon.com/images/I/41FpXbruO4L._AC_US100_.jpg",
                                  large: "https://m.media-amazon.com/images/I/41FpXbruO4L._AC_.jpg",
                                  main: {
                                    "https://m.media-amazon.com/images/I/71CJ5gF0bXL._AC_SX355_.jpg": [281, 355],
                                    "https://m.media-amazon.com/images/I/71CJ5gF0bXL._AC_SX450_.jpg": [356, 450],
                                    "https://m.media-amazon.com/images/I/71CJ5gF0bXL._AC_SX425_.jpg": [336, 425],
                                    "https://m.media-amazon.com/images/I/71CJ5gF0bXL._AC_SX466_.jpg": [369, 466],
                                    "https://m.media-amazon.com/images/I/71CJ5gF0bXL._AC_SX522_.jpg": [413, 522],
                                    "https://m.media-amazon.com/images/I/71CJ5gF0bXL._AC_SX569_.jpg": [450, 569],
                                    "https://m.media-amazon.com/images/I/71CJ5gF0bXL._AC_SX679_.jpg": [537, 679],
                                  },
                                  variant: "PT05",
                                  lowRes: null,
                                  shoppableScene: null,
                                  feedbackMetadata: null,
                                  physicalIdForMedia: "71CJ5gF0bXL",
                                  productImageBackgroundData: null,
                                },
                                {
                                  hiRes: "https://m.media-amazon.com/images/I/61LKYLxQzlL._AC_SL1500_.jpg",
                                  thumb: "https://m.media-amazon.com/images/I/21-+bVYSRbL._AC_US100_.jpg",
                                  large: "https://m.media-amazon.com/images/I/21-+bVYSRbL._AC_.jpg",
                                  main: {
                                    "https://m.media-amazon.com/images/I/61LKYLxQzlL._AC_SY355_.jpg": [355, 102],
                                    "https://m.media-amazon.com/images/I/61LKYLxQzlL._AC_SY450_.jpg": [450, 129],
                                    "https://m.media-amazon.com/images/I/61LKYLxQzlL._AC_SY550_.jpg": [550, 158],
                                    "https://m.media-amazon.com/images/I/61LKYLxQzlL._AC_SY606_.jpg": [606, 174],
                                    "https://m.media-amazon.com/images/I/61LKYLxQzlL._AC_SY679_.jpg": [679, 195],
                                    "https://m.media-amazon.com/images/I/61LKYLxQzlL._AC_SY741_.jpg": [741, 212],
                                    "https://m.media-amazon.com/images/I/61LKYLxQzlL._AC_SY879_.jpg": [879, 252],
                                  },
                                  variant: "PT06",
                                  lowRes: null,
                                  shoppableScene: null,
                                  feedbackMetadata: null,
                                  physicalIdForMedia: "61LKYLxQzlL",
                                  productImageBackgroundData: null,
                                },
                                {
                                  hiRes: "https://m.media-amazon.com/images/I/71v1yCsr-iL._AC_SL1440_.jpg",
                                  thumb: "https://m.media-amazon.com/images/I/41UbhjPCe4L._AC_US100_.jpg",
                                  large: "https://m.media-amazon.com/images/I/41UbhjPCe4L._AC_.jpg",
                                  main: {
                                    "https://m.media-amazon.com/images/I/71v1yCsr-iL._AC_SX355_.jpg": [237, 355],
                                    "https://m.media-amazon.com/images/I/71v1yCsr-iL._AC_SX450_.jpg": [300, 450],
                                    "https://m.media-amazon.com/images/I/71v1yCsr-iL._AC_SX425_.jpg": [283, 425],
                                    "https://m.media-amazon.com/images/I/71v1yCsr-iL._AC_SX466_.jpg": [311, 466],
                                    "https://m.media-amazon.com/images/I/71v1yCsr-iL._AC_SX522_.jpg": [348, 522],
                                    "https://m.media-amazon.com/images/I/71v1yCsr-iL._AC_SX569_.jpg": [379, 569],
                                    "https://m.media-amazon.com/images/I/71v1yCsr-iL._AC_SX679_.jpg": [453, 679],
                                  },
                                  variant: "PT07",
                                  lowRes: null,
                                  shoppableScene: null,
                                  feedbackMetadata: null,
                                  physicalIdForMedia: "71v1yCsr-iL",
                                  productImageBackgroundData: null,
                                },
                              ],
                            },
                            colorToAsin: { initial: "{}" },
                            holderRatio: 1.3,
                            holderMaxHeight: 700,
                            playVideoInImmersiveView: true,
                            useTabbedImmersiveView: true,
                            totalVideoCount: "0",
                            videoIngressATFSlateThumbURL: "",
                            mediaTypeCount: "0",
                            atfEnhancedHoverOverlay: true,
                            winningAsin: "",
                            weblabs: {},
                            aibExp3Layout: 1,
                            aibRuleName: "frank-powered",
                            acEnabled: true,
                            imageBlockRenderingStartTime: Date.now(),
                            additionalNumberOfImageAlts: 0,
                            interactiveCallJSPEnabled: false,
                            collapsibleThumbnails: false,
                            desktopCollapsibleThumbnailsExperience: "T2",
                            tableOfContentsIconImage:
                              "https://m.media-amazon.com/images/G/01/books-detail-page-table-of-contents/blackback/ToC.png",
                          };
                          A.trigger("P.AboveTheFold"); // trigger ATF event.
                          return data;
                        });
                      }
                    });

/* --- inline script #118 --- */
(function (f) {
                      var _np = window.P._namespace("DetailPageImageBlockTemplate");
                      if (_np.guardFatal) {
                        _np.guardFatal(f)(_np);
                      } else {
                        f(_np);
                      }
                    })(function (P) {
                      P.now().execute("dp-mark-imageblock", function () {
                        var options = {
                          hasComponents: true,
                          components: [
                            {
                              name: "thumbnail",
                            },
                          ],
                        };
                        if (typeof window.markFeatureRender === "function") {
                          window.markFeatureRender("imageblock", options);
                        }
                      });
                    });

/* --- inline script #119 --- */
if (window.ue && ue.tag) {
                      ue.tag("MediaBlockWebPageTag");
                    }

/* --- inline script #120 --- */
if (window.mix_csa) {
                      window.mix_csa(
                        '[cel_widget_id="buffet-high-priority-disclaimers-card_DetailPage_7"]',
                        "#CardInstanceo-I_WN_FBe_gUT8cWuv4_Q",
                      )("mark", "bb");
                    }

/* --- inline script #121 --- */
if (window.uet) {
                      window.uet("bb", "buffet-high-priority-disclaimers-card_DetailPage_7", { wb: 1 });
                    }

/* --- inline script #122 --- */
if (window.mix_csa) {
                      window.mix_csa(
                        '[cel_widget_id="buffet-high-priority-disclaimers-card_DetailPage_7"]',
                        "#CardInstanceo-I_WN_FBe_gUT8cWuv4_Q",
                      )("mark", "be");
                    }

/* --- inline script #123 --- */
if (window.uet) {
                      window.uet("be", "buffet-high-priority-disclaimers-card_DetailPage_7", { wb: 1 });
                    }

/* --- inline script #124 --- */
if (window.mixTimeout) {
                      window.mixTimeout(
                        "buffet-high-priority-disclaimers-card",
                        "CardInstanceo-I_WN_FBe_gUT8cWuv4_Q",
                        90000,
                      );
                    }
                    P.when(
                      "mix:@amzn/mix.client-runtime",
                      "mix:buffet-high-priority-disclaimers-card__5jFN_whF",
                    ).execute(function (runtime, cardModule) {
                      runtime.registerCardFactory("CardInstanceo-I_WN_FBe_gUT8cWuv4_Q", cardModule).then(function () {
                        if (window.mix_csa) {
                          window.mix_csa(
                            '[cel_widget_id="buffet-high-priority-disclaimers-card_DetailPage_7"]',
                            "#CardInstanceo-I_WN_FBe_gUT8cWuv4_Q",
                          )("mark", "functional");
                        }
                        if (window.uex) {
                          window.uex("ld", "buffet-high-priority-disclaimers-card_DetailPage_7", { wb: 1 });
                        }
                      });
                    });

/* --- inline script #125 --- */
P.when("ready").execute(function () {
                      P.load.js("https://m.media-amazon.com/images/I/51C0eACjiyL.js?xcp");
                    });

/* --- inline script #126 --- */
var dpAcrHasRegisteredArcLinkClickAction;
                    P.when("A", "ready").execute(function (A) {
                      if (dpAcrHasRegisteredArcLinkClickAction !== true) {
                        dpAcrHasRegisteredArcLinkClickAction = true;
                        A.declarative("acrLink-click-metrics", "click", { allowLinkDefault: true }, function (event) {
                          if (window.ue) {
                            ue.count("acrLinkClickCount", (ue.count("acrLinkClickCount") || 0) + 1);
                          }
                        });
                      }
                    });

/* --- inline script #127 --- */
P.when("A", "cf").execute(function (A) {
                      A.declarative(
                        "acrStarsLink-click-metrics",
                        "click",
                        { allowLinkDefault: true },
                        function (event) {
                          if (window.ue) {
                            ue.count(
                              "acrStarsLinkWithPopoverClickCount",
                              (ue.count("acrStarsLinkWithPopoverClickCount") || 0) + 1,
                            );
                          }
                        },
                      );
                    });

/* --- inline script #128 --- */
{"acAsin":"B01LBI1BIO"}

/* --- inline script #129 --- */
(function (f) {
                    var _np = window.P._namespace("DetailPageMerchByAmazonBrandingViewConfig");
                    if (_np.guardFatal) {
                      _np.guardFatal(f)(_np);
                    } else {
                      f(_np);
                    }
                  })(function (P) {
                    P.when("A", "a-popover").execute("a-popover-count", function (A) {
                      A.on("a:popover:afterShow:mod-popover", function () {
                        ue.count("merchByAmazonBranding.popover.count", 1);
                      });
                    });

                    P.when("A").execute("merch-on-demand-query-params", function (A) {
                      if (typeof window.ue.onunload === "undefined") {
                        return;
                      }
                      window.ue.onunload(() => {
                        if (!window.ueLogError) {
                          return;
                        }

                        var queryParams = new URLSearchParams(window.location.search);
                        if (queryParams.has("customizationToken")) {
                          var customizationToken = queryParams.get("customizationToken");
                          if (customizationToken.startsWith("MC_Assembly_1#")) {
                            var assemblyVariationId = customizationToken.slice("MC_Assembly_1#".length);
                            if (queryParams.has("customId")) {
                              var customId = queryParams.get("customId");
                              if (customId !== assemblyVariationId) {
                                ue.count("MerchOnDemandQueryParametersMismatch", 1);
                                var customError = {
                                  message:
                                    "There is a customizationToken [" +
                                    customizationToken +
                                    "] and customId [" +
                                    assemblyVariationId +
                                    "] mismatch",
                                };

                                var additionalInfo = {
                                  logLevel: "ERROR",
                                  attribution: "MerchOnDemandQueryParameters",
                                };
                                ueLogError(customError, additionalInfo);
                              } else {
                                ue.count("MerchOnDemandQueryParametersMismatch", 0);
                              }
                            }
                          }
                        }
                      });
                    });
                  });

/* --- inline script #130 --- */
P.when("A", "load").execute("aod-assets-loaded", function (A) {
                      function logAssetsNotLoaded() {
                        if (window.ueLogError) {
                          var customError = {
                            message: "Failed to load AOD assets for WDG: home_display_on_website, Device: web",
                          };
                          var additionalInfo = {
                            logLevel: "ERROR",
                            attribution: "aod_assets_not_loaded",
                          };
                          ueLogError(customError, additionalInfo);
                        }
                        if (window.ue && window.ue.count) {
                          window.ue.count("aod-assets-not-loaded", 1);
                        }
                      }

                      function verifyAssetsLoaded() {
                        var assetsLoadedPageState = A.state("aod:assetsLoaded");
                        var logAssetsNotLoadedState = A.state("aod:logAssetsNotLoaded");

                        if (
                          (assetsLoadedPageState == null || !assetsLoadedPageState.isAodAssetsLoaded) &&
                          (logAssetsNotLoadedState == null || !logAssetsNotLoadedState.isAodAssetsNotLoadedLogged)
                        ) {
                          A.state("aod:logAssetsNotLoaded", { isAodAssetsNotLoadedLogged: true });
                          logAssetsNotLoaded();
                        }
                      }

                      setTimeout(verifyAssetsLoaded, 50000);
                    });

/* --- inline script #131 --- */
{"csrfToken":"1@gwouWezNBxqam/+4ZoS8I5/EtZtYLMmuiTOtkph+UqprAAAAAQAAAABp+k4NcmF3AAAAABVX8CwXqz42z+J7i/ABqA==@NLD_5647Z5","locale":"en_US","ajaxEndpoint":"https://data.amazon.com/api/marketplaces/ATVPDKIKX0DER"}

/* --- inline script #132 --- */
{"buyingOptionTypes":["NEW"],"zipCode":"89102","countryCode":"US","productAsin":"B01LBI1BIO"}

/* --- inline script #133 --- */
{"showPPDBundlesWidget":false,"doRedirect":true,"showEnhancedUpsellBundle":false,"hijackMBCATC":false,"isCBM":false,"isWarrantyPresent":false,"isVariationalParent":false}

/* --- inline script #134 --- */
(function (f) {
                    var _np = window.P._namespace("VAS_DSC");
                    if (_np.guardFatal) {
                      _np.guardFatal(f)(_np);
                    } else {
                      f(_np);
                    }
                  })(function (P) {
                    // Entry point to initialize vas widget front end workflow
                    P.when("vas-widgets").execute(function (vasWidgets) {
                      vasWidgets.initialize();
                    });
                  });

/* --- inline script #135 --- */
(function (f) {
                    var _np = window.P._namespace("VAS_DSC");
                    if (_np.guardFatal) {
                      _np.guardFatal(f)(_np);
                    } else {
                      f(_np);
                    }
                  })(function (P) {
                    if (typeof uex === "function") {
                      uex("ld", "LocalServicesWidget", { wb: 1 }); //send the metrics to the server
                    }
                  });

/* --- inline script #136 --- */
if (window.mix_csa) {
                      window.mix_csa(
                        '[cel_widget_id="unified-trade-in_DetailPage_4"]',
                        "#CardInstanceGCcTG6k6Q3OwuoX6QPfGPQ",
                      )("mark", "bb");
                    }

/* --- inline script #137 --- */
if (window.uet) {
                      window.uet("bb", "unified-trade-in_DetailPage_4", { wb: 1 });
                    }

/* --- inline script #138 --- */
if (window.mix_csa) {
                      window.mix_csa(
                        '[cel_widget_id="unified-trade-in_DetailPage_4"]',
                        "#CardInstanceGCcTG6k6Q3OwuoX6QPfGPQ",
                      )("mark", "be");
                    }

/* --- inline script #139 --- */
if (window.uet) {
                      window.uet("be", "unified-trade-in_DetailPage_4", { wb: 1 });
                    }

/* --- inline script #140 --- */
if (window.mixTimeout) {
                      window.mixTimeout("unified-trade-in", "CardInstanceGCcTG6k6Q3OwuoX6QPfGPQ", 90000);
                    }
                    P.when("mix:@amzn/mix.client-runtime", "mix:unified-trade-in__S_g28PIJ").execute(
                      function (runtime, cardModule) {
                        runtime.registerCardFactory("CardInstanceGCcTG6k6Q3OwuoX6QPfGPQ", cardModule).then(function () {
                          if (window.mix_csa) {
                            window.mix_csa(
                              '[cel_widget_id="unified-trade-in_DetailPage_4"]',
                              "#CardInstanceGCcTG6k6Q3OwuoX6QPfGPQ",
                            )("mark", "functional");
                          }
                          if (window.uex) {
                            window.uex("ld", "unified-trade-in_DetailPage_4", { wb: 1 });
                          }
                        });
                      },
                    );

/* --- inline script #141 --- */
P.load.js("https://m.media-amazon.com/images/I/51-5KBtuflL.js?xcp");

/* --- inline script #142 --- */
{}

/* --- inline script #143 --- */
P.when("A", "load").execute("aod-assets-loaded", function (A) {
                    function logAssetsNotLoaded() {
                      if (window.ueLogError) {
                        var customError = {
                          message: "Failed to load AOD assets for WDG: home_display_on_website, Device: web",
                        };
                        var additionalInfo = {
                          logLevel: "ERROR",
                          attribution: "aod_assets_not_loaded",
                        };
                        ueLogError(customError, additionalInfo);
                      }
                      if (window.ue && window.ue.count) {
                        window.ue.count("aod-assets-not-loaded", 1);
                      }
                    }

                    function verifyAssetsLoaded() {
                      var assetsLoadedPageState = A.state("aod:assetsLoaded");
                      var logAssetsNotLoadedState = A.state("aod:logAssetsNotLoaded");

                      if (
                        (assetsLoadedPageState == null || !assetsLoadedPageState.isAodAssetsLoaded) &&
                        (logAssetsNotLoadedState == null || !logAssetsNotLoadedState.isAodAssetsNotLoadedLogged)
                      ) {
                        A.state("aod:logAssetsNotLoaded", { isAodAssetsNotLoadedLogged: true });
                        logAssetsNotLoaded();
                      }
                    }

                    setTimeout(verifyAssetsLoaded, 50000);
                  });

/* --- inline script #144 --- */
if (window.mix_csa) {
                      window.mix_csa(
                        '[cel_widget_id="tell-amazon-desktop_DetailPage_5"]',
                        "#CardInstancenIIzFkpCj1Kj4SjmpvWPnQ",
                      )("mark", "bb");
                    }

/* --- inline script #145 --- */
if (window.uet) {
                      window.uet("bb", "tell-amazon-desktop_DetailPage_5", { wb: 1 });
                    }

/* --- inline script #146 --- */
if (window.mix_csa) {
                      window.mix_csa(
                        '[cel_widget_id="tell-amazon-desktop_DetailPage_5"]',
                        "#CardInstancenIIzFkpCj1Kj4SjmpvWPnQ",
                      )("mark", "be");
                    }

/* --- inline script #147 --- */
if (window.uet) {
                      window.uet("be", "tell-amazon-desktop_DetailPage_5", { wb: 1 });
                    }

/* --- inline script #148 --- */
if (window.mixTimeout) {
                      window.mixTimeout("tell-amazon-desktop", "CardInstancenIIzFkpCj1Kj4SjmpvWPnQ", 90000);
                    }
                    P.when("mix:@amzn/mix.client-runtime", "mix:tell-amazon-desktop__a8pzJOu3").execute(
                      function (runtime, cardModule) {
                        runtime.registerCardFactory("CardInstancenIIzFkpCj1Kj4SjmpvWPnQ", cardModule).then(function () {
                          if (window.mix_csa) {
                            window.mix_csa(
                              '[cel_widget_id="tell-amazon-desktop_DetailPage_5"]',
                              "#CardInstancenIIzFkpCj1Kj4SjmpvWPnQ",
                            )("mark", "functional");
                          }
                          if (window.uex) {
                            window.uex("ld", "tell-amazon-desktop_DetailPage_5", { wb: 1 });
                          }
                        });
                      },
                    );

/* --- inline script #149 --- */
P.load.js("https://m.media-amazon.com/images/I/618v7abUGeL.js?xcp");

/* --- inline script #150 --- */
window.renderingWeblabs = window.renderingWeblabs ? window.renderingWeblabs : {};
                      window.renderingWeblabs = Object.assign(
                        window.renderingWeblabs,
                        JSON.parse(
                          '{"ADPT_SF_HIGH_RATE_METRIC_LOGGING_1256364":"C","APM_STORES_JPS_JRS_SAFEFRAME_BG_COLOR_TOGGLE_1329269":"T1","APM_STORES_JPS_JRS_SAFEFRAME_RESPONSIVE_SIZING_1314203":"T1","APM_STORES_JPS_JRS_SAFEFRAME_NEW_JRS_ADDETAILS_1335584":"T1","APM_STORES_JPS_JRS_SAFEFRAME_SHOWADFEEDBACK_FALSE_SLOTS_1380760":"T1","APM_STORES_JPS_JRS_SAFEFRAME_SL_ON_DOSSIER_1362947":"T1","ADPT_SF_HOMEPAGE_ART_THEMING_1298909":"C","APM_STORES_JPS_JRS_SAFEFRAME_DISABLE_LAUNCH_INTENT_1331357":"T1","ADPT_SF_GWATF_ROUNDED_CORNERS_1036948":"T1","APM_STORES_JPS_JRS_SAFEFRAME_IFRAME_READY_RETRY_1374491":"T1","APM_STORES_JPS_JRS_SAFEFRAME_LIGHT_AD_CREATIVE_SIZE_STYLE_1311018":"T1"}',
                        ),
                      );

/* --- inline script #151 --- */
(function () {
                        var e,
                          t = class {};
                        ((e = t),
                          (e.startSafeFrameCSM = new Map()),
                          (e.startSafeFrameCSA = new Map()),
                          (e.startSafeFrameCSMMetrics = (t) => {
                            e.startSafeFrameCSM.set(t, new Date());
                          }),
                          (e.startSafeFrameCSAMetrics = (t) => {
                            e.startSafeFrameCSA.set(t, new Date());
                          }));
                        var n = `perf:sf:grandprix`,
                          r = (e, t, n) => `${e}${n ? `:${n.placementName}` : ``} - ${t}`,
                          i = (e, t, n) => {
                            var i, a;
                            let o = r(e, t, n);
                            return ((i = performance) == null || (a = i.mark) == null || a.call(i, o), o);
                          };
                        Array.from({ length: 100 }, (e, t) => (t + 1) / 100);
                        var a = `data-val`,
                          o = (e) => {
                            var t, n;
                            if (e === ``) return ``;
                            let r = `ape_${e}_placement_ClickTracking`,
                              i = document.getElementById(r);
                            return (t = i == null || (n = i.getAttribute) == null ? void 0 : n.call(i, a)) == null
                              ? ``
                              : t;
                          },
                          s = (e, t, { placementName: n }) => {
                            let r = o(n),
                              i = { command: `percolateClickTracking`, data: r };
                            (t.postMessage(i), e.setAttribute(`data-sent-percolate-click-tracking-params`, r));
                          },
                          c = (e, t) => {
                            let r = document.getElementById(t);
                            return r
                              ? (i(n, `${t} exists`), Promise.resolve(r))
                              : new Promise((r) => {
                                  new MutationObserver((e, a) => {
                                    let o = document.getElementById(t);
                                    o && (i(n, `${t} found during mutation`), a.disconnect(), r(o));
                                  }).observe(e, { subtree: !0, childList: !0 });
                                });
                          },
                          l = (e, t = 10, r = 2e4) =>
                            new Promise((a, o) => {
                              let s = Date.now(),
                                c = setInterval(() => {
                                  window.APE_SF
                                    ? (i(n, `Host found inside waitForWindowHostVariable`, e), clearInterval(c), a())
                                    : Date.now() - s >= r &&
                                      (clearInterval(c),
                                      i(n, `Timed out waiting for sf host in waitForWindowHostVariable`, e),
                                      o());
                                }, t);
                            }),
                          u = class {
                            static listenForSFIFrameLoad(e, t) {
                              var r = this;
                              window.addEventListener(`message`, async (a) => {
                                var o, l, u;
                                if (a.data !== `sf iframe ready`) return;
                                let d = document.getElementById(t);
                                if (d === null) return;
                                let f = await c(d, e);
                                if (a.source !== f.contentWindow) return;
                                let p = JSON.parse(f.getAttribute(`name`));
                                (f.setAttribute(`data-iframe-ready`, `true`), i(n, `data-iframe-ready`, p));
                                let m = (o = a.ports[0]) == null ? ((l = a.data) == null ? void 0 : l.messagePort) : o;
                                (((u = window.renderingWeblabs) == null ||
                                (u = u.APM_STORES_JPS_JRS_SAFEFRAME_CLICK_TRACKING_PAINTER_TEST_1259727) == null
                                  ? void 0
                                  : u.toUpperCase()) !== `T1` && s(f, m, p),
                                  r.fastSafeFrameLoad(p, `sf-host-load_${t}`, m));
                              });
                            }
                            static async fastSafeFrameLoad(e, r, a) {
                              try {
                                (i(n, `fastSafeFrameLoad start`, e),
                                  window.APE_SF || (i(n, `waitUntilElementExists`, e), await l(e)),
                                  window.APE_SF
                                    ? (i(n, `host exists`, e),
                                      window.APE_SF.setupMessageChannel(
                                        a,
                                        e,
                                        t.startSafeFrameCSM.get(e.adUnitPlacementId),
                                      ))
                                    : (i(n, `host doesn't exists`, e),
                                      document.getElementById(r).addEventListener(`load`, (r) => {
                                        (i(n, `SF host loaded`, e),
                                          window.APE_SF.setupMessageChannel(
                                            a,
                                            e,
                                            t.startSafeFrameCSM.get(e.adUnitPlacementId),
                                          ));
                                      })));
                              } catch (e) {
                                var o, s;
                                (console.error(e),
                                  (o = (s = window).ueLogError) == null ||
                                    o.call(s, e, { logLevel: `ERROR`, attribution: `APE-safeframe`, message: `` }));
                              }
                            }
                          };
                        window.grandprix || (window.grandprix = { metrics: t, wrappers: u });
                      })();
                      //# sourceMappingURL=grandprix-modern.js.map

/* --- inline script #152 --- */
if (window.ue && typeof window.ue.count === "function") {
                        window.ue.count("adplacements:adload:htmlreached", 1);
                      }
                      if (window.csa) {
                        try {
                          window.csa("Events", { producerId: "adplacements" })(
                            "log",
                            { schemaId: "ApeSafeframe.csaEvent.1", metricName: "adload:htmlreached", metricValue: 1 },
                            { ent: "all" },
                          );
                        } catch (ex) {}
                      }

/* --- inline script #153 --- */
if (window.ue && typeof window.ue.count === "function") {
                        window.ue.count("adplacements:adload:htmlreached:Detail_hero-quick-promo_Desktop", 1);
                      }
                      if (window.csa) {
                        try {
                          window.csa("Events", { producerId: "adplacements" })(
                            "log",
                            {
                              schemaId: "ApeSafeframe.csaEvent.1",
                              metricName:
                                "adload:htmlreached:Detail_hero-quick-promo_Desktop:cf91057a-6347-4399-bbe2-523bf891ca57",
                              metricValue: 1,
                            },
                            { ent: "all" },
                          );
                        } catch (ex) {}
                      }

/* --- inline script #154 --- */
window.grandprix.metrics.startSafeFrameCSMMetrics(
                        "ape_Detail_hero-quick-promo_Desktop_placement",
                      );
                      window.grandprix.metrics.startSafeFrameCSAMetrics(
                        "ape_Detail_hero-quick-promo_Desktop_placement",
                      );

/* --- inline script #155 --- */
window.grandprix.wrappers.listenForSFIFrameLoad(
                          "ape_Detail_hero-quick-promo_Desktop_iframe",
                          "ape_Detail_hero-quick-promo_Desktop_placement",
                        );

/* --- inline script #156 --- */
(function () {
                            const script = document.createElement("script");
                            script.src = "https://m.media-amazon.com/images/I/11m16uzbS8L.js";
                            script.defer = true;
                            script.fetchPriority = "low";
                            script.onload = () => {
                              adFeedback.initializeSponsoredLabel("hero-quick-promo", "", false, "", "", "");
                            };
                            document
                              .getElementById("ape_Detail_hero-quick-promo_Desktop_placement_Feedback")
                              .appendChild(script);
                          })();

/* --- inline script #157 --- */
if (window.ue && typeof window.ue.count === "function") {
                          window.ue.count("adplacements:adfeedback:sponsoredlabelrendered", 1);
                        }
                        if (window.csa) {
                          try {
                            window.csa("Events", { producerId: "adplacements" })(
                              "log",
                              {
                                schemaId: "ApeSafeframe.csaEvent.1",
                                metricName: "adfeedback:sponsoredlabelrendered",
                                metricValue: 1,
                              },
                              { ent: "all" },
                            );
                          } catch (ex) {}
                        }

/* --- inline script #158 --- */
if (window.ue && typeof window.ue.count === "function") {
                          window.ue.count(
                            "adplacements:adfeedback:sponsoredlabelrendered:host:Detail_hero-quick-promo_Desktop",
                            1,
                          );
                        }
                        if (window.csa) {
                          try {
                            window.csa("Events", { producerId: "adplacements" })(
                              "log",
                              {
                                schemaId: "ApeSafeframe.csaEvent.1",
                                metricName:
                                  "adfeedback:sponsoredlabelrendered:host:Detail_hero-quick-promo_Desktop:cf91057a-6347-4399-bbe2-523bf891ca57",
                                metricValue: 1,
                              },
                              { ent: "all" },
                            );
                          } catch (ex) {}
                        }

/* --- inline script #159 --- */
if (window.ue) {
              ue.count("dp_aib_centerCol_height", document.getElementById("centerCol").clientHeight);
            }

/* --- inline script #160 --- */
setCSMReq("af");
            addlongPoleTag("af", "desktop-html-atf-marker");

/* --- inline script #161 --- */
(function (f) {
              var _np = window.P._namespace("DetailPageLayoutsTemplate");
              if (_np.guardFatal) {
                _np.guardFatal(f)(_np);
              } else {
                f(_np);
              }
            })(function (P) {
              window.amz_js_PopWin = function (url, name, options) {
                var ContextWindow = window.open(url, name, options);
                ContextWindow.focus();
                return false;
              };
            });

/* --- inline script #162 --- */
P.when("jQuery").register("ImageBlockBTF", function (jQuery) {
                  if (window.performance && performance.now && window.ue && ue.count) {
                    ue.count("DPIBBTFRegisterTime", window.parseInt(performance.now()));
                  }
                  var data = {};
                  var obj = jQuery.parseJSON(
                    '{"dataInJson":null,"alwaysIncludeVideo":true,"autoplayVideo":false,"defaultColor":"initial","mainImageSizes":[["355","355"],["450","450"],["425","550"],["466","606"],["522","679"],["569","741"],["679","879"]],"maxAlts":7,"altsOnLeft":false,"productGroupID":"home_display_on_website","lazyLoadExperienceDisabled":true,"lazyLoadExperienceOnHoverDisabled":false,"useChromelessVideoPlayer":false,"colorToAsin":{},"refactorEnabled":true,"useIV":true,"tabletWeb":false,"views":["ImageBlockMagnifierView","ImageBlockAltImageView","ImageBlockVideoView","ImageBlockTwisterView","ImageBlockImmersiveViewImages","ImageBlockImmersiveViewVideos","ImageBlockImmersiveViewShowroom","ImageBlockImmersiveView360","ImageBlockTabbedImmersiveView"],"enhancedHoverOverlay":false,"landingAsinColor":"initial","colorImages":{},"heroImages":{},"enable360Map":{},"staticImages":{"hoverZoomIcon":"https://m.media-amazon.com/images/G/01/img11/apparel/UX/DP/icon_zoom._CB485946671_.png","shoppableSceneViewProductsButton":"https://m.media-amazon.com/images/G/01/shopbylook/shoppable-images/view_products._CB427832024_.svg","zoomLensBackground":"https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif","shoppableSceneDotHighlighted":"https://m.media-amazon.com/images/G/01/shopbylook/shoppable-images/dot_highlighted._CB649293510_.svg","zoomInCur":"https://m.media-amazon.com/images/G/01/detail-page/cursors/zoomIn._CB485921866_.cur","shoppableSceneSideSheetClose":"https://m.media-amazon.com/images/G/01/shopbylook/shoppable-images/close_x_white._CB404688921_.png","shoppableSceneBackToTopArrow":"https://m.media-amazon.com/images/G/01/shopbylook/shoppable-images/back_to_top_arrow._CB427936690_.svg","arrow":"https://m.media-amazon.com/images/G/01/javascripts/lib/popover/images/light/sprite-vertical-popover-arrow._CB485933082_.png","icon360V2":"https://m.media-amazon.com/images/G/01/HomeCustomProduct/imageBlock-360-thumbnail-icon-small._CB612115888_.png","zoomIn":"https://m.media-amazon.com/images/G/01/detail-page/cursors/zoom-in._CB485944643_.bmp","zoomOut":"https://m.media-amazon.com/images/G/01/detail-page/cursors/zoom-out._CB485943857_.bmp","videoThumbIcon":"https://m.media-amazon.com/images/G/01/Quarterdeck/en_US/images/video._CB485935537_SS100_.gif","spinnerNoLabel":"https://m.media-amazon.com/images/G/01/ui/loadIndicators/loading-large._CB485945288_.gif","zoomOutCur":"https://m.media-amazon.com/images/G/01/detail-page/cursors/zoomOut._CB485921725_.cur","videoSWFPath":"https://m.media-amazon.com/images/G/01/Quarterdeck/en_US/video/20110518115040892/Video._CB485981003_.swf","grabbing":"https://m.media-amazon.com/images/G/01/HomeCustomProduct/grabbingbox._CB485943551_.cur","shoppableSceneDot":"https://m.media-amazon.com/images/G/01/shopbylook/shoppable-images/dot._CB649293510_.svg","icon360":"https://m.media-amazon.com/images/G/01/HomeCustomProduct/imageBlock-360-thumbnail-icon-small._CB612115888_.png","grab":"https://m.media-amazon.com/images/G/01/HomeCustomProduct/grabbox._CB485922675_.cur","spinner":"https://m.media-amazon.com/images/G/01/ui/loadIndicators/loading-large_labeled._CB485921664_.gif"},"staticStrings":{"dragToSpin":"Drag to Spin","videos":"Videos","video":"video","shoppableSceneTabsTitleT3":"Shop the collection","shoppableSceneTabsTitle":"Shop similar items","shoppableSceneTabsTitleT2":"Shop this style ","ivImageThumbnailLabelAnnounce":"Thumbnail image ###ivImageThumbnailIndex","rollOverToZoom":"Roll over image to zoom in","singleVideo":"VIDEO","watchVideosLabel":"Watch","clickSceneTagsToShopProducts":"Click the dots to see similar items","close":"Close","moreVideosLabel":"More videos","shoppableSceneViewProductsButton":"Shop similar items","images":"Images","watchMoreVideos":"Click to see more videos","shoppableSceneViewProductsButtonT2":"Shop this style ","shoppableSceneViewProductsButtonT1":"Shop the look","shoppableSceneViewProductsButtonT3":"Shop the collection","allMedia":"All Media","clickToExpand":"Click image to open expanded view","shoppableSceneTabsTitleT1":"Shop the look","playVideo":"Click to play video","shoppableSceneNoSuggestions":"No results available","touchToZoom":"Touch the image to zoom in","multipleVideos":"VIDEOS","shoppableSceneSeeMoreString":"See more","pleaseSelect":"Please select","clickForFullView":"Click to see full view","clickToZoom":"Click on image to zoom in"},"useChildVideos":true,"useClickZoom":false,"useHoverZoom":true,"useHoverZoomIpad":false,"visualDimensions":[],"mainImageHeightPartitions":null,"mainImageMaxSizes":null,"heroFocalPoint":null,"showMagnifierOnHover":false,"disableHoverOnAltImages":false,"overrideAltImageClickAction":false,"naturalMainImageSize":null,"imgTagWrapperClasses":null,"prioritizeVideos":false,"usePeekHover":false,"fadeMagnifier":false,"repositionHeroImage":false,"heroVideoVariant":null,"videos":[],"videosData":null,"totalVideoCount":null,"title":"Sperti™ UVB Home Lamp - 7-Year Warranty, 5 Mins Every Other Day, Trusted USA Company, 50K+ Sold!","airyConfigEnabled":false,"airyConfig":null,"vseVideoDataSourceTreatment":"T1","mediaAsin":"B01LBI1BIO","parentAsin":"B01LBI1BIO","largeSCLVideoThumbnail":false,"displayVideoBanner":false,"useVSEVideos":true,"videoIngressCountText":null,"enableS2WithoutS1":false,"showNewMBLB":false,"showVideoThumbNail":null,"useTabbedImmersiveView":true,"dpRequestId":"XFYA4Y2AJY08MAT6G7D8","customerId":"","contentWeblab":"","contentWeblabTreatment":"","dp60VideoThumbMap":null,"videoBackgroundChromefulMainView":"black","altImages":null,"altImagesData":null}',
                  );
                  data["alwaysIncludeVideo"] = obj.alwaysIncludeVideo ? 1 : 0;
                  data["autoplayVideo"] = obj.autoplayVideo ? 1 : 0;
                  data["defaultColor"] = obj.defaultColor;
                  data["maxAlts"] = obj.maxAlts;
                  data["altsOnLeft"] = obj.altsOnLeft;
                  data["newVideoMissing"] = obj.newVideoMissing;
                  data["lazyLoadExperienceDisabled"] = obj.lazyLoadExperienceDisabled;
                  data["lazyLoadExperienceOnHoverDisabled"] = obj.lazyLoadExperienceOnHoverDisabled;
                  data["useChromelessVideoPlayer"] = obj.useChromelessVideoPlayer ? 1 : 0;
                  data["colorToAsin"] = obj.colorToAsin;
                  data["ivRepresentativeAsin"] = obj.ivRepresentativeAsin;
                  data["ivImageSetKeys"] = obj.ivImageSetKeys;
                  data["useIV"] = obj.useIV ? 1 : 0;
                  data["tabletWeb"] = obj.tabletWeb ? 1 : 0;
                  data["views"] = obj.views;
                  data["enhancedHoverOverlay"] = obj.enhancedHoverOverlay;
                  data["landingAsinColor"] = obj.landingAsinColor;
                  data["colorImages"] = obj.colorImages;
                  data["heroImage"] = obj.heroImages;
                  data["spin360ColorEnabled"] = obj.enable360Map;
                  data["staticImages"] = obj.staticImages;
                  data["staticStrings"] = obj.staticStrings;
                  data["useChildVideos"] = obj.useChildVideos ? 1 : 0;
                  data["useClickZoom"] = obj.useClickZoom ? 1 : 0;
                  data["useHoverZoom"] = obj.useHoverZoom ? 1 : 0;
                  data["useHoverZoomIpad"] = obj.useHoverZoomIpad ? 1 : 0;
                  data["visualDimensions"] = obj.visualDimensions;
                  data["isLargeSCLVideoThumbnail"] = obj.largeSCLVideoThumbnail;
                  data["mainImageSizes"] = obj.mainImageSizes;
                  data["displayVideoBanner"] = obj.displayVideoBanner;
                  data["mainImageHeightPartitions"] = obj.mainImageHeightPartitions;
                  data["mainImageMaxSizes"] = obj.mainImageMaxSizes;
                  data["heroFocalPoint"] = obj.heroFocalPoint;
                  data["showMagnifierOnHover"] = obj.showMagnifierOnHover ? 1 : 0;
                  data["disableHoverOnAltImages"] = obj.disableHoverOnAltImages ? 1 : 0;
                  data["overrideAltImageClickAction"] = obj.overrideAltImageClickAction ? 1 : 0;
                  data["naturalMainImageSize"] = obj.naturalMainImageSize;
                  data["imgTagWrapperClasses"] = obj.imgTagWrapperClasses;
                  data["prioritizeVideos"] = obj.prioritizeVideos;
                  data["usePeekHover"] = obj.usePeekHover;
                  data["fadeMagnifier"] = obj.fadeMagnifier;
                  data["repositionHeroImage"] = obj.repositionHeroImage;
                  data["heroVideoVariant"] = obj.heroVideoVariant;
                  data["videos"] = obj.videos;
                  if (obj.totalVideoCount != null) {
                    data["totalVideoCount"] = obj.totalVideoCount;
                  }
                  data["productGroupID"] = obj.productGroupID;
                  data["title"] = obj.title;
                  data["airyConfigEnabled"] = obj.airyConfigEnabled;
                  if (obj.airyConfigEnabled) {
                    data["airyConfig"] = obj.airyConfig;
                  }
                  data["isDPXFeatureEnabled"] = true;
                  data["useTabbedImmersiveView"] = obj.useTabbedImmersiveView;
                  data["vseVideoDataSourceTreatment"] = obj.vseVideoDataSourceTreatment;
                  data["rankingStrategy"] = obj.rankingStrategy;
                  data["contentWeblab"] = obj.contentWeblab;
                  data["contentWeblabTreatment"] = obj.contentWeblabTreatment;
                  data["useVSEVideos"] = obj.useVSEVideos;
                  data["dpRequestId"] = obj.dpRequestId;
                  data["mediaAsin"] = obj.mediaAsin;
                  data["parentAsin"] = obj.parentAsin;
                  data["dp60VideoThumbMap"] = obj.dp60VideoThumbMap;
                  data["videoBackgroundChromefulMainView"] = obj.videoBackgroundChromefulMainView;
                  data["enableS2WithoutS1"] = obj.enableS2WithoutS1;
                  data["customerId"] = obj.customerId;
                  data["twisterInteractionSimplificationEnabled"] = false;
                  data["requestedAsinColor"] = obj.landingAsinColor;
                  return data;
                });

/* --- inline script #163 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("msxIngressClick").execute(function () {
              (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                "https://m.media-amazon.com/images/I/51S-qOAsDtL.js?AUIClients/",
              );
            });

/* --- inline script #164 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("dp-latency-marker").execute(function () {
              (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                "https://m.media-amazon.com/images/I/41hvUkGxiGL.js?AUIClients/",
              );
            });

/* --- inline script #165 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("dp-latency-marker").execute(function () {
              (function (a) {
                var b = window.AmazonUIPageJS || window.P,
                  d = b._namespace || b.attributeErrors,
                  c = d
                    ? d(
                        "DetailPageLatencyClientSideLibraries@detailPageCfMarker",
                        "DetailPageLatencyClientSideLibraries",
                      )
                    : b;
                c.guardFatal
                  ? c.guardFatal(a)(c, window)
                  : c.execute(function () {
                      a(c, window);
                    });
              })(function (a, b, d) {
                b = "object" === typeof a && "function" === typeof a.when;
                "function" == typeof setCSMReq
                  ? setCSMReq("cf")
                  : ("function" == typeof uet && uet("cf"),
                    b ? a.trigger("cf") : amznJQ.completedStage("amznJQ.criticalFeature"));
              });
            });

/* --- inline script #166 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("dpJsAssetsLoadMarker").execute(function () {
              (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                "https://m.media-amazon.com/images/I/31xtkCtUuJL.js?AUIClients/",
              );
            });

/* --- inline script #167 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("dpJsAssetsLoadMarker").execute(function () {
              (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                "https://m.media-amazon.com/images/I/31my+7fu8iL.js?AUIClients/",
              );
            });

/* --- inline script #168 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("dpJsAssetsLoadMarker").execute(function () {
              (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                "https://m.media-amazon.com/images/I/11UE211RTRL.js?AUIClients/",
              );
            });

/* --- inline script #169 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("dpJsAssetsLoadMarker").execute(function () {
              (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                "https://m.media-amazon.com/images/I/31ioM9DqoUL.js?AUIClients/",
              );
            });

/* --- inline script #170 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("dpJsAssetsLoadMarker").execute(function () {
              (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                "https://m.media-amazon.com/images/I/01QJ5oc98DL._RC|01lvn1mKZgL.js_.js?AUIClients/",
              );
            });

/* --- inline script #171 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("dpJsAssetsLoadMarker").execute(function () {
              (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                "https://m.media-amazon.com/images/I/11ACiCSJBcL.js?AUIClients/",
              );
            });

/* --- inline script #172 --- */
window.P &&
              P.now("sp.load.js").execute(function (jsObj) {
                if (!jsObj) {
                  P.declare("sp.load.js", {});
                }
              });

/* --- inline script #173 --- */
window.$Nav &&
              $Nav.when("data").run(function (data) {
                data({
                  accountListContent: {
                    html: "<div id='nav-al-container'><div id='nav-al-signin'><div id='nav-flyout-ya-signin' class='nav-flyout-content nav-flyout-accessibility'><a href='#' rel='nofollow' class='nav-action-signin-button' data-nav-role='signin' data-nav-ref='nav_signin'><span class='nav-action-inner'>Sign in</span></a><div id='nav-flyout-ya-newCust' class='nav_pop_new_cust nav-flyout-content nav-flyout-accessibility'>New customer? <a href='#' rel='nofollow' class='nav-a' aria-label='New to Amazon? Start here to create an account'>Start here.</a></div></div></div><div id='nav-al-wishlist' class='nav-al-column nav-tpl-itemList nav-flyout-content nav-flyout-accessibility'><div class='nav-title' id='nav-al-title' role='heading' aria-level='6'>Your Lists</div><ul><li><a href='#' class='nav-link nav-item'><span class='nav-text'>Create a List</span></a></li><li><a href='#' class='nav-link nav-item'><span class='nav-text'>Find a List or Registry</span></a></li></ul></div><div id='nav-al-your-account' class='nav-al-column nav-template nav-flyout-content nav-tpl-itemList nav-flyout-accessibility'><div class='nav-title' role='heading' aria-level='6'>Your Account</div><ul><li><a href='#' class='nav-link nav-item'><span class='nav-text'>Account</span></a></li><li><a id='nav_prefetch_yourorders' href='#' class='nav-link nav-item'><span class='nav-text'>Orders</span></a></li><li><a href='#' class='nav-link nav-item'><span class='nav-text'>Keep Shopping For</span></a></li><li><a href='#' class='nav-link nav-item'><span class='nav-text'>Recommendations</span></a></li><li><a href='#' class='nav-link nav-item'><span class='nav-text'>Browsing History</span></a></li><li><a href='#' class='nav-link nav-item'><span class='nav-text'>Your Shopping preferences</span></a></li><li><a href='#' class='nav-link nav-item'><span class='nav-text'>Amazon Credit Cards</span></a></li><li><a href='#' class='nav-link nav-item'><span class='nav-text'>Watchlist</span></a></li><li><a href='#' class='nav-link nav-item'><span class='nav-text'>Video Purchases & Rentals</span></a></li><li><a href='#' class='nav-link nav-item'><span class='nav-text'>Kindle Unlimited</span></a></li><li><a href='#' class='nav-link nav-item'><span class='nav-text'>Content & Devices</span></a></li><li><a href='#' class='nav-link nav-item'><span class='nav-text'>Subscribe & Save Items</span></a></li><li><a href='#' class='nav-link nav-item'><span class='nav-text'>Memberships & Subscriptions</span></a></li><li><a href='#' class='nav-link nav-item'><span class='nav-text'>Prime Membership</span></a></li><li><a href='#' class='nav-link nav-item'><span class='nav-text'>Music Library</span></a></li><li><a href='#' class='nav-link nav-item'><span class='nav-text'>Start a Selling Account</span></a></li><li><a href='#' class='nav-link nav-item'><span class='nav-text'>Create Your Free Business Account</span></a></li><li><a href='#' class='nav-link nav-item'><span class='nav-text'>Customer Service</span></a></li></ul></div></div>",
                  },
                  tooltipContent: { html: "" },
                  signinContent: {
                    html: "<div id='nav-signin-tooltip'><a href='#' class='nav-action-signin-button' data-nav-role='signin' data-nav-ref='nav_custrec_signin'><span class='nav-action-inner'>Sign in</span></a><div class='nav-signin-tooltip-footer'>New customer? <a href='#' class='nav-a' aria-label='New to Amazon? Start here to create an account'>Start here.</a></div></div>",
                  },
                  templates: {
                    itemList:
                      "<# var hasColumns = (function () {  var checkColumns = function (_items) {    if (!_items) {      return false;    }    for (var i=0; i<_items.length; i++) {      if (_items[i].columnBreak || (_items[i].items && checkColumns(_items[i].items))) {        return true;      }    }    return false;  };  return checkColumns(items);}()); #><# if(hasColumns) { #>  <# if(items[0].image && items[0].image.src) { #>    <div class='nav-column nav-column-first nav-column-image'>  <# } else if (items[0].greeting) { #>    <div class='nav-column nav-column-first nav-column-greeting'>  <# } else { #>    <div class='nav-column nav-column-first'>  <# } #><# } #><# var renderItems = function(items) { #>  <# jQuery.each(items, function (i, item) { #>    <# if(hasColumns && item.columnBreak) { #>      <# if(item.image && item.image.src) { #>        </div><div class='nav-column nav-column-notfirst nav-column-break nav-column-image'>      <# } else if (item.greeting) { #>        </div><div class='nav-column nav-column-notfirst nav-column-break nav-column-greeting'>      <# } else { #>        </div><div class='nav-column nav-column-notfirst nav-column-break'>      <# } #>    <# } #>    <# if(item.dividerBefore) { #>      <div class='nav-divider'></div>    <# } #>    <# if(item.text || item.content) { #>      <# if(item.url) { #>        <a href='<#=item.url #>' class='nav-link      <# } else {#>        <span class='      <# } #>      <# if(item.panelKey) { #>        nav-hasPanel      <# } #>      <# if(item.items) { #>        nav-title      <# } #>      <# if(item.decorate == 'carat') { #>        nav-carat      <# } #>      <# if(item.decorate == 'nav-action-button') { #>        nav-action-button      <# } #>      nav-item'      <# if(item.extra) { #>        <#=item.extra #>      <# } #>      <# if(item.id) { #>        id='<#=item.id #>'      <# } #>      <# if(item.dataNavRole) { #>        data-nav-role='<#=item.dataNavRole #>'      <# } #>      <# if(item.dataNavRef) { #>        data-nav-ref='<#=item.dataNavRef #>'      <# } #>      <# if(item.panelKey) { #>        data-nav-panelkey='<#=item.panelKey #>'        role='navigation'        aria-label='<#=item.text#>'      <# } #>      <# if(item.subtextKey) { #>        data-nav-subtextkey='<#=item.subtextKey #>'      <# } #>      <# if(item.image && item.image.height > 16) { #>        style='line-height:<#=item.image.height #>px;'      <# } #>      >      <# if(item.decorate == 'carat') { #>        <i class='nav-icon'></i>      <# } #>      <# if(item.image && item.image.src) { #>        <img class='nav-image' src='<#=item.image.src #>' style='height:<#=item.image.height #>px; width:<#=item.image.width #>px;' />      <# } #>      <# if(item.text) { #>        <span class='nav-text<# if(item.classname) { #> <#=item.classname #><# } #>'><#=item.text#><# if(item.badgeText) { #>          <span class='nav-badge'><#=item.badgeText#></span>        <# } #></span>      <# } else if (item.content) { #>        <span class='nav-content'><# jQuery.each(item.content, function (j, cItem) { #><# if(cItem.url && cItem.text) { #><a href='<#=cItem.url #>' class='nav-a'><#=cItem.text #></a><# } else if (cItem.text) { #><#=cItem.text#><# } #><# }); #></span>      <# } #>      <# if(item.subtext) { #>        <span class='nav-subtext'><#=item.subtext #></span>      <# } #>      <# if(item.url) { #>        </a>      <# } else {#>        </span>      <# } #>    <# } #>    <# if(item.image && item.image.src) { #>      <# if(item.url) { #>        <a href='<#=item.url #>'>       <# } #>      <img class='nav-image'      <# if(item.id) { #>        id='<#=item.id #>'      <# } #>      src='<#=item.image.src #>' <# if (item.alt) { #> alt='<#= item.alt #>'<# } #>/>      <# if(item.url) { #>        </a>       <# } #>    <# } #>    <# if(item.items) { #>      <div class='nav-panel'> <# renderItems(item.items); #> </div>    <# } #>  <# }); #><# }; #><# renderItems(items); #><# if(hasColumns) { #>  </div><# } #>",
                    subnav:
                      "<# if (obj && obj.type === 'vertical') { #>  <# jQuery.each(obj.rows, function (i, row) { #>    <# if (row.flyoutElement === 'button') { #>      <div class='nav_sv_fo_v_button'        <# if (row.elementStyle) { #>          style='<#= row.elementStyle #>'        <# } #>      >        <a href='<#=row.url #>' class='nav-action-button nav-sprite'>          <#=row.text #>        </a>      </div>    <# } else if (row.flyoutElement === 'list' && row.list) { #>      <# jQuery.each(row.list, function (j, list) { #>        <div class='nav_sv_fo_v_column <#=(j === 0) ? 'nav_sv_fo_v_first' : '' #>'>          <ul class='<#=list.elementClass #>'>          <# jQuery.each(list.linkList, function (k, link) { #>            <# if (k === 0) { link.elementClass += ' nav_sv_fo_v_first'; } #>            <li class='<#=link.elementClass #>'>              <# if (link.url) { #>                <a href='<#=link.url #>' class='nav_a'><#=link.text #></a>              <# } else { #>                <span class='nav_sv_fo_v_span'><#=link.text #></span>              <# } #>            </li>          <# }); #>          </ul>        </div>      <# }); #>    <# } else if (row.flyoutElement === 'link') { #>      <# if (row.topSpacer) { #>        <div class='nav_sv_fo_v_clear'></div>      <# } #>      <div class='<#=row.elementClass #>'>        <a href='<#=row.url #>' class='nav_sv_fo_v_lmargin nav_a'>          <#=row.text #>        </a>      </div>    <# } #>  <# }); #><# } else if (obj) { #>  <div class='nav_sv_fo_scheduled'>    <#= obj #>  </div><# } #>",
                    htmlList:
                      "<# jQuery.each(items, function (i, item) { #>  <div class='nav-item'>    <#=item #>  </div><# }); #>",
                  },
                });
              });

/* --- inline script #174 --- */
window.$Nav && $Nav.declare("config.flyoutURL", null);
            window.$Nav && $Nav.declare("btf.lite");
            window.$Nav && $Nav.declare("btf.full");
            window.$Nav && $Nav.declare("btf.exists");
            (window.AmazonUIPageJS ? AmazonUIPageJS : P).register("navCF");

/* --- inline script #175 --- */
window.$Nav &&
              $Nav.when("$").run("CBIMarketplaceRedirectOverlayNavyaan", function ($) {
                $.ajax({
                  type: "POST",
                  url: "/cross_border_interstitial_sp/render",
                  data: JSON.stringify({
                    marketplaceId: "ATVPDKIKX0DER",
                    localCountryCode: "US",
                    customerId: null,
                    sessionId: "132\x2D4911001\x2D2878963",
                    deviceType: "DESKTOP",
                    referrer: "",
                    url: "\x2Fgp\x2Fproduct\x2FB01LBI1BIO",
                    pageType: "Detail",
                    languageOfPreference: "en_US",
                    queryParams: {},
                    interstitialRequestType: "CBI",
                    weblabTreatmentMap: {
                      CBI_355055: "C",
                      NARX_INTERSTITIAL_NEW_CX_372291: "C",
                      NARX_INTERSTITIAL_AUI_MIGRATION_446901: "C",
                      TEST_ACS_CONFIGURATION_486322: "C",
                      CROSS_BORDER_INTERSTITIAL_ACS_SHADOW_TESTING_486317: "C",
                      INTERSTITIAL_PROTOTYPE_IP_ADDRESS_BR_598850: "C",
                      NARX_INTERSTITIAL_LAMBDA_CLOUD_AUTH_880645: "C",
                      CBI_ROBOT_MITIGATION_943387: "C",
                      CBI_REDISPLAY_INTERSTITIAL_1008859: "C",
                    },
                  }),
                  contentType: "application/json",
                  dataType: "html",
                  success: function (data) {
                    if (data) {
                      $("body").append(data);
                    }
                  },
                });
              });

/* --- inline script #176 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("dpJsAssetsLoadMarker").execute(function () {
              (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                "https://m.media-amazon.com/images/I/41EwBASORpL.js?AUIClients/",
              );
            });

/* --- inline script #177 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("dpJsAssetsLoadMarker").execute(function () {
              (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                "https://m.media-amazon.com/images/I/21cmZft4Z0L.js?AUIClients/",
              );
            });

/* --- inline script #178 --- */
{"deviceType":"web"}

/* --- inline script #179 --- */
{"marketplaceId":"ATVPDKIKX0DER","endpoint":"data.amazon.com","csrfToken":"1@gwouWezNBxqam/+4ZoS8I5/EtZtYLMmuiTOtkph+UqprAAAAAQAAAABp+k4NcmF3AAAAABVX8CwXqz42z+J7i/ABqA==@NLD_E0LHGO","requestId":"XFYA4Y2AJY08MAT6G7D8","language":"en-US"}

/* --- inline script #180 --- */
{"eelEndpoint":"https://unagi-na.amazon.com/1/events/com.amazon.eel.SponsoredProductsEventTracking.prod"}

/* --- inline script #181 --- */
(function (f) {
                              var _np = window.P._namespace("FirebirdSpRendering");
                              if (_np.guardFatal) {
                                _np.guardFatal(f)(_np);
                              } else {
                                f(_np);
                              }
                            })(function (P) {
                              P.when("A", "a-carousel-framework", "a-modal").execute(function (A, CF, AM) {
                                var DESKTOP_METRIC_PREFIX = "adFeedback:desktop:multiAsinAF:sp_detail_thematic";
                                A.declarative(
                                  "sp_detail_thematic-hercules_hybrid_deals_T1_feedback-action",
                                  "click",
                                  function (event) {
                                    var MODAL_NAME_PREFIX = "multi_af_modal_";
                                    var MODAL_CLASS_PREFIX = "multi-af-modal-";
                                    var BASE_16 = 16;
                                    var UID_START_INDEX = 2;
                                    var uniqueIdentifier = Math.random().toString(BASE_16).substr(UID_START_INDEX);
                                    var modalName =
                                      MODAL_NAME_PREFIX +
                                      "sp_detail_thematic-hercules_hybrid_deals_T1" +
                                      uniqueIdentifier;
                                    var modalClass =
                                      MODAL_CLASS_PREFIX +
                                      "sp_detail_thematic-hercules_hybrid_deals_T1" +
                                      uniqueIdentifier;
                                    initModal(modalName, modalClass);
                                    removeModalOnClose(modalName);
                                  },
                                );
                                function initModal(modalName, modalClass) {
                                  var trigger = A.$('<div a-popover-id="' + modalName + '" />');
                                  var initialContent =
                                    '<div class="' +
                                    modalClass +
                                    '" style="width: 100%; height: 100%; position: relative;">' +
                                    '<span class="a-spinner a-spinner-medium" style="position: relative; left: 40%;top: 40%;">' +
                                    "</span></div>";
                                  var HEADER_STRING = "Leave feedback";
                                  if (false) {
                                    HEADER_STRING = "Ad information and options";
                                  }
                                  var modalInstance = AM.create(trigger, {
                                    content: initialContent,
                                    header: HEADER_STRING,
                                    popoverLabel: HEADER_STRING,
                                    name: modalName,
                                  });
                                  modalInstance.show();
                                  var serializedPayload = generatePayload(modalName);
                                  A.$.ajax({
                                    url: "/af/multi-creative/feedback-form",
                                    type: "POST",
                                    data: serializedPayload,
                                    headers: { "Content-Type": "application/json", Accept: "application/json" },
                                    success: function (response) {
                                      if (!response) {
                                        return;
                                      }
                                      modalInstance.update(response);
                                      var successMetric = DESKTOP_METRIC_PREFIX + ":formDisplayed";
                                      if (window.ue && window.ue.count) {
                                        window.ue.count(successMetric, (window.ue.count(successMetric) || 0) + 1);
                                      }
                                    },
                                    error: function (err) {
                                      var errorText = "Feedback Form get failed with error: " + err;
                                      var errorMetric = DESKTOP_METRIC_PREFIX + ":error";
                                      P.log(errorText, "FATAL", DESKTOP_METRIC_PREFIX);
                                      if (window.ue && window.ue.count) {
                                        window.ue.count(errorMetric, (window.ue.count(errorMetric) || 0) + 1);
                                      }
                                      modalInstance.update("<b>" + "Error loading ad feedback form." + "</b>");
                                    },
                                  });
                                  return modalInstance;
                                }
                                function removeModalOnClose(modalName) {
                                  A.on("a:popover:afterHide:" + modalName, function removeModal() {
                                    var isSuccess = AM.remove(modalName);
                                    if (isSuccess) {
                                      document
                                        .getElementById("sp_detail_thematic-hercules_hybrid_deals_T1_feedbackMessage")
                                        .focus();
                                    }
                                  });
                                }
                                function generatePayload(modalName) {
                                  var carousel = CF.getCarousel(
                                    document.getElementById("sp_detail_thematic-hercules_hybrid_deals_T1"),
                                  );
                                  var EMPTY_CARD_CLASS = "a-carousel-card-empty";
                                  if (!carousel) {
                                    return;
                                  }
                                  var adPlacementMetaData =
                                    carousel.dom.$carousel.context.getAttribute("data-ad-placement-metadata");
                                  var adDetailsList = [];
                                  if (adPlacementMetaData == "") {
                                    return;
                                  }
                                  carousel.dom.$carousel
                                    .children("li")
                                    .not("." + EMPTY_CARD_CLASS)
                                    .each(function (idx, item) {
                                      var divs = item.getElementsByTagName("div");
                                      var adFeedbackDetails;
                                      for (var i = 0; i < divs.length; ++i) {
                                        if (divs[i].getAttribute("data-adfeedbackdetails")) {
                                          adFeedbackDetails = divs[i].getAttribute("data-adfeedbackdetails");
                                          break;
                                        }
                                      }
                                      if (!adFeedbackDetails) {
                                        return;
                                      }
                                      if (adFeedbackDetails != "" && adFeedbackDetails != null) {
                                        adDetailsList.push(JSON.parse(adFeedbackDetails));
                                      }
                                    });
                                  var payload = {
                                    adPlacementMetaData: JSON.parse(adPlacementMetaData),
                                    adCreativeMetaData: { adCreativeDetails: adDetailsList },
                                    feedbackFormContainerId: modalName,
                                  };
                                  var serializedPayload = { pl: encodeURI(JSON.stringify(payload)) };
                                  return JSON.stringify(serializedPayload);
                                }
                              });
                            });

/* --- inline script #182 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("SponsoredProductsViewability").execute(function (SV) {
                                        SV.loadImagePixel(
                                          "/gp/sponsored-products/logging/log-action.html?qualifier=1778011661&id=8273679158264793&widgetName=sp_detail_thematic&adId=301171516625502&eventType=2&adIndex=0",
                                        );
                                      });
                                    });

/* --- inline script #183 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("A", "SponsoredProductsViewability").execute(function (A, SV) {
                                        SV.registerViewTrackingElement(
                                          A.$("#sp_detail_thematic-hercules_hybrid_deals_T1_B0FM3X5SZ4"),
                                          "sp_detail_thematic",
                                        );
                                      });
                                    });

/* --- inline script #184 --- */
(function (f) {
                                            var _np = window.P._namespace("FirebirdSpRendering");
                                            if (_np.guardFatal) {
                                              _np.guardFatal(f)(_np);
                                            } else {
                                              f(_np);
                                            }
                                          })(function (P) {
                                            P.when("jQuery").execute(function ($) {
                                              var countdownTimer = document.getElementById(
                                                "sp_detail_thematic-hercules_hybrid_deals_T1_B0FM3X5SZ4_dealsXbadge-countdown-timer",
                                              );
                                              if (countdownTimer) {
                                                var targetTimeStr = $(countdownTimer).attr("data-target-time");
                                                var targetTime = Date.parse(targetTimeStr);
                                                (function countDown() {
                                                  var diffSeconds = Math.floor((targetTime - Date.now()) / 1000);
                                                  if (diffSeconds <= 0) {
                                                    $(countdownTimer).text("00:00");
                                                  } else {
                                                    var hours = Math.floor((diffSeconds / 3600) % 100);
                                                    var minutes = Math.floor((diffSeconds / 60) % 60);
                                                    var seconds = Math.floor(diffSeconds % 60);
                                                    var timeStr = [hours, minutes, seconds]
                                                      .map((v) => (v < 10 ? "0" + v : v))
                                                      .filter((v, i) => v !== "00" || i > 0)
                                                      .join(":");
                                                    $(countdownTimer).text(timeStr);
                                                    setTimeout(countDown, 1000);
                                                  }
                                                })();
                                              }
                                            });
                                          });

/* --- inline script #185 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("SponsoredProductsViewability").execute(function (SV) {
                                        SV.loadImagePixel(
                                          "/gp/sponsored-products/logging/log-action.html?qualifier=1778011661&id=8273679158264793&widgetName=sp_detail_thematic&adId=300879403642302&eventType=2&adIndex=1",
                                        );
                                      });
                                    });

/* --- inline script #186 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("A", "SponsoredProductsViewability").execute(function (A, SV) {
                                        SV.registerViewTrackingElement(
                                          A.$("#sp_detail_thematic-hercules_hybrid_deals_T1_B0FDR52FMR"),
                                          "sp_detail_thematic",
                                        );
                                      });
                                    });

/* --- inline script #187 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("A", "jQuery", "ready").execute(function (A, jQuery) {
                                        var badgeRectangle = A.$(
                                          "#sp_detail_thematic-hercules_hybrid_deals_T1_B0FDR52FMR_badge",
                                        );
                                        var badgeTriangle = A.$(
                                          "#sp_detail_thematic-hercules_hybrid_deals_T1_B0FDR52FMR_badge_image",
                                        );
                                        if (document.documentElement.dir == "rtl") {
                                          if (true) {
                                            badgeRectangle.css("float", "left");
                                          }
                                          badgeTriangle.css("transform", "scaleX(-1)");
                                          if (false) {
                                            badgeTriangle.css("float", "left");
                                          }
                                        }
                                        if (false) {
                                          var space = 0.0;
                                          var card = A.$("#sp_detail_thematic-hercules_hybrid_deals_T1_B0FDR52FMR");
                                          var badgeText = A.$(
                                            "#sp_detail_thematic-hercules_hybrid_deals_T1_B0FDR52FMR_badge_text",
                                          );
                                          var badgeSecondaryText = A.$(
                                            "#sp_detail_thematic-hercules_hybrid_deals_T1_B0FDR52FMR_badge_secondary_text",
                                          );
                                          while (
                                            badgeRectangle.outerWidth() + badgeTriangle.width() > card.width() &&
                                            space > -1
                                          ) {
                                            space = space - 0.1;
                                            badgeText.css("letter-spacing", space + "px");
                                            badgeSecondaryText.css("letter-spacing", space + "px");
                                          }
                                        }
                                      });
                                    });

/* --- inline script #188 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("SponsoredProductsViewability").execute(function (SV) {
                                        SV.loadImagePixel(
                                          "/gp/sponsored-products/logging/log-action.html?qualifier=1778011661&id=8273679158264793&widgetName=sp_detail_thematic&adId=301263861013302&eventType=2&adIndex=2",
                                        );
                                      });
                                    });

/* --- inline script #189 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("A", "SponsoredProductsViewability").execute(function (A, SV) {
                                        SV.registerViewTrackingElement(
                                          A.$("#sp_detail_thematic-hercules_hybrid_deals_T1_B0FHW13ZXJ"),
                                          "sp_detail_thematic",
                                        );
                                      });
                                    });

/* --- inline script #190 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("SponsoredProductsViewability").execute(function (SV) {
                                        SV.loadImagePixel(
                                          "/gp/sponsored-products/logging/log-action.html?qualifier=1778011661&id=8273679158264793&widgetName=sp_detail_thematic&adId=301256881618802&eventType=2&adIndex=3",
                                        );
                                      });
                                    });

/* --- inline script #191 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("A", "SponsoredProductsViewability").execute(function (A, SV) {
                                        SV.registerViewTrackingElement(
                                          A.$("#sp_detail_thematic-hercules_hybrid_deals_T1_B0FL1SR2BR"),
                                          "sp_detail_thematic",
                                        );
                                      });
                                    });

/* --- inline script #192 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("SponsoredProductsViewability").execute(function (SV) {
                                        SV.loadImagePixel(
                                          "/gp/sponsored-products/logging/log-action.html?qualifier=1778011661&id=8273679158264793&widgetName=sp_detail_thematic&adId=301229549114402&eventType=2&adIndex=4",
                                        );
                                      });
                                    });

/* --- inline script #193 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("A", "SponsoredProductsViewability").execute(function (A, SV) {
                                        SV.registerViewTrackingElement(
                                          A.$("#sp_detail_thematic-hercules_hybrid_deals_T1_B0FC3WMDCM"),
                                          "sp_detail_thematic",
                                        );
                                      });
                                    });

/* --- inline script #194 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("SponsoredProductsViewability").execute(function (SV) {
                                        SV.loadImagePixel(
                                          "/gp/sponsored-products/logging/log-action.html?qualifier=1778011661&id=8273679158264793&widgetName=sp_detail_thematic&adId=300990577871302&eventType=2&adIndex=5",
                                        );
                                      });
                                    });

/* --- inline script #195 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("A", "SponsoredProductsViewability").execute(function (A, SV) {
                                        SV.registerViewTrackingElement(
                                          A.$("#sp_detail_thematic-hercules_hybrid_deals_T1_B0DQWLP66H"),
                                          "sp_detail_thematic",
                                        );
                                      });
                                    });

/* --- inline script #196 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("SponsoredProductsViewability").execute(function (SV) {
                                        SV.loadImagePixel(
                                          "/gp/sponsored-products/logging/log-action.html?qualifier=1778011661&id=8273679158264793&widgetName=sp_detail_thematic&adId=301072410295902&eventType=2&adIndex=6",
                                        );
                                      });
                                    });

/* --- inline script #197 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("A", "SponsoredProductsViewability").execute(function (A, SV) {
                                        SV.registerViewTrackingElement(
                                          A.$("#sp_detail_thematic-hercules_hybrid_deals_T1_B0DYJ49MNM"),
                                          "sp_detail_thematic",
                                        );
                                      });
                                    });

/* --- inline script #198 --- */
(function (f) {
                    var _np = window.P._namespace("FirebirdSpRendering");
                    if (_np.guardFatal) {
                      _np.guardFatal(f)(_np);
                    } else {
                      f(_np);
                    }
                  })(function (P) {
                    P.when("A", "a-carousel-framework", "AmazonClicks").execute(function (A, CF, AC) {
                      var carouselElement = document.getElementById("sp_detail_thematic-hercules_hybrid_deals_T1");
                      if (carouselElement) {
                        CF.getCarousel(carouselElement);
                      }
                    });
                    P.when("A", "SPHAT").execute(function (A, SPHAT) {
                      var containerSelector = "#sp_detail_thematic div";
                      var elementsAllowedToBeHidden = [
                        "script",
                        "div.sp_adID",
                        "div.pa_feedbackForm_container_sp_detail_thematic",
                        "span.a-declarative",
                        "span.aok-hidden",
                        "input[type=hidden]",
                        "noscript",
                      ];
                      var csmCounterMetricName = "sp_detail_thematic.adb";
                      var hadImpact = SPHAT.checkForHiddenElements(
                        containerSelector,
                        elementsAllowedToBeHidden,
                        csmCounterMetricName,
                      );
                      A.state("sp_detail_thematic", { adBlockerHadImpact: hadImpact });
                    });
                    P.when("SponsoredProductsViewability").execute(function (SV) {
                      SV.registerAuiEvents(["ready", "scroll", "resize", "orientationchange"]);
                    });
                    P.when("sp-dp-carousel-truncation").execute(function (truncator) {
                      truncator.setUpTruncation("sp_detail_thematic-hercules_hybrid_deals_T1");
                    });
                  });

/* --- inline script #199 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P)
                  .when("A", "dram-lazy-load-widget", "ready")
                  .execute(function (A) {
                    A.trigger(
                      "dram:register-lazy-load-widget",
                      "#DetailPage_sims-container_desktop-dp-sims_1_container",
                      2500,
                      "DetailPage_desktop",
                      true,
                    );
                  });

/* --- inline script #200 --- */
{
                  "encryptedLazyLoadRenderRequest": "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",
                  "version": "V2"
                }

/* --- inline script #201 --- */
{"eelEndpoint":"https://unagi-na.amazon.com/1/events/com.amazon.eel.SponsoredProductsEventTracking.prod"}

/* --- inline script #202 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                "https://m.media-amazon.com/images/I/41imcj3hIOL.js?AUIClients/DramAssets#1268367-T1",
              );

/* --- inline script #203 --- */
function logShoppableMetrics(moduleName, showsAddToCart) {
                    if (window.ue && window.ue.count) {
                      window.ue.count("aplus:shoppable:" + moduleName + ":addToCart", showsAddToCart ? 1 : 0);
                    }
                  }

/* --- inline script #204 --- */
(function (f) {
                          var _np = window.P._namespace("BrandStoryAplusModule");
                          if (_np.guardFatal) {
                            _np.guardFatal(f)(_np);
                          } else {
                            f(_np);
                          }
                        })(function (P) {
                          P.when("brand-story-carousel").execute("init-brand-story-carousel", function (init) {
                            init();
                          });
                        });

/* --- inline script #205 --- */
var dpAcrHasRegisteredArcLinkClickAction;
                                          P.when("A", "ready").execute(function (A) {
                                            if (dpAcrHasRegisteredArcLinkClickAction !== true) {
                                              dpAcrHasRegisteredArcLinkClickAction = true;
                                              A.declarative(
                                                "acrLink-click-metrics",
                                                "click",
                                                { allowLinkDefault: true },
                                                function (event) {
                                                  if (window.ue) {
                                                    ue.count(
                                                      "acrLinkClickCount",
                                                      (ue.count("acrLinkClickCount") || 0) + 1,
                                                    );
                                                  }
                                                },
                                              );
                                            }
                                          });

/* --- inline script #206 --- */
P.when("A", "cf").execute(function (A) {
                                            A.declarative(
                                              "acrStarsLink-click-metrics",
                                              "click",
                                              { allowLinkDefault: true },
                                              function (event) {
                                                if (window.ue) {
                                                  ue.count(
                                                    "acrStarsLinkWithPopoverClickCount",
                                                    (ue.count("acrStarsLinkWithPopoverClickCount") || 0) + 1,
                                                  );
                                                }
                                              },
                                            );
                                          });

/* --- inline script #207 --- */
P.when("A", "a-modal", "ready").execute(function (A, modal) {
                                      var $ = A.$;

                                      var instance;
                                      var title = $("#modalHeader").val();
                                      function getModalWidth() {
                                        if (window.matchMedia("(max-width: 420px)").matches) {
                                          return "320px"; // Width for very small screens
                                        } else if (window.matchMedia("(max-width: 550px)").matches) {
                                          return "420px"; // Width for small screens
                                        } else {
                                          return "550px"; // Default width
                                        }
                                      }

                                      A.declarative("pricingFeedback-modal-button", "click", function (event) {
                                        if (!instance) {
                                          var options = {
                                            name: "pricingFeedback-modal-content",
                                            dataStrategy: "preload",
                                          };
                                          instance = modal.create(event.$target, options);
                                        }
                                        instance
                                          .update({
                                            header: title,
                                            width: getModalWidth(),
                                          })
                                          .lock()
                                          .show();
                                      });
                                      $(window).resize(function () {
                                        if (instance) {
                                          instance.update({
                                            width: getModalWidth(),
                                          });
                                        }
                                      });
                                    });

                                    P.when("A", "ready").execute(function (A) {
                                      var $ = A.$;

                                      var csrf = $("#aapiCsrfToken").val();
                                      var productPrice = $("#priceValue").val();
                                      var hostname = $("#absoluteUrlPrefix").val();
                                      var customerId = $("#customerId").val();
                                      var isCustomerRecognized = $("#isCustomerLoggedIn").val() === "true";
                                      var isCurrentGlOnlineOnly = $("#isCurrentGlOnlineOnly").val() === "true";
                                      var asin = $("#asin").val();
                                      var marketplaceId = $("#marketplaceId").val();
                                      var country = $("#countryCode").val();
                                      var offlineStoresList = $("#offlineStoresList").val();
                                      var statesList = $("#statesList").val();

                                      var errorMessages = {
                                        errorNoRetailerType: $("#errorNoType").val(),
                                        errorBadPrice: $("#errorBadPrice").val(),
                                        errorBadPriceShipping: $("#errorBadPriceShipping").val(),
                                        errorInvalidUrl: $("#errorInvalidUrl").val(),
                                        errorSubmission: $("#errorSubmission").val(),
                                        errorEmptyFields: $("#errorEmptyFields").val(),
                                        errorMissingCity: $("#errorMissingCity").val(),
                                        errorEmptyUrl: $("#errorEmptyUrl").val(),
                                        thankFeedback: $("#thankFeedback").val(),
                                      };

                                      var feedbackFormContent = document.querySelector("#feedbackForm");
                                      var signUpContainer = document.querySelector("#signUpForm");
                                      var feedbackFormFinalStateContainer =
                                        document.querySelector("#feedbackFormFinalState");

                                      var states = JSON.parse(statesList);
                                      var offlineStores = JSON.parse(offlineStoresList);

                                      var offlineStoresEnabled = !isCurrentGlOnlineOnly;
                                      var currentDate = getCurrentDay();
                                      var currentMonth = getCurrentMonth();
                                      var currentYear = getCurrentYear();

                                      if (isCustomerRecognized) {
                                        feedbackFormContent.style["display"] = "block";
                                        signUpContainer.style["display"] = "none";

                                        var enableOnlineStoreRadio =
                                          document.querySelector("#pricingFeedback_onlineRadio");
                                        var enableOfflineStoreRadio = document.querySelector(
                                          "#pricingFeedback_offlineRadio",
                                        );
                                        var onlineStoreInputForm =
                                          document.querySelector("#pricingFeedback_onlineInput");
                                        var offlineStoreInputForm = document.querySelector(
                                          "#pricingFeedback_offlineInput",
                                        );
                                        var offlineStateSelect = document.querySelector("#offlineState");
                                        var offlineStoreSelect = document.querySelector("#offlineStoreName");
                                        var submitButton = document.querySelector("#pricingFeedback_submit");
                                        var onlineUrl = document.querySelector("#onlineUrl");
                                        var onlinePriceRaw = document.querySelector("#onlinePriceRaw");
                                        var onlineShippingRaw = document.querySelector("#onlineShippingRaw");
                                        var onlineDay = document.querySelector("#onlineDay");
                                        var onlineMonth = document.querySelector("#onlineMonth");
                                        var onlineYear = document.querySelector("#onlineYear");
                                        var onlineCalendar = document.querySelector("#onlineCalendar");
                                        var note1 = document.querySelector("#note1");

                                        var offlineRadioContainer = document.querySelector("#offlineRadioContainer");
                                        var offlineStoreName = document.querySelector("#offlineStoreName");
                                        var offlineCity = document.querySelector("#offlineCity");
                                        var offlineState = document.querySelector("#offlineState");
                                        var offlinePriceRaw = document.querySelector("#offlinePriceRaw");
                                        var offlineDay = document.querySelector("#offlineDay");
                                        var offlineMonth = document.querySelector("#offlineMonth");
                                        var offlineYear = document.querySelector("#offlineYear");
                                        var offlineCalendar = document.querySelector("#offlineCalendar");

                                        var thankYouDiv = document.querySelector("#pricingFeedback_thank");
                                        var errorDiv = document.querySelector("#pricingFeedback_error");
                                        var loadingGifDiv = document.querySelector("#loading");
                                        var offlineStateMain = document.querySelector("#offlineStateMain");
                                        note1 = document.querySelector("#note1");
                                        setCalenderOrderBasedOnCountry(country);

                                        setInitialStates(
                                          onlineMonth,
                                          currentMonth,
                                          offlineMonth,
                                          onlineDay,
                                          currentDate,
                                          offlineDay,
                                          onlineYear,
                                          currentYear,
                                          offlineYear,
                                          onlineStoreInputForm,
                                          offlineStoreInputForm,
                                          enableOfflineStoreRadio,
                                          enableOnlineStoreRadio,
                                          onlineCalendar,
                                          offlineCalendar,
                                          offlineStateMain,
                                          offlineState,
                                          note1,
                                        );

                                        createPermalinkContainer(asin, hostname);

                                        for (let state of states) {
                                          var option = document.createElement("option");
                                          option.setAttribute("value", state["value"]);
                                          option.innerText = state["name"];
                                          offlineStateSelect.appendChild(option);
                                        }

                                        offlineStores.forEach(function (store) {
                                          var option = document.createElement("option");
                                          option.value = store;
                                          option.textContent = store;
                                          offlineStoreSelect.appendChild(option);
                                        });

                                        function setCSSForFeedbackForm() {
                                          const labels = document.querySelectorAll(".grid-label");
                                          let maxWidth = 0;

                                          labels.forEach((label) => {
                                            maxWidth = Math.max(maxWidth, label.clientWidth);
                                          });

                                          labels.forEach((label) => {
                                            label.style.minWidth = maxWidth + "px";
                                          });
                                        }

                                        $("#pricingFeedback_onlineRadio").click(function () {
                                          onlineStoreInputForm.style["display"] = "block";
                                          offlineStoreInputForm.style["display"] = "none";
                                          note1.style["display"] = "block";
                                          setCSSForFeedbackForm();
                                        });

                                        function handleInput(element, alert) {
                                          if (element.hasClass("a-form-error")) {
                                            alert.style["display"] = "none";
                                            element.removeClass("a-form-error").addClass("a-form-normal");
                                            element.removeAttr("aria-invalid");
                                            element.removeAttr("aria-describedby");
                                          }
                                        }

                                        $("#onlineUrl").change(function () {
                                          var urlAlert = document.querySelector("#onlineUrl-missing-alert");
                                          handleInput($(this), urlAlert);
                                        });

                                        $("#onlinePriceRaw").change(function () {
                                          var priceAlertOnline = document.querySelector("#onlinePrice-missing-alert");
                                          handleInput($(this), priceAlertOnline);
                                        });
                                        $("#onlineShippingRaw").change(function () {
                                          var priceShippingAlertOnline = document.querySelector(
                                            "#onlineShippingPrice-missing-alert",
                                          );
                                          handleInput($(this), priceShippingAlertOnline);
                                        });
                                        $("#offlineCity").change(function () {
                                          var cityAlert = document.querySelector("#offlineCity-missing-alert");
                                          handleInput($(this), cityAlert);
                                        });

                                        $("#offlineStoreName").change(function () {
                                          var storeAlert = document.querySelector("#offlineStoreName-missing-alert");
                                          handleInput($(this), storeAlert);
                                        });

                                        $("#offlinePriceRaw").change(function () {
                                          var priceAlertOffline = document.querySelector(
                                            "#offlinePriceRaw-missing-alert",
                                          );
                                          handleInput($(this), priceAlertOffline);
                                        });

                                        $("#pricingFeedback_offlineRadio").click(function () {
                                          onlineStoreInputForm.style["display"] = "none";
                                          offlineStoreInputForm.style["display"] = "block";
                                          note1.style["display"] = "block";
                                          setCSSForFeedbackForm();
                                        });

                                        if (!offlineStoresEnabled) {
                                          offlineRadioContainer.style["display"] = "none";
                                          offlineStoreInputForm.style["display"] = "none";
                                        }

                                        $("#pfw_submit").click(function () {
                                          var feedbackSubmitted = submitFeedback(
                                            customerId,
                                            marketplaceId,
                                            asin,
                                            productPrice,
                                            onlineStoreInputForm,
                                            offlineStoreInputForm,
                                            onlineUrl.value,
                                            onlinePriceRaw.value,
                                            onlineShippingRaw.value,
                                            onlineDay.value,
                                            onlineMonth.value,
                                            offlineStoreName.value,
                                            offlineCity.value,
                                            offlineState.value,
                                            offlinePriceRaw.value,
                                            offlineDay.value,
                                            offlineMonth.value,
                                            thankYouDiv,
                                            errorDiv,
                                            submitButton,
                                            loadingGifDiv,
                                            errorMessages,
                                          );
                                          if (feedbackSubmitted !== null && !feedbackSubmitted) {
                                            errorDiv.innerHTML = getErrorDiv(errorMessages.errorSubmission);
                                          }
                                        });

                                        A.on("a:popover:beforeHide:pricingFeedback-modal-content", function (data) {
                                          resetModalToInitialState(currentMonth, currentDate, currentYear);
                                        });
                                      } else {
                                        feedbackFormContent.style["display"] = "none";
                                        signUpContainer.style["display"] = "block";

                                        var authPortalLink = getAuthenticationPageURL(asin, hostname);
                                        $("#signUpForm").one("click", function () {
                                          window.location = encodeURI(authPortalLink);
                                        });
                                      }

                                      function setCalenderOrderBasedOnCountry(country) {
                                        var monthSections = document.getElementsByClassName("monthSection");
                                        var daySections = document.getElementsByClassName("daySection");
                                        var yearSections = document.getElementsByClassName("yearSection");

                                        var firstDelimiters = document.getElementsByClassName("firstDelimiter");
                                        var secondDelimiters = document.getElementsByClassName("secondDelimiter");

                                        if (country === "US") {
                                          for (let i = 0; i < 2; i++) {
                                            monthSections[i].style["order"] = "0";
                                            firstDelimiters[i].style["order"] = "1";
                                            daySections[i].style["order"] = "2";
                                            secondDelimiters[i].style["order"] = "3";
                                            yearSections[i].style["order"] = "4";
                                          }
                                        } else if (country === "JP") {
                                          for (let i = 0; i < 2; i++) {
                                            yearSections[i].style["order"] = "-1";
                                            secondDelimiters[i].style["order"] = "0";
                                            monthSections[i].style["order"] = "1";
                                            firstDelimiters[i].style["order"] = "2";
                                            daySections[i].style["order"] = "3";
                                          }
                                        } else {
                                          for (let i = 0; i < 2; i++) {
                                            daySections[i].style["order"] = "-1";
                                            firstDelimiters[i].style["order"] = "0";
                                            monthSections[i].style["order"] = "1";
                                            secondDelimiters[i].style["order"] = "2";
                                            yearSections[i].style["order"] = "3";
                                          }
                                        }
                                      }

                                      function createPermalinkContainer(asin, hostname) {
                                        var permalinkHref = getPermalink(hostname, asin);
                                        var permalinkContainer = document.querySelector("#permalink");
                                        var permalink = document.createElement("a");
                                        permalink.setAttribute("href", permalinkHref);
                                        permalink.innerText = permalinkHref;
                                        permalinkContainer.append(permalink);
                                      }

                                      function getPermalink(server, asin) {
                                        return server + "/dp/" + asin;
                                      }

                                      function triggerPricingFeedback(
                                        customerId,
                                        marketplaceId,
                                        asin,
                                        price,
                                        retailerType,
                                        retailerUrl,
                                        retailerName,
                                        retailerCity,
                                        retailerState,
                                        retailerPrice,
                                        retailerShipping,
                                        sampleDate,
                                      ) {
                                        var dataCart = {
                                          ourPrice: parseInt(price),
                                          retailer: {
                                            type: retailerType,
                                            name: retailerName,
                                            city: retailerCity,
                                            state: retailerState,
                                            price: parseInt(retailerPrice),
                                            shippingCost: parseInt(retailerShipping),
                                            url: retailerUrl,
                                          },
                                          date: sampleDate + "T00:00:00.102Z",
                                        };
                                        return new Promise((resolve, reject) => {
                                          A.$.ajax(
                                            $("#aapiEndpoint").val() +
                                              "/api/marketplaces/" +
                                              marketplaceId +
                                              "/products/" +
                                              asin +
                                              "/feedback/pricing",
                                            {
                                              type: "POST",
                                              headers: {
                                                "Accept-Language": "en-US",
                                                Accept:
                                                  'application/vnd.com.amazon.api+json; type="product.feedback.pricing/v1"',
                                                "x-amzn-encrypted-slate-token": document.querySelector(
                                                  'meta[name="encrypted-slate-token"]',
                                                )?.content,
                                                "Content-Type":
                                                  'application/vnd.com.amazon.api+json; type="product.feedback.pricing.request/v1"',
                                                "x-api-csrf-token": csrf,
                                              },
                                              data: JSON.stringify(dataCart),
                                              xhrFields: {
                                                withCredentials: true,
                                              },

                                              success: function (responseContent) {
                                                $("#pricingFeedback_thankcontent").innerText =
                                                  "Success! " + responseContent.toString();
                                                resolve();
                                              },

                                              error: function (err) {
                                                $("#pricingFeedback_thankcontent").innerText =
                                                  "Error! " + err.toString();
                                                reject();
                                              },
                                            },
                                          );
                                        });
                                      }

                                      function getAuthenticationPageURL(asin, hostname) {
                                        return (
                                          hostname +
                                          "/ap/signin?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select&openid.identity=http://specs.openid.net/auth/2.0/identifier_select&openid.mode=checkid_setup&openid.ns=http://specs.openid.net/auth/2.0&openid.ns.pape=http://specs.openid.net/extensions/pape/1.0&openid.pape.max_auth_age=0&openid.return_to=https://www.amazon.com/dp//"
                                        );
                                      }

                                      function getCurrentDay() {
                                        var date = new Date();
                                        return date.getDate().toString();
                                      }

                                      function getCurrentMonth() {
                                        var date = new Date();
                                        return (date.getMonth() + 1).toString();
                                      }

                                      function getCurrentYear() {
                                        var date = new Date();
                                        return date.getFullYear().toString();
                                      }

                                      function resetAlerts() {
                                        const elements = [
                                          { id: "#onlineUrl", alertId: "#onlineUrl-missing-alert" },
                                          { id: "#onlinePriceRaw", alertId: "#onlinePrice-missing-alert" },
                                          { id: "#onlineShippingRaw", alertId: "#onlineShippingPrice-missing-alert" },
                                          { id: "#offlineStoreName", alertId: "#offlineStoreName-missing-alert" },
                                          { id: "#offlineCity", alertId: "#offlineCity-missing-alert" },
                                          { id: "#offlinePriceRaw", alertId: "#offlinePriceRaw-missing-alert" },
                                        ];

                                        for (const { id, alertId } of elements) {
                                          const element = document.querySelector(id);
                                          const alertElement = document.querySelector(alertId);

                                          if (element && alertElement) {
                                            element.classList.remove("a-form-error", "a-form-normal");
                                            alertElement.style.display = "none";
                                          }
                                        }
                                      }

                                      function setInitialStates(
                                        onlineMonth,
                                        currentMonth,
                                        offlineMonth,
                                        onlineDay,
                                        currentDate,
                                        offlineDay,
                                        onlineYear,
                                        currentYear,
                                        offlineYear,
                                        onlineStoreInputForm,
                                        offlineStoreInputForm,
                                        enableOfflineStoreRadio,
                                        enableOnlineStoreRadio,
                                        onlineCalendar,
                                        offlineCalendar,
                                        offlineStateMain,
                                        offlineState,
                                        note1,
                                      ) {
                                        onlineMonth.defaultValue = currentMonth;
                                        offlineMonth.defaultValue = currentMonth;
                                        onlineDay.defaultValue = currentDate;
                                        offlineDay.defaultValue = currentDate;
                                        onlineYear.defaultValue = currentYear;
                                        offlineYear.defaultValue = currentYear;

                                        var isStateRequired = document.querySelector("#isStateRequired");

                                        var stateLabel = document.querySelector("#stateLabel");
                                        var stateValue = document.querySelector("#stateValue");
                                        var isStoreRequired = document.querySelector("#isStoreRequired");

                                        var storeLabel = document.querySelector("#storeLabel");
                                        var storeValue = document.querySelector("#storeValue");

                                        if (isStateRequired.value === "false") {
                                          stateLabel.style["display"] = "none";
                                          stateValue.style["display"] = "none";
                                        }
                                        if (isStoreRequired.value === "false") {
                                          storeLabel.style["display"] = "none";
                                          storeValue.style["display"] = "none";
                                        }

                                        note1.style["display"] = "none";

                                        resetAlerts();

                                        var onlineMonthOption = document.querySelector("#onlineMonthOptionDefault");
                                        onlineMonthOption.innerText = currentMonth;

                                        var onlineMonthPrompt = document.querySelector("#onlineMonthPrompt");
                                        onlineMonthPrompt.innerText = currentMonth;

                                        var offlineMonthOption = document.querySelector("#offlineMonthOptionDefault");
                                        offlineMonthOption.innerText = currentMonth;

                                        var offlineMonthPrompt = document.querySelector("#offlineMonthPrompt");
                                        offlineMonthPrompt.innerText = currentMonth;

                                        var onlineDateOption = document.querySelector("#onlineDateOptionDefault");
                                        onlineDateOption.innerText = currentDate;

                                        var onlineDayPrompt = document.querySelector("#onlineDatePrompt");
                                        onlineDayPrompt.innerText = currentDate;

                                        var offlineDateOption = document.querySelector("#offlineDateOptionDefault");
                                        offlineDateOption.innerText = currentDate;

                                        var offlineDayPrompt = document.querySelector("#offlineDatePrompt");
                                        offlineDayPrompt.innerText = currentDate;

                                        var onlineYearOption = document.querySelector("#onlineYearOptionDefault");
                                        onlineYearOption.setAttribute("href", currentYear);
                                        onlineYearOption.innerText = currentYear;

                                        var onlineYearPrompt = document.querySelector("#onlineYearPrompt");
                                        onlineYearPrompt.innerText = currentYear;

                                        var offlineYearOption = document.querySelector("#offlineYearOptionDefault");
                                        offlineYearOption.setAttribute("href", currentYear);
                                        offlineYearOption.innerText = currentYear;

                                        var offlineYearPrompt = document.querySelector("#offlineYearPrompt");
                                        offlineYearPrompt.innerText = currentYear;

                                        if (
                                          onlineMonth.children &&
                                          offlineMonth.children &&
                                          onlineDay.children &&
                                          offlineDay.children
                                        ) {
                                          onlineMonth.children[currentMonth].setAttribute("selected", currentMonth);
                                          offlineMonth.children[currentMonth].setAttribute("selected", currentMonth);
                                          onlineDay.children[currentDate].setAttribute("selected", currentDate);
                                          offlineDay.children[currentDate].setAttribute("selected", currentDate);
                                        }

                                        onlineStoreInputForm.style["display"] = "none";
                                        offlineStoreInputForm.style["display"] = "none";

                                        enableOfflineStoreRadio.checked = false;
                                        enableOnlineStoreRadio.checked = false;

                                        if (onlineCalendar.style && offlineCalendar.style) {
                                          onlineCalendar.style["display"] = "block";
                                          offlineCalendar.style["display"] = "block";
                                        }
                                      }

                                      function submitFeedback(
                                        customerId,
                                        marketplaceId,
                                        asin,
                                        price,
                                        onlineStoreInputForm,
                                        offlineStoreInputForm,
                                        onlineUrl,
                                        onlinePriceRaw,
                                        onlineShippingRaw,
                                        onlineDay,
                                        onlineMonth,
                                        offlineStoreName,
                                        offlineCity,
                                        offlineState,
                                        offlinePriceRaw,
                                        offlineDay,
                                        offlineMonth,
                                        thankYouDiv,
                                        errorDiv,
                                        submitButton,
                                        loadingGifDiv,
                                        errorMessages,
                                      ) {
                                        errorDiv.innerHTML = "";

                                        let cleanRetailerType,
                                          cleanRetailerUrl,
                                          cleanRetailerName,
                                          cleanRetailerCity,
                                          cleanRetailerState,
                                          cleanRetailerPrice,
                                          cleanRetailerShipping,
                                          cleanSampleDate;
                                        var currentYear = getCurrentYear();
                                        if (onlineStoreInputForm.style["display"] === "block") {
                                          var onlineValidity = validateOnlineInputs(
                                            onlineUrl,
                                            onlinePriceRaw,
                                            onlineShippingRaw,
                                            errorMessages,
                                          );
                                          if (onlineValidity.valid) {
                                            cleanRetailerType = "ONLINE";
                                            cleanRetailerUrl = truncate(trim(onlineUrl), 300);
                                            cleanRetailerPrice = trim(onlinePriceRaw);
                                            cleanRetailerShipping = trim(onlineShippingRaw);
                                            if (!cleanRetailerShipping) {
                                              cleanRetailerShipping = "0";
                                            }
                                            cleanSampleDate = formatDate(
                                              currentYear,
                                              onlineDay ? onlineDay : getCurrentDay(),
                                              onlineMonth ? onlineMonth : getCurrentMonth(),
                                            );
                                          } else {
                                            if (onlineValidity.error) {
                                              errorDiv.innerHTML = getErrorDiv(onlineValidity.error);
                                            }
                                            return null;
                                          }
                                        } else if (offlineStoreInputForm.style["display"] === "block") {
                                          var offlineValidity = validateOfflineInputs(
                                            offlineStoreName,
                                            offlineCity,
                                            offlineState,
                                            offlinePriceRaw,
                                            errorMessages,
                                            marketplaceId,
                                          );
                                          if (offlineValidity.valid) {
                                            cleanRetailerType = "OFFLINE";
                                            cleanRetailerName = truncate(trim(offlineStoreName), 100);
                                            cleanRetailerCity = truncate(trim(offlineCity), 100);
                                            cleanRetailerState = truncate(trim(offlineState), 100);
                                            cleanRetailerPrice = trim(offlinePriceRaw);
                                            cleanRetailerShipping = "0";
                                            cleanSampleDate = formatDate(
                                              currentYear,
                                              offlineDay ? offlineDay : getCurrentDay(),
                                              offlineMonth ? offlineMonth : getCurrentMonth(),
                                            );
                                          } else {
                                            if (offlineValidity.error) {
                                              errorDiv.innerHTML = getErrorDiv(offlineValidity.error);
                                            }
                                            return null;
                                          }
                                        } else {
                                          errorDiv.innerHTML = getErrorDiv(errorMessages.errorNoRetailerType);
                                          return null;
                                        }

                                        loadingGifDiv.innerHTML = getLoadingGifDiv();

                                        if (price) price = parseFloat(price);
                                        return triggerPricingFeedback(
                                          customerId,
                                          marketplaceId,
                                          asin,
                                          price,
                                          cleanRetailerType,
                                          cleanRetailerUrl,
                                          cleanRetailerName,
                                          cleanRetailerCity,
                                          cleanRetailerState,
                                          parseFloat(cleanRetailerPrice),
                                          parseFloat(cleanRetailerShipping),
                                          cleanSampleDate,
                                        )
                                          .then((response) => {
                                            errorDiv.innerHTML = "";
                                            thankYouDiv.innerHTML = getThankYouDiv(errorMessages.thankFeedback);

                                            submitButton.style.display = "none";
                                            return response;
                                          })
                                          .catch((err) => {
                                            errorDiv.innerHTML = getErrorDiv(errorMessages.errorSubmission);
                                            return null;
                                          });
                                      }

                                      function showError(element, elementAlert) {
                                        elementAlert.style["display"] = "block";
                                        element.classList.add("a-form-error");
                                      }

                                      function isUrlPresentAndValid(url) {
                                        const onlineUrlElement = document.querySelector("#onlineUrl");
                                        const onlineUrlAlertDiv = document.querySelector("#onlineUrl-missing-alert");
                                        const urlAlert = document.querySelector("#urlAlert");

                                        if (isEmptyValue(url)) {
                                          showError(onlineUrlElement, onlineUrlAlertDiv);
                                          $("#onlineUrl").attr("aria-invalid", "true");
                                          $("#onlineUrl").attr("aria-describedby", "onlineUrl-missing-alert");
                                          urlAlert.innerHTML = "Enter url";
                                          $("#onlineUrl").attr("aria-invalid", "true");

                                          return false;
                                        }
                                        if (!isValidUrl(url)) {
                                          showError(onlineUrlElement, onlineUrlAlertDiv);
                                          $("#onlineUrl").attr("aria-invalid", "true");
                                          $("#onlineUrl").attr("aria-describedby", "onlineUrl-missing-alert");
                                          urlAlert.innerHTML = "Please enter a valid URL.";
                                          return false;
                                        }

                                        return true;
                                      }

                                      function isOnlinePriceThere(price) {
                                        const onlinePriceElement = document.querySelector("#onlinePriceRaw");
                                        const onlinePriceElementAlert =
                                          document.querySelector("#onlinePrice-missing-alert");
                                        const priceAlertOnline = document.querySelector("#priceAlertOnline");
                                        if (isEmptyValue(price) || !isNumericPrice(price)) {
                                          $("#onlinePriceRaw").attr("aria-invalid", "true");
                                          showError(onlinePriceElement, onlinePriceElementAlert);
                                          $("#onlinePriceRaw").attr("aria-describedby", "onlinePrice-missing-alert");
                                          priceAlertOnline.innerHTML = "Please only use numbers in the Price field.";
                                          return false;
                                        }
                                        return true;
                                      }

                                      function isOnlineShippingPriceValid(shippingPrice) {
                                        const onlineShippingPriceElement = document.querySelector("#onlineShippingRaw");
                                        const onlineShippingPriceElementAlert = document.querySelector(
                                          "#onlineShippingPrice-missing-alert",
                                        );
                                        const priceShippingAlertOnline =
                                          document.querySelector("#priceShippingAlertOnline");
                                        if (!isEmptyValue(shippingPrice) && !isNumericPrice(shippingPrice)) {
                                          $("#onlineShippingRaw").attr("aria-invalid", "true");
                                          showError(onlineShippingPriceElement, onlineShippingPriceElementAlert);
                                          $("#onlineShippingRaw").attr(
                                            "aria-describedby",
                                            "onlineShippingPrice-missing-alert",
                                          );
                                          priceShippingAlertOnline.innerHTML =
                                            "Please only use numbers in the Price and Shipping fields.";
                                          return false;
                                        }

                                        return true;
                                      }

                                      function validateOnlineInputs(url, onlinePrice, onlineShipping, errorMessages) {
                                        const isValidUrl = isUrlPresentAndValid(url);
                                        const isPriceValid = isOnlinePriceThere(onlinePrice);
                                        const isShippingValid = isOnlineShippingPriceValid(onlineShipping);

                                        if (!isValidUrl || !isPriceValid || !isShippingValid) {
                                          return { valid: false };
                                        }

                                        return { valid: true };
                                      }

                                      function isOfflineStoreNameValid(offlineStoreName) {
                                        const offlineStoreElement = document.querySelector("#offlineStoreName");
                                        const offlineStoreElementAlert = document.querySelector(
                                          "#offlineStoreName-missing-alert",
                                        );
                                        const storeAlert = document.querySelector("#storeAlert");
                                        if (isEmptyValue(offlineStoreName)) {
                                          $("#offlineStoreName").attr("aria-invalid", "true");
                                          $("#offlineStoreName").attr(
                                            "aria-describedby",
                                            "offlineStoreName-missing-alert",
                                          );
                                          showError(offlineStoreElement, offlineStoreElementAlert);
                                          storeAlert.innerHTML = "Please select where the product was sold.";
                                          return false;
                                        }

                                        return true;
                                      }

                                      function isOfflineCityNameValid(offlineCity) {
                                        const offlineCityElement = document.querySelector("#offlineCity");
                                        const offlineCityElementAlert =
                                          document.querySelector("#offlineCity-missing-alert");
                                        const cityAlert = document.querySelector("#cityAlert");
                                        if (isEmptyValue(offlineCity)) {
                                          $("#offlineCity").attr("aria-invalid", "true");
                                          $("#offlineCity").attr("aria-describedby", "offlineCity-missing-alert");
                                          showError(offlineCityElement, offlineCityElementAlert);
                                          cityAlert.innerHTML = "Please specify the city";

                                          return false;
                                        }

                                        return true;
                                      }

                                      function isOfflinePriceValid(offlinePrice) {
                                        const offlinePriceElement = document.querySelector("#offlinePriceRaw");
                                        const offlinePriceElementAlert = document.querySelector(
                                          "#offlinePriceRaw-missing-alert",
                                        );
                                        const priceAlertOffline = document.querySelector("#priceAlertOffline");

                                        if (isEmptyValue(offlinePrice) || !isNumericPrice(offlinePrice)) {
                                          $("#offlinePriceRaw").attr("aria-invalid", "true");
                                          $("#offlinePriceRaw").attr(
                                            "aria-describedby",
                                            "offlinePriceRaw-missing-alert",
                                          );
                                          showError(offlinePriceElement, offlinePriceElementAlert);
                                          priceAlertOffline.innerHTML = "Please only use numbers in the Price field.";
                                          return false;
                                        }
                                        return true;
                                      }

                                      function validateOfflineInputs(
                                        offlineStoreName,
                                        offlineCity,
                                        offlineState,
                                        offlinePrice,
                                        errorMessages,
                                        marketPlaceId,
                                      ) {
                                        const isStoreNameValid = isOfflineStoreNameValid(offlineStoreName);
                                        const isOfflineCityValid = isOfflineCityNameValid(offlineCity);
                                        const isPriceValid = isOfflinePriceValid(offlinePrice);
                                        if (!isStoreNameValid || !isOfflineCityValid || !isPriceValid) {
                                          return { valid: false };
                                        }

                                        return { valid: true };
                                      }

                                      function getErrorDiv(errorMsg) {
                                        return (
                                          '<div class="a-box a-alert a-alert-error a-spacing-mini" aria-live="assertive" role="alert">\n' +
                                          '              <div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">' +
                                          errorMsg +
                                          "</div></div>\n" +
                                          "          </div>"
                                        );
                                      }

                                      function getThankYouDiv(thankMsg) {
                                        return (
                                          '<div class="a-box a-alert a-alert-success a-spacing-mini">' +
                                          '<div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">' +
                                          thankMsg +
                                          "</div></div></div>\n" +
                                          "<p></p><hr/><p></p>"
                                        );
                                      }

                                      function getLoadingGifDiv() {
                                        return '<img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/communities/tags/snake._CB485935600_.gif" class="loadingSymbolImage" width="16" height="16" border="0"/>';
                                      }

                                      function isValidUrl(url) {
                                        if (!url) {
                                          return false;
                                        }
                                        var encodedUrl = encodeURI(url);
                                        return encodedUrl.match(
                                          /^(https?:\/\/)?(([a-z0-9-]|%[A-F0-9]{2})+\.)+(([a-z]|%[A-F0-9]{2})([a-z0-9]|%[A-F0-9]{2})*)(:[0-9]+)?(\/[a-z0-9;:,~!+#@&=%\/$\.?_-]+)?$/i,
                                        );
                                      }

                                      function isNumericPrice(price) {
                                        if (!price) {
                                          return false;
                                        }
                                        return price.match(/^([0-9]+\.?[0-9]*)$|^([0-9]*\.[0-9]+)$/);
                                      }

                                      function isEmptyValue(input) {
                                        return !input || input.length === 0 || input.match(/^\s*$/);
                                      }

                                      function truncate(input, length) {
                                        if (!input) {
                                          return "";
                                        } else {
                                          return input.substr(0, length);
                                        }
                                      }

                                      function formatDate(year, date, month) {
                                        return year + "-" + month + "-" + date;
                                      }

                                      function trim(input) {
                                        if (!input) {
                                          return "";
                                        } else {
                                          return input.trim();
                                        }
                                      }

                                      function resetModalToInitialState(currentMonth, currentDate, currentYear) {
                                        var enableOnlineStoreRadio =
                                          document.querySelector("#pricingFeedback_onlineRadio");
                                        var enableOfflineStoreRadio = document.querySelector(
                                          "#pricingFeedback_offlineRadio",
                                        );
                                        var onlineStoreInputForm =
                                          document.querySelector("#pricingFeedback_onlineInput");
                                        var offlineStoreInputForm = document.querySelector(
                                          "#pricingFeedback_offlineInput",
                                        );
                                        var onlineUrl = document.querySelector("#onlineUrl");
                                        var onlinePriceRaw = document.querySelector("#onlinePriceRaw");
                                        var onlineShippingRaw = document.querySelector("#onlineShippingRaw");
                                        var onlineDay = document.querySelector("#onlineDay");
                                        var onlineMonth = document.querySelector("#onlineMonth");
                                        var onlineYear = document.querySelector("#onlineYear");
                                        var onlineCalendar = document.querySelector("#onlineCalendar");
                                        var note1 = document.querySelector("#note1");

                                        var offlineStoreName = document.querySelector("#offlineStoreName");
                                        var offlineCity = document.querySelector("#offlineCity");
                                        var offlineState = document.querySelector("#offlineState");
                                        var offlinePriceRaw = document.querySelector("#offlinePriceRaw");
                                        var offlineDay = document.querySelector("#offlineDay");
                                        var offlineMonth = document.querySelector("#offlineMonth");
                                        var offlineYear = document.querySelector("#offlineYear");
                                        var offlineCalendar = document.querySelector("#offlineCalendar");

                                        var thankYouDiv = document.querySelector("#pricingFeedback_thank");
                                        var errorDiv = document.querySelector("#pricingFeedback_error");
                                        var submitButton = document.querySelector("#pricingFeedback_submit");
                                        var loadingGifDiv = document.querySelector("#loading");

                                        var stateDefaultOption = document.querySelector("#stateDefaultOption");
                                        var stateDefaultPrompt = document.querySelector("#stateDefaultPrompt");
                                        var offlineStateMain = document.querySelector("#offlineStateMain");
                                        var storeDefaultOption = document.querySelector("#storeDefaultOption");
                                        var storeDefaultPrompt = document.querySelector("#storeDefaultPrompt");
                                        if (thankYouDiv) {
                                          thankYouDiv.innerHTML = "";
                                        }
                                        if (errorDiv) {
                                          errorDiv.innerHTML = "";
                                        }
                                        if (loadingGifDiv) {
                                          loadingGifDiv.innerHTML = "";
                                        }
                                        if (submitButton) {
                                          submitButton.style.display = "block";
                                        }
                                        onlineUrl.value = "";
                                        onlinePriceRaw.value = "";
                                        onlineShippingRaw.value = "";
                                        offlineStoreName.value = "";
                                        offlineCity.value = "";
                                        offlineState.value = "";
                                        offlinePriceRaw.value = "";

                                        stateDefaultOption.innerHTML = $("#selectProvince").val();
                                        stateDefaultPrompt.innerHTML = $("#selectProvince").val();

                                        storeDefaultOption.innerHTML =
                                          "Enter the store name where you found this product";
                                        storeDefaultPrompt.innerHTML =
                                          "Enter the store name where you found this product";

                                        setInitialStates(
                                          onlineMonth,
                                          currentMonth,
                                          offlineMonth,
                                          onlineDay,
                                          currentDate,
                                          offlineDay,
                                          onlineYear,
                                          currentYear,
                                          offlineYear,
                                          onlineStoreInputForm,
                                          offlineStoreInputForm,
                                          enableOfflineStoreRadio,
                                          enableOnlineStoreRadio,
                                          onlineCalendar,
                                          offlineCalendar,
                                          offlineStateMain,
                                          offlineState,
                                          note1,
                                        );
                                      }
                                    });

/* --- inline script #208 --- */
P.when("jQuery").execute(function ($) {
                      $("#productDescription table").each(function () {
                        var width = $(this).attr("width");
                        if (width) width += "px";
                        else width = "auto";
                        $(this).css("width", width);

                        var padding = $(this).attr("cellpadding");
                        if (padding) padding += "px";
                        else padding = "0px";
                        $(this).css("padding", padding);
                      });
                    });

/* --- inline script #209 --- */
if (window.mix_csa) {
                    window.mix_csa(
                      '[cel_widget_id="vse-vw-dp-card_DetailPage_5"]',
                      "#CardInstance03bImEydmqkoqeBz1eLq4w",
                    )("mark", "bb");
                  }

/* --- inline script #210 --- */
if (window.uet) {
                    window.uet("bb", "vse-vw-dp-card_DetailPage_5", { wb: 1 });
                  }

/* --- inline script #211 --- */
var postCsmCountMetric = function postCountMetric(metricName, value) {
                          if (window.ue) {
                            ue.count(metricName, value);
                          }
                        };
                        try {
                          P.when("A").execute("vse-vw-dp-card", function (A) {
                            var widget = A.$(".vse-vw-dp");
                            if (widget.length) {
                              var isMetricRecorded = false;
                              var widgetInViewMetrics = function widgetInViewMetrics() {
                                if (isMetricRecorded) {
                                  A.off("scroll", widgetInViewMetrics);
                                  return;
                                }
                                if (A.onScreen(widget, 0)) {
                                  var requestId = window.ue ? window.ue.id : "";
                                  if (false) {
                                    var successCallback = function () {
                                      postCsmCountMetric(
                                        "ive:csm:widgetScrolledInView:weblabTriggerBatchRequestSuccess:vse-vw-dp-card",
                                        1,
                                      );
                                    };
                                    var errorCallback = function () {
                                      postCsmCountMetric(
                                        "ive:csm:widgetScrolledInView:weblabTriggerBatchRequestError:vse-vw-dp-card",
                                        1,
                                      );
                                    };
                                    postCsmCountMetric(
                                      "ive:csm:widgetScrolledInView:weblabTriggerBatchRequest:vse-vw-dp-card",
                                      1,
                                    );
                                    var payload = { weblabNames: [], requestId: requestId };
                                    A.ajax("/vap/ew/weblabtrigger/batch/v2", {
                                      params: payload,
                                      paramsFormat: "json",
                                      crossDomain: true,
                                      method: "POST",
                                      withCredentials: true,
                                      contentType: "application/json",
                                      success: successCallback,
                                      error: errorCallback,
                                    });
                                    isMetricRecorded = true;
                                  }
                                  if (false) {
                                    if (window.ue.trigger) {
                                      var triggerInCsmWeblab = "";
                                      if (triggerInCsmWeblab.indexOf(":") !== -1) {
                                        var weblabNameAndTreatment = triggerInCsmWeblab.split(":");
                                        window.ue.trigger(weblabNameAndTreatment[0], weblabNameAndTreatment[1]);
                                        postCsmCountMetric(
                                          "ive:csm:widgetScrolledInView:csmWeblabTrigger:vse-vw-dp-card:",
                                          1,
                                        );
                                      }
                                    }
                                  }
                                }
                              };
                              A.on("scroll", widgetInViewMetrics);
                            }
                          });
                        } catch (exception) {
                          postCsmCountMetric("vse-vw-dp-card" + "weblabTrigger:exception");
                          if (window.ueLogError) {
                            var message = "Exception when trigger Weblab on scroll into the view ";
                            if (false) {
                              message += "";
                            }
                            var additionalInfo = {
                              logLevel: "ERROR",
                              attribution: "ive-trigger-on-scroll",
                              message: message,
                            };
                            window.ueLogError(exception, additionalInfo);
                          }
                        }

/* --- inline script #212 --- */
{"marketplaceId":"ATVPDKIKX0DER","image":"image_url","shareButton":"SHARE","copySuccessText":"Link Copied!","clientPrefix":"vftphero","useShareFramework":false,"description":"video_description","id":"vftphero-social-share-128972c8-9d5f-482f-91e6-e9dd0b46ea28","title":"video_title","pageLevelData":{"deviceTypeRef":"dt","clientRef":"lb"},"shareWithFriendsPrompt":"Share this video with friends","url":"https://www.amazon.com/gp/product/B01LBI1BIO"}

/* --- inline script #213 --- */
{"id":"vftphero-feedback-4a18333e-2f29-481b-9b9f-90a1353d59b4","isMobile":false,"feedbackEndpoint":"https://9eya4arjbh.execute-api.us-east-1.amazonaws.com/prod/reportvideo","pageAsin":"B01LBI1BIO","contentId":"B01LBI1BIO","customerId":"0","marketplaceId":"ATVPDKIKX0DER","pageStateName":"vftphero-feedback-4a18333e-2f29-481b-9b9f-90a1353d59b4-feedback-ps","clientPrefix":"vftphero","popoverTriggerId":"vftphero-feedback-4a18333e-2f29-481b-9b9f-90a1353d59b4-trigger","popoverName":"vftphero-feedback-4a18333e-2f29-481b-9b9f-90a1353d59b4-popover","showMoreMenuExperience":false,"showReportIllegalContentURL":false,"slateToken":"AgAAS0YwRAIgSPHaPCijAPijiBK6elGhJDKJ2ls2TneuS7Zs7NT//h0CIBBMJyFaRjYSWPXThlIF2FGjv7IehFKyk0byFHs+9RBdAnYxAAEAWQGd+cDxz0EvLwJ2MdZuZVbBBtPnf/pJu7o+/FFmpAZNf/lhnjIiLpTMW09t2b02Ef/gJr0x5gMNAAAACAZyZXRhaWwKYW1hem9uLmNvbQVlbi1VU1VTRAGhAgAJCwEBDwRp+kdkAwAABAAA","amazonApiEndpoint":"https://data.amazon.com","language":"en-US"}

/* --- inline script #214 --- */
{"refTagPrefix":"","isVerticalScroll":false,"carouselName":"ive-vftp-hero-cx-relatedProduct-carousel","getUrlParamsForAsins":{},"showDealAndOriginalPrice":false,"showProductCounts":false}

/* --- inline script #215 --- */
{"showMobileBigCard":false,"refTagPrefix":"dp_ive_hero_","useMultiCarousel":false,"metricKey":"","isVerticalScroll":true,"seeMoreFunctionality":{"segmentTypeToCountMap":{"G1":10},"showSeeMoreButton":false,"initialVisibleVideoCount":5,"newVisibleVideoCount":5,"seeMoreButtonText":"Show more"},"includeProfiles":true,"carouselName":"vftphero-related-videos-0c193beb-2f44-468a-b189-c990aecc5696-ive_hero","carouselCardWidth":240,"isIngressCarousel":true,"showRelatedProducts":false,"includeVideoInformationOverPlayer":false,"isPreventDefault":true,"useChannelCarousel":false,"segmentNumber":0,"isVideoImmersivePlayer":false,"showSegments":true,"keepCarouselOpenOnLinkClick":false,"celQueryStringParam":"","lightboxPopoverConfig":{"popoverId":""},"verticalCarouselCardWidth":151,"shouldUseVerticalThumbnail":false,"hideWatchIcon":false,"enableWidgetMetricsAfterOneSecond":true,"useCustomButtons":false,"useMShopVDPFallback":false,"showVideoCounts":false,"disableCreatorClicksOnMshop":false,"loadImagesManually":false,"showCreatorProfiles":false,"showVideoVotes":false}

/* --- inline script #216 --- */
{"videoVoteConfig":{"actionPrefix":"VFTPHeroCard-Desktop","forceTreatment":false,"placementContext":"ive_vftp_hero_cx","requestId":"11MTJZYBCZHEP1JJA74X","sessionId":"132-4911001-2878963","page":"Detail","experimentWeblab":""},"nexusMetricsConfig":{"eventSource":"RVSCAROUSEL","isInternal":false,"playerTSMMetricsSchemaId":"","widgetMetricsSchemaId":"vse.VSECardsEvents.9","producerId":"vsemetrics_playercards","refMarkers":"","placementContext":"desktop_web.VFTPHeroCard-Desktop.ive_vftp_hero_cx","weblabIds":"","clientId":"","videoAsin":"","videoAsinList":"","pageAsin":"B01LBI1BIO","customerId":"0"},"socialShareModel":{"marketplaceId":"ATVPDKIKX0DER","image":"image_url","shareButton":"SHARE","copySuccessText":"Link Copied!","clientPrefix":"vftphero","useShareFramework":false,"description":"video_description","id":"vftphero-social-share-128972c8-9d5f-482f-91e6-e9dd0b46ea28","title":"video_title","pageLevelData":{"deviceTypeRef":"dt","clientRef":"lb"},"shareWithFriendsPrompt":"Share this video with friends","url":"https://www.amazon.com/gp/product/B01LBI1BIO"},"customerReviewConfig":{"showCustomerReviewMetadata":false},"ccvDisclosureConfig":{"id":"vftphero-ccv-disclosure-128972c8-9d5f-482f-91e6-e9dd0b46ea28"},"showUploadDate":false,"entityId":"amzn1.account.AEWJU7DAVAFQQL4MUODBTSRFL7PA","entityType":"customer","defaultEntityId":"amzn1.account.AEWJU7DAVAFQQL4MUODBTSRFL7PA","showSingleLBOverlay":false}

/* --- inline script #217 --- */
{"pageContext":{"page":"Detail","placement":"VFTPHeroCard-Desktop","creativeId":"","clientPrefix":"vftphero","device":"Desktop","customerId":"0","sessionId":"132-4911001-2878963","requestId":"11MTJZYBCZHEP1JJA74X","marketplaceID":"ATVPDKIKX0DER","locale":"en_US","weblabContext":[],"product":{"contentID":"B01LBI1BIO","contentIDType":"ASIN","parentContentID":"B01LBI1BIO","parentContentIDType":"ASIN"},"video":{"contentID":"073ad0b2ef414687b9a857a61fcf20e1","contentIDType":"VIDEO_ID","videoURL":"https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/bceb452a-6fe2-426b-aa97-68021abdf046/default.vertical.jobtemplate.hls.m3u8","imageURL":"https://m.media-amazon.com/images/I/61HZpqYmRgL.jpg","videoTitle":"Get some D in Winter ☀️","altText":"","vendorTrackingId":"","videoReferenceId":"medusa:610c2eac-a75e-4d65-8:334be5ff6ad8e67ccd216746eca312e4","vendorCode":"AOD60","videoAge":"Feb 21, 2025","aciContentId":"amzn1.productreview.R1K1EQ8LFH59GV"},"metadata":{"id":"vse-video-widget-card-vftphero","celQueryStringParam":"/","requestHasVideoData":"true","hideSponsoredProducts":"false","glProductGroupId":"gl_home"},"videoDataList":[{"contentId":"073ad0b2ef414687b9a857a61fcf20e1","metadata":{"videoImageUrl":"https://m.media-amazon.com/images/I/61HZpqYmRgL.jpg","videoURL":"https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/bceb452a-6fe2-426b-aa97-68021abdf046/default.vertical.jobtemplate.hls.m3u8","title":"Get some D in Winter ☀️","altText":"","formattedDuration":"0:56","vendorName":"K","vendorCode":"AOD60","referenceId":"medusa:610c2eac-a75e-4d65-8:334be5ff6ad8e67ccd216746eca312e4","fullReviewLink":"/gp/customer-reviews/R1K1EQ8LFH59GV?ref=va_cr_lb","videoDetailPageLink":"/vdp/073ad0b2ef414687b9a857a61fcf20e1?ref=dp_vse_rvc_0","asin":"073ad0b2ef414687b9a857a61fcf20e1","vendorTrackingId":"","relatedProductsAsins":"","videoAge":"Feb 21, 2025","closedCaptions":"en,https://m.media-amazon.com/images/S/vse-vms-closed-captions-artifact-us-east-1-prod/closedCaptions/d5bf32a2-3320-4680-94cf-c8ce4df13555.vtt","creatorType":"Customer","publicName":"K","profileLink":"/gp/profile/amzn1.account.AGAQCV7YNZYAI3IFLQXBVJE3DSBA","profileImageUrl":"https://m.media-amazon.com/images/S/amazon-avatars-global/4bb4386e-a384-4eee-b4fb-0f69d586c53d._CR46%2C0%2C407%2C407_SX460_._SL34_.jpg","rankingStrategy":"CFB_V2","aciContentId":"amzn1.productreview.R1K1EQ8LFH59GV","disclosureText":"Earns commissions","disclosureLabel":"","disclosureLink":"","videoMimeType":"application/x-mpegURL","entityId":"","entityType":"","videoImageHeight":"1920","videoImageWidth":"1080","videoImagePhysicalId":"61HZpqYmRgL","videoImageExtension":"jpg","groupType":"G1","source":"VSE","highlightedAsin":"","status":"","orientation":"","channelId":"","carouselItems":"","isHotspotsEligible":"true","relatedCarouselItems":"","callToAction":""}},{"contentId":"0d594d78be3a459fae67af3ea54cd5bd","metadata":{"videoImageUrl":"https://m.media-amazon.com/images/I/61USTG3YJKL.jpg","videoURL":"https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/13f3f6cb-4a04-4f0e-b055-bc7eb619413a/default.vertical.jobtemplate.hls.m3u8","title":"I Love My Vitamin D Lamp","altText":"","formattedDuration":"0:24","vendorName":"Ryan Reviews","vendorCode":"cultureclash:shop","referenceId":"VideoCreatorPortal:e614b88bd2a442e68b5447d88409d902","fullReviewLink":"","videoDetailPageLink":"/vdp/0d594d78be3a459fae67af3ea54cd5bd?ref=dp_vse_rvc_1","asin":"0d594d78be3a459fae67af3ea54cd5bd","vendorTrackingId":"onamzryambrow-20","relatedProductsAsins":"","videoAge":"Jun 23, 2023","closedCaptions":"en,https://m.media-amazon.com/images/S/vse-vms-closed-captions-artifact-us-east-1-prod/closedCaptions/7a4e0df9-f8f9-47ee-962d-d1167fc267a9.vtt","creatorType":"Influencer","publicName":"Ryan Reviews","profileLink":"/shop/cultureclash","profileImageUrl":"https://m.media-amazon.com/images/I/B1-gAqp7tVL._CR513,247,1289,1288_._FMjpg_._SL34_.jpg","rankingStrategy":"CFB_V2","aciContentId":"amzn1.vse.video.0d594d78be3a459fae67af3ea54cd5bd","disclosureText":"Earns commissions","disclosureLabel":"Click to go to amazon influencer info page","disclosureLink":"/shop/info","videoMimeType":"application/x-mpegURL","entityId":"amzn1.account.AEVVCHKWL7J4ETHXA7LK4T5MYBPQ","entityType":"customer","videoImageHeight":"1137","videoImageWidth":"640","videoImagePhysicalId":"61USTG3YJKL","videoImageExtension":"jpg","groupType":"G1","source":"VSE","highlightedAsin":"","status":"","orientation":"","channelId":"","carouselItems":"","isHotspotsEligible":"true","relatedCarouselItems":"","callToAction":""}},{"contentId":"02443ae9affc40dda908f89041e78a92","metadata":{"videoImageUrl":"https://m.media-amazon.com/images/I/81Vfih0P07L.jpg","videoURL":"https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/e837d5d3-c16c-426d-8052-b98b6d49eb69/default.jobtemplate.hls.m3u8","title":"Sperti Vitamin D Lamp Review","altText":"","formattedDuration":"0:33","vendorName":"Wave Oven Recipes","vendorCode":"waveovenrecipes:shop","referenceId":"VideoCreatorPortal:bb2df16df71549cfb92efdd2ffcfe9e7","fullReviewLink":"","videoDetailPageLink":"/vdp/02443ae9affc40dda908f89041e78a92?ref=dp_vse_rvc_2","asin":"02443ae9affc40dda908f89041e78a92","vendorTrackingId":"onamzdarnelmc-20","relatedProductsAsins":"","videoAge":"Sep 24, 2024","closedCaptions":"en,https://m.media-amazon.com/images/S/vse-vms-closed-captions-artifact-us-east-1-prod/closedCaptions/e444a051-dbad-42e5-ac7e-1e58c2278def.vtt","creatorType":"Influencer","publicName":"Wave Oven Recipes","profileLink":"/shop/waveovenrecipes","profileImageUrl":"https://images-na.ssl-images-amazon.com/images/S/influencer-profile-image-prod/logo/waveovenrecipes_1528665246502._SL34_.jpg","rankingStrategy":"CFB_V2","aciContentId":"amzn1.vse.video.02443ae9affc40dda908f89041e78a92","disclosureText":"Earns commissions","disclosureLabel":"Click to go to amazon influencer info page","disclosureLink":"/shop/info","videoMimeType":"application/x-mpegURL","entityId":"amzn1.account.AFBHK55H5MGGHPCUGNI7CIRMV6XQ","entityType":"customer","videoImageHeight":"960","videoImageWidth":"1280","videoImagePhysicalId":"81Vfih0P07L","videoImageExtension":"jpg","groupType":"G1","source":"VSE","highlightedAsin":"","status":"","orientation":"","channelId":"","carouselItems":"","isHotspotsEligible":"true","relatedCarouselItems":"","callToAction":""}},{"contentId":"0b67a7a8fc3b476981fa39fe7e6c23d1","metadata":{"videoImageUrl":"https://m.media-amazon.com/images/I/B16es68XCtL.jpg","videoURL":"https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/bc86dcb5-c608-4130-a2a4-655137ddbd00/default.jobtemplate.hls.m3u8","title":"Customer Review - Sperti Vitamin D Lamp","altText":"","formattedDuration":"0:44","vendorName":"Jasmine Eastland","vendorCode":"_jaybeemama_:shop","referenceId":"CreatorStudio:b7ee79f2142b427c81df96856b281f52","fullReviewLink":"","videoDetailPageLink":"/vdp/0b67a7a8fc3b476981fa39fe7e6c23d1?ref=dp_vse_rvc_3","asin":"0b67a7a8fc3b476981fa39fe7e6c23d1","vendorTrackingId":"onamzjas01c37-20","relatedProductsAsins":"","videoAge":"Aug 31, 2024","closedCaptions":"en,https://m.media-amazon.com/images/S/vse-vms-closed-captions-artifact-us-east-1-prod/closedCaptions/9172daf4-bc0c-4b90-b0fb-08bbd32c433e.vtt","creatorType":"Influencer","publicName":"Jasmine Eastland","profileLink":"/shop/_jaybeemama_","profileImageUrl":"https://m.media-amazon.com/images/I/51fO6SK9+CL._CR0,0,556,556_._FMjpg_._SL34_.jpg","rankingStrategy":"CFB_V2","aciContentId":"amzn1.vse.video.0b67a7a8fc3b476981fa39fe7e6c23d1","disclosureText":"Earns commissions","disclosureLabel":"Click to go to amazon influencer info page","disclosureLink":"/shop/info","videoMimeType":"application/x-mpegURL","entityId":"amzn1.account.AEXSCPMWKKF3EPGNJTLXJVMIBKNA","entityType":"customer","videoImageHeight":"3072","videoImageWidth":"4096","videoImagePhysicalId":"B16es68XCtL","videoImageExtension":"jpg","groupType":"G1","source":"VSE","highlightedAsin":"","status":"","orientation":"","channelId":"","carouselItems":"","isHotspotsEligible":"true","relatedCarouselItems":"","callToAction":""}},{"contentId":"0e5ac6324d7d4d9488883b6fd6e92616","metadata":{"videoImageUrl":"https://m.media-amazon.com/images/I/612IRLipO3L.jpg","videoURL":"https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/d7510646-75ed-432b-948f-91ed8a6ecf28/default.vertical.jobtemplate.hls.m3u8","title":"Vitamin D on demand","altText":"","formattedDuration":"0:42","vendorName":"Michael Hines","vendorCode":"michaelhinesart:shop","referenceId":"ShoppableMediaService:a7aa1a7fbbce4089946f260e815e1130","fullReviewLink":"","videoDetailPageLink":"/vdp/0e5ac6324d7d4d9488883b6fd6e92616?ref=dp_vse_rvc_4","asin":"0e5ac6324d7d4d9488883b6fd6e92616","vendorTrackingId":"onamzmic0899a-20","relatedProductsAsins":"","videoAge":"Mar 14, 2026","closedCaptions":"en,https://m.media-amazon.com/images/S/vse-vms-closed-captions-artifact-us-east-1-prod/closedCaptions/0c9bbc71-0a67-45b4-aeff-e7bee66cf6aa.vtt","creatorType":"Influencer","publicName":"Michael Hines","profileLink":"/shop/michaelhinesart","profileImageUrl":"https://m.media-amazon.com/images/I/91W2Jk25SfL._CR127,172,414,413_._FMjpg_._SL34_.jpg","rankingStrategy":"CFB_V2","aciContentId":"amzn1.vse.video.0e5ac6324d7d4d9488883b6fd6e92616","disclosureText":"Earns commissions","disclosureLabel":"Click to go to amazon influencer info page","disclosureLink":"/shop/info","videoMimeType":"application/x-mpegURL","entityId":"amzn1.account.AH7BE5OKGSVMRUH7NTWK46NLEBKQ","entityType":"customer","videoImageHeight":"1137","videoImageWidth":"640","videoImagePhysicalId":"612IRLipO3L","videoImageExtension":"jpg","groupType":"G1","source":"VSE","highlightedAsin":"","status":"","orientation":"","channelId":"","carouselItems":"","isHotspotsEligible":"true","relatedCarouselItems":"","callToAction":""}},{"contentId":"0c3069d6173548bc8a09f7950a6f1df4","metadata":{"videoImageUrl":"https://m.media-amazon.com/images/I/51lCue5uUTL.jpg","videoURL":"https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/5c1928c6-aab0-4a7d-a5fe-0680e47f9e58/default.jobtemplate.hls.m3u8","title":"Why 50,000+ People Swear by This Home Lamp!","altText":"","formattedDuration":"1:23","vendorName":"Vince Nguyen","vendorCode":"toonriot:shop","referenceId":"VideoCreatorPortal:491975a5cc36432fb7fc86fddbc98f31","fullReviewLink":"","videoDetailPageLink":"/vdp/0c3069d6173548bc8a09f7950a6f1df4?ref=dp_vse_rvc_5","asin":"0c3069d6173548bc8a09f7950a6f1df4","vendorTrackingId":"onamzvhnenter-20","relatedProductsAsins":"","videoAge":"Oct 19, 2025","closedCaptions":"en,https://m.media-amazon.com/images/S/vse-vms-closed-captions-artifact-us-east-1-prod/closedCaptions/55c31309-7c4a-4c85-a211-1b0c7ff56742.vtt","creatorType":"Influencer","publicName":"Vince Nguyen","profileLink":"/shop/toonriot","profileImageUrl":"https://m.media-amazon.com/images/I/61jYOhJDoBL._CR0,0,960,960_._FMjpg_._SL34_.jpg","rankingStrategy":"CFB_V2","aciContentId":"amzn1.vse.video.0c3069d6173548bc8a09f7950a6f1df4","disclosureText":"Earns commissions","disclosureLabel":"Click to go to amazon influencer info page","disclosureLink":"/shop/info","videoMimeType":"application/x-mpegURL","entityId":"amzn1.account.AHQ4HOX3QSQKZNCMZSZ4YMJSHPCA","entityType":"customer","videoImageHeight":"360","videoImageWidth":"640","videoImagePhysicalId":"51lCue5uUTL","videoImageExtension":"jpg","groupType":"G1","source":"VSE","highlightedAsin":"","status":"","orientation":"","channelId":"","carouselItems":"","isHotspotsEligible":"true","relatedCarouselItems":"","callToAction":""}},{"contentId":"0ae03cb31aa647379ebc44cc2711c14a","metadata":{"videoImageUrl":"https://m.media-amazon.com/images/I/51lApeDEGeL.jpg","videoURL":"https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/7af6614a-e1db-496e-a6e3-c34b4749c3bd/default.vertical.jobtemplate.hls.m3u8","title":"Makes winters more bearable","altText":"","formattedDuration":"0:35","vendorName":"Tyler","vendorCode":"AOD60","referenceId":"medusa:bc07e4c2-2dfe-4f81-a:7d9bc894a4ee1cbf9e1d92719861f8b2","fullReviewLink":"/gp/customer-reviews/R2C3DMSVMLHXR7?ref=va_cr_lb","videoDetailPageLink":"/vdp/0ae03cb31aa647379ebc44cc2711c14a?ref=dp_vse_rvc_6","asin":"0ae03cb31aa647379ebc44cc2711c14a","vendorTrackingId":"","relatedProductsAsins":"","videoAge":"Feb 2, 2024","closedCaptions":"en,https://m.media-amazon.com/images/S/vse-vms-closed-captions-artifact-us-east-1-prod/closedCaptions/a781df6b-a486-495d-8c2c-943488b81457.vtt","creatorType":"Customer","publicName":"Tyler","profileLink":"/gp/profile/amzn1.account.AEVWHKBCSCT3DYDLIKVIB7JJJJ2A","profileImageUrl":"https://m.media-amazon.com/images/S/amazon-avatars-global/default._SL34_.png","rankingStrategy":"CFB_V2","aciContentId":"amzn1.productreview.R2C3DMSVMLHXR7","disclosureText":"Earns commissions","disclosureLabel":"","disclosureLink":"","videoMimeType":"application/x-mpegURL","entityId":"","entityType":"","videoImageHeight":"1280","videoImageWidth":"720","videoImagePhysicalId":"51lApeDEGeL","videoImageExtension":"jpg","groupType":"G1","source":"VSE","highlightedAsin":"","status":"","orientation":"","channelId":"","carouselItems":"","isHotspotsEligible":"true","relatedCarouselItems":"","callToAction":""}},{"contentId":"0407eb05d5a044c48f0edadf0c6e0fe5","metadata":{"videoImageUrl":"https://m.media-amazon.com/images/I/C1RIv50IEjL.png","videoURL":"https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/fbad7c39-3d9a-4efe-9530-e8ee54bf9ed2/default.jobtemplate.hls.m3u8","title":"A perfect hit of Vitamin D when the suns not out. ","altText":"","formattedDuration":"0:33","vendorName":"Becca","vendorCode":"wandersandwink:shop","referenceId":"CreatorStudio:88c8f0f5cd044c608d6351e750a8a533","fullReviewLink":"","videoDetailPageLink":"/vdp/0407eb05d5a044c48f0edadf0c6e0fe5?ref=dp_vse_rvc_7","asin":"0407eb05d5a044c48f0edadf0c6e0fe5","vendorTrackingId":"onamzbeccam0b-20","relatedProductsAsins":"","videoAge":"Jan 10, 2023","closedCaptions":"en,https://m.media-amazon.com/images/S/vse-vms-closed-captions-artifact-us-east-1-prod/closedCaptions/e88ff2b9-133a-445e-8d08-5cc1c7b8777e.vtt","creatorType":"Influencer","publicName":"Becca","profileLink":"/shop/wandersandwink","profileImageUrl":"https://images-na.ssl-images-amazon.com/images/S/influencer-profile-image-prod/logo/wandersandwink_1666817166319_original._FMjpg_._SL34_.jpeg","rankingStrategy":"CFB_V2","aciContentId":"amzn1.vse.video.0407eb05d5a044c48f0edadf0c6e0fe5","disclosureText":"Earns commissions","disclosureLabel":"Click to go to amazon influencer info page","disclosureLink":"/shop/info","videoMimeType":"application/x-mpegURL","entityId":"amzn1.account.AH2ZCL5HQGNXNCW7HQCB32T2D4IQ","entityType":"customer","videoImageHeight":"2048","videoImageWidth":"2048","videoImagePhysicalId":"C1RIv50IEjL","videoImageExtension":"png","groupType":"G1","source":"VSE","highlightedAsin":"","status":"","orientation":"","channelId":"","carouselItems":"","isHotspotsEligible":"false","relatedCarouselItems":"","callToAction":""}},{"contentId":"015d29c99fe9419bb30bb397c755d023","metadata":{"videoImageUrl":"https://m.media-amazon.com/images/I/81+I6TcxK1L.jpg","videoURL":"https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/00da448d-0e14-4ede-b9a0-f6389429f464/default.jobtemplate.hls.m3u8","title":"How To Use The Sperti Vitamin D Lamp","altText":"","formattedDuration":"1:52","vendorName":"Ryan Reviews","vendorCode":"cultureclash:shop","referenceId":"VideoCreatorPortal:b9a9f509aa244f41836877d385b311be","fullReviewLink":"","videoDetailPageLink":"/vdp/015d29c99fe9419bb30bb397c755d023?ref=dp_vse_rvc_8","asin":"015d29c99fe9419bb30bb397c755d023","vendorTrackingId":"onamzryambrow-20","relatedProductsAsins":"","videoAge":"Nov 7, 2023","closedCaptions":"en,https://m.media-amazon.com/images/S/vse-vms-closed-captions-artifact-us-east-1-prod/closedCaptions/497abb4d-a996-4836-8cd9-5c9ae96c98a0.vtt","creatorType":"Influencer","publicName":"Ryan Reviews","profileLink":"/shop/cultureclash","profileImageUrl":"https://m.media-amazon.com/images/I/B1-gAqp7tVL._CR513,247,1289,1288_._FMjpg_._SL34_.jpg","rankingStrategy":"CFB_V2","aciContentId":"amzn1.vse.video.015d29c99fe9419bb30bb397c755d023","disclosureText":"Earns commissions","disclosureLabel":"Click to go to amazon influencer info page","disclosureLink":"/shop/info","videoMimeType":"application/x-mpegURL","entityId":"amzn1.account.AEVVCHKWL7J4ETHXA7LK4T5MYBPQ","entityType":"customer","videoImageHeight":"720","videoImageWidth":"1280","videoImagePhysicalId":"81+I6TcxK1L","videoImageExtension":"jpg","groupType":"G1","source":"VSE","highlightedAsin":"","status":"","orientation":"","channelId":"","carouselItems":"","isHotspotsEligible":"true","relatedCarouselItems":"","callToAction":""}},{"contentId":"d69e0c3d38ba45149d94786a224d4baf","metadata":{"videoImageUrl":"https://images-na.ssl-images-amazon.com/images/I/B1zBWf0s8mS.png","videoURL":"https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/v2/8678d929-98ac-5b07-a08e-54384a4b8743/ShortForm-Generic-480p-16-9-1409173089793-rpcbe5.mp4","title":"UVB lamp unboxing ","altText":"","formattedDuration":"1:16","vendorName":"Texas Girl","vendorCode":"UGCPR","referenceId":"d69e0c3d38ba45149d94786a224d4baf","fullReviewLink":"","videoDetailPageLink":"/vdp/d69e0c3d38ba45149d94786a224d4baf?ref=dp_vse_rvc_9","asin":"d69e0c3d38ba45149d94786a224d4baf","vendorTrackingId":"","relatedProductsAsins":"","videoAge":"May 6, 2019","closedCaptions":"en,https://m.media-amazon.com/images/S/vse-vms-closed-captions-artifact-us-east-1-prod/closedCaptions/8d0c3aa2-db38-4484-ba95-cfa82bda7f24.vtt","creatorType":"Customer","publicName":"Texas Girl","profileLink":"/gp/profile/amzn1.account.AG2FLSETLJ737K4G5NWFTO6JOOPQ","profileImageUrl":"https://m.media-amazon.com/images/S/amazon-avatars-global/default._SL34_.png","rankingStrategy":"CFB_V2","aciContentId":"amzn1.ive.ugc.video.d69e0c3d38ba45149d94786a224d4baf","disclosureText":"Earns commissions","disclosureLabel":"","disclosureLink":"","videoMimeType":"video/mp4","entityId":"","entityType":"","videoImageHeight":"1080","videoImageWidth":"1920","videoImagePhysicalId":"B1zBWf0s8mS","videoImageExtension":"png","groupType":"G1","source":"VSE","highlightedAsin":"","status":"","orientation":"","channelId":"","carouselItems":"","isHotspotsEligible":"false","relatedCarouselItems":"","callToAction":""}}]},"cacheOnProductAsin":false,"componentConfiguration":{"id":"div-relatedproducts-vftphero-8d2ade86-3017-4ac4-a050-7e0becbe6605","type":"relatedproducts","binder":"relatedproducts","features":{"features":{"context":"ive-vftp-hero-cx-relatedProduct","displayStrategy":"vse-rp","cssClass":"vse-related-product-container vse-rp-container vse-hide-product-carousel vse-lb-v2 ive-hero-mode","carouselName":"ive-vftp-hero-cx-relatedProduct-carousel","clientPrefix":"ive_vftp_hero_cx","reftag":"ive_vftp_hero_cx_pfo","sponsoredBrandVideoReftag":"ive_vftp_hero_cx_pfo_sbv"}}},"pfoOverlayMultiCard":false,"showPFOOnOverlay":false,"hideShopButton":false}

/* --- inline script #218 --- */
if (window.mix_csa) {
                    window.mix_csa(
                      '[cel_widget_id="vse-vw-dp-card_DetailPage_5"]',
                      "#CardInstance03bImEydmqkoqeBz1eLq4w",
                    )("mark", "be");
                  }

/* --- inline script #219 --- */
if (window.uet) {
                    window.uet("be", "vse-vw-dp-card_DetailPage_5", { wb: 1 });
                  }

/* --- inline script #220 --- */
if (window.mixTimeout) {
                    window.mixTimeout("vse-vw-dp-card", "CardInstance03bImEydmqkoqeBz1eLq4w", 90000);
                  }
                  P.when("mix:@amzn/mix.client-runtime", "mix:vse-vw-dp-card__5OrP9iZJ").execute(
                    function (runtime, cardModule) {
                      runtime.registerCardFactory("CardInstance03bImEydmqkoqeBz1eLq4w", cardModule).then(function () {
                        if (window.mix_csa) {
                          window.mix_csa(
                            '[cel_widget_id="vse-vw-dp-card_DetailPage_5"]',
                            "#CardInstance03bImEydmqkoqeBz1eLq4w",
                          )("mark", "functional");
                        }
                        if (window.uex) {
                          window.uex("ld", "vse-vw-dp-card_DetailPage_5", { wb: 1 });
                        }
                      });
                    },
                  );

/* --- inline script #221 --- */
P.load.js("https://m.media-amazon.com/images/I/91M1+K4KtNL.js?xcp");

/* --- inline script #222 --- */
{"btf-sub-nav-desktop-from-the-brand-tab":["#productDescription_feature_div","#aplus_feature_div","#aplusBrandStory_feature_div"],"btf-sub-nav-desktop-price-and-atc-enabled":false,"btf-sub-nav-desktop-leftAligned":true,"btf-sub-nav-desktop-product-info-tab":["#productDetails_feature_div","#productDetailsNonPets_feature_div","#productDetails-placement-auto_feature_div","#importantInformation_feature_div"],"btf-sub-nav-desktop-from-the-author-tab":["#moreAboutTheAuthorCard_feature_div"],"btf-sub-nav-desktop-lateActivation":true,"btf-sub-nav-desktop-customer-reviews-tab":["#customer-reviews_feature_div"],"btf-sub-nav-desktop-subNavProductInfoEnabled":true,"btf-sub-nav-desktop-similar-tab":["#miraiBTFShopByLook_feature_div","#desktop-dp-btf-shopbylook","#sims-simsContainer_feature_div_01","#sims-simsContainer_feature_div_11","#sims-comparisonContainer_feature_div_01","#sp_detail_thematic-highly_rated","#DetailPage_sims-container_desktop-dp-sims_1_container","#sims-sponsoredProducts2_feature_div_01","#sims-discoveryAndInspiration_feature_div_01","#DetailPage_sims-container_desktop-dp-sims_2_container","#DetailPage_sims-container_desktop-dp-sims_3_container"],"btf-sub-nav-desktop-max-tabs":0,"btf-sub-nav-desktop-about-this-item-tab":["#houseOfCards","#featurebullets_feature_div","#richProductInformation_feature_div","#productOverview_feature_div","#dietaryInformationLogo_feature_div","#productFactsDesktop_feature_div","#petsFoodEvaluationDetails-aboveProductOverview_feature_div","#nutritionalInfoAndIngredients_feature_div"],"btf-sub-nav-desktop-tab-priority":[],"btf-sub-nav-desktop-questions-tab":["#nile-inline-btf_feature_div","#ask-btf_feature_div"]}

/* --- inline script #223 --- */
if (window.mix_csa) {
                  window.mix_csa(
                    '[cel_widget_id="buffet-disclaimers-card_DetailPage_6"]',
                    "#CardInstanceGZwR0LxU-vL-DLYCSMulOQ",
                  )("mark", "bb");
                }

/* --- inline script #224 --- */
if (window.uet) {
                  window.uet("bb", "buffet-disclaimers-card_DetailPage_6", { wb: 1 });
                }

/* --- inline script #225 --- */
if (window.mix_csa) {
                  window.mix_csa(
                    '[cel_widget_id="buffet-disclaimers-card_DetailPage_6"]',
                    "#CardInstanceGZwR0LxU-vL-DLYCSMulOQ",
                  )("mark", "be");
                }

/* --- inline script #226 --- */
if (window.uet) {
                  window.uet("be", "buffet-disclaimers-card_DetailPage_6", { wb: 1 });
                }

/* --- inline script #227 --- */
if (window.mixTimeout) {
                  window.mixTimeout("buffet-disclaimers-card", "CardInstanceGZwR0LxU-vL-DLYCSMulOQ", 90000);
                }
                P.when("mix:@amzn/mix.client-runtime", "mix:buffet-disclaimers-card__WrC6nA7N").execute(
                  function (runtime, cardModule) {
                    runtime.registerCardFactory("CardInstanceGZwR0LxU-vL-DLYCSMulOQ", cardModule).then(function () {
                      if (window.mix_csa) {
                        window.mix_csa(
                          '[cel_widget_id="buffet-disclaimers-card_DetailPage_6"]',
                          "#CardInstanceGZwR0LxU-vL-DLYCSMulOQ",
                        )("mark", "functional");
                      }
                      if (window.uex) {
                        window.uex("ld", "buffet-disclaimers-card_DetailPage_6", { wb: 1 });
                      }
                    });
                  },
                );

/* --- inline script #228 --- */
P.when("ready").execute(function () {
                  P.load.js("https://m.media-amazon.com/images/I/41aNDctftuL.js?xcp");
                });

/* --- inline script #229 --- */
{"eelEndpoint":"https://unagi-na.amazon.com/1/events/com.amazon.eel.SponsoredProductsEventTracking.prod"}

/* --- inline script #230 --- */
(function (f) {
                              var _np = window.P._namespace("FirebirdSpRendering");
                              if (_np.guardFatal) {
                                _np.guardFatal(f)(_np);
                              } else {
                                f(_np);
                              }
                            })(function (P) {
                              P.when("A", "a-carousel-framework", "a-modal").execute(function (A, CF, AM) {
                                var DESKTOP_METRIC_PREFIX = "adFeedback:desktop:multiAsinAF:sp_detail2";
                                A.declarative(
                                  "sp_detail2-prime_theme_for_non_prime_members_feedback-action",
                                  "click",
                                  function (event) {
                                    var MODAL_NAME_PREFIX = "multi_af_modal_";
                                    var MODAL_CLASS_PREFIX = "multi-af-modal-";
                                    var BASE_16 = 16;
                                    var UID_START_INDEX = 2;
                                    var uniqueIdentifier = Math.random().toString(BASE_16).substr(UID_START_INDEX);
                                    var modalName =
                                      MODAL_NAME_PREFIX +
                                      "sp_detail2-prime_theme_for_non_prime_members" +
                                      uniqueIdentifier;
                                    var modalClass =
                                      MODAL_CLASS_PREFIX +
                                      "sp_detail2-prime_theme_for_non_prime_members" +
                                      uniqueIdentifier;
                                    initModal(modalName, modalClass);
                                    removeModalOnClose(modalName);
                                  },
                                );
                                function initModal(modalName, modalClass) {
                                  var trigger = A.$('<div a-popover-id="' + modalName + '" />');
                                  var initialContent =
                                    '<div class="' +
                                    modalClass +
                                    '" style="width: 100%; height: 100%; position: relative;">' +
                                    '<span class="a-spinner a-spinner-medium" style="position: relative; left: 40%;top: 40%;">' +
                                    "</span></div>";
                                  var HEADER_STRING = "Leave feedback";
                                  if (false) {
                                    HEADER_STRING = "Ad information and options";
                                  }
                                  var modalInstance = AM.create(trigger, {
                                    content: initialContent,
                                    header: HEADER_STRING,
                                    popoverLabel: HEADER_STRING,
                                    name: modalName,
                                  });
                                  modalInstance.show();
                                  var serializedPayload = generatePayload(modalName);
                                  A.$.ajax({
                                    url: "/af/multi-creative/feedback-form",
                                    type: "POST",
                                    data: serializedPayload,
                                    headers: { "Content-Type": "application/json", Accept: "application/json" },
                                    success: function (response) {
                                      if (!response) {
                                        return;
                                      }
                                      modalInstance.update(response);
                                      var successMetric = DESKTOP_METRIC_PREFIX + ":formDisplayed";
                                      if (window.ue && window.ue.count) {
                                        window.ue.count(successMetric, (window.ue.count(successMetric) || 0) + 1);
                                      }
                                    },
                                    error: function (err) {
                                      var errorText = "Feedback Form get failed with error: " + err;
                                      var errorMetric = DESKTOP_METRIC_PREFIX + ":error";
                                      P.log(errorText, "FATAL", DESKTOP_METRIC_PREFIX);
                                      if (window.ue && window.ue.count) {
                                        window.ue.count(errorMetric, (window.ue.count(errorMetric) || 0) + 1);
                                      }
                                      modalInstance.update("<b>" + "Error loading ad feedback form." + "</b>");
                                    },
                                  });
                                  return modalInstance;
                                }
                                function removeModalOnClose(modalName) {
                                  A.on("a:popover:afterHide:" + modalName, function removeModal() {
                                    var isSuccess = AM.remove(modalName);
                                    if (isSuccess) {
                                      document
                                        .getElementById("sp_detail2-prime_theme_for_non_prime_members_feedbackMessage")
                                        .focus();
                                    }
                                  });
                                }
                                function generatePayload(modalName) {
                                  var carousel = CF.getCarousel(
                                    document.getElementById("sp_detail2-prime_theme_for_non_prime_members"),
                                  );
                                  var EMPTY_CARD_CLASS = "a-carousel-card-empty";
                                  if (!carousel) {
                                    return;
                                  }
                                  var adPlacementMetaData =
                                    carousel.dom.$carousel.context.getAttribute("data-ad-placement-metadata");
                                  var adDetailsList = [];
                                  if (adPlacementMetaData == "") {
                                    return;
                                  }
                                  carousel.dom.$carousel
                                    .children("li")
                                    .not("." + EMPTY_CARD_CLASS)
                                    .each(function (idx, item) {
                                      var divs = item.getElementsByTagName("div");
                                      var adFeedbackDetails;
                                      for (var i = 0; i < divs.length; ++i) {
                                        if (divs[i].getAttribute("data-adfeedbackdetails")) {
                                          adFeedbackDetails = divs[i].getAttribute("data-adfeedbackdetails");
                                          break;
                                        }
                                      }
                                      if (!adFeedbackDetails) {
                                        return;
                                      }
                                      if (adFeedbackDetails != "" && adFeedbackDetails != null) {
                                        adDetailsList.push(JSON.parse(adFeedbackDetails));
                                      }
                                    });
                                  var payload = {
                                    adPlacementMetaData: JSON.parse(adPlacementMetaData),
                                    adCreativeMetaData: { adCreativeDetails: adDetailsList },
                                    feedbackFormContainerId: modalName,
                                  };
                                  var serializedPayload = { pl: encodeURI(JSON.stringify(payload)) };
                                  return JSON.stringify(serializedPayload);
                                }
                              });
                            });

/* --- inline script #231 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("SponsoredProductsViewability").execute(function (SV) {
                                        SV.loadImagePixel(
                                          "/gp/sponsored-products/logging/log-action.html?qualifier=1778011661&id=4353520984226895&widgetName=sp_detail2&adId=301255788485802&eventType=2&adIndex=0",
                                        );
                                      });
                                    });

/* --- inline script #232 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("A", "SponsoredProductsViewability").execute(function (A, SV) {
                                        SV.registerViewTrackingElement(
                                          A.$("#sp_detail2-prime_theme_for_non_prime_members_B0F44VCM7T"),
                                          "sp_detail2",
                                        );
                                      });
                                    });

/* --- inline script #233 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("SponsoredProductsViewability").execute(function (SV) {
                                        SV.loadImagePixel(
                                          "/gp/sponsored-products/logging/log-action.html?qualifier=1778011661&id=4353520984226895&widgetName=sp_detail2&adId=301195180538502&eventType=2&adIndex=1",
                                        );
                                      });
                                    });

/* --- inline script #234 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("A", "SponsoredProductsViewability").execute(function (A, SV) {
                                        SV.registerViewTrackingElement(
                                          A.$("#sp_detail2-prime_theme_for_non_prime_members_B0FT38QQ4R"),
                                          "sp_detail2",
                                        );
                                      });
                                    });

/* --- inline script #235 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("SponsoredProductsViewability").execute(function (SV) {
                                        SV.loadImagePixel(
                                          "/gp/sponsored-products/logging/log-action.html?qualifier=1778011661&id=4353520984226895&widgetName=sp_detail2&adId=301270657689602&eventType=2&adIndex=2",
                                        );
                                      });
                                    });

/* --- inline script #236 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("A", "SponsoredProductsViewability").execute(function (A, SV) {
                                        SV.registerViewTrackingElement(
                                          A.$("#sp_detail2-prime_theme_for_non_prime_members_B0FHPQ672X"),
                                          "sp_detail2",
                                        );
                                      });
                                    });

/* --- inline script #237 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("SponsoredProductsViewability").execute(function (SV) {
                                        SV.loadImagePixel(
                                          "/gp/sponsored-products/logging/log-action.html?qualifier=1778011661&id=4353520984226895&widgetName=sp_detail2&adId=200137309924798&eventType=2&adIndex=3",
                                        );
                                      });
                                    });

/* --- inline script #238 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("A", "SponsoredProductsViewability").execute(function (A, SV) {
                                        SV.registerViewTrackingElement(
                                          A.$("#sp_detail2-prime_theme_for_non_prime_members_B0BM5M356S"),
                                          "sp_detail2",
                                        );
                                      });
                                    });

/* --- inline script #239 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("SponsoredProductsViewability").execute(function (SV) {
                                        SV.loadImagePixel(
                                          "/gp/sponsored-products/logging/log-action.html?qualifier=1778011661&id=4353520984226895&widgetName=sp_detail2&adId=301260085757502&eventType=2&adIndex=4",
                                        );
                                      });
                                    });

/* --- inline script #240 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("A", "SponsoredProductsViewability").execute(function (A, SV) {
                                        SV.registerViewTrackingElement(
                                          A.$("#sp_detail2-prime_theme_for_non_prime_members_B0DNRRBH21"),
                                          "sp_detail2",
                                        );
                                      });
                                    });

/* --- inline script #241 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("SponsoredProductsViewability").execute(function (SV) {
                                        SV.loadImagePixel(
                                          "/gp/sponsored-products/logging/log-action.html?qualifier=1778011661&id=4353520984226895&widgetName=sp_detail2&adId=301031386007202&eventType=2&adIndex=5",
                                        );
                                      });
                                    });

/* --- inline script #242 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("A", "SponsoredProductsViewability").execute(function (A, SV) {
                                        SV.registerViewTrackingElement(
                                          A.$("#sp_detail2-prime_theme_for_non_prime_members_B0FPGJ2FZC"),
                                          "sp_detail2",
                                        );
                                      });
                                    });

/* --- inline script #243 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("SponsoredProductsViewability").execute(function (SV) {
                                        SV.loadImagePixel(
                                          "/gp/sponsored-products/logging/log-action.html?qualifier=1778011661&id=4353520984226895&widgetName=sp_detail2&adId=300382098678302&eventType=2&adIndex=6",
                                        );
                                      });
                                    });

/* --- inline script #244 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("A", "SponsoredProductsViewability").execute(function (A, SV) {
                                        SV.registerViewTrackingElement(
                                          A.$("#sp_detail2-prime_theme_for_non_prime_members_B0CR76X6SC"),
                                          "sp_detail2",
                                        );
                                      });
                                    });

/* --- inline script #245 --- */
(function (f) {
                                      var _np = window.P._namespace("FirebirdSpRendering");
                                      if (_np.guardFatal) {
                                        _np.guardFatal(f)(_np);
                                      } else {
                                        f(_np);
                                      }
                                    })(function (P) {
                                      P.when("A", "jQuery", "ready").execute(function (A, jQuery) {
                                        var badgeRectangle = A.$(
                                          "#sp_detail2-prime_theme_for_non_prime_members_B0CR76X6SC_badge",
                                        );
                                        var badgeTriangle = A.$(
                                          "#sp_detail2-prime_theme_for_non_prime_members_B0CR76X6SC_badge_image",
                                        );
                                        if (document.documentElement.dir == "rtl") {
                                          if (true) {
                                            badgeRectangle.css("float", "left");
                                          }
                                          badgeTriangle.css("transform", "scaleX(-1)");
                                          if (false) {
                                            badgeTriangle.css("float", "left");
                                          }
                                        }
                                        if (false) {
                                          var space = 0.0;
                                          var card = A.$("#sp_detail2-prime_theme_for_non_prime_members_B0CR76X6SC");
                                          var badgeText = A.$(
                                            "#sp_detail2-prime_theme_for_non_prime_members_B0CR76X6SC_badge_text",
                                          );
                                          var badgeSecondaryText = A.$(
                                            "#sp_detail2-prime_theme_for_non_prime_members_B0CR76X6SC_badge_secondary_text",
                                          );
                                          while (
                                            badgeRectangle.outerWidth() + badgeTriangle.width() > card.width() &&
                                            space > -1
                                          ) {
                                            space = space - 0.1;
                                            badgeText.css("letter-spacing", space + "px");
                                            badgeSecondaryText.css("letter-spacing", space + "px");
                                          }
                                        }
                                      });
                                    });

/* --- inline script #246 --- */
(function (f) {
                    var _np = window.P._namespace("FirebirdSpRendering");
                    if (_np.guardFatal) {
                      _np.guardFatal(f)(_np);
                    } else {
                      f(_np);
                    }
                  })(function (P) {
                    P.when("A", "a-carousel-framework", "AmazonClicks").execute(function (A, CF, AC) {
                      var carouselElement = document.getElementById("sp_detail2-prime_theme_for_non_prime_members");
                      if (carouselElement) {
                        CF.getCarousel(carouselElement);
                      }
                    });
                    P.when("A", "SPHAT").execute(function (A, SPHAT) {
                      var containerSelector = "#sp_detail2 div";
                      var elementsAllowedToBeHidden = [
                        "script",
                        "div.sp_adID",
                        "div.pa_feedbackForm_container_sp_detail2",
                        "span.a-declarative",
                        "span.aok-hidden",
                        "input[type=hidden]",
                        "noscript",
                      ];
                      var csmCounterMetricName = "sp_detail2.adb";
                      var hadImpact = SPHAT.checkForHiddenElements(
                        containerSelector,
                        elementsAllowedToBeHidden,
                        csmCounterMetricName,
                      );
                      A.state("sp_detail2", { adBlockerHadImpact: hadImpact });
                    });
                    P.when("SponsoredProductsViewability").execute(function (SV) {
                      SV.registerAuiEvents(["ready", "scroll", "resize", "orientationchange"]);
                    });
                    P.when("sp-dp-carousel-truncation").execute(function (truncator) {
                      truncator.setUpTruncation("sp_detail2-prime_theme_for_non_prime_members");
                    });
                  });

/* --- inline script #247 --- */
window.renderingWeblabs = window.renderingWeblabs ? window.renderingWeblabs : {};
                window.renderingWeblabs = Object.assign(
                  window.renderingWeblabs,
                  JSON.parse(
                    '{"ADPT_SF_HIGH_RATE_METRIC_LOGGING_1256364":"C","APM_STORES_JPS_JRS_SAFEFRAME_BG_COLOR_TOGGLE_1329269":"T1","APM_STORES_JPS_JRS_SAFEFRAME_RESPONSIVE_SIZING_1314203":"T1","APM_STORES_JPS_JRS_SAFEFRAME_NEW_JRS_ADDETAILS_1335584":"T1","APM_STORES_JPS_JRS_SAFEFRAME_SHOWADFEEDBACK_FALSE_SLOTS_1380760":"T1","APM_STORES_JPS_JRS_SAFEFRAME_SL_ON_DOSSIER_1362947":"T1","ADPT_SF_HOMEPAGE_ART_THEMING_1298909":"C","APM_STORES_JPS_JRS_SAFEFRAME_DISABLE_LAUNCH_INTENT_1331357":"T1","ADPT_SF_GWATF_ROUNDED_CORNERS_1036948":"T1","APM_STORES_JPS_JRS_SAFEFRAME_IFRAME_READY_RETRY_1374491":"T1","APM_STORES_JPS_JRS_SAFEFRAME_LIGHT_AD_CREATIVE_SIZE_STYLE_1311018":"T1"}',
                  ),
                );

/* --- inline script #248 --- */
(function () {
                  var e,
                    t = class {};
                  ((e = t),
                    (e.startSafeFrameCSM = new Map()),
                    (e.startSafeFrameCSA = new Map()),
                    (e.startSafeFrameCSMMetrics = (t) => {
                      e.startSafeFrameCSM.set(t, new Date());
                    }),
                    (e.startSafeFrameCSAMetrics = (t) => {
                      e.startSafeFrameCSA.set(t, new Date());
                    }));
                  var n = `perf:sf:grandprix`,
                    r = (e, t, n) => `${e}${n ? `:${n.placementName}` : ``} - ${t}`,
                    i = (e, t, n) => {
                      var i, a;
                      let o = r(e, t, n);
                      return ((i = performance) == null || (a = i.mark) == null || a.call(i, o), o);
                    };
                  Array.from({ length: 100 }, (e, t) => (t + 1) / 100);
                  var a = `data-val`,
                    o = (e) => {
                      var t, n;
                      if (e === ``) return ``;
                      let r = `ape_${e}_placement_ClickTracking`,
                        i = document.getElementById(r);
                      return (t = i == null || (n = i.getAttribute) == null ? void 0 : n.call(i, a)) == null ? `` : t;
                    },
                    s = (e, t, { placementName: n }) => {
                      let r = o(n),
                        i = { command: `percolateClickTracking`, data: r };
                      (t.postMessage(i), e.setAttribute(`data-sent-percolate-click-tracking-params`, r));
                    },
                    c = (e, t) => {
                      let r = document.getElementById(t);
                      return r
                        ? (i(n, `${t} exists`), Promise.resolve(r))
                        : new Promise((r) => {
                            new MutationObserver((e, a) => {
                              let o = document.getElementById(t);
                              o && (i(n, `${t} found during mutation`), a.disconnect(), r(o));
                            }).observe(e, { subtree: !0, childList: !0 });
                          });
                    },
                    l = (e, t = 10, r = 2e4) =>
                      new Promise((a, o) => {
                        let s = Date.now(),
                          c = setInterval(() => {
                            window.APE_SF
                              ? (i(n, `Host found inside waitForWindowHostVariable`, e), clearInterval(c), a())
                              : Date.now() - s >= r &&
                                (clearInterval(c),
                                i(n, `Timed out waiting for sf host in waitForWindowHostVariable`, e),
                                o());
                          }, t);
                      }),
                    u = class {
                      static listenForSFIFrameLoad(e, t) {
                        var r = this;
                        window.addEventListener(`message`, async (a) => {
                          var o, l, u;
                          if (a.data !== `sf iframe ready`) return;
                          let d = document.getElementById(t);
                          if (d === null) return;
                          let f = await c(d, e);
                          if (a.source !== f.contentWindow) return;
                          let p = JSON.parse(f.getAttribute(`name`));
                          (f.setAttribute(`data-iframe-ready`, `true`), i(n, `data-iframe-ready`, p));
                          let m = (o = a.ports[0]) == null ? ((l = a.data) == null ? void 0 : l.messagePort) : o;
                          (((u = window.renderingWeblabs) == null ||
                          (u = u.APM_STORES_JPS_JRS_SAFEFRAME_CLICK_TRACKING_PAINTER_TEST_1259727) == null
                            ? void 0
                            : u.toUpperCase()) !== `T1` && s(f, m, p),
                            r.fastSafeFrameLoad(p, `sf-host-load_${t}`, m));
                        });
                      }
                      static async fastSafeFrameLoad(e, r, a) {
                        try {
                          (i(n, `fastSafeFrameLoad start`, e),
                            window.APE_SF || (i(n, `waitUntilElementExists`, e), await l(e)),
                            window.APE_SF
                              ? (i(n, `host exists`, e),
                                window.APE_SF.setupMessageChannel(a, e, t.startSafeFrameCSM.get(e.adUnitPlacementId)))
                              : (i(n, `host doesn't exists`, e),
                                document.getElementById(r).addEventListener(`load`, (r) => {
                                  (i(n, `SF host loaded`, e),
                                    window.APE_SF.setupMessageChannel(
                                      a,
                                      e,
                                      t.startSafeFrameCSM.get(e.adUnitPlacementId),
                                    ));
                                })));
                        } catch (e) {
                          var o, s;
                          (console.error(e),
                            (o = (s = window).ueLogError) == null ||
                              o.call(s, e, { logLevel: `ERROR`, attribution: `APE-safeframe`, message: `` }));
                        }
                      }
                    };
                  window.grandprix || (window.grandprix = { metrics: t, wrappers: u });
                })();
                //# sourceMappingURL=grandprix-modern.js.map

/* --- inline script #249 --- */
if (window.ue && typeof window.ue.count === "function") {
                  window.ue.count("adplacements:adload:htmlreached", 1);
                }
                if (window.csa) {
                  try {
                    window.csa("Events", { producerId: "adplacements" })(
                      "log",
                      { schemaId: "ApeSafeframe.csaEvent.1", metricName: "adload:htmlreached", metricValue: 1 },
                      { ent: "all" },
                    );
                  } catch (ex) {}
                }

/* --- inline script #250 --- */
if (window.ue && typeof window.ue.count === "function") {
                  window.ue.count("adplacements:adload:htmlreached:Detail_dp-ads-center-promo_Desktop", 1);
                }
                if (window.csa) {
                  try {
                    window.csa("Events", { producerId: "adplacements" })(
                      "log",
                      {
                        schemaId: "ApeSafeframe.csaEvent.1",
                        metricName:
                          "adload:htmlreached:Detail_dp-ads-center-promo_Desktop:32fc627e-b509-489a-93e0-f2589ab00826",
                        metricValue: 1,
                      },
                      { ent: "all" },
                    );
                  } catch (ex) {}
                }

/* --- inline script #251 --- */
window.grandprix.metrics.startSafeFrameCSMMetrics("ape_Detail_dp-ads-center-promo_Desktop_placement");
                window.grandprix.metrics.startSafeFrameCSAMetrics("ape_Detail_dp-ads-center-promo_Desktop_placement");

/* --- inline script #252 --- */
window.grandprix.wrappers.listenForSFIFrameLoad(
                    "ape_Detail_dp-ads-center-promo_Desktop_iframe",
                    "ape_Detail_dp-ads-center-promo_Desktop_placement",
                  );

/* --- inline script #253 --- */
(function () {
                      const script = document.createElement("script");
                      script.src = "https://m.media-amazon.com/images/I/11m16uzbS8L.js";
                      script.defer = true;
                      script.fetchPriority = "low";
                      script.onload = () => {
                        adFeedback.initializeSponsoredLabel("dp-ads-center-promo", "", false, "", "", "");
                      };
                      document
                        .getElementById("ape_Detail_dp-ads-center-promo_Desktop_placement_Feedback")
                        .appendChild(script);
                    })();

/* --- inline script #254 --- */
if (window.ue && typeof window.ue.count === "function") {
                    window.ue.count("adplacements:adfeedback:sponsoredlabelrendered", 1);
                  }
                  if (window.csa) {
                    try {
                      window.csa("Events", { producerId: "adplacements" })(
                        "log",
                        {
                          schemaId: "ApeSafeframe.csaEvent.1",
                          metricName: "adfeedback:sponsoredlabelrendered",
                          metricValue: 1,
                        },
                        { ent: "all" },
                      );
                    } catch (ex) {}
                  }

/* --- inline script #255 --- */
if (window.ue && typeof window.ue.count === "function") {
                    window.ue.count(
                      "adplacements:adfeedback:sponsoredlabelrendered:host:Detail_dp-ads-center-promo_Desktop",
                      1,
                    );
                  }
                  if (window.csa) {
                    try {
                      window.csa("Events", { producerId: "adplacements" })(
                        "log",
                        {
                          schemaId: "ApeSafeframe.csaEvent.1",
                          metricName:
                            "adfeedback:sponsoredlabelrendered:host:Detail_dp-ads-center-promo_Desktop:32fc627e-b509-489a-93e0-f2589ab00826",
                          metricValue: 1,
                        },
                        { ent: "all" },
                      );
                    } catch (ex) {}
                  }

/* --- inline script #256 --- */
if (window.mix_csa) {
                  window.mix_csa(
                    '[cel_widget_id="multi-brand-video-desktop_DetailPage_0"]',
                    "#CardInstanceQjrRl5w9rXa3AEbW3pIuCQ",
                  )("mark", "bb");
                }

/* --- inline script #257 --- */
if (window.uet) {
                  window.uet("bb", "multi-brand-video-desktop_DetailPage_0", { wb: 1 });
                }

/* --- inline script #258 --- */
if (window.mix_csa) {
                  window.mix_csa(
                    '[cel_widget_id="multi-brand-video-desktop_DetailPage_0"]',
                    "#CardInstanceQjrRl5w9rXa3AEbW3pIuCQ",
                  )("mark", "be");
                }

/* --- inline script #259 --- */
if (window.uet) {
                  window.uet("be", "multi-brand-video-desktop_DetailPage_0", { wb: 1 });
                }

/* --- inline script #260 --- */
if (window.mixTimeout) {
                  window.mixTimeout("multi-brand-video-desktop", "CardInstanceQjrRl5w9rXa3AEbW3pIuCQ", 90000);
                }
                P.when("mix:@amzn/mix.client-runtime", "mix:multi-brand-video-desktop__vkfa0W3M").execute(
                  function (runtime, cardModule) {
                    runtime.registerCardFactory("CardInstanceQjrRl5w9rXa3AEbW3pIuCQ", cardModule).then(function () {
                      if (window.mix_csa) {
                        window.mix_csa(
                          '[cel_widget_id="multi-brand-video-desktop_DetailPage_0"]',
                          "#CardInstanceQjrRl5w9rXa3AEbW3pIuCQ",
                        )("mark", "functional");
                      }
                      if (window.uex) {
                        window.uex("ld", "multi-brand-video-desktop_DetailPage_0", { wb: 1 });
                      }
                    });
                  },
                );

/* --- inline script #261 --- */
P.load.js("https://m.media-amazon.com/images/I/61V9P0As--L.js?xcp");

/* --- inline script #262 --- */
{}

/* --- inline script #263 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                    "https://m.media-amazon.com/images/I/41gAgISBaAL._RC|21EfejafhkL.js,41K894oxCxL.js,31GvN5M90KL.js,41l6Ts6x3oL.js_.js?AUIClients/DesktopMedleyFilteringMetaAsset#386124-T1.666973-T1",
                  );

/* --- inline script #264 --- */
if (window.mix_csa) {
                              window.mix_csa(
                                '[cel_widget_id="cr-ratings-histogram_customer-reviews-detail_0"]',
                                "#CardInstance8OeeDqEwMRo2XszNZdtHjQ",
                              )("mark", "bb");
                            }

/* --- inline script #265 --- */
if (window.uet) {
                              window.uet("bb", "cr-ratings-histogram_customer-reviews-detail_0", { wb: 1 });
                            }

/* --- inline script #266 --- */
if (window.mix_csa) {
                              window.mix_csa(
                                '[cel_widget_id="cr-ratings-histogram_customer-reviews-detail_0"]',
                                "#CardInstance8OeeDqEwMRo2XszNZdtHjQ",
                              )("mark", "be");
                            }

/* --- inline script #267 --- */
if (window.uet) {
                              window.uet("be", "cr-ratings-histogram_customer-reviews-detail_0", { wb: 1 });
                            }

/* --- inline script #268 --- */
if (window.mix_csa) {
                              window.mix_csa(
                                '[cel_widget_id="cr-ratings-histogram_customer-reviews-detail_0"]',
                                "#CardInstance8OeeDqEwMRo2XszNZdtHjQ",
                              )("mark", "functional");
                            }
                            if (window.uex) {
                              window.uex("ld", "cr-ratings-histogram_customer-reviews-detail_0", { wb: 1 });
                            }

/* --- inline script #269 --- */
window.renderingWeblabs = window.renderingWeblabs ? window.renderingWeblabs : {};
                            window.renderingWeblabs = Object.assign(
                              window.renderingWeblabs,
                              JSON.parse(
                                '{"ADPT_SF_HIGH_RATE_METRIC_LOGGING_1256364":"C","APM_STORES_JPS_JRS_SAFEFRAME_BG_COLOR_TOGGLE_1329269":"T1","APM_STORES_JPS_JRS_SAFEFRAME_RESPONSIVE_SIZING_1314203":"T1","APM_STORES_JPS_JRS_SAFEFRAME_NEW_JRS_ADDETAILS_1335584":"T1","APM_STORES_JPS_JRS_SAFEFRAME_SHOWADFEEDBACK_FALSE_SLOTS_1380760":"T1","APM_STORES_JPS_JRS_SAFEFRAME_SL_ON_DOSSIER_1362947":"T1","ADPT_SF_HOMEPAGE_ART_THEMING_1298909":"C","APM_STORES_JPS_JRS_SAFEFRAME_DISABLE_LAUNCH_INTENT_1331357":"T1","ADPT_SF_GWATF_ROUNDED_CORNERS_1036948":"T1","APM_STORES_JPS_JRS_SAFEFRAME_IFRAME_READY_RETRY_1374491":"T1","APM_STORES_JPS_JRS_SAFEFRAME_LIGHT_AD_CREATIVE_SIZE_STYLE_1311018":"T1"}',
                              ),
                            );

/* --- inline script #270 --- */
(function () {
                              var e,
                                t = class {};
                              ((e = t),
                                (e.startSafeFrameCSM = new Map()),
                                (e.startSafeFrameCSA = new Map()),
                                (e.startSafeFrameCSMMetrics = (t) => {
                                  e.startSafeFrameCSM.set(t, new Date());
                                }),
                                (e.startSafeFrameCSAMetrics = (t) => {
                                  e.startSafeFrameCSA.set(t, new Date());
                                }));
                              var n = `perf:sf:grandprix`,
                                r = (e, t, n) => `${e}${n ? `:${n.placementName}` : ``} - ${t}`,
                                i = (e, t, n) => {
                                  var i, a;
                                  let o = r(e, t, n);
                                  return ((i = performance) == null || (a = i.mark) == null || a.call(i, o), o);
                                };
                              Array.from({ length: 100 }, (e, t) => (t + 1) / 100);
                              var a = `data-val`,
                                o = (e) => {
                                  var t, n;
                                  if (e === ``) return ``;
                                  let r = `ape_${e}_placement_ClickTracking`,
                                    i = document.getElementById(r);
                                  return (t = i == null || (n = i.getAttribute) == null ? void 0 : n.call(i, a)) == null
                                    ? ``
                                    : t;
                                },
                                s = (e, t, { placementName: n }) => {
                                  let r = o(n),
                                    i = { command: `percolateClickTracking`, data: r };
                                  (t.postMessage(i), e.setAttribute(`data-sent-percolate-click-tracking-params`, r));
                                },
                                c = (e, t) => {
                                  let r = document.getElementById(t);
                                  return r
                                    ? (i(n, `${t} exists`), Promise.resolve(r))
                                    : new Promise((r) => {
                                        new MutationObserver((e, a) => {
                                          let o = document.getElementById(t);
                                          o && (i(n, `${t} found during mutation`), a.disconnect(), r(o));
                                        }).observe(e, { subtree: !0, childList: !0 });
                                      });
                                },
                                l = (e, t = 10, r = 2e4) =>
                                  new Promise((a, o) => {
                                    let s = Date.now(),
                                      c = setInterval(() => {
                                        window.APE_SF
                                          ? (i(n, `Host found inside waitForWindowHostVariable`, e),
                                            clearInterval(c),
                                            a())
                                          : Date.now() - s >= r &&
                                            (clearInterval(c),
                                            i(n, `Timed out waiting for sf host in waitForWindowHostVariable`, e),
                                            o());
                                      }, t);
                                  }),
                                u = class {
                                  static listenForSFIFrameLoad(e, t) {
                                    var r = this;
                                    window.addEventListener(`message`, async (a) => {
                                      var o, l, u;
                                      if (a.data !== `sf iframe ready`) return;
                                      let d = document.getElementById(t);
                                      if (d === null) return;
                                      let f = await c(d, e);
                                      if (a.source !== f.contentWindow) return;
                                      let p = JSON.parse(f.getAttribute(`name`));
                                      (f.setAttribute(`data-iframe-ready`, `true`), i(n, `data-iframe-ready`, p));
                                      let m =
                                        (o = a.ports[0]) == null ? ((l = a.data) == null ? void 0 : l.messagePort) : o;
                                      (((u = window.renderingWeblabs) == null ||
                                      (u = u.APM_STORES_JPS_JRS_SAFEFRAME_CLICK_TRACKING_PAINTER_TEST_1259727) == null
                                        ? void 0
                                        : u.toUpperCase()) !== `T1` && s(f, m, p),
                                        r.fastSafeFrameLoad(p, `sf-host-load_${t}`, m));
                                    });
                                  }
                                  static async fastSafeFrameLoad(e, r, a) {
                                    try {
                                      (i(n, `fastSafeFrameLoad start`, e),
                                        window.APE_SF || (i(n, `waitUntilElementExists`, e), await l(e)),
                                        window.APE_SF
                                          ? (i(n, `host exists`, e),
                                            window.APE_SF.setupMessageChannel(
                                              a,
                                              e,
                                              t.startSafeFrameCSM.get(e.adUnitPlacementId),
                                            ))
                                          : (i(n, `host doesn't exists`, e),
                                            document.getElementById(r).addEventListener(`load`, (r) => {
                                              (i(n, `SF host loaded`, e),
                                                window.APE_SF.setupMessageChannel(
                                                  a,
                                                  e,
                                                  t.startSafeFrameCSM.get(e.adUnitPlacementId),
                                                ));
                                            })));
                                    } catch (e) {
                                      var o, s;
                                      (console.error(e),
                                        (o = (s = window).ueLogError) == null ||
                                          o.call(s, e, {
                                            logLevel: `ERROR`,
                                            attribution: `APE-safeframe`,
                                            message: ``,
                                          }));
                                    }
                                  }
                                };
                              window.grandprix || (window.grandprix = { metrics: t, wrappers: u });
                            })();
                            //# sourceMappingURL=grandprix-modern.js.map

/* --- inline script #271 --- */
if (window.ue && typeof window.ue.count === "function") {
                              window.ue.count("adplacements:adload:htmlreached", 1);
                            }
                            if (window.csa) {
                              try {
                                window.csa("Events", { producerId: "adplacements" })(
                                  "log",
                                  {
                                    schemaId: "ApeSafeframe.csaEvent.1",
                                    metricName: "adload:htmlreached",
                                    metricValue: 1,
                                  },
                                  { ent: "all" },
                                );
                              } catch (ex) {}
                            }

/* --- inline script #272 --- */
if (window.ue && typeof window.ue.count === "function") {
                              window.ue.count("adplacements:adload:htmlreached:Detail_customer-reviews-top_Glance", 1);
                            }
                            if (window.csa) {
                              try {
                                window.csa("Events", { producerId: "adplacements" })(
                                  "log",
                                  {
                                    schemaId: "ApeSafeframe.csaEvent.1",
                                    metricName:
                                      "adload:htmlreached:Detail_customer-reviews-top_Glance:a5a58631-9157-450d-8b12-21b15ea5926d",
                                    metricValue: 1,
                                  },
                                  { ent: "all" },
                                );
                              } catch (ex) {}
                            }

/* --- inline script #273 --- */
window.grandprix.metrics.startSafeFrameCSMMetrics(
                              "ape_Detail_customer-reviews-top_Glance_placement",
                            );
                            window.grandprix.metrics.startSafeFrameCSAMetrics(
                              "ape_Detail_customer-reviews-top_Glance_placement",
                            );

/* --- inline script #274 --- */
window.grandprix.wrappers.listenForSFIFrameLoad(
                                "ape_Detail_customer-reviews-top_Glance_iframe",
                                "ape_Detail_customer-reviews-top_Glance_placement",
                              );

/* --- inline script #275 --- */
(function () {
                                  const script = document.createElement("script");
                                  script.src = "https://m.media-amazon.com/images/I/11m16uzbS8L.js";
                                  script.defer = true;
                                  script.fetchPriority = "low";
                                  script.onload = () => {
                                    adFeedback.initializeSponsoredLabel("customer-reviews-top", "", false, "", "", "");
                                  };
                                  document
                                    .getElementById("ape_Detail_customer-reviews-top_Glance_placement_Feedback")
                                    .appendChild(script);
                                })();

/* --- inline script #276 --- */
if (window.ue && typeof window.ue.count === "function") {
                                window.ue.count("adplacements:adfeedback:sponsoredlabelrendered", 1);
                              }
                              if (window.csa) {
                                try {
                                  window.csa("Events", { producerId: "adplacements" })(
                                    "log",
                                    {
                                      schemaId: "ApeSafeframe.csaEvent.1",
                                      metricName: "adfeedback:sponsoredlabelrendered",
                                      metricValue: 1,
                                    },
                                    { ent: "all" },
                                  );
                                } catch (ex) {}
                              }

/* --- inline script #277 --- */
if (window.ue && typeof window.ue.count === "function") {
                                window.ue.count(
                                  "adplacements:adfeedback:sponsoredlabelrendered:host:Detail_customer-reviews-top_Glance",
                                  1,
                                );
                              }
                              if (window.csa) {
                                try {
                                  window.csa("Events", { producerId: "adplacements" })(
                                    "log",
                                    {
                                      schemaId: "ApeSafeframe.csaEvent.1",
                                      metricName:
                                        "adfeedback:sponsoredlabelrendered:host:Detail_customer-reviews-top_Glance:a5a58631-9157-450d-8b12-21b15ea5926d",
                                      metricValue: 1,
                                    },
                                    { ent: "all" },
                                  );
                                } catch (ex) {}
                              }

/* --- inline script #278 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P)
                                  .when("dpJsAssetsLoadMarker")
                                  .execute(function () {
                                    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                                      "https://m.media-amazon.com/images/S/sash/W2IABX2MxgnWcu8.js?AUIClients/",
                                    );
                                    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                                      "https://m.media-amazon.com/images/S/sash/Haq5GKZE43Nq-aB._RCs|fEfuYicEUkKmGvA.js,oGXjegImpg$t$hw.js,dO3FyOazv-LBdHB.js,pPGUg8TRuv6BoKQ.js,GzghzgN8SWH60np.js,0CZ8dUqf2z5eClT.js,19FvC3K2AnbXm-l.js,5SoMqO0XyJcoRUG.js,bce6n4CJ26$F5QH.js_.js?AUIClients/",
                                    );
                                    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                                      "https://m.media-amazon.com/images/S/sash/S8QBnM7TeWc6izA._RCs|5ubaarKOKlHi3mo.js,AwlMYWpaDB3rq8n.js,bDEaZM1phkLIhka.js_.js?AUIClients/",
                                    );
                                    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                                      "https://m.media-amazon.com/images/S/sash/qRbtxSzneGIOlIQ.js?AUIClients/",
                                    );
                                    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                                      "https://m.media-amazon.com/images/S/sash/gnwHnol5e3xUDm5.js?AUIClients/",
                                    );
                                    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                                      "https://m.media-amazon.com/images/S/sash/mRZlLiHXOR1kH33.js?AUIClients/",
                                    );
                                    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                                      "https://m.media-amazon.com/images/S/sash/lYDYtt9eX$helh2.js?AUIClients/",
                                    );
                                    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                                      "https://m.media-amazon.com/images/S/sash/ASCr7hoQugAj$GE.js?AUIClients/",
                                    );
                                    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                                      "https://m.media-amazon.com/images/S/sash/ZvVi4Gd5$nWC4xE.js?AUIClients/",
                                    );
                                    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                                      "https://m.media-amazon.com/images/S/sash/oQwXvkBtcObY5pA.js?AUIClients/",
                                    );
                                    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                                      "https://m.media-amazon.com/images/S/sash/$JTa91mIaN-saL3.js?AUIClients/",
                                    );
                                    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                                      "https://m.media-amazon.com/images/S/sash/IAc9h8ME02XVQ8G.js?AUIClients/",
                                    );
                                    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                                      "https://m.media-amazon.com/images/S/sash/QKTOEMklX88wEP1.js?AUIClients/",
                                    );
                                    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                                      "https://m.media-amazon.com/images/S/sash/HVnmciqR$I4TojS.js?AUIClients/",
                                    );
                                    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                                      "https://m.media-amazon.com/images/S/sash/b-d$1F6ruOCDAG5.js?AUIClients/",
                                    );
                                    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                                      "https://m.media-amazon.com/images/S/sash/xMtYvvoGGAphpCS.js?AUIClients/",
                                    );
                                    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                                      "https://m.media-amazon.com/images/S/sash/NTZt9Lp00Lwds0D.js?AUIClients/",
                                    );
                                    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                                      "https://m.media-amazon.com/images/S/sash/lbm4w-saXfQVPX1.js?AUIClients/",
                                    );
                                    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                                      "https://m.media-amazon.com/images/S/sash/JkS0ntFLTeucHll.js?AUIClients/",
                                    );
                                    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                                      "https://m.media-amazon.com/images/S/sash/7Is3Icon5011sCD.js?AUIClients/",
                                    );
                                    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                                      "https://m.media-amazon.com/images/S/sash/$obVZGX8JB9sACX.js?AUIClients/",
                                    );
                                    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                                      "https://m.media-amazon.com/images/S/sash/8ymRhGGyAvVWp24.js?AUIClients/",
                                    );
                                    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                                      "https://m.media-amazon.com/images/S/sash/NORKcVIXRFDfszi.js?AUIClients/",
                                    );
                                    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                                      "https://m.media-amazon.com/images/S/sash/LpMJ1TzdLsyyKjM.js?AUIClients/",
                                    );
                                    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                                      "https://m.media-amazon.com/images/S/sash/L6C8LSu6IV00yI7.js?AUIClients/",
                                    );
                                  });

/* --- inline script #279 --- */
function toggleSeeAllRankingView() {
                                  P.when("A", "cr-ranking-image-popover-controller").execute(
                                    function (A, imagePopoverController) {
                                      imagePopoverController.toggleSeeAllView(true);
                                    },
                                  );
                                }

/* --- inline script #280 --- */
if (window.mix_csa) {
                                  window.mix_csa(
                                    '[cel_widget_id="cr-media-carousel_customer-reviews-detail-media_0"]',
                                    "#CardInstanceJ4AOCwUuBKJ4BY1kYNYpqA",
                                  )("mark", "bb");
                                }

/* --- inline script #281 --- */
if (window.uet) {
                                  window.uet("bb", "cr-media-carousel_customer-reviews-detail-media_0", { wb: 1 });
                                }

/* --- inline script #282 --- */
if (window.mix_csa) {
                                  window.mix_csa(
                                    '[cel_widget_id="cr-media-carousel_customer-reviews-detail-media_0"]',
                                    "#CardInstanceJ4AOCwUuBKJ4BY1kYNYpqA",
                                  )("mark", "be");
                                }

/* --- inline script #283 --- */
if (window.uet) {
                                  window.uet("be", "cr-media-carousel_customer-reviews-detail-media_0", { wb: 1 });
                                }

/* --- inline script #284 --- */
if (window.mixTimeout) {
                                  window.mixTimeout("cr-media-carousel", "CardInstanceJ4AOCwUuBKJ4BY1kYNYpqA", 90000);
                                }
                                P.when("mix:@amzn/mix.client-runtime", "mix:cr-media-carousel__dNyrUJyH").execute(
                                  function (runtime, cardModule) {
                                    runtime
                                      .registerCardFactory("CardInstanceJ4AOCwUuBKJ4BY1kYNYpqA", cardModule)
                                      .then(function () {
                                        if (window.mix_csa) {
                                          window.mix_csa(
                                            '[cel_widget_id="cr-media-carousel_customer-reviews-detail-media_0"]',
                                            "#CardInstanceJ4AOCwUuBKJ4BY1kYNYpqA",
                                          )("mark", "functional");
                                        }
                                        if (window.uex) {
                                          window.uex("ld", "cr-media-carousel_customer-reviews-detail-media_0", {
                                            wb: 1,
                                          });
                                        }
                                      });
                                  },
                                );

/* --- inline script #285 --- */
P.load.js("https://m.media-amazon.com/images/I/918vEg68+nL.js?xcp");

/* --- inline script #286 --- */
P.when("A", "cr-ranking-image-popover-controller").execute(
                                function (A, imagePopoverController) {
                                  A.on("a:popover:beforeShow:widget_customer_image_gallery", function (data) {
                                    imagePopoverController.loadDataAndInitImageGalleryPopover(
                                      data,
                                      "B01LBI1BIO",
                                      [],
                                      "hKjG5Z2laKTbvU%2BfUglCHynH1tktWIW5a4w9BHs3OCPvAAAAAGn6Tg0AAAAB",
                                    );
                                  });
                                },
                              );

/* --- inline script #287 --- */
if (window.ue) {
                                                    ue.count("DesktopCredibleBadgesInTopReviewsDetailPageCount", 0);
                                                  }

/* --- inline script #288 --- */
(function () {
                                                      P.when("cr-A", "ready").execute(function (A) {
                                                        if (typeof A.toggleExpanderAriaLabel === "function") {
                                                          A.toggleExpanderAriaLabel(
                                                            "review_text_read_more",
                                                            "Read more of this review",
                                                            "Read less of this review",
                                                          );
                                                        }
                                                      });
                                                    })();

/* --- inline script #289 --- */
if (window.ue) {
                                                    ue.count("DesktopCredibleBadgesInTopReviewsDetailPageCount", 0);
                                                  }

/* --- inline script #290 --- */
if (window.ue) {
                                                    ue.count("DesktopCredibleBadgesInTopReviewsDetailPageCount", 0);
                                                  }

/* --- inline script #291 --- */
function toggleSeeAllView() {
                                                      P.when("A", "cr-image-popover-controller").execute(
                                                        function (A, imagePopoverController) {
                                                          imagePopoverController.toggleSeeAllView(true);
                                                        },
                                                      );
                                                    }

/* --- inline script #292 --- */
P.when("A", "cr-image-popover-controller").execute(
                                                    function (A, imagePopoverController) {
                                                      A.on(
                                                        "a:popover:beforeShow:RJ2R2ZE689LW5_gallerySection_main",
                                                        function (data) {
                                                          imagePopoverController.initImagePopover(
                                                            "RJ2R2ZE689LW5",
                                                            "[https://m.media-amazon.com/images/I/61kfwpVJXtL.jpg, https://m.media-amazon.com/images/I/61jzT7hTxSL.jpg]",
                                                            data,
                                                          );
                                                        },
                                                      );
                                                    },
                                                  );

/* --- inline script #293 --- */
if (window.ue) {
                                                    ue.count("DesktopCredibleBadgesInTopReviewsDetailPageCount", 0);
                                                  }

/* --- inline script #294 --- */
function toggleSeeAllView() {
                                                      P.when("A", "cr-image-popover-controller").execute(
                                                        function (A, imagePopoverController) {
                                                          imagePopoverController.toggleSeeAllView(true);
                                                        },
                                                      );
                                                    }

/* --- inline script #295 --- */
P.when("A", "cr-image-popover-controller").execute(
                                                    function (A, imagePopoverController) {
                                                      A.on(
                                                        "a:popover:beforeShow:R3IXRIZ298Y2IA_gallerySection_main",
                                                        function (data) {
                                                          imagePopoverController.initImagePopover(
                                                            "R3IXRIZ298Y2IA",
                                                            "[https://m.media-amazon.com/images/I/615Qyi0TWXL.jpg]",
                                                            data,
                                                          );
                                                        },
                                                      );
                                                    },
                                                  );

/* --- inline script #296 --- */
if (window.ue) {
                                                  ue.count("DesktopCredibleBadgesInTopReviewsDetailPageCount", 0);
                                                }

/* --- inline script #297 --- */
(function () {
                                                    P.when("cr-A", "ready").execute(function (A) {
                                                      if (typeof A.toggleExpanderAriaLabel === "function") {
                                                        A.toggleExpanderAriaLabel(
                                                          "review_text_read_more",
                                                          "Read more of this review",
                                                          "Read less of this review",
                                                        );
                                                      }
                                                    });
                                                  })();

/* --- inline script #298 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P)
                  .when("A", "dram-lazy-load-widget", "ready")
                  .execute(function (A) {
                    A.trigger(
                      "dram:register-lazy-load-widget",
                      "#DetailPage_sims-container_desktop-dp-sims_2_container",
                      2500,
                      "DetailPage_desktop",
                      true,
                    );
                  });

/* --- inline script #299 --- */
{
                  "encryptedLazyLoadRenderRequest": "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",
                  "version": "V2"
                }

/* --- inline script #300 --- */
{"eelEndpoint":"https://unagi-na.amazon.com/1/events/com.amazon.eel.SponsoredProductsEventTracking.prod"}

/* --- inline script #301 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                "https://m.media-amazon.com/images/I/41imcj3hIOL.js?AUIClients/DramAssets#1268367-T1",
              );

/* --- inline script #302 --- */
window.renderingWeblabs = window.renderingWeblabs ? window.renderingWeblabs : {};
                window.renderingWeblabs = Object.assign(
                  window.renderingWeblabs,
                  JSON.parse(
                    '{"ADPT_SF_HIGH_RATE_METRIC_LOGGING_1256364":"C","APM_STORES_JPS_JRS_SAFEFRAME_BG_COLOR_TOGGLE_1329269":"T1","APM_STORES_JPS_JRS_SAFEFRAME_RESPONSIVE_SIZING_1314203":"T1","APM_STORES_JPS_JRS_SAFEFRAME_NEW_JRS_ADDETAILS_1335584":"T1","APM_STORES_JPS_JRS_SAFEFRAME_SHOWADFEEDBACK_FALSE_SLOTS_1380760":"T1","APM_STORES_JPS_JRS_SAFEFRAME_SL_ON_DOSSIER_1362947":"T1","ADPT_SF_HOMEPAGE_ART_THEMING_1298909":"C","APM_STORES_JPS_JRS_SAFEFRAME_DISABLE_LAUNCH_INTENT_1331357":"T1","ADPT_SF_GWATF_ROUNDED_CORNERS_1036948":"T1","APM_STORES_JPS_JRS_SAFEFRAME_IFRAME_READY_RETRY_1374491":"T1","APM_STORES_JPS_JRS_SAFEFRAME_LIGHT_AD_CREATIVE_SIZE_STYLE_1311018":"T1"}',
                  ),
                );

/* --- inline script #303 --- */
(function () {
                  var e,
                    t = class {};
                  ((e = t),
                    (e.startSafeFrameCSM = new Map()),
                    (e.startSafeFrameCSA = new Map()),
                    (e.startSafeFrameCSMMetrics = (t) => {
                      e.startSafeFrameCSM.set(t, new Date());
                    }),
                    (e.startSafeFrameCSAMetrics = (t) => {
                      e.startSafeFrameCSA.set(t, new Date());
                    }));
                  var n = `perf:sf:grandprix`,
                    r = (e, t, n) => `${e}${n ? `:${n.placementName}` : ``} - ${t}`,
                    i = (e, t, n) => {
                      var i, a;
                      let o = r(e, t, n);
                      return ((i = performance) == null || (a = i.mark) == null || a.call(i, o), o);
                    };
                  Array.from({ length: 100 }, (e, t) => (t + 1) / 100);
                  var a = `data-val`,
                    o = (e) => {
                      var t, n;
                      if (e === ``) return ``;
                      let r = `ape_${e}_placement_ClickTracking`,
                        i = document.getElementById(r);
                      return (t = i == null || (n = i.getAttribute) == null ? void 0 : n.call(i, a)) == null ? `` : t;
                    },
                    s = (e, t, { placementName: n }) => {
                      let r = o(n),
                        i = { command: `percolateClickTracking`, data: r };
                      (t.postMessage(i), e.setAttribute(`data-sent-percolate-click-tracking-params`, r));
                    },
                    c = (e, t) => {
                      let r = document.getElementById(t);
                      return r
                        ? (i(n, `${t} exists`), Promise.resolve(r))
                        : new Promise((r) => {
                            new MutationObserver((e, a) => {
                              let o = document.getElementById(t);
                              o && (i(n, `${t} found during mutation`), a.disconnect(), r(o));
                            }).observe(e, { subtree: !0, childList: !0 });
                          });
                    },
                    l = (e, t = 10, r = 2e4) =>
                      new Promise((a, o) => {
                        let s = Date.now(),
                          c = setInterval(() => {
                            window.APE_SF
                              ? (i(n, `Host found inside waitForWindowHostVariable`, e), clearInterval(c), a())
                              : Date.now() - s >= r &&
                                (clearInterval(c),
                                i(n, `Timed out waiting for sf host in waitForWindowHostVariable`, e),
                                o());
                          }, t);
                      }),
                    u = class {
                      static listenForSFIFrameLoad(e, t) {
                        var r = this;
                        window.addEventListener(`message`, async (a) => {
                          var o, l, u;
                          if (a.data !== `sf iframe ready`) return;
                          let d = document.getElementById(t);
                          if (d === null) return;
                          let f = await c(d, e);
                          if (a.source !== f.contentWindow) return;
                          let p = JSON.parse(f.getAttribute(`name`));
                          (f.setAttribute(`data-iframe-ready`, `true`), i(n, `data-iframe-ready`, p));
                          let m = (o = a.ports[0]) == null ? ((l = a.data) == null ? void 0 : l.messagePort) : o;
                          (((u = window.renderingWeblabs) == null ||
                          (u = u.APM_STORES_JPS_JRS_SAFEFRAME_CLICK_TRACKING_PAINTER_TEST_1259727) == null
                            ? void 0
                            : u.toUpperCase()) !== `T1` && s(f, m, p),
                            r.fastSafeFrameLoad(p, `sf-host-load_${t}`, m));
                        });
                      }
                      static async fastSafeFrameLoad(e, r, a) {
                        try {
                          (i(n, `fastSafeFrameLoad start`, e),
                            window.APE_SF || (i(n, `waitUntilElementExists`, e), await l(e)),
                            window.APE_SF
                              ? (i(n, `host exists`, e),
                                window.APE_SF.setupMessageChannel(a, e, t.startSafeFrameCSM.get(e.adUnitPlacementId)))
                              : (i(n, `host doesn't exists`, e),
                                document.getElementById(r).addEventListener(`load`, (r) => {
                                  (i(n, `SF host loaded`, e),
                                    window.APE_SF.setupMessageChannel(
                                      a,
                                      e,
                                      t.startSafeFrameCSM.get(e.adUnitPlacementId),
                                    ));
                                })));
                        } catch (e) {
                          var o, s;
                          (console.error(e),
                            (o = (s = window).ueLogError) == null ||
                              o.call(s, e, { logLevel: `ERROR`, attribution: `APE-safeframe`, message: `` }));
                        }
                      }
                    };
                  window.grandprix || (window.grandprix = { metrics: t, wrappers: u });
                })();
                //# sourceMappingURL=grandprix-modern.js.map

/* --- inline script #304 --- */
if (window.ue && typeof window.ue.count === "function") {
                  window.ue.count("adplacements:adload:htmlreached", 1);
                }
                if (window.csa) {
                  try {
                    window.csa("Events", { producerId: "adplacements" })(
                      "log",
                      { schemaId: "ApeSafeframe.csaEvent.1", metricName: "adload:htmlreached", metricValue: 1 },
                      { ent: "all" },
                    );
                  } catch (ex) {}
                }

/* --- inline script #305 --- */
if (window.ue && typeof window.ue.count === "function") {
                  window.ue.count("adplacements:adload:htmlreached:Detail_ad-endcap-1_Glance", 1);
                }
                if (window.csa) {
                  try {
                    window.csa("Events", { producerId: "adplacements" })(
                      "log",
                      {
                        schemaId: "ApeSafeframe.csaEvent.1",
                        metricName: "adload:htmlreached:Detail_ad-endcap-1_Glance:6e8849f7-64c3-45e5-a732-d4ef8c06246b",
                        metricValue: 1,
                      },
                      { ent: "all" },
                    );
                  } catch (ex) {}
                }

/* --- inline script #306 --- */
window.grandprix.metrics.startSafeFrameCSMMetrics("ape_Detail_ad-endcap-1_Glance_placement");
                window.grandprix.metrics.startSafeFrameCSAMetrics("ape_Detail_ad-endcap-1_Glance_placement");

/* --- inline script #307 --- */
window.grandprix.wrappers.listenForSFIFrameLoad(
                    "ape_Detail_ad-endcap-1_Glance_iframe",
                    "ape_Detail_ad-endcap-1_Glance_placement",
                  );

/* --- inline script #308 --- */
(function () {
                      const script = document.createElement("script");
                      script.src = "https://m.media-amazon.com/images/I/11m16uzbS8L.js";
                      script.defer = true;
                      script.fetchPriority = "low";
                      script.onload = () => {
                        adFeedback.initializeSponsoredLabel("ad-endcap-1", "", false, "", "", "");
                      };
                      document.getElementById("ape_Detail_ad-endcap-1_Glance_placement_Feedback").appendChild(script);
                    })();

/* --- inline script #309 --- */
if (window.ue && typeof window.ue.count === "function") {
                    window.ue.count("adplacements:adfeedback:sponsoredlabelrendered", 1);
                  }
                  if (window.csa) {
                    try {
                      window.csa("Events", { producerId: "adplacements" })(
                        "log",
                        {
                          schemaId: "ApeSafeframe.csaEvent.1",
                          metricName: "adfeedback:sponsoredlabelrendered",
                          metricValue: 1,
                        },
                        { ent: "all" },
                      );
                    } catch (ex) {}
                  }

/* --- inline script #310 --- */
if (window.ue && typeof window.ue.count === "function") {
                    window.ue.count("adplacements:adfeedback:sponsoredlabelrendered:host:Detail_ad-endcap-1_Glance", 1);
                  }
                  if (window.csa) {
                    try {
                      window.csa("Events", { producerId: "adplacements" })(
                        "log",
                        {
                          schemaId: "ApeSafeframe.csaEvent.1",
                          metricName:
                            "adfeedback:sponsoredlabelrendered:host:Detail_ad-endcap-1_Glance:6e8849f7-64c3-45e5-a732-d4ef8c06246b",
                          metricValue: 1,
                        },
                        { ent: "all" },
                      );
                    } catch (ex) {}
                  }

/* --- inline script #311 --- */
(function (f) {
                    var _np = window.P._namespace("DetailPagePQVAssets");
                    if (_np.guardFatal) {
                      _np.guardFatal(f)(_np);
                    } else {
                      f(_np);
                    }
                  })(function (P) {
                    P.now("pqv").execute(function (pqv) {
                      if (!pqv) {
                        P.register("pqv", function () {
                          return {
                            overlayType: "desktop",
                          };
                        });
                      }
                    });
                  });

/* --- inline script #312 --- */
(function (f) {
                  var _np = window.P._namespace("DetailPagePQVAssets");
                  if (_np.guardFatal) {
                    _np.guardFatal(f)(_np);
                  } else {
                    f(_np);
                  }
                })(function (P) {
                  P.now("PQVOverlayMarker").execute(function (marker) {
                    if (!marker) {
                      P.register("PQVOverlayMarker", function () {
                        return {
                          loadTime: +new Date(), // include a timestamp to emit metrics between load time and use
                        };
                      });
                    }
                  });
                });

/* --- inline script #313 --- */
{"btf-sub-nav-desktop-from-the-brand-tab":["#productDescription_feature_div","#aplus_feature_div","#aplusBrandStory_feature_div"],"btf-sub-nav-desktop-price-and-atc-enabled":false,"btf-sub-nav-desktop-leftAligned":true,"btf-sub-nav-desktop-product-info-tab":["#productDetails_feature_div","#productDetailsNonPets_feature_div","#productDetails-placement-auto_feature_div","#importantInformation_feature_div"],"btf-sub-nav-desktop-from-the-author-tab":["#moreAboutTheAuthorCard_feature_div"],"btf-sub-nav-desktop-lateActivation":true,"btf-sub-nav-desktop-customer-reviews-tab":["#customer-reviews_feature_div"],"btf-sub-nav-desktop-subNavProductInfoEnabled":true,"btf-sub-nav-desktop-similar-tab":["#miraiBTFShopByLook_feature_div","#desktop-dp-btf-shopbylook","#sims-simsContainer_feature_div_01","#sims-simsContainer_feature_div_11","#sims-comparisonContainer_feature_div_01","#sp_detail_thematic-highly_rated","#DetailPage_sims-container_desktop-dp-sims_1_container","#sims-sponsoredProducts2_feature_div_01","#sims-discoveryAndInspiration_feature_div_01","#DetailPage_sims-container_desktop-dp-sims_2_container","#DetailPage_sims-container_desktop-dp-sims_3_container"],"btf-sub-nav-desktop-max-tabs":0,"btf-sub-nav-desktop-about-this-item-tab":["#houseOfCards","#featurebullets_feature_div","#richProductInformation_feature_div","#productOverview_feature_div","#dietaryInformationLogo_feature_div","#productFactsDesktop_feature_div","#petsFoodEvaluationDetails-aboveProductOverview_feature_div","#nutritionalInfoAndIngredients_feature_div"],"btf-sub-nav-desktop-tab-priority":[],"btf-sub-nav-desktop-questions-tab":["#nile-inline-btf_feature_div","#ask-btf_feature_div"]}

/* --- inline script #314 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("dpJsAssetsLoadMarker").execute(function () {
              (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
                "https://m.media-amazon.com/images/I/21T5HeBxb2L.js?AUIClients/",
              );
            });

/* --- inline script #315 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("dpJsAssetsLoadMarker").execute(function () {
              (function (c) {
                var b = window.AmazonUIPageJS || window.P,
                  d = b._namespace || b.attributeErrors,
                  a = d
                    ? d("DetailPageLatencyClientSideLibraries@lightsaber", "DetailPageLatencyClientSideLibraries")
                    : b;
                a.guardFatal
                  ? a.guardFatal(c)(a, window)
                  : a.execute(function () {
                      c(a, window);
                    });
              })(function (c, b, d) {});
            });

/* --- inline script #316 --- */
(function (a, b) {
          a.attachEvent ? a.attachEvent("onload", b) : a.addEventListener && a.addEventListener("load", b, !1);
        })(window, function () {
          setTimeout(function () {
            var el = document.getElementById("sis_pixel_r2");
            el &&
              (el.innerHTML =
                '<iframe id="DAsis" src="//s.amazon-adsystem.com/iu3?d=amazon.com&slot=navFooter&a2=01010530f753383c9c111090060547b8762b428be94811bd8948d7d5921a5bca98a2&old_oo=0&ts=1778011662057&s=AZe5WWj-AUODw2ndt3-VzBXV6vu1jL5TyxtcxDdn77Ry&gdpr_consent=&gdpr_consent_avl=&cb=1778011662057" width="1" height="1" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" tabindex="-1" sandbox></iframe>');
            var event = new Event("SISPixelCardLoaded");
            document.dispatchEvent(event);
          }, 300);
        });

/* --- inline script #317 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("afterLoad").execute(function () {
          (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
            "https://m.media-amazon.com/images/I/41zhkvN-TOL.js?AUIClients/BotCXMetricsCollectionJSAsset#1387102-T1",
          );
        });

/* --- inline script #318 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("afterLoad").execute(function () {
          (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
            "https://m.media-amazon.com/images/I/41oF+jkJGOL.js?AUIClients/LatencyInteractiveAsset#1387102-T1",
          );
        });

/* --- inline script #319 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("afterLoad").execute(function () {
          (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
            "https://m.media-amazon.com/images/I/31QQnN9HM+L.js?AUIClients/BotDetectionJSSignalCollectionAsset",
          );
        });

/* --- inline script #320 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("afterLoad").execute(function () {
          (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
            "https://m.media-amazon.com/images/I/81uCbtQgoZL._RC|11YzfZWkQgL.js,01wcltxKR5L.js,41FbfgEBSXL.js_.js?AUIClients/QTipsMobileWebAssets#us",
          );
        });

/* --- inline script #321 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("afterLoad").execute(function () {
          (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
            "https://m.media-amazon.com/images/I/31fBRpKtZ2L.js?AUIClients/PuffAuiAssets",
          );
        });

/* --- inline script #322 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("afterLoad").execute(function () {
          (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
            "https://m.media-amazon.com/images/I/21RaUShBG+L.js?AUIClients/StarlingInterestGroupAssignment",
          );
        });

/* --- inline script #323 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("afterLoad").execute(function () {
          (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
            "https://m.media-amazon.com/images/I/51O38waYPKL.js?AUIClients/AmazonLightsaberPageAssets#1279464-T1",
          );
        });

/* --- inline script #324 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("afterLoad").execute(function () {
          (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
            "https://m.media-amazon.com/images/I/212-l5vIopL.js?AUIClients/WebFlowIngressJs",
          );
        });

/* --- inline script #325 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("afterLoad").execute(function () {
          (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
            "https://m.media-amazon.com/images/I/21vARlfe4pL._RC|11WTF6kPMoL.js_.js?AUIClients/ARARegisterTriggerSubAssets-dpv",
          );
        });

/* --- inline script #326 --- */
if (window.ue && ue.tag) {
          ue.tag("FWCIMEnabled");
        }

/* --- inline script #327 --- */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when("afterLoad").execute(function () {
          (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js(
            "https://m.media-amazon.com/images/I/81kCF8wuZEL.js?AUIClients/FWCIMAssets",
          );
        });

/* --- inline script #328 --- */
window.ue_ibe = (window.ue_ibe || 0) + 1;
          if (window.ue_ibe === 1) {
            (function (e, c) {
              function h(b, a) {
                f.push([b, a]);
              }
              function g(b, a) {
                if (b) {
                  var c = e.head || e.getElementsByTagName("head")[0] || e.documentElement,
                    d = e.createElement("script");
                  d.async = "async";
                  d.src = b;
                  d.setAttribute("crossorigin", "anonymous");
                  a && a.onerror && (d.onerror = a.onerror);
                  a && a.onload && (d.onload = a.onload);
                  c.insertBefore(d, c.firstChild);
                }
              }
              function k() {
                ue.uels = g;
                for (var b = 0; b < f.length; b++) {
                  var a = f[b];
                  g(a[0], a[1]);
                }
                ue.deffered = 1;
              }
              var f = [];
              c.ue && ((ue.uels = h), c.ue.attach && c.ue.attach("load", k));
            })(document, window);

            if (window.ue && window.ue.uels) {
              var cel_widgets = [
                { c: "celwidget" },
                {
                  s: "#nav-swmslot > div",
                  id_gen: function (elem, index) {
                    return "nav_sitewide_msg";
                  },
                },
                { c: "feature" },
                { id: "detail-ilm_div" },
              ];

              ue.uels("https://images-na.ssl-images-amazon.com/images/I/215h87l68bL.js");
            }
            var ue_mbl = ue_csm.ue.exec(function (g, b) {
              function m(c) {
                a = c || {};
                b.AMZNPerformance = a;
                a.transition = a.transition || {};
                a.timing = a.timing || {};
                if (b.csa) {
                  var d;
                  a.timing.transitionStart && (d = a.timing.transitionStart);
                  a.timing.processStart && (d = a.timing.processStart);
                  d &&
                    (csa("PageTiming")("mark", "nativeTransitionStart", d),
                    csa("PageTiming")("mark", "transitionStart", d));
                }
                g.ue.exec(n, "csm-android-check")() &&
                  a.tags instanceof Array &&
                  ((c =
                    -1 != a.tags.indexOf("usesAppStartTime") || a.transition.type
                      ? !a.transition.type && -1 < a.tags.indexOf("usesAppStartTime")
                        ? "warm-start"
                        : void 0
                      : "view-transition"),
                  c && (a.transition.type = c));
                ("reload" === f._nt && g.ue_orct) || "intrapage-transition" === f._nt
                  ? e && e.timing && e.timing.navigationStart
                    ? (a.timing.transitionStart = e.timing.navigationStart)
                    : delete a.timing.transitionStart
                  : "undefined" === typeof f._nt &&
                    e &&
                    e.timing &&
                    e.timing.navigationStart &&
                    b.history &&
                    "function" === typeof b.History &&
                    "object" === typeof b.history &&
                    b.history.length &&
                    1 != b.history.length &&
                    (a.timing.transitionStart = e.timing.navigationStart);
                c = a.transition;
                d = f._nt ? f._nt : void 0;
                c.subType = d;
                b.ue && b.ue.tag && b.ue.tag("has-AMZNPerformance");
                f.isl && b.uex && b.uex("at", "csm-timing");
                p();
              }
              function q(a) {
                b.ue && b.ue.count && b.ue.count("csm-cordova-plugin-failed", 1);
              }
              function n() {
                return b.cordova && b.cordova.platformId && "android" == b.cordova.platformId;
              }
              function p() {
                try {
                  b.P.register("AMZNPerformance", function () {
                    return a;
                  });
                } catch (c) {}
              }
              function l() {
                if (!a) return "";
                ue_mbl.cnt = null;
                var c = a.timing,
                  d = a.transition,
                  d = [
                    "mts",
                    h(c.transitionStart),
                    "mps",
                    h(c.processStart),
                    "mtt",
                    d.type,
                    "mtst",
                    d.subType,
                    "mtlt",
                    d.launchType,
                  ];
                b.ue &&
                  b.ue.tag &&
                  (c.fr_ovr && b.ue.tag("fr_ovr"),
                  c.fcp_ovr && b.ue.tag("fcp_ovr"),
                  d.push("fr_ovr", h(c.fr_ovr), "fcp_ovr", h(c.fcp_ovr)));
                for (var c = "", e = 0; e < d.length; e += 2) {
                  var f = d[e],
                    g = d[e + 1];
                  "undefined" !== typeof g && (c += "&" + f + "=" + g);
                }
                return c;
              }
              function h(a) {
                if ("undefined" !== typeof a && "undefined" !== typeof k) return a - k;
              }
              function r(b, d) {
                a &&
                  ((k = d),
                  (a.timing.transitionStart = b),
                  (a.transition.type = "view-transition"),
                  (a.transition.subType = "ajax-transition"),
                  (a.transition.launchType = "normal"),
                  (ue_mbl.cnt = l));
              }
              var f = g.ue || {},
                k = g.ue_t0,
                e = b.performance,
                a;
              if (b.P && b.P.when && b.P.register)
                return (
                  b.P.when("CSMPlugin").execute(function (a) {
                    a.buildAMZNPerformance && a.buildAMZNPerformance({ successCallback: m, failCallback: q });
                  }),
                  { cnt: l, ajax: r }
                );
            }, "mobile-timing")(ue_csm, ue_csm.window);

            (function (d) {
              d._uess = function () {
                var a = "";
                screen && screen.width && screen.height && (a += "&sw=" + screen.width + "&sh=" + screen.height);
                var b = function (a) {
                    var b = document.documentElement["client" + a];
                    return ("CSS1Compat" === document.compatMode && b) || document.body["client" + a] || b;
                  },
                  c = b("Width"),
                  b = b("Height");
                c && b && (a += "&vw=" + c + "&vh=" + b);
                return a;
              };
            })(ue_csm);

            (function (a) {
              function d(a) {
                c && c("log", a);
              }
              var b = document.ue_backdetect,
                c = a.csa && a.csa("Errors", { producerId: "csa", logOptions: { ent: "all" } });
              a.ue_err.buffer && c && (a.ue_err.buffer.forEach(d), (a.ue_err.buffer.push = d));
              b && b.ue_back && a.ue && (a.ue.bfini = b.ue_back.value);
              a.uet && a.uet("be");
              a.onLdEnd &&
                (window.addEventListener
                  ? window.addEventListener("load", a.onLdEnd, !1)
                  : window.attachEvent && window.attachEvent("onload", a.onLdEnd));
              a.ueh && a.ueh(0, window, "load", a.onLd, 1);
              a.ue && a.ue.tag && (a.ue_furl ? ((b = a.ue_furl.replace(/\./g, "-")), a.ue.tag(b)) : a.ue.tag("nofls"));
            })(ue_csm);

            (function (g, h) {
              function d(a, d) {
                var b = {};
                if (!e || !f)
                  try {
                    var c = h.sessionStorage;
                    c ? a && ("undefined" !== typeof d ? c.setItem(a, d) : (b.val = c.getItem(a))) : (f = 1);
                  } catch (g) {
                    e = 1;
                  }
                e && (b.e = 1);
                return b;
              }
              var b = g.ue || {},
                a = "",
                f,
                e,
                c,
                a = d("csmtid");
              f
                ? (a = "NA")
                : a.e
                  ? (a = "ET")
                  : ((a = a.val),
                    a || ((a = b.oid || "NI"), d("csmtid", a)),
                    (c = d(b.oid)),
                    c.e || ((c.val = c.val || 0), d(b.oid, c.val + 1)),
                    (b.ssw = d));
              b.tabid = a;
            })(ue_csm, ue_csm.window);

            (function (a) {
              var e = { rc: 1, hob: 1, hoe: 1, ntd: 1, rd_: 1, _rd: 1 };
              "function" === typeof window.addEventListener &&
                window.addEventListener("pageshow", function (b) {
                  if (
                    b &&
                    b.persisted &&
                    ((b = +new Date()),
                    (b = { clickTime: b - 1, pageVisible: b }),
                    "object" === typeof b &&
                      "object" === typeof a.ue.markers &&
                      "object" === typeof a.ue &&
                      "function" === typeof a.uex)
                  ) {
                    if ("function" === typeof a.uet) {
                      for (var c in a.ue.markers)
                        !a.ue.markers.hasOwnProperty(c) || c in e || a.uet(c, void 0, void 0, b.pageVisible);
                      a.uet("tc", void 0, void 0, b.clickTime);
                      a.uet("ty", void 0, void 0, b.clickTime + 2);
                    }
                    (c = document.ue_backdetect) && c.ue_back && (a.ue.bfini = +c.ue_back.value + 1);
                    a.ue.isBFonMshop = !0;
                    a.ue.isBFCache = !0;
                    a.ue.t0 = b.clickTime;
                    a.ue.viz = ["visible:0"];
                    "function" === typeof a.ue.tag &&
                      (a.ue.tag("cacheSourceMemory"), a.ue.tag("history-navigation-page-cache"));
                    c = ue_csm.csa && ue_csm.csa("SPA");
                    var d = ue_csm.csa && ue_csm.csa("PageTiming");
                    c &&
                      d &&
                      (c("newPage", { transitionType: "history-navigation-page-cache" }, { keepPageAttributes: !0 }),
                      d("mark", "transitionStart", b.clickTime));
                    "function" === typeof a.uex && a.uex("ld", void 0, void 0, a.ue.t.ld);
                    delete a.ue.isBFonMshop;
                    delete a.ue.isBFCache;
                  }
                });
            })(ue_csm);

            ue_csm.ue.exec(function (e, f) {
              var a = e.ue || {},
                b = a._wlo,
                d;
              if (a.ssw) {
                d = a.ssw("CSM_previousURL").val;
                var c = f.location,
                  b = b ? b : c && c.href ? c.href.split("#")[0] : void 0;
                c = (b || "") === a.ssw("CSM_previousURL").val;
                !c && b && a.ssw("CSM_previousURL", b);
                d = c ? "reload" : d ? "intrapage-transition" : "first-view";
              } else d = "unknown";
              a._nt = d;
            }, "NavTypeModule")(ue_csm, window);
            ue_csm.ue.exec(function (c, a) {
              function g(a) {
                a.run(function (e) {
                  d.tag("csm-feature-" + a.name + ":" + e);
                  d.isl && c.uex("at");
                });
              }
              if (a.addEventListener)
                for (
                  var d = c.ue || {},
                    f = [
                      {
                        name: "touch-enabled",
                        run: function (b) {
                          var e = function () {
                              a.removeEventListener("touchstart", c, !0);
                              a.removeEventListener("mousemove", d, !0);
                            },
                            c = function () {
                              b("true");
                              e();
                            },
                            d = function () {
                              b("false");
                              e();
                            };
                          a.addEventListener("touchstart", c, !0);
                          a.addEventListener("mousemove", d, !0);
                        },
                      },
                    ],
                    b = 0;
                  b < f.length;
                  b++
                )
                  g(f[b]);
            }, "csm-features")(ue_csm, window);

            (function (a, e) {
              function d(a) {
                b && b("recordCounter", a.c, a.v);
              }
              var c = e.images,
                b;
              a.ue_act
                ? (b = a.csa && a.csa("Metrics", { producerId: "csa", dimensions: { type: a.ue_act } })) &&
                  b("recordMetric", "actorType", 1)
                : (b = a.csa && a.csa("Metrics", { producerId: "csa" }));
              c && c.length && a.ue.count("totalImages", c.length);
              a.ue.cv.buffer && b && (a.ue.cv.buffer.forEach(d), (a.ue.cv.buffer.push = d));
            })(ue_csm, document);
            (function (b) {
              function c() {
                var f = [];
                a.log &&
                  a.log.isStub &&
                  a.log.replay(function (a) {
                    d(f, a);
                  });
                a.clog &&
                  a.clog.isStub &&
                  a.clog.replay(function (a) {
                    d(f, a);
                  });
                f.length && ((a._flhs += 1), p && (a._lpn.csm = (a._lpn.csm || 0) + 1), q(f));
              }
              function h() {
                a.log &&
                  a.log.isStub &&
                  (a.onflush &&
                    a.onflush.replay &&
                    a.onflush.replay(function (a) {
                      a[0]();
                    }),
                  a.onunload &&
                    a.onunload.replay &&
                    a.onunload.replay(function (a) {
                      a[0]();
                    }),
                  c());
              }
              function d(b, g) {
                var c = g[1],
                  e = g[0],
                  d = {};
                a._lpn[c] = (a._lpn[c] || 0) + 1;
                d[c] = e;
                b.push(d);
              }
              function q(a) {
                if (k) ((a = l(a)), b.navigator.sendBeacon(m, a));
                else {
                  a = l(a);
                  var c = new b[e]();
                  c.open("POST", m, !0);
                  c.setRequestHeader && c.setRequestHeader("Content-type", "text/plain");
                  c.send(a);
                }
              }
              function l(a) {
                return JSON.stringify({
                  rid: b.ue_id,
                  sid: b.ue_sid,
                  mid: b.ue_mid,
                  mkt: b.ue_mkt,
                  sn: b.ue_sn,
                  reqs: a,
                });
              }
              var e = "XMLHttpRequest",
                p = 1 === b.ue_ddq,
                a = b.ue,
                r = b[e] && "withCredentials" in new b[e](),
                k = b.navigator && b.navigator.sendBeacon,
                m = "//" + b.ue_furl + "/1/batch/1/OE/",
                n = b.ue_fci_ft || 5e3;
              a &&
                (r || k) &&
                ((a._flhs = a._flhs || 0),
                (a._lpn = a._lpn || {}),
                a.attach &&
                  (a.attach("beforeunload", a.exec(h, "fcli-bfu")), a.attach("pagehide", a.exec(h, "fcli-ph"))),
                n && b.setTimeout(a.exec(c, "fcli-t"), n),
                (a._ffci = a.exec(c)));
            })(window);

            (function (k, c) {
              function l(a, b) {
                return a.filter(function (a) {
                  return a.initiatorType == b;
                });
              }
              function f(a, c) {
                if (b.t[a]) {
                  var g = b.t[a] - b._t0,
                    e = c.filter(function (a) {
                      return 0 !== a.responseEnd && m(a) < g;
                    }),
                    f = l(e, "script"),
                    h = l(e, "link"),
                    k = l(e, "img"),
                    n = e
                      .map(function (a) {
                        return a.name.split("/")[2];
                      })
                      .filter(function (a, b, c) {
                        return a && c.lastIndexOf(a) == b;
                      }),
                    q = e.filter(function (a) {
                      return a.duration < p;
                    }),
                    s = (g - Math.max.apply(null, e.map(m)) < r) | 0;
                  "af" == a && (b._afjs = f.length);
                  return a + ":" + [e[d], f[d], h[d], k[d], n[d], q[d], s].join("-");
                }
              }
              function m(a) {
                return a.responseEnd - (b._t0 - c.timing.navigationStart);
              }
              function n() {
                var a = c[h]("resource"),
                  d = f("cf", a),
                  g = f("af", a),
                  a = f("ld", a);
                delete b._rt;
                b._ld = b.t.ld - b._t0;
                b._art && b._art();
                return [d, g, a].join("_");
              }
              var p = 20,
                r = 50,
                d = "length",
                b = k.ue,
                h = "getEntriesByType";
              b._rre = m;
              b._rt = c && c.timing && c[h] && n;
            })(ue_csm, window.performance);

            (function (c, d) {
              var b = c.ue,
                a = d.navigator;
              b &&
                b.tag &&
                a &&
                (a = a.connection || a.mozConnection || a.webkitConnection) &&
                a.type &&
                b.tag("netInfo:" + a.type);
            })(ue_csm, window);

            (function (c, d) {
              function h(a, b) {
                for (var c = [], d = 0; d < a.length; d++) {
                  var e = a[d],
                    f = b.encode(e);
                  if (e[k]) {
                    var g = b.metaSep,
                      e = e[k],
                      l = b.metaPairSep,
                      h = [],
                      m = void 0;
                    for (m in e) e.hasOwnProperty(m) && h.push(m + "=" + e[m]);
                    e = h.join(l);
                    f += g + e;
                  }
                  c.push(f);
                }
                return c.join(b.resourceSep);
              }
              function s(a) {
                var b = (a[k] = a[k] || {});
                b[t] || (b[t] = c.ue_mid);
                b[u] || (b[u] = c.ue_sid);
                b[f] || (b[f] = c.ue_id);
                b.csm = 1;
                a = "//" + c.ue_furl + "/1/" + a[v] + "/1/OP/" + a[w] + "/" + a[x] + "/" + h([a], y);
                if (n)
                  try {
                    n.call(d[p], a);
                  } catch (g) {
                    ((c.ue.sbf = 1), (new Image().src = a));
                  }
                else new Image().src = a;
              }
              function q() {
                g &&
                  g.isStub &&
                  g.replay(function (a, b, c) {
                    a = a[0];
                    b = a[k] = a[k] || {};
                    b[f] = b[f] || c;
                    s(a);
                  });
                l.impression = s;
                g = null;
              }
              if (!(1 < c.ueinit)) {
                var k = "metadata",
                  x = "impressionType",
                  v = "foresterChannel",
                  w = "programGroup",
                  t = "marketplaceId",
                  u = "session",
                  f = "requestId",
                  p = "navigator",
                  l = c.ue || {},
                  n = d[p] && d[p].sendBeacon,
                  r = function (a, b, c, d) {
                    return { encode: d, resourceSep: a, metaSep: b, metaPairSep: c };
                  },
                  y = r("", "?", "&", function (a) {
                    return h(a.impressionData, z);
                  }),
                  z = r("/", ":", ",", function (a) {
                    return a.featureName + ":" + h(a.resources, A);
                  }),
                  A = r(",", "@", "|", function (a) {
                    return a.id;
                  }),
                  g = l.impression;
                n ? q() : (l.attach("load", q), l.attach("beforeunload", q));
                try {
                  d.P && d.P.register && d.P.register("impression-client", function () {});
                } catch (B) {
                  c.ueLogError(B, { logLevel: "WARN" });
                }
              }
            })(ue_csm, window);

            var ue_pty = "Detail";

            var ue_spty = "Glance";

            var ue_pti = "B01LBI1BIO";

            var ue_adb = 4;
            var ue_adb_rtla = 1;
            ue_csm.ue.exec(function (y, a) {
              function t() {
                if (d && f) {
                  var a;
                  a: {
                    try {
                      a = d.getItem(g);
                      break a;
                    } catch (c) {}
                    a = void 0;
                  }
                  if (a) return ((b = a), !0);
                }
                return !1;
              }
              function u() {
                if (a.fetch)
                  fetch(m)
                    .then(function (a) {
                      if (!a.ok) throw Error(a.statusText);
                      return a.text ? a.text() : null;
                    })
                    .then(function (b) {
                      b ? (-1 < b.indexOf("window.ue_adb_chk = 1") && (a.ue_adb_chk = 1), n()) : h();
                    })
                    ["catch"](h);
                else e.uels(m, { onerror: h, onload: n });
              }
              function h() {
                b = k;
                l();
                if (f)
                  try {
                    d.setItem(g, b);
                  } catch (a) {}
              }
              function n() {
                b = 1 === a.ue_adb_chk ? p : k;
                l();
                if (f)
                  try {
                    d.setItem(g, b);
                  } catch (c) {}
              }
              function q() {
                a.ue_adb_rtla &&
                  c &&
                  0 < c.ec &&
                  !1 === r &&
                  ((c.elh = null),
                  ueLogError({ m: "Hit Info", fromOnError: 1 }, { logLevel: "INFO", adb: b }),
                  (r = !0));
              }
              function l() {
                e.tag(b);
                e.isl && a.uex && uex("at", b);
                s && s.updateCsmHit("adb", b);
                c && 0 < c.ec ? q() : a.ue_adb_rtla && c && (c.elh = q);
              }
              function v() {
                return b;
              }
              if (a.ue_adb) {
                a.ue_fadb = a.ue_fadb || 10;
                var e = a.ue,
                  k = "adblk_yes",
                  p = "adblk_no",
                  m = "https://m.media-amazon.com/images/G/01/csm/showads.v2.js?adspot_=1",
                  b = "adblk_unk",
                  d;
                a: {
                  try {
                    d = a.localStorage;
                    break a;
                  } catch (z) {}
                  d = void 0;
                }
                var g = "csm:adb",
                  c = a.ue_err,
                  s = e.cookie,
                  f = void 0 !== a.localStorage,
                  w = Math.random() > 1 - 1 / a.ue_fadb,
                  r = !1,
                  x = t();
                w || !x ? u() : l();
                a.ue_isAdb = v;
                a.ue_isAdb.unk = "adblk_unk";
                a.ue_isAdb.no = p;
                a.ue_isAdb.yes = k;
              }
            }, "adb")(document, window);

            (function (c, l, m) {
              function h(a) {
                if (a)
                  try {
                    if (a.id) return "//*[@id='" + a.id + "']";
                    var b,
                      d = 1,
                      e;
                    for (e = a.previousSibling; e; e = e.previousSibling) e.nodeName === a.nodeName && (d += 1);
                    b = d;
                    var c = a.nodeName;
                    1 !== b && (c += "[" + b + "]");
                    a.parentNode && (c = h(a.parentNode) + "/" + c);
                    return c;
                  } catch (f) {
                    return "DETACHED";
                  }
              }
              function f(a) {
                if (a && a.getAttribute) return a.getAttribute(k) ? a.getAttribute(k) : f(a.parentElement);
              }
              var k = "data-cel-widget",
                g = !1,
                d = [];
              (c.ue || {}).isBF = (function () {
                try {
                  var a = JSON.parse(localStorage["csm-bf"] || "[]"),
                    b = 0 <= a.indexOf(c.ue_id);
                  a.unshift(c.ue_id);
                  a = a.slice(0, 20);
                  localStorage["csm-bf"] = JSON.stringify(a);
                  return b;
                } catch (d) {
                  return !1;
                }
              })();
              c.ue_utils = {
                getXPath: h,
                getFirstAscendingWidget: function (a, b) {
                  c.ue_cel && c.ue_fem ? (!0 === g ? b(f(a)) : d.push({ element: a, callback: b })) : b();
                },
                notifyWidgetsLabeled: function () {
                  if (!1 === g) {
                    g = !0;
                    for (var a = f, b = 0; b < d.length; b++)
                      if (d[b].hasOwnProperty("callback") && d[b].hasOwnProperty("element")) {
                        var c = d[b].callback,
                          e = d[b].element;
                        "function" === typeof c && "function" === typeof a && c(a(e));
                      }
                    d = null;
                  }
                },
                extractStringValue: function (a) {
                  if ("string" === typeof a) return a;
                },
              };
            })(ue_csm, window, document);

            (function (a) {
              a.ue_cel ||
                (a.ue_cel = (function () {
                  function m(a, r) {
                    r ? (r.r = u) : (r = { r: u, c: 1 });
                    D ||
                      (!ue_csm.ue_sclog && r.clog && b.clog
                        ? b.clog(a, r.ns || s, r)
                        : r.glog && b.glog
                          ? b.glog(a, r.ns || s, r)
                          : b.log(a, r.ns || s, r));
                  }
                  function n(a, b) {
                    "function" === typeof p &&
                      p(
                        "log",
                        { schemaId: t + ".RdCSI.1", eventType: a, clientData: b },
                        { ent: { page: ["requestId"] } },
                      );
                  }
                  function c() {
                    var a = q.length;
                    if (0 < a) {
                      for (var r = [], c = 0; c < a; c++) {
                        var d = q[c].api;
                        d.ready()
                          ? (d.on({ ts: b.d, ns: s }), g.push(q[c]), m({ k: "mso", n: q[c].name, t: b.d() }))
                          : r.push(q[c]);
                      }
                      q = r;
                    }
                  }
                  function f() {
                    if (!f.executed) {
                      for (var a = 0; a < g.length; a++) g[a].api.off && g[a].api.off({ ts: b.d, ns: s });
                      B();
                      m({ k: "eod", t0: b.t0, t: b.d() }, { c: 1, il: 1 });
                      f.executed = 1;
                      for (a = 0; a < g.length; a++) q.push(g[a]);
                      g = [];
                      d(v);
                      d(A);
                    }
                  }
                  function B(a) {
                    m({ k: "hrt", t: b.d() }, { c: 1, il: 1, n: a });
                    y = Math.min(w, e * y);
                    z();
                  }
                  function z() {
                    d(A);
                    A = k(function () {
                      B(!0);
                    }, y);
                  }
                  function x() {
                    f.executed || B();
                  }
                  var l = a.window,
                    k = l.setTimeout,
                    d = l.clearTimeout,
                    e = 1.5,
                    w = l.ue_cel_max_hrt || 3e4,
                    t = "robotdetection",
                    q = [],
                    g = [],
                    s = a.ue_cel_ns || "cel",
                    v,
                    A,
                    b = a.ue,
                    F = a.uet,
                    C = a.uex,
                    u = b.rid,
                    D = a.ue_dsbl_cel,
                    h = l.csa,
                    p,
                    y = l.ue_cel_hrt_int || 3e3,
                    E =
                      l.requestAnimationFrame ||
                      function (a) {
                        a();
                      };
                  h && (p = h("Events", { producerId: t }));
                  if (b.isBF) m({ k: "bft", t: b.d() });
                  else {
                    "function" == typeof F && F("bb", "csmCELLSframework", { wb: 1 });
                    k(c, 0);
                    b.onunload(f);
                    if (b.onflush) b.onflush(x);
                    v = k(f, 6e5);
                    z();
                    "function" == typeof C && C("ld", "csmCELLSframework", { wb: 1 });
                    return {
                      registerModule: function (a, r) {
                        q.push({ name: a, api: r });
                        m({ k: "mrg", n: a, t: b.d() });
                        c();
                      },
                      reset: function (a) {
                        m({ k: "rst", t0: b.t0, t: b.d() });
                        q = q.concat(g);
                        g = [];
                        for (var r = q.length, e = 0; e < r; e++) (q[e].api.off(), q[e].api.reset());
                        u = a || b.rid;
                        c();
                        d(v);
                        v = k(f, 6e5);
                        f.executed = 0;
                      },
                      timeout: function (a, b) {
                        return k(function () {
                          E(function () {
                            f.executed || a();
                          });
                        }, b);
                      },
                      log: m,
                      csaEventLog: n,
                      off: f,
                    };
                  }
                })());
            })(ue_csm);
            (function (a) {
              a.ue_pdm ||
                !a.ue_cel ||
                a.ue.isBF ||
                ((a.ue_pdm = (function () {
                  function m() {
                    try {
                      var b = d.screen;
                      if (b) {
                        var c = {
                          w: b.width,
                          aw: b.availWidth,
                          h: b.height,
                          ah: b.availHeight,
                          cd: b.colorDepth,
                          pd: b.pixelDepth,
                        };
                        (g &&
                          g.w === c.w &&
                          g.h === c.h &&
                          g.aw === c.aw &&
                          g.ah === c.ah &&
                          g.pd === c.pd &&
                          g.cd === c.cd) ||
                          ((g = c), (g.t = t()), (g.k = "sci"), F(g), D && h("sci", { h: (g.h || "0") + "" }));
                      }
                      var k = e.body || {},
                        f = e.documentElement || {},
                        n = {
                          w: Math.max(
                            k.scrollWidth || 0,
                            k.offsetWidth || 0,
                            f.clientWidth || 0,
                            f.scrollWidth || 0,
                            f.offsetWidth || 0,
                          ),
                          h: Math.max(
                            k.scrollHeight || 0,
                            k.offsetHeight || 0,
                            f.clientHeight || 0,
                            f.scrollHeight || 0,
                            f.offsetHeight || 0,
                          ),
                        };
                      (s && s.w === n.w && s.h === n.h) || ((s = n), (s.t = t()), (s.k = "doi"), F(s));
                      w = a.ue_cel.timeout(m, q);
                      A += 1;
                    } catch (p) {
                      d.ueLogError && ueLogError(p, { attribution: "csm-cel-page-module", logLevel: "WARN" });
                    }
                  }
                  function n() {
                    x("ebl", "default", !1);
                  }
                  function c() {
                    x("efo", "default", !0);
                  }
                  function f() {
                    x("ebl", "app", !1);
                  }
                  function B() {
                    x("efo", "app", !0);
                  }
                  function z() {
                    d.setTimeout(function () {
                      e[E] ? x("ebl", "pageviz", !1) : x("efo", "pageviz", !0);
                    }, 0);
                  }
                  function x(a, b, c) {
                    v !== c &&
                      (F({ k: a, t: t(), s: b }, { ff: !0 === c ? 0 : 1 }), D && h(a, { t: (t() || "0") + "", s: b }));
                    v = c;
                  }
                  function l() {
                    b.attach &&
                      (p && b.attach(y, z, e),
                      G &&
                        P.when("mash").execute(function (a) {
                          a &&
                            a.addEventListener &&
                            (a.addEventListener("appPause", f), a.addEventListener("appResume", B));
                        }),
                      b.attach("blur", n, d),
                      b.attach("focus", c, d));
                  }
                  function k() {
                    b.detach &&
                      (p && b.detach(y, z, e),
                      G &&
                        P.when("mash").execute(function (a) {
                          a &&
                            a.removeEventListener &&
                            (a.removeEventListener("appPause", f), a.removeEventListener("appResume", B));
                        }),
                      b.detach("blur", n, d),
                      b.detach("focus", c, d));
                  }
                  var d = a.window,
                    e = a.document,
                    w,
                    t,
                    q,
                    g,
                    s,
                    v = null,
                    A = 0,
                    b = a.ue,
                    F = a.ue_cel.log,
                    C = a.uet,
                    u = a.uex,
                    D = d.csa,
                    h = a.ue_cel.csaEventLog,
                    p = !!b.pageViz,
                    y = p && b.pageViz.event,
                    E = p && b.pageViz.propHid,
                    G = d.P && d.P.when;
                  "function" == typeof C && C("bb", "csmCELLSpdm", { wb: 1 });
                  return {
                    on: function (a) {
                      q = a.timespan || 500;
                      t = a.ts;
                      l();
                      a = d.location;
                      F({ k: "pmd", o: a.origin, p: a.pathname, t: t() });
                      m();
                      "function" == typeof u && u("ld", "csmCELLSpdm", { wb: 1 });
                    },
                    off: function (a) {
                      clearTimeout(w);
                      k();
                      b.count && b.count("cel.PDM.TotalExecutions", A);
                    },
                    ready: function () {
                      return e.body && a.ue_cel && a.ue_cel.log;
                    },
                    reset: function () {
                      g = s = null;
                    },
                  };
                })()),
                a.ue_cel && a.ue_cel.registerModule("page module", a.ue_pdm));
            })(ue_csm);
            (function (a) {
              a.ue_vpm ||
                !a.ue_cel ||
                a.ue.isBF ||
                ((a.ue_vpm = (function () {
                  function m() {
                    var a = z(),
                      b = { w: k.innerWidth, h: k.innerHeight, x: k.pageXOffset, y: k.pageYOffset };
                    (c && c.w == b.w && c.h == b.h && c.x == b.x && c.y == b.y) ||
                      ((b.t = a),
                      (b.k = "vpi"),
                      (c = b),
                      e(c, { clog: 1 }),
                      s &&
                        v("vpi", {
                          t: (c.t || "0") + "",
                          h: (c.h || "0") + "",
                          y: (c.y || "0") + "",
                          w: (c.w || "0") + "",
                          x: (c.x || "0") + "",
                        }));
                    f = 0;
                    x = z() - a;
                    l += 1;
                  }
                  function n() {
                    f || (f = a.ue_cel.timeout(m, B));
                  }
                  var c,
                    f,
                    B,
                    z,
                    x = 0,
                    l = 0,
                    k = a.window,
                    d = a.ue,
                    e = a.ue_cel.log,
                    w = a.uet,
                    t = a.uex,
                    q = d.attach,
                    g = d.detach,
                    s = k.csa,
                    v = a.ue_cel.csaEventLog;
                  "function" == typeof w && w("bb", "csmCELLSvpm", { wb: 1 });
                  return {
                    on: function (a) {
                      z = a.ts;
                      B = a.timespan || 100;
                      m();
                      q && (q("scroll", n), q("resize", n));
                      "function" == typeof t && t("ld", "csmCELLSvpm", { wb: 1 });
                    },
                    off: function (a) {
                      clearTimeout(f);
                      g && (g("scroll", n), g("resize", n));
                      d.count &&
                        (d.count("cel.VPI.TotalExecutions", l),
                        d.count("cel.VPI.TotalExecutionTime", x),
                        d.count("cel.VPI.AverageExecutionTime", x / l));
                    },
                    ready: function () {
                      return a.ue_cel && a.ue_cel.log;
                    },
                    reset: function () {
                      c = void 0;
                    },
                    getVpi: function () {
                      return c;
                    },
                  };
                })()),
                a.ue_cel && a.ue_cel.registerModule("viewport module", a.ue_vpm));
            })(ue_csm);
            (function (a) {
              if (!a.ue_fem && a.ue_cel && a.ue_utils) {
                var m = a.ue || {},
                  n = a.window,
                  c = n.document;
                !m.isBF &&
                  !a.ue_fem &&
                  c.querySelector &&
                  n.getComputedStyle &&
                  [].forEach &&
                  ((a.ue_fem = (function () {
                    function f(a, b) {
                      return a > b ? 3 > a - b : 3 > b - a;
                    }
                    function B(a, b) {
                      var c = n.pageXOffset,
                        d = n.pageYOffset,
                        k;
                      a: {
                        try {
                          if (a) {
                            var e = a.getBoundingClientRect(),
                              g,
                              m = 0 === a.offsetWidth && 0 === a.offsetHeight;
                            c: {
                              for (
                                var h = a.parentNode,
                                  p = e.left || 0,
                                  w = e.top || 0,
                                  q = e.width || 0,
                                  s = e.height || 0;
                                h && h !== document.body;
                              ) {
                                var l;
                                d: {
                                  try {
                                    var r = void 0;
                                    if (h)
                                      var t = h.getBoundingClientRect(),
                                        r = { x: t.left || 0, y: t.top || 0, w: t.width || 0, h: t.height || 0 };
                                    else r = void 0;
                                    l = r;
                                    break d;
                                  } catch (I) {}
                                  l = void 0;
                                }
                                var u = window.getComputedStyle(h),
                                  v = "hidden" === u.overflow,
                                  x = v || "hidden" === u.overflowX,
                                  y = v || "hidden" === u.overflowY,
                                  z = w + s - 1 < l.y + 1 || w + 1 > l.y + l.h - 1;
                                if (((p + q - 1 < l.x + 1 || p + 1 > l.x + l.w - 1) && x) || (z && y)) {
                                  g = !0;
                                  break c;
                                }
                                h = h.parentNode;
                              }
                              g = !1;
                            }
                            k = {
                              x: e.left + c || 0,
                              y: e.top + d || 0,
                              w: e.width || 0,
                              h: e.height || 0,
                              d: (m || g) | 0,
                            };
                          } else k = void 0;
                          break a;
                        } catch (J) {}
                        k = void 0;
                      }
                      if (k && !a.cel_b)
                        ((a.cel_b = k),
                          D(
                            {
                              n: a.getAttribute(A),
                              w: a.cel_b.w,
                              h: a.cel_b.h,
                              d: a.cel_b.d,
                              x: a.cel_b.x,
                              y: a.cel_b.y,
                              t: b,
                              k: "ewi",
                              cl: a.className,
                            },
                            { clog: 1 },
                          ));
                      else {
                        if ((c = k))
                          ((c = a.cel_b),
                            (d = k),
                            (c =
                              d.d === c.d && 1 === d.d
                                ? !1
                                : !(f(c.x, d.x) && f(c.y, d.y) && f(c.w, d.w) && f(c.h, d.h) && c.d === d.d)));
                        c &&
                          ((a.cel_b = k),
                          D(
                            {
                              n: a.getAttribute(A),
                              w: a.cel_b.w,
                              h: a.cel_b.h,
                              d: a.cel_b.d,
                              x: a.cel_b.x,
                              y: a.cel_b.y,
                              t: b,
                              k: "ewi",
                            },
                            { clog: 1 },
                          ));
                      }
                    }
                    function z(d, e) {
                      var f;
                      f = d.c
                        ? c.getElementsByClassName(d.c)
                        : d.id
                          ? [c.getElementById(d.id)]
                          : c.querySelectorAll(d.s);
                      d.w = [];
                      for (var g = 0; g < f.length; g++) {
                        var h = f[g];
                        if (h) {
                          if (!h.getAttribute(A)) {
                            var l = h.getAttribute("cel_widget_id") || (d.id_gen || u)(h, g) || h.id;
                            h.setAttribute(A, l);
                          }
                          d.w.push(h);
                          k(Q, h, e);
                        }
                      }
                      !1 === C && (F++, F === b.length && ((C = !0), a.ue_utils.notifyWidgetsLabeled()));
                    }
                    function x(a, b) {
                      h.contains(a) || D({ n: a.getAttribute(A), t: b, k: "ewd" }, { clog: 1 });
                    }
                    function l(a) {
                      K.length &&
                        ue_cel.timeout(function () {
                          if (s) {
                            for (var b = R(), c = !1; R() - b < g && !c; ) {
                              for (c = S; 0 < c-- && 0 < K.length; ) {
                                var d = K.shift();
                                T[d.type](d.elem, d.time);
                              }
                              c = 0 === K.length;
                            }
                            U++;
                            l(a);
                          }
                        }, 0);
                    }
                    function k(a, b, c) {
                      K.push({ type: a, elem: b, time: c });
                    }
                    function d(a, c) {
                      for (var d = 0; d < b.length; d++)
                        for (var e = b[d].w || [], h = 0; h < e.length; h++) k(a, e[h], c);
                    }
                    function e() {
                      M ||
                        (M = a.ue_cel.timeout(function () {
                          M = null;
                          var c = v();
                          d(W, c);
                          for (var e = 0; e < b.length; e++) k(X, b[e], c);
                          0 === b.length && !1 === C && ((C = !0), a.ue_utils.notifyWidgetsLabeled());
                          l(c);
                        }, q));
                    }
                    function w() {
                      M ||
                        N ||
                        (N = a.ue_cel.timeout(function () {
                          N = null;
                          var a = v();
                          d(Q, a);
                          l(a);
                        }, q));
                    }
                    function t() {
                      return y && E && h && h.contains && h.getBoundingClientRect && v;
                    }
                    var q = 50,
                      g = 4.5,
                      s = !1,
                      v,
                      A = "data-cel-widget",
                      b = [],
                      F = 0,
                      C = !1,
                      u = function () {},
                      D = a.ue_cel.log,
                      h,
                      p,
                      y,
                      E,
                      G = n.MutationObserver || n.WebKitMutationObserver || n.MozMutationObserver,
                      r = !!G,
                      H,
                      I,
                      O = "DOMAttrModified",
                      L = "DOMNodeInserted",
                      J = "DOMNodeRemoved",
                      N,
                      M,
                      K = [],
                      U = 0,
                      S = null,
                      W = "removedWidget",
                      X = "updateWidgets",
                      Q = "processWidget",
                      T,
                      V = n.performance || {},
                      R =
                        (V.now &&
                          function () {
                            return V.now();
                          }) ||
                        function () {
                          return Date.now();
                        };
                    "function" == typeof uet && uet("bb", "csmCELLSfem", { wb: 1 });
                    return {
                      on: function (d) {
                        function k() {
                          if (t()) {
                            T = { removedWidget: x, updateWidgets: z, processWidget: B };
                            if (r) {
                              var a = { attributes: !0, subtree: !0 };
                              H = new G(w);
                              I = new G(e);
                              H.observe(h, a);
                              I.observe(h, { childList: !0, subtree: !0 });
                              I.observe(p, a);
                            } else
                              (y.call(h, O, w), y.call(h, L, e), y.call(h, J, e), y.call(p, L, w), y.call(p, J, w));
                            e();
                          }
                        }
                        h = c.body;
                        p = c.head;
                        y = h.addEventListener;
                        E = h.removeEventListener;
                        v = d.ts;
                        b = a.cel_widgets || [];
                        S = d.bs || 5;
                        m.deffered ? k() : m.attach && m.attach("load", k);
                        "function" == typeof uex && uex("ld", "csmCELLSfem", { wb: 1 });
                        s = !0;
                      },
                      off: function () {
                        t() &&
                          (I && (I.disconnect(), (I = null)),
                          H && (H.disconnect(), (H = null)),
                          E.call(h, O, w),
                          E.call(h, L, e),
                          E.call(h, J, e),
                          E.call(p, L, w),
                          E.call(p, J, w));
                        m.count && m.count("cel.widgets.batchesProcessed", U);
                        s = !1;
                      },
                      ready: function () {
                        return a.ue_cel && a.ue_cel.log;
                      },
                      reset: function () {
                        b = a.cel_widgets || [];
                      },
                    };
                  })()),
                  a.ue_cel && a.ue_fem && a.ue_cel.registerModule("features module", a.ue_fem));
              }
            })(ue_csm);
            (function (a) {
              !a.ue_mcm &&
                a.ue_cel &&
                a.ue_utils &&
                !a.ue.isBF &&
                ((a.ue_mcm = (function () {
                  function m(a, d) {
                    var e = a.srcElement || a.target || {},
                      f = {
                        k: n,
                        w: (d || {}).ow || (B.body || {}).scrollWidth,
                        h: (d || {}).oh || (B.body || {}).scrollHeight,
                        t: (d || {}).ots || c(),
                        x: a.pageX,
                        y: a.pageY,
                        p: l.getXPath(e),
                        n: e.nodeName,
                      };
                    z &&
                      "function" === typeof z.now &&
                      a.timeStamp &&
                      ((f.dt = (d || {}).odt || z.now() - a.timeStamp), (f.dt = parseFloat(f.dt.toFixed(2))));
                    a.button && (f.b = a.button);
                    e.href && (f.r = l.extractStringValue(e.href));
                    e.id && (f.i = e.id);
                    e.className && e.className.split && (f.c = e.className.split(/\s+/));
                    x(f, { c: 1 });
                  }
                  var n = "mcm",
                    c,
                    f = a.window,
                    B = f.document,
                    z = f.performance,
                    x = a.ue_cel.log,
                    l = a.ue_utils;
                  return {
                    on: function (k) {
                      c = k.ts;
                      a.ue_cel_stub && a.ue_cel_stub.replayModule(n, m);
                      f.addEventListener && f.addEventListener("mousedown", m, !0);
                    },
                    off: function (a) {
                      f.addEventListener && f.removeEventListener("mousedown", m, !0);
                    },
                    ready: function () {
                      return a.ue_cel && a.ue_cel.log;
                    },
                    reset: function () {},
                  };
                })()),
                a.ue_cel && a.ue_cel.registerModule("mouse click module", a.ue_mcm));
            })(ue_csm);
            (function (a) {
              a.ue_mmm ||
                !a.ue_cel ||
                a.ue.isBF ||
                ((a.ue_mmm = (function (m) {
                  function n(a, b) {
                    var c = { x: a.pageX || a.x || 0, y: a.pageY || a.y || 0, t: l() };
                    (!b && p && (c.t - p.t < B || (c.x == p.x && c.y == p.y))) || ((p = c), u.push(c));
                  }
                  function c() {
                    if (u.length) {
                      F = H.now();
                      for (var a = 0; a < u.length; a++) {
                        var c = u[a],
                          d = a;
                        y = u[h];
                        E = c;
                        var e = void 0;
                        if (!(e = 2 > d)) {
                          e = void 0;
                          a: if (u[d].t - u[d - 1].t > f) e = 0;
                          else {
                            for (e = h + 1; e < d; e++) {
                              var g = y,
                                k = E,
                                l = u[e];
                              G = (k.x - g.x) * (g.y - l.y) - (g.x - l.x) * (k.y - g.y);
                              if ((G * G) / ((k.x - g.x) * (k.x - g.x) + (k.y - g.y) * (k.y - g.y)) > z) {
                                e = 0;
                                break a;
                              }
                            }
                            e = 1;
                          }
                          e = !e;
                        }
                        (r = e) ? (h = d - 1) : D.pop();
                        D.push(c);
                      }
                      C = H.now() - F;
                      s = Math.min(s, C);
                      v = Math.max(v, C);
                      A = (A * b + C) / (b + 1);
                      b += 1;
                      q(
                        { k: x, e: D, min: Math.floor(1e3 * s), max: Math.floor(1e3 * v), avg: Math.floor(1e3 * A) },
                        { c: 1 },
                      );
                      u = [];
                      D = [];
                      h = 0;
                    }
                  }
                  var f = 100,
                    B = 20,
                    z = 25,
                    x = "mmm1",
                    l,
                    k,
                    d = a.window,
                    e = d.document,
                    w = d.setInterval,
                    t = a.ue,
                    q = a.ue_cel.log,
                    g,
                    s = 1e3,
                    v = 0,
                    A = 0,
                    b = 0,
                    F,
                    C,
                    u = [],
                    D = [],
                    h = 0,
                    p,
                    y,
                    E,
                    G,
                    r,
                    H = (m && m.now && m) ||
                      (Date.now && Date) || {
                        now: function () {
                          return new Date().getTime();
                        },
                      };
                  return {
                    on: function (a) {
                      l = a.ts;
                      k = a.ns;
                      t.attach && t.attach("mousemove", n, e);
                      g = w(c, 3e3);
                    },
                    off: function (a) {
                      k && (p && n(p, !0), c());
                      clearInterval(g);
                      t.detach && t.detach("mousemove", n, e);
                    },
                    ready: function () {
                      return a.ue_cel && a.ue_cel.log;
                    },
                    reset: function () {
                      u = [];
                      D = [];
                      h = 0;
                      p = null;
                    },
                  };
                })(window.performance)),
                a.ue_cel && a.ue_cel.registerModule("mouse move module", a.ue_mmm));
            })(ue_csm);

            ue_csm.ue.exec(function (b, c) {
              var e = function () {},
                f = (function () {
                  return {
                    send: function (b, d) {
                      if (d && b) {
                        var a;
                        if (c.XDomainRequest)
                          ((a = new XDomainRequest()),
                            (a.onerror = e),
                            (a.ontimeout = e),
                            (a.onprogress = e),
                            (a.onload = e),
                            (a.timeout = 0));
                        else if (c.XMLHttpRequest) {
                          if (((a = new XMLHttpRequest()), !("withCredentials" in a))) throw "";
                        } else a = void 0;
                        if (!a) throw "";
                        a.open("POST", b, !0);
                        a.setRequestHeader && a.setRequestHeader("Content-type", "text/plain");
                        a.send(d);
                      }
                    },
                    isSupported: !0,
                  };
                })(),
                g = (function () {
                  return {
                    send: function (c, d) {
                      if (c && d)
                        if (navigator.sendBeacon(c, d)) b.ue_sbuimp && b.ue && b.ue.ssw && b.ue.ssw("eelsts", "scs");
                        else throw "";
                    },
                    isSupported:
                      !!navigator.sendBeacon && !(c.cordova && c.cordova.platformId && "ios" == c.cordova.platformId),
                  };
                })();
              b.ue._ajx = f;
              b.ue._sBcn = g;
            }, "Transportation-clients")(ue_csm, window);
            ue_csm.ue.exec(function (b, l) {
              function B() {
                for (var a = 0; a < arguments.length; a++) {
                  var c = arguments[a];
                  try {
                    var g;
                    if (c.isSupported) {
                      var f = t.buildPayload(k, e);
                      g = c.send(J, f);
                    } else throw dummyException;
                    return g;
                  } catch (d) {}
                }
                a = {
                  m: "All supported clients failed",
                  attribution: "CSMSushiClient_TRANSPORTATION_FAIL",
                  f: "sushi-client.js",
                  logLevel: "ERROR",
                };
                b.ue_err.buffer && b.ue_err.buffer.push(a);
              }
              function m() {
                if (e.length) {
                  for (var a = 0; a < n.length; a++) n[a]();
                  B(d._sBcn || {}, d._ajx || {});
                  e = [];
                  h = {};
                  k = {};
                  u = v = q = w = 0;
                }
              }
              function K() {
                var a = new Date(),
                  c = function (a) {
                    return 10 > a ? "0" + a : a;
                  };
                return Date.prototype.toISOString
                  ? a.toISOString()
                  : a.getUTCFullYear() +
                      "-" +
                      c(a.getUTCMonth() + 1) +
                      "-" +
                      c(a.getUTCDate()) +
                      "T" +
                      c(a.getUTCHours()) +
                      ":" +
                      c(a.getUTCMinutes()) +
                      ":" +
                      c(a.getUTCSeconds()) +
                      "." +
                      String((a.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) +
                      "Z";
              }
              function x(a) {
                try {
                  return JSON.stringify(a);
                } catch (c) {}
                return null;
              }
              function C(a, c, g, f) {
                var p = !1;
                f = f || {};
                r++;
                if (r == D) {
                  var s = {
                    m: "Max number of Sushi Logs exceeded",
                    f: "sushi-client.js",
                    logLevel: "ERROR",
                    attribution: "CSMSushiClient_MAX_CALLS",
                  };
                  b.ue_err.buffer && b.ue_err.buffer.push(s);
                }
                if ((s = !(r >= D)))
                  (s =
                    a &&
                    -1 < a.constructor.toString().indexOf("Object") &&
                    c &&
                    -1 < c.constructor.toString().indexOf("String") &&
                    g &&
                    -1 < g.constructor.toString().indexOf("String")) || L++;
                s &&
                  (d.count && d.count("Event:" + g, 1),
                  (a.producerId = a.producerId || c),
                  (a.schemaId = a.schemaId || g),
                  (a.timestamp = K()),
                  (c = Date.now ? Date.now() : +new Date()),
                  (g = Math.random().toString().substring(2, 12)),
                  (a.messageId = b.ue_id + "-" + c + "-" + g),
                  f &&
                    !f.ssd &&
                    ((a.sessionId = a.sessionId || b.ue_sid),
                    (a.requestId = a.requestId || b.ue_id),
                    (a.obfuscatedMarketplaceId = a.obfuscatedMarketplaceId || b.ue_mid)),
                  (c = x(a))
                    ? ((c = c.length),
                      (e.length == M || q + c > N) && m(),
                      (q += c),
                      (a = { data: t.compressEvent(a) }),
                      e.push(a),
                      (f || {}).n ? (0 === E ? m() : u || (u = l.setTimeout(m, E))) : v || (v = l.setTimeout(m, O)),
                      (p = !0))
                    : (p = !1));
                !p && b.ue_int && console.error("Invalid JS Nexus API call");
                return p;
              }
              function F() {
                if (!G) {
                  for (var a = 0; a < y.length; a++) y[a]();
                  for (a = 0; a < n.length; a++) n[a]();
                  e.length &&
                    (b.ue_sbuimp &&
                      b.ue &&
                      b.ue.ssw &&
                      ((a = x({ dct: k, evt: e })), b.ue.ssw("eeldata", a), b.ue.ssw("eelsts", "unk")),
                    B(d._sBcn || {}));
                  G = !0;
                }
              }
              function H(a) {
                y.push(a);
              }
              function I(a) {
                n.push(a);
              }
              var D = 1e3,
                M = 499,
                N = 524288,
                z = function () {},
                d = b.ue || {},
                P = b.uex || z;
              (b.uet || z)("bb", "ue_sushi_v1", { wb: 1 });
              var J = b.ue_surl || "https://unagi-na.amazon.com/1/events/com.amazon.csm.nexusclient.gamma",
                Q = ["messageId", "timestamp"],
                A = "#",
                e = [],
                h = {},
                k = {},
                q = 0,
                w = 0,
                L = 0,
                r = 0,
                y = [],
                n = [],
                G = !1,
                u,
                v,
                E = void 0 === b.ue_hpsi ? 1e3 : b.ue_hpsi,
                O = void 0 === b.ue_lpsi ? 1e4 : b.ue_lpsi,
                t = (function () {
                  function a(a) {
                    h[a] = A + w++;
                    k[h[a]] = a;
                    return h[a];
                  }
                  function c(b) {
                    if (!(b instanceof Function)) {
                      if (b instanceof Array) {
                        for (var f = [], d = b.length, e = 0; e < d; e++) f[e] = c(b[e]);
                        return f;
                      }
                      if (b instanceof Object) {
                        f = {};
                        for (d in b)
                          b.hasOwnProperty(d) && (f[h[d] ? h[d] : a(d)] = -1 === Q.indexOf(d) ? c(b[d]) : b[d]);
                        return f;
                      }
                      return "string" === typeof b && (b.length > (A + w).length || b.charAt(0) === A)
                        ? h[b]
                          ? h[b]
                          : a(b)
                        : b;
                    }
                  }
                  return {
                    compressEvent: c,
                    buildPayload: function () {
                      return x({ cs: { dct: k }, events: e });
                    },
                  };
                })();
              (function () {
                if (d.event && d.event.isStub) {
                  if (b.ue_sbuimp && b.ue && b.ue.ssw) {
                    var a = b.ue.ssw("eelsts").val;
                    if (a && "unk" === a && (a = b.ue.ssw("eeldata").val)) {
                      var c;
                      a: {
                        try {
                          c = JSON.parse(a);
                          break a;
                        } catch (g) {}
                        c = null;
                      }
                      c &&
                        c.evt instanceof Array &&
                        c.dct instanceof Object &&
                        ((e = c.evt),
                        (k = c.dct),
                        e && k && (m(), b.ue.ssw("eeldata", "{}"), b.ue.ssw("eelsts", "scs")));
                    }
                  }
                  d.event.replay(function (a) {
                    a[3] = a[3] || {};
                    a[3].n = 1;
                    C.apply(this, a);
                  });
                  d.onSushiUnload.replay(function (a) {
                    H(a[0]);
                  });
                  d.onSushiFlush.replay(function (a) {
                    I(a[0]);
                  });
                }
              })();
              d.attach("beforeunload", F);
              d.attach("pagehide", F);
              d._cmps = t;
              d.event = C;
              d.event.reset = function () {
                r = 0;
              };
              d.onSushiUnload = H;
              d.onSushiFlush = I;
              try {
                l.P && l.P.register && l.P.register("sushi-client", z);
              } catch (R) {
                b.ueLogError(R, { logLevel: "WARN" });
              }
              P("ld", "ue_sushi_v1", { wb: 1 });
            }, "Nxs-JS-Client")(ue_csm, window);

            ue_dsbl_frstr_cel = 1;
            ue_csm.ue_unrt = 1500;
            (function (d, b, u) {
              function v(a, h) {
                var c = a.srcElement || a.target || {},
                  e = { k: w, t: h.t, dt: h.dt, x: a.pageX, y: a.pageY, p: f.getXPath(c), n: c.nodeName };
                a.button && (e.b = a.button);
                c.type && (e.ty = c.type);
                c.href && (e.r = f.extractStringValue(c.href));
                c.id && (e.i = c.id);
                c.className && c.className.split && (e.c = c.className.split(/\s+/));
                k += 1;
                f.getFirstAscendingWidget(c, function (a) {
                  e.wd = a;
                  1 !== b.ue_dsbl_frstr_cel && d.ue.log(e, s);
                  ue.count("unresponsiveClicks", 1);
                });
              }
              function x(a) {
                if (!y(a.srcElement || a.target)) {
                  n += 1;
                  p = !0;
                  var h = (g = d.ue.d()),
                    c;
                  q &&
                    "function" === typeof q.now &&
                    a.timeStamp &&
                    ((c = q.now() - a.timeStamp), (c = parseFloat(c.toFixed(2))));
                  t = b.setTimeout(function () {
                    v(a, { t: h, dt: c });
                  }, z);
                }
              }
              function A(a) {
                if (a) {
                  var h = a.filter(B);
                  a.length !== h.length &&
                    ((r = !0),
                    (l = d.ue.d()),
                    p &&
                      r &&
                      (l && g && 1 !== b.ue_dsbl_frstr_cel && d.ue.log({ k: C, t: g, m: Math.abs(l - g) }, s),
                      m(),
                      (r = !1),
                      (l = 0)));
                }
              }
              function B(a) {
                if (!a) return !1;
                var b = "characterData" === a.type ? a.target.parentElement : a.target;
                if (!b || !b.hasAttributes || !b.attributes) return !1;
                var c = {
                    class:
                      "gw-clock gw-clock-aria s-item-container-height-auto feed-carousel using-mouse kfs-inner-container".split(
                        " ",
                      ),
                    id: ["dealClock", "deal_expiry_timer", "timer"],
                    role: ["timer"],
                  },
                  e = !1;
                Object.keys(c).forEach(function (a) {
                  var d = b.attributes[a] ? b.attributes[a].value : "";
                  (c[a] || "").forEach(function (a) {
                    -1 !== d.indexOf(a) && (e = !0);
                  });
                });
                return e;
              }
              function y(a) {
                if (!a) return !1;
                var b = (f.extractStringValue(a.nodeName) || "").toLowerCase(),
                  c = (f.extractStringValue(a.type) || "").toLowerCase(),
                  d = (f.extractStringValue(a.href) || "").toLowerCase();
                a = (f.extractStringValue(a.id) || "").toLowerCase();
                var g =
                  "checkbox color date datetime-local email file month number password radio range reset search tel text time url week".split(
                    " ",
                  );
                if (
                  -1 !== ["select", "textarea", "html"].indexOf(b) ||
                  ("input" === b && -1 !== g.indexOf(c)) ||
                  ("a" === b && -1 !== d.indexOf("http")) ||
                  -1 !== ["sitbreaderrightpageturner", "sitbreaderleftpageturner", "sitbreaderpagecontainer"].indexOf(a)
                )
                  return !0;
              }
              function m() {
                p = !1;
                g = 0;
                b.clearTimeout(t);
              }
              function D() {
                b.ue.onunload(function () {
                  ue.count("armored-cxguardrails.unresponsive-clicks.violations", k);
                  ue.count("armored-cxguardrails.unresponsive-clicks.violationRate", (k / n) * 100 || 0);
                });
              }
              if (
                b.MutationObserver &&
                b.addEventListener &&
                Object.keys &&
                d &&
                d.ue &&
                d.ue.log &&
                d.ue_unrt &&
                d.ue_utils
              ) {
                var z = d.ue_unrt,
                  s = "cel",
                  w = "unr_mcm",
                  C = "res_mcm",
                  q = b.performance,
                  f = d.ue_utils,
                  p = !1,
                  g = 0,
                  t = 0,
                  r = !1,
                  l = 0,
                  k = 0,
                  n = 0;
                b.addEventListener &&
                  (b.addEventListener("mousedown", x, !0),
                  b.addEventListener("beforeunload", m, !0),
                  b.addEventListener("visibilitychange", m, !0),
                  b.addEventListener("pagehide", m, !0));
                b.ue && b.ue.event && b.ue.onSushiUnload && b.ue.onunload && D();
                new MutationObserver(A).observe(u, { childList: !0, attributes: !0, characterData: !0, subtree: !0 });
              }
            })(ue_csm, window, document);

            ue_csm.ue.exec(function (g, e) {
              if (e.ue_err) {
                var f = "";
                e.ue_err.errorHandlers || (e.ue_err.errorHandlers = []);
                e.ue_err.errorHandlers.push({
                  name: "fctx",
                  handler: function (a) {
                    if (!a.logLevel || "FATAL" === a.logLevel)
                      if ((f = g.getElementsByTagName("html")[0].innerHTML)) {
                        var b = f.indexOf("var ue_t0=ue_t0||+new Date();");
                        if (-1 !== b) {
                          var b = f.substr(0, b).split(String.fromCharCode(10)),
                            d = Math.max(b.length - 10 - 1, 0),
                            b = b.slice(d, b.length - 1);
                          a.fcsmln = d + b.length + 1;
                          a.cinfo = a.cinfo || {};
                          for (var c = 0; c < b.length; c++) a.cinfo[d + c + 1 + ""] = b[c];
                        }
                        b = f.split(String.fromCharCode(10));
                        a.cinfo = a.cinfo || {};
                        if (!(a.f || void 0 === a.l || a.l in a.cinfo))
                          for (c = +a.l - 1, d = Math.max(c - 5, 0), c = Math.min(c + 5, b.length - 1); d <= c; d++)
                            a.cinfo[d + 1 + ""] = b[d];
                      }
                  },
                });
              }
            }, "fatals-context")(document, window);

            (function (m, a) {
              function c(k) {
                function f(b) {
                  b &&
                    "string" === typeof b &&
                    ((b = (b = b.match(/^(?:https?:)?\/\/(.*?)(\/|$)/i)) && 1 < b.length ? b[1] : null),
                    b && b && ("number" === typeof e[b] ? e[b]++ : (e[b] = 1)));
                }
                function d(b) {
                  var e = 10,
                    d = +new Date();
                  b && b.timeRemaining
                    ? (e = b.timeRemaining())
                    : (b = {
                        timeRemaining: function () {
                          return Math.max(0, e - (+new Date() - d));
                        },
                      });
                  for (var c = a.performance.getEntries(), k = e; g < c.length && k > n; )
                    (c[g].name && f(c[g].name), g++, (k = b.timeRemaining()));
                  g >= c.length ? h(!0) : l();
                }
                function h(b) {
                  if (!b) {
                    b = m.scripts;
                    var c;
                    if (b)
                      for (var d = 0; d < b.length; d++) (c = b[d].getAttribute("src")) && "undefined" !== c && f(c);
                  }
                  0 < Object.keys(e).length &&
                    (p &&
                      ue_csm.ue &&
                      ue_csm.ue.event &&
                      ue_csm.ue.event(
                        {
                          domains: e,
                          pageType: a.ue_pty || null,
                          subPageType: a.ue_spty || null,
                          pageTypeId: a.ue_pti || null,
                        },
                        "csm",
                        "csm.CrossOriginDomains.2",
                      ),
                    (a.ue_ext = e));
                }
                function l() {
                  !0 === k
                    ? d()
                    : a.requestIdleCallback
                      ? a.requestIdleCallback(d)
                      : a.requestAnimationFrame
                        ? a.requestAnimationFrame(d)
                        : a.setTimeout(d, 100);
                }
                function c() {
                  if (a.performance && a.performance.getEntries) {
                    var b = a.performance.getEntries();
                    !b || 0 >= b.length ? h(!1) : l();
                  } else h(!1);
                }
                var e = a.ue_ext || {};
                a.ue_ext || c();
                return e;
              }
              function q() {
                setTimeout(c, r);
              }
              var s = a.ue_dserr || !1,
                p = !0,
                n = 1,
                r = 2e3,
                g = 0;
              a.ue_err &&
                s &&
                (a.ue_err.errorHandlers || (a.ue_err.errorHandlers = []),
                a.ue_err.errorHandlers.push({
                  name: "ext",
                  handler: function (a) {
                    if (!a.logLevel || "FATAL" === a.logLevel) {
                      var f = c(!0),
                        d = [],
                        h;
                      for (h in f) {
                        var f = h,
                          g = f.match(/amazon(\.com?)?\.\w{2,3}$/i);
                        (g && 1 < g.length) ||
                          -1 !== f.indexOf("amazon-adsystem.com") ||
                          -1 !== f.indexOf("amazonpay.com") ||
                          -1 !== f.indexOf("cloudfront-labs.amazonaws.com") ||
                          d.push(h);
                      }
                      a.ext = d;
                    }
                  },
                }));
              a.ue && a.ue.isl ? c() : a.ue && ue.attach && ue.attach("load", q);
            })(document, window);

            var ue_wtc_c = 3;
            ue_csm.ue.exec(function (b, e) {
              function l() {
                for (var a = 0; a < f.length; a++)
                  a: for (var d = s.replace(A, f[a]) + g[f[a]] + t, c = arguments, b = 0; b < c.length; b++)
                    try {
                      c[b].send(d);
                      break a;
                    } catch (e) {}
                g = {};
                f = [];
                n = 0;
                k = p;
              }
              function u() {
                B ? l(q) : l(C, q);
              }
              function v(a, m, c) {
                r++;
                if (r > w)
                  d.count &&
                    1 == r - w &&
                    (d.count("WeblabTriggerThresholdReached", 1),
                    b.ue_int && console.error("Number of max call reached. Data will no longer be send"));
                else {
                  var h = c || {};
                  h &&
                  -1 < h.constructor.toString().indexOf(D) &&
                  a &&
                  -1 < a.constructor.toString().indexOf(x) &&
                  m &&
                  -1 < m.constructor.toString().indexOf(x)
                    ? ((h = b.ue_id),
                      c && c.rid && (h = c.rid),
                      (c = h),
                      (a = encodeURIComponent(",wl=" + a + "/" + m)),
                      2e3 > a.length + p
                        ? (2e3 < k + a.length && u(),
                          void 0 === g[c] && ((g[c] = ""), f.push(c)),
                          (g[c] += a),
                          (k += a.length),
                          n || (n = e.setTimeout(u, E)))
                        : b.ue_int && console.error("Invalid API call. The input provided is over 2000 chars."))
                    : d.count &&
                      (d.count("WeblabTriggerImproperAPICall", 1),
                      b.ue_int &&
                        console.error(
                          "Invalid API call. The input provided does not match the API protocol i.e ue.trigger(String, String, Object).",
                        ));
                }
              }
              function F() {
                d.trigger &&
                  d.trigger.isStub &&
                  d.trigger.replay(function (a) {
                    v.apply(this, a);
                  });
              }
              function y() {
                z || (f.length && l(q), (z = !0));
              }
              var t = ":1234",
                s =
                  "//" +
                  b.ue_furl +
                  "/1/remote-weblab-triggers/1/OE/" +
                  b.ue_mid +
                  ":" +
                  b.ue_sid +
                  ":PLCHLDR_RID$s:wl-client-id%3DCSMTriger",
                A = "PLCHLDR_RID",
                E = b.wtt || 1e4,
                p = s.length + t.length,
                w = b.mwtc || 2e3,
                G = 1 === e.ue_wtc_c,
                B = 3 === e.ue_wtc_c,
                H = e.XMLHttpRequest && "withCredentials" in new e.XMLHttpRequest(),
                x = "String",
                D = "Object",
                d = b.ue,
                g = {},
                f = [],
                k = p,
                n,
                z = !1,
                r = 0,
                C = (function () {
                  return {
                    send: function (a) {
                      if (H) {
                        var b = new e.XMLHttpRequest();
                        b.open("GET", a, !0);
                        G && (b.withCredentials = !0);
                        b.send();
                      } else throw "";
                    },
                  };
                })(),
                q = (function () {
                  return {
                    send: function (a) {
                      new Image().src = a;
                    },
                  };
                })();
              e.encodeURIComponent &&
                (d.attach && (d.attach("beforeunload", y), d.attach("pagehide", y)), F(), (d.trigger = v));
            }, "client-wbl-trg")(ue_csm, window);

            (function (k, d, h) {
              function f(a, c, b) {
                a && a.indexOf && 0 === a.indexOf("http") && 0 !== a.indexOf("https") && l(s, c, a, b);
              }
              function g(a, c, b) {
                a &&
                  a.indexOf &&
                  ((location.href.split("#")[0] != a && null !== a && "undefined" !== typeof a) || l(t, c, a, b));
              }
              function l(a, c, b, e) {
                m[b] ||
                  ((e = u && e ? n(e) : "N/A"),
                  d.ueLogError &&
                    d.ueLogError({ message: a + c + " : " + b, logLevel: v, stack: "N/A" }, { attribution: e }),
                  (m[b] = 1),
                  p++);
              }
              function e(a, c) {
                if (a && c)
                  for (var b = 0; b < a.length; b++)
                    try {
                      c(a[b]);
                    } catch (d) {}
              }
              function q() {
                return d.performance && d.performance.getEntriesByType
                  ? d.performance.getEntriesByType("resource")
                  : [];
              }
              function n(a) {
                if (a.id) return "//*[@id='" + a.id + "']";
                var c;
                c = 1;
                var b;
                for (b = a.previousSibling; b; b = b.previousSibling) b.nodeName == a.nodeName && (c += 1);
                b = a.nodeName;
                1 != c && (b += "[" + c + "]");
                a.parentNode && (b = n(a.parentNode) + "/" + b);
                return b;
              }
              function w() {
                var a = h.images;
                a &&
                  a.length &&
                  e(a, function (a) {
                    var b = a.getAttribute("src");
                    f(b, "img", a);
                    g(b, "img", a);
                  });
              }
              function x() {
                var a = h.scripts;
                a &&
                  a.length &&
                  e(a, function (a) {
                    var b = a.getAttribute("src");
                    f(b, "script", a);
                    g(b, "script", a);
                  });
              }
              function y() {
                var a = h.styleSheets;
                a &&
                  a.length &&
                  e(a, function (a) {
                    if ((a = a.ownerNode)) {
                      var b = a.getAttribute("href");
                      f(b, "style", a);
                      g(b, "style", a);
                    }
                  });
              }
              function z() {
                if (A) {
                  var a = q();
                  e(a, function (a) {
                    f(a.name, a.initiatorType);
                  });
                }
              }
              function B() {
                e(q(), function (a) {
                  g(a.name, a.initiatorType);
                });
              }
              function r() {
                var a;
                a = d.location && d.location.protocol ? d.location.protocol : void 0;
                "https:" == a && (z(), w(), x(), y(), B(), p < C && setTimeout(r, D));
              }
              var s = "[CSM] Insecure content detected ",
                t = "[CSM] Ajax request to same page detected ",
                v = "WARN",
                m = {},
                p = 0,
                D = k.ue_nsip || 1e3,
                C = 5,
                A = 1 == k.ue_urt,
                u = !0;
              ue_csm.ue_disableNonSecure ||
                (d.performance &&
                  d.performance.setResourceTimingBufferSize &&
                  d.performance.setResourceTimingBufferSize(300),
                r());
            })(ue_csm, window, document);

            var ue_aa_a = "T1";
            if (ue.trigger && (ue_aa_a === "C" || ue_aa_a === "T1")) {
              ue.trigger("UEDATA_AA_SERVERSIDE_ASSIGNMENT_CLIENTSIDE_TRIGGER_190249", ue_aa_a);
            }
            (function (f, b) {
              function g() {
                try {
                  b.PerformanceObserver &&
                    "function" === typeof b.PerformanceObserver &&
                    ((a = new b.PerformanceObserver(function (b) {
                      c(b.getEntries());
                    })),
                    a.observe(d));
                } catch (h) {
                  k();
                }
              }
              function m() {
                for (var h = d.entryTypes, a = 0; a < h.length; a++) c(b.performance.getEntriesByType(h[a]));
              }
              function c(a) {
                if (a && Array.isArray(a)) {
                  for (var c = 0, e = 0; e < a.length; e++) {
                    var d = l.indexOf(a[e].name);
                    if (-1 !== d) {
                      var g = Math.round(b.performance.timing.navigationStart + a[e].startTime);
                      f.uet(n[d], void 0, void 0, g);
                      c++;
                    }
                  }
                  l.length === c && k();
                }
              }
              function k() {
                a && a.disconnect && "function" === typeof a.disconnect && a.disconnect();
              }
              if (
                "function" === typeof f.uet &&
                b.performance &&
                "object" === typeof b.performance &&
                b.performance.getEntriesByType &&
                "function" === typeof b.performance.getEntriesByType &&
                b.performance.timing &&
                "object" === typeof b.performance.timing &&
                "number" === typeof b.performance.timing.navigationStart
              ) {
                var d = { entryTypes: ["paint"] },
                  l = ["first-paint", "first-contentful-paint"],
                  n = ["fp", "fcp"],
                  a;
                try {
                  (m(), g());
                } catch (p) {
                  f.ueLogError(p, { logLevel: "ERROR", attribution: "performanceMetrics" });
                }
              }
            })(ue_csm, window);

            if (window.csa) {
              csa("Events")("setEntity", {
                page: { pageType: "Detail", subPageType: "Glance", pageTypeId: "B01LBI1BIO" },
              });
            }
            csa.plugin(function (d) {
              var e,
                t,
                n,
                m = "transitionStart",
                i = "pageVisible",
                o = "PageTiming",
                a = "visibilitychange",
                u = "$latency.visible",
                r = d.global,
                c = (r.performance || {}).timing,
                s = [
                  "navigationStart",
                  "unloadEventStart",
                  "unloadEventEnd",
                  "redirectStart",
                  "redirectEnd",
                  "fetchStart",
                  "domainLookupStart",
                  "domainLookupEnd",
                  "connectStart",
                  "connectEnd",
                  "secureConnectionStart",
                  "requestStart",
                  "responseStart",
                  "responseEnd",
                  "domLoading",
                  "domInteractive",
                  "domContentLoadedEventStart",
                  "domContentLoadedEventEnd",
                  "domComplete",
                  "loadEventStart",
                  "loadEventEnd",
                ],
                l = d.config,
                f = r.Math,
                g = f.max,
                v = f.floor,
                p = r.document || {},
                S = (c || {}).navigationStart,
                E = S,
                I = 0,
                h = 0,
                b = null;
              if (r.Object.keys && [].forEach && !l["KillSwitch." + o]) {
                if (!c || null === S || S <= 0 || void 0 === S) return d.error("Invalid navigation timing data: " + S);
                ((b = new y({ schemaId: "<ns>.PageLatency.6", producerId: "csa" })),
                  ("boolean" != typeof p.hidden && "string" != typeof p.visibilityState) || !p.removeEventListener
                    ? d.emit(u)
                    : L()
                      ? (d.emit(u), T(i, S))
                      : d.on(p, a, function n() {
                          L() && ((E = d.time()), p.removeEventListener(a, n), T(m, E), T(i, E), d.emit(u));
                        }),
                  d.on("$timing:aboveTheFold", function (n) {
                    ((e = n), $());
                  }),
                  d.on("$timing:functional", function (n) {
                    ((t = n), $());
                  }),
                  d.once("$unload", k),
                  d.once("$load", k),
                  d.on("$pageTransition", function () {
                    ((E = d.time()), (t = e = n), (h = 0));
                  }),
                  d.register(o, {
                    mark: T,
                    instance: function (n) {
                      return new y(n);
                    },
                  }));
              }
              function y(n) {
                var i,
                  o = null,
                  a = n.ent || { page: ["pageType", "subPageType", "requestId"] },
                  r = n.logger || d("Events", { producerId: n.producerId, lob: l.lob || "0" });
                if (!n || !n.producerId || !n.schemaId)
                  return d.error("The producer id and schema Id must be defined for PageLatencyInstance.");
                function c() {
                  return i || E;
                }
                function e() {
                  o = d.UUID();
                }
                ((this.mark = function (e, t) {
                  if (null != e)
                    return (
                      (t = t || d.time()),
                      e === m && (i = t),
                      d.once(u, function () {
                        r(
                          "log",
                          {
                            messageId: o,
                            __merge: function (n) {
                              ((n.markers[e] = (function (n, e) {
                                return g(0, e - (n || E));
                              })(c(), t)),
                                (n.markerTimestamps[e] = v(t)));
                            },
                            markers: {},
                            markerTimestamps: {},
                            navigationStartTimestamp: c() ? new Date(c()).toISOString() : null,
                            schemaId: n.schemaId,
                          },
                          { ent: a },
                        );
                      }),
                      t
                    );
                }),
                  e(),
                  d.on("$beforePageTransition", e));
              }
              function T(n, e) {
                n === m && (E = e);
                var t = b.mark(n, e);
                d.emit("$timing:" + n, t);
              }
              function k() {
                if (!I) {
                  for (var n = 0; n < s.length; n++) c[s[n]] && T(s[n], c[s[n]]);
                  I = 1;
                }
              }
              function L() {
                return !p.hidden || "visible" === p.visibilityState;
              }
              function $() {
                e === n || t === n || h || (T("timeToInteractive", g(e, t)), (h = 1));
              }
            });
            csa.plugin(function (f) {
              var e,
                n,
                r,
                o,
                c = "length",
                i = "number",
                l = "addedNodes",
                s = "removedNodes",
                a = "nodeName",
                u = "nodeValue",
                d = "parentElement",
                v = "target",
                h = "getEntriesByName",
                m = "checkVisibility",
                g = { opacityProperty: !0, visibilityProperty: !0 },
                t = "_csa_",
                p = t + "nnh",
                y = t + "flt",
                E = t + "llt",
                S = t + "vlb",
                T = t + "vla",
                b = t + "vlab",
                x = t + "vlta",
                I = t + "vlr",
                N = t + "vl_thr",
                _ = t + "vl_sl",
                L = t + "vl_lm",
                w = L + "i",
                M = t + "vl_em",
                O = t + "vlt",
                B = t + "vp",
                C = t + "eb",
                V = t + "pcc",
                k = t + "nrm",
                W = t + "inv_",
                P = W + "mslt",
                A = W + "h",
                R = "previousSibling",
                D = "nextSibling",
                H = "visuallyLoaded",
                X = "vlDbg",
                Y = "Total",
                F = "client",
                $ = "offset",
                q = "scroll",
                J = "Width",
                Q = "Height",
                j = "width",
                K = "height",
                U = F + J,
                z = F + Q,
                G = $ + J,
                Z = $ + Q,
                tt = q + J,
                et = q + Q,
                nt = "_elt",
                rt = "_eid",
                it = 10,
                ot = 5,
                at = 35,
                ut = 100,
                ft = "IFRAME",
                ct = { 50: 1, 90: 1, 100: 1 },
                lt = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, LINK: 1, META: 1 },
                st = ["_csa_visual_load_hidden_"],
                dt = ["a-truncate-cut"],
                vt = { "nav-flyout-anchor": 1, "nav-flyout-iss-anchor": 1 },
                ht = ["TEXTAREA", "SELECT", ft],
                mt = f.global,
                gt = f.timeout,
                pt = mt.Math,
                yt = pt.min,
                Et = pt.max,
                St = pt.floor,
                Tt = pt.ceil,
                bt = mt.document || {},
                xt = bt.body || {},
                It = bt.documentElement || {},
                Nt = mt.performance || {},
                _t = (Nt.timing || {}).navigationStart,
                Lt = Date.now,
                wt = Object.values || (f.types || {}).ovl,
                Mt = f("PageTiming"),
                Ot = f("SpeedIndexBuffers"),
                Bt = 0,
                Ct = [],
                Vt = [],
                kt = [],
                Wt = [],
                Pt = [],
                At = [],
                Rt = [],
                Dt = it,
                Ht = it,
                Xt = 0.1,
                Yt = 0.1,
                Ft = 0,
                $t = 0,
                qt = 0,
                Jt = 0,
                Qt = 0,
                jt = 0,
                Kt = 0,
                Ut = 1,
                zt = 0,
                Gt = {},
                Zt = [],
                te = 0,
                ee = 0,
                ne = 0,
                re = 0,
                ie = 0,
                oe = {},
                ae = 0,
                ue = 0,
                fe = 0,
                ce = 0,
                le = 0;
              function se() {
                var t = Lt(),
                  e = 0;
                for (!Bt && o && o.d && (De("QueStart" + o.d), (Bt = 1)); o; ) {
                  if (0 !== o[c]) {
                    if ((!1 !== o.h(o[0]) && o.shift(), e++, !jt && e % it == 0 && Lt() - t > ot)) break;
                  } else (o = o.n) && o.d && De("QueStart" + o.d);
                }
                ((Ft = 0), o && (Ft || (!0 === bt.hidden ? ((jt = 1), se()) : f.timeout(se, 0))));
              }
              function de(t, e, n, r) {
                (De("BufStart"), (zt = St(t)), (Ct = e), (Vt = n), (Rt = r));
                var i = bt.createTreeWalker(bt.body, NodeFilter.SHOW_TEXT, null, null);
                ((bt.body[nt] = t),
                  kt.push({ w: i }),
                  Wt.push({ img: bt.images, iter: 0 }),
                  Pt.push({ vid: bt.getElementsByTagName("VIDEO"), iter: 0 }),
                  ht.forEach(function (t) {
                    At.push({ iel: bt.getElementsByTagName(t), iter: 0, rt: ft === t });
                  }),
                  (Ct.h = he),
                  (Ct.n = Vt),
                  (Ct.d = "MutInt"),
                  (Vt.h = Ne),
                  (Vt.n = kt),
                  (Vt.d = "Mut"),
                  (kt.h = Le),
                  (kt.n = Wt),
                  (kt.d = "Txt"),
                  (Wt.h = we),
                  (Wt.n = Pt),
                  (Wt.d = "Img"),
                  (Pt.h = Me),
                  (Pt.n = At),
                  (Pt.d = "Vid"),
                  (At.h = Oe),
                  (At.n = Rt),
                  (At.d = "IntEl"),
                  (Rt.h = Be),
                  (Rt.d = "VpUpd"),
                  (o = Ct),
                  se());
              }
              function ve(t, e) {
                for (var n = t; n && (t === n || !n[y] || !n[E]); ) {
                  (n[y] || (n[y] = t[y]), n[E] || (n[E] = t[E]));
                  var r = n[y] - _t;
                  ((n[nt] = r), (n[_] = r), (n = n[e]));
                }
              }
              function he(t) {
                var e = t.iter || 0;
                for (Dt = Dt <= 0 ? it : Dt; e < t.m[c] && 0 < Dt; ) {
                  var n = t.m[e];
                  (ve(n, R), ve(n, D), (re += 1), (t.iter = e += 1), (Dt -= 1));
                }
                return t.m[c] <= e;
              }
              function me(e, t) {
                return (
                  e &&
                  e.classList &&
                  pe(e.classList.contains) &&
                  t &&
                  0 < t[c] &&
                  pe(t.some) &&
                  t.some(function (t) {
                    return e.classList.contains(t);
                  })
                );
              }
              function ge(t) {
                return typeof t === i && !isNaN(t);
              }
              function pe(t) {
                return "function" == typeof t;
              }
              function ye(t) {
                return t && t.endsWith && t.endsWith("px") ? +t.substring(0, t[c] - 2) : e;
              }
              function Ee(t) {
                if (t && p in t) return t[p];
                var e =
                  t &&
                  !lt[t[a] || ""] &&
                  (!pe(t[m]) || t[m](g)) &&
                  "none" !== (t.style || {}).display &&
                  !(function (t) {
                    var e = (t || {}).style || {},
                      n = !1;
                    if ("absolute" === e.position) {
                      var r = ye(e[K]),
                        i = ye(e[j]),
                        o = ye(e.top),
                        a = ye(e.left);
                      ((ge(r) && ge(o) && r + o < 0) || (ge(i) && ge(a) && i + a < 0)) && (n = !0);
                    }
                    return n;
                  })(t) &&
                  !me(t, st) &&
                  !vt[t.id || ""];
                return (t && (t[p] = e), e);
              }
              function Se(t) {
                return (function (t) {
                  return t && !t[k] && 8 !== t.nodeType && (3 !== t.nodeType || 0 !== (t[u] || "").trim()[c]) && Ee(t);
                })(t)
                  ? t
                  : e;
              }
              function Te(t) {
                t && (t[k] = 1);
              }
              function be(t) {
                t && !t[M] && (ne += t[M] = 1);
              }
              function xe(t, e) {
                var n,
                  r = [];
                if (t && pe(e) && 0 < (n = t[c]))
                  for (var i = 0; i < n; i++) {
                    var o = e(t[i]);
                    o && r.push(o);
                  }
                return r;
              }
              function Ie(t) {
                var e,
                  n,
                  r = 0;
                t &&
                  (t[s] && 1 === t[s][c] && (n = t[s][0]),
                  t[l] && 1 === t[l][c] && (e = t[l][0]),
                  n && e && n[u] === e[u] && (r = 1));
                return r;
              }
              function Ne(t) {
                var e = t.iter || 0;
                for (Ht = Ht <= 0 ? it : Ht; e < t.m[c] && 0 < Ht; ) {
                  var n = t.m[e];
                  if (n) {
                    var r = n[v],
                      i = r && Ee(r) && !me(r, dt),
                      o = i ? xe(n[l], Se) : [],
                      a = 0 < o[c],
                      u = a && Ie(n);
                    if (((te += 1), a && r && !u && i)) {
                      var f = t.t - _t;
                      ((r[nt] = f), (ee += 1), (r[L] = f), (r[w] = o) && pe(o.forEach) && o.forEach(be));
                    }
                    xe(n[s], Te);
                  }
                  ((t.iter = e += 1), (Ht -= 1));
                }
                return t.m[c] <= e;
              }
              function _e(t, e) {
                if (t && !t[rt]) {
                  ie += 1;
                  var n = t.tagName || "";
                  ((oe[n] = (oe[n] || 0) + 1), Pe(t, e || Ce(t, 1)));
                }
              }
              function Le(t) {
                for (var e, n = t.w, r = it; 0 < r && (e = n.nextNode()); ) {
                  r -= 1;
                  var i = e[d],
                    o = (i || {})[a];
                  "BODY" === o || lt[o] || (0 !== (e[u] || "").trim()[c] && ((ae += 1), Pe(i, Ce(e))));
                }
                return !e;
              }
              function we(t) {
                for (var e = it; t.iter < t.img[c] && 0 < e; ) {
                  var n,
                    r = t.img[t.iter],
                    i = We(r),
                    o = (i && Ce(i)) || Ce(r);
                  (i
                    ? ((i[nt] = o), (n = ke(i.querySelector('[aria-posinset="1"] img') || r) || o), (r = i))
                    : (n = ke(r) || o),
                    (ue += 1),
                    Pe(r, n),
                    (t.iter += 1),
                    (e -= 1));
                }
                return t.img[c] <= t.iter;
              }
              function Me(t) {
                for (var e, n = it; t.iter < t.vid[c] && 0 < n; ) {
                  var r,
                    i = t.vid[t.iter],
                    o = We(i),
                    a = (o && Ce(o)) || Ce(i);
                  if (o) {
                    o[nt] = a;
                    var u = o.querySelector('[aria-posinset="1"] img');
                    ((r = (u && ke(u)) || a), (i = o));
                  } else r = Ve((e = i).poster, e, 1) || Ve(e.currentSrc, e, 0) || Ve(e.src, e, 0) || a;
                  ((fe += 1), Pe(i, r), (t.iter += 1), (n -= 1));
                }
                return t.vid[c] <= t.iter;
              }
              function Oe(t) {
                for (var e = it, n = t.rt; t.iter < t.iel[c] && 0 < e; ) {
                  var r = t.iel[t.iter],
                    i = 0;
                  (n && (i = Ve(r.src, r, 1)), _e(r, i), (t.iter += 1), (e -= 1));
                }
                return t.iel[c] <= t.iter;
              }
              function Be(t) {
                var n = [],
                  i = 0,
                  o = 0,
                  a = $t,
                  e =
                    (mt.innerWidth || Et(xt[tt] || 0, xt[G] || 0, It[U] || 0, It[tt] || 0, It[G] || 0),
                    0 + (mt.innerHeight || Et(xt[et] || 0, xt[Z] || 0, It[z] || 0, It[et] || 0, It[Z] || 0))),
                  r = St(0 / ut),
                  u = Tt(e / ut);
                (Zt.slice(r, u).forEach(function (t) {
                  (t.elems || []).forEach(function (t) {
                    if ((t.lt in n || (n[t.lt] = {}), !(t.id in n[t.lt]))) {
                      var e = t.a;
                      e && ((n[t.lt][t.id] = t), (i += e));
                    }
                  });
                }),
                  bt && bt.body && (bt.body[S] = 1),
                  wt(n).forEach(function (t) {
                    wt(t).forEach(function (t) {
                      var e = 1 - o / i,
                        n = Et(t.lt, a),
                        r = t.a;
                      ((le += e * (n - a)),
                        (o += r),
                        (a = n),
                        (ce += 1),
                        t.e && ((t.e[S] = 1), (t.e[T] = r), (t.e[x] = i), (t.e[O] = n)),
                        (function (t, e) {
                          var n;
                          e.e && (e.e[I] = t);
                          for (; Xt <= 1 && Xt - 0.01 <= t; )
                            (Re(H + (n = (100 * Xt).toFixed(0)), e.lt),
                              ct[n] && f("Content", { target: e.e })("mark", H + n, _t + Tt(e.lt || 0)),
                              e.e && (e.e[N] = n),
                              (Xt += Yt));
                        })(o / i, t));
                    });
                  }),
                  ($t = t.t - _t),
                  Re("atfSpeedIndex", le),
                  Re("speedIndex", le),
                  Re(H + "0", zt),
                  De("CalcEnd"),
                  He(Y + "Blocks", ce),
                  He(Y + "Mut", te),
                  He(Y + "ValMut", ee),
                  He(Y + "MutEl", ne),
                  He(Y + "MutInter", re),
                  He(Y + "IntEl", ie),
                  ht.forEach(function (t) {
                    He(Y + "IntEl" + t, oe[t] || 0);
                  }),
                  He(Y + "Txt", ae),
                  He(Y + "Img", ue),
                  He(Y + "Vid", fe));
              }
              function Ce(t, e) {
                for (var n = e ? t : t[d], r = at + (e ? 1 : 0); n && 0 < r; ) {
                  if (n[nt] || 0 === n[nt]) return Et(n[nt], zt);
                  ((n = n[d]), (r -= 1));
                }
              }
              function Ve(t, e, n) {
                if (t) {
                  if (!t.indexOf("data:")) return Ce(e);
                  var r = Nt[h](t) || [];
                  if (0 < r[c]) return Et(Tt(r[n ? r[c] - 1 : 0].responseEnd || 0), zt);
                }
              }
              function ke(t) {
                return Ve(t.currentSrc, t, 1) || Ve(t.src, t, 1);
              }
              function We(t) {
                for (var e = 10, n = t[d], r = []; n && 0 < e; ) {
                  if (n[V] && 0 < n[V][c]) return (r.push(n[V][0]), n[V][0]);
                  if (((n[V] = r), n.classList && n.classList.contains("a-carousel-viewport"))) return (r.push(n), n);
                  ((n = n[d]), (e -= 1));
                }
                return null;
              }
              function Pe(t, e) {
                var n,
                  r = !e && 0 !== e;
                if (r || t[rt] || (n = !Ee(t))) return ((t[P] = r), void (t[A] = n));
                var i = t.getBoundingClientRect(),
                  o = {
                    x: i.left + (mt.scrollX || mt.pageXOffset),
                    y: i.top + (mt.scrollY || mt.pageYOffset),
                    w: i[j],
                    h: i[K],
                  },
                  a = i.width * i.height,
                  u = mt.innerWidth || Et(xt[tt] || 0, xt[G] || 0, It[U] || 0, It[tt] || 0, It[G] || 0) || i.right,
                  f = mt.innerHeight || Et(xt[et] || 0, xt[Z] || 0, It[z] || 0, It[et] || 0, It[Z] || 0) || i.bottom,
                  c = Ut++;
                if (
                  0 !==
                  (a = (function (t, e, n, r, i, o, a) {
                    if (e && n && ge(n.x) && ge(n.y) && ge(n.w) && ge(n.h) && 0 < n.w && 0 < n.h) {
                      var u = n.y + n.h,
                        f = n.x + n.w;
                      if (n.y < i || a < u || n.x < r || o < f) {
                        var c = Et(r, n.x),
                          l = Et(i, n.y),
                          s = c - n.x,
                          d = l - n.y,
                          v = yt(o, f) - c,
                          h = yt(a, u) - l,
                          m = Et(0, v),
                          g = Et(0, h),
                          p = Et(0, s),
                          y = Et(0, d);
                        ((e = m * g), t && e && (t[b] = { x: p, y: y, w: m, h: g }));
                      }
                    }
                    return e;
                  })(t, a, o, 0, 0, 0 + u, 0 + f))
                ) {
                  for (
                    var l = { e: t, lt: e, a: a, id: c }, s = St(o.y / ut), d = Tt((o.y + o.h) / ut), v = s;
                    v <= d;
                    v++
                  )
                    (v in Zt || (Zt[v] = { elems: [], lt: 0 }), Zt[v].elems.push(l));
                  ((t[rt] = c), (t[B] = { x: 0, y: 0, w: u, h: f }), (t[C] = o));
                }
              }
              function Ae(t, e) {
                Mt("mark", t, e);
              }
              function Re(t, e) {
                Ae(t, _t + Tt((Gt[t] = e) || 0));
              }
              function De(t) {
                Ae(X + t, Lt());
              }
              function He(t, e) {
                var n = r || f("Metrics", { producerId: "csa" });
                n && (r = n)("recordCounter", "CSA.Latency.Page.VisualLoad." + t, e);
              }
              function Xe() {
                Kt || (De("CalcStart"), pe(n) ? n(de) : Ot("getBuffers", de), (Kt = 1));
              }
              _t &&
                wt &&
                Nt[h] &&
                (Ot("registerListener", function () {
                  Qt && (clearTimeout(qt), (qt = gt(Xe, 2500)));
                }),
                f.once("$unload", function () {
                  ((jt = 1), Xe());
                }),
                f.once("$load", function () {
                  ((Qt = 1), Jt ? Xe() : (clearTimeout(qt), (qt = gt(Xe, 2500))));
                }),
                f.once("$timing:functional", function () {
                  ((Jt = 1), Qt ? Xe() : (clearTimeout(qt), (qt = gt(Xe, 2500))));
                }),
                Ot("replayModuleIsLive", function (t) {
                  n = t;
                }),
                f.register("SpeedIndex", {
                  getMarkers: function (t) {
                    t && t(JSON.parse(JSON.stringify(Gt)));
                  },
                }));
            });
            csa.plugin(function (e) {
              var n = !1,
                t = e("PageTiming"),
                i = e.global.PerformanceObserver,
                r = e.global.performance;
              function a() {
                return r.timing.navigationStart;
              }
              function o() {
                n ||
                  (function (r) {
                    var a = new i(function (e) {
                      var n = e.getEntries();
                      if (0 !== n.length) {
                        var t = n[n.length - 1];
                        (a.disconnect(), r({ startTime: t.startTime, renderTime: t.renderTime, loadTime: t.loadTime }));
                      }
                    });
                    try {
                      a.observe({ type: "largest-contentful-paint", buffered: !0 });
                    } catch (e) {}
                  })(function (e) {
                    e &&
                      ((n = !0),
                      t("mark", "largestContentfulPaint", Math.floor(e.startTime + a())),
                      e.renderTime && t("mark", "largestContentfulPaint.render", Math.floor(e.renderTime + a())),
                      e.loadTime && t("mark", "largestContentfulPaint.load", Math.floor(e.loadTime + a())));
                  });
              }
              i &&
                r &&
                r.timing &&
                (e.once("$unload", o), e.once("$load", o), e.register("LargestContentfulPaint", {}));
            });
            csa.plugin(function (r) {
              var e = r("Metrics", { producerId: "csa" }),
                n = r.global.PerformanceObserver;
              n &&
                ((n = new n(function (r) {
                  var t = r.getEntries();
                  if (0 === t.length || !t[0].processingStart || !t[0].startTime) return;
                  !(function (r) {
                    ((r = r || 0),
                      n.disconnect(),
                      0 <= r
                        ? e("recordMetric", "firstInputDelay", r)
                        : e("recordMetric", "firstInputDelay.invalid", 1));
                  })(t[0].processingStart - t[0].startTime);
                })),
                (function () {
                  try {
                    n.observe({ type: "first-input", buffered: !0 });
                  } catch (r) {}
                })());
            });
            csa.plugin(function (d) {
              var e = "Metrics",
                r = d.config["Events.SushiCsaCustomSourceGroup"],
                g = d.config,
                f = 0;
              if (!g["KillSwitch." + e]) {
                if ((new n({ producerId: "csa" }).recordMetric("baselineMetricEvent", 1), r))
                  new n({
                    logger: d("Events", {
                      producerId: "csa",
                      lob: g.lob || "0",
                      sushiSourceGroup: r,
                      copyBaseMetadata: !0,
                      copyEntities: !0,
                    }),
                  }).recordCounter("csa.customsg.baselineMetric", 1);
                (d.on("$beforePageTransition", function () {
                  f++;
                }),
                  d.register(e, {
                    instance: function (e) {
                      return new n(e || {});
                    },
                  }));
              }
              function n(o) {
                var c,
                  i,
                  e = o.producerId,
                  r = o.logger,
                  t = r || d("Events", { producerId: e, lob: g.lob || "0" }),
                  s = (o || {}).dimensions || {},
                  u = {},
                  n = -1;
                if (!e && !r) return d.error("Either a producer id or custom logger must be defined");
                function a() {
                  n !== f && ((c = d.UUID()), (i = d.UUID()), (u = {}), (n = f));
                }
                ((this.recordMetric = function (r, n) {
                  var e = o.logOptions || { ent: { page: ["pageType", "subPageType", "requestId"] } };
                  ((e.debugMetric = o.debugMetric),
                    a(),
                    t(
                      "log",
                      {
                        messageId: c,
                        schemaId: o.schemaId || "<ns>.Metric.4",
                        metrics: {},
                        dimensions: s,
                        __merge: function (e) {
                          e.metrics[r] = n;
                        },
                      },
                      e,
                    ));
                }),
                  (this.recordCounter = function (r, e) {
                    var n = o.logOptions || { ent: { page: ["pageType", "subPageType", "requestId"] } };
                    if ("string" != typeof r || "number" != typeof e || !isFinite(e))
                      return d.error("Invalid type given for counter name or counter value: " + r + "/" + e);
                    (a(), r in u || (u[r] = {}));
                    var c = u[r];
                    ("f" in c || (c.f = e),
                      (c.c = (c.c || 0) + 1),
                      (c.s = (c.s || 0) + e),
                      (c.l = e),
                      t(
                        "log",
                        {
                          messageId: i,
                          schemaId: o.schemaId || "<ns>.InternalCounters.3",
                          c: {},
                          __merge: function (e) {
                            (r in e.c || (e.c[r] = {}),
                              c.fs || ((c.fs = 1), (e.c[r].f = c.f)),
                              1 < c.c && ((e.c[r].s = c.s), (e.c[r].l = c.l), (e.c[r].c = c.c)));
                          },
                        },
                        n,
                      ));
                  }));
              }
            });
            csa.plugin(function (s) {
              var n = s.config,
                r = (s.global.performance || {}).timing,
                c = (r || {}).navigationStart || s.time(),
                g = 0;
              function e() {
                g += 1;
              }
              function i(i) {
                i = i || {};
                var o = s.UUID(),
                  t = g,
                  r = i.producerId,
                  e = i.logger,
                  a = e || s("Events", { producerId: r, lob: n.lob || "0" });
                if (!r && !e) return s.error("Either a producer id or custom logger must be defined");
                this.mark = function (e, r) {
                  var n = (void 0 === r ? s.time() : r) - c;
                  (t !== g && ((t = g), (o = s.UUID())),
                    a(
                      "log",
                      {
                        messageId: o,
                        schemaId: i.schemaId || "<ns>.Timer.1",
                        markers: {},
                        __merge: function (r) {
                          r.markers[e] = n;
                        },
                      },
                      i.logOptions,
                    ));
                };
              }
              r &&
                (e(),
                s.on("$beforePageTransition", e),
                s.register("Timers", {
                  instance: function (r) {
                    return new i(r || {});
                  },
                }));
            });
            csa.plugin(function (t) {
              var e = "takeRecords",
                i = "disconnect",
                n = "function",
                o = t("Metrics", { producerId: "csa" }),
                c = t("PageTiming"),
                a = t.global,
                u = t.timeout,
                r = t.on,
                f = a.PerformanceObserver,
                m = 0,
                l = !1,
                s = 0,
                d = a.performance,
                h = a.document,
                v = null,
                y = !1,
                g = t.blank;
              function p() {
                l ||
                  ((l = !0),
                  clearTimeout(v),
                  typeof f[e] === n && f[e](),
                  typeof f[i] === n && f[i](),
                  o("recordMetric", "documentCumulativeLayoutShift", m),
                  c("mark", "cumulativeLayoutShiftLastTimestamp", Math.floor(s + d.timing.navigationStart)));
              }
              f &&
                d &&
                d.timing &&
                h &&
                ((f = new f(function (t) {
                  v && clearTimeout(v);
                  (t.getEntries().forEach(function (t) {
                    t.hadRecentInput || ((m += t.value), s < t.startTime && (s = t.startTime));
                  }),
                    (v = u(p, 5e3)));
                })),
                (function () {
                  try {
                    (f.observe({ type: "layout-shift", buffered: !0 }), (v = u(p, 5e3)));
                  } catch (t) {}
                })(),
                (g = r(h, "click", function (t) {
                  y || ((y = !0), o("recordMetric", "documentCumulativeLayoutShiftToFirstInput", m), g());
                })),
                r(h, "visibilitychange", function () {
                  "hidden" === h.visibilityState && p();
                }),
                t.once("$unload", p));
            });
            csa.plugin(function (e) {
              var t,
                n = e.global,
                r = n.PerformanceObserver,
                c = e("Metrics", { producerId: "csa" }),
                o = 0,
                i = 0,
                a = -1,
                l = n.Math,
                f = l.max,
                u = l.ceil;
              if (r) {
                t = new r(function (e) {
                  e.getEntries().forEach(function (e) {
                    var t = e.duration;
                    ((o += t), (i += t), (a = f(t, a)));
                  });
                });
                try {
                  t.observe({ type: "longtask", buffered: !0 });
                } catch (e) {}
                t = new r(function (e) {
                  0 < e.getEntries().length && ((i = 0), (a = -1));
                });
                try {
                  t.observe({ type: "largest-contentful-paint", buffered: !0 });
                } catch (e) {}
                (e.on("$unload", g), e.on("$beforePageTransition", g));
              }
              function g() {
                (c("recordMetric", "totalBlockingTime", u(i || 0)),
                  c("recordMetric", "totalBlockingTimeInclLCP", u(o || 0)),
                  c("recordMetric", "maxBlockingTime", u(a || 0)),
                  (i = o = 0),
                  (a = -1));
              }
            });
            csa.plugin(function (n) {
              var e,
                t,
                r,
                c = "CacheDetection",
                i = "csa-ctoken-",
                f = "csa-pfetch-",
                o = "PreFetch",
                u = "device",
                a = "pre-fetch",
                s = "setUp",
                l = "string",
                d = "function",
                h = "length",
                g = "preFetchTime",
                p = "preFetchedRequestId",
                v = "attribution",
                I = "ERR",
                y = "INVALID",
                S = { ICDP: 1 },
                m = [y, "INPUT"].join("_"),
                R = [I, o, s].join("_"),
                k = n.store,
                w = n.error,
                b = n.warn,
                q = n.deleteStored,
                N = n.config,
                C = N[c + ".RequestID"],
                D = N[c + ".Callback"],
                E = 1,
                O = n.global,
                F = O.document || {},
                P = O.Date,
                T = P.now,
                j = n.time,
                J = n("Events"),
                U = n("Events", { producerId: "csa", lob: N.lob || "0" });
              function _() {
                return N["KillSwitch." + c];
              }
              function x(e) {
                return e && typeof e === l && S[e];
              }
              function A(e, t, n, r, c) {
                var i = G("session-id");
                (!(function (e, t, n, r, c, i) {
                  var o = { pageSource: "cache", requestId: e, cacheRequestId: c || C, cacheSource: n },
                    u = { page: o };
                  r && (o[v] = r);
                  i && (o[g] = i);
                  t && (u.session = { id: t });
                  J("setEntity", u);
                })(n, i, e, t, r, c),
                  (e !== u && e !== a) || U("log", { schemaId: "<ns>.CacheImpression.2" }, { ent: "all" }),
                  D && D(n, i, e));
              }
              function K() {
                return T() + 60 * E * 60 * 1e3;
              }
              function L(e, t) {
                return t && e && e.length <= t.length && t.slice(0, e.length) === e;
              }
              function V(e) {
                var t;
                try {
                  t = JSON.parse(e || "{}");
                } catch (e) {}
                return t;
              }
              function $(e, t) {
                var n = !1,
                  r = t || e.resultCallback;
                if (_()) return z(r, { e: !1, ks: !0 });
                var c = e || {},
                  i = (function (e, t) {
                    var n,
                      r = +e;
                    return (t || r || (r = j()), (n = new P(r)).getTime() ? n.toISOString() : t ? null : j("ISO"));
                  })(c[g], !1),
                  o = c[p],
                  u = c[v];
                if (
                  (function (e) {
                    return e && typeof e === l && 20 === e[h];
                  })(o) &&
                  x(u) &&
                  (function (e) {
                    return e && typeof e === l && 0 < e[h];
                  })(i)
                ) {
                  var a = f + o,
                    s = K();
                  try {
                    (k(a, JSON.stringify({ e: s, t: i, a: u })), (n = !0));
                  } catch (e) {}
                  n ? z(r, { e: !1, ks: !1 }) : B(w, r, I, R, e);
                } else B(b, r, y, m, e);
              }
              function z(e, t) {
                typeof e === d && e(t);
              }
              function B(e, t, n, r, c) {
                (e(r), z(t, { e: !0, ks: !1, c: r, l: n, d: c }));
              }
              function G(e) {
                try {
                  var t = F.cookie.match(RegExp("(^| )" + e + "=([^;]+)"));
                  return t && t[2].trim();
                } catch (e) {}
              }
              (n.register(o, (((e = {})[s] = $), e)),
                _() ||
                  ((t =
                    (function () {
                      var e = n.store(f + C);
                      if (e) {
                        var t = V(e);
                        if (t && x(t.a)) return { r: n.generateNewRequestId(), t: t.t, a: t.a, s: a };
                      }
                    })() ||
                    (function () {
                      var e = G("cdn-rid");
                      if (e) return { r: e, s: "cdn" };
                    })() ||
                    (function () {
                      if (n.store(i + C)) return { r: n.generateNewRequestId(), s: u };
                    })() ||
                    {}),
                  (r = t.r) && A(t.s, t.a, r, C, t.t),
                  k(i + C, K()),
                  n.once("$load", function () {
                    var r = P.now();
                    q(function (e, t) {
                      if (L(i, e)) return parseInt(t) < r;
                      if (L(f, e)) {
                        var n = V(t);
                        return !n || +n.e < r;
                      }
                      return !1;
                    });
                  })));
            });
            csa.plugin(function (a) {
              var i,
                e = "Content",
                t = "MutationObserver",
                f = "querySelectorAll",
                s = "matches",
                o = "getAttributeNames",
                r = "getAttribute",
                l = "dataset",
                c = "widget",
                u = "producerId",
                d = "slotId",
                n = "iSlotId",
                g = "$csaWidget",
                h = { ent: { element: 1, page: ["pageType", "subPageType", "requestId"] } },
                p = 5,
                m = a.config[e + ".BubbleUp.SearchDepth"] || 35,
                v = a.config[e + ".SearchPage"] || 0,
                y = "csaC",
                b = y + "Id",
                I = "logRender",
                E = {},
                w = a.config,
                C = w[e + ".Selectors"] || [],
                S = w[e + ".WhitelistedAttributes"] || { href: 1, class: 1 },
                O = w[e + ".EnableContentEntities"],
                A = w["KillSwitch.ContentRendered"],
                N = a.global,
                $ = N.document || {},
                k = $.documentElement,
                R = N.HTMLElement,
                U = {},
                j = [],
                D = 0,
                L = 0,
                M = 0,
                P = function (e, t, n, i) {
                  var r = this,
                    o = a("Events", { producerId: e || "csa", lob: w.lob || "0" });
                  ((t.type = t.type || c),
                    (r.id = t.id),
                    (r.l = o),
                    (r.e = t),
                    (r.el = n),
                    (r.rt = i),
                    (r.dlo = h),
                    (r.op = V(n, "csaOp")),
                    (r.log = function (e, t) {
                      o("log", e, t || h);
                    }),
                    (r.entities = function (e) {
                      e(t);
                    }),
                    t.id && o("setEntity", { element: t }));
                },
                T = P.prototype;
              function _(e) {
                var t = (e = e || {}).element,
                  n = e.target;
                return t
                  ? (function (e, t) {
                      var n;
                      n = e instanceof R ? Q(e) || z(t[u], e, Z, a.time()) : U[e.id] || G(t[u], 0, e, a.time());
                      return n;
                    })(t, e)
                  : n
                    ? x(n)
                    : a.error("No element or target argument provided.");
              }
              function x(e) {
                var t = (function (e) {
                  var t = null,
                    n = 0;
                  for (; e && n < m; ) {
                    if ((n++, B(e, b))) {
                      t = e;
                      break;
                    }
                    e = e.parentElement;
                  }
                  return t;
                })(e);
                return t ? Q(t) : new P("csa", { id: null }, null, a.time());
              }
              function B(e, t) {
                if (e && e.dataset) return e.dataset[t];
              }
              function W(e, t, n) {
                (j.push({ n: n, e: e, t: t }), X());
              }
              function q() {
                for (var e = a.time(), t = 0; 0 < j.length; ) {
                  var n = j.shift();
                  if ((E[n.n](n.e, n.t), ++t % 10 == 0 && a.time() - e > p)) break;
                }
                ((i = 0), j.length && X());
              }
              function X() {
                i = i || a.raf(q);
              }
              function Y(e) {
                return e && e.constructor && "NodeList" === e.constructor.name;
              }
              function H(e, t, n) {
                return { n: e, e: t, t: n };
              }
              function K(o, c, u) {
                f in o &&
                  s in o &&
                  C.forEach(function (e) {
                    for (var t = e.selector, n = o[s](t), i = o[f](t), r = i.length - 1; 0 <= r; r--)
                      j.unshift(H(u, { e: i[r], s: e }, c));
                    n && j.unshift(H(u, { e: o, s: e }, c));
                  });
              }
              function z(e, t, n, i) {
                var r = t && t[g];
                if (r) return ((r.el = t), a.emit("$content.reregister", { c: r, t: i }), (M += 1), (U[r.id] = r));
                var o = a.UUID(),
                  c = { id: o },
                  u = x(t);
                return (
                  (t[l][b] = o),
                  n(c, t),
                  u &&
                    u.id &&
                    ((c.parentId = u.id),
                    !c[d] &&
                      u.e &&
                      (u.e.slotId
                        ? (c.relatedSlotId = u.e.slotId)
                        : u.e.relatedSlotId && (c.relatedSlotId = u.e.relatedSlotId))),
                  G(e, t, c, i)
                );
              }
              function F(e) {
                return isNaN(e) ? null : Math.round(e);
              }
              function G(e, t, n, i) {
                (O && (n.schemaId = "<ns>.ContentEntity.2"), (n.id = n.id || a.UUID()));
                var r = new P(e, n, t, i);
                return (
                  (function (e) {
                    return !A && ((e.op || {}).hasOwnProperty(I) || v);
                  })(r) &&
                    (function (e, t) {
                      var n = {},
                        i = a.exec(F);
                      (e.el && (n = e.el.getBoundingClientRect()),
                        e.log({
                          schemaId: "<ns>.ContentRender.3",
                          timestamp: t,
                          width: i(n.width),
                          height: i(n.height),
                          positionX: i(n.left + N.pageXOffset),
                          positionY: i(n.top + N.pageYOffset),
                        }));
                    })(r, i),
                  a.emit("$content.register", r),
                  (D += 1),
                  (U[n.id] = r)
                );
              }
              function J() {
                var e = a("Metrics", { producerId: "csa" });
                if (e) {
                  var t = "recordCounter",
                    n = "CSA.Content.Base.Widgets.",
                    i = "Registered";
                  (e(t, n + "Instrumented", Object.keys(U).length),
                    e(t, n + i, D),
                    e(t, n + "De" + i, L),
                    e(t, n + "Re" + i, M),
                    (D = L = M = 0));
                }
              }
              function Q(e) {
                return U[(e[l] || {})[b]];
              }
              function V(n, i) {
                var r = {};
                return (
                  o in (n = n || {}) &&
                    Object.keys(n[l]).forEach(function (e) {
                      if (!e.indexOf(i) && i.length < e.length) {
                        var t = (function (e) {
                          return (e[0] || "").toLowerCase() + e.slice(1);
                        })(e.slice(i.length));
                        r[t] = n[l][e];
                      }
                    }),
                  r
                );
              }
              function Z(e, t) {
                o in t &&
                  ((function (e, t) {
                    var n = V(e, y);
                    Object.keys(n).forEach(function (e) {
                      t[e] = n[e];
                    });
                  })(t, e),
                  d in e && (e[n] = e[d]),
                  (function (t, n) {
                    (t[o]() || []).forEach(function (e) {
                      e in S && (n[e] = t[r](e));
                    });
                  })(t, e));
              }
              k &&
                $[f] &&
                N[t] &&
                (C.push({ selector: "*[data-csa-c-type]", entity: Z }),
                C.push({
                  selector: ".celwidget",
                  entity: function (e, t) {
                    (Z(e, t),
                      (e[d] = e[d] || t[r]("cel_widget_id") || t.id),
                      (e.legacyId = t[r]("cel_widget_id") || t.id),
                      (e.type = e.type || c));
                  },
                }),
                (E[1] = function (e, i) {
                  e.forEach(function (e) {
                    var t = e.addedNodes;
                    Y(t) &&
                      Array.prototype.forEach.call(t, function (e) {
                        j.unshift(H(2, e, i));
                      });
                    var n = e.removedNodes;
                    Y(n) &&
                      Array.prototype.forEach.call(n, function (e) {
                        j.unshift(H(5, e, i));
                      });
                  });
                }),
                (E[2] = function (e, t) {
                  K(e, t, 3);
                }),
                (E[3] = function (e, t) {
                  var n = e.e;
                  Q(n) || z("csa", n, e.s.entity, t);
                }),
                (E[4] = function () {
                  a.register(e, { instance: _ });
                }),
                (E[5] = function (e, t) {
                  K(e, t, 6);
                }),
                (E[6] = function (e, t) {
                  var n = e.e || {},
                    i = (n[l] || {})[b];
                  if (
                    i &&
                    i in U &&
                    (function (e) {
                      return !e || !e.isConnected;
                    })(n)
                  ) {
                    var r = U[i];
                    (!(function (e, t) {
                      (a.emit("$content.deregister", { c: e, t: t }), delete U[e.id], (e.el = null), (L += 1));
                    })(r, t),
                      (n[g] = r));
                  }
                }),
                new N[t](function (e) {
                  W(e, a.time(), 1);
                }).observe(k, { childList: !0, subtree: !0 }),
                W(k, a.time(), 2),
                W(null, a.time(), 4),
                a.on("$content.export", function (t) {
                  Object.keys(t).forEach(function (e) {
                    T[e] = t[e];
                  });
                }),
                a.on("$beforePageTransition", J),
                a.on("$beforeunload", J));
            });
            csa.plugin(function (r) {
              var o,
                t = "ContentImpressions",
                e = "KillSwitch.",
                i = "IntersectionObserver",
                s = "getAttribute",
                c = "dataset",
                a = "intersectionRatio",
                m = "impressionData",
                l = "observe",
                u = "unobserve",
                v = "csaCId",
                d = 1e3,
                f = r.global,
                n = r.config,
                g = n[e + t],
                h = n[e + t + ".ContentViews"],
                p = ((f.performance || {}).timing || {}).navigationStart || r.time(),
                I = {};
              function w(t) {
                t &&
                  ((t.v = 1),
                  (function (t) {
                    ((t.vt = r.time()),
                      t.el.log({
                        schemaId: "<ns>.ContentView.4",
                        timeToViewed: t.vt - t.el.rt,
                        pageFirstPaintToElementViewed: t.vt - p,
                      }));
                  })(t));
              }
              function T(t) {
                t &&
                  !t.it &&
                  ((t.i = r.time() - t.is > d),
                  (function (t) {
                    ((t.it = r.time()),
                      t.el.log({
                        schemaId: "<ns>.ContentImpressed.3",
                        timeToImpressed: t.it - t.el.rt,
                        pageFirstPaintToElementImpressed: t.it - p,
                      }));
                  })(t));
              }
              !g &&
                f[i] &&
                ((o = new f[i](
                  function (t) {
                    var n = r.time();
                    t.forEach(function (t) {
                      var e = (function (t) {
                        if (t && t[s]) return I[t[c][v]];
                      })(t.target);
                      if (e) {
                        r.emit("$content.intersection", { meta: e.el, t: n, e: t });
                        var i = t.intersectionRect;
                        (t.isIntersecting &&
                          0 < i.width &&
                          0 < i.height &&
                          (h || e.v || w(e),
                          0.5 <= t[a] &&
                            !e.is &&
                            ((e.is = n),
                            (e.timer = r.timeout(function () {
                              T(e);
                            }, d)))),
                          t[a] < 0.5 && !e.it && e.timer && (f.clearTimeout(e.timer), (e.is = 0), (e.timer = 0)));
                      }
                    });
                  },
                  { threshold: [0, 0.5, 0.99] },
                )),
                r.on("$content.register", function (t) {
                  var e = t.el;
                  e && ((I[t.id] = { el: t, v: 0, i: 0, is: 0, vt: 0, it: 0 }), o[l](e));
                }),
                r.on("$content.deregister", function (t) {
                  var e = (t || {}).c,
                    i = e.el;
                  if (e.id in I) {
                    var n = I[e.id];
                    (n && (f.clearTimeout(n.timer), (n.is = 0), (n.timer = 0)), (e[m] = n), delete I[e.id]);
                  }
                  i && o[u] && o[u](i);
                }),
                r.on("$content.reregister", function (t) {
                  var e = (t || {}).c,
                    i = e.el,
                    n = e[m];
                  (n && (I[e.id] = n), i && o[l](i));
                }));
            });
            csa.plugin(function (e) {
              e.config["KillSwitch.ContentLatency"] ||
                e.emit("$content.export", {
                  mark: function (t, n) {
                    var o = this;
                    (o.t || (o.t = e("Timers", { logger: o.l, schemaId: "<ns>.ContentLatency.4", logOptions: o.dlo })),
                      o.t("mark", t, n));
                  },
                });
            });
            csa.plugin(function (t) {
              function n(i, e, o) {
                var c = {};
                function r(t, n, e) {
                  (t in c &&
                    o <= n - c[t].s &&
                    ((function (n, e, i) {
                      if (!m) return;
                      E(function (t) {
                        (T(n, t), (t.w[n][e] = a((t.w[n][e] || 0) + i)));
                      });
                    })(t, i, n - c[t].d),
                    (c[t].d = n)),
                    e || delete c[t]);
                }
                ((this.update = function (t, n) {
                  n.isIntersecting && e <= n.intersectionRatio
                    ? (function (t, n) {
                        t in c || (c[t] = { s: n, d: n });
                      })(t, s())
                    : r(t, s());
                }),
                  (this.stopAll = function (t) {
                    var n = s();
                    for (var e in c) r(e, n, t);
                  }),
                  (this.reset = function () {
                    var t = s();
                    for (var n in c) ((c[n].s = t), (c[n].d = t));
                  }),
                  (this.stop = r));
              }
              var e = t.config,
                s = t.time,
                i = "ContentInteractionsSummary",
                o = e[i + ".FlushInterval"] || 5e3,
                c = e[i + ".FlushBackoff"] || 1.5,
                r = t.global,
                u = t.on,
                a = Math.floor,
                f = (r.document || {}).documentElement || {},
                l = ((r.performance || {}).timing || {}).responseStart || t.time(),
                d = o,
                p = 0,
                m = !0,
                v = t.UUID(),
                g = t("Events", { producerId: "csa", lob: e.lob || "0" }),
                w = new n("it0", 0, 0),
                I = new n("it50", 0.5, 1e3),
                h = new n("it100", 0.99, 0),
                b = {},
                A = {};
              function $() {
                (w.stopAll(!0), I.stopAll(!0), h.stopAll(!0), S());
              }
              function C() {
                (w.reset(), I.reset(), h.reset(), S());
              }
              function S() {
                d && (clearTimeout(p), (p = t.timeout($, d)), (d *= c));
              }
              function U(n) {
                E(function (t) {
                  (T(n, t), (t.w[n].mc = (t.w[n].mc || 0) + 1));
                });
              }
              function E(t) {
                g(
                  "log",
                  { messageId: v, schemaId: "<ns>.ContentInteractionsSummary.2", w: {}, __merge: t },
                  { ent: { page: ["requestId"] } },
                );
              }
              function T(t, n) {
                t in n.w || (n.w[t] = {});
              }
              e["KillSwitch." + i] ||
                (u("$content.intersection", function (t) {
                  if (t && t.meta && t.e) {
                    var n = t.meta.id;
                    if (n in b) {
                      var e = t.e.boundingClientRect || {};
                      e.width < 5 ||
                        e.height < 5 ||
                        (w.update(n, t.e),
                        I.update(n, t.e),
                        h.update(n, t.e),
                        !t.e.isIntersecting ||
                          n in A ||
                          ((A[n] = 1),
                          (function (n, e) {
                            E(function (t) {
                              (T(n, t), (t.w[n].ttfv = a(e)));
                            });
                          })(n, s() - l)));
                    }
                  }
                }),
                u("$content.register", function (t) {
                  (t.e || {}).slotId &&
                    ((b[t.id] = {}),
                    (function (e) {
                      E(function (t) {
                        var n = e.id;
                        (T(n, t), (t.w[n].sid = (e.e || {}).slotId), (t.w[n].cid = (e.e || {}).contentId));
                      });
                    })(t));
                }),
                u("$content.deregister", function (t) {
                  if (t) {
                    var n = t.c,
                      e = t.t;
                    if (n) {
                      var i = n.id;
                      (w.stop(i, e), I.stop(i, e), h.stop(i, e));
                    }
                  }
                }),
                u("$beforePageTransition", function () {
                  ($(), C(), (v = t.UUID()), S());
                }),
                u("$beforeunload", function () {
                  (w.stopAll(), I.stopAll(), h.stopAll(), (d = null));
                }),
                u(
                  "$visible",
                  function (t) {
                    (t ? C() : ($(), clearTimeout(p)), (m = t));
                  },
                  { buffered: 1 },
                ),
                u(
                  f,
                  "click",
                  function (t) {
                    for (var n = t.target, e = 25; n && 0 < e; ) {
                      var i = (n.dataset || {}).csaCId;
                      (i && U(i), (n = n.parentElement), (e -= 1));
                    }
                  },
                  { capture: !0, passive: !0 },
                ),
                S());
            });
            csa.plugin(function (d) {
              var t,
                o,
                i = "normal",
                u = "reload",
                e = "history",
                s = "new-tab",
                n = "ajax",
                r = 1,
                a = 2,
                c = "lastActive",
                l = "lastInteraction",
                f = "used",
                p = "csa-tabbed-browsing",
                y = "visibilityState",
                g = "page",
                v = "experience",
                b = "request",
                I = "initialized",
                m = { "back-memory-cache": 1, "tab-switch": 1, "history-navigation-page-cache": 1 },
                h = "TabbedBrowsing",
                T = "<ns>." + h + ".4",
                S = "visible",
                w = d.global,
                x = d.config,
                P = d("Events", { producerId: "csa", lob: x.lob || "0" }),
                q = w.location || {},
                $ = w.document,
                z = w.JSON,
                A = ((w.performance || {}).navigation || {}).type,
                C = d.store,
                E = d.on,
                O = d.storageSupport(),
                k = !1,
                R = {},
                j = {},
                B = {},
                J = {},
                K = {},
                M = !1,
                N = !1,
                D = !1,
                F = 0,
                G = 0,
                H = x["CSA.isRunningInsideMShop"];
              function L(i) {
                try {
                  return z.parse(C(p, void 0, { session: i }) || "{}") || {};
                } catch (i) {
                  d.error('Could not parse storage value for key "' + p + '": ' + i);
                }
                return {};
              }
              function Q(i, e) {
                C(p, z.stringify(e || {}), { session: i });
              }
              function U(i) {
                return "string" == typeof i;
              }
              function V(i, e) {
                return U(i) ? i : e;
              }
              function W(i) {
                var e = j.tid || i.id,
                  t = {},
                  n = R[c] || {};
                for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r]);
                ((!H && t.tid !== e) || ((t.tid = e), (t.pid = i.id), (t.ent = K)),
                  (J = { pid: i.id, tid: e, ent: K, lastInteraction: j[l] || {}, initialized: !0 }),
                  (B = { lastActive: t, lastInteraction: R[l] || {}, time: d.time(), initialized: !0 }));
              }
              function X(i) {
                var e = i === s,
                  t = $.referrer,
                  n = !(t && t.length) || !~t.indexOf(q.origin || ""),
                  r = e && !H && n,
                  a = { type: i, toTabId: J.tid, toPageId: J.pid, transitTime: d.time() - R.time || null };
                (r ||
                  (function (i, e, t) {
                    var n = i === u,
                      r = e || (H && (!(j[I] && j.ent) || D)) ? R[c] || {} : j,
                      a = R[l] || {},
                      d = j[l] || {},
                      o = e || (H && !(d.id && !d[f])) ? a : d;
                    ((t.fromTabId = r.tid), (t.fromPageId = r.pid));
                    var s = r.ent || {};
                    (U(s.rid) && (t.fromRequestId = s.rid || null),
                      U(s.ety) && (t.fromExperienceType = s.ety || null),
                      U(s.esty) && (t.fromExperienceSubType = s.esty || null),
                      n ||
                        !o.id ||
                        o[f] ||
                        ((t.interactionId = o.id || null),
                        o.sid && (t.interactionSlotId = o.sid || null),
                        a.id === o.id && (a[f] = !0),
                        d.id === o.id && (d[f] = !0)));
                  })(i, e, a),
                  P(
                    "log",
                    { navigation: a, schemaId: T },
                    { ent: { page: ["pageType", "subPageType", "requestId"] } },
                  ));
              }
              function Y(i) {
                ((D = (function (i) {
                  return i && i in m;
                })(i.transitionType)),
                  (function () {
                    ((R = L(!1)), (j = L(!0)));
                    var i = R[l],
                      e = j[l],
                      t = !1,
                      n = !1;
                    i &&
                      e &&
                      i.id === e.id &&
                      i[f] !== e[f] &&
                      ((t = !i[f]), (n = !e[f]), (e[f] = i[f] = !0), t && Q(!1, R), n && Q(!0, j));
                  })(),
                  W(i),
                  (M = !0),
                  (function (i) {
                    var e, t;
                    ((e = _()), (t = ei(!0)), (e || t) && W(i));
                  })(i),
                  (F = 1));
              }
              function Z() {
                k && !D
                  ? X(n)
                  : ((k = !0),
                    (function () {
                      if (A === a || D) X(e);
                      else if (A === r) X(j[I] ? u : s);
                      else {
                        X(j[I] || (H && R[I]) ? i : s);
                      }
                    })());
              }
              function _() {
                var i = t,
                  e = {};
                return (
                  !!(M && i && i.e && i.w) &&
                  (i.w("entities", function (i) {
                    e = i || {};
                  }),
                  (j[l] = {
                    id: i.e.messageId,
                    sid: e.slotId,
                    used: !(R[l] = { id: i.e.messageId, sid: e.slotId, used: !1 }),
                  }),
                  !(t = null))
                );
              }
              function ii(i, e) {
                var t = i || {},
                  n = e || {};
                return t.rid !== n.rid || t.ety !== n.ety || t.esty !== n.esty;
              }
              function ei(i) {
                var e = !1;
                if (((N = (H && i) || $[y] === S), M)) {
                  var t = R[c] || {};
                  e = (function (i, e, t, n) {
                    var r = !1,
                      a = i[c];
                    return (
                      N
                        ? (!a || a.tid !== J.tid || !a[S] || a.pid !== t || (!a.ent && n) || (n && ii(a.ent, n))) &&
                          ((i[c] = { visible: !0, pid: t, tid: e, ent: n }), (r = !0))
                        : !H && a && a.tid === J.tid && a[S] && (r = !(a[S] = !1)),
                      r
                    );
                  })(
                    R,
                    (D ? t.tid : null) || j.tid || t.tid || J.tid,
                    (D ? t.pid : null) || j.pid || t.pid || J.pid,
                    (D ? t.ent : null) || j.ent || t.ent || J.ent,
                  );
                }
                return e;
              }
              x["KillSwitch." + h] ||
                (O.local &&
                  O.session &&
                  z &&
                  $ &&
                  y in $ &&
                  ((o = (function () {
                    try {
                      return w.self !== w.top;
                    } catch (i) {
                      return !0;
                    }
                  })()),
                  E("$beforePageTransition", function () {
                    G = 1;
                  }),
                  E(
                    "$entities.set",
                    function (i) {
                      if (!o && i) {
                        var e = (i[b] || {}).id || (i[g] || {}).requestId,
                          t = (i[v] || {}).experienceType || (i[g] || {}).pageType,
                          n = (i[v] || {}).experienceSubType || (i[g] || {}).subPageType,
                          r = ii(K, { rid: e, ety: t, esty: n });
                        if (((K.rid = V(e, K.rid)), (K.ety = V(t, K.ety)), (K.esty = V(n, K.esty)), !G && r && F)) {
                          var a = R[c] || {};
                          (a.tid === j.tid && ((a.ent = K), Q(!1, R)), (j.ent = K), Q(!0, j));
                        }
                      }
                    },
                    { buffered: 1 },
                  ),
                  E(
                    "$pageChange",
                    function (i) {
                      o || (Y(i), Z(), Q(!1, B), Q(!0, J), (j = J), (R = B), (G = 0));
                    },
                    { buffered: 1 },
                  ),
                  E("$content.interaction", function (i) {
                    ((t = i), _() && (Q(!1, R), Q(!0, j)));
                  }),
                  E(
                    $,
                    "visibilitychange",
                    function () {
                      !o && ei() && Q(!1, R);
                    },
                    { capture: !1, passive: !0 },
                  )));
            });
            csa.plugin(function (c) {
              var e = c("Metrics", { producerId: "csa" });
              c.on(c.global, "pageshow", function (c) {
                c && c.persisted && e("recordMetric", "bfCache", 1);
              });
            });
            csa.plugin(function (n) {
              var e,
                t,
                i,
                o,
                r,
                a,
                c,
                u,
                f,
                s,
                l,
                d,
                p,
                g,
                m,
                v,
                h,
                b,
                y = "hasFocus",
                S = "$app.",
                T = "avail",
                $ = "client",
                w = "document",
                I = "inner",
                P = "offset",
                D = "screen",
                C = "scroll",
                E = "Width",
                F = "Height",
                O = T + E,
                q = T + F,
                x = $ + E,
                z = $ + F,
                H = I + E,
                K = I + F,
                M = P + E,
                W = P + F,
                X = C + E,
                Y = C + F,
                j = "up",
                k = "down",
                A = "none",
                B = 20,
                G = n.config,
                J = G["KillSwitch.PageInteractionsSummary"],
                L = n("Events", { producerId: "csa", lob: G.lob || "0" }),
                N = 1,
                Q = n.global || {},
                R = n.time,
                U = n.on,
                V = n.once,
                Z = Q[w] || {},
                _ = Q[D] || {},
                nn = Q.Math || {},
                en = nn.abs,
                tn = nn.max,
                on = nn.ceil,
                rn = ((Q.performance || {}).timing || {}).responseStart,
                an = function () {
                  return Z[y]();
                },
                cn = 1,
                un = 100,
                fn = {},
                sn = 1,
                ln = 0,
                dn = 0,
                pn = k,
                gn = A;
              function mn() {
                ((c = t = o = r = e),
                  (i = d = 0),
                  (a = u = f = s = l = 0),
                  (pn = k),
                  (gn = A),
                  (dn = ln = 0),
                  yn(),
                  bn());
              }
              function vn() {
                rn && !o && ((c = on((o = p) - rn)), (sn = 1));
              }
              function hn() {
                var n = m - i;
                ((!t || (t && t <= p)) && (n && (++a, (sn = dn = 1)), (i = m), n),
                  (function () {
                    if (((gn = d < m ? k : j), pn !== gn)) {
                      var n = en(m - d);
                      B < n && (++l, ln && !dn && ++a, (pn = gn), (sn = ln = 1), (d = m), (dn = 0));
                    } else ((dn = 0), (d = m));
                  })(),
                  (t = p + un));
              }
              function bn() {
                ((u = on(tn(u, m + b))), g && (f = on(tn(f, g + h))), (sn = 1));
              }
              function yn() {
                ((p = R()),
                  (g = en(Q.pageXOffset || 0)),
                  (m = tn(Q.pageYOffset || 0, 0)),
                  (v = 0 < g || 0 < m),
                  (h = Q[H] || 0),
                  (b = Q[K] || 0));
              }
              function Sn() {
                (yn(), vn(), hn(), bn());
              }
              function Tn() {
                if (r) {
                  var n = on(R() - r);
                  ((s += n), (r = e), (sn = 0 < n));
                }
              }
              function $n() {
                r = r || R();
              }
              function wn(n, e, t, i) {
                ((e[n + E] = on(t || 0)), (e[n + F] = on(i || 0)));
              }
              function In(n) {
                var e = n === fn,
                  t = an();
                if (t || sn) {
                  if (!e) {
                    if (!N) return;
                    ((N = 0), t && Tn());
                  }
                  var i = (function () {
                      var n = {},
                        e = Z.documentElement || {},
                        t = Z.body || {};
                      return (
                        wn("availableScreen", n, _[O], _[q]),
                        wn(
                          w,
                          n,
                          tn(t[X] || 0, t[M] || 0, e[x] || 0, e[X] || 0, e[M] || 0),
                          tn(t[Y] || 0, t[W] || 0, e[z] || 0, e[Y] || 0, e[W] || 0),
                        ),
                        wn(D, n, _.width, _.height),
                        wn("viewport", n, Q[H], Q[K]),
                        n
                      );
                    })(),
                    o = (function () {
                      var n = {
                        scrollCounts: a,
                        reachedDepth: u,
                        horizontalScrollDistance: f,
                        dwellTime: s,
                        vScrollDirChanges: l,
                      };
                      return ("number" == typeof c && (n.clientTimeToFirstScroll = c), n);
                    })();
                  (e ? (sn = 0) : (mn(), (rn = R()), t && (r = rn)),
                    L(
                      "log",
                      { activity: o, dimensions: i, schemaId: "<ns>.PageInteractionsSummary.3" },
                      { ent: { page: ["pageType", "subPageType", "requestId"] } },
                    ));
                }
              }
              function Pn() {
                (Tn(), In(fn));
              }
              function Dn(n, e) {
                return function () {
                  ((cn = e), n());
                };
              }
              function Cn() {
                ((an = function () {
                  return cn;
                }),
                  cn && !r && (r = R()));
              }
              "function" != typeof Z[y] ||
                J ||
                (mn(),
                v && vn(),
                U(Q, C, Sn, { passive: !0 }),
                U(Q, "blur", Pn),
                U(Q, "focus", Dn($n, 1)),
                V(S + "android", Cn),
                V(S + "ios", Cn),
                U(S + "pause", Dn(Pn, 0)),
                U(S + "resume", Dn($n, 1)),
                U(S + "resign", Dn(Pn, 0)),
                U(S + "active", Dn($n, 1)),
                an() && (r = rn || R()),
                V("$beforeunload", In),
                U("$beforeunload", In),
                U("$document.hidden", Pn),
                U("$beforePageTransition", In),
                U("$afterPageTransition", function () {
                  sn = N = 1;
                }));
            });
            csa.plugin(function (e) {
              var o,
                n,
                r = "Navigator",
                a = "<ns>." + r + ".5",
                i = e.global,
                c = e.config,
                d = i.navigator || {},
                t = d.connection || {},
                l = i.Math.round,
                u = e("Events", { producerId: "csa", lob: c.lob || "0" });
              function v() {
                ((o = {
                  network: {
                    downlink: void 0,
                    downlinkMax: void 0,
                    rtt: void 0,
                    type: void 0,
                    effectiveType: void 0,
                    saveData: void 0,
                  },
                  language: void 0,
                  doNotTrack: void 0,
                  hardwareConcurrency: void 0,
                  deviceMemory: void 0,
                  cookieEnabled: void 0,
                  webdriver: void 0,
                }),
                  w(),
                  (o.language = d.language || null),
                  (o.doNotTrack = (function () {
                    switch (d.doNotTrack) {
                      case "1":
                        return "enabled";
                      case "0":
                        return "disabled";
                      case "unspecified":
                        return d.doNotTrack;
                      default:
                        return null;
                    }
                  })()),
                  (o.hardwareConcurrency = "hardwareConcurrency" in d ? l(d.hardwareConcurrency || 0) : null),
                  (o.deviceMemory = "deviceMemory" in d ? l(d.deviceMemory || 0) : null),
                  (o.cookieEnabled = "cookieEnabled" in d ? d.cookieEnabled : null),
                  (o.webdriver = "webdriver" in d ? d.webdriver : null));
              }
              function k() {
                u(
                  "log",
                  {
                    network:
                      ((n = {}),
                      Object.keys(o.network).forEach(function (e) {
                        n[e] = o.network[e] + "";
                      }),
                      n),
                    language: o.language,
                    doNotTrack: o.doNotTrack,
                    hardwareConcurrency: o.hardwareConcurrency,
                    deviceMemory: o.deviceMemory,
                    cookieEnabled: o.cookieEnabled,
                    webdriver: o.webdriver,
                    schemaId: a,
                  },
                  { ent: { page: ["pageType", "subPageType", "requestId"] } },
                );
              }
              function w() {
                !(function (n) {
                  Object.keys(o.network).forEach(function (e) {
                    o.network[e] = n[e];
                  });
                })({
                  downlink: "downlink" in t ? l(t.downlink || 0) : null,
                  downlinkMax: "downlinkMax" in t ? l(t.downlinkMax || 0) : null,
                  rtt: "rtt" in t ? (t.rtt || 0).toFixed() : null,
                  type: t.type || null,
                  effectiveType: t.effectiveType || null,
                  saveData: "saveData" in t ? t.saveData : null,
                });
              }
              function f() {
                (w(), k());
              }
              function y() {
                (v(), k());
              }
              c["KillSwitch." + r] || (v(), k(), e.on("$afterPageTransition", y), e.on(t, "change", f));
            });
            csa.plugin(function (a) {
              a.emit("$csa.loaded");
            });
            (function (p, n, w, l) {
              var r = { EX: {} };
              (function () {
                return "object" === typeof performance && "function" === typeof performance.now
                  ? function () {
                      return performance.now();
                    }
                  : "function" === typeof Date.now
                    ? Date.now
                    : function () {
                        return new Date().getTime();
                      };
              })();
              var u = function (a, b, c, e) {
                  var f = {};
                  try {
                    if (5 <= e) return {};
                    b = b || n;
                    c = c || a;
                    for (var k, g = Object.keys(c), d, h = 0; h < g.length; h++)
                      ((d = g[h]),
                        (k = c[d]),
                        "object" !== typeof k || Array.isArray(k)
                          ? (f[d] = b[d])
                          : (f[d] = null == b[d] ? null : u(a, b[d], c[d], e + 1)));
                  } catch (l) {
                    m(l, "ex in collecting-");
                  }
                  return f;
                },
                v = function (a, b) {
                  var c = "";
                  try {
                    var e = b.toString(),
                      e = e.replace(/\n/g, "").replace(/\s\s+/g, " ");
                    c =
                      e === "function " + a + "() { [native code] }" || e === "function " + a + "() { [native code]}"
                        ? "0x6"
                        : (e = e.replace(/function/, "fx").replace(/\[native code\]/, "nc"));
                  } catch (f) {
                    c = "ex";
                  }
                  return c;
                },
                s = function (a, b, c, e) {
                  var f = [];
                  try {
                    if (5 <= e) return [];
                    c = c || b;
                    for (var k = Object.keys(c), g = 0; g < k.length; g++) {
                      var d = k[g];
                      if ("object" != typeof c[d] || null == c[d] || Array.isArray(c[d]))
                        switch (!0) {
                          case !0 === a[d]:
                            f[g] = 1;
                            break;
                          case !1 === a[d]:
                            f[g] = 0;
                            break;
                          case 0 === a[d]:
                            f[g] = 0;
                            break;
                          case "function" === typeof a[d]:
                            f[g] = v(d, a[d]);
                            break;
                          case null != a[d]:
                            f[g] = a[d];
                            break;
                          default:
                            f[g] = null;
                        }
                      else f[g] = null != a[d] ? s(a[d], b, c[d], e + 1) : s({}, b, c[d], e + 1);
                    }
                  } catch (h) {
                    m(h, "ex in compression-");
                  }
                  return f;
                },
                q = function (a, b) {
                  try {
                    p.ue && p.ue.event && p.ue.event(x(b, a), "a9_tq", "a9_tq.FraudMetrics.3");
                  } catch (c) {
                    m(c, "ex in logging-");
                  }
                },
                h = function (a, b, c) {
                  try {
                    q(b + a.stack, c);
                  } catch (e) {
                    m(e, "ex in logging-");
                  }
                },
                m = function (a, b) {
                  p.ueLogError && p.ueLogError(a, { logLevel: "ERROR", attribution: "A9TQForensics", message: b });
                },
                y = function () {
                  try {
                    if (l && l.userAgent && /chrome/i.test(l.userAgent) && l.userAgentData && l.userAgentData.brands)
                      for (var a = l.userAgentData.brands, b = 0; b < a.length; b++)
                        if (a[b].brand && /google/i.test(a[b].brand)) return !0;
                    return !1;
                  } catch (c) {
                    h(c, "ex in identifying Chrome Browser ", "103");
                  }
                },
                t = function (a) {
                  try {
                    a && !a.stack && (a.stack = a.toString());
                  } catch (b) {
                    h(b, "ex in populating stack trace ", "100");
                  }
                },
                x = function (a, b) {
                  try {
                    var c = { vfrd: a };
                    "object" === typeof b
                      ? (c.info = JSON.stringify(b, function (a, b) {
                          return "function" === typeof b ? v(a, b) : b;
                        }))
                      : "string" === typeof b && (c.info = b);
                    return { server: window.location.hostname, fmp: c };
                  } catch (e) {
                    return (
                      m(e, "ex in constructing pixel - "),
                      { server: window.location.hostname, fmp: { vfrd: "0" } }
                    );
                  }
                };
              (function (a, b) {
                try {
                  try {
                    try {
                      ((r.mimeTypesLength = n.navigator.mimeTypes.length),
                        (r.pluginsLength = n.navigator.plugins.length));
                    } catch (c) {
                      h(c, "ex in basic props ", "30");
                    }
                    n.a9tqDerivedFeatures = r;
                  } catch (e) {
                    h(e, "ex in evaluation-", "30");
                  }
                  var f = u(a, b, null, 0);
                  try {
                    ((n.a9tqDerivedFeatures = null), delete n.a9tqDerivedFeatures);
                  } catch (k) {
                    h(k, "ex in deleting derivedFeatures-", "30");
                  }
                  var g = s(f, a, null, 0);
                  q(g, "2");
                } catch (d) {
                  m(d, "ex in full attribute flow-");
                }
              })(
                {
                  window: {
                    innerHeight: 0,
                    innerWidth: 0,
                    outerWidth: 0,
                    outerHeight: 0,
                    length: 0,
                    callPhantom: "",
                    __phantomas: "",
                    PhantomEmitter: "",
                    _phantom: "",
                    _WEBDRIVER_ELEM_CACHE: "",
                    domAutomationController: "",
                    domAutomation: "",
                    spawn: "",
                    emit: "",
                    Buffer: "",
                    TEMPORARY: "",
                    external: "",
                    Components: {
                      classes: "",
                      wdIStatus: "",
                      wdIMouse: "",
                      wdICoordinate: "",
                      interfaces: "",
                      interface: { nsICommandProcessor: "" },
                    },
                    netscape: { security: { privilegemanager: "" } },
                    isExternalUrlSafeForNavigation: 0,
                    opera: { _browserjsran: "" },
                    onabsolutedeviceorientation: "",
                    onstorage: "",
                    chrome: "",
                    clearInterval: "",
                    clearTimeout: "",
                    eval: "",
                    alert: "",
                    prompt: "",
                    scroll: "",
                    onhelp: "",
                    maxConnectionsPerServer: "",
                    opr: "",
                    devicePixelRatio: "",
                    webdriver: "",
                    InstallTrigger: "",
                    safari: "",
                    ontouchstart: "",
                  },
                  screen: {
                    availHeight: 0,
                    availWidth: 0,
                    width: 0,
                    height: 0,
                    colorDepth: 0,
                    pixelDepth: 0,
                    orientation: { angle: 0, onchange: 0 },
                  },
                  navigator: {
                    appCodeName: "",
                    appName: "",
                    appVersion: "",
                    deviceMemory: 0,
                    doNotTrack: 0,
                    hardwareConcurrency: 0,
                    language: "",
                    maxTouchPoints: 0,
                    product: "",
                    productSub: 0,
                    vendor: "",
                    vendorSub: "",
                    userAgent: "",
                    languages: [],
                    platform: "",
                    webdriver: 0,
                    msLaunchUri: "",
                    permissions: "",
                    oscpu: "",
                    msMaxTouchPoints: "",
                    userAgentData: "",
                  },
                  document: {
                    id: "",
                    height: "",
                    width: "",
                    except: "",
                    style: {
                      position: "",
                      top: "",
                      left: "",
                      visibility: "",
                      opacity: "",
                      hidden: "",
                      webkitHidden: "",
                      msHidden: "",
                      mozHidden: "",
                    },
                    referer: "",
                    webdriver: "",
                  },
                  a9tqDerivedFeatures: { mimeTypesLength: "", pluginsLength: "", EX: { a: [], b: [] } },
                  history: { length: "" },
                },
                n,
              );
              (function () {
                var a = [];
                try {
                  var b = Date.now(),
                    c = "function" === typeof w.hasPrivateToken ? 1 : 0,
                    e = "www.amazon.com" === n.location.hostname ? 1 : 0,
                    f = "function" === typeof AbortController ? 1 : 0,
                    k = y() ? 1 : 0;
                  if (k && c && e && f) {
                    var g = atob("aHR0cHM6Ly93d3cuYW1hem9uLmNvbS90dC9p"),
                      d = new AbortController(),
                      l = setTimeout(function () {
                        try {
                          d.abort();
                        } catch (a) {
                          (t(a), h(a, "ex in set PST timeout ", "100"));
                        }
                      }, 2e3);
                    fetch(g, { privateToken: { version: 1, operation: "token-request" }, signal: d.signal })
                      .then(function (c) {
                        a = [1, Date.now() - b, c.status];
                        q(a, "101");
                      })
                      ["catch"](function (a) {
                        t(a);
                        h(a, "ex in PST Issuance API call ", "100");
                      })
                      ["finally"](function () {
                        clearTimeout(l);
                      });
                  } else ((a = [0, Date.now() - b, k, c, e, f]), q(a, "101"));
                } catch (m) {
                  (t(m), h(m, "ex in PST issuance flow ", "102"));
                }
              })();
            })(ue_csm, window, document, navigator);

            ue.exec(function (d, c) {
              function g(e, c) {
                e && ue.tag(e + c);
                return !!e;
              }
              function n() {
                for (
                  var e = RegExp(
                      "^https://(.*\.(images|ssl-images|media)-amazon\.com|" + c.location.hostname + ")/images/",
                      "i",
                    ),
                    d = {},
                    h = 0,
                    k = c.performance.getEntriesByType("resource"),
                    l = !1,
                    b,
                    a,
                    m,
                    f = 0;
                  f < k.length;
                  f++
                )
                  if (
                    ((a = k[f]),
                    0 < a.transferSize &&
                      a.transferSize >= a.encodedBodySize &&
                      (b = e.exec(String(a.name))) &&
                      3 === b.length)
                  ) {
                    a: {
                      b = a.serverTiming || [];
                      for (a = 0; a < b.length; a++)
                        if ("provider" === b[a].name) {
                          b = b[a].description;
                          break a;
                        }
                      b = void 0;
                    }
                    b && (l || (l = g(b, "_cdn_fr")), (a = d[b] = (d[b] || 0) + 1), a > h && ((m = b), (h = a)));
                  }
                g(m, "_cdn_mp");
              }
              d.ue && "function" === typeof d.ue.tag && c.performance && c.location && n();
            }, "cdnTagging")(ue_csm, window);
          }
          ((n) => {
            var A,
              E = 1e6,
              M = (n.Symbol || {}).iterator;
            n.RXVM = function (r) {
              (r = r || {}).mi && (E = r.mi);
              var i = n([
                  1,
                  function (n) {
                    n.u.t[m(n)] = h(n);
                  },
                  2,
                  function (n) {
                    n.i[0].t[m(n)] = h(n);
                  },
                  3,
                  h,
                  4,
                  function (n) {
                    var r = h(n),
                      t = h(n),
                      n = h(n);
                    w(n) && (n[t] = r);
                  },
                  5,
                  function (n) {
                    var r = h(n),
                      t = m(n);
                    w(r) && "function" == typeof r[M] && (n.u.t[t] = r[M]());
                  },
                  6,
                  function (n) {
                    var r = n.u.t[m(n)],
                      r = r && r.next ? r.next() : A,
                      t = m(n),
                      u = x(n);
                    w(r) && !1 === r.done ? (n.u.t[t] = r.value) : d(n, u);
                  },
                  10,
                  function (n) {
                    n.u.o.push(h(n));
                  },
                  11,
                  function (n) {
                    n.u.o.push(n.v);
                  },
                  12,
                  function (n) {
                    for (var r = F(n); 0 < r--; ) n.l.push(S(n));
                  },
                  30,
                  function (n) {
                    return !h(n);
                  },
                  42,
                  function () {},
                  43,
                  function (n) {
                    for (var r = F(n); 0 < r--; ) n.u.t.push(n._.pop());
                  },
                  45,
                  a(!0),
                  44,
                  a(!1),
                  48,
                  v(0, y),
                  49,
                  v(1, y),
                  50,
                  v(2, y),
                  51,
                  v(-1, y),
                  52,
                  v(0, _),
                  53,
                  v(1, _),
                  54,
                  v(2, _),
                  55,
                  v(-1, _),
                  58,
                  function (n) {
                    d(n, x(n));
                  },
                  59,
                  s(!0),
                  60,
                  s(!1),
                  64,
                  function (n) {
                    var r = x(n),
                      t = p(n, n.u.h);
                    return (d(n, r), t);
                  },
                  65,
                  function (n) {
                    var r = F(n),
                      t = x(n),
                      u = p(n, n.u.h);
                    ((n.u.t[r] = u), d(n, t));
                  },
                ]),
                o = {
                  40: function (n, r) {
                    return "__rx_cls" in n ? n.__rx_cls === r.__rx_ref : n instanceof r;
                  },
                },
                t =
                  ((o[20] = Math.pow),
                  l(16, "+"),
                  l(17, "-"),
                  l(18, "*"),
                  l(19, "/"),
                  l(21, "%"),
                  l(22, "&"),
                  l(23, "|"),
                  l(24, "^"),
                  l(25, "<<"),
                  l(26, ">>"),
                  l(27, ">>>"),
                  l(28, "&&"),
                  l(29, "||"),
                  l(31, ">"),
                  l(33, ">="),
                  l(32, "<"),
                  l(34, "<="),
                  l(35, "=="),
                  l(36, "==="),
                  l(37, "!="),
                  l(38, "!=="),
                  l(39, " in "),
                  n([10, A, 11, null, 14, !0, 15, !1])),
                u = n([
                  1,
                  function (n) {
                    return n.v;
                  },
                  17,
                  F,
                  18,
                  function (n) {
                    n = m(n) | (m(n) << 8) | (m(n) << 16) | (m(n) << 24);
                    return (n = 2147483647 < n ? -4294967295 + n - 1 : n);
                  },
                  19,
                  function (n) {
                    for (var r = [], t = 0; t < 4; t++) r.push(m(n));
                    return new Float32Array(new Uint8Array(r).buffer)[0];
                  },
                  12,
                  S,
                  13,
                  function (n) {
                    return n.l[F(n)];
                  },
                  20,
                  function () {
                    return [];
                  },
                  21,
                  function (n) {
                    for (var r = F(n), t = []; 0 < r--; ) t.unshift(h(n));
                    return t;
                  },
                  24,
                  function (n) {
                    for (var r, t, u, i = F(n), o = []; 0 < i--; )
                      o.unshift(
                        ((u = t = void 0),
                        (r = m((r = n))),
                        (t = 128 & r ? -1 : 1),
                        (u = (r >> 3) & 15),
                        (r &= 7),
                        15 != u ? (0 == u ? (r / 8) * t * 0.015625 : t * (1 + r / 8) * Math.pow(2, u - 7)) : NaN),
                      );
                    return o;
                  },
                  22,
                  function () {
                    return {};
                  },
                  23,
                  function (n) {
                    for (var r = F(n) / 2, t = {}; 0 < r--; ) {
                      var u = h(n);
                      t[h(n)] = u;
                    }
                    return t;
                  },
                  32,
                  function (n) {
                    return n.u.t[F(n)];
                  },
                  33,
                  function (n) {
                    return n.i[0].t[F(n)];
                  },
                  48,
                  function (n) {
                    var r = h(n),
                      n = h(n);
                    return w(n) ? ("function" == typeof (r = n[r]) && (r.__rx_this = n), r) : n;
                  },
                  50,
                  function (n) {
                    return n.u.o.pop();
                  },
                  52,
                  function (n) {
                    return typeof h(n);
                  },
                ]);
              function f(n) {
                for (; 0 < n.p-- && (r = n).u && r.u.h < r.m.length; ) {
                  r = m(n);
                  n.v = e(r, n);
                }
                var r;
              }
              function e(n, r) {
                var t, u;
                return n in o
                  ? ((t = h(r)), (u = h(r)), o[n](u, t))
                  : n in i
                    ? i[n](r)
                    : void k("e2:" + n + ":" + r.u.h);
              }
              function c(n, r) {
                return { F: n, h: n, t: [], o: [], S: r };
              }
              function n(n) {
                for (var r = {}, t = 0; t < n.length; t += 2) r[n[t]] = n[t + 1];
                return r;
              }
              function a(i) {
                return function (n) {
                  var r = i ? h(n) : A,
                    t = n.i.pop(),
                    u = A,
                    u = t.S ? t.t[0] : r;
                  return ((n._ = []), (n.u = n.i[n.i.length - 1]), b(n, n.u.F), u);
                };
              }
              function v(u, i) {
                return function (n) {
                  var r = h(n),
                    t = u;
                  for (-1 === u && (t = F(n)); 0 < t--; ) n._.push(h(n));
                  if (((n.v = A), r)) return i(r, n);
                };
              }
              function s(u) {
                return function (n) {
                  var r = h(n),
                    t = x(n);
                  ((u && r) || (!r && !u)) && d(n, t);
                };
              }
              function l(u, i) {
                o[u] = function (n, r) {
                  var t = Function("a", "b", "return a" + i + "b");
                  return (o[u] = t)(n, r);
                };
              }
              function _(n, r) {
                var t;
                if (n.__rx_ref && n.g === r) {
                  var u = c(n.__rx_ref, !0);
                  (u.t.push({ __rx_cls: n.__rx_ref }), r.i.push(u), (r.u = u), b(r, u.F));
                } else if ("function" == typeof n) {
                  ((u = r._.reverse().splice(0)), (u = Function.prototype.bind.apply(n, [null].concat(u))));
                  try {
                    ((t = new u()), (r._ = []));
                  } catch (n) {}
                } else k("e5:" + n + ":" + r.u.h);
                return t;
              }
              function y(n, r) {
                var t;
                if (n.__rx_ref && n.g === r) {
                  var u = c(n.__rx_ref);
                  (u.t.push(n.__rx_this || this), r.i.push(u), (r.u = u), b(r, u.F));
                } else if ("function" == typeof n) {
                  u = r._.reverse().splice(0);
                  try {
                    ((t = n.apply(n.__rx_this || this, u)), (r._ = []));
                  } catch (n) {}
                } else k("e4:" + n);
                return t;
              }
              function h(n) {
                var r = m(n);
                return 0 < (128 & r) ? e(127 & r, n) : r in t ? t[r] : r in u ? u[r](n) : void k("e3:" + r);
              }
              function p(t, u) {
                var n = g(function () {
                  var n = c(u),
                    r = n.t;
                  return (
                    r.push(this),
                    r.push.apply(r, arguments),
                    t.i.push(n),
                    (t.u = n),
                    (t.p = E),
                    b(t, n.F),
                    f(t),
                    t.v
                  );
                });
                return ((n.__rx_ref = u), (n.g = t), n);
              }
              function w(n) {
                if (n !== A && null !== n) return 1;
                r.unsafe && k("e10" + n);
              }
              function b(n, r) {
                n.k = (r % 127) + 37;
              }
              function d(n, r) {
                n.u.h += r;
              }
              function m(n) {
                return n.m[n.u.h++] ^ n.k;
              }
              function x(n) {
                n = m(n) | (m(n) << 8);
                return (n = 32767 < n ? -65535 + n - 1 : n);
              }
              function F(n) {
                for (
                  var r, t = 0, u = 0, i = n.u.h, o = n.m, f = n.k;
                  (t += (127 & (r = o[i + u] ^ f)) * (1 << (7 * u))), (u += 1), 0 < (128 & r);
                );
                return ((n.u.h += u), t);
              }
              function S(n) {
                for (var r = F(n), t = ""; 0 < r--; ) t += String.fromCharCode(m(n));
                return t;
              }
              function g(n) {
                return function () {
                  try {
                    return n.apply(this, arguments);
                  } catch (n) {
                    k(n);
                  }
                };
              }
              function k(n) {
                if (r.unsafe) throw Error(n);
              }
              this.execute = g(function (n, r) {
                var t, u;
                return 82 !== n[0] && 88 !== n[1]
                  ? k("e1")
                  : ((n = n),
                    (t = 3),
                    ((u = c(0)).t[0] = (r = r) || {}),
                    (u.h = t),
                    b((r = { m: n, p: E, v: 0, i: [u], u: u, _: [], l: [], k: 0 }), 0),
                    f((t = r)),
                    t);
              });
            };
          })("undefined" == typeof window ? global : window);
          ((n) => {
            for (
              var t = "undefined" == typeof window ? n : window,
                i = 0,
                n = "addEventListener",
                e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
                u = [],
                r = t.rx || {},
                o = r.c || {},
                f = o.rxp || "/rd/uedata",
                c = o.fi || 1e3,
                a = 1.5,
                d = 1e4,
                x = {},
                w = {},
                m = {},
                v = {},
                h = 0,
                l = 0;
              l < e.length;
              l++
            )
              u[e[l]] = l;
            function p(n, r) {
              return function () {
                try {
                  return n.apply(this, arguments);
                } catch (n) {
                  s(n.message || n, n);
                }
              };
            }
            function s(n, r) {
              if (
                ((m[i] = [(n = ("" + (n || "")).substring(0, 100)).length].concat(new TextEncoder().encode(n))),
                o.DEBUG)
              )
                throw r || n;
              b();
            }
            function y(n, r) {
              ((r = p(r)), n in w || (w[n] = []), w[n].push(r), n in x && r());
            }
            function g(n, r) {
              n in x ||
                ((x[n] = r),
                (w[n] || []).forEach(function (n) {
                  n(r);
                }));
            }
            function A(n) {
              for (var r = 0, t = 0, i = "", o = 0; o < n.length; o += 1)
                for (t += 8, r = (r << 8) | n[o]; 6 <= t; ) ((i += e[r >> (t - 6)]), (r &= 255 >> (8 - (t -= 6))));
              return (0 < t && (i += e[r << (6 - t)]), i);
            }
            function U(n) {
              for (var r = 0, t = 0, i = [], o = 0; o < n.length && "=" !== n[o]; o += 1)
                for (t += 6, r = (r << 6) | u[n[o]]; 8 <= t; ) (i.push(r >> (t - 8)), (r &= 255 >> (8 - (t -= 8))));
              return new Uint8Array(i);
            }
            function b() {
              !h && 0 < c && (setTimeout(p(I), c), (c = Math.min(d, c * a)), (h = 1));
            }
            function E(r) {
              let t = [];
              return (
                Object.keys(r).forEach((n) => {
                  (t.push(parseInt(n)), (t = t.concat(r[n])));
                }),
                t
              );
            }
            function I() {
              h = 0;
              var n = E(m);
              (0 < n.length && rx.ep(n, T), (m = {}));
            }
            function T(n) {
              n = A(new Uint8Array(n));
              n = f + "?rid=" + rx.rid + "&sid=" + rx.sid + "&rx=" + n;
              new Image().src = n;
            }
            function j(n) {
              g("load", n);
            }
            function L(n) {
              (j(n), g("unload", n), I());
            }
            (((t.rx = r).err = s),
              (r.r = p(y)),
              (r.e = p(g)),
              (r.exec = p),
              (r.p = p(function (n, r) {
                (g("rxm:" + n, r), (m[255 & n] = r), b());
              })),
              (r.pc = p(function (n, r) {
                ((v[255 & n] = r),
                  (n = E(v)),
                  (r = rx.ep4(n, rx.fnpb)),
                  (n = A([rx.fnpv].concat(rx.fnpb, r))),
                  (document.cookie = "rxc=" + n + "; max-age=86400; path=/"));
              })),
              (r.ex64 = p(function (r, n) {
                y(n || "init", function () {
                  var n;
                  t.RXVM && ((n = U(r)), t.$RX || (t.$RX = new t.RXVM({ mi: o.mi })), $RX.execute(n, t));
                });
              })),
              (r.e64 = p(A)),
              (r.d64 = p(U)),
              (r.erc4 = p(function () {
                var n = rx.fnpb,
                  r = rx.fnpv,
                  t = rx.ep4(E(m), n);
                return A(new Uint8Array([r].concat(n, t)));
              })),
              g("init", {}),
              "complete" === document.readyState
                ? j({})
                : n in t && (t[n]("load", p(j)), t[n]("beforeunload", p(L)), t[n]("pagehide", p(L))));
          })(window);
          rx.ex64(
            "UlgBKT4nV10haERRTSFMSFBJIUFKS0AgU0RJUEAjSUBLQlFNIVFNQEsvSktGSkhVSUBRQC1GRElJR0RGTidCUSBDSUpKVyFhRFFAJktKUi9wTEtRHWRXV0RcJlZAUS5wTEtRFhdkV1dEXCNHUENDQFcjVlBHUUlAIkBLRldcVVEhS0RIQCJkYHYIZmdmI0FMQkBWUSJ2bWQIFxATIGFgZ3BiIUBdQEYmV0xBJlZMQSQkFSglBSUkJ7gzFSkkRgUkJCa4FSkjRldcVVFKBSUVKS1IVmZXXFVRSgUlZCIBJa6EsbWJjtHg/fHA6+bq4eD3pIWGtYmD4Ovm6uHghLSEpYSohGQtoiUFLy8sP8HTmNsjHw8pDi8rLy0oLSo0LhweIyweIy8PLj+f3fPfJ7YOKg4sLywvFM/RLyy2HiMrDi8OLC8strU/Pg4sDiwcHiMsHiMvDy4/xbqBgSYOLC8sLy8strU/Iw4sDiwcHiMsHiMvDy4/m/LkuyIOLC8sLy8strU/Pg4sDiwDtT8uDixkLD4lETk7PgoaOBo7PgoaORo7GjgaOz4aPho5GjsWZC+bJXJbWFpNWF1NWFxIWVhfSFlYXkhZWFFIWWX5SNlbeVFIWV15UXlReVpYUclIWHlRY7+mWFFIWWX5SNlbeVF3WVhczEjZW8lpzGlUXHlbeVF5W8lpeVF5WnlcanhQWnlceVF5WlhRyUhYeVFjkKZceVhQX1BTHFlYXsxI2VvJSFh5XlhfzEjZW8lpeV55WnlfanhQWnlfeV55WmhpVV0pLCoxeV3BacxI2VvJaXlfeVppeV55WnlaeVNj76Z0eV1kLmIlt56gO7ydkZqRnK2skZq8nbyesZ2ms5ygO7ydkZu7nJi8npGUvJ3cj5xsd3ZLTmZGdkpANCM1MyoyZkZql5iukZu8nbG8nbBkKbElQ2pU9fZJbPZJbmloRFhYZWRYZWNJaHt5gG9pY1lYZWJYZWlJaFp1aVhlYVhlaEloaWtpXVhlZUlo+FhlbUhpeWxpbGldWGVnSWh9aUhra1hleGljXVhlZUloWmNZWGVmSGxaWlhlZkhseWxIaVtYZXpYZXlJa2tIbElsf2556GllbUluZGoBHmV8ZXtjWkljSGpaRGQoXCWqg4CDHKCEoYO9H6GDgIGtsbGMjbGMiqCBkpBphoCKsLGMi7GMgKCBs5yAsYyIsYyBoIGAgoC0sYyMoIERsYyEoYCQhYCFgLSxjI6ggZSAoYKCsYyRgIq0sYyMoIGzirCxjI+hhbOzsYyPoYWQhaGAs6CLoYOhhayAZCsiJFR9Tl54X35+fn5OXnhffX59fk1PcmpPcm5efF9+cml0PxZ/iaOXkq+vg6KCo6Cno5GSrqvLz9LN0Nbpx9uSr7ODoae3oK6lxsfB0NvS1q+wrbWmsyKjr6evtq+xgqOuodDD1aniv6JMZmVjR2ZbV2pwRmVrZ2NGY2tiODgCFQxGZkpGY6mQg6mQkI+jdE1edE1Nfnx+TU9yak9ybl58X31yaXQ/VH8MJhUXKyJUS05EQgcmNjc2JyUhJhsXKjAGJSsnIwYhKyJ4eEJVTgYmCgYhdE1edE1Nfnt+Q09yaF59W39OT3N8HhMTT3N4Lw0QEhYMGl5/an1fe198dHtNc3sgIBoNXn5TFBUoPQUkBSkuIRcpJ0BVBSQUFSg9BSQFKC4hFykmQFURBSQUFSg9BSQFLy4hFyknQBEFJBQVKD0FJAUtLiEXKSRNBSQZuRUoPwUkFSg8BSQxJRQVKD0FJAUrFyQVKD8FJBUoPAUk",
            "load",
          );
          rx.ex64(
            "UlgBKSInV10hQUpLQCBTRElQQCNJQEtCUU0mVUpSIENJSkpXIFdKUEtBJCQVKSFAXUBGFSglBSUkJxUpIWhEUU0FJSQmFSkja1BIR0BXBSVkITklUnh4e2h5fFl4en96fXN5eHvpWX1Ze0OIhlRZe2QgNSWymKi4nbmYiqmUmrmYmLSYZCNnJQUvHw8rDi8vLC8vLT8uKw4vKigqKzkuHB4jKg8sPyy/DiwOKz4vDi0vLS8UytEfHiIqXV9cWg8svR4jLQ4vDi0DL2QiayVfdXV2RHl3VHVFVXFUdXV3dUVVclR1dXB1RUR5cVV2VHZiZYuLd3V/RUR5cVV2VHdiZYuLd3V/RUR5cVV2VHBiZYuLd3V/d2F3RkZGWXVkLWUlbEZ2ZkBnRkZFRmpSQdFWuEZ3VkVnRd1WT3dWRWdF0Va4RndWRmdF3VZPd1ZGZ0XRVrhGd1ZHZ0XdVk93VkdnRWQs1SWgirq7h4Pi+M3i5eL/7qqIq4qVipaKLYeN5f7m6e75v6uKgLq7h47i+MXqxaqIq4qAlrm5t4qDi6aeiZp3ipqLiomai7crmourioaLiomaCwuJiooaq4qai7cvmourioyLpp6Jmouai7q7h4/n5Oy5qomrioC6u4aOqom5ioiKubuGj6qJq4iaiZiKq4qamoqKmZoLg4qAuruGjaqJuYqPioqIG5qEq4i3KZqLq4iui7m7ho+qiZl5dHR0momYiquKmZoLg4qAuruGjaqJuYqPioqImouKjhyrjxwSmoGriKuJpp6JEZqDq44dmnSKq45kL6glqoCAgxaxkIGhgBiQibGQgKGAgIKQgL0XkAEBg6GDhoGAgpN+fn5+gIUXkJ4bkIuhg4CEF5B+hqGDvSWQnqGFiIGssY2Cz+DPoIK9JZCBoYWcgbOxjIWgg5Nzfn5+kIOTgBMSkAGJoYShgqyAu5yBs7GMhaCDEJCOoYWQg5OAExESkAGJoYSQgKGCrICtFAUkBSIuIRcpJ1ZEFSglBSUUBSQFLS4hFykmVkRHFSglBSUUBSQFLC4hFykhQEMUExUoJQUlFAUkBS8uIRcpIUFDFBMVKCUFJRQFJAUhLiEXKSFEVlBIFSglBSUUBSQFIC4hFykhRERTQhUoJQUlFAUkBSMuIRcpIURWUUEVKCUFJQ==",
            "load",
          );
          rx.ex64(
            "UlgBKSQnV10kJCkjGWtqa2AbJCc0JWQmbyUVPj4zPz4+r6IePg8zNkpMWk1+WFpRS6IpDzM2UV5JVlheS1BNHj8fPj4+r6IePg8zPExWWw8yPx4/Hz4ODzM+Vw8yPx4/Hz4SPhQVKSFAXUBGFSglBSUFJhUkJCEkIQUhKSZDS1UVKCUFJSEwIbM02iQFIbM02iS+NC0FIbM02iS+NDUFIbM02iS+ND0FISkhQ0tVRxUoJQUlIQUnKSFDS1VTFSglBSU=",
            "load",
          );
          rx.ex64(
            "UlgBKSMnV10hQF1ARiBWSUxGQCdAESdAQydWUyQkFSglBSUkJxUpIW92amsFJSQmFSkhaERRTQUlJCEVKSlJSkZESXZRSldEQkAFJSQgFSktTFZjTEtMUUAVKSNrUEhHQFcFJSQjKCUkIhUpIUNLVVMFJCQtFSkhQ0tVRwUkJCw0QSQuMSQpLmQoviUYcrYyHDc3BhcwFzIKkDwWN0I2BwY6NVIAAhc3Fjc3NDcEBjs0FjQnMyc3NzU3BwY7NBY0JzM9BAY7NRc3FjUENzI3AwY6PGNfWEIOd0REV08XNhYyPQIGOj1iU05CclNVWVJTRBc2NQY6MFJTVVlSUzcHNwQ3MzcHBjozRldERVMXNBYzGzcaOQMCPzMTMwACMy8lMCQ/NjMfM2QrUCV5U2NiXlshJiA7PDU7NCtzUHJTU1BTZmJeWQY3KiYXPDE9Njcgc1JRYl5UNzwxPTY3U2NTclBZYGJfUXNTc1pgU1FTYGJeVDE9PDEzJkdTc1VyUXNaWWNiXlE3ZGZzU2BZVmBzVHNWVsJDU2JfV3NTX1dzU35kKhwlZk5GRnxtQU5ATUltR01KTU5RTH18QU5sTl1NR358QEktPDwgNXxdTGxOfmxMdpKzfW1CbUBOR1hgZDUFJaO1LYOog56Ju7mFg/rs/d3g5Ozm/P2oiaiAqIaLg4ilZDRbJQUqLyqzPS4uLhEOKi8rszgeIyoPIi8oHg4vDisfDysOKBIvaC4fDysOLRIvPi4vKL2/Dio/L7+8Di0OKg4oLyi+vA4ovw4qPy+8DiwOKh8eIi1PTF0PLQ4oDj3j4uITLxIvKi4vKD8uFCouLygOLCoOKA4vDisqDisjKg8iAmQ3OSUaNQABPTVBREJZEDokNBE1ETIRMxEwECABECEdITQlKCAFJBQVKCQFJAU3LiEXKSZWQ0AFJBQVKCQFJAUoLiEXKSdCQQUk",
            "load",
          );
          rx.ex64(
            "UlgBKS8sUkBHQVdMU0BXI2pHT0BGUSFOQFxWIkxLQUBdakMhQUpLQCBTRElQQCBkV1dEXCN2XEhHSkkgdVdKXVwnV10kJDQ1JCc0JCQmuDMVKSxLRFNMQkRRSlcFJSQhuDMVKS1BSkZQSEBLUQUlZCA2JbK1BgaolJLo9Pnh7+rx//DsuZhkIyglGh2tlxEwPTAAPTARM2QiCiVrcHFMQ3FMQGBBYEFEQEBHQENYQXBxTEJhQ01FIiUiHmVQQUB9QENBbE97o75sTmQtuyVeRUR5dkR5dVV0VXRxdXVydXb8dEVEeXdUdnhyKzUGBhUNVWV0dWh10nlyVHZo0ER5clV0RFR2VXR1SHV2dFl6RUR5d1R2eHMrJw0ZFhsYVWV0dWh10nlzVHZo0ER5c1V0RFR2VXR1SHV2dFl6RUR5d1R2eHIrJAYbDA1VZXR1aHXSeXxUdmjQRHl8VXREVHZVdHVIdXZ0WXpOB4tZe2QsBSW9ugowtpebnPT2+/vH//b54/j6MLaXm5/I5//2+eP4+mQv5iUWDQwwMV9OWV1IWXlQWVFZUkgdODA6X11SSl1PPT09DQwwNltZSH9TUkhZREgcPTA5S1leW1A9Pj0Aohw+PjwRMg0MMDBbWUh5REhZUk9VU1IcPjAla3l+e3BjWFleSVtjTllSWFlOWU5jVVJaUz8MMCtpcnF9b3d5eGNueXJ4eW55bmNreX57cD03DQwwMFtZSGxdTl1RWUhZThw+Dj0/PQCYNhw/PjwRMg0MMT8cPzA3b0tVWkhvVF1YWU4dLTw9ET1kLgYlrqkgtIiP7erq4fbM4e3j7PClhLSIj+vx8OH2zOHt4+zwpYRkKQ4lBgGIHCAmRUJCSV57RUhYRA0sHCAnT0BFSUJYe0VIWESxOhwgKE5DSFUNKCQoMC0FKQUuBS8FLAUtBSIFIwUgZCtTJUVubn5vbm1+b2pOYmxpbGs+b15fY2sKFwoMX2JmTm9Pa19ubmpuU8tlT2psb25qYVNPamVvbm749k9tfm5Pbm5t/35uT21dX2NsHAkKX2JmTm/4fm9Pav9PbWNrBwsDMFXFkF1fY24fX2JmTm96bU9uTm1ObkMXFSkkVxUoLAUlBSspIUlKREE=",
            "load",
          );
          rx.ex64(
            "UlgBKS8mVkNANURBQWBTQEtRaUxWUUBLQFcsSEpQVkBBSlJLIkhKUFZAUFUhQF1ARjZXQEhKU0BgU0BLUWlMVlFAS0BXLFFMSEB2UURIVS5VQFdDSldIREtGQCZLSlIkVyQkNAUkJzQqJCYyISspIkZEVVFQV0ArKSJVRFZWTFNAJCE0zSIkILgzFSktQUpGUEhAS1EFJSQjFSkhaERRTQUlJCIVKSdXXQUlJC0VKS5WQFFsS1FAV1NESQUlJCwVKShGSUBEV2xLUUBXU0RJBSUkLyskLiskKjQlJDQxJDcxZDZDJaG3FhWqgBWqgYqLp4mAhLq7h4n46qqMqpqKioq4u4aLqoyIu5qLqpm7mourioeP5ujU6Li7houqjIi7moqqmbuaiquKh4/m6NTmuLuGi6qMiLuaiaqZu5qJq4qHj+bo1PiJmauKp2QxFCVcRUZ7d1dzdVd1V3p7dEVGe3dXc3VXdVd7e3VGV2VHRntyV3FXZX1EV35XckR0eHdaZDABJQYuJiMfHCEpDSkvDS8NICEuHxwhKQ0pLw0vDSEhLx0NJQ0iAGQzACV+aMp1XlVUeFZeW2VkWFcnNTZ1U3VFVVVVZmRYVSR1U3RVdVV4ZDIzJVZ8TU1wdU1welx9YHxNcHtdfH9tfFFkPWElvJanp5qfp5qQtpeKlqeakbeWlpWWlpQGtoe3lZWYB4aWtpiVnJmmp5uT5+Lk/7aGt5SrNraVtpiel6e2gae2hKe2grsUFSghBSIFMiQpJBQVKCEFIgU9JCgkFxUoLAUiBTEpIUlKREEXFSgsBSIFMykjUEtJSkRB",
            "load",
          );
          rx.ex64(
            "UlgBKS8nVkQjRkpLRkRRJlZDQCxISlBWQEhKU0AhQF1ARiZWREchRkBMSSFVUFZNJkRHViRXJCQ0BCQnNO0kJCY02iQkITIhKykiRkRVUVBXQCspIlVEVlZMU0AkIDTNIiQjuDMVKS1BSkZQSEBLUQUlJCIVKSFoRFFNBSUkLRUpJ1ddBSUkLBUpLlZAUWxLUUBXU0RJBSUkLxUpKEZJQERXbEtRQFdTREkFJSQoKyQrKyQ2NCUkMTEkMDEkMzFkMp8lQ1X090hn90hkaGlFa2dmWFlkaUhhSHxiWFlkaUhhSH1qWWRoaFhoW2hoaFpZZGtIYWpZeGlIf1l4aUloZW0EGjYKWllka0hhall4aEh/WXhoSWhlbQQaNgRaWWRrSGFqWXhrSH9ZeGtJaGVtBBo2GlpZZGtIYWpZeGpIf1l4akloZW0ECDYKWllka0hhall4bUh/WXhtSWhlbQQINgRaWWRrSGFqWXhsSH9ZeGxJaGVtBAg2Gmt/SWhFZD0RJQMaGSU5SE1NbF9MR11lQFpdTEdMWwgvKggtCCIkKhkIPhgZJC0IIQg+IhsIIAgsGyslKAVkPA8lS2NsblJRbXITBAwOFwQkFwQPFS0IEhUEDwQTQGdiQGVAamxiUEBrQG1NZD8QJaWzEa6Cjo+jjYKAvr+Ciq6HrpuOjo6+v4KKroeumoS+v4KOr469jo6Ovb+Djv+uh6+Oro6jZD56JGJIeXlFSicmPnlFQjksOy8mOyQoJyosaElUSHlFQD0gJCwaPSgkOWlISEtISErUWEl5RUw5KC4sEWlISE3UWEl5RUw5KC4sEGlIddXtaFhpTe1oWWlKSEllddXWaEvYaEZpS2hGRUlLRkNLWUNLWENLW0N170NoRj1Je3lFTCg9KCd7aE7YaFlpSthoWGlNSExIeHlFTTo4Oz1oTtndWEvYaUpoWd1YS9hpTWhYQnh5RE9oTntIT0h11O1oRmlL7VhJaU9CSXh5RE5oXVhJc1RJeHlET2hO21ihTtrYaEZpS2lPSE5IeHlETmhdaU5170NoW3dJeHlEQWhO2GhbaUxYSNt5RUsZAGhOWEtCeHlEQWhO2GhbaUxCe3lFSiQgJ2hOe3tIQUh4eUROaFzbWKFOaUFLWtlYSGhaS0ZpS0tZaUpLWGlNS1tpTEtHR3XWaEpoWkBJeWhTeWheeWhQZRQVKCEFLQU+JC4kFxUoLAUtBT0pIUlKREEXFSgsBS0FPykjUEtJSkRB",
            "load",
          );
          rx.ex64(
            "UlgBKSAnV10mVkNAI1ZGV0pJSSFAXUBGJFckJDQHJCc07SQkJjTaJCQhMiErKSJGRFVRUFdAKykiVURWVkxTQCQgNM0iJCMVKSFoRFFNBSUkIhUoJQUlJC0VKS5WQFFsS1FAV1NESQUlJCwVKShGSUBEV2xLUUBXU0RJBSUkLyskKCskNDQlJDcxJDYxZDFDJR0LqqkWOqkWPTY3GzU6OAYHOzVEVhYwFiU2NjYEBzo2FjA0ByY3FiQHJjcXNjszRFRoVAQHOjYWMDQHJjYWJAcmNhc2OzNEVGhaBAc6NhYwNAcmNRYkByY1FzY7M0RUaEQ1JBc2G2QwESWLkpGtscDFxeTXxM/V7cjS1cTPxNOAoaKApYCqrKORgLWQkayigKaAtaqTgKmApJOjraCNZDMPJXBYUFVpalZJKD83NSw/Hyw/NC4WMykuPzQ/KHtaWXtee1FXWGt7U3tWdmQyDiWitBapgomIpIqCh7m4hIv76eq4hYipiKmaiYmJuriEifi4hYipiKiJqYmkZD2QJRM5CAg0O1ZXTwg0M0hdSl5XSlVZVltdGTglOQg0MUxRVV1rTFlVSBg5OTo5OTulKTgIND9LW0pXVFRhGTgEpKcZOqkZNhg6GTYxODo2Mjo3MjooMgSeMhk2DjgJCDQ7WVpLGT6pGTcYOzk8OQkINDxbXVFUGT6qKdA/q6kZNhg6GDw5PTkJCDQ8SE1LUBkqGD06KagpORkpOjYYOjo3GDs6NTYEpxk7GSkxOAgZLwgZLAgZLhQUFSgmFSglBSUFPSQuJBcVKCEVKCUFJQUwKSFJSkRBFxUoIRUoJQUlBTIpI1BLSUpEQQ==",
            "load",
          );
          rx.ex64(
            "UlgBKSEnV10kWS1VRFdWQGxLUSZWQ0AkJDQGJCcpI1ddCFVLUSQmNP0hJCEVKCUFJSQgFSkpSUpGREl2UUpXREJABSVkIzQkR2xs+nxt/nyFal1hYgMMGwQKDBkEAgM+GQwfGfB7XWFrGQQABAMK8HtdYWYdCB8LAh8ADAMOCExtbG9dTG9MaGxuZmxpfGxRy2dNbzhtXF1haB4dAQQZTW9gbGxvbFxdYG9MbV18bU1vcE1sbGxobFxdYG9MbV18bE1vcHxtbGxrbF9dYW4ADBVdYWkgDBkFTG18bfxNaE1sbG5sbGn9fGxNa1HMTG5NbmptbG5mbGl8bGn9TWn9YGz9TWxhbUxvTGheXWBuTGlpfGxn8HxsTWlhbx4BX11gbkxpTW5hbwMJXl1gbkxpaX6goaFQZ01uYWkDCTIBXF1haQgLXFtdYG1MbU1uZl9dYWwdTGlfTGxBFxUpJFcFIQUjKSFJSkRB",
            "load",
          );
          rx.ex64(
            "UlgBKScnV10mVkNAJCQ0FSQnFSglBSUkJhUpIUBDFBMVKCUFJWQhISRkT0/TWH5CSD0tPCsrIG9OT0x+Qks5Jyo6Jm5PT01+QkgmKycpJjpuT09KfkJEJyAgKzwZJyo6Jm9OT0t+QkUnICArPAYrJykmOm9OfH5DT29MbkxCTD05fX5DT29MSl2DgoJzRG5MQko9OREifH5DT29Mbk1CTD0mfX5DT29MSl2DgoJzRG5NQko9JhEifH5DT29MbkpCTDg5fX5DT29MSl2DgoJzRG5KQko4OREifH5DT29MbktCTDgmfX5DT29MSl2DgoJzRG5LQko4JhEif29NbkxFf29Nbk1Ff29NbkpFf29NbktFfX5CSC0hIC0vOlpKfHx8fEV8fkJPPm9MfG9PYhcVKSRXFSglBSUFISkhSUpEQQ==",
            "load",
          );
          ((i) => {
            let n = i.Math;
            function e() {
              for (let t = 0; t < this.length; t += 1) this[t] = n.max(0, this[t]);
            }
            function o() {
              for (let t = 0; t < this.length; t += 1) this[t] = 1 / (1 + n.exp(0 - this[t]));
            }
            function r(t, n) {
              var r = new i.Float32Array(t * n);
              return ((r.rows = t), (r.columns = n), (r.R = e), (r.S = o), r);
            }
            ((i.rx.M = function (t, n, r) {
              return ((t.rows = n), (t.columns = r), (t.R = e), (t.S = o), t);
            }),
              (i.rx.M.zero = r),
              (i.rx.M.mul = function (e, o, t) {
                var n = e.rows,
                  f = e.columns,
                  u = o.columns,
                  l = r(n, u);
                for (let i = 0; i < n; i += 1)
                  for (let r = 0; r < u; r += 1) {
                    let n = t[r];
                    for (let t = 0; t < f; t += 1) n += e[i * f + t] * o[t * u + r];
                    l[i * u + r] = n;
                  }
                return l;
              }));
          })(window);
          rx.ex64(
            "UlgBKTcnV10kaCJSQExCTVFWI0lAS0JRTSFHTERWIkNKV1JEV0EgQkRISEQgVklMRkAhR0BRRCFIQERLLVNEV0xES0ZAIkBVVkxJSkspQ0BEUVBXQGtKV0hWI0lEXEBXViFBSktAIFNESVBAIVFcVUAhVVBWTSQkFSkhaERRTQUlJCcVKCUFJSQmuDMVKSRGBSckIRUoJBUoJQUlZCBnJW1FdWdCRXZLRWZEZkVmR01CdEtEZkZCZkRLQmZGBlxGTWdVVmplCxMKR2JlVmtiRmZWa2RGZkZnS2dNQnRLQ2ZGamQj4iWnj768gYusjayOnYyHiL6BiqyMvryBi6yNHp2OrI6sjoeIvoGErIy+vIGLrI0enY+sjh6djqyOh4i+gYWsjL68gYusjR6diKyOHp2PrI6HiL6BhqyMiKyPgYesjMzsjEdtbW59bFDMXGFvTG1MbiBsXVxgaB8dHhhNbfxcYWdMbFxMblxhZkxsf23+/VxMblxhZUxsXExuTG1cTG5cYWpMbHxcTG5cYWRMbG1naF5MbkxtbW78fW1MblbFk0FMbYeIvoGJrIygZCI9JXMZVVl2XG1tUVwPfVxwfVxSXWtUXHlZdWQtPSVfNXl1UnhJSXV4Kll4VFl4fnFHeHBVdVlkLMUlupOVsZCcnbGRlbGTnJyxkdFUkQ4kJCc0JRmFFSgmBSQFJ6IlFxUoIhUoKQUltTQgtzQgBSe3NCAFJyQmJBQVKS1MVmNMS0xRQBUpI2tQSEdAVwQlFQUnBSQ7JBkkLyUhFTQlBSYFJwUkFxUpJkhMSwQkFQUnBSQVNCcFJi4XFSkmSERdBCQXFTQkBSY0FTQmBSYkNhU0IQUmJC4hFwUnBSQkJ7U0JAUnH0vaFgQhJhUoJgUkNCQFJCQkJCAVKCgFJSEjISArJRQVKCAFIAUkJCQkH8jaCAUkmpWjnJSxkb1kL/IlXHZ2dWNGR3tyERsYGAVWduRmckd6dEd6e1d2dnR2ckd6eld2c3FzctZ3S9N7chMSGQQSR3pnV3JSd0BWcnRXdEd6c1dyR3p1V3J8Rkd6Zld1RXZ0R3p0R3pzV3JNHndL03t+FRYDFB8ZGAUaR3pnV3Jsd0BWcXRHenxXcld0R3p1V3J8Rkd6Zld1RU1Nd0vTe3MFEhsCR3pnV3J5d0NWcHxGR3pmV3VFTWp3S9N7cAQeEBoYHhNHemdXcnx3Q1Z/fEZHemZXdUVNLYhBVn5XdUd6e1d2WnYhBSEoJAUnIQUsKSdoaQUnIQUvKSBWVUBGVgUsGRUpIGFgZ3BiBSYQJSEFICkgYUBLVkAFLCEFIyksZ0RRRk1rSldIBSwhBSIpIXdAaXAFLCEFLSkidkxCSEpMQQUs",
            "load",
          );
          rx.ex64(
            "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",
            "load",
          );
          rx.ex64(
            "UlgBKSghaERRTTZXQEhKU0BgU0BLUWlMVlFAS0BXLEhKUFZASEpTQCBGSUxGTiNWRldKSUkmUURCJ1ddIEZKUEtRIkZJTEBLUX0iRklMQEtRfCJWRldKSUl8IUBdQEY1REFBYFNAS1FpTFZRQEtAVyQkuDMVKS1BSkZQSEBLUQUlJCe4MxUpJ1BABSUkJhUpJlBAXQUlJCEVKSFWVFdRFSglBSUkIBUpJlVKUhUoJQUlJCMVKSZER1YVKCUFJSQiMiErKSJVRFZWTFNAKykiRkRVUVBXQCQtNEEkLDRBJC8uJC4uJCkuJCguJCsuJCouJDU0JSQ0NCVkNwwliJGSr6ODoqGDpYOor6CRkq+jg6Khg6WDqa+hkZKvo4OioYOlg66vpo5kNkAlemxgXVVxUmVQYWBdVXFSXEY4MSN9IyQiPz43fTk+JDUiMTMkOT8+bMxxU2BcUzkjPHFSWVBicVNdVlxSMSRsYF1XcVJLUGJgXVdxUkFRXEEDJCI/PjcZPiQ1IjEzJDk/PmBxQnxkMT8lETsGpqUrOgo3Mxo7pSs6CjcyGjs5OgobKRZkMHMlc1lkxP5TeVb+U3lVdlhqeV1JWsl5VWhVUHhZU2p5XUlayXlWaFVReFlTSGpqU2l5XGpZWllaSch4WnlJZPl5UHlJW1hoeUtaVWhVUHhZWlZoVVF4WXRkMwslGDIPlTgSPCEzAhI1ohI8Az45EjMjMhIjMSMyD5ISOhIjMDMDEiAxPAM+ORIzH2QydiVPVFVoblVoY0RlRHBnb2RUVWhuVWhjRGVEcWduZFRVaG5VaGNEZURzZ2lkVlVoaURlZkRiRG9oZ1ZVaGlEZWZEYkRuaGZWVWhpRGVmRGJEaWhhSRcVKSRXFSgjBSUFMikhSUpEQQ==",
            "load",
          );
          rx.ex64(
            "UlgBKScmUURCJ1ddJCS4MxUpLUFKRlBIQEtRBSUkJ7gzFSknUEAFJSQmFSkmUEBdBSVkIWolcFpua1ddCT48HiMrelvLV1NmcwAFYAZwcst7WldecwUne3JQamtXXjY6Lzgza1ddODQ0MDI+elppWllaa2tXXy8pMjZrSll7WUdae1l2WmQgGiUELhMfIi8OLRsvHh8iLw4tvw8uIz1dVwJHRkhHSlxbAk5MW0ZAQRUTsw4sHyMsRlxDDi0mLx0OLCIuIy1OWwNkI3clWENTdn9zc3NzQ0J+dwECHhsGUnN+czJxQmNzc25zUnNzcHNOUnBbckNCfnYTBh0QU3JScHNxc0NCfngRGhMAMR0WFzMGUnFjcnN2c0NTd1J2XhcVKSRXFSgkBSUFIykhSUpEQQ==",
            "load",
          );
          rx.ex64(
            "UlgBKS4nV10jd0BCYF1VI0ZKSk5MQCNJQEtCUU0gQ0lKSlctRlZWd1BJQFYsUEtBQENMS0BBIFdQSUBWNVRQQFdcdkBJQEZRSldkSUkhUUBWUSUkJBUpIWhEUU0FJSQnFSglBSUkJrgzFSkkRgUnJCEVKS1BSkZQSEBLUQUlJCAVKS5WQFFsS1FAV1NESQUlJCMVKShGSUBEV2xLUUBXU0RJBSUkIhUpL1ZAUXFMSEBKUFEFJRAVKCQFJSlne1VVSV0IREJAS1ENGh8IfhUIHHgOen4VCBx4DgwaCEpTQFdJRFwNGh8IDRofR0RWQFkIVlFKVQhHUFFRSksMDBoBJC0kExUoJAUlKSRMKRpVVUldCERCQEtRDRofCH4VCBx4Dnp+FQgceA4MGghKU0BXSURcDRofCA0aH0dEVkBZVlFKVQhHUFFRSksMDBokLCQkLykpREhfSwhGUV1TCExBJC4pLkRIX0sIRlZWCExBJCm4NPUqFSkgRkF6V0wFJiQouDTljCIVKSBGQXpWRgUmZCp3JRA6Cgs3PkhLV1JPCzY5Gj83OQAbOjk6OjgqOwebCzY4GzkbOBE7Cgs3PFJVX15DdF0LGzgbOas3OgYbOh8qOzoHOjk7FjU6OKsqOhs4AfDEFjRkNR8lupOQkgOArQOArbGQkJUDgK0DgK2xk6GhnZfj8P/1/vywkIMBgJAAsZKxlZCaoKGclbCQo4GxkpC8kGQ0nSV7U2FxX3BRbFFRUHxgYFxTPj8nYFxUFDEkNXFQQ0G4V1FbYWBdVHFRYlNgXFgkPwMkIjk+N1FhUUF0UVRRYnFAcFNwUlFVUVFWwFxea3ADMT01AzkkNW0cMSjAcFXAXEJrcAAxJDhtf2twHTEofRE3NW3AcFTAXFNtYX5wUWz0XFY4JCQgI2pgXFggIj8kPzM/PGBcWDw/MzEkOT8+cVBfUFFWwFxYa3ADNTMlIjVwVlRwVl1ScVR8ZDcVJaaMsROtjI+NoIaxK4CLub2AiK2Mi42gvYCIrYyxK4CLub2Aiq2Mi42gvYCKrYyghmQ2dSRoc3JPSmNGTlAZKyYcf2AyMi46byMlJyw2YB9DQ0NDQFNCfuJyT0FiQ2JAc0Jzck9LY0pyTkArJnJiQGJDfkNRQnFjU0FT6kNT0kNjSHNjRGNMb0xDQNJTQ2JAeIa9c3JPSmNGTkcxNjsuJ19WQ0NBQ0NGU0J+4nJPQWJBYkYDQkNH309Ick5JNic6NgEtLDYnLDZyYkZiQXNyT0tjS2JHfkNRQnFjU0FT/AZTxntjSXNjRGNMb0xDRtJTQ2JGePa9Q0TfVnJOSTE2Oy4nESonJzYxY0ZDRVNCfuJyT0FiRGJFKEJzY1ByYkViRENKQ37cYkpBQngOQkNLU0J+4nJPQWJKYkt/QkNI309Ick5FITExFic6NnJiS2JKc3JPS2NLYkh+Q1FCcWNTQVP8BlPGe2NJc2NEY0xvTENL0lNDYkt4+r1DRdJTQ2JFeMm9b01kMSklsqS5lp2YqbmeuZa0ZDA5JQMZCDo3KBUoOCkbCCwIJQg6KycoGwguCCQIPQUXFSkkVxUoJQUlBTApIUlKREE=",
            "load",
          );
          /* ◬ */

/* --- inline script #329 --- */
window.ue && ue.count && ue.count("CSMLibrarySize", 102169);
