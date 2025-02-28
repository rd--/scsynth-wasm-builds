sl.addTrait("Colour", "Colour");

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "tilde",
  ["self", "aColour"],
  function (_self, _aColour) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aColour";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlotsBy_3(_self, _aColour, _tilde_2);
  },
  "{ :self :aColour | hasEqualSlotsBy(self,aColour, ~) }",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "alpha",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "alpha");
  },
  "{ :self | typeResponsibility(self,'alpha') }",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "asColour",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "asSvg",
  ["self"],
  function (_self) {
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
  },
  '{ :self | Svg(unlines([\'<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">\', format(\'<rect x="0" y="0" width="100" height="100" fill="%"/>\',[hexTriplet(self)]), \'</svg>\'])) }',
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "blue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _third_1(_rgb_1(_self));
  },
  "{ :self | third(rgb(self)) }",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "draw",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _draw_1(_asSvg_1(_self));
  },
  "{ :self | draw(asSvg(self)) }",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "green",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _second_1(_rgb_1(_self));
  },
  "{ :self | second(rgb(self)) }",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "hexTriplet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _if_3(_equalsSign_2(_alpha_1(_self), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _rgb_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _rgba_1(_self);
    });
    /* Statements */
    return _plusSignPlusSign_2(
      "#",
      _join_2(
        _collect_2(_c, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _byteHexString_1(_rounded_1(_asterisk_2(_each, 255)));
        }),
        "",
      ),
    );
  },
  "{ :self | let c = if((=(alpha(self), 1)), { rgb(self) }, { rgba(self) }); ++('#', join(collect(c, { :each | byteHexString(rounded((*(each, 255)))) }),'')) }",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "hsv",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _rgbToHsv_1(_rgb_1(_self));
  },
  "{ :self | rgbToHsv(rgb(self)) }",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "hue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _first_1(_hsv_1(_self));
  },
  "{ :self | first(hsv(self)) }",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "isBlack",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isGreyOf_2(_self, 0);
  },
  "{ :self | isGreyOf(self,0) }",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "isBlue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _greaterThanSign_2(_blue_1(_self), _plusSign_2(_green_1(_self), 0.3)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _greaterThanSign_2(_blue_1(_self), _plusSign_2(_red_1(_self), 0.3)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(
              _abs_1(_hyphenMinus_2(_green_1(_self), _red_1(_self))),
              0.4,
            );
          },
        );
      },
    );
  },
  "{ :self | &(>(blue(self), (+(green(self), 0.3))), { &(>(blue(self), (+(red(self), 0.3))), { <(abs((-(green(self), red(self)))), 0.4) }) }) }",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "isCyan",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_lessThanSign_2(_red_1(_self), 0.05), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(
        _greaterThanSign_2(_min_2(_green_1(_self), _blue_1(_self)), 0.5),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSign_2(
            _abs_1(_hyphenMinus_2(_green_1(_self), _blue_1(_self))),
            0.2,
          );
        },
      );
    });
  },
  "{ :self | &(<(red(self), 0.05), { &(>(min(green(self),blue(self)), 0.5), { <(abs((-(green(self), blue(self)))), 0.2) }) }) }",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "isGreen",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _greaterThanSign_2(_green_1(_self), _plusSign_2(_blue_1(_self), 0.3)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(
          _green_1(_self),
          _plusSign_2(_red_1(_self), 0.3),
        );
      },
    );
  },
  "{ :self | &(>(green(self), (+(blue(self), 0.3))), { >(green(self), (+(red(self), 0.3))) }) }",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "isGrey",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _value = _red_1(_self);
    /* Statements */
    return _ampersand_2(_equalsSign_2(_green_1(_self), _value), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(_equalsSign_2(_blue_1(_self), _value), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(_tildeEqualsSign_2(_value, 1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _tildeEqualsSign_2(_value, 0);
        });
      });
    });
  },
  "{ :self | let value = red(self); &(=(green(self), value), { &(=(blue(self), value), { &(~=(value, 1), { ~=(value, 0) }) }) }) }",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "isGreyOf",
  ["self", "value"],
  function (_self, _value) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _value";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_equalsSign_2(_red_1(_self), _value), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(_equalsSign_2(_green_1(_self), _value), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_blue_1(_self), _value);
      });
    });
  },
  "{ :self :value | &(=(red(self), value), { &(=(green(self), value), { =(blue(self), value) }) }) }",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "isMagenta",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_lessThanSign_2(_green_1(_self), 0.05), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(
        _greaterThanSign_2(_min_2(_red_1(_self), _blue_1(_self)), 0.4),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSign_2(
            _abs_1(_hyphenMinus_2(_red_1(_self), _blue_1(_self))),
            0.3,
          );
        },
      );
    });
  },
  "{ :self | &(<(green(self), 0.05), { &(>(min(red(self),blue(self)), 0.4), { <(abs((-(red(self), blue(self)))), 0.3) }) }) }",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "isOpaque",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_alpha_1(_self), 1);
  },
  "{ :self | =(alpha(self), 1) }",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "isRed",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _greaterThanSign_2(_red_1(_self), _plusSign_2(_green_1(_self), 0.4)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _greaterThanSign_2(_red_1(_self), _plusSign_2(_blue_1(_self), 0.6)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(
              _abs_1(_hyphenMinus_2(_green_1(_self), _blue_1(_self))),
              0.4,
            );
          },
        );
      },
    );
  },
  "{ :self | &(>(red(self), (+(green(self), 0.4))), { &(>(red(self), (+(blue(self), 0.6))), { <(abs((-(green(self), blue(self)))), 0.4) }) }) }",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "isTransparent",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_alpha_1(_self), 0);
  },
  "{ :self | =(alpha(self), 0) }",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "isWhite",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isGreyOf_2(_self, 1);
  },
  "{ :self | isGreyOf(self,1) }",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "isYellow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_lessThanSign_2(_blue_1(_self), 0.1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(
        _greaterThanSign_2(_min_2(_red_1(_self), _green_1(_self)), 0.5),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSign_2(
            _abs_1(_hyphenMinus_2(_red_1(_self), _green_1(_self))),
            0.2,
          );
        },
      );
    });
  },
  "{ :self | &(<(blue(self), 0.1), { &(>(min(red(self),green(self)), 0.5), { <(abs((-(red(self), green(self)))), 0.2) }) }) }",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "isValid",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isValidRgba_1(_rgba_1(_self));
  },
  "{ :self | isValidRgba(rgba(self)) }",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "linearRgb",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _rgb_1(_self);
  },
  "{ :self | rgb(self) }",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "red",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _first_1(_rgb_1(_self));
  },
  "{ :self | first(rgb(self)) }",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "rgba",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(_rgb_1(_self), [_alpha_1(_self)]);
  },
  "{ :self | ++(rgb(self), [alpha(self)]) }",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "rgb",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "rgb");
  },
  "{ :self | typeResponsibility(self,'rgb') }",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "rgbString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isValid_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SPL1 = _assertIsOfSize_2(
        _rounded_1(_asterisk_2(_rgb_1(_self), 255)),
        3,
      );
      let _r = _at_2(__SPL1, 1);
      let _g = _at_2(__SPL1, 2);
      let _b = _at_2(__SPL1, 3);
      let _alpha = _alpha_1(_self);
      /* Statements */
      return _if_3(_equalsSign_2(_alpha, 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _format_2("rgb(%,%,%)", [_r, _g, _b]);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _format_2("rgba(%,%,%,%)", [_r, _g, _b, _alpha]);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return "rgba(255,255,255,0)";
    });
  },
  "{ :self | if(isValid(self), { let __SPL1 = assertIsOfSize(rounded((*(rgb(self), 255))), 3); let r = at(__SPL1, 1); let g = at(__SPL1, 2); let b = at(__SPL1, 3); let alpha = alpha(self); if((=(alpha, 1)), { format('rgb(%,%,%)',[r, g, b]) }, { format('rgba(%,%,%,%)',[r, g, b, alpha]) }) }, { 'rgba(255,255,255,0)' }) }",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self | storeStringAsInitializeSlots(self) }",
);

