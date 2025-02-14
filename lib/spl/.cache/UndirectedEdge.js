sl.addType(
  false,
  "UndirectedEdge",
  "UndirectedEdge",
  ["Object", "Indexable"],
  ["vertexList"],
);

sl.copyTraitToType(
  "Object",
  "UndirectedEdge",
);

sl.copyTraitToType(
  "Indexable",
  "UndirectedEdge",
);

sl.addMethod(
  "UndirectedEdge",
  "UndirectedEdge",
  "lessThanSign",
  ["self", "anEdge"],
  function (_self, _anEdge) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anEdge";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _precedes_2(_vertexList_1(_self), _vertexList_1(_anEdge));
  },
  "{ :self :anEdge |\n\t\tself.vertexList.precedes(anEdge.vertexList)\n\t}",
);

sl.addMethod(
  "UndirectedEdge",
  "UndirectedEdge",
  "lessThanSignEqualsSign",
  ["self", "anEdge"],
  function (_self, _anEdge) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anEdge";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(_equalsSign_2(_self, _anEdge), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _lessThanSign_2(_self, _anEdge);
    });
  },
  "{ :self :anEdge |\n\t\tself = anEdge | {\n\t\t\tself < anEdge\n\t\t}\n\t}",
);

sl.addMethod(
  "UndirectedEdge",
  "UndirectedEdge",
  "asDirectedEdge",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym19 = _assertIsOfSize_2(_vertexList_1(_self), 2),
      _i = _at_2(__genSym19, 1),
      _j = _at_2(__genSym19, 2);
    /* Statements */
    return _DirectedEdge_2(_i, _j);
  },
  "{ :self |\n\t\tlet [i, j] = self.vertexList;\n\t\tDirectedEdge(i, j)\n\t}",
);

sl.addMethod(
  "UndirectedEdge",
  "UndirectedEdge",
  "asEdge",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "UndirectedEdge",
  "UndirectedEdge",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _vertexList_1(_self);
  },
  "{ :self |\n\t\tself.vertexList\n\t}",
);

sl.addMethod(
  "UndirectedEdge",
  "UndirectedEdge",
  "asUndirectedEdge",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "UndirectedEdge",
  "UndirectedEdge",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_vertexList_1(_self), _index);
  },
  "{ :self :index |\n\t\tself.vertexList[index]\n\t}",
);

sl.addMethod(
  "UndirectedEdge",
  "UndirectedEdge",
  "forDot",
  ["self", "isMixed"],
  function (_self, _isMixed) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _isMixed";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym20 = _assertIsOfSize_2(_vertexList_1(_self), 2),
      _i = _at_2(__genSym20, 1),
      _j = _at_2(__genSym20, 2);
    /* Statements */
    return _if_3(_isMixed, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _format_2("% -> % [dir=none];", [_i, _j]);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _format_2("% -- %;", [_i, _j]);
    });
  },
  "{ :self :isMixed |\n\t\tlet [i, j] = self.vertexList;\n\t\tisMixed.if {\n\t\t\t'% -> % [dir=none];'.format([i, j])\n\t\t} {\n\t\t\t'% -- %;'.format([i, j])\n\t\t}\n\t}",
);

sl.addMethod(
  "UndirectedEdge",
  "UndirectedEdge",
  "hasCommonVertex",
  ["self", "anEdge"],
  function (_self, _anEdge) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anEdge";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _includes_2(_vertexList_1(_self), _at_2(_anEdge, 1)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _includes_2(_vertexList_1(_self), _at_2(_anEdge, 2));
      },
    );
  },
  "{ :self :anEdge |\n\t\tself.vertexList.includes(anEdge[1]) | {\n\t\t\tself.vertexList.includes(anEdge[2])\n\t\t}\n\t}",
);

sl.addMethod(
  "UndirectedEdge",
  "UndirectedEdge",
  "includes",
  ["self", "vertex"],
  function (_self, _vertex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vertex";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_vertexList_1(_self), _vertex);
  },
  "{ :self :vertex |\n\t\tself.vertexList.includes(vertex)\n\t}",
);

sl.addMethod(
  "UndirectedEdge",
  "UndirectedEdge",
  "indices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return [1, 2];
  },
  "{ :self |\n\t\t[1 2]\n\t}",
);

sl.addMethod(
  "UndirectedEdge",
  "UndirectedEdge",
  "isDirected",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addMethod(
  "UndirectedEdge",
  "UndirectedEdge",
  "isEdge",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "UndirectedEdge",
  "UndirectedEdge",
  "isUndirected",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "UndirectedEdge",
  "UndirectedEdge",
  "matchesEdge",
  ["self", "edge"],
  function (_self, _edge) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _edge";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_vertexList_1(_self), _sorted_1(_vertexList_1(_edge)));
  },
  "{ :self :edge |\n\t\tself.vertexList = edge.vertexList.sorted\n\t}",
);

sl.addMethod(
  "UndirectedEdge",
  "UndirectedEdge",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym21 = _assertIsOfSize_2(_vertexList_1(_self), 2),
      _i = _at_2(__genSym21, 1),
      _j = _at_2(__genSym21, 2);
    /* Statements */
    return _format_2("% --- %", [_i, _j]);
  },
  "{ :self |\n\t\tlet [i, j] = self.vertexList;\n\t\t'% --- %'.format([i, j])\n\t}",
);

sl.addMethod(
  "UndirectedEdge",
  "UndirectedEdge",
  "rename",
  ["self", "aDictionary"],
  function (_self, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDictionary";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinusHyphenMinusHyphenMinus_2(
      _at_2(_aDictionary, _at_2(_self, 1)),
      _at_2(_aDictionary, _at_2(_self, 2)),
    );
  },
  "{ :self :aDictionary |\n\t\taDictionary[self[1]] --- aDictionary[self[2]]\n\t}",
);

sl.addMethod(
  "UndirectedEdge",
  "UndirectedEdge",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return 2;
  },
  "{ :self |\n\t\t2\n\t}",
);

sl.addMethod(
  "UndirectedEdge",
  "UndirectedEdge",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addMethod(
  "List",
  "UndirectedEdge",
  "asEdge",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym22 = _assertIsOfSize_2(_self, 2),
      _i = _at_2(__genSym22, 1),
      _j = _at_2(__genSym22, 2);
    /* Statements */
    return _UndirectedEdge_2(_i, _j);
  },
  "{ :self |\n\t\tlet [i, j] = self;\n\t\tUndirectedEdge(i, j)\n\t}",
);

sl.addMethod(
  "List",
  "UndirectedEdge",
  "asEdgeList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _asEdge_1);
  },
  "{ :self |\n\t\tself.collect(asEdge:/1)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "UndirectedEdge",
  "hyphenMinusHyphenMinusHyphenMinus",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _UndirectedEdge_2(_self, _anInteger);
  },
  "{ :self :anInteger |\n\t\tUndirectedEdge(self, anInteger)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "UndirectedEdge",
  "UndirectedEdge",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(
      _newUndirectedEdge_0(),
      _sorted_1([_self, _anInteger]),
    );
  },
  "{ :self :anInteger |\n\t\tnewUndirectedEdge().initializeSlots([self, anInteger].sorted)\n\t}",
);
