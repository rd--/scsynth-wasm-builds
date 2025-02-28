sl.addType(
  false,
  "RunArray",
  "RunArray",
  ["Object", "Indexable"],
  ["runs", "values", "cachedIndex", "cachedRun", "cachedOffset"],
);

sl.copyTraitMethodsToType(
  "Object",
  "RunArray",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "RunArray",
);

sl.addMethodToExistingType(
  "RunArray",
  "RunArray",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSignEqualsSign_2(_self, _anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return true;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(_isRunArray_1(_anObject), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _hasEqualElements_2(_runs_1(_self), _runs_1(_anObject)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _hasEqualElements_2(_values_1(_self), _values_1(_anObject));
          },
        );
      });
    });
  },
  "{ :self :anObject | if((==(self, anObject)), { true }, { &(isRunArray(anObject), { &(hasEqualElements(runs(self),runs(anObject)), { hasEqualElements(values(self),values(anObject)) }) }) }) }",
);

sl.addMethodToExistingType(
  "RunArray",
  "RunArray",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_1(_size_1(_self));
    /* Statements */
    _withIndexDo_2(_self, function (_each, _index) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _index";
        throw new Error(errorMessage);
      } /* Statements */
      return _atPut_3(_answer, _index, _each);
    });
    return _answer;
  },
  "{ :self | let answer = List(size(self)); withIndexDo(self, { :each :index | atPut(answer, index, each) }); answer }",
);

sl.addMethodToExistingType(
  "RunArray",
  "RunArray",
  "asAssociationList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _runsAndValuesCollect_2(_self, function (_run, _value) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _run, _value";
        throw new Error(errorMessage);
      } /* Statements */
      return _hyphenMinusGreaterThanSign_2(_value, _run);
    });
  },
  "{ :self | runsAndValuesCollect(self, { :run :value | ->(value, run) }) }",
);

sl.addMethodToExistingType(
  "RunArray",
  "RunArray",
  "asIdentityBag",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _IdentityBag_0();
    /* Statements */
    _runsAndValuesDo_2(_self, function (_run, _value) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _run, _value";
        throw new Error(errorMessage);
      } /* Statements */
      return _addWithOccurrences_3(_answer, _value, _run);
    });
    return _answer;
  },
  "{ :self | let answer = IdentityBag(); runsAndValuesDo(self, { :run :value | addWithOccurrences(answer,value, run) }); answer }",
);

sl.addMethodToExistingType(
  "RunArray",
  "RunArray",
  "asIdentitySet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asIdentitySet_1(_values_1(_self));
  },
  "{ :self | asIdentitySet(values(self)) }",
);

sl.addMethodToExistingType(
  "RunArray",
  "RunArray",
  "allocatedSize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_asterisk_2(_size_1(_runs_1(_self)), 2), 3);
  },
  "{ :self | +(*(size(runs(self)), 2), 3) }",
);

sl.addMethodToExistingType(
  "RunArray",
  "RunArray",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _atSetRunOffsetAndValue_3(
      _self,
      _index,
      function (_run, _offset, _value) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _run, _offset, _value";
          throw new Error(errorMessage);
        } /* Statements */
        _ifTrue_2(_lessThanSign_2(_offset, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _errorInvalidIndex_3(_self, "at", _index);
        });
        _ifTrue_2(
          _greaterThanSignEqualsSign_2(_offset, _at_2(_runs_1(_self), _run)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _indexError_2(_self, _index);
          },
        );
        return _value;
      },
    );
  },
  "{ :self :index | atSetRunOffsetAndValue(self, index, { :run :offset :value | ifTrue((<(offset, 0)), { errorInvalidIndex(self,'at', index) }); ifTrue((>=(offset, at(runs(self), run))), { indexError(self,index) }); value }) }",
);

