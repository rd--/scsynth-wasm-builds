sl.extendTraitWithMethod(
  "Object",
  "Apl",
  "bind",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return (function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _aBlock_2(_each, _self);
    });
  },
  "{ :self :aBlock:/2 |\n\t\t{ :each |\n\t\t\taBlock(each, self)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Apl",
  "catenate",
  ["alpha", "beta"],
  function (_alpha, _beta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _alpha, _beta";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plusPlus_2(_nest_1(_alpha), _nest_1(_beta));
  },
  "{ :alpha :beta |\n\t\talpha.nest ++ beta.nest\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Apl",
  "enclose",
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
  "Apl",
  "leftIdentity",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self :anObject |\n\t\tself\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Apl",
  "link",
  ["p", "q"],
  function (_p, _q) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p, _q";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plusPlus_2(_enclose_1(_p), _nest_1(_q));
  },
  "{ :p :q |\n\t\tp.enclose ++ q.nest\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Apl",
  "nest",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isCollection_1(_self), function () {
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
      return [_self];
    });
  },
  "{ :self |\n\t\tself.isCollection.if {\n\t\t\tself\n\t\t} {\n\t\t\t[self]\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Apl",
  "pair",
  ["p", "q"],
  function (_p, _q) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p, _q";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plusPlus_2(_enclose_1(_p), _enclose_1(_q));
  },
  "{ :p :q |\n\t\tp.enclose ++ q.enclose\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Apl",
  "rightIdentity",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _anObject;
  },
  "{ :self :anObject |\n\t\tanObject\n\t}",
);

sl.addMethod(
  "Block",
  "Apl",
  "bind",
  ["self:/2", "anObject"],
  function (_self_2, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_2, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return (function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _self_2(_anObject, _each);
    });
  },
  "{ :self:/2 :anObject |\n\t\t{ :each |\n\t\t\tself(anObject, each)\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Apl",
  "each",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equals_2(_numArgs_1(_self), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return (function (_aCollection) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _aCollection";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _collect_2(_aCollection, _self);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
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
        return _withCollect_3(_alpha, _beta, _self);
      });
    });
  },
  "{ :self |\n\t\t(self.numArgs = 1).if {\n\t\t\t{ :aCollection |\n\t\t\t\taCollection.collect(self)\n\t\t\t}\n\t\t} {\n\t\t\t{ :alpha :beta |\n\t\t\t\talpha.withCollect(beta, self)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Apl",
  "innerProduct",
  ["self:/2", "aBlock:/2"],
  function (_self_2, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_2, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return (function (_p, _q) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _p, _q";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _foldRight_2(_withCollect_3(_p, _q, _self_2), _aBlock_2);
    });
  },
  "{ :self:/2 :aBlock:/2 |\n\t\t{ :p :q |\n\t\t\tp.withCollect(q,self:/2).foldRight(aBlock:/2)\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Apl",
  "outerProduct",
  ["self:/2"],
  function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return (function (_p, _q) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _p, _q";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _collect_2(_p, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _collect_2(_q, function (_alpha) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _alpha";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _self_2(_each, _alpha);
        });
      });
    });
  },
  "{ :self:/2 |\n\t\t{ :p :q |\n\t\t\tp.collect { :each |\n\t\t\t\tq.collect { :alpha |\n\t\t\t\t\tself(each, alpha)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Apl",
  "over",
  ["f:/2", "g:/1"],
  function (_f_2, _g_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _f_2, _g_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return (function (_p, _q) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _p, _q";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _f_2(_g_1(_p), _g_1(_q));
    });
  },
  "{ :f:/2 :g:/1 |\n\t\t{ :p :q |\n\t\t\tf(p.g, q.g)\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Apl",
  "power",
  ["self:/1", "count"],
  function (_self_1, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _count";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return (function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _timesRepeat_2(_count, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _each = _self_1(_each);
      });
      return _each;
    });
  },
  "{ :self:/1 :count |\n\t\t{ :each |\n\t\t\tcount.timesRepeat {\n\t\t\t\teach := self(each)\n\t\t\t};\n\t\t\teach\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Apl",
  "self",
  ["self:/2"],
  function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return (function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _self_2(_each, _each);
    });
  },
  "{ :self:/2 |\n\t\t{ :each |\n\t\t\tself(each, each)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Apl",
  "tally",
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

