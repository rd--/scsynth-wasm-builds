sl.addTrait("Bag", "Bag");

sl.addMethodToExistingTrait(
  "Bag",
  "Bag",
  "equalsSign",
  ["self", "aBag"],
  sl.annotateFunction(function (_self, _aBag) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBag";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _equalsSign_2(_typeOf_1(_self), _typeOf_1(_aBag)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_size_1(_self), _size_1(_aBag)),
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
              _associationsDo_2(
                _contents_1(_self),
                sl.annotateFunction(function (_assoc) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _assoc";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _ifFalse_2(
                    _equalsSign_2(
                      _occurrencesOf_2(_aBag, _key_1(_assoc)),
                      _value_1(_assoc),
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
                }, ["assoc"]),
              );
              return true;
            }, ["return:/1"]));
          }, []),
        );
      }, []),
    );
  }, ["self", "aBag"]),
  "{ :self :aBag | &((=(typeOf(self), typeOf(aBag))), { &(=(size(self), size(aBag)), { valueWithReturn({ :return:/1 | associationsDo(contents(self), { :assoc | ifFalse((=(occurrencesOf(aBag,key(assoc)), value(assoc))), { return(false) }) }); true }) }) }) }",
);

sl.addMethodToExistingTrait(
  "Bag",
  "Bag",
  "add",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _addWithOccurrences_3(_self, _anObject, 1);
  }, ["self", "anObject"]),
  "{ :self :anObject | addWithOccurrences(self,anObject, 1) }",
);

sl.addMethodToExistingTrait(
  "Bag",
  "Bag",
  "addWithOccurrences",
  ["self", "anObject", "anInteger"],
  sl.annotateFunction(function (_self, _anObject, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _basicAddWithOccurrences_3(_self, _anObject, _anInteger);
  }, ["self", "anObject", "anInteger"]),
  "{ :self :anObject :anInteger | basicAddWithOccurrences(self,anObject, anInteger) }",
);

sl.addMethodToExistingTrait(
  "Bag",
  "Bag",
  "asBag",
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
  "Bag",
  "Bag",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
        return _add_2(_answer, _each);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = []; do(self, { :each | add(answer,each) }); answer }",
);

sl.addMethodToExistingTrait(
  "Bag",
  "Bag",
  "associations",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _associations_1(_contents_1(_self));
  }, ["self"]),
  "{ :self | associations(contents(self)) }",
);

sl.addMethodToExistingTrait(
  "Bag",
  "Bag",
  "asSet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asSet_1(_indices_1(_contents_1(_self)));
  }, ["self"]),
  "{ :self | asSet(indices(contents(self))) }",
);

sl.addMethodToExistingTrait(
  "Bag",
  "Bag",
  "basicAddWithOccurrences",
  ["self", "anObject", "anInteger"],
  sl.annotateFunction(function (_self, _anObject, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _dictionary = _contents_1(_self);
    /* Statements */
    _if_3(
      _includesIndex_2(_dictionary, _anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _dictionary,
          _anObject,
          _plusSign_2(_at_2(_dictionary, _anObject), _anInteger),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_dictionary, _anObject, _anInteger);
      }, []),
    );
    return _anObject;
  }, ["self", "anObject", "anInteger"]),
  "{ :self :anObject :anInteger | let dictionary = contents(self); if(includesIndex(dictionary,anObject), { atPut(dictionary, anObject, +(at(dictionary, anObject), anInteger)) }, { atPut(dictionary, anObject, anInteger) }); anObject }",
);

sl.addMethodToExistingTrait(
  "Bag",
  "Bag",
  "cumulativeCounts",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _s = _solidus_2(_size_1(_self), 100.0);
    let _n = 0;
    /* Statements */
    return _collect_2(
      _sortedCounts_1(_self),
      sl.annotateFunction(function (_a) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _a";
          throw new Error(errorMessage);
        } /* Statements */
        _n = _plusSign_2(_n, _key_1(_a));
        return _hyphenMinusGreaterThanSign_2(
          _solidus_2(_n, _roundTo_2(_s, 0.1)),
          _value_1(_a),
        );
      }, ["a"]),
    );
  }, ["self"]),
  "{ :self | let s = /(size(self), 100.0); let n = 0; collect(sortedCounts(self), { :a | n := +(n, key(a)); ->((/(n, roundTo(s,0.1))), value(a)) }) }",
);

