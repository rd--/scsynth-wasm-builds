sl.addTrait("SymbolicObject", "SymbolicExpression");

sl.addMethodToExistingTrait(
  "SymbolicObject",
  "SymbolicExpression",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("=", [_self, _anObject]);
  },
  "{ :self :anObject | symbolicPrimitive('=',[self, anObject]) }",
);

sl.addMethodToExistingTrait(
  "SymbolicObject",
  "SymbolicExpression",
  "tilde",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("~", [_self, _anObject]);
  },
  "{ :self :anObject | symbolicPrimitive('~',[self, anObject]) }",
);

sl.addTrait("SymbolicBoolean", "SymbolicExpression");

sl.addMethodToExistingTrait(
  "SymbolicBoolean",
  "SymbolicExpression",
  "ampersand",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("and", [_self, _aBlock_0()]);
  },
  "{ :self :aBlock:/0 | symbolicPrimitive('and',[self, aBlock()]) }",
);

sl.addMethodToExistingTrait(
  "SymbolicBoolean",
  "SymbolicExpression",
  "verticalLine",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("or", [_self, _aBlock_0()]);
  },
  "{ :self :aBlock:/0 | symbolicPrimitive('or',[self, aBlock()]) }",
);

sl.addMethodToExistingTrait(
  "SymbolicBoolean",
  "SymbolicExpression",
  "if",
  ["self", "whenTrue:/0", "whenFalse:/0"],
  function (_self, _whenTrue_0, _whenFalse_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _whenTrue_0, _whenFalse_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("if", [_self, _whenTrue_0(), _whenFalse_0()]);
  },
  "{ :self :whenTrue:/0 :whenFalse:/0 | symbolicPrimitive('if',[self, whenTrue(), whenFalse()]) }",
);

sl.addMethodToExistingTrait(
  "SymbolicBoolean",
  "SymbolicExpression",
  "not",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("not", [_self]);
  },
  "{ :self | symbolicPrimitive('not',[self]) }",
);

sl.addTrait("SymbolicMagnitude", "SymbolicExpression");

sl.addMethodToExistingTrait(
  "SymbolicMagnitude",
  "SymbolicExpression",
  "lessThanSign",
  ["self", "aMagnitude"],
  function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("<", [_self, _aMagnitude]);
  },
  "{ :self :aMagnitude | symbolicPrimitive('<',[self, aMagnitude]) }",
);

sl.addMethodToExistingTrait(
  "SymbolicMagnitude",
  "SymbolicExpression",
  "lessThanSignEqualsSign",
  ["self", "aMagnitude"],
  function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("<=", [_self, _aMagnitude]);
  },
  "{ :self :aMagnitude | symbolicPrimitive('<=',[self, aMagnitude]) }",
);

sl.addMethodToExistingTrait(
  "SymbolicMagnitude",
  "SymbolicExpression",
  "greaterThanSign",
  ["self", "aMagnitude"],
  function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2(">", [_self, _aMagnitude]);
  },
  "{ :self :aMagnitude | symbolicPrimitive('>',[self, aMagnitude]) }",
);

sl.addMethodToExistingTrait(
  "SymbolicMagnitude",
  "SymbolicExpression",
  "greaterThanSignEqualsSign",
  ["self", "aMagnitude"],
  function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2(">=", [_self, _aMagnitude]);
  },
  "{ :self :aMagnitude | symbolicPrimitive('>=',[self, aMagnitude]) }",
);

sl.addMethodToExistingTrait(
  "SymbolicMagnitude",
  "SymbolicExpression",
  "max",
  ["self", "aMagnitude"],
  function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("max", [_self, _aMagnitude]);
  },
  "{ :self :aMagnitude | symbolicPrimitive('max',[self, aMagnitude]) }",
);

sl.addMethodToExistingTrait(
  "SymbolicMagnitude",
  "SymbolicExpression",
  "min",
  ["self", "aMagnitude"],
  function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("min", [_self, _aMagnitude]);
  },
  "{ :self :aMagnitude | symbolicPrimitive('min',[self, aMagnitude]) }",
);