sl.extendTraitWithMethod(
  "Integer",
  "Apl",
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
    return _asArray_1(_upOrDownTo_2(1, _self));
  },
  "{ :self |\n\t\t[1 .. self]\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Apl",
  "andAnd",
  ["self", "other"],
  function (_self, _other) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _other";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _withCollect_3(_self, _other, _andAnd_2);
  },
  "{ :self :other |\n\t\tself.withCollect(other, &&)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Apl",
  "orOr",
  ["self", "other"],
  function (_self, _other) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _other";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _withCollect_3(_self, _other, _orOr_2);
  },
  "{ :self :other |\n\t\tself.withCollect(other, ||)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Apl",
  "drop",
  ["self", "count"],
  function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _greaterThanEquals_2(_abs_1(_count), _size_1(_self)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _new_1(_species_1(_self));
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _if_3(_lessThan_2(_count, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _dropLast_2(_self, _negated_1(_count));
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _dropFirst_2(_self, _count);
        });
      },
    );
  },
  "{ :self :count |\n\t\t(count.abs >= self.size).if {\n\t\t\tself.species.new\n\t\t} {\n\t\t\t(count < 0).if {\n\t\t\t\tself.dropLast(count.negated)\n\t\t\t} {\n\t\t\t\tself.dropFirst(count)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Apl",
  "dropFirst",
  ["self", "count"],
  function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _copyFromTo_3(_self, _plus_2(_count, 1), _size_1(_self));
  },
  "{ :self :count |\n\t\tself.copyFromTo(count + 1, self.size)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Apl",
  "dropLast",
  ["self", "count"],
  function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _copyFromTo_3(_self, 1, _minus_2(_size_1(_self), _count));
  },
  "{ :self :count |\n\t\tself.copyFromTo(1, self.size - count)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Apl",
  "expand",
  ["self", "counts"],
  function (_self, _counts) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _counts";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _index = 0;
    let _zero = _zero_1(_first_1(_self));
    /* Statements */
    return _concatenation_1(_collect_2(_counts, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_greaterThan_2(_each, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _index = _plus_2(_index, 1);
        return _replicate_2(_at_2(_self, _index), _each);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _replicate_2(_zero, _max_2(_abs_1(_each), 1));
      });
    }));
  },
  "{ :self :counts |\n\t\tlet index = 0;\n\t\tlet zero = self.first.zero;\n\t\tcounts.collect { :each |\n\t\t\t(each > 0).if {\n\t\t\t\tindex := index + 1;\n\t\t\t\tself[index].replicate(each)\n\t\t\t} {\n\t\t\t\tzero.replicate(each.abs.max(1))\n\t\t\t}\n\t\t}.concatenation\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Apl",
  "factorial",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _factorial_1);
  },
  "{ :self |\n\t\tself.collect(factorial:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Apl",
  "find",
  ["haystack", "needle"],
  function (_haystack, _needle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _haystack, _needle";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _needleSize = _size_1(_needle);
    let _haystackSize = _size_1(_haystack);
    /* Statements */
    return _collect_2(_indices_1(_haystack), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _endIndex = _minus_2(_plus_2(_each, _needleSize), 1);
      /* Statements */
      return _if_3(_greaterThan_2(_endIndex, _haystackSize), function () {
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
        return _asInteger_1(
          _equals_2(_needle, _copyFromTo_3(_haystack, _each, _endIndex)),
        );
      });
    });
  },
  "{ :haystack :needle |\n\t\tlet needleSize = needle.size;\n\t\tlet haystackSize = haystack.size;\n\t\thaystack.indices.collect { :each |\n\t\t\tlet endIndex = each + needleSize - 1;\n\t\t\t(endIndex > haystackSize).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\t(needle = haystack.copyFromTo(each, endIndex)).asInteger\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Apl",
  "gradeDown",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _reversed_1(_collect_2(_sortedWithIndices_1(_self), _value_1));
  },
  "{ :self |\n\t\tself.sortedWithIndices.collect(value:/1).reversed\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Apl",
  "gradeUp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_sortedWithIndices_1(_self), _value_1);
  },
  "{ :self |\n\t\tself.sortedWithIndices.collect(value:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Apl",
  "j",
  ["real", "imaginary"],
  function (_real, _imaginary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _real, _imaginary";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _withCollect_3(_real, _imaginary, _j_2);
  },
  "{ :real :imaginary |\n\t\treal.withCollect(imaginary, j:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Apl",
  "laminate",
  ["alpha", "beta"],
  function (_alpha, _beta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _alpha, _beta";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _extendToBeOfEqualSize_1([_alpha, _beta]);
  },
  "{ :alpha :beta |\n\t\t[alpha, beta].extendToBeOfEqualSize\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Apl",
  "membership",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
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
      return _asInteger_1(_includes_2(_aCollection, _each));
    });
  },
  "{ :self :aCollection |\n\t\tself.collect { :each |\n\t\t\taCollection.includes(each).asInteger\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Apl",
  "nubSieve",
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
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_includes_2(_seen, _each), function () {
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
        _include_2(_seen, _each);
        return 1;
      });
    });
  },
  "{ :self |\n\t\tlet seen = Set();\n\t\tself.collect { :each |\n\t\t\tseen.includes(each).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\tseen.include(each);\n\t\t\t\t1\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Apl",
  "partition",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _previous = 0;
    let _start = 1;
    let _answer = [];
    /* Statements */
    _withIndexDo_2(_aSequence, function (_each, _index) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _ifTrue_2(
        _or_2(_greaterThan_2(_each, _previous), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _and_2(_equals_2(_each, 0), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _tildeEquals_2(_previous, 0);
          });
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          _ifTrue_2(
            _and_2(_greaterThan_2(_index, _start), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw Error(errorMessage);
              }
              /* Statements */
              return _tildeEquals_2(_previous, 0);
            }),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw Error(errorMessage);
              }
              /* Statements */
              return _add_2(
                _answer,
                _copyFromTo_3(_self, _start, _minus_2(_index, 1)),
              );
            },
          );
          return _start = _index;
        },
      );
      return _previous = _each;
    });
    _ifTrue_2(_tildeEquals_2(_last_1(_aSequence), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _copyFromTo_3(_self, _start, _size_1(_self)));
    });
    return _answer;
  },
  "{ :self :aSequence |\n\t\tlet previous = 0;\n\t\tlet start = 1;\n\t\tlet answer = [];\n\t\taSequence.withIndexDo { :each :index |\n\t\t\t(each > previous | { each = 0 & { previous ~= 0 }}).ifTrue {\n\t\t\t\t(index > start & { previous ~= 0 }).ifTrue {\n\t\t\t\t\tanswer.add(self.copyFromTo(start, index - 1))\n\t\t\t\t};\n\t\t\t\tstart := index\n\t\t\t};\n\t\t\tprevious := each\n\t\t};\n\t\t(aSequence.last ~= 0).ifTrue {\n\t\t\tanswer.add(self.copyFromTo(start, self.size))\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Apl",
  "reciprocal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _reciprocal_1);
  },
  "{ :self |\n\t\tself.collect(reciprocal:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Apl",
  "take",
  ["self", "count", "fill"],
  function (_self, _count, _fill) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _count, _fill";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThan_2(_count, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _takeLast_3(_self, _negated_1(_count), _fill);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _takeFirst_3(_self, _count, _fill);
    });
  },
  "{ :self :count :fill |\n\t\t(count < 0).if {\n\t\t\tself.takeLast(count.negated, fill)\n\t\t} {\n\t\t\tself.takeFirst(count, fill)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Apl",
  "takeFirst",
  ["self", "count", "fill"],
  function (_self, _count, _fill) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _count, _fill";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThan_2(_count, _size_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _plusPlus_2(
        _self,
        _bang_2(_fill, _minus_2(_count, _size_1(_self))),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _copyFromTo_3(_self, 1, _count);
    });
  },
  "{ :self :count :fill |\n\t\t(count > self.size).if {\n\t\t\tself ++ (fill ! (count - self.size))\n\t\t} {\n\t\t\tself.copyFromTo(1, count)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Apl",
  "takeLast",
  ["self", "count", "fill"],
  function (_self, _count, _fill) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _count, _fill";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThan_2(_count, _size_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _plusPlus_2(
        _bang_2(_fill, _minus_2(_count, _size_1(_self))),
        _self,
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _copyFromTo_3(
        _self,
        _plus_2(_minus_2(_size_1(_self), _count), 1),
        _size_1(_self),
      );
    });
  },
  "{ :self :count :fill |\n\t\t(count > self.size).if {\n\t\t\t(fill ! (count - self.size)) ++ self\n\t\t} {\n\t\t\tself.copyFromTo(self.size - count + 1, self.size)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Apl",
  "tally",
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

