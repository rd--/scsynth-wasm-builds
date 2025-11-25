sl.addTrait("SymbolicObject", "SymbolicExpression");

sl.addMethodToExistingTrait(
  "SymbolicObject",
  "SymbolicExpression",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("=", [_self, _anObject]);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t'='.symbolicPrimitive([self, anObject])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicObject",
  "SymbolicExpression",
  "tilde",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("~", [_self, _anObject]);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t'~'.symbolicPrimitive([self, anObject])\n\t}",
);

sl.addTrait("SymbolicBoolean", "SymbolicExpression");

sl.addMethodToExistingTrait(
  "SymbolicBoolean",
  "SymbolicExpression",
  "ampersand",
  ["self", "aBlock:/0"],
  sl.annotateFunction(function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("and", [_self, _aBlock_0()]);
  }, ["self", "aBlock:/0"]),
  "{ :self :aBlock:/0 |\n\t\t'and'.symbolicPrimitive([self, aBlock()])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicBoolean",
  "SymbolicExpression",
  "verticalLine",
  ["self", "aBlock:/0"],
  sl.annotateFunction(function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("or", [_self, _aBlock_0()]);
  }, ["self", "aBlock:/0"]),
  "{ :self :aBlock:/0 |\n\t\t'or'.symbolicPrimitive([self, aBlock()])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicBoolean",
  "SymbolicExpression",
  "if",
  ["self", "whenTrue:/0", "whenFalse:/0"],
  sl.annotateFunction(function (_self, _whenTrue_0, _whenFalse_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _whenTrue_0, _whenFalse_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("if", [_self, _whenTrue_0(), _whenFalse_0()]);
  }, ["self", "whenTrue:/0", "whenFalse:/0"]),
  "{ :self :whenTrue:/0 :whenFalse:/0 |\n\t\t'if'.symbolicPrimitive([self, whenTrue(), whenFalse()])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicBoolean",
  "SymbolicExpression",
  "not",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("not", [_self]);
  }, ["self"]),
  "{ :self |\n\t\t'not'.symbolicPrimitive([self])\n\t}",
);

sl.addTrait("SymbolicMagnitude", "SymbolicExpression");

sl.addMethodToExistingTrait(
  "SymbolicMagnitude",
  "SymbolicExpression",
  "lessThanSign",
  ["self", "aMagnitude"],
  sl.annotateFunction(function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("<", [_self, _aMagnitude]);
  }, ["self", "aMagnitude"]),
  "{ :self :aMagnitude |\n\t\t'<'.symbolicPrimitive([self, aMagnitude])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicMagnitude",
  "SymbolicExpression",
  "lessThanSignEqualsSign",
  ["self", "aMagnitude"],
  sl.annotateFunction(function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("<=", [_self, _aMagnitude]);
  }, ["self", "aMagnitude"]),
  "{ :self :aMagnitude |\n\t\t'<='.symbolicPrimitive([self, aMagnitude])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicMagnitude",
  "SymbolicExpression",
  "greaterThanSign",
  ["self", "aMagnitude"],
  sl.annotateFunction(function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2(">", [_self, _aMagnitude]);
  }, ["self", "aMagnitude"]),
  "{ :self :aMagnitude |\n\t\t'>'.symbolicPrimitive([self, aMagnitude])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicMagnitude",
  "SymbolicExpression",
  "greaterThanSignEqualsSign",
  ["self", "aMagnitude"],
  sl.annotateFunction(function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2(">=", [_self, _aMagnitude]);
  }, ["self", "aMagnitude"]),
  "{ :self :aMagnitude |\n\t\t'>='.symbolicPrimitive([self, aMagnitude])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicMagnitude",
  "SymbolicExpression",
  "max",
  ["self", "aMagnitude"],
  sl.annotateFunction(function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("max", [_self, _aMagnitude]);
  }, ["self", "aMagnitude"]),
  "{ :self :aMagnitude |\n\t\t'max'.symbolicPrimitive([self, aMagnitude])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicMagnitude",
  "SymbolicExpression",
  "min",
  ["self", "aMagnitude"],
  sl.annotateFunction(function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("min", [_self, _aMagnitude]);
  }, ["self", "aMagnitude"]),
  "{ :self :aMagnitude |\n\t\t'min'.symbolicPrimitive([self, aMagnitude])\n\t}",
);

