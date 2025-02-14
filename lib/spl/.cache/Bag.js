sl.addTrait("Bag", "Bag");

sl.addTraitMethod(
  "Bag",
  "Bag",
  "equalsSign",
  ["self", "aBag"],
  function (_self, _aBag) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBag";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isBag_1(_aBag), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(
        _equalsSign_2(_size_1(_self), _size_1(_aBag)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _valueWithReturn_1(function (_return_1) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _return_1";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            _associationsDo_2(_contents_1(_self), function (_assoc) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _assoc";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return _ifFalse_2(
                _equalsSign_2(
                  _occurrencesOf_2(_aBag, _key_1(_assoc)),
                  _value_1(_assoc),
                ),
                function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    /* console.error(errorMessage); */
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _return_1(false);
                },
              );
            });
            return true;
          });
        },
      );
    });
  },
  "{ :self :aBag |\n\t\taBag.isBag & {\n\t\t\tself.size = aBag.size & {\n\t\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\t\tself.contents.associationsDo { :assoc |\n\t\t\t\t\t\t(aBag.occurrencesOf(assoc.key) = assoc.value).ifFalse {\n\t\t\t\t\t\t\tfalse.return\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t\ttrue\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Bag",
  "Bag",
  "add",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _addWithOccurrences_3(_self, _anObject, 1);
  },
  "{ :self :anObject |\n\t\tself.addWithOccurrences(anObject, 1)\n\t}",
);

sl.addTraitMethod(
  "Bag",
  "Bag",
  "addWithOccurrences",
  ["self", "anObject", "anInteger"],
  function (_self, _anObject, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _basicAddWithOccurrences_3(_self, _anObject, _anInteger);
  },
  "{ :self :anObject :anInteger |\n\t\tself.basicAddWithOccurrences(anObject, anInteger)\n\t}",
);

sl.addTraitMethod(
  "Bag",
  "Bag",
  "asBag",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Bag",
  "Bag",
  "asDictionary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _contents_1(_self);
  },
  "{ :self |\n\t\tself.contents\n\t}",
);

sl.addTraitMethod(
  "Bag",
  "Bag",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_answer, _each);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tself.do { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Bag",
  "Bag",
  "asSet",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asSet_2(_indices_1(_contents_1(_self)), _aBlock_2);
  },
  "{ :self :aBlock:/2 |\n\t\tself.contents.indices.asSet(aBlock:/2)\n\t}",
);

sl.addTraitMethod(
  "Bag",
  "Bag",
  "atRandom",
  ["self", "shape", "r"],
  function (_self, _shape, _r) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _shape, _r";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _e = _keys_1(_contents_1(_self));
    let _w = _values_1(_contents_1(_self));
    /* Statements */
    return _randomWeightedChoice_4(_r, _e, _w, _shape);
  },
  "{ :self :shape :r |\n\t\tlet e = self.contents.keys;\n\t\tlet w = self.contents.values;\n\t\tr.randomWeightedChoice(e, w, shape)\n\t}",
);

