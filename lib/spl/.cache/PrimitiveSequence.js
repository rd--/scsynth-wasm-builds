sl.addTrait("PrimitiveSequence", "PrimitiveSequence");

sl.addTraitMethod(
  "PrimitiveSequence",
  "PrimitiveSequence",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _fillFrom_2(_List_1(_size_1(_self)), _self);
  },
  "{ :self |\n\t\tList(self.size).fillFrom(self)\n\t}",
);

sl.addTraitMethod(
  "PrimitiveSequence",
  "PrimitiveSequence",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.arrayCheckIndex(_self, _index)) {
      return _self[_index - 1];
    }
    /* Statements */
    return _errorInvalidIndex_3(_self, "at", _index);
  },
  "{ :self :index |\n\t\t<primitive:\n\t\tif(sl.arrayCheckIndex(_self, _index)) {\n\t\t\treturn _self[_index - 1];\n\t\t}\n\t\t>\n\t\tself.errorInvalidIndex('at', index)\n\t}",
);

sl.addTraitMethod(
  "PrimitiveSequence",
  "PrimitiveSequence",
  "atIfPresentIfAbsent",
  ["self", "index", "ifPresent:/1", "ifAbsent:/0"],
  function (_self, _index, _ifPresent_1, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _index, _ifPresent_1, _ifAbsent_0";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.arrayCheckIndex(_self, _index)) {
      return _ifPresent_1(_self[_index - 1]);
    }
    {
      return _ifAbsent_0();
    }
  },
  "{ :self :index :ifPresent:/1 :ifAbsent:/0 |\n\t\t<primitive:\n\t\tif(sl.arrayCheckIndex(_self, _index)) {\n\t\t\treturn _ifPresent_1(_self[_index - 1]);\n\t\t} {\n\t\t\treturn _ifAbsent_0();\n\t\t}\n\t\t>\n\t}",
);

sl.addTraitMethod(
  "PrimitiveSequence",
  "PrimitiveSequence",
  "atPut",
  ["self", "index", "anObject"],
  function (_self, _index, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.arrayCheckIndex(_self, _index)) {
      _self[_index - 1] = _anObject;
      return _anObject;
    }
    /* Statements */
    return _errorInvalidIndex_3(_self, "atPut", _index);
  },
  "{ :self :index :anObject |\n\t\t<primitive:\n\t\tif(sl.arrayCheckIndex(_self, _index)) {\n\t\t\t_self[_index - 1] = _anObject;\n\t\t\treturn _anObject;\n\t\t}\n\t\t>\n\t\tself.errorInvalidIndex('atPut', index)\n\t}",
);

sl.addTraitMethod(
  "PrimitiveSequence",
  "PrimitiveSequence",
  "basicAt",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self[_index - 1];
  },
  "{ :self :index |\n\t\t<primitive: return _self[_index - 1];>\n\t}",
);

sl.addTraitMethod(
  "PrimitiveSequence",
  "PrimitiveSequence",
  "basicAtPut",
  ["self", "index", "value"],
  function (_self, _index, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _value";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    _self[_index - 1] = _value;
    return _value;
  },
  "{ :self :index :value |\n\t\t<primitive:\n\t\t_self[_index - 1] = _value;\n\t\treturn _value;\n\t\t>\n\t}",
);

sl.addTraitMethod(
  "PrimitiveSequence",
  "PrimitiveSequence",
  "basicRemoveAt",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.splice(_index - 1, 1)[0];
  },
  "{ :self :index |\n\t\t<primitive: return _self.splice(_index - 1, 1)[0];>\n\t}",
);

sl.addTraitMethod(
  "PrimitiveSequence",
  "PrimitiveSequence",
  "collect",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    if (_aBlock_1 instanceof Function) {
      return _self.map(function (each) {
        return _aBlock_1(each);
      });
    }
    /* Statements */
    return _error_2(_self, "@PrimitiveSequence>>collect: not a block");
  },
  "{ :self :aBlock:/1 |\n\t\t<primitive:\n\t\tif(_aBlock_1 instanceof Function) {\n\t\t\treturn _self.map(function(each) {\n\t\t\t\treturn _aBlock_1(each);\n\t\t\t});\n\t\t}\n\t\t>\n\t\tself.error('@PrimitiveSequence>>collect: not a block')\n\t}",
);

sl.addTraitMethod(
  "PrimitiveSequence",
  "PrimitiveSequence",
  "detectIfFoundIfNone",
  ["self", "aBlock:/1", "whenFound:/1", "whenNone:/0"],
  function (_self, _aBlock_1, _whenFound_1, _whenNone_0) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _aBlock_1, _whenFound_1, _whenNone_0";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    const item = _self.find(function (element) {
      return _aBlock_1(element);
    });
    return (item !== undefined) ? _whenFound_1(item) : _whenNone_0();
  },
  "{ :self :aBlock:/1 :whenFound:/1 :whenNone:/0 |\n\t\t<primitive:\n\t\tconst item = _self.find(function(element) {\n\t\t\treturn _aBlock_1(element);\n\t\t});\n\t\treturn (item !== undefined) ? _whenFound_1(item) : _whenNone_0();\n\t\t>\n\t}",
);

