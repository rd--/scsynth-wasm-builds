sl.addType(
  false,
  "Polygon",
  "Polygon",
  ["Object", "Equatable", "Geometry"],
  ["vertexCoordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Polygon",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Polygon",
);

sl.copyTraitMethodsToType(
  "Geometry",
  "Polygon",
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
    return _abs_1(_shoelaceFormula_1(_vertexCoordinates_1(_self)));
  }, ["self"]),
  "{ :self | abs(shoelaceFormula(vertexCoordinates(self))) }",
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
  "containsPoint",
  ["self", "aPoint"],
  sl.annotateFunction(function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      throw new Error(errorMessage);
    } /* Statements */
    return _isOdd_1(_crossingNumber_2(_vertexCoordinates_1(_self), _aPoint));
  }, ["self", "aPoint"]),
  "{ :self :aPoint | isOdd(crossingNumber(vertexCoordinates(self),aPoint)) }",
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
  "downsample",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _vertexCoordinates_1(_self);
    /* Statements */
    return _if_3(
      _lessThanSign_2(_solidusSolidus_2(_size_1(_c), _anInteger), 3),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Point_1(_polygonCentroid_1(_c));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Polygon_1(_downsample_2(_c, _anInteger));
      }, []),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger | let c = vertexCoordinates(self); if((<((//(size(c), anInteger)), 3)), { Point(polygonCentroid(c)) }, { Polygon(downsample(c,anInteger)) }) }",
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
  "svgFragment",
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
  "innerPolygons",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [];
  }, ["self"]),
  "{ :self | [] }",
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
  "isConvex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(
      _interiorAngles_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_each, _pi_1(1));
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self | allSatisfy(interiorAngles(self), { :each | <(each, pi(1)) }) }",
);

sl.addMethodToExistingType(
  "Polygon",
  "Polygon",
  "midpointPolygon",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Polygon_1(_midpointPolygon_1(_vertexCoordinates_1(_self)));
  }, ["self"]),
  "{ :self | Polygon(midpointPolygon(vertexCoordinates(self))) }",
);

sl.addMethodToExistingType(
  "Polygon",
  "Polygon",
  "outerPolygon",
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
  "rotate",
  ["self", "theta", "center"],
  sl.annotateFunction(function (_self, _theta, _center) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _theta, _center";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _matrix = _rotationMatrix_1(_theta);
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
  }, ["self", "theta", "center"]),
  "{ :self :theta :center | let matrix = rotationMatrix(theta); Polygon(collect(vertexCoordinates(self), { :each | +(dot(matrix,-(each, center)), center) })) }",
);

sl.addMethodToExistingType(
  "Polygon",
  "Polygon",
  "rotate",
  ["self", "theta"],
  sl.annotateFunction(function (_self, _theta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _theta";
      throw new Error(errorMessage);
    } /* Statements */
    return _rotate_3(_self, _theta, _centroid_1(_self));
  }, ["self", "theta"]),
  "{ :self :theta | rotate(self,theta, centroid(self)) }",
);

sl.addMethodToExistingType(
  "Polygon",
  "Polygon",
  "scale",
  ["self", "m"],
  sl.annotateFunction(function (_self, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _centroid_1(_self);
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
          return _plusSign_2(_asterisk_2(_hyphenMinus_2(_each, _c), _m), _c);
        }, ["each"]),
      ),
    );
  }, ["self", "m"]),
  "{ :self :m | let c = centroid(self); Polygon(collect(vertexCoordinates(self), { :each | +((*((-(each, c)), m)), c) })) }",
);

sl.addMethodToExistingType(
  "Polygon",
  "Polygon",
  "sideLengths",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = _vertexCoordinates_1(_self);
    /* Statements */
    return _collect_2(
      _upOrDownTo_2(2, _plusSign_2(_size_1(_v), 1)),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _euclideanDistance_2(
          _atWrap_2(_v, _i),
          _atWrap_2(_v, _plusSign_2(_i, 1)),
        );
      }, ["i"]),
    );
  }, ["self"]),
  "{ :self | let v = vertexCoordinates(self); collect(upOrDownTo(2, +(size(v), 1)), { :i | euclideanDistance(atWrap(v,i),atWrap(v,+(i, 1))) }) }",
);

