sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "HyperbolicFunctions",
  "arcCosh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    if (_self >= 1) {
      return Math.acosh(_self);
    }
    /* Statements */
    return _arcCosh_1(_Complex_2(_self, 0));
  }, ["self"]),
  "{ :self | <primitive: if(_self >= 1) {\n\t\t\treturn Math.acosh(_self);\n\t\t}>\narcCosh(Complex(self, 0)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "HyperbolicFunctions",
  "arcCoth",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _arcTanh_1(_solidus_2(1, _self));
  }, ["self"]),
  "{ :self | arcTanh((/(1, self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "HyperbolicFunctions",
  "arcCsch",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _arcSinh_1(_solidus_2(1, _self));
  }, ["self"]),
  "{ :self | arcSinh((/(1, self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "HyperbolicFunctions",
  "arcSech",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _arcCosh_1(_solidus_2(1, _self));
  }, ["self"]),
  "{ :self | arcCosh((/(1, self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "HyperbolicFunctions",
  "arcSinh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.asinh(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.asinh(_self)>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "HyperbolicFunctions",
  "arcTanh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.atanh(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.atanh(_self)>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "HyperbolicFunctions",
  "cosh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.cosh(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.cosh(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "HyperbolicFunctions",
  "coth",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_cosh_1(_self), _sinh_1(_self));
  }, ["self"]),
  "{ :self | /(cosh(self), sinh(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "HyperbolicFunctions",
  "hyperbolaCurve",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x, _y) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _x, _y";
        throw new Error(errorMessage);
      } /* Statements */
      return _hyphenMinus_2(
        _hyphenMinus_2(
          _solidus_2(_square_1(_x), _square_1(_a)),
          _solidus_2(_square_1(_y), _square_1(_b)),
        ),
        1,
      );
    }, ["x", "y"]);
  }, ["a", "b"]),
  "{ :a :b | { :x :y | -(-((/(square(x), square(a))), (/(square(y), square(b)))), 1) } }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "HyperbolicFunctions",
  "sinh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.sinh(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.sinh(_self)>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "HyperbolicFunctions",
  "tanh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.tanh(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.tanh(_self)>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "HyperbolicFunctions",
  "arcCosh",
  ["z"],
  sl.annotateFunction(function (_z) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _log_1(
      _plusSign_2(_z, _sqrt_1(_hyphenMinus_2(_circumflexAccent_2(_z, 2), 1))),
    );
  }, ["z"]),
  "{ :z | log((+(z, sqrt((-((^(z, 2)), 1)))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "HyperbolicFunctions",
  "arcCoth",
  ["z"],
  sl.annotateFunction(function (_z) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _arcTanh_1(_solidus_2(1, _z));
  }, ["z"]),
  "{ :z | arcTanh((/(1, z))) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "HyperbolicFunctions",
  "arcCsch",
  ["z"],
  sl.annotateFunction(function (_z) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _arcSinh_1(_solidus_2(1, _z));
  }, ["z"]),
  "{ :z | arcSinh((/(1, z))) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "HyperbolicFunctions",
  "arcSech",
  ["z"],
  sl.annotateFunction(function (_z) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isZero_1(_z),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return Infinity;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _ifTrue_2(
          _isZero_1(_imaginary_1(_z)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _imaginary_2(_z, _smallFloatMin_1(_system));
          }, []),
        );
        return _arcCosh_1(_solidus_2(1, _z));
      }, []),
    );
  }, ["z"]),
  "{ :z | if(isZero(z), { Infinity }, { ifTrue(isZero(imaginary(z)), { imaginary(z, smallFloatMin(system)) }); arcCosh((/(1, z))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "HyperbolicFunctions",
  "arcSinh",
  ["z"],
  sl.annotateFunction(function (_z) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _log_1(
      _plusSign_2(_z, _sqrt_1(_plusSign_2(_circumflexAccent_2(_z, 2), 1))),
    );
  }, ["z"]),
  "{ :z | log((+(z, sqrt((+((^(z, 2)), 1)))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "HyperbolicFunctions",
  "arcTanh",
  ["z"],
  sl.annotateFunction(function (_z) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _hyphenMinus_2(_log_1(_plusSign_2(_z, 1)), _log_1(_hyphenMinus_2(1, _z))),
      2,
    );
  }, ["z"]),
  "{ :z | /((-(log((+(z, 1))), log((-(1, z))))), 2) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "HyperbolicFunctions",
  "coth",
  ["z"],
  sl.annotateFunction(function (_z) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _z";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _exp_1(_asterisk_2(2, _z));
    /* Statements */
    return _solidus_2(_plusSign_2(_n, 1), _hyphenMinus_2(_n, 1));
  }, ["z"]),
  "{ :z | let n = exp((*(2, z))); /((+(n, 1)), (-(n, 1))) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "HyperbolicFunctions",
  "cosh",
  ["z"],
  sl.annotateFunction(function (_z) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _z";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _imaginary_1(_z);
    let _r = _real_1(_z);
    /* Statements */
    return _Complex_2(
      _asterisk_2(_cosh_1(_r), _cos_1(_i)),
      _asterisk_2(_sinh_1(_r), _sin_1(_i)),
    );
  }, ["z"]),
  "{ :z | let i = imaginary(z); let r = real(z); Complex(*(cosh(r), cos(i)), *(sinh(r), sin(i))) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "HyperbolicFunctions",
  "sinh",
  ["z"],
  sl.annotateFunction(function (_z) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _z";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _imaginary_1(_z);
    let _r = _real_1(_z);
    /* Statements */
    return _Complex_2(
      _asterisk_2(_sinh_1(_r), _cos_1(_i)),
      _asterisk_2(_cosh_1(_r), _sin_1(_i)),
    );
  }, ["z"]),
  "{ :z | let i = imaginary(z); let r = real(z); Complex(*(sinh(r), cos(i)), *(cosh(r), sin(i))) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "HyperbolicFunctions",
  "tanh",
  ["z"],
  sl.annotateFunction(function (_z) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _negate_1(_i_1(_tan_1(_i_1(_z))));
  }, ["z"]),
  "{ :z | negate(i(tan(i(z)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "HyperbolicFunctions",
  "csch",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(1, _sinh_1(_self));
  }, ["self"]),
  "{ :self | /(1, sinh(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "HyperbolicFunctions",
  "csch",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(1, _sinh_1(_self));
  }, ["self"]),
  "{ :self | /(1, sinh(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "HyperbolicFunctions",
  "sech",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(1, _cosh_1(_self));
  }, ["self"]),
  "{ :self | /(1, cosh(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "HyperbolicFunctions",
  "sech",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(1, _cosh_1(_self));
  }, ["self"]),
  "{ :self | /(1, cosh(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "HyperbolicFunctions",
  "gudermannian",
  ["z"],
  sl.annotateFunction(function (_z) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _arcTan_1(_sinh_1(_z));
  }, ["z"]),
  "{ :z | arcTan(sinh(z)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "HyperbolicFunctions",
  "inverseGudermannian",
  ["z"],
  sl.annotateFunction(function (_z) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _log_1(_tan_1(_plusSign_2(_asterisk_2(_z, 0.5), _pi_1(0.25))));
  }, ["z"]),
  "{ :z | log(tan((+((*(z, 0.5)), pi(0.25))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "HyperbolicFunctions",
  "hyperbolicArcCosine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _arcCosh_1(_self);
  }, ["self"]),
  "{ :self | arcCosh(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "HyperbolicFunctions",
  "hyperbolicArcCosine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _arcCosh_1(_self);
  }, ["self"]),
  "{ :self | arcCosh(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "HyperbolicFunctions",
  "hyperbolicArcSine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _arcSinh_1(_self);
  }, ["self"]),
  "{ :self | arcSinh(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "HyperbolicFunctions",
  "hyperbolicArcSine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _arcSinh_1(_self);
  }, ["self"]),
  "{ :self | arcSinh(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "HyperbolicFunctions",
  "hyperbolicCosine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cosh_1(_self);
  }, ["self"]),
  "{ :self | cosh(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "HyperbolicFunctions",
  "hyperbolicCosine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cosh_1(_self);
  }, ["self"]),
  "{ :self | cosh(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "HyperbolicFunctions",
  "hyperbolicCotangent",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _coth_1(_self);
  }, ["self"]),
  "{ :self | coth(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "HyperbolicFunctions",
  "hyperbolicCotangent",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _coth_1(_self);
  }, ["self"]),
  "{ :self | coth(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "HyperbolicFunctions",
  "hyperbolicSecant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sech_1(_self);
  }, ["self"]),
  "{ :self | sech(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "HyperbolicFunctions",
  "hyperbolicSecant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sech_1(_self);
  }, ["self"]),
  "{ :self | sech(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "HyperbolicFunctions",
  "hyperbolicSine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sinh_1(_self);
  }, ["self"]),
  "{ :self | sinh(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "HyperbolicFunctions",
  "hyperbolicSine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sinh_1(_self);
  }, ["self"]),
  "{ :self | sinh(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "HyperbolicFunctions",
  "hyperbolicTangent",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _tanh_1(_self);
  }, ["self"]),
  "{ :self | tanh(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "HyperbolicFunctions",
  "hyperbolicTangent",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _tanh_1(_self);
  }, ["self"]),
  "{ :self | tanh(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "HyperbolicFunctions",
  "arcCosh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _arcCosh_1);
  }, ["self"]),
  "{ :self | collect(self,arcCosh:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "HyperbolicFunctions",
  "arcCoth",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _arcCoth_1);
  }, ["self"]),
  "{ :self | collect(self,arcCoth:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "HyperbolicFunctions",
  "arcCsch",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _arcCsch_1);
  }, ["self"]),
  "{ :self | collect(self,arcCsch:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "HyperbolicFunctions",
  "arcSech",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _arcSech_1);
  }, ["self"]),
  "{ :self | collect(self,arcSech:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "HyperbolicFunctions",
  "arcSinh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _arcSinh_1);
  }, ["self"]),
  "{ :self | collect(self,arcSinh:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "HyperbolicFunctions",
  "cosh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _cosh_1);
  }, ["self"]),
  "{ :self | collect(self,cosh:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "HyperbolicFunctions",
  "coth",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _coth_1);
  }, ["self"]),
  "{ :self | collect(self,coth:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "HyperbolicFunctions",
  "sech",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _sech_1);
  }, ["self"]),
  "{ :self | collect(self,sech:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "HyperbolicFunctions",
  "sinh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _sinh_1);
  }, ["self"]),
  "{ :self | collect(self,sinh:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "HyperbolicFunctions",
  "tanh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _tanh_1);
  }, ["self"]),
  "{ :self | collect(self,tanh:/1) }",
);
