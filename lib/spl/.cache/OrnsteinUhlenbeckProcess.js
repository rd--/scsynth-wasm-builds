sl.addType(
  false,
  "OrnsteinUhlenbeckProcess",
  "OrnsteinUhlenbeckProcess",
  ["Object"],
  ["mu", "sigma", "theta", "x0"],
);

sl.copyTraitMethodsToType(
  "Object",
  "OrnsteinUhlenbeckProcess",
);

sl.addMethodToExistingType(
  "OrnsteinUhlenbeckProcess",
  "OrnsteinUhlenbeckProcess",
  "randomFunction",
  ["self", "r", "t", "n"],
  sl.annotateFunction(function (_self, _r, _t, _n) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _r, _t, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a_2 = sl.annotateFunction(function (_y, _t) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _y, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _asterisk_2(_theta_1(_self), _hyphenMinus_2(_mu_1(_self), _y));
    }, ["y", "t"]);
    let _b_2 = sl.annotateFunction(function (_y, _t) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _y, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _sigma_1(_self);
    }, ["y", "t"]);
    /* Statements */
    return _TemporalData_1(_exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _x0 = _x0_1(_self);
        /* Statements */
        _ifNil_2(
          _x0,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _x0 = _normalDistribution_3(
              _r,
              _mu_1(_self),
              _solidus_2(
                _sigma_1(_self),
                _sqrt_1(_asterisk_2(2, _theta_1(_self))),
              ),
            );
          }, []),
        );
        return _transpose_1(_eulerMaruyamaMethod_5(_r, _a_2, _b_2, _t, _x0));
      }, []),
      _n,
    ));
  }, ["self", "r", "t", "n"]),
  "{ :self :r :t :n |\n\t\tlet a = { :y :t |\n\t\t\tself.theta * (self.mu - y)\n\t\t};\n\t\tlet b = { :y :t |\n\t\t\tself.sigma\n\t\t};\n\t\tTemporalData(\n\t\t\t{\n\t\t\t\tlet x0 = self.x0;\n\t\t\t\tx0.ifNil {\n\t\t\t\t\tx0 := r.normalDistribution(self.mu, self.sigma / (2 * self.theta).sqrt)\n\t\t\t\t};\n\t\t\t\tr.eulerMaruyamaMethod(a:/2, b:/2, t, x0).transpose\n\t\t\t} ! n\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "OrnsteinUhlenbeckProcess",
  "OrnsteinUhlenbeckProcess",
  ["mu", "sigma", "theta"],
  sl.annotateFunction(function (_mu, _sigma, _theta) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _mu, _sigma, _theta";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_5(
      _newOrnsteinUhlenbeckProcess_0(),
      _mu,
      _sigma,
      _theta,
      null,
    );
  }, ["mu", "sigma", "theta"]),
  "{ :mu :sigma :theta |\n\t\tnewOrnsteinUhlenbeckProcess().initializeSlots(mu, sigma, theta, nil)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "OrnsteinUhlenbeckProcess",
  "OrnsteinUhlenbeckProcess",
  ["mu", "sigma", "theta", "x0"],
  sl.annotateFunction(function (_mu, _sigma, _theta, _x0) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _mu, _sigma, _theta, _x0";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_5(
      _newOrnsteinUhlenbeckProcess_0(),
      _mu,
      _sigma,
      _theta,
      _x0,
    );
  }, ["mu", "sigma", "theta", "x0"]),
  "{ :mu :sigma :theta :x0 |\n\t\tnewOrnsteinUhlenbeckProcess().initializeSlots(mu, sigma, theta, x0)\n\t}",
);
