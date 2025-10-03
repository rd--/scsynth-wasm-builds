sl.addType(
  false,
  "DirectedEdge",
  "DirectedEdge",
  ["Object", "Equatable", "Comparable", "Indexable"],
  ["vertexList"],
);

sl.copyTraitMethodsToType(
  "Object",
  "DirectedEdge",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "DirectedEdge",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "DirectedEdge",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "DirectedEdge",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "asAssociation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL1 = _assertIsOfSize_2(_vertexList_1(_self), 2);
    let _from = _at_2(__SPL1, 1);
    let _to = _at_2(__SPL1, 2);
    /* Statements */
    return _hyphenMinusGreaterThanSign_2(_from, _to);
  }, ["self"]),
  "{ :self | let __SPL1 = assertIsOfSize(vertexList(self), 2); let from = at(__SPL1, 1); let to = at(__SPL1, 2); ->(from, to) }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "asDirectedEdge",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self | self }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "asEdge",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self | self }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "asUndirectedEdge",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL2 = _assertIsOfSize_2(_vertexList_1(_self), 2);
    let _i = _at_2(__SPL2, 1);
    let _j = _at_2(__SPL2, 2);
    /* Statements */
    return _UndirectedEdge_2(_i, _j);
  }, ["self"]),
  "{ :self | let __SPL2 = assertIsOfSize(vertexList(self), 2); let i = at(__SPL2, 1); let j = at(__SPL2, 2); UndirectedEdge(i, j) }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "at",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_vertexList_1(_self), _index);
  }, ["self", "index"]),
  "{ :self :index | at(vertexList(self),index) }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "compare",
  ["self", "anEdge"],
  sl.annotateFunction(function (_self, _anEdge) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anEdge";
      throw new Error(errorMessage);
    } /* Statements */
    return _compare_2(_vertexList_1(_self), _vertexList_1(_anEdge));
  }, ["self", "anEdge"]),
  "{ :self :anEdge | compare(vertexList(self),vertexList(anEdge)) }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "forDot",
  ["self", "isMixed"],
  sl.annotateFunction(function (_self, _isMixed) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _isMixed";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL3 = _assertIsOfSize_2(_vertexList_1(_self), 2);
    let _from = _at_2(__SPL3, 1);
    let _to = _at_2(__SPL3, 2);
    /* Statements */
    return _format_2("% -> %;", [_from, _to]);
  }, ["self", "isMixed"]),
  "{ :self :isMixed | let __SPL3 = assertIsOfSize(vertexList(self), 2); let from = at(__SPL3, 1); let to = at(__SPL3, 2); format('% -> %;',[from, to]) }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "head",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, 2);
  }, ["self"]),
  "{ :self | at(self, 2) }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "includes",
  ["self", "vertex"],
  sl.annotateFunction(function (_self, _vertex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertex";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_vertexList_1(_self), _vertex);
  }, ["self", "vertex"]),
  "{ :self :vertex | includes(vertexList(self),vertex) }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "indices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [1, 2];
  }, ["self"]),
  "{ :self | [1, 2] }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "isDirected",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["self"]),
  "{ :self | true }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "isEdge",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["self"]),
  "{ :self | true }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "isUndirected",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  }, ["self"]),
  "{ :self | false }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "matchesEdge",
  ["self", "edge"],
  sl.annotateFunction(function (_self, _edge) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _edge";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _equalsSign_2(_self, _edge),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isUndirectedEdge_1(_edge),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _matchesEdge_2(_edge, _self);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return false;
          }, []),
        );
      }, []),
    );
  }, ["self", "edge"]),
  "{ :self :edge | |(=(self, edge), { if(isUndirectedEdge(edge), { matchesEdge(edge,self) }, { false }) }) }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL4 = _assertIsOfSize_2(_vertexList_1(_self), 2);
    let _i = _at_2(__SPL4, 1);
    let _j = _at_2(__SPL4, 2);
    /* Statements */
    return _format_2("% --> %", [_i, _j]);
  }, ["self"]),
  "{ :self | let __SPL4 = assertIsOfSize(vertexList(self), 2); let i = at(__SPL4, 1); let j = at(__SPL4, 2); format('% --> %',[i, j]) }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "rename",
  ["self", "aDictionary"],
  sl.annotateFunction(function (_self, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDictionary";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinusHyphenMinusGreaterThanSign_2(
      _at_2(_aDictionary, _at_2(_self, 1)),
      _at_2(_aDictionary, _at_2(_self, 2)),
    );
  }, ["self", "aDictionary"]),
  "{ :self :aDictionary | -->(at(aDictionary, at(self, 1)), at(aDictionary, at(self, 2))) }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 2;
  }, ["self"]),
  "{ :self | 2 }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  }, ["self"]),
  "{ :self | storeStringAsInitializeSlots(self) }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "tail",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, 1);
  }, ["self"]),
  "{ :self | at(self, 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "Association",
  "DirectedEdge",
  "asEdge",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _DirectedEdge_2(_key_1(_self), _value_1(_self));
  }, ["self"]),
  "{ :self | DirectedEdge(key(self), value(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DirectedEdge",
  "hyphenMinusHyphenMinusGreaterThanSign",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _DirectedEdge_2(_self, _anInteger);
  }, ["self", "anInteger"]),
  "{ :self :anInteger | DirectedEdge(self, anInteger) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DirectedEdge",
  "DirectedEdge",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newDirectedEdge_0(), [_self, _anInteger]);
  }, ["self", "anInteger"]),
  "{ :self :anInteger | initializeSlots(newDirectedEdge(),[self, anInteger]) }",
);
