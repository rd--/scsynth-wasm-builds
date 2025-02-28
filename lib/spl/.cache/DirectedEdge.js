sl.addType(
  false,
  "DirectedEdge",
  "DirectedEdge",
  ["Object", "Indexable"],
  ["vertexList"],
);

sl.copyTraitMethodsToType(
  "Object",
  "DirectedEdge",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "DirectedEdge",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "lessThanSign",
  ["self", "anEdge"],
  function (_self, _anEdge) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anEdge";
      throw new Error(errorMessage);
    } /* Statements */
    return _precedes_2(_vertexList_1(_self), _vertexList_1(_anEdge));
  },
  "{ :self :anEdge | precedes(vertexList(self),vertexList(anEdge)) }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "lessThanSignEqualsSign",
  ["self", "anEdge"],
  function (_self, _anEdge) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anEdge";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(_equalsSign_2(_self, _anEdge), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _lessThanSign_2(_self, _anEdge);
    });
  },
  "{ :self :anEdge | |(=(self, anEdge), { <(self, anEdge) }) }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "asAssociation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL14 = _assertIsOfSize_2(_vertexList_1(_self), 2);
    let _from = _at_2(__SPL14, 1);
    let _to = _at_2(__SPL14, 2);
    /* Statements */
    return _hyphenMinusGreaterThanSign_2(_from, _to);
  },
  "{ :self | let __SPL14 = assertIsOfSize(vertexList(self), 2); let from = at(__SPL14, 1); let to = at(__SPL14, 2); ->(from, to) }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "asDirectedEdge",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "asEdge",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "asUndirectedEdge",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL15 = _assertIsOfSize_2(_vertexList_1(_self), 2);
    let _i = _at_2(__SPL15, 1);
    let _j = _at_2(__SPL15, 2);
    /* Statements */
    return _UndirectedEdge_2(_i, _j);
  },
  "{ :self | let __SPL15 = assertIsOfSize(vertexList(self), 2); let i = at(__SPL15, 1); let j = at(__SPL15, 2); UndirectedEdge(i, j) }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_vertexList_1(_self), _index);
  },
  "{ :self :index | at(vertexList(self), index) }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "forDot",
  ["self", "isMixed"],
  function (_self, _isMixed) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _isMixed";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL16 = _assertIsOfSize_2(_vertexList_1(_self), 2);
    let _from = _at_2(__SPL16, 1);
    let _to = _at_2(__SPL16, 2);
    /* Statements */
    return _format_2("% -> %;", [_from, _to]);
  },
  "{ :self :isMixed | let __SPL16 = assertIsOfSize(vertexList(self), 2); let from = at(__SPL16, 1); let to = at(__SPL16, 2); format('% -> %;',[from, to]) }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "head",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, 2);
  },
  "{ :self | at(self, 2) }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "includes",
  ["self", "vertex"],
  function (_self, _vertex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertex";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_vertexList_1(_self), _vertex);
  },
  "{ :self :vertex | includes(vertexList(self),vertex) }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "indices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [1, 2];
  },
  "{ :self | [1, 2] }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "isDirected",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :self | true }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "isEdge",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :self | true }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "isUndirected",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  },
  "{ :self | false }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "matchesEdge",
  ["self", "edge"],
  function (_self, _edge) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _edge";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(_equalsSign_2(_self, _edge), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isUndirectedEdge_1(_edge), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _matchesEdge_2(_edge, _self);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return false;
      });
    });
  },
  "{ :self :edge | |(=(self, edge), { if(isUndirectedEdge(edge), { matchesEdge(edge,self) }, { false }) }) }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL17 = _assertIsOfSize_2(_vertexList_1(_self), 2);
    let _i = _at_2(__SPL17, 1);
    let _j = _at_2(__SPL17, 2);
    /* Statements */
    return _format_2("% --> %", [_i, _j]);
  },
  "{ :self | let __SPL17 = assertIsOfSize(vertexList(self), 2); let i = at(__SPL17, 1); let j = at(__SPL17, 2); format('% --> %',[i, j]) }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "rename",
  ["self", "aDictionary"],
  function (_self, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDictionary";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinusHyphenMinusGreaterThanSign_2(
      _at_2(_aDictionary, _at_2(_self, 1)),
      _at_2(_aDictionary, _at_2(_self, 2)),
    );
  },
  "{ :self :aDictionary | -->(at(aDictionary, at(self, 1)), at(aDictionary, at(self, 2))) }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 2;
  },
  "{ :self | 2 }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self | storeStringAsInitializeSlots(self) }",
);

sl.addMethodToExistingType(
  "DirectedEdge",
  "DirectedEdge",
  "tail",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, 1);
  },
  "{ :self | at(self, 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "Association",
  "DirectedEdge",
  "asEdge",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _DirectedEdge_2(_key_1(_self), _value_1(_self));
  },
  "{ :self | DirectedEdge(key(self), value(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DirectedEdge",
  "hyphenMinusHyphenMinusGreaterThanSign",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _DirectedEdge_2(_self, _anInteger);
  },
  "{ :self :anInteger | DirectedEdge(self, anInteger) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DirectedEdge",
  "DirectedEdge",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newDirectedEdge_0(), [_self, _anInteger]);
  },
  "{ :self :anInteger | initializeSlots(newDirectedEdge(),[self, anInteger]) }",
);
