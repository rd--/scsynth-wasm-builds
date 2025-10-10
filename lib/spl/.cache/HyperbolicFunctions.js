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
  "{ :self |\n\t\t<primitive:\n\t\tif(_self >= 1) {\n\t\t\treturn Math.acosh(_self);\n\t\t}\n\t\t>\n\t\tComplex(self, 0).arcCosh\n\t}",
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
  "{ :self |\n\t\t(1 / self).arcTanh\n\t}",
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
  "{ :self |\n\t\t(1 / self).arcSinh\n\t}",
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
  "{ :self |\n\t\t(1 / self).arcCosh\n\t}",
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
  "{ :self |\n\t\t<primitive: return Math.asinh(_self)>\n\t}",
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
  "{ :self |\n\t\t<primitive: return Math.atanh(_self)>\n\t}",
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
  "{ :self |\n\t\t<primitive: return Math.cosh(_self);>\n\t}",
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
  "{ :self |\n\t\tself.cosh / self.sinh\n\t}",
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
  "{ :a :b |\n\t\t{ :x :y |\n\t\t\t(x.square / a.square) - (y.square / b.square) - 1\n\t\t}\n\t}",
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
  "{ :self |\n\t\t<primitive: return Math.sinh(_self)>\n\t}",
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
  "{ :self |\n\t\t<primitive: return Math.tanh(_self)>\n\t}",
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
  "{ :z |\n\t\t(z + ((z ^ 2) - 1).sqrt).log /* (((z + 1).sqrt * (z - 1).sqrt) + z).log */\n\t}",
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
  "{ :z |\n\t\t(1 / z).arcTanh /* ((z + 1).log - (z - 1).log) / 2 */\n\t}",
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
  "{ :z |\n\t\t(1 / z).arcSinh /* ((1 / z) + ((1 / (z ^ 2)) + 1).sqrt).log */\n\t}",
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
  "{ :z |\n\t\tz.isZero.if {\n\t\t\tInfinity\n\t\t} {\n\t\t\tz.imaginary.isZero.ifTrue {\n\t\t\t\tz.imaginary := system.smallFloatMin\n\t\t\t};\n\t\t\t(1 / z).arcCosh\n\t\t}\n\t}",
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
  "{ :z |\n\t\t(z + ((z ^ 2) + 1).sqrt).log\n\t}",
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
  "{ :z |\n\t\t((z + 1).log - (1 - z).log) / 2\n\t}",
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
  "{ :z |\n\t\tlet n = (2 * z).exp;\n\t\t(n + 1) / (n - 1)\n\t}",
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
  "{ :z |\n\t\tlet i = z.imaginary;\n\t\tlet r = z.real;\n\t\tComplex(\n\t\t\tr.cosh * i.cos,\n\t\t\tr.sinh * i.sin\n\t\t)\n\t}",
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
  "{ :z |\n\t\tlet i = z.imaginary;\n\t\tlet r = z.real;\n\t\tComplex(\n\t\t\tr.sinh * i.cos,\n\t\t\tr.cosh * i.sin\n\t\t)\n\t}",
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
  "{ :z |\n\t\tz.i.tan.i.negate\n\t}",
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
  "{ :self |\n\t\t1 / self.sinh\n\t}",
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
  "{ :self |\n\t\t1 / self.sinh\n\t}",
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
  "{ :self |\n\t\t1 / self.cosh\n\t}",
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
  "{ :self |\n\t\t1 / self.cosh\n\t}",
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
  "{ :z |\n\t\tz.sinh.arcTan\n\t}",
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
  "{ :z |\n\t\t((z * 0.5) + 0.25.pi).tan.log\n\t}",
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
  "{ :self |\n\t\tself.arcCosh\n\t}",
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
  "{ :self |\n\t\tself.arcCosh\n\t}",
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
  "{ :self |\n\t\tself.arcSinh\n\t}",
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
  "{ :self |\n\t\tself.arcSinh\n\t}",
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
  "{ :self |\n\t\tself.cosh\n\t}",
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
  "{ :self |\n\t\tself.cosh\n\t}",
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
  "{ :self |\n\t\tself.coth\n\t}",
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
  "{ :self |\n\t\tself.coth\n\t}",
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
  "{ :self |\n\t\tself.sech\n\t}",
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
  "{ :self |\n\t\tself.sech\n\t}",
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
  "{ :self |\n\t\tself.sinh\n\t}",
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
  "{ :self |\n\t\tself.sinh\n\t}",
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
  "{ :self |\n\t\tself.tanh\n\t}",
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
  "{ :self |\n\t\tself.tanh\n\t}",
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
  "{ :self |\n\t\tself.collect(arcCosh:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(arcCoth:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(arcCsch:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(arcSech:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(arcSinh:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(cosh:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(coth:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(sech:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(sinh:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(tanh:/1)\n\t}",
);
