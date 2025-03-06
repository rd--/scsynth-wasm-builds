sl.addType(
  false,
  "Polygon",
  "Polygon",
  ["Object"],
  ["vertexCoordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Polygon",
);

sl.addMethodToExistingType(
  "Polygon",
  "Polygon",
  "tilde",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlotsBy_3(_self, _anObject, _tilde_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | hasEqualSlotsBy(self,anObject, ~) }",
);

sl.addMethodToExistingType(
  "Polygon",
  "Polygon",
  "arcLength",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _polygonArcLength_1(_vertexCoordinates_1(_self));
  }, ["self"]),
  "{ :self | polygonArcLength(vertexCoordinates(self)) }",
);

sl.addMethodToExistingType(
  "Polygon",
  "Polygon",
  "area",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _shoelaceFormula_1(_vertexCoordinates_1(_self));
  }, ["self"]),
  "{ :self | shoelaceFormula(vertexCoordinates(self)) }",
);

sl.addMethodToExistingType(
  "Polygon",
  "Polygon",
  "at",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _vertexCount_1(_self);
    /* Statements */
    return _if_3(
      _equalsSign_2(_index, _plusSign_2(_n, 1)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_vertexCoordinates_1(_self), 1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_vertexCoordinates_1(_self), _index);
      }, []),
    );
  }, ["self", "index"]),
  "{ :self :index | let n = vertexCount(self); if((=(index, (+(n, 1)))), { at(vertexCoordinates(self), 1) }, { at(vertexCoordinates(self), index) }) }",
);

sl.addMethodToExistingType(
  "Polygon",
  "Polygon",
  "boundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinateBoundingBox_1(_vertexCoordinates_1(_self));
  }, ["self"]),
  "{ :self | coordinateBoundingBox(vertexCoordinates(self)) }",
);

sl.addMethodToExistingType(
  "Polygon",
  "Polygon",
  "centroid",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _polygonCentroid_1(_vertexCoordinates_1(_self));
  }, ["self"]),
  "{ :self | polygonCentroid(vertexCoordinates(self)) }",
);

sl.addMethodToExistingType(
  "Polygon",
  "Polygon",
  "dimension",
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
  "Polygon",
  "Polygon",
  "edgeCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _vertexCount_1(_self);
  }, ["self"]),
  "{ :self | vertexCount(self) }",
);

sl.addMethodToExistingType(
  "Polygon",
  "Polygon",
  "edgeList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _vertexCount_1(_self);
    let _answer = [];
    /* Statements */
    _toDo_3(
      1,
      _hyphenMinus_2(_k, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, [_i, _plusSign_2(_i, 1)]);
      }, ["i"]),
    );
    _add_2(_answer, [1, _k]);
    return _answer;
  }, ["self"]),
  "{ :self | let k = vertexCount(self); let answer = []; toDo(1, -(k, 1), { :i | add(answer,[i, +(i, 1)]) }); add(answer,[1, k]); answer }",
);

sl.addMethodToExistingType(
  "Polygon",
  "Polygon",
  "embeddingDimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_anyOne_1(_vertexCoordinates_1(_self)));
  }, ["self"]),
  "{ :self | size(anyOne(vertexCoordinates(self))) }",
);

sl.addMethodToExistingType(
  "Polygon",
  "Polygon",
  "faceCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 1;
  }, ["self"]),
  "{ :self | 1 }",
);

sl.addMethodToExistingType(
  "Polygon",
  "Polygon",
  "faceIndices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_vertexList_1(_self)];
  }, ["self"]),
  "{ :self | [vertexList(self)] }",
);

sl.addMethodToExistingType(
  "Polygon",
  "Polygon",
  "forSvg",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2('<polygon points="%" />', [
      _asSvgPointList_2(_vertexCoordinates_1(_self), _options),
    ]);
  }, ["self", "options"]),
  "{ :self :options | format('<polygon points=\"%\" />',[asSvgPointList(vertexCoordinates(self),options)]) }",
);

sl.addMethodToExistingType(
  "Polygon",
  "Polygon",
  "interiorAngles",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _polygonInteriorAngles_1(_vertexCoordinates_1(_self));
  }, ["self"]),
  "{ :self | polygonInteriorAngles(vertexCoordinates(self)) }",
);

sl.addMethodToExistingType(
  "Polygon",
  "Polygon",
  "project",
  ["self", "projection"],
  sl.annotateFunction(function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      throw new Error(errorMessage);
    } /* Statements */
    return _Polygon_1(
      _collect_2(_vertexCoordinates_1(_self), _asUnaryBlock_1(_projection)),
    );
  }, ["self", "projection"]),
  "{ :self :projection | Polygon(collect(vertexCoordinates(self),asUnaryBlock(projection))) }",
);

sl.addMethodToExistingType(
  "Polygon",
  "Polygon",
  "rotated",
  ["self", "theta"],
  sl.annotateFunction(function (_self, _theta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _theta";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _matrix = _rotationMatrix_1(_theta);
    let _center = _centroid_1(_self);
    /* Statements */
    return _Polygon_1(
      _collect_2(
        _vertexCoordinates_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSign_2(
            _dot_2(_matrix, _hyphenMinus_2(_each, _center)),
            _center,
          );
        }, ["each"]),
      ),
    );
  }, ["self", "theta"]),
  "{ :self :theta | let matrix = rotationMatrix(theta); let center = centroid(self); Polygon(collect(vertexCoordinates(self), { :each | +(dot(matrix,-(each, center)), center) })) }",
);

sl.addMethodToExistingType(
  "Polygon",
  "Polygon",
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
  "Polygon",
  "Polygon",
  "vertexCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_vertexCoordinates_1(_self));
  }, ["self"]),
  "{ :self | size(vertexCoordinates(self)) }",
);

