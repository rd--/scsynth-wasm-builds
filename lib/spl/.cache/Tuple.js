/*  Requires: List  */

sl.addType(
  false,
  "Tuple",
  "Tuple",
  ["Object", "Iterable", "Indexable", "Collection", "Sequenceable"],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Tuple",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "Tuple",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "Tuple",
);

sl.copyTraitMethodsToType(
  "Collection",
  "Tuple",
);

sl.copyTraitMethodsToType(
  "Sequenceable",
  "Tuple",
);

sl.addMethodToExistingType(
  "Tuple",
  "Tuple",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _copy_1(_contents_1(_self));
  },
  "{ :self | copy(contents(self)) }",
);

sl.addMethodToExistingType(
  "Tuple",
  "Tuple",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), _index);
  },
  "{ :self :index | at(contents(self), index) }",
);

sl.addMethodToExistingType(
  "Tuple",
  "Tuple",
  "atPut",
  ["self", "index", "anObject"],
  function (_self, _index, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _atPut_3(_contents_1(_self), _index, _anObject);
  },
  "{ :self :index :anObject | atPut(contents(self), index, anObject) }",
);

sl.addMethodToExistingType(
  "Tuple",
  "Tuple",
  "concisePrintString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(
        "(",
        _join_2(_collect_2(_contents_1(_self), _concisePrintString_1), ", "),
      ),
      ")",
    );
  },
  "{ :self | ++(++('(', join(collect(contents(self),concisePrintString:/1),', ')), ')') }",
);

sl.addMethodToExistingType(
  "Tuple",
  "Tuple",
  "copy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asTuple_1(_contents_1(_self));
  },
  "{ :self | asTuple(contents(self)) }",
);

sl.addMethodToExistingType(
  "Tuple",
  "Tuple",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_contents_1(_self), _aBlock_1);
  },
  "{ :self :aBlock:/1 | do(contents(self),aBlock:/1) }",
);

sl.addMethodToExistingType(
  "Tuple",
  "Tuple",
  "indices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _indices_1(_contents_1(_self));
  },
  "{ :self | indices(contents(self)) }",
);

sl.addMethodToExistingType(
  "Tuple",
  "Tuple",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(
        "(",
        _join_2(_collect_2(_contents_1(_self), _printString_1), ", "),
      ),
      ")",
    );
  },
  "{ :self | ++(++('(', join(collect(contents(self),printString:/1),', ')), ')') }",
);

sl.addMethodToExistingType(
  "Tuple",
  "Tuple",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_contents_1(_self));
  },
  "{ :self | size(contents(self)) }",
);

sl.addMethodToExistingType(
  "Tuple",
  "Tuple",
  "species",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Tuple_1;
  },
  "{ :self | Tuple:/1 }",
);

sl.addMethodToExistingType(
  "Tuple",
  "Tuple",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(
        "(",
        _join_2(_collect_2(_contents_1(_self), _storeString_1), ", "),
      ),
      ")",
    );
  },
  "{ :self | ++(++('(', join(collect(contents(self),storeString:/1),', ')), ')') }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Tuple",
  "Tuple",
  ["size"],
  function (_size) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _size";
      throw new Error(errorMessage);
    } /* Statements */
    return _asTuple_1(_List_1(_size));
  },
  "{ :size | asTuple(List(size)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Tuple",
  "Tuple",
  ["size", "anObject"],
  function (_size, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _size, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _asTuple_1(_List_2(_size, _anObject));
  },
  "{ :size :anObject | asTuple(List(size, anObject)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Tuple",
  "asTuple",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newTuple_0(), _copy_1(_self));
  },
  "{ :self | initializeSlots(newTuple(),copy(self)) }",
);