sl.addMethodToExistingTrait(
  "Colour",
  "Colour",
  "writeSvg",
  ["self", "fileName"],
  function (_self, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fileName";
      throw new Error(errorMessage);
    } /* Statements */
    return _writeSvg_2(_asSvg_1(_self), _fileName);
  },
  "{ :self :fileName | writeSvg(asSvg(self),fileName) }",
);

sl.addType(
  false,
  "RgbColour",
  "Colour",
  ["Object", "Colour"],
  ["rgb", "alpha"],
);

sl.copyTraitMethodsToType(
  "Object",
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
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _RgbColour_2(
      _linearInterpolation_3(_rgb_1(_self), [1, 1, 1], _aNumber),
      _alpha_1(_self),
    );
  },
  "{ :self :aNumber | RgbColour(linearInterpolation(rgb(self),[1, 1, 1], aNumber), alpha(self)) }",
);

sl.addMethodToExistingType(
  "RgbColour",
  "Colour",
  "negated",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _RgbColour_2(_hyphenMinus_2(1, _rgb_1(_self)), _alpha_1(_self));
  },
  "{ :self | RgbColour(-(1, rgb(self)), alpha(self)) }",
);

sl.addMethodToExistingType(
  "RgbColour",
  "Colour",
  "over",
  ["self", "aColour"],
  function (_self, _aColour) {
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
  },
  "{ :self :aColour | let alpha = -(1, (*((-(1, alpha(aColour))), (-(1, alpha(self)))))); let m = /(*(alpha(self), (-(1, alpha(aColour)))), alpha); let n = /(alpha(aColour), alpha); RgbColour(+((*(rgb(self), m)), (*(rgb(aColour), n))), alpha) }",
);

sl.addMethodToExistingType(
  "RgbColour",
  "Colour",
  "srgbDecode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _RgbColour_2(_srgbDecode_1(_rgb_1(_self)), _alpha_1(_self));
  },
  "{ :self | RgbColour(srgbDecode(rgb(self)), alpha(self)) }",
);

