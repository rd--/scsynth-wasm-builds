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
  "{ :self |\n\t\tself.size\n\t}",
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
  "{ :self :anObject |\n\t\tself.collect(+.bindRight(anObject))\n\t}",
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
  "{ :self :anObject |\n\t\tself.collect(-.bindRight(anObject))\n\t}",
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
  "{ :self :anObject |\n\t\tself.collect(*.bindRight(anObject))\n\t}",
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
  "{ :self :anObject |\n\t\tself.collect(/.bindRight(anObject))\n\t}",
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
  "{ :self :anObject |\n\t\tself.collect(^.bindRight(anObject))\n\t}",
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
  "{ :self :anObject |\n\t\tself.collect(%.bindRight(anObject))\n\t}",
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
  "{ :self :aCollection |\n\t\tlet answer = self.copy;\n\t\tanswer.addAll(aCollection.assertIsCollection);\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "adaptToIntegerAndApply",
  ["self", "anInteger", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anInteger, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aBlock_2";
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
        return _aBlock_2(_anInteger, _each);
      }, ["each"]),
    );
  }, ["self", "anInteger", "aBlock:/2"]),
  "{ :self :anInteger :aBlock:/2 |\n\t\tself.collect { :each |\n\t\t\taBlock(anInteger, each)\n\t\t}\n\t}",
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
  "{ :self :aNumber :aBlock:/2 |\n\t\tself.collect { :each |\n\t\t\taBlock(aNumber, each)\n\t\t}\n\t}",
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
  "{ :self :aBlock:/2 |\n\t\tself.isEmpty.if {\n\t\t\ttrue\n\t\t} {\n\t\t\tlet item = self.anyOne;\n\t\t\tself.allSatisfy { :each |\n\t\t\t\taBlock(each, item)\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.allEqualBy(=)\n\t}",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "allEqualTo",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
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
        return _equalsSign_2(_each, _anObject);
      }, ["each"]),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.allSatisfy { :each |\n\t\t\teach = anObject\n\t\t}\n\t}",
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
  "{ :self :numberOfElements |\n\t\tself.anyAs(numberOfElements, self.species)\n\t}",
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
  "{ :self :numberOfElements :aBlock:/1 |\n\t\tlet index = 0;\n\t\tlet result = numberOfElements.aBlock;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tresult.fillFromWith(self) { :each |\n\t\t\t\tindex := index + 1;\n\t\t\t\t(index > numberOfElements).if {\n\t\t\t\t\tresult.return\n\t\t\t\t} {\n\t\t\t\t\teach\n\t\t\t\t}\n\t\t\t};\n\t\t\t(index = numberOfElements).ifFalse {\n\t\t\t\tself.error('@Collection>>any: Not enough elements in collection')\n\t\t\t};\n\t\t\tresult\n\t\t}\n\t}",
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
    let _answer = _List_1(_size_1(_self));
    let _index = 1;
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(_answer, _index, _each);
        return _index = _plusSign_2(_index, 1);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = List(self.size);\n\t\tlet index = 1;\n\t\tself.do { :each |\n\t\t\tanswer[index] := each;\n\t\t\tindex := index + 1\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self |\n\t\tself\n\t}",
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
  "{ :self |\n\t\tself\n\t}",
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
  "{ :self :level :aBlock:/1 |\n\t\tlet levelPredicate:/1 = level.isCollection.if {\n\t\t\t{ :each | level.includes(each) }\n\t\t} {\n\t\t\t{ :each | each = level }\n\t\t};\n\t\tself.withLevelCollect { :each :thisLevel |\n\t\t\tlevelPredicate(thisLevel).if {\n\t\t\t\taBlock(each)\n\t\t\t} {\n\t\t\t\teach\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.randomChoice(system, [])\n\t}",
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
  "{ :self |\n\t\tself.size\n\t}",
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
  "{ :self :aCollection :aBlock:/2 |\n\t\tself.do { :x |\n\t\t\taCollection.do { :y |\n\t\t\t\taBlock(x, y)\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :aCollection |\n\t\tlet answer = [];\n\t\tself.cartesianProductDo(aCollection) { :i :j |\n\t\t\tanswer.add([i, j])\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tlet answer = self.species.new;\n\t\tself.do { :each |\n\t\t\tanswer.add(aBlock(each))\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tlet answer = self.species.new;\n\t\tself.do { :each |\n\t\t\tanswer.addAll(aBlock(each))\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :aBlock :aCollection |\n\t\taCollection.fillFromWith(self, aBlock)\n\t}",
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
  "{ :self :collectBlock:/1 :doBlock:/1 |\n\t\tself.collect(collectBlock:/1).do(doBlock:/1)\n\t}",
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
  "{ :self :collectBlock:/1 :selectBlock:/1 |\n\t\tlet answer = self.species.new;\n\t\tself.do { :each |\n\t\t\tlet item = collectBlock(each);\n\t\t\tselectBlock(item).ifTrue {\n\t\t\t\tanswer.add(item)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "complement",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
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
        return _ifFalse_2(
          _includes_2(_aCollection, _each),
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
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\tlet answer = self.species.new;\n\t\tself.do { :each |\n\t\t\taCollection.includes(each).ifFalse {\n\t\t\t\tanswer.add(each)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self |\n\t\t'% (size: %)'.format([\n\t\t\tself.typeOf.withIndefiniteArticle,\n\t\t\tself.size\n\t\t])\n\t}",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "copyList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asList_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.asList\n\t}",
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
  "{ :self :newElement |\n\t\tlet answer = self.copy;\n\t\tanswer.add(newElement);\n\t\tanswer\n\t}",
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
  "{ :self :oldElement |\n\t\tself.reject { :each |\n\t\t\teach = oldElement\n\t\t}\n\t}",
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
  "{ :self :aCollection |\n\t\tself.reject { :each |\n\t\t\taCollection.includes(each)\n\t\t}\n\t}",
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
            _uncheckedInclude_2(_seen, _each);
            return true;
          }, []),
        );
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet seen = IdentitySet();\n\t\tself.select { :each |\n\t\t\tseen.includes(each).if {\n\t\t\t\tfalse\n\t\t\t} {\n\t\t\t\tseen.uncheckedInclude(each);\n\t\t\t\ttrue\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :minMax |\n\t\tself.collect { :each |\n\t\t\teach.clip(minMax)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.clip([-1 1])\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tself.groupBy(aBlock:/1).collect(size:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(cubeRoot:/1)\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tlet type = self.typeOf;\n\t\tself.collect { :each |\n\t\t\t(each.typeOf = type).if {\n\t\t\t\teach.deepCollect(aBlock:/1)\n\t\t\t} {\n\t\t\t\taBlock(each)\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :aBlock:/2 |\n\t\tself.nubBy(aBlock:/2)\n\t}",
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
  "{ :self |\n\t\tself.nub\n\t}",
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
  "{ :self |\n\t\tself.isEmpty.if {\n\t\t\t2\n\t\t} {\n\t\t\t1 + self.collect(depth:/1).max\n\t\t}\n\t}",
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
  "{ :self :aCollection |\n\t\tself.reject { :each |\n\t\t\taCollection.includes(each)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "differenceAll",
  ["self", "aCollection", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aCollection, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_2";
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
            return _includesBy_3(_subCollection, _each, _aBlock_2);
          }, ["subCollection"]),
        );
      }, ["each"]),
    );
  }, ["self", "aCollection", "aBlock:/2"]),
  "{ :self :aCollection :aBlock:/2 |\n\t\tself.reject { :each |\n\t\t\taCollection.anySatisfy { :subCollection |\n\t\t\t\tsubCollection.includesBy(each, aBlock:/2)\n\t\t\t}\n\t\t}\n\t}",
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
    return _differenceAll_3(_self, _aCollection, _equalsSign_2);
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\tself.differenceAll(aCollection, =)\n\t}",
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
  "{ :self |\n\t\tself.allSatisfy(isZero:/1).if {\n\t\t\t1\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
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
  "{ :self :anObject |\n\t\tself.includes(anObject).not\n\t}",
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
  "{ :self |\n\t\tself.elementTypeIfAbsent {\n\t\t\tnil\n\t\t}\n\t}",
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
  "{ :self :aBlock:/0 |\n\t\tself.isEmpty.if {\n\t\t\taBlock()\n\t\t} {\n\t\t\tlet answer = self.anyOne.typeOf;\n\t\t\tself.allSatisfy { :each |\n\t\t\t\teach.typeOf = answer\n\t\t\t}.if {\n\t\t\t\tanswer\n\t\t\t} {\n\t\t\t\taBlock()\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tlet answer = IdentitySet();\n\t\tself.do { :each |\n\t\t\tanswer.include(each.typeOf)\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self |\n\t\tself.isEmpty.ifTrue {\n\t\t\tself.errorEmptyCollection\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.error('errorEmptyCollection')\n\t}",
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
  "{ :self :anObject |\n\t\tself.error('errorNotFound: ' ++ anObject)\n\t}",
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
  "{ :self |\n\t\tself.error('is not indexed/keyed')\n\t}",
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
        let __SplVar1 = _assertIsOfSize_2(
          _extendedGcd_2(_at_2(_self, 1), _at_2(_self, 2)),
          2,
        );
        let _g = _at_2(__SplVar1, 1);
        let _c = _at_2(__SplVar1, 2);
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
            let __SplVar2 = _assertIsOfSize_2(
              _extendedGcd_2(_g, _at_2(_self, _each)),
              2,
            );
            let _nextG = _at_2(__SplVar2, 1);
            let _nextC = _at_2(__SplVar2, 2);
            /* Statements */
            _g = _nextG;
            return _add_2(_c, _last_1(_nextC));
          }, ["each"]),
        );
        return [_g, _c];
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.size < 2).if {\n\t\t\tself.error('@Collection>>extendedGcd')\n\t\t} {\n\t\t\tlet [g, c] = self[1].extendedGcd(self[2]);\n\t\t\t3.toDo(self.size) { :each |\n\t\t\t\tlet [nextG, nextC] = g.extendedGcd(self[each]);\n\t\t\t\tg := nextG;\n\t\t\t\tc.add(nextC.last)\n\t\t\t};\n\t\t\t[g, c]\n\t\t}\n\t}",
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
  "{ :self :aCollection |\n\t\tself.fillFromWith(aCollection, identity:/1)\n\t}",
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
        return _reduce_2(_self, _gcd_2);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isEmpty.if {\n\t\t\t0\n\t\t} {\n\t\t\tself.reduce(gcd:/2)\n\t\t}\n\t}",
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
  "{ :self :keyBlock:/1 |\n\t\tlet result = Map();\n\t\tself.do { :each |\n\t\t\tlet key = keyBlock(each);\n\t\t\tresult.atIfAbsentPut(key) {\n\t\t\t\t[]\n\t\t\t}.add(each)\n\t\t};\n\t\tresult\n\t}",
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
  "{ :self |\n\t\tnil\n\t}",
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
  "{ :self :aCollection |\n\t\tself.select { :each |\n\t\t\taCollection.includes(each)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "intersection",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _ifFalse_2(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(
          _anyOne_1(_self),
          sl.annotateFunction(function (_x) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _x";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _allSatisfy_2(
                _self,
                sl.annotateFunction(function (_c) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _c";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _includes_2(_c, _x);
                }, ["c"]),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(_answer, _x);
              }, []),
            );
          }, ["x"]),
        );
      }, []),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = self.species.new;\n\t\tself.isEmpty.ifFalse {\n\t\t\tself.anyOne.do { :x |\n\t\t\t\tself.allSatisfy { :c |\n\t\t\t\t\tc.includes(x)\n\t\t\t\t}.ifTrue {\n\t\t\t\t\tanswer.add(x)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :aBlock:/0 |\n\t\tself.isEmpty.if {\n\t\t\taBlock()\n\t\t} {\n\t\t\tself\n\t\t}\n\t}",
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
  "{ :self :emptyBlock:/0 :notEmptyBlock |\n\t\tself.isEmpty.if {\n\t\t\temptyBlock()\n\t\t} {\n\t\t\tnotEmptyBlock.cull(self)\n\t\t}\n\t}",
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
  "{ :self :emptyBlock:/0 :notEmptyBlock:/1 |\n\t\tself.isEmpty.if {\n\t\t\temptyBlock()\n\t\t} {\n\t\t\tnotEmptyBlock(self)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "ifNotEmpty",
  ["self", "notEmptyBlock"],
  sl.annotateFunction(function (_self, _notEmptyBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _notEmptyBlock";
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
        return _cull_2(_notEmptyBlock, _self);
      }, []),
    );
  }, ["self", "notEmptyBlock"]),
  "{ :self :notEmptyBlock |\n\t\tself.isEmpty.ifFalse {\n\t\t\tnotEmptyBlock.cull(self)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "ifNotEmpty",
  ["self", "notEmptyBlock", "emptyBlock:/0"],
  sl.annotateFunction(function (_self, _notEmptyBlock, _emptyBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _notEmptyBlock, _emptyBlock_0";
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
  }, ["self", "notEmptyBlock", "emptyBlock:/0"]),
  "{ :self :notEmptyBlock :emptyBlock:/0 |\n\t\tself.isEmpty.if {\n\t\t\temptyBlock()\n\t\t} {\n\t\t\tnotEmptyBlock.cull(self)\n\t\t}\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tself.isEmpty.ifFalse {\n\t\t\taBlock(self)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tfalse\n\t}",
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
  "{ :self |\n\t\ttrue\n\t}",
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
  "{ :self :aCollection |\n\t\tself.noneSatisfy { :each |\n\t\t\taCollection.includes(each)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.size = 0\n\t}",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "isIntersecting",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(
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
  "{ :self :aCollection |\n\t\tself.anySatisfy { :each |\n\t\t\taCollection.includes(each)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "isNotEmpty",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _greaterThanSign_2(_size_1(_self), 0);
  }, ["self"]),
  "{ :self |\n\t\tself.size > 0\n\t}",
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
  "{ :self :otherCollection |\n\t\t(otherCollection.size = self.size).ifFalse {\n\t\t\tself.error('@Collection>>isOfSameSizeCheck')\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "isSingleton",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_size_1(_self), 1);
  }, ["self"]),
  "{ :self |\n\t\tself.size = 1\n\t}",
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
  "{ :self |\n\t\tself.allEqual.boole\n\t}",
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
  "{ :self |\n\t\tself.collect { :each |\n\t\t\teach.isCollection.if {\n\t\t\t\teach.leafCount\n\t\t\t} {\n\t\t\t\t1\n\t\t\t}\n\t\t}.sum\n\t}",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "logSumExp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _max_1(_self);
    /* Statements */
    return _plusSign_2(_m, _log_1(_sum_1(_exp_1(_hyphenMinus_2(_self, _m)))));
  }, ["self"]),
  "{ :self |\n\t\t/* self.exp.sum.log */\n\t\tlet m = self.max;\n\t\tm + (self - m).exp.sum.log\n\t}",
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
  "{ :self :aBlock:/0 |\n\t\tself.ifEmpty {\n\t\t\taBlock()\n\t\t} {\n\t\t\tself.max\n\t\t}\n\t}",
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
  "{ :self :aBlock:/0 |\n\t\tself.ifEmpty {\n\t\t\taBlock()\n\t\t} {\n\t\t\tself.min\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "normalizeRange",
  ["self", "minMax"],
  sl.annotateFunction(function (_self, _minMax) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _minMax";
      throw new Error(errorMessage);
    } /* Statements */
    return _rescale_3(_self, [_min_1(_self), _max_1(_self)], _minMax);
  }, ["self", "minMax"]),
  "{ :self :minMax |\n\t\tself.rescale([self.min, self.max], minMax)\n\t}",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "normalizeSignal",
  ["self", "minMax"],
  sl.annotateFunction(function (_self, _minMax) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _minMax";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _max_2(_abs_1(_min_1(_self)), _abs_1(_max_1(_self)));
    /* Statements */
    return _rescale_3(_self, [_negate_1(_x), _x], _minMax);
  }, ["self", "minMax"]),
  "{ :self :minMax |\n\t\tlet x = self.min.abs.max(self.max.abs);\n\t\tself.rescale([x.negate, x], minMax)\n\t}",
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
    return _normalizeSignal_2(_self, [-1, 1]);
  }, ["self"]),
  "{ :self |\n\t\tself.normalizeSignal([-1 1])\n\t}",
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
  "{ :self |\n\t\tself / self.sum\n\t}",
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
  "{ :self |\n\t\tself.collect(not:/1)\n\t}",
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
  "{ :self |\n\t\tself.nubBy(=)\n\t}",
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
      _equalsSign_2(_aBlock_2, _equalsSignEqualsSign_2),
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
  "{ :self :aBlock:/2 |\n\t\t(aBlock:/2 = equalsSignEqualsSign:/2).if {\n\t\t\tself.nubIdentical\n\t\t} {\n\t\t\tlet seen = [];\n\t\t\tself.select { :each |\n\t\t\t\tseen.includesBy(each, aBlock:/2).if {\n\t\t\t\t\tfalse\n\t\t\t\t} {\n\t\t\t\t\tseen.add(each);\n\t\t\t\t\ttrue\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tlet seen = IdentitySet();\n\t\tself.select { :each |\n\t\t\tseen.includes(each).if {\n\t\t\t\tfalse\n\t\t\t} {\n\t\t\t\tseen.include(each);\n\t\t\t\ttrue\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :aNumber |\n\t\t(self.size = aNumber).ifFalse {\n\t\t\tself.error('@Collection>>ofSize')\n\t\t};\n\t\tself\n\t}",
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
  "{ :self |\n\t\tself.collect { :each |\n\t\t\teach.one\n\t\t}\n\t}",
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
      _to_2(0, _hyphenMinus_2(_size_1(_self), 1)),
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
              _exclamationMarkEqualsSign_2(
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
  "{ :self :aBlock:/1 |\n\t\tlet size = 2 ^ self.size;\n\t\tlet powersOfTwo = 2 ^ 0.to(self.size - 1);\n\t\tlet list = self.asList;\n\t\t0.toDo(size - 1) { :i |\n\t\t\tlet subset = self.species.new;\n\t\t\tpowersOfTwo.withIndexDo { :each :j |\n\t\t\t\t(i // each % 2 != 0).ifTrue {\n\t\t\t\t\tsubset.include(list[j])\n\t\t\t\t}\n\t\t\t};\n\t\t\taBlock(subset)\n\t\t};\n\t\tself\n\t}",
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
  "{ :self |\n\t\tlet answer = [];\n\t\tself.powerSetDo { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self |\n\t\t['size']\n\t}",
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
  "{ :self :r :shape |\n\t\t{\n\t\t\tlet randomIndex = r.nextRandomInteger(1, self.size);\n\t\t\tlet index = 1;\n\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\tself.do { :each |\n\t\t\t\t\t(index = randomIndex).ifTrue {\n\t\t\t\t\t\teach.return\n\t\t\t\t\t};\n\t\t\t\t\tindex := index + 1\n\t\t\t\t}\n\t\t\t}\n\t\t} ! shape\n\t}",
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
        return _rankedMin_2(_self, _negate_1(_n));
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
  "{ :self :n |\n\t\t(n < 0).if {\n\t\t\tself.rankedMin(n.negate)\n\t\t} {\n\t\t\tlet m = self.size;\n\t\t\tself.quantile((m - n + 1) / m)\n\t\t}\n\t}",
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
        return _rankedMax_2(_self, _negate_1(_n));
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
  "{ :self :n |\n\t\t(n < 0).if {\n\t\t\tself.rankedMax(n.negate)\n\t\t} {\n\t\t\tself.quantile(n / self.size)\n\t\t}\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tself.select { :element |\n\t\t\taBlock(element).not\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "rescale",
  ["self", "a", "b"],
  sl.annotateFunction(function (_self, _a, _b) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _rescaleBlock_2(_a, _b));
  }, ["self", "a", "b"]),
  "{ :self :a :b |\n\t\tself.collect(rescaleBlock(a, b))\n\t}",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "rescale",
  ["self", "a"],
  sl.annotateFunction(function (_self, _a) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return _rescale_3(_self, _a, [0, 1]);
  }, ["self", "a"]),
  "{ :self :a |\n\t\tself.rescale(a, [0, 1])\n\t}",
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
    return _rescale_3(_self, [_deepMin_1(_self), _deepMax_1(_self)], [0, 1]);
  }, ["self"]),
  "{ :self |\n\t\tself.rescale([self.deepMin, self.deepMax], [0, 1])\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tlet answer = self.species.new;\n\t\tself.do { :each |\n\t\t\taBlock(each).ifTrue {\n\t\t\t\tanswer.include(each)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :selectBlock:/1 :collectBlock:/1 |\n\t\tlet answer = self.species.new;\n\t\tself.selectThenDo(selectBlock:/1) { :each |\n\t\t\tanswer.add(collectBlock(each))\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tlet answer = [];\n\t\tself.powerSetDo { :each |\n\t\t\taBlock(each).ifTrue {\n\t\t\t\tanswer.add(each)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self |\n\t\tself.isEmpty.if {\n\t\t\t0\n\t\t} {\n\t\t\tself.reduce(+)\n\t\t}\n\t}",
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
  "{ :self :aCollection |\n\t\tself.difference(aCollection).union(\n\t\t\taCollection.difference(self)\n\t\t)\n\t}",
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
  "{ :self :maxNumberOfElements |\n\t\tself.any(maxNumberOfElements.min(self.size))\n\t}",
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
  "{ :self :aBlock:/2 |\n\t\tlet answer = [];\n\t\tself.do { :each |\n\t\t\tanswer.detectIndexIfFoundIfNone { :item |\n\t\t\t\taBlock(item.key,each)\n\t\t\t} { :index |\n\t\t\t\tlet association = answer[index];\n\t\t\t\tassociation.value := association.value + 1\n\t\t\t} {\n\t\t\t\tanswer.add(each -> 1)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self |\n\t\tself.tally(=)\n\t}",
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
  "{ :self :epsilon |\n\t\tself.deepCollect { :each |\n\t\t\t(each.abs < epsilon).if {\n\t\t\t\teach.zero\n\t\t\t} {\n\t\t\t\teach\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "threshold",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _threshold_2(_self, 10E-10);
  }, ["self"]),
  "{ :self |\n\t\tself.threshold(10E-10)\n\t}",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "union",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _new_1(_species_1(_anyOne_1(_self)));
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _includeAll_2(_answer, _each);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = self.anyOne.species.new;\n\t\tself.do { :each |\n\t\t\tanswer.includeAll(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Collection",
  "Collection",
  "unique",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _nub_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.nub\n\t}",
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
  "{ :self :aBlock:/2 :level |\n\t\tlet type = self.typeOf;\n\t\tself.collect { :each |\n\t\t\t(each.typeOf = type).if {\n\t\t\t\taBlock(each.withLevelCollect(aBlock:/2, level + 1), level)\n\t\t\t} {\n\t\t\t\taBlock(each, level)\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :aBlock:/2 |\n\t\taBlock(self.withLevelCollect(aBlock:/2, 1), 0)\n\t}",
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
  "{ :self |\n\t\tself.collect { :each |\n\t\t\teach.zero\n\t\t}\n\t}",
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
  "{ :self |\n\t\t[self]\n\t}",
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
  "{ :self |\n\t\t1\n\t}",
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
  "{ :self |\n\t\ttrue\n\t}",
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
  "{ :self |\n\t\tfalse\n\t}",
);
