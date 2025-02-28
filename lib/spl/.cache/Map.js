/*  Require: List, Record, Void  */

sl.addTrait("PrimitiveMap", "Map");

sl.addMethodToExistingTrait(
  "PrimitiveMap",
  "Map",
  "asMap",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.addMethodToExistingTrait(
  "PrimitiveMap",
  "Map",
  "asRecord",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_allSatisfy_2(_keys_1(_self), _isString_1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _basicAsRecord_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "asRecord: not all keys are strings");
    });
  },
  "{ :self | if(allSatisfy(keys(self),isString:/1), { basicAsRecord(self) }, { error(self,'asRecord: not all keys are strings') }) }",
);

sl.addMethodToExistingTrait(
  "PrimitiveMap",
  "Map",
  "at",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Primitive */
    if (_self.has(_key)) {
      return _self.get(_key);
    }
    /* Statements */
    return _error_2(_self, _plusSignPlusSign_2("at: unknown key: ", _key));
  },
  "{ :self :key | <primitive: if(_self.has(_key)) {\n\t\t\treturn _self.get(_key);\n\t\t}>\nerror(self,++('at: unknown key: ', key)) }",
);

sl.addMethodToExistingTrait(
  "PrimitiveMap",
  "Map",
  "atPut",
  ["self", "key", "value"],
  function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.set(_key, _value);
    return _value;
  },
  "{ :self :key :value | <primitive: _self.set(_key, _value);\n\t\treturn _value;>\n }",
);

sl.addMethodToExistingTrait(
  "PrimitiveMap",
  "Map",
  "includesKey",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.has(_key);
  },
  "{ :self :key | <primitive: return _self.has(_key);>\n }",
);

