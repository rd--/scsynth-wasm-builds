sl.addTrait("PrimitiveArray", "PrimitiveArray");

sl.addMethodToExistingTrait(
  "PrimitiveArray",
  "PrimitiveArray",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fillFrom_2(_List_1(_size_1(_self)), _self);
  }, ["self"]),
  "{ :self |\n\t\tList(self.size).fillFrom(self)\n\t}",
);

sl.addMethodToExistingTrait(
  "PrimitiveArray",
  "PrimitiveArray",
  "atIfAbsent",
  ["self", "index", "ifAbsent:/0"],
  sl.annotateFunction(function (_self, _index, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.arrayCheckIndex(_self, _index)) {
      return _self[_index - 1];
    }
    return _ifAbsent_0();
  }, ["self", "index", "ifAbsent:/0"]),
  "{ :self :index :ifAbsent:/0 |\n\t\t<primitive:\n\t\tif(sl.arrayCheckIndex(_self, _index)) {\n\t\t\treturn _self[_index - 1];\n\t\t}\n\t\treturn _ifAbsent_0();\n\t\t>\n\t}",
);

sl.addMethodToExistingTrait(
  "PrimitiveArray",
  "PrimitiveArray",
  "atPut",
  ["self", "index", "anObject"],
  sl.annotateFunction(function (_self, _index, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.arrayCheckIndex(_self, _index)) {
      _self[_index - 1] = _anObject;
      return _anObject;
    }
    /* Statements */
    return _errorInvalidIndex_3(_self, "atPut", _index);
  }, ["self", "index", "anObject"]),
  "{ :self :index :anObject |\n\t\t<primitive:\n\t\tif(sl.arrayCheckIndex(_self, _index)) {\n\t\t\t_self[_index - 1] = _anObject;\n\t\t\treturn _anObject;\n\t\t}\n\t\t>\n\t\tself.errorInvalidIndex('atPut', index)\n\t}",
);

sl.addMethodToExistingTrait(
  "PrimitiveArray",
  "PrimitiveArray",
  "collect",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Primitive */
    if (_aBlock_1 instanceof Function) {
      return _self.map(function (each) {
        return _aBlock_1(each);
      });
    }
    /* Statements */
    return _error_2(_self, "@PrimitiveArray>>collect: not a block");
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\t<primitive:\n\t\tif(_aBlock_1 instanceof Function) {\n\t\t\treturn _self.map(function(each) {\n\t\t\t\treturn _aBlock_1(each);\n\t\t\t});\n\t\t}\n\t\t>\n\t\tself.error('@PrimitiveArray>>collect: not a block')\n\t}",
);

sl.addMethodToExistingTrait(
  "PrimitiveArray",
  "PrimitiveArray",
  "deepCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _primitiveDeepCopy_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.primitiveDeepCopy\n\t}",
);

sl.addMethodToExistingTrait(
  "PrimitiveArray",
  "PrimitiveArray",
  "detectIfFoundIfNone",
  ["self", "aBlock:/1", "whenFound:/1", "whenNone:/0"],
  sl.annotateFunction(function (_self, _aBlock_1, _whenFound_1, _whenNone_0) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _aBlock_1, _whenFound_1, _whenNone_0";
      throw new Error(errorMessage);
    } /* Primitive */
    const item = _self.find(function (element) {
      return _aBlock_1(element);
    });
    return (item !== undefined) ? _whenFound_1(item) : _whenNone_0();
  }, ["self", "aBlock:/1", "whenFound:/1", "whenNone:/0"]),
  "{ :self :aBlock:/1 :whenFound:/1 :whenNone:/0 |\n\t\t<primitive:\n\t\tconst item = _self.find(function(element) {\n\t\t\treturn _aBlock_1(element);\n\t\t});\n\t\treturn (item !== undefined) ? _whenFound_1(item) : _whenNone_0();\n\t\t>\n\t}",
);

sl.addMethodToExistingTrait(
  "PrimitiveArray",
  "PrimitiveArray",
  "do",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.forEach(function (item) {
      return _aBlock_1(item);
    });
    /* Statements */
    return _self;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\t<primitive:\n\t\t_self.forEach(function(item) {\n\t\t\treturn _aBlock_1(item)\n\t\t});\n\t\t>\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "PrimitiveArray",
  "PrimitiveArray",
  "findFirstElement",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Primitive */
    const item = _self.find(function (element) {
      return _aBlock_1(element);
    });
    return (item === undefined) ? null : item;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\t<primitive:\n\t\tconst item = _self.find(function(element) {\n\t\t\treturn _aBlock_1(element);\n\t\t});\n\t\treturn (item === undefined) ? null : item;\n\t\t>\n\t}",
);

sl.addMethodToExistingTrait(
  "PrimitiveArray",
  "PrimitiveArray",
  "findFirst",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Primitive */
    const index = _self.findIndex(function (element) {
      return _aBlock_1(element);
    });
    return index + 1;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\t<primitive:\n\t\tconst index = _self.findIndex(function(element) {\n\t\t\treturn _aBlock_1(element);\n\t\t});\n\t\treturn index + 1;\n\t\t>\n\t}",
);

sl.addMethodToExistingTrait(
  "PrimitiveArray",
  "PrimitiveArray",
  "insertAt",
  ["self", "anObject", "index"],
  sl.annotateFunction(function (_self, _anObject, _index) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _index";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.splice(_index - 1, 0, _anObject);
    return _anObject;
  }, ["self", "anObject", "index"]),
  "{ :self :anObject :index |\n\t\t<primitive:\n\t\t_self.splice(_index - 1, 0, _anObject);\n\t\treturn _anObject;\n\t\t>\n\t}",
);

