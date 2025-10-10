sl.addTrait("RandomNumberGenerator", "RandomNumberGenerator");

sl.addMethodToExistingTrait(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "isRandomNumberGenerator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["self"]),
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethodToExistingTrait(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "next",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _nextRandomFloat_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.nextRandomFloat\n\t}",
);

sl.addMethodToExistingTrait(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "nextRandomFloat",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(
      _self,
      "@RandomNumberGenerator>>nextRandomFloat: type responsibility",
    );
  }, ["self"]),
  "{ :self |\n\t\tself.error('@RandomNumberGenerator>>nextRandomFloat: type responsibility')\n\t}",
);

sl.addMethodToExistingTrait(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "nextRandomFloat",
  ["self", "min", "max"],
  sl.annotateFunction(function (_self, _min, _max) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _min, _max";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(_nextRandomFloat_1(_self), _hyphenMinus_2(_max, _min)),
      _min,
    );
  }, ["self", "min", "max"]),
  "{ :self :min :max |\n\t\tself.nextRandomFloat * (max - min) + min\n\t}",
);

sl.addMethodToExistingTrait(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "nextRandomInteger",
  ["self", "min", "max"],
  sl.annotateFunction(function (_self, _min, _max) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _min, _max";
      throw new Error(errorMessage);
    } /* Statements */
    return _floor_1(_nextRandomFloat_3(_self, _min, _plusSign_2(_max, 1)));
  }, ["self", "min", "max"]),
  "{ :self :min :max |\n\t\tself.nextRandomFloat(min, max + 1).floor\n\t}",
);

sl.addMethodToExistingTrait(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomBit",
  ["self", "probablity", "shape"],
  sl.annotateFunction(function (_self, _probablity, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _probablity, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _boole_1(_randomBoolean_3(_self, _probablity, _shape));
  }, ["self", "probablity", "shape"]),
  "{ :self :probablity :shape |\n\t\tself.randomBoolean(probablity, shape).boole\n\t}",
);

sl.addMethodToExistingTrait(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomBoolean",
  ["self", "probablity", "shape"],
  sl.annotateFunction(function (_self, _probablity, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _probablity, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return (_lessThanSign_2(_nextRandomFloat_1(_self), _probablity));
      }, []),
      _shape,
    );
  }, ["self", "probablity", "shape"]),
  "{ :self :probablity :shape |\n\t\t{\n\t\t\t(self.nextRandomFloat < probablity)\n\t\t} ! shape\n\t}",
);

sl.addMethodToExistingTrait(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomByteArray",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _asByteArray_1(_randomInteger_3(_self, [0, 255], _n));
  }, ["self", "n"]),
  "{ :self :n |\n\t\tself.randomInteger([0, 255], n).asByteArray\n\t}",
);

sl.addMethodToExistingTrait(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomColour",
  ["self", "shape"],
  sl.annotateFunction(function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _RgbColour_2(
          _randomReal_3(_self, [0, 1], [3]),
          _randomReal_3(_self, [0, 1], []),
        );
      }, []),
      _shape,
    );
  }, ["self", "shape"]),
  "{ :self :shape |\n\t\t{\n\t\t\tRgbColour(\n\t\t\t\tself.randomReal([0, 1], [3]),\n\t\t\t\tself.randomReal([0, 1], [])\n\t\t\t)\n\t\t} ! shape\n\t}",
);

sl.addMethodToExistingTrait(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomComplex",
  ["self", "range", "shape"],
  sl.annotateFunction(function (_self, _range, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _range, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_range, 2);
    let _min = _at_2(__SplVar1, 1);
    let _max = _at_2(__SplVar1, 2);
    /* Statements */
    return _Complex_2(
      _randomReal_3(_self, [_real_1(_min), _real_1(_max)], _shape),
      _randomReal_3(_self, [_imaginary_1(_min), _imaginary_1(_max)], _shape),
    );
  }, ["self", "range", "shape"]),
  "{ :self :range :shape |\n\t\tlet [min, max] = range;\n\t\tComplex(\n\t\t\tself.randomReal([min.real, max.real], shape),\n\t\t\tself.randomReal([min.imaginary, max.imaginary], shape)\n\t\t)\n\t}",
);

sl.addMethodToExistingTrait(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomCycle",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _asPermutation_1(_sattoloShuffle_2(_iota_1(_anInteger), _self));
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tanInteger.iota.sattoloShuffle(self).asPermutation\n\t}",
);

