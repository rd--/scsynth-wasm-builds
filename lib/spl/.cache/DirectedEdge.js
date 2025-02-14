sl.addType(
  false,
  "DirectedEdge",
  "DirectedEdge",
  ["Object", "Indexable"],
  ["vertexList"],
);

sl.copyTraitToType(
  "Object",
  "DirectedEdge",
);

sl.copyTraitToType(
  "Indexable",
  "DirectedEdge",
);

sl.addMethod(
  "DirectedEdge",
  "DirectedEdge",
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
  "DirectedEdge",
  "DirectedEdge",
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
  "DirectedEdge",
  "DirectedEdge",
  "asAssociation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym6 = _assertIsOfSize_2(_vertexList_1(_self), 2),
      _from = _at_2(__genSym6, 1),
      _to = _at_2(__genSym6, 2);
    /* Statements */
    return _hyphenMinusGreaterThanSign_2(_from, _to);
  },
  "{ :self |\n\t\tlet [from, to] = self.vertexList;\n\t\tfrom -> to\n\t}",
);

sl.addMethod(
  "DirectedEdge",
  "DirectedEdge",
  "asDirectedEdge",
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
  "DirectedEdge",
  "DirectedEdge",
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
  "DirectedEdge",
  "DirectedEdge",
  "asUndirectedEdge",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym7 = _assertIsOfSize_2(_vertexList_1(_self), 2),
      _i = _at_2(__genSym7, 1),
      _j = _at_2(__genSym7, 2);
    /* Statements */
    return _UndirectedEdge_2(_i, _j);
  },
  "{ :self |\n\t\tlet [i, j] = self.vertexList;\n\t\tUndirectedEdge(i, j)\n\t}",
);

sl.addMethod(
  "DirectedEdge",
  "DirectedEdge",
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
  "DirectedEdge",
  "DirectedEdge",
  "forDot",
  ["self", "isMixed"],
  function (_self, _isMixed) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _isMixed";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym8 = _assertIsOfSize_2(_vertexList_1(_self), 2),
      _from = _at_2(__genSym8, 1),
      _to = _at_2(__genSym8, 2);
    /* Statements */
    return _format_2("% -> %;", [_from, _to]);
  },
  "{ :self :isMixed |\n\t\tlet [from, to] = self.vertexList;\n\t\t'% -> %;'.format([from, to])\n\t}",
);

sl.addMethod(
  "DirectedEdge",
  "DirectedEdge",
  "head",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, 2);
  },
  "{ :self |\n\t\tself[2]\n\t}",
);

sl.addMethod(
  "DirectedEdge",
  "DirectedEdge",
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
  "DirectedEdge",
  "DirectedEdge",
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
  "DirectedEdge",
  "DirectedEdge",
  "isDirected",
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
  "DirectedEdge",
  "DirectedEdge",
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
  "DirectedEdge",
  "DirectedEdge",
  "isUndirected",
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
  "DirectedEdge",
  "DirectedEdge",
  "matchesEdge",
  ["self", "edge"],
  function (_self, _edge) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _edge";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(_equalsSign_2(_self, _edge), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isUndirectedEdge_1(_edge), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _matchesEdge_2(_edge, _self);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return false;
      });
    });
  },
  "{ :self :edge |\n\t\tself = edge | {\n\t\t\tedge.isUndirectedEdge.if {\n\t\t\t\tedge.matchesEdge(self)\n\t\t\t} {\n\t\t\t\tfalse\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "DirectedEdge",
  "DirectedEdge",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym9 = _assertIsOfSize_2(_vertexList_1(_self), 2),
      _i = _at_2(__genSym9, 1),
      _j = _at_2(__genSym9, 2);
    /* Statements */
    return _format_2("% --> %", [_i, _j]);
  },
  "{ :self |\n\t\tlet [i, j] = self.vertexList;\n\t\t'% --> %'.format([i, j])\n\t}",
);

sl.addMethod(
  "DirectedEdge",
  "DirectedEdge",
  "rename",
  ["self", "aDictionary"],
  function (_self, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDictionary";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinusHyphenMinusGreaterThanSign_2(
      _at_2(_aDictionary, _at_2(_self, 1)),
      _at_2(_aDictionary, _at_2(_self, 2)),
    );
  },
  "{ :self :aDictionary |\n\t\taDictionary[self[1]] --> aDictionary[self[2]]\n\t}",
);

sl.addMethod(
  "DirectedEdge",
  "DirectedEdge",
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
  "DirectedEdge",
  "DirectedEdge",
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
  "DirectedEdge",
  "DirectedEdge",
  "tail",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, 1);
  },
  "{ :self |\n\t\tself[1]\n\t}",
);

sl.addMethod(
  "Association",
  "DirectedEdge",
  "asEdge",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _DirectedEdge_2(_key_1(_self), _value_1(_self));
  },
  "{ :self |\n\t\tDirectedEdge(self.key, self.value)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "DirectedEdge",
  "hyphenMinusHyphenMinusGreaterThanSign",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _DirectedEdge_2(_self, _anInteger);
  },
  "{ :self :anInteger |\n\t\tDirectedEdge(self, anInteger)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "DirectedEdge",
  "DirectedEdge",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newDirectedEdge_0(), [_self, _anInteger]);
  },
  "{ :self :anInteger |\n\t\tnewDirectedEdge().initializeSlots([self, anInteger])\n\t}",
);