sl.addTrait("SymbolicNumber", "SymbolicExpression");

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "plusSign",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("+", [_self, _operand]);
  },
  "{ :self :operand | symbolicPrimitive('+',[self, operand]) }",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "hyphenMinus",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("-", [_self, _operand]);
  },
  "{ :self :operand | symbolicPrimitive('-',[self, operand]) }",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "asterisk",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("*", [_self, _operand]);
  },
  "{ :self :operand | symbolicPrimitive('*',[self, operand]) }",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "solidus",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("/", [_self, _operand]);
  },
  "{ :self :operand | symbolicPrimitive('/',[self, operand]) }",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "percentSign",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("%", [_self, _operand]);
  },
  "{ :self :operand | symbolicPrimitive('%',[self, operand]) }",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "circumflexAccent",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("^", [_self, _operand]);
  },
  "{ :self :operand | symbolicPrimitive('^',[self, operand]) }",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "abs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("abs", [_self]);
  },
  "{ :self | symbolicPrimitive('abs',[self]) }",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "adaptToNumberAndApply",
  ["self", "receiver", "aBlock:/2"],
  function (_self, _receiver, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _receiver, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _name = _unqualifiedName_1(_aBlock_2);
    /* Statements */
    return _SymbolicExpression_2(
      _questionMark_2(_operatorNameToken_1(_name), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _name;
      }),
      [_receiver, _self],
    );
  },
  "{ :self :receiver :aBlock:/2 | let name = unqualifiedName(aBlock:/2); SymbolicExpression(?(operatorNameToken(name), { name }), [receiver, self]) }",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "cos",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("cos", [_self]);
  },
  "{ :self | symbolicPrimitive('cos',[self]) }",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "cosecant",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("cosecant", [_self]);
  },
  "{ :self | symbolicPrimitive('cosecant',[self]) }",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "cotangent",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("cotangent", [_self]);
  },
  "{ :self | symbolicPrimitive('cotangent',[self]) }",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "sin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("sin", [_self]);
  },
  "{ :self | symbolicPrimitive('sin',[self]) }",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "sqrt",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("sqrt", [_self]);
  },
  "{ :self | symbolicPrimitive('sqrt',[self]) }",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "tan",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("tan", [_self]);
  },
  "{ :self | symbolicPrimitive('tan',[self]) }",
);

sl.addMethodToExistingTrait(
  "SymbolicNumber",
  "SymbolicExpression",
  "truncated",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _symbolicPrimitive_2("truncated", [_self]);
  },
  "{ :self | symbolicPrimitive('truncated',[self]) }",
);

sl.addType(
  false,
  "Symbol",
  "SymbolicExpression",
  [
    "Object",
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
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSignEqualsSign_2(_self, _anObject);
  },
  "{ :self :anObject | ==(self, anObject) }",
);

sl.addMethodToExistingType(
  "Symbol",
  "SymbolicExpression",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _name_1(_self);
  },
  "{ :self | name(self) }",
);

sl.addMethodToExistingType(
  "Symbol",
  "SymbolicExpression",
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

sl.extendTypeOrTraitWithMethod(
  "System",
  "SymbolicExpression",
  "symbolDictionary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(_self, "symbolDictionary", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _Record_1([]);
    });
  },
  "{ :self | cached(self, 'symbolDictionary', { Record([]) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SymbolicExpression",
  "Symbol",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsentPut_3(_symbolDictionary_1(_system), _self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _initializeSlots_2(_newSymbol_0(), _self);
    });
  },
  "{ :self | atIfAbsentPut(symbolDictionary(system), self, { initializeSlots(newSymbol(),self) }) }",
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

sl.copyTraitMethodsToType(
  "Object",
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

sl.addMethodToExistingType(
  "SymbolicExpression",
  "SymbolicExpression",
  "asTree",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Tree_2(
      _operator_1(_self),
      _collect_2(_operands_1(_self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_isSymbolicExpression_1(_each), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asTree_1(_each);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _Tree_2(_each, []);
        });
      }),
    );
  },
  "{ :self | Tree(operator(self), collect(operands(self), { :each | if(isSymbolicExpression(each), { asTree(each) }, { Tree(each, []) }) })) }",
);

sl.addMethodToExistingType(
  "SymbolicExpression",
  "SymbolicExpression",
  "isEqualSymbolicExpression",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlotsBy_3(_self, _anObject, _isEqualSymbolicExpression_2);
  },
  "{ :self :anObject | hasEqualSlotsBy(self,anObject, isEqualSymbolicExpression:/2) }",
);