sl.addTraitMethod(
  "Bag",
  "Bag",
  "basicAddWithOccurrences",
  ["self", "anObject", "anInteger"],
  function (_self, _anObject, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _dictionary = _contents_1(_self);
    /* Statements */
    _if_3(_includesIndex_2(_dictionary, _anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _atPut_3(
        _dictionary,
        _anObject,
        _plusSign_2(_at_2(_dictionary, _anObject), _anInteger),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _atPut_3(_dictionary, _anObject, _anInteger);
    });
    return _anObject;
  },
  "{ :self :anObject :anInteger |\n\t\tlet dictionary = self.contents;\n\t\tdictionary.includesIndex(anObject).if {\n\t\t\tdictionary[anObject] := dictionary[anObject] + anInteger\n\t\t} {\n\t\t\tdictionary[anObject] := anInteger\n\t\t};\n\t\tanObject\n\t}",
);

sl.addTraitMethod(
  "Bag",
  "Bag",
  "cumulativeCounts",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _s = _solidus_2(_size_1(_self), 100.0);
    let _n = 0;
    /* Statements */
    return _collect_2(_sortedCounts_1(_self), function (_a) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _a";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _n = _plusSign_2(_n, _key_1(_a));
      return _hyphenMinusGreaterThanSign_2(
        _solidus_2(_n, _roundTo_2(_s, 0.1)),
        _value_1(_a),
      );
    });
  },
  "{ :self |\n\t\tlet s = self.size / 100.0;\n\t\tlet n = 0;\n\t\tself.sortedCounts.collect { :a |\n\t\t\tn := n + a.key;\n\t\t\t(n / s.roundTo(0.1)) -> a.value\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Bag",
  "Bag",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    _associationsDo_2(_contents_1(_self), function (_assoc) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _assoc";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _timesRepeat_2(_value_1(_assoc), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_key_1(_assoc));
      });
    });
    return _self;
  },
  "{ :self :aBlock:/1 |\n\t\tself.contents.associationsDo { :assoc |\n\t\t\tassoc.value.timesRepeat {\n\t\t\t\taBlock(assoc.key)\n\t\t\t}\n\t\t};\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Bag",
  "Bag",
  "includes",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _includesIndex_2(_contents_1(_self), _anObject);
  },
  "{ :self :anObject |\n\t\tself.contents.includesIndex(anObject)\n\t}",
);

sl.addTraitMethod(
  "Bag",
  "Bag",
  "isBag",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :unused |\n\t\ttrue\n\t}",
);

sl.addTraitMethod(
  "Bag",
  "Bag",
  "max",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(_indices_1(_contents_1(_self)), _max_2);
  },
  "{ :self |\n\t\tself.contents.indices.reduce(max:/2)\n\t}",
);

sl.addTraitMethod(
  "Bag",
  "Bag",
  "min",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(_indices_1(_contents_1(_self)), _min_2);
  },
  "{ :self |\n\t\tself.contents.indices.reduce(min:/2)\n\t}",
);

sl.addTraitMethod(
  "Bag",
  "Bag",
  "occurrencesOf",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsent_3(_contents_1(_self), _anObject, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    });
  },
  "{ :self :anObject |\n\t\tself.contents.atIfAbsent(anObject) {\n\t\t\t0\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Bag",
  "Bag",
  "postCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _contents_2(_self, _copy_1(_contents_1(_self)));
  },
  "{ :self |\n\t\tself.contents := self.contents.copy\n\t}",
);

sl.addTraitMethod(
  "Bag",
  "Bag",
  "removeIfAbsent",
  ["self", "oldObject", "whenAbsent:/0"],
  function (_self, _oldObject, _whenAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _oldObject, _whenAbsent_0";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    _if_3(_includes_2(_self, _oldObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _count = _at_2(_contents_1(_self), _oldObject);
      /* Statements */
      return _if_3(_equalsSign_2(_count, 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _removeKey_2(_contents_1(_self), _oldObject);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _contents_1(_self),
          _oldObject,
          _hyphenMinus_2(_count, 1),
        );
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _whenAbsent_0();
    });
    return _oldObject;
  },
  "{ :self :oldObject :whenAbsent:/0 |\n\t\tself.includes(oldObject).if {\n\t\t\tlet count = self.contents[oldObject];\n\t\t\t(count = 1).if {\n\t\t\t\tself.contents.removeKey(oldObject)\n\t\t\t} {\n\t\t\t\tself.contents[oldObject] := count - 1\n\t\t\t}\n\t\t} {\n\t\t\twhenAbsent()\n\t\t};\n\t\toldObject\n\t}",
);

sl.addTraitMethod(
  "Bag",
  "Bag",
  "removeAll",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _removeAll_1(_contents_1(_self));
  },
  "{ :self |\n\t\tself.contents.removeAll\n\t}",
);

