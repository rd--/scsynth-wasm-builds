sl.addTrait("RandomNumberGenerator", "RandomNumberGenerator");

sl.addTraitMethod(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "isRandomNumberGenerator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addTraitMethod(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "next",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _nextRandomFloat_1(_self);
  },
  "{ :self |\n\t\tself.nextRandomFloat\n\t}",
);

sl.addTraitMethod(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "nextRandomFloat",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(
      _self,
      "@RandomNumberGenerator>>nextRandomFloat: type responsibility",
    );
  },
  "{ :self |\n\t\tself.error('@RandomNumberGenerator>>nextRandomFloat: type responsibility')\n\t}",
);

sl.addTraitMethod(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "nextRandomFloat",
  ["self", "min", "max"],
  function (_self, _min, _max) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _min, _max";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(_nextRandomFloat_1(_self), _hyphenMinus_2(_max, _min)),
      _min,
    );
  },
  "{ :self :min :max |\n\t\tself.nextRandomFloat * (max - min) + min\n\t}",
);

sl.addTraitMethod(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "nextRandomInteger",
  ["self", "min", "max"],
  function (_self, _min, _max) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _min, _max";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _floor_1(_nextRandomFloat_3(_self, _min, _plusSign_2(_max, 1)));
  },
  "{ :self :min :max |\n\t\tself.nextRandomFloat(min, max + 1).floor\n\t}",
);

sl.addTraitMethod(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomBit",
  ["self", "probablity", "shape"],
  function (_self, _probablity, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _probablity, _shape";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _boole_1(_lessThanSign_2(_nextRandomFloat_1(_self), _probablity));
    }, _shape);
  },
  "{ :self :probablity :shape |\n\t\t{ (self.nextRandomFloat < probablity).boole } ! shape\n\t}",
);

sl.addTraitMethod(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomByteArray",
  ["self", "n"],
  function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asByteArray_1(_randomInteger_4(_self, 0, 255, _n));
  },
  "{ :self :n |\n\t\tself.randomInteger(0, 255, n).asByteArray\n\t}",
);

sl.addTraitMethod(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomChoice",
  ["self", "aSequence", "shape"],
  function (_self, _aSequence, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aSequence, _shape";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_aSequence);
    /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _i = _randomInteger_4(_self, 1, _k, []);
      /* Statements */
      return _at_2(_aSequence, _i);
    }, _shape);
  },
  "{ :self :aSequence :shape |\n\t\tlet k = aSequence.size;\n\t\t{\n\t\t\tlet i = self.randomInteger(1, k, []);\n\t\t\taSequence[i]\n\t\t} ! shape\n\t}",
);

sl.addTraitMethod(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomColour",
  ["self", "shape"],
  function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _Colour_4(
        _randomReal_4(_self, 0, 1, []),
        _randomReal_4(_self, 0, 1, []),
        _randomReal_4(_self, 0, 1, []),
        _randomReal_4(_self, 0, 1, []),
      );
    }, _shape);
  },
  "{ :self :shape |\n\t\t{\n\t\t\tColour(\n\t\t\t\tself.randomReal(0, 1, []),\n\t\t\t\tself.randomReal(0, 1, []),\n\t\t\t\tself.randomReal(0, 1, []),\n\t\t\t\tself.randomReal(0, 1, [])\n\t\t\t)\n\t\t} ! shape\n\t}",
);

sl.addTraitMethod(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomComplex",
  ["self", "min", "max", "shape"],
  function (_self, _min, _max, _shape) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _min, _max, _shape";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(
      _randomReal_4(_self, _real_1(_min), _real_1(_max), _shape),
      _randomReal_4(_self, _imaginary_1(_min), _imaginary_1(_max), _shape),
    );
  },
  "{ :self :min :max :shape |\n\t\tComplex(\n\t\t\tself.randomReal(min.real, max.real, shape),\n\t\t\tself.randomReal(min.imaginary, max.imaginary, shape)\n\t\t)\n\t}",
);

sl.addTraitMethod(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomCycle",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asPermutation_1(_sattoloShuffle_2(_iota_1(_anInteger), _self));
  },
  "{ :self :anInteger |\n\t\tanInteger.iota.sattoloShuffle(self).asPermutation\n\t}",
);

sl.addTraitMethod(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomInteger",
  ["self", "min", "max", "shape"],
  function (_self, _min, _max, _shape) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _min, _max, _shape";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _floor_1(_randomReal_4(_self, _min, _plusSign_2(_max, 1), _shape));
  },
  "{ :self :min :max :shape |\n\t\tself.randomReal(min, max + 1, shape).floor\n\t}",
);

