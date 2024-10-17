sl.addType(
  false,
  "Colour",
  "Colour",
  ["Object"],
  ["red", "green", "blue", "alpha"],
);

sl.copyTraitToType(
  "Object",
  "Colour",
);

sl.addMethod(
  "Colour",
  "Colour",
  "equalsSign",
  ["self", "aColour"],
  function (_self, _aColour) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aColour";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalBy_3(_self, _aColour, _equalsSign_2);
  },
  "{ :self :aColour |\n\t\tself.equalBy(aColour, =)\n\t}",
);

sl.addMethod(
  "Colour",
  "Colour",
  "tilde",
  ["self", "aColour"],
  function (_self, _aColour) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aColour";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalBy_3(_self, _aColour, _tilde_2);
  },
  "{ :self :aColour |\n\t\tself.equalBy(aColour, ~)\n\t}",
);

sl.addMethod(
  "Colour",
  "Colour",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return [_red_1(_self), _green_1(_self), _blue_1(_self), _alpha_1(_self)];
  },
  "{ :self |\n\t\t[self.red, self.green, self.blue, self.alpha]\n\t}",
);

sl.addMethod(
  "Colour",
  "Colour",
  "asNontranslucentColor",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _alpha_2(_self, 1);
  },
  "{ :self |\n\t\tself.alpha := 1\n\t}",
);

sl.addMethod(
  "Colour",
  "Colour",
  "equalBy",
  ["self", "aColour", "aBlock:/2"],
  function (_self, _aColour, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aColour, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isColour_1(_aColour), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(
        _aBlock_2(_red_1(_self), _red_1(_aColour)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _ampersand_2(
            _aBlock_2(_green_1(_self), _green_1(_aColour)),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _ampersand_2(
                _aBlock_2(_blue_1(_self), _blue_1(_aColour)),
                function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    console.error(errorMessage);
                    throw new Error(errorMessage);
                  }
                  /* Statements */
                  return _aBlock_2(_alpha_1(_self), _alpha_1(_aColour));
                },
              );
            },
          );
        },
      );
    });
  },
  "{ :self :aColour :aBlock:/2 |\n\t\taColour.isColour & {\n\t\t\taBlock(self.red, aColour.red) & {\n\t\t\t\taBlock(self.green, aColour.green) & {\n\t\t\t\t\taBlock(self.blue, aColour.blue) & {\n\t\t\t\t\t\taBlock(self.alpha, aColour.alpha)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Colour",
  "Colour",
  "fromSrgb",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Colour_4(
      _srgbToLinear_1(_red_1(_self)),
      _srgbToLinear_1(_green_1(_self)),
      _srgbToLinear_1(_blue_1(_self)),
      _alpha_1(_self),
    );
  },
  "{ :self |\n\t\tColour(\n\t\t\tself.red.srgbToLinear,\n\t\t\tself.green.srgbToLinear,\n\t\t\tself.blue.srgbToLinear,\n\t\t\tself.alpha\n\t\t)\n\t}",
);

sl.addMethod(
  "Colour",
  "Colour",
  "hexString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(
      "#",
      _join_1(
        _collect_2(
          [_red_1(_self), _green_1(_self), _blue_1(_self)],
          function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _byteHexString_1(_rounded_1(_asterisk_2(_each, 255)));
          },
        ),
      ),
    );
  },
  "{ :self |\n\t\t'#' ++ [self.red, self.green, self.blue].collect { :each |\n\t\t\t(each * 255).rounded.byteHexString\n\t\t}.join\n\t}",
);

