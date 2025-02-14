sl.addTrait("SymbolicObject", "SymbolicExpression");

sl.addTraitMethod(
  "SymbolicObject",
  "SymbolicExpression",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _SymbolicExpression_2("=", [_self, _anObject]);
  },
  "{ :self :anObject |\n\t\tSymbolicExpression('=', [self, anObject])\n\t}",
);

sl.addTraitMethod(
  "SymbolicObject",
  "SymbolicExpression",
  "tilde",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _SymbolicExpression_2("~", [_self, _anObject]);
  },
  "{ :self :anObject |\n\t\tSymbolicExpression('~', [self, anObject])\n\t}",
);

sl.addTrait("SymbolicBoolean", "SymbolicExpression");

sl.addTraitMethod(
  "SymbolicBoolean",
  "SymbolicExpression",
  "ampersand",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _SymbolicExpression_2("and", [_self, _aBlock_0()]);
  },
  "{ :self :aBlock:/0 |\n\t\tSymbolicExpression('and', [self, aBlock()])\n\t}",
);

sl.addTraitMethod(
  "SymbolicBoolean",
  "SymbolicExpression",
  "verticalLine",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _SymbolicExpression_2("or", [_self, _aBlock_0()]);
  },
  "{ :self :aBlock:/0 |\n\t\tSymbolicExpression('or', [self, aBlock()])\n\t}",
);

sl.addTraitMethod(
  "SymbolicBoolean",
  "SymbolicExpression",
  "if",
  ["self", "whenTrue:/0", "whenFalse:/0"],
  function (_self, _whenTrue_0, _whenFalse_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _whenTrue_0, _whenFalse_0";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _SymbolicExpression_2("if", [_self, _whenTrue_0(), _whenFalse_0()]);
  },
  "{ :self :whenTrue:/0 :whenFalse:/0 |\n\t\tSymbolicExpression('if', [self, whenTrue(), whenFalse()])\n\t}",
);

sl.addTraitMethod(
  "SymbolicBoolean",
  "SymbolicExpression",
  "not",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _SymbolicExpression_2("not", [_self]);
  },
  "{ :self |\n\t\tSymbolicExpression('not', [self])\n\t}",
);

sl.addTrait("SymbolicMagnitude", "SymbolicExpression");

sl.addTraitMethod(
  "SymbolicMagnitude",
  "SymbolicExpression",
  "lessThanSign",
  ["self", "aMagnitude"],
  function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _SymbolicExpression_2("<", [_self, _aMagnitude]);
  },
  "{ :self :aMagnitude |\n\t\tSymbolicExpression('<', [self, aMagnitude])\n\t}",
);

sl.addTraitMethod(
  "SymbolicMagnitude",
  "SymbolicExpression",
  "lessThanSignEqualsSign",
  ["self", "aMagnitude"],
  function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _SymbolicExpression_2("<=", [_self, _aMagnitude]);
  },
  "{ :self :aMagnitude |\n\t\tSymbolicExpression('<=', [self, aMagnitude])\n\t}",
);

sl.addTraitMethod(
  "SymbolicMagnitude",
  "SymbolicExpression",
  "greaterThanSign",
  ["self", "aMagnitude"],
  function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _SymbolicExpression_2(">", [_self, _aMagnitude]);
  },
  "{ :self :aMagnitude |\n\t\tSymbolicExpression('>', [self, aMagnitude])\n\t}",
);

sl.addTraitMethod(
  "SymbolicMagnitude",
  "SymbolicExpression",
  "greaterThanSignEqualsSign",
  ["self", "aMagnitude"],
  function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _SymbolicExpression_2(">=", [_self, _aMagnitude]);
  },
  "{ :self :aMagnitude |\n\t\tSymbolicExpression('>=', [self, aMagnitude])\n\t}",
);

sl.addTrait("SymbolicNumber", "SymbolicExpression");

sl.addTraitMethod(
  "SymbolicNumber",
  "SymbolicExpression",
  "plusSign",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _SymbolicExpression_2("+", [_self, _operand]);
  },
  "{ :self :operand |\n\t\tSymbolicExpression('+', [self, operand])\n\t}",
);

