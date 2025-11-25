sl.addType(
  true,
  "Float32Array",
  "Float32Array",
  [
    "Object",
    "Equatable",
    "Comparable",
    "Iterable",
    "Indexable",
    "Collection",
    "Sequenceable",
    "PrimitiveArray",
  ],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Float32Array",
);

sl.copyTraitMethodsToType(
  "Equatable",
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
  "PrimitiveArray",
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
  "{ :self :index :aFloat |\n\t\t<primitive:\n\t\tif(sl.arrayCheckIndex(_self, _index) && sl.isSmallFloat(_aFloat)) {\n\t\t\t_self[_index - 1] = _aFloat;\n\t\t\treturn _aFloat;\n\t\t}\n\t\t>\n\t\tself.errorInvalidIndex('atPut', index)\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.buffer;>\n\t}",
);

sl.addMethodToExistingType(
  "Float32Array",
  "Float32Array",
  "copy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Float32Array(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return new Float32Array(_self);>\n\t}",
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
  "{ :self :littleEndian |\n\t\t<primitive: return sc.encodeFloat32Array(_self, _littleEndian);>\n\t}",
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
  "{ :self |\n\t\tFloat32Array:/1\n\t}",
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
  "{ :self |\n\t\t'Float32'\n\t}",
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
  "{ :self |\n\t\t<primitive: return new Float32Array(_self);>\n\t}",
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
  "{ :self :byteOffset :size |\n\t\t<primitive: return new Float32Array(_self, _byteOffset, _size);>\n\t}",
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
    return _Float32Array_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tFloat32Array(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Float32Array",
  "Float32Array",
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
        return _uncheckedFloat32Array_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "List>>Float32Array");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isSmallFloatVector.if {\n\t\t\tself.uncheckedFloat32Array\n\t\t} {\n\t\t\tself.error('List>>Float32Array')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Float32Array",
  "uncheckedFloat32Array",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Float32Array(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return new Float32Array(_self);>\n\t}",
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
    return _Float32Array_1(_asList_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tFloat32Array(self.asList)\n\t}",
);