sl.addMethod(
  "Colour",
  "Colour",
  "hsv",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym57 = _assertIsOfSize_2([
        _red_1(_self),
        _green_1(_self),
        _blue_1(_self),
      ], 3),
      _r = _at_2(__genSym57, 1),
      _g = _at_2(__genSym57, 2),
      _b = _at_2(__genSym57, 3);
    let _v = _max_1([_r, _g, _b]);
    let _c = _hyphenMinus_2(_v, _min_1([_r, _g, _b]));
    let _s = _if_3(_equalsSign_2(_v, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _solidus_2(_c, _v);
    });
    let _h = _if_3(_equalsSign_2(_c, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_v, _r), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _asterisk_2(
          60,
          _percentSign_2(_solidus_2(_hyphenMinus_2(_g, _b), _c), 6),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _if_3(_equalsSign_2(_v, _g), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _asterisk_2(
            60,
            _plusSign_2(_solidus_2(_hyphenMinus_2(_b, _r), _c), 2),
          );
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _asterisk_2(
            60,
            _plusSign_2(_solidus_2(_hyphenMinus_2(_r, _g), _c), 4),
          );
        });
      });
    });
    /* Statements */
    return [_solidus_2(_h, 360), _s, _v];
  },
  "{ :self |\n\t\tlet [r, g, b] = [self.red, self.green, self.blue];\n\t\tlet v = [r g b].max;\n\t\tlet c = v - [r g b].min;\n\t\tlet s = (v = 0).if { 0 } { c / v };\n\t\tlet h = (c = 0).if {\n\t\t\t0\n\t\t} {\n\t\t\t(v = r).if {\n\t\t\t\t60 * ((g - b) / c % 6)\n\t\t\t} {\n\t\t\t\t(v = g).if {\n\t\t\t\t\t60 * ((b - r) / c + 2)\n\t\t\t\t} {\n\t\t\t\t\t60 * ((r - g) / c + 4)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\t[h / 360, s, v]\n\t}",
);

sl.addMethod(
  "Colour",
  "Colour",
  "hue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _first_1(_hsv_1(_self));
  },
  "{ :self |\n\t\tself.hsv.first\n\t}",
);

sl.addMethod(
  "Colour",
  "Colour",
  "isBlack",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isGreyOf_2(_self, 0);
  },
  "{ :self |\n\t\tself.isGreyOf(0)\n\t}",
);

sl.addMethod(
  "Colour",
  "Colour",
  "isBlue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(
      _greaterThanSign_2(_blue_1(_self), _plusSign_2(_green_1(_self), 0.3)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ampersand_2(
          _greaterThanSign_2(_blue_1(_self), _plusSign_2(_red_1(_self), 0.3)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _lessThanSign_2(
              _abs_1(_hyphenMinus_2(_green_1(_self), _red_1(_self))),
              0.4,
            );
          },
        );
      },
    );
  },
  "{ :self |\n\t\tself.blue > (self.green + 0.3) & {\n\t\t\tself.blue > (self.red + 0.3) & {\n\t\t\t\t(self.green - self.red).abs < 0.4\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Colour",
  "Colour",
  "isCyan",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_lessThanSign_2(_red_1(_self), 0.05), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(
        _greaterThanSign_2(_min_2(_green_1(_self), _blue_1(_self)), 0.5),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _lessThanSign_2(
            _abs_1(_hyphenMinus_2(_green_1(_self), _blue_1(_self))),
            0.2,
          );
        },
      );
    });
  },
  "{ :self |\n\t\tself.red < 0.05 & {\n\t\t\tself.green.min(self.blue) > 0.5 & {\n\t\t\t\t(self.green - self.blue).abs < 0.2\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Colour",
  "Colour",
  "isGreen",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(
      _greaterThanSign_2(_green_1(_self), _plusSign_2(_blue_1(_self), 0.3)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _greaterThanSign_2(
          _green_1(_self),
          _plusSign_2(_red_1(_self), 0.3),
        );
      },
    );
  },
  "{ :self |\n\t\tself.green > (self.blue + 0.3) & {\n\t\t\tself.green > (self.red + 0.3)\n\t\t}\n\t}",
);

sl.addMethod(
  "Colour",
  "Colour",
  "isGrey",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _value = _red_1(_self);
    /* Statements */
    return _ampersand_2(_equalsSign_2(_green_1(_self), _value), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(_equalsSign_2(_blue_1(_self), _value), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ampersand_2(_tildeEqualsSign_2(_value, 1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _tildeEqualsSign_2(_value, 0);
        });
      });
    });
  },
  "{ :self |\n\t\tlet value = self.red;\n\t\tself.green = value & {\n\t\t\tself.blue = value & {\n\t\t\t\tvalue ~= 1 & {\n\t\t\t\t\tvalue ~= 0\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Colour",
  "Colour",
  "isGreyOf",
  ["self", "value"],
  function (_self, _value) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _value";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_equalsSign_2(_red_1(_self), _value), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(_equalsSign_2(_green_1(_self), _value), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_blue_1(_self), _value);
      });
    });
  },
  "{ :self :value |\n\t\tself.red = value & {\n\t\t\tself.green = value & {\n\t\t\t\tself.blue = value\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Colour",
  "Colour",
  "isMagenta",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_lessThanSign_2(_green_1(_self), 0.05), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(
        _greaterThanSign_2(_min_2(_red_1(_self), _blue_1(_self)), 0.4),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _lessThanSign_2(
            _abs_1(_hyphenMinus_2(_red_1(_self), _blue_1(_self))),
            0.3,
          );
        },
      );
    });
  },
  "{ :self |\n\t\tself.green < 0.05 & {\n\t\t\tself.red.min(self.blue) > 0.4 & {\n\t\t\t\t(self.red - self.blue).abs < 0.3\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Colour",
  "Colour",
  "isOpaque",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_alpha_1(_self), 1);
  },
  "{ :self |\n\t\tself.alpha = 1\n\t}",
);

