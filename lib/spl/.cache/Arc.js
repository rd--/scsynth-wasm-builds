sl.addType(
  false,
  "Arc",
  "Arc",
  ["Object", "Equatable", "Geometry"],
  ["center", "radii", "angles"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Arc",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Arc",
);

sl.copyTraitMethodsToType(
  "Geometry",
  "Arc",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "apothem",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _chordLength_1(_self);
    let _r = _radius_1(_self);
    /* Statements */
    return _solidus_2(
      _sqrt_1(_hyphenMinus_2(_asterisk_2(4, _square_1(_r)), _square_1(_a))),
      2,
    );
  }, ["self"]),
  "{ :self |\n\t\tlet a = self.chordLength;\n\t\tlet r = self.radius;\n\t\t((4 * r.square) - a.square).sqrt / 2\n\t}",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "approximation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _discretize_3(
      _hyphenMinusHyphenMinus_2(0, 1),
      64,
      _parametricEquation_1(_self),
    );
  }, ["self"]),
  "{ :self |\n\t\t(0 -- 1).discretize(\n\t\t\t64,\n\t\t\tself.parametricEquation\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "arcLength",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = _radius_1(_self);
    let _theta = _centralAngle_1(_self);
    /* Statements */
    return _asterisk_2(_r, _theta);
  }, ["self"]),
  "{ :self |\n\t\tlet r = self.radius;\n\t\tlet theta = self.centralAngle;\n\t\tr * theta\n\t}",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "boundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinateBoundingBox_1(_approximation_1(_self));
  }, ["self"]),
  "{ :self |\n\t\t/*[\n\t\t\tself.center - self.radii,\n\t\t\tself.center + self.radii\n\t\t]*/\n\t\tself.approximation.coordinateBoundingBox\n\t}",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "centralAngle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_angles_1(_self), 2);
    let _a = _at_2(__SplVar1, 1);
    let _b = _at_2(__SplVar1, 2);
    /* Statements */
    return _percentSign_2(_hyphenMinus_2(_b, _a), _pi_1(2));
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b] = self.angles;\n\t\t(b - a) % 2.pi\n\t}",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "centroid",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2(_angles_1(_self), 2);
    let _a = _at_2(__SplVar2, 1);
    let _b = _at_2(__SplVar2, 2);
    let _r = _radius_1(_self);
    let _alpha = _solidus_2(_hyphenMinus_2(_b, _a), 2);
    let _rho = _solidus_2(
      _asterisk_2(_asterisk_2(4, _r), _sin_1(_alpha)),
      _asterisk_2(_asterisk_2(3, _alpha), 2),
    );
    let _theta = _plusSign_2(_a, _alpha);
    let _d = _fromPolarCoordinates_1([_rho, _theta]);
    /* Statements */
    return _plusSign_2(_center_1(_self), _d);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b] = self.angles;\n\t\tlet r = self.radius;\n\t\tlet alpha = (b - a) / 2;\n\t\tlet rho = (4 * r * alpha.sin) / (3 * alpha * 2);\n\t\tlet theta = a + alpha;\n\t\tlet d = [rho, theta].fromPolarCoordinates;\n\t\tself.center + d\n\t}",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "chordLength",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = _radius_1(_self);
    let _theta = _centralAngle_1(_self);
    /* Statements */
    return _asterisk_2(_asterisk_2(2, _r), _sin_1(_solidus_2(_theta, 2)));
  }, ["self"]),
  "{ :self |\n\t\tlet r = self.radius;\n\t\tlet theta = self.centralAngle;\n\t\t2 * r * (theta / 2).sin\n\t}",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "circle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Circle_2(_center_1(_self), _radius_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tCircle(self.center, self.radius)\n\t}",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "ellipse",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Ellipse_2(_center_1(_self), _radii_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tEllipse(self.center, self.radii)\n\t}",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "embeddingDimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_center_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.center.size\n\t}",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "isCircularArc",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar3 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _rx = _at_2(__SplVar3, 1);
    let _ry = _at_2(__SplVar3, 2);
    /* Statements */
    return _equalsSign_2(_rx, _ry);
  }, ["self"]),
  "{ :self |\n\t\tlet [rx, ry] = self.radii;\n\t\trx = ry\n\t}",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "isMajorArc",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _greaterThanSign_2(_centralAngle_1(_self), _pi_1(1));
  }, ["self"]),
  "{ :self |\n\t\tself.centralAngle > 1.pi\n\t}",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "parametricEquation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar4 = _assertIsOfSize_2(_angles_1(_self), 2);
    let _a = _at_2(__SplVar4, 1);
    let _b = _at_2(__SplVar4, 2);
    let _c = _if_3(
      _lessThanSign_2(_a, _b),
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
        return _plusSign_2(_b, _pi_1(2));
      }, []),
    );
    let _f_1 = _rescaleBlock_2([0, 1], [_a, _c]);
    let _g_1 = _ellipseCurve_3(_center_1(_self), _radii_1(_self), 0);
    /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Statements */
      return _g_1(_f_1(_theta));
    }, ["theta"]);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b] = self.angles;\n\t\tlet c = (a < b).if { b } { b + 2.pi };\n\t\tlet f:/1 = rescaleBlock([0, 1], [a, c]);\n\t\tlet g:/1 = ellipseCurve(self.center, self.radii, 0);\n\t\t{ :theta |\n\t\t\tg(f(theta))\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "perimeter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_arcLength_1(_self), _asterisk_2(2, _radius_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.arcLength + (2 * self.radius)\n\t}",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "radius",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar5 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _rx = _at_2(__SplVar5, 1);
    let _ry = _at_2(__SplVar5, 2);
    /* Statements */
    return _if_3(
      _equalsSign_2(_rx, _ry),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _rx;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Arc>>radius: unequal radii");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [rx, ry] = self.radii;\n\t\t(rx = ry).if {\n\t\t\trx\n\t\t} {\n\t\t\tself.error('Arc>>radius: unequal radii')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "sagitta",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(_radius_1(_self), _apothem_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.radius - self.apothem\n\t}",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "sector",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isCircularArc_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _CircularSector_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "sector: not circular arc");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isCircularArc.if {\n\t\t\tCircularSector(self)\n\t\t} {\n\t\t\tself.error('sector: not circular arc')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "sectorArea",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = _radius_1(_self);
    let _theta = _centralAngle_1(_self);
    /* Statements */
    return _solidus_2(_asterisk_2(_square_1(_r), _theta), 2);
  }, ["self"]),
  "{ :self |\n\t\tlet r = self.radius;\n\t\tlet theta = self.centralAngle;\n\t\tr.square * theta / 2\n\t}",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "segment",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isCircularArc_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _CircularSegment_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "segment: not circular arc");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isCircularArc.if {\n\t\t\tCircularSegment(self)\n\t\t} {\n\t\t\tself.error('segment: not circular arc')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "segmentArea",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _theta = _centralAngle_1(_self);
    /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_theta, _pi_1(1)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _r = _radius_1(_self);
        /* Statements */
        return _solidus_2(
          _asterisk_2(_square_1(_r), _hyphenMinus_2(_theta, _sin_1(_theta))),
          2,
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "segmentArea: θ>π");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet theta = self.centralAngle;\n\t\t(theta <= 1.pi).if {\n\t\t\tlet r = self.radius;\n\t\t\tr.square * (theta - theta.sin) / 2\n\t\t} {\n\t\t\tself.error('segmentArea: θ>π')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
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
  "Arc",
  "Arc",
  "svgFragment",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _precision = _at_2(_options, "precision");
    let _r = _radii_1(_self);
    let __SplVar6 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 3);
    let _c = _at_2(__SplVar6, 1);
    let _p = _at_2(__SplVar6, 2);
    let _q = _at_2(__SplVar6, 3);
    /* Statements */
    return _format_2('<path d="M %,% %" />', [
      _printStringToFixed_2(_at_2(_p, 1), _precision),
      _printStringToFixed_2(_at_2(_p, 2), _precision),
      _svgArcTo_8(
        _at_2(_r, 1),
        _at_2(_r, 2),
        0,
        _isMajorArc_1(_self),
        true,
        _at_2(_q, 1),
        _at_2(_q, 2),
        _precision,
      ),
    ]);
  }, ["self", "options"]),
  "{ :self :options |\n\t\tlet precision = options['precision'];\n\t\tlet r = self.radii;\n\t\tlet [c, p, q] = self.vertexCoordinates;\n\t\t'<path d=\"M %,% %\" />'.format(\n\t\t\t[\n\t\t\t\tp[1].printStringToFixed(precision),\n\t\t\t\tp[2].printStringToFixed(precision),\n\t\t\t\tsvgArcTo(r[1], r[2], 0, self.isMajorArc, true, q[1], q[2], precision)\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "vertexCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar7 = _assertIsOfSize_2(_center_1(_self), 2);
    let _cx = _at_2(__SplVar7, 1);
    let _cy = _at_2(__SplVar7, 2);
    let __SplVar8 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _rx = _at_2(__SplVar8, 1);
    let _ry = _at_2(__SplVar8, 2);
    let __SplVar9 = _assertIsOfSize_2(_angles_1(_self), 2);
    let _startAngle = _at_2(__SplVar9, 1);
    let _endAngle = _at_2(__SplVar9, 2);
    let __SplVar10 = _assertIsOfSize_2(
      _plusSign_2([_cx, _cy], [
        _asterisk_2(_rx, _cos_1(_startAngle)),
        _asterisk_2(_ry, _sin_1(_startAngle)),
      ]),
      2,
    );
    let _x1 = _at_2(__SplVar10, 1);
    let _y1 = _at_2(__SplVar10, 2);
    let __SplVar11 = _assertIsOfSize_2(
      _plusSign_2([_cx, _cy], [
        _asterisk_2(_rx, _cos_1(_endAngle)),
        _asterisk_2(_ry, _sin_1(_endAngle)),
      ]),
      2,
    );
    let _x2 = _at_2(__SplVar11, 1);
    let _y2 = _at_2(__SplVar11, 2);
    /* Statements */
    return [[_cx, _cy], [_x1, _y1], [_x2, _y2]];
  }, ["self"]),
  "{ :self  |\n\t\tlet [cx, cy] = self.center;\n\t\tlet [rx, ry] = self.radii;\n\t\tlet [startAngle, endAngle] = self.angles;\n\t\tlet [x1, y1] = [cx, cy] + [rx * startAngle.cos, ry * startAngle.sin];\n\t\tlet [x2, y2] = [cx, cy] + [rx * endAngle.cos, ry * endAngle.sin];\n\t\t[cx cy; x1 y1; x2 y2]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Arc",
  "Arc",
  ["center", "radii", "angles"],
  sl.annotateFunction(function (_center, _radii, _angles) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _center, _radii, _angles";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newArc_0(), _center, _radii, _angles);
  }, ["center", "radii", "angles"]),
  "{ :center :radii :angles |\n\t\tnewArc().initializeSlots(center, radii, angles)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Arc",
  "circularArcThrough",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _circle = _circleThrough_1(_self);
    let _c = _center_1(_circle);
    let _r = _radius_1(_circle);
    let __SplVar12 = _assertIsOfSize_2(_self, 3);
    let _a = _at_2(__SplVar12, 1);
    let __SplUnused16 = _at_2(__SplVar12, 2);
    let _b = _at_2(__SplVar12, 3);
    let _p = _counterClockwiseVectorAngle_2([1, 0], _hyphenMinus_2(_a, _c));
    let _q = _counterClockwiseVectorAngle_2([1, 0], _hyphenMinus_2(_b, _c));
    /* Statements */
    return _Arc_3(_c, [_r, _r], [_p, _q]);
  }, ["self"]),
  "{ :self |\n\t\tlet circle = circleThrough(self);\n\t\tlet c = circle.center;\n\t\tlet r = circle.radius;\n\t\tlet [a, _, b] = self;\n\t\tlet p = counterClockwiseVectorAngle([1 0], a - c);\n\t\tlet q = counterClockwiseVectorAngle([1 0], b - c);\n\t\tArc(c, [r, r], [p, q])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Arc",
  "poincareDiskArc",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar13 = _assertIsOfSize_2(_self, 2);
    let _theta1 = _at_2(__SplVar13, 1);
    let _theta2 = _at_2(__SplVar13, 2);
    let _dTheta = _solidus_2(_abs_1(_hyphenMinus_2(_theta1, _theta2)), 2);
    /* Statements */
    return _if_3(
      _isVeryCloseTo_2(_dTheta, _pi_1(_Fraction_2(1n, 2n))),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Line_1(
          _collect_2([[1, _theta1], [1, _theta2]], _fromPolarCoordinates_1),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _theta = _solidus_2(_plusSign_2(_theta1, _theta2), 2);
        let _r = _tan_1(_dTheta);
        let _y = _asterisk_2(_sin_1(_dTheta), _r);
        let _bigR = _sec_1(_dTheta);
        let _phi = _arcSin_1(_cos_1(_dTheta));
        let _cx = _asterisk_2(_bigR, _cos_1(_theta));
        let _cy = _asterisk_2(_bigR, _sin_1(_theta));
        let _c = [_cx, _cy];
        let _a = _fromPolarCoordinates_1([1, _theta2]);
        let _b = _planarAngle_1(
          _hyphenMinusGreaterThanSign_2(_c, [_plusSign_2(_c, [1, 0]), _a]),
        );
        /* Statements */
        return _Arc_3(_c, [_r, _r], [
          _b,
          _plusSign_2(_b, _asterisk_2(2, _phi)),
        ]);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [theta1, theta2] = self;\n\t\tlet dTheta = (theta1 - theta2).abs / 2;\n\t\tdTheta.isVeryCloseTo(1/2.pi).if {\n\t\t\tLine([[1, theta1], [1, theta2]].collect(fromPolarCoordinates:/1))\n\t\t} {\n\t\t\tlet theta = (theta1 + theta2) / 2;\n\t\t\tlet r = dTheta.tan;\n\t\t\tlet y = dTheta.sin * r;\n\t\t\tlet bigR = dTheta.sec;\n\t\t\tlet phi = dTheta.cos.arcSin;\n\t\t\tlet cx = bigR * theta.cos;\n\t\t\tlet cy = bigR * theta.sin;\n\t\t\tlet c = [cx, cy];\n\t\t\tlet a = [1, theta2].fromPolarCoordinates;\n\t\t\tlet b = (c -> [c + [1, 0], a]).planarAngle;\n\t\t\tArc(c, [r, r], [b, b + (2 * phi)])\n\t\t}\n\t}",
);

