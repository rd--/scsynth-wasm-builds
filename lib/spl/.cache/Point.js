sl.addType(
  false,
  "Point",
  "Point",
  ["Object"],
  ["coordinates"],
);

sl.copyTraitToType(
  "Object",
  "Point",
);

sl.addMethod(
  "Point",
  "Point",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinates_1(_self);
  },
  "{ :self |\n\t\tself.coordinates\n\t}",
);

sl.addMethod(
  "Point",
  "Point",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_coordinates_1(_self), _index);
  },
  "{ :self :index |\n\t\tself.coordinates[index]\n\t}",
);

sl.addMethod(
  "Point",
  "Point",
  "boundingBox",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMark_2(_coordinates_1(_self), 2);
  },
  "{ :self |\n\t\tself.coordinates ! 2\n\t}",
);

sl.addMethod(
  "Point",
  "Point",
  "dimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return 0;
  },
  "{ :self |\n\t\t0\n\t}",
);

sl.addMethod(
  "Point",
  "Point",
  "edgeCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return 0;
  },
  "{ :self |\n\t\t0\n\t}",
);

sl.addMethod(
  "Point",
  "Point",
  "edgeList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return [];
  },
  "{ :self |\n\t\t[]\n\t}",
);

sl.addMethod(
  "Point",
  "Point",
  "embeddingDimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_coordinates_1(_self));
  },
  "{ :self |\n\t\tself.coordinates.size\n\t}",
);

sl.addMethod(
  "Point",
  "Point",
  "forSvg",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _precision = _at_2(_options, "precision");
    let _scaleFactor = _at_2(_options, "scaleFactor");
    /* Statements */
    return _if_3(_isPlanar_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _format_2('<circle cx="%" cy="%" r="%" />', [
        _printStringToFixed_2(_at_2(_coordinates_1(_self), 1), _precision),
        _printStringToFixed_2(_at_2(_coordinates_1(_self), 2), _precision),
        _printStringToFixed_2(_solidus_2(0.5, _scaleFactor), _precision),
      ]);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "forSvg: not planar");
    });
  },
  '{ :self :options |\n\t\tlet precision = options::precision;\n\t\tlet scaleFactor = options::scaleFactor;\n\t\tself.isPlanar.if {\n\t\t\t\'<circle cx="%" cy="%" r="%" />\'.format([\n\t\t\t\tself.coordinates[1].printStringToFixed(precision),\n\t\t\t\tself.coordinates[2].printStringToFixed(precision),\n\t\t\t\t(0.5 / scaleFactor).printStringToFixed(precision)\n\t\t\t])\n\t\t} {\n\t\t\tself.error(\'forSvg: not planar\')\n\t\t}\n\t}',
);

sl.addMethod(
  "Point",
  "Point",
  "isPlanar",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_size_1(_coordinates_1(_self)), 2);
  },
  "{ :self |\n\t\tself.coordinates.size = 2\n\t}",
);

sl.addMethod(
  "Point",
  "Point",
  "midpoint",
  ["self", "aPoint"],
  function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Point_1(
      _midpoint_2(_coordinates_1(_self), _coordinates_1(_aPoint)),
    );
  },
  "{ :self :aPoint |\n\t\tPoint(self.coordinates.midpoint(aPoint.coordinates))\n\t}",
);

sl.addMethod(
  "Point",
  "Point",
  "project",
  ["self", "projection"],
  function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Point_1(
      _value_2(_asUnaryBlock_1(_projection), _coordinates_1(_self)),
    );
  },
  "{ :self :projection |\n\t\tPoint(\n\t\t\tprojection.asUnaryBlock.value(self.coordinates)\n\t\t)\n\t}",
);

sl.addMethod(
  "Point",
  "Point",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_coordinates_1(_self));
  },
  "{ :self |\n\t\tself.coordinates.size\n\t}",
);

sl.addMethod(
  "Point",
  "Point",
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
  "Point",
  "Point",
  "vertexCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return [_coordinates_1(_self)];
  },
  "{ :self |\n\t\t[self.coordinates]\n\t}",
);

sl.addMethod(
  "Point",
  "Point",
  "x",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_coordinates_1(_self), 1);
  },
  "{ :self |\n\t\tself.coordinates[1]\n\t}",
);

