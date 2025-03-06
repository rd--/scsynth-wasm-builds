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
        let _n1 = _size_1(_u);
        let _n2 = _size_1(_v);
        let _answer = _List_2(_hyphenMinus_2(_plusSign_2(_n1, _n2), 1), 0);
        /* Statements */
        _toDo_3(
          1,
          _hyphenMinus_2(_plusSign_2(_n1, _n2), 1),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _toDo_3(
              1,
              _n1,
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
                      return _lessThanSignEqualsSign_2(_k, _n2);
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
  "{ :u :v | if((|(isEmpty(u), { isEmpty(v) })), { error('convolve: invalid vector') }, { let n1 = size(u); let n2 = size(v); let answer = List(-(+(n1, n2), 1), 0); toDo(1, -(+(n1, n2), 1), { :i | toDo(1, n1, { :j | let k = +(-(i, j), 1); ifTrue((&(>=(k, 1), { <=(k, n2) })), { atPut(answer, i, +(at(answer, i), (*(at(v, k), at(u, j))))) }) }) }); answer }) }",
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
            return _error_2(_self, "fft: not SmallFloat elements");
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
  "{ :self | if(isPowerOfTwo(size(self)), { if((=(elementType(self), 'SmallFloat')), { deinterleaveComplexData(basicRealFft(self)) }, { error(self,'fft: not SmallFloat elements') }) }, { error(self,'fft: size not power of two') }) }",
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
