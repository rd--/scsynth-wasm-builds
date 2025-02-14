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
      const errorMessage = "Arity: expected 2, _self, _operand";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isDecimal_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _UnsimplifiedDecimal_2(
        _asterisk_2(_fraction_1(_self), _fraction_1(_operand)),
        _plusSign_2(_scale_1(_self), _scale_1(_operand)),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToDecimalAndApply_3(_operand, _self, _asterisk_2);
    });
  },
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\tUnsimplifiedDecimal(\n\t\t\t\tself.fraction * operand.fraction,\n\t\t\t\tself.scale + operand.scale\n\t\t\t)\n\t\t} {\n\t\t\toperand.adaptToDecimalAndApply(self, *)\n\t\t}\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "plusSign",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isDecimal_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _UnsimplifiedDecimal_2(
        _plusSign_2(_fraction_1(_self), _fraction_1(_operand)),
        _max_2(_scale_1(_self), _scale_1(_operand)),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToDecimalAndApply_3(_operand, _self, _plusSign_2);
    });
  },
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\tUnsimplifiedDecimal(\n\t\t\t\tself.fraction + operand.fraction,\n\t\t\t\tself.scale.max(operand.scale)\n\t\t\t)\n\t\t} {\n\t\t\toperand.adaptToDecimalAndApply(self, +)\n\t\t}\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "hyphenMinus",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isDecimal_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _UnsimplifiedDecimal_2(
        _hyphenMinus_2(_fraction_1(_self), _fraction_1(_operand)),
        _max_2(_scale_1(_self), _scale_1(_operand)),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToDecimalAndApply_3(_operand, _self, _hyphenMinus_2);
    });
  },
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\tUnsimplifiedDecimal(\n\t\t\t\tself.fraction - operand.fraction,\n\t\t\t\tself.scale.max(operand.scale)\n\t\t\t)\n\t\t} {\n\t\t\toperand.adaptToDecimalAndApply(self, -)\n\t\t}\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "solidus",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isZero_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "Decimal>>/: zero divide");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isDecimal_1(_operand), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _UnsimplifiedDecimal_2(
          _solidus_2(_fraction_1(_self), _fraction_1(_operand)),
          _max_2(_scale_1(_self), _scale_1(_operand)),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToDecimalAndApply_3(_operand, _self, _solidus_2);
      });
    });
  },
  "{ :self :operand |\n\t\toperand.isZero.if {\n\t\t\tself.error('Decimal>>/: zero divide')\n\t\t} {\n\t\t\toperand.isDecimal.if {\n\t\t\t\tUnsimplifiedDecimal(\n\t\t\t\t\tself.fraction / operand.fraction,\n\t\t\t\t\tself.scale.max(operand.scale)\n\t\t\t\t)\n\t\t\t} {\n\t\t\t\toperand.adaptToDecimalAndApply(self, /)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "lessThanSign",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isDecimal_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _lessThanSign_2(_fraction_1(_self), _fraction_1(_operand));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToDecimalAndApply_3(_operand, _self, _lessThanSign_2);
    });
  },
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\tself.fraction < operand.fraction\n\t\t} {\n\t\t\toperand.adaptToDecimalAndApply(self, <)\n\t\t}\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "lessThanSignEqualsSign",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isDecimal_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _lessThanSignEqualsSign_2(
        _fraction_1(_self),
        _fraction_1(_operand),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToDecimalAndApply_3(
        _operand,
        _self,
        _lessThanSignEqualsSign_2,
      );
    });
  },
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\tself.fraction <= operand.fraction\n\t\t} {\n\t\t\toperand.adaptToDecimalAndApply(self, <=)\n\t\t}\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "equalsSign",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isDecimal_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(
        _equalsSign_2(_scale_1(_self), _scale_1(_operand)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Temporaries */
          let _m = _circumflexAccent_2(10, _scale_1(_self));
          /* Statements */
          return _equalsSign_2(
            _rounded_1(_asterisk_2(_asFloat_1(_self), _m)),
            _rounded_1(_asterisk_2(_asFloat_1(_operand), _m)),
          );
        },
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return false;
    });
  },
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\t(self.scale = operand.scale) & {\n\t\t\t\tlet m = 10 ^ self.scale;\n\t\t\t\t(self.asFloat * m).rounded = (operand.asFloat * m).rounded\n\t\t\t}\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "tilde",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(_equalsSign_2(_self, _operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isNumber_1(_operand), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _tilde_2(_asFloat_1(_self), _asFloat_1(_operand));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return false;
      });
    });
  },
  "{ :self :operand |\n\t\tself = operand | {\n\t\t\toperand.isNumber.if {\n\t\t\t\tself.asFloat ~ operand.asFloat\n\t\t\t} {\n\t\t\t\tfalse\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "greaterThanSign",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isDecimal_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _greaterThanSign_2(_fraction_1(_self), _fraction_1(_operand));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToDecimalAndApply_3(_operand, _self, _greaterThanSign_2);
    });
  },
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\tself.fraction > operand.fraction\n\t\t} {\n\t\t\toperand.adaptToDecimalAndApply(self, >)\n\t\t}\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "greaterThanSignEqualsSign",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isDecimal_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _greaterThanSignEqualsSign_2(
        _fraction_1(_self),
        _fraction_1(_operand),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToDecimalAndApply_3(
        _operand,
        _self,
        _greaterThanSignEqualsSign_2,
      );
    });
  },
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\tself.fraction >= operand.fraction\n\t\t} {\n\t\t\toperand.adaptToDecimalAndApply(self, >=)\n\t\t}\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "circumflexAccent",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isInteger_1(_aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _raisedToInteger_2(_self, _aNumber);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "^: not implemented for non-integer exponents");
    });
  },
  "{ :self :aNumber |\n\t\taNumber.isInteger.if {\n\t\t\tself.raisedToInteger(aNumber)\n\t\t} {\n\t\t\tself.error('^: not implemented for non-integer exponents')\n\t\t}\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "abs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _UnsimplifiedDecimal_2(_abs_1(_fraction_1(_self)), _scale_1(_self));
  },
  "{ :self |\n\t\tUnsimplifiedDecimal(self.fraction.abs, self.scale)\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "adaptToFractionAndApply",
  ["self", "receiver", "aBlock:/2"],
  function (_self, _receiver, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _receiver, _aBlock_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_asDecimal_2(_receiver, _scale_1(_self)), _self);
  },
  "{ :self :receiver :aBlock:/2 |\n\t\taBlock(receiver.asDecimal(self.scale), self)\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "adaptToIntegerAndApply",
  ["self", "receiver", "aBlock:/2"],
  function (_self, _receiver, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _receiver, _aBlock_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_asDecimal_2(_receiver, 0), _self);
  },
  "{ :self :receiver :aBlock:/2 |\n\t\taBlock(receiver.asDecimal(0), self)\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "adaptToNumberAndApply",
  ["self", "receiver", "aBlock:/2"],
  function (_self, _receiver, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _receiver, _aBlock_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isInteger_1(_receiver), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_2(_asDecimal_2(_receiver, 0), _self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "Decimal>>adaptToNumberAndApply: not integer");
    });
  },
  "{ :self :receiver :aBlock:/2 |\n\t\treceiver.isInteger.if {\n\t\t\taBlock(receiver.asDecimal(0), self)\n\t\t} {\n\t\t\tself.error('Decimal>>adaptToNumberAndApply: not integer')\n\t\t}\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "asDecimal",
  ["self", "scale"],
  function (_self, _scale) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _scale";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asDecimal_2(_fraction_1(_self), _scale);
  },
  "{ :self :scale |\n\t\tself.fraction.asDecimal(scale)\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "asFloat",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _fraction_1(_self);
  },
  "{ :self |\n\t\tself.fraction\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "asInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asInteger_1(_fraction_1(_self));
  },
  "{ :self |\n\t\tself.fraction.asInteger\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "asLargeInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _truncated_1(_fraction_1(_self));
  },
  "{ :self |\n\t\tself.fraction.truncated\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "denominator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _UnsimplifiedDecimal_2(
      _fractionPart_1(_fraction_1(_self)),
      _scale_1(_self),
    );
  },
  "{ :self |\n\t\tUnsimplifiedDecimal(\n\t\t\tself.fraction.fractionPart,\n\t\t\tself.scale\n\t\t)\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "integerPart",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _UnsimplifiedDecimal_2(
      _asFraction_1(_integerPart_1(_fraction_1(_self))),
      _scale_1(_self),
    );
  },
  "{ :self |\n\t\tUnsimplifiedDecimal(\n\t\t\tself.fraction.integerPart.asFraction,\n\t\t\tself.scale\n\t\t)\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "isExact",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :unused |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "isInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _isInteger_1(_fraction_1(_self));
  },
  "{ :self |\n\t\tself.fraction.isInteger\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "isNegative",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _isNegative_1(_fraction_1(_self));
  },
  "{ :self |\n\t\tself.fraction.isNegative\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "isNumber",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :unused |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "isPowerOfTwo",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _UnsimplifiedDecimal_2(
      _negated_1(_fraction_1(_self)),
      _scale_1(_self),
    );
  },
  "{ :self |\n\t\tUnsimplifiedDecimal(self.fraction.negated, self.scale)\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "numerator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_scale_1(_self), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSignPlusSign_2(
        _basicPrintString_2(_asLargeInteger_1(_integerPart_1(_self)), 10),
        "D",
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _format_2("%%.%D", [
        _if_3(_isNegative_1(_fraction_1(_self)), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return "-";
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return "";
        }),
        _basicPrintString_2(
          _abs_1(_asLargeInteger_1(_integerPart_1(_self))),
          10,
        ),
        _basicPrintString_2(
          _rounded_1(
            _asterisk_2(
              _abs_1(_fraction_1(_fractionPart_1(_self))),
              _circumflexAccent_2(10, _scale_1(_self)),
            ),
          ),
          10,
        ),
      ]);
    });
  },
  "{ :self |\n\t\t(self.scale = 0).if {\n\t\t\tself.integerPart.asLargeInteger.basicPrintString(10) ++ 'D'\n\t\t} {\n\t\t\t'%%.%D'.format(\n\t\t\t\t[\n\t\t\t\t\tself.fraction.isNegative.if { '-' } { '' },\n\t\t\t\t\tself.integerPart.asLargeInteger.abs.basicPrintString(10),\n\t\t\t\t\t(self.fractionPart.fraction.abs * (10 ^ self.scale)).rounded.basicPrintString(10)\n\t\t\t\t]\n\t\t\t)\n\t\t}\n\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "raisedToInteger",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _UnsimplifiedDecimal_2(
      _raisedToInteger_2(_fraction_1(_self), _aNumber),
      _scale_1(_self),
    );
  },
  "{ :self :aNumber |\n\t\tUnsimplifiedDecimal(\n\t\t\tself.fraction.raisedToInteger(aNumber),\n\t\t\tself.scale\n\t\t)\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "reciprocal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isZero_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "Decimal>>reciprocal: zero divide");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _UnsimplifiedDecimal_2(
        _reciprocal_1(_fraction_1(_self)),
        _scale_1(_self),
      );
    });
  },
  "{ :self |\n\t\tself.isZero.if {\n\t\t\tself.error('Decimal>>reciprocal: zero divide')\n\t\t} {\n\t\t\tUnsimplifiedDecimal(\n\t\t\t\tself.fraction.reciprocal,\n\t\t\t\tself.scale\n\t\t\t)\n\t\t}\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "squared",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _UnsimplifiedDecimal_2(
      _squared_1(_fraction_1(_self)),
      _scale_1(_self),
    );
  },
  "{ :self |\n\t\tUnsimplifiedDecimal(\n\t\t\tself.fraction.squared,\n\t\t\tself.scale\n\t\t)\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("%.asDecimal(%)", [
      _storeString_1(_fraction_1(_self)),
      _scale_1(_self),
    ]);
  },
  "{ :self |\n\t\t'%.asDecimal(%)'.format(\n\t\t\t[self.fraction.storeString, self.scale]\n\t\t)\n\n\t}",
);

