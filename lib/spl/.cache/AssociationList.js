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
  "{ :self |\n\t\tself.isAssociationList.if {\n\t\t\tself\n\t\t} {\n\t\t\tself.error('not AssociationList')\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.assertIsAssociationList\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tself.assertIsAssociationList.do(aBlock:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "AssociationList",
  "includesKey",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_keys_1(_assertIsAssociationList_1(_self)), _key);
  }, ["self", "key"]),
  "{ :self :key |\n\t\tself.assertIsAssociationList.keys.includes(key)\n\t}",
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
  "{ :self |\n\t\tself.allSatisfy(isAssociation:/1)\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tself.assertIsAssociationList.select { :each |\n\t\t\taBlock(each.key)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.keys.elementType\n\t}",
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
  "{ :self |\n\t\tself.assertIsAssociationList.collect(key:/1)\n\t}",
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
    return _collect_2(_assertIsAssociationList_1(_self), _keyValue_1);
  }, ["self"]),
  "{ :self |\n\t\tself.assertIsAssociationList.collect(keyValue:/1)\n\t}",
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
  "{ :self :aBlock:/2 |\n\t\tself.assertIsAssociationList.do { :each |\n\t\t\taBlock(each.key, each.value)\n\t\t}\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tself.keys.do(aBlock:/1)\n\t}",
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
  "{ :self |\n\t\tself.assertIsAssociationList.collect(value:/1)\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tself.values.do(aBlock:/1)\n\t}",
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
  "{ :self |\n\t\tself.values.elementType\n\t}",
);