sl.addTraitMethod(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomIntegerExcluding",
  ["self", "min", "max", "aBlock:/1", "shape"],
  function (_self, _min, _max, _aBlock_1, _shape) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _min, _max, _aBlock_1, _shape";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _x;
      /* Statements */
      _doWhileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
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
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_x);
      });
      return _x;
    }, _shape);
  },
  "{ :self :min :max :aBlock:/1 :shape |\n\t\t{\n\t\t\tvar x;\n\t\t\t{\n\t\t\t\tx := (self.nextRandomFloat * (max + 1 - min) + min).floor\n\t\t\t}.doWhileTrue {\n\t\t\t\taBlock(x)\n\t\t\t};\n\t\t\tx\n\t\t} ! shape\n\t}",
);

sl.addTraitMethod(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomIntegerExcludingZero",
  ["self", "min", "max", "shape"],
  function (_self, _min, _max, _shape) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _min, _max, _shape";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _randomIntegerExcluding_5(_self, _min, _max, _isZero_1, _shape);
  },
  "{ :self :min :max :shape |\n\t\tself.randomIntegerExcluding(min, max, isZero:/1, shape)\n\t}",
);

sl.addTraitMethod(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomLargeInteger",
  ["self", "max"],
  function (_self, _max) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _max";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _digitLength_1(_max);
    let _h = _highBitOfMagnitude_1(_max);
    let _m = _hyphenMinus_2(_circumflexAccent_2(2n, _h), 1);
    let _answer = null;
    /* Statements */
    _whileTrue_1(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _bytes = _randomByteArray_2(_self, _k);
      /* Statements */
      _answer = _bitAnd_2(_asLargeInteger_1(_bytes), _m);
      return _verticalLineVerticalLine_2(
        _lessThanSignEqualsSign_2(_answer, 0),
        _greaterThanSign_2(_answer, _max),
      );
    });
    return _answer;
  },
  "{ :self :max |\n\t\tlet k = max.digitLength;\n\t\tlet h = max.highBitOfMagnitude;\n\t\tlet m = (2n ^ h) - 1;\n\t\tlet answer = nil;\n\t\t{\n\t\t\tlet bytes = self.randomByteArray(k);\n\t\t\tanswer := bytes.asLargeInteger.bitAnd(m);\n\t\t\tanswer <= 0 || (answer > max)\n\t\t}.whileTrue;\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomLargeInteger",
  ["self", "min", "max"],
  function (_self, _min, _max) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _min, _max";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _min,
      _randomLargeInteger_2(_self, _hyphenMinus_2(_max, _min)),
    );
  },
  "{ :self :min :max |\n\t\tmin + self.randomLargeInteger(max - min)\n\t}",
);

sl.addTraitMethod(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomPermutation",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asPermutation_1(_fisherYatesShuffle_2(_iota_1(_anInteger), _self));
  },
  "{ :self :anInteger |\n\t\tanInteger.iota.fisherYatesShuffle(self).asPermutation\n\t}",
);

sl.addTraitMethod(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomPermutationList",
  ["self", "anInteger", "shape"],
  function (_self, _anInteger, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _shape";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _randomPermutation_2(_self, _anInteger);
    }, _shape);
  },
  "{ :self :anInteger :shape |\n\t\t{\n\t\t\tself.randomPermutation(anInteger)\n\t\t} ! shape\n\t}",
);

sl.addTraitMethod(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomReal",
  ["self", "min", "max", "shape"],
  function (_self, _min, _max, _shape) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _min, _max, _shape";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSign_2(
        _asterisk_2(_nextRandomFloat_1(_self), _hyphenMinus_2(_max, _min)),
        _min,
      );
    }, _shape);
  },
  "{ :self :min :max :shape |\n\t\t{\n\t\t\tself.nextRandomFloat * (max - min) + min\n\t\t} ! shape\n\t}",
);

