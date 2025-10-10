sl.addType(
  false,
  "Arc",
  "Arc",
  ["Object"],
  ["center", "radii", "angles"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Arc",
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
    return _coordinateBoundingBox_1(
      _discretize_3(
        _hyphenMinusHyphenMinus_2(0, 1),
        50,
        _parametricEquation_1(_self),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\t/*[\n\t\t\tself.center - self.radii,\n\t\t\tself.center + self.radii\n\t\t]*/\n\t\t(0 -- 1).discretize(\n\t\t\t50,\n\t\t\tself.parametricEquation\n\t\t).coordinateBoundingBox\n\t}",
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
  "parametricEquation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_1 = _rescaleBlock_2([0, 1], _angles_1(_self));
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
  "{ :self |\n\t\tlet f:/1 = rescaleBlock([0, 1], self.angles);\n\t\tlet g:/1 = ellipseCurve(self.center, self.radii, 0);\n\t\t{ :theta |\n\t\t\tg(f(theta))\n\t\t}\n\t}",
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
    let __SplVar1 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _rx = _at_2(__SplVar1, 1);
    let _ry = _at_2(__SplVar1, 2);
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
  "sectorArea",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _asterisk_2(_square_1(_radius_1(_self)), _theta_1(_self)),
      0.5,
    );
  }, ["self"]),
  "{ :self |\n\t\tself.radius.square * self.theta * 0.5\n\t}",
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
    } /* Statements */
    return _asterisk_2(
      _asterisk_2(
        _square_1(_radius_1(_self)),
        _hyphenMinus_2(_theta_1(_self), _sin_1(_theta_1(_self))),
      ),
      0.5,
    );
  }, ["self"]),
  "{ :self |\n\t\tself.radius.square * (self.theta - self.theta.sin) * 0.5\n\t}",
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
    let __SplVar2 = _assertIsOfSize_2(_center_1(_self), 2);
    let _cx = _at_2(__SplVar2, 1);
    let _cy = _at_2(__SplVar2, 2);
    let __SplVar3 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _rx = _at_2(__SplVar3, 1);
    let _ry = _at_2(__SplVar3, 2);
    let __SplVar4 = _assertIsOfSize_2(_angles_1(_self), 2);
    let _startAngle = _at_2(__SplVar4, 1);
    let _endAngle = _at_2(__SplVar4, 2);
    let __SplVar5 = _assertIsOfSize_2(
      _plusSign_2([_cx, _cy], [
        _asterisk_2(_rx, _cos_1(_startAngle)),
        _asterisk_2(_ry, _sin_1(_startAngle)),
      ]),
      2,
    );
    let _x1 = _at_2(__SplVar5, 1);
    let _y1 = _at_2(__SplVar5, 2);
    let __SplVar6 = _assertIsOfSize_2(
      _plusSign_2([_cx, _cy], [
        _asterisk_2(_rx, _cos_1(_endAngle)),
        _asterisk_2(_ry, _sin_1(_endAngle)),
      ]),
      2,
    );
    let _x2 = _at_2(__SplVar6, 1);
    let _y2 = _at_2(__SplVar6, 2);
    let _largeArcFlag = _greaterThanSign_2(
      _percentSign_2(_hyphenMinus_2(_endAngle, _startAngle), _pi_1(2)),
      _pi_1(1),
    );
    /* Statements */
    return _format_2('<path d="M %,% %" />', [
      _printStringToFixed_2(_x1, _precision),
      _printStringToFixed_2(_y1, _precision),
      _svgArcTo_8(_rx, _ry, 0, _largeArcFlag, true, _x2, _y2, _precision),
    ]);
  }, ["self", "options"]),
  "{ :self :options |\n\t\tlet precision = options['precision'];\n\t\tlet [cx, cy] = self.center;\n\t\tlet [rx, ry] = self.radii;\n\t\tlet [startAngle, endAngle] = self.angles;\n\t\tlet [x1, y1] = [cx, cy] + [rx * startAngle.cos, ry * startAngle.sin];\n\t\tlet [x2, y2] = [cx, cy] + [rx * endAngle.cos, ry * endAngle.sin];\n\t\tlet largeArcFlag = ((endAngle - startAngle) % 2.pi) > 1.pi;\n\t\t'<path d=\"M %,% %\" />'.format(\n\t\t\t[\n\t\t\t\tx1.printStringToFixed(precision),\n\t\t\t\ty1.printStringToFixed(precision),\n\t\t\t\tsvgArcTo(rx, ry, 0, largeArcFlag, true, x2, y2, precision)\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "theta",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar7 = _assertIsOfSize_2(_angles_1(_self), 2);
    let _a = _at_2(__SplVar7, 1);
    let _b = _at_2(__SplVar7, 2);
    /* Statements */
    return _abs_1(_hyphenMinus_2(_b, _a));
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b] = self.angles;\n\t\t(b - a).abs\n\t}",
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
  "poincareDiskArc",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar8 = _assertIsOfSize_2(_self, 2);
    let _theta1 = _at_2(__SplVar8, 1);
    let _theta2 = _at_2(__SplVar8, 2);
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
