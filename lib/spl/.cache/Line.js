sl.addType(
  false,
  "HalfLine",
  "Line",
  ["Object"],
  ["point", "vector"],
);

sl.copyTraitToType(
  "Object",
  "HalfLine",
);

sl.addMethod(
  "HalfLine",
  "Line",
  "dimension",
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

sl.addType(
  false,
  "InfiniteLine",
  "Line",
  ["Object"],
  ["point", "vector"],
);

sl.copyTraitToType(
  "Object",
  "InfiniteLine",
);

sl.addMethod(
  "InfiniteLine",
  "Line",
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
  "InfiniteLine",
  "Line",
  "dimension",
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
  "InfiniteLine",
  "Line",
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

sl.addType(
  false,
  "Line",
  "Line",
  ["Object"],
  ["vertexCoordinates"],
);

sl.copyTraitToType(
  "Object",
  "Line",
);

sl.addMethod(
  "Line",
  "Line",
  "arcLength",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 0;
    /* Statements */
    _adjacentPairsDo_2(_vertexCoordinates_1(_self), function (_u, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _u, _v";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _answer = _plusSign_2(_answer, _euclideanDistance_2(_u, _v));
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = 0;\n\t\tself.vertexCoordinates.adjacentPairsDo { :u :v |\n\t\t\tanswer := answer + u.euclideanDistance(v)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Line",
  "Line",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_vertexCoordinates_1(_self), _index);
  },
  "{ :self :index |\n\t\tself.vertexCoordinates[index]\n\t}",
);

sl.addMethod(
  "Line",
  "Line",
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
  "Line",
  "Line",
  "dimension",
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
  "Line",
  "Line",
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
  "Line",
  "Line",
  "forSvg",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_vertexCount_1(_self), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _precision = _at_2(_options, "precision");
      let __genSym4 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 2),
        _p1 = _at_2(__genSym4, 1),
        _p2 = _at_2(__genSym4, 2);
      let __genSym5 = _assertIsOfSize_2(_p1, 2),
        _x1 = _at_2(__genSym5, 1),
        _y1 = _at_2(__genSym5, 2);
      let __genSym6 = _assertIsOfSize_2(_p2, 2),
        _x2 = _at_2(__genSym6, 1),
        _y2 = _at_2(__genSym6, 2);
      /* Statements */
      return _format_2('<line x1="%" y1="%" x2="%" y2="%" />', [
        _printStringToFixed_2(_x1, _precision),
        _printStringToFixed_2(_y1, _precision),
        _printStringToFixed_2(_x2, _precision),
        _printStringToFixed_2(_y2, _precision),
      ]);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _format_2('<polyline points="%" />', [
        _asSvgPointList_2(_vertexCoordinates_1(_self), _options),
      ]);
    });
  },
  '{ :self :options |\n\t\t(self.vertexCount = 2).if {\n\t\t\tlet precision = options::precision;\n\t\t\tlet [p1, p2] = self.vertexCoordinates;\n\t\t\tlet [x1, y1] = p1;\n\t\t\tlet [x2, y2] = p2;\n\t\t\t\'<line x1="%" y1="%" x2="%" y2="%" />\'.format([\n\t\t\t\tx1.printStringToFixed(precision),\n\t\t\t\ty1.printStringToFixed(precision),\n\t\t\t\tx2.printStringToFixed(precision),\n\t\t\t\ty2.printStringToFixed(precision)\n\t\t\t])\n\t\t} {\n\t\t\t\'<polyline points="%" />\'.format([\n\t\t\t\tself.vertexCoordinates.asSvgPointList(options)\n\t\t\t])\n\t\t}\n\t}',
);

