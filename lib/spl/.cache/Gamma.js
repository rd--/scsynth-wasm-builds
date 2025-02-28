sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Gamma",
  "beta",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isCollection_1(_aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_aNumber, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _beta_2(_self, _each);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _exp_1(_logBeta_2(_self, _aNumber));
    });
  },
  "{ :self :aNumber | if(isCollection(aNumber), { collect(aNumber, { :each | beta(self,each) }) }, { exp(logBeta(self,aNumber)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Gamma",
  "gammaLanczosFormulaLeadingFactor",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _z = _plusSign_2(_self, 5.5);
    /* Statements */
    return _hyphenMinus_2(_asterisk_2(_log_1(_z), _plusSign_2(_self, 0.5)), _z);
  },
  "{ :self | let z = +(self, 5.5); -(*(log(z), (+(self, 0.5))), z) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Gamma",
  "gammaLanczosFormulaSeries",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
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
          throw new Error(errorMessage);
        } /* Statements */
        _term = _plusSign_2(_term, 1);
        return _plusSign_2(_solidus_2(_each, _term), _sum);
      },
    );
  },
  "{ :self | let term = self; let coefficients = [76.18009172947146, -86.50532032941677, 24.01409824083091, -1.231739572450155, 0.001208650973866179, -0.000005395239384953]; injectInto(coefficients, 1.000000000190015, { :sum :each | term := +(term, 1); +(/(each, term), sum) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Gamma",
  "gammaLanczosFormula",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _sqrtTwoPi = _sqrt_1(_pi_1(2));
    let _leadingFactor = _gammaLanczosFormulaLeadingFactor_1(_self);
    let _series = _gammaLanczosFormulaSeries_1(_self);
    /* Statements */
    return _solidus_2(
      _asterisk_2(_asterisk_2(_exp_1(_leadingFactor), _series), _sqrtTwoPi),
      _self,
    );
  },
  "{ :self | let sqrtTwoPi = sqrt(pi(2)); let leadingFactor = gammaLanczosFormulaLeadingFactor(self); let series = gammaLanczosFormulaSeries(self); /(*((*(exp(leadingFactor), series)), sqrtTwoPi), self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Gamma",
  "gamma",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersand_2(_isInteger_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return (_greaterThanSignEqualsSign_2(_self, 1));
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _factorial_1(_hyphenMinus_2(_self, 1));
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_lessThanSign_2(_self, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(
            _pi_1(1),
            _asterisk_2(
              _sin_1(_pi_1(_self)),
              _gamma_1(_hyphenMinus_2(1, _self)),
            ),
          );
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(
            _gammaLanczosFormula_1(_plusSign_2(_self, 1)),
            _self,
          );
        });
      },
    );
  },
  "{ :self | if((&(isInteger(self), { (>=(self, 1)) })), { factorial((-(self, 1))) }, { if((<(self, 0)), { /(pi(1), (*(sin(pi(self)), gamma((-(1, self)))))) }, { /(gammaLanczosFormula((+(self, 1))), self) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Gamma",
  "logBeta",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _plusSign_2(_logGamma_1(_self), _logGamma_1(_aNumber)),
      _logGamma_1(_plusSign_2(_self, _aNumber)),
    );
  },
  "{ :self :aNumber | -(+(logGamma(self), logGamma(aNumber)), logGamma((+(self, aNumber)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Gamma",
  "logGammaLanczosFormula",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _sqrtTwoPi = _sqrt_1(_pi_1(2));
    let _leadingFactor = _gammaLanczosFormulaLeadingFactor_1(_self);
    let _series = _gammaLanczosFormulaSeries_1(_self);
    /* Statements */
    return _plusSign_2(
      _leadingFactor,
      _log_1(_solidus_2(_asterisk_2(_series, _sqrtTwoPi), _self)),
    );
  },
  "{ :self | let sqrtTwoPi = sqrt(pi(2)); let leadingFactor = gammaLanczosFormulaLeadingFactor(self); let series = gammaLanczosFormulaSeries(self); +(leadingFactor, log((/(*(series, sqrtTwoPi), self)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Gamma",
  "logGamma",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_greaterThanSign_2(_self, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _logGammaLanczosFormula_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_greaterThanSign_2(_self, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _hyphenMinus_2(
          _logGammaLanczosFormula_1(_plusSign_2(_self, 1)),
          _log_1(_self),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("@Number>>logGamma: non-positive");
      });
    });
  },
  "{ :self | if((>(self, 1)), { logGammaLanczosFormula(self) }, { if((>(self, 0)), { -(logGammaLanczosFormula((+(self, 1))), log(self)) }, { error('@Number>>logGamma: non-positive') }) }) }",
);