sl.addTraitMethod(
  "Bag",
  "Bag",
  "setContents",
  ["self", "aDictionary"],
  function (_self, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDictionary";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _contents_2(_self, _aDictionary);
  },
  "{ :self :aDictionary |\n\t\tself.contents := aDictionary\n\t}",
);

sl.addTraitMethod(
  "Bag",
  "Bag",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _tally = 0;
    /* Statements */
    _do_2(_contents_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _tally = _plusSign_2(_tally, _each);
    });
    return _tally;
  },
  "{ :self |\n\t\tlet tally = 0;\n\t\tself.contents.do { :each |\n\t\t\ttally := tally + each\n\t\t};\n\t\ttally\n\t}",
);

sl.addTraitMethod(
  "Bag",
  "Bag",
  "sortedCounts",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _associationsDo_2(_contents_1(_self), function (_anAssociation) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _anAssociation";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(
        _answer,
        _hyphenMinusGreaterThanSign_2(
          _value_1(_anAssociation),
          _key_1(_anAssociation),
        ),
      );
    });
    return _sortBy_2(_answer, _greaterThanSignEqualsSign_2);
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tself.contents.associationsDo { :anAssociation |\n\t\t\tanswer.add(anAssociation.value -> anAssociation.key)\n\t\t};\n\t\tanswer.sortBy(>=)\n\t}",
);

sl.addTraitMethod(
  "Bag",
  "Bag",
  "sortedElements",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _sort_1(_associations_1(_contents_1(_self)));
  },
  "{ :self |\n\t\tself.contents.associations.sort\n\t}",
);

sl.addTraitMethod(
  "Bag",
  "Bag",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(_storeString_1(_contents_1(_self)), ".as"),
      _typeOf_1(_self),
    );
  },
  "{ :self |\n\t\tself.contents.storeString ++ '.as' ++ self.typeOf\n\t}",
);

sl.addTraitMethod(
  "Bag",
  "Bag",
  "sum",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ifEmpty_3(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "sum: empty");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _sum = 0;
      /* Statements */
      _withIndexDo_2(_contents_1(_self), function (_count, _value) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _count, _value";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _sum = _plusSign_2(_sum, _asterisk_2(_value, _count));
      });
      return _sum;
    });
  },
  "{ :self |\n\t\tself.ifEmpty {\n\t\t\tself.error('sum: empty')\n\t\t} {\n\t\t\tlet sum = 0;\n\t\t\tself.contents.withIndexDo { :count :value |\n\t\t\t\tsum := sum + (value * count)\n\t\t\t};\n\t\t\tsum\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Bag",
  "Bag",
  "valuesAndCounts",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _contents_1(_self);
  },
  "{ :self |\n\t\tself.contents\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Bag",
  "isBag",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  },
  "{ :unused |\n\t\tfalse\n\t}",
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

sl.copyTraitToType(
  "Object",
  "Bag",
);

sl.copyTraitToType(
  "Iterable",
  "Bag",
);

sl.copyTraitToType(
  "Collection",
  "Bag",
);

sl.copyTraitToType(
  "Extensible",
  "Bag",
);

sl.copyTraitToType(
  "Removable",
  "Bag",
);

sl.copyTraitToType(
  "Unordered",
  "Bag",
);

sl.copyTraitToType(
  "Bag",
  "Bag",
);

sl.addMethod(
  "Bag",
  "Bag",
  "asSet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asSet_2(_indices_1(_contents_1(_self)), _equalsSign_2);
  },
  "{ :self |\n\t\tself.contents.indices.asSet(=)\n\t}",
);

sl.addMethod(
  "Bag",
  "Bag",
  "species",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Bag_0;
  },
  "{ :self |\n\t\tBag:/0\n\t}",
);

