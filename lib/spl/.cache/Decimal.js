sl.addType(
  false,
  "Decimal",
  "Decimal",
  ["Object"],
  ["fraction", "scale"],
);

sl.copyTraitToType(
  "Object",
  "Decimal",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "asterisk",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _operand"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isDecimal_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _Decimal_2(
        _asterisk_2(_fraction_1(_self), _asFraction_1(_operand)),
        _plusSign_2(_scale_1(_self), _scale_1(_operand)),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToDecimalAndApply_3(_operand, _self, _asterisk_2);
    });
  },
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\tDecimal(\n\t\t\t\tself.fraction * operand.asFraction,\n\t\t\t\tself.scale + operand.scale\n\t\t\t)\n\t\t} {\n\t\t\toperand.adaptToDecimalAndApply(self, *)\n\t\t}\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "plusSign",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _operand"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isDecimal_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _Decimal_2(
        _plusSign_2(_fraction_1(_self), _asFraction_1(_operand)),
        _max_2(_scale_1(_self), _scale_1(_operand)),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToDecimalAndApply_3(_operand, _self, _plusSign_2);
    });
  },
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\tDecimal(\n\t\t\t\tself.fraction + operand.asFraction,\n\t\t\t\tself.scale.max(operand.scale)\n\t\t\t)\n\t\t} {\n\t\t\toperand.adaptToDecimalAndApply(self, +)\n\t\t}\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "hyphenMinus",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _operand"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isDecimal_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _Decimal_2(
        _hyphenMinus_2(_fraction_1(_self), _asFraction_1(_operand)),
        _max_2(_scale_1(_self), _scale_1(_operand)),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToDecimalAndApply_3(_operand, _self, _hyphenMinus_2);
    });
  },
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\tDecimal(\n\t\t\t\tself.fraction - operand.asFraction,\n\t\t\t\tself.scale.max(operand.scale)\n\t\t\t)\n\t\t} {\n\t\t\toperand.adaptToDecimalAndApply(self, -)\n\t\t}\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "solidus",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _operand"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isZero_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "Decimal>>/: zero divide");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isDecimal_1(_operand), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _Decimal_2(
          _solidus_2(_fraction_1(_self), _asFraction_1(_operand)),
          _max_2(_scale_1(_self), _scale_1(_operand)),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _adaptToDecimalAndApply_3(_operand, _self, _solidus_2);
      });
    });
  },
  "{ :self :operand |\n\t\toperand.isZero.if {\n\t\t\tself.error('Decimal>>/: zero divide')\n\t\t} {\n\t\t\toperand.isDecimal.if {\n\t\t\t\tDecimal(\n\t\t\t\t\tself.fraction / operand.asFraction,\n\t\t\t\t\tself.scale.max(operand.scale)\n\t\t\t\t)\n\t\t\t} {\n\t\t\t\toperand.adaptToDecimalAndApply(self, /)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "lessThanSign",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _operand"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isDecimal_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _lessThanSign_2(_fraction_1(_self), _asFraction_1(_operand));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToDecimalAndApply_3(_operand, _self, _lessThanSign_2);
    });
  },
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\tself.fraction < operand.asFraction\n\t\t} {\n\t\t\toperand.adaptToDecimalAndApply(self, <)\n\t\t}\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "lessThanSignEqualsSign",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _operand"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isDecimal_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _lessThanSignEqualsSign_2(
        _fraction_1(_self),
        _asFraction_1(_operand),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToDecimalAndApply_3(_operand, _self, _equalsSign_2);
    });
  },
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\tself.fraction <= operand.asFraction\n\t\t} {\n\t\t\toperand.adaptToDecimalAndApply(self, =)\n\t\t}\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "equalsSign",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _operand"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isNumber_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isDecimal_1(_operand), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_fraction_1(_self), _asFraction_1(_operand));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _adaptToDecimalAndApply_3(_operand, _self, _equalsSign_2);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return false;
    });
  },
  "{ :self :operand |\n\t\toperand.isNumber.if {\n\t\t\toperand.isDecimal.if {\n\t\t\t\tself.fraction = operand.asFraction\n\t\t\t} {\n\t\t\t\toperand.adaptToDecimalAndApply(self, =)\n\t\t\t}\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "greaterThanSign",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _operand"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isDecimal_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _greaterThanSign_2(_fraction_1(_self), _asFraction_1(_operand));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToDecimalAndApply_3(_operand, _self, _greaterThanSign_2);
    });
  },
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\tself.fraction > operand.asFraction\n\t\t} {\n\t\t\toperand.adaptToDecimalAndApply(self, >)\n\t\t}\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "greaterThanSignEqualsSign",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _operand"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isDecimal_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _greaterThanSignEqualsSign_2(
        _fraction_1(_self),
        _asFraction_1(_operand),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToDecimalAndApply_3(
        _operand,
        _self,
        _greaterThanSignEqualsSign_2,
      );
    });
  },
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\tself.fraction >= operand.asFraction\n\t\t} {\n\t\t\toperand.adaptToDecimalAndApply(self, >=)\n\t\t}\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "adaptToFractionAndApply",
  ["self", "receiver", "aBlock:/2"],
  function (_self, _receiver, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _receiver, _aBlock_2"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _aBlock_2(_asScaledDecimal_2(_receiver, _scale_1(_self)), _self);
  },
  "{ :self :receiver :aBlock:/2 |\n\t\taBlock(receiver.asScaledDecimal(self.scale), self)\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "adaptToIntegerAndApply",
  ["self", "receiver", "aBlock:/2"],
  function (_self, _receiver, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _receiver, _aBlock_2"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _aBlock_2(_asScaledDecimal_2(_receiver, 0), _self);
  },
  "{ :self :receiver :aBlock:/2 |\n\t\taBlock(receiver.asScaledDecimal(0), self)\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "asFloat",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asFloat_1(_fraction_1(_self));
  },
  "{ :self |\n\t\tself.fraction.asFloat\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "asFraction",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _fraction_1(_self);
  },
  "{ :self |\n\t\tself.fraction\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "asDecimal",
  ["self", "scale"],
  function (_self, _scale) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _scale"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Decimal_2(_fraction_1(_self), _scale_1(_self));
  },
  "{ :self :scale |\n\t\tDecimal(self.fraction, self.scale)\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "denominator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _denominator_1(_fraction_1(_self));
  },
  "{ :self |\n\t\tself.fraction.denominator\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
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
    return _Decimal_2(_fractionPart_1(_fraction_1(_self)), _scale_1(_self));
  },
  "{ :self |\n\t\tDecimal(self.fraction.fractionPart, self.scale)\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
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
    return _Decimal_2(_integerPart_1(_fraction_1(_self)), _scale_1(_self));
  },
  "{ :self |\n\t\tDecimal(self.fraction.integerPart, self.scale)\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "isPowerOfTwo",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isPowerOfTwo_1(_fraction_1(_self));
  },
  "{ :self |\n\t\tself.fraction.isPowerOfTwo\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
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
    return _equalsSign_2(_numerator_1(_fraction_1(_self)), 0);
  },
  "{ :self |\n\t\tself.fraction.numerator = 0\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
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
    return _Decimal_2(_negated_1(_fraction_1(_self)), _scale_1(_self));
  },
  "{ :self |\n\t\tDecimal(self.fraction.negated, self.scale)\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
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
    return _isNegative_1(_fraction_1(_self));
  },
  "{ :self |\n\t\tself.fraction.isNegative\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
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

