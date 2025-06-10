sl.addType(
  false,
  "BezierCurve",
  "BezierCurve",
  ["Object", "Cache"],
  ["controlPoints", "splineDegree", "cache"],
);

sl.copyTraitMethodsToType(
  "Object",
  "BezierCurve",
);

sl.copyTraitMethodsToType(
  "Cache",
  "BezierCurve",
);

sl.addMethodToExistingType(
  "BezierCurve",
  "BezierCurve",
  "approximation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "approximation",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _catenate_1(_componentApproximationList_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self | cached(self, 'approximation', { catenate(componentApproximationList(self)) }) }",
);

sl.addMethodToExistingType(
  "BezierCurve",
  "BezierCurve",
  "arcLength",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "arcLength",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _sum_1(_componentArcLengthList_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self | cached(self, 'arcLength', { sum(componentArcLengthList(self)) }) }",
);

sl.addMethodToExistingType(
  "BezierCurve",
  "BezierCurve",
  "boundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinateBoundingBox_1(_controlPoints_1(_self));
  }, ["self"]),
  "{ :self | coordinateBoundingBox(controlPoints(self)) }",
);

sl.addMethodToExistingType(
  "BezierCurve",
  "BezierCurve",
  "componentArcLengthList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "componentArcLengthList",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_componentDistanceList_1(_self), _last_1);
      }, []),
    );
  }, ["self"]),
  "{ :self | cached(self, 'componentArcLengthList', { collect(componentDistanceList(self),last:/1) }) }",
);

sl.addMethodToExistingType(
  "BezierCurve",
  "BezierCurve",
  "componentApproximationList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "componentApproximationList",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _n = _componentApproximationSize_1(_self);
        /* Statements */
        return _collect_2(
          _componentCoordinatesList_1(_self),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _bezierApproximation_2(_each, _n);
          }, ["each"]),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | cached(self, 'componentApproximationList', { let n = componentApproximationSize(self); collect(componentCoordinatesList(self), { :each | bezierApproximation(each,n) }) }) }",
);

sl.addMethodToExistingType(
  "BezierCurve",
  "BezierCurve",
  "componentApproximationSize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_splineDegree_1(_self), 64);
  }, ["self"]),
  "{ :self | *(splineDegree(self), 64) }",
);

sl.addMethodToExistingType(
  "BezierCurve",
  "BezierCurve",
  "componentCoordinatesList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "componentCoordinatesList",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _partition_3(
          _controlPoints_1(_self),
          _plusSign_2(_splineDegree_1(_self), 1),
          _splineDegree_1(_self),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | cached(self, 'componentCoordinatesList', { partition(controlPoints(self),+(splineDegree(self), 1), splineDegree(self)) }) }",
);

sl.addMethodToExistingType(
  "BezierCurve",
  "BezierCurve",
  "componentCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _hyphenMinus_2(_size_1(_controlPoints_1(_self)), 1),
      _splineDegree_1(_self),
    );
  }, ["self"]),
  "{ :self | /((-(size(controlPoints(self)), 1)), splineDegree(self)) }",
);

sl.addMethodToExistingType(
  "BezierCurve",
  "BezierCurve",
  "componentDerivativesList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "componentDerivativesList",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _bezierDerivatives_1(_componentCoordinatesList_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self | cached(self, 'componentDerivativesList', { bezierDerivatives(componentCoordinatesList(self)) }) }",
);

sl.addMethodToExistingType(
  "BezierCurve",
  "BezierCurve",
  "componentDistanceList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "componentDistanceList",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _componentApproximationList_1(_self),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _foldList_3(
              _adjacentPairsCollect_2(_each, _euclideanDistance_2),
              0,
              _plusSign_2,
            );
          }, ["each"]),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | cached(self, 'componentDistanceList', { collect(componentApproximationList(self), { :each | foldList(adjacentPairsCollect(each,euclideanDistance:/2),0, +) }) }) }",
);

sl.addMethodToExistingType(
  "BezierCurve",
  "BezierCurve",
  "distance",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "distance",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = [];
        let _sum = 0;
        /* Statements */
        _collect_2(
          _componentDistanceList_1(_self),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            _addAllLast_2(_answer, _plusSign_2(_each, _sum));
            return _sum = _last_1(_answer);
          }, ["each"]),
        );
        return _answer;
      }, []),
    );
  }, ["self"]),
  "{ :self | cached(self, 'distance', { let answer = []; let sum = 0; collect(componentDistanceList(self), { :each | addAllLast(answer,+(each, sum)); sum := last(answer) }); answer }) }",
);

