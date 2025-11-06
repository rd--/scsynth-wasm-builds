/*  Require: List, PrimitiveMap, Record, Void  */

sl.addType(
  true,
  "Map",
  "Map",
  [
    "Object",
    "Equatable",
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
  "Equatable",
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
  "{ :self |\n\t\tself.asJson(nil, '')\n\t}",
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
  "{ :self :replacer :space |\n\t\tself.asRecord.asJson(replacer, space)\n\t}",
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
  "{ :self :key :value |\n\t\tkey.isImmediate.ifFalse {\n\t\t\tself.error('Map>>atPut: non-immediate key: ' ++ key)\n\t\t};\n\t\tself.uncheckedAtPut(key, value)\n\t}",
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
  "{ :self |\n\t\t==\n\t}",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "copy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Map(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return new Map(_self);>\n\t}",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "deepCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _primitiveDeepCopy_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.primitiveDeepCopy\n\t}",
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
  "{ :self |\n\t\tself.keys\n\t}",
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
  "{ :self |\n\t\t<primitive: return Array.from(_self.keys());>\n\t}",
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
  "{ :self :aBlock:/2 |\n\t\t<primitive:\n\t\t_self.forEach(function(value, key, _) {\n\t\t\t_aBlock_2(key, value);\n\t\t});\n\t\treturn null;\n\t\t>\n\t}",
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
  "{ :self |\n\t\t<primitive: _self.clear();>\n\t\tself\n\t}",
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
  "{ :self |\n\t\tlet answer = Map();\n\t\tself.keysAndValuesDo { :key :value |\n\t\t\tanswer.add(value -> key)\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.size;>\n\t}",
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
  "{ :self |\n\t\tMap:/0\n\t}",
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
  "{ :self |\n\t\tself.storeStringLiteral('[:]', '[', ']', storeString:/1, ': ', storeString:/1)\n\t}",
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
  "{ :self :aList :anInteger |\n\t\tlet rules = self.associations;\n\t\tlet answer = [aList];\n\t\tanInteger.timesRepeat {\n\t\t\tanswer.add(\n\t\t\t\tsequenceReplace(answer.last, rules)\n\t\t\t)\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :aMatrix :anInteger |\n\t\tlet answer = [aMatrix];\n\t\tanInteger.timesRepeat {\n\t\t\tlet next = answer.last.deepCollect { :each |\n\t\t\t\tself[each]\n\t\t\t}.arrayFlatten;\n\t\t\tanswer.add(next)\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :aString :anInteger |\n\t\tlet answer = [aString];\n\t\tanInteger.timesRepeat {\n\t\t\tlet next = [];\n\t\t\tanswer.last.do { :each |\n\t\t\t\tnext.add(self[each])\n\t\t\t};\n\t\t\tanswer.add(next.stringCatenate)\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :initialCondition :anInteger |\n\t\tinitialCondition.isString.if {\n\t\t\tself.stringSubstitutionSystem(initialCondition, anInteger)\n\t\t} {\n\t\t\tinitialCondition.isVector.if {\n\t\t\t\tself.listSubstitutionSystem(initialCondition, anInteger)\n\t\t\t} {\n\t\t\t\tinitialCondition.isMatrix.if {\n\t\t\t\t\tself.matrixSubstitutionSystem(initialCondition, anInteger)\n\t\t\t\t} {\n\t\t\t\t\tself.error('substitutionSystem: not string or vector or matrix')\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\t<primitive: return Object.fromEntries(_self);>\n\t}",
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
  "{ :self :key :value |\n\t\t<primitive:\n\t\t_self.set(_key, _value);\n\t\treturn _value;\n\t\t>\n\t}",
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
  "{ :self |\n\t\t<primitive: return Array.from(_self.values());>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Map",
  "associationListToMap",
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
        return _uncheckedMatrixToMap_1(_collect_2(_self, _keyValue_1));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "List>>associationListToMap");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isAssociationList.if {\n\t\t\tself.collect(keyValue:/1).uncheckedMatrixToMap\n\t\t} {\n\t\t\tself.error('List>>associationListToMap')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Map",
  "matrixToMap",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_dimensions_1(_self), 2);
    let __SplUnused2 = _at_2(__SplVar1, 1);
    let _m = _at_2(__SplVar1, 2);
    /* Statements */
    return _if_3(
      _equalsSign_2(_m, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedMatrixToMap_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "List>>matrixToMap");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [_, m] = self.dimensions;\n\t\t(m = 2).if {\n\t\t\tself.uncheckedMatrixToMap\n\t\t} {\n\t\t\tself.error('List>>matrixToMap')\n\t\t}\n\t}",
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
            return _associationListToMap_1(_self);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _matrixToMap_1(_self);
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isEmpty.if {\n\t\t\tMap()\n\t\t} {\n\t\t\tself.anyOne.isAssociation.if {\n\t\t\t\tself.associationListToMap\n\t\t\t} {\n\t\t\t\tself.matrixToMap\n\t\t\t}\n\t\t}\n\t}",
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
    return _matrixToMap_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.matrixToMap\n\t}",
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
  "{ :self :initialCondition :anInteger |\n\t\tself.asMap.substitutionSystem(initialCondition, anInteger)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Map",
  "uncheckedMatrixToMap",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Map(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return new Map(_self);>\n\t}",
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
  "{\n\t\t<primitive: return new Map();>\n\t}",
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
  "{ :self |\n\t\t<primitive: return new Map(Object.entries(_self));>\n\t}",
);
