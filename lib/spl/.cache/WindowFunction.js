sl.extendTraitWithMethod(
  "Number",
  "WindowFunction",
  "bartlettWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThanSign_2(_abs_1(_self), 0.5), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 0;
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
        return _hyphenMinus_2(1, _asterisk_2(2, _self));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _plusSign_2(1, _asterisk_2(2, _self));
      });
    });
  },
  "{ :self |\n\t\t(self.abs > 0.5).if {\n\t\t\t0\n\t\t}  {\n\t\t\t(self  > 0).if {\n\t\t\t\t1 - (2 * self)\n\t\t\t} {\n\t\t\t\t1 + (2 * self)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "WindowFunction",
  "blackmanWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThanSign_2(_abs_1(_self), 0.5), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
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
  "{ :self |\n\t\t(self.abs > 0.5).if {\n\t\t\t0\n\t\t}  {\n\t\t\t(1 / 50) * (25 * (2.pi * self).cos + (4 * (4.pi * self).cos) + 21)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "WindowFunction",
  "blackmanHarrisWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThanSign_2(_abs_1(_self), 0.5), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
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
  "{ :self |\n\t\t(self.abs > 0.5).if {\n\t\t\t0\n\t\t}  {\n\t\t\t((48829 * (2.pi * self).cos) + (14128 * (4.pi * self).cos) + (1168 * (6.pi * self).cos) + 35875) / 100000\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "WindowFunction",
  "dirichletWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThanSign_2(_abs_1(_self), 0.5), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 1;
    });
  },
  "{ :self |\n\t\t(self.abs > 0.5).if {\n\t\t\t0\n\t\t}  {\n\t\t\t1\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "WindowFunction",
  "gaussianWindow",
  ["self", "sigma"],
  function (_self, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sigma";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThanSign_2(_abs_1(_self), 0.5), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _exp_1(
        _negated_1(
          _solidus_2(_squared_1(_self), _asterisk_2(2, _squared_1(_sigma))),
        ),
      );
    });
  },
  "{ :self :sigma |\n\t\t(self.abs > 0.5).if {\n\t\t\t0\n\t\t} {\n\t\t\t(self.squared / (2 * sigma.squared)).negated.exp\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "WindowFunction",
  "gaussianWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _gaussianWindow_2(_self, _solidus_2(3, 10));
  },
  "{ :self |\n\t\tself.gaussianWindow(3 / 10)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "WindowFunction",
  "hammingWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThanSign_2(_abs_1(_self), 0.5), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _plusSign_2(
        _asterisk_2(_solidus_2(21, 46), _cos_1(_asterisk_2(_pi_1(2), _self))),
        _solidus_2(25, 46),
      );
    });
  },
  "{ :self |\n\t\t(self.abs > 0.5).if {\n\t\t\t0\n\t\t}  {\n\t\t\t(21 / 46) * (2.pi * self).cos + (25 / 46)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "WindowFunction",
  "hannWindow",
  ["self", "alpha"],
  function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThanSign_2(_abs_1(_self), 0.5), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _c = _cos_1(_asterisk_2(_pi_1(2), _self));
      /* Statements */
      return _plusSign_2(_hyphenMinus_2(_alpha, _asterisk_2(_alpha, _c)), _c);
    });
  },
  "{ :self :alpha |\n\t\t(self.abs > 0.5).if {\n\t\t\t0\n\t\t}  {\n\t\t\tlet c = (2.pi * self).cos;\n\t\t\talpha - (alpha * c) + c\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "WindowFunction",
  "hannWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hannWindow_2(_self, 0.5);
  },
  "{ :self |\n\t\tself.hannWindow(0.5)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "WindowFunction",
  "welchWindow",
  ["self", "alpha"],
  function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThanSign_2(_abs_1(_self), 0.5), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _solidus_2(
        _hyphenMinus_2(_squared_1(_alpha), _asterisk_2(4, _squared_1(_self))),
        _squared_1(_alpha),
      );
    });
  },
  "{ :self :alpha |\n\t\t(self.abs > 0.5).if {\n\t\t\t0\n\t\t}  {\n\t\t\t(alpha.squared - (4 * self.squared)) / alpha.squared\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "WindowFunction",
  "welchWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _welchWindow_2(_self, 1);
  },
  "{ :self |\n\t\tself.welchWindow(1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "WindowFunction",
  "bartlettWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _bartlettWindow_1);
  },
  "{ :self |\n\t\tself.collect(bartlettWindow:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "WindowFunction",
  "blackmanWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _blackmanWindow_1);
  },
  "{ :self |\n\t\tself.collect(blackmanWindow:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "WindowFunction",
  "blackmanHarrisWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _blackmanHarrisWindow_1);
  },
  "{ :self |\n\t\tself.collect(blackmanHarrisWindow:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "WindowFunction",
  "dirichletWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _dirichletWindow_1);
  },
  "{ :self |\n\t\tself.collect(dirichletWindow:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "WindowFunction",
  "gaussianWindow",
  ["self", "sigma"],
  function (_self, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sigma";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _gaussianWindow_2(_each, _sigma);
    });
  },
  "{ :self :sigma |\n\t\tself.collect { :each |\n\t\t\teach.gaussianWindow(sigma)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "WindowFunction",
  "gaussianWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _gaussianWindow_1);
  },
  "{ :self |\n\t\tself.collect(gaussianWindow:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "WindowFunction",
  "hammingWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _hammingWindow_1);
  },
  "{ :self |\n\t\tself.collect(hammingWindow:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "WindowFunction",
  "hannWindow",
  ["self", "alpha"],
  function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _hannWindow_2(_each, _alpha);
    });
  },
  "{ :self :alpha |\n\t\tself.collect { :each |\n\t\t\teach.hannWindow(alpha)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "WindowFunction",
  "hannWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hannWindow_2(_self, 0.5);
  },
  "{ :self |\n\t\tself.hannWindow(0.5)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "WindowFunction",
  "welchWindow",
  ["self", "alpha"],
  function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _welchWindow_2(_each, _alpha);
    });
  },
  "{ :self :alpha |\n\t\tself.collect { :each |\n\t\t\teach.welchWindow(alpha)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "WindowFunction",
  "welchWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _welchWindow_1);
  },
  "{ :self |\n\t\tself.collect(welchWindow:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "WindowFunction",
  "hammingTable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _discretize_3(_Interval_2(-0.5, 0.5), _self, _hammingWindow_1);
  },
  "{ :self |\n\t\tInterval(-0.5, 0.5).discretize(self, hammingWindow:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "WindowFunction",
  "hannTable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _discretize_3(_Interval_2(-0.5, 0.5), _self, _hannWindow_1);
  },
  "{ :self |\n\t\tInterval(-0.5, 0.5).discretize(self, hannWindow:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "WindowFunction",
  "welchTable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _discretize_3(_Interval_2(-0.5, 0.5), _self, _welchWindow_1);
  },
  "{ :self |\n\t\tInterval(-0.5, 0.5).discretize(self, welchWindow:/1)\n\t}",
);