sl.addMethodToExistingType(
  "SymbolicExpression",
  "SymbolicExpression",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isEmpty_1(_operands_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _format_2("(%)", [_printString_1(_operator_1(_self))]);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _format_2("(% %)", [
        _printString_1(_operator_1(_self)),
        _join_2(
          _collect_2(_operands_1(_self), function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _printString_1(_if_3(_isSmallFloat_1(_each), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _recogniseSymbolicExpression_1(_each);
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _each;
            }));
          }),
          " ",
        ),
      ]);
    });
  },
  "{ :self | if(isEmpty(operands(self)), { format('(%)',[printString(operator(self))]) }, { format('(% %)',[printString(operator(self)), join(collect(operands(self), { :each | printString(if(isSmallFloat(each), { recogniseSymbolicExpression(each) }, { each })) }),' ')]) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SymbolicExpression",
  "SymbolicExpression",
  "SymbolicExpression",
  ["self", "aList"],
  function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newSymbolicExpression_0(), _self, _aList);
  },
  "{ :self :aList | initializeSlots(newSymbolicExpression(),self, aList) }",
);

sl.extendTypeOrTraitWithMethod(
  "Symbol",
  "SymbolicExpression",
  "SymbolicExpression",
  ["self", "aList"],
  function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newSymbolicExpression_0(), _self, _aList);
  },
  "{ :self :aList | initializeSlots(newSymbolicExpression(),self, aList) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SymbolicExpression",
  "SymbolicExpression",
  ["self", "aList"],
  function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _SymbolicExpression_2(_Symbol_1(_self), _aList);
  },
  "{ :self :aList | SymbolicExpression(Symbol(self), aList) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SymbolicExpression",
  "symbolicBinaryPrimitive",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return (function (_i, _j) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _i, _j";
        throw new Error(errorMessage);
      } /* Statements */
      return _symbolicPrimitive_2(_self, [_i, _j]);
    });
  },
  "{ :self | { :i :j | symbolicPrimitive(self,[i, j]) } }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SymbolicExpression",
  "symbolicPrimitive",
  ["self", "operands"],
  function (_self, _operands) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operands";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_anySatisfy_2(_operands, _isList_1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_multiChannelExpand_1(_operands), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _SymbolicExpression_2(_self, _each);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _SymbolicExpression_2(_self, _operands);
    });
  },
  "{ :self :operands | if(anySatisfy(operands,isList:/1), { collect(multiChannelExpand(operands), { :each | SymbolicExpression(self, each) }) }, { SymbolicExpression(self, operands) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SymbolicExpression",
  "symbolicUnaryPrimitive",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return (function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        throw new Error(errorMessage);
      } /* Statements */
      return _symbolicPrimitive_2(_self, [_i]);
    });
  },
  "{ :self | { :i | symbolicPrimitive(self,[i]) } }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "SymbolicExpression",
  "asSymbolicExpression",
  ["self", "parameterNames"],
  function (_self, _parameterNames) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _parameterNames";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_numArgs_1(_self), _size_1(_parameterNames)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _apply_2(_self, _collect_2(_parameterNames, _Symbol_1));
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "asSymbolicExpression: arity error");
      },
    );
  },
  "{ :self :parameterNames | if((=(numArgs(self), size(parameterNames))), { apply(self,collect(parameterNames,Symbol:/1)) }, { error(self,'asSymbolicExpression: arity error') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "SymbolicExpression",
  "asSymbolicExpression",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asSymbolicExpression_2(
      _self,
      _take_2(_alphabet_1("greek"), _numArgs_1(_self)),
    );
  },
  "{ :self | asSymbolicExpression(self,take(alphabet('greek'),numArgs(self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "SymbolicExpression",
  "isEqualSymbolicExpression",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isSymbolicExpression_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return false;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_self, _anObject);
    });
  },
  "{ :self :anObject | if(isSymbolicExpression(anObject), { false }, { =(self, anObject) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SymbolicExpression",
  "recogniseSymbolicExpression",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOfOtherwise_3(_self, [
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _pi_1(1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Symbol_1("π");
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _pi_1(2);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(2, _Symbol_1("π"));
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _self;
    });
  },
  "{ :self | caseOfOtherwise(self, [->({ pi(1) }, { Symbol('π') }), ->({ pi(2) }, { *(2, Symbol('π')) })], { self }) }",
);