sl.addMethodToExistingTrait(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomInteger",
  ["self", "range", "shape"],
  sl.annotateFunction(function (_self, _range, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _range, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _min = _min_1(_range);
    let _max = _max_1(_range);
    /* Statements */
    return _floor_1(_randomReal_3(_self, [_min, _plusSign_2(_max, 1)], _shape));
  }, ["self", "range", "shape"]),
  "{ :self :range :shape |\n\t\tlet min = range.min;\n\t\tlet max = range.max;\n\t\tself.randomReal([min, max + 1], shape).floor\n\t}",
);

sl.addMethodToExistingTrait(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomIntegerExcluding",
  ["self", "range", "aBlock:/1", "shape"],
  sl.annotateFunction(function (_self, _range, _aBlock_1, _shape) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _range, _aBlock_1, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _min = _min_1(_range);
    let _max = _max_1(_range);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _x;
        /* Statements */
        _doWhileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _x = _floor_1(
              _plusSign_2(
                _asterisk_2(
                  _nextRandomFloat_1(_self),
                  _hyphenMinus_2(_plusSign_2(_max, 1), _min),
                ),
                _min,
              ),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_1(_x);
          }, []),
        );
        return _x;
      }, []),
      _shape,
    );
  }, ["self", "range", "aBlock:/1", "shape"]),
  "{ :self :range :aBlock:/1 :shape |\n\t\tlet min = range.min;\n\t\tlet max = range.max;\n\t\t{\n\t\t\tvar x;\n\t\t\t{\n\t\t\t\tx := (self.nextRandomFloat * (max + 1 - min) + min).floor\n\t\t\t}.doWhileTrue {\n\t\t\t\taBlock(x)\n\t\t\t};\n\t\t\tx\n\t\t} ! shape\n\t}",
);

sl.addMethodToExistingTrait(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomIntegerExcludingZero",
  ["self", "range", "shape"],
  sl.annotateFunction(function (_self, _range, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _range, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _randomIntegerExcluding_4(_self, _range, _isZero_1, _shape);
  }, ["self", "range", "shape"]),
  "{ :self :range :shape |\n\t\tself.randomIntegerExcluding(range, isZero:/1, shape)\n\t}",
);

sl.addMethodToExistingTrait(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomLargeInteger",
  ["self", "max"],
  sl.annotateFunction(function (_self, _max) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _max";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _digitLength_1(_max);
    let _h = _highBitOfMagnitude_1(_max);
    let _m = _hyphenMinus_2(_circumflexAccent_2(2n, _h), 1);
    let _answer = null;
    /* Statements */
    _whileTrue_1(sl.annotateFunction(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _bytes = _randomByteArray_2(_self, _k);
      /* Statements */
      _answer = _bitAnd_2(_asLargeInteger_1(_bytes), _m);
      return _verticalLineVerticalLine_2(
        _lessThanSignEqualsSign_2(_answer, 0),
        _greaterThanSign_2(_answer, _max),
      );
    }, []));
    return _answer;
  }, ["self", "max"]),
  "{ :self :max |\n\t\tlet k = max.digitLength;\n\t\tlet h = max.highBitOfMagnitude;\n\t\tlet m = (2L ^ h) - 1;\n\t\tlet answer = nil;\n\t\t{\n\t\t\tlet bytes = self.randomByteArray(k);\n\t\t\tanswer := bytes.asLargeInteger.bitAnd(m);\n\t\t\tanswer <= 0 || (answer > max)\n\t\t}.whileTrue;\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomLargeInteger",
  ["self", "min", "max"],
  sl.annotateFunction(function (_self, _min, _max) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _min, _max";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _min,
      _randomLargeInteger_2(_self, _hyphenMinus_2(_max, _min)),
    );
  }, ["self", "min", "max"]),
  "{ :self :min :max |\n\t\tmin + self.randomLargeInteger(max - min)\n\t}",
);

sl.addMethodToExistingTrait(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomPermutation",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _asPermutation_1(_fisherYatesShuffle_2(_iota_1(_anInteger), _self));
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tanInteger.iota.fisherYatesShuffle(self).asPermutation\n\t}",
);

sl.addMethodToExistingTrait(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomPermutationList",
  ["self", "anInteger", "shape"],
  sl.annotateFunction(function (_self, _anInteger, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _randomPermutation_2(_self, _anInteger);
      }, []),
      _shape,
    );
  }, ["self", "anInteger", "shape"]),
  "{ :self :anInteger :shape |\n\t\t{\n\t\t\tself.randomPermutation(anInteger)\n\t\t} ! shape\n\t}",
);

