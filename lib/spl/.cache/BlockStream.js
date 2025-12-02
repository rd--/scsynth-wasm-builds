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
    return _error_1("BlockStream>>copy");
  }, ["self"]),
  "{ :self |\n\t\t'BlockStream>>copy'.error\n\t}",
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
  "{ :self |\n\t\tlet answer = self.nextItem;\n\t\tanswer.ifNotNil {\n\t\t\tself.nextItem := self.onNext.value\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self |\n\t\tself.nextItem\n\t}",
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
  "{ :self |\n\t\tself.onReset.value;\n\t\tself.nextItem := self.onNext.value;\n\t\t0\n\t}",
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
  "{ :onNext :onReset |\n\t\tnewBlockStream().initializeSlots(onNext, onReset, onNext.value)\n\t}",
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
  "{ :self:/1 :anObject |\n\t\tself:/1.fixedPoint(anObject, ~)\n\t}",
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
  "{ :self:/1 :anObject :aBlock:/2 |\n\t\tself:/1.fixedPointList(anObject, aBlock:/2).last\n\t}",
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
  "{ :self:/1 :anObject |\n\t\tself:/1.fixedPointList(anObject, ~)\n\t}",
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
          _isNotNil_1(_previous),
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
  "{ :self:/1 :anObject :aBlock:/2 |\n\t\tlet previous = nil;\n\t\tself:/1.iterate(anObject).nextUntil { :each |\n\t\t\tlet continue = previous.isNotNil & {\n\t\t\t\taBlock(previous, each)\n\t\t\t};\n\t\t\tprevious := each;\n\t\t\tcontinue\n\t\t}\n\t}",
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
  "{ :self:/1 :anObject |\n\t\tlet state = anObject;\n\t\tBlockStream {\n\t\t\tlet next = state;\n\t\t\tstate := self(state);\n\t\t\tnext\n\t\t} {\n\t\t\tstate := anObject\n\t\t}\n\t}",
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
  "{ :self:/1 :anObject :count |\n\t\tself:/1.iterate(anObject).next(count + 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "BlockStream",
  "nestListDistinct",
  ["self:/1", "anObject"],
  sl.annotateFunction(function (_self_1, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _anObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _next = _anObject;
    let _answer = [];
    /* Statements */
    _doWhileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_answer, _next);
        return _next = _self_1(_next);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _not_1(_includes_2(_answer, _next));
      }, []),
    );
    return [_answer, _next];
  }, ["self:/1", "anObject"]),
  "{ :self:/1 :anObject |\n\t\tlet next = anObject;\n\t\tlet answer = [];\n\t\t{\n\t\t\tanswer.add(next);\n\t\t\tnext := self(next)\n\t\t}.doWhileTrue {\n\t\t\tanswer.includes(next).not\n\t\t};\n\t\t[answer, next]\n\t}",
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
  "{ :self:/1 :anObject :aBlock:/1 |\n\t\tself:/1.iterate(anObject).nextWhile(aBlock:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "divide",
  ["lhs", "rhs"],
  sl.annotateFunction(function (_lhs, _rhs) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lhs, _rhs";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToStreamAndApply_3(_rhs, _lhs, _solidus_2);
  }, ["lhs", "rhs"]),
  "{ :lhs :rhs |\n\t\trhs.adaptToStreamAndApply(lhs, /)\n\t}",
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
  "{ :lhs :rhs |\n\t\trhs.adaptToStreamAndApply(lhs, /)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "plus",
  ["lhs", "rhs"],
  sl.annotateFunction(function (_lhs, _rhs) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lhs, _rhs";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToStreamAndApply_3(_rhs, _lhs, _plusSign_2);
  }, ["lhs", "rhs"]),
  "{ :lhs :rhs |\n\t\trhs.adaptToStreamAndApply(lhs, +)\n\t}",
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
  "{ :lhs :rhs |\n\t\trhs.adaptToStreamAndApply(lhs, +)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "power",
  ["lhs", "rhs"],
  sl.annotateFunction(function (_lhs, _rhs) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lhs, _rhs";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToStreamAndApply_3(_rhs, _lhs, _circumflexAccent_2);
  }, ["lhs", "rhs"]),
  "{ :lhs :rhs |\n\t\trhs.adaptToStreamAndApply(lhs, ^)\n\t}",
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
  "{ :lhs :rhs |\n\t\trhs.adaptToStreamAndApply(lhs, ^)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "subtract",
  ["lhs", "rhs"],
  sl.annotateFunction(function (_lhs, _rhs) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lhs, _rhs";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToStreamAndApply_3(_rhs, _lhs, _hyphenMinus_2);
  }, ["lhs", "rhs"]),
  "{ :lhs :rhs |\n\t\trhs.adaptToStreamAndApply(lhs, -)\n\t}",
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
  "{ :lhs :rhs |\n\t\trhs.adaptToStreamAndApply(lhs, -)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "times",
  ["lhs", "rhs"],
  sl.annotateFunction(function (_lhs, _rhs) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lhs, _rhs";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToStreamAndApply_3(_rhs, _lhs, _asterisk_2);
  }, ["lhs", "rhs"]),
  "{ :lhs :rhs |\n\t\trhs.adaptToStreamAndApply(lhs, *)\n\t}",
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
  "{ :lhs :rhs |\n\t\trhs.adaptToStreamAndApply(lhs, *)\n\t}",
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
  "{ :self :aNumber :aBlock:/2 |\n\t\tself.collect { :each |\n\t\t\taBlock(aNumber, each)\n\t\t}\n\t}",
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
  "{ :self :aStream :aBlock:/2 |\n\t\tlet atEnd = false;\n\t\tBlockStream {\n\t\t\tatEnd.if {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\tlet p = self.next;\n\t\t\t\tlet q = aStream.next;\n\t\t\t\t(p.isNil | {\n\t\t\t\t\tq.isNil\n\t\t\t\t}).if {\n\t\t\t\t\tatEnd := true;\n\t\t\t\t\tnil\n\t\t\t\t} {\n\t\t\t\t\taBlock(p, q)\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tself.reset;\n\t\t\taStream.reset;\n\t\t\tatEnd := false\n\t\t}\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tBlockStream {\n\t\t\tlet next = self.next;\n\t\t\tnext.isNil.if {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\taBlock(next)\n\t\t\t}\n\t\t} {\n\t\t\tself.reset\n\t\t}\n\t}",
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
  "{ :input :count |\n\t\tinput.next(count);\n\t\tBlockStream {\n\t\t\tinput.next\n\t\t} {\n\t\t\tinput.reset;\n\t\t\tinput.next(count)\n\t\t}\n\t}",
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
  "{ :input :repeats |\n\t\tlet remain = 1;\n\t\tlet next = nil;\n\t\tBlockStream {\n\t\t\tremain := remain - 1;\n\t\t\t(remain <= 0).ifTrue {\n\t\t\t\tremain := repeats.next;\n\t\t\t\tnext := input.next\n\t\t\t};\n\t\t\tnext\n\t\t} {\n\t\t\tinput.reset;\n\t\t\trepeats.reset;\n\t\t\tremain := 1\n\t\t}\n\t}",
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
  "{ :input |\n\t\tlet nextIndex = 1;\n\t\tBlockStream {\n\t\t\tlet item = input.next;\n\t\t\titem.isNil.if {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\tlet index = nextIndex;\n\t\t\t\tnextIndex := nextIndex + 1;\n\t\t\t\t[index, item]\n\t\t\t}\n\t\t} {\n\t\t\tinput.reset;\n\t\t\tnextIndex := 1\n\t\t}\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tself.select { :each |\n\t\t\taBlock(each).not\n\t\t}\n\t}",
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
  "{ :self |\n\t\tlet previous = nil;\n\t\tself.reject { :each |\n\t\t\t(each = previous).if {\n\t\t\t\ttrue\n\t\t\t} {\n\t\t\t\tprevious := each;\n\t\t\t\tfalse\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :repeats |\n\t\tlet repeat = 1;\n\t\tBlockStream {\n\t\t\tlet next = self.next;\n\t\t\t(next.isNil & {\n\t\t\t\trepeat < repeats\n\t\t\t}).ifTrue {\n\t\t\t\tself.reset;\n\t\t\t\trepeat := repeat + 1;\n\t\t\t\tnext := self.next\n\t\t\t};\n\t\t\tnext\n\t\t} {\n\t\t\tself.reset;\n\t\t\trepeat := 1\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "round",
  ["lhs", "rhs"],
  sl.annotateFunction(function (_lhs, _rhs) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lhs, _rhs";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToStreamAndApply_3(_rhs, _lhs, _round_2);
  }, ["lhs", "rhs"]),
  "{ :lhs :rhs |\n\t\trhs.adaptToStreamAndApply(lhs, round:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Stream",
  "BlockStream",
  "round",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _round_2(_self, 1);
  }, ["self"]),
  "{ :self |\n\t\tself.round(1)\n\t}",
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
  "{ :input :aBlock:/2 |\n\t\tlet z1 = input.next;\n\t\tBlockStream {\n\t\t\tlet z2 = input.next;\n\t\t\tz1.isNil.if {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\tlet answer = z1;\n\t\t\t\tz2.isNil.if {\n\t\t\t\t\tz1 := nil\n\t\t\t\t} {\n\t\t\t\t\tz1 := aBlock(z1, z2)\n\t\t\t\t};\n\t\t\t\tanswer\n\t\t\t}\n\t\t} {\n\t\t\tinput.reset;\n\t\t\tz1 := input.next\n\t\t}\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tBlockStream {\n\t\t\tlet next = self.next;\n\t\t\t{\n\t\t\t\tnext.isNil | {\n\t\t\t\t\taBlock(next)\n\t\t\t\t}\n\t\t\t}.whileFalse {\n\t\t\t\tnext := self.next\n\t\t\t};\n\t\t\tnext\n\t\t} {\n\t\t\tself.reset\n\t\t}\n\t}",
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
  "{ :self :limit |\n\t\tlet count = 1;\n\t\tBlockStream {\n\t\t\t(count > limit).if {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\tcount := count + 1;\n\t\t\t\tself.next\n\t\t\t}\n\t\t} {\n\t\t\tcount := 1;\n\t\t\tself.reset\n\t\t}\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tBlockStream {\n\t\t\tlet answer = self.next;\n\t\t\taBlock(answer).if {\n\t\t\t\tanswer\n\t\t\t} {\n\t\t\t\tnil\n\t\t\t}\n\t\t} {\n\t\t\tself.reset\n\t\t}\n\t}",
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
  "{ :self :aStream :anotherStream :aBlock:/3 |\n\t\tBlockStream {\n\t\t\tlet selfNext = self.next;\n\t\t\tlet aStreamNext = aStream.next;\n\t\t\tlet anotherStreamNext = anotherStream.next;\n\t\t\t(selfNext.isNil | {\n\t\t\t\taStreamNext.isNil | {\n\t\t\t\t\tanotherStreamNext.isNil\n\t\t\t\t}\n\t\t\t}).if {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\taBlock(selfNext, aStreamNext, anotherStreamNext)\n\t\t\t}\n\t\t} {\n\t\t\tself.reset;\n\t\t\taStream.reset;\n\t\t\tanotherStream.reset\n\t\t}\n\t}",
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
  "{ :self :aStream :aBlock:/2 |\n\t\tBlockStream {\n\t\t\tlet selfNext = self.next;\n\t\t\tlet aStreamNext = aStream.next;\n\t\t\t(selfNext.isNil | {\n\t\t\t\taStreamNext.isNil\n\t\t\t}).if {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\taBlock(selfNext, aStreamNext)\n\t\t\t}\n\t\t} {\n\t\t\tself.reset;\n\t\t\taStream.reset\n\t\t}\n\t}",
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
  "{ :self :aStream :aBlock:/2 |\n\t\taStream.collect { :each |\n\t\t\taBlock(each, self)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.asStream.enumerate\n\t}",
);
