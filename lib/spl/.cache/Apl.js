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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(_nest_1(_alpha), _nest_1(_beta));
  },
  "{ :alpha :beta |\n\t\talpha.nest ++ beta.nest\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(_enclose_1(_p), _nest_1(_q));
  },
  "{ :p :q |\n\t\tp.enclose ++ q.nest\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(_enclose_1(_p), _enclose_1(_q));
  },
  "{ :p :q |\n\t\tp.enclose ++ q.enclose\n\t}",
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
      throw new Error(errorMessage);
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asList_1(_upOrDownTo_2(1, _self));
  },
  "{ :self |\n\t\t[1 .. self]\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Apl",
  "expand",
  ["self", "counts"],
  function (_self, _counts) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _counts";
      console.error(errorMessage);
      throw new Error(errorMessage);
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
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_greaterThanSign_2(_each, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _index = _plusSign_2(_index, 1);
        return _numberSign_2(_at_2(_self, _index), _each);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _numberSign_2(_zero, _max_2(_abs_1(_each), 1));
      });
    }));
  },
  "{ :self :counts |\n\t\tlet index = 0;\n\t\tlet zero = self.first.zero;\n\t\tcounts.collect { :each |\n\t\t\t(each > 0).if {\n\t\t\t\tindex := index + 1;\n\t\t\t\tself[index] # each\n\t\t\t} {\n\t\t\t\tzero # each.abs.max(1)\n\t\t\t}\n\t\t}.concatenation\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Apl",
  "factorial",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _factorial_1);
  },
  "{ :self |\n\t\tself.collect(factorial:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Apl",
  "find",
  ["haystack", "needle"],
  function (_haystack, _needle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _haystack, _needle";
      console.error(errorMessage);
      throw new Error(errorMessage);
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
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _endIndex = _hyphenMinus_2(_plusSign_2(_each, _needleSize), 1);
      /* Statements */
      return _if_3(_greaterThanSign_2(_endIndex, _haystackSize), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return 0;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _asInteger_1(
          _equalsSign_2(_needle, _copyFromTo_3(_haystack, _each, _endIndex)),
        );
      });
    });
  },
  "{ :haystack :needle |\n\t\tlet needleSize = needle.size;\n\t\tlet haystackSize = haystack.size;\n\t\thaystack.indices.collect { :each |\n\t\t\tlet endIndex = each + needleSize - 1;\n\t\t\t(endIndex > haystackSize).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\t(needle = haystack.copyFromTo(each, endIndex)).asInteger\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Apl",
  "gradeDown",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _reversed_1(_collect_2(_sortedWithIndices_1(_self), _value_1));
  },
  "{ :self |\n\t\tself.sortedWithIndices.collect(value:/1).reversed\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Apl",
  "gradeUp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_sortedWithIndices_1(_self), _value_1);
  },
  "{ :self |\n\t\tself.sortedWithIndices.collect(value:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Apl",
  "j",
  ["real", "imaginary"],
  function (_real, _imaginary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _real, _imaginary";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _withCollect_3(_real, _imaginary, _j_2);
  },
  "{ :real :imaginary |\n\t\treal.withCollect(imaginary, j:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Apl",
  "laminate",
  ["alpha", "beta"],
  function (_alpha, _beta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _alpha, _beta";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _extendToBeOfEqualSize_1([_alpha, _beta]);
  },
  "{ :alpha :beta |\n\t\t[alpha, beta].extendToBeOfEqualSize\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Apl",
  "membership",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
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
      return _asInteger_1(_includes_2(_aCollection, _each));
    });
  },
  "{ :self :aCollection |\n\t\tself.collect { :each |\n\t\t\taCollection.includes(each).asInteger\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Apl",
  "partitionApl",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      console.error(errorMessage);
      throw new Error(errorMessage);
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
        throw new Error(errorMessage);
      }
      /* Statements */
      _ifTrue_2(
        _verticalLine_2(_greaterThanSign_2(_each, _previous), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _ampersand_2(_equalsSign_2(_each, 0), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _tildeEqualsSign_2(_previous, 0);
          });
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          _ifTrue_2(
            _ampersand_2(_greaterThanSign_2(_index, _start), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _tildeEqualsSign_2(_previous, 0);
            }),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _add_2(
                _answer,
                _copyFromTo_3(_self, _start, _hyphenMinus_2(_index, 1)),
              );
            },
          );
          return _start = _index;
        },
      );
      return _previous = _each;
    });
    _ifTrue_2(_tildeEqualsSign_2(_last_1(_aSequence), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _copyFromTo_3(_self, _start, _size_1(_self)));
    });
    return _answer;
  },
  "{ :self :aSequence |\n\t\tlet previous = 0;\n\t\tlet start = 1;\n\t\tlet answer = [];\n\t\taSequence.withIndexDo { :each :index |\n\t\t\t(each > previous | { each = 0 & { previous ~= 0 }}).ifTrue {\n\t\t\t\t(index > start & { previous ~= 0 }).ifTrue {\n\t\t\t\t\tanswer.add(self.copyFromTo(start, index - 1))\n\t\t\t\t};\n\t\t\t\tstart := index\n\t\t\t};\n\t\t\tprevious := each\n\t\t};\n\t\t(aSequence.last ~= 0).ifTrue {\n\t\t\tanswer.add(self.copyFromTo(start, self.size))\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Apl",
  "reciprocal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _reciprocal_1);
  },
  "{ :self |\n\t\tself.collect(reciprocal:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Apl",
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
    return _size_1(_self);
  },
  "{ :self |\n\t\tself.size\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Apl",
  "unique",
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