sl.addMethodToExistingType(
  "RgbColour",
  "Colour",
  "srgbEncode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _RgbColour_2(_srgbEncode_1(_rgb_1(_self)), _alpha_1(_self));
  },
  "{ :self | RgbColour(srgbEncode(rgb(self)), alpha(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "asColour",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOfOtherwise_3(_size_1(_self), [
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 3;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _RgbColour_2(_self, 1);
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 4;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _RgbColour_2(_take_2(_self, 3), _at_2(_self, 4));
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "asColour");
    });
  },
  "{ :self | caseOfOtherwise(size(self), [->({ 3 }, { RgbColour(self, 1) }), ->({ 4 }, { RgbColour(take(self,3), at(self, 4)) })], { error(self,'asColour') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "HsvColour",
  ["self", "alpha"],
  function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _RgbColour_2(_hsvToRgb_1(_asFloat_1(_self)), _alpha);
  },
  "{ :self :alpha | RgbColour(hsvToRgb(asFloat(self)), alpha) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "hsv",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _hsv_1);
  },
  "{ :self | collect(self,hsv:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "hue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _hue_1);
  },
  "{ :self | collect(self,hue:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "RgbColour",
  ["self", "alpha"],
  function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newRgbColour_0(), _self, _alpha);
  },
  "{ :self :alpha | initializeSlots(newRgbColour(),self, alpha) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "rgba",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _rgba_1);
  },
  "{ :self | collect(self,rgba:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "rgb",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _rgb_1);
  },
  "{ :self | collect(self,rgb:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "adobeRgbDecode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(_self, _solidus_2(563, 256));
  },
  "{ :self | ^(self, (/(563, 256))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "adobeRgbEncode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(_self, _solidus_2(256, 563));
  },
  "{ :self | ^(self, (/(256, 563))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "asColour",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _greyLevel_1(_self);
  },
  "{ :self | greyLevel(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "blue",
  ["alpha"],
  function (_alpha) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _RgbColour_2([0, 0, 1], _alpha);
  },
  "{ :alpha | RgbColour([0, 0, 1], alpha) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "cubeHelix",
  ["start", "rotations", "hue", "gamma"],
  function (_start, _rotations, _hue, _gamma) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _start, _rotations, _hue, _gamma";
      throw new Error(errorMessage);
    } /* Statements */
    return (function (_lambda) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _lambda";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_betweenAnd_3(_lambda, 0, 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _phi = _asterisk_2(
          _pi_1(2),
          _plusSign_2(_solidus_2(_start, 3), _asterisk_2(_rotations, _lambda)),
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
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_lambda, "cubeHelix: invalid input");
      });
    });
  },
  "{ :start :rotations :hue :gamma | { :lambda | if(betweenAnd(lambda,0, 1), { let phi = *(pi(2), (+((/(start, 3)), (*(rotations, lambda))))); let e = ^(lambda, gamma); let alpha = /(*(*(hue, e), (-(1, e))), 2); let m = [[-0.14861, 1.78277], [-0.29227, -0.90649], [1.97294, 0]]; +(e, (*(alpha, dot(m,[cos(phi), sin(phi)])))) }, { error(lambda,'cubeHelix: invalid input') }) } }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "green",
  ["alpha"],
  function (_alpha) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _RgbColour_2([0, 1, 0], _alpha);
  },
  "{ :alpha | RgbColour([0, 1, 0], alpha) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "greyLevel",
  ["level", "alpha"],
  function (_level, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _level, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _RgbColour_2([_level, _level, _level], _alpha);
  },
  "{ :level :alpha | RgbColour([level, level, level], alpha) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "greyLevel",
  ["level"],
  function (_level) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _level";
      throw new Error(errorMessage);
    } /* Statements */
    return _greyLevel_2(_level, 1);
  },
  "{ :level | greyLevel(level,1) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "lightnessCie",
  ["y", "yn"],
  function (_y, _yn) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _y, _yn";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_2 = function (_y, _yn) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _y, _yn";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _yyn = _solidus_2(_y, _yn);
      /* Statements */
      return _if_3(
        _greaterThanSign_2(_yyn, _circumflexAccent_2(_solidus_2(24, 116), 3)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _cubeRoot_1(_yyn);
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSign_2(
            _asterisk_2(_solidus_2(841, 108), _yyn),
            _solidus_2(16, 116),
          );
        },
      );
    };
    /* Statements */
    return _hyphenMinus_2(
      _asterisk_2(116, _f_2(_asterisk_2(_y, 100), _asterisk_2(_yn, 100))),
      16,
    );
  },
  "{ :y :yn | let f = { :y :yn | let yyn = /(y, yn); if((>(yyn, (^((/(24, 116)), 3)))), { cubeRoot(yyn) }, { +((*((/(841, 108)), yyn)), (/(16, 116))) }) }; -(*(116, f(*(y, 100), *(yn, 100))), 16) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "red",
  ["alpha"],
  function (_alpha) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _RgbColour_2([1, 0, 0], _alpha);
  },
  "{ :alpha | RgbColour([1, 0, 0], alpha) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "saturate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _clip_3(_self, 0, 1);
  },
  "{ :self | clip(self,0, 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "srgbDecode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_self, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_lessThanSignEqualsSign_2(_self, 0.04045), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_self, 12.92);
      }, function () {
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
      });
    });
  },
  "{ :self | if((=(self, 1)), { 1 }, { if((<=(self, 0.04045)), { /(self, 12.92) }, { let a = 0.055; ^((/((+(self, a)), (+(1, a)))), 2.4) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "srgbEncode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_self, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_lessThanSignEqualsSign_2(_self, 0.0031308), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(12.92, _self);
      }, function () {
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
      });
    });
  },
  "{ :self | if((=(self, 1)), { 1 }, { if((<=(self, 0.0031308)), { *(12.92, self) }, { let a = 0.055; -(*((+(1, a)), (^(self, (/(1, 2.4))))), a) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Colour",
  "turboGradient",
  ["self"],
  function (_self) {
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
    let _z_1 = function (_v) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _v";
        throw new Error(errorMessage);
      } /* Statements */
      return _at_2(_v, 3);
    };
    let _zw_1 = function (_v) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _v";
        throw new Error(errorMessage);
      } /* Statements */
      return [_at_2(_v, 3), _at_2(_v, 4)];
    };
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
      _concatenation_1([
        _plusSign_2(_dot_2(_v4, _kRedVec4), _dot_2(_v2, _kRedVec2)),
        _plusSign_2(_dot_2(_v4, _kGreenVec4), _dot_2(_v2, _kGreenVec2)),
        _plusSign_2(_dot_2(_v4, _kBlueVec4), _dot_2(_v2, _kBlueVec2)),
      ]),
    );
  },
  "{ :self | let kRedVec4 = [0.13572138, 4.61539260, -42.66032258, 132.13108234]; let kGreenVec4 = [0.09140261, 2.19418839, 4.84296658, -14.18503333]; let kBlueVec4 = [0.10667330, 12.64194608, -60.58204836, 110.36276771]; let kRedVec2 = [-152.94239396, 59.28637943]; let kGreenVec2 = [4.27729857, 2.82956604]; let kBlueVec2 = [-89.90310912, 27.34824973]; let z = { :v | at(v, 3) }; let zw = { :v | [at(v, 3), at(v, 4)] }; let x = saturate(self); let v4 = [1.0, x, *(x, x), *(*(x, x), x)]; let v2 = [*(zw(v4), z(v4))]; saturate(concatenation([+(dot(v4, kRedVec4), dot(v2, kRedVec2)), +(dot(v4, kGreenVec4), dot(v2, kGreenVec2)), +(dot(v4, kBlueVec4), dot(v2, kBlueVec2))])) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "adobeRgbDecode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _adobeRgbDecode_1);
  },
  "{ :self | collect(self,adobeRgbDecode:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "adobeRgbEncode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _adobeRgbEncode_1);
  },
  "{ :self | collect(self,adobeRgbEncode:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "adobeRgbToXyz",
  ["self"],
  function (_self) {
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
  },
  "{ :self | let m = [[0.5767309, 0.1855540, 0.1881852], [0.2973769, 0.6273491, 0.0752741], [0.0270343, 0.0706872, 0.9911085]]; dot(m,self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "basicHsvToRgb",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL2 = _assertIsOfSize_2(_asFloat_1(_self), 3);
    let _hue = _at_2(__SPL2, 1);
    let _saturation = _at_2(__SPL2, 2);
    let _brightness = _at_2(__SPL2, 3);
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
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [_v, _t, _p];
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [_q, _v, _p];
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 2;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [_p, _v, _t];
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 3;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [_p, _q, _v];
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 4;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [_t, _p, _v];
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 5;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [_v, _p, _q];
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2("hsvToRgb", "implementation error");
    });
  },
  "{ :self | let __SPL2 = assertIsOfSize(asFloat(self), 3); let hue = at(__SPL2, 1); let saturation = at(__SPL2, 2); let brightness = at(__SPL2, 3); let s = max(min(saturation,1),0); let v = max(min(brightness,1),0); let h = %((*(hue, 360)), 360); let i = //(h, 60); let f = /((%(h, 60)), 60); let p = *((-(1, s)), v); let q = *((-(1, (*(s, f)))), v); let t = *((-(1, (*(s, (-(1, f)))))), v); caseOfOtherwise(i, [->({ 0 }, { [v, t, p] }), ->({ 1 }, { [q, v, p] }), ->({ 2 }, { [p, v, t] }), ->({ 3 }, { [p, q, v] }), ->({ 4 }, { [t, p, v] }), ->({ 5 }, { [v, p, q] })], { error('hsvToRgb','implementation error') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "basicRgbToHsv",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL3 = _assertIsOfSize_2(_asFloat_1(_self), 3);
    let _r = _at_2(__SPL3, 1);
    let _g = _at_2(__SPL3, 2);
    let _b = _at_2(__SPL3, 3);
    let _v = _max_1([_r, _g, _b]);
    let _c = _hyphenMinus_2(_v, _min_1([_r, _g, _b]));
    let _s = _if_3(_equalsSign_2(_v, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(_c, _v);
    });
    let _h = _if_3(_equalsSign_2(_c, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_equalsSign_2(_v, _r), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          60,
          _percentSign_2(_solidus_2(_hyphenMinus_2(_g, _b), _c), 6),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_equalsSign_2(_v, _g), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(
            60,
            _plusSign_2(_solidus_2(_hyphenMinus_2(_b, _r), _c), 2),
          );
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
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
  "{ :self | let __SPL3 = assertIsOfSize(asFloat(self), 3); let r = at(__SPL3, 1); let g = at(__SPL3, 2); let b = at(__SPL3, 3); let v = max([r, g, b]); let c = -(v, min([r, g, b])); let s = if((=(v, 0)), { 0 }, { /(c, v) }); let h = if((=(c, 0)), { 0 }, { if((=(v, r)), { *(60, (%(/((-(g, b)), c), 6))) }, { if((=(v, g)), { *(60, (+(/((-(b, r)), c), 2))) }, { *(60, (+(/((-(r, g)), c), 4))) }) }) }); [/(h, 360), s, v] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "basicSrgbDecode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _srgbDecode_1);
  },
  "{ :self | collect(self,srgbDecode:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "basicSrgbEncode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _srgbEncode_1);
  },
  "{ :self | collect(self,srgbEncode:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "cmyToRgb",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(1, _self);
  },
  "{ :self | -(1, self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "hslToHsv",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL4 = _assertIsOfSize_2(_self, 3);
    let _h = _at_2(__SPL4, 1);
    let _s = _at_2(__SPL4, 2);
    let _l = _at_2(__SPL4, 3);
    let _v = _plusSign_2(
      _l,
      _asterisk_2(_s, _min_2(_l, _hyphenMinus_2(1, _l))),
    );
    /* Statements */
    return [
      _h,
      _if_3(_equalsSign_2(_v, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(2, _hyphenMinus_2(1, _solidus_2(_l, _v)));
      }),
      _v,
    ];
  },
  "{ :self | let __SPL4 = assertIsOfSize(self, 3); let h = at(__SPL4, 1); let s = at(__SPL4, 2); let l = at(__SPL4, 3); let v = +(l, (*(s, min(l,-(1, l))))); [h, if((=(v, 0)), { 0 }, { *(2, (-(1, (/(l, v))))) }), v] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "hslToRgb",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL5 = _assertIsOfSize_2(_self, 3);
    let _hUnit = _at_2(__SPL5, 1);
    let _s = _at_2(__SPL5, 2);
    let _l = _at_2(__SPL5, 3);
    let _h = _asterisk_2(_hUnit, 360);
    let _a = _asterisk_2(_s, _min_2(_l, _hyphenMinus_2(1, _l)));
    /* Statements */
    return _collect_2([0, 8, 4], function (_n) {
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
          _max_2(-1, _min_1([_hyphenMinus_2(_k, 3), _hyphenMinus_2(9, _k), 1])),
        ),
      );
    });
  },
  "{ :self | let __SPL5 = assertIsOfSize(self, 3); let hUnit = at(__SPL5, 1); let s = at(__SPL5, 2); let l = at(__SPL5, 3); let h = *(hUnit, 360); let a = *(s, min(l,-(1, l))); collect([0, 8, 4], { :n | let k = %((+(n, (/(h, 30)))), 12); -(l, (*(a, max(-1,min([-(k, 3), -(9, k), 1]))))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "hsvToHsl",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL6 = _assertIsOfSize_2(_self, 3);
    let _h = _at_2(__SPL6, 1);
    let _s = _at_2(__SPL6, 2);
    let _v = _at_2(__SPL6, 3);
    let _l = _asterisk_2(_v, _hyphenMinus_2(1, _solidus_2(_s, 2)));
    /* Statements */
    return [
      _h,
      _if_3(_includes_2([0, 1], _l), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _hyphenMinus_2(_v, _l),
          _min_2(_l, _hyphenMinus_2(1, _l)),
        );
      }),
      _l,
    ];
  },
  "{ :self | let __SPL6 = assertIsOfSize(self, 3); let h = at(__SPL6, 1); let s = at(__SPL6, 2); let v = at(__SPL6, 3); let l = *(v, (-(1, (/(s, 2))))); [h, if(includes([0, 1],l), { 0 }, { /((-(v, l)), min(l,-(1, l))) }), l] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "hsvToRgb",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isVector_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _basicHsvToRgb_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_self, _hsvToRgb_1);
    });
  },
  "{ :self | if(isVector(self), { basicHsvToRgb(self) }, { collect(self,hsvToRgb:/1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "isValidHsl",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allTrue_1(_betweenAnd_3(_self, 0, 1));
  },
  "{ :self | allTrue(betweenAnd(self,0, 1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "isValidHsv",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allTrue_1(_betweenAnd_3(_self, 0, 1));
  },
  "{ :self | allTrue(betweenAnd(self,0, 1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "isValidRgb",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allTrue_1(_betweenAnd_3(_self, 0, 1));
  },
  "{ :self | allTrue(betweenAnd(self,0, 1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "isValidRgba",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allTrue_1(_betweenAnd_3(_self, 0, 1));
  },
  "{ :self | allTrue(betweenAnd(self,0, 1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "jabToJch",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL7 = _assertIsOfSize_2(_self, 3);
    let _l = _at_2(__SPL7, 1);
    let _a = _at_2(__SPL7, 2);
    let _b = _at_2(__SPL7, 3);
    let __SPL8 = _assertIsOfSize_2(_toPolarCoordinates_1([_a, _b]), 2);
    let _c = _at_2(__SPL8, 1);
    let _h = _at_2(__SPL8, 2);
    /* Statements */
    return [_l, _c, _percentSign_2(_radiansToDegrees_1(_h), 360)];
  },
  "{ :self | let __SPL7 = assertIsOfSize(self, 3); let l = at(__SPL7, 1); let a = at(__SPL7, 2); let b = at(__SPL7, 3); let __SPL8 = assertIsOfSize(toPolarCoordinates([a, b]), 2); let c = at(__SPL8, 1); let h = at(__SPL8, 2); [l, c, %(radiansToDegrees(h), 360)] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "jchToJab",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL9 = _assertIsOfSize_2(_self, 3);
    let _j = _at_2(__SPL9, 1);
    let _c = _at_2(__SPL9, 2);
    let _h = _at_2(__SPL9, 3);
    let _hRadians = _degree_1(_h);
    let _a = _asterisk_2(_c, _cos_1(_hRadians));
    let _b = _asterisk_2(_c, _sin_1(_hRadians));
    /* Statements */
    return [_j, _a, _b];
  },
  "{ :self | let __SPL9 = assertIsOfSize(self, 3); let j = at(__SPL9, 1); let c = at(__SPL9, 2); let h = at(__SPL9, 3); let hRadians = degree(h); let a = *(c, cos(hRadians)); let b = *(c, sin(hRadians)); [j, a, b] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "labToLch",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _jabToJch_1(_self);
  },
  "{ :self | jabToJch(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "labToXyz",
  ["self", "reference"],
  function (_self, _reference) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _reference";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL10 = _assertIsOfSize_2(_self, 3);
    let _l = _at_2(__SPL10, 1);
    let _a = _at_2(__SPL10, 2);
    let _b = _at_2(__SPL10, 3);
    let __SPL11 = _assertIsOfSize_2(_reference, 3);
    let _rx = _at_2(__SPL11, 1);
    let _ry = _at_2(__SPL11, 2);
    let _rz = _at_2(__SPL11, 3);
    let _delta = _solidus_2(6, 29);
    let _epsilon = _cubed_1(_delta);
    let _kappa = _solidus_2(8, _epsilon);
    let _fy = _solidus_2(_plusSign_2(_l, 16), 116);
    let _fx = _plusSign_2(_solidus_2(_a, 500), _fy);
    let _fz = _hyphenMinus_2(_fy, _solidus_2(_b, 200));
    let _fx3 = _cubed_1(_fx);
    let _fz3 = _cubed_1(_fz);
    let _x = _if_3(_greaterThanSign_2(_fx3, _epsilon), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _fx3;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(_hyphenMinus_2(_asterisk_2(116, _fx), 16), _kappa);
    });
    let _y = _if_3(
      _greaterThanSign_2(_l, _asterisk_2(_kappa, _epsilon)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _cubed_1(_solidus_2(_plusSign_2(_l, 16), 116));
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_l, _kappa);
      },
    );
    let _z = _if_3(_greaterThanSign_2(_fz3, _epsilon), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _fz3;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(_hyphenMinus_2(_asterisk_2(116, _fz), 16), _kappa);
    });
    /* Statements */
    return _solidus_2([
      _asterisk_2(_x, _rx),
      _asterisk_2(_y, _ry),
      _asterisk_2(_z, _rz),
    ], 100);
  },
  "{ :self :reference | let __SPL10 = assertIsOfSize(self, 3); let l = at(__SPL10, 1); let a = at(__SPL10, 2); let b = at(__SPL10, 3); let __SPL11 = assertIsOfSize(reference, 3); let rx = at(__SPL11, 1); let ry = at(__SPL11, 2); let rz = at(__SPL11, 3); let delta = /(6, 29); let epsilon = cubed(delta); let kappa = /(8, epsilon); let fy = /((+(l, 16)), 116); let fx = +((/(a, 500)), fy); let fz = -(fy, (/(b, 200))); let fx3 = cubed(fx); let fz3 = cubed(fz); let x = if((>(fx3, epsilon)), { fx3 }, { /((-(*(116, fx), 16)), kappa) }); let y = if((>(l, (*(kappa, epsilon)))), { cubed((/((+(l, 16)), 116))) }, { /(l, kappa) }); let z = if((>(fz3, epsilon)), { fz3 }, { /((-(*(116, fz), 16)), kappa) }); /([*(x, rx), *(y, ry), *(z, rz)], 100) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "labToXyz",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _d65 = [95.0489, 100, 108.8840];
    /* Statements */
    return _labToXyz_2(_self, _d65);
  },
  "{ :self | let d65 = [95.0489, 100, 108.8840]; labToXyz(self,d65) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "lchToLab",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _jchToJab_1(_self);
  },
  "{ :self | jchToJab(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "lchToLuv",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _jchToJab_1(_self);
  },
  "{ :self | jchToJab(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "luvToLch",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _jabToJch_1(_self);
  },
  "{ :self | jabToJch(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "luvToXyz",
  ["self", "reference"],
  function (_self, _reference) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _reference";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL12 = _assertIsOfSize_2(_self, 3);
    let _l = _at_2(__SPL12, 1);
    let _u = _at_2(__SPL12, 2);
    let _v = _at_2(__SPL12, 3);
    let __SPL13 = _assertIsOfSize_2(_reference, 3);
    let _rx = _at_2(__SPL13, 1);
    let _ry = _at_2(__SPL13, 2);
    let _rz = _at_2(__SPL13, 3);
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
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _circumflexAccent_2(_solidus_2(_plusSign_2(_l, 16), 116), 3);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_l, _kappa);
      },
    );
    let _a = _if_3(_equalsSign_2(_l, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    }, function () {
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
    });
    let _b = _asterisk_2(-5, _y);
    let _c = _solidus_2(-1, 3);
    let _d = _if_3(_equalsSign_2(_l, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    }, function () {
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
    });
    let _x = _solidus_2(_hyphenMinus_2(_d, _b), _hyphenMinus_2(_a, _c));
    let _z = _plusSign_2(_asterisk_2(_x, _a), _b);
    /* Statements */
    return [_x, _y, _z];
  },
  "{ :self :reference | let __SPL12 = assertIsOfSize(self, 3); let l = at(__SPL12, 1); let u = at(__SPL12, 2); let v = at(__SPL12, 3); let __SPL13 = assertIsOfSize(reference, 3); let rx = at(__SPL13, 1); let ry = at(__SPL13, 2); let rz = at(__SPL13, 3); let epsilon = /(216, 24389); let kappa = /(24389, 27); let u0 = /((*(4, rx)), (+(+(rx, (*(15, ry))), (*(3, rz))))); let v0 = /((*(9, ry)), (+(+(rx, (*(15, ry))), (*(3, rz))))); let y = if((>(l, (*(kappa, epsilon)))), { ^((/((+(l, 16)), 116)), 3) }, { /(l, kappa) }); let a = if((=(l, 0)), { 0 }, { /((-((/((*(52, l)), (+(u, (*(*(13, l), u0)))))), 1)), 3) }); let b = *(-5, y); let c = /(-1, 3); let d = if((=(l, 0)), { 0 }, { *(y, (-((/((*(39, l)), (+(v, (*(*(13, l), v0)))))), 5))) }); let x = /((-(d, b)), (-(a, c))); let z = +((*(x, a)), b); [x, y, z] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "luvToXyz",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _d65 = [95.0489, 100, 108.8840];
    /* Statements */
    return _luvToXyz_2(_self, _d65);
  },
  "{ :self | let d65 = [95.0489, 100, 108.8840]; luvToXyz(self,d65) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "oklabToXyz",
  ["self"],
  function (_self) {
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
    return _dot_2(_lmsToXyz, _cubed_1(_lms));
  },
  "{ :self | let labToLms = [[1.0, 0.3963377922, 0.2158037581], [1.0, -0.1055613423, -0.0638541748], [1.0, -0.0894841821, -1.2914855379]]; let lmsToXyz = [[1.2270138511, -0.5577999807, 0.2812561490], [-0.0405801784, 1.1122568696, -0.0716766787], [-0.0763812845, -0.4214819784, 1.5861632204]]; let lms = dot(labToLms,self); dot(lmsToXyz,cubed(lms)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "quilezGradient",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL14 = _assertIsOfSize_2(_self, 4);
    let _a = _at_2(__SPL14, 1);
    let _b = _at_2(__SPL14, 2);
    let _c = _at_2(__SPL14, 3);
    let _d = _at_2(__SPL14, 4);
    /* Statements */
    return (function (_t) {
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
    });
  },
  "{ :self | let __SPL14 = assertIsOfSize(self, 4); let a = at(__SPL14, 1); let b = at(__SPL14, 2); let c = at(__SPL14, 3); let d = at(__SPL14, 4); { :t | +(a, (*(b, cos((*(pi(2), (+((*(c, t)), d)))))))) } }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "xyzToOklab",
  ["self"],
  function (_self) {
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
  },
  "{ :self | let xyzToLms = [[0.8189330101, 0.3618667424, -0.1288597137], [0.0329845436, 0.9293118715, 0.0361456387], [0.0482003018, 0.2643662691, 0.6338517070]]; let lmsToLab = [[0.2104542553, 0.7936177850, -0.0040720468], [1.9779984951, -2.4285922050, 0.4505937099], [0.0259040371, 0.7827717662, -0.8086757660]]; let lms = dot(xyzToLms,self); dot(lmsToLab,cubeRoot(lms)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "rgbToHsl",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hsvToHsl_1(_rgbToHsv_1(_self));
  },
  "{ :self | hsvToHsl(rgbToHsv(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "rgbToHsv",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isVector_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _basicRgbToHsv_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_self, _rgbToHsv_1);
    });
  },
  "{ :self | if(isVector(self), { basicRgbToHsv(self) }, { collect(self,rgbToHsv:/1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "rgbToXyz",
  ["self"],
  function (_self) {
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
  },
  "{ :self | let m = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]]; dot(m,self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "saturate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _clip_3(_self, 0, 1);
  },
  "{ :self | clip(self,0, 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "srgbDecode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isVector_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _basicSrgbDecode_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_self, _srgbDecode_1);
    });
  },
  "{ :self | if(isVector(self), { basicSrgbDecode(self) }, { collect(self,srgbDecode:/1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "srgbEncode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isVector_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _basicSrgbEncode_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_self, _srgbEncode_1);
    });
  },
  "{ :self | if(isVector(self), { basicSrgbEncode(self) }, { collect(self,srgbEncode:/1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "xyzToLab",
  ["self", "reference"],
  function (_self, _reference) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _reference";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL15 = _assertIsOfSize_2(_self, 3);
    let _x = _at_2(__SPL15, 1);
    let _y = _at_2(__SPL15, 2);
    let _z = _at_2(__SPL15, 3);
    let __SPL16 = _assertIsOfSize_2(_reference, 3);
    let _rx = _at_2(__SPL16, 1);
    let _ry = _at_2(__SPL16, 2);
    let _rz = _at_2(__SPL16, 3);
    let _delta = _solidus_2(6, 29);
    let _epsilon = _cubed_1(_delta);
    let _kappa = _solidus_2(8, _epsilon);
    let _f_1 = function (_tu) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _tu";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _t = _asterisk_2(_tu, 100);
      /* Statements */
      return _if_3(_greaterThanSign_2(_t, _epsilon), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _cubeRoot_1(_t);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_plusSign_2(_asterisk_2(_kappa, _t), 16), 116);
      });
    };
    let _fX = _f_1(_solidus_2(_x, _rx));
    let _fY = _f_1(_solidus_2(_y, _ry));
    let _fZ = _f_1(_solidus_2(_z, _rz));
    /* Statements */
    return [
      _hyphenMinus_2(_asterisk_2(116, _fY), 16),
      _asterisk_2(500, _hyphenMinus_2(_fX, _fY)),
      _asterisk_2(200, _hyphenMinus_2(_fY, _fZ)),
    ];
  },
  "{ :self :reference | let __SPL15 = assertIsOfSize(self, 3); let x = at(__SPL15, 1); let y = at(__SPL15, 2); let z = at(__SPL15, 3); let __SPL16 = assertIsOfSize(reference, 3); let rx = at(__SPL16, 1); let ry = at(__SPL16, 2); let rz = at(__SPL16, 3); let delta = /(6, 29); let epsilon = cubed(delta); let kappa = /(8, epsilon); let f = { :tu | let t = *(tu, 100); if((>(t, epsilon)), { cubeRoot(t) }, { /((+((*(kappa, t)), 16)), 116) }) }; let fX = f(/(x, rx)); let fY = f(/(y, ry)); let fZ = f(/(z, rz)); [-((*(116, fY)), 16), *(500, (-(fX, fY))), *(200, (-(fY, fZ)))] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "xyzToLab",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _d65 = [95.0489, 100, 108.8840];
    /* Statements */
    return _xyzToLab_2(_self, _d65);
  },
  "{ :self | let d65 = [95.0489, 100, 108.8840]; xyzToLab(self,d65) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "xyzToLuv",
  ["self", "reference"],
  function (_self, _reference) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _reference";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_self, [0, 0, 0]), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return [0, 0, 0];
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SPL17 = _assertIsOfSize_2(_self, 3);
      let _x = _at_2(__SPL17, 1);
      let _y = _at_2(__SPL17, 2);
      let _z = _at_2(__SPL17, 3);
      let __SPL18 = _assertIsOfSize_2(_reference, 3);
      let _rx = _at_2(__SPL18, 1);
      let _ry = _at_2(__SPL18, 2);
      let _rz = _at_2(__SPL18, 3);
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
      let _l = _if_3(_greaterThanSign_2(_yr, _epsilon), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _hyphenMinus_2(_asterisk_2(116, _cubeRoot_1(_yr)), 16);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(_kappa, _yr);
      });
      let _u = _asterisk_2(_asterisk_2(13, _l), _hyphenMinus_2(_u1, _ur));
      let _v = _asterisk_2(_asterisk_2(13, _l), _hyphenMinus_2(_v1, _vr));
      /* Statements */
      return [_l, _u, _v];
    });
  },
  "{ :self :reference | if((=(self, [0, 0, 0])), { [0, 0, 0] }, { let __SPL17 = assertIsOfSize(self, 3); let x = at(__SPL17, 1); let y = at(__SPL17, 2); let z = at(__SPL17, 3); let __SPL18 = assertIsOfSize(reference, 3); let rx = at(__SPL18, 1); let ry = at(__SPL18, 2); let rz = at(__SPL18, 3); let epsilon = /(216, 24389); let kappa = /(24389, 27); let yr = *((/(y, ry)), 100); let xyz = +(+(x, (*(15, y))), (*(3, z))); let rxryrz = +(+(rx, (*(15, ry))), (*(3, rz))); let u1 = /((*(4, x)), xyz); let v1 = /((*(9, y)), xyz); let ur = /((*(4, rx)), rxryrz); let vr = /((*(9, ry)), rxryrz); let l = if((>(yr, epsilon)), { -((*(116, cubeRoot(yr))), 16) }, { *(kappa, yr) }); let u = *(*(13, l), (-(u1, ur))); let v = *(*(13, l), (-(v1, vr))); [l, u, v] }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "xyzToLuv",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _d65 = [95.0489, 100, 108.8840];
    /* Statements */
    return _xyzToLuv_2(_self, _d65);
  },
  "{ :self | let d65 = [95.0489, 100, 108.8840]; xyzToLuv(self,d65) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "xyzToAdobeRgb",
  ["self"],
  function (_self) {
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
  },
  "{ :self | let m = [[+2.0413690, -0.5649464, -0.3446944], [-0.9692660, +1.8760108, +0.0415560], [+0.0134474, -0.1183897, +1.0154096]]; dot(m,self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "xyzToRgb",
  ["self"],
  function (_self) {
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
  },
  "{ :self | let m = [[3.2406255, -1.5372080, -0.4986286], [-0.9689307, 1.8757561, 0.0415175], [0.0557101, -0.2040211, 1.0569959]]; dot(m,self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "xyyToXyz",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL19 = _assertIsOfSize_2(_self, 3);
    let _x = _at_2(__SPL19, 1);
    let _y1 = _at_2(__SPL19, 2);
    let _y2 = _at_2(__SPL19, 3);
    /* Statements */
    return _if_3(_equalsSign_2(_y1, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return [0, 0, 0];
    }, function () {
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
    });
  },
  "{ :self | let __SPL19 = assertIsOfSize(self, 3); let x = at(__SPL19, 1); let y1 = at(__SPL19, 2); let y2 = at(__SPL19, 3); if((=(y1, 0)), { [0, 0, 0] }, { [/((*(x, y2)), y1), y2, /((*((-(-(1, x), y1)), y2)), y1)] }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Colour",
  "xyzToXyy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL20 = _assertIsOfSize_2(_self, 3);
    let _x = _at_2(__SPL20, 1);
    let _y = _at_2(__SPL20, 2);
    let _z = _at_2(__SPL20, 3);
    let _n = _plusSign_2(_plusSign_2(_x, _y), _z);
    /* Statements */
    return _if_3(_equalsSign_2(_n, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return [1, 1, 1];
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _m = _solidus_2(1, _n);
      /* Statements */
      return [_asterisk_2(_x, _m), _asterisk_2(_y, _m), _y];
    });
  },
  "{ :self | let __SPL20 = assertIsOfSize(self, 3); let x = at(__SPL20, 1); let y = at(__SPL20, 2); let z = at(__SPL20, 3); let n = +(+(x, y), z); if((=(n, 0)), { [1, 1, 1] }, { let m = /(1, n); [*(x, m), *(y, m), y] }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Colour",
  "isHexTriplet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_beginsWith_2(_self, "#"), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _verticalLine_2(_equalsSign_2(_size_1(_self), 7), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_size_1(_self), 9);
      });
    });
  },
  "{ :self | &(beginsWith(self,'#'), { |(=(size(self), 7), { =(size(self), 9) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Colour",
  "isRgbTriplet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_beginsWith_2(_self, "rgb("), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _endsWith_2(_self, ")");
    });
  },
  "{ :self | &(beginsWith(self,'rgb('), { endsWith(self,')') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Colour",
  "parseHexColour",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asColour_1(_parseHexTriplet_1(_self));
  },
  "{ :self | asColour(parseHexTriplet(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Colour",
  "parseHexTriplet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_self);
    /* Statements */
    _ifFalse_2(_isHexTriplet_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "String>>parseHexTriplet: not hex triplet");
    });
    return _if_3(
      _verticalLine_2(_equalsSign_2(_k, 7), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_k, 9);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _r = _copyFromTo_3(_self, 2, 3);
        let _g = _copyFromTo_3(_self, 4, 5);
        let _b = _copyFromTo_3(_self, 6, 7);
        let _f_1 = function (_x) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _x";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(_x, function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _solidus_2(_parseSmallInteger_2(_each, 16), 255);
          });
        };
        /* Statements */
        return _if_3(_equalsSign_2(_k, 9), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _a = _if_3(_equalsSign_2(_k, 9), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _copyFromTo_3(_self, 8, 9);
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return "FF";
          });
          /* Statements */
          return _f_1([_r, _g, _b, _a]);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _f_1([_r, _g, _b]);
        });
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "parseHexTriplet");
      },
    );
  },
  "{ :self | let k = size(self); ifFalse(isHexTriplet(self), { error(self,'String>>parseHexTriplet: not hex triplet') }); if((|(=(k, 7), { =(k, 9) })), { let r = copyFromTo(self,2, 3); let g = copyFromTo(self,4, 5); let b = copyFromTo(self,6, 7); let f = { :x | collect(x, { :each | /(parseSmallInteger(each,16), 255) }) }; if((=(k, 9)), { let a = if((=(k, 9)), { copyFromTo(self,8, 9) }, { 'FF' }); f([r, g, b, a]) }, { f([r, g, b]) }) }, { error(self,'parseHexTriplet') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Colour",
  "parseRgbColour",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asColour_1(_parseRgbTriplet_1(_self));
  },
  "{ :self | asColour(parseRgbTriplet(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Colour",
  "parseRgbTriplet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isRgbTriplet_1(_self), function () {
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
      return _if_3(_betweenAnd_3(_size_1(_c), 3, 4), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_c, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(_parseSmallInteger_2(_each, 10), 255);
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "String>>parseRgbTriplet: invalid triplet");
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "String>>parseRgbTriplet: not Rgb triplet");
    });
  },
  "{ :self | if(isRgbTriplet(self), { let c = splitBy(copyFromTo(self,5, -(size(self), 1)),','); if(betweenAnd(size(c),3, 4), { collect(c, { :each | /(parseSmallInteger(each,10), 255) }) }, { error(self,'String>>parseRgbTriplet: invalid triplet') }) }, { error(self,'String>>parseRgbTriplet: not Rgb triplet') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Colour",
  "colourCheckerChart",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "ColourCheckerChart");
  },
  "{ :self | requireLibraryItem(self,'ColourCheckerChart') }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Colour",
  "svgColourCatalogue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "SvgColourCatalogue");
  },
  "{ :self | requireLibraryItem(self,'SvgColourCatalogue') }",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "SvgColourCatalogue"],
      ["category", "Graphics/Colour"],
      ["url", "https://rohandrape.net/sw/hsc3-data/data/colour/svg.json"],
      ["mimeType", "application/json"],
      ["parser", function (_libraryItem) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _libraryItem";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_libraryItem, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(_each, 255);
        });
      }],
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
      ["parser", function (_libraryItem) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _libraryItem";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_libraryItem, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _parseHexTriplet_1(_each);
        });
      }],
    ]),
  ),
);
