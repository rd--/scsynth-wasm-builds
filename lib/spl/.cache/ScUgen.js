sl.addType(
  true,
  "ScUgen",
  "ScUgen",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "ScUgen",
);

sl.addMethodToExistingType(
  "ScUgen",
  "ScUgen",
  "displayName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.displayName();
  },
  "{ :self | <primitive: return _self.displayName();>\n }",
);

sl.addMethodToExistingType(
  "ScUgen",
  "ScUgen",
  "id",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.id;
  },
  "{ :self | <primitive: return _self.id>\n }",
);

sl.addMethodToExistingType(
  "ScUgen",
  "ScUgen",
  "inputList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.inputArray;
  },
  "{ :self | <primitive: return _self.inputArray>\n }",
);

sl.addMethodToExistingType(
  "ScUgen",
  "ScUgen",
  "localControl",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.localControl;
  },
  "{ :self | <primitive: return _self.localControl>\n }",
);

sl.addMethodToExistingType(
  "ScUgen",
  "ScUgen",
  "multipleRootGraph",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.multipleRootGraph;
  },
  "{ :self | <primitive: return _self.multipleRootGraph>\n }",
);

sl.addMethodToExistingType(
  "ScUgen",
  "ScUgen",
  "name",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.name;
  },
  "{ :self | <primitive: return _self.name>\n }",
);

sl.addMethodToExistingType(
  "ScUgen",
  "ScUgen",
  "numberOfChannels",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.numChannels;
  },
  "{ :self | <primitive: return _self.numChannels>\n }",
);

sl.addMethodToExistingType(
  "ScUgen",
  "ScUgen",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _join_2([
      _name_1(_self),
      "(",
      _join_2(_collect_2(_inputList_1(_self), _printString_1), ", "),
      ")",
    ], "");
  },
  "{ :self | join([name(self), '(', join(collect(inputList(self),printString:/1),', '), ')'],'') }",
);

sl.addMethodToExistingType(
  "ScUgen",
  "ScUgen",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [
      "name",
      "numberOfChannels",
      "rate",
      "specialIndex",
      "id",
      "inputList",
      "multipleRootGraph",
      "localControl",
    ];
  },
  "{ :self | ['name', 'numberOfChannels', 'rate', 'specialIndex', 'id', 'inputList', 'multipleRootGraph', 'localControl'] }",
);

sl.addMethodToExistingType(
  "ScUgen",
  "ScUgen",
  "rate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.rate;
  },
  "{ :self | <primitive: return _self.rate>\n }",
);

sl.addMethodToExistingType(
  "ScUgen",
  "ScUgen",
  "specialIndex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.specialIndex;
  },
  "{ :self | <primitive: return _self.specialIndex>\n }",
);
