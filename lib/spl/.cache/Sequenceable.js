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
  "{ :self :aList |\n\t\tself.copyReplaceFromToWith(\n\t\t\tself.size + 1,\n\t\t\tself.size,\n\t\t\taList\n\t\t)\n\t}",
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
  "{ :self |\n\t\tself.catenate\n\t}",
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
  "{ :self :aList |\n\t\tself ++.each aList\n\t}",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "numberSign",
  ["counts", "items"],
  sl.annotateFunction(function (_counts, _items) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _counts, _items";
      throw new Error(errorMessage);
    } /* Statements */
    return _replicate_2(_counts, _items);
  }, ["counts", "items"]),
  "{ :counts :items |\n\t\tcounts.replicate(items)\n\t}",
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
  "{ :self :other |\n\t\tself.withCollect(other, &&)\n\t}",
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
  "{ :self :other |\n\t\tself.withCollect(other, ||)\n\t}",
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
  "{ :self |\n\t\tself.scan(+)\n\t}",
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
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isSequenceable.if {\n\t\t\tanObject.withCollect(self, aBlock:/2)\n\t\t} {\n\t\t\tself.error('@Sequenceable: only sequenceable collections may be processed elementwise')\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.adjacentPairsCollect { :i :j |\n\t\t\tself.species.newFrom([i, j])\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "adjacentPairsAllSatisfy",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(
      _to_2(1, _hyphenMinus_2(_size_1(_self), 1)),
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
  "{ :self :aBlock:/2 |\n\t\t1.to(self.size - 1).allSatisfy { :i |\n\t\t\taBlock(self[i], self[i + 1])\n\t\t}\n\t}",
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
  "{ :self :aBlock:/2 |\n\t\t1.toDo(self.size - 1) { :i |\n\t\t\taBlock(self[i], self[i + 1])\n\t\t}\n\t}",
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
  "{ :self :aBlock:/2 |\n\t\tlet answer = self.species.new(self.size - 1);\n\t\tlet index = 1;\n\t\tself.adjacentPairsDo { :p :q |\n\t\t\tanswer[index] := aBlock(p, q);\n\t\t\tindex := index + 1\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :aBlock:/3 |\n\t\t1.toDo(self.size - 2) { :i |\n\t\t\taBlock(self[i], self[i + 1], self[i + 2])\n\t\t}\n\t}",
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
  "{ :self :target |\n\t\tself.afterIfAbsent(target) {\n\t\t\tself.errorNotFound(target)\n\t\t}\n\t}",
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
  "{ :self :target :exceptionBlock:/0 |\n\t\tlet index = self.indexOf(target);\n\t\t(\n\t\t\tindex = 0 | {\n\t\t\t\tindex = self.size\n\t\t\t}\n\t\t).if {\n\t\t\texceptionBlock()\n\t\t} {\n\t\t\tself[index + 1]\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.allButFirst(1)\n\t}",
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
  "{ :self :n |\n\t\tself.copyFromTo(1 + n, self.size)\n\t}",
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
  "{ :self |\n\t\tself.allButFirstAndLast(1)\n\t}",
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
  "{ :self :n |\n\t\tself.copyFromTo(1 + n, self.size - n)\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\t(1 + 1).toDo(self.size) { :index |\n\t\t\taBlock(self[index])\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.allButLast(1)\n\t}",
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
  "{ :self :n |\n\t\tself.copyFromTo(1, self.size - n)\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\t1.toDo(self.size - 1) { :index |\n\t\t\taBlock(self[index])\n\t\t}\n\t}",
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
  "{ :self |\n\t\tlet n = self.size;\n\t\tlet p = List(n);\n\t\tlet r = List(n);\n\t\t2.toDo(n) { :i |\n\t\t\tlet j = i - 1;\n\t\t\t{\n\t\t\t\tself[j] >= self[i]\n\t\t\t}.whileTrue {\n\t\t\t\tj := p[j]\n\t\t\t};\n\t\t\tp[i] := j;\n\t\t\tr[i] := self[j]\n\t\t};\n\t\t[p, r]\n\t}",
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
  "{ :self :anInteger :aCollection :aBlock:/1 |\n\t\tself.do { :each |\n\t\t\taCollection[anInteger] := each;\n\t\t\t(anInteger = aCollection.size).if {\n\t\t\t\taBlock(aCollection)\n\t\t\t} {\n\t\t\t\tself.asDigitsAtInDo(anInteger + 1, aCollection, aBlock:/1)\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :anInteger :aBlock:/1 |\n\t\tlet aCollection = List(anInteger);\n\t\tself.asDigitsAtInDo(1, aCollection, aBlock:/1)\n\t}",
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
  "{ :self |\n\t\tself.isEmpty.if {\n\t\t\tRange(1, 0, 1)\n\t\t} {\n\t\t\t(self.size = 1).if {\n\t\t\t\tRange(self.first, self.first, 1)\n\t\t\t} {\n\t\t\t\tself.isArithmeticProgression.if {\n\t\t\t\t\tRange(self.first, self.last, self.second - self.first)\n\t\t\t\t} {\n\t\t\t\t\tself.error('@Sequenceable>>asRange: not an arithmetic series')\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.isEmpty.if {\n\t\t\t[]\n\t\t} {\n\t\t\t(self.size = 1).if {\n\t\t\t\t[Range(self.first, self.first, 1)]\n\t\t\t} {\n\t\t\t\tlet answer = [];\n\t\t\t\tlet start = self.first;\n\t\t\t\tlet step = self.second - self.first;\n\t\t\t\t(1 + 1).toDo(self.size) { :i |\n\t\t\t\t\t(self[i] - self[i - 1] = step).ifFalse {\n\t\t\t\t\t\tanswer.add(Range(start, self[i - 1], step));\n\t\t\t\t\t\tstart := self[i];\n\t\t\t\t\t\t(i = self.size).if {\n\t\t\t\t\t\t\tanswer.add(Range(self.last, self.last, 1));\n\t\t\t\t\t\t\tstart := nil\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\tstep := self[i + 1] - self[i]\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\tstart.ifNotNil {\n\t\t\t\t\tanswer.add(Range(start, self.last, step))\n\t\t\t\t};\n\t\t\t\tanswer\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :shape |\n\t\tself.assert {\n\t\t\tself.shape = shape\n\t\t}\n\t}",
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
  "{ :self :indexList :aBlock:/2 |\n\t\tlet answer = self.species.ofSize(indexList.size);\n\t\tindexList.indicesDo { :index |\n\t\t\tanswer[index] := aBlock(self, indexList[index])\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :indexList |\n\t\tself.atAllUsing(indexList, at:/2)\n\t}",
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
  "{ :self :primaryIndices :secondaryIndices |\n\t\tself.atAll(primaryIndices).collect { :each |\n\t\t\teach.atAll(secondaryIndices)\n\t\t}\n\t}",
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
  "{ :self :primaryIndices :secondaryIndices :tertiaryIndices |\n\t\tself.atAll(primaryIndices).collect { :each |\n\t\t\teach.atAll(secondaryIndices, tertiaryIndices)\n\t\t}\n\t}",
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
  "{ :self :indexList |\n\t\tself.atAllUsing(indexList, atFold:/2)\n\t}",
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
  "{ :self :indexList |\n\t\tself.atAllUsing(indexList, atOrMissing:/2)\n\t}",
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
  "{ :self :indexList |\n\t\tself.atAllUsing(indexList, atOrNil:/2)\n\t}",
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
  "{ :self :indexList |\n\t\tself.atAllUsing(indexList, atPin:/2)\n\t}",
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
  "{ :self :indexList |\n\t\tself.atAllUsing(indexList, atPath:/2)\n\t}",
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
  "{ :self :anObject |\n\t\tlet size = self.size;\n\t\t(size > 50).if {\n\t\t\tself.fromToPut(1, self.size, anObject)\n\t\t} {\n\t\t\tself.indicesDo { :index |\n\t\t\t\tself[index] := anObject\n\t\t\t}\n\t\t};\n\t\tanObject\n\t}",
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
  "{ :self :indexList |\n\t\tself.atAllUsing(indexList, atSymmetrical:/2)\n\t}",
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
  "{ :self :indexList |\n\t\tself.atOrMissingAll(indexList).deleteMissing\n\t}",
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
  "{ :self :indexList |\n\t\tself.atAllUsing(indexList, atWrap:/2)\n\t}",
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
  "{ :self :index |\n\t\tself[self.foldedIndex(index)]\n\t}",
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
  "{ :self :indexFromEnd :anObject |\n\t\tself[self.size + 1 - indexFromEnd] := anObject\n\t}",
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
  "{ :self :index :n |\n\t\tself[index - 1 % n + 1]\n\t}",
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
  "{ :self :index |\n\t\tlet n = self.size;\n\t\tself[index - 1 % n + 1]\n\t}",
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
  "{ :self :index |\n\t\tself[self.pinnedIndex(index)]\n\t}",
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
  "{ :self :index :value |\n\t\tself.atPut(self.pinnedIndex(index), value)\n\t}",
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
  "{ :self :index :anObject |\n\t\tlet k = index.wrapExclusive(1, self.size + 1);\n\t\tself[k] := anObject\n\t}",
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
  "{ :self :index |\n\t\tindex.isInteger.ifFalse {\n\t\t\tself.error('atSymmetrical: invalid index')\n\t\t};\n\t\t(index > 0).if {\n\t\t\tself.at(index)\n\t\t} {\n\t\t\tself.at(self.size + index + 1)\n\t\t}\n\t}",
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
  "{ :self :operand :aBlock:/1 |\n\t\toperand.isCollection.if {\n\t\t\tlet answer = self.species.ofSize(operand.size);\n\t\t\toperand.indicesDo { :each |\n\t\t\t\tanswer[each] := aBlock(operand.at(each))\n\t\t\t};\n\t\t\tanswer\n\t\t} {\n\t\t\taBlock(self, operand)\n\t\t}\n\t}",
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
  "{ :self :index |\n\t\tlet k = index.wrapExclusive(1, self.size + 1);\n\t\tself[k]\n\t}",
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
  "{ :self |\n\t\tself.randomChoice(system, [])\n\t}",
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
  "{ :self :target |\n\t\tself.beforeIfAbsent(target) {\n\t\t\tself.errorNotFound(target)\n\t\t}\n\t}",
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
  "{ :self :target :exceptionBlock:/0 |\n\t\tlet index = self.indexOf(target);\n\t\t(index < 2).if {\n\t\t\texceptionBlock()\n\t\t} {\n\t\t\tself[index - 1]\n\t\t}\n\t}",
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
  "{ :self :aList |\n\t\taList.isSequenceable.if {\n\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\t(self.size < aList.size).ifTrue {\n\t\t\t\t\tfalse.return\n\t\t\t\t};\n\t\t\t\taList.indicesDo { :index |\n\t\t\t\t\t(aList[index] = self[index]).ifFalse {\n\t\t\t\t\t\tfalse.return\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\ttrue\n\t\t\t}\n\t\t} {\n\t\t\tself.error('@Sequenceable>>beginsWith: not a sequence')\n\t\t}\n\t}",
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
  "{ :self :aCollection |\n\t\taCollection.anySatisfy { :prefix |\n\t\t\tself.beginsWith(prefix)\n\t\t}\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tself.size.binaryDetectIndex { :i |\n\t\t\taBlock(self[i])\n\t\t}\n\t}",
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
  "{ :self :item |\n\t\tlet n = self.size;\n\t\tlet i = n.binaryDetectIndex { :each |\n\t\t\tself[each] >= item\n\t\t};\n\t\t((i <= n) & { self[i] = item }).if {\n\t\t\ti\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
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
  "{ :self :item |\n\t\tlet n = self.size;\n\t\tlet l = 0;\n\t\tlet r = n;\n\t\t{ l < r }.whileTrue {\n\t\t\tlet m = floor((l + r) / 2);\n\t\t\t(self[m + 1] < item).if {\n\t\t\t\tl := m + 1\n\t\t\t} {\n\t\t\t\tr := m\n\t\t\t}\n\t\t};\n\t\t(l < n & { self[l + 1] = item }).if {\n\t\t\tl + 1\n\t\t} {\n\t\t\tl\n\t\t}\n\t}",
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
  "{ :self :item |\n\t\tlet n = self.size;\n\t\tlet l = 0;\n\t\tlet r = n;\n\t\t{ l < r }.whileTrue {\n\t\t\tlet m = floor((l + r) / 2);\n\t\t\t(self[m + 1] > item).if {\n\t\t\t\tr := m\n\t\t\t} {\n\t\t\t\tl := m + 1\n\t\t\t}\n\t\t};\n\t\t(r = 0).if {\n\t\t\t1\n\t\t} {\n\t\t\t(r = n).if {\n\t\t\t\tn + 1\n\t\t\t} {\n\t\t\t\t(self[r] = item).if {\n\t\t\t\t\tr\n\t\t\t\t} {\n\t\t\t\t\tr + 1\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :anObject |\n\t\tself.binarySearchRightmost(anObject)\n\t}",
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
  "{ :shape :anInteger |\n\t\t(anInteger - 1).mixedRadixEncode(shape) + 1\n\t}",
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
  "{ :self :aList |\n\t\tself.ifEmpty {\n\t\t\tself.copy\n\t\t} {\n\t\t\tlet answerSize = self.injectInto(0) { :sum :each |\n\t\t\t\tsum + each.size\n\t\t\t} + (self.size - 1 * aList.size);\n\t\t\tlet answer = self.species.ofSize(answerSize);\n\t\t\tlet index = 1;\n\t\t\tlet put = { :items |\n\t\t\t\titems.do { :item |\n\t\t\t\t\tanswer[index] := item;\n\t\t\t\t\tindex := index + 1\n\t\t\t\t}\n\t\t\t};\n\t\t\tself.allButLastDo { :each |\n\t\t\t\tput(each);\n\t\t\t\tput(aList)\n\t\t\t};\n\t\t\tput(self.last);\n\t\t\tanswer\n\t\t}\n\t}",
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
  "{ :self :isChecked |\n\t\tisChecked.ifTrue {\n\t\t\t(self.elementType = self.typeOf).ifFalse {\n\t\t\t\tself.error('@Sequenceable>>catenate: invalid element type')\n\t\t\t}\n\t\t};\n\t\tself.catenateSeparatedBy([])\n\t}",
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
  "{ :self |\n\t\tself.catenate(false)\n\t}",
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
          _plusSignPlusSign_2(_List_2(_prefixSize, _anObject), _aList),
          _List_2(_suffixSize, _anObject),
        );
      }, []),
    );
  }, ["aList", "anInteger", "anObject"]),
  "{ :aList :anInteger :anObject |\n\t\t(aList.size > anInteger).if {\n\t\t\taList.error('centerArray')\n\t\t} {\n\t\t\tlet prefixSize = (anInteger - aList.size / 2).ceiling.max(0);\n\t\t\tlet suffixSize = (anInteger - aList.size - prefixSize).max(0);\n\t\t\tList(prefixSize, anObject) ++ aList ++ List(suffixSize, anObject)\n\t\t}\n\t}",
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
  "{ :r :m |\n\t\tlet p = m.product;\n\t\tlet q = m.withCollect(r) { :i :j |\n\t\t\tj * (p / i).modularInverse(i) * (p / i)\n\t\t}.sum;\n\t\tq % p\n\t}",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "compare",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _lexicographicCompare_2(_self, _operand);
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself.lexicographicCompare(operand)\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tlet answer = self.species.ofSize(self.size);\n\t\tself.indicesDo { :index |\n\t\t\tanswer[index] := aBlock(self[index])\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :aSequence :aBlock:/2 |\n\t\tself.withCollect(aSequence, aBlock:/2)\n\t}",
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
  "{ :self :aSequence :anotherSequence :aBlock:/3 |\n\t\tself.withWithCollect(aSequence, anotherSequence, aBlock:/3)\n\t}",
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
  "{ :self :anObject |\n\t\t[anObject].reshape(self)\n\t}",
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
  "{ :self |\n\t\tself.prefixes.collect(fromContinuedFraction:/1)\n\t}",
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
  "{ :self :start :stop |\n\t\t1.toAsCollect(stop - start + 1, self.species) { :index |\n\t\t\tself[index + start - 1]\n\t\t}\n\t}",
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
  "{ :self :start :stop :aList |\n\t\t1.toDo(stop - start + 1) { :index |\n\t\t\taList[index] := self[index + start - 1]\n\t\t}\n\t}",
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
  "{ :self :start :stop |\n\t\t1.toAsCollect(stop - start + 1, self.species) { :index |\n\t\t\tself.atPin(index + start - 1)\n\t\t}\n\t}",
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
  "{ :self :start :stop |\n\t\t1.toAsCollect(stop - start + 1, self.species) { :index |\n\t\t\tself.atWrap(index + start - 1)\n\t\t}\n\t}",
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
  "{ :self :old :new |\n\t\tlet indexList = self.indicesOfSubstring(old);\n\t\tindexList.isEmpty.if {\n\t\t\tself.copy\n\t\t} {\n\t\t\tlet n = new.size;\n\t\t\t(old.size = n).if {\n\t\t\t\tlet answer = self.copy;\n\t\t\t\tindexList.do { :i |\n\t\t\t\t\tanswer.replaceFromToWith(i, i + n - 1, new)\n\t\t\t\t};\n\t\t\t\tanswer\n\t\t\t} {\n\t\t\t\tlet answer = [];\n\t\t\t\tlet i = 1;\n\t\t\t\tlet k = old.size;\n\t\t\t\tindexList.do { :j |\n\t\t\t\t\tanswer.add(self.copyFromTo(i, j - 1));\n\t\t\t\t\tanswer.add(new);\n\t\t\t\t\ti := j + k\n\t\t\t\t};\n\t\t\t\tanswer.add(self.copyFromTo(i, self.size));\n\t\t\t\tanswer.catenate\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :start :stop :aCollection |\n\t\tlet end = start - 1 + aCollection.size;\n\t\tlet newSize = self.size + end - stop;\n\t\tlet answer = self.species.ofSize(newSize);\n\t\t(start > 1).ifTrue {\n\t\t\tanswer.replaceFromToWithStartingAt(1, start - 1, self, 1)\n\t\t};\n\t\t(start <= end).ifTrue {\n\t\t\tanswer.replaceFromToWithStartingAt(start, end, aCollection, 1)\n\t\t};\n\t\t(end < newSize).ifTrue {\n\t\t\tanswer.replaceFromToWithStartingAt(end + 1, newSize, self, stop + 1)\n\t\t};\n\t\tanswer\n\t}",
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
      _List_2(
        _max_2(_plusSign_2(_hyphenMinus_2(_stop, _start), 1), 1),
        _anObject,
      ),
    );
  }, ["self", "start", "stop", "anObject"]),
  "{ :self :start :stop :anObject |\n\t\tself.copyReplaceFromToWith(\n\t\t\tstart,\n\t\t\tstop,\n\t\t\tList((stop - start + 1).max(1), anObject)\n\t\t)\n\t}",
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
  "{ :self :anElement |\n\t\tlet index = self.indexOf(anElement);\n\t\t(index = 0).if {\n\t\t\tself.copy\n\t\t} {\n\t\t\tself.first(index)\n\t\t}\n\t}",
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
  "{ :self :anElement |\n\t\tlet index = self.indexOf(anElement);\n\t\t(index = 0).if {\n\t\t\tself.copy\n\t\t} {\n\t\t\tself.first(index - 1)\n\t\t}\n\t}",
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
  "{ :self :anElement |\n\t\tlet index = self.lastIndexOf(anElement);\n\t\t(index = 0).if {\n\t\t\tself.copy\n\t\t} {\n\t\t\tself.first(index - 1)\n\t\t}\n\t}",
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
  "{ :self :newElement |\n\t\tlet answer = self.copy;\n\t\tanswer.addFirst(newElement);\n\t\tanswer\n\t}",
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
  "{ :self |\n\t\tself.scan(max:/2)\n\t}",
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
  "{ :self |\n\t\tself.scan(min:/2)\n\t}",
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
  "{ :self :aBlock:/2 |\n\t\tself.isEmpty.if {\n\t\t\t[]\n\t\t} {\n\t\t\tlet answer = [self.first];\n\t\t\tself.adjacentPairsDo { :i :j |\n\t\t\t\taBlock(i, j).ifFalse {\n\t\t\t\t\tanswer.add(j)\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.deleteAdjacentDuplicates(=)\n\t}",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "detectEquispacedTriple",
  ["self", "aBlock:/3"],
  sl.annotateFunction(function (_self, _aBlock_3) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_3";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _equispacedTriplesDo_2(
        _size_1(_self),
        sl.annotateFunction(function (_i, _j, _k) {
          /* ArityCheck */
          if (arguments.length !== 3) {
            const errorMessage = "Arity: expected 3, _i, _j, _k";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SplVar1 = _assertIsOfSize_2(_atAll_2(_self, [_i, _j, _k]), 3);
          let _p = _at_2(__SplVar1, 1);
          let _q = _at_2(__SplVar1, 2);
          let _r = _at_2(__SplVar1, 3);
          /* Statements */
          return _ifTrue_2(
            _aBlock_3(_p, _q, _r),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1([_p, _q, _r]);
            }, []),
          );
        }, ["i", "j", "k"]),
      );
      return null;
    }, ["return:/1"]));
  }, ["self", "aBlock:/3"]),
  "{ :self :aBlock:/3 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself.size.equispacedTriplesDo { :i :j :k |\n\t\t\t\tlet [p, q, r] = self.atAll([i, j, k]);\n\t\t\t\taBlock(p, q, r).ifTrue {\n\t\t\t\t\t[p, q, r].return\n\t\t\t\t}\n\t\t\t};\n\t\t\tnil\n\t\t}\n\t}",
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
  "{ :self :predicate:/1 |\n\t\tself.detectIndexStartingAtIfFoundIfNone(predicate:/1, 1, identity:/1, { })\n\t}",
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
  "{ :self :predicate:/1 :ifFound:/1 |\n\t\tself.detectIndexStartingAtIfFoundIfNone(predicate:/1, 1, ifFound:/1, { })\n\t}",
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
  "{ :self :predicate:/1 :ifFound:/1 :ifNone:/0 |\n\t\tself.detectIndexStartingAtIfFoundIfNone(predicate:/1, 1, ifFound:/1, ifNone:/0)\n\t}",
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
  "{ :self :predicate:/1 :startIndex |\n\t\tself.detectIndexStartingAtIfFoundIfNone(predicate:/1, startIndex, identity:/1, { })\n\t}",
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
  "{ :self :predicate:/1 :startIndex :ifFound:/1 :ifNone:/0 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tstartIndex.toDo(self.size) { :index |\n\t\t\t\tpredicate(self[index]).ifTrue {\n\t\t\t\t\tifFound(index).return\n\t\t\t\t}\n\t\t\t};\n\t\t\tifNone()\n\t\t}\n\t}",
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
  "{ :self :predicate:/1 |\n\t\tlet answer = [];\n\t\t1.toDo(self.size) { :i |\n\t\t\tpredicate(self.at(i)).ifTrue {\n\t\t\t\tanswer.add(i)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :predicate:/1 :startIndex |\n\t\tself.detectStartingAtIfFoundIfNone(predicate:/1, startIndex) { :item |\n\t\t\titem\n\t\t} {\n\t\t\tself.error('@Sequenceable>>detectStartingAt: no such item')\n\t\t}\n\t}",
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
  "{ :self :predicate:/1 :startIndex :ifFound:/1 :ifNone:/0 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tstartIndex.toDo(self.size) { :index |\n\t\t\t\tlet item = self[index];\n\t\t\t\tpredicate(item).ifTrue {\n\t\t\t\t\tifFound(item).return\n\t\t\t\t}\n\t\t\t};\n\t\t\tifNone()\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.partitionCollect(2, 1) { :each |\n\t\t\teach[2] - each[1]\n\t\t}\n\t}",
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
  "{ :self :anInteger |\n\t\tlet next = self.differences;\n\t\t(anInteger > 1).if {\n\t\t\tnext.differences(anInteger - 1)\n\t\t} {\n\t\t\tnext\n\t\t}\n\t}",
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
  "{ :self :aBlock:/2 |\n\t\tself.adjacentPairsCollect { :i :j |\n\t\t\taBlock(j, i)\n\t\t}\n\t}",
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
  "{ :y :h |\n\t\tlet a = y.differences(2);\n\t\tlet n = a.size;\n\t\tlet lhs = a[1] + (a[1] - a[2]);\n\t\tlet rhs = a[n] + (a[n] - a[n - 1]);\n\t\ta.addFirst(lhs);\n\t\ta.addLast(rhs);\n\t\ta / (4 * h.square)\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tself.indicesDo { :index |\n\t\t\taBlock(self[index])\n\t\t};\n\t\tself\n\t}",
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
  "{ :self :elementBlock:/1 :separatorBlock:/0 |\n\t\tself.indicesDo { :index |\n\t\t\t(index = 1).ifFalse {\n\t\t\t\tseparatorBlock()\n\t\t\t};\n\t\t\telementBlock(self[index])\n\t\t}\n\t}",
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
  "{ :self :aList |\n\t\t(self *.e aList).sum\n\t}",
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
  "{ :self :aBlock:/1 :anItem |\n\t\tself.indicesDo { :index |\n\t\t\t(anItem = self[index]).ifFalse {\n\t\t\t\taBlock(self[index])\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :count |\n\t\t(count.abs >= self.size).if {\n\t\t\tself.species.new\n\t\t} {\n\t\t\t(count < 0).if {\n\t\t\t\tself.dropLast(count.negate)\n\t\t\t} {\n\t\t\t\tself.dropFirst(count)\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :count |\n\t\tself.copyFromTo(count + 1, self.size)\n\t}",
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
  "{ :self :count |\n\t\tself.copyFromTo(1, self.size - count)\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tself.detectIndexIfFoundIfNone { :each |\n\t\t\teach.aBlock.not\n\t\t} { :i |\n\t\t\tself.copyFromTo(i, self.size)\n\t\t} {\n\t\t\tself.species.new\n\t\t}\n\t}",
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
  "{ :self :aList |\n\t\taList.isSequenceable.if {\n\t\t\tlet sequenceSize = aList.size;\n\t\t\tlet offset = self.size - sequenceSize;\n\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\t(offset < 0).ifTrue {\n\t\t\t\t\tfalse.return\n\t\t\t\t};\n\t\t\t\t1.toDo(sequenceSize) { :index |\n\t\t\t\t\t(aList[index] = self[index + offset]).ifFalse {\n\t\t\t\t\t\tfalse.return\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\ttrue\n\t\t\t}\n\t\t} {\n\t\t\tself.error('@Sequenceable>>endsWith: not a sequence')\n\t\t}\n\t}",
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
  "{ :self :aCollection |\n\t\taCollection.anySatisfy { :suffix |\n\t\t\tself.endsWith(suffix)\n\t\t}\n\t}",
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
  "{ :self :anObject :aBlock:/2 |\n\t\t(self == anObject) | {\n\t\t\t(self.typeOf = anObject.typeOf) & {\n\t\t\t\tself.hasEqualElements(anObject, aBlock:/2)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "equispacedTriples",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _equispacedTriplesDo_2(
      _size_1(_self),
      sl.annotateFunction(function (_i, _j, _k) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _i, _j, _k";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _atAll_2(_self, [_i, _j, _k]));
      }, ["i", "j", "k"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tself.size.equispacedTriplesDo { :i :j :k |\n\t\t\tanswer.add(self.atAll([i, j, k]))\n\t\t};\n\t\tanswer\n\t}",
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
    let __SplVar2 = _assertIsOfSize_2(_cos_1(_self), 3);
    let _ca = _at_2(__SplVar2, 1);
    let _cb = _at_2(__SplVar2, 2);
    let _cc = _at_2(__SplVar2, 3);
    let __SplVar3 = _assertIsOfSize_2(_sin_1(_self), 3);
    let _sa = _at_2(__SplVar3, 1);
    let _sb = _at_2(__SplVar3, 2);
    let _sc = _at_2(__SplVar3, 3);
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
  "{ :self |\n\t\tlet [ca, cb, cc] = self.cos;\n\t\tlet [sa, sb, sc] = self.sin;\n\t\t[\n\t\t\t[(ca * cb * cc) - (sa * sc), 0 - (cc * sa)  - (ca * cb * sc), ca * sb],\n\t\t\t[(cb * cc * sa) + (ca * sc), (ca * cc) - (cb * sa * sc), sa * sb],\n\t\t\t[0 - (cc * sb), sb * sc, cb]\n\t\t]\n\t}",
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
  "{ :self :alpha |\n\t\tlet answer = List(self.size);\n\t\tanswer[1] := self[1];\n\t\t2.toDo(self.size) { :i |\n\t\t\tlet y = answer[i - 1];\n\t\t\tanswer[i] := y + (alpha * (self[i] - y))\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :positionList |\n\t\tpositionList.collect { :each |\n\t\t\tself.part(each)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tlet h = 1;\n\t\tlet k = self.size;\n\t\tk.isPowerOfTwo.ifFalse {\n\t\t\tself.addAll(List(k.asLargerPowerOfTwo - k, 0));\n\t\t\tk := self.size\n\t\t};\n\t\t{\n\t\t\th < k\n\t\t}.whileTrue {\n\t\t\t1.toByDo(k, h * 2) { :i |\n\t\t\t\ti.toDo(i + h - 1) { :j |\n\t\t\t\t\tlet x = self[j];\n\t\t\t\t\tlet y = self[j + h];\n\t\t\t\t\tself[j] := x + y;\n\t\t\t\t\tself[j + h] := x - y\n\t\t\t\t}\n\t\t\t};\n\t\t\th := h * 2\n\t\t};\n\t\tself\n\t}",
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
  "{ :self :aCollection :aBlock:/1 |\n\t\tlet index = 1;\n\t\taCollection.do { :each |\n\t\t\tself[index] := aBlock(each);\n\t\t\tindex := index + 1\n\t\t};\n\t\tself\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tself.findBinaryDoIfNone(aBlock:/1) { :found |\n\t\t\tfound\n\t\t} {\n\t\t\tself.error('@Sequenceable>>findBinary: not found')\n\t\t}\n\t}",
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
  "{ :self :aBlock:/1 :actionBlock:/1 :exceptionBlock |\n\t\tself.findBinaryIndexDoIfNone(aBlock:/1) { :foundIndex |\n\t\t\tactionBlock(self[foundIndex])\n\t\t} { :previousIndex :nextIndex |\n\t\t\texceptionBlock.cull(\n\t\t\t\t(previousIndex > 0).ifTrue { self[previousIndex] },\n\t\t\t\t(nextIndex <= self.size).ifTrue { self[nextIndex] }\n\t\t\t)\n\t\t}\n\t}",
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
  "{ :self :aBlock:/1 :exceptionBlock |\n\t\tself.findBinaryDoIfNone(aBlock:/1, { :found | found }, exceptionBlock)\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tself.findBinaryIndexDoIfNone(aBlock:/1) { :found |\n\t\t\tfound\n\t\t} {\n\t\t\tself.error('@Sequenceable>>findBinaryIndex: not found')\n\t\t}\n\t}",
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
  "{ :self :aBlock:/1 :actionBlock:/1 :exceptionBlock |\n\t\tlet low = 1;\n\t\tlet high = self.size;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t{\n\t\t\t\thigh < low\n\t\t\t}.whileFalse {\n\t\t\t\tlet index = high + low // 2;\n\t\t\t\tlet test = aBlock(self[index]);\n\t\t\t\t(test < 0).if {\n\t\t\t\t\thigh := index - 1\n\t\t\t\t} {\n\t\t\t\t\t(0 < test).if {\n\t\t\t\t\t\tlow := index + 1\n\t\t\t\t\t} {\n\t\t\t\t\t\tactionBlock(index).return\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\texceptionBlock.cull(high, low)\n\t\t}\n\t}",
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
  "{ :self :aBlock:/1 :exceptionBlock |\n\t\tself.findBinaryIndexDoIfNone(aBlock:/1, { :found | found }, exceptionBlock)\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tlet index = self.size + 1;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t{\n\t\t\t\t(index := index - 1) >= 1\n\t\t\t}.whileTrue {\n\t\t\t\taBlock(self[index]).ifTrue {\n\t\t\t\t\tindex.return\n\t\t\t\t}\n\t\t\t};\n\t\t\t0\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself[1]\n\t}",
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
  "{ :self :n |\n\t\tself.copyFromTo(1, n)\n\t}",
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
          _List_2(_hyphenMinus_2(_n, _k), _zero),
        );
      }, []),
    );
  }, ["self", "n", "zero"]),
  "{ :self :n :zero |\n\t\tlet k = self.size;\n\t\t(k >= n).if {\n\t\t\tself.copyFromTo(1, n)\n\t\t} {\n\t\t\tself ++ List(n - k, zero)\n\t\t}\n\t}",
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
  "{ :self :depth |\n\t\t(depth <= 0).if {\n\t\t\tself\n\t\t} {\n\t\t\tlet answer = [];\n\t\t\tself.do { :each |\n\t\t\t\teach.isCollection.if {\n\t\t\t\t\tanswer.addAll(each.flattenTo(depth - 1))\n\t\t\t\t} {\n\t\t\t\t\tanswer.add(each)\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.flattenTo(Infinity)\n\t}",
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
  "{ :self :depth |\n\t\tself.flattenTo(depth)\n\t}",
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
  "{ :self :index |\n\t\tindex.fold(1, self.size)\n\t}",
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
  "{ :self :count :aBlock:/2 |\n\t\tself.ifEmpty {\n\t\t\tself.errorEmptyCollection\n\t\t} {\n\t\t\tlet answer = self[1];\n\t\t\t2.toDo(self.size) { :index |\n\t\t\t\tanswer := aBlock(answer, self[index])\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
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
  "{ :self :aBlock:/2 |\n\t\tself.foldLeftPrefix(self.size, aBlock:/2)\n\t}",
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
  "{ :self :anObject :aBlock:/2 |\n\t\tlet answer = [anObject];\n\t\tlet accumulator = anObject;\n\t\tself.do { :each |\n\t\t\taccumulator := aBlock(accumulator, each);\n\t\t\tanswer.add(accumulator)\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :count :aBlock:/2 |\n\t\tself.ifEmpty {\n\t\t\tself.errorEmptyCollection\n\t\t} {\n\t\t\tlet answer = self[count];\n\t\t\t(count - 1).toByDo(1, -1) { :index |\n\t\t\t\tanswer := aBlock(self[index], answer)\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
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
  "{ :self :aBlock:/2 |\n\t\tself.foldRightPrefix(self.size, aBlock:/2)\n\t}",
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
  "{ :self :length :anObject |\n\t\tlet answer = self.species.new(length);\n\t\tanswer.atAllPut(anObject);\n\t\tanswer.replaceFromToWithStartingAt(1, self.size.min(length), self, 1);\n\t\tanswer\n\t}",
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
  "{ :self |\n\t\tself[1 + 3]\n\t}",
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
  "{ :self :n |\n\t\tself.copyFromTo(n * 3 + 1, n * 4)\n\t}",
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
  "{ :self |\n\t\t(self ~ [0]).if {\n\t\t\t0\n\t\t} {\n\t\t\tlet answer = 0/1;\n\t\t\tself.reverseDo { :each |\n\t\t\t\tlet next = (each + answer);\n\t\t\t\t(next != 0).ifTrue {\n\t\t\t\t\tanswer := 1 / next\n\t\t\t\t}\n\t\t\t};\n\t\t\t1 / answer\n\t\t}\n\t}",
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
  "{ :self :radix |\n\t\tlet answer = 0;\n\t\tlet m = 1;\n\t\tself.reverseDo { :each |\n\t\t\tanswer := answer + (each * m);\n\t\t\tm := m * radix\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self |\n\t\tself.fromDigits(10)\n\t}",
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
  "{ :self :start :stop :aBlock:/1 |\n\t\tstart.toDo(stop) { :index |\n\t\t\taBlock(self[index])\n\t\t}\n\t}",
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
  "{ :self :start :stop :aBlock:/2 |\n\t\tstart.toDo(stop) { :index |\n\t\t\taBlock(index, self[index])\n\t\t}\n\t}",
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
  "{ :self :startIndex :endIndex :anObject |\n\t\t(startIndex > endIndex).if {\n\t\t\tself\n\t\t} {\n\t\t\tlet written = 1;\n\t\t\tlet toWrite = endIndex - startIndex + 1;\n\t\t\tlet thisWrite = nil;\n\t\t\tself[startIndex] := anObject;\n\t\t\t{\n\t\t\t\twritten < toWrite\n\t\t\t}.whileTrue {\n\t\t\t\tthisWrite := written.min(toWrite - written);\n\t\t\t\tself.replaceFromToWithStartingAt(\n\t\t\t\t\tstartIndex + written,\n\t\t\t\t\tstartIndex + written + thisWrite - 1,\n\t\t\t\t\tself,\n\t\t\t\t\tstartIndex\n\t\t\t\t);\n\t\t\t\twritten := written + thisWrite\n\t\t\t}\n\t\t};\n\t\tanObject\n\t}",
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
        _to_2(1, _n),
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
  "{ :y :h |\n\t\tlet n = y.size;\n\t\t1.to(n).collect { :i |\n\t\t\t(i = 1).if {\n\t\t\t\ty[2] - y[1]\n\t\t\t} {\n\t\t\t\t(i = n).if {\n\t\t\t\t\ty[i] - y[i - 1]\n\t\t\t\t} {\n\t\t\t\t\t(y[i + 1] - y[i - 1]) / 2\n\t\t\t\t}\n\t\t\t}\n\t\t} / h\n\t}",
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
  "{ :self :aBlock |\n\t\tlet numArgs = aBlock.numArgs;\n\t\tnumArgs.caseOf([\n\t\t\t0 -> { self.error('groupsDo: At least one block argument expected') },\n\t\t\t1 -> { self.do(aBlock) },\n\t\t\t2 -> { self.pairsDo(aBlock) }\n\t\t]) {\n\t\t\tlet argumentList = List(numArgs);\n\t\t\tlet index = 1;\n\t\t\tlet endIndex = self.size - numArgs + 1;\n\t\t\t{\n\t\t\t\tindex <= endIndex\n\t\t\t}.whileTrue {\n\t\t\t\targumentList.replaceFromToWithStartingAt(1, numArgs, self, index);\n\t\t\t\taBlock.valueWithArguments(argumentList);\n\t\t\t\tindex := index + numArgs\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :length |\n\t\tlet answer = self.species.ofSize(self.size + length);\n\t\tanswer.replaceFromToWithStartingAt(1, self.size, self, 1)\n\t}",
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
  "{ :self :otherCollection :aBlock:/2 |\n\t\t(otherCollection.isSequenceable & {\n\t\t\tself.size = otherCollection.size\n\t\t}).if {\n\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\tself.indicesDo { :index |\n\t\t\t\t\taBlock(self[index], otherCollection[index]).ifFalse {\n\t\t\t\t\t\tfalse.return\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\ttrue\n\t\t\t}\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
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
  "{ :self :otherCollection |\n\t\tself.hasEqualElements(otherCollection, =)\n\t}",
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
  "{ :self :anObject |\n\t\tself.indexOf(anObject) != 0\n\t}",
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
  "{ :self :index |\n\t\tindex.isInteger & {\n\t\t\tindex > 0 & {\n\t\t\t\tindex <= self.size\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :anElement |\n\t\tself.indexOfStartingAtBy(anElement, 1, =)\n\t}",
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
  "{ :self :anElement :aBlock:/2 |\n\t\tself.indexOfStartingAtBy(anElement, 1, aBlock:/2)\n\t}",
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
  "{ :self :anElement :exceptionBlock:/0 |\n\t\tlet index = self.indexOfStartingAtBy(anElement, 1, =);\n\t\t(index = 0).if {\n\t\t\texceptionBlock()\n\t\t} {\n\t\t\tindex\n\t\t}\n\t}",
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
  "{ :self :anElement :start :aBlock:/2 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tstart.toDo(self.size) { :index |\n\t\t\t\taBlock(self[index], anElement).ifTrue {\n\t\t\t\t\tindex.return\n\t\t\t\t}\n\t\t\t};\n\t\t\t0\n\t\t}\n\t}",
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
  "{ :self |\n\t\tlet answer = List(self.size);\n\t\tself.withIndexDo { :each :index |\n\t\t\tanswer[index] := (index -> each)\n\t\t};\n\t\tanswer\n\t}",
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
    return _to_2(1, _size_1(_self));
  }, ["self"]),
  "{ :self |\n\t\t1.to(self.size)\n\t}",
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
  "{ :self :aBlock:/2 |\n\t\tself.withIndexDo { :each :index |\n\t\t\taBlock(index, each)\n\t\t}\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\t1.toDo(self.size, aBlock:/1)\n\t}",
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
  "{ :self :anObject :aBlock:/2 |\n\t\tlet answer = anObject;\n\t\tself.indicesDo { :index |\n\t\t\tanswer := aBlock(answer, self[index])\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :aCollection |\n\t\tlet answer = [];\n\t\tself.doSeparatedBy { :each |\n\t\t\tanswer.add(each)\n\t\t} {\n\t\t\tanswer.addAll(aCollection)\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :anObject |\n\t\tlet answer = [];\n\t\tself.doSeparatedBy { :each |\n\t\t\tanswer.add(each)\n\t\t} {\n\t\t\tanswer.add(anObject)\n\t\t};\n\t\tanswer\n\t}",
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
          _to_2(2, _k),
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
  "{ :self :z |\n\t\tlet k = self.size;\n\t\t(k < 2).if {\n\t\t\tfalse\n\t\t} {\n\t\t\t[-1 1].includes(z).ifFalse {\n\t\t\t\tself.error('isAlternating: invalid z')\n\t\t\t};\n\t\t\t2.to(k).allSatisfy { :i |\n\t\t\t\tlet x = self[i - 1].compare(self[i]);\n\t\t\t\tlet r = (0 - x) = z;\n\t\t\t\tz := x;\n\t\t\t\tr\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "isArithmeticProgression",
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
  "{ :self :aNumber :aBlock:/2 |\n\t\t(self.size <= 1).if {\n\t\t\ttrue\n\t\t} {\n\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\tself.adjacentPairsDo { :a :b |\n\t\t\t\t\taBlock(b - a, aNumber).ifFalse {\n\t\t\t\t\t\tfalse.return\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\ttrue\n\t\t\t}\n\t\t}\n\t}",
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
        return _isArithmeticProgression_3(
          _self,
          _hyphenMinus_2(_second_1(_self), _first_1(_self)),
          _equalsSign_2,
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.size <= 1).if {\n\t\t\ttrue\n\t\t} {\n\t\t\tself.isArithmeticProgression(self.second - self.first, =)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "isBitVector",
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
        return _verticalLine_2(
          _isZero_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isOne_1(_each);
          }, []),
        );
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.allSatisfy { :each |\n\t\t\teach.isZero | {\n\t\t\t\teach.isOne\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :anObject |\n\t\tself.equalBy(anObject, isCloseTo:/2)\n\t}",
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
  "{ :self |\n\t\t(self.size <= 1).if {\n\t\t\ttrue\n\t\t} {\n\t\t\tself.isGeometricProgressionBy(self.second / self.first, =)\n\t\t}\n\t}",
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
  "{ :self :aNumber :aBlock:/2 |\n\t\t(self.size <= 1).if {\n\t\t\ttrue\n\t\t} {\n\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\tself.adjacentPairsDo { :a :b |\n\t\t\t\t\taBlock(b / a, aNumber).ifFalse {\n\t\t\t\t\t\tfalse.return\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\ttrue\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "isLexicographicallyLeastRotation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _lexicographicallyLeastRotationStartIndex_1(_self);
    /* Statements */
    return _verticalLine_2(
      _equalsSign_2(_i, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(
          _self,
          _rotateLeft_2(_self, _hyphenMinus_2(_i, 1)),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet i = self.lexicographicallyLeastRotationStartIndex;\n\t\ti = 1 | {\n\t\t\tself = self.rotateLeft(i - 1)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "isLogarithmicallyConcave",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_a);
    /* Statements */
    return _verticalLine_2(
      _lessThanSign_2(_n, 3),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _allSatisfy_2(
          _to_2(2, _hyphenMinus_2(_n, 1)),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSignEqualsSign_2(
              _square_1(_at_2(_a, _i)),
              _asterisk_2(
                _at_2(_a, _hyphenMinus_2(_i, 1)),
                _at_2(_a, _plusSign_2(_i, 1)),
              ),
            );
          }, ["i"]),
        );
      }, []),
    );
  }, ["a"]),
  "{ :a |\n\t\tlet n = a.size;\n\t\t(n < 3) | {\n\t\t\t2.to(n - 1).allSatisfy { :i |\n\t\t\t\ta[i].square >= (a[i - 1] * a[i + 1])\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "isNecklace",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isLexicographicallyLeastRotation_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.isLexicographicallyLeastRotation\n\t}",
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
  "{ :self |\n\t\tself.allSatisfy { :each |\n\t\t\teach.isInteger & {\n\t\t\t\teach.betweenAnd(0, 255)\n\t\t\t}\n\t\t}\n\t}",
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
          _to_2(1, _solidusSolidus_2(_k, 2)),
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
  "{ :self |\n\t\tlet k = self.size;\n\t\t(k < 2).if {\n\t\t\ttrue\n\t\t} {\n\t\t\t1.to(k // 2).allSatisfy { :i |\n\t\t\t\tself[i] = self[k + 1 - i]\n\t\t\t}\n\t\t}\n\t}",
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
          _to_2(3, _k),
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
  "{ :self |\n\t\tlet k = self.size;\n\t\t(k <= 2).if {\n\t\t\ttrue\n\t\t} {\n\t\t\tlet z = self[2] - self[1];\n\t\t\t3.to(k).allSatisfy { :i |\n\t\t\t\t(self[i] - self[i - 1]) = z\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :unused |\n\t\ttrue\n\t}",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "isSquareFreeWord",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_x);
    /* Statements */
    return _allSatisfy_2(
      _to_2(1, _solidusSolidus_2(_n, 2)),
      sl.annotateFunction(function (_m) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _m";
          throw new Error(errorMessage);
        } /* Statements */
        return _noneSatisfy_2(
          _to_2(1, _plusSign_2(_hyphenMinus_2(_n, _asterisk_2(2, _m)), 1)),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _allSatisfy_2(
              _to_2(0, _hyphenMinus_2(_m, 1)),
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _p = _plusSign_2(_i, _j);
                let _q = _plusSign_2(_plusSign_2(_i, _m), _j);
                /* Statements */
                return _equalsSign_2(_at_2(_x, _p), _at_2(_x, _q));
              }, ["j"]),
            );
          }, ["i"]),
        );
      }, ["m"]),
    );
  }, ["x"]),
  "{ :x |\n\t\tlet n = x.size;\n\t\t1.to(n // 2).allSatisfy { :m |\n\t\t\t1.to(n - (2 * m) + 1).noneSatisfy { :i |\n\t\t\t\t0.to(m - 1).allSatisfy { :j |\n\t\t\t\t\tlet p = i + j;\n\t\t\t\t\tlet q = i + m + j;\n\t\t\t\t\tx[p] = x[q]\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "isSquareFreeWordExtension",
  ["x", "l"],
  sl.annotateFunction(function (_x, _l) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _l";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _plusSign_2(_size_1(_x), 1);
    /* Statements */
    _x = _plusSignPlusSign_2(_x, [_l]);
    return _noneSatisfy_2(
      _to_2(1, _solidusSolidus_2(_n, 2)),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _allSatisfy_2(
          _to_2(0, _hyphenMinus_2(_i, 1)),
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _p = _hyphenMinus_2(_n, _j);
            let _q = _hyphenMinus_2(_hyphenMinus_2(_n, _j), _i);
            /* Statements */
            return _equalsSign_2(_at_2(_x, _p), _at_2(_x, _q));
          }, ["j"]),
        );
      }, ["i"]),
    );
  }, ["x", "l"]),
  "{ :x :l |\n\t\tlet n = x.size + 1;\n\t\tx := x ++ [l];\n\t\t1.to(n // 2).noneSatisfy { :i |\n\t\t\t0.to(i - 1).allSatisfy { :j |\n\t\t\t\tlet p = n - j;\n\t\t\t\tlet q = n - j - i;\n\t\t\t\tx[p] = x[q]\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "isSquareWord",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_x);
    /* Statements */
    return _ampersand_2(
      _greaterThanSign_2(_n, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _isEven_1(_n),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _m = _solidusSolidus_2(_n, 2);
            /* Statements */
            return _allSatisfy_2(
              _to_2(1, _m),
              sl.annotateFunction(function (_i) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _i";
                  throw new Error(errorMessage);
                } /* Statements */
                return _equalsSign_2(
                  _at_2(_x, _i),
                  _at_2(_x, _plusSign_2(_i, _m)),
                );
              }, ["i"]),
            );
          }, []),
        );
      }, []),
    );
  }, ["x"]),
  "{ :x |\n\t\tlet n = x.size;\n\t\t(n > 0) & {\n\t\t\tn.isEven & {\n\t\t\t\tlet m = n // 2;\n\t\t\t\t1.to(m).allSatisfy { :i |\n\t\t\t\t\tx[i] = x[i + m]\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "isUnimodal",
  ["x", "f:/2"],
  sl.annotateFunction(function (_x, _f_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _f_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_size_1(_x), 3),
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
        } /* Temporaries */
        let _n = _size_1(_x);
        let _i = 2;
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _lessThanSign_2(_i, _n),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _f_2(_at_2(_x, _hyphenMinus_2(_i, 1)), _at_2(_x, _i));
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _i = _plusSign_2(_i, 1);
          }, []),
        );
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _lessThanSignEqualsSign_2(_i, _n),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _f_2(_at_2(_x, _i), _at_2(_x, _hyphenMinus_2(_i, 1)));
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _i = _plusSign_2(_i, 1);
          }, []),
        );
        return (_equalsSign_2(_hyphenMinus_2(_i, 1), _n));
      }, []),
    );
  }, ["x", "f:/2"]),
  "{ :x :f:/2 |\n\t\t(x.size < 3).if {\n\t\t\tfalse\n\t\t} {\n\t\t\tlet n = x.size;\n\t\t\tlet i = 2;\n\t\t\t{\n\t\t\t\ti < n & {\n\t\t\t\t\tf(x[i - 1], x[i])\n\t\t\t\t}\n\t\t\t}.whileTrue {\n\t\t\t\ti := i + 1\n\t\t\t};\n\t\t\t{\n\t\t\t\ti <= n & {\n\t\t\t\t\tf(x[i], x[i - 1])\n\t\t\t\t}\n\t\t\t}.whileTrue {\n\t\t\t\ti := i + 1\n\t\t\t};\n\t\t\t(i - 1 = n)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "isUnimodal",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _isUnimodal_2(_x, _lessThanSignEqualsSign_2);
  }, ["x"]),
  "{ :x |\n\t\tx.isUnimodal(<=)\n\t}",
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
  "{ :self :anObject |\n\t\tself.equalBy(anObject, isVeryCloseTo:/2)\n\t}",
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
  "{ :self |\n\t\tlet answer = -Infinity;\n\t\tlet currentSum = 0;\n\t\tself.do { :x |\n\t\t\tcurrentSum := max(x, currentSum + x);\n\t\t\tanswer := max(answer, currentSum)\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self |\n\t\tself[self.size]\n\t}",
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
  "{ :self :n |\n\t\tlet i = self.size;\n\t\tself.copyFromTo(i - n + 1, i)\n\t}",
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
          _List_2(_hyphenMinus_2(_n, _i), _zero),
          _self,
        );
      }, []),
    );
  }, ["self", "n", "zero"]),
  "{ :self :n :zero |\n\t\tlet i = self.size;\n\t\t(i >= n).if {\n\t\t\tself.copyFromTo(i - n + 1, i)\n\t\t} {\n\t\t\tList(n - i, zero) ++ self\n\t\t}\n\t}",
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
  "{ :self :anElement |\n\t\tself.lastIndexOfStartingAt(anElement, self.size)\n\t}",
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
  "{ :self :anElement :exceptionBlock:/0 |\n\t\tlet index = self.lastIndexOfStartingAt(anElement, self.size);\n\t\t(index = 0).if {\n\t\t\texceptionBlock()\n\t\t} {\n\t\t\tindex\n\t\t}\n\t}",
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
  "{ :self :anElement :lastIndex |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tlastIndex.toByDo(1, -1) { :index |\n\t\t\t\t(self[index] = anElement).ifTrue {\n\t\t\t\t\tindex.return\n\t\t\t\t}\n\t\t\t};\n\t\t\t0\n\t\t}\n\t}",
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
  "{ :self :anElement :lastIndex :exceptionBlock:/0 |\n\t\tlet index = self.lastIndexOfStartingAt(anElement, lastIndex);\n\t\t(index = 0).if {\n\t\t\texceptionBlock()\n\t\t} {\n\t\t\tindex\n\t\t}\n\t}",
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
  "{ :self |\n\t\tlet n = self.size;\n\t\tlet f = List(2 * n, -1);\n\t\tlet k = 0;\n\t\tlet b = { :i |\n\t\t\tself[i - 1 % n + 1]\n\t\t};\n\t\t1.toDo(2 * n - 1) { :j |\n\t\t\tlet i = f[j - k];\n\t\t\t{\n\t\t\t\t(i != -1) & {\n\t\t\t\t\tb(j) != b(k + i + 1)\n\t\t\t\t}\n\t\t\t}.whileTrue {\n\t\t\t\t(b(j) <| b(k + i + 1)).ifTrue {\n\t\t\t\t\tk := j - i - 1\n\t\t\t\t};\n\t\t\t\ti := f[i + 1]\n\t\t\t};\n\t\t\t(\n\t\t\t\t(i = -1) & {\n\t\t\t\t\tb(j) != b(k + i + 1)\n\t\t\t\t}\n\t\t\t).if {\n\t\t\t\t(b(j) <| b(k + i + 1)).ifTrue {\n\t\t\t\t\tk := j\n\t\t\t\t};\n\t\t\t\tf[j - k + 1] := -1\n\t\t\t} {\n\t\t\t\tf[j - k + 1] := i + 1\n\t\t\t}\n\t\t};\n\t\tk - 1 % n + 1\n\t}",
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
    } /* Temporaries */
    let _i = _lexicographicallyLeastRotationStartIndex_1(_self);
    /* Statements */
    return _rotateLeft_2(_self, _hyphenMinus_2(_i, 1));
  }, ["self"]),
  "{ :self |\n\t\tlet i = self.lexicographicallyLeastRotationStartIndex;\n\t\tself.rotateLeft(i - 1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "lexicographicallyLeastSquareFreeWord",
  ["word", "n"],
  sl.annotateFunction(function (_word, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _word, _n";
      throw new Error(errorMessage);
    } /* Statements */
    _timesRepeat_2(
      _hyphenMinus_2(_n, _size_1(_word)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _letter = 0;
        /* Statements */
        _whileFalse_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isSquareFreeWordExtension_2(_word, _letter);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _letter = _plusSign_2(_letter, 1);
          }, []),
        );
        return _word = _plusSignPlusSign_2(_word, [_letter]);
      }, []),
    );
    return _word;
  }, ["word", "n"]),
  "{ :word :n |\n\t\t(n - word.size).timesRepeat {\n\t\t\tlet letter = 0;\n\t\t\t{ isSquareFreeWordExtension(word, letter) }.whileFalse {\n\t\t\t\tletter := letter + 1\n\t\t\t};\n\t\t\tword := word ++ [letter]\n\t\t};\n\t\tword\n\t}",
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
  "{ :m :b |\n\t\tlet x = m.transpose;\n\t\tlet y = [b];\n\t\tlet cx = m;\n\t\tlet cy = y.transpose;\n\t\tx.dot(cx).inverse.dot(x).dot(cy).transpose.first\n\t}",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "lengthWhile",
  ["x", "f:/1"],
  sl.annotateFunction(function (_x, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _f_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_x);
    let _i = 1;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _lessThanSignEqualsSign_2(_i, _n),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _f_1(_at_2(_x, _i));
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _i = _plusSign_2(_i, 1);
      }, []),
    );
    return _hyphenMinus_2(_i, 1);
  }, ["x", "f:/1"]),
  "{ :x :f:/1 |\n\t\tlet n = x.size;\n\t\tlet i = 1;\n\t\t{\n\t\t\ti <= n & {\n\t\t\t\tf(x[i])\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\ti := i + 1\n\t\t};\n\t\ti - 1\n\t}",
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
  "{ :v :c |\n\t\t(c * v).sum\n\t}",
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
  "{ :shape :aList |\n\t\t(aList - 1).mixedRadixDecode(shape) + 1\n\t}",
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
  "{ :kernel :init :n |\n\t\tlet answer = init.copy;\n\t\tlet m = kernel.size;\n\t\tlet d = init.size;\n\t\tlet j:/2 = (kernel.isVector || init.isVector).if { * } { dot:/2 };\n\t\td.toDo(n - 1) { :k |\n\t\t\tlet z = 0;\n\t\t\t1.toDo(m) { :i |\n\t\t\t\tz := z + j(kernel[i], answer[k + 1 - i])\n\t\t\t};\n\t\t\tanswer.add(z)\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :alphabet :n :aBlock:/1 |\n\t\tlet nextWord = { :w |\n\t\t\tlet k = (n // w.size) + 1;\n\t\t\tlet x = ({ w } ! k).catenate.first(n);\n\t\t\t{\n\t\t\t\tx.size > 0 & {\n\t\t\t\t\tx.last = alphabet.last\n\t\t\t\t}\n\t\t\t}.whileTrue {\n\t\t\t\tx.removeLast\n\t\t\t};\n\t\t\tx.isEmpty.ifFalse {\n\t\t\t\tlet i = alphabet.indexOf(x.last) + 1;\n\t\t\t\tx[x.size] := alphabet[i]\n\t\t\t};\n\t\t\tx\n\t\t};\n\t\tlet w = [alphabet.first];\n\t\t{\n\t\t\tw.size > 0 & {\n\t\t\t\tw.size <= n\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\taBlock(w);\n\t\t\tw := nextWord(w)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tlet answer = -Infinity;\n\t\tlet currentSum = 0;\n\t\tlet i = 1;\n\t\tlet j = 1;\n\t\tlet a = 1;\n\t\tself.withIndexDo { :x :b |\n\t\t\t(currentSum < 0).ifTrue {\n\t\t\t\tcurrentSum := 0;\n\t\t\t\ta := b\n\t\t\t};\n\t\t\tcurrentSum := currentSum + x;\n\t\t\t(currentSum > answer).ifTrue {\n\t\t\t\tanswer := currentSum;\n\t\t\t\ti := a;\n\t\t\t\tj := b\n\t\t\t}\n\t\t};\n\t\t[answer, i, j]\n\t}",
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
      _List_2(_m, _asList_1(_x)),
      _transpose_1(_List_2(_n, _asList_1(_y))),
    ];
  }, ["x", "y"]),
  "{ :x :y |\n\t\tlet m = y.size;\n\t\tlet n = x.size;\n\t\t[\n\t\t\tList(m, x.asList),\n\t\t\tList(n, y.asList).transpose\n\t\t]\n\t}",
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
  "{ :self :count |\n\t\tlet i = self.size // 2 + 1;\n\t\tlet j = count // 2;\n\t\tlet k = i - j;\n\t\tself.copyFromTo(k, k + count - 1)\n\t}",
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
  "{ :self |\n\t\tself[self.size // 2 + 1]\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tlet answer = Infinity;\n\t\tself.adjacentPairsDo { :p :q |\n\t\t\tanswer := answer.min(aBlock(q) - aBlock(p))\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self |\n\t\tself.minimumDifferenceBy(identity:/1)\n\t}",
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
  "{ :self :m :n |\n\t\tself ++ self.copyFromTo(n + 1, self.size - m).reverse\n\t}",
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
    _toByDo_4(
      _k,
      1,
      -1,
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
  "{ :self :factors |\n\t\tlet answer = 0;\n\t\tlet base = 1;\n\t\tlet k = factors.size.min(self.size);\n\t\tlet prefix = self.size - factors.size;\n\t\t(prefix > 1).ifTrue {\n\t\t\tself.error('@Sequenceable>>mixedRadixDecode: sequence too long')\n\t\t};\n\t\tk.toByDo(1, -1) { :index |\n\t\t\tanswer := answer + (self[index + prefix] * base);\n\t\t\tbase := base * factors[index]\n\t\t};\n\t\t(prefix = 1).ifTrue {\n\t\t\tanswer := answer + (self[1] * base)\n\t\t};\n\t\tanswer\n\t}",
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
    let __SplVar4 = _assertIsOfSize_2(
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
          return [_rOrW, _List_2(_rOrW, 1)];
        }, []),
      ),
      2,
    );
    let _r = _at_2(__SplVar4, 1);
    let _w = _at_2(__SplVar4, 2);
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
  "{ :x :rOrW |\n\t\tlet answer = [];\n\t\tlet [r, w] = rOrW.isList.if { [rOrW.size, rOrW] } { [rOrW, List(rOrW, 1)] };\n\t\tlet wSum = w.sum;\n\t\t1.toDo(x.size - r + 1) { :i |\n\t\t\tlet n = 0;\n\t\t\t1.toDo(r) { :j |\n\t\t\t\tn := n + (x[i + j - 1] * w[j])\n\t\t\t};\n\t\t\tanswer.add(n / wSum)\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :windowSize |\n\t\tmedian:/1.movingMap(self, windowSize)\n\t}",
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
  "{ :self :windowSize |\n\t\tsum:/1.movingMap(self, windowSize)\n\t}",
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
  "{ :self :p |\n\t\t(self.abs ^ p).sum ^ (1 / p)\n\t}",
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
  "{ :self |\n\t\tself.dotProduct(self.conjugate).sqrt\n\t}",
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
  "{ :self |\n\t\tlet n = self.norm;\n\t\tn.isVeryCloseTo(0).if {\n\t\t\tself\n\t\t} {\n\t\t\tself / n\n\t\t}\n\t}",
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
  "{ :self :compareBlock:/2 |\n\t\tlet seen = []; /* not Set() */\n\t\tself.collect { :each |\n\t\t\teach.select { :item |\n\t\t\t\tseen.includesBy(item, compareBlock:/2).if {\n\t\t\t\t\tfalse\n\t\t\t\t} {\n\t\t\t\t\tseen.add(item);\n\t\t\t\t\ttrue\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.nubCumulatively(=)\n\t}",
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
  "{ :self |\n\t\tlet seen = [];\n\t\tself.collect { :each |\n\t\t\tseen.includes(each).if {\n\t\t\t\tfalse\n\t\t\t} {\n\t\t\t\tseen.add(each);\n\t\t\t\ttrue\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :c :u |\n\t\t(c * u.last(c.size)).sum\n\t}",
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
  "{ :self :anObject |\n\t\tlet tally = 0;\n\t\tself.indicesDo { :index |\n\t\t\t(self[index] = anObject).ifTrue {\n\t\t\t\ttally := tally + 1\n\t\t\t}\n\t\t};\n\t\ttally\n\t}",
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
  "{ :self :aList |\n\t\touter(*, self, aList)\n\t}",
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
          _plusSignPlusSign_2(_List_2(_j, _anObject), _self),
          _List_2(_k, _anObject),
        );
      }, []),
    );
  }, ["self", "anInteger", "anObject"]),
  "{ :self :anInteger :anObject |\n\t\t(self.size >= anInteger).if {\n\t\t\tself\n\t\t} {\n\t\t\tlet i = anInteger - self.size;\n\t\t\tlet j = i // 2;\n\t\t\tlet k = i - j;\n\t\t\tList(j, anObject) ++ self ++ List(k, anObject)\n\t\t}\n\t}",
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
      _to_2(1, _solidusSolidus_2(_size_1(_self), 2)),
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
  "{ :self :aBlock:/2 |\n\t\t1.to(self.size // 2).collect { :index |\n\t\t\taBlock(self[2 * index - 1], self[2 * index])\n\t\t}\n\t}",
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
  "{ :self :aBlock:/2 |\n\t\t1.toDo(self.size // 2) { :index |\n\t\t\taBlock(self[2 * index - 1], self[2 * index])\n\t\t}\n\t}",
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
          _pairwiseSum_1(_ListView_4(_self, 1, _m, 1)),
          _pairwiseSum_1(_ListView_4(_self, _plusSign_2(_m, 1), _n, 1)),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet n = self.size;\n\t\t(n <= 128).if {\n\t\t\tself.sum\n\t\t} {\n\t\t\tlet m = (n / 2).floor;\n\t\t\tListView(self, 1, m, 1).pairwiseSum\n\t\t\t+\n\t\t\tListView(self, m + 1, n, 1).pairwiseSum\n\t\t}\n\t}",
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
  "{ :self :operand |\n\t\toperand.atAllSymmetrical(self)\n\t}",
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
  "{ :self :indices |\n\t\tlet k = indices.size;\n\t\tlet i = indices[1];\n\t\tlet a = i.partIndex(self);\n\t\t(k = 1).if {\n\t\t\ta\n\t\t} {\n\t\t\tlet j = indices.allButFirst;\n\t\t\ti.isCollection.if {\n\t\t\t\ta.collect { :each |\n\t\t\t\t\teach.part(j)\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\ta.part(j)\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :windowSize :stepSize :aBlock:/1 |\n\t\tlet answer = [];\n\t\tself.partitionDo(windowSize, stepSize) { :each |\n\t\t\tanswer.add(aBlock(each))\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :windowSize :stepSize :aBlock:/1 |\n\t\t(windowSize <= self.size).ifTrue {\n\t\t\t(windowSize = 0).if {\n\t\t\t\taBlock([])\n\t\t\t} {\n\t\t\t\tlet answer = List(windowSize);\n\t\t\t\t1.toByDo(self.size - windowSize + 1, stepSize) { :index |\n\t\t\t\t\tself.copyFromToInto(index, index + windowSize - 1, answer);\n\t\t\t\t\taBlock(answer)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :windowSize :stepSize |\n\t\tself.partitionCollect(windowSize, stepSize, copy:/1)\n\t}",
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
  "{ :self :windowSize |\n\t\tself.partition(windowSize, windowSize)\n\t}",
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
  "{ :self :aList :anObject |\n\t\t(self.depth > 2).if {\n\t\t\tself.withCollect(aList) { :i :j |\n\t\t\t\ti.pick(j, anObject)\n\t\t\t}\n\t\t} {\n\t\t\tlet answer = [];\n\t\t\tself.withDo(aList) { :i :j |\n\t\t\t\t(j = anObject).ifTrue {\n\t\t\t\t\tanswer.add(i)\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
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
  "{ :self :index |\n\t\t(index < 1).if {\n\t\t\t1\n\t\t} {\n\t\t\t(index > self.size).if {\n\t\t\t\tself.size\n\t\t\t} {\n\t\t\t\tindex\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\t1.toDo(self.size) { :each |\n\t\t\taBlock(self.copyFromTo(1, each))\n\t\t}\n\t}",
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
  "{ :self |\n\t\tlet answer = [];\n\t\tself.prefixesDo { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self |\n\t\tself.scan(*)\n\t}",
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
  "{ :self |\n\t\tself.scan(+)\n\t}",
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
  "{ :u :v |\n\t\tlet w = v.conjugate;\n\t\tu.dot(w) / v.dot(w) * v\n\t}",
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
  "{ :self :r :shape |\n\t\tlet k = self.size;\n\t\t{\n\t\t\tlet i = r.nextRandomInteger(1, k);\n\t\t\tself[i]\n\t\t} ! shape\n\t}",
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
  "{ :self |\n\t\tself.partition(2, 1).collect { :each |\n\t\t\teach[2] / each[1]\n\t\t}\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tself.indicesDo { :index |\n\t\t\tself[index] := aBlock(self[index])\n\t\t}\n\t}",
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
  "{ :self :oldObject :newObject |\n\t\tlet index = 0;\n\t\t{\n\t\t\tindex := self.indexOfStartingAtBy(oldObject, index + 1, =);\n\t\t\tindex = 0\n\t\t}.whileFalse {\n\t\t\tself[index] := newObject\n\t\t};\n\t\tself\n\t}",
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
  "{ :self :start :stop :replacement |\n\t\t(replacement.size = (stop - start + 1)).if {\n\t\t\tself.replaceFromToWithStartingAt(start, stop, replacement, 1)\n\t\t} {\n\t\t\tself.error('@Sequenceable>> replaceFromToWith: size of replacement does not match')\n\t\t}\n\t}",
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
  "{ :self :start :stop :replacement :replacementStart |\n\t\tlet replacementOffset = replacementStart - start;\n\t\tlet index = start;\n\t\t{\n\t\t\tindex <= stop\n\t\t}.whileTrue {\n\t\t\tself[index] := replacement[replacementOffset + index];\n\t\t\tindex := index + 1\n\t\t};\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "replicate",
  ["counts", "items", "aBlock:/1"],
  sl.annotateFunction(function (_counts, _items, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _counts, _items, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _exclamationMarkEqualsSign_2(_size_1(_counts), _size_1(_items)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _counts,
          "@Sequenceable>>replicate: counts not of correct size",
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answerSize = _sum_1(_counts);
        let _answer = _ofSize_2(_species_1(_items), _answerSize);
        let _answerIndex = 1;
        /* Statements */
        _toDo_3(
          1,
          _size_1(_items),
          sl.annotateFunction(function (_index) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _index";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _entry = _aBlock_1(_at_2(_items, _index));
            /* Statements */
            return _timesRepeat_2(
              _at_2(_counts, _index),
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
          }, ["index"]),
        );
        return _answer;
      }, []),
    );
  }, ["counts", "items", "aBlock:/1"]),
  "{ :counts :items :aBlock:/1 |\n\t\t(counts.size != items.size).if {\n\t\t\tcounts.error('@Sequenceable>>replicate: counts not of correct size')\n\t\t} {\n\t\t\tlet answerSize = counts.sum;\n\t\t\tlet answer = items.species.ofSize(answerSize);\n\t\t\tlet answerIndex = 1;\n\t\t\t1.toDo(items.size) { :index |\n\t\t\t\tlet entry = aBlock(items[index]);\n\t\t\t\tcounts[index].timesRepeat {\n\t\t\t\t\tanswer[answerIndex] := entry;\n\t\t\t\t\tanswerIndex := answerIndex + 1\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Sequenceable",
  "Sequenceable",
  "replicate",
  ["counts", "items"],
  sl.annotateFunction(function (_counts, _items) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _counts, _items";
      throw new Error(errorMessage);
    } /* Statements */
    return _replicate_3(_counts, _items, _identity_1);
  }, ["counts", "items"]),
  "{ :counts :items |\n\t\tcounts.replicate(items, identity:/1)\n\t}",
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
  "{ :self :level |\n\t\t(level <= 1).if {\n\t\t\tlet answer = self.species.ofSize(self.size);\n\t\t\tlet fromIndex = self.size + 1;\n\t\t\tself.indicesDo { :toIndex |\n\t\t\t\tanswer[toIndex] := self[fromIndex - 1];\n\t\t\t\tfromIndex := fromIndex - 1\n\t\t\t};\n\t\t\tanswer\n\t\t} {\n\t\t\tself.collect { :each |\n\t\t\t\teach.reverse(level - 1)\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.reverse(1)\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tself.size.toByDo(1, -1) { :index |\n\t\t\taBlock(self[index])\n\t\t}\n\t}",
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
  "{ :self :aList :aBlock:/2 |\n\t\t(self.size != aList.size).if {\n\t\t\tself.error('@Sequenceable>> reverseWithDo: unequal size')\n\t\t} {\n\t\t\tself.size.toByDo(1, -1) { :index |\n\t\t\t\taBlock(self[index], aList[index])\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :anObject |\n\t\tlet m = self.size;\n\t\t(m < 2).if {\n\t\t\tself\n\t\t} {\n\t\t\tanObject.isSequenceable.if {\n\t\t\t\tlet n = anObject.size;\n\t\t\t\t(n > m).if {\n\t\t\t\t\tself.error('riffle: too many items to insert')\n\t\t\t\t} {\n\t\t\t\t\tlet answer = [];\n\t\t\t\t\t1.toDo(m - 1) { :i |\n\t\t\t\t\t\tanswer.add(self[i]);\n\t\t\t\t\t\tanswer.add(anObject.atWrap(i))\n\t\t\t\t\t};\n\t\t\t\t\tanswer.add(self[m]);\n\t\t\t\t\t(n = m).ifTrue {\n\t\t\t\t\t\tanswer.add(anObject[n])\n\t\t\t\t\t};\n\t\t\t\t\tanswer\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tself.intersperse(anObject)\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :anInteger |\n\t\tself.rotateRight(anInteger)\n\t}",
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
  "{ :self |\n\t\tself.rotateLeft(1)\n\t}",
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
  "{ :self :anInteger |\n\t\t(1 + anInteger).toAsCollect(self.size + anInteger, self.species) { :index |\n\t\t\tself.atWrap(index)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tlet n = self.size;\n\t\tlet left = self.first;\n\t\t2.toDo(n) { :i |\n\t\t\tself[i - 1] := self[i]\n\t\t};\n\t\tself[n] := left\n\t}",
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
  "{ :self |\n\t\tself.rotateRight(1)\n\t}",
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
  "{ :self :anInteger |\n\t\t(1 - anInteger).toAsCollect(self.size - anInteger, self.species) { :index |\n\t\t\tself.atWrap(index)\n\t\t}\n\t}",
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
  "{ :self :aBlock:/2 |\n\t\tself.scanLeft(aBlock:/2)\n\t}",
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
  "{ :self :aBlock:/2 |\n\t\tself.ifEmpty {\n\t\t\tself.copy\n\t\t} {\n\t\t\tlet answer = self.species.new(self.size);\n\t\t\tlet next = self[1];\n\t\t\tanswer[1] := next;\n\t\t\t2.toDo(self.size) { :index |\n\t\t\t\tnext := aBlock(next, self[index]);\n\t\t\t\tanswer[index] := next\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
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
          _to_2(1, _size_1(_self)),
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
  "{ :self :aBlock:/2 |\n\t\tself.ifEmpty {\n\t\t\tself.copy\n\t\t} {\n\t\t\t1.to(self.size).collect { :each |\n\t\t\t\tself.foldRightPrefix(each, aBlock:/2)\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :aBlock:/2 |\n\t\tself.ifEmpty {\n\t\t\tself.copy\n\t\t} {\n\t\t\tlet answer = self.species.new(self.size);\n\t\t\tlet next = self[self.size];\n\t\t\tanswer[self.size] := next;\n\t\t\t(self.size - 1).toByDo(1, -1) { :index |\n\t\t\t\tnext := aBlock(self[index], next);\n\t\t\t\tanswer[index] := next\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
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
  "{ :self :epsilon |\n\t\tlet answer = [];\n\t\tlet final = self.fromContinuedFraction;\n\t\tlet lastError = final;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself.prefixesDo { :each |\n\t\t\t\tlet z = each.last;\n\t\t\t\tlet h = (z / 2).roundUp;\n\t\t\t\tlet p = each.allButLast;\n\t\t\t\th.toDo(z) { :k |\n\t\t\t\t\tlet c = p ++ [k];\n\t\t\t\t\tlet r = c.fromContinuedFraction;\n\t\t\t\t\tlet nextError = (final - r).abs;\n\t\t\t\t\t(nextError < lastError).ifTrue {\n\t\t\t\t\t\tanswer.add(r);\n\t\t\t\t\t\tlastError := nextError\n\t\t\t\t\t};\n\t\t\t\t\t((final - r).abs < epsilon).ifTrue {\n\t\t\t\t\t\tanswer.return\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
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
                let _v = _ListView_4(_list, _i, _e, 1);
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
        return _addAll_2(_answer, _ListView_4(_list, _i, _k, 1));
      }, []),
    );
    return _answer;
  }, ["list", "rules", "n"]),
  "{ :list :rules :n |\n\t\tlet answer = [];\n\t\tlet i = 1;\n\t\tlet j = 0;\n\t\tlet k = list.size;\n\t\trules := rules.nest;\n\t\t{ i <= k & { j < n } }.whileTrue {\n\t\t\tlet r = 1;\n\t\t\tlet m = false;\n\t\t\t{ r <= rules.size & { m.not } }.whileTrue {\n\t\t\t\tlet u = rules[r].key.nest;\n\t\t\t\tlet e = i + u.size - 1;\n\t\t\t\t(e > k).if {\n\t\t\t\t\tr := r + 1\n\t\t\t\t} {\n\t\t\t\t\tlet v = ListView(list, i, e, 1);\n\t\t\t\t\tu.hasEqualElements(v).if {\n\t\t\t\t\t\tlet w = rules[r].value.nest;\n\t\t\t\t\t\tanswer.addAll(w);\n\t\t\t\t\t\tm := true;\n\t\t\t\t\t\ti := i + u.size;\n\t\t\t\t\t\tj := j + 1\n\t\t\t\t\t} {\n\t\t\t\t\t\tr := r + 1\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\tm.ifFalse {\n\t\t\t\tanswer.add(list[i]);\n\t\t\t\ti := i + 1\n\t\t\t}\n\t\t};\n\t\t(i < k).ifTrue {\n\t\t\tanswer.addAll(ListView(list, i, k, 1))\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :list :rules |\n\t\tsequenceReplace(list, rules, Infinity)\n\t}",
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
  "{ :initialState :taps :count |\n\t\tlet register = initialState.copy;\n\t\tlet k = register.size;\n\t\tlet step = {\n\t\t\tlet bit = taps.collect { :i |\n\t\t\t\tregister[k + 1 - i]\n\t\t\t}.reduce(+) % 2;\n\t\t\tregister.removeLast;\n\t\t\tregister.addFirst(bit);\n\t\t\tbit\n\t\t};\n\t\tlet answer = [register.first];\n\t\t(count - 1).timesRepeat {\n\t\t\tanswer.add(step())\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tlet size = self.size;\n\t\t1.toDo(size) { :each |\n\t\t\taBlock(self.copyFromTo(each, size))\n\t\t}\n\t}",
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
  "{ :self |\n\t\tlet answer = [];\n\t\tself.suffixesDo { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self |\n\t\tself[1 + 1]\n\t}",
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
  "{ :self :n |\n\t\tself.copyFromTo(n + 1, n * 2)\n\t}",
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
  "{ :self |\n\t\tself[self.size - 1]\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tlet answer = [];\n\t\tself.indicesDo { :index |\n\t\t\taBlock(self[index]).ifTrue {\n\t\t\t\tanswer.add(self[index])\n\t\t\t}\n\t\t};\n\t\tself.species.newFrom(answer)\n\t}",
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
  "{ :z :beta |\n\t\tz.isVector.if {\n\t\t\tlet a = (beta * z).exp;\n\t\t\ta / a.sum\n\t\t} {\n\t\t\tz.collect { :each |\n\t\t\t\teach.softMax(beta)\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :z |\n\t\tz.softMax(1)\n\t}",
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
  "{ :self :aBlock:/2 |\n\t\tself.ifEmpty {\n\t\t\t[]\n\t\t} {\n\t\t\tlet answer = [];\n\t\t\tlet startIndex = 1;\n\t\t\tlet previous = self.first;\n\t\t\t2.toDo(self.size) { :index |\n\t\t\t\tlet next = self[index];\n\t\t\t\taBlock(previous, next).ifFalse {\n\t\t\t\t\tanswer.add(self.copyFromTo(startIndex, index - 1));\n\t\t\t\t\tstartIndex := index\n\t\t\t\t};\n\t\t\t\tprevious := next\n\t\t\t};\n\t\t\tanswer.add(self.copyFromTo(startIndex, self.size));\n\t\t\tanswer\n\t\t}\n\t}",
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
  "{ :self :aCollection |\n\t\tlet answer = [];\n\t\tself.splitByDo(aCollection) { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :aCollection :aBlock:/1 |\n\t\tlet lastIndex = 1;\n\t\tlet nextIndex = nil;\n\t\t{\n\t\t\tnextIndex := self.indexOfSubstringStartingAt(aCollection, lastIndex);\n\t\t\tnextIndex = 0\n\t\t}.whileFalse {\n\t\t\taBlock(self.copyFromTo(lastIndex, nextIndex - 1));\n\t\t\tlastIndex := nextIndex + aCollection.size\n\t\t};\n\t\taBlock(self.copyFromTo(lastIndex, self.size))\n\t}",
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
    let _k = _asList_1(
      _nonemptyRange_3(0, _hyphenMinus_2(_product_1(_b), 1), 1),
    );
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
  "{ :self :sublist |\n\t\tlet i = sublist.collect { :each |\n\t\t\tself.indicesOf(each)\n\t\t};\n\t\tlet b = i.collect(size:/1);\n\t\tlet k = [0 .. b.product - 1];\n\t\tk.collect { :each |\n\t\t\tlet j = each.mixedRadixEncode(b) + 1;\n\t\t\ti.withCollect(j, at:/2)\n\t\t}\n\t}",
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
              let __SplVar5 = _assertIsOfSize_2(_each, 2);
              let _i = _at_2(__SplVar5, 1);
              let _j = _at_2(__SplVar5, 2);
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
              let __SplVar6 = _assertIsOfSize_2(_each, 2);
              let _i = _at_2(__SplVar6, 1);
              let _j = _at_2(__SplVar6, 2);
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
  "{ :self :indices |\n\t\tindices.rank.caseOf([\n\t\t\t2 -> {\n\t\t\t\tindices.do { :each |\n\t\t\t\t\tlet [i, j] = each;\n\t\t\t\t\tlet x = self[i];\n\t\t\t\t\tself[i] := self[j];\n\t\t\t\t\tself[j] := x\n\t\t\t\t}\n\t\t\t},\n\t\t\t3 -> {\n\t\t\t\tindices.do { :each |\n\t\t\t\t\tlet [i, j] = each;\n\t\t\t\t\tlet x = self.atPath(i);\n\t\t\t\t\tself.atPathPut(i, self.atPath(j));\n\t\t\t\t\tself.atPathPut(j, x)\n\t\t\t\t}\n\t\t\t}\n\t\t])\n\t}",
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
  "{ :self :i :j |\n\t\tlet x = self.atPath(i);\n\t\tself.atPathPut(i, self.atPath(j));\n\t\tself.atPathPut(j, x)\n\t}",
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
  "{ :self :i :j |\n\t\tlet x = self[i];\n\t\tself[i] := self[j];\n\t\tself[j] := x\n\t}",
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
  "{ :self :count :fill |\n\t\t(count < 0).if {\n\t\t\tself.takeLast(count.negate, fill)\n\t\t} {\n\t\t\tself.takeFirst(count, fill)\n\t\t}\n\t}",
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
  "{ :self :count |\n\t\t[self.take(count), self.drop(count)]\n\t}",
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
          _List_2(_hyphenMinus_2(_count, _size_1(_self)), _fill),
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
  "{ :self :count :fill |\n\t\t(count > self.size).if {\n\t\t\tself ++ List(count - self.size, fill)\n\t\t} {\n\t\t\tself.copyFromTo(1, count)\n\t\t}\n\t}",
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
          _List_2(_hyphenMinus_2(_count, _size_1(_self)), _fill),
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
  "{ :self :count :fill |\n\t\t(count > self.size).if {\n\t\t\tList(count - self.size, fill) ++ self\n\t\t} {\n\t\t\tself.copyFromTo(self.size - count + 1, self.size)\n\t\t}\n\t}",
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
  "{ :self :aList |\n\t\tlet answer = [];\n\t\tlet startIndex = 1;\n\t\taList.do { :each |\n\t\t\tlet endIndex = startIndex + each - 1;\n\t\t\tanswer.add(self.copyFromTo(startIndex, endIndex));\n\t\t\tstartIndex := endIndex + 1\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tself.detectIndexIfFoundIfNone { :each |\n\t\t\teach.aBlock.not\n\t\t} { :i |\n\t\t\tself.copyFromTo(1, i - 1)\n\t\t} {\n\t\t\tself\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself[3]\n\t}",
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
  "{ :self :n |\n\t\tself.copyFromTo(n * 2 + 1, n * 3)\n\t}",
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
  "{ :self |\n\t\tself[self.size - 2]\n\t}",
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
  "{ :self :permutation |\n\t\tpermutation.isPermutationList.if {\n\t\t\tlet fromShape = self.shape;\n\t\t\tlet toShape = fromShape @* permutation;\n\t\t\tlet inverse = permutation.inversePermutation.list(permutation.size);\n\t\t\ttoShape.fill { :toIndex |\n\t\t\t\tlet fromIndex = toIndex @* inverse;\n\t\t\t\tself @> fromIndex\n\t\t\t}\n\t\t} {\n\t\t\tself.error('@Sequenceable>>transpose: not permutation')\n\t\t}\n\t}",
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
    let __SplVar7 = _assertIsOfSize_2(_dimensions_2(_self, 2), 2);
    let _m = _at_2(__SplVar7, 1);
    let _n = _at_2(__SplVar7, 2);
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
  "{ :self |\n\t\tlet [m, n] = self.dimensions(2);\n\t\t1.toAsCollect(n, self[1].species) { :index |\n\t\t\tself.collect { :row |\n\t\t\t\trow[index]\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tlet n = self.collect(size:/1).max;\n\t\t1.toAsCollect(n, self.first.species) { :index |\n\t\t\tself.collect { :row |\n\t\t\t\trow.atWrap(index)\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tlet answer = [];\n\t\tself.tuplesDo { :each |\n\t\t\tanswer.add(each.aBlock)\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tlet tupleCount = self.collect(size:/1).product;\n\t\tlet tuple = self.species.new(self.size);\n\t\t1.toDo(tupleCount) { :i |\n\t\t\tlet k = i - 1;\n\t\t\tself.size.toByDo(1, -1) { :j |\n\t\t\t\tlet fromSequence = self[j];\n\t\t\t\ttuple[j] := fromSequence[k % fromSequence.size + 1];\n\t\t\t\tk := k // fromSequence.size\n\t\t\t};\n\t\t\taBlock(tuple)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.tuplesCollect(copy:/1)\n\t}",
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
    return _tuples_1(_List_2(_count, _self));
  }, ["self", "count"]),
  "{ :self :count |\n\t\tList(count, self).tuples\n\t}",
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
  "{ :self |\n\t\tlet shape = self.collect(size:/1) ++ [self.size];\n\t\tself.tuples.reshape(shape)\n\t}",
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
  "{ :self |\n\t\tself.uniqueElements(=)\n\t}",
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
  "{ :self :aBlock:/2 |\n\t\tself.withIndexCollect { :p :i |\n\t\t\tlet seen = [];\n\t\t\tself.withIndexDo { :q :j |\n\t\t\t\t(i != j).ifTrue {\n\t\t\t\t\tq.do { :each |\n\t\t\t\t\t\tseen.includesBy(each, aBlock:/2).ifFalse {\n\t\t\t\t\t\t\tseen.add(each)\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\tp.difference(seen).nubBy(aBlock:/2)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.nub.sort\n\t}",
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
  "{ :self |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself.do { :each |\n\t\t\t\teach.key.blockValue.ifTrue {\n\t\t\t\t\teach.value.blockValue.return\n\t\t\t\t}\n\t\t\t};\n\t\t\tnil\n\t\t}\n\t}",
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
  "{ :self :aList :aBlock:/2 |\n\t\tself.withCollectWrapping(aList, aBlock:/2)\n\t}",
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
  "{ :self :aList :aBlock:/2 |\n\t\tlet answer = self.species.new(self.size * aList.size);\n\t\tlet nextIndex = 1;\n\t\tself.do { :leftItem |\n\t\t\taList.do { :rightItem |\n\t\t\t\tanswer[nextIndex] := aBlock(leftItem, rightItem);\n\t\t\t\tnextIndex := nextIndex + 1\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :aList :aBlock:/2 |\n\t\tself.isOfSameSizeCheck(aList);\n\t\t1.toAsCollect(self.size, self.species) { :index |\n\t\t\taBlock(self[index], aList[index])\n\t\t}\n\t}",
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
  "{ :self :aCollection :aBlock:/2 |\n\t\tlet maximumSize = self.size.max(aCollection.size);\n\t\t1.toAsCollect(maximumSize, self.species) { :index |\n\t\t\taBlock(self.atFold(index), aCollection.atFold(index))\n\t\t}\n\t}",
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
  "{ :self :anObject :aBlock:/2 |\n\t\t(anObject.isCollection & {\n\t\t\tanObject.isSequenceable\n\t\t}).if {\n\t\t\tself.withCollect(anObject, aBlock:/2)\n\t\t} {\n\t\t\tanObject.adaptToCollectionAndApply(self, aBlock:/2)\n\t\t}\n\t}",
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
  "{ :self :aList :aBlock:/2 |\n\t\taBlock:/2.outer(self, aList)\n\t}",
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
  "{ :self :aList :aBlock:/2 |\n\t\tself.collect { :each |\n\t\t\taBlock(each, aList)\n\t\t}\n\t}",
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
  "{ :self :aList :aBlock:/2 |\n\t\t(self.size < aList.size).if {\n\t\t\tself.withCollect(aList.take(self.size), aBlock:/2)\n\t\t} {\n\t\t\tself.take(aList.size).withCollect(aList, aBlock:/2)\n\t\t}\n\t}",
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
  "{ :self :aList :aBlock:/2 |\n\t\tlet maximumSize = self.size.max(aList.size);\n\t\t1.toAsCollect(maximumSize, self.species) { :index |\n\t\t\taBlock(self.atWrap(index), aList.atWrap(index))\n\t\t}\n\t}",
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
  "{ :self :otherCollection :twoArgBlock:/2 |\n\t\tself.isOfSameSizeCheck(otherCollection);\n\t\tself.indicesDo { :index |\n\t\t\ttwoArgBlock(self[index], otherCollection[index])\n\t\t}\n\t}",
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
  "{ :self :otherCollection :aBlock:/2 |\n\t\tself.isOfSameSizeCheck(otherCollection);\n\t\tself.indicesDo { :index |\n\t\t\tself[index] := aBlock(self[index], otherCollection[index])\n\t\t}\n\t}",
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
  "{ :self :elementAndIndexBlock:/2 |\n\t\tlet answer = self.species.ofSize(self.size);\n\t\tself.indicesDo { :index |\n\t\t\tanswer[index] := elementAndIndexBlock(self[index], index)\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :elementAndIndexBlock:/2 |\n\t\tself.indicesDo { :index |\n\t\t\telementAndIndexBlock(self[index], index)\n\t\t}\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tlet n = self.size;\n\t\t{\n\t\t\tn >= 2 & {\n\t\t\t\taBlock(self[n])\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\tn := n - 1\n\t\t};\n\t\t(n = self.size).if {\n\t\t\tself\n\t\t} {\n\t\t\tself.copyFromTo(1, n)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.withoutTrailing(isZero:/1)\n\t}",
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
  "{ :self :aBlock:/2 |\n\t\tself.indicesDo { :index |\n\t\t\tself[index] := aBlock(self[index], index)\n\t\t}\n\t}",
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
  "{ :self :aList :anotherList :aBlock:/3 |\n\t\tlet maximumSize = [self, aList, anotherList].collect(size:/1).max;\n\t\t1.toAsCollect(maximumSize, self.species) { :index |\n\t\t\taBlock(self.atWrap(index), aList.atWrap(index), anotherList.atWrap(index))\n\t\t}\n\t}",
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
  "{ :self :aList :anotherList :aBlock:/3 |\n\t\tself.isOfSameSizeCheck(aList);\n\t\tself.isOfSameSizeCheck(anotherList);\n\t\tself.indicesDo { :index |\n\t\t\taBlock(self[index], aList[index], anotherList[index])\n\t\t}\n\t}",
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
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isNumber.if {\n\t\t\tself.replace { :each |\n\t\t\t\taBlock(each, anObject)\n\t\t\t}\n\t\t} {\n\t\t\tself.withReplace(anObject, aBlock:/2)\n\t\t}\n\t}",
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
  "{ :self :anObject |\n\t\tapplyBinaryMathOperatorInPlace(self, anObject, +)\n\t}",
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
  "{ :self :anObject |\n\t\tapplyBinaryMathOperatorInPlace(self, anObject, -)\n\t}",
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
  "{ :self :anObject |\n\t\tapplyBinaryMathOperatorInPlace(self, anObject, *)\n\t}",
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
  "{ :self :anObject |\n\t\tapplyBinaryMathOperatorInPlace(self, anObject, /)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Sequenceable",
  "numberSign",
  ["count", "items"],
  sl.annotateFunction(function (_count, _items) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _count, _items";
      throw new Error(errorMessage);
    } /* Statements */
    return _replicate_2(_count, _items);
  }, ["count", "items"]),
  "{ :count :items |\n\t\tcount.replicate(items)\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tlet low = 1;\n\t\t\tlet high = self;\n\t\t\t{\n\t\t\t\tlow <= high\n\t\t\t}.whileTrue {\n\t\t\t\tlet mid = (low + high) // 2;\n\t\t\t\taBlock(mid).if {\n\t\t\t\t\thigh := mid - 1\n\t\t\t\t} {\n\t\t\t\t\tlow := mid + 1\n\t\t\t\t}\n\t\t\t};\n\t\t\tlow\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Sequenceable",
  "equispacedTriplesDo",
  ["self", "aBlock:/3"],
  sl.annotateFunction(function (_self, _aBlock_3) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_3";
      throw new Error(errorMessage);
    } /* Statements */
    return _toDo_3(
      1,
      _solidusSolidus_2(_self, 2),
      sl.annotateFunction(function (_m) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _m";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _n = _hyphenMinus_2(_self, _asterisk_2(2, _m));
        /* Statements */
        return _toDo_3(
          1,
          _n,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _j = _plusSign_2(_i, _m);
            let _k = _plusSign_2(_i, _asterisk_2(2, _m));
            /* Statements */
            return _aBlock_3(_i, _j, _k);
          }, ["i"]),
        );
      }, ["m"]),
    );
  }, ["self", "aBlock:/3"]),
  "{ :self :aBlock:/3 |\n\t\t1.toDo(self // 2) { :m |\n\t\t\tlet n = self - (2 * m);\n\t\t\t1.toDo(n) { :i |\n\t\t\t\tlet j = i + m;\n\t\t\t\tlet k = i + (2 * m);\n\t\t\t\taBlock(i, j, k)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Sequenceable",
  "equispacedTriples",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _equispacedTriplesDo_2(
      _self,
      sl.annotateFunction(function (_i, _j, _k) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _i, _j, _k";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, [_i, _j, _k]);
      }, ["i", "j", "k"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tself.equispacedTriplesDo { :i :j :k |\n\t\t\tanswer.add([i, j, k])\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :operand |\n\t\toperand.atSymmetrical(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Sequenceable",
  "replicate",
  ["self", "items", "aBlock:/1"],
  sl.annotateFunction(function (_self, _items, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _items, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    _assertIsInteger_2(_self, "@Integer>>replicate");
    return _replicate_3(_List_2(_size_1(_items), _self), _items, _aBlock_1);
  }, ["self", "items", "aBlock:/1"]),
  "{ :self :items :aBlock:/1 |\n\t\tself.assertIsInteger('@Integer>>replicate');\n\t\tList(items.size, self).replicate(items, aBlock:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Sequenceable",
  "replicate",
  ["self", "items"],
  sl.annotateFunction(function (_self, _items) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _items";
      throw new Error(errorMessage);
    } /* Statements */
    return _replicate_3(_self, _items, _identity_1);
  }, ["self", "items"]),
  "{ :self :items |\n\t\tself.replicate(items, identity:/1)\n\t}",
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
  "{ :self :stop :species :aBlock:/1 |\n\t\tlet answerSize = stop - self + 1;\n\t\tlet answer = species.ofSize(answerSize);\n\t\t1.toDo(answerSize) { :index |\n\t\t\tanswer[index] := aBlock(index + self - 1)\n\t\t};\n\t\tanswer\n\t}",
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
          return _asList_1(_nonemptyRange_3(1, _k, 1));
        }, []),
        _n,
      ),
      _f_1,
    );
  }, ["k", "n", "f:/1"]),
  "{ :k :n :f:/1 |\n\t\t({ [1 .. k] } ! n).tuplesDo(f:/1)\n\t}",
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
  "{ :self |\n\t\tfalse\n\t}",
);