sl.addMethod(
  "Decimal",
  "Decimal",
  "truncated",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _UnsimplifiedDecimal_2(
      _Fraction_2(
        0n,
        1n,
      ),
      0,
    );
  },
  "{ :self |\n\t\tUnsimplifiedDecimal(0/1, 0)\n\t}",
);

sl.addMethod(
  "Fraction",
  "Decimal",
  "adaptToDecimalAndApply",
  ["self", "receiver", "aBlock:/2"],
  function (_self, _receiver, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _receiver, _aBlock_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      const errorMessage = "Arity: expected 2, _self, _scale";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _UnsimplifiedDecimal_2(_asDecimalFraction_2(_self, _scale), _scale);
  },
  "{ :self :scale |\n\t\tUnsimplifiedDecimal(\n\t\t\tself.asDecimalFraction(scale),\n\t\t\tscale\n\t\t)\n\t}",
);

sl.addMethod(
  "Fraction",
  "Decimal",
  "UnsimplifiedDecimal",
  ["fraction", "scale"],
  function (_fraction, _scale) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _fraction, _scale";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newDecimal_0(), _fraction, _scale);
  },
  "{ :fraction :scale |\n\t\tnewDecimal().initializeSlots(\n\t\t\tfraction,\n\t\t\tscale\n\t\t)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Decimal",
  "adaptToDecimalAndApply",
  ["self", "receiver", "aBlock:/2"],
  function (_self, _receiver, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _receiver, _aBlock_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_2(_receiver, _asDecimal_2(_self, 0));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
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
      const errorMessage = "Arity: expected 2, _self, _scale";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _UnsimplifiedDecimal_2(_Fraction_2(_self, 1), _scale);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _asDecimal_2(_asDecimalFraction_2(_self, _scale), _scale);
    });
  },
  "{ :self :scale |\n\t\tself.isInteger.if {\n\t\t\tUnsimplifiedDecimal(Fraction(self, 1), scale)\n\t\t} {\n\t\t\tself.asDecimalFraction(scale).asDecimal(scale)\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Decimal",
  "asDecimal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asDecimal_2(_self, 0);
  },
  "{ :self |\n\t\tself.asDecimal(0)\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "Decimal",
  "asDecimal",
  ["self", "scale"],
  function (_self, _scale) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _scale";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _UnsimplifiedDecimal_2(_Fraction_2(_self, 1n), _scale);
  },
  "{ :self :scale |\n\t\tUnsimplifiedDecimal(Fraction(self, 1L), scale)\n\t}",
);

