sl.addType(
  false,
  "LaggedFibonacci",
  "LaggedFibonacci",
  ["Object", "Equatable", "Iterator", "RandomNumberGenerator", "Stream"],
  ["parameters", "seed", "state"],
);

sl.copyTraitMethodsToType(
  "Object",
  "LaggedFibonacci",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "LaggedFibonacci",
);

sl.copyTraitMethodsToType(
  "Iterator",
  "LaggedFibonacci",
);

sl.copyTraitMethodsToType(
  "RandomNumberGenerator",
  "LaggedFibonacci",
);

sl.copyTraitMethodsToType(
  "Stream",
  "LaggedFibonacci",
);

sl.addMethodToExistingType(
  "LaggedFibonacci",
  "LaggedFibonacci",
  "initialize",
  ["self", "parameters", "seed"],
  sl.annotateFunction(function (_self, _parameters, _seed) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _parameters, _seed";
      throw new Error(errorMessage);
    } /* Statements */
    _parameters_2(_self, _parameters);
    _seed_2(_self, _seed);
    _reset_1(_self);
    return _self;
  }, ["self", "parameters", "seed"]),
  "{ :self :parameters :seed |\n\t\tself.parameters := parameters;\n\t\tself.seed := seed;\n\t\tself.reset;\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "LaggedFibonacci",
  "LaggedFibonacci",
  "modulus",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_parameters_1(_self), 3);
  }, ["self"]),
  "{ :self |\n\t\tself.parameters.at(3)\n\t}",
);

sl.addMethodToExistingType(
  "LaggedFibonacci",
  "LaggedFibonacci",
  "nextRandomFloat",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asFloat_1(_nextRandomFraction_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.nextRandomFraction.asFloat\n\t}",
);

sl.addMethodToExistingType(
  "LaggedFibonacci",
  "LaggedFibonacci",
  "nextRandomFraction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let __SplVar1 = _assertIsOfSize_2(_state_1(_self), 3);
    let _j = _at_2(__SplVar1, 1);
    let _k = _at_2(__SplVar1, 2);
    let _x = _at_2(__SplVar1, 3);
    let __SplVar2 = _assertIsOfSize_2(_parameters_1(_self), 3);
    let _s = _at_2(__SplVar2, 1);
    let _r = _at_2(__SplVar2, 2);
    let _m = _at_2(__SplVar2, 3);
    let _z = _percentSign_2(_plusSign_2(_at_2(_x, _k), _at_2(_x, _j)), _m);
    _atPut_3(_x, _k, _z);
    _j = _hyphenMinus_2(_j, 1);
    _k = _hyphenMinus_2(_k, 1);
    _if_3(
      _lessThanSign_2(_j, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _j = _r;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _lessThanSign_2(_k, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _k = _r;
          }, []),
        );
      }, []),
    );
    _state_2(_self, [_j, _k, _x]);
    return _solidus_2(_z, _m);
  }, ["self"]),
  "{ :self |\n\t\tlet [j, k, x] = self.state;\n\t\tlet [s, r, m] = self.parameters;\n\t\tlet z = x[k] + x[j] % m;\n\t\tx[k] := z;\n\t\tj := j - 1;\n\t\tk := k - 1;\n\t\t(j < 1).if {\n\t\t\tj := r\n\t\t} {\n\t\t\t(k < 1).ifTrue {\n\t\t\t\tk := r\n\t\t\t}\n\t\t};\n\t\tself.state := [j, k, x];\n\t\tz / m\n\t}",
);

sl.addMethodToExistingType(
  "LaggedFibonacci",
  "LaggedFibonacci",
  "reset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let __SplVar3 = _assertIsOfSize_2(_parameters_1(_self), 3);
    let _s = _at_2(__SplVar3, 1);
    let _r = _at_2(__SplVar3, 2);
    let _m = _at_2(__SplVar3, 3);
    let _k = _seed_1(_self);
    let _x = _List_1(_r);
    _toDo_3(
      1,
      _r,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        _k = _percentSign_2(
          _plusSign_2(
            _asterisk_2(_k, 6364136223846793005n),
            1442695040888963407n,
          ),
          _m,
        );
        return _atPut_3(_x, _i, _k);
      }, ["i"]),
    );
    return _state_2(_self, [_s, _r, _x]);
  }, ["self"]),
  "{ :self |\n\t\tlet [s, r, m] = self.parameters;\n\t\tlet k = self.seed;\n\t\tlet x = List(r);\n\t\t1.toDo(r) { :i |\n\t\t\tk := k * 6364136223846793005L + 1442695040888963407L % m;\n\t\t\tx[i] := k\n\t\t};\n\t\tself.state := [s, r, x]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "LaggedFibonacci",
  "LaggedFibonacci",
  ["s", "r", "k", "m"],
  sl.annotateFunction(function (_s, _r, _k, _m) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _s, _r, _k, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_3(
      _newLaggedFibonacci_0(),
      [_s, _r, _LargeInteger_1(_m)],
      _k,
    );
  }, ["s", "r", "k", "m"]),
  "{ :s :r :k :m |\n\t\tnewLaggedFibonacci().initialize([s, r, LargeInteger(m)], k)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "LaggedFibonacci",
  "LaggedFibonacci",
  ["s", "r", "k"],
  sl.annotateFunction(function (_s, _r, _k) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _s, _r, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _LaggedFibonacci_4(_s, _r, _k, _circumflexAccent_2(2, 64));
  }, ["s", "r", "k"]),
  "{ :s :r :k |\n\t\tLaggedFibonacci(s, r, k, 2 ^ 64)\n\t}",
);
