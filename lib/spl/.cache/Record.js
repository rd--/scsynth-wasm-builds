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
  "asRecord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self | self }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
  "atIfAbsent",
  ["self", "aString", "ifAbsent:/0"],
  sl.annotateFunction(function (_self, _aString, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Primitive */
    if (Object.hasOwn(_self, _aString)) {
      return _self[_aString];
    }
    return _ifAbsent_0();
  }, ["self", "aString", "ifAbsent:/0"]),
  "{ :self :aString :ifAbsent:/0 | <primitive: if(Object.hasOwn(_self, _aString)) {\n\t\t\treturn _self[_aString];\n\t\t}\n\t\treturn _ifAbsent_0();>\n }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
  "atPut",
  ["self", "aString", "anObject"],
  sl.annotateFunction(function (_self, _aString, _anObject) {
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
  }, ["self", "aString", "anObject"]),
  "{ :self :aString :anObject | <primitive: if(typeof _aString === 'string') {\n\t\t\t_self[_aString] = _anObject;\n\t\t\treturn _anObject;\n\t\t}>\nerror(self,++('atPut key not a string: ', typeOf(aString))) }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
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
  "Record",
  "Record",
  "includesKey",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Primitive */
    return Object.hasOwn(_self, _key);
  }, ["self", "key"]),
  "{ :self :key | <primitive: return Object.hasOwn(_self, _key);>\n }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
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
  "Record",
  "Record",
  "isJson",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_self, _isJson_1);
  }, ["self"]),
  "{ :self | allSatisfy(self,isJson:/1) }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
  "isLiteral",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_self, _isLiteral_1);
  }, ["self"]),
  "{ :self | allSatisfy(self,isLiteral:/1) }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
  "keyType",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return "String";
  }, ["unused"]),
  "{ :unused | 'String' }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
  "keys",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Object.keys(_self);
  }, ["self"]),
  "{ :self | <primitive: return Object.keys(_self);>\n }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
  "keysAndValuesDo",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Primitive */
    Object.entries(_self).forEach(function (entry) {
      _aBlock_2(entry[0], entry[1]);
    });
    return null;
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | <primitive: Object.entries(_self).forEach(function(entry) {\n\t\t\t_aBlock_2(entry[0], entry[1]);\n\t\t});\n\t\treturn null;>\n }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
  "propertyRead",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self[_aString];
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: return _self[_aString];>\n }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
  "propertyWrite",
  ["self", "aString", "anObject"],
  sl.annotateFunction(function (_self, _aString, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self[_aString] = _anObject;
  }, ["self", "aString", "anObject"]),
  "{ :self :aString :anObject | <primitive: return _self[_aString] = _anObject;>\n }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
  "removeKeyIfAbsent",
  ["self", "key", "aBlock"],
  sl.annotateFunction(function (_self, _key, _aBlock) {
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
  }, ["self", "key", "aBlock"]),
  "{ :self :key :aBlock | <primitive: if(Object.hasOwn(_self, _key)) {\n\t\t\tconst removed = _self[_key];\n\t\t\tdelete _self[_key];\n\t\t\treturn removed;\n\t\t} else {\n\t\t\treturn _aBlock();\n\t\t}>\n }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Object.keys(_self).length;
  }, ["self"]),
  "{ :self | <primitive: return Object.keys(_self).length;>\n }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
  "species",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Record_0;
  }, ["self"]),
  "{ :self | Record:/0 }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
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
      "(:)",
      "(",
      ")",
      _identity_1,
      ": ",
      _storeString_1,
    );
  }, ["self"]),
  "{ :self | storeStringLiteral(self,'(:)', '(', ')', identity:/1, ': ', storeString:/1) }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
  "uncheckedAt",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self[_key];
  }, ["self", "key"]),
  "{ :self :key | <primitive: return _self[_key];>\n }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
  "uncheckedAtPut",
  ["self", "key", "value"],
  sl.annotateFunction(function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
      throw new Error(errorMessage);
    } /* Primitive */
    _self[_key] = _value;
    return _value;
  }, ["self", "key", "value"]),
  "{ :self :key :value | <primitive: _self[_key] = _value;\n\t\treturn _value;>\n }",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
  "values",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Object.values(_self);
  }, ["self"]),
  "{ :self | <primitive: return Object.values(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Record",
  "asRecord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Record_1(_self);
  }, ["self"]),
  "{ :self | Record(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Record",
  "listToRecord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _allSatisfy_2(
        _self,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _ampersand_2(
            _isList_1(_each),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _ampersand_2(
                _equalsSign_2(_size_1(_each), 2),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _isString_1(_at_2(_each, 1));
                }, []),
              );
            }, []),
          );
        }, ["each"]),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedListToRecord_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "List>>listToRecord");
      }, []),
    );
  }, ["self"]),
  "{ :self | if(allSatisfy(self, { :each | &(isList(each), { &(=(size(each), 2), { isString(at(each,1)) }) }) }), { uncheckedListToRecord(self) }, { error(self,'List>>listToRecord') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Record",
  "Record",
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
        return _listToRecord_1(_collect_2(_self, _asList_1));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _listToRecord_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isAssociationList(self), { listToRecord(collect(self,asList:/1)) }, { listToRecord(self) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Record",
  "uncheckedListToRecord",
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

sl.extendTypeOrTraitWithMethod(
  "Void",
  "Record",
  "Record",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return Object.create(null);
  }, []),
  "{ <primitive: return Object.create(null);>\n }",
);
