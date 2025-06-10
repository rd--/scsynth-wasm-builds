sl.addTrait("Collection", "Collection");

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "numberSign",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_self);
  }, ["self"]),
  "{ :self | size(self) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "plusSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bindRight_2(_plusSign_2, _anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject | collect(self,bindRight(+,anObject)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "hyphenMinus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bindRight_2(_hyphenMinus_2, _anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject | collect(self,bindRight(-,anObject)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "asterisk",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bindRight_2(_asterisk_2, _anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject | collect(self,bindRight(*,anObject)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "solidus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bindRight_2(_solidus_2, _anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject | collect(self,bindRight(/,anObject)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "circumflexAccent",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bindRight_2(_circumflexAccent_2, _anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject | collect(self,bindRight(^,anObject)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "percentSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bindRight_2(_percentSign_2, _anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject | collect(self,bindRight(%,anObject)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "reverseSolidus",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _difference_2(_self, _aCollection);
  }, ["self", "aCollection"]),
  "{ :self :aCollection | difference(self,aCollection) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "plusSignPlusSign",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _copy_1(_self);
    /* Statements */
    _addAll_2(_answer, _assertIsCollection_1(_aCollection));
    return _answer;
  }, ["self", "aCollection"]),
  "{ :self :aCollection | let answer = copy(self); addAll(answer,assertIsCollection(aCollection)); answer }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
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

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "allEqualBy",
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
        return true;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _item = _anyOne_1(_self);
        /* Statements */
        return _allSatisfy_2(
          _self,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_2(_each, _item);
          }, ["each"]),
        );
      }, []),
    );
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | if(isEmpty(self), { true }, { let item = anyOne(self); allSatisfy(self, { :each | aBlock(each, item) }) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "allEqual",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allEqualBy_2(_self, _equalsSign_2);
  }, ["self"]),
  "{ :self | allEqualBy(self,=) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "any",
  ["self", "numberOfElements"],
  sl.annotateFunction(function (_self, _numberOfElements) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _numberOfElements";
      throw new Error(errorMessage);
    } /* Statements */
    return _anyAs_3(_self, _numberOfElements, _species_1(_self));
  }, ["self", "numberOfElements"]),
  "{ :self :numberOfElements | anyAs(self,numberOfElements, species(self)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "anyAs",
  ["self", "numberOfElements", "aBlock:/1"],
  sl.annotateFunction(function (_self, _numberOfElements, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _numberOfElements, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = 0;
    let _result = _aBlock_1(_numberOfElements);
    /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _fillFromWith_3(
        _result,
        _self,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          _index = _plusSign_2(_index, 1);
          return _if_3(
            _greaterThanSign_2(_index, _numberOfElements),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_result);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _each;
            }, []),
          );
        }, ["each"]),
      );
      _ifFalse_2(
        _equalsSign_2(_index, _numberOfElements),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _error_2(
            _self,
            "@Collection>>any: Not enough elements in collection",
          );
        }, []),
      );
      return _result;
    }, ["return:/1"]));
  }, ["self", "numberOfElements", "aBlock:/1"]),
  "{ :self :numberOfElements :aBlock:/1 | let index = 0; let result = aBlock(numberOfElements); valueWithReturn({ :return:/1 | fillFromWith(result, self, { :each | index := +(index, 1); if((>(index, numberOfElements)), { return(result) }, { each }) }); ifFalse((=(index, numberOfElements)), { error(self,'@Collection>>any: Not enough elements in collection') }); result }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _array = _List_1(_size_1(_self));
    let _index = 0;
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _index = _plusSign_2(_index, 1);
        return _atPut_3(_array, _index, _each);
      }, ["each"]),
    );
    return _array;
  }, ["self"]),
  "{ :self | let array = List(size(self)); let index = 0; do(self, { :each | index := +(index, 1); atPut(array, index, each) }); array }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "asCollection",
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

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "assertIsCollection",
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

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "associationsDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_self, _aBlock_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | do(self,aBlock:/1) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "atLevelCollect",
  ["self", "level", "aBlock:/1"],
  sl.annotateFunction(function (_self, _level, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _level, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _levelPredicate_1 = _if_3(
      _isCollection_1(_level),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _includes_2(_level, _each);
        }, ["each"]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_each, _level);
        }, ["each"]);
      }, []),
    );
    /* Statements */
    return _withLevelCollect_2(
      _self,
      sl.annotateFunction(function (_each, _thisLevel) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _thisLevel";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _levelPredicate_1(_thisLevel),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_1(_each);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _each;
          }, []),
        );
      }, ["each", "thisLevel"]),
    );
  }, ["self", "level", "aBlock:/1"]),
  "{ :self :level :aBlock:/1 | let levelPredicate:/1 = if(isCollection(level), { { :each | includes(level,each) } }, { { :each | =(each, level) } }); withLevelCollect(self, { :each :thisLevel | if(levelPredicate(thisLevel), { aBlock(each) }, { each }) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
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
  "Collection",
  "Collection",
  "capacity",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_self);
  }, ["self"]),
  "{ :self | size(self) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "cartesianProductDo",
  ["self", "aCollection", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aCollection, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _self,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(
          _aCollection,
          sl.annotateFunction(function (_y) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _y";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_2(_x, _y);
          }, ["y"]),
        );
      }, ["x"]),
    );
  }, ["self", "aCollection", "aBlock:/2"]),
  "{ :self :aCollection :aBlock:/2 | do(self, { :x | do(aCollection, { :y | aBlock(x, y) }) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "cartesianProduct",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _cartesianProductDo_3(
      _self,
      _aCollection,
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, [_i, _j]);
      }, ["i", "j"]),
    );
    return _answer;
  }, ["self", "aCollection"]),
  "{ :self :aCollection | let answer = []; cartesianProductDo(self, aCollection, { :i :j | add(answer,[i, j]) }); answer }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "collect",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _do_2(
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
  "{ :self :aBlock:/1 | let answer = new(species(self)); do(self, { :each | add(answer,aBlock(each)) }); answer }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "collectCatenate",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _addAll_2(_answer, _aBlock_1(_each));
      }, ["each"]),
    );
    return _answer;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let answer = new(species(self)); do(self, { :each | addAll(answer,aBlock(each)) }); answer }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "collectInto",
  ["self", "aBlock", "aCollection"],
  sl.annotateFunction(function (_self, _aBlock, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _fillFromWith_3(_aCollection, _self, _aBlock);
  }, ["self", "aBlock", "aCollection"]),
  "{ :self :aBlock :aCollection | fillFromWith(aCollection,self, aBlock) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "collectThenDo",
  ["self", "collectBlock:/1", "doBlock:/1"],
  sl.annotateFunction(function (_self, _collectBlock_1, _doBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _collectBlock_1, _doBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_collect_2(_self, _collectBlock_1), _doBlock_1);
  }, ["self", "collectBlock:/1", "doBlock:/1"]),
  "{ :self :collectBlock:/1 :doBlock:/1 | do(collect(self,collectBlock:/1),doBlock:/1) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "collectThenSelect",
  ["self", "collectBlock:/1", "selectBlock:/1"],
  sl.annotateFunction(function (_self, _collectBlock_1, _selectBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _collectBlock_1, _selectBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _item = _collectBlock_1(_each);
        /* Statements */
        return _ifTrue_2(
          _selectBlock_1(_item),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _item);
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self", "collectBlock:/1", "selectBlock:/1"]),
  "{ :self :collectBlock:/1 :selectBlock:/1 | let answer = new(species(self)); do(self, { :each | let item = collectBlock(each); ifTrue(selectBlock(item), { add(answer,item) }) }); answer }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "concisePrintString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("% (size: %)", [
      _withIndefiniteArticle_1(_typeOf_1(_self)),
      _size_1(_self),
    ]);
  }, ["self"]),
  "{ :self | format('% (size: %)',[withIndefiniteArticle(typeOf(self)), size(self)]) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "copyWith",
  ["self", "newElement"],
  sl.annotateFunction(function (_self, _newElement) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _newElement";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _copy_1(_self);
    /* Statements */
    _add_2(_answer, _newElement);
    return _answer;
  }, ["self", "newElement"]),
  "{ :self :newElement | let answer = copy(self); add(answer,newElement); answer }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "copyWithout",
  ["self", "oldElement"],
  sl.annotateFunction(function (_self, _oldElement) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _oldElement";
      throw new Error(errorMessage);
    } /* Statements */
    return _reject_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_each, _oldElement);
      }, ["each"]),
    );
  }, ["self", "oldElement"]),
  "{ :self :oldElement | reject(self, { :each | =(each, oldElement) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "copyWithoutAll",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _reject_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _includes_2(_aCollection, _each);
      }, ["each"]),
    );
  }, ["self", "aCollection"]),
  "{ :self :aCollection | reject(self, { :each | includes(aCollection,each) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "copyWithoutIdenticalElements",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _seen = _IdentitySet_0();
    /* Statements */
    return _select_2(
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
            _basicInclude_2(_seen, _each);
            return true;
          }, []),
        );
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self | let seen = IdentitySet(); select(self, { :each | if(includes(seen,each), { false }, { basicInclude(seen,each); true }) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "clip",
  ["self", "minMax"],
  sl.annotateFunction(function (_self, _minMax) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _minMax";
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
        return _clip_2(_each, _minMax);
      }, ["each"]),
    );
  }, ["self", "minMax"]),
  "{ :self :minMax | collect(self, { :each | clip(each,minMax) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "clip",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _clip_2(_self, [-1, 1]);
  }, ["self"]),
  "{ :self | clip(self,[-1, 1]) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "countsBy",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_groupBy_2(_self, _aBlock_1), _size_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | collect(groupBy(self,aBlock:/1),size:/1) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "cubeRoot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _cubeRoot_1);
  }, ["self"]),
  "{ :self | collect(self,cubeRoot:/1) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "deepCollect",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _type = _typeOf_1(_self);
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
          _equalsSign_2(_typeOf_1(_each), _type),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _deepCollect_2(_each, _aBlock_1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_1(_each);
          }, []),
        );
      }, ["each"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let type = typeOf(self); collect(self, { :each | if((=(typeOf(each), type)), { deepCollect(each,aBlock:/1) }, { aBlock(each) }) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "deleteDuplicates",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _nubBy_2(_self, _aBlock_2);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | nubBy(self,aBlock:/2) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "deleteDuplicates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _nub_1(_self);
  }, ["self"]),
  "{ :self | nub(self) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "deleteMissing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reject_2(_self, _isMissing_1);
  }, ["self"]),
  "{ :self | reject(self,isMissing:/1) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "depth",
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
        return 2;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(1, _max_1(_collect_2(_self, _depth_1)));
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isEmpty(self), { 2 }, { +(1, max(collect(self,depth:/1))) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "difference",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _reject_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _includes_2(_aCollection, _each);
      }, ["each"]),
    );
  }, ["self", "aCollection"]),
  "{ :self :aCollection | reject(self, { :each | includes(aCollection,each) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "differenceAll",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _reject_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _anySatisfy_2(
          _aCollection,
          sl.annotateFunction(function (_subCollection) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _subCollection";
              throw new Error(errorMessage);
            } /* Statements */
            return _includes_2(_subCollection, _each);
          }, ["subCollection"]),
        );
      }, ["each"]),
    );
  }, ["self", "aCollection"]),
  "{ :self :aCollection | reject(self, { :each | anySatisfy(aCollection, { :subCollection | includes(subCollection,each) }) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "discreteDelta",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _allSatisfy_2(_self, _isZero_1),
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
        return 0;
      }, []),
    );
  }, ["self"]),
  "{ :self | if(allSatisfy(self,isZero:/1), { 1 }, { 0 }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "doesNotInclude",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_includes_2(_self, _anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject | not(includes(self,anObject)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "elementType",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _elementTypeIfAbsent_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return null;
      }, []),
    );
  }, ["self"]),
  "{ :self | elementTypeIfAbsent(self, { nil }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "elementTypeIfAbsent",
  ["self", "aBlock:/0"],
  sl.annotateFunction(function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
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
        return _aBlock_0();
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _typeOf_1(_anyOne_1(_self));
        /* Statements */
        return _if_3(
          _allSatisfy_2(
            _self,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _equalsSign_2(_typeOf_1(_each), _answer);
            }, ["each"]),
          ),
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
            return _aBlock_0();
          }, []),
        );
      }, []),
    );
  }, ["self", "aBlock:/0"]),
  "{ :self :aBlock:/0 | if(isEmpty(self), { aBlock() }, { let answer = typeOf(anyOne(self)); if(allSatisfy(self, { :each | =(typeOf(each), answer) }), { answer }, { aBlock() }) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "elementTypes",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _IdentitySet_0();
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _include_2(_answer, _typeOf_1(_each));
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = IdentitySet(); do(self, { :each | include(answer,typeOf(each)) }); answer }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "emptyCheck",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifTrue_2(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _errorEmptyCollection_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self | ifTrue(isEmpty(self), { errorEmptyCollection(self) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "errorEmptyCollection",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "errorEmptyCollection");
  }, ["self"]),
  "{ :self | error(self,'errorEmptyCollection') }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "errorNotFound",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, _plusSignPlusSign_2("errorNotFound: ", _anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject | error(self,++('errorNotFound: ', anObject)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "errorNotIndexed",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "is not indexed/keyed");
  }, ["self"]),
  "{ :self | error(self,'is not indexed/keyed') }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "extendedGcd",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
        return _error_2(_self, "@Collection>>extendedGcd");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL1 = _assertIsOfSize_2(
          _extendedGcd_2(_at_2(_self, 1), _at_2(_self, 2)),
          2,
        );
        let _g = _at_2(__SPL1, 1);
        let _c = _at_2(__SPL1, 2);
        /* Statements */
        _toDo_3(
          3,
          _size_1(_self),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SPL2 = _assertIsOfSize_2(
              _extendedGcd_2(_g, _at_2(_self, _each)),
              2,
            );
            let _nextG = _at_2(__SPL2, 1);
            let _nextC = _at_2(__SPL2, 2);
            /* Statements */
            _g = _nextG;
            return _add_2(_c, _last_1(_nextC));
          }, ["each"]),
        );
        return [_g, _c];
      }, []),
    );
  }, ["self"]),
  "{ :self | if((<(size(self), 2)), { error(self,'@Collection>>extendedGcd') }, { let __SPL1 = assertIsOfSize(extendedGcd(at(self, 1),at(self, 2)), 2); let g = at(__SPL1, 1); let c = at(__SPL1, 2); toDo(3, size(self), { :each | let __SPL2 = assertIsOfSize(extendedGcd(g,at(self, each)), 2); let nextG = at(__SPL2, 1); let nextC = at(__SPL2, 2); g := nextG; add(c,last(nextC)) }); [g, c] }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "fillFrom",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _fillFromWith_3(_self, _aCollection, _identity_1);
  }, ["self", "aCollection"]),
  "{ :self :aCollection | fillFromWith(self,aCollection, identity:/1) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "gcd",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(_self, _gcd_2);
  }, ["self"]),
  "{ :self | reduce(self,gcd:/2) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "groupBy",
  ["self", "keyBlock:/1"],
  sl.annotateFunction(function (_self, _keyBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _keyBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _result = _Map_0();
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _key = _keyBlock_1(_each);
        /* Statements */
        return _add_2(
          _atIfAbsentPut_3(
            _result,
            _key,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return [];
            }, []),
          ),
          _each,
        );
      }, ["each"]),
    );
    return _result;
  }, ["self", "keyBlock:/1"]),
  "{ :self :keyBlock:/1 | let result = Map(); do(self, { :each | let key = keyBlock(each); add(atIfAbsentPut(result, key, { [] }),each) }); result }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "include",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Collection>>include");
  }, ["self", "anObject"]),
  "{ :self :anObject | typeResponsibility(self,'@Collection>>include') }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "includeAll",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _aCollection,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _include_2(_self, _each);
      }, ["each"]),
    );
  }, ["self", "aCollection"]),
  "{ :self :aCollection | do(aCollection, { :each | include(self,each) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "indices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return null;
  }, ["self"]),
  "{ :self | nil }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "intersection",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
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
        return _includes_2(_aCollection, _each);
      }, ["each"]),
    );
  }, ["self", "aCollection"]),
  "{ :self :aCollection | select(self, { :each | includes(aCollection,each) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "ifEmpty",
  ["self", "aBlock:/0"],
  sl.annotateFunction(function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
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
        return _aBlock_0();
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
    );
  }, ["self", "aBlock:/0"]),
  "{ :self :aBlock:/0 | if(isEmpty(self), { aBlock() }, { self }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "ifEmpty",
  ["self", "emptyBlock:/0", "notEmptyBlock"],
  sl.annotateFunction(function (_self, _emptyBlock_0, _notEmptyBlock) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _emptyBlock_0, _notEmptyBlock";
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
        return _emptyBlock_0();
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _cull_2(_notEmptyBlock, _self);
      }, []),
    );
  }, ["self", "emptyBlock:/0", "notEmptyBlock"]),
  "{ :self :emptyBlock:/0 :notEmptyBlock | if(isEmpty(self), { emptyBlock() }, { cull(notEmptyBlock,self) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "ifEmptyIfNotEmptyDo",
  ["self", "emptyBlock:/0", "notEmptyBlock:/1"],
  sl.annotateFunction(function (_self, _emptyBlock_0, _notEmptyBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _emptyBlock_0, _notEmptyBlock_1";
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
        return _emptyBlock_0();
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _notEmptyBlock_1(_self);
      }, []),
    );
  }, ["self", "emptyBlock:/0", "notEmptyBlock:/1"]),
  "{ :self :emptyBlock:/0 :notEmptyBlock:/1 | if(isEmpty(self), { emptyBlock() }, { notEmptyBlock(self) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "ifNotEmpty",
  ["self", "aBlock"],
  sl.annotateFunction(function (_self, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifFalse_2(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _cull_2(_aBlock, _self);
      }, []),
    );
  }, ["self", "aBlock"]),
  "{ :self :aBlock | ifFalse(isEmpty(self), { cull(aBlock,self) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "ifNotEmptyDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifFalse_2(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_self);
      }, []),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | ifFalse(isEmpty(self), { aBlock(self) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "isAtom",
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

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "isCollection",
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
  "Collection",
  "Collection",
  "isDisjoint",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _noneSatisfy_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _includes_2(_aCollection, _each);
      }, ["each"]),
    );
  }, ["self", "aCollection"]),
  "{ :self :aCollection | noneSatisfy(self, { :each | includes(aCollection,each) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "isEmpty",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_size_1(_self), 0);
  }, ["self"]),
  "{ :self | =(size(self), 0) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "isOfSameSizeCheck",
  ["self", "otherCollection"],
  sl.annotateFunction(function (_self, _otherCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _otherCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifFalse_2(
      _equalsSign_2(_size_1(_otherCollection), _size_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Collection>>isOfSameSizeCheck");
      }, []),
    );
  }, ["self", "otherCollection"]),
  "{ :self :otherCollection | ifFalse((=(size(otherCollection), size(self))), { error(self,'@Collection>>isOfSameSizeCheck') }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "kroneckerDelta",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _boole_1(_allEqual_1(_self));
  }, ["self"]),
  "{ :self | boole(allEqual(self)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "leafCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_collect_2(
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
            return _leafCount_1(_each);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 1;
          }, []),
        );
      }, ["each"]),
    ));
  }, ["self"]),
  "{ :self | sum(collect(self, { :each | if(isCollection(each), { leafCount(each) }, { 1 }) })) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "maxIfEmpty",
  ["self", "aBlock:/0"],
  sl.annotateFunction(function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
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
        return _aBlock_0();
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _max_1(_self);
      }, []),
    );
  }, ["self", "aBlock:/0"]),
  "{ :self :aBlock:/0 | ifEmpty(self, { aBlock() }, { max(self) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "minIfEmpty",
  ["self", "aBlock:/0"],
  sl.annotateFunction(function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
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
        return _aBlock_0();
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _min_1(_self);
      }, []),
    );
  }, ["self", "aBlock:/0"]),
  "{ :self :aBlock:/0 | ifEmpty(self, { aBlock() }, { min(self) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "normalizeRange",
  ["self", "minima", "maxima"],
  sl.annotateFunction(function (_self, _minima, _maxima) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _minima, _maxima";
      throw new Error(errorMessage);
    } /* Statements */
    return _rescale_5(_self, _min_1(_self), _max_1(_self), _minima, _maxima);
  }, ["self", "minima", "maxima"]),
  "{ :self :minima :maxima | rescale(self,min(self), max(self), minima, maxima) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "normalizeSignal",
  ["self", "minima", "maxima"],
  sl.annotateFunction(function (_self, _minima, _maxima) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _minima, _maxima";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _max_2(_abs_1(_min_1(_self)), _abs_1(_max_1(_self)));
    /* Statements */
    return _rescale_5(_self, _negated_1(_x), _x, _minima, _maxima);
  }, ["self", "minima", "maxima"]),
  "{ :self :minima :maxima | let x = max(abs(min(self)),abs(max(self))); rescale(self,negated(x), x, minima, maxima) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "normalizeSignal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _normalizeSignal_3(_self, -1, 1);
  }, ["self"]),
  "{ :self | normalizeSignal(self,-1, 1) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "normalizeSum",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_self, _sum_1(_self));
  }, ["self"]),
  "{ :self | /(self, sum(self)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "not",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _not_1);
  }, ["self"]),
  "{ :self | collect(self,not:/1) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "notEmpty",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_isEmpty_1(_self));
  }, ["self"]),
  "{ :self | not(isEmpty(self)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "nub",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _nubBy_2(_self, _equalsSign_2);
  }, ["self"]),
  "{ :self | nubBy(self,=) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "nubBy",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSignEqualsSign_2(_aBlock_2, _equalsSignEqualsSign_2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _nubIdentical_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _seen = [];
        /* Statements */
        return _select_2(
          _self,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _includesBy_3(_seen, _each, _aBlock_2),
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
      }, []),
    );
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | if((==(aBlock:/2, equalsSignEqualsSign:/2)), { nubIdentical(self) }, { let seen = []; select(self, { :each | if(includesBy(seen,each, aBlock:/2), { false }, { add(seen,each); true }) }) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "nubIdentical",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _seen = _IdentitySet_0();
    /* Statements */
    return _select_2(
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
            _include_2(_seen, _each);
            return true;
          }, []),
        );
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self | let seen = IdentitySet(); select(self, { :each | if(includes(seen,each), { false }, { include(seen,each); true }) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "ofSize",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    _ifFalse_2(
      _equalsSign_2(_size_1(_self), _aNumber),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Collection>>ofSize");
      }, []),
    );
    return _self;
  }, ["self", "aNumber"]),
  "{ :self :aNumber | ifFalse((=(size(self), aNumber)), { error(self,'@Collection>>ofSize') }); self }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "one",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
        return _one_1(_each);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self | collect(self, { :each | one(each) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "powerSetDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
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
    _toDo_3(
      0,
      _hyphenMinus_2(_size, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _subset = _new_1(_species_1(_self));
        /* Statements */
        _withIndexDo_2(
          _powersOfTwo,
          sl.annotateFunction(function (_each, _j) {
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
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _include_2(_subset, _at_2(_list, _j));
              }, []),
            );
          }, ["each", "j"]),
        );
        return _aBlock_1(_subset);
      }, ["i"]),
    );
    return _self;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let size = ^(2, size(self)); let powersOfTwo = ^(2, upOrDownTo(0, (-(size(self), 1)))); let list = asList(self); toDo(0, -(size, 1), { :i | let subset = new(species(self)); withIndexDo(powersOfTwo, { :each :j | ifTrue((~=(%(//(i, each), 2), 0)), { include(subset,at(list, j)) }) }); aBlock(subset) }); self }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "powerSet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _powerSetDo_2(
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
  "{ :self | let answer = []; powerSetDo(self, { :each | add(answer,each) }); answer }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "pseudoSlotNameList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["size"];
  }, ["self"]),
  "{ :self | ['size'] }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "randomChoice",
  ["self", "r", "shape"],
  sl.annotateFunction(function (_self, _r, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _r, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _randomIndex = _nextRandomInteger_3(_r, 1, _size_1(_self));
        let _index = 1;
        /* Statements */
        return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _return_1";
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
              _ifTrue_2(
                _equalsSign_2(_index, _randomIndex),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _return_1(_each);
                }, []),
              );
              return _index = _plusSign_2(_index, 1);
            }, ["each"]),
          );
        }, ["return:/1"]));
      }, []),
      _shape,
    );
  }, ["self", "r", "shape"]),
  "{ :self :r :shape | !({ let randomIndex = nextRandomInteger(r,1, size(self)); let index = 1; valueWithReturn({ :return:/1 | do(self, { :each | ifTrue((=(index, randomIndex)), { return(each) }); index := +(index, 1) }) }) }, shape) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "rankedMax",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_n, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _rankedMin_2(_self, _negated_1(_n));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _m = _size_1(_self);
        /* Statements */
        return _quantile_2(
          _self,
          _solidus_2(_plusSign_2(_hyphenMinus_2(_m, _n), 1), _m),
        );
      }, []),
    );
  }, ["self", "n"]),
  "{ :self :n | if((<(n, 0)), { rankedMin(self,negated(n)) }, { let m = size(self); quantile(self,/((+(-(m, n), 1)), m)) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "rankedMin",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_n, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _rankedMax_2(_self, _negated_1(_n));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _quantile_2(_self, _solidus_2(_n, _size_1(_self)));
      }, []),
    );
  }, ["self", "n"]),
  "{ :self :n | if((<(n, 0)), { rankedMax(self,negated(n)) }, { quantile(self,/(n, size(self))) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
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
      sl.annotateFunction(function (_element) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _element";
          throw new Error(errorMessage);
        } /* Statements */
        return _not_1(_aBlock_1(_element));
      }, ["element"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | select(self, { :element | not(aBlock(element)) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "rescale",
  ["self", "min", "max", "ymin", "ymax"],
  sl.annotateFunction(function (_self, _min, _max, _ymin, _ymax) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _self, _min, _max, _ymin, _ymax";
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
        return _rescale_5(_each, _min, _max, _ymin, _ymax);
      }, ["each"]),
    );
  }, ["self", "min", "max", "ymin", "ymax"]),
  "{ :self :min :max :ymin :ymax | collect(self, { :each | rescale(each,min, max, ymin, ymax) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "rescale",
  ["self", "min", "max"],
  sl.annotateFunction(function (_self, _min, _max) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _min, _max";
      throw new Error(errorMessage);
    } /* Statements */
    return _rescale_5(_self, _min, _max, 0, 1);
  }, ["self", "min", "max"]),
  "{ :self :min :max | rescale(self,min, max, 0, 1) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "rescale",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _rescale_5(_self, _deepMin_1(_self), _deepMax_1(_self), 0, 1);
  }, ["self"]),
  "{ :self | rescale(self,deepMin(self), deepMax(self), 0, 1) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "select",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _aBlock_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _include_2(_answer, _each);
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let answer = new(species(self)); do(self, { :each | ifTrue(aBlock(each), { include(answer,each) }) }); answer }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "selectThenCollect",
  ["self", "selectBlock:/1", "collectBlock:/1"],
  sl.annotateFunction(function (_self, _selectBlock_1, _collectBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _selectBlock_1, _collectBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _selectThenDo_3(
      _self,
      _selectBlock_1,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _collectBlock_1(_each));
      }, ["each"]),
    );
    return _answer;
  }, ["self", "selectBlock:/1", "collectBlock:/1"]),
  "{ :self :selectBlock:/1 :collectBlock:/1 | let answer = new(species(self)); selectThenDo(self, selectBlock:/1, { :each | add(answer,collectBlock(each)) }); answer }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "subsets",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _powerSetDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _aBlock_1(_each),
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
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let answer = []; powerSetDo(self, { :each | ifTrue(aBlock(each), { add(answer,each) }) }); answer }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "sum",
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
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _reduce_2(_self, _plusSign_2);
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isEmpty(self), { 0 }, { reduce(self,+) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "symmetricDifference",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _union_2(
      _difference_2(_self, _aCollection),
      _difference_2(_aCollection, _self),
    );
  }, ["self", "aCollection"]),
  "{ :self :aCollection | union(difference(self,aCollection),difference(aCollection,self)) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "take",
  ["self", "maxNumberOfElements"],
  sl.annotateFunction(function (_self, _maxNumberOfElements) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _maxNumberOfElements";
      throw new Error(errorMessage);
    } /* Statements */
    return _any_2(_self, _min_2(_maxNumberOfElements, _size_1(_self)));
  }, ["self", "maxNumberOfElements"]),
  "{ :self :maxNumberOfElements | any(self,min(maxNumberOfElements,size(self))) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "tally",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
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
        return _detectIndexIfFoundIfNone_4(
          _answer,
          sl.annotateFunction(function (_item) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _item";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_2(_key_1(_item), _each);
          }, ["item"]),
          sl.annotateFunction(function (_index) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _index";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _association = _at_2(_answer, _index);
            /* Statements */
            return _value_2(
              _association,
              _plusSign_2(_value_1(_association), 1),
            );
          }, ["index"]),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _hyphenMinusGreaterThanSign_2(_each, 1));
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | let answer = []; do(self, { :each | detectIndexIfFoundIfNone(answer, { :item | aBlock(key(item), each) }, { :index | let association = at(answer, index); value(association, +(value(association), 1)) }, { add(answer,->(each, 1)) }) }); answer }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "tally",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _tally_2(_self, _equalsSign_2);
  }, ["self"]),
  "{ :self | tally(self,=) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "threshold",
  ["self", "epsilon"],
  sl.annotateFunction(function (_self, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _epsilon";
      throw new Error(errorMessage);
    } /* Statements */
    return _deepCollect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSign_2(_abs_1(_each), _epsilon),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _zero_1(_each);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _each;
          }, []),
        );
      }, ["each"]),
    );
  }, ["self", "epsilon"]),
  "{ :self :epsilon | deepCollect(self, { :each | if((<(abs(each), epsilon)), { zero(each) }, { each }) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "unionBy",
  ["self", "aCollection", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aCollection, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _asSet_2(_self, _aBlock_2);
    /* Statements */
    _includeAll_2(_answer, _aCollection);
    return _answer;
  }, ["self", "aCollection", "aBlock:/2"]),
  "{ :self :aCollection :aBlock:/2 | let answer = asSet(self,aBlock:/2); includeAll(answer,aCollection); answer }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "union",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _unionBy_3(_self, _aCollection, _equalsSign_2);
  }, ["self", "aCollection"]),
  "{ :self :aCollection | unionBy(self,aCollection, =) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "withLevelCollect",
  ["self", "aBlock:/2", "level"],
  sl.annotateFunction(function (_self, _aBlock_2, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_2, _level";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _type = _typeOf_1(_self);
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
          _equalsSign_2(_typeOf_1(_each), _type),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_2(
              _withLevelCollect_3(_each, _aBlock_2, _plusSign_2(_level, 1)),
              _level,
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_2(_each, _level);
          }, []),
        );
      }, ["each"]),
    );
  }, ["self", "aBlock:/2", "level"]),
  "{ :self :aBlock:/2 :level | let type = typeOf(self); collect(self, { :each | if((=(typeOf(each), type)), { aBlock(withLevelCollect(each,aBlock:/2, +(level, 1)), level) }, { aBlock(each, level) }) }) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "withLevelCollect",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_withLevelCollect_3(_self, _aBlock_2, 1), 0);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | aBlock(withLevelCollect(self,aBlock:/2, 1), 0) }",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "zero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
        return _zero_1(_each);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self | collect(self, { :each | zero(each) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Collection",
  "asCollection",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_self];
  }, ["self"]),
  "{ :self | [self] }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Collection",
  "depth",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 1;
  }, ["self"]),
  "{ :self | 1 }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Collection",
  "isAtom",
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

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Collection",
  "isCollection",
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
