sl.addTrait("Multiset", "Multiset");

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
  "equal",
  ["self", "aMultiset"],
  sl.annotateFunction(function (_self, _aMultiset) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMultiset";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _equalsSign_2(_typeOf_1(_self), _typeOf_1(_aMultiset)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_size_1(_self), _size_1(_aMultiset)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _associationsAllSatisfy_2(
              _valuesAndCounts_1(_self),
              sl.annotateFunction(function (_each) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _each";
                  throw new Error(errorMessage);
                } /* Statements */
                return _equalsSign_2(
                  _occurrencesOf_2(_aMultiset, _key_1(_each)),
                  _value_1(_each),
                );
              }, ["each"]),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "aMultiset"]),
  "{ :self :aMultiset |\n\t\t(self.typeOf = aMultiset.typeOf) & {\n\t\t\tself.size = aMultiset.size & {\n\t\t\t\tself.valuesAndCounts.associationsAllSatisfy { :each |\n\t\t\t\t\taMultiset.occurrencesOf(each.key) = each.value\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
  "equalsSign",
  ["self", "aMultiset"],
  sl.annotateFunction(function (_self, _aMultiset) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMultiset";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _equalsSign_2(_typeOf_1(_self), _typeOf_1(_aMultiset)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_size_1(_self), _size_1(_aMultiset)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _associationsAllSatisfy_2(
              _valuesAndCounts_1(_self),
              sl.annotateFunction(function (_each) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _each";
                  throw new Error(errorMessage);
                } /* Statements */
                return _equalsSign_2(
                  _occurrencesOf_2(_aMultiset, _key_1(_each)),
                  _value_1(_each),
                );
              }, ["each"]),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "aMultiset"]),
  "{ :self :aMultiset |\n\t\t(self.typeOf = aMultiset.typeOf) & {\n\t\t\tself.size = aMultiset.size & {\n\t\t\t\tself.valuesAndCounts.associationsAllSatisfy { :each |\n\t\t\t\t\taMultiset.occurrencesOf(each.key) = each.value\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
  "addInPlace",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _addWithOccurrencesInPlace_3(_self, _anObject, 1);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.addWithOccurrences!(anObject, 1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
  "addWithOccurrencesInPlace",
  ["self", "anObject", "anInteger"],
  sl.annotateFunction(function (_self, _anObject, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _uncheckedAddWithOccurrences_3(_self, _anObject, _anInteger);
  }, ["self", "anObject", "anInteger"]),
  "{ :self :anObject :anInteger |\n\t\tself.uncheckedAddWithOccurrences(anObject, anInteger)\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
  "associations",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _associations_1(_valuesAndCounts_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.valuesAndCounts.associations\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
  "countsAndElements",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = [];
    _associationsDo_2(
      _valuesAndCounts_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _addInPlace_2(_answer, [_key_1(_each), _value_1(_each)]);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tself.valuesAndCounts.associationsDo { :each |\n\t\t\tanswer.add!([each.key, each.value])\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
  "cumulativeCounts",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _s = _solidus_2(_size_1(_self), 100.0);
    let _n = 0;
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
          _solidus_2(_n, _round_2(_s, 0.1)),
          _value_1(_a),
        );
      }, ["a"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet s = self.size / 100.0;\n\t\tlet n = 0;\n\t\tself.sortedCounts.collect { :a |\n\t\t\tn := n + a.key;\n\t\t\t(n / s.round(0.1)) -> a.value\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
  "do",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _associationsDo_2(
      _valuesAndCounts_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _timesRepeat_2(
          _value_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_1(_key_1(_each));
          }, []),
        );
      }, ["each"]),
    );
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tself.valuesAndCounts.associationsDo { :each |\n\t\t\teach.value.timesRepeat {\n\t\t\t\taBlock(each.key)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
  "elementsAndCounts",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = [];
    _associationsDo_2(
      _valuesAndCounts_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _addInPlace_2(_answer, [_key_1(_each), _value_1(_each)]);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tself.valuesAndCounts.associationsDo { :each |\n\t\t\tanswer.add!([each.key, each.value])\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
  "includes",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesIndex_2(_valuesAndCounts_1(_self), _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.valuesAndCounts.includesIndex(anObject)\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
  "intersection",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = _new_1(_species_1(_self));
    _do_2(
      _associations_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        let _x = _key_1(_each);
        let _i = _value_1(_each);
        let _j = _occurrencesOf_2(_operand, _x);
        let _k = _min_2(_i, _j);
        return _ifTrue_2(
          _greaterThanSign_2(_k, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _addWithOccurrencesInPlace_3(_answer, _x, _k);
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tlet answer = self.species.new;\n\t\tself.associations.do { :each |\n\t\t\tlet x = each.key;\n\t\t\tlet i = each.value;\n\t\t\tlet j = operand.occurrencesOf(x);\n\t\t\tlet k = i.min(j);\n\t\t\t(k > 0).ifTrue {\n\t\t\t\tanswer.addWithOccurrences!(x, k)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
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
  "{ :self |\n\t\tself.sortedElements\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
  "List",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = [];
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _addInPlace_2(_answer, _each);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tself.do { :each |\n\t\t\tanswer.add!(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
  "multitsetToList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = [];
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _addInPlace_2(_answer, _each);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tself.do { :each |\n\t\t\tanswer.add!(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
  "max",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(_indices_1(_valuesAndCounts_1(_self)), _max_2);
  }, ["self"]),
  "{ :self |\n\t\tself.valuesAndCounts.indices.reduce(max/2)\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
  "min",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(_indices_1(_valuesAndCounts_1(_self)), _min_2);
  }, ["self"]),
  "{ :self |\n\t\tself.valuesAndCounts.indices.reduce(min/2)\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
  "Multiset",
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
  "Multiset",
  "Multiset",
  "occurrencesOf",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsent_3(
      _valuesAndCounts_1(_self),
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
  "{ :self :anObject |\n\t\tself.valuesAndCounts.atIfAbsent(anObject) {\n\t\t\t0\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
  "postCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _valuesAndCountsMutateInPlace_2(
      _self,
      _copy_1(_valuesAndCounts_1(_self)),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.valuesAndCounts := self.valuesAndCounts.copy\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
  "randomChoice",
  ["self", "r", "shape"],
  sl.annotateFunction(function (_self, _r, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _r, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    let _e = _keys_1(_valuesAndCounts_1(_self));
    let _w = _values_1(_valuesAndCounts_1(_self));
    return _randomWeightedChoice_4(_r, _e, _w, _shape);
  }, ["self", "r", "shape"]),
  "{ :self :r :shape |\n\t\tlet e = self.valuesAndCounts.keys;\n\t\tlet w = self.valuesAndCounts.values;\n\t\tr.randomWeightedChoice(e, w, shape)\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
  "removeIfAbsentInPlace",
  ["self", "oldObject", "whenAbsent/0"],
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
        } /* Statements */
        let _count = _at_2(_valuesAndCounts_1(_self), _oldObject);
        return _if_3(
          _equalsSign_2(_count, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _removeKeyInPlace_2(_valuesAndCounts_1(_self), _oldObject);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _putInPlace_3(
              _valuesAndCounts_1(_self),
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
  }, ["self", "oldObject", "whenAbsent/0"]),
  "{ :self :oldObject :whenAbsent/0 |\n\t\tself.includes(oldObject).if {\n\t\t\tlet count = self.valuesAndCounts[oldObject];\n\t\t\t(count = 1).if {\n\t\t\t\tself.valuesAndCounts.removeKey!(oldObject)\n\t\t\t} {\n\t\t\t\tself.valuesAndCounts[oldObject] := count - 1\n\t\t\t}\n\t\t} {\n\t\t\twhenAbsent()\n\t\t};\n\t\toldObject\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
  "removeAllInPlace",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeAllInPlace_1(_valuesAndCounts_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.valuesAndCounts.removeAll!\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
  "Set",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Set_1(_indices_1(_valuesAndCounts_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.valuesAndCounts.indices.Set\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
  "multisetToSet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Set_1(_indices_1(_valuesAndCounts_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.valuesAndCounts.indices.Set\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _tally = 0;
    _do_2(
      _valuesAndCounts_1(_self),
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
  "{ :self |\n\t\tlet tally = 0;\n\t\tself.valuesAndCounts.do { :each |\n\t\t\ttally := tally + each\n\t\t};\n\t\ttally\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
  "sortedCounts",
  ["self", "aBlock/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortByInPlace_2(
      _associationsSwapped_1(_valuesAndCounts_1(_self)),
      _aBlock_2,
    );
  }, ["self", "aBlock/2"]),
  "{ :self :aBlock/2|\n\t\tself.valuesAndCounts.associationsSwapped.sortBy!(aBlock/2)\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
  "sortedCounts",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortedCounts_2(_self, _succeedsOrEqualTo_2);
  }, ["self"]),
  "{ :self |\n\t\tself.sortedCounts(succeedsOrEqualTo/2)\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
  "sortedElements",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortByOnInPlace_3(
      _associations_1(_valuesAndCounts_1(_self)),
      _precedesOrEqualTo_2,
      _key_1,
    );
  }, ["self"]),
  "{ :self |\n\t\tself.valuesAndCounts.associations.sortByOn!(precedesOrEqualTo/2, key/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
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
        } /* Statements */
        let _sum = 0;
        _withIndexDo_2(
          _valuesAndCounts_1(_self),
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
  "{ :self |\n\t\tself.ifEmpty {\n\t\t\tself.error('sum: empty')\n\t\t} {\n\t\t\tlet sum = 0;\n\t\t\tself.valuesAndCounts.withIndexDo { :count :value |\n\t\t\t\tsum := sum + (value * count)\n\t\t\t};\n\t\t\tsum\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
  "uncheckedAddWithOccurrences",
  ["self", "anObject", "anInteger"],
  sl.annotateFunction(function (_self, _anObject, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    let _dictionary = _valuesAndCounts_1(_self);
    _if_3(
      _includesIndex_2(_dictionary, _anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _putInPlace_3(
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
        return _putInPlace_3(_dictionary, _anObject, _anInteger);
      }, []),
    );
    return _anObject;
  }, ["self", "anObject", "anInteger"]),
  "{ :self :anObject :anInteger |\n\t\tlet dictionary = self.valuesAndCounts;\n\t\tdictionary.includesIndex(anObject).if {\n\t\t\tdictionary[anObject] := dictionary[anObject] + anInteger\n\t\t} {\n\t\t\tdictionary[anObject] := anInteger\n\t\t};\n\t\tanObject\n\t}",
);

sl.addMethodToExistingTrait(
  "Multiset",
  "Multiset",
  "valueSort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortByOnInPlace_3(
      _associations_1(_self),
      _precedesOrEqualTo_2,
      _value_1,
    );
  }, ["self"]),
  "{ :self |\n\t\tself.associations.sortByOn!(precedesOrEqualTo/2, value/1)\n\t}",
);

sl.addType(
  false,
  "Multiset",
  "Multiset",
  [
    "Object",
    "Copy",
    "Store",
    "Equal",
    "Iterable",
    "Collection",
    "Extensible",
    "Unordered",
    "Multiset",
  ],
  ["valuesAndCounts"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Multiset",
);

sl.copyTraitMethodsToType(
  "Copy",
  "Multiset",
);

sl.copyTraitMethodsToType(
  "Store",
  "Multiset",
);

sl.copyTraitMethodsToType(
  "Equal",
  "Multiset",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "Multiset",
);

sl.copyTraitMethodsToType(
  "Collection",
  "Multiset",
);

sl.copyTraitMethodsToType(
  "Extensible",
  "Multiset",
);

sl.copyTraitMethodsToType(
  "Unordered",
  "Multiset",
);

sl.copyTraitMethodsToType(
  "Multiset",
  "Multiset",
);

sl.addMethodToExistingType(
  "Multiset",
  "Multiset",
  "postCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _valuesAndCountsMutateInPlace_2(
      _self,
      _copy_1(_valuesAndCounts_1(_self)),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.valuesAndCounts := self.valuesAndCounts.copy\n\t}",
);

sl.addMethodToExistingType(
  "Multiset",
  "Multiset",
  "species",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Multiset_0;
  }, ["self"]),
  "{ :self |\n\t\tMultiset/0\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "Multiset",
  "Multiset",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _Multiset_1(_Dictionary_0());
  }, []),
  "{\n\t\tMultiset(\n\t\t\tDictionary()\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Dictionary",
  "Multiset",
  "Multiset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newMultiset_0(), _self);
  }, ["self"]),
  "{ :self |\n\t\tnewMultiset().initializeSlots(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Dictionary",
  "Multiset",
  "dictionaryToMultiset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newMultiset_0(), _self);
  }, ["self"]),
  "{ :self |\n\t\tnewMultiset().initializeSlots(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Multiset",
  "Multiset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isAssociationList_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Multiset_1(_Dictionary_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collectionToMultiset_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isAssociationList.if {\n\t\t\tMultiset(Dictionary(self))\n\t\t} {\n\t\t\tself.collectionToMultiset\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Multiset",
  "sortedCounts",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortedCounts_1(_Multiset_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.Multiset.sortedCounts\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Multiset",
  "sortedElements",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortedElements_1(_Multiset_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.Multiset.sortedElements\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Multiset",
  "Multiset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = _Multiset_0();
    _addAllInPlace_2(_answer, _self);
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = Multiset();\n\t\tanswer.addAll!(self);\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Multiset",
  "collectionToMultiset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = _Multiset_0();
    _addAllInPlace_2(_answer, _self);
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = Multiset();\n\t\tanswer.addAll!(self);\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Multiset",
  "histogramOf",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = _Multiset_0();
    _collectInto_3(_self, _aBlock_1, _answer);
    return _answer;
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tlet answer = Multiset();\n\t\tself.collectInto(aBlock/1, answer);\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Multiset",
  "commonest",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _byCount = _sortedCounts_1(_Multiset_1(_self));
    let _count = _key_1(_first_1(_byCount));
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
  "{ :self |\n\t\tlet byCount = self.Multiset.sortedCounts;\n\t\tlet count = byCount.first.key;\n\t\tbyCount.select { :each |\n\t\t\teach.key = count\n\t\t}.collect(value/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Multiset",
  "counts",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortedElements_1(_Multiset_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.Multiset.sortedElements\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Multiset",
  "multisetIntersection",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(_collect_2(_self, _Multiset_1), _intersection_2);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(Multiset/1).reduce(intersection/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Multiset",
  "counts",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _counts_1(_characters_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.characters.counts\n\t}",
);
