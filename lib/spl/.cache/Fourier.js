sl.addMethod(
  "List",
  "Fourier",
  "basicInverseFft",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.realFft(_self);
  },
  "{ :self |\n\t\t<primitive: return sc.realFft(_self);>\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(
      _thenTo_3(1, 3, _hyphenMinus_2(_size_1(_self), 1)),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
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
  "interleaveComplexData",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _add_2(_answer, _real_1(_each));
      return _add_2(_answer, _imaginary_1(_each));
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tself.collect { :each |\n\t\t\tanswer.add(each.real);\n\t\t\tanswer.add(each.imaginary)\n\t\t};\n\t\tanswer\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isPowerOfTwo_1(_size_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(
        _equalsSign_2(_elementType_1(_self), "SmallFloat"),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _deinterleaveComplexData_1(_basicRealFft_1(_self));
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _error_2(_self, "fft: not SmallFloat elements");
        },
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "fft: size not power of two");
    });
  },
  "{ :self |\n\t\tself.size.isPowerOfTwo.if {\n\t\t\t(self.elementType = 'SmallFloat').if {\n\t\t\t\tself.basicRealFft.deinterleaveComplexData\n\t\t\t} {\n\t\t\t\tself.error('fft: not SmallFloat elements')\n\t\t\t}\n\t\t} {\n\t\t\tself.error('fft: size not power of two')\n\t\t}\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isPowerOfTwo_1(_size_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(
        _equalsSign_2(_elementType_1(_self), "Complex"),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _deinterleaveComplexData_1(
            _basicInverseFft_1(_interleaveComplexData_1(_self)),
          );
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _error_2(_self, "ifft: not Complex elements");
        },
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "fft: size not power of two");
    });
  },
  "{ :self |\n\t\tself.size.isPowerOfTwo.if {\n\t\t\t(self.elementType = 'Complex').if {\n\t\t\t\tself.interleaveComplexData.basicInverseFft.deinterleaveComplexData\n\t\t\t} {\n\t\t\t\tself.error('ifft: not Complex elements')\n\t\t\t}\n\t\t} {\n\t\t\tself.error('fft: size not power of two')\n\t\t}\n\t}",
);