sl.addMethodToExistingTrait(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomReal",
  ["self", "range", "shape"],
  sl.annotateFunction(function (_self, _range, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _range, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _min = _min_1(_range);
    let _max = _max_1(_range);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          _asterisk_2(_nextRandomFloat_1(_self), _hyphenMinus_2(_max, _min)),
          _min,
        );
      }, []),
      _shape,
    );
  }, ["self", "range", "shape"]),
  "{ :self :range :shape |\n\t\tlet min = range.min;\n\t\tlet max = range.max;\n\t\t{\n\t\t\tself.nextRandomFloat * (max - min) + min\n\t\t} ! shape\n\t}",
);

sl.addMethodToExistingTrait(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomSampleSmallPool",
  ["self", "aCollection", "count"],
  sl.annotateFunction(function (_self, _aCollection, _count) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _count";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _pool = _asList_1(_aCollection);
    let _answer = [];
    /* Statements */
    _ifTrue_2(
      _greaterThanSign_2(_count, _size_1(_aCollection)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _count = _size_1(_aCollection);
      }, []),
    );
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_count, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _next = _randomChoice_3(_pool, _self, []);
        /* Statements */
        _add_2(_answer, _next);
        _remove_2(_pool, _next);
        return _count = _hyphenMinus_2(_count, 1);
      }, []),
    );
    return _answer;
  }, ["self", "aCollection", "count"]),
  "{ :self :aCollection :count |\n\t\tlet pool = aCollection.asList;\n\t\tlet answer = [];\n\t\t(count > aCollection.size).ifTrue {\n\t\t\tcount := aCollection.size\n\t\t};\n\t\t{\n\t\t\tcount > 0\n\t\t}.whileTrue {\n\t\t\tlet next = pool.randomChoice(self, []);\n\t\t\tanswer.add(next);\n\t\t\tpool.remove(next);\n\t\t\tcount := count - 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomSampleLargePool",
  ["self", "aCollection", "count"],
  sl.annotateFunction(function (_self, _aCollection, _count) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _count";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _ifTrue_2(
      _greaterThanSign_2(_count, _size_1(_aCollection)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _count = _size_1(_aCollection);
      }, []),
    );
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_count, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _next = _randomChoice_3(_aCollection, _self, []);
        /* Statements */
        return _ifFalse_2(
          _includes_2(_answer, _next),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _add_2(_answer, _next);
            return _count = _hyphenMinus_2(_count, 1);
          }, []),
        );
      }, []),
    );
    return _answer;
  }, ["self", "aCollection", "count"]),
  "{ :self :aCollection :count |\n\t\tlet answer = [];\n\t\t(count > aCollection.size).ifTrue {\n\t\t\tcount := aCollection.size\n\t\t};\n\t\t{\n\t\t\tcount > 0\n\t\t}.whileTrue {\n\t\t\tlet next = aCollection.randomChoice(self, []);\n\t\t\tanswer.includes(next).ifFalse {\n\t\t\t\tanswer.add(next);\n\t\t\t\tcount := count - 1\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomSample",
  ["self", "aCollection", "count"],
  sl.annotateFunction(function (_self, _aCollection, _count) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _count";
      throw new Error(errorMessage);
    } /* Statements */
    return _randomSampleLargePool_3(_self, _aCollection, _count);
  }, ["self", "aCollection", "count"]),
  "{ :self :aCollection :count |\n\t\tself.randomSampleLargePool(aCollection, count)\n\t}",
);

sl.addMethodToExistingTrait(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomSubsequence",
  ["self", "aSequence", "aNumber"],
  sl.annotateFunction(function (_self, _aSequence, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aSequence, _aNumber";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _do_2(
      _aSequence,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _lessThanSign_2(_nextRandomFloat_1(_self), _aNumber),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _each);
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self", "aSequence", "aNumber"]),
  "{ :self :aSequence :aNumber |\n\t\tlet answer = [];\n\t\taSequence.do { :each |\n\t\t\t(self.nextRandomFloat < aNumber).ifTrue {\n\t\t\t\tanswer.add(each)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomWeightedChoice",
  ["self", "e", "w", "shape"],
  sl.annotateFunction(function (_self, _e, _w, _shape) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _e, _w, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _sum_1(_w);
    let _x = _if_3(
      _equalsSign_2(_k, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _w;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_w, _k);
      }, []),
    );
    let _m = _AliasMethod_1(_x);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_e, _nextRandom_2(_m, _self));
      }, []),
      _shape,
    );
  }, ["self", "e", "w", "shape"]),
  "{ :self :e :w :shape |\n\t\tlet k = w.sum;\n\t\tlet x = (k = 1).if { w } { w / k };\n\t\tlet m = AliasMethod(x);\n\t\t{\n\t\t\te[m.nextRandom(self)]\n\t\t} ! shape\n\t}",
);

