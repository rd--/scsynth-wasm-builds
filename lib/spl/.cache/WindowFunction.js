/*  Requires: Interval  */

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "bartlettWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_greaterThanSign_2(_abs_1(_self), 0.5), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
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
        return _hyphenMinus_2(1, _asterisk_2(2, _self));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(1, _asterisk_2(2, _self));
      });
    });
  },
  "{ :self | if((>(abs(self), 0.5)), { 0 }, { if((>(self, 0)), { -(1, (*(2, self))) }, { +(1, (*(2, self))) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "bartlettHannWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_greaterThanSign_2(_abs_1(_self), 0.5), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _a0 = 0.62;
      let _a1 = 0.48;
      let _a2 = 0.38;
      /* Statements */
      return _plusSign_2(
        _hyphenMinus_2(_a0, _asterisk_2(_a1, _abs_1(_self))),
        _asterisk_2(_a2, _cos_1(_asterisk_2(_pi_1(2), _self))),
      );
    });
  },
  "{ :self | if((>(abs(self), 0.5)), { 0 }, { let a0 = 0.62; let a1 = 0.48; let a2 = 0.38; +(-(a0, (*(a1, abs(self)))), (*(a2, cos((*(pi(2), self)))))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "blackmanWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_greaterThanSign_2(_abs_1(_self), 0.5), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _asterisk_2(
        _solidus_2(1, 50),
        _plusSign_2(
          _plusSign_2(
            _asterisk_2(25, _cos_1(_asterisk_2(_pi_1(2), _self))),
            _asterisk_2(4, _cos_1(_asterisk_2(_pi_1(4), _self))),
          ),
          21,
        ),
      );
    });
  },
  "{ :self | if((>(abs(self), 0.5)), { 0 }, { *((/(1, 50)), (+(+(*(25, cos((*(pi(2), self)))), (*(4, cos((*(pi(4), self)))))), 21))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "blackmanHarrisWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_greaterThanSign_2(_abs_1(_self), 0.5), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(
        _plusSign_2(
          _plusSign_2(
            _plusSign_2(
              _asterisk_2(48829, _cos_1(_asterisk_2(_pi_1(2), _self))),
              _asterisk_2(14128, _cos_1(_asterisk_2(_pi_1(4), _self))),
            ),
            _asterisk_2(1168, _cos_1(_asterisk_2(_pi_1(6), _self))),
          ),
          35875,
        ),
        100000,
      );
    });
  },
  "{ :self | if((>(abs(self), 0.5)), { 0 }, { /((+(+(+((*(48829, cos((*(pi(2), self))))), (*(14128, cos((*(pi(4), self)))))), (*(1168, cos((*(pi(6), self)))))), 35875)), 100000) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "cosineWindow",
  ["self", "alpha"],
  function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_greaterThanSign_2(_abs_1(_self), 0.5), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _circumflexAccent_2(_cos_1(_pi_1(_self)), _alpha);
    });
  },
  "{ :self :alpha | if((>(abs(self), 0.5)), { 0 }, { ^(cos(pi(self)), alpha) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "cosineWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cosineWindow_2(_self, 1);
  },
  "{ :self | cosineWindow(self,1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "dirichletWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_greaterThanSign_2(_abs_1(_self), 0.5), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 1;
    });
  },
  "{ :self | if((>(abs(self), 0.5)), { 0 }, { 1 }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "gaussianWindow",
  ["self", "sigma"],
  function (_self, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sigma";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_greaterThanSign_2(_abs_1(_self), 0.5), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _exp_1(
        _negated_1(
          _solidus_2(_squared_1(_self), _asterisk_2(2, _squared_1(_sigma))),
        ),
      );
    });
  },
  "{ :self :sigma | if((>(abs(self), 0.5)), { 0 }, { exp(negated((/(squared(self), (*(2, squared(sigma))))))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "gaussianWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _gaussianWindow_2(_self, _solidus_2(3, 10));
  },
  "{ :self | gaussianWindow(self,/(3, 10)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "hammingWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_greaterThanSign_2(_abs_1(_self), 0.5), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSign_2(
        _asterisk_2(_solidus_2(21, 46), _cos_1(_asterisk_2(_pi_1(2), _self))),
        _solidus_2(25, 46),
      );
    });
  },
  "{ :self | if((>(abs(self), 0.5)), { 0 }, { +(*((/(21, 46)), cos((*(pi(2), self)))), (/(25, 46))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "hannWindow",
  ["self", "alpha"],
  function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_greaterThanSign_2(_abs_1(_self), 0.5), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _c = _cos_1(_asterisk_2(_pi_1(2), _self));
      /* Statements */
      return _plusSign_2(_hyphenMinus_2(_alpha, _asterisk_2(_alpha, _c)), _c);
    });
  },
  "{ :self :alpha | if((>(abs(self), 0.5)), { 0 }, { let c = cos((*(pi(2), self))); +(-(alpha, (*(alpha, c))), c) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "hannWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hannWindow_2(_self, 0.5);
  },
  "{ :self | hannWindow(self,0.5) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "kaiserWindow",
  ["x", "a"],
  function (_x, _a) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_abs_1(_x), 0.5), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(
        _besselI_2(
          0,
          _asterisk_2(
            _asterisk_2(
              _sqrt_1(_hyphenMinus_2(1, _asterisk_2(2, _x))),
              _sqrt_1(_plusSign_2(1, _asterisk_2(2, _x))),
            ),
            _a,
          ),
        ),
        _besselI_2(0, _a),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    });
  },
  "{ :x :a | if((<=(abs(x), 0.5)), { /(besselI(0,*(*(sqrt((-(1, (*(2, x))))), sqrt((+(1, (*(2, x)))))), a)), besselI(0,a)) }, { 0 }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "kaiserWindow",
  ["x"],
  function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _kaiserWindow_2(_x, 3);
  },
  "{ :x | kaiserWindow(x,3) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "welchWindow",
  ["self", "alpha"],
  function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_greaterThanSign_2(_abs_1(_self), 0.5), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(
        _hyphenMinus_2(_squared_1(_alpha), _asterisk_2(4, _squared_1(_self))),
        _squared_1(_alpha),
      );
    });
  },
  "{ :self :alpha | if((>(abs(self), 0.5)), { 0 }, { /((-(squared(alpha), (*(4, squared(self))))), squared(alpha)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "welchWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _welchWindow_2(_self, 1);
  },
  "{ :self | welchWindow(self,1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "bartlettWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bartlettWindow_1);
  },
  "{ :self | collect(self,bartlettWindow:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "blackmanWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _blackmanWindow_1);
  },
  "{ :self | collect(self,blackmanWindow:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "blackmanHarrisWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _blackmanHarrisWindow_1);
  },
  "{ :self | collect(self,blackmanHarrisWindow:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "cosineWindow",
  ["self", "alpha"],
  function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _cosineWindow_2(_each, _alpha);
    });
  },
  "{ :self :alpha | collect(self, { :each | cosineWindow(each,alpha) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "dirichletWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _dirichletWindow_1);
  },
  "{ :self | collect(self,dirichletWindow:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "gaussianWindow",
  ["self", "sigma"],
  function (_self, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sigma";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _gaussianWindow_2(_each, _sigma);
    });
  },
  "{ :self :sigma | collect(self, { :each | gaussianWindow(each,sigma) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "gaussianWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _gaussianWindow_1);
  },
  "{ :self | collect(self,gaussianWindow:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "hammingWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _hammingWindow_1);
  },
  "{ :self | collect(self,hammingWindow:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "hannWindow",
  ["self", "alpha"],
  function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _hannWindow_2(_each, _alpha);
    });
  },
  "{ :self :alpha | collect(self, { :each | hannWindow(each,alpha) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "hannWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hannWindow_2(_self, 0.5);
  },
  "{ :self | hannWindow(self,0.5) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "welchWindow",
  ["self", "alpha"],
  function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _welchWindow_2(_each, _alpha);
    });
  },
  "{ :self :alpha | collect(self, { :each | welchWindow(each,alpha) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "welchWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _welchWindow_1);
  },
  "{ :self | collect(self,welchWindow:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "WindowFunction",
  "hammingWindowTable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _discretize_3(_Interval_2(-0.5, 0.5), _self, _hammingWindow_1);
  },
  "{ :self | discretize(Interval(-0.5, 0.5),self, hammingWindow:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "WindowFunction",
  "hannWindowTable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _discretize_3(_Interval_2(-0.5, 0.5), _self, _hannWindow_1);
  },
  "{ :self | discretize(Interval(-0.5, 0.5),self, hannWindow:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "WindowFunction",
  "kaiserWindowTable",
  ["self", "alpha"],
  function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _discretize_3(_Interval_2(-0.5, 0.5), _self, function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _kaiserWindow_2(_x, _alpha);
    });
  },
  "{ :self :alpha | discretize(Interval(-0.5, 0.5), self, { :x | kaiserWindow(x,alpha) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "WindowFunction",
  "welchWindowTable",
  ["self", "alpha"],
  function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _discretize_3(_Interval_2(-0.5, 0.5), _self, function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _welchWindow_2(_x, _alpha);
    });
  },
  "{ :self :alpha | discretize(Interval(-0.5, 0.5), self, { :x | welchWindow(x,alpha) }) }",
);