sl.addMethodToExistingType(
  "Polygon",
  "Polygon",
  "signedArea",
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
  "sutherlandHodgmanAlgorithm",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _Polygon_1(
      _sutherlandHodgmanAlgorithm_2(
        _vertexCoordinates_1(_self),
        _vertexCoordinates_1(_operand),
      ),
    );
  }, ["self", "operand"]),
  "{ :self :operand | Polygon(sutherlandHodgmanAlgorithm(vertexCoordinates(self),vertexCoordinates(operand))) }",
);

sl.addMethodToExistingType(
  "Polygon",
  "Polygon",
  "translate",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _Polygon_1(
      _collect_2(
        _vertexCoordinates_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSign_2(_each, _operand);
        }, ["each"]),
      ),
    );
  }, ["self", "operand"]),
  "{ :self :operand | Polygon(collect(vertexCoordinates(self), { :each | +(each, operand) })) }",
);

sl.addMethodToExistingType(
  "Polygon",
  "Polygon",
  "triangulation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_embeddingDimension_1(_self), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _basicPolygonTriangulation_1(_vertexCoordinates_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "triangulation");
      }, []),
    );
  }, ["self"]),
  "{ :self | if((=(embeddingDimension(self), 2)), { basicPolygonTriangulation(vertexCoordinates(self)) }, { error(self,'triangulation') }) }",
);