sl.addType(
  false,
  "CircularSector",
  "Arc",
  ["Object", "Geometry"],
  ["arc"],
);

sl.copyTraitMethodsToType(
  "Object",
  "CircularSector",
);

sl.copyTraitMethodsToType(
  "Geometry",
  "CircularSector",
);

sl.addMethodToExistingType(
  "CircularSector",
  "Arc",
  "boundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _boundingBox_1(_geometry_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.geometry.boundingBox\n\t}",
);

sl.addMethodToExistingType(
  "CircularSector",
  "Arc",
  "embeddingDimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _embeddingDimension_1(_arc_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.arc.embeddingDimension\n\t}",
);

sl.addMethodToExistingType(
  "CircularSector",
  "Arc",
  "geometry",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _arc_1(_self);
    let __SplVar14 = _assertIsOfSize_2(_vertexCoordinates_1(_a), 3);
    let _c = _at_2(__SplVar14, 1);
    let _p = _at_2(__SplVar14, 2);
    let _q = _at_2(__SplVar14, 3);
    /* Statements */
    return _GeometryCollection_1([_Line_1([_c, _p]), _a, _Line_1([_q, _c])]);
  }, ["self"]),
  "{ :self |\n\t\tlet a = self.arc;\n\t\tlet [c, p, q] = a.vertexCoordinates;\n\t\tGeometryCollection(\n\t\t\t[\n\t\t\t\tLine([c, p]),\n\t\t\t\ta,\n\t\t\t\tLine([q, c])\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "CircularSector",
  "Arc",
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
  "CircularSector",
  "Arc",
  "svgFragment",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _svgFragment_2(_geometry_1(_self), _options);
  }, ["self", "options"]),
  "{ :self :options |\n\t\tself.geometry.svgFragment(options)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Arc",
  "Arc",
  "CircularSector",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newCircularSector_0(), _self);
  }, ["self"]),
  "{ :self |\n\t\tnewCircularSector().initializeSlots(self)\n\t}",
);

