sl.addType(
  false,
  "TypedDictionary",
  "TypedDictionary",
  [
    "Object",
    "Equatable",
    "Iterable",
    "Indexable",
    "Collection",
    "Extensible",
    "Removable",
    "Dictionary",
  ],
  ["contents", "keyType"],
);

sl.copyTraitMethodsToType(
  "Object",
  "TypedDictionary",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "TypedDictionary",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "TypedDictionary",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "TypedDictionary",
);

sl.copyTraitMethodsToType(
  "Collection",
  "TypedDictionary",
);

sl.copyTraitMethodsToType(
  "Extensible",
  "TypedDictionary",
);

sl.copyTraitMethodsToType(
  "Removable",
  "TypedDictionary",
);

sl.copyTraitMethodsToType(
  "Dictionary",
  "TypedDictionary",
);

sl.addMethodToExistingType(
  "TypedDictionary",
  "TypedDictionary",
  "at",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), _typeCheckKey_2(_self, _key));
  }, ["self", "key"]),
  "{ :self :key |\n\t\tself.contents.at(self.typeCheckKey(key))\n\t}",
);

sl.addMethodToExistingType(
  "TypedDictionary",
  "TypedDictionary",
  "atPut",
  ["self", "key", "value"],
  sl.annotateFunction(function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
      throw new Error(errorMessage);
    } /* Statements */
    return _atPut_3(_contents_1(_self), _typeCheckKey_2(_self, _key), _value);
  }, ["self", "key", "value"]),
  "{ :self :key :value |\n\t\tself.contents.atPut(self.typeCheckKey(key), value)\n\t}",
);

sl.addMethodToExistingType(
  "TypedDictionary",
  "TypedDictionary",
  "comparator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _comparator_1(_contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.comparator\n\t}",
);

sl.addMethodToExistingType(
  "TypedDictionary",
  "TypedDictionary",
  "indices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _indices_1(_contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.indices\n\t}",
);

sl.addMethodToExistingType(
  "TypedDictionary",
  "TypedDictionary",
  "keys",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _keys_1(_contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.keys\n\t}",
);

sl.addMethodToExistingType(
  "TypedDictionary",
  "TypedDictionary",
  "keysAndValuesDo",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _keysAndValuesDo_2(_contents_1(_self), _aBlock_2);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 |\n\t\tself.contents.keysAndValuesDo(aBlock:/2)\n\t}",
);

sl.addMethodToExistingType(
  "TypedDictionary",
  "TypedDictionary",
  "typeCheckKey",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_typeOf_1(_key), _keyType_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _key;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_3(_self, "invalid key", _key);
      }, []),
    );
  }, ["self", "key"]),
  "{ :self :key |\n\t\t(key.typeOf = self.keyType).if {\n\t\t\tkey\n\t\t} {\n\t\t\tself.error('invalid key', key)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "TypedDictionary",
  "TypedDictionary",
  "do",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_contents_1(_self), _aBlock_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.contents.do(aBlock:/1)\n\t}",
);

sl.addMethodToExistingType(
  "TypedDictionary",
  "TypedDictionary",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.size\n\t}",
);

sl.addMethodToExistingType(
  "TypedDictionary",
  "TypedDictionary",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("%.asTypedDictionary(%)", [
      _associations_1(_contents_1(_self)),
      _storeString_1(_keyType_1(_self)),
    ]);
  }, ["self"]),
  "{ :self |\n\t\t'%.asTypedDictionary(%)'.format(\n\t\t\t[\n\t\t\t\tself.contents.associations,\n\t\t\t\tself.keyType.storeString\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "TypedDictionary",
  "TypedDictionary",
  "values",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _values_1(_contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.values\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "TypedDictionary",
  "TypedDictionary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _contents = _which_1([
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_self, "String");
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _Record_0();
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isImmediateType_1(_self);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _Map_0();
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return true;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _Dictionary_0();
        }, []),
      ),
    ]);
    /* Statements */
    return _initializeSlots_3(_newTypedDictionary_0(), _contents, _self);
  }, ["self"]),
  "{ :self |\n\t\tlet contents = [\n\t\t\t{ self = 'String' } -> { Record() },\n\t\t\t{ self.isImmediateType } -> { Map() },\n\t\t\t{ true } -> { Dictionary() }\n\t\t].which;\n\t\tnewTypedDictionary().initializeSlots(contents, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "TypedDictionary",
  "asTypedDictionary",
  ["self", "typeName"],
  sl.annotateFunction(function (_self, _typeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _typeName";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _TypedDictionary_1(_typeName);
    /* Statements */
    _addAll_2(_answer, _self);
    return _answer;
  }, ["self", "typeName"]),
  "{ :self :typeName |\n\t\tlet answer = TypedDictionary(typeName);\n\t\tanswer.addAll(self);\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "TypedDictionary",
  "asTypedDictionary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asTypedDictionary_2(_self, _keyType_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asTypedDictionary(self.keyType)\n\t}",
);
