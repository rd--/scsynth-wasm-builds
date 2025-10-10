sl.addType(
  true,
  "Float64Array",
  "Float64Array",
  [
    "Object",
    "Equatable",
    "Comparable",
    "Iterable",
    "Indexable",
    "Collection",
    "Sequenceable",
    "PrimitiveSequence",
  ],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Float64Array",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Float64Array",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "Float64Array",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "Float64Array",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "Float64Array",
);

sl.copyTraitMethodsToType(
  "Collection",
  "Float64Array",
);

sl.copyTraitMethodsToType(
  "Sequenceable",
  "Float64Array",
);

sl.copyTraitMethodsToType(
  "PrimitiveSequence",
  "Float64Array",
);

sl.addMethodToExistingType(
  "Float64Array",
  "Float64Array",
  "atPut",
  ["self", "index", "aFloat"],
  sl.annotateFunction(function (_self, _index, _aFloat) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _aFloat";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.arrayCheckIndex(_self, _index) && sl.isSmallFloat(_aFloat)) {
      _self[_index - 1] = _aFloat;
      return _aFloat;
    }
    /* Statements */
    return _errorInvalidIndex_3(_self, "atPut", _index);
  }, ["self", "index", "aFloat"]),
  "{ :self :index :aFloat |\n\t\t<primitive:\n\t\tif(sl.arrayCheckIndex(_self, _index) && sl.isSmallFloat(_aFloat)) {\n\t\t\t_self[_index - 1] = _aFloat;\n\t\t\treturn _aFloat;\n\t\t}\n\t\t>\n\t\tself.errorInvalidIndex('atPut', index)\n\t}",
);

sl.addMethodToExistingType(
  "Float64Array",
  "Float64Array",
  "copy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Float64Array(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return new Float64Array(_self);>\n\t}",
);

sl.addMethodToExistingType(
  "Float64Array",
  "Float64Array",
  "encode",
  ["self", "littleEndian"],
  sl.annotateFunction(function (_self, _littleEndian) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _littleEndian";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.encodeFloat64Array(_self, _littleEndian);
  }, ["self", "littleEndian"]),
  "{ :self :littleEndian |\n\t\t<primitive: return sc.encodeFloat64Array(_self, _littleEndian);>\n\t}",
);

sl.addMethodToExistingType(
  "Float64Array",
  "Float64Array",
  "species",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Float64Array_1;
  }, ["self"]),
  "{ :self |\n\t\tFloat64Array:/1\n\t}",
);

sl.addMethodToExistingType(
  "Float64Array",
  "Float64Array",
  "storageType",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return "Float64";
  }, ["self"]),
  "{ :self |\n\t\t'Float64'\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Float64Array",
  "Float64Array",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Float64Array(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return new Float64Array(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Float64Array",
  "asFloat64Array",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Float64Array_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tFloat64Array(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Float64Array",
  "basicFloat64Array",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Float64Array(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return new Float64Array(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Float64Array",
  "Float64Array",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isSmallFloatVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _basicFloat64Array_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "List>>asFloat64Array: invalid");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isSmallFloatVector.if {\n\t\t\tself.basicFloat64Array\n\t\t} {\n\t\t\tself.error('List>>asFloat64Array: invalid')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Float64Array",
  "asFloat64Array",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _basicFloat64Array_1(_asList_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asList.basicFloat64Array\n\t}",
);