sl.addMethodToExistingType(
  "Polygon",
  "Polygon",
  "vertexList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asList_1(_upOrDownTo_2(1, _size_1(_vertexCoordinates_1(_self))));
  }, ["self"]),
  "{ :self | asList(upOrDownTo(1, size(vertexCoordinates(self)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Polygon",
  "Polygon",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_depth_1(_self), 3),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_self, _Polygon_1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_2(_newPolygon_0(), _self);
      }, []),
    );
  }, ["self"]),
  "{ :self | if((>(depth(self), 3)), { collect(self,Polygon:/1) }, { initializeSlots(newPolygon(),self) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Polygon",
  "polygonArcLength",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _polylineArcLength_1(_self),
      _euclideanDistance_2(_last_1(_self), _first_1(_self)),
    );
  }, ["self"]),
  "{ :self | +(polylineArcLength(self), euclideanDistance(last(self),first(self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Polygon",
  "polygonCentroid",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _m = _solidus_2(1, _asterisk_2(_shoelaceFormula_1(_self), 6));
    let _p = _self;
    let _x = 0;
    let _y = 0;
    /* Statements */
    _toDo_3(
      1,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _j = _if_3(
          _equalsSign_2(_i, _n),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 1;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(_i, 1);
          }, []),
        );
        let _d = _hyphenMinus_2(
          _asterisk_2(_at_2(_at_2(_p, _i), 1), _at_2(_at_2(_p, _j), 2)),
          _asterisk_2(_at_2(_at_2(_p, _j), 1), _at_2(_at_2(_p, _i), 2)),
        );
        /* Statements */
        _x = _plusSign_2(
          _x,
          _asterisk_2(
            _plusSign_2(_at_2(_at_2(_p, _i), 1), _at_2(_at_2(_p, _j), 1)),
            _d,
          ),
        );
        return _y = _plusSign_2(
          _y,
          _asterisk_2(
            _plusSign_2(_at_2(_at_2(_p, _i), 2), _at_2(_at_2(_p, _j), 2)),
            _d,
          ),
        );
      }, ["i"]),
    );
    return _asterisk_2([_x, _y], _m);
  }, ["self"]),
  "{ :self | let n = size(self); let m = /(1, (*(shoelaceFormula(self), 6))); let p = self; let x = 0; let y = 0; toDo(1, n, { :i | let j = if((=(i, n)), { 1 }, { +(i, 1) }); let d = -((*(at(at(p, i), 1), at(at(p, j), 2))), (*(at(at(p, j), 1), at(at(p, i), 2)))); x := +(x, (*((+(at(at(p, i), 1), at(at(p, j), 1))), d))); y := +(y, (*((+(at(at(p, i), 2), at(at(p, j), 2))), d))) }); *([x, y], m) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Polygon",
  "polygonInteriorAngles",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _a = [];
    /* Statements */
    _toDo_3(
      1,
      _n,
      sl.annotateFunction(function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _i = _wrapIndex_2(_hyphenMinus_2(_j, 1), _n);
        let _k = _wrapIndex_2(_plusSign_2(_j, 1), _n);
        let _r = _planarAngle_1(_commercialAtAsterisk_2(_self, [_i, _j, _k]));
        /* Statements */
        return _add_2(_a, _r);
      }, ["j"]),
    );
    return _a;
  }, ["self"]),
  "{ :self | let n = size(self); let a = []; toDo(1, n, { :j | let i = wrapIndex((-(j, 1)),n); let k = wrapIndex((+(j, 1)),n); let r = planarAngle((@*(self, [i, j, k]))); add(a,r) }); a }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Polygon",
  "regularPolygon",
  ["self", "center", "radius", "theta"],
  sl.annotateFunction(function (_self, _center, _radius, _theta) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _center, _radius, _theta";
      throw new Error(errorMessage);
    } /* Statements */
    return _Polygon_1(_circlePoints_4(_self, _center, _radius, _theta));
  }, ["self", "center", "radius", "theta"]),
  "{ :self :center :radius :theta | Polygon(circlePoints(self,center, radius, theta)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "Polygon",
  "randomStarConvexPolygon",
  ["self", "k", "minRadius", "maxRadius"],
  sl.annotateFunction(function (_self, _k, _minRadius, _maxRadius) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _k, _minRadius, _maxRadius";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _d = 2;
    let _r = _randomReal_4(_self, _minRadius, _maxRadius, [_k]);
    /* Statements */
    return _if_3(
      _equalsSign_2(_d, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _theta = _sort_1(_randomReal_4(_self, 0, _pi_1(2), [_k]));
        /* Statements */
        return _Polygon_1(
          _withCollect_3(
            _r,
            _theta,
            sl.annotateFunction(function (_i, _j) {
              /* ArityCheck */
              if (arguments.length !== 2) {
                const errorMessage = "Arity: expected 2, _i, _j";
                throw new Error(errorMessage);
              } /* Statements */
              return _fromPolarCoordinates_1([_i, _j]);
            }, ["i", "j"]),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_d, 3),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(
              _self,
              "randomStarConvexPolygon: d=3 not implemented",
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "randomStarConvexPolygon: d={2,3}");
          }, []),
        );
      }, []),
    );
  }, ["self", "k", "minRadius", "maxRadius"]),
  "{ :self :k :minRadius :maxRadius | let d = 2; let r = randomReal(self,minRadius, maxRadius, [k]); if((=(d, 2)), { let theta = sort(randomReal(self,0, pi(2), [k])); Polygon(withCollect(r, theta, { :i :j | fromPolarCoordinates([i, j]) })) }, { if((=(d, 3)), { error(self,'randomStarConvexPolygon: d=3 not implemented') }, { error(self,'randomStarConvexPolygon: d={2,3}') }) }) }",
);