sl.addMethod(
  "Point",
  "Point",
  "y",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = _coordinates_1(_self);
    /* Statements */
    return _if_3(_lessThanSign_2(_size_1(_v), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "Point>>y: no y");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _at_2(_v, 2);
    });
  },
  "{ :self |\n\t\tlet v = self.coordinates;\n\t\t(v.size < 2).if {\n\t\t\tself.error('Point>>y: no y')\n\t\t} {\n\t\t\tv[2]\n\t\t}\n\t}",
);

sl.addMethod(
  "Point",
  "Point",
  "z",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = _coordinates_1(_self);
    /* Statements */
    return _if_3(_lessThanSign_2(_size_1(_v), 3), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "Point>>z: no z");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _at_2(_v, 3);
    });
  },
  "{ :self |\n\t\tlet v = self.coordinates;\n\t\t(v.size < 3).if {\n\t\t\tself.error('Point>>z: no z')\n\t\t} {\n\t\t\tv[3]\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Point",
  "anglePath",
  ["angles", "distances", "origin"],
  function (_angles, _distances, _origin) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _angles, _distances, _origin";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [_origin];
    let _theta = 0;
    let _p = _origin;
    /* Statements */
    _withIndexDo_2(_angles, function (_each, _index) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _index";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _r = _atWrap_2(_distances, _index);
      /* Statements */
      _theta = _percentSign_2(_plusSign_2(_theta, _each), _pi_1(2));
      _p = _plusSign_2(_p, _asterisk_2(_angleVector_1(_theta), _r));
      return _add_2(_answer, _p);
    });
    return _answer;
  },
  "{ :angles :distances :origin |\n\t\tlet answer = [origin];\n\t\tlet theta = 0;\n\t\tlet p = origin;\n\t\tangles.withIndexDo { :each :index |\n\t\t\tlet r = distances.atWrap(index);\n\t\t\ttheta := (theta + each) % 2.pi;\n\t\t\tp := p + (theta.angleVector * r);\n\t\t\tanswer.add(p)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "List",
  "Point",
  "anglePath",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _anglePath_3(_self, [1], [0, 0]);
  },
  "{ :self |\n\t\tself.anglePath([1], [0 0])\n\t}",
);

sl.addMethod(
  "List",
  "Point",
  "coordinateBoundingBox",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _minimum = _copy_1(_anyOne_1(_self));
    let _maximum = _copy_1(_minimum);
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _withIndexDo_2(_each, function (_n, _i) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _n, _i";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        _ifTrue_2(_lessThanSign_2(_n, _at_2(_minimum, _i)), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _atPut_3(_minimum, _i, _n);
        });
        return _ifTrue_2(
          _greaterThanSign_2(_n, _at_2(_maximum, _i)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(_maximum, _i, _n);
          },
        );
      });
    });
    return [_minimum, _maximum];
  },
  "{ :self |\n\t\tlet minimum = self.anyOne.copy;\n\t\tlet maximum = minimum.copy;\n\t\tself.do { :each |\n\t\t\teach.withIndexDo { :n :i |\n\t\t\t\t(n < minimum[i]).ifTrue {\n\t\t\t\t\tminimum[i] := n\n\t\t\t\t};\n\t\t\t\t(n > maximum[i]).ifTrue {\n\t\t\t\t\tmaximum[i] := n\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\t[minimum, maximum]\n\t}",
);

sl.addMethod(
  "List",
  "Point",
  "coordinateBounds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _transposed_1(_coordinateBoundingBox_1(_self));
  },
  "{ :self |\n\t\tself.coordinateBoundingBox.transposed\n\t}",
);

sl.addMethod(
  "List",
  "Point",
  "lineEquation",
  ["p1", "p2"],
  function (_p1, _p2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p1, _p2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym75 = _assertIsOfSize_2(_p1, 2),
      _x1 = _at_2(__genSym75, 1),
      _y1 = _at_2(__genSym75, 2);
    let __genSym76 = _assertIsOfSize_2(_p2, 2),
      _x2 = _at_2(__genSym76, 1),
      _y2 = _at_2(__genSym76, 2);
    let _a = _hyphenMinus_2(_y2, _y1);
    let _b = _hyphenMinus_2(_x1, _x2);
    let _c = _hyphenMinus_2(
      _asterisk_2(_y1, _hyphenMinus_2(_x2, _x1)),
      _asterisk_2(_x1, _hyphenMinus_2(_y2, _y1)),
    );
    /* Statements */
    return [_a, _b, _c];
  },
  "{ :p1 :p2 |\n\t\tlet [x1, y1] = p1;\n\t\tlet [x2, y2] = p2;\n\t\tlet a = y2 - y1;\n\t\tlet b = x1 - x2;\n\t\tlet c = (y1 * (x2 - x1)) - (x1 * (y2 - y1));\n\t\t[a, b, c]\n\t}",
);

