if (typeof rvAgentPlayer !== "undefined") {
  throw new Error("ResponsiveVoice Website Agent is already running");
}

var rvAgentPlayer = { version: 1 };
var rvApiKey = "rSrEIS8q";
var rvApiEndpoint = "https://texttospeech.responsivevoice.org/v1/text:synthesize";

if (typeof responsiveVoice === "undefined") {
  /*
  ResponsiveVoice JS v1.8.4
  (c) 2015-2025 ResponsiveVoice
  License: https://responsivevoice.org/license
*/
  ("use strict");
  Array.from ||
    (Array.from = (function () {
      var w = Object.prototype.toString,
        z = function (x) {
          return typeof x === "function" || w.call(x) === "[object Function]";
        };
      return function (x) {
        var u = Object(x);
        if (x == null) throw new TypeError("Array.from requires an array-like object - not null or undefined");
        var a = arguments.length > 1 ? arguments[1] : void 0,
          q;
        if (typeof a !== "undefined") {
          if (!z(a)) throw new TypeError("Array.from: when provided, the second argument must be a function");
          arguments.length > 2 && (q = arguments[2]);
        }
        var r = Number(u.length);
        r = isNaN(r) ? 0 : r !== 0 && isFinite(r) ? (r > 0 ? 1 : -1) * Math.floor(Math.abs(r)) : r;
        r = Math.min(Math.max(r, 0), 9007199254740991);
        for (var A = z(this) ? Object(new this(r)) : Array(r), b = 0, c; b < r; )
          ((c = u[b]), (A[b] = a ? (typeof q === "undefined" ? a(c, b) : a.call(q, c, b)) : c), (b += 1));
        A.length = r;
        return A;
      };
    })());
  if (!isNaN)
    var isNaN = function (w) {
      w = Number(w);
      return w !== w;
    };
  (function (w, z) {
    typeof exports === "object" && typeof module !== "undefined"
      ? z()
      : typeof define === "function" && define.amd
        ? define(z)
        : z();
  })(this, function () {
    function w(x) {
      w =
        typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
          ? function (u) {
              return typeof u;
            }
          : function (u) {
              return u && typeof Symbol === "function" && u.constructor === Symbol && u !== Symbol.prototype
                ? "symbol"
                : typeof u;
            };
      return w(x);
    }
    function z(x, u) {
      var a = this.event && this.event.type;
      a = a === "unload" || a === "beforeunload";
      var q = "XMLHttpRequest" in this ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
      q.open("POST", x, !a);
      q.withCredentials = !0;
      q.setRequestHeader("Accept", "*/*");
      typeof u === "string"
        ? (q.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"), (q.responseType = "text"))
        : u instanceof Blob && u.type && q.setRequestHeader("Content-Type", u.type);
      try {
        q.send(u);
      } catch (r) {
        return !1;
      }
      return !0;
    }
    (function () {
      "navigator" in this || (this.navigator = {});
      typeof this.navigator.sendBeacon !== "function" && (this.navigator.sendBeacon = z.bind(this));
    }).call((typeof window === "undefined" ? "undefined" : w(window)) === "object" ? window : {});
  });
  if (typeof responsiveVoice != "undefined")
    (console.log("ResponsiveVoice already loaded"), console.log(responsiveVoice));
  else
    var ResponsiveVoice = function () {
        function w(b) {
          b = b.replace(/([\n\r])+/gm, "\n");
          for (var c = /([,.:!\u00a1?\u00bf;()\[\]\u2014\u00ab\u00bb])+[\n\r]/gm, d = !0; d; )
            b.match(c) === null ? (d = !1) : (b = b.replace(c, "$1 "));
          return b;
        }
        function z(b, c) {
          if (!q) return b;
          console.log(c);
          var d = b;
          try {
            for (var h = 0; h < q.length; h++) {
              var e = q[h],
                g = !1,
                k = e.collectionvoices;
              k
                ? (Array.isArray(k) || (k = [k]),
                  c.collectionvoice && c.collectionvoice.name && k.indexOf(c.collectionvoice.name) != -1 && (g = !0))
                : (g = !0);
              var f = !1,
                l = e.systemvoices;
              l
                ? (Array.isArray(l) || (l = [l]),
                  c.systemvoice && c.systemvoice.name && l.indexOf(c.systemvoice.name) != -1 && (f = !0))
                : (f = !0);
              (k == null || (k != null && g)) &&
                (l == null || (l != null && f)) &&
                (d = d.replace(e.searchvalue, e.newvalue));
            }
            return d;
          } catch (t) {
            return (console.warn("ResponsiveVoice: There was an error while processing the textReplacements array"), b);
          }
        }
        function x() {
          var b = document.getElementsByTagName("script"),
            c;
          for (c = 0; c < b.length; ++c)
            if (b[c].src && A.test(b[c].src)) {
              var d = b[c].src;
              var h = document.createElement("a");
              var e = {};
              h.href = d;
              if (h.search) {
                var g = h.search.replace(/^\?/, "").split("&");
                for (d = 0; d < g.length; d++) ((h = g[d].split("=")), (e[h[0]] = h[1]));
                e = e.source ? e.source : !1;
              } else e = !1;
              if (e && e == "wp-plugin") return ((A.lastIndex = 0), !0);
            }
          return !1;
        }
        function u() {
          var b = document.getElementsByTagName("script"),
            c;
          for (c = 0; c < b.length; ++c) if (b[c].src && A.test(b[c].src)) return ((A.lastIndex = 0), !1);
          return !0;
        }
        var a = this;
        a.version = "1.8.4";
        a.responsivevoices = [
          {
            name: "UK English Female",
            flag: "gb",
            gender: "f",
            lang: "en-GB",
            voiceIDs: [3, 7, 171, 201, 5, 1, 528, 257, 286, 342, 258, 287, 343, 8],
          },
          {
            name: "UK English Male",
            flag: "gb",
            gender: "m",
            lang: "en-GB",
            voiceIDs: [0, 277, 202, 75, 4, 2, 256, 285, 341, 159],
          },
          {
            name: "US English Female",
            flag: "us",
            gender: "f",
            lang: "en-US",
            voiceIDs: [432, 433, 434, 40, 41, 42, 383, 205, 204, 43, 481, 173, 235, 283, 339, 408, 44],
          },
          {
            name: "US English Male",
            flag: "us",
            gender: "m",
            lang: "en-US",
            voiceIDs: [431, 39, 234, 282, 338, 236, 284, 340, 2, 4, 0, 75, 195, 169],
          },
          { name: "Arabic Male", flag: "ar", gender: "m", lang: "ar-SA", voiceIDs: [96, 95, 97, 196, 388] },
          { name: "Arabic Female", flag: "ar", gender: "f", lang: "ar-SA", voiceIDs: [483, 98] },
          { name: "Armenian Male", flag: "hy", gender: "f", lang: "hy-AM", voiceIDs: [99] },
          {
            name: "Australian Female",
            flag: "au",
            gender: "f",
            lang: "en-AU",
            voiceIDs: [495, 415, 276, 201, 87, 5, 88],
          },
          { name: "Australian Male", flag: "au", gender: "m", lang: "en-AU", voiceIDs: [86, 386] },
          { name: "Bangla Bangladesh Female", flag: "bd", gender: "f", lang: "bn-BD", voiceIDs: [435] },
          { name: "Bangla Bangladesh Male", flag: "bd", gender: "m", lang: "bn-BD", voiceIDs: [485, 410, 436] },
          { name: "Bangla India Female", flag: "bd", gender: "f", lang: "bn-IN", voiceIDs: [447] },
          { name: "Bangla India Male", flag: "bd", gender: "m", lang: "bn-IN", voiceIDs: [492, 411, 448] },
          {
            name: "Brazilian Portuguese Female",
            flag: "br",
            gender: "f",
            lang: "pt-BR",
            voiceIDs: [245, 124, 123, 125, 499, 186, 223, 126],
          },
          {
            name: "Brazilian Portuguese Male",
            flag: "br",
            gender: "m",
            lang: "pt-BR",
            voiceIDs: [315, 332, 371, 399],
            deprecated: !0,
          },
          {
            name: "Chinese Female",
            flag: "cn",
            gender: "f",
            lang: "zh-CN",
            voiceIDs: [249, 58, 59, 452, 380, 281, 231, 155, 60, 513, 191, 268, 297, 353, 269, 298, 354, 409, 61],
          },
          { name: "Chinese Male", flag: "cn", gender: "m", lang: "zh-CN", voiceIDs: [317, 334, 373, 389] },
          {
            name: "Chinese (Hong Kong) Female",
            flag: "hk",
            gender: "f",
            lang: "zh-HK",
            voiceIDs: [463, 464, 192, 193, 232, 250, 251, 270, 299, 355, 409, 444, 252],
          },
          {
            name: "Chinese (Hong Kong) Male",
            flag: "hk",
            gender: "m",
            lang: "zh-HK",
            voiceIDs: [430, 318, 335, 374, 445, 390],
          },
          {
            name: "Chinese Taiwan Female",
            flag: "tw",
            gender: "f",
            lang: "zh-TW",
            voiceIDs: [469, 194, 233, 253, 254, 305, 322, 361, 384, 319, 336, 375, 409, 255],
          },
          { name: "Chinese Taiwan Male", flag: "tw", gender: "m", lang: "zh-TW", voiceIDs: [320, 337, 376, 391] },
          {
            name: "Czech Female",
            flag: "cz",
            gender: "f",
            lang: "cs-CZ",
            voiceIDs: [504, 412, 101, 100, 102, 197, 103],
          },
          { name: "Czech Male", flag: "cz", gender: "m", lang: "cs-CZ", voiceIDs: [161], deprecated: !0 },
          {
            name: "Danish Female",
            flag: "dk",
            gender: "f",
            lang: "da-DK",
            voiceIDs: [474, 413, 105, 104, 106, 198, 107],
          },
          { name: "Danish Male", flag: "da", gender: "m", lang: "da-DK", voiceIDs: [162], deprecated: !0 },
          {
            name: "Deutsch Female",
            flag: "de",
            gender: "f",
            lang: "de-DE",
            voiceIDs: [27, 28, 29, 30, 78, 170, 275, 199, 31, 502, 261, 290, 346, 262, 291, 347, 32],
          },
          { name: "Deutsch Male", flag: "de", gender: "m", lang: "de-DE", voiceIDs: [307, 324, 363, 377, 393] },
          {
            name: "Dutch Female",
            flag: "nl",
            gender: "f",
            lang: "nl-NL",
            voiceIDs: [243, 219, 84, 157, 158, 496, 184, 45],
          },
          { name: "Dutch Male", flag: "nl", gender: "m", lang: "nl-NL", voiceIDs: [157, 220, 407] },
          { name: "Estonian Male", flag: "ee", gender: "m", lang: "et-EE", voiceIDs: [476, 416, 446] },
          { name: "Filipino Female", flag: "ph", gender: "f", lang: "fil-PH", voiceIDs: [507, 418, 437] },
          { name: "Finnish Female", flag: "fi", gender: "f", lang: "fi-FI", voiceIDs: [490, 417, 90, 89, 91, 209, 92] },
          { name: "Finnish Male", flag: "fi", gender: "m", lang: "fi-FI", voiceIDs: [160], deprecated: !0 },
          {
            name: "French Female",
            flag: "fr",
            gender: "f",
            lang: "fr-FR",
            voiceIDs: [240, 21, 22, 23, 77, 178, 279, 210, 493, 266, 295, 351, 304, 321, 360, 26],
          },
          { name: "French Male", flag: "fr", gender: "m", lang: "fr-FR", voiceIDs: [311, 328, 367, 378, 392] },
          { name: "French Canadian Female", flag: "ca", gender: "f", lang: "fr-CA", voiceIDs: [497, 419, 210, 449] },
          { name: "French Canadian Male", flag: "ca", gender: "m", lang: "fr-CA", voiceIDs: [450] },
          { name: "Greek Female", flag: "gr", gender: "f", lang: "el-GR", voiceIDs: [488, 414, 62, 63, 80, 200, 64] },
          { name: "Greek Male", flag: "gr", gender: "m", lang: "el-GR", voiceIDs: [163], deprecated: !0 },
          {
            name: "Hindi Female",
            flag: "hi",
            gender: "f",
            lang: "hi-IN",
            voiceIDs: [247, 66, 154, 179, 213, 489, 259, 288, 344, 67],
          },
          { name: "Hindi Male", flag: "hi", gender: "m", lang: "hi-IN", voiceIDs: [394] },
          {
            name: "Hungarian Female",
            flag: "hu",
            gender: "f",
            lang: "hu-HU",
            voiceIDs: [470, 420, 9, 10, 81, 214, 11],
          },
          { name: "Hungarian Male", flag: "hu", gender: "m", lang: "hu-HU", voiceIDs: [164], deprecated: !0 },
          {
            name: "Indonesian Female",
            flag: "id",
            gender: "f",
            lang: "id-ID",
            voiceIDs: [241, 111, 112, 524, 180, 215, 113],
          },
          { name: "Indonesian Male", flag: "id", gender: "m", lang: "id-ID", voiceIDs: [395] },
          {
            name: "Italian Female",
            flag: "it",
            gender: "f",
            lang: "it-IT",
            voiceIDs: [242, 33, 34, 35, 36, 37, 79, 181, 216, 508, 271, 300, 356, 38],
          },
          { name: "Italian Male", flag: "it", gender: "m", lang: "it-IT", voiceIDs: [312, 329, 368, 406] },
          {
            name: "Japanese Female",
            flag: "jp",
            gender: "f",
            lang: "ja-JP",
            voiceIDs: [51, 280, 217, 52, 153, 517, 182, 273, 302, 358, 274, 303, 359, 53],
          },
          { name: "Japanese Male", flag: "jp", gender: "m", lang: "ja-JP", voiceIDs: [248, 50, 313, 330, 369, 396] },
          {
            name: "Korean Female",
            flag: "kr",
            gender: "f",
            lang: "ko-KR",
            voiceIDs: [54, 55, 56, 156, 183, 218, 466, 306, 323, 362, 384, 57],
          },
          { name: "Korean Male", flag: "kr", gender: "m", lang: "ko-KR", voiceIDs: [397] },
          { name: "Latin Female", flag: "va", gender: "f", lang: "la", voiceIDs: [114], deprecated: !0 },
          { name: "Latin Male", flag: "va", gender: "m", lang: "la", voiceIDs: [165] },
          { name: "Nepali", flag: "np", gender: "f", lang: "ne-NP", voiceIDs: [509, 423, 441] },
          { name: "Norwegian Female", flag: "no", gender: "f", lang: "nb-NO", voiceIDs: [473, 422, 72, 73, 221, 74] },
          { name: "Norwegian Male", flag: "no", gender: "m", lang: "nb-NO", voiceIDs: [166] },
          {
            name: "Polish Female",
            flag: "pl",
            gender: "f",
            lang: "pl-PL",
            voiceIDs: [244, 120, 119, 121, 185, 222, 505, 267, 296, 352, 122],
          },
          { name: "Polish Male", flag: "pl", gender: "m", lang: "pl-PL", voiceIDs: [314, 331, 370, 398] },
          {
            name: "Portuguese Female",
            flag: "br",
            gender: "f",
            lang: "pt-BR",
            voiceIDs: [128, 127, 129, 187, 224, 479, 272, 301, 357, 130],
          },
          { name: "Portuguese Male", flag: "br", gender: "m", lang: "pt-BR", voiceIDs: [400] },
          {
            name: "Romanian Female",
            flag: "ro",
            gender: "f",
            lang: "ro-RO",
            voiceIDs: [526, 424, 151, 150, 152, 225, 46],
          },
          {
            name: "Russian Female",
            flag: "ru",
            gender: "f",
            lang: "ru-RU",
            voiceIDs: [246, 47, 48, 83, 468, 188, 226, 260, 289, 345, 49],
          },
          {
            name: "Russian Male",
            flag: "ru",
            gender: "m",
            lang: "ru-RU",
            voiceIDs: [316, 333, 372, 387],
            deprecated: !0,
          },
          { name: "Sinhala", flag: "lk", gender: "f", lang: "si-LK", voiceIDs: [501, 425, 442] },
          {
            name: "Slovak Female",
            flag: "sk",
            gender: "f",
            lang: "sk-SK",
            voiceIDs: [506, 426, 133, 132, 134, 227, 135],
          },
          { name: "Slovak Male", flag: "sk", gender: "m", lang: "sk-SK", voiceIDs: [167], deprecated: !0 },
          {
            name: "Spanish Female",
            flag: "es",
            gender: "f",
            lang: "es-ES",
            voiceIDs: [19, 238, 16, 17, 18, 20, 76, 174, 207, 514, 521, 263, 292, 348, 264, 293, 349, 15],
          },
          {
            name: "Spanish Male",
            flag: "es",
            gender: "m",
            lang: "es-ES",
            voiceIDs: [309, 326, 365, 401],
            deprecated: !0,
          },
          {
            name: "Spanish Latin American Female",
            flag: "es",
            gender: "f",
            lang: "es-MX",
            voiceIDs: [239, 137, 136, 138, 175, 208, 265, 294, 350, 139],
          },
          {
            name: "Spanish Latin American Male",
            flag: "es",
            gender: "m",
            lang: "es-MX",
            voiceIDs: [136, 310, 327, 366, 402],
          },
          { name: "Swedish Female", flag: "sv", gender: "f", lang: "sv-SE", voiceIDs: [482, 427, 85, 149, 228, 65] },
          { name: "Swedish Male", flag: "sv", gender: "m", lang: "sv-SE", voiceIDs: [148, 168] },
          { name: "Tamil Female", flag: "hi", gender: "m", lang: "hi-IN", voiceIDs: [458, 516, 451] },
          { name: "Tamil Male", flag: "hi", gender: "m", lang: "hi-IN", voiceIDs: [141] },
          {
            name: "Thai Female",
            flag: "th",
            gender: "f",
            lang: "th-TH",
            voiceIDs: [143, 142, 144, 471, 189, 229, 145],
          },
          { name: "Thai Male", flag: "th", gender: "m", lang: "th-TH", voiceIDs: [403] },
          { name: "Turkish Female", flag: "tr", gender: "f", lang: "tr-TR", voiceIDs: [69, 70, 82, 475, 190, 230, 71] },
          { name: "Turkish Male", flag: "tr", gender: "m", lang: "tr-TR", voiceIDs: [465, 404] },
          { name: "Ukrainian Female", flag: "ua", gender: "f", lang: "uk-UA", voiceIDs: [494, 428, 443] },
          { name: "Vietnamese Female", flag: "vi", gender: "f", lang: "vi-VN", voiceIDs: [480, 429, 405] },
          { name: "Vietnamese Male", flag: "vi", gender: "m", lang: "vi-VN", voiceIDs: [146] },
          { name: "Afrikaans Male", flag: "af", gender: "m", lang: "af-ZA", voiceIDs: [93] },
          { name: "Albanian Male", flag: "sq", gender: "m", lang: "sq-AL", voiceIDs: [94] },
          { name: "Bosnian Male", flag: "bs", gender: "m", lang: "bs", voiceIDs: [14] },
          { name: "Catalan Male", flag: "catalonia", gender: "m", lang: "ca-ES", voiceIDs: [68] },
          { name: "Croatian Male", flag: "hr", gender: "m", lang: "hr-HR", voiceIDs: [13] },
          { name: "Esperanto Male", flag: "eo", gender: "m", lang: "eo", voiceIDs: [108] },
          { name: "Icelandic Male", flag: "is", gender: "m", lang: "is-IS", voiceIDs: [110], deprecated: !0 },
          { name: "Icelandic Female", flag: "is", gender: "m", lang: "is-IS", voiceIDs: [110] },
          { name: "Latvian Male", flag: "lv", gender: "m", lang: "lv-LV", voiceIDs: [115] },
          { name: "Macedonian Male", flag: "mk", gender: "m", lang: "mk-MK", voiceIDs: [116] },
          { name: "Moldavian Female", flag: "md", gender: "f", lang: "md", voiceIDs: [117] },
          { name: "Moldavian Male", flag: "md", gender: "m", lang: "md", voiceIDs: [117], deprecated: !0 },
          { name: "Montenegrin Male", flag: "me", gender: "m", lang: "me", voiceIDs: [118] },
          { name: "Serbian Male", flag: "sr", gender: "m", lang: "sr-RS", voiceIDs: [12] },
          { name: "Serbo-Croatian Male", flag: "hr", gender: "m", lang: "hr-HR", voiceIDs: [131] },
          { name: "Swahili Male", flag: "sw", gender: "m", lang: "sw-KE", voiceIDs: [140] },
          { name: "Welsh Male", flag: "cy", gender: "m", lang: "cy", voiceIDs: [147] },
          { name: "Fallback UK Female", flag: "gb", gender: "f", lang: "en-GB", voiceIDs: [8] },
        ];
        a.voicecollection = [
          { name: "Google UK English Male" },
          { name: "Agnes" },
          { name: "Daniel Compact" },
          { name: "Google UK English Female" },
          { name: "en-GB", rate: 0.25, pitch: 1 },
          { name: "en-AU", rate: 0.25, pitch: 1 },
          { name: "ingl\u00e9s Reino Unido" },
          { name: "English United Kingdom" },
          { name: "Fallback en-GB Female", lang: "en-GB", fallbackvoice: !0, service: "g1", gender: "female" },
          { name: "Eszter Compact" },
          { name: "hu-HU", rate: 0.4 },
          { name: "Fallback Hungarian Female", lang: "hu", fallbackvoice: !0, service: "g1" },
          { name: "Fallback Serbian Male", lang: "sr", fallbackvoice: !0, service: "g1", gender: "male" },
          { name: "Fallback Croatian Male", lang: "hr", rate: 0.5, fallbackvoice: !0, service: "g2", gender: "male" },
          { name: "Fallback Bosnian Male", lang: "bs", fallbackvoice: !0, service: "g2", gender: "male" },
          { name: "Fallback Spanish Female", lang: "es", fallbackvoice: !0, service: "g1", gender: "female" },
          { name: "Spanish Spain" },
          { name: "espa\u00f1ol Espa\u00f1a" },
          { name: "Diego Compact", rate: 0.3 },
          { name: "Google Espa\u00f1ol" },
          { name: "es-ES", rate: 0.2 },
          { name: "Google Fran\u00e7ais" },
          { name: "French France" },
          { name: "franc\u00e9s Francia" },
          { name: "Virginie Compact", rate: 0.5 },
          { name: "fr-FR", rate: 0.25 },
          { name: "Fallback French Female", lang: "fr", fallbackvoice: !0, service: "g1", gender: "female" },
          { name: "Google Deutsch" },
          { name: "German Germany" },
          { name: "alem\u00e1n Alemania" },
          { name: "Yannick Compact", rate: 0.5 },
          { name: "de-DE", rate: 0.25 },
          { name: "Fallback Deutsch Female", lang: "de", fallbackvoice: !0, service: "g1", gender: "female" },
          { name: "Google Italiano" },
          { name: "Italian Italy" },
          { name: "italiano Italia" },
          { name: "Paolo Compact", rate: 0.5 },
          { name: "it-IT", rate: 0.25 },
          { name: "Fallback Italian Female", lang: "it", fallbackvoice: !0, service: "g1", gender: "female" },
          { name: "Google US English", timerSpeed: 1 },
          { name: "English United States" },
          { name: "ingl\u00e9s Estados Unidos" },
          { name: "Vicki" },
          { name: "en-US", rate: 0.2, pitch: 1, timerSpeed: 1.3 },
          {
            name: "Fallback US English",
            lang: "en-US",
            fallbackvoice: !0,
            timerSpeed: 0,
            service: "g1",
            gender: "female",
          },
          {
            name: "Fallback Dutch Female",
            lang: "nl",
            fallbackvoice: !0,
            timerSpeed: 0,
            service: "g1",
            gender: "female",
          },
          { name: "Fallback Romanian", lang: "ro", fallbackvoice: !0, service: "g1", gender: "female" },
          { name: "Milena Compact" },
          { name: "ru-RU", rate: 0.25 },
          { name: "Fallback Russian", lang: "ru", fallbackvoice: !0, service: "g1", gender: "female" },
          { name: "Google \u65e5\u672c\u4eba", timerSpeed: 1 },
          { name: "Kyoko Compact" },
          { name: "ja-JP", rate: 0.25 },
          { name: "Fallback Japanese Female", lang: "ja", fallbackvoice: !0, service: "g1", gender: "female" },
          { name: "Google \ud55c\uad6d\uc758", timerSpeed: 1 },
          { name: "Narae Compact" },
          { name: "ko-KR", rate: 0.25 },
          { name: "Fallback Korean Female", lang: "ko", fallbackvoice: !0, service: "g1", gender: "female" },
          { name: "Google \u4e2d\u56fd\u7684", timerSpeed: 1 },
          { name: "Ting-Ting Compact" },
          { name: "zh-CN", rate: 0.25 },
          { name: "Fallback Chinese", lang: "zh-CN", fallbackvoice: !0, service: "g1", gender: "female" },
          { name: "Alexandros Compact" },
          { name: "el-GR", rate: 0.25 },
          { name: "Fallback Greek", lang: "el", fallbackvoice: !0, service: "g3", gender: "female" },
          { name: "Fallback Swedish", lang: "sv", fallbackvoice: !0, service: "g3", gender: "female" },
          { name: "hi-IN", rate: 0.25 },
          { name: "Fallback Hindi Female", lang: "hi", fallbackvoice: !0, service: "g1", gender: "female" },
          { name: "Fallback Catalan", lang: "ca", fallbackvoice: !0, service: "g1", gender: "male" },
          { name: "Aylin Compact" },
          { name: "tr-TR", rate: 0.25 },
          { name: "Fallback Turkish", lang: "tr", fallbackvoice: !0, service: "g1", gender: "female" },
          { name: "Stine Compact" },
          { name: "no-NO", rate: 0.25 },
          { name: "Fallback Norwegian", lang: "no", fallbackvoice: !0, service: "g1", gender: "female" },
          { name: "Daniel" },
          { name: "Monica" },
          { name: "Amelie" },
          { name: "Anna" },
          { name: "Alice" },
          { name: "Melina" },
          { name: "Mariska" },
          { name: "Yelda" },
          { name: "Milena" },
          { name: "Xander" },
          { name: "Alva" },
          { name: "Lee Compact" },
          { name: "Karen" },
          { name: "Fallback Australian Female", lang: "en-AU", fallbackvoice: !0, service: "g1", gender: "female" },
          { name: "Mikko Compact" },
          { name: "Satu" },
          { name: "fi-FI", rate: 0.25 },
          { name: "Fallback Finnish", lang: "fi", fallbackvoice: !0, service: "g1", gender: "female" },
          { name: "Fallback Afrikans", lang: "af", fallbackvoice: !0, service: "g1", gender: "male" },
          { name: "Fallback Albanian", lang: "sq", fallbackvoice: !0, service: "g2", gender: "male" },
          { name: "Maged Compact" },
          { name: "Tarik" },
          { name: "ar-SA", rate: 0.25 },
          { name: "Fallback Arabic", lang: "ar", fallbackvoice: !0, service: "g1", gender: "female" },
          { name: "Fallback Armenian", lang: "hy", fallbackvoice: !0, service: "g5", gender: "male" },
          { name: "Zuzana Compact" },
          { name: "Zuzana" },
          { name: "cs-CZ", rate: 0.25 },
          { name: "Fallback Czech", lang: "cs", fallbackvoice: !0, service: "g1", gender: "female" },
          { name: "Ida Compact" },
          { name: "Sara" },
          { name: "da-DK", rate: 0.25 },
          { name: "Fallback Danish", lang: "da", fallbackvoice: !0, service: "g1", gender: "female" },
          { name: "Fallback Esperanto", lang: "eo", fallbackvoice: !0, service: "g5", gender: "male" },
          { name: "Fallback Haitian Creole", lang: "ht", fallbackvoice: !0 },
          { name: "Fallback Icelandic", lang: "is", fallbackvoice: !0, service: "g1", gender: "male" },
          { name: "Damayanti" },
          { name: "id-ID", rate: 0.25 },
          { name: "Fallback Indonesian Female", lang: "id", fallbackvoice: !0, service: "g1", gender: "female" },
          { name: "Fallback Latin Female", lang: "la", fallbackvoice: !0, service: "g2", gender: "female" },
          { name: "Fallback Latvian Male", lang: "lv", fallbackvoice: !0, service: "g1", gender: "male" },
          { name: "Fallback Macedonian Male", lang: "mk", fallbackvoice: !0, service: "g5", gender: "male" },
          { name: "Fallback Moldavian Female", lang: "mo", fallbackvoice: !0, service: "g2", gender: "female" },
          { name: "Fallback Montenegrin Male", lang: "sr-ME", fallbackvoice: !0, service: "g1", gender: "male" },
          { name: "Agata Compact" },
          { name: "Zosia" },
          { name: "pl-PL", rate: 0.25 },
          { name: "Fallback Polish Female", lang: "pl", fallbackvoice: !0, service: "g1", gender: "female" },
          { name: "Raquel Compact" },
          { name: "Luciana" },
          { name: "pt-BR", rate: 0.25 },
          {
            name: "Fallback Brazilian Portuguese Female",
            lang: "pt-BR",
            fallbackvoice: !0,
            service: "g1",
            gender: "female",
          },
          { name: "Joana Compact" },
          { name: "Joana" },
          { name: "pt-PT", rate: 0.25 },
          { name: "Fallback Portuguese", lang: "pt-PT", fallbackvoice: !0, service: "g1", gender: "female" },
          { name: "Fallback Serbo-Croation", lang: "sh", fallbackvoice: !0, service: "g2", gender: "male" },
          { name: "Laura Compact" },
          { name: "Laura" },
          { name: "sk-SK", rate: 0.25 },
          { name: "Fallback Slovak", lang: "sk", fallbackvoice: !0, service: "g1", gender: "female" },
          { name: "Javier Compact" },
          { name: "Paulina" },
          { name: "es-MX", rate: 0.25 },
          {
            name: "Fallback Spanish (Latin American) Female",
            lang: "es-419",
            fallbackvoice: !0,
            service: "g1",
            gender: "female",
          },
          { name: "Fallback Swahili", lang: "sw", fallbackvoice: !0, service: "g2", gender: "male" },
          { name: "Fallback Tamil", lang: "ta", fallbackvoice: !0, service: "g1", gender: "male" },
          { name: "Narisa Compact" },
          { name: "Kanya" },
          { name: "th-TH", rate: 0.25 },
          { name: "Fallback Thai Female", lang: "th", fallbackvoice: !0, service: "g1", gender: "female" },
          { name: "Fallback Vietnamese Male", lang: "vi", fallbackvoice: !0, service: "g3", gender: "male" },
          { name: "Fallback Welsh", lang: "cy", fallbackvoice: !0, service: "g5", gender: "male" },
          { name: "Oskar Compact" },
          { name: "sv-SE", rate: 0.25 },
          { name: "Simona Compact" },
          { name: "Ioana" },
          { name: "ro-RO", rate: 0.25 },
          { name: "Kyoko" },
          { name: "Lekha" },
          { name: "Ting-Ting" },
          { name: "Yuna" },
          { name: "Xander Compact" },
          { name: "nl-NL", rate: 0.25 },
          {
            name: "Fallback UK English Male",
            lang: "en-GB",
            fallbackvoice: !0,
            service: "g1",
            voicename: "rjs",
            gender: "male",
          },
          {
            name: "Finnish Male",
            lang: "fi",
            fallbackvoice: !0,
            service: "g3",
            voicename: "",
            gender: "male",
            deprecated: !0,
          },
          {
            name: "Czech Male",
            lang: "cs",
            fallbackvoice: !0,
            service: "g3",
            voicename: "",
            gender: "male",
            deprecated: !0,
          },
          {
            name: "Danish Male",
            lang: "da",
            fallbackvoice: !0,
            service: "g3",
            voicename: "",
            gender: "male",
            deprecated: !0,
          },
          {
            name: "Greek Male",
            lang: "el",
            fallbackvoice: !0,
            service: "g3",
            voicename: "",
            gender: "male",
            deprecated: !0,
          },
          {
            name: "Hungarian Male",
            lang: "hu",
            fallbackvoice: !0,
            service: "g3",
            voicename: "",
            gender: "male",
            deprecated: !0,
          },
          { name: "Latin Male", lang: "la", fallbackvoice: !0, service: "g2", voicename: "", gender: "male" },
          { name: "Norwegian Male", lang: "no", fallbackvoice: !0, service: "g3", voicename: "", gender: "male" },
          {
            name: "Slovak Male",
            lang: "sk",
            fallbackvoice: !0,
            service: "g3",
            voicename: "",
            gender: "male",
            deprecated: !0,
          },
          { name: "Swedish Male", lang: "sv", fallbackvoice: !0, service: "g3", voicename: "", gender: "male" },
          {
            name: "Fallback US English Male",
            lang: "en-US",
            fallbackvoice: !0,
            service: "g3",
            voicename: "",
            gender: "male",
          },
          { name: "German Germany", lang: "de_DE" },
          { name: "English United Kingdom", lang: "en_GB" },
          { name: "English India", lang: "en_IN" },
          { name: "English United States", lang: "en_US" },
          { name: "Spanish Spain", lang: "es_ES" },
          { name: "Spanish Mexico", lang: "es_MX" },
          { name: "Spanish United States", lang: "es_US" },
          { name: "French Belgium", lang: "fr_BE" },
          { name: "French France", lang: "fr_FR" },
          { name: "Hindi India", lang: "hi_IN" },
          { name: "Indonesian Indonesia", lang: "in_ID" },
          { name: "Italian Italy", lang: "it_IT" },
          { name: "Japanese Japan", lang: "ja_JP" },
          { name: "Korean South Korea", lang: "ko_KR" },
          { name: "Dutch Netherlands", lang: "nl_NL" },
          { name: "Polish Poland", lang: "pl_PL" },
          { name: "Portuguese Brazil", lang: "pt_BR" },
          { name: "Portuguese Portugal", lang: "pt_PT" },
          { name: "Russian Russia", lang: "ru_RU" },
          { name: "Thai Thailand", lang: "th_TH" },
          { name: "Turkish Turkey", lang: "tr_TR" },
          { name: "Chinese China", lang: "zh_CN_#Hans" },
          { name: "Chinese Hong Kong", lang: "zh_HK_#Hans" },
          { name: "Chinese Hong Kong", lang: "zh_HK_#Hant" },
          { name: "Chinese Taiwan", lang: "zh_TW_#Hant" },
          { name: "Alex" },
          { name: "Maged", lang: "ar-SA" },
          { name: "Zuzana", lang: "cs-CZ" },
          { name: "Sara", lang: "da-DK" },
          { name: "Anna", lang: "de-DE" },
          { name: "Melina", lang: "el-GR" },
          { name: "Karen", lang: "en-AU" },
          { name: "Daniel", lang: "en-GB" },
          { name: "Moira", lang: "en-IE" },
          { name: "Samantha (Enhanced)", lang: "en-US" },
          { name: "Samantha", lang: "en-US" },
          { name: "Tessa", lang: "en-ZA" },
          { name: "Monica", lang: "es-ES" },
          { name: "Paulina", lang: "es-MX" },
          { name: "Satu", lang: "fi-FI" },
          { name: "Amelie", lang: "fr-CA" },
          { name: "Thomas", lang: "fr-FR" },
          { name: "Carmit", lang: "he-IL" },
          { name: "Lekha", lang: "hi-IN" },
          { name: "Mariska", lang: "hu-HU" },
          { name: "Damayanti", lang: "id-ID" },
          { name: "Alice", lang: "it-IT" },
          { name: "Kyoko", lang: "ja-JP" },
          { name: "Yuna", lang: "ko-KR" },
          { name: "Ellen", lang: "nl-BE" },
          { name: "Xander", lang: "nl-NL" },
          { name: "Nora", lang: "no-NO" },
          { name: "Zosia", lang: "pl-PL" },
          { name: "Luciana", lang: "pt-BR" },
          { name: "Joana", lang: "pt-PT" },
          { name: "Ioana", lang: "ro-RO" },
          { name: "Milena", lang: "ru-RU" },
          { name: "Laura", lang: "sk-SK" },
          { name: "Alva", lang: "sv-SE" },
          { name: "Kanya", lang: "th-TH" },
          { name: "Yelda", lang: "tr-TR" },
          { name: "Ting-Ting", lang: "zh-CN" },
          { name: "Sin-Ji", lang: "zh-HK" },
          { name: "Mei-Jia", lang: "zh-TW" },
          { name: "Microsoft David Mobile - English (United States)", lang: "en-US" },
          { name: "Microsoft Zira Mobile - English (United States)", lang: "en-US" },
          { name: "Microsoft Mark Mobile - English (United States)", lang: "en-US" },
          { name: "native", lang: "" },
          { name: "Google espa\u00f1ol" },
          { name: "Google espa\u00f1ol de Estados Unidos" },
          { name: "Google fran\u00e7ais" },
          { name: "Google Bahasa Indonesia" },
          { name: "Google italiano" },
          { name: "Google Nederlands" },
          { name: "Google polski" },
          { name: "Google portugu\u00eas do Brasil" },
          { name: "Google \u0440\u0443\u0441\u0441\u043a\u0438\u0439" },
          { name: "Google \u0939\u093f\u0928\u094d\u0926\u0940" },
          { name: "Google \u65e5\u672c\u8a9e" },
          { name: "Google \u666e\u901a\u8bdd\uff08\u4e2d\u56fd\u5927\u9646\uff09" },
          { name: "Google \u7ca4\u8a9e\uff08\u9999\u6e2f\uff09" },
          { name: "zh-HK", rate: 0.25 },
          {
            name: "Fallback Chinese (Hong Kong) Female",
            lang: "zh-HK",
            fallbackvoice: !0,
            service: "g1",
            gender: "female",
          },
          { name: "Google \u7ca4\u8a9e\uff08\u9999\u6e2f\uff09" },
          { name: "zh-TW", rate: 0.25 },
          {
            name: "Fallback Chinese (Taiwan) Female",
            lang: "zh-TW",
            fallbackvoice: !0,
            service: "g1",
            gender: "female",
          },
          { name: "Microsoft George Mobile - English (United Kingdom)", lang: "en-GB" },
          { name: "Microsoft Susan Mobile - English (United Kingdom)", lang: "en-GB" },
          { name: "Microsoft Hazel Mobile - English (United Kingdom)", lang: "en-GB" },
          { name: "Microsoft Heera Mobile - English (India)", lang: "en-In" },
          { name: "Microsoft Irina Mobile - Russian (Russia)", lang: "ru-RU" },
          { name: "Microsoft Hedda Mobile - German (Germany)", lang: "de-DE" },
          { name: "Microsoft Katja Mobile - German (Germany)", lang: "de-DE" },
          { name: "Microsoft Helena Mobile - Spanish (Spain)", lang: "es-ES" },
          { name: "Microsoft Laura Mobile - Spanish (Spain)", lang: "es-ES" },
          { name: "Microsoft Sabina Mobile - Spanish (Mexico)", lang: "es-MX" },
          { name: "Microsoft Julie Mobile - French (France)", lang: "fr-FR" },
          { name: "Microsoft Paulina Mobile - Polish (Poland)", lang: "pl-PL" },
          { name: "Microsoft Huihui Mobile - Chinese (Simplified, PRC)", lang: "zh-CN" },
          { name: "Microsoft Yaoyao Mobile - Chinese (Simplified, PRC)", lang: "zh-CN" },
          { name: "Microsoft Tracy Mobile - Chinese (Traditional, Hong Kong S.A.R.)", lang: "zh-CN" },
          { name: "Microsoft Elsa Mobile - Italian (Italy)", lang: "it-IT" },
          { name: "Microsoft Maria Mobile - Portuguese (Brazil)", lang: "pt-BR" },
          { name: "Microsoft Ayumi Mobile - Japanese (Japan)", lang: "ja-JP" },
          { name: "Microsoft Haruka Mobile - Japanese (Japan)", lang: "ja-JP" },
          { name: "Helena", lang: "de-DE" },
          { name: "Catherine", lang: "en-AU" },
          { name: "Arthur", lang: "en-GB" },
          { name: "Martha", lang: "en-GB" },
          { name: "Marie", lang: "fr-FR" },
          { name: "O-ren", lang: "ja-JP" },
          { name: "Yu-shu", lang: "zh-CN" },
          { name: "Microsoft David - English (United States)", lang: "en-US" },
          { name: "Microsoft Zira - English (United States)", lang: "en-US" },
          { name: "Microsoft Mark - English (United States)", lang: "en-US" },
          { name: "Microsoft George - English (United Kingdom)", lang: "en-GB" },
          { name: "Microsoft Susan - English (United Kingdom)", lang: "en-GB" },
          { name: "Microsoft Hazel - English (United Kingdom)", lang: "en-GB" },
          { name: "Microsoft Heera - English (India)", lang: "en-In" },
          { name: "Microsoft Irina - Russian (Russia)", lang: "ru-RU" },
          { name: "Microsoft Hedda - German (Germany)", lang: "de-DE" },
          { name: "Microsoft Katja - German (Germany)", lang: "de-DE" },
          { name: "Microsoft Helena - Spanish (Spain)", lang: "es-ES" },
          { name: "Microsoft Laura - Spanish (Spain)", lang: "es-ES" },
          { name: "Microsoft Sabina - Spanish (Mexico)", lang: "es-MX" },
          { name: "Microsoft Julie - French (France)", lang: "fr-FR" },
          { name: "Microsoft Paulina - Polish (Poland)", lang: "pl-PL" },
          { name: "Microsoft Huihui - Chinese (Simplified, PRC)", lang: "zh-CN" },
          { name: "Microsoft Yaoyao - Chinese (Simplified, PRC)", lang: "zh-CN" },
          { name: "Microsoft Tracy - Chinese (Traditional, Hong Kong S.A.R.)", lang: "zh-CN" },
          { name: "Microsoft Elsa - Italian (Italy)", lang: "it-IT" },
          { name: "Microsoft Maria - Portuguese (Brazil)", lang: "pt-BR" },
          { name: "Microsoft Ayumi - Japanese (Japan)", lang: "ja-JP" },
          { name: "Microsoft Haruka - Japanese (Japan)", lang: "ja-JP" },
          { name: "Microsoft Hortense - French (France)", lang: "fr-FR" },
          { name: "Microsoft Hanhan - Chinese (Traditional, Taiwan)", lang: "zh-TW" },
          { name: "Microsoft Heami - Korean (Korean)", lang: "ko-KR" },
          { name: "Microsoft Stefan - German (Germany)", lang: "de-DE" },
          { name: "Microsoft Ravi - English (India)", lang: "en-IN" },
          { name: "Microsoft Pablo - Spanish (Spain)", lang: "es-ES" },
          { name: "Microsoft Raul - Spanish (Mexico)", lang: "es-MX" },
          { name: "Microsoft Paul - French (France)", lang: "fr-FR" },
          { name: "Microsoft Cosimo - Italian (Italy)", lang: "it-IT" },
          { name: "Microsoft Ichiro - Japanese (Japan)", lang: "ja-JP" },
          { name: "Microsoft Adam - Polish (Poland)", lang: "pl-PL" },
          { name: "Microsoft Daniel - Portuguese (Brazil)", lang: "pt-BR" },
          { name: "Microsoft Pavel - Russian (Russia)", lang: "ru-RU" },
          { name: "Microsoft Kangkang - Chinese (Simplified, PRC)", lang: "zh-CN" },
          { name: "Microsoft Danny - Chinese (Traditional, Hong Kong S.A.R.)", lang: "zh-HK" },
          { name: "Microsoft Yating - Chinese (Traditional, Taiwan)", lang: "zh-TW" },
          { name: "Microsoft Zhiwei - Chinese (Traditional, Taiwan)", lang: "zh-TW" },
          { name: "Microsoft Hortense Mobile - French (France)", lang: "fr-FR" },
          { name: "Microsoft Hanhan Mobile - Chinese (Traditional, Taiwan)", lang: "zh-TW" },
          { name: "Microsoft Heami Mobile - Korean (Korean)", lang: "ko-KR" },
          { name: "Microsoft Stefan Mobile - German (Germany)", lang: "de-DE" },
          { name: "Microsoft Ravi Mobile - English (India)", lang: "en-IN" },
          { name: "Microsoft Pablo Mobile - Spanish (Spain)", lang: "es-ES" },
          { name: "Microsoft Raul Mobile - Spanish (Mexico)", lang: "es-MX" },
          { name: "Microsoft Paul Mobile - French (France)", lang: "fr-FR" },
          { name: "Microsoft Cosimo Mobile - Italian (Italy)", lang: "it-IT" },
          { name: "Microsoft Ichiro Mobile - Japanese (Japan)", lang: "ja-JP" },
          { name: "Microsoft Adam Mobile - Polish (Poland)", lang: "pl-PL" },
          { name: "Microsoft Daniel Mobile - Portuguese (Brazil)", lang: "pt-BR" },
          { name: "Microsoft Pavel Mobile - Russian (Russia)", lang: "ru-RU" },
          { name: "Microsoft Kangkang Mobile - Chinese (Simplified, PRC)", lang: "zh-CN" },
          { name: "Microsoft Danny Mobile - Chinese (Traditional, Hong Kong S.A.R.)", lang: "zh-HK" },
          { name: "Microsoft Yating Mobile - Chinese (Traditional, Taiwan)", lang: "zh-TW" },
          { name: "Microsoft Zhiwei Mobile - Chinese (Traditional, Taiwan)", lang: "zh-TW" },
          { name: "Microsoft David Desktop - English (United States)", lang: "en-US" },
          { name: "Microsoft Zira Desktop - English (United States)", lang: "en-US" },
          { name: "Microsoft Mark Desktop - English (United States)", lang: "en-US" },
          { name: "Microsoft George Desktop - English (United Kingdom)", lang: "en-GB" },
          { name: "Microsoft Susan Desktop - English (United Kingdom)", lang: "en-GB" },
          { name: "Microsoft Hazel Desktop - English (United Kingdom)", lang: "en-GB" },
          { name: "Microsoft Heera Desktop - English (India)", lang: "en-In" },
          { name: "Microsoft Irina Desktop - Russian (Russia)", lang: "ru-RU" },
          { name: "Microsoft Hedda Desktop - German (Germany)", lang: "de-DE" },
          { name: "Microsoft Katja Desktop - German (Germany)", lang: "de-DE" },
          { name: "Microsoft Helena Desktop - Spanish (Spain)", lang: "es-ES" },
          { name: "Microsoft Laura Desktop - Spanish (Spain)", lang: "es-ES" },
          { name: "Microsoft Sabina Desktop - Spanish (Mexico)", lang: "es-MX" },
          { name: "Microsoft Julie Desktop - French (France)", lang: "fr-FR" },
          { name: "Microsoft Paulina Desktop - Polish (Poland)", lang: "pl-PL" },
          { name: "Microsoft Huihui Desktop - Chinese (Simplified, PRC)", lang: "zh-CN" },
          { name: "Microsoft Yaoyao Desktop - Chinese (Simplified, PRC)", lang: "zh-CN" },
          { name: "Microsoft Tracy Desktop - Chinese (Traditional, Hong Kong S.A.R.)", lang: "zh-CN" },
          { name: "Microsoft Elsa Desktop - Italian (Italy)", lang: "it-IT" },
          { name: "Microsoft Maria Desktop - Portuguese (Brazil)", lang: "pt-BR" },
          { name: "Microsoft Ayumi Desktop - Japanese (Japan)", lang: "ja-JP" },
          { name: "Microsoft Haruka Desktop - Japanese (Japan)", lang: "ja-JP" },
          { name: "Microsoft Hortense Desktop - French (France)", lang: "fr-FR" },
          { name: "Microsoft Hanhan Desktop - Chinese (Traditional, Taiwan)", lang: "zh-TW" },
          { name: "Microsoft Heami Desktop - Korean (Korean)", lang: "ko-KR" },
          { name: "Microsoft Stefan Desktop - German (Germany)", lang: "de-DE" },
          { name: "Microsoft Ravi Desktop - English (India)", lang: "en-IN" },
          { name: "Microsoft Pablo Desktop - Spanish (Spain)", lang: "es-ES" },
          { name: "Microsoft Raul Desktop - Spanish (Mexico)", lang: "es-MX" },
          { name: "Microsoft Paul Desktop - French (France)", lang: "fr-FR" },
          { name: "Microsoft Cosimo Desktop - Italian (Italy)", lang: "it-IT" },
          { name: "Microsoft Ichiro Desktop - Japanese (Japan)", lang: "ja-JP" },
          { name: "Microsoft Adam Desktop - Polish (Poland)", lang: "pl-PL" },
          { name: "Microsoft Daniel Desktop - Portuguese (Brazil)", lang: "pt-BR" },
          { name: "Microsoft Pavel Desktop - Russian (Russia)", lang: "ru-RU" },
          { name: "Microsoft Kangkang Desktop - Chinese (Simplified, PRC)", lang: "zh-CN" },
          { name: "Microsoft Danny Desktop - Chinese (Traditional, Hong Kong S.A.R.)", lang: "zh-HK" },
          { name: "Microsoft Yating Desktop - Chinese (Traditional, Taiwan)", lang: "zh-TW" },
          { name: "Microsoft Zhiwei Desktop - Chinese (Traditional, Taiwan)", lang: "zh-TW" },
          { name: "Martin", lang: "de-DE" },
          { name: "Daniel", lang: "fr-FR" },
          { name: "Hattori", lang: "ja-JP" },
          { name: "Li-mu", lang: "zh-CN" },
          { name: "Gordon", lang: "en-AU" },
          { name: "Aaron", lang: "en-US" },
          { name: "Nicky", lang: "en-US" },
          { name: "Microsoft Hanhan Desktop - Chinese (Taiwan)", lang: "zh-TW" },
          { name: "Microsoft Heami Desktop - Korean", lang: "ko-KR" },
          { name: "Fallback Australian Male", lang: "en-AU", fallbackvoice: !0, service: "g3", gender: "male" },
          {
            name: "Fallback Russian Male",
            lang: "ru",
            fallbackvoice: !0,
            service: "g3",
            gender: "male",
            deprecated: !0,
          },
          { name: "Fallback Arabic Male", lang: "ar", fallbackvoice: !0, service: "g3", gender: "male" },
          { name: "Fallback Chinese", lang: "zh-CN", fallbackvoice: !0, service: "g3", gender: "male" },
          { name: "Fallback Chinese HK", lang: "zh-HK", fallbackvoice: !0, service: "g3", gender: "male" },
          { name: "Fallback Chinese TW", lang: "zh-TW", fallbackvoice: !0, service: "g3", gender: "male" },
          { name: "Fallback French Male", lang: "fr", fallbackvoice: !0, service: "g3", gender: "male" },
          { name: "Fallback Deutsch Male", lang: "de", fallbackvoice: !0, service: "g3", gender: "male" },
          { name: "Fallback Hindi Male", lang: "hi", fallbackvoice: !0, service: "g3", gender: "male" },
          { name: "Fallback Indonesian Male", lang: "id", fallbackvoice: !0, service: "g3", gender: "male" },
          { name: "Fallback Japanese Male", lang: "ja", fallbackvoice: !0, service: "g3", gender: "male" },
          { name: "Fallback Korean Male", lang: "ko", fallbackvoice: !0, service: "g3", gender: "male" },
          { name: "Fallback Polish Male", lang: "pl", fallbackvoice: !0, service: "g1", gender: "male" },
          {
            name: "Fallback Brazilian Portuguese Male",
            lang: "pt-BR",
            fallbackvoice: !0,
            service: "g3",
            gender: "male",
            deprecated: !0,
          },
          { name: "Fallback Portuguese Male", lang: "pt-PT", fallbackvoice: !0, service: "g1", gender: "male" },
          {
            name: "Fallback Spanish Male",
            lang: "es",
            fallbackvoice: !0,
            service: "g3",
            gender: "male",
            deprecated: !0,
          },
          {
            name: "Fallback Spanish (Latin American) Male",
            lang: "es-419",
            fallbackvoice: !0,
            service: "g3",
            gender: "male",
          },
          { name: "Fallback Thai Male", lang: "th", fallbackvoice: !0, service: "g3", gender: "male" },
          { name: "Fallback Turkish Male", lang: "tr", fallbackvoice: !0, service: "g3", gender: "male" },
          { name: "Fallback Vietnamese Female", lang: "vi", fallbackvoice: !0, service: "g1", gender: "female" },
          { name: "Fallback Italian Male", lang: "it", fallbackvoice: !0, service: "g3", gender: "male" },
          { name: "Fallback Dutch Male", lang: "nl", fallbackvoice: !0, timerSpeed: 0, service: "g3", gender: "male" },
          { name: "Microsoft Anna - English (United States)", lang: "en-US", gender: "female" },
          { name: "Microsoft Lili - Chinese (China)", lang: "zh-CN", gender: "female" },
          { name: "Bangla Bangladesh", lang: "bn_BD", gender: "male" },
          { name: "Bangla India", lang: "bn_IN", gender: "male" },
          { name: "Czech Czechia", lang: "cs_CZ", gender: "female" },
          { name: "Danish Denmark", lang: "da_DK", gender: "female" },
          { name: "Greek Greece", lang: "el_GR", gender: "female" },
          { name: "English Australia", lang: "en_AU", gender: "female" },
          { name: "Estonian Estonia", lang: "et_EE", gender: "male" },
          { name: "Finnish Finland", lang: "fi_FI", gender: "female" },
          { name: "Filipino Philippines", lang: "fil_PH", gender: "female" },
          { name: "French Canada", lang: "fr_CAF", gender: "female" },
          { name: "Hungarian Hungary", lang: "hu_HU", gender: "female" },
          { name: "Khmer Cambodia", lang: "km_KH", gender: "female" },
          { name: "Norwegian Bokm\u00e5l Norway", lang: "nb_NO", gender: "female" },
          { name: "Nepali Nepal", lang: "ne_NP", gender: "female" },
          { name: "Romanian Romania", lang: "ro_RO", gender: "female" },
          { name: "Sinhala Sri Lanka", lang: "si_LK", gender: "female" },
          { name: "Slovak Slovakia", lang: "sk_SK", gender: "female" },
          { name: "Swedish Sweden", lang: "sv_SE", gender: "female" },
          { name: "Ukrainian Ukraine", lang: "uk_UA", gender: "female" },
          { name: "Vietnamese Vietnam", lang: "vi_VN", gender: "female" },
          { name: "Cantonese Hong Kong", lang: "yue_HK_#Hant", gender: "female" },
          { name: "Microsoft Server Speech Text to Speech Voice (en-US, Guy24kRUS)", lang: "en-US", gender: "male" },
          {
            name: "Microsoft Server Speech Text to Speech Voice (en-US, Jessa24kRUS)",
            lang: "en-US",
            gender: "female",
          },
          { name: "Microsoft Server Speech Text to Speech Voice (en-US, JessaRUS)", lang: "en-US", gender: "female" },
          { name: "Microsoft Server Speech Text to Speech Voice (en-US, ZiraRUS)", lang: "en-US", gender: "female" },
          {
            name: "Fallback Bangla Bangladeh Female",
            lang: "bn-BD",
            fallbackvoice: !0,
            timerSpeed: 0,
            service: "g3",
            gender: "female",
          },
          {
            name: "Fallback Bangla Bangladeh Male",
            lang: "bn-BD",
            fallbackvoice: !0,
            timerSpeed: 0,
            service: "g3",
            gender: "male",
          },
          {
            name: "Fallback Filipino Female",
            lang: "fil-PH",
            fallbackvoice: !0,
            timerSpeed: 0,
            service: "g3",
            gender: "female",
          },
          {
            name: "Fallback Filipino Male",
            lang: "fil-PH",
            fallbackvoice: !0,
            timerSpeed: 0,
            service: "g3",
            gender: "male",
          },
          {
            name: "Fallback Cambodian Khmer Female",
            lang: "km-KH",
            fallbackvoice: !0,
            timerSpeed: 0,
            service: "g3",
            gender: "female",
          },
          {
            name: "Fallback Cambodian Khmer Male",
            lang: "km-KH",
            fallbackvoice: !0,
            timerSpeed: 0,
            service: "g3",
            gender: "male",
          },
          {
            name: "Fallback Nepali Female",
            lang: "ne-NP",
            fallbackvoice: !0,
            timerSpeed: 0,
            service: "g3",
            gender: "female",
          },
          {
            name: "Fallback Sinhala Female",
            lang: "si-LK",
            fallbackvoice: !0,
            timerSpeed: 0,
            service: "g3",
            gender: "female",
          },
          {
            name: "Fallback Ukrainian Female",
            lang: "uk-UA",
            fallbackvoice: !0,
            timerSpeed: 0,
            service: "g3",
            gender: "female",
          },
          {
            name: "Fallback Cantonese Hong Kong Female",
            lang: "yue-HK",
            fallbackvoice: !0,
            timerSpeed: 0,
            service: "g3",
            gender: "female",
          },
          {
            name: "Fallback Cantonese Hong Kong Male",
            lang: "yue-HK",
            fallbackvoice: !0,
            timerSpeed: 0,
            service: "g3",
            gender: "male",
          },
          {
            name: "Fallback Estonian Male",
            lang: "et-EE",
            fallbackvoice: !0,
            timerSpeed: 0,
            service: "g3",
            gender: "male",
          },
          {
            name: "Fallback Bangla India Female",
            lang: "bn-IN",
            fallbackvoice: !0,
            timerSpeed: 0,
            service: "g3",
            gender: "female",
          },
          {
            name: "Fallback Bangla India Male",
            lang: "bn-IN",
            fallbackvoice: !0,
            timerSpeed: 0,
            service: "g3",
            gender: "male",
          },
          {
            name: "Fallback French Canadian Female",
            lang: "fr-CA",
            fallbackvoice: !0,
            timerSpeed: 0,
            service: "g3",
            gender: "female",
          },
          {
            name: "Fallback French Canadian Male",
            lang: "fr-CA",
            fallbackvoice: !0,
            timerSpeed: 0,
            service: "g3",
            gender: "male",
          },
          { name: "Fallback Tamil", lang: "ta", fallbackvoice: !0, service: "g1", gender: "female" },
          { name: "Tian-Tian", voiceURI: "com.apple.ttsbundle.Ting-Ting-compact", lang: "zh-CN", gender: "female" },
          { name: "English Nigeria", lang: "en_NG", gender: "female" },
          { name: "Gujarati India", lang: "gu_IN", gender: "female" },
          { name: "Kannada India", lang: "kn_IN", gender: "female" },
          { name: "Malayalam India", lang: "ml_IN", gender: "female" },
          { name: "Marathi India", lang: "mr_IN", gender: "female" },
          { name: "Tamil India", lang: "ta_IN", gender: "female" },
          { name: "Telugu India", lang: "te_IN", gender: "female" },
          { name: "Urdu Pakistan", lang: "ur_PK", gender: "female" },
          { name: "Javanese Indonesia", lang: "jv_ID", gender: "female" },
          { name: "Malay Malaysia", lang: "ms_MY", gender: "female" },
          { name: "Chinese Hong Kong", lang: "zh_HK_#Hans", gender: "female" },
          { name: "Chinese Hong Kong", lang: "zh_HK_#Hant", gender: "female" },
          { name: "Microsoft Tolga - Turkish (Turkey)", lang: "tr-TR", gender: "male" },
          { name: "Korean (South Korea)", voiceURI: "moz-tts:android:ko_KR", lang: "ko-KR", gender: "female" },
          { name: "Marathi (India)", voiceURI: "moz-tts:android:mr_IN", lang: "mr-IN", gender: "female" },
          { name: "Russian (Russia)", voiceURI: "moz-tts:android:ru_RU", lang: "ru-RU", gender: "female" },
          { name: "Chinese (Taiwan)", voiceURI: "moz-tts:android:zh_TW", lang: "zh-TW", gender: "female" },
          { name: "Hungarian (Hungary)", voiceURI: "moz-tts:android:hu_HU", lang: "hu-HU", gender: "female" },
          { name: "Thai (Thailand)", voiceURI: "moz-tts:android:th_TH", lang: "th-TH", gender: "female" },
          { name: "Urdu (Pakistan)", voiceURI: "moz-tts:android:ur_PK", lang: "ur-PK", gender: "female" },
          {
            name: "Norwegian Bokm\u00e5l (Norway)",
            voiceURI: "moz-tts:android:nb_NO",
            lang: "nb-NO",
            gender: "female",
          },
          { name: "Danish (Denmark)", voiceURI: "moz-tts:android:da_DK", lang: "da-DK", gender: "female" },
          { name: "Turkish (Turkey)", voiceURI: "moz-tts:android:tr_TR", lang: "tr-TR", gender: "female" },
          { name: "Estonian (Estonia)", voiceURI: "moz-tts:android:et_EE", lang: "et-EE", gender: "male" },
          { name: "Bosnian", voiceURI: "moz-tts:android:bs", lang: "bs", deprecated: !0 },
          { name: "Swahili", voiceURI: "moz-tts:android:sw", lang: "sw", deprecated: !0 },
          { name: "Portuguese (Portugal)", voiceURI: "moz-tts:android:pt_PT", lang: "pt-PT", gender: "female" },
          { name: "Vietnamese (Vietnam)", voiceURI: "moz-tts:android:vi_VN", lang: "vi-VN", gender: "female" },
          { name: "English (United States)", voiceURI: "moz-tts:android:en_US", lang: "en-US", gender: "female" },
          { name: "Swedish (Sweden)", voiceURI: "moz-tts:android:sv_SE", lang: "sv-SE", gender: "female" },
          { name: "Arabic", voiceURI: "moz-tts:android:ar", lang: "ar", gender: "female" },
          { name: "Sundanese (Indonesia)", voiceURI: "moz-tts:android:su_ID", lang: "su-ID", gender: "female" },
          { name: "Bangla (Bangladesh)", voiceURI: "moz-tts:android:bn_BD", lang: "bn-BD", gender: "male" },
          { name: "Gujarati (India)", voiceURI: "moz-tts:android:gu_IN", lang: "gu-IN", gender: "female" },
          { name: "Kannada (India)", voiceURI: "moz-tts:android:kn_IN", lang: "kn-IN", gender: "female" },
          { name: "Greek (Greece)", voiceURI: "moz-tts:android:el_GR", lang: "el-GR", gender: "female" },
          { name: "Hindi (India)", voiceURI: "moz-tts:android:hi_IN", lang: "hi-IN", gender: "female" },
          { name: "Finnish (Finland)", voiceURI: "moz-tts:android:fi_FI", lang: "fi-FI", gender: "female" },
          { name: "Khmer (Cambodia)", voiceURI: "moz-tts:android:km_KH", lang: "km-KH", gender: "female" },
          { name: "Bangla (India)", voiceURI: "moz-tts:android:bn_IN", lang: "bn-IN", gender: "male" },
          { name: "French (France)", voiceURI: "moz-tts:android:fr_FR", lang: "fr-FR", gender: "female" },
          { name: "Ukrainian (Ukraine)", voiceURI: "moz-tts:android:uk_UA", lang: "uk-UA", gender: "female" },
          { name: "English (Australia)", voiceURI: "moz-tts:android:en_AU", lang: "en-AU", gender: "female" },
          { name: "Dutch (Netherlands)", voiceURI: "moz-tts:android:nl_NL", lang: "nl-NL", gender: "female" },
          { name: "French (Canada)", voiceURI: "moz-tts:android:fr_CA", lang: "fr-CA", gender: "female" },
          { name: "Serbian", voiceURI: "moz-tts:android:sr", lang: "sr", gender: "female" },
          { name: "Portuguese (Brazil)", voiceURI: "moz-tts:android:pt_BR", lang: "pt-BR", gender: "female" },
          { name: "Malayalam (India)", voiceURI: "moz-tts:android:ml_IN", lang: "ml-IN", gender: "female" },
          { name: "Sinhala (Sri Lanka)", voiceURI: "moz-tts:android:si_LK", lang: "si-LK", gender: "female" },
          { name: "German (Germany)", voiceURI: "moz-tts:android:de_DE", lang: "de-DE", gender: "female" },
          { name: "Kurdish", voiceURI: "moz-tts:android:ku", lang: "ku", deprecated: !0 },
          { name: "Czech (Czechia)", voiceURI: "moz-tts:android:cs_CZ", lang: "cs-CZ", gender: "female" },
          { name: "Polish (Poland)", voiceURI: "moz-tts:android:pl_PL", lang: "pl-PL", gender: "female" },
          { name: "Slovak (Slovakia)", voiceURI: "moz-tts:android:sk_SK", lang: "sk-SK", gender: "female" },
          { name: "Filipino (Philippines)", voiceURI: "moz-tts:android:fil_PH", lang: "fil-PH", gender: "female" },
          { name: "Italian (Italy)", voiceURI: "moz-tts:android:it_IT", lang: "it-IT", gender: "female" },
          { name: "Nepali (Nepal)", voiceURI: "moz-tts:android:ne_NP", lang: "ne-NP", gender: "female" },
          { name: "Malay (Malaysia)", voiceURI: "moz-tts:android:ms_MY", lang: "ms-MY", gender: "female" },
          { name: "Croatian", voiceURI: "moz-tts:android:hr", lang: "hr", deprecated: !0 },
          { name: "English (Nigeria)", voiceURI: "moz-tts:android:en_NG", lang: "en-NG", gender: "female" },
          { name: "Chinese (China)", voiceURI: "moz-tts:android:zh_CN", lang: "zh-CN", gender: "female" },
          { name: "Spanish (Spain)", voiceURI: "moz-tts:android:es_ES", lang: "es-ES", gender: "female" },
          { name: "Welsh", voiceURI: "moz-tts:android:cy", lang: "cy", deprecated: !0 },
          { name: "Tamil (India)", voiceURI: "moz-tts:android:ta_IN", lang: "ta-IN", gender: "female" },
          { name: "Japanese (Japan)", voiceURI: "moz-tts:android:ja_JP", lang: "ja-JP", gender: "female" },
          { name: "Albanian", voiceURI: "moz-tts:android:sq", lang: "sq", deprecated: !0 },
          { name: "Cantonese (Hong Kong)", voiceURI: "moz-tts:android:yue_HK", lang: "yue-HK", gender: "female" },
          { name: "English (India)", voiceURI: "moz-tts:android:en_IN", lang: "en-IN", gender: "female" },
          { name: "Spanish (United States)", voiceURI: "moz-tts:android:es_US", lang: "es-US", gender: "female" },
          { name: "Javanese (Indonesia)", voiceURI: "moz-tts:android:jv_ID", lang: "jv-ID", gender: "female" },
          { name: "Latin", voiceURI: "moz-tts:android:la", lang: "la", deprecated: !0 },
          { name: "Indonesian (Indonesia)", voiceURI: "moz-tts:android:in_ID", lang: "in-ID", gender: "female" },
          { name: "Telugu (India)", voiceURI: "moz-tts:android:te_IN", lang: "te-IN", gender: "female" },
          { name: "Romanian (Romania)", voiceURI: "moz-tts:android:ro_RO", lang: "ro-RO", gender: "female" },
          { name: "Catalan", voiceURI: "moz-tts:android:ca", lang: "ca", gender: "female" },
          { name: "English (United Kingdom)", voiceURI: "moz-tts:android:en_GB", lang: "en-GB", gender: "female" },
          { name: "Rishi", voiceURI: "com.apple.ttsbundle.Rishi-compact", lang: "en-IN", gender: "male" },
        ];
        a.iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
        a.iOS9 = /(iphone|ipod|ipad).* os 9_/.test(navigator.userAgent.toLowerCase());
        a.iOS10 = /(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase());
        a.iOS11 = /(iphone|ipod|ipad).* os 11_/.test(navigator.userAgent.toLowerCase());
        a.iOS11plus = /(iphone|ipod|ipad).* os 1[1-9]/.test(navigator.userAgent.toLowerCase());
        a.iOS9plus = /(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase());
        a.iOS12_0 = /(iphone|ipod|ipad).* os 12_0/.test(navigator.userAgent.toLowerCase());
        a.iOS12 = /(iphone|ipod|ipad).* os 12_/.test(navigator.userAgent.toLowerCase());
        a.is_chrome = navigator.userAgent.indexOf("Chrome") > -1;
        a.is_safari = navigator.userAgent.indexOf("Safari") > -1;
        a.is_chrome && a.is_safari && (a.is_safari = !1);
        a.is_opera = !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0;
        a.is_android = navigator.userAgent.toLowerCase().indexOf("android") > -1;
        a.iOS_initialized = !1;
        a.iOS9_initialized = !1;
        a.iOS10_initialized = !1;
        a.iOS11_initialized = !1;
        a.cache_ios_voices = [
          { name: "he-IL", voiceURI: "he-IL", lang: "he-IL" },
          { name: "th-TH", voiceURI: "th-TH", lang: "th-TH" },
          { name: "pt-BR", voiceURI: "pt-BR", lang: "pt-BR" },
          { name: "sk-SK", voiceURI: "sk-SK", lang: "sk-SK" },
          { name: "fr-CA", voiceURI: "fr-CA", lang: "fr-CA" },
          { name: "ro-RO", voiceURI: "ro-RO", lang: "ro-RO" },
          { name: "no-NO", voiceURI: "no-NO", lang: "no-NO" },
          { name: "fi-FI", voiceURI: "fi-FI", lang: "fi-FI" },
          { name: "pl-PL", voiceURI: "pl-PL", lang: "pl-PL" },
          { name: "de-DE", voiceURI: "de-DE", lang: "de-DE" },
          { name: "nl-NL", voiceURI: "nl-NL", lang: "nl-NL" },
          { name: "id-ID", voiceURI: "id-ID", lang: "id-ID" },
          { name: "tr-TR", voiceURI: "tr-TR", lang: "tr-TR" },
          { name: "it-IT", voiceURI: "it-IT", lang: "it-IT" },
          { name: "pt-PT", voiceURI: "pt-PT", lang: "pt-PT" },
          { name: "fr-FR", voiceURI: "fr-FR", lang: "fr-FR" },
          { name: "ru-RU", voiceURI: "ru-RU", lang: "ru-RU" },
          { name: "es-MX", voiceURI: "es-MX", lang: "es-MX" },
          { name: "zh-HK", voiceURI: "zh-HK", lang: "zh-HK" },
          { name: "sv-SE", voiceURI: "sv-SE", lang: "sv-SE" },
          { name: "hu-HU", voiceURI: "hu-HU", lang: "hu-HU" },
          { name: "zh-TW", voiceURI: "zh-TW", lang: "zh-TW" },
          { name: "es-ES", voiceURI: "es-ES", lang: "es-ES" },
          { name: "zh-CN", voiceURI: "zh-CN", lang: "zh-CN" },
          { name: "nl-BE", voiceURI: "nl-BE", lang: "nl-BE" },
          { name: "en-GB", voiceURI: "en-GB", lang: "en-GB" },
          { name: "ar-SA", voiceURI: "ar-SA", lang: "ar-SA" },
          { name: "ko-KR", voiceURI: "ko-KR", lang: "ko-KR" },
          { name: "cs-CZ", voiceURI: "cs-CZ", lang: "cs-CZ" },
          { name: "en-ZA", voiceURI: "en-ZA", lang: "en-ZA" },
          { name: "en-AU", voiceURI: "en-AU", lang: "en-AU" },
          { name: "da-DK", voiceURI: "da-DK", lang: "da-DK" },
          { name: "en-US", voiceURI: "en-US", lang: "en-US" },
          { name: "en-IE", voiceURI: "en-IE", lang: "en-IE" },
          { name: "hi-IN", voiceURI: "hi-IN", lang: "hi-IN" },
          { name: "el-GR", voiceURI: "el-GR", lang: "el-GR" },
          { name: "ja-JP", voiceURI: "ja-JP", lang: "ja-JP" },
        ];
        a.cache_ios9_voices = [
          {
            name: "Maged",
            voiceURI: "com.apple.ttsbundle.Maged-compact",
            lang: "ar-SA",
            localService: !0,
            default: !0,
          },
          {
            name: "Zuzana",
            voiceURI: "com.apple.ttsbundle.Zuzana-compact",
            lang: "cs-CZ",
            localService: !0,
            default: !0,
          },
          { name: "Sara", voiceURI: "com.apple.ttsbundle.Sara-compact", lang: "da-DK", localService: !0, default: !0 },
          { name: "Anna", voiceURI: "com.apple.ttsbundle.Anna-compact", lang: "de-DE", localService: !0, default: !0 },
          {
            name: "Melina",
            voiceURI: "com.apple.ttsbundle.Melina-compact",
            lang: "el-GR",
            localService: !0,
            default: !0,
          },
          {
            name: "Karen",
            voiceURI: "com.apple.ttsbundle.Karen-compact",
            lang: "en-AU",
            localService: !0,
            default: !0,
          },
          {
            name: "Daniel",
            voiceURI: "com.apple.ttsbundle.Daniel-compact",
            lang: "en-GB",
            localService: !0,
            default: !0,
          },
          {
            name: "Moira",
            voiceURI: "com.apple.ttsbundle.Moira-compact",
            lang: "en-IE",
            localService: !0,
            default: !0,
          },
          {
            name: "Samantha (Enhanced)",
            voiceURI: "com.apple.ttsbundle.Samantha-premium",
            lang: "en-US",
            localService: !0,
            default: !0,
          },
          {
            name: "Samantha",
            voiceURI: "com.apple.ttsbundle.Samantha-compact",
            lang: "en-US",
            localService: !0,
            default: !0,
          },
          {
            name: "Tessa",
            voiceURI: "com.apple.ttsbundle.Tessa-compact",
            lang: "en-ZA",
            localService: !0,
            default: !0,
          },
          {
            name: "Monica",
            voiceURI: "com.apple.ttsbundle.Monica-compact",
            lang: "es-ES",
            localService: !0,
            default: !0,
          },
          {
            name: "Paulina",
            voiceURI: "com.apple.ttsbundle.Paulina-compact",
            lang: "es-MX",
            localService: !0,
            default: !0,
          },
          { name: "Satu", voiceURI: "com.apple.ttsbundle.Satu-compact", lang: "fi-FI", localService: !0, default: !0 },
          {
            name: "Amelie",
            voiceURI: "com.apple.ttsbundle.Amelie-compact",
            lang: "fr-CA",
            localService: !0,
            default: !0,
          },
          {
            name: "Thomas",
            voiceURI: "com.apple.ttsbundle.Thomas-compact",
            lang: "fr-FR",
            localService: !0,
            default: !0,
          },
          {
            name: "Carmit",
            voiceURI: "com.apple.ttsbundle.Carmit-compact",
            lang: "he-IL",
            localService: !0,
            default: !0,
          },
          {
            name: "Lekha",
            voiceURI: "com.apple.ttsbundle.Lekha-compact",
            lang: "hi-IN",
            localService: !0,
            default: !0,
          },
          {
            name: "Mariska",
            voiceURI: "com.apple.ttsbundle.Mariska-compact",
            lang: "hu-HU",
            localService: !0,
            default: !0,
          },
          {
            name: "Damayanti",
            voiceURI: "com.apple.ttsbundle.Damayanti-compact",
            lang: "id-ID",
            localService: !0,
            default: !0,
          },
          {
            name: "Alice",
            voiceURI: "com.apple.ttsbundle.Alice-compact",
            lang: "it-IT",
            localService: !0,
            default: !0,
          },
          {
            name: "Kyoko",
            voiceURI: "com.apple.ttsbundle.Kyoko-compact",
            lang: "ja-JP",
            localService: !0,
            default: !0,
          },
          { name: "Yuna", voiceURI: "com.apple.ttsbundle.Yuna-compact", lang: "ko-KR", localService: !0, default: !0 },
          {
            name: "Ellen",
            voiceURI: "com.apple.ttsbundle.Ellen-compact",
            lang: "nl-BE",
            localService: !0,
            default: !0,
          },
          {
            name: "Xander",
            voiceURI: "com.apple.ttsbundle.Xander-compact",
            lang: "nl-NL",
            localService: !0,
            default: !0,
          },
          { name: "Nora", voiceURI: "com.apple.ttsbundle.Nora-compact", lang: "no-NO", localService: !0, default: !0 },
          {
            name: "Zosia",
            voiceURI: "com.apple.ttsbundle.Zosia-compact",
            lang: "pl-PL",
            localService: !0,
            default: !0,
          },
          {
            name: "Luciana",
            voiceURI: "com.apple.ttsbundle.Luciana-compact",
            lang: "pt-BR",
            localService: !0,
            default: !0,
          },
          {
            name: "Joana",
            voiceURI: "com.apple.ttsbundle.Joana-compact",
            lang: "pt-PT",
            localService: !0,
            default: !0,
          },
          {
            name: "Ioana",
            voiceURI: "com.apple.ttsbundle.Ioana-compact",
            lang: "ro-RO",
            localService: !0,
            default: !0,
          },
          {
            name: "Milena",
            voiceURI: "com.apple.ttsbundle.Milena-compact",
            lang: "ru-RU",
            localService: !0,
            default: !0,
          },
          {
            name: "Laura",
            voiceURI: "com.apple.ttsbundle.Laura-compact",
            lang: "sk-SK",
            localService: !0,
            default: !0,
          },
          { name: "Alva", voiceURI: "com.apple.ttsbundle.Alva-compact", lang: "sv-SE", localService: !0, default: !0 },
          {
            name: "Kanya",
            voiceURI: "com.apple.ttsbundle.Kanya-compact",
            lang: "th-TH",
            localService: !0,
            default: !0,
          },
          {
            name: "Yelda",
            voiceURI: "com.apple.ttsbundle.Yelda-compact",
            lang: "tr-TR",
            localService: !0,
            default: !0,
          },
          {
            name: "Ting-Ting",
            voiceURI: "com.apple.ttsbundle.Ting-Ting-compact",
            lang: "zh-CN",
            localService: !0,
            default: !0,
          },
          {
            name: "Sin-Ji",
            voiceURI: "com.apple.ttsbundle.Sin-Ji-compact",
            lang: "zh-HK",
            localService: !0,
            default: !0,
          },
          {
            name: "Mei-Jia",
            voiceURI: "com.apple.ttsbundle.Mei-Jia-compact",
            lang: "zh-TW",
            localService: !0,
            default: !0,
          },
        ];
        a.cache_ios10_voices = [
          { name: "Maged", voiceURI: "com.apple.ttsbundle.Maged-compact", lang: "ar-SA" },
          { name: "Zuzana", voiceURI: "com.apple.ttsbundle.Zuzana-compact", lang: "cs-CZ" },
          { name: "Sara", voiceURI: "com.apple.ttsbundle.Sara-compact", lang: "da-DK" },
          { name: "Anna", voiceURI: "com.apple.ttsbundle.Anna-compact", lang: "de-DE" },
          { name: "Helena", voiceURI: "com.apple.ttsbundle.siri_female_de-DE_compact", lang: "de-DE" },
          { name: "Martin", voiceURI: "com.apple.ttsbundle.siri_male_de-DE_compact", lang: "de-DE" },
          { name: "Nikos (Enhanced)", voiceURI: "com.apple.ttsbundle.Nikos-premium", lang: "el-GR" },
          { name: "Melina", voiceURI: "com.apple.ttsbundle.Melina-compact", lang: "el-GR" },
          { name: "Nikos", voiceURI: "com.apple.ttsbundle.Nikos-compact", lang: "el-GR" },
          { name: "Catherine", voiceURI: "com.apple.ttsbundle.siri_female_en-AU_compact", lang: "en-AU" },
          { name: "Gordon", voiceURI: "com.apple.ttsbundle.siri_male_en-AU_compact", lang: "en-AU" },
          { name: "Karen", voiceURI: "com.apple.ttsbundle.Karen-compact", lang: "en-AU" },
          { name: "Daniel (Enhanced)", voiceURI: "com.apple.ttsbundle.Daniel-premium", lang: "en-GB" },
          { name: "Arthur", voiceURI: "com.apple.ttsbundle.siri_male_en-GB_compact", lang: "en-GB" },
          { name: "Daniel", voiceURI: "com.apple.ttsbundle.Daniel-compact", lang: "en-GB" },
          { name: "Martha", voiceURI: "com.apple.ttsbundle.siri_female_en-GB_compact", lang: "en-GB" },
          { name: "Moira", voiceURI: "com.apple.ttsbundle.Moira-compact", lang: "en-IE" },
          { name: "Nicky (Enhanced)", voiceURI: "com.apple.ttsbundle.siri_female_en-US_premium", lang: "en-US" },
          { name: "Samantha (Enhanced)", voiceURI: "com.apple.ttsbundle.Samantha-premium", lang: "en-US" },
          { name: "Aaron", voiceURI: "com.apple.ttsbundle.siri_male_en-US_compact", lang: "en-US" },
          { name: "Fred", voiceURI: "com.apple.speech.synthesis.voice.Fred", lang: "en-US" },
          { name: "Nicky", voiceURI: "com.apple.ttsbundle.siri_female_en-US_compact", lang: "en-US" },
          { name: "Samantha", voiceURI: "com.apple.ttsbundle.Samantha-compact", lang: "en-US" },
          { name: "Tessa", voiceURI: "com.apple.ttsbundle.Tessa-compact", lang: "en-ZA" },
          { name: "Monica", voiceURI: "com.apple.ttsbundle.Monica-compact", lang: "es-ES" },
          { name: "Paulina", voiceURI: "com.apple.ttsbundle.Paulina-compact", lang: "es-MX" },
          { name: "Satu", voiceURI: "com.apple.ttsbundle.Satu-compact", lang: "fi-FI" },
          { name: "Amelie", voiceURI: "com.apple.ttsbundle.Amelie-compact", lang: "fr-CA" },
          { name: "Daniel", voiceURI: "com.apple.ttsbundle.siri_male_fr-FR_compact", lang: "fr-FR" },
          { name: "Marie", voiceURI: "com.apple.ttsbundle.siri_female_fr-FR_compact", lang: "fr-FR" },
          { name: "Thomas", voiceURI: "com.apple.ttsbundle.Thomas-compact", lang: "fr-FR" },
          { name: "Carmit", voiceURI: "com.apple.ttsbundle.Carmit-compact", lang: "he-IL" },
          { name: "Lekha", voiceURI: "com.apple.ttsbundle.Lekha-compact", lang: "hi-IN" },
          { name: "Mariska", voiceURI: "com.apple.ttsbundle.Mariska-compact", lang: "hu-HU" },
          { name: "Damayanti", voiceURI: "com.apple.ttsbundle.Damayanti-compact", lang: "id-ID" },
          { name: "Alice", voiceURI: "com.apple.ttsbundle.Alice-compact", lang: "it-IT" },
          { name: "Hattori", voiceURI: "com.apple.ttsbundle.siri_male_ja-JP_compact", lang: "ja-JP" },
          { name: "Kyoko", voiceURI: "com.apple.ttsbundle.Kyoko-compact", lang: "ja-JP" },
          { name: "O-ren", voiceURI: "com.apple.ttsbundle.siri_female_ja-JP_compact", lang: "ja-JP" },
          { name: "Yuna", voiceURI: "com.apple.ttsbundle.Yuna-compact", lang: "ko-KR" },
          { name: "Ellen", voiceURI: "com.apple.ttsbundle.Ellen-compact", lang: "nl-BE" },
          { name: "Xander", voiceURI: "com.apple.ttsbundle.Xander-compact", lang: "nl-NL" },
          { name: "Nora", voiceURI: "com.apple.ttsbundle.Nora-compact", lang: "no-NO" },
          { name: "Zosia", voiceURI: "com.apple.ttsbundle.Zosia-compact", lang: "pl-PL" },
          { name: "Luciana", voiceURI: "com.apple.ttsbundle.Luciana-compact", lang: "pt-BR" },
          { name: "Joana", voiceURI: "com.apple.ttsbundle.Joana-compact", lang: "pt-PT" },
          { name: "Ioana", voiceURI: "com.apple.ttsbundle.Ioana-compact", lang: "ro-RO" },
          { name: "Milena", voiceURI: "com.apple.ttsbundle.Milena-compact", lang: "ru-RU" },
          { name: "Laura", voiceURI: "com.apple.ttsbundle.Laura-compact", lang: "sk-SK" },
          { name: "Alva", voiceURI: "com.apple.ttsbundle.Alva-compact", lang: "sv-SE" },
          { name: "Kanya", voiceURI: "com.apple.ttsbundle.Kanya-compact", lang: "th-TH" },
          { name: "Yelda", voiceURI: "com.apple.ttsbundle.Yelda-compact", lang: "tr-TR" },
          { name: "Li-mu", voiceURI: "com.apple.ttsbundle.siri_male_zh-CN_compact", lang: "zh-CN" },
          { name: "Ting-Ting", voiceURI: "com.apple.ttsbundle.Ting-Ting-compact", lang: "zh-CN" },
          { name: "Yu-shu", voiceURI: "com.apple.ttsbundle.siri_female_zh-CN_compact", lang: "zh-CN" },
          { name: "Sin-Ji", voiceURI: "com.apple.ttsbundle.Sin-Ji-compact", lang: "zh-HK" },
          { name: "Mei-Jia", voiceURI: "com.apple.ttsbundle.Mei-Jia-compact", lang: "zh-TW" },
        ];
        a.cache_ios11_voices = [
          { name: "Maged", voiceURI: "com.apple.ttsbundle.Maged-compact", lang: "ar-SA" },
          { name: "Zuzana", voiceURI: "com.apple.ttsbundle.Zuzana-compact", lang: "cs-CZ" },
          { name: "Sara", voiceURI: "com.apple.ttsbundle.Sara-compact", lang: "da-DK" },
          { name: "Anna", voiceURI: "com.apple.ttsbundle.Anna-compact", lang: "de-DE" },
          { name: "Helena", voiceURI: "com.apple.ttsbundle.siri_female_de-DE_compact", lang: "de-DE" },
          { name: "Martin", voiceURI: "com.apple.ttsbundle.siri_male_de-DE_compact", lang: "de-DE" },
          { name: "Melina", voiceURI: "com.apple.ttsbundle.Melina-compact", lang: "el-GR" },
          { name: "Catherine", voiceURI: "com.apple.ttsbundle.siri_female_en-AU_compact", lang: "en-AU" },
          { name: "Gordon", voiceURI: "com.apple.ttsbundle.siri_male_en-AU_compact", lang: "en-AU" },
          { name: "Karen", voiceURI: "com.apple.ttsbundle.Karen-compact", lang: "en-AU" },
          { name: "Arthur", voiceURI: "com.apple.ttsbundle.siri_male_en-GB_compact", lang: "en-GB" },
          { name: "Daniel", voiceURI: "com.apple.ttsbundle.Daniel-compact", lang: "en-GB" },
          { name: "Martha", voiceURI: "com.apple.ttsbundle.siri_female_en-GB_compact", lang: "en-GB" },
          { name: "Moira", voiceURI: "com.apple.ttsbundle.Moira-compact", lang: "en-IE" },
          { name: "Aaron", voiceURI: "com.apple.ttsbundle.siri_male_en-US_compact", lang: "en-US" },
          { name: "Fred", voiceURI: "com.apple.speech.synthesis.voice.Fred", lang: "en-US" },
          { name: "Nicky", voiceURI: "com.apple.ttsbundle.siri_female_en-US_compact", lang: "en-US" },
          { name: "Samantha", voiceURI: "com.apple.ttsbundle.Samantha-compact", lang: "en-US" },
          { name: "Tessa", voiceURI: "com.apple.ttsbundle.Tessa-compact", lang: "en-ZA" },
          { name: "Monica", voiceURI: "com.apple.ttsbundle.Monica-compact", lang: "es-ES" },
          { name: "Paulina", voiceURI: "com.apple.ttsbundle.Paulina-compact", lang: "es-MX" },
          { name: "Satu", voiceURI: "com.apple.ttsbundle.Satu-compact", lang: "fi-FI" },
          { name: "Amelie", voiceURI: "com.apple.ttsbundle.Amelie-compact", lang: "fr-CA" },
          { name: "Daniel", voiceURI: "com.apple.ttsbundle.siri_male_fr-FR_compact", lang: "fr-FR" },
          { name: "Marie", voiceURI: "com.apple.ttsbundle.siri_female_fr-FR_compact", lang: "fr-FR" },
          { name: "Thomas", voiceURI: "com.apple.ttsbundle.Thomas-compact", lang: "fr-FR" },
          { name: "Carmit", voiceURI: "com.apple.ttsbundle.Carmit-compact", lang: "he-IL" },
          { name: "Lekha", voiceURI: "com.apple.ttsbundle.Lekha-compact", lang: "hi-IN" },
          { name: "Mariska", voiceURI: "com.apple.ttsbundle.Mariska-compact", lang: "hu-HU" },
          { name: "Damayanti", voiceURI: "com.apple.ttsbundle.Damayanti-compact", lang: "id-ID" },
          { name: "Alice", voiceURI: "com.apple.ttsbundle.Alice-compact", lang: "it-IT" },
          { name: "Hattori", voiceURI: "com.apple.ttsbundle.siri_male_ja-JP_compact", lang: "ja-JP" },
          { name: "Kyoko", voiceURI: "com.apple.ttsbundle.Kyoko-compact", lang: "ja-JP" },
          { name: "O-ren", voiceURI: "com.apple.ttsbundle.siri_female_ja-JP_compact", lang: "ja-JP" },
          { name: "Yuna", voiceURI: "com.apple.ttsbundle.Yuna-compact", lang: "ko-KR" },
          { name: "Ellen", voiceURI: "com.apple.ttsbundle.Ellen-compact", lang: "nl-BE" },
          { name: "Xander", voiceURI: "com.apple.ttsbundle.Xander-compact", lang: "nl-NL" },
          { name: "Nora", voiceURI: "com.apple.ttsbundle.Nora-compact", lang: "no-NO" },
          { name: "Zosia", voiceURI: "com.apple.ttsbundle.Zosia-compact", lang: "pl-PL" },
          { name: "Luciana", voiceURI: "com.apple.ttsbundle.Luciana-compact", lang: "pt-BR" },
          { name: "Joana", voiceURI: "com.apple.ttsbundle.Joana-compact", lang: "pt-PT" },
          { name: "Ioana", voiceURI: "com.apple.ttsbundle.Ioana-compact", lang: "ro-RO" },
          { name: "Milena", voiceURI: "com.apple.ttsbundle.Milena-compact", lang: "ru-RU" },
          { name: "Laura", voiceURI: "com.apple.ttsbundle.Laura-compact", lang: "sk-SK" },
          { name: "Alva", voiceURI: "com.apple.ttsbundle.Alva-compact", lang: "sv-SE" },
          { name: "Kanya", voiceURI: "com.apple.ttsbundle.Kanya-compact", lang: "th-TH" },
          { name: "Yelda", voiceURI: "com.apple.ttsbundle.Yelda-compact", lang: "tr-TR" },
          { name: "Li-mu", voiceURI: "com.apple.ttsbundle.siri_male_zh-CN_compact", lang: "zh-CN" },
          { name: "Ting-Ting", voiceURI: "com.apple.ttsbundle.Ting-Ting-compact", lang: "zh-CN" },
          { name: "Yu-shu", voiceURI: "com.apple.ttsbundle.siri_female_zh-CN_compact", lang: "zh-CN" },
          { name: "Sin-Ji", voiceURI: "com.apple.ttsbundle.Sin-Ji-compact", lang: "zh-HK" },
          { name: "Mei-Jia", voiceURI: "com.apple.ttsbundle.Mei-Jia-compact", lang: "zh-TW" },
        ];
        a.systemvoices = null;
        a.CHARACTER_LIMIT = 100;
        a.VOICESUPPORT_ATTEMPTLIMIT = 5;
        a.voicesupport_attempts = 0;
        a.fallbackMode = !1;
        a.WORDS_PER_MINUTE = 130;
        a.fallback_audio = null;
        a.fallback_playbackrate = 1;
        a.def_fallback_playbackrate = a.fallback_playbackrate;
        a.fallback_audiopool = [];
        a.msgparameters = null;
        a.timeoutId = null;
        a.OnLoad_callbacks = [];
        a.useTimer = !1;
        a.utterances = [];
        a.userInteractionEvents = ["mousedown", "mouseup", "mousewheel", "keydown"];
        a.fallbackBufferLength = 5;
        a.iOS && (a.fallbackBufferLength = 2);
        var q = null,
          r = 1;
        a.tstCompiled = function () {
          return !/param/.test(function (b) {});
        };
        a.fallbackServicePath =
          typeof rvApiEndpoint != "undefined" && rvApiEndpoint
            ? rvApiEndpoint
            : "https://code.responsivevoice.org/" + (a.tstCompiled() ? "" : "develop/") + "getvoice.php";
        a.default_rv = a.responsivevoices[0];
        a.debug = !1;
        a.rvsMapped = !1;
        a.forcedFallbackMode = !1;
        a.speechAllowedByUser = !0;
        a.enableEstimationTimeout = !0;
        a.analytics = { characterCount: 0 };
        a.log = function (b) {
          // a.debug && console.log(b);
        };
        a.init = function () {
          a.is_wordpress = x();
          a.is_bundle = u();
          typeof rvApiKey == "undefined" &&
            console.error(
              "ResponsiveVoice missing API key. See https://responsivevoice.org/register?devtools=" +
                encodeURIComponent(window.location.href),
            );
          if (a.is_android || a.iOS || a.is_safari) a.useTimer = !0;
          a.is_opera || typeof speechSynthesis === "undefined"
            ? (console.log("RV: Voice synthesis not supported"), a.enableFallbackMode())
            : setTimeout(function () {
                var b = setInterval(function () {
                  var c = window.speechSynthesis.getVoices();
                  c.length != 0 || (a.systemvoices != null && a.systemvoices.length != 0)
                    ? (a.systemVoicesReady(c), clearInterval(b))
                    : (console.log("Voice support NOT ready"),
                      a.voicesupport_attempts++,
                      a.voicesupport_attempts > a.VOICESUPPORT_ATTEMPTLIMIT &&
                        (clearInterval(b),
                        window.speechSynthesis != null
                          ? a.iOS
                            ? (a.iOS11plus
                                ? a.systemVoicesReady(a.cache_ios11_voices)
                                : a.iOS10
                                  ? a.systemVoicesReady(a.cache_ios10_voices)
                                  : a.iOS9
                                    ? a.systemVoicesReady(a.cache_ios9_voices)
                                    : a.systemVoicesReady(a.cache_ios_voices),
                              console.log("RV: Voice support ready (cached)"))
                            : (console.log("RV: speechSynthesis present but no system voices found"),
                              a.enableFallbackMode())
                          : a.enableFallbackMode()));
                }, 100);
              }, 100);
          (a.iOS || a.is_android || a.is_safari) && a.enableWindowClickHook();
          a.Dispatch("OnLoad");
        };
        a.systemVoicesReady = function (b) {
          a.systemvoices = b;
          a.mapRVs();
          a.OnVoiceReady != null && a.OnVoiceReady.call();
          a.Dispatch("OnReady");
          window.hasOwnProperty("dispatchEvent") && window.dispatchEvent(new Event("ResponsiveVoice_OnReady"));
        };
        a.enableFallbackMode = function () {
          a.fallbackMode = !0;
          a.forcedFallbackMode = !0;
          console.log("RV: Enabling fallback mode");
          a.mapRVs();
          a.OnVoiceReady != null && a.OnVoiceReady.call();
          a.Dispatch("OnReady");
          window.hasOwnProperty("dispatchEvent") && window.dispatchEvent(new Event("ResponsiveVoice_OnReady"));
          a.Dispatch("OnServiceSwitched");
        };
        a.getVoices = function () {
          for (var b = [], c = 0; c < a.responsivevoices.length; c++) {
            var d = a.responsivevoices[c];
            d.deprecated !== !0 && b.push({ name: d.name });
          }
          return b;
        };
        a.speak = function (b, c, d) {
          if (b == null) a.log("No text provided");
          else if ((a.initializePermissionsTimeout && clearTimeout(a.initializePermissionsTimeout), a.rvsMapped)) {
            var h = null;
            if (a.isPlaying())
              (a.log("Cancelling previous speech"),
                a.cancel(),
                setTimeout(function () {
                  a.speak(b, c, d);
                }, 50));
            else {
              function F(y) {
                y.search(/[\u3002]/gm) != -1
                  ? y.split(/[\u3002]/).filter(function (p) {
                      p && k.push(p);
                    })
                  : k.push(y);
              }
              if (c == null) {
                var e = a.default_rv;
                a.setDefaultVoice(e.name);
              } else e = a.getResponsiveVoice(c);
              if (e) {
                e.deprecated === !0 &&
                  console.warn(
                    'ResponsiveVoice: Voice "' +
                      e.name +
                      '" is deprecated; it might not always be the right gender, and could be removed in future releases',
                  );
                var g = {};
                if (e.mappedProfile != null) g = e.mappedProfile;
                else if (((g.systemvoice = a.getMatchedVoice(e)), (g.collectionvoice = {}), g.systemvoice == null)) {
                  console.log("RV: ERROR: No voice found for: " + c);
                  return;
                }
                b = z(b, g);
                b = b.replace(/["`]/gm, "'");
                a.msgparameters = d || {};
                a.msgtext = b;
                a.msgvoicename = c;
                a.onstartFired = !1;
                var k = [];
                if (b.length > a.CHARACTER_LIMIT) {
                  for (var f = (b = w(b)); f.length > a.CHARACTER_LIMIT; ) {
                    e = f.search(/([\u3002:!\u00a1?\u00bf;\(\)\[\]\u2014\u00ab\u00bb\n]+|\.[^0-9]+)/);
                    var l = "";
                    if (e == -1 || e >= a.CHARACTER_LIMIT) e = f.search(/,[^0-9]+/);
                    if ((e == -1 || e >= a.CHARACTER_LIMIT) && f.search(" ") != -1) {
                      var t = f.split(" ");
                      for (e = 0; e < t.length; e++) {
                        if (l.length + t[e].length + 1 > a.CHARACTER_LIMIT) {
                          t[e].length >= a.CHARACTER_LIMIT && (l += t[e].substr(0, a.CHARACTER_LIMIT - l.length - 1));
                          break;
                        }
                        l += (e != 0 ? " " : "") + t[e];
                      }
                    } else {
                      if (e == -1 || e >= a.CHARACTER_LIMIT) e = a.CHARACTER_LIMIT - 1;
                      l = f.substr(0, e + 1);
                    }
                    f = f.substr(l.length, f.length - l.length);
                    k.push(l);
                  }
                  f.length > 0 && F(f);
                } else F(b);
                // console.log(k);
                a.multipartText = k;
                if (a.checkSpeechAllowed()) {
                  a.fallbackMode && a.fallback_audiopool.length > 0 && a.clearFallbackPool();
                  a.msgprofile = g;
                  a.log("Voice picked: " + a.msgprofile.systemvoice.name);
                  a.utterances = [];
                  a.fallbackChunks = [];
                  for (e = 0; e < k.length; e++)
                    if (!a.fallbackMode && a.getServiceEnabled(a.services.NATIVE_TTS))
                      (a.log("Using SpeechSynthesis"),
                        (h = a.services.NATIVE_TTS),
                        (f = new SpeechSynthesisUtterance()),
                        (f.voiceURI = g.systemvoice.voiceURI),
                        (f.volume = a.selectBest([g.collectionvoice.volume, g.systemvoice.volume, 1])),
                        (f.rate = a.selectBest([a.iOS9plus ? 1 : null, g.collectionvoice.rate, g.systemvoice.rate, r])),
                        (f.pitch = a.selectBest([g.collectionvoice.pitch, g.systemvoice.pitch, 1])),
                        (f.text = k[e]),
                        (f.lang = a.selectBest([g.collectionvoice.lang, g.systemvoice.lang])),
                        (f.rvIndex = e),
                        (f.rvTotal = k.length),
                        e == 0 && (f.onstart = a.speech_onstart),
                        (a.msgparameters.onendcalled = !1),
                        d != null
                          ? ((f.voice = typeof d.voice !== "undefined" ? d.voice : g.systemvoice),
                            e < k.length - 1 && k.length > 1
                              ? ((f.onend = a.onPartEnd),
                                f.hasOwnProperty("addEventListener") && f.addEventListener("end", a.onPartEnd))
                              : ((f.onend = a.speech_onend),
                                f.hasOwnProperty("addEventListener") && f.addEventListener("end", a.speech_onend)),
                            (f.onerror =
                              d.onerror ||
                              function (y) {
                                a.log("RV: Unknown Error");
                                a.log(y);
                                y.error === "not-allowed" &&
                                  a.speechSynthesisNotAllowedError !== !0 &&
                                  ((a.speechSynthesisNotAllowedError = !0), a.speak(b, c, d));
                              }),
                            (d.rate = a.validateParameters(d, "rate")),
                            (d.pitch = a.validateParameters(d, "pitch")),
                            (d.volume = a.validateParameters(d, "volume")),
                            (f.onpause = d.onpause),
                            (f.onresume = d.onresume),
                            (f.onmark = d.onmark),
                            (f.onboundary = d.onboundary || a.onboundary),
                            (f.pitch = d.pitch != null ? d.pitch : f.pitch),
                            (f.rate = a.iOS
                              ? (d.rate != null ? d.rate * d.rate : 1) * f.rate
                              : (d.rate != null ? d.rate : r) * f.rate),
                            (f.volume = d.volume != null ? d.volume : f.volume))
                          : (a.log("No Params received for current Utterance"),
                            (f.voice = g.systemvoice),
                            (d = d || {}),
                            (f.onend = a.speech_onend),
                            (f.onboundary = a.onboundary),
                            (f.onerror = function (y) {
                              a.log("RV: Unknown Error");
                              a.log(y);
                              y.error === "not-allowed" &&
                                a.speechSynthesisNotAllowedError !== !0 &&
                                ((a.speechSynthesisNotAllowedError = !0), a.speak(b, c, d));
                            })),
                        a.utterances.push(f),
                        e == 0 && (a.currentMsg = f),
                        console.log(f),
                        a.tts_speak(f));
                    else if (a.fallbackMode && a.getServiceEnabled(a.services.FALLBACK_AUDIO)) {
                      h = a.services.FALLBACK_AUDIO;
                      a.fallback_playbackrate = a.def_fallback_playbackrate;
                      f = a.selectBest([g.collectionvoice.pitch, g.systemvoice.pitch, 1]);
                      l = a.selectBest([a.iOS9plus ? 1 : null, g.collectionvoice.rate, g.systemvoice.rate, 1]);
                      t = a.selectBest([g.collectionvoice.volume, g.systemvoice.volume, 1]);
                      if (d != null) {
                        f *= d.pitch != null ? d.pitch : 1;
                        l *= d.rate != null ? d.rate : 1;
                        t *= d.volume != null ? d.volume : 1;
                        var D = d.extraParams || null;
                      }
                      f /= 2;
                      l /= 2;
                      t *= 2;
                      f = Math.min(Math.max(f, 0), 1);
                      l = Math.min(Math.max(l, 0), 1);
                      t = Math.min(Math.max(t, 0), 1);
                      var G =
                        "?t=" +
                        encodeURIComponent(k[e]) +
                        "&tl=" +
                        (g.collectionvoice.lang || g.systemvoice.lang || "en-US") +
                        "&sv=" +
                        (g.collectionvoice.service || g.systemvoice.service || "") +
                        "&vn=" +
                        (g.collectionvoice.voicename || g.systemvoice.voicename || "") +
                        "&pitch=" +
                        f.toString() +
                        "&rate=" +
                        l.toString() +
                        "&vol=" +
                        t.toString();
                      typeof rvApiEndpoint != "undefined" &&
                        rvApiEndpoint &&
                        (G =
                          "?text=" +
                          encodeURIComponent(k[e]) +
                          "&lang=" +
                          (g.collectionvoice.lang || g.systemvoice.lang || "en-US") +
                          "&engine=" +
                          (g.collectionvoice.service || g.systemvoice.service || "") +
                          "&name=" +
                          (g.collectionvoice.voicename || g.systemvoice.voicename || "") +
                          "&pitch=" +
                          f.toString() +
                          "&rate=" +
                          l.toString() +
                          "&volume=" +
                          t.toString());
                      f = a.fallbackServicePath + G;
                      typeof rvApiKey != "undefined" && (f += "&key=" + rvApiKey);
                      typeof rvApiKey == "undefined" && a.is_bundle && (f += "&key=FQ9r4hgY");
                      typeof rvApiKey == "undefined" && a.is_wordpress && (f += "&key=HY7lTyiS");
                      g.collectionvoice.gender !== void 0 && (f += "&gender=" + g.collectionvoice.gender);
                      D && (f += "&extraParams=" + JSON.stringify(D));
                      a.fallbackChunks.push({ text: k[e], url: f, audio: null });
                    }
                  a.fallbackMode &&
                    a.getServiceEnabled(a.services.FALLBACK_AUDIO) &&
                    ((a.fallbackChunkIndex = 0), a.fallback_startPart());
                  a.log("Service used: " + h);
                } else a.scheduledSpeak = { text: b, voicename: c, parameters: d };
              } else
                (console.error("Selected voice does not exist: " + c), a.Dispatch("OnMissingVoiceError", { voice: c }));
            }
          } else
            setTimeout(function () {
              a.speak(b, c, d);
            }, 15);
        };
        a.startTimeout = function (b, c) {
          var d = a.msgprofile.collectionvoice.timerSpeed;
          a.msgprofile.collectionvoice.timerSpeed == null && (d = 1);
          d <= 0 ||
            ((a.timeoutId = setTimeout(c, a.getEstimatedTimeLength(b, d))), a.log("Timeout ID: " + a.timeoutId));
        };
        a.checkAndCancelTimeout = function () {
          a.timeoutId != null && (clearTimeout(a.timeoutId), (a.timeoutId = null));
        };
        a.speech_timedout = function () {
          a.cancel();
          a.cancelled = !1;
          a.speech_onend();
        };
        a.speech_onend = function () {
          a.checkAndCancelTimeout();
          a.cancelled === !0
            ? (a.cancelled = !1)
            : (a.log("on end fired"),
              a.msgparameters != null &&
                a.msgparameters.onend != null &&
                a.msgparameters.onendcalled != 1 &&
                (a.log("Speech on end called  -" + a.msgtext),
                (a.msgparameters.onendcalled = !0),
                a.msgparameters.onend()));
        };
        a.speech_onstart = function () {
          if (
            !a.onstartFired &&
            ((a.onstartFired = !0),
            a.log("Speech start"),
            a.enableEstimationTimeout && a.useTimer && (a.fallbackMode || a.startTimeout(a.msgtext, a.speech_timedout)),
            (a.msgparameters.onendcalled = !1),
            a.msgparameters != null && a.msgparameters.onstart != null)
          )
            a.msgparameters.onstart();
        };
        a.fallback_startPart = function () {
          a.fallback_updateChunksBuffer();
          a.fallback_audio = a.fallbackChunks[a.fallbackChunkIndex].audio;
          a.fallback_audio == null
            ? a.log("RV: Fallback Audio is not available")
            : ((function () {
                var b = a.fallback_audio;
                a.fallbackChunkIndex == 0 &&
                  (b.onplaying = function () {
                    a.speech_onstart();
                  });
                setTimeout(function () {
                  b.playbackRate = a.fallback_playbackrate;
                }, 50);
                b.onloadedmetadata = function () {
                  b.playbackRate = a.fallback_playbackrate;
                };
                var c = function (h) {
                  setTimeout(function () {
                    if (h.currentTime == 0) {
                      a.log("Audio chunk not playing. Trying to recover. Disabling time estimation");
                      a.enableEstimationTimeout = !1;
                      a.checkAndCancelTimeout();
                      h.load();
                      var e = function () {
                        h.play();
                        h.removeEventListener("canplaythrough", e);
                      };
                      h.addEventListener("canplaythrough", e, !1);
                    }
                  }, 700);
                };
                if (b.readyState >= 2) (b.play(), c(b));
                else {
                  var d = function () {
                    b.play();
                    b.removeEventListener("canplaythrough", d);
                  };
                  b.addEventListener("canplaythrough", d, !1);
                }
              })(),
              (a.fallback_audio.onerror = function (b) {
                function c() {
                  if (this.readyState == this.DONE && this.status !== 200)
                    switch (this.status) {
                      case 400:
                        console.error("ResponsiveVoice audio could not be loaded. Invalid parameters.");
                        break;
                      case 403:
                        console.error(
                          "ResponsiveVoice invalid API key. See https://responsivevoice.org/register?devtools=" +
                            encodeURIComponent(window.location.href),
                        );
                        break;
                      default:
                        console.error(
                          "ResponsiveVoice audio could not be loaded. There is an issue connecting your browser to the API endpoint.",
                        );
                    }
                }
                switch (b.target.error.code) {
                  case b.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                    var d = new XMLHttpRequest();
                    d.open("GET", b.target.src, !0);
                    d.send();
                    d.onreadystatechange = c;
                    break;
                  default:
                    console.error("ResponsiveVoice: an unknown error occurred.");
                }
              }),
              a.fallback_audio.addEventListener("ended", a.fallback_finishPart),
              a.enableEstimationTimeout &&
                a.useTimer &&
                a.startTimeout(a.multipartText[a.fallbackChunkIndex], a.fallback_finishPart));
        };
        a.isFallbackAudioPlaying = function () {
          var b;
          for (b = 0; b < a.fallback_audiopool.length; b++) {
            var c = a.fallback_audiopool[b];
            if (!c.paused && !c.ended && c.currentTime != c.duration) return !0;
          }
          return !1;
        };
        a.fallback_finishPart = function (b) {
          a.isFallbackAudioPlaying()
            ? (a.checkAndCancelTimeout(),
              (a.timeoutId = setTimeout(
                a.fallback_finishPart,
                (a.fallback_audio.duration - a.fallback_audio.currentTime) * 1e3,
              )))
            : (a.checkAndCancelTimeout(),
              a.fallbackChunkIndex < a.fallbackChunks.length - 1
                ? (a.fallbackChunkIndex++, a.fallback_startPart())
                : a.speech_onend());
        };
        a.cancel = function () {
          a.checkAndCancelTimeout();
          a.fallbackMode
            ? (a.fallback_audio != null && a.fallback_audio.pause(), a.clearFallbackPool())
            : ((a.cancelled = !0), speechSynthesis.cancel());
        };
        a.voiceSupport = function () {
          return "speechSynthesis" in window;
        };
        a.OnFinishedPlaying = function (b) {
          if (a.msgparameters != null && a.msgparameters.onend != null) a.msgparameters.onend();
        };
        a.setDefaultVoice = function (b) {
          if (a.rvsMapped) {
            var c = a.getResponsiveVoice(b);
            c != null && (a.default_rv = c);
          } else
            setTimeout(function () {
              a.setDefaultVoice(b);
            }, 15);
        };
        a.setDefaultRate = function (b) {
          var c = b;
          b = parseFloat(b);
          isNaN(b)
            ? console.error("[responsiveVoice.setDefaultRate] invalid argument: " + c.toString())
            : b === 0
              ? console.error("[responsiveVoice.setDefaultRate] rate must be > 0")
              : b > 1.5
                ? console.error("[responsiveVoice.setDefaultRate] rate must be <= 1.5")
                : (r = b);
        };
        a.mapRVs = function () {
          if ("object" == typeof navigator) {
            var b,
              c = "anguage",
              d = navigator;
            var h =
              ((b = d["l" + c + "s"]),
              b && b.length ? b : (c = d["l" + c] || d["browserL" + c] || d["userL" + c]) ? [c] : c);
          } else h = void 0;
          h = h[0];
          for (b = 0; b < a.responsivevoices.length; b++)
            for (c = a.responsivevoices[b], d = 0; d < c.voiceIDs.length; d++) {
              var e = a.voicecollection[c.voiceIDs[d]];
              if (e.fallbackvoice != 1) {
                var g = a.getSystemVoice(e.name);
                a.forcedFallbackMode && (g = null);
                a.iOS12_0 &&
                  c.lang.toLowerCase() != h.toLowerCase() &&
                  c.lang.toLowerCase().split("-")[0] != h.toLowerCase() &&
                  (g = null);
                if (g != null) {
                  c.mappedProfile = { systemvoice: g, collectionvoice: e };
                  break;
                }
              } else {
                c.mappedProfile = { systemvoice: {}, collectionvoice: e };
                break;
              }
            }
          a.rvsMapped = !0;
        };
        a.getMatchedVoice = function (b) {
          for (var c = 0; c < b.voiceIDs.length; c++) {
            var d = a.getSystemVoice(a.voicecollection[b.voiceIDs[c]].name);
            if (d != null) return d;
          }
          return null;
        };
        a.getSystemVoice = function (b) {
          var c = String.fromCharCode(160);
          var d = b.replace(new RegExp("\\s+|" + c, "g"), "");
          if (typeof a.systemvoices === "undefined" || a.systemvoices === null) return null;
          for (var h = 0; h < a.systemvoices.length; h++)
            if (
              0 === a.systemvoices[h].name.localeCompare(b) ||
              0 ===
                a.systemvoices[h].name
                  .replace(new RegExp("\\s+|" + c, "g"), "")
                  .replace(/ *\([^)]*\) */g, "")
                  .localeCompare(d)
            )
              return a.systemvoices[h];
          return null;
        };
        a.getResponsiveVoice = function (b) {
          for (var c = 0; c < a.responsivevoices.length; c++)
            if (a.responsivevoices[c].name == b)
              return (
                (b = a.fallbackMode),
                (a.fallbackMode =
                  a.responsivevoices[c].mappedProfile.collectionvoice.fallbackvoice === !0 ||
                  a.forcedFallbackMode === !0
                    ? !0
                    : !1),
                b != a.fallbackMode && (a.mapRVs(), a.Dispatch("OnServiceSwitched")),
                a.responsivevoices[c]
              );
          return null;
        };
        a.Dispatch = function (b, c) {
          c = c !== void 0 ? c : null;
          if (a.hasOwnProperty(b + "_callbacks") && a[b + "_callbacks"] != null && a[b + "_callbacks"].length > 0) {
            for (var d = a[b + "_callbacks"], h = 0; h < d.length; h++) d[h](c);
            return !0;
          }
          var e = b + "_callbacks_timeout",
            g = b + "_callbacks_timeoutCount";
          a.hasOwnProperty(e) ||
            ((a[g] = 10),
            (a[e] = setInterval(function () {
              --a[g];
              (a.Dispatch(b, c) || a[g] < 0) && clearTimeout(a[e]);
            }, 50)));
          return !1;
        };
        a.AddEventListener = function (b, c) {
          a.hasOwnProperty(b + "_callbacks") || (a[b + "_callbacks"] = []);
          a[b + "_callbacks"].push(c);
        };
        a.addEventListener = a.AddEventListener;
        a.RemoveEventListener = function (b, c) {
          a[b + "_callbacks"] &&
            a[b + "_callbacks"].indexOf(c) != -1 &&
            a[b + "_callbacks"].splice(a[b + "_callbacks"].indexOf(c), 1);
        };
        a.clickEvent = function () {
          a.log("Click event");
          a.click_event_detected = !0;
          a.initializePermissionsTimeout = setTimeout(a.initializePermissions, 5);
          a.userInteractionEvents.forEach(function (b) {
            window.removeEventListener(b, a.clickEvent, !1);
          });
          a.Dispatch("OnClickEvent");
        };
        a.initializePermissions = function () {
          if (a.iOS && !a.iOS_initialized) {
            a.log("Initializing iOS click event");
            if (typeof speechSynthesis !== "undefined") {
              var b = new SpeechSynthesisUtterance(" ");
              speechSynthesis.speak(b);
            }
            a.iOS_initialized = !0;
          }
          a.is_android &&
            !a.android_initialized &&
            (a.log("Initializing Android click event"),
            typeof speechSynthesis !== "undefined" &&
              ((b = new SpeechSynthesisUtterance(" ")), speechSynthesis.speak(b)),
            (a.android_initialized = !0));
          a.initFallbackPool();
        };
        a.isPlaying = function () {
          return a.fallbackMode
            ? a.fallback_audio != null && !a.fallback_audio.ended && !a.fallback_audio.paused
            : typeof speechSynthesis != "undefined"
              ? speechSynthesis.speaking
              : !1;
        };
        a.clearFallbackPool = function () {
          for (var b = 0; b < a.fallback_audiopool.length; b++)
            a.fallback_audiopool[b] != null && a.fallback_audiopool[b].pause();
          a.fallback_audiopool_index = 0;
          a.fallbackChunks = [];
        };
        a.initFallbackPool = function () {
          if (!a.fallback_audiopool || a.fallback_audiopool.length == 0) {
            for (var b = 0; b < 10; b++) {
              var c = b,
                d = document.createElement("AUDIO");
              d.preload = "auto";
              a.is_android &&
                ((d.src =
                  "data:audio/mpeg;base64,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"),
                d.load(),
                c == 9 && (a.log("Android HTML audio initialized"), (a.android_initialized = !0)));
              a.iOS &&
                ((d.src =
                  "data:audio/mpeg;base64,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"),
                d.load(),
                c == 9 && (a.log("iOS HTML audio initialized"), (a.iOS_initialized = !0)));
              a.fallback_audiopool.push(d);
            }
            a.fallback_audiopool_index = 0;
          }
        };
        a.allowSpeechClicked = function (b) {
          a.allowSpeechDiv.parentNode.removeChild(a.allowSpeechDiv);
          a.allowSpeechDiv = null;
          if ((a.speechAllowedByUser = b))
            (a.clickEvent(),
              a.scheduledSpeak &&
                (a.speak(a.scheduledSpeak.text, a.scheduledSpeak.voicename, a.scheduledSpeak.parameters),
                (a.scheduledSpeak = null)));
          a.Dispatch("OnAllowSpeechClicked");
        };
        a.checkSpeechAllowed = function (b) {
          if (a.speechAllowedByUser == 0) return !1;
          var c = a.is_android || a.iOS,
            d = a.is_safari && (a.fallbackMode || a.forcedFallbackMode);
          if (
            a.disablePermissionPopup !== !0 &&
            (a.allowPermissionPopupEverywhere === !0 || c || d || a.speechSynthesisNotAllowedError === !0) &&
            !a.click_event_detected
          ) {
            if (a.allowSpeechDiv) return;
            a.allowSpeechDiv_appearances = a.allowSpeechDiv_appearances == null ? 1 : ++a.allowSpeechDiv_appearances;
            if (a.allowSpeechDiv_appearances > 2)
              return (console.log("ResponsiveVoice: Speech not allowed by user"), !1);
            c = document.createElement("style");
            c.innerHTML =
              '.rvNotification{position:fixed;background-color:#fff;text-align:center;font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-weight:400;line-height:1.5;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);z-index:10000;width:100vw;left:0;bottom:0;font-size:1rem;padding-bottom:.5em;padding-right:.5em}.rvButtonRow{padding-right:2em;padding-bottom:1em;text-align:right;font-size:medium}.rvButton{cursor:pointer;display:inline-block;margin-left:1em;padding:.8em 2em;border-radius:3px;font-size:small}.rvButtonAllow{border:none;background-color:#2b8cff;color:#fff}.rvButtonDeny{border:1px solid #2b8cff;color:#2b8cff;background-color:#fff}.rvTextRow{padding-top:1em;padding-bottom:2em}@media (min-width:576px){.rvNotification{width:60vw;left:20vw}}@media (min-width:768px){.rvNotification{width:50vw;left:25vw}}@media (min-width:992px){.rvNotification{width:40vw;left:30vw}}@media (min-width:1200px){.rvNotification{width:30vw;left:35vw}}';
            document.body.appendChild(c);
            a.allowSpeechDiv = document.createElement("div");
            a.allowSpeechDiv.classList.add("rvNotification");
            b == void 0 && (b = {});
            a.allowSpeechDiv.innerHTML =
              '<div class="rvTextRow"><strong>' +
              (b.urlOverride != void 0 ? b.urlOverride : window.location.hostname) +
              "</strong> " +
              (b.textOverride != void 0 ? b.textOverride : "wants to play speech") +
              '</div><div class="rvButtonRow"><div onclick="responsiveVoice.allowSpeechClicked(false);" class="rvButton rvButtonDeny">DENY</div><div onclick="responsiveVoice.allowSpeechClicked(true);" class="rvButton rvButtonAllow">ALLOW</div></div>';
            document.body.appendChild(a.allowSpeechDiv);
            return !1;
          }
          return !0;
        };
        a.fallback_audioPool_getAudio = function () {
          a.initFallbackPool();
          a.fallback_audiopool_index >= a.fallback_audiopool.length && (a.fallback_audiopool_index = 0);
          return a.fallback_audiopool[a.fallback_audiopool_index++];
        };
        a.fallback_updateChunksBuffer = function () {
          for (
            var b = a.fallbackChunkIndex;
            b < Math.min(a.fallbackChunks.length, a.fallbackChunkIndex + a.fallbackBufferLength);
            b++
          ) {
            var c = a.fallbackChunks[b];
            c.audio == null &&
              ((c.audio = a.fallback_audioPool_getAudio()),
              (function (d) {
                var h = function () {
                  d.audio.src = d.url;
                  d.audio.playbackRate = a.fallback_playbackrate;
                  d.audio.preload = "auto";
                  d.audio.load();
                };
                b == 0 ? h() : setTimeout(h, 50 * b);
              })(c));
          }
        };
        a.selectBest = function (b) {
          for (var c = 0; c < b.length; c++) if (b[c] != null) return b[c];
          return null;
        };
        a.pause = function () {
          a.fallbackMode
            ? a.fallback_audio != null && a.fallback_audio.pause()
            : (speechSynthesis.pause(),
              (a.ttsCancelledByTimeout = !1),
              (a.ttsKeepAliveTimeout = setTimeout(function () {
                a.ttsKeepAliveTimeout = null;
                speechSynthesis.cancel();
                a.ttsCancelledByTimeout = !0;
              }, 6e4)));
        };
        a.resume = function () {
          if (a.fallbackMode) a.fallback_audio != null && a.fallback_audio.play();
          else if (a.ttsCancelledByTimeout)
            for (var b = (a.ttsCancelledByTimeout = !1), c = 0; c < a.utterances.length; c++) {
              var d = a.utterances[c];
              a.currentMsg == d && (b = !0);
              b && a.tts_speak(d);
            }
          else
            (a.ttsKeepAliveTimeout && (clearTimeout(a.ttsKeepAliveTimeout), (a.ttsKeepAliveTimeout = null)),
              speechSynthesis.resume());
        };
        a.tts_speak = function (b) {
          setTimeout(function () {
            a.cancelled = !1;
            a.analytics.characterCount += b.text.toString().length;
            speechSynthesis.speak(b);
          }, 0.01);
        };
        a.setVolume = function (b) {
          if (a.isPlaying())
            if (a.fallbackMode) {
              for (var c = 0; c < a.fallback_audiopool.length; c++) a.fallback_audiopool[c].volume = b;
              a.fallback_audio.volume = b;
            } else for (c = 0; c < a.utterances.length; c++) a.utterances[c].volume = b;
        };
        a.onPartEnd = function (b) {
          if (a.msgparameters != null && a.msgparameters.onchuckend != null) a.msgparameters.onchuckend();
          a.Dispatch("OnPartEnd");
          b = a.utterances.indexOf(b.utterance);
          a.currentMsg = a.utterances[b + 1];
        };
        a.onboundary = function (b) {
          a.log("On Boundary");
          a.iOS && !a.onstartFired && a.speech_onstart();
        };
        a.numToWords = function (b) {
          var c = (function () {
              return function (p, m) {
                if (Array.isArray(p)) return p;
                if (Symbol.iterator in Object(p)) {
                  var v = [],
                    n = !0,
                    B = !1,
                    H = void 0;
                  try {
                    for (
                      var C = p[Symbol.iterator](), E;
                      !(n = (E = C.next()).done) && (v.push(E.value), !m || v.length !== m);
                      n = !0
                    );
                  } catch (I) {
                    ((B = !0), (H = I));
                  } finally {
                    try {
                      if (!n && C["return"]) C["return"]();
                    } finally {
                      if (B) throw H;
                    }
                  }
                  return v;
                }
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              };
            })(),
            d = function (p) {
              return p.length === 0;
            },
            h = function (p) {
              return function (m) {
                return m.slice(0, p);
              };
            },
            e = function (p) {
              return function (m) {
                return m.slice(p);
              };
            },
            g = function (p) {
              return p.slice(0).reverse();
            },
            k = function (p) {
              return function (m) {
                return function (v) {
                  return p(m(v));
                };
              };
            },
            f = function (p) {
              return !p;
            },
            l = function v(m) {
              return function (n) {
                if (d(n)) var B = [];
                else {
                  B = [h(m)(n)];
                  var H = B.concat;
                  n = v(m)(e(m)(n));
                  if (Array.isArray(n)) {
                    for (var C = 0, E = Array(n.length); C < n.length; C++) E[C] = n[C];
                    n = E;
                  } else n = Array.from(n);
                  B = H.call(B, n);
                }
                return B;
              };
            },
            t =
              " one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(
                " ",
              ),
            D = "  twenty thirty forty fifty sixty seventy eighty ninety".split(" "),
            G =
              " thousand million billion trillion quadrillion quintillion sextillion septillion octillion nonillion".split(
                " ",
              ),
            F = function (m) {
              var v = c(m, 3);
              m = v[0];
              var n = v[1];
              v = v[2];
              return [
                (Number(v) || 0) === 0 ? "" : t[v] + " hundred ",
                (Number(m) || 0) === 0 ? D[n] : (D[n] && D[n] + " ") || "",
                t[n + m] || t[m],
              ].join("");
            },
            y = function (m, v) {
              return m === "" ? m : m + " " + G[v];
            };
          return typeof b === "number"
            ? a.numToWords(String(b))
            : b === "0"
              ? "zero"
              : k(l(3))(g)(Array.from(b)).map(F).map(y).filter(k(f)(d)).reverse().join(" ").trim();
        };
        a.getWords = function (b) {
          b = b.replace(
            /$|\u00a5|\u20a1|\u20ac|\u00a3|\u20aa|\u20b9|\uffe5|\u17db|\u20a9|\u20a6|\u0e3f|\u20b4|\u20ab/gi,
            " dummy currency ",
          );
          var c = b.split(/(\s*[\s,]\s*|\?|;|:|\.|\(|\)|!)/);
          c = c.filter(function (h) {
            return /[^\s]/.test(h);
          });
          for (var d = 0; d < c.length; d++)
            (b = c[d].toString().match(/\d+/)) != null &&
              (c.splice(d, 1),
              a
                .numToWords(+b[0])
                .split(/\s+/)
                .map(function (h) {
                  c.push(h);
                }));
          return c;
        };
        a.getEstimatedTimeLength = function (b, c) {
          b = a.getWords(b);
          var d = 0,
            h = a.fallbackMode ? 1300 : 700;
          c = c || 1;
          b.map(function (k, f) {
            d += (k.toString().match(/[^ ]/gim) || k).length;
          });
          var e = b.length,
            g = c * 1e3 * (60 / a.WORDS_PER_MINUTE) * e;
          e < 5 && (g = c * (h + d * 50));
          a.log("Estimated time length: " + g + " ms, words: [" + b + "], charsCount: " + d);
          return g;
        };
        a.validateParameters = function (b, c) {
          if (typeof b[c] === "undefined") return b[c];
          switch (c) {
            case "rate":
            case "pitch":
            case "volume":
              var d = Number(b[c]);
              isNaN(d) &&
                console.warn(
                  "ResponsiveVoice: the parameter " + c + ' has a wrong value "' + b[c] + '". Defaults were used.',
                );
              b[c] = isNaN(d) ? "1" : b[c];
          }
          return b[c];
        };
        a.services = { NATIVE_TTS: 0, FALLBACK_AUDIO: 1 };
        a.servicesPriority = [0, 1];
        a.servicesEnabled = [];
        a.setServiceEnabled = function (b, c) {
          a.servicesEnabled[b] = c;
        };
        a.getServiceEnabled = function (b) {
          return a.servicesEnabled[b] || !1;
        };
        a.setServiceEnabled(a.services.NATIVE_TTS, !0);
        a.setServiceEnabled(a.services.FALLBACK_AUDIO, !0);
        a.forceFallbackMode = function (b) {
          a.forcedFallbackMode = b;
          a.fallbackMode = b;
          a.mapRVs();
          a.Dispatch("OnServiceSwitched");
        };
        a.enableWindowClickHook = function () {
          a.userInteractionEvents.forEach(function (b) {
            window.addEventListener(b, a.clickEvent, !1);
          });
        };
        a.setTextReplacements = function (b) {
          if (b == null) q = null;
          else {
            q = [];
            for (var c = 0; c < b.length; c++) {
              var d = b[c],
                h = d.searchvalue;
              if (typeof h == "string")
                try {
                  var e = h.match(RegExp("^/(.*?)/([gimy]*)$")),
                    g = new RegExp(e[1], e[2]);
                  g instanceof RegExp && (h = g);
                } catch (k) {
                  h = new RegExp(h, "g");
                }
              q.push({
                searchvalue: h,
                newvalue: d.newvalue,
                collectionvoices: d.collectionvoices,
                systemvoices: d.systemvoices,
              });
            }
          }
        };
        var A = /(code\.responsivevoice\.org|local-lb).*?responsivevoice(\.\w+)?\.js/gi;
        document.readyState === "interactive"
          ? a.init()
          : document.addEventListener("DOMContentLoaded", function () {
              a.init();
            });
        window.addEventListener("beforeunload", function () {
          if (rvApiKey && a.analytics.characterCount) {
            var b = new FormData();
            b.append("key", rvApiKey);
            b.append("count", a.analytics.characterCount);
            navigator.sendBeacon("https://app.responsivevoice.org/analytics/cc/session", b) &&
              (a.analytics.characterCount = 0);
          }
        });
      },
      responsiveVoice = new ResponsiveVoice();

  /// -------- RESPONSIVE VOICE ends
  responsiveVoice.debug = true;
}

if (document.location.search && /rvWebsiteVerify=rSrEIS8q/gi.test(document.location.search)) {
  function rvNotificationPopup() {
    var css =
        '#rv_rSrEIS8q_notification,#rv_rSrEIS8q_notification *{font-family:"Open Sans",Helvetica,Arial,sans-serif,Tahoma!important}#rv_rSrEIS8q_notification{transition-duration:.3s;opacity:1;transform:scale(1);background:#fff;border:1px solid rgba(0,0,0,.125);border-radius:.3rem;position:fixed;z-index:2147483646;top:20px;left:20px;width:400px;padding:25px;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.3);-moz-box-shadow:0 2px 4px 0 rgba(0,0,0,.3);box-shadow:0 2px 4px 0 rgba(0,0,0,.3)}#rv_rSrEIS8q_notification .rv_notification_logo{background:url(https://app.responsivevoice.org/favicon-96x96.png) no-repeat;background-size:50px 50px;float:left;margin:0 20px 0 0;width:50px;height:50px}#rv_rSrEIS8q_notification_play{background:url(https://app.responsivevoice.org/images/play.png) no-repeat;background-size:25px 25px;float:left;margin:0 5px 0 0;width:25px;height:25px;cursor:pointer}#rv_rSrEIS8q_notification .rv_notification_body{float:left;color:#343a40;font-size:13px;width:78%;min-height:50px;vertical-align:middle}#rv_rSrEIS8q_notification .rv_notification_title{color:#1d643b;font-size:16px;font-weight:700;margin:1px 0 4px 0;display:inline-block}#rv_rSrEIS8q_notification_close{position:absolute;top:15px;right:15px;font-size:22px;color:#343a40;cursor:pointer;line-height:11px}.rv_notification_clear{clear:both}',
      head = document.head || document.getElementsByTagName("head")[0],
      style = document.createElement("style");
    head.appendChild(style);
    style.type = "text/css";

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    var rvNotification = document.createElement("div");
    rvNotification.innerHTML =
      '<div id=rv_rSrEIS8q_notification><div id=rv_rSrEIS8q_notification_close>Ã—</div><div class=rv_notification_logo></div><div class=rv_notification_body><div id=rv_rSrEIS8q_notification_play></div><span class=rv_notification_title>ResponsiveVoice URL verified</span><br><span class=rv_notification_text>Your <i style="display: none;">ResponsivVoice</i> code snippet is correctly installed, you may now close this window.</span></div><div class=rv_notification_clear></div></div>';
    document.body.appendChild(rvNotification);

    function speakVerification() {
      responsiveVoice.speak(
        document.getElementById("rv_rSrEIS8q_notification").getElementsByClassName("rv_notification_text")[0]
          .textContent,
      );
    }

    document.getElementById("rv_rSrEIS8q_notification_play").addEventListener("click", function (e) {
      speakVerification();
    });

    document.getElementById("rv_rSrEIS8q_notification_close").addEventListener("click", function (e) {
      style.remove();
      rvNotification.remove();
    });

    speakVerification();
  }

  document.addEventListener(
    "DOMContentLoaded",
    function () {
      var xhttp = new XMLHttpRequest();
      xhttp.open("POST", "https://code.responsivevoice.org/verify/rSrEIS8q", true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send("rv=" + (typeof responsiveVoice !== "undefined"));
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          rvNotificationPopup();
        }
      };
    },
    false,
  );
}

