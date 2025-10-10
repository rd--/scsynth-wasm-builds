sl.addType(
  false,
  "MultinormalDistribution",
  "MultinormalDistribution",
  ["Object"],
  ["mu", "sigma"],
);

sl.copyTraitMethodsToType(
  "Object",
  "MultinormalDistribution",
);

sl.addMethodToExistingType(
  "MultinormalDistribution",
  "MultinormalDistribution",
  "randomVariate",
  ["self", "r", "shape"],
  sl.annotateFunction(function (_self, _r, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _r, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _mu = _mu_1(_self);
    let _sigma = _sigma_1(_self);
    let _k = _size_1(_mu);
    let _n = _NormalDistribution_2(0, 1);
    let _c = _choleskyDecomposition_1(_sigma);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _t = _randomVariate_3(_n, _r, [_k]);
        let _z = _List_2(_k, 0);
        /* Statements */
        _toDo_3(
          1,
          _k,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            _toDo_3(
              1,
              _i,
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(
                  _z,
                  _i,
                  _plusSign_2(
                    _at_2(_z, _i),
                    _asterisk_2(_at_2(_at_2(_c, _i), _j), _at_2(_t, _j)),
                  ),
                );
              }, ["j"]),
            );
            return _atPut_3(_z, _i, _plusSign_2(_at_2(_z, _i), _at_2(_mu, _i)));
          }, ["i"]),
        );
        return _z;
      }, []),
      _shape,
    );
  }, ["self", "r", "shape"]),
  "{ :self :r :shape |\n\t\tlet mu = self.mu;\n\t\tlet sigma = self.sigma;\n\t\tlet k = mu.size;\n\t\tlet n = NormalDistribution(0, 1);\n\t\tlet c = sigma.choleskyDecomposition;\n\t\t{\n\t\t\tlet t = n.randomVariate(r, [k]);\n\t\t\tlet z = List(k, 0);\n\t\t\t1.toDo(k) { :i |\n\t\t\t\t1.toDo(i) { :j |\n\t\t\t\t\tz[i] := z[i] + (c[i][j] * t[j])\n\t\t\t\t};\n\t\t\t\tz[i] := z[i] + mu[i]\n\t\t\t};\n\t\t\tz\n\t\t} ! shape\n\t}",
);

sl.addMethodToExistingType(
  "MultinormalDistribution",
  "MultinormalDistribution",
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

sl.extendTypeOrTraitWithMethod(
  "List",
  "MultinormalDistribution",
  "BinormalDistribution",
  ["mu", "sigma", "rho"],
  sl.annotateFunction(function (_mu, _sigma, _rho) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _mu, _sigma, _rho";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_sigma, 2);
    let _i = _at_2(__SplVar1, 1);
    let _j = _at_2(__SplVar1, 2);
    /* Statements */
    return _MultinormalDistribution_2(_mu, [[
      _asterisk_2(_i, _i),
      _asterisk_2(_asterisk_2(_rho, _i), _j),
    ], [_asterisk_2(_asterisk_2(_rho, _i), _j), _asterisk_2(_j, _j)]]);
  }, ["mu", "sigma", "rho"]),
  "{ :mu :sigma :rho |\n\t\tlet [i, j] = sigma;\n\t\tMultinormalDistribution(\n\t\t\tmu,\n\t\t\t[\n\t\t\t\t[i * i, rho * i * j],\n\t\t\t\t[rho * i * j, j * j]\n\t\t\t]\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MultinormalDistribution",
  "MultinormalDistribution",
  ["mu", "sigma"],
  sl.annotateFunction(function (_mu, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mu, _sigma";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newMultinormalDistribution_0(), _mu, _sigma);
  }, ["mu", "sigma"]),
  "{ :mu :sigma |\n\t\tnewMultinormalDistribution().initializeSlots(mu, sigma)\n\t}",
);
