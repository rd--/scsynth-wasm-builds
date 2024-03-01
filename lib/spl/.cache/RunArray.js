sl.addType(
  false,
  "RunArray",
  "RunArray",
  ["Object", "Indexable"],
  ["runs", "values", "cachedIndex", "cachedRun", "cachedOffset"],
);

sl.copyTraitToType(
  "Object",
  "RunArray",
);

sl.copyTraitToType(
  "Indexable",
  "RunArray",
);

sl.addMethod(
  "RunArray",
  "RunArray",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSignEqualsSign_2(_self, _anObject), function () {
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
      /* Statements */
      return _ampersand_2(_isRunArray_1(_anObject), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ampersand_2(
          _hasEqualElements_2(_runs_1(_self), _runs_1(_anObject)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _hasEqualElements_2(_values_1(_self), _values_1(_anObject));
          },
        );
      });
    });
  },
  "{ :self :anObject |\n\t\t(self == anObject).if {\n\t\t\ttrue\n\t\t} {\n\t\t\tanObject.isRunArray & {\n\t\t\t\tself.runs.hasEqualElements(anObject.runs) & {\n\t\t\t\t\tself.values.hasEqualElements(anObject.values)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "RunArray",
  "RunArray",
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
    let _answer = _List_1(_size_1(_self));
    /* Statements */
    _withIndexDo_2(_self, function (_each, _index) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _index";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(_answer, _index, _each);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = List(self.size);\n\t\tself.withIndexDo { :each :index |\n\t\t\tanswer[index] := each\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "RunArray",
  "RunArray",
  "asBag",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _Bag_0();
    /* Statements */
    _runsAndValuesDo_2(_self, function (_run, _value) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _run, _value";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _addWithOccurrences_3(_answer, _value, _run);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = Bag();\n\t\tself.runsAndValuesDo { :run :value |\n\t\t\tanswer.addWithOccurrences(value, run)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "RunArray",
  "RunArray",
  "asSet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asSet_1(_values_1(_self));
  },
  "{ :self |\n\t\tself.values.asSet\n\t}",
);

sl.addMethod(
  "RunArray",
  "RunArray",
  "allocatedSize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSign_2(_asterisk_2(_size_1(_runs_1(_self)), 2), 3);
  },
  "{ :self |\n\t\tself.runs.size * 2 + 3\n\t}",
);

sl.addMethod(
  "RunArray",
  "RunArray",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _atSetRunOffsetAndValue_3(
      _self,
      _index,
      function (_run, _offset, _value) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _run, _offset, _value";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _ifTrue_2(_lessThanSign_2(_offset, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _errorInvalidIndex_3(_self, "at", _index);
        });
        _ifTrue_2(
          _greaterThanSignEqualsSign_2(_offset, _at_2(_runs_1(_self), _run)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _indexError_2(_self, _index);
          },
        );
        return _value;
      },
    );
  },
  "{ :self :index |\n\t\tself.atSetRunOffsetAndValue(index) { :run :offset :value |\n\t\t\t(offset < 0).ifTrue {\n\t\t\t\tself.errorInvalidIndex('at', index)\n\t\t\t};\n\t\t\t(offset >= self.runs[run]).ifTrue{\n\t\t\t\tself.indexError(index)\n\t\t\t};\n\t\t\tvalue\n\t\t}\n\t}",
);

sl.addMethod(
  "RunArray",
  "RunArray",
  "atSetRunOffsetAndValue",
  ["self", "index", "aBlock:/3"],
  function (_self, _index, _aBlock_3) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _aBlock_3";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
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
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _lessThanSign_2(_index, _cachedIndex_1(_self));
        },
      ),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _run = 1;
        return _offset = _hyphenMinus_2(_index, 1);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
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
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(_lessThanSignEqualsSign_2(_run, _limit), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _greaterThanSignEqualsSign_2(
          _offset,
          _at_2(_runs_1(_self), _run),
        );
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
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
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _run = _hyphenMinus_2(_run, 1);
      return _offset = _plusSign_2(_offset, _at_2(_runs_1(_self), _run));
    });
    return _aBlock_3(_run, _offset, _at_2(_values_1(_self), _run));
  },
  "{ :self :index :aBlock:/3 |\n\t\tlet limit = self.runs.size;\n\t\tlet run = nil;\n\t\tlet offset = nil;\n\t\t(self.cachedIndex == nil | {\n\t\t\tindex < self.cachedIndex\n\t\t}).if {\n\t\t\trun := 1;\n\t\t\toffset := index - 1\n\t\t} {\n\t\t\trun := self.cachedRun;\n\t\t\toffset := self.cachedOffset + (index - self.cachedIndex)\n\t\t};\n\t\t{\n\t\t\trun <= limit & {\n\t\t\t\toffset >= self.runs[run]\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\toffset := offset - self.runs[run];\n\t\t\trun := run + 1\n\t\t};\n\t\tself.cachedIndex := index;\n\t\tself.cachedRun := run;\n\t\tself.cachedOffset := offset;\n\t\t(run > limit).ifTrue {\n\t\t\trun := run - 1;\n\t\t\toffset := offset + self.runs[run]\n\t\t};\n\t\taBlock(run, offset, self.values[run])\n\t}",
);

