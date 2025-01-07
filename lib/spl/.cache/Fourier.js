sl.addMethod(
  "List",
  "Fourier",
  "basicInverseFft",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.inverseFft(_self);
  },
  "{ :self |\n\t\t<primitive: return sc.inverseFft(_self);>\n\t}",
);

sl.addMethod(
  "List",
  "Fourier",
  "basicRealFft",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.realFft(_self);
  },
  "{ :self |\n\t\t<primitive: return sc.realFft(_self);>\n\t}",
);

sl.addMethod(
  "List",
  "Fourier",
  "convolve",
  ["u", "v"],
  function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _verticalLine_2(_isEmpty_1(_u), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _isEmpty_1(_v);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("convolve: invalid vector");
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let _n1 = _size_1(_u);
        let _n2 = _size_1(_v);
        let _answer = _List_2(_hyphenMinus_2(_plusSign_2(_n1, _n2), 1), 0);
        /* Statements */
        _toDo_3(1, _hyphenMinus_2(_plusSign_2(_n1, _n2), 1), function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _toDo_3(1, _n1, function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Temporaries */
            let _k = _plusSign_2(_hyphenMinus_2(_i, _j), 1);
            /* Statements */
            return _ifTrue_2(
              _ampersand_2(_greaterThanSignEqualsSign_2(_k, 1), function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  /* console.error(errorMessage); */
                  throw new Error(errorMessage);
                } /* Statements */
                return _lessThanSignEqualsSign_2(_k, _n2);
              }),
              function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  /* console.error(errorMessage); */
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
              },
            );
          });
        });
        return _answer;
      },
    );
  },
  "{ :u :v |\n\t\t(u.isEmpty | { v.isEmpty }).if {\n\t\t\t'convolve: invalid vector'.error\n\t\t} {\n\t\t\tlet n1 = u.size;\n\t\t\tlet n2 = v.size;\n\t\t\tlet answer = List(n1 + n2 - 1, 0);\n\t\t\t1.toDo(n1 + n2 - 1) { :i |\n\t\t\t\t1.toDo(n1) { :j |\n\t\t\t\t\tlet k = i - j + 1;\n\t\t\t\t\t(k >= 1 & { k <= n2 }).ifTrue {\n\t\t\t\t\t\tanswer[i] := answer[i] + (v[k] * u[j])\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Fourier",
  "deinterleaveComplexData",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _thenTo_3(1, 3, _hyphenMinus_2(_size_1(_self), 1)),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _Complex_2(
          _at_2(_self, _each),
          _at_2(_self, _plusSign_2(_each, 1)),
        );
      },
    );
  },
  "{ :self |\n\t\t(1, 3 ..  self.size - 1).collect { :each |\n\t\t\tComplex(self[each], self[each + 1])\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Fourier",
  "fft",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isPowerOfTwo_1(_size_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _equalsSign_2(_elementType_1(_self), "SmallFloat"),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _deinterleaveComplexData_1(_basicRealFft_1(_self));
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _error_2(_self, "fft: not SmallFloat elements");
        },
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "fft: size not power of two");
    });
  },
  "{ :self |\n\t\tself.size.isPowerOfTwo.if {\n\t\t\t(self.elementType = 'SmallFloat').if {\n\t\t\t\tself.basicRealFft.deinterleaveComplexData\n\t\t\t} {\n\t\t\t\tself.error('fft: not SmallFloat elements')\n\t\t\t}\n\t\t} {\n\t\t\tself.error('fft: size not power of two')\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Fourier",
  "fftConvolve",
  ["u", "v"],
  function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _hyphenMinus_2(_plusSign_2(_size_1(_u), _size_1(_v)), 1);
    let _m = _nextPowerOfTwo_1(_n);
    let _a = _padRight_3(_u, _m, 0);
    let _b = _padRight_3(_v, _m, 0);
    /* Statements */
    return _real_1(_first_2(_ifft_1(_asterisk_2(_fft_1(_a), _fft_1(_b))), _n));
  },
  "{ :u :v |\n\t\tlet n = u.size + v.size - 1;\n\t\tlet m = n.nextPowerOfTwo;\n\t\tlet a = u.padRight(m, 0);\n\t\tlet b = v.padRight(m, 0);\n\t\tifft(a.fft * b.fft).first(n).real\n\t}",
);

sl.addMethod(
  "List",
  "Fourier",
  "ifft",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isPowerOfTwo_1(_size_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _equalsSign_2(_elementType_1(_self), "Complex"),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _deinterleaveComplexData_1(
            _basicInverseFft_1(_interleaveComplexData_1(_self)),
          );
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _error_2(_self, "ifft: not Complex elements");
        },
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "fft: size not power of two");
    });
  },
  "{ :self |\n\t\tself.size.isPowerOfTwo.if {\n\t\t\t(self.elementType = 'Complex').if {\n\t\t\t\tself.interleaveComplexData.basicInverseFft.deinterleaveComplexData\n\t\t\t} {\n\t\t\t\tself.error('ifft: not Complex elements')\n\t\t\t}\n\t\t} {\n\t\t\tself.error('fft: size not power of two')\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Fourier",
  "interleaveComplexData",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _add_2(_answer, _real_1(_each));
      return _add_2(_answer, _imaginary_1(_each));
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tself.collect { :each |\n\t\t\tanswer.add(each.real);\n\t\t\tanswer.add(each.imaginary)\n\t\t};\n\t\tanswer\n\t}",
);
