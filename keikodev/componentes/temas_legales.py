import reflex as rx

def privacy_policy_link():
    return rx.chakra.link(
        "Política de Privacidad",
        href="https://www.iubenda.com/privacy-policy/14796411",
        class_name="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe",
        title="Política de Privacidad"
    )

def privacy_policy_script():
    return rx.script("""
(function (w,d) {
    var loader = function () {
        var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];
        s.src = "https://cdn.iubenda.com/iubenda.js";
        tag.parentNode.insertBefore(s,tag);
    };
    if(w.addEventListener){
        w.addEventListener("load", loader, false);
    } else if(w.attachEvent){
        w.attachEvent("onload", loader);
    } else {
        w.onload = loader;
    }
})(window, document);
""")

def cookie_policy_link():
    return rx.link(
        "Política de Cookies",
        href="https://www.iubenda.com/privacy-policy/14796411/cookie-policy",
        class_name="iubenda-black iubenda-embed iubenda-noiframe iubenda-noiframe",
        title="Política de Cookies"
    )

def iubenda_script():
    return rx.script("""
        (function (w,d) {
            var loader = function () {
                var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];
                s.src = "https://cdn.iubenda.com/iubenda.js";
                tag.parentNode.insertBefore(s,tag);
            };
            if(w.addEventListener){
                w.addEventListener("load", loader, false);
            } else if(w.attachEvent){
                w.attachEvent("onload", loader);
            } else {
                w.onload = loader;
            }
        })(window, document);
    """)

import reflex as rx

def iubenda_script_cookies():
    return rx.script("""
    var _iub = _iub || [];
    _iub.csConfiguration = {
        "askConsentAtCookiePolicyUpdate": true,
        "enableFadp": true,
        "enableLgpd": true,
        "enableUspr": true,
        "fadpApplies": true,
        "floatingPreferencesButtonDisplay": "bottom-right",
        "lang": "es",
        "perPurposeConsent": true,
        "siteId": 3509766,
        "usprApplies": true,
        "whitelabel": false,
        "cookiePolicyId": 14796411,
        "banner": {
            "acceptButtonDisplay": true,
            "closeButtonDisplay": false,
            "customizeButtonDisplay": true,
            "explicitWithdrawal": true,
            "listPurposes": true,
            "position": "float-top-center",
            "rejectButtonDisplay": true,
            "showTitle": false
        }
    };
    """)

def iubenda_external_scripts():
    return rx.vstack(
        rx.script(src="https://cs.iubenda.com/autoblocking/3509766.js"),
        rx.script(src="//cdn.iubenda.com/cs/gpp/stub.js"),
        rx.script(src="//cdn.iubenda.com/cs/iubenda_cs.js", charset="UTF-8", async_=True)
    )               