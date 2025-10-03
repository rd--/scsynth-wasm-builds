sl.addType(
  false,
  "UndirectedEdge",
  "UndirectedEdge",
  ["Object", "Equatable", "Comparable", "Indexable"],
  ["vertexList"],
);

sl.copyTraitMethodsToType(
  "Object",
  "UndirectedEdge",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "UndirectedEdge",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "UndirectedEdge",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "UndirectedEdge",
);

sl.addMethodToExistingType(
  "UndirectedEdge",
  "UndirectedEdge",
  "asDirectedEdge",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_vertexList_1(_self), 2);
    let _i = _at_2(__SplVar1, 1);
    let _j = _at_2(__SplVar1, 2);
    /* Statements */
    return _DirectedEdge_2(_i, _j);
  }, ["self"]),
  "{ :self | let __SplVar1 = assertIsOfSize(vertexList(self), 2); let i = at(__SplVar1, 1); let j = at(__SplVar1, 2); DirectedEdge(i, j) }",
);

sl.addMethodToExistingType(
  "UndirectedEdge",
  "UndirectedEdge",
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
  "UndirectedEdge",
  "UndirectedEdge",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _vertexList_1(_self);
  }, ["self"]),
  "{ :self | vertexList(self) }",
);

sl.addMethodToExistingType(
  "UndirectedEdge",
  "UndirectedEdge",
  "asUndirectedEdge",
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
  "UndirectedEdge",
  "UndirectedEdge",
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
  "UndirectedEdge",
  "UndirectedEdge",
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
  "UndirectedEdge",
  "UndirectedEdge",
  "forDot",
  ["self", "isMixed"],
  sl.annotateFunction(function (_self, _isMixed) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _isMixed";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2(_vertexList_1(_self), 2);
    let _i = _at_2(__SplVar2, 1);
    let _j = _at_2(__SplVar2, 2);
    /* Statements */
    return _if_3(
      _isMixed,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _format_2("% -> % [dir=none];", [_i, _j]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _format_2("% -- %;", [_i, _j]);
      }, []),
    );
  }, ["self", "isMixed"]),
  "{ :self :isMixed | let __SplVar2 = assertIsOfSize(vertexList(self), 2); let i = at(__SplVar2, 1); let j = at(__SplVar2, 2); if(isMixed, { format('% -> % [dir=none];',[i, j]) }, { format('% -- %;',[i, j]) }) }",
);

sl.addMethodToExistingType(
  "UndirectedEdge",
  "UndirectedEdge",
  "hasCommonVertex",
  ["self", "anEdge"],
  sl.annotateFunction(function (_self, _anEdge) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anEdge";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _includes_2(_vertexList_1(_self), _at_2(_anEdge, 1)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _includes_2(_vertexList_1(_self), _at_2(_anEdge, 2));
      }, []),
    );
  }, ["self", "anEdge"]),
  "{ :self :anEdge | |(includes(vertexList(self),at(anEdge, 1)), { includes(vertexList(self),at(anEdge, 2)) }) }",
);

sl.addMethodToExistingType(
  "UndirectedEdge",
  "UndirectedEdge",
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
  "UndirectedEdge",
  "UndirectedEdge",
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
  "UndirectedEdge",
  "UndirectedEdge",
  "isDirected",
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
  "UndirectedEdge",
  "UndirectedEdge",
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
  "UndirectedEdge",
  "UndirectedEdge",
  "isUndirected",
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
  "UndirectedEdge",
  "UndirectedEdge",
  "matchesEdge",
  ["self", "edge"],
  sl.annotateFunction(function (_self, _edge) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _edge";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_vertexList_1(_self), _sorted_1(_vertexList_1(_edge)));
  }, ["self", "edge"]),
  "{ :self :edge | =(vertexList(self), sorted(vertexList(edge))) }",
);

sl.addMethodToExistingType(
  "UndirectedEdge",
  "UndirectedEdge",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar3 = _assertIsOfSize_2(_vertexList_1(_self), 2);
    let _i = _at_2(__SplVar3, 1);
    let _j = _at_2(__SplVar3, 2);
    /* Statements */
    return _format_2("% --- %", [_i, _j]);
  }, ["self"]),
  "{ :self | let __SplVar3 = assertIsOfSize(vertexList(self), 2); let i = at(__SplVar3, 1); let j = at(__SplVar3, 2); format('% --- %',[i, j]) }",
);

sl.addMethodToExistingType(
  "UndirectedEdge",
  "UndirectedEdge",
  "rename",
  ["self", "aDictionary"],
  sl.annotateFunction(function (_self, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDictionary";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinusHyphenMinusHyphenMinus_2(
      _at_2(_aDictionary, _at_2(_self, 1)),
      _at_2(_aDictionary, _at_2(_self, 2)),
    );
  }, ["self", "aDictionary"]),
  "{ :self :aDictionary | ---(at(aDictionary, at(self, 1)), at(aDictionary, at(self, 2))) }",
);

sl.addMethodToExistingType(
  "UndirectedEdge",
  "UndirectedEdge",
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
  "UndirectedEdge",
  "UndirectedEdge",
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

sl.extendTypeOrTraitWithMethod(
  "List",
  "UndirectedEdge",
  "asEdge",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar4 = _assertIsOfSize_2(_self, 2);
    let _i = _at_2(__SplVar4, 1);
    let _j = _at_2(__SplVar4, 2);
    /* Statements */
    return _UndirectedEdge_2(_i, _j);
  }, ["self"]),
  "{ :self | let __SplVar4 = assertIsOfSize(self, 2); let i = at(__SplVar4, 1); let j = at(__SplVar4, 2); UndirectedEdge(i, j) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UndirectedEdge",
  "asEdgeList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _asEdge_1);
  }, ["self"]),
  "{ :self | collect(self,asEdge:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UndirectedEdge",
  "hyphenMinusHyphenMinusHyphenMinus",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _UndirectedEdge_2(_self, _anInteger);
  }, ["self", "anInteger"]),
  "{ :self :anInteger | UndirectedEdge(self, anInteger) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UndirectedEdge",
  "UndirectedEdge",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(
      _newUndirectedEdge_0(),
      _sorted_1([_self, _anInteger]),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger | initializeSlots(newUndirectedEdge(),sorted([self, anInteger])) }",
);