sl.addTraitMethod(
  "SymbolicNumber",
  "SymbolicExpression",
  "hyphenMinus",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _SymbolicExpression_2("-", [_self, _operand]);
  },
  "{ :self :operand |\n\t\tSymbolicExpression('-', [self, operand])\n\t}",
);

sl.addTraitMethod(
  "SymbolicNumber",
  "SymbolicExpression",
  "asterisk",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _SymbolicExpression_2("*", [_self, _operand]);
  },
  "{ :self :operand |\n\t\tSymbolicExpression('*', [self, operand])\n\t}",
);

sl.addTraitMethod(
  "SymbolicNumber",
  "SymbolicExpression",
  "solidus",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _SymbolicExpression_2("/", [_self, _operand]);
  },
  "{ :self :operand |\n\t\tSymbolicExpression('/', [self, operand])\n\t}",
);

sl.addTraitMethod(
  "SymbolicNumber",
  "SymbolicExpression",
  "circumflexAccent",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _SymbolicExpression_2("^", [_self, _operand]);
  },
  "{ :self :operand |\n\t\tSymbolicExpression('^', [self, operand])\n\t}",
);

sl.addTraitMethod(
  "SymbolicNumber",
  "SymbolicExpression",
  "abs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _SymbolicExpression_2("abs", [_self]);
  },
  "{ :self |\n\t\tSymbolicExpression('abs', [self])\n\t}",
);

sl.addTraitMethod(
  "SymbolicNumber",
  "SymbolicExpression",
  "adaptToNumberAndApply",
  ["self", "receiver", "aBlock:/2"],
  function (_self, _receiver, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _receiver, _aBlock_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _name = _unqualifiedName_1(_aBlock_2);
    /* Statements */
    return _SymbolicExpression_2(
      _questionMark_2(_operatorNameToken_1(_name), _name),
      [_receiver, _self],
    );
  },
  "{ :self :receiver :aBlock:/2 |\n\t\tlet name = aBlock:/2.unqualifiedName;\n\t\tSymbolicExpression(\n\t\t\tname.operatorNameToken ? name,\n\t\t\t[receiver, self]\n\t\t)\n\t}",
);

sl.addTraitMethod(
  "SymbolicNumber",
  "SymbolicExpression",
  "sqrt",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _SymbolicExpression_2("sqrt", [_self]);
  },
  "{ :self |\n\t\tSymbolicExpression('sqrt', [self])\n\t}",
);

sl.addType(
  false,
  "Symbol",
  "SymbolicExpression",
  [
    "Object",
    "Number",
    "SymbolicObject",
    "SymbolicBoolean",
    "SymbolicMagnitude",
    "SymbolicNumber",
  ],
  ["name"],
);

sl.copyTraitToType(
  "Object",
  "Symbol",
);

sl.copyTraitToType(
  "Number",
  "Symbol",
);

sl.copyTraitToType(
  "SymbolicObject",
  "Symbol",
);

sl.copyTraitToType(
  "SymbolicBoolean",
  "Symbol",
);

sl.copyTraitToType(
  "SymbolicMagnitude",
  "Symbol",
);

sl.copyTraitToType(
  "SymbolicNumber",
  "Symbol",
);

sl.addMethod(
  "Symbol",
  "SymbolicExpression",
  "isEqualSymbolicExpression",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSignEqualsSign_2(_self, _anObject);
  },
  "{ :self :anObject |\n\t\tself == anObject\n\t}",
);

sl.addMethod(
  "Symbol",
  "SymbolicExpression",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _name_1(_self);
  },
  "{ :self |\n\t\tself.name\n\t}",
);

sl.addMethod(
  "String",
  "SymbolicExpression",
  "Symbol",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsentPut_3(
      _atIfAbsentPut_3(_cache_1(_system), "symbolDictionary", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return Object.fromEntries([]);
      }),
      _self,
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_2(_newSymbol_0(), _self);
      },
    );
  },
  "{ :self |\n\t\tsystem.cache.atIfAbsentPut('symbolDictionary') {\n\t\t\t()\n\t\t}.atIfAbsentPut(self) {\n\t\t\tnewSymbol().initializeSlots(self)\n\t\t}\n\t}",
);

