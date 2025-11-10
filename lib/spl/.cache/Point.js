/*  Requires: CartesianCoordinates  */

sl.addType(
  false,
  "Point",
  "Point",
  ["Object", "Equatable", "Geometry", "CartesianCoordinates"],
  ["coordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Point",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Point",
);

sl.copyTraitMethodsToType(
  "Geometry",
  "Point",
);

sl.copyTraitMethodsToType(
  "CartesianCoordinates",
  "Point",
);

sl.addMethodToExistingType(
  "Point",
  "Point",
  "boundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _coordinates_1(_self);
      }, []),
      2,
    );
  }, ["self"]),
  "{ :self |\n\t\t{ self.coordinates } ! 2\n\t}",
);

sl.addMethodToExistingType(
  "Point",
  "Point",
  "circleInversion",
  ["self", "circle"],
  sl.annotateFunction(function (_self, _circle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _circle";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVeryCloseTo_2(_coordinates_1(_self), _center_1(_circle)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return Infinity;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Point_1(_circleInversion_2(_coordinates_1(_self), _circle));
      }, []),
    );
  }, ["self", "circle"]),
  "{ :self :circle |\n\t\tself.coordinates.isVeryCloseTo(circle.center).if {\n\t\t\tInfinity\n\t\t} {\n\t\t\tself.coordinates.circleInversion(circle).Point\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Point",
  "Point",
  "edgeCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 0;
  }, ["self"]),
  "{ :self |\n\t\t0\n\t}",
);

sl.addMethodToExistingType(
  "Point",
  "Point",
  "edgeList",
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
  "Point",
  "Point",
  "isOrigin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isOrigin_1(_coordinates_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.coordinates.isOrigin\n\t}",
);

sl.addMethodToExistingType(
  "Point",
  "Point",
  "midpoint",
  ["self", "aPoint"],
  sl.annotateFunction(function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      throw new Error(errorMessage);
    } /* Statements */
    return _Point_1(
      _midpoint_1([_coordinates_1(_self), _coordinates_1(_aPoint)]),
    );
  }, ["self", "aPoint"]),
  "{ :self :aPoint |\n\t\tPoint([self.coordinates, aPoint.coordinates].midpoint)\n\t}",
);