sl.addTraitMethod(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomSampleSmallPool",
  ["self", "aCollection", "count"],
  function (_self, _aCollection, _count) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _count";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _pool = _asList_1(_aCollection);
    let _answer = [];
    /* Statements */
    _ifTrue_2(_greaterThanSign_2(_count, _size_1(_aCollection)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _count = _size_1(_aCollection);
    });
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _greaterThanSign_2(_count, 0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _next = _randomChoice_3(_self, _pool, []);
      /* Statements */
      _add_2(_answer, _next);
      _remove_2(_pool, _next);
      return _count = _hyphenMinus_2(_count, 1);
    });
    return _answer;
  },
  "{ :self :aCollection :count |\n\t\tlet pool = aCollection.asList;\n\t\tlet answer = [];\n\t\t(count > aCollection.size).ifTrue {\n\t\t\tcount := aCollection.size\n\t\t};\n\t\t{\n\t\t\tcount > 0\n\t\t}.whileTrue {\n\t\t\tlet next = self.randomChoice(pool, []);\n\t\t\tanswer.add(next);\n\t\t\tpool.remove(next);\n\t\t\tcount := count - 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomSampleLargePool",
  ["self", "aCollection", "count"],
  function (_self, _aCollection, _count) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _count";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _ifTrue_2(_greaterThanSign_2(_count, _size_1(_aCollection)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _count = _size_1(_aCollection);
    });
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _greaterThanSign_2(_count, 0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _next = _randomChoice_3(_self, _aCollection, []);
      /* Statements */
      return _ifFalse_2(_includes_2(_answer, _next), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_answer, _next);
        return _count = _hyphenMinus_2(_count, 1);
      });
    });
    return _answer;
  },
  "{ :self :aCollection :count |\n\t\tlet answer = [];\n\t\t(count > aCollection.size).ifTrue {\n\t\t\tcount := aCollection.size\n\t\t};\n\t\t{\n\t\t\tcount > 0\n\t\t}.whileTrue {\n\t\t\tlet next = self.randomChoice(aCollection, []);\n\t\t\tanswer.includes(next).ifFalse {\n\t\t\t\tanswer.add(next);\n\t\t\t\tcount := count - 1\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomSample",
  ["self", "aCollection", "count"],
  function (_self, _aCollection, _count) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _count";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _randomSampleLargePool_3(_self, _aCollection, _count);
  },
  "{ :self :aCollection :count |\n\t\tself.randomSampleLargePool(aCollection, count)\n\t}",
);

sl.addTraitMethod(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomSubsequence",
  ["self", "aSequence", "aNumber"],
  function (_self, _aSequence, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aSequence, _aNumber";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _do_2(_aSequence, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ifTrue_2(
        _lessThanSign_2(_nextRandomFloat_1(_self), _aNumber),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _add_2(_answer, _each);
        },
      );
    });
    return _answer;
  },
  "{ :self :aSequence :aNumber |\n\t\tlet answer = [];\n\t\taSequence.do { :each |\n\t\t\t(self.nextRandomFloat < aNumber).ifTrue {\n\t\t\t\tanswer.add(each)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomWeightedChoice",
  ["self", "e", "w", "n"],
  function (_self, _e, _w, _n) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _e, _w, _n";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _sum_1(_w);
    let _x = _if_3(_equalsSign_2(_k, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _w;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(_w, _k);
    });
    let _m = _AliasMethod_2(_x, _self);
    /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _at_2(_e, _next_1(_m));
    }, _n);
  },
  "{ :self :e :w :n |\n\t\tlet k = w.sum;\n\t\tlet x = (k = 1).if { w } { w / k };\n\t\tlet m = AliasMethod(x, self);\n\t\t{ e[m.next] } ! n\n\t}",
);

sl.addTraitMethod(
  "RandomNumberGenerator",
  "RandomNumberGenerator",
  "randomWeightedIndex",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = _nextRandomFloat_1(_self);
    let _sum = 0;
    let _answer = 1;
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(_aSequence, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        _sum = _plusSign_2(_sum, _each);
        _ifTrue_2(_greaterThanSign_2(_sum, _r), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _return_1(_answer);
        });
        return _answer = _plusSign_2(_answer, 1);
      });
      return _answer;
    });
  },
  "{ :self :aSequence |\n\t\tlet r = self.nextRandomFloat;\n\t\tlet sum = 0;\n\t\tlet answer = 1;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\taSequence.do { :each |\n\t\t\t\tsum := sum + each;\n\t\t\t\t(sum > r).ifTrue {\n\t\t\t\t\tanswer.return\n\t\t\t\t};\n\t\t\t\tanswer := answer + 1\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "RandomNumberGenerator",
  "isRandomNumberGenerator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "RandomNumberGenerator",
  "randomIntegerBipolar",
  ["max"],
  function (_max) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _max";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _randomInteger_4(_system, _negated_1(_max), _max, []);
  },
  "{ :max |\n\t\tsystem.randomInteger(max.negated, max, [])\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "RandomNumberGenerator",
  "randomReal",
  ["max", "shape"],
  function (_max, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _max, _shape";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _randomReal_4(_system, 0, _max, _shape);
  },
  "{ :max :shape |\n\t\tsystem.randomReal(0, max, shape)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "RandomNumberGenerator",
  "randomReal",
  ["max"],
  function (_max) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _max";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _randomReal_4(_system, 0, _max, []);
  },
  "{ :max |\n\t\tsystem.randomReal(0, max, [])\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "RandomNumberGenerator",
  "randomRealBipolar",
  ["max"],
  function (_max) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _max";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _randomReal_4(_system, _negated_1(_max), _max, []);
  },
  "{ :max |\n\t\tsystem.randomReal(max.negated, max, [])\n\t}",
);