sl.addType(
  false,
  "SymbolicExpression",
  "SymbolicExpression",
  [
    "Object",
    "Number",
    "SymbolicObject",
    "SymbolicBoolean",
    "SymbolicMagnitude",
    "SymbolicNumber",
  ],
  ["operator", "operands"],
);

sl.copyTraitToType(
  "Object",
  "SymbolicExpression",
);

sl.copyTraitToType(
  "Number",
  "SymbolicExpression",
);

sl.copyTraitToType(
  "SymbolicObject",
  "SymbolicExpression",
);

sl.copyTraitToType(
  "SymbolicBoolean",
  "SymbolicExpression",
);

sl.copyTraitToType(
  "SymbolicMagnitude",
  "SymbolicExpression",
);

sl.copyTraitToType(
  "SymbolicNumber",
  "SymbolicExpression",
);

sl.addMethod(
  "SymbolicExpression",
  "SymbolicExpression",
  "isEqualSymbolicExpression",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlotsBy_3(_self, _anObject, _isEqualSymbolicExpression_2);
  },
  "{ :self :anObject |\n\t\tself.hasEqualSlotsBy(anObject, isEqualSymbolicExpression:/2)\n\t}",
);

sl.addMethod(
  "SymbolicExpression",
  "SymbolicExpression",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isEmpty_1(_operands_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _format_2("(%)", [_printString_1(_operator_1(_self))]);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _format_2("(% %)", [
        _printString_1(_operator_1(_self)),
        _join_2(_collect_2(_operands_1(_self), _printString_1), " "),
      ]);
    });
  },
  "{ :self |\n\t\tself.operands.isEmpty.if {\n\t\t\t'(%)'.format([self.operator.printString])\n\t\t} {\n\t\t\t'(% %)'.format(\n\t\t\t\t[\n\t\t\t\t\tself.operator.printString,\n\t\t\t\t\tself.operands.collect(printString:/1).join(' ')\n\t\t\t\t]\n\t\t\t)\n\t\t}\n\t}",
);

sl.addMethod(
  "SymbolicExpression",
  "SymbolicExpression",
  "SymbolicExpression",
  ["self", "aList"],
  function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newSymbolicExpression_0(), _self, _aList);
  },
  "{ :self :aList |\n\t\tnewSymbolicExpression().initializeSlots(self, aList)\n\t}",
);

sl.addMethod(
  "Symbol",
  "SymbolicExpression",
  "SymbolicExpression",
  ["self", "aList"],
  function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newSymbolicExpression_0(), _self, _aList);
  },
  "{ :self :aList |\n\t\tnewSymbolicExpression().initializeSlots(self, aList)\n\t}",
);

sl.addMethod(
  "String",
  "SymbolicExpression",
  "SymbolicExpression",
  ["self", "aList"],
  function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _SymbolicExpression_2(_Symbol_1(_self), _aList);
  },
  "{ :self :aList |\n\t\tSymbolicExpression(self.Symbol, aList)\n\t}",
);

sl.addMethod(
  "Block",
  "SymbolicExpression",
  "asSymbolicExpression",
  ["self", "parameterNames"],
  function (_self, _parameterNames) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _parameterNames";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_numArgs_1(_self), _size_1(_parameterNames)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _apply_2(_self, _collect_2(_parameterNames, _Symbol_1));
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "asSymbolicExpression: arity error");
      },
    );
  },
  "{ :self :parameterNames |\n\t\t(self.numArgs = parameterNames.size).if {\n\t\t\tself.apply(parameterNames.collect(Symbol:/1))\n\t\t} {\n\t\t\tself.error('asSymbolicExpression: arity error')\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "SymbolicExpression",
  "asSymbolicExpression",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asSymbolicExpression_2(
      _self,
      _take_2(_alphabet_1("greek"), _numArgs_1(_self)),
    );
  },
  "{ :self |\n\t\tself.asSymbolicExpression(\n\t\t\t'greek'.alphabet.take(self.numArgs)\n\t\t)\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "SymbolicExpression",
  "isEqualSymbolicExpression",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isSymbolicExpression_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return false;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_self, _anObject);
    });
  },
  "{ :self :anObject |\n\t\tanObject.isSymbolicExpression.if {\n\t\t\tfalse\n\t\t} {\n\t\t\tself = anObject\n\t\t}\n\t}",
);
