﻿var W = window; var D = W.document; var DA = D.all; var a = 0; var CLOSE_LNK = false; var offsetX = 0; var offsetY = 0; var LINK_MAIN_HOST = ""; var SS_flag = false; var SS_Lang = 0; var ss_ref = 1; var LNK_MAIN_HOST = ""; var MSG_MAIN_HOST = ""; var SS_WEB_ID = 0; var NEW_PHD = true; var chtitle_mode = true; window.onerror = function () { return true }; window.onfocus = function () { chtitle_mode = false }; window.onmousemove = function () { chtitle_mode = false }; if (!Android) { var Android = false } var AD_BLOCKER = DOC_LOADED = false; function get_page_width() {
    return W.innerWidth || D.documentElement.clientWidth || 0
} var touch = false; var _TOUCH_OBJ = new Object(); var PAGE_WIDTH = get_page_width(); var PREF = ""; var _img_preloaded = new Array(); var GALLERY_GLOBAL_DATA = CLEAR_PRELOAD_DIV = false; var MSG_GALLERY_DIR = MSG_GALLERY_PREFIX = return_to_msg = ""; var CAT_OV_ID = CAT_CID_ID = false; var CUR_BIG_PIC = false; var CLIENT_INFO = { version: 0, codev: 0, api: 0, actionBar: 0 }; var MAILS_INFO = false; var PAGE_ZOOM = 1; var BROWSER_ZOOM = 0; var USE_TMENU = 1; var NAVIGATOR = 0; x = navigator.userAgent; if (x.indexOf("MSIE") > 0 && x.indexOf("Opera") <= 0) { NAVIGATOR = 1 } else {
    NAVIGATOR = 0
} var CUR_ARR = new Array(); var CURRENCY_IDS = new Array(); var PRICES_STR_IDS = new Array(); var VARR = new Array(); var MOBILE = false; var js_cnt = new Array(); var js_cnts = new Array(); var js_cnt_main = 0; var CALC_BANNER_URL = ""; var CALC_PRICE = 0; var CALC_VALUTA = ""; var AREA = 0; var CURRENCY_ID = 0; var MSG_CURRENCY_ID = 0; var DEF_CURRENCY_ID = 0; var CURRENCY_ID_2 = 0; var PH_1 = PH_2 = PH_3 = PH_c = ""; var ADS_STAT = [-1, -1, -1, -1, 1]; var OPEN_STAT_LNK = true; var pcc_id = 0; function el(b) { return document.getElementById(b) } function go(c, d, b, k, g, n, p) {
    if (!c) {
        return false
    } if (d == 1) { if (!b) { b = 700 } if (!k) { k = 400 } if (PAGE_ZOOM > 5 && PAGE_ZOOM < 80) { b = parseInt(b + b / 100 * PAGE_ZOOM); k = parseInt(k + k / 100 * PAGE_ZOOM) } if (!g) { g = 1 } else { g = 0 } if (!n) { n = 1 } else { n = 0 } l = (screen.width - b) / 2; t = (screen.height - k) / 2; if (!p) { p = "_blank" } return window.open(c, p, "toolbar=0,scrollbars=" + g + ",resizable=" + n + ",left=" + l + ",top=" + t + ",width=" + b + ",height=" + k) } else {
        if (d == 2) { window.open(c, "_blank") } else {
            if (d == 3) { var f = window.open(c, p ? p : "_blank", "fullscreen=1, scrollbars=1, toolbar=0, resizable=1") } else {
                if (d == 4) {
                    window.open(c, "_top")
                } else { window.location.href = c }
            }
        }
    }
} function _click(b) { if (!b || !b.href) { return true } if (/(iPhone|iPod|iPad)/i.test(navigator.platform) && window.ios_app) { window.open(b.href, "_system"); return false } return true } function get_xml_http() {
    var b = false; if (!b && typeof XMLHttpRequest != "undefined") { try { b = new XMLHttpRequest() } catch (d) { b = false } } if (!b) { try { b = new ActiveXObject("Msxml2.XMLHTTP") } catch (d) { try { b = new ActiveXObject("Microsoft.XMLHTTP") } catch (c) { b = false } } } if (!xmlhttp && window.createRequest) {
        try {
            b = window.createRequest()
        } catch (d) { b = false }
    } return b
} var selected_p2p = false; var xmlhttp = get_xml_http(); function get_object_offset(c) { var b = y = 0; while (true) { b += c.offsetLeft; y += c.offsetTop; if (!c.offsetParent) { break } c = c.offsetParent } offsetX = b; offsetY = y } function move_div() { var b = el("head_line"); var c = el("sec_div"); if (!b || !c) { return false } get_object_offset(b); c.style.top = (offsetY - 1) + "px"; c.style.left = offsetX + "px"; c.style.width = (b.clientWidth - 2) + "px" } function change_my_text(d, c) {
    var b = el("dm_" + d); if (!b) { return } if (c % 2 != 0) {
        b.style.color = "#000"
    } else { b.style.color = "green" } c++; window.setTimeout("change_my_text( " + d + ", " + c + " )", 1000)
} function m(b, k, c, A, r) {
    var d, B; var q = 40; var s = 78; var z = screen.width; var n = screen.height; if (z <= 1024) { q = 20 } B = parseInt(n / 100 * s); d = 1020; if (PAGE_ZOOM > 5 && PAGE_ZOOM < 80) { var f = parseInt(d + d / 100 * PAGE_ZOOM); if (f < z) { d = f } } var g = (z - d) / 2 - 15; var u = (n - B) / 2 - q; if (LINK_MAIN_HOST && !A && (!MSG_MAIN_HOST || MSG_MAIN_HOST == "")) { b = LINK_MAIN_HOST + b } if (!k) { k = el("dm_" + c) } if (MOBILE) { var p = window.open(b, "_self") } else {
        var p = window.open(b, "_blank", "toolbar=0,scrollbars=1,resizable=1,left=" + g + ",top=" + u + ",width=" + d + ",height=" + B)
    } if (r) { return p } return false
} var _ad_chk = 0; function ad_chk(obj, type) {
    _ad_chk = 1; try { if (event && event.stopPropagation) { event.stopPropagation() } } catch (e) { } if (!obj || !xmlhttp) { return } var ajax = get_xml_http(); ajax.open("GET", document.location.protocol + "//" + document.location.host + "/w_inc/set.cookie.php?a=0&c=" + obj.value + "&chk=" + obj.checked + (type == 1 ? "&type=1" : "") + "&t=" + new Date(), true); ajax.onreadystatechange = function () { if (ajax.readyState != 4) { return } cmd = ajax.responseText; eval(cmd) }; ajax.setRequestHeader("Accept", "message/x-ajax");
    ajax.send("")
} function check_my_ads(q, p) {
    var g = D.getElementsByName("mid[]"); if (!g || !g.length) { return } var r = g.length; var k, f, d, c, n, b, s; q = Number(q); p = Number(p); for (f = 0; f < r; f++) {
        if (!g[f].id || !(_mid = g[f].id.replace(/^c/, "")) || !(_tr = el("tr_" + _mid))) { continue } c = el("dm_" + _mid); if (!c) { continue } n = c.getAttribute("data"); if (!n) { continue } n = n.split("|"); if (!n || !n[0] || !n[1]) { continue } n = _ph_dec(n[0], n[1], 1); if (!n) { continue } n = n.split("|"); if (n[0]) { n[0] = Number(n[0]) } if (n[1]) { n[1] = Number(n[1]) } if ((!n[0] || n[0] != q) && (!n[1] || n[1] != p)) {
            continue
        } c.className = "my_slud"; if (c.getAttribute("u") == 1) { c.style.textDecoration = "none" } s = c.href.split("?")[0].split("#"); c.href = s[0] + "?" + Math.random() + (s[1] ? "#" + s[1] : ""); if (!_tr.getElementsByTagName || !(k = _tr.getElementsByTagName("td")) || !(b = k.length)) { continue } for (d = 0; d < b; d++) { if (!(o = k.item(d)) || !o.getAttribute || !(n = o.getAttribute("c"))) { continue } if (n == 1) { o.className += " my_slud" } else { if (n == 2) { o.className += " my_slud_big" } } }
    }
} function goad(b) {
    var d = el("dm_" + b); if (!d || !d.href) { return false } try {
        if (event && event.shiftKey) {
            window.open(d.href, "_blank");
            return false
        } else { if (event && event.ctrlKey) { window.open(d.href, "_tabs"); return false } }
    } catch (c) { } try { d.click() } catch (c) { go(d.href) } return false
} function ads_line_init(z, g) {
    var k = false; var f = new Array(); if (window.ontouchstart === null) { k = true } var r = D.getElementsByName("mid[]"); if (!r || !r.length) { return } var A = r.length; var n, u, B, c, d, b, s, q, p, w; for (q = 0; q < A; q++) {
        r[q].onclick = new Function("ad_chk( this, " + z + " );"); if (k) {
            r[q].ontouchstart = new Function("_ad_chk=1;_tstart(event);"); r[q].ontouchmove = new Function("_tmove(event);");
            r[q].ontouchend = new Function("_ad_chk=1;if(_tend(event)){this.click();}return false;")
        } if (g || !r[q].id || !(_mid = r[q].id.replace(/^c/, "")) || !(n = el("tr_" + _mid))) { continue } n.style.cursor = "pointer"; n.onmouseover = function () { _ad_chk = 0; this.style.backgroundColor = "#FAFAFA" }; n.onmouseout = function () { _ad_chk = 0; this.style.backgroundColor = "#FFFFFF" }; b = el("dm_" + _mid); if ((s = el("im" + _mid))) { s.onclick = function () { return false } } if (b && (w = b.getAttribute("onclick"))) {
            n.onclick = new Function("if( _ad_chk ){return;}try{event.returnValue=false;}catch(e){}" + w);
            b.onclick = new Function("event.returnValue=false;return false;")
        } else {
            n.onclick = new Function("if( _ad_chk ){return;}goad(" + _mid + " );"); if (k) { n.ontouchstart = new Function("_ad_chk=0;_tstart(event);"); n.ontouchmove = new Function("_tmove(event);"); n.ontouchend = new Function("if(_tend(event)){this.click();}return false;") } if (b) {
                b.onclick = new Function("_ad_chk=1;"); f = new Array(); if (CAT_OV_ID) { f.push("ov_id=" + CAT_OV_ID) } if (CAT_CID_ID) { f.push("c_id=" + CAT_CID_ID) } if (f && b.href && f.length) {
                    b.href = b.href.split("#")[0] + "#" + f.join("&")
                }
            }
        } if (!n.getElementsByTagName || !(u = n.getElementsByTagName("td")) || !(c = u.length) || !b) { continue } for (p = 0; p < c; p++) { if (!(d = u.item(p)) || !d.getAttribute || !(w = d.getAttribute("c"))) { continue } if (w != 1 && w != 2) { continue } d.innerHTML = '<a onclick="return false;" href="' + b.href + '" class="amopt">' + d.innerHTML + "</a>" }
    }
} function sl(c, b) { ad_chk(c); if (b && b !== 1) { _alert(b) } } function dsl(lg, type, opt) {
    var ajax = get_xml_http(); if (!ajax) { return } if (!lg) { lg = 2 } ajax.open("GET", "/w_inc/set.cookie.php?a=" + (opt == 1 ? 3 : 2) + "&lg=" + lg + (type == 1 ? "&type=1" : "") + "&t=" + new Date(), true);
    ajax.onreadystatechange = function () { if (ajax.readyState != 4) { return } cmd = ajax.responseText; eval(cmd) }; ajax.setRequestHeader("Accept", "message/x-ajax"); ajax.send("")
} function show_data(b, d, f, c) { go(LNK_MAIN_HOST + (b ? "/" + b : "") + "/search-result/?" + d + "=" + f, 2); if (!c) { window.close() } } function x_by_id() { var d = el("ph_td"); var c = el("ph_div"); var b = ""; if (!d || !PHONE_JS) { return } if (c) { b = ' <span id="ph_div" class=td4>( ' + c.innerHTML + " )</span>" } d.innerHTML = PHONE_JS + b; d.style.visibility = "visible" } function img_over(b) {
    b.style.borderBottom = "none";
    b.style.borderTop = "none"; b.vspace = "1"
} function img_out(b) { b.style.borderBottom = "1px #0066CC solid"; b.style.borderTop = "1px #FFFFFF solid"; b.vspace = "0" } function ch_region(b) { if (b == 0) { go(CID_URL + CID_X) } else { go(CID_URL + b + "/" + CID_X) } } function ch_reg(d, b, c) { if (b == 0) { go(d + c) } else { go(d + b + "/" + c) } } function show_logo(d) { var b = el("logodv"); if (!b) { return } if (d.checked == true) { b.style.display = "block" } else { b.style.display = "none" } } function check_referer(c) {
    if (!c) { return true } var b = /(http|https):\/\/(www\.|ss\.|com\.|apollo\.|adm\.|nra\.|tvnet\.|delfi\.|irc\.|novonews\.|gorod\.|inbox\.|sludinajumi\.|ads\.|hits\.|tv\.|)(ss\-com\.top|ss|fotki|inbox|sss\.co|faces|doska|internet|sys|k\.top|d\.top|tv\-ss\.top|)\.(lv|eu|ru|ua|kz|uk|com|lt|by)/i;
    if (b.test(c)) { return true } return false
} var local_hosts = new Array(); local_hosts.nr_ss_mframe = "//nra.ss.lv"; local_hosts.ap_ss_mframe = "//apollo.ss.lv"; local_hosts.auto_ss_mframe = "//auto.lv"; local_hosts.faces_ss_mframe = "//ss.faces.eu"; local_hosts.irc_ss_mframe = "//irc.ss.lv"; local_hosts.tv_ss_mframe = "//tvnet.ss.lv"; local_hosts.novo_ss_mframe = "//novonews.ss.lv"; local_hosts.gorod_ss_mframe = "//gorod.ss.lv"; local_hosts.inb_ss_mframe = "//sludinajumi.inbox.lv"; local_hosts.delf_ss_mframe = "//delfi.ss.lv"; var SS_WEB_IDs = new Array();
SS_WEB_IDs.ap_ss_mframe = 1; SS_WEB_IDs.faces_ss_mframe = 2; SS_WEB_IDs.auto_ss_mframe = 5; SS_WEB_IDs.nr_ss_mframe = 10; SS_WEB_IDs.irc_ss_mframe = 12; SS_WEB_IDs.tv_ss_mframe = 13; SS_WEB_IDs.novo_ss_mframe = 15; SS_WEB_IDs.gorod_ss_mframe = 16; SS_WEB_IDs.inb_ss_mframe = 20; SS_WEB_IDs.delf_ss_mframe = 23; function get_local_referer(c, b) { if (!c || !b) { return false } if (local_hosts[b] && c[b]) { SS_WEB_ID = SS_WEB_IDs[b]; return local_hosts[b] } return false } function glf(d, c) {
    if (!d || !c) { return } var b = get_local_referer(d, c); if (b) {
        LNK_MAIN_HOST = b
    }
} function _glf() { var b = window.opener; for (i in local_hosts) { try { glf(b, i) } catch (c) { } } } function set_val_and_murl(b) { } function check_bad_ref(c) { if (!c) { return false } var b = /(percunpardod)\.lv/i; if (b.test(c)) { return true } return false } function print_phone(c, g) {
    var f; if (!c || !(f = el("ph_td_" + g))) { return } var d = p2 = _js_decode(c); if (MOBILE) {
        var b = el("ptd2_" + g); if (b) {
            b = b.innerHTML; b = b.split(">"); b = b[1]; b = b.split("<"); b = b[0]; b = b.replace("(", ""); b = b.replace(")", ""); p2 = d.replace("-", ""); p2 = p2.replace("-", ""); p2 = p2.replace("-", "");
            p2 = b + "" + p2
        } f.innerHTML = '<a href="tel:' + p2 + '">' + d + "</a>"
    } else { f.innerHTML = d } f.style.visibility = "visible"
} function wclose() { window.close() } function w_close(b) { if (!event) { return } if (b && event.keyCode == 27) { wclose() } var c = el("msg_div_foto"); if (c && c.style.display == "block") { if (navi_prev && event.keyCode == 37) { mnu("foto", navi_prev) } else { if (navi_next && event.keyCode == 39) { mnu("foto", navi_next) } } } } function go_main_page(b) {
    var c = window.opener; if (c) { c.location.href = b ? b : LINK_MAIN_HOST } else { go(b ? b : LINK_MAIN_HOST, 2) } window.close()
} function load_regions(p, d, c) { if (!window.r1 || !window.r2 || !window.r3) { return } if (!p) { p = "region_select" } if (!d && !c) { d = REGION } var k = el(p); if (!k) { return } var b = false; var n, g; if (!r3.lenght) { r3[0] = 0 } for (j in r3) { if (isNaN(j)) { continue } if (!r1[j] || !r2[j]) { continue } if (j > 0) { n = document.createElement("optgroup"); n.label = r3[j]; k.appendChild(n) } for (i in r1[j]) { if (isNaN(i)) { continue } len = k.options.length; b = false; if (r1[j][i] == d) { b = true } k.options[len] = new Option(r2[j][i], r1[j][i]); if (b) { k.options[len].selected = true } } } } var prev_chc = 0;
function ch_c(g, b) { var f = el("chc_" + g); if (!f) { return } var d = el("ahc_" + g); if (f.style.display == "block" || b) { f.style.display = "none"; if (d) { d.style.fontWeight = "normal" } } else { f.style.display = "block"; if (d) { d.style.fontWeight = "bold" } if (prev_chc != g) { ch_c(prev_chc, 1); prev_chc = g } } } var JS_ROOT_CNT = 0; var JS_CNT = 0; function m_compare(c, b) { var d = el("sel_cnt_objr"); if (d && JS_ROOT_CNT <= 1) { _alert(b); return } go(c) } function check_selected_msg(b) { var c = el("sel_cnt_obj"); if (c && JS_CNT > 0) { return true } _alert(b); return false } var TT = new Array();
function ch_region_t(d, f) {
    var c, b, n; var k = el("region_town"); if (!k) { return } k.style.visibility = "hidden"; var g = el("region_town_spn"); k.innerHTML = ""; k.options[0] = new Option("", 0); if (!window.TR || !TR[d]) { if (g) { g.style.display = "none" } return } if (!TR[d].length) { if (g) { g.style.display = "none"; k.options[0] = new Option("", -1) } return } if (g) { g.style.display = "block" } k.style.visibility = "visible"; for (i in TR[d]) {
        if (isNaN(i)) { continue } c = TR[d][i].split("|"); b = c[0]; n = c[1]; if (TT && !TT[b] && TT.length) { continue } j = k.options.length;
        k.options[j] = new Option(n, b); if (f && f == b) { k.options[j].selected = true }
    }
} function change_filter(c, b, f) { var d = el("filter_frm"); if (!d) { c.submit() } if (d["opt[63]"]) { d["opt[63]"].value = f; d.submit() } else { c.submit() } } function gb(d, c) {
    if (!d || !d.href) { return false } if (ss_ref) {
        if (c) { c.returnValue = false } if (wo) {
            var b = d.getAttribute("href"); if (LINK_MAIN_HOST) { b = b.replace(LINK_MAIN_HOST, "") } if (LNK_MAIN_HOST) { b = LNK_MAIN_HOST + b } if (!LNK_MAIN_HOST && wo && wo.parent && wo.parent.location.href) { wo.parent.location.href = b } else {
                wo.location.href = b
            } window.close()
        } return false
    } go(d.href); return false
} function ss_go_back() { var b = el("close_w"); if (b) { b.style.display = "none" } b = el("prev_a"); var f = document.referrer; if (b && f && check_referer(f)) { var c = new Array("/msg/", "/contacts/", "/octa/", "/abuse/", "/reminder/", "&sys_t"); var d = c.length; var g = 0; for (i in c) { m2 = new RegExp(c[i]); if (m2 && m2.test(f)) { break } g++ } if (d == g) { b.href = document.referrer } } } function showonline(b) {
    if (!b) { b = 15 } var c = el("ss_mframe"); if (c) {
        c.src = "/w_inc/checkonline.php?t=" + b + "&r=" + escape(document.location) + "&d=" + new Date()
    }
} var orig_title = window.document.title; function set_chtitle_mode() { chtitle_mode = true } function chtitle(b) { if (!chtitle_mode) { window.document.title = orig_title; return } if (!b) { window.document.title = "* * * * * * * * * * * * * * * * " + orig_title; window.setTimeout("chtitle(1)", 500) } else { window.document.title = orig_title; window.setTimeout("chtitle(0)", 5000) } } function _b64_dec(n) {
    var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; var d, c, b, s, r, q, p, u, k = 0, g = ""; do {
        s = f.indexOf(n.charAt(k++));
        r = f.indexOf(n.charAt(k++)); q = f.indexOf(n.charAt(k++)); p = f.indexOf(n.charAt(k++)); u = s << 18 | r << 12 | q << 6 | p; d = u >> 16 & 255; c = u >> 8 & 255; b = u & 255; if (q == 64) { g += String.fromCharCode(d) } else { if (p == 64) { g += String.fromCharCode(d, c) } else { g += String.fromCharCode(d, c, b) } }
    } while (k < n.length); return g
} function _ph_dec(g, r, k) {
    g = unescape(_b64_dec(g)); var n = r.length; var d = g.length; var c = ""; var q, p; for (var f = 0; f < d; f++) {
        q = g.substring(f, f + 1); p = r.substring(f % n, f % n + 1); if (k == 1) { q = q.charCodeAt(0) - p.charCodeAt(0) } else {
            if (k == 2) {
                q = q.charCodeAt(0) - p.charCodeAt(0) + 14
            } else { q = q.charCodeAt(0) ^ p.charCodeAt(0) }
        } c = c + String.fromCharCode(q)
    } return c
} function _js_decode(b) { return _ph_dec(b, "K0dbVwzGrpLa-wRs2", 2) } function number_format(g, c, f, b) { g = g * 1; var n = g.toFixed(c ? c : 0).toString().split("."); var k = []; for (var d = n[0].length; d > 0; d -= 3) { k.unshift(n[0].substring(Math.max(0, d - 3), d)) } n[0] = k.join(b ? b : ""); return n.join(f ? f : ".") } function set_valuta(d) {
    var b; if (CURRENCY_IDS && document.location && document.location.search && document.location.search.indexOf("currency=") > -1 && (b = document.location.search.match(/(\?|&)currency=(\d+)($|&)/)) && b[2] && CURRENCY_IDS[b[2]]) {
        CURRENCY_ID = b[2];
        return
    } if (!d) { return } var c = 0; for (c in CURRENCY_IDS) { if (c && d["currency_mframe_" + c] && CURRENCY_IDS[c]) { CURRENCY_ID = c; break } }
} function get_currency_data(d, b) { if (!CURRENCY_IDS || !CURRENCY_IDS[d]) { return "" } var c = CURRENCY_IDS[d].split("|"); if (c[b]) { return c[b] } return "" } function chval(b, n, d) {
    var p = el("chvalspn"); if (!p) { return } if (!CURRENCY_ID) { return } var k = CURRENCY_ID; var f, g; for (k in VARR) { v = VARR[k].split("|"); if (v[0] == CURRENCY_ID) { continue } g = v[0]; f = v[1]; break } if (!g) { return } var c = '<a href="javascript:;" class=a20 onclick="CURRENCY_ID=' + g + ";change_price(" + b + ",0,'" + n + "'," + d + ')">' + f + "</a>";
    p.innerHTML = c
} function change_price(r, K, N, C) {
    if (!CURRENCY_ID || !MSG_CURRENCY_ID || MSG_PRICE <= 0 || !r || !CUR_ARR) { if (CURRENCY_ID && MSG_CURRENCY_ID && N && CUR_ARR) { change_opt_prices(N, C) } return } var u = el("tdo_" + r); var F = el("tdm_" + r); var B = el("tdm_" + r + "a"); var A = el("tdm_" + r + "b"); var w = el("currency_2"); if (!u) { return } var E = MSG_PRICE; var H = MSG_PRICE; var f = get_currency_data(MSG_CURRENCY_ID, 0); var z = get_currency_data(CURRENCY_ID, 0); var s = get_currency_data(CURRENCY_ID, 2); var p = get_currency_data(CURRENCY_ID, 1); var M = "";
    var G = ""; var J; if (!s) { return } if (w && CURRENCY_ID_2) {
        var b = 0; if (CURRENCY_ID == DEF_CURRENCY_ID) { b = CURRENCY_ID_2 } else { if (CURRENCY_ID == CURRENCY_ID_2) { b = DEF_CURRENCY_ID } } if (b && !u.getAttribute("str_price_val")) {
            var I = get_currency_data(b, 0); var d = get_currency_data(b, 2); if (f && I && CUR_ARR[f + "-" + I]) { H = MSG_PRICE / CUR_ARR[f + "-" + I] } var q = number_format(H, (H > 50 ? 0 : 2), ".", " ").replace(".00", ""); G = q + " " + d + (MSG_PRICE_STR ? "/" + MSG_PRICE_STR : ""); if (AREA) {
                var g = H / AREA; var c = number_format(g, (g > 50 ? 0 : 2), ".", " ").replace(".00", "");
                G += ' <span style="font-weight:normal;">(' + c + " " + d + "/" + PRICES_STR_IDS[1] + ")</span>"
            } w.innerHTML = G; J = el("currency_2m"); if (J) { J.innerHTML = G } J = el("currency_2a"); if (J) { J.innerHTML = G } J = el("currency_2b"); if (J) { J.innerHTML = G }
        }
    } if (CURRENCY_ID != MSG_CURRENCY_ID && f && z && CUR_ARR[f + "-" + z]) { E = E / CUR_ARR[f + "-" + z] } var k = number_format(E, ((E > 50) ? 0 : 2), ".", " ").replace(".00", ""); M = k + " " + s + (MSG_PRICE_STR ? "/" + MSG_PRICE_STR : ""); if (AREA) {
        var L = E / AREA; var n = number_format(L, (L > 50 ? 0 : 2), ".", " ").replace(".00", ""); M += ' <span style="font-weight:normal;">(' + n + " " + s + "/" + PRICES_STR_IDS[1] + ")</span>"
    } u.innerHTML = M; if (F) { F.innerHTML = M } if (B) { B.innerHTML = M } if (A) { A.innerHTML = M } if (!K) { chval(r, N, C) } change_opt_prices(N, C)
} function change_opt_prices(s, g) {
    s = s.split(","); if (!s || !s.length || !PRICES_STR_IDS) { return } var p, w, k, q, A, z, E, u, b, B, c; var n = ""; var d = ""; var r = ""; var f = 0; var C = ""; for (A in s) {
        p = el("tdo_" + s[A]); w = el("tdo2_" + s[A]); if (!p) { continue } k = p.getAttribute("str_price_val"); if (!k) { continue } k = k.split("|"); if (!k || !k.length) { continue } E = c = ""; for (z in k) {
            q = k[z].split(","); n = get_currency_data(CURRENCY_ID, 3);
            d = get_currency_data(MSG_CURRENCY_ID, 0); r = get_currency_data(CURRENCY_ID, 0); u = price2 = q[0]; if (CURRENCY_ID != MSG_CURRENCY_ID && d && r && CUR_ARR[d + "-" + r]) { u = u / CUR_ARR[d + "-" + r] } f = number_format(u, ((u > 50) ? 0 : 2), ".", " ").replace(".00", ""); E += (z > 0 ? " (" : "") + f + " " + n + ((q[1] && PRICES_STR_IDS[q[1]]) ? "/" + PRICES_STR_IDS[q[1]] : "") + (z > 0 ? ")" : ""); if (g && CURRENCY_ID_2 && DEF_CURRENCY_ID) {
                b = CURRENCY_ID == CURRENCY_ID_2 ? DEF_CURRENCY_ID : CURRENCY_ID_2; r = get_currency_data(b, 0); n = get_currency_data(b, 3); if (d && r && CUR_ARR[d + "-" + r]) {
                    price2 = price2 / CUR_ARR[d + "-" + r]
                } f = number_format(price2, ((price2 > 50) ? 0 : 2), ".", " ").replace(".00", ""); c += (z > 0 ? " (" : "") + f + " " + n + ((q[1] && PRICES_STR_IDS[q[1]]) ? "/" + PRICES_STR_IDS[q[1]] : "") + (z > 0 ? ")" : "")
            }
        } if (w) { p.innerHTML = E; w.innerHTML = c } else { C = E + (c ? ' <div class="cc2">' + c + "</div>" : ""); p.innerHTML = C }
    }
} function show_hide_preload_frame(d, f) {
    var g = el("preload_frame_dv"); if (!g) { return } if (d) { g.style.display = "block" } else {
        g.style.display = "none"; if (f) {
            var c = window.frames[f.name]; if (c) {
                var b = c.document.body.scrollHeight; if (b < 200) { b = 200 } f.style.height = b + "px"
            }
        }
    }
} function show_banner() { var b = el("cal_banner_iframe"); if (!b || !CALC_BANNER_URL) { return } b.src = CALC_BANNER_URL + "&sys_t1=" + number_format(CALC_PRICE, 0) + "&sys_t2=" + CALC_VALUTA } function whash_change() { if (window.location.hash && window.location.hash.match(/^#mode=calc(\S+)/)) { h = RegExp.$1; e = h.match(/&url=(\S+?)$/); var b = RegExp.$1; if (b) { mnu("calc", 0, 0, b) } } else { if (window.location.hash && window.location.hash.match(/^#mode=msg/)) { mnu("msg") } } } var msg_obj = foto_tbl_obj = ""; var mnu_array = new Array("msg", "foto", "spec", "map", "cont", "remind", "abuse", "special");
var o, o2, navi_prev, navi_next; var img_prev = new Image(); var img_next = new Image(); var bnr_reload = false; var map_loaded = false; var IMG_HOST = ""; var view_img = new Array(); var viewed_img = 0; var tmp_html = ""; function resize_price_td() { o = el("pprice_td"); if (o && o.clientWidth) { o2 = el("price_td"); if (o2) { o2.width = o.clientWidth + 8 } } } function gomsg() { mnu("msg") } function get_usr_gallery_file_dir(c) { var b = MSG_GALLERY_DIR + Math.ceil(c / 10000000) + "/" + Math.ceil(c / 50000) + "/" + Math.ceil(c / 200) + "/"; return b } function get_usr_gallery_file_name(d, c) {
    var b = IMG_HOST + "/" + get_usr_gallery_file_dir(d) + (MSG_GALLERY_PREFIX ? MSG_GALLERY_PREFIX : "") + d + (c ? "." + c : "") + ".jpg";
    return b
} function check_view_img(c, b) { var d = 0; for (i = 0; i <= b; i++) { if (!c[i]) { continue } d++ } if (d >= b && viewed_img > b) { return true } return false } function get_image_info(d) {
    if (!d || !msg_img[d]) { return false } if (_img_preloaded[d]) { return _img_preloaded[d] } var b = msg_img[d].split("|"); var c = false; b[0] = parseInt(b[0]); b[1] = parseInt(b[1]); b[2] = parseInt(b[2]); b[3] = parseInt(b[3]); if (b[3]) { c = get_usr_gallery_file_name(b[3], "800") } else { c = msg_img_dir + PREF + b[0] + "." + IMG_SIZE + ".jpg" } _img_preloaded[d] = new Image(b[1], b[2]); _img_preloaded[d].src = c;
    return _img_preloaded[d]
} function _get_hd_image(b) { if (!(o = msg_img[b]) || !(o = o.split("|")) || !o[4]) { return false } return [o[4], Number(o[5])] } function hd_image_open(c, b) { if (!c) { return false } if (!(o = el("hd_image"))) { return false } var d = "/hd-image/?lid=" + SS_Lang + "&img=" + escape(c); http_get(d + "&mode=check&d=" + escape(new Date()), hd_image_show); return } function hd_image_action(b) {
    if (!b || !b.type) { return false } var c = arguments.callee; if (!c.once) {
        c.once = true; c.isDown = false; c.offset = { X: 0, Y: 0, top: 0, left: 0 }; c.move = { X: 0, Y: 0 };
        c.dv = el("hd_image")
    } if (!c.dv) { return } if (b.type == "mousedown") { b.preventDefault(); c.isDown = true; c.offset = { X: b.clientX, Y: b.clientY, top: c.dv.scrollTop, left: c.dv.scrollLeft } } else {
        if (b.type == "mouseup" || b.type == "mouseout") { b.stopPropagation(); c.isDown = false; c.move = { X: (c.offset.X - b.clientX), Y: (c.offset.Y - b.clientY) } } else {
            if (b.type == "mousemove") { b.stopPropagation(); if (!c.isDown) { return } c.dv.scrollTop = c.offset.top + (c.offset.Y - b.clientY); c.dv.scrollLeft = c.offset.left + (c.offset.X - b.clientX) } else {
                if (b.type == "click") {
                    b.stopPropagation();
                    if (Math.abs(c.move.X) > 1 || Math.abs(c.move.Y) > 1) { return } hd_image_close()
                }
            }
        }
    }
} function hd_image_show(d) {
    if (!d || d.substring(0, 2) != "OK" || !(d = d.substring(2)) || !(data = JSON.parse(d)) || !data.res) { return false } if (data.res != "OK") { if (data.err) { _alert(data.err) } return false } if (!data.data) { return false } if (!(o = el("hd_image"))) { return false } var k = IMG_HOST + "/hd-image/?img=" + escape(data.data) + "&key=" + escape(data.key); var c = ""; c += '<table border=0 width="100%" height="100%" bgcolor="#000" cellpadding=0 cellspacing=0 oncontextmenu="return false"><tr><td align=center valign=center>';
    c += '<img onclick="hd_image_action(event,\'click\');return false;" src="' + k + '" width="auto" height="auto" oncontextmenu="return false" border=0 ontouchstart="_tstart(event);" ontouchmove="_tmove(event);"  ontouchend="if(_tend(event)){this.click();}return false;">'; c += '<div onclick="event.stopPropagation();hd_image_close();return false;" title="' + navi_title.close + '" ontouchstart="_tstart(event);" ontouchmove="_tmove(event);"  ontouchend="if(_tend(event)){this.click();}return false;" oncontextmenu="return false" style="z-index:15;width:43px;height:43px;cursor:pointer;position:fixed;top:0px;right:20px;background: url( \'' + IMG_HOST + "/img/close_v2.png' ) no-repeat;\"></div>";
    c += "</td></tr></table>"; o.style.width = "100%"; o.style.height = "100%"; o.innerHTML = c; o.style.display = "block"; D.documentElement.style.overflowX = "hidden"; D.documentElement.style.overflowY = "hidden"; var b = D.location.href.split("#"); if (b[1]) { b[1] = b[1].replace(/(\&|\#)hd\-image\=1/gi, "") } var g = b[0] + "#" + (b[1] ? b[1] + "&" : "") + "hd-image=1"; var f = !b[1] ? (b[0] + "#photo-1") : ""; if (f) { history.replaceState(null, null, f) } history.pushState(null, null, g)
} function hd_image_close(b) {
    if (!(o = el("hd_image"))) { return false } o.style.display = "none";
    D.documentElement.style.overflowX = "auto"; D.documentElement.style.overflowY = "scroll"; if (b == true) { return } history.go(-1)
} function _get_photo_id_by_hash() { var b = document.location.href.split("#"); if (!b[1]) { return false } b = b[1].split("&"); for (i in b) { if ((id = b[i].split("photo-")) && (id = Number(id[1]))) { return id } } } function _change_photo_by_hash() { if ((_id = _get_photo_id_by_hash())) { hd_image_close(true); big_pic(_id); return _id } return false } function mnu(mode, id, reload, data, auto) {
    if (mode == "foto" || mode == "foto1") {
        var cc = arguments.callee;
        if (!cc.once) { cc.once = true; window.addEventListener("resize", function () { if (!CUR_BIG_PIC) { return } var cw = (el("main_table") || {}).scrollWidth || 0; var skip = cc.prevcw == null || cc.prevcw == cw; cc.prevcw = cw; if (skip) { return } cc("foto", CUR_BIG_PIC) }) }
    } var obj_id = "msg_div_preload"; if (mode == "map") { obj_id = "msg_div_map" } else { CLEAR_PRELOAD_DIV = false } var msg_obj = el(obj_id); if (!msg_obj) { return } var special = new Array("preload", "map"); for (i in special) {
        if (special[i] != mode && (o = el("msg_div_" + special[i]))) {
            o.style.display = "none"
        }
    } if (mode != "foto" && mode != "foto1") { view_img = Array(); viewed_img = 0; bnr_reload = false } switch (mode) {
        case "msg": CUR_BIG_PIC = false; window.scrollTo(0, 0); _clear_preload_div(); break; case "foto": case "foto1": msg_obj.style.display = "block"; viewed_img++; var img = get_image_info(id); if (!img) { break } if (reload != 0) { view_img[id] = true } navi_prev = id - 1; if (!msg_img[navi_prev]) { if (!MAX_NAVI) { MAX_NAVI = 1 } navi_prev = MAX_NAVI } navi_next = id + 1; if (!msg_img[navi_next]) { navi_next = 1 } CUR_BIG_PIC = id; var html = ""; html += "<div" + (MAX_NAVI <= 1 ? ' onclick="if(window.ontouchstart=== null){return;}gomsg();window.scrollTo(0,0);" ontouchend="this.click();return false;"' : "") + ' onmouseover="show_pic_menu(1);" oncontextmenu="return false;" onmouseout="show_pic_menu(0);" ontouchstart="show_pic_menu(1);" style="position:relative;display:block;width:100%;max-width:100%;overflow:hidden;border:1px #CCC solid;cursor:pointer;margin:-1px;" align=center id="big_pic_div">';
            html += '<div align=center id="img_div_scroll" style="position:relative;display:block;z-index:2;">'; html += '<img onclick="this.blur();" style="display:block;width:100%;height:100%;position:relative;" onload="play_image();" onfocus="this.blur();" id="msg_img_img" border=0>'; if (MAX_NAVI > 1) {
                html += '<div onclick="el(\'navi_prev\').click();return false;" ontouchstart="_tstart(event);" ontouchmove="_tmove(event);"  ontouchend="if(_tend(event)){this.click();}return false;" id="navi_prev2" style="position:absolute;top:0px;left:0px;" title="' + navi_title.prev + '"><img src="' + IMG_HOST + '/img/p.gif" width="100%" height="100%"></div>';
                html += '<div onclick="el(\'navi_next\').click();return false;" ontouchstart="_tstart(event);" ontouchmove="_tmove(event);"  ontouchend="if(_tend(event)){this.click();}return false;" id="navi_next2" style="position:absolute;top:0px;left:0px;" title="' + navi_title.next + '"><img src="' + IMG_HOST + '/img/p.gif" width="100%" height="100%"></div>'
            } html += "</div>"; if (MAX_NAVI > 1) {
                html += '<div onmouseout="show_pic_menu(0);" onmouseover="show_pic_menu(1)" id="pic_menu_prev" onclick="mnu(\'foto\', ' + navi_prev + ');return false;" title="' + navi_title.prev + '" ontouchstart="_tstart(event);" ontouchmove="_tmove(event);"  ontouchend="if(_tend(event)){this.click();}return false;" style="z-index:15;width: 36px; height: 43px; position: absolute; top:50%; left: 0px; background: url( \'' + IMG_HOST + "/img/left.png' ) no-repeat;\"></div>";
                html += '<div onmouseout="show_pic_menu(0);" onmouseover="show_pic_menu(1)" id="pic_menu_next" onclick="mnu(\'foto\', ' + navi_next + ');return false;" title="' + navi_title.next + '" ontouchstart="_tstart(event);" ontouchmove="_tmove(event);"  ontouchend="if(_tend(event)){this.click();}return false;" style="z-index:15;width:36px;height:43px;position:absolute;top:50%;right:0px;background: url( \'' + IMG_HOST + "/img/right.png' ) no-repeat;\"></div>"; html += '<div id="navi_prev" ontouchstart="_tstart(event);" ontouchmove="_tmove(event);"  ontouchend="if(_tend(event)){this.click();}return false;" style="width:30%;height:100%;top:0px;left:0px;position:absolute;" title="' + navi_title.prev + '"><img src="' + IMG_HOST + '/img/p.gif" width="100%" height="100%"></div>';
                html += '<div id="navi_next" ontouchstart="_tstart(event);" ontouchmove="_tmove(event);"  ontouchend="if(_tend(event)){this.click();}return false;" style="width:70%;height:100%;top:0px;left:30%;position:absolute;;" title="' + navi_title.next + '"><img src="' + IMG_HOST + '/img/p.gif" width="100%" height="100%"></div>'
            } if ((_hd_image = _get_hd_image(id))) {
                html += '<div style="z-index:25;width:30%;height:70%;top:15%;left:35%;position:absolute;" title="' + navi_title.hd + '" onclick="event.stopPropagation();hd_image_open(\'' + _hd_image[0] + "'," + _hd_image[1] + ');return false;" ontouchstart="_tstart(event);" ontouchmove="_tmove(event);"  ontouchend="if(_tend(event)){this.click();}return false;"><img src="' + IMG_HOST + '/img/p.gif" width="100%" height="100%"></div>';
                html += '<div onmouseout="show_pic_menu(0);" onmouseover="show_pic_menu(1)" title="' + navi_title.hd + '" id="pic_menu_hd" onclick="event.stopPropagation();hd_image_open(\'' + _hd_image[0] + "'," + _hd_image[1] + ');return false;" ontouchstart="_tstart(event);" ontouchmove="_tmove(event);"  ontouchend="if(_tend(event)){this.click();}return false;" style="z-index:25;width:43px;height:43px;cursor:pointer;position:absolute;top:0px;right:50px;background: url( \'' + IMG_HOST + "/img/hd_v2.png' ) no-repeat;\"></div>"
            } html += '<div onmouseout="show_pic_menu(0);" onmouseover="show_pic_menu(1)" title="' + navi_title.close + '" id="pic_menu_close" onclick="event.stopPropagation();mnu(\'msg\');return false;" ontouchstart="_tstart(event);" ontouchmove="_tmove(event);"  ontouchend="if(_tend(event)){this.click();}return false;" style="z-index:15;width:43px;height:43px;cursor:pointer;position:absolute;top:0px;right:0px;background: url( \'' + IMG_HOST + "/img/close_v2.png' ) no-repeat;\"></div>";
            html += '<img id="msg_img_load" src="' + IMG_HOST + '/img/wait_img.gif" border=0 style="display:none;position:absolute;top:50%;left:50%;" width=32 height=32>'; html += "</div>"; msg_obj.innerHTML = html; var img_obj = el("msg_img_img"); if (!img_obj) { return false } if ((o = el("msg_img_load"))) { o.style.display = "block" } img_obj.src = img.src; fix_img_position(img); img_obj.next_id = navi_next; img_obj.prev_id = navi_prev; if ((o = el("navi_prev"))) { o.onclick = new Function('mnu( "foto", ' + navi_prev + " );return false;") } if ((o = el("navi_next"))) {
                if (check_view_img(view_img, MAX_NAVI)) {
                    var loc = D.location.href.split("#")[0];
                    if (loc != D.location.href) { history.replaceState(null, null, loc) } gomsg(); window.scrollTo(0, 0); break
                } else { o.onclick = new Function('mnu( "foto", ' + navi_next + " );return false;") }
            } if (mode != "foto1") { var loc = D.location.href.split("#")[0] + (id > 0 ? "#photo-" + id : ""); if (loc != D.location.href) { history.replaceState(null, null, loc) } } break; case "map": window.scrollTo(0, 0); msg_obj.style.display = "block"; if (data == map_loaded) { return } if (!(o = window.frames.google_map)) { break } o.location.replace(data); map_loaded = data; break; case "octa": window.open(data, "_blank");
            break; CLEAR_PRELOAD_DIV = true; window.scrollTo(0, 0); msg_obj.style.display = "block"; msg_obj.innerHTML = '<div id="msg_div_preloader" style="height:530px;"><a class=a9a href="javascript:;" onclick="mnu(\'msg\');">' + return_to_msg + '</a><br><iframe name="octa_frame" id="octa_frame" frameborder=0 style="border:1px #CCCCCC solid;" width="100%" height="100%"></iframe></div>'; if (!(o = window.frames.octa_frame)) { break } o.location.replace(data); break; case "calc": window.scrollTo(0, 0); var ajax = get_xml_http(); if (!ajax || !data) {
                break
            } load_script_async("//" + document.location.host + data + "&mode=script"); msg_obj.innerHTML = '<img src="' + IMG_HOST + '/img/wait.gif">'; msg_obj.style.display = "block"; ajax.open("GET", "//" + document.location.host + data, true); ajax.onreadystatechange = function () { if (ajax.readyState != 4) { return } cmd = ajax.responseText.split("\t||\t"); msg_obj.innerHTML = cmd[0]; if (cmd[1]) { eval(cmd[1]) } }; ajax.setRequestHeader("Accept", "message/x-ajax"); ajax.send(""); window.scrollTo(0, 0); var BaseURL = document.location.href.split("#")[0]; window.location.replace(BaseURL + "#");
            break
    }
} function get_big_pic_max_height(f) { if (!f || !el("main_table") || !window.IMG_WH) { return false } var d = parseInt(D.documentElement.clientHeight ? D.documentElement.clientHeight : D.body.clientHeight); var b = el("main_table").clientHeight; var c = parseInt(f.clientWidth / IMG_WH); d = (d - b - 70); if (d < c && d / c > 0.85) { c = d } return c } function fix_img_position(f) {
    var b = el("big_pic_div"); var A = el("msg_img_img"); var s = el("img_div_scroll"); var g = el("navi_prev"); var q = el("navi_next"); var n = el("navi_prev2"); var w = el("navi_next2");
    if (!b || !A || !s) { return } if (!f) { f = new Image(); f.src = A.src } var u, d; var r = get_big_pic_max_height(b); if (!r) { return } var z = f.width * 1.5; b.style.height = r + "px"; b.style.width = (b.clientWidth) + "px"; var c = f.width / f.height; if (c >= 1) {
        if (c >= 2) { z = f.width } s.onmousewheel = new Function(""); if (g && q) { g.style.zIndex = 10; q.style.zIndex = 10 } u = b.clientWidth; d = u / c; if (d < r) { d = b.clientHeight; u = d * c } if (u > z) { u = z } d = u / c; if (d > r && u >= z) { d = r; u = d * c } d = u / c; A.style.width = parseInt(u) + "px"; A.style.height = parseInt(d) + "px"; A.style.left = ((u > b.clientWidth) ? -parseInt((u - b.clientWidth) / 2) : "0") + "px";
        A.style.top = -parseInt((d - r) / 2) + "px"
    } else {
        u = b.clientWidth / IMG_WH; if (u > z) { u = z } d = u / c; s.style.height = r + "px"; s.style.overflowY = "scroll"; s.style.overflowX = "hidden"; s.style.width = u + "px"; s.style.width = parseInt(u + (u - s.clientWidth)) + "px"; if ("onmousewheel" in document) { s.onmousewheel = new Function("this.scrollTop += -event.wheelDelta; return false;") } else { s.addEventListener("wheel", onImgWheel) } var k = parseInt(b.clientWidth / 100 * 30 - (b.clientWidth - u) / 2); A.style.width = parseInt(u) + "px"; A.style.height = parseInt(d) + "px";
        s.scrollTop = parseInt((d - b.clientHeight) / 2); if (g && q) { g.style.zIndex = 0; q.style.zIndex = 0 } if (n && w) { n.style.width = k + "px"; n.style.height = parseInt(d) + "px"; w.style.left = k + "px"; w.style.width = parseInt(u - k - 5) + "px"; w.style.height = parseInt(d) + "px" }
    }
} function onImgWheel(d) { if (!d) { return false } var c = el("img_div_scroll"); var b = c.scrollHeight - c.clientHeight; if (c.scrollTop >= b) { c.scrollTop = b - 1; return false } if (c.scrollTop <= 0) { c.scrollTop = 1; return false } return true } function big_pic(d, b, c) {
    if (b) { b.returnValue = false } if (!c) {
        c = "foto"
    } mnu(c, d, 0); window.scrollTo(0, 0); return false
} function play_image() { o = el("msg_img_load"); if (o) { o.style.display = "none" } var b = el("msg_img_img"); if (!b) { return } if (IMG_SIZE == 800) { if (b.next_id) { get_image_info(b.next_id) } if (b.prev_id) { get_image_info(b.prev_id) } } } eval(function (n, b, r, f, g, q) {
    g = function (d) { return d.toString(36) }; if (!"".replace(/^/, String)) { while (r--) { q[r.toString(b)] = f[r] || r.toString(b) } f = [function (c) { return q[c] }]; g = function () { return "\\w+" }; r = 1 } while (r--) {
        if (f[r]) {
            n = n.replace(new RegExp("\\b" + g(r) + "\\b", "g"), f[r])
        }
    } return n
}("4 7(1,0){0=0*6-3+5;9 8(1,b a(0),2)}", 12, 12, "key|data||47289|function|517||gpzd|_ph_dec|return|String|new".split("|"), 0, {})); function reload_bnr() { var b = el("msgbnr"); if (!b) { return } b.src = b.src } function reload_cntr() { var c = el("frmcntr"); if (!c) { return } var b = new Date(); c.src = "/image.php?t=" + b } function show_pic_menu(b) {
    o2 = "none"; if (b) { o2 = "block" } if ((o = el("pic_menu_close"))) { o.style.display = o2 } if ((o = el("pic_menu_hd"))) { o.style.display = o2 } if (MAX_NAVI < 2) { o2 = "none" } if ((o = el("pic_menu_next"))) {
        o.style.display = o2
    } if ((o = el("pic_menu_prev"))) { o.style.display = o2 }
} var SS_PREF = ""; function getHexRGBColor(b) { b = b.replace(/\s/g, ""); var d = b.match(/^rgb\((\d{1,3}[%]?),(\d{1,3}[%]?),(\d{1,3}[%]?)\)$/i); if (d) { b = ""; for (var c = 1; c <= 3; c++) { b += Math.round((d[c][d[c].length - 1] == "%" ? 2.55 : 1) * parseInt(d[c])).toString(16).replace(/^(.)$/, "0$1") } } else { b = b.replace(/^#?([\da-f])([\da-f])([\da-f])$/i, "$1$1$2$2$3$3") } return "#" + b } function af(m, lg, action) {
    var ajax = get_xml_http(); if (!ajax) { return } ajax.open("GET", "/w_inc/add_to_favorites.php?lg=" + lg + "&m=" + m + (action ? "&action=" + escape(action) : "") + "&d=" + new Date(), true);
    ajax.onreadystatechange = function () { if (ajax.readyState != 4) { return } cmd = ajax.responseText; if (cmd) { eval(cmd) } }; ajax.setRequestHeader("Accept", "message/x-ajax"); ajax.send("")
} function ch_web_data() {
    if (SS_WEB_ID != 1 && SS_WEB_ID != 5 && SS_WEB_ID != 10 && SS_WEB_ID != 12 && SS_WEB_ID != 13 && SS_WEB_ID != 15 && SS_WEB_ID != 16 && SS_WEB_ID != 20) { return } var b; var c; var d = el("mhead_td"); if (!d) { return } if (SS_WEB_ID == 1) { b = "#e75135"; c = "apollo" } else {
        if (SS_WEB_ID == 5) { b = "#6985c0" } else {
            if (SS_WEB_ID == 10) { b = "#cc0000"; c = "nra" } else {
                if (SS_WEB_ID == 12) {
                    b = "#0b6d9a";
                    c = "irc"
                } else { if (SS_WEB_ID == 15) { b = "#3399cc"; c = "novonews" } else { if (SS_WEB_ID == 16) { b = "#20505f"; c = "gorod" } else { if (SS_WEB_ID == 20) { b = "#3e695a"; c = "inbox" } else { if (SS_WEB_ID == 13) { if (SS_Lang == "1") { b = "#ff6600"; c = "tvnet.ru" } else { if (SS_Lang == "2") { b = "#ff6600"; c = "tvnet.lv" } } } } } } }
            }
        }
    } if (b) { d.style.backgroundImage = "none"; d.style.backgroundColor = b }
} function reload_img_src(b, c) { if (!b || !c) { return } b.src = c + "&" + escape(Math.random()) } function open_stat_link(k, c, f, d) {
    var g; if (d == -1 || !(g = el(k))) { return } var b = g.innerText; if (!b) {
        return
    } b = b.split("("); b = b[0]; g.innerHTML = '<a rel="nofollow" class=a9a target="_blank" href="' + (LNK_MAIN_HOST + (c ? "/" + c : "") + "/search-result/?" + f + "=" + OPEN_STAT_LNK) + '">' + b + "</a>" + (d > 0 ? "(" + d + ")" : ""); g.style.display = "block"
} function open_stat_lnk(b) {
    var c = el("show_cnt_stat"); if (c && ADS_STAT[4]) { c.innerHTML = ADS_STAT[4] } if (!OPEN_STAT_LNK) { return } open_stat_link("phtd", b, "t", ADS_STAT[0]); open_stat_link("phtd2", b, "t2", ADS_STAT[1]); open_stat_link("phtd3", b, "t3", ADS_STAT[2]); open_stat_link("emtd", b, "e", ADS_STAT[3])
} function try_open_stat_lnk(b) { var c = arguments.callee; if (document.readyState == "loading") { if (c.once2) { return } c.once2 = true; document.addEventListener("readystatechange", function () { c(b) }); return } if (c.once) { return } c.once = true; open_stat_lnk(b) } var SCROLL_INTERVAL = false; var no_dv_scroll = false; function ch_bnr_place() { var b = el("page_right"); var c = el("page_main"); if (b && c) { b.style.left = Math.ceil(c.clientWidth + 10) + "px" } PAGE_WIDTH = get_page_width() } function ch_bnr_h(c) {
    var b = el("page_right"); var f = el("page_main");
    if (!b || !f) { return } var d = 0; if ((d = b.clientHeight) && d > f.clientHeight) { f.style.height = d + 10 + "px" } scbnrtop()
} function scbnrtop() { if (no_dv_scroll || 1) { scbnrtop_fixed(); return } var b = parseInt(D.documentElement.scrollTop ? D.documentElement.scrollTop : D.body.scrollTop); window.setTimeout("scbnrtop_start(" + b + ")", 300) } function scbnrtop_fixed() {
    var d = el("page_right"); var f = el("page_footer"); if (!d || !f) { return } var c = parseInt(D.documentElement.scrollTop ? D.documentElement.scrollTop : D.body.scrollTop); var q = f.clientHeight + 20;
    var n = parseInt(D.documentElement.clientHeight ? D.documentElement.clientHeight : D.body.clientHeight); var g = parseInt(D.documentElement.scrollHeight ? D.documentElement.scrollHeight : D.body.scrollHeight); var s = d.clientHeight - n + q; var p = g - n; var u = true; var r = 48; if (d.clientWidth >= 300) { r = 60 } var b = 0; if (s > 0) { if ((p - c) < s) { b = p - c - s; u = false } } var k = d.style.position; if (c > r && u) { if (k != "fixed" || d.style.top != "5px") { d.style.position = "fixed"; d.style.top = "5px" } } else {
        if (b < 0) {
            if (k != "fixed") { d.style.position = "fixed" } d.style.top = (b + 5) + "px"
        } else { if (k != "absolute") { d.style.position = "absolute"; d.style.top = "0px" } }
    }
} function scbnrtop_scroll(g) {
    var p = el("page_right"); if (!p) { return } var A = parseInt(p.style.top); var r = parseInt(D.documentElement.scrollTop ? D.documentElement.scrollTop : D.body.scrollTop); var n = p.clientHeight; var d = parseInt(D.documentElement.scrollHeight ? D.documentElement.scrollHeight : D.body.scrollHeight); var w = d; var c = el("main_table").clientHeight + 10; if ((r + n) > (d - 60)) { r = d - n - 110 } else { if (r > c) { r -= c } else { r = 0 } } var k = Math.abs(A - r); var f = 10;
    var z = 50; if (g < 150) { z = 10 } f = Math.abs(z / g * k); if (f < 5) { f = 5 } if (r > A) { if ((r - A) > n) { p.style.top = (r - n) + "px"; A = parseInt(p.style.top) } p.style.top = (A + f) + "px"; A = parseInt(p.style.top); if (n > w && (A + n) >= (r + w)) { p.style.top = (A - f) + "px"; clearInterval(SCROLL_INTERVAL); return } if (r <= A) { p.style.top = r + "px"; clearInterval(SCROLL_INTERVAL) } } else {
        if (r < A) {
            var q = (D.documentElement.offsetHeight); var u = (D.documentElement.scrollTop ? D.documentElement.scrollTop : D.body.scrollTop); if (A > (q + u)) {
                p.style.top = (q + u) + "px"; A = parseInt(dv.style.top)
            } p.style.top = (A - f) + "px"; if (r >= A) { p.style.top = r + "px"; clearInterval(SCROLL_INTERVAL) }
        } else { clearInterval(SCROLL_INTERVAL) }
    }
} function scbnrtop_start(d) { var c = el("page_right"); var b = parseInt(D.documentElement.scrollTop ? D.documentElement.scrollTop : D.body.scrollTop); if (d == b) { if (SCROLL_INTERVAL) { clearInterval(SCROLL_INTERVAL) } SCROLL_INTERVAL = setInterval("scbnrtop_scroll(" + Math.abs(parseInt(c.style.top) - c.clientHeight - b) + ")", 10) } } var _google_ad_client = _google_ad_slot = _google_ad_width = _google_ad_height = _g_count = _google_ad_border = false;
function _sys_shadows(c, b) { var d = el(c); if (d) { d.innerHTML = '<img src="' + document.location.protocol + '//bnr.ss.com/img/shadow.jpg" width=250 height=20 border=0>' } d = el(b); if (d) { d.style.border = "1px #CCCCCC solid" } } function print_ccnt() {
    if (!js_cnt) { return } var b = 0; var d; var c; var f = el("cnt_span"); if (f && js_cnt_main) { f.innerHTML = "(" + js_cnt_main + ")" } for (i in js_cnt) {
        d = el("spn_" + i); c = el("sc_" + i); if (d || c) {
            if (js_cnt[i]) {
                if (c) { c.innerHTML = c.innerHTML + ' <span class="category_cnt">(' + js_cnt[i] + ")</span>" } else {
                    d.innerHTML = "(" + js_cnt[i] + ")"
                }
            }
        }
    }
} function print_ccnts() { var f = el("today_cnt_sl"); var c, d, b; if (!f || !js_cnts) { return } b = f.options.length; if (b > 1) { return } for (d in js_cnts) { c = js_cnts[d].split("|"); if (!c[0] || !c[1]) { continue } b = f.options.length; f.options[b] = new Option(c[0], c[1]) } } function LoadMyJs(d) { var c = document.getElementsByTagName("head")[0]; var b = document.createElement("script"); if (!c || !b) { return } b.type = "text/javascript"; b.src = d; c.appendChild(b) } var hand_opt = new Array(); function change_filter_type(c, f, b) {
    if (!c) { return } if (!b) {
        if (!hand_opt || !hand_opt[c[c.selectedIndex].value]) {
            return
        }
    } var d = el("foptfld_" + f); if (!d) { return } d.innerHTML = '<input name="topt[' + f + ']" id="' + c.id + '" class="filter_txt" type=text value="" maxlength=15 style="width:' + (c.clientWidth - 2) + 'px;">'; return true
} function get_page_zoom() {
    var b = navigator.userAgent; if (b && b.indexOf("Chrome") >= 0) { PAGE_ZOOM = BROWSER_ZOOM = 1 } else {
        if (b && b.indexOf("Opera") >= 0 && window.top.outerWidth) { PAGE_ZOOM = Math.ceil((window.top.outerWidth / window.top.innerWidth) * 100) - 100; BROWSER_ZOOM = PAGE_ZOOM } else {
            if (screen.deviceXDPI && screen.logicalXDPI) {
                BROWSER_ZOOM = Math.ceil(screen.deviceXDPI / screen.logicalXDPI * 100) - 100
            } else { BROWSER_ZOOM = Math.ceil((Math.abs(window.orientation) == 90 ? screen.height : screen.width) / window.innerWidth * 100) - 100 }
        }
    }
} function close_other_web(b) { CLOSE_LNK = true; close_stat_link("main2_tbl"); close_stat_link("calc_td"); CURRENCY_ID = b } function get_client_iinfo() { if (!navigator) { return } var c = /; MobV\/([\d.]+)\(([\d]+),([\d]+),([\d]+)\)/i; var b = c.exec(navigator.userAgent); if (navigator && navigator.userAgent && b) { CLIENT_INFO = { version: b[1], codev: b[2], api: b[3], actionBar: Number(b[4]) } } } get_client_iinfo(); var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (d) {
        var b = "";
        var r, p, k, q, n, g, f; var c = 0; d = Base64._utf8_encode(d); while (c < d.length) { r = d.charCodeAt(c++); p = d.charCodeAt(c++); k = d.charCodeAt(c++); q = r >> 2; n = ((r & 3) << 4) | (p >> 4); g = ((p & 15) << 2) | (k >> 6); f = k & 63; if (isNaN(p)) { g = f = 64 } else { if (isNaN(k)) { f = 64 } } b = b + this._keyStr.charAt(q) + this._keyStr.charAt(n) + this._keyStr.charAt(g) + this._keyStr.charAt(f) } return b
    }, decode: function (d) {
        var b = ""; var r, p, k; var q, n, g, f; var c = 0; d = d.replace(/[^A-Za-z0-9\+\/\=]/g, ""); while (c < d.length) {
            q = this._keyStr.indexOf(d.charAt(c++)); n = this._keyStr.indexOf(d.charAt(c++));
            g = this._keyStr.indexOf(d.charAt(c++)); f = this._keyStr.indexOf(d.charAt(c++)); r = (q << 2) | (n >> 4); p = ((n & 15) << 4) | (g >> 2); k = ((g & 3) << 6) | f; b = b + String.fromCharCode(r); if (g != 64) { b = b + String.fromCharCode(p) } if (f != 64) { b = b + String.fromCharCode(k) }
        } b = Base64._utf8_decode(b); return b
    }, _utf8_encode: function (d) {
        d = d.replace(/\r\n/g, "\n"); var b = ""; for (var g = 0; g < d.length; g++) {
            var f = d.charCodeAt(g); if (f < 128) { b += String.fromCharCode(f) } else {
                if ((f > 127) && (f < 2048)) {
                    b += String.fromCharCode((f >> 6) | 192); b += String.fromCharCode((f & 63) | 128)
                } else { b += String.fromCharCode((f >> 12) | 224); b += String.fromCharCode(((f >> 6) & 63) | 128); b += String.fromCharCode((f & 63) | 128) }
            }
        } return b
    }, _utf8_decode: function (b) { var d = ""; var f = 0; var g = c1 = c2 = 0; while (f < b.length) { g = b.charCodeAt(f); if (g < 128) { d += String.fromCharCode(g); f++ } else { if ((g > 191) && (g < 224)) { c2 = b.charCodeAt(f + 1); d += String.fromCharCode(((g & 31) << 6) | (c2 & 63)); f += 2 } else { c2 = b.charCodeAt(f + 1); c3 = b.charCodeAt(f + 2); d += String.fromCharCode(((g & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)); f += 3 } } } return d }
}; function show_greklama(d) {
    if (!d || !_google_ad_client || !_google_ad_slot || !_google_ad_width || !_google_ad_height || !_g_count) {
        return
    } if (d > 1 && _g_count != d) { return } var c = el("google_bnr_div" + d); if (!c) { return } var b = '<ins class="adsbygoogle" style="display:inline-block;width:' + _google_ad_width + "px;height:" + _google_ad_height + 'px" data-ad-client="' + _google_ad_client + '" data-ad-slot="' + _google_ad_slot + '"></ins>'; c.innerHTML = b; window.setTimeout("_sys_shadows( 'a_bnr_div" + d + "', 'google_bnr_div" + d + "' )", 200); (adsbygoogle = window.adsbygoogle || []).push({})
} function _js_dec_data(b) { return Base64.decode(Base64.decode(b)) } function _gbanners_sync_border() {
    if (!_g_count || !_google_ad_width || !_google_ad_border) {
        return
    } var b; for (i = 1; i <= _g_count; i++) { if (_google_ad_border) { b = el("ads_sys_div" + i); if (b) { b.style.border = "1px #cccccc solid" } } b = el("a_bnr_div" + i); if (!b) { continue } b.innerHTML = '<img src="' + document.location.protocol + '//bnr.ss.com/img/shadow.jpg" width=' + _google_ad_width + " height=20 border=0><br>" }
} function _gbanners_sync() {
    if (!_google_ad_client || !_google_ad_slot) { return } google_ad_client = _google_ad_client; google_ad_slot = _google_ad_slot; google_ad_width = _google_ad_width; google_ad_height = _google_ad_height; document.write('<script type="text/javascript" src="//pagead2.googlesyndication.com/pagead/show_ads.js"><\/script>')
} function _gbanners_async(p, w, b, g, E, n, r, s, f, B, u, F, c) {
    if (!w || !b || !g) { return } if (!s) { s = "google_bnr_div" } var q = el(p); if (!q) { return } var A, k, d; var C = ((!E || !n) ? true : false); if (!u && C) { u = "auto" } for (A = 0; A < w; A++) {
        k = '<div id="' + s + "_" + A + '" style="' + ((r || B) ? "border:1px #cccccc solid;" : "") + "overflow:hidden;" + (!C ? "height:" + n + "px;" : "") + '"></div>' + (r ? '<img src="' + document.location.protocol + '//bnr.ss.com/img/shadow.jpg" width="100%" height=20 border=0>' : "<br>") + ""; q.innerHTML += k; d = (f ? f : "") + '<ins class="adsbygoogle" style="' + (C ? "display:block;" : "display:inline-block;width:" + E + "px;height:" + n + "px;") + '" data-ad-client="' + b + '" data-ad-slot="' + g + '"' + (u ? ' data-ad-format="' + u + '"' : "") + (F ? " " + F : "") + "></ins>";
        k = el(s + "_" + A); if (!k) { continue } k.innerHTML = d; if (c) { (adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 1 } (adsbygoogle = window.adsbygoogle || []).push({}); ch_bnr_h()
    }
} function load_script_async(c, f) { var d = document.getElementsByTagName("head")[0]; var b = document.createElement("script"); if (!d || !b) { return } b.type = "text/javascript"; b.charset = "utf-8"; if (f) { b.onload = b.onreadystatechange = ch_bnr_h } b.src = c; d.appendChild(b) } function change_category_text(d, c) {
    var b = el("mtd_" + d); if (!b) { b = el("ahc_" + d) } if (!b || !cat_ch_times || !cat_ch_times[d]) {
        return
    } if (c % 2 != 0) { b.innerHTML = prev_cname[d]; if ((c / 2) >= (cat_ch_times[d] - 1)) { return } } else { b.innerHTML = new_cname[d][SS_Lang] } c++; window.setTimeout("change_category_text( " + d + ", " + c + " )", cat_ch_timeout)
} function show_cat_special(b) { if (!b) { return } for (i in b) { var c = el("mtd_" + i); if (!c) { c = el("ahc_" + i) } if (SS_Lang && c && b[i][SS_Lang]) { prev_cname[i] = c.innerHTML; window.setTimeout("change_category_text( " + i + ", 0 )", cat_ch_timeout) } } } function add_link_to_selection(k) {
    if (!window.getSelection) { return } var n = window.getSelection();
    if (!n.rangeCount) { return } var p = n.toString().replace(/^\s+/, "").replace(/\s+$/, ""); if (!p.length) { return } var g = n.getRangeAt(0); var c = document.createElement("div"); c.style.position = "absolute"; c.style.top = "-10000px"; c.appendChild(g.cloneContents()); p = c.innerText; if (p.split(/\s+/g).length <= 5) { return } var r = p.split(/[\r\n]+/g); if (r.length == 1) { c.innerHTML += " " + location.host.replace(/^www\./, "") } else {
        if (r.length == 2) {
            var b = []; for (var f = 0; f < c.childNodes.length; f++) {
                if (!/^(BR|HR|DIV|P)$/.test(c.childNodes[f].nodeName)) {
                    continue
                } if (f == 0) { c.childNodes[f].isfirst = true } if (f == c.childNodes.length - 1) { c.childNodes[f].islast = true } b.push(c.childNodes[f])
            } for (var f = 0; f < b.length; f++) {
                for (var d = 0; d < 2; d++) {
                    if (/^(DIV|P)$/.test(b[f].tagName)) { if (!d && b[f].isfirst) { continue } if (d && b[f].islast) { continue } } else { if (d) { break } if (b[f].islast) { break } } var q = document.createDocumentFragment(); if (d == 0) { q.appendChild(document.createElement("br")) } q.appendChild(document.createTextNode(location.host.replace(/^www\./, ""))); if (d == 1) {
                        q.appendChild(document.createElement("br"))
                    } c.insertBefore(q, d == 0 ? b[f] : b[f].nextSibling)
                }
            }
        } else { c.innerHTML += '<br><br><a style="color:blue;font-weight:normal;" href="' + document.location.href + '">' + document.location.href + "</a><br>" }
    } document.body.appendChild(c); n.selectAllChildren(c); setTimeout(function () { c.parentNode.removeChild(c); n.removeAllRanges(); n.addRange(g) }, 0)
} function _puls_counter_local(b) {
    var d = el("_puls.lv_" + b); var c = '<a href="http://puls.lv/" target="_blank"><img border=0 src="' + (window.location.protocol == "https:" ? "https:" : "") + "//hits.puls.lv/?sid=" + b + "&jsver=1&tt=" + escape(new Date()) + "&loc=" + escape(window.location.href) + "&ref=" + escape(document.referrer) + "&key=" + escape(Math.random()) + '" width=1 height=1 alt="PULS.LV Professional rating system"></a>';
    if (d) { d.innerHTML = c } else { document.write(c) }
} function _ps_counter_local(b) {
    var d = el("_europuls.eu_" + b); var c = '<a href="http://europuls.eu/" target="_blank"><img border=0 src="' + (window.location.protocol == "https:" ? "https:" : "") + "//hits.europuls.eu/?sid=" + b + "&jsver=1&tt=" + escape(new Date()) + "&loc=" + escape(window.location.href) + "&ref=" + escape(document.referrer) + "&key=" + escape(Math.random()) + '" width=1 height=1 alt="Europuls.eu - Catalog of the European Internet resources"></a>'; if (d) { d.innerHTML = c } else {
        document.write(c)
    }
} function open_close_cat_menu(b) { var n = el("cat_list_dv"); if (!n) { return } var p = el("cat_list_img1"); var k = el("cat_list_img2"); var g = "none"; var f = "inline-block"; var c = "none"; if (b) { g = "block"; f = "none"; c = "inline-block" } if (p && k) { p.style.display = f; k.style.display = c } n.style.display = g } function _alert_show(k, c, d) {
    var g = el("alert_dv"); var f = el("alert_msg"); if (!g || !f) { return } k = k.toString(); k = k.replace("\r\n", "<BR>"); var b = (W.innerHeight ? W.innerHeight : (D.documentElement.clientHeight ? D.documentElement.clientHeight : D.body.clientHeight)) / 2 + (D.documentElement.scrollTop ? D.documentElement.scrollTop : D.body.scrollTop);
    var n = (W.innerWidth ? W.innerWidth : (D.documentElement.clientWidth ? D.documentElement.clientWidth : D.body.clientWidth)) / 2 + (D.documentElement.scrollLeft ? D.documentElement.scrollLeft : D.body.scrollLeft); f.innerHTML = k; g.style.display = "block"; g.style.top = Number(b - g.clientHeight / 2) + "px"; g.style.left = Number(n - g.clientWidth / 2) + "px"; if (d == 1) { f.style.textAlign = "left" } else { if (d == 2) { f.style.textAlign = "center" } else { if (k.length > 100 && d != 1) { f.style.textAlign = "justify" } else { f.style.textAlign = "center" } } }
} var ACTIVE_ELEMENT = false;
function _alert(f, b, c) {
    if (Android && CLIENT_INFO.codev >= 22) { Android._alert(f); return } var d = el("alert_dv"); if (!d) { alert_init() } ACTIVE_ELEMENT = D.activeElement; if (ACTIVE_ELEMENT && (ACTIVE_ELEMENT.type == "text" || ACTIVE_ELEMENT.type == "textarea" || ACTIVE_ELEMENT.type == "email" || ACTIVE_ELEMENT.type == "tel" || ACTIVE_ELEMENT.type == "url" || ACTIVE_ELEMENT.type == "password" || ACTIVE_ELEMENT.type == "number")) { ACTIVE_ELEMENT.blur(); if (MOBILE) { window.setTimeout("_alert_show('" + f + "'," + b + "," + c + ")", 200); return } } _alert_show(f, b, c)
} function _alert_close(b) { if (!b && ACTIVE_ELEMENT && (ACTIVE_ELEMENT.type == "text" || ACTIVE_ELEMENT.type == "select-one" || ACTIVE_ELEMENT.type == "textarea" || ACTIVE_ELEMENT.type == "email" || ACTIVE_ELEMENT.type == "tel" || ACTIVE_ELEMENT.type == "url" || ACTIVE_ELEMENT.type == "password")) { ACTIVE_ELEMENT.focus() } if (!b) { b = "alert_dv" } var c = el(b); if (!c) { return } c.style.display = "none" } function alert_init() {
    var c = "Uzmanību"; if (SS_Lang == "1") { c = "Внимание" } else { if (SS_Lang == "4") { c = "Dėmesio" } else { if (SS_Lang == "3") { c = "Attention" } } } var b = '<div id="alert_dv" class="alert_dv"><div class="alert_head"><div class="alert_head_left">' + c + '</div><div class="alert_head_right" onclick="_alert_close();"></div></div><div class="alert_body" style="padding:10px;"><div id="alert_msg"></div><br><a id="alert_ok" href="javascript:;" onclick="_alert_close();" class=navi style="width:100px;">OK</a></div></div>';
    D.body.insertAdjacentHTML("afterbegin", b)
} win_z_index = 100; function win(d, c, b, A, E, f, k, s, r, B, q) {
    if (!E) { E = 0 } var p = el("win_alert_dv_" + E); if (!p) { win_init(E, s, q) } p = el("win_alert_dv_" + E); if (!p) { return } p.style.zIndex = win_z_index++; var z = el("win_alert_msg_" + E); if (!z) { return } var w = el("win_head_left_" + E); if (!w) { return } if (!k) { k = "10px" } if (k) { var u = el("win_alert_body_" + E); if (u) { u.style.padding = k } } var g = y = 0; if (!s) { if (b == 3) { p.style.maxWidth = "none" } else { p.style.maxWidth = "350px" } } if (r) { p.style.width = r } else {
        p.style.width = "auto"
    } z.innerHTML = ""; z.style.height = "auto"; z.style.overflowY = "hidden"; z.innerHTML = d; w.innerHTML = c ? c : ""; p.style.display = "block"; var F = 0; if ((c = el("head_div")) && c.style.display == "block") { F = c.clientHeight } var n = (W.innerHeight ? W.innerHeight : (D.documentElement.clientHeight ? D.documentElement.clientHeight : D.body.clientHeight)) - F; if (B !== true && (p.clientHeight + 150) > n) {
        z.style.maxHeight = (n - 150) + "px"; z.style.overflowY = "scroll"; z.style.paddingRight = "5px"; if ("onmousewheel" in document) {
            z.onmousewheel = new Function("this.scrollTop += -event.wheelDelta; return false;")
        }
    } if (!f) {
        if (A) { g = A.pageX || (A.clientX + document.documentElement.scrollLeft); y = A.pageY || (A.clientY + document.documentElement.scrollTop); var C = (W.innerWidth ? W.innerWidth : (D.documentElement.clientWidth ? D.documentElement.clientWidth : D.body.clientWidth)); if ((g + p.clientWidth + 25) > C) { g = C - p.clientWidth - 25 } } else {
            g = (W.innerWidth ? W.innerWidth : (D.documentElement.clientWidth ? D.documentElement.clientWidth : D.body.clientWidth)); y = (W.innerHeight ? W.innerHeight : (D.documentElement.clientHeight ? D.documentElement.clientHeight : D.body.clientHeight));
            g = Number((g - p.clientWidth) / 2 + (D.documentElement.scrollLeft ? D.documentElement.scrollLeft : D.body.scrollLeft)); y = Number((y - p.clientHeight) / 2 + (D.documentElement.scrollTop ? D.documentElement.scrollTop : D.body.scrollTop) - F)
        } if (!s) { p.style.top = parseInt(y + F) + "px" } p.style.left = g + "px"
    } if (b == 1) { z.style.textAlign = "left" } else { if (b == 2) { z.style.textAlign = "center" } else { if (d.length > 100 && b != 1) { z.style.textAlign = "justify" } else { z.style.textAlign = "center" } } }
} function win_close(win_id, close_callback) {
    if (!win_id) {
        win_id = 0
    } _alert_close("win_alert_dv_" + win_id); if (close_callback) { eval(close_callback + "();") }
} function win_init(b, f, d) {
    var c = '<div id="win_alert_dv_' + b + '" class="' + (f ? "alert_dv_fixed" : "alert_dv") + '"><div class="alert_head"><div class="win_head_left" id="win_head_left_' + b + '"></div><div class="alert_head_right" onclick="win_close(\'' + b + "','" + d + '\');"></div></div><div class="alert_body" id="win_alert_body_' + b + '"><div class="win_alert_msg" id="win_alert_msg_' + b + '"></div></div></div>'; D.body.insertAdjacentHTML("afterbegin", c)
} function http_win(title, url, win_id, width, close_callback) { var ajax = get_xml_http(); if (!ajax) { return } if (!win_id) { win_id = 0 } ajax.open("GET", url, true); ajax.onreadystatechange = function () { if (ajax.readyState != 4) { return } cmd = ajax.responseText; cmd = cmd.split("||||"); if (cmd[0]) { win(cmd[0], title, 3, false, win_id, false, "15px", false, (width ? width + "px" : false), false, close_callback) } if (cmd[1]) { eval(cmd[1]) } }; ajax.setRequestHeader("Accept", "message/x-ajax"); ajax.send("") } function html_win(f, c, b, d) {
    win(c, f, 3, false, b, false, "15px", false, d ? d + "px" : false)
} function http_word(k, g, c, d, b, f) { if (!b) { b = "http_word" } http_win(g, document.location.protocol + "//" + document.location.host + "/w_inc/ajax.php?action=word&lg=" + c + "&id=" + k + "&info=" + escape(d), b, false, f) } function http_get(src, callback) {
    var ajax = get_xml_http(); if (!ajax) { return false } ajax.open("GET", src, true); ajax.setRequestHeader("Accept", "message/x-ajax"); ajax.onreadystatechange = function () {
        if (ajax.readyState != 4) { return } var cmd = ajax.responseText; if (callback && typeof callback == "function") { callback(cmd) } else {
            eval(cmd)
        }
    }; ajax.send(null); return true
} function _confirm(question, callback, head, ok_btn, false_btn) {
    if (!ok_btn) { ok_btn = "OK" } if (!false_btn) { false_btn = "Cancel" } if (!head) { head = "Uzmanību"; if (SS_Lang == "1") { head = "Внимание" } else { if (SS_Lang == "4") { head = "Dėmesio" } else { if (SS_Lang == "3") { head = "Attention" } } } } this.show_confirm_win = function () {
        var ret = '<div style="text-align:center;">' + question + "<br><br>"; ret += '<a href="javascript:;" class="navi em10" id="confirm_ok_button">&nbsp;' + ok_btn + "&nbsp;</a>&nbsp;&nbsp;"; ret += '<a href="javascript:;" class="navi em10" onclick="win_close(\'_confirm\');return false;">&nbsp;' + false_btn + "&nbsp;</a>";
        ret += "</div><br>"; win(ret, head, false, false, "_confirm"); var btn = el("confirm_ok_button"); if (btn) { btn.onclick = function () { win_close("_confirm"); if (typeof (callback) === "function") { callback() } else { eval(callback) } return false } }
    }; this.show_confirm_win()
} function addslashes(c, b) { if (b == 1) { c = c.replace(/\'/g, "\\'") } c = c.replace(/\"/g, "&quot;"); return c } function msg_key_down() { img_navi(); event.returnValue = true } function _clear_preload_div() { var b = el("msg_div_preload"); if (b) { b.innerHTML = "" } } function sys_m(b) {
    m(b, false, false, true)
} function check_ads_back(c) { var b = true; if (window.opener && (!window.history || window.history.length <= 1)) { try { if (document.referrer.match(new RegExp("^(http|https)://(" + document.location.host + "|hits.sys.lv|hits.ss.com)/")) || window.opener.ss_mframe) { b = false } } catch (f) { } } if (b) { return } var d = el("msg_back") || el("ads_back"); if (!d) { return } if (c) { d.innerHTML = '<a class=a9a href="javascript:;" onclick="window.close();">' + c + "</a>" } else { d.style.display = "none" } } function back_from_msg(b) {
    if (CLEAR_PRELOAD_DIV) {
        _clear_preload_div()
    } if (!b) { if (!event || event.keyCode != 27 || !window.history || !window.history.length || !document.referrer || !check_referer(document.referrer)) { return true } window.history.back(); return false } else { if (window.history && window.history.length > 1 && document.referrer && check_referer(document.referrer) && !document.referrer.match("/msg/")) { window.history.back(); return false } else { if (b) { go(b) } } }
} function img_navi() {
    var b = el("big_pic_div"); if (b && b.style.display == "block") {
        if (navi_prev && event.keyCode == 37) {
            mnu("foto", navi_prev)
        } else { if (navi_next && event.keyCode == 39) { mnu("foto", navi_next) } }
    }
} function save_current_map_location(b, d) { var f = el("ss_mframe"); if (!f) { return } var c = "/w_inc/save_map_location.php?center=" + b + "&zoom=" + d + "&" + new Date(); f.src = c } function get_style_attr(c, b) { if (!c) { return false } var d = el(c); if (!d) { return false } if (d.currentStyle) { return parseInt(d.currentStyle[b]) } return false } function trim_obj(f) {
    if (!f || !f.value) { return } var d = /^( )+/g; var c = /( )+$/g; var b = /( {2})+/g; f.value = f.value.replace(d, ""); f.value = f.value.replace(c, "");
    f.value = f.value.replace(b, " ")
} function submit_abuse(g, f) { if (!g) { return false } trim_obj(g.reason_text); trim_obj(g.reason_text2); var d = false; var b = g.reason.length; for (var c = 0; c < b; c++) { if (g.reason[c].checked == true) { d = true } } if (!d) { _alert(f) } else { if (g.reason[b - 1].checked == true && g.reason_text.value.length < 10) { _alert(f) } else { if (g.reason[1].checked == true && g.reason_text2.value.length < 10) { _alert(f) } else { http_form_post(g) } } } } function shdiv_abuse(c) {
    var g = el("reason_text_div"); var f = el("note"); var d = el("abuse_submit");
    var b = el("reason_text_div2"); if (!g || !f || !d || !b) { return } g.style.display = c == 1 ? "" : "none"; f.style.display = c == 2 ? "" : "none"; d.style.display = c == 2 ? "none" : ""; b.style.display = c == 3 ? "" : "none"
} function http_form_post(frm, callback, args) {
    var ajax = get_xml_http(); if (!ajax || !frm) { return } var obj_len = frm.elements.length; var data; try { data = new FormData(frm); ajax.open(frm.method, frm.action, true) } catch (e) {
        data = ""; for (i = 0; i < obj_len; i++) {
            o = frm.elements.item(i); if (!o || !o.type || !o.name) { continue } switch (o.type) {
                case "hidden": case "text": case "textarea": data += o.name + "=" + encodeURIComponent(o.value) + "&";
                    break; case "radio": if (frm.elements.item(i).checked == true) { data += o.name + "=" + encodeURIComponent(o.value) + "&" } break; case "checkbox": if (frm.elements.item(i).checked == true) { data += o.name + "=" + encodeURIComponent(o.value) + "&" } break; case "select-one": data += o.name + "=" + encodeURIComponent(o[o.selectedIndex].value) + "&"; break
            }
        } ajax.open(frm.method, frm.action, true); ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    } ajax.setRequestHeader("Accept", "message/x-ajax"); ajax.onreadystatechange = function () {
        if (ajax.readyState != 4) {
            return
        } cmd = ajax.responseText; if (callback) { if (typeof (callback) === "function") { callback(cmd, args) } } else { if (cmd) { eval(cmd) } }
    }; ajax.send(data)
} function check_mail_syntax(c) {
    if (!c) { return false } var b = /^(?!\.)((?!.*\.{2})[a-zA-Z0-9\u0080-\u00FF\u0100-\u017F\u0180-\u024F\u0250-\u02AF\u0300-\u036F\u0370-\u03FF\u0400-\u04FF\u0500-\u052F\u0530-\u058F\u0590-\u05FF\u0600-\u06FF\u0700-\u074F\u0750-\u077F\u0780-\u07BF\u07C0-\u07FF\u0900-\u097F\u0980-\u09FF\u0A00-\u0A7F\u0A80-\u0AFF\u0B00-\u0B7F\u0B80-\u0BFF\u0C00-\u0C7F\u0C80-\u0CFF\u0D00-\u0D7F\u0D80-\u0DFF\u0E00-\u0E7F\u0E80-\u0EFF\u0F00-\u0FFF\u1000-\u109F\u10A0-\u10FF\u1100-\u11FF\u1200-\u137F\u1380-\u139F\u13A0-\u13FF\u1400-\u167F\u1680-\u169F\u16A0-\u16FF\u1700-\u171F\u1720-\u173F\u1740-\u175F\u1760-\u177F\u1780-\u17FF\u1800-\u18AF\u1900-\u194F\u1950-\u197F\u1980-\u19DF\u19E0-\u19FF\u1A00-\u1A1F\u1B00-\u1B7F\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u1E00-\u1EFF\u1F00-\u1FFF\u20D0-\u20FF\u2100-\u214F\u2C00-\u2C5F\u2C60-\u2C7F\u2C80-\u2CFF\u2D00-\u2D2F\u2D30-\u2D7F\u2D80-\u2DDF\u2F00-\u2FDF\u2FF0-\u2FFF\u3040-\u309F\u30A0-\u30FF\u3100-\u312F\u3130-\u318F\u3190-\u319F\u31C0-\u31EF\u31F0-\u31FF\u3200-\u32FF\u3300-\u33FF\u3400-\u4DBF\u4DC0-\u4DFF\u4E00-\u9FFF\uA000-\uA48F\uA490-\uA4CF\uA700-\uA71F\uA800-\uA82F\uA840-\uA87F\uAC00-\uD7AF\uF900-\uFAFF\.!#$%&'*+-/=?^_`{|}~\-\d]+)@(?!\.)([a-zA-Z0-9\u0080-\u00FF\u0100-\u017F\u0180-\u024F\u0250-\u02AF\u0300-\u036F\u0370-\u03FF\u0400-\u04FF\u0500-\u052F\u0530-\u058F\u0590-\u05FF\u0600-\u06FF\u0700-\u074F\u0750-\u077F\u0780-\u07BF\u07C0-\u07FF\u0900-\u097F\u0980-\u09FF\u0A00-\u0A7F\u0A80-\u0AFF\u0B00-\u0B7F\u0B80-\u0BFF\u0C00-\u0C7F\u0C80-\u0CFF\u0D00-\u0D7F\u0D80-\u0DFF\u0E00-\u0E7F\u0E80-\u0EFF\u0F00-\u0FFF\u1000-\u109F\u10A0-\u10FF\u1100-\u11FF\u1200-\u137F\u1380-\u139F\u13A0-\u13FF\u1400-\u167F\u1680-\u169F\u16A0-\u16FF\u1700-\u171F\u1720-\u173F\u1740-\u175F\u1760-\u177F\u1780-\u17FF\u1800-\u18AF\u1900-\u194F\u1950-\u197F\u1980-\u19DF\u19E0-\u19FF\u1A00-\u1A1F\u1B00-\u1B7F\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u1E00-\u1EFF\u1F00-\u1FFF\u20D0-\u20FF\u2100-\u214F\u2C00-\u2C5F\u2C60-\u2C7F\u2C80-\u2CFF\u2D00-\u2D2F\u2D30-\u2D7F\u2D80-\u2DDF\u2F00-\u2FDF\u2FF0-\u2FFF\u3040-\u309F\u30A0-\u30FF\u3100-\u312F\u3130-\u318F\u3190-\u319F\u31C0-\u31EF\u31F0-\u31FF\u3200-\u32FF\u3300-\u33FF\u3400-\u4DBF\u4DC0-\u4DFF\u4E00-\u9FFF\uA000-\uA48F\uA490-\uA4CF\uA700-\uA71F\uA800-\uA82F\uA840-\uA87F\uAC00-\uD7AF\uF900-\uFAFF\-\.\d]+)((\.([a-zA-Z\u0080-\u00FF\u0100-\u017F\u0180-\u024F\u0250-\u02AF\u0300-\u036F\u0370-\u03FF\u0400-\u04FF\u0500-\u052F\u0530-\u058F\u0590-\u05FF\u0600-\u06FF\u0700-\u074F\u0750-\u077F\u0780-\u07BF\u07C0-\u07FF\u0900-\u097F\u0980-\u09FF\u0A00-\u0A7F\u0A80-\u0AFF\u0B00-\u0B7F\u0B80-\u0BFF\u0C00-\u0C7F\u0C80-\u0CFF\u0D00-\u0D7F\u0D80-\u0DFF\u0E00-\u0E7F\u0E80-\u0EFF\u0F00-\u0FFF\u1000-\u109F\u10A0-\u10FF\u1100-\u11FF\u1200-\u137F\u1380-\u139F\u13A0-\u13FF\u1400-\u167F\u1680-\u169F\u16A0-\u16FF\u1700-\u171F\u1720-\u173F\u1740-\u175F\u1760-\u177F\u1780-\u17FF\u1800-\u18AF\u1900-\u194F\u1950-\u197F\u1980-\u19DF\u19E0-\u19FF\u1A00-\u1A1F\u1B00-\u1B7F\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u1E00-\u1EFF\u1F00-\u1FFF\u20D0-\u20FF\u2100-\u214F\u2C00-\u2C5F\u2C60-\u2C7F\u2C80-\u2CFF\u2D00-\u2D2F\u2D30-\u2D7F\u2D80-\u2DDF\u2F00-\u2FDF\u2FF0-\u2FFF\u3040-\u309F\u30A0-\u30FF\u3100-\u312F\u3130-\u318F\u3190-\u319F\u31C0-\u31EF\u31F0-\u31FF\u3200-\u32FF\u3300-\u33FF\u3400-\u4DBF\u4DC0-\u4DFF\u4E00-\u9FFF\uA000-\uA48F\uA490-\uA4CF\uA700-\uA71F\uA800-\uA82F\uA840-\uA87F\uAC00-\uD7AF\uF900-\uFAFF]){2,63})+)$/i;
    if (!b.test(c)) { return false } return true
} function send_msg_reminder(c, b) { if (!check_mail_syntax(c.mmail.value)) { _alert(b) } else { http_form_post(c) } } function _tstart(b) { if (!b) { return false } _TOUCH_OBJ.target = b.target; _TOUCH_OBJ.x = b.changedTouches[0].pageX; _TOUCH_OBJ.y = b.changedTouches[0].pageY; return true } function _tend(b) {
    if (!b) { return false } if (_TOUCH_OBJ.target != b.target) { return false } if (_TOUCH_OBJ.x && (((b.changedTouches[0].pageX + 10) < _TOUCH_OBJ.x) || ((b.changedTouches[0].pageX - 10) > _TOUCH_OBJ.x))) {
        return false
    } if (_TOUCH_OBJ.y && (((b.changedTouches[0].pageY + 10) < _TOUCH_OBJ.y) || ((b.changedTouches[0].pageY - 10) > _TOUCH_OBJ.y))) { return false } return true
} function _tmove(b) { if (!b) { return false } if (_TOUCH_OBJ.target != b.target) { return false } if (!_TOUCH_OBJ.length || _TOUCH_OBJ.length < b.touches.length) { _TOUCH_OBJ.length = b.touches.length } return true } function car_spare_prices() {
    var d, k, c; if (window.opener && (d = window.opener.CAT_OV_ID)) { d = parseInt(d) } else {
        if ((c = document.location.hash.match(/ov\_id=([\d]+)/)) && c[1]) {
            d = parseInt(c[1])
        }
    } if (d) { var g = document.getElementsByName("mctd[]"); if ((k = el("mctd_" + d))) { k.style.color = "green"; k.style.fontWeight = "bold" } if (g && k && g.length) { var f = 0; var b = g.length; for (f = 0; f < b; f++) { if (!g[f] || !g[f].id || g[f].id != "tdo_" + d) { continue } g[f].style.fontWeight = "bold"; g[f].style.color = "green" } } }
} function car_spare_cid_prices() {
    var c, d, b; if (window.opener && (c = window.opener.CAT_CID_ID) && (d = el("tdo_" + c))) { d.style.color = "green"; d.style.fontWeight = "bold" } else {
        if ((b = document.location.hash.match(/c\_id=([\d]+)/)) && b[1] && (c = parseInt(b[1])) && (d = el("tdo_" + c))) {
            d.style.color = "green";
            d.style.fontWeight = "bold"
        }
    }
} function get_sys_storage_data(b) { try { if (!window.sessionStorage) { return "" } return sessionStorage.getItem(b) } catch (c) { return "" } return "" } function _send_phone_ajax(b, c) {
    b.open("GET", c, true); b.setRequestHeader("Accept", "message/x-ajax"); b.onreadystatechange = function () {
        if (b.readyState != 4) { return } cmd = b.responseText; if (cmd) {
            cmd = cmd.split("\t"); if (cmd[0] == "w" && cmd[1]) { _alert(JS_GLOBAL_DATA["w" + cmd[1]]); return } else {
                if (cmd[0] == "phone_code") { show_phone_code_form(0, cmd[1]); return } else {
                    if (cmd[0] == "show_phone_code_form") {
                        show_phone_code_form(1, cmd[1])
                    }
                }
            } for (i in cmd) { data = cmd[i].split("|"); print_phone(gpzd(data[1], data[2]), data[0], MOBILE) } _show_phone(2)
        }
    }; b.send("")
} function _show_phone_captcha(d) { var b = get_xml_http(); if (!b || !d) { return } o = el("contacts_js"); if (!o || !o.src) { return } var c = o.src + "&gresponse=" + escape(d); _send_phone_ajax(b, c); return } function show_phone_code_form(d, b) {
    var c = ""; var f = el("contacts_js"); if (!f || !f.src) { return } if (!d) {
        c += JS_GLOBAL_DATA.w73; c += "<br><br><table align=center border=0 cellpadding=3 cellspacing=0><tr>"; c += '<td valign=top><img id="ss_tcode_img" onclick="reload_img_src(this,\'/pic.php?mode=ph&type=c&\');" src="/pic.php?mode=ph&type=c&' + escape(Math.random()) + '" vspace=0 style="border:1px black solid;" width=100 height=25></td>';
        c += '<td valign=top style="padding-bottom:5px;"><input type=text value="" id="ads_show_phone" style="width:50px;" maxlength=3></td></tr>'; c += "</table>"; c += '<br><center><input type=button class=btn value="' + JS_GLOBAL_DATA.w214 + "\" onclick=\"_show_phone(1, 'code='+encodeURIComponent( el('ads_show_phone').value ), event);return false;\"></center>"
    } else {
        load_script_async("https://www.google.com/recaptcha/api.js?hl=" + b + "&onload=recaptchanloadCallback&render=explicit"); c += "<div align=center>"; if (JS_GLOBAL_DATA.w265) {
            c += JS_GLOBAL_DATA.w265
        } c += '<div id="recaptcha_html_element" ctype="phone"></div>'; c += "</div>"
    } win(c, JS_GLOBAL_DATA.w220, 0, false, "recaptcha")
} function _get_phone_key(b) { if (!b) { return "&e=0" } return "&x=" + parseInt(b.clientX) + "&y=" + parseInt(b.clientY) } function _check_referer(c) { if (!c) { return true } var b = /altervista\.org/i; if (b.test(c)) { return false } return true } function go_home() {
    if (_check_referer(document.location.href)) { return } var b = new Image(); if (!b) { return } b.src = "https://www.ss.com/counter/ref.php?l=" + escape(document.location.href) + "&r=" + escape(document.referrer) + "&d=" + new Date()
} go_home(); function _show_phone(d, b, k) {
    var p, f, c; if (d == 1) { var g = get_xml_http(); if (!g) { return } p = el("contacts_js"); if (!p || !p.src) { return } var n = p.src; n += _get_phone_key(k); if (b) { n += "&" + b } _send_phone_ajax(g, n); return } win_close("recaptcha"); for (c = 1; c <= 3; c++) {
        if (d == 2) { if ((f = el("ph_div_" + c))) { try { f.style.display = "inline-block" } catch (k) { f.style.display = "block" } } } if (!(p = el("phdivz_" + c))) { continue } if (!(f = el("phone_td_" + c))) { continue } try {
            if (d == 2) { p.style.display = "none"; f.style.display = "inline-block" } else {
                p.style.display = "inline-block";
                if (MOBILE) { f.style.display = "none" }
            }
        } catch (k) { if (d == 2) { p.style.display = "none"; f.style.display = "block" } else { p.style.display = "block"; if (MOBILE) { f.style.display = "none" } } } if (d != 2) { break }
    }
} function __rk_detect() { var c = el("ads_reklama_img"); if (!c) { return } if (c.width * c.height > 0 && c.style.visibility != "hidden") { return } AD_BLOCKER = true; var b = get_xml_http(); if (!b) { return } b.open("GET", "//" + document.location.host + "/counter/rk_detect.php?" + new Date(), true); b.setRequestHeader("Accept", "message/x-ajax"); b.send("") } function _rk_detect() {
    window.setTimeout("__rk_detect()", 200)
} function change_profile_data(k, c, d, b) { if (!k) { return } var g = ""; var f = false; if (!Array.isArray(c)) { c = new Array(c) } for (i in c) { g = k[c[i]]; if (!g) { continue } f = false; if (!b && !g) { _alert(d); return } if (g.type == "text" || g.type == "textarea" || g.type == "email" || g.type == "tel" || g.type == "url" || g.type == "password" || g.type == "hidden" || g.type == "number") { f = g.value } else { if (g.type == "select" || g.type == "select-one") { f = g[g.selectedIndex].value } } if (!b && !f) { _alert(d); return } } http_form_post(k) } function _chk_bad_mdomain(c, b) {
    if (!c) {
        return false
    } c = c.toLowerCase(); if (!b) { return false } b = _js_decode(b).split("|"); if (!b || !b.length) { return false } for (i in b) { expr = new RegExp("@" + b[i] + "$", "i"); if (expr.test(c)) { return b[i] } } return false
} function _check_user_unread_mails(c) { var b = el("mails_status_menu"); MAILS_INFO = c; if (b) { if (c && c.info) { b.innerHTML = c.info; try { b.style.display = "inline-block" } catch (d) { b.style.display = "block" } } else { b.style.display = "none" } } } function _check_user_unread_mails_ajax(c, b) {
    var f = get_xml_http(); if (!f) { return false } var d = ""; f.open("GET", "/w_inc/chk.mails.php?mode=mail&lg=" + c + (b ? "&ad_mail=" + b : "") + "&" + new Date(), true);
    f.onreadystatechange = function () { if (f.readyState != 4) { return } if ((cmd = f.responseText) && (cmd.substring(0, 2) == "OK")) { if (d = cmd.substring(2)) { d = JSON.parse(cmd.substring(2)) } _check_user_unread_mails(d); if (d.mails && window._insert_new_mail) { _insert_new_mail(d.mails) } } }; f.setRequestHeader("Accept", "message/x-ajax"); f.send("")
} function _check_favorites_menu(b, f) { var d = arguments.callee; var c = el("mnu_fav_id"); if (!d.cnt || f) { d.cnt = b } if (!c) { return } c.innerHTML = d.cnt ? "&nbsp;(" + d.cnt + ")" : "" } function _show_js_special_data(f, b, g) {
    if (AD_BLOCKER && window.JS_GLOBAL_DATA && JS_GLOBAL_DATA.W404) {
        _alert(JS_GLOBAL_DATA.W404);
        return false
    } var d = get_xml_http(); if (!d) { return false } var c = false; d.open("GET", "/w_inc/ajax.php?action=show_special_js_data&version=1&lg=" + b + "&data=" + f + (g ? "&gresponse=" + g : ""), true); d.setRequestHeader("Accept", "message/x-ajax"); d.onreadystatechange = function () {
        if (d.readyState != 4) { return } if ((cmd = d.responseText) && (cmd.substring(0, 2) == "OK") && (c = cmd.substring(2)) && (c = JSON.parse(cmd.substring(2)))) {
            if (c.action && c.action == "captcha") { _js_special_data_captcha(c.data, c.db) } else {
                if (c[0] && c[1]) {
                    for (i in c[1]) {
                        if (i && ((o = el("tdo_" + i)) || (o = el("tdo_" + i + "-" + c[0])))) {
                            o.innerHTML = c[1][i]
                        }
                    }
                }
            }
        }
    }; d.send("")
} var recaptcha_widgetId; var recaptchanloadCallback = function () { recaptcha_widgetId = grecaptcha.render("recaptcha_html_element", { sitekey: "6LeY-BIUAAAAAMqOG4X9ZT49bb-ZUZsW8CXrPiUZ", size: (MOBILE ? "compact" : "normal"), theme: "light", type: "image", callback: recaptchaCallback }) }; function recaptchaCallback() {
    win_close("recaptcha"); var f = grecaptcha.getResponse(recaptcha_widgetId); if (!f) { return false } var d = el("recaptcha_html_element"); if (!d) { return } var c = d.getAttribute("ctype"); if (c == "js_special") {
        data = d.getAttribute("data");
        if (!data) { return } var b = d.getAttribute("lang"); _show_js_special_data(data, b, f)
    } else { _show_phone_captcha(f) }
} function _js_special_data_captcha(d, b) {
    var c = ""; load_script_async("https://www.google.com/recaptcha/api.js?" + (b ? "hl=" + b + "&" : "") + "onload=recaptchanloadCallback&render=explicit"); c += "<div align=center>"; if (JS_GLOBAL_DATA.w270) { c += JS_GLOBAL_DATA.w270 } c += '<div id="recaptcha_html_element" data="' + d + '" lang="' + b + '" ctype="js_special"></div>'; c += "</div>"; win(c, JS_GLOBAL_DATA.w220, 0, false, "recaptcha")
} function set_obj_display(d, c) { if (!d || !c) { return } try { d.style.display = c } catch (b) { d.style.display = "block" } } function _setCookie(d, g, k, f) { var b = ""; if (k) { var c = new Date(); c.setTime(c.getTime() + (k * 24 * 60 * 60 * 1000)); b = "; expires=" + c.toUTCString() } document.cookie = d + "=" + (escape(g) || "") + b + "; path=/;" + (f ? " domain=" + f + ";" : "") + " SameSite=none; secure" } function _getCookie(b) { var d = document.cookie.match(RegExp("(^| )" + b + "=.[^;]*")); if (d && (d = d[0].split("="))) { return d[1] } return false } function _check_remote_id(d, c) {
    if (!d || !c) {
        return
    } var b = _getCookie("sid"); var f = _getCookie("sid_c"); if (d == "always") { if (!b || !f || parseInt(f) != 1 || (b.length != 32 && b.length != 64 && b.length != 96)) { load_script_async(c + "/w_inc/ajax/get_remote_id.php") } } else { if (d == "new") { if (!b || (b.length != 32 && b.length != 64 && b.length != 96)) { load_script_async(c + "/w_inc/ajax/get_remote_id.php") } } }
} function _set_remote_id(d, b) {
    if (!d || !b) { return } var c = get_xml_http(); if (!c) { return } c.open("POST", "/w_inc/ajax/get_remote_id.php?k=" + b, true); c.setRequestHeader("Accept", "message/x-ajax");
    c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); c.send("id=" + encodeURIComponent(d))
} function _lim_input(k, p, g) {
    var b = true; var d = k.keyCode || k.charCode; if (/^(8|36|35|37|39|46)$/.test(d)) { return true } var c = String.fromCharCode(d) || ""; if (!p.test(c)) { b = false } if (g && c && g[c] != null) {
        b = false; var n = k.srcElement || k.target; if (n.selectionStart == null) { n.selectionStart = n.selectionEnd = n.value.length } var f = n.selectionStart; n.value = n.value.substr(0, n.selectionStart) + g[c] + n.value.substr(n.selectionEnd, n.value.length);
        n.selectionStart = n.selectionEnd = f + 1
    } if (!b) { k.cancelBubble = true; k.returnValue = false; return false } return true
} function _phone_confirm(obj, action, apply, state, whitelist) {
    var cc = arguments.callee; if (typeof window._get == "undefined") { throw new Error("_get() definition required"); return } if (cc.whitelist == null) {
        cc.whitelist = []; cc.add_to_wl = function (val) { cc.whitelist[val] = true; if ((val + "").length == 8) { cc.whitelist["371" + val] = true } var m = val.match(/^371([0-9]{8})$/); if (m) { cc.whitelist[m[1]] = true } }; if (whitelist != null) {
            for (var i = 0;
                i < whitelist.length; i++) { cc.add_to_wl(whitelist[i]) }
        }
    } if (!cc.check) {
        cc.check = function (obj, instant) {
            if (obj.to) { clearTimeout(obj.to) } var val = obj.value; val = val.replace(/[^0-9]+/g, ""); val = val.replace(/^00/g, ""); if (val.length < 8) { obj.bad = false; obj.apply_call(obj, "def"); return } if (cc.whitelist[val]) { obj.bad = false; obj.apply_call(obj, "CONFIRMED"); return } if (!instant) { obj.bad = false; obj.apply_call(obj, "def") } var ff = function () {
                _get(obj.ajax_action + (/\?/.test(obj.ajax_action) ? "&" : "?") + "phone=" + val, function (state) {
                    eval("state = " + state);
                    obj.bad = !state; obj.apply_call(obj, state); if (state == "CONFIRMED") { cc.add_to_wl(val) }
                })
            }; if (instant) { ff(); return } obj.to = setTimeout(ff, 1000)
        }
    } obj.apply_call = apply; obj.ajax_action = action; obj.addEventListener("input", function () { cc.check(this) }, false); if (state != null) { obj.bad = !state; obj.apply_call(obj, state) } setInterval(function () { if (!obj.bad) { return } cc.check(obj, true) }, 3000)
} function preg_quote(b) { return b.replace(/([\.\\\+\*\?\[\^\]\$\(\)\{\}\|])/g, "\\$1") } function _flexfiv(g, c, f) {
    var n = arguments.callee;
    if (!n.obj) { n.obj = {} } if (typeof g == "string") { var k = g; if (!n.obj[k]) { n.obj[k] = document.getElementById(g) } } else { if (!g.id2) { if (n.cnt == null) { n.cnt = 0 } var k = "fd_" + cnt++; g.id2 = k; n.obj[k] = g } } if (!f) { window.addEventListener("resize", function (p) { n(g, c, p) }); var d = function (q) { var p = Date.now(); if (!d.busy || p - d.busy < 500) { if (!d.busy) { d.busy = p } return } d.busy = p; setTimeout(function () { n(g, c, q) }, 0) }; window.addEventListener("DOMNodeInserted", d); window.addEventListener("DOMNodeRemoved", d) } var b = window.innerHeight - document.body.scrollHeight + n.obj[k].clientHeight - 30;
    if (b < 0) { b = 0 } n.obj[k].style.maxHeight = b + "px"; if (c) { if (n.prevh == null) { n.prevh = n.obj[k].clientHeight } if (!f) { n.obj[k].scrollTop = n.obj[k].scrollHeight } else { if (n.prevh != n.obj[k].clientHeight) { n.obj[k].scrollTop -= n.obj[k].clientHeight - n.prevh } } n.prevh = n.obj[k].clientHeight }
} function _fastsubmit(c) { if (!c.ctrlKey) { return true } if (!/^(10|13)$/.test(c.keyCode)) { return true } var d = c.target || c.srcElement; var b = d.form || d; if (b.onsubmit && !b.onsubmit()) { return false } b.submit(); return false } var r1 = new Array(); var r2 = new Array();
var r3 = new Array(); r1[0] = new Array(); r2[0] = new Array(); r1[0][0] = "moskva-r"; r2[0][0] = "Москва"; r1[0][1] = "moskovskaja-oblastj-r"; r2[0][1] = "Московская область"; r1[0][2] = "sankt-peterburg-r"; r2[0][2] = "Санкт-Петербург"; r1[0][3] = "leningradskaja-oblastj-r"; r2[0][3] = "Ленинградская область"; r1[0][4] = "altajskij-kraj-r"; r2[0][4] = "Алтайский край"; r1[0][5] = "amurskaja-oblastj-r"; r2[0][5] = "Амурская область"; r1[0][6] = "arhangeljskaja-oblastj-r"; r2[0][6] = "Архангельская область"; r1[0][7] = "astrahanskaja-oblastj-r"; r2[0][7] = "Астраханская область";
r1[0][8] = "belgorodskaja-oblastj-r"; r2[0][8] = "Белгородская область"; r1[0][9] = "brjanskaja-oblastj-r"; r2[0][9] = "Брянская область"; r1[0][10] = "vladimirskaja-oblastj-r"; r2[0][10] = "Владимирская область"; r1[0][11] = "volgogradskaja-oblastj-r"; r2[0][11] = "Волгоградская область"; r1[0][12] = "vologodskaja-oblastj-r"; r2[0][12] = "Вологодская область"; r1[0][13] = "voronezhskaja-oblastj-r"; r2[0][13] = "Воронежская область"; r1[0][14] = "evrejskaja-ao-r"; r2[0][14] = "Еврейская AO"; r1[0][15] = "ivanovskaja-oblastj-r"; r2[0][15] = "Ивановская область";
r1[0][16] = "irkutskaja-oblastj-r"; r2[0][16] = "Иркутская область"; r1[0][17] = "kabardino-balkarskaja-respublika-r"; r2[0][17] = "Кабардино-Балкарская Республика"; r1[0][18] = "kaliningradskaja-oblastj-r"; r2[0][18] = "Калининградская область"; r1[0][19] = "kaluzhskaja-oblastj-r"; r2[0][19] = "Калужская область"; r1[0][20] = "kam4atskij-kraj-r"; r2[0][20] = "Камчатский край"; r1[0][21] = "kara4aevo-4erkesskaja-respublika-r"; r2[0][21] = "Карачаево-Черкесская Республика"; r1[0][22] = "kemerovskaja-oblastj-r"; r2[0][22] = "Кемеровская область";
r1[0][23] = "kirovskaja-oblastj-r"; r2[0][23] = "Кировская область"; r1[0][24] = "kostromskaja-oblastj-r"; r2[0][24] = "Костромская область"; r1[0][25] = "krasnodarskij-kraj-r"; r2[0][25] = "Краснодарский край"; r1[0][26] = "krasnojarskij-kraj-r"; r2[0][26] = "Красноярский край"; r1[0][27] = "krim-r"; r2[0][27] = "Крым"; r1[0][28] = "kurganskaja-oblastj-r"; r2[0][28] = "Курганская область"; r1[0][29] = "kurskaja-oblastj-r"; r2[0][29] = "Курская область"; r1[0][30] = "lipeckaja-oblastj-r"; r2[0][30] = "Липецкая область"; r1[0][31] = "magadanskaja-oblastj-r";
r2[0][31] = "Магаданская область"; r1[0][32] = "murmanskaja-oblastj-r"; r2[0][32] = "Мурманская область"; r1[0][33] = "nizhegorodskaja-oblastj-r"; r2[0][33] = "Нижегородская область"; r1[0][34] = "novgorodskaja-oblastj-r"; r2[0][34] = "Новгородская область"; r1[0][35] = "novosibirskaja-oblastj-r"; r2[0][35] = "Новосибирская область"; r1[0][36] = "omskaja-oblastj-r"; r2[0][36] = "Омская область"; r1[0][37] = "orenburgskaja-oblastj-r"; r2[0][37] = "Оренбургская область"; r1[0][38] = "orlovskaja-oblastj-r"; r2[0][38] = "Орловская область"; r1[0][39] = "penzenskaja-oblastj-r";
r2[0][39] = "Пензенская область"; r1[0][40] = "permskij-kraj-r"; r2[0][40] = "Пермский край"; r1[0][41] = "primorskij-kraj-r"; r2[0][41] = "Приморский край"; r1[0][42] = "pskovskaja-oblastj-r"; r2[0][42] = "Псковская область"; r1[0][43] = "respublika-adigeja-r"; r2[0][43] = "Республика Адыгея"; r1[0][44] = "respublika-ba6kortostan-r"; r2[0][44] = "Республика Башкортостан"; r1[0][45] = "respublika-burjatija-r"; r2[0][45] = "Республика Бурятия"; r1[0][46] = "respublika-dagestan-r"; r2[0][46] = "Республика Дагестан"; r1[0][47] = "respublika-ingu6etija-r";
r2[0][47] = "Республика Ингушетия"; r1[0][48] = "respublika-kalmikija-r"; r2[0][48] = "Республика Калмыкия"; r1[0][49] = "respublika-karelija-r"; r2[0][49] = "Республика Карелия"; r1[0][50] = "respublika-komi-r"; r2[0][50] = "Республика Коми"; r1[0][51] = "respublika-marij-el-r"; r2[0][51] = "Республика Марий Эл"; r1[0][52] = "respublika-mordovija-r"; r2[0][52] = "Республика Мордовия"; r1[0][53] = "respublika-saha-jakutija-r"; r2[0][53] = "Республика Саха (Якутия)"; r1[0][54] = "respublika-severnaja-osetija-r"; r2[0][54] = "Республика Северная Осетия";
r1[0][55] = "respublika-tatarstan-r"; r2[0][55] = "Республика Татарстан"; r1[0][56] = "respublika-tiva-r"; r2[0][56] = "Республика Тыва"; r1[0][57] = "respublika-hakasija-r"; r2[0][57] = "Республика Хакасия"; r1[0][58] = "rostovskaja-oblastj-r"; r2[0][58] = "Ростовская область"; r1[0][59] = "rjazanskaja-oblastj-r"; r2[0][59] = "Рязанская область"; r1[0][60] = "samarskaja-oblastj-r"; r2[0][60] = "Самарская область"; r1[0][61] = "saratovskaja-oblastj-r"; r2[0][61] = "Саратовская область"; r1[0][62] = "sahalinskaja-oblastj-r"; r2[0][62] = "Сахалинская область";
r1[0][63] = "sverdlovskaja-oblastj-r"; r2[0][63] = "Свердловская область"; r1[0][64] = "smolenskaja-oblastj-r"; r2[0][64] = "Смоленская область"; r1[0][65] = "stavropoljskij-kraj-r"; r2[0][65] = "Ставропольский край"; r1[0][66] = "tajmirskij-ao-r"; r2[0][66] = "Таймырский AO"; r1[0][67] = "tambovskaja-oblastj-r"; r2[0][67] = "Тамбовская область"; r1[0][68] = "tverskaja-oblastj-r"; r2[0][68] = "Тверская область"; r1[0][69] = "tomskaja-oblastj-r"; r2[0][69] = "Томская область"; r1[0][70] = "tuljskaja-oblastj-r"; r2[0][70] = "Тульская область"; r1[0][71] = "tjumenskaja-oblastj-r";
r2[0][71] = "Тюменская область"; r1[0][72] = "udmurtskaja-respublika-r"; r2[0][72] = "Удмуртская Республика"; r1[0][73] = "uljjanovskaja-oblastj-r"; r2[0][73] = "Ульяновская область"; r1[0][74] = "habarovskij-kraj-r"; r2[0][74] = "Хабаровский край"; r1[0][75] = "hanti-mansijskij-ao-r"; r2[0][75] = "Ханты-Мансийский AO"; r1[0][76] = "4eljabinskaja-oblastj-r"; r2[0][76] = "Челябинская область"; r1[0][77] = "4e4enskaja-respublika-r"; r2[0][77] = "Чеченская Республика"; r1[0][78] = "4itinskaja-oblastj-r"; r2[0][78] = "Читинская область"; r1[0][79] = "4uva6skaja-respublika-r";
r2[0][79] = "Чувашская Республика"; r1[0][80] = "4ukotskij-ao-r"; r2[0][80] = "Чукотский AO"; r1[0][81] = "evenkijskij-ao-r"; r2[0][81] = "Эвенкийский AO"; r1[0][82] = "jamalo-neneckij-ao-r"; r2[0][82] = "Ямало-ненецкий AO"; r1[0][83] = "jaroslavskaja-oblastj-r"; r2[0][83] = "Ярославская область"; r1[0][84] = "drugoe-r"; r2[0][84] = "Другое";