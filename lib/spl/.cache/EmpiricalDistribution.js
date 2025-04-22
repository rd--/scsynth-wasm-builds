sl.addType(
  false,
  "EmpiricalDistribution",
  "EmpiricalDistribution",
  ["Object", "ProbabilityDistribution"],
  ["contents", "k"],
);

sl.copyTraitMethodsToType(
  "Object",
  "EmpiricalDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "EmpiricalDistribution",
);

sl.addMethodToExistingType(
  "EmpiricalDistribution",
  "EmpiricalDistribution",
  "cdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _k_1(_self);
    let _a = _sortedElements_1(_contents_1(_self));
    let _n = _size_1(_a);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _i = 1;
      let _z = 0;
      /* Statements */
      _whileTrue_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ampersand_2(
            _lessThanSignEqualsSign_2(_i, _n),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _lessThanSignEqualsSign_2(_key_1(_at_2(_a, _i)), _x);
            }, []),
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _z = _plusSign_2(_z, _value_1(_at_2(_a, _i)));
          return _i = _plusSign_2(_i, 1);
        }, []),
      );
      return _solidus_2(_z, _k);
    }, ["x"]);
  }, ["self"]),
  "{ :self | let k = k(self); let a = sortedElements(contents(self)); let n = size(a); { :x | let i = 1; let z = 0; whileTrue({ &(<=(i, n), { <=(key(at(a, i)), x) }) }, { z := +(z, value(at(a, i))); i := +(i, 1) }); /(z, k) } }",
);

sl.addMethodToExistingType(
  "EmpiricalDistribution",
  "EmpiricalDistribution",
  "inverseCdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _max = _max_1(_self);
    let _min = _min_1(_self);
    let _f_1 = _cdf_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_p) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _p";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _equalsSign_2(_p, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _min;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _equalsSign_2(_p, 1),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _max;
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _high = 2;
              let _low = _hyphenMinus_2(0, _high);
              let _i = 16;
              /* Statements */
              _whileTrue_2(
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _greaterThanSign_2(_f_1(_low), _p);
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _low = _plusSign_2(_low, _low);
                }, []),
              );
              _whileTrue_2(
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _lessThanSign_2(_f_1(_high), _p);
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _high = _plusSign_2(_high, _high);
                }, []),
              );
              _whileTrue_2(
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _tildeEqualsSign_2(_i, 0);
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Temporaries */
                  let _mid = _solidus_2(_plusSign_2(_high, _low), 2);
                  /* Statements */
                  _if_3(
                    _greaterThanSignEqualsSign_2(_f_1(_mid), _p),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _high = _mid;
                    }, []),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _low = _mid;
                    }, []),
                  );
                  return _i = _hyphenMinus_2(_i, 1);
                }, []),
              );
              return _solidus_2(_plusSign_2(_high, _low), 2);
            }, []),
          );
        }, []),
      );
    }, ["p"]);
  }, ["self"]),
  "{ :self | let max = max(self); let min = min(self); let f:/1 = cdf(self); { :p | if((=(p, 0)), { min }, { if((=(p, 1)), { max }, { let high = 2; let low = -(0, high); let i = 16; whileTrue({ >(f(low), p) }, { low := +(low, low) }); whileTrue({ <(f(high), p) }, { high := +(high, high) }); whileTrue({ ~=(i, 0) }, { let mid = /((+(high, low)), 2); if((>=(f(mid), p)), { high := mid }, { low := mid }); i := -(i, 1) }); /((+(high, low)), 2) }) }) } }",
);

sl.addMethodToExistingType(
  "EmpiricalDistribution",
  "EmpiricalDistribution",
  "max",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _max_1(_contents_1(_self));
  }, ["self"]),
  "{ :self | max(contents(self)) }",
);

sl.addMethodToExistingType(
  "EmpiricalDistribution",
  "EmpiricalDistribution",
  "min",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _min_1(_contents_1(_self));
  }, ["self"]),
  "{ :self | min(contents(self)) }",
);

sl.addMethodToExistingType(
  "EmpiricalDistribution",
  "EmpiricalDistribution",
  "randomVariate",
  ["self", "r", "shape"],
  sl.annotateFunction(function (_self, _r, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _r, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _randomChoice_3(_contents_1(_self), _r, _shape);
  }, ["self", "r", "shape"]),
  "{ :self :r :shape | randomChoice(contents(self),r, shape) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "EmpiricalDistribution",
  "EmpiricalDistribution",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(
      _newEmpiricalDistribution_0(),
      _asIdentityBag_1(_d),
      _size_1(_d),
    );
  }, ["d"]),
  "{ :d | initializeSlots(newEmpiricalDistribution(),asIdentityBag(d), size(d)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Map",
  "EmpiricalDistribution",
  "EmpiricalDistribution",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _b = _IdentityBag_1(_self);
    /* Statements */
    return _initializeSlots_3(_newEmpiricalDistribution_0(), _b, _sum_1(_b));
  }, ["self"]),
  "{ :self | let b = IdentityBag(self); initializeSlots(newEmpiricalDistribution(),b, sum(b)) }",
);
