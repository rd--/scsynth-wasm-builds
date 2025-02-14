sl.addType(
  false,
  "Polygon",
  "Polygon",
  ["Object"],
  ["vertexCoordinates"],
);

sl.copyTraitToType(
  "Object",
  "Polygon",
);

sl.addMethod(
  "Polygon",
  "Polygon",
  "tilde",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlotsBy_3(_self, _anObject, _tilde_2);
  },
  "{ :self :anObject |\n\t\tself.hasEqualSlotsBy(anObject, ~)\n\t}",
);

sl.addMethod(
  "Polygon",
  "Polygon",
  "arcLength",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _polygonArcLength_1(_vertexCoordinates_1(_self));
  },
  "{ :self |\n\t\tself.vertexCoordinates.polygonArcLength\n\t}",
);

sl.addMethod(
  "Polygon",
  "Polygon",
  "area",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _shoelaceFormula_1(_vertexCoordinates_1(_self));
  },
  "{ :self |\n\t\tself.vertexCoordinates.shoelaceFormula\n\t}",
);

sl.addMethod(
  "Polygon",
  "Polygon",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _vertexCount_1(_self);
    /* Statements */
    return _if_3(_equalsSign_2(_index, _plusSign_2(_n, 1)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _at_2(_vertexCoordinates_1(_self), 1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _at_2(_vertexCoordinates_1(_self), _index);
    });
  },
  "{ :self :index |\n\t\tlet n = self.vertexCount;\n\t\t(index = (n + 1)).if {\n\t\t\tself.vertexCoordinates[1]\n\t\t} {\n\t\t\tself.vertexCoordinates[index]\n\t\t}\n\t}",
);

sl.addMethod(
  "Polygon",
  "Polygon",
  "boundingBox",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinateBoundingBox_1(_vertexCoordinates_1(_self));
  },
  "{ :self |\n\t\tself.vertexCoordinates.coordinateBoundingBox\n\t}",
);

sl.addMethod(
  "Polygon",
  "Polygon",
  "centroid",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _polygonCentroid_1(_vertexCoordinates_1(_self));
  },
  "{ :self |\n\t\tself.vertexCoordinates.polygonCentroid\n\t}",
);

sl.addMethod(
  "Polygon",
  "Polygon",
  "dimension",
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
  "Polygon",
  "Polygon",
  "edgeCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _vertexCount_1(_self);
  },
  "{ :self |\n\t\tself.vertexCount\n\t}",
);

sl.addMethod(
  "Polygon",
  "Polygon",
  "edgeList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _vertexCount_1(_self);
    let _answer = [];
    /* Statements */
    _toDo_3(1, _hyphenMinus_2(_k, 1), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_answer, [_i, _plusSign_2(_i, 1)]);
    });
    _add_2(_answer, [1, _k]);
    return _answer;
  },
  "{ :self |\n\t\tlet k = self.vertexCount;\n\t\tlet answer = [];\n\t\t1.toDo(k - 1) { :i |\n\t\t\tanswer.add([i, i + 1])\n\t\t};\n\t\tanswer.add([1, k]);\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Polygon",
  "Polygon",
  "embeddingDimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_anyOne_1(_vertexCoordinates_1(_self)));
  },
  "{ :self |\n\t\tself.vertexCoordinates.anyOne.size\n\t}",
);

sl.addMethod(
  "Polygon",
  "Polygon",
  "faceCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return 1;
  },
  "{ :self |\n\t\t1\n\t}",
);

sl.addMethod(
  "Polygon",
  "Polygon",
  "faceIndices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return [_vertexList_1(_self)];
  },
  "{ :self |\n\t\t[self.vertexList]\n\t}",
);

sl.addMethod(
  "Polygon",
  "Polygon",
  "forSvg",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2('<polygon points="%" />', [
      _asSvgPointList_2(_vertexCoordinates_1(_self), _options),
    ]);
  },
  "{ :self :options |\n\t\t'<polygon points=\"%\" />'.format([\n\t\t\tself.vertexCoordinates.asSvgPointList(options)\n\t\t])\n\t}",
);

sl.addMethod(
  "Polygon",
  "Polygon",
  "interiorAngles",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _polygonInteriorAngles_1(_vertexCoordinates_1(_self));
  },
  "{ :self |\n\t\tself.vertexCoordinates.polygonInteriorAngles\n\t}",
);

sl.addMethod(
  "Polygon",
  "Polygon",
  "project",
  ["self", "projection"],
  function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Polygon_1(
      _collect_2(_vertexCoordinates_1(_self), _asUnaryBlock_1(_projection)),
    );
  },
  "{ :self :projection |\n\t\tPolygon(\n\t\t\tself.vertexCoordinates.collect(projection.asUnaryBlock)\n\t\t)\n\t}",
);

sl.addMethod(
  "Polygon",
  "Polygon",
  "rotated",
  ["self", "theta"],
  function (_self, _theta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _theta";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _matrix = _rotationMatrix_1(_theta);
    let _center = _centroid_1(_self);
    /* Statements */
    return _Polygon_1(_collect_2(_vertexCoordinates_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSign_2(
        _dot_2(_matrix, _hyphenMinus_2(_each, _center)),
        _center,
      );
    }));
  },
  "{ :self :theta |\n\t\tlet matrix = theta.rotationMatrix;\n\t\tlet center = self.centroid;\n\t\tself.vertexCoordinates.collect { :each |\n\t\t\tmatrix.dot(each - center) + center\n\t\t}.Polygon\n\t}",
);