sl.addMethodToExistingTrait(
  "Bag",
  "Bag",
  "do",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    _associationsDo_2(
      _contents_1(_self),
      sl.annotateFunction(function (_assoc) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _assoc";
          throw new Error(errorMessage);
        } /* Statements */
        return _timesRepeat_2(
          _value_1(_assoc),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_1(_key_1(_assoc));
          }, []),
        );
      }, ["assoc"]),
    );
    return _self;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | associationsDo(contents(self), { :assoc | timesRepeat(value(assoc), { aBlock(key(assoc)) }) }); self }",
);

sl.addMethodToExistingTrait(
  "Bag",
  "Bag",
  "includes",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesIndex_2(_contents_1(_self), _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | includesIndex(contents(self),anObject) }",
);

sl.addMethodToExistingTrait(
  "Bag",
  "Bag",
  "keySort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortedElements_1(_self);
  }, ["self"]),
  "{ :self | sortedElements(self) }",
);

sl.addMethodToExistingTrait(
  "Bag",
  "Bag",
  "max",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(_indices_1(_contents_1(_self)), _max_2);
  }, ["self"]),
  "{ :self | reduce(indices(contents(self)),max:/2) }",
);

sl.addMethodToExistingTrait(
  "Bag",
  "Bag",
  "min",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(_indices_1(_contents_1(_self)), _min_2);
  }, ["self"]),
  "{ :self | reduce(indices(contents(self)),min:/2) }",
);

sl.addMethodToExistingTrait(
  "Bag",
  "Bag",
  "occurrencesOf",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsent_3(
      _contents_1(_self),
      _anObject,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | atIfAbsent(contents(self), anObject, { 0 }) }",
);

sl.addMethodToExistingTrait(
  "Bag",
  "Bag",
  "postCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _contents_2(_self, _copy_1(_contents_1(_self)));
  }, ["self"]),
  "{ :self | contents(self, copy(contents(self))) }",
);

sl.addMethodToExistingTrait(
  "Bag",
  "Bag",
  "randomChoice",
  ["self", "r", "shape"],
  sl.annotateFunction(function (_self, _r, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _r, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _e = _keys_1(_contents_1(_self));
    let _w = _values_1(_contents_1(_self));
    /* Statements */
    return _randomWeightedChoice_4(_r, _e, _w, _shape);
  }, ["self", "r", "shape"]),
  "{ :self :r :shape | let e = keys(contents(self)); let w = values(contents(self)); randomWeightedChoice(r,e, w, shape) }",
);

sl.addMethodToExistingTrait(
  "Bag",
  "Bag",
  "removeIfAbsent",
  ["self", "oldObject", "whenAbsent:/0"],
  sl.annotateFunction(function (_self, _oldObject, _whenAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _oldObject, _whenAbsent_0";
      throw new Error(errorMessage);
    } /* Statements */
    _if_3(
      _includes_2(_self, _oldObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _count = _at_2(_contents_1(_self), _oldObject);
        /* Statements */
        return _if_3(
          _equalsSign_2(_count, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _removeKey_2(_contents_1(_self), _oldObject);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(
              _contents_1(_self),
              _oldObject,
              _hyphenMinus_2(_count, 1),
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
        return _whenAbsent_0();
      }, []),
    );
    return _oldObject;
  }, ["self", "oldObject", "whenAbsent:/0"]),
  "{ :self :oldObject :whenAbsent:/0 | if(includes(self,oldObject), { let count = at(contents(self), oldObject); if((=(count, 1)), { removeKey(contents(self),oldObject) }, { atPut(contents(self), oldObject, -(count, 1)) }) }, { whenAbsent() }); oldObject }",
);

sl.addMethodToExistingTrait(
  "Bag",
  "Bag",
  "removeAll",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeAll_1(_contents_1(_self));
  }, ["self"]),
  "{ :self | removeAll(contents(self)) }",
);

sl.addMethodToExistingTrait(
  "Bag",
  "Bag",
  "setContents",
  ["self", "aDictionary"],
  sl.annotateFunction(function (_self, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDictionary";
      throw new Error(errorMessage);
    } /* Statements */
    return _contents_2(_self, _aDictionary);
  }, ["self", "aDictionary"]),
  "{ :self :aDictionary | contents(self, aDictionary) }",
);

sl.addMethodToExistingTrait(
  "Bag",
  "Bag",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _tally = 0;
    /* Statements */
    _do_2(
      _contents_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _tally = _plusSign_2(_tally, _each);
      }, ["each"]),
    );
    return _tally;
  }, ["self"]),
  "{ :self | let tally = 0; do(contents(self), { :each | tally := +(tally, each) }); tally }",
);

