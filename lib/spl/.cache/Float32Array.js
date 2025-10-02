sl.addType(
  true,
  "Float32Array",
  "Float32Array",
  [
    "Object",
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
  "Float32Array",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "Float32Array",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "Float32Array",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "Float32Array",
);

sl.copyTraitMethodsToType(
  "Collection",
  "Float32Array",
);

sl.copyTraitMethodsToType(
  "Sequenceable",
  "Float32Array",
);

sl.copyTraitMethodsToType(
  "PrimitiveSequence",
  "Float32Array",
);

sl.addMethodToExistingType(
  "Float32Array",
  "Float32Array",
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
  "Float32Array",
  "Float32Array",
  "buffer",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.buffer;
  }, ["self"]),
  "{ :self | <primitive: return _self.buffer;>\n }",
);

sl.addMethodToExistingType(
  "Float32Array",
  "Float32Array",
  "encode",
  ["self", "littleEndian"],
  sl.annotateFunction(function (_self, _littleEndian) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _littleEndian";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.encodeFloat32Array(_self, _littleEndian);
  }, ["self", "littleEndian"]),
  "{ :self :littleEndian | <primitive: return sc.encodeFloat32Array(_self, _littleEndian);>\n }",
);

sl.addMethodToExistingType(
  "Float32Array",
  "Float32Array",
  "shallowCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Float32Array(_self);
  }, ["self"]),
  "{ :self | <primitive: return new Float32Array(_self);>\n }",
);

sl.addMethodToExistingType(
  "Float32Array",
  "Float32Array",
  "species",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Float32Array_1;
  }, ["self"]),
  "{ :self | Float32Array:/1 }",
);

sl.addMethodToExistingType(
  "Float32Array",
  "Float32Array",
  "storageType",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return "Float32";
  }, ["self"]),
  "{ :self | 'Float32' }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Float32Array",
  "Float32Array",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Float32Array(_self);
  }, ["self"]),
  "{ :self | <primitive: return new Float32Array(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "ArrayBuffer",
  "Float32Array",
  "Float32Array",
  ["self", "byteOffset", "size"],
  sl.annotateFunction(function (_self, _byteOffset, _size) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _byteOffset, _size";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Float32Array(_self, _byteOffset, _size);
  }, ["self", "byteOffset", "size"]),
  "{ :self :byteOffset :size | <primitive: return new Float32Array(_self, _byteOffset, _size);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Float32Array",
  "basicAsFloat32Array",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Float32Array(_self);
  }, ["self"]),
  "{ :self | <primitive: return new Float32Array(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Float32Array",
  "asFloat32Array",
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
        return _basicAsFloat32Array_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "List>>asFloat32Array: invalid");
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isSmallFloatVector(self), { basicAsFloat32Array(self) }, { error(self,'List>>asFloat32Array: invalid') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Float32Array",
  "asFloat32Array",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _basicAsFloat32Array_1(_asList_1(_self));
  }, ["self"]),
  "{ :self | basicAsFloat32Array(asList(self)) }",
);
