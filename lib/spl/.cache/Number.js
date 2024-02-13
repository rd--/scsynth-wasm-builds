sl.addTrait("Number", "Number");

sl.addTraitMethod(
  "Number",
  "Number",
  "hyphenMinus",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _hyphenMinus_2(_zero_1(_self), _self);
  },
  "{ :self |\n\t\tself.zero - self\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "solidus",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_one_1(_self), _self);
  },
  "{ :self |\n\t\tself.one / self\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "circumflexAccent",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _circumflexAccent_2(_e, _self);
  },
  "{ :self |\n\t\te ^ self\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "solidusSolidus",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _closeTo_2(_self, _aNumber);
  },
  "{ :self :aNumber |\n\t\tself.closeTo(aNumber)\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "exclamationMarkTilde",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _not_1(_closeTo_2(_self, _aNumber));
  },
  "{ :self :aNumber |\n\t\tself.closeTo(aNumber).not\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "lessThanSignTilde",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _verticalLine_2(_lessThanSign_2(_self, _aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _closeTo_2(_self, _aNumber);
    });
  },
  "{ :self :aNumber |\n\t\tself < aNumber | {\n\t\t\tself.closeTo(aNumber)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "greaterThanSignTilde",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _verticalLine_2(_greaterThanSign_2(_self, _aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _closeTo_2(_self, _aNumber);
    });
  },
  "{ :self :aNumber |\n\t\tself > aNumber | {\n\t\t\tself.closeTo(aNumber)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "abs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _negated_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _self;
    });
  },
  "{ :self |\n\t\t(self < 0).if {\n\t\t\tself.negated\n\t\t} {\n\t\t\tself\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "absArg",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
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
  "asInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.toLocaleString("en-US");
  },
  "{ :self |\n\t\t<primitive: return _self.toLocaleString('en-US');>\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "basicPlus",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isNumber_1(_aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _plusSign_2(_self, _aNumber);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isNumber_1(_aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _asterisk_2(_self, _aNumber);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
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
  "ceiling",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _truncation = _truncated_1(_self);
    /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _truncation;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_self, _truncation), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _truncation;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 3, _self, _low, _high";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _max_2(_low, _min_2(_self, _high));
  },
  "{ :self :low :high |\n\t\tlow.max(self.min(high))\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "copySignTo",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_signBit_1(_self), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _abs_1(_aNumber);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _negated_1(_abs_1(_aNumber));
    });
  },
  "{ :self :aNumber |\n\t\t(self.signBit = 0).if {\n\t\t\taNumber.abs\n\t\t} {\n\t\t\taNumber.abs.negated\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "cubed",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_asterisk_2(_self, _self), _self);
  },
  "{ :self |\n\t\tself * self * self\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "degreeCos",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_self, 0.01745329251994329547);
  },
  "{ :self |\n\t\tself * 0.01745329251994329547 {- pi / 180 -}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "divisible",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isNumber_1(_aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _veryCloseTo_2(_percentSign_2(_self, _aNumber), 0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _adaptToNumberAndApply_3(_aNumber, _self, _divisible_2);
    });
  },
  "{ :self :aNumber |\n\t\taNumber.isNumber.if {\n\t\t\t(self % aNumber).veryCloseTo(0)\n\t\t} {\n\t\t\taNumber.adaptToNumberAndApply(self, divisible:/2)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "divisorSigma",
  ["k", "n"],
  function (_k, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _k, _n";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isNumber_1(_n), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _sum_1(_circumflexAccent_2(_divisors_1(_n), _k));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
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
  ["self", "end", "aBlock:/1"],
  function (_self, _end, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _end, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _index = _self;
    /* Statements */
    return _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _greaterThanSignEqualsSign_2(_index, _end);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _aBlock_1(_index);
      return _index = _hyphenMinus_2(_index, 1);
    });
  },
  "{ :self :end :aBlock:/1 |\n\t\tlet index = self;\n\t\t{\n\t\t\tindex >= end\n\t\t}.whileTrue {\n\t\t\taBlock(index);\n\t\t\tindex := index - 1\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "e",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_self, 0.000000000000001);
  },
  "{ :self |\n\t\tself * 0.000000000000001\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "factorialPower",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _product_1(
      _hyphenMinus_2(_self, _upOrDownTo_2(0, _hyphenMinus_2(_anInteger, 1))),
    );
  },
  "{ :self :anInteger |\n\t\t(self - (0 .. anInteger - 1)).product\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "floor",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _truncation = _truncated_1(_self);
    /* Statements */
    return _if_3(_greaterThanSignEqualsSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _truncation;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_self, _truncation), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _truncation;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
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
  "foldBetweenAnd",
  ["self", "low", "high"],
  function (_self, _low, _high) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _low, _high";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _range = _hyphenMinus_2(_high, _low);
    let _twiceRange = _plusSign_2(_range, _range);
    let _z = _percentSign_2(_hyphenMinus_2(_self, _low), _twiceRange);
    /* Statements */
    _ifTrue_2(_greaterThanSign_2(_z, _range), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _hyphenMinus_2(_self, _integerPart_1(_self));
  },
  "{ :self |\n\t\tself - self.integerPart\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "halved",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_self, 2);
  },
  "{ :self |\n\t\tself / 2\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "integerPart",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _truncated_1(_self);
  },
  "{ :self |\n\t\tself.truncated\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "isNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "log2",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _log2_1(_asSmallFloat_1(_self));
  },
  "{ :self |\n\t\tself.asSmallFloat.log2\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "mu",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _hyphenMinus_2(_zero_1(_self), _self);
  },
  "{ :self |\n\t\tself.zero - self\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "negative",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _lessThanSign_2(_self, 0);
  },
  "{ :self |\n\t\tself < 0\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "pi",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_self, 3.1415926535897932384626433);
  },
  "{ :self |\n\t\tself * 3.1415926535897932384626433\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "positive",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _greaterThanSignEqualsSign_2(_self, 0);
  },
  "{ :self |\n\t\tself >= 0\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "powerMod",
  ["self", "exponent", "modulo"],
  function (_self, _exponent, _modulo) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _exponent, _modulo";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThanSign_2(_exponent, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _percentSign_2(_circumflexAccent_2(_self, _exponent), _modulo);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
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
  "quotientBy",
  ["self", "aNumber", "aBlock:/1"],
  function (_self, _aNumber, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_aNumber, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_1("@Number>>quotient: divideByZero");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_self, 57.29577951308232286465);
  },
  "{ :self |\n\t\tself * 57.29577951308232286465 {- 180 / pi -}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "reciprocal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(1, _self);
  },
  "{ :self |\n\t\t1 / self\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "reflectionMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _n = _asterisk_2(2, _self);
    /* Statements */
    return [[_cos_1(_n), _sin_1(_n)], [_sin_1(_n), _negated_1(_cos_1(_n))]];
  },
  "{ :self |\n\t\tlet n = 2 * self;\n\t\t[\n\t\t\t[n.cos, n.sin],\n\t\t\t[n.sin, n.cos.negated]\n\t\t]\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "remainderBy",
  ["self", "aNumber", "aBlock:/1"],
  function (_self, _aNumber, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 3, _self, _min, _max";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 5, _self, _min, _max, _ymin, _ymax";
      console.error(errorMessage);
      throw Error(errorMessage);
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
  "rotationMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return [[_cos_1(_self), _negated_1(_sin_1(_self))], [
      _sin_1(_self),
      _cos_1(_self),
    ]];
  },
  "{ :self |\n\t\t[\n\t\t\t[self.cos, self.sin.negated],\n\t\t\t[self.sin, self.cos]\n\t\t]\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "roundDown",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _roundUpTo_2(_self, _aNumber);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 2, _self, _quantum";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThanSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _unit_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_lessThanSign_2(_self, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _negated_1(_unit_1(_self));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_negative_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return 0;
    });
  },
  "{ :self |\n\t\tself.negative.if {\n\t\t\t1\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "squared",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_self, _self);
  },
  "{ :self |\n\t\tself * self\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "stope",
  ["x", "p", "y"],
  function (_x, _p, _y) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _p, _y";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _greaterThanSign_2(_self, 0);
  },
  "{ :self |\n\t\tself > 0\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "toByDo",
  ["self", "stop", "step", "aBlock:/1"],
  function (_self, _stop, _step, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _stop, _step, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _if_3(_equalsSign_2(_step, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_1("@Number>>toByDo: step must be non-zero");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _nextValue = _self;
      /* Statements */
      return _if_3(_lessThanSign_2(_step, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _whileTrue_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _lessThanSignEqualsSign_2(_stop, _nextValue);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          _aBlock_1(_nextValue);
          return _nextValue = _plusSign_2(_nextValue, _step);
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _whileTrue_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _greaterThanSignEqualsSign_2(_stop, _nextValue);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 3, _self, _end, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _index = _self;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _lessThanSignEqualsSign_2(_index, _end);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return 1;
  },
  "{ :self |\n\t\t1\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "unitVector",
  ["n", "k"],
  function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 3, _self, _end, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _step = _if_3(_lessThanSign_2(_end, _self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return -1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
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
  "upToDo",
  ["self", "end", "aBlock:/1"],
  function (_self, _end, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _end, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _ifTrue_2(_lessThanSign_2(_end, _self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "upToDo: not ascending");
    });
    return _toDo_3(_self, _end, _aBlock_1);
  },
  "{ :self :end :aBlock:/1 |\n\t\t(end < self).ifTrue {\n\t\t\tself.error('upToDo: not ascending')\n\t\t};\n\t\tself.toDo(end, aBlock:/1)\n\t}",
);

sl.addTraitMethod(
  "Number",
  "Number",
  "wrapBetweenAnd",
  ["self", "low", "high"],
  function (_self, _low, _high) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _low, _high";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return 0;
  },
  "{ :self |\n\t\t0\n\t}",
);
