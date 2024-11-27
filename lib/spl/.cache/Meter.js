sl.extendTraitWithMethod(
  "Integer",
  "Meter",
  "barlowBasicIndispensability",
  ["p", "n"],
  function (_p, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _p, _n"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isPrime_1(_p), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_p, 2), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _hyphenMinus_2(_p, _n);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _if_3(_equalsSign_2(_hyphenMinus_2(_p, 1), _n), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _integerPart_1(_solidus_2(_p, 4));
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Temporaries */
          let _s = _sort_2(
            _primeFactors_1(_hyphenMinus_2(_p, 1)),
            _greaterThanSignEqualsSign_2,
          );
          let _m = _hyphenMinus_2(_n, _integerPart_1(_solidus_2(_n, _p)));
          let _q = _barlowIndispensability_2(_s, _m);
          /* Statements */
          return _integerPart_1(
            _plusSign_2(
              _q,
              _asterisk_2(2, _sqrt_1(_solidus_2(_plusSign_2(_q, 1), _p))),
            ),
          );
        });
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_p, "@Integer>>barlowBasicIndispensability");
    });
  },
  "{ :p :n |\n\t\tp.isPrime.if {\n\t\t\t(p = 2).if {\n\t\t\t\tp - n\n\t\t\t} {\n\t\t\t\t(p - 1 = n).if {\n\t\t\t\t\t(p / 4).integerPart\n\t\t\t\t} {\n\t\t\t\t\tlet s = (p - 1).primeFactors.sort(>=);\n\t\t\t\t\tlet m = n - (n / p).integerPart;\n\t\t\t\t\tlet q = barlowIndispensability(s, m);\n\t\t\t\t\t(q + (2 * ((q + 1) / p).sqrt)).integerPart\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tp.error('@Integer>>barlowBasicIndispensability')\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Meter",
  "barlowIndispensabilities",
  ["p"],
  function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _p"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_upOrDownTo_2(1, _product_1(_p)), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _each"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _barlowIndispensability_2(_p, _each);
    });
  },
  "{ :p |\n\t\t(1 .. p.product).collect { :each |\n\t\t\tp.barlowIndispensability(each)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Meter",
  "barlowIndispensability",
  ["p", "n"],
  function (_p, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _p, _n"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_allSatisfy_2(_p, _isPrime_1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _z = _size_1(_p);
      let _m = _product_1(_p);
      let _u = _percentSign_2(_hyphenMinus_2(_n, 2), _m);
      let _ix_1 = function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage =
            "Arity: expected 1, _k"; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _if_3(
          _verticalLineVerticalLine_2(
            _equalsSign_2(_k, 0),
            _equalsSign_2(_k, _plusSign_2(_z, 1)),
          ),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            return 1;
          },
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage =
                "Arity: expected 0, "; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            return _at_2(_p, _k);
          },
        );
      };
      /* Statements */
      return _sum_1(_collect_2(_to_2(0, _hyphenMinus_2(_z, 1)), function (_r) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage =
            "Arity: expected 1, _r"; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _m2 = _product_1(_collect_2(_to_2(0, _r), function (_k) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage =
              "Arity: expected 1, _k"; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _ix_1(_hyphenMinus_2(_plusSign_2(_z, 1), _k));
        }));
        let _a = _ix_1(_hyphenMinus_2(_z, _r));
        let _b = _plusSign_2(1, _integerPart_1(_solidus_2(_u, _m2)));
        let _c = _plusSign_2(1, _percentSign_2(_b, _a));
        let _d = _barlowBasicIndispensability_2(_a, _c);
        let _e = _product_1(
          _collect_2(
            _to_2(0, _hyphenMinus_2(_hyphenMinus_2(_z, _r), 1)),
            _ix_1,
          ),
        );
        /* Statements */
        return _asterisk_2(_e, _d);
      }));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_p, "@Sequence>>barlowIndispensability");
    });
  },
  "{ :p :n |\n\t\tp.allSatisfy(isPrime:/1).if {\n\t\t\tlet z = p.size;\n\t\t\tlet m = p.product;\n\t\t\tlet u = (n - 2) % m;\n\t\t\tlet ix = { :k |\n\t\t\t\t((k = 0) || (k = (z + 1))).if {\n\t\t\t\t\t1\n\t\t\t\t} {\n\t\t\t\t\tp[k]\n\t\t\t\t}\n\t\t\t};\n\t\t\t0.to(z - 1).collect { :r |\n\t\t\t\tlet m2 = 0.to(r).collect { :k |\n\t\t\t\t\tix(z + 1 - k)\n\t\t\t\t}.product;\n\t\t\t\tlet a = ix(z - r);\n\t\t\t\tlet b = 1 + (u / m2).integerPart;\n\t\t\t\tlet c = 1 + (b % a);\n\t\t\t\tlet d = barlowBasicIndispensability(a, c);\n\t\t\t\tlet e = 0.to(z - r - 1).collect(ix:/1).product;\n\t\t\t\te * d\n\t\t\t}.sum\n\t\t} {\n\t\t\tp.error('@Sequence>>barlowIndispensability')\n\t\t}\n\t}",
);
