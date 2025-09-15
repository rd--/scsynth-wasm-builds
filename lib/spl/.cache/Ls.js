/*  Requires: BlockStream  */

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Ls",
  "LsCons",
  ["anObject", "aStream"],
  sl.annotateFunction(function (_anObject, _aStream) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _anObject, _aStream";
      throw new Error(errorMessage);
    } /* Statements */
    return _LsCat_1([_LsOnce_1(_anObject), _aStream]);
  }, ["anObject", "aStream"]),
  "{ :anObject :aStream | LsCat([LsOnce(anObject), aStream]) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Ls",
  "LsConstant",
  ["anObject"],
  sl.annotateFunction(function (_anObject) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _LsForever_1(_anObject);
  }, ["anObject"]),
  "{ :anObject | LsForever(anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Ls",
  "LsForever",
  ["anObject"],
  sl.annotateFunction(function (_anObject) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _anObject;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        }
      }, []),
    );
  }, ["anObject"]),
  "{ :anObject | BlockStream({ anObject }, {  }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Ls",
  "LsOnce",
  ["anObject"],
  sl.annotateFunction(function (_anObject) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _asStream_1([_anObject]);
  }, ["anObject"]),
  "{ :anObject | asStream([anObject]) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Ls",
  "LsUnfold",
  ["aBlock:/1", "start"],
  sl.annotateFunction(function (_aBlock_1, _start) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _aBlock_1, _start";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _next = _start;
    /* Statements */
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _next;
        /* Statements */
        _next = _aBlock_1(_next);
        return _answer;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _next = _start;
      }, []),
    );
  }, ["aBlock:/1", "start"]),
  "{ :aBlock:/1 :start | let next = start; BlockStream({ let answer = next; next := aBlock(next); answer }, { next := start }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Ls",
  "LsUnfold",
  ["aBlock:/1", "start", "length"],
  sl.annotateFunction(function (_aBlock_1, _start, _length) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _aBlock_1, _start, _length";
      throw new Error(errorMessage);
    } /* Statements */
    return _take_2(_LsUnfold_2(_aBlock_1, _start), _length);
  }, ["aBlock:/1", "start", "length"]),
  "{ :aBlock:/1 :start :length | take(LsUnfold(aBlock:/1, start),length) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Ls",
  "LsFin",
  ["count", "input"],
  sl.annotateFunction(function (_count, _input) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _count, _input";
      throw new Error(errorMessage);
    } /* Statements */
    return _take_2(_input, _count);
  }, ["count", "input"]),
  "{ :count :input | take(input,count) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Ls",
  "LsGeom",
  ["start", "grow", "length"],
  sl.annotateFunction(function (_start, _grow, _length) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _grow, _length";
      throw new Error(errorMessage);
    } /* Statements */
    return _LsUnfold_3(
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(_each, _grow);
      }, ["each"]),
      _start,
      _length,
    );
  }, ["start", "grow", "length"]),
  "{ :start :grow :length | LsUnfold({ :each | *(each, grow) }, start, length) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Ls",
  "LsSeries",
  ["start", "step", "length"],
  sl.annotateFunction(function (_start, _step, _length) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _step, _length";
      throw new Error(errorMessage);
    } /* Statements */
    return _LsUnfold_3(
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(_each, _step);
      }, ["each"]),
      _start,
      _length,
    );
  }, ["start", "step", "length"]),
  "{ :start :step :length | LsUnfold({ :each | +(each, step) }, start, length) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Ls",
  "LsAt",
  ["list", "indices"],
  sl.annotateFunction(function (_list, _indices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _indices";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _indices,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_list, _each);
      }, ["each"]),
    );
  }, ["list", "indices"]),
  "{ :list :indices | collect(indices, { :each | at(list, each) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Ls",
  "LsAtFold",
  ["list", "indices"],
  sl.annotateFunction(function (_list, _indices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _indices";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _indices,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _atFold_2(_list, _each);
      }, ["each"]),
    );
  }, ["list", "indices"]),
  "{ :list :indices | collect(indices, { :each | atFold(list,each) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Ls",
  "LsAtWrap",
  ["list", "indices"],
  sl.annotateFunction(function (_list, _indices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _indices";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _indices,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _atWrap_2(_list, _each);
      }, ["each"]),
    );
  }, ["list", "indices"]),
  "{ :list :indices | collect(indices, { :each | atWrap(list,each) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Ls",
  "LsCat",
  ["list"],
  sl.annotateFunction(function (_list) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _list";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = 1;
    /* Statements */
    _replace_2(_list, _LsOnce_1);
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSign_2(_index, _size_1(_list)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return null;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _next = _next_1(_at_2(_list, _index));
            /* Statements */
            _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ampersand_2(
                  _isNil_1(_next),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _lessThanSign_2(_index, _size_1(_list));
                  }, []),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _index = _plusSign_2(_index, 1);
                return _next = _next_1(_at_2(_list, _index));
              }, []),
            );
            return _next;
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _do_2(_list, _reset_1);
        return _index = 1;
      }, []),
    );
  }, ["list"]),
  "{ :list | let index = 1; replace(list,LsOnce:/1); BlockStream({ if((>(index, size(list))), { nil }, { let next = next(at(list, index)); whileTrue({ &(isNil(next), { <(index, size(list)) }) }, { index := +(index, 1); next := next(at(list, index)) }); next }) }, { do(list,reset:/1); index := 1 }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Ls",
  "LsCyc",
  ["list"],
  sl.annotateFunction(function (_list) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _list";
      throw new Error(errorMessage);
    } /* Statements */
    return _LsSeq_2(_list, Infinity);
  }, ["list"]),
  "{ :list | LsSeq(list, Infinity) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Ls",
  "LsLace",
  ["list"],
  sl.annotateFunction(function (_list) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _list";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = 1;
    /* Statements */
    _replace_2(_list, _LsForever_1);
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _next = _next_1(_at_2(_list, _index));
        /* Statements */
        _if_3(
          _greaterThanSignEqualsSign_2(_index, _size_1(_list)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _index = 1;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _index = _plusSign_2(_index, 1);
          }, []),
        );
        return _next;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _do_2(_list, _reset_1);
        return _index = 1;
      }, []),
    );
  }, ["list"]),
  "{ :list | let index = 1; replace(list,LsForever:/1); BlockStream({ let next = next(at(list, index)); if((>=(index, size(list))), { index := 1 }, { index := +(index, 1) }); next }, { do(list,reset:/1); index := 1 }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Ls",
  "LsLace",
  ["list", "count"],
  sl.annotateFunction(function (_list, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _count";
      throw new Error(errorMessage);
    } /* Statements */
    return _take_2(_LsLace_1(_list), _count);
  }, ["list", "count"]),
  "{ :list :count | take(LsLace(list),count) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Ls",
  "LsPermutations",
  ["list"],
  sl.annotateFunction(function (_list) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _list";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _local = _copy_1(_list);
    let _next = _local;
    /* Statements */
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _copy_1(_next);
        /* Statements */
        _next = _nextPermutationLexicographic_1(_local);
        return _answer;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _local = _copy_1(_list);
      }, []),
    );
  }, ["list"]),
  "{ :list | let local = copy(list); let next = local; BlockStream({ let answer = copy(next); next := nextPermutationLexicographic(local); answer }, { local := copy(list) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Ls",
  "LsRand",
  ["list", "randomNumberGenerator"],
  sl.annotateFunction(function (_list, _randomNumberGenerator) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _randomNumberGenerator";
      throw new Error(errorMessage);
    } /* Statements */
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _randomChoice_3(_list, _randomNumberGenerator, []);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        }
      }, []),
    );
  }, ["list", "randomNumberGenerator"]),
  "{ :list :randomNumberGenerator | BlockStream({ randomChoice(list,randomNumberGenerator, []) }, {  }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Ls",
  "LsRand",
  ["list", "count", "randomNumberGenerator"],
  sl.annotateFunction(function (_list, _count, _randomNumberGenerator) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _list, _count, _randomNumberGenerator";
      throw new Error(errorMessage);
    } /* Statements */
    return _take_2(_LsRand_2(_list, _randomNumberGenerator), _count);
  }, ["list", "count", "randomNumberGenerator"]),
  "{ :list :count :randomNumberGenerator | take(LsRand(list, randomNumberGenerator),count) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Ls",
  "LsSeq",
  ["list", "repeats"],
  sl.annotateFunction(function (_list, _repeats) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _repeats";
      throw new Error(errorMessage);
    } /* Statements */
    return _LsN_2(_LsCat_1(_list), _repeats);
  }, ["list", "repeats"]),
  "{ :list :repeats | LsN(LsCat(list), repeats) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Ls",
  "LsSer",
  ["list", "count"],
  sl.annotateFunction(function (_list, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _count";
      throw new Error(errorMessage);
    } /* Statements */
    return _LsTake_2(_LsCyc_1(_list), _count);
  }, ["list", "count"]),
  "{ :list :count | LsTake(LsCyc(list), count) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Ls",
  "LsSwitch",
  ["list", "which"],
  sl.annotateFunction(function (_list, _which) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _which";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = null;
    /* Statements */
    _replace_2(_list, _LsOnce_1);
    _which = _LsForever_1(_which);
    _index = _next_1(_which);
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _next = _next_1(_at_2(_list, _index));
        /* Statements */
        _ifNil_2(
          _next,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _reset_1(_at_2(_list, _index));
            _index = _next_1(_which);
            return _next = _next_1(_at_2(_list, _index));
          }, []),
        );
        return _next;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _do_2(_list, _reset_1);
        return _reset_1(_which);
      }, []),
    );
  }, ["list", "which"]),
  "{ :list :which | let index = nil; replace(list,LsOnce:/1); which := LsForever(which); index := next(which); BlockStream({ let next = next(at(list, index)); ifNil(next, { reset(at(list, index)); index := next(which); next := next(at(list, index)) }); next }, { do(list,reset:/1); reset(which) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Ls",
  "LsSwitch1",
  ["list", "which"],
  sl.annotateFunction(function (_list, _which) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _which";
      throw new Error(errorMessage);
    } /* Statements */
    _replace_2(_list, _LsForever_1);
    _which = _LsForever_1(_which);
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _next_1(_at_2(_list, _next_1(_which)));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _do_2(_list, _reset_1);
        return _reset_1(_which);
      }, []),
    );
  }, ["list", "which"]),
  "{ :list :which | replace(list,LsForever:/1); which := LsForever(which); BlockStream({ next(at(list, next(which))) }, { do(list,reset:/1); reset(which) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Ls",
  "LsTuple",
  ["list", "repeats"],
  sl.annotateFunction(function (_list, _repeats) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _repeats";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _count = _repeats;
    /* Statements */
    _replace_2(_list, _LsOnce_1);
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSignEqualsSign_2(_count, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return null;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _next = _collect_2(_list, _next_1);
            /* Statements */
            _ifTrue_2(
              _anySatisfy_2(_next, _isNil_1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _count = _hyphenMinus_2(_count, 1);
                _do_2(_list, _reset_1);
                return _next = _collect_2(_list, _next_1);
              }, []),
            );
            return _next;
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _do_2(_list, _reset_1);
        return _count = _repeats;
      }, []),
    );
  }, ["list", "repeats"]),
  "{ :list :repeats | let count = repeats; replace(list,LsOnce:/1); BlockStream({ if((<=(count, 0)), { nil }, { let next = collect(list,next:/1); ifTrue(anySatisfy(next,isNil:/1), { count := -(count, 1); do(list,reset:/1); next := collect(list,next:/1) }); next }) }, { do(list,reset:/1); count := repeats }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Ls",
  "LsWalk",
  ["list", "steps"],
  sl.annotateFunction(function (_list, _steps) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _steps";
      throw new Error(errorMessage);
    } /* Statements */
    return _LsAtFold_2(_list, _LsAccum_1(_LsConstant_1(_steps)));
  }, ["list", "steps"]),
  "{ :list :steps | LsAtFold(list, LsAccum(LsConstant(steps))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Ls",
  "LsXRand",
  ["list", "randomNumberGenerator"],
  sl.annotateFunction(function (_list, _randomNumberGenerator) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _randomNumberGenerator";
      throw new Error(errorMessage);
    } /* Statements */
    return _LsRemDup_1(_LsRand_2(_list, _randomNumberGenerator));
  }, ["list", "randomNumberGenerator"]),
  "{ :list :randomNumberGenerator | LsRemDup(LsRand(list, randomNumberGenerator)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Ls",
  "LsXRand",
  ["list", "count", "randomNumberGenerator"],
  sl.annotateFunction(function (_list, _count, _randomNumberGenerator) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _list, _count, _randomNumberGenerator";
      throw new Error(errorMessage);
    } /* Statements */
    return _take_2(_LsXRand_2(_list, _randomNumberGenerator), _count);
  }, ["list", "count", "randomNumberGenerator"]),
  "{ :list :count :randomNumberGenerator | take(LsXRand(list, randomNumberGenerator),count) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "Ls",
  "LsAccum",
  ["input"],
  sl.annotateFunction(function (_input) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _input";
      throw new Error(errorMessage);
    } /* Statements */
    return _LsScan_2(_input, _plusSign_2);
  }, ["input"]),
  "{ :input | LsScan(input, +) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "Ls",
  "LsAdjacent",
  ["input", "aBlock:/2"],
  sl.annotateFunction(function (_input, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _previous = _next_1(_input);
    /* Statements */
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _next = _next_1(_input);
        /* Statements */
        return _if_3(
          _isNil_1(_next),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return null;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _answer = _aBlock_2(_previous, _next);
            /* Statements */
            _previous = _next;
            return _answer;
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _reset_1(_input);
        return _previous = _next_1(_input);
      }, []),
    );
  }, ["input", "aBlock:/2"]),
  "{ :input :aBlock:/2 | let previous = next(input); BlockStream({ let next = next(input); if(isNil(next), { nil }, { let answer = aBlock(previous, next); previous := next; answer }) }, { reset(input); previous := next(input) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "Ls",
  "LsClump",
  ["input", "size"],
  sl.annotateFunction(function (_input, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _size";
      throw new Error(errorMessage);
    } /* Statements */
    _size = _LsForever_1(_size);
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _nextOrUpToEnd_2(_input, _next_1(_size));
        /* Statements */
        return _if_3(
          _isEmpty_1(_answer),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return null;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _answer;
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _reset_1(_input);
        return _reset_1(_size);
      }, []),
    );
  }, ["input", "size"]),
  "{ :input :size | size := LsForever(size); BlockStream({ let answer = nextOrUpToEnd(input,next(size)); if(isEmpty(answer), { nil }, { answer }) }, { reset(input); reset(size) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "Ls",
  "LsClutch",
  ["input", "latch", "initialValue"],
  sl.annotateFunction(function (_input, _latch, _initialValue) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _latch, _initialValue";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _previous = _initialValue;
    /* Statements */
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _ifTrue_2(
          _asBoolean_1(_next_1(_latch)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _previous = _next_1(_input);
          }, []),
        );
        return _previous;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _reset_1(_input);
        return _reset_1(_latch);
      }, []),
    );
  }, ["input", "latch", "initialValue"]),
  "{ :input :latch :initialValue | let previous = initialValue; BlockStream({ ifTrue(asBoolean(next(latch)), { previous := next(input) }); previous }, { reset(input); reset(latch) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "Ls",
  "LsCollect",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _aBlock_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | collect(self,aBlock:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "Ls",
  "LsConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self | self }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "Ls",
  "LsDiff",
  ["input"],
  sl.annotateFunction(function (_input) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _input";
      throw new Error(errorMessage);
    } /* Statements */
    return _LsAdjacent_2(_input, _swap_1(_hyphenMinus_2));
  }, ["input"]),
  "{ :input | LsAdjacent(input, swap(-)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "Ls",
  "LsDrop",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _drop_2(_self, _anInteger);
  }, ["self", "anInteger"]),
  "{ :self :anInteger | drop(self,anInteger) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "Ls",
  "LsDupEach",
  ["input", "repeats"],
  sl.annotateFunction(function (_input, _repeats) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _repeats";
      throw new Error(errorMessage);
    } /* Statements */
    return _duplicateEach_2(_input, _LsForever_1(_repeats));
  }, ["input", "repeats"]),
  "{ :input :repeats | duplicateEach(input,LsForever(repeats)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "Ls",
  "LsFold",
  ["input", "aBlock:/2"],
  sl.annotateFunction(function (_input, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _LsLast_1(_LsScan_2(_input, _aBlock_2));
  }, ["input", "aBlock:/2"]),
  "{ :input :aBlock:/2 | LsLast(LsScan(input, aBlock:/2)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "Ls",
  "LsForever",
  ["input"],
  sl.annotateFunction(function (_input) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _input";
      throw new Error(errorMessage);
    } /* Statements */
    return _LsN_2(_input, Infinity);
  }, ["input"]),
  "{ :input | LsN(input, Infinity) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "Ls",
  "LsLast",
  ["input"],
  sl.annotateFunction(function (_input) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _input";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _next_1(_input);
    let _next = null;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _next = _next_1(_input);
        return _isNotNil_1(_next);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _next;
      }, []),
    );
    return _answer;
  }, ["input"]),
  "{ :input | let answer = next(input); let next = nil; whileTrue({ next := next(input); isNotNil(next) }, { answer := next }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "Ls",
  "LsN",
  ["input", "repeats"],
  sl.annotateFunction(function (_input, _repeats) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _repeats";
      throw new Error(errorMessage);
    } /* Statements */
    return _repeat_2(_input, _repeats);
  }, ["input", "repeats"]),
  "{ :input :repeats | repeat(input,repeats) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "Ls",
  "LsOnce",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self | self }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "Ls",
  "LsRemDup",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeSuccesiveDuplicates_1(_self);
  }, ["self"]),
  "{ :self | removeSuccesiveDuplicates(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "Ls",
  "LsScan",
  ["input", "aBlock:/2"],
  sl.annotateFunction(function (_input, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _scan_2(_input, _aBlock_2);
  }, ["input", "aBlock:/2"]),
  "{ :input :aBlock:/2 | scan(input,aBlock:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "Ls",
  "LsSlidingWindows",
  ["input", "windowSize", "stepSize"],
  sl.annotateFunction(function (_input, _windowSize, _stepSize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _windowSize, _stepSize";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _overlap = _max_2(_hyphenMinus_2(_windowSize, _stepSize), 0);
    let _require = _hyphenMinus_2(_windowSize, _overlap);
    let _skip = _max_2(_hyphenMinus_2(_stepSize, _windowSize), 0);
    let _window = _next_2(_input, _overlap);
    /* Statements */
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _current = _nextOrUpToEnd_2(_input, _require);
        /* Statements */
        return _if_3(
          _exclamationMarkEqualsSign_2(_size_1(_current), _require),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return null;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _answer = _plusSignPlusSign_2(_window, _current);
            /* Statements */
            _ifTrue_2(
              _greaterThanSign_2(_skip, 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _next_2(_input, _skip);
              }, []),
            );
            _addAll_2(_window, _current);
            _removeFirst_2(_window, _require);
            return _answer;
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _reset_1(_input);
        return _window = _next_2(_input, _overlap);
      }, []),
    );
  }, ["input", "windowSize", "stepSize"]),
  "{ :input :windowSize :stepSize | let overlap = max((-(windowSize, stepSize)),0); let require = -(windowSize, overlap); let skip = max((-(stepSize, windowSize)),0); let window = next(input,overlap); BlockStream({ let current = nextOrUpToEnd(input,require); if((!=(size(current), require)), { nil }, { let answer = ++(window, current); ifTrue((>(skip, 0)), { next(input,skip) }); addAll(window,current); removeFirst(window,require); answer }) }, { reset(input); window := next(input,overlap) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "Ls",
  "LsTake",
  ["input", "anInteger"],
  sl.annotateFunction(function (_input, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _take_2(_input, _anInteger);
  }, ["input", "anInteger"]),
  "{ :input :anInteger | take(input,anInteger) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "Ls",
  "LsTrace",
  ["input"],
  sl.annotateFunction(function (_input) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _input";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _input,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _postLine_1(_each);
        return _each;
      }, ["each"]),
    );
  }, ["input"]),
  "{ :input | collect(input, { :each | postLine(each); each }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "Ls",
  "play",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _absoluteTime = _absoluteTime_1(_system);
    let _sessionTime = _sessionTime_1(_system);
    let _timeDifference = _hyphenMinus_2(_absoluteTime, _sessionTime);
    /* Statements */
    return _schedule_1(sl.annotateFunction(function (_currentTime) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _currentTime";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _next = _next_1(_self);
      /* Statements */
      return _ifNil_3(
        _next,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return null;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _dur = _at_2(_next, "dur");
          let _events = _multiChannelExpand_1(_next);
          let _packets = _collectCatenate_2(
            _events,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _asPatternEventMessages_2(
                _each,
                _plusSign_2(_currentTime, _timeDifference),
              );
            }, ["each"]),
          );
          /* Statements */
          _do_2(
            _packets,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _sendOsc_2(_scSynth_1(_system), _each);
            }, ["each"]),
          );
          return _dur;
        }, []),
      );
    }, ["currentTime"]));
  }, ["self"]),
  "{ :self | let absoluteTime = absoluteTime(system); let sessionTime = sessionTime(system); let timeDifference = -(absoluteTime, sessionTime); schedule({ :currentTime | let next = next(self); ifNil(next, { nil }, { let dur = at(next, 'dur'); let events = multiChannelExpand(next); let packets = collectCatenate(events, { :each | asPatternEventMessages(each,+(currentTime, timeDifference)) }); do(packets, { :each | sendOsc(scSynth(system),each) }); dur }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "Ls",
  "asPatternEventMessages",
  ["self", "currentTime"],
  sl.annotateFunction(function (_self, _currentTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _currentTime";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _latency = 0.2;
    let _instrument = _at_2(_self, "instrument");
    let _synthId = _plusSign_2(100, _uniqueId_1(_system));
    let _addAction = 0;
    let _targetNode = 1;
    let _sNewMessage = _OscMessage_2(
      "/s_new",
      _plusSignPlusSign_2(
        [_instrument, _synthId, _addAction, _targetNode],
        _collectCatenate_2(
          _associations_1(_self),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return [_key_1(_each), _value_1(_each)];
          }, ["each"]),
        ),
      ),
    );
    let _sNewBundle = _OscBundle_2(_plusSign_2(_currentTime, _latency), [
      _sNewMessage,
    ]);
    /* Statements */
    return _if_3(
      _includesKey_2(_self, "gate"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _sustain = _at_2(_self, "sustain");
        let _releaseTime = _plusSign_2(_currentTime, _sustain);
        let _nSetMessage = _OscMessage_2("/n_set", [_synthId, "gate", 0]);
        let _nSetBundle = _OscBundle_2(_plusSign_2(_releaseTime, _latency), [
          _nSetMessage,
        ]);
        /* Statements */
        return [_sNewBundle, _nSetBundle];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [_sNewBundle];
      }, []),
    );
  }, ["self", "currentTime"]),
  "{ :self :currentTime | let latency = 0.2; let instrument = at(self, 'instrument'); let synthId = +(100, uniqueId(system)); let addAction = 0; let targetNode = 1; let sNewMessage = OscMessage('/s_new', ++([instrument, synthId, addAction, targetNode], collectCatenate(associations(self), { :each | [key(each), value(each)] }))); let sNewBundle = OscBundle(+(currentTime, latency), [sNewMessage]); if(includesKey(self,'gate'), { let sustain = at(self, 'sustain'); let releaseTime = +(currentTime, sustain); let nSetMessage = OscMessage('/n_set', [synthId, 'gate', 0]); let nSetBundle = OscBundle(+(releaseTime, latency), [nSetMessage]); [sNewBundle, nSetBundle] }, { [sNewBundle] }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "Ls",
  "LsBind",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _atEnd = false;
    /* Statements */
    _replace_2(_self, _LsConstant_1);
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _atEnd,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return null;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _next = _collect_2(_self, _next_1);
            /* Statements */
            return _if_3(
              _anySatisfy_2(_next, _isNil_1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _atEnd = true;
                return null;
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _next;
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
        _do_2(_self, _reset_1);
        return _atEnd = false;
      }, []),
    );
  }, ["self"]),
  "{ :self | let atEnd = false; replace(self,LsConstant:/1); BlockStream({ if(atEnd, { nil }, { let next = collect(self,next:/1); if(anySatisfy(next,isNil:/1), { atEnd := true; nil }, { next }) }) }, { do(self,reset:/1); atEnd := false }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Ls",
  "LsBeta",
  ["low", "high", "p1", "p2", "length", "randomNumberGenerator"],
  sl.annotateFunction(
    function (_low, _high, _p1, _p2, _length, _randomNumberGenerator) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _low, _high, _p1, _p2, _length, _randomNumberGenerator";
        throw new Error(errorMessage);
      } /* Statements */
      _low = _LsConstant_1(_low);
      _high = _LsConstant_1(_high);
      _p1 = _LsConstant_1(_p1);
      _p2 = _LsConstant_1(_p2);
      return _take_2(
        _BlockStream_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _lhs = _next_1(_low);
            let _rhs = _next_1(_high);
            /* Statements */
            return _plusSign_2(
              _asterisk_2(
                _betaDistribution_3(
                  _randomNumberGenerator,
                  _next_1(_p1),
                  _next_1(_p2),
                ),
                _hyphenMinus_2(_rhs, _lhs),
              ),
              _lhs,
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _reset_1(_low);
            _reset_1(_high);
            _reset_1(_p1);
            return _reset_1(_p2);
          }, []),
        ),
        _length,
      );
    },
    ["low", "high", "p1", "p2", "length", "randomNumberGenerator"],
  ),
  "{ :low :high :p1 :p2 :length :randomNumberGenerator | low := LsConstant(low); high := LsConstant(high); p1 := LsConstant(p1); p2 := LsConstant(p2); take(BlockStream({ let lhs = next(low); let rhs = next(high); +(*(betaDistribution(randomNumberGenerator,next(p1), next(p2)), (-(rhs, lhs))), lhs) }, { reset(low); reset(high); reset(p1); reset(p2) }),length) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "Ls",
  "LsBeta",
  ["low", "high", "p1", "p2", "length", "randomNumberGenerator"],
  sl.annotateFunction(
    function (_low, _high, _p1, _p2, _length, _randomNumberGenerator) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _low, _high, _p1, _p2, _length, _randomNumberGenerator";
        throw new Error(errorMessage);
      } /* Statements */
      _low = _LsConstant_1(_low);
      _high = _LsConstant_1(_high);
      _p1 = _LsConstant_1(_p1);
      _p2 = _LsConstant_1(_p2);
      return _take_2(
        _BlockStream_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _lhs = _next_1(_low);
            let _rhs = _next_1(_high);
            /* Statements */
            return _plusSign_2(
              _asterisk_2(
                _betaDistribution_3(
                  _randomNumberGenerator,
                  _next_1(_p1),
                  _next_1(_p2),
                ),
                _hyphenMinus_2(_rhs, _lhs),
              ),
              _lhs,
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _reset_1(_low);
            _reset_1(_high);
            _reset_1(_p1);
            return _reset_1(_p2);
          }, []),
        ),
        _length,
      );
    },
    ["low", "high", "p1", "p2", "length", "randomNumberGenerator"],
  ),
  "{ :low :high :p1 :p2 :length :randomNumberGenerator | low := LsConstant(low); high := LsConstant(high); p1 := LsConstant(p1); p2 := LsConstant(p2); take(BlockStream({ let lhs = next(low); let rhs = next(high); +(*(betaDistribution(randomNumberGenerator,next(p1), next(p2)), (-(rhs, lhs))), lhs) }, { reset(low); reset(high); reset(p1); reset(p2) }),length) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Ls",
  "LsBrownUsing",
  ["low", "high", "step", "randomNumberGenerator", "aBlock:/3"],
  sl.annotateFunction(
    function (_low, _high, _step, _randomNumberGenerator, _aBlock_3) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _low, _high, _step, _randomNumberGenerator, _aBlock_3";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _next = null;
      /* Statements */
      _low = _LsConstant_1(_low);
      _high = _LsConstant_1(_high);
      _step = _LsConstant_1(_step);
      _next = _aBlock_3(
        _randomNumberGenerator,
        [_next_1(_low), _next_1(_high)],
        [],
      );
      return _withAndCollect_4(
        _low,
        _high,
        _step,
        sl.annotateFunction(function (_low, _high, _step) {
          /* ArityCheck */
          if (arguments.length !== 3) {
            const errorMessage = "Arity: expected 3, _low, _high, _step";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _answer = _next;
          /* Statements */
          _next = _fold_3(
            _plusSign_2(
              _next,
              _aBlock_3(_randomNumberGenerator, [_negate_1(_step), _step], []),
            ),
            _low,
            _high,
          );
          return _answer;
        }, ["low", "high", "step"]),
      );
    },
    ["low", "high", "step", "randomNumberGenerator", "aBlock:/3"],
  ),
  "{ :low :high :step :randomNumberGenerator :aBlock:/3 | let next = nil; low := LsConstant(low); high := LsConstant(high); step := LsConstant(step); next := aBlock(randomNumberGenerator, [next(low), next(high)], []); withAndCollect(low, high, step, { :low :high :step | let answer = next; next := fold((+(next, aBlock(randomNumberGenerator, [negate(step), step], []))),low, high); answer }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "Ls",
  "LsBrownUsing",
  ["low", "high", "step", "randomNumberGenerator", "aBlock:/3"],
  sl.annotateFunction(
    function (_low, _high, _step, _randomNumberGenerator, _aBlock_3) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _low, _high, _step, _randomNumberGenerator, _aBlock_3";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _next = null;
      /* Statements */
      _low = _LsConstant_1(_low);
      _high = _LsConstant_1(_high);
      _step = _LsConstant_1(_step);
      _next = _aBlock_3(
        _randomNumberGenerator,
        [_next_1(_low), _next_1(_high)],
        [],
      );
      return _withAndCollect_4(
        _low,
        _high,
        _step,
        sl.annotateFunction(function (_low, _high, _step) {
          /* ArityCheck */
          if (arguments.length !== 3) {
            const errorMessage = "Arity: expected 3, _low, _high, _step";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _answer = _next;
          /* Statements */
          _next = _fold_3(
            _plusSign_2(
              _next,
              _aBlock_3(_randomNumberGenerator, [_negate_1(_step), _step], []),
            ),
            _low,
            _high,
          );
          return _answer;
        }, ["low", "high", "step"]),
      );
    },
    ["low", "high", "step", "randomNumberGenerator", "aBlock:/3"],
  ),
  "{ :low :high :step :randomNumberGenerator :aBlock:/3 | let next = nil; low := LsConstant(low); high := LsConstant(high); step := LsConstant(step); next := aBlock(randomNumberGenerator, [next(low), next(high)], []); withAndCollect(low, high, step, { :low :high :step | let answer = next; next := fold((+(next, aBlock(randomNumberGenerator, [negate(step), step], []))),low, high); answer }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Ls",
  "LsBrown",
  ["low", "high", "step", "length", "randomNumberGenerator"],
  sl.annotateFunction(
    function (_low, _high, _step, _length, _randomNumberGenerator) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _low, _high, _step, _length, _randomNumberGenerator";
        throw new Error(errorMessage);
      } /* Statements */
      return _take_2(
        _LsBrownUsing_5(
          _low,
          _high,
          _step,
          _randomNumberGenerator,
          _randomReal_3,
        ),
        _length,
      );
    },
    ["low", "high", "step", "length", "randomNumberGenerator"],
  ),
  "{ :low :high :step :length :randomNumberGenerator | take(LsBrownUsing(low, high, step, randomNumberGenerator, randomReal:/3),length) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "Ls",
  "LsBrown",
  ["low", "high", "step", "length", "randomNumberGenerator"],
  sl.annotateFunction(
    function (_low, _high, _step, _length, _randomNumberGenerator) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _low, _high, _step, _length, _randomNumberGenerator";
        throw new Error(errorMessage);
      } /* Statements */
      return _take_2(
        _LsBrownUsing_5(
          _low,
          _high,
          _step,
          _randomNumberGenerator,
          _randomReal_3,
        ),
        _length,
      );
    },
    ["low", "high", "step", "length", "randomNumberGenerator"],
  ),
  "{ :low :high :step :length :randomNumberGenerator | take(LsBrownUsing(low, high, step, randomNumberGenerator, randomReal:/3),length) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Ls",
  "LsCauchy",
  ["mean", "spread", "length", "randomNumberGenerator"],
  sl.annotateFunction(
    function (_mean, _spread, _length, _randomNumberGenerator) {
      /* ArityCheck */
      if (arguments.length !== 4) {
        const errorMessage =
          "Arity: expected 4, _mean, _spread, _length, _randomNumberGenerator";
        throw new Error(errorMessage);
      } /* Statements */
      _mean = _LsConstant_1(_mean);
      _spread = _LsConstant_1(_spread);
      return _take_2(
        _withCollect_3(
          _mean,
          _spread,
          sl.annotateFunction(function (_p, _q) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _p, _q";
              throw new Error(errorMessage);
            } /* Statements */
            return _cauchyDistribution_3(_randomNumberGenerator, _p, _q);
          }, ["p", "q"]),
        ),
        _length,
      );
    },
    ["mean", "spread", "length", "randomNumberGenerator"],
  ),
  "{ :mean :spread :length :randomNumberGenerator | mean := LsConstant(mean); spread := LsConstant(spread); take(withCollect(mean,spread, { :p :q | cauchyDistribution(randomNumberGenerator,p, q) }),length) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "Ls",
  "LsCauchy",
  ["mean", "spread", "length", "randomNumberGenerator"],
  sl.annotateFunction(
    function (_mean, _spread, _length, _randomNumberGenerator) {
      /* ArityCheck */
      if (arguments.length !== 4) {
        const errorMessage =
          "Arity: expected 4, _mean, _spread, _length, _randomNumberGenerator";
        throw new Error(errorMessage);
      } /* Statements */
      _mean = _LsConstant_1(_mean);
      _spread = _LsConstant_1(_spread);
      return _take_2(
        _withCollect_3(
          _mean,
          _spread,
          sl.annotateFunction(function (_p, _q) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _p, _q";
              throw new Error(errorMessage);
            } /* Statements */
            return _cauchyDistribution_3(_randomNumberGenerator, _p, _q);
          }, ["p", "q"]),
        ),
        _length,
      );
    },
    ["mean", "spread", "length", "randomNumberGenerator"],
  ),
  "{ :mean :spread :length :randomNumberGenerator | mean := LsConstant(mean); spread := LsConstant(spread); take(withCollect(mean,spread, { :p :q | cauchyDistribution(randomNumberGenerator,p, q) }),length) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Ls",
  "LsIBrown",
  ["low", "high", "step", "length", "randomNumberGenerator"],
  sl.annotateFunction(
    function (_low, _high, _step, _length, _randomNumberGenerator) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _low, _high, _step, _length, _randomNumberGenerator";
        throw new Error(errorMessage);
      } /* Statements */
      return _take_2(
        _LsBrownUsing_5(
          _low,
          _high,
          _step,
          _randomNumberGenerator,
          _randomIntegerExcludingZero_3,
        ),
        _length,
      );
    },
    ["low", "high", "step", "length", "randomNumberGenerator"],
  ),
  "{ :low :high :step :length :randomNumberGenerator | take(LsBrownUsing(low, high, step, randomNumberGenerator, randomIntegerExcludingZero:/3),length) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "Ls",
  "LsIBrown",
  ["low", "high", "step", "length", "randomNumberGenerator"],
  sl.annotateFunction(
    function (_low, _high, _step, _length, _randomNumberGenerator) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _low, _high, _step, _length, _randomNumberGenerator";
        throw new Error(errorMessage);
      } /* Statements */
      return _take_2(
        _LsBrownUsing_5(
          _low,
          _high,
          _step,
          _randomNumberGenerator,
          _randomIntegerExcludingZero_3,
        ),
        _length,
      );
    },
    ["low", "high", "step", "length", "randomNumberGenerator"],
  ),
  "{ :low :high :step :length :randomNumberGenerator | take(LsBrownUsing(low, high, step, randomNumberGenerator, randomIntegerExcludingZero:/3),length) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Ls",
  "LsWhite",
  ["low", "high", "length", "randomNumberGenerator"],
  sl.annotateFunction(function (_low, _high, _length, _randomNumberGenerator) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _low, _high, _length, _randomNumberGenerator";
      throw new Error(errorMessage);
    } /* Statements */
    return _take_2(
      _withCollect_3(
        _LsConstant_1(_low),
        _LsConstant_1(_high),
        sl.annotateFunction(function (_min, _max) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _min, _max";
            throw new Error(errorMessage);
          } /* Statements */
          return _randomReal_3(_randomNumberGenerator, [_min, _max], []);
        }, ["min", "max"]),
      ),
      _length,
    );
  }, ["low", "high", "length", "randomNumberGenerator"]),
  "{ :low :high :length :randomNumberGenerator | take(withCollect(LsConstant(low), LsConstant(high), { :min :max | randomReal(randomNumberGenerator,[min, max], []) }),length) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "Ls",
  "LsWhite",
  ["low", "high", "length", "randomNumberGenerator"],
  sl.annotateFunction(function (_low, _high, _length, _randomNumberGenerator) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _low, _high, _length, _randomNumberGenerator";
      throw new Error(errorMessage);
    } /* Statements */
    return _take_2(
      _withCollect_3(
        _LsConstant_1(_low),
        _LsConstant_1(_high),
        sl.annotateFunction(function (_min, _max) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _min, _max";
            throw new Error(errorMessage);
          } /* Statements */
          return _randomReal_3(_randomNumberGenerator, [_min, _max], []);
        }, ["min", "max"]),
      ),
      _length,
    );
  }, ["low", "high", "length", "randomNumberGenerator"]),
  "{ :low :high :length :randomNumberGenerator | take(withCollect(LsConstant(low), LsConstant(high), { :min :max | randomReal(randomNumberGenerator,[min, max], []) }),length) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Ls",
  "LsSet",
  ["key", "value", "input"],
  sl.annotateFunction(function (_key, _value, _input) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _key, _value, _input";
      throw new Error(errorMessage);
    } /* Statements */
    _value = _LsConstant_1(_value);
    return _withCollect_3(
      _input,
      _value,
      sl.annotateFunction(function (_each, _z) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _z";
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(_each, _key, _z);
        return _each;
      }, ["each", "z"]),
    );
  }, ["key", "value", "input"]),
  "{ :key :value :input | value := LsConstant(value); withCollect(input, value, { :each :z | atPut(each, key, z); each }) }",
);
