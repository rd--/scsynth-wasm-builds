sl.addType(
  false,
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  ["Object"],
  ["coefficients"],
);

sl.copyTraitToType(
  "Object",
  "UnivariatePolynomial",
);

sl.addMethod(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "plusSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c1 = _coefficients_1(_self);
    let _c2 = _coefficients_1(_anObject);
    let _n = _max_2(_size_1(_c1), _size_1(_c2));
    /* Statements */
    return _UnivariatePolynomial_1(
      _plusSign_2(_padLeft_3(_c1, _n, 0), _padLeft_3(_c2, _n, 0)),
    );
  },
  "{ :self :anObject |\n\t\tlet c1 = self.coefficients;\n\t\tlet c2 = anObject.coefficients;\n\t\tlet n = c1.size.max(c2.size);\n\t\tUnivariatePolynomial(\n\t\t\tc1.padLeft(n, 0) + c2.padLeft(n, 0)\n\t\t)\n\t}",
);

sl.addMethod(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "at",
  ["self", "x"],
  function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 0;
    let _exponent = _degree_1(_self);
    /* Statements */
    _do_2(_coefficients_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _answer = _plusSign_2(
        _answer,
        _asterisk_2(_each, _circumflexAccent_2(_x, _exponent)),
      );
      return _exponent = _hyphenMinus_2(_exponent, 1);
    });
    return _answer;
  },
  "{ :self :x |\n\t\tlet answer = 0;\n\t\tlet exponent = self.degree;\n\t\tself.coefficients.do { :each |\n\t\t\tanswer := answer + (each * (x ^ exponent));\n\t\t\texponent := exponent - 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "atAll",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_aCollection, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _at_2(_self, _each);
    });
  },
  "{ :self :aCollection |\n\t\taCollection.collect { :each |\n\t\t\tself.at(each)\n\t\t}\n\t}",
);

sl.addMethod(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "degree",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(_size_1(_coefficients_1(_self)), 1);
  },
  "{ :self |\n\t\tself.coefficients.size - 1\n\t}",
);

