sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Apl",
  "catenate",
  ["alpha", "beta"],
  sl.annotateFunction(function (_alpha, _beta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _alpha, _beta";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(_nest_1(_alpha), _nest_1(_beta));
  }, ["alpha", "beta"]),
  "{ :alpha :beta |\n\t\talpha.nest ++ beta.nest\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Apl",
  "link",
  ["p", "q"],
  sl.annotateFunction(function (_p, _q) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p, _q";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(_enclose_1(_p), _nest_1(_q));
  }, ["p", "q"]),
  "{ :p :q |\n\t\tp.enclose ++ q.nest\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Apl",
  "pair",
  ["p", "q"],
  sl.annotateFunction(function (_p, _q) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p, _q";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(_enclose_1(_p), _enclose_1(_q));
  }, ["p", "q"]),
  "{ :p :q |\n\t\tp.enclose ++ q.enclose\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Apl",
  "expand",
  ["self", "counts"],
  sl.annotateFunction(function (_self, _counts) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _counts";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = 0;
    let _zero = _zero_1(_first_1(_self));
    /* Statements */
    return _collectCatenate_2(
      _counts,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSign_2(_each, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _index = _plusSign_2(_index, 1);
            return _numberSign_2(_at_2(_self, _index), _each);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _numberSign_2(_zero, _max_2(_abs_1(_each), 1));
          }, []),
        );
      }, ["each"]),
    );
  }, ["self", "counts"]),
  "{ :self :counts |\n\t\tlet index = 0;\n\t\tlet zero = self.first.zero;\n\t\tcounts.collectCatenate { :each |\n\t\t\t(each > 0).if {\n\t\t\t\tindex := index + 1;\n\t\t\t\tself[index] # each\n\t\t\t} {\n\t\t\t\tzero # each.abs.max(1)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Apl",
  "find",
  ["haystack", "needle"],
  sl.annotateFunction(function (_haystack, _needle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _haystack, _needle";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _needleSize = _size_1(_needle);
    let _haystackSize = _size_1(_haystack);
    /* Statements */
    return _collect_2(
      _indices_1(_haystack),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _endIndex = _hyphenMinus_2(_plusSign_2(_each, _needleSize), 1);
        /* Statements */
        return _if_3(
          _greaterThanSign_2(_endIndex, _haystackSize),
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
            return _asInteger_1(
              _equalsSign_2(
                _needle,
                _copyFromTo_3(_haystack, _each, _endIndex),
              ),
            );
          }, []),
        );
      }, ["each"]),
    );
  }, ["haystack", "needle"]),
  "{ :haystack :needle |\n\t\tlet needleSize = needle.size;\n\t\tlet haystackSize = haystack.size;\n\t\thaystack.indices.collect { :each |\n\t\t\tlet endIndex = each + needleSize - 1;\n\t\t\t(endIndex > haystackSize).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\t(needle = haystack.copyFromTo(each, endIndex)).asInteger\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Apl",
  "gradeDown",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reverse_1(_collect_2(_sortedWithIndices_1(_self), _value_1));
  }, ["self"]),
  "{ :self |\n\t\tself.sortedWithIndices.collect(value:/1).reverse\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Apl",
  "gradeUp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_sortedWithIndices_1(_self), _value_1);
  }, ["self"]),
  "{ :self |\n\t\tself.sortedWithIndices.collect(value:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Apl",
  "j",
  ["real", "imaginary"],
  sl.annotateFunction(function (_real, _imaginary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _real, _imaginary";
      throw new Error(errorMessage);
    } /* Statements */
    return _withCollect_3(_real, _imaginary, _j_2);
  }, ["real", "imaginary"]),
  "{ :real :imaginary |\n\t\treal.withCollect(imaginary, j:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Apl",
  "laminate",
  ["alpha", "beta"],
  sl.annotateFunction(function (_alpha, _beta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _alpha, _beta";
      throw new Error(errorMessage);
    } /* Statements */
    return _extendToBeOfEqualSize_1([_alpha, _beta]);
  }, ["alpha", "beta"]),
  "{ :alpha :beta |\n\t\t[alpha, beta].extendToBeOfEqualSize\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Apl",
  "membership",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
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
        return _asInteger_1(_includes_2(_aCollection, _each));
      }, ["each"]),
    );
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\tself.collect { :each |\n\t\t\taCollection.includes(each).asInteger\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Apl",
  "partitionApl",
  ["self", "aSequence"],
  sl.annotateFunction(function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _previous = 0;
    let _start = 1;
    let _answer = [];
    /* Statements */
    _withIndexDo_2(
      _aSequence,
      sl.annotateFunction(function (_each, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _index";
          throw new Error(errorMessage);
        } /* Statements */
        _ifTrue_2(
          _verticalLine_2(
            _greaterThanSign_2(_each, _previous),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _ampersand_2(
                _equalsSign_2(_each, 0),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _exclamationMarkEqualsSign_2(_previous, 0);
                }, []),
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
              _ampersand_2(
                _greaterThanSign_2(_index, _start),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _exclamationMarkEqualsSign_2(_previous, 0);
                }, []),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(
                  _answer,
                  _copyFromTo_3(_self, _start, _hyphenMinus_2(_index, 1)),
                );
              }, []),
            );
            return _start = _index;
          }, []),
        );
        return _previous = _each;
      }, ["each", "index"]),
    );
    _ifTrue_2(
      _exclamationMarkEqualsSign_2(_last_1(_aSequence), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _copyFromTo_3(_self, _start, _size_1(_self)));
      }, []),
    );
    return _answer;
  }, ["self", "aSequence"]),
  "{ :self :aSequence |\n\t\tlet previous = 0;\n\t\tlet start = 1;\n\t\tlet answer = [];\n\t\taSequence.withIndexDo { :each :index |\n\t\t\t(each > previous | { each = 0 & { previous != 0 }}).ifTrue {\n\t\t\t\t(index > start & { previous != 0 }).ifTrue {\n\t\t\t\t\tanswer.add(self.copyFromTo(start, index - 1))\n\t\t\t\t};\n\t\t\t\tstart := index\n\t\t\t};\n\t\t\tprevious := each\n\t\t};\n\t\t(aSequence.last != 0).ifTrue {\n\t\t\tanswer.add(self.copyFromTo(start, self.size))\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Apl",
  "windowedReduce",
  ["self", "windowSize", "aBlock:/2"],
  sl.annotateFunction(function (_self, _windowSize, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _windowSize, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _partition_3(_self, _abs_1(_windowSize), 1),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _ifTrue_2(
          _isNegative_1(_windowSize),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _reverseInPlace_1(_each);
          }, []),
        );
        return _foldRight_2(_each, _aBlock_2);
      }, ["each"]),
    );
  }, ["self", "windowSize", "aBlock:/2"]),
  "{ :self :windowSize :aBlock:/2 |\n\t\tself.partition(windowSize.abs, 1).collect { :each |\n\t\t\twindowSize.isNegative.ifTrue {\n\t\t\t\teach.reverseInPlace\n\t\t\t};\n\t\t\teach.foldRight(aBlock:/2)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Apl",
  "withCollect",
  ["self", "aString", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aString, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _withCollect_3(
      _characters_1(_self),
      _characters_1(_aString),
      _aBlock_2,
    );
  }, ["self", "aString", "aBlock:/2"]),
  "{ :self :aString :aBlock:/2 |\n\t\tself.characters.withCollect(aString.characters, aBlock:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Apl",
  "expand",
  ["self", "counts"],
  sl.annotateFunction(function (_self, _counts) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _counts";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringCatenate_1(_expand_2(_characters_1(_self), _counts));
  }, ["self", "counts"]),
  "{ :self :counts |\n\t\tself.characters.expand(counts).stringCatenate\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Apl",
  "find",
  ["haystack", "needle"],
  sl.annotateFunction(function (_haystack, _needle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _haystack, _needle";
      throw new Error(errorMessage);
    } /* Statements */
    return _find_2(_characters_1(_haystack), _characters_1(_needle));
  }, ["haystack", "needle"]),
  "{ :haystack :needle |\n\t\thaystack.characters.find(needle.characters)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Apl",
  "gradeDown",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _gradeDown_1(_characters_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.characters.gradeDown\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Apl",
  "gradeUp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _gradeUp_1(_characters_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.characters.gradeUp\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Apl",
  "membership",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _membership_2(_characters_1(_self), _characters_1(_aString));
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tself.characters.membership(aString.characters)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Apl",
  "partitionApl",
  ["self", "aSequence"],
  sl.annotateFunction(function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _partitionApl_2(_characters_1(_self), _aSequence),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _stringCatenate_1(_each);
      }, ["each"]),
    );
  }, ["self", "aSequence"]),
  "{ :self :aSequence |\n\t\tself.characters.partitionApl(aSequence).collect { :each |\n\t\t\teach.stringCatenate\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Apl",
  "rank",
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
  "String",
  "Apl",
  "replicateEach",
  ["self", "counts"],
  sl.annotateFunction(function (_self, _counts) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _counts";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringCatenate_1(_replicateEach_2(_characters_1(_self), _counts));
  }, ["self", "counts"]),
  "{ :self :counts |\n\t\tself.characters.replicateEach(counts).stringCatenate\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Apl",
  "shape",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_size_1(_self)];
  }, ["self"]),
  "{ :self |\n\t\t[self.size]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Apl",
  "fork",
  ["g:/2", "f:/1", "h:/1"],
  sl.annotateFunction(function (_g_2, _f_1, _h_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _g_2, _f_1, _h_1";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _g_2(_f_1(_x), _h_1(_x));
    }, ["x"]);
  }, ["g:/2", "f:/1", "h:/1"]),
  "{ :g:/2 :f:/1 :h:/1 |\n\t\t{ :x |\n\t\t\tg(f(x), h(x))\n\t\t}\n\t}",
);