sl.extendTraitWithMethod(
  "Sequence",
  "Apl",
  "windowedReduce",
  ["self", "windowSize", "aBlock:/2"],
  function (_self, _windowSize, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _windowSize, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(
      _partition_3(_self, _abs_1(_windowSize), 1),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _ifTrue_2(_isNegative_1(_windowSize), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _reverse_1(_each);
        });
        return _foldRight_2(_each, _aBlock_2);
      },
    );
  },
  "{ :self :windowSize :aBlock:/2 |\n\t\tself.partition(windowSize.abs, 1).collect { :each |\n\t\t\twindowSize.isNegative.ifTrue {\n\t\t\t\teach.reverse\n\t\t\t};\n\t\t\teach.foldRight(aBlock:/2)\n\t\t}\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _withCollect_3(_asList_1(_self), _asList_1(_aString), _aBlock_2);
  },
  "{ :self :aString :aBlock:/2 |\n\t\tself.asList.withCollect(aString.asList, aBlock:/2)\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _join_1(_expand_2(_asList_1(_self), _counts));
  },
  "{ :self :counts |\n\t\tself.asList.expand(counts).join\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _find_2(_asList_1(_haystack), _asList_1(_needle));
  },
  "{ :haystack :needle |\n\t\thaystack.asList.find(needle.asList)\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _gradeDown_1(_asList_1(_self));
  },
  "{ :self |\n\t\tself.asList.gradeDown\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _gradeUp_1(_asList_1(_self));
  },
  "{ :self |\n\t\tself.asList.gradeUp\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _membership_2(_asList_1(_self), _asList_1(_aString));
  },
  "{ :self :aString |\n\t\tself.asList.membership(aString.asList)\n\t}",
);

sl.addMethod(
  "String",
  "Apl",
  "partitionApl",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_partitionApl_2(_asList_1(_self), _aSequence), _join_1);
  },
  "{ :self :aSequence |\n\t\tself.asList.partitionApl(aSequence).collect(join:/1)\n\t}",
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
      throw new Error(errorMessage);
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _join_1(_replicateEach_2(_asList_1(_self), _counts));
  },
  "{ :self :counts |\n\t\tself.asList.replicateEach(counts).join\n\t}",
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
      throw new Error(errorMessage);
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
      throw new Error(errorMessage);
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _join_1(_unique_1(_asList_1(_self)));
  },
  "{ :self |\n\t\tself.asList.unique.join\n\t}",
);

sl.addMethod(
  "Block",
  "Apl",
  "fork",
  ["g:/2", "f:/1", "h:/1"],
  function (_g_2, _f_1, _h_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _g_2, _f_1, _h_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return (function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _g_2(_f_1(_x), _h_1(_x));
    });
  },
  "{ :g:/2 :f:/1 :h:/1 |\n\t\t{ :x |\n\t\t\tg(f(x), h(x))\n\t\t}\n\t}",
);
