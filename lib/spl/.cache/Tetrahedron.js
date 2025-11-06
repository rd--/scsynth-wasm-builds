sl.addType(
  false,
  "Tetrahedron",
  "Tetrahedron",
  ["Object", "Equatable"],
  ["vertexCoordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Tetrahedron",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Tetrahedron",
);

sl.addMethodToExistingType(
  "Tetrahedron",
  "Tetrahedron",
  "asPerspectiveDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asPerspectiveDrawing_1(_asPolyhedron_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asPolyhedron.asPerspectiveDrawing\n\t}",
);

sl.addMethodToExistingType(
  "Tetrahedron",
  "Tetrahedron",
  "asPolyhedron",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Polyhedron_2(_vertexCoordinates_1(_self), [[2, 3, 4], [3, 2, 1], [
      4,
      1,
      2,
    ], [1, 4, 3]]);
  }, ["self"]),
  "{ :self |\n\t\tPolyhedron(\n\t\t\tself.vertexCoordinates,\n\t\t\t[\n\t\t\t\t2 3 4;\n\t\t\t\t3 2 1;\n\t\t\t\t4 1 2;\n\t\t\t\t1 4 3\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Tetrahedron",
  "Tetrahedron",
  "circumcenter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _center_1(_circumsphere_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.circumsphere.center\n\t}",
);

sl.addMethodToExistingType(
  "Tetrahedron",
  "Tetrahedron",
  "circumradius",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _radius_1(_circumsphere_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.circumsphere.radius\n\t}",
);

sl.addMethodToExistingType(
  "Tetrahedron",
  "Tetrahedron",
  "circumsphere",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = _vertexCoordinates_1(_self);
    let _a = _determinant_1(_arrayPad_3(_v, [[0, 0], [0, 1]], 1));
    let _vSquareSum = _collect_2(
      _square_1(_v),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _enclose_1(_sum_1(_each));
      }, ["each"]),
    );
    let _c = _join_2([_vSquareSum, _v], 2);
    let _d = _arrayPad_3(_c, [[0, 0], [0, 1]], 1);
    let _f_2 = sl.annotateFunction(function (_m, _i) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _m, _i";
        throw new Error(errorMessage);
      } /* Statements */
      return _asterisk_2(
        _determinant_1(
          _submatrix_3(
            _d,
            _asList_1(_nonemptyRange_3(1, 4, 1)),
            _without_2(
              _asList_1(_nonemptyRange_3(1, 5, 1)),
              _plusSign_2(_i, 1),
            ),
          ),
        ),
        _m,
      );
    }, ["m", "i"]);
    let _dx = _f_2(1, 1);
    let _dy = _f_2(-1, 2);
    let _dz = _f_2(1, 3);
    let _r = _solidus_2(
      _sqrt_1(
        _hyphenMinus_2(
          _plusSign_2(
            _plusSign_2(_square_1(_dx), _square_1(_dy)),
            _square_1(_dz),
          ),
          _asterisk_2(_asterisk_2(4, _a), _determinant_1(_c)),
        ),
      ),
      _asterisk_2(2, _abs_1(_a)),
    );
    /* Statements */
    return _Sphere_2(_solidus_2([_dx, _dy, _dz], _asterisk_2(_a, 2)), _r);
  }, ["self"]),
  "{ :self |\n\t\tlet v = self.vertexCoordinates;\n\t\tlet a = v.arrayPad([0 0; 0 1], 1).determinant;\n\t\tlet vSquareSum = v.square.collect { :each |\n\t\t\teach.sum.enclose\n\t\t};\n\t\tlet c = [vSquareSum, v].join(2);\n\t\tlet d = c.arrayPad([0 0; 0 1], 1);\n\t\tlet f = { :m :i |\n\t\t\td.submatrix(\n\t\t\t\t[1 .. 4],\n\t\t\t\t[1 .. 5].without(i + 1)\n\t\t\t).determinant * m\n\t\t};\n\t\tlet dx = f(1, 1);\n\t\tlet dy = f(-1, 2);\n\t\tlet dz = f(1, 3);\n\t\tlet r = (dx.square + dy.square + dz.square - (4 * a * c.determinant)).sqrt / (2 * a.abs);\n\t\tSphere(\n\t\t\t[dx dy dz] / (a * 2),\n\t\t\tr\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Tetrahedron",
  "Tetrahedron",
  "fromBarycentricCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = _vertexCoordinates_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_lambda) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _lambda";
        throw new Error(errorMessage);
      } /* Statements */
      return _sum_1(_asterisk_2(_v, _lambda));
    }, ["lambda"]);
  }, ["self"]),
  "{ :self |\n\t\tlet v = self.vertexCoordinates;\n\t\t{ :lambda |\n\t\t\t(v * lambda).sum\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Tetrahedron",
  "Tetrahedron",
  "project",
  ["self", "projection"],
  sl.annotateFunction(function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      throw new Error(errorMessage);
    } /* Statements */
    return _project_2(_asPolyhedron_1(_self), _projection);
  }, ["self", "projection"]),
  "{ :self :projection |\n\t\tself.asPolyhedron.project(projection)\n\t}",
);

sl.addMethodToExistingType(
  "Tetrahedron",
  "Tetrahedron",
  "translate",
  ["self", "v"],
  sl.annotateFunction(function (_self, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _v";
      throw new Error(errorMessage);
    } /* Statements */
    return _Tetrahedron_1(
      _collect_2(
        _vertexCoordinates_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSign_2(_each, _v);
        }, ["each"]),
      ),
    );
  }, ["self", "v"]),
  "{ :self :v |\n\t\tTetrahedron(\n\t\t\tself.vertexCoordinates.collect { :each |\n\t\t\t\teach + v\n\t\t\t}\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Tetrahedron",
  "Tetrahedron",
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
  "Tetrahedron",
  "Tetrahedron",
  "toBarycentricCoordinates",
  ["self", "c"],
  sl.annotateFunction(function (_self, _c) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_2(_toBarycentricCoordinates_1(_self), _c);
  }, ["self", "c"]),
  "{ :self :c |\n\t\tself.toBarycentricCoordinates.value(c)\n\t}",
);

sl.addMethodToExistingType(
  "Tetrahedron",
  "Tetrahedron",
  "toBarycentricCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 4);
    let _a = _at_2(__SplVar1, 1);
    let _b = _at_2(__SplVar1, 2);
    let _c = _at_2(__SplVar1, 3);
    let _d = _at_2(__SplVar1, 4);
    /* Statements */
    return _toBarycentricCoordinates_4(_a, _b, _c, _d);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c, d] = self.vertexCoordinates;\n\t\ttoBarycentricCoordinates(a, b, c, d)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Tetrahedron",
  "Tetrahedron",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SplVar2, 1);
    let _n = _at_2(__SplVar2, 2);
    /* Statements */
    return _if_3(
      _ampersand_2(
        _equalsSign_2(_m, 4),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_n, 3);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_2(_newTetrahedron_0(), _self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Tetrahedron: invalid matrix");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [m, n] = self.shape;\n\t\t(m = 4 & { n = 3 }).if {\n\t\t\tnewTetrahedron().initializeSlots(self)\n\t\t} {\n\t\t\tself.error('Tetrahedron: invalid matrix')\n\t\t}\n\t}",
);
