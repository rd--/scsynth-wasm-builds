sl.addType(
  true,
  "Float32Array",
  "Float32Array",
  [
    "Object",
    "Iterable",
    "Indexable",
    "Collection",
    "Sequence",
    "PrimitiveSequence",
  ],
  [],
);

sl.copyTraitToType(
  "Object",
  "Float32Array",
);

sl.copyTraitToType(
  "Iterable",
  "Float32Array",
);

sl.copyTraitToType(
  "Indexable",
  "Float32Array",
);

sl.copyTraitToType(
  "Collection",
  "Float32Array",
);

sl.copyTraitToType(
  "Sequence",
  "Float32Array",
);

sl.copyTraitToType(
  "PrimitiveSequence",
  "Float32Array",
);

sl.addMethod(
  "Float32Array",
  "Float32Array",
  "atPut",
  ["self", "index", "aFloat"],
  function (_self, _index, _aFloat) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _aFloat";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    if (sl.arrayCheckIndex(_self, _index) && sl.isSmallFloat(_aFloat)) {
      _self[_index - 1] = _aFloat;
      return _aFloat;
    }
    /* Statements */
    return _errorInvalidIndex_3(_self, "atPut", _index);
  },
  "{ :self :index :aFloat |\n\t\t<primitive:\n\t\tif(sl.arrayCheckIndex(_self, _index) && sl.isSmallFloat(_aFloat)) {\n\t\t\t_self[_index - 1] = _aFloat;\n\t\t\treturn _aFloat;\n\t\t}\n\t\t>\n\t\tself.errorInvalidIndex('atPut', index)\n\t}",
);

sl.addMethod(
  "Float32Array",
  "Float32Array",
  "shallowCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return new Float32Array(_self);
  },
  "{ :self |\n\t\t<primitive: return new Float32Array(_self);>\n\t}",
);

sl.addMethod(
  "Float32Array",
  "Float32Array",
  "species",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Float32Array_1;
  },
  "{ :self |\n\t\tFloat32Array:/1\n\t}",
);

sl.addMethod(
  "List",
  "Float32Array",
  "asFloat32Array",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _fillFrom_2(_Float32Array_1(_size_1(_self)), _self);
  },
  "{ :self |\n\t\tFloat32Array(self.size).fillFrom(self)\n\t}",
);

sl.addMethod(
  "Range",
  "Float32Array",
  "asFloat32Array",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _fillFrom_2(_Float32Array_1(_size_1(_self)), _self);
  },
  "{ :self |\n\t\tFloat32Array(self.size).fillFrom(self)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Float32Array",
  "Float32Array",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return new Float32Array(_self);
  },
  "{ :self |\n\t\t<primitive: return new Float32Array(_self);>\n\t}",
);
