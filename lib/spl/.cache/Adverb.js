sl.extendTraitWithMethod(
  "Sequenceable",
  "Adverb",
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
    return _withCrossedCollect_3(_self, _aSequence, _times_2);
  },
  "{ :self :aSequence |\n\t\tself.withCrossedCollect(aSequence, *)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Adverb",
  "withCrossedCollect",
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
      _times_2(_size_1(_self), _size_1(_aSequence)),
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
        return _nextIndex = _plus_2(_nextIndex, 1);
      });
    });
    return _answer;
  },
  "{ :self :aSequence :aBlock:/2 |\n\t\tlet answer = self.species.new(self.size * aSequence.size);\n\t\tlet nextIndex = 1;\n\t\tself.do { :leftItem |\n\t\t\taSequence.do { :rightItem |\n\t\t\t\tanswer[nextIndex] := aBlock(leftItem, rightItem);\n\t\t\t\tnextIndex := nextIndex + 1\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Adverb",
  "withFoldingCollect",
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

sl.extendTraitWithMethod(
  "Sequenceable",
  "Adverb",
  "withTableCollect",
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
  "{ :self :aSequence :aBlock:/2 |\n\t\tself.collect { :each |\n\t\t\teach.aBlock(aSequence)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Adverb",
  "withTruncatingCollect",
  ["self", "aSequence", "aBlock:/2"],
  function (_self, _aSequence, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aSequence, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThan_2(_size_1(_self), _size_1(_aSequence)), function () {
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
    }, function () {
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
    });
  },
  "{ :self :aSequence :aBlock:/2 |\n\t\t(self.size < aSequence.size).if {\n\t\t\tself.withCollect(aSequence.take(self.size), aBlock:/2)\n\t\t} {\n\t\t\tself.take(aSequence.size).withCollect(aSequence, aBlock:/2)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Adverb",
  "withWrappingCollect",
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

sl.addMethod(
  "Block",
  "Adverb",
  "e",
  ["self:/2"],
  function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return (function (_alpha, _beta) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _alpha, _beta";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _withCollect_3(_alpha, _beta, _self_2);
    });
  },
  "{ :self:/2 |\n\t\t{ :alpha :beta |\n\t\t\talpha.withCollect(beta, self:/2)\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Adverb",
  "f",
  ["self:/2"],
  function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return (function (_alpha, _beta) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _alpha, _beta";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _withFoldingCollect_3(_alpha, _beta, _self_2);
    });
  },
  "{ :self:/2 |\n\t\t{ :alpha :beta |\n\t\t\talpha.withFoldingCollect(beta, self:/2)\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Adverb",
  "s",
  ["self:/2"],
  function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return (function (_alpha, _beta) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _alpha, _beta";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _withTruncatingCollect_3(_alpha, _beta, _self_2);
    });
  },
  "{ :self:/2 |\n\t\t{ :alpha :beta |\n\t\t\talpha.withTruncatingCollect(beta, self:/2)\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Adverb",
  "t",
  ["self:/2"],
  function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return (function (_alpha, _beta) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _alpha, _beta";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _withTableCollect_3(_alpha, _beta, _self_2);
    });
  },
  "{ :self:/2 |\n\t\t{ :alpha :beta |\n\t\t\talpha.withTableCollect(beta, self:/2)\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Adverb",
  "w",
  ["self:/2"],
  function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return (function (_alpha, _beta) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _alpha, _beta";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _withWrappingCollect_3(_alpha, _beta, _self_2);
    });
  },
  "{ :self:/2 |\n\t\t{ :alpha :beta |\n\t\t\talpha.withWrappingCollect(beta, self:/2)\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Adverb",
  "x",
  ["self:/2"],
  function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return (function (_alpha, _beta) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _alpha, _beta";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _withCrossedCollect_3(_alpha, _beta, _self_2);
    });
  },
  "{ :self:/2 |\n\t\t{ :alpha :beta |\n\t\t\talpha.withCrossedCollect(beta, self:/2)\n\t\t}\n\t}",
);
