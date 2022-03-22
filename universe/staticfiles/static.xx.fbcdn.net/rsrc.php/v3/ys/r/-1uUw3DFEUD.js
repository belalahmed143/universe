if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
}

__d("PluginLoggedOutUserTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:PluginLoggedOutUserLoggerConfig", this.$1, b("Banzai").BASIC, a)
        };
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:PluginLoggedOutUserLoggerConfig", this.$1, b("Banzai").VITAL, a)
        };
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:PluginLoggedOutUserLoggerConfig", this.$1, {
                signal: !0
            }, a)
        };
        c.clear = function() {
            this.$1 = {};
            return this
        };
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        };
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.setHref = function(a) {
            this.$1.href = a;
            return this
        };
        c.setIsSDK = function(a) {
            this.$1.is_sdk = a;
            return this
        };
        c.setPluginAppID = function(a) {
            this.$1.plugin_app_id = a;
            return this
        };
        c.setPluginName = function(a) {
            this.$1.plugin_name = a;
            return this
        };
        c.setRefererURL = function(a) {
            this.$1.referer_url = a;
            return this
        };
        c.updateExtraData = function(a) {
            a = b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));
            b("GeneratedLoggerUtils").checkExtraDataFieldNames(a, g);
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.addToExtraData = function(a, b) {
            var c = {};
            c[a] = b;
            return this.updateExtraData(c)
        };
        return a
    }();
    var g = {
        href: !0,
        is_sdk: !0,
        plugin_app_id: !0,
        plugin_name: !0,
        referer_url: !0
    };
    f["default"] = a
}), 66);
__d("ChannelConstants", [], (function(a, b, c, d, e, f) {
    var g = "channel/";
    a = {
        CHANNEL_MANUAL_RECONNECT_DEFER_MSEC: 2e3,
        MUTE_WARNING_TIME_MSEC: 25e3,
        WARNING_COUNTDOWN_THRESHOLD_MSEC: 15e3,
        ON_SHUTDOWN: g + "shutdown",
        ON_INVALID_HISTORY: g + "invalid_history",
        ON_CONFIG: g + "config",
        ON_ENTER_STATE: g + "enter_state",
        ON_EXIT_STATE: g + "exit_state",
        ATTEMPT_RECONNECT: g + "attempt_reconnect",
        RTI_SESSION: g + "new_rti_address",
        CONSOLE_LOG: g + "message:console_log",
        GET_RTI_SESSION_REQUEST: g + "rti_session_request",
        SKYWALKER: g + "skywalker",
        CHANNEL_ESTABLISHED: g + "established",
        OK: "ok",
        ERROR: "error",
        ERROR_MAX: "error_max",
        ERROR_MISSING: "error_missing",
        ERROR_MSG_TYPE: "error_msg_type",
        ERROR_SHUTDOWN: "error_shutdown",
        ERROR_STALE: "error_stale",
        SYS_OWNER: "sys_owner",
        SYS_NONOWNER: "sys_nonowner",
        SYS_ONLINE: "sys_online",
        SYS_OFFLINE: "sys_offline",
        SYS_TIMETRAVEL: "sys_timetravel",
        HINT_AUTH: "shutdown auth",
        HINT_CONN: "shutdown conn",
        HINT_DISABLED: "shutdown disabled",
        HINT_INVALID_STATE: "shutdown invalid state",
        HINT_MAINT: "shutdown maint",
        HINT_UNSUPPORTED: "shutdown unsupported",
        reason_Unknown: 0,
        reason_AsyncError: 1,
        reason_TooLong: 2,
        reason_Refresh: 3,
        reason_RefreshDelay: 4,
        reason_UIRestart: 5,
        reason_NeedSeq: 6,
        reason_PrevFailed: 7,
        reason_IFrameLoadGiveUp: 8,
        reason_IFrameLoadRetry: 9,
        reason_IFrameLoadRetryWorked: 10,
        reason_PageTransitionRetry: 11,
        reason_IFrameLoadMaxSubdomain: 12,
        reason_NoChannelInfo: 13,
        reason_NoChannelHost: 14,
        CAPABILITY_VOIP_INTEROP: 8,
        CAPABILITY_ACTIVE_ON_DESKTOP_APP: 16384,
        CAPABILITY_PLAYING_INSTANT_GAME: 2097152,
        FANTAIL_SERVICE: "WebchatClient",
        SUBSCRIBE: "subscribe",
        UNSUBSCRIBE: "unsubscribe",
        FAKE_DFF: "fake_dff",
        THROTTLED: g + "throttled",
        JUMPSTART: g + "jumpstart",
        ENTITY_PRESENCE_ACTIVE_PING: "entity_presence/active_ping",
        ENTITY_PRESENCE_SKIPPED_PING: "entity_presence/skipped_ping",
        SUBSCRIPTION_STATE: {
            SUBSCRIBE: "s",
            MUTATE_CONTEXT: "m",
            UNSUBSCRIBE: "u"
        },
        DEFAULT_MAX_SUBSCRIPTIONS: 300,
        DEFAULT_EVICTION_BATCH_SIZE: 20,
        DEFAULT_MAX_SUBSCRIPTION_FLUSH_BATCH_SIZE: 300,
        DEFAULT_MAX_CONSECUTIVE_FLUSH_FAILURES: 3,
        getArbiterType: function(a) {
            return g + "message:" + a
        },
        getRTISkywalkerArbiterType: function(a, b) {
            return g + "skywalker:" + a + ":" + b
        }
    };
    e.exports = a
}), null);
__d("AvailableListConstants", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ON_AVAILABILITY_CHANGED: "buddylist/availability-changed",
        ON_UPDATE_ERROR: "buddylist/update-error",
        ON_UPDATED: "buddylist/updated",
        ON_CHAT_NOTIFICATION_CHANGED: "chat-notification-changed",
        OFFLINE: 0,
        IDLE: 1,
        ACTIVE: 2,
        MOBILE: 3,
        WEB_STATUS: "webStatus",
        FB_APP_STATUS: "fbAppStatus",
        MESSENGER_STATUS: "messengerStatus",
        OTHER_STATUS: "otherStatus",
        STATUS_ACTIVE: "active",
        STATUS_IDLE: "idle",
        STATUS_OFFLINE: "offline"
    });
    f["default"] = a
}), 66);
__d("PresenceConfig", ["PresenceConfigInitialData"], (function(a, b, c, d, e, f, g) {
    var h = babelHelpers["extends"]({}, c("PresenceConfigInitialData"));

    function a(a, b) {
        return a in h ? h[a] : b
    }
    g.get = a
}), 98);
__d("getContextualParent", ["ge"], (function(a, b, c, d, e, f, g) {
    function a(a, b) {
        b === void 0 && (b = !1);
        var d = !1;
        a = a;
        do {
            if (a instanceof Element) {
                var e = a.getAttribute("data-ownerid");
                if (e) {
                    a = c("ge")(e);
                    d = !0;
                    continue
                }
            }
            a = a.parentNode
        } while (b && a && !d);
        return a
    }
    g["default"] = a
}), 98);
__d("collectDataAttributes", ["DataAttributeUtils", "getContextualParent"], (function(a, b, c, d, e, f) {
    var g = "normal";

    function a(a, c, d) {
        var e = {},
            f = [],
            h = c.length,
            i;
        for (i = 0; i < h; ++i) e[c[i]] = {}, f.push("data-" + c[i]);
        if (d) {
            e[g] = {};
            for (i = 0; i < (d || []).length; ++i) f.push(d[i])
        }
        d = {
            tn: "",
            "tn-debug": ","
        };
        a = a;
        while (a) {
            if (a.getAttribute)
                for (i = 0; i < f.length; ++i) {
                    var j = f[i],
                        k = b("DataAttributeUtils").getDataAttribute(a, j);
                    if (k) {
                        if (i >= h) {
                            e[g][j] === void 0 && (e[g][j] = k);
                            continue
                        }
                        j = JSON.parse(k);
                        for (var l in j) d[l] !== void 0 ? (e[c[i]][l] === void 0 && (e[c[i]][l] = []), e[c[i]][l].push(j[l])) : e[c[i]][l] === void 0 && (e[c[i]][l] = j[l])
                    }
                }
            a = b("getContextualParent")(a)
        }
        for (var m in e)
            for (var n in d) e[m][n] !== void 0 && (e[m][n] = e[m][n].join(d[n]));
        return e
    }
    e.exports = a
}), null);
__d("FeedTrackingAsync", ["Arbiter", "Run", "collectDataAttributes"], (function(a, b, c, d, e, f, g) {
    var h;

    function a() {
        if (h) return;
        h = c("Arbiter").subscribe("AsyncRequest/send", function(a, b) {
            a = b.request;
            b = a.getRelativeTo();
            if (b) {
                a = a.getData();
                b = c("collectDataAttributes")(b, ["ft"]);
                b.ft && Object.keys(b.ft).length && Object.assign(a, b)
            }
        });
        d("Run").onLeave(function() {
            h && (h.unsubscribe(), h = null)
        })
    }
    g.init = a
}), 98);
__d("DOMControl", ["$", "DataStore"], (function(a, b, c, d, e, f) {
    a = function() {
        "use strict";

        function a(a) {
            this.root = b("$").fromIDOrElement(a), this.updating = !1, b("DataStore").set(a, "DOMControl", this)
        }
        var c = a.prototype;
        c.getRoot = function() {
            return this.root
        };
        c.beginUpdate = function() {
            if (this.updating) return !1;
            this.updating = !0;
            return !0
        };
        c.endUpdate = function() {
            this.updating = !1
        };
        c.update = function(a) {
            if (!this.beginUpdate()) return this;
            this.onupdate(a);
            this.endUpdate()
        };
        c.onupdate = function(a) {};
        a.getInstance = function(a) {
            return b("DataStore").get(a, "DOMControl")
        };
        return a
    }();
    e.exports = a
}), null);
__d("FBIDCheck", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = /^[1-9]\d*$/;

    function a(a) {
        a = a;
        if (a == null || typeof a === "string" && !g.test(a)) return !1;
        a = parseInt(a, 10);
        return !a ? !1 : a > 0 && a < 22e8 || a >= 1e14 && a <= 100099999989999 || a >= 89e12 && a <= 89999999999999 || a >= 6000001e7 && a <= 60000019999999
    }
    f.isUser_deprecated = a
}), 66);
__d("FocusEvent", ["Event", "Run", "ge", "getOrCreateDOMID"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {},
        i = !1;

    function j(a, b) {
        if (h[a]) {
            b = h[a].indexOf(b);
            b >= 0 && h[a].splice(b, 1);
            h[a].length === 0 && delete h[a]
        }
    }

    function k(a) {
        var b = a.getTarget();
        if (h[b.id] && h[b.id].length > 0) {
            var c = a.type === "focusin" || a.type === "focus";
            h[b.id].forEach(function(a) {
                a(c)
            })
        }
    }

    function l() {
        if (i) return;
        c("Event").listen(document.documentElement, "focusout", k);
        c("Event").listen(document.documentElement, "focusin", k);
        i = !0
    }

    function a(a, b) {
        l();
        var e = c("getOrCreateDOMID")(a);
        h[e] || (h[e] = []);
        h[e].push(b);
        var f = !1;

        function g() {
            f || (j(e, b), i && (i.remove(), i = null), f = !0)
        }
        var i = d("Run").onLeave(function() {
            c("ge")(e) || g()
        });
        return {
            remove: function() {
                g()
            }
        }
    }
    g.listen = a
}), 98);
__d("isStringNullOrEmpty", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a == null || a === ""
    }
    f["default"] = a
}), 66);
__d("tooltipPropsFor", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b, c) {
        if (!a) return {};
        a = {
            "data-tooltip-content": a,
            "data-hover": "tooltip"
        };
        b && (a["data-tooltip-position"] = b);
        c && (a["data-tooltip-alignh"] = c);
        return a
    }
    f["default"] = a
}), 66);
__d("TooltipData", ["DOM", "DataStore", "FBLogger", "URI", "getElementText", "ifRequired", "isStringNullOrEmpty", "isTextNode", "killswitch", "tooltipPropsFor"], (function(a, b, c, d, e, f) {
    var g;

    function h(a) {
        var c = a.getAttribute("data-tooltip-delay");
        c = c ? parseInt(c, 10) || 1e3 : 0;
        if (b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT")) return babelHelpers["extends"]({
            className: a.getAttribute("data-tooltip-root-class"),
            content: a.getAttribute("data-tooltip-content"),
            delay: c,
            position: a.getAttribute("data-tooltip-position") || "above",
            alignH: a.getAttribute("data-tooltip-alignh") || "left",
            offsetY: a.getAttribute("data-tooltip-offsety") || 0,
            suppress: !1,
            overflowDisplay: a.getAttribute("data-tooltip-display") === "overflow",
            persistOnClick: a.getAttribute("data-pitloot-persistonclick"),
            textDirection: a.getAttribute("data-tooltip-text-direction")
        }, b("DataStore").get(a, "tooltip"));
        else {
            var d;
            d = (d = b("DataStore").get(a, "tooltip")) != null ? d : {};
            var e = d.content;
            d = babelHelpers.objectWithoutPropertiesLoose(d, ["content"]);
            var f = a.getAttribute("data-tooltip-content");
            !b("isStringNullOrEmpty")(e) && !b("isStringNullOrEmpty")(f) && b("FBLogger")("tooltip").warn('Getting DataStore tooltip content on an element that has both a "data-tooltip-content" attribute value (set to %s) and a value coming from the DataStore', a.getAttribute("data-tooltip-content"));
            return babelHelpers["extends"]({
                className: a.getAttribute("data-tooltip-root-class"),
                delay: c,
                position: a.getAttribute("data-tooltip-position") || "above",
                alignH: a.getAttribute("data-tooltip-alignh") || "left",
                offsetY: a.getAttribute("data-tooltip-offsety") || 0,
                suppress: !1,
                overflowDisplay: a.getAttribute("data-tooltip-display") === "overflow",
                persistOnClick: a.getAttribute("data-pitloot-persistonclick"),
                textDirection: a.getAttribute("data-tooltip-text-direction"),
                content: (a = (c = f) != null ? c : e) != null ? a : null
            }, d)
        }
    }

    function i(a, c) {
        var d = h(a);
        if (b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT")) b("DataStore").set(a, "tooltip", {
            content: c.content || d.content,
            position: c.position || d.position,
            alignH: c.alignH || d.alignH,
            suppress: c.suppress !== void 0 ? c.suppress : d.suppress,
            overflowDisplay: c.overflowDisplay || d.overflowDisplay,
            persistOnClick: c.persistOnClick || d.persistOnClick
        });
        else {
            !b("isStringNullOrEmpty")(c.content) && !b("isStringNullOrEmpty")(a.getAttribute("data-tooltip-content")) && b("FBLogger")("tooltip").warn('Setting DataStore tooltip content on an element that already has the "data-tooltip-content" attribute (set to %s) is invalid', a.getAttribute("data-tooltip-content"));
            b("DataStore").set(a, "tooltip", {
                content: c.content || ((a = b("DataStore").get(a, "tooltip")) != null ? a : {}).content,
                position: c.position || d.position,
                alignH: c.alignH || d.alignH,
                suppress: c.suppress !== void 0 ? c.suppress : d.suppress,
                overflowDisplay: c.overflowDisplay || d.overflowDisplay,
                persistOnClick: c.persistOnClick || d.persistOnClick
            })
        }
    }

    function j(a, b) {
        i(a, b), a.setAttribute("data-hover", "tooltip")
    }

    function k(a, b) {}
    var l = {
        remove: function(a, c) {
            c = c === void 0 ? {} : c;
            c = c.onlyCleanupDataStore;
            c = c === void 0 ? !1 : c;
            b("DataStore").remove(a, "tooltip");
            c || (a.removeAttribute("data-hover"), a.removeAttribute("data-tooltip-position"), a.removeAttribute("data-tooltip-alignh"), b("ifRequired")("Tooltip", function(b) {
                b.isActive(a) && b.hide()
            }))
        },
        set: function(a, c, d, e) {
            k(a, c);
            if (c instanceof(g || (g = b("URI")))) a.setAttribute("data-tooltip-uri", c), b("ifRequired")("Tooltip", function(b) {
                b.isActive(a) && b.fetchIfNecessary(a)
            });
            else if (b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT")) {
                var f = l._store({
                    context: a,
                    content: c,
                    position: d,
                    alignH: e
                });
                typeof f.content !== "string" ? a.setAttribute("data-tooltip-content", b("getElementText")(f.content)) : a.setAttribute("data-tooltip-content", f.content);
                l.refreshIfActive(a)
            } else a.removeAttribute("data-tooltip-content"), l._store({
                context: a,
                content: c,
                position: d,
                alignH: e
            }), l.refreshIfActive(a)
        },
        refreshIfActive: function(a) {
            b("ifRequired")("Tooltip", function(b) {
                b.isActive(a) && b.show(a)
            })
        },
        _store: function(a) {
            var c = a.context,
                d = a.content,
                e = a.position;
            a = a.alignH;
            k(c, d);
            b("isTextNode")(d) && (d = b("getElementText")(d));
            var f = !1;
            typeof d !== "string" ? d = b("DOM").create("div", {}, d) : f = d === "";
            a = {
                alignH: a,
                content: d,
                position: e,
                suppress: f
            };
            j(c, a);
            return a
        },
        propsFor: b("tooltipPropsFor"),
        enableDisplayOnOverflow: function(a) {
            a.removeAttribute("data-tooltip-display"), j(a, {
                overflowDisplay: !0
            })
        },
        enablePersistOnClick: function(a) {
            a.removeAttribute("data-pitloot-persistOnClick"), j(a, {
                persistOnClick: !0
            })
        },
        suppress: function(a, b) {
            i(a, {
                suppress: b
            })
        },
        _get: h
    };
    e.exports = l
}), null);
__d("Focus", ["cx", "CSS", "Event", "FocusEvent", "KeyStatus", "TooltipData", "ifRequired"], (function(a, b, c, d, e, f, g, h) {
    function a(a, b) {
        b === void 0 && (b = !1);
        if (a) {
            var e = c("ifRequired")("VirtualCursorStatus", function(a) {
                return a.isVirtualCursorTriggered()
            }, function() {
                return !1
            });
            b || d("KeyStatus").isKeyDown() || e ? k(a) : i(a)
        }
    }

    function i(a) {
        if (a) {
            d("CSS").addClass(a, "_5f0v");
            var b = c("Event").listen(a, "blur", function() {
                a && d("CSS").removeClass(a, "_5f0v"), b.remove()
            });
            d("TooltipData").suppress(a, !0);
            k(a);
            d("TooltipData").suppress(a, !1)
        }
    }

    function b(a, b) {
        d("CSS").addClass(a, "_5f0v");
        return d("FocusEvent").listen(a, function() {
            for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++) d[e] = arguments[e];
            return j.apply(void 0, [a, b].concat(d))
        })
    }

    function j(a, b, e) {
        d("CSS").addClass(a, "_5f0v");
        a = c("ifRequired")("FocusRing", function(a) {
            return a.usingKeyboardNavigation()
        }, function() {
            return !0
        });
        e = e && a;
        d("CSS").conditionClass(b, "_3oxt", e);
        d("CSS").conditionClass(b, "_16jm", e)
    }

    function k(a) {
        try {
            a.tabIndex = a.tabIndex, a.focus()
        } catch (a) {}
    }
    g.set = a;
    g.setWithoutOutline = i;
    g.relocate = b;
    g.performRelocation = j
}), 98);
__d("Input", ["CSS", "DOMControl", "DOMQuery"], (function(a, b, c, d, e, f, g) {
    function h(a) {
        return !/\S/.test(a || "")
    }

    function i(a) {
        return h(a.value)
    }

    function a(a) {
        return i(a) ? "" : a.value
    }

    function b(a) {
        return a.value
    }

    function e(a, b) {
        a.value = b || "";
        b = c("DOMControl").getInstance(a);
        b && b.resetHeight && b.resetHeight()
    }

    function f(a, b) {
        b || (b = ""), a.setAttribute("aria-label", b), a.setAttribute("placeholder", b)
    }

    function j(a) {
        a.value = "", a.style.height = ""
    }

    function k(a, b) {
        d("CSS").conditionClass(a, "enter_submit", b)
    }

    function l(a) {
        return d("CSS").hasClass(a, "enter_submit")
    }

    function m(a, b) {
        b > 0 ? a.setAttribute("maxlength", b.toString()) : a.removeAttribute("maxlength")
    }
    g.isWhiteSpaceOnly = h;
    g.isEmpty = i;
    g.getValue = a;
    g.getValueRaw = b;
    g.setValue = e;
    g.setPlaceholder = f;
    g.reset = j;
    g.setSubmitOnEnter = k;
    g.getSubmitOnEnter = l;
    g.setMaxLength = m
}), 98);
__d("Form", ["DOM", "DOMQuery", "DTSG", "DTSGUtils", "DataStore", "Input", "LSD", "PHPQuerySerializer", "Random", "SprinkleConfig", "URI", "getElementPosition", "isFacebookURI", "isNode"], (function(a, b, c, d, e, f) {
    var g, h, i = "FileList" in window,
        j = "FormData" in window;

    function k(a) {
        var c = {};
        (g || (g = b("PHPQuerySerializer"))).serialize(a).split("&").forEach(function(a) {
            if (a) {
                a = /^([^=]*)(?:=(.*))?$/.exec(a);
                var d = (h || (h = b("URI"))).decodeComponent(a[1]),
                    e = a[2] !== void 0;
                e = e ? (h || (h = b("URI"))).decodeComponent(a[2]) : null;
                c[d] = e
            }
        });
        return c
    }
    var l = {
        getInputs: function(a) {
            a === void 0 && (a = document);
            return [].concat(b("DOMQuery").scry(a, "input"), b("DOMQuery").scry(a, "select"), b("DOMQuery").scry(a, "textarea"), b("DOMQuery").scry(a, "button"))
        },
        getInputsByName: function(a) {
            var b = {};
            l.getInputs(a).forEach(function(a) {
                var c = b[a.name];
                b[a.name] = typeof c === "undefined" ? a : [a].concat(c)
            });
            return b
        },
        getSelectValue: function(a) {
            return a.options[a.selectedIndex].value
        },
        setSelectValue: function(a, b) {
            for (var c = 0; c < a.options.length; ++c)
                if (a.options[c].value == b) {
                    a.selectedIndex = c;
                    break
                }
        },
        getRadioValue: function(a) {
            for (var b = 0; b < a.length; b++)
                if (a[b].checked) return a[b].value;
            return null
        },
        getElements: function(a) {
            return a.tagName == "FORM" && a.elements != a ? Array.from(a.elements) : l.getInputs(a)
        },
        getAttribute: function(a, b) {
            return (a.getAttributeNode(b) || {}).value || null
        },
        setDisabled: function(a, c) {
            l.getElements(a).forEach(function(a) {
                if (a.disabled !== void 0) {
                    var d = b("DataStore").get(a, "origDisabledState");
                    c ? (d === void 0 && b("DataStore").set(a, "origDisabledState", a.disabled), a.disabled = c) : d === !1 && (a.disabled = !1)
                }
            })
        },
        forEachValue: function(a, c, d) {
            l.getElements(a).forEach(function(a) {
                if (!a.name || a.disabled) return;
                if (a.type === "submit") return;
                if (a.type === "reset" || a.type === "button" || a.type === "image") return;
                if ((a.type === "radio" || a.type === "checkbox") && !a.checked) return;
                if (a.nodeName === "SELECT") {
                    for (var c = 0, e = a.options.length; c < e; c++) {
                        var f = a.options[c];
                        f.selected && d("select", a.name, f.value)
                    }
                    return
                }
                if (a.type === "file") {
                    if (i) {
                        f = a.files;
                        for (var c = 0; c < f.length; c++) d("file", a.name, f.item(c))
                    }
                    return
                }
                d(a.type, a.name, b("Input").getValue(a))
            }), c && c.name && c.type === "submit" && b("DOMQuery").contains(a, c) && b("DOMQuery").isNodeOfType(c, ["input", "button"]) && d("submit", c.name, c.value)
        },
        createFormData: function(a, c) {
            if (!j) return null;
            var d = new FormData();
            if (a)
                if (b("isNode")(a)) l.forEachValue(a, c, function(b, a, c) {
                    d.append(a, c)
                });
                else {
                    c = k(a);
                    for (var e in c) c[e] == null ? d.append(e, "") : d.append(e, c[e])
                }
            return d
        },
        serialize: function(a, b) {
            var c = {};
            l.forEachValue(a, b, function(a, b, d) {
                if (a === "file") return;
                l._serializeHelper(c, b, d)
            });
            return l._serializeFix(c)
        },
        _serializeHelper: function(a, b, c) {
            var d = Object.prototype.hasOwnProperty,
                e = /([^\]]+)\[([^\]]*)\](.*)/.exec(b);
            if (e) {
                if (!a[e[1]] || !d.call(a, e[1])) {
                    a[e[1]] = d = {};
                    if (a[e[1]] !== d) return
                }
                d = 0;
                if (e[2] === "")
                    while (a[e[1]][d] !== void 0) d++;
                else d = e[2];
                e[3] === "" ? a[e[1]][d] = c : l._serializeHelper(a[e[1]], d.concat(e[3]), c)
            } else a[b] = c
        },
        _serializeFix: function(a) {
            for (var b in a) a[b] instanceof Object && (a[b] = l._serializeFix(a[b]));
            var c = Object.keys(a);
            if (c.length === 0 || c.some(isNaN)) return a;
            c.sort(function(a, b) {
                return a - b
            });
            var d = 0,
                e = c.every(function(a) {
                    return +a === d++
                });
            return e ? c.map(function(b) {
                return a[b]
            }) : a
        },
        post: function(a, c, d, e) {
            e === void 0 && (e = !0);
            a = new(h || (h = b("URI")))(a);
            var f = document.createElement("form");
            f.action = a.toString();
            f.method = "POST";
            f.style.display = "none";
            var g = !b("isFacebookURI")(a);
            if (d) {
                if (g) {
                    f.rel = "noopener";
                    if (d === "_blank") {
                        d = btoa(b("Random").uint32());
                        var i = window.open("about:blank", d);
                        i === void 0 || (i.opener = null)
                    }
                }
                f.target = d
            }
            if (e && (!g && a.getSubdomain() !== "apps")) {
                i = b("DTSG").getToken();
                i && (c.fb_dtsg = i, b("SprinkleConfig").param_name && (c[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(i)));
                b("LSD").token && (c.lsd = b("LSD").token, b("SprinkleConfig").param_name && !i && (c[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(b("LSD").token)))
            }
            l.createHiddenInputs(c, f);
            b("DOMQuery").getRootElement().appendChild(f);
            f.submit();
            return !1
        },
        createHiddenInputs: function(a, c, d, e) {
            e === void 0 && (e = !1);
            d = d || {};
            a = k(a);
            for (var f in a) {
                if (a[f] === null) continue;
                if (d[f] && e) d[f].value = a[f];
                else {
                    var g = b("DOM").create("input", {
                        type: "hidden",
                        name: f,
                        value: a[f]
                    });
                    d[f] = g;
                    c.appendChild(g)
                }
            }
            return d
        },
        getFirstElement: function(a, c) {
            c === void 0 && (c = ['input[type="text"]', "textarea", 'input[type="password"]', 'input[type="button"]', 'input[type="submit"]']);
            var d = [];
            for (var e = 0; e < c.length; e++) {
                d = b("DOMQuery").scry(a, c[e]);
                for (var f = 0; f < d.length; f++) {
                    var g = d[f];
                    try {
                        var h = b("getElementPosition")(g);
                        if (h.y > 0 && h.x > 0) return g
                    } catch (a) {}
                }
            }
            return null
        },
        focusFirst: function(a) {
            a = l.getFirstElement(a);
            if (a) {
                a.focus();
                return !0
            }
            return !1
        }
    };
    e.exports = l
}), null);
__d("FormSubmit", ["AsyncRequest", "AsyncResponse", "CSS", "DOMQuery", "Event", "Form", "Parent", "trackReferrer"], (function(a, b, c, d, e, f, g) {
    var h = {
        buildRequest: function(a, b) {
            var e = (d("Form").getAttribute(a, "method") || "GET").toUpperCase();
            b = b && d("Parent").byTag(b, "button") || b;
            var f = b && d("Parent").byClass(b, "stat_elem") || a;
            if (d("CSS").hasClass(f, "async_saving")) return null;
            if (b && (b.form !== a || b.nodeName != "INPUT" && b.nodeName != "BUTTON" || b.type != "submit")) {
                var g = d("DOMQuery").scry(a, ".enter_submit_target")[0];
                g && (b = g)
            }
            g = d("Form").serialize(a, b);
            d("Form").setDisabled(a, !0);
            b = d("Form").getAttribute(a, "ajaxify") || d("Form").getAttribute(a, "action");
            var h = !!d("Form").getAttribute(a, "data-cors");
            c("trackReferrer")(a, b);
            return new(c("AsyncRequest"))().setAllowCrossOrigin(h).setURI(b).setData(g).setNectarModuleDataSafe(a).setReadOnly(e == "GET").setMethod(e).setRelativeTo(a).setStatusElement(f).setInitialHandler(d("Form").setDisabled.bind(null, a, !1)).setHandler(function(b) {
                c("Event").fire(a, "success", {
                    response: b
                })
            }).setErrorHandler(function(b) {
                c("Event").fire(a, "error", {
                    response: b
                }) !== !1 && c("AsyncResponse").defaultErrorHandler(b)
            }).setFinallyHandler(d("Form").setDisabled.bind(null, a, !1))
        },
        send: function(a, b) {
            a = h.buildRequest(a, b);
            a && a.send();
            return a
        }
    };
    a = h;
    g["default"] = a
}), 98);
__d("debounceAcrossTransitions", ["debounce"], (function(a, b, c, d, e, f, g) {
    function a(a, b, d) {
        return c("debounce")(a, b, d, !0)
    }
    g["default"] = a
}), 98);
__d("AsyncFormRequestUtils", ["Arbiter"], (function(a, b, c, d, e, f, g) {
    function a(a, b, d) {
        c("Arbiter").subscribe("AsyncRequest/" + b, function(b, c) {
            b = c.request.relativeTo;
            b && b === a && d(c)
        })
    }
    g.subscribe = a
}), 98);
__d("MessengerWebPluginAnonymousTypedLogger", ["Banzai", "GeneratedLoggerUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerWebPluginAnonymousLoggerConfig", this.$1, b("Banzai").BASIC, a)
        };
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerWebPluginAnonymousLoggerConfig", this.$1, b("Banzai").VITAL, a)
        };
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerWebPluginAnonymousLoggerConfig", this.$1, {
                signal: !0
            }, a)
        };
        c.clear = function() {
            this.$1 = {};
            return this
        };
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        };
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.setAppID = function(a) {
            this.$1.app_id = a;
            return this
        };
        c.setCallsite = function(a) {
            this.$1.callsite = a;
            return this
        };
        c.setClientFbid = function(a) {
            this.$1.client_fbid = a;
            return this
        };
        c.setDebugData = function(a) {
            this.$1.debug_data = a;
            return this
        };
        c.setDeltaType = function(a) {
            this.$1.delta_type = a;
            return this
        };
        c.setDeviceParam = function(a) {
            this.$1.device_param = a;
            return this
        };
        c.setDomainSource = function(a) {
            this.$1.domain_source = a;
            return this
        };
        c.setDuration = function(a) {
            this.$1.duration = a;
            return this
        };
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        };
        c.setEventTimestamp = function(a) {
            this.$1.event_timestamp = a;
            return this
        };
        c.setExceptionMessage = function(a) {
            this.$1.exception_message = a;
            return this
        };
        c.setExceptionStacktrace = function(a) {
            this.$1.exception_stacktrace = a;
            return this
        };
        c.setExceptionType = function(a) {
            this.$1.exception_type = a;
            return this
        };
        c.setGateway = function(a) {
            this.$1.gateway = a;
            return this
        };
        c.setIsUserLoggedIn = function(a) {
            this.$1.is_user_logged_in = a;
            return this
        };
        c.setNewEventName = function(a) {
            this.$1.new_event_name = a;
            return this
        };
        c.setOtherFields = function(a) {
            this.$1.other_fields = b("GeneratedLoggerUtils").serializeMap(a);
            return this
        };
        c.setPageID = function(a) {
            this.$1.page_id = a;
            return this
        };
        c.setPluginExtra = function(a) {
            this.$1.plugin_extra = b("GeneratedLoggerUtils").serializeMap(a);
            return this
        };
        c.setPluginInterface = function(a) {
            this.$1.plugin_interface = a;
            return this
        };
        c.setPluginName = function(a) {
            this.$1.plugin_name = a;
            return this
        };
        c.setRefererURI = function(a) {
            this.$1.referer_uri = a;
            return this
        };
        c.setRequestHeaders = function(a) {
            this.$1.request_headers = a;
            return this
        };
        c.setRequestID = function(a) {
            this.$1.request_id = a;
            return this
        };
        c.setRequestParam = function(a) {
            this.$1.request_param = a;
            return this
        };
        c.setTabName = function(a) {
            this.$1.tab_name = a;
            return this
        };
        c.setUpgradeLoggedInUserID = function(a) {
            this.$1.upgrade_logged_in_user_id = a;
            return this
        };
        c.setUpstreamEvent = function(a) {
            this.$1.upstream_event = a;
            return this
        };
        c.setWhitelistedDomains = function(a) {
            this.$1.whitelisted_domains = a;
            return this
        };
        return a
    }();
    c = {
        app_id: !0,
        callsite: !0,
        client_fbid: !0,
        debug_data: !0,
        delta_type: !0,
        device_param: !0,
        domain_source: !0,
        duration: !0,
        event: !0,
        event_timestamp: !0,
        exception_message: !0,
        exception_stacktrace: !0,
        exception_type: !0,
        gateway: !0,
        is_user_logged_in: !0,
        new_event_name: !0,
        other_fields: !0,
        page_id: !0,
        plugin_extra: !0,
        plugin_interface: !0,
        plugin_name: !0,
        referer_uri: !0,
        request_headers: !0,
        request_id: !0,
        request_param: !0,
        tab_name: !0,
        upgrade_logged_in_user_id: !0,
        upstream_event: !0,
        whitelisted_domains: !0
    };
    f["default"] = a
}), 66);
__d("PluginOptin", ["DOMEvent", "DOMEventListener", "MessengerWebPluginAnonymousTypedLogger", "PlatformWidgetEndpoint", "PluginLoggedOutUserTypedLogger", "PluginMessage", "PopupWindow", "URI", "UserAgent_DEPRECATED"], (function(a, b, c, d, e, f, g) {
    function h(a, b) {
        Object.assign(this, {
            return_params: c("URI").getRequestURI().getQueryData(),
            login_params: {},
            optin_params: {},
            plugin: a,
            api_key: b
        }), this.addReturnParams({
            ret: "optin"
        }), delete this.return_params.hash
    }
    Object.assign(h.prototype, {
        addReturnParams: function(a) {
            Object.assign(this.return_params, a);
            return this
        },
        addLoginParams: function(a) {
            Object.assign(this.login_params, a);
            return this
        },
        addOptinParams: function(a) {
            Object.assign(this.optin_params, a);
            return this
        },
        start: function() {
            var a = this.api_key || 127760087237610;
            c("URI").getRequestURI().getQueryData().kid_directed_site && (this.login_params.kid_directed_site = !0);
            this.login_params.referrer = document.referrer;
            var b = new(c("URI"))(c("PlatformWidgetEndpoint").dialog("plugin.optin")).addQueryData(this.optin_params).addQueryData({
                app_id: a,
                secure: c("URI").getRequestURI().isSecure(),
                social_plugin: this.plugin,
                return_params: JSON.stringify(this.return_params),
                login_params: JSON.stringify(this.login_params)
            });
            d("UserAgent_DEPRECATED").mobile() ? b.setSubdomain("m") : b.addQueryData({
                display: "popup"
            });
            this.return_params.act !== null && this.return_params.act === "send" && new(c("PluginLoggedOutUserTypedLogger"))().setPluginAppID(a).setPluginName(this.return_params.act).setHref(this.return_params.href).logVital();
            this.popup = d("PopupWindow").open(b.toString(), 420, 450);
            this.plugin === "customer_chat" && this.login_params.chat_plugin_upgrade != null && this.login_params.chat_plugin_upgrade === !0 && new(c("MessengerWebPluginAnonymousTypedLogger"))().setPageID(this.login_params.page_id).setClientFbid(this.login_params.guest_id).setRequestID(this.login_params.request_id).setNewEventName("upgrade_plugin_optin_popup_opened").log();
            d("PluginMessage").listen();
            return this
        }
    });
    h.starter = function(a, b, c, d) {
        a = new h(a);
        a.addReturnParams(b || {});
        a.addLoginParams(c || {});
        a.addOptinParams(d || {});
        return a.start.bind(a)
    };
    h.listen = function(a, b, d, e, f) {
        c("DOMEventListener").add(a, "click", function(a) {
            new(c("DOMEvent"))(a).kill(), h.starter(b, d, e, f)()
        })
    };
    a = h;
    g["default"] = a
}), 98);
__d("PluginConnectButton", ["Arbiter", "CSS", "DOM", "DOMEvent", "DOMEventListener", "Focus", "FormSubmit", "PlatformWidgetEndpoint", "Plugin", "PluginOptin", "URI"], (function(a, b, c, d, e, f) {
    var g, h = "new",
        i = b("Arbiter").subscribe,
        j = function(a, c) {
            return b("DOMEventListener").add(a, "click", c)
        };

    function a(a) {
        var c = this;
        this.config = a;
        this.busy = !1;
        var d = b("DOM").find(a.form, ".pluginConnectButton");
        this.buttons = d;
        this.node_connected = b("DOM").find(d, ".pluginConnectButtonConnected");
        this.node_disconnected = b("DOM").find(d, ".pluginConnectButtonDisconnected");
        var e = function(a) {
            new(b("DOMEvent"))(a).kill(), c.busy || (c.submit(), c.busy = c.canpersonalize)
        };
        j(this.node_disconnected, e);
        a.buttontype === 1 ? j(b("DOM").find(d, ".pluginButtonX button"), e) : a.buttontype === 2 && j(this.node_connected, e);
        j(this.node_connected, function(a) {
            return b("Arbiter").inform(b("Plugin").DIALOG, a)
        });
        d = this.update.bind(this);
        i(b("Plugin").CONNECT, d, h);
        i(b("Plugin").DISCONNECT, d, h);
        i(b("Plugin").ERROR, this.error.bind(this), h)
    }
    Object.assign(a.prototype, {
        update: function(a, c) {
            this.busy = !1;
            var d = this.config;
            if (c.identifier !== d.identifier) return;
            c = a === b("Plugin").CONNECT;
            a = b("PlatformWidgetEndpoint").plugins(d.plugin);
            a += "/" + (c ? "disconnect" : "connect");
            b("CSS")[c ? "show" : "hide"](this.node_connected);
            b("CSS")[c ? "hide" : "show"](this.node_disconnected);
            try {
                if (document.activeElement.nodeName.toLowerCase() === "button") {
                    var e = c ? this.node_connected : this.node_disconnected;
                    e = b("DOM").find(e, "button");
                    e.disabled = !1;
                    b("Focus").set(e)
                }
            } catch (a) {}
            d.connected = c;
            d.form.setAttribute("action", a);
            d.form.setAttribute("ajaxify", a)
        },
        error: function(a, c) {
            this.busy = !1;
            if (c.action in {
                    connect: 1,
                    disconnect: 1
                }) {
                b("DOM").setContent(this.buttons, c.content);
                a = b("DOM").scry(this.buttons, ".confirmButton");
                a.length === 1 && b("Focus").set(a[0])
            }
        },
        submit: function() {
            if (!this.config.canpersonalize) return this.login();
            b("FormSubmit").send(this.config.form);
            this.fireStateToggle()
        },
        fireStateToggle: function() {
            var a = this.config;
            a.connected ? b("Plugin").disconnect(a.identifier) : b("Plugin").connect(a.identifier)
        },
        login: function() {
            var a = this.config.plugin;
            new(b("PluginOptin"))(a, (g || (g = b("URI"))).getRequestURI().getQueryData().api_key).addReturnParams({
                act: "connect"
            }).addLoginParams({
                social_plugin_action: this.config.pluginaction,
                kid_directed_site: this.config.kidDirectedSite
            }).start()
        }
    });
    e.exports = a
}), null);
__d("XPostPluginLoggingController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/platform/plugin/post/logging/", {})
}), null);
__d("PluginFeedFooterActionLogger", ["AsyncRequest", "DOM", "Event", "XPostPluginLoggingController"], (function(a, b, c, d, e, f, g) {
    a = {
        initializeClickLoggers: function(a, b, d, e, f, g, h, i, j, k) {
            var l = function(b, d) {
                try {
                    b = c("DOM").find(a, "." + b);
                    c("Event").listen(b, "click", function(a) {
                        new(c("AsyncRequest"))().setURI(c("XPostPluginLoggingController").getURIBuilder().getURI()).setData({
                            action: d,
                            action_type: "click",
                            source: g,
                            story_token: h,
                            referer_url: i,
                            is_sdk: j,
                            post_url: k
                        }).send()
                    })
                } catch (a) {}
            };
            l(b, "embedded_post_like");
            l(d, "embedded_post_unlike");
            l(e, "embedded_post_comment");
            l(f, "embedded_post_share")
        }
    };
    f.exports = a
}), 34);
__d("PluginFeedLikeButton", ["Arbiter", "AsyncFormRequestUtils", "CSS", "ClientIDs", "DOM", "DOMEventListener", "FormSubmit", "Keys", "PluginOptin", "URI"], (function(a, b, c, d, e, f, g) {
    window.resetConfirmStoryLike = function(a) {
        d("CSS").show(c("DOM").find(document, "#likeStory_" + a)), c("DOM").remove(c("DOM").find(document, "#confirmStory_" + a))
    };

    function a(a) {
        a.setAttribute("value", d("ClientIDs").getNewClientID())
    }

    function b(a, b, e) {
        var f = "";
        if (b === 23) f = "post";
        else if (b === 50) f = "page";
        else throw new Error("Invalid FBFeedLocation type.");
        b = new(c("PluginOptin"))(f).addReturnParams({
            act: "like_" + a
        });
        d("DOMEventListener").add(e, "click", b.start.bind(b))
    }

    function e(a, b, e, f, g) {
        var h = function(a) {
            if (a.type === "keypress")
                if (a.keyCode === c("Keys").RETURN || a.keyCode === c("Keys").SPACE) c("FormSubmit").send(g);
                else return;
            c("FormSubmit").send(g)
        };
        d("DOMEventListener").add(b, "click", h);
        d("DOMEventListener").add(e, "click", h);
        d("DOMEventListener").add(b, "keypress", h);
        d("DOMEventListener").add(e, "keypress", h);
        h = f.getAttribute("value") === "1";
        d("AsyncFormRequestUtils").subscribe(g, "send", function(g) {
            g = f.getAttribute("value") === "1";
            d("CSS").conditionShow(e, g);
            d("CSS").conditionShow(b, !g);
            c("Arbiter").inform("embeddedUfiToggle", {
                isLike: g,
                storyToken: a
            });
            f.setAttribute("value", g ? "" : "1")
        });
        d("AsyncFormRequestUtils").subscribe(g, "response", function(g) {
            g = g.response.payload;
            if (g && !g.success) {
                g = g.isLike;
                d("CSS").conditionShow(b, g);
                d("CSS").conditionShow(e, !g);
                c("Arbiter").inform("revertLike", {
                    isLike: g,
                    storyToken: a
                });
                f.setAttribute("value", g ? "1" : "")
            }
        });
        var i = new(c("URI"))(window.location.search).getQueryData();
        h && i.act === "like_" + a && c("FormSubmit").send(g)
    }
    g.addClientId = a;
    g.loggedOutLikeButton = b;
    g.init = e
}), 98);
__d("Button", ["csx", "cx", "invariant", "CSS", "DOM", "DataStore", "Event", "Parent", "emptyFunction", "isNode"], (function(a, b, c, d, e, f, g, h, i, j) {
    var k = "uiButtonDisabled",
        l = "uiButtonDepressed",
        m = "_42fr",
        n = "_42fs",
        o = "button:blocker",
        p = "href",
        q = "ajaxify";

    function r(a, b) {
        var e = d("DataStore").get(a, o);
        b ? e && (e.remove(), d("DataStore").remove(a, o)) : e || d("DataStore").set(a, o, c("Event").listen(a, "click", c("emptyFunction").thatReturnsFalse, c("Event").Priority.URGENT))
    }

    function s(a) {
        a = d("Parent").byClass(a, "uiButton") || d("Parent").bySelector(a, "._42ft");
        if (!a) throw new Error("invalid use case");
        return a
    }

    function t(a) {
        return c("DOM").isNodeOfType(a, "a")
    }

    function u(a) {
        return c("DOM").isNodeOfType(a, "button")
    }

    function v(a) {
        return d("CSS").matchesSelector(a, "._42ft")
    }
    var w = {
        getInputElement: function(a) {
            a = s(a);
            if (t(a)) throw new Error("invalid use case");
            if (u(a)) {
                a instanceof HTMLButtonElement || j(0, 21261);
                return a
            }
            return c("DOM").find(a, "input")
        },
        isEnabled: function(a) {
            return !(d("CSS").hasClass(s(a), k) || d("CSS").hasClass(s(a), m))
        },
        setEnabled: function(a, b) {
            a = s(a);
            var c = v(a) ? m : k;
            d("CSS").conditionClass(a, c, !b);
            if (t(a)) {
                c = a.getAttribute("href");
                var e = a.getAttribute("ajaxify"),
                    f = d("DataStore").get(a, p, "#"),
                    g = d("DataStore").get(a, q);
                b ? (c || a.setAttribute("href", f), !e && g && a.setAttribute("ajaxify", g), a.removeAttribute("tabIndex")) : (c && c !== f && d("DataStore").set(a, p, c), e && e !== g && d("DataStore").set(a, q, e), a.removeAttribute("href"), a.removeAttribute("ajaxify"), a.setAttribute("tabIndex", "-1"));
                r(a, b)
            } else {
                f = w.getInputElement(a);
                f.disabled = !b;
                r(f, b)
            }
        },
        setDepressed: function(a, b) {
            a = s(a);
            var c = v(a) ? n : l;
            d("CSS").conditionClass(a, c, b)
        },
        isDepressed: function(a) {
            a = s(a);
            var b = v(a) ? n : l;
            return d("CSS").hasClass(a, b)
        },
        setLabel: function(a, b) {
            a = s(a);
            if (v(a)) {
                var e = [];
                b && e.push(b);
                var f = c("DOM").scry(a, ".img");
                for (var g = 0; g < f.length; g++) {
                    var h = f[g],
                        i = h.parentNode;
                    i.classList && (i.classList.contains("_4o_3") || i.classList.contains("_-xe")) ? a.firstChild === i ? e.unshift(i) : e.push(i) : a.firstChild == h ? e.unshift(h) : e.push(h)
                }
                c("DOM").setContent(a, e)
            } else if (t(a)) {
                i = c("DOM").find(a, "span.uiButtonText");
                c("DOM").setContent(i, b)
            } else w.getInputElement(a).value = b;
            h = v(a) ? "_42fv" : "uiButtonNoText";
            d("CSS").conditionClass(a, h, !b)
        },
        getIcon: function(a) {
            a = s(a);
            return c("DOM").scry(a, ".img")[0]
        },
        setIcon: function(a, b) {
            if (b && !c("isNode")(b)) return;
            var e = w.getIcon(a);
            if (!b) {
                e && c("DOM").remove(e);
                return
            }
            d("CSS").addClass(b, "customimg");
            e != b && (e ? c("DOM").replace(e, b) : c("DOM").prependContent(s(a), b))
        }
    };
    a = w;
    g["default"] = a
}), 98);
__d("XThisControllerNoLongerExistsController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/dcb/tcnle/", {
        t: {
            type: "String"
        }
    })
}), null);
__d("ThisControllerNoLongerExists", ["XControllerURIBuilder", "XThisControllerNoLongerExistsController"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(b) {
        babelHelpers.inheritsLoose(a, b);

        function a(a) {
            var c;
            c = b.call(this, "/dcb/tcnle/", {}) || this;
            c.$XControllerURIBuilderNoOpDead1 = a;
            return c
        }
        var d = a.prototype;
        d.__validateRequiredParamsExistence = function() {};
        d.__assertParamExists = function(a) {};
        d.__setParam = function(a, b, c) {
            return this
        };
        d.__setParamInt = function(a, b) {};
        d.getRequest_LEGACY_UNTYPED = function(a) {
            return a.setURI(this.getURI())
        };
        d.getURI = function() {
            return c("XThisControllerNoLongerExistsController").getURIBuilder().setString("t", this.$XControllerURIBuilderNoOpDead1).getURI()
        };
        d.getLookasideURI = function() {
            return this.getURI()
        };
        return a
    }(c("XControllerURIBuilder"));

    function a(a) {
        return c("XThisControllerNoLongerExistsController").getURIBuilder().setString("t", a).getURI()
    }

    function b(a) {
        return new h(a)
    }
    g.__DEADURI__ = a;
    g.__DEADBUILDER__ = b
}), 98);