sl.addMethodToExistingTrait(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomWeightedIndex",
  ["self", "aSequence"],
  sl.annotateFunction(function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = _nextRandomFloat_1(_self);
    let _sum = 0;
    let _answer = 1;
    /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(
        _aSequence,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          _sum = _plusSign_2(_sum, _each);
          _ifTrue_2(
            _greaterThanSign_2(_sum, _r),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_answer);
            }, []),
          );
          return _answer = _plusSign_2(_answer, 1);
        }, ["each"]),
      );
      return _answer;
    }, ["return:/1"]));
  }, ["self", "aSequence"]),
  "{ :self :aSequence |\n\t\tlet r = self.nextRandomFloat;\n\t\tlet sum = 0;\n\t\tlet answer = 1;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\taSequence.do { :each |\n\t\t\t\tsum := sum + each;\n\t\t\t\t(sum > r).ifTrue {\n\t\t\t\t\tanswer.return\n\t\t\t\t};\n\t\t\t\tanswer := answer + 1\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "reservoirSampleAlgorithmL",
  ["self", "s", "k"],
  sl.annotateFunction(function (_self, _s, _k) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _s, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_s);
    let _r = _copyFromTo_3(_s, 1, _k);
    let _w = _exp_1(_solidus_2(_log_1(_nextRandomFloat_1(_self)), _k));
    let _i = _plusSign_2(_k, 1);
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_i, _n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _i = _plusSign_2(
          _plusSign_2(
            _i,
            _floor_1(
              _solidus_2(
                _log_1(_nextRandomFloat_1(_self)),
                _log_1(_hyphenMinus_2(1, _w)),
              ),
            ),
          ),
          1,
        );
        return _ifTrue_2(
          _lessThanSignEqualsSign_2(_i, _n),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _atPut_3(_r, _nextRandomInteger_3(_self, 1, _k), _at_2(_s, _i));
            return _w = _asterisk_2(
              _w,
              _exp_1(_solidus_2(_log_1(_nextRandomFloat_1(_self)), _k)),
            );
          }, []),
        );
      }, []),
    );
    return _r;
  }, ["self", "s", "k"]),
  "{ :self :s :k |\n\t\tlet n = s.size;\n\t\tlet r = s.copyFromTo(1, k);\n\t\tlet w = (self.nextRandomFloat.log / k).exp;\n\t\tlet i = k + 1;\n\t\t{\n\t\t\ti <= n\n\t\t}.whileTrue {\n\t\t\ti := i + (self.nextRandomFloat.log / (1 - w).log).floor + 1;\n\t\t\t(i <= n).ifTrue {\n\t\t\t\tr[self.nextRandomInteger(1, k)] := s[i];\n\t\t\t\tw := w * (self.nextRandomFloat.log / k).exp\n\t\t\t}\n\t\t};\n\t\tr\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "RandomNumberGenerator",
  "isRandomNumberGenerator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  }, ["self"]),
  "{ :self |\n\t\tfalse\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "RandomNumberGenerator",
  "randomIntegerBipolar",
  ["max"],
  sl.annotateFunction(function (_max) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _max";
      throw new Error(errorMessage);
    } /* Statements */
    return _randomInteger_3(_system, [_negate_1(_max), _max], []);
  }, ["max"]),
  "{ :max |\n\t\tsystem.randomInteger([max.negate, max], [])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "RandomNumberGenerator",
  "randomReal",
  ["max", "shape"],
  sl.annotateFunction(function (_max, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _max, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _randomReal_3(_system, [0, _max], _shape);
  }, ["max", "shape"]),
  "{ :max :shape |\n\t\tsystem.randomReal([0, max], shape)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "RandomNumberGenerator",
  "randomReal",
  ["max"],
  sl.annotateFunction(function (_max) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _max";
      throw new Error(errorMessage);
    } /* Statements */
    return _randomReal_3(_system, [0, _max], []);
  }, ["max"]),
  "{ :max |\n\t\tsystem.randomReal([0, max], [])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "RandomNumberGenerator",
  "randomRealBipolar",
  ["max"],
  sl.annotateFunction(function (_max) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _max";
      throw new Error(errorMessage);
    } /* Statements */
    return _randomReal_3(_system, [_negate_1(_max), _max], []);
  }, ["max"]),
  "{ :max |\n\t\tsystem.randomReal([max.negate, max], [])\n\t}",
);