sl.addMethod(
  "Colour",
  "Colour",
  "isRed",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(
      _greaterThanSign_2(_red_1(_self), _plusSign_2(_green_1(_self), 0.4)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ampersand_2(
          _greaterThanSign_2(_red_1(_self), _plusSign_2(_blue_1(_self), 0.6)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _lessThanSign_2(
              _abs_1(_hyphenMinus_2(_green_1(_self), _blue_1(_self))),
              0.4,
            );
          },
        );
      },
    );
  },
  "{ :self |\n\t\tself.red > (self.green + 0.4) & {\n\t\t\tself.red > (self.blue + 0.6) & {\n\t\t\t\t(self.green - self.blue).abs < 0.4\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Colour",
  "Colour",
  "isTransparent",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_alpha_1(_self), 0);
  },
  "{ :self |\n\t\tself.alpha = 0\n\t}",
);

sl.addMethod(
  "Colour",
  "Colour",
  "isWhite",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isGreyOf_2(_self, 1);
  },
  "{ :self |\n\t\tself.isGreyOf(1)\n\t}",
);

sl.addMethod(
  "Colour",
  "Colour",
  "isYellow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_lessThanSign_2(_blue_1(_self), 0.1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(
        _greaterThanSign_2(_min_2(_red_1(_self), _green_1(_self)), 0.5),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _lessThanSign_2(
            _abs_1(_hyphenMinus_2(_red_1(_self), _green_1(_self))),
            0.2,
          );
        },
      );
    });
  },
  "{ :self |\n\t\tself.blue < 0.1 & {\n\t\t\tself.red.min(self.green) > 0.5 & {\n\t\t\t\t(self.red - self.green).abs < 0.2\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Colour",
  "Colour",
  "negated",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Colour_4(
      _hyphenMinus_2(1, _red_1(_self)),
      _hyphenMinus_2(1, _green_1(_self)),
      _hyphenMinus_2(1, _blue_1(_self)),
      _alpha_1(_self),
    );
  },
  "{ :self |\n\t\tColour(1 - self.red, 1 - self.green, 1 - self.blue, self.alpha)\n\t}",
);

sl.addMethod(
  "Colour",
  "Colour",
  "over",
  ["self", "aColour"],
  function (_self, _aColour) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aColour";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _alpha = _hyphenMinus_2(
      1,
      _asterisk_2(
        _hyphenMinus_2(1, _alpha_1(_aColour)),
        _hyphenMinus_2(1, _alpha_1(_self)),
      ),
    );
    /* Statements */
    return _Colour_4(
      _plusSign_2(
        _solidus_2(_asterisk_2(_red_1(_aColour), _alpha_1(_aColour)), _alpha),
        _solidus_2(
          _asterisk_2(
            _asterisk_2(_red_1(_self), _alpha_1(_self)),
            _hyphenMinus_2(1, _alpha_1(_aColour)),
          ),
          _alpha,
        ),
      ),
      _plusSign_2(
        _solidus_2(_asterisk_2(_green_1(_aColour), _alpha_1(_aColour)), _alpha),
        _solidus_2(
          _asterisk_2(
            _asterisk_2(_green_1(_self), _alpha_1(_self)),
            _hyphenMinus_2(1, _alpha_1(_aColour)),
          ),
          _alpha,
        ),
      ),
      _plusSign_2(
        _solidus_2(_asterisk_2(_blue_1(_aColour), _alpha_1(_aColour)), _alpha),
        _solidus_2(
          _asterisk_2(
            _asterisk_2(_blue_1(_self), _alpha_1(_self)),
            _hyphenMinus_2(1, _alpha_1(_aColour)),
          ),
          _alpha,
        ),
      ),
      _alpha,
    );
  },
  "{ :self :aColour |\n\t\tlet alpha = 1 - ((1 - aColour.alpha) * (1 - self.alpha));\n\t\tColour(\n\t\t\t(aColour.red * aColour.alpha / alpha) + (self.red * self.alpha * (1 - aColour.alpha) / alpha),\n\t\t\t(aColour.green * aColour.alpha / alpha) + (self.green * self.alpha * (1 - aColour.alpha) / alpha),\n\t\t\t(aColour.blue * aColour.alpha / alpha) + (self.blue * self.alpha * (1 - aColour.alpha) / alpha),\n\t\t\talpha\n\t\t)\n\t}",
);

