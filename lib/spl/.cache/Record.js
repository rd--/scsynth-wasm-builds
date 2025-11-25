sl.addType(
  true,
  "Record",
  "Record",
  [
    "Object",
    "Storeable",
    "Equatable",
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
  "Storeable",
  "Record",
);

sl.copyTraitMethodsToType(
  "Equatable",
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
  "{ :self |\n\t\tself\n\t}",
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
  "{ :self :aString :ifAbsent:/0 |\n\t\t<primitive:\n\t\tif(Object.hasOwn(_self, _aString)) {\n\t\t\treturn _self[_aString];\n\t\t}\n\t\treturn _ifAbsent_0();\n\t\t>\n\t}",
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
  "{ :self :aString :anObject |\n\t\t<primitive:\n\t\tif(typeof _aString === 'string') {\n\t\t\t_self[_aString] = _anObject;\n\t\t\treturn _anObject;\n\t\t}\n\t\t>\n\t\tself.error('atPut key not a string: ' ++ aString.typeOf)\n\t}",
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
  "{ :self |\n\t\t==\n\t}",
);

sl.addMethodToExistingType(
  "Record",
  "Record",
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
  "{ :self :key |\n\t\t<primitive: return Object.hasOwn(_self, _key);>\n\t}",
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
  "{ :self |\n\t\tself.keys\n\t}",
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
  "{ :self |\n\t\tself.allSatisfy(isJson:/1)\n\t}",
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
  "{ :self |\n\t\tself.allSatisfy(isLiteral:/1)\n\t}",
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
  "{ :unused |\n\t\t'String'\n\t}",
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
  "{ :self |\n\t\t<primitive: return Object.keys(_self);>\n\t}",
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
  "{ :self :aBlock:/2 |\n\t\t<primitive:\n\t\tObject.entries(_self).forEach(function(entry) {\n\t\t\t_aBlock_2(entry[0], entry[1]);\n\t\t});\n\t\treturn null;\n\t\t>\n\t}",
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
  "{ :self :aString |\n\t\t<primitive: return _self[_aString];>\n\t}",
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
  "{ :self :aString :anObject |\n\t\t<primitive: return _self[_aString] = _anObject;>\n\t}",
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
  "{ :self :key :aBlock |\n\t\t<primitive:\n\t\tif(Object.hasOwn(_self, _key)) {\n\t\t\tconst removed = _self[_key];\n\t\t\tdelete _self[_key];\n\t\t\treturn removed;\n\t\t} else {\n\t\t\treturn _aBlock();\n\t\t}\n\t\t>\n\t}",
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
  "{ :self |\n\t\t<primitive: return Object.keys(_self).length;>\n\t}",
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
  "{ :self |\n\t\tRecord:/0\n\t}",
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
  "{ :self |\n\t\tself.storeStringLiteral(\n\t\t\t'(:)',\n\t\t\t'(', ')',\n\t\t\tidentity:/1, ': ', storeString:/1\n\t\t)\n\t\t/*self.isEmpty.if {\n\t\t\t'(:)'\n\t\t} {\n\t\t\t'(%)'.format(\n\t\t\t\t[\n\t\t\t\t\tself.associations.collect { :each |\n\t\t\t\t\t\t'%: %'.format(\n\t\t\t\t\t\t\t[\n\t\t\t\t\t\t\t\teach.key,\n\t\t\t\t\t\t\t\teach.value.storeString\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t)\n\t\t\t\t\t}.commaSeparated\n\t\t\t\t]\n\t\t\t)\n\t\t}*/\n\t}",
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
  "{ :self :key |\n\t\t<primitive: return _self[_key];>\n\t}",
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
  "{ :self :key :value |\n\t\t<primitive:\n\t\t_self[_key] = _value;\n\t\treturn _value;\n\t\t>\n\t}",
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
  "{ :self |\n\t\t<primitive: return Object.values(_self);>\n\t}",
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
  "{ :self |\n\t\tRecord(self)\n\t}",
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
  "{ :self |\n\t\tself.allSatisfy { :each |\n\t\t\teach.isList & {\n\t\t\t\teach.size = 2 & {\n\t\t\t\t\teach.at(1).isString\n\t\t\t\t}\n\t\t\t}\n\t\t}.if {\n\t\t\tself.uncheckedListToRecord\n\t\t} {\n\t\t\tself.error('List>>listToRecord')\n\t\t}\n\t}",
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
        return _listToRecord_1(_collect_2(_self, _keyValue_1));
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
  "{ :self |\n\t\tself.isAssociationList.if {\n\t\t\tself.collect(keyValue:/1).listToRecord\n\t\t} {\n\t\t\tself.listToRecord\n\t\t}\n\t}",
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
  "{ :self |\n\t\t<primitive: return Object.fromEntries(_self);>\n\t}",
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
  "{\n\t\t<primitive: return Object.create(null);>\n\t}",
);
