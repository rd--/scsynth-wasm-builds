sl.addType(
  true,
  "Type",
  "Type",
  ["Object", "Equatable"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Type",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Type",
);

sl.addMethodToExistingType(
  "Type",
  "Type",
  "category",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _categoryOf_3(
      _categoryDictionary_1(_system),
      "type",
      _name_1(_self),
    );
  }, ["self"]),
  "{ :self | categoryOf(categoryDictionary(system),'type', name(self)) }",
);

sl.addMethodToExistingType(
  "Type",
  "Type",
  "constructorName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2("new", _name_1(_self)),
      ":/0",
    );
  }, ["self"]),
  "{ :self | ++(++('new', name(self)), ':/0') }",
);

sl.addMethodToExistingType(
  "Type",
  "Type",
  "instanceOf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _instance = _value_1(
      _block_1(
        _at_2(
          _methodDictionary_1(_typeLookup_2(_system, "Void")),
          _constructorName_1(_self),
        ),
      ),
    );
    /* Statements */
    _initialize_1(_instance);
    return _instance;
  }, ["self"]),
  "{ :self | let instance = value(block(at(methodDictionary(typeLookup(system,'Void')), constructorName(self)))); initialize(instance); instance }",
);

sl.addMethodToExistingType(
  "Type",
  "Type",
  "isMeta",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _endsWith_2(_name_1(_self), "^");
  }, ["self"]),
  "{ :self | endsWith(name(self),'^') }",
);

sl.addMethodToExistingType(
  "Type",
  "Type",
  "methodList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _values_1(_methodDictionary_1(_self));
  }, ["self"]),
  "{ :self | values(methodDictionary(self)) }",
);

sl.addMethodToExistingType(
  "Type",
  "Type",
  "methodDictionary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.methodDictionary;
  }, ["self"]),
  "{ :self | <primitive: return _self.methodDictionary;>\n }",
);

sl.addMethodToExistingType(
  "Type",
  "Type",
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
  "{ :self | <primitive: return _self.name;>\n }",
);

sl.addMethodToExistingType(
  "Type",
  "Type",
  "packageName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.packageName;
  }, ["self"]),
  "{ :self | <primitive: return _self.packageName;>\n }",
);

sl.addMethodToExistingType(
  "Type",
  "Type",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _qualifiedName_1(_self);
  }, ["self"]),
  "{ :self | qualifiedName(self) }",
);

sl.addMethodToExistingType(
  "Type",
  "Type",
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
      "packageName",
      "traitNameList",
      "slotNameList",
      "methodDictionary",
    ];
  }, ["self"]),
  "{ :self | ['name', 'packageName', 'traitNameList', 'slotNameList', 'methodDictionary'] }",
);

sl.addMethodToExistingType(
  "Type",
  "Type",
  "qualifiedName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _name_1(_self);
  }, ["self"]),
  "{ :self | name(self) }",
);

sl.addMethodToExistingType(
  "Type",
  "Type",
  "slotNameList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.slotNameArray;
  }, ["self"]),
  "{ :self | <primitive: return _self.slotNameArray;>\n }",
);

sl.addMethodToExistingType(
  "Type",
  "Type",
  "traitList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _traitNameList_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _traitLookup_2(_system, _each);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self | collect(traitNameList(self), { :each | traitLookup(system,each) }) }",
);

sl.addMethodToExistingType(
  "Type",
  "Type",
  "traitNameList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.traitNameArray;
  }, ["self"]),
  "{ :self | <primitive: return _self.traitNameArray;>\n }",
);