sl.addMethodToExistingType(
  "BezierCurve",
  "BezierCurve",
  "forSvg",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _splineDegree_1(_self);
    /* Statements */
    return _if_3(
      _equalsSign_2(_n, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _forSvg_2(_Line_1(_controlPoints_1(_self)), _options);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _precision = _at_2(_options, "precision");
        let _p = _controlPoints_1(_self);
        let _z = _if_3(
          _equalsSign_2(_n, 2),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return "Q ";
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(_n, 3),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return "C ";
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _error_2(_self, "not Q or C");
              }, []),
            );
          }, []),
        );
        let _c = _chunksOfFrom_3(_p, _n, 2);
        let _d = _stringJoin_2([
          _format_2("M %,%", [
            _printStringToFixed_2(_at_2(_at_2(_p, 1), 1), _precision),
            _printStringToFixed_2(_at_2(_at_2(_p, 1), 2), _precision),
          ]),
          _collect_2(
            _c,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _plusSignPlusSign_2(
                _z,
                _asSvgPointList_2(_each, _options),
              );
            }, ["each"]),
          ),
        ], " ");
        /* Statements */
        return _format_2('<path d="%" />', [_d]);
      }, []),
    );
  }, ["self", "options"]),
  "{ :self :options | let n = splineDegree(self); if((=(n, 1)), { forSvg(Line(controlPoints(self)),options) }, { let precision = at(options, 'precision'); let p = controlPoints(self); let z = if((=(n, 2)), { 'Q ' }, { if((=(n, 3)), { 'C ' }, { error(self,'not Q or C') }) }); let c = chunksOfFrom(p,n, 2); let d = stringJoin([format('M %,%',[printStringToFixed(at(at(p, 1), 1),precision), printStringToFixed(at(at(p, 1), 2),precision)]), collect(c, { :each | ++(z, asSvgPointList(each,options)) })],' '); format('<path d=\"%\" />',[d]) }) }",
);

sl.addMethodToExistingType(
  "BezierCurve",
  "BezierCurve",
  "isComposite",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isValid_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _not_1(_isSimple_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self | &(isValid(self), { not(isSimple(self)) }) }",
);

sl.addMethodToExistingType(
  "BezierCurve",
  "BezierCurve",
  "isSimple",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(
      _size_1(_controlPoints_1(_self)),
      _plusSign_2(_splineDegree_1(_self), 1),
    );
  }, ["self"]),
  "{ :self | =(size(controlPoints(self)), (+(splineDegree(self), 1))) }",
);

sl.addMethodToExistingType(
  "BezierCurve",
  "BezierCurve",
  "isValid",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isInteger_1(_componentCount_1(_self));
  }, ["self"]),
  "{ :self | isInteger(componentCount(self)) }",
);

