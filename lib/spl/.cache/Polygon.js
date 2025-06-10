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
        let __SPL1 = _assertIsOfSize_2(_aPoint, 2);
        let _x = _at_2(__SPL1, 1);
        let _y = _at_2(__SPL1, 2);
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
            let __SPL2 = _assertIsOfSize_2(_at_2(_self, _i), 2);
            let _x1 = _at_2(__SPL2, 1);
            let _y1 = _at_2(__SPL2, 2);
            let __SPL3 = _assertIsOfSize_2(
              _atWrap_2(_self, _plusSign_2(_i, 1)),
              2,
            );
            let _x2 = _at_2(__SPL3, 1);
            let _y2 = _at_2(__SPL3, 2);
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
  "{ :self :aPoint | if(includes(self,aPoint), { 0 }, { let __SPL1 = assertIsOfSize(aPoint, 2); let x = at(__SPL1, 1); let y = at(__SPL1, 2); let answer = 0; toDo(1, size(self), { :i | let __SPL2 = assertIsOfSize(at(self,i), 2); let x1 = at(__SPL2, 1); let y1 = at(__SPL2, 2); let __SPL3 = assertIsOfSize(atWrap(self,+(i, 1)), 2); let x2 = at(__SPL3, 1); let y2 = at(__SPL3, 2); ifTrue((&((|((&((<=(y2, y)), { <(y, y1) })), { &((<=(y1, y)), { <(y, y2) }) })), { <(x, (+(/(*((-(x1, x2)), (-(y, y2))), (-(y1, y2))), x2))) })), { answer := +(answer, 1) }) }); answer }) }",
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
    let __SPL4 = _assertIsOfSize_2(_v, 2);
    let _v1 = _at_2(__SPL4, 1);
    let _v2 = _at_2(__SPL4, 2);
    /* Statements */
    return _Polygon_1([
      _p,
      _plusSign_2(_p, _v1),
      _plusSign_2(_plusSign_2(_p, _v1), _v2),
      _plusSign_2(_p, _v2),
    ]);
  }, ["p", "v"]),
  "{ :p :v | let __SPL4 = assertIsOfSize(v, 2); let v1 = at(__SPL4, 1); let v2 = at(__SPL4, 2); Polygon([p, +(p, v1), +(+(p, v1), v2), +(p, v2)]) }",
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
    let __SPL5 = _assertIsOfSize_2(_aPoint, 2);
    let _x = _at_2(__SPL5, 1);
    let _y = _at_2(__SPL5, 2);
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
        let __SPL6 = _assertIsOfSize_2(_at_2(_self, _i), 2);
        let _x1 = _at_2(__SPL6, 1);
        let _y1 = _at_2(__SPL6, 2);
        let __SPL7 = _assertIsOfSize_2(_atWrap_2(_self, _plusSign_2(_i, 1)), 2);
        let _x2 = _at_2(__SPL7, 1);
        let _y2 = _at_2(__SPL7, 2);
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
  "{ :self :aPoint | let answer = 0; let isLeft = { :x1 :y1 :x2 :y2 :x :y | -((*((-(x2, x1)), (-(y, y1)))), (*((-(x, x1)), (-(y2, y1))))) }; let __SPL5 = assertIsOfSize(aPoint, 2); let x = at(__SPL5, 1); let y = at(__SPL5, 2); toDo(1, size(self), { :i | let __SPL6 = assertIsOfSize(at(self,i), 2); let x1 = at(__SPL6, 1); let y1 = at(__SPL6, 2); let __SPL7 = assertIsOfSize(atWrap(self,+(i, 1)), 2); let x2 = at(__SPL7, 1); let y2 = at(__SPL7, 2); if((<=(y1, y)), { ifTrue((&(>(y2, y), { >(isLeft(x1, y1, x2, y2, x, y), 0) })), { answer := +(answer, 1) }) }, { ifTrue((&(<=(y2, y), { <(isLeft(x1, y1, x2, y2, x, y), 0) })), { answer := -(answer, 1) }) }) }); answer }",
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
    let __SPL8 = _assertIsOfSize_2(_findShortestTour_1(_p), 2);
    let __genSym9 = _at_2(__SPL8, 1);
    let _i = _at_2(__SPL8, 2);
    /* Statements */
    return _Polygon_1(_commercialAtAsterisk_2(_p, _i));
  }, ["r", "n"]),
  "{ :r :n | let p = randomReal(r,[0, 1], [n, 2]); let __SPL8 = assertIsOfSize(findShortestTour(p), 2); let _ = at(__SPL8, 1); let i = at(__SPL8, 2); Polygon((@*(p, i))) }",
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
  "{ :self :k :minRadius :maxRadius | let d = 2; let r = randomReal(self,[minRadius, maxRadius], [k]); if((=(d, 2)), { let theta = sort(randomReal(self,[0, pi(2)], [k])); Polygon(withCollect(r, theta, { :i :j | fromPolarCoordinates([i, j]) })) }, { if((=(d, 3)), { error(self,'randomStarConvexPolygon: d=3 not implemented') }, { error(self,'randomStarConvexPolygon: d={2,3}') }) }) }",
);
