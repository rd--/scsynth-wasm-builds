sl.addType(
  true,
  "Record",
  "Record",
  [
    "Object",
    "Json",
    "Iterable",
    "Indexable",
    "Collection",
    "Removable",
    "Extensible",
    "Dictionary",
  ],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Record",
);

sl.copyTraitMethodsToType(
  "Json",
  "Record",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "Record",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "Record",
);

sl.copyTraitMethodsToType(
  "Collection",
  "Record",
);

sl.copyTraitMethodsToType(
  "Removable",
  "Record",
);

sl.copyTraitMethodsToType(
  "Extensible",
  "Record",
);

sl.copyTraitMethodsToType(
  "Dictionary",
  "Record",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
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
  "Record",
  "Record",
  "asRecord",
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

sl.addMethodToExistingType(
  "Record",
  "Record",
  "at",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    if (Object.hasOwn(_self, _aString)) {
      return _self[_aString];
    }
    /* Statements */
    return _error_2(_self, _plusSignPlusSign_2("at: unknown key: ", _aString));
  },
  "{ :self :aString | <primitive: if(Object.hasOwn(_self, _aString)) {\n\t\t\treturn _self[_aString];\n\t\t}>\nerror(self,++('at: unknown key: ', aString)) }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
  "atPut",
  ["self", "aString", "anObject"],
  function (_self, _aString, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (typeof _aString === "string") {
      _self[_aString] = _anObject;
      return _anObject;
    }
    /* Statements */
    return _error_2(
      _self,
      _plusSignPlusSign_2("atPut key not a string: ", _typeOf_1(_aString)),
    );
  },
  "{ :self :aString :anObject | <primitive: if(typeof _aString === 'string') {\n\t\t\t_self[_aString] = _anObject;\n\t\t\treturn _anObject;\n\t\t}>\nerror(self,++('atPut key not a string: ', typeOf(aString))) }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
  "basicAt",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self[_key];
  },
  "{ :self :key | <primitive: return _self[_key];>\n }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
  "basicAtPut",
  ["self", "key", "value"],
  function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
      throw new Error(errorMessage);
    } /* Primitive */
    _self[_key] = _value;
    return _value;
  },
  "{ :self :key :value | <primitive: _self[_key] = _value;\n\t\treturn _value;>\n }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
  "includesKey",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Primitive */
    return Object.hasOwn(_self, _key);
  },
  "{ :self :key | <primitive: return Object.hasOwn(_self, _key);>\n }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
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
  "Record",
  "Record",
  "isJson",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_self, _isJson_1);
  },
  "{ :self | allSatisfy(self,isJson:/1) }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
  "isLiteral",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_self, _isLiteral_1);
  },
  "{ :self | allSatisfy(self,isLiteral:/1) }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
  "keys",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Object.keys(_self);
  },
  "{ :self | <primitive: return Object.keys(_self);>\n }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
  "keysAndValuesDo",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Primitive */
    Object.entries(_self).forEach(function (entry) {
      _aBlock_2(entry[0], entry[1]);
    });
    return null;
  },
  "{ :self :aBlock:/2 | <primitive: Object.entries(_self).forEach(function(entry) {\n\t\t\t_aBlock_2(entry[0], entry[1]);\n\t\t});\n\t\treturn null;>\n }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
  "removeKeyIfAbsent",
  ["self", "key", "aBlock"],
  function (_self, _key, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _aBlock";
      throw new Error(errorMessage);
    } /* Primitive */
    if (Object.hasOwn(_self, _key)) {
      const removed = _self[_key];
      delete _self[_key];
      return removed;
    } else {
      return _aBlock();
    }
  },
  "{ :self :key :aBlock | <primitive: if(Object.hasOwn(_self, _key)) {\n\t\t\tconst removed = _self[_key];\n\t\t\tdelete _self[_key];\n\t\t\treturn removed;\n\t\t} else {\n\t\t\treturn _aBlock();\n\t\t}>\n }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Object.keys(_self).length;
  },
  "{ :self | <primitive: return Object.keys(_self).length;>\n }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
  "species",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Record_0;
  },
  "{ :self | Record:/0 }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _join_2([
      "(",
      _join_2(
        _collect_2(_associations_1(_self), function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSignPlusSign_2(
            _plusSignPlusSign_2(_key_1(_each), ": "),
            _storeString_1(_value_1(_each)),
          );
        }),
        ", ",
      ),
      ")",
    ], "");
  },
  "{ :self | join(['(', join(collect(associations(self), { :each | ++(++(key(each), ': '), storeString(value(each))) }),', '), ')'],'') }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
  "values",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Object.values(_self);
  },
  "{ :self | <primitive: return Object.values(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Record",
  "asRecord",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _matrix = _collect_2(_self, _asList_1);
    /* Statements */
    return _if_3(
      _ampersand_2(
        _verticalLine_2(_isAssociationList_1(_self), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ampersand_2(_isMatrix_1(_matrix), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_second_1(_shape_1(_matrix)), 2);
          });
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _allSatisfy_2(_matrix, function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _isString_1(_first_1(_each));
          });
        },
      ),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _basicAsRecord_1(_matrix);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "List>>asRecord: not of correct shape or invalid keys",
        );
      },
    );
  },
  "{ :self | let matrix = collect(self,asList:/1); if((&((|(isAssociationList(self), { &(isMatrix(matrix), { =(second(shape(matrix)), 2) }) })), { allSatisfy(matrix, { :each | isString(first(each)) }) })), { basicAsRecord(matrix) }, { error(self,'List>>asRecord: not of correct shape or invalid keys') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Record",
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

sl.extendTypeOrTraitWithMethod(
  "List",
  "Record",
  "Record",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _allSatisfy_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(_isList_1(_each), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ampersand_2(_equalsSign_2(_size_1(_each), 2), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isString_1(_at_2(_each, 1));
          });
        });
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _basicAsRecord_1(_self);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "List>>Record: not two column matrix or keys not uniformly String values",
        );
      },
    );
  },
  "{ :self | if(allSatisfy(self, { :each | &(isList(each), { &(=(size(each), 2), { isString(at(each, 1)) }) }) }), { basicAsRecord(self) }, { error(self,'List>>Record: not two column matrix or keys not uniformly String values') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "Record",
  "Record",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return Object.create(null);
  },
  "{ <primitive: return Object.create(null);>\n }",
);
