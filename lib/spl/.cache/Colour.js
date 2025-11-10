sl.addTrait("Colour", "Colour");

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "alpha",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "alpha");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('alpha')\n\t}",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "asColour",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "blue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _third_1(_rgb_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.rgb.third\n\t}",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "drawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Svg_1(
      _unlines_1([
        '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">',
        _format_2('<rect x="0" y="0" width="100" height="100" fill="%"/>', [
          _hexTriplet_1(_self),
        ]),
        "</svg>",
      ]),
    );
  }, ["self"]),
  '{ :self |\n\t\t[\n\t\t\t\'<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">\',\n\t\t\t\'<rect x="0" y="0" width="100" height="100" fill="%"/>\'.format([\n\t\t\t\tself.hexTriplet\n\t\t\t]),\n\t\t\t\'</svg>\'\n\t\t].unlines.Svg\n\t}',
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "green",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _second_1(_rgb_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.rgb.second\n\t}",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "hexTriplet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _if_3(
      _equalsSign_2(_alpha_1(_self), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _rgb_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _rgba_1(_self);
      }, []),
    );
    /* Statements */
    return _plusSignPlusSign_2(
      "#",
      _stringCatenate_1(_collect_2(
        _c,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _byteHexString_1(_round_1(_asterisk_2(_each, 255)));
        }, ["each"]),
      )),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet c = (self.alpha = 1).if { self.rgb } { self.rgba };\n\t\t'#' ++ c.collect { :each |\n\t\t\t(each * 255).round.byteHexString\n\t\t}.stringCatenate\n\t}",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "hsv",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _rgbToHsv_1(_rgb_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.rgb.rgbToHsv\n\t}",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "hue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _first_1(_hsv_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.hsv.first\n\t}",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "isBlack",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isGreyOf_2(_self, 0);
  }, ["self"]),
  "{ :self |\n\t\tself.isGreyOf(0)\n\t}",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "isBlue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _greaterThanSign_2(_blue_1(_self), _plusSign_2(_green_1(_self), 0.3)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _greaterThanSign_2(_blue_1(_self), _plusSign_2(_red_1(_self), 0.3)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(
              _abs_1(_hyphenMinus_2(_green_1(_self), _red_1(_self))),
              0.4,
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.blue > (self.green + 0.3) & {\n\t\t\tself.blue > (self.red + 0.3) & {\n\t\t\t\t(self.green - self.red).abs < 0.4\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "isCyan",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _lessThanSign_2(_red_1(_self), 0.05),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _greaterThanSign_2(_min_2(_green_1(_self), _blue_1(_self)), 0.5),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(
              _abs_1(_hyphenMinus_2(_green_1(_self), _blue_1(_self))),
              0.2,
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.red < 0.05 & {\n\t\t\tself.green.min(self.blue) > 0.5 & {\n\t\t\t\t(self.green - self.blue).abs < 0.2\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "isGreen",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _greaterThanSign_2(_green_1(_self), _plusSign_2(_blue_1(_self), 0.3)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(
          _green_1(_self),
          _plusSign_2(_red_1(_self), 0.3),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.green > (self.blue + 0.3) & {\n\t\t\tself.green > (self.red + 0.3)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "isGrey",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _value = _red_1(_self);
    /* Statements */
    return _ampersand_2(
      _equalsSign_2(_green_1(_self), _value),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_blue_1(_self), _value),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _exclamationMarkEqualsSign_2(_value, 1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _exclamationMarkEqualsSign_2(_value, 0);
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet value = self.red;\n\t\tself.green = value & {\n\t\t\tself.blue = value & {\n\t\t\t\tvalue != 1 & {\n\t\t\t\t\tvalue != 0\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "isGreyOf",
  ["self", "value"],
  sl.annotateFunction(function (_self, _value) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _value";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _equalsSign_2(_red_1(_self), _value),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_green_1(_self), _value),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_blue_1(_self), _value);
          }, []),
        );
      }, []),
    );
  }, ["self", "value"]),
  "{ :self :value |\n\t\tself.red = value & {\n\t\t\tself.green = value & {\n\t\t\t\tself.blue = value\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "isMagenta",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _lessThanSign_2(_green_1(_self), 0.05),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _greaterThanSign_2(_min_2(_red_1(_self), _blue_1(_self)), 0.4),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(
              _abs_1(_hyphenMinus_2(_red_1(_self), _blue_1(_self))),
              0.3,
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.green < 0.05 & {\n\t\t\tself.red.min(self.blue) > 0.4 & {\n\t\t\t\t(self.red - self.blue).abs < 0.3\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "isOpaque",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_alpha_1(_self), 1);
  }, ["self"]),
  "{ :self |\n\t\tself.alpha = 1\n\t}",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "isRed",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _greaterThanSign_2(_red_1(_self), _plusSign_2(_green_1(_self), 0.4)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _greaterThanSign_2(_red_1(_self), _plusSign_2(_blue_1(_self), 0.6)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(
              _abs_1(_hyphenMinus_2(_green_1(_self), _blue_1(_self))),
              0.4,
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.red > (self.green + 0.4) & {\n\t\t\tself.red > (self.blue + 0.6) & {\n\t\t\t\t(self.green - self.blue).abs < 0.4\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "isTransparent",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_alpha_1(_self), 0);
  }, ["self"]),
  "{ :self |\n\t\tself.alpha = 0\n\t}",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "isWhite",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isGreyOf_2(_self, 1);
  }, ["self"]),
  "{ :self |\n\t\tself.isGreyOf(1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "isYellow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _lessThanSign_2(_blue_1(_self), 0.1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _greaterThanSign_2(_min_2(_red_1(_self), _green_1(_self)), 0.5),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(
              _abs_1(_hyphenMinus_2(_red_1(_self), _green_1(_self))),
              0.2,
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.blue < 0.1 & {\n\t\t\tself.red.min(self.green) > 0.5 & {\n\t\t\t\t(self.red - self.green).abs < 0.2\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "isValid",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isValidRgba_1(_rgba_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.rgba.isValidRgba\n\t}",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "linearRgb",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _rgb_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.rgb\n\t}",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "red",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _first_1(_rgb_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.rgb.first\n\t}",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "rgba",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(_rgb_1(_self), [_alpha_1(_self)]);
  }, ["self"]),
  "{ :self |\n\t\tself.rgb ++ [self.alpha]\n\t}",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "rgb",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "rgb");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('rgb')\n\t}",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "rgbString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isValid_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar1 = _assertIsOfSize_2(
          _round_1(_asterisk_2(_rgb_1(_self), 255)),
          3,
        );
        let _r = _at_2(__SplVar1, 1);
        let _g = _at_2(__SplVar1, 2);
        let _b = _at_2(__SplVar1, 3);
        let _alpha = _alpha_1(_self);
        /* Statements */
        return _if_3(
          _equalsSign_2(_alpha, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _format_2("rgb(%,%,%)", [_r, _g, _b]);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _format_2("rgba(%,%,%,%)", [_r, _g, _b, _alpha]);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return "rgba(255,255,255,0)";
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isValid.if {\n\t\t\tlet [r, g, b] = (self.rgb * 255).round;\n\t\t\tlet alpha = self.alpha;\n\t\t\t(alpha = 1).if {\n\t\t\t\t'rgb(%,%,%)'.format([r, g, b])\n\t\t\t} {\n\t\t\t\t'rgba(%,%,%,%)'.format([r, g, b, alpha])\n\t\t\t}\n\t\t} {\n\t\t\t'rgba(255,255,255,0)'\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addType(
  false,
  "RgbColour",
  "Colour",
  ["Object", "Equatable", "Colour"],
  ["rgb", "alpha"],
);

sl.copyTraitMethodsToType(
  "Object",
  "RgbColour",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "RgbColour",
);

sl.copyTraitMethodsToType(
  "Colour",
  "RgbColour",
);

sl.addMethodToExistingType(
  "RgbColour",
  "Colour",
  "lighten",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _RgbColour_2(
      _linearInterpolation_3(_rgb_1(_self), [1, 1, 1], _aNumber),
      _alpha_1(_self),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tRgbColour(\n\t\t\tself.rgb.linearInterpolation([1 1 1], aNumber),\n\t\t\tself.alpha\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "RgbColour",
  "Colour",
  "negate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _RgbColour_2(_hyphenMinus_2(1, _rgb_1(_self)), _alpha_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tRgbColour(\n\t\t\t1 - self.rgb,\n\t\t\tself.alpha\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "RgbColour",
  "Colour",
  "over",
  ["self", "aColour"],
  sl.annotateFunction(function (_self, _aColour) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aColour";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _alpha = _hyphenMinus_2(
      1,
      _asterisk_2(
        _hyphenMinus_2(1, _alpha_1(_aColour)),
        _hyphenMinus_2(1, _alpha_1(_self)),
      ),
    );
    let _m = _solidus_2(
      _asterisk_2(_alpha_1(_self), _hyphenMinus_2(1, _alpha_1(_aColour))),
      _alpha,
    );
    let _n = _solidus_2(_alpha_1(_aColour), _alpha);
    /* Statements */
    return _RgbColour_2(
      _plusSign_2(
        _asterisk_2(_rgb_1(_self), _m),
        _asterisk_2(_rgb_1(_aColour), _n),
      ),
      _alpha,
    );
  }, ["self", "aColour"]),
  "{ :self :aColour |\n\t\tlet alpha = 1 - ((1 - aColour.alpha) * (1 - self.alpha));\n\t\tlet m = self.alpha * (1 - aColour.alpha) / alpha;\n\t\tlet n = aColour.alpha / alpha;\n\t\tRgbColour(\n\t\t\t(self.rgb * m) + (aColour.rgb * n),\n\t\t\talpha\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "RgbColour",
  "Colour",
  "srgbDecode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _RgbColour_2(_srgbDecode_1(_rgb_1(_self)), _alpha_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tRgbColour(self.rgb.srgbDecode, self.alpha)\n\t}",
);

sl.addMethodToExistingType(
  "RgbColour",
  "Colour",
  "srgbEncode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _RgbColour_2(_srgbEncode_1(_rgb_1(_self)), _alpha_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tRgbColour(self.rgb.srgbEncode, self.alpha)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "asColour",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_3(
      _size_1(_self),
      [
        _hyphenMinusGreaterThanSign_2(
          3,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _RgbColour_2(_self, 1);
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          4,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _RgbColour_2(_take_2(_self, 3), _at_2(_self, 4));
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "asColour");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.size.caseOf([\n\t\t\t3 -> { RgbColour(self, 1) },\n\t\t\t4 -> { RgbColour(self.take(3), self[4]) }\n\t\t]) {\n\t\t\tself.error('asColour')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "HsvColour",
  ["self", "alpha"],
  sl.annotateFunction(function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _RgbColour_2(_hsvToRgb_1(_asFloat_1(_self)), _alpha);
  }, ["self", "alpha"]),
  "{ :self :alpha |\n\t\tRgbColour(\n\t\t\tself.asFloat.hsvToRgb,\n\t\t\talpha\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "hsv",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _hsv_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(hsv:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "hue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _hue_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(hue:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "RgbColour",
  ["self", "alpha"],
  sl.annotateFunction(function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newRgbColour_0(), _self, _alpha);
  }, ["self", "alpha"]),
  "{ :self :alpha |\n\t\tnewRgbColour().initializeSlots(self, alpha)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "rgba",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _rgba_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(rgba:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "rgb",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _rgb_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(rgb:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "adobeRgbDecode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(_self, _solidus_2(563, 256));
  }, ["self"]),
  "{ :self |\n\t\tself ^ (563 / 256)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "adobeRgbEncode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(_self, _solidus_2(256, 563));
  }, ["self"]),
  "{ :self |\n\t\tself ^ (256 / 563)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "asColour",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _greyLevel_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.greyLevel\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "blue",
  ["alpha"],
  sl.annotateFunction(function (_alpha) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _RgbColour_2([0, 0, 1], _alpha);
  }, ["alpha"]),
  "{ :alpha |\n\t\tRgbColour([0 0 1], alpha)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "cubeHelix",
  ["start", "rotations", "hue", "gamma"],
  sl.annotateFunction(function (_start, _rotations, _hue, _gamma) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _start, _rotations, _hue, _gamma";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_lambda) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _lambda";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _betweenAnd_3(_lambda, 0, 1),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _phi = _asterisk_2(
            _pi_1(2),
            _plusSign_2(
              _solidus_2(_start, 3),
              _asterisk_2(_rotations, _lambda),
            ),
          );
          let _e = _circumflexAccent_2(_lambda, _gamma);
          let _alpha = _solidus_2(
            _asterisk_2(_asterisk_2(_hue, _e), _hyphenMinus_2(1, _e)),
            2,
          );
          let _m = [[-0.14861, 1.78277], [-0.29227, -0.90649], [1.97294, 0]];
          /* Statements */
          return _plusSign_2(
            _e,
            _asterisk_2(_alpha, _dot_2(_m, [_cos_1(_phi), _sin_1(_phi)])),
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _error_2(_lambda, "cubeHelix: invalid input");
        }, []),
      );
    }, ["lambda"]);
  }, ["start", "rotations", "hue", "gamma"]),
  "{ :start :rotations :hue :gamma |\n\t\t{ :lambda |\n\t\t\tlambda.betweenAnd(0, 1).if {\n\t\t\t\tlet phi = 2.pi * ((start / 3) + (rotations * lambda));\n\t\t\t\tlet e = lambda ^ gamma;\n\t\t\t\tlet alpha = hue * e * (1 - e) / 2;\n\t\t\t\tlet m = [-0.14861 1.78277; -0.29227 -0.90649; 1.97294 0];\n\t\t\t\te + (alpha * m.dot([phi.cos phi.sin]))\n\t\t\t} {\n\t\t\t\tlambda.error('cubeHelix: invalid input')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "green",
  ["alpha"],
  sl.annotateFunction(function (_alpha) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _RgbColour_2([0, 1, 0], _alpha);
  }, ["alpha"]),
  "{ :alpha |\n\t\tRgbColour([0 1 0], alpha)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "greyLevel",
  ["level", "alpha"],
  sl.annotateFunction(function (_level, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _level, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _RgbColour_2([_level, _level, _level], _alpha);
  }, ["level", "alpha"]),
  "{ :level :alpha |\n\t\tRgbColour([level, level, level], alpha)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "greyLevel",
  ["level"],
  sl.annotateFunction(function (_level) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _level";
      throw new Error(errorMessage);
    } /* Statements */
    return _greyLevel_2(_level, 1);
  }, ["level"]),
  "{ :level |\n\t\tlevel.greyLevel(1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "greyLevelOrTransparent",
  ["level"],
  sl.annotateFunction(function (_level) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _level";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVeryCloseTo_2(_level, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greyLevel_2(1, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greyLevel_1(_level);
      }, []),
    );
  }, ["level"]),
  "{ :level |\n\t\tlevel.isVeryCloseTo(1).if {\n\t\t\tgreyLevel(1, 0)\n\t\t} {\n\t\t\tlevel.greyLevel\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "lightnessCie",
  ["y", "yn"],
  sl.annotateFunction(function (_y, _yn) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _y, _yn";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_2 = sl.annotateFunction(function (_y, _yn) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _y, _yn";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _yyn = _solidus_2(_y, _yn);
      /* Statements */
      return _if_3(
        _greaterThanSign_2(_yyn, _circumflexAccent_2(_solidus_2(24, 116), 3)),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _cubeRoot_1(_yyn);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSign_2(
            _asterisk_2(_solidus_2(841, 108), _yyn),
            _solidus_2(16, 116),
          );
        }, []),
      );
    }, ["y", "yn"]);
    /* Statements */
    return _hyphenMinus_2(
      _asterisk_2(116, _f_2(_asterisk_2(_y, 100), _asterisk_2(_yn, 100))),
      16,
    );
  }, ["y", "yn"]),
  "{ :y :yn |\n\t\tlet f = { :y :yn |\n\t\t\tlet yyn = y / yn;\n\t\t\t(yyn > ((24 / 116) ^ 3)).if {\n\t\t\t\tyyn.cubeRoot\n\t\t\t} {\n\t\t\t\t((841 / 108) * yyn) + (16 / 116)\n\t\t\t}\n\t\t};\n\t\t116 * f(y * 100, yn * 100) - 16\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "red",
  ["alpha"],
  sl.annotateFunction(function (_alpha) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _RgbColour_2([1, 0, 0], _alpha);
  }, ["alpha"]),
  "{ :alpha |\n\t\tRgbColour([1 0 0], alpha)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "saturate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _clip_2(_self, [0, 1]);
  }, ["self"]),
  "{ :self |\n\t\tself.clip([0 1])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "srgbDecode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_self, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSignEqualsSign_2(_self, 0.04045),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _solidus_2(_self, 12.92);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _a = 0.055;
            /* Statements */
            return _circumflexAccent_2(
              _solidus_2(_plusSign_2(_self, _a), _plusSign_2(1, _a)),
              2.4,
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self = 1).if {\n\t\t\t1\n\t\t} {\n\t\t\t(self <= 0.04045).if {\n\t\t\t\tself / 12.92\n\t\t\t} {\n\t\t\t\tlet a = 0.055;\n\t\t\t\t((self + a) / (1 + a)) ^ 2.4\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "srgbEncode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_self, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSignEqualsSign_2(_self, 0.0031308),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _asterisk_2(12.92, _self);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _a = 0.055;
            /* Statements */
            return _hyphenMinus_2(
              _asterisk_2(
                _plusSign_2(1, _a),
                _circumflexAccent_2(_self, _solidus_2(1, 2.4)),
              ),
              _a,
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self = 1).if {\n\t\t\t1\n\t\t} {\n\t\t\t(self <= 0.0031308).if {\n\t\t\t\t12.92 * self\n\t\t\t} {\n\t\t\t\tlet a = 0.055;\n\t\t\t\t(1 + a) * (self ^ (1 / 2.4)) - a\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "turboGradient",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _kRedVec4 = [0.13572138, 4.61539260, -42.66032258, 132.13108234];
    let _kGreenVec4 = [0.09140261, 2.19418839, 4.84296658, -14.18503333];
    let _kBlueVec4 = [0.10667330, 12.64194608, -60.58204836, 110.36276771];
    let _kRedVec2 = [-152.94239396, 59.28637943];
    let _kGreenVec2 = [4.27729857, 2.82956604];
    let _kBlueVec2 = [-89.90310912, 27.34824973];
    let _z_1 = sl.annotateFunction(function (_v) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _v";
        throw new Error(errorMessage);
      } /* Statements */
      return _at_2(_v, 3);
    }, ["v"]);
    let _zw_1 = sl.annotateFunction(function (_v) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _v";
        throw new Error(errorMessage);
      } /* Statements */
      return [_at_2(_v, 3), _at_2(_v, 4)];
    }, ["v"]);
    let _x = _saturate_1(_self);
    let _v4 = [
      1.0,
      _x,
      _asterisk_2(_x, _x),
      _asterisk_2(_asterisk_2(_x, _x), _x),
    ];
    let _v2 = [_asterisk_2(_zw_1(_v4), _z_1(_v4))];
    /* Statements */
    return _saturate_1(
      _catenate_1([
        _plusSign_2(_dot_2(_v4, _kRedVec4), _dot_2(_v2, _kRedVec2)),
        _plusSign_2(_dot_2(_v4, _kGreenVec4), _dot_2(_v2, _kGreenVec2)),
        _plusSign_2(_dot_2(_v4, _kBlueVec4), _dot_2(_v2, _kBlueVec2)),
      ]),
    );
  }, ["self"]),
  "{ :self |\n\t\t/* https://gist.github.com/mikhailov-work/0d177465a8151eb6ede1768d51d476c7 */\n\t\tlet kRedVec4 = [0.13572138, 4.61539260, -42.66032258, 132.13108234];\n\t\tlet kGreenVec4 = [0.09140261, 2.19418839, 4.84296658, -14.18503333];\n\t\tlet kBlueVec4 = [0.10667330, 12.64194608, -60.58204836, 110.36276771];\n\t\tlet kRedVec2 = [-152.94239396, 59.28637943];\n\t\tlet kGreenVec2 = [4.27729857, 2.82956604];\n\t\tlet kBlueVec2 = [-89.90310912, 27.34824973];\n\t\tlet z = { :v | v[3] };\n\t\tlet zw = { :v | [v[3], v[4]] };\n\t\tlet x = self.saturate;\n\t\tlet v4 = [1.0, x, x * x, x * x * x];\n\t\tlet v2 = [v4.zw * v4.z];\n\t\t[\n\t\t\tdot(v4, kRedVec4) + dot(v2, kRedVec2),\n\t\t\tdot(v4, kGreenVec4) + dot(v2, kGreenVec2),\n\t\t\tdot(v4, kBlueVec4) + dot(v2, kBlueVec2)\n\t\t].catenate.saturate\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "adobeRgbDecode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _adobeRgbDecode_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(adobeRgbDecode:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "adobeRgbEncode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _adobeRgbEncode_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(adobeRgbEncode:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "adobeRgbToXyz",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = [[0.5767309, 0.1855540, 0.1881852], [
      0.2973769,
      0.6273491,
      0.0752741,
    ], [0.0270343, 0.0706872, 0.9911085]];
    /* Statements */
    return _dot_2(_m, _self);
  }, ["self"]),
  "{ :self |\n\t\tlet m = [\n\t\t\t0.5767309  0.1855540  0.1881852;\n\t\t\t0.2973769  0.6273491  0.0752741;\n\t\t\t0.0270343  0.0706872  0.9911085\n\t\t];\n\t\tm.dot(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "cmyToRgb",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(1, _self);
  }, ["self"]),
  "{ :self |\n\t\t1 - self\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "greyscaleMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _maxEntry = _max_1(_max_1(_abs_1(_self)));
    /* Statements */
    return _deepCollect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _level = _solidus_2(
          _hyphenMinus_2(_maxEntry, _abs_1(_each)),
          _maxEntry,
        );
        /* Statements */
        return _greyLevelOrTransparent_1(_level);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet maxEntry = self.abs.max.max;\n\t\tself.deepCollect { :each |\n\t\t\tlet level = (maxEntry - each.abs) / maxEntry;\n\t\t\tlevel.greyLevelOrTransparent\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "hslToHsv",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2(_self, 3);
    let _h = _at_2(__SplVar2, 1);
    let _s = _at_2(__SplVar2, 2);
    let _l = _at_2(__SplVar2, 3);
    let _v = _plusSign_2(
      _l,
      _asterisk_2(_s, _min_2(_l, _hyphenMinus_2(1, _l))),
    );
    /* Statements */
    return [
      _h,
      _if_3(
        _equalsSign_2(_v, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 0;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(2, _hyphenMinus_2(1, _solidus_2(_l, _v)));
        }, []),
      ),
      _v,
    ];
  }, ["self"]),
  "{ :self |\n\t\tlet [h, s, l] = self;\n\t\tlet v = l + (s * l.min(1 - l));\n\t\t[\n\t\t\th,\n\t\t\t(v = 0).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\t2 * (1 - (l / v))\n\t\t\t},\n\t\t\tv\n\t\t]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "hslToRgb",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar3 = _assertIsOfSize_2(_self, 3);
    let _hUnit = _at_2(__SplVar3, 1);
    let _s = _at_2(__SplVar3, 2);
    let _l = _at_2(__SplVar3, 3);
    let _h = _asterisk_2(_hUnit, 360);
    let _a = _asterisk_2(_s, _min_2(_l, _hyphenMinus_2(1, _l)));
    /* Statements */
    return _collect_2(
      [0, 8, 4],
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _k = _percentSign_2(_plusSign_2(_n, _solidus_2(_h, 30)), 12);
        /* Statements */
        return _hyphenMinus_2(
          _l,
          _asterisk_2(
            _a,
            _max_2(
              -1,
              _min_1([_hyphenMinus_2(_k, 3), _hyphenMinus_2(9, _k), 1]),
            ),
          ),
        );
      }, ["n"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [hUnit, s, l] = self;\n\t\tlet h = hUnit * 360;\n\t\tlet a = s * l.min(1 - l);\n\t\t[0 8 4].collect { :n |\n\t\t\tlet k = (n + (h / 30)) % 12;\n\t\t\tl - (a * -1.max([k - 3, 9 - k, 1].min))\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "hsvToHsl",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar4 = _assertIsOfSize_2(_self, 3);
    let _h = _at_2(__SplVar4, 1);
    let _s = _at_2(__SplVar4, 2);
    let _v = _at_2(__SplVar4, 3);
    let _l = _asterisk_2(_v, _hyphenMinus_2(1, _solidus_2(_s, 2)));
    /* Statements */
    return [
      _h,
      _if_3(
        _includes_2([0, 1], _l),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 0;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(
            _hyphenMinus_2(_v, _l),
            _min_2(_l, _hyphenMinus_2(1, _l)),
          );
        }, []),
      ),
      _l,
    ];
  }, ["self"]),
  "{ :self |\n\t\tlet [h, s, v] = self;\n\t\tlet l = v * (1 - (s / 2));\n\t\t[\n\t\t\th,\n\t\t\t[0 1].includes(l).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\t(v - l) / l.min(1 - l)\n\t\t\t},\n\t\t\tl\n\t\t]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "hsvToRgb",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedHsvToRgb_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_self, _hsvToRgb_1);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tself.uncheckedHsvToRgb\n\t\t} {\n\t\t\tself.collect(hsvToRgb:/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "isValidHsl",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allTrue_1(_betweenAnd_3(_self, 0, 1));
  }, ["self"]),
  "{ :self |\n\t\tself.betweenAnd(0, 1).allTrue\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "isValidHsv",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allTrue_1(_betweenAnd_3(_self, 0, 1));
  }, ["self"]),
  "{ :self |\n\t\tself.betweenAnd(0, 1).allTrue\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "isValidRgb",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allTrue_1(_betweenAnd_3(_self, 0, 1));
  }, ["self"]),
  "{ :self |\n\t\tself.betweenAnd(0, 1).allTrue\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "isValidRgba",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allTrue_1(_betweenAnd_3(_self, 0, 1));
  }, ["self"]),
  "{ :self |\n\t\tself.betweenAnd(0, 1).allTrue\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "jabToJch",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar5 = _assertIsOfSize_2(_self, 3);
    let _l = _at_2(__SplVar5, 1);
    let _a = _at_2(__SplVar5, 2);
    let _b = _at_2(__SplVar5, 3);
    let __SplVar6 = _assertIsOfSize_2(_toPolarCoordinates_1([_a, _b]), 2);
    let _c = _at_2(__SplVar6, 1);
    let _h = _at_2(__SplVar6, 2);
    /* Statements */
    return [_l, _c, _percentSign_2(_radiansToDegrees_1(_h), 360)];
  }, ["self"]),
  "{ :self |\n\t\tlet [l, a, b] = self;\n\t\tlet [c, h] = [a, b].toPolarCoordinates;\n\t\t[l, c, h.radiansToDegrees % 360]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "jchToJab",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar7 = _assertIsOfSize_2(_self, 3);
    let _j = _at_2(__SplVar7, 1);
    let _c = _at_2(__SplVar7, 2);
    let _h = _at_2(__SplVar7, 3);
    let _hRadians = _degree_1(_h);
    let _a = _asterisk_2(_c, _cos_1(_hRadians));
    let _b = _asterisk_2(_c, _sin_1(_hRadians));
    /* Statements */
    return [_j, _a, _b];
  }, ["self"]),
  "{ :self |\n\t\tlet [j, c, h] = self;\n\t\tlet hRadians = h.degree;\n\t\tlet a = c * hRadians.cos;\n\t\tlet b = c * hRadians.sin;\n\t\t[j, a, b]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "labToLch",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _jabToJch_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.jabToJch\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "labToXyz",
  ["self", "reference"],
  sl.annotateFunction(function (_self, _reference) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _reference";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar8 = _assertIsOfSize_2(_self, 3);
    let _l = _at_2(__SplVar8, 1);
    let _a = _at_2(__SplVar8, 2);
    let _b = _at_2(__SplVar8, 3);
    let __SplVar9 = _assertIsOfSize_2(_reference, 3);
    let _rx = _at_2(__SplVar9, 1);
    let _ry = _at_2(__SplVar9, 2);
    let _rz = _at_2(__SplVar9, 3);
    let _delta = _solidus_2(6, 29);
    let _epsilon = _cube_1(_delta);
    let _kappa = _solidus_2(8, _epsilon);
    let _fy = _solidus_2(_plusSign_2(_l, 16), 116);
    let _fx = _plusSign_2(_solidus_2(_a, 500), _fy);
    let _fz = _hyphenMinus_2(_fy, _solidus_2(_b, 200));
    let _fx3 = _cube_1(_fx);
    let _fz3 = _cube_1(_fz);
    let _x = _if_3(
      _greaterThanSign_2(_fx3, _epsilon),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _fx3;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_hyphenMinus_2(_asterisk_2(116, _fx), 16), _kappa);
      }, []),
    );
    let _y = _if_3(
      _greaterThanSign_2(_l, _asterisk_2(_kappa, _epsilon)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _cube_1(_solidus_2(_plusSign_2(_l, 16), 116));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_l, _kappa);
      }, []),
    );
    let _z = _if_3(
      _greaterThanSign_2(_fz3, _epsilon),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _fz3;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_hyphenMinus_2(_asterisk_2(116, _fz), 16), _kappa);
      }, []),
    );
    /* Statements */
    return _solidus_2([
      _asterisk_2(_x, _rx),
      _asterisk_2(_y, _ry),
      _asterisk_2(_z, _rz),
    ], 100);
  }, ["self", "reference"]),
  "{ :self :reference |\n\t\tlet [l, a, b] = self;\n\t\tlet [rx, ry, rz] = reference;\n\t\tlet delta = 6 / 29;\n\t\tlet epsilon = delta.cube;\n\t\tlet kappa = 8 / epsilon;\n\t\tlet fy = (l + 16) / 116;\n\t\tlet fx = (a / 500) + fy;\n\t\tlet fz = fy - (b / 200);\n\t\tlet fx3 = fx.cube;\n\t\tlet fz3 = fz.cube;\n\t\tlet x = (fx3 > epsilon).if { fx3 } { (116 * fx - 16) / kappa };\n\t\tlet y = (l > (kappa * epsilon)).if { ((l + 16) / 116).cube } { l / kappa };\n\t\tlet z = (fz3 > epsilon).if { fz3 } { (116 * fz - 16) / kappa };\n\t\t[\n\t\t\tx * rx,\n\t\t\ty * ry,\n\t\t\tz * rz\n\t\t] / 100\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "labToXyz",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _d65 = [95.0489, 100, 108.8840];
    /* Statements */
    return _labToXyz_2(_self, _d65);
  }, ["self"]),
  "{ :self |\n\t\tlet d65 = [95.0489, 100, 108.8840];\n\t\tself.labToXyz(d65)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "lchToLab",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _jchToJab_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.jchToJab\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "lchToLuv",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _jchToJab_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.jchToJab\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "luvToLch",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _jabToJch_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.jabToJch\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "luvToXyz",
  ["self", "reference"],
  sl.annotateFunction(function (_self, _reference) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _reference";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar10 = _assertIsOfSize_2(_self, 3);
    let _l = _at_2(__SplVar10, 1);
    let _u = _at_2(__SplVar10, 2);
    let _v = _at_2(__SplVar10, 3);
    let __SplVar11 = _assertIsOfSize_2(_reference, 3);
    let _rx = _at_2(__SplVar11, 1);
    let _ry = _at_2(__SplVar11, 2);
    let _rz = _at_2(__SplVar11, 3);
    let _epsilon = _solidus_2(216, 24389);
    let _kappa = _solidus_2(24389, 27);
    let _u0 = _solidus_2(
      _asterisk_2(4, _rx),
      _plusSign_2(_plusSign_2(_rx, _asterisk_2(15, _ry)), _asterisk_2(3, _rz)),
    );
    let _v0 = _solidus_2(
      _asterisk_2(9, _ry),
      _plusSign_2(_plusSign_2(_rx, _asterisk_2(15, _ry)), _asterisk_2(3, _rz)),
    );
    let _y = _if_3(
      _greaterThanSign_2(_l, _asterisk_2(_kappa, _epsilon)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _circumflexAccent_2(_solidus_2(_plusSign_2(_l, 16), 116), 3);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_l, _kappa);
      }, []),
    );
    let _a = _if_3(
      _equalsSign_2(_l, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _hyphenMinus_2(
            _solidus_2(
              _asterisk_2(52, _l),
              _plusSign_2(_u, _asterisk_2(_asterisk_2(13, _l), _u0)),
            ),
            1,
          ),
          3,
        );
      }, []),
    );
    let _b = _asterisk_2(-5, _y);
    let _c = _solidus_2(-1, 3);
    let _d = _if_3(
      _equalsSign_2(_l, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          _y,
          _hyphenMinus_2(
            _solidus_2(
              _asterisk_2(39, _l),
              _plusSign_2(_v, _asterisk_2(_asterisk_2(13, _l), _v0)),
            ),
            5,
          ),
        );
      }, []),
    );
    let _x = _solidus_2(_hyphenMinus_2(_d, _b), _hyphenMinus_2(_a, _c));
    let _z = _plusSign_2(_asterisk_2(_x, _a), _b);
    /* Statements */
    return [_x, _y, _z];
  }, ["self", "reference"]),
  "{ :self :reference |\n\t\tlet [l, u, v] = self;\n\t\tlet [rx, ry, rz] = reference;\n\t\tlet epsilon = 216 / 24389;\n\t\tlet kappa = 24389 / 27;\n\t\tlet u0 = (4 * rx) / (rx + (15 * ry) + (3 * rz));\n\t\tlet v0 = (9 * ry) / (rx + (15 * ry) + (3 * rz));\n\t\tlet y = (l > (kappa * epsilon)).if { ((l + 16) / 116) ^ 3 } { l / kappa };\n\t\tlet a = (l = 0).if { 0 } { (((52 * l) / (u + (13 * l * u0))) - 1) / 3 };\n\t\tlet b = -5 * y;\n\t\tlet c = -1 / 3;\n\t\tlet d = (l = 0).if { 0 } { y * (((39 * l) / (v + (13 * l * v0))) - 5) };\n\t\tlet x = (d - b) / (a - c);\n\t\tlet z = (x * a) + b;\n\t\t[x y z]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "luvToXyz",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _d65 = [95.0489, 100, 108.8840];
    /* Statements */
    return _luvToXyz_2(_self, _d65);
  }, ["self"]),
  "{ :self |\n\t\tlet d65 = [95.0489, 100, 108.8840];\n\t\tself.luvToXyz(d65)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "oklabToXyz",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _labToLms = [[1.0, 0.3963377922, 0.2158037581], [
      1.0,
      -0.1055613423,
      -0.0638541748,
    ], [1.0, -0.0894841821, -1.2914855379]];
    let _lmsToXyz = [[1.2270138511, -0.5577999807, 0.2812561490], [
      -0.0405801784,
      1.1122568696,
      -0.0716766787,
    ], [-0.0763812845, -0.4214819784, 1.5861632204]];
    let _lms = _dot_2(_labToLms, _self);
    /* Statements */
    return _dot_2(_lmsToXyz, _cube_1(_lms));
  }, ["self"]),
  "{ :self |\n\t\tlet labToLms = [\n\t\t\t[ 1.0,           0.3963377922,  0.2158037581],\n\t\t\t[ 1.0,          -0.1055613423, -0.0638541748],\n\t\t\t[ 1.0,          -0.0894841821, -1.2914855379]\n\t\t];\n\t\tlet lmsToXyz = [\n\t\t\t[ 1.2270138511, -0.5577999807,  0.2812561490],\n\t\t\t[-0.0405801784,  1.1122568696, -0.0716766787],\n\t\t\t[-0.0763812845, -0.4214819784,  1.5861632204]\n\t\t];\n\t\tlet lms = labToLms.dot(self);\n\t\tlmsToXyz.dot(lms.cube)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "quilezGradient",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar12 = _assertIsOfSize_2(_self, 4);
    let _a = _at_2(__SplVar12, 1);
    let _b = _at_2(__SplVar12, 2);
    let _c = _at_2(__SplVar12, 3);
    let _d = _at_2(__SplVar12, 4);
    /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSign_2(
        _a,
        _asterisk_2(
          _b,
          _cos_1(_asterisk_2(_pi_1(2), _plusSign_2(_asterisk_2(_c, _t), _d))),
        ),
      );
    }, ["t"]);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c, d] = self;\n\t\t{ :t |\n\t\t\ta + (b * (2.pi * ((c * t) + d)).cos)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "xyzToOklab",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _xyzToLms = [[0.8189330101, 0.3618667424, -0.1288597137], [
      0.0329845436,
      0.9293118715,
      0.0361456387,
    ], [0.0482003018, 0.2643662691, 0.6338517070]];
    let _lmsToLab = [[0.2104542553, 0.7936177850, -0.0040720468], [
      1.9779984951,
      -2.4285922050,
      0.4505937099,
    ], [0.0259040371, 0.7827717662, -0.8086757660]];
    let _lms = _dot_2(_xyzToLms, _self);
    /* Statements */
    return _dot_2(_lmsToLab, _cubeRoot_1(_lms));
  }, ["self"]),
  "{ :self |\n\t\tlet xyzToLms = [\n\t\t\t[0.8189330101,  0.3618667424, -0.1288597137],\n\t\t\t[0.0329845436,  0.9293118715,  0.0361456387],\n\t\t\t[0.0482003018,  0.2643662691,  0.6338517070]\n\t\t];\n\t\tlet lmsToLab = [\n\t\t\t[0.2104542553,  0.7936177850, -0.0040720468],\n\t\t\t[1.9779984951, -2.4285922050,  0.4505937099],\n\t\t\t[0.0259040371,  0.7827717662, -0.8086757660]\n\t\t];\n\t\tlet lms = xyzToLms.dot(self);\n\t\tlmsToLab.dot(lms.cubeRoot)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "rgbToHsl",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hsvToHsl_1(_rgbToHsv_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.rgbToHsv.hsvToHsl\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "rgbToHsv",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedRgbToHsv_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_self, _rgbToHsv_1);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tself.uncheckedRgbToHsv\n\t\t} {\n\t\t\tself.collect(rgbToHsv:/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "rgbToXyz",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [
      0.0193,
      0.1192,
      0.9505,
    ]];
    /* Statements */
    return _dot_2(_m, _self);
  }, ["self"]),
  "{ :self |\n\t\tlet m = [\n\t\t\t[0.4124, 0.3576, 0.1805],\n\t\t\t[0.2126, 0.7152, 0.0722],\n\t\t\t[0.0193, 0.1192, 0.9505]\n\t\t];\n\t\tm.dot(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "saturate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _clip_2(_self, [0, 1]);
  }, ["self"]),
  "{ :self |\n\t\tself.clip([0 1])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "srgbDecode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedSrgbDecode_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_self, _srgbDecode_1);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tself.uncheckedSrgbDecode\n\t\t} {\n\t\t\tself.collect(srgbDecode:/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "srgbEncode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedSrgbEncode_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_self, _srgbEncode_1);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tself.uncheckedSrgbEncode\n\t\t} {\n\t\t\tself.collect(srgbEncode:/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "uncheckedHsvToRgb",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar13 = _assertIsOfSize_2(_asFloat_1(_self), 3);
    let _hue = _at_2(__SplVar13, 1);
    let _saturation = _at_2(__SplVar13, 2);
    let _brightness = _at_2(__SplVar13, 3);
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
    return _caseOf_3(
      _i,
      [
        _hyphenMinusGreaterThanSign_2(
          0,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [_v, _t, _p];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          1,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [_q, _v, _p];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          2,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [_p, _v, _t];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          3,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [_p, _q, _v];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          4,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [_t, _p, _v];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          5,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [_v, _p, _q];
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _unimplementedCase_2(_self, "hsvToRgb");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [hue, saturation, brightness] = self.asFloat;\n\t\tlet s = saturation.min(1).max(0);\n\t\tlet v = brightness.min(1).max(0);\n\t\tlet h = (hue * 360) % 360;\n\t\tlet i = h // 60;\n\t\tlet f = (h % 60) / 60;\n\t\tlet p = (1 - s) * v;\n\t\tlet q = (1 - (s * f)) * v;\n\t\tlet t = (1 - (s * (1 - f))) * v;\n\t\ti.caseOf(\n\t\t\t[\n\t\t\t\t0 -> { [v, t, p] },\n\t\t\t\t1 -> { [q, v, p] },\n\t\t\t\t2 -> { [p, v, t] },\n\t\t\t\t3 -> { [p, q, v] },\n\t\t\t\t4 -> { [t, p, v] },\n\t\t\t\t5 -> { [v, p, q] }\n\t\t\t]\n\t\t) {\n\t\t\tself.unimplementedCase('hsvToRgb')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "uncheckedRgbToHsv",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar14 = _assertIsOfSize_2(_asFloat_1(_self), 3);
    let _r = _at_2(__SplVar14, 1);
    let _g = _at_2(__SplVar14, 2);
    let _b = _at_2(__SplVar14, 3);
    let _v = _max_1([_r, _g, _b]);
    let _c = _hyphenMinus_2(_v, _min_1([_r, _g, _b]));
    let _s = _if_3(
      _equalsSign_2(_v, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_c, _v);
      }, []),
    );
    let _h = _if_3(
      _equalsSign_2(_c, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_v, _r),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _asterisk_2(
              60,
              _percentSign_2(_solidus_2(_hyphenMinus_2(_g, _b), _c), 6),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(_v, _g),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _asterisk_2(
                  60,
                  _plusSign_2(_solidus_2(_hyphenMinus_2(_b, _r), _c), 2),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _asterisk_2(
                  60,
                  _plusSign_2(_solidus_2(_hyphenMinus_2(_r, _g), _c), 4),
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
    /* Statements */
    return [_solidus_2(_h, 360), _s, _v];
  }, ["self"]),
  "{ :self |\n\t\tlet [r, g, b] = self.asFloat;\n\t\tlet v = [r g b].max;\n\t\tlet c = v - [r g b].min;\n\t\tlet s = (v = 0).if { 0 } { c / v };\n\t\tlet h = (c = 0).if {\n\t\t\t0\n\t\t} {\n\t\t\t(v = r).if {\n\t\t\t\t60 * ((g - b) / c % 6)\n\t\t\t} {\n\t\t\t\t(v = g).if {\n\t\t\t\t\t60 * ((b - r) / c + 2)\n\t\t\t\t} {\n\t\t\t\t\t60 * ((r - g) / c + 4)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\t[h / 360, s, v]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "uncheckedSrgbDecode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _srgbDecode_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(srgbDecode:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "uncheckedSrgbEncode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _srgbEncode_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(srgbEncode:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "xyzToLab",
  ["self", "reference"],
  sl.annotateFunction(function (_self, _reference) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _reference";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar15 = _assertIsOfSize_2(_self, 3);
    let _x = _at_2(__SplVar15, 1);
    let _y = _at_2(__SplVar15, 2);
    let _z = _at_2(__SplVar15, 3);
    let __SplVar16 = _assertIsOfSize_2(_reference, 3);
    let _rx = _at_2(__SplVar16, 1);
    let _ry = _at_2(__SplVar16, 2);
    let _rz = _at_2(__SplVar16, 3);
    let _delta = _solidus_2(6, 29);
    let _epsilon = _cube_1(_delta);
    let _kappa = _solidus_2(8, _epsilon);
    let _f_1 = sl.annotateFunction(function (_tu) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _tu";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _t = _asterisk_2(_tu, 100);
      /* Statements */
      return _if_3(
        _greaterThanSign_2(_t, _epsilon),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _cubeRoot_1(_t);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(_plusSign_2(_asterisk_2(_kappa, _t), 16), 116);
        }, []),
      );
    }, ["tu"]);
    let _fX = _f_1(_solidus_2(_x, _rx));
    let _fY = _f_1(_solidus_2(_y, _ry));
    let _fZ = _f_1(_solidus_2(_z, _rz));
    /* Statements */
    return [
      _hyphenMinus_2(_asterisk_2(116, _fY), 16),
      _asterisk_2(500, _hyphenMinus_2(_fX, _fY)),
      _asterisk_2(200, _hyphenMinus_2(_fY, _fZ)),
    ];
  }, ["self", "reference"]),
  "{ :self :reference |\n\t\tlet [x, y, z] = self;\n\t\tlet [rx, ry, rz] = reference;\n\t\tlet delta = 6 / 29;\n\t\tlet epsilon = delta.cube;\n\t\tlet kappa = 8 / epsilon;\n\t\tlet f = { :tu |\n\t\t\tlet t = tu * 100;\n\t\t\t(t > epsilon).if {\n\t\t\t\tt.cubeRoot\n\t\t\t} {\n\t\t\t\t((kappa * t) + 16) / 116\n\t\t\t}\n\t\t};\n\t\tlet fX = f(x / rx);\n\t\tlet fY = f(y / ry);\n\t\tlet fZ = f(z / rz);\n\t\t[\n\t\t\t(116 * fY) - 16,\n\t\t\t500 * (fX - fY),\n\t\t\t200 * (fY - fZ)\n\t\t]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "xyzToLab",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _d65 = [95.0489, 100, 108.8840];
    /* Statements */
    return _xyzToLab_2(_self, _d65);
  }, ["self"]),
  "{ :self |\n\t\tlet d65 = [95.0489, 100, 108.8840];\n\t\tself.xyzToLab(d65)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "xyzToLuv",
  ["self", "reference"],
  sl.annotateFunction(function (_self, _reference) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _reference";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_self, [0, 0, 0]),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [0, 0, 0];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar17 = _assertIsOfSize_2(_self, 3);
        let _x = _at_2(__SplVar17, 1);
        let _y = _at_2(__SplVar17, 2);
        let _z = _at_2(__SplVar17, 3);
        let __SplVar18 = _assertIsOfSize_2(_reference, 3);
        let _rx = _at_2(__SplVar18, 1);
        let _ry = _at_2(__SplVar18, 2);
        let _rz = _at_2(__SplVar18, 3);
        let _epsilon = _solidus_2(216, 24389);
        let _kappa = _solidus_2(24389, 27);
        let _yr = _asterisk_2(_solidus_2(_y, _ry), 100);
        let _xyz = _plusSign_2(
          _plusSign_2(_x, _asterisk_2(15, _y)),
          _asterisk_2(3, _z),
        );
        let _rxryrz = _plusSign_2(
          _plusSign_2(_rx, _asterisk_2(15, _ry)),
          _asterisk_2(3, _rz),
        );
        let _u1 = _solidus_2(_asterisk_2(4, _x), _xyz);
        let _v1 = _solidus_2(_asterisk_2(9, _y), _xyz);
        let _ur = _solidus_2(_asterisk_2(4, _rx), _rxryrz);
        let _vr = _solidus_2(_asterisk_2(9, _ry), _rxryrz);
        let _l = _if_3(
          _greaterThanSign_2(_yr, _epsilon),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinus_2(_asterisk_2(116, _cubeRoot_1(_yr)), 16);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _asterisk_2(_kappa, _yr);
          }, []),
        );
        let _u = _asterisk_2(_asterisk_2(13, _l), _hyphenMinus_2(_u1, _ur));
        let _v = _asterisk_2(_asterisk_2(13, _l), _hyphenMinus_2(_v1, _vr));
        /* Statements */
        return [_l, _u, _v];
      }, []),
    );
  }, ["self", "reference"]),
  "{ :self :reference |\n\t\t(self = [0 0 0]).if {\n\t\t\t[0 0 0]\n\t\t} {\n\t\t\tlet [x, y, z] = self;\n\t\t\tlet [rx, ry, rz] = reference;\n\t\t\tlet epsilon = 216 / 24389;\n\t\t\tlet kappa = 24389 / 27;\n\t\t\tlet yr = (y / ry) * 100;\n\t\t\tlet xyz = x + (15 * y) + (3 * z);\n\t\t\tlet rxryrz = rx + (15 * ry) + (3 * rz);\n\t\t\tlet u1 = (4 * x) / xyz;\n\t\t\tlet v1 = (9 * y) / xyz;\n\t\t\tlet ur = (4 * rx) / rxryrz;\n\t\t\tlet vr = (9 * ry) / rxryrz;\n\t\t\tlet l = (yr > epsilon).if {\n\t\t\t\t(116 * yr.cubeRoot) - 16\n\t\t\t} {\n\t\t\t\tkappa * yr\n\t\t\t};\n\t\t\tlet u = 13 * l * (u1 - ur);\n\t\t\tlet v = 13 * l * (v1 - vr);\n\t\t\t[l, u, v]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "xyzToLuv",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _d65 = [95.0489, 100, 108.8840];
    /* Statements */
    return _xyzToLuv_2(_self, _d65);
  }, ["self"]),
  "{ :self |\n\t\tlet d65 = [95.0489, 100, 108.8840];\n\t\tself.xyzToLuv(d65)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "xyzToAdobeRgb",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = [[+2.0413690, -0.5649464, -0.3446944], [
      -0.9692660,
      +1.8760108,
      +0.0415560,
    ], [+0.0134474, -0.1183897, +1.0154096]];
    /* Statements */
    return _dot_2(_m, _self);
  }, ["self"]),
  "{ :self |\n\t\tlet m = [\n\t\t\t+2.0413690 -0.5649464 -0.3446944;\n\t\t\t-0.9692660 +1.8760108 +0.0415560;\n\t\t\t+0.0134474 -0.1183897 +1.0154096\n\t\t];\n\t\tm.dot(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "xyzToRgb",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = [[3.2406255, -1.5372080, -0.4986286], [
      -0.9689307,
      1.8757561,
      0.0415175,
    ], [0.0557101, -0.2040211, 1.0569959]];
    /* Statements */
    return _dot_2(_m, _self);
  }, ["self"]),
  "{ :self |\n\t\tlet m = [\n\t\t\t[ 3.2406255, -1.5372080, -0.4986286],\n\t\t\t[-0.9689307,  1.8757561,  0.0415175],\n\t\t\t[ 0.0557101, -0.2040211,  1.0569959]\n\t\t];\n\t\tm.dot(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "xyyToXyz",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar19 = _assertIsOfSize_2(_self, 3);
    let _x = _at_2(__SplVar19, 1);
    let _y1 = _at_2(__SplVar19, 2);
    let _y2 = _at_2(__SplVar19, 3);
    /* Statements */
    return _if_3(
      _equalsSign_2(_y1, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [0, 0, 0];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [
          _solidus_2(_asterisk_2(_x, _y2), _y1),
          _y2,
          _solidus_2(
            _asterisk_2(_hyphenMinus_2(_hyphenMinus_2(1, _x), _y1), _y2),
            _y1,
          ),
        ];
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [x, y1, y2] = self;\n\t\t(y1 = 0).if {\n\t\t\t[0 0 0]\n\t\t} {\n\t\t\t[\n\t\t\t\t(x * y2) / y1,\n\t\t\t\ty2,\n\t\t\t\t((1 - x - y1) * y2) / y1\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "xyzToXyy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar20 = _assertIsOfSize_2(_self, 3);
    let _x = _at_2(__SplVar20, 1);
    let _y = _at_2(__SplVar20, 2);
    let _z = _at_2(__SplVar20, 3);
    let _n = _plusSign_2(_plusSign_2(_x, _y), _z);
    /* Statements */
    return _if_3(
      _equalsSign_2(_n, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [1, 1, 1];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _m = _solidus_2(1, _n);
        /* Statements */
        return [_asterisk_2(_x, _m), _asterisk_2(_y, _m), _y];
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [x, y, z] = self;\n\t\tlet n = x + y + z;\n\t\t(n = 0).if {\n\t\t\t[1 1 1]\n\t\t} {\n\t\t\tlet m = 1 / n;\n\t\t\t[x * m, y * m, y]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Colour",
  "isHexTriplet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _beginsWith_2(_self, "#"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _verticalLine_2(
          _equalsSign_2(_size_1(_self), 7),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_size_1(_self), 9);
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.beginsWith('#') & {\n\t\t\tself.size = 7 | {\n\t\t\t\tself.size = 9\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Colour",
  "isRgbTriplet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _beginsWith_2(_self, "rgb("),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _endsWith_2(_self, ")");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.beginsWith('rgb(') & {\n\t\t\tself.endsWith(')')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Colour",
  "parseHexColour",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asColour_1(_parseHexTriplet_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.parseHexTriplet.asColour\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Colour",
  "parseHexTriplet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_self);
    /* Statements */
    _ifFalse_2(
      _isHexTriplet_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "String>>parseHexTriplet: not hex triplet");
      }, []),
    );
    return _if_3(
      _verticalLine_2(
        _equalsSign_2(_k, 7),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_k, 9);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _r = _copyFromTo_3(_self, 2, 3);
        let _g = _copyFromTo_3(_self, 4, 5);
        let _b = _copyFromTo_3(_self, 6, 7);
        let _f_1 = sl.annotateFunction(function (_x) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _x";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(
            _x,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _solidus_2(_parseSmallInteger_2(_each, 16), 255);
            }, ["each"]),
          );
        }, ["x"]);
        /* Statements */
        return _if_3(
          _equalsSign_2(_k, 9),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _a = _if_3(
              _equalsSign_2(_k, 9),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _copyFromTo_3(_self, 8, 9);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return "FF";
              }, []),
            );
            /* Statements */
            return _f_1([_r, _g, _b, _a]);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _f_1([_r, _g, _b]);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "parseHexTriplet");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet k = self.size;\n\t\tself.isHexTriplet.ifFalse {\n\t\t\tself.error('String>>parseHexTriplet: not hex triplet')\n\t\t};\n\t\t(k = 7 | { k = 9 }).if {\n\t\t\tlet r = self.copyFromTo(2, 3);\n\t\t\tlet g = self.copyFromTo(4, 5);\n\t\t\tlet b = self.copyFromTo(6, 7);\n\t\t\tlet f = { :x |\n\t\t\t\tx.collect { :each |\n\t\t\t\t\teach.parseSmallInteger(16) / 255\n\t\t\t\t}\n\t\t\t};\n\t\t\t(k = 9).if {\n\t\t\t\tlet a = (k = 9).if { self.copyFromTo(8, 9) } { 'FF' };\n\t\t\t\tf([r, g, b, a])\n\t\t\t} {\n\t\t\t\tf([r, g, b])\n\t\t\t}\n\t\t} {\n\t\t\tself.error('parseHexTriplet')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Colour",
  "parseRgbColour",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asColour_1(_parseRgbTriplet_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.parseRgbTriplet.asColour\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Colour",
  "parseRgbTriplet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isRgbTriplet_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _c = _splitBy_2(
          _copyFromTo_3(_self, 5, _hyphenMinus_2(_size_1(_self), 1)),
          ",",
        );
        /* Statements */
        return _if_3(
          _betweenAnd_3(_size_1(_c), 3, 4),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(
              _c,
              sl.annotateFunction(function (_each) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _each";
                  throw new Error(errorMessage);
                } /* Statements */
                return _solidus_2(_parseSmallInteger_2(_each, 10), 255);
              }, ["each"]),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "String>>parseRgbTriplet: invalid triplet");
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "String>>parseRgbTriplet: not Rgb triplet");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isRgbTriplet.if {\n\t\t\tlet c = self.copyFromTo(5, self.size - 1).splitBy(',');\n\t\t\tc.size.betweenAnd(3, 4).if {\n\t\t\t\tc.collect { :each |\n\t\t\t\t\teach.parseSmallInteger(10) / 255\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tself.error('String>>parseRgbTriplet: invalid triplet')\n\t\t\t}\n\t\t} {\n\t\t\tself.error('String>>parseRgbTriplet: not Rgb triplet')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Colour",
  "colourCheckerChart",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "ColourCheckerChart");
  }, ["self"]),
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'ColourCheckerChart'\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Colour",
  "svgColourCatalogue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "SvgColourCatalogue");
  }, ["self"]),
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'SvgColourCatalogue'\n\t\t)\n\t}",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "SvgColourCatalogue"],
      ["category", "Graphics/Colour"],
      ["url", "https://rohandrape.net/sw/hsc3-data/data/colour/svg.json"],
      ["mimeType", "application/json"],
      [
        "parser",
        sl.annotateFunction(function (_libraryItem) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _libraryItem";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(
            _libraryItem,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _solidus_2(_each, 255);
            }, ["each"]),
          );
        }, ["libraryItem"]),
      ],
    ]),
  ),
);
_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "ColourCheckerChart"],
      ["category", "Graphics/Colour"],
      [
        "url",
        "https://rohandrape.net/sw/hsc3-data/data/colour/colour-checker-chart.json",
      ],
      ["mimeType", "application/json"],
      [
        "parser",
        sl.annotateFunction(function (_libraryItem) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _libraryItem";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(
            _libraryItem,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _parseHexTriplet_1(_each);
            }, ["each"]),
          );
        }, ["libraryItem"]),
      ],
    ]),
  ),
);