sl.addMethod(
  "List",
  "Point",
  "lineLineIntersection",
  ["l1", "l2"],
  function (_l1, _l2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _l1, _l2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym77 = _assertIsOfSize_2(_l1, 2),
      _p1 = _at_2(__genSym77, 1),
      _p2 = _at_2(__genSym77, 2);
    let __genSym78 = _assertIsOfSize_2(_l2, 2),
      _p3 = _at_2(__genSym78, 1),
      _p4 = _at_2(__genSym78, 2);
    let __genSym79 = _assertIsOfSize_2(_p1, 2),
      _x1 = _at_2(__genSym79, 1),
      _y1 = _at_2(__genSym79, 2);
    let __genSym80 = _assertIsOfSize_2(_p2, 2),
      _x2 = _at_2(__genSym80, 1),
      _y2 = _at_2(__genSym80, 2);
    let __genSym81 = _assertIsOfSize_2(_p3, 2),
      _x3 = _at_2(__genSym81, 1),
      _y3 = _at_2(__genSym81, 2);
    let __genSym82 = _assertIsOfSize_2(_p4, 2),
      _x4 = _at_2(__genSym82, 1),
      _y4 = _at_2(__genSym82, 2);
    let _a1 = _hyphenMinus_2(_y2, _y1);
    let _b1 = _hyphenMinus_2(_x1, _x2);
    let _c1 = _plusSign_2(_asterisk_2(_a1, _x1), _asterisk_2(_b1, _y1));
    let _a2 = _hyphenMinus_2(_y4, _y3);
    let _b2 = _hyphenMinus_2(_x3, _x4);
    let _c2 = _plusSign_2(_asterisk_2(_a2, _x3), _asterisk_2(_b2, _y3));
    let _delta = _hyphenMinus_2(_asterisk_2(_a1, _b2), _asterisk_2(_a2, _b1));
    /* Statements */
    return [
      _solidus_2(
        _hyphenMinus_2(_asterisk_2(_b2, _c1), _asterisk_2(_b1, _c2)),
        _delta,
      ),
      _solidus_2(
        _hyphenMinus_2(_asterisk_2(_a1, _c2), _asterisk_2(_a2, _c1)),
        _delta,
      ),
    ];
  },
  "{ :l1 :l2 |\n\t\tlet [p1, p2] = l1;\n\t\tlet [p3, p4] = l2;\n\t\tlet [x1, y1] = p1;\n\t\tlet [x2, y2] = p2;\n\t\tlet [x3, y3] = p3;\n\t\tlet [x4, y4] = p4;\n\t\tlet a1 = y2 - y1;\n\t\tlet b1 = x1 - x2;\n\t\tlet c1 = (a1 * x1) + (b1 * y1);\n\t\tlet a2 = y4 - y3;\n\t\tlet b2 = x3 - x4;\n\t\tlet c2 = (a2 * x3) + (b2 * y3);\n\t\tlet delta = (a1 * b2) - (a2 * b1);\n\t\t[\n\t\t\t((b2 * c1) - (b1 * c2)) / delta,\n\t\t\t((a1 * c2) - (a2 * c1)) / delta\n\t\t]\n\t}",
);

sl.addMethod(
  "List",
  "Point",
  "midpoint",
  ["u", "v"],
  function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_u, _solidus_2(_hyphenMinus_2(_v, _u), 2));
  },
  "{ :u :v |\n\t\tu + ((v - u) / 2)\n\t}",
);

sl.addMethod(
  "List",
  "Point",
  "perpendicularBisector",
  ["u", "v"],
  function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _rotationMatrix_1(_pi_1(0.5));
    /* Statements */
    return _InfiniteLine_2(
      _midpoint_2(_u, _v),
      _dot_2(_hyphenMinus_2(_v, _u), _m),
    );
  },
  "{ :u :v |\n\t\tlet m = 0.5.pi.rotationMatrix;\n\t\tInfiniteLine(\n\t\t\tu.midpoint(v),\n\t\t\t(v - u).dot(m)\n\t\t)\n\t}",
);

