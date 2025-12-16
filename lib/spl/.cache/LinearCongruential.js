/*  Requires: RandomNumberGenerator Iterator Stream  */

sl.addType(
  false,
  "LinearCongruential",
  "LinearCongruential",
  ["Object", "Equatable", "Iterator", "RandomNumberGenerator", "Stream"],
  ["parameters", "seed", "state"],
);

sl.copyTraitMethodsToType(
  "Object",
  "LinearCongruential",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "LinearCongruential",
);

sl.copyTraitMethodsToType(
  "Iterator",
  "LinearCongruential",
);

sl.copyTraitMethodsToType(
  "RandomNumberGenerator",
  "LinearCongruential",
);

sl.copyTraitMethodsToType(
  "Stream",
  "LinearCongruential",
);

sl.addMethodToExistingType(
  "LinearCongruential",
  "LinearCongruential",
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
  "LinearCongruential",
  "LinearCongruential",
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
  "LinearCongruential",
  "LinearCongruential",
  "nextState",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_parameters_1(_self), 3);
    let _a = _at_2(__SplVar1, 1);
    let _c = _at_2(__SplVar1, 2);
    let _m = _at_2(__SplVar1, 3);
    /* Statements */
    return _state_2(
      _self,
      _reverseSolidusReverseSolidus_2(
        _plusSign_2(_asterisk_2(_state_1(_self), _a), _c),
        _m,
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [a, c, m] = self.parameters;\n\t\tself.state := (self.state * a + c) \\\\ m\n\t}",
);

sl.addMethodToExistingType(
  "LinearCongruential",
  "LinearCongruential",
  "nextRandomFloat",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_nextState_1(_self), _modulus_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.nextState / self.modulus\n\t}",
);

sl.addMethodToExistingType(
  "LinearCongruential",
  "LinearCongruential",
  "reset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _state_2(_self, _seed_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.state := self.seed\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "LinearCongruential",
  "LinearCongruential",
  ["parameters", "seed"],
  sl.annotateFunction(function (_parameters, _seed) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _parameters, _seed";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_3(_newLinearCongruential_0(), _parameters, _seed);
  }, ["parameters", "seed"]),
  "{ :parameters :seed |\n\t\tnewLinearCongruential().initialize(parameters, seed)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "LinearCongruential",
  "numericalRecipesLinearCongruential",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _LinearCongruential_2([3877, 29573, 139968], _self);
  }, ["self"]),
  "{ :self |\n\t\tLinearCongruential([3877, 29573, 139968], self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "LinearCongruential",
  "lehmerGenerator",
  ["p", "s0"],
  sl.annotateFunction(function (_p, _s0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p, _s0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2(_p, 2);
    let _a = _at_2(__SplVar2, 1);
    let _m = _at_2(__SplVar2, 2);
    /* Statements */
    return _if_3(
      _isCoprime_2(_s0, _m),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _s = _s0;
        /* Statements */
        return _BlockStream_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _x = _s;
            /* Statements */
            _s = _percentSign_2(_asterisk_2(_a, _x), _m);
            return _solidus_2(_x, _m);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _s = _s0;
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_p, "lehmerGenerator: s not coprime with m");
      }, []),
    );
  }, ["p", "s0"]),
  "{ :p :s0 |\n\t\tlet [a, m] = p;\n\t\ts0.isCoprime(m).if {\n\t\t\tlet s = s0;\n\t\t\tBlockStream {\n\t\t\t\tlet x = s;\n\t\t\t\ts := (a * x) % m;\n\t\t\t\tx / m\n\t\t\t} {\n\t\t\t\ts := s0\n\t\t\t}\n\t\t} {\n\t\t\tp.error('lehmerGenerator: s not coprime with m')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "LinearCongruential",
  "lehmerGenerator",
  ["p", "s", "n"],
  sl.annotateFunction(function (_p, _s, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _p, _s, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _next_2(_lehmerGenerator_2(_p, _s), _n);
  }, ["p", "s", "n"]),
  "{ :p :s :n |\n\t\tlehmerGenerator(p, s).next(n)\n\t}",
);