sl.addType(
  false,
  "IdentityBag",
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

sl.copyTraitToType(
  "Object",
  "IdentityBag",
);

sl.copyTraitToType(
  "Iterable",
  "IdentityBag",
);

sl.copyTraitToType(
  "Collection",
  "IdentityBag",
);

sl.copyTraitToType(
  "Extensible",
  "IdentityBag",
);

sl.copyTraitToType(
  "Removable",
  "IdentityBag",
);

sl.copyTraitToType(
  "Unordered",
  "IdentityBag",
);

sl.copyTraitToType(
  "Bag",
  "IdentityBag",
);

sl.addMethod(
  "IdentityBag",
  "Bag",
  "addWithOccurrences",
  ["self", "anObject", "anInteger"],
  function (_self, _anObject, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    _ifFalse_2(_isImmediate_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_1("IdentityBag>>addWithOccurrences: non-immediate entry");
    });
    return _basicAddWithOccurrences_3(_self, _anObject, _anInteger);
  },
  "{ :self :anObject :anInteger |\n\t\tanObject.isImmediate.ifFalse {\n\t\t\t'IdentityBag>>addWithOccurrences: non-immediate entry'.error\n\t\t};\n\t\tself.basicAddWithOccurrences(anObject, anInteger)\n\t}",
);

sl.addMethod(
  "IdentityBag",
  "Bag",
  "asIdentityBag",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "IdentityBag",
  "Bag",
  "asMap",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _contents_1(_self);
  },
  "{ :self |\n\t\tself.contents\n\t}",
);

sl.addMethod(
  "IdentityBag",
  "Bag",
  "asIdentitySet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asIdentitySet_1(_indices_1(_contents_1(_self)));
  },
  "{ :self |\n\t\tself.contents.indices.asIdentitySet\n\t}",
);

sl.addMethod(
  "IdentityBag",
  "Bag",
  "species",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _IdentityBag_0;
  },
  "{ :self |\n\t\tIdentityBag:/0\n\t}",
);

sl.addMethod(
  "Void",
  "Bag",
  "Bag",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newBag_0(), _Dictionary_0());
  },
  "{\n\t\tnewBag().initializeSlots(Dictionary())\n\t}",
);

sl.addMethod(
  "Void",
  "Bag",
  "IdentityBag",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newIdentityBag_0(), _Map_0());
  },
  "{\n\t\tnewIdentityBag().initializeSlots(Map())\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Bag",
  "asBag",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _Bag_0();
    /* Statements */
    _addAll_2(_answer, _self);
    return _answer;
  },
  "{ :self |\n\t\tlet answer = Bag();\n\t\tanswer.addAll(self);\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Bag",
  "asIdentityBag",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _IdentityBag_0();
    /* Statements */
    _addAll_2(_answer, _self);
    return _answer;
  },
  "{ :self |\n\t\tlet answer = IdentityBag();\n\t\tanswer.addAll(self);\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Bag",
  "commonest",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _byCount = _sortedCounts_1(_asBag_1(_self));
    let _count = _key_1(_first_1(_byCount));
    /* Statements */
    return _collect_2(
      _select_2(_byCount, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_key_1(_each), _count);
      }),
      _value_1,
    );
  },
  "{ :self |\n\t\tlet byCount = self.asBag.sortedCounts;\n\t\tlet count = byCount.first.key;\n\t\tbyCount.select { :each | each.key = count }.collect(value:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Bag",
  "counts",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _sortedElements_1(_asBag_1(_self));
  },
  "{ :self |\n\t\tself.asBag.sortedElements\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Bag",
  "histogramOf",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _Bag_0();
    /* Statements */
    _collectInto_3(_self, _aBlock_1, _answer);
    return _answer;
  },
  "{ :self :aBlock:/1 |\n\t\tlet answer = Bag();\n\t\tself.collectInto(aBlock:/1, answer);\n\t\tanswer\n\t}",
);
