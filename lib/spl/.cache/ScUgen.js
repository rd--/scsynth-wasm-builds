sl.addType(
  true,
  "ScUgen",
  "ScUgen",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "ScUgen",
);

sl.addMethod(
  "ScUgen",
  "ScUgen",
  "id",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.id;
  },
  "{ :self |\n\t\t<primitive: return _self.id>\n\t}",
);

sl.addMethod(
  "ScUgen",
  "ScUgen",
  "inputArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.inputArray;
  },
  "{ :self |\n\t\t<primitive: return _self.inputArray>\n\t}",
);

sl.addMethod(
  "ScUgen",
  "ScUgen",
  "localControl",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.localControl;
  },
  "{ :self |\n\t\t<primitive: return _self.localControl>\n\t}",
);

sl.addMethod(
  "ScUgen",
  "ScUgen",
  "multipleRootGraph",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.multipleRootGraph;
  },
  "{ :self |\n\t\t<primitive: return _self.multipleRootGraph>\n\t}",
);

sl.addMethod(
  "ScUgen",
  "ScUgen",
  "name",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.name;
  },
  "{ :self |\n\t\t<primitive: return _self.name>\n\t}",
);

sl.addMethod(
  "ScUgen",
  "ScUgen",
  "numChannels",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.numChannels;
  },
  "{ :self |\n\t\t<primitive: return _self.numChannels>\n\t}",
);

sl.addMethod(
  "ScUgen",
  "ScUgen",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _join_1([
      _name_1(_self),
      "(",
      _joinSeparatedBy_2(
        _collect_2(_inputArray_1(_self), _printString_1),
        ", ",
      ),
      ")",
    ]);
  },
  "{ :self |\n\t\t[\n\t\t\tself.name,\n\t\t\t'(',\n\t\t\t\tself.inputArray.collect(printString:/1).joinSeparatedBy(', ')\n\t\t\t,')'\n\t\t].join\n\t}",
);

sl.addMethod(
  "ScUgen",
  "ScUgen",
  "pseudoSlotNameArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return [
      "name",
      "numChannels",
      "rate",
      "specialIndex",
      "id",
      "inputArray",
      "multipleRootGraph",
      "localControl",
    ];
  },
  "{ :self |\n\t\t['name', 'numChannels', 'rate', 'specialIndex', 'id', 'inputArray', 'multipleRootGraph', 'localControl']\n\t}",
);

sl.addMethod(
  "ScUgen",
  "ScUgen",
  "rate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.rate;
  },
  "{ :self |\n\t\t<primitive: return _self.rate>\n\t}",
);

sl.addMethod(
  "ScUgen",
  "ScUgen",
  "specialIndex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.specialIndex;
  },
  "{ :self |\n\t\t<primitive: return _self.specialIndex>\n\t}",
);
