sl.extendTypeOrTraitWithMethod(
  "List",
  "Fourier",
  "basicComplexFft",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.fft(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.fft(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Fourier",
  "basicInverseFft",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.inverseFft(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.inverseFft(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Fourier",
  "basicRealFft",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.realFft(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.realFft(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Fourier",
  "convolve",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _verticalLine_2(
        _isEmpty_1(_u),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isEmpty_1(_v);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("convolve: invalid vector");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _m = _size_1(_u);
        let _n = _size_1(_v);
        let _answer = _List_2(_hyphenMinus_2(_plusSign_2(_m, _n), 1), 0);
        /* Statements */
        _toDo_3(
          1,
          _hyphenMinus_2(_plusSign_2(_m, _n), 1),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _toDo_3(
              1,
              _m,
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _k = _plusSign_2(_hyphenMinus_2(_i, _j), 1);
                /* Statements */
                return _ifTrue_2(
                  _ampersand_2(
                    _greaterThanSignEqualsSign_2(_k, 1),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _lessThanSignEqualsSign_2(_k, _n);
                    }, []),
                  ),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _atPut_3(
                      _answer,
                      _i,
                      _plusSign_2(
                        _at_2(_answer, _i),
                        _asterisk_2(_at_2(_v, _k), _at_2(_u, _j)),
                      ),
                    );
                  }, []),
                );
              }, ["j"]),
            );
          }, ["i"]),
        );
        return _answer;
      }, []),
    );
  }, ["u", "v"]),
  "{ :u :v | if((|(isEmpty(u), { isEmpty(v) })), { error('convolve: invalid vector') }, { let m = size(u); let n = size(v); let answer = List(-(+(m, n), 1), 0); toDo(1, -(+(m, n), 1), { :i | toDo(1, m, { :j | let k = +(-(i, j), 1); ifTrue((&(>=(k, 1), { <=(k, n) })), { atPut(answer, i, +(at(answer, i), (*(at(v, k), at(u, j))))) }) }) }); answer }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Fourier",
  "deinterleaveComplexData",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _thenTo_3(1, 3, _hyphenMinus_2(_size_1(_self), 1)),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _Complex_2(
          _at_2(_self, _each),
          _at_2(_self, _plusSign_2(_each, 1)),
        );
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self | collect(thenTo(1, 3, -(size(self), 1)), { :each | Complex(at(self, each), at(self, +(each, 1))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Fourier",
  "dft",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _self;
    let _m = _size_1(_x);
    let _p = _solidus_2(_asterisk_2(_pi_1(-2), _i_1(1)), _m);
    /* Statements */
    return _collect_2(
      _upOrDownTo_2(0, _hyphenMinus_2(_m, 1)),
      sl.annotateFunction(function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _q = _asterisk_2(_p, _k);
        let _z = 0;
        /* Statements */
        _toDo_3(
          0,
          _hyphenMinus_2(_m, 1),
          sl.annotateFunction(function (_n) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _n";
              throw new Error(errorMessage);
            } /* Statements */
            return _z = _plusSign_2(
              _z,
              _asterisk_2(
                _at_2(_x, _plusSign_2(_n, 1)),
                _exp_1(_asterisk_2(_q, _n)),
              ),
            );
          }, ["n"]),
        );
        return _z;
      }, ["k"]),
    );
  }, ["self"]),
  "{ :self | let x = self; let m = size(x); let p = /(*(pi(-2), i(1)), m); collect(upOrDownTo(0, -(m, 1)), { :k | let q = *(p, k); let z = 0; toDo(0, -(m, 1), { :n | z := +(z, (*(at(x, +(n, 1)), exp((*(q, n)))))) }); z }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Fourier",
  "fft",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isPowerOfTwo_1(_size_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_elementType_1(_self), "SmallFloat"),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _deinterleaveComplexData_1(_basicRealFft_1(_self));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(_elementType_1(_self), "Complex"),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _deinterleaveComplexData_1(
                  _basicComplexFft_1(_interleaveComplexData_1(_self)),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _error_2(
                  _self,
                  "fft: not SmallFloat or Complex elements",
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
        return _error_2(_self, "fft: size not power of two");
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isPowerOfTwo(size(self)), { if((=(elementType(self), 'SmallFloat')), { deinterleaveComplexData(basicRealFft(self)) }, { if((=(elementType(self), 'Complex')), { deinterleaveComplexData(basicComplexFft(interleaveComplexData(self))) }, { error(self,'fft: not SmallFloat or Complex elements') }) }) }, { error(self,'fft: size not power of two') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Fourier",
  "fft",
  ["x", "n"],
  sl.annotateFunction(function (_x, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _fft_1(_padRight_3(_x, [_n], 0));
  }, ["x", "n"]),
  "{ :x :n | fft(padRight(x,[n], 0)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Fourier",
  "fftConvolve",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _hyphenMinus_2(_plusSign_2(_size_1(_u), _size_1(_v)), 1);
    let _m = _nextPowerOfTwo_1(_n);
    let _a = _padRight_3(_u, [_m], 0);
    let _b = _padRight_3(_v, [_m], 0);
    /* Statements */
    return _real_1(_first_2(_ifft_1(_asterisk_2(_fft_1(_a), _fft_1(_b))), _n));
  }, ["u", "v"]),
  "{ :u :v | let n = -(+(size(u), size(v)), 1); let m = nextPowerOfTwo(n); let a = padRight(u,[m], 0); let b = padRight(v,[m], 0); real(first(ifft(*(fft(a), fft(b))),n)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Fourier",
  "fftShift",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _m = _solidusSolidus_2(_n, 2);
    /* Statements */
    _ifTrue_2(
      _isOdd_1(_n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _m = _plusSign_2(_m, 1);
      }, []),
    );
    return _plusSignPlusSign_2(
      _copyFromTo_3(_self, _plusSign_2(_m, 1), _n),
      _copyFromTo_3(_self, 1, _m),
    );
  }, ["self"]),
  "{ :self | let n = size(self); let m = //(n, 2); ifTrue(isOdd(n), { m := +(m, 1) }); ++(copyFromTo(self,+(m, 1), n), copyFromTo(self,1, m)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Fourier",
  "fourier",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _dot_2(_fourierMatrix_1(_size_1(_self)), _self);
  }, ["self"]),
  "{ :self | dot(fourierMatrix(size(self)),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Fourier",
  "ifft",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isPowerOfTwo_1(_size_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_elementType_1(_self), "Complex"),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _deinterleaveComplexData_1(
              _basicInverseFft_1(_interleaveComplexData_1(_self)),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "ifft: not Complex elements");
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "fft: size not power of two");
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isPowerOfTwo(size(self)), { if((=(elementType(self), 'Complex')), { deinterleaveComplexData(basicInverseFft(interleaveComplexData(self))) }, { error(self,'ifft: not Complex elements') }) }, { error(self,'fft: size not power of two') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Fourier",
  "interleaveComplexData",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_answer, _real_1(_each));
        return _add_2(_answer, _imaginary_1(_each));
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = []; collect(self, { :each | add(answer,real(each)); add(answer,imaginary(each)) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Fourier",
  "inverseFourier",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _m = _fourierMatrix_2(_n, [0, -1]);
    /* Statements */
    return _dot_2(_m, _self);
  }, ["self"]),
  "{ :self | let n = size(self); let m = fourierMatrix(n,[0, -1]); dot(m,self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Fourier",
  "periodogramArray",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_absSquare_1(_fft_1(_self)), _size_1(_self));
  }, ["self"]),
  "{ :self | /(absSquare(fft(self)), size(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Fourier",
  "periodogramArray",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _average_1(
      _collect_2(
        _partition_2(_self, _n),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(_absSquare_1(_fft_1(_each)), _n);
        }, ["each"]),
      ),
    );
  }, ["self", "n"]),
  "{ :self :n | average(collect(partition(self,n), { :each | /(absSquare(fft(each)), n) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Fourier",
  "periodogramArray",
  ["self", "n", "d"],
  sl.annotateFunction(function (_self, _n, _d) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _n, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _average_1(
      _collect_2(
        _partition_3(_self, _n, _d),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(_absSquare_1(_fft_1(_each)), _n);
        }, ["each"]),
      ),
    );
  }, ["self", "n", "d"]),
  "{ :self :n :d | average(collect(partition(self,n, d), { :each | /(absSquare(fft(each)), n) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Fourier",
  "periodogramArray",
  ["self", "n", "d", "w"],
  sl.annotateFunction(function (_self, _n, _d, _w) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _n, _d, _w";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _wN = _normalize_1(_w);
    /* Statements */
    return _average_1(
      _collect_2(
        _partition_3(_self, _n, _d),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _absSquare_1(_fft_1(_asterisk_2(_each, _wN)));
        }, ["each"]),
      ),
    );
  }, ["self", "n", "d", "w"]),
  "{ :self :n :d :w | let wN = normalize(w); average(collect(partition(self,n, d), { :each | absSquare(fft((*(each, wN)))) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Fourier",
  "dirichletKernel",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(
        _sin_1(_asterisk_2(_plusSign_2(_n, 0.5), _x)),
        _sin_1(_asterisk_2(_x, 0.5)),
      );
    }, ["x"]);
  }, ["n"]),
  "{ :n | { :x | /(sin((*((+(n, 0.5)), x))), sin((*(x, 0.5)))) } }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Fourier",
  "fejerKernel",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _isVeryCloseTo_2(_x, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _n;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(
            _solidus_2(
              _hyphenMinus_2(1, _cos_1(_asterisk_2(_n, _x))),
              _hyphenMinus_2(1, _cos_1(_x)),
            ),
            _n,
          );
        }, []),
      );
    }, ["x"]);
  }, ["n"]),
  "{ :n | { :x | if(isVeryCloseTo(x,0), { n }, { /((/((-(1, cos((*(n, x))))), (-(1, cos(x))))), n) }) } }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Fourier",
  "fejerKernelDirichlet",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _d = _collect_2(
      _upOrDownTo_2(0, _hyphenMinus_2(_n, 1)),
      _dirichletKernel_1,
    );
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _sum_1(_collect_2(
        _d,
        sl.annotateFunction(function (_each_1) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each_1";
            throw new Error(errorMessage);
          } /* Statements */
          return _each_1(_x);
        }, ["each:/1"]),
      ));
    }, ["x"]);
  }, ["n"]),
  "{ :n | let d = collect(upOrDownTo(0, -(n, 1)),dirichletKernel:/1); { :x | sum(collect(d, { :each:/1 | each(x) })) } }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Fourier",
  "fftFrequencies",
  ["n", "d"],
  sl.annotateFunction(function (_n, _d) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEven_1(_n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _m = _solidusSolidus_2(_n, 2);
        /* Statements */
        return _solidus_2(
          _plusSignPlusSign_2(
            _asList_1(_upOrDownTo_2(0, _hyphenMinus_2(_m, 1))),
            _asList_1(_upOrDownTo_2(_hyphenMinus_2(0, _m), -1)),
          ),
          _asterisk_2(_d, _n),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _m = _solidusSolidus_2(_hyphenMinus_2(_n, 1), 2);
        /* Statements */
        return _solidus_2(
          _plusSignPlusSign_2(
            _asList_1(_upOrDownTo_2(0, _m)),
            _asList_1(_upOrDownTo_2(_hyphenMinus_2(0, _m), -1)),
          ),
          _asterisk_2(_d, _n),
        );
      }, []),
    );
  }, ["n", "d"]),
  "{ :n :d | if(isEven(n), { let m = //(n, 2); /((++(asList(upOrDownTo(0, -(m, 1))), asList(upOrDownTo(-(0, m), -1)))), (*(d, n))) }, { let m = //((-(n, 1)), 2); /((++(asList(upOrDownTo(0, m)), asList(upOrDownTo(-(0, m), -1)))), (*(d, n))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Fourier",
  "fourierMatrix",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _solidus_2(1, _sqrt_1(_n));
    let _omega = _circumflexAccent_2(
      _e_1(1),
      _solidus_2(_asterisk_2(_pi_1(2), _Complex_2(0, 1)), _n),
    );
    let _l = _upOrDownTo_2(0, _hyphenMinus_2(_n, 1));
    /* Statements */
    return _table_3(
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          _m,
          _circumflexAccent_2(_omega, _asterisk_2(_i, _j)),
        );
      }, ["i", "j"]),
      _l,
      _l,
    );
  }, ["n"]),
  "{ :n | let m = /(1, sqrt(n)); let omega = ^(e(1), (/(*(pi(2), Complex(0, 1)), n))); let l = upOrDownTo(0, -(n, 1)); table({ :i :j | *(m, (^(omega, (*(i, j))))) },l, l) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Fourier",
  "fourierMatrix",
  ["n", "p"],
  sl.annotateFunction(function (_n, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _p";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL407 = _assertIsOfSize_2(_p, 2);
    let _a = _at_2(__SPL407, 1);
    let _b = _at_2(__SPL407, 2);
    let _m = _solidus_2(
      1,
      _circumflexAccent_2(_n, _solidus_2(_hyphenMinus_2(1, _a), 2)),
    );
    let _v = _solidus_2(
      _asterisk_2(
        _asList_1(_upOrDownTo_2(0, _hyphenMinus_2(_n, 1))),
        _asterisk_2(_i_1(_pi_1(2)), _b),
      ),
      _n,
    );
    /* Statements */
    return _asterisk_2(_vandermondeMatrix_1(_exp_1(_v)), _m);
  }, ["n", "p"]),
  "{ :n :p | let __SPL407 = assertIsOfSize(p, 2); let a = at(__SPL407, 1); let b = at(__SPL407, 2); let m = /(1, (^(n, (/((-(1, a)), 2))))); let v = /(*(asList(upOrDownTo(0, -(n, 1))), (*(i(pi(2)), b))), n); *(vandermondeMatrix(exp(v)), m) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Fourier",
  "lanczosKernel",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _betweenAnd_3(_x, _hyphenMinus_1(_a), _a),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(
            _sincNormalized_1(_x),
            _sincNormalized_1(_solidus_2(_x, _a)),
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 0;
        }, []),
      );
    }, ["x"]);
  }, ["a"]),
  "{ :a | { :x | if(betweenAnd(x,-(a), a), { *(sincNormalized(x), sincNormalized((/(x, a)))) }, { 0 }) } }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Fourier",
  "lanczosKernelSin",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _equalsSign_2(_x, 0),
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
          return _if_3(
            _betweenAnd_3(_x, _hyphenMinus_1(_a), _a),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _solidus_2(
                _asterisk_2(
                  _asterisk_2(_a, _sin_1(_pi_1(_x))),
                  _sin_1(_solidus_2(_pi_1(_x), _a)),
                ),
                _asterisk_2(_square_1(_pi_1(1)), _square_1(_x)),
              );
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return 0;
            }, []),
          );
        }, []),
      );
    }, ["x"]);
  }, ["a"]),
  "{ :a | { :x | if((=(x, 0)), { 1 }, { if(betweenAnd(x,-(a), a), { /((*(*(a, sin(pi(x))), sin((/(pi(x), a))))), (*(square(pi(1)), square(x)))) }, { 0 }) }) } }",
);