sl.addMethodToExistingTrait(
  "Bag",
  "Bag",
  "sortedCounts",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _associationsDo_2(
      _contents_1(_self),
      sl.annotateFunction(function (_anAssociation) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _anAssociation";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(
          _answer,
          _hyphenMinusGreaterThanSign_2(
            _value_1(_anAssociation),
            _key_1(_anAssociation),
          ),
        );
      }, ["anAssociation"]),
    );
    return _sortBy_2(_answer, _greaterThanSignEqualsSign_2);
  }, ["self"]),
  "{ :self | let answer = []; associationsDo(contents(self), { :anAssociation | add(answer,->(value(anAssociation), key(anAssociation))) }); sortBy(answer,>=) }",
);

sl.addMethodToExistingTrait(
  "Bag",
  "Bag",
  "sortedElements",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortOn_2(_associations_1(_contents_1(_self)), _key_1);
  }, ["self"]),
  "{ :self | sortOn(associations(contents(self)),key:/1) }",
);

sl.addMethodToExistingTrait(
  "Bag",
  "Bag",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(_storeString_1(_contents_1(_self)), "."),
      _typeOf_1(_self),
    );
  }, ["self"]),
  "{ :self | ++(++(storeString(contents(self)), '.'), typeOf(self)) }",
);

sl.addMethodToExistingTrait(
  "Bag",
  "Bag",
  "sum",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
        return _error_2(_self, "sum: empty");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _sum = 0;
        /* Statements */
        _withIndexDo_2(
          _contents_1(_self),
          sl.annotateFunction(function (_count, _value) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _count, _value";
              throw new Error(errorMessage);
            } /* Statements */
            return _sum = _plusSign_2(_sum, _asterisk_2(_value, _count));
          }, ["count", "value"]),
        );
        return _sum;
      }, []),
    );
  }, ["self"]),
  "{ :self | ifEmpty(self, { error(self,'sum: empty') }, { let sum = 0; withIndexDo(contents(self), { :count :value | sum := +(sum, (*(value, count))) }); sum }) }",
);

sl.addMethodToExistingTrait(
  "Bag",
  "Bag",
  "valuesAndCounts",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _contents_1(_self);
  }, ["self"]),
  "{ :self | contents(self) }",
);

sl.addMethodToExistingTrait(
  "Bag",
  "Bag",
  "valueSort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortOn_2(_associations_1(_self), _value_1);
  }, ["self"]),
  "{ :self | sortOn(associations(self),value:/1) }",
);

sl.addType(
  false,
  "Bag",
  "Bag",
  [
    "Object",
    "Iterable",
    "Collection",
    "Extensible",
    "Removable",
    "Unordered",
    "Bag",
  ],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Bag",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "Bag",
);

sl.copyTraitMethodsToType(
  "Collection",
  "Bag",
);

sl.copyTraitMethodsToType(
  "Extensible",
  "Bag",
);

sl.copyTraitMethodsToType(
  "Removable",
  "Bag",
);

sl.copyTraitMethodsToType(
  "Unordered",
  "Bag",
);

sl.copyTraitMethodsToType(
  "Bag",
  "Bag",
);

sl.addMethodToExistingType(
  "Bag",
  "Bag",
  "species",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Bag_0;
  }, ["self"]),
  "{ :self | Bag:/0 }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "Bag",
  "Bag",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _Bag_1(_Dictionary_0());
  }, []),
  "{ Bag(Dictionary()) }",
);

sl.extendTypeOrTraitWithMethod(
  "Dictionary",
  "Bag",
  "Bag",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newBag_0(), _self);
  }, ["self"]),
  "{ :self | initializeSlots(newBag(),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Bag",
  "asBag",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _Bag_0();
    /* Statements */
    _addAll_2(_answer, _self);
    return _answer;
  }, ["self"]),
  "{ :self | let answer = Bag(); addAll(answer,self); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Bag",
  "histogramOf",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _Bag_0();
    /* Statements */
    _collectInto_3(_self, _aBlock_1, _answer);
    return _answer;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let answer = Bag(); collectInto(self,aBlock:/1, answer); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Bag",
  "commonest",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _byCount = _sortedCounts_1(_asBag_1(_self));
    let _count = _key_1(_first_1(_byCount));
    /* Statements */
    return _collect_2(
      _select_2(
        _byCount,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_key_1(_each), _count);
        }, ["each"]),
      ),
      _value_1,
    );
  }, ["self"]),
  "{ :self | let byCount = sortedCounts(asBag(self)); let count = key(first(byCount)); collect(select(byCount, { :each | =(key(each), count) }),value:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Bag",
  "counts",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortedElements_1(_asBag_1(_self));
  }, ["self"]),
  "{ :self | sortedElements(asBag(self)) }",
);
