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
  "{ :self |\n\t\t<primitive: return sc.fft(_self);>\n\t}",
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
  "{ :self |\n\t\t<primitive: return sc.inverseFft(_self);>\n\t}",
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
  "{ :self |\n\t\t<primitive: return sc.realFft(_self);>\n\t}",
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
  "{ :u :v |\n\t\t(u.isEmpty | { v.isEmpty }).if {\n\t\t\t'convolve: invalid vector'.error\n\t\t} {\n\t\t\tlet m = u.size;\n\t\t\tlet n = v.size;\n\t\t\tlet answer = List(m + n - 1, 0);\n\t\t\t1.toDo(m + n - 1) { :i |\n\t\t\t\t1.toDo(m) { :j |\n\t\t\t\t\tlet k = i - j + 1;\n\t\t\t\t\t(k >= 1 & { k <= n }).ifTrue {\n\t\t\t\t\t\tanswer[i] := answer[i] + (v[k] * u[j])\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
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
  "{ :self |\n\t\t(1, 3 ..  self.size - 1).collect { :each |\n\t\t\tComplex(self[each], self[each + 1])\n\t\t}\n\t}",
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
  "{ :self |\n\t\tlet x = self;\n\t\tlet m = x.size;\n\t\tlet p = -2.pi * 1.i / m;\n\t\t(0 .. m - 1).collect { :k |\n\t\t\tlet q = p * k;\n\t\t\tlet z = 0;\n\t\t\t0.toDo(m - 1) { :n |\n\t\t\t\tz := z + (x[n + 1] * (q * n).exp)\n\t\t\t};\n\t\t\tz\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.size.isPowerOfTwo.if {\n\t\t\t(self.elementType = 'SmallFloat').if {\n\t\t\t\tself.basicRealFft.deinterleaveComplexData\n\t\t\t} {\n\t\t\t\t(self.elementType = 'Complex').if {\n\t\t\t\t\tself.interleaveComplexData.basicComplexFft.deinterleaveComplexData\n\t\t\t\t} {\n\t\t\t\t\tself.error('fft: not SmallFloat or Complex elements')\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tself.error('fft: size not power of two')\n\t\t}\n\t}",
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
  "{ :x :n |\n\t\tx.padRight([n], 0).fft\n\t}",
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
  "{ :u :v |\n\t\tlet n = u.size + v.size - 1;\n\t\tlet m = n.nextPowerOfTwo;\n\t\tlet a = u.padRight([m], 0);\n\t\tlet b = v.padRight([m], 0);\n\t\tifft(a.fft * b.fft).first(n).real\n\t}",
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
  "{ :self |\n\t\tlet n = self.size;\n\t\tlet m = n // 2;\n\t\tn.isOdd.ifTrue {\n\t\t\tm := m + 1\n\t\t};\n\t\tself.copyFromTo(m + 1, n) ++ self.copyFromTo(1, m)\n\t}",
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
  "{ :self |\n\t\tself.size.fourierMatrix.dot(self)\n\t}",
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
  "{ :self |\n\t\tself.size.isPowerOfTwo.if {\n\t\t\t(self.elementType = 'Complex').if {\n\t\t\t\tself.interleaveComplexData.basicInverseFft.deinterleaveComplexData\n\t\t\t} {\n\t\t\t\tself.error('ifft: not Complex elements')\n\t\t\t}\n\t\t} {\n\t\t\tself.error('fft: size not power of two')\n\t\t}\n\t}",
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
  "{ :self |\n\t\tlet answer = [];\n\t\tself.collect { :each |\n\t\t\tanswer.add(each.real);\n\t\t\tanswer.add(each.imaginary)\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self |\n\t\tlet n = self.size;\n\t\tlet m = n.fourierMatrix([0 -1]);\n\t\tm.dot(self)\n\t}",
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
  "{ :self |\n\t\tself.fft.absSquare / self.size\n\t}",
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
  "{ :self :n |\n\t\tself.partition(n).collect { :each |\n\t\t\teach.fft.absSquare / n\n\t\t}.average\n\t}",
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
  "{ :self :n :d |\n\t\tself.partition(n, d).collect { :each |\n\t\t\teach.fft.absSquare / n\n\t\t}.average\n\t}",
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
  "{ :self :n :d :w |\n\t\tlet wN = w.normalize;\n\t\tself.partition(n, d).collect { :each |\n\t\t\t(each * wN).fft.absSquare\n\t\t}.average\n\t}",
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
  "{ :n |\n\t\t{ :x |\n\t\t\t((n + 0.5) * x).sin / (x * 0.5).sin\n\t\t}\n\t}",
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
  "{ :n |\n\t\t{ :x |\n\t\t\tx.isVeryCloseTo(0).if {\n\t\t\t\tn\n\t\t\t} {\n\t\t\t\t((1 - (n * x).cos) / (1 - x.cos)) / n\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :n |\n\t\tlet d = (0 .. n - 1).collect(dirichletKernel:/1);\n\t\t{ :x |\n\t\t\td.collect { :each:/1 |\n\t\t\t\teach(x)\n\t\t\t}.sum\n\t\t}\n\t}",
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
  "{ :n :d |\n\t\tn.isEven.if {\n\t\t\tlet m = n // 2;\n\t\t\t([0 .. m - 1] ++ [0 - m .. -1]) / (d * n)\n\t\t} {\n\t\t\tlet m = (n - 1) // 2;\n\t\t\t([0 .. m] ++ [0 - m .. -1]) / (d * n)\n\t\t}\n\t}",
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
  "{ :n |\n\t\tlet m = 1 / n.sqrt;\n\t\tlet omega = 1.e ^ (2.pi * 0J1 / n);\n\t\tlet l = (0 .. n - 1);\n\t\t{ :i :j |\n\t\t\tm * (omega ^ (i * j))\n\t\t}.table(l, l)\n\t}",
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
    let __SplVar1 = _assertIsOfSize_2(_p, 2);
    let _a = _at_2(__SplVar1, 1);
    let _b = _at_2(__SplVar1, 2);
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
  "{ :n :p |\n\t\tlet [a, b] = p;\n\t\tlet m = 1 / (n ^ ((1 - a) / 2));\n\t\tlet v = [0 .. n - 1] * (2.pi.i * b) / n;\n\t\tv.exp.vandermondeMatrix * m\n\t}",
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
  "{ :a |\n\t\t{ :x |\n\t\t\tx.betweenAnd(a.-, a).if {\n\t\t\t\tx.sincNormalized * (x / a).sincNormalized\n\t\t\t} {\n\t\t\t\t0\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :a |\n\t\t{ :x |\n\t\t\t(x = 0).if {\n\t\t\t\t1\n\t\t\t} {\n\t\t\t\tx.betweenAnd(a.-, a).if {\n\t\t\t\t\t(a * x.pi.sin * (x.pi / a).sin) / (1.pi.square * x.square)\n\t\t\t\t} {\n\t\t\t\t\t0\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);