sl.addMethod(
  "Colour",
  "Colour",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _join_1([
      "Colour(",
      _join_2(
        _collect_2([
          _red_1(_self),
          _green_1(_self),
          _blue_1(_self),
          _alpha_1(_self),
        ], _storeString_1),
        ", ",
      ),
      ")",
    ]);
  },
  "{ :self |\n\t\t[\n\t\t\t'Colour(',\n\t\t\t[\n\t\t\t\tself.red,\n\t\t\t\tself.green,\n\t\t\t\tself.blue,\n\t\t\t\tself.alpha\n\t\t\t].collect(storeString:/1).join(', '),\n\t\t\t')'\n\t\t].join\n\t}",
);

sl.addMethod(
  "Colour",
  "Colour",
  "toSrgb",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Colour_4(
      _srgbFromLinear_1(_red_1(_self)),
      _srgbFromLinear_1(_green_1(_self)),
      _srgbFromLinear_1(_blue_1(_self)),
      _alpha_1(_self),
    );
  },
  "{ :self |\n\t\tColour(\n\t\t\tself.red.srgbFromLinear,\n\t\t\tself.green.srgbFromLinear,\n\t\t\tself.blue.srgbFromLinear,\n\t\t\tself.alpha\n\t\t)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Colour",
  "Colour",
  ["self", "g", "b"],
  function (_self, _g, _b) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _g, _b";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Colour_4(_self, _g, _b, 1);
  },
  "{ :self :g :b |\n\t\tColour(self, g, b, 1)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Colour",
  "Colour",
  ["self", "g", "b", "a"],
  function (_self, _g, _b, _a) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _g, _b, _a";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_5(_newColour_0(), _self, _g, _b, _a);
  },
  "{ :self :g :b :a |\n\t\tnewColour().initializeSlots(self, g, b, a)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Colour",
  "greyLevel",
  ["level", "alpha"],
  function (_level, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _level, _alpha";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Colour_4(_level, _level, _level, _alpha);
  },
  "{ :level :alpha |\n\t\tColour(level, level, level, alpha)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Colour",
  "greyLevel",
  ["level"],
  function (_level) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _level";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _greyLevel_2(_level, 1);
  },
  "{ :level |\n\t\tlevel.greyLevel(1)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Colour",
  "Hsv",
  ["hue", "saturation", "brightness"],
  function (_hue, _saturation, _brightness) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _hue, _saturation, _brightness";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _s = _max_2(_min_2(_saturation, 1), 0);
    let _v = _max_2(_min_2(_brightness, 1), 0);
    let _h = _percentSign_2(_asterisk_2(_hue, 360), 360);
    let _i = _solidusSolidus_2(_h, 60);
    let _f = _solidus_2(_percentSign_2(_h, 60), 60);
    let _p = _asterisk_2(_hyphenMinus_2(1, _s), _v);
    let _q = _asterisk_2(_hyphenMinus_2(1, _asterisk_2(_s, _f)), _v);
    let _t = _asterisk_2(
      _hyphenMinus_2(1, _asterisk_2(_s, _hyphenMinus_2(1, _f))),
      _v,
    );
    /* Statements */
    return _caseOfOtherwise_3(_i, [
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return 0;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _Colour_3(_v, _t, _p);
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return 1;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _Colour_3(_q, _v, _p);
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return 2;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _Colour_3(_p, _v, _t);
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return 3;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _Colour_3(_p, _q, _v);
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return 4;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _Colour_3(_t, _p, _v);
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return 5;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _Colour_3(_v, _p, _q);
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "Hsv: implementation error");
    });
  },
  "{ :hue :saturation :brightness |\n\t\tlet s = saturation.min(1).max(0);\n\t\tlet v = brightness.min(1).max(0);\n\t\tlet h = (hue * 360) % 360;\n\t\tlet i = h // 60;\n\t\tlet f = (h % 60) / 60;\n\t\tlet p = (1 - s) * v;\n\t\tlet q = (1 - (s * f)) * v;\n\t\tlet t = (1 - (s * (1 - f))) * v;\n\t\ti.caseOfOtherwise([\n\t\t\t{ 0 } ->  { Colour(v, t, p) },\n\t\t\t{ 1 } ->  { Colour(q, v, p) },\n\t\t\t{ 2 } ->  { Colour(p, v, t) },\n\t\t\t{ 3 } ->  { Colour(p, q, v) },\n\t\t\t{ 4 } ->  { Colour(t, p, v) },\n\t\t\t{ 5 } ->  { Colour(v, p, q) }\n\t\t]) {\n\t\t\tself.error('Hsv: implementation error')\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Colour",
  "srgbFromLinear",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_self, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_lessThanSignEqualsSign_2(_self, 0.0031308), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _asterisk_2(12.92, _self);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _a = 0.055;
        /* Statements */
        return _hyphenMinus_2(
          _asterisk_2(
            _plusSign_2(1, _a),
            _circumflexAccent_2(_self, _solidus_2(1, 2.4)),
          ),
          _a,
        );
      });
    });
  },
  "{ :self |\n\t\t(self = 1).if {\n\t\t\t1\n\t\t} {\n\t\t\t(self <= 0.0031308).if {\n\t\t\t\t12.92 * self\n\t\t\t} {\n\t\t\t\tlet a = 0.055;\n\t\t\t\t(1 + a) * (self ^ (1 / 2.4)) - a\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Colour",
  "srgbToLinear",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_self, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_lessThanSignEqualsSign_2(_self, 0.04045), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _solidus_2(_self, 12.92);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _a = 0.055;
        /* Statements */
        return _circumflexAccent_2(
          _solidus_2(_plusSign_2(_self, _a), _plusSign_2(1, _a)),
          2.4,
        );
      });
    });
  },
  "{ :self |\n\t\t(self = 1).if {\n\t\t\t1\n\t\t} {\n\t\t\t(self <= 0.04045).if {\n\t\t\t\tself / 12.92\n\t\t\t} {\n\t\t\t\tlet a = 0.055;\n\t\t\t\t((self + a) / (1 + a)) ^ 2.4\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Colour",
  "asColour",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _caseOf_2(_size_1(_self), [
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return 3;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let __genSym58 = _assertIsOfSize_2(_self, 3),
          _r = _at_2(__genSym58, 1),
          _g = _at_2(__genSym58, 2),
          _b = _at_2(__genSym58, 3);
        /* Statements */
        return _Colour_4(_r, _g, _b, 1);
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return 4;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let __genSym59 = _assertIsOfSize_2(_self, 4),
          _r = _at_2(__genSym59, 1),
          _g = _at_2(__genSym59, 2),
          _b = _at_2(__genSym59, 3),
          _a = _at_2(__genSym59, 4);
        /* Statements */
        return _Colour_4(_r, _g, _b, _a);
      }),
    ]);
  },
  "{ :self |\n\t\tself.size.caseOf([\n\t\t\t{ 3 } -> {\n\t\t\t\tlet [r, g, b] = self;\n\t\t\t\tColour(r, g, b, 1)\n\t\t\t},\n\t\t\t{ 4 } -> {\n\t\t\t\tlet [r, g, b, a] = self;\n\t\t\t\tColour(r, g, b, a)\n\t\t\t}\n\t\t])\n\t}",
);