sl.addMethod(
  "Line",
  "Line",
  "midpoint",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _vertexCoordinates_1(_self);
    let _l = _arcLength_1(_self);
    let _h = _solidus_2(_l, 2);
    let _i = 1;
    let _c1 = 0;
    let _c2 = _c1;
    let __genSym7 = _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _lessThanSign_2(_c2, _h);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _c1 = _c2;
      _c2 = _plusSign_2(
        _c1,
        _euclideanDistance_2(_at_2(_p, _i), _at_2(_p, _plusSign_2(_i, 1))),
      );
      return _i = _plusSign_2(_i, 1);
    });
    let _d = _hyphenMinus_2(_h, _c1);
    let _v = _hyphenMinus_2(_at_2(_p, _i), _at_2(_p, _hyphenMinus_2(_i, 1)));
    /* Statements */
    return _plusSign_2(
      _at_2(_p, _hyphenMinus_2(_i, 1)),
      _asterisk_2(_normalize_1(_v), _d),
    );
  },
  "{ :self |\n\t\tlet p = self.vertexCoordinates;\n\t\tlet l = self.arcLength;\n\t\tlet h = l / 2;\n\t\tlet i = 1;\n\t\tlet c1 = 0;\n\t\tlet c2 = c1;\n\t\tlet _ = {\n\t\t\tc2 < h\n\t\t}.whileTrue {\n\t\t\tc1 := c2;\n\t\t\tc2 := c1 + p[i].euclideanDistance(p[i + 1]);\n\t\t\ti := i + 1\n\t\t};\n\t\tlet d = h - c1;\n\t\tlet v = p[i] - p[i - 1];\n\t\tp[i - 1] + (v.normalize * d)\n\t}",
);

sl.addMethod(
  "Line",
  "Line",
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
  "Line",
  "Line",
  "twoDimensional",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOfOtherwise_3(_embeddingDimension_1(_self), [
      _hyphenMinusGreaterThanSign_2(2, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }),
      _hyphenMinusGreaterThanSign_2(3, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let _f_1 = _asBlock_1(_AxonometricProjection_1("Chinese"));
        /* Statements */
        return _Line_1(_collect_2(_vertexCoordinates_1(_self), _f_1));
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "twoDimensional: invalid embeddingDimension");
    });
  },
  "{ :self |\n\t\tself.embeddingDimension.caseOfOtherwise([\n\t\t\t2 -> { self },\n\t\t\t3 -> {\n\t\t\t\tlet f:/1 = AxonometricProjection('Chinese').asBlock;\n\t\t\t\tLine(\n\t\t\t\t\tself.vertexCoordinates.collect(f:/1)\n\t\t\t\t)\n\t\t\t}\n\t\t]) {\n\t\t\tself.error('twoDimensional: invalid embeddingDimension')\n\t\t}\n\t}",
);

sl.addMethod(
  "Line",
  "Line",
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

sl.addType(
  false,
  "LineSegment",
  "Line",
  ["Object"],
  ["u", "v"],
);

sl.copyTraitToType(
  "Object",
  "LineSegment",
);

sl.addMethod(
  "LineSegment",
  "Line",
  "arcLength",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _euclideanDistance_2(_u_1(_self), _v_1(_self));
  },
  "{ :self |\n\t\tself.u.euclideanDistance(self.v)\n\t}",
);

sl.addMethod(
  "LineSegment",
  "Line",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_2(_index, [
      _hyphenMinusGreaterThanSign_2(1, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _u_1(_self);
      }),
      _hyphenMinusGreaterThanSign_2(2, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _v_1(_self);
      }),
    ]);
  },
  "{ :self :index |\n\t\tindex.caseOf([\n\t\t\t1 -> { self.u },\n\t\t\t2 -> { self.v }\n\t\t])\n\t}",
);

sl.addMethod(
  "LineSegment",
  "Line",
  "centroid",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _midpoint_1(_self);
  },
  "{ :self |\n\t\tself.midpoint\n\t}",
);

sl.addMethod(
  "LineSegment",
  "Line",
  "dimension",
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
  "LineSegment",
  "Line",
  "distance",
  ["self", "aPoint"],
  function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _pointLineDistance_2([_u_1(_self), _v_1(_self)], _aPoint);
  },
  "{ :self :aPoint |\n\t\t[self.u, self.v].pointLineDistance(aPoint)\n\t}",
);

sl.addMethod(
  "LineSegment",
  "Line",
  "embeddingDimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_u_1(_self));
  },
  "{ :self |\n\t\tself.u.size\n\t}",
);

sl.addMethod(
  "LineSegment",
  "Line",
  "includes",
  ["self", "aPoint"],
  function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _isVeryCloseTo_2(_distance_2(_self, _aPoint), 0);
  },
  "{ :self :aPoint |\n\t\tself.distance(aPoint).isVeryCloseTo(0)\n\t}",
);

sl.addMethod(
  "LineSegment",
  "Line",
  "midpoint",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _midpoint_2(_u_1(_self), _v_1(_self));
  },
  "{ :self |\n\t\tself.u.midpoint(self.v)\n\t}",
);

sl.addMethod(
  "LineSegment",
  "Line",
  "nearestPoint",
  ["self", "aPoint"],
  function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
  },
  "{ :self :aPoint |\n\t}",
);