sl.addMethod(
  "RunArray",
  "RunArray",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _toDo_3(1, _size_1(_runs_1(_self)), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _run = _at_2(_runs_1(_self), _index);
      let _value = _at_2(_values_1(_self), _index);
      /* Statements */
      return _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _run = _hyphenMinus_2(_run, 1);
        return _greaterThanSignEqualsSign_2(_run, 0);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _aBlock_1(_value);
      });
    });
  },
  "{ :self :aBlock:/1 |\n\t\t1.toDo(self.runs.size) { :index |\n\t\t\tlet run = self.runs[index];\n\t\t\tlet value = self.values[index];\n\t\t\t{\n\t\t\t\trun := run - 1;\n\t\t\t\trun >= 0\n\t\t\t}.whileTrue {\n\t\t\t\taBlock(value)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "RunArray",
  "RunArray",
  "first",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _at_2(_values_1(_self), 1);
  },
  "{ :self |\n\t\tself.values[1]\n\t}",
);

sl.addMethod(
  "RunArray",
  "RunArray",
  "includes",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _includes_2(_values_1(_self), _anObject);
  },
  "{ :self :anObject |\n\t\tself.values.includes(anObject)\n\t}",
);

sl.addMethod(
  "RunArray",
  "RunArray",
  "isSorted",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isSorted_1(_values_1(_self));
  },
  "{ :self |\n\t\tself.values.isSorted\n\t}",
);

sl.addMethod(
  "RunArray",
  "RunArray",
  "isSortedBy",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isSortedBy_2(_values_1(_self), _aBlock_2);
  },
  "{ :self :aBlock:/2 |\n\t\tself.values.isSortedBy(aBlock:/2)\n\t}",
);

sl.addMethod(
  "RunArray",
  "RunArray",
  "last",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _at_2(_values_1(_self), _size_1(_values_1(_self)));
  },
  "{ :self |\n\t\tself.values[self.values.size]\n\t}",
);

sl.addMethod(
  "RunArray",
  "RunArray",
  "postCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _runs_2(_self, _copy_1(_runs_1(_self)));
    return _values_2(_self, _copy_1(_values_1(_self)));
  },
  "{ :self |\n\t\tself.runs := self.runs.copy;\n\t\tself.values := self.values.copy\n\t}",
);

sl.addMethod(
  "RunArray",
  "RunArray",
  "reversed",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _RunArray_2(
      _reversed_1(_runs_1(_self)),
      _reversed_1(_values_1(_self)),
    );
  },
  "{ :self |\n\t\tRunArray(self.runs.reversed, self.values.reversed)\n\t}",
);

sl.addMethod(
  "RunArray",
  "RunArray",
  "runLengthAt",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _atSetRunOffsetAndValue_3(
      _self,
      _index,
      function (_run, _offset, _value) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _run, _offset, _value";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _hyphenMinus_2(_at_2(_runs_1(_self), _run), _offset);
      },
    );
  },
  "{ :self :index |\n\t\tself.atSetRunOffsetAndValue(index) { :run :offset :value |\n\t\t\tself.runs[run] - offset\n\t\t}\n\t}",
);

sl.addMethod(
  "RunArray",
  "RunArray",
  "runsAndValuesCollect",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _withCollect_3(_runs_1(_self), _values_1(_self), _aBlock_2);
  },
  "{ :self :aBlock:/2 |\n\t\tself.runs.withCollect(self.values, aBlock:/2)\n\t}",
);

sl.addMethod(
  "RunArray",
  "RunArray",
  "runsAndValuesDo",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _withDo_3(_runs_1(_self), _values_1(_self), _aBlock_2);
  },
  "{ :self :aBlock:/2 |\n\t\tself.runs.withDo(self.values, aBlock:/2)\n\t}",
);

