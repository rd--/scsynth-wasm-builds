/*  Requires: List  */

sl.addType(
  false,
  "Tuple",
  "Tuple",
  ["Object", "Storeable", "Copyable", "Equatable"],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Tuple",
);

sl.copyTraitMethodsToType(
  "Storeable",
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
  "{ :self :index |\n\t\tself.contents.at(index)\n\t}",
);

sl.addMethodToExistingType(
  "Tuple",
  "Tuple",
  "commercialAt",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), _index);
  }, ["self", "index"]),
  "{ :self :index |\n\t\tself.contents.at(index)\n\t}",
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
  "{ :self |\n\t\tself.contents.copy\n\t}",
);

sl.addMethodToExistingType(
  "Tuple",
  "Tuple",
  "assertIsOfSize",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _assertIsOfSize_2(_contents_1(_self), _anInteger);
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.contents.assertIsOfSize(anInteger)\n\t}",
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
    return _storeStringLiteral_2(_self, _concisePrintString_1);
  }, ["self"]),
  "{ :self |\n\t\tself.storeStringLiteral(concisePrintString:/1)\n\t}",
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
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isTuple & {\n\t\t\taBlock(self.contents, anObject.contents)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.contents.indices\n\t}",
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
  "{ :self |\n\t\tself.contents := self.contents.copy\n\t}",
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
    return _storeStringLiteral_2(_self, _printString_1);
  }, ["self"]),
  "{ :self |\n\t\tself.storeStringLiteral(printString:/1)\n\t}",
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
  "{ :self |\n\t\tself.contents.size\n\t}",
);

sl.addMethodToExistingType(
  "Tuple",
  "Tuple",
  "storeStringLiteral",
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
  "{ :self :aBlock:/1 |\n\t\t'(' ++ self.contents.collect(aBlock:/1).commaSeparated ++ ')'\n\t}",
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
    return _storeStringLiteral_2(_self, _storeString_1);
  }, ["self"]),
  "{ :self |\n\t\tself.storeStringLiteral(storeString:/1)\n\t}",
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
  "{ :self |\n\t\tnewTuple().initializeSlots(self)\n\t}",
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
  "{ :self |\n\t\tTuple(self.copy)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Tuple",
  "Tuple",
  "unitBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _product_1(_collect_2(_contents_1(_self), _unitBox_1));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.collect(unitBox:/1).product\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Tuple",
  "Tuple",
  "unitStep",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _boole_1(_noneSatisfy_2(_contents_1(_self), _isNegative_1));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.noneSatisfy(isNegative:/1).boole\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Tuple",
  "Tuple",
  "unitTriangle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _product_1(_collect_2(_contents_1(_self), _unitTriangle_1));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.collect(unitTriangle:/1).product\n\t}",
);