sl.addMethodToExistingTrait(
  "PrimitiveArray",
  "PrimitiveArray",
  "includesIndex",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Primitive */
    return Number.isInteger(_index) && 0 < _index && _index <= _self.length;
  }, ["self", "index"]),
  "{ :self :index |\n\t\t<primitive:\n\t\treturn Number.isInteger(_index) && 0 < _index && _index <= _self.length;\n\t\t>\n\t}",
);

sl.addMethodToExistingTrait(
  "PrimitiveArray",
  "PrimitiveArray",
  "reverseInPlace",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.reverse();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.reverse();>\n\t}",
);

sl.addMethodToExistingTrait(
  "PrimitiveArray",
  "PrimitiveArray",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.length;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.length;>\n\t}",
);

sl.addMethodToExistingTrait(
  "PrimitiveArray",
  "PrimitiveArray",
  "sortBy",
  ["self", "sortBlock:/2"],
  sl.annotateFunction(function (_self, _sortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sortBlock_2";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.sort(function (p, q) {
      return _sortBlock_2(p, q) ? -1 : 1;
    });
  }, ["self", "sortBlock:/2"]),
  "{ :self :sortBlock:/2 |\n\t\t<primitive:\n\t\treturn _self.sort(function(p, q) {\n\t\t\treturn _sortBlock_2(p, q) ? -1 : 1\n\t\t});\n\t\t>\n\t}",
);

sl.addMethodToExistingTrait(
  "PrimitiveArray",
  "PrimitiveArray",
  "sortByOn",
  ["self", "sortBlock:/2", "keyBlock:/1"],
  sl.annotateFunction(function (_self, _sortBlock_2, _keyBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _sortBlock_2, _keyBlock_1";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.sort(function (p, q) {
      return _sortBlock_2(_keyBlock_1(p), _keyBlock_1(q)) ? -1 : 1;
    });
  }, ["self", "sortBlock:/2", "keyBlock:/1"]),
  "{ :self :sortBlock:/2 :keyBlock:/1 |\n\t\t<primitive:\n\t\treturn _self.sort(function(p, q) {\n\t\t\treturn _sortBlock_2(_keyBlock_1(p), _keyBlock_1(q)) ? -1 : 1\n\t\t});\n\t\t>\n\t}",
);

sl.addMethodToExistingTrait(
  "PrimitiveArray",
  "PrimitiveArray",
  "sortComparing",
  ["self", "compareBlock:/2"],
  sl.annotateFunction(function (_self, _compareBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _compareBlock_2";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.sort(_compareBlock_2);
  }, ["self", "compareBlock:/2"]),
  "{ :self :compareBlock:/2 |\n\t\t<primitive:\n\t\treturn _self.sort(_compareBlock_2);\n\t\t>\n\t}",
);

sl.addMethodToExistingTrait(
  "PrimitiveArray",
  "PrimitiveArray",
  "sortedBy",
  ["self", "sortBlock:/2"],
  sl.annotateFunction(function (_self, _sortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sortBlock_2";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.toSorted(function (p, q) {
      return _sortBlock_2(p, q) ? -1 : 1;
    });
  }, ["self", "sortBlock:/2"]),
  "{ :self :sortBlock:/2 |\n\t\t<primitive:\n\t\treturn _self.toSorted(function(p, q) {\n\t\t\treturn _sortBlock_2(p, q) ? -1 : 1\n\t\t});\n\t\t>\n\t}",
);

sl.addMethodToExistingTrait(
  "PrimitiveArray",
  "PrimitiveArray",
  "sortedComparing",
  ["self", "compareBlock:/2"],
  sl.annotateFunction(function (_self, _compareBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _compareBlock_2";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.toSorted(_compareBlock_2);
  }, ["self", "compareBlock:/2"]),
  "{ :self :compareBlock:/2 |\n\t\t<primitive:\n\t\treturn _self.toSorted(_compareBlock_2);\n\t\t>\n\t}",
);

sl.addMethodToExistingTrait(
  "PrimitiveArray",
  "PrimitiveArray",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("%(%)", [
      _typeOf_1(_self),
      _storeString_1(_asList_1(_self)),
    ]);
  }, ["self"]),
  "{ :self |\n\t\t'%(%)'.format(\n\t\t\t[\n\t\t\t\tself.typeOf,\n\t\t\t\tself.asList.storeString\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingTrait(
  "PrimitiveArray",
  "PrimitiveArray",
  "uncheckedAt",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self[_index - 1];
  }, ["self", "index"]),
  "{ :self :index |\n\t\t<primitive: return _self[_index - 1];>\n\t}",
);

sl.addMethodToExistingTrait(
  "PrimitiveArray",
  "PrimitiveArray",
  "uncheckedAtPut",
  ["self", "index", "value"],
  sl.annotateFunction(function (_self, _index, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _value";
      throw new Error(errorMessage);
    } /* Primitive */
    _self[_index - 1] = _value;
    return _value;
  }, ["self", "index", "value"]),
  "{ :self :index :value |\n\t\t<primitive:\n\t\t_self[_index - 1] = _value;\n\t\treturn _value;\n\t\t>\n\t}",
);

sl.addMethodToExistingTrait(
  "PrimitiveArray",
  "PrimitiveArray",
  "uncheckedRemoveAt",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.splice(_index - 1, 1)[0];
  }, ["self", "index"]),
  "{ :self :index |\n\t\t<primitive: return _self.splice(_index - 1, 1)[0];>\n\t}",
);