/**
 Copyright (c) Tristen Brown

 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!(function (e, t) {
  if ("function" == typeof define && define.amd) define("hoverintent", ["module"], t);
  else if ("undefined" != typeof exports) t(module);
  else {
    var n = { exports: {} };
    (t(n), (e.hoverintent = n.exports));
  }
})(this, function (e) {
  "use strict";
  var t =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
      }
      return e;
    };
  e.exports = function (e, n, o) {
    function i(e, t) {
      return (y && (y = clearTimeout(y)), (b = 0), p ? void 0 : o.call(e, t));
    }
    function r(e) {
      ((m = e.clientX), (d = e.clientY));
    }
    function u(e, t) {
      if ((y && (y = clearTimeout(y)), Math.abs(h - m) + Math.abs(E - d) < x.sensitivity))
        return ((b = 1), p ? void 0 : n.call(e, t));
      ((h = m),
        (E = d),
        (y = setTimeout(function () {
          u(e, t);
        }, x.interval)));
    }
    function s(t) {
      return (
        (L = !0),
        y && (y = clearTimeout(y)),
        e.removeEventListener("mousemove", r, !1),
        1 !== b &&
          ((h = t.clientX),
          (E = t.clientY),
          e.addEventListener("mousemove", r, !1),
          (y = setTimeout(function () {
            u(e, t);
          }, x.interval))),
        this
      );
    }
    function c(t) {
      return (
        (L = !1),
        y && (y = clearTimeout(y)),
        e.removeEventListener("mousemove", r, !1),
        1 === b &&
          (y = setTimeout(function () {
            i(e, t);
          }, x.timeout)),
        this
      );
    }
    function v(t) {
      L || ((p = !0), n.call(e, t));
    }
    function a(t) {
      !L && p && ((p = !1), o.call(e, t));
    }
    function f() {
      (e.addEventListener("focus", v, !1), e.addEventListener("blur", a, !1));
    }
    function l() {
      (e.removeEventListener("focus", v, !1), e.removeEventListener("blur", a, !1));
    }
    var m,
      d,
      h,
      E,
      L = !1,
      p = !1,
      T = {},
      b = 0,
      y = 0,
      x = { sensitivity: 7, interval: 100, timeout: 0, handleFocus: !1 };
    return (
      (T.options = function (e) {
        var n = e.handleFocus !== x.handleFocus;
        return ((x = t({}, x, e)), n && (x.handleFocus ? f() : l()), T);
      }),
      (T.remove = function () {
        e && (e.removeEventListener("mouseover", s, !1), e.removeEventListener("mouseout", c, !1), l());
      }),
      e && (e.addEventListener("mouseover", s, !1), e.addEventListener("mouseout", c, !1)),
      T
    );
  };
});

var config = {
  welcomeMessage: false,
  speakSelectedText: false,
  speakLinks: false,
  speakInactivity: false,
  speakEndPage: false,
  exitIntent: false,
  accesibilityNavigation: false,
  accesibilityNavigation2: false,
  welcomeMessageTime: false,
  text_welcomeMessage: "",
  text_speakInactivity: "",
  text_speakEndPage: "",
  text_exitIntent: "",
  trackEvents: false,
  abTesting: false,
  analytics_id: null,
  another_field: null,
};

/*<!-- LearnBriteAnalytics -->
var _wla = _wla || [];
_wla.push(['trackPageView']);
//_wla.setCountPrerender(true);
_wla.push(['enableLinkTracking']);
(function() {
    var u="//ai.learnbrite.com/";
    _wla.push(['setTrackerUrl', u+'analytics.php']);
    _wla.push(['setSiteId', 75]);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript';
    g.async=true; g.defer=true; g.src=u+'analytics.js.php'; s.parentNode.insertBefore(g,s); })(); */