sl.addMethod(
  "Decimal",
  "Decimal",
  "numerator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _numerator_1(_fraction_1(_self));
  },
  "{ :self |\n\t\tself.fraction.numerator\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(
      _printStringShowingDecimalPlaces_2(_fraction_1(_self), _scale_1(_self)),
      "D",
    );
  },
  "{ :self |\n\t\tself.fraction.printStringShowingDecimalPlaces(self.scale) ++ 'D'\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "raisedToInteger",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Decimal_2(
      _raisedToInteger_2(_fraction_1(_self), _aNumber),
      _scale_1(_self),
    );
  },
  "{ :self :aNumber |\n\t\tDecimal(self.fraction.raisedToInteger(aNumber), self.scale)\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
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
    return _if_3(_isZero_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "Decimal>>reciprocal: zero divide");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _Decimal_2(_reciprocal_1(_fraction_1(_self)), _scale_1(_self));
    });
  },
  "{ :self |\n\t\tself.isZero.if {\n\t\t\tself.error('Decimal>>reciprocal: zero divide')\n\t\t} {\n\t\t\tDecimal(self.fraction.reciprocal, self.scale)\n\t\t}\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
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
    return _Decimal_2(_squared_1(_fraction_1(_self)), _scale_1(_self));
  },
  "{ :self |\n\t\tDecimal(self.fraction.squared, self.scale)\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(
        _plusSignPlusSign_2(
          _plusSignPlusSign_2("Decimal(", _fraction_1(_self)),
          ", ",
        ),
        _scale_1(_self),
      ),
      ")",
    );
  },
  "{ :self |\n\t\t'Decimal(' ++ self.fraction ++ ', ' ++ self.scale ++ ')'\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "truncated",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _truncated_1(_fraction_1(_self));
  },
  "{ :self |\n\t\tself.fraction.truncated\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
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
    return _Decimal_2(0, 0);
  },
  "{ :self |\n\t\tDecimal(0, 0)\n\t}",
);