sl.addMethodToExistingTrait(
  "PrimitiveMap",
  "Map",
  "removeKeyIfAbsent",
  ["self", "key", "aBlock:/0"],
  function (_self, _key, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _aBlock_0";
      throw new Error(errorMessage);
    } /* Primitive */
    if (_self.has(_key)) {
      const removed = _self.get(_key);
      _self.delete(_key);
      return removed;
    } else {
      return _aBlock_0();
    }
  },
  "{ :self :key :aBlock:/0 | <primitive: if(_self.has(_key)) {\n\t\t\tconst removed = _self.get(_key);\n\t\t\t_self.delete(_key);\n\t\t\treturn removed;\n\t\t} else {\n\t\t\treturn _aBlock_0();\n\t\t}>\n }",
);

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
  "add",
  ["self", "anAssociation"],
  function (_self, _anAssociation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAssociation";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.set(_anAssociation.key, _anAssociation.value);
    return _anAssociation;
  },
  "{ :self :anAssociation | <primitive: _self.set(_anAssociation.key, _anAssociation.value);\n\t\treturn _anAssociation;>\n }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "asDictionary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _Dictionary_0();
    /* Statements */
    _addAll_2(_answer, _self);
    return _answer;
  },
  "{ :self | let answer = Dictionary(); addAll(answer,self); answer }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "asJson",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asJson_3(_self, null, "");
  },
  "{ :self | asJson(self,nil, '') }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "asJson",
  ["self", "replacer", "space"],
  function (_self, _replacer, _space) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _replacer, _space";
      throw new Error(errorMessage);
    } /* Statements */
    return _asJson_3(_asRecord_1(_self), _replacer, _space);
  },
  "{ :self :replacer :space | asJson(asRecord(self),replacer, space) }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "basicAsRecord",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Object.fromEntries(_self);
  },
  "{ :self | <primitive: return Object.fromEntries(_self);>\n }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "indices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _keys_1(_self);
  },
  "{ :self | keys(self) }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "keys",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Array.from(_self.keys());
  },
  "{ :self | <primitive: return Array.from(_self.keys());>\n }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "keysAndValuesDo",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.forEach(function (value, key, _) {
      _aBlock_2(key, value);
    });
    return null;
  },
  "{ :self :aBlock:/2 | <primitive: _self.forEach(function(value, key, _) {\n\t\t\t_aBlock_2(key, value);\n\t\t});\n\t\treturn null;>\n }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "removeAll",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.clear();
    /* Statements */
    return _self;
  },
  "{ :self | <primitive: _self.clear();>\nself }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "shallowCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Map(_self);
  },
  "{ :self | <primitive: return new Map(_self);>\n }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.size;
  },
  "{ :self | <primitive: return _self.size;>\n }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "species",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Map_0;
  },
  "{ :self | Map:/0 }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _storeString_1(_associations_1(_self)),
      ".asMap",
    );
  },
  "{ :self | ++(storeString(associations(self)), '.asMap') }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "listSubstitutionSystem",
  ["self", "aList", "anInteger"],
  function (_self, _aList, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aList, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [_aList];
    /* Statements */
    _timesRepeat_2(_anInteger, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _next = [];
      /* Statements */
      _do_2(_last_1(_answer), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _addAll_2(_next, _at_2(_self, _each));
      });
      return _add_2(_answer, _next);
    });
    return _answer;
  },
  "{ :self :aList :anInteger | let answer = [aList]; timesRepeat(anInteger, { let next = []; do(last(answer), { :each | addAll(next,at(self, each)) }); add(answer,next) }); answer }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "matrixSubstitutionSystem",
  ["self", "aMatrix", "anInteger"],
  function (_self, _aMatrix, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aMatrix, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [_aMatrix];
    /* Statements */
    _timesRepeat_2(_anInteger, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _next = _arrayFlatten_1(
        _deepCollect_2(_last_1(_answer), function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _at_2(_self, _each);
        }),
      );
      /* Statements */
      return _add_2(_answer, _next);
    });
    return _answer;
  },
  "{ :self :aMatrix :anInteger | let answer = [aMatrix]; timesRepeat(anInteger, { let next = arrayFlatten(deepCollect(last(answer), { :each | at(self, each) })); add(answer,next) }); answer }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "stringSubstitutionSystem",
  ["self", "aString", "anInteger"],
  function (_self, _aString, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [_aString];
    /* Statements */
    _timesRepeat_2(_anInteger, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _next = [];
      /* Statements */
      _do_2(_last_1(_answer), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_next, _at_2(_self, _each));
      });
      return _add_2(_answer, _join_2(_next, ""));
    });
    return _answer;
  },
  "{ :self :aString :anInteger | let answer = [aString]; timesRepeat(anInteger, { let next = []; do(last(answer), { :each | add(next,at(self, each)) }); add(answer,join(next,'')) }); answer }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "substitutionSystem",
  ["self", "initialCondition", "anInteger"],
  function (_self, _initialCondition, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _initialCondition, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isString_1(_initialCondition), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _stringSubstitutionSystem_3(_self, _initialCondition, _anInteger);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isVector_1(_initialCondition), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _listSubstitutionSystem_3(_self, _initialCondition, _anInteger);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_isMatrix_1(_initialCondition), function () {
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
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _error_2(
            _self,
            "substitutionSystem: not string or vector or matrix",
          );
        });
      });
    });
  },
  "{ :self :initialCondition :anInteger | if(isString(initialCondition), { stringSubstitutionSystem(self,initialCondition, anInteger) }, { if(isVector(initialCondition), { listSubstitutionSystem(self,initialCondition, anInteger) }, { if(isMatrix(initialCondition), { matrixSubstitutionSystem(self,initialCondition, anInteger) }, { error(self,'substitutionSystem: not string or vector or matrix') }) }) }) }",
);

sl.addMethodToExistingType(
  "Map",
  "Map",
  "values",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Array.from(_self.values());
  },
  "{ :self | <primitive: return Array.from(_self.values());>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Map",
  "mapFromTwoElementLists",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Map(_self);
  },
  "{ :self | <primitive: return new Map(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Map",
  "asMap",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _mapFromTwoElementLists_1(_collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _association = _asList_1(_each);
      /* Statements */
      return _assertIsOfSize_2(_association, 2);
    }));
  },
  "{ :self | mapFromTwoElementLists(collect(self, { :each | let association = asList(each); assertIsOfSize(association,2) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "Map",
  "Map",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Map();
  },
  "{ <primitive: return new Map();>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "Map",
  "asMap",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Map(Object.entries(_self));
  },
  "{ :self | <primitive: return new Map(Object.entries(_self));>\n }",
);
