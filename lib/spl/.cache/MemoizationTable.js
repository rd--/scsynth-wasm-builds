sl.addType(
  false,
  "MemoizationTable",
  "MemoizationTable",
  ["Object", "Iterable", "Collection"],
  ["block", "table"],
);

sl.copyTraitMethodsToType(
  "Object",
  "MemoizationTable",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "MemoizationTable",
);

sl.copyTraitMethodsToType(
  "Collection",
  "MemoizationTable",
);

sl.addMethodToExistingType(
  "MemoizationTable",
  "MemoizationTable",
  "at",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsent_3(
      _table_1(_self),
      _key,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _value = _value_2(_block_1(_self), _key);
        /* Statements */
        _atPut_3(_table_1(_self), _key, _value);
        return _value;
      }, []),
    );
  }, ["self", "key"]),
  "{ :self :key |\n\t\tself.table.atIfAbsent(key) {\n\t\t\tlet value = self.block.value(key);\n\t\t\tself.table.atPut(key, value);\n\t\t\tvalue\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "MemoizationTable",
  "MemoizationTable",
  "atAll",
  ["self", "keys"],
  sl.annotateFunction(function (_self, _keys) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _keys";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _keys,
      sl.annotateFunction(function (_key) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _key";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_self, _key);
      }, ["key"]),
    );
  }, ["self", "keys"]),
  "{ :self :keys |\n\t\tkeys.collect { :key |\n\t\t\tself.at(key)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "MemoizationTable",
  "MemoizationTable",
  "atAllPath",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_operand, 1);
    let _keys = _at_2(__SplVar1, 1);
    /* Statements */
    return _atAll_2(_self, _keys);
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tlet [keys] = operand;\n\t\tself.atAll(keys)\n\t}",
);

sl.addMethodToExistingType(
  "MemoizationTable",
  "MemoizationTable",
  "do",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_table_1(_self), _aBlock_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.table.do(aBlock:/1)\n\t}",
);

sl.addMethodToExistingType(
  "MemoizationTable",
  "MemoizationTable",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_table_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.table.size\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "MemoizationTable",
  "Dictionary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _MemoizationTable_2(_self, _Dictionary_0());
  }, ["self"]),
  "{ :self |\n\t\tMemoizationTable(\n\t\t\tself,\n\t\t\tDictionary()\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "MemoizationTable",
  "Map",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _MemoizationTable_2(_self, _Map_0());
  }, ["self"]),
  "{ :self |\n\t\tMemoizationTable(\n\t\t\tself,\n\t\t\tMap()\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "MemoizationTable",
  "MemoizationTable",
  ["self", "table"],
  sl.annotateFunction(function (_self, _table) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _table";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newMemoizationTable_0(), _self, _table);
  }, ["self", "table"]),
  "{ :self :table |\n\t\tnewMemoizationTable().initializeSlots(\n\t\t\tself,\n\t\t\ttable\n\t\t)\n\t}",
);
