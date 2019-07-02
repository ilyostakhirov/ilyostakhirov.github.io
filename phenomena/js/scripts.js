"use strict";
! function() {
    var e = navigator.userAgent.toLowerCase(),
        a = (new Date, $(document)),
        t = $(window),
        n = $("html"),
        i = ($("body"), n.hasClass("desktop")),
        o = "rtl" === n.attr("dir"),
        s = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        r = /iPhone|iPad|iPod/i.test(navigator.userAgent),
        l = 0,
        d = -1 != e.indexOf("msie") ? parseInt(e.split("msie")[1], 10) : -1 != e.indexOf("trident") ? 11 : -1 != e.indexOf("edge") && 12,
        c = {
            bgBody: $(".bg-background-fade"),
            bgPanel: $(".color-code"),
            rdNavbar: $(".rd-navbar"),
            materialParallax: $(".parallax-container"),
            rdGoogleMaps: $(".rd-google-map"),
            captcha: $(".recaptcha"),
            preloader: $(".preloader"),
            swiper: $(".swiper-slider"),
            rdMailForm: $(".rd-mailform"),
            rdInputLabel: $(".form-label"),
            regula: $("[data-constraints]"),
            radio: $("input[type='radio']"),
            checkbox: $("input[type='checkbox']"),
            lightGallery: $("[data-lightgallery='group']"),
            lightGalleryItem: $("[data-lightgallery='item']"),
            lightDynamicGalleryItem: $("[data-lightgallery='dynamic']"),
            revolution: $("#rev_slider_1"),
            typedjs: $(".typed-text-wrap"),
            customToggle: $("[data-custom-toggle]"),
            tilter: $(".tilter"),
            mailchimp: $(".mailchimp-mailform"),
            campaignMonitor: $(".campaign-mailform"),
            selectFilter: $("select"),
            customWaypoints: $("[data-custom-scroll-to]"),
            instafeed: $(".instafeed"),
            tilt: $(".tilt")
        };
    t.on("load", function() {
        c.preloader.length && c.preloader.addClass("loaded")
    }), $(function() {
        var e, p, u = window.xMode;

        function h(e, a) {
            var n, i = e.attr("data-" + a);
            if (i && (n = i.match(/(px)|(%)|(vh)|(vw)$/i)).length) switch (n[0]) {
                case "px":
                    return parseFloat(i);
                case "vh":
                    return t.height() * (parseFloat(i) / 100);
                case "vw":
                    return t.width() * (parseFloat(i) / 100);
                case "%":
                    return e.width() * (parseFloat(i) / 100)
            }
        }

        function g(e) {
            for (var a, t = $(e.slides[e.previousIndex]), n = $(e.slides[e.activeIndex]), i = t.find("video"), o = 0; o < i.length; o++) i[o].pause();
            (a = n.find("video")).length && a.get(0).play()
        }

        function m(e) {
            for (var a, t, n, i, o = $(e.container).find("[data-caption-animate]"), s = $(e.slides[e.activeIndex]).find("[data-caption-animate]"), r = 0; r < o.length; r++)(i = $(o[r])).removeClass("animated").removeClass(i.attr("data-caption-animate")).addClass("not-animated");
            var l = function(e, a) {
                return function() {
                    e.removeClass("not-animated").addClass(e.attr("data-caption-animate")).addClass("animated"), a && e.css("animation-duration", a + "ms")
                }
            };
            for (r = 0; r < s.length; r++) a = (n = $(s[r])).attr("data-caption-delay"), t = n.attr("data-caption-duration"), u ? n.removeClass("not-animated") : a ? setTimeout(l(n, t), parseInt(a, 10)) : l(n, t)
        }

        function f(e, a) {
            u || $(e).on("click", function() {
                $(e).lightGallery({
                    thumbnail: "false" !== $(e).attr("data-lg-thumbnail"),
                    selector: "[data-lightgallery='item']",
                    autoplay: "true" === $(e).attr("data-lg-autoplay"),
                    pause: parseInt($(e).attr("data-lg-autoplay-delay")) || 5e3,
                    addClass: a,
                    mode: $(e).attr("data-lg-animation") || "lg-slide",
                    loop: "false" !== $(e).attr("data-lg-loop"),
                    dynamic: !0,
                    dynamicEl: JSON.parse($(e).attr("data-lg-dynamic-elements")) || []
                })
            })
        }

        function v(e, a) {
            u || $(e).lightGallery({
                selector: "this",
                addClass: a,
                counter: !1,
                youtubePlayerParams: {
                    modestbranding: 1,
                    showinfo: 0,
                    rel: 0,
                    controls: 0
                },
                vimeoPlayerParams: {
                    byline: 0,
                    portrait: 0
                }
            })
        }

        function b() {
            t.width() > 991 ? setTimeout(function() {
                var e = $("nav.navbar").outerHeight();
                $(".mega-menu").css({
                    top: e
                }), 0 === $(".navbar-brand-top").length && $(".dropdown.simple-dropdown > .dropdown-menu").css({
                    top: e
                })
            }, 200) : ($(".mega-menu").css("top", ""), $(".dropdown.simple-dropdown > .dropdown-menu").css("top", ""))
        }
        if (c.customToggle.length)
            for (z = 0; z < c.customToggle.length; z++) {
                (q = $(c.customToggle[z])).on("click", $.proxy(function(e) {
                    e.preventDefault();
                    var a = $(this);
                    $(a.attr("data-custom-toggle")).add(this).toggleClass("active")
                }, q)), "true" === q.attr("data-custom-toggle-hide-on-blur") && $("body").on("click", q, function(e) {
                    e.target !== e.data[0] && $(e.data.attr("data-custom-toggle")).find($(e.target)).length && 0 == e.data.find($(e.target)).length && $(e.data.attr("data-custom-toggle")).add(e.data[0]).removeClass("active")
                }), "true" === q.attr("data-custom-toggle-disable-on-blur") && $("body").on("click", q, function(e) {
                    e.target !== e.data[0] && 0 == $(e.data.attr("data-custom-toggle")).find($(e.target)).length && 0 == e.data.find($(e.target)).length && $(e.data.attr("data-custom-toggle")).add(e.data[0]).removeClass("active")
                })
            }
        if (c.typedjs.length && !u && i) {
            $(".typed-text").typed({
                strings: ["Creative", "Unique", "Revolutionary"],
                typeSpeed: 100,
                backSpeed: 80,
                loop: !0,
                backDelay: 1e3
            })
        }

        function w() {
            var e = $(".navbar"),
                a = $(".top-space"),
                t = $(".top-header-area");
            if ((e.hasClass("navbar-top") || $("nav").hasClass("navbar-fixed-top")) && a.length > 0) {
                var n = e.outerHeight();
                t.length > 0 && (n += t.outerHeight()), a.css("margin-top", n + "px")
            }
        }

        function y() {
            return !1
        }

        function C() {
            return !0
        }

        function k() {
            a.imagesLoaded(function() {
                return t.width() < 768 && !u ? ($(".equalize").equalize({
                    equalize: "outerHeight",
                    reset: !0
                }), $(".equalize.md-equalize-auto").children().css("height", ""), $(".equalize.sm-equalize-auto").children().css("height", ""), $(".equalize.xs-equalize-auto").children().css("height", ""), !1) : t.width() < 992 ? ($(".equalize").equalize({
                    equalize: "outerHeight",
                    reset: !0
                }), $(".equalize.md-equalize-auto").children().css("height", ""), $(".equalize.sm-equalize-auto").children().css("height", ""), !1) : t.width() < 1199 ? ($(".equalize").equalize({
                    equalize: "outerHeight",
                    reset: !0
                }), $(".equalize.md-equalize-auto").children().css("height", ""), !1) : void $(".equalize").equalize({
                    equalize: "outerHeight",
                    reset: !0
                })
            })
        }

        function x() {
            ! function() {
                if ($(".dynamic-font-size").length > 0) {
                    var e = t.width();
                    if (e < 1100) {
                        var a = e / 1100;
                        $(".dynamic-font-size").each(function() {
                            var e = $(this).attr("data-fontsize"),
                                t = $(this).attr("data-lineheight");
                            if ("" != e && null != e) {
                                var n = Math.round(e * a * 1e3) / 1e3;
                                $(this).css("font-size", n + "px")
                            }
                            if ("" !== t && void 0 !== t) {
                                var i = Math.round(t * a * 1e3) / 1e3;
                                $(this).css("line-height", i + "px")
                            }
                        })
                    } else $(".dynamic-font-size").each(function() {
                        var e = $(this).attr("data-fontsize"),
                            a = $(this).attr("data-lineheight");
                        "" !== e && void 0 !== e && $(this).css("font-size", e + "px"), "" !== a && void 0 !== a && $(this).css("line-height", a + "px")
                    })
                }
            }(), b(), w(),
                function() {
                    var e = $(".swiper-auto-height-container"),
                        a = e.find(".swiper-slide"),
                        n = e.find(".slide-banner"),
                        i = $(".navigation-area");
                    if (t.width() > 767 && e.length > 0) {
                        var o = parseInt(a.css("padding-left")),
                            s = parseInt(a.css("padding-bottom")),
                            r = parseInt(n.outerWidth());
                        i.css({
                            left: r + o + "px",
                            bottom: s + "px"
                        })
                    } else e.length > 0 && i.css({
                        left: "",
                        bottom: ""
                    })
                }(), t.width() > 1024 && 0 !== $(".swiper-auto-width .swiper-slide").length && (a.on("mousemove", ".swiper-auto-width .swiper-slide", function(e) {
                    var a = e.clientX,
                        t = e.clientY;
                    a = Math.round(a / 10) - 80, t = Math.round(t / 10) - 40, $(this).find(".parallax-text").css({
                        transform: "translate(" + a + "px," + t + "px)",
                        "transition-duration": "0s"
                    })
                }), a.on("mouseout", ".swiper-auto-width .swiper-slide", function(e) {
                    $(".parallax-text").css({
                        transform: "translate(0,0)",
                        "transition-duration": "0.5s"
                    })
                })),
                function() {
                    var e = $(".full-screen"),
                        a = t.height();
                    e.parents("section").imagesLoaded(function() {
                        if ($(".top-space .full-screen").length > 0) {
                            var t = $("header nav.navbar").outerHeight();
                            $(".top-space .full-screen").css("min-height", a - t)
                        } else e.css("min-height", a)
                    });
                    var n = t.width();
                    $(".full-screen-width").css("min-width", n);
                    var i = $(".sidebar-nav-style-1").height() - $(".logo-holder").parent().height() - $(".footer-holder").parent().height() - 10;
                    $(".sidebar-nav-style-1 .nav").css("height", i);
                    var o = parseInt($(".sidebar-part2").height() - parseInt($(".sidebar-part2 .sidebar-middle").css("padding-top")) - parseInt($(".sidebar-part2 .sidebar-middle").css("padding-bottom")) - parseInt($(".sidebar-part2 .sidebar-middle .sidebar-middle-menu .nav").css("margin-bottom")));
                    $(".sidebar-part2 .sidebar-middle .sidebar-middle-menu .nav").css("height", o)
                }(), k()
        }
        if (t.on("scroll", function() {
                var e = $(".navbar-nav li a"),
                    n = a.scrollTop();
                if (e.each(function() {
                        var a = $(this);
                        if (a.attr("href").indexOf("#") > -1 && $(a.attr("href")).length > 0) {
                            var t = $(a.attr("href"));
                            t.position().top <= n && t.position().top + t.height() > n ? (e.removeClass("active"), a.addClass("active")) : a.removeClass("active")
                        }
                    }), c.bgPanel.length) {
                    var i = t.scrollTop() + t.height() / 2;
                    c.bgPanel.each(function() {
                        var e = $(this);
                        e.position().top <= i && e.position().top + e.height() > i && (c.bgBody.removeClass(function(e, a) {
                            return (a.match(/(^|\s)color-\S+/g) || []).join(" ")
                        }), c.bgBody.addClass("color-" + $(this).data("color")))
                    })
                }
                var o = $("nav").outerHeight();
                $("header").hasClass("no-sticky") || (a.scrollTop() >= o ? $("header").addClass("sticky") : a.scrollTop() <= o && ($("header").removeClass("sticky"), setTimeout(function() {
                    w()
                }, 500)), b());
                if (!u) {
                    var s = $(this).scrollTop();
                    s > l ? ($(".sticky").removeClass("header-appear"), $(".dropdown.on").removeClass("on").removeClass("open").find(".dropdown-menu").fadeOut(100)) : $(".sticky").addClass("header-appear"), (l = s) <= o && $("header").removeClass("header-appear")
                }
            }), !c.tilt.length || d || s || $(".js-tilt").tilt({}), c.materialParallax.length)
            if (u || d || s)
                for (var z = 0; z < c.materialParallax.length; z++) {
                    var P = $(c.materialParallax[z]),
                        S = P.data("parallax-img");
                    P.css({
                        "background-image": "url(" + S + ")",
                        "background-attachment": "fixed",
                        "background-size": "cover"
                    })
                } else c.materialParallax.parallax(), t.on("load", function() {
                    setTimeout(function() {
                        $(window).scroll()
                    }, 500)
                });
        if (c.swiper.length)
            for (var z = 0; z < c.swiper.length; z++) {
                for (var B = $(c.swiper[z]), I = B.find(".swiper-pagination"), T = B.find(".swiper-button-next"), M = B.find(".swiper-button-prev"), O = B.find(".swiper-scrollbar"), R = B.find(".swiper-slide"), F = 0; F < R.length; F++) {
                    var D;
                    (D = (q = $(R[F])).attr("data-slide-bg")) && q.css({
                        "background-image": "url(" + D + ")",
                        "background-size": "cover"
                    })
                }
                R.end().find("[data-caption-animate]").addClass("not-animated").end(), B.swiper({
                    autoplay: !u && (B.attr("data-autoplay") ? "false" === B.attr("data-autoplay") ? void 0 : B.attr("data-autoplay") : 5e3),
                    direction: B.attr("data-direction") ? B.attr("data-direction") : "horizontal",
                    effect: B.attr("data-slide-effect") ? B.attr("data-slide-effect") : "slide",
                    speed: B.attr("data-slide-speed") ? B.attr("data-slide-speed") : 600,
                    keyboardControl: "true" === B.attr("data-keyboard"),
                    parallax: "true" === B.attr("data-parallax"),
                    mousewheelControl: "true" === B.attr("data-mousewheel"),
                    mousewheelReleaseOnEdges: "true" === B.attr("data-mousewheel-release"),
                    nextButton: T.length ? T.get(0) : null,
                    prevButton: M.length ? M.get(0) : null,
                    pagination: I.length ? I.get(0) : null,
                    paginationClickable: !!I.length && "false" !== I.attr("data-clickable"),
                    paginationBulletRender: I.length && "true" === I.attr("data-index-bullet") ? function(e, a, t) {
                        return '<span class="' + t + '">' + (a + 1) + "</span>"
                    } : null,
                    scrollbar: O.length ? O.get(0) : null,
                    scrollbarDraggable: !O.length || "false" !== O.attr("data-draggable"),
                    scrollbarHide: !!O.length && "false" === O.attr("data-draggable"),
                    loop: !u && "false" !== B.attr("data-loop"),
                    simulateTouch: !(!B.attr("data-simulate-touch") || u) && "true" === B.attr("data-simulate-touch"),
                    onTransitionStart: function(e) {
                        g(e)
                    },
                    onTransitionEnd: function(e) {
                        m(e)
                    },
                    onInit: function(e) {
                        g(e), m(e), o || t.on("resize", function() {
                            e.update(!0)
                        }), v(B.find('[data-lightgallery="item"]'), "lightGallery-in-carousel")
                    }
                }), t.on("resize", function(e) {
                    return function() {
                        var a = h(e, "min-height"),
                            t = h(e, "height");
                        t && e.css("height", a && a > t ? a : t)
                    }
                }(B)).trigger("resize")
            }
        if (c.customWaypoints.length && !u)
            for (z = 0; z < c.customWaypoints.length; z++) {
                var q;
                (q = $(c.customWaypoints[z])).on("click", function(e) {
                    e.preventDefault(), $("body, html").stop().animate({
                        scrollTop: $("#" + $(this).attr("data-custom-scroll-to")).offset().top
                    }, 1e3, function() {
                        t.trigger("resize")
                    })
                })
            }
        if (c.rdNavbar.length) {
            var H, N, V, G;
            for (H = ["-", "-sm-", "-md-", "-lg-", "-xl-", "-xxl-"], G = {}, z = F = 0, N = (V = [0, 576, 768, 992, 1200, 1600]).length; F < N; z = ++F) V[z], G[V[z]] || (G[V[z]] = {}), c.rdNavbar.attr("data" + H[z] + "layout") && (G[V[z]].layout = c.rdNavbar.attr("data" + H[z] + "layout")), c.rdNavbar.attr("data" + H[z] + "device-layout") && (G[V[z]].deviceLayout = c.rdNavbar.attr("data" + H[z] + "device-layout")), c.rdNavbar.attr("data" + H[z] + "hover-on") && (G[V[z]].focusOnHover = "true" === c.rdNavbar.attr("data" + H[z] + "hover-on")), c.rdNavbar.attr("data" + H[z] + "auto-height") && (G[V[z]].autoHeight = "true" === c.rdNavbar.attr("data" + H[z] + "auto-height")), u ? G[V[z]].stickUp = !1 : c.rdNavbar.attr("data" + H[z] + "stick-up") && (G[V[z]].stickUp = "true" === c.rdNavbar.attr("data" + H[z] + "stick-up")), c.rdNavbar.attr("data" + H[z] + "stick-up-offset") && (G[V[z]].stickUpOffset = c.rdNavbar.attr("data" + H[z] + "stick-up-offset"));
            c.rdNavbar.RDNavbar({
                anchorNav: !u,
                stickUpClone: !(!c.rdNavbar.attr("data-stick-up-clone") || u) && "true" === c.rdNavbar.attr("data-stick-up-clone"),
                responsive: G,
                callbacks: {
                    onStuck: function() {
                        var e = this.$element.find(".rd-search input");
                        e && e.val("").trigger("propertychange")
                    },
                    onDropdownOver: function() {
                        return !u
                    },
                    onUnstuck: function() {
                        if (null !== this.$clone) {
                            var e = this.$clone.find(".rd-search input");
                            e && (e.val("").trigger("propertychange"), e.trigger("blur"))
                        }
                    }
                }
            }), c.rdNavbar.attr("data-body-class") && (document.body.className += " " + c.rdNavbar.attr("data-body-class"))
        }

        function E(e, n) {
            a.on("scroll", function() {
                var a;
                !e.hasClass("lazy-loaded") && (a = e, u || a.offset().top + a.outerHeight() >= t.scrollTop() && a.offset().top <= t.scrollTop() + t.height()) && (n.call(), e.addClass("lazy-loaded"))
            }).trigger("scroll")
        }

        function L(e, a) {
            var t, n = 0;
            if (e.length) {
                for (var i = 0; i < e.length; i++) {
                    var o = $(e[i]);
                    if ((t = o.regula("validate")).length)
                        for (W = 0; W < t.length; W++) n++, o.siblings(".form-validation").text(t[W].message).parent().addClass("has-error");
                    else o.siblings(".form-validation").text("").parent().removeClass("has-error")
                }
                return a && a.length ? function(e) {
                    if (0 === e.find(".g-recaptcha-response").val().length) return e.siblings(".form-validation").html("Please, prove that you are not robot.").addClass("active"), e.closest(".form-wrap").addClass("has-error"), e.on("propertychange", function() {
                        var e = $(this),
                            a = e.find(".g-recaptcha-response").val();
                        a.length > 0 && (e.closest(".form-wrap").removeClass("has-error"), e.siblings(".form-validation").removeClass("active").html(""), e.off("propertychange"))
                    }), !1;
                    return !0
                }(a) && 0 === n : 0 === n
            }
            return !0
        }
        if (i && !u && $().UItoTop({
                easingType: "easeOutQuad",
                containerClass: "ui-to-top fa fa-angle-up"
            }), window.onloadCaptchaCallback = function() {
                for (var e = 0; e < c.captcha.length; e++) {
                    var a = $(c.captcha[e]);
                    grecaptcha.render(a.attr("id"), {
                        sitekey: a.attr("data-sitekey"),
                        size: a.attr("data-size") ? a.attr("data-size") : "normal",
                        theme: a.attr("data-theme") ? a.attr("data-theme") : "light",
                        callback: function(e) {
                            $(".recaptcha").trigger("propertychange")
                        }
                    }), a.after("<span class='form-validation'></span>")
                }
            }, c.captcha.length && $.getScript("//www.google.com/recaptcha/api.js?onload=onloadCaptchaCallback&render=explicit&hl=en"), c.radio.length)
            for (z = 0; z < c.radio.length; z++) $(c.radio[z]).addClass("radio-custom").after("<span class='radio-custom-dummy'></span>");
        if (c.checkbox.length)
            for (z = 0; z < c.checkbox.length; z++) $(c.checkbox[z]).addClass("checkbox-custom").after("<span class='checkbox-custom-dummy'></span>");
        if (c.rdInputLabel.length && c.rdInputLabel.RDInputLabel(), c.regula.length && function(e) {
                for (var a = 0; a < e.length; a++) {
                    var t = $(e[a]);
                    t.addClass("form-control-has-validation").after("<span class='form-validation'></span>"), t.parent().find(".form-validation").is(":last-child") && t.addClass("form-control-last-child")
                }
                e.on("input change propertychange blur", function(e) {
                    var t, n = $(this);
                    if (("blur" === e.type || n.parent().hasClass("has-error")) && !n.parents(".rd-mailform").hasClass("success"))
                        if ((t = n.regula("validate")).length)
                            for (a = 0; a < t.length; a++) n.siblings(".form-validation").text(t[a].message).parent().addClass("has-error");
                        else n.siblings(".form-validation").text("").parent().removeClass("has-error")
                }).regula("bind");
                var n = [{
                    type: regula.Constraint.Required,
                    newMessage: "The text field is required."
                }, {
                    type: regula.Constraint.Email,
                    newMessage: "The email is not a valid email."
                }, {
                    type: regula.Constraint.Numeric,
                    newMessage: "Only numbers are required"
                }, {
                    type: regula.Constraint.Selected,
                    newMessage: "Please choose an option."
                }];
                for (a = 0; a < n.length; a++) {
                    var i = n[a];
                    regula.override({
                        constraintType: i.type,
                        defaultMessage: i.newMessage
                    })
                }
            }(c.regula), c.mailchimp.length)
            for (z = 0; z < c.mailchimp.length; z++) {
                var _ = $(c.mailchimp[z]),
                    A = _.find('input[type="email"]');
                _.attr("novalidate", "true"), A.attr("name", "EMAIL"), _.on("submit", $.proxy(function(e) {
                    e.preventDefault();
                    var a = this,
                        t = {},
                        n = a.attr("action").replace("/post?", "/post-json?").concat("&c=?"),
                        i = a.serializeArray(),
                        o = $("#" + a.attr("data-form-output"));
                    for (r = 0; r < i.length; r++) t[i[r].name] = i[r].value;
                    $.ajax({
                        data: t,
                        url: n,
                        dataType: "jsonp",
                        error: function(e, a) {
                            o.html("Server error: " + a), setTimeout(function() {
                                o.removeClass("active")
                            }, 4e3)
                        },
                        success: function(e) {
                            o.html(e.msg).addClass("active"), setTimeout(function() {
                                o.removeClass("active")
                            }, 6e3)
                        },
                        beforeSend: function(e) {
                            if (u || !L(a.find("[data-constraints]"))) return !1;
                            o.html("Submitting...").addClass("active")
                        }
                    });
                    for (var s = a[0].getElementsByTagName("input"), r = 0; r < s.length; r++) s[r].value = "";
                    return !1
                }, _))
            }
        if (c.campaignMonitor.length)
            for (z = 0; z < c.campaignMonitor.length; z++) {
                var j = $(c.campaignMonitor[z]);
                j.on("submit", $.proxy(function(e) {
                    var a = {},
                        t = this.attr("action"),
                        n = this.serializeArray(),
                        i = $("#" + c.campaignMonitor.attr("data-form-output")),
                        o = $(this);
                    for (r = 0; r < n.length; r++) a[n[r].name] = n[r].value;
                    $.ajax({
                        data: a,
                        url: t,
                        dataType: "jsonp",
                        error: function(e, a) {
                            i.html("Server error: " + a), setTimeout(function() {
                                i.removeClass("active")
                            }, 4e3)
                        },
                        success: function(e) {
                            i.html(e.Message).addClass("active"), setTimeout(function() {
                                i.removeClass("active")
                            }, 6e3)
                        },
                        beforeSend: function(e) {
                            if (u || !L(o.find("[data-constraints]"))) return !1;
                            i.html("Submitting...").addClass("active")
                        }
                    });
                    for (var s = o[0].getElementsByTagName("input"), r = 0; r < s.length; r++) s[r].value = "";
                    return !1
                }, j))
            }
        if (c.rdMailForm.length) {
            var W, U = {
                MF000: "Successfully sent!",
                MF001: "Recipients are not set!",
                MF002: "Form will not work locally!",
                MF003: "Please, define email field in your form!",
                MF004: "Please, define type of your form!",
                MF254: "Something went wrong with PHPMailer!",
                MF255: "Aw, snap! Something went wrong."
            };
            for (z = 0; z < c.rdMailForm.length; z++) {
                var K = $(c.rdMailForm[z]),
                    Y = !1;
                K.attr("novalidate", "novalidate").ajaxForm({
                    data: {
                        "form-type": K.attr("data-form-type") || "contact",
                        counter: z
                    },
                    beforeSubmit: function(e, a, t) {
                        if (!u) {
                            var n = $(c.rdMailForm[this.extraData.counter]),
                                i = n.find("[data-constraints]"),
                                o = $("#" + n.attr("data-form-output")),
                                s = n.find(".recaptcha"),
                                r = !0;
                            if (o.removeClass("active error success"), !L(i, s)) return !1;
                            if (s.length) {
                                var l = s.find(".g-recaptcha-response").val(),
                                    d = {
                                        CPT001: 'Please, setup you "site key" and "secret key" of reCaptcha',
                                        CPT002: "Something wrong with google reCaptcha"
                                    };
                                Y = !0, $.ajax({
                                    method: "POST",
                                    url: "bat/reCaptcha.php",
                                    data: {
                                        "g-recaptcha-response": l
                                    },
                                    async: !1
                                }).done(function(e) {
                                    "CPT000" !== e && (o.hasClass("snackbars") ? (o.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + d[e] + "</span></p>"), setTimeout(function() {
                                        o.removeClass("active")
                                    }, 3500), r = !1) : o.html(d[e]), o.addClass("active"))
                                })
                            }
                            if (!r) return !1;
                            n.addClass("form-in-process"), o.hasClass("snackbars") && (o.html('<p><span class="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span><span>Sending</span></p>'), o.addClass("active"))
                        }
                    },
                    error: function(e) {
                        if (!u) {
                            var a = $("#" + $(c.rdMailForm[this.extraData.counter]).attr("data-form-output")),
                                t = $(c.rdMailForm[this.extraData.counter]);
                            a.text(U[e]), t.removeClass("form-in-process"), Y && grecaptcha.reset()
                        }
                    },
                    success: function(e) {
                        if (!u) {
                            var a = $(c.rdMailForm[this.extraData.counter]),
                                t = $("#" + a.attr("data-form-output")),
                                n = a.find("select");
                            a.addClass("success").removeClass("form-in-process"), Y && grecaptcha.reset(), e = 5 === e.length ? e : "MF255", t.text(U[e]), "MF000" === e ? t.hasClass("snackbars") ? t.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + U[e] + "</span></p>") : t.addClass("active success") : t.hasClass("snackbars") ? t.html(' <p class="snackbars-left"><span class="icon icon-xxs mdi mdi-alert-outline text-middle"></span><span>' + U[e] + "</span></p>") : t.addClass("active error"), a.clearForm(), n.length && n.select2("val", ""), a.find("input, textarea").trigger("blur"), setTimeout(function() {
                                t.removeClass("active error success"), a.removeClass("success")
                            }, 3500)
                        }
                    }
                })
            }
        }
        if (navigator.platform.match(/(Mac)/i) && n.addClass("mac-os"), d && (d < 10 && n.addClass("lt-ie-10"), d < 11 && c.pointerEvents && $.getScript(c.pointerEvents).done(function() {
                n.addClass("ie-10"), PointerEventsPolyfill.initialize({})
            }), 11 === d && $("html").addClass("ie-11"), 12 === d && $("html").addClass("ie-edge")), c.lightGallery.length)
            for (z = 0; z < c.lightGallery.length; z++) e = c.lightGallery[z], p = void 0, u || $(e).lightGallery({
                thumbnail: "false" !== $(e).attr("data-lg-thumbnail"),
                selector: "[data-lightgallery='item']",
                autoplay: "true" === $(e).attr("data-lg-autoplay"),
                pause: parseInt($(e).attr("data-lg-autoplay-delay")) || 5e3,
                addClass: p,
                mode: $(e).attr("data-lg-animation") || "lg-slide",
                loop: "false" !== $(e).attr("data-lg-loop")
            });
        if (c.lightGalleryItem.length) {
            for (var X = [], Z = 0; Z < c.lightGalleryItem.length; Z++) $(c.lightGalleryItem[Z]).parents(".owl-carousel").length || $(c.lightGalleryItem[Z]).parents(".swiper-slider").length || $(c.lightGalleryItem[Z]).parents(".slick-slider").length || X.push(c.lightGalleryItem[Z]);
            c.lightGalleryItem = X;
            for (z = 0; z < c.lightGalleryItem.length; z++) v(c.lightGalleryItem[z])
        }
        if (c.lightDynamicGalleryItem.length)
            for (z = 0; z < c.lightDynamicGalleryItem.length; z++) f(c.lightDynamicGalleryItem[z]);
        if (c.rdGoogleMaps.length && $.getScript("//maps.google.com/maps/api/js?key=AIzaSyAwH60q5rWrS8bXwpkZwZwhw9Bw0pqKTZM&sensor=false&libraries=geometry,places&v=3.7", function() {
                var e = document.getElementsByTagName("head")[0],
                    a = e.insertBefore;
                e.insertBefore = function(t, n) {
                    t.href && -1 !== t.href.indexOf("//fonts.googleapis.com/css?family=Roboto") || -1 !== t.innerHTML.indexOf("gm-style") || a.call(e, t, n)
                };
                for (var t = 0; t < c.rdGoogleMaps.length; t++) {
                    var n = $(c.rdGoogleMaps[t]);
                    E(n, $.proxy(function() {
                        var e = $(this),
                            a = e.attr("data-styles");
                        e.googleMap({
                            marker: {
                                basic: e.data("marker"),
                                active: e.data("marker-active")
                            },
                            styles: a ? JSON.parse(a) : [],
                            onInit: function(a) {
                                var t = $("#rd-google-map-address");
                                if (t.length) {
                                    var n = t,
                                        i = new google.maps.Geocoder,
                                        o = new google.maps.Marker({
                                            map: a,
                                            icon: e.data("marker-url")
                                        });
                                    new google.maps.places.Autocomplete(t[0]).bindTo("bounds", a), t.attr("placeholder", ""), t.on("change", function() {
                                        $("#rd-google-map-address-submit").trigger("click")
                                    }), t.on("keydown", function(e) {
                                        13 === e.keyCode && $("#rd-google-map-address-submit").trigger("click")
                                    }), $("#rd-google-map-address-submit").on("click", function(e) {
                                        e.preventDefault();
                                        var t = n.val();
                                        i.geocode({
                                            address: t
                                        }, function(e, t) {
                                            if (t === google.maps.GeocoderStatus.OK) {
                                                var n = e[0].geometry.location.lat(),
                                                    i = e[0].geometry.location.lng();
                                                a.setCenter(new google.maps.LatLng(parseFloat(n), parseFloat(i))), o.setPosition(new google.maps.LatLng(parseFloat(n), parseFloat(i)))
                                            }
                                        })
                                    })
                                }
                            }
                        })
                    }, n))
                }
            }), c.selectFilter.length)
            for (z = 0; z < c.selectFilter.length; z++) {
                var J = $(c.selectFilter[z]);
                J.select2({
                    placeholder: !!J.attr("data-placeholder") && J.attr("data-placeholder"),
                    minimumResultsForSearch: J.attr("data-minimum-results-search") ? J.attr("data-minimum-results-search") : -1,
                    maximumSelectionSize: 3
                })
            }
        t.resize(function(e) {
            $("nav.navbar.bootsnav ul.nav").each(function() {
                $("li.dropdown", this).on("mouseenter", function(e) {
                    if (t.width() > 991) return $(this).find(".equalize").equalize({
                        equalize: "outerHeight",
                        reset: !0
                    }), !1
                })
            }), setTimeout(function() {
                x()
            }, 500), e.preventDefault()
        }), $("nav.navbar.bootsnav ul.nav").each(function() {
            $("li.dropdown", this).on("mouseenter", function() {
                if (t.width() > 991) return $(this).find(".equalize").equalize({
                    equalize: "outerHeight",
                    reset: !0
                }), !1
            })
        }), $('a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
            var a = $(e.target).attr("href");
            if (t.width() > 991) return $(a).find(".equalize").equalize({
                equalize: "outerHeight",
                reset: !0
            }), !1
        });
        var Q = window.location.href.substr(window.location.href.lastIndexOf("/") + 1),
            ee = window.location.hash.substring(1);
        ee ? (ee = "#" + ee, Q = Q.replace(ee, "")) : Q = Q.replace("#", ""), $(".nav li a").each(function() {
            $(this).attr("href") != Q && $(this).attr("href") != Q + ".html" || ($(this).parent().addClass("active"), $(this).parents("li.dropdown").addClass("active"))
        });
        var ae = new Swiper(".swiper-full-screen", {
                pagination: ".swiper-pagination",
                paginationClickable: !0,
                loop: !u,
                autoplay: !u && 5e3,
                slidesPerView: 1,
                keyboardControl: !0,
                preventClicks: !1,
                nextButton: ".swiper-button-next",
                prevButton: ".swiper-button-prev",
                simulateTouch: !u
            }),
            te = new Swiper(".swiper-auto-fade", {
                pagination: ".swiper-pagination",
                loop: !u,
                autoplay: !u && 3e3,
                slidesPerView: 1,
                paginationClickable: !0,
                keyboardControl: !0,
                preventClicks: !1,
                effect: "fade",
                fadeEffect: {
                    crossFade: !0
                },
                nextButton: ".swiper-button-next",
                prevButton: ".swiper-button-prev"
            }),
            ne = new Swiper(".swiper-slider-second", {
                pagination: ".swiper-pagination-second",
                slidesPerView: 1,
                paginationClickable: !0,
                keyboardControl: !0,
                preventClicks: !1,
                nextButton: ".swiper-button-next",
                prevButton: ".swiper-button-prev"
            }),
            ie = new Swiper(".swiper-slider-third", {
                pagination: ".swiper-pagination-third",
                slidesPerView: 1,
                paginationClickable: !0,
                keyboardControl: !0,
                preventClicks: !1,
                nextButton: ".swiper-button-next",
                prevButton: ".swiper-button-prev"
            }),
            oe = new Swiper(".swiper-number-pagination", {
                pagination: ".swiper-number",
                paginationClickable: !0,
                autoplay: !u && 4e3,
                preventClicks: !1,
                autoplayDisableOnInteraction: !1,
                paginationBulletRender: function(e, a, t) {
                    return '<span class="' + t + '">' + ((n = a + 1) < 10 ? "0" + n.toString() : n.toString()) + "</span>";
                    var n
                }
            }),
            se = new Swiper(".swiper-vertical-pagination", {
                pagination: ".swiper-pagination-white",
                direction: "vertical",
                slidesPerView: 1,
                paginationClickable: !0,
                spaceBetween: 0,
                preventClicks: !1,
                mousewheelControl: !0
            }),
            re = new Swiper(".swiper-slider-clients", {
                pagination: null,
                slidesPerView: 4,
                paginationClickable: !0,
                autoplay: !u && 3e3,
                preventClicks: !1,
                autoplayDisableOnInteraction: !1,
                breakpoints: {
                    480: {
                        slidesPerView: 1
                    },
                    650: {
                        slidesPerView: 2
                    },
                    850: {
                        slidesPerView: 3
                    }
                }
            }),
            le = new Swiper(".swiper-three-slides", {
                pagination: ".swiper-pagination-three-slides",
                paginationClickable: !0,
                slidesPerView: 3,
                keyboardControl: !0,
                mousewheelControl: !1,
                preventClicks: !1,
                nextButton: ".second-swiper-button-next",
                prevButton: ".second-swiper-button-prev",
                breakpoints: {
                    480: {
                        slidesPerView: 1
                    },
                    767: {
                        slidesPerView: 2
                    },
                    850: {
                        slidesPerView: 2
                    }
                }
            }),
            de = new Swiper(".swiper-four-slides", {
                pagination: ".swiper-pagination-four-slides",
                autoplay: !u && 3e3,
                slidesPerView: 4,
                paginationClickable: !0,
                keyboardControl: !0,
                mousewheelControl: !1,
                preventClicks: !1,
                nextButton: ".swiper-button-next",
                prevButton: ".swiper-button-prev",
                breakpoints: {
                    850: {
                        slidesPerView: 2
                    },
                    650: {
                        slidesPerView: 2
                    },
                    480: {
                        slidesPerView: 1
                    }
                }
            }),
            ce = new Swiper(".swiper-demo-header-style", {
                pagination: ".swiper-pagination-demo-header-style",
                loop: !0,
                autoplay: !u && 3e3,
                slidesPerView: 4,
                paginationClickable: !0,
                keyboardControl: !0,
                mousewheelControl: !1,
                preventClicks: !0,
                slidesPerGroup: 4,
                nextButton: ".swiper-button-next",
                prevButton: ".swiper-button-prev",
                breakpoints: {
                    1199: {
                        slidesPerGroup: 2,
                        slidesPerView: 2
                    },
                    767: {
                        slidesPerGroup: 1,
                        slidesPerView: 1
                    }
                }
            }),
            pe = 0,
            ue = new Swiper(".swiper-auto-width", {
                scrollbar: ".swiper-scrollbar",
                scrollbarHide: !1,
                scrollbarDraggable: !0,
                slidesPerView: "auto",
                centeredSlides: !0,
                spaceBetween: 80,
                preventClicks: !1,
                scrollbarSnapOnRelease: !0,
                nextButton: ".swiper-next-style2",
                prevButton: ".swiper-prev-style2",
                mousewheelControl: !0,
                speed: 1e3,
                keyboardControl: !0,
                breakpoints: {
                    1199: {
                        spaceBetween: 60
                    },
                    960: {
                        spaceBetween: 30
                    },
                    767: {
                        spaceBetween: 15
                    }
                },
                onSlideChangeEnd: function(e) {
                    pe = e.activeIndex
                }
            }),
            he = new Swiper(".swiper-bottom-scrollbar-full", {
                scrollbar: ".swiper-scrollbar",
                scrollbarHide: !1,
                scrollbarDraggable: !0,
                slidesPerView: "auto",
                scrollbarSnapOnRelease: !0,
                grabCursor: !0,
                preventClicks: !1,
                nextButton: ".swiper-button-next",
                prevButton: ".swiper-button-prev",
                mousewheelControl: !0,
                spaceBetween: 30,
                keyboardControl: !0,
                speed: 1e3,
                breakpoints: {
                    767: {
                        direction: "vertical",
                        scrollbarHide: !0,
                        spaceBetween: 0,
                        pagination: !1,
                        autoHeight: !0
                    }
                }
            }),
            ge = new Swiper(".swiper-auto-height-container", {
                nextButton: ".swiper-button-next",
                prevButton: ".swiper-button-prev",
                effect: "fade",
                loop: !u,
                preventClicks: !1,
                autoHeight: !0
            }),
            me = new Swiper(".swiper-multy-row-container", {
                nextButton: ".swiper-portfolio-next",
                prevButton: ".swiper-portfolio-prev",
                slidesPerView: 4,
                spaceBetween: 15,
                scrollbarSnapOnRelease: !0,
                autoplay: !u && 3e3,
                autoplayDisableOnInteraction: !0,
                breakpoints: {
                    991: {
                        slidesPerView: 2
                    },
                    767: {
                        slidesPerView: 1
                    }
                }
            }),
            fe = new Swiper(".swiper-blog", {
                slidesPerView: "auto",
                centeredSlides: !0,
                spaceBetween: 15,
                scrollbarSnapOnRelease: !0,
                autoplay: !u && 5e3,
                autoplayDisableOnInteraction: !0,
                preventClicks: !1,
                loop: !u,
                loopedSlides: 3
            }),
            ve = new Swiper(".swiper-presentation", {
                slidesPerView: 4,
                centeredSlides: !1,
                spaceBetween: 30,
                scrollbarSnapOnRelease: !0,
                autoplay: {
                    delay: 300,
                    reverseDirection: !0
                },
                speed: 2800,
                autoplayDisableOnInteraction: !0,
                preventClicks: !0,
                loop: !0,
                loopedSlides: 6,
                nextButton: ".swiper-button-next",
                prevButton: ".swiper-button-prev",
                breakpoints: {
                    991: {
                        spaceBetween: 15,
                        slidesPerView: 2,
                        autoplay: !1,
                        speed: 300
                    },
                    767: {
                        slidesPerView: 1
                    }
                }
            });
        d && setTimeout(function() {
            a.imagesLoaded(function() {
                $(".swiper-full-screen").length > 0 && ae.onResize(), $(".swiper-auto-fade").length > 0 && te.onResize(), $(".swiper-number-pagination").length > 0 && oe.onResize(), $(".swiper-slider-clients").length > 0 && re.onResize(), $(".swiper-slider-second").length > 0 && ne.onResize(), $(".swiper-slider-third").length > 0 && ie.onResize(), $(".swiper-three-slides").length > 0 && le.onResize(), $(".swiper-four-slides").length > 0 && de.onResize(), $(".swiper-vertical-pagination").length > 0 && se.onResize(), $(".swiper-auto-height-container").length > 0 && ge.onResize(), $(".swiper-multy-row-container").length > 0 && me.onResize(), $(".swiper-blog").length > 0 && fe.onResize(), $(".swiper-swiperPresentation").length > 0 && ve.onResize(), $(".swiper-demo-header-style").length > 0 && ce.onResize()
            })
        }, 300), t.resize(function() {
            setTimeout(function() {
                $(".swiper-full-screen").length > 0 && ae.onResize(), $(".swiper-auto-fade").length > 0 && te.onResize(), $(".swiper-number-pagination").length > 0 && oe.onResize(), $(".swiper-slider-second").length > 0 && ne.onResize(), $(".swiper-slider-third").length > 0 && ie.onResize(), $(".swiper-three-slides").length > 0 && le.onResize(), $(".swiper-four-slides").length > 0 && de.onResize(), $(".swiper-vertical-pagination").length > 0 && se.onResize(), $(".swiper-auto-height-container").length > 0 && ge.onResize(), $(".swiper-multy-row-container").length > 0 && me.onResize(), $(".swiper-blog").length > 0 && fe.onResize(), $(".swiper-swiperPresentation").length > 0 && ve.onResize(), $(".swiper-demo-header-style").length > 0 && ce.onResize()
            }, 500), setTimeout(function() {
                t.width() < 768 ? $(".swiper-bottom-scrollbar-full").length > 0 && (he && (he.detachEvents(), he.destroy(!0, !0), he = void 0), he = new Swiper(".swiper-bottom-scrollbar-full", {
                    scrollbar: ".swiper-scrollbar",
                    scrollbarHide: !1,
                    scrollbarDraggable: !0,
                    slidesPerView: "auto",
                    scrollbarSnapOnRelease: !0,
                    grabCursor: !0,
                    preventClicks: !1,
                    nextButton: ".swiper-button-next",
                    prevButton: ".swiper-button-prev",
                    mousewheelControl: !0,
                    spaceBetween: 30,
                    keyboardControl: !0,
                    speed: 1e3,
                    breakpoints: {
                        767: {
                            direction: "vertical",
                            scrollbarHide: !0,
                            spaceBetween: 0,
                            pagination: !1,
                            autoHeight: !0
                        }
                    }
                })) : $(".swiper-bottom-scrollbar-full").length > 0 && (he && (he.detachEvents(), he.destroy(!0, !0), he = void 0), he = new Swiper(".swiper-bottom-scrollbar-full", {
                    scrollbar: ".swiper-scrollbar",
                    scrollbarHide: !1,
                    scrollbarDraggable: !0,
                    slidesPerView: "auto",
                    scrollbarSnapOnRelease: !0,
                    grabCursor: !0,
                    preventClicks: !1,
                    nextButton: ".swiper-button-next",
                    prevButton: ".swiper-button-prev",
                    mousewheelControl: !0,
                    spaceBetween: 30,
                    keyboardControl: !0,
                    speed: 1e3
                }))
            }, 500), $(".swiper-auto-width").length > 0 && ue && (ue.detachEvents(), ue.destroy(!0), ue = void 0, $(".swiper-auto-width .swiper-wrapper").css("transform", "").css("transition-duration", ""), $(".swiper-auto-width .swiper-slide").css("margin-right", ""), setTimeout(function() {
                (ue = new Swiper(".swiper-auto-width", {
                    scrollbar: ".swiper-scrollbar",
                    scrollbarHide: !1,
                    scrollbarDraggable: !0,
                    slidesPerView: "auto",
                    centeredSlides: !0,
                    spaceBetween: 80,
                    preventClicks: !1,
                    scrollbarSnapOnRelease: !0,
                    nextButton: ".swiper-next-style2",
                    prevButton: ".swiper-prev-style2",
                    mousewheelControl: !0,
                    speed: 1e3,
                    keyboardControl: !0,
                    breakpoints: {
                        1199: {
                            spaceBetween: 60
                        },
                        960: {
                            spaceBetween: 30
                        },
                        767: {
                            spaceBetween: 15
                        }
                    },
                    onSlideChangeEnd: function(e) {
                        pe = e.activeIndex
                    }
                })).slideTo(pe, 1e3, !1)
            }, 1e3))
        }), $(".chart1").length > 0 && ($(".chart1").appear(), $(".chart1").easyPieChart({
            barColor: "#929292",
            trackColor: "#d9d9d9",
            scaleColor: !1,
            easing: "easeInOut",
            scaleLength: 1,
            lineCap: "round",
            lineWidth: 3,
            size: 150,
            animate: {
                duration: 2e3,
                enabled: !0
            },
            onStep: function(e, a, t) {
                $(this.el).find(".percent").text(Math.round(t))
            }
        }), $(document.body).on("appear", ".chart1", function(e) {
            $(this).hasClass("appear") || ($(this).addClass("appear"), $(this).data("easyPieChart").update(0).update($(this).data("percent")))
        })), $(".chart2").length > 0 && ($(".chart2").appear(), $(".chart2").easyPieChart({
            easing: "easeInOut",
            barColor: "#446cff",
            trackColor: "#c7c7c7",
            scaleColor: !1,
            scaleLength: 1,
            lineCap: "round",
            lineWidth: 2,
            size: 120,
            animate: {
                duration: 2e3,
                enabled: !0
            },
            onStep: function(e, a, t) {
                $(this.el).find(".percent").text(Math.round(t))
            }
        }), $(document.body).on("appear", ".chart2", function(e) {
            $(this).hasClass("appear") || ($(this).addClass("appear"), $(this).data("easyPieChart").update(0).update($(this).data("percent")))
        })), $(".chart3").length > 0 && ($(".chart3").appear(), $(".chart3").easyPieChart({
            easing: "easeInOut",
            barColor: "#446cff",
            trackColor: "",
            scaleColor: !1,
            scaleLength: 1,
            lineCap: "round",
            lineWidth: 3,
            size: 140,
            animate: {
                duration: 2e3,
                enabled: !0
            },
            onStep: function(e, a, t) {
                $(this.el).find(".percent").text(Math.round(t))
            }
        }), $(document.body).on("appear", ".chart3", function(e) {
            $(this).hasClass("appear") || ($(this).addClass("appear"), $(this).data("easyPieChart").update(0).update($(this).data("percent")))
        }));
        $("a.scrollto").on("click.smoothscroll", function(e) {
            e.preventDefault();
            var a = this.hash;
            0 != $(a).length && $("html, body").stop().animate({
                scrollTop: $(a).offset().top
            }, 1200, "easeInOutExpo", function() {
                window.location.hash = a
            })
        }), $(".navbar-top").length > 0 || $(".navbar-scroll-top").length > 0 || $(".nav-top-scroll").length > 0 ? $(".inner-link").smoothScroll({
            speed: 900,
            offset: 0
        }) : $(".inner-link").smoothScroll({
            speed: 900,
            offset: -59
        }), $(".section-link").smoothScroll({
            speed: 900,
            offset: 1
        });
        var $e = $(".portfolio-grid");
        $e.imagesLoaded(function() {
            $e.isotope({
                layoutMode: "masonry",
                itemSelector: ".grid-item",
                percentPosition: !0,
                masonry: {
                    columnWidth: ".grid-sizer"
                }
            }), $e.isotope()
        });
        var be = $(".portfolio-filter > li > a");
        be.on("click", function(e) {
            setTimeout(function() {
                be.parents(".portfolio-filter").removeClass("active")
            }, 300), be.parent().removeClass("active"), $(this).parent().addClass("active");
            var a = $(this).attr("data-filter");
            return $e.find(".grid-item").removeClass("animated").css("visibility", ""), $e.find(".grid-item").each(function() {
                n.hasClass("wow-animation") && !u && i && ye.removeBox(this), $(this).css("-webkit-animation", "none"), $(this).css("-moz-animation", "none"), $(this).css("-ms-animation", "none"), $(this).css("animation", "none")
            }), $e.isotope({
                filter: a
            }), !1
        }), t.resize(function() {
            s || r || setTimeout(function() {
                $e.find(".grid-item").removeClass("wow").removeClass("animated"), $e.isotope("layout")
            }, 300)
        });
        var we = $(".blog-grid");
        we.imagesLoaded(function() {
            we.isotope({
                layoutMode: "masonry",
                itemSelector: ".grid-item",
                percentPosition: !0,
                masonry: {
                    columnWidth: ".grid-sizer"
                }
            })
        }), t.resize(function() {
            setTimeout(function() {
                we.find(".grid-item").removeClass("wow").removeClass("animated"), we.isotope("layout")
            }, 300)
        }), $(".modal-popup").magnificPopup({
            type: "inline",
            preloader: !1,
            blackbg: !0
        }), $(".popup-modal-dismiss").on("click", function(e) {
            e.preventDefault(), $.magnificPopup.close()
        }), $(".popup-with-zoom-anim").magnificPopup({
            type: "inline",
            fixedContentPos: !1,
            fixedBgPos: !0,
            overflowY: "auto",
            closeBtnInside: !0,
            preloader: !1,
            midClick: !0,
            removalDelay: 300,
            blackbg: !0,
            mainClass: "my-mfp-zoom-in"
        }), $(".popup-with-move-anim").magnificPopup({
            type: "inline",
            fixedContentPos: !1,
            fixedBgPos: !0,
            overflowY: "auto",
            closeBtnInside: !0,
            preloader: !1,
            midClick: !0,
            removalDelay: 300,
            blackbg: !0,
            mainClass: "my-mfp-slide-bottom"
        }), $(".popup-with-form").magnificPopup({
            type: "inline",
            preloader: !1,
            closeBtnInside: !1,
            fixedContentPos: !0,
            focus: "#name",
            callbacks: {
                beforeOpen: function() {
                    t.width() < 700 ? this.st.focus = !1 : this.st.focus = "#name"
                }
            }
        }), $(".popup-youtube, .popup-vimeo, .popup-googlemap").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !0,
            closeBtnInside: !1
        }), $(".ajax-popup").magnificPopup({
            type: "ajax",
            alignTop: !0,
            fixedContentPos: !0,
            overflowY: "scroll",
            callbacks: {
                open: function() {
                    $(".navbar .collapse").removeClass("in"), $(".navbar a.dropdown-toggle").addClass("collapsed")
                }
            }
        }), $("ul.mega-menu-full").each(function(e, a) {
            var t = 0;
            $(this).children("li").each(function(e, a) {
                t += $(this).outerWidth()
            }), $(this).width(t + 95), t = 0
        }), $(".fit-videos").fitVids();
        var ye = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !1,
            live: !0
        });

        function Ce() {
            $(".timer").each(function(e) {
                var a = $(this);
                e = $.extend({}, e || {}, a.data("countToOptions") || {}), a.countTo(e)
            })
        }
        n.hasClass("wow-animation") && !u && i && t.imagesLoaded(function() {
            ye.init()
        }), $(function(e) {
            Ce()
        }), $(".timer").appear(), $(document.body).on("appear", ".timer", function(e) {
            $(this).hasClass("appear") || (Ce(), $(this).addClass("appear"))
        }), $(".countdown").countdown($(".countdown").attr("data-enddate")).on("update.countdown", function(e) {
            $(this).html(e.strftime('<div class="counter-container"><div class="counter-box first"><div class="number">%-D</div><span>Day%!d</span></div><div class="counter-box"><div class="number">%H</div><span>Hours</span></div><div class="counter-box"><div class="number">%M</div><span>Minutes</span></div><div class="counter-box last"><div class="number">%S</div><span>Seconds</span></div></div>'))
        }), $(".right-menu-button").on("click", function(e) {
            $("body").toggleClass("left-nav-on")
        }), $(".btn-hamburger").on("click", function(e) {
            e.stopImmediatePropagation(), $(".hamburger-menu").hasClass("show-menu") ? $(".hamburger-menu").removeClass("show-menu") : ($(".hamburger-menu").addClass("show-menu"), $("body").removeClass("show-menu"))
        }), $("#mobileToggleSidenav").on("click", function(e) {
            e.stopImmediatePropagation(), $(this).closest("nav").toggleClass("sidemenu-open")
        }), a.imagesLoaded(function() {
            $(".justified-gallery").length > 0 && $(".justified-gallery").justifiedGallery({
                rowHeight: 400,
                maxRowHeight: !1,
                captions: !0,
                margins: 10,
                waitThumbnailsLoad: !0
            })
        }), $(".atr-nav").on("click", function() {
            $(".atr-div").append("<a class='close-cross' href='#'>X</a>"), $(".atr-div").animate({
                width: "toggle"
            })
        }), $(".close-cross").on("click", function() {
            $(".atr-div").hide()
        });
        var ke = document.getElementById("cbp-spmenu-s2"),
            xe = document.getElementById("showRightPush");
        document.body;
        xe && (xe.onclick = function() {
            classie.toggle(this, "active"), ke && classie.toggle(ke, "cbp-spmenu-open")
        });
        var ze = document.getElementById("close-pushmenu");
        if (ze && (ze.onclick = function() {
                classie.toggle(this, "active"), ke && classie.toggle(ke, "cbp-spmenu-open")
            }), $(".blog-header-style1 li").on("mouseover", function() {
                $(".blog-header-style1 li.blog-column-active").removeClass("blog-column-active"), $(this).addClass("blog-column-active")
            }).on("mouseleave", function() {
                $(this).removeClass("blog-column-active"), $(".blog-header-style1 li:first-child").addClass("blog-column-active")
            }), $(".big-menu-open").on("click", function() {
                $(".big-menu-right").addClass("open")
            }), $(".big-menu-close").on("click", function() {
                $(".big-menu-right").removeClass("open")
            }), c.instafeed.length > 0)
            for (z = 0; z < c.instafeed.length; z++) {
                $(c.instafeed[z]).RDInstafeed({
                    accessToken: "5526956400.ba4c844.c832b2a554764bc8a1c66c39e99687d7",
                    clientId: " c832b2a554764bc8a1c66c39e99687d7",
                    userId: "5526956400",
                    showLog: !1
                })
            }
        0 != $("#instaFeed-style1").length && new Instafeed({
            target: "instaFeed-style1",
            get: "tagged",
            tagName: "instagood",
            userId: 5640046896,
            limit: "8",
            accessToken: "5526956400.ba4c844.c832b2a554764bc8a1c66c39e99687d7",
            resolution: "standard_resolution",
            error: {
                template: '<div class="col-md-12 col-sm-12 col-xs-12"><span class=text-center>No Images Found</span></div>'
            },
            template: '<div class="col-md-3 col-sm-6 col-xs-12 instafeed-style1"><a class="insta-link" href="{{link}}" target="_blank"><img src="{{image}}" class="insta-image" /><div class="insta-counts"><span><i class="ti-heart"></i> <span class="count-number">{{likes}}</span></span><span><i class="ti-comment"></i> <span class="count-number">{{comments}}</span></span></div></a></div>'
        }).run();
        0 != $("#instaFeed-aside").length && new Instafeed({
            target: "instaFeed-aside",
            get: "tagged",
            tagName: "instagood",
            userId: 5640046896,
            limit: "6",
            accessToken: "5526956400.ba4c844.c832b2a554764bc8a1c66c39e99687d7",
            resolution: "standard_resolution",
            after: function() {
                k()
            },
            error: {
                template: '<div class="col-md-12 col-sm-12 col-xs-12"><span class=text-center>No Images Found</span></div>'
            },
            template: '<li><figure><a href="{{link}}" target="_blank"><img src="{{image}}" class="insta-image" /><span class="insta-counts"><i class="ti-heart"></i>{{likes}}</span></a></figure></li>'
        }).run();
        0 != $("#instaFeed-footer").length && new Instafeed({
            target: "instaFeed-footer",
            get: "tagged",
            tagName: "instagood",
            userId: 5640046896,
            limit: "6",
            accessToken: "5526956400.ba4c844.c832b2a554764bc8a1c66c39e99687d7",
            resolution: "standard_resolution",
            after: function() {
                k()
            },
            error: {
                template: '<div class="col-md-12 col-sm-12 col-xs-12"><span class=text-center>No Images Found</span></div>'
            },
            template: '<li><figure><a href="{{link}}" target="_blank"><img src="{{image}}" class="insta-image" /><span class="insta-counts"><i class="ti-heart"></i><span>{{likes}}</span></span></a></figure></li>'
        }).run();
        if ($(".header-search-form").magnificPopup({
                mainClass: "mfp-fade",
                closeOnBgClick: !0,
                preloader: !1,
                fixedContentPos: !1,
                closeBtnInside: !1,
                callbacks: {
                    open: function() {
                        setTimeout(function() {
                            $(".search-input").focus()
                        }, 500), $("#search-header").parent().addClass("search-popup"), s ? $("body, html").on("touchmove", function(e) {
                            e.preventDefault()
                        }) : ($("body").addClass("overflow-hidden"), $("body").addClass("width-100"), document.onmousewheel = y)
                    },
                    close: function() {
                        s ? $("body, html").unbind("touchmove") : ($("body").removeClass("overflow-hidden"), $("body").removeClass("width-100"), $("#search-header input[type=text]").each(function(e) {
                            0 == e && ($(this).val(""), $("#search-header").find("input:eq(" + e + ")").css({
                                border: "none",
                                "border-bottom": "2px solid rgba(255,255,255,0.5)"
                            }))
                        }), document.onmousewheel = C)
                    }
                }
            }), $("input.search-input").on("keypress", function(e) {
                13 != e.which || s || ($("button.search-button").trigger("click"), e.preventDefault())
            }), $("input.search-input").on("keyup", function(e) {
                null == $(this).val() || "" == $(this).val() ? $(this).css({
                    border: "none",
                    "border-bottom": "2px solid red"
                }) : $(this).css({
                    border: "none",
                    "border-bottom": "2px solid rgba(255,255,255,0.5)"
                })
            }), $("form.search-form, form.search-form-result").submit(function(e) {
                var a;
                if (a = !0, $("#search-header input[type=text]").each(function(e) {
                        0 === e && (null === $(this).val() || "" === $(this).val() ? ($("#search-header").find("input:eq(" + e + ")").css({
                            border: "none",
                            "border-bottom": "2px solid red"
                        }), a = !1) : $("#search-header").find("input:eq(" + e + ")").css({
                            border: "none",
                            "border-bottom": "2px solid #000"
                        }))
                    }), a) {
                    var t = $(this).attr("action");
                    t = (t = "#" == t || "" == t ? "blog-grid-3columns.html" : t) + "?" + $(this).serialize(), window.location = t
                }
                e.preventDefault()
            }), a.on("click", '.navbar .navbar-collapse a.dropdown-toggle, .accordion-style1 .panel-heading a, .accordion-style2 .panel-heading a, .accordion-style3 .panel-heading a, .toggles .panel-heading a, .toggles-style2 .panel-heading a, .toggles-style3 .panel-heading a, a.carousel-control, .nav-tabs a[data-toggle="tab"], a.shopping-cart', function(e) {
                e.preventDefault()
            }), $(".dropdown-toggle").dropdown(), $("body").on("touchstart click", function(e) {
                t.width() < 992 ? $(".navbar-collapse").has(e.target).is(".navbar-collapse") || !$(".navbar-collapse").hasClass("in") || $(e.target).hasClass("navbar-toggle") || $(".navbar-collapse").collapse("hide") : !$(".navbar-collapse").has(e.target).is(".navbar-collapse") && $(".navbar-collapse ul").hasClass("in") && ($(".navbar-collapse").find("a.dropdown-toggle").addClass("collapsed"), $(".navbar-collapse").find("ul.dropdown-menu").removeClass("in"), $(".navbar-collapse a.dropdown-toggle").removeClass("active"))
            }), $(".navbar-collapse a.dropdown-toggle").on("touchstart", function(e) {
                $(".navbar-collapse a.dropdown-toggle").not(this).removeClass("active"), $(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active")
            }), $("button.navbar-toggle").on("click", function(e) {
                s && ($(".cart-content").css("opacity", "0"), $(".cart-content").css("visibility", "hidden"))
            }), $("a.dropdown-toggle").on("click", function(e) {
                s && ($(".cart-content").css("opacity", "0"), $(".cart-content").css("visibility", "hidden"))
            }), $('.navbar-collapse [data-toggle="dropdown"]').on("click", function(e) {
                var a = $(this).parents("ul.navbar-nav").find("li.dropdown a.inner-link").parent("li.dropdown");
                !$(this).hasClass("inner-link") && a.hasClass("open") && a.removeClass("open");
                var n = $(this).attr("target");
                if (t.width() <= 991 && $(this).attr("href") && $(this).attr("href").indexOf("#") <= -1 && !$(e.target).is("i")) {
                    if (e.ctrlKey || e.metaKey) return window.open($(this).attr("href"), "_blank"), !1;
                    n ? window.open($(this).attr("href"), n) : window.location = $(this).attr("href")
                } else if (t.width() > 991 && $(this).attr("href").indexOf("#") <= -1) {
                    if (e.ctrlKey || e.metaKey) return window.open($(this).attr("href"), "_blank"), !1;
                    n ? window.open($(this).attr("href"), n) : window.location = $(this).attr("href")
                } else t.width() <= 991 && $(this).attr("href") && $(this).attr("href").length > 1 && $(this).attr("href").indexOf("#") >= 0 && $(this).hasClass("inner-link") && ($(this).parents("ul.navbar-nav").find("li.dropdown").not($(this).parent(".dropdown")).removeClass("open"), $(this).parent(".dropdown").hasClass("open") ? $(this).parent(".dropdown").removeClass("open") : $(this).parent(".dropdown").addClass("open"), $(this).toggleClass("active"))
            }), $(".skillbar").appear(), $(".skillbar").skillBars({
                from: 0,
                speed: 4e3,
                interval: 100,
                decimals: 0
            }), $(document.body).on("appear", ".skillbar", function(e) {
                $(this).hasClass("appear") || ($(this).addClass("appear"), $(this).find(".skillbar-bar").css("width", "0%"), $(this).skillBars({
                    from: 0,
                    speed: 4e3,
                    interval: 100,
                    decimals: 0
                }))
            }), $("body").on("touchstart click", function(e) {
                t.width()
            }), $("nav.full-width-pull-menu ul.panel-group li.dropdown a.dropdown-toggle").on("click", function(e) {
                $(this).parent("li").find("ul.dropdown-menu").length > 0 && ($(this).parent("li").hasClass("open") ? $(this).parent("li").removeClass("open") : $(this).parent("li").addClass("open"))
            }), $(".accordion-style1 .collapse").on("show.bs.collapse", function() {
                var e = $(this).attr("id");
                $('a[href="#' + e + '"]').closest(".panel-heading").addClass("active-accordion"), $('a[href="#' + e + '"] .panel-title span').html('<i class="ti-minus"></i>')
            }), $(".accordion-style1 .collapse").on("hide.bs.collapse", function() {
                var e = $(this).attr("id");
                $('a[href="#' + e + '"]').closest(".panel-heading").removeClass("active-accordion"), $('a[href="#' + e + '"] .panel-title span').html('<i class="ti-plus"></i>')
            }), $(".nav.navbar-nav a.inner-link").on("click", function(e) {
                $(this).parents("ul.navbar-nav").find("a.inner-link").removeClass("active");
                var a = $(this);
                $(".nav-header-container .navbar-toggle").is(":visible") && $(this).parents(".navbar-collapse").collapse("hide"), setTimeout(function() {
                    a.addClass("active")
                }, 1e3)
            }), $(".accordion-style2 .collapse").on("show.bs.collapse", function() {
                var e = $(this).attr("id");
                $('a[href="#' + e + '"]').closest(".panel-heading").addClass("active-accordion"), $('a[href="#' + e + '"] .panel-title').find("i").addClass("fa-angle-up").removeClass("fa-angle-down")
            }), $(".accordion-style2 .collapse").on("hide.bs.collapse", function() {
                var e = $(this).attr("id");
                $('a[href="#' + e + '"]').closest(".panel-heading").removeClass("active-accordion"), $('a[href="#' + e + '"] .panel-title').find("i").removeClass("fa-angle-up").addClass("fa-angle-down")
            }), $(".accordion-style3 .collapse").on("show.bs.collapse", function() {
                var e = $(this).attr("id");
                $('a[href="#' + e + '"]').closest(".panel-heading").addClass("active-accordion"), $('a[href="#' + e + '"] .panel-title').find("i").addClass("fa-angle-up").removeClass("fa-angle-down")
            }), $(".accordion-style3 .collapse").on("hide.bs.collapse", function() {
                var e = $(this).attr("id");
                $('a[href="#' + e + '"]').closest(".panel-heading").removeClass("active-accordion"), $('a[href="#' + e + '"] .panel-title').find("i").removeClass("fa-angle-up").addClass("fa-angle-down")
            }), $(".toggles .collapse").on("show.bs.collapse", function() {
                var e = $(this).attr("id");
                $('a[href="#' + e + '"]').closest(".panel-heading").addClass("active-accordion"), $('a[href="#' + e + '"] .panel-title span').html('<i class="ti-minus"></i>')
            }), $(".toggles .collapse").on("hide.bs.collapse", function() {
                var e = $(this).attr("id");
                $('a[href="#' + e + '"]').closest(".panel-heading").removeClass("active-accordion"), $('a[href="#' + e + '"] .panel-title span').html('<i class="ti-plus"></i>')
            }), $(".toggles-style2 .collapse").on("show.bs.collapse", function() {
                var e = $(this).attr("id");
                $('a[href="#' + e + '"]').closest(".panel-heading").addClass("active-accordion"), $('a[href="#' + e + '"] .panel-title span').html('<i class="fa fa-angle-up"></i>')
            }), $(".toggles-style2 .collapse").on("hide.bs.collapse", function() {
                var e = $(this).attr("id");
                $('a[href="#' + e + '"]').closest(".panel-heading").removeClass("active-accordion"), $('a[href="#' + e + '"] .panel-title span').html('<i class="fa fa-angle-down"></i>')
            }), a.on("mouseenter", ".blog-post-style4 .grid-item", function(e) {
                $(this).find("figcaption .blog-hover-text").slideDown(300)
            }), a.on("mouseleave", ".blog-post-style4 .grid-item", function(e) {
                $(this).find("figcaption .blog-hover-text").slideUp(300)
            }), x(), $("img:not([data-at2x])").attr("data-no-retina", ""), c.revolution.length && c.revolution.show().revolution({
                delay: 9e3,
                sliderLayout: "fullscreen",
                responsiveLevels: [1200, 992, 768, 480],
                gridwidth: [1200, 992, 768, 480],
                visibilityLevels: [1200, 992, 768, 480],
                minHeight: ["630", "630", "630", "500"],
                stopLoop: "on",
                stopAfterLoops: 0,
                stopAtSlide: 1,
                spinner: "spinner3",
                extensions: "js/extensions/",
                viewPort: {
                    enable: !0,
                    outof: "wait",
                    visible_area: "80%",
                    presize: !0
                },
                navigation: {
                    arrows: {
                        enable: !0,
                        hide_onleave: !0,
                        hide_onmobile: !0,
                        hide_under: 1360,
                        style: "uranus"
                    },
                    bullets: {
                        enable: !0,
                        style: "uranus",
                        hide_onleave: !1,
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 0,
                        v_offset: 20,
                        space: 10
                    },
                    touch: {
                        touchenabled: "on",
                        swipe_treshold: 75,
                        swipe_min_touches: 1,
                        drag_block_vertical: !1,
                        swipe_direction: "horizontal"
                    }
                },
                parallax: {
                    type: "scroll",
                    origo: "slidercenter",
                    speed: 1e3,
                    levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                    disable_onmobile: "on"
                }
            }), c.tilter.length) {
            var Pe = [{}, {
                movement: {
                    lines: {
                        translation: {
                            x: 40,
                            y: 40,
                            z: 0
                        },
                        reverseAnimation: {
                            duration: 1500,
                            easing: "easeOutElastic"
                        }
                    },
                    caption: {
                        translation: {
                            x: 20,
                            y: 20,
                            z: 0
                        },
                        rotation: {
                            x: 0,
                            y: 0,
                            z: -5
                        },
                        reverseAnimation: {
                            duration: 1e3,
                            easing: "easeOutExpo"
                        }
                    },
                    overlay: {
                        translation: {
                            x: -30,
                            y: -30,
                            z: 0
                        },
                        rotation: {
                            x: 0,
                            y: 0,
                            z: 3
                        },
                        reverseAnimation: {
                            duration: 750,
                            easing: "easeOutExpo"
                        }
                    },
                    shine: {
                        translation: {
                            x: 100,
                            y: 100,
                            z: 0
                        },
                        reverseAnimation: {
                            duration: 750,
                            easing: "easeOutExpo"
                        }
                    }
                }
            }, {
                movement: {
                    lines: {
                        translation: {
                            x: 40,
                            y: 40,
                            z: 0
                        },
                        reverseAnimation: {
                            duration: 1500,
                            easing: "easeOutElastic"
                        }
                    },
                    caption: {
                        translation: {
                            x: 20,
                            y: 20,
                            z: 0
                        },
                        rotation: {
                            x: 0,
                            y: 0,
                            z: -5
                        },
                        reverseAnimation: {
                            duration: 1e3,
                            easing: "easeOutExpo"
                        }
                    },
                    overlay: {
                        translation: {
                            x: -30,
                            y: -30,
                            z: 0
                        },
                        rotation: {
                            x: 0,
                            y: 0,
                            z: 3
                        },
                        reverseAnimation: {
                            duration: 750,
                            easing: "easeOutExpo"
                        }
                    },
                    shine: {
                        translation: {
                            x: 100,
                            y: 100,
                            z: 0
                        },
                        reverseAnimation: {
                            duration: 750,
                            easing: "easeOutExpo"
                        }
                    }
                }
            }];
            c.tilter.each(function(e, a) {
                var t = 0;
                t = e % 2 == 0 ? t + 1 : t, new TiltFx(a, Pe[t - 1])
            })
        }($("#rev_slider_1").length && $(".page").addClass("page-revolution"), t.load(function() {
            var e = window.location.hash.substr(1);
            "" != e && setTimeout(function() {
                t.imagesLoaded(function() {
                    var a = "#" + e;
                    $(a).length > 0 && $("html, body").stop().animate({
                        scrollTop: $(a).offset().top
                    }, 1200, "easeInOutExpo", function() {
                        window.location.hash = a
                    })
                })
            }, 500)
        }), u) && $("video").each(function() {
            this.autoplay = !1
        });
        u && $(".dropdown-menu").removeClass("animated")
    })
}();