sl.addMethodToExistingType(
  "Point",
  "Point",
  "project",
  ["self", "projection"],
  sl.annotateFunction(function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      throw new Error(errorMessage);
    } /* Statements */
    return _Point_1(
      _value_2(_asUnaryBlock_1(_projection), _coordinates_1(_self)),
    );
  }, ["self", "projection"]),
  "{ :self :projection |\n\t\tPoint(\n\t\t\tprojection.asUnaryBlock.value(self.coordinates)\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Point",
  "Point",
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
  "Point",
  "Point",
  "svgFragment",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _precision = _at_2(_options, "precision");
    let _scaleFactor = _at_2(_options, "scaleFactor");
    /* Statements */
    return _if_3(
      _isPlanar_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _format_2('<circle cx="%" cy="%" r="%" />', [
          _printStringToFixed_2(_at_2(_coordinates_1(_self), 1), _precision),
          _printStringToFixed_2(_at_2(_coordinates_1(_self), 2), _precision),
          _printStringToFixed_2(_solidus_2(0.5, _scaleFactor), _precision),
        ]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "svgFragment: not planar");
      }, []),
    );
  }, ["self", "options"]),
  "{ :self :options |\n\t\tlet precision = options['precision'];\n\t\tlet scaleFactor = options['scaleFactor'];\n\t\tself.isPlanar.if {\n\t\t\t'<circle cx=\"%\" cy=\"%\" r=\"%\" />'.format([\n\t\t\t\tself.coordinates[1].printStringToFixed(precision),\n\t\t\t\tself.coordinates[2].printStringToFixed(precision),\n\t\t\t\t(0.5 / scaleFactor).printStringToFixed(precision)\n\t\t\t])\n\t\t} {\n\t\t\tself.error('svgFragment: not planar')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Point",
  "Point",
  "vertexCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_coordinates_1(_self)];
  }, ["self"]),
  "{ :self |\n\t\t[self.coordinates]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "anglePath",
  ["angles", "distances", "origin"],
  sl.annotateFunction(function (_angles, _distances, _origin) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _angles, _distances, _origin";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [_origin];
    let _theta = 0;
    let _p = _origin;
    /* Statements */
    _withIndexDo_2(
      _angles,
      sl.annotateFunction(function (_each, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _index";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _r = _atWrap_2(_distances, _index);
        /* Statements */
        _theta = _percentSign_2(_plusSign_2(_theta, _each), _pi_1(2));
        _p = _plusSign_2(_p, _asterisk_2(_angleVector_1(_theta), _r));
        return _add_2(_answer, _p);
      }, ["each", "index"]),
    );
    return _answer;
  }, ["angles", "distances", "origin"]),
  "{ :angles :distances :origin |\n\t\tlet answer = [origin];\n\t\tlet theta = 0;\n\t\tlet p = origin;\n\t\tangles.withIndexDo { :each :index |\n\t\t\tlet r = distances.atWrap(index);\n\t\t\ttheta := (theta + each) % 2.pi;\n\t\t\tp := p + (theta.angleVector * r);\n\t\t\tanswer.add(p)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "anglePath",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _anglePath_3(_self, [1], [0, 0]);
  }, ["self"]),
  "{ :self |\n\t\tself.anglePath([1], [0 0])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "coordinateBoundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _minimum = _copy_1(_anyOne_1(_self));
    let _maximum = _copy_1(_minimum);
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _withIndexDo_2(
          _each,
          sl.annotateFunction(function (_n, _i) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _n, _i";
              throw new Error(errorMessage);
            } /* Statements */
            _ifTrue_2(
              _lessThanSign_2(_n, _at_2(_minimum, _i)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(_minimum, _i, _n);
              }, []),
            );
            return _ifTrue_2(
              _greaterThanSign_2(_n, _at_2(_maximum, _i)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(_maximum, _i, _n);
              }, []),
            );
          }, ["n", "i"]),
        );
      }, ["each"]),
    );
    return [_minimum, _maximum];
  }, ["self"]),
  "{ :self |\n\t\tlet minimum = self.anyOne.copy;\n\t\tlet maximum = minimum.copy;\n\t\tself.do { :each |\n\t\t\teach.withIndexDo { :n :i |\n\t\t\t\t(n < minimum[i]).ifTrue {\n\t\t\t\t\tminimum[i] := n\n\t\t\t\t};\n\t\t\t\t(n > maximum[i]).ifTrue {\n\t\t\t\t\tmaximum[i] := n\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\t[minimum, maximum]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "coordinateBounds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _transpose_1(_coordinateBoundingBox_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.coordinateBoundingBox.transpose\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "counterClockwiseVectorAngle",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _theta = _signedVectorAngle_2(_u, _v);
    /* Statements */
    return _if_3(
      _lessThanSign_2(_theta, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(_theta, _pi_1(2));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _theta;
      }, []),
    );
  }, ["u", "v"]),
  "{ :u :v |\n\t\tlet theta = signedVectorAngle(u, v);\n\t\t(theta < 0).if {\n\t\t\ttheta + 2.pi\n\t\t} {\n\t\t\ttheta\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "findShortestTour",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _heldKarpAlgorithm_1(_distanceMatrix_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself\n\t\t.distanceMatrix\n\t\t.heldKarpAlgorithm\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "isOrigin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_self, _isZero_1);
  }, ["self"]),
  "{ :self |\n\t\tself.allSatisfy(isZero:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "lineEquation",
  ["p1", "p2"],
  sl.annotateFunction(function (_p1, _p2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p1, _p2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_p1, 2);
    let _x1 = _at_2(__SplVar1, 1);
    let _y1 = _at_2(__SplVar1, 2);
    let __SplVar2 = _assertIsOfSize_2(_p2, 2);
    let _x2 = _at_2(__SplVar2, 1);
    let _y2 = _at_2(__SplVar2, 2);
    let _a = _hyphenMinus_2(_y2, _y1);
    let _b = _hyphenMinus_2(_x1, _x2);
    let _c = _hyphenMinus_2(
      _asterisk_2(_y1, _hyphenMinus_2(_x2, _x1)),
      _asterisk_2(_x1, _hyphenMinus_2(_y2, _y1)),
    );
    let _e = [_a, _b, _c];
    /* Statements */
    return _if_3(
      _allSatisfy_2(_e, _isInteger_1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_e, _gcd_1(_e));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _e;
      }, []),
    );
  }, ["p1", "p2"]),
  "{ :p1 :p2 |\n\t\tlet [x1, y1] = p1;\n\t\tlet [x2, y2] = p2;\n\t\tlet a = y2 - y1;\n\t\tlet b = x1 - x2;\n\t\tlet c = (y1 * (x2 - x1)) - (x1 * (y2 - y1));\n\t\tlet e = [a, b, c];\n\t\te.allSatisfy(isInteger:/1).if {\n\t\t\te / e.gcd\n\t\t} {\n\t\t\te\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "lineEquationPolynomial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar3 = _assertIsOfSize_2(_self, 3);
    let _a = _at_2(__SplVar3, 1);
    let _b = _at_2(__SplVar3, 2);
    let _c = _at_2(__SplVar3, 3);
    let _m = _hyphenMinus_2(0, _solidus_2(_c, _b));
    let _y = _hyphenMinus_2(0, _solidus_2(_a, _b));
    /* Statements */
    return _UnivariatePolynomial_1([_m, _y]);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c] = self;\n\t\tlet m = 0 - (c / b);\n\t\tlet y = 0 - (a / b);\n\t\tUnivariatePolynomial([m, y])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "lineLineIntersection",
  ["l1", "l2"],
  sl.annotateFunction(function (_l1, _l2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _l1, _l2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar4 = _assertIsOfSize_2(_l1, 2);
    let _p1 = _at_2(__SplVar4, 1);
    let _p2 = _at_2(__SplVar4, 2);
    let __SplVar5 = _assertIsOfSize_2(_l2, 2);
    let _p3 = _at_2(__SplVar5, 1);
    let _p4 = _at_2(__SplVar5, 2);
    let __SplVar6 = _assertIsOfSize_2(_p1, 2);
    let _x1 = _at_2(__SplVar6, 1);
    let _y1 = _at_2(__SplVar6, 2);
    let __SplVar7 = _assertIsOfSize_2(_p2, 2);
    let _x2 = _at_2(__SplVar7, 1);
    let _y2 = _at_2(__SplVar7, 2);
    let __SplVar8 = _assertIsOfSize_2(_p3, 2);
    let _x3 = _at_2(__SplVar8, 1);
    let _y3 = _at_2(__SplVar8, 2);
    let __SplVar9 = _assertIsOfSize_2(_p4, 2);
    let _x4 = _at_2(__SplVar9, 1);
    let _y4 = _at_2(__SplVar9, 2);
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
  }, ["l1", "l2"]),
  "{ :l1 :l2 |\n\t\tlet [p1, p2] = l1;\n\t\tlet [p3, p4] = l2;\n\t\tlet [x1, y1] = p1;\n\t\tlet [x2, y2] = p2;\n\t\tlet [x3, y3] = p3;\n\t\tlet [x4, y4] = p4;\n\t\tlet a1 = y2 - y1;\n\t\tlet b1 = x1 - x2;\n\t\tlet c1 = (a1 * x1) + (b1 * y1);\n\t\tlet a2 = y4 - y3;\n\t\tlet b2 = x3 - x4;\n\t\tlet c2 = (a2 * x3) + (b2 * y3);\n\t\tlet delta = (a1 * b2) - (a2 * b1);\n\t\t[\n\t\t\t((b2 * c1) - (b1 * c2)) / delta,\n\t\t\t((a1 * c2) - (a2 * c1)) / delta\n\t\t]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "linePlaneIntersection",
  ["p0", "n", "l0", "l"],
  sl.annotateFunction(function (_p0, _n, _l0, _l) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _p0, _n, _l0, _l";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _ln = _dot_2(_l, _n);
    /* Statements */
    return _if_3(
      _isVeryCloseTo_2(_ln, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return null;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _d = _solidus_2(_dot_2(_hyphenMinus_2(_p0, _l0), _n), _ln);
        /* Statements */
        return _plusSign_2(_l0, _asterisk_2(_l, _d));
      }, []),
    );
  }, ["p0", "n", "l0", "l"]),
  "{ :p0 :n :l0 :l |\n\t\tlet ln = l.dot(n);\n\t\tln.isVeryCloseTo(0).if {\n\t\t\tnil\n\t\t} {\n\t\t\tlet d = (p0 - l0).dot(n) / ln;\n\t\t\tl0 + (l * d)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "midpoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar10 = _assertIsOfSize_2(_self, 2);
    let _u = _at_2(__SplVar10, 1);
    let _v = _at_2(__SplVar10, 2);
    /* Statements */
    return _plusSign_2(_u, _solidus_2(_hyphenMinus_2(_v, _u), 2));
  }, ["self"]),
  "{ :self |\n\t\tlet [u, v] = self;\n\t\tu + ((v - u) / 2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "perpendicularBisector",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar11 = _assertIsOfSize_2(_self, 2);
    let _u = _at_2(__SplVar11, 1);
    let _v = _at_2(__SplVar11, 2);
    let _m = _rotationMatrix_1(_pi_1(0.5));
    /* Statements */
    return _InfiniteLine_2(
      _midpoint_1([_u, _v]),
      _dot_2(_hyphenMinus_2(_v, _u), _m),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [u, v] = self;\n\t\tlet m = 0.5.pi.rotationMatrix;\n\t\tInfiniteLine(\n\t\t\t[u v].midpoint,\n\t\t\t(v - u).dot(m)\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "planarAngle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar12 = _assertIsOfSize_2(_self, 3);
    let _q1 = _at_2(__SplVar12, 1);
    let _p = _at_2(__SplVar12, 2);
    let _q2 = _at_2(__SplVar12, 3);
    let __SplVar13 = _assertIsOfSize_2(_q1, 2);
    let _x1 = _at_2(__SplVar13, 1);
    let _y1 = _at_2(__SplVar13, 2);
    let __SplVar14 = _assertIsOfSize_2(_p, 2);
    let _x0 = _at_2(__SplVar14, 1);
    let _y0 = _at_2(__SplVar14, 2);
    let __SplVar15 = _assertIsOfSize_2(_q2, 2);
    let _x2 = _at_2(__SplVar15, 1);
    let _y2 = _at_2(__SplVar15, 2);
    let _n = _plusSign_2(
      _asterisk_2(_hyphenMinus_2(_x1, _x0), _hyphenMinus_2(_x2, _x0)),
      _asterisk_2(_hyphenMinus_2(_y1, _y0), _hyphenMinus_2(_y2, _y0)),
    );
    let _d = _asterisk_2(
      _sqrt_1(
        _plusSign_2(
          _square_1(_hyphenMinus_2(_x1, _x0)),
          _square_1(_hyphenMinus_2(_y1, _y0)),
        ),
      ),
      _sqrt_1(
        _plusSign_2(
          _square_1(_hyphenMinus_2(_x2, _x0)),
          _square_1(_hyphenMinus_2(_y2, _y0)),
        ),
      ),
    );
    /* Statements */
    return _arcCos_1(_solidus_2(_n, _d));
  }, ["self"]),
  "{ :self |\n\t\tlet [q1, p, q2] = self;\n\t\tlet [x1, y1] = q1;\n\t\tlet [x0, y0] = p;\n\t\tlet [x2, y2] = q2;\n\t\tlet n = ((x1 - x0) * (x2 - x0)) + ((y1 - y0) * (y2 - y0));\n\t\tlet d = ((x1 - x0).square + (y1 - y0).square).sqrt * ((x2 - x0).square + (y2 - y0).square).sqrt;\n\t\t(n / d).arcCos\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "Point",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_rank_1(_self), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_self, _Point_1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_2(_newPoint_0(), _self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.rank > 1).if {\n\t\t\tself.collect(Point:/1)\n\t\t} {\n\t\t\tnewPoint().initializeSlots(self)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "pointLineDistance",
  ["aLine", "aPoint"],
  sl.annotateFunction(function (_aLine, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _aLine, _aPoint";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar16 = _assertIsOfSize_2(_aLine, 2);
    let _p1 = _at_2(__SplVar16, 1);
    let _p2 = _at_2(__SplVar16, 2);
    let _p0 = _aPoint;
    /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_p0), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _abs_1(_asterisk_2(2, _shoelaceFormula_1([_p0, _p1, _p2]))),
          _abs_1(_euclideanDistance_2(_p1, _p2)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _norm_1(_cross_2(_hyphenMinus_2(_p0, _p1), _hyphenMinus_2(_p0, _p2))),
          _norm_1(_hyphenMinus_2(_p2, _p1)),
        );
      }, []),
    );
  }, ["aLine", "aPoint"]),
  "{ :aLine :aPoint |\n\t\tlet [p1, p2] = aLine;\n\t\tlet p0 = aPoint;\n\t\t(p0.size = 2).if {\n\t\t\t(2 * [p0, p1, p2].shoelaceFormula).abs / p1.euclideanDistance(p2).abs\n\t\t} {\n\t\t\t(p0 - p1).cross(p0 - p2).norm / (p2 - p1).norm\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "pointLineNearest",
  ["l", "p"],
  sl.annotateFunction(function (_l, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _l, _p";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar17 = _assertIsOfSize_2(_l, 2);
    let _a = _at_2(__SplVar17, 1);
    let _b = _at_2(__SplVar17, 2);
    let _u = _hyphenMinus_2(_p, _a);
    let _v = _hyphenMinus_2(_b, _a);
    let _r = _projection_2(_u, _v);
    /* Statements */
    return _plusSign_2(_a, _r);
  }, ["l", "p"]),
  "{ :l :p |\n\t\tlet [a, b] = l;\n\t\tlet u = p - a;\n\t\tlet v = b - a;\n\t\tlet r = projection(u, v);\n\t\ta + r\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "pointLineSegmentNearest",
  ["l", "p"],
  sl.annotateFunction(function (_l, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _l, _p";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar18 = _assertIsOfSize_2(_l, 2);
    let _a = _at_2(__SplVar18, 1);
    let _b = _at_2(__SplVar18, 2);
    let _d = _euclideanDistance_2(_a, _b);
    /* Statements */
    return _if_3(
      _equalsSign_2(_d, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _a;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _u = _hyphenMinus_2(_p, _a);
        let _v = _hyphenMinus_2(_b, _a);
        let _r = _projection_2(_u, _v);
        let _t = _unsignedVectorAngle_2(_v, _r);
        /* Statements */
        return _if_3(
          _tilde_2(_t, _pi_1(1)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _a;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _i = _plusSign_2(_a, _r);
            /* Statements */
            return _if_3(
              _greaterThanSign_2(_euclideanDistance_2(_a, _i), _d),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _b;
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _i;
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["l", "p"]),
  "{ :l :p |\n\t\tlet [a, b] = l;\n\t\tlet d = a.euclideanDistance(b);\n\t\t(d = 0).if {\n\t\t\ta\n\t\t} {\n\t\t\tlet u = p - a;\n\t\t\tlet v = b - a;\n\t\t\tlet r = projection(u, v);\n\t\t\tlet t = v.unsignedVectorAngle(r);\n\t\t\t(t ~ 1.pi).if {\n\t\t\t\ta\n\t\t\t} {\n\t\t\t\tlet i = a + r;\n\t\t\t\t(a.euclideanDistance(i) > d).if {\n\t\t\t\t\tb\n\t\t\t\t} {\n\t\t\t\t\ti\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "polylineArcLength",
  ["p"],
  sl.annotateFunction(function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_adjacentPairsCollect_2(_p, _euclideanDistance_2));
  }, ["p"]),
  "{ :p |\n\t\tp.adjacentPairsCollect(euclideanDistance:/2).sum\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "shoelaceFormula",
  ["p"],
  sl.annotateFunction(function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _p";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_p);
    let _a = 0;
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
        return _a = _plusSign_2(_a, _d);
      }, ["i"]),
    );
    return _solidus_2(_a, 2);
  }, ["p"]),
  "{ :p |\n\t\tlet n = p.size;\n\t\tlet a = 0;\n\t\t1.toDo(n) { :i |\n\t\t\tlet j = (i = n).if { 1 } { i + 1};\n\t\t\tlet d = (p[i][1] * p[j][2]) - (p[j][1] * p[i][2]);\n\t\t\ta := a + d\n\t\t};\n\t\ta / 2\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "signedVectorAngle",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar19 = _assertIsOfSize_2(_u, 2);
    let _u1 = _at_2(__SplVar19, 1);
    let _u2 = _at_2(__SplVar19, 2);
    let __SplVar20 = _assertIsOfSize_2(_v, 2);
    let _v1 = _at_2(__SplVar20, 1);
    let _v2 = _at_2(__SplVar20, 2);
    /* Statements */
    return _atan2_2(
      _hyphenMinus_2(_asterisk_2(_u1, _v2), _asterisk_2(_u2, _v1)),
      _plusSign_2(_asterisk_2(_u1, _v1), _asterisk_2(_u2, _v2)),
    );
  }, ["u", "v"]),
  "{ :u :v |\n\t\tlet [u1, u2] = u;\n\t\tlet [v1, v2] = v;\n\t\tatan2(\n\t\t\t(u1 * v2) - (u2 * v1),\n\t\t\t(u1 * v1) + (u2 * v2)\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "slopeInterceptForm",
  ["p", "q"],
  sl.annotateFunction(function (_p, _q) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p, _q";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar21 = _assertIsOfSize_2(_p, 2);
    let _x1 = _at_2(__SplVar21, 1);
    let _y1 = _at_2(__SplVar21, 2);
    let __SplVar22 = _assertIsOfSize_2(_q, 2);
    let _x2 = _at_2(__SplVar22, 1);
    let _y2 = _at_2(__SplVar22, 2);
    let _m = _solidus_2(_hyphenMinus_2(_y2, _y1), _hyphenMinus_2(_x2, _x1));
    let _c = _hyphenMinus_2(_y1, _asterisk_2(_m, _x1));
    /* Statements */
    return [_m, _c];
  }, ["p", "q"]),
  "{ :p :q |\n\t\tlet [x1, y1] = p;\n\t\tlet [x2, y2] = q;\n\t\tlet m = (y2 - y1) / (x2 - x1);\n\t\tlet c = y1 - (m * x1);\n\t\t[m, c]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "unsignedVectorAngle",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersand_2(
        _isVector_1(_u),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isVector_1(_v);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _arcCos_1(
          _solidus_2(_dot_2(_u, _v), _asterisk_2(_norm_1(_u), _norm_1(_v))),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "List>>unsignedVectorAngle: not vectors");
      }, []),
    );
  }, ["u", "v"]),
  "{ :u :v |\n\t\t(u.isVector & { v.isVector }).if {\n\t\t\t(u.dot(v) / (u.norm * v.norm)).arcCos\n\t\t} {\n\t\t\tself.error('List>>unsignedVectorAngle: not vectors')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "vectorAngle",
  ["u", "v", "rule"],
  sl.annotateFunction(function (_u, _v, _rule) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _u, _v, _rule";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_2(_rule, [
      _hyphenMinusGreaterThanSign_2(
        "CounterClockwise",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _counterClockwiseVectorAngle_2(_u, _v);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "Signed",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _signedVectorAngle_2(_u, _v);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "Unsigned",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _unsignedVectorAngle_2(_u, _v);
        }, []),
      ),
    ]);
  }, ["u", "v", "rule"]),
  "{ :u :v :rule |\n\t\trule.caseOf(\n\t\t\t[\n\t\t\t\t'CounterClockwise' -> { counterClockwiseVectorAngle(u, v) },\n\t\t\t\t'Signed' -> { signedVectorAngle(u, v) },\n\t\t\t\t'Unsigned' -> { unsignedVectorAngle(u, v) }\n\t\t\t]\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Association",
  "Point",
  "planarAngle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _key_1(_self);
    let __SplVar23 = _assertIsOfSize_2(_value_1(_self), 2);
    let _q1 = _at_2(__SplVar23, 1);
    let _q2 = _at_2(__SplVar23, 2);
    /* Statements */
    return _counterClockwiseVectorAngle_2(
      _hyphenMinus_2(_q1, _p),
      _hyphenMinus_2(_q2, _p),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet p = self.key;\n\t\tlet [q1, q2] = self.value;\n\t\tcounterClockwiseVectorAngle(q1 - p, q2 - p)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "CartesianCoordinates",
  "Point",
  "asPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Point_1(_coordinates_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tPoint(self.coordinates)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "Point",
  "asPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asPoint_1(_asCartesianCoordinates_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asCartesianCoordinates.asPoint\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "asPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Point_1(_asList_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tPoint(self.asList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Tuple",
  "Point",
  "asPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Point_1(_asList_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tPoint(self.asList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "coordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asList_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.asList\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Tuple",
  "Point",
  "coordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asList_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.asList\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Point",
  "circlePoints",
  ["n", "o", "r", "theta"],
  sl.annotateFunction(function (_n, _o, _r, _theta) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _n, _o, _r, _theta";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _solidus_2(_pi_1(2), _n);
    /* Statements */
    return _collect_2(
      _to_2(0, _hyphenMinus_2(_n, 1)),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          _o,
          _fromPolarCoordinates_1([
            _r,
            _plusSign_2(_theta, _asterisk_2(_i, _m)),
          ]),
        );
      }, ["i"]),
    );
  }, ["n", "o", "r", "theta"]),
  "{ :n :o :r :theta |\n\t\tlet m = 2.pi / n;\n\t\t0.to(n - 1).collect { :i |\n\t\t\to + [r, theta + (i * m)].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Point",
  "circlePoints",
  ["n", "r"],
  sl.annotateFunction(function (_n, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _r";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _theta = _hyphenMinus_2(
      _pi_1(_solidus_2(1, _n)),
      _pi_1(_solidus_2(1, 2)),
    );
    /* Statements */
    return _circlePoints_4(_n, [0, 0], _r, _theta);
  }, ["n", "r"]),
  "{ :n :r |\n\t\tlet theta = (1 / n).pi - (1 / 2).pi;\n\t\tn.circlePoints([0 0], r, theta)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Point",
  "spherePoints",
  ["n", "r"],
  sl.annotateFunction(function (_n, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _r";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _solidus_2(_asterisk_2(_pi_1(4), _square_1(_r)), _n);
    let _d = _sqrt_1(_a);
    let _mTheta = _round_1(_solidus_2(_pi_1(1), _d));
    let _dTheta = _solidus_2(_pi_1(1), _mTheta);
    let _dPhi = _solidus_2(_a, _dTheta);
    let _answer = [];
    /* Statements */
    _toDo_3(
      0,
      _hyphenMinus_2(_mTheta, 1),
      sl.annotateFunction(function (_m) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _m";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _theta = _solidus_2(_pi_1(_plusSign_2(_m, 0.5)), _mTheta);
        let _mPhi = _round_1(
          _solidus_2(_asterisk_2(_pi_1(2), _sin_1(_theta)), _dPhi),
        );
        /* Statements */
        return _toDo_3(
          0,
          _hyphenMinus_2(_mPhi, 1),
          sl.annotateFunction(function (_n) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _n";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _phi = _solidus_2(_asterisk_2(_pi_1(2), _n), _mPhi);
            /* Statements */
            return _add_2(
              _answer,
              _asterisk_2([
                _asterisk_2(_sin_1(_theta), _cos_1(_phi)),
                _asterisk_2(_sin_1(_theta), _sin_1(_phi)),
                _cos_1(_theta),
              ], _r),
            );
          }, ["n"]),
        );
      }, ["m"]),
    );
    return _answer;
  }, ["n", "r"]),
  "{ :n :r |\n\t\tlet a = (4.pi * r.square) / n;\n\t\tlet d = a.sqrt;\n\t\tlet mTheta = (1.pi / d).round;\n\t\tlet dTheta = 1.pi / mTheta;\n\t\tlet dPhi = a / dTheta;\n\t\tlet answer = [];\n\t\t0.toDo(mTheta - 1) { :m |\n\t\t\tlet theta = (m + 0.5).pi / mTheta;\n\t\t\tlet mPhi = (2.pi * theta.sin / dPhi).round;\n\t\t\t0.toDo(mPhi - 1) { :n |\n\t\t\t\tlet phi = (2.pi * n) / mPhi;\n\t\t\t\tanswer.add(\n\t\t\t\t\t[\n\t\t\t\t\t\ttheta.sin * phi.cos,\n\t\t\t\t\t\ttheta.sin * phi.sin,\n\t\t\t\t\t\ttheta.cos\n\t\t\t\t\t] * r\n\t\t\t\t)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Point",
  "spherePointsFibonacci",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _phi = _pi_1(_hyphenMinus_2(_sqrt_1(5), 1));
    /* Statements */
    _toDo_3(
      0,
      _hyphenMinus_2(_n, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _y = _hyphenMinus_2(
          1,
          _asterisk_2(_solidus_2(_i, _hyphenMinus_2(_n, 1)), 2),
        );
        let _radius = _sqrt_1(_hyphenMinus_2(1, _asterisk_2(_y, _y)));
        let _theta = _asterisk_2(_phi, _i);
        let _x = _asterisk_2(_cos_1(_theta), _radius);
        let _z = _asterisk_2(_sin_1(_theta), _radius);
        /* Statements */
        return _add_2(_answer, [_x, _y, _z]);
      }, ["i"]),
    );
    return _answer;
  }, ["n"]),
  "{ :n |\n\t\tlet answer = [];\n\t\tlet phi = (5.sqrt - 1).pi;\n\t\t0.toDo(n - 1) { :i |\n\t\t\tlet y = 1 - ((i / (n - 1)) * 2);\n\t\t\tlet radius = (1 - (y * y)).sqrt;\n\t\t\tlet theta = phi * i;\n\t\t\tlet x = theta.cos * radius;\n\t\t\tlet z = theta.sin * radius;\n\t\t\tanswer.add([x, y, z])\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Point",
  "isOrigin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isZero_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.isZero\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Indexable",
  "Point",
  "staircasePath",
  ["self", "aList", "origin"],
  sl.annotateFunction(function (_self, _aList, _origin) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aList, _origin";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = [_origin];
    /* Statements */
    _do_2(
      _aList,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _last_1(_c);
        let _b = _at_2(_self, _i);
        /* Statements */
        return _add_2(_c, _plusSign_2(_a, _b));
      }, ["i"]),
    );
    return _c;
  }, ["self", "aList", "origin"]),
  "{ :self :aList :origin |\n\t\tlet c = [origin];\n\t\taList.do { :i |\n\t\t\tlet a = c.last;\n\t\t\tlet b = self[i];\n\t\t\tc.add(a + b)\n\t\t};\n\t\tc\n\t}",
);
