/*  Require: List, PrimitiveMap, Record, Void  */

sl.addType(
  true,
  "Map",
  "Map",
  [
    "Object",
    "Iterable",
    "Indexable",
    "Collection",
    "Extensible",
    "Removable",
    "Dictionary",
    "PrimitiveMap",
  ],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Map",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "Map",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "Map",
);

sl.copyTraitMethodsToType(
  "Collection",
  "Map",
);

sl.copyTraitMethodsToType(
  "Extensible",
  "Map",
);

sl.copyTraitMethodsToType(
  "Removable",
  "Map",
);

sl.copyTraitMethodsToType(
  "Dictionary",
  "Map",
);

sl.copyTraitMethodsToType(
  "PrimitiveMap",
  "Map",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "asJson",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asJson_3(_self, null, "");
  }, ["self"]),
  "{ :self | asJson(self,nil, '') }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "asJson",
  ["self", "replacer", "space"],
  sl.annotateFunction(function (_self, _replacer, _space) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _replacer, _space";
      throw new Error(errorMessage);
    } /* Statements */
    return _asJson_3(_asRecord_1(_self), _replacer, _space);
  }, ["self", "replacer", "space"]),
  "{ :self :replacer :space | asJson(asRecord(self),replacer, space) }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "atPut",
  ["self", "key", "value"],
  sl.annotateFunction(function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
      throw new Error(errorMessage);
    } /* Statements */
    _ifFalse_2(
      _isImmediate_1(_key),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("Map>>atPut: non-immediate key: ", _key),
        );
      }, []),
    );
    return _uncheckedAtPut_3(_self, _key, _value);
  }, ["self", "key", "value"]),
  "{ :self :key :value | ifFalse(isImmediate(key), { error(self,++('Map>>atPut: non-immediate key: ', key)) }); uncheckedAtPut(self,key, value) }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "comparator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSignEqualsSign_2;
  }, ["self"]),
  "{ :self | == }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "indices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _keys_1(_self);
  }, ["self"]),
  "{ :self | keys(self) }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "keys",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Array.from(_self.keys());
  }, ["self"]),
  "{ :self | <primitive: return Array.from(_self.keys());>\n }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "keysAndValuesDo",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.forEach(function (value, key, _) {
      _aBlock_2(key, value);
    });
    return null;
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | <primitive: _self.forEach(function(value, key, _) {\n\t\t\t_aBlock_2(key, value);\n\t\t});\n\t\treturn null;>\n }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "removeAll",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.clear();
    /* Statements */
    return _self;
  }, ["self"]),
  "{ :self | <primitive: _self.clear();>\nself }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "reverse",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _Map_0();
    /* Statements */
    _keysAndValuesDo_2(
      _self,
      sl.annotateFunction(function (_key, _value) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _key, _value";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _hyphenMinusGreaterThanSign_2(_value, _key));
      }, ["key", "value"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = Map(); keysAndValuesDo(self, { :key :value | add(answer,->(value, key)) }); answer }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "shallowCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Map(_self);
  }, ["self"]),
  "{ :self | <primitive: return new Map(_self);>\n }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.size;
  }, ["self"]),
  "{ :self | <primitive: return _self.size;>\n }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "species",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Map_0;
  }, ["self"]),
  "{ :self | Map:/0 }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringLiteral_7(
      _self,
      "[:]",
      "[",
      "]",
      _storeString_1,
      ": ",
      _storeString_1,
    );
  }, ["self"]),
  "{ :self | storeStringLiteral(self,'[:]', '[', ']', storeString:/1, ': ', storeString:/1) }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "listSubstitutionSystem",
  ["self", "aList", "anInteger"],
  sl.annotateFunction(function (_self, _aList, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aList, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _rules = _associations_1(_self);
    let _answer = [_aList];
    /* Statements */
    _timesRepeat_2(
      _anInteger,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _sequenceReplace_2(_last_1(_answer), _rules));
      }, []),
    );
    return _answer;
  }, ["self", "aList", "anInteger"]),
  "{ :self :aList :anInteger | let rules = associations(self); let answer = [aList]; timesRepeat(anInteger, { add(answer,sequenceReplace(last(answer), rules)) }); answer }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "matrixSubstitutionSystem",
  ["self", "aMatrix", "anInteger"],
  sl.annotateFunction(function (_self, _aMatrix, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aMatrix, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [_aMatrix];
    /* Statements */
    _timesRepeat_2(
      _anInteger,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _next = _arrayFlatten_1(
          _deepCollect_2(
            _last_1(_answer),
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _at_2(_self, _each);
            }, ["each"]),
          ),
        );
        /* Statements */
        return _add_2(_answer, _next);
      }, []),
    );
    return _answer;
  }, ["self", "aMatrix", "anInteger"]),
  "{ :self :aMatrix :anInteger | let answer = [aMatrix]; timesRepeat(anInteger, { let next = arrayFlatten(deepCollect(last(answer), { :each | at(self, each) })); add(answer,next) }); answer }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "stringSubstitutionSystem",
  ["self", "aString", "anInteger"],
  sl.annotateFunction(function (_self, _aString, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [_aString];
    /* Statements */
    _timesRepeat_2(
      _anInteger,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _next = [];
        /* Statements */
        _do_2(
          _last_1(_answer),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_next, _at_2(_self, _each));
          }, ["each"]),
        );
        return _add_2(_answer, _stringCatenate_1(_next));
      }, []),
    );
    return _answer;
  }, ["self", "aString", "anInteger"]),
  "{ :self :aString :anInteger | let answer = [aString]; timesRepeat(anInteger, { let next = []; do(last(answer), { :each | add(next,at(self, each)) }); add(answer,stringCatenate(next)) }); answer }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "substitutionSystem",
  ["self", "initialCondition", "anInteger"],
  sl.annotateFunction(function (_self, _initialCondition, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _initialCondition, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isString_1(_initialCondition),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _stringSubstitutionSystem_3(
          _self,
          _initialCondition,
          _anInteger,
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isVector_1(_initialCondition),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _listSubstitutionSystem_3(
              _self,
              _initialCondition,
              _anInteger,
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _isMatrix_1(_initialCondition),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _matrixSubstitutionSystem_3(
                  _self,
                  _initialCondition,
                  _anInteger,
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _error_2(
                  _self,
                  "substitutionSystem: not string or vector or matrix",
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "initialCondition", "anInteger"]),
  "{ :self :initialCondition :anInteger | if(isString(initialCondition), { stringSubstitutionSystem(self,initialCondition, anInteger) }, { if(isVector(initialCondition), { listSubstitutionSystem(self,initialCondition, anInteger) }, { if(isMatrix(initialCondition), { matrixSubstitutionSystem(self,initialCondition, anInteger) }, { error(self,'substitutionSystem: not string or vector or matrix') }) }) }) }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "uncheckedAsRecord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Object.fromEntries(_self);
  }, ["self"]),
  "{ :self | <primitive: return Object.fromEntries(_self);>\n }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "uncheckedAtPut",
  ["self", "key", "value"],
  sl.annotateFunction(function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.set(_key, _value);
    return _value;
  }, ["self", "key", "value"]),
  "{ :self :key :value | <primitive: _self.set(_key, _value);\n\t\treturn _value;>\n }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "values",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Array.from(_self.values());
  }, ["self"]),
  "{ :self | <primitive: return Array.from(_self.values());>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Map",
  "associationsToMap",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isAssociationList_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedListToMap_1(_collect_2(_self, _asList_1));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "List>>associationsToMap");
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isAssociationList(self), { uncheckedListToMap(collect(self,asList:/1)) }, { error(self,'List>>associationsToMap') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Map",
  "listToMap",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL1 = _assertIsOfSize_2(_dimensions_1(_self), 2);
    let __genSym2 = _at_2(__SPL1, 1);
    let _m = _at_2(__SPL1, 2);
    /* Statements */
    return _if_3(
      _equalsSign_2(_m, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedListToMap_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "List>>listToMap");
      }, []),
    );
  }, ["self"]),
  "{ :self | let __SPL1 = assertIsOfSize(dimensions(self), 2); let _ = at(__SPL1, 1); let m = at(__SPL1, 2); if((=(m, 2)), { uncheckedListToMap(self) }, { error(self,'List>>listToMap') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Map",
  "asMap",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Map_0();
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isAssociation_1(_anyOne_1(_self)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _associationsToMap_1(_self);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _listToMap_1(_self);
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isEmpty(self), { Map() }, { if(isAssociation(anyOne(self)), { associationsToMap(self) }, { listToMap(self) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Map",
  "Map",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _listToMap_1(_self);
  }, ["self"]),
  "{ :self | listToMap(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Map",
  "substitutionSystem",
  ["self", "initialCondition", "anInteger"],
  sl.annotateFunction(function (_self, _initialCondition, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _initialCondition, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _substitutionSystem_3(
      _asMap_1(_self),
      _initialCondition,
      _anInteger,
    );
  }, ["self", "initialCondition", "anInteger"]),
  "{ :self :initialCondition :anInteger | substitutionSystem(asMap(self),initialCondition, anInteger) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Map",
  "uncheckedListToMap",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Map(_self);
  }, ["self"]),
  "{ :self | <primitive: return new Map(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "Map",
  "Map",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Map();
  }, []),
  "{ <primitive: return new Map();>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "Map",
  "asMap",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Map(Object.entries(_self));
  }, ["self"]),
  "{ :self | <primitive: return new Map(Object.entries(_self));>\n }",
);