var splitTestEnabled = config.abTesting || false;
var splitTest_useGS = Math.random() < 0.5;

function GetRandomMsg(text) {
  var texts = text.split("|");
  return texts[Math.floor(Math.random() * texts.length)];
}

function getHiddenProp() {
  var prefixes = ["webkit", "moz", "ms", "o"];

  // if 'hidden' is natively supported just return it
  if ("hidden" in document) return "hidden";

  // otherwise loop over all the known prefixes until we find one
  for (var i = 0; i < prefixes.length; i++) {
    if (prefixes[i] + "Hidden" in document) return prefixes[i] + "Hidden";
  }

  // otherwise it's not supported
  return null;
}

function getVisibilityState() {
  var prefixes = ["webkit", "moz", "ms", "o"];

  // if 'visibilityState' is natively supported just return it
  if ("visibilityState" in document) return "visibilityState";

  // otherwise loop over all the known prefixes until we find one
  for (var i = 0; i < prefixes.length; i++) {
    if (prefixes[i] + "VisibilityState" in document) return prefixes[i] + "VisibilityState";
  }
  // otherwise it's not supported
  return null;
}

function isHidden() {
  var prop = getHiddenProp();
  if (!prop) return false;

  return document[prop];
}

function isPrerendered() {
  var prop = getVisibilityState();
  //console.log(prop);
  if (!prop) return false;
  //console.log(document[prop]);
  if (document[prop] != "prerender") return false;
  return document[prop];
}