sl.addMethodToExistingType(
  "RunArray",
  "RunArray",
  "atSetRunOffsetAndValue",
  ["self", "index", "aBlock:/3"],
  function (_self, _index, _aBlock_3) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _aBlock_3";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _limit = _size_1(_runs_1(_self));
    let _run = null;
    let _offset = null;
    /* Statements */
    _if_3(
      _verticalLine_2(
        _equalsSignEqualsSign_2(_cachedIndex_1(_self), null),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSign_2(_index, _cachedIndex_1(_self));
        },
      ),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _run = 1;
        return _offset = _hyphenMinus_2(_index, 1);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _run = _cachedRun_1(_self);
        return _offset = _plusSign_2(
          _cachedOffset_1(_self),
          _hyphenMinus_2(_index, _cachedIndex_1(_self)),
        );
      },
    );
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(_lessThanSignEqualsSign_2(_run, _limit), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSignEqualsSign_2(
          _offset,
          _at_2(_runs_1(_self), _run),
        );
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _offset = _hyphenMinus_2(_offset, _at_2(_runs_1(_self), _run));
      return _run = _plusSign_2(_run, 1);
    });
    _cachedIndex_2(_self, _index);
    _cachedRun_2(_self, _run);
    _cachedOffset_2(_self, _offset);
    _ifTrue_2(_greaterThanSign_2(_run, _limit), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _run = _hyphenMinus_2(_run, 1);
      return _offset = _plusSign_2(_offset, _at_2(_runs_1(_self), _run));
    });
    return _aBlock_3(_run, _offset, _at_2(_values_1(_self), _run));
  },
  "{ :self :index :aBlock:/3 | let limit = size(runs(self)); let run = nil; let offset = nil; if((|(==(cachedIndex(self), nil), { <(index, cachedIndex(self)) })), { run := 1; offset := -(index, 1) }, { run := cachedRun(self); offset := +(cachedOffset(self), (-(index, cachedIndex(self)))) }); whileTrue({ &(<=(run, limit), { >=(offset, at(runs(self), run)) }) }, { offset := -(offset, at(runs(self), run)); run := +(run, 1) }); cachedIndex(self, index); cachedRun(self, run); cachedOffset(self, offset); ifTrue((>(run, limit)), { run := -(run, 1); offset := +(offset, at(runs(self), run)) }); aBlock(run, offset, at(values(self), run)) }",
);

sl.addMethodToExistingType(
  "RunArray",
  "RunArray",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _toDo_3(1, _size_1(_runs_1(_self)), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _run = _at_2(_runs_1(_self), _index);
      let _value = _at_2(_values_1(_self), _index);
      /* Statements */
      return _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _run = _hyphenMinus_2(_run, 1);
        return _greaterThanSignEqualsSign_2(_run, 0);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_value);
      });
    });
  },
  "{ :self :aBlock:/1 | toDo(1, size(runs(self)), { :index | let run = at(runs(self), index); let value = at(values(self), index); whileTrue({ run := -(run, 1); >=(run, 0) }, { aBlock(value) }) }) }",
);

sl.addMethodToExistingType(
  "RunArray",
  "RunArray",
  "first",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_values_1(_self), 1);
  },
  "{ :self | at(values(self), 1) }",
);

sl.addMethodToExistingType(
  "RunArray",
  "RunArray",
  "includes",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_values_1(_self), _anObject);
  },
  "{ :self :anObject | includes(values(self),anObject) }",
);

sl.addMethodToExistingType(
  "RunArray",
  "RunArray",
  "isSorted",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isSorted_1(_values_1(_self));
  },
  "{ :self | isSorted(values(self)) }",
);

sl.addMethodToExistingType(
  "RunArray",
  "RunArray",
  "isSortedBy",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _isSortedBy_2(_values_1(_self), _aBlock_2);
  },
  "{ :self :aBlock:/2 | isSortedBy(values(self),aBlock:/2) }",
);

sl.addMethodToExistingType(
  "RunArray",
  "RunArray",
  "last",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_values_1(_self), _size_1(_values_1(_self)));
  },
  "{ :self | at(values(self), size(values(self))) }",
);

sl.addMethodToExistingType(
  "RunArray",
  "RunArray",
  "postCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _runs_2(_self, _copy_1(_runs_1(_self)));
    return _values_2(_self, _copy_1(_values_1(_self)));
  },
  "{ :self | runs(self, copy(runs(self))); values(self, copy(values(self))) }",
);

sl.addMethodToExistingType(
  "RunArray",
  "RunArray",
  "reversed",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _RunArray_2(
      _reversed_1(_runs_1(_self)),
      _reversed_1(_values_1(_self)),
    );
  },
  "{ :self | RunArray(reversed(runs(self)), reversed(values(self))) }",
);

sl.addMethodToExistingType(
  "RunArray",
  "RunArray",
  "runLengthAt",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _atSetRunOffsetAndValue_3(
      _self,
      _index,
      function (_run, _offset, _value) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _run, _offset, _value";
          throw new Error(errorMessage);
        } /* Statements */
        return _hyphenMinus_2(_at_2(_runs_1(_self), _run), _offset);
      },
    );
  },
  "{ :self :index | atSetRunOffsetAndValue(self, index, { :run :offset :value | -(at(runs(self), run), offset) }) }",
);

