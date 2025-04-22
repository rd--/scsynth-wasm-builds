sl.addType(
  true,
  "Float64Array",
  "Float64Array",
  [
    "Object",
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
  "{ :self :index :aFloat | <primitive: if(sl.arrayCheckIndex(_self, _index) && sl.isSmallFloat(_aFloat)) {\n\t\t\t_self[_index - 1] = _aFloat;\n\t\t\treturn _aFloat;\n\t\t}>\nerrorInvalidIndex(self,'atPut', index) }",
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
  "{ :self :littleEndian | <primitive: return sc.encodeFloat64Array(_self, _littleEndian);>\n }",
);

sl.addMethodToExistingType(
  "Float64Array",
  "Float64Array",
  "shallowCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Float64Array(_self);
  }, ["self"]),
  "{ :self | <primitive: return new Float64Array(_self);>\n }",
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
  "{ :self | Float64Array:/1 }",
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
  "{ :self | 'Float64' }",
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
  "{ :self | <primitive: return new Float64Array(_self);>\n }",
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
  "{ :self | Float64Array(self) }",
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
  "{ :self | <primitive: return new Float64Array(_self);>\n }",
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
  "{ :self | if(isSmallFloatVector(self), { basicFloat64Array(self) }, { error(self,'List>>asFloat64Array: invalid') }) }",
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
  "{ :self | basicFloat64Array(asList(self)) }",
);