sl.extendTraitWithMethod(
  "Sequenceable",
  "Apl",
  "unique",
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
      return _if_3(_includes_2(_seen, _each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return false;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _include_2(_seen, _each);
        return true;
      });
    });
  },
  "{ :self |\n\t\tlet seen = Set();\n\t\tself.select { :each |\n\t\t\tseen.includes(each).if {\n\t\t\t\tfalse\n\t\t\t} {\n\t\t\t\tseen.include(each);\n\t\t\t\ttrue\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Apl",
  "windowedReduce",
  ["self", "windowSize", "aBlock:/2"],
  function (_self, _windowSize, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _windowSize, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(
      _slidingWindows_3(_self, _abs_1(_windowSize), 1),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _ifTrue_2(_isNegative_1(_windowSize), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _reverse_1(_each);
        });
        return _foldRight_2(_each, _aBlock_2);
      },
    );
  },
  "{ :self :windowSize :aBlock:/2 |\n\t\tself.slidingWindows(windowSize.abs, 1).collect { :each |\n\t\t\twindowSize.isNegative.ifTrue {\n\t\t\t\teach.reverse\n\t\t\t};\n\t\t\teach.foldRight(aBlock:/2)\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "Apl",
  "withCollect",
  ["self", "aString", "aBlock:/2"],
  function (_self, _aString, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _withCollect_3(_asArray_1(_self), _asArray_1(_aString), _aBlock_2);
  },
  "{ :self :aString :aBlock:/2 |\n\t\tself.asArray.withCollect(aString.asArray, aBlock:/2)\n\t}",
);