sl.addMethod(
  "List",
  "Point",
  "planarAngle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym83 = _assertIsOfSize_2(_self, 3),
      _q1 = _at_2(__genSym83, 1),
      _p = _at_2(__genSym83, 2),
      _q2 = _at_2(__genSym83, 3);
    let __genSym84 = _assertIsOfSize_2(_q1, 2),
      _x1 = _at_2(__genSym84, 1),
      _y1 = _at_2(__genSym84, 2);
    let __genSym85 = _assertIsOfSize_2(_p, 2),
      _x0 = _at_2(__genSym85, 1),
      _y0 = _at_2(__genSym85, 2);
    let __genSym86 = _assertIsOfSize_2(_q2, 2),
      _x2 = _at_2(__genSym86, 1),
      _y2 = _at_2(__genSym86, 2);
    let _n = _plusSign_2(
      _asterisk_2(_hyphenMinus_2(_x1, _x0), _hyphenMinus_2(_x2, _x0)),
      _asterisk_2(_hyphenMinus_2(_y1, _y0), _hyphenMinus_2(_y2, _y0)),
    );
    let _d = _asterisk_2(
      _sqrt_1(
        _plusSign_2(
          _squared_1(_hyphenMinus_2(_x1, _x0)),
          _squared_1(_hyphenMinus_2(_y1, _y0)),
        ),
      ),
      _sqrt_1(
        _plusSign_2(
          _squared_1(_hyphenMinus_2(_x2, _x0)),
          _squared_1(_hyphenMinus_2(_y2, _y0)),
        ),
      ),
    );
    /* Statements */
    return _arcCos_1(_solidus_2(_n, _d));
  },
  "{ :self |\n\t\tlet [q1, p, q2] = self;\n\t\tlet [x1, y1] = q1;\n\t\tlet [x0, y0] = p;\n\t\tlet [x2, y2] = q2;\n\t\tlet n = ((x1 - x0) * (x2 - x0)) + ((y1 - y0) * (y2 - y0));\n\t\tlet d = ((x1 - x0).squared + (y1 - y0).squared).sqrt * ((x2 - x0).squared + (y2 - y0).squared).sqrt;\n\t\t(n / d).arcCos\n\t}",
);

sl.addMethod(
  "List",
  "Point",
  "Point",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_greaterThanSign_2(_rank_1(_self), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_self, _Point_1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _initializeSlots_2(_newPoint_0(), _self);
    });
  },
  "{ :self |\n\t\t(self.rank > 1).if {\n\t\t\tself.collect(Point:/1)\n\t\t} {\n\t\t\tnewPoint().initializeSlots(self)\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Point",
  "pointLineDistance",
  ["aLine", "aPoint"],
  function (_aLine, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _aLine, _aPoint";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym87 = _assertIsOfSize_2(_aLine, 2),
      _p1 = _at_2(__genSym87, 1),
      _p2 = _at_2(__genSym87, 2);
    let _p0 = _aPoint;
    /* Statements */
    return _if_3(_equalsSign_2(_size_1(_p0), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(
        _abs_1(_asterisk_2(2, _shoelaceFormula_1([_p0, _p1, _p2]))),
        _abs_1(_euclideanDistance_2(_p1, _p2)),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(
        _norm_1(_cross_2(_hyphenMinus_2(_p0, _p1), _hyphenMinus_2(_p0, _p2))),
        _norm_1(_hyphenMinus_2(_p2, _p1)),
      );
    });
  },
  "{ :aLine :aPoint |\n\t\tlet [p1, p2] = aLine;\n\t\tlet p0 = aPoint;\n\t\t(p0.size = 2).if {\n\t\t\t(2 * [p0, p1, p2].shoelaceFormula).abs / p1.euclideanDistance(p2).abs\n\t\t} {\n\t\t\t(p0 - p1).cross(p0 - p2).norm / (p2 - p1).norm\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Point",
  "pointLineNearest",
  ["l", "p"],
  function (_l, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _l, _p";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym88 = _assertIsOfSize_2(_l, 2),
      _a = _at_2(__genSym88, 1),
      _b = _at_2(__genSym88, 2);
    let _u = _hyphenMinus_2(_p, _a);
    let _v = _hyphenMinus_2(_b, _a);
    let _r = _projection_2(_u, _v);
    /* Statements */
    return _plusSign_2(_a, _r);
  },
  "{ :l :p |\n\t\tlet [a, b] = l;\n\t\tlet u = p - a;\n\t\tlet v = b - a;\n\t\tlet r = projection(u, v);\n\t\ta + r\n\t}",
);

