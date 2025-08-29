/*  Requires: Iterator Stream  */

sl.addType(
  false,
  "BlockStream",
  "BlockStream",
  ["Object", "Iterator", "Stream"],
  ["onNext", "onReset", "nextItem"],
);

sl.copyTraitMethodsToType(
  "Object",
  "BlockStream",
);

sl.copyTraitMethodsToType(
  "Iterator",
  "BlockStream",
);

sl.copyTraitMethodsToType(
  "Stream",
  "BlockStream",
);

sl.addMethodToExistingType(
  "BlockStream",
  "BlockStream",
  "copy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_1("BlockStream>>copy: not implemented");
  }, ["self"]),
  "{ :self | error('BlockStream>>copy: not implemented') }",
);

sl.addMethodToExistingType(
  "BlockStream",
  "BlockStream",
  "next",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _nextItem_1(_self);
    /* Statements */
    _ifNotNil_2(
      _answer,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _nextItem_2(_self, _value_1(_onNext_1(_self)));
      }, []),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = nextItem(self); ifNotNil(answer, { nextItem(self, value(onNext(self))) }); answer }",
);

sl.addMethodToExistingType(
  "BlockStream",
  "BlockStream",
  "peek",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _nextItem_1(_self);
  }, ["self"]),
  "{ :self | nextItem(self) }",
);

