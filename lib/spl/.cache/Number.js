sl.addTrait("Number", "Number");

sl.addTraitMethod(
  "Number",
  "Number",
  "plusSign",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _conjugated_1(_self);
  },
  "{ :self |\n\t\tself.conjugated\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "asterisk",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sign_1(_self);
  },
  "{ :self |\n\t\tself.sign\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "hyphenMinus",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _negated_1(_self);
  },
  "{ :self |\n\t\tself.negated\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "solidus",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _reciprocal_1(_self);
  },
  "{ :self |\n\t\tself.reciprocal\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "circumflexAccent",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _circumflexAccent_2(_e, _self);
  },
  "{ :self |\n\t\te ^ self\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "exclamationMark",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _factorialOrGamma_1(_self);
  },
  "{ :self |\n\t\tself.factorialOrGamma\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "solidusSolidus",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _quotient_2(_self, _aNumber);
  },
  "{ :self :aNumber |\n\t\tself.quotient(aNumber)\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "reverseSolidusReverseSolidus",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _remainder_2(_self, _aNumber);
  },
  "{ :self :aNumber |\n\t\tself.remainder(aNumber)\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "percentSign",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hyphenMinus_2(
      _self,
      _asterisk_2(_solidusSolidus_2(_self, _aNumber), _aNumber),
    );
  },
  "{ :self :aNumber |\n\t\tself - (self // aNumber * aNumber)\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "tilde",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isCloseTo_2(_self, _aNumber);
  },
  "{ :self :aNumber |\n\t\tself.isCloseTo(aNumber)\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "exclamationMarkTilde",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _not_1(_isCloseTo_2(_self, _aNumber));
  },
  "{ :self :aNumber |\n\t\tself.isCloseTo(aNumber).not\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "lessThanSignTilde",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _verticalLine_2(_lessThanSign_2(_self, _aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isCloseTo_2(_self, _aNumber);
    });
  },
  "{ :self :aNumber |\n\t\tself < aNumber | {\n\t\t\tself.isCloseTo(aNumber)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "greaterThanSignTilde",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _verticalLine_2(_greaterThanSign_2(_self, _aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isCloseTo_2(_self, _aNumber);
    });
  },
  "{ :self :aNumber |\n\t\tself > aNumber | {\n\t\t\tself.isCloseTo(aNumber)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "abs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isNegative_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _negated_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _self;
    });
  },
  "{ :self |\n\t\tself.isNegative.if {\n\t\t\tself.negated\n\t\t} {\n\t\t\tself\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "absArg",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _absArg_1(_j_2(_self, 0));
  },
  "{ :self |\n\t\tself.j(0).absArg\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "absSquared",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _abs = _abs_1(_self);
    /* Statements */
    return _asterisk_2(_abs, _abs);
  },
  "{ :self |\n\t\tlet abs = self.abs;\n\t\tabs * abs\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "arcMinute",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_self, 0.0002908882086657216);
  },
  "{ :self |\n\t\tself * 0.0002908882086657216\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "arcSecond",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_self, 0.00000484813681109536);
  },
  "{ :self |\n\t\tself * 0.00000484813681109536\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "angleVector",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return [_cos_1(_self), _sin_1(_self)];
  },
  "{ :self |\n\t\t[self.cos, self.sin]\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "arg",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isZero_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _arg_1(_j_2(_self, 0));
    });
  },
  "{ :self |\n\t\tself.isZero.if {\n\t\t\t0\n\t\t} {\n\t\t\tself.j(0).arg\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "arithmeticGeometricMean",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _a = _self;
    let _b = _aNumber;
    /* Statements */
    _whileFalse_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isVeryCloseTo_2(_a, _b);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return /* List Assignment */ (function () {
        const __genSym112 = [
          _asterisk_2(0.5, _plusSign_2(_a, _b)),
          _sqrt_1(_asterisk_2(_a, _b)),
        ];
        _a = _at_2(__genSym112, 1);
        _b = _at_2(__genSym112, 2);
      })();
    });
    return _a;
  },
  "{ :self :aNumber |\n\t\tlet a = self;\n\t\tlet b = aNumber;\n\t\t{\n\t\t\ta.isVeryCloseTo(b)\n\t\t}.whileFalse {\n\t\t\t[a, b] := [0.5 * (a + b), (a * b).sqrt]\n\t\t};\n\t\ta\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "asInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _truncated_1(_self);
  },
  "{ :self |\n\t\tself.truncated\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "asNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "asStringWithCommas",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.toLocaleString("en-US");
  },
  "{ :self |\n\t\t<primitive: return _self.toLocaleString('en-US');>\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "atRandom",
  ["self", "shape"],
  function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _shape"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _atRandom_3(_self, _shape, _system);
  },
  "{ :self :shape |\n\t\tself.atRandom(shape, system)\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "atRandom",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _atRandom_3(_self, [], _system);
  },
  "{ :self |\n\t\tself.atRandom([], system)\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "basicPlus",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isNumber_1(_aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _plusSign_2(_self, _aNumber);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_1(
        _plusSignPlusSign_2("Number>>basicPlus: operand not number", _aNumber),
      );
    });
  },
  "{ :self :aNumber |\n\t\taNumber.isNumber.if {\n\t\t\tself + aNumber\n\t\t} {\n\t\t\t('Number>>basicPlus: operand not number' ++ aNumber).error\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "basicTimes",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isNumber_1(_aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _asterisk_2(_self, _aNumber);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_1(
        _plusSignPlusSign_2(
          "Number>>basicTimes: operand not number: ",
          _aNumber,
        ),
      );
    });
  },
  "{ :self :aNumber |\n\t\taNumber.isNumber.if {\n\t\t\tself * aNumber\n\t\t} {\n\t\t\t('Number>>basicTimes: operand not number: ' ++ aNumber).error\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "brunsConstant",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(1.90216058, _self);
  },
  "{ :self |\n\t\t1.90216058 * self\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "ceiling",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _truncation = _truncated_1(_self);
    /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _truncation;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_self, _truncation), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _truncation;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _plusSign_2(_truncation, 1);
      });
    });
  },
  "{ :self |\n\t\tlet truncation = self.truncated;\n\t\t(self <= 0).if {\n\t\t\ttruncation\n\t\t} {\n\t\t\t(self = truncation).if {\n\t\t\t\ttruncation\n\t\t\t} {\n\t\t\t\ttruncation + 1\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "clamp",
  ["self", "low", "high"],
  function (_self, _low, _high) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _low, _high"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _max_2(_low, _min_2(_self, _high));
  },
  "{ :self :low :high |\n\t\tlow.max(self.min(high))\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "continuedFraction",
  ["self", "limit"],
  function (_self, _limit) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _limit"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    let _i = _floor_1(_self);
    let _f = _hyphenMinus_2(_self, _i);
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(_greaterThanSign_2(_limit, 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _not_1(_isVeryCloseTo_2(_f, 0));
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      _add_2(_answer, _i);
      _f = _solidus_2(1, _f);
      _i = _floor_1(_f);
      _f = _hyphenMinus_2(_f, _i);
      return _limit = _hyphenMinus_2(_limit, 1);
    });
    _add_2(_answer, _i);
    return _answer;
  },
  "{ :self :limit |\n\t\tlet answer = [];\n\t\tlet i = self.floor;\n\t\tlet f = self - i;\n\t\t{\n\t\t\t(limit > 1) & {\n\t\t\t\tf.isVeryCloseTo(0).not\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\tanswer.add(i);\n\t\t\tf := 1 / f;\n\t\t\ti := f.floor;\n\t\t\tf := f - i;\n\t\t\tlimit := limit - 1\n\t\t};\n\t\tanswer.add(i);\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "continuedFraction",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _continuedFraction_2(_self, 24);
  },
  "{ :self |\n\t\tself.continuedFraction(24)\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "copySignTo",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_signBit_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _negated_1(_abs_1(_aNumber));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _abs_1(_aNumber);
    });
  },
  "{ :self :aNumber |\n\t\tself.signBit.if {\n\t\t\taNumber.abs.negated\n\t\t} {\n\t\t\taNumber.abs\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "coth",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_cosh_1(_self), _sinh_1(_self));
  },
  "{ :self |\n\t\tself.cosh / self.sinh\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "cubed",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_asterisk_2(_self, _self), _self);
  },
  "{ :self |\n\t\tself * self * self\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "degree",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_self, 0.017453292519943295);
  },
  "{ :self |\n\t\tself * 0.017453292519943295\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "degreeCos",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sin_1(
      _degreesToRadians_1(
        _hyphenMinus_2(
          90,
          _abs_1(
            _hyphenMinus_2(_percentSign_2(_plusSign_2(180, _self), 360), 180),
          ),
        ),
      ),
    );
  },
  "{ :self |\n\t\t(90 - (180 + self % 360 - 180).abs).degreesToRadians.sin\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "degreeSin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _degreeCos_1(_hyphenMinus_2(90, _self));
  },
  "{ :self |\n\t\t(90 - self).degreeCos\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "degreesToRadians",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_self, 0.01745329251994329547);
  },
  "{ :self |\n\t\tself * 0.01745329251994329547 /* pi / 180 */\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "diracDelta",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isZero_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aNumber;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return 0;
    });
  },
  "{ :self :aNumber |\n\t\tself.isZero.if {\n\t\t\taNumber\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "diracDelta",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _diracDelta_2(_self, _inf);
  },
  "{ :self |\n\t\tself.diracDelta(inf)\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "divisible",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isNumber_1(_aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isVeryCloseTo_2(_percentSign_2(_self, _aNumber), 0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToNumberAndApply_3(_aNumber, _self, _divisible_2);
    });
  },
  "{ :self :aNumber |\n\t\taNumber.isNumber.if {\n\t\t\t(self % aNumber).isVeryCloseTo(0)\n\t\t} {\n\t\t\taNumber.adaptToNumberAndApply(self, divisible:/2)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "divisorSigma",
  ["k", "n"],
  function (_k, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _k, _n"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isNumber_1(_n), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _sum_1(_circumflexAccent_2(_divisors_1(_n), _k));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToNumberAndApply_3(_n, _k, _divisorSigma_2);
    });
  },
  "{ :k :n |\n\t\tn.isNumber.if {\n\t\t\t(n.divisors ^ k).sum\n\t\t} {\n\t\t\tn.adaptToNumberAndApply(k, divisorSigma:/2)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "downToDo",
  ["self", "anInteger", "aBlock:/1"],
  function (_self, _anInteger, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _anInteger, _aBlock_1"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _do_2(_Range_3(_self, _anInteger, -1), _aBlock_1);
  },
  "{ :self :anInteger :aBlock:/1 |\n\t\tRange(self, anInteger, -1).do(aBlock:/1)\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "e",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(
      _self,
      2.71828182845904523536028747135266249775724709369995,
    );
  },
  "{ :self |\n\t\tself * 2.71828182845904523536028747135266249775724709369995\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "epsilon",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_self, 0.000000000000001);
  },
  "{ :self |\n\t\tself * 0.000000000000001\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "erfAbramowitzStegun",
  ["x"],
  function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _x"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThanSignEqualsSign_2(_x, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _p = 0.47047;
      let _t = _solidus_2(1, _plusSign_2(1, _asterisk_2(_p, _x)));
      let _a1 = _asterisk_2(0.3480242, _t);
      let _a2 = _asterisk_2(_asterisk_2(-0.0958798, _t), _t);
      let _a3 = _asterisk_2(_asterisk_2(_asterisk_2(0.7478556, _t), _t), _t);
      /* Statements */
      return _hyphenMinus_2(
        1,
        _asterisk_2(
          _plusSign_2(_plusSign_2(_a1, _a2), _a3),
          _exp_1(_negated_1(_squared_1(_x))),
        ),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _negated_1(_erf_1(_negated_1(_x)));
    });
  },
  "{ :x |\n\t\t(x >= 0).if {\n\t\t\tlet p = 0.47047;\n\t\t\tlet t = 1 / (1 + (p * x));\n\t\t\tlet a1 = 0.3480242 * t;\n\t\t\tlet a2 = -0.0958798 * t * t;\n\t\t\tlet a3 = 0.7478556 * t * t * t;\n\t\t\t1 - ((a1 + a2 + a3) * x.squared.negated.exp)\n\t\t} {\n\t\t\tx.negated.erf.negated\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "erf",
  ["x"],
  function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _x"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThanSignEqualsSign_2(_x, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _p = 0.3275911;
      let _t = _solidus_2(1, _plusSign_2(1, _asterisk_2(_p, _x)));
      let _a1 = _asterisk_2(0.254829592, _t);
      let _a2 = _asterisk_2(_asterisk_2(-0.284496736, _t), _t);
      let _a3 = _asterisk_2(_asterisk_2(_asterisk_2(1.421413741, _t), _t), _t);
      let _a4 = _asterisk_2(
        _asterisk_2(_asterisk_2(_asterisk_2(-1.453152027, _t), _t), _t),
        _t,
      );
      let _a5 = _asterisk_2(
        _asterisk_2(
          _asterisk_2(_asterisk_2(_asterisk_2(1.061405429, _t), _t), _t),
          _t,
        ),
        _t,
      );
      /* Statements */
      return _hyphenMinus_2(
        1,
        _asterisk_2(
          _plusSign_2(
            _plusSign_2(_plusSign_2(_plusSign_2(_a1, _a2), _a3), _a4),
            _a5,
          ),
          _exp_1(_negated_1(_squared_1(_x))),
        ),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _negated_1(_erf_1(_negated_1(_x)));
    });
  },
  "{ :x |\n\t\t(x >= 0).if {\n\t\t\tlet p = 0.3275911;\n\t\t\tlet t = 1 / (1 + (p * x));\n\t\t\tlet a1 = 0.254829592 * t;\n\t\t\tlet a2 = -0.284496736 * t * t;\n\t\t\tlet a3 = 1.421413741 * t * t * t;\n\t\t\tlet a4 = -1.453152027 * t * t * t * t;\n\t\t\tlet a5 = 1.061405429 * t * t * t * t * t;\n\t\t\t1 - ((a1 + a2 + a3 + a4 + a5) * x.squared.negated.exp)\n\t\t} {\n\t\t\tx.negated.erf.negated\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "erfc",
  ["x"],
  function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _x"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hyphenMinus_2(1, _erf_1(_x));
  },
  "{ :x |\n\t\t1 - x.erf\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "euclideanDistance",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _abs_1(_hyphenMinus_2(_aNumber, _self));
  },
  "{ :self :aNumber |\n\t\t(aNumber - self).abs\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "eulerGamma",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_self, 0.577215664901532860606512090082402431042);
  },
  "{ :self |\n\t\tself * 0.577215664901532860606512090082402431042\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "factorialOrGamma",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isNonNegativeInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _factorial_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _gamma_1(_plusSign_2(1, _self));
    });
  },
  "{ :self |\n\t\tself.isNonNegativeInteger.if {\n\t\t\tself.factorial\n\t\t} {\n\t\t\t(1 + self).gamma\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "factorialPower",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _anInteger"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _product_1(
      _hyphenMinus_2(_self, _to_2(0, _hyphenMinus_2(_anInteger, 1))),
    );
  },
  "{ :self :anInteger |\n\t\t(self - 0.to(anInteger - 1)).product\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "floor",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _truncation = _truncated_1(_self);
    /* Statements */
    return _if_3(_greaterThanSignEqualsSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _truncation;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_self, _truncation), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _truncation;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _hyphenMinus_2(_truncation, 1);
      });
    });
  },
  "{ :self |\n\t\tlet truncation = self.truncated;\n\t\t(self >= 0).if {\n\t\t\ttruncation\n\t\t} {\n\t\t\t(self = truncation).if {\n\t\t\t\ttruncation\n\t\t\t} {\n\t\t\t\ttruncation - 1\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "floorLog",
  ["self", "radix"],
  function (_self, _radix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _radix"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _floor_1(_log_2(_self, _radix));
  },
  "{ :self :radix |\n\t\tself.log(radix).floor\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "foldBetweenAnd",
  ["self", "low", "high"],
  function (_self, _low, _high) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _low, _high"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _range = _hyphenMinus_2(_high, _low);
    let _twiceRange = _plusSign_2(_range, _range);
    let _z = _percentSign_2(_hyphenMinus_2(_self, _low), _twiceRange);
    /* Statements */
    _ifTrue_2(_greaterThanSign_2(_z, _range), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _z = _hyphenMinus_2(_twiceRange, _z);
    });
    return _plusSign_2(_low, _z);
  },
  "{ :self :low :high |\n\t\tlet range = high - low;\n\t\tlet twiceRange = range + range;\n\t\tlet z = (self - low) % twiceRange;\n\t\t(z > range).ifTrue {\n\t\t\tz := twiceRange - z\n\t\t};\n\t\tlow + z\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "fractionPart",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hyphenMinus_2(_self, _integerPart_1(_self));
  },
  "{ :self |\n\t\tself - self.integerPart\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "goldenAngle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_self, _asterisk_2(_pi, _hyphenMinus_2(3, _sqrt_1(5))));
  },
  "{ :self |\n\t\tself * (pi * (3 - 5.sqrt))\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "goldenRatio",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _phi = _solidus_2(_plusSign_2(_sqrt_1(5), 1), 2);
    /* Statements */
    return _asterisk_2(_self, _phi);
  },
  "{ :self |\n\t\tlet phi = (5.sqrt + 1) / 2;\n\t\tself * phi\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "halved",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_self, 2);
  },
  "{ :self |\n\t\tself / 2\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "haversine",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(0.5, _hyphenMinus_2(1, _cos_1(_self)));
  },
  "{ :self |\n\t\t0.5 * (1 - self.cos)\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "imaginary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _zero_1(_self);
  },
  "{ :self |\n\t\tself.zero\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "integerPart",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _truncated_1(_self);
  },
  "{ :self |\n\t\tself.truncated\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "inverseErf",
  ["x"],
  function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _x"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThanSignEqualsSign_2(_abs_1(_x), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _asterisk_2(_inf, _sign_1(_x));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _a = [0.886226899, -1.645349621, 0.914624893, -0.140543331];
      let _b = [1, -2.118377725, 1.442710462, -0.329097515, 0.012229801];
      let _c = [-1.970840454, -1.62490649, 3.429567803, 1.641345311];
      let _d = [1, 3543889200, 1.637067800];
      let _z = _asterisk_2(_sign_1(_x), _x);
      let _r = null;
      /* Statements */
      _if_3(_lessThanSignEqualsSign_2(_z, 0.7), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _x2 = _asterisk_2(_z, _z);
        /* Statements */
        _r = _asterisk_2(
          _z,
          _plusSign_2(
            _asterisk_2(
              _plusSign_2(
                _asterisk_2(
                  _plusSign_2(_asterisk_2(_at_2(_a, 4), _x2), _at_2(_a, 3)),
                  _x2,
                ),
                _at_2(_a, 2),
              ),
              _x2,
            ),
            _at_2(_a, 1),
          ),
        );
        return _r = _solidus_2(
          _r,
          _plusSign_2(
            _asterisk_2(
              _plusSign_2(
                _asterisk_2(
                  _plusSign_2(
                    _asterisk_2(
                      _plusSign_2(_asterisk_2(_at_2(_b, 5), _x2), _at_2(_b, 4)),
                      _x2,
                    ),
                    _at_2(_b, 3),
                  ),
                  _x2,
                ),
                _at_2(_b, 2),
              ),
              _x2,
            ),
            _at_2(_b, 1),
          ),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _y = _sqrt_1(
          _negated_1(_log_1(_solidus_2(_hyphenMinus_2(1, _z), 2))),
        );
        /* Statements */
        _r = _plusSign_2(
          _asterisk_2(
            _plusSign_2(
              _asterisk_2(
                _plusSign_2(_asterisk_2(_at_2(_c, 4), _y), _at_2(_c, 3)),
                _y,
              ),
              _at_2(_c, 2),
            ),
            _y,
          ),
          _at_2(_c, 1),
        );
        return _r = _solidus_2(
          _r,
          _plusSign_2(
            _asterisk_2(
              _plusSign_2(_asterisk_2(_at_2(_d, 3), _y), _at_2(_d, 2)),
              _y,
            ),
            _at_2(_d, 1),
          ),
        );
      });
      _r = _asterisk_2(_r, _sign_1(_x));
      _z = _asterisk_2(_z, _sign_1(_x));
      _r = _hyphenMinus_2(
        _r,
        _solidus_2(
          _hyphenMinus_2(_erf_1(_r), _z),
          _asterisk_2(
            _solidus_2(2, _sqrt_1(_pi)),
            _exp_1(_asterisk_2(_negated_1(_r), _r)),
          ),
        ),
      );
      _r = _hyphenMinus_2(
        _r,
        _solidus_2(
          _hyphenMinus_2(_erf_1(_r), _z),
          _asterisk_2(
            _solidus_2(2, _sqrt_1(_pi)),
            _exp_1(_asterisk_2(_negated_1(_r), _r)),
          ),
        ),
      );
      return _r;
    });
  },
  "{ :x |\n\t\t(x.abs >= 1).if {\n\t\t\tinf * x.sign\n\t\t} {\n\t\t\tlet a = [0.886226899 -1.645349621 0.914624893 -0.140543331];\n\t\t\tlet b = [1 -2.118377725 1.442710462 -0.329097515 0.012229801];\n\t\t\tlet c = [-1.970840454 -1.62490649 3.429567803 1.641345311];\n\t\t\tlet d = [1 3543889200 1.637067800];\n\t\t\tlet z = x.sign * x;\n\t\t\tlet r = nil;\n\t\t\t(z <= 0.7).if {\n\t\t\t\tlet x2 = z * z;\n\t\t\t\tr := z * (((a[4] * x2 + a[3]) * x2 + a[2]) * x2 + a[1]);\n\t\t\t\tr := r / ((((b[5] * x2 + b[4]) * x2 + b[3]) * x2 + b[2]) * x2 + b[1])\n\t\t\t} {\n\t\t\t\tlet y = ((1 - z) / 2).log.negated.sqrt;\n\t\t\t\tr := (((c[4] * y + c[3]) * y + c[2]) * y + c[1]);\n\t\t\t\tr := r / ((d[3] * y + d[2]) * y + d[1])\n\t\t\t};\n\t\t\tr := r * x.sign;\n\t\t\tz := z * x.sign;\n\t\t\tr := r - ((r.erf - z) / (2 / pi.sqrt * (r.negated * r).exp));\n\t\t\tr := r - ((r.erf - z) / (2 / pi.sqrt * (r.negated * r).exp));\n\t\t\tr\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "inverseErfWinitzki",
  ["x"],
  function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _x"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _a = 0.147;
    let _b = _solidus_2(2, _pi_1(_a));
    let _c = _log_1(_hyphenMinus_2(1, _squared_1(_x)));
    /* Statements */
    return _asterisk_2(
      _sqrt_1(
        _hyphenMinus_2(
          _sqrt_1(
            _hyphenMinus_2(
              _squared_1(_plusSign_2(_b, _solidus_2(_c, 2))),
              _solidus_2(_c, _a),
            ),
          ),
          _plusSign_2(_b, _solidus_2(_c, 2)),
        ),
      ),
      _sign_1(_x),
    );
  },
  "{ :x |\n\t\tlet a = 0.147;\n\t\tlet b = (2 / a.pi);\n\t\tlet c = (1 - x.squared).log;\n\t\t(((b + (c / 2)).squared - (c / a)).sqrt - (b + (c / 2))).sqrt * x.sign\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "isNegative",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _lessThanSign_2(_self, _zero_1(_self));
  },
  "{ :self |\n\t\tself < self.zero\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "isNonNegative",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _greaterThanSignEqualsSign_2(_self, _zero_1(_self));
  },
  "{ :self |\n\t\tself >= self.zero\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "isNonNegativeInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isNonNegative_1(_self);
    });
  },
  "{ :self |\n\t\tself.isInteger & {\n\t\t\tself.isNonNegative\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "isNonPositive",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _lessThanSignEqualsSign_2(_self, _zero_1(_self));
  },
  "{ :self |\n\t\tself <= self.zero\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "isNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "isPositive",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _greaterThanSign_2(_self, _zero_1(_self));
  },
  "{ :self |\n\t\tself > self.zero\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "isOne",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_self, 1);
  },
  "{ :self |\n\t\tself = 1\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "isZero",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_self, 0);
  },
  "{ :self |\n\t\tself = 0\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "kroneckerDelta",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_self, _aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return 0;
    });
  },
  "{ :self :aNumber |\n\t\t(self = aNumber).if {\n\t\t\t1\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "log2",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _log2_1(_asSmallFloat_1(_self));
  },
  "{ :self |\n\t\tself.asSmallFloat.log2\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "logarithmicIntegralRamanujan",
  ["self", "limit"],
  function (_self, _limit) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _limit"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isZero_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _plusSign_2(
        _plusSign_2(_eulerGamma_1(1), _log_1(_abs_1(_log_1(_self)))),
        _sum_1(_collect_2(_upOrDownTo_2(1, _limit), function (_k) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage =
              "Arity: expected 1, _k"; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _solidus_2(
            _circumflexAccent_2(_log_1(_self), _k),
            _asterisk_2(_factorial_1(_k), _k),
          );
        })),
      );
    });
  },
  "{ :self :limit |\n\t\tself.isZero.if {\n\t\t\t0\n\t\t} {\n\t\t\t1.eulerGamma + (self.log.abs.log) + 1:limit.collect { :k |\n\t\t\t\t(self.log ^ k) / (k.factorial * k)\n\t\t\t}.sum\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "metallicMean",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _n"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(
      _plusSign_2(_n, _sqrt_1(_plusSign_2(_squared_1(_n), 4))),
      2,
    );
  },
  "{ :n |\n\t\t(n + (n.squared + 4).sqrt) / 2\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "minkowskiDistance",
  ["p", "u", "v"],
  function (_p, _u, _v) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _p, _u, _v"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _circumflexAccent_2(
      _sum_1(_circumflexAccent_2(_abs_1(_hyphenMinus_2(_u, _v)), _p)),
      _solidus_2(1, _p),
    );
  },
  "{ :p :u :v |\n\t\t((u - v).abs ^ p).sum ^ (1 / p)\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "mixedFractionParts",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _i = _integerPart_1(_self);
    /* Statements */
    return [_i, _hyphenMinus_2(_self, _i)];
  },
  "{ :self |\n\t\tlet i = self.integerPart;\n\t\t[i, self - i]\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "mu",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_self, 1000000);
  },
  "{ :self |\n\t\tself / 1000000\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "negated",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(-1, _self);
  },
  "{ :self |\n\t\t-1 * self\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "niceNumberAbove",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _exponent = _floor_1(_log10_1(_self));
    let _fraction = _solidus_2(_self, _circumflexAccent_2(10, _exponent));
    let _niceFraction = _if_3(
      _lessThanSignEqualsSign_2(_fraction, 1),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return 1;
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _if_3(_lessThanSignEqualsSign_2(_fraction, 2), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return 2;
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _if_3(_lessThanSignEqualsSign_2(_fraction, 5), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            return 5;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            return 10;
          });
        });
      },
    );
    /* Statements */
    return _asterisk_2(_niceFraction, _circumflexAccent_2(10, _exponent));
  },
  "{ :self |\n\t\tlet exponent = self.log10.floor;\n\t\tlet fraction = self / (10 ^ exponent);\n\t\tlet niceFraction = (fraction <= 1).if {\n\t\t\t1\n\t\t} {\n\t\t\t(fraction <= 2).if {\n\t\t\t\t2\n\t\t\t} {\n\t\t\t\t(fraction <= 5).if {\n\t\t\t\t\t5\n\t\t\t\t} {\n\t\t\t\t\t10\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tniceFraction * (10 ^ exponent)\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "niceNumberAbove",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _niceNumberBy_2(_self, function (_l, _n) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage =
          "Arity: expected 2, _l, _n"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _at_2(_l, _bisect_3(_l, _n, _lessThanSignEqualsSign_2));
    });
  },
  "{ :self |\n\t\tself.niceNumberBy { :l :n | l[l.bisect(n, <=)] }\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "niceNumberBy",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aBlock_2"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = _self;
    let _m = _circumflexAccent_2(
      10,
      _negated_1(_floor_1(_log10_1(_abs_1(_n)))),
    );
    let _steps = [1, 1.5, 2, 2.5, 5, 7.5, 10];
    let _z = _aBlock_2(_steps, _asterisk_2(_n, _m));
    /* Statements */
    return _solidus_2(_z, _m);
  },
  "{ :self :aBlock:/2 |\n\t\tlet n = self;\n\t\tlet m = 10 ^ n.abs.log10.floor.negated;\n\t\tlet steps = [1 1.5 2 2.5 5 7.5 10];\n\t\tlet z = steps.aBlock(n * m);\n\t\tz / m\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "niceNumberNear",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _niceNumberBy_2(_self, function (_l, _n) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage =
          "Arity: expected 2, _l, _n"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _first_1(_nearest_3(_l, _n, _hyphenMinus_2));
    });
  },
  "{ :self |\n\t\tself.niceNumberBy { :l :n | l.nearest(n, -).first }\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "numberDecompose",
  ["self", "u"],
  function (_self, _u) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _u"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _hyphenMinus_1(_numberDecompose_2(_hyphenMinus_1(_self), _u));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _answer = [];
      let _x = _self;
      let _k = _size_1(_u);
      /* Statements */
      _withIndexDo_2(_u, function (_each, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage =
            "Arity: expected 2, _each, _index"; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _if_3(_equalsSign_2(_index, _k), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _add_2(_answer, _solidus_2(_x, _each));
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Temporaries */
          let _n = _floor_1(_solidus_2(_x, _each));
          /* Statements */
          _x = _hyphenMinus_2(_x, _asterisk_2(_n, _each));
          return _add_2(_answer, _n);
        });
      });
      return _answer;
    });
  },
  "{ :self :u |\n\t\t(self < 0).if {\n\t\t\tself.-.numberDecompose(u).-\n\t\t} {\n\t\t\tlet answer = [];\n\t\t\tlet x = self;\n\t\t\tlet k = u.size;\n\t\t\tu.withIndexDo { :each :index |\n\t\t\t\t(index = k).if {\n\t\t\t\t\tanswer.add(x / each)\n\t\t\t\t} {\n\t\t\t\t\tlet n = (x / each).floor;\n\t\t\t\t\tx := x - (n * each);\n\t\t\t\t\tanswer.add(n)\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "pi",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_self, 3.1415926535897932384626433);
  },
  "{ :self |\n\t\tself * 3.1415926535897932384626433\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "perrinFunction",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _n"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _rho = _plasticRatio_1(1);
    let _theta = _arcCos_1(
      _solidus_2(_hyphenMinus_1(_sqrt_1(_circumflexAccent_2(_rho, 3))), 2),
    );
    /* Statements */
    return _plusSign_2(
      _circumflexAccent_2(_rho, _n),
      _asterisk_2(
        _asterisk_2(2, _cos_1(_asterisk_2(_n, _theta))),
        _sqrt_1(_circumflexAccent_2(_rho, _hyphenMinus_1(_n))),
      ),
    );
  },
  "{ :n |\n\t\tlet rho = 1.plasticRatio;\n\t\tlet theta = ((rho ^ 3).sqrt.- / 2).arcCos;\n\t\t(rho ^ n) + (2 * (n * theta).cos * (rho ^ n.-).sqrt)\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "plasticRatio",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_self, 1.3247179572447460259609089);
  },
  "{ :self |\n\t\tself * 1.3247179572447460259609089\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "powerMod",
  ["self", "exponent", "modulo"],
  function (_self, _exponent, _modulo) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _exponent, _modulo"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThanSign_2(_exponent, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _percentSign_2(_circumflexAccent_2(_self, _exponent), _modulo);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return "Number>>powerMod: not implemented for negative exponents";
    });
  },
  "{ :self :exponent :modulo |\n\t\t(exponent > 0).if {\n\t\t\t(self ^ exponent) % modulo\n\t\t} {\n\t\t\t'Number>>powerMod: not implemented for negative exponents'\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "powerRange",
  ["a", "b", "r"],
  function (_a, _b, _r) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _a, _b, _r"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    let _next = _a;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_greaterThanSign_2(_r, 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _lessThanSignEqualsSign_2(_abs_1(_next), _abs_1(_b));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _greaterThanSignEqualsSign_2(_abs_1(_next), _abs_1(_b));
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      _add_2(_answer, _next);
      return _next = _asterisk_2(_next, _r);
    });
    return _answer;
  },
  "{ :a :b :r |\n\t\tlet answer = [];\n\t\tlet next = a;\n\t\t{\n\t\t\t(r > 1).if {\n\t\t\t\tnext.abs <= b.abs\n\t\t\t} {\n\t\t\t\tnext.abs >= b.abs\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\tanswer.add(next);\n\t\t\tnext := next * r\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "printStringShowingDecimalPlaces",
  ["self", "placesDesired"],
  function (_self, _placesDesired) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _placesDesired"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_placesDesired, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _printString_1(_rounded_1(_self));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _rounder = _circumflexAccent_2(10, _placesDesired);
      let _rounded = _roundTo_2(_self, _reciprocal_1(_rounder));
      let _prefix = _if_3(_isNegative_1(_rounded), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return "-";
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return "";
      });
      let _roundedFractionPart = _rounded_1(
        _asterisk_2(_fractionPart_1(_abs_1(_rounded)), _rounder),
      );
      /* Statements */
      return _join_2([
        _prefix,
        _printString_1(_truncated_1(_integerPart_1(_abs_1(_rounded)))),
        ".",
        _padLeft_3(_printString_1(_roundedFractionPart), _placesDesired, "0"),
      ], "");
    });
  },
  "{ :self :placesDesired |\n\t\t(placesDesired <= 0).if {\n\t\t\tself.rounded.printString\n\t\t} {\n\t\t\tlet rounder = 10 ^ placesDesired;\n\t\t\tlet rounded = self.roundTo(rounder.reciprocal);\n\t\t\tlet prefix = rounded.isNegative.if { '-' } { '' };\n\t\t\tlet roundedFractionPart = (rounded.abs.fractionPart * rounder).rounded; /* truncated? */\n\t\t\t[\n\t\t\t\tprefix,\n\t\t\t\trounded.abs.integerPart.truncated.printString,\n\t\t\t\t'.',\n\t\t\t\troundedFractionPart.printString.padLeft(placesDesired, '0')\n\t\t\t].join('')\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "quotientBy",
  ["self", "aNumber", "aBlock:/1"],
  function (_self, _aNumber, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aNumber, _aBlock_1"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_aNumber, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_1("@Number>>quotient: divideByZero");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_solidus_2(_self, _aNumber));
    });
  },
  "{ :self :aNumber :aBlock:/1 |\n\t\t(aNumber = 0).if {\n\t\t\t'@Number>>quotient: divideByZero'.error\n\t\t} {\n\t\t\taBlock(self / aNumber)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "quotient",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _quotientBy_3(_self, _aNumber, _truncated_1);
  },
  "{ :self :aNumber |\n\t\tself.quotientBy(aNumber, truncated:/1)\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "radiansToDegrees",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_self, 57.29577951308232286465);
  },
  "{ :self |\n\t\tself * 57.29577951308232286465 /* 180 / pi */\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "raisedToSmallInteger",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _operand"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _count = _bitShift_2(1, _highBit_1(_hyphenMinus_2(_operand, 1)));
    let _result = _one_1(_self);
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _greaterThanSign_2(_count, 0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      _result = _squared_1(_result);
      _ifFalse_2(_equalsSign_2(_bitAnd_2(_operand, _count), 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _result = _asterisk_2(_result, _self);
      });
      return _count = _bitShift_2(_count, -1);
    });
    return _result;
  },
  "{ :self :operand |\n\t\tlet count = 1.bitShift((operand - 1).highBit);\n\t\tlet result = self.one;\n\t\t{\n\t\t\tcount > 0\n\t\t}.whileTrue {\n\t\t\tresult := result.squared;\n\t\t\t(operand.bitAnd(count) = 0).ifFalse {\n\t\t\t\tresult := result * self\n\t\t\t};\n\t\t\tcount := count.bitShift(-1)\n\t\t};\n\t\tresult\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "raisedToInteger",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _operand"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    _ifFalse_2(_isInteger_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_1("Numnber>>raisedToInteger: operand is not an Integer");
    });
    return _if_3(_equalsSign_2(_operand, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _one_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_operand, 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _self;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _if_3(_lessThanSign_2(_operand, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _reciprocal_1(_raisedToInteger_2(_self, _negated_1(_operand)));
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _if_3(_isLargeInteger_1(_operand), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            return _circumflexAccent_2(_asLargeInteger_1(_self), _operand);
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            return _raisedToSmallInteger_2(_self, _operand);
          });
        });
      });
    });
  },
  "{ :self :operand |\n\t\toperand.isInteger.ifFalse {\n\t\t\t'Numnber>>raisedToInteger: operand is not an Integer'.error\n\t\t};\n\t\t(operand = 0).if {\n\t\t\tself.one\n\t\t} {\n\t\t\t(operand = 1).if {\n\t\t\t\tself\n\t\t\t} {\n\t\t\t\t(operand < 0).if {\n\t\t\t\t\tself.raisedToInteger(operand.negated).reciprocal\n\t\t\t\t} {\n\t\t\t\t\toperand.isLargeInteger.if {\n\t\t\t\t\t\tself.asLargeInteger ^ operand\n\t\t\t\t\t} {\n\t\t\t\t\t\tself.raisedToSmallInteger(operand)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "real",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "realImaginary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return [_self, _zero_1(_self)];
  },
  "{ :self |\n\t\t[self, self.zero]\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "reciprocal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_one_1(_self), _self);
  },
  "{ :self |\n\t\tself.one / self\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "remainderBy",
  ["self", "aNumber", "aBlock:/1"],
  function (_self, _aNumber, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aNumber, _aBlock_1"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hyphenMinus_2(
      _self,
      _asterisk_2(_quotientBy_3(_self, _aNumber, _aBlock_1), _aNumber),
    );
  },
  "{ :self :aNumber :aBlock:/1 |\n\t\tself - (self.quotientBy(aNumber, aBlock:/1) * aNumber)\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "remainder",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _remainderBy_3(_self, _aNumber, _truncated_1);
  },
  "{ :self :aNumber |\n\t\tself.remainderBy(aNumber, truncated:/1)\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "rescale",
  ["self", "min", "max"],
  function (_self, _min, _max) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _min, _max"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_hyphenMinus_2(_self, _min), _hyphenMinus_2(_max, _min));
  },
  "{ :self :min :max |\n\t\t(self - min) / (max - min)\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "rescale",
  ["self", "min", "max", "ymin", "ymax"],
  function (_self, _min, _max, _ymin, _ymax) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _min, _max, _ymin, _ymax"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _solidus_2(_hyphenMinus_2(_self, _min), _hyphenMinus_2(_max, _min)),
        _hyphenMinus_2(_ymax, _ymin),
      ),
      _ymin,
    );
  },
  "{ :self :min :max :ymin :ymax |\n\t\t((self - min) / (max - min)) * (ymax - ymin) + ymin\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "roundDown",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _roundDownTo_2(_self, 1);
  },
  "{ :self |\n\t\tself.roundDownTo(1)\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "roundDownTo",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_floor_1(_solidus_2(_self, _aNumber)), _aNumber);
  },
  "{ :self :aNumber |\n\t\t(self / aNumber).floor * aNumber\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "rounded",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _truncated_1(_plusSign_2(_self, _solidus_2(_sign_1(_self), 2)));
  },
  "{ :self |\n\t\t(self + (self.sign / 2)).truncated\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "roundToTowardsZero",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _roundUpTo_2(_self, _aNumber);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _roundDownTo_2(_self, _aNumber);
    });
  },
  "{ :self :aNumber |\n\t\t(self < 0).if {\n\t\t\tself.roundUpTo(aNumber)\n\t\t} {\n\t\t\tself.roundDownTo(aNumber)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "roundTo",
  ["self", "quantum"],
  function (_self, _quantum) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _quantum"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_rounded_1(_solidus_2(_self, _quantum)), _quantum);
  },
  "{ :self :quantum |\n\t\t(self / quantum).rounded * quantum\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "roundTowardsZero",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _roundToTowardsZero_2(_self, 1);
  },
  "{ :self |\n\t\tself.roundToTowardsZero(1)\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "roundUp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _roundUpTo_2(_self, 1);
  },
  "{ :self |\n\t\tself.roundUpTo(1)\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "roundUpTo",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_ceiling_1(_solidus_2(_self, _aNumber)), _aNumber);
  },
  "{ :self :aNumber |\n\t\t(self / aNumber).ceiling * aNumber\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "sign",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThanSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _unit_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_lessThanSign_2(_self, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _negated_1(_unit_1(_self));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _zero_1(_self);
      });
    });
  },
  "{ :self |\n\t\t(self > 0).if {\n\t\t\tself.unit\n\t\t} {\n\t\t\t(self < 0).if {\n\t\t\t\tself.unit.negated\n\t\t\t} {\n\t\t\t\tself.zero\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "sign",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _copySignTo_2(_aNumber, _self);
  },
  "{ :self :aNumber |\n\t\taNumber.copySignTo(self)\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "signBit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _verticalLine_2(_isNegativeZero_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _lessThanSign_2(_self, 0);
    });
  },
  "{ :self |\n\t\tself.isNegativeZero | {\n\t\t\tself < 0\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "silverConstant",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(
      _self,
      _plusSign_2(2, _asterisk_2(2, _cos_1(_pi_1(_solidus_2(2, 7))))),
    );
  },
  "{ :self |\n\t\tself * (2 + (2 * (2 / 7).pi.cos))\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "silverRatio",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_self, _plusSign_2(_sqrt_1(2), 1));
  },
  "{ :self |\n\t\tself * (2.sqrt + 1)\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "smallFloatEpsilon",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_self, _smallFloatEpsilon_1(_system));
  },
  "{ :self |\n\t\tself * system.smallFloatEpsilon\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "squared",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_self, _self);
  },
  "{ :self |\n\t\tself * self\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "stolarskyHarborthConstant",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_self, 0.81255655901600638769);
  },
  "{ :self |\n\t\tself * 0.81255655901600638769\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "stope",
  ["x", "p", "y"],
  function (_x, _p, _y) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _x, _p, _y"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _reduce_2(
      _plusSign_2(_x, _asterisk_2(_p, _hyphenMinus_2(_upOrDownTo_2(1, _y), 1))),
      _asterisk_2,
    );
  },
  "{ :x :p :y |\n\t\t(x + (p * (1:y - 1))).reduce(*)\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "strictlyPositive",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _greaterThanSign_2(_self, 0);
  },
  "{ :self |\n\t\tself > 0\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "supergoldenRatio",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_self, 1.465571231876768);
  },
  "{ :self |\n\t\tself * 1.465571231876768\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "supersilverRatio",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_self, 2.2055694304005903);
  },
  "{ :self |\n\t\tself * 2.2055694304005903\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "toByDo",
  ["self", "stop", "step", "aBlock:/1"],
  function (_self, _stop, _step, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _stop, _step, _aBlock_1"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    _if_3(_equalsSign_2(_step, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_1("@Number>>toByDo: step must be non-zero");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _nextValue = _self;
      /* Statements */
      return _if_3(_lessThanSign_2(_step, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _whileTrue_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _lessThanSignEqualsSign_2(_stop, _nextValue);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          _aBlock_1(_nextValue);
          return _nextValue = _plusSign_2(_nextValue, _step);
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _whileTrue_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _greaterThanSignEqualsSign_2(_stop, _nextValue);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          _aBlock_1(_nextValue);
          return _nextValue = _plusSign_2(_nextValue, _step);
        });
      });
    });
    return _self;
  },
  "{ :self :stop :step :aBlock:/1 |\n\t\t(step = 0).if {\n\t\t\t'@Number>>toByDo: step must be non-zero'.error\n\t\t} {\n\t\t\tlet nextValue = self;\n\t\t\t(step < 0).if{\n\t\t\t\t{\n\t\t\t\t\tstop <= nextValue\n\t\t\t\t}.whileTrue {\n\t\t\t\t\taBlock(nextValue);\n\t\t\t\t\tnextValue := nextValue + step\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\t{\n\t\t\t\t\tstop >= nextValue\n\t\t\t\t}.whileTrue {\n\t\t\t\t\taBlock(nextValue);\n\t\t\t\t\tnextValue := nextValue + step\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "toDo",
  ["self", "end", "aBlock:/1"],
  function (_self, _end, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _end, _aBlock_1"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _index = _self;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _lessThanSignEqualsSign_2(_index, _end);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      _aBlock_1(_index);
      return _index = _plusSign_2(_index, 1);
    });
    return _self;
  },
  "{ :self :end :aBlock:/1 |\n\t\tlet index = self;\n\t\t{\n\t\t\tindex <= end\n\t\t}.whileTrue {\n\t\t\taBlock(index);\n\t\t\tindex := index + 1\n\t\t};\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "truncateTo",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_quotient_2(_self, _aNumber), _aNumber);
  },
  "{ :self :aNumber |\n\t\tself.quotient(aNumber) * aNumber\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "twice",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_self, 2);
  },
  "{ :self |\n\t\tself * 2\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "unit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return 1;
  },
  "{ :self |\n\t\t1\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "unitize",
  ["self", "dx"],
  function (_self, _dx) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _dx"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanSign_2(_abs_1(_self), _dx), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _zero_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _one_1(_self);
    });
  },
  "{ :self :dx |\n\t\t(self.abs < dx).if {\n\t\t\tself.zero\n\t\t} {\n\t\t\tself.one\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "unitize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isZero_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _zero_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _one_1(_self);
    });
  },
  "{ :self |\n\t\tself.isZero.if {\n\t\t\tself.zero\n\t\t} {\n\t\t\tself.one\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "unitVector",
  ["n", "k"],
  function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _n, _k"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _List_2(_n, 0);
    /* Statements */
    _atPut_3(_answer, _k, 1);
    return _answer;
  },
  "{ :n :k |\n\t\tlet answer = List(n, 0);\n\t\tanswer[k] := 1;\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "upOrDownToDo",
  ["self", "end", "aBlock:/1"],
  function (_self, _end, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _end, _aBlock_1"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _step = _if_3(_lessThanSign_2(_end, _self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return -1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return 1;
    });
    /* Statements */
    return _toByDo_4(_self, _end, _step, _aBlock_1);
  },
  "{ :self :end :aBlock:/1 |\n\t\tlet step = (end < self).if { -1 } { 1 };\n\t\tself.toByDo(end, step, aBlock:/1)\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "wrapBetweenAnd",
  ["self", "low", "high"],
  function (_self, _low, _high) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _low, _high"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _range = _hyphenMinus_2(_high, _low);
    let _z = _percentSign_2(_hyphenMinus_2(_self, _low), _range);
    /* Statements */
    return _plusSign_2(_low, _z);
  },
  "{ :self :low :high |\n\t\tlet range = high - low;\n\t\tlet z = (self - low) % range;\n\t\tlow + z\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "zero",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return 0;
  },
  "{ :self |\n\t\t0\n\t}",
);
