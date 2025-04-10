sl.addType(
  false,
  "Superellipse",
  "Superellipse",
  ["Object"],
  ["center", "a", "b", "n"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Superellipse",
);

sl.addMethodToExistingType(
  "Superellipse",
  "Superellipse",
  "area",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _asterisk_2(_asterisk_2(4, _a_1(_self)), _b_1(_self)),
      _solidus_2(
        _circumflexAccent_2(
          _gamma_1(_plusSign_2(1, _solidus_2(1, _n_1(_self)))),
          2,
        ),
        _gamma_1(_plusSign_2(1, _solidus_2(2, _n_1(_self)))),
      ),
    );
  }, ["self"]),
  "{ :self | *(*(*(4, a(self)), b(self)), (/((^(gamma((+(1, (/(1, n(self)))))), 2)), gamma((+(1, (/(2, n(self))))))))) }",
);

sl.addMethodToExistingType(
  "Superellipse",
  "Superellipse",
  "atAll",
  ["self", "tList"],
  sl.annotateFunction(function (_self, _tList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _tList";
      throw new Error(errorMessage);
    } /* Statements */
    return (_each_1(_plusSign_2)(
      _collect_2(
        _tList,
        _superellipseFunction_3(_a_1(_self), _b_1(_self), _n_1(_self)),
      ),
      _center_1(_self),
    ));
  }, ["self", "tList"]),
  "{ :self :tList | (each(+) . (collect(tList,superellipseFunction(a(self), b(self), n(self))), center(self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Superellipse",
  "Superellipse",
  ["center", "a", "b", "n"],
  sl.annotateFunction(function (_center, _a, _b, _n) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _center, _a, _b, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_5(_newSuperellipse_0(), _center, _a, _b, _n);
  }, ["center", "a", "b", "n"]),
  "{ :center :a :b :n | initializeSlots(newSuperellipse(),center, a, b, n) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Superellipse",
  "superellipseFunction",
  ["a", "b", "n"],
  sl.annotateFunction(function (_a, _b, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _m = _solidus_2(2, _n);
      let _c = _cos_1(_t);
      let _s = _sin_1(_t);
      let _x = _asterisk_2(
        _asterisk_2(_circumflexAccent_2(_abs_1(_c), _m), _a),
        _sign_1(_c),
      );
      let _y = _asterisk_2(
        _asterisk_2(_circumflexAccent_2(_abs_1(_s), _m), _b),
        _sign_1(_s),
      );
      /* Statements */
      return [_x, _y];
    }, ["t"]);
  }, ["a", "b", "n"]),
  "{ :a :b :n | { :t | let m = /(2, n); let c = cos(t); let s = sin(t); let x = *(*((^(abs(c), m)), a), sign(c)); let y = *(*((^(abs(s), m)), b), sign(s)); [x, y] } }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Superellipse",
  "superformulaFunction",
  ["a", "b", "m", "n1", "n2", "n3"],
  sl.annotateFunction(function (_a, _b, _m, _n1, _n2, _n3) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage = "Arity: expected 6, _a, _b, _m, _n1, _n2, _n3";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_u) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _u";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _p = _circumflexAccent_2(
        _abs_1(_solidus_2(_cos_1(_solidus_2(_asterisk_2(_m, _u), 4)), _a)),
        _n2,
      );
      let _q = _circumflexAccent_2(
        _abs_1(_solidus_2(_sin_1(_solidus_2(_asterisk_2(_m, _u), 4)), _b)),
        _n3,
      );
      let _r = _circumflexAccent_2(_plusSign_2(_p, _q), _solidus_2(-1, _n1));
      let _x = _asterisk_2(_r, _cos_1(_u));
      let _y = _asterisk_2(_r, _sin_1(_u));
      /* Statements */
      return [_x, _y];
    }, ["u"]);
  }, ["a", "b", "m", "n1", "n2", "n3"]),
  "{ :a :b :m :n1 :n2 :n3 | { :u | let p = ^(abs((/(cos((/(*(m, u), 4))), a))), n2); let q = ^(abs((/(sin((/(*(m, u), 4))), b))), n3); let r = ^((+(p, q)), (/(-1, n1))); let x = *(r, cos(u)); let y = *(r, sin(u)); [x, y] } }",
);
