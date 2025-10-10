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
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.displayName();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.displayName();>\n\t}",
);

sl.addMethodToExistingType(
  "ScUgen",
  "ScUgen",
  "id",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.id;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.id>\n\t}",
);

sl.addMethodToExistingType(
  "ScUgen",
  "ScUgen",
  "inputList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.inputArray;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.inputArray>\n\t}",
);

sl.addMethodToExistingType(
  "ScUgen",
  "ScUgen",
  "localControl",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.localControl;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.localControl>\n\t}",
);

sl.addMethodToExistingType(
  "ScUgen",
  "ScUgen",
  "multipleRootGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.multipleRootGraph;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.multipleRootGraph>\n\t}",
);

sl.addMethodToExistingType(
  "ScUgen",
  "ScUgen",
  "name",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.name;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.name>\n\t}",
);

sl.addMethodToExistingType(
  "ScUgen",
  "ScUgen",
  "numberOfChannels",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.numChannels;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.numChannels>\n\t}",
);

sl.addMethodToExistingType(
  "ScUgen",
  "ScUgen",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("%(%)", [
      _name_1(_self),
      _commaSeparated_1(_collect_2(_inputList_1(_self), _printString_1)),
    ]);
  }, ["self"]),
  "{ :self |\n\t\t'%(%)'.format([\n\t\t\tself.name,\n\t\t\tself.inputList.collect(printString:/1).commaSeparated\n\t\t])\n\t}",
);

sl.addMethodToExistingType(
  "ScUgen",
  "ScUgen",
  "pseudoSlotNameList",
  ["self"],
  sl.annotateFunction(function (_self) {
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
  }, ["self"]),
  "{ :self |\n\t\t['name', 'numberOfChannels', 'rate', 'specialIndex', 'id', 'inputList', 'multipleRootGraph', 'localControl']\n\t}",
);

sl.addMethodToExistingType(
  "ScUgen",
  "ScUgen",
  "rate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.rate;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.rate>\n\t}",
);

sl.addMethodToExistingType(
  "ScUgen",
  "ScUgen",
  "specialIndex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.specialIndex;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.specialIndex>\n\t}",
);
