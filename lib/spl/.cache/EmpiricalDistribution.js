sl.addType(
  false,
  "EmpiricalDistribution",
  "EmpiricalDistribution",
  ["Object", "Equatable", "ProbabilityDistribution"],
  ["contents", "k"],
);

sl.copyTraitMethodsToType(
  "Object",
  "EmpiricalDistribution",
);

sl.copyTraitMethodsToType(
  "Equatable",
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
  "{ :self |\n\t\tlet k = self.k;\n\t\tlet a = self.contents.sortedElements;\n\t\tlet n = a.size;\n\t\t{ :x |\n\t\t\tlet i = 1;\n\t\t\tlet z = 0;\n\t\t\t{\n\t\t\t\ti <= n & {\n\t\t\t\t\ta[i].key <= x\n\t\t\t\t}\n\t\t\t}.whileTrue {\n\t\t\t\tz := z + a[i].value;\n\t\t\t\ti := i + 1\n\t\t\t};\n\t\t\tz / k\n\t\t}\n\t}",
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
                  return _exclamationMarkEqualsSign_2(_i, 0);
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
  "{ :self |\n\t\tlet max = self.max;\n\t\tlet min = self.min;\n\t\tlet f:/1 = self.cdf;\n\t\t{ :p |\n\t\t\t(p = 0).if {\n\t\t\t\tmin\n\t\t\t} {\n\t\t\t\t(p = 1).if {\n\t\t\t\t\tmax\n\t\t\t\t} {\n\t\t\t\t\tlet high = 2;\n\t\t\t\t\tlet low = 0 - high;\n\t\t\t\t\tlet i = 16;\n\t\t\t\t\t{\n\t\t\t\t\t\tf(low) > p\n\t\t\t\t\t}.whileTrue {\n\t\t\t\t\t\tlow := low + low\n\t\t\t\t\t};\n\t\t\t\t\t{\n\t\t\t\t\t\tf(high) < p\n\t\t\t\t\t}.whileTrue {\n\t\t\t\t\t\thigh := high + high\n\t\t\t\t\t};\n\t\t\t\t\t{\n\t\t\t\t\t\ti != 0\n\t\t\t\t\t}.whileTrue {\n\t\t\t\t\t\tlet mid = (high + low) / 2;\n\t\t\t\t\t\t(f(mid) >= p).if {\n\t\t\t\t\t\t\thigh := mid\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\tlow := mid\n\t\t\t\t\t\t};\n\t\t\t\t\t\ti := i - 1\n\t\t\t\t\t};\n\t\t\t\t\t(high + low) / 2\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.contents.max\n\t}",
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
  "{ :self |\n\t\tself.contents.min\n\t}",
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
  "{ :self :r :shape |\n\t\tself.contents.randomChoice(r, shape)\n\t}",
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
      _asIdentityMultiset_1(_d),
      _size_1(_d),
    );
  }, ["d"]),
  "{ :d |\n\t\tnewEmpiricalDistribution().initializeSlots(d.asIdentityMultiset, d.size)\n\t}",
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
    let _b = _IdentityMultiset_1(_self);
    /* Statements */
    return _initializeSlots_3(_newEmpiricalDistribution_0(), _b, _sum_1(_b));
  }, ["self"]),
  "{ :self |\n\t\tlet b = IdentityMultiset(self);\n\t\tnewEmpiricalDistribution().initializeSlots(\n\t\t\tb,\n\t\t\tb.sum\n\t\t)\n\t}",
);
