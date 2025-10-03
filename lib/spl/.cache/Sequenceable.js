/*  Require: SmallFloat  */

sl.addTrait("Sequenceable", "Sequenceable");

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "plusSignPlusSign",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _copyReplaceFromToWith_4(
      _self,
      _plusSign_2(_size_1(_self), 1),
      _size_1(_self),
      _aList,
    );
  }, ["self", "aList"]),
  "{ :self :aList | copyReplaceFromToWith(self,+(size(self), 1), size(self), aList) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "plusSignPlusSign",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _catenate_1(_self);
  }, ["self"]),
  "{ :self | catenate(self) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "plusSignPlusSignPlusSign",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return (_each_1(_plusSignPlusSign_2)(_self, _aList));
  }, ["self", "aList"]),
  "{ :self :aList | (each(++) . (self, aList)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "numberSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _replicateEach_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | replicateEach(self,anObject) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "exclamationMark",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _duplicateShape_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | duplicateShape(self,anObject) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "ampersandAmpersand",
  ["self", "other"],
  sl.annotateFunction(function (_self, _other) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _other";
      throw new Error(errorMessage);
    } /* Statements */
    return _withCollect_3(_self, _other, _ampersandAmpersand_2);
  }, ["self", "other"]),
  "{ :self :other | withCollect(self,other, &&) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "verticalLineVerticalLine",
  ["self", "other"],
  sl.annotateFunction(function (_self, _other) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _other";
      throw new Error(errorMessage);
    } /* Statements */
    return _withCollect_3(_self, _other, _verticalLineVerticalLine_2);
  }, ["self", "other"]),
  "{ :self :other | withCollect(self,other, ||) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "accumulate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _scan_2(_self, _plusSign_2);
  }, ["self"]),
  "{ :self | scan(self,+) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "adaptToCollectionAndApply",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isSequenceable_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _withCollect_3(_anObject, _self, _aBlock_2);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "@Sequenceable: only sequenceable collections may be processed elementwise",
        );
      }, []),
    );
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 | if(isSequenceable(anObject), { withCollect(anObject,self, aBlock:/2) }, { error(self,'@Sequenceable: only sequenceable collections may be processed elementwise') }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "adjacentPairs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _adjacentPairsCollect_2(
      _self,
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _newFrom_2(_species_1(_self), [_i, _j]);
      }, ["i", "j"]),
    );
  }, ["self"]),
  "{ :self | adjacentPairsCollect(self, { :i :j | newFrom(species(self),[i, j]) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "adjacentPairsDo",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _toDo_3(
      1,
      _hyphenMinus_2(_size_1(_self), 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_at_2(_self, _i), _at_2(_self, _plusSign_2(_i, 1)));
      }, ["i"]),
    );
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | toDo(1, -(size(self), 1), { :i | aBlock(at(self, i), at(self, +(i, 1))) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "adjacentPairsCollect",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _new_2(_species_1(_self), _hyphenMinus_2(_size_1(_self), 1));
    let _index = 1;
    /* Statements */
    _adjacentPairsDo_2(
      _self,
      sl.annotateFunction(function (_p, _q) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _p, _q";
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(_answer, _index, _aBlock_2(_p, _q));
        return _index = _plusSign_2(_index, 1);
      }, ["p", "q"]),
    );
    return _answer;
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | let answer = new(species(self),-(size(self), 1)); let index = 1; adjacentPairsDo(self, { :p :q | atPut(answer, index, aBlock(p, q)); index := +(index, 1) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "adjacentTriplesDo",
  ["self", "aBlock:/3"],
  sl.annotateFunction(function (_self, _aBlock_3) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_3";
      throw new Error(errorMessage);
    } /* Statements */
    return _toDo_3(
      1,
      _hyphenMinus_2(_size_1(_self), 2),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_3(
          _at_2(_self, _i),
          _at_2(_self, _plusSign_2(_i, 1)),
          _at_2(_self, _plusSign_2(_i, 2)),
        );
      }, ["i"]),
    );
  }, ["self", "aBlock:/3"]),
  "{ :self :aBlock:/3 | toDo(1, -(size(self), 2), { :i | aBlock(at(self, i), at(self, +(i, 1)), at(self, +(i, 2))) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "after",
  ["self", "target"],
  sl.annotateFunction(function (_self, _target) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _target";
      throw new Error(errorMessage);
    } /* Statements */
    return _afterIfAbsent_3(
      _self,
      _target,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _errorNotFound_2(_self, _target);
      }, []),
    );
  }, ["self", "target"]),
  "{ :self :target | afterIfAbsent(self, target, { errorNotFound(self,target) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "afterIfAbsent",
  ["self", "target", "exceptionBlock:/0"],
  sl.annotateFunction(function (_self, _target, _exceptionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _target, _exceptionBlock_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = _indexOf_2(_self, _target);
    /* Statements */
    return _if_3(
      _verticalLine_2(
        _equalsSign_2(_index, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_index, _size_1(_self));
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _exceptionBlock_0();
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_self, _plusSign_2(_index, 1));
      }, []),
    );
  }, ["self", "target", "exceptionBlock:/0"]),
  "{ :self :target :exceptionBlock:/0 | let index = indexOf(self,target); if((|(=(index, 0), { =(index, size(self)) })), { exceptionBlock() }, { at(self, +(index, 1)) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "allButFirst",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allButFirst_2(_self, 1);
  }, ["self"]),
  "{ :self | allButFirst(self,1) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "allButFirst",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _copyFromTo_3(_self, _plusSign_2(1, _n), _size_1(_self));
  }, ["self", "n"]),
  "{ :self :n | copyFromTo(self,+(1, n), size(self)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "allButFirstAndLast",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allButFirstAndLast_2(_self, 1);
  }, ["self"]),
  "{ :self | allButFirstAndLast(self,1) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "allButFirstAndLast",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _copyFromTo_3(
      _self,
      _plusSign_2(1, _n),
      _hyphenMinus_2(_size_1(_self), _n),
    );
  }, ["self", "n"]),
  "{ :self :n | copyFromTo(self,+(1, n), -(size(self), n)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "allButFirstDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _toDo_3(
      _plusSign_2(1, 1),
      _size_1(_self),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_at_2(_self, _index));
      }, ["index"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | toDo((+(1, 1)), size(self), { :index | aBlock(at(self, index)) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "allButLast",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allButLast_2(_self, 1);
  }, ["self"]),
  "{ :self | allButLast(self,1) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "allButLast",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _copyFromTo_3(_self, 1, _hyphenMinus_2(_size_1(_self), _n));
  }, ["self", "n"]),
  "{ :self :n | copyFromTo(self,1, -(size(self), n)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "allButLastDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _toDo_3(
      1,
      _hyphenMinus_2(_size_1(_self), 1),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_at_2(_self, _index));
      }, ["index"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | toDo(1, -(size(self), 1), { :index | aBlock(at(self, index)) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "allNearestSmallerValues",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _p = _List_1(_n);
    let _r = _List_1(_n);
    /* Statements */
    _toDo_3(
      2,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _j = _hyphenMinus_2(_i, 1);
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSignEqualsSign_2(
              _at_2(_self, _j),
              _at_2(_self, _i),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _j = _at_2(_p, _j);
          }, []),
        );
        _atPut_3(_p, _i, _j);
        return _atPut_3(_r, _i, _at_2(_self, _j));
      }, ["i"]),
    );
    return [_p, _r];
  }, ["self"]),
  "{ :self | let n = size(self); let p = List(n); let r = List(n); toDo(2, n, { :i | let j = -(i, 1); whileTrue({ >=(at(self, j), at(self, i)) }, { j := at(p, j) }); atPut(p, i, j); atPut(r, i, at(self, j)) }); [p, r] }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "asDigitsAtInDo",
  ["self", "anInteger", "aCollection", "aBlock:/1"],
  sl.annotateFunction(function (_self, _anInteger, _aCollection, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _anInteger, _aCollection, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(_aCollection, _anInteger, _each);
        return _if_3(
          _equalsSign_2(_anInteger, _size_1(_aCollection)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_1(_aCollection);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _asDigitsAtInDo_4(
              _self,
              _plusSign_2(_anInteger, 1),
              _aCollection,
              _aBlock_1,
            );
          }, []),
        );
      }, ["each"]),
    );
  }, ["self", "anInteger", "aCollection", "aBlock:/1"]),
  "{ :self :anInteger :aCollection :aBlock:/1 | do(self, { :each | atPut(aCollection, anInteger, each); if((=(anInteger, size(aCollection))), { aBlock(aCollection) }, { asDigitsAtInDo(self,+(anInteger, 1), aCollection, aBlock:/1) }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "asDigitsToPowerDo",
  ["self", "anInteger", "aBlock:/1"],
  sl.annotateFunction(function (_self, _anInteger, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _aCollection = _List_1(_anInteger);
    /* Statements */
    return _asDigitsAtInDo_4(_self, 1, _aCollection, _aBlock_1);
  }, ["self", "anInteger", "aBlock:/1"]),
  "{ :self :anInteger :aBlock:/1 | let aCollection = List(anInteger); asDigitsAtInDo(self,1, aCollection, aBlock:/1) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "asRange",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Range_3(1, 0, 1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_size_1(_self), 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _Range_3(_first_1(_self), _first_1(_self), 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _isArithmeticProgression_1(_self),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _Range_3(
                  _first_1(_self),
                  _last_1(_self),
                  _hyphenMinus_2(_second_1(_self), _first_1(_self)),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _error_2(
                  _self,
                  "@Sequenceable>>asRange: not an arithmetic series",
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isEmpty(self), { Range(1, 0, 1) }, { if((=(size(self), 1)), { Range(first(self), first(self), 1) }, { if(isArithmeticProgression(self), { Range(first(self), last(self), -(second(self), first(self))) }, { error(self,'@Sequenceable>>asRange: not an arithmetic series') }) }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "asSpan",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asSpan_1(_asRange_1(_self));
  }, ["self"]),
  "{ :self | asSpan(asRange(self)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "asRangeList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_size_1(_self), 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [_Range_3(_first_1(_self), _first_1(_self), 1)];
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _answer = [];
            let _start = _first_1(_self);
            let _step = _hyphenMinus_2(_second_1(_self), _first_1(_self));
            /* Statements */
            _toDo_3(
              _plusSign_2(1, 1),
              _size_1(_self),
              sl.annotateFunction(function (_i) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _i";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ifFalse_2(
                  _equalsSign_2(
                    _hyphenMinus_2(
                      _at_2(_self, _i),
                      _at_2(_self, _hyphenMinus_2(_i, 1)),
                    ),
                    _step,
                  ),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _add_2(
                      _answer,
                      _Range_3(
                        _start,
                        _at_2(_self, _hyphenMinus_2(_i, 1)),
                        _step,
                      ),
                    );
                    _start = _at_2(_self, _i);
                    return _if_3(
                      _equalsSign_2(_i, _size_1(_self)),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        _add_2(
                          _answer,
                          _Range_3(_last_1(_self), _last_1(_self), 1),
                        );
                        return _start = null;
                      }, []),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _step = _hyphenMinus_2(
                          _at_2(_self, _plusSign_2(_i, 1)),
                          _at_2(_self, _i),
                        );
                      }, []),
                    );
                  }, []),
                );
              }, ["i"]),
            );
            _ifNotNil_2(
              _start,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(_answer, _Range_3(_start, _last_1(_self), _step));
              }, []),
            );
            return _answer;
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isEmpty(self), { [] }, { if((=(size(self), 1)), { [Range(first(self), first(self), 1)] }, { let answer = []; let start = first(self); let step = -(second(self), first(self)); toDo((+(1, 1)), size(self), { :i | ifFalse((=(-(at(self, i), at(self, -(i, 1))), step)), { add(answer,Range(start, at(self, -(i, 1)), step)); start := at(self, i); if((=(i, size(self))), { add(answer,Range(last(self), last(self), 1)); start := nil }, { step := -(at(self, +(i, 1)), at(self, i)) }) }) }); ifNotNil(start, { add(answer,Range(start, last(self), step)) }); answer }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "asSpanList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_asRangeList_1(_self), _asSpan_1);
  }, ["self"]),
  "{ :self | collect(asRangeList(self),asSpan:/1) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "assertShape",
  ["self", "shape"],
  sl.annotateFunction(function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _assert_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_shape_1(_self), _shape);
      }, []),
    );
  }, ["self", "shape"]),
  "{ :self :shape | assert(self, { =(shape(self), shape) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "atAllUsing",
  ["self", "indexList", "aBlock:/2"],
  sl.annotateFunction(function (_self, _indexList, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _indexList, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _ofSize_2(_species_1(_self), _size_1(_indexList));
    /* Statements */
    _indicesDo_2(
      _indexList,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _answer,
          _index,
          _aBlock_2(_self, _at_2(_indexList, _index)),
        );
      }, ["index"]),
    );
    return _answer;
  }, ["self", "indexList", "aBlock:/2"]),
  "{ :self :indexList :aBlock:/2 | let answer = ofSize(species(self),size(indexList)); indicesDo(indexList, { :index | atPut(answer, index, aBlock(self, at(indexList, index))) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "atAll",
  ["self", "indexList"],
  sl.annotateFunction(function (_self, _indexList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indexList";
      throw new Error(errorMessage);
    } /* Statements */
    return _atAllUsing_3(_self, _indexList, _at_2);
  }, ["self", "indexList"]),
  "{ :self :indexList | atAllUsing(self,indexList, at:/2) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "atAll",
  ["self", "primaryIndices", "secondaryIndices"],
  sl.annotateFunction(function (_self, _primaryIndices, _secondaryIndices) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _primaryIndices, _secondaryIndices";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _atAll_2(_self, _primaryIndices),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _atAll_2(_each, _secondaryIndices);
      }, ["each"]),
    );
  }, ["self", "primaryIndices", "secondaryIndices"]),
  "{ :self :primaryIndices :secondaryIndices | collect(atAll(self,primaryIndices), { :each | atAll(each,secondaryIndices) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "atAll",
  ["self", "primaryIndices", "secondaryIndices", "tertiaryIndices"],
  sl.annotateFunction(
    function (_self, _primaryIndices, _secondaryIndices, _tertiaryIndices) {
      /* ArityCheck */
      if (arguments.length !== 4) {
        const errorMessage =
          "Arity: expected 4, _self, _primaryIndices, _secondaryIndices, _tertiaryIndices";
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(
        _atAll_2(_self, _primaryIndices),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _atAll_3(_each, _secondaryIndices, _tertiaryIndices);
        }, ["each"]),
      );
    },
    ["self", "primaryIndices", "secondaryIndices", "tertiaryIndices"],
  ),
  "{ :self :primaryIndices :secondaryIndices :tertiaryIndices | collect(atAll(self,primaryIndices), { :each | atAll(each,secondaryIndices, tertiaryIndices) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "atAllFold",
  ["self", "indexList"],
  sl.annotateFunction(function (_self, _indexList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indexList";
      throw new Error(errorMessage);
    } /* Statements */
    return _atAllUsing_3(_self, _indexList, _atFold_2);
  }, ["self", "indexList"]),
  "{ :self :indexList | atAllUsing(self,indexList, atFold:/2) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "atOrMissingAll",
  ["self", "indexList"],
  sl.annotateFunction(function (_self, _indexList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indexList";
      throw new Error(errorMessage);
    } /* Statements */
    return _atAllUsing_3(_self, _indexList, _atOrMissing_2);
  }, ["self", "indexList"]),
  "{ :self :indexList | atAllUsing(self,indexList, atOrMissing:/2) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "atOrNilAll",
  ["self", "indexList"],
  sl.annotateFunction(function (_self, _indexList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indexList";
      throw new Error(errorMessage);
    } /* Statements */
    return _atAllUsing_3(_self, _indexList, _atOrNil_2);
  }, ["self", "indexList"]),
  "{ :self :indexList | atAllUsing(self,indexList, atOrNil:/2) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "atAllPin",
  ["self", "indexList"],
  sl.annotateFunction(function (_self, _indexList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indexList";
      throw new Error(errorMessage);
    } /* Statements */
    return _atAllUsing_3(_self, _indexList, _atPin_2);
  }, ["self", "indexList"]),
  "{ :self :indexList | atAllUsing(self,indexList, atPin:/2) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "atAllPath",
  ["self", "indexList"],
  sl.annotateFunction(function (_self, _indexList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indexList";
      throw new Error(errorMessage);
    } /* Statements */
    return _atAllUsing_3(_self, _indexList, _atPath_2);
  }, ["self", "indexList"]),
  "{ :self :indexList | atAllUsing(self,indexList, atPath:/2) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "atAllPut",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _size = _size_1(_self);
    /* Statements */
    _if_3(
      _greaterThanSign_2(_size, 50),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _fromToPut_4(_self, 1, _size_1(_self), _anObject);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _indicesDo_2(
          _self,
          sl.annotateFunction(function (_index) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _index";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(_self, _index, _anObject);
          }, ["index"]),
        );
      }, []),
    );
    return _anObject;
  }, ["self", "anObject"]),
  "{ :self :anObject | let size = size(self); if((>(size, 50)), { fromToPut(self,1, size(self), anObject) }, { indicesDo(self, { :index | atPut(self, index, anObject) }) }); anObject }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "atAllSymmetrical",
  ["self", "indexList"],
  sl.annotateFunction(function (_self, _indexList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indexList";
      throw new Error(errorMessage);
    } /* Statements */
    return _atAllUsing_3(_self, _indexList, _atSymmetrical_2);
  }, ["self", "indexList"]),
  "{ :self :indexList | atAllUsing(self,indexList, atSymmetrical:/2) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "atAllValid",
  ["self", "indexList"],
  sl.annotateFunction(function (_self, _indexList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indexList";
      throw new Error(errorMessage);
    } /* Statements */
    return _deleteMissing_1(_atOrMissingAll_2(_self, _indexList));
  }, ["self", "indexList"]),
  "{ :self :indexList | deleteMissing(atOrMissingAll(self,indexList)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "atAllWrap",
  ["self", "indexList"],
  sl.annotateFunction(function (_self, _indexList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indexList";
      throw new Error(errorMessage);
    } /* Statements */
    return _atAllUsing_3(_self, _indexList, _atWrap_2);
  }, ["self", "indexList"]),
  "{ :self :indexList | atAllUsing(self,indexList, atWrap:/2) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "atFold",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, _foldedIndex_2(_self, _index));
  }, ["self", "index"]),
  "{ :self :index | at(self, foldedIndex(self,index)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "atLastPut",
  ["self", "indexFromEnd", "anObject"],
  sl.annotateFunction(function (_self, _indexFromEnd, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _indexFromEnd, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _atPut_3(
      _self,
      _hyphenMinus_2(_plusSign_2(_size_1(_self), 1), _indexFromEnd),
      _anObject,
    );
  }, ["self", "indexFromEnd", "anObject"]),
  "{ :self :indexFromEnd :anObject | atPut(self, -(+(size(self), 1), indexFromEnd), anObject) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "atMod",
  ["self", "index", "n"],
  sl.annotateFunction(function (_self, _index, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(
      _self,
      _plusSign_2(_percentSign_2(_hyphenMinus_2(_index, 1), _n), 1),
    );
  }, ["self", "index", "n"]),
  "{ :self :index :n | at(self, +(%(-(index, 1), n), 1)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "atMod",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    /* Statements */
    return _at_2(
      _self,
      _plusSign_2(_percentSign_2(_hyphenMinus_2(_index, 1), _n), 1),
    );
  }, ["self", "index"]),
  "{ :self :index | let n = size(self); at(self, +(%(-(index, 1), n), 1)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "atPin",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, _pinnedIndex_2(_self, _index));
  }, ["self", "index"]),
  "{ :self :index | at(self, pinnedIndex(self,index)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "atPutPin",
  ["self", "index", "value"],
  sl.annotateFunction(function (_self, _index, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _value";
      throw new Error(errorMessage);
    } /* Statements */
    return _atPut_3(_self, _pinnedIndex_2(_self, _index), _value);
  }, ["self", "index", "value"]),
  "{ :self :index :value | atPut(self,pinnedIndex(self,index), value) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "atPutWrap",
  ["self", "index", "anObject"],
  sl.annotateFunction(function (_self, _index, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _anObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _wrapExclusive_3(_index, 1, _plusSign_2(_size_1(_self), 1));
    /* Statements */
    return _atPut_3(_self, _k, _anObject);
  }, ["self", "index", "anObject"]),
  "{ :self :index :anObject | let k = wrapExclusive(index,1, +(size(self), 1)); atPut(self, k, anObject) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "atSymmetrical",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    _ifFalse_2(
      _isInteger_1(_index),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "atSymmetrical: invalid index");
      }, []),
    );
    return _if_3(
      _greaterThanSign_2(_index, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_self, _index);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(
          _self,
          _plusSign_2(_plusSign_2(_size_1(_self), _index), 1),
        );
      }, []),
    );
  }, ["self", "index"]),
  "{ :self :index | ifFalse(isInteger(index), { error(self,'atSymmetrical: invalid index') }); if((>(index, 0)), { at(self,index) }, { at(self,+(+(size(self), index), 1)) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "atUsing",
  ["self", "operand", "aBlock:/1"],
  sl.annotateFunction(function (_self, _operand, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _operand, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isCollection_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _ofSize_2(_species_1(_self), _size_1(_operand));
        /* Statements */
        _indicesDo_2(
          _operand,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(_answer, _each, _aBlock_1(_at_2(_operand, _each)));
          }, ["each"]),
        );
        return _answer;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_self, _operand);
      }, []),
    );
  }, ["self", "operand", "aBlock:/1"]),
  "{ :self :operand :aBlock:/1 | if(isCollection(operand), { let answer = ofSize(species(self),size(operand)); indicesDo(operand, { :each | atPut(answer, each, aBlock(at(operand,each))) }); answer }, { aBlock(self, operand) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "atWrap",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _wrapExclusive_3(_index, 1, _plusSign_2(_size_1(_self), 1));
    /* Statements */
    return _at_2(_self, _k);
  }, ["self", "index"]),
  "{ :self :index | let k = wrapExclusive(index,1, +(size(self), 1)); at(self, k) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "atRandom",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _randomChoice_3(_self, _system, []);
  }, ["self"]),
  "{ :self | randomChoice(self,system, []) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "before",
  ["self", "target"],
  sl.annotateFunction(function (_self, _target) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _target";
      throw new Error(errorMessage);
    } /* Statements */
    return _beforeIfAbsent_3(
      _self,
      _target,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _errorNotFound_2(_self, _target);
      }, []),
    );
  }, ["self", "target"]),
  "{ :self :target | beforeIfAbsent(self, target, { errorNotFound(self,target) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "beforeIfAbsent",
  ["self", "target", "exceptionBlock:/0"],
  sl.annotateFunction(function (_self, _target, _exceptionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _target, _exceptionBlock_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = _indexOf_2(_self, _target);
    /* Statements */
    return _if_3(
      _lessThanSign_2(_index, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _exceptionBlock_0();
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_self, _hyphenMinus_2(_index, 1));
      }, []),
    );
  }, ["self", "target", "exceptionBlock:/0"]),
  "{ :self :target :exceptionBlock:/0 | let index = indexOf(self,target); if((<(index, 2)), { exceptionBlock() }, { at(self, -(index, 1)) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "beginsWith",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isSequenceable_1(_aList),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _return_1";
            throw new Error(errorMessage);
          } /* Statements */
          _ifTrue_2(
            _lessThanSign_2(_size_1(_self), _size_1(_aList)),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(false);
            }, []),
          );
          _indicesDo_2(
            _aList,
            sl.annotateFunction(function (_index) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _index";
                throw new Error(errorMessage);
              } /* Statements */
              return _ifFalse_2(
                _equalsSign_2(_at_2(_aList, _index), _at_2(_self, _index)),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _return_1(false);
                }, []),
              );
            }, ["index"]),
          );
          return true;
        }, ["return:/1"]));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Sequenceable>>beginsWith: not a sequence");
      }, []),
    );
  }, ["self", "aList"]),
  "{ :self :aList | if(isSequenceable(aList), { valueWithReturn({ :return:/1 | ifTrue((<(size(self), size(aList))), { return(false) }); indicesDo(aList, { :index | ifFalse((=(at(aList, index), at(self, index))), { return(false) }) }); true }) }, { error(self,'@Sequenceable>>beginsWith: not a sequence') }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "beginsWithAny",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(
      _aCollection,
      sl.annotateFunction(function (_prefix) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _prefix";
          throw new Error(errorMessage);
        } /* Statements */
        return _beginsWith_2(_self, _prefix);
      }, ["prefix"]),
    );
  }, ["self", "aCollection"]),
  "{ :self :aCollection | anySatisfy(aCollection, { :prefix | beginsWith(self,prefix) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "binaryDetectIndex",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _binaryDetectIndex_2(
      _size_1(_self),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_at_2(_self, _i));
      }, ["i"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | binaryDetectIndex(size(self), { :i | aBlock(at(self, i)) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "binarySearch",
  ["self", "item"],
  sl.annotateFunction(function (_self, _item) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _item";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _i = _binaryDetectIndex_2(
      _n,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSignEqualsSign_2(_at_2(_self, _each), _item);
      }, ["each"]),
    );
    /* Statements */
    return _if_3(
      _ampersand_2(
        _lessThanSignEqualsSign_2(_i, _n),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_at_2(_self, _i), _item);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _i;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
    );
  }, ["self", "item"]),
  "{ :self :item | let n = size(self); let i = binaryDetectIndex(n, { :each | >=(at(self, each), item) }); if((&((<=(i, n)), { =(at(self, i), item) })), { i }, { 0 }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "binarySearchLeftmost",
  ["self", "item"],
  sl.annotateFunction(function (_self, _item) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _item";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _l = 0;
    let _r = _n;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_l, _r);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _m = _floor_1(_solidus_2(_plusSign_2(_l, _r), 2));
        /* Statements */
        return _if_3(
          _lessThanSign_2(_at_2(_self, _plusSign_2(_m, 1)), _item),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _l = _plusSign_2(_m, 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _r = _m;
          }, []),
        );
      }, []),
    );
    return _if_3(
      _ampersand_2(
        _lessThanSign_2(_l, _n),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_at_2(_self, _plusSign_2(_l, 1)), _item);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(_l, 1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _l;
      }, []),
    );
  }, ["self", "item"]),
  "{ :self :item | let n = size(self); let l = 0; let r = n; whileTrue({ <(l, r) }, { let m = floor(/((+(l, r)), 2)); if((<(at(self, +(m, 1)), item)), { l := +(m, 1) }, { r := m }) }); if((&(<(l, n), { =(at(self, +(l, 1)), item) })), { +(l, 1) }, { l }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "binarySearchRightmost",
  ["self", "item"],
  sl.annotateFunction(function (_self, _item) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _item";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _l = 0;
    let _r = _n;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_l, _r);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _m = _floor_1(_solidus_2(_plusSign_2(_l, _r), 2));
        /* Statements */
        return _if_3(
          _greaterThanSign_2(_at_2(_self, _plusSign_2(_m, 1)), _item),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _r = _m;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _l = _plusSign_2(_m, 1);
          }, []),
        );
      }, []),
    );
    return _if_3(
      _equalsSign_2(_r, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_r, _n),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(_n, 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(_at_2(_self, _r), _item),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _r;
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _plusSign_2(_r, 1);
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "item"]),
  "{ :self :item | let n = size(self); let l = 0; let r = n; whileTrue({ <(l, r) }, { let m = floor(/((+(l, r)), 2)); if((>(at(self, +(m, 1)), item)), { r := m }, { l := +(m, 1) }) }); if((=(r, 0)), { 1 }, { if((=(r, n)), { +(n, 1) }, { if((=(at(self, r), item)), { r }, { +(r, 1) }) }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "bisect",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _binarySearchRightmost_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | binarySearchRightmost(self,anObject) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "cartesianIndex",
  ["shape", "anInteger"],
  sl.annotateFunction(function (_shape, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _shape, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _mixedRadixEncode_2(_hyphenMinus_2(_anInteger, 1), _shape),
      1,
    );
  }, ["shape", "anInteger"]),
  "{ :shape :anInteger | +(mixedRadixEncode((-(anInteger, 1)),shape), 1) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "centerArray",
  ["aList", "anInteger", "anObject"],
  sl.annotateFunction(function (_aList, _anInteger, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _aList, _anInteger, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_size_1(_aList), _anInteger),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_aList, "centerArray");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _prefixSize = _max_2(
          _ceiling_1(
            _solidus_2(_hyphenMinus_2(_anInteger, _size_1(_aList)), 2),
          ),
          0,
        );
        let _suffixSize = _max_2(
          _hyphenMinus_2(
            _hyphenMinus_2(_anInteger, _size_1(_aList)),
            _prefixSize,
          ),
          0,
        );
        /* Statements */
        return _plusSignPlusSign_2(
          _plusSignPlusSign_2(_numberSign_2(_anObject, _prefixSize), _aList),
          _numberSign_2(_anObject, _suffixSize),
        );
      }, []),
    );
  }, ["aList", "anInteger", "anObject"]),
  "{ :aList :anInteger :anObject | if((>(size(aList), anInteger)), { error(aList,'centerArray') }, { let prefixSize = max(ceiling((/(-(anInteger, size(aList)), 2))),0); let suffixSize = max((-(-(anInteger, size(aList)), prefixSize)),0); ++(++((#(anObject, prefixSize)), aList), (#(anObject, suffixSize))) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "chineseRemainder",
  ["r", "m"],
  sl.annotateFunction(function (_r, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _r, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _product_1(_m);
    let _q = _sum_1(
      _withCollect_3(
        _m,
        _r,
        sl.annotateFunction(function (_i, _j) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _i, _j";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(
            _asterisk_2(_j, _modularInverse_2(_solidus_2(_p, _i), _i)),
            _solidus_2(_p, _i),
          );
        }, ["i", "j"]),
      ),
    );
    /* Statements */
    return _percentSign_2(_q, _p);
  }, ["r", "m"]),
  "{ :r :m | let p = product(m); let q = sum(withCollect(m, r, { :i :j | *(*(j, modularInverse((/(p, i)),i)), (/(p, i))) })); %(q, p) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "collect",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _ofSize_2(_species_1(_self), _size_1(_self));
    /* Statements */
    _indicesDo_2(
      _self,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_answer, _index, _aBlock_1(_at_2(_self, _index)));
      }, ["index"]),
    );
    return _answer;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let answer = ofSize(species(self),size(self)); indicesDo(self, { :index | atPut(answer, index, aBlock(at(self, index))) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "combinationsAtATimeDo",
  ["self", "kk", "aBlock:/1"],
  sl.annotateFunction(function (_self, _kk, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _kk, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _aCollection = _List_1(_kk);
    /* Statements */
    return _combinationsAtInAfterDo_5(_self, 1, _aCollection, 0, _aBlock_1);
  }, ["self", "kk", "aBlock:/1"]),
  "{ :self :kk :aBlock:/1 | let aCollection = List(kk); combinationsAtInAfterDo(self,1, aCollection, 0, aBlock:/1) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "combinationsAtInAfterDo",
  ["self", "j", "aCollection", "n", "aBlock:/1"],
  sl.annotateFunction(function (_self, _j, _aCollection, _n, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _j, _aCollection, _n, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _toDo_3(
      _plusSign_2(_n, 1),
      _size_1(_self),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(_aCollection, _j, _at_2(_self, _index));
        return _if_3(
          _equalsSign_2(_j, _size_1(_aCollection)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_1(_aCollection);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _combinationsAtInAfterDo_5(
              _self,
              _plusSign_2(_j, 1),
              _aCollection,
              _index,
              _aBlock_1,
            );
          }, []),
        );
      }, ["index"]),
    );
  }, ["self", "j", "aCollection", "n", "aBlock:/1"]),
  "{ :self :j :aCollection :n :aBlock:/1 | toDo((+(n, 1)), size(self), { :index | atPut(aCollection, j, at(self, index)); if((=(j, size(aCollection))), { aBlock(aCollection) }, { combinationsAtInAfterDo(self,+(j, 1), aCollection, index, aBlock:/1) }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "combinations",
  ["self", "m"],
  sl.annotateFunction(function (_self, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _combinationsAtATimeDo_3(
      _self,
      _m,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _copy_1(_each));
      }, ["each"]),
    );
    return _answer;
  }, ["self", "m"]),
  "{ :self :m | let answer = []; combinationsAtATimeDo(self, m, { :each | add(answer,copy(each)) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "compare",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _m = _size_1(_aList);
    /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _toDo_3(
        1,
        _min_2(_n, _m),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _c = _compare_2(_at_2(_self, _i), _at_2(_aList, _i));
          /* Statements */
          return _ifTrue_2(
            _exclamationMarkEqualsSign_2(_c, 0),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_c);
            }, []),
          );
        }, ["i"]),
      );
      return _compare_2(_n, _m);
    }, ["return:/1"]));
  }, ["self", "aList"]),
  "{ :self :aList | let n = size(self); let m = size(aList); valueWithReturn({ :return:/1 | toDo(1, min(n,m), { :i | let c = compare(at(self, i),at(aList, i)); ifTrue((!=(c, 0)), { return(c) }) }); compare(n,m) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "catenateSeparatedBy",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifEmpty_3(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _copy_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answerSize = _plusSign_2(
          _injectInto_3(
            _self,
            0,
            sl.annotateFunction(function (_sum, _each) {
              /* ArityCheck */
              if (arguments.length !== 2) {
                const errorMessage = "Arity: expected 2, _sum, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _plusSign_2(_sum, _size_1(_each));
            }, ["sum", "each"]),
          ),
          _asterisk_2(_hyphenMinus_2(_size_1(_self), 1), _size_1(_aList)),
        );
        let _answer = _ofSize_2(_species_1(_self), _answerSize);
        let _index = 1;
        let _put_1 = sl.annotateFunction(function (_items) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _items";
            throw new Error(errorMessage);
          } /* Statements */
          return _do_2(
            _items,
            sl.annotateFunction(function (_item) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _item";
                throw new Error(errorMessage);
              } /* Statements */
              _atPut_3(_answer, _index, _item);
              return _index = _plusSign_2(_index, 1);
            }, ["item"]),
          );
        }, ["items"]);
        /* Statements */
        _allButLastDo_2(
          _self,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            _put_1(_each);
            return _put_1(_aList);
          }, ["each"]),
        );
        _put_1(_last_1(_self));
        return _answer;
      }, []),
    );
  }, ["self", "aList"]),
  "{ :self :aList | ifEmpty(self, { copy(self) }, { let answerSize = +(injectInto(self, 0, { :sum :each | +(sum, size(each)) }), (*(-(size(self), 1), size(aList)))); let answer = ofSize(species(self),answerSize); let index = 1; let put = { :items | do(items, { :item | atPut(answer, index, item); index := +(index, 1) }) }; allButLastDo(self, { :each | put(each); put(aList) }); put(last(self)); answer }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "catenate",
  ["self", "isChecked"],
  sl.annotateFunction(function (_self, _isChecked) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _isChecked";
      throw new Error(errorMessage);
    } /* Statements */
    _ifTrue_2(
      _isChecked,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifFalse_2(
          _equalsSign_2(_elementType_1(_self), _typeOf_1(_self)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(
              _self,
              "@Sequenceable>>catenate: invalid element type",
            );
          }, []),
        );
      }, []),
    );
    return _catenateSeparatedBy_2(_self, []);
  }, ["self", "isChecked"]),
  "{ :self :isChecked | ifTrue(isChecked, { ifFalse((=(elementType(self), typeOf(self))), { error(self,'@Sequenceable>>catenate: invalid element type') }) }); catenateSeparatedBy(self,[]) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "catenate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _catenate_2(_self, false);
  }, ["self"]),
  "{ :self | catenate(self,false) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "collect",
  ["self", "aSequence", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aSequence, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aSequence, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _withCollect_3(_self, _aSequence, _aBlock_2);
  }, ["self", "aSequence", "aBlock:/2"]),
  "{ :self :aSequence :aBlock:/2 | withCollect(self,aSequence, aBlock:/2) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "collect",
  ["self", "aSequence", "anotherSequence", "aBlock:/3"],
  sl.annotateFunction(
    function (_self, _aSequence, _anotherSequence, _aBlock_3) {
      /* ArityCheck */
      if (arguments.length !== 4) {
        const errorMessage =
          "Arity: expected 4, _self, _aSequence, _anotherSequence, _aBlock_3";
        throw new Error(errorMessage);
      } /* Statements */
      return _withWithCollect_4(_self, _aSequence, _anotherSequence, _aBlock_3);
    },
    ["self", "aSequence", "anotherSequence", "aBlock:/3"],
  ),
  "{ :self :aSequence :anotherSequence :aBlock:/3 | withWithCollect(self,aSequence, anotherSequence, aBlock:/3) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "constantArray",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _reshape_2([_anObject], _self);
  }, ["self", "anObject"]),
  "{ :self :anObject | reshape([anObject],self) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "convergents",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_prefixes_1(_self), _fromContinuedFraction_1);
  }, ["self"]),
  "{ :self | collect(prefixes(self),fromContinuedFraction:/1) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "copyFromTo",
  ["self", "start", "stop"],
  sl.annotateFunction(function (_self, _start, _stop) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _start, _stop";
      throw new Error(errorMessage);
    } /* Statements */
    return _toAsCollect_4(
      1,
      _plusSign_2(_hyphenMinus_2(_stop, _start), 1),
      _species_1(_self),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_self, _hyphenMinus_2(_plusSign_2(_index, _start), 1));
      }, ["index"]),
    );
  }, ["self", "start", "stop"]),
  "{ :self :start :stop | toAsCollect(1, +(-(stop, start), 1), species(self), { :index | at(self, -(+(index, start), 1)) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "copyFromToInto",
  ["self", "start", "stop", "aList"],
  sl.annotateFunction(function (_self, _start, _stop, _aList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _start, _stop, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _toDo_3(
      1,
      _plusSign_2(_hyphenMinus_2(_stop, _start), 1),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _aList,
          _index,
          _at_2(_self, _hyphenMinus_2(_plusSign_2(_index, _start), 1)),
        );
      }, ["index"]),
    );
  }, ["self", "start", "stop", "aList"]),
  "{ :self :start :stop :aList | toDo(1, +(-(stop, start), 1), { :index | atPut(aList, index, at(self, -(+(index, start), 1))) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "copyFromToPin",
  ["self", "start", "stop"],
  sl.annotateFunction(function (_self, _start, _stop) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _start, _stop";
      throw new Error(errorMessage);
    } /* Statements */
    return _toAsCollect_4(
      1,
      _plusSign_2(_hyphenMinus_2(_stop, _start), 1),
      _species_1(_self),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPin_2(_self, _hyphenMinus_2(_plusSign_2(_index, _start), 1));
      }, ["index"]),
    );
  }, ["self", "start", "stop"]),
  "{ :self :start :stop | toAsCollect(1, +(-(stop, start), 1), species(self), { :index | atPin(self,-(+(index, start), 1)) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "copyFromToWrap",
  ["self", "start", "stop"],
  sl.annotateFunction(function (_self, _start, _stop) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _start, _stop";
      throw new Error(errorMessage);
    } /* Statements */
    return _toAsCollect_4(
      1,
      _plusSign_2(_hyphenMinus_2(_stop, _start), 1),
      _species_1(_self),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _atWrap_2(_self, _hyphenMinus_2(_plusSign_2(_index, _start), 1));
      }, ["index"]),
    );
  }, ["self", "start", "stop"]),
  "{ :self :start :stop | toAsCollect(1, +(-(stop, start), 1), species(self), { :index | atWrap(self,-(+(index, start), 1)) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "copyReplaceAllWith",
  ["self", "old", "new"],
  sl.annotateFunction(function (_self, _old, _new) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _old, _new";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _indexList = _indicesOfSubstring_2(_self, _old);
    /* Statements */
    return _if_3(
      _isEmpty_1(_indexList),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _copy_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _n = _size_1(_new);
        /* Statements */
        return _if_3(
          _equalsSign_2(_size_1(_old), _n),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _answer = _copy_1(_self);
            /* Statements */
            _do_2(
              _indexList,
              sl.annotateFunction(function (_i) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _i";
                  throw new Error(errorMessage);
                } /* Statements */
                return _replaceFromToWith_4(
                  _answer,
                  _i,
                  _hyphenMinus_2(_plusSign_2(_i, _n), 1),
                  _new,
                );
              }, ["i"]),
            );
            return _answer;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _answer = [];
            let _i = 1;
            let _k = _size_1(_old);
            /* Statements */
            _do_2(
              _indexList,
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Statements */
                _add_2(
                  _answer,
                  _copyFromTo_3(_self, _i, _hyphenMinus_2(_j, 1)),
                );
                _add_2(_answer, _new);
                return _i = _plusSign_2(_j, _k);
              }, ["j"]),
            );
            _add_2(_answer, _copyFromTo_3(_self, _i, _size_1(_self)));
            return _catenate_1(_answer);
          }, []),
        );
      }, []),
    );
  }, ["self", "old", "new"]),
  "{ :self :old :new | let indexList = indicesOfSubstring(self,old); if(isEmpty(indexList), { copy(self) }, { let n = size(new); if((=(size(old), n)), { let answer = copy(self); do(indexList, { :i | replaceFromToWith(answer,i, -(+(i, n), 1), new) }); answer }, { let answer = []; let i = 1; let k = size(old); do(indexList, { :j | add(answer,copyFromTo(self,i, -(j, 1))); add(answer,new); i := +(j, k) }); add(answer,copyFromTo(self,i, size(self))); catenate(answer) }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "copyReplaceFromToWith",
  ["self", "start", "stop", "aCollection"],
  sl.annotateFunction(function (_self, _start, _stop, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _start, _stop, _aCollection";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _end = _plusSign_2(_hyphenMinus_2(_start, 1), _size_1(_aCollection));
    let _newSize = _hyphenMinus_2(_plusSign_2(_size_1(_self), _end), _stop);
    let _answer = _ofSize_2(_species_1(_self), _newSize);
    /* Statements */
    _ifTrue_2(
      _greaterThanSign_2(_start, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _replaceFromToWithStartingAt_5(
          _answer,
          1,
          _hyphenMinus_2(_start, 1),
          _self,
          1,
        );
      }, []),
    );
    _ifTrue_2(
      _lessThanSignEqualsSign_2(_start, _end),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _replaceFromToWithStartingAt_5(
          _answer,
          _start,
          _end,
          _aCollection,
          1,
        );
      }, []),
    );
    _ifTrue_2(
      _lessThanSign_2(_end, _newSize),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _replaceFromToWithStartingAt_5(
          _answer,
          _plusSign_2(_end, 1),
          _newSize,
          _self,
          _plusSign_2(_stop, 1),
        );
      }, []),
    );
    return _answer;
  }, ["self", "start", "stop", "aCollection"]),
  "{ :self :start :stop :aCollection | let end = +(-(start, 1), size(aCollection)); let newSize = -(+(size(self), end), stop); let answer = ofSize(species(self),newSize); ifTrue((>(start, 1)), { replaceFromToWithStartingAt(answer,1, -(start, 1), self, 1) }); ifTrue((<=(start, end)), { replaceFromToWithStartingAt(answer,start, end, aCollection, 1) }); ifTrue((<(end, newSize)), { replaceFromToWithStartingAt(answer,+(end, 1), newSize, self, +(stop, 1)) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "copyReplaceFromToWithObject",
  ["self", "start", "stop", "anObject"],
  sl.annotateFunction(function (_self, _start, _stop, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _start, _stop, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _copyReplaceFromToWith_4(
      _self,
      _start,
      _stop,
      _numberSign_2(
        _anObject,
        _max_2(_plusSign_2(_hyphenMinus_2(_stop, _start), 1), 1),
      ),
    );
  }, ["self", "start", "stop", "anObject"]),
  "{ :self :start :stop :anObject | copyReplaceFromToWith(self,start, stop, #(anObject, max((+(-(stop, start), 1)),1))) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "copyUpThrough",
  ["self", "anElement"],
  sl.annotateFunction(function (_self, _anElement) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anElement";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = _indexOf_2(_self, _anElement);
    /* Statements */
    return _if_3(
      _equalsSign_2(_index, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _copy_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _first_2(_self, _index);
      }, []),
    );
  }, ["self", "anElement"]),
  "{ :self :anElement | let index = indexOf(self,anElement); if((=(index, 0)), { copy(self) }, { first(self,index) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "copyUpTo",
  ["self", "anElement"],
  sl.annotateFunction(function (_self, _anElement) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anElement";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = _indexOf_2(_self, _anElement);
    /* Statements */
    return _if_3(
      _equalsSign_2(_index, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _copy_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _first_2(_self, _hyphenMinus_2(_index, 1));
      }, []),
    );
  }, ["self", "anElement"]),
  "{ :self :anElement | let index = indexOf(self,anElement); if((=(index, 0)), { copy(self) }, { first(self,-(index, 1)) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "copyUpToLast",
  ["self", "anElement"],
  sl.annotateFunction(function (_self, _anElement) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anElement";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = _lastIndexOf_2(_self, _anElement);
    /* Statements */
    return _if_3(
      _equalsSign_2(_index, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _copy_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _first_2(_self, _hyphenMinus_2(_index, 1));
      }, []),
    );
  }, ["self", "anElement"]),
  "{ :self :anElement | let index = lastIndexOf(self,anElement); if((=(index, 0)), { copy(self) }, { first(self,-(index, 1)) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "copyWithFirst",
  ["self", "newElement"],
  sl.annotateFunction(function (_self, _newElement) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _newElement";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _copy_1(_self);
    /* Statements */
    _addFirst_2(_answer, _newElement);
    return _answer;
  }, ["self", "newElement"]),
  "{ :self :newElement | let answer = copy(self); addFirst(answer,newElement); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "cross",
  ["u"],
  sl.annotateFunction(function (_u) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _u";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_u, 2);
    let _x = _at_2(__SplVar1, 1);
    let _y = _at_2(__SplVar1, 2);
    /* Statements */
    return [_hyphenMinus_1(_y), _x];
  }, ["u"]),
  "{ :u | let __SplVar1 = assertIsOfSize(u, 2); let x = at(__SplVar1, 1); let y = at(__SplVar1, 2); [-(y), x] }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "cross",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_u);
    /* Statements */
    return _if_3(
      _equalsSign_2(_k, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar2 = _assertIsOfSize_2(_u, 2);
        let _ux = _at_2(__SplVar2, 1);
        let _uy = _at_2(__SplVar2, 2);
        let __SplVar3 = _assertIsOfSize_2(_v, 2);
        let _vx = _at_2(__SplVar3, 1);
        let _vy = _at_2(__SplVar3, 2);
        /* Statements */
        return _hyphenMinus_2(_asterisk_2(_ux, _vy), _asterisk_2(_uy, _vx));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar4 = _assertIsOfSize_2(_u, 3);
        let _ux = _at_2(__SplVar4, 1);
        let _uy = _at_2(__SplVar4, 2);
        let _uz = _at_2(__SplVar4, 3);
        let __SplVar5 = _assertIsOfSize_2(_v, 3);
        let _vx = _at_2(__SplVar5, 1);
        let _vy = _at_2(__SplVar5, 2);
        let _vz = _at_2(__SplVar5, 3);
        /* Statements */
        return [
          _hyphenMinus_2(_asterisk_2(_uy, _vz), _asterisk_2(_uz, _vy)),
          _hyphenMinus_2(_asterisk_2(_uz, _vx), _asterisk_2(_ux, _vz)),
          _hyphenMinus_2(_asterisk_2(_ux, _vy), _asterisk_2(_uy, _vx)),
        ];
      }, []),
    );
  }, ["u", "v"]),
  "{ :u :v | let k = size(u); if((=(k, 2)), { let __SplVar2 = assertIsOfSize(u, 2); let ux = at(__SplVar2, 1); let uy = at(__SplVar2, 2); let __SplVar3 = assertIsOfSize(v, 2); let vx = at(__SplVar3, 1); let vy = at(__SplVar3, 2); -((*(ux, vy)), (*(uy, vx))) }, { let __SplVar4 = assertIsOfSize(u, 3); let ux = at(__SplVar4, 1); let uy = at(__SplVar4, 2); let uz = at(__SplVar4, 3); let __SplVar5 = assertIsOfSize(v, 3); let vx = at(__SplVar5, 1); let vy = at(__SplVar5, 2); let vz = at(__SplVar5, 3); [-((*(uy, vz)), (*(uz, vy))), -((*(uz, vx)), (*(ux, vz))), -((*(ux, vy)), (*(uy, vx)))] }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "crossedMultiply",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _withCollectCrossed_3(_self, _aList, _asterisk_2);
  }, ["self", "aList"]),
  "{ :self :aList | withCollectCrossed(self,aList, *) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "cumulativeMax",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _scan_2(_self, _max_2);
  }, ["self"]),
  "{ :self | scan(self,max:/2) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "cumulativeMin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _scan_2(_self, _min_2);
  }, ["self"]),
  "{ :self | scan(self,min:/2) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "deleteAdjacentDuplicates",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = [_first_1(_self)];
        /* Statements */
        _adjacentPairsDo_2(
          _self,
          sl.annotateFunction(function (_i, _j) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _i, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifFalse_2(
              _aBlock_2(_i, _j),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(_answer, _j);
              }, []),
            );
          }, ["i", "j"]),
        );
        return _answer;
      }, []),
    );
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | if(isEmpty(self), { [] }, { let answer = [first(self)]; adjacentPairsDo(self, { :i :j | ifFalse(aBlock(i, j), { add(answer,j) }) }); answer }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "deleteAdjacentDuplicates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _deleteAdjacentDuplicates_2(_self, _equalsSign_2);
  }, ["self"]),
  "{ :self | deleteAdjacentDuplicates(self,=) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "detectIndex",
  ["self", "predicate:/1"],
  sl.annotateFunction(function (_self, _predicate_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _predicate_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _detectIndexStartingAtIfFoundIfNone_5(
      _self,
      _predicate_1,
      1,
      _identity_1,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        }
      }, []),
    );
  }, ["self", "predicate:/1"]),
  "{ :self :predicate:/1 | detectIndexStartingAtIfFoundIfNone(self,predicate:/1, 1, identity:/1, {  }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "detectIndexIfFound",
  ["self", "predicate:/1", "ifFound:/1"],
  sl.annotateFunction(function (_self, _predicate_1, _ifFound_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _predicate_1, _ifFound_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _detectIndexStartingAtIfFoundIfNone_5(
      _self,
      _predicate_1,
      1,
      _ifFound_1,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        }
      }, []),
    );
  }, ["self", "predicate:/1", "ifFound:/1"]),
  "{ :self :predicate:/1 :ifFound:/1 | detectIndexStartingAtIfFoundIfNone(self,predicate:/1, 1, ifFound:/1, {  }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "detectIndexIfFoundIfNone",
  ["self", "predicate:/1", "ifFound:/1", "ifNone:/0"],
  sl.annotateFunction(function (_self, _predicate_1, _ifFound_1, _ifNone_0) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _predicate_1, _ifFound_1, _ifNone_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _detectIndexStartingAtIfFoundIfNone_5(
      _self,
      _predicate_1,
      1,
      _ifFound_1,
      _ifNone_0,
    );
  }, ["self", "predicate:/1", "ifFound:/1", "ifNone:/0"]),
  "{ :self :predicate:/1 :ifFound:/1 :ifNone:/0 | detectIndexStartingAtIfFoundIfNone(self,predicate:/1, 1, ifFound:/1, ifNone:/0) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "detectIndexStartingAt",
  ["self", "predicate:/1", "startIndex"],
  sl.annotateFunction(function (_self, _predicate_1, _startIndex) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _predicate_1, _startIndex";
      throw new Error(errorMessage);
    } /* Statements */
    return _detectIndexStartingAtIfFoundIfNone_5(
      _self,
      _predicate_1,
      _startIndex,
      _identity_1,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        }
      }, []),
    );
  }, ["self", "predicate:/1", "startIndex"]),
  "{ :self :predicate:/1 :startIndex | detectIndexStartingAtIfFoundIfNone(self,predicate:/1, startIndex, identity:/1, {  }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "detectIndexStartingAtIfFoundIfNone",
  ["self", "predicate:/1", "startIndex", "ifFound:/1", "ifNone:/0"],
  sl.annotateFunction(
    function (_self, _predicate_1, _startIndex, _ifFound_1, _ifNone_0) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _self, _predicate_1, _startIndex, _ifFound_1, _ifNone_0";
        throw new Error(errorMessage);
      } /* Statements */
      return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _return_1";
          throw new Error(errorMessage);
        } /* Statements */
        _toDo_3(
          _startIndex,
          _size_1(_self),
          sl.annotateFunction(function (_index) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _index";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _predicate_1(_at_2(_self, _index)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _return_1(_ifFound_1(_index));
              }, []),
            );
          }, ["index"]),
        );
        return _ifNone_0();
      }, ["return:/1"]));
    },
    ["self", "predicate:/1", "startIndex", "ifFound:/1", "ifNone:/0"],
  ),
  "{ :self :predicate:/1 :startIndex :ifFound:/1 :ifNone:/0 | valueWithReturn({ :return:/1 | toDo(startIndex, size(self), { :index | ifTrue(predicate(at(self, index)), { return(ifFound(index)) }) }); ifNone() }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "detectIndices",
  ["self", "predicate:/1"],
  sl.annotateFunction(function (_self, _predicate_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _predicate_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _toDo_3(
      1,
      _size_1(_self),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _predicate_1(_at_2(_self, _i)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _i);
          }, []),
        );
      }, ["i"]),
    );
    return _answer;
  }, ["self", "predicate:/1"]),
  "{ :self :predicate:/1 | let answer = []; toDo(1, size(self), { :i | ifTrue(predicate(at(self,i)), { add(answer,i) }) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "detectStartingAt",
  ["self", "predicate:/1", "startIndex"],
  sl.annotateFunction(function (_self, _predicate_1, _startIndex) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _predicate_1, _startIndex";
      throw new Error(errorMessage);
    } /* Statements */
    return _detectStartingAtIfFoundIfNone_5(
      _self,
      _predicate_1,
      _startIndex,
      sl.annotateFunction(function (_item) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _item";
          throw new Error(errorMessage);
        } /* Statements */
        return _item;
      }, ["item"]),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Sequenceable>>detectStartingAt: no such item");
      }, []),
    );
  }, ["self", "predicate:/1", "startIndex"]),
  "{ :self :predicate:/1 :startIndex | detectStartingAtIfFoundIfNone(self, predicate:/1, startIndex, { :item | item }, { error(self,'@Sequenceable>>detectStartingAt: no such item') }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "detectStartingAtIfFoundIfNone",
  ["self", "predicate:/1", "startIndex", "ifFound:/1", "ifNone:/0"],
  sl.annotateFunction(
    function (_self, _predicate_1, _startIndex, _ifFound_1, _ifNone_0) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _self, _predicate_1, _startIndex, _ifFound_1, _ifNone_0";
        throw new Error(errorMessage);
      } /* Statements */
      return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _return_1";
          throw new Error(errorMessage);
        } /* Statements */
        _toDo_3(
          _startIndex,
          _size_1(_self),
          sl.annotateFunction(function (_index) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _index";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _item = _at_2(_self, _index);
            /* Statements */
            return _ifTrue_2(
              _predicate_1(_item),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _return_1(_ifFound_1(_item));
              }, []),
            );
          }, ["index"]),
        );
        return _ifNone_0();
      }, ["return:/1"]));
    },
    ["self", "predicate:/1", "startIndex", "ifFound:/1", "ifNone:/0"],
  ),
  "{ :self :predicate:/1 :startIndex :ifFound:/1 :ifNone:/0 | valueWithReturn({ :return:/1 | toDo(startIndex, size(self), { :index | let item = at(self, index); ifTrue(predicate(item), { return(ifFound(item)) }) }); ifNone() }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "differences",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _partitionCollect_4(
      _self,
      2,
      1,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _hyphenMinus_2(_at_2(_each, 2), _at_2(_each, 1));
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self | partitionCollect(self, 2, 1, { :each | -(at(each, 2), at(each, 1)) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "differences",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _next = _differences_1(_self);
    /* Statements */
    return _if_3(
      _greaterThanSign_2(_anInteger, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _differences_2(_next, _hyphenMinus_2(_anInteger, 1));
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
  }, ["self", "anInteger"]),
  "{ :self :anInteger | let next = differences(self); if((>(anInteger, 1)), { differences(next,-(anInteger, 1)) }, { next }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "differencesBy",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _adjacentPairsCollect_2(
      _self,
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_j, _i);
      }, ["i", "j"]),
    );
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | adjacentPairsCollect(self, { :i :j | aBlock(j, i) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "discreteLaplacian",
  ["y", "h"],
  sl.annotateFunction(function (_y, _h) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _y, _h";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _differences_2(_y, 2);
    let _n = _size_1(_a);
    let _lhs = _plusSign_2(
      _at_2(_a, 1),
      _hyphenMinus_2(_at_2(_a, 1), _at_2(_a, 2)),
    );
    let _rhs = _plusSign_2(
      _at_2(_a, _n),
      _hyphenMinus_2(_at_2(_a, _n), _at_2(_a, _hyphenMinus_2(_n, 1))),
    );
    /* Statements */
    _addFirst_2(_a, _lhs);
    _addLast_2(_a, _rhs);
    return _solidus_2(_a, _asterisk_2(4, _square_1(_h)));
  }, ["y", "h"]),
  "{ :y :h | let a = differences(y,2); let n = size(a); let lhs = +(at(a, 1), (-(at(a, 1), at(a, 2)))); let rhs = +(at(a, n), (-(at(a, n), at(a, -(n, 1))))); addFirst(a,lhs); addLast(a,rhs); /(a, (*(4, square(h)))) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "do",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    _indicesDo_2(
      _self,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_at_2(_self, _index));
      }, ["index"]),
    );
    return _self;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | indicesDo(self, { :index | aBlock(at(self, index)) }); self }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "doSeparatedBy",
  ["self", "elementBlock:/1", "separatorBlock:/0"],
  sl.annotateFunction(function (_self, _elementBlock_1, _separatorBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _elementBlock_1, _separatorBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _indicesDo_2(
      _self,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        _ifFalse_2(
          _equalsSign_2(_index, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _separatorBlock_0();
          }, []),
        );
        return _elementBlock_1(_at_2(_self, _index));
      }, ["index"]),
    );
  }, ["self", "elementBlock:/1", "separatorBlock:/0"]),
  "{ :self :elementBlock:/1 :separatorBlock:/0 | indicesDo(self, { :index | ifFalse((=(index, 1)), { separatorBlock() }); elementBlock(at(self, index)) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "dotProduct",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_e_1(_asterisk_2)(_self, _aList));
  }, ["self", "aList"]),
  "{ :self :aList | sum(((e(*) . (self, aList)))) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "doWithout",
  ["self", "aBlock:/1", "anItem"],
  sl.annotateFunction(function (_self, _aBlock_1, _anItem) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_1, _anItem";
      throw new Error(errorMessage);
    } /* Statements */
    return _indicesDo_2(
      _self,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifFalse_2(
          _equalsSign_2(_anItem, _at_2(_self, _index)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_1(_at_2(_self, _index));
          }, []),
        );
      }, ["index"]),
    );
  }, ["self", "aBlock:/1", "anItem"]),
  "{ :self :aBlock:/1 :anItem | indicesDo(self, { :index | ifFalse((=(anItem, at(self, index))), { aBlock(at(self, index)) }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "drop",
  ["self", "count"],
  sl.annotateFunction(function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_abs_1(_count), _size_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _new_1(_species_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSign_2(_count, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _dropLast_2(_self, _negate_1(_count));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _dropFirst_2(_self, _count);
          }, []),
        );
      }, []),
    );
  }, ["self", "count"]),
  "{ :self :count | if((>=(abs(count), size(self))), { new(species(self)) }, { if((<(count, 0)), { dropLast(self,negate(count)) }, { dropFirst(self,count) }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "dropFirst",
  ["self", "count"],
  sl.annotateFunction(function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      throw new Error(errorMessage);
    } /* Statements */
    return _copyFromTo_3(_self, _plusSign_2(_count, 1), _size_1(_self));
  }, ["self", "count"]),
  "{ :self :count | copyFromTo(self,+(count, 1), size(self)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "dropLast",
  ["self", "count"],
  sl.annotateFunction(function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      throw new Error(errorMessage);
    } /* Statements */
    return _copyFromTo_3(_self, 1, _hyphenMinus_2(_size_1(_self), _count));
  }, ["self", "count"]),
  "{ :self :count | copyFromTo(self,1, -(size(self), count)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "dropWhile",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _detectIndexIfFoundIfNone_4(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _not_1(_aBlock_1(_each));
      }, ["each"]),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _copyFromTo_3(_self, _i, _size_1(_self));
      }, ["i"]),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _new_1(_species_1(_self));
      }, []),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | detectIndexIfFoundIfNone(self, { :each | not(aBlock(each)) }, { :i | copyFromTo(self,i, size(self)) }, { new(species(self)) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "duplicateEach",
  ["self", "counts"],
  sl.annotateFunction(function (_self, _counts) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _counts";
      throw new Error(errorMessage);
    } /* Statements */
    _ifTrue_2(
      _isInteger_1(_counts),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _counts = _numberSign_2(_counts, _size_1(_self));
      }, []),
    );
    return _replicateEachApplying_3(_self, _counts, _value_1);
  }, ["self", "counts"]),
  "{ :self :counts | ifTrue(isInteger(counts), { counts := #(counts, size(self)) }); replicateEachApplying(self,counts, value:/1) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "endsWith",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isSequenceable_1(_aList),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _sequenceSize = _size_1(_aList);
        let _offset = _hyphenMinus_2(_size_1(_self), _sequenceSize);
        /* Statements */
        return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _return_1";
            throw new Error(errorMessage);
          } /* Statements */
          _ifTrue_2(
            _lessThanSign_2(_offset, 0),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(false);
            }, []),
          );
          _toDo_3(
            1,
            _sequenceSize,
            sl.annotateFunction(function (_index) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _index";
                throw new Error(errorMessage);
              } /* Statements */
              return _ifFalse_2(
                _equalsSign_2(
                  _at_2(_aList, _index),
                  _at_2(_self, _plusSign_2(_index, _offset)),
                ),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _return_1(false);
                }, []),
              );
            }, ["index"]),
          );
          return true;
        }, ["return:/1"]));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Sequenceable>>endsWith: not a sequence");
      }, []),
    );
  }, ["self", "aList"]),
  "{ :self :aList | if(isSequenceable(aList), { let sequenceSize = size(aList); let offset = -(size(self), sequenceSize); valueWithReturn({ :return:/1 | ifTrue((<(offset, 0)), { return(false) }); toDo(1, sequenceSize, { :index | ifFalse((=(at(aList, index), at(self, +(index, offset)))), { return(false) }) }); true }) }, { error(self,'@Sequenceable>>endsWith: not a sequence') }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "endsWithAny",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(
      _aCollection,
      sl.annotateFunction(function (_suffix) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _suffix";
          throw new Error(errorMessage);
        } /* Statements */
        return _endsWith_2(_self, _suffix);
      }, ["suffix"]),
    );
  }, ["self", "aCollection"]),
  "{ :self :aCollection | anySatisfy(aCollection, { :suffix | endsWith(self,suffix) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _equalsSignEqualsSign_2(_self, _anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_typeOf_1(_self), _typeOf_1(_anObject)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _hasEqualElements_3(_self, _anObject, _aBlock_2);
          }, []),
        );
      }, []),
    );
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 | |((==(self, anObject)), { &((=(typeOf(self), typeOf(anObject))), { hasEqualElements(self,anObject, aBlock:/2) }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "eulerMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar6 = _assertIsOfSize_2(_cos_1(_self), 3);
    let _ca = _at_2(__SplVar6, 1);
    let _cb = _at_2(__SplVar6, 2);
    let _cc = _at_2(__SplVar6, 3);
    let __SplVar7 = _assertIsOfSize_2(_sin_1(_self), 3);
    let _sa = _at_2(__SplVar7, 1);
    let _sb = _at_2(__SplVar7, 2);
    let _sc = _at_2(__SplVar7, 3);
    /* Statements */
    return [[
      _hyphenMinus_2(
        _asterisk_2(_asterisk_2(_ca, _cb), _cc),
        _asterisk_2(_sa, _sc),
      ),
      _hyphenMinus_2(
        _hyphenMinus_2(0, _asterisk_2(_cc, _sa)),
        _asterisk_2(_asterisk_2(_ca, _cb), _sc),
      ),
      _asterisk_2(_ca, _sb),
    ], [
      _plusSign_2(
        _asterisk_2(_asterisk_2(_cb, _cc), _sa),
        _asterisk_2(_ca, _sc),
      ),
      _hyphenMinus_2(
        _asterisk_2(_ca, _cc),
        _asterisk_2(_asterisk_2(_cb, _sa), _sc),
      ),
      _asterisk_2(_sa, _sb),
    ], [_hyphenMinus_2(0, _asterisk_2(_cc, _sb)), _asterisk_2(_sb, _sc), _cb]];
  }, ["self"]),
  "{ :self | let __SplVar6 = assertIsOfSize(cos(self), 3); let ca = at(__SplVar6, 1); let cb = at(__SplVar6, 2); let cc = at(__SplVar6, 3); let __SplVar7 = assertIsOfSize(sin(self), 3); let sa = at(__SplVar7, 1); let sb = at(__SplVar7, 2); let sc = at(__SplVar7, 3); [[-((*(*(ca, cb), cc)), (*(sa, sc))), -(-(0, (*(cc, sa))), (*(*(ca, cb), sc))), *(ca, sb)], [+((*(*(cb, cc), sa)), (*(ca, sc))), -((*(ca, cc)), (*(*(cb, sa), sc))), *(sa, sb)], [-(0, (*(cc, sb))), *(sb, sc), cb]] }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "exponentialMovingAverage",
  ["self", "alpha"],
  sl.annotateFunction(function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_1(_size_1(_self));
    /* Statements */
    _atPut_3(_answer, 1, _at_2(_self, 1));
    _toDo_3(
      2,
      _size_1(_self),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _y = _at_2(_answer, _hyphenMinus_2(_i, 1));
        /* Statements */
        return _atPut_3(
          _answer,
          _i,
          _plusSign_2(
            _y,
            _asterisk_2(_alpha, _hyphenMinus_2(_at_2(_self, _i), _y)),
          ),
        );
      }, ["i"]),
    );
    return _answer;
  }, ["self", "alpha"]),
  "{ :self :alpha | let answer = List(size(self)); atPut(answer, 1, at(self, 1)); toDo(2, size(self), { :i | let y = at(answer, -(i, 1)); atPut(answer, i, +(y, (*(alpha, (-(at(self, i), y)))))) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "extract",
  ["self", "positionList"],
  sl.annotateFunction(function (_self, _positionList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _positionList";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _positionList,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _part_2(_self, _each);
      }, ["each"]),
    );
  }, ["self", "positionList"]),
  "{ :self :positionList | collect(positionList, { :each | part(self,each) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "fastWalshHadamardTransform",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _h = 1;
    let _k = _size_1(_self);
    /* Statements */
    _ifFalse_2(
      _isPowerOfTwo_1(_k),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _addAll_2(
          _self,
          _List_2(_hyphenMinus_2(_asLargerPowerOfTwo_1(_k), _k), 0),
        );
        return _k = _size_1(_self);
      }, []),
    );
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_h, _k);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _toByDo_4(
          1,
          _k,
          _asterisk_2(_h, 2),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _toDo_3(
              _i,
              _hyphenMinus_2(_plusSign_2(_i, _h), 1),
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _x = _at_2(_self, _j);
                let _y = _at_2(_self, _plusSign_2(_j, _h));
                /* Statements */
                _atPut_3(_self, _j, _plusSign_2(_x, _y));
                return _atPut_3(
                  _self,
                  _plusSign_2(_j, _h),
                  _hyphenMinus_2(_x, _y),
                );
              }, ["j"]),
            );
          }, ["i"]),
        );
        return _h = _asterisk_2(_h, 2);
      }, []),
    );
    return _self;
  }, ["self"]),
  "{ :self | let h = 1; let k = size(self); ifFalse(isPowerOfTwo(k), { addAll(self,List(-(asLargerPowerOfTwo(k), k), 0)); k := size(self) }); whileTrue({ <(h, k) }, { toByDo(1, k, *(h, 2), { :i | toDo(i, -(+(i, h), 1), { :j | let x = at(self, j); let y = at(self, +(j, h)); atPut(self, j, +(x, y)); atPut(self, +(j, h), -(x, y)) }) }); h := *(h, 2) }); self }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "fillFromWith",
  ["self", "aCollection", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aCollection, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = 1;
    /* Statements */
    _do_2(
      _aCollection,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(_self, _index, _aBlock_1(_each));
        return _index = _plusSign_2(_index, 1);
      }, ["each"]),
    );
    return _self;
  }, ["self", "aCollection", "aBlock:/1"]),
  "{ :self :aCollection :aBlock:/1 | let index = 1; do(aCollection, { :each | atPut(self, index, aBlock(each)); index := +(index, 1) }); self }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "findBinary",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _findBinaryDoIfNone_4(
      _self,
      _aBlock_1,
      sl.annotateFunction(function (_found) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _found";
          throw new Error(errorMessage);
        } /* Statements */
        return _found;
      }, ["found"]),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Sequenceable>>findBinary: not found");
      }, []),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | findBinaryDoIfNone(self, aBlock:/1, { :found | found }, { error(self,'@Sequenceable>>findBinary: not found') }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "findBinaryDoIfNone",
  ["self", "aBlock:/1", "actionBlock:/1", "exceptionBlock"],
  sl.annotateFunction(
    function (_self, _aBlock_1, _actionBlock_1, _exceptionBlock) {
      /* ArityCheck */
      if (arguments.length !== 4) {
        const errorMessage =
          "Arity: expected 4, _self, _aBlock_1, _actionBlock_1, _exceptionBlock";
        throw new Error(errorMessage);
      } /* Statements */
      return _findBinaryIndexDoIfNone_4(
        _self,
        _aBlock_1,
        sl.annotateFunction(function (_foundIndex) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _foundIndex";
            throw new Error(errorMessage);
          } /* Statements */
          return _actionBlock_1(_at_2(_self, _foundIndex));
        }, ["foundIndex"]),
        sl.annotateFunction(function (_previousIndex, _nextIndex) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage =
              "Arity: expected 2, _previousIndex, _nextIndex";
            throw new Error(errorMessage);
          } /* Statements */
          return _cull_3(
            _exceptionBlock,
            _ifTrue_2(
              _greaterThanSign_2(_previousIndex, 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _at_2(_self, _previousIndex);
              }, []),
            ),
            _ifTrue_2(
              _lessThanSignEqualsSign_2(_nextIndex, _size_1(_self)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _at_2(_self, _nextIndex);
              }, []),
            ),
          );
        }, ["previousIndex", "nextIndex"]),
      );
    },
    ["self", "aBlock:/1", "actionBlock:/1", "exceptionBlock"],
  ),
  "{ :self :aBlock:/1 :actionBlock:/1 :exceptionBlock | findBinaryIndexDoIfNone(self, aBlock:/1, { :foundIndex | actionBlock(at(self, foundIndex)) }, { :previousIndex :nextIndex | cull(exceptionBlock,ifTrue((>(previousIndex, 0)), { at(self, previousIndex) }), ifTrue((<=(nextIndex, size(self))), { at(self, nextIndex) })) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "findBinaryIfNone",
  ["self", "aBlock:/1", "exceptionBlock"],
  sl.annotateFunction(function (_self, _aBlock_1, _exceptionBlock) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aBlock_1, _exceptionBlock";
      throw new Error(errorMessage);
    } /* Statements */
    return _findBinaryDoIfNone_4(
      _self,
      _aBlock_1,
      sl.annotateFunction(function (_found) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _found";
          throw new Error(errorMessage);
        } /* Statements */
        return _found;
      }, ["found"]),
      _exceptionBlock,
    );
  }, ["self", "aBlock:/1", "exceptionBlock"]),
  "{ :self :aBlock:/1 :exceptionBlock | findBinaryDoIfNone(self,aBlock:/1, { :found | found }, exceptionBlock) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "findBinaryIndex",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _findBinaryIndexDoIfNone_4(
      _self,
      _aBlock_1,
      sl.annotateFunction(function (_found) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _found";
          throw new Error(errorMessage);
        } /* Statements */
        return _found;
      }, ["found"]),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Sequenceable>>findBinaryIndex: not found");
      }, []),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | findBinaryIndexDoIfNone(self, aBlock:/1, { :found | found }, { error(self,'@Sequenceable>>findBinaryIndex: not found') }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "findBinaryIndexDoIfNone",
  ["self", "aBlock:/1", "actionBlock:/1", "exceptionBlock"],
  sl.annotateFunction(
    function (_self, _aBlock_1, _actionBlock_1, _exceptionBlock) {
      /* ArityCheck */
      if (arguments.length !== 4) {
        const errorMessage =
          "Arity: expected 4, _self, _aBlock_1, _actionBlock_1, _exceptionBlock";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _low = 1;
      let _high = _size_1(_self);
      /* Statements */
      return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _return_1";
          throw new Error(errorMessage);
        } /* Statements */
        _whileFalse_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(_high, _low);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _index = _solidusSolidus_2(_plusSign_2(_high, _low), 2);
            let _test = _aBlock_1(_at_2(_self, _index));
            /* Statements */
            return _if_3(
              _lessThanSign_2(_test, 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _high = _hyphenMinus_2(_index, 1);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _if_3(
                  _lessThanSign_2(0, _test),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _low = _plusSign_2(_index, 1);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _return_1(_actionBlock_1(_index));
                  }, []),
                );
              }, []),
            );
          }, []),
        );
        return _cull_3(_exceptionBlock, _high, _low);
      }, ["return:/1"]));
    },
    ["self", "aBlock:/1", "actionBlock:/1", "exceptionBlock"],
  ),
  "{ :self :aBlock:/1 :actionBlock:/1 :exceptionBlock | let low = 1; let high = size(self); valueWithReturn({ :return:/1 | whileFalse({ <(high, low) }, { let index = //(+(high, low), 2); let test = aBlock(at(self, index)); if((<(test, 0)), { high := -(index, 1) }, { if((<(0, test)), { low := +(index, 1) }, { return(actionBlock(index)) }) }) }); cull(exceptionBlock,high, low) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "findBinaryIndexIfNone",
  ["self", "aBlock:/1", "exceptionBlock"],
  sl.annotateFunction(function (_self, _aBlock_1, _exceptionBlock) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aBlock_1, _exceptionBlock";
      throw new Error(errorMessage);
    } /* Statements */
    return _findBinaryIndexDoIfNone_4(
      _self,
      _aBlock_1,
      sl.annotateFunction(function (_found) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _found";
          throw new Error(errorMessage);
        } /* Statements */
        return _found;
      }, ["found"]),
      _exceptionBlock,
    );
  }, ["self", "aBlock:/1", "exceptionBlock"]),
  "{ :self :aBlock:/1 :exceptionBlock | findBinaryIndexDoIfNone(self,aBlock:/1, { :found | found }, exceptionBlock) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "findLast",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = _plusSign_2(_size_1(_self), 1);
    /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _whileTrue_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _greaterThanSignEqualsSign_2(
            _index = _hyphenMinus_2(_index, 1),
            1,
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _aBlock_1(_at_2(_self, _index)),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_index);
            }, []),
          );
        }, []),
      );
      return 0;
    }, ["return:/1"]));
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let index = +(size(self), 1); valueWithReturn({ :return:/1 | whileTrue({ >=((index := -(index, 1)), 1) }, { ifTrue(aBlock(at(self, index)), { return(index) }) }); 0 }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "first",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, 1);
  }, ["self"]),
  "{ :self | at(self, 1) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "first",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _copyFromTo_3(_self, 1, _n);
  }, ["self", "n"]),
  "{ :self :n | copyFromTo(self,1, n) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "first",
  ["self", "n", "zero"],
  sl.annotateFunction(function (_self, _n, _zero) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _n, _zero";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_self);
    /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_k, _n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _copyFromTo_3(_self, 1, _n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSignPlusSign_2(
          _self,
          _numberSign_2(_zero, _hyphenMinus_2(_n, _k)),
        );
      }, []),
    );
  }, ["self", "n", "zero"]),
  "{ :self :n :zero | let k = size(self); if((>=(k, n)), { copyFromTo(self,1, n) }, { ++(self, (#(zero, (-(n, k))))) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "flattenTo",
  ["self", "depth"],
  sl.annotateFunction(function (_self, _depth) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _depth";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_depth, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = [];
        /* Statements */
        _do_2(
          _self,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _isCollection_1(_each),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _addAll_2(
                  _answer,
                  _flattenTo_2(_each, _hyphenMinus_2(_depth, 1)),
                );
              }, []),
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
      }, []),
    );
  }, ["self", "depth"]),
  "{ :self :depth | if((<=(depth, 0)), { self }, { let answer = []; do(self, { :each | if(isCollection(each), { addAll(answer,flattenTo(each,-(depth, 1))) }, { add(answer,each) }) }); answer }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "flatten",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _flattenTo_2(_self, Infinity);
  }, ["self"]),
  "{ :self | flattenTo(self,Infinity) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "flatten",
  ["self", "depth"],
  sl.annotateFunction(function (_self, _depth) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _depth";
      throw new Error(errorMessage);
    } /* Statements */
    return _flattenTo_2(_self, _depth);
  }, ["self", "depth"]),
  "{ :self :depth | flattenTo(self,depth) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "foldedIndex",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _fold_3(_index, 1, _size_1(_self));
  }, ["self", "index"]),
  "{ :self :index | fold(index,1, size(self)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "foldLeftPrefix",
  ["self", "count", "aBlock:/2"],
  sl.annotateFunction(function (_self, _count, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _count, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifEmpty_3(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _errorEmptyCollection_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _at_2(_self, 1);
        /* Statements */
        _toDo_3(
          2,
          _size_1(_self),
          sl.annotateFunction(function (_index) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _index";
              throw new Error(errorMessage);
            } /* Statements */
            return _answer = _aBlock_2(_answer, _at_2(_self, _index));
          }, ["index"]),
        );
        return _answer;
      }, []),
    );
  }, ["self", "count", "aBlock:/2"]),
  "{ :self :count :aBlock:/2 | ifEmpty(self, { errorEmptyCollection(self) }, { let answer = at(self, 1); toDo(2, size(self), { :index | answer := aBlock(answer, at(self, index)) }); answer }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "foldLeft",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _foldLeftPrefix_3(_self, _size_1(_self), _aBlock_2);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | foldLeftPrefix(self,size(self), aBlock:/2) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "foldList",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [_anObject];
    let _accumulator = _anObject;
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _accumulator = _aBlock_2(_accumulator, _each);
        return _add_2(_answer, _accumulator);
      }, ["each"]),
    );
    return _answer;
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 | let answer = [anObject]; let accumulator = anObject; do(self, { :each | accumulator := aBlock(accumulator, each); add(answer,accumulator) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "foldRightPrefix",
  ["self", "count", "aBlock:/2"],
  sl.annotateFunction(function (_self, _count, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _count, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifEmpty_3(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _errorEmptyCollection_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _at_2(_self, _count);
        /* Statements */
        _toByDo_4(
          _hyphenMinus_2(_count, 1),
          1,
          -1,
          sl.annotateFunction(function (_index) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _index";
              throw new Error(errorMessage);
            } /* Statements */
            return _answer = _aBlock_2(_at_2(_self, _index), _answer);
          }, ["index"]),
        );
        return _answer;
      }, []),
    );
  }, ["self", "count", "aBlock:/2"]),
  "{ :self :count :aBlock:/2 | ifEmpty(self, { errorEmptyCollection(self) }, { let answer = at(self, count); toByDo((-(count, 1)), 1, -1, { :index | answer := aBlock(at(self, index), answer) }); answer }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "foldRight",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _foldRightPrefix_3(_self, _size_1(_self), _aBlock_2);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | foldRightPrefix(self,size(self), aBlock:/2) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "forceToPaddingWith",
  ["self", "length", "anObject"],
  sl.annotateFunction(function (_self, _length, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _length, _anObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _new_2(_species_1(_self), _length);
    /* Statements */
    _atAllPut_2(_answer, _anObject);
    _replaceFromToWithStartingAt_5(
      _answer,
      1,
      _min_2(_size_1(_self), _length),
      _self,
      1,
    );
    return _answer;
  }, ["self", "length", "anObject"]),
  "{ :self :length :anObject | let answer = new(species(self),length); atAllPut(answer,anObject); replaceFromToWithStartingAt(answer,1, min(size(self),length), self, 1); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "fourth",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, _plusSign_2(1, 3));
  }, ["self"]),
  "{ :self | at(self, +(1, 3)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "fourth",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _copyFromTo_3(
      _self,
      _plusSign_2(_asterisk_2(_n, 3), 1),
      _asterisk_2(_n, 4),
    );
  }, ["self", "n"]),
  "{ :self :n | copyFromTo(self,+(*(n, 3), 1), *(n, 4)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "fromContinuedFraction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _tilde_2(_self, [0]),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _Fraction_2(0n, 1n);
        /* Statements */
        _reverseDo_2(
          _self,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _next = _plusSign_2(_each, _answer);
            /* Statements */
            return _ifTrue_2(
              _exclamationMarkEqualsSign_2(_next, 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _answer = _solidus_2(1, _next);
              }, []),
            );
          }, ["each"]),
        );
        return _solidus_2(1, _answer);
      }, []),
    );
  }, ["self"]),
  "{ :self | if((~(self, [0])), { 0 }, { let answer = Fraction(0L, 1L); reverseDo(self, { :each | let next = (+(each, answer)); ifTrue((!=(next, 0)), { answer := /(1, next) }) }); /(1, answer) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "fromDigits",
  ["self", "radix"],
  sl.annotateFunction(function (_self, _radix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _radix";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 0;
    let _m = 1;
    /* Statements */
    _reverseDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _answer = _plusSign_2(_answer, _asterisk_2(_each, _m));
        return _m = _asterisk_2(_m, _radix);
      }, ["each"]),
    );
    return _answer;
  }, ["self", "radix"]),
  "{ :self :radix | let answer = 0; let m = 1; reverseDo(self, { :each | answer := +(answer, (*(each, m))); m := *(m, radix) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "fromDigits",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fromDigits_2(_self, 10);
  }, ["self"]),
  "{ :self | fromDigits(self,10) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "fromToDo",
  ["self", "start", "stop", "aBlock:/1"],
  sl.annotateFunction(function (_self, _start, _stop, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _start, _stop, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _toDo_3(
      _start,
      _stop,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_at_2(_self, _index));
      }, ["index"]),
    );
  }, ["self", "start", "stop", "aBlock:/1"]),
  "{ :self :start :stop :aBlock:/1 | toDo(start, stop, { :index | aBlock(at(self, index)) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "fromToIndicesAndValuesDo",
  ["self", "start", "stop", "aBlock:/2"],
  sl.annotateFunction(function (_self, _start, _stop, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _start, _stop, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _toDo_3(
      _start,
      _stop,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_index, _at_2(_self, _index));
      }, ["index"]),
    );
  }, ["self", "start", "stop", "aBlock:/2"]),
  "{ :self :start :stop :aBlock:/2 | toDo(start, stop, { :index | aBlock(index, at(self, index)) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "fromToPut",
  ["self", "startIndex", "endIndex", "anObject"],
  sl.annotateFunction(function (_self, _startIndex, _endIndex, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _startIndex, _endIndex, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    _if_3(
      _greaterThanSign_2(_startIndex, _endIndex),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _written = 1;
        let _toWrite = _plusSign_2(_hyphenMinus_2(_endIndex, _startIndex), 1);
        let _thisWrite = null;
        /* Statements */
        _atPut_3(_self, _startIndex, _anObject);
        return _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(_written, _toWrite);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _thisWrite = _min_2(_written, _hyphenMinus_2(_toWrite, _written));
            _replaceFromToWithStartingAt_5(
              _self,
              _plusSign_2(_startIndex, _written),
              _hyphenMinus_2(
                _plusSign_2(_plusSign_2(_startIndex, _written), _thisWrite),
                1,
              ),
              _self,
              _startIndex,
            );
            return _written = _plusSign_2(_written, _thisWrite);
          }, []),
        );
      }, []),
    );
    return _anObject;
  }, ["self", "startIndex", "endIndex", "anObject"]),
  "{ :self :startIndex :endIndex :anObject | if((>(startIndex, endIndex)), { self }, { let written = 1; let toWrite = +(-(endIndex, startIndex), 1); let thisWrite = nil; atPut(self, startIndex, anObject); whileTrue({ <(written, toWrite) }, { thisWrite := min(written,-(toWrite, written)); replaceFromToWithStartingAt(self,+(startIndex, written), -(+(+(startIndex, written), thisWrite), 1), self, startIndex); written := +(written, thisWrite) }) }); anObject }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "gradient",
  ["y", "h"],
  sl.annotateFunction(function (_y, _h) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _y, _h";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_y);
    /* Statements */
    return _solidus_2(
      _collect_2(
        _upOrDownTo_2(1, _n),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _equalsSign_2(_i, 1),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _hyphenMinus_2(_at_2(_y, 2), _at_2(_y, 1));
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _if_3(
                _equalsSign_2(_i, _n),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _hyphenMinus_2(
                    _at_2(_y, _i),
                    _at_2(_y, _hyphenMinus_2(_i, 1)),
                  );
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _solidus_2(
                    _hyphenMinus_2(
                      _at_2(_y, _plusSign_2(_i, 1)),
                      _at_2(_y, _hyphenMinus_2(_i, 1)),
                    ),
                    2,
                  );
                }, []),
              );
            }, []),
          );
        }, ["i"]),
      ),
      _h,
    );
  }, ["y", "h"]),
  "{ :y :h | let n = size(y); /(collect(upOrDownTo(1, n), { :i | if((=(i, 1)), { -(at(y, 2), at(y, 1)) }, { if((=(i, n)), { -(at(y, i), at(y, -(i, 1))) }, { /((-(at(y, +(i, 1)), at(y, -(i, 1)))), 2) }) }) }), h) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "groupsDo",
  ["self", "aBlock"],
  sl.annotateFunction(function (_self, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _numArgs = _numArgs_1(_aBlock);
    /* Statements */
    return _caseOf_3(
      _numArgs,
      [
        _hyphenMinusGreaterThanSign_2(
          0,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(
              _self,
              "groupsDo: At least one block argument expected",
            );
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          1,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _do_2(_self, _aBlock);
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          2,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _pairsDo_2(_self, _aBlock);
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _argumentList = _List_1(_numArgs);
        let _index = 1;
        let _endIndex = _plusSign_2(
          _hyphenMinus_2(_size_1(_self), _numArgs),
          1,
        );
        /* Statements */
        return _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_index, _endIndex);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _replaceFromToWithStartingAt_5(
              _argumentList,
              1,
              _numArgs,
              _self,
              _index,
            );
            _valueWithArguments_2(_aBlock, _argumentList);
            return _index = _plusSign_2(_index, _numArgs);
          }, []),
        );
      }, []),
    );
  }, ["self", "aBlock"]),
  "{ :self :aBlock | let numArgs = numArgs(aBlock); caseOf(numArgs, [->(0, { error(self,'groupsDo: At least one block argument expected') }), ->(1, { do(self,aBlock) }), ->(2, { pairsDo(self,aBlock) })], { let argumentList = List(numArgs); let index = 1; let endIndex = +(-(size(self), numArgs), 1); whileTrue({ <=(index, endIndex) }, { replaceFromToWithStartingAt(argumentList,1, numArgs, self, index); valueWithArguments(aBlock,argumentList); index := +(index, numArgs) }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "grownBy",
  ["self", "length"],
  sl.annotateFunction(function (_self, _length) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _length";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _ofSize_2(
      _species_1(_self),
      _plusSign_2(_size_1(_self), _length),
    );
    /* Statements */
    return _replaceFromToWithStartingAt_5(_answer, 1, _size_1(_self), _self, 1);
  }, ["self", "length"]),
  "{ :self :length | let answer = ofSize(species(self),+(size(self), length)); replaceFromToWithStartingAt(answer,1, size(self), self, 1) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "hasEqualElements",
  ["self", "otherCollection", "aBlock:/2"],
  sl.annotateFunction(function (_self, _otherCollection, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _otherCollection, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersand_2(
        _isSequenceable_1(_otherCollection),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_size_1(_self), _size_1(_otherCollection));
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _return_1";
            throw new Error(errorMessage);
          } /* Statements */
          _indicesDo_2(
            _self,
            sl.annotateFunction(function (_index) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _index";
                throw new Error(errorMessage);
              } /* Statements */
              return _ifFalse_2(
                _aBlock_2(
                  _at_2(_self, _index),
                  _at_2(_otherCollection, _index),
                ),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _return_1(false);
                }, []),
              );
            }, ["index"]),
          );
          return true;
        }, ["return:/1"]));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return false;
      }, []),
    );
  }, ["self", "otherCollection", "aBlock:/2"]),
  "{ :self :otherCollection :aBlock:/2 | if((&(isSequenceable(otherCollection), { =(size(self), size(otherCollection)) })), { valueWithReturn({ :return:/1 | indicesDo(self, { :index | ifFalse(aBlock(at(self, index), at(otherCollection, index)), { return(false) }) }); true }) }, { false }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "hasEqualElements",
  ["self", "otherCollection"],
  sl.annotateFunction(function (_self, _otherCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _otherCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualElements_3(_self, _otherCollection, _equalsSign_2);
  }, ["self", "otherCollection"]),
  "{ :self :otherCollection | hasEqualElements(self,otherCollection, =) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "includes",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMarkEqualsSign_2(_indexOf_2(_self, _anObject), 0);
  }, ["self", "anObject"]),
  "{ :self :anObject | !=(indexOf(self,anObject), 0) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "includesIndex",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isInteger_1(_index),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _greaterThanSign_2(_index, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_index, _size_1(_self));
          }, []),
        );
      }, []),
    );
  }, ["self", "index"]),
  "{ :self :index | &(isInteger(index), { &(>(index, 0), { <=(index, size(self)) }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "includesScatteredSubsequence",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _powerSetDo_2(
        _to_2(1, _size_1(_self)),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifFalse_2(
            _isArithmeticProgressionBy_3(_each, 1, _equalsSign_2),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _ifTrue_2(
                _equalsSign_2(_commercialAtAsterisk_2(_self, _each), _aList),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _return_1(true);
                }, []),
              );
            }, []),
          );
        }, ["each"]),
      );
      return false;
    }, ["return:/1"]));
  }, ["self", "aList"]),
  "{ :self :aList | valueWithReturn({ :return:/1 | powerSetDo(to(1,size(self)), { :each | ifFalse(isArithmeticProgressionBy(each,1, =), { ifTrue((=(@*(self, each), aList)), { return(true) }) }) }); false }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "includesSubsequence",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _i = 1;
      /* Statements */
      _do_2(
        _aList,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          _i = _indexOfStartingAtBy_4(_self, _each, _i, _equalsSign_2);
          return _ifTrue_2(
            _equalsSign_2(_i, 0),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(false);
            }, []),
          );
        }, ["each"]),
      );
      return true;
    }, ["return:/1"]));
  }, ["self", "aList"]),
  "{ :self :aList | valueWithReturn({ :return:/1 | let i = 1; do(aList, { :each | i := indexOfStartingAtBy(self,each, i, =); ifTrue((=(i, 0)), { return(false) }) }); true }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "includesSubstring",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_aList);
    let _c = _first_1(_aList);
    /* Statements */
    return _anySatisfy_2(
      _indicesOf_2(_self, _c),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _allSatisfy_2(
          _upOrDownTo_2(1, _k),
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(
              _at_2(_self, _hyphenMinus_2(_plusSign_2(_i, _j), 1)),
              _at_2(_aList, _j),
            );
          }, ["j"]),
        );
      }, ["i"]),
    );
  }, ["self", "aList"]),
  "{ :self :aList | let k = size(aList); let c = first(aList); anySatisfy(indicesOf(self,c), { :i | allSatisfy(upOrDownTo(1, k), { :j | =(at(self, -(+(i, j), 1)), at(aList, j)) }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "increasingSubsequenceList",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_size_1(_self), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [_self];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _increasing_2 = sl.annotateFunction(function (_done, _remaining) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _done, _remaining";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _isEmpty_1(_remaining),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return [_done];
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _plusSignPlusSign_2(
                _if_3(
                  _aBlock_2(_last_1(_done), _first_1(_remaining)),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _increasing_2(
                      _plusSignPlusSign_2(_done, [_first_1(_remaining)]),
                      _allButFirst_1(_remaining),
                    );
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return [];
                  }, []),
                ),
                _increasing_2(_done, _allButFirst_1(_remaining)),
              );
            }, []),
          );
        }, ["done", "remaining"]);
        /* Statements */
        return _collectCatenate_2(
          _upOrDownTo_2(1, _size_1(_self)),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _increasing_2(
              _last_2(_first_2(_self, _i), 1),
              _drop_2(_self, _i),
            );
          }, ["i"]),
        );
      }, []),
    );
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | if((<(size(self), 2)), { [self] }, { let increasing = { :done :remaining | if(isEmpty(remaining), { [done] }, { ++(if(aBlock(last(done), first(remaining)), { increasing(++(done, [first(remaining)]), allButFirst(remaining)) }, { [] }), increasing(done, allButFirst(remaining))) }) }; collectCatenate(upOrDownTo(1, size(self)), { :i | increasing(last(first(self,i),1), drop(self,i)) }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "increasingSubsequenceList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _increasingSubsequenceList_2(_self, _lessThanSignVerticalLine_2);
  }, ["self"]),
  "{ :self | increasingSubsequenceList(self,<|) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "indexOf",
  ["self", "anElement"],
  sl.annotateFunction(function (_self, _anElement) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anElement";
      throw new Error(errorMessage);
    } /* Statements */
    return _indexOfStartingAtBy_4(_self, _anElement, 1, _equalsSign_2);
  }, ["self", "anElement"]),
  "{ :self :anElement | indexOfStartingAtBy(self,anElement, 1, =) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "indexOfBy",
  ["self", "anElement", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anElement, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anElement, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _indexOfStartingAtBy_4(_self, _anElement, 1, _aBlock_2);
  }, ["self", "anElement", "aBlock:/2"]),
  "{ :self :anElement :aBlock:/2 | indexOfStartingAtBy(self,anElement, 1, aBlock:/2) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "indexOfIfAbsent",
  ["self", "anElement", "exceptionBlock:/0"],
  sl.annotateFunction(function (_self, _anElement, _exceptionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _anElement, _exceptionBlock_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = _indexOfStartingAtBy_4(_self, _anElement, 1, _equalsSign_2);
    /* Statements */
    return _if_3(
      _equalsSign_2(_index, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _exceptionBlock_0();
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _index;
      }, []),
    );
  }, ["self", "anElement", "exceptionBlock:/0"]),
  "{ :self :anElement :exceptionBlock:/0 | let index = indexOfStartingAtBy(self,anElement, 1, =); if((=(index, 0)), { exceptionBlock() }, { index }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "indexOfStartingAtBy",
  ["self", "anElement", "start", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anElement, _start, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _anElement, _start, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _toDo_3(
        _start,
        _size_1(_self),
        sl.annotateFunction(function (_index) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _index";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _aBlock_2(_at_2(_self, _index), _anElement),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_index);
            }, []),
          );
        }, ["index"]),
      );
      return 0;
    }, ["return:/1"]));
  }, ["self", "anElement", "start", "aBlock:/2"]),
  "{ :self :anElement :start :aBlock:/2 | valueWithReturn({ :return:/1 | toDo(start, size(self), { :index | ifTrue(aBlock(at(self, index), anElement), { return(index) }) }); 0 }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "indexOfSubstring",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _indexOfSubstringStartingAt_3(_self, _aList, 1);
  }, ["self", "aList"]),
  "{ :self :aList | indexOfSubstringStartingAt(self,aList, 1) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "indexOfSubstringStartingAt",
  ["self", "aList", "start"],
  sl.annotateFunction(function (_self, _aList, _start) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aList, _start";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_aList);
    /* Statements */
    return _if_3(
      _equalsSign_2(_k, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _first = _at_2(_aList, 1);
        /* Statements */
        return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _return_1";
            throw new Error(errorMessage);
          } /* Statements */
          _toDo_3(
            _max_2(_start, 1),
            _plusSign_2(_hyphenMinus_2(_size_1(_self), _k), 1),
            sl.annotateFunction(function (_startIndex) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _startIndex";
                throw new Error(errorMessage);
              } /* Statements */
              return _ifTrue_2(
                _equalsSign_2(_at_2(_self, _startIndex), _first),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Temporaries */
                  let _index = 2;
                  /* Statements */
                  _whileTrue_2(
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _ampersand_2(
                        _lessThanSignEqualsSign_2(_index, _k),
                        sl.annotateFunction(function () {
                          /* ArityCheck */
                          if (arguments.length !== 0) {
                            const errorMessage = "Arity: expected 0, ";
                            throw new Error(errorMessage);
                          } /* Statements */
                          return _equalsSign_2(
                            _at_2(
                              _self,
                              _hyphenMinus_2(
                                _plusSign_2(_startIndex, _index),
                                1,
                              ),
                            ),
                            _at_2(_aList, _index),
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
                      return _index = _plusSign_2(_index, 1);
                    }, []),
                  );
                  return _ifFalse_2(
                    _lessThanSignEqualsSign_2(_index, _k),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _return_1(_startIndex);
                    }, []),
                  );
                }, []),
              );
            }, ["startIndex"]),
          );
          return 0;
        }, ["return:/1"]));
      }, []),
    );
  }, ["self", "aList", "start"]),
  "{ :self :aList :start | let k = size(aList); if((=(k, 0)), { 0 }, { let first = at(aList, 1); valueWithReturn({ :return:/1 | toDo(max(start,1), +(-(size(self), k), 1), { :startIndex | ifTrue((=(at(self, startIndex), first)), { let index = 2; whileTrue({ &(<=(index, k), { =(at(self, -(+(startIndex, index), 1)), at(aList, index)) }) }, { index := +(index, 1) }); ifFalse((<=(index, k)), { return(startIndex) }) }) }); 0 }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "indexValueAssociations",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_1(_size_1(_self));
    /* Statements */
    _withIndexDo_2(
      _self,
      sl.annotateFunction(function (_each, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _answer,
          _index,
          _hyphenMinusGreaterThanSign_2(_index, _each),
        );
      }, ["each", "index"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = List(size(self)); withIndexDo(self, { :each :index | atPut(answer, index, (->(index, each))) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "indices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _upOrDownTo_2(1, _size_1(_self));
  }, ["self"]),
  "{ :self | upOrDownTo(1, size(self)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "indicesAndValuesDo",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _withIndexDo_2(
      _self,
      sl.annotateFunction(function (_each, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_index, _each);
      }, ["each", "index"]),
    );
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | withIndexDo(self, { :each :index | aBlock(index, each) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "indicesDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _toDo_3(1, _size_1(_self), _aBlock_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | toDo(1,size(self), aBlock:/1) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "indicesOfSubsequence",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _powerSetDo_2(
      _to_2(1, _size_1(_self)),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _equalsSign_2(_commercialAtAsterisk_2(_self, _each), _aList),
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
  }, ["self", "aList"]),
  "{ :self :aList | let answer = []; powerSetDo(to(1,size(self)), { :each | ifTrue((=(@*(self, each), aList)), { add(answer,each) }) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "indicesOfSubstring",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _indicesOfSubstringStartingAt_3(_self, _aList, 1);
  }, ["self", "aList"]),
  "{ :self :aList | indicesOfSubstringStartingAt(self,aList, 1) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "indicesOfSubstringStartingAt",
  ["self", "aList", "initialIndex"],
  sl.annotateFunction(function (_self, _aList, _initialIndex) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aList, _initialIndex";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _index = _hyphenMinus_2(_initialIndex, 1);
    /* Statements */
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _index = _indexOfSubstringStartingAt_3(
          _self,
          _aList,
          _plusSign_2(_index, 1),
        );
        return _equalsSign_2(_index, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _index);
      }, []),
    );
    return _answer;
  }, ["self", "aList", "initialIndex"]),
  "{ :self :aList :initialIndex | let answer = []; let index = -(initialIndex, 1); whileFalse({ index := indexOfSubstringStartingAt(self,aList, +(index, 1)); =(index, 0) }, { add(answer,index) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "injectInto",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _anObject;
    /* Statements */
    _indicesDo_2(
      _self,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _aBlock_2(_answer, _at_2(_self, _index));
      }, ["index"]),
    );
    return _answer;
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 | let answer = anObject; indicesDo(self, { :index | answer := aBlock(answer, at(self, index)) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "intercalate",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _doSeparatedBy_3(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _each);
      }, ["each"]),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _addAll_2(_answer, _aCollection);
      }, []),
    );
    return _answer;
  }, ["self", "aCollection"]),
  "{ :self :aCollection | let answer = []; doSeparatedBy(self, { :each | add(answer,each) }, { addAll(answer,aCollection) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "intersperse",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _doSeparatedBy_3(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _each);
      }, ["each"]),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _anObject);
      }, []),
    );
    return _answer;
  }, ["self", "anObject"]),
  "{ :self :anObject | let answer = []; doSeparatedBy(self, { :each | add(answer,each) }, { add(answer,anObject) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "isAlternating",
  ["self", "z"],
  sl.annotateFunction(function (_self, _z) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _z";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_self);
    /* Statements */
    return _if_3(
      _lessThanSign_2(_k, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return false;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _ifFalse_2(
          _includes_2([-1, 1], _z),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "isAlternating: invalid z");
          }, []),
        );
        return _allSatisfy_2(
          _upOrDownTo_2(2, _k),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _x = _compare_2(
              _at_2(_self, _hyphenMinus_2(_i, 1)),
              _at_2(_self, _i),
            );
            let _r = _equalsSign_2(_hyphenMinus_2(0, _x), _z);
            /* Statements */
            _z = _x;
            return _r;
          }, ["i"]),
        );
      }, []),
    );
  }, ["self", "z"]),
  "{ :self :z | let k = size(self); if((<(k, 2)), { false }, { ifFalse(includes([-1, 1],z), { error(self,'isAlternating: invalid z') }); allSatisfy(upOrDownTo(2, k), { :i | let x = compare(at(self, -(i, 1)),at(self, i)); let r = =((-(0, x)), z); z := x; r }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "isArithmeticProgression",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_size_1(_self), 1),
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
        return _isArithmeticProgressionBy_3(
          _self,
          _hyphenMinus_2(_second_1(_self), _first_1(_self)),
          _equalsSign_2,
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if((<=(size(self), 1)), { true }, { isArithmeticProgressionBy(self,-(second(self), first(self)), =) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "isArithmeticProgressionBy",
  ["self", "aNumber", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_size_1(_self), 1),
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
        return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _return_1";
            throw new Error(errorMessage);
          } /* Statements */
          _adjacentPairsDo_2(
            _self,
            sl.annotateFunction(function (_a, _b) {
              /* ArityCheck */
              if (arguments.length !== 2) {
                const errorMessage = "Arity: expected 2, _a, _b";
                throw new Error(errorMessage);
              } /* Statements */
              return _ifFalse_2(
                _aBlock_2(_hyphenMinus_2(_b, _a), _aNumber),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _return_1(false);
                }, []),
              );
            }, ["a", "b"]),
          );
          return true;
        }, ["return:/1"]));
      }, []),
    );
  }, ["self", "aNumber", "aBlock:/2"]),
  "{ :self :aNumber :aBlock:/2 | if((<=(size(self), 1)), { true }, { valueWithReturn({ :return:/1 | adjacentPairsDo(self, { :a :b | ifFalse(aBlock(-(b, a), aNumber), { return(false) }) }); true }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "isCloseTo",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalBy_3(_self, _anObject, _isCloseTo_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | equalBy(self,anObject, isCloseTo:/2) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "isGeometricProgression",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_size_1(_self), 1),
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
        return _isGeometricProgressionBy_3(
          _self,
          _solidus_2(_second_1(_self), _first_1(_self)),
          _equalsSign_2,
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if((<=(size(self), 1)), { true }, { isGeometricProgressionBy(self,/(second(self), first(self)), =) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "isGeometricProgressionBy",
  ["self", "aNumber", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_size_1(_self), 1),
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
        return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _return_1";
            throw new Error(errorMessage);
          } /* Statements */
          _adjacentPairsDo_2(
            _self,
            sl.annotateFunction(function (_a, _b) {
              /* ArityCheck */
              if (arguments.length !== 2) {
                const errorMessage = "Arity: expected 2, _a, _b";
                throw new Error(errorMessage);
              } /* Statements */
              return _ifFalse_2(
                _aBlock_2(_solidus_2(_b, _a), _aNumber),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _return_1(false);
                }, []),
              );
            }, ["a", "b"]),
          );
          return true;
        }, ["return:/1"]));
      }, []),
    );
  }, ["self", "aNumber", "aBlock:/2"]),
  "{ :self :aNumber :aBlock:/2 | if((<=(size(self), 1)), { true }, { valueWithReturn({ :return:/1 | adjacentPairsDo(self, { :a :b | ifFalse(aBlock(/(b, a), aNumber), { return(false) }) }); true }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "isOctetSequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _isInteger_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _betweenAnd_3(_each, 0, 255);
          }, []),
        );
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self | allSatisfy(self, { :each | &(isInteger(each), { betweenAnd(each,0, 255) }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "isPalindrome",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_self);
    /* Statements */
    return _if_3(
      _lessThanSign_2(_k, 2),
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
        return _allSatisfy_2(
          _upOrDownTo_2(1, _solidusSolidus_2(_k, 2)),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(
              _at_2(_self, _i),
              _at_2(_self, _hyphenMinus_2(_plusSign_2(_k, 1), _i)),
            );
          }, ["i"]),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | let k = size(self); if((<(k, 2)), { true }, { allSatisfy(upOrDownTo(1, //(k, 2)), { :i | =(at(self, i), at(self, -(+(k, 1), i))) }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "isRegularlySpaced",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_self);
    /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_k, 2),
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
        } /* Temporaries */
        let _z = _hyphenMinus_2(_at_2(_self, 2), _at_2(_self, 1));
        /* Statements */
        return _allSatisfy_2(
          _upOrDownTo_2(3, _k),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(
              _hyphenMinus_2(
                _at_2(_self, _i),
                _at_2(_self, _hyphenMinus_2(_i, 1)),
              ),
              _z,
            );
          }, ["i"]),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | let k = size(self); if((<=(k, 2)), { true }, { let z = -(at(self, 2), at(self, 1)); allSatisfy(upOrDownTo(3, k), { :i | =((-(at(self, i), at(self, -(i, 1)))), z) }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "isSequenceable",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["unused"]),
  "{ :unused | true }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "isVeryCloseTo",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalBy_3(_self, _anObject, _isVeryCloseTo_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | equalBy(self,anObject, isVeryCloseTo:/2) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "kadanesAlgorithm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = -Infinity;
    let _currentSum = 0;
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        _currentSum = _max_2(_x, _plusSign_2(_currentSum, _x));
        return _answer = _max_2(_answer, _currentSum);
      }, ["x"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = -Infinity; let currentSum = 0; do(self, { :x | currentSum := max(x, +(currentSum, x)); answer := max(answer, currentSum) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "last",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, _size_1(_self));
  }, ["self"]),
  "{ :self | at(self, size(self)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "last",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _size_1(_self);
    /* Statements */
    return _copyFromTo_3(_self, _plusSign_2(_hyphenMinus_2(_i, _n), 1), _i);
  }, ["self", "n"]),
  "{ :self :n | let i = size(self); copyFromTo(self,+(-(i, n), 1), i) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "last",
  ["self", "n", "zero"],
  sl.annotateFunction(function (_self, _n, _zero) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _n, _zero";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _size_1(_self);
    /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_i, _n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _copyFromTo_3(_self, _plusSign_2(_hyphenMinus_2(_i, _n), 1), _i);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSignPlusSign_2(
          _numberSign_2(_zero, _hyphenMinus_2(_n, _i)),
          _self,
        );
      }, []),
    );
  }, ["self", "n", "zero"]),
  "{ :self :n :zero | let i = size(self); if((>=(i, n)), { copyFromTo(self,+(-(i, n), 1), i) }, { ++((#(zero, (-(n, i)))), self) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "lastIndexOf",
  ["self", "anElement"],
  sl.annotateFunction(function (_self, _anElement) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anElement";
      throw new Error(errorMessage);
    } /* Statements */
    return _lastIndexOfStartingAt_3(_self, _anElement, _size_1(_self));
  }, ["self", "anElement"]),
  "{ :self :anElement | lastIndexOfStartingAt(self,anElement, size(self)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "lastIndexOfIfAbsent",
  ["self", "anElement", "exceptionBlock:/0"],
  sl.annotateFunction(function (_self, _anElement, _exceptionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _anElement, _exceptionBlock_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = _lastIndexOfStartingAt_3(_self, _anElement, _size_1(_self));
    /* Statements */
    return _if_3(
      _equalsSign_2(_index, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _exceptionBlock_0();
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _index;
      }, []),
    );
  }, ["self", "anElement", "exceptionBlock:/0"]),
  "{ :self :anElement :exceptionBlock:/0 | let index = lastIndexOfStartingAt(self,anElement, size(self)); if((=(index, 0)), { exceptionBlock() }, { index }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "lastIndexOfStartingAt",
  ["self", "anElement", "lastIndex"],
  sl.annotateFunction(function (_self, _anElement, _lastIndex) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anElement, _lastIndex";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _toByDo_4(
        _lastIndex,
        1,
        -1,
        sl.annotateFunction(function (_index) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _index";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _equalsSign_2(_at_2(_self, _index), _anElement),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_index);
            }, []),
          );
        }, ["index"]),
      );
      return 0;
    }, ["return:/1"]));
  }, ["self", "anElement", "lastIndex"]),
  "{ :self :anElement :lastIndex | valueWithReturn({ :return:/1 | toByDo(lastIndex, 1, -1, { :index | ifTrue((=(at(self, index), anElement)), { return(index) }) }); 0 }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "lastIndexOfStartingAtIfAbsent",
  ["self", "anElement", "lastIndex", "exceptionBlock:/0"],
  sl.annotateFunction(
    function (_self, _anElement, _lastIndex, _exceptionBlock_0) {
      /* ArityCheck */
      if (arguments.length !== 4) {
        const errorMessage =
          "Arity: expected 4, _self, _anElement, _lastIndex, _exceptionBlock_0";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _index = _lastIndexOfStartingAt_3(_self, _anElement, _lastIndex);
      /* Statements */
      return _if_3(
        _equalsSign_2(_index, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _exceptionBlock_0();
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _index;
        }, []),
      );
    },
    ["self", "anElement", "lastIndex", "exceptionBlock:/0"],
  ),
  "{ :self :anElement :lastIndex :exceptionBlock:/0 | let index = lastIndexOfStartingAt(self,anElement, lastIndex); if((=(index, 0)), { exceptionBlock() }, { index }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "lexicographicallyLeastRotationStartIndex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _f = _List_2(_asterisk_2(2, _n), -1);
    let _k = 0;
    let _b_1 = sl.annotateFunction(function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        throw new Error(errorMessage);
      } /* Statements */
      return _at_2(
        _self,
        _plusSign_2(_percentSign_2(_hyphenMinus_2(_i, 1), _n), 1),
      );
    }, ["i"]);
    /* Statements */
    _toDo_3(
      1,
      _hyphenMinus_2(_asterisk_2(2, _n), 1),
      sl.annotateFunction(function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _i = _at_2(_f, _hyphenMinus_2(_j, _k));
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _exclamationMarkEqualsSign_2(_i, -1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _exclamationMarkEqualsSign_2(
                  _b_1(_j),
                  _b_1(_plusSign_2(_plusSign_2(_k, _i), 1)),
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
            _ifTrue_2(
              _lessThanSignVerticalLine_2(
                _b_1(_j),
                _b_1(_plusSign_2(_plusSign_2(_k, _i), 1)),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _k = _hyphenMinus_2(_hyphenMinus_2(_j, _i), 1);
              }, []),
            );
            return _i = _at_2(_f, _plusSign_2(_i, 1));
          }, []),
        );
        return _if_3(
          _ampersand_2(
            _equalsSign_2(_i, -1),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _exclamationMarkEqualsSign_2(
                _b_1(_j),
                _b_1(_plusSign_2(_plusSign_2(_k, _i), 1)),
              );
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _ifTrue_2(
              _lessThanSignVerticalLine_2(
                _b_1(_j),
                _b_1(_plusSign_2(_plusSign_2(_k, _i), 1)),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _k = _j;
              }, []),
            );
            return _atPut_3(_f, _plusSign_2(_hyphenMinus_2(_j, _k), 1), -1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(
              _f,
              _plusSign_2(_hyphenMinus_2(_j, _k), 1),
              _plusSign_2(_i, 1),
            );
          }, []),
        );
      }, ["j"]),
    );
    return _plusSign_2(_percentSign_2(_hyphenMinus_2(_k, 1), _n), 1);
  }, ["self"]),
  "{ :self | let n = size(self); let f = List(*(2, n), -1); let k = 0; let b = { :i | at(self, +(%(-(i, 1), n), 1)) }; toDo(1, -(*(2, n), 1), { :j | let i = at(f, -(j, k)); whileTrue({ &((!=(i, -1)), { !=(b(j), b(+(+(k, i), 1))) }) }, { ifTrue((<|(b(j), b(+(+(k, i), 1)))), { k := -(-(j, i), 1) }); i := at(f, +(i, 1)) }); if((&((=(i, -1)), { !=(b(j), b(+(+(k, i), 1))) })), { ifTrue((<|(b(j), b(+(+(k, i), 1)))), { k := j }); atPut(f, +(-(j, k), 1), -1) }, { atPut(f, +(-(j, k), 1), +(i, 1)) }) }); +(%(-(k, 1), n), 1) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "lexicographicallyLeastRotation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _rotateLeft_2(
      _self,
      _hyphenMinus_2(_lexicographicallyLeastRotationStartIndex_1(_self), 1),
    );
  }, ["self"]),
  "{ :self | rotateLeft(self,-(lexicographicallyLeastRotationStartIndex(self), 1)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "leastSquares",
  ["m", "b"],
  sl.annotateFunction(function (_m, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _transpose_1(_m);
    let _y = [_b];
    let _cx = _m;
    let _cy = _transpose_1(_y);
    /* Statements */
    return _first_1(
      _transpose_1(_dot_2(_dot_2(_inverse_1(_dot_2(_x, _cx)), _x), _cy)),
    );
  }, ["m", "b"]),
  "{ :m :b | let x = transpose(m); let y = [b]; let cx = m; let cy = transpose(y); first(transpose(dot(dot(inverse(dot(x,cx)),x),cy))) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "linearCombination",
  ["v", "c"],
  sl.annotateFunction(function (_v, _c) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _v, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_asterisk_2(_c, _v));
  }, ["v", "c"]),
  "{ :v :c | sum((*(c, v))) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "linearIndex",
  ["shape", "aList"],
  sl.annotateFunction(function (_shape, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _shape, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _mixedRadixDecode_2(_hyphenMinus_2(_aList, 1), _shape),
      1,
    );
  }, ["shape", "aList"]),
  "{ :shape :aList | +(mixedRadixDecode((-(aList, 1)),shape), 1) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "linearRecurrence",
  ["kernel", "init", "n"],
  sl.annotateFunction(function (_kernel, _init, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _kernel, _init, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _copy_1(_init);
    let _m = _size_1(_kernel);
    let _d = _size_1(_init);
    let _j_2 = _if_3(
      _verticalLineVerticalLine_2(_isVector_1(_kernel), _isVector_1(_init)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _dot_2;
      }, []),
    );
    /* Statements */
    _toDo_3(
      _d,
      _hyphenMinus_2(_n, 1),
      sl.annotateFunction(function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _z = 0;
        /* Statements */
        _toDo_3(
          1,
          _m,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _z = _plusSign_2(
              _z,
              _j_2(
                _at_2(_kernel, _i),
                _at_2(_answer, _hyphenMinus_2(_plusSign_2(_k, 1), _i)),
              ),
            );
          }, ["i"]),
        );
        return _add_2(_answer, _z);
      }, ["k"]),
    );
    return _answer;
  }, ["kernel", "init", "n"]),
  "{ :kernel :init :n | let answer = copy(init); let m = size(kernel); let d = size(init); let j:/2 = if((||(isVector(kernel), isVector(init))), { * }, { dot:/2 }); toDo(d, -(n, 1), { :k | let z = 0; toDo(1, m, { :i | z := +(z, j(at(kernel, i), at(answer, -(+(k, 1), i)))) }); add(answer,z) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "longestCommonSubsequence",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _plusSign_2(_size_1(_a), 1);
    let _n = _plusSign_2(_size_1(_b), 1);
    let _lengths = _zeroMatrix_1([_m, _n]);
    let _answer = [];
    /* Statements */
    _withIndexCollect_2(
      _a,
      sl.annotateFunction(function (_x, _i) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _x, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _withIndexCollect_2(
          _b,
          sl.annotateFunction(function (_y, _j) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _y, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(_x, _y),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_4(
                  _lengths,
                  _plusSign_2(_i, 1),
                  _plusSign_2(_j, 1),
                  _plusSign_2(_at_3(_lengths, _i, _j), 1),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_4(
                  _lengths,
                  _plusSign_2(_i, 1),
                  _plusSign_2(_j, 1),
                  _max_2(
                    _at_3(_lengths, _plusSign_2(_i, 1), _j),
                    _at_3(_lengths, _i, _plusSign_2(_j, 1)),
                  ),
                );
              }, []),
            );
          }, ["y", "j"]),
        );
      }, ["x", "i"]),
    );
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersandAmpersand_2(
          _greaterThanSign_2(_m, 1),
          _greaterThanSign_2(_n, 1),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(
            _at_3(_lengths, _m, _n),
            _at_3(_lengths, _hyphenMinus_2(_m, 1), _n),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _m = _hyphenMinus_2(_m, 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(
                _at_3(_lengths, _m, _n),
                _at_3(_lengths, _m, _hyphenMinus_2(_n, 1)),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _n = _hyphenMinus_2(_n, 1);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _ifFalse_2(
                  _equalsSign_2(
                    _at_2(_a, _hyphenMinus_2(_m, 1)),
                    _at_2(_b, _hyphenMinus_2(_n, 1)),
                  ),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _error_1(
                      "@Sequenceable>>longestCommonSubsequence: error?",
                    );
                  }, []),
                );
                _addFirst_2(_answer, _at_2(_a, _hyphenMinus_2(_m, 1)));
                _m = _hyphenMinus_2(_m, 1);
                return _n = _hyphenMinus_2(_n, 1);
              }, []),
            );
          }, []),
        );
      }, []),
    );
    return _answer;
  }, ["a", "b"]),
  "{ :a :b | let m = +(size(a), 1); let n = +(size(b), 1); let lengths = zeroMatrix([m, n]); let answer = []; withIndexCollect(a, { :x :i | withIndexCollect(b, { :y :j | if((=(x, y)), { atPut(lengths, +(i, 1), +(j, 1), +(at(lengths, i, j), 1)) }, { atPut(lengths, +(i, 1), +(j, 1), max(at(lengths, +(i, 1), j),at(lengths, i, +(j, 1)))) }) }) }); whileTrue({ &&((>(m, 1)), (>(n, 1))) }, { if((=(at(lengths, m, n), at(lengths, -(m, 1), n))), { m := -(m, 1) }, { if((=(at(lengths, m, n), at(lengths, m, -(n, 1)))), { n := -(n, 1) }, { ifFalse((=(at(a, -(m, 1)), at(b, -(n, 1)))), { error('@Sequenceable>>longestCommonSubsequence: error?') }); addFirst(answer,at(a, -(m, 1))); m := -(m, 1); n := -(n, 1) }) }) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "longestCommonSubstringList",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _find_1 = sl.annotateFunction(function (_k) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _k";
        throw new Error(errorMessage);
      } /* Statements */
      return _intersection_2(
        _partition_3(_self, _k, 1),
        _partition_3(_aList, _k, 1),
      );
    }, ["k"]);
    let _n = _min_2(_size_1(_self), _size_1(_aList));
    /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _toByDo_4(
        _n,
        1,
        -1,
        sl.annotateFunction(function (_k) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _k";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _common = _find_1(_k);
          /* Statements */
          return _ifFalse_2(
            _isEmpty_1(_common),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_common);
            }, []),
          );
        }, ["k"]),
      );
      return [];
    }, ["return:/1"]));
  }, ["self", "aList"]),
  "{ :self :aList | let find = { :k | intersection(partition(self,k, 1),partition(aList,k, 1)) }; let n = min(size(self),size(aList)); valueWithReturn({ :return:/1 | toByDo(n, 1, -1, { :k | let common = find(k); ifFalse(isEmpty(common), { return(common) }) }); [] }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "longestCommonSubstring",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _common = _longestCommonSubstringList_2(_self, _aList);
    /* Statements */
    return _if_3(
      _isEmpty_1(_common),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _first_1(_common);
      }, []),
    );
  }, ["self", "aList"]),
  "{ :self :aList | let common = longestCommonSubstringList(self,aList); if(isEmpty(common), { [] }, { first(common) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "longestIncreasingSubsequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _self;
    let _n = _size_1(_x);
    /* Statements */
    return _if_3(
      _lessThanSign_2(_n, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _x;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _p = _List_2(_n, 0);
        let _m = _List_2(_plusSign_2(_n, 1), 0);
        let _l = 0;
        let _answer = [];
        let _k = null;
        /* Statements */
        _toDo_3(
          0,
          _hyphenMinus_2(_n, 1),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _lo = 1;
            let _hi = _l;
            let _z = null;
            /* Statements */
            _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _lessThanSignEqualsSign_2(_lo, _hi);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _mid = _ceiling_1(_solidus_2(_plusSign_2(_lo, _hi), 2));
                /* Statements */
                return _if_3(
                  _lessThanSign_2(
                    _at_2(_x, _plusSign_2(_at_2(_m, _plusSign_2(_mid, 1)), 1)),
                    _at_2(_x, _plusSign_2(_i, 1)),
                  ),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _lo = _plusSign_2(_mid, 1);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _hi = _hyphenMinus_2(_mid, 1);
                  }, []),
                );
              }, []),
            );
            _z = _lo;
            _atPut_3(_p, _plusSign_2(_i, 1), _at_2(_m, _z));
            _atPut_3(_m, _plusSign_2(_z, 1), _i);
            return _ifTrue_2(
              _greaterThanSign_2(_z, _l),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _l = _z;
              }, []),
            );
          }, ["i"]),
        );
        _k = _at_2(_m, _plusSign_2(_l, 1));
        _timesRepeat_2(
          _l,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _addFirst_2(_answer, _at_2(_x, _plusSign_2(_k, 1)));
            return _k = _at_2(_p, _plusSign_2(_k, 1));
          }, []),
        );
        return _answer;
      }, []),
    );
  }, ["self"]),
  "{ :self | let x = self; let n = size(x); if((<(n, 2)), { x }, { let p = List(n, 0); let m = List(+(n, 1), 0); let l = 0; let answer = []; let k = nil; toDo(0, -(n, 1), { :i | let lo = 1; let hi = l; let z = nil; whileTrue({ <=(lo, hi) }, { let mid = ceiling((/((+(lo, hi)), 2))); if((<(at(x, +(at(m, +(mid, 1)), 1)), at(x, +(i, 1)))), { lo := +(mid, 1) }, { hi := -(mid, 1) }) }); z := lo; atPut(p, +(i, 1), at(m, z)); atPut(m, +(z, 1), i); ifTrue((>(z, l)), { l := z }) }); k := at(m, +(l, 1)); timesRepeat(l, { addFirst(answer,at(x, +(k, 1))); k := at(p, +(k, 1)) }); answer }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "lyndonWordsDo",
  ["alphabet", "n", "aBlock:/1"],
  sl.annotateFunction(function (_alphabet, _n, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _alphabet, _n, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _nextWord_1 = sl.annotateFunction(function (_w) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _w";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _k = _plusSign_2(_solidusSolidus_2(_n, _size_1(_w)), 1);
      let _x = _first_2(
        _catenate_1(_exclamationMark_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _w;
          }, []),
          _k,
        )),
        _n,
      );
      /* Statements */
      _whileTrue_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ampersand_2(
            _greaterThanSign_2(_size_1(_x), 0),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _equalsSign_2(_last_1(_x), _last_1(_alphabet));
            }, []),
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _removeLast_1(_x);
        }, []),
      );
      _ifFalse_2(
        _isEmpty_1(_x),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _i = _plusSign_2(_indexOf_2(_alphabet, _last_1(_x)), 1);
          /* Statements */
          return _atPut_3(_x, _size_1(_x), _at_2(_alphabet, _i));
        }, []),
      );
      return _x;
    }, ["w"]);
    let _w = [_first_1(_alphabet)];
    /* Statements */
    return _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _greaterThanSign_2(_size_1(_w), 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_size_1(_w), _n);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _aBlock_1(_w);
        return _w = _nextWord_1(_w);
      }, []),
    );
  }, ["alphabet", "n", "aBlock:/1"]),
  "{ :alphabet :n :aBlock:/1 | let nextWord = { :w | let k = +((//(n, size(w))), 1); let x = first(catenate((!({ w }, k))),n); whileTrue({ &(>(size(x), 0), { =(last(x), last(alphabet)) }) }, { removeLast(x) }); ifFalse(isEmpty(x), { let i = +(indexOf(alphabet,last(x)), 1); atPut(x, size(x), at(alphabet, i)) }); x }; let w = [first(alphabet)]; whileTrue({ &(>(size(w), 0), { <=(size(w), n) }) }, { aBlock(w); w := nextWord(w) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "maximumSegmentSum",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = -Infinity;
    let _currentSum = 0;
    let _i = 1;
    let _j = 1;
    let _a = 1;
    /* Statements */
    _withIndexDo_2(
      _self,
      sl.annotateFunction(function (_x, _b) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _x, _b";
          throw new Error(errorMessage);
        } /* Statements */
        _ifTrue_2(
          _lessThanSign_2(_currentSum, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _currentSum = 0;
            return _a = _b;
          }, []),
        );
        _currentSum = _plusSign_2(_currentSum, _x);
        return _ifTrue_2(
          _greaterThanSign_2(_currentSum, _answer),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _answer = _currentSum;
            _i = _a;
            return _j = _b;
          }, []),
        );
      }, ["x", "b"]),
    );
    return [_answer, _i, _j];
  }, ["self"]),
  "{ :self | let answer = -Infinity; let currentSum = 0; let i = 1; let j = 1; let a = 1; withIndexDo(self, { :x :b | ifTrue((<(currentSum, 0)), { currentSum := 0; a := b }); currentSum := +(currentSum, x); ifTrue((>(currentSum, answer)), { answer := currentSum; i := a; j := b }) }); [answer, i, j] }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "meshGrid",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _size_1(_y);
    let _n = _size_1(_x);
    /* Statements */
    return [
      _exclamationMark_2(_asList_1(_x), _m),
      _transpose_1(_exclamationMark_2(_asList_1(_y), _n)),
    ];
  }, ["x", "y"]),
  "{ :x :y | let m = size(y); let n = size(x); [!(asList(x), m), transpose((!(asList(y), n)))] }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "middle",
  ["self", "count"],
  sl.annotateFunction(function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _plusSign_2(_solidusSolidus_2(_size_1(_self), 2), 1);
    let _j = _solidusSolidus_2(_count, 2);
    let _k = _hyphenMinus_2(_i, _j);
    /* Statements */
    return _copyFromTo_3(_self, _k, _hyphenMinus_2(_plusSign_2(_k, _count), 1));
  }, ["self", "count"]),
  "{ :self :count | let i = +(//(size(self), 2), 1); let j = //(count, 2); let k = -(i, j); copyFromTo(self,k, -(+(k, count), 1)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "middle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, _plusSign_2(_solidusSolidus_2(_size_1(_self), 2), 1));
  }, ["self"]),
  "{ :self | at(self, +(//(size(self), 2), 1)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "minimumDifferenceBy",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = Infinity;
    /* Statements */
    _adjacentPairsDo_2(
      _self,
      sl.annotateFunction(function (_p, _q) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _p, _q";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _min_2(
          _answer,
          _hyphenMinus_2(_aBlock_1(_q), _aBlock_1(_p)),
        );
      }, ["p", "q"]),
    );
    return _answer;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let answer = Infinity; adjacentPairsDo(self, { :p :q | answer := min(answer,-(aBlock(q), aBlock(p))) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "minimumDifference",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _minimumDifferenceBy_2(_self, _identity_1);
  }, ["self"]),
  "{ :self | minimumDifferenceBy(self,identity:/1) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "mirror",
  ["self", "m", "n"],
  sl.annotateFunction(function (_self, _m, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _m, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _self,
      _reverse_1(
        _copyFromTo_3(
          _self,
          _plusSign_2(_n, 1),
          _hyphenMinus_2(_size_1(_self), _m),
        ),
      ),
    );
  }, ["self", "m", "n"]),
  "{ :self :m :n | ++(self, reverse(copyFromTo(self,+(n, 1), -(size(self), m)))) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "mixedRadixDecode",
  ["self", "factors"],
  sl.annotateFunction(function (_self, _factors) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _factors";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 0;
    let _base = 1;
    let _k = _min_2(_size_1(_factors), _size_1(_self));
    let _prefix = _hyphenMinus_2(_size_1(_self), _size_1(_factors));
    /* Statements */
    _ifTrue_2(
      _greaterThanSign_2(_prefix, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "@Sequenceable>>mixedRadixDecode: sequence too long",
        );
      }, []),
    );
    _do_2(
      _upOrDownTo_2(_k, 1),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        _answer = _plusSign_2(
          _answer,
          _asterisk_2(_at_2(_self, _plusSign_2(_index, _prefix)), _base),
        );
        return _base = _asterisk_2(_base, _at_2(_factors, _index));
      }, ["index"]),
    );
    _ifTrue_2(
      _equalsSign_2(_prefix, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _plusSign_2(
          _answer,
          _asterisk_2(_at_2(_self, 1), _base),
        );
      }, []),
    );
    return _answer;
  }, ["self", "factors"]),
  "{ :self :factors | let answer = 0; let base = 1; let k = min(size(factors),size(self)); let prefix = -(size(self), size(factors)); ifTrue((>(prefix, 1)), { error(self,'@Sequenceable>>mixedRadixDecode: sequence too long') }); do(upOrDownTo(k, 1), { :index | answer := +(answer, (*(at(self, +(index, prefix)), base))); base := *(base, at(factors, index)) }); ifTrue((=(prefix, 1)), { answer := +(answer, (*(at(self, 1), base))) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "movingAverage",
  ["x", "rOrW"],
  sl.annotateFunction(function (_x, _rOrW) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _rOrW";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let __SplVar8 = _assertIsOfSize_2(
      _if_3(
        _isList_1(_rOrW),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return [_size_1(_rOrW), _rOrW];
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return [_rOrW, _numberSign_2(1, _rOrW)];
        }, []),
      ),
      2,
    );
    let _r = _at_2(__SplVar8, 1);
    let _w = _at_2(__SplVar8, 2);
    let _wSum = _sum_1(_w);
    /* Statements */
    _toDo_3(
      1,
      _plusSign_2(_hyphenMinus_2(_size_1(_x), _r), 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _n = 0;
        /* Statements */
        _toDo_3(
          1,
          _r,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _n = _plusSign_2(
              _n,
              _asterisk_2(
                _at_2(_x, _hyphenMinus_2(_plusSign_2(_i, _j), 1)),
                _at_2(_w, _j),
              ),
            );
          }, ["j"]),
        );
        return _add_2(_answer, _solidus_2(_n, _wSum));
      }, ["i"]),
    );
    return _answer;
  }, ["x", "rOrW"]),
  "{ :x :rOrW | let answer = []; let __SplVar8 = assertIsOfSize(if(isList(rOrW), { [size(rOrW), rOrW] }, { [rOrW, #(1, rOrW)] }), 2); let r = at(__SplVar8, 1); let w = at(__SplVar8, 2); let wSum = sum(w); toDo(1, +(-(size(x), r), 1), { :i | let n = 0; toDo(1, r, { :j | n := +(n, (*(at(x, -(+(i, j), 1)), at(w, j)))) }); add(answer,/(n, wSum)) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "movingMedian",
  ["self", "windowSize"],
  sl.annotateFunction(function (_self, _windowSize) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _windowSize";
      throw new Error(errorMessage);
    } /* Statements */
    return _movingMap_3(_median_1, _self, _windowSize);
  }, ["self", "windowSize"]),
  "{ :self :windowSize | movingMap(median:/1,self, windowSize) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "movingSum",
  ["self", "windowSize"],
  sl.annotateFunction(function (_self, _windowSize) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _windowSize";
      throw new Error(errorMessage);
    } /* Statements */
    return _movingMap_3(_sum_1, _self, _windowSize);
  }, ["self", "windowSize"]),
  "{ :self :windowSize | movingMap(sum:/1,self, windowSize) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "norm",
  ["self", "p"],
  sl.annotateFunction(function (_self, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(
      _sum_1(_circumflexAccent_2(_abs_1(_self), _p)),
      _solidus_2(1, _p),
    );
  }, ["self", "p"]),
  "{ :self :p | ^(sum((^(abs(self), p))), (/(1, p))) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "norm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sqrt_1(_dotProduct_2(_self, _conjugate_1(_self)));
  }, ["self"]),
  "{ :self | sqrt(dotProduct(self,conjugate(self))) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "normalize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _norm_1(_self);
    /* Statements */
    return _if_3(
      _isVeryCloseTo_2(_n, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_self, _n);
      }, []),
    );
  }, ["self"]),
  "{ :self | let n = norm(self); if(isVeryCloseTo(n,0), { self }, { /(self, n) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "nubCumulatively",
  ["self", "compareBlock:/2"],
  sl.annotateFunction(function (_self, _compareBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _compareBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _seen = [];
    /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _select_2(
          _each,
          sl.annotateFunction(function (_item) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _item";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _includesBy_3(_seen, _item, _compareBlock_2),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return false;
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _add_2(_seen, _item);
                return true;
              }, []),
            );
          }, ["item"]),
        );
      }, ["each"]),
    );
  }, ["self", "compareBlock:/2"]),
  "{ :self :compareBlock:/2 | let seen = []; collect(self, { :each | select(each, { :item | if(includesBy(seen,item, compareBlock:/2), { false }, { add(seen,item); true }) }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "nubCumulatively",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _nubCumulatively_2(_self, _equalsSign_2);
  }, ["self"]),
  "{ :self | nubCumulatively(self,=) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "nubSieve",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _seen = [];
    /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _includes_2(_seen, _each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return false;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _add_2(_seen, _each);
            return true;
          }, []),
        );
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self | let seen = []; collect(self, { :each | if(includes(seen,each), { false }, { add(seen,each); true }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "numberCompose",
  ["c", "u"],
  sl.annotateFunction(function (_c, _u) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _c, _u";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_asterisk_2(_c, _last_2(_u, _size_1(_c))));
  }, ["c", "u"]),
  "{ :c :u | sum((*(c, last(u,size(c))))) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "occurrencesOf",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _tally = 0;
    /* Statements */
    _indicesDo_2(
      _self,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _equalsSign_2(_at_2(_self, _index), _anObject),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _tally = _plusSign_2(_tally, 1);
          }, []),
        );
      }, ["index"]),
    );
    return _tally;
  }, ["self", "anObject"]),
  "{ :self :anObject | let tally = 0; indicesDo(self, { :index | ifTrue((=(at(self, index), anObject)), { tally := +(tally, 1) }) }); tally }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "orderedSubstrings",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = [];
        let _run = [_first_1(_self)];
        /* Statements */
        _toDo_3(
          2,
          _size_1(_self),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _item = _at_2(_self, _i);
            /* Statements */
            return _if_3(
              _aBlock_2(_at_2(_self, _hyphenMinus_2(_i, 1)), _item),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(_run, _item);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _add_2(_answer, _copy_1(_run));
                _removeAll_1(_run);
                return _add_2(_run, _item);
              }, []),
            );
          }, ["i"]),
        );
        _add_2(_answer, _run);
        return _answer;
      }, []),
    );
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | if(isEmpty(self), { [] }, { let answer = []; let run = [first(self)]; toDo(2, size(self), { :i | let item = at(self, i); if(aBlock(at(self, -(i, 1)), item), { add(run,item) }, { add(answer,copy(run)); removeAll(run); add(run,item) }) }); add(answer,run); answer }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "orderedSubstrings",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _orderedSubstrings_2(_self, _lessThanSignVerticalLine_2);
  }, ["self"]),
  "{ :self | orderedSubstrings(self,<|) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "outerProduct",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _outer_3(_asterisk_2, _self, _aList);
  }, ["self", "aList"]),
  "{ :self :aList | outer(*, self, aList) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "padLeftAndRight",
  ["self", "anInteger", "anObject"],
  sl.annotateFunction(function (_self, _anInteger, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_size_1(_self), _anInteger),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _i = _hyphenMinus_2(_anInteger, _size_1(_self));
        let _j = _solidusSolidus_2(_i, 2);
        let _k = _hyphenMinus_2(_i, _j);
        /* Statements */
        return _plusSignPlusSign_2(
          _plusSignPlusSign_2(_numberSign_2(_anObject, _j), _self),
          _numberSign_2(_anObject, _k),
        );
      }, []),
    );
  }, ["self", "anInteger", "anObject"]),
  "{ :self :anInteger :anObject | if((>=(size(self), anInteger)), { self }, { let i = -(anInteger, size(self)); let j = //(i, 2); let k = -(i, j); ++(++((#(anObject, j)), self), (#(anObject, k))) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "pairsCollect",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _upOrDownTo_2(1, _solidusSolidus_2(_size_1(_self), 2)),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(
          _at_2(_self, _hyphenMinus_2(_asterisk_2(2, _index), 1)),
          _at_2(_self, _asterisk_2(2, _index)),
        );
      }, ["index"]),
    );
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | collect(upOrDownTo(1, //(size(self), 2)), { :index | aBlock(at(self, -(*(2, index), 1)), at(self, *(2, index))) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "pairsDo",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _toDo_3(
      1,
      _solidusSolidus_2(_size_1(_self), 2),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(
          _at_2(_self, _hyphenMinus_2(_asterisk_2(2, _index), 1)),
          _at_2(_self, _asterisk_2(2, _index)),
        );
      }, ["index"]),
    );
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | toDo(1, //(size(self), 2), { :index | aBlock(at(self, -(*(2, index), 1)), at(self, *(2, index))) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "pairwiseSum",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_n, 128),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _sum_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _m = _floor_1(_solidus_2(_n, 2));
        /* Statements */
        return _plusSign_2(
          _pairwiseSum_1(_sliceFromTo_3(_self, 1, _m)),
          _pairwiseSum_1(_sliceFromTo_3(_self, _plusSign_2(_m, 1), _n)),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | let n = size(self); if((<=(n, 128)), { sum(self) }, { let m = floor((/(n, 2))); +(pairwiseSum(sliceFromTo(self,1, m)), pairwiseSum(sliceFromTo(self,+(m, 1), n))) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "partIndex",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _atAllSymmetrical_2(_operand, _self);
  }, ["self", "operand"]),
  "{ :self :operand | atAllSymmetrical(operand,self) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "part",
  ["self", "indices"],
  sl.annotateFunction(function (_self, _indices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indices";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_indices);
    let _i = _at_2(_indices, 1);
    let _a = _partIndex_2(_i, _self);
    /* Statements */
    return _if_3(
      _equalsSign_2(_k, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _a;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _j = _allButFirst_1(_indices);
        /* Statements */
        return _if_3(
          _isCollection_1(_i),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(
              _a,
              sl.annotateFunction(function (_each) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _each";
                  throw new Error(errorMessage);
                } /* Statements */
                return _part_2(_each, _j);
              }, ["each"]),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _part_2(_a, _j);
          }, []),
        );
      }, []),
    );
  }, ["self", "indices"]),
  "{ :self :indices | let k = size(indices); let i = at(indices, 1); let a = partIndex(i,self); if((=(k, 1)), { a }, { let j = allButFirst(indices); if(isCollection(i), { collect(a, { :each | part(each,j) }) }, { part(a,j) }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "partitionCollect",
  ["self", "windowSize", "stepSize", "aBlock:/1"],
  sl.annotateFunction(function (_self, _windowSize, _stepSize, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _windowSize, _stepSize, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _partitionDo_4(
      _self,
      _windowSize,
      _stepSize,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _aBlock_1(_each));
      }, ["each"]),
    );
    return _answer;
  }, ["self", "windowSize", "stepSize", "aBlock:/1"]),
  "{ :self :windowSize :stepSize :aBlock:/1 | let answer = []; partitionDo(self, windowSize, stepSize, { :each | add(answer,aBlock(each)) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "partitionDo",
  ["self", "windowSize", "stepSize", "aBlock:/1"],
  sl.annotateFunction(function (_self, _windowSize, _stepSize, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _windowSize, _stepSize, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifTrue_2(
      _lessThanSignEqualsSign_2(_windowSize, _size_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_windowSize, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_1([]);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _answer = _List_1(_windowSize);
            /* Statements */
            return _toByDo_4(
              1,
              _plusSign_2(_hyphenMinus_2(_size_1(_self), _windowSize), 1),
              _stepSize,
              sl.annotateFunction(function (_index) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _index";
                  throw new Error(errorMessage);
                } /* Statements */
                _copyFromToInto_4(
                  _self,
                  _index,
                  _hyphenMinus_2(_plusSign_2(_index, _windowSize), 1),
                  _answer,
                );
                return _aBlock_1(_answer);
              }, ["index"]),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "windowSize", "stepSize", "aBlock:/1"]),
  "{ :self :windowSize :stepSize :aBlock:/1 | ifTrue((<=(windowSize, size(self))), { if((=(windowSize, 0)), { aBlock([]) }, { let answer = List(windowSize); toByDo(1, +(-(size(self), windowSize), 1), stepSize, { :index | copyFromToInto(self,index, -(+(index, windowSize), 1), answer); aBlock(answer) }) }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "partition",
  ["self", "windowSize", "stepSize"],
  sl.annotateFunction(function (_self, _windowSize, _stepSize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _windowSize, _stepSize";
      throw new Error(errorMessage);
    } /* Statements */
    return _partitionCollect_4(_self, _windowSize, _stepSize, _copy_1);
  }, ["self", "windowSize", "stepSize"]),
  "{ :self :windowSize :stepSize | partitionCollect(self,windowSize, stepSize, copy:/1) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "partition",
  ["self", "windowSize"],
  sl.annotateFunction(function (_self, _windowSize) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _windowSize";
      throw new Error(errorMessage);
    } /* Statements */
    return _partition_3(_self, _windowSize, _windowSize);
  }, ["self", "windowSize"]),
  "{ :self :windowSize | partition(self,windowSize, windowSize) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "pick",
  ["self", "aList", "anObject"],
  sl.annotateFunction(function (_self, _aList, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aList, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_depth_1(_self), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _withCollect_3(
          _self,
          _aList,
          sl.annotateFunction(function (_i, _j) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _i, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _pick_3(_i, _j, _anObject);
          }, ["i", "j"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = [];
        /* Statements */
        _withDo_3(
          _self,
          _aList,
          sl.annotateFunction(function (_i, _j) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _i, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _equalsSign_2(_j, _anObject),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(_answer, _i);
              }, []),
            );
          }, ["i", "j"]),
        );
        return _answer;
      }, []),
    );
  }, ["self", "aList", "anObject"]),
  "{ :self :aList :anObject | if((>(depth(self), 2)), { withCollect(self, aList, { :i :j | pick(i,j, anObject) }) }, { let answer = []; withDo(self, aList, { :i :j | ifTrue((=(j, anObject)), { add(answer,i) }) }); answer }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "pinnedIndex",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_index, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSign_2(_index, _size_1(_self)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _size_1(_self);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _index;
          }, []),
        );
      }, []),
    );
  }, ["self", "index"]),
  "{ :self :index | if((<(index, 1)), { 1 }, { if((>(index, size(self))), { size(self) }, { index }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "prefixesDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _toDo_3(
      1,
      _size_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_copyFromTo_3(_self, 1, _each));
      }, ["each"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | toDo(1, size(self), { :each | aBlock(copyFromTo(self,1, each)) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "prefixes",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _prefixesDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _each);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = []; prefixesDo(self, { :each | add(answer,each) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "prefixProduct",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _scan_2(_self, _asterisk_2);
  }, ["self"]),
  "{ :self | scan(self,*) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "prefixSum",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _scan_2(_self, _plusSign_2);
  }, ["self"]),
  "{ :self | scan(self,+) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "projection",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _w = _conjugate_1(_v);
    /* Statements */
    return _asterisk_2(_solidus_2(_dot_2(_u, _w), _dot_2(_v, _w)), _v);
  }, ["u", "v"]),
  "{ :u :v | let w = conjugate(v); *(/(dot(u,w), dot(v,w)), v) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "randomChoice",
  ["self", "r", "shape"],
  sl.annotateFunction(function (_self, _r, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _r, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_self);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _i = _nextRandomInteger_3(_r, 1, _k);
        /* Statements */
        return _at_2(_self, _i);
      }, []),
      _shape,
    );
  }, ["self", "r", "shape"]),
  "{ :self :r :shape | let k = size(self); !({ let i = nextRandomInteger(r,1, k); at(self, i) }, shape) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "ratios",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _partition_3(_self, 2, 1),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_at_2(_each, 2), _at_2(_each, 1));
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self | collect(partition(self,2, 1), { :each | /(at(each, 2), at(each, 1)) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "replace",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _indicesDo_2(
      _self,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_self, _index, _aBlock_1(_at_2(_self, _index)));
      }, ["index"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | indicesDo(self, { :index | atPut(self, index, aBlock(at(self, index))) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "replaceAllWith",
  ["self", "oldObject", "newObject"],
  sl.annotateFunction(function (_self, _oldObject, _newObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _oldObject, _newObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = 0;
    /* Statements */
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _index = _indexOfStartingAtBy_4(
          _self,
          _oldObject,
          _plusSign_2(_index, 1),
          _equalsSign_2,
        );
        return _equalsSign_2(_index, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_self, _index, _newObject);
      }, []),
    );
    return _self;
  }, ["self", "oldObject", "newObject"]),
  "{ :self :oldObject :newObject | let index = 0; whileFalse({ index := indexOfStartingAtBy(self,oldObject, +(index, 1), =); =(index, 0) }, { atPut(self, index, newObject) }); self }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "replaceFromToWith",
  ["self", "start", "stop", "replacement"],
  sl.annotateFunction(function (_self, _start, _stop, _replacement) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _start, _stop, _replacement";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(
        _size_1(_replacement),
        _plusSign_2(_hyphenMinus_2(_stop, _start), 1),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _replaceFromToWithStartingAt_5(
          _self,
          _start,
          _stop,
          _replacement,
          1,
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "@Sequenceable>> replaceFromToWith: size of replacement does not match",
        );
      }, []),
    );
  }, ["self", "start", "stop", "replacement"]),
  "{ :self :start :stop :replacement | if((=(size(replacement), (+(-(stop, start), 1)))), { replaceFromToWithStartingAt(self,start, stop, replacement, 1) }, { error(self,'@Sequenceable>> replaceFromToWith: size of replacement does not match') }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "replaceFromToWithStartingAt",
  ["self", "start", "stop", "replacement", "replacementStart"],
  sl.annotateFunction(
    function (_self, _start, _stop, _replacement, _replacementStart) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _self, _start, _stop, _replacement, _replacementStart";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _replacementOffset = _hyphenMinus_2(_replacementStart, _start);
      let _index = _start;
      /* Statements */
      _whileTrue_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSignEqualsSign_2(_index, _stop);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _atPut_3(
            _self,
            _index,
            _at_2(_replacement, _plusSign_2(_replacementOffset, _index)),
          );
          return _index = _plusSign_2(_index, 1);
        }, []),
      );
      return _self;
    },
    ["self", "start", "stop", "replacement", "replacementStart"],
  ),
  "{ :self :start :stop :replacement :replacementStart | let replacementOffset = -(replacementStart, start); let index = start; whileTrue({ <=(index, stop) }, { atPut(self, index, at(replacement, +(replacementOffset, index))); index := +(index, 1) }); self }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "replicateEachApplying",
  ["self", "counts", "aBlock:/1"],
  sl.annotateFunction(function (_self, _counts, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _counts, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _exclamationMarkEqualsSign_2(_size_1(_self), _size_1(_counts)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "@Sequenceable>>replicateEachApplying: counts not of correct size",
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answerSize = _sum_1(_counts);
        let _answer = _ofSize_2(_species_1(_self), _answerSize);
        let _answerIndex = 1;
        /* Statements */
        _do_2(
          _upOrDownTo_2(1, _size_1(_self)),
          sl.annotateFunction(function (_selfIndex) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _selfIndex";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _entry = _aBlock_1(_at_2(_self, _selfIndex));
            /* Statements */
            return _timesRepeat_2(
              _at_2(_counts, _selfIndex),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _atPut_3(_answer, _answerIndex, _entry);
                return _answerIndex = _plusSign_2(_answerIndex, 1);
              }, []),
            );
          }, ["selfIndex"]),
        );
        return _answer;
      }, []),
    );
  }, ["self", "counts", "aBlock:/1"]),
  "{ :self :counts :aBlock:/1 | if((!=(size(self), size(counts))), { error(self,'@Sequenceable>>replicateEachApplying: counts not of correct size') }, { let answerSize = sum(counts); let answer = ofSize(species(self),answerSize); let answerIndex = 1; do(upOrDownTo(1, size(self)), { :selfIndex | let entry = aBlock(at(self, selfIndex)); timesRepeat(at(counts, selfIndex), { atPut(answer, answerIndex, entry); answerIndex := +(answerIndex, 1) }) }); answer }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "replicateEach",
  ["self", "counts"],
  sl.annotateFunction(function (_self, _counts) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _counts";
      throw new Error(errorMessage);
    } /* Statements */
    _ifTrue_2(
      _isScalarInteger_1(_counts),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _counts = _numberSign_2(_counts, _size_1(_self));
      }, []),
    );
    return _replicateEachApplying_3(_self, _counts, _identity_1);
  }, ["self", "counts"]),
  "{ :self :counts | ifTrue(isScalarInteger(counts), { counts := #(counts, size(self)) }); replicateEachApplying(self,counts, identity:/1) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "reverse",
  ["self", "level"],
  sl.annotateFunction(function (_self, _level) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _level";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_level, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _ofSize_2(_species_1(_self), _size_1(_self));
        let _fromIndex = _plusSign_2(_size_1(_self), 1);
        /* Statements */
        _indicesDo_2(
          _self,
          sl.annotateFunction(function (_toIndex) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _toIndex";
              throw new Error(errorMessage);
            } /* Statements */
            _atPut_3(
              _answer,
              _toIndex,
              _at_2(_self, _hyphenMinus_2(_fromIndex, 1)),
            );
            return _fromIndex = _hyphenMinus_2(_fromIndex, 1);
          }, ["toIndex"]),
        );
        return _answer;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
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
            return _reverse_2(_each, _hyphenMinus_2(_level, 1));
          }, ["each"]),
        );
      }, []),
    );
  }, ["self", "level"]),
  "{ :self :level | if((<=(level, 1)), { let answer = ofSize(species(self),size(self)); let fromIndex = +(size(self), 1); indicesDo(self, { :toIndex | atPut(answer, toIndex, at(self, -(fromIndex, 1))); fromIndex := -(fromIndex, 1) }); answer }, { collect(self, { :each | reverse(each,-(level, 1)) }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "reverse",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reverse_2(_self, 1);
  }, ["self"]),
  "{ :self | reverse(self,1) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "reverseDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _toByDo_4(
      _size_1(_self),
      1,
      -1,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_at_2(_self, _index));
      }, ["index"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | toByDo(size(self), 1, -1, { :index | aBlock(at(self, index)) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "reverseWithDo",
  ["self", "aList", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aList, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aList, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _exclamationMarkEqualsSign_2(_size_1(_self), _size_1(_aList)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Sequenceable>> reverseWithDo: unequal size");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _toByDo_4(
          _size_1(_self),
          1,
          -1,
          sl.annotateFunction(function (_index) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _index";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_2(_at_2(_self, _index), _at_2(_aList, _index));
          }, ["index"]),
        );
      }, []),
    );
  }, ["self", "aList", "aBlock:/2"]),
  "{ :self :aList :aBlock:/2 | if((!=(size(self), size(aList))), { error(self,'@Sequenceable>> reverseWithDo: unequal size') }, { toByDo(size(self), 1, -1, { :index | aBlock(at(self, index), at(aList, index)) }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "riffle",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _size_1(_self);
    /* Statements */
    return _if_3(
      _lessThanSign_2(_m, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isSequenceable_1(_anObject),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _n = _size_1(_anObject);
            /* Statements */
            return _if_3(
              _greaterThanSign_2(_n, _m),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _error_2(_self, "riffle: too many items to insert");
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _answer = [];
                /* Statements */
                _toDo_3(
                  1,
                  _hyphenMinus_2(_m, 1),
                  sl.annotateFunction(function (_i) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _i";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _add_2(_answer, _at_2(_self, _i));
                    return _add_2(_answer, _atWrap_2(_anObject, _i));
                  }, ["i"]),
                );
                _add_2(_answer, _at_2(_self, _m));
                _ifTrue_2(
                  _equalsSign_2(_n, _m),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _add_2(_answer, _at_2(_anObject, _n));
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
            return _intersperse_2(_self, _anObject);
          }, []),
        );
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | let m = size(self); if((<(m, 2)), { self }, { if(isSequenceable(anObject), { let n = size(anObject); if((>(n, m)), { error(self,'riffle: too many items to insert') }, { let answer = []; toDo(1, -(m, 1), { :i | add(answer,at(self, i)); add(answer,atWrap(anObject,i)) }); add(answer,at(self, m)); ifTrue((=(n, m)), { add(answer,at(anObject, n)) }); answer }) }, { intersperse(self,anObject) }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "rotate",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _rotateRight_2(_self, _anInteger);
  }, ["self", "anInteger"]),
  "{ :self :anInteger | rotateRight(self,anInteger) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "rotateLeft",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _rotateLeft_2(_self, 1);
  }, ["self"]),
  "{ :self | rotateLeft(self,1) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "rotateLeft",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _toAsCollect_4(
      _plusSign_2(1, _anInteger),
      _plusSign_2(_size_1(_self), _anInteger),
      _species_1(_self),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _atWrap_2(_self, _index);
      }, ["index"]),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger | toAsCollect((+(1, anInteger)), +(size(self), anInteger), species(self), { :index | atWrap(self,index) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "rotateLeftInPlace",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _left = _first_1(_self);
    /* Statements */
    _toDo_3(
      2,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_self, _hyphenMinus_2(_i, 1), _at_2(_self, _i));
      }, ["i"]),
    );
    return _atPut_3(_self, _n, _left);
  }, ["self"]),
  "{ :self | let n = size(self); let left = first(self); toDo(2, n, { :i | atPut(self, -(i, 1), at(self, i)) }); atPut(self, n, left) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "rotateRight",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _rotateRight_2(_self, 1);
  }, ["self"]),
  "{ :self | rotateRight(self,1) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "rotateRight",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _toAsCollect_4(
      _hyphenMinus_2(1, _anInteger),
      _hyphenMinus_2(_size_1(_self), _anInteger),
      _species_1(_self),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _atWrap_2(_self, _index);
      }, ["index"]),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger | toAsCollect((-(1, anInteger)), -(size(self), anInteger), species(self), { :index | atWrap(self,index) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "scalarTripleProduct",
  ["a", "b", "c"],
  sl.annotateFunction(function (_a, _b, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return _dot_2(_a, _cross_2(_b, _c));
  }, ["a", "b", "c"]),
  "{ :a :b :c | dot(a,cross(b,c)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "scan",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _scanLeft_2(_self, _aBlock_2);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | scanLeft(self,aBlock:/2) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "scanLeft",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifEmpty_3(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _copy_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _new_2(_species_1(_self), _size_1(_self));
        let _next = _at_2(_self, 1);
        /* Statements */
        _atPut_3(_answer, 1, _next);
        _toDo_3(
          2,
          _size_1(_self),
          sl.annotateFunction(function (_index) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _index";
              throw new Error(errorMessage);
            } /* Statements */
            _next = _aBlock_2(_next, _at_2(_self, _index));
            return _atPut_3(_answer, _index, _next);
          }, ["index"]),
        );
        return _answer;
      }, []),
    );
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | ifEmpty(self, { copy(self) }, { let answer = new(species(self),size(self)); let next = at(self, 1); atPut(answer, 1, next); toDo(2, size(self), { :index | next := aBlock(next, at(self, index)); atPut(answer, index, next) }); answer }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "scanLeftAssociatingRight",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifEmpty_3(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _copy_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _upOrDownTo_2(1, _size_1(_self)),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _foldRightPrefix_3(_self, _each, _aBlock_2);
          }, ["each"]),
        );
      }, []),
    );
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | ifEmpty(self, { copy(self) }, { collect(upOrDownTo(1, size(self)), { :each | foldRightPrefix(self,each, aBlock:/2) }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "scanRight",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifEmpty_3(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _copy_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _new_2(_species_1(_self), _size_1(_self));
        let _next = _at_2(_self, _size_1(_self));
        /* Statements */
        _atPut_3(_answer, _size_1(_self), _next);
        _toByDo_4(
          _hyphenMinus_2(_size_1(_self), 1),
          1,
          -1,
          sl.annotateFunction(function (_index) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _index";
              throw new Error(errorMessage);
            } /* Statements */
            _next = _aBlock_2(_at_2(_self, _index), _next);
            return _atPut_3(_answer, _index, _next);
          }, ["index"]),
        );
        return _answer;
      }, []),
    );
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | ifEmpty(self, { copy(self) }, { let answer = new(species(self),size(self)); let next = at(self, size(self)); atPut(answer, size(self), next); toByDo((-(size(self), 1)), 1, -1, { :index | next := aBlock(at(self, index), next); atPut(answer, index, next) }); answer }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "semiconvergents",
  ["self", "epsilon"],
  sl.annotateFunction(function (_self, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _epsilon";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _final = _fromContinuedFraction_1(_self);
    let _lastError = _final;
    /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _prefixesDo_2(
        _self,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _z = _last_1(_each);
          let _h = _roundUp_1(_solidus_2(_z, 2));
          let _p = _allButLast_1(_each);
          /* Statements */
          return _toDo_3(
            _h,
            _z,
            sl.annotateFunction(function (_k) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _k";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _c = _plusSignPlusSign_2(_p, [_k]);
              let _r = _fromContinuedFraction_1(_c);
              let _nextError = _abs_1(_hyphenMinus_2(_final, _r));
              /* Statements */
              _ifTrue_2(
                _lessThanSign_2(_nextError, _lastError),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  _add_2(_answer, _r);
                  return _lastError = _nextError;
                }, []),
              );
              return _ifTrue_2(
                _lessThanSign_2(_abs_1(_hyphenMinus_2(_final, _r)), _epsilon),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _return_1(_answer);
                }, []),
              );
            }, ["k"]),
          );
        }, ["each"]),
      );
      return _answer;
    }, ["return:/1"]));
  }, ["self", "epsilon"]),
  "{ :self :epsilon | let answer = []; let final = fromContinuedFraction(self); let lastError = final; valueWithReturn({ :return:/1 | prefixesDo(self, { :each | let z = last(each); let h = roundUp((/(z, 2))); let p = allButLast(each); toDo(h, z, { :k | let c = ++(p, [k]); let r = fromContinuedFraction(c); let nextError = abs((-(final, r))); ifTrue((<(nextError, lastError)), { add(answer,r); lastError := nextError }); ifTrue((<(abs((-(final, r))), epsilon)), { return(answer) }) }) }); answer }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "sequenceCount",
  ["self", "subsequence"],
  sl.annotateFunction(function (_self, _subsequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _subsequence";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_sequencePosition_2(_self, _subsequence));
  }, ["self", "subsequence"]),
  "{ :self :subsequence | size(sequencePosition(self,subsequence)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "sequencePosition",
  ["self", "subsequence"],
  sl.annotateFunction(function (_self, _subsequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _subsequence";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _hyphenMinus_2(_size_1(_subsequence), 1);
    /* Statements */
    return _collect_2(
      _indicesOfSubstring_2(_self, _subsequence),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return [_each, _plusSign_2(_each, _k)];
      }, ["each"]),
    );
  }, ["self", "subsequence"]),
  "{ :self :subsequence | let k = -(size(subsequence), 1); collect(indicesOfSubstring(self,subsequence), { :each | [each, +(each, k)] }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "sequenceReplace",
  ["list", "rules", "n"],
  sl.annotateFunction(function (_list, _rules, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _list, _rules, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _i = 1;
    let _j = 0;
    let _k = _size_1(_list);
    /* Statements */
    _rules = _nest_1(_rules);
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _lessThanSignEqualsSign_2(_i, _k),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(_j, _n);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _r = 1;
        let _m = false;
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _lessThanSignEqualsSign_2(_r, _size_1(_rules)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _not_1(_m);
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _u = _nest_1(_key_1(_at_2(_rules, _r)));
            let _e = _hyphenMinus_2(_plusSign_2(_i, _size_1(_u)), 1);
            /* Statements */
            return _if_3(
              _greaterThanSign_2(_e, _k),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _r = _plusSign_2(_r, 1);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _v = _sliceFromTo_3(_list, _i, _e);
                /* Statements */
                return _if_3(
                  _hasEqualElements_2(_u, _v),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Temporaries */
                    let _w = _nest_1(_value_1(_at_2(_rules, _r)));
                    /* Statements */
                    _addAll_2(_answer, _w);
                    _m = true;
                    _i = _plusSign_2(_i, _size_1(_u));
                    return _j = _plusSign_2(_j, 1);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _r = _plusSign_2(_r, 1);
                  }, []),
                );
              }, []),
            );
          }, []),
        );
        return _ifFalse_2(
          _m,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _add_2(_answer, _at_2(_list, _i));
            return _i = _plusSign_2(_i, 1);
          }, []),
        );
      }, []),
    );
    _ifTrue_2(
      _lessThanSign_2(_i, _k),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _addAll_2(_answer, _sliceFromTo_3(_list, _i, _k));
      }, []),
    );
    return _answer;
  }, ["list", "rules", "n"]),
  "{ :list :rules :n | let answer = []; let i = 1; let j = 0; let k = size(list); rules := nest(rules); whileTrue({ &(<=(i, k), { <(j, n) }) }, { let r = 1; let m = false; whileTrue({ &(<=(r, size(rules)), { not(m) }) }, { let u = nest(key(at(rules, r))); let e = -(+(i, size(u)), 1); if((>(e, k)), { r := +(r, 1) }, { let v = sliceFromTo(list,i, e); if(hasEqualElements(u,v), { let w = nest(value(at(rules, r))); addAll(answer,w); m := true; i := +(i, size(u)); j := +(j, 1) }, { r := +(r, 1) }) }) }); ifFalse(m, { add(answer,at(list, i)); i := +(i, 1) }) }); ifTrue((<(i, k)), { addAll(answer,sliceFromTo(list,i, k)) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "sequenceReplace",
  ["list", "rules"],
  sl.annotateFunction(function (_list, _rules) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _rules";
      throw new Error(errorMessage);
    } /* Statements */
    return _sequenceReplace_3(_list, _rules, Infinity);
  }, ["list", "rules"]),
  "{ :list :rules | sequenceReplace(list, rules, Infinity) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "shiftRegisterSequence",
  ["initialState", "taps", "count"],
  sl.annotateFunction(function (_initialState, _taps, _count) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _initialState, _taps, _count";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _register = _copy_1(_initialState);
    let _k = _size_1(_register);
    let _step_0 = sl.annotateFunction(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _bit = _percentSign_2(
        _reduce_2(
          _collect_2(
            _taps,
            sl.annotateFunction(function (_i) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _i";
                throw new Error(errorMessage);
              } /* Statements */
              return _at_2(_register, _hyphenMinus_2(_plusSign_2(_k, 1), _i));
            }, ["i"]),
          ),
          _plusSign_2,
        ),
        2,
      );
      /* Statements */
      _removeLast_1(_register);
      _addFirst_2(_register, _bit);
      return _bit;
    }, []);
    let _answer = [_first_1(_register)];
    /* Statements */
    _timesRepeat_2(
      _hyphenMinus_2(_count, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _step_0());
      }, []),
    );
    return _answer;
  }, ["initialState", "taps", "count"]),
  "{ :initialState :taps :count | let register = copy(initialState); let k = size(register); let step = { let bit = %(reduce(collect(taps, { :i | at(register, -(+(k, 1), i)) }),+), 2); removeLast(register); addFirst(register,bit); bit }; let answer = [first(register)]; timesRepeat((-(count, 1)), { add(answer,step()) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "suffixesDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _size = _size_1(_self);
    /* Statements */
    return _toDo_3(
      1,
      _size,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_copyFromTo_3(_self, _each, _size));
      }, ["each"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let size = size(self); toDo(1, size, { :each | aBlock(copyFromTo(self,each, size)) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "suffixes",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _suffixesDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _each);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = []; suffixesDo(self, { :each | add(answer,each) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "second",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, _plusSign_2(1, 1));
  }, ["self"]),
  "{ :self | at(self, +(1, 1)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "second",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _copyFromTo_3(_self, _plusSign_2(_n, 1), _asterisk_2(_n, 2));
  }, ["self", "n"]),
  "{ :self :n | copyFromTo(self,+(n, 1), *(n, 2)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "secondLast",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, _hyphenMinus_2(_size_1(_self), 1));
  }, ["self"]),
  "{ :self | at(self, -(size(self), 1)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "select",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _indicesDo_2(
      _self,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _aBlock_1(_at_2(_self, _index)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _at_2(_self, _index));
          }, []),
        );
      }, ["index"]),
    );
    return _newFrom_2(_species_1(_self), _answer);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let answer = []; indicesDo(self, { :index | ifTrue(aBlock(at(self, index)), { add(answer,at(self, index)) }) }); newFrom(species(self),answer) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "softMax",
  ["z", "beta"],
  sl.annotateFunction(function (_z, _beta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _z, _beta";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVector_1(_z),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _exp_1(_asterisk_2(_beta, _z));
        /* Statements */
        return _solidus_2(_a, _sum_1(_a));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _z,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _softMax_2(_each, _beta);
          }, ["each"]),
        );
      }, []),
    );
  }, ["z", "beta"]),
  "{ :z :beta | if(isVector(z), { let a = exp((*(beta, z))); /(a, sum(a)) }, { collect(z, { :each | softMax(each,beta) }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "softMax",
  ["z"],
  sl.annotateFunction(function (_z) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _softMax_2(_z, 1);
  }, ["z"]),
  "{ :z | softMax(z,1) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "split",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifEmpty_3(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = [];
        let _startIndex = 1;
        let _previous = _first_1(_self);
        /* Statements */
        _toDo_3(
          2,
          _size_1(_self),
          sl.annotateFunction(function (_index) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _index";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _next = _at_2(_self, _index);
            /* Statements */
            _ifFalse_2(
              _aBlock_2(_previous, _next),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _add_2(
                  _answer,
                  _copyFromTo_3(_self, _startIndex, _hyphenMinus_2(_index, 1)),
                );
                return _startIndex = _index;
              }, []),
            );
            return _previous = _next;
          }, ["index"]),
        );
        _add_2(_answer, _copyFromTo_3(_self, _startIndex, _size_1(_self)));
        return _answer;
      }, []),
    );
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | ifEmpty(self, { [] }, { let answer = []; let startIndex = 1; let previous = first(self); toDo(2, size(self), { :index | let next = at(self, index); ifFalse(aBlock(previous, next), { add(answer,copyFromTo(self,startIndex, -(index, 1))); startIndex := index }); previous := next }); add(answer,copyFromTo(self,startIndex, size(self))); answer }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "splitBy",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _splitByDo_3(
      _self,
      _aCollection,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _each);
      }, ["each"]),
    );
    return _answer;
  }, ["self", "aCollection"]),
  "{ :self :aCollection | let answer = []; splitByDo(self, aCollection, { :each | add(answer,each) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "splitByDo",
  ["self", "aCollection", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aCollection, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _lastIndex = 1;
    let _nextIndex = null;
    /* Statements */
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _nextIndex = _indexOfSubstringStartingAt_3(
          _self,
          _aCollection,
          _lastIndex,
        );
        return _equalsSign_2(_nextIndex, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _aBlock_1(
          _copyFromTo_3(_self, _lastIndex, _hyphenMinus_2(_nextIndex, 1)),
        );
        return _lastIndex = _plusSign_2(_nextIndex, _size_1(_aCollection));
      }, []),
    );
    return _aBlock_1(_copyFromTo_3(_self, _lastIndex, _size_1(_self)));
  }, ["self", "aCollection", "aBlock:/1"]),
  "{ :self :aCollection :aBlock:/1 | let lastIndex = 1; let nextIndex = nil; whileFalse({ nextIndex := indexOfSubstringStartingAt(self,aCollection, lastIndex); =(nextIndex, 0) }, { aBlock(copyFromTo(self,lastIndex, -(nextIndex, 1))); lastIndex := +(nextIndex, size(aCollection)) }); aBlock(copyFromTo(self,lastIndex, size(self))) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "subsequencesDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _k = _size_1(_self);
        /* Statements */
        return _powerSetDo_2(
          _asList_1(_upOrDownTo_2(1, _k)),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_1(_commercialAtAsterisk_2(_self, _each));
          }, ["each"]),
        );
      }, []),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | if(isEmpty(self), { [] }, { let k = size(self); powerSetDo(asList(upOrDownTo(1, k)), { :each | aBlock(@*(self, each)) }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "subsequences",
  ["self", "aPredicate:/1"],
  sl.annotateFunction(function (_self, _aPredicate_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPredicate_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _subsequencesDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _aPredicate_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _copy_1(_each));
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self", "aPredicate:/1"]),
  "{ :self :aPredicate:/1 | let answer = []; subsequencesDo(self, { :each | ifTrue(aPredicate(each), { add(answer,copy(each)) }) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "subsequences",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _subsequences_2(_self, _constant_1(true));
  }, ["self"]),
  "{ :self | subsequences(self,constant(true)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "subsetPosition",
  ["self", "sublist"],
  sl.annotateFunction(function (_self, _sublist) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sublist";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _collect_2(
      _sublist,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _indicesOf_2(_self, _each);
      }, ["each"]),
    );
    let _b = _collect_2(_i, _size_1);
    let _k = _asList_1(_upOrDownTo_2(0, _hyphenMinus_2(_product_1(_b), 1)));
    /* Statements */
    return _collect_2(
      _k,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _j = _plusSign_2(_mixedRadixEncode_2(_each, _b), 1);
        /* Statements */
        return _withCollect_3(_i, _j, _at_2);
      }, ["each"]),
    );
  }, ["self", "sublist"]),
  "{ :self :sublist | let i = collect(sublist, { :each | indicesOf(self,each) }); let b = collect(i,size:/1); let k = asList(upOrDownTo(0, -(product(b), 1))); collect(k, { :each | let j = +(mixedRadixEncode(each,b), 1); withCollect(i,j, at:/2) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "substringsDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _toDo_3(
      0,
      _size_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _partitionDo_4(_self, _each, 1, _aBlock_1);
      }, ["each"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | toDo(0, size(self), { :each | partitionDo(self,each, 1, aBlock:/1) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "substrings",
  ["self", "aPredicate:/1"],
  sl.annotateFunction(function (_self, _aPredicate_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPredicate_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _substringsDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _aPredicate_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _copy_1(_each));
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self", "aPredicate:/1"]),
  "{ :self :aPredicate:/1 | let answer = []; substringsDo(self, { :each | ifTrue(aPredicate(each), { add(answer,copy(each)) }) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "substrings",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _substrings_2(_self, _constant_1(true));
  }, ["self"]),
  "{ :self | substrings(self,constant(true)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "substringsInCommon",
  ["self", "aList", "k"],
  sl.annotateFunction(function (_self, _aList, _k) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aList, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _intersection_2(
      _partition_3(_self, _k, 1),
      _partition_3(_aList, _k, 1),
    );
  }, ["self", "aList", "k"]),
  "{ :self :aList :k | intersection(partition(self,k, 1),partition(aList,k, 1)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "swapAllWith",
  ["self", "indices"],
  sl.annotateFunction(function (_self, _indices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indices";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_2(_rank_1(_indices), [
      _hyphenMinusGreaterThanSign_2(
        2,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _do_2(
            _indices,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Temporaries */
              let __SplVar9 = _assertIsOfSize_2(_each, 2);
              let _i = _at_2(__SplVar9, 1);
              let _j = _at_2(__SplVar9, 2);
              let _x = _at_2(_self, _i);
              /* Statements */
              _atPut_3(_self, _i, _at_2(_self, _j));
              return _atPut_3(_self, _j, _x);
            }, ["each"]),
          );
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        3,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _do_2(
            _indices,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Temporaries */
              let __SplVar10 = _assertIsOfSize_2(_each, 2);
              let _i = _at_2(__SplVar10, 1);
              let _j = _at_2(__SplVar10, 2);
              let _x = _atPath_2(_self, _i);
              /* Statements */
              _atPathPut_3(_self, _i, _atPath_2(_self, _j));
              return _atPathPut_3(_self, _j, _x);
            }, ["each"]),
          );
        }, []),
      ),
    ]);
  }, ["self", "indices"]),
  "{ :self :indices | caseOf(rank(indices),[->(2, { do(indices, { :each | let __SplVar9 = assertIsOfSize(each, 2); let i = at(__SplVar9, 1); let j = at(__SplVar9, 2); let x = at(self, i); atPut(self, i, at(self, j)); atPut(self, j, x) }) }), ->(3, { do(indices, { :each | let __SplVar10 = assertIsOfSize(each, 2); let i = at(__SplVar10, 1); let j = at(__SplVar10, 2); let x = atPath(self,i); atPathPut(self,i, atPath(self,j)); atPathPut(self,j, x) }) })]) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "swapPathWith",
  ["self", "i", "j"],
  sl.annotateFunction(function (_self, _i, _j) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _i, _j";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _atPath_2(_self, _i);
    /* Statements */
    _atPathPut_3(_self, _i, _atPath_2(_self, _j));
    return _atPathPut_3(_self, _j, _x);
  }, ["self", "i", "j"]),
  "{ :self :i :j | let x = atPath(self,i); atPathPut(self,i, atPath(self,j)); atPathPut(self,j, x) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "swapWith",
  ["self", "i", "j"],
  sl.annotateFunction(function (_self, _i, _j) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _i, _j";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _at_2(_self, _i);
    /* Statements */
    _atPut_3(_self, _i, _at_2(_self, _j));
    return _atPut_3(_self, _j, _x);
  }, ["self", "i", "j"]),
  "{ :self :i :j | let x = at(self, i); atPut(self, i, at(self, j)); atPut(self, j, x) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "take",
  ["self", "count", "fill"],
  sl.annotateFunction(function (_self, _count, _fill) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _count, _fill";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_count, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _takeLast_3(_self, _negate_1(_count), _fill);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _takeFirst_3(_self, _count, _fill);
      }, []),
    );
  }, ["self", "count", "fill"]),
  "{ :self :count :fill | if((<(count, 0)), { takeLast(self,negate(count), fill) }, { takeFirst(self,count, fill) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "takeDrop",
  ["self", "count"],
  sl.annotateFunction(function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      throw new Error(errorMessage);
    } /* Statements */
    return [_take_2(_self, _count), _drop_2(_self, _count)];
  }, ["self", "count"]),
  "{ :self :count | [take(self,count), drop(self,count)] }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "takeFirst",
  ["self", "count", "fill"],
  sl.annotateFunction(function (_self, _count, _fill) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _count, _fill";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_count, _size_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSignPlusSign_2(
          _self,
          _numberSign_2(_fill, _hyphenMinus_2(_count, _size_1(_self))),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _copyFromTo_3(_self, 1, _count);
      }, []),
    );
  }, ["self", "count", "fill"]),
  "{ :self :count :fill | if((>(count, size(self))), { ++(self, (#(fill, (-(count, size(self)))))) }, { copyFromTo(self,1, count) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "takeLast",
  ["self", "count", "fill"],
  sl.annotateFunction(function (_self, _count, _fill) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _count, _fill";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_count, _size_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSignPlusSign_2(
          _numberSign_2(_fill, _hyphenMinus_2(_count, _size_1(_self))),
          _self,
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _copyFromTo_3(
          _self,
          _plusSign_2(_hyphenMinus_2(_size_1(_self), _count), 1),
          _size_1(_self),
        );
      }, []),
    );
  }, ["self", "count", "fill"]),
  "{ :self :count :fill | if((>(count, size(self))), { ++((#(fill, (-(count, size(self))))), self) }, { copyFromTo(self,+(-(size(self), count), 1), size(self)) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "takeList",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _startIndex = 1;
    /* Statements */
    _do_2(
      _aList,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _endIndex = _hyphenMinus_2(_plusSign_2(_startIndex, _each), 1);
        /* Statements */
        _add_2(_answer, _copyFromTo_3(_self, _startIndex, _endIndex));
        return _startIndex = _plusSign_2(_endIndex, 1);
      }, ["each"]),
    );
    return _answer;
  }, ["self", "aList"]),
  "{ :self :aList | let answer = []; let startIndex = 1; do(aList, { :each | let endIndex = -(+(startIndex, each), 1); add(answer,copyFromTo(self,startIndex, endIndex)); startIndex := +(endIndex, 1) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "takeWhile",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _detectIndexIfFoundIfNone_4(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _not_1(_aBlock_1(_each));
      }, ["each"]),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _copyFromTo_3(_self, 1, _hyphenMinus_2(_i, 1));
      }, ["i"]),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | detectIndexIfFoundIfNone(self, { :each | not(aBlock(each)) }, { :i | copyFromTo(self,1, -(i, 1)) }, { self }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "third",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, 3);
  }, ["self"]),
  "{ :self | at(self, 3) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "third",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _copyFromTo_3(
      _self,
      _plusSign_2(_asterisk_2(_n, 2), 1),
      _asterisk_2(_n, 3),
    );
  }, ["self", "n"]),
  "{ :self :n | copyFromTo(self,+(*(n, 2), 1), *(n, 3)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "thirdLast",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, _hyphenMinus_2(_size_1(_self), 2));
  }, ["self"]),
  "{ :self | at(self, -(size(self), 2)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "transpose",
  ["self", "permutation"],
  sl.annotateFunction(function (_self, _permutation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _permutation";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isPermutationList_1(_permutation),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _fromShape = _shape_1(_self);
        let _toShape = _commercialAtAsterisk_2(_fromShape, _permutation);
        let _inverse = _list_2(
          _inversePermutation_1(_permutation),
          _size_1(_permutation),
        );
        /* Statements */
        return _fill_2(
          _toShape,
          sl.annotateFunction(function (_toIndex) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _toIndex";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _fromIndex = _commercialAtAsterisk_2(_toIndex, _inverse);
            /* Statements */
            return _commercialAtGreaterThanSign_2(_self, _fromIndex);
          }, ["toIndex"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Sequenceable>>transpose: not permutation");
      }, []),
    );
  }, ["self", "permutation"]),
  "{ :self :permutation | if(isPermutationList(permutation), { let fromShape = shape(self); let toShape = @*(fromShape, permutation); let inverse = list(inversePermutation(permutation),size(permutation)); fill(toShape, { :toIndex | let fromIndex = @*(toIndex, inverse); @>(self, fromIndex) }) }, { error(self,'@Sequenceable>>transpose: not permutation') }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "transpose",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar11 = _assertIsOfSize_2(_dimensions_2(_self, 2), 2);
    let _m = _at_2(__SplVar11, 1);
    let _n = _at_2(__SplVar11, 2);
    /* Statements */
    return _toAsCollect_4(
      1,
      _n,
      _species_1(_at_2(_self, 1)),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _self,
          sl.annotateFunction(function (_row) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _row";
              throw new Error(errorMessage);
            } /* Statements */
            return _at_2(_row, _index);
          }, ["row"]),
        );
      }, ["index"]),
    );
  }, ["self"]),
  "{ :self | let __SplVar11 = assertIsOfSize(dimensions(self,2), 2); let m = at(__SplVar11, 1); let n = at(__SplVar11, 2); toAsCollect(1, n, species(at(self, 1)), { :index | collect(self, { :row | at(row, index) }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "transposeIrregular",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _max_1(_collect_2(_self, _size_1));
    /* Statements */
    return _toAsCollect_4(
      1,
      _n,
      _species_1(_first_1(_self)),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _self,
          sl.annotateFunction(function (_row) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _row";
              throw new Error(errorMessage);
            } /* Statements */
            return _atWrap_2(_row, _index);
          }, ["row"]),
        );
      }, ["index"]),
    );
  }, ["self"]),
  "{ :self | let n = max(collect(self,size:/1)); toAsCollect(1, n, species(first(self)), { :index | collect(self, { :row | atWrap(row,index) }) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "tuplesCollect",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _tuplesDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _aBlock_1(_each));
      }, ["each"]),
    );
    return _answer;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let answer = []; tuplesDo(self, { :each | add(answer,aBlock(each)) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "tuplesDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _tupleCount = _product_1(_collect_2(_self, _size_1));
    let _tuple = _new_2(_species_1(_self), _size_1(_self));
    /* Statements */
    return _toDo_3(
      1,
      _tupleCount,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _k = _hyphenMinus_2(_i, 1);
        /* Statements */
        _toByDo_4(
          _size_1(_self),
          1,
          -1,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _fromSequence = _at_2(_self, _j);
            /* Statements */
            _atPut_3(
              _tuple,
              _j,
              _at_2(
                _fromSequence,
                _plusSign_2(_percentSign_2(_k, _size_1(_fromSequence)), 1),
              ),
            );
            return _k = _solidusSolidus_2(_k, _size_1(_fromSequence));
          }, ["j"]),
        );
        return _aBlock_1(_tuple);
      }, ["i"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let tupleCount = product(collect(self,size:/1)); let tuple = new(species(self),size(self)); toDo(1, tupleCount, { :i | let k = -(i, 1); toByDo(size(self), 1, -1, { :j | let fromSequence = at(self, j); atPut(tuple, j, at(fromSequence, +(%(k, size(fromSequence)), 1))); k := //(k, size(fromSequence)) }); aBlock(tuple) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "tuples",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _tuplesCollect_2(_self, _copy_1);
  }, ["self"]),
  "{ :self | tuplesCollect(self,copy:/1) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "tuples",
  ["self", "count"],
  sl.annotateFunction(function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      throw new Error(errorMessage);
    } /* Statements */
    return _tuples_1(_exclamationMark_2(_self, _count));
  }, ["self", "count"]),
  "{ :self :count | tuples((!(self, count))) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "tuplesArray",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _shape = _plusSignPlusSign_2(_collect_2(_self, _size_1), [
      _size_1(_self),
    ]);
    /* Statements */
    return _reshape_2(_tuples_1(_self), _shape);
  }, ["self"]),
  "{ :self | let shape = ++(collect(self,size:/1), [size(self)]); reshape(tuples(self),shape) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "uniqueElements",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _uniqueElements_2(_self, _equalsSign_2);
  }, ["self"]),
  "{ :self | uniqueElements(self,=) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "uniqueElements",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _withIndexCollect_2(
      _self,
      sl.annotateFunction(function (_p, _i) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _p, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _seen = [];
        /* Statements */
        _withIndexDo_2(
          _self,
          sl.annotateFunction(function (_q, _j) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _q, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _exclamationMarkEqualsSign_2(_i, _j),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _do_2(
                  _q,
                  sl.annotateFunction(function (_each) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _each";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _ifFalse_2(
                      _includesBy_3(_seen, _each, _aBlock_2),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _add_2(_seen, _each);
                      }, []),
                    );
                  }, ["each"]),
                );
              }, []),
            );
          }, ["q", "j"]),
        );
        return _nubBy_2(_difference_2(_p, _seen), _aBlock_2);
      }, ["p", "i"]),
    );
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | withIndexCollect(self, { :p :i | let seen = []; withIndexDo(self, { :q :j | ifTrue((!=(i, j)), { do(q, { :each | ifFalse(includesBy(seen,each, aBlock:/2), { add(seen,each) }) }) }) }); nubBy(difference(p,seen),aBlock:/2) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "unique",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sort_1(_nub_1(_self));
  }, ["self"]),
  "{ :self | sort(nub(self)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "vectorTripleProduct",
  ["a", "b", "c"],
  sl.annotateFunction(function (_a, _b, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return _cross_2(_a, _cross_2(_b, _c));
  }, ["a", "b", "c"]),
  "{ :a :b :c | cross(a,cross(b,c)) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "which",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(
        _self,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _blockValue_1(_key_1(_each)),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_blockValue_1(_value_1(_each)));
            }, []),
          );
        }, ["each"]),
      );
      return null;
    }, ["return:/1"]));
  }, ["self"]),
  "{ :self | valueWithReturn({ :return:/1 | do(self, { :each | ifTrue(blockValue(key(each)), { return(blockValue(value(each))) }) }); nil }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "withCollect",
  ["self", "aList", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aList, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aList, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _withCollectWrapping_3(_self, _aList, _aBlock_2);
  }, ["self", "aList", "aBlock:/2"]),
  "{ :self :aList :aBlock:/2 | withCollectWrapping(self,aList, aBlock:/2) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "withCollectCrossed",
  ["self", "aList", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aList, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aList, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _new_2(
      _species_1(_self),
      _asterisk_2(_size_1(_self), _size_1(_aList)),
    );
    let _nextIndex = 1;
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_leftItem) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _leftItem";
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(
          _aList,
          sl.annotateFunction(function (_rightItem) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _rightItem";
              throw new Error(errorMessage);
            } /* Statements */
            _atPut_3(_answer, _nextIndex, _aBlock_2(_leftItem, _rightItem));
            return _nextIndex = _plusSign_2(_nextIndex, 1);
          }, ["rightItem"]),
        );
      }, ["leftItem"]),
    );
    return _answer;
  }, ["self", "aList", "aBlock:/2"]),
  "{ :self :aList :aBlock:/2 | let answer = new(species(self),*(size(self), size(aList))); let nextIndex = 1; do(self, { :leftItem | do(aList, { :rightItem | atPut(answer, nextIndex, aBlock(leftItem, rightItem)); nextIndex := +(nextIndex, 1) }) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "withCollectEqual",
  ["self", "aList", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aList, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aList, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    _isOfSameSizeCheck_2(_self, _aList);
    return _toAsCollect_4(
      1,
      _size_1(_self),
      _species_1(_self),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_at_2(_self, _index), _at_2(_aList, _index));
      }, ["index"]),
    );
  }, ["self", "aList", "aBlock:/2"]),
  "{ :self :aList :aBlock:/2 | isOfSameSizeCheck(self,aList); toAsCollect(1, size(self), species(self), { :index | aBlock(at(self, index), at(aList, index)) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "withCollectFolding",
  ["self", "aCollection", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aCollection, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _maximumSize = _max_2(_size_1(_self), _size_1(_aCollection));
    /* Statements */
    return _toAsCollect_4(
      1,
      _maximumSize,
      _species_1(_self),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(
          _atFold_2(_self, _index),
          _atFold_2(_aCollection, _index),
        );
      }, ["index"]),
    );
  }, ["self", "aCollection", "aBlock:/2"]),
  "{ :self :aCollection :aBlock:/2 | let maximumSize = max(size(self),size(aCollection)); toAsCollect(1, maximumSize, species(self), { :index | aBlock(atFold(self,index), atFold(aCollection,index)) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "withCollectOrAdaptTo",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersand_2(
        _isCollection_1(_anObject),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isSequenceable_1(_anObject);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _withCollect_3(_self, _anObject, _aBlock_2);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToCollectionAndApply_3(_anObject, _self, _aBlock_2);
      }, []),
    );
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 | if((&(isCollection(anObject), { isSequenceable(anObject) })), { withCollect(self,anObject, aBlock:/2) }, { adaptToCollectionAndApply(anObject,self, aBlock:/2) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "withCollectOuter",
  ["self", "aList", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aList, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aList, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _outer_3(_aBlock_2, _self, _aList);
  }, ["self", "aList", "aBlock:/2"]),
  "{ :self :aList :aBlock:/2 | outer(aBlock:/2,self, aList) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "withCollectTable",
  ["self", "aList", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aList, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aList, _aBlock_2";
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
        return _aBlock_2(_each, _aList);
      }, ["each"]),
    );
  }, ["self", "aList", "aBlock:/2"]),
  "{ :self :aList :aBlock:/2 | collect(self, { :each | aBlock(each, aList) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "withCollectTruncating",
  ["self", "aList", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aList, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aList, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_size_1(_self), _size_1(_aList)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _withCollect_3(
          _self,
          _take_2(_aList, _size_1(_self)),
          _aBlock_2,
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _withCollect_3(
          _take_2(_self, _size_1(_aList)),
          _aList,
          _aBlock_2,
        );
      }, []),
    );
  }, ["self", "aList", "aBlock:/2"]),
  "{ :self :aList :aBlock:/2 | if((<(size(self), size(aList))), { withCollect(self,take(aList,size(self)), aBlock:/2) }, { withCollect(take(self,size(aList)),aList, aBlock:/2) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "withCollectWrapping",
  ["self", "aList", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aList, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aList, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _maximumSize = _max_2(_size_1(_self), _size_1(_aList));
    /* Statements */
    return _toAsCollect_4(
      1,
      _maximumSize,
      _species_1(_self),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_atWrap_2(_self, _index), _atWrap_2(_aList, _index));
      }, ["index"]),
    );
  }, ["self", "aList", "aBlock:/2"]),
  "{ :self :aList :aBlock:/2 | let maximumSize = max(size(self),size(aList)); toAsCollect(1, maximumSize, species(self), { :index | aBlock(atWrap(self,index), atWrap(aList,index)) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "withDo",
  ["self", "otherCollection", "twoArgBlock:/2"],
  sl.annotateFunction(function (_self, _otherCollection, _twoArgBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _otherCollection, _twoArgBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    _isOfSameSizeCheck_2(_self, _otherCollection);
    return _indicesDo_2(
      _self,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _twoArgBlock_2(
          _at_2(_self, _index),
          _at_2(_otherCollection, _index),
        );
      }, ["index"]),
    );
  }, ["self", "otherCollection", "twoArgBlock:/2"]),
  "{ :self :otherCollection :twoArgBlock:/2 | isOfSameSizeCheck(self,otherCollection); indicesDo(self, { :index | twoArgBlock(at(self, index), at(otherCollection, index)) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "withReplace",
  ["self", "otherCollection", "aBlock:/2"],
  sl.annotateFunction(function (_self, _otherCollection, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _otherCollection, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    _isOfSameSizeCheck_2(_self, _otherCollection);
    return _indicesDo_2(
      _self,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _self,
          _index,
          _aBlock_2(_at_2(_self, _index), _at_2(_otherCollection, _index)),
        );
      }, ["index"]),
    );
  }, ["self", "otherCollection", "aBlock:/2"]),
  "{ :self :otherCollection :aBlock:/2 | isOfSameSizeCheck(self,otherCollection); indicesDo(self, { :index | atPut(self, index, aBlock(at(self, index), at(otherCollection, index))) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "withIndexCollect",
  ["self", "elementAndIndexBlock:/2"],
  sl.annotateFunction(function (_self, _elementAndIndexBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elementAndIndexBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _ofSize_2(_species_1(_self), _size_1(_self));
    /* Statements */
    _indicesDo_2(
      _self,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _answer,
          _index,
          _elementAndIndexBlock_2(_at_2(_self, _index), _index),
        );
      }, ["index"]),
    );
    return _answer;
  }, ["self", "elementAndIndexBlock:/2"]),
  "{ :self :elementAndIndexBlock:/2 | let answer = ofSize(species(self),size(self)); indicesDo(self, { :index | atPut(answer, index, elementAndIndexBlock(at(self, index), index)) }); answer }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "withIndexDo",
  ["self", "elementAndIndexBlock:/2"],
  sl.annotateFunction(function (_self, _elementAndIndexBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elementAndIndexBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _indicesDo_2(
      _self,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _elementAndIndexBlock_2(_at_2(_self, _index), _index);
      }, ["index"]),
    );
  }, ["self", "elementAndIndexBlock:/2"]),
  "{ :self :elementAndIndexBlock:/2 | indicesDo(self, { :index | elementAndIndexBlock(at(self, index), index) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "withoutTrailing",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _greaterThanSignEqualsSign_2(_n, 2),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_1(_at_2(_self, _n));
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _n = _hyphenMinus_2(_n, 1);
      }, []),
    );
    return _if_3(
      _equalsSign_2(_n, _size_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _copyFromTo_3(_self, 1, _n);
      }, []),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let n = size(self); whileTrue({ &(>=(n, 2), { aBlock(at(self, n)) }) }, { n := -(n, 1) }); if((=(n, size(self))), { self }, { copyFromTo(self,1, n) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "withoutTrailingZeros",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _withoutTrailing_2(_self, _isZero_1);
  }, ["self"]),
  "{ :self | withoutTrailing(self,isZero:/1) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "withIndexReplace",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _indicesDo_2(
      _self,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_self, _index, _aBlock_2(_at_2(_self, _index), _index));
      }, ["index"]),
    );
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | indicesDo(self, { :index | atPut(self, index, aBlock(at(self, index), index)) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "withWithCollect",
  ["self", "aList", "anotherList", "aBlock:/3"],
  sl.annotateFunction(function (_self, _aList, _anotherList, _aBlock_3) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _aList, _anotherList, _aBlock_3";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _maximumSize = _max_1(
      _collect_2([_self, _aList, _anotherList], _size_1),
    );
    /* Statements */
    return _toAsCollect_4(
      1,
      _maximumSize,
      _species_1(_self),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_3(
          _atWrap_2(_self, _index),
          _atWrap_2(_aList, _index),
          _atWrap_2(_anotherList, _index),
        );
      }, ["index"]),
    );
  }, ["self", "aList", "anotherList", "aBlock:/3"]),
  "{ :self :aList :anotherList :aBlock:/3 | let maximumSize = max(collect([self, aList, anotherList],size:/1)); toAsCollect(1, maximumSize, species(self), { :index | aBlock(atWrap(self,index), atWrap(aList,index), atWrap(anotherList,index)) }) }",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "withWithDo",
  ["self", "aList", "anotherList", "aBlock:/3"],
  sl.annotateFunction(function (_self, _aList, _anotherList, _aBlock_3) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _aList, _anotherList, _aBlock_3";
      throw new Error(errorMessage);
    } /* Statements */
    _isOfSameSizeCheck_2(_self, _aList);
    _isOfSameSizeCheck_2(_self, _anotherList);
    return _indicesDo_2(
      _self,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_3(
          _at_2(_self, _index),
          _at_2(_aList, _index),
          _at_2(_anotherList, _index),
        );
      }, ["index"]),
    );
  }, ["self", "aList", "anotherList", "aBlock:/3"]),
  "{ :self :aList :anotherList :aBlock:/3 | isOfSameSizeCheck(self,aList); isOfSameSizeCheck(self,anotherList); indicesDo(self, { :index | aBlock(at(self, index), at(aList, index), at(anotherList, index)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sequenceable",
  "applyBinaryMathOperatorInPlace",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNumber_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _replace_2(
          _self,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_2(_each, _anObject);
          }, ["each"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _withReplace_3(_self, _anObject, _aBlock_2);
      }, []),
    );
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 | if(isNumber(anObject), { replace(self, { :each | aBlock(each, anObject) }) }, { withReplace(self,anObject, aBlock:/2) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sequenceable",
  "plusSignEqualsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyBinaryMathOperatorInPlace_3(_self, _anObject, _plusSign_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | applyBinaryMathOperatorInPlace(self, anObject, +) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sequenceable",
  "hyphenMinusEqualsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyBinaryMathOperatorInPlace_3(_self, _anObject, _hyphenMinus_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | applyBinaryMathOperatorInPlace(self, anObject, -) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sequenceable",
  "asteriskEqualsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyBinaryMathOperatorInPlace_3(_self, _anObject, _asterisk_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | applyBinaryMathOperatorInPlace(self, anObject, *) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Sequenceable",
  "solidusEqualsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyBinaryMathOperatorInPlace_3(_self, _anObject, _solidus_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | applyBinaryMathOperatorInPlace(self, anObject, /) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Sequenceable",
  "binaryDetectIndex",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _low = 1;
      let _high = _self;
      /* Statements */
      _whileTrue_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSignEqualsSign_2(_low, _high);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _mid = _solidusSolidus_2(_plusSign_2(_low, _high), 2);
          /* Statements */
          return _if_3(
            _aBlock_1(_mid),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _high = _hyphenMinus_2(_mid, 1);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _low = _plusSign_2(_mid, 1);
            }, []),
          );
        }, []),
      );
      return _low;
    }, ["return:/1"]));
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | valueWithReturn({ :return:/1 | let low = 1; let high = self; whileTrue({ <=(low, high) }, { let mid = //((+(low, high)), 2); if(aBlock(mid), { high := -(mid, 1) }, { low := +(mid, 1) }) }); low }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Sequenceable",
  "partIndex",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _atSymmetrical_2(_operand, _self);
  }, ["self", "operand"]),
  "{ :self :operand | atSymmetrical(operand,self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Sequenceable",
  "toAsCollect",
  ["self", "stop", "species", "aBlock:/1"],
  sl.annotateFunction(function (_self, _stop, _species, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _stop, _species, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answerSize = _plusSign_2(_hyphenMinus_2(_stop, _self), 1);
    let _answer = _ofSize_2(_species, _answerSize);
    /* Statements */
    _toDo_3(
      1,
      _answerSize,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _answer,
          _index,
          _aBlock_1(_hyphenMinus_2(_plusSign_2(_index, _self), 1)),
        );
      }, ["index"]),
    );
    return _answer;
  }, ["self", "stop", "species", "aBlock:/1"]),
  "{ :self :stop :species :aBlock:/1 | let answerSize = +(-(stop, self), 1); let answer = ofSize(species,answerSize); toDo(1, answerSize, { :index | atPut(answer, index, aBlock(-(+(index, self), 1))) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Sequenceable",
  "tuplesIndicesDo",
  ["k", "n", "f:/1"],
  sl.annotateFunction(function (_k, _n, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _k, _n, _f_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _tuplesDo_2(
      _exclamationMark_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asList_1(_upOrDownTo_2(1, _k));
        }, []),
        _n,
      ),
      _f_1,
    );
  }, ["k", "n", "f:/1"]),
  "{ :k :n :f:/1 | tuplesDo((!({ asList(upOrDownTo(1, k)) }, n)),f:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sequenceable",
  "chunksOfFrom",
  ["self", "chunkSize", "startingAt"],
  sl.annotateFunction(function (_self, _chunkSize, _startingAt) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _chunkSize, _startingAt";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _chunkCount = _ceiling_1(
      _solidus_2(
        _plusSign_2(_hyphenMinus_2(_size_1(_self), _startingAt), 1),
        _chunkSize,
      ),
    );
    /* Statements */
    return _collect_2(
      _to_2(0, _hyphenMinus_2(_chunkCount, 1)),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _startIndex = _plusSign_2(_asterisk_2(_i, _chunkSize), _startingAt);
        let _stopIndex = _min_2(
          _hyphenMinus_2(_plusSign_2(_startIndex, _chunkSize), 1),
          _size_1(_self),
        );
        /* Statements */
        return _copyFromTo_3(_self, _startIndex, _stopIndex);
      }, ["i"]),
    );
  }, ["self", "chunkSize", "startingAt"]),
  "{ :self :chunkSize :startingAt | let chunkCount = ceiling((/(+(-(size(self), startingAt), 1), chunkSize))); collect(to(0,-(chunkCount, 1)), { :i | let startIndex = +(*(i, chunkSize), startingAt); let stopIndex = min((-(+(startIndex, chunkSize), 1)),size(self)); copyFromTo(self,startIndex, stopIndex) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Sequenceable",
  "chunksOfFrom",
  ["self", "chunkSize", "startingAt"],
  sl.annotateFunction(function (_self, _chunkSize, _startingAt) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _chunkSize, _startingAt";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _chunkCount = _ceiling_1(
      _solidus_2(
        _plusSign_2(_hyphenMinus_2(_size_1(_self), _startingAt), 1),
        _chunkSize,
      ),
    );
    /* Statements */
    return _collect_2(
      _to_2(0, _hyphenMinus_2(_chunkCount, 1)),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _startIndex = _plusSign_2(_asterisk_2(_i, _chunkSize), _startingAt);
        let _stopIndex = _min_2(
          _hyphenMinus_2(_plusSign_2(_startIndex, _chunkSize), 1),
          _size_1(_self),
        );
        /* Statements */
        return _copyFromTo_3(_self, _startIndex, _stopIndex);
      }, ["i"]),
    );
  }, ["self", "chunkSize", "startingAt"]),
  "{ :self :chunkSize :startingAt | let chunkCount = ceiling((/(+(-(size(self), startingAt), 1), chunkSize))); collect(to(0,-(chunkCount, 1)), { :i | let startIndex = +(*(i, chunkSize), startingAt); let stopIndex = min((-(+(startIndex, chunkSize), 1)),size(self)); copyFromTo(self,startIndex, stopIndex) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sequenceable",
  "chunksOf",
  ["self", "chunkSize"],
  sl.annotateFunction(function (_self, _chunkSize) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _chunkSize";
      throw new Error(errorMessage);
    } /* Statements */
    return _chunksOfFrom_3(_self, _chunkSize, 1);
  }, ["self", "chunkSize"]),
  "{ :self :chunkSize | chunksOfFrom(self,chunkSize, 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Sequenceable",
  "chunksOf",
  ["self", "chunkSize"],
  sl.annotateFunction(function (_self, _chunkSize) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _chunkSize";
      throw new Error(errorMessage);
    } /* Statements */
    return _chunksOfFrom_3(_self, _chunkSize, 1);
  }, ["self", "chunkSize"]),
  "{ :self :chunkSize | chunksOfFrom(self,chunkSize, 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Sequenceable",
  "isSequenceable",
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
