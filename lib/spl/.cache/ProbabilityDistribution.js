/* {- https://github.com/supercollider/sc3-plugins/blob/main/source/LoopBufUGens/sc/classes/LJP%20Classes/ProbabilityDistributions.sc -} */

sl.extendTraitWithMethod(
  "Number",
  "ProbabilityDistribution",
  "randomFloatEularianBetaDistribution",
  ["x1", "x2", "p1", "p2"],
  function (_x1, _x2, _p1, _p2) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _x1, _x2, _p1, _p2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _p1r = _dividedBy_2(1, _p1);
    let _p2r = _dividedBy_2(1, _p2);
    let _sum = 2;
    let _next = null;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _greaterThan_2(_sum, 1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _next = _raisedTo_2(_randomFloat_1(1), _p1r);
      return _sum = _plus_2(_next, _raisedTo_2(_randomFloat_1(1), _p2r));
    });
    return _plus_2(
      _times_2(_dividedBy_2(_next, _sum), _minus_2(_x2, _x1)),
      _x1,
    );
  },
  "{ :x1 :x2 :p1 :p2 |\n\t\tlet p1r = 1 / p1;\n\t\tlet p2r = 1 / p2;\n\t\tlet sum = 2;\n\t\tlet next = nil;\n\t\t{\n\t\t\tsum > 1\n\t\t}.whileTrue {\n\t\t\tnext := 1.randomFloat ^ p1r;\n\t\t\tsum := next + (1.randomFloat ^ p2r)\n\t\t};\n\t\t((next / sum) * (x2 - x1)) + x1\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ProbabilityDistribution",
  "randomFloatCauchyDistribution",
  ["mean", "spread"],
  function (_mean, _spread) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mean, _spread";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _r = 0.5;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _equals_2(_r, 0.5);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _r = _randomFloat_1(1);
    });
    return _plus_2(_times_2(_spread, _tan_1(_times_2(_r, _pi))), _mean);
  },
  "{ :mean :spread |\n\t\tlet r = 0.5;\n\t\t{\n\t\t\tr = 0.5\n\t\t}.whileTrue {\n\t\t\tr := 1.randomFloat\n\t\t};\n\t\tspread * (r * pi).tan + mean\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ProbabilityDistribution",
  "randomFloatGaussianDistribution",
  ["mean", "deviation"],
  function (_mean, _deviation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mean, _deviation";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plus_2(
      _times_2(
        _times_2(
          _sqrt_1(_times_2(-2, _log_1(_randomFloat_1(1)))),
          _sin_1(_randomFloat_1(_pi_1(2))),
        ),
        _deviation,
      ),
      _mean,
    );
  },
  "{ :mean :deviation |\n\t\t(((-2 * 1.randomFloat.log).sqrt * 2.pi.randomFloat.sin) * deviation) + mean\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ProbabilityDistribution",
  "randomFloatLinearDistribution",
  ["x1", "x2"],
  function (_x1, _x2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x1, _x2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _r1 = _randomFloat_1(1);
    let _r2 = _randomFloat_1(1);
    /* Statements */
    _ifTrue_2(_lessThan_2(_r1, _r2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _r2 = _r1;
    });
    return _plus_2(_times_2(_r2, _minus_2(_x2, _x1)), _x1);
  },
  "{ :x1 :x2 |\n\t\tlet r1 = 1.randomFloat;\n\t\tlet r2 = 1.randomFloat;\n\t\t(r1 < r2).ifTrue {\n\t\t\tr2 := r1\n\t\t};\n\t\tr2 * (x2 - x1) + x1\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ProbabilityDistribution",
  "randomFloatLogisticDistribution",
  ["mean", "spread"],
  function (_mean, _spread) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _mean, _spread";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _u = _randomFloat_1(1);
    /* Statements */
    return _plus_2(
      _times_2(_log_1(_dividedBy_2(_u, _minus_2(1, _u))), _spread),
      _mean,
    );
  },
  "{ :mean :spread |\n\t\tlet u = 1.randomFloat;\n\t\t(u / (1 - u)).log * spread + mean\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ProbabilityDistribution",
  "randomFloatParetoDistribution",
  ["self", "shape"],
  function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _times_2(
      _raisedTo_2(_randomFloat_1(1), _dividedBy_2(-1, _shape)),
      _self,
    );
  },
  "{ :self :shape |\n\t\t(1.randomFloat ^ (-1 / shape)) * self\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ProbabilityDistribution",
  "randomIntegerPoissonDistribution",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _k = 0;
    let _r = _randomFloat_1(1);
    let _t = _exp_1(_negated_1(_self));
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _greaterThan_2(_r, _t);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _k = _plus_2(_k, 1);
      return _r = _times_2(_r, _randomFloat_1(1));
    });
    return _k;
  },
  "{ :self |\n\t\tlet k = 0;\n\t\tlet r = 1.randomFloat;\n\t\tlet t = self.negated.exp;\n\t\t{\n\t\t\tr > t\n\t\t}.whileTrue {\n\t\t\tk := k + 1;\n\t\t\tr := r * 1.randomFloat\n\t\t};\n\t\tk\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ProbabilityDistribution",
  "randomFloatWeibullDistribution",
  ["location", "spread", "shape"],
  function (_location, _spread, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _location, _spread, _shape";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _r = 1;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _equals_2(_r, 1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _r = _randomFloat_1(1);
    });
    return _plus_2(
      _times_2(
        _spread,
        _raisedTo_2(_negated_1(_log_1(_r)), _dividedBy_2(1, _shape)),
      ),
      _location,
    );
  },
  "{ :location :spread :shape |\n\t\tlet r = 1;\n\t\t{\n\t\t\tr = 1\n\t\t}.whileTrue {\n\t\t\tr := 1.randomFloat\n\t\t};\n\t\tspread * (r.log.negated ^ (1 / shape)) + location\n\t}",
);