sl.addType(
  false,
  "CircularSegment",
  "Arc",
  ["Object", "Geometry"],
  ["arc"],
);

sl.copyTraitMethodsToType(
  "Object",
  "CircularSegment",
);

sl.copyTraitMethodsToType(
  "Geometry",
  "CircularSegment",
);

sl.addMethodToExistingType(
  "CircularSegment",
  "Arc",
  "boundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _boundingBox_1(_geometry_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.geometry.boundingBox\n\t}",
);

sl.addMethodToExistingType(
  "CircularSegment",
  "Arc",
  "embeddingDimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _embeddingDimension_1(_arc_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.arc.embeddingDimension\n\t}",
);

sl.addMethodToExistingType(
  "CircularSegment",
  "Arc",
  "geometry",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _arc_1(_self);
    let __SplVar15 = _assertIsOfSize_2(_vertexCoordinates_1(_a), 3);
    let __SplUnused17 = _at_2(__SplVar15, 1);
    let _p = _at_2(__SplVar15, 2);
    let _q = _at_2(__SplVar15, 3);
    /* Statements */
    return _GeometryCollection_1([_Line_1([_p, _q]), _a]);
  }, ["self"]),
  "{ :self |\n\t\tlet a = self.arc;\n\t\tlet [_, p, q] = a.vertexCoordinates;\n\t\tGeometryCollection(\n\t\t\t[\n\t\t\t\tLine([p, q]),\n\t\t\t\ta\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "CircularSegment",
  "Arc",
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
  "CircularSegment",
  "Arc",
  "svgFragment",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _svgFragment_2(_geometry_1(_self), _options);
  }, ["self", "options"]),
  "{ :self :options |\n\t\tself.geometry.svgFragment(options)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Arc",
  "Arc",
  "CircularSegment",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newCircularSegment_0(), _self);
  }, ["self"]),
  "{ :self |\n\t\tnewCircularSegment().initializeSlots(self)\n\t}",
);
