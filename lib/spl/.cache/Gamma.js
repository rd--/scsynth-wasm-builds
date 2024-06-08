sl.extendTraitWithMethod(
  "Number",
  "Gamma",
  "beta",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isCollection_1(_aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _collect_2(_aNumber, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _beta_2(_self, _each);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _exp_1(_logBeta_2(_self, _aNumber));
    });
  },
  "{ :self :aNumber |\n\t\taNumber.isCollection.if {\n\t\t\taNumber.collect { :each |\n\t\t\t\tself.beta(each)\n\t\t\t}\n\t\t} {\n\t\t\tself.logBeta(aNumber).exp\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Gamma",
  "gammaLanczosFormulaLeadingFactor",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _z = _plusSign_2(_self, 5.5);
    /* Statements */
    return _hyphenMinus_2(_asterisk_2(_log_1(_z), _plusSign_2(_self, 0.5)), _z);
  },
  "{ :self |\n\t\tlet z = self + 5.5;\n\t\tz.log * (self + 0.5) - z\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Gamma",
  "gammaLanczosFormulaSeries",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _term = _self;
    let _coefficients = [
      76.18009172947146,
      -86.50532032941677,
      24.01409824083091,
      -1.231739572450155,
      0.001208650973866179,
      -0.000005395239384953,
    ];
    /* Statements */
    return _injectInto_3(
      _coefficients,
      1.000000000190015,
      function (_sum, _each) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _sum, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _term = _plusSign_2(_term, 1);
        return _plusSign_2(_solidus_2(_each, _term), _sum);
      },
    );
  },
  "{ :self |\n\t\tlet term = self;\n\t\tlet coefficients = [\n\t\t\t76.18009172947146,\n\t\t\t-86.50532032941677,\n\t\t\t24.01409824083091,\n\t\t\t-1.231739572450155,\n\t\t\t0.001208650973866179,\n\t\t\t-0.000005395239384953\n\t\t];\n\t\tcoefficients.injectInto(1.000000000190015) { :sum :each |\n\t\t\tterm := term + 1;\n\t\t\teach / term + sum\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Gamma",
  "gammaLanczosFormula",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _sqrtTwoPi = _sqrt_1(_asterisk_2(_pi, 2));
    let _leadingFactor = _gammaLanczosFormulaLeadingFactor_1(_self);
    let _series = _gammaLanczosFormulaSeries_1(_self);
    /* Statements */
    return _solidus_2(
      _asterisk_2(_asterisk_2(_exp_1(_leadingFactor), _series), _sqrtTwoPi),
      _self,
    );
  },
  "{ :self |\n\t\tlet sqrtTwoPi = (pi * 2).sqrt;\n\t\tlet leadingFactor = self.gammaLanczosFormulaLeadingFactor;\n\t\tlet series = self.gammaLanczosFormulaSeries;\n\t\t(leadingFactor.exp * series) * sqrtTwoPi / self\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Gamma",
  "gamma",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _ampersand_2(_isInteger_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return (_greaterThanSignEqualsSign_2(_self, 1));
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _factorial_1(_hyphenMinus_2(_self, 1));
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _if_3(_lessThanSign_2(_self, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _solidus_2(
            _pi,
            _asterisk_2(
              _sin_1(_asterisk_2(_pi, _self)),
              _gamma_1(_hyphenMinus_2(1, _self)),
            ),
          );
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _solidus_2(
            _gammaLanczosFormula_1(_plusSign_2(_self, 1)),
            _self,
          );
        });
      },
    );
  },
  "{ :self |\n\t\t(self.isInteger & {\n\t\t\t(self >= 1)\n\t\t}).if {\n\t\t\t(self - 1).factorial\n\t\t} {\n\t\t\t(self < 0).if {\n\t\t\t\tpi / ((pi * self).sin * (1 - self).gamma)\n\t\t\t} {\n\t\t\t\t(self + 1).gammaLanczosFormula / self\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Gamma",
  "logBeta",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hyphenMinus_2(
      _plusSign_2(_logGamma_1(_self), _logGamma_1(_aNumber)),
      _logGamma_1(_plusSign_2(_self, _aNumber)),
    );
  },
  "{ :self :aNumber |\n\t\tself.logGamma + aNumber.logGamma - (self + aNumber).logGamma\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Gamma",
  "logGammaLanczosFormula",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _sqrtTwoPi = _sqrt_1(_asterisk_2(_pi, 2));
    let _leadingFactor = _gammaLanczosFormulaLeadingFactor_1(_self);
    let _series = _gammaLanczosFormulaSeries_1(_self);
    /* Statements */
    return _plusSign_2(
      _leadingFactor,
      _log_1(_solidus_2(_asterisk_2(_series, _sqrtTwoPi), _self)),
    );
  },
  "{ :self |\n\t\tlet sqrtTwoPi = (pi * 2).sqrt;\n\t\tlet leadingFactor = self.gammaLanczosFormulaLeadingFactor;\n\t\tlet series = self.gammaLanczosFormulaSeries;\n\t\tleadingFactor + (series * sqrtTwoPi / self).log\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Gamma",
  "logGamma",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThanSign_2(_self, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _logGammaLanczosFormula_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_greaterThanSign_2(_self, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _hyphenMinus_2(
          _logGammaLanczosFormula_1(_plusSign_2(_self, 1)),
          _log_1(_self),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _error_1("@Number>>logGamma: non-positive");
      });
    });
  },
  "{ :self |\n\t\t(self > 1).if {\n\t\t\tself.logGammaLanczosFormula\n\t\t} {\n\t\t\t(self > 0).if {\n\t\t\t\t(self + 1).logGammaLanczosFormula - self.log\n\t\t\t} {\n\t\t\t\t'@Number>>logGamma: non-positive'.error\n\t\t\t}\n\t\t}\n\t}",
);