sl.addTrait("SymbolicNumber", "SymbolicExpression");

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "plusSign",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("+", [_self, _operand]);
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\t'+'.symbolicPrimitive([self, operand])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "hyphenMinus",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("-", [_self, _operand]);
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\t'-'.symbolicPrimitive([self, operand])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "asterisk",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("*", [_self, _operand]);
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\t'*'.symbolicPrimitive([self, operand])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "solidus",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("/", [_self, _operand]);
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\t'/'.symbolicPrimitive([self, operand])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "percentSign",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("%", [_self, _operand]);
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\t'%'.symbolicPrimitive([self, operand])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "circumflexAccent",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("^", [_self, _operand]);
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\t'^'.symbolicPrimitive([self, operand])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "abs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("abs", [_self]);
  }, ["self"]),
  "{ :self |\n\t\t'abs'.symbolicPrimitive([self])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "adaptToNumberAndApply",
  ["self", "receiver", "aBlock:/2"],
  sl.annotateFunction(function (_self, _receiver, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _receiver, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _name = _unqualifiedName_1(_aBlock_2);
    /* Statements */
    return _SymbolicExpression_2(
      _questionMark_2(
        _splOperatorNameToken_1(_name),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _name;
        }, []),
      ),
      [_receiver, _self],
    );
  }, ["self", "receiver", "aBlock:/2"]),
  "{ :self :receiver :aBlock:/2 |\n\t\tlet name = aBlock:/2.unqualifiedName;\n\t\tSymbolicExpression(\n\t\t\tname.splOperatorNameToken ? { name },\n\t\t\t[receiver, self]\n\t\t)\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "conjugate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("conjugate", [_self]);
  }, ["self"]),
  "{ :self |\n\t\t'conjugate'.symbolicPrimitive([self])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "cos",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("cos", [_self]);
  }, ["self"]),
  "{ :self |\n\t\t'cos'.symbolicPrimitive([self])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "cot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("cot", [_self]);
  }, ["self"]),
  "{ :self |\n\t\t'cot'.symbolicPrimitive([self])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "csc",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("csc", [_self]);
  }, ["self"]),
  "{ :self |\n\t\t'csc'.symbolicPrimitive([self])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "exp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("exp", [_self]);
  }, ["self"]),
  "{ :self |\n\t\t'exp'.symbolicPrimitive([self])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "gamma",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("gamma", [_self]);
  }, ["self"]),
  "{ :self |\n\t\t'gamma'.symbolicPrimitive([self])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "isInteger",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  }, ["unused"]),
  "{ :unused |\n\t\tfalse\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "log",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("log", [_self]);
  }, ["self"]),
  "{ :self |\n\t\t'log'.symbolicPrimitive([self])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "log2",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("log2", [_self]);
  }, ["self"]),
  "{ :self |\n\t\t'log2'.symbolicPrimitive([self])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "log10",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("log10", [_self]);
  }, ["self"]),
  "{ :self |\n\t\t'log10'.symbolicPrimitive([self])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "one",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return 1;
  }, ["unused"]),
  "{ :unused |\n\t\t1\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "quotient",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("quotient", [_self, _operand]);
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\t'quotient'.symbolicPrimitive([self, operand])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "remainder",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("remainder", [_self, _operand]);
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\t'remainder'.symbolicPrimitive([self, operand])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "sin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("sin", [_self]);
  }, ["self"]),
  "{ :self |\n\t\t'sin'.symbolicPrimitive([self])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "sqrt",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("sqrt", [_self]);
  }, ["self"]),
  "{ :self |\n\t\t'sqrt'.symbolicPrimitive([self])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "tan",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("tan", [_self]);
  }, ["self"]),
  "{ :self |\n\t\t'tan'.symbolicPrimitive([self])\n\t}",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "truncate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("truncate", [_self]);
  }, ["self"]),
  "{ :self |\n\t\t'truncate'.symbolicPrimitive([self])\n\t}",
);