sl.addMethodToExistingType(
  "BlockStream",
  "BlockStream",
  "reset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _value_1(_onReset_1(_self));
    _nextItem_2(_self, _value_1(_onNext_1(_self)));
    return 0;
  }, ["self"]),
  "{ :self | value(onReset(self)); nextItem(self, value(onNext(self))); 0 }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "BlockStream",
  "BlockStream",
  ["onNext", "onReset"],
  sl.annotateFunction(function (_onNext, _onReset) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _onNext, _onReset";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(
      _newBlockStream_0(),
      _onNext,
      _onReset,
      _value_1(_onNext),
    );
  }, ["onNext", "onReset"]),
  "{ :onNext :onReset | initializeSlots(newBlockStream(),onNext, onReset, value(onNext)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "BlockStream",
  "fixedPoint",
  ["self:/1", "anObject"],
  sl.annotateFunction(function (_self_1, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _fixedPoint_3(_self_1, _anObject, _tilde_2);
  }, ["self:/1", "anObject"]),
  "{ :self:/1 :anObject | fixedPoint(self:/1,anObject, ~) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "BlockStream",
  "fixedPoint",
  ["self:/1", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self_1, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_1, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _last_1(_fixedPointList_3(_self_1, _anObject, _aBlock_2));
  }, ["self:/1", "anObject", "aBlock:/2"]),
  "{ :self:/1 :anObject :aBlock:/2 | last(fixedPointList(self:/1,anObject, aBlock:/2)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "BlockStream",
  "fixedPointList",
  ["self:/1", "anObject"],
  sl.annotateFunction(function (_self_1, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _fixedPointList_3(_self_1, _anObject, _tilde_2);
  }, ["self:/1", "anObject"]),
  "{ :self:/1 :anObject | fixedPointList(self:/1,anObject, ~) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "BlockStream",
  "fixedPointList",
  ["self:/1", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self_1, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_1, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _previous = null;
    /* Statements */
    return _nextUntil_2(
      _iterate_2(_self_1, _anObject),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _continue = _ampersand_2(
          _notNil_1(_previous),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_2(_previous, _each);
          }, []),
        );
        /* Statements */
        _previous = _each;
        return _continue;
      }, ["each"]),
    );
  }, ["self:/1", "anObject", "aBlock:/2"]),
  "{ :self:/1 :anObject :aBlock:/2 | let previous = nil; nextUntil(iterate(self:/1,anObject), { :each | let continue = &(notNil(previous), { aBlock(previous, each) }); previous := each; continue }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "BlockStream",
  "iterate",
  ["self:/1", "anObject"],
  sl.annotateFunction(function (_self_1, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _anObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _state = _anObject;
    /* Statements */
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _next = _state;
        /* Statements */
        _state = _self_1(_state);
        return _next;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _state = _anObject;
      }, []),
    );
  }, ["self:/1", "anObject"]),
  "{ :self:/1 :anObject | let state = anObject; BlockStream({ let next = state; state := self(state); next }, { state := anObject }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "BlockStream",
  "nestList",
  ["self:/1", "anObject", "count"],
  sl.annotateFunction(function (_self_1, _anObject, _count) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_1, _anObject, _count";
      throw new Error(errorMessage);
    } /* Statements */
    return _next_2(_iterate_2(_self_1, _anObject), _plusSign_2(_count, 1));
  }, ["self:/1", "anObject", "count"]),
  "{ :self:/1 :anObject :count | next(iterate(self:/1,anObject),+(count, 1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "BlockStream",
  "nestWhileList",
  ["self:/1", "anObject", "aBlock:/1"],
  sl.annotateFunction(function (_self_1, _anObject, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_1, _anObject, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _nextWhile_2(_iterate_2(_self_1, _anObject), _aBlock_1);
  }, ["self:/1", "anObject", "aBlock:/1"]),
  "{ :self:/1 :anObject :aBlock:/1 | nextWhile(iterate(self:/1,anObject),aBlock:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "asterisk",
  ["lhs", "rhs"],
  sl.annotateFunction(function (_lhs, _rhs) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lhs, _rhs";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToStreamAndApply_3(_rhs, _lhs, _asterisk_2);
  }, ["lhs", "rhs"]),
  "{ :lhs :rhs | adaptToStreamAndApply(rhs,lhs, *) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "solidus",
  ["lhs", "rhs"],
  sl.annotateFunction(function (_lhs, _rhs) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lhs, _rhs";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToStreamAndApply_3(_rhs, _lhs, _solidus_2);
  }, ["lhs", "rhs"]),
  "{ :lhs :rhs | adaptToStreamAndApply(rhs,lhs, /) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "plusSign",
  ["lhs", "rhs"],
  sl.annotateFunction(function (_lhs, _rhs) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lhs, _rhs";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToStreamAndApply_3(_rhs, _lhs, _plusSign_2);
  }, ["lhs", "rhs"]),
  "{ :lhs :rhs | adaptToStreamAndApply(rhs,lhs, +) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "hyphenMinus",
  ["lhs", "rhs"],
  sl.annotateFunction(function (_lhs, _rhs) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lhs, _rhs";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToStreamAndApply_3(_rhs, _lhs, _hyphenMinus_2);
  }, ["lhs", "rhs"]),
  "{ :lhs :rhs | adaptToStreamAndApply(rhs,lhs, -) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "circumflexAccent",
  ["lhs", "rhs"],
  sl.annotateFunction(function (_lhs, _rhs) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lhs, _rhs";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToStreamAndApply_3(_rhs, _lhs, _circumflexAccent_2);
  }, ["lhs", "rhs"]),
  "{ :lhs :rhs | adaptToStreamAndApply(rhs,lhs, ^) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "adaptToNumberAndApply",
  ["self", "aNumber", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_aNumber, _each);
      }, ["each"]),
    );
  }, ["self", "aNumber", "aBlock:/2"]),
  "{ :self :aNumber :aBlock:/2 | collect(self, { :each | aBlock(aNumber, each) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "adaptToStreamAndApply",
  ["self", "aStream", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aStream, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aStream, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _atEnd = false;
    /* Statements */
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
            let _p = _next_1(_self);
            let _q = _next_1(_aStream);
            /* Statements */
            return _if_3(
              _verticalLine_2(
                _isNil_1(_p),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _isNil_1(_q);
                }, []),
              ),
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
                return _aBlock_2(_p, _q);
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
        _reset_1(_self);
        _reset_1(_aStream);
        return _atEnd = false;
      }, []),
    );
  }, ["self", "aStream", "aBlock:/2"]),
  "{ :self :aStream :aBlock:/2 | let atEnd = false; BlockStream({ if(atEnd, { nil }, { let p = next(self); let q = next(aStream); if((|(isNil(p), { isNil(q) })), { atEnd := true; nil }, { aBlock(p, q) }) }) }, { reset(self); reset(aStream); atEnd := false }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "collect",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _next = _next_1(_self);
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
            } /* Statements */
            return _aBlock_1(_next);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _reset_1(_self);
      }, []),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | BlockStream({ let next = next(self); if(isNil(next), { nil }, { aBlock(next) }) }, { reset(self) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "drop",
  ["input", "count"],
  sl.annotateFunction(function (_input, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _count";
      throw new Error(errorMessage);
    } /* Statements */
    _next_2(_input, _count);
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _next_1(_input);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _reset_1(_input);
        return _next_2(_input, _count);
      }, []),
    );
  }, ["input", "count"]),
  "{ :input :count | next(input,count); BlockStream({ next(input) }, { reset(input); next(input,count) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "duplicateEach",
  ["input", "repeats"],
  sl.annotateFunction(function (_input, _repeats) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _repeats";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _remain = 1;
    let _next = null;
    /* Statements */
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _remain = _hyphenMinus_2(_remain, 1);
        _ifTrue_2(
          _lessThanSignEqualsSign_2(_remain, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _remain = _next_1(_repeats);
            return _next = _next_1(_input);
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
        _reset_1(_input);
        _reset_1(_repeats);
        return _remain = 1;
      }, []),
    );
  }, ["input", "repeats"]),
  "{ :input :repeats | let remain = 1; let next = nil; BlockStream({ remain := -(remain, 1); ifTrue((<=(remain, 0)), { remain := next(repeats); next := next(input) }); next }, { reset(input); reset(repeats); remain := 1 }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "enumerate",
  ["input"],
  sl.annotateFunction(function (_input) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _input";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _nextIndex = 1;
    /* Statements */
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _item = _next_1(_input);
        /* Statements */
        return _if_3(
          _isNil_1(_item),
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
            let _index = _nextIndex;
            /* Statements */
            _nextIndex = _plusSign_2(_nextIndex, 1);
            return [_index, _item];
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
        return _nextIndex = 1;
      }, []),
    );
  }, ["input"]),
  "{ :input | let nextIndex = 1; BlockStream({ let item = next(input); if(isNil(item), { nil }, { let index = nextIndex; nextIndex := +(nextIndex, 1); [index, item] }) }, { reset(input); nextIndex := 1 }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "reject",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _not_1(_aBlock_1(_each));
      }, ["each"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | select(self, { :each | not(aBlock(each)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "removeSuccesiveDuplicates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _previous = null;
    /* Statements */
    return _reject_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_each, _previous),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return true;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _previous = _each;
            return false;
          }, []),
        );
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self | let previous = nil; reject(self, { :each | if((=(each, previous)), { true }, { previous := each; false }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "repeat",
  ["self", "repeats"],
  sl.annotateFunction(function (_self, _repeats) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _repeats";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _repeat = 1;
    /* Statements */
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _next = _next_1(_self);
        /* Statements */
        _ifTrue_2(
          _ampersand_2(
            _isNil_1(_next),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _lessThanSign_2(_repeat, _repeats);
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _reset_1(_self);
            _repeat = _plusSign_2(_repeat, 1);
            return _next = _next_1(_self);
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
        _reset_1(_self);
        return _repeat = 1;
      }, []),
    );
  }, ["self", "repeats"]),
  "{ :self :repeats | let repeat = 1; BlockStream({ let next = next(self); ifTrue((&(isNil(next), { <(repeat, repeats) })), { reset(self); repeat := +(repeat, 1); next := next(self) }); next }, { reset(self); repeat := 1 }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "roundTo",
  ["lhs", "rhs"],
  sl.annotateFunction(function (_lhs, _rhs) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lhs, _rhs";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToStreamAndApply_3(_rhs, _lhs, _roundTo_2);
  }, ["lhs", "rhs"]),
  "{ :lhs :rhs | adaptToStreamAndApply(rhs,lhs, roundTo:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "round",
  ["self", "a"],
  sl.annotateFunction(function (_self, _a) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return _roundTo_2(_self, 1);
  }, ["self", "a"]),
  "{ :self :a | roundTo(self,1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "scan",
  ["input", "aBlock:/2"],
  sl.annotateFunction(function (_input, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _z1 = _next_1(_input);
    /* Statements */
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _z2 = _next_1(_input);
        /* Statements */
        return _if_3(
          _isNil_1(_z1),
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
            let _answer = _z1;
            /* Statements */
            _if_3(
              _isNil_1(_z2),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _z1 = null;
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _z1 = _aBlock_2(_z1, _z2);
              }, []),
            );
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
        return _z1 = _next_1(_input);
      }, []),
    );
  }, ["input", "aBlock:/2"]),
  "{ :input :aBlock:/2 | let z1 = next(input); BlockStream({ let z2 = next(input); if(isNil(z1), { nil }, { let answer = z1; if(isNil(z2), { z1 := nil }, { z1 := aBlock(z1, z2) }); answer }) }, { reset(input); z1 := next(input) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "select",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _next = _next_1(_self);
        /* Statements */
        _whileFalse_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _verticalLine_2(
              _isNil_1(_next),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _aBlock_1(_next);
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _next = _next_1(_self);
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
        return _reset_1(_self);
      }, []),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | BlockStream({ let next = next(self); whileFalse({ |(isNil(next), { aBlock(next) }) }, { next := next(self) }); next }, { reset(self) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "take",
  ["self", "limit"],
  sl.annotateFunction(function (_self, _limit) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _limit";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _count = 1;
    /* Statements */
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSign_2(_count, _limit),
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
            _count = _plusSign_2(_count, 1);
            return _next_1(_self);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _count = 1;
        return _reset_1(_self);
      }, []),
    );
  }, ["self", "limit"]),
  "{ :self :limit | let count = 1; BlockStream({ if((>(count, limit)), { nil }, { count := +(count, 1); next(self) }) }, { count := 1; reset(self) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "takeWhile",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _next_1(_self);
        /* Statements */
        return _if_3(
          _aBlock_1(_answer),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _answer;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return null;
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _reset_1(_self);
      }, []),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | BlockStream({ let answer = next(self); if(aBlock(answer), { answer }, { nil }) }, { reset(self) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "withAndCollect",
  ["self", "aStream", "anotherStream", "aBlock:/3"],
  sl.annotateFunction(function (_self, _aStream, _anotherStream, _aBlock_3) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _aStream, _anotherStream, _aBlock_3";
      throw new Error(errorMessage);
    } /* Statements */
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _selfNext = _next_1(_self);
        let _aStreamNext = _next_1(_aStream);
        let _anotherStreamNext = _next_1(_anotherStream);
        /* Statements */
        return _if_3(
          _verticalLine_2(
            _isNil_1(_selfNext),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _verticalLine_2(
                _isNil_1(_aStreamNext),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _isNil_1(_anotherStreamNext);
                }, []),
              );
            }, []),
          ),
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
            return _aBlock_3(_selfNext, _aStreamNext, _anotherStreamNext);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _reset_1(_self);
        _reset_1(_aStream);
        return _reset_1(_anotherStream);
      }, []),
    );
  }, ["self", "aStream", "anotherStream", "aBlock:/3"]),
  "{ :self :aStream :anotherStream :aBlock:/3 | BlockStream({ let selfNext = next(self); let aStreamNext = next(aStream); let anotherStreamNext = next(anotherStream); if((|(isNil(selfNext), { |(isNil(aStreamNext), { isNil(anotherStreamNext) }) })), { nil }, { aBlock(selfNext, aStreamNext, anotherStreamNext) }) }, { reset(self); reset(aStream); reset(anotherStream) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "withCollect",
  ["self", "aStream", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aStream, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aStream, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _selfNext = _next_1(_self);
        let _aStreamNext = _next_1(_aStream);
        /* Statements */
        return _if_3(
          _verticalLine_2(
            _isNil_1(_selfNext),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _isNil_1(_aStreamNext);
            }, []),
          ),
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
            return _aBlock_2(_selfNext, _aStreamNext);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _reset_1(_self);
        return _reset_1(_aStream);
      }, []),
    );
  }, ["self", "aStream", "aBlock:/2"]),
  "{ :self :aStream :aBlock:/2 | BlockStream({ let selfNext = next(self); let aStreamNext = next(aStream); if((|(isNil(selfNext), { isNil(aStreamNext) })), { nil }, { aBlock(selfNext, aStreamNext) }) }, { reset(self); reset(aStream) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "BlockStream",
  "adaptToStreamAndApply",
  ["self", "aStream", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aStream, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aStream, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _aStream,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_each, _self);
      }, ["each"]),
    );
  }, ["self", "aStream", "aBlock:/2"]),
  "{ :self :aStream :aBlock:/2 | collect(aStream, { :each | aBlock(each, self) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "BlockStream",
  "enumerate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _enumerate_1(_asStream_1(_self));
  }, ["self"]),
  "{ :self | enumerate(asStream(self)) }",
);
