sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Apl",
  "catenate",
  ["alpha", "beta"],
  function (_alpha, _beta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _alpha, _beta";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(_nest_1(_alpha), _nest_1(_beta));
  },
  "{ :alpha :beta | ++(nest(alpha), nest(beta)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Apl",
  "link",
  ["p", "q"],
  function (_p, _q) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p, _q";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(_enclose_1(_p), _nest_1(_q));
  },
  "{ :p :q | ++(enclose(p), nest(q)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Apl",
  "pair",
  ["p", "q"],
  function (_p, _q) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p, _q";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(_enclose_1(_p), _enclose_1(_q));
  },
  "{ :p :q | ++(enclose(p), enclose(q)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Apl",
  "expand",
  ["self", "counts"],
  function (_self, _counts) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _counts";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = 0;
    let _zero = _zero_1(_first_1(_self));
    /* Statements */
    return _gather_2(_counts, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_greaterThanSign_2(_each, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _index = _plusSign_2(_index, 1);
        return _numberSign_2(_at_2(_self, _index), _each);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _numberSign_2(_zero, _max_2(_abs_1(_each), 1));
      });
    });
  },
  "{ :self :counts | let index = 0; let zero = zero(first(self)); gather(counts, { :each | if((>(each, 0)), { index := +(index, 1); #(at(self, index), each) }, { #(zero, max(abs(each),1)) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Apl",
  "find",
  ["haystack", "needle"],
  function (_haystack, _needle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _haystack, _needle";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _needleSize = _size_1(_needle);
    let _haystackSize = _size_1(_haystack);
    /* Statements */
    return _collect_2(_indices_1(_haystack), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _endIndex = _hyphenMinus_2(_plusSign_2(_each, _needleSize), 1);
      /* Statements */
      return _if_3(_greaterThanSign_2(_endIndex, _haystackSize), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asInteger_1(
          _equalsSign_2(_needle, _copyFromTo_3(_haystack, _each, _endIndex)),
        );
      });
    });
  },
  "{ :haystack :needle | let needleSize = size(needle); let haystackSize = size(haystack); collect(indices(haystack), { :each | let endIndex = -(+(each, needleSize), 1); if((>(endIndex, haystackSize)), { 0 }, { asInteger((=(needle, copyFromTo(haystack,each, endIndex)))) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Apl",
  "gradeDown",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reversed_1(_collect_2(_sortedWithIndices_1(_self), _value_1));
  },
  "{ :self | reversed(collect(sortedWithIndices(self),value:/1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Apl",
  "gradeUp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_sortedWithIndices_1(_self), _value_1);
  },
  "{ :self | collect(sortedWithIndices(self),value:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Apl",
  "j",
  ["real", "imaginary"],
  function (_real, _imaginary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _real, _imaginary";
      throw new Error(errorMessage);
    } /* Statements */
    return _withCollect_3(_real, _imaginary, _j_2);
  },
  "{ :real :imaginary | withCollect(real,imaginary, j:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Apl",
  "laminate",
  ["alpha", "beta"],
  function (_alpha, _beta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _alpha, _beta";
      throw new Error(errorMessage);
    } /* Statements */
    return _extendToBeOfEqualSize_1([_alpha, _beta]);
  },
  "{ :alpha :beta | extendToBeOfEqualSize([alpha, beta]) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Apl",
  "membership",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _asInteger_1(_includes_2(_aCollection, _each));
    });
  },
  "{ :self :aCollection | collect(self, { :each | asInteger(includes(aCollection,each)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Apl",
  "partitionApl",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _previous = 0;
    let _start = 1;
    let _answer = [];
    /* Statements */
    _withIndexDo_2(_aSequence, function (_each, _index) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _index";
        throw new Error(errorMessage);
      } /* Statements */
      _ifTrue_2(
        _verticalLine_2(_greaterThanSign_2(_each, _previous), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ampersand_2(_equalsSign_2(_each, 0), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _tildeEqualsSign_2(_previous, 0);
          });
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _ifTrue_2(
            _ampersand_2(_greaterThanSign_2(_index, _start), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _tildeEqualsSign_2(_previous, 0);
            }),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
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
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_answer, _copyFromTo_3(_self, _start, _size_1(_self)));
    });
    return _answer;
  },
  "{ :self :aSequence | let previous = 0; let start = 1; let answer = []; withIndexDo(aSequence, { :each :index | ifTrue((|(>(each, previous), { &(=(each, 0), { ~=(previous, 0) }) })), { ifTrue((&(>(index, start), { ~=(previous, 0) })), { add(answer,copyFromTo(self,start, -(index, 1))) }); start := index }); previous := each }); ifTrue((~=(last(aSequence), 0)), { add(answer,copyFromTo(self,start, size(self))) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Apl",
  "windowedReduce",
  ["self", "windowSize", "aBlock:/2"],
  function (_self, _windowSize, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _windowSize, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _partition_3(_self, _abs_1(_windowSize), 1),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _ifTrue_2(_isNegative_1(_windowSize), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _reverse_1(_each);
        });
        return _foldRight_2(_each, _aBlock_2);
      },
    );
  },
  "{ :self :windowSize :aBlock:/2 | collect(partition(self,abs(windowSize), 1), { :each | ifTrue(isNegative(windowSize), { reverse(each) }); foldRight(each,aBlock:/2) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Apl",
  "withCollect",
  ["self", "aString", "aBlock:/2"],
  function (_self, _aString, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _withCollect_3(_asList_1(_self), _asList_1(_aString), _aBlock_2);
  },
  "{ :self :aString :aBlock:/2 | withCollect(asList(self),asList(aString), aBlock:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Apl",
  "expand",
  ["self", "counts"],
  function (_self, _counts) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _counts";
      throw new Error(errorMessage);
    } /* Statements */
    return _join_2(_expand_2(_asList_1(_self), _counts), "");
  },
  "{ :self :counts | join(expand(asList(self),counts),'') }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Apl",
  "find",
  ["haystack", "needle"],
  function (_haystack, _needle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _haystack, _needle";
      throw new Error(errorMessage);
    } /* Statements */
    return _find_2(_asList_1(_haystack), _asList_1(_needle));
  },
  "{ :haystack :needle | find(asList(haystack),asList(needle)) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Apl",
  "gradeDown",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _gradeDown_1(_asList_1(_self));
  },
  "{ :self | gradeDown(asList(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Apl",
  "gradeUp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _gradeUp_1(_asList_1(_self));
  },
  "{ :self | gradeUp(asList(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Apl",
  "membership",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _membership_2(_asList_1(_self), _asList_1(_aString));
  },
  "{ :self :aString | membership(asList(self),asList(aString)) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Apl",
  "partitionApl",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _partitionApl_2(_asList_1(_self), _aSequence),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _join_2(_each, "");
      },
    );
  },
  "{ :self :aSequence | collect(partitionApl(asList(self),aSequence), { :each | join(each,'') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Apl",
  "rank",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 1;
  },
  "{ :self | 1 }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Apl",
  "replicateEach",
  ["self", "counts"],
  function (_self, _counts) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _counts";
      throw new Error(errorMessage);
    } /* Statements */
    return _join_2(_replicateEach_2(_asList_1(_self), _counts), "");
  },
  "{ :self :counts | join(replicateEach(asList(self),counts),'') }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Apl",
  "shape",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_size_1(_self)];
  },
  "{ :self | [size(self)] }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Apl",
  "fork",
  ["g:/2", "f:/1", "h:/1"],
  function (_g_2, _f_1, _h_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _g_2, _f_1, _h_1";
      throw new Error(errorMessage);
    } /* Statements */
    return (function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _g_2(_f_1(_x), _h_1(_x));
    });
  },
  "{ :g:/2 :f:/1 :h:/1 | { :x | g(f(x), h(x)) } }",
);
