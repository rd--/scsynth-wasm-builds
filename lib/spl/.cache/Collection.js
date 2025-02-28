sl.addTrait("Collection", "Collection");

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "numberSign",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_self);
  },
  "{ :self | size(self) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "plusSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bindRight_2(_plusSign_2, _anObject));
  },
  "{ :self :anObject | collect(self,bindRight(+,anObject)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "hyphenMinus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bindRight_2(_hyphenMinus_2, _anObject));
  },
  "{ :self :anObject | collect(self,bindRight(-,anObject)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "asterisk",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bindRight_2(_asterisk_2, _anObject));
  },
  "{ :self :anObject | collect(self,bindRight(*,anObject)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "solidus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bindRight_2(_solidus_2, _anObject));
  },
  "{ :self :anObject | collect(self,bindRight(/,anObject)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "circumflexAccent",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bindRight_2(_circumflexAccent_2, _anObject));
  },
  "{ :self :anObject | collect(self,bindRight(^,anObject)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "percentSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bindRight_2(_percentSign_2, _anObject));
  },
  "{ :self :anObject | collect(self,bindRight(%,anObject)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "reverseSolidus",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _difference_2(_self, _aCollection);
  },
  "{ :self :aCollection | difference(self,aCollection) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "plusSignPlusSign",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _copy_1(_self);
    /* Statements */
    _addAll_2(_answer, _assertIsCollection_1(_aCollection));
    return _answer;
  },
  "{ :self :aCollection | let answer = copy(self); addAll(answer,assertIsCollection(aCollection)); answer }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "adaptToNumberAndApply",
  ["self", "aNumber", "aBlock:/2"],
  function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_2(_aNumber, _each);
    });
  },
  "{ :self :aNumber :aBlock:/2 | collect(self, { :each | aBlock(aNumber, each) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "allEqualBy",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return true;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _item = _anyOne_1(_self);
      /* Statements */
      return _allSatisfy_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_each, _item);
      });
    });
  },
  "{ :self :aBlock:/2 | if(isEmpty(self), { true }, { let item = anyOne(self); allSatisfy(self, { :each | aBlock(each, item) }) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "allEqual",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allEqualBy_2(_self, _equalsSign_2);
  },
  "{ :self | allEqualBy(self,=) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "any",
  ["self", "numberOfElements"],
  function (_self, _numberOfElements) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _numberOfElements";
      throw new Error(errorMessage);
    } /* Statements */
    return _anyAs_3(_self, _numberOfElements, _species_1(_self));
  },
  "{ :self :numberOfElements | anyAs(self,numberOfElements, species(self)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "anyAs",
  ["self", "numberOfElements", "aBlock:/1"],
  function (_self, _numberOfElements, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _numberOfElements, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = 0;
    let _result = _aBlock_1(_numberOfElements);
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _fillFromWith_3(_result, _self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _index = _plusSign_2(_index, 1);
        return _if_3(
          _greaterThanSign_2(_index, _numberOfElements),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _return_1(_result);
          },
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _each;
          },
        );
      });
      _ifFalse_2(_equalsSign_2(_index, _numberOfElements), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "@Collection>>any: Not enough elements in collection",
        );
      });
      return _result;
    });
  },
  "{ :self :numberOfElements :aBlock:/1 | let index = 0; let result = aBlock(numberOfElements); valueWithReturn({ :return:/1 | fillFromWith(result, self, { :each | index := +(index, 1); if((>(index, numberOfElements)), { return(result) }, { each }) }); ifFalse((=(index, numberOfElements)), { error(self,'@Collection>>any: Not enough elements in collection') }); result }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "arithmeticMean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_sum_1(_self), _size_1(_self));
  },
  "{ :self | /(sum(self), size(self)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _array = _List_1(_size_1(_self));
    let _index = 0;
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      _index = _plusSign_2(_index, 1);
      return _atPut_3(_array, _index, _each);
    });
    return _array;
  },
  "{ :self | let array = List(size(self)); let index = 0; do(self, { :each | index := +(index, 1); atPut(array, index, each) }); array }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "asCollection",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "assertIsCollection",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "associationsDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_self, _aBlock_1);
  },
  "{ :self :aBlock:/1 | do(self,aBlock:/1) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "atLevelCollect",
  ["self", "level", "aBlock:/1"],
  function (_self, _level, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _level, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _levelPredicate_1 = _if_3(_isCollection_1(_level), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return (function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _includes_2(_level, _each);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return (function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_each, _level);
      });
    });
    /* Statements */
    return _withLevelCollect_2(_self, function (_each, _thisLevel) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _thisLevel";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_levelPredicate_1(_thisLevel), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_each);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _each;
      });
    });
  },
  "{ :self :level :aBlock:/1 | let levelPredicate:/1 = if(isCollection(level), { { :each | includes(level,each) } }, { { :each | =(each, level) } }); withLevelCollect(self, { :each :thisLevel | if(levelPredicate(thisLevel), { aBlock(each) }, { each }) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "atRandom",
  ["self", "shape", "r"],
  function (_self, _shape, _r) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _shape, _r";
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _randomIndex = _randomInteger_4(_r, 1, _size_1(_self), []);
      let _index = 1;
      /* Statements */
      return _valueWithReturn_1(function (_return_1) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _return_1";
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(_self, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          _ifTrue_2(_equalsSign_2(_index, _randomIndex), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _return_1(_each);
          });
          return _index = _plusSign_2(_index, 1);
        });
      });
    }, _shape);
  },
  "{ :self :shape :r | !({ let randomIndex = randomInteger(r,1, size(self), []); let index = 1; valueWithReturn({ :return:/1 | do(self, { :each | ifTrue((=(index, randomIndex)), { return(each) }); index := +(index, 1) }) }) }, shape) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "atRandom",
  ["self", "shape"],
  function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _atRandom_3(_self, _shape, _system);
  },
  "{ :self :shape | atRandom(self,shape, system) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "atRandom",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atRandom_3(_self, [], _system);
  },
  "{ :self | atRandom(self,[], system) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "average",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _mean_1(_self);
  },
  "{ :self | mean(self) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "binCounts",
  ["self", "b"],
  function (_self, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_binLists_2(_self, _b), _size_1);
  },
  "{ :self :b | collect(binLists(self,b),size:/1) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "binCounts",
  ["self", "b1", "b2"],
  function (_self, _b1, _b2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _b1, _b2";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_binLists_3(_self, _b1, _b2), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_each, _size_1);
    });
  },
  "{ :self :b1 :b2 | collect(binLists(self,b1, b2), { :each | collect(each,size:/1) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "binListsFor",
  ["self", "b"],
  function (_self, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_b);
    let _c = _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return [];
    }, _hyphenMinus_2(_n, 1));
    /* Statements */
    _do_2(_self, function (_e) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _e";
        throw new Error(errorMessage);
      } /* Statements */
      return _ifTrue_2(
        _ampersand_2(
          _greaterThanSignEqualsSign_2(_e, _at_2(_b, 1)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_e, _at_2(_b, _n));
          },
        ),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _i = _min_2(
            _binarySearchLeftmost_2(_b, _e),
            _hyphenMinus_2(_n, 1),
          );
          /* Statements */
          return _add_2(_at_2(_c, _i), _e);
        },
      );
    });
    return _c;
  },
  "{ :self :b | let n = size(b); let c = !({ [] }, (-(n, 1))); do(self, { :e | ifTrue((&(>=(e, at(b, 1)), { <=(e, at(b, n)) })), { let i = min(binarySearchLeftmost(b,e),-(n, 1)); add(at(c, i),e) }) }); c }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "binListsFor",
  ["self", "b1", "b2"],
  function (_self, _b1, _b2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _b1, _b2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL1 = _assertIsOfSize_2([_size_1(_b1), _size_1(_b2)], 2);
    let _m = _at_2(__SPL1, 1);
    let _n = _at_2(__SPL1, 2);
    let _c = _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return [];
    }, [_hyphenMinus_2(_m, 1), _hyphenMinus_2(_n, 1)]);
    /* Statements */
    _do_2(_self, function (_e) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _e";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SPL2 = _assertIsOfSize_2(_e, 2);
      let _e1 = _at_2(__SPL2, 1);
      let _e2 = _at_2(__SPL2, 2);
      /* Statements */
      return _ifTrue_2(
        _ampersand_2(
          _greaterThanSignEqualsSign_2(_e1, _at_2(_b1, 1)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _lessThanSignEqualsSign_2(_e1, _at_2(_b1, _m)),
              function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ampersand_2(
                  _greaterThanSignEqualsSign_2(_e2, _at_2(_b2, 1)),
                  function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _lessThanSignEqualsSign_2(_e2, _at_2(_b2, _n));
                  },
                );
              },
            );
          },
        ),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _i = _min_2(
            _binarySearchLeftmost_2(_b1, _e1),
            _hyphenMinus_2(_m, 1),
          );
          let _j = _min_2(
            _binarySearchLeftmost_2(_b2, _e2),
            _hyphenMinus_2(_n, 1),
          );
          /* Statements */
          return _add_2(_at_2(_at_2(_c, _i), _j), _e);
        },
      );
    });
    return _c;
  },
  "{ :self :b1 :b2 | let __SPL1 = assertIsOfSize([size(b1), size(b2)], 2); let m = at(__SPL1, 1); let n = at(__SPL1, 2); let c = !({ [] }, [-(m, 1), -(n, 1)]); do(self, { :e | let __SPL2 = assertIsOfSize(e, 2); let e1 = at(__SPL2, 1); let e2 = at(__SPL2, 2); ifTrue((&(>=(e1, at(b1, 1)), { &(<=(e1, at(b1, m)), { &(>=(e2, at(b2, 1)), { <=(e2, at(b2, n)) }) }) })), { let i = min(binarySearchLeftmost(b1,e1),-(m, 1)); let j = min(binarySearchLeftmost(b2,e2),-(n, 1)); add(at(at(c, i), j),e) }) }); c }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "binLists",
  ["self", "b"],
  function (_self, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL3 = _assertIsOfSize_2(_b, 3);
    let _start = _at_2(__SPL3, 1);
    let _stop = _at_2(__SPL3, 2);
    let _step = _at_2(__SPL3, 3);
    /* Statements */
    return _binListsFor_2(_self, _asList_1(_Range_3(_start, _stop, _step)));
  },
  "{ :self :b | let __SPL3 = assertIsOfSize(b, 3); let start = at(__SPL3, 1); let stop = at(__SPL3, 2); let step = at(__SPL3, 3); binListsFor(self,asList(Range(start, stop, step))) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "binLists",
  ["self", "b1", "b2"],
  function (_self, _b1, _b2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _b1, _b2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL4 = _assertIsOfSize_2(_b1, 3);
    let _start1 = _at_2(__SPL4, 1);
    let _stop1 = _at_2(__SPL4, 2);
    let _step1 = _at_2(__SPL4, 3);
    let __SPL5 = _assertIsOfSize_2(_b2, 3);
    let _start2 = _at_2(__SPL5, 1);
    let _stop2 = _at_2(__SPL5, 2);
    let _step2 = _at_2(__SPL5, 3);
    /* Statements */
    return _binListsFor_3(
      _self,
      _asList_1(_Range_3(_start1, _stop1, _step1)),
      _asList_1(_Range_3(_start2, _stop2, _step2)),
    );
  },
  "{ :self :b1 :b2 | let __SPL4 = assertIsOfSize(b1, 3); let start1 = at(__SPL4, 1); let stop1 = at(__SPL4, 2); let step1 = at(__SPL4, 3); let __SPL5 = assertIsOfSize(b2, 3); let start2 = at(__SPL5, 1); let stop2 = at(__SPL5, 2); let step2 = at(__SPL5, 3); binListsFor(self,asList(Range(start1, stop1, step1)), asList(Range(start2, stop2, step2))) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "capacity",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_self);
  },
  "{ :self | size(self) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "cartesianProductDo",
  ["self", "aCollection", "aBlock:/2"],
  function (_self, _aCollection, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_self, function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _do_2(_aCollection, function (_y) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _y";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_x, _y);
      });
    });
  },
  "{ :self :aCollection :aBlock:/2 | do(self, { :x | do(aCollection, { :y | aBlock(x, y) }) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "cartesianProduct",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _cartesianProductDo_3(_self, _aCollection, function (_i, _j) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _i, _j";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_answer, [_i, _j]);
    });
    return _answer;
  },
  "{ :self :aCollection | let answer = []; cartesianProductDo(self, aCollection, { :i :j | add(answer,[i, j]) }); answer }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "centralMoment",
  ["self", "r"],
  function (_self, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _r";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _mean = _mean_1(_self);
    /* Statements */
    return _asterisk_2(
      _solidus_2(1, _size_1(_self)),
      _sum_1(_circumflexAccent_2(_hyphenMinus_2(_self, _mean), _r)),
    );
  },
  "{ :self :r | let mean = mean(self); *((/(1, size(self))), sum((^((-(self, mean)), r)))) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "collect",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_answer, _aBlock_1(_each));
    });
    return _answer;
  },
  "{ :self :aBlock:/1 | let answer = new(species(self)); do(self, { :each | add(answer,aBlock(each)) }); answer }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "collectInto",
  ["self", "aBlock", "aCollection"],
  function (_self, _aBlock, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _fillFromWith_3(_aCollection, _self, _aBlock);
  },
  "{ :self :aBlock :aCollection | fillFromWith(aCollection,self, aBlock) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "collectThenDo",
  ["self", "collectBlock:/1", "doBlock:/1"],
  function (_self, _collectBlock_1, _doBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _collectBlock_1, _doBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_collect_2(_self, _collectBlock_1), _doBlock_1);
  },
  "{ :self :collectBlock:/1 :doBlock:/1 | do(collect(self,collectBlock:/1),doBlock:/1) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "collectThenSelect",
  ["self", "collectBlock:/1", "selectBlock:/1"],
  function (_self, _collectBlock_1, _selectBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _collectBlock_1, _selectBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _item = _collectBlock_1(_each);
      /* Statements */
      return _ifTrue_2(_selectBlock_1(_item), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _item);
      });
    });
    return _answer;
  },
  "{ :self :collectBlock:/1 :selectBlock:/1 | let answer = new(species(self)); do(self, { :each | let item = collectBlock(each); ifTrue(selectBlock(item), { add(answer,item) }) }); answer }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "concisePrintString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("% (size: %)", [
      _withIndefiniteArticle_1(_typeOf_1(_self)),
      _size_1(_self),
    ]);
  },
  "{ :self | format('% (size: %)',[withIndefiniteArticle(typeOf(self)), size(self)]) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "contraharmonicMean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_sum_1(_squared_1(_self)), _sum_1(_self));
  },
  "{ :self | /(sum(squared(self)), sum(self)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "copyWith",
  ["self", "newElement"],
  function (_self, _newElement) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _newElement";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _copy_1(_self);
    /* Statements */
    _add_2(_answer, _newElement);
    return _answer;
  },
  "{ :self :newElement | let answer = copy(self); add(answer,newElement); answer }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "copyWithout",
  ["self", "oldElement"],
  function (_self, _oldElement) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _oldElement";
      throw new Error(errorMessage);
    } /* Statements */
    return _reject_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_each, _oldElement);
    });
  },
  "{ :self :oldElement | reject(self, { :each | =(each, oldElement) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "copyWithoutAll",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _reject_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _includes_2(_aCollection, _each);
    });
  },
  "{ :self :aCollection | reject(self, { :each | includes(aCollection,each) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "copyWithoutIdenticalElements",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _seen = _IdentitySet_0();
    /* Statements */
    return _select_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_includes_2(_seen, _each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return false;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _basicInclude_2(_seen, _each);
        return true;
      });
    });
  },
  "{ :self | let seen = IdentitySet(); select(self, { :each | if(includes(seen,each), { false }, { basicInclude(seen,each); true }) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "clip",
  ["self", "min", "max"],
  function (_self, _min, _max) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _min, _max";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _clip_3(_each, _min, _max);
    });
  },
  "{ :self :min :max | collect(self, { :each | clip(each,min, max) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "clip",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _clip_3(_self, -1, 1);
  },
  "{ :self | clip(self,-1, 1) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "cubeRoot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _cubeRoot_1);
  },
  "{ :self | collect(self,cubeRoot:/1) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "deepAllSatisfy",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _type = _typeOf_1(_self);
    /* Statements */
    return _allSatisfy_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_equalsSign_2(_typeOf_1(_each), _type), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _deepAllSatisfy_2(_each, _aBlock_1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_each);
      });
    });
  },
  "{ :self :aBlock:/1 | let type = typeOf(self); allSatisfy(self, { :each | if((=(typeOf(each), type)), { deepAllSatisfy(each,aBlock:/1) }, { aBlock(each) }) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "deepCollect",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _type = _typeOf_1(_self);
    /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_equalsSign_2(_typeOf_1(_each), _type), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _deepCollect_2(_each, _aBlock_1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_each);
      });
    });
  },
  "{ :self :aBlock:/1 | let type = typeOf(self); collect(self, { :each | if((=(typeOf(each), type)), { deepCollect(each,aBlock:/1) }, { aBlock(each) }) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "deleteDuplicates",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _nubBy_2(_self, _aBlock_2);
  },
  "{ :self :aBlock:/2 | nubBy(self,aBlock:/2) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "deleteDuplicates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _nub_1(_self);
  },
  "{ :self | nub(self) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "deleteMissing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reject_2(_self, _isMissing_1);
  },
  "{ :self | reject(self,isMissing:/1) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "depth",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(1, _max_1(_collect_2(_self, _depth_1)));
  },
  "{ :self | +(1, max(collect(self,depth:/1))) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "difference",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _reject_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _includes_2(_aCollection, _each);
    });
  },
  "{ :self :aCollection | reject(self, { :each | includes(aCollection,each) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "differenceAll",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _reject_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _anySatisfy_2(_aCollection, function (_subCollection) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _subCollection";
          throw new Error(errorMessage);
        } /* Statements */
        return _includes_2(_subCollection, _each);
      });
    });
  },
  "{ :self :aCollection | reject(self, { :each | anySatisfy(aCollection, { :subCollection | includes(subCollection,each) }) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "discreteDelta",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_allSatisfy_2(_self, _isZero_1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    });
  },
  "{ :self | if(allSatisfy(self,isZero:/1), { 1 }, { 0 }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "doesNotInclude",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_includes_2(_self, _anObject));
  },
  "{ :self :anObject | not(includes(self,anObject)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "elementType",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _elementTypeIfAbsent_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return null;
    });
  },
  "{ :self | elementTypeIfAbsent(self, { nil }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "elementTypeIfAbsent",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _types = _elementTypes_1(_self);
    /* Statements */
    return _if_3(_equalsSign_2(_size_1(_types), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _anyOne_1(_types);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_0();
    });
  },
  "{ :self :aBlock:/0 | let types = elementTypes(self); if((=(size(types), 1)), { anyOne(types) }, { aBlock() }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "elementTypes",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _IdentitySet_0();
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _include_2(_answer, _typeOf_1(_each));
    });
    return _answer;
  },
  "{ :self | let answer = IdentitySet(); do(self, { :each | include(answer,typeOf(each)) }); answer }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "emptyCheck",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifTrue_2(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _errorEmptyCollection_1(_self);
    });
  },
  "{ :self | ifTrue(isEmpty(self), { errorEmptyCollection(self) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "errorEmptyCollection",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "errorEmptyCollection");
  },
  "{ :self | error(self,'errorEmptyCollection') }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "errorNotFound",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, _plusSignPlusSign_2("errorNotFound: ", _anObject));
  },
  "{ :self :anObject | error(self,++('errorNotFound: ', anObject)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "errorNotIndexed",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "is not indexed/keyed");
  },
  "{ :self | error(self,'is not indexed/keyed') }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "extendedGcd",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_lessThanSign_2(_size_1(_self), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "@Collection>>extendedGcd");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SPL6 = _assertIsOfSize_2(
        _extendedGcd_2(_at_2(_self, 1), _at_2(_self, 2)),
        2,
      );
      let _g = _at_2(__SPL6, 1);
      let _c = _at_2(__SPL6, 2);
      /* Statements */
      _toDo_3(3, _size_1(_self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL7 = _assertIsOfSize_2(
          _extendedGcd_2(_g, _at_2(_self, _each)),
          2,
        );
        let _nextG = _at_2(__SPL7, 1);
        let _nextC = _at_2(__SPL7, 2);
        /* Statements */
        _g = _nextG;
        return _add_2(_c, _last_1(_nextC));
      });
      return [_g, _c];
    });
  },
  "{ :self | if((<(size(self), 2)), { error(self,'@Collection>>extendedGcd') }, { let __SPL6 = assertIsOfSize(extendedGcd(at(self, 1),at(self, 2)), 2); let g = at(__SPL6, 1); let c = at(__SPL6, 2); toDo(3, size(self), { :each | let __SPL7 = assertIsOfSize(extendedGcd(g,at(self, each)), 2); let nextG = at(__SPL7, 1); let nextC = at(__SPL7, 2); g := nextG; add(c,last(nextC)) }); [g, c] }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "fillFrom",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _fillFromWith_3(_self, _aCollection, _identity_1);
  },
  "{ :self :aCollection | fillFromWith(self,aCollection, identity:/1) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "gather",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _addAll_2(_answer, _aBlock_1(_each));
    });
    return _answer;
  },
  "{ :self :aBlock:/1 | let answer = new(species(self)); do(self, { :each | addAll(answer,aBlock(each)) }); answer }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "gcd",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(_self, _gcd_2);
  },
  "{ :self | reduce(self,gcd:/2) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "geometricMean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(
      _product_1(_self),
      _solidus_2(1, _size_1(_self)),
    );
  },
  "{ :self | ^(product(self), (/(1, size(self)))) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "groupBy",
  ["self", "keyBlock:/1"],
  function (_self, _keyBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _keyBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _result = _Map_0();
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _key = _keyBlock_1(_each);
      /* Statements */
      return _add_2(
        _atIfAbsentPut_3(_result, _key, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return [];
        }),
        _each,
      );
    });
    return _result;
  },
  "{ :self :keyBlock:/1 | let result = Map(); do(self, { :each | let key = keyBlock(each); add(atIfAbsentPut(result, key, { [] }),each) }); result }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "harmonicMean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_size_1(_self), _sum_1(_reciprocal_1(_self)));
  },
  "{ :self | /(size(self), sum(reciprocal(self))) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "histogramOf",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _histogramOf_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _each;
    });
  },
  "{ :self | histogramOf(self, { :each | each }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "histogramListFor",
  ["self", "b"],
  function (_self, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return [_b, _collect_2(_binListsFor_2(_self, _b), _size_1)];
  },
  "{ :self :b | [b, collect(binListsFor(self,b),size:/1)] }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "histogramList",
  ["self", "b"],
  function (_self, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL8 = _assertIsOfSize_2(_b, 3);
    let _start = _at_2(__SPL8, 1);
    let _stop = _at_2(__SPL8, 2);
    let _step = _at_2(__SPL8, 3);
    /* Statements */
    return _histogramListFor_2(
      _self,
      _asList_1(_Range_3(_start, _stop, _step)),
    );
  },
  "{ :self :b | let __SPL8 = assertIsOfSize(b, 3); let start = at(__SPL8, 1); let stop = at(__SPL8, 2); let step = at(__SPL8, 3); histogramListFor(self,asList(Range(start, stop, step))) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "histogramList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _plusSign_2(_ceiling_1(_sqrt_1(_size_1(_self))), 1);
    let __SPL9 = _assertIsOfSize_2(_minMax_1(_self), 2);
    let _min = _at_2(__SPL9, 1);
    let _max = _at_2(__SPL9, 2);
    let _b = _findDivisions_2(_hyphenMinusHyphenMinus_2(_min, _max), _k);
    /* Statements */
    return _histogramListFor_2(_self, _asList_1(_b));
  },
  "{ :self | let k = +(ceiling(sqrt(size(self))), 1); let __SPL9 = assertIsOfSize(minMax(self), 2); let min = at(__SPL9, 1); let max = at(__SPL9, 2); let b = findDivisions((--(min, max)),k); histogramListFor(self,asList(b)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "include",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Collection>>include");
  },
  "{ :self :anObject | typeResponsibility(self,'@Collection>>include') }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "includeAll",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_aCollection, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _include_2(_self, _each);
    });
  },
  "{ :self :aCollection | do(aCollection, { :each | include(self,each) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "indices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return null;
  },
  "{ :self | nil }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "intersection",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _includes_2(_aCollection, _each);
    });
  },
  "{ :self :aCollection | select(self, { :each | includes(aCollection,each) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "ifEmpty",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _self;
    });
  },
  "{ :self :aBlock:/0 | if(isEmpty(self), { aBlock() }, { self }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "ifEmpty",
  ["self", "emptyBlock:/0", "notEmptyBlock"],
  function (_self, _emptyBlock_0, _notEmptyBlock) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _emptyBlock_0, _notEmptyBlock";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _emptyBlock_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _cull_2(_notEmptyBlock, _self);
    });
  },
  "{ :self :emptyBlock:/0 :notEmptyBlock | if(isEmpty(self), { emptyBlock() }, { cull(notEmptyBlock,self) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "ifEmptyIfNotEmptyDo",
  ["self", "emptyBlock:/0", "notEmptyBlock:/1"],
  function (_self, _emptyBlock_0, _notEmptyBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _emptyBlock_0, _notEmptyBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _emptyBlock_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _notEmptyBlock_1(_self);
    });
  },
  "{ :self :emptyBlock:/0 :notEmptyBlock:/1 | if(isEmpty(self), { emptyBlock() }, { notEmptyBlock(self) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "ifNotEmpty",
  ["self", "aBlock"],
  function (_self, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifFalse_2(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _cull_2(_aBlock, _self);
    });
  },
  "{ :self :aBlock | ifFalse(isEmpty(self), { cull(aBlock,self) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "ifNotEmptyDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifFalse_2(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_1(_self);
    });
  },
  "{ :self :aBlock:/1 | ifFalse(isEmpty(self), { aBlock(self) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "interquartileRange",
  ["self", "a", "b", "c", "d"],
  function (_self, _a, _b, _c, _d) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _self, _a, _b, _c, _d";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL10 = _assertIsOfSize_2(_quartiles_5(_self, _a, _b, _c, _d), 3);
    let _q1 = _at_2(__SPL10, 1);
    let _q2 = _at_2(__SPL10, 2);
    let _q3 = _at_2(__SPL10, 3);
    /* Statements */
    return _hyphenMinus_2(_q3, _q1);
  },
  "{ :self :a :b :c :d | let __SPL10 = assertIsOfSize(quartiles(self,a, b, c, d), 3); let q1 = at(__SPL10, 1); let q2 = at(__SPL10, 2); let q3 = at(__SPL10, 3); -(q3, q1) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "interquartileRange",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL11 = _assertIsOfSize_2(_quartiles_1(_self), 3);
    let _q1 = _at_2(__SPL11, 1);
    let _q2 = _at_2(__SPL11, 2);
    let _q3 = _at_2(__SPL11, 3);
    /* Statements */
    return _hyphenMinus_2(_q3, _q1);
  },
  "{ :self | let __SPL11 = assertIsOfSize(quartiles(self), 3); let q1 = at(__SPL11, 1); let q2 = at(__SPL11, 2); let q3 = at(__SPL11, 3); -(q3, q1) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "isCollection",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :self | true }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "isDisjoint",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _noneSatisfy_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _includes_2(_aCollection, _each);
    });
  },
  "{ :self :aCollection | noneSatisfy(self, { :each | includes(aCollection,each) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "isEmpty",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_size_1(_self), 0);
  },
  "{ :self | =(size(self), 0) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "isOfSameSizeCheck",
  ["self", "otherCollection"],
  function (_self, _otherCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _otherCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifFalse_2(
      _equalsSign_2(_size_1(_otherCollection), _size_1(_self)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Collection>>isOfSameSizeCheck");
      },
    );
  },
  "{ :self :otherCollection | ifFalse((=(size(otherCollection), size(self))), { error(self,'@Collection>>isOfSameSizeCheck') }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "isSequence",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  },
  "{ :self | false }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "isZero",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_self, _isZero_1);
  },
  "{ :self | allSatisfy(self,isZero:/1) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "kroneckerDelta",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _boole_1(_allEqual_1(_self));
  },
  "{ :self | boole(allEqual(self)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "kurtosis",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isVector_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(
        _centralMoment_2(_self, 4),
        _circumflexAccent_2(_centralMoment_2(_self, 2), 2),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isMatrix_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_transposed_1(_self), _kurtosis_1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("@Collection>>kurtosis: not vector or matrix");
      });
    });
  },
  "{ :self | if(isVector(self), { /(centralMoment(self,4), (^(centralMoment(self,2), 2))) }, { if(isMatrix(self), { collect(transposed(self),kurtosis:/1) }, { error('@Collection>>kurtosis: not vector or matrix') }) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "leafCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isCollection_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _leafCount_1(_each);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      });
    }));
  },
  "{ :self | sum(collect(self, { :each | if(isCollection(each), { leafCount(each) }, { 1 }) })) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "levelBy",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _withLevelDo_2(_self, function (_each, _level) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _level";
        throw new Error(errorMessage);
      } /* Statements */
      return _ifTrue_2(_aBlock_1(_level), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _each);
      });
    });
    return _answer;
  },
  "{ :self :aBlock:/1 | let answer = []; withLevelDo(self, { :each :level | ifTrue(aBlock(level), { add(answer,each) }) }); answer }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "levelEach",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _levelBy_2(_self, function (_level) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _level";
        throw new Error(errorMessage);
      } /* Statements */
      return _includes_2(_aCollection, _level);
    });
  },
  "{ :self :aCollection | levelBy(self, { :level | includes(aCollection,level) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "level",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _levelBy_2(_self, function (_level) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _level";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_level, _anInteger);
    });
  },
  "{ :self :anInteger | levelBy(self, { :level | =(level, anInteger) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "maxIfEmpty",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifEmpty_3(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _max_1(_self);
    });
  },
  "{ :self :aBlock:/0 | ifEmpty(self, { aBlock() }, { max(self) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "minIfEmpty",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifEmpty_3(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _min_1(_self);
    });
  },
  "{ :self :aBlock:/0 | ifEmpty(self, { aBlock() }, { min(self) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "mean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_sum_1(_self), _size_1(_self));
  },
  "{ :self | /(sum(self), size(self)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "meanDeviation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _sum_1(_abs_1(_hyphenMinus_2(_self, _mean_1(_self)))),
      _size_1(_self),
    );
  },
  "{ :self | /(sum(abs((-(self, mean(self))))), size(self)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "moment",
  ["self", "r"],
  function (_self, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _r";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _solidus_2(1, _size_1(_self)),
      _sum_1(_circumflexAccent_2(_self, _r)),
    );
  },
  "{ :self :r | *((/(1, size(self))), sum((^(self, r)))) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "nearest",
  ["self", "anObject", "aBlock:/2"],
  function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _leastDistance = _min_1(_collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _abs_1(_aBlock_2(_each, _anObject));
    }));
    /* Statements */
    return _select_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_abs_1(_aBlock_2(_each, _anObject)), _leastDistance);
    });
  },
  "{ :self :anObject :aBlock:/2 | let leastDistance = min(collect(self, { :each | abs(aBlock(each, anObject)) })); select(self, { :each | =(abs(aBlock(each, anObject)), leastDistance) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "normalizeRange",
  ["self", "minima", "maxima"],
  function (_self, _minima, _maxima) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _minima, _maxima";
      throw new Error(errorMessage);
    } /* Statements */
    return _rescale_5(_self, _min_1(_self), _max_1(_self), _minima, _maxima);
  },
  "{ :self :minima :maxima | rescale(self,min(self), max(self), minima, maxima) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "normalizeSignal",
  ["self", "minima", "maxima"],
  function (_self, _minima, _maxima) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _minima, _maxima";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _max_2(_abs_1(_min_1(_self)), _abs_1(_max_1(_self)));
    /* Statements */
    return _rescale_5(_self, _negated_1(_x), _x, _minima, _maxima);
  },
  "{ :self :minima :maxima | let x = max(abs(min(self)),abs(max(self))); rescale(self,negated(x), x, minima, maxima) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "normalizeSignal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _normalizeSignal_3(_self, -1, 1);
  },
  "{ :self | normalizeSignal(self,-1, 1) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "normalizeSum",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_self, _sum_1(_self));
  },
  "{ :self | /(self, sum(self)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "not",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _not_1);
  },
  "{ :self | collect(self,not:/1) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "notEmpty",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_isEmpty_1(_self));
  },
  "{ :self | not(isEmpty(self)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "nub",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _nubBy_2(_self, _equalsSign_2);
  },
  "{ :self | nubBy(self,=) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "nubBy",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSignEqualsSign_2(_aBlock_2, _equalsSignEqualsSign_2),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _nubIdentical_1(_self);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _seen = [];
        /* Statements */
        return _select_2(_self, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(_includesBy_3(_seen, _each, _aBlock_2), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return false;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _add_2(_seen, _each);
            return true;
          });
        });
      },
    );
  },
  "{ :self :aBlock:/2 | if((==(aBlock:/2, equalsSignEqualsSign:/2)), { nubIdentical(self) }, { let seen = []; select(self, { :each | if(includesBy(seen,each, aBlock:/2), { false }, { add(seen,each); true }) }) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "nubIdentical",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _seen = _IdentitySet_0();
    /* Statements */
    return _select_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_includes_2(_seen, _each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return false;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _include_2(_seen, _each);
        return true;
      });
    });
  },
  "{ :self | let seen = IdentitySet(); select(self, { :each | if(includes(seen,each), { false }, { include(seen,each); true }) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "ofSize",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    _ifFalse_2(_equalsSign_2(_size_1(_self), _aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "@Collection>>ofSize");
    });
    return _self;
  },
  "{ :self :aNumber | ifFalse((=(size(self), aNumber)), { error(self,'@Collection>>ofSize') }); self }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "one",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _one_1(_each);
    });
  },
  "{ :self | collect(self, { :each | one(each) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "powerSetDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _size = _circumflexAccent_2(2, _size_1(_self));
    let _powersOfTwo = _circumflexAccent_2(
      2,
      _upOrDownTo_2(0, _hyphenMinus_2(_size_1(_self), 1)),
    );
    let _list = _asList_1(_self);
    /* Statements */
    _toDo_3(0, _hyphenMinus_2(_size, 1), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _subset = _new_1(_species_1(_self));
      /* Statements */
      _withIndexDo_2(_powersOfTwo, function (_each, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _tildeEqualsSign_2(
            _percentSign_2(_solidusSolidus_2(_i, _each), 2),
            0,
          ),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _include_2(_subset, _at_2(_list, _j));
          },
        );
      });
      return _aBlock_1(_subset);
    });
    return _self;
  },
  "{ :self :aBlock:/1 | let size = ^(2, size(self)); let powersOfTwo = ^(2, upOrDownTo(0, (-(size(self), 1)))); let list = asList(self); toDo(0, -(size, 1), { :i | let subset = new(species(self)); withIndexDo(powersOfTwo, { :each :j | ifTrue((~=(%(//(i, each), 2), 0)), { include(subset,at(list, j)) }) }); aBlock(subset) }); self }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "powerSet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _powerSetDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_answer, _each);
    });
    return _answer;
  },
  "{ :self | let answer = []; powerSetDo(self, { :each | add(answer,each) }); answer }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["size"];
  },
  "{ :self | ['size'] }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "quantile",
  ["self", "p", "a", "b", "c", "d"],
  function (_self, _p, _a, _b, _c, _d) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage = "Arity: expected 6, _self, _p, _a, _b, _c, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isVector_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _quantile_6(_asSortedList_1(_self), _p, _a, _b, _c, _d);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isMatrix_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_transposed_1(_self), function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _quantile_6(_asSortedList_1(_each), _p, _a, _b, _c, _d);
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return "Collection>>quantile: not vector or matrix";
      });
    });
  },
  "{ :self :p :a :b :c :d | if(isVector(self), { quantile(asSortedList(self),p, a, b, c, d) }, { if(isMatrix(self), { collect(transposed(self), { :each | quantile(asSortedList(each),p, a, b, c, d) }) }, { 'Collection>>quantile: not vector or matrix' }) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "quantile",
  ["self", "p"],
  function (_self, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _quantile_6(_self, _p, 0, 0, 1, 0);
  },
  "{ :self :p | quantile(self,p, 0, 0, 1, 0) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "quartiles",
  ["self", "a", "b", "c", "d"],
  function (_self, _a, _b, _c, _d) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _self, _a, _b, _c, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _quantile_6(_self, _solidus_2([1, 2, 3], 4), _a, _b, _c, _d);
  },
  "{ :self :a :b :c :d | quantile(self,/([1, 2, 3], 4), a, b, c, d) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "quartiles",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _quartiles_5(_self, _solidus_2(1, 2), 0, 0, 1);
  },
  "{ :self | quartiles(self,/(1, 2), 0, 0, 1) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "reject",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(_self, function (_element) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _element";
        throw new Error(errorMessage);
      } /* Statements */
      return _not_1(_aBlock_1(_element));
    });
  },
  "{ :self :aBlock:/1 | select(self, { :element | not(aBlock(element)) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "rescale",
  ["self", "min", "max", "ymin", "ymax"],
  function (_self, _min, _max, _ymin, _ymax) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _self, _min, _max, _ymin, _ymax";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _rescale_5(_each, _min, _max, _ymin, _ymax);
    });
  },
  "{ :self :min :max :ymin :ymax | collect(self, { :each | rescale(each,min, max, ymin, ymax) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "rescale",
  ["self", "min", "max"],
  function (_self, _min, _max) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _min, _max";
      throw new Error(errorMessage);
    } /* Statements */
    return _rescale_5(_self, _min, _max, 0, 1);
  },
  "{ :self :min :max | rescale(self,min, max, 0, 1) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "rescale",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _rescale_5(_self, _deepMin_1(_self), _deepMax_1(_self), 0, 1);
  },
  "{ :self | rescale(self,deepMin(self), deepMax(self), 0, 1) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "rootMeanSquare",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_sqrt_1(_sum_1(_squared_1(_self))), 2);
  },
  "{ :self | /(sqrt(sum(squared(self))), 2) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "sampleStandardDeviation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sqrt_1(_mean_1(_squared_1(_hyphenMinus_2(_self, _mean_1(_self)))));
  },
  "{ :self | sqrt(mean(squared((-(self, mean(self)))))) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "select",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _ifTrue_2(_aBlock_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _include_2(_answer, _each);
      });
    });
    return _answer;
  },
  "{ :self :aBlock:/1 | let answer = new(species(self)); do(self, { :each | ifTrue(aBlock(each), { include(answer,each) }) }); answer }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "selectThenCollect",
  ["self", "selectBlock:/1", "collectBlock:/1"],
  function (_self, _selectBlock_1, _collectBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _selectBlock_1, _collectBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _selectThenDo_3(_self, _selectBlock_1, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_answer, _collectBlock_1(_each));
    });
    return _answer;
  },
  "{ :self :selectBlock:/1 :collectBlock:/1 | let answer = new(species(self)); selectThenDo(self, selectBlock:/1, { :each | add(answer,collectBlock(each)) }); answer }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "skewness",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isVector_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(
        _centralMoment_2(_self, 3),
        _circumflexAccent_2(_centralMoment_2(_self, 2), _solidus_2(3, 2)),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isMatrix_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_transposed_1(_self), _skewness_1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("@Collection>>skewness: not vector or matrix");
      });
    });
  },
  "{ :self | if(isVector(self), { /(centralMoment(self,3), (^(centralMoment(self,2), (/(3, 2))))) }, { if(isMatrix(self), { collect(transposed(self),skewness:/1) }, { error('@Collection>>skewness: not vector or matrix') }) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "sorted",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sort_1(_asList_1(_self));
  },
  "{ :self | sort(asList(self)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "sorted",
  ["self", "sortBlock:/2"],
  function (_self, _sortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sortBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortBy_2(_asList_1(_self), _sortBlock_2);
  },
  "{ :self :sortBlock:/2 | sortBy(asList(self),sortBlock:/2) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "sortedCounts",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortedCounts_1(_asIdentityBag_1(_self));
  },
  "{ :self | sortedCounts(asIdentityBag(self)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "sortedElements",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortedElements_1(_asIdentityBag_1(_self));
  },
  "{ :self | sortedElements(asIdentityBag(self)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "stemLeafPlot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _negative = _Map_0();
    let _positive = _Map_0();
    /* Statements */
    _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _d = _integerDigits_1(_each);
      let _rhs = _last_1(_d);
      let _lhsList = _if_3(_greaterThanSign_2(_size_1(_d), 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _allButLast_1(_d);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [0];
      });
      let _lhs = _copySignTo_2(_each, _fromDigits_2(_lhsList, 10));
      let _map = _if_3(_isNegative_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _negative;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _positive;
      });
      /* Statements */
      return _atIfPresentIfAbsent_4(_map, _lhs, function (_entry) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _entry";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_entry, _rhs);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_map, _lhs, [_rhs]);
      });
    });
    return _plusSignPlusSign_2(
      _sort_1(_associations_1(_negative)),
      _sort_1(_associations_1(_positive)),
    );
  },
  "{ :self | let negative = Map(); let positive = Map(); collect(self, { :each | let d = integerDigits(each); let rhs = last(d); let lhsList = if((>(size(d), 1)), { allButLast(d) }, { [0] }); let lhs = copySignTo(each,fromDigits(lhsList,10)); let map = if(isNegative(each), { negative }, { positive }); atIfPresentIfAbsent(map, lhs, { :entry | add(entry,rhs) }, { atPut(map,lhs, [rhs]) }) }); ++(sort(associations(negative)), sort(associations(positive))) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "subsets",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _powerSetDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _ifTrue_2(_aBlock_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _each);
      });
    });
    return _answer;
  },
  "{ :self :aBlock:/1 | let answer = []; powerSetDo(self, { :each | ifTrue(aBlock(each), { add(answer,each) }) }); answer }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "sum",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _reduce_2(_self, _plusSign_2);
    });
  },
  "{ :self | if(isEmpty(self), { 0 }, { reduce(self,+) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "standardDeviation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sqrt_1(_variance_1(_self));
  },
  "{ :self | sqrt(variance(self)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "standardizedMoment",
  ["self", "r"],
  function (_self, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _r";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _centralMoment_2(_self, _r),
      _circumflexAccent_2(_sampleStandardDeviation_1(_self), _r),
    );
  },
  "{ :self :r | /(centralMoment(self,r), (^(sampleStandardDeviation(self), r))) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "symmetricDifference",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _union_2(
      _difference_2(_self, _aCollection),
      _difference_2(_aCollection, _self),
    );
  },
  "{ :self :aCollection | union(difference(self,aCollection),difference(aCollection,self)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "take",
  ["self", "maxNumberOfElements"],
  function (_self, _maxNumberOfElements) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _maxNumberOfElements";
      throw new Error(errorMessage);
    } /* Statements */
    return _any_2(_self, _min_2(_maxNumberOfElements, _size_1(_self)));
  },
  "{ :self :maxNumberOfElements | any(self,min(maxNumberOfElements,size(self))) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "tally",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _detectIndexIfFoundIfNone_4(_answer, function (_item) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _item";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_key_1(_item), _each);
      }, function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _association = _at_2(_answer, _index);
        /* Statements */
        return _value_2(_association, _plusSign_2(_value_1(_association), 1));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _hyphenMinusGreaterThanSign_2(_each, 1));
      });
    });
    return _answer;
  },
  "{ :self :aBlock:/2 | let answer = []; do(self, { :each | detectIndexIfFoundIfNone(answer, { :item | aBlock(key(item), each) }, { :index | let association = at(answer, index); value(association, +(value(association), 1)) }, { add(answer,->(each, 1)) }) }); answer }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "tally",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _tally_2(_self, _equalsSign_2);
  },
  "{ :self | tally(self,=) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "threshold",
  ["self", "epsilon"],
  function (_self, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _epsilon";
      throw new Error(errorMessage);
    } /* Statements */
    return _deepCollect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_lessThanSign_2(_abs_1(_each), _epsilon), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _zero_1(_each);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _each;
      });
    });
  },
  "{ :self :epsilon | deepCollect(self, { :each | if((<(abs(each), epsilon)), { zero(each) }, { each }) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "unionBy",
  ["self", "aCollection", "aBlock:/2"],
  function (_self, _aCollection, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _asSet_2(_self, _aBlock_2);
    /* Statements */
    _includeAll_2(_answer, _aCollection);
    return _answer;
  },
  "{ :self :aCollection :aBlock:/2 | let answer = asSet(self,aBlock:/2); includeAll(answer,aCollection); answer }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "union",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _unionBy_3(_self, _aCollection, _equalsSign_2);
  },
  "{ :self :aCollection | unionBy(self,aCollection, =) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "variance",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _sum_1(_circumflexAccent_2(_hyphenMinus_2(_self, _mean_1(_self)), 2)),
      _hyphenMinus_2(_size_1(_self), 1),
    );
  },
  "{ :self | /(sum((^((-(self, mean(self))), 2))), (-(size(self), 1))) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "withLevelCollect",
  ["self", "aBlock:/2", "level"],
  function (_self, _aBlock_2, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_2, _level";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _type = _typeOf_1(_self);
    /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_equalsSign_2(_typeOf_1(_each), _type), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(
          _withLevelCollect_3(_each, _aBlock_2, _plusSign_2(_level, 1)),
          _level,
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_each, _level);
      });
    });
  },
  "{ :self :aBlock:/2 :level | let type = typeOf(self); collect(self, { :each | if((=(typeOf(each), type)), { aBlock(withLevelCollect(each,aBlock:/2, +(level, 1)), level) }, { aBlock(each, level) }) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "withLevelCollect",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_withLevelCollect_3(_self, _aBlock_2, 1), 0);
  },
  "{ :self :aBlock:/2 | aBlock(withLevelCollect(self,aBlock:/2, 1), 0) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "withLevelDo",
  ["self", "aBlock:/2", "level"],
  function (_self, _aBlock_2, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_2, _level";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _type = _typeOf_1(_self);
    /* Statements */
    return _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_equalsSign_2(_typeOf_1(_each), _type), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _withLevelDo_3(_each, _aBlock_2, _plusSign_2(_level, 1));
        return _aBlock_2(_each, _level);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_each, _level);
      });
    });
  },
  "{ :self :aBlock:/2 :level | let type = typeOf(self); do(self, { :each | if((=(typeOf(each), type)), { withLevelDo(each,aBlock:/2, +(level, 1)); aBlock(each, level) }, { aBlock(each, level) }) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "withLevelDo",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    _withLevelDo_3(_self, _aBlock_2, 1);
    return _aBlock_2(_self, 0);
  },
  "{ :self :aBlock:/2 | withLevelDo(self,aBlock:/2, 1); aBlock(self, 0) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "zero",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _zero_1(_each);
    });
  },
  "{ :self | collect(self, { :each | zero(each) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Collection",
  "asCollection",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_self];
  },
  "{ :self | [self] }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Collection",
  "depth",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 1;
  },
  "{ :self | 1 }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Collection",
  "isCollection",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  },
  "{ :self | false }",
);
