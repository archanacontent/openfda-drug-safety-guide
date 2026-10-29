// Charts and the live freshness check. All figures captured from the openFDA API on October 29, 2026.
(function () {
  // Open every page at the top, unless the link points to a section
  try { if ("scrollRestoration" in history) history.scrollRestoration = "manual"; } catch (e) {}
  function toTop() { if (!location.hash) window.scrollTo(0, 0); }
  window.addEventListener("pageshow", toTop);
  window.addEventListener("load", toTop);

  var NS = "http://www.w3.org/2000/svg";
  var CAPTURED = { lastUpdated: "2026-07-30", latestReport: "2026-06-30", capturedOn: "2026-10-29" };

  function c(n) { return getComputedStyle(document.body).getPropertyValue(n).trim() || "#888"; }
  function el(t, a, txt) { var e = document.createElementNS(NS, t); for (var k in a) e.setAttribute(k, a[k]); if (txt != null) e.textContent = txt; return e; }
  function mount(id, svg) { var box = document.getElementById(id); if (!box) return; box.innerHTML = ""; box.appendChild(svg); }
  function fmt(n) { return n.toLocaleString("en-US"); }
  function width(id) { var b = document.getElementById(id); return Math.max(300, Math.floor((b && b.clientWidth) || 760)); }

  function gap() {
    if (!document.getElementById("chart-gap")) return;
    var W = width("chart-gap"), narrow = W < 560, L = 10, R = 10, svg = el("svg", { viewBox: "0 0 " + W + " 220", role: "img", "aria-label": "Timeline: FDA publishes daily from August 2025 and through AEMS from March 2026, while openFDA data ends June 30, 2026" });
    var start = Date.UTC(2025, 0, 1), end = Date.UTC(2026, 9, 31);
    function x(y, m, d) { return L + (Date.UTC(y, m, d) - start) / (end - start) * (W - L - R); }
    for (var i = 0; i < 22; i++) { var y = 2025 + Math.floor(i / 12), m = i % 12, xx = x(y, m, 1);
      svg.appendChild(el("line", { x1: xx, x2: xx, y1: 150, y2: 156, stroke: c("--line") }));
      if (m % (narrow ? 6 : 3) === 0) svg.appendChild(el("text", { x: xx, y: 172, "font-size": 11, fill: c("--md-default-fg-color--light") }, ["Jan", "Apr", "Jul", "Oct"][m / 3] + " " + String(y).slice(2))); }
    svg.appendChild(el("line", { x1: L, x2: W - R, y1: 150, y2: 150, stroke: c("--line") }));
    svg.appendChild(el("text", { x: L, y: 30, "font-size": 12.5, "font-weight": 600, fill: c("--headline") }, "FDA publishing"));
    svg.appendChild(el("rect", { x: L, y: 38, width: x(2025, 7, 22) - L, height: 16, rx: 3, fill: c("--bar2") }));
    svg.appendChild(el("rect", { x: x(2025, 7, 22), y: 38, width: x(2026, 9, 29) - x(2025, 7, 22), height: 16, rx: 3, fill: c("--bar") }));
    svg.appendChild(el("text", { x: x(2025, 7, 22) + 6, y: 50, "font-size": 10.5, fill: "#ffffff" }, narrow ? "Daily, then AEMS" : "Daily from Aug 22, 2025 · AEMS from Mar 11, 2026"));
    svg.appendChild(el("text", { x: L, y: 84, "font-size": 12.5, "font-weight": 600, fill: c("--headline") }, "openFDA coverage"));
    svg.appendChild(el("rect", { x: L, y: 92, width: x(2026, 5, 30) - L, height: 16, rx: 3, fill: c("--bar") }));
    svg.appendChild(el("rect", { x: x(2026, 5, 30), y: 92, width: x(2026, 9, 29) - x(2026, 5, 30), height: 16, rx: 3, fill: c("--gap-soft"), stroke: c("--gap"), "stroke-dasharray": "4 3" }));
    svg.appendChild(el("text", { x: (x(2026, 5, 30) + x(2026, 9, 29)) / 2, y: 128, "font-size": 11, "font-weight": 600, fill: c("--gap"), "text-anchor": "middle" }, narrow ? "121 days" : "121-day gap"));
    [[2026, 5, 30, narrow ? "Ends Jun 30" : "Data ends Jun 30", 192, "end"], [2026, 6, 30, narrow ? "Refreshed Jul 30" : "Refreshed Jul 30", 208, "end"], [2026, 9, 29, "Oct 29", 192, "end"]].forEach(function (p, i) {
      var xx = x(p[0], p[1], p[2]);
      svg.appendChild(el("line", { x1: xx, x2: xx, y1: 112, y2: 150, stroke: i === 2 ? c("--gap") : c("--md-default-fg-color--light"), "stroke-dasharray": "2 3" }));
      svg.appendChild(el("text", { x: xx, y: p[4], "font-size": 10.5, fill: i === 2 ? c("--gap") : c("--md-default-fg-color--light"), "text-anchor": p[5] }, p[3]));
    });
    mount("chart-gap", svg);
  }

  function quarters() {
    if (!document.getElementById("chart-quarters")) return;
    var d = [["Q1 25", 325253], ["Q2 25", 323832], ["Q3 25", 339468], ["Q4 25", 319214], ["Q1 26", 320823], ["Q2 26", 352949], ["Q3 26", 0]];
    var W = width("chart-quarters"), H = 260, L = 46, B = 36, T = 24, max = 400000, ph = H - B - T, bw = (W - L - 20) / d.length;
    var svg = el("svg", { viewBox: "0 0 " + W + " 260", role: "img", "aria-label": "Reports per quarter in openFDA. No reports after June 30, 2026." });
    [0, 100000, 200000, 300000, 400000].forEach(function (v) { var y = T + ph - v / max * ph;
      svg.appendChild(el("line", { x1: L, x2: W - 10, y1: y, y2: y, stroke: c("--line") }));
      svg.appendChild(el("text", { x: L - 8, y: y + 4, "font-size": 11, fill: c("--md-default-fg-color--light"), "text-anchor": "end" }, v ? (v / 1000) + "k" : "0")); });
    d.forEach(function (p, i) { var x = L + i * bw + bw * .18, w = bw * .64, h = p[1] / max * ph;
      if (p[1]) { svg.appendChild(el("rect", { x: x, y: T + ph - h, width: w, height: h, rx: 3, fill: c("--bar") }));
        svg.appendChild(el("text", { x: x + w / 2, y: T + ph - h - 6, "font-size": W < 560 ? 9.5 : 11, fill: c("--headline"), "text-anchor": "middle" }, (p[1] / 1000).toFixed(0) + "k")); }
      else { svg.appendChild(el("line", { x1: x, x2: x + w, y1: T + ph, y2: T + ph, stroke: c("--gap"), "stroke-width": 3 }));
        svg.appendChild(el("text", { x: x + w / 2, y: T + ph - 26, "font-size": W < 560 ? 9 : 10.5, "font-weight": 600, fill: c("--gap"), "text-anchor": "middle" }, "Not yet in"));
        svg.appendChild(el("text", { x: x + w / 2, y: T + ph - 12, "font-size": W < 560 ? 9 : 10.5, "font-weight": 600, fill: c("--gap"), "text-anchor": "middle" }, "openFDA")); }
      svg.appendChild(el("text", { x: x + w / 2, y: H - 12, "font-size": W < 560 ? 9.5 : 11.5, fill: c("--md-default-fg-color--light"), "text-anchor": "middle" }, p[0])); });
    mount("chart-quarters", svg);
  }

  function hbars(id, d, highlightFirst, max) {
    if (!document.getElementById(id)) return;
    var W = width(id), narrow = W < 560;
    var rowH = narrow ? 44 : 34, L = narrow ? 0 : 250, valW = narrow ? 120 : 130;
    var svg = el("svg", { viewBox: "0 0 " + W + " " + (d.length * rowH + 10), role: "img", "aria-label": "Horizontal bar chart" });
    d.forEach(function (p, i) {
      var y = i * rowH + 6, barY = narrow ? y + 18 : y + 3, w = (p[1] / max) * (W - L - valW);
      svg.appendChild(el("text", { x: narrow ? 0 : L - 10, y: narrow ? y + 11 : y + 16, "font-size": 12.5, fill: c("--headline"), "text-anchor": narrow ? "start" : "end" }, p[0]));
      svg.appendChild(el("rect", { x: L, y: barY, width: Math.max(w, 2), height: narrow ? 14 : 18, rx: 3, fill: highlightFirst && i === 0 ? c("--gap") : c("--bar") }));
      svg.appendChild(el("text", { x: L + w + 8, y: barY + (narrow ? 11 : 13), "font-size": 11.5, fill: c("--md-default-fg-color--light") }, p[2]));
    });
    mount(id, svg);
  }

  function who() {
    var d = [["Consumer or non-health professional", 9472711], ["Physician", 4538989], ["Other health professional", 4083668], ["Pharmacist", 1302166], ["Lawyer", 545216]];
    var tot = d.reduce(function (s, p) { return s + p[1]; }, 0);
    hbars("chart-who", d.map(function (p) { return [p[0], p[1], (p[1] / tot * 100).toFixed(1) + "%  ·  " + (p[1] / 1e6).toFixed(2) + "M"]; }), true, d[0][1]);
  }

  function sema() {
    var d = [["Nausea", 4295], ["Off-label use", 3643], ["Vomiting", 3100], ["Impaired gastric emptying", 2812], ["Diarrhoea", 2797], ["Constipation", 2370], ["Decreased appetite", 2163], ["Use in unapproved indication", 1884], ["Weight decreased", 1834], ["Wrong technique in product use", 1720]];
    hbars("chart-sema", d.map(function (p) { return [p[0], p[1], fmt(p[1]) + " reports"]; }), false, 4295);
  }

  function days(a, b) { return Math.round((Date.parse(b) - Date.parse(a)) / 86400000); }
  function iso(s) { return s.length === 8 ? s.slice(0, 4) + "-" + s.slice(4, 6) + "-" + s.slice(6) : s; }
  function setLive(upd, latest, note) {
    var u = document.getElementById("live-updated"), l = document.getElementById("live-latest"), g = document.getElementById("live-days"), n = document.getElementById("live-note");
    if (!u) return;
    u.textContent = upd; l.textContent = latest;
    g.textContent = days(latest, new Date().toISOString().slice(0, 10));
    n.textContent = note;
  }
  function live() {
    if (!document.getElementById("live-updated")) return;
    setLive(CAPTURED.lastUpdated, CAPTURED.latestReport, "Showing values captured on October 29, 2026 while checking openFDA live.");
    var today = new Date(), from = new Date(today.getTime() - 400 * 86400000);
    function ymd(d) { return d.toISOString().slice(0, 10).replace(/-/g, ""); }
    var url = "https://api.fda.gov/drug/event.json?search=receivedate:[" + ymd(from) + "+TO+" + ymd(today) + "]&count=receivedate";
    fetch(url).then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); }).then(function (j) {
      var res = j.results || [], latest = res.length ? iso(String(res[res.length - 1].time)) : CAPTURED.latestReport;
      setLive(j.meta.last_updated, latest, "Checked live with openFDA just now. The update date is the one this response reported.");
    }).catch(function () {
      setLive(CAPTURED.lastUpdated, CAPTURED.latestReport, "openFDA could not be reached from your browser, so these are the values captured on October 29, 2026.");
    });
  }

  function drawAll() { gap(); quarters(); who(); sema(); }
  function init() { drawAll(); live();
    new MutationObserver(drawAll).observe(document.body, { attributes: true, attributeFilter: ["data-theme"] });
    var t; window.addEventListener("resize", function () { clearTimeout(t); t = setTimeout(drawAll, 150); }); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
