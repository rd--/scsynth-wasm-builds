sl.addType(
  false,
  "DirichletDistribution",
  "DirichletDistribution",
  ["Object"],
  ["alpha"],
);

sl.copyTraitMethodsToType(
  "Object",
  "DirichletDistribution",
);

sl.addMethodToExistingType(
  "DirichletDistribution",
  "DirichletDistribution",
  "betaDistributions",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _alpha = _alpha_1(_self);
    let _k = _hyphenMinus_2(_size_1(_alpha), 1);
    let _r = _List_2(_k, _last_1(_alpha));
    /* Statements */
    _downToDo_3(
      _hyphenMinus_2(_k, 1),
      1,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _r,
          _i,
          _plusSign_2(
            _at_2(_r, _plusSign_2(_i, 1)),
            _at_2(_alpha, _plusSign_2(_i, 1)),
          ),
        );
      }, ["i"]),
    );
    return _collect_2(
      _upOrDownTo_2(1, _k),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _BetaDistribution_2(_at_2(_alpha, _i), _at_2(_r, _i));
      }, ["i"]),
    );
  }, ["self"]),
  "{ :self | let alpha = alpha(self); let k = -(size(alpha), 1); let r = List(k, last(alpha)); downToDo((-(k, 1)), 1, { :i | atPut(r, i, +(at(r, +(i, 1)), at(alpha, +(i, 1)))) }); collect(upOrDownTo(1, k), { :i | BetaDistribution(at(alpha, i), at(r, i)) }) }",
);

sl.addMethodToExistingType(
  "DirichletDistribution",
  "DirichletDistribution",
  "pdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _alpha = _alpha_1(_self);
    let _k = _size_1(_alpha);
    let _b = _solidus_2(_product_1(_gamma_1(_alpha)), _gamma_1(_sum_1(_alpha)));
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _greaterThanSign_2(_sum_1(_x), 1),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 0;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(
            _asterisk_2(
              _product_1(
                _collect_2(
                  _upOrDownTo_2(1, _hyphenMinus_2(_k, 1)),
                  sl.annotateFunction(function (_i) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _i";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _circumflexAccent_2(
                      _at_2(_x, _i),
                      _hyphenMinus_2(_at_2(_alpha, _i), 1),
                    );
                  }, ["i"]),
                ),
              ),
              _circumflexAccent_2(
                _hyphenMinus_2(1, _sum_1(_x)),
                _hyphenMinus_2(_at_2(_alpha, _k), 1),
              ),
            ),
            _b,
          );
        }, []),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self | let alpha = alpha(self); let k = size(alpha); let b = /(product(gamma(alpha)), gamma(sum(alpha))); { :x | if((>(sum(x), 1)), { 0 }, { /(*(product(collect(upOrDownTo(1, -(k, 1)), { :i | ^(at(x, i), (-(at(alpha, i), 1))) })), (^((-(1, sum(x))), (-(at(alpha, k), 1))))), b) }) } }",
);

sl.addMethodToExistingType(
  "DirichletDistribution",
  "DirichletDistribution",
  "randomVariate",
  ["self", "r", "shape"],
  sl.annotateFunction(function (_self, _r, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _r, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _b = _betaDistributions_1(_self);
    let _k = _size_1(_b);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _s = _List_2(_k, 0);
        let _z = 1;
        /* Statements */
        _toDo_3(
          1,
          _k,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _x = _randomVariate_3(_at_2(_b, _i), _r, []);
            /* Statements */
            _atPut_3(_s, _i, _asterisk_2(_z, _x));
            return _z = _asterisk_2(_z, _hyphenMinus_2(1, _x));
          }, ["i"]),
        );
        _atPut_3(_s, _k, _z);
        return _s;
      }, []),
      _shape,
    );
  }, ["self", "r", "shape"]),
  "{ :self :r :shape | let b = betaDistributions(self); let k = size(b); !({ let s = List(k, 0); let z = 1; toDo(1, k, { :i | let x = randomVariate(at(b, i),r, []); atPut(s, i, *(z, x)); z := *(z, (-(1, x))) }); atPut(s, k, z); s }, shape) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DirichletDistribution",
  "DirichletDistribution",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newDirichletDistribution_0(), _self);
  }, ["self"]),
  "{ :self | initializeSlots(newDirichletDistribution(),self) }",
);
