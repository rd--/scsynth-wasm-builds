sl.addType(
  true,
  "Float32Array",
  "Float32Array",
  [
    "@Object",
    "@New",
    "@Copy",
    "@Store",
    "@Equal",
    "@Compare",
    "@Do",
    "@At",
    "@Indices",
    "@Put",
    "@Collect",
    "@Collection",
    "@Sequence",
    "@PrimitiveArray",
  ],
  [],
);

sl.copyTraitMethodsToType(
  "@Object",
  "Float32Array",
);

sl.copyTraitMethodsToType(
  "@New",
  "Float32Array",
);

sl.copyTraitMethodsToType(
  "@Copy",
  "Float32Array",
);

sl.copyTraitMethodsToType(
  "@Store",
  "Float32Array",
);

sl.copyTraitMethodsToType(
  "@Equal",
  "Float32Array",
);

sl.copyTraitMethodsToType(
  "@Compare",
  "Float32Array",
);

sl.copyTraitMethodsToType(
  "@Do",
  "Float32Array",
);

sl.copyTraitMethodsToType(
  "@At",
  "Float32Array",
);

sl.copyTraitMethodsToType(
  "@Indices",
  "Float32Array",
);

sl.copyTraitMethodsToType(
  "@Put",
  "Float32Array",
);

sl.copyTraitMethodsToType(
  "@Collect",
  "Float32Array",
);

sl.copyTraitMethodsToType(
  "@Collection",
  "Float32Array",
);

sl.copyTraitMethodsToType(
  "@Sequence",
  "Float32Array",
);

sl.copyTraitMethodsToType(
  "@PrimitiveArray",
  "Float32Array",
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
  "putInPlace",
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
    return _errorInvalidIndex_3(_self, "put!", _index);
  }, ["self", "index", "aFloat"]),
  "{ :self :index :aFloat |\n\t\t<primitive:\n\t\tif(sl.arrayCheckIndex(_self, _index) && sl.isSmallFloat(_aFloat)) {\n\t\t\t_self[_index - 1] = _aFloat;\n\t\t\treturn _aFloat;\n\t\t}\n\t\t>\n\t\tself.errorInvalidIndex('put!', index)\n\t}",
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
  "{ :self |\n\t\t<primitive: return new Float32Array(_self);>\n\t}",
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
    return _zeroFloat32Array_1;
  }, ["self"]),
  "{ :self |\n\t\tzeroFloat32Array/1\n\t}",
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
  ["n", "x"],
  sl.annotateFunction(function (_n, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _x";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Float32Array(_n).fill(_x);
  }, ["n", "x"]),
  "{ :n :x |\n\t\t<primitive: return new Float32Array(_n).fill(_x);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Float32Array",
  "constantFloat64Array",
  ["n", "x"],
  sl.annotateFunction(function (_n, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _x";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Float32Array(_n).fill(_x);
  }, ["n", "x"]),
  "{ :n :x |\n\t\t<primitive: return new Float32Array(_n).fill(_x);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Float32Array",
  "zeroFloat32Array",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _Float32Array_2(_n, 0.0);
  }, ["n"]),
  "{ :n |\n\t\tFloat32Array(n, 0.0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "ArrayBuffer",
  "Float32Array",
  "arrayBufferToFloat32Array",
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
  "Float32Array",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atVectorOrElementwise_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isSmallFloatVector_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _uncheckedFloat32Array_1(_each);
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
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.atVectorOrElementwise { :each |\n\t\t\teach.isSmallFloatVector.if {\n\t\t\t\teach.uncheckedFloat32Array\n\t\t\t} {\n\t\t\t\tself.error('List>>Float32Array')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Float32Array",
  "listToFloat32Array",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atVectorOrElementwise_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isSmallFloatVector_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _uncheckedFloat32Array_1(_each);
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
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.atVectorOrElementwise { :each |\n\t\t\teach.isSmallFloatVector.if {\n\t\t\t\teach.uncheckedFloat32Array\n\t\t\t} {\n\t\t\t\tself.error('List>>Float32Array')\n\t\t\t}\n\t\t}\n\t}",
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
  "Float32Array",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Float32Array_1(_List_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tFloat32Array(self.List)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Float32Array",
  "rangeToFloat32Array",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Float32Array_1(_List_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tFloat32Array(self.List)\n\t}",
);