sl.addMethod(
  "List",
  "Colour",
  "hsvToRgb",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym60 = _assertIsOfSize_2(_asFloat_1(_self), 3),
      _h = _at_2(__genSym60, 1),
      _s = _at_2(__genSym60, 2),
      _v = _at_2(__genSym60, 3);
    let __genSym61 = _assertIsOfSize_2(_asList_1(_Hsv_3(_h, _s, _v)), 4),
      _r = _at_2(__genSym61, 1),
      _g = _at_2(__genSym61, 2),
      _b = _at_2(__genSym61, 3),
      _a = _at_2(__genSym61, 4);
    /* Statements */
    return [_r, _g, _b];
  },
  "{ :self |\n\t\tlet [h, s, v] = self.asFloat;\n\t\tlet [r, g, b, a] = Hsv(h, s, v).asList;\n\t\t[r g b]\n\t}",
);

sl.addMethod(
  "List",
  "Colour",
  "rgbToHsv",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym62 = _assertIsOfSize_2(_asFloat_1(_self), 3),
      _r = _at_2(__genSym62, 1),
      _g = _at_2(__genSym62, 2),
      _b = _at_2(__genSym62, 3);
    /* Statements */
    return _hsv_1(_Colour_4(_r, _g, _b, 1));
  },
  "{ :self |\n\t\tlet [r, g, b] = self.asFloat;\n\t\tColour(r, g, b, 1).hsv\n\t}",
);

