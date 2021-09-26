(this["webpackJsonpthe-superhero-direction-rehanmosabbir"] = this["webpackJsonpthe-superhero-direction-rehanmosabbir"] || []).push([
    [0], {
        17: function(e, c, t) {},
        18: function(e, c, t) {},
        25: function(e, c, t) {},
        26: function(e, c, t) {},
        27: function(e, c, t) {
            "use strict";
            t.r(c);
            var s = t(2),
                n = t.n(s),
                a = t(11),
                r = t.n(a),
                i = (t(17), t(18), t(3)),
                l = t(4),
                d = t(0),
                j = function() {
                    return Object(d.jsxs)("div", {
                        className: "text-center  bg-light py-3",
                        children: [Object(d.jsxs)("h1", {
                            className: "fw-bolder",
                            children: ["Singing Superstars", Object(d.jsx)("sup", {
                                children: Object(d.jsx)("span", {
                                    className: "badge bg-warning text-white ms-2",
                                    children: "Pro"
                                })
                            })]
                        }), Object(d.jsx)("p", {
                            children: Object(d.jsx)("small", {
                                className: "text-warning fw-bolder",
                                children: "Singing That Comes From The Soul"
                            })
                        }), Object(d.jsxs)("h5", {
                            children: [Object(d.jsx)(i.a, {
                                className: "me-2 text-warning",
                                icon: l.b
                            }), "Total Budget: ", Object(d.jsx)("span", {
                                className: "fw-bold",
                                children: "2000 million dollar"
                            })]
                        })]
                    })
                },
                o = t(12),
                b = t(10),
                h = (t(25), function(e) {
                    var c = e.singerInfo,
                        t = c.name,
                        s = c.photo;
                    return Object(d.jsxs)("div", {
                        children: [Object(d.jsx)("hr", {}), Object(d.jsx)("div", {
                            className: "card mb-3 bg-dark text-warning ",
                            style: {
                                maxWidth: "540px"
                            },
                            children: Object(d.jsxs)("div", {
                                className: "row g-0",
                                children: [Object(d.jsx)("div", {
                                    className: "col-md-3",
                                    children: Object(d.jsx)("img", {
                                        src: s,
                                        className: "img-fluid rounded-start img-thumbnail",
                                        alt: "..."
                                    })
                                }), Object(d.jsx)("div", {
                                    className: "col-md-9",
                                    children: Object(d.jsx)("div", {
                                        className: "card-body",
                                        children: Object(d.jsx)("small", {
                                            className: "card-title",
                                            children: t
                                        })
                                    })
                                })]
                            })
                        })]
                    })
                }),
                m = function(e) {
                    var c = e.cart,
                        t = c.reduce((function(e, c) {
                            return e + c.earnings
                        }), 0);
                    return Object(d.jsxs)("div", {
                        className: "border p-2",
                        children: [Object(d.jsxs)("div", {
                            className: "text-center",
                            children: [Object(d.jsxs)("h4", {
                                children: [Object(d.jsx)(i.a, {
                                    className: "me-2 text-warning",
                                    icon: l.d
                                }), "Singers Added: ", c.length]
                            }), Object(d.jsxs)("h5", {
                                children: [Object(d.jsx)(i.a, {
                                    className: "me-2 text-warning",
                                    icon: l.a
                                }), "Total Cost: $ ", t]
                            })]
                        }), c.map((function(e) {
                            return Object(d.jsx)(h, {
                                singerInfo: e
                            }, e.id)
                        }))]
                    })
                },
                x = (t(26), function(e) {
                    var c = e.singerInfo,
                        t = c.name,
                        s = c.occupation,
                        n = c.age,
                        a = c.country,
                        r = c.earnings,
                        j = c.photo;
                    return Object(d.jsx)("div", {
                        className: "col-md-4 mb-5",
                        children: Object(d.jsxs)("div", {
                            className: "card",
                            style: {
                                width: "19rem"
                            },
                            children: [Object(d.jsx)("img", {
                                src: j,
                                className: "card-img-top img-thumbnail",
                                alt: "..."
                            }), Object(d.jsxs)("div", {
                                className: "card-body bg-light",
                                children: [Object(d.jsx)("h5", {
                                    className: "card-title",
                                    children: t
                                }), Object(d.jsx)("hr", {}), Object(d.jsxs)("p", {
                                    className: "card-text",
                                    children: [Object(d.jsx)("span", {
                                        className: "fw-bold",
                                        children: "Occupation :"
                                    }), " ", s]
                                }), Object(d.jsxs)("p", {
                                    className: "card-text",
                                    children: [Object(d.jsx)("span", {
                                        className: "fw-bold",
                                        children: "Age :"
                                    }), " ", n]
                                }), Object(d.jsxs)("p", {
                                    className: "card-text",
                                    children: [Object(d.jsx)("span", {
                                        className: "fw-bold",
                                        children: "Country :"
                                    }), " ", a]
                                }), Object(d.jsxs)("p", {
                                    className: "card-text",
                                    children: [Object(d.jsx)("span", {
                                        className: "fw-bold",
                                        children: "Earnings :"
                                    }), " $ ", r]
                                }), Object(d.jsxs)("button", {
                                    onClick: function() {
                                        return e.handleAddToCart(e.singerInfo)
                                    },
                                    className: "btn btn-warning text-white",
                                    children: [Object(d.jsx)(i.a, {
                                        className: "me-2",
                                        icon: l.c
                                    }), "Add to cart"]
                                })]
                            })]
                        })
                    })
                }),
                O = function() {
                    var e = Object(s.useState)([]),
                        c = Object(b.a)(e, 2),
                        t = c[0],
                        n = c[1],
                        a = Object(s.useState)([]),
                        r = Object(b.a)(a, 2),
                        i = r[0],
                        l = r[1],
                        j = function(e) {
                            var c = [].concat(Object(o.a)(i), [e]);
                            l(c)
                        };
                    return Object(s.useEffect)((function() {
                        fetch("/singerData.JSON").then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            return n(e)
                        }))
                    }), []), Object(d.jsx)("div", {
                        className: "container-fluid my-5",
                        children: Object(d.jsxs)("div", {
                            className: "row",
                            children: [Object(d.jsx)("div", {
                                className: "col-md-9",
                                children: Object(d.jsx)("div", {
                                    className: "row",
                                    children: t.map((function(e) {
                                        return Object(d.jsx)(x, {
                                            singerInfo: e,
                                            handleAddToCart: j
                                        }, e.id)
                                    }))
                                })
                            }), Object(d.jsx)("div", {
                                className: "col-md-3",
                                children: Object(d.jsx)(m, {
                                    cart: i
                                })
                            })]
                        })
                    })
                };
            var u = function() {
                    return Object(d.jsxs)("div", {
                        children: [Object(d.jsx)(j, {}), Object(d.jsx)(O, {})]
                    })
                },
                g = function(e) {
                    e && e instanceof Function && t.e(3).then(t.bind(null, 28)).then((function(c) {
                        var t = c.getCLS,
                            s = c.getFID,
                            n = c.getFCP,
                            a = c.getLCP,
                            r = c.getTTFB;
                        t(e), s(e), n(e), a(e), r(e)
                    }))
                };
            r.a.render(Object(d.jsx)(n.a.StrictMode, {
                children: Object(d.jsx)(u, {})
            }), document.getElementById("root")), g()
        }
    },
    [
        [27, 1, 2]
    ]
]);
//# sourceMappingURL=main.f65e1c25.chunk.js.map