sl.addMethod(
  "RunArray",
  "RunArray",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sum_1(_runs_1(_self));
  },
  "{ :self |\n\t\tself.runs.sum\n\t}",
);

sl.addMethod(
  "RunArray",
  "RunArray",
  "withIndexDo",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _index = 0;
    /* Statements */
    return _toDo_3(1, _size_1(_runs_1(_self)), function (_runIndex) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _runIndex";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _run = _at_2(_runs_1(_self), _runIndex);
      let _value = _at_2(_values_1(_self), _runIndex);
      /* Statements */
      return _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _greaterThanSignEqualsSign_2(_run = _hyphenMinus_2(_run, 1), 0);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _index = _plusSign_2(_index, 1);
        return _aBlock_2(_value, _index);
      });
    });
  },
  "{ :self :aBlock:/2 |\n\t\tlet index = 0;\n\t\t1.toDo(self.runs.size) { :runIndex |\n\t\t\tlet run = self.runs[runIndex];\n\t\t\tlet value = self.values[runIndex];\n\t\t\t{\n\t\t\t\t(run := run - 1) >= 0\n\t\t\t}.whileTrue {\n\t\t\t\tindex := index + 1;\n\t\t\t\taBlock(value, index)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "RunArray",
  "RunArray",
  "withStartStopAndValueDo",
  ["self", "aBlock:/3"],
  function (_self, _aBlock_3) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_3";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _start = 1;
    /* Statements */
    return _withDo_3(
      _runs_1(_self),
      _values_1(_self),
      function (_length, _value) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _length, _value";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _stop = _hyphenMinus_2(_plusSign_2(_start, _length), 1);
        /* Statements */
        _aBlock_3(_start, _stop, _value);
        return _start = _plusSign_2(_stop, 1);
      },
    );
  },
  "{ :self :aBlock:/3 |\n\t\tlet start = 1;\n\t\tself.runs.withDo(self.values) { :length :value |\n\t\t\tlet stop = start + length - 1;\n\t\t\taBlock(start, stop, value);\n\t\t\tstart := stop + 1\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "RunArray",
  "asRunArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asRunArrayWith_2(_self, _identity_1);
  },
  "{ :self |\n\t\tself.asRunArrayWith(identity:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "RunArray",
  "asRunArrayWith",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
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
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _value = _aBlock_1(_each);
      /* Statements */
      return _if_3(_equalsSign_2(_lastValue, _value), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _lastLength = _plusSign_2(_lastLength, 1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _ifTrue_2(_greaterThanSign_2(_lastLength, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
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
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _add_2(_runs, _lastLength);
      return _add_2(_values, _lastValue);
    });
    return _RunArray_2(_runs, _values);
  },
  "{ :self :aBlock:/1 |\n\t\tlet runs = [];\n\t\tlet values = [];\n\t\tlet lastLength = 0;\n\t\tlet lastValue = nil;\n\t\tlet lastIndex = nil;\n\t\tself.do { :each |\n\t\t\tlet value = aBlock(each);\n\t\t\t(lastValue = value).if {\n\t\t\t\tlastLength := lastLength + 1\n\t\t\t} {\n\t\t\t\t(lastLength > 0).ifTrue {\n\t\t\t\t\truns.add(lastLength);\n\t\t\t\t\tvalues.add(lastValue)\n\t\t\t\t};\n\t\t\t\tlastLength := 1;\n\t\t\t\tlastValue := value\n\t\t\t}\n\t\t};\n\t\t(lastLength > 0).ifTrue {\n\t\t\truns.add(lastLength);\n\t\t\tvalues.add(lastValue)\n\t\t};\n\t\tRunArray(runs, values)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "RunArray",
  "associationListToRunArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _RunArray_2(_collect_2(_self, _key_1), _collect_2(_self, _value_1));
  },
  "{ :self |\n\t\tRunArray(\n\t\t\tself.collect(key:/1),\n\t\t\tself.collect(value:/1)\n\t\t)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "RunArray",
  "RunArray",
  ["self", "values"],
  function (_self, _values) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _values";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_6(
      _newRunArray_0(),
      _self,
      _values,
      null,
      null,
      null,
    );
  },
  "{ :self :values |\n\t\tnewRunArray().initializeSlots(self, values, nil, nil, nil)\n\t}",
);
