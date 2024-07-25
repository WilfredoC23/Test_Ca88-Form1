var isPhone = -1,
    isTablet = -1,
    isPc = -1,
    os = function () {
        var e = navigator.userAgent,
            t = /(?:Windows Phone)/.test(e),
            n = /(?:SymbianOS)/.test(e) || t,
            i = /(?:Android)/.test(e),
            o = /(?:Firefox)/.test(e),
            s = (/(?:Chrome|CriOS)/.test(e), /(?:iPad|PlayBook)/.test(e) || i && !/(?:Mobile)/.test(e) || o && /(?:Tablet)/.test(e)),
            a = /(?:iPhone)/.test(e) && !s;
        i ? isAndroid = 1 : a ? isPhone = 1 : s ? isTablet = 1 : a || i || n || (isPc = 1)
    }();

function __regCA88Link() {
    window.open(isPc > 0 ? config.regCA88Link_pc : config.regCA88Link_mb, "target", "")
}

function __kefuLink() {
    window.open(isPc > 0 ? config.kefuLink_pc : config.kefuLink_mb, "target", "")
}

function __regUnifyLink() {
    window.open(isPc > 0 ? config.regUnifyLink_pc : config.regUnifyLink_mb, "target", "")
}

function __appDownLink(){
    window.open(isPc > 0 ? config.appDownLink_pc : config.appDownLink_mb, "target", "")
}

function __applink(){
    window.open(isPc > 0 ? config.applink_pc : config.applink_mb, "target", "")
}

function __bubbleAppLink(){
    window.open(config.bubbleAppLink, "target", "")
}