sl.addMethod(
  "Polygon",
  "Polygon",
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
  "Polygon",
  "Polygon",
  "vertexCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_vertexCoordinates_1(_self));
  },
  "{ :self |\n\t\tself.vertexCoordinates.size\n\t}",
);

sl.addMethod(
  "Polygon",
  "Polygon",
  "vertexList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asList_1(_upOrDownTo_2(1, _size_1(_vertexCoordinates_1(_self))));
  },
  "{ :self |\n\t\t[1 .. self.vertexCoordinates.size]\n\t}",
);

sl.addMethod(
  "List",
  "Polygon",
  "Polygon",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_greaterThanSign_2(_depth_1(_self), 3), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_self, _Polygon_1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _initializeSlots_2(_newPolygon_0(), _self);
    });
  },
  "{ :self |\n\t\t(self.depth > 3).if {\n\t\t\tself.collect(Polygon:/1)\n\t\t} {\n\t\t\tnewPolygon().initializeSlots(self)\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Polygon",
  "polygonArcLength",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _polylineArcLength_1(_self),
      _euclideanDistance_2(_last_1(_self), _first_1(_self)),
    );
  },
  "{ :self |\n\t\tself.polylineArcLength + self.last.euclideanDistance(self.first)\n\t}",
);

sl.addMethod(
  "List",
  "Polygon",
  "polygonCentroid",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _m = _solidus_2(1, _asterisk_2(_shoelaceFormula_1(_self), 6));
    let _p = _self;
    let _x = 0;
    let _y = 0;
    /* Statements */
    _toDo_3(1, _n, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _j = _if_3(_equalsSign_2(_i, _n), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(_i, 1);
      });
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
    });
    return _asterisk_2([_x, _y], _m);
  },
  "{ :self |\n\t\tlet n = self.size;\n\t\tlet m = 1 / (self.shoelaceFormula * 6);\n\t\tlet p = self;\n\t\tlet x = 0;\n\t\tlet y = 0;\n\t\t1.toDo(n) { :i |\n\t\t\tlet j = (i = n).if { 1 } { i + 1};\n\t\t\tlet d = (p[i][1] * p[j][2]) - (p[j][1] * p[i][2]);\n\t\t\tx := x + ((p[i][1] + p[j][1]) * d);\n\t\t\ty := y + ((p[i][2] + p[j][2]) * d)\n\t\t};\n\t\t[x y] * m\n\t}",
);

sl.addMethod(
  "List",
  "Polygon",
  "polygonInteriorAngles",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _a = [];
    /* Statements */
    _toDo_3(1, _n, function (_j) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _j";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _i = _wrapIndex_2(_hyphenMinus_2(_j, 1), _n);
      let _k = _wrapIndex_2(_plusSign_2(_j, 1), _n);
      let _r = _planarAngle_1(_commercialAtAsterisk_2(_self, [_i, _j, _k]));
      /* Statements */
      return _add_2(_a, _r);
    });
    return _a;
  },
  "{ :self |\n\t\tlet n = self.size;\n\t\tlet a = [];\n\t\t1.toDo(n) { :j |\n\t\t\tlet i = (j - 1).wrapIndex(n);\n\t\t\tlet k = (j + 1).wrapIndex(n);\n\t\t\tlet r = (self @* [i, j, k]).planarAngle;\n\t\t\ta.add(r)\n\t\t};\n\t\ta\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Polygon",
  "regularPolygon",
  ["self", "center", "radius", "theta"],
  function (_self, _center, _radius, _theta) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _center, _radius, _theta";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Polygon_1(_circlePoints_4(_self, _center, _radius, _theta));
  },
  "{ :self :center :radius :theta |\n\t\tPolygon(\n\t\t\tself.circlePoints(center, radius, theta)\n\t\t)\n\t}",
);

sl.extendTraitWithMethod(
  "RandomNumberGenerator",
  "Polygon",
  "randomStarConvexPolygon",
  ["self", "k", "minRadius", "maxRadius"],
  function (_self, _k, _minRadius, _maxRadius) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _k, _minRadius, _maxRadius";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _d = 2;
    let _r = _randomReal_4(_self, _minRadius, _maxRadius, [_k]);
    /* Statements */
    return _if_3(_equalsSign_2(_d, 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _theta = _sort_1(_randomReal_4(_self, 0, _pi_1(2), [_k]));
      /* Statements */
      return _Polygon_1(_withCollect_3(_r, _theta, function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _fromPolarCoordinates_1([_i, _j]);
      }));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_equalsSign_2(_d, 3), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "randomStarConvexPolygon: d=3 not implemented");
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "randomStarConvexPolygon: d={2,3}");
      });
    });
  },
  "{ :self :k :minRadius :maxRadius |\n\t\tlet d = 2;\n\t\tlet r = self.randomReal(minRadius, maxRadius, [k]);\n\t\t(d = 2).if {\n\t\t\tlet theta = self.randomReal(0, 2.pi, [k]).sort;\n\t\t\tr.withCollect(theta) { :i :j |\n\t\t\t\t[i j].fromPolarCoordinates\n\t\t\t}.Polygon\n\t\t} {\n\t\t\t(d = 3).if {\n\t\t\t\tself.error('randomStarConvexPolygon: d=3 not implemented')\n\t\t\t} {\n\t\t\t\tself.error('randomStarConvexPolygon: d={2,3}')\n\t\t\t}\n\t\t}\n\t}",
);
