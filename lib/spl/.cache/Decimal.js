sl.addType(
  false,
  "Decimal",
  "Decimal",
  ["Object", "Equatable", "Comparable", "Magnitude", "Number"],
  ["fraction", "scale"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Decimal",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Decimal",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "Decimal",
);

sl.copyTraitMethodsToType(
  "Magnitude",
  "Decimal",
);

sl.copyTraitMethodsToType(
  "Number",
  "Decimal",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "equalsSign",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isDecimal_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_scale_1(_self), _scale_1(_operand)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _m = _circumflexAccent_2(10, _scale_1(_self));
            /* Statements */
            return _equalsSign_2(
              _round_1(_asterisk_2(_asFloat_1(_self), _m)),
              _round_1(_asterisk_2(_asFloat_1(_operand), _m)),
            );
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return false;
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\t(self.scale = operand.scale) & {\n\t\t\t\tlet m = 10 ^ self.scale;\n\t\t\t\t(self.asFloat * m).round = (operand.asFloat * m).round\n\t\t\t}\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "tilde",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _equalsSign_2(_self, _operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isNumber_1(_operand),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _tilde_2(_asFloat_1(_self), _asFloat_1(_operand));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return false;
          }, []),
        );
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself = operand | {\n\t\t\toperand.isNumber.if {\n\t\t\t\tself.asFloat ~ operand.asFloat\n\t\t\t} {\n\t\t\t\tfalse\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "lessThanSign",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isDecimal_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_fraction_1(_self), _fraction_1(_operand));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToDecimalAndApply_3(_operand, _self, _lessThanSign_2);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\tself.fraction < operand.fraction\n\t\t} {\n\t\t\toperand.adaptToDecimalAndApply(self, <)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "asterisk",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isDecimal_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _UnsimplifiedDecimal_2(
          _asterisk_2(_fraction_1(_self), _fraction_1(_operand)),
          _plusSign_2(_scale_1(_self), _scale_1(_operand)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToDecimalAndApply_3(_operand, _self, _asterisk_2);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\tUnsimplifiedDecimal(\n\t\t\t\tself.fraction * operand.fraction,\n\t\t\t\tself.scale + operand.scale\n\t\t\t)\n\t\t} {\n\t\t\toperand.adaptToDecimalAndApply(self, *)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "plusSign",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isDecimal_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _UnsimplifiedDecimal_2(
          _plusSign_2(_fraction_1(_self), _fraction_1(_operand)),
          _max_2(_scale_1(_self), _scale_1(_operand)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToDecimalAndApply_3(_operand, _self, _plusSign_2);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\tUnsimplifiedDecimal(\n\t\t\t\tself.fraction + operand.fraction,\n\t\t\t\tself.scale.max(operand.scale)\n\t\t\t)\n\t\t} {\n\t\t\toperand.adaptToDecimalAndApply(self, +)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "hyphenMinus",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isDecimal_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _UnsimplifiedDecimal_2(
          _hyphenMinus_2(_fraction_1(_self), _fraction_1(_operand)),
          _max_2(_scale_1(_self), _scale_1(_operand)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToDecimalAndApply_3(_operand, _self, _hyphenMinus_2);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\tUnsimplifiedDecimal(\n\t\t\t\tself.fraction - operand.fraction,\n\t\t\t\tself.scale.max(operand.scale)\n\t\t\t)\n\t\t} {\n\t\t\toperand.adaptToDecimalAndApply(self, -)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "solidus",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isZero_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Decimal>>/: zero divide");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isDecimal_1(_operand),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _UnsimplifiedDecimal_2(
              _solidus_2(_fraction_1(_self), _fraction_1(_operand)),
              _max_2(_scale_1(_self), _scale_1(_operand)),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _adaptToDecimalAndApply_3(_operand, _self, _solidus_2);
          }, []),
        );
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\toperand.isZero.if {\n\t\t\tself.error('Decimal>>/: zero divide')\n\t\t} {\n\t\t\toperand.isDecimal.if {\n\t\t\t\tUnsimplifiedDecimal(\n\t\t\t\t\tself.fraction / operand.fraction,\n\t\t\t\t\tself.scale.max(operand.scale)\n\t\t\t\t)\n\t\t\t} {\n\t\t\t\toperand.adaptToDecimalAndApply(self, /)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "circumflexAccent",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isInteger_1(_aNumber),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _raisedToInteger_2(_self, _aNumber);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _unimplementedCase_2(_self, "^");
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\taNumber.isInteger.if {\n\t\t\tself.raisedToInteger(aNumber)\n\t\t} {\n\t\t\tself.unimplementedCase('^')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "abs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _UnsimplifiedDecimal_2(_abs_1(_fraction_1(_self)), _scale_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tUnsimplifiedDecimal(self.fraction.abs, self.scale)\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "adaptToFractionAndApply",
  ["self", "receiver", "aBlock:/2"],
  sl.annotateFunction(function (_self, _receiver, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _receiver, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_asDecimal_2(_receiver, _scale_1(_self)), _self);
  }, ["self", "receiver", "aBlock:/2"]),
  "{ :self :receiver :aBlock:/2 |\n\t\taBlock(receiver.asDecimal(self.scale), self)\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "adaptToIntegerAndApply",
  ["self", "receiver", "aBlock:/2"],
  sl.annotateFunction(function (_self, _receiver, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _receiver, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_asDecimal_2(_receiver, 0), _self);
  }, ["self", "receiver", "aBlock:/2"]),
  "{ :self :receiver :aBlock:/2 |\n\t\taBlock(receiver.asDecimal(0), self)\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "adaptToNumberAndApply",
  ["self", "receiver", "aBlock:/2"],
  sl.annotateFunction(function (_self, _receiver, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _receiver, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isInteger_1(_receiver),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_asDecimal_2(_receiver, 0), _self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Decimal>>adaptToNumberAndApply: not integer");
      }, []),
    );
  }, ["self", "receiver", "aBlock:/2"]),
  "{ :self :receiver :aBlock:/2 |\n\t\treceiver.isInteger.if {\n\t\t\taBlock(receiver.asDecimal(0), self)\n\t\t} {\n\t\t\tself.error('Decimal>>adaptToNumberAndApply: not integer')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "asDecimal",
  ["self", "scale"],
  sl.annotateFunction(function (_self, _scale) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _scale";
      throw new Error(errorMessage);
    } /* Statements */
    return _asDecimal_2(_fraction_1(_self), _scale);
  }, ["self", "scale"]),
  "{ :self :scale |\n\t\tself.fraction.asDecimal(scale)\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "asFloat",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asFloat_1(_fraction_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.fraction.asFloat\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "asFraction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fraction_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.fraction\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "asInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asInteger_1(_fraction_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "asInteger");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isInteger.if {\n\t\t\tself.fraction.asInteger\n\t\t} {\n\t\t\tself.error('asInteger')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "asSmallInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asSmallInteger_1(_fraction_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.fraction.asSmallInteger\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "asSmallFloat",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asSmallFloat_1(_fraction_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.fraction.asSmallFloat\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "asLargeInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asLargeInteger_1(_fraction_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.fraction.asLargeInteger\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "denominator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _denominator_1(_fraction_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.fraction.denominator\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "fractionalPart",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _UnsimplifiedDecimal_2(
      _fractionalPart_1(_fraction_1(_self)),
      _scale_1(_self),
    );
  }, ["self"]),
  "{ :self |\n\t\tUnsimplifiedDecimal(\n\t\t\tself.fraction.fractionalPart,\n\t\t\tself.scale\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "integerPart",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _UnsimplifiedDecimal_2(
      _asFraction_1(_integerPart_1(_fraction_1(_self))),
      _scale_1(_self),
    );
  }, ["self"]),
  "{ :self |\n\t\tUnsimplifiedDecimal(\n\t\t\tself.fraction.integerPart.asFraction,\n\t\t\tself.scale\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "isExact",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["unused"]),
  "{ :unused |\n\t\ttrue\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "isInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isZero_1(_scale_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.scale.isZero\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "isNegative",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isNegative_1(_fraction_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.fraction.isNegative\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "isNumber",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["unused"]),
  "{ :unused |\n\t\ttrue\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "isPowerOfTwo",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isPowerOfTwo_1(_fraction_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.fraction.isPowerOfTwo\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "isZero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_numerator_1(_fraction_1(_self)), 0);
  }, ["self"]),
  "{ :self |\n\t\tself.fraction.numerator = 0\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "negate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _UnsimplifiedDecimal_2(
      _negate_1(_fraction_1(_self)),
      _scale_1(_self),
    );
  }, ["self"]),
  "{ :self |\n\t\tUnsimplifiedDecimal(self.fraction.negate, self.scale)\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "numerator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _numerator_1(_fraction_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.fraction.numerator\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_scale_1(_self), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSignPlusSign_2(
          _basicPrintString_2(_asLargeInteger_1(_integerPart_1(_self)), 10),
          "D",
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _format_2("%%.%D", [
          _if_3(
            _isNegative_1(_fraction_1(_self)),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return "-";
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return "";
            }, []),
          ),
          _basicPrintString_2(
            _abs_1(_asLargeInteger_1(_integerPart_1(_self))),
            10,
          ),
          _padRight_3(
            _basicPrintString_2(
              _round_1(
                _asterisk_2(
                  _abs_1(_fraction_1(_fractionalPart_1(_self))),
                  _circumflexAccent_2(10, _scale_1(_self)),
                ),
              ),
              10,
            ),
            [_scale_1(_self)],
            "0",
          ),
        ]);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.scale = 0).if {\n\t\t\tself.integerPart.asLargeInteger.basicPrintString(10) ++ 'D'\n\t\t} {\n\t\t\t'%%.%D'.format(\n\t\t\t\t[\n\t\t\t\t\tself.fraction.isNegative.if {\n\t\t\t\t\t\t'-'\n\t\t\t\t\t} {\n\t\t\t\t\t\t''\n\t\t\t\t\t},\n\t\t\t\t\tself.integerPart\n\t\t\t\t\t.asLargeInteger\n\t\t\t\t\t.abs\n\t\t\t\t\t.basicPrintString(10),\n\t\t\t\t\t(self.fractionalPart.fraction.abs * (10 ^ self.scale))\n\t\t\t\t\t.round\n\t\t\t\t\t.basicPrintString(10)\n\t\t\t\t\t.padRight([self.scale], '0')\n\t\t\t\t]\n\t\t\t)\n\t\t}\n\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "raisedToInteger",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _UnsimplifiedDecimal_2(
      _raisedToInteger_2(_fraction_1(_self), _aNumber),
      _scale_1(_self),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tUnsimplifiedDecimal(\n\t\t\tself.fraction.raisedToInteger(aNumber),\n\t\t\tself.scale\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "reciprocal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isZero_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Decimal>>reciprocal: zero divide");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _UnsimplifiedDecimal_2(
          _reciprocal_1(_fraction_1(_self)),
          _scale_1(_self),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isZero.if {\n\t\t\tself.error('Decimal>>reciprocal: zero divide')\n\t\t} {\n\t\t\tUnsimplifiedDecimal(\n\t\t\t\tself.fraction.reciprocal,\n\t\t\t\tself.scale\n\t\t\t)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "square",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _UnsimplifiedDecimal_2(
      _square_1(_fraction_1(_self)),
      _scale_1(_self),
    );
  }, ["self"]),
  "{ :self |\n\t\tUnsimplifiedDecimal(\n\t\t\tself.fraction.square,\n\t\t\tself.scale\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("Decimal(%, %)", [
      _storeString_1(_fraction_1(_self)),
      _scale_1(_self),
    ]);
  }, ["self"]),
  "{ :self |\n\t\t'Decimal(%, %)'.format(\n\t\t\t[\n\t\t\t\tself.fraction.storeString,\n\t\t\t\tself.scale\n\t\t\t]\n\t\t)\n\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "truncate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _truncate_1(_fraction_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.fraction.truncate\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "zero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _UnsimplifiedDecimal_2(_Fraction_2(0n, 1n), 0);
  }, ["self"]),
  "{ :self |\n\t\tUnsimplifiedDecimal(0/1, 0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Decimal",
  "adaptToDecimalAndApply",
  ["self", "receiver", "aBlock:/2"],
  sl.annotateFunction(function (_self, _receiver, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _receiver, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_receiver, _asDecimal_2(_self, _scale_1(_receiver)));
  }, ["self", "receiver", "aBlock:/2"]),
  "{ :self :receiver :aBlock:/2 |\n\t\taBlock(receiver, self.asDecimal(receiver.scale))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Decimal",
  "asDecimal",
  ["self", "scale"],
  sl.annotateFunction(function (_self, _scale) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _scale";
      throw new Error(errorMessage);
    } /* Statements */
    return _Decimal_2(_self, _scale);
  }, ["self", "scale"]),
  "{ :self :scale |\n\t\tDecimal(self, scale)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Decimal",
  "Decimal",
  ["self", "scale"],
  sl.annotateFunction(function (_self, _scale) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _scale";
      throw new Error(errorMessage);
    } /* Statements */
    return _UnsimplifiedDecimal_2(_asDecimalFraction_2(_self, _scale), _scale);
  }, ["self", "scale"]),
  "{ :self :scale |\n\t\tUnsimplifiedDecimal(\n\t\t\tself.asDecimalFraction(scale),\n\t\t\tscale\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Decimal",
  "UnsimplifiedDecimal",
  ["fraction", "scale"],
  sl.annotateFunction(function (_fraction, _scale) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _fraction, _scale";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newDecimal_0(), _fraction, _scale);
  }, ["fraction", "scale"]),
  "{ :fraction :scale |\n\t\tnewDecimal().initializeSlots(\n\t\t\tfraction,\n\t\t\tscale\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Decimal",
  "adaptToDecimalAndApply",
  ["self", "receiver", "aBlock:/2"],
  sl.annotateFunction(function (_self, _receiver, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _receiver, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_receiver, _asDecimal_2(_self, 0));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_asFloat_1(_receiver), _self);
      }, []),
    );
  }, ["self", "receiver", "aBlock:/2"]),
  "{ :self :receiver :aBlock:/2 |\n\t\tself.isInteger.if {\n\t\t\taBlock(receiver, self.asDecimal(0))\n\n\t\t} {\n\t\t\taBlock(receiver.asFloat, self)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Decimal",
  "asDecimal",
  ["self", "scale"],
  sl.annotateFunction(function (_self, _scale) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _scale";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _UnsimplifiedDecimal_2(_Fraction_2(_self, 1), _scale);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asDecimal_2(_asDecimalFraction_2(_self, _scale), _scale);
      }, []),
    );
  }, ["self", "scale"]),
  "{ :self :scale |\n\t\tself.isInteger.if {\n\t\t\tUnsimplifiedDecimal(Fraction(self, 1), scale)\n\t\t} {\n\t\t\tself.asDecimalFraction(scale).asDecimal(scale)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Decimal",
  "asDecimal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asDecimal_2(_self, 0);
  }, ["self"]),
  "{ :self |\n\t\tself.asDecimal(0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "LargeInteger",
  "Decimal",
  "adaptToDecimalAndApply",
  ["self", "aNumber", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_aNumber, _asDecimal_1(_self));
  }, ["self", "aNumber", "aBlock:/2"]),
  "{ :self :aNumber :aBlock:/2 |\n\t\taBlock(aNumber, self.asDecimal)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "LargeInteger",
  "Decimal",
  "asDecimal",
  ["self", "scale"],
  sl.annotateFunction(function (_self, _scale) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _scale";
      throw new Error(errorMessage);
    } /* Statements */
    return _UnsimplifiedDecimal_2(_Fraction_2(_self, 1n), _scale);
  }, ["self", "scale"]),
  "{ :self :scale |\n\t\tUnsimplifiedDecimal(Fraction(self, 1L), scale)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "LargeInteger",
  "Decimal",
  "asDecimal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asDecimal_2(_self, 0);
  }, ["self"]),
  "{ :self |\n\t\tself.asDecimal(0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Decimal",
  "basicParseDecimal",
  ["self", "elseClause:/0"],
  sl.annotateFunction(function (_self, _elseClause_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elseClause_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _parts = _splitBy_2(_self, ".");
    /* Statements */
    return _caseOf_3(
      _size_1(_parts),
      [
        _hyphenMinusGreaterThanSign_2(
          1,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _UnsimplifiedDecimal_2(
              _asFraction_1(
                _parseLargeInteger_2(_at_2(_parts, 1), _elseClause_0),
              ),
              0,
            );
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          2,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _sign = _if_3(
              _beginsWith_2(_self, "-"),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return -1;
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return 1;
              }, []),
            );
            let _i = _parseLargeInteger_2(_at_2(_parts, 1), _elseClause_0);
            let _f = _copySignTo_2(
              _sign,
              _parseLargeInteger_2(_at_2(_parts, 2), _elseClause_0),
            );
            let _k = _size_1(_at_2(_parts, 2));
            /* Statements */
            return _UnsimplifiedDecimal_2(
              _plusSign_2(_i, _Fraction_2(_f, _circumflexAccent_2(10, _k))),
              _k,
            );
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _elseClause_0();
      }, []),
    );
  }, ["self", "elseClause:/0"]),
  "{ :self :elseClause:/0 |\n\t\tlet parts = self.splitBy('.');\n\t\tparts.size.caseOf([\n\t\t\t1 -> {\n\t\t\t\tUnsimplifiedDecimal(\n\t\t\t\t\tparts[1].parseLargeInteger(elseClause:/0).asFraction,\n\t\t\t\t\t0\n\t\t\t\t)\n\t\t\t},\n\t\t\t2 -> {\n\t\t\t\tlet sign = self.beginsWith('-').if { -1 } { 1 };\n\t\t\t\tlet i = parts[1].parseLargeInteger(elseClause:/0);\n\t\t\t\tlet f = sign.copySignTo(parts[2].parseLargeInteger(elseClause:/0));\n\t\t\t\tlet k = parts[2].size;\n\t\t\t\tUnsimplifiedDecimal(\n\t\t\t\t\ti + Fraction(f, 10 ^ k),\n\t\t\t\t\tk\n\t\t\t\t)\n\t\t\t}\n\t\t]) {\n\t\t\telseClause()\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Decimal",
  "parseDecimal",
  ["self", "elseClause:/0"],
  sl.annotateFunction(function (_self, _elseClause_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elseClause_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _endsWith_2(_self, "D"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _basicParseDecimal_2(_allButLast_1(_self), _elseClause_0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _elseClause_0();
      }, []),
    );
  }, ["self", "elseClause:/0"]),
  "{ :self :elseClause:/0 |\n\t\tself.endsWith('D').if {\n\t\t\tself.allButLast.basicParseDecimal(elseClause:/0)\n\t\t} {\n\t\t\telseClause()\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Decimal",
  "parseDecimal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _endsWith_2(_self, "D"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _basicParseDecimal_2(
          _allButLast_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "String>>parseDecimal: no D suffix");
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "String>>parseDecimal");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.endsWith('D').if {\n\t\t\tself.allButLast.basicParseDecimal {\n\t\t\t\tself.error('String>>parseDecimal: no D suffix')\n\t\t\t}\n\t\t} {\n\t\t\tself.error('String>>parseDecimal')\n\t\t}\n\t}",
);