sl.addMethod(
  "String",
  "Colour",
  "parseHexColour",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_size_1(_self), 7), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _r = _copyFromTo_3(_self, 2, 3);
      let _g = _copyFromTo_3(_self, 4, 5);
      let _b = _copyFromTo_3(_self, 6, 7);
      /* Statements */
      return _asColour_1(_collect_2([_r, _g, _b, "ff"], function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _solidus_2(_parseInteger_2(_each, 16), 255);
      }));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "parseHexColour");
    });
  },
  "{ :self |\n\t\t(self.size = 7).if {\n\t\t\tlet r = self.copyFromTo(2, 3);\n\t\t\tlet g = self.copyFromTo(4, 5);\n\t\t\tlet b = self.copyFromTo(6, 7);\n\t\t\t[r, g, b, 'ff'].collect { :each |\n\t\t\t\teach.parseInteger(16) / 255\n\t\t\t}.asColour\n\t\t} {\n\t\t\tself.error('parseHexColour')\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Cache",
  "Colour",
  "colourNameTable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _cached_3(_self, "colourNameTable", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return Object.fromEntries([
        ["black", _Colour_3(0, 0, 0)],
        ["veryVeryDarkGray", _Colour_3(0.125, 0.125, 0.125)],
        ["veryDarkGray", _Colour_3(0.25, 0.25, 0.25)],
        ["darkGray", _Colour_3(0.375, 0.375, 0.375)],
        ["gray", _Colour_3(0.5, 0.5, 0.5)],
        ["lightGray", _Colour_3(0.625, 0.625, 0.625)],
        ["veryLightGray", _Colour_3(0.75, 0.75, 0.75)],
        ["veryVeryLightGray", _Colour_3(0.875, 0.875, 0.875)],
        ["white", _Colour_3(1, 1, 1.0)],
        ["red", _Colour_3(1, 0, 0)],
        ["yellow", _Colour_3(1, 1, 0)],
        ["green", _Colour_3(0, 1, 0)],
        ["cyan", _Colour_3(0, 1, 1.0)],
        ["blue", _Colour_3(0, 0, 1.0)],
        ["magenta", _Colour_3(1, 0, 1.0)],
        ["brown", _Colour_3(0.6, 0.2, 0)],
        ["orange", _Colour_3(1, 0.6, 0)],
        ["lightRed", _Colour_3(1, 0.8, 0.8)],
        ["lightYellow", _Colour_3(1, 1, 0.8)],
        ["lightGreen", _Colour_3(0.8, 1, 0.6)],
        ["lightCyan", _Colour_3(0.4, 1, 1.0)],
        ["lightBlue", _Colour_3(0.8, 1, 1.0)],
        ["lightMagenta", _Colour_3(1, 0.8, 1.0)],
        ["lightBrown", _Colour_3(1, 0.6, 0.2)],
        ["lightOrange", _Colour_3(1, 0.8, 0.4)],
        ["transparent", _Colour_4(0, 0, 0, 0)],
        [
          "paleBuff",
          _Colour_3(
            _solidus_2(254, 255),
            _solidus_2(250, 255),
            _solidus_2(235, 255),
          ),
        ],
        [
          "paleBlue",
          _Colour_3(
            _solidus_2(222, 255),
            _solidus_2(249, 255),
            _solidus_2(254, 255),
          ),
        ],
        [
          "paleYellow",
          _Colour_3(
            _solidus_2(255, 255),
            _solidus_2(255, 255),
            _solidus_2(217, 255),
          ),
        ],
        [
          "paleGreen",
          _Colour_3(
            _solidus_2(223, 255),
            _solidus_2(255, 255),
            _solidus_2(213, 255),
          ),
        ],
        [
          "paleRed",
          _Colour_3(
            _solidus_2(255, 255),
            _solidus_2(230, 255),
            _solidus_2(230, 255),
          ),
        ],
        [
          "veryPaleRed",
          _Colour_3(
            _solidus_2(255, 255),
            _solidus_2(242, 255),
            _solidus_2(242, 255),
          ),
        ],
        [
          "paleTan",
          _Colour_3(
            _solidus_2(235, 255),
            _solidus_2(224, 255),
            _solidus_2(199, 255),
          ),
        ],
        [
          "paleMagenta",
          _Colour_3(
            _solidus_2(255, 255),
            _solidus_2(230, 255),
            _solidus_2(255, 255),
          ),
        ],
        [
          "paleOrange",
          _Colour_3(
            _solidus_2(253, 255),
            _solidus_2(237, 255),
            _solidus_2(215, 255),
          ),
        ],
        [
          "palePeach",
          _Colour_3(
            _solidus_2(255, 255),
            _solidus_2(237, 255),
            _solidus_2(213, 255),
          ),
        ],
        [
          "pantonePurple",
          _Colour_3(
            _solidus_2(193, 255),
            _solidus_2(81, 255),
            _solidus_2(184, 255),
          ),
        ],
      ]);
    });
  },
  "{ :self |\n\t\tself.cached('colourNameTable') {\n\t\t\t(\n\t\t\t\tblack: Colour(0, 0, 0),\n\t\t\t\tveryVeryDarkGray: Colour(0.125, 0.125, 0.125),\n\t\t\t\tveryDarkGray: Colour(0.25, 0.25, 0.25),\n\t\t\t\tdarkGray: Colour(0.375, 0.375, 0.375),\n\t\t\t\tgray: Colour(0.5, 0.5, 0.5),\n\t\t\t\tlightGray: Colour(0.625, 0.625, 0.625),\n\t\t\t\tveryLightGray: Colour(0.75, 0.75, 0.75),\n\t\t\t\tveryVeryLightGray: Colour(0.875, 0.875, 0.875),\n\t\t\t\twhite: Colour(1, 1, 1.0),\n\t\t\t\tred: Colour(1, 0, 0),\n\t\t\t\tyellow: Colour(1, 1, 0),\n\t\t\t\tgreen: Colour(0, 1, 0),\n\t\t\t\tcyan: Colour(0, 1, 1.0),\n\t\t\t\tblue: Colour(0, 0, 1.0),\n\t\t\t\tmagenta: Colour(1, 0, 1.0),\n\t\t\t\tbrown: Colour(0.6, 0.2, 0),\n\t\t\t\torange: Colour(1, 0.6, 0),\n\t\t\t\tlightRed: Colour(1, 0.8, 0.8),\n\t\t\t\tlightYellow: Colour(1, 1, 0.8),\n\t\t\t\tlightGreen: Colour(0.8, 1, 0.6),\n\t\t\t\tlightCyan: Colour(0.4, 1, 1.0),\n\t\t\t\tlightBlue: Colour(0.8, 1, 1.0),\n\t\t\t\tlightMagenta: Colour(1, 0.8, 1.0),\n\t\t\t\tlightBrown: Colour(1, 0.6, 0.2),\n\t\t\t\tlightOrange: Colour(1, 0.8, 0.4),\n\t\t\t\ttransparent: Colour(0, 0, 0, 0),\n\t\t\t\tpaleBuff: Colour(254 / 255, 250 / 255, 235 / 255),\n\t\t\t\tpaleBlue: Colour(222 / 255, 249 / 255, 254 / 255),\n\t\t\t\tpaleYellow: Colour(255 / 255, 255 / 255, 217 / 255),\n\t\t\t\tpaleGreen: Colour(223 / 255, 255 / 255, 213 / 255),\n\t\t\t\tpaleRed: Colour(255 / 255, 230 / 255, 230 / 255),\n\t\t\t\tveryPaleRed: Colour(255 / 255, 242 / 255, 242 / 255),\n\t\t\t\tpaleTan: Colour(235 / 255, 224 / 255, 199 / 255),\n\t\t\t\tpaleMagenta: Colour(255 / 255, 230 / 255, 255 / 255),\n\t\t\t\tpaleOrange: Colour(253 / 255, 237 / 255, 215 / 255),\n\t\t\t\tpalePeach: Colour(255 / 255, 237 / 255, 213 / 255),\n\t\t\t\tpantonePurple: Colour(193 / 255, 81 / 255, 184 / 255)\n\t\t\t)\n\t\t}\n\n\t}",
);
