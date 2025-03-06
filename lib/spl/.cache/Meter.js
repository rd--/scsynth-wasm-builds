sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Meter",
  "barlowBasicIndispensability",
  ["p", "n"],
  sl.annotateFunction(function (_p, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isPrime_1(_p),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_p, 2),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinus_2(_p, _n);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(_hyphenMinus_2(_p, 1), _n),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _integerPart_1(_solidus_2(_p, 4));
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
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
              }, []),
            );
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_p, "@Integer>>barlowBasicIndispensability");
      }, []),
    );
  }, ["p", "n"]),
  "{ :p :n | if(isPrime(p), { if((=(p, 2)), { -(p, n) }, { if((=(-(p, 1), n)), { integerPart((/(p, 4))) }, { let s = sort(primeFactors((-(p, 1))),>=); let m = -(n, integerPart((/(n, p)))); let q = barlowIndispensability(s, m); integerPart((+(q, (*(2, sqrt((/((+(q, 1)), p)))))))) }) }) }, { error(p,'@Integer>>barlowBasicIndispensability') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Meter",
  "barlowIndispensabilities",
  ["p"],
  sl.annotateFunction(function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _upOrDownTo_2(1, _product_1(_p)),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _barlowIndispensability_2(_p, _each);
      }, ["each"]),
    );
  }, ["p"]),
  "{ :p | collect(upOrDownTo(1, product(p)), { :each | barlowIndispensability(p,each) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Meter",
  "barlowIndispensability",
  ["p", "n"],
  sl.annotateFunction(function (_p, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _allSatisfy_2(_p, _isPrime_1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _z = _size_1(_p);
        let _m = _product_1(_p);
        let _u = _percentSign_2(_hyphenMinus_2(_n, 2), _m);
        let _ix_1 = sl.annotateFunction(function (_k) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _k";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _verticalLineVerticalLine_2(
              _equalsSign_2(_k, 0),
              _equalsSign_2(_k, _plusSign_2(_z, 1)),
            ),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return 1;
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _at_2(_p, _k);
            }, []),
          );
        }, ["k"]);
        /* Statements */
        return _sum_1(
          _collect_2(
            _to_2(0, _hyphenMinus_2(_z, 1)),
            sl.annotateFunction(function (_r) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _r";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _m2 = _product_1(
                _collect_2(
                  _to_2(0, _r),
                  sl.annotateFunction(function (_k) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _k";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _ix_1(_hyphenMinus_2(_plusSign_2(_z, 1), _k));
                  }, ["k"]),
                ),
              );
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
            }, ["r"]),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_p, "List>>barlowIndispensability");
      }, []),
    );
  }, ["p", "n"]),
  "{ :p :n | if(allSatisfy(p,isPrime:/1), { let z = size(p); let m = product(p); let u = %((-(n, 2)), m); let ix = { :k | if((||((=(k, 0)), (=(k, (+(z, 1)))))), { 1 }, { at(p, k) }) }; sum(collect(to(0,-(z, 1)), { :r | let m2 = product(collect(to(0,r), { :k | ix(-(+(z, 1), k)) })); let a = ix(-(z, r)); let b = +(1, integerPart((/(u, m2)))); let c = +(1, (%(b, a))); let d = barlowBasicIndispensability(a, c); let e = product(collect(to(0,-(-(z, r), 1)),ix:/1)); *(e, d) })) }, { error(p,'List>>barlowIndispensability') }) }",
);
