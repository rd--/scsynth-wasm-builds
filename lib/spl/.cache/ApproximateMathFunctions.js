sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ApproximateMathFunctions",
  "blinnWyvillRaisedInvertedCosine",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x2 = _asterisk_2(_x, _x);
    let _x4 = _asterisk_2(_x2, _x2);
    let _x6 = _asterisk_2(_x4, _x2);
    let _fa = _solidus_2(4, 9);
    let _fb = _solidus_2(17, 9);
    let _fc = _solidus_2(22, 9);
    /* Statements */
    return _plusSign_2(
      _hyphenMinus_2(_asterisk_2(_fa, _x6), _asterisk_2(_fb, _x4)),
      _asterisk_2(_fc, _x2),
    );
  }, ["x"]),
  "{ :x | let x2 = *(x, x); let x4 = *(x2, x2); let x6 = *(x4, x2); let fa = /(4, 9); let fb = /(17, 9); let fc = /(22, 9); +(-((*(fa, x6)), (*(fb, x4))), (*(fc, x2))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ApproximateMathFunctions",
  "cosApproximation",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x2 = _asterisk_2(_x, _x);
    let _numerator = _hyphenMinus_1(
      _plusSign_2(
        -39251520,
        _asterisk_2(
          _x2,
          _plusSign_2(
            18471600,
            _asterisk_2(_x2, _plusSign_2(-1075032, _asterisk_2(14615, _x2))),
          ),
        ),
      ),
    );
    let _denominator = _plusSign_2(
      39251520,
      _asterisk_2(
        _x2,
        _plusSign_2(
          1154160,
          _asterisk_2(_x2, _plusSign_2(16632, _asterisk_2(_x2, 127))),
        ),
      ),
    );
    /* Statements */
    return _solidus_2(_numerator, _denominator);
  }, ["x"]),
  "{ :x | let x2 = *(x, x); let numerator = -((+(-39251520, (*(x2, (+(18471600, (*(x2, (+(-1075032, (*(14615, x2))))))))))))); let denominator = +(39251520, (*(x2, (+(1154160, (*(x2, (+(16632, (*(x2, 127))))))))))); /(numerator, denominator) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ApproximateMathFunctions",
  "coshApproximation",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x2 = _asterisk_2(_x, _x);
    let _numerator = _hyphenMinus_1(
      _plusSign_2(
        39251520,
        _asterisk_2(
          _x2,
          _plusSign_2(
            18471600,
            _asterisk_2(_x2, _plusSign_2(1075032, _asterisk_2(14615, _x2))),
          ),
        ),
      ),
    );
    let _denominator = _plusSign_2(
      -39251520,
      _asterisk_2(
        _x2,
        _plusSign_2(
          1154160,
          _asterisk_2(_x2, _plusSign_2(-16632, _asterisk_2(127, _x2))),
        ),
      ),
    );
    /* Statements */
    return _solidus_2(_numerator, _denominator);
  }, ["x"]),
  "{ :x | let x2 = *(x, x); let numerator = -((+(39251520, (*(x2, (+(18471600, (*(x2, (+(1075032, (*(14615, x2))))))))))))); let denominator = +(-39251520, (*(x2, (+(1154160, (*(x2, (+(-16632, (*(127, x2))))))))))); /(numerator, denominator) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ApproximateMathFunctions",
  "expApproximation",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _numerator = _plusSign_2(
      1680,
      _asterisk_2(
        _x,
        _plusSign_2(
          840,
          _asterisk_2(
            _x,
            _plusSign_2(180, _asterisk_2(_x, _plusSign_2(20, _x))),
          ),
        ),
      ),
    );
    let _denominator = _plusSign_2(
      1680,
      _asterisk_2(
        _x,
        _plusSign_2(
          -840,
          _asterisk_2(
            _x,
            _plusSign_2(180, _asterisk_2(_x, _plusSign_2(-20, _x))),
          ),
        ),
      ),
    );
    /* Statements */
    return _solidus_2(_numerator, _denominator);
  }, ["x"]),
  "{ :x | let numerator = +(1680, (*(x, (+(840, (*(x, (+(180, (*(x, (+(20, x))))))))))))); let denominator = +(1680, (*(x, (+(-840, (*(x, (+(180, (*(x, (+(-20, x))))))))))))); /(numerator, denominator) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ApproximateMathFunctions",
  "sinApproximation",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x2 = _asterisk_2(_x, _x);
    let _numerator = _asterisk_2(
      _hyphenMinus_1(_x),
      _plusSign_2(
        -11511339840,
        _asterisk_2(
          _x2,
          _plusSign_2(
            1640635920,
            _asterisk_2(_x2, _plusSign_2(-52785432, _asterisk_2(_x2, 479249))),
          ),
        ),
      ),
    );
    let _denominator = _plusSign_2(
      11511339840,
      _asterisk_2(
        _x2,
        _plusSign_2(
          277920720,
          _asterisk_2(_x2, _plusSign_2(3177720, _asterisk_2(_x2, 18361))),
        ),
      ),
    );
    /* Statements */
    return _solidus_2(_numerator, _denominator);
  }, ["x"]),
  "{ :x | let x2 = *(x, x); let numerator = *(-(x), (+(-11511339840, (*(x2, (+(1640635920, (*(x2, (+(-52785432, (*(x2, 479249))))))))))))); let denominator = +(11511339840, (*(x2, (+(277920720, (*(x2, (+(3177720, (*(x2, 18361))))))))))); /(numerator, denominator) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ApproximateMathFunctions",
  "sinhApproximation",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x2 = _asterisk_2(_x, _x);
    let _numerator = _asterisk_2(
      _hyphenMinus_1(_x),
      _plusSign_2(
        11511339840,
        _asterisk_2(
          _x2,
          _plusSign_2(
            1640635920,
            _asterisk_2(_x2, _plusSign_2(52785432, _asterisk_2(_x2, 479249))),
          ),
        ),
      ),
    );
    let _denominator = _plusSign_2(
      -11511339840,
      _asterisk_2(
        _x2,
        _plusSign_2(
          277920720,
          _asterisk_2(_x2, _plusSign_2(-3177720, _asterisk_2(_x2, 18361))),
        ),
      ),
    );
    /* Statements */
    return _solidus_2(_numerator, _denominator);
  }, ["x"]),
  "{ :x | let x2 = *(x, x); let numerator = *(-(x), (+(11511339840, (*(x2, (+(1640635920, (*(x2, (+(52785432, (*(x2, 479249))))))))))))); let denominator = +(-11511339840, (*(x2, (+(277920720, (*(x2, (+(-3177720, (*(x2, 18361))))))))))); /(numerator, denominator) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ApproximateMathFunctions",
  "tanApproximation",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x2 = _asterisk_2(_x, _x);
    let _numerator = _asterisk_2(
      _x,
      _plusSign_2(
        -135135,
        _asterisk_2(
          _x2,
          _plusSign_2(17325, _asterisk_2(_x2, _plusSign_2(-378, _x2))),
        ),
      ),
    );
    let _denominator = _plusSign_2(
      -135135,
      _asterisk_2(
        _x2,
        _plusSign_2(
          62370,
          _asterisk_2(_x2, _plusSign_2(-3150, _asterisk_2(28, _x2))),
        ),
      ),
    );
    /* Statements */
    return _solidus_2(_numerator, _denominator);
  }, ["x"]),
  "{ :x | let x2 = *(x, x); let numerator = *(x, (+(-135135, (*(x2, (+(17325, (*(x2, (+(-378, x2))))))))))); let denominator = +(-135135, (*(x2, (+(62370, (*(x2, (+(-3150, (*(28, x2))))))))))); /(numerator, denominator) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ApproximateMathFunctions",
  "tanhApproximation",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x2 = _asterisk_2(_x, _x);
    let _numerator = _asterisk_2(
      _x,
      _plusSign_2(
        135135,
        _asterisk_2(
          _x2,
          _plusSign_2(17325, _asterisk_2(_x2, _plusSign_2(378, _x2))),
        ),
      ),
    );
    let _denominator = _plusSign_2(
      135135,
      _asterisk_2(
        _x2,
        _plusSign_2(
          62370,
          _asterisk_2(_x2, _plusSign_2(3150, _asterisk_2(28, _x2))),
        ),
      ),
    );
    /* Statements */
    return _solidus_2(_numerator, _denominator);
  }, ["x"]),
  "{ :x | let x2 = *(x, x); let numerator = *(x, (+(135135, (*(x2, (+(17325, (*(x2, (+(378, x2))))))))))); let denominator = +(135135, (*(x2, (+(62370, (*(x2, (+(3150, (*(28, x2))))))))))); /(numerator, denominator) }",
);
