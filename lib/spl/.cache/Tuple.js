/*  Requires: List  */

sl.addType(
  false,
  "Tuple",
  "Tuple",
  ["Object", "Copyable", "Equatable"],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Tuple",
);

sl.copyTraitMethodsToType(
  "Copyable",
  "Tuple",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Tuple",
);

sl.addMethodToExistingType(
  "Tuple",
  "Tuple",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _copy_1(_contents_1(_self));
  }, ["self"]),
  "{ :self | copy(contents(self)) }",
);

sl.addMethodToExistingType(
  "Tuple",
  "Tuple",
  "at",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), _index);
  }, ["self", "index"]),
  "{ :self :index | at(contents(self),index) }",
);

sl.addMethodToExistingType(
  "Tuple",
  "Tuple",
  "concisePrintString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeString_2(_self, _concisePrintString_1);
  }, ["self"]),
  "{ :self | storeString(self,concisePrintString:/1) }",
);

sl.addMethodToExistingType(
  "Tuple",
  "Tuple",
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isTuple_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_contents_1(_self), _contents_1(_anObject));
      }, []),
    );
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 | &(isTuple(anObject), { aBlock(contents(self), contents(anObject)) }) }",
);

sl.addMethodToExistingType(
  "Tuple",
  "Tuple",
  "indices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _indices_1(_contents_1(_self));
  }, ["self"]),
  "{ :self | indices(contents(self)) }",
);

sl.addMethodToExistingType(
  "Tuple",
  "Tuple",
  "postCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _contents_2(_self, _copy_1(_contents_1(_self)));
  }, ["self"]),
  "{ :self | contents(self, copy(contents(self))) }",
);

sl.addMethodToExistingType(
  "Tuple",
  "Tuple",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeString_2(_self, _printString_1);
  }, ["self"]),
  "{ :self | storeString(self,printString:/1) }",
);

sl.addMethodToExistingType(
  "Tuple",
  "Tuple",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_contents_1(_self));
  }, ["self"]),
  "{ :self | size(contents(self)) }",
);

sl.addMethodToExistingType(
  "Tuple",
  "Tuple",
  "storeString",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(
        "(",
        _commaSeparated_1(_collect_2(_contents_1(_self), _aBlock_1)),
      ),
      ")",
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | ++(++('(', commaSeparated(collect(contents(self),aBlock:/1))), ')') }",
);

sl.addMethodToExistingType(
  "Tuple",
  "Tuple",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeString_2(_self, _storeString_1);
  }, ["self"]),
  "{ :self | storeString(self,storeString:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Tuple",
  "Tuple",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newTuple_0(), _self);
  }, ["self"]),
  "{ :self | initializeSlots(newTuple(),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Tuple",
  "asTuple",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Tuple_1(_copy_1(_self));
  }, ["self"]),
  "{ :self | Tuple(copy(self)) }",
);
