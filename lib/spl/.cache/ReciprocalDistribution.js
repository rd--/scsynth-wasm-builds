sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "ReciprocalDistribution",
  "reciprocalDistribution",
  ["self", "a", "b"],
  sl.annotateFunction(function (_self, _a, _b) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    _a = _log_1(_a);
    _b = _log_1(_b);
    return _exp_1(
      _plusSign_2(
        _asterisk_2(_nextRandomFloat_1(_self), _hyphenMinus_2(_b, _a)),
        _a,
      ),
    );
  }, ["self", "a", "b"]),
  "{ :self :a :b | a := log(a); b := log(b); exp((+(*(nextRandomFloat(self), (-(b, a))), a))) }",
);

sl.addType(
  false,
  "ReciprocalDistribution",
  "ReciprocalDistribution",
  ["Object"],
  ["a", "b"],
);

sl.copyTraitMethodsToType(
  "Object",
  "ReciprocalDistribution",
);

sl.addMethodToExistingType(
  "ReciprocalDistribution",
  "ReciprocalDistribution",
  "cdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _a_1(_self);
    let _b = _b_1(_self);
    let _z = _log_1(_solidus_2(_b, _a));
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _lessThanSign_2(_x, _a),
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
          return _if_3(
            _greaterThanSign_2(_x, _b),
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
              return _solidus_2(_log_1(_solidus_2(_x, _a)), _z);
            }, []),
          );
        }, []),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self | let a = a(self); let b = b(self); let z = log((/(b, a))); { :x | if((<(x, a)), { 0 }, { if((>(x, b)), { 1 }, { /(log((/(x, a))), z) }) }) } }",
);

sl.addMethodToExistingType(
  "ReciprocalDistribution",
  "ReciprocalDistribution",
  "pdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _a_1(_self);
    let _b = _b_1(_self);
    let _z = _log_1(_solidus_2(_b, _a));
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _betweenAnd_3(_x, _a, _b),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(1, _asterisk_2(_x, _z));
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 0;
        }, []),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self | let a = a(self); let b = b(self); let z = log((/(b, a))); { :x | if(betweenAnd(x,a, b), { /(1, (*(x, z))) }, { 0 }) } }",
);

sl.addMethodToExistingType(
  "ReciprocalDistribution",
  "ReciprocalDistribution",
  "randomVariate",
  ["self", "r", "shape"],
  sl.annotateFunction(function (_self, _r, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _r, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _log_1(_a_1(_self));
    let _b = _log_1(_b_1(_self));
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _exp_1(
          _plusSign_2(
            _asterisk_2(_nextRandomFloat_1(_r), _hyphenMinus_2(_b, _a)),
            _a,
          ),
        );
      }, []),
      _shape,
    );
  }, ["self", "r", "shape"]),
  "{ :self :r :shape | let a = log(a(self)); let b = log(b(self)); !({ exp((+(*(nextRandomFloat(r), (-(b, a))), a))) }, shape) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ReciprocalDistribution",
  "ReciprocalDistribution",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newReciprocalDistribution_0(), _a, _b);
  }, ["a", "b"]),
  "{ :a :b | initializeSlots(newReciprocalDistribution(),a, b) }",
);
