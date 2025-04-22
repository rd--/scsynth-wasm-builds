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
  "{ :self | true }",
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
  "{ :self | nextRandomFloat(self) }",
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
  "{ :self | error(self,'@RandomNumberGenerator>>nextRandomFloat: type responsibility') }",
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
  "{ :self :min :max | +(*(nextRandomFloat(self), (-(max, min))), min) }",
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
  "{ :self :min :max | floor(nextRandomFloat(self,min, +(max, 1))) }",
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
  "{ :self :probablity :shape | boole(randomBoolean(self,probablity, shape)) }",
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
  "{ :self :probablity :shape | !({ (<(nextRandomFloat(self), probablity)) }, shape) }",
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
  "{ :self :n | asByteArray(randomInteger(self,[0, 255], n)) }",
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
  "{ :self :shape | !({ RgbColour(randomReal(self,[0, 1], [3]), randomReal(self,[0, 1], [])) }, shape) }",
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
    let _min = _min_1(_range);
    let _max = _max_1(_range);
    /* Statements */
    return _Complex_2(
      _randomReal_3(_self, [_real_1(_min), _real_1(_max)], _shape),
      _randomReal_3(_self, [_imaginary_1(_min), _imaginary_1(_max)], _shape),
    );
  }, ["self", "range", "shape"]),
  "{ :self :range :shape | let min = min(range); let max = max(range); Complex(randomReal(self,[real(min), real(max)], shape), randomReal(self,[imaginary(min), imaginary(max)], shape)) }",
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
  "{ :self :anInteger | asPermutation(sattoloShuffle(iota(anInteger),self)) }",
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
  "{ :self :range :shape | let min = min(range); let max = max(range); floor(randomReal(self,[min, +(max, 1)], shape)) }",
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
  "{ :self :range :aBlock:/1 :shape | let min = min(range); let max = max(range); !({ var x;doWhileTrue({ x := floor((+(*(nextRandomFloat(self), (-(+(max, 1), min))), min))) }, { aBlock(x) }); x }, shape) }",
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
  "{ :self :range :shape | randomIntegerExcluding(self,range, isZero:/1, shape) }",
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
  "{ :self :max | let k = digitLength(max); let h = highBitOfMagnitude(max); let m = -((^(2L, h)), 1); let answer = nil; whileTrue({ let bytes = randomByteArray(self,k); answer := bitAnd(asLargeInteger(bytes),m); ||(<=(answer, 0), (>(answer, max))) }); answer }",
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
  "{ :self :min :max | +(min, randomLargeInteger(self,-(max, min))) }",
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
  "{ :self :anInteger | asPermutation(fisherYatesShuffle(iota(anInteger),self)) }",
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
  "{ :self :anInteger :shape | !({ randomPermutation(self,anInteger) }, shape) }",
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
  "{ :self :range :shape | let min = min(range); let max = max(range); !({ +(*(nextRandomFloat(self), (-(max, min))), min) }, shape) }",
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
  "{ :self :aCollection :count | let pool = asList(aCollection); let answer = []; ifTrue((>(count, size(aCollection))), { count := size(aCollection) }); whileTrue({ >(count, 0) }, { let next = randomChoice(pool,self, []); add(answer,next); remove(pool,next); count := -(count, 1) }); answer }",
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
  "{ :self :aCollection :count | let answer = []; ifTrue((>(count, size(aCollection))), { count := size(aCollection) }); whileTrue({ >(count, 0) }, { let next = randomChoice(aCollection,self, []); ifFalse(includes(answer,next), { add(answer,next); count := -(count, 1) }) }); answer }",
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
  "{ :self :aCollection :count | randomSampleLargePool(self,aCollection, count) }",
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
  "{ :self :aSequence :aNumber | let answer = []; do(aSequence, { :each | ifTrue((<(nextRandomFloat(self), aNumber)), { add(answer,each) }) }); answer }",
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
  "{ :self :e :w :shape | let k = sum(w); let x = if((=(k, 1)), { w }, { /(w, k) }); let m = AliasMethod(x); !({ at(e, nextRandom(m,self)) }, shape) }",
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
  "{ :self :aSequence | let r = nextRandomFloat(self); let sum = 0; let answer = 1; valueWithReturn({ :return:/1 | do(aSequence, { :each | sum := +(sum, each); ifTrue((>(sum, r)), { return(answer) }); answer := +(answer, 1) }); answer }) }",
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
  "{ :self | false }",
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
    return _randomInteger_3(_system, [_negated_1(_max), _max], []);
  }, ["max"]),
  "{ :max | randomInteger(system,[negated(max), max], []) }",
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
  "{ :max :shape | randomReal(system,[0, max], shape) }",
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
  "{ :max | randomReal(system,[0, max], []) }",
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
    return _randomReal_3(_system, [_negated_1(_max), _max], []);
  }, ["max"]),
  "{ :max | randomReal(system,[negated(max), max], []) }",
);