sl.addMethod(
  "LineSegment",
  "Line",
  "vertexCount",
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
  "List",
  "Line",
  "bresenhamLineAlgorithm",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym8 = _assertIsOfSize_2(_at_2(_self, 1), 2),
      _x1 = _at_2(__genSym8, 1),
      _y1 = _at_2(__genSym8, 2);
    let __genSym9 = _assertIsOfSize_2(_at_2(_self, 2), 2),
      _x2 = _at_2(__genSym9, 1),
      _y2 = _at_2(__genSym9, 2);
    let _dx = _abs_1(_hyphenMinus_2(_x2, _x1));
    let _sx = _if_3(_lessThanSign_2(_x1, _x2), function () {
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
      return -1;
    });
    let _dy = _hyphenMinus_1(_abs_1(_hyphenMinus_2(_y2, _y1)));
    let _sy = _if_3(_lessThanSign_2(_y1, _y2), function () {
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
      return -1;
    });
    let _e = _plusSign_2(_dx, _dy);
    let _answer = [];
    /* Statements */
    _whileTrue_1(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _add_2(_answer, [_x1, _y1]);
      return _if_3(
        _ampersand_2(_equalsSignEqualsSign_2(_x1, _x2), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSignEqualsSign_2(_y1, _y2);
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return false;
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Temporaries */
          let _e2 = _asterisk_2(2, _e);
          /* Statements */
          _ifTrue_2(_greaterThanSignEqualsSign_2(_e2, _dy), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            _e = _plusSign_2(_e, _dy);
            return _x1 = _plusSign_2(_x1, _sx);
          });
          _ifTrue_2(_lessThanSignEqualsSign_2(_e2, _dx), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            _e = _plusSign_2(_e, _dx);
            return _y1 = _plusSign_2(_y1, _sy);
          });
          return true;
        },
      );
    });
    return _answer;
  },
  "{ :self |\n\t\tlet [x1, y1] = self[1];\n\t\tlet [x2, y2] = self[2];\n\t\tlet dx = (x2 - x1).abs;\n\t\tlet sx = (x1 < x2).if { 1 } { -1 };\n\t\tlet dy = (y2 - y1).abs.-;\n\t\tlet sy = (y1 < y2).if { 1 } { -1 };\n\t\tlet e = dx + dy;\n\t\tlet answer = [];\n\t\t{\n\t\t\tanswer.add([x1, y1]);\n\t\t\t((x1 == x2) & { y1 == y2 }).if {\n\t\t\t\tfalse\n\t\t\t} {\n\t\t\t\tlet e2 = 2 * e;\n\t\t\t\t(e2 >= dy).ifTrue {\n\t\t\t\t\te := e + dy;\n\t\t\t\t\tx1 := x1 + sx\n\t\t\t\t};\n\t\t\t\t(e2 <= dx).ifTrue {\n\t\t\t\t\te := e + dx;\n\t\t\t\t\ty1 := y1 + sy\n\t\t\t\t};\n\t\t\t\ttrue\n\t\t\t}\n\t\t}.whileTrue;\n\t\tanswer\n\t}",
);

sl.addMethod(
  "List",
  "Line",
  "HalfLine",
  ["aPoint", "aVector"],
  function (_aPoint, _aVector) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _aPoint, _aVector";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newHalfLine_0(), _aPoint, _aVector);
  },
  "{ :aPoint :aVector |\n\t\tnewHalfLine().initializeSlots(aPoint, aVector)\n\t}",
);

sl.addMethod(
  "List",
  "Line",
  "InfiniteLine",
  ["aPoint", "aVector"],
  function (_aPoint, _aVector) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _aPoint, _aVector";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newInfiniteLine_0(), _aPoint, _aVector);
  },
  "{ :aPoint :aVector |\n\t\tnewInfiniteLine().initializeSlots(aPoint, aVector)\n\t}",
);

sl.addMethod(
  "List",
  "Line",
  "Line",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_greaterThanSign_2(_rank_1(_self), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_self, _Line_1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _initializeSlots_2(_newLine_0(), _self);
    });
  },
  "{ :self |\n\t\t(self.rank > 2).if {\n\t\t\tself.collect(Line:/1)\n\t\t} {\n\t\t\tnewLine().initializeSlots(self)\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Line",
  "LineSegment",
  ["u", "v"],
  function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newLineSegment_0(), _u, _v);
  },
  "{ :u :v |\n\t\tnewLineSegment().initializeSlots(u, v)\n\t}",
);
