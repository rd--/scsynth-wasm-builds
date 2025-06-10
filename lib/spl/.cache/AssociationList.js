sl.extendTypeOrTraitWithMethod(
  "List",
  "AssociationList",
  "assertIsAssociationList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isAssociationList_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "not AssociationList");
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isAssociationList(self), { self }, { error(self,'not AssociationList') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "AssociationList",
  "isAssociationList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_self, _isAssociation_1);
  }, ["self"]),
  "{ :self | allSatisfy(self,isAssociation:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "AssociationList",
  "keys",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _assertIsAssociationList_1(_self);
    return _collect_2(_self, _key_1);
  }, ["self"]),
  "{ :self | assertIsAssociationList(self); collect(self,key:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "AssociationList",
  "values",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _assertIsAssociationList_1(_self);
    return _collect_2(_self, _value_1);
  }, ["self"]),
  "{ :self | assertIsAssociationList(self); collect(self,value:/1) }",
);