sl.addMethodToExistingType(
  "RunArray",
  "RunArray",
  "runsAndValuesCollect",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _withCollect_3(_runs_1(_self), _values_1(_self), _aBlock_2);
  },
  "{ :self :aBlock:/2 | withCollect(runs(self),values(self), aBlock:/2) }",
);

sl.addMethodToExistingType(
  "RunArray",
  "RunArray",
  "runsAndValuesDo",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _withDo_3(_runs_1(_self), _values_1(_self), _aBlock_2);
  },
  "{ :self :aBlock:/2 | withDo(runs(self),values(self), aBlock:/2) }",
);

sl.addMethodToExistingType(
  "RunArray",
  "RunArray",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_runs_1(_self));
  },
  "{ :self | sum(runs(self)) }",
);

sl.addMethodToExistingType(
  "RunArray",
  "RunArray",
  "withIndexDo",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = 0;
    /* Statements */
    return _toDo_3(1, _size_1(_runs_1(_self)), function (_runIndex) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _runIndex";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _run = _at_2(_runs_1(_self), _runIndex);
      let _value = _at_2(_values_1(_self), _runIndex);
      /* Statements */
      return _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSignEqualsSign_2(_run = _hyphenMinus_2(_run, 1), 0);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _index = _plusSign_2(_index, 1);
        return _aBlock_2(_value, _index);
      });
    });
  },
  "{ :self :aBlock:/2 | let index = 0; toDo(1, size(runs(self)), { :runIndex | let run = at(runs(self), runIndex); let value = at(values(self), runIndex); whileTrue({ >=((run := -(run, 1)), 0) }, { index := +(index, 1); aBlock(value, index) }) }) }",
);

sl.addMethodToExistingType(
  "RunArray",
  "RunArray",
  "withStartStopAndValueDo",
  ["self", "aBlock:/3"],
  function (_self, _aBlock_3) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_3";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _start = 1;
    /* Statements */
    return _withDo_3(
      _runs_1(_self),
      _values_1(_self),
      function (_length, _value) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _length, _value";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _stop = _hyphenMinus_2(_plusSign_2(_start, _length), 1);
        /* Statements */
        _aBlock_3(_start, _stop, _value);
        return _start = _plusSign_2(_stop, 1);
      },
    );
  },
  "{ :self :aBlock:/3 | let start = 1; withDo(runs(self), values(self), { :length :value | let stop = -(+(start, length), 1); aBlock(start, stop, value); start := +(stop, 1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "RunArray",
  "asRunArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asRunArrayWith_2(_self, _identity_1);
  },
  "{ :self | asRunArrayWith(self,identity:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "RunArray",
  "asRunArrayWith",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _runs = [];
    let _values = [];
    let _lastLength = 0;
    let _lastValue = null;
    let _lastIndex = null;
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _value = _aBlock_1(_each);
      /* Statements */
      return _if_3(_equalsSign_2(_lastValue, _value), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lastLength = _plusSign_2(_lastLength, 1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _ifTrue_2(_greaterThanSign_2(_lastLength, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _add_2(_runs, _lastLength);
          return _add_2(_values, _lastValue);
        });
        _lastLength = 1;
        return _lastValue = _value;
      });
    });
    _ifTrue_2(_greaterThanSign_2(_lastLength, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _add_2(_runs, _lastLength);
      return _add_2(_values, _lastValue);
    });
    return _RunArray_2(_runs, _values);
  },
  "{ :self :aBlock:/1 | let runs = []; let values = []; let lastLength = 0; let lastValue = nil; let lastIndex = nil; do(self, { :each | let value = aBlock(each); if((=(lastValue, value)), { lastLength := +(lastLength, 1) }, { ifTrue((>(lastLength, 0)), { add(runs,lastLength); add(values,lastValue) }); lastLength := 1; lastValue := value }) }); ifTrue((>(lastLength, 0)), { add(runs,lastLength); add(values,lastValue) }); RunArray(runs, values) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "RunArray",
  "associationListToRunArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _RunArray_2(_collect_2(_self, _key_1), _collect_2(_self, _value_1));
  },
  "{ :self | RunArray(collect(self,key:/1), collect(self,value:/1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "RunArray",
  "RunArray",
  ["self", "values"],
  function (_self, _values) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _values";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_6(
      _newRunArray_0(),
      _self,
      _values,
      null,
      null,
      null,
    );
  },
  "{ :self :values | initializeSlots(newRunArray(),self, values, nil, nil, nil) }",
);