sl.addMethodToExistingType(
  "BezierCurve",
  "BezierCurve",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_controlPoints_1(_self));
  }, ["self"]),
  "{ :self | size(controlPoints(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "BezierCurve",
  "BezierCurve",
  ["self", "degree"],
  sl.annotateFunction(function (_self, _degree) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _degree";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_rank_1(_self), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _self,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _BezierCurve_2(_each, _degree);
          }, ["each"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_4(
          _newBezierCurve_0(),
          _self,
          _degree,
          _Record_1([]),
        );
      }, []),
    );
  }, ["self", "degree"]),
  "{ :self :degree | if((>(rank(self), 2)), { collect(self, { :each | BezierCurve(each, degree) }) }, { initializeSlots(newBezierCurve(),self, degree, Record([])) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "BezierCurve",
  "bezierApproximation",
  ["self", "size"],
  sl.annotateFunction(function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _discretize_2(_hyphenMinusHyphenMinus_2(0, 1), _size),
      _bezierFunction_1(_self),
    );
  }, ["self", "size"]),
  "{ :self :size | collect(discretize((--(0, 1)),size),bezierFunction(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "BezierCurve",
  "bezierDerivatives",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _p = _self;
    /* Statements */
    _downToDo_3(
      _size_1(_p),
      2,
      sl.annotateFunction(function (_d) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _d";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _c = _hyphenMinus_2(_d, 1);
        let _q = [];
        /* Statements */
        _toDo_3(
          1,
          _c,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(
              _q,
              _asterisk_2(
                _c,
                _hyphenMinus_2(_at_2(_p, _plusSign_2(_j, 1)), _at_2(_p, _j)),
              ),
            );
          }, ["j"]),
        );
        _add_2(_answer, _q);
        return _p = _q;
      }, ["d"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = []; let p = self; downToDo(size(p), 2, { :d | let c = -(d, 1); let q = []; toDo(1, c, { :j | add(q,*(c, (-(at(p, +(j, 1)), at(p, j))))) }); add(answer,q); p := q }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "BezierCurve",
  "bezierDistanceTable",
  ["self", "size"],
  sl.annotateFunction(function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _muList = _discretize_2(_hyphenMinusHyphenMinus_2(0, 1), _size);
    /* Statements */
    return [
      _muList,
      _foldList_3(
        _adjacentPairsCollect_2(
          _collect_2(_muList, _bezierFunction_1(_self)),
          _euclideanDistance_2,
        ),
        0,
        _plusSign_2,
      ),
    ];
  }, ["self", "size"]),
  "{ :self :size | let muList = discretize((--(0, 1)),size); [muList, foldList(adjacentPairsCollect(collect(muList,bezierFunction(self)),euclideanDistance:/2),0, +)] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "BezierCurve",
  "bezierFunction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_3(
      _size_1(_self),
      [
        _hyphenMinusGreaterThanSign_2(
          2,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return sl.annotateFunction(function (_x) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _x";
                throw new Error(errorMessage);
              } /* Statements */
              return _linearBezierFunctionAt_2(_self, _x);
            }, ["x"]);
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          3,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return sl.annotateFunction(function (_x) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _x";
                throw new Error(errorMessage);
              } /* Statements */
              return _quadraticBezierFunctionAt_2(_self, _x);
            }, ["x"]);
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          4,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return sl.annotateFunction(function (_x) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _x";
                throw new Error(errorMessage);
              } /* Statements */
              return _cubicBezierFunctionAt_2(_self, _x);
            }, ["x"]);
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return sl.annotateFunction(function (_x) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _x";
            throw new Error(errorMessage);
          } /* Statements */
          return _deCasteljausAlgorithm_2(_self, _x);
        }, ["x"]);
      }, []),
    );
  }, ["self"]),
  "{ :self | caseOf(size(self), [->(2, { { :x | linearBezierFunctionAt(self,x) } }), ->(3, { { :x | quadraticBezierFunctionAt(self,x) } }), ->(4, { { :x | cubicBezierFunctionAt(self,x) } })], { { :x | deCasteljausAlgorithm(self,x) } }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "BezierCurve",
  "bezierFunctionAt",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_2(_bezierFunction_1(_self), _x);
  }, ["self", "x"]),
  "{ :self :x | value(bezierFunction(self),x) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "BezierCurve",
  "bezierFunctionAtBernsteinBasis",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _hyphenMinus_2(_size_1(_self), 1);
    let _b = _collect_2(
      _asList_1(_upOrDownTo_2(0, _n)),
      sl.annotateFunction(function (_d) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _d";
          throw new Error(errorMessage);
        } /* Statements */
        return _bernsteinBasis_3(_n, _d, _x);
      }, ["d"]),
    );
    /* Statements */
    return _sum_1(_asterisk_2(_b, _self));
  }, ["self", "x"]),
  "{ :self :x | let n = -(size(self), 1); let b = collect(asList(upOrDownTo(0, n)), { :d | bernsteinBasis(n,d, x) }); sum((*(b, self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "BezierCurve",
  "bezierHull",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _self;
    let _q = _copy_1(_p);
    let _i = _plusSign_2(_size_1(_p), 1);
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_size_1(_p), 1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _r = [];
        let _l = _hyphenMinus_2(_size_1(_p), 1);
        /* Statements */
        _toDo_3(
          1,
          _hyphenMinus_2(_size_1(_p), 1),
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _z = _linearInterpolation_3(
              _at_2(_p, _j),
              _at_2(_p, _plusSign_2(_j, 1)),
              _x,
            );
            /* Statements */
            _addLast_2(_q, _z);
            return _addLast_2(_r, _z);
          }, ["j"]),
        );
        return _p = _r;
      }, []),
    );
    return _q;
  }, ["self", "x"]),
  "{ :self :x | let p = self; let q = copy(p); let i = +(size(p), 1); whileTrue({ >(size(p), 1) }, { let r = []; let l = -(size(p), 1); toDo(1, -(size(p), 1), { :j | let z = linearInterpolation(at(p, j), at(p, +(j, 1)), x); addLast(q,z); addLast(r,z) }); p := r }); q }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "BezierCurve",
  "bezierSplitAt",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _left = [];
    let _right = [];
    let _deCasteljaus_2 = sl.annotateFunction(function (_p, _t) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _p, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _equalsSign_2(_size_1(_p), 1),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _addLast_2(_left, _at_2(_p, 1));
          return _addFirst_2(_right, _at_2(_p, 1));
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _k = _hyphenMinus_2(_size_1(_p), 1);
          /* Statements */
          return _deCasteljaus_2(
            _collect_2(
              _upOrDownTo_2(1, _k),
              sl.annotateFunction(function (_i) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _i";
                  throw new Error(errorMessage);
                } /* Statements */
                _ifTrue_2(
                  _equalsSign_2(_i, 1),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _addLast_2(_left, _at_2(_p, _i));
                  }, []),
                );
                _ifTrue_2(
                  _equalsSign_2(_i, _k),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _addFirst_2(_right, _at_2(_p, _plusSign_2(_i, 1)));
                  }, []),
                );
                return _plusSign_2(
                  _asterisk_2(_hyphenMinus_2(1, _t), _at_2(_p, _i)),
                  _asterisk_2(_t, _at_2(_p, _plusSign_2(_i, 1))),
                );
              }, ["i"]),
            ),
            _t,
          );
        }, []),
      );
    }, ["p", "t"]);
    /* Statements */
    _deCasteljaus_2(_self, _x);
    return _Tuple_1([_left, _right]);
  }, ["self", "x"]),
  "{ :self :x | let left = []; let right = []; let deCasteljaus = { :p :t | if((=(size(p), 1)), { addLast(left,at(p, 1)); addFirst(right,at(p, 1)) }, { let k = -(size(p), 1); deCasteljaus(collect(upOrDownTo(1, k), { :i | ifTrue((=(i, 1)), { addLast(left,at(p, i)) }); ifTrue((=(i, k)), { addFirst(right,at(p, +(i, 1))) }); +((*((-(1, t)), at(p, i))), (*(t, at(p, +(i, 1))))) }),t) }) }; deCasteljaus(self, x); Tuple([left, right]) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "BezierCurve",
  "bezierTrace",
  ["self", "size"],
  sl.annotateFunction(function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL38 = _assertIsOfSize_2(_bezierDistanceTable_2(_self, _size), 2);
    let _muList = _at_2(__SPL38, 1);
    let _d = _at_2(__SPL38, 2);
    let _arcLength = _last_1(_d);
    /* Statements */
    return _collect_2(
      _discretize_2(_hyphenMinusHyphenMinus_2(0, _arcLength), _size),
      _composeLeft_2(
        _bezierFunction_1(_self),
        _linearInterpolator_2(_d, _muList),
      ),
    );
  }, ["self", "size"]),
  "{ :self :size | let __SPL38 = assertIsOfSize(bezierDistanceTable(self,size), 2); let muList = at(__SPL38, 1); let d = at(__SPL38, 2); let arcLength = last(d); collect(discretize((--(0, arcLength)),size),composeLeft(bezierFunction(self),linearInterpolator(d,muList))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "BezierCurve",
  "cubicBezierFunctionAt",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL39 = _assertIsOfSize_2(_self, 4);
    let _p1 = _at_2(__SPL39, 1);
    let _p2 = _at_2(__SPL39, 2);
    let _p3 = _at_2(__SPL39, 3);
    let _p4 = _at_2(__SPL39, 4);
    let _u = _hyphenMinus_2(1, _x);
    let _x2 = _asterisk_2(_x, _x);
    let _x3 = _asterisk_2(_x2, _x);
    let _u2 = _asterisk_2(_u, _u);
    let _u3 = _asterisk_2(_u2, _u);
    /* Statements */
    return _plusSign_2(
      _plusSign_2(
        _plusSign_2(
          _asterisk_2(_p1, _u3),
          _asterisk_2(_p2, _asterisk_2(_asterisk_2(3, _u2), _x)),
        ),
        _asterisk_2(_p3, _asterisk_2(_asterisk_2(3, _u), _x2)),
      ),
      _asterisk_2(_p4, _x3),
    );
  }, ["self", "x"]),
  "{ :self :x | let __SPL39 = assertIsOfSize(self, 4); let p1 = at(__SPL39, 1); let p2 = at(__SPL39, 2); let p3 = at(__SPL39, 3); let p4 = at(__SPL39, 4); let u = -(1, x); let x2 = *(x, x); let x3 = *(x2, x); let u2 = *(u, u); let u3 = *(u2, u); +(+(+((*(p1, u3)), (*(p2, (*(*(3, u2), x))))), (*(p3, (*(*(3, u), x2))))), (*(p4, x3))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "BezierCurve",
  "deCasteljausAlgorithm",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_self), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_self, 1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _deCasteljausAlgorithm_2(
          _collect_2(
            _upOrDownTo_2(1, _hyphenMinus_2(_size_1(_self), 1)),
            sl.annotateFunction(function (_i) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _i";
                throw new Error(errorMessage);
              } /* Statements */
              return _plusSign_2(
                _asterisk_2(_hyphenMinus_2(1, _x), _at_2(_self, _i)),
                _asterisk_2(_x, _at_2(_self, _plusSign_2(_i, 1))),
              );
            }, ["i"]),
          ),
          _x,
        );
      }, []),
    );
  }, ["self", "x"]),
  "{ :self :x | if((=(size(self), 1)), { at(self, 1) }, { deCasteljausAlgorithm(collect(upOrDownTo(1, -(size(self), 1)), { :i | +((*((-(1, x)), at(self, i))), (*(x, at(self, +(i, 1))))) }),x) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "BezierCurve",
  "linearBezierFunctionAt",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL40 = _assertIsOfSize_2(_self, 2);
    let _p1 = _at_2(__SPL40, 1);
    let _p2 = _at_2(__SPL40, 2);
    let _u = _hyphenMinus_2(1, _x);
    /* Statements */
    return _plusSign_2(_asterisk_2(_p1, _u), _asterisk_2(_p2, _x));
  }, ["self", "x"]),
  "{ :self :x | let __SPL40 = assertIsOfSize(self, 2); let p1 = at(__SPL40, 1); let p2 = at(__SPL40, 2); let u = -(1, x); +((*(p1, u)), (*(p2, x))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "BezierCurve",
  "quadraticBezierFunctionAt",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL41 = _assertIsOfSize_2(_self, 3);
    let _p1 = _at_2(__SPL41, 1);
    let _p2 = _at_2(__SPL41, 2);
    let _p3 = _at_2(__SPL41, 3);
    let _x2 = _asterisk_2(_x, _x);
    let _u = _hyphenMinus_2(1, _x);
    let _u2 = _asterisk_2(_u, _u);
    /* Statements */
    return _plusSign_2(
      _plusSign_2(
        _asterisk_2(_p1, _u2),
        _asterisk_2(_asterisk_2(_asterisk_2(_p2, 2), _u), _x),
      ),
      _asterisk_2(_p3, _x2),
    );
  }, ["self", "x"]),
  "{ :self :x | let __SPL41 = assertIsOfSize(self, 3); let p1 = at(__SPL41, 1); let p2 = at(__SPL41, 2); let p3 = at(__SPL41, 3); let x2 = *(x, x); let u = -(1, x); let u2 = *(u, u); +(+((*(p1, u2)), (*(*(*(p2, 2), u), x))), (*(p3, x2))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "BezierCurve",
  "quadraticBezierToCubicBezier",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL42 = _assertIsOfSize_2(_self, 3);
    let _q1 = _at_2(__SPL42, 1);
    let _q2 = _at_2(__SPL42, 2);
    let _q3 = _at_2(__SPL42, 3);
    let _c1 = _q1;
    let _c2 = _plusSign_2(
      _q1,
      _asterisk_2(_hyphenMinus_2(_q2, _q1), _solidus_2(2, 3)),
    );
    let _c3 = _plusSign_2(
      _q3,
      _asterisk_2(_hyphenMinus_2(_q2, _q3), _solidus_2(2, 3)),
    );
    let _c4 = _q3;
    /* Statements */
    return [_c1, _c2, _c3, _c4];
  }, ["self"]),
  "{ :self | let __SPL42 = assertIsOfSize(self, 3); let q1 = at(__SPL42, 1); let q2 = at(__SPL42, 2); let q3 = at(__SPL42, 3); let c1 = q1; let c2 = +(q1, (*((-(q2, q1)), (/(2, 3))))); let c3 = +(q3, (*((-(q2, q3)), (/(2, 3))))); let c4 = q3; [c1, c2, c3, c4] }",
);