//Analytics

//Search Message

var prerenderUsed = false;

if (isPrerendered() && !prerenderUsed) {
  prerenderUsed = true;
  setTimeout(function () {
    if (!splitTestEnabled || (splitTestEnabled && splitTest_useGS)) {
      var txt = GetRandomMsg("");
      if (txt != null && txt != "") {
        console.log("Launching search message");
        responsiveVoice.speak("According to Voicebrite, " + txt, "UK English Female");
      }
    }

    //Search Message Split Test - Impression
    if (splitTestEnabled) {
      if (splitTest_useGS) {
        trackEvent("searchMessage", "impressionAB", "true");
      } else {
        trackEvent("searchMessage", "impressionAB", "false");
      }
    } else {
      trackEvent("searchMessage", "impression");
    }
  }, 1500);
}

window.addEventListener("load", function () {
  //We came from prerender
  var smessInterval = null;
  if (prerenderUsed) {
    smessInterval = setInterval(function () {
      if (!isPrerendered()) {
        clearInterval(smessInterval);

        //Search Message Split Test - Impression
        if (splitTestEnabled) {
          if (splitTest_useGS) {
            trackEvent("searchMessage", "visitAB", "true");
          } else {
            trackEvent("searchMessage", "visitAB", "false");
          }
        } else {
          trackEvent("searchMessage", "visit");
        }
      }
    }, 1000);
  }

  //Speak links
  var _allLinks = document.getElementsByTagName("a");
  Array.prototype.forEach.call(_allLinks, function (el) {
    hoverintent(
      el,
      function () {
        if (config.speakLinks) {
          //responsiveVoice.cancel();
          responsiveVoice.speak(el.textContent, "UK English Female");
          trackEvent("agentFeature", "spokenLink");
        }
      },
      function () {},
    );
  });

  //Speak selected text
  var selectedText = "";
  var last_selectedText = "";

  function getSelectionText() {
    var text = "";
    if (window.getSelection) {
      text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
      // for Internet Explorer 8 and below
      text = document.selection.createRange().text;
    }
    return text;
  }

  if (config.speakSelectedText) {
    attachToElements(document.querySelectorAll("PRE,DIV"), ["mouseup", "touchend"], onMouseUp);
  }

  function attachToElements(elements, events, callback) {
    if (elements.length > 0) {
      for (var i = 0; i < elements.length; i++) {
        events.forEach(function (event) {
          elements[i].addEventListener(event, function (e) {
            callback();
          });
        });
      }
    }
  }

  function onMouseUp() {
    selectedText = getSelectionText();
    console.log("Selected text *" + selectedText + "*");
    if (selectedText != last_selectedText && selectedText != "") {
      last_selectedText = selectedText;

      responsiveVoice.cancel(); // stop anything currently being spoken
      responsiveVoice.speak(selectedText, "UK English Female"); //speak the text as returned by getSelectionText
      trackEvent("agentFeature", "highlightText");
    }
  }

  //Speak welcome message. Will only play if user didn't came from google.
  var welcomeMessageLaunched = false;
  if (
    config.welcomeMessage &&
    (!config.welcomeMessageTime || oneTimeTest("welcomeMessage")) &&
    !isPrerendered() &&
    !prerenderUsed
  ) {
    welcomeMessageLaunched = true;
    setTimeout(function () {
      if (config.text_welcomeMessage != null && config.text_welcomeMessage != "") {
        console.log("Launching welcome message");
        responsiveVoice.speak(GetRandomMsg(config.text_welcomeMessage), "UK English Female");
        trackEvent("agentFeature", "welcomeMessage");
      }
    }, 1500);
  }

  //Speak welcome message when user came from Google. Won't play if default message played
  var welcomeMessage2Launched = false;
  var welcomeMessage2Interval = null;
  if (
    !welcomeMessageLaunched &&
    config.welcomeMessage2 &&
    (!config.welcomeMessageTime || oneTimeTest("welcomeMessage2")) &&
    config.text_welcomeMessage2 != null &&
    config.text_welcomeMessage2 != ""
  ) {
    //Wait until we're visible and launch message

    welcomeMessage2Interval = setInterval(function () {
      console.log("Welcome Message from Google Waiting");
      if (!isPrerendered() && !welcomeMessage2Launched) {
        console.log("Welcome Message from Google launched");

        welcomeMessage2Launched = true;
        responsiveVoice.speak(GetRandomMsg(config.text_welcomeMessage2), "UK English Female");
        trackEvent("agentFeature", "welcomeMessage2");
        clearInterval(welcomeMessage2Interval);
      }
    }, 1000);
  }

  //Speak when scroll end
  function bindScroll() {
    if (
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 100 &&
      config.text_speakEndPage != null &&
      config.text_speakEndPage != ""
    ) {
      console.log("bottom");
      window.removeEventListener("scroll", bindScroll);

      responsiveVoice.speak(GetRandomMsg(config.text_speakEndPage), "UK English Female");
      trackEvent("agentFeature", "scrollEnd");
    }
  }

  if (config.speakEndPage) {
    window.addEventListener("scroll", bindScroll);
  }

  //Inactivity
  var idleTime = 0;
  if (config.speakInactivity) {
    setInterval(timerIncrement, 1000);

    window.addEventListener("mousemove", function () {
      idleTime = 0;
    });

    window.addEventListener("keyup", function () {
      idleTime = 0;
    });
  }

  function timerIncrement() {
    idleTime += 1000;

    if (idleTime >= 30000) {
      responsiveVoice.speak(GetRandomMsg(config.text_speakInactivity), "UK English Female");
      trackEvent("agentFeature", "inactivity");
      idleTime = 0;
    }
  }

  //Exit intent
  if (config.speakInactivity) {
    console.info("setting up exit intent");
    document.addEventListener("mouseout", exitIntent);
  }

  function exitIntent(e) {
    if (e.clientY < 0) {
      responsiveVoice.speak(GetRandomMsg(config.text_exitIntent), "UK English Female");
      trackEvent("agentFeature", "exitIntent");
    }
  }

  //Tab and ctrl to speak - Accessibility Navigation
  var started = 0;
  if (config.accesibilityNavigation) {
    console.log("accesibilityNavigation");

    document.addEventListener("keyup", function (e) {
      console.log("keyup called");

      var code = e.keyCode || e.which;

      if (e.target) {
        switch (e.target.tagName) {
          case "A":
            if (code == "9") {
              responsiveVoice.speak("Link 2 " + e.target.text, "UK English Female");
              trackEvent("agentFeature", "accesibilityNavigation", "tab");
            }
            break;

          case "BUTTON":
            if (code == "9") {
              setTimeout(responsiveVoice.speak(e.target.textContent + " button", "UK English Female"), 1000);
              trackEvent("agentFeature", "accesibilityNavigation", "tab");
            }
            break;

          case "TEXTAREA":
            if (code == "9") {
              responsiveVoice.speak(
                "Text Input " + document.querySelectorAll(":focus")[0].getAttribute("placeholder"),
                "UK English Female",
              );
              trackEvent("agentFeature", "accesibilityNavigation", "tab");
            }
            break;
        }
      }
    });
  }

  if (config.accesibilityNavigation2) {
    document.addEventListener("keyup", function (e) {
      console.log("keyup called");

      var code = e.keyCode || e.which;

      if (code == "40" && e.ctrlKey) {
        console.log("ctrl + down arrow");

        responsiveVoice.speak(document.querySelectorAll("p")[started].textContent, "UK English Female");
        trackEvent("agentFeature", "accesibilityNavigation", "ctrl-arrow");
        document.querySelectorAll("p")[started].scrollIntoView(false);
        started = started + 1;
      }
      if (code == "38" && e.ctrlKey) {
        console.log("ctrl + up arrow");

        responsiveVoice.speak(document.querySelectorAll("p")[started].textContent, "UK English Female");
        trackEvent("agentFeature", "accesibilityNavigation", "ctrl-arrow");
        document.querySelectorAll("p")[started].scrollIntoView(false);
        started = started - 1;
        if (started < 1) {
          started = 0;
        }
      }
    });
  }
});