sl.addTraitMethod(
  "PrimitiveSequence",
  "PrimitiveSequence",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    _self.forEach(function (item) {
      return _aBlock_1(item);
    });
    /* Statements */
    return _self;
  },
  "{ :self :aBlock:/1 |\n\t\t<primitive:\n\t\t_self.forEach(function(item) {\n\t\t\treturn _aBlock_1(item)\n\t\t});\n\t\t>\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "PrimitiveSequence",
  "PrimitiveSequence",
  "findFirstElement",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    const item = _self.find(function (element) {
      return _aBlock_1(element);
    });
    return (item === undefined) ? null : item;
  },
  "{ :self :aBlock:/1 |\n\t\t<primitive:\n\t\tconst item = _self.find(function(element) {\n\t\t\treturn _aBlock_1(element);\n\t\t});\n\t\treturn (item === undefined) ? null : item;\n\t\t>\n\t}",
);

sl.addTraitMethod(
  "PrimitiveSequence",
  "PrimitiveSequence",
  "findFirst",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    const index = _self.findIndex(function (element) {
      return _aBlock_1(element);
    });
    return index + 1;
  },
  "{ :self :aBlock:/1 |\n\t\t<primitive:\n\t\tconst index = _self.findIndex(function(element) {\n\t\t\treturn _aBlock_1(element);\n\t\t});\n\t\treturn index + 1;\n\t\t>\n\t}",
);

sl.addTraitMethod(
  "PrimitiveSequence",
  "PrimitiveSequence",
  "insertAt",
  ["self", "anObject", "index"],
  function (_self, _anObject, _index) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _index";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    _self.splice(_index - 1, 0, _anObject);
    return _anObject;
  },
  "{ :self :anObject :index |\n\t\t<primitive:\n\t\t_self.splice(_index - 1, 0, _anObject);\n\t\treturn _anObject;\n\t\t>\n\t}",
);

sl.addTraitMethod(
  "PrimitiveSequence",
  "PrimitiveSequence",
  "includesIndex",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return Number.isInteger(_index) && 0 < _index && _index <= _self.length;
  },
  "{ :self :index |\n\t\t<primitive:\n\t\treturn Number.isInteger(_index) && 0 < _index && _index <= _self.length;\n\t\t>\n\t}",
);

sl.addTraitMethod(
  "PrimitiveSequence",
  "PrimitiveSequence",
  "reverse",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.reverse();
  },
  "{ :self |\n\t\t<primitive: return _self.reverse();>\n\t}",
);

sl.addTraitMethod(
  "PrimitiveSequence",
  "PrimitiveSequence",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.length;
  },
  "{ :self |\n\t\t<primitive: return _self.length;>\n\t}",
);

sl.addTraitMethod(
  "PrimitiveSequence",
  "PrimitiveSequence",
  "sortBy",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.sort(function (p, q) {
      return _aBlock_2(p, q) ? -1 : 1;
    });
  },
  "{ :self :aBlock:/2 |\n\t\t<primitive:\n\t\treturn _self.sort(function(p, q) {\n\t\t\treturn _aBlock_2(p, q) ? -1 : 1\n\t\t});\n\t\t>\n\t}",
);

sl.addTraitMethod(
  "PrimitiveSequence",
  "PrimitiveSequence",
  "sortedBy",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.toSorted(function (p, q) {
      return _aBlock_2(p, q) ? -1 : 1;
    });
  },
  "{ :self :aBlock:/2 |\n\t\t<primitive:\n\t\treturn _self.toSorted(function(p, q) {\n\t\t\treturn _aBlock_2(p, q) ? -1 : 1\n\t\t});\n\t\t>\n\t}",
);

sl.addTraitMethod(
  "PrimitiveSequence",
  "PrimitiveSequence",
  "sortOnBy",
  ["self", "keyBlock:/1", "compareBlock:/2"],
  function (_self, _keyBlock_1, _compareBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _keyBlock_1, _compareBlock_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.sort(function (p, q) {
      return _compareBlock_2(_keyBlock_1(p), _keyBlock_1(q)) ? -1 : 1;
    });
  },
  "{ :self :keyBlock:/1 :compareBlock:/2 |\n\t\t<primitive:\n\t\treturn _self.sort(function(p, q) {\n\t\t\treturn _compareBlock_2(_keyBlock_1(p), _keyBlock_1(q)) ? -1 : 1\n\t\t});\n\t\t>\n\t}",
);

sl.addTraitMethod(
  "PrimitiveSequence",
  "PrimitiveSequence",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(_storeString_1(_asList_1(_self)), ".as"),
      _typeOf_1(_self),
    );
  },
  "{ :self |\n\t\tself.asList.storeString ++ '.as' ++ self.typeOf\n\t}",
);
