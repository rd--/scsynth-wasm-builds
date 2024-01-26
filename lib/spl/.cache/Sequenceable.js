/* {- Require: SmallFloat -} */

sl.addTrait("Sequenceable", "Sequenceable");

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "equals",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _equalBy_3(_self, _anObject, _equals_2);
  },
  "{ :self :anObject |\n\t\tself.equalBy(anObject, =)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "tilde",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _equalBy_3(_self, _anObject, _tilde_2);
  },
  "{ :self :anObject |\n\t\tself.equalBy(anObject, ~)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "plusPlus",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _copyReplaceFromToWith_4(
      _self,
      _plus_2(_size_1(_self), 1),
      _size_1(_self),
      _aSequence,
    );
  },
  "{ :self :aSequence |\n\t\tself.copyReplaceFromToWith(\n\t\t\tself.size + 1,\n\t\t\tself.size,\n\t\t\taSequence\n\t\t)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "commercialAtTimes",
  ["self", "indexArray"],
  function (_self, _indexArray) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indexArray";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _atAll_2(_self, _indexArray);
  },
  "{ :self :indexArray |\n\t\tself.atAll(indexArray)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "adaptToCollectionAndApply",
  ["self", "rcvr", "aBlock:/2"],
  function (_self, _rcvr, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rcvr, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isSequenceable_1(_rcvr), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _withCollect_3(_rcvr, _self, function (_rcvrItem, _selfItem) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _rcvrItem, _selfItem";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _aBlock_2(_rcvrItem, _selfItem);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(
        _self,
        "@Sequence: only sequenceable collections may be combined arithmetically",
      );
    });
  },
  "{ :self :rcvr :aBlock:/2 |\n\t\trcvr.isSequenceable.if {\n\t\t\trcvr.withCollect(self) { :rcvrItem :selfItem |\n\t\t\t\taBlock(rcvrItem, selfItem)\n\t\t\t}\n\t\t} {\n\t\t\tself.error('@Sequence: only sequenceable collections may be combined arithmetically')\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "allButFirst",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _allButFirst_2(_self, 1);
  },
  "{ :self |\n\t\tself.allButFirst(1)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "allButFirst",
  ["self", "n"],
  function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _copyFromTo_3(_self, _plus_2(_n, 1), _size_1(_self));
  },
  "{ :self :n |\n\t\tself.copyFromTo(n + 1, self.size)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "allButFirstAndLast",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _allButFirstAndLast_2(_self, 1);
  },
  "{ :self |\n\t\tself.allButFirstAndLast(1)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "allButFirstAndLast",
  ["self", "n"],
  function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _copyFromTo_3(_self, _plus_2(_n, 1), _minus_2(_size_1(_self), _n));
  },
  "{ :self :n |\n\t\tself.copyFromTo(n + 1, self.size - n)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "allButFirstDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _toDo_3(2, _size_1(_self), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_at_2(_self, _index));
    });
  },
  "{ :self :aBlock:/1 |\n\t\t2.toDo(self.size) { :index |\n\t\t\taBlock(self[index])\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "allButLast",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _allButLast_2(_self, 1);
  },
  "{ :self |\n\t\tself.allButLast(1)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "allButLast",
  ["self", "n"],
  function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _copyFromTo_3(_self, 1, _minus_2(_size_1(_self), _n));
  },
  "{ :self :n |\n\t\tself.copyFromTo(1, self.size - n)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "allButLastDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _toDo_3(1, _minus_2(_size_1(_self), 1), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_at_2(_self, _index));
    });
  },
  "{ :self :aBlock:/1 |\n\t\t1.toDo(self.size - 1) { :index |\n\t\t\taBlock(self[index])\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "asDigitsAtInDo",
  ["self", "anInteger", "aCollection", "aBlock:/1"],
  function (_self, _anInteger, _aCollection, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _anInteger, _aCollection, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _atPut_3(_aCollection, _anInteger, _each);
      return _if_3(_equals_2(_anInteger, _size_1(_aCollection)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _aBlock_1(_aCollection);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _asDigitsAtInDo_4(
          _self,
          _plus_2(_anInteger, 1),
          _aCollection,
          _aBlock_1,
        );
      });
    });
  },
  "{ :self :anInteger :aCollection :aBlock:/1 |\n\t\tself.do { :each |\n\t\t\taCollection[anInteger] := each;\n\t\t\t(anInteger = aCollection.size).if {\n\t\t\t\taBlock(aCollection)\n\t\t\t} {\n\t\t\t\tself.asDigitsAtInDo(anInteger + 1, aCollection, aBlock:/1)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "asDigitsToPowerDo",
  ["self", "anInteger", "aBlock:/1"],
  function (_self, _anInteger, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _aCollection = _Array_1(_anInteger);
    /* Statements */
    return _asDigitsAtInDo_4(_self, 1, _aCollection, _aBlock_1);
  },
  "{ :self :anInteger :aBlock:/1 |\n\t\tlet aCollection = Array(anInteger);\n\t\tself.asDigitsAtInDo(1, aCollection, aBlock:/1)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "atAll",
  ["self", "indexArray"],
  function (_self, _indexArray) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indexArray";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _ofSize_2(_species_1(_self), _size_1(_indexArray));
    /* Statements */
    _indicesDo_2(_indexArray, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(
        _answer,
        _index,
        _at_2(_self, _at_2(_indexArray, _index)),
      );
    });
    return _answer;
  },
  "{ :self :indexArray |\n\t\tlet answer = self.species.ofSize(indexArray.size);\n\t\tindexArray.indicesDo { :index |\n\t\t\tanswer[index] := self[indexArray[index]]\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "atAllPut",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _size = _size_1(_self);
    /* Statements */
    _if_3(_greaterThan_2(_size, 50), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _fromToPut_4(_self, 1, _size, _anObject);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _indicesDo_2(_self, function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _atPut_3(_self, _index, _anObject);
      });
    });
    return _anObject;
  },
  "{ :self :anObject |\n\t\tlet size = self.size;\n\t\t(size > 50).if {\n\t\t\tself.fromToPut(1, size, anObject)\n\t\t} {\n\t\t\tself.indicesDo { :index |\n\t\t\t\tself[index] := anObject\n\t\t\t}\n\t\t};\n\t\tanObject\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "atFold",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_self, _foldIndex_2(_index, _size_1(_self)));
  },
  "{ :self :index |\n\t\tself[index.foldIndex(self.size)]\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "atLastPut",
  ["self", "indexFromEnd", "anObject"],
  function (_self, _indexFromEnd, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _indexFromEnd, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _atPut_3(
      _self,
      _minus_2(_plus_2(_size_1(_self), 1), _indexFromEnd),
      _anObject,
    );
  },
  "{ :self :indexFromEnd :anObject |\n\t\tself[self.size + 1 - indexFromEnd] := anObject\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "atPin",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_self, _pinnedIndex_2(_self, _index));
  },
  "{ :self :index |\n\t\tself[self.pinnedIndex(index)]\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "atPinPut",
  ["self", "index", "value"],
  function (_self, _index, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _value";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _atPut_3(_self, _pinnedIndex_2(_self, _index), _value);
  },
  "{ :self :index :value |\n\t\tself.atPut(self.pinnedIndex(index), value)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "atWrap",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(
      _self,
      _plus_2(_modulo_2(_minus_2(_index, 1), _size_1(_self)), 1),
    );
  },
  "{ :self :index |\n\t\tself[index - 1 % self.size + 1]\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "atWrapPut",
  ["self", "index", "anObject"],
  function (_self, _index, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _atPut_3(
      _self,
      _plus_2(_modulo_2(_minus_2(_index, 1), _size_1(_self)), 1),
      _anObject,
    );
  },
  "{ :self :index :anObject |\n\t\tself[index - 1 % self.size + 1] := anObject\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "atRandomUsing",
  ["self", "random"],
  function (_self, _random) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _random";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_self, _nextRandomInteger_2(_random, _size_1(_self)));
  },
  "{ :self :random |\n\t\tself[random.nextRandomInteger(self.size)]\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "atRandom",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_self, _nextRandomInteger_2(_system, _size_1(_self)));
  },
  "{ :self |\n\t\tself[system.nextRandomInteger(self.size)]\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "beginsWith",
  ["self", "sequence"],
  function (_self, _sequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sequence";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _sequenceSize = _size_1(_sequence);
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _ifTrue_2(_lessThan_2(_size_1(_self), _sequenceSize), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _return_1(false);
      });
      _toDo_3(1, _sequenceSize, function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _ifFalse_2(
          _equals_2(_at_2(_sequence, _index), _at_2(_self, _index)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _return_1(false);
          },
        );
      });
      return true;
    });
  },
  "{ :self :sequence |\n\t\tlet sequenceSize = sequence.size;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t(self.size < sequenceSize).ifTrue {\n\t\t\t\tfalse.return\n\t\t\t};\n\t\t\t1.toDo(sequenceSize) { :index |\n\t\t\t\t(sequence[index] = self[index]).ifFalse {\n\t\t\t\t\tfalse.return\n\t\t\t\t}\n\t\t\t};\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "beginsWithAnyOf",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _anySatisfy_2(_aCollection, function (_prefix) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _prefix";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _beginsWith_2(_self, _prefix);
    });
  },
  "{ :self :aCollection |\n\t\taCollection.anySatisfy { :prefix |\n\t\t\tself.beginsWith(prefix)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "collect",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _ofSize_2(_species_1(_self), _size_1(_self));
    /* Statements */
    _indicesDo_2(_self, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(_answer, _index, _aBlock_1(_at_2(_self, _index)));
    });
    return _answer;
  },
  "{ :self :aBlock:/1 |\n\t\tlet answer = self.species.ofSize(self.size);\n\t\tself.indicesDo { :index |\n\t\t\tanswer[index] := aBlock(self[index])\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "combinationsAtATimeDo",
  ["self", "kk", "aBlock:/1"],
  function (_self, _kk, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _kk, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _aCollection = _Array_1(_kk);
    /* Statements */
    return _combinationsAtInAfterDo_5(_self, 1, _aCollection, 0, _aBlock_1);
  },
  "{ :self :kk :aBlock:/1 |\n\t\tlet aCollection = Array(kk);\n\t\tself.combinationsAtInAfterDo(1, aCollection, 0, aBlock:/1)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "combinationsAtInAfterDo",
  ["self", "j", "aCollection", "n", "aBlock:/1"],
  function (_self, _j, _aCollection, _n, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _j, _aCollection, _n, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _toDo_3(_plus_2(_n, 1), _size_1(_self), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _atPut_3(_aCollection, _j, _at_2(_self, _index));
      return _if_3(_equals_2(_j, _size_1(_aCollection)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _aBlock_1(_aCollection);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _combinationsAtInAfterDo_5(
          _self,
          _plus_2(_j, 1),
          _aCollection,
          _index,
          _aBlock_1,
        );
      });
    });
  },
  "{ :self :j :aCollection :n :aBlock:/1 |\n\t\t(n + 1).toDo(self.size) { :index |\n\t\t\taCollection[j] := self[index];\n\t\t\t(j = aCollection.size).if {\n\t\t\t\taBlock(aCollection)\n\t\t\t} {\n\t\t\t\tself.combinationsAtInAfterDo(j + 1, aCollection, index, aBlock:/1)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "concatenation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answerSize = _injectInto_3(_self, 0, function (_sum, _each) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _sum, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _plus_2(_sum, _size_1(_each));
    });
    let _answer = _ofSize_2(_species_1(_self), _answerSize);
    let _index = 1;
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _do_2(_each, function (_item) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _item";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _atPut_3(_answer, _index, _item);
        return _index = _plus_2(_index, 1);
      });
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answerSize = self.injectInto(0) { :sum :each |\n\t\t\tsum + each.size\n\t\t};\n\t\tlet answer = self.species.ofSize(answerSize);\n\t\tlet index = 1;\n\t\tself.do { :each |\n\t\t\teach.do { :item |\n\t\t\t\tanswer[index] := item;\n\t\t\t\tindex := index + 1\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "copyFromTo",
  ["self", "start", "stop"],
  function (_self, _start, _stop) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _start, _stop";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _toAsCollect_4(
      1,
      _plus_2(_minus_2(_stop, _start), 1),
      _species_1(_self),
      function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _at_2(_self, _minus_2(_plus_2(_index, _start), 1));
      },
    );
  },
  "{ :self :start :stop |\n\t\t1.toAsCollect(stop - start + 1, self.species) { :index |\n\t\t\tself[index + start - 1]\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "copyReplaceFromToWith",
  ["self", "start", "stop", "aCollection"],
  function (_self, _start, _stop, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _start, _stop, _aCollection";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _end = _plus_2(_minus_2(_start, 1), _size_1(_aCollection));
    let _newSize = _minus_2(_plus_2(_size_1(_self), _end), _stop);
    let _answer = _ofSize_2(_species_1(_self), _newSize);
    /* Statements */
    _ifTrue_2(_greaterThan_2(_start, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _replaceFromToWithStartingAt_5(
        _answer,
        1,
        _minus_2(_start, 1),
        _self,
        1,
      );
    });
    _ifTrue_2(_lessThanEquals_2(_start, _end), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _replaceFromToWithStartingAt_5(
        _answer,
        _start,
        _end,
        _aCollection,
        1,
      );
    });
    _ifTrue_2(_lessThan_2(_end, _newSize), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _replaceFromToWithStartingAt_5(
        _answer,
        _plus_2(_end, 1),
        _newSize,
        _self,
        _plus_2(_stop, 1),
      );
    });
    return _answer;
  },
  "{ :self :start :stop :aCollection |\n\t\tlet end = start - 1 + aCollection.size;\n\t\tlet newSize = self.size + end - stop;\n\t\tlet answer = self.species.ofSize(newSize);\n\t\t(start > 1).ifTrue {\n\t\t\tanswer.replaceFromToWithStartingAt(1, start - 1, self, 1)\n\t\t};\n\t\t(start <= end).ifTrue {\n\t\t\tanswer.replaceFromToWithStartingAt(start, end, aCollection, 1)\n\t\t};\n\t\t(end < newSize).ifTrue {\n\t\t\tanswer.replaceFromToWithStartingAt(end + 1, newSize, self, stop + 1)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "copyUpThrough",
  ["self", "anElement"],
  function (_self, _anElement) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anElement";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _index = _indexOf_2(_self, _anElement);
    /* Statements */
    return _if_3(_equals_2(_index, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _copy_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _first_2(_self, _index);
    });
  },
  "{ :self :anElement |\n\t\tlet index = self.indexOf(anElement);\n\t\t(index = 0).if {\n\t\t\tself.copy\n\t\t} {\n\t\t\tself.first(index)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "copyUpTo",
  ["self", "anElement"],
  function (_self, _anElement) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anElement";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _index = _indexOf_2(_self, _anElement);
    /* Statements */
    return _if_3(_equals_2(_index, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _copy_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _first_2(_self, _minus_2(_index, 1));
    });
  },
  "{ :self :anElement |\n\t\tlet index = self.indexOf(anElement);\n\t\t(index = 0).if {\n\t\t\tself.copy\n\t\t} {\n\t\t\tself.first(index - 1)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "copyUpToLast",
  ["self", "anElement"],
  function (_self, _anElement) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anElement";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _index = _lastIndexOf_2(_self, _anElement);
    /* Statements */
    return _if_3(_equals_2(_index, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _copy_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _first_2(_self, _minus_2(_index, 1));
    });
  },
  "{ :self :anElement |\n\t\tlet index = self.lastIndexOf(anElement);\n\t\t(index = 0).if {\n\t\t\tself.copy\n\t\t} {\n\t\t\tself.first(index - 1)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "copyWithFirst",
  ["self", "newElement"],
  function (_self, _newElement) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _newElement";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _copy_1(_self);
    /* Statements */
    _addFirst_2(_answer, _newElement);
    return _answer;
  },
  "{ :self :newElement |\n\t\tlet answer = self.copy;\n\t\tanswer.addFirst(newElement);\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _indicesDo_2(_self, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_at_2(_self, _index));
    });
    return _self;
  },
  "{ :self :aBlock:/1 |\n\t\tself.indicesDo { :index |\n\t\t\taBlock(self[index])\n\t\t};\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "doSeparatedBy",
  ["self", "elementBlock:/1", "separatorBlock:/0"],
  function (_self, _elementBlock_1, _separatorBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _elementBlock_1, _separatorBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _indicesDo_2(_self, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _ifFalse_2(_equals_2(_index, 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _separatorBlock_0();
      });
      return _elementBlock_1(_at_2(_self, _index));
    });
  },
  "{ :self :elementBlock:/1 :separatorBlock:/0 |\n\t\tself.indicesDo { :index |\n\t\t\t(index = 1).ifFalse {\n\t\t\t\tseparatorBlock()\n\t\t\t};\n\t\t\telementBlock(self[index])\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "doWhileTrue",
  ["self", "activity:/1", "conditionBlock:/0"],
  function (_self, _activity_1, _conditionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _activity_1, _conditionBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _nextIndex = 1;
    let _endIndex = _size_1(_self);
    /* Statements */
    return _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _and_2(_conditionBlock_0(), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _lessThanEquals_2(_nextIndex, _endIndex);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _activity_1(_at_2(_self, _nextIndex));
      return _nextindex = _plus_2(_index, 1);
    });
  },
  "{ :self :activity:/1 :conditionBlock:/0 |\n\t\tlet nextIndex = 1;\n\t\tlet endIndex = self.size;\n\t\t{\n\t\t\tconditionBlock() & {\n\t\t\t\tnextIndex <= endIndex\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\tactivity(self[nextIndex]);\n\t\t\tnextindex := index + 1\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "doWithout",
  ["self", "aBlock:/1", "anItem"],
  function (_self, _aBlock_1, _anItem) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_1, _anItem";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _indicesDo_2(_self, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _ifFalse_2(_equals_2(_anItem, _at_2(_self, _index)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _aBlock_1(_at_2(_self, _index));
      });
    });
  },
  "{ :self :aBlock:/1 :anItem |\n\t\tself.indicesDo { :index |\n\t\t\t(anItem = self[index]).ifFalse {\n\t\t\t\taBlock(self[index])\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "duplicateEach",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _replicateEachApplying_3(_self, _anInteger, _value_1);
  },
  "{ :self :anInteger |\n\t\tself.replicateEachApplying(anInteger, value:/1)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _or_2(_equalsEquals_2(_self, _anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _and_2(
        _equals_2(_typeOf_1(_self), _typeOf_1(_anObject)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _hasEqualElementsBy_3(_self, _anObject, _aBlock_2);
        },
      );
    });
  },
  "{ :self :anObject :aBlock:/2 |\n\t\tself == anObject | {\n\t\t\tself.typeOf = anObject.typeOf & {\n\t\t\t\tself.hasEqualElementsBy(anObject, aBlock:/2)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "fillFromWith",
  ["self", "aCollection", "aBlock:/1"],
  function (_self, _aCollection, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _index = 1;
    /* Statements */
    _do_2(_aCollection, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _atPut_3(_self, _index, _aBlock_1(_each));
      return _index = _plus_2(_index, 1);
    });
    return _self;
  },
  "{ :self :aCollection :aBlock:/1 |\n\t\tlet index = 1;\n\t\taCollection.do { :each |\n\t\t\tself[index] := aBlock(each);\n\t\t\tindex := index + 1\n\t\t};\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "fillWith",
  ["self", "aBlock"],
  function (_self, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _indicesDo_2(_self, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(_self, _index, _cull_2(_aBlock, _index));
    });
    return _self;
  },
  "{ :self :aBlock |\n\t\tself.indicesDo { :index |\n\t\t\tself[index] := aBlock.cull(index)\n\t\t};\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "findBinary",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _findBinaryDoIfNone_4(_self, _aBlock_1, function (_found) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _found";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _found;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "@Sequenceable>>findBinary: not found");
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.findBinaryDoIfNone(aBlock:/1) { :found |\n\t\t\tfound\n\t\t} {\n\t\t\tself.error('@Sequenceable>>findBinary: not found')\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "findBinaryDoIfNone",
  ["self", "aBlock:/1", "actionBlock:/1", "exceptionBlock"],
  function (_self, _aBlock_1, _actionBlock_1, _exceptionBlock) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _aBlock_1, _actionBlock_1, _exceptionBlock";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _findBinaryIndexDoIfNone_4(_self, _aBlock_1, function (_foundIndex) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _foundIndex";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _actionBlock_1(_at_2(_self, _foundIndex));
    }, function (_previousIndex, _nextIndex) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _previousIndex, _nextIndex";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _cull_3(
        _exceptionBlock,
        _ifTrue_2(_greaterThan_2(_previousIndex, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _at_2(_self, _previousIndex);
        }),
        _ifTrue_2(_lessThanEquals_2(_nextIndex, _size_1(_self)), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _at_2(_self, _nextIndex);
        }),
      );
    });
  },
  "{ :self :aBlock:/1 :actionBlock:/1 :exceptionBlock |\n\t\tself.findBinaryIndexDoIfNone(aBlock:/1) { :foundIndex |\n\t\t\tactionBlock(self[foundIndex])\n\t\t} { :previousIndex :nextIndex |\n\t\t\texceptionBlock.cull(\n\t\t\t\t(previousIndex > 0).ifTrue { self[previousIndex] },\n\t\t\t\t(nextIndex <= self.size).ifTrue { self[nextIndex] }\n\t\t\t)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "findBinaryIfNone",
  ["self", "aBlock:/1", "exceptionBlock"],
  function (_self, _aBlock_1, _exceptionBlock) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aBlock_1, _exceptionBlock";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _findBinaryDoIfNone_4(_self, _aBlock_1, function (_found) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _found";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _found;
    }, _exceptionBlock);
  },
  "{ :self :aBlock:/1 :exceptionBlock |\n\t\tself.findBinaryDoIfNone(aBlock:/1, { :found | found }, exceptionBlock)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "findBinaryIndex",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _findBinaryIndexDoIfNone_4(_self, _aBlock_1, function (_found) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _found";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _found;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "@Sequenceable>>findBinaryIndex: not found");
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.findBinaryIndexDoIfNone(aBlock:/1) { :found |\n\t\t\tfound\n\t\t} {\n\t\t\tself.error('@Sequenceable>>findBinaryIndex: not found')\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "findBinaryIndexDoIfNone",
  ["self", "aBlock:/1", "actionBlock:/1", "exceptionBlock"],
  function (_self, _aBlock_1, _actionBlock_1, _exceptionBlock) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _aBlock_1, _actionBlock_1, _exceptionBlock";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _low = 1;
    let _high = _size_1(_self);
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _whileFalse_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _lessThan_2(_high, _low);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
        let _index = _dividedByDividedBy_2(_plus_2(_high, _low), 2);
        let _test = _aBlock_1(_at_2(_self, _index));
        /* Statements */
        return _if_3(_lessThan_2(_test, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _high = _minus_2(_index, 1);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _if_3(_lessThan_2(0, _test), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _low = _plus_2(_index, 1);
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _return_1(_actionBlock_1(_index));
          });
        });
      });
      return _cull_3(_exceptionBlock, _high, _low);
    });
  },
  "{ :self :aBlock:/1 :actionBlock:/1 :exceptionBlock |\n\t\tlet low = 1;\n\t\tlet high = self.size;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t{\n\t\t\t\thigh < low\n\t\t\t}.whileFalse {\n\t\t\t\tlet index = high + low // 2;\n\t\t\t\tlet test = aBlock(self[index]);\n\t\t\t\t(test < 0).if {\n\t\t\t\t\thigh := index - 1\n\t\t\t\t} {\n\t\t\t\t\t(0 < test).if {\n\t\t\t\t\t\tlow := index + 1\n\t\t\t\t\t} {\n\t\t\t\t\t\tactionBlock(index).return\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\texceptionBlock.cull(high, low)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "findBinaryIndexIfNone",
  ["self", "aBlock:/1", "exceptionBlock"],
  function (_self, _aBlock_1, _exceptionBlock) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aBlock_1, _exceptionBlock";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _findBinaryIndexDoIfNone_4(_self, _aBlock_1, function (_found) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _found";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _found;
    }, _exceptionBlock);
  },
  "{ :self :aBlock:/1 :exceptionBlock |\n\t\tself.findBinaryIndexDoIfNone(aBlock:/1, { :found | found }, exceptionBlock)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "findLast",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _index = _plus_2(_size_1(_self), 1);
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _greaterThanEquals_2(_index = _minus_2(_index, 1), 1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(_aBlock_1(_at_2(_self, _index)), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _return_1(_index);
        });
      });
      return 0;
    });
  },
  "{ :self :aBlock:/1 |\n\t\tlet index = self.size + 1;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t{\n\t\t\t\t(index := index - 1) >= 1\n\t\t\t}.whileTrue {\n\t\t\t\taBlock(self[index]).ifTrue {\n\t\t\t\t\tindex.return\n\t\t\t\t}\n\t\t\t};\n\t\t\t0\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "first",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_self, 1);
  },
  "{ :self |\n\t\tself[1]\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "first",
  ["self", "n"],
  function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _copyFromTo_3(_self, 1, _n);
  },
  "{ :self :n |\n\t\tself.copyFromTo(1, n)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "firstIndex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return 1;
  },
  "{ :self |\n\t\t1\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "fisherYatesShuffleUsing",
  ["self", "random"],
  function (_self, _random) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _random";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _downToDo_3(_size_1(_self), 2, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _swapWith_3(_self, _each, _nextRandomInteger_3(_random, 1, _each));
    });
    return _self;
  },
  "{ :self :random |\n\t\tself.size.downToDo(2) { :each |\n\t\t\tself.swapWith(each, random.nextRandomInteger(1, each))\n\t\t};\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "fisherYatesShuffle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _fisherYatesShuffleUsing_2(_self, _system);
  },
  "{ :self |\n\t\tself.fisherYatesShuffleUsing(system)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "flattened",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isCollection_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _addAll_2(_answer, _flattened_1(_each));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _add_2(_answer, _each);
      });
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tself.do { :each |\n\t\t\teach.isCollection.if {\n\t\t\t\tanswer.addAll(each.flattened)\n\t\t\t} {\n\t\t\t\tanswer.add(each)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "foldLeft",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _reduce_2(_self, _aBlock_2);
  },
  "{ :self :aBlock:/2 |\n\t\tself.reduce(aBlock:/2)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "foldRight",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ifEmpty_3(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _errorEmptyCollection_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _answer = _last_1(_self);
      /* Statements */
      _toByDo_4(_minus_2(_size_1(_self), 1), 1, -1, function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _answer = _aBlock_2(_at_2(_self, _index), _answer);
      });
      return _answer;
    });
  },
  "{ :self :aBlock:/2 |\n\t\tself.ifEmpty {\n\t\t\tself.errorEmptyCollection\n\t\t} {\n\t\t\tlet answer = self.last;\n\t\t\t(self.size - 1).toByDo(1, -1) { :index |\n\t\t\t\tanswer := aBlock(self[index], answer)\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "forceToPaddingWith",
  ["self", "length", "anObject"],
  function (_self, _length, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _length, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
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
  },
  "{ :self :length :anObject |\n\t\tlet answer = self.species.new(length);\n\t\tanswer.atAllPut(anObject);\n\t\tanswer.replaceFromToWithStartingAt(1, self.size.min(length), self, 1);\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "fourth",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_self, 4);
  },
  "{ :self |\n\t\tself[4]\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "fourth",
  ["self", "n"],
  function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _copyFromTo_3(_self, _plus_2(_times_2(_n, 3), 1), _times_2(_n, 4));
  },
  "{ :self :n |\n\t\tself.copyFromTo(n * 3 + 1, n * 4)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "fromToDo",
  ["self", "start", "stop", "aBlock:/1"],
  function (_self, _start, _stop, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _start, _stop, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _toDo_3(_start, _stop, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_at_2(_self, _index));
    });
  },
  "{ :self :start :stop :aBlock:/1 |\n\t\tstart.toDo(stop) { :index |\n\t\t\taBlock(self[index])\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "fromToPut",
  ["self", "startIndex", "endIndex", "anObject"],
  function (_self, _startIndex, _endIndex, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _startIndex, _endIndex, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _if_3(_greaterThan_2(_startIndex, _endIndex), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _written = 1;
      let _toWrite = _plus_2(_minus_2(_endIndex, _startIndex), 1);
      let _thisWrite = null;
      /* Statements */
      _atPut_3(_self, _startIndex, _anObject);
      return _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _lessThan_2(_written, _toWrite);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _thisWrite = _min_2(_written, _minus_2(_toWrite, _written));
        _replaceFromToWithStartingAt_5(
          _self,
          _plus_2(_startIndex, _written),
          _minus_2(_plus_2(_plus_2(_startIndex, _written), _thisWrite), 1),
          _self,
          _startIndex,
        );
        return _written = _plus_2(_written, _thisWrite);
      });
    });
    return _anObject;
  },
  "{ :self :startIndex :endIndex :anObject |\n\t\t(startIndex > endIndex).if {\n\t\t\tself\n\t\t} {\n\t\t\tlet written = 1;\n\t\t\tlet toWrite = endIndex - startIndex + 1;\n\t\t\tlet thisWrite = nil;\n\t\t\tself[startIndex] := anObject;\n\t\t\t{\n\t\t\t\twritten < toWrite\n\t\t\t}.whileTrue {\n\t\t\t\tthisWrite := written.min(toWrite - written);\n\t\t\t\tself.replaceFromToWithStartingAt(\n\t\t\t\t\tstartIndex + written,\n\t\t\t\t\tstartIndex + written + thisWrite - 1,\n\t\t\t\t\tself,\n\t\t\t\t\tstartIndex\n\t\t\t\t);\n\t\t\t\twritten := written + thisWrite\n\t\t\t}\n\t\t};\n\t\tanObject\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "groupsDo",
  ["self", "aBlock"],
  function (_self, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _numArgs = _numArgs_1(_aBlock);
    /* Statements */
    return _caseOfOtherwise_3(_numArgs, [
      _minusGreaterThan_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return 0;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _error_2(
          _self,
          "groupsDo: At least one block argument expected",
        );
      }),
      _minusGreaterThan_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return 1;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _do_2(_self, _aBlock);
      }),
      _minusGreaterThan_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return 2;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _pairsDo_2(_self, _aBlock);
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _argumentArray = _Array_1(_numArgs);
      let _index = 1;
      let _endIndex = _plus_2(_minus_2(_size_1(_self), _numArgs), 1);
      /* Statements */
      return _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _lessThanEquals_2(_index, _endIndex);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _replaceFromToWithStartingAt_5(
          _argumentArray,
          1,
          _numArgs,
          _self,
          _index,
        );
        _valueWithArguments_2(_aBlock, _argumentArray);
        return _index = _plus_2(_index, _numArgs);
      });
    });
  },
  "{ :self :aBlock |\n\t\tlet numArgs = aBlock.numArgs;\n\t\tnumArgs.caseOfOtherwise([\n\t\t\t{ 0 } -> { self.error('groupsDo: At least one block argument expected') },\n\t\t\t{ 1 } -> { self.do(aBlock) },\n\t\t\t{ 2 } -> { self.pairsDo(aBlock) }\n\t\t]) {\n\t\t\tlet argumentArray = Array(numArgs);\n\t\t\tlet index = 1;\n\t\t\tlet endIndex = self.size - numArgs + 1;\n\t\t\t{\n\t\t\t\tindex <= endIndex\n\t\t\t}.whileTrue {\n\t\t\t\targumentArray.replaceFromToWithStartingAt(1, numArgs, self, index);\n\t\t\t\taBlock.valueWithArguments(argumentArray);\n\t\t\t\tindex := index + numArgs\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "grownBy",
  ["self", "length"],
  function (_self, _length) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _length";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _ofSize_2(
      _species_1(_self),
      _plus_2(_size_1(_self), _length),
    );
    /* Statements */
    return _replaceFromToWithStartingAt_5(_answer, 1, _size_1(_self), _self, 1);
  },
  "{ :self :length |\n\t\tlet answer = self.species.ofSize(self.size + length);\n\t\tanswer.replaceFromToWithStartingAt(1, self.size, self, 1)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "hasEqualElementsBy",
  ["self", "otherCollection", "aBlock:/2"],
  function (_self, _otherCollection, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _otherCollection, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _and_2(_isSequenceable_1(_otherCollection), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _equals_2(_size_1(_self), _size_1(_otherCollection));
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _valueWithReturn_1(function (_return_1) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _return_1";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          _indicesDo_2(_self, function (_index) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _index";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _ifFalse_2(
              _aBlock_2(_at_2(_self, _index), _at_2(_otherCollection, _index)),
              function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  console.error(errorMessage);
                  throw Error(errorMessage);
                }
                /* Statements */
                return _return_1(false);
              },
            );
          });
          return true;
        });
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return false;
      },
    );
  },
  "{ :self :otherCollection :aBlock:/2 |\n\t\totherCollection.isSequenceable.and {\n\t\t\tself.size = otherCollection.size\n\t\t}.if {\n\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\tself.indicesDo { :index |\n\t\t\t\t\taBlock(self[index], otherCollection[index]).ifFalse {\n\t\t\t\t\t\tfalse.return\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\ttrue\n\t\t\t}\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "hasEqualElements",
  ["self", "otherCollection"],
  function (_self, _otherCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _otherCollection";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _hasEqualElementsBy_3(_self, _otherCollection, _equals_2);
  },
  "{ :self :otherCollection |\n\t\tself.hasEqualElementsBy(otherCollection, =)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "includes",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _tildeEquals_2(_indexOf_2(_self, _anObject), 0);
  },
  "{ :self :anObject |\n\t\tself.indexOf(anObject) ~= 0\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "includesIndex",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _and_2(_isInteger_1(_index), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _and_2(_greaterThan_2(_index, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _lessThanEquals_2(_index, _size_1(_self));
      });
    });
  },
  "{ :self :index |\n\t\tindex.isInteger & {\n\t\t\tindex > 0 & {\n\t\t\t\tindex <= self.size\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "indexOf",
  ["self", "anElement"],
  function (_self, _anElement) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anElement";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _indexOfStartingAt_3(_self, _anElement, 1);
  },
  "{ :self :anElement |\n\t\tself.indexOfStartingAt(anElement, 1)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "indexOfIfAbsent",
  ["self", "anElement", "exceptionBlock:/0"],
  function (_self, _anElement, _exceptionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _anElement, _exceptionBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _index = _indexOfStartingAt_3(_self, _anElement, 1);
    /* Statements */
    return _if_3(_equals_2(_index, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _exceptionBlock_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _index;
    });
  },
  "{ :self :anElement :exceptionBlock:/0 |\n\t\tlet index = self.indexOfStartingAt(anElement, 1);\n\t\t(index = 0).if {\n\t\t\texceptionBlock()\n\t\t} {\n\t\t\tindex\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "indexOfStartingAt",
  ["self", "anElement", "start"],
  function (_self, _anElement, _start) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anElement, _start";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _toDo_3(_start, _size_1(_self), function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(
          _equals_2(_at_2(_self, _index), _anElement),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _return_1(_index);
          },
        );
      });
      return 0;
    });
  },
  "{ :self :anElement :start |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tstart.toDo(self.size) { :index |\n\t\t\t\t(self[index] = anElement).ifTrue {\n\t\t\t\t\tindex.return\n\t\t\t\t}\n\t\t\t};\n\t\t\t0\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "indexOfSubCollection",
  ["self", "aSubCollection"],
  function (_self, _aSubCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSubCollection";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _indexOfSubCollectionStartingAt_3(_self, _aSubCollection, 1);
  },
  "{ :self :aSubCollection |\n\t\tself.indexOfSubCollectionStartingAt(aSubCollection, 1)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "indexOfSubCollectionStartingAt",
  ["self", "subCollection", "start"],
  function (_self, _subCollection, _start) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _subCollection, _start";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _subCollectionSize = _size_1(_subCollection);
    /* Statements */
    return _if_3(_equals_2(_subCollectionSize, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _first = _at_2(_subCollection, 1);
      /* Statements */
      return _valueWithReturn_1(function (_return_1) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _return_1";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _toDo_3(
          _max_2(_start, 1),
          _plus_2(_minus_2(_size_1(_self), _subCollectionSize), 1),
          function (_startIndex) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _startIndex";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _ifTrue_2(
              _equals_2(_at_2(_self, _startIndex), _first),
              function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  console.error(errorMessage);
                  throw Error(errorMessage);
                }
                /* Temporaries */
                let _index = 2;
                /* Statements */
                _whileTrue_2(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    console.error(errorMessage);
                    throw Error(errorMessage);
                  }
                  /* Statements */
                  return _and_2(
                    _lessThanEquals_2(_index, _subCollectionSize),
                    function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        console.error(errorMessage);
                        throw Error(errorMessage);
                      }
                      /* Statements */
                      return _equals_2(
                        _at_2(_self, _minus_2(_plus_2(_startIndex, _index), 1)),
                        _at_2(_subCollection, _index),
                      );
                    },
                  );
                }, function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    console.error(errorMessage);
                    throw Error(errorMessage);
                  }
                  /* Statements */
                  return _index = _plus_2(_index, 1);
                });
                return _ifFalse_2(
                  _lessThanEquals_2(_index, _subCollectionSize),
                  function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      console.error(errorMessage);
                      throw Error(errorMessage);
                    }
                    /* Statements */
                    return _return_1(_startIndex);
                  },
                );
              },
            );
          },
        );
        return 0;
      });
    });
  },
  "{ :self :subCollection :start |\n\t\tlet subCollectionSize = subCollection.size;\n\t\t(subCollectionSize = 0).if {\n\t\t\t0\n\t\t} {\n\t\t\tlet first = subCollection[1];\n\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\tstart.max(1).toDo(self.size - subCollectionSize + 1) { :startIndex |\n\t\t\t\t\t(self[startIndex] = first).ifTrue {\n\t\t\t\t\t\tlet index = 2;\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tindex <= subCollectionSize & {\n\t\t\t\t\t\t\t\tself[startIndex + index - 1] = subCollection[index]\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}.whileTrue {\n\t\t\t\t\t\t\tindex := index + 1\n\t\t\t\t\t\t};\n\t\t\t\t\t\t(index <= subCollectionSize).ifFalse {\n\t\t\t\t\t\t\tstartIndex.return\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\t0\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "indexValueAssociations",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _Array_1(_size_1(_self));
    /* Statements */
    _withIndexDo_2(_self, function (_each, _index) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(_answer, _index, _minusGreaterThan_2(_index, _each));
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = Array(self.size);\n\t\tself.withIndexDo { :each :index |\n\t\t\tanswer[index] := (index -> each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "indices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _upOrDownTo_2(1, _size_1(_self));
  },
  "{ :self |\n\t\t(1 .. self.size)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "indicesSorted",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _upOrDownTo_2(1, _size_1(_self));
  },
  "{ :self |\n\t\t(1 .. self.size)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "indicesDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _toDo_3(1, _size_1(_self), _aBlock_1);
  },
  "{ :self :aBlock:/1 |\n\t\t1.toDo(self.size, aBlock:/1)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "indicesOfSubCollection",
  ["self", "subCollection"],
  function (_self, _subCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _subCollection";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _indicesOfSubCollectionStartingAt_3(_self, _subCollection, 1);
  },
  "{ :self :subCollection |\n\t\tself.indicesOfSubCollectionStartingAt(subCollection, 1)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "indicesOfSubCollectionStartingAt",
  ["self", "subCollection", "initialIndex"],
  function (_self, _subCollection, _initialIndex) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _subCollection, _initialIndex";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    let _index = _minus_2(_initialIndex, 1);
    /* Statements */
    _whileFalse_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _index = _indexOfSubCollectionStartingAt_3(
        _self,
        _subCollection,
        _plus_2(_index, 1),
      );
      return _equals_2(_index, 0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _index);
    });
    return _answer;
  },
  "{ :self :subCollection :initialIndex |\n\t\tlet answer = [];\n\t\tlet index = initialIndex - 1;\n\t\t{\n\t\t\tindex := self.indexOfSubCollectionStartingAt(subCollection, index + 1);\n\t\t\tindex = 0\n\t\t}.whileFalse {\n\t\t\tanswer.add(index)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "injectInto",
  ["self", "anObject", "aBlock:/2"],
  function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _anObject;
    /* Statements */
    _indicesDo_2(_self, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _answer = _aBlock_2(_answer, _at_2(_self, _index));
    });
    return _answer;
  },
  "{ :self :anObject :aBlock:/2 |\n\t\tlet answer = anObject;\n\t\tself.indicesDo { :index |\n\t\t\tanswer := aBlock(answer, self[index])\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "isOctetSequence",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _allSatisfy_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _and_2(_isInteger_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _betweenAnd_3(_each, 0, 255);
      });
    });
  },
  "{ :self |\n\t\tself.allSatisfy { :each |\n\t\t\teach.isInteger & {\n\t\t\t\teach.betweenAnd(0, 255)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "isSequenceable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "isSorted",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _isSortedBetweenAnd_3(_self, 1, _size_1(_self));
  },
  "{ :self |\n\t\tself.isSortedBetweenAnd(1, self.size)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "isSortedBetweenAnd",
  ["self", "startIndex", "endIndex"],
  function (_self, _startIndex, _endIndex) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _startIndex, _endIndex";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _isSortedByBetweenAnd_4(
      _self,
      _lessThanEquals_2,
      _startIndex,
      _endIndex,
    );
  },
  "{ :self :startIndex :endIndex |\n\t\tself.isSortedByBetweenAnd(<=, startIndex, endIndex)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "isSortedBy",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _isSortedByBetweenAnd_4(_self, _aBlock_2, 1, _size_1(_self));
  },
  "{ :self :aBlock:/2 |\n\t\tself.isSortedByBetweenAnd(aBlock:/2, 1, self.size)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "isSortedByBetweenAnd",
  ["self", "aBlock:/2", "startIndex", "endIndex"],
  function (_self, _aBlock_2, _startIndex, _endIndex) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _aBlock_2, _startIndex, _endIndex";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanEquals_2(_endIndex, _startIndex), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return true;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _previousElement = _at_2(_self, _startIndex);
      /* Statements */
      return _valueWithReturn_1(function (_return_1) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _return_1";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _toDo_3(_plus_2(_startIndex, 1), _endIndex, function (_index) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _index";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Temporaries */
          let _element = _at_2(_self, _index);
          /* Statements */
          _ifFalse_2(_aBlock_2(_previousElement, _element), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _return_1(false);
          });
          return _previousElement = _element;
        });
        return true;
      });
    });
  },
  "{ :self :aBlock:/2 :startIndex :endIndex |\n\t\t(endIndex <= startIndex).if {\n\t\t\ttrue\n\t\t} {\n\t\t\tlet previousElement = self[startIndex];\n\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\t(startIndex + 1).toDo(endIndex) { :index |\n\t\t\t\t\tlet element = self[index];\n\t\t\t\t\taBlock(previousElement, element).ifFalse {\n\t\t\t\t\t\tfalse.return\n\t\t\t\t\t};\n\t\t\t\t\tpreviousElement := element\n\t\t\t\t};\n\t\t\t\ttrue\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "last",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_self, _size_1(_self));
  },
  "{ :self |\n\t\tself[self.size]\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "last",
  ["self", "n"],
  function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _size = _size_1(_self);
    /* Statements */
    return _copyFromTo_3(_self, _plus_2(_minus_2(_size, _n), 1), _size);
  },
  "{ :self :n |\n\t\tlet size = self.size;\n\t\tself.copyFromTo(size - n + 1, size)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "lastIndex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _size_1(_self);
  },
  "{ :self |\n\t\tself.size\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "lastIndexOf",
  ["self", "anElement"],
  function (_self, _anElement) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anElement";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _lastIndexOfStartingAt_3(_self, _anElement, _size_1(_self));
  },
  "{ :self :anElement |\n\t\tself.lastIndexOfStartingAt(anElement, self.size)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "lastIndexOfIfAbsent",
  ["self", "anElement", "exceptionBlock:/0"],
  function (_self, _anElement, _exceptionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _anElement, _exceptionBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _index = _lastIndexOfStartingAt_3(_self, _anElement, _size_1(_self));
    /* Statements */
    return _if_3(_equals_2(_index, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _exceptionBlock_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _index;
    });
  },
  "{ :self :anElement :exceptionBlock:/0 |\n\t\tlet index = self.lastIndexOfStartingAt(anElement, self.size);\n\t\t(index = 0).if {\n\t\t\texceptionBlock()\n\t\t} {\n\t\t\tindex\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "lastIndexOfStartingAt",
  ["self", "anElement", "lastIndex"],
  function (_self, _anElement, _lastIndex) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anElement, _lastIndex";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _downToDo_3(_lastIndex, 1, function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(
          _equals_2(_at_2(_self, _index), _anElement),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _return_1(_index);
          },
        );
      });
      return 0;
    });
  },
  "{ :self :anElement :lastIndex |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tlastIndex.downToDo(1) { :index |\n\t\t\t\t(self[index] = anElement).ifTrue {\n\t\t\t\t\tindex.return\n\t\t\t\t}\n\t\t\t};\n\t\t\t0\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "lastIndexOfStartingAtIfAbsent",
  ["self", "anElement", "lastIndex", "exceptionBlock:/0"],
  function (_self, _anElement, _lastIndex, _exceptionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _anElement, _lastIndex, _exceptionBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _index = _lastIndexOfStartingAt_3(_self, _anElement, _lastIndex);
    /* Statements */
    return _if_3(_equals_2(_index, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _exceptionBlock_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _index;
    });
  },
  "{ :self :anElement :lastIndex :exceptionBlock:/0 |\n\t\tlet index = self.lastIndexOfStartingAt(anElement, lastIndex);\n\t\t(index = 0).if {\n\t\t\texceptionBlock()\n\t\t} {\n\t\t\tindex\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "middle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_self, _plus_2(_dividedByDividedBy_2(_size_1(_self), 2), 1));
  },
  "{ :self |\n\t\tself[self.size // 2 + 1]\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "occurrencesOf",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _tally = 0;
    /* Statements */
    _indicesDo_2(_self, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(_equals_2(_at_2(_self, _index), _anObject), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _tally = _plus_2(_tally, 1);
      });
    });
    return _tally;
  },
  "{ :self :anObject |\n\t\tlet tally = 0;\n\t\tself.indicesDo { :index |\n\t\t\t(self[index] = anObject).ifTrue {\n\t\t\t\ttally := tally + 1\n\t\t\t}\n\t\t};\n\t\ttally\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "pairsCollect",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(
      _upOrDownTo_2(1, _dividedByDividedBy_2(_size_1(_self), 2)),
      function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _aBlock_2(
          _at_2(_self, _minus_2(_times_2(2, _index), 1)),
          _at_2(_self, _times_2(2, _index)),
        );
      },
    );
  },
  "{ :self :aBlock:/2 |\n\t\t(1 .. self.size // 2).collect { :index |\n\t\t\taBlock(self[2 * index - 1], self[2 * index])\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "pairsDo",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _toDo_3(
      1,
      _dividedByDividedBy_2(_size_1(_self), 2),
      function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _aBlock_2(
          _at_2(_self, _minus_2(_times_2(2, _index), 1)),
          _at_2(_self, _times_2(2, _index)),
        );
      },
    );
  },
  "{ :self :aBlock:/2 |\n\t\t1.toDo(self.size // 2) { :index |\n\t\t\taBlock(self[2 * index - 1], self[2 * index])\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "permutations",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _permutationsDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _copy_1(_each));
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tself.permutationsDo { :each |\n\t\t\tanswer.add(each.copy)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "permutationsDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _permutationsStartingAtDo_3(_copy_1(_self), 1, _aBlock_1);
  },
  "{ :self :aBlock:/1 |\n\t\tself.copy.permutationsStartingAtDo(1, aBlock:/1)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "permutationsStartingAtDo",
  ["self", "anInteger", "aBlock:/1"],
  function (_self, _anInteger, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThan_2(_anInteger, _size_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equals_2(_anInteger, _size_1(_self)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _aBlock_1(_self);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _upToDo_3(_anInteger, _size_1(_self), function (_index) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _index";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          _swapWith_3(_self, _anInteger, _index);
          _permutationsStartingAtDo_3(_self, _plus_2(_anInteger, 1), _aBlock_1);
          return _swapWith_3(_self, _anInteger, _index);
        });
      });
    });
  },
  "{ :self :anInteger :aBlock:/1 |\n\t\t(anInteger > self.size).if {\n\t\t\tself\n\t\t} {\n\t\t\t(anInteger = self.size).if {\n\t\t\t\taBlock(self)\n\t\t\t} {\n\t\t\t\tanInteger.upToDo(self.size) { :index |\n\t\t\t\t\tself.swapWith(anInteger, index);\n\t\t\t\t\tself.permutationsStartingAtDo(anInteger + 1, aBlock:/1);\n\t\t\t\t\tself.swapWith(anInteger, index)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "pinnedIndex",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThan_2(_index, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_greaterThan_2(_index, _size_1(_self)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _size_1(_self);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _index;
      });
    });
  },
  "{ :self :index |\n\t\t(index < 1).if {\n\t\t\t1\n\t\t} {\n\t\t\t(index > self.size).if {\n\t\t\t\tself.size\n\t\t\t} {\n\t\t\t\tindex\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "prefixProduct",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _scan_2(_self, _times_2);
  },
  "{ :self |\n\t\tself.scan(*)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "prefixSum",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _scan_2(_self, _plus_2);
  },
  "{ :self |\n\t\tself.scan(+)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "replace",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _indicesDo_2(_self, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(_self, _index, _aBlock_1(_at_2(_self, _index)));
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.indicesDo { :index |\n\t\t\tself[index] := aBlock(self[index])\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "replaceAllWith",
  ["self", "oldObject", "newObject"],
  function (_self, _oldObject, _newObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _oldObject, _newObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _index = 0;
    /* Statements */
    _whileFalse_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _index = _indexOfStartingAt_3(_self, _oldObject, _plus_2(_index, 1));
      return _equals_2(_index, 0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(_self, _index, _newObject);
    });
    return _self;
  },
  "{ :self :oldObject :newObject |\n\t\tlet index = 0;\n\t\t{\n\t\t\tindex := self.indexOfStartingAt(oldObject, index + 1);\n\t\t\tindex = 0\n\t\t}.whileFalse {\n\t\t\tself[index] := newObject\n\t\t};\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "replaceFromToWith",
  ["self", "start", "stop", "replacement"],
  function (_self, _start, _stop, _replacement) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _start, _stop, _replacement";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _equals_2(_size_1(_replacement), _plus_2(_minus_2(_stop, _start), 1)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _replaceFromToWithStartingAt_5(
          _self,
          _start,
          _stop,
          _replacement,
          1,
        );
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _error_2(
          _self,
          "replaceFromToWith: size of replacement doesnt match",
        );
      },
    );
  },
  "{ :self :start :stop :replacement |\n\t\t(replacement.size = (stop - start + 1)).if {\n\t\t\tself.replaceFromToWithStartingAt(start, stop, replacement, 1)\n\t\t} {\n\t\t\tself.error('replaceFromToWith: size of replacement doesnt match')\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "replaceFromToWithStartingAt",
  ["self", "start", "stop", "replacement", "replacementStart"],
  function (_self, _start, _stop, _replacement, _replacementStart) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _start, _stop, _replacement, _replacementStart";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _replacementOffset = _minus_2(_replacementStart, _start);
    let _index = _start;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _lessThanEquals_2(_index, _stop);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _atPut_3(
        _self,
        _index,
        _at_2(_replacement, _plus_2(_replacementOffset, _index)),
      );
      return _index = _plus_2(_index, 1);
    });
    return _self;
  },
  "{ :self :start :stop :replacement :replacementStart |\n\t\tlet replacementOffset = replacementStart - start;\n\t\tlet index = start;\n\t\t{\n\t\t\tindex <= stop\n\t\t}.whileTrue {\n\t\t\tself[index] := replacement[replacementOffset + index];\n\t\t\tindex := index + 1\n\t\t};\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "replicateEachApplying",
  ["self", "anInteger", "aBlock:/1"],
  function (_self, _anInteger, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answerSize = _times_2(_size_1(_self), _anInteger);
    let _answer = _ofSize_2(_species_1(_self), _answerSize);
    let _answerIndex = 1;
    /* Statements */
    _do_2(_upOrDownTo_2(1, _size_1(_self)), function (_selfIndex) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _selfIndex";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _entry = _aBlock_1(_at_2(_self, _selfIndex));
      /* Statements */
      return _do_2(_upOrDownTo_2(1, _anInteger), function (_unusedCounter) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unusedCounter";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _atPut_3(_answer, _answerIndex, _entry);
        return _answerIndex = _plus_2(_answerIndex, 1);
      });
    });
    return _answer;
  },
  "{ :self :anInteger :aBlock:/1 |\n\t\tlet answerSize = self.size * anInteger;\n\t\tlet answer = self.species.ofSize(answerSize);\n\t\tlet answerIndex = 1;\n\t\t(1 .. self.size).do { :selfIndex |\n\t\t\tlet entry = aBlock(self[selfIndex]);\n\t\t\t(1 .. anInteger).do { :unusedCounter |\n\t\t\t\tanswer[answerIndex] := entry;\n\t\t\t\tanswerIndex := answerIndex + 1\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "replicateEach",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _replicateEachApplying_3(_self, _anInteger, _identity_1);
  },
  "{ :self :anInteger |\n\t\tself.replicateEachApplying(anInteger, identity:/1)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "reversed",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _ofSize_2(_species_1(_self), _size_1(_self));
    let _fromIndex = _plus_2(_size_1(_self), 1);
    /* Statements */
    _indicesDo_2(_self, function (_toIndex) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _toIndex";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _atPut_3(_answer, _toIndex, _at_2(_self, _minus_2(_fromIndex, 1)));
      return _fromIndex = _minus_2(_fromIndex, 1);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = self.species.ofSize(self.size);\n\t\tlet fromIndex = self.size + 1;\n\t\tself.indicesDo { :toIndex |\n\t\t\tanswer[toIndex] := self[fromIndex - 1];\n\t\t\tfromIndex := fromIndex - 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "scan",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ifEmpty_3(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _copy_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _answer = _new_2(_species_1(_self), _size_1(_self));
      let _sum = _at_2(_self, 1);
      /* Statements */
      _atPut_3(_answer, 1, _sum);
      _toDo_3(2, _size_1(_self), function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _sum = _aBlock_2(_sum, _at_2(_self, _index));
        return _atPut_3(_answer, _index, _sum);
      });
      return _answer;
    });
  },
  "{ :self :aBlock:/2 |\n\t\tself.ifEmpty {\n\t\t\tself.copy\n\t\t} {\n\t\t\tlet answer = self.species.new(self.size);\n\t\t\tlet sum = self[1];\n\t\t\tanswer[1] := sum;\n\t\t\t2.toDo(self.size) { :index |\n\t\t\t\tsum := aBlock(sum, self[index]);\n\t\t\t\tanswer[index] := sum\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "reverseDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _downToDo_3(_size_1(_self), 1, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_at_2(_self, _index));
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.size.downToDo(1) { :index |\n\t\t\taBlock(self[index])\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "reverseWithDo",
  ["self", "aSequence", "aBlock:/2"],
  function (_self, _aSequence, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aSequence, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _tildeEquals_2(_size_1(_self), _size_1(_aSequence)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _error_2(_self, "reverseWithDo: unequal size");
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _downToDo_3(_size_1(_self), 1, function (_index) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _index";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _aBlock_2(_at_2(_self, _index), _at_2(_aSequence, _index));
        });
      },
    );
  },
  "{ :self :aSequence :aBlock:/2 |\n\t\t(self.size ~= aSequence.size).if {\n\t\t\tself.error('reverseWithDo: unequal size')\n\t\t} {\n\t\t\tself.size.downToDo(1) { :index |\n\t\t\t\taBlock(self[index], aSequence[index])\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "rotated",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _rotatedRight_2(_self, _anInteger);
  },
  "{ :self :anInteger |\n\t\tself.rotatedRight(anInteger)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "rotatedLeft",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _toAsCollect_4(
      _plus_2(1, _anInteger),
      _plus_2(_size_1(_self), _anInteger),
      _species_1(_self),
      function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _atWrap_2(_self, _index);
      },
    );
  },
  "{ :self :anInteger |\n\t\t(1 + anInteger).toAsCollect(self.size + anInteger, self.species) { :index |\n\t\t\tself.atWrap(index)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "rotatedRight",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _toAsCollect_4(
      _minus_2(1, _anInteger),
      _minus_2(_size_1(_self), _anInteger),
      _species_1(_self),
      function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _atWrap_2(_self, _index);
      },
    );
  },
  "{ :self :anInteger |\n\t\t(1 - anInteger).toAsCollect(self.size - anInteger, self.species) { :index |\n\t\t\tself.atWrap(index)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "second",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_self, 2);
  },
  "{ :self |\n\t\tself[2]\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "second",
  ["self", "n"],
  function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _copyFromTo_3(_self, _plus_2(_n, 1), _times_2(_n, 2));
  },
  "{ :self :n |\n\t\tself.copyFromTo(n + 1, n * 2)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "secondLast",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_self, _minus_2(_size_1(_self), 1));
  },
  "{ :self |\n\t\tself[self.size - 1]\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "select",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _indicesDo_2(_self, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(_aBlock_1(_at_2(_self, _index)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _add_2(_answer, _at_2(_self, _index));
      });
    });
    return _newFrom_2(_species_1(_self), _answer);
  },
  "{ :self :aBlock:/1 |\n\t\tlet answer = [];\n\t\tself.indicesDo { :index |\n\t\t\taBlock(self[index]).ifTrue {\n\t\t\t\tanswer.add(self[index])\n\t\t\t}\n\t\t};\n\t\tself.species.newFrom(answer)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "shuffleUsing",
  ["self", "random"],
  function (_self, _random) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _random";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _fisherYatesShuffleUsing_2(_self, _random);
  },
  "{ :self :random |\n\t\tself.fisherYatesShuffleUsing(random)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "shuffle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _fisherYatesShuffle_1(_self);
  },
  "{ :self |\n\t\tself.fisherYatesShuffle\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "shuffledBy",
  ["self", "random"],
  function (_self, _random) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _random";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _fisherYatesShuffleBy_2(_copy_1(_self), _random);
  },
  "{ :self :random |\n\t\tself.copy.fisherYatesShuffleBy(random)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "shuffled",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _fisherYatesShuffle_1(_copy_1(_self));
  },
  "{ :self |\n\t\tself.copy.fisherYatesShuffle\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "sort",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _sortBy_2(_self, _lessThanEquals_2);
  },
  "{ :self |\n\t\tself.sortBy(<=)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "sort",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ifNil_3(_aBlock_2, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _sort_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _sortBy_2(_self, _aBlock_2);
    });
  },
  "{ :self :aBlock:/2 |\n\t\taBlock:/2.ifNil {\n\t\t\tself.sort\n\t\t} {\n\t\t\tself.sortBy(aBlock:/2)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "sortOn",
  ["self", "keyBlock:/1"],
  function (_self, _keyBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _keyBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _sortOnBy_3(_self, _keyBlock_1, _lessThanEquals_2);
  },
  "{ :self :keyBlock:/1 |\n\t\tself.sortOnBy(keyBlock:/1, <=)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "sorted",
  ["self", "aSortBlock:/2"],
  function (_self, _aSortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSortBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _sortBy_2(_copy_1(_self), _aSortBlock_2);
  },
  "{ :self :aSortBlock:/2 |\n\t\tself.copy.sortBy(aSortBlock:/2)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "sorted",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _sort_1(_copy_1(_self));
  },
  "{ :self |\n\t\tself.copy.sort\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "sortedWithIndices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _sortedWithIndices_2(_self, _lessThanEquals_2);
  },
  "{ :self |\n\t\tself.sortedWithIndices(<=)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "sortedWithIndices",
  ["self", "sortBlock:/2"],
  function (_self, _sortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sortBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ifEmpty_3(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return [];
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _sorted_2(
        _withIndexCollect_2(_self, function (_each, _index) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _each, _index";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _minusGreaterThan_2(_each, _index);
        }),
        function (_p, _q) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _p, _q";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _sortBlock_2(_key_1(_p), _key_1(_q));
        },
      );
    });
  },
  "{ :self :sortBlock:/2 |\n\t\tself.ifEmpty {\n\t\t\t[]\n\t\t} {\n\t\t\tself.withIndexCollect { :each :index |\n\t\t\t\teach -> index\n\t\t\t}.sorted { :p :q |\n\t\t\t\tsortBlock(p.key, q.key)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "splitBy",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _splitByDo_3(_self, _aCollection, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _each);
    });
    return _answer;
  },
  "{ :self :aCollection |\n\t\tlet answer = [];\n\t\tself.splitByDo(aCollection) { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "splitByDo",
  ["self", "aCollection", "aBlock:/1"],
  function (_self, _aCollection, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _lastIndex = 1;
    let _nextIndex = null;
    /* Statements */
    _whileFalse_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _nextIndex = _indexOfSubCollectionStartingAt_3(
        _self,
        _aCollection,
        _lastIndex,
      );
      return _equals_2(_nextIndex, 0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _aBlock_1(_copyFromTo_3(_self, _lastIndex, _minus_2(_nextIndex, 1)));
      return _lastIndex = _plus_2(_nextIndex, _size_1(_aCollection));
    });
    return _aBlock_1(_copyFromTo_3(_self, _lastIndex, _size_1(_self)));
  },
  "{ :self :aCollection :aBlock:/1 |\n\t\tlet lastIndex = 1;\n\t\tlet nextIndex = nil;\n\t\t{\n\t\t\tnextIndex := self.indexOfSubCollectionStartingAt(aCollection, lastIndex);\n\t\t\tnextIndex = 0\n\t\t}.whileFalse {\n\t\t\taBlock(self.copyFromTo(lastIndex, nextIndex - 1));\n\t\t\tlastIndex := nextIndex + aCollection.size\n\t\t};\n\t\taBlock(self.copyFromTo(lastIndex, self.size))\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "swapWith",
  ["self", "oneIndex", "anotherIndex"],
  function (_self, _oneIndex, _anotherIndex) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _oneIndex, _anotherIndex";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _element = _at_2(_self, _oneIndex);
    /* Statements */
    _atPut_3(_self, _oneIndex, _at_2(_self, _anotherIndex));
    return _atPut_3(_self, _anotherIndex, _element);
  },
  "{ :self :oneIndex :anotherIndex |\n\t\tlet element = self[oneIndex];\n\t\tself[oneIndex] := self[anotherIndex];\n\t\tself[anotherIndex] := element\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "third",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_self, 3);
  },
  "{ :self |\n\t\tself[3]\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "third",
  ["self", "n"],
  function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _copyFromTo_3(_self, _plus_2(_times_2(_n, 2), 1), _times_2(_n, 3));
  },
  "{ :self :n |\n\t\tself.copyFromTo(n * 2 + 1, n * 3)\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "thirdLast",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_self, _minus_2(_size_1(_self), 2));
  },
  "{ :self |\n\t\tself[self.size - 2]\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "transposed",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _toAsCollect_4(
      1,
      _size_1(_first_1(_self)),
      _species_1(_first_1(_self)),
      function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _collect_2(_self, function (_row) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _row";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _at_2(_row, _index);
        });
      },
    );
  },
  "{ :self |\n\t\t1.toAsCollect(self.first.size, self.first.species) { :index |\n\t\t\tself.collect { :row |\n\t\t\t\trow[index]\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "tuplesDo",
  ["self", "n", "aBlock:/1"],
  function (_self, _n, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _n, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _tuplesIndicesDo_3(_size_1(_self), _n, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_atAll_2(_self, _each));
    });
  },
  "{ :self :n :aBlock:/1 |\n\t\tself.size.tuplesIndicesDo(n) { :each |\n\t\t\taBlock(self.atAll(each))\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "tuples",
  ["self", "n"],
  function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _tuplesDo_3(_self, _n, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _each);
    });
    return _answer;
  },
  "{ :self :n |\n\t\tlet answer = [];\n\t\tself.tuplesDo(n) { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "withCollect",
  ["self", "otherCollection", "aBlock:/2"],
  function (_self, _otherCollection, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _otherCollection, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _isOfSameSizeCheck_2(_self, _otherCollection);
    return _toAsCollect_4(
      1,
      _size_1(_self),
      _species_1(_self),
      function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _aBlock_2(_at_2(_self, _index), _at_2(_otherCollection, _index));
      },
    );
  },
  "{ :self :otherCollection :aBlock:/2 |\n\t\tself.isOfSameSizeCheck(otherCollection);\n\t\t1.toAsCollect(self.size, self.species) { :index |\n\t\t\taBlock(self[index], otherCollection[index])\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "withDo",
  ["self", "otherCollection", "twoArgBlock:/2"],
  function (_self, _otherCollection, _twoArgBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _otherCollection, _twoArgBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _isOfSameSizeCheck_2(_self, _otherCollection);
    return _indicesDo_2(_self, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _twoArgBlock_2(
        _at_2(_self, _index),
        _at_2(_otherCollection, _index),
      );
    });
  },
  "{ :self :otherCollection :twoArgBlock:/2 |\n\t\tself.isOfSameSizeCheck(otherCollection);\n\t\tself.indicesDo { :index |\n\t\t\ttwoArgBlock(self[index], otherCollection[index])\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "withReplace",
  ["self", "otherCollection", "aBlock:/2"],
  function (_self, _otherCollection, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _otherCollection, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _isOfSameSizeCheck_2(_self, _otherCollection);
    return _indicesDo_2(_self, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(
        _self,
        _index,
        _aBlock_2(_at_2(_self, _index), _at_2(_otherCollection, _index)),
      );
    });
  },
  "{ :self :otherCollection :aBlock:/2 |\n\t\tself.isOfSameSizeCheck(otherCollection);\n\t\tself.indicesDo { :index |\n\t\t\tself[index] := aBlock(self[index], otherCollection[index])\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "withIndexCollect",
  ["self", "elementAndIndexBlock:/2"],
  function (_self, _elementAndIndexBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elementAndIndexBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _ofSize_2(_species_1(_self), _size_1(_self));
    /* Statements */
    _indicesDo_2(_self, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(
        _answer,
        _index,
        _elementAndIndexBlock_2(_at_2(_self, _index), _index),
      );
    });
    return _answer;
  },
  "{ :self :elementAndIndexBlock:/2 |\n\t\tlet answer = self.species.ofSize(self.size);\n\t\tself.indicesDo { :index |\n\t\t\tanswer[index] := elementAndIndexBlock(self[index], index)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Sequenceable",
  "Sequenceable",
  "withIndexDo",
  ["self", "elementAndIndexBlock:/2"],
  function (_self, _elementAndIndexBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elementAndIndexBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _indicesDo_2(_self, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _elementAndIndexBlock_2(_at_2(_self, _index), _index);
    });
  },
  "{ :self :elementAndIndexBlock:/2 |\n\t\tself.indicesDo { :index |\n\t\t\telementAndIndexBlock(self[index], index)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Sequenceable",
  "plus",
  ["self", "arg"],
  function (_self, _arg) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _arg";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_arg, _self, _plus_2);
  },
  "{ :self :arg |\n\t\targ.adaptToCollectionAndApply(self, +)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Sequenceable",
  "minus",
  ["self", "arg"],
  function (_self, _arg) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _arg";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_arg, _self, _minus_2);
  },
  "{ :self :arg |\n\t\targ.adaptToCollectionAndApply(self, -)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Sequenceable",
  "times",
  ["self", "arg"],
  function (_self, _arg) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _arg";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_arg, _self, _times_2);
  },
  "{ :self :arg |\n\t\targ.adaptToCollectionAndApply(self, *)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Sequenceable",
  "dividedBy",
  ["self", "arg"],
  function (_self, _arg) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _arg";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_arg, _self, _dividedBy_2);
  },
  "{ :self :arg |\n\t\targ.adaptToCollectionAndApply(self, /)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Sequenceable",
  "lessThan",
  ["self", "arg"],
  function (_self, _arg) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _arg";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_arg, _self, _lessThan_2);
  },
  "{ :self :arg |\n\t\targ.adaptToCollectionAndApply(self, <)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Sequenceable",
  "greaterThan",
  ["self", "arg"],
  function (_self, _arg) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _arg";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_arg, _self, _greaterThan_2);
  },
  "{ :self :arg |\n\t\targ.adaptToCollectionAndApply(self, >)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Sequenceable",
  "raisedTo",
  ["self", "arg"],
  function (_self, _arg) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _arg";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_arg, _self, _raisedTo_2);
  },
  "{ :self :arg |\n\t\targ.adaptToCollectionAndApply(self, ^)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Sequenceable",
  "modulo",
  ["self", "arg"],
  function (_self, _arg) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _arg";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_arg, _self, _modulo_2);
  },
  "{ :self :arg |\n\t\targ.adaptToCollectionAndApply(self, %)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Sequenceable",
  "applyBinaryMathOperatorInPlace",
  ["self", "anObject", "aBlock:/2"],
  function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isNumber_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _replace_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _aBlock_2(_each, _anObject);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _withReplace_3(_self, _anObject, _aBlock_2);
    });
  },
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isNumber.if {\n\t\t\tself.replace { :each |\n\t\t\t\taBlock(each, anObject)\n\t\t\t}\n\t\t} {\n\t\t\tself.withReplace(anObject, aBlock:/2)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Sequenceable",
  "plusEquals",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _applyBinaryMathOperatorInPlace_3(_self, _anObject, _plus_2);
  },
  "{ :self :anObject |\n\t\tapplyBinaryMathOperatorInPlace(self, anObject, +)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Sequenceable",
  "minusEquals",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _applyBinaryMathOperatorInPlace_3(_self, _anObject, _minus_2);
  },
  "{ :self :anObject |\n\t\tapplyBinaryMathOperatorInPlace(self, anObject, -)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Sequenceable",
  "timesEquals",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _applyBinaryMathOperatorInPlace_3(_self, _anObject, _times_2);
  },
  "{ :self :anObject |\n\t\tapplyBinaryMathOperatorInPlace(self, anObject, *)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Sequenceable",
  "dividedByEquals",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _applyBinaryMathOperatorInPlace_3(_self, _anObject, _dividedBy_2);
  },
  "{ :self :anObject |\n\t\tapplyBinaryMathOperatorInPlace(self, anObject, /)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Sequenceable",
  "fibonacciSequenceInto",
  ["self", "answer"],
  function (_self, _answer) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _answer";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _a = 0;
    let _b = 1;
    let _i = 0;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _lessThan_2(_i, _self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _tmp = _b;
      /* Statements */
      _add_2(_answer, _b);
      _b = _plus_2(_b, _a);
      _a = _tmp;
      return _i = _plus_2(_i, 1);
    });
    return _answer;
  },
  "{ :self :answer |\n\t\tlet a = 0;\n\t\tlet b = 1;\n\t\tlet i = 0;\n\t\t{ i < self }.whileTrue {\n\t\t\tlet tmp = b;\n\t\t\tanswer.add(b);\n\t\t\tb := b + a;\n\t\t\ta := tmp;\n\t\t\ti := i + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Sequenceable",
  "toAsCollect",
  ["self", "stop", "species", "aBlock:/1"],
  function (_self, _stop, _species, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _stop, _species, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answerSize = _plus_2(_minus_2(_stop, _self), 1);
    let _answer = _ofSize_2(_species, _answerSize);
    /* Statements */
    _toDo_3(1, _answerSize, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(
        _answer,
        _index,
        _aBlock_1(_minus_2(_plus_2(_index, _self), 1)),
      );
    });
    return _answer;
  },
  "{ :self :stop :species :aBlock:/1 |\n\t\tlet answerSize = stop - self + 1;\n\t\tlet answer = species.ofSize(answerSize);\n\t\t1.toDo(answerSize) { :index |\n\t\t\tanswer[index] := aBlock(index + self - 1)\n\t\t};\n\t\tanswer\n\t}",
);