function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
  } else var expires = "";
  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name, "", -1);
}

function getOrCreateTest(name, prob, days) {
  var c = readCookie(name);

  if (c == null) {
    console.log("Cookie set");
    var v = Math.random() < (prob != null ? prob : 0.5);
    //1 hour
    createCookie(name, v.toString(), days != null ? days : 1 / 24);
    return v;
  }
  console.log("Cookie read");
  return c == true.toString();
}

function oneTimeTest(name, days) {
  var c = readCookie(name);

  if (c == null) {
    console.log("Cookie set - one time True");
    //1 hour
    createCookie(name, false.toString(), days != null ? days : 0.5 / 24);
    return true;
  }
  console.log("Cookie read - one time False");
  return false;
}

function trackEvent(category, action, name, value) {
  if (config.trackEvents != true) return;

  console.log("Track " + category + "," + action + "," + name);

  var url = "https://ai.learnbrite.com/analytics.php";
  var postArray = [];

  var data = {
    idsite: config.analytics_id,
    rec: 1,
    url: window.location.href,
    rand: Math.floor(Math.random() * 1000000000),
    e_c: category,
    e_a: action,
    e_n: name,
    e_v: value,
  };

  for (var property in data) {
    postArray.push(encodeURI(property + "=" + data[property]));
  }

  var xhttp = new XMLHttpRequest();

  xhttp.open("POST", url, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(postArray.join("&"));

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log("Tracking Success");
      console.log(data);
    }
  };
}
