sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "BipolarCoordinates",
  "fromBipolarCoordinates",
  ["a", "v"],
  sl.annotateFunction(function (_a, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _v";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVector_1(_v),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL1 = _assertIsOfSize_2(_v, 2);
        let _sigma = _at_2(__SPL1, 1);
        let _tau = _at_2(__SPL1, 2);
        let _x = _asterisk_2(
          _a,
          _solidus_2(
            _sinh_1(_tau),
            _hyphenMinus_2(_cosh_1(_tau), _cos_1(_sigma)),
          ),
        );
        let _y = _asterisk_2(
          _a,
          _solidus_2(
            _sin_1(_sigma),
            _hyphenMinus_2(_cosh_1(_tau), _cos_1(_sigma)),
          ),
        );
        /* Statements */
        return [_x, _y];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _v,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _fromBipolarCoordinates_2(_a, _each);
          }, ["each"]),
        );
      }, []),
    );
  }, ["a", "v"]),
  "{ :a :v | if(isVector(v), { let __SPL1 = assertIsOfSize(v, 2); let sigma = at(__SPL1, 1); let tau = at(__SPL1, 2); let x = *(a, (/(sinh(tau), (-(cosh(tau), cos(sigma)))))); let y = *(a, (/(sin(sigma), (-(cosh(tau), cos(sigma)))))); [x, y] }, { collect(v, { :each | fromBipolarCoordinates(a, each) }) }) }",
);
