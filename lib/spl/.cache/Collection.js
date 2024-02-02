/* {- Require: Object -} */

sl.addTrait("Collection", "Collection");

sl.addTraitMethod(
  "Collection",
  "Collection",
  "plusPlus",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isEmpty_1(_self), function () {
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
      let _item = _anyOne_1(_self);
      /* Statements */
      return _allSatisfy_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _allEqualBy_2(_self, _equals_2);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
        throw Error(errorMessage);
      }
      /* Statements */
      _fillFromWith_3(_result, _self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _index = _plus_2(_index, 1);
        return _if_3(_greaterThan_2(_index, _numberOfElements), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _return_1(_result);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _each;
        });
      });
      _ifFalse_2(_equals_2(_index, _numberOfElements), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
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
  "asArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _array = _Array_1(_size_1(_self));
    let _index = 0;
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _index = _plus_2(_index, 1);
      return _atPut_3(_array, _index, _each);
    });
    return _array;
  },
  "{ :self |\n\t\tlet array = Array(self.size);\n\t\tlet index = 0;\n\t\tself.do { :each |\n\t\t\tindex := index + 1;\n\t\t\tarray[index] := each\n\t\t};\n\t\tarray\n\t}",
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "assertIsOfSize",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
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
      return _equals_2(_size_1(_self), _anInteger);
    });
  },
  "{ :self :anInteger |\n\t\tself.assert {\n\t\t\tself.size = anInteger\n\t\t}\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _do_2(_self, _aBlock_1);
  },
  "{ :self :aBlock:/1 |\n\t\tself.do(aBlock:/1)\n\t}",
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
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _randomIndex = _atRandom_1(_size_1(_self));
    let _index = 1;
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
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
        _ifTrue_2(_equals_2(_index, _randomIndex), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _return_1(_each);
        });
        return _index = _plus_2(_index, 1);
      });
    });
  },
  "{ :self |\n\t\tlet randomIndex = self.size.atRandom;\n\t\tlet index = 1;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself.do { :each |\n\t\t\t\t(index = randomIndex).ifTrue {\n\t\t\t\t\teach.return\n\t\t\t\t};\n\t\t\t\tindex := index + 1\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Collection",
  "Collection",
  "atRandom",
  ["self", "size"],
  function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _bang_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _atRandom_1(_self);
    }, _size);
  },
  "{ :self :size |\n\t\t{ self.atRandom } ! size\n\t}",
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _do_2(_self, function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _do_2(_aCollection, function (_y) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _y";
          console.error(errorMessage);
          throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _cartesianProductDo_3(_self, _aCollection, function (_x, _y) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _x, _y";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, [_x, _y]);
    });
    return _answer;
  },
  "{ :self :aCollection |\n\t\tlet answer = [];\n\t\tself.cartesianProductDo(aCollection) { :x :y |\n\t\t\tanswer.add([x, y])\n\t\t};\n\t\tanswer\n\t}",
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
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _item = _collectBlock_1(_each);
      /* Statements */
      return _ifTrue_2(_selectBlock_1(_item), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _dividedBy_2(_sum_1(_squared_1(_self)), _sum_1(_self));
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _reject_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _equals_2(_each, _oldElement);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _reject_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
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
  "copyWithoutDuplicates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _seen = _Set_0();
    /* Statements */
    return _select_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _ifAbsentAdd_2(_seen, _each);
    });
  },
  "{ :self |\n\t\tlet seen = Set();\n\t\tself.select { :each |\n\t\t\tseen.ifAbsentAdd(each)\n\t\t}\n\t}",
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
      return _clip_3(_each, _min, _max);
    });
  },
  "{ :self :min :max |\n\t\tself.collect { :each |\n\t\t\teach.clip(min, max)\n\t\t}\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _reject_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
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
  "doesNotInclude",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return "Any";
    }, function () {
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
        /* Temporaries */
        let _answer = _typeOf_1(_anyOne_1(_self));
        /* Statements */
        _do_2(_self, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _ifFalse_2(_equals_2(_answer, _typeOf_1(_each)), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _return_1("Any");
          });
        });
        return _answer;
      });
    });
  },
  "{ :self |\n\t\tself.isEmpty.if {\n\t\t\t'Any'\n\t\t} {\n\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\tlet answer = self.anyOne.typeOf;\n\t\t\t\tself.do { :each |\n\t\t\t\t\t(answer = each.typeOf).ifFalse {\n\t\t\t\t\t\t'Any'.return\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\tanswer\n\t\t\t}\n\t\t}\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _ifTrue_2(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _error_2(_self, _plusPlus_2("errorNotFound: ", _anObject));
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _error_2(_self, "is not indexed/keyed");
  },
  "{ :self |\n\t\tself.error('is not indexed/keyed')\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _fillFromWith_3(_self, _aCollection, _identity_1);
  },
  "{ :self :aCollection |\n\t\tself.fillFromWith(aCollection, identity:/1)\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _raisedTo_2(_product_1(_self), _dividedBy_2(1, _size_1(_self)));
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
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _result = _Map_0();
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
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
            throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _dividedBy_2(_size_1(_self), _sum_1(_reciprocal_1(_self)));
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _histogramOf_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
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
  "histogramOf",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _Bag_0();
    /* Statements */
    _collectInto_3(_self, _aBlock_1, _answer);
    return _answer;
  },
  "{ :self :aBlock:/1 |\n\t\tlet answer = Bag();\n\t\tself.collectInto(aBlock:/1, answer);\n\t\tanswer\n\t}",
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _select_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
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
  "isCollection",
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
  "Collection",
  "Collection",
  "ifEmpty",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _aBlock_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _emptyBlock_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _emptyBlock_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _ifFalse_2(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _ifFalse_2(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
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
  "isEmpty",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _equals_2(_size_1(_self), 0);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _ifFalse_2(
      _equals_2(_size_1(_otherCollection), _size_1(_self)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
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
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
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
      return _aBlock_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
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
      return _aBlock_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _dividedBy_2(_sum_1(_self), _size_1(_self));
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
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _mean = _mean_1(_self);
    /* Statements */
    return _dividedBy_2(_sum_1(_abs_1(_minus_2(_self, _mean))), _size_1(_self));
  },
  "{ :self |\n\t\tlet mean = self.mean;\n\t\t(self - mean).abs.sum / self.size\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _not_1(_isEmpty_1(_self));
  },
  "{ :self |\n\t\tself.isEmpty.not\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    _ifFalse_2(_equals_2(_size_1(_self), _aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
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
  "pseudoSlotNameArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return ["size"];
  },
  "{ :self |\n\t\t['size']\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _select_2(_self, function (_element) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _element";
        console.error(errorMessage);
        throw Error(errorMessage);
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
  "rootMeanSquare",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _dividedBy_2(_sqrt_1(_sum_1(_squared_1(_self))), 2);
  },
  "{ :self |\n\t\tself.squared.sum.sqrt / 2\n\t}",
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
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _do_2(_self, function (_each) {
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
  "{ :self :aBlock:/1 |\n\t\tlet answer = self.species.new;\n\t\tself.do { :each |\n\t\t\taBlock(each).ifTrue {\n\t\t\t\tanswer.add(each)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
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
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _selectThenDo_3(_self, _selectBlock_1, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
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
    return _sort_1(_asArray_1(_self));
  },
  "{ :self |\n\t\tself.asArray.sort\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _sortBy_2(_asArray_1(_self), _sortBlock_2);
  },
  "{ :self :sortBlock:/2 |\n\t\tself.asArray.sortBy(sortBlock:/2)\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _sqrt_1(_variance_1(_self));
  },
  "{ :self |\n\t\tself.variance.sqrt\n\t}",
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _any_2(_self, _min_2(_maxNumberOfElements, _size_1(_self)));
  },
  "{ :self :maxNumberOfElements |\n\t\tself.any(maxNumberOfElements.min(self.size))\n\t}",
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _dividedBy_2(
      _sum_1(_raisedTo_2(_minus_2(_self, _mean_1(_self)), 2)),
      _minus_2(_size_1(_self), 1),
    );
  },
  "{ :self |\n\t\t((self - self.mean) ^ 2).sum / (self.size - 1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "abs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _abs_1);
  },
  "{ :self |\n\t\tself.collect(abs:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "arCosh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _arCosh_1);
  },
  "{ :self |\n\t\tself.collect(arCosh:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "arcCos",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _arcCos_1);
  },
  "{ :self |\n\t\tself.collect(arcCos:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "arcSin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _arcSin_1);
  },
  "{ :self |\n\t\tself.collect(arcSin:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "arcTan",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _arcTan_1);
  },
  "{ :self |\n\t\tself.collect(arcTan:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "asFloat",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _asFloat_1);
  },
  "{ :self |\n\t\tself.collect(asFloat:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "ceiling",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _ceiling_1);
  },
  "{ :self |\n\t\tself.collect(ceiling:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "cos",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _cos_1);
  },
  "{ :self |\n\t\tself.collect(cos:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "cosh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _cosh_1);
  },
  "{ :self |\n\t\tself.collect(cosh:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "cubed",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _cubed_1);
  },
  "{ :self |\n\t\tself.collect(cubed:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "degreesToRadians",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _degreesToRadians_1);
  },
  "{ :self |\n\t\tself.collect(degreesToRadians:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "exp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _exp_1);
  },
  "{ :self |\n\t\tself.collect(exp:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "floor",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _floor_1);
  },
  "{ :self |\n\t\tself.collect(floor:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "fractionPart",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _fractionPart_1);
  },
  "{ :self |\n\t\tself.collect(fractionPart:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "harmonicNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _harmonicNumber_1);
  },
  "{ :self |\n\t\tself.collect(harmonicNumber:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "log",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _log_1);
  },
  "{ :self |\n\t\tself.collect(log:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "log",
  ["self", "base"],
  function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _k = _dividedBy_2(1, _log_1(_base));
    /* Statements */
    return _times_2(_log_1(_self), _k);
  },
  "{ :self :base |\n\t\tlet k = 1 / base.log;\n\t\tself.log * k\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "log10",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _log10_1);
  },
  "{ :self |\n\t\tself.collect(log10:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "log2",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _log2_1);
  },
  "{ :self |\n\t\tself.collect(log2:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "negated",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _negated_1);
  },
  "{ :self |\n\t\tself.collect(negated:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "radiansToDegrees",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _radiansToDegrees_1);
  },
  "{ :self |\n\t\tself.collect(radiansToDegrees:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "rounded",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _rounded_1);
  },
  "{ :self |\n\t\tself.collect(rounded:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "sign",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _sign_1);
  },
  "{ :self |\n\t\tself.collect(sign:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "sin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _sinh_1);
  },
  "{ :self |\n\t\tself.collect(sinh:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "sinh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _sinh_1);
  },
  "{ :self |\n\t\tself.collect(sinh:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "sqrt",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _sqrt_1);
  },
  "{ :self |\n\t\tself.collect(sqrt:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "squared",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _squared_1);
  },
  "{ :self |\n\t\tself.collect(squared:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "tan",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _tanh_1);
  },
  "{ :self |\n\t\tself.collect(tanh:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "tanh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _tanh_1);
  },
  "{ :self |\n\t\tself.collect(tanh:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "truncated",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _truncated_1);
  },
  "{ :self |\n\t\tself.collect(truncated:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Collection",
  "wrapIndex",
  ["self", "size"],
  function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
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
      return _wrapIndex_2(_each, _size);
    });
  },
  "{ :self :size |\n\t\tself.collect { :each |\n\t\t\teach.wrapIndex(size)\n\t\t}\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return [_self];
  },
  "{ :self |\n\t\t[self]\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);
