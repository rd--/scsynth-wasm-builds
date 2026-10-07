sl.addType(
  false,
  "Decimal",
  "Decimal",
  ["Object", "Store", "Equal", "Compare", "Number"],
  ["fraction", "scale"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Decimal",
);

sl.copyTraitMethodsToType(
  "Store",
  "Decimal",
);

sl.copyTraitMethodsToType(
  "Equal",
  "Decimal",
);

sl.copyTraitMethodsToType(
  "Compare",
  "Decimal",
);

sl.copyTraitMethodsToType(
  "Number",
  "Decimal",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "less",
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
        return _adaptToDecimalAndApply_3(_operand, _self, _less_2);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\tself.fraction < operand.fraction\n\t\t} {\n\t\t\toperand.adaptToDecimalAndApply(self, less/2)\n\t\t}\n\t}",
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
        return _adaptToDecimalAndApply_3(_operand, _self, _less_2);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\tself.fraction < operand.fraction\n\t\t} {\n\t\t\toperand.adaptToDecimalAndApply(self, less/2)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "divide",
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
        return _error_2(_self, "Decimal>>divide: zero");
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
            return _Decimal_2(
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
            return _adaptToDecimalAndApply_3(_operand, _self, _divide_2);
          }, []),
        );
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\toperand.isZero.if {\n\t\t\tself.error('Decimal>>divide: zero')\n\t\t} {\n\t\t\toperand.isDecimal.if {\n\t\t\t\tDecimal(\n\t\t\t\t\tself.fraction / operand.fraction,\n\t\t\t\t\tself.scale.max(operand.scale)\n\t\t\t\t)\n\t\t\t} {\n\t\t\t\toperand.adaptToDecimalAndApply(self, divide/2)\n\t\t\t}\n\t\t}\n\t}",
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
        return _error_2(_self, "Decimal>>divide: zero");
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
            return _Decimal_2(
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
            return _adaptToDecimalAndApply_3(_operand, _self, _divide_2);
          }, []),
        );
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\toperand.isZero.if {\n\t\t\tself.error('Decimal>>divide: zero')\n\t\t} {\n\t\t\toperand.isDecimal.if {\n\t\t\t\tDecimal(\n\t\t\t\t\tself.fraction / operand.fraction,\n\t\t\t\t\tself.scale.max(operand.scale)\n\t\t\t\t)\n\t\t\t} {\n\t\t\t\toperand.adaptToDecimalAndApply(self, divide/2)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "equal",
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
          _equal_2(_scale_1(_self), _scale_1(_operand)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            let _m = _circumflexAccent_2(10n, _scale_1(_self));
            return _equal_2(
              _round_1(_asterisk_2(_SmallFloat_1(_self), _m)),
              _round_1(_asterisk_2(_SmallFloat_1(_operand), _m)),
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
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\tequal(self.scale, operand.scale) & {\n\t\t\t\tlet m = 10L ^ self.scale;\n\t\t\t\tequal(\n\t\t\t\t\t(SmallFloat(self) * m).round,\n\t\t\t\t\t(SmallFloat(operand) * m).round\n\t\t\t\t)\n\t\t\t}\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
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
          _equal_2(_scale_1(_self), _scale_1(_operand)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            let _m = _circumflexAccent_2(10n, _scale_1(_self));
            return _equal_2(
              _round_1(_asterisk_2(_SmallFloat_1(_self), _m)),
              _round_1(_asterisk_2(_SmallFloat_1(_operand), _m)),
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
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\tequal(self.scale, operand.scale) & {\n\t\t\t\tlet m = 10L ^ self.scale;\n\t\t\t\tequal(\n\t\t\t\t\t(SmallFloat(self) * m).round,\n\t\t\t\t\t(SmallFloat(operand) * m).round\n\t\t\t\t)\n\t\t\t}\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
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
    return _uncheckedDecimal_2(_negate_1(_fraction_1(_self)), _scale_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tuncheckedDecimal(\n\t\t\tself.fraction.negate,\n\t\t\tself.scale\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "hyphenMinus",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _uncheckedDecimal_2(_negate_1(_fraction_1(_self)), _scale_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tuncheckedDecimal(\n\t\t\tself.fraction.negate,\n\t\t\tself.scale\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "plus",
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
        return _uncheckedDecimal_2(
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
        return _adaptToDecimalAndApply_3(_operand, _self, _plus_2);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\tuncheckedDecimal(\n\t\t\t\tself.fraction + operand.fraction,\n\t\t\t\tself.scale.max(operand.scale)\n\t\t\t)\n\t\t} {\n\t\t\toperand.adaptToDecimalAndApply(self, plus/2)\n\t\t}\n\t}",
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
        return _uncheckedDecimal_2(
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
        return _adaptToDecimalAndApply_3(_operand, _self, _plus_2);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\tuncheckedDecimal(\n\t\t\t\tself.fraction + operand.fraction,\n\t\t\t\tself.scale.max(operand.scale)\n\t\t\t)\n\t\t} {\n\t\t\toperand.adaptToDecimalAndApply(self, plus/2)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "power",
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
        return _Decimal_2(
          _reciprocal_1(_fraction_1(_self)),
          _max_2(_scale_1(_self), 1),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isZero.if {\n\t\t\tself.error('Decimal>>reciprocal: zero divide')\n\t\t} {\n\t\t\tDecimal(\n\t\t\t\tself.fraction.reciprocal,\n\t\t\t\tself.scale.max(1)\n\t\t\t)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "solidus",
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
        return _Decimal_2(
          _reciprocal_1(_fraction_1(_self)),
          _max_2(_scale_1(_self), 1),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isZero.if {\n\t\t\tself.error('Decimal>>reciprocal: zero divide')\n\t\t} {\n\t\t\tDecimal(\n\t\t\t\tself.fraction.reciprocal,\n\t\t\t\tself.scale.max(1)\n\t\t\t)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "subtract",
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
        return _uncheckedDecimal_2(
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
        return _adaptToDecimalAndApply_3(_operand, _self, _subtract_2);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\tuncheckedDecimal(\n\t\t\t\tself.fraction - operand.fraction,\n\t\t\t\tself.scale.max(operand.scale)\n\t\t\t)\n\t\t} {\n\t\t\toperand.adaptToDecimalAndApply(self, subtract/2)\n\t\t}\n\t}",
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
        return _uncheckedDecimal_2(
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
        return _adaptToDecimalAndApply_3(_operand, _self, _subtract_2);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\tuncheckedDecimal(\n\t\t\t\tself.fraction - operand.fraction,\n\t\t\t\tself.scale.max(operand.scale)\n\t\t\t)\n\t\t} {\n\t\t\toperand.adaptToDecimalAndApply(self, subtract/2)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "times",
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
        return _uncheckedDecimal_2(
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
        return _adaptToDecimalAndApply_3(_operand, _self, _times_2);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\tuncheckedDecimal(\n\t\t\t\tself.fraction * operand.fraction,\n\t\t\t\tself.scale + operand.scale /* self.scale.max(operand.scale) */\n\t\t\t)\n\t\t} {\n\t\t\toperand.adaptToDecimalAndApply(self, times/2)\n\t\t}\n\t}",
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
        return _uncheckedDecimal_2(
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
        return _adaptToDecimalAndApply_3(_operand, _self, _times_2);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\toperand.isDecimal.if {\n\t\t\tuncheckedDecimal(\n\t\t\t\tself.fraction * operand.fraction,\n\t\t\t\tself.scale + operand.scale /* self.scale.max(operand.scale) */\n\t\t\t)\n\t\t} {\n\t\t\toperand.adaptToDecimalAndApply(self, times/2)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "absoluteValue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _uncheckedDecimal_2(_abs_1(_fraction_1(_self)), _scale_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tuncheckedDecimal(self.fraction.abs, self.scale)\n\t}",
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
    return _uncheckedDecimal_2(_abs_1(_fraction_1(_self)), _scale_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tuncheckedDecimal(self.fraction.abs, self.scale)\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "adaptToFractionAndApply",
  ["self", "receiver", "aBlock/2"],
  sl.annotateFunction(function (_self, _receiver, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _receiver, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_Decimal_2(_receiver, _scale_1(_self)), _self);
  }, ["self", "receiver", "aBlock/2"]),
  "{ :self :receiver :aBlock/2 |\n\t\taBlock(\n\t\t\tDecimal(receiver, self.scale),\n\t\t\tself\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "adaptToIntegerAndApply",
  ["self", "receiver", "aBlock/2"],
  sl.annotateFunction(function (_self, _receiver, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _receiver, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_Decimal_2(_receiver, 0), _self);
  }, ["self", "receiver", "aBlock/2"]),
  "{ :self :receiver :aBlock/2 |\n\t\taBlock(\n\t\t\tDecimal(receiver, 0),\n\t\t\tself\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "adaptToNumberAndApply",
  ["self", "receiver", "aBlock/2"],
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
        return _aBlock_2(_Decimal_2(_receiver, 0), _self);
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
  }, ["self", "receiver", "aBlock/2"]),
  "{ :self :receiver :aBlock/2 |\n\t\treceiver.isInteger.if {\n\t\t\taBlock(\n\t\t\t\tDecimal(receiver, 0),\n\t\t\t\tself\n\t\t\t)\n\t\t} {\n\t\t\tself.error('Decimal>>adaptToNumberAndApply: not integer')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "ceiling",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Decimal_2(_ceiling_1(_fraction_1(_self)), _scale_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tDecimal(self.fraction.ceiling, self.scale)\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "Decimal",
  ["self", "scale"],
  sl.annotateFunction(function (_self, _scale) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _scale";
      throw new Error(errorMessage);
    } /* Statements */
    return _Decimal_2(_fraction_1(_self), _scale);
  }, ["self", "scale"]),
  "{ :self :scale |\n\t\tDecimal(\n\t\t\tself.fraction,\n\t\t\tscale\n\t\t)\n\t}",
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
  "floor",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Decimal_2(_floor_1(_fraction_1(_self)), _scale_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tDecimal(self.fraction.floor, self.scale)\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "Fraction",
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
  "decimalToFraction",
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
  "fractionalPart",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Decimal_2(_fractionalPart_1(_fraction_1(_self)), _scale_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tDecimal(\n\t\t\tself.fraction.fractionalPart,\n\t\t\tself.scale\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "Integer",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _normal_1(_LargeInteger_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.LargeInteger.normal\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "integerDigits",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let __SplVar1 = _assertIsOfSize_2(_realDigits_1(_self), 2);
    let _d = _at_2(__SplVar1, 1);
    let _n = _at_2(__SplVar1, 2);
    return _if_3(
      _lessThanSign_2(_n, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSignPlusSign_2(_List_2(_abs_1(_n), 0), _d);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _d;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [d, n] = self.realDigits;\n\t\t(n < 0).if {\n\t\t\tList(n.abs, 0) ++ d\n\t\t} {\n\t\t\td\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "decimalExpansion",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let __SplVar1 = _assertIsOfSize_2(_realDigits_1(_self), 2);
    let _d = _at_2(__SplVar1, 1);
    let _n = _at_2(__SplVar1, 2);
    return _if_3(
      _lessThanSign_2(_n, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSignPlusSign_2(_List_2(_abs_1(_n), 0), _d);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _d;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [d, n] = self.realDigits;\n\t\t(n < 0).if {\n\t\t\tList(n.abs, 0) ++ d\n\t\t} {\n\t\t\td\n\t\t}\n\t}",
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
    return _uncheckedDecimal_2(
      _Fraction_2(_integerPart_1(_fraction_1(_self)), 1),
      _scale_1(_self),
    );
  }, ["self"]),
  "{ :self |\n\t\tuncheckedDecimal(\n\t\t\tFraction(self.fraction.integerPart, 1),\n\t\t\tself.scale\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "isCloseToBy",
  ["self", "aNumber", "epsilon"],
  sl.annotateFunction(function (_self, _aNumber, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _epsilon";
      throw new Error(errorMessage);
    } /* Statements */
    return _isCloseToBy_3(
      _SmallFloat_1(_self),
      _SmallFloat_1(_aNumber),
      _epsilon,
    );
  }, ["self", "aNumber", "epsilon"]),
  "{ :self :aNumber :epsilon |\n\t\tSmallFloat(self).isCloseToBy(aNumber.SmallFloat, epsilon)\n\t}",
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
  "LargeInteger",
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
        return _LargeInteger_1(_fraction_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Decimal>>LargeInteger");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t/* 1.0D is not an integer... */\n\t\tself.isInteger.if {\n\t\t\tself.fraction.LargeInteger\n\t\t} {\n\t\t\tself.error('Decimal>>LargeInteger')\n\t\t}\n\t}",
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
  "one",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Decimal_2(_Fraction_2(1n, 1n), 0);
  }, ["self"]),
  "{ :self |\n\t\t1D\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "precision",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _integerLength_2(_truncate_1(_self), 10),
      _scale_1(_self),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.truncate.integerLength(10) + self.scale\n\t}",
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
    let _scale = _scale_1(_self);
    let _fraction = _fraction_1(_self);
    return _if_3(
      _equalsSign_2(_scale, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSignPlusSign_2(
          _uncheckedPrintString_2(_LargeInteger_1(_integerPart_1(_self)), 10),
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
            _isNegative_1(_self),
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
          _uncheckedPrintString_2(_abs_1(_integerPart_1(_fraction)), 10),
          _padLeft_3(
            _uncheckedPrintString_2(
              _round_1(
                _asterisk_2(
                  _abs_1(_fractionalPart_1(_fraction)),
                  _circumflexAccent_2(10n, _scale),
                ),
              ),
              10,
            ),
            [_scale],
            "0",
          ),
        ]);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet scale = self.scale;\n\t\tlet fraction = self.fraction;\n\t\t(scale = 0).if {\n\t\t\tself.integerPart.LargeInteger.uncheckedPrintString(10) ++ 'D'\n\t\t} {\n\t\t\t'%%.%D'.format(\n\t\t\t\t[\n\t\t\t\t\tself.isNegative.if {\n\t\t\t\t\t\t'-'\n\t\t\t\t\t} {\n\t\t\t\t\t\t''\n\t\t\t\t\t},\n\t\t\t\t\tfraction\n\t\t\t\t\t.integerPart\n\t\t\t\t\t.abs\n\t\t\t\t\t.uncheckedPrintString(10),\n\t\t\t\t\t(fraction.fractionalPart.abs * (10L ^ scale))\n\t\t\t\t\t.round\n\t\t\t\t\t.uncheckedPrintString(10)\n\t\t\t\t\t.padLeft([scale], '0')\n\t\t\t\t]\n\t\t\t)\n\t\t}\n\n\t}",
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
    return _uncheckedDecimal_2(
      _raisedToInteger_2(_fraction_1(_self), _aNumber),
      _scale_1(_self),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tuncheckedDecimal(\n\t\t\tself.fraction.raisedToInteger(aNumber),\n\t\t\tself.scale\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "realDigits",
  ["self", "base", "size"],
  sl.annotateFunction(function (_self, _base, _size) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _base, _size";
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
        return [_numberSign_2(_size, [0]), 1];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        let _x = _abs_1(_self);
        let _l = _floor_1(_log_2(_fraction_1(_x), _base));
        let _a = _truncate_1(_floor_1(_x));
        let _b = _integerDigits_2(_a, _base);
        let _c = _asterisk_2(_hyphenMinus_2(_x, _a), _base);
        let _d = _truncate_1(
          _floor_1(_nestList_3(
            sl.annotateFunction(function (_x) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _x";
                throw new Error(errorMessage);
              } /* Statements */
              let _d = _floor_1(_x);
              return _asterisk_2(_hyphenMinus_2(_x, _d), _base);
            }, ["x"]),
            _c,
            _hyphenMinus_2(_hyphenMinus_2(_size, _size_1(_b)), 1),
          )),
        );
        return [_plusSignPlusSign_2(_b, _d), _plusSign_2(_l, 1)];
      }, []),
    );
  }, ["self", "base", "size"]),
  "{ :self :base :size |\n\t\tself.isZero.if {\n\t\t\t[size # [0], 1]\n\t\t} {\n\t\t\tlet x = self.abs;\n\t\t\tlet l = x.fraction.log(base).floor;\n\t\t\tlet a = x.floor.truncate;\n\t\t\tlet b = a.integerDigits(base);\n\t\t\tlet c = (x - a) * base;\n\t\t\tlet d = { :x |\n\t\t\t\tlet d = x.floor;\n\t\t\t\t(x - d) * base\n\t\t\t}.nestList(\n\t\t\t\tc, size - b.size - 1\n\t\t\t).floor.truncate;\n\t\t\t[b ++ d, l + 1]\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "realDigits",
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
        return [_numberSign_2(_precision_1(_self), [0]), 1];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        let _l = _floor_1(_log_2(_fraction_1(_self), 10));
        let _u = _integerDigits_1(_unscaledInteger_1(_self));
        return [_u, _plusSign_2(_l, 1)];
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isZero.if {\n\t\t\t[self.precision # [0], 1]\n\t\t} {\n\t\t\tlet l = self.fraction.log(10).floor;\n\t\t\tlet u = self.unscaledInteger.integerDigits;\n\t\t\t[u, l + 1]\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "round",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Decimal_2(_round_1(_fraction_1(_self)), _scale_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tDecimal(self.fraction.round, self.scale)\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "SmallInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _SmallInteger_1(_LargeInteger_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.LargeInteger.SmallInteger\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "SmallFloat",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _SmallFloat_1(_fraction_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.fraction.SmallFloat\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "Float",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _SmallFloat_1(_fraction_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.fraction.SmallFloat\n\t}",
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
    return _uncheckedDecimal_2(_square_1(_fraction_1(_self)), _scale_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tuncheckedDecimal(\n\t\t\tself.fraction.square,\n\t\t\tself.scale\n\t\t)\n\t}",
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
  "truncateScale",
  ["self", "k", "mode/1"],
  sl.annotateFunction(function (_self, _k, _mode_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _k, _mode_1";
      throw new Error(errorMessage);
    } /* Statements */
    let _s = _scale_1(_self);
    return _if_3(
      _lessThanSign_2(_k, _s),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        let _f = _fraction_1(_self);
        let _n = _numerator_1(_f);
        let _d = _denominator_1(_f);
        let _i = _asterisk_2(_n, _solidus_2(_circumflexAccent_2(10n, _s), _d));
        let _j = _circumflexAccent_2(10n, _hyphenMinus_2(_s, _k));
        return _Decimal_2(
          _Fraction_2(
            _mode_1(_solidus_2(_i, _j)),
            _circumflexAccent_2(10n, _k),
          ),
          _k,
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_k, _s),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _self;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "truncateScale");
          }, []),
        );
      }, []),
    );
  }, ["self", "k", "mode/1"]),
  "{ :self :k :mode/1 |\n\t\tlet s = self.scale;\n\t\t(k < s).if {\n\t\t\tlet f = self.fraction;\n\t\t\tlet n = f.numerator;\n\t\t\tlet d = f.denominator;\n\t\t\tlet i = n * ((10L ^ s) / d);\n\t\t\tlet j = 10L ^ (s - k);\n\t\t\tDecimal(\n\t\t\t\tFraction(\n\t\t\t\t\tmode(i / j),\n\t\t\t\t\t10L ^ k\n\t\t\t\t),\n\t\t\t\tk\n\t\t\t)\n\t\t} {\n\t\t\t(k = s).if {\n\t\t\t\tself\n\t\t\t} {\n\t\t\t\tself.error('truncateScale')\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "truncateScale",
  ["self", "k"],
  sl.annotateFunction(function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _truncateScale_3(_self, _k, _truncate_1);
  }, ["self", "k"]),
  "{ :self :k |\n\t\tself.truncateScale(k, truncate/1)\n\t}",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "unscaledInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Integer_1(
      _asterisk_2(
        _fraction_1(_self),
        _circumflexAccent_2(10n, _scale_1(_self)),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.fraction * (10L ^ self.scale)).Integer\n\t}",
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
    return _Decimal_2(_Fraction_2(0n, 1n), 0);
  }, ["self"]),
  "{ :self |\n\t\t0D\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Decimal",
  "adaptToDecimalAndApply",
  ["self", "receiver", "aBlock/2"],
  sl.annotateFunction(function (_self, _receiver, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _receiver, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_receiver, _Decimal_2(_self, _scale_1(_receiver)));
  }, ["self", "receiver", "aBlock/2"]),
  "{ :self :receiver :aBlock/2 |\n\t\taBlock(\n\t\t\treceiver,\n\t\t\tDecimal(self, receiver.scale)\n\t\t)\n\t}",
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
    return _uncheckedDecimal_2(_decimalFraction_2(_self, _scale), _scale);
  }, ["self", "scale"]),
  "{ :self :scale |\n\t\tuncheckedDecimal(\n\t\t\tself.decimalFraction(scale),\n\t\t\tscale\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Decimal",
  "uncheckedDecimal",
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
  ["self", "receiver", "aBlock/2"],
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
        return _aBlock_2(_receiver, _Decimal_2(_self, 0));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_SmallFloat_1(_receiver), _self);
      }, []),
    );
  }, ["self", "receiver", "aBlock/2"]),
  "{ :self :receiver :aBlock/2 |\n\t\tself.isInteger.if {\n\t\t\taBlock(\n\t\t\t\treceiver,\n\t\t\t\tDecimal(self, 0)\n\t\t\t)\n\n\t\t} {\n\t\t\taBlock(\n\t\t\t\tSmallFloat(receiver),\n\t\t\t\tself\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Decimal",
  "Decimal",
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
        return _uncheckedDecimal_2(_Fraction_2(_self, 1), _scale);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Decimal_2(_decimalFraction_2(_self, _scale), _scale);
      }, []),
    );
  }, ["self", "scale"]),
  "{ :self :scale |\n\t\tself.isInteger.if {\n\t\t\tuncheckedDecimal(Fraction(self, 1), scale)\n\t\t} {\n\t\t\tDecimal(\n\t\t\t\tself.decimalFraction(scale),\n\t\t\t\tscale\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Decimal",
  "Decimal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Decimal_2(_self, 0);
  }, ["self"]),
  "{ :self |\n\t\tDecimal(self, 0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "LargeInteger",
  "Decimal",
  "adaptToDecimalAndApply",
  ["self", "aNumber", "aBlock/2"],
  sl.annotateFunction(function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_aNumber, _Decimal_2(_self, 0));
  }, ["self", "aNumber", "aBlock/2"]),
  "{ :self :aNumber :aBlock/2 |\n\t\taBlock(aNumber, Decimal(self, 0))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "LargeInteger",
  "Decimal",
  "Decimal",
  ["self", "scale"],
  sl.annotateFunction(function (_self, _scale) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _scale";
      throw new Error(errorMessage);
    } /* Statements */
    return _uncheckedDecimal_2(_Fraction_2(_self, 1n), _scale);
  }, ["self", "scale"]),
  "{ :self :scale |\n\t\tuncheckedDecimal(Fraction(self, 1L), scale)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "LargeInteger",
  "Decimal",
  "largeIntegerToDecimal",
  ["self", "scale"],
  sl.annotateFunction(function (_self, _scale) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _scale";
      throw new Error(errorMessage);
    } /* Statements */
    return _uncheckedDecimal_2(_Fraction_2(_self, 1n), _scale);
  }, ["self", "scale"]),
  "{ :self :scale |\n\t\tuncheckedDecimal(Fraction(self, 1L), scale)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "LargeInteger",
  "Decimal",
  "Decimal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Decimal_2(_self, 0);
  }, ["self"]),
  "{ :self |\n\t\tDecimal(self, 0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "LargeInteger",
  "Decimal",
  "largeIntegerToDecimal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Decimal_2(_self, 0);
  }, ["self"]),
  "{ :self |\n\t\tDecimal(self, 0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Decimal",
  "adaptToDecimalAndApply",
  ["self", "operand", "aBlock/2"],
  sl.annotateFunction(function (_self, _operand, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _operand, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_operand, _each);
      }, ["each"]),
    );
  }, ["self", "operand", "aBlock/2"]),
  "{ :self :operand :aBlock/2 |\n\t\tself.collect { :each |\n\t\t\taBlock(operand, each)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Decimal",
  "truncateScale",
  ["self", "k"],
  sl.annotateFunction(function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _truncateScale_2(_each, _k);
      }, ["each"]),
    );
  }, ["self", "k"]),
  "{ :self :k |\n\t\tself.collect { :each |\n\t\t\teach.truncateScale(k)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Decimal",
  "parseDecimal",
  ["self", "elseClause/0"],
  sl.annotateFunction(function (_self, _elseClause_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elseClause_0";
      throw new Error(errorMessage);
    } /* Statements */
    let _parts = _splitBy_2(_self, "D");
    return _if_3(
      _equalsSign_2(_size_1(_parts), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _parseDecimalWithScale_3(
          _at_2(_parts, 1),
          _if_3(
            _isEmpty_1(_at_2(_parts, 2)),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return null;
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _parseDecimalInteger_2(
                _at_2(_parts, 2),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _error_2(_self, "parseDecimal: invalid scale");
                }, []),
              );
            }, []),
          ),
          _elseClause_0,
        );
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
  }, ["self", "elseClause/0"]),
  "{ :self :elseClause/0 |\n\t\tlet parts = self.splitBy('D');\n\t\t(parts.size = 2).if {\n\t\t\tparseDecimalWithScale(\n\t\t\t\tparts[1],\n\t\t\t\tparts[2].isEmpty.if {\n\t\t\t\t\tnil\n\t\t\t\t} {\n\t\t\t\t\tparts[2].parseDecimalInteger {\n\t\t\t\t\t\tself.error('parseDecimal: invalid scale')\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\telseClause/0\n\t\t\t)\n\t\t} {\n\t\t\telseClause()\n\t\t}\n\t}",
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
    return _parseDecimal_2(
      _self,
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
  "{ :self |\n\t\tself.parseDecimal {\n\t\t\tself.error('String>>parseDecimal')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Decimal",
  "parseDecimalWithScale",
  ["self", "scaleOrNil", "elseClause/0"],
  sl.annotateFunction(function (_self, _scaleOrNil, _elseClause_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _scaleOrNil, _elseClause_0";
      throw new Error(errorMessage);
    } /* Statements */
    let _parts = _splitBy_2(_self, ".");
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
            return _uncheckedDecimal_2(
              _Fraction_2(
                _parseLargeInteger_2(_at_2(_parts, 1), _elseClause_0),
                1,
              ),
              _ifNil_2(
                _scaleOrNil,
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return 0;
                }, []),
              ),
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
            } /* Statements */
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
            let _f = _copySign_2(
              _sign,
              _parseLargeInteger_2(_at_2(_parts, 2), _elseClause_0),
            );
            let _k = _size_1(_at_2(_parts, 2));
            _ifNotNil_2(
              _scaleOrNil,
              sl.annotateFunction(function (_x) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _x";
                  throw new Error(errorMessage);
                } /* Statements */
                return _if_3(
                  _greaterThanSignEqualsSign_2(_x, _k),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _f = _asterisk_2(
                      _f,
                      _circumflexAccent_2(10n, _hyphenMinus_2(_x, _k)),
                    );
                    return _k = _x;
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _error_2(_self, "parseDecimal: invalid scale");
                  }, []),
                );
              }, ["x"]),
            );
            return _uncheckedDecimal_2(
              _plusSign_2(_i, _Fraction_2(_f, _circumflexAccent_2(10n, _k))),
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
  }, ["self", "scaleOrNil", "elseClause/0"]),
  "{ :self :scaleOrNil :elseClause/0 |\n\t\tlet parts = self.splitBy('.');\n\t\tparts.size.caseOf(\n\t\t\t[\n\t\t\t\t1 -> {\n\t\t\t\t\tuncheckedDecimal(\n\t\t\t\t\t\tFraction(\n\t\t\t\t\t\t\tparts[1].parseLargeInteger(elseClause/0),\n\t\t\t\t\t\t\t1\n\t\t\t\t\t\t),\n\t\t\t\t\t\tscaleOrNil.ifNil { 0 }\n\t\t\t\t\t)\n\t\t\t\t},\n\t\t\t\t2 -> {\n\t\t\t\t\tlet sign = self.beginsWith('-').if { -1 } { 1 };\n\t\t\t\t\tlet i = parts[1].parseLargeInteger(elseClause/0);\n\t\t\t\t\tlet f = sign.copySign(parts[2].parseLargeInteger(elseClause/0));\n\t\t\t\t\tlet k = parts[2].size;\n\t\t\t\t\tscaleOrNil.ifNotNil { :x |\n\t\t\t\t\t\t(x >= k).if {\n\t\t\t\t\t\t\tf := f * (10L ^ (x - k));\n\t\t\t\t\t\t\tk := x\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\tself.error('parseDecimal: invalid scale')\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t\tuncheckedDecimal(\n\t\t\t\t\t\ti + Fraction(f, 10L ^ k),\n\t\t\t\t\t\tk\n\t\t\t\t\t)\n\t\t\t\t}\n\t\t\t]\n\t\t) {\n\t\t\telseClause()\n\t\t}\n\t}",
);
