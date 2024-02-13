/* {- Require: SmallFloat -} */

sl.addTrait("Sequence", "Sequence");

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _equalBy_3(_self, _anObject, _equalsSign_2);
  },
  "{ :self :anObject |\n\t\tself.equalBy(anObject, =)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
  "plusSignPlusSign",
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
      _plusSign_2(_size_1(_self), 1),
      _size_1(_self),
      _aSequence,
    );
  },
  "{ :self :aSequence |\n\t\tself.copyReplaceFromToWith(\n\t\t\tself.size + 1,\n\t\t\tself.size,\n\t\t\taSequence\n\t\t)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "commercialAtAsterisk",
  ["self", "indexList"],
  function (_self, _indexList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indexList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _atAll_2(_self, _indexList);
  },
  "{ :self :indexList |\n\t\tself.atAll(indexList)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "accumulate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _scan_2(_self, _plusSign_2);
  },
  "{ :self |\n\t\tself.scan(+)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
    return _if_3(_isSequence_1(_rcvr), function () {
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
  "{ :self :rcvr :aBlock:/2 |\n\t\trcvr.isSequence.if {\n\t\t\trcvr.withCollect(self) { :rcvrItem :selfItem |\n\t\t\t\taBlock(rcvrItem, selfItem)\n\t\t\t}\n\t\t} {\n\t\t\tself.error('@Sequence: only sequenceable collections may be combined arithmetically')\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
    return _copyFromTo_3(_self, _plusSign_2(_n, 1), _size_1(_self));
  },
  "{ :self :n |\n\t\tself.copyFromTo(n + 1, self.size)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
    return _copyFromTo_3(
      _self,
      _plusSign_2(_n, 1),
      _hyphenMinus_2(_size_1(_self), _n),
    );
  },
  "{ :self :n |\n\t\tself.copyFromTo(n + 1, self.size - n)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
    return _copyFromTo_3(_self, 1, _hyphenMinus_2(_size_1(_self), _n));
  },
  "{ :self :n |\n\t\tself.copyFromTo(1, self.size - n)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
    return _toDo_3(1, _hyphenMinus_2(_size_1(_self), 1), function (_index) {
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
  "Sequence",
  "Sequence",
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
      return _if_3(
        _equalsSign_2(_anInteger, _size_1(_aCollection)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _aBlock_1(_aCollection);
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _asDigitsAtInDo_4(
            _self,
            _plusSign_2(_anInteger, 1),
            _aCollection,
            _aBlock_1,
          );
        },
      );
    });
  },
  "{ :self :anInteger :aCollection :aBlock:/1 |\n\t\tself.do { :each |\n\t\t\taCollection[anInteger] := each;\n\t\t\t(anInteger = aCollection.size).if {\n\t\t\t\taBlock(aCollection)\n\t\t\t} {\n\t\t\t\tself.asDigitsAtInDo(anInteger + 1, aCollection, aBlock:/1)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
    let _aCollection = _List_1(_anInteger);
    /* Statements */
    return _asDigitsAtInDo_4(_self, 1, _aCollection, _aBlock_1);
  },
  "{ :self :anInteger :aBlock:/1 |\n\t\tlet aCollection = List(anInteger);\n\t\tself.asDigitsAtInDo(1, aCollection, aBlock:/1)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "assertShape",
  ["self", "shape"],
  function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _assert_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_shape_1(_self), _shape);
    });
  },
  "{ :self :shape |\n\t\tself.assert {\n\t\t\tself.shape = shape\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "atAllUsing",
  ["self", "indexList", "aBlock:/2"],
  function (_self, _indexList, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _indexList, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _ofSize_2(_species_1(_self), _size_1(_indexList));
    /* Statements */
    _indicesDo_2(_indexList, function (_index) {
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
        _aBlock_2(_self, _at_2(_indexList, _index)),
      );
    });
    return _answer;
  },
  "{ :self :indexList :aBlock:/2 |\n\t\tlet answer = self.species.ofSize(indexList.size);\n\t\tindexList.indicesDo { :index |\n\t\t\tanswer[index] := aBlock(self, indexList[index])\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "atAll",
  ["self", "indexList"],
  function (_self, _indexList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indexList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _atAllUsing_3(_self, _indexList, _at_2);
  },
  "{ :self :indexList |\n\t\tself.atAllUsing(indexList, at:/2)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
    _if_3(_greaterThanSign_2(_size, 50), function () {
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
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
  "atFoldAll",
  ["self", "indexList"],
  function (_self, _indexList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indexList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _atAllUsing_3(_self, _indexList, _atFold_2);
  },
  "{ :self :indexList |\n\t\tself.atAllUsing(indexList, atFold:/2)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
      _hyphenMinus_2(_plusSign_2(_size_1(_self), 1), _indexFromEnd),
      _anObject,
    );
  },
  "{ :self :indexFromEnd :anObject |\n\t\tself[self.size + 1 - indexFromEnd] := anObject\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
  "atPinAll",
  ["self", "indexList"],
  function (_self, _indexList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indexList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _atAllUsing_3(_self, _indexList, _atPin_2);
  },
  "{ :self :indexList |\n\t\tself.atAllUsing(indexList, atPin:/2)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
      _plusSign_2(_percentSign_2(_hyphenMinus_2(_index, 1), _size_1(_self)), 1),
    );
  },
  "{ :self :index |\n\t\tself[index - 1 % self.size + 1]\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "atWrapAll",
  ["self", "indexList"],
  function (_self, _indexList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indexList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _atAllUsing_3(_self, _indexList, _atWrap_2);
  },
  "{ :self :indexList |\n\t\tself.atAllUsing(indexList, atWrap:/2)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
      _plusSign_2(_percentSign_2(_hyphenMinus_2(_index, 1), _size_1(_self)), 1),
      _anObject,
    );
  },
  "{ :self :index :anObject |\n\t\tself[index - 1 % self.size + 1] := anObject\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
  "beginsWith",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isSequence_1(_aSequence), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _k = _size_1(_aSequence);
      /* Statements */
      return _valueWithReturn_1(function (_return_1) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _return_1";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _ifTrue_2(_lessThanSign_2(_size_1(_self), _k), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _return_1(false);
        });
        _toDo_3(1, _k, function (_index) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _index";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _ifFalse_2(
            _equalsSign_2(_at_2(_aSequence, _index), _at_2(_self, _index)),
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
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_1("Sequencable>>beginsWith: not a sequence");
    });
  },
  "{ :self :aSequence |\n\t\taSequence.isSequence.if {\n\t\t\tlet k = aSequence.size;\n\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\t(self.size < k).ifTrue {\n\t\t\t\t\tfalse.return\n\t\t\t\t};\n\t\t\t\t1.toDo(k) { :index |\n\t\t\t\t\t(aSequence[index] = self[index]).ifFalse {\n\t\t\t\t\t\tfalse.return\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\ttrue\n\t\t\t}\n\t\t} {\n\t\t\t'Sequencable>>beginsWith: not a sequence'.error\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
  "brayCurtisDistance",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(
      _sum_1(_abs_1(_hyphenMinus_2(_self, _aSequence))),
      _sum_1(_abs_1(_plusSign_2(_self, _aSequence))),
    );
  },
  "{ :self :aSequence |\n\t\t(self - aSequence).abs.sum / (self + aSequence).abs.sum\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "canberraDistance",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _sum_1(
      _solidus_2(
        _abs_1(_hyphenMinus_2(_self, _aSequence)),
        _plusSign_2(_abs_1(_self), _abs_1(_aSequence)),
      ),
    );
  },
  "{ :self :aSequence |\n\t\t((self - aSequence).abs / (self.abs + aSequence.abs)).sum\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "chessboardDistance",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _max_1(_abs_1(_hyphenMinus_2(_self, _aSequence)));
  },
  "{ :self :aSequence |\n\t\t(self - aSequence).abs.max\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
    let _aCollection = _List_1(_kk);
    /* Statements */
    return _combinationsAtInAfterDo_5(_self, 1, _aCollection, 0, _aBlock_1);
  },
  "{ :self :kk :aBlock:/1 |\n\t\tlet aCollection = List(kk);\n\t\tself.combinationsAtInAfterDo(1, aCollection, 0, aBlock:/1)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
    return _toDo_3(_plusSign_2(_n, 1), _size_1(_self), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _atPut_3(_aCollection, _j, _at_2(_self, _index));
      return _if_3(_equalsSign_2(_j, _size_1(_aCollection)), function () {
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
          _plusSign_2(_j, 1),
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
  "Sequence",
  "Sequence",
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
      return _plusSign_2(_sum, _size_1(_each));
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
        return _index = _plusSign_2(_index, 1);
      });
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answerSize = self.injectInto(0) { :sum :each |\n\t\t\tsum + each.size\n\t\t};\n\t\tlet answer = self.species.ofSize(answerSize);\n\t\tlet index = 1;\n\t\tself.do { :each |\n\t\t\teach.do { :item |\n\t\t\t\tanswer[index] := item;\n\t\t\t\tindex := index + 1\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
      _plusSign_2(_hyphenMinus_2(_stop, _start), 1),
      _species_1(_self),
      function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _at_2(_self, _hyphenMinus_2(_plusSign_2(_index, _start), 1));
      },
    );
  },
  "{ :self :start :stop |\n\t\t1.toAsCollect(stop - start + 1, self.species) { :index |\n\t\t\tself[index + start - 1]\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
    let _end = _plusSign_2(_hyphenMinus_2(_start, 1), _size_1(_aCollection));
    let _newSize = _hyphenMinus_2(_plusSign_2(_size_1(_self), _end), _stop);
    let _answer = _ofSize_2(_species_1(_self), _newSize);
    /* Statements */
    _ifTrue_2(_greaterThanSign_2(_start, 1), function () {
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
        _hyphenMinus_2(_start, 1),
        _self,
        1,
      );
    });
    _ifTrue_2(_lessThanSignEqualsSign_2(_start, _end), function () {
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
    _ifTrue_2(_lessThanSign_2(_end, _newSize), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _replaceFromToWithStartingAt_5(
        _answer,
        _plusSign_2(_end, 1),
        _newSize,
        _self,
        _plusSign_2(_stop, 1),
      );
    });
    return _answer;
  },
  "{ :self :start :stop :aCollection |\n\t\tlet end = start - 1 + aCollection.size;\n\t\tlet newSize = self.size + end - stop;\n\t\tlet answer = self.species.ofSize(newSize);\n\t\t(start > 1).ifTrue {\n\t\t\tanswer.replaceFromToWithStartingAt(1, start - 1, self, 1)\n\t\t};\n\t\t(start <= end).ifTrue {\n\t\t\tanswer.replaceFromToWithStartingAt(start, end, aCollection, 1)\n\t\t};\n\t\t(end < newSize).ifTrue {\n\t\t\tanswer.replaceFromToWithStartingAt(end + 1, newSize, self, stop + 1)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
    return _if_3(_equalsSign_2(_index, 0), function () {
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
  "Sequence",
  "Sequence",
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
    return _if_3(_equalsSign_2(_index, 0), function () {
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
      return _first_2(_self, _hyphenMinus_2(_index, 1));
    });
  },
  "{ :self :anElement |\n\t\tlet index = self.indexOf(anElement);\n\t\t(index = 0).if {\n\t\t\tself.copy\n\t\t} {\n\t\t\tself.first(index - 1)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
    return _if_3(_equalsSign_2(_index, 0), function () {
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
      return _first_2(_self, _hyphenMinus_2(_index, 1));
    });
  },
  "{ :self :anElement |\n\t\tlet index = self.lastIndexOf(anElement);\n\t\t(index = 0).if {\n\t\t\tself.copy\n\t\t} {\n\t\t\tself.first(index - 1)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
  "crossedMultiply",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _withCollectCrossed_3(_self, _aSequence, _asterisk_2);
  },
  "{ :self :aSequence |\n\t\tself.withCollectCrossed(aSequence, *)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
      _ifFalse_2(_equalsSign_2(_index, 1), function () {
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
  "Sequence",
  "Sequence",
  "dot",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _inner_4(_basicTimes_2, _self, _aSequence, _basicPlus_2);
  },
  "{ :self :aSequence |\n\t\tbasicTimes:/2.inner(self, aSequence, basicPlus:/2)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "dotProduct",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isVector_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(
        _verticalLine_2(_isVector_1(_aSequence), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _isMatrix_1(_aSequence);
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _sum_1(_e_1(_asterisk_2)(_self, _aSequence));
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _error_1(
            "@Sequence>>dotProduct: argument not vector or matrix",
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
      return _if_3(_isMatrix_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _if_3(_isVector_1(_aSequence), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _collect_2(_self, function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _sum_1(_e_1(_asterisk_2)(_each, _aSequence));
          });
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _if_3(_isMatrix_1(_aSequence), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _collect_2(_self, function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                console.error(errorMessage);
                throw Error(errorMessage);
              }
              /* Statements */
              return _dot_2(_each, _aSequence);
            });
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _error_1(
              "@Sequence>>dotProduct: argument not vector or matrix",
            );
          });
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _error_1("@Sequence>>dotProduct: self not vector or matrix");
      });
    });
  },
  "{ :self :aSequence |\n\t\tself.isVector.if {\n\t\t\t(aSequence.isVector | { aSequence.isMatrix }).if {\n\t\t\t\t(self *.e aSequence).sum\n\t\t\t} {\n\t\t\t\t'@Sequence>>dotProduct: argument not vector or matrix'.error\n\t\t\t}\n\t\t} {\n\t\t\tself.isMatrix.if {\n\t\t\t\taSequence.isVector.if {\n\t\t\t\t\tself.collect { :each |\n\t\t\t\t\t\t(each *.e aSequence).sum\n\t\t\t\t\t}\n\t\t\t\t} {\n\t\t\t\t\taSequence.isMatrix.if {\n\t\t\t\t\t\tself.collect { :each |\n\t\t\t\t\t\t\teach.dot(aSequence)\n\t\t\t\t\t\t}\n\t\t\t\t\t} {\n\t\t\t\t\t\t'@Sequence>>dotProduct: argument not vector or matrix'.error\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\t'@Sequence>>dotProduct: self not vector or matrix'.error\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
      return _ampersand_2(_conditionBlock_0(), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _lessThanSignEqualsSign_2(_nextIndex, _endIndex);
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
      return _nextindex = _plusSign_2(_index, 1);
    });
  },
  "{ :self :activity:/1 :conditionBlock:/0 |\n\t\tlet nextIndex = 1;\n\t\tlet endIndex = self.size;\n\t\t{\n\t\t\tconditionBlock() & {\n\t\t\t\tnextIndex <= endIndex\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\tactivity(self[nextIndex]);\n\t\t\tnextindex := index + 1\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
      return _ifFalse_2(
        _equalsSign_2(_anItem, _at_2(_self, _index)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _aBlock_1(_at_2(_self, _index));
        },
      );
    });
  },
  "{ :self :aBlock:/1 :anItem |\n\t\tself.indicesDo { :index |\n\t\t\t(anItem = self[index]).ifFalse {\n\t\t\t\taBlock(self[index])\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "duplicateEach",
  ["self", "counts"],
  function (_self, _counts) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _counts";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _ifTrue_2(_isInteger_1(_counts), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _counts = _replicate_2(_counts, _size_1(_self));
    });
    return _replicateEachApplying_3(_self, _counts, _value_1);
  },
  "{ :self :counts |\n\t\tcounts.isInteger.ifTrue {\n\t\t\tcounts := counts.replicate(self.size)\n\t\t};\n\t\tself.replicateEachApplying(counts, value:/1)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "editDistance",
  ["self", "other"],
  function (_self, _other) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _other";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _levenshteinDistance_2(_self, _other);
  },
  "{ :self :other |\n\t\tself.levenshteinDistance(other)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
    return _verticalLine_2(
      _equalsSignEqualsSign_2(_self, _anObject),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _ampersand_2(
          _equalsSign_2(_typeOf_1(_self), _typeOf_1(_anObject)),
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
      },
    );
  },
  "{ :self :anObject :aBlock:/2 |\n\t\tself == anObject | {\n\t\t\tself.typeOf = anObject.typeOf & {\n\t\t\t\tself.hasEqualElementsBy(anObject, aBlock:/2)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "euclideanDistance",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _norm_1(_hyphenMinus_2(_self, _aSequence));
  },
  "{ :self :aSequence |\n\t\t(self - aSequence).norm\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
      return _index = _plusSign_2(_index, 1);
    });
    return _self;
  },
  "{ :self :aCollection :aBlock:/1 |\n\t\tlet index = 1;\n\t\taCollection.do { :each |\n\t\t\tself[index] := aBlock(each);\n\t\t\tindex := index + 1\n\t\t};\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
      return _error_2(_self, "@Sequence>>findBinary: not found");
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.findBinaryDoIfNone(aBlock:/1) { :found |\n\t\t\tfound\n\t\t} {\n\t\t\tself.error('@Sequence>>findBinary: not found')\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
        _ifTrue_2(_greaterThanSign_2(_previousIndex, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _at_2(_self, _previousIndex);
        }),
        _ifTrue_2(
          _lessThanSignEqualsSign_2(_nextIndex, _size_1(_self)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _at_2(_self, _nextIndex);
          },
        ),
      );
    });
  },
  "{ :self :aBlock:/1 :actionBlock:/1 :exceptionBlock |\n\t\tself.findBinaryIndexDoIfNone(aBlock:/1) { :foundIndex |\n\t\t\tactionBlock(self[foundIndex])\n\t\t} { :previousIndex :nextIndex |\n\t\t\texceptionBlock.cull(\n\t\t\t\t(previousIndex > 0).ifTrue { self[previousIndex] },\n\t\t\t\t(nextIndex <= self.size).ifTrue { self[nextIndex] }\n\t\t\t)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
      return _error_2(_self, "@Sequence>>findBinaryIndex: not found");
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.findBinaryIndexDoIfNone(aBlock:/1) { :found |\n\t\t\tfound\n\t\t} {\n\t\t\tself.error('@Sequence>>findBinaryIndex: not found')\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
        return _lessThanSign_2(_high, _low);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
        let _index = _solidusSolidus_2(_plusSign_2(_high, _low), 2);
        let _test = _aBlock_1(_at_2(_self, _index));
        /* Statements */
        return _if_3(_lessThanSign_2(_test, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _high = _hyphenMinus_2(_index, 1);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _if_3(_lessThanSign_2(0, _test), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _low = _plusSign_2(_index, 1);
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
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
    let _index = _plusSign_2(_size_1(_self), 1);
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
        return _greaterThanSignEqualsSign_2(
          _index = _hyphenMinus_2(_index, 1),
          1,
        );
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
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
  "flattenedTo",
  ["self", "depth"],
  function (_self, _depth) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _depth";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_depth, 0), function () {
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
          return _addAll_2(
            _answer,
            _flattenedTo_2(_each, _hyphenMinus_2(_depth, 1)),
          );
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
    });
  },
  "{ :self :depth |\n\t\t(depth <= 0).if {\n\t\t\tself\n\t\t} {\n\t\t\tlet answer = [];\n\t\t\tself.do { :each |\n\t\t\t\teach.isCollection.if {\n\t\t\t\t\tanswer.addAll(each.flattenedTo(depth - 1))\n\t\t\t\t} {\n\t\t\t\t\tanswer.add(each)\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "flattened",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _flattenedTo_2(_self, _inf);
  },
  "{ :self |\n\t\tself.flattenedTo(inf)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "foldLeftPrefix",
  ["self", "count", "aBlock:/2"],
  function (_self, _count, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _count, _aBlock_2";
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
      let _answer = _at_2(_self, 1);
      /* Statements */
      _upToDo_3(2, _size_1(_self), function (_index) {
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
    });
  },
  "{ :self :count :aBlock:/2 |\n\t\tself.ifEmpty {\n\t\t\tself.errorEmptyCollection\n\t\t} {\n\t\t\tlet answer = self[1];\n\t\t\t2.upToDo(self.size) { :index |\n\t\t\t\tanswer := aBlock(answer, self[index])\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
    return _foldLeftPrefix_3(_self, _size_1(_self), _aBlock_2);
  },
  "{ :self :aBlock:/2 |\n\t\tself.foldLeftPrefix(self.size, aBlock:/2)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "foldRightPrefix",
  ["self", "count", "aBlock:/2"],
  function (_self, _count, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _count, _aBlock_2";
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
      let _answer = _at_2(_self, _count);
      /* Statements */
      _toByDo_4(_hyphenMinus_2(_count, 1), 1, -1, function (_index) {
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
  "{ :self :count :aBlock:/2 |\n\t\tself.ifEmpty {\n\t\t\tself.errorEmptyCollection\n\t\t} {\n\t\t\tlet answer = self[count];\n\t\t\t(count - 1).toByDo(1, -1) { :index |\n\t\t\t\tanswer := aBlock(self[index], answer)\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
    return _foldRightPrefix_3(_self, _size_1(_self), _aBlock_2);
  },
  "{ :self :aBlock:/2 |\n\t\tself.foldRightPrefix(self.size, aBlock:/2)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
    return _copyFromTo_3(
      _self,
      _plusSign_2(_asterisk_2(_n, 3), 1),
      _asterisk_2(_n, 4),
    );
  },
  "{ :self :n |\n\t\tself.copyFromTo(n * 3 + 1, n * 4)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "fromCharacterCode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isVector_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _join_1(_collect_2(_self, _fromCharacterCode_1));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _collect_2(_self, _fromCharacterCode_1);
    });
  },
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tself.collect(fromCharacterCode:/1).join\n\t\t} {\n\t\t\tself.collect(fromCharacterCode:/1)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
    _if_3(_greaterThanSign_2(_startIndex, _endIndex), function () {
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
      let _toWrite = _plusSign_2(_hyphenMinus_2(_endIndex, _startIndex), 1);
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
        return _lessThanSign_2(_written, _toWrite);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
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
      });
    });
    return _anObject;
  },
  "{ :self :startIndex :endIndex :anObject |\n\t\t(startIndex > endIndex).if {\n\t\t\tself\n\t\t} {\n\t\t\tlet written = 1;\n\t\t\tlet toWrite = endIndex - startIndex + 1;\n\t\t\tlet thisWrite = nil;\n\t\t\tself[startIndex] := anObject;\n\t\t\t{\n\t\t\t\twritten < toWrite\n\t\t\t}.whileTrue {\n\t\t\t\tthisWrite := written.min(toWrite - written);\n\t\t\t\tself.replaceFromToWithStartingAt(\n\t\t\t\t\tstartIndex + written,\n\t\t\t\t\tstartIndex + written + thisWrite - 1,\n\t\t\t\t\tself,\n\t\t\t\t\tstartIndex\n\t\t\t\t);\n\t\t\t\twritten := written + thisWrite\n\t\t\t}\n\t\t};\n\t\tanObject\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
      _hyphenMinusGreaterThanSign_2(function () {
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
      _hyphenMinusGreaterThanSign_2(function () {
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
      _hyphenMinusGreaterThanSign_2(function () {
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
      let _argumentList = _List_1(_numArgs);
      let _index = 1;
      let _endIndex = _plusSign_2(_hyphenMinus_2(_size_1(_self), _numArgs), 1);
      /* Statements */
      return _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _lessThanSignEqualsSign_2(_index, _endIndex);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _replaceFromToWithStartingAt_5(
          _argumentList,
          1,
          _numArgs,
          _self,
          _index,
        );
        _valueWithArguments_2(_aBlock, _argumentList);
        return _index = _plusSign_2(_index, _numArgs);
      });
    });
  },
  "{ :self :aBlock |\n\t\tlet numArgs = aBlock.numArgs;\n\t\tnumArgs.caseOfOtherwise([\n\t\t\t{ 0 } -> { self.error('groupsDo: At least one block argument expected') },\n\t\t\t{ 1 } -> { self.do(aBlock) },\n\t\t\t{ 2 } -> { self.pairsDo(aBlock) }\n\t\t]) {\n\t\t\tlet argumentList = List(numArgs);\n\t\t\tlet index = 1;\n\t\t\tlet endIndex = self.size - numArgs + 1;\n\t\t\t{\n\t\t\t\tindex <= endIndex\n\t\t\t}.whileTrue {\n\t\t\t\targumentList.replaceFromToWithStartingAt(1, numArgs, self, index);\n\t\t\t\taBlock.valueWithArguments(argumentList);\n\t\t\t\tindex := index + numArgs\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
      _plusSign_2(_size_1(_self), _length),
    );
    /* Statements */
    return _replaceFromToWithStartingAt_5(_answer, 1, _size_1(_self), _self, 1);
  },
  "{ :self :length |\n\t\tlet answer = self.species.ofSize(self.size + length);\n\t\tanswer.replaceFromToWithStartingAt(1, self.size, self, 1)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "hammingDistance",
  ["self", "other"],
  function (_self, _other) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _other";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _size = _min_2(_size_1(_self), _size_1(_other));
    let _count = _abs_1(_hyphenMinus_2(_size_1(_self), _size_1(_other)));
    /* Statements */
    _toDo_3(1, _size, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(
        _tildeEqualsSign_2(_at_2(_self, _index), _at_2(_other, _index)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _count = _plusSign_2(_count, 1);
        },
      );
    });
    return _count;
  },
  "{ :self :other |\n\t\tlet size = self.size.min(other.size);\n\t\tlet count = (self.size - other.size).abs;\n\t\t1.toDo(size) { :index |\n\t\t\t(self[index] ~= other[index]).ifTrue {\n\t\t\t\tcount := count + 1\n\t\t\t}\n\t\t};\n\t\tcount\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
      _ampersand_2(_isSequence_1(_otherCollection), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_size_1(_self), _size_1(_otherCollection));
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
  "{ :self :otherCollection :aBlock:/2 |\n\t\t(otherCollection.isSequence & {\n\t\t\tself.size = otherCollection.size\n\t\t}).if {\n\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\tself.indicesDo { :index |\n\t\t\t\t\taBlock(self[index], otherCollection[index]).ifFalse {\n\t\t\t\t\t\tfalse.return\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\ttrue\n\t\t\t}\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
    return _hasEqualElementsBy_3(_self, _otherCollection, _equalsSign_2);
  },
  "{ :self :otherCollection |\n\t\tself.hasEqualElementsBy(otherCollection, =)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
    return _tildeEqualsSign_2(_indexOf_2(_self, _anObject), 0);
  },
  "{ :self :anObject |\n\t\tself.indexOf(anObject) ~= 0\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
    return _ampersand_2(_isInteger_1(_index), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(_greaterThanSign_2(_index, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _lessThanSignEqualsSign_2(_index, _size_1(_self));
      });
    });
  },
  "{ :self :index |\n\t\tindex.isInteger & {\n\t\t\tindex > 0 & {\n\t\t\t\tindex <= self.size\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
    return _if_3(_equalsSign_2(_index, 0), function () {
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
  "Sequence",
  "Sequence",
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
          _equalsSign_2(_at_2(_self, _index), _anElement),
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
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
    return _if_3(_equalsSign_2(_subCollectionSize, 0), function () {
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
          _plusSign_2(_hyphenMinus_2(_size_1(_self), _subCollectionSize), 1),
          function (_startIndex) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _startIndex";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _ifTrue_2(
              _equalsSign_2(_at_2(_self, _startIndex), _first),
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
                  return _ampersand_2(
                    _lessThanSignEqualsSign_2(_index, _subCollectionSize),
                    function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        console.error(errorMessage);
                        throw Error(errorMessage);
                      }
                      /* Statements */
                      return _equalsSign_2(
                        _at_2(
                          _self,
                          _hyphenMinus_2(_plusSign_2(_startIndex, _index), 1),
                        ),
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
                  return _index = _plusSign_2(_index, 1);
                });
                return _ifFalse_2(
                  _lessThanSignEqualsSign_2(_index, _subCollectionSize),
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
  "Sequence",
  "Sequence",
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
    let _answer = _List_1(_size_1(_self));
    /* Statements */
    _withIndexDo_2(_self, function (_each, _index) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(
        _answer,
        _index,
        _hyphenMinusGreaterThanSign_2(_index, _each),
      );
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = List(self.size);\n\t\tself.withIndexDo { :each :index |\n\t\t\tanswer[index] := (index -> each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
    let _index = _hyphenMinus_2(_initialIndex, 1);
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
        _plusSign_2(_index, 1),
      );
      return _equalsSign_2(_index, 0);
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
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
  "iota",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _reshape_2(_upOrDownTo_2(1, _product_1(_self)), _self);
  },
  "{ :self |\n\t\t(1 .. self.product).reshape(self)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "isArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ifError_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _shape_1(_self);
      return true;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return false;
    });
  },
  "{ :self |\n\t\t{\n\t\t\tself.shape;\n\t\t\ttrue\n\t\t}.ifError {\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "isMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _type = _typeOf_1(_self);
    /* Statements */
    return _ampersand_2(
      _allSatisfy_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _ampersand_2(
          _equalsSign_2(_typeOf_1(_each), _type),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _isVector_1(_each);
          },
        );
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_size_1(_asSet_1(_collect_2(_self, _size_1))), 1);
      },
    );
  },
  "{ :self |\n\t\tlet type = self.typeOf;\n\t\tself.allSatisfy { :each |\n\t\t\teach.typeOf = type & {\n\t\t\t\teach.isVector\n\t\t\t}\n\t\t} & {\n\t\t\tself.collect(size:/1).asSet.size = 1\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "isMatrixOf",
  ["self", "elementType"],
  function (_self, _elementType) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elementType";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isMatrix_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
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
        return _equalsSign_2(_elementType_1(_each), _elementType);
      });
    });
  },
  "{ :self :elementType |\n\t\tself.isMatrix & {\n\t\t\tself.allSatisfy { :each |\n\t\t\t\teach.elementType = elementType\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
      return _ampersand_2(_isInteger_1(_each), function () {
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
  "Sequence",
  "Sequence",
  "isSequence",
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
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
      _lessThanSignEqualsSign_2,
      _startIndex,
      _endIndex,
    );
  },
  "{ :self :startIndex :endIndex |\n\t\tself.isSortedByBetweenAnd(<=, startIndex, endIndex)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
    return _if_3(
      _lessThanSignEqualsSign_2(_endIndex, _startIndex),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return true;
      },
      function () {
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
          _toDo_3(_plusSign_2(_startIndex, 1), _endIndex, function (_index) {
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
      },
    );
  },
  "{ :self :aBlock:/2 :startIndex :endIndex |\n\t\t(endIndex <= startIndex).if {\n\t\t\ttrue\n\t\t} {\n\t\t\tlet previousElement = self[startIndex];\n\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\t(startIndex + 1).toDo(endIndex) { :index |\n\t\t\t\t\tlet element = self[index];\n\t\t\t\t\taBlock(previousElement, element).ifFalse {\n\t\t\t\t\t\tfalse.return\n\t\t\t\t\t};\n\t\t\t\t\tpreviousElement := element\n\t\t\t\t};\n\t\t\t\ttrue\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "isVector",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _type = _typeOf_1(_self);
    /* Statements */
    return _noneSatisfy_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_typeOf_1(_each), _type);
    });
  },
  "{ :self |\n\t\tlet type = self.typeOf;\n\t\tself.noneSatisfy { :each |\n\t\t\teach.typeOf = type\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "isVectorOf",
  ["self", "elementType"],
  function (_self, _elementType) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elementType";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isVector_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_elementType_1(_self), _elementType);
    });
  },
  "{ :self :elementType |\n\t\tself.isVector & {\n\t\t\tself.elementType = elementType\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
    return _copyFromTo_3(
      _self,
      _plusSign_2(_hyphenMinus_2(_size, _n), 1),
      _size,
    );
  },
  "{ :self :n |\n\t\tlet size = self.size;\n\t\tself.copyFromTo(size - n + 1, size)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
    return _if_3(_equalsSign_2(_index, 0), function () {
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
  "Sequence",
  "Sequence",
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
          _equalsSign_2(_at_2(_self, _index), _anElement),
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
  "Sequence",
  "Sequence",
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
    return _if_3(_equalsSign_2(_index, 0), function () {
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
  "Sequence",
  "Sequence",
  "levenshteinDistance",
  ["self", "other"],
  function (_self, _other) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _other";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _levenshteinDistance_3(_self, _other, _equalsSign_2);
  },
  "{ :self :other |\n\t\tself.levenshteinDistance(other, =)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "levenshteinDistance",
  ["self", "other", "equalityBlock:/2"],
  function (_self, _other, _equalityBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _other, _equalityBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _verticalLine_2(_isEmpty_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _isEmpty_1(_other);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _size_1(_self);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
        let _matrix = _asList_1(_upOrDownTo_2(0, _size_1(_other)));
        /* Statements */
        _toDo_3(1, _size_1(_self), function (_xIndex) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _xIndex";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Temporaries */
          let _corner = _hyphenMinus_2(_xIndex, 1);
          /* Statements */
          _atPut_3(_matrix, 1, _hyphenMinus_2(_xIndex, 1));
          return _toDo_3(1, _size_1(_other), function (_yIndex) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _yIndex";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Temporaries */
            let _upper = _at_2(_matrix, _plusSign_2(_yIndex, 1));
            /* Statements */
            _atPut_3(
              _matrix,
              _plusSign_2(_yIndex, 1),
              _if_3(
                _equalityBlock_2(_at_2(_self, _xIndex), _at_2(_other, _yIndex)),
                function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    console.error(errorMessage);
                    throw Error(errorMessage);
                  }
                  /* Statements */
                  return _corner;
                },
                function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    console.error(errorMessage);
                    throw Error(errorMessage);
                  }
                  /* Statements */
                  return _plusSign_2(
                    _min_1([_upper, _corner, _at_2(_matrix, _yIndex)]),
                    1,
                  );
                },
              ),
            );
            return _corner = _upper;
          });
        });
        return _at_2(_matrix, _plusSign_2(_size_1(_other), 1));
      },
    );
  },
  "{ :self :other :equalityBlock:/2 |\n\t\t(self.isEmpty | {\n\t\t\tother.isEmpty\n\t\t}).if {\n\t\t\tself.size\n\t\t} {\n\t\t\tlet matrix = [0 .. other.size];\n\t\t\t1.toDo(self.size) { :xIndex |\n\t\t\t\tlet corner = xIndex - 1;\n\t\t\t\tmatrix[1] := xIndex - 1;\n\t\t\t\t1.toDo(other.size) { :yIndex |\n\t\t\t\t\tlet upper = matrix[yIndex + 1];\n\t\t\t\t\tmatrix[yIndex + 1] := equalityBlock(self[xIndex], other[yIndex]).if {\n\t\t\t\t\t\tcorner\n\t\t\t\t\t} {\n\t\t\t\t\t\t[upper, corner, matrix[yIndex]].min + 1\n\t\t\t\t\t};\n\t\t\t\t\tcorner := upper\n\t\t\t\t}\n\t\t\t};\n\t\t\tmatrix[other.size + 1]\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "manhattanDistance",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _sum_1(_abs_1(_hyphenMinus_2(_self, _aSequence)));
  },
  "{ :self :aSequence |\n\t\t(self - aSequence).abs.sum\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "median",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _median_1(_asSortedList_1(_self));
  },
  "{ :self |\n\t\tself.asSortedList.median\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
    return _at_2(_self, _plusSign_2(_solidusSolidus_2(_size_1(_self), 2), 1));
  },
  "{ :self |\n\t\tself[self.size // 2 + 1]\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "mixedRadixDecode",
  ["self", "factors"],
  function (_self, _factors) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _factors";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = 0;
    let _base = 1;
    let _k = _min_2(_size_1(_factors), _size_1(_self));
    let _prefix = _hyphenMinus_2(_size_1(_self), _size_1(_factors));
    /* Statements */
    _ifTrue_2(_greaterThanSign_2(_prefix, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_1("Sequence>>mixedRadixDecode: sequence too long");
    });
    _do_2(_upOrDownTo_2(_k, 1), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _answer = _plusSign_2(
        _answer,
        _asterisk_2(_at_2(_self, _plusSign_2(_index, _prefix)), _base),
      );
      return _base = _asterisk_2(_base, _at_2(_factors, _index));
    });
    _ifTrue_2(_equalsSign_2(_prefix, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _answer = _plusSign_2(
        _answer,
        _asterisk_2(_at_2(_self, 1), _base),
      );
    });
    return _answer;
  },
  "{ :self :factors |\n\t\tlet answer = 0;\n\t\tlet base = 1;\n\t\tlet k = factors.size.min(self.size);\n\t\tlet prefix = self.size - factors.size;\n\t\t(prefix > 1).ifTrue {\n\t\t\t'Sequence>>mixedRadixDecode: sequence too long'.error\n\t\t};\n\t\t(k .. 1).do { :index |\n\t\t\tanswer := answer + (self[index + prefix] * base);\n\t\t\tbase := base * factors[index]\n\t\t};\n\t\t(prefix = 1).ifTrue {\n\t\t\tanswer := answer + (self[1] * base)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "norm",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _sqrt_1(_scalarProduct_2(_self, _conjugated_1(_self)));
  },
  "{ :self |\n\t\t(self.scalarProduct(self.conjugated)).sqrt\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
      return _ifTrue_2(
        _equalsSign_2(_at_2(_self, _index), _anObject),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _tally = _plusSign_2(_tally, 1);
        },
      );
    });
    return _tally;
  },
  "{ :self :anObject |\n\t\tlet tally = 0;\n\t\tself.indicesDo { :index |\n\t\t\t(self[index] = anObject).ifTrue {\n\t\t\t\ttally := tally + 1\n\t\t\t}\n\t\t};\n\t\ttally\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "outerProduct",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _outer_1(_asterisk_2)(_self, _aSequence);
  },
  "{ :self :aSequence |\n\t\tself *.outer aSequence\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
      _upOrDownTo_2(1, _solidusSolidus_2(_size_1(_self), 2)),
      function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _aBlock_2(
          _at_2(_self, _hyphenMinus_2(_asterisk_2(2, _index), 1)),
          _at_2(_self, _asterisk_2(2, _index)),
        );
      },
    );
  },
  "{ :self :aBlock:/2 |\n\t\t(1 .. self.size // 2).collect { :index |\n\t\t\taBlock(self[2 * index - 1], self[2 * index])\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
    return _toDo_3(1, _solidusSolidus_2(_size_1(_self), 2), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _aBlock_2(
        _at_2(_self, _hyphenMinus_2(_asterisk_2(2, _index), 1)),
        _at_2(_self, _asterisk_2(2, _index)),
      );
    });
  },
  "{ :self :aBlock:/2 |\n\t\t1.toDo(self.size // 2) { :index |\n\t\t\taBlock(self[2 * index - 1], self[2 * index])\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
  "permutations",
  ["self", "size"],
  function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _concatenation_1(_collect_2(
      _powerSet_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_size_1(_each), _size);
      }),
      _permutations_1,
    ));
  },
  "{ :self :size |\n\t\tself.powerSet { :each |\n\t\t\teach.size = size\n\t\t}.collect(permutations:/1).concatenation\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
    return _if_3(_greaterThanSign_2(_anInteger, _size_1(_self)), function () {
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
      return _if_3(_equalsSign_2(_anInteger, _size_1(_self)), function () {
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
          _permutationsStartingAtDo_3(
            _self,
            _plusSign_2(_anInteger, 1),
            _aBlock_1,
          );
          return _swapWith_3(_self, _anInteger, _index);
        });
      });
    });
  },
  "{ :self :anInteger :aBlock:/1 |\n\t\t(anInteger > self.size).if {\n\t\t\tself\n\t\t} {\n\t\t\t(anInteger = self.size).if {\n\t\t\t\taBlock(self)\n\t\t\t} {\n\t\t\t\tanInteger.upToDo(self.size) { :index |\n\t\t\t\t\tself.swapWith(anInteger, index);\n\t\t\t\t\tself.permutationsStartingAtDo(anInteger + 1, aBlock:/1);\n\t\t\t\t\tself.swapWith(anInteger, index)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
    return _if_3(_lessThanSign_2(_index, 1), function () {
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
      return _if_3(_greaterThanSign_2(_index, _size_1(_self)), function () {
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
  "Sequence",
  "Sequence",
  "powerSetDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _size = _circumflexAccent_2(2, _size_1(_self));
    let _powersOfTwo = _circumflexAccent_2(
      2,
      _upOrDownTo_2(0, _hyphenMinus_2(_size_1(_self), 1)),
    );
    /* Statements */
    _do_2(_upOrDownTo_2(0, _hyphenMinus_2(_size, 1)), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _next = [];
      /* Statements */
      _withIndexDo_2(_powersOfTwo, function (_each, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _j";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(
          _tildeEqualsSign_2(
            _percentSign_2(_solidusSolidus_2(_i, _each), 2),
            0,
          ),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _add_2(_next, _at_2(_self, _j));
          },
        );
      });
      return _aBlock_1(_next);
    });
    return _self;
  },
  "{ :self :aBlock:/1 |\n\t\tlet size = 2 ^ self.size;\n\t\tlet powersOfTwo = 2 ^ (0 .. self.size - 1);\n\t\t(0 .. size - 1).do { :i |\n\t\t\tlet next = [];\n\t\t\tpowersOfTwo.withIndexDo { :each :j |\n\t\t\t\t(i // each % 2 ~= 0).ifTrue {\n\t\t\t\t\tnext.add(self[j])\n\t\t\t\t}\n\t\t\t};\n\t\t\taBlock(next)\n\t\t};\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "powerSet",
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
    _powerSetDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(_aBlock_1(_each), function () {
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
  "{ :self :aBlock:/1 |\n\t\tlet answer = [];\n\t\tself.powerSetDo { :each |\n\t\t\taBlock(each).ifTrue {\n\t\t\t\tanswer.add(each)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "powerSet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _powerSet_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return true;
    });
  },
  "{ :self |\n\t\tself.powerSet { :each |\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "prefixesDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _upToDo_3(1, _size_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_copyFromTo_3(_self, 1, _each));
    });
  },
  "{ :self :aBlock:/1 |\n\t\t1.upToDo(self.size) { :each |\n\t\t\taBlock(self.copyFromTo(1, each))\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "prefixes",
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
    _prefixesDo_2(_self, function (_each) {
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
  "{ :self |\n\t\tlet answer = [];\n\t\tself.prefixesDo { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
    return _scan_2(_self, _asterisk_2);
  },
  "{ :self |\n\t\tself.scan(*)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
    return _scan_2(_self, _plusSign_2);
  },
  "{ :self |\n\t\tself.scan(+)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "randomWeightedIndex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _r = _nextRandomFloat_1(_system);
    let _sum = 0;
    let _answer = 1;
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _do_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _sum = _plusSign_2(_sum, _each);
        _ifTrue_2(_greaterThanSign_2(_sum, _r), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _return_1(_answer);
        });
        return _answer = _plusSign_2(_answer, 1);
      });
      return _answer;
    });
  },
  "{ :self |\n\t\tlet r = system.nextRandomFloat;\n\t\tlet sum = 0;\n\t\tlet answer = 1;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself.do { :each |\n\t\t\t\tsum := sum + each;\n\t\t\t\t(sum > r).ifTrue {\n\t\t\t\t\tanswer.return\n\t\t\t\t};\n\t\t\t\tanswer := answer + 1\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "rank",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _size_1(_shape_1(_self));
  },
  "{ :self |\n\t\tself.shape.size\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
      _index = _indexOfStartingAt_3(_self, _oldObject, _plusSign_2(_index, 1));
      return _equalsSign_2(_index, 0);
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
  "Sequence",
  "Sequence",
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
      _equalsSign_2(
        _size_1(_replacement),
        _plusSign_2(_hyphenMinus_2(_stop, _start), 1),
      ),
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
  "Sequence",
  "Sequence",
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
    let _replacementOffset = _hyphenMinus_2(_replacementStart, _start);
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
      return _lessThanSignEqualsSign_2(_index, _stop);
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
        _at_2(_replacement, _plusSign_2(_replacementOffset, _index)),
      );
      return _index = _plusSign_2(_index, 1);
    });
    return _self;
  },
  "{ :self :start :stop :replacement :replacementStart |\n\t\tlet replacementOffset = replacementStart - start;\n\t\tlet index = start;\n\t\t{\n\t\t\tindex <= stop\n\t\t}.whileTrue {\n\t\t\tself[index] := replacement[replacementOffset + index];\n\t\t\tindex := index + 1\n\t\t};\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "replicateEachApplying",
  ["self", "counts", "aBlock:/1"],
  function (_self, _counts, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _counts, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _tildeEqualsSign_2(_size_1(_self), _size_1(_counts)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _error_1(
          "Sequence>>replicateEachApplying: counts not of correct size",
        );
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
        let _answerSize = _sum_1(_counts);
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
          return _timesRepeat_2(_at_2(_counts, _selfIndex), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            _atPut_3(_answer, _answerIndex, _entry);
            return _answerIndex = _plusSign_2(_answerIndex, 1);
          });
        });
        return _answer;
      },
    );
  },
  "{ :self :counts :aBlock:/1 |\n\t\t(self.size ~= counts.size).if {\n\t\t\t'Sequence>>replicateEachApplying: counts not of correct size'.error\n\t\t} {\n\t\t\tlet answerSize = counts.sum;\n\t\t\tlet answer = self.species.ofSize(answerSize);\n\t\t\tlet answerIndex = 1;\n\t\t\t(1 .. self.size).do { :selfIndex |\n\t\t\t\tlet entry = aBlock(self[selfIndex]);\n\t\t\t\tcounts[selfIndex].timesRepeat {\n\t\t\t\t\tanswer[answerIndex] := entry;\n\t\t\t\t\tanswerIndex := answerIndex + 1\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "replicateEach",
  ["self", "counts"],
  function (_self, _counts) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _counts";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _ifTrue_2(_isInteger_1(_counts), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _counts = _replicate_2(_counts, _size_1(_self));
    });
    return _replicateEachApplying_3(_self, _counts, _identity_1);
  },
  "{ :self :counts |\n\t\tcounts.isInteger.ifTrue {\n\t\t\tcounts := counts.replicate(self.size)\n\t\t};\n\t\tself.replicateEachApplying(counts, identity:/1)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "reshape",
  ["self", "shape"],
  function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ifEmpty_3(_shape, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_1("Sequence>>reshape: empty shape?");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _size = _product_1(_shape);
      let _answer = _wrapExtend_2(_flattened_1(_self), _size);
      /* Statements */
      _reverseDo_2(_allButFirst_1(_shape), function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _answer = _clump_2(_answer, _n);
      });
      return _answer;
    });
  },
  "{ :self :shape |\n\t\tshape.ifEmpty {\n\t\t\t'Sequence>>reshape: empty shape?'.error\n\t\t} {\n\t\t\tlet size = shape.product;\n\t\t\tlet answer = self.flattened.wrapExtend(size);\n\t\t\tshape.allButFirst.reverseDo { :n |\n\t\t\t\tanswer := answer.clump(n)\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "reshapeLike",
  ["self", "another"],
  function (_self, _another) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _another";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _index = 1;
    let _items = _flattened_1(_self);
    /* Statements */
    return _deepCollect_2(_another, function (_unusedItem) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unusedItem";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _item = _atWrap_2(_items, _index);
      /* Statements */
      _index = _plusSign_2(_index, 1);
      return _item;
    });
  },
  "{ :self :another |\n\t\tlet index = 1;\n\t\tlet items = self.flattened;\n\t\tanother.deepCollect { :unusedItem |\n\t\t\tlet item = items.atWrap(index);\n\t\t\tindex := index + 1;\n\t\t\titem\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
    let _fromIndex = _plusSign_2(_size_1(_self), 1);
    /* Statements */
    _indicesDo_2(_self, function (_toIndex) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _toIndex";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _atPut_3(_answer, _toIndex, _at_2(_self, _hyphenMinus_2(_fromIndex, 1)));
      return _fromIndex = _hyphenMinus_2(_fromIndex, 1);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = self.species.ofSize(self.size);\n\t\tlet fromIndex = self.size + 1;\n\t\tself.indicesDo { :toIndex |\n\t\t\tanswer[toIndex] := self[fromIndex - 1];\n\t\t\tfromIndex := fromIndex - 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
      _tildeEqualsSign_2(_size_1(_self), _size_1(_aSequence)),
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
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
  "rotatedLeft",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _rotatedLeft_2(_self, 1);
  },
  "{ :self |\n\t\tself.rotatedLeft(1)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
      _plusSign_2(1, _anInteger),
      _plusSign_2(_size_1(_self), _anInteger),
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
  "Sequence",
  "Sequence",
  "rotatedRight",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _rotatedRight_2(_self, 1);
  },
  "{ :self |\n\t\tself.rotatedRight(1)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
      _hyphenMinus_2(1, _anInteger),
      _hyphenMinus_2(_size_1(_self), _anInteger),
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
  "Sequence",
  "Sequence",
  "scalarProduct",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _sum_1(_e_1(_asterisk_2)(_self, _aSequence));
  },
  "{ :self :aSequence |\n\t\t(self *.e aSequence).sum\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
    return _scanLeft_2(_self, _aBlock_2);
  },
  "{ :self :aBlock:/2 |\n\t\tself.scanLeft(aBlock:/2)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "scanLeft",
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
      let _next = _at_2(_self, 1);
      /* Statements */
      _atPut_3(_answer, 1, _next);
      _toDo_3(2, _size_1(_self), function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _next = _aBlock_2(_next, _at_2(_self, _index));
        return _atPut_3(_answer, _index, _next);
      });
      return _answer;
    });
  },
  "{ :self :aBlock:/2 |\n\t\tself.ifEmpty {\n\t\t\tself.copy\n\t\t} {\n\t\t\tlet answer = self.species.new(self.size);\n\t\t\tlet next = self[1];\n\t\t\tanswer[1] := next;\n\t\t\t2.toDo(self.size) { :index |\n\t\t\t\tnext := aBlock(next, self[index]);\n\t\t\t\tanswer[index] := next\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "scanLeftAssociatingRight",
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
      /* Statements */
      return _collect_2(_upOrDownTo_2(1, _size_1(_self)), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _foldRightPrefix_3(_self, _each, _aBlock_2);
      });
    });
  },
  "{ :self :aBlock:/2 |\n\t\tself.ifEmpty {\n\t\t\tself.copy\n\t\t} {\n\t\t\t(1 .. self.size).collect { :each |\n\t\t\t\tself.foldRightPrefix(each, aBlock:/2)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "scanRight",
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
      let _next = _at_2(_self, _size_1(_self));
      /* Statements */
      _atPut_3(_answer, _size_1(_self), _next);
      _toByDo_4(_hyphenMinus_2(_size_1(_self), 1), 1, -1, function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _next = _aBlock_2(_at_2(_self, _index), _next);
        return _atPut_3(_answer, _index, _next);
      });
      return _answer;
    });
  },
  "{ :self :aBlock:/2 |\n\t\tself.ifEmpty {\n\t\t\tself.copy\n\t\t} {\n\t\t\tlet answer = self.species.new(self.size);\n\t\t\tlet next = self[self.size];\n\t\t\tanswer[self.size] := next;\n\t\t\t(self.size - 1).toByDo(1, -1) { :index |\n\t\t\t\tnext := aBlock(self[index], next);\n\t\t\t\tanswer[index] := next\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "shape",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_size_1(_self), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return [0];
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _type = _typeOf_1(_self);
      let _elementTypes = _elementTypes_1(_self);
      /* Statements */
      return _if_3(
        _allSatisfy_2(_elementTypes, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _equalsSign_2(_each, _type);
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Temporaries */
          let _elementShapes = _collect_2(_self, _shape_1);
          /* Statements */
          return _if_3(
            _equalsSign_2(_size_1(_nub_1(_elementShapes)), 1),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw Error(errorMessage);
              }
              /* Statements */
              return _plusSignPlusSign_2(
                [_size_1(_self)],
                _first_1(_elementShapes),
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
              return _error_1(
                "@Sequence>>shape: irregular arrays do not have shape",
              );
            },
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
          return _if_3(_includes_2(_elementTypes, _type), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _error_1(
              "@Sequence>>shape: irregular arrays do not have shape",
            );
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return [_size_1(_self)];
          });
        },
      );
    });
  },
  "{ :self |\n\t\t(self.size = 0).if {\n\t\t\t[0]\n\t\t} {\n\t\t\tlet type = self.typeOf;\n\t\t\tlet elementTypes = self.elementTypes;\n\t\t\telementTypes.allSatisfy { :each |\n\t\t\t\teach = type\n\t\t\t}.if {\n\t\t\t\tlet elementShapes = self.collect(shape:/1);\n\t\t\t\t(elementShapes.nub.size = 1).if {\n\t\t\t\t\t[self.size] ++ elementShapes.first\n\t\t\t\t} {\n\t\t\t\t\t'@Sequence>>shape: irregular arrays do not have shape'.error\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\telementTypes.includes(type).if {\n\t\t\t\t\t'@Sequence>>shape: irregular arrays do not have shape'.error\n\t\t\t\t} {\n\t\t\t\t\t[self.size]\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "standardize",
  ["self", "meanBlock:/1", "deviationBlock:/1"],
  function (_self, _meanBlock_1, _deviationBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _meanBlock_1, _deviationBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _deviation = _deviationBlock_1(_self);
    /* Statements */
    return _if_3(_equalsSign_2(_deviation, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_1("standardize: deviation = 0?");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _solidus_2(_hyphenMinus_2(_self, _meanBlock_1(_self)), _deviation);
    });
  },
  "{ :self :meanBlock:/1 :deviationBlock:/1 |\n\t\tlet deviation = deviationBlock(self);\n\t\t(deviation = 0).if {\n\t\t\t'standardize: deviation = 0?'.error\n\t\t} {\n\t\t\t(self - meanBlock(self)) / deviation\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "standardize",
  ["self", "meanBlock:/1"],
  function (_self, _meanBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _meanBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _standardize_3(_self, _meanBlock_1, _standardDeviation_1);
  },
  "{ :self :meanBlock:/1 |\n\t\tself.standardize(meanBlock:/1, standardDeviation:/1)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "standardize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _standardize_3(_self, _mean_1, _standardDeviation_1);
  },
  "{ :self |\n\t\tself.standardize(mean:/1, standardDeviation:/1)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "suffixesDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _size = _size_1(_self);
    /* Statements */
    return _upToDo_3(1, _size, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_copyFromTo_3(_self, _each, _size));
    });
  },
  "{ :self :aBlock:/1 |\n\t\tlet size = self.size;\n\t\t1.upToDo(size) { :each |\n\t\t\taBlock(self.copyFromTo(each, size))\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "suffixes",
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
    _suffixesDo_2(_self, function (_each) {
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
  "{ :self |\n\t\tlet answer = [];\n\t\tself.suffixesDo { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
    return _copyFromTo_3(_self, _plusSign_2(_n, 1), _asterisk_2(_n, 2));
  },
  "{ :self :n |\n\t\tself.copyFromTo(n + 1, n * 2)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
    return _at_2(_self, _hyphenMinus_2(_size_1(_self), 1));
  },
  "{ :self |\n\t\tself[self.size - 1]\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
    return _sortBy_2(_self, _lessThanSignEqualsSign_2);
  },
  "{ :self |\n\t\tself.sortBy(<=)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
    return _sortOnBy_3(_self, _keyBlock_1, _lessThanSignEqualsSign_2);
  },
  "{ :self :keyBlock:/1 |\n\t\tself.sortOnBy(keyBlock:/1, <=)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
    return _sortedWithIndices_2(_self, _lessThanSignEqualsSign_2);
  },
  "{ :self |\n\t\tself.sortedWithIndices(<=)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
          return _hyphenMinusGreaterThanSign_2(_each, _index);
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
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
      return _equalsSign_2(_nextIndex, 0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _aBlock_1(
        _copyFromTo_3(_self, _lastIndex, _hyphenMinus_2(_nextIndex, 1)),
      );
      return _lastIndex = _plusSign_2(_nextIndex, _size_1(_aCollection));
    });
    return _aBlock_1(_copyFromTo_3(_self, _lastIndex, _size_1(_self)));
  },
  "{ :self :aCollection :aBlock:/1 |\n\t\tlet lastIndex = 1;\n\t\tlet nextIndex = nil;\n\t\t{\n\t\t\tnextIndex := self.indexOfSubCollectionStartingAt(aCollection, lastIndex);\n\t\t\tnextIndex = 0\n\t\t}.whileFalse {\n\t\t\taBlock(self.copyFromTo(lastIndex, nextIndex - 1));\n\t\t\tlastIndex := nextIndex + aCollection.size\n\t\t};\n\t\taBlock(self.copyFromTo(lastIndex, self.size))\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
    return _copyFromTo_3(
      _self,
      _plusSign_2(_asterisk_2(_n, 2), 1),
      _asterisk_2(_n, 3),
    );
  },
  "{ :self :n |\n\t\tself.copyFromTo(n * 2 + 1, n * 3)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
    return _at_2(_self, _hyphenMinus_2(_size_1(_self), 2));
  },
  "{ :self |\n\t\tself[self.size - 2]\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
  "tuplesDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _tupleCount = _product_1(_collect_2(_self, _size_1));
    let _tuple = _new_2(_species_1(_self), _size_1(_self));
    /* Statements */
    return _toDo_3(1, _tupleCount, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _k = _hyphenMinus_2(_i, 1);
      /* Statements */
      _toByDo_4(_size_1(_self), 1, -1, function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
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
      });
      return _aBlock_1(_tuple);
    });
  },
  "{ :self :aBlock:/1 |\n\t\tlet tupleCount = self.collect(size:/1).product;\n\t\tlet tuple = self.species.new(self.size);\n\t\t1.toDo(tupleCount) { :i |\n\t\t\tlet k = i - 1;\n\t\t\tself.size.toByDo(1, -1) { :j |\n\t\t\t\tlet fromSequence = self[j];\n\t\t\t\ttuple[j] := fromSequence[k % fromSequence.size + 1];\n\t\t\t\tk := k // fromSequence.size\n\t\t\t};\n\t\t\taBlock(tuple)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "tuples",
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
    _tuplesDo_2(_self, function (_each) {
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
  "{ :self |\n\t\tlet answer = [];\n\t\tself.tuplesDo { :each |\n\t\t\tanswer.add(each.copy)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "tuples",
  ["self", "count"],
  function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _tuples_1(_exclamationMark_2(_self, _count));
  },
  "{ :self :count |\n\t\t(self ! count).tuples\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "vectorAngle",
  ["u", "v"],
  function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _ampersand_2(_isVector_1(_u), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _isVector_1(_v);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _arcCos_1(
          _solidus_2(_dot_2(_u, _v), _asterisk_2(_norm_1(_u), _norm_1(_v))),
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
        return _error_1("Sequence>>vectorAngle: not vectors");
      },
    );
  },
  "{ :u :v |\n\t\t(u.isVector & { v.isVector }).if {\n\t\t\t(u.dot(v) / (u.norm * v.norm)).arcCos\n\t\t} {\n\t\t\t'Sequence>>vectorAngle: not vectors'.error\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "withCollect",
  ["self", "aSequence", "aBlock:/2"],
  function (_self, _aSequence, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aSequence, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _withCollectWrapping_3(_self, _aSequence, _aBlock_2);
  },
  "{ :self :aSequence :aBlock:/2 |\n\t\tself.withCollectWrapping(aSequence, aBlock:/2)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "withCollectCrossed",
  ["self", "aSequence", "aBlock:/2"],
  function (_self, _aSequence, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aSequence, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _new_2(
      _species_1(_self),
      _asterisk_2(_size_1(_self), _size_1(_aSequence)),
    );
    let _nextIndex = 1;
    /* Statements */
    _do_2(_self, function (_leftItem) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _leftItem";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _do_2(_aSequence, function (_rightItem) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _rightItem";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _atPut_3(_answer, _nextIndex, _aBlock_2(_leftItem, _rightItem));
        return _nextIndex = _plusSign_2(_nextIndex, 1);
      });
    });
    return _answer;
  },
  "{ :self :aSequence :aBlock:/2 |\n\t\tlet answer = self.species.new(self.size * aSequence.size);\n\t\tlet nextIndex = 1;\n\t\tself.do { :leftItem |\n\t\t\taSequence.do { :rightItem |\n\t\t\t\tanswer[nextIndex] := aBlock(leftItem, rightItem);\n\t\t\t\tnextIndex := nextIndex + 1\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "withCollectEqual",
  ["self", "aSequence", "aBlock:/2"],
  function (_self, _aSequence, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aSequence, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _isOfSameSizeCheck_2(_self, _aSequence);
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
        return _aBlock_2(_at_2(_self, _index), _at_2(_aSequence, _index));
      },
    );
  },
  "{ :self :aSequence :aBlock:/2 |\n\t\tself.isOfSameSizeCheck(aSequence);\n\t\t1.toAsCollect(self.size, self.species) { :index |\n\t\t\taBlock(self[index], aSequence[index])\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "withCollectFolding",
  ["self", "aCollection", "aBlock:/2"],
  function (_self, _aCollection, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _maximumSize = _max_2(_size_1(_self), _size_1(_aCollection));
    /* Statements */
    return _toAsCollect_4(
      1,
      _maximumSize,
      _species_1(_self),
      function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _aBlock_2(
          _atFold_2(_self, _index),
          _atFold_2(_aCollection, _index),
        );
      },
    );
  },
  "{ :self :aCollection :aBlock:/2 |\n\t\tlet maximumSize = self.size.max(aCollection.size);\n\t\t1.toAsCollect(maximumSize, self.species) { :index |\n\t\t\taBlock(self.atFold(index), aCollection.atFold(index))\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "withCollectOrAdaptTo",
  ["self", "anObject", "aBlock:/2"],
  function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _ampersand_2(_isCollection_1(_anObject), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _isSequence_1(_anObject);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _withCollect_3(_self, _anObject, _aBlock_2);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _adaptToCollectionAndApply_3(_anObject, _self, _aBlock_2);
      },
    );
  },
  "{ :self :anObject :aBlock:/2 |\n\t\t(anObject.isCollection & {\n\t\t\tanObject.isSequence\n\t\t}).if {\n\t\t\tself.withCollect(anObject, aBlock:/2)\n\t\t} {\n\t\t\tanObject.adaptToCollectionAndApply(self, aBlock:/2)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "withCollectOuter",
  ["self", "aSequence", "aBlock:/2"],
  function (_self, _aSequence, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aSequence, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _outer_3(_aBlock_2, _self, _aSequence);
  },
  "{ :self :aSequence :aBlock:/2 |\n\t\taBlock:/2.outer(self, aSequence)\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "withCollectTable",
  ["self", "aSequence", "aBlock:/2"],
  function (_self, _aSequence, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aSequence, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _aBlock_2(_each, _aSequence);
    });
  },
  "{ :self :aSequence :aBlock:/2 |\n\t\tself.collect { :each |\n\t\t\taBlock(each, aSequence)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "withCollectTruncating",
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
      _lessThanSign_2(_size_1(_self), _size_1(_aSequence)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _withCollect_3(
          _self,
          _take_2(_aSequence, _size_1(_self)),
          _aBlock_2,
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
        return _withCollect_3(
          _take_2(_self, _size_1(_aSequence)),
          _aSequence,
          _aBlock_2,
        );
      },
    );
  },
  "{ :self :aSequence :aBlock:/2 |\n\t\t(self.size < aSequence.size).if {\n\t\t\tself.withCollect(aSequence.take(self.size), aBlock:/2)\n\t\t} {\n\t\t\tself.take(aSequence.size).withCollect(aSequence, aBlock:/2)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
  "withCollectWrapping",
  ["self", "aCollection", "aBlock:/2"],
  function (_self, _aCollection, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _maximumSize = _max_2(_size_1(_self), _size_1(_aCollection));
    /* Statements */
    return _toAsCollect_4(
      1,
      _maximumSize,
      _species_1(_self),
      function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _aBlock_2(
          _atWrap_2(_self, _index),
          _atWrap_2(_aCollection, _index),
        );
      },
    );
  },
  "{ :self :aCollection :aBlock:/2 |\n\t\tlet maximumSize = self.size.max(aCollection.size);\n\t\t1.toAsCollect(maximumSize, self.species) { :index |\n\t\t\taBlock(self.atWrap(index), aCollection.atWrap(index))\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
  "plusSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _plusSign_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, +)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Sequence",
  "hyphenMinus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _hyphenMinus_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, -)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Sequence",
  "asterisk",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _asterisk_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, *)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Sequence",
  "solidus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _solidus_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, /)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Sequence",
  "solidusSolidus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _solidusSolidus_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, //)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Sequence",
  "lessThanSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _lessThanSign_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, <)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Sequence",
  "greaterThanSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _greaterThanSign_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, >)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Sequence",
  "circumflexAccent",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _circumflexAccent_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, ^)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Sequence",
  "percentSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _percentSign_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, %)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Sequence",
  "absArg",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _absArg_1);
  },
  "{ :self |\n\t\tself.collect(absArg:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Sequence",
  "binomialCoefficient",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(
      _anObject,
      _self,
      _binomialCoefficient_2,
    );
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, binomialCoefficient:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Sequence",
  "bitAnd",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _bitAnd_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, bitAnd:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Sequence",
  "bitOr",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _bitOr_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, bitOr:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Sequence",
  "divisible",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _divisible_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, divisible:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Sequence",
  "gcd",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _gcd_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, gcd:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Sequence",
  "integerDigits",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _integerDigits_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, integerDigits:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Sequence",
  "lcm",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _lcm_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, lcm:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Sequence",
  "min",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _min_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, min:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Sequence",
  "max",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _max_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, max:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Sequence",
  "roundTo",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _roundTo_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, roundTo:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Sequence",
  "truncateTo",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _truncateTo_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, truncateTo:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Sequence",
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
  "Sequence",
  "Sequence",
  "plusSignEqualsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _applyBinaryMathOperatorInPlace_3(_self, _anObject, _plusSign_2);
  },
  "{ :self :anObject |\n\t\tapplyBinaryMathOperatorInPlace(self, anObject, +)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Sequence",
  "hyphenMinusEqualsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _applyBinaryMathOperatorInPlace_3(_self, _anObject, _hyphenMinus_2);
  },
  "{ :self :anObject |\n\t\tapplyBinaryMathOperatorInPlace(self, anObject, -)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Sequence",
  "asteriskEqualsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _applyBinaryMathOperatorInPlace_3(_self, _anObject, _asterisk_2);
  },
  "{ :self :anObject |\n\t\tapplyBinaryMathOperatorInPlace(self, anObject, *)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Sequence",
  "solidusEqualsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _applyBinaryMathOperatorInPlace_3(_self, _anObject, _solidus_2);
  },
  "{ :self :anObject |\n\t\tapplyBinaryMathOperatorInPlace(self, anObject, /)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Sequence",
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
      return _lessThanSign_2(_i, _self);
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
      _b = _plusSign_2(_b, _a);
      _a = _tmp;
      return _i = _plusSign_2(_i, 1);
    });
    return _answer;
  },
  "{ :self :answer |\n\t\tlet a = 0;\n\t\tlet b = 1;\n\t\tlet i = 0;\n\t\t{ i < self }.whileTrue {\n\t\t\tlet tmp = b;\n\t\t\tanswer.add(b);\n\t\t\tb := b + a;\n\t\t\ta := tmp;\n\t\t\ti := i + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Sequence",
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
    let _answerSize = _plusSign_2(_hyphenMinus_2(_stop, _self), 1);
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
        _aBlock_1(_hyphenMinus_2(_plusSign_2(_index, _self), 1)),
      );
    });
    return _answer;
  },
  "{ :self :stop :species :aBlock:/1 |\n\t\tlet answerSize = stop - self + 1;\n\t\tlet answer = species.ofSize(answerSize);\n\t\t1.toDo(answerSize) { :index |\n\t\t\tanswer[index] := aBlock(index + self - 1)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Sequence",
  "isSequence",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Sequence",
  "rank",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return 0;
  },
  "{ :self |\n\t\t0\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Sequence",
  "shape",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return [];
  },
  "{ :self |\n\t\t[]\n\t}",
);