sl.addMethod(
  "Fraction",
  "Decimal",
  "Decimal",
  ["fraction", "scale"],
  function (_fraction, _scale) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _fraction, _scale"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(_newDecimal_0(), _fraction, _scale);
  },
  "{ :fraction :scale |\n\t\tnewDecimal().initializeSlots(fraction, scale)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Decimal",
  "adaptToDecimalAndApply",
  ["self", "receiver", "aBlock:/2"],
  function (_self, _receiver, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _receiver, _aBlock_2"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_2(_receiver, _asDecimal_2(_self, 0));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_2(_asFloat_1(_receiver), _self);
    });
  },
  "{ :self :receiver :aBlock:/2 |\n\t\tself.isInteger.if {\n\t\t\taBlock(receiver, self.asDecimal(0))\n\n\t\t} {\n\t\t\taBlock(receiver.asFloat, self)\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Decimal",
  "asDecimal",
  ["self", "scale"],
  function (_self, _scale) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _scale"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _Decimal_2(_Fraction_2(_self, 1), _scale);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "SmallFloat>>asDecimal");
    });
  },
  "{ :self :scale |\n\t\tself.isInteger.if {\n\t\t\tDecimal(Fraction(self, 1), scale)\n\t\t} {\n\t\t\tself.error('SmallFloat>>asDecimal')\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Decimal",
  "asDecimal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _asDecimal_2(_self, 0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "SmallFloat>>asDecimal");
    });
  },
  "{ :self |\n\t\tself.isInteger.if {\n\t\t\tself.asDecimal(0)\n\t\t} {\n\t\t\tself.error('SmallFloat>>asDecimal')\n\t\t}\n\t}",
);

sl.addMethod(
  "Fraction",
  "Decimal",
  "adaptToDecimalAndApply",
  ["self", "receiver", "aBlock:/2"],
  function (_self, _receiver, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _receiver, _aBlock_2"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _aBlock_2(_receiver, _asDecimal_2(_self, _scale_1(_receiver)));
  },
  "{ :self :receiver :aBlock:/2 |\n\t\taBlock(receiver, self.asDecimal(receiver.scale))\n\t}",
);

sl.addMethod(
  "Fraction",
  "Decimal",
  "asDecimal",
  ["self", "scale"],
  function (_self, _scale) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _scale"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Decimal_2(_self, _scale);
  },
  "{ :self :scale |\n\t\tDecimal(self, scale)\n\t}",
);

sl.addMethod(
  "String",
  "Decimal",
  "parseDecimal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _p = _splitBy_2(_self, ".");
    /* Statements */
    return _caseOfOtherwise_3(_size_1(_p), [
      _hyphenMinusGreaterThanSign_2(function () {
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
        return _Decimal_2(_asFraction_1(_parseInteger_2(_first_1(_p), 10)), 0);
      }),
      _hyphenMinusGreaterThanSign_2(function () {
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
        /* Temporaries */
        let _i = _parseInteger_2(_first_1(_p), 10);
        let _f = _copySignTo_2(_i, _parseInteger_2(_second_1(_p), 10));
        let _k = _size_1(_second_1(_p));
        /* Statements */
        return _Decimal_2(
          _plusSign_2(_i, _Fraction_2(_f, _circumflexAccent_2(10, _k))),
          _k,
        );
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "String>>asDecimal");
    });
  },
  "{ :self |\n\t\tlet p = self.splitBy('.');\n\t\tp.size.caseOfOtherwise([\n\t\t\t{ 1 } -> {\n\t\t\t\tDecimal(p.first.parseInteger(10).asFraction, 0)\n\t\t\t},\n\t\t\t{ 2 } -> {\n\t\t\t\tlet i = p.first.parseInteger(10);\n\t\t\t\tlet f = i.copySignTo(p.second.parseInteger(10));\n\t\t\t\tlet k = p.second.size;\n\t\t\t\tDecimal(i + Fraction(f, 10 ^ k), k)\n\t\t\t}\n\t\t]) {\n\t\t\tself.error('String>>asDecimal')\n\t\t}\n\t}",
);
