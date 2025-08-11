sl.addType(
  true,
  "Trait",
  "Trait",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Trait",
);

sl.addMethodToExistingType(
  "Trait",
  "Trait",
  "addMethodsTo",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _values_1(_methodDictionary_1(_trait)),
      sl.annotateFunction(function (_method) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _method";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_aCollection, _method);
      }, ["method"]),
    );
  }, ["self", "aCollection"]),
  "{ :self :aCollection | do(values(methodDictionary(trait)), { :method | add(aCollection,method) }) }",
);

sl.addMethodToExistingType(
  "Trait",
  "Trait",
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
  "Trait",
  "Trait",
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
  "Trait",
  "Trait",
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
  "Trait",
  "Trait",
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
  "Trait",
  "Trait",
  "pseudoSlotNameList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["methodDictionary", "name", "packageName"];
  }, ["self"]),
  "{ :self | ['methodDictionary', 'name', 'packageName'] }",
);

sl.addMethodToExistingType(
  "Trait",
  "Trait",
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
  "Trait",
  "Trait",
  "qualifiedName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2("@", _name_1(_self));
  }, ["self"]),
  "{ :self | ++('@', name(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Trait",
  "isQualifiedTraitName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_at_2(_self, 1), "@");
  }, ["self"]),
  "{ :self | =(at(self, 1), '@') }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Trait",
  "parseQualifiedTraitName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isQualifiedTraitName_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _copyFromTo_3(_self, 2, _size_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isQualifiedTraitName(self), { copyFromTo(self,2, size(self)) }, { self }) }",
);
