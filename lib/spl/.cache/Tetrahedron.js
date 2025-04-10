sl.addType(
  false,
  "Tetrahedron",
  "Tetrahedron",
  ["Object"],
  ["vertexCoordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
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
  "{ :self | asPerspectiveDrawing(asPolyhedron(self)) }",
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
  "{ :self | Polyhedron(vertexCoordinates(self), [[2, 3, 4], [3, 2, 1], [4, 1, 2], [1, 4, 3]]) }",
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
  "{ :self | center(circumsphere(self)) }",
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
  "{ :self | radius(circumsphere(self)) }",
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
    let _vSquaredSum = _collect_2(
      _squared_1(_v),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _enclose_1(_sum_1(_each));
      }, ["each"]),
    );
    let _c = _join_2([_vSquaredSum, _v], 2);
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
            _asList_1(_upOrDownTo_2(1, 4)),
            _without_2(_asList_1(_upOrDownTo_2(1, 5)), _plusSign_2(_i, 1)),
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
            _plusSign_2(_squared_1(_dx), _squared_1(_dy)),
            _squared_1(_dz),
          ),
          _asterisk_2(_asterisk_2(4, _a), _determinant_1(_c)),
        ),
      ),
      _asterisk_2(2, _abs_1(_a)),
    );
    /* Statements */
    return _Sphere_2(_solidus_2([_dx, _dy, _dz], _asterisk_2(_a, 2)), _r);
  }, ["self"]),
  "{ :self | let v = vertexCoordinates(self); let a = determinant(arrayPad(v,[[0, 0], [0, 1]], 1)); let vSquaredSum = collect(squared(v), { :each | enclose(sum(each)) }); let c = join([vSquaredSum, v],2); let d = arrayPad(c,[[0, 0], [0, 1]], 1); let f = { :m :i | *(determinant(submatrix(d,asList(upOrDownTo(1, 4)), without(asList(upOrDownTo(1, 5)),+(i, 1)))), m) }; let dx = f(1, 1); let dy = f(-1, 2); let dz = f(1, 3); let r = /(sqrt((-(+(+(squared(dx), squared(dy)), squared(dz)), (*(*(4, a), determinant(c)))))), (*(2, abs(a)))); Sphere(/([dx, dy, dz], (*(a, 2))), r) }",
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
  "{ :self | let v = vertexCoordinates(self); { :lambda | sum((*(v, lambda))) } }",
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
  "{ :self :projection | project(asPolyhedron(self),projection) }",
);

sl.addMethodToExistingType(
  "Tetrahedron",
  "Tetrahedron",
  "translated",
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
  "{ :self :v | Tetrahedron(collect(vertexCoordinates(self), { :each | +(each, v) })) }",
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
  "{ :self | storeStringAsInitializeSlots(self) }",
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
  "{ :self :c | value(toBarycentricCoordinates(self),c) }",
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
    let __SPL164 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 4);
    let _a = _at_2(__SPL164, 1);
    let _b = _at_2(__SPL164, 2);
    let _c = _at_2(__SPL164, 3);
    let _d = _at_2(__SPL164, 4);
    /* Statements */
    return _toBarycentricCoordinates_4(_a, _b, _c, _d);
  }, ["self"]),
  "{ :self | let __SPL164 = assertIsOfSize(vertexCoordinates(self), 4); let a = at(__SPL164, 1); let b = at(__SPL164, 2); let c = at(__SPL164, 3); let d = at(__SPL164, 4); toBarycentricCoordinates(a, b, c, d) }",
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
    let __SPL165 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL165, 1);
    let _n = _at_2(__SPL165, 2);
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
  "{ :self | let __SPL165 = assertIsOfSize(shape(self), 2); let m = at(__SPL165, 1); let n = at(__SPL165, 2); if((&(=(m, 4), { =(n, 3) })), { initializeSlots(newTetrahedron(),self) }, { error(self,'Tetrahedron: invalid matrix') }) }",
);