sl.addMethodToExistingType(
  "Polygon",
  "Polygon",
  "vertexAngle",
  ["self", "i"],
  sl.annotateFunction(function (_self, _i) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _i";
      throw new Error(errorMessage);
    } /* Statements */
    return _polygonVertexAngle_2(_vertexCoordinates_1(_self), _i);
  }, ["self", "i"]),
  "{ :self :i | polygonVertexAngle(vertexCoordinates(self),i) }",
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
  "crossingNumber",
  ["self", "aPoint"],
  sl.annotateFunction(function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includes_2(_self, _aPoint),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar1 = _assertIsOfSize_2(_aPoint, 2);
        let _x = _at_2(__SplVar1, 1);
        let _y = _at_2(__SplVar1, 2);
        let _answer = 0;
        /* Statements */
        _toDo_3(
          1,
          _size_1(_self),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SplVar2 = _assertIsOfSize_2(_at_2(_self, _i), 2);
            let _x1 = _at_2(__SplVar2, 1);
            let _y1 = _at_2(__SplVar2, 2);
            let __SplVar3 = _assertIsOfSize_2(
              _atWrap_2(_self, _plusSign_2(_i, 1)),
              2,
            );
            let _x2 = _at_2(__SplVar3, 1);
            let _y2 = _at_2(__SplVar3, 2);
            /* Statements */
            return _ifTrue_2(
              _ampersand_2(
                _verticalLine_2(
                  _ampersand_2(
                    _lessThanSignEqualsSign_2(_y2, _y),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _lessThanSign_2(_y, _y1);
                    }, []),
                  ),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _ampersand_2(
                      _lessThanSignEqualsSign_2(_y1, _y),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _lessThanSign_2(_y, _y2);
                      }, []),
                    );
                  }, []),
                ),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _lessThanSign_2(
                    _x,
                    _plusSign_2(
                      _solidus_2(
                        _asterisk_2(
                          _hyphenMinus_2(_x1, _x2),
                          _hyphenMinus_2(_y, _y2),
                        ),
                        _hyphenMinus_2(_y1, _y2),
                      ),
                      _x2,
                    ),
                  );
                }, []),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _answer = _plusSign_2(_answer, 1);
              }, []),
            );
          }, ["i"]),
        );
        return _answer;
      }, []),
    );
  }, ["self", "aPoint"]),
  "{ :self :aPoint | if(includes(self,aPoint), { 0 }, { let __SplVar1 = assertIsOfSize(aPoint, 2); let x = at(__SplVar1, 1); let y = at(__SplVar1, 2); let answer = 0; toDo(1, size(self), { :i | let __SplVar2 = assertIsOfSize(at(self,i), 2); let x1 = at(__SplVar2, 1); let y1 = at(__SplVar2, 2); let __SplVar3 = assertIsOfSize(atWrap(self,+(i, 1)), 2); let x2 = at(__SplVar3, 1); let y2 = at(__SplVar3, 2); ifTrue((&((|((&((<=(y2, y)), { <(y, y1) })), { &((<=(y1, y)), { <(y, y2) }) })), { <(x, (+(/(*((-(x1, x2)), (-(y, y2))), (-(y1, y2))), x2))) })), { answer := +(answer, 1) }) }); answer }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Polygon",
  "midpointPolygon",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _upOrDownTo_2(1, _size_1(_self)),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _midpoint_1([
          _at_2(_self, _i),
          _atWrap_2(_self, _plusSign_2(_i, 1)),
        ]);
      }, ["i"]),
    );
  }, ["self"]),
  "{ :self | collect(upOrDownTo(1, size(self)), { :i | midpoint([at(self,i), atWrap(self,+(i, 1))]) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Polygon",
  "parallelogram",
  ["p", "v"],
  sl.annotateFunction(function (_p, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p, _v";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar4 = _assertIsOfSize_2(_v, 2);
    let _v1 = _at_2(__SplVar4, 1);
    let _v2 = _at_2(__SplVar4, 2);
    /* Statements */
    return _Polygon_1([
      _p,
      _plusSign_2(_p, _v1),
      _plusSign_2(_plusSign_2(_p, _v1), _v2),
      _plusSign_2(_p, _v2),
    ]);
  }, ["p", "v"]),
  "{ :p :v | let __SplVar4 = assertIsOfSize(v, 2); let v1 = at(__SplVar4, 1); let v2 = at(__SplVar4, 2); Polygon([p, +(p, v1), +(+(p, v1), v2), +(p, v2)]) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Polygon",
  "pentagram",
  ["center", "radius", "theta"],
  sl.annotateFunction(function (_center, _radius, _theta) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _center, _radius, _theta";
      throw new Error(errorMessage);
    } /* Statements */
    return _starPolygon_5(5, 2, _center, _radius, _theta);
  }, ["center", "radius", "theta"]),
  "{ :center :radius :theta | starPolygon(5, 2, center, radius, theta) }",
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
    let _answer = [];
    /* Statements */
    return _collect_2(
      _upOrDownTo_2(1, _size_1(_self)),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _polygonVertexAngle_2(_self, _i);
      }, ["i"]),
    );
  }, ["self"]),
  "{ :self | let n = size(self); let answer = []; collect(upOrDownTo(1, size(self)), { :i | polygonVertexAngle(self,i) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Polygon",
  "polygonVertexAngle",
  ["self", "j"],
  sl.annotateFunction(function (_self, _j) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _j";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _p = _at_2(_self, _j);
    let _q1 = _at_2(_self, _wrapIndex_2(_plusSign_2(_j, 1), _n));
    let _q2 = _at_2(_self, _wrapIndex_2(_hyphenMinus_2(_j, 1), _n));
    /* Statements */
    return _planarAngle_1(_hyphenMinusGreaterThanSign_2(_p, [_q1, _q2]));
  }, ["self", "j"]),
  "{ :self :j | let n = size(self); let p = at(self,j); let q1 = at(self,wrapIndex((+(j, 1)),n)); let q2 = at(self,wrapIndex((-(j, 1)),n)); planarAngle((->(p, [q1, q2]))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Polygon",
  "windingNumber",
  ["self", "aPoint"],
  sl.annotateFunction(function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 0;
    let _isLeft_6 = sl.annotateFunction(function (_x1, _y1, _x2, _y2, _x, _y) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage = "Arity: expected 6, _x1, _y1, _x2, _y2, _x, _y";
        throw new Error(errorMessage);
      } /* Statements */
      return _hyphenMinus_2(
        _asterisk_2(_hyphenMinus_2(_x2, _x1), _hyphenMinus_2(_y, _y1)),
        _asterisk_2(_hyphenMinus_2(_x, _x1), _hyphenMinus_2(_y2, _y1)),
      );
    }, ["x1", "y1", "x2", "y2", "x", "y"]);
    let __SplVar5 = _assertIsOfSize_2(_aPoint, 2);
    let _x = _at_2(__SplVar5, 1);
    let _y = _at_2(__SplVar5, 2);
    /* Statements */
    _toDo_3(
      1,
      _size_1(_self),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar6 = _assertIsOfSize_2(_at_2(_self, _i), 2);
        let _x1 = _at_2(__SplVar6, 1);
        let _y1 = _at_2(__SplVar6, 2);
        let __SplVar7 = _assertIsOfSize_2(
          _atWrap_2(_self, _plusSign_2(_i, 1)),
          2,
        );
        let _x2 = _at_2(__SplVar7, 1);
        let _y2 = _at_2(__SplVar7, 2);
        /* Statements */
        return _if_3(
          _lessThanSignEqualsSign_2(_y1, _y),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _ampersand_2(
                _greaterThanSign_2(_y2, _y),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _greaterThanSign_2(
                    _isLeft_6(_x1, _y1, _x2, _y2, _x, _y),
                    0,
                  );
                }, []),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _answer = _plusSign_2(_answer, 1);
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _ampersand_2(
                _lessThanSignEqualsSign_2(_y2, _y),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _lessThanSign_2(
                    _isLeft_6(_x1, _y1, _x2, _y2, _x, _y),
                    0,
                  );
                }, []),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _answer = _hyphenMinus_2(_answer, 1);
              }, []),
            );
          }, []),
        );
      }, ["i"]),
    );
    return _answer;
  }, ["self", "aPoint"]),
  "{ :self :aPoint | let answer = 0; let isLeft = { :x1 :y1 :x2 :y2 :x :y | -((*((-(x2, x1)), (-(y, y1)))), (*((-(x, x1)), (-(y2, y1))))) }; let __SplVar5 = assertIsOfSize(aPoint, 2); let x = at(__SplVar5, 1); let y = at(__SplVar5, 2); toDo(1, size(self), { :i | let __SplVar6 = assertIsOfSize(at(self,i), 2); let x1 = at(__SplVar6, 1); let y1 = at(__SplVar6, 2); let __SplVar7 = assertIsOfSize(atWrap(self,+(i, 1)), 2); let x2 = at(__SplVar7, 1); let y2 = at(__SplVar7, 2); if((<=(y1, y)), { ifTrue((&(>(y2, y), { >(isLeft(x1, y1, x2, y2, x, y), 0) })), { answer := +(answer, 1) }) }, { ifTrue((&(<=(y2, y), { <(isLeft(x1, y1, x2, y2, x, y), 0) })), { answer := -(answer, 1) }) }) }); answer }",
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
  "SmallFloat",
  "Polygon",
  "starFigure",
  ["p", "q"],
  sl.annotateFunction(function (_p, _q) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p, _q";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isCoprime_2(_p, _q),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2([_p, _q], "starFigure: coprime");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _n = _solidusSolidus_2(_p, _q);
        let _m = _solidusSolidus_2(_p, _n);
        let _v = _circlePoints_4(_p, [0, 0], 1, 0);
        let _i = _asList_1(
          _thenTo_3(0, _q, _hyphenMinus_2(_asterisk_2(_n, _q), 1)),
        );
        /* Statements */
        return _GeometryCollection_1(
          _collect_2(
            _Span_3(1, _m, 1),
            sl.annotateFunction(function (_j) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _j";
                throw new Error(errorMessage);
              } /* Statements */
              return _Polygon_1(
                _atAll_2(
                  _v,
                  _plusSignPlusSign_2(_mod_3(_plusSign_2(_i, _j), _p, 1), [_j]),
                ),
              );
            }, ["j"]),
          ),
        );
      }, []),
    );
  }, ["p", "q"]),
  "{ :p :q | if(isCoprime(p, q), { error([p, q],'starFigure: coprime') }, { let n = //(p, q); let m = //(p, n); let v = circlePoints(p,[0, 0], 1, 0); let i = asList(thenTo(0, q, -(*(n, q), 1))); GeometryCollection(collect(Span(1, m, 1), { :j | Polygon(atAll(v,++(mod((+(i, j)),p, 1), [j]))) })) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Polygon",
  "starPolygon",
  ["p", "q", "c", "r", "theta"],
  sl.annotateFunction(function (_p, _q, _c, _r, _theta) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _p, _q, _c, _r, _theta";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isCoprime_2(_p, _q),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _v = _circlePoints_4(_p, _c, _r, _theta);
        let _i = _mod_3(
          _asList_1(_thenTo_3(1, _plusSign_2(1, _q), _asterisk_2(_p, _q))),
          _p,
          1,
        );
        /* Statements */
        return _Polygon_1(
          _plusSignPlusSign_2(_atAll_2(_v, _i), [_first_1(_v)]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2([_p, _q], "starPolygon: not coprime");
      }, []),
    );
  }, ["p", "q", "c", "r", "theta"]),
  "{ :p :q :c :r :theta | if(isCoprime(p, q), { let v = circlePoints(p,c, r, theta); let i = mod(asList(thenTo(1, +(1, q), *(p, q))),p, 1); Polygon(++(atAll(v,i), [first(v)])) }, { error([p, q],'starPolygon: not coprime') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Polygon",
  "starPolygon",
  ["p", "q"],
  sl.annotateFunction(function (_p, _q) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p, _q";
      throw new Error(errorMessage);
    } /* Statements */
    return _starPolygon_5(_p, _q, [0, 0], 1, 0);
  }, ["p", "q"]),
  "{ :p :q | starPolygon(p, q, [0, 0], 1, 0) }",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "Polygon",
  "randomConvexHullPolygon",
  ["r", "d", "n", "shape"],
  sl.annotateFunction(function (_r, _d, _n, _shape) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _r, _d, _n, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _randomConvexHullPolygon_3(_r, _d, _n);
      }, []),
      _shape,
    );
  }, ["r", "d", "n", "shape"]),
  "{ :r :d :n :shape | !({ randomConvexHullPolygon(r,d, n) }, shape) }",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "Polygon",
  "randomConvexHullPolygon",
  ["r", "d", "n"],
  sl.annotateFunction(function (_r, _d, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _r, _d, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _Polygon_1(_convexHull_1(_randomVariate_3(_d, _r, [_n])));
  }, ["r", "d", "n"]),
  "{ :r :d :n | Polygon(convexHull(randomVariate(d,r, [n]))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "Polygon",
  "randomSimplePolygon",
  ["r", "n", "shape"],
  sl.annotateFunction(function (_r, _n, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _r, _n, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _randomSimplePolygon_2(_r, _n);
      }, []),
      _shape,
    );
  }, ["r", "n", "shape"]),
  "{ :r :n :shape | !({ randomSimplePolygon(r,n) }, shape) }",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "Polygon",
  "randomSimplePolygon",
  ["r", "n"],
  sl.annotateFunction(function (_r, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _r, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _randomReal_3(_r, [0, 1], [_n, 2]);
    let __SplVar8 = _assertIsOfSize_2(_findShortestTour_1(_p), 2);
    let __SplUnused9 = _at_2(__SplVar8, 1);
    let _i = _at_2(__SplVar8, 2);
    /* Statements */
    return _Polygon_1(_commercialAtAsterisk_2(_p, _i));
  }, ["r", "n"]),
  "{ :r :n | let p = randomReal(r,[0, 1], [n, 2]); let __SplVar8 = assertIsOfSize(findShortestTour(p), 2); let _ = at(__SplVar8, 1); let i = at(__SplVar8, 2); Polygon((@*(p, i))) }",
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
    let _r = _randomReal_3(_self, [_minRadius, _maxRadius], [_k]);
    /* Statements */
    return _if_3(
      _equalsSign_2(_d, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _theta = _sort_1(_randomReal_3(_self, [0, _pi_1(2)], [_k]));
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
            return _unimplementedCase_2(_self, "randomStarConvexPolygon");
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
  "{ :self :k :minRadius :maxRadius | let d = 2; let r = randomReal(self,[minRadius, maxRadius], [k]); if((=(d, 2)), { let theta = sort(randomReal(self,[0, pi(2)], [k])); Polygon(withCollect(r, theta, { :i :j | fromPolarCoordinates([i, j]) })) }, { if((=(d, 3)), { unimplementedCase(self,'randomStarConvexPolygon') }, { error(self,'randomStarConvexPolygon: d={2,3}') }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Polygon",
  "basicPolygonTriangulation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    const a = sl.earcut(_catenate_1(_self));
    const n = a.length / 3;
    const b = new Array(n);
    for (let i = 0; i < n; i++) {
      let c = new Array(3);
      b[i] = c;
      for (let j = 0; j < 3; j++) {
        c[j] = a[(i * 3) + j] + 1;
      }
    }
    return b;
  }, ["self"]),
  "{ :self | <primitive: const a = sl.earcut(_catenate_1(_self));\n\t\tconst n = a.length / 3;\n\t\tconst b = new Array(n);\n\t\tfor (let i = 0; i < n; i++) {\n\t\t\tlet c = new Array(3);\n\t\t\tb[i] = c;\n\t\t\tfor (let j = 0; j < 3; j++) {\n\t\t\t\tc[j] = a[(i * 3) + j] + 1;\n\t\t\t}\n\t\t}\n\t\treturn b;>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Polygon",
  "sutherlandHodgmanAlgorithm",
  ["subjectPolygon", "clipPolygon"],
  sl.annotateFunction(function (_subjectPolygon, _clipPolygon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _subjectPolygon, _clipPolygon";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _outputList = _subjectPolygon;
    let _cp1 = _last_1(_clipPolygon);
    let _cp2 = null;
    let _s = null;
    let _e = null;
    let _inside_1 = sl.annotateFunction(function (_p) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _p";
        throw new Error(errorMessage);
      } /* Statements */
      return _greaterThanSign_2(
        _asterisk_2(
          _hyphenMinus_2(_at_2(_cp2, 1), _at_2(_cp1, 1)),
          _hyphenMinus_2(_at_2(_p, 2), _at_2(_cp1, 2)),
        ),
        _asterisk_2(
          _hyphenMinus_2(_at_2(_cp2, 2), _at_2(_cp1, 2)),
          _hyphenMinus_2(_at_2(_p, 1), _at_2(_cp1, 1)),
        ),
      );
    }, ["p"]);
    let _computeIntersection_0 = sl.annotateFunction(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _dc = [
        _hyphenMinus_2(_at_2(_cp1, 1), _at_2(_cp2, 1)),
        _hyphenMinus_2(_at_2(_cp1, 2), _at_2(_cp2, 2)),
      ];
      let _dp = [
        _hyphenMinus_2(_at_2(_s, 1), _at_2(_e, 1)),
        _hyphenMinus_2(_at_2(_s, 2), _at_2(_e, 2)),
      ];
      let _n1 = _hyphenMinus_2(
        _asterisk_2(_at_2(_cp1, 1), _at_2(_cp2, 2)),
        _asterisk_2(_at_2(_cp1, 2), _at_2(_cp2, 1)),
      );
      let _n2 = _hyphenMinus_2(
        _asterisk_2(_at_2(_s, 1), _at_2(_e, 2)),
        _asterisk_2(_at_2(_s, 2), _at_2(_e, 1)),
      );
      let _n3 = _solidus_2(
        1,
        _hyphenMinus_2(
          _asterisk_2(_at_2(_dc, 1), _at_2(_dp, 2)),
          _asterisk_2(_at_2(_dc, 2), _at_2(_dp, 1)),
        ),
      );
      /* Statements */
      return [
        _asterisk_2(
          _hyphenMinus_2(
            _asterisk_2(_n1, _at_2(_dp, 1)),
            _asterisk_2(_n2, _at_2(_dc, 1)),
          ),
          _n3,
        ),
        _asterisk_2(
          _hyphenMinus_2(
            _asterisk_2(_n1, _at_2(_dp, 2)),
            _asterisk_2(_n2, _at_2(_dc, 2)),
          ),
          _n3,
        ),
      ];
    }, []);
    /* Statements */
    _do_2(
      _clipPolygon,
      sl.annotateFunction(function (_clipVertex) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _clipVertex";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _inputList = _outputList;
        /* Statements */
        _cp2 = _clipVertex;
        _outputList = [];
        _s = _last_1(_inputList);
        _do_2(
          _inputList,
          sl.annotateFunction(function (_subjectVertex) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _subjectVertex";
              throw new Error(errorMessage);
            } /* Statements */
            _e = _subjectVertex;
            _if_3(
              _inside_1(_e),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _ifFalse_2(
                  _inside_1(_s),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _add_2(_outputList, _computeIntersection_0());
                  }, []),
                );
                return _add_2(_outputList, _e);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ifTrue_2(
                  _inside_1(_s),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _add_2(_outputList, _computeIntersection_0());
                  }, []),
                );
              }, []),
            );
            return _s = _e;
          }, ["subjectVertex"]),
        );
        return _cp1 = _cp2;
      }, ["clipVertex"]),
    );
    return _outputList;
  }, ["subjectPolygon", "clipPolygon"]),
  "{ :subjectPolygon :clipPolygon | let outputList = subjectPolygon; let cp1 = last(clipPolygon); let cp2 = nil; let s = nil; let e = nil; let inside = { :p | >((*((-(at(cp2, 1), at(cp1, 1))), (-(at(p, 2), at(cp1, 2))))), (*((-(at(cp2, 2), at(cp1, 2))), (-(at(p, 1), at(cp1, 1)))))) }; let computeIntersection = { let dc = [-(at(cp1, 1), at(cp2, 1)), -(at(cp1, 2), at(cp2, 2))]; let dp = [-(at(s, 1), at(e, 1)), -(at(s, 2), at(e, 2))]; let n1 = -((*(at(cp1, 1), at(cp2, 2))), (*(at(cp1, 2), at(cp2, 1)))); let n2 = -((*(at(s, 1), at(e, 2))), (*(at(s, 2), at(e, 1)))); let n3 = /(1, (-((*(at(dc, 1), at(dp, 2))), (*(at(dc, 2), at(dp, 1)))))); [*((-((*(n1, at(dp, 1))), (*(n2, at(dc, 1))))), n3), *((-((*(n1, at(dp, 2))), (*(n2, at(dc, 2))))), n3)] }; do(clipPolygon, { :clipVertex | let inputList = outputList; cp2 := clipVertex; outputList := []; s := last(inputList); do(inputList, { :subjectVertex | e := subjectVertex; if(inside(e), { ifFalse(inside(s), { add(outputList,computeIntersection()) }); add(outputList,e) }, { ifTrue(inside(s), { add(outputList,computeIntersection()) }) }); s := e }); cp1 := cp2 }); outputList }",
);
