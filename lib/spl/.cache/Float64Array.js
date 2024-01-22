sl.addType(
  true,
  "Float64Array",
  "Float64Array",
  ["Object", "Iterable", "Indexable", "Collection", "Sequenceable", "Arrayed"],
  [],
);

sl.copyTraitToType(
  "Object",
  "Float64Array",
);

sl.copyTraitToType(
  "Iterable",
  "Float64Array",
);

sl.copyTraitToType(
  "Indexable",
  "Float64Array",
);

sl.copyTraitToType(
  "Collection",
  "Float64Array",
);

sl.copyTraitToType(
  "Sequenceable",
  "Float64Array",
);

sl.copyTraitToType(
  "Arrayed",
  "Float64Array",
);

sl.addMethod(
  "Float64Array",
  "Float64Array",
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
  "Float64Array",
  "Float64Array",
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
    return new Float64Array(_self);
  },
  "{ :self |\n\t\t<primitive: return new Float64Array(_self);>\n\t}",
);

sl.addMethod(
  "Float64Array",
  "Float64Array",
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
    return _Float64Array_1;
  },
  "{ :self |\n\t\tFloat64Array:/1\n\t}",
);

sl.addMethod(
  "Array",
  "Float64Array",
  "asFloat64Array",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _fillFrom_2(_Float64Array_1(_size_1(_self)), _self);
  },
  "{ :self |\n\t\tFloat64Array(self.size).fillFrom(self)\n\t}",
);

sl.addMethod(
  "Interval",
  "Float64Array",
  "asFloat64Array",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _fillFrom_2(_Float64Array_1(_size_1(_self)), _self);
  },
  "{ :self |\n\t\tFloat64Array(self.size).fillFrom(self)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Float64Array",
  "Float64Array",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return new Float64Array(_self);
  },
  "{ :self |\n\t\t<primitive: return new Float64Array(_self);>\n\t}",
);