sl.addMethod(
  "List",
  "Point",
  "pointLineSegmentNearest",
  ["l", "p"],
  function (_l, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _l, _p";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym89 = _assertIsOfSize_2(_l, 2),
      _a = _at_2(__genSym89, 1),
      _b = _at_2(__genSym89, 2);
    let _d = _euclideanDistance_2(_a, _b);
    /* Statements */
    return _if_3(_equalsSign_2(_d, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _a;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _u = _hyphenMinus_2(_p, _a);
      let _v = _hyphenMinus_2(_b, _a);
      let _r = _projection_2(_u, _v);
      let _t = _vectorAngle_2(_v, _r);
      /* Statements */
      return _if_3(_tilde_2(_t, _pi_1(1)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _a;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let _i = _plusSign_2(_a, _r);
        /* Statements */
        return _if_3(
          _greaterThanSign_2(_euclideanDistance_2(_a, _i), _d),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _b;
          },
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _i;
          },
        );
      });
    });
  },
  "{ :l :p |\n\t\tlet [a, b] = l;\n\t\tlet d = a.euclideanDistance(b);\n\t\t(d = 0).if {\n\t\t\ta\n\t\t} {\n\t\t\tlet u = p - a;\n\t\t\tlet v = b - a;\n\t\t\tlet r = projection(u, v);\n\t\t\tlet t = v.vectorAngle(r);\n\t\t\t(t ~ 1.pi).if {\n\t\t\t\ta\n\t\t\t} {\n\t\t\t\tlet i = a + r;\n\t\t\t\t(a.euclideanDistance(i) > d).if {\n\t\t\t\t\tb\n\t\t\t\t} {\n\t\t\t\t\ti\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Point",
  "polylineArcLength",
  ["p"],
  function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _p";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_adjacentPairsCollect_2(_p, _euclideanDistance_2));
  },
  "{ :p |\n\t\tp.adjacentPairsCollect(euclideanDistance:/2).sum\n\t}",
);

sl.addMethod(
  "List",
  "Point",
  "shoelaceFormula",
  ["p"],
  function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _p";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_p);
    let _a = 0;
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
      return _a = _plusSign_2(_a, _d);
    });
    return _solidus_2(_a, 2);
  },
  "{ :p |\n\t\tlet n = p.size;\n\t\tlet a = 0;\n\t\t1.toDo(n) { :i |\n\t\t\tlet j = (i = n).if { 1 } { i + 1};\n\t\t\tlet d = (p[i][1] * p[j][2]) - (p[j][1] * p[i][2]);\n\t\t\ta := a + d\n\t\t};\n\t\ta / 2\n\t}",
);

sl.extendTraitWithMethod(
  "Dictionary",
  "Point",
  "asPoint",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_includesAllIndices_2(_self, ["x", "y", "z"]), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _Point_1([
        _at_2(_self, "x"),
        _at_2(_self, "y"),
        _at_2(_self, "z"),
      ]);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_includesAllIndices_2(_self, ["x", "y"]), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _Point_1([_at_2(_self, "x"), _at_2(_self, "y")]);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Dictionary>>asPoint: invalid dictionary");
      });
    });
  },
  "{ :self |\n\t\tself.includesAllIndices(['x','y','z']).if {\n\t\t\tPoint([self['x'], self['y'], self['z']])\n\t\t} {\n\t\t\tself.includesAllIndices(['x','y']).if {\n\t\t\t\tPoint([self['x'], self['y']])\n\t\t\t} {\n\t\t\t\tself.error('@Dictionary>>asPoint: invalid dictionary')\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Point",
  "asPoint",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Point_1(_asList_1(_self));
  },
  "{ :self |\n\t\tPoint(self.asList)\n\t}",
);

sl.addMethod(
  "Tuple",
  "Point",
  "asPoint",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Point_1(_asList_1(_self));
  },
  "{ :self |\n\t\tPoint(self.asList)\n\t}",
);
