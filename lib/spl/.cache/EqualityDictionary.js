sl.addType(
  false,
  "Dictionary",
  "EqualityDictionary",
  [
    "@Object",
    "@Copy",
    "@Store",
    "@Equal",
    "@Do",
    "@At",
    "@Indices",
    "@Put",
    "@Collect",
    "@Collection",
    "@Add",
    "@Remove",
    "@Dictionary",
  ],
  ["keys", "values", "comparator"],
);

sl.copyTraitMethodsToType(
  "@Object",
  "Dictionary",
);

sl.copyTraitMethodsToType(
  "@Copy",
  "Dictionary",
);

sl.copyTraitMethodsToType(
  "@Store",
  "Dictionary",
);

sl.copyTraitMethodsToType(
  "@Equal",
  "Dictionary",
);

sl.copyTraitMethodsToType(
  "@Do",
  "Dictionary",
);

sl.copyTraitMethodsToType(
  "@At",
  "Dictionary",
);

sl.copyTraitMethodsToType(
  "@Indices",
  "Dictionary",
);

sl.copyTraitMethodsToType(
  "@Put",
  "Dictionary",
);

sl.copyTraitMethodsToType(
  "@Collect",
  "Dictionary",
);

sl.copyTraitMethodsToType(
  "@Collection",
  "Dictionary",
);

sl.copyTraitMethodsToType(
  "@Add",
  "Dictionary",
);

sl.copyTraitMethodsToType(
  "@Remove",
  "Dictionary",
);

sl.copyTraitMethodsToType(
  "@Dictionary",
  "Dictionary",
);

sl.addMethodToExistingType(
  "Dictionary",
  "EqualityDictionary",
  "atIfAbsent",
  ["self", "key", "ifAbsent/0"],
  sl.annotateFunction(function (_self, _key, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Statements */
    let _index = _indexOfBy_3(_keys_1(_self), _key, _comparator_1(_self));
    return _if_3(
      _equalsSign_2(_index, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifAbsent_0();
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_values_1(_self), _index);
      }, []),
    );
  }, ["self", "key", "ifAbsent/0"]),
  "{ :self :key :ifAbsent/0 |\n\t\tlet index = self.keys.indexOfBy(key, self.comparator);\n\t\t(index = 0).if {\n\t\t\tifAbsent()\n\t\t} {\n\t\t\tself.values[index]\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Dictionary",
  "EqualityDictionary",
  "keysAndValuesDo",
  ["self", "aBlock/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    let _keys = _keys_1(_self);
    let _values = _values_1(_self);
    let _size = _size_1(_keys);
    return _toDo_3(
      1,
      _size,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_at_2(_keys, _index), _at_2(_values, _index));
      }, ["index"]),
    );
  }, ["self", "aBlock/2"]),
  "{ :self :aBlock/2 |\n\t\tlet keys = self.keys;\n\t\tlet values = self.values;\n\t\tlet size = keys.size;\n\t\t1.toDo(size) { :index |\n\t\t\taBlock(keys[index], values[index])\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Dictionary",
  "EqualityDictionary",
  "postCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _keysMutateInPlace_2(_self, _copy_1(_keys_1(_self)));
    return _valuesMutateInPlace_2(_self, _copy_1(_values_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.keys := self.keys.copy;\n\t\tself.values := self.values.copy\n\t}",
);

sl.addMethodToExistingType(
  "Dictionary",
  "EqualityDictionary",
  "putInPlace",
  ["self", "key", "value"],
  sl.annotateFunction(function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
      throw new Error(errorMessage);
    } /* Statements */
    let _index = _indexOfBy_3(_keys_1(_self), _key, _comparator_1(_self));
    _if_3(
      _equalsSign_2(_index, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _addInPlace_2(_keys_1(_self), _key);
        return _addInPlace_2(_values_1(_self), _value);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _putInPlace_3(_values_1(_self), _index, _value);
      }, []),
    );
    return _value;
  }, ["self", "key", "value"]),
  "{ :self :key :value |\n\t\tlet index = self.keys.indexOfBy(key, self.comparator);\n\t\t(index = 0).if {\n\t\t\tself.keys.add!(key);\n\t\t\tself.values.add!(value)\n\t\t} {\n\t\t\tself.values[index] := value\n\t\t};\n\t\tvalue\n\t}",
);

sl.addMethodToExistingType(
  "Dictionary",
  "EqualityDictionary",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_keys_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.keys.size\n\t}",
);

sl.addMethodToExistingType(
  "Dictionary",
  "EqualityDictionary",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("Dictionary(%)", [_associations_1(_self)]);
  }, ["self"]),
  "{ :self |\n\t\t'Dictionary(%)'.format([self.associations])\n\t}",
);

sl.addMethodToExistingType(
  "Dictionary",
  "EqualityDictionary",
  "storeStringLiteral",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringLiteral_7(
      _self,
      "[| |]",
      "[|",
      "|]",
      _storeString_1,
      " -> ",
      _storeString_1,
    );
  }, ["self"]),
  "{ :self |\n\t\tself.storeStringLiteral(\n\t\t\t'[| |]',\n\t\t\t'[|', '|]',\n\t\t\tstoreString/1, ' -> ', storeString/1\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "EqualityDictionary",
  "Dictionary",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newDictionary_0(), [], [], _isEqual_2);
  }, []),
  "{\n\t\tnewDictionary().initializeSlots([], [], isEqual/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "EqualityDictionary",
  "Dictionary",
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
        return _Dictionary_0();
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
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
            return _listToDictionary_1(_collect_2(_self, _keyAndValue_1));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _listToDictionary_1(_self);
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isEmpty.if {\n\t\t\tDictionary()\n\t\t} {\n\t\t\tself.isAssociationList.if {\n\t\t\t\tself.collect(\n\t\t\t\t\tkeyAndValue/1\n\t\t\t\t).listToDictionary\n\t\t\t} {\n\t\t\t\tself.listToDictionary\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "EqualityDictionary",
  "listToDictionary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let __SplVar1 = _assertIsOfSize_2(_dimensions_2(_self, 2), 2);
    let __SplUnused3 = _at_2(__SplVar1, 1);
    let _m = _at_2(__SplVar1, 2);
    return _if_3(
      _equalsSign_2(_m, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        let __SplVar2 = _assertIsOfSize_2(_transpose_1(_self), 2);
        let _keys = _at_2(__SplVar2, 1);
        let _values = _at_2(__SplVar2, 2);
        let _answer = _Dictionary_0();
        _keysMutateInPlace_2(_answer, _keys);
        _valuesMutateInPlace_2(_answer, _values);
        return _answer;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "List>>listToDictionary");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [_, m] = self.dimensions(2);\n\t\t(m = 2).if {\n\t\t\tlet [keys, values] = self.transpose;\n\t\t\tlet answer = Dictionary();\n\t\t\tanswer.keys := keys;\n\t\t\tanswer.values := values;\n\t\t\tanswer\n\t\t} {\n\t\t\tself.error('List>>listToDictionary')\n\t\t}\n\t}",
);
