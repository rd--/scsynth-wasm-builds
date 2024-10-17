sl.addTrait("Collection", "Collection");

sl.addTraitMethod(
  "Collection",
  "Collection",
  "numberSign",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _size_1(_self);
  },
  "{ :self |\n\t\tself.size\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "plusSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _bindRight_2(_plusSign_2, _anObject));
  },
  "{ :self :anObject |\n\t\tself.collect(+.bindRight(anObject))\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "hyphenMinus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _bindRight_2(_hyphenMinus_2, _anObject));
  },
  "{ :self :anObject |\n\t\tself.collect(-.bindRight(anObject))\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "asterisk",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _bindRight_2(_asterisk_2, _anObject));
  },
  "{ :self :anObject |\n\t\tself.collect(*.bindRight(anObject))\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "solidus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _bindRight_2(_solidus_2, _anObject));
  },
  "{ :self :anObject |\n\t\tself.collect(/.bindRight(anObject))\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "circumflexAccent",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _bindRight_2(_circumflexAccent_2, _anObject));
  },
  "{ :self :anObject |\n\t\tself.collect(^.bindRight(anObject))\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "percentSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _bindRight_2(_percentSign_2, _anObject));
  },
  "{ :self :anObject |\n\t\tself.collect(%.bindRight(anObject))\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "reverseSolidus",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _difference_2(_self, _aCollection);
  },
  "{ :self :aCollection |\n\t\tself.difference(aCollection)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "plusSignPlusSign",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _copy_1(_self);
    /* Statements */
    _addAll_2(_answer, _assertIsCollection_1(_aCollection));
    return _answer;
  },
  "{ :self :aCollection |\n\t\tlet answer = self.copy;\n\t\tanswer.addAll(aCollection.assertIsCollection);\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "adaptToNumberAndApply",
  ["self", "aNumber", "aBlock:/2"],
  function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_2(_aNumber, _each);
    });
  },
  "{ :self :aNumber :aBlock:/2 |\n\t\tself.collect { :each |\n\t\t\taBlock(aNumber, each)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "allEqualBy",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return true;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _item = _anyOne_1(_self);
      /* Statements */
      return _allSatisfy_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _aBlock_2(_each, _item);
      });
    });
  },
  "{ :self :aBlock:/2 |\n\t\tself.isEmpty.if {\n\t\t\ttrue\n\t\t} {\n\t\t\tlet item = self.anyOne;\n\t\t\tself.allSatisfy { :each |\n\t\t\t\taBlock(each, item)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "allEqual",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _allEqualBy_2(_self, _equalsSign_2);
  },
  "{ :self |\n\t\tself.allEqualBy(=)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "any",
  ["self", "numberOfElements"],
  function (_self, _numberOfElements) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _numberOfElements";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _anyAs_3(_self, _numberOfElements, _species_1(_self));
  },
  "{ :self :numberOfElements |\n\t\tself.anyAs(numberOfElements, self.species)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "anyAs",
  ["self", "numberOfElements", "aBlock:/1"],
  function (_self, _numberOfElements, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _numberOfElements, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _index = 0;
    let _result = _aBlock_1(_numberOfElements);
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _fillFromWith_3(_result, _self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _index = _plusSign_2(_index, 1);
        return _if_3(
          _greaterThanSign_2(_index, _numberOfElements),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _return_1(_result);
          },
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _each;
          },
        );
      });
      _ifFalse_2(_equalsSign_2(_index, _numberOfElements), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _error_2(
          _self,
          "@Collection>>any: Not enough elements in collection",
        );
      });
      return _result;
    });
  },
  "{ :self :numberOfElements :aBlock:/1 |\n\t\tlet index = 0;\n\t\tlet result = numberOfElements.aBlock;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tresult.fillFromWith(self) { :each |\n\t\t\t\tindex := index + 1;\n\t\t\t\t(index > numberOfElements).if {\n\t\t\t\t\tresult.return\n\t\t\t\t} {\n\t\t\t\t\teach\n\t\t\t\t}\n\t\t\t};\n\t\t\t(index = numberOfElements).ifFalse {\n\t\t\t\tself.error('@Collection>>any: Not enough elements in collection')\n\t\t\t};\n\t\t\tresult\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "arithmeticMean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_sum_1(_self), _size_1(_self));
  },
  "{ :self |\n\t\tself.sum / self.size\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _array = _List_1(_size_1(_self));
    let _index = 0;
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _index = _plusSign_2(_index, 1);
      return _atPut_3(_array, _index, _each);
    });
    return _array;
  },
  "{ :self |\n\t\tlet array = List(self.size);\n\t\tlet index = 0;\n\t\tself.do { :each |\n\t\t\tindex := index + 1;\n\t\t\tarray[index] := each\n\t\t};\n\t\tarray\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "asCollection",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "assertIsCollection",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "associationsDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _do_2(_self, _aBlock_1);
  },
  "{ :self :aBlock:/1 |\n\t\tself.do(aBlock:/1)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "atLevelCollect",
  ["self", "level", "aBlock:/1"],
  function (_self, _level, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _level, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _levelPredicate_1 = _if_3(_isCollection_1(_level), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return (function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _includes_2(_level, _each);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return (function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_each, _level);
      });
    });
    /* Statements */
    return _withLevelCollect_2(_self, function (_each, _thisLevel) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _thisLevel";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_levelPredicate_1(_thisLevel), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _aBlock_1(_each);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _each;
      });
    });
  },
  "{ :self :level :aBlock:/1 |\n\t\tlet levelPredicate:/1 = level.isCollection.if {\n\t\t\t{ :each | level.includes(each) }\n\t\t} {\n\t\t\t{ :each | each = level }\n\t\t};\n\t\tself.withLevelCollect { :each :thisLevel |\n\t\t\tlevelPredicate(thisLevel).if {\n\t\t\t\taBlock(each)\n\t\t\t} {\n\t\t\t\teach\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "atRandom",
  ["self", "shape", "r"],
  function (_self, _shape, _r) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _shape, _r";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _randomIndex = _randomInteger_4(_r, 1, _size_1(_self), []);
      let _index = 1;
      /* Statements */
      return _valueWithReturn_1(function (_return_1) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _return_1";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _do_2(_self, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          _ifTrue_2(_equalsSign_2(_index, _randomIndex), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _return_1(_each);
          });
          return _index = _plusSign_2(_index, 1);
        });
      });
    }, _shape);
  },
  "{ :self :shape :r |\n\t\t{\n\t\t\tlet randomIndex = r.randomInteger(1, self.size, []);\n\t\t\tlet index = 1;\n\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\tself.do { :each |\n\t\t\t\t\t(index = randomIndex).ifTrue {\n\t\t\t\t\t\teach.return\n\t\t\t\t\t};\n\t\t\t\t\tindex := index + 1\n\t\t\t\t}\n\t\t\t}\n\t\t} ! shape\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "atRandom",
  ["self", "shape"],
  function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _atRandom_3(_self, _shape, _system);
  },
  "{ :self :shape |\n\t\tself.atRandom(shape, system)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "atRandom",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _atRandom_3(_self, [], _system);
  },
  "{ :self |\n\t\tself.atRandom([], system)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "average",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _mean_1(_self);
  },
  "{ :self |\n\t\tself.mean\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "capacity",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _size_1(_self);
  },
  "{ :self |\n\t\tself.size\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "cartesianProductDo",
  ["self", "aCollection", "aBlock:/2"],
  function (_self, _aCollection, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _do_2(_self, function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _do_2(_aCollection, function (_y) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _y";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _aBlock_2(_x, _y);
      });
    });
  },
  "{ :self :aCollection :aBlock:/2 |\n\t\tself.do { :x |\n\t\t\taCollection.do { :y |\n\t\t\t\taBlock(x, y)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "cartesianProduct",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _cartesianProductDo_3(_self, _aCollection, function (_i, _j) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _i, _j";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, [_i, _j]);
    });
    return _answer;
  },
  "{ :self :aCollection |\n\t\tlet answer = [];\n\t\tself.cartesianProductDo(aCollection) { :i :j |\n\t\t\tanswer.add([i, j])\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "centralMoment",
  ["self", "r"],
  function (_self, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _r";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _mean = _mean_1(_self);
    /* Statements */
    return _asterisk_2(
      _solidus_2(1, _size_1(_self)),
      _sum_1(_circumflexAccent_2(_hyphenMinus_2(_self, _mean), _r)),
    );
  },
  "{ :self :r |\n\t\tlet mean = self.mean;\n\t\t(1 / self.size) * ((self - mean) ^ r).sum\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "collect",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _aBlock_1(_each));
    });
    return _answer;
  },
  "{ :self :aBlock:/1 |\n\t\tlet answer = self.species.new;\n\t\tself.do { :each |\n\t\t\tanswer.add(aBlock(each))\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "collectInto",
  ["self", "aBlock", "aCollection"],
  function (_self, _aBlock, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock, _aCollection";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _fillFromWith_3(_aCollection, _self, _aBlock);
  },
  "{ :self :aBlock :aCollection |\n\t\taCollection.fillFromWith(self, aBlock)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "collectThenDo",
  ["self", "collectBlock:/1", "doBlock:/1"],
  function (_self, _collectBlock_1, _doBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _collectBlock_1, _doBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _do_2(_collect_2(_self, _collectBlock_1), _doBlock_1);
  },
  "{ :self :collectBlock:/1 :doBlock:/1 |\n\t\tself.collect(collectBlock:/1).do(doBlock:/1)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "collectThenSelect",
  ["self", "collectBlock:/1", "selectBlock:/1"],
  function (_self, _collectBlock_1, _selectBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _collectBlock_1, _selectBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _item = _collectBlock_1(_each);
      /* Statements */
      return _ifTrue_2(_selectBlock_1(_item), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _add_2(_answer, _item);
      });
    });
    return _answer;
  },
  "{ :self :collectBlock:/1 :selectBlock:/1 |\n\t\tlet answer = self.species.new;\n\t\tself.do { :each |\n\t\t\tlet item = collectBlock(each);\n\t\t\tselectBlock(item).ifTrue {\n\t\t\t\tanswer.add(item)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "contraharmonicMean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_sum_1(_squared_1(_self)), _sum_1(_self));
  },
  "{ :self |\n\t\tself.squared.sum / self.sum\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "contents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "copyWith",
  ["self", "newElement"],
  function (_self, _newElement) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _newElement";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _copy_1(_self);
    /* Statements */
    _add_2(_answer, _newElement);
    return _answer;
  },
  "{ :self :newElement |\n\t\tlet answer = self.copy;\n\t\tanswer.add(newElement);\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "copyWithout",
  ["self", "oldElement"],
  function (_self, _oldElement) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _oldElement";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _reject_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_each, _oldElement);
    });
  },
  "{ :self :oldElement |\n\t\tself.reject { :each |\n\t\t\teach = oldElement\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "copyWithoutAll",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _reject_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _includes_2(_aCollection, _each);
    });
  },
  "{ :self :aCollection |\n\t\tself.reject { :each |\n\t\t\taCollection.includes(each)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "copyWithoutIdenticalElements",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _seen = _Set_0();
    /* Statements */
    return _select_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_includes_2(_seen, _each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return false;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _basicInclude_2(_seen, _each);
        return true;
      });
    });
  },
  "{ :self |\n\t\tlet seen = Set();\n\t\tself.select { :each |\n\t\t\tseen.includes(each).if {\n\t\t\t\tfalse\n\t\t\t} {\n\t\t\t\tseen.basicInclude(each);\n\t\t\t\ttrue\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "clip",
  ["self", "min", "max"],
  function (_self, _min, _max) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _min, _max";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _clip_3(_each, _min, _max);
    });
  },
  "{ :self :min :max |\n\t\tself.collect { :each |\n\t\t\teach.clip(min, max)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "clip",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _clip_3(_self, -1, 1);
  },
  "{ :self |\n\t\tself.clip(-1, 1)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "cubeRoot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _cubeRoot_1);
  },
  "{ :self |\n\t\tself.collect(cubeRoot:/1)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "deepCollect",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _type = _typeOf_1(_self);
    /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_typeOf_1(_each), _type), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _deepCollect_2(_each, _aBlock_1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _aBlock_1(_each);
      });
    });
  },
  "{ :self :aBlock:/1 |\n\t\tlet type = self.typeOf;\n\t\tself.collect { :each |\n\t\t\t(each.typeOf = type).if {\n\t\t\t\teach.deepCollect(aBlock:/1)\n\t\t\t} {\n\t\t\t\taBlock(each)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "deleteDuplicates",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _nubBy_2(_self, _aBlock_2);
  },
  "{ :self :aBlock:/2 |\n\t\tself.nubBy(aBlock:/2)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "deleteDuplicates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _nub_1(_self);
  },
  "{ :self |\n\t\tself.nub\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "depth",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSign_2(1, _max_1(_collect_2(_self, _depth_1)));
  },
  "{ :self |\n\t\t1 + self.collect(depth:/1).max\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "difference",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _reject_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _includes_2(_aCollection, _each);
    });
  },
  "{ :self :aCollection |\n\t\tself.reject { :each |\n\t\t\taCollection.includes(each)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "differenceAll",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _reject_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _anySatisfy_2(_aCollection, function (_subCollection) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _subCollection";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _includes_2(_subCollection, _each);
      });
    });
  },
  "{ :self :aCollection |\n\t\tself.reject { :each |\n\t\t\taCollection.anySatisfy { :subCollection |\n\t\t\t\tsubCollection.includes(each)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "discreteDelta",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_allSatisfy_2(_self, _isZero_1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 0;
    });
  },
  "{ :self |\n\t\tself.allSatisfy(isZero:/1).if {\n\t\t\t1\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "doesNotInclude",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _not_1(_includes_2(_self, _anObject));
  },
  "{ :self :anObject |\n\t\tself.includes(anObject).not\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "elementType",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _elementTypeIfAbsent_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return null;
    });
  },
  "{ :self |\n\t\tself.elementTypeIfAbsent {\n\t\t\tnil\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "elementTypeIfAbsent",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _types = _elementTypes_1(_self);
    /* Statements */
    return _if_3(_equalsSign_2(_size_1(_types), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _anyOne_1(_types);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_0();
    });
  },
  "{ :self :aBlock:/0 |\n\t\tlet types = self.elementTypes;\n\t\t(types.size = 1).if {\n\t\t\ttypes.anyOne\n\t\t} {\n\t\t\taBlock()\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "elementTypes",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _Set_0();
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _include_2(_answer, _typeOf_1(_each));
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = Set();\n\t\tself.do { :each |\n\t\t\tanswer.include(each.typeOf)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "emptyCheck",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ifTrue_2(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _errorEmptyCollection_1(_self);
    });
  },
  "{ :self |\n\t\tself.isEmpty.ifTrue {\n\t\t\tself.errorEmptyCollection\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "errorEmptyCollection",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _error_2(_self, "errorEmptyCollection");
  },
  "{ :self |\n\t\tself.error('errorEmptyCollection')\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "errorNotFound",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _error_2(_self, _plusSignPlusSign_2("errorNotFound: ", _anObject));
  },
  "{ :self :anObject |\n\t\tself.error('errorNotFound: ' ++ anObject)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "errorNotIndexed",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _error_2(_self, "is not indexed/keyed");
  },
  "{ :self |\n\t\tself.error('is not indexed/keyed')\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "extendedGcd",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanSign_2(_size_1(_self), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "@Collection>>extendedGcd");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let __genSym1 = _assertIsOfSize_2(
          _extendedGcd_2(_at_2(_self, 1), _at_2(_self, 2)),
          2,
        ),
        _g = _at_2(__genSym1, 1),
        _c = _at_2(__genSym1, 2);
      /* Statements */
      _toDo_3(3, _size_1(_self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let __genSym2 = _assertIsOfSize_2(
            _extendedGcd_2(_g, _at_2(_self, _each)),
            2,
          ),
          _nextG = _at_2(__genSym2, 1),
          _nextC = _at_2(__genSym2, 2);
        /* Statements */
        _g = _nextG;
        return _add_2(_c, _last_1(_nextC));
      });
      return [_g, _c];
    });
  },
  "{ :self |\n\t\t(self.size < 2).if {\n\t\t\tself.error('@Collection>>extendedGcd')\n\t\t} {\n\t\t\tlet [g, c] = self[1].extendedGcd(self[2]);\n\t\t\t3.toDo(self.size) { :each |\n\t\t\t\tlet [nextG, nextC] = g.extendedGcd(self[each]);\n\t\t\t\tg := nextG;\n\t\t\t\tc.add(nextC.last)\n\t\t\t};\n\t\t\t[g, c]\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "fillFrom",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _fillFromWith_3(_self, _aCollection, _identity_1);
  },
  "{ :self :aCollection |\n\t\tself.fillFromWith(aCollection, identity:/1)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "gcd",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _reduce_2(_self, _gcd_2);
  },
  "{ :self |\n\t\tself.reduce(gcd:/2)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "geometricMean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _circumflexAccent_2(
      _product_1(_self),
      _solidus_2(1, _size_1(_self)),
    );
  },
  "{ :self |\n\t\tself.product ^ (1 / self.size)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "groupBy",
  ["self", "keyBlock:/1"],
  function (_self, _keyBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _keyBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _result = _Map_0();
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _key = _keyBlock_1(_each);
      /* Statements */
      return _add_2(
        _atIfAbsentPut_3(_result, _key, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return [];
        }),
        _each,
      );
    });
    return _result;
  },
  "{ :self :keyBlock:/1 |\n\t\tlet result = Map();\n\t\tself.do { :each |\n\t\t\tlet key = keyBlock(each);\n\t\t\tresult.atIfAbsentPut(key) {\n\t\t\t\t[]\n\t\t\t}.add(each)\n\t\t};\n\t\tresult\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "harmonicMean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_size_1(_self), _sum_1(_reciprocal_1(_self)));
  },
  "{ :self |\n\t\tself.size / self.reciprocal.sum\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "histogramOf",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _histogramOf_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _each;
    });
  },
  "{ :self |\n\t\tself.histogramOf { :each |\n\t\t\teach\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "histogramList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _k = _plusSign_2(_ceiling_1(_sqrt_1(_size_1(_self))), 1);
    let __genSym3 = _assertIsOfSize_2(_minMax_1(_self), 2),
      _min = _at_2(__genSym3, 1),
      _max = _at_2(__genSym3, 2);
    let _b = _findDivisions_2(_hyphenMinusHyphenMinus_2(_min, _max), _k);
    let _n = _size_1(_b);
    let _c = _List_2(_hyphenMinus_2(_n, 1), 0);
    /* Statements */
    _do_2(_self, function (_e) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _e";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _detectIndexIfFoundIfNone_4(_upOrDownTo_2(2, _n), function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ampersand_2(
          _greaterThanSignEqualsSign_2(_e, _at_2(_b, _hyphenMinus_2(_i, 1))),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _lessThanSignEqualsSign_2(_e, _at_2(_b, _i));
          },
        );
      }, function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _atPut_3(_c, _i, _plusSign_2(_at_2(_c, _i), 1));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
      });
    });
    return [_asList_1(_b), _c];
  },
  "{ :self |\n\t\tlet k = self.size.sqrt.ceiling + 1;\n\t\tlet [min, max] = self.minMax;\n\t\tlet b = (min -- max).findDivisions(k);\n\t\tlet n = b.size;\n\t\tlet c = List(n - 1, 0);\n\t\tself.do { :e |\n\t\t\t2:n.detectIndexIfFoundIfNone { :i |\n\t\t\t\te >= b[i - 1] & { e <= b[i] }\n\t\t\t} { :i |\n\t\t\t\tc[i] := c[i] + 1\n\t\t\t} {\n\t\t\t}\n\t\t};\n\t\t[b.asList, c]\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "include",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _typeResponsibility_2(_self, "@Collection>>include");
  },
  "{ :self :anObject |\n\t\tself.typeResponsibility('@Collection>>include')\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "includeAll",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _do_2(_aCollection, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _include_2(_self, _each);
    });
  },
  "{ :self :aCollection |\n\t\taCollection.do { :each |\n\t\t\tself.include(each)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "indices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return null;
  },
  "{ :self |\n\t\tnil\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "intersection",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _select_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _includes_2(_aCollection, _each);
    });
  },
  "{ :self :aCollection |\n\t\tself.select { :each |\n\t\t\taCollection.includes(each)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "ifEmpty",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _self;
    });
  },
  "{ :self :aBlock:/0 |\n\t\tself.isEmpty.if {\n\t\t\taBlock()\n\t\t} {\n\t\t\tself\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "ifEmpty",
  ["self", "emptyBlock:/0", "notEmptyBlock"],
  function (_self, _emptyBlock_0, _notEmptyBlock) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _emptyBlock_0, _notEmptyBlock";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _emptyBlock_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _cull_2(_notEmptyBlock, _self);
    });
  },
  "{ :self :emptyBlock:/0 :notEmptyBlock |\n\t\tself.isEmpty.if {\n\t\t\temptyBlock()\n\t\t} {\n\t\t\tnotEmptyBlock.cull(self)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "ifEmptyIfNotEmptyDo",
  ["self", "emptyBlock:/0", "notEmptyBlock:/1"],
  function (_self, _emptyBlock_0, _notEmptyBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _emptyBlock_0, _notEmptyBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _emptyBlock_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _notEmptyBlock_1(_self);
    });
  },
  "{ :self :emptyBlock:/0 :notEmptyBlock:/1 |\n\t\tself.isEmpty.if {\n\t\t\temptyBlock()\n\t\t} {\n\t\t\tnotEmptyBlock(self)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "ifNotEmpty",
  ["self", "aBlock"],
  function (_self, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ifFalse_2(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _cull_2(_aBlock, _self);
    });
  },
  "{ :self :aBlock |\n\t\tself.isEmpty.ifFalse {\n\t\t\taBlock.cull(self)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "ifNotEmptyDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ifFalse_2(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_self);
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.isEmpty.ifFalse {\n\t\t\taBlock(self)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "interquartileRange",
  ["self", "a", "b", "c", "d"],
  function (_self, _a, _b, _c, _d) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _self, _a, _b, _c, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym4 = _assertIsOfSize_2(_quartiles_5(_self, _a, _b, _c, _d), 3),
      _q1 = _at_2(__genSym4, 1),
      _q2 = _at_2(__genSym4, 2),
      _q3 = _at_2(__genSym4, 3);
    /* Statements */
    return _hyphenMinus_2(_q3, _q1);
  },
  "{ :self :a :b :c :d |\n\t\tlet [q1, q2, q3] = self.quartiles(a, b, c, d);\n\t\tq3 - q1\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "interquartileRange",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym5 = _assertIsOfSize_2(_quartiles_1(_self), 3),
      _q1 = _at_2(__genSym5, 1),
      _q2 = _at_2(__genSym5, 2),
      _q3 = _at_2(__genSym5, 3);
    /* Statements */
    return _hyphenMinus_2(_q3, _q1);
  },
  "{ :self |\n\t\tlet [q1, q2, q3] = self.quartiles;\n\t\tq3 - q1\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "isCollection",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "isDisjoint",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _noneSatisfy_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _includes_2(_aCollection, _each);
    });
  },
  "{ :self :aCollection |\n\t\tself.noneSatisfy { :each |\n\t\t\taCollection.includes(each)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "isEmpty",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_size_1(_self), 0);
  },
  "{ :self |\n\t\tself.size = 0\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "isOfSameSizeCheck",
  ["self", "otherCollection"],
  function (_self, _otherCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _otherCollection";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ifFalse_2(
      _equalsSign_2(_size_1(_otherCollection), _size_1(_self)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _error_2(_self, "@Collection>>isOfSameSizeCheck");
      },
    );
  },
  "{ :self :otherCollection |\n\t\t(otherCollection.size = self.size).ifFalse {\n\t\t\tself.error('@Collection>>isOfSameSizeCheck')\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "isSequence",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "kroneckerDelta",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _boole_1(_allEqual_1(_self));
  },
  "{ :self |\n\t\tself.allEqual.boole\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "kurtosis",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isVector_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _solidus_2(
        _centralMoment_2(_self, 4),
        _circumflexAccent_2(_centralMoment_2(_self, 2), 2),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isMatrix_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _collect_2(_transposed_1(_self), _kurtosis_1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _error_1("@Collection>>kurtosis: not vector or matrix");
      });
    });
  },
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tself.centralMoment(4) / (self.centralMoment(2) ^ 2)\n\t\t} {\n\t\t\tself.isMatrix.if {\n\t\t\t\tself.transposed.collect(kurtosis:/1)\n\t\t\t} {\n\t\t\t\t'@Collection>>kurtosis: not vector or matrix'.error\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "leafCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sum_1(_collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isCollection_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _leafCount_1(_each);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return 1;
      });
    }));
  },
  "{ :self |\n\t\tself.collect { :each |\n\t\t\teach.isCollection.if {\n\t\t\t\teach.leafCount\n\t\t\t} {\n\t\t\t\t1\n\t\t\t}\n\t\t}.sum\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "levelBy",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _withLevelDo_2(_self, function (_each, _level) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _level";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(_aBlock_1(_level), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _add_2(_answer, _each);
      });
    });
    return _answer;
  },
  "{ :self :aBlock:/1 |\n\t\tlet answer = [];\n\t\tself.withLevelDo { :each :level |\n\t\t\taBlock(level).ifTrue {\n\t\t\t\tanswer.add(each)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "levelEach",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _levelBy_2(_self, function (_level) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _level";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _includes_2(_aCollection, _level);
    });
  },
  "{ :self :aCollection |\n\t\tself.levelBy { :level |\n\t\t\taCollection.includes(level)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "level",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _levelBy_2(_self, function (_level) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _level";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_level, _anInteger);
    });
  },
  "{ :self :anInteger |\n\t\tself.levelBy { :level |\n\t\t\tlevel = anInteger\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "maxIfEmpty",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ifEmpty_3(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _max_1(_self);
    });
  },
  "{ :self :aBlock:/0 |\n\t\tself.ifEmpty {\n\t\t\taBlock()\n\t\t} {\n\t\t\tself.max\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "minIfEmpty",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ifEmpty_3(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _min_1(_self);
    });
  },
  "{ :self :aBlock:/0 |\n\t\tself.ifEmpty {\n\t\t\taBlock()\n\t\t} {\n\t\t\tself.min\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "mean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_sum_1(_self), _size_1(_self));
  },
  "{ :self |\n\t\tself.sum / self.size\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "meanDeviation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(
      _sum_1(_abs_1(_hyphenMinus_2(_self, _mean_1(_self)))),
      _size_1(_self),
    );
  },
  "{ :self |\n\t\t(self - self.mean).abs.sum / self.size\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "moment",
  ["self", "r"],
  function (_self, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _r";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(
      _solidus_2(1, _size_1(_self)),
      _sum_1(_circumflexAccent_2(_self, _r)),
    );
  },
  "{ :self :r |\n\t\t(1 / self.size) * (self ^ r).sum\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "nearest",
  ["self", "anObject", "aBlock:/2"],
  function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _leastDistance = _min_1(_collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _abs_1(_aBlock_2(_each, _anObject));
    }));
    /* Statements */
    return _select_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_abs_1(_aBlock_2(_each, _anObject)), _leastDistance);
    });
  },
  "{ :self :anObject :aBlock:/2 |\n\t\tlet leastDistance = self.collect { :each |\n\t\t\taBlock(each, anObject).abs\n\t\t}.min;\n\t\tself.select { :each |\n\t\t\taBlock(each, anObject).abs = leastDistance\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "not",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _not_1);
  },
  "{ :self |\n\t\tself.collect(not:/1)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "notEmpty",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _not_1(_isEmpty_1(_self));
  },
  "{ :self |\n\t\tself.isEmpty.not\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "nub",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _nubBy_2(_self, _equalsSign_2);
  },
  "{ :self |\n\t\tself.nubBy(=)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "nubBy",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _equalsSignEqualsSign_2(_aBlock_2, _equalsSignEqualsSign_2),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _nubIdentical_1(_self);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _seen = [];
        /* Statements */
        return _select_2(_self, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _if_3(_includesBy_3(_seen, _each, _aBlock_2), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return false;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            _add_2(_seen, _each);
            return true;
          });
        });
      },
    );
  },
  "{ :self :aBlock:/2 |\n\t\t(aBlock:/2 == equalsSignEqualsSign:/2).if {\n\t\t\tself.nubIdentical\n\t\t} {\n\t\t\tlet seen = [];\n\t\t\tself.select { :each |\n\t\t\t\tseen.includesBy(each, aBlock:/2).if {\n\t\t\t\t\tfalse\n\t\t\t\t} {\n\t\t\t\t\tseen.add(each);\n\t\t\t\t\ttrue\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "nubIdentical",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _seen = _Set_0();
    /* Statements */
    return _select_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_includes_2(_seen, _each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return false;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _include_2(_seen, _each);
        return true;
      });
    });
  },
  "{ :self |\n\t\tlet seen = Set();\n\t\tself.select { :each |\n\t\t\tseen.includes(each).if {\n\t\t\t\tfalse\n\t\t\t} {\n\t\t\t\tseen.include(each);\n\t\t\t\ttrue\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "ofSize",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _ifFalse_2(_equalsSign_2(_size_1(_self), _aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "@Collection>>ofSize");
    });
    return _self;
  },
  "{ :self :aNumber |\n\t\t(self.size = aNumber).ifFalse {\n\t\t\tself.error('@Collection>>ofSize')\n\t\t};\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "one",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _one_1(_each);
    });
  },
  "{ :self |\n\t\tself.collect { :each |\n\t\t\teach.one\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "powerSetDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
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
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _subset = _new_1(_species_1(_self));
      /* Statements */
      _withIndexDo_2(_powersOfTwo, function (_each, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _j";
          console.error(errorMessage);
          throw new Error(errorMessage);
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
              throw new Error(errorMessage);
            }
            /* Statements */
            return _include_2(_subset, _at_2(_list, _j));
          },
        );
      });
      return _aBlock_1(_subset);
    });
    return _self;
  },
  "{ :self :aBlock:/1 |\n\t\tlet size = 2 ^ self.size;\n\t\tlet powersOfTwo = 2 ^ (0 .. (self.size - 1));\n\t\tlet list = self.asList;\n\t\t0.toDo(size - 1) { :i |\n\t\t\tlet subset = self.species.new;\n\t\t\tpowersOfTwo.withIndexDo { :each :j |\n\t\t\t\t(i // each % 2 ~= 0).ifTrue {\n\t\t\t\t\tsubset.include(list[j])\n\t\t\t\t}\n\t\t\t};\n\t\t\taBlock(subset)\n\t\t};\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "powerSet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _powerSetDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _each);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tself.powerSetDo { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return ["size"];
  },
  "{ :self |\n\t\t['size']\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "quantile",
  ["self", "p", "a", "b", "c", "d"],
  function (_self, _p, _a, _b, _c, _d) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage = "Arity: expected 6, _self, _p, _a, _b, _c, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isVector_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _quantile_6(_asSortedList_1(_self), _p, _a, _b, _c, _d);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isMatrix_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _collect_2(_transposed_1(_self), function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _quantile_6(_asSortedList_1(_each), _p, _a, _b, _c, _d);
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return "Collection>>quantile: not vector or matrix";
      });
    });
  },
  "{ :self :p :a :b :c :d |\n\t\tself.isVector.if {\n\t\t\tself.asSortedList.quantile(p, a, b, c, d)\n\t\t} {\n\t\t\tself.isMatrix.if {\n\t\t\t\tself.transposed.collect { :each |\n\t\t\t\t\teach.asSortedList.quantile(p, a, b, c, d)\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\t'Collection>>quantile: not vector or matrix'\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "quantile",
  ["self", "p"],
  function (_self, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _p";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _quantile_6(_self, _p, 0, 0, 1, 0);
  },
  "{ :self :p |\n\t\tself.quantile(p, 0, 0, 1, 0)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "quartiles",
  ["self", "a", "b", "c", "d"],
  function (_self, _a, _b, _c, _d) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _self, _a, _b, _c, _d";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _quantile_6(_self, _solidus_2([1, 2, 3], 4), _a, _b, _c, _d);
  },
  "{ :self :a :b :c :d |\n\t\tself.quantile([1 2 3] / 4, a, b, c, d)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "quartiles",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _quartiles_5(_self, _solidus_2(1, 2), 0, 0, 1);
  },
  "{ :self |\n\t\tself.quartiles(1 / 2, 0, 0, 1)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "reject",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _select_2(_self, function (_element) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _element";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _not_1(_aBlock_1(_element));
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.select { :element |\n\t\t\taBlock(element).not\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "rescale",
  ["self", "min", "max", "ymin", "ymax"],
  function (_self, _min, _max, _ymin, _ymax) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _self, _min, _max, _ymin, _ymax";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _rescale_5(_each, _min, _max, _ymin, _ymax);
    });
  },
  "{ :self :min :max :ymin :ymax |\n\t\tself.collect { :each |\n\t\t\teach.rescale(min, max, ymin, ymax)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "rescale",
  ["self", "min", "max"],
  function (_self, _min, _max) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _min, _max";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _rescale_5(_self, _min, _max, 0, 1);
  },
  "{ :self :min :max |\n\t\tself.rescale(min, max, 0, 1)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "rescale",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _rescale_5(_self, _min_1(_self), _max_1(_self), 0, 1);
  },
  "{ :self |\n\t\tself.rescale(self.min, self.max, 0, 1)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "rootMeanSquare",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_sqrt_1(_sum_1(_squared_1(_self))), 2);
  },
  "{ :self |\n\t\tself.squared.sum.sqrt / 2\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "sampleStandardDeviation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sqrt_1(_mean_1(_squared_1(_hyphenMinus_2(_self, _mean_1(_self)))));
  },
  "{ :self |\n\t\t(self - self.mean).squared.mean.sqrt\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "select",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(_aBlock_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _include_2(_answer, _each);
      });
    });
    return _answer;
  },
  "{ :self :aBlock:/1 |\n\t\tlet answer = self.species.new;\n\t\tself.do { :each |\n\t\t\taBlock(each).ifTrue {\n\t\t\t\tanswer.include(each)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "selectThenCollect",
  ["self", "selectBlock:/1", "collectBlock:/1"],
  function (_self, _selectBlock_1, _collectBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _selectBlock_1, _collectBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _selectThenDo_3(_self, _selectBlock_1, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _collectBlock_1(_each));
    });
    return _answer;
  },
  "{ :self :selectBlock:/1 :collectBlock:/1 |\n\t\tlet answer = self.species.new;\n\t\tself.selectThenDo(selectBlock:/1) { :each |\n\t\t\tanswer.add(collectBlock(each))\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "skewness",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isVector_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _solidus_2(
        _centralMoment_2(_self, 3),
        _circumflexAccent_2(_centralMoment_2(_self, 2), _solidus_2(3, 2)),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isMatrix_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _collect_2(_transposed_1(_self), _skewness_1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _error_1("@Collection>>skewness: not vector or matrix");
      });
    });
  },
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tself.centralMoment(3) / (self.centralMoment(2) ^ (3 / 2))\n\t\t} {\n\t\t\tself.isMatrix.if {\n\t\t\t\tself.transposed.collect(skewness:/1)\n\t\t\t} {\n\t\t\t\t'@Collection>>skewness: not vector or matrix'.error\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "sorted",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sort_1(_asList_1(_self));
  },
  "{ :self |\n\t\tself.asList.sort\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "sorted",
  ["self", "sortBlock:/2"],
  function (_self, _sortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sortBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sortBy_2(_asList_1(_self), _sortBlock_2);
  },
  "{ :self :sortBlock:/2 |\n\t\tself.asList.sortBy(sortBlock:/2)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "stemLeafPlot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _negative = _Map_0();
    let _positive = _Map_0();
    /* Statements */
    _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _d = _integerDigits_1(_each);
      let _rhs = _last_1(_d);
      let _lhsList = _if_3(_greaterThanSign_2(_size_1(_d), 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _allButLast_1(_d);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return [0];
      });
      let _lhs = _copySignTo_2(_each, _fromDigits_2(_lhsList, 10));
      let _map = _if_3(_isNegative_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _negative;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _positive;
      });
      /* Statements */
      return _atIfPresentIfAbsent_4(_map, _lhs, function (_entry) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _entry";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _add_2(_entry, _rhs);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _atPut_3(_map, _lhs, [_rhs]);
      });
    });
    return _plusSignPlusSign_2(
      _sort_1(_associations_1(_negative)),
      _sort_1(_associations_1(_positive)),
    );
  },
  "{ :self |\n\t\tlet negative = Map();\n\t\tlet positive = Map();\n\t\tself.collect { :each |\n\t\t\tlet d = each.integerDigits;\n\t\t\tlet rhs = d.last;\n\t\t\tlet lhsList = (d.size > 1).if { d.allButLast } { [0] };\n\t\t\tlet lhs = each.copySignTo(lhsList.fromDigits(10));\n\t\t\tlet map = each.isNegative.if { negative } { positive };\n\t\t\tmap.atIfPresentIfAbsent(lhs) { :entry |\n\t\t\t\tentry.add(rhs)\n\t\t\t} {\n\t\t\t\tmap.atPut(lhs, [rhs])\n\t\t\t}\n\t\t};\n\t\tnegative.associations.sort ++ positive.associations.sort\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "subsets",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _powerSetDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(_aBlock_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
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
  "Collection",
  "Collection",
  "standardDeviation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sqrt_1(_variance_1(_self));
  },
  "{ :self |\n\t\tself.variance.sqrt\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "standardizedMoment",
  ["self", "r"],
  function (_self, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _r";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(
      _centralMoment_2(_self, _r),
      _circumflexAccent_2(_sampleStandardDeviation_1(_self), _r),
    );
  },
  "{ :self :r |\n\t\tself.centralMoment(r) / (self.sampleStandardDeviation ^ r)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "symmetricDifference",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _union_2(
      _difference_2(_self, _aCollection),
      _difference_2(_aCollection, _self),
    );
  },
  "{ :self :aCollection |\n\t\tself.difference(aCollection).union(\n\t\t\taCollection.difference(self)\n\t\t)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "take",
  ["self", "maxNumberOfElements"],
  function (_self, _maxNumberOfElements) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _maxNumberOfElements";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _any_2(_self, _min_2(_maxNumberOfElements, _size_1(_self)));
  },
  "{ :self :maxNumberOfElements |\n\t\tself.any(maxNumberOfElements.min(self.size))\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "tally",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _detectIndexIfFoundIfNone_4(_answer, function (_item) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _item";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _aBlock_2(_key_1(_item), _each);
      }, function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _association = _at_2(_answer, _index);
        /* Statements */
        return _value_2(_association, _plusSign_2(_value_1(_association), 1));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _add_2(_answer, _hyphenMinusGreaterThanSign_2(_each, 1));
      });
    });
    return _answer;
  },
  "{ :self :aBlock:/2 |\n\t\tlet answer = [];\n\t\tself.do { :each |\n\t\t\tanswer.detectIndexIfFoundIfNone { :item |\n\t\t\t\taBlock(item.key,each)\n\t\t\t} { :index |\n\t\t\t\tlet association = answer[index];\n\t\t\t\tassociation.value := association.value + 1\n\t\t\t} {\n\t\t\t\tanswer.add(each -> 1)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "tally",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _tally_2(_self, _equalsSign_2);
  },
  "{ :self |\n\t\tself.tally(=)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "threshold",
  ["self", "epsilon"],
  function (_self, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _epsilon";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _deepCollect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_lessThanSign_2(_abs_1(_each), _epsilon), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _zero_1(_each);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _each;
      });
    });
  },
  "{ :self :epsilon |\n\t\tself.deepCollect { :each |\n\t\t\t(each.abs < epsilon).if {\n\t\t\t\teach.zero\n\t\t\t} {\n\t\t\t\teach\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "union",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _asSet_1(_self);
    /* Statements */
    _includeAll_2(_answer, _aCollection);
    return _answer;
  },
  "{ :self :aCollection |\n\t\tlet answer = self.asSet;\n\t\tanswer.includeAll(aCollection);\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "variance",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(
      _sum_1(_circumflexAccent_2(_hyphenMinus_2(_self, _mean_1(_self)), 2)),
      _hyphenMinus_2(_size_1(_self), 1),
    );
  },
  "{ :self |\n\t\t((self - self.mean) ^ 2).sum / (self.size - 1)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "withLevelCollect",
  ["self", "aBlock:/2", "level"],
  function (_self, _aBlock_2, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_2, _level";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _type = _typeOf_1(_self);
    /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_typeOf_1(_each), _type), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _aBlock_2(
          _withLevelCollect_3(_each, _aBlock_2, _plusSign_2(_level, 1)),
          _level,
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _aBlock_2(_each, _level);
      });
    });
  },
  "{ :self :aBlock:/2 :level |\n\t\tlet type = self.typeOf;\n\t\tself.collect { :each |\n\t\t\t(each.typeOf = type).if {\n\t\t\t\taBlock(each.withLevelCollect(aBlock:/2, level + 1), level)\n\t\t\t} {\n\t\t\t\taBlock(each, level)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "withLevelCollect",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _aBlock_2(_withLevelCollect_3(_self, _aBlock_2, 1), 0);
  },
  "{ :self :aBlock:/2 |\n\t\taBlock(self.withLevelCollect(aBlock:/2, 1), 0)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "withLevelDo",
  ["self", "aBlock:/2", "level"],
  function (_self, _aBlock_2, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_2, _level";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _type = _typeOf_1(_self);
    /* Statements */
    return _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_typeOf_1(_each), _type), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _withLevelDo_3(_each, _aBlock_2, _plusSign_2(_level, 1));
        return _aBlock_2(_each, _level);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _aBlock_2(_each, _level);
      });
    });
  },
  "{ :self :aBlock:/2 :level |\n\t\tlet type = self.typeOf;\n\t\tself.do { :each |\n\t\t\t(each.typeOf = type).if {\n\t\t\t\teach.withLevelDo(aBlock:/2, level + 1);\n\t\t\t\taBlock(each, level)\n\t\t\t} {\n\t\t\t\taBlock(each, level)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "withLevelDo",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _withLevelDo_3(_self, _aBlock_2, 1);
    return _aBlock_2(_self, 0);
  },
  "{ :self :aBlock:/2 |\n\t\tself.withLevelDo(aBlock:/2, 1);\n\t\taBlock(self, 0)\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "zero",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _zero_1(_each);
    });
  },
  "{ :self |\n\t\tself.collect { :each |\n\t\t\teach.zero\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Collection",
  "asCollection",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return [_self];
  },
  "{ :self |\n\t\t[self]\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Collection",
  "depth",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return 1;
  },
  "{ :self |\n\t\t1\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Collection",
  "isCollection",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);