sl.addType(
  false,
  "Symbol",
  "SymbolicExpression",
  [
    "Object",
    "Storeable",
    "Number",
    "Integer",
    "SymbolicObject",
    "SymbolicBoolean",
    "SymbolicMagnitude",
    "SymbolicNumber",
  ],
  ["name"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Symbol",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "Symbol",
);

sl.copyTraitMethodsToType(
  "Number",
  "Symbol",
);

sl.copyTraitMethodsToType(
  "Integer",
  "Symbol",
);

sl.copyTraitMethodsToType(
  "SymbolicObject",
  "Symbol",
);

sl.copyTraitMethodsToType(
  "SymbolicBoolean",
  "Symbol",
);

sl.copyTraitMethodsToType(
  "SymbolicMagnitude",
  "Symbol",
);

sl.copyTraitMethodsToType(
  "SymbolicNumber",
  "Symbol",
);

sl.addMethodToExistingType(
  "Symbol",
  "SymbolicExpression",
  "isEqualSymbolicExpression",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSignEqualsSign_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself == anObject\n\t}",
);

sl.addMethodToExistingType(
  "Symbol",
  "SymbolicExpression",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _name_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.name\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "SymbolicExpression",
  "symbolDictionary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "symbolDictionary",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Record_0();
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('symbolDictionary') {\n\t\t\t(:)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SymbolicExpression",
  "Symbol",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsentPut_3(
      _symbolDictionary_1(_system),
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_2(_newSymbol_0(), _self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tsystem.symbolDictionary.atIfAbsentPut(self) {\n\t\t\tnewSymbol().initializeSlots(self)\n\t\t}\n\t}",
);

sl.addType(
  false,
  "SymbolicExpression",
  "SymbolicExpression",
  [
    "Object",
    "Storeable",
    "Number",
    "SymbolicObject",
    "SymbolicBoolean",
    "SymbolicMagnitude",
    "SymbolicNumber",
    "Iterable",
  ],
  ["operator", "operands"],
);

sl.copyTraitMethodsToType(
  "Object",
  "SymbolicExpression",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "SymbolicExpression",
);

sl.copyTraitMethodsToType(
  "Number",
  "SymbolicExpression",
);

sl.copyTraitMethodsToType(
  "SymbolicObject",
  "SymbolicExpression",
);

sl.copyTraitMethodsToType(
  "SymbolicBoolean",
  "SymbolicExpression",
);

sl.copyTraitMethodsToType(
  "SymbolicMagnitude",
  "SymbolicExpression",
);

sl.copyTraitMethodsToType(
  "SymbolicNumber",
  "SymbolicExpression",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "SymbolicExpression",
);

sl.addMethodToExistingType(
  "SymbolicExpression",
  "SymbolicExpression",
  "asTree",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Tree_2(
      _operator_1(_self),
      _collect_2(
        _operands_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _isSymbolicExpression_1(_each),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _asTree_1(_each);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _Tree_2(_each, []);
            }, []),
          );
        }, ["each"]),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tTree(\n\t\t\tself.operator,\n\t\t\tself.operands.collect { :each |\n\t\t\t\teach.isSymbolicExpression.if {\n\t\t\t\t\teach.asTree\n\t\t\t\t} {\n\t\t\t\t\tTree(each, [])\n\t\t\t\t}\n\t\t\t}\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "SymbolicExpression",
  "SymbolicExpression",
  "commonSubexpressions",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _all = _UnsortedSet_0();
    let _common = _UnsortedSet_0();
    /* Statements */
    _comparator_2(_all, _aBlock_2);
    _comparator_2(_common, _aBlock_2);
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _isSymbolicExpression_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _includes_2(_all, _each),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _uncheckedInclude_2(_common, _each);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _uncheckedInclude_2(_all, _each);
              }, []),
            );
          }, []),
        );
      }, ["each"]),
    );
    return _asList_1(_common);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 |\n\t\tlet all = UnsortedSet();\n\t\tlet common = UnsortedSet();\n\t\tall.comparator := aBlock:/2;\n\t\tcommon.comparator := aBlock:/2;\n\t\tself.do { :each |\n\t\t\teach.isSymbolicExpression.ifTrue {\n\t\t\t\tall.includes(each).if {\n\t\t\t\t\tcommon.uncheckedInclude(each)\n\t\t\t\t} {\n\t\t\t\t\tall.uncheckedInclude(each)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tcommon.asList\n\t}",
);

sl.addMethodToExistingType(
  "SymbolicExpression",
  "SymbolicExpression",
  "do",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    _aBlock_1(_self);
    _if_3(
      _isSymbolicExpression_1(_operator_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(_operator_1(_self), _aBlock_1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_operator_1(_self));
      }, []),
    );
    return _do_2(
      _operands_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isSymbolicExpression_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _do_2(_each, _aBlock_1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_1(_each);
          }, []),
        );
      }, ["each"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\taBlock(self);\n\t\tself.operator.isSymbolicExpression.if {\n\t\t\tself.operator.do(aBlock:/1)\n\t\t} {\n\t\t\taBlock(self.operator)\n\t\t};\n\t\tself.operands.do { :each |\n\t\t\teach.isSymbolicExpression.if {\n\t\t\t\teach.do(aBlock:/1)\n\t\t\t} {\n\t\t\t\taBlock(each)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "SymbolicExpression",
  "SymbolicExpression",
  "isEqualSymbolicExpression",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isSymbolicExpression_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _isEqualSymbolicExpression_2(
            _operator_1(_self),
            _operator_1(_anObject),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _m = _size_1(_operands_1(_self));
            let _n = _size_1(_operands_1(_anObject));
            /* Statements */
            return _ampersand_2(
              _equalsSign_2(_m, _n),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _allSatisfy_2(
                  _to_2(1, _m),
                  sl.annotateFunction(function (_i) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _i";
                      throw new Error(errorMessage);
                    } /* Temporaries */
                    let _p = _at_2(_operands_1(_self), _i);
                    let _q = _at_2(_operands_1(_anObject), _i);
                    /* Statements */
                    return _isEqualSymbolicExpression_2(_p, _q);
                  }, ["i"]),
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.isSymbolicExpression & {\n\t\t\tself.operator.isEqualSymbolicExpression(anObject.operator) & {\n\t\t\t\tlet m = self.operands.size;\n\t\t\t\tlet n = anObject.operands.size;\n\t\t\t\tm = n & {\n\t\t\t\t\t1.to(m).allSatisfy { :i |\n\t\t\t\t\t\tlet p = self.operands[i];\n\t\t\t\t\t\tlet q = anObject.operands[i];\n\t\t\t\t\t\tp.isEqualSymbolicExpression(q)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "SymbolicExpression",
  "SymbolicExpression",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_operands_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _format_2("(%)", [_printString_1(_operator_1(_self))]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _format_2("(% %)", [
          _printString_1(_operator_1(_self)),
          _unwords_1(
            _collect_2(
              _operands_1(_self),
              sl.annotateFunction(function (_each) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _each";
                  throw new Error(errorMessage);
                } /* Statements */
                return _printString_1(
                  _if_3(
                    _isSmallFloat_1(_each),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _recogniseSymbolicExpression_1(_each);
                    }, []),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _each;
                    }, []),
                  ),
                );
              }, ["each"]),
            ),
          ),
        ]);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.operands.isEmpty.if {\n\t\t\t'(%)'.format([self.operator.printString])\n\t\t} {\n\t\t\t'(% %)'.format(\n\t\t\t\t[\n\t\t\t\t\tself.operator.printString,\n\t\t\t\t\tself.operands.collect { :each |\n\t\t\t\t\t\teach.isSmallFloat.if {\n\t\t\t\t\t\t\teach.recogniseSymbolicExpression\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\teach\n\t\t\t\t\t\t}.printString\n\t\t\t\t\t}.unwords\n\t\t\t\t]\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SymbolicExpression",
  "SymbolicExpression",
  "SymbolicExpression",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newSymbolicExpression_0(), _self, _aList);
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\tnewSymbolicExpression().initializeSlots(self, aList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Symbol",
  "SymbolicExpression",
  "SymbolicExpression",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newSymbolicExpression_0(), _self, _aList);
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\tnewSymbolicExpression().initializeSlots(self, aList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SymbolicExpression",
  "SymbolicExpression",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _SymbolicExpression_2(_Symbol_1(_self), _aList);
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\tSymbolicExpression(self.Symbol, aList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SymbolicExpression",
  "symbolicBinaryPrimitive",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_i, _j) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _i, _j";
        throw new Error(errorMessage);
      } /* Statements */
      return _symbolicPrimitive_2(_self, [_i, _j]);
    }, ["i", "j"]);
  }, ["self"]),
  "{ :self |\n\t\t{ :i :j |\n\t\t\tself.symbolicPrimitive([i, j])\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SymbolicExpression",
  "symbolicPrimitive",
  ["self", "operands"],
  sl.annotateFunction(function (_self, _operands) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operands";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _anySatisfy_2(_operands, _isList_1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _multiChannelExpand_1(_operands),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _SymbolicExpression_2(_self, _each);
          }, ["each"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _SymbolicExpression_2(_self, _operands);
      }, []),
    );
  }, ["self", "operands"]),
  "{ :self :operands |\n\t\toperands.anySatisfy(isList:/1).if {\n\t\t\toperands.multiChannelExpand.collect { :each |\n\t\t\t\tSymbolicExpression(self, each)\n\t\t\t}\n\t\t} {\n\t\t\tSymbolicExpression(self, operands)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SymbolicExpression",
  "symbolicUnaryPrimitive",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        throw new Error(errorMessage);
      } /* Statements */
      return _symbolicPrimitive_2(_self, [_i]);
    }, ["i"]);
  }, ["self"]),
  "{ :self |\n\t\t{ :i |\n\t\t\tself.symbolicPrimitive([i])\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "SymbolicExpression",
  "asSymbolicExpression",
  ["self", "parameterNames"],
  sl.annotateFunction(function (_self, _parameterNames) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _parameterNames";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_numArgs_1(_self), _size_1(_parameterNames)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _apply_2(_self, _collect_2(_parameterNames, _Symbol_1));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "asSymbolicExpression: arity error");
      }, []),
    );
  }, ["self", "parameterNames"]),
  "{ :self :parameterNames |\n\t\t(self.numArgs = parameterNames.size).if {\n\t\t\tself.apply(parameterNames.collect(Symbol:/1))\n\t\t} {\n\t\t\tself.error('asSymbolicExpression: arity error')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "SymbolicExpression",
  "asSymbolicExpression",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asSymbolicExpression_2(
      _self,
      _take_2(_namedAlphabet_1("greek"), _numArgs_1(_self)),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.asSymbolicExpression(\n\t\t\t'greek'.namedAlphabet.take(self.numArgs)\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SymbolicExpression",
  "isEqualSymbolicExpression",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSignEqualsSign_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself == anObject\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SymbolicExpression",
  "recogniseSymbolicExpression",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_3(
      _self,
      [
        _hyphenMinusGreaterThanSign_2(
          _pi_1(1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _Symbol_1("π");
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          _pi_1(2),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _asterisk_2(2, _Symbol_1("π"));
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.caseOf([\n\t\t\t1.pi -> { Symbol('π') },\n\t\t\t2.pi -> { 2 * Symbol('π') }\n\t\t]) {\n\t\t\tself\n\t\t}\n\t}",
);
