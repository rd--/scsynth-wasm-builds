sl.addType(
  false,
  "DirectedEdge",
  "DirectedEdge",
  ["Object", "Storeable", "Equatable", "Comparable", "Indexable"],
  ["vertexList"],
);

sl.copyTraitMethodsToType(
  "Object",
  "DirectedEdge",
);

sl.copyTraitMethodsToType(
  "Storeable",
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
    let __SplVar1 = _assertIsOfSize_2(_vertexList_1(_self), 2);
    let _from = _at_2(__SplVar1, 1);
    let _to = _at_2(__SplVar1, 2);
    /* Statements */
    return _hyphenMinusGreaterThanSign_2(_from, _to);
  }, ["self"]),
  "{ :self |\n\t\tlet [from, to] = self.vertexList;\n\t\tfrom -> to\n\t}",
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
  "{ :self |\n\t\tself\n\t}",
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
  "{ :self |\n\t\tself\n\t}",
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
    let __SplVar2 = _assertIsOfSize_2(_vertexList_1(_self), 2);
    let _i = _at_2(__SplVar2, 1);
    let _j = _at_2(__SplVar2, 2);
    /* Statements */
    return _UndirectedEdge_2(_i, _j);
  }, ["self"]),
  "{ :self |\n\t\tlet [i, j] = self.vertexList;\n\t\tUndirectedEdge(i, j)\n\t}",
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
  "{ :self :index |\n\t\tself.vertexList.at(index)\n\t}",
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
  "{ :self :anEdge |\n\t\tself.vertexList.compare(anEdge.vertexList)\n\t}",
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
    let __SplVar3 = _assertIsOfSize_2(_vertexList_1(_self), 2);
    let _from = _at_2(__SplVar3, 1);
    let _to = _at_2(__SplVar3, 2);
    /* Statements */
    return _format_2("% -> %;", [_from, _to]);
  }, ["self", "isMixed"]),
  "{ :self :isMixed |\n\t\tlet [from, to] = self.vertexList;\n\t\t'% -> %;'.format([from, to])\n\t}",
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
  "{ :self |\n\t\tself[2]\n\t}",
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
  "{ :self :vertex |\n\t\tself.vertexList.includes(vertex)\n\t}",
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
  "{ :self |\n\t\t[1 2]\n\t}",
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
  "{ :self |\n\t\ttrue\n\t}",
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
  "{ :self |\n\t\ttrue\n\t}",
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
  "{ :self |\n\t\tfalse\n\t}",
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
  "{ :self :edge |\n\t\tself = edge | {\n\t\t\tedge.isUndirectedEdge.if {\n\t\t\t\tedge.matchesEdge(self)\n\t\t\t} {\n\t\t\t\tfalse\n\t\t\t}\n\t\t}\n\t}",
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
    let __SplVar4 = _assertIsOfSize_2(_vertexList_1(_self), 2);
    let _i = _at_2(__SplVar4, 1);
    let _j = _at_2(__SplVar4, 2);
    /* Statements */
    return _format_2("% --> %", [_i, _j]);
  }, ["self"]),
  "{ :self |\n\t\tlet [i, j] = self.vertexList;\n\t\t'% --> %'.format([i, j])\n\t}",
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
  "{ :self :aDictionary |\n\t\taDictionary[self[1]] --> aDictionary[self[2]]\n\t}",
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
  "{ :self |\n\t\t2\n\t}",
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
  "{ :self |\n\t\tself[1]\n\t}",
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
  "{ :self |\n\t\tDirectedEdge(self.key, self.value)\n\t}",
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
  "{ :self :anInteger |\n\t\tDirectedEdge(self, anInteger)\n\t}",
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
  "{ :self :anInteger |\n\t\tnewDirectedEdge().initializeSlots([self, anInteger])\n\t}",
);