sl.addMethod(
  "String",
  "Apl",
  "expand",
  ["self", "counts"],
  function (_self, _counts) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _counts";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _join_1(_expand_2(_asArray_1(_self), _counts));
  },
  "{ :self :counts |\n\t\tself.asArray.expand(counts).join\n\t}",
);

sl.addMethod(
  "String",
  "Apl",
  "find",
  ["haystack", "needle"],
  function (_haystack, _needle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _haystack, _needle";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _find_2(_asArray_1(_haystack), _asArray_1(_needle));
  },
  "{ :haystack :needle |\n\t\thaystack.asArray.find(needle.asArray)\n\t}",
);

sl.addMethod(
  "String",
  "Apl",
  "gradeDown",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _gradeDown_1(_asArray_1(_self));
  },
  "{ :self |\n\t\tself.asArray.gradeDown\n\t}",
);

sl.addMethod(
  "String",
  "Apl",
  "gradeUp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _gradeUp_1(_asArray_1(_self));
  },
  "{ :self |\n\t\tself.asArray.gradeUp\n\t}",
);

sl.addMethod(
  "String",
  "Apl",
  "membership",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _membership_2(_asArray_1(_self), _asArray_1(_aString));
  },
  "{ :self :aString |\n\t\tself.asArray.membership(aString.asArray)\n\t}",
);

sl.addMethod(
  "String",
  "Apl",
  "nubSieve",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _nubSieve_1(_asArray_1(_self));
  },
  "{ :self |\n\t\tself.asArray.nubSieve\n\t}",
);

sl.addMethod(
  "String",
  "Apl",
  "partition",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_partition_2(_asArray_1(_self), _aSequence), _join_1);
  },
  "{ :self :aSequence |\n\t\tself.asArray.partition(aSequence).collect(join:/1)\n\t}",
);

sl.addMethod(
  "String",
  "Apl",
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
    return 1;
  },
  "{ :self |\n\t\t1\n\t}",
);

sl.addMethod(
  "String",
  "Apl",
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
    return _join_1(_replicateEach_2(_asArray_1(_self), _counts));
  },
  "{ :self :counts |\n\t\tself.asArray.replicateEach(counts).join\n\t}",
);

sl.addMethod(
  "String",
  "Apl",
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
    return [_size_1(_self)];
  },
  "{ :self |\n\t\t[self.size]\n\t}",
);

sl.addMethod(
  "String",
  "Apl",
  "tally",
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

sl.addMethod(
  "String",
  "Apl",
  "unique",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _join_1(_unique_1(_asArray_1(_self)));
  },
  "{ :self |\n\t\tself.asArray.unique.join\n\t}",
);