sl.addMethod(
  "List",
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newUnivariatePolynomial_0(), _self);
  },
  "{ :self |\n\t\tnewUnivariatePolynomial().initializeSlots(self)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "UnivariatePolynomial",
  "chebyshevT",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _caseOfOtherwise_3(_self, [
      _hyphenMinusGreaterThanSign_2(0, [1]),
      _hyphenMinusGreaterThanSign_2(1, [1, 0]),
      _hyphenMinusGreaterThanSign_2(2, [2, 0, -1]),
      _hyphenMinusGreaterThanSign_2(3, [4, 0, -3, 0]),
      _hyphenMinusGreaterThanSign_2(4, [8, 0, -8, 0, 1]),
      _hyphenMinusGreaterThanSign_2(5, [16, 0, -20, 0, 5, 0]),
      _hyphenMinusGreaterThanSign_2(6, [32, 0, -48, 0, 18, 0, -1]),
      _hyphenMinusGreaterThanSign_2(7, [64, 0, -112, 0, 56, 0, -7, 0]),
      _hyphenMinusGreaterThanSign_2(8, [128, 0, -256, 0, 160, 0, -32, 0, 1]),
      _hyphenMinusGreaterThanSign_2(9, [
        256,
        0,
        -576,
        0,
        432,
        0,
        -120,
        0,
        9,
        0,
      ]),
      _hyphenMinusGreaterThanSign_2(10, [
        512,
        0,
        -1280,
        0,
        1120,
        0,
        -400,
        0,
        50,
        0,
        -1,
      ]),
      _hyphenMinusGreaterThanSign_2(11, [
        1024,
        0,
        -2816,
        0,
        2816,
        0,
        -1232,
        0,
        220,
        0,
        -11,
        0,
      ]),
      _hyphenMinusGreaterThanSign_2(12, [
        2048,
        0,
        -6144,
        0,
        6912,
        0,
        -3584,
        0,
        840,
        0,
        -72,
        0,
        1,
      ]),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "chebyshevT: not implemented");
    });
    /* Statements */
    return _UnivariatePolynomial_1(_c);
  },
  "{ :self |\n\t\tlet c = self.caseOfOtherwise([\n\t\t\t0 -> [1],\n\t\t\t1 -> [1 0],\n\t\t\t2 -> [2 0 -1],\n\t\t\t3 -> [4 0 -3 0],\n\t\t\t4 -> [8 0 -8 0 1],\n\t\t\t5 -> [16 0 -20 0 5 0],\n\t\t\t6 -> [32 0 -48 0 18 0 -1],\n\t\t\t7 -> [64 0 -112 0 56 0 -7 0],\n\t\t\t8 -> [128 0 -256 0 160 0 -32 0 1],\n\t\t\t9 -> [256 0 -576 0 432 0 -120 0 9 0],\n\t\t\t10 -> [512 0 -1280 0 1120 0 -400 0 50 0 -1],\n\t\t\t11 -> [1024 0 -2816 0 2816 0 -1232 0 220 0 -11 0],\n\t\t\t12 -> [2048 0 -6144 0 6912 0 -3584 0 840 0 -72 0 1]\n\t\t]) {\n\t\t\tself.error('chebyshevT: not implemented')\n\t\t};\n\t\tUnivariatePolynomial(c)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "UnivariatePolynomial",
  "chebyshevU",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _caseOfOtherwise_3(_self, [
      _hyphenMinusGreaterThanSign_2(0, [1]),
      _hyphenMinusGreaterThanSign_2(1, [2, 0]),
      _hyphenMinusGreaterThanSign_2(2, [4, 0, -1]),
      _hyphenMinusGreaterThanSign_2(3, [8, 0, -4, 0]),
      _hyphenMinusGreaterThanSign_2(4, [16, 0, -12, 0, 1]),
      _hyphenMinusGreaterThanSign_2(5, [32, 0, -32, 0, 6, 0]),
      _hyphenMinusGreaterThanSign_2(6, [64, 0, -80, 0, 24, 0, -1]),
      _hyphenMinusGreaterThanSign_2(7, [128, 0, -192, 0, 80, 0, -8, 0]),
      _hyphenMinusGreaterThanSign_2(8, [256, 0, -448, 0, 240, 0, -40, 0, 1]),
      _hyphenMinusGreaterThanSign_2(9, [
        512,
        0,
        -1024,
        0,
        672,
        0,
        -160,
        0,
        10,
        0,
      ]),
      _hyphenMinusGreaterThanSign_2(10, [
        1024,
        0,
        -2304,
        0,
        1792,
        0,
        -560,
        0,
        60,
        0,
        -1,
      ]),
      _hyphenMinusGreaterThanSign_2(11, [
        2048,
        0,
        -5120,
        0,
        4608,
        0,
        -1792,
        0,
        280,
        0,
        -12,
        0,
      ]),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "chebyshevU: not implemented");
    });
    /* Statements */
    return _UnivariatePolynomial_1(_c);
  },
  "{ :self |\n\t\tlet c = self.caseOfOtherwise([\n\t\t\t0 -> [1],\n\t\t\t1 -> [2 0],\n\t\t\t2 -> [4 0 -1],\n\t\t\t3 -> [8 0 -4 0],\n\t\t\t4 -> [16 0 -12 0 1],\n\t\t\t5 -> [32 0 -32 0 6 0],\n\t\t\t6 -> [64 0 -80 0 24 0 -1],\n\t\t\t7 -> [128 0 -192 0 80 0 -8 0],\n\t\t\t8 -> [256 0 -448 0 240 0 -40 0 1],\n\t\t\t9 -> [512 0 -1024 0 672 0 -160 0 10 0],\n\t\t\t10 -> [1024 0 -2304 0 1792 0 -560 0 60 0 -1],\n\t\t\t11 -> [2048 0 -5120 0 4608 0 -1792 0 280 0 -12 0]\n\t\t]) {\n\t\t\tself.error('chebyshevU: not implemented')\n\t\t};\n\t\tUnivariatePolynomial(c)\n\t}",
);
