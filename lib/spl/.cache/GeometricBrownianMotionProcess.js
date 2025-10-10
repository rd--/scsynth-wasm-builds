sl.addType(
  false,
  "GeometricBrownianMotionProcess",
  "GeometricBrownianMotionProcess",
  ["Object"],
  ["mu", "sigma", "x0"],
);

sl.copyTraitMethodsToType(
  "Object",
  "GeometricBrownianMotionProcess",
);

sl.addMethodToExistingType(
  "GeometricBrownianMotionProcess",
  "GeometricBrownianMotionProcess",
  "randomFunction",
  ["self", "r", "t", "n"],
  sl.annotateFunction(function (_self, _r, _t, _n) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _r, _t, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a_1 = sl.annotateFunction(function (_y) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _y";
        throw new Error(errorMessage);
      } /* Statements */
      return _asterisk_2(_mu_1(_self), _y);
    }, ["y"]);
    let _b_1 = sl.annotateFunction(function (_y) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _y";
        throw new Error(errorMessage);
      } /* Statements */
      return _asterisk_2(_sigma_1(_self), _y);
    }, ["y"]);
    let _c_1 = sl.annotateFunction(function (_y) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _y";
        throw new Error(errorMessage);
      } /* Statements */
      return _asterisk_2(_solidus_2(_square_1(_sigma_1(_self)), 2), _y);
    }, ["y"]);
    /* Statements */
    return _TemporalData_1(_exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _transpose_1(
          _milsteinMethod_6(_r, _a_1, _b_1, _c_1, _t, _x0_1(_self)),
        );
      }, []),
      _n,
    ));
  }, ["self", "r", "t", "n"]),
  "{ :self :r :t :n |\n\t\tlet a = { :y | self.mu * y };\n\t\tlet b = { :y | self.sigma * y };\n\t\tlet c = { :y | (self.sigma.square / 2) * y };\n\t\tTemporalData(\n\t\t\t{\n\t\t\t\tr.milsteinMethod(a:/1, b:/1, c:/1, t, self.x0).transpose\n\t\t\t} ! n\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "GeometricBrownianMotionProcess",
  "GeometricBrownianMotionProcess",
  ["mu", "sigma", "x0"],
  sl.annotateFunction(function (_mu, _sigma, _x0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _mu, _sigma, _x0";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(
      _newGeometricBrownianMotionProcess_0(),
      _mu,
      _sigma,
      _x0,
    );
  }, ["mu", "sigma", "x0"]),
  "{ :mu :sigma :x0 |\n\t\tnewGeometricBrownianMotionProcess().initializeSlots(mu, sigma, x0)\n\t}",
);
