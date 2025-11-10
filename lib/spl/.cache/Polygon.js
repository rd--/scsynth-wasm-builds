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
  "{ :self |\n\t\tself.vertexCoordinates.polygonArcLength\n\t}",
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
  "{ :self |\n\t\tself.vertexCoordinates.shoelaceFormula.abs\n\t}",
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
  "{ :self :index |\n\t\tlet n = self.vertexCount;\n\t\t(index = (n + 1)).if {\n\t\t\tself.vertexCoordinates[1]\n\t\t} {\n\t\t\tself.vertexCoordinates[index]\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.vertexCoordinates.coordinateBoundingBox\n\t}",
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
  "{ :self |\n\t\tself.vertexCoordinates.polygonCentroid\n\t}",
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
  "{ :self :aPoint |\n\t\tself.vertexCoordinates.crossingNumber(aPoint).isOdd\n\t}",
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
  "{ :self |\n\t\t2\n\t}",
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
  "{ :self :anInteger |\n\t\tlet c = self.vertexCoordinates;\n\t\t((c.size // anInteger) < 3).if {\n\t\t\tPoint(c.polygonCentroid)\n\t\t} {\n\t\t\tPolygon(\n\t\t\t\tc.downsample(anInteger)\n\t\t\t)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.vertexCount\n\t}",
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
  "{ :self |\n\t\tlet k = self.vertexCount;\n\t\tlet answer = [];\n\t\t1.toDo(k - 1) { :i |\n\t\t\tanswer.add([i, i + 1])\n\t\t};\n\t\tanswer.add([1, k]);\n\t\tanswer\n\t}",
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
  "{ :self |\n\t\tself.vertexCoordinates.anyOne.size\n\t}",
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
  "{ :self |\n\t\t1\n\t}",
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
  "{ :self |\n\t\t[self.vertexList]\n\t}",
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
  "{ :self :options |\n\t\t'<polygon points=\"%\" />'.format(\n\t\t\t[\n\t\t\t\tself.vertexCoordinates.asSvgPointList(options)\n\t\t\t]\n\t\t)\n\t}",
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
  "{ :self |\n\t\t[]\n\t}",
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
  "{ :self |\n\t\tself.vertexCoordinates.polygonInteriorAngles\n\t}",
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
  "{ :self |\n\t\tself.interiorAngles.allSatisfy { :each |\n\t\t\teach < 1.pi\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.vertexCoordinates.midpointPolygon.Polygon\n\t}",
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
  "{ :self |\n\t\tself\n\t}",
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
  "{ :self :projection |\n\t\tPolygon(\n\t\t\tself.vertexCoordinates.collect(projection.asUnaryBlock)\n\t\t)\n\t}",
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
  "{ :self :theta :center |\n\t\tlet matrix = theta.rotationMatrix;\n\t\tself.vertexCoordinates.collect { :each |\n\t\t\tmatrix.dot(each - center) + center\n\t\t}.Polygon\n\t}",
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
  "{ :self :theta |\n\t\tself.rotate(theta, self.centroid)\n\t}",
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
  "{ :self :m |\n\t\tlet c = self.centroid;\n\t\tself.vertexCoordinates.collect { :each |\n\t\t\t((each - c) * m) + c\n\t\t}.Polygon\n\t}",
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
      _to_2(2, _plusSign_2(_size_1(_v), 1)),
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
  "{ :self |\n\t\tlet v = self.vertexCoordinates;\n\t\t2.to(v.size + 1).collect { :i |\n\t\t\tv.atWrap(i).euclideanDistance(v.atWrap(i + 1))\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.vertexCoordinates.shoelaceFormula\n\t}",
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
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
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
  "{ :self :operand |\n\t\tself.vertexCoordinates.sutherlandHodgmanAlgorithm(\n\t\t\toperand.vertexCoordinates\n\t\t).Polygon\n\t}",
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
  "{ :self :operand |\n\t\tself.vertexCoordinates.collect { :each |\n\t\t\teach + operand\n\t\t}.Polygon\n\t}",
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
  "{ :self |\n\t\t(self.embeddingDimension = 2).if {\n\t\t\tself.vertexCoordinates.basicPolygonTriangulation\n\t\t} {\n\t\t\tself.error('triangulation')\n\t\t}\n\t}",
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
  "{ :self :i |\n\t\tself.vertexCoordinates.polygonVertexAngle(i)\n\t}",
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
  "{ :self |\n\t\tself.vertexCoordinates.size\n\t}",
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
    return _asList_1(
      _nonemptyRange_3(1, _size_1(_vertexCoordinates_1(_self)), 1),
    );
  }, ["self"]),
  "{ :self |\n\t\t[1 .. self.vertexCoordinates.size]\n\t}",
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
  "{ :self :aPoint |\n\t\tself.includes(aPoint).if {\n\t\t\t0\n\t\t} {\n\t\t\tlet [x, y] = aPoint;\n\t\t\tlet answer = 0;\n\t\t\t1.toDo(self.size) { :i |\n\t\t\t\tlet [x1, y1] = self.at(i);\n\t\t\t\tlet [x2, y2] = self.atWrap(i + 1);\n\t\t\t\t(\n\t\t\t\t\t(((y2 <= y) & { y < y1 }) | { (y1 <= y) & { y < y2 } })\n\t\t\t\t\t&\n\t\t\t\t\t{ x < ((x1 - x2) * (y - y2) / (y1 - y2) + x2) }\n\t\t\t\t).ifTrue {\n\t\t\t\t\tanswer := answer + 1\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
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
      _to_2(1, _size_1(_self)),
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
  "{ :self |\n\t\t1.to(self.size).collect { :i |\n\t\t\t[self.at(i), self.atWrap(i + 1)].midpoint\n\t\t}\n\t}",
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
  "{ :p :v |\n\t\tlet [v1, v2] = v;\n\t\tPolygon([p, p + v1, p + v1 + v2, p + v2])\n\t}",
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
  "{ :center :radius :theta |\n\t\tstarPolygon(5, 2, center, radius, theta)\n\t}",
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
  "{ :self |\n\t\t(self.depth > 3).if {\n\t\t\tself.collect(Polygon:/1)\n\t\t} {\n\t\t\tnewPolygon().initializeSlots(self)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.polylineArcLength + self.last.euclideanDistance(self.first)\n\t}",
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
  "{ :self |\n\t\tlet n = self.size;\n\t\tlet m = 1 / (self.shoelaceFormula * 6);\n\t\tlet p = self;\n\t\tlet x = 0;\n\t\tlet y = 0;\n\t\t1.toDo(n) { :i |\n\t\t\tlet j = (i = n).if { 1 } { i + 1};\n\t\t\tlet d = (p[i][1] * p[j][2]) - (p[j][1] * p[i][2]);\n\t\t\tx := x + ((p[i][1] + p[j][1]) * d);\n\t\t\ty := y + ((p[i][2] + p[j][2]) * d)\n\t\t};\n\t\t[x y] * m\n\t}",
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
      _to_2(1, _size_1(_self)),
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
  "{ :self |\n\t\tlet n = self.size;\n\t\tlet answer = [];\n\t\t1.to(self.size).collect { :i |\n\t\t\tself.polygonVertexAngle(i)\n\t\t}\n\t}",
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
  "{ :self :j |\n\t\tlet n = self.size;\n\t\tlet p = self.at(j);\n\t\tlet q1 = self.at((j + 1).wrapIndex(n));\n\t\tlet q2 = self.at((j - 1).wrapIndex(n));\n\t\t(p -> [q1, q2]).planarAngle\n\t}",
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
  "{ :self :aPoint |\n\t\tlet answer = 0;\n\t\tlet isLeft = { :x1 :y1 :x2 :y2 :x :y |\n\t\t\t((x2 - x1) * (y - y1)) - ((x - x1) * (y2 - y1))\n\t\t};\n\t\tlet [x, y] = aPoint;\n\t\t1.toDo(self.size) { :i |\n\t\t\tlet [x1, y1] = self.at(i);\n\t\t\tlet [x2, y2] = self.atWrap(i + 1);\n\t\t\t(y1 <= y).if {\n\t\t\t\t(y2 > y & { isLeft(x1, y1, x2, y2, x, y) > 0 }).ifTrue {\n\t\t\t\t\tanswer := answer + 1\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\t(y2 <= y & { isLeft(x1, y1, x2, y2, x, y) < 0 }).ifTrue {\n\t\t\t\t\tanswer := answer - 1\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :center :radius :theta |\n\t\tPolygon(\n\t\t\tself.circlePoints(center, radius, theta)\n\t\t)\n\t}",
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
          _nonemptyThenTo_3(0, _q, _hyphenMinus_2(_asterisk_2(_n, _q), 1)),
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
  "{ :p :q |\n\t\tisCoprime(p, q).if {\n\t\t\t[p, q].error('starFigure: coprime')\n\t\t} {\n\t\t\tlet n = p // q;\n\t\t\tlet m = p // n;\n\t\t\tlet v = p.circlePoints([0 0], 1, 0);\n\t\t\tlet i = [0, q .. n * q - 1];\n\t\t\tGeometryCollection(\n\t\t\t\t1:m.collect { :j |\n\t\t\t\t\tPolygon(\n\t\t\t\t\t\tv.atAll((i + j).mod(p, 1)++ [j])\n\t\t\t\t\t)\n\t\t\t\t}\n\t\t\t)\n\t\t}\n\t}",
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
          _asList_1(
            _nonemptyThenTo_3(1, _plusSign_2(1, _q), _asterisk_2(_p, _q)),
          ),
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
  "{ :p :q :c :r :theta |\n\t\tisCoprime(p, q).if {\n\t\t\tlet v = p.circlePoints(c, r, theta);\n\t\t\tlet i = [1, 1 + q .. p * q].mod(p, 1);\n\t\t\tPolygon(\n\t\t\t\tv.atAll(i) ++ [v.first]\n\t\t\t)\n\t\t} {\n\t\t\t[p, q].error('starPolygon: not coprime')\n\t\t}\n\t}",
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
  "{ :p :q |\n\t\tstarPolygon(p, q, [0 0], 1, 0)\n\t}",
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
  "{ :r :d :n :shape |\n\t\t{\n\t\t\tr.randomConvexHullPolygon(d, n)\n\t\t} ! shape\n\t}",
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
  "{ :r :d :n |\n\t\td.randomVariate(r, [n]).convexHull.Polygon\n\t}",
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
  "{ :r :n :shape |\n\t\t{\n\t\t\tr.randomSimplePolygon(n)\n\t\t} ! shape\n\t}",
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
  "{ :r :n |\n\t\tlet p = r.randomReal([0 1], [n 2]);\n\t\tlet [_, i] = p.findShortestTour;\n\t\t(p @* i).Polygon\n\t}",
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
  "{ :self :k :minRadius :maxRadius |\n\t\tlet d = 2;\n\t\tlet r = self.randomReal([minRadius, maxRadius], [k]);\n\t\t(d = 2).if {\n\t\t\tlet theta = self.randomReal([0, 2.pi], [k]).sort;\n\t\t\tr.withCollect(theta) { :i :j |\n\t\t\t\t[i j].fromPolarCoordinates\n\t\t\t}.Polygon\n\t\t} {\n\t\t\t(d = 3).if {\n\t\t\t\tself.unimplementedCase('randomStarConvexPolygon')\n\t\t\t} {\n\t\t\t\tself.error('randomStarConvexPolygon: d={2,3}')\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\t<primitive:\n\t\t/* https://github.com/mapbox/earcut/ */\n\t\tconst a = sl.earcut(_catenate_1(_self));\n\t\tconst n = a.length / 3;\n\t\tconst b = new Array(n);\n\t\tfor (let i = 0; i < n; i++) {\n\t\t\tlet c = new Array(3);\n\t\t\tb[i] = c;\n\t\t\tfor (let j = 0; j < 3; j++) {\n\t\t\t\tc[j] = a[(i * 3) + j] + 1;\n\t\t\t}\n\t\t}\n\t\treturn b;\n\t\t>\n\t}",
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
  "{ :subjectPolygon :clipPolygon |\n\t\tlet outputList = subjectPolygon;\n\t\tlet cp1 = clipPolygon.last;\n\t\tlet cp2 = nil;\n\t\tlet s = nil;\n\t\tlet e = nil;\n\t\tlet inside = { :p |\n\t\t\t((cp2[1] - cp1[1]) * (p[2] - cp1[2])) > ((cp2[2] - cp1[2]) * (p[1] - cp1[1]))\n\t\t};\n\t\tlet computeIntersection = {\n\t\t\tlet dc = [cp1[1] - cp2[1], cp1[2] - cp2[2]];\n\t\t\tlet dp = [s[1] - e[1], s[2] - e[2]];\n\t\t\tlet n1 = (cp1[1] * cp2[2]) - (cp1[2] * cp2[1]);\n\t\t\tlet n2 = (s[1] * e[2]) - (s[2] * e[1]);\n\t\t\tlet n3 = 1 / ((dc[1] * dp[2]) - (dc[2] * dp[1]));\n\t\t\t[((n1 * dp[1]) - (n2 * dc[1])) * n3, ((n1 * dp[2]) - (n2 * dc[2])) * n3]\n\t\t};\n\t\tclipPolygon.do { :clipVertex |\n\t\t\tlet inputList = outputList;\n\t\t\tcp2 := clipVertex;\n\t\t\toutputList := [];\n\t\t\ts := inputList.last;\n\t\t\tinputList.do { :subjectVertex |\n\t\t\t\te := subjectVertex;\n\t\t\t\te.inside.if {\n\t\t\t\t\ts.inside.ifFalse {\n\t\t\t\t\t\toutputList.add(computeIntersection())\n\t\t\t\t\t};\n\t\t\t\t\toutputList.add(e)\n\t\t\t\t} {\n\t\t\t\t\tinside(s).ifTrue {\n\t\t\t\t\t\toutputList.add(computeIntersection())\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\ts := e\n\t\t\t};\n\t\t\tcp1 := cp2\n\t\t};\n\t\toutputList\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Polygon",
  "spirolateral",
  ["a", "n", "theta", "k"],
  sl.annotateFunction(function (_a, _n, _theta, _k) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _a, _n, _theta, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = 1;
    let _p = [0, 0];
    let _h = 0;
    let _m = 1;
    let _v = [_p];
    /* Statements */
    _doWhileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _q = _plusSign_2(_p, _fromPolarCoordinates_1([_m, _h]));
        let _o = _mod_3(_plusSign_2(_m, 1), _n, 1);
        let _z = _if_3(
          _includes_2(_a, _o),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return -1;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 1;
          }, []),
        );
        /* Statements */
        _add_2(_v, _q);
        _p = _q;
        _m = _o;
        _h = _percentSign_2(
          _plusSign_2(_h, _plusSign_2(_pi_1(1), _asterisk_2(_z, _theta))),
          _pi_1(2),
        );
        return _i = _plusSign_2(_i, 1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _lessThanSign_2(_i, _k),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _not_1(_isCloseTo_2(_p, [0, 0]));
          }, []),
        );
      }, []),
    );
    _ifTrue_2(
      _lessThanSign_2(_i, _k),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _removeLast_1(_v);
      }, []),
    );
    return _Polygon_1(_v);
  }, ["a", "n", "theta", "k"]),
  "{ :a :n :theta :k |\n\t\tlet i = 1;\n\t\tlet p = [0 0];\n\t\tlet h = 0;\n\t\tlet m = 1;\n\t\tlet v = [p];\n\t\t{\n\t\t\tlet q = p + [m, h].fromPolarCoordinates;\n\t\t\tlet o = (m + 1).mod(n, 1);\n\t\t\tlet z = a.includes(o).if { -1 } { 1 };\n\t\t\tv.add(q);\n\t\t\tp := q;\n\t\t\tm := o;\n\t\t\th := (h + (1.pi + (z * theta))) % 2.pi;\n\t\t\ti := i + 1\n\t\t}.doWhileTrue {\n\t\t\t(i < k) & {\n\t\t\t\tp.isCloseTo([0, 0]).not\n\t\t\t}\n\t\t};\n\t\t(i < k).ifTrue {\n\t\t\tv.removeLast\n\t\t};\n\t\tPolygon(v)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Polygon",
  "spirolateral",
  ["a", "n", "theta"],
  sl.annotateFunction(function (_a, _n, _theta) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _n, _theta";
      throw new Error(errorMessage);
    } /* Statements */
    return _spirolateral_4(_a, _n, _theta, 1E4);
  }, ["a", "n", "theta"]),
  "{ :a :n :theta |\n\t\tspirolateral(a, n, theta, 1E4)\n\t}",
);