sl.addMethod(
  "LargeInteger",
  "Decimal",
  "asDecimal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asDecimal_2(_self, 0);
  },
  "{ :self |\n\t\tself.asDecimal(0)\n\t}",
);

sl.addMethod(
  "String",
  "Decimal",
  "basicParseDecimal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _parts = _splitBy_2(_self, ".");
    /* Statements */
    return _caseOfOtherwise_3(_size_1(_parts), [
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _UnsimplifiedDecimal_2(
          _asFraction_1(_parseLargeInteger_1(_at_2(_parts, 1))),
          0,
        );
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return 2;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let _sign = _if_3(_beginsWith_2(_self, "-"), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return -1;
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return 1;
        });
        let _i = _parseLargeInteger_1(_at_2(_parts, 1));
        let _f = _copySignTo_2(_sign, _parseLargeInteger_1(_at_2(_parts, 2)));
        let _k = _size_1(_at_2(_parts, 2));
        /* Statements */
        return _UnsimplifiedDecimal_2(
          _plusSign_2(_i, _Fraction_2(_f, _circumflexAccent_2(10, _k))),
          _k,
        );
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "String>>basicParseDecimal");
    });
  },
  "{ :self |\n\t\tlet parts = self.splitBy('.');\n\t\tparts.size.caseOfOtherwise([\n\t\t\t{ 1 } -> {\n\t\t\t\tUnsimplifiedDecimal(\n\t\t\t\t\tparts[1].parseLargeInteger.asFraction,\n\t\t\t\t\t0\n\t\t\t\t)\n\t\t\t},\n\t\t\t{ 2 } -> {\n\t\t\t\tlet sign = self.beginsWith('-').if { -1 } { 1 };\n\t\t\t\tlet i = parts[1].parseLargeInteger;\n\t\t\t\tlet f = sign.copySignTo(parts[2].parseLargeInteger);\n\t\t\t\tlet k = parts[2].size;\n\t\t\t\tUnsimplifiedDecimal(\n\t\t\t\t\ti + Fraction(f, 10 ^ k),\n\t\t\t\t\tk\n\t\t\t\t)\n\t\t\t}\n\t\t]) {\n\t\t\tself.error('String>>basicParseDecimal')\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "Decimal",
  "parseDecimal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_endsWith_2(_self, "D"), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _basicParseDecimal_1(_allButLast_1(_self));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "String>>parseDecimal");
    });
  },
  "{ :self |\n\t\tself.endsWith('D').if {\n\t\t\tself.allButLast.basicParseDecimal\n\t\t} {\n\t\t\tself.error('String>>parseDecimal')\n\t\t}\n\t}",
);
