sl.addType(
  false,
  "Ellipse",
  "Ellipse",
  ["Object", "Equatable", "Geometry"],
  ["center", "radii"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Ellipse",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Ellipse",
);

sl.copyTraitMethodsToType(
  "Geometry",
  "Ellipse",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
  "area",
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
    return _pi_1(_asterisk_2(_rx, _ry));
  }, ["self"]),
  "{ :self |\n\t\tlet [rx, ry] = self.radii;\n\t\t(rx * ry).pi\n\t}",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
  "axisAlignedBoundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _center_1(_self);
    let __SplVar2 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _a = _at_2(__SplVar2, 1);
    let _b = _at_2(__SplVar2, 2);
    let _u = [_a, 0];
    let _v = [0, _b];
    /* Statements */
    return _ellipseAxisAlignedBoundingBox_3(_c, _u, _v);
  }, ["self"]),
  "{ :self |\n\t\tlet c = self.center;\n\t\tlet [a, b] = self.radii;\n\t\tlet u = [a 0];\n\t\tlet v = [0 b];\n\t\tellipseAxisAlignedBoundingBox(c, u, v)\n\t}",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
  "boundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [
      _hyphenMinus_2(_center_1(_self), _radii_1(_self)),
      _plusSign_2(_center_1(_self), _radii_1(_self)),
    ];
  }, ["self"]),
  "{ :self |\n\t\t[\n\t\t\tself.center - self.radii,\n\t\t\tself.center + self.radii\n\t\t]\n\t}",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
  "coVertex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_vertexCoordinates_1(_self), 2);
  }, ["self"]),
  "{ :self |\n\t\tself.vertexCoordinates.at(2)\n\t}",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
  "eccentricity",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar3 = _assertIsOfSize_2(_majorMinorAxes_1(_self), 2);
    let _a = _at_2(__SplVar3, 1);
    let _b = _at_2(__SplVar3, 2);
    /* Statements */
    return _sqrt_1(_hyphenMinus_2(1, _square_1(_solidus_2(_b, _a))));
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b] = self.majorMinorAxes;\n\t\t(1 - (b / a).square).sqrt\n\t}",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
  "foci",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _center_1(_self);
    let _e = _linearEccentricity_1(_self);
    let _f1 = _plusSign_2(_c, [_e, 0]);
    let _f2 = _hyphenMinus_2(_c, [_e, 0]);
    /* Statements */
    return [_f1, _f2];
  }, ["self"]),
  "{ :self |\n\t\tlet c = self.center;\n\t\tlet e = self.linearEccentricity;\n\t\tlet f1 = c + [e, 0];\n\t\tlet f2 = c - [e, 0];\n\t\t[f1, f2]\n\t}",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
  "implicitEquation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar4 = _assertIsOfSize_2(_center_1(_self), 2);
    let _x0 = _at_2(__SplVar4, 1);
    let _y0 = _at_2(__SplVar4, 2);
    let __SplVar5 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _a = _at_2(__SplVar5, 1);
    let _b = _at_2(__SplVar5, 2);
    /* Statements */
    return sl.annotateFunction(function (_x, _y) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _x, _y";
        throw new Error(errorMessage);
      } /* Statements */
      return _hyphenMinus_2(
        _plusSign_2(
          _solidus_2(_square_1(_hyphenMinus_2(_x, _x0)), _square_1(_a)),
          _solidus_2(_square_1(_hyphenMinus_2(_y, _y0)), _square_1(_b)),
        ),
        1,
      );
    }, ["x", "y"]);
  }, ["self"]),
  "{ :self |\n\t\tlet [x0, y0] = self.center;\n\t\tlet [a, b] = self.radii;\n\t\t{ :x :y |\n\t\t\t((x - x0).square / a.square) + ((y - y0).square / b.square) - 1\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
  "linearEccentricity",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar6 = _assertIsOfSize_2(_majorMinorAxes_1(_self), 2);
    let _a = _at_2(__SplVar6, 1);
    let _b = _at_2(__SplVar6, 2);
    /* Statements */
    return _sqrt_1(_hyphenMinus_2(_square_1(_a), _square_1(_b)));
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b] = self.majorMinorAxes;\n\t\t(a.square - b.square).sqrt\n\t}",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
  "majorMinorAxes",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar7 = _assertIsOfSize_2(_sorted_1(_radii_1(_self)), 2);
    let _b = _at_2(__SplVar7, 1);
    let _a = _at_2(__SplVar7, 2);
    /* Statements */
    return [_a, _b];
  }, ["self"]),
  "{ :self |\n\t\tlet [b, a] = self.radii.sorted;\n\t\t[a, b]\n\t}",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
  "parametricEquation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ellipseCurve_3(_center_1(_self), _radii_1(_self), 0);
  }, ["self"]),
  "{ :self |\n\t\tellipseCurve(self.center, self.radii, 0)\n\t}",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
  "semiLatusRectum",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar8 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _a = _at_2(__SplVar8, 1);
    let _b = _at_2(__SplVar8, 2);
    /* Statements */
    return _solidus_2(_square_1(_b), _a);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b] = self.radii;\n\t\tb.square / a\n\t}",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
  "svgFragment",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _precision = _at_2(_options, "precision");
    let __SplVar9 = _assertIsOfSize_2(_center_1(_self), 2);
    let _cx = _at_2(__SplVar9, 1);
    let _cy = _at_2(__SplVar9, 2);
    let __SplVar10 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _rx = _at_2(__SplVar10, 1);
    let _ry = _at_2(__SplVar10, 2);
    /* Statements */
    return _format_2('<ellipse cx="%" cy="%" rx="%" ry="%" />', [
      _printStringToFixed_2(_cx, _precision),
      _printStringToFixed_2(_cy, _precision),
      _printStringToFixed_2(_rx, _precision),
      _printStringToFixed_2(_ry, _precision),
    ]);
  }, ["self", "options"]),
  '{ :self :options |\n\t\tlet precision = options[\'precision\'];\n\t\tlet [cx, cy] = self.center;\n\t\tlet [rx, ry] = self.radii;\n\t\t\'<ellipse cx="%" cy="%" rx="%" ry="%" />\'.format([\n\t\t\tcx.printStringToFixed(precision),\n\t\t\tcy.printStringToFixed(precision),\n\t\t\trx.printStringToFixed(precision),\n\t\t\try.printStringToFixed(precision)\n\t\t])\n\t}',
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
  "vertex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_vertexCoordinates_1(_self), 1);
  }, ["self"]),
  "{ :self |\n\t\tself.vertexCoordinates.at(1)\n\t}",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
  "vertices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _first_2(_vertexCoordinates_1(_self), 2);
  }, ["self"]),
  "{ :self |\n\t\tself.vertexCoordinates.first(2)\n\t}",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
  "vertexCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar11 = _assertIsOfSize_2(_center_1(_self), 2);
    let _x = _at_2(__SplVar11, 1);
    let _y = _at_2(__SplVar11, 2);
    let __SplVar12 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _a = _at_2(__SplVar12, 1);
    let _b = _at_2(__SplVar12, 2);
    /* Statements */
    return [[_plusSign_2(_x, _a), _y], [_x, _plusSign_2(_y, _b)], [
      _hyphenMinus_2(_x, _a),
      _y,
    ], [_x, _hyphenMinus_2(_y, _b)]];
  }, ["self"]),
  "{ :self |\n\t\tlet [x, y] = self.center;\n\t\tlet [a, b] = self.radii;\n\t\t[\n\t\t\t[x + a, y],\n\t\t\t[x, y + b],\n\t\t\t[x - a, y],\n\t\t\t[x, y - b]\n\t\t]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Ellipse",
  "ellipseAxisAlignedBoundingBox",
  ["c", "u", "v"],
  sl.annotateFunction(function (_c, _u, _v) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _c, _u, _v";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _e = _sqrt_1(_plusSign_2(_dot_2(_u, _u), _dot_2(_v, _v)));
    /* Statements */
    return [_hyphenMinus_2(_c, _e), _plusSign_2(_c, _e)];
  }, ["c", "u", "v"]),
  "{ :c :u :v |\n\t\tlet e = (u.dot(u) + v.dot(v)).sqrt;\n\t\t[c - e, c + e]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Ellipse",
  "Ellipse",
  ["center", "radii"],
  sl.annotateFunction(function (_center, _radii) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _center, _radii";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_rank_1(_center), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _withCollect_3(_center, _radii, _Ellipse_2);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_size_1(_radii), 2),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _initializeSlots_3(_newEllipse_0(), _center, _radii);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_1("Sequence>>Ellipse: invalid radii");
          }, []),
        );
      }, []),
    );
  }, ["center", "radii"]),
  "{ :center :radii |\n\t\t(center.rank > 1).if {\n\t\t\tcenter.withCollect(radii, Ellipse:/2)\n\t\t} {\n\t\t\t(radii.size = 2).if {\n\t\t\t\tnewEllipse().initializeSlots(center, radii)\n\t\t\t} {\n\t\t\t\t'Sequence>>Ellipse: invalid radii'.error\n\t\t\t}\n\t\t}\n\t}",
);
