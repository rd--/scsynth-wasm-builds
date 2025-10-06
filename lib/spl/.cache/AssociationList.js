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
  "associations",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _assertIsAssociationList_1(_self);
  }, ["self"]),
  "{ :self | assertIsAssociationList(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "AssociationList",
  "associationsDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_assertIsAssociationList_1(_self), _aBlock_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | do(assertIsAssociationList(self),aBlock:/1) }",
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
  "keySelect",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(
      _assertIsAssociationList_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_key_1(_each));
      }, ["each"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | select(assertIsAssociationList(self), { :each | aBlock(key(each)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "AssociationList",
  "keyType",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _elementType_1(_keys_1(_self));
  }, ["self"]),
  "{ :self | elementType(keys(self)) }",
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
    return _collect_2(_assertIsAssociationList_1(_self), _key_1);
  }, ["self"]),
  "{ :self | collect(assertIsAssociationList(self),key:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "AssociationList",
  "keysAndValues",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_assertIsAssociationList_1(_self), _asList_1);
  }, ["self"]),
  "{ :self | collect(assertIsAssociationList(self),asList:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "AssociationList",
  "keysAndValuesDo",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _assertIsAssociationList_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_key_1(_each), _value_1(_each));
      }, ["each"]),
    );
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | do(assertIsAssociationList(self), { :each | aBlock(key(each), value(each)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "AssociationList",
  "keysDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_keys_1(_self), _aBlock_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | do(keys(self),aBlock:/1) }",
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
    return _collect_2(_assertIsAssociationList_1(_self), _value_1);
  }, ["self"]),
  "{ :self | collect(assertIsAssociationList(self),value:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "AssociationList",
  "valuesDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_values_1(_self), _aBlock_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | do(values(self),aBlock:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "AssociationList",
  "valueType",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _elementType_1(_values_1(_self));
  }, ["self"]),
  "{ :self | elementType(values(self)) }",